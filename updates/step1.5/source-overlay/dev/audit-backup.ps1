$projectRoot = (Resolve-Path '.').Path
$archivePath = 'D:\Vertexline Studio\Game\Kurukshetra\backup\Kurukshetra Astra Warfare Backups\Kurukshetra Astra Warfare Backups-20261019T193322Z-1-001.zip'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$outer = [IO.Compression.ZipFile]::OpenRead($archivePath)
$baseline = [Collections.Generic.HashSet[string]]::new()
$changed = [Collections.Generic.List[string]]::new()
try {
 foreach ($part in $outer.Entries) {
  $memory = [IO.MemoryStream]::new()
  $inputStream = $part.Open()
  $inputStream.CopyTo($memory)
  $inputStream.Dispose()
  $memory.Position = 0
  $inner = [IO.Compression.ZipArchive]::new($memory,[IO.Compression.ZipArchiveMode]::Read)
  foreach ($entry in $inner.Entries) {
   $relative = $entry.FullName -replace '^Kurukshetra_Astra_Warfare_v64/',''
   if (-not $entry.Name) { continue }
   [void]$baseline.Add($relative)
   if ($relative -notmatch '^(web|server|scripts|db|drizzle)/|^package.*json$') { continue }
   if ($relative -notmatch '\.(js|cjs|mjs|ts|sql|css|html|json)$') { continue }
   $candidate = [IO.Path]::GetFullPath((Join-Path $projectRoot $relative))
   if (-not $candidate.StartsWith($projectRoot+[IO.Path]::DirectorySeparatorChar)) { throw 'Archive path outside project' }
   if (-not (Test-Path -LiteralPath $candidate)) { $changed.Add("MISSING $relative"); continue }
   $stream = $entry.Open()
   $sha = [Security.Cryptography.SHA256]::Create()
   $before = [Convert]::ToHexString($sha.ComputeHash($stream))
   $stream.Dispose(); $sha.Dispose()
   $after = (Get-FileHash -LiteralPath $candidate -Algorithm SHA256).Hash
   if ($before -ne $after) { $changed.Add($relative) }
  }
  $inner.Dispose(); $memory.Dispose()
 }
} finally { $outer.Dispose() }
$newFiles = @(rg --files web server scripts db drizzle docs dev production/cosmetics | Where-Object { -not $baseline.Contains($_.Replace('\','/')) })
@{ changed=@($changed); added=$newFiles } | ConvertTo-Json -Depth 3 | Set-Content -LiteralPath 'docs/treasury-file-changes.json'
$changed
"New files: $($newFiles.Count)"
