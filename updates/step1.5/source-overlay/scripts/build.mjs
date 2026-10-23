import './build-referee.mjs';
import {cp,mkdir,rm,writeFile,readFile} from 'node:fs/promises';
await cp('web/cosmetic-catalog.js','server/cosmetic-catalog.js');
await cp('web/character-access-config.js','server/character-access-config.js');
await rm('dist',{recursive:true,force:true});await mkdir('dist/server',{recursive:true});await mkdir('dist/.openai',{recursive:true});await cp('web','dist/client',{recursive:true});await cp('server','dist/server',{recursive:true});await cp('.openai/hosting.json','dist/.openai/hosting.json');await cp('drizzle','dist/.openai/drizzle',{recursive:true});console.log('Built game assets, multiplayer Worker and migrations.');
if(process.env.FATE_DEV==='1'){
 await cp('dev/fate-debug.js','dist/client/fate-debug.js');
 let html=await readFile('dist/client/index.html','utf8');
 await writeFile('dist/client/index.html',html.replace('</body>','<script src="fate-debug.js"></script></body>'));
 console.log('Development-only Fate controls included. Do not publish this build.');
}
if(process.env.ASTRA_DEV==='1'){
 await cp('dev/astra-debug.js','dist/client/astra-debug.js');
 const html=await readFile('dist/client/index.html','utf8');
 await writeFile('dist/client/index.html',html.replace('</body>','<script src="astra-debug.js"></script></body>'));
 console.log('Development-only Astra lab included. Do not publish this build.');
}
if(process.env.MATCHUP_DEV==='1'){
 await cp('dev/matchup-debug.js','dist/client/matchup-debug.js');
 const html=await readFile('dist/client/index.html','utf8');
 await writeFile('dist/client/index.html',html.replace('</body>','<script src="matchup-debug.js"></script></body>'));
 console.log('Development-only matchup alignment and timeline lab included. Do not publish.');
}
if(process.env.HOME_DEV==='1'){
 await cp('dev/home-layout-debug.js','dist/client/home-layout-debug.js');
 const html=await readFile('dist/client/index.html','utf8');
 await writeFile('dist/client/index.html',html.replace('</body>','<script src="home-layout-debug.js"></script></body>'));
 console.log('Development-only home alignment overlay included. Do not publish.');
}
if(process.env.QUIVER_DEV==='1'){
 await cp('dev/quiver-debug.js','dist/client/quiver-debug.js');
 const html=await readFile('dist/client/index.html','utf8');
 await writeFile('dist/client/index.html',html.replace('</body>','<script src="quiver-debug.js"></script></body>'));
 console.log('Development-only tactical arrow lab included. Do not publish.');
}
if(process.env.FX_DEV==='1'){
 await cp('dev/fx-debug.js','dist/client/fx-debug.js');
 const html=await readFile('dist/client/index.html','utf8');
 await writeFile('dist/client/index.html',html.replace('</body>','<script src="fx-debug.js"></script></body>'));
 console.log('Development-only FX viewer included. Do not publish this build.');
}
