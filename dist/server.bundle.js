!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(e,n){e.exports=require("fs")},function(e,n,t){e.exports=t(2)},function(e,n,t){var r=t(3),i=(t(4),t(5)),o=t(0),a=t(6),l=(a.getConfigFileValue(),a.getPortValue()),u=function(e,n){var t=JSON.parse(n);o.writeFile("dataset/"+e,JSON.stringify(t,null,4),function(e){e?console.log("Error in saving file :"+e):console.log("file saved!")})},s=function(e){var n=JSON.parse(e);o.writeFile("src/common/studyList.json",JSON.stringify(n,null,4),function(e){e?console.log("Error in saving file "):console.log("file studyList.json updated successfully saved!")})},c=function(e){var n=JSON.parse(e);console.log(n.file.length);for(var t=0;t<n.file.length;t++)o.writeFile("src/common/studies/"+n.file[t].fileName+".json",JSON.stringify(n.file[t].fileData,null,4),function(e){e&&console.log("Error in saving file:\n"+e),console.log("patients file created successfully:")})};r.createServer(function(e,n){if("SaveFile"==e.url||"/SaveFile"==e.url||"./SaveFile"==e.url){var t="";e.on("data",function(e){t+=e}),e.on("end",function(){var e=JSON.parse(t);u(e.path,t)})}if("UpdatePatients"==e.url||"/UpdatePatients"==e.url||"./UpdatePatients"==e.url){console.log("update patients");var r="";e.on("data",function(e){r+=e}),e.on("end",function(){n.writeHead(200,{"Content-Type":"text/plain"}),n.end("success"),s(r)})}if("UpdatePatientFile"==e.url||"/UpdatePatientFile"==e.url||"./UpdatePatientFile"==e.url){console.log("update patients files in studies/<file>");var a="";e.on("data",function(e){a+=e}),e.on("end",function(){n.writeHead(200,{"Content-Type":"text/plain"}),n.end("success"),c(a)})}var l="."+e.url;"./"==l&&(l="../public/index.html");var f=i.extname(l),p="text/html";switch(f){case".js":p="text/javascript";break;case".css":p="text/css";break;case".json":p="application/json";break;case".png":p="image/png";break;case".jpg":p="image/jpg";break;case".wav":p="audio/wav"}o.readFile(l,function(e,t){e?"ENOENT"==e.code?o.readFile("../public/404.html",function(e,t){n.writeHead(200,{"Content-Type":p}),n.end(t,"utf-8")}):(n.writeHead(500),n.end("Sorry, check with the site admin for error: "+e.code+" ..\n"),n.end()):(n.writeHead(200,{"Content-Type":p}),n.end(t,"utf-8"))})}).listen(l)},function(e,n){e.exports=require("http")},function(e,n){e.exports=require("url")},function(e,n){e.exports=require("path")},function(e,n,t){var r=t(0),n=e.exports={},i="config",o=i+"/",a=""+o,l=a+"env.json",u=r.readFileSync(l,"utf8"),s=JSON.parse(u),i=s.environment,c=i+".json",f=o+c,p=r.readFileSync(f,"utf8"),d=JSON.parse(p),g=d.dicomServer,v=d.mainServer,m=v[0].port,x=v[0].hostname,S=g[0].port,y=g[0].hostname,h=g[0].transferProtocol,F=g[0].prefix,P=g[0].portEscape,j=h+F,w=P+S,O=y+w,N=j+O;n.getConfigFileValue=function(){return i},n.getPortValue=function(){return m},n.getHostnameValue=function(){return x},n.getTransferProtocolValue=function(){return h},n.getPrefixDicomValue=function(){return F},n.getPortEscapeDicomValue=function(){return P},n.getUrlLinkDicomValue=function(){return N}}]);