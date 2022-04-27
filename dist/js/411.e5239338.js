"use strict";(self["webpackChunkcsa_auth"]=self["webpackChunkcsa_auth"]||[]).push([[411],{6411:function(e,t,i){i.r(t),i.d(t,{default:function(){return R}});var r=i(3396),n=i(7139);const s={class:"post mb-4"},a=(0,r._)("h1",{style:{"margin-top":"120px"}},"Add a new post",-1),o=(0,r._)("h2",{id:"txtName"},null,-1),l={id:"form"},c=(0,r._)("div",null,[(0,r._)("label",{for:"name",class:"form-label"},"Post name"),(0,r._)("br"),(0,r._)("input",{style:{height:"50px",width:"50%",margin:"10px","border-radius":"5px",padding:"5px"},type:"text",name:"name",id:"name",placeholder:"Give your post a name"}),(0,r._)("br"),(0,r._)("label",{for:"desc",class:"form-label"},"Description"),(0,r._)("br"),(0,r._)("textarea",{style:{height:"100px",width:"50%",margin:"10px","border-radius":"5px",padding:"5px"},name:"desc",id:"desc",placeholder:"Add a descreption"}),(0,r._)("br")],-1),h={for:"cameraFileInput"},d=(0,r._)("span",{class:"btn btn-primary"},"Open Photo",-1),u=(0,r._)("br",null,null,-1),g=(0,r._)("img",{id:"pictureFromCamera",class:"img-fluid"},null,-1),p=(0,r._)("br",null,null,-1),m=(0,r._)("h1",null,"Your location: ",-1),b={ref:"mapDiv",style:{witdth:"100%",height:"40vh","margin-left":"10%","margin-right":"10%","margin-top":"20px","margin-bottom":"20px","border-radius":"15px"}},f=(0,r._)("div",null,[(0,r._)("h3",{id:"location"})],-1);function v(e,t,i,v,y,w){return(0,r.wg)(),(0,r.iD)("div",s,[a,o,(0,r._)("div",null,[(0,r._)("form",l,[c,(0,r._)("label",h,[d,(0,r._)("input",{onChange:t[0]||(t[0]=(...e)=>w.openCamera&&w.openCamera(...e)),style:{display:"none"},id:"cameraFileInput",type:"file",accept:"image/*",capture:"environment"},null,32)]),u,g,p,(0,r._)("div",null,[m,(0,r._)("p",null,(0,n.zw)(v.currPos.lat.toFixed(2))+" latitude, "+(0,n.zw)(v.currPos.lng.toFixed(2))+" longitude",1)]),(0,r._)("div",b,null,512),f,(0,r._)("button",{class:"btn mt-4",style:{"background-color":"#7EA3F1",color:"black",height:"50px",width:"150px"},onClick:t[1]||(t[1]=(...e)=>w.submit&&w.submit(...e)),type:"button",id:"add"},"Submit")])])])}var y=i(6056),w=i(4870);function I(){const e=(0,w.iH)({latitude:50,longitude:19}),t="navigator"in window&&"geolocation"in navigator;let i=null;return(0,r.bv)((()=>{t&&(i=navigator.geolocation.watchPosition((t=>e.value=t.coords)))})),(0,r.Ah)((()=>{i&&navigator.geolocation.clearWatch(i)})),{coords:e,isSuported:t}}function _(e){return new Promise((t=>setTimeout(t,e)))}i(1703);var k=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,n,s;if(Array.isArray(t)){if(r=t.length,r!=i.length)return!1;for(n=r;0!==n--;)if(!e(t[n],i[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if(s=Object.keys(t),r=s.length,r!==Object.keys(i).length)return!1;for(n=r;0!==n--;)if(!Object.prototype.hasOwnProperty.call(i,s[n]))return!1;for(n=r;0!==n--;){var a=s[n];if(!e(t[a],i[a]))return!1}return!0}return t!==t&&i!==i};const C="__googleMapsScriptId";var x;(function(e){e[e["INITIALIZED"]=0]="INITIALIZED",e[e["LOADING"]=1]="LOADING",e[e["SUCCESS"]=2]="SUCCESS",e[e["FAILURE"]=3]="FAILURE"})(x||(x={}));class S{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:r,id:n=C,language:s,libraries:a=[],mapIds:o,nonce:l,region:c,retries:h=3,url:d="https://maps.googleapis.com/maps/api/js",version:u}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=r,this.id=n||C,this.language=s,this.libraries=a,this.mapIds=o,this.nonce=l,this.region=c,this.retries=h,this.url=d,this.version=u,S.instance){if(!k(this.options,S.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(S.instance.options)}`);return S.instance}S.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?x.FAILURE:this.done?x.SUCCESS:this.loading?x.LOADING:x.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((i=>{i?t(i.error):e(window.google)}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}var E=i(3329),A=i(2087);const F="AIzaSyDyqHkcm_TuRmnxsHJ9k6GHRbGa1Tt0zpA";var P={name:"App",setup(){const{coords:e}=I(),t=(0,r.Fl)((()=>({lat:e.value.latitude,lng:e.value.longitude}))),i=new S({apiKey:F}),n=(0,w.iH)(null);return(0,r.bv)((async()=>{await i.load();while(50==t.value.lat&&19==t.value.lng)window.console.log("Awaiting Coords"),await _(500);window.console.log("Centering Lat: "+t.value.lat),window.console.log("Centering Lng: "+t.value.lng);const e=new google.maps.Map(n.value,{center:t.value,zoom:18});new google.maps.Marker({position:t.value,map:e,title:"You are here!"})})),{currPos:t,mapDiv:n}},data(){return{selectedFile64:null,imageBase64Stringsep:null,pathImage:null}},mounted(){},methods:{vibrate(){navigator.vibrate(500),console.log("I vibrated!")},submit(){const e=document.getElementById("desc").value,t="",i=document.getElementById("name").value,r=y.I8.currentUser.uid,n=this.currPos.lat.toFixed(4)+", "+this.currPos.lng.toFixed(4),s=y.I8.currentUser.email,a=s.substring(0,s.indexOf("@")),o={post_name:i,description:e,location:n,uid:r,username:a,path:t};console.log(this.id),y.db.collection("posts").add(o).then((()=>{window.console.log("Post added!"),this.vibrate()})),E.Z.push("/")},openCamera(){var e=document.querySelector("input[type=file]")["files"][0],t=new FileReader;console.log("reader init"),t.onload=function(){this.selectedFile64=t.result,this.imageBase64Stringsep=this.selectedFile64,console.log(this.selectedFile64),document.getElementById("pictureFromCamera").setAttribute("src",this.selectedFile64);const e=document.getElementById("desc").value,i=y.I8.currentUser.email,r=i.substring(0,i.indexOf("@")),n=document.getElementById("name").value,s=r+"-"+n+"-"+e;console.log(s),this.pathImage="cars/"+s+".jpg";const a=(0,y.iH)(y.tO,this.pathImage);(0,A.sf)(a,this.selectedFile64,"data_url").then((e=>{console.log("The photo has been sent in path cars/"+s+".jpg")}))},t.readAsDataURL(e)}}},O=i(89);const L=(0,O.Z)(P,[["render",v]]);var R=L}}]);
//# sourceMappingURL=411.e5239338.js.map