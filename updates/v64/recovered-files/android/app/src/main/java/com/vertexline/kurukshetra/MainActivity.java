package com.vertexline.kurukshetra;
import android.app.Activity;
import android.app.AlertDialog;
import android.os.Bundle;
import android.content.Intent;
import android.content.DialogInterface;
import android.net.Uri;
import android.view.View;
import android.view.WindowManager;
import android.webkit.*;
import java.io.*;
import java.util.*;
public final class MainActivity extends Activity {
 private WebView game;
 private static final String HOST="kurukshetra-astra-warfare.spidey245.chatgpt.site";
 @Override public void onCreate(Bundle state){super.onCreate(state);getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);game=new WebView(this);setContentView(game);immersive();
 WebSettings settings=game.getSettings();settings.setJavaScriptEnabled(true);settings.setDomStorageEnabled(true);settings.setAllowFileAccess(false);settings.setAllowContentAccess(false);settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);settings.setMediaPlaybackRequiresUserGesture(true);settings.setBuiltInZoomControls(false);settings.setSupportZoom(false);CookieManager.getInstance().setAcceptThirdPartyCookies(game,false);
 game.setWebChromeClient(new WebChromeClient(){@Override public boolean onJsAlert(WebView view,String url,String message,JsResult result){new AlertDialog.Builder(MainActivity.this).setMessage(message).setPositiveButton("OK",new DialogInterface.OnClickListener(){public void onClick(DialogInterface d,int w){result.confirm();}}).setOnCancelListener(new DialogInterface.OnCancelListener(){public void onCancel(DialogInterface d){result.cancel();}}).show();return true;}});
 game.setWebViewClient(new WebViewClient(){
 @Override public WebResourceResponse shouldInterceptRequest(WebView view,WebResourceRequest request){Uri u=request.getUrl();if(!HOST.equals(u.getHost())||!"https".equals(u.getScheme()))return null;String p=u.getPath();if(!"GET".equals(request.getMethod())||p==null||p.startsWith("/api/")||p.startsWith("/_"))return null;if(p.contains(".."))return missing();if(p.equals("/"))p="/index.html";try{
 String file="www"+p;InputStream stream=getAssets().open(file);long total=stream.available(),start=0,end=total-1;String range=request.getRequestHeaders().get("Range");if(range==null)range=request.getRequestHeaders().get("range");boolean partial=range!=null&&range.startsWith("bytes=");
 if(partial){String[] parts=range.substring(6).split("-",-1);if(parts.length!=2)throw new IOException();if(parts[0].isEmpty())start=Math.max(0,total-Long.parseLong(parts[1]));else{start=Long.parseLong(parts[0]);if(!parts[1].isEmpty())end=Math.min(end,Long.parseLong(parts[1]));}if(start<0||start>=total||end<start){stream.close();return new WebResourceResponse("text/plain",null,416,"Range Not Satisfiable",Collections.singletonMap("Content-Range","bytes */"+total),new ByteArrayInputStream(new byte[0]));}long left=start;while(left>0){long skipped=stream.skip(left);if(skipped<=0)throw new IOException();left-=skipped;}}
 String ext=file.substring(file.lastIndexOf('.')+1);String mime=ext.equals("js")?"application/javascript":ext.equals("css")?"text/css":ext.equals("html")?"text/html":ext.equals("json")||ext.equals("webmanifest")?"application/json":ext.equals("svg")?"image/svg+xml":ext.equals("png")?"image/png":ext.equals("jpg")?"image/jpeg":ext.equals("webp")?"image/webp":ext.equals("mp4")?"video/mp4":ext.equals("mp3")?"audio/mpeg":ext.equals("ogg")?"audio/ogg":ext.equals("wav")?"audio/wav":"application/octet-stream";
 Map<String,String> headers=new HashMap<>();headers.put("Cache-Control","no-store");headers.put("Accept-Ranges","bytes");headers.put("Content-Length",String.valueOf(end-start+1));if(partial)headers.put("Content-Range","bytes "+start+"-"+end+"/"+total);
 return new WebResourceResponse(mime,null,partial?206:200,partial?"Partial Content":"OK",headers,new LimitedStream(stream,end-start+1));}catch(Exception e){return missing();}}

 @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest r){Uri u=r.getUrl();if(HOST.equals(u.getHost())&&"https".equals(u.getScheme()))return false;if("https".equals(u.getScheme()))try{startActivity(new Intent(Intent.ACTION_VIEW,u));}catch(Exception ignored){}return true;}
 });game.loadUrl("https://"+HOST+"/index.html?native=1");}
 private static final class LimitedStream extends FilterInputStream {private long remaining;LimitedStream(InputStream in,long count){super(in);remaining=count;}@Override public int read()throws IOException{if(remaining<=0)return -1;int value=super.read();if(value>=0)remaining--;return value;}@Override public int read(byte[] b,int off,int len)throws IOException{if(remaining<=0)return -1;int n=super.read(b,off,(int)Math.min(len,remaining));if(n>0)remaining-=n;return n;}}
 private WebResourceResponse missing(){return new WebResourceResponse("text/plain","UTF-8",404,"Not Found",Collections.emptyMap(),new ByteArrayInputStream(new byte[0]));}
 private void immersive(){getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY|View.SYSTEM_UI_FLAG_FULLSCREEN|View.SYSTEM_UI_FLAG_HIDE_NAVIGATION|View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN|View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION|View.SYSTEM_UI_FLAG_LAYOUT_STABLE);}
 @Override public void onWindowFocusChanged(boolean focus){super.onWindowFocusChanged(focus);if(focus)immersive();}
 @Override protected void onPause(){game.evaluateJavascript("if(typeof paused!=='undefined'&&!atHome&&!paused&&!ended)togglePause();",null);game.onPause();super.onPause();}
 @Override protected void onResume(){super.onResume();if(game!=null)game.onResume();}
 @Override public void onBackPressed(){new AlertDialog.Builder(this).setTitle("Leave the game?").setMessage("An online duel will disconnect when you leave.").setPositiveButton("Exit",new DialogInterface.OnClickListener(){public void onClick(DialogInterface d,int w){game.evaluateJavascript("if(typeof home==='function')home();",null);finish();}}).setNegativeButton("Keep playing",null).show();}
 @Override protected void onDestroy(){game.destroy();super.onDestroy();}
}
