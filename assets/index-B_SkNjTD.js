var hc=Object.defineProperty;var uc=(s,e,t)=>e in s?hc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>uc(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="160",pc=0,Ma=1,fc=2,bl=1,Ml=2,Mn=3,Hn=0,Bt=1,En=2,Nn=0,Ii=1,Ea=2,Sa=3,wa=4,mc=5,Kn=100,gc=101,xc=102,Ta=103,Aa=104,yc=200,vc=201,_c=202,bc=203,Gr=204,Vr=205,Mc=206,Ec=207,Sc=208,wc=209,Tc=210,Ac=211,Cc=212,Rc=213,Dc=214,Lc=0,Pc=1,Ic=2,Bs=3,kc=4,Uc=5,Fc=6,Nc=7,El=0,Bc=1,Oc=2,Bn=0,zc=1,Hc=2,Gc=3,Sl=4,Vc=5,Wc=6,wl=300,Ui=301,Fi=302,Wr=303,$r=304,Zs=306,Xr=1e3,on=1001,qr=1002,wt=1003,Ca=1004,sr=1005,Jt=1006,$c=1007,es=1008,On=1009,Xc=1010,qc=1011,ra=1012,Tl=1013,Un=1014,Fn=1015,ts=1016,Al=1017,Cl=1018,si=1020,jc=1021,ln=1023,Yc=1024,Kc=1025,ri=1026,Ni=1027,Rl=1028,Dl=1029,Zc=1030,Ll=1031,Pl=1033,rr=33776,ar=33777,or=33778,lr=33779,Ra=35840,Da=35841,La=35842,Pa=35843,Il=36196,Ia=37492,ka=37496,Ua=37808,Fa=37809,Na=37810,Ba=37811,Oa=37812,za=37813,Ha=37814,Ga=37815,Va=37816,Wa=37817,$a=37818,Xa=37819,qa=37820,ja=37821,cr=36492,Ya=36494,Ka=36495,Jc=36283,Za=36284,Ja=36285,Qa=36286,kl=3e3,ai=3001,Qc=3200,ed=3201,aa=0,td=1,en="",At="srgb",Tn="srgb-linear",oa="display-p3",Js="display-p3-linear",Os="linear",rt="srgb",zs="rec709",Hs="p3",di=7680,eo=519,nd=512,id=513,sd=514,Ul=515,rd=516,ad=517,od=518,ld=519,jr=35044,to="300 es",Yr=1035,wn=2e3,Gs=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dr=Math.PI/180,Kr=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ht(s,e,t){return Math.max(e,Math.min(t,s))}function cd(s,e){return(s%e+e)%e}function hr(s,e,t){return(1-t)*s+t*e}function no(s){return(s&s-1)===0&&s!==0}function Zr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],m=n[5],g=n[8],x=i[0],f=i[3],p=i[6],S=i[1],E=i[4],T=i[7],P=i[2],C=i[5],A=i[8];return r[0]=a*x+o*S+l*P,r[3]=a*f+o*E+l*C,r[6]=a*p+o*T+l*A,r[1]=c*x+d*S+h*P,r[4]=c*f+d*E+h*C,r[7]=c*p+d*T+h*A,r[2]=u*x+m*S+g*P,r[5]=u*f+m*E+g*C,r[8]=u*p+m*T+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,m=c*r-a*l,g=t*h+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*c-d*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(d*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new He;function Fl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dd(){const s=Vs("canvas");return s.style.display="block",s}const io={};function Qi(s){s in io||(io[s]=!0,console.warn(s))}const so=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ro=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Tn]:{transfer:Os,primaries:zs,toReference:s=>s,fromReference:s=>s},[At]:{transfer:rt,primaries:zs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Js]:{transfer:Os,primaries:Hs,toReference:s=>s.applyMatrix3(ro),fromReference:s=>s.applyMatrix3(so)},[oa]:{transfer:rt,primaries:Hs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ro),fromReference:s=>s.applyMatrix3(so).convertLinearToSRGB()}},hd=new Set([Tn,Js]),Je={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!hd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=os[e].toReference,i=os[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return os[s].primaries},getTransfer:function(s){return s===en?Os:os[s].transfer}};function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hi;class Nl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=Vs("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0;class Bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(fr(i[a].image)):r.push(fr(i[a]))}else r=fr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pd=0;class Ot extends Oi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=on,i=on,r=Jt,a=es,o=ln,l=On,c=Ot.DEFAULT_ANISOTROPY,d=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=zn(),this.name="",this.source=new Bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ai?At:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?ai:kl}set encoding(e){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ai?At:en}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=wl;Ot.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],g=l[9],x=l[2],f=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(m+1)/2,P=(p+1)/2,C=(d+u)/4,A=(h+x)/4,$=(g+f)/4;return E>T&&E>P?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=C/n,r=A/n):T>P?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=C/i,r=$/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=$/r),this.set(n,i,r,t),this}let S=Math.sqrt((f-g)*(f-g)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-x)/S,this.z=(u-d)/S,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?At:en),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ol extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class md extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==u||c!==m||d!==g){let f=1-o;const p=l*u+c*m+d*g+h*x,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const P=Math.sqrt(E),C=Math.atan2(P,p*S);f=Math.sin(f*C)/P,o=Math.sin(o*C)/P}const T=o*S;if(l=l*f+u*T,c=c*f+m*T,d=d*f+g*T,h=h*f+x*T,f===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*h+l*m-c*u,e[t+1]=l*g+d*u+c*h-o*m,e[t+2]=c*g+d*m+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(r/2),u=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"YXZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"ZXY":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"ZYX":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"YZX":this._x=u*d*h+c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h-u*m*g;break;case"XZY":this._x=u*d*h-c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-r*l,this._y=i*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ao.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=i+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new R,ao=new is;class Cn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),cs.subVectors(this.max,Gi),ui.subVectors(e.a,Gi),pi.subVectors(e.b,Gi),fi.subVectors(e.c,Gi),Rn.subVectors(pi,ui),Dn.subVectors(fi,pi),Wn.subVectors(ui,fi);let t=[0,-Rn.z,Rn.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,Rn.z,0,-Rn.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-Rn.y,Rn.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!gr(t,ui,pi,fi,cs)||(t=[1,0,0,0,1,0,0,0,1],!gr(t,ui,pi,fi,cs))?!1:(ds.crossVectors(Rn,Dn),t=[ds.x,ds.y,ds.z],gr(t,ui,pi,fi,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new R,new R,new R,new R,new R,new R,new R,new R],nn=new R,ls=new Cn,ui=new R,pi=new R,fi=new R,Rn=new R,Dn=new R,Wn=new R,Gi=new R,cs=new R,ds=new R,$n=new R;function gr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){$n.fromArray(s,r);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),d=n.dot($n);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const gd=new Cn,Vi=new R,xr=new R;class la{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(xr)),this.expandByPoint(Vi.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new R,yr=new R,hs=new R,Ln=new R,vr=new R,us=new R,_r=new R;class xd{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yr.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=Ln.dot(this.direction),l=-Ln.dot(hs),c=Ln.lengthSq(),d=Math.abs(1-a*a);let h,u,m,g;if(d>0)if(h=a*l-o,u=a*o-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const x=1/d;h*=x,u*=x,m=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yr).addScaledVector(hs,u),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,i,r){vr.subVectors(t,e),us.subVectors(n,e),_r.crossVectors(vr,us);let a=this.direction.dot(_r),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(us.crossVectors(Ln,us));if(l<0)return null;const c=o*this.direction.dot(vr.cross(Ln));if(c<0||l+c>a)return null;const d=-o*Ln.dot(_r);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,i,r,a,o,l,c,d,h,u,m,g,x,f){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,d,h,u,m,g,x,f)}set(e,t,n,i,r,a,o,l,c,d,h,u,m,g,x,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=m,p[7]=g,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,m=a*h,g=o*d,x=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,m=l*h,g=c*d,x=c*h;t[0]=u+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,m=l*h,g=c*d,x=c*h;t[0]=u-x*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,m=a*h,g=o*d,x=o*h;t[0]=l*d,t[4]=g*c-m,t[8]=u*c+x,t[1]=l*h,t[5]=x*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=x-u*h,t[8]=g*h+m,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*h+g,t[10]=u-x*h}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+x,t[5]=a*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,vd)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Pn.crossVectors(n,Vt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Pn.crossVectors(n,Vt)),Pn.normalize(),ps.crossVectors(Vt,Pn),i[0]=Pn.x,i[4]=ps.x,i[8]=Vt.x,i[1]=Pn.y,i[5]=ps.y,i[9]=Vt.y,i[2]=Pn.z,i[6]=ps.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],m=n[13],g=n[2],x=n[6],f=n[10],p=n[14],S=n[3],E=n[7],T=n[11],P=n[15],C=i[0],A=i[4],$=i[8],_=i[12],M=i[1],k=i[5],H=i[9],Z=i[13],L=i[2],N=i[6],V=i[10],j=i[14],X=i[3],q=i[7],Y=i[11],ne=i[15];return r[0]=a*C+o*M+l*L+c*X,r[4]=a*A+o*k+l*N+c*q,r[8]=a*$+o*H+l*V+c*Y,r[12]=a*_+o*Z+l*j+c*ne,r[1]=d*C+h*M+u*L+m*X,r[5]=d*A+h*k+u*N+m*q,r[9]=d*$+h*H+u*V+m*Y,r[13]=d*_+h*Z+u*j+m*ne,r[2]=g*C+x*M+f*L+p*X,r[6]=g*A+x*k+f*N+p*q,r[10]=g*$+x*H+f*V+p*Y,r[14]=g*_+x*Z+f*j+p*ne,r[3]=S*C+E*M+T*L+P*X,r[7]=S*A+E*k+T*N+P*q,r[11]=S*$+E*H+T*V+P*Y,r[15]=S*_+E*Z+T*j+P*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],m=e[14],g=e[3],x=e[7],f=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*o*u+n*c*u+i*o*m-n*l*m)+x*(+t*l*m-t*c*u+r*a*u-i*a*m+i*c*d-r*l*d)+f*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*d-n*c*d)+p*(-i*o*d-t*l*h+t*o*u+i*a*h-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],m=e[11],g=e[12],x=e[13],f=e[14],p=e[15],S=h*f*c-x*u*c+x*l*m-o*f*m-h*l*p+o*u*p,E=g*u*c-d*f*c-g*l*m+a*f*m+d*l*p-a*u*p,T=d*x*c-g*h*c+g*o*m-a*x*m-d*o*p+a*h*p,P=g*h*l-d*x*l-g*o*u+a*x*u+d*o*f-a*h*f,C=t*S+n*E+i*T+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=S*A,e[1]=(x*u*r-h*f*r-x*i*m+n*f*m+h*i*p-n*u*p)*A,e[2]=(o*f*r-x*l*r+x*i*c-n*f*c-o*i*p+n*l*p)*A,e[3]=(h*l*r-o*u*r-h*i*c+n*u*c+o*i*m-n*l*m)*A,e[4]=E*A,e[5]=(d*f*r-g*u*r+g*i*m-t*f*m-d*i*p+t*u*p)*A,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*p-t*l*p)*A,e[7]=(a*u*r-d*l*r+d*i*c-t*u*c-a*i*m+t*l*m)*A,e[8]=T*A,e[9]=(g*h*r-d*x*r-g*n*m+t*x*m+d*n*p-t*h*p)*A,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*A,e[11]=(d*o*r-a*h*r-d*n*c+t*h*c+a*n*m-t*o*m)*A,e[12]=P*A,e[13]=(d*x*i-g*h*i+g*n*u-t*x*u-d*n*f+t*h*f)*A,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*f-t*o*f)*A,e[15]=(a*h*i-d*o*i+d*n*l-t*h*l-a*n*u+t*o*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,m=r*d,g=r*h,x=a*d,f=a*h,p=o*h,S=l*c,E=l*d,T=l*h,P=n.x,C=n.y,A=n.z;return i[0]=(1-(x+p))*P,i[1]=(m+T)*P,i[2]=(g-E)*P,i[3]=0,i[4]=(m-T)*C,i[5]=(1-(u+p))*C,i[6]=(f+S)*C,i[7]=0,i[8]=(g+E)*A,i[9]=(f-S)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=mi.set(i[0],i[1],i[2]).length();const a=mi.set(i[4],i[5],i[6]).length(),o=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/r,d=1/a,h=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=d,sn.elements[5]*=d,sn.elements[6]*=d,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=wn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let m,g;if(o===wn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=wn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(a-r),u=(t+e)*c,m=(n+i)*d;let g,x;if(o===wn)g=(a+r)*h,x=-2*h;else if(o===Gs)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new R,sn=new gt,yd=new R(0,0,0),vd=new R(1,1,1),Pn=new R,ps=new R,Vt=new R,oo=new gt,lo=new is;class ss{constructor(e=0,t=0,n=0,i=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _d=0;const co=new R,gi=new is,vn=new gt,fs=new R,Wi=new R,bd=new R,Md=new is,ho=new R(1,0,0),uo=new R(0,1,0),po=new R(0,0,1),Ed={type:"added"},Sd={type:"removed"};class Ct extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new R,t=new ss,n=new is,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new He}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(ho,e)}rotateY(e){return this.rotateOnAxis(uo,e)}rotateZ(e){return this.rotateOnAxis(po,e)}translateOnAxis(e,t){return co.copy(e).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ho,e)}translateY(e){return this.translateOnAxis(uo,e)}translateZ(e){return this.translateOnAxis(po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Wi,fs,this.up):vn.lookAt(fs,Wi,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(vn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ed)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new R(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new R,_n=new R,br=new R,bn=new R,xi=new R,yi=new R,fo=new R,Mr=new R,Er=new R,Sr=new R;let ms=!1;class Qt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),_n.subVectors(n,t),br.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(_n),l=rn.dot(br),c=_n.dot(_n),d=_n.dot(br),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,m=(c*l-o*d)*u,g=(a*d-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,i,r,a,o,l){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),_n.subVectors(e,t),rn.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),rn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;xi.subVectors(i,n),yi.subVectors(r,n),Mr.subVectors(e,n);const l=xi.dot(Mr),c=yi.dot(Mr);if(l<=0&&c<=0)return t.copy(n);Er.subVectors(e,i);const d=xi.dot(Er),h=yi.dot(Er);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(xi,a);Sr.subVectors(e,r);const m=xi.dot(Sr),g=yi.dot(Sr);if(g>=0&&m<=g)return t.copy(r);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(yi,o);const f=d*g-m*h;if(f<=0&&h-d>=0&&m-g>=0)return fo.subVectors(r,i),o=(h-d)/(h-d+(m-g)),t.copy(i).addScaledVector(fo,o);const p=1/(f+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(xi,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},gs={h:0,s:0,l:0};function wr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=cd(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wr(a,r,e+1/3),this.g=wr(a,r,e),this.b=wr(a,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Ht(Lt.r*255,0,255))*65536+Math.round(Ht(Lt.g*255,0,255))*256+Math.round(Ht(Lt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=At){Je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(gs);const n=hr(In.h,gs.h,t),i=hr(In.s,gs.s,t),r=hr(In.l,gs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ve;Ve.NAMES=Hl;let wd=0;class ci extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Ii,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gr,this.blendDst=Vr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ns extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new R,xs=new De;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jr&&(e.usage=this.usage),e}}class Gl extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vl extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const Yt=new gt,Tr=new Ct,vi=new R,Wt=new Cn,$i=new Cn,Et=new R;class mn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?Vl:Gl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Wt.min,$i.min),Wt.expandByPoint(Et),Et.addVectors(Wt.max,$i.max),Wt.expandByPoint(Et)):(Wt.expandByPoint($i.min),Wt.expandByPoint($i.max))}Wt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Et.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),Et.add(vi)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let M=0;M<o;M++)c[M]=new R,d[M]=new R;const h=new R,u=new R,m=new R,g=new De,x=new De,f=new De,p=new R,S=new R;function E(M,k,H){h.fromArray(i,M*3),u.fromArray(i,k*3),m.fromArray(i,H*3),g.fromArray(a,M*2),x.fromArray(a,k*2),f.fromArray(a,H*2),u.sub(h),m.sub(h),x.sub(g),f.sub(g);const Z=1/(x.x*f.y-f.x*x.y);isFinite(Z)&&(p.copy(u).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(Z),S.copy(m).multiplyScalar(x.x).addScaledVector(u,-f.x).multiplyScalar(Z),c[M].add(p),c[k].add(p),c[H].add(p),d[M].add(S),d[k].add(S),d[H].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let M=0,k=T.length;M<k;++M){const H=T[M],Z=H.start,L=H.count;for(let N=Z,V=Z+L;N<V;N+=3)E(n[N+0],n[N+1],n[N+2])}const P=new R,C=new R,A=new R,$=new R;function _(M){A.fromArray(r,M*3),$.copy(A);const k=c[M];P.copy(k),P.sub(A.multiplyScalar(A.dot(k))).normalize(),C.crossVectors($,k);const Z=C.dot(d[M])<0?-1:1;l[M*4]=P.x,l[M*4+1]=P.y,l[M*4+2]=P.z,l[M*4+3]=Z}for(let M=0,k=T.length;M<k;++M){const H=T[M],Z=H.start,L=H.count;for(let N=Z,V=Z+L;N<V;N+=3)_(n[N+0]),_(n[N+1]),_(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,d=new R,h=new R;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let p=0;p<d;p++)u[g++]=c[m++]}return new cn(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mo=new gt,Xn=new xd,ys=new la,go=new R,_i=new R,bi=new R,Mi=new R,Ar=new R,vs=new R,_s=new De,bs=new De,Ms=new De,xo=new R,yo=new R,vo=new R,Es=new R,Ss=new R;class xe extends Ct{constructor(e=new mn,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Ar.fromBufferAttribute(h,e),a?vs.addScaledVector(Ar,d):vs.addScaledVector(Ar.sub(t),d))}t.add(vs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(ys.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(ys,go)===null||Xn.origin.distanceToSquared(go)>(e.far-e.near)**2))&&(mo.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(mo),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,P=E;T<P;T+=3){const C=o.getX(T),A=o.getX(T+1),$=o.getX(T+2);i=ws(this,p,e,n,c,d,h,C,A,$),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){const S=o.getX(f),E=o.getX(f+1),T=o.getX(f+2);i=ws(this,a,e,n,c,d,h,S,E,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,P=E;T<P;T+=3){const C=T,A=T+1,$=T+2;i=ws(this,p,e,n,c,d,h,C,A,$),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){const S=f,E=f+1,T=f+2;i=ws(this,a,e,n,c,d,h,S,E,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Ad(s,e,t,n,i,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Hn,o),l===null)return null;Ss.copy(o),Ss.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ss);return c<t.near||c>t.far?null:{distance:c,point:Ss.clone(),object:s}}function ws(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,_i),s.getVertexPosition(l,bi),s.getVertexPosition(c,Mi);const d=Ad(s,e,t,n,_i,bi,Mi,Es);if(d){i&&(_s.fromBufferAttribute(i,o),bs.fromBufferAttribute(i,l),Ms.fromBufferAttribute(i,c),d.uv=Qt.getInterpolation(Es,_i,bi,Mi,_s,bs,Ms,new De)),r&&(_s.fromBufferAttribute(r,o),bs.fromBufferAttribute(r,l),Ms.fromBufferAttribute(r,c),d.uv1=Qt.getInterpolation(Es,_i,bi,Mi,_s,bs,Ms,new De),d.uv2=d.uv1),a&&(xo.fromBufferAttribute(a,o),yo.fromBufferAttribute(a,l),vo.fromBufferAttribute(a,c),d.normal=Qt.getInterpolation(Es,_i,bi,Mi,xo,yo,vo,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};Qt.getNormal(_i,bi,Mi,h.normal),d.face=h}return d}class $e extends mn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(h,2));function g(x,f,p,S,E,T,P,C,A,$,_){const M=T/A,k=P/$,H=T/2,Z=P/2,L=C/2,N=A+1,V=$+1;let j=0,X=0;const q=new R;for(let Y=0;Y<V;Y++){const ne=Y*k-Z;for(let ie=0;ie<N;ie++){const G=ie*M-H;q[x]=G*S,q[f]=ne*E,q[p]=L,c.push(q.x,q.y,q.z),q[x]=0,q[f]=0,q[p]=C>0?1:-1,d.push(q.x,q.y,q.z),h.push(ie/A),h.push(1-Y/$),j+=1}}for(let Y=0;Y<$;Y++)for(let ne=0;ne<A;ne++){const ie=u+ne+N*Y,G=u+ne+N*(Y+1),K=u+(ne+1)+N*(Y+1),ce=u+(ne+1)+N*Y;l.push(ie,G,ce),l.push(G,K,ce),X+=6}o.addGroup(m,X,_),m+=X,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $e(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(s){const e={};for(let t=0;t<s.length;t++){const n=Bi(s[t]);for(const i in n)e[i]=n[i]}return e}function Cd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wl(s){return s.getRenderTarget()===null?s.outputColorSpace:Je.workingColorSpace}const Rd={clone:Bi,merge:Nt};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $l extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends $l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Si=1;class Pd extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(Ei,Si,e,t);i.layers=this.layers,this.add(i);const r=new $t(Ei,Si,e,t);r.layers=this.layers,this.add(r);const a=new $t(Ei,Si,e,t);a.layers=this.layers,this.add(a);const o=new $t(Ei,Si,e,t);o.layers=this.layers,this.add(o);const l=new $t(Ei,Si,e,t);l.layers=this.layers,this.add(l);const c=new $t(Ei,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xl extends Ot{constructor(e,t,n,i,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Id extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ai?At:en),this.texture=new Xl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $e(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Nn});r.uniforms.tEquirect.value=t;const a=new xe(i,r),o=t.minFilter;return t.minFilter===es&&(t.minFilter=Jt),new Pd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Cr=new R,kd=new R,Ud=new He;class jn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cr.subVectors(n,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ud.getNormalMatrix(e),i=this.coplanarPoint(Cr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new la,Ts=new R;class ca{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],m=i[8],g=i[9],x=i[10],f=i[11],p=i[12],S=i[13],E=i[14],T=i[15];if(n[0].setComponents(l-r,u-c,f-m,T-p).normalize(),n[1].setComponents(l+r,u+c,f+m,T+p).normalize(),n[2].setComponents(l+a,u+d,f+g,T+S).normalize(),n[3].setComponents(l-a,u-d,f-g,T-S).normalize(),n[4].setComponents(l-o,u-h,f-x,T-E).normalize(),t===wn)n[5].setComponents(l+o,u+h,f+x,T+E).normalize();else if(t===Gs)n[5].setComponents(o,h,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ql(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Fd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,h,u),c.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,d,h){const u=d.array,m=d._updateRange,g=d.updateRanges;if(s.bindBuffer(h,c),m.count===-1&&g.length===0&&s.bufferSubData(h,0,u),g.length!==0){for(let x=0,f=g.length;x<f;x++){const p=g[x];t?s.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(s.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:a,remove:o,update:l}}class An extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,m=[],g=[],x=[],f=[];for(let p=0;p<d;p++){const S=p*u-a;for(let E=0;E<c;E++){const T=E*h-r;g.push(T,-S,0),x.push(0,0,1),f.push(E/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const E=S+c*p,T=S+c*(p+1),P=S+1+c*(p+1),C=S+1+c*p;m.push(E,T,C),m.push(T,P,C)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",fh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ph=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ru=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,du=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ru=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Du=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ou=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$u=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ku=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Nd,alphahash_pars_fragment:Bd,alphamap_fragment:Od,alphamap_pars_fragment:zd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:$d,batching_vertex:Xd,begin_vertex:qd,beginnormal_vertex:jd,bsdfs:Yd,iridescence_fragment:Kd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:eh,clipping_planes_vertex:th,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:sh,color_vertex:rh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:dh,emissivemap_fragment:hh,emissivemap_pars_fragment:uh,colorspace_fragment:ph,colorspace_pars_fragment:fh,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:xh,envmap_pars_vertex:yh,envmap_physical_pars_fragment:Dh,envmap_vertex:vh,fog_vertex:_h,fog_pars_vertex:bh,fog_fragment:Mh,fog_pars_fragment:Eh,gradientmap_pars_fragment:Sh,lightmap_fragment:wh,lightmap_pars_fragment:Th,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:Ch,lights_pars_begin:Rh,lights_toon_fragment:Lh,lights_toon_pars_fragment:Ph,lights_phong_fragment:Ih,lights_phong_pars_fragment:kh,lights_physical_fragment:Uh,lights_physical_pars_fragment:Fh,lights_fragment_begin:Nh,lights_fragment_maps:Bh,lights_fragment_end:Oh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:Gh,logdepthbuf_vertex:Vh,map_fragment:Wh,map_pars_fragment:$h,map_particle_fragment:Xh,map_particle_pars_fragment:qh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:Yh,morphcolor_vertex:Kh,morphnormal_vertex:Zh,morphtarget_pars_vertex:Jh,morphtarget_vertex:Qh,normal_fragment_begin:eu,normal_fragment_maps:tu,normal_pars_fragment:nu,normal_pars_vertex:iu,normal_vertex:su,normalmap_pars_fragment:ru,clearcoat_normal_fragment_begin:au,clearcoat_normal_fragment_maps:ou,clearcoat_pars_fragment:lu,iridescence_pars_fragment:cu,opaque_fragment:du,packing:hu,premultiplied_alpha_fragment:uu,project_vertex:pu,dithering_fragment:fu,dithering_pars_fragment:mu,roughnessmap_fragment:gu,roughnessmap_pars_fragment:xu,shadowmap_pars_fragment:yu,shadowmap_pars_vertex:vu,shadowmap_vertex:_u,shadowmask_pars_fragment:bu,skinbase_vertex:Mu,skinning_pars_vertex:Eu,skinning_vertex:Su,skinnormal_vertex:wu,specularmap_fragment:Tu,specularmap_pars_fragment:Au,tonemapping_fragment:Cu,tonemapping_pars_fragment:Ru,transmission_fragment:Du,transmission_pars_fragment:Lu,uv_pars_fragment:Pu,uv_pars_vertex:Iu,uv_vertex:ku,worldpos_vertex:Uu,background_vert:Fu,background_frag:Nu,backgroundCube_vert:Bu,backgroundCube_frag:Ou,cube_vert:zu,cube_frag:Hu,depth_vert:Gu,depth_frag:Vu,distanceRGBA_vert:Wu,distanceRGBA_frag:$u,equirect_vert:Xu,equirect_frag:qu,linedashed_vert:ju,linedashed_frag:Yu,meshbasic_vert:Ku,meshbasic_frag:Zu,meshlambert_vert:Ju,meshlambert_frag:Qu,meshmatcap_vert:ep,meshmatcap_frag:tp,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:sp,meshphong_frag:rp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:dp,points_frag:hp,shadow_vert:up,shadow_frag:pp,sprite_vert:fp,sprite_frag:mp},re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},hn={basic:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Nt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Nt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Nt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Nt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Nt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Nt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Nt([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Nt([re.lights,re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};hn.physical={uniforms:Nt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const As={r:0,b:0,g:0};function gp(s,e,t,n,i,r,a){const o=new Ve(0);let l=r===!0?0:1,c,d,h=null,u=0,m=null;function g(f,p){let S=!1,E=p.isScene===!0?p.background:null;E&&E.isTexture&&(E=(p.backgroundBlurriness>0?t:e).get(E)),E===null?x(o,l):E&&E.isColor&&(x(E,1),S=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Zs)?(d===void 0&&(d=new xe(new $e(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Bi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=Je.getTransfer(E.colorSpace)!==rt,(h!==E||u!==E.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,h=E,u=E.version,m=s.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new xe(new An(2,2),new li({name:"BackgroundMaterial",uniforms:Bi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Je.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function x(f,p){f.getRGB(As,Wl(s)),n.buffers.color.setClear(As.r,As.g,As.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(o,l)},render:g}}function xp(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,d=!1;function h(L,N,V,j,X){let q=!1;if(a){const Y=x(j,V,N);c!==Y&&(c=Y,m(c.object)),q=p(L,j,V,X),q&&S(L,j,V,X)}else{const Y=N.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==Y)&&(c.geometry=j.id,c.program=V.id,c.wireframe=Y,q=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,$(L,N,V,j),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,N,V){const j=V.wireframe===!0;let X=o[L.id];X===void 0&&(X={},o[L.id]=X);let q=X[N.id];q===void 0&&(q={},X[N.id]=q);let Y=q[j];return Y===void 0&&(Y=f(u()),q[j]=Y),Y}function f(L){const N=[],V=[],j=[];for(let X=0;X<i;X++)N[X]=0,V[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:j,object:L,attributes:{},index:null}}function p(L,N,V,j){const X=c.attributes,q=N.attributes;let Y=0;const ne=V.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const K=X[ie];let ce=q[ie];if(ce===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;Y++}return c.attributesNum!==Y||c.index!==j}function S(L,N,V,j){const X={},q=N.attributes;let Y=0;const ne=V.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let K=q[ie];K===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),X[ie]=ce,Y++}c.attributes=X,c.attributesNum=Y,c.index=j}function E(){const L=c.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function T(L){P(L,0)}function P(L,N){const V=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;V[L]=1,j[L]===0&&(s.enableVertexAttribArray(L),j[L]=1),X[L]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),X[L]=N)}function C(){const L=c.newAttributes,N=c.enabledAttributes;for(let V=0,j=N.length;V<j;V++)N[V]!==L[V]&&(s.disableVertexAttribArray(V),N[V]=0)}function A(L,N,V,j,X,q,Y){Y===!0?s.vertexAttribIPointer(L,N,V,X,q):s.vertexAttribPointer(L,N,V,j,X,q)}function $(L,N,V,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const X=j.attributes,q=V.getAttributes(),Y=N.defaultAttributeValues;for(const ne in q){const ie=q[ne];if(ie.location>=0){let G=X[ne];if(G===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const K=G.normalized,ce=G.itemSize,ye=t.get(G);if(ye===void 0)continue;const ge=ye.buffer,Le=ye.type,Ie=ye.bytesPerElement,Se=n.isWebGL2===!0&&(Le===s.INT||Le===s.UNSIGNED_INT||G.gpuType===Tl);if(G.isInterleavedBufferAttribute){const Xe=G.data,U=Xe.stride,It=G.offset;if(Xe.isInstancedInterleavedBuffer){for(let _e=0;_e<ie.locationSize;_e++)P(ie.location+_e,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let _e=0;_e<ie.locationSize;_e++)T(ie.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let _e=0;_e<ie.locationSize;_e++)A(ie.location+_e,ce/ie.locationSize,Le,K,U*Ie,(It+ce/ie.locationSize*_e)*Ie,Se)}else{if(G.isInstancedBufferAttribute){for(let Xe=0;Xe<ie.locationSize;Xe++)P(ie.location+Xe,G.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Xe=0;Xe<ie.locationSize;Xe++)T(ie.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Xe=0;Xe<ie.locationSize;Xe++)A(ie.location+Xe,ce/ie.locationSize,Le,K,ce*Ie,ce/ie.locationSize*Xe*Ie,Se)}}else if(Y!==void 0){const K=Y[ne];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ie.location,K);break;case 3:s.vertexAttrib3fv(ie.location,K);break;case 4:s.vertexAttrib4fv(ie.location,K);break;default:s.vertexAttrib1fv(ie.location,K)}}}}C()}function _(){H();for(const L in o){const N=o[L];for(const V in N){const j=N[V];for(const X in j)g(j[X].object),delete j[X];delete N[V]}delete o[L]}}function M(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const V in N){const j=N[V];for(const X in j)g(j[X].object),delete j[X];delete N[V]}delete o[L.id]}function k(L){for(const N in o){const V=o[N];if(V[L.id]===void 0)continue;const j=V[L.id];for(const X in j)g(j[X].object),delete j[X];delete V[L.id]}}function H(){Z(),d=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:Z,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfProgram:k,initAttributes:E,enableAttribute:T,disableUnusedAttributes:C}}function yp(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}function o(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function l(d,h,u){if(u===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,d,h,u),t.update(h,r,u)}function c(d,h,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(d[g],h[g]);else{m.multiDrawArraysWEBGL(r,d,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function vp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=u>0,T=a||e.has("OES_texture_float"),P=E&&T,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:C}}function _p(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new jn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||i;return i=u,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,m){const g=h.clippingPlanes,x=h.clipIntersection,f=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?d(null):c();else{const S=r?0:n,E=S*4;let T=p.clippingState||null;l.value=T,T=d(g,u,E,m);for(let P=0;P!==E;++P)T[P]=t[P];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,m,g){const x=h!==null?h.length:0;let f=null;if(x!==0){if(f=l.value,g!==!0||f===null){const p=m+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let E=0,T=m;E!==x;++E,T+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function bp(s){let e=new WeakMap;function t(a,o){return o===Wr?a.mapping=Ui:o===$r&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wr||o===$r)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Id(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class jl extends $l{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,_o=[.125,.215,.35,.446,.526,.582],Zn=20,Rr=new jl,bo=new Ve;let Dr=null,Lr=0,Pr=0;const Yn=(1+Math.sqrt(5))/2,wi=1/Yn,Mo=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Yn,wi),new R(0,Yn,-wi),new R(wi,0,Yn),new R(-wi,0,Yn),new R(Yn,wi,0),new R(-Yn,wi,0)];class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Dr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=To(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dr,Lr,Pr),e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:ts,format:ln,colorSpace:Tn,depthBuffer:!1},i=So(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=Ep(r,e,t)}return i}_compileMaterial(e){const t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,n,i){const o=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(bo),d.toneMapping=Bn,d.autoClear=!1;const m=new ns({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new xe(new $e,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(bo),x=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Cs(i,S*E,p>2?E:0,E,E),d.setRenderTarget(i),x&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=To()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Mo[(i-1)%Mo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new xe(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),x=r/g,f=isFinite(r)?1+Math.floor(d*x):Zn;f>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zn}`);const p=[];let S=0;for(let A=0;A<Zn;++A){const $=A/x,_=Math.exp(-$*$/2);p.push(_),A===0?S+=_:A<f&&(S+=2*_)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const T=this._sizeLods[i],P=3*T*(i>E-Li?i-E+Li:0),C=4*(this._cubeSize-T);Cs(t,P,C,3*T,2*T),l.setRenderTarget(t),l.render(h,Rr)}}function Mp(s){const e=[],t=[],n=[];let i=s;const r=s-Li+1+_o.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Li?l=_o[a-s+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,x=3,f=2,p=1,S=new Float32Array(x*g*m),E=new Float32Array(f*g*m),T=new Float32Array(p*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,$=C>2?0:-1,_=[A,$,0,A+2/3,$,0,A+2/3,$+1,0,A,$,0,A+2/3,$+1,0,A,$+1,0];S.set(_,x*g*C),E.set(u,f*g*C);const M=[C,C,C,C,C,C];T.set(M,p*g*C)}const P=new mn;P.setAttribute("position",new cn(S,x)),P.setAttribute("uv",new cn(E,f)),P.setAttribute("faceIndex",new cn(T,p)),e.push(P),i>Li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function So(s,e,t){const n=new oi(s,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ep(s,e,t){const n=new Float32Array(Zn),i=new R(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function wo(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function To(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wr||l===$r,d=l===Ui||l===Fi;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Eo(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||d&&h&&i(h)){t===null&&(t=new Eo(s));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tp(s,e,t,n){const i={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let f=0,p=x.length;f<p;f++)e.remove(x[f])}u.removeEventListener("dispose",a),delete i[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const x=m[g];for(let f=0,p=x.length;f<p;f++)e.update(x[f],s.ARRAY_BUFFER)}}function c(h){const u=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const S=m.array;x=m.version;for(let E=0,T=S.length;E<T;E+=3){const P=S[E+0],C=S[E+1],A=S[E+2];u.push(P,C,C,A,A,P)}}else if(g!==void 0){const S=g.array;x=g.version;for(let E=0,T=S.length/3-1;E<T;E+=3){const P=E+0,C=E+1,A=E+2;u.push(P,C,C,A,A,P)}}else return;const f=new(Fl(u)?Vl:Gl)(u,1);f.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,f)}function d(h){const u=r.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Ap(s,e,t,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,g){s.drawElements(r,g,o,m*l),t.update(g,r,1)}function h(m,g,x){if(x===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,o,m*l,x),t.update(g,r,x)}function u(m,g,x){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<x;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let p=0;for(let S=0;S<x;S++)p+=g[S];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function Cp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rp(s,e){return s[0]-e[0]}function Dp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Lp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let f=r.get(d);if(f===void 0||f.count!==x){let N=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],$=d.morphAttributes.color||[];let _=0;E===!0&&(_=1),T===!0&&(_=2),P===!0&&(_=3);let M=d.attributes.position.count*_,k=1;M>e.maxTextureSize&&(k=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const H=new Float32Array(M*k*4*x),Z=new Ol(H,M,k,x);Z.type=Fn,Z.needsUpdate=!0;const L=_*4;for(let V=0;V<x;V++){const j=C[V],X=A[V],q=$[V],Y=M*k*4*V;for(let ne=0;ne<j.count;ne++){const ie=ne*L;E===!0&&(a.fromBufferAttribute(j,ne),H[Y+ie+0]=a.x,H[Y+ie+1]=a.y,H[Y+ie+2]=a.z,H[Y+ie+3]=0),T===!0&&(a.fromBufferAttribute(X,ne),H[Y+ie+4]=a.x,H[Y+ie+5]=a.y,H[Y+ie+6]=a.z,H[Y+ie+7]=0),P===!0&&(a.fromBufferAttribute(q,ne),H[Y+ie+8]=a.x,H[Y+ie+9]=a.y,H[Y+ie+10]=a.z,H[Y+ie+11]=q.itemSize===4?a.w:1)}}f={count:x,texture:Z,size:new De(M,k)},r.set(d,f),d.addEventListener("dispose",N)}let p=0;for(let E=0;E<u.length;E++)p+=u[E];const S=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",u),h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let x=n[d.id];if(x===void 0||x.length!==g){x=[];for(let T=0;T<g;T++)x[T]=[T,0];n[d.id]=x}for(let T=0;T<g;T++){const P=x[T];P[0]=T,P[1]=u[T]}x.sort(Dp);for(let T=0;T<8;T++)T<g&&x[T][1]?(o[T][0]=x[T][0],o[T][1]=x[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(Rp);const f=d.morphAttributes.position,p=d.morphAttributes.normal;let S=0;for(let T=0;T<8;T++){const P=o[T],C=P[0],A=P[1];C!==Number.MAX_SAFE_INTEGER&&A?(f&&d.getAttribute("morphTarget"+T)!==f[C]&&d.setAttribute("morphTarget"+T,f[C]),p&&d.getAttribute("morphNormal"+T)!==p[C]&&d.setAttribute("morphNormal"+T,p[C]),i[T]=A,S+=A):(f&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),p&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),i[T]=0)}const E=d.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Pp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Yl extends Ot{constructor(e,t,n,i,r,a,o,l,c,d){if(d=d!==void 0?d:ri,d!==ri&&d!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ri&&(n=Un),n===void 0&&d===Ni&&(n=si),super(null,i,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kl=new Ot,Zl=new Yl(1,1);Zl.compareFunction=Ul;const Jl=new Ol,Ql=new md,ec=new Xl,Ao=[],Co=[],Ro=new Float32Array(16),Do=new Float32Array(9),Lo=new Float32Array(4);function zi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ao[i];if(r===void 0&&(r=new Float32Array(i),Ao[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qs(s,e){let t=Co[e];t===void 0&&(t=new Int32Array(e),Co[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ip(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function kp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function Up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function Fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function Np(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Lo.set(n),s.uniformMatrix2fv(this.addr,!1,Lo),_t(t,n)}}function Bp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Do.set(n),s.uniformMatrix3fv(this.addr,!1,Do),_t(t,n)}}function Op(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Ro.set(n),s.uniformMatrix4fv(this.addr,!1,Ro),_t(t,n)}}function zp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function Gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function Wp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function Xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function jp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Zl:Kl;t.setTexture2D(e||r,i)}function Yp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ql,i)}function Kp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ec,i)}function Zp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jl,i)}function Jp(s){switch(s){case 5126:return Ip;case 35664:return kp;case 35665:return Up;case 35666:return Fp;case 35674:return Np;case 35675:return Bp;case 35676:return Op;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return $p;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Qp(s,e){s.uniform1fv(this.addr,e)}function ef(s,e){const t=zi(e,this.size,2);s.uniform2fv(this.addr,t)}function tf(s,e){const t=zi(e,this.size,3);s.uniform3fv(this.addr,t)}function nf(s,e){const t=zi(e,this.size,4);s.uniform4fv(this.addr,t)}function sf(s,e){const t=zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rf(s,e){const t=zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function af(s,e){const t=zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function of(s,e){s.uniform1iv(this.addr,e)}function lf(s,e){s.uniform2iv(this.addr,e)}function cf(s,e){s.uniform3iv(this.addr,e)}function df(s,e){s.uniform4iv(this.addr,e)}function hf(s,e){s.uniform1uiv(this.addr,e)}function uf(s,e){s.uniform2uiv(this.addr,e)}function pf(s,e){s.uniform3uiv(this.addr,e)}function ff(s,e){s.uniform4uiv(this.addr,e)}function mf(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Kl,r[a])}function gf(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ql,r[a])}function xf(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ec,r[a])}function yf(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jl,r[a])}function vf(s){switch(s){case 5126:return Qp;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return sf;case 35675:return rf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return df;case 5125:return hf;case 36294:return uf;case 36295:return pf;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return yf}}class _f{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jp(t.type)}}class bf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vf(t.type)}}class Mf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Po(s,e){s.seq.push(e),s.map[e.id]=e}function Ef(s,e,t){const n=s.name,i=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),a=Ir.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Po(t,c===void 0?new _f(o,s,e):new bf(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Mf(o),Po(t,h)),t=h}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Ef(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Io(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Sf=37297;let wf=0;function Tf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Af(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let n;switch(e===t?n="":e===Hs&&t===zs?n="LinearDisplayP3ToLinearSRGB":e===zs&&t===Hs&&(n="LinearSRGBToLinearDisplayP3"),s){case Tn:case Js:return[n,"LinearTransferOETF"];case At:case oa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ko(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Tf(s.getShaderSource(e),a)}else return i}function Cf(s,e){const t=Af(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rf(s,e){let t;switch(e){case zc:t="Linear";break;case Hc:t="Reinhard";break;case Gc:t="OptimizedCineon";break;case Sl:t="ACESFilmic";break;case Wc:t="AgX";break;case Vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Df(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Lf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function Pf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function If(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Pi(s){return s!==""}function Uo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(s){return s.replace(kf,Ff)}const Uf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ff(s,e){let t=Ue[e];if(t===void 0){const n=Uf.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jr(t)}const Nf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function No(s){return s.replace(Nf,Bf)}function Bf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Of(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function zf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Fi:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case El:e="ENVMAP_BLENDING_MULTIPLY";break;case Bc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function Vf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wf(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Of(t),c=zf(t),d=Hf(t),h=Gf(t),u=Vf(t),m=t.isWebGL2?"":Df(t),g=Lf(t),x=Pf(r),f=i.createProgram();let p,S,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pi).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pi).join(`
`),S.length>0&&(S+=`
`)):(p=[Bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),S=[m,Bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Rf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Cf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),a=Jr(a),a=Uo(a,t),a=Fo(a,t),o=Jr(o),o=Uo(o,t),o=Fo(o,t),a=No(a),o=No(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=E+p+a,P=E+S+o,C=Io(i,i.VERTEX_SHADER,T),A=Io(i,i.FRAGMENT_SHADER,P);i.attachShader(f,C),i.attachShader(f,A),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function $(H){if(s.debug.checkShaderErrors){const Z=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(C).trim(),N=i.getShaderInfoLog(A).trim();let V=!0,j=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,C,A);else{const X=ko(i,C,"vertex"),q=ko(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+X+`
`+q)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||N==="")&&(j=!1);j&&(H.diagnostics={runnable:V,programLog:Z,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:S}})}i.deleteShader(C),i.deleteShader(A),_=new Ns(i,f),M=If(i,f)}let _;this.getUniforms=function(){return _===void 0&&$(this),_};let M;this.getAttributes=function(){return M===void 0&&$(this),M};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(f,Sf)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=A,this}let $f=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qf(e),t.set(e,n)),n}}class qf{constructor(e){this.id=$f++,this.code=e,this.usedTimes=0}}function jf(s,e,t,n,i,r,a){const o=new zl,l=new Xf,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function f(_,M,k,H,Z){const L=H.fog,N=Z.geometry,V=_.isMeshStandardMaterial?H.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||V),X=j&&j.mapping===Zs?j.image.height:null,q=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ne=Y!==void 0?Y.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let G,K,ce,ye;if(q){const kt=hn[q];G=kt.vertexShader,K=kt.fragmentShader}else G=_.vertexShader,K=_.fragmentShader,l.update(_),ce=l.getVertexShaderID(_),ye=l.getFragmentShaderID(_);const ge=s.getRenderTarget(),Le=Z.isInstancedMesh===!0,Ie=Z.isBatchedMesh===!0,Se=!!_.map,Xe=!!_.matcap,U=!!j,It=!!_.aoMap,_e=!!_.lightMap,Ce=!!_.bumpMap,pe=!!_.normalMap,ct=!!_.displacementMap,Fe=!!_.emissiveMap,b=!!_.metalnessMap,y=!!_.roughnessMap,B=_.anisotropy>0,ee=_.clearcoat>0,Q=_.iridescence>0,te=_.sheen>0,fe=_.transmission>0,le=B&&!!_.anisotropyMap,he=ee&&!!_.clearcoatMap,Ee=ee&&!!_.clearcoatNormalMap,Ne=ee&&!!_.clearcoatRoughnessMap,J=Q&&!!_.iridescenceMap,Ze=Q&&!!_.iridescenceThicknessMap,Ge=te&&!!_.sheenColorMap,Ae=te&&!!_.sheenRoughnessMap,ve=!!_.specularMap,ue=!!_.specularColorMap,ke=!!_.specularIntensityMap,Ye=fe&&!!_.transmissionMap,ut=fe&&!!_.thicknessMap,Oe=!!_.gradientMap,se=!!_.alphaMap,D=_.alphaTest>0,ae=!!_.alphaHash,oe=!!_.extensions,we=!!N.attributes.uv1,be=!!N.attributes.uv2,tt=!!N.attributes.uv3;let nt=Bn;return _.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(nt=s.toneMapping),{isWebGL2:d,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:G,fragmentShader:K,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Ie,instancing:Le,instancingColor:Le&&Z.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Tn,map:Se,matcap:Xe,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:X,aoMap:It,lightMap:_e,bumpMap:Ce,normalMap:pe,displacementMap:u&&ct,emissiveMap:Fe,normalMapObjectSpace:pe&&_.normalMapType===td,normalMapTangentSpace:pe&&_.normalMapType===aa,metalnessMap:b,roughnessMap:y,anisotropy:B,anisotropyMap:le,clearcoat:ee,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ne,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:Ze,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:ve,specularColorMap:ue,specularIntensityMap:ke,transmission:fe,transmissionMap:Ye,thicknessMap:ut,gradientMap:Oe,opaque:_.transparent===!1&&_.blending===Ii,alphaMap:se,alphaTest:D,alphaHash:ae,combine:_.combine,mapUv:Se&&x(_.map.channel),aoMapUv:It&&x(_.aoMap.channel),lightMapUv:_e&&x(_.lightMap.channel),bumpMapUv:Ce&&x(_.bumpMap.channel),normalMapUv:pe&&x(_.normalMap.channel),displacementMapUv:ct&&x(_.displacementMap.channel),emissiveMapUv:Fe&&x(_.emissiveMap.channel),metalnessMapUv:b&&x(_.metalnessMap.channel),roughnessMapUv:y&&x(_.roughnessMap.channel),anisotropyMapUv:le&&x(_.anisotropyMap.channel),clearcoatMapUv:he&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(_.sheenRoughnessMap.channel),specularMapUv:ve&&x(_.specularMap.channel),specularColorMapUv:ue&&x(_.specularColorMap.channel),specularIntensityMapUv:ke&&x(_.specularIntensityMap.channel),transmissionMapUv:Ye&&x(_.transmissionMap.channel),thicknessMapUv:ut&&x(_.thicknessMap.channel),alphaMapUv:se&&x(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pe||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:be,vertexUv3s:tt,pointsUvs:Z.isPoints===!0&&!!N.attributes.uv&&(Se||se),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Se&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:oe&&_.extensions.derivatives===!0,extensionFragDepth:oe&&_.extensions.fragDepth===!0,extensionDrawBuffers:oe&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)M.push(k),M.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(S(M,_),E(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function S(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function E(_,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function T(_){const M=g[_.type];let k;if(M){const H=hn[M];k=Rd.clone(H.uniforms)}else k=_.uniforms;return k}function P(_,M){let k;for(let H=0,Z=c.length;H<Z;H++){const L=c[H];if(L.cacheKey===M){k=L,++k.usedTimes;break}}return k===void 0&&(k=new Wf(s,M,_,r),c.push(k)),k}function C(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),_.destroy()}}function A(_){l.remove(_)}function $(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:T,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:$}}function Yf(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Kf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Oo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,m,g,x,f){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:f},s[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=f),e++,p}function o(h,u,m,g,x,f){const p=a(h,u,m,g,x,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,u,m,g,x,f){const p=a(h,u,m,g,x,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||Kf),n.length>1&&n.sort(u||Oo),i.length>1&&i.sort(u||Oo)}function d(){for(let h=e,u=s.length;h<u;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:c}}function Zf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new zo,s.set(n,[a])):i>=r.length?(a=new zo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Jf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ve};break;case"SpotLight":t={position:new R,direction:new R,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Qf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let em=0;function tm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nm(s,e){const t=new Jf,n=Qf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new R);const r=new R,a=new gt,o=new gt;function l(d,h){let u=0,m=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,f=0,p=0,S=0,E=0,T=0,P=0,C=0,A=0,$=0,_=0;d.sort(tm);const M=h===!0?Math.PI:1;for(let H=0,Z=d.length;H<Z;H++){const L=d[H],N=L.color,V=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*V*M,m+=N.g*V*M,g+=N.b*V*M;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],V);_++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const Y=L.shadow,ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,i.directionalShadow[x]=ne,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=L.shadow.matrix,T++}i.directional[x]=q,x++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(V*M),q.distance=j,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[p]=q;const Y=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&$++),i.spotLightMatrix[p]=Y.matrix,L.castShadow){const ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,i.spotShadow[p]=ne,i.spotShadowMap[p]=X,C++}p++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(N).multiplyScalar(V),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=q,S++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*M),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Y=L.shadow,ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,ne.shadowCameraNear=Y.camera.near,ne.shadowCameraFar=Y.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=X,i.pointShadowMatrix[f]=L.shadow.matrix,P++}i.point[f]=q,f++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(V*M),q.groundColor.copy(L.groundColor).multiplyScalar(V*M),i.hemi[E]=q,E++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const k=i.hash;(k.directionalLength!==x||k.pointLength!==f||k.spotLength!==p||k.rectAreaLength!==S||k.hemiLength!==E||k.numDirectionalShadows!==T||k.numPointShadows!==P||k.numSpotShadows!==C||k.numSpotMaps!==A||k.numLightProbes!==_)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=S,i.point.length=f,i.hemi.length=E,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=C+A-$,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=$,i.numLightProbes=_,k.directionalLength=x,k.pointLength=f,k.spotLength=p,k.rectAreaLength=S,k.hemiLength=E,k.numDirectionalShadows=T,k.numPointShadows=P,k.numSpotShadows=C,k.numSpotMaps=A,k.numLightProbes=_,i.version=em++)}function c(d,h){let u=0,m=0,g=0,x=0,f=0;const p=h.matrixWorldInverse;for(let S=0,E=d.length;S<E;S++){const T=d[S];if(T.isDirectionalLight){const P=i.directional[u];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),u++}else if(T.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const P=i.rectArea[x];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){const P=i.hemi[f];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function Ho(s,e){const t=new nm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function im(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Ho(s,e),t.set(r,[l])):a>=o.length?(l=new Ho(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class sm extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rm extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lm(s,e,t){let n=new ca;const i=new De,r=new De,a=new lt,o=new sm({depthPacking:ed}),l=new rm,c={},d=t.maxTextureSize,h={[Hn]:Bt,[Bt]:Hn,[En]:En},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:am,fragmentShader:om}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xe(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let p=this.type;this.render=function(C,A,$){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const _=s.getRenderTarget(),M=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Nn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=p!==Mn&&this.type===Mn,L=p===Mn&&this.type!==Mn;for(let N=0,V=C.length;N<V;N++){const j=C[N],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const q=X.getFrameExtents();if(i.multiply(q),r.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/q.x),i.x=r.x*q.x,X.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/q.y),i.y=r.y*q.y,X.mapSize.y=r.y)),X.map===null||Z===!0||L===!0){const ne=this.type!==Mn?{minFilter:wt,magFilter:wt}:{};X.map!==null&&X.map.dispose(),X.map=new oi(i.x,i.y,ne),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const Y=X.getViewportCount();for(let ne=0;ne<Y;ne++){const ie=X.getViewport(ne);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),H.viewport(a),X.updateMatrices(j,ne),n=X.getFrustum(),T(A,$,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Mn&&S(X,$),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(_,M,k)};function S(C,A){const $=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new oi(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,$,u,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,$,m,x,null)}function E(C,A,$,_){let M=null;const k=$.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)M=k;else if(M=$.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,Z=A.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let N=L[Z];N===void 0&&(N=M.clone(),L[Z]=N,A.addEventListener("dispose",P)),M=N}if(M.visible=A.visible,M.wireframe=A.wireframe,_===Mn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,$.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=s.properties.get(M);H.light=$}return M}function T(C,A,$,_,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld);const Z=e.update(C),L=C.material;if(Array.isArray(L)){const N=Z.groups;for(let V=0,j=N.length;V<j;V++){const X=N[V],q=L[X.materialIndex];if(q&&q.visible){const Y=E(C,q,_,M);C.onBeforeShadow(s,C,A,$,Z,Y,X),s.renderBufferDirect($,null,Z,Y,C,X),C.onAfterShadow(s,C,A,$,Z,Y,X)}}}else if(L.visible){const N=E(C,L,_,M);C.onBeforeShadow(s,C,A,$,Z,N,null),s.renderBufferDirect($,null,Z,N,C,null),C.onAfterShadow(s,C,A,$,Z,N,null)}}const H=C.children;for(let Z=0,L=H.length;Z<L;Z++)T(H[Z],A,$,_,M)}function P(C){C.target.removeEventListener("dispose",P);for(const $ in c){const _=c[$],M=C.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}function cm(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const ae=new lt;let oe=null;const we=new lt(0,0,0,0);return{setMask:function(be){oe!==be&&!D&&(s.colorMask(be,be,be,be),oe=be)},setLocked:function(be){D=be},setClear:function(be,tt,nt,bt,kt){kt===!0&&(be*=bt,tt*=bt,nt*=bt),ae.set(be,tt,nt,bt),we.equals(ae)===!1&&(s.clearColor(be,tt,nt,bt),we.copy(ae))},reset:function(){D=!1,oe=null,we.set(-1,0,0,0)}}}function r(){let D=!1,ae=null,oe=null,we=null;return{setTest:function(be){be?Ie(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(be){ae!==be&&!D&&(s.depthMask(be),ae=be)},setFunc:function(be){if(oe!==be){switch(be){case Lc:s.depthFunc(s.NEVER);break;case Pc:s.depthFunc(s.ALWAYS);break;case Ic:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case kc:s.depthFunc(s.EQUAL);break;case Uc:s.depthFunc(s.GEQUAL);break;case Fc:s.depthFunc(s.GREATER);break;case Nc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=be}},setLocked:function(be){D=be},setClear:function(be){we!==be&&(s.clearDepth(be),we=be)},reset:function(){D=!1,ae=null,oe=null,we=null}}}function a(){let D=!1,ae=null,oe=null,we=null,be=null,tt=null,nt=null,bt=null,kt=null;return{setTest:function(it){D||(it?Ie(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(it){ae!==it&&!D&&(s.stencilMask(it),ae=it)},setFunc:function(it,Ut,dn){(oe!==it||we!==Ut||be!==dn)&&(s.stencilFunc(it,Ut,dn),oe=it,we=Ut,be=dn)},setOp:function(it,Ut,dn){(tt!==it||nt!==Ut||bt!==dn)&&(s.stencilOp(it,Ut,dn),tt=it,nt=Ut,bt=dn)},setLocked:function(it){D=it},setClear:function(it){kt!==it&&(s.clearStencil(it),kt=it)},reset:function(){D=!1,ae=null,oe=null,we=null,be=null,tt=null,nt=null,bt=null,kt=null}}}const o=new i,l=new r,c=new a,d=new WeakMap,h=new WeakMap;let u={},m={},g=new WeakMap,x=[],f=null,p=!1,S=null,E=null,T=null,P=null,C=null,A=null,$=null,_=new Ve(0,0,0),M=0,k=!1,H=null,Z=null,L=null,N=null,V=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=q>=2);let ne=null,ie={};const G=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ce=new lt().fromArray(G),ye=new lt().fromArray(K);function ge(D,ae,oe,we){const be=new Uint8Array(4),tt=s.createTexture();s.bindTexture(D,tt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<oe;nt++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(ae+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return tt}const Le={};Le[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(s.DEPTH_TEST),l.setFunc(Bs),Fe(!1),b(Ma),Ie(s.CULL_FACE),pe(Nn);function Ie(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Xe(D,ae){return m[D]!==ae?(s.bindFramebuffer(D,ae),m[D]=ae,n&&(D===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ae),D===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function U(D,ae){let oe=x,we=!1;if(D)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),D.isWebGLMultipleRenderTargets){const be=D.texture;if(oe.length!==be.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,nt=be.length;tt<nt;tt++)oe[tt]=s.COLOR_ATTACHMENT0+tt;oe.length=be.length,we=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,we=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,we=!0);we&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function It(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const _e={[Kn]:s.FUNC_ADD,[gc]:s.FUNC_SUBTRACT,[xc]:s.FUNC_REVERSE_SUBTRACT};if(n)_e[Ta]=s.MIN,_e[Aa]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(_e[Ta]=D.MIN_EXT,_e[Aa]=D.MAX_EXT)}const Ce={[yc]:s.ZERO,[vc]:s.ONE,[_c]:s.SRC_COLOR,[Gr]:s.SRC_ALPHA,[Tc]:s.SRC_ALPHA_SATURATE,[Sc]:s.DST_COLOR,[Mc]:s.DST_ALPHA,[bc]:s.ONE_MINUS_SRC_COLOR,[Vr]:s.ONE_MINUS_SRC_ALPHA,[wc]:s.ONE_MINUS_DST_COLOR,[Ec]:s.ONE_MINUS_DST_ALPHA,[Ac]:s.CONSTANT_COLOR,[Cc]:s.ONE_MINUS_CONSTANT_COLOR,[Rc]:s.CONSTANT_ALPHA,[Dc]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(D,ae,oe,we,be,tt,nt,bt,kt,it){if(D===Nn){p===!0&&(Se(s.BLEND),p=!1);return}if(p===!1&&(Ie(s.BLEND),p=!0),D!==mc){if(D!==S||it!==k){if((E!==Kn||C!==Kn)&&(s.blendEquation(s.FUNC_ADD),E=Kn,C=Kn),it)switch(D){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ea:s.blendFunc(s.ONE,s.ONE);break;case Sa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ea:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,P=null,A=null,$=null,_.set(0,0,0),M=0,S=D,k=it}return}be=be||ae,tt=tt||oe,nt=nt||we,(ae!==E||be!==C)&&(s.blendEquationSeparate(_e[ae],_e[be]),E=ae,C=be),(oe!==T||we!==P||tt!==A||nt!==$)&&(s.blendFuncSeparate(Ce[oe],Ce[we],Ce[tt],Ce[nt]),T=oe,P=we,A=tt,$=nt),(bt.equals(_)===!1||kt!==M)&&(s.blendColor(bt.r,bt.g,bt.b,kt),_.copy(bt),M=kt),S=D,k=!1}function ct(D,ae){D.side===En?Se(s.CULL_FACE):Ie(s.CULL_FACE);let oe=D.side===Bt;ae&&(oe=!oe),Fe(oe),D.blending===Ii&&D.transparent===!1?pe(Nn):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const we=D.stencilWrite;c.setTest(we),we&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){H!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),H=D)}function b(D){D!==pc?(Ie(s.CULL_FACE),D!==Z&&(D===Ma?s.cullFace(s.BACK):D===fc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),Z=D}function y(D){D!==L&&(X&&s.lineWidth(D),L=D)}function B(D,ae,oe){D?(Ie(s.POLYGON_OFFSET_FILL),(N!==ae||V!==oe)&&(s.polygonOffset(ae,oe),N=ae,V=oe)):Se(s.POLYGON_OFFSET_FILL)}function ee(D){D?Ie(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Q(D){D===void 0&&(D=s.TEXTURE0+j-1),ne!==D&&(s.activeTexture(D),ne=D)}function te(D,ae,oe){oe===void 0&&(ne===null?oe=s.TEXTURE0+j-1:oe=ne);let we=ie[oe];we===void 0&&(we={type:void 0,texture:void 0},ie[oe]=we),(we.type!==D||we.texture!==ae)&&(ne!==oe&&(s.activeTexture(oe),ne=oe),s.bindTexture(D,ae||Le[D]),we.type=D,we.texture=ae)}function fe(){const D=ie[ne];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(D){ce.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function Ye(D){ye.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function ut(D,ae){let oe=h.get(ae);oe===void 0&&(oe=new WeakMap,h.set(ae,oe));let we=oe.get(D);we===void 0&&(we=s.getUniformBlockIndex(ae,D.name),oe.set(D,we))}function Oe(D,ae){const we=h.get(ae).get(D);d.get(ae)!==we&&(s.uniformBlockBinding(ae,we,D.__bindingPointIndex),d.set(ae,we))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ne=null,ie={},m={},g=new WeakMap,x=[],f=null,p=!1,S=null,E=null,T=null,P=null,C=null,A=null,$=null,_=new Ve(0,0,0),M=0,k=!1,H=null,Z=null,L=null,N=null,V=null,ce.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:Se,bindFramebuffer:Xe,drawBuffers:U,useProgram:It,setBlending:pe,setMaterial:ct,setFlipSided:Fe,setCullFace:b,setLineWidth:y,setPolygonOffset:B,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:fe,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:ve,texImage3D:ue,updateUBOMapping:ut,uniformBlockBinding:Oe,texStorage2D:Ge,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:Ne,compressedTexSubImage2D:J,compressedTexSubImage3D:Ze,scissor:ke,viewport:Ye,reset:se}}function dm(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return m?new OffscreenCanvas(b,y):Vs("canvas")}function x(b,y,B,ee){let Q=1;if((b.width>ee||b.height>ee)&&(Q=ee/Math.max(b.width,b.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const te=y?Zr:Math.floor,fe=te(Q*b.width),le=te(Q*b.height);h===void 0&&(h=g(fe,le));const he=B?g(fe,le):h;return he.width=fe,he.height=le,he.getContext("2d").drawImage(b,0,0,fe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+le+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function f(b){return no(b.width)&&no(b.height)}function p(b){return o?!1:b.wrapS!==on||b.wrapT!==on||b.minFilter!==wt&&b.minFilter!==Jt}function S(b,y){return b.generateMipmaps&&y&&b.minFilter!==wt&&b.minFilter!==Jt}function E(b){s.generateMipmap(b)}function T(b,y,B,ee,Q=!1){if(o===!1)return y;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=y;if(y===s.RED&&(B===s.FLOAT&&(te=s.R32F),B===s.HALF_FLOAT&&(te=s.R16F),B===s.UNSIGNED_BYTE&&(te=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(te=s.R8UI),B===s.UNSIGNED_SHORT&&(te=s.R16UI),B===s.UNSIGNED_INT&&(te=s.R32UI),B===s.BYTE&&(te=s.R8I),B===s.SHORT&&(te=s.R16I),B===s.INT&&(te=s.R32I)),y===s.RG&&(B===s.FLOAT&&(te=s.RG32F),B===s.HALF_FLOAT&&(te=s.RG16F),B===s.UNSIGNED_BYTE&&(te=s.RG8)),y===s.RGBA){const fe=Q?Os:Je.getTransfer(ee);B===s.FLOAT&&(te=s.RGBA32F),B===s.HALF_FLOAT&&(te=s.RGBA16F),B===s.UNSIGNED_BYTE&&(te=fe===rt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(b,y,B){return S(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==wt&&b.minFilter!==Jt?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function C(b){return b===wt||b===Ca||b===sr?s.NEAREST:s.LINEAR}function A(b){const y=b.target;y.removeEventListener("dispose",A),_(y),y.isVideoTexture&&d.delete(y)}function $(b){const y=b.target;y.removeEventListener("dispose",$),k(y)}function _(b){const y=n.get(b);if(y.__webglInit===void 0)return;const B=b.source,ee=u.get(B);if(ee){const Q=ee[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(b),Object.keys(ee).length===0&&u.delete(B)}n.remove(b)}function M(b){const y=n.get(b);s.deleteTexture(y.__webglTexture);const B=b.source,ee=u.get(B);delete ee[y.__cacheKey],a.memory.textures--}function k(b){const y=b.texture,B=n.get(b),ee=n.get(y);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let te=0;te<B.__webglFramebuffer[Q].length;te++)s.deleteFramebuffer(B.__webglFramebuffer[Q][te]);else s.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)s.deleteFramebuffer(B.__webglFramebuffer[Q]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,te=y.length;Q<te;Q++){const fe=n.get(y[Q]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(y[Q])}n.remove(y),n.remove(b)}let H=0;function Z(){H=0}function L(){const b=H;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),H+=1,b}function N(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function V(b,y){const B=n.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(B,b,y);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function j(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ce(B,b,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function X(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ce(B,b,y);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function q(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ye(B,b,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const Y={[Xr]:s.REPEAT,[on]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},ne={[wt]:s.NEAREST,[Ca]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[$c]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},ie={[nd]:s.NEVER,[ld]:s.ALWAYS,[id]:s.LESS,[Ul]:s.LEQUAL,[sd]:s.EQUAL,[od]:s.GEQUAL,[rd]:s.GREATER,[ad]:s.NOTEQUAL};function G(b,y,B){if(B?(s.texParameteri(b,s.TEXTURE_WRAP_S,Y[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,Y[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,Y[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ne[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ne[y.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==on||y.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,C(y.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==wt&&y.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===wt||y.minFilter!==sr&&y.minFilter!==es||y.type===Fn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(b,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function K(b,y){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const ee=y.source;let Q=u.get(ee);Q===void 0&&(Q={},u.set(ee,Q));const te=N(y);if(te!==b.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[te].usedTimes++;const fe=Q[b.__cacheKey];fe!==void 0&&(Q[b.__cacheKey].usedTimes--,fe.usedTimes===0&&M(y)),b.__cacheKey=te,b.__webglTexture=Q[te].texture}return B}function ce(b,y,B){let ee=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=s.TEXTURE_3D);const Q=K(b,y),te=y.source;t.bindTexture(ee,b.__webglTexture,s.TEXTURE0+B);const fe=n.get(te);if(te.version!==fe.__version||Q===!0){t.activeTexture(s.TEXTURE0+B);const le=Je.getPrimaries(Je.workingColorSpace),he=y.colorSpace===en?null:Je.getPrimaries(y.colorSpace),Ee=y.colorSpace===en||le===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=p(y)&&f(y.image)===!1;let J=x(y.image,Ne,!1,i.maxTextureSize);J=Fe(y,J);const Ze=f(J)||o,Ge=r.convert(y.format,y.colorSpace);let Ae=r.convert(y.type),ve=T(y.internalFormat,Ge,Ae,y.colorSpace,y.isVideoTexture);G(ee,y,Ze);let ue;const ke=y.mipmaps,Ye=o&&y.isVideoTexture!==!0&&ve!==Il,ut=fe.__version===void 0||Q===!0,Oe=P(y,J,Ze);if(y.isDepthTexture)ve=s.DEPTH_COMPONENT,o?y.type===Fn?ve=s.DEPTH_COMPONENT32F:y.type===Un?ve=s.DEPTH_COMPONENT24:y.type===si?ve=s.DEPTH24_STENCIL8:ve=s.DEPTH_COMPONENT16:y.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ri&&ve===s.DEPTH_COMPONENT&&y.type!==ra&&y.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Un,Ae=r.convert(y.type)),y.format===Ni&&ve===s.DEPTH_COMPONENT&&(ve=s.DEPTH_STENCIL,y.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=si,Ae=r.convert(y.type))),ut&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,ve,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,ve,J.width,J.height,0,Ge,Ae,null));else if(y.isDataTexture)if(ke.length>0&&Ze){Ye&&ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,ke[0].width,ke[0].height);for(let se=0,D=ke.length;se<D;se++)ue=ke[se],Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ge,Ae,ue.data):t.texImage2D(s.TEXTURE_2D,se,ve,ue.width,ue.height,0,Ge,Ae,ue.data);y.generateMipmaps=!1}else Ye?(ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Ge,Ae,J.data)):t.texImage2D(s.TEXTURE_2D,0,ve,J.width,J.height,0,Ge,Ae,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ye&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ve,ke[0].width,ke[0].height,J.depth);for(let se=0,D=ke.length;se<D;se++)ue=ke[se],y.format!==ln?Ge!==null?Ye?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,J.depth,Ge,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,ve,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,J.depth,Ge,Ae,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,ve,ue.width,ue.height,J.depth,0,Ge,Ae,ue.data)}else{Ye&&ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,ke[0].width,ke[0].height);for(let se=0,D=ke.length;se<D;se++)ue=ke[se],y.format!==ln?Ge!==null?Ye?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ge,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,se,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ge,Ae,ue.data):t.texImage2D(s.TEXTURE_2D,se,ve,ue.width,ue.height,0,Ge,Ae,ue.data)}else if(y.isDataArrayTexture)Ye?(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ve,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ge,Ae,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,J.width,J.height,J.depth,0,Ge,Ae,J.data);else if(y.isData3DTexture)Ye?(ut&&t.texStorage3D(s.TEXTURE_3D,Oe,ve,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ge,Ae,J.data)):t.texImage3D(s.TEXTURE_3D,0,ve,J.width,J.height,J.depth,0,Ge,Ae,J.data);else if(y.isFramebufferTexture){if(ut)if(Ye)t.texStorage2D(s.TEXTURE_2D,Oe,ve,J.width,J.height);else{let se=J.width,D=J.height;for(let ae=0;ae<Oe;ae++)t.texImage2D(s.TEXTURE_2D,ae,ve,se,D,0,Ge,Ae,null),se>>=1,D>>=1}}else if(ke.length>0&&Ze){Ye&&ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,ke[0].width,ke[0].height);for(let se=0,D=ke.length;se<D;se++)ue=ke[se],Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ge,Ae,ue):t.texImage2D(s.TEXTURE_2D,se,ve,Ge,Ae,ue);y.generateMipmaps=!1}else Ye?(ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Ae,J)):t.texImage2D(s.TEXTURE_2D,0,ve,Ge,Ae,J);S(y,Ze)&&E(ee),fe.__version=te.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ye(b,y,B){if(y.image.length!==6)return;const ee=K(b,y),Q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+B);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+B);const fe=Je.getPrimaries(Je.workingColorSpace),le=y.colorSpace===en?null:Je.getPrimaries(y.colorSpace),he=y.colorSpace===en||fe===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Ee&&!Ne?J[se]=x(y.image[se],!1,!0,i.maxCubemapSize):J[se]=Ne?y.image[se].image:y.image[se],J[se]=Fe(y,J[se]);const Ze=J[0],Ge=f(Ze)||o,Ae=r.convert(y.format,y.colorSpace),ve=r.convert(y.type),ue=T(y.internalFormat,Ae,ve,y.colorSpace),ke=o&&y.isVideoTexture!==!0,Ye=te.__version===void 0||ee===!0;let ut=P(y,Ze,Ge);G(s.TEXTURE_CUBE_MAP,y,Ge);let Oe;if(Ee){ke&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ue,Ze.width,Ze.height);for(let se=0;se<6;se++){Oe=J[se].mipmaps;for(let D=0;D<Oe.length;D++){const ae=Oe[D];y.format!==ln?Ae!==null?ke?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,ue,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ae.width,ae.height,Ae,ve,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,ue,ae.width,ae.height,0,Ae,ve,ae.data)}}}else{Oe=y.mipmaps,ke&&Ye&&(Oe.length>0&&ut++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ue,J[0].width,J[0].height));for(let se=0;se<6;se++)if(Ne){ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Ae,ve,J[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,J[se].width,J[se].height,0,Ae,ve,J[se].data);for(let D=0;D<Oe.length;D++){const oe=Oe[D].image[se].image;ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,oe.width,oe.height,Ae,ve,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,ue,oe.width,oe.height,0,Ae,ve,oe.data)}}else{ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,ve,J[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,Ae,ve,J[se]);for(let D=0;D<Oe.length;D++){const ae=Oe[D];ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,Ae,ve,ae.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,ue,Ae,ve,ae.image[se])}}}S(y,Ge)&&E(s.TEXTURE_CUBE_MAP),te.__version=Q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ge(b,y,B,ee,Q,te){const fe=r.convert(B.format,B.colorSpace),le=r.convert(B.type),he=T(B.internalFormat,fe,le,B.colorSpace);if(!n.get(y).__hasExternalTextures){const Ne=Math.max(1,y.width>>te),J=Math.max(1,y.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,he,Ne,J,y.depth,0,fe,le,null):t.texImage2D(Q,te,he,Ne,J,0,fe,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,0,Ce(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(b,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let ee=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||pe(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Fn?ee=s.DEPTH_COMPONENT32F:Q.type===Un&&(ee=s.DEPTH_COMPONENT24));const te=Ce(y);pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ee,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ee,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const ee=Ce(y);B&&pe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,y.width,y.height):pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],fe=r.convert(te.format,te.colorSpace),le=r.convert(te.type),he=T(te.internalFormat,fe,le,te.colorSpace),Ee=Ce(y);B&&pe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,he,y.width,y.height):pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,he,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,he,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const ee=n.get(y.depthTexture).__webglTexture,Q=Ce(y);if(y.depthTexture.format===ri)pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Ni)pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Se(b){const y=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ie(y.__webglFramebuffer,b)}else if(B){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=s.createRenderbuffer(),Le(y.__webglDepthbuffer[ee],b,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Le(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(b,y,B){const ee=n.get(b);y!==void 0&&ge(ee.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Se(b)}function U(b){const y=b.texture,B=n.get(b),ee=n.get(y);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=y.version,a.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,te=b.isWebGLMultipleRenderTargets===!0,fe=f(b)||o;if(Q){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let he=0;he<y.mipmaps.length;he++)B.__webglFramebuffer[le][he]=s.createFramebuffer()}else B.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)B.__webglFramebuffer[le]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const le=b.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Ne=n.get(le[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&pe(b)===!1){const le=te?y:[y];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Ee=le[he];B.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Ne=r.convert(Ee.format,Ee.colorSpace),J=r.convert(Ee.type),Ze=T(Ee.internalFormat,Ne,J,Ee.colorSpace,b.isXRRenderTarget===!0),Ge=Ce(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ze,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,B.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),G(s.TEXTURE_CUBE_MAP,y,fe);for(let le=0;le<6;le++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)ge(B.__webglFramebuffer[le][he],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else ge(B.__webglFramebuffer[le],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);S(y,fe)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=b.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Ne=le[he],J=n.get(Ne);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),G(s.TEXTURE_2D,Ne,fe),ge(B.__webglFramebuffer,b,Ne,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),S(Ne,fe)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?le=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),G(le,y,fe),o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)ge(B.__webglFramebuffer[he],b,y,s.COLOR_ATTACHMENT0,le,he);else ge(B.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,le,0);S(y,fe)&&E(le),t.unbindTexture()}b.depthBuffer&&Se(b)}function It(b){const y=f(b)||o,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0,Q=B.length;ee<Q;ee++){const te=B[ee];if(S(te,y)){const fe=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(te).__webglTexture;t.bindTexture(fe,le),E(fe),t.unbindTexture()}}}function _e(b){if(o&&b.samples>0&&pe(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,ee=b.height;let Q=s.COLOR_BUFFER_BIT;const te=[],fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(b),he=b.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&te.push(fe);const Ne=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ne===!1&&(b.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Ne===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[fe])),he){const J=n.get(y[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,B,ee,0,0,B,ee,Q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Ne=n.get(y[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ce(b){return Math.min(i.maxSamples,b.samples)}function pe(b){const y=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(b){const y=a.render.frame;d.get(b)!==y&&(d.set(b,y),b.update())}function Fe(b,y){const B=b.colorSpace,ee=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Yr||B!==Tn&&B!==en&&(Je.getTransfer(B)===rt?o===!1?e.has("EXT_sRGB")===!0&&ee===ln?(b.format=Yr,b.minFilter=Jt,b.generateMipmaps=!1):y=Nl.sRGBToLinear(y):(ee!==ln||Q!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=Xe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=pe}function hm(s,e,t){const n=t.isWebGL2;function i(r,a=en){let o;const l=Je.getTransfer(a);if(r===On)return s.UNSIGNED_BYTE;if(r===Al)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Xc)return s.BYTE;if(r===qc)return s.SHORT;if(r===ra)return s.UNSIGNED_SHORT;if(r===Tl)return s.INT;if(r===Un)return s.UNSIGNED_INT;if(r===Fn)return s.FLOAT;if(r===ts)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===jc)return s.ALPHA;if(r===ln)return s.RGBA;if(r===Yc)return s.LUMINANCE;if(r===Kc)return s.LUMINANCE_ALPHA;if(r===ri)return s.DEPTH_COMPONENT;if(r===Ni)return s.DEPTH_STENCIL;if(r===Yr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Rl)return s.RED;if(r===Dl)return s.RED_INTEGER;if(r===Zc)return s.RG;if(r===Ll)return s.RG_INTEGER;if(r===Pl)return s.RGBA_INTEGER;if(r===rr||r===ar||r===or||r===lr)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ar)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===or)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ra||r===Da||r===La||r===Pa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ra)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Da)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===La)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Il)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ia||r===ka)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ia)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ka)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ua||r===Fa||r===Na||r===Ba||r===Oa||r===za||r===Ha||r===Ga||r===Va||r===Wa||r===$a||r===Xa||r===qa||r===ja)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ua)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Na)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ba)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===za)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ha)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ga)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Va)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$a)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ja)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cr||r===Ya||r===Ka)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===cr)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ya)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ka)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jc||r===Za||r===Ja||r===Qa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===cr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Za)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ja)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===si?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class um extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ji extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pm={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,n),p=this._getHandJoint(c,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fm extends Oi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,m=null,g=null;const x=t.getContextAttributes();let f=null,p=null;const S=[],E=[],T=new De;let P=null;const C=new $t;C.layers.enable(1),C.viewport=new lt;const A=new $t;A.layers.enable(2),A.viewport=new lt;const $=[C,A],_=new um;_.layers.enable(1),_.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=S[G];return K===void 0&&(K=new kr,S[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=S[G];return K===void 0&&(K=new kr,S[G]=K),K.getGripSpace()},this.getHand=function(G){let K=S[G];return K===void 0&&(K=new kr,S[G]=K),K.getHandSpace()};function H(G){const K=E.indexOf(G.inputSource);if(K===-1)return;const ce=S[K];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function Z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",L);for(let G=0;G<S.length;G++){const K=E[G];K!==null&&(E[G]=null,S[G].disconnect(K))}M=null,k=null,e.setRenderTarget(f),m=null,u=null,h=null,i=null,p=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new oi(m.framebufferWidth,m.framebufferHeight,{format:ln,type:On,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ce=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=x.stencil?Ni:ri,ce=x.stencil?si:Un);const ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(ge),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new oi(u.textureWidth,u.textureHeight,{format:ln,type:On,depthTexture:new Yl(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(p);Le.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(G){for(let K=0;K<G.removed.length;K++){const ce=G.removed[K],ye=E.indexOf(ce);ye>=0&&(E[ye]=null,S[ye].disconnect(ce))}for(let K=0;K<G.added.length;K++){const ce=G.added[K];let ye=E.indexOf(ce);if(ye===-1){for(let Le=0;Le<S.length;Le++)if(Le>=E.length){E.push(ce),ye=Le;break}else if(E[Le]===null){E[Le]=ce,ye=Le;break}if(ye===-1)break}const ge=S[ye];ge&&ge.connect(ce)}}const N=new R,V=new R;function j(G,K,ce){N.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const ye=N.distanceTo(V),ge=K.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Ie=ge[14]/(ge[10]-1),Se=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],U=(ge[9]-1)/ge[5],It=(ge[8]-1)/ge[0],_e=(Le[8]+1)/Le[0],Ce=Ie*It,pe=Ie*_e,ct=ye/(-It+_e),Fe=ct*-It;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(ct),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const b=Ie+ct,y=Se+ct,B=Ce-Fe,ee=pe+(ye-Fe),Q=Xe*Se/y*b,te=U*Se/y*b;G.projectionMatrix.makePerspective(B,ee,Q,te,b,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;_.near=A.near=C.near=G.near,_.far=A.far=C.far=G.far,(M!==_.near||k!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,k=_.far);const K=G.parent,ce=_.cameras;X(_,K);for(let ye=0;ye<ce.length;ye++)X(ce[ye],K);ce.length===2?j(_,C,A):_.projectionMatrix.copy(C.projectionMatrix),q(G,_,K)};function q(G,K,ce){ce===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Kr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let Y=null;function ne(G,K){if(d=K.getViewerPose(c||a),g=K,d!==null){const ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let ye=!1;ce.length!==_.cameras.length&&(_.cameras.length=0,ye=!0);for(let ge=0;ge<ce.length;ge++){const Le=ce[ge];let Ie=null;if(m!==null)Ie=m.getViewport(Le);else{const Xe=h.getViewSubImage(u,Le);Ie=Xe.viewport,ge===0&&(e.setRenderTargetTextures(p,Xe.colorTexture,u.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(p))}let Se=$[ge];Se===void 0&&(Se=new $t,Se.layers.enable(ge),Se.viewport=new lt,$[ge]=Se),Se.matrix.fromArray(Le.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Le.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ge===0&&(_.matrix.copy(Se.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ye===!0&&_.cameras.push(Se)}}for(let ce=0;ce<S.length;ce++){const ye=E[ce],ge=S[ce];ye!==null&&ge!==void 0&&ge.update(ye,K,c||a)}Y&&Y(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ie=new ql;ie.setAnimationLoop(ne),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}function mm(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Wl(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,S,E,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),d(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,E):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Bt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Bt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const E=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*E,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,E){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=E*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function d(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gm(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,E){const T=E.program;n.uniformBlockBinding(S,T)}function c(S,E){let T=i[S.id];T===void 0&&(g(S),T=d(S),i[S.id]=T,S.addEventListener("dispose",f));const P=E.program;n.updateUBOMapping(S,P);const C=e.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}function d(S){const E=h();S.__bindingPointIndex=E;const T=s.createBuffer(),P=S.__size,C=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const E=i[S.id],T=S.uniforms,P=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let C=0,A=T.length;C<A;C++){const $=Array.isArray(T[C])?T[C]:[T[C]];for(let _=0,M=$.length;_<M;_++){const k=$[_];if(m(k,C,_,P)===!0){const H=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let N=0;N<Z.length;N++){const V=Z[N],j=x(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,H+L,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,E,T,P){const C=S.value,A=E+"_"+T;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const $=P[A];if(typeof C=="number"||typeof C=="boolean"){if($!==C)return P[A]=C,!0}else if($.equals(C)===!1)return $.copy(C),!0}return!1}function g(S){const E=S.uniforms;let T=0;const P=16;for(let A=0,$=E.length;A<$;A++){const _=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,k=_.length;M<k;M++){const H=_[M],Z=Array.isArray(H.value)?H.value:[H.value];for(let L=0,N=Z.length;L<N;L++){const V=Z[L],j=x(V),X=T%P;X!==0&&P-X<j.boundary&&(T+=P-X),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=j.storage}}}const C=T%P;return C>0&&(T+=P-C),S.__size=T,S.__cache={},this}function x(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function f(S){const E=S.target;E.removeEventListener("dispose",f);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class tc{constructor(e={}){const{canvas:t=dd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,f=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const E=this;let T=!1,P=0,C=0,A=null,$=-1,_=null;const M=new lt,k=new lt;let H=null;const Z=new Ve(0);let L=0,N=t.width,V=t.height,j=1,X=null,q=null;const Y=new lt(0,0,N,V),ne=new lt(0,0,N,V);let ie=!1;const G=new ca;let K=!1,ce=!1,ye=null;const ge=new gt,Le=new De,Ie=new R,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return A===null?j:1}let U=n;function It(v,I){for(let O=0;O<v.length;O++){const z=v[O],F=t.getContext(z,I);if(F!==null)return F}return null}try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sa}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ae,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&I.shift(),U=It(I,v),U===null)throw It(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let _e,Ce,pe,ct,Fe,b,y,B,ee,Q,te,fe,le,he,Ee,Ne,J,Ze,Ge,Ae,ve,ue,ke,Ye;function ut(){_e=new wp(U),Ce=new vp(U,_e,e),_e.init(Ce),ue=new hm(U,_e,Ce),pe=new cm(U,_e,Ce),ct=new Cp(U),Fe=new Yf,b=new dm(U,_e,pe,Fe,Ce,ue,ct),y=new bp(E),B=new Sp(E),ee=new Fd(U,Ce),ke=new xp(U,_e,ee,Ce),Q=new Tp(U,ee,ct,ke),te=new Pp(U,Q,ee,ct),Ge=new Lp(U,Ce,b),Ne=new _p(Fe),fe=new jf(E,y,B,_e,Ce,ke,Ne),le=new mm(E,Fe),he=new Zf,Ee=new im(_e,Ce),Ze=new gp(E,y,B,pe,te,u,l),J=new lm(E,te,Ce),Ye=new gm(U,ct,Ce,pe),Ae=new yp(U,_e,ct,Ce),ve=new Ap(U,_e,ct,Ce),ct.programs=fe.programs,E.capabilities=Ce,E.extensions=_e,E.properties=Fe,E.renderLists=he,E.shadowMap=J,E.state=pe,E.info=ct}ut();const Oe=new fm(E,U);this.xr=Oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=_e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=_e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(N,V,!1))},this.getSize=function(v){return v.set(N,V)},this.setSize=function(v,I,O=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=v,V=I,t.width=Math.floor(v*j),t.height=Math.floor(I*j),O===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(N*j,V*j).floor()},this.setDrawingBufferSize=function(v,I,O){N=v,V=I,j=O,t.width=Math.floor(v*O),t.height=Math.floor(I*O),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(M)},this.getViewport=function(v){return v.copy(Y)},this.setViewport=function(v,I,O,z){v.isVector4?Y.set(v.x,v.y,v.z,v.w):Y.set(v,I,O,z),pe.viewport(M.copy(Y).multiplyScalar(j).floor())},this.getScissor=function(v){return v.copy(ne)},this.setScissor=function(v,I,O,z){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,I,O,z),pe.scissor(k.copy(ne).multiplyScalar(j).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(v){pe.setScissorTest(ie=v)},this.setOpaqueSort=function(v){X=v},this.setTransparentSort=function(v){q=v},this.getClearColor=function(v){return v.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(v=!0,I=!0,O=!0){let z=0;if(v){let F=!1;if(A!==null){const de=A.texture.format;F=de===Pl||de===Ll||de===Dl}if(F){const de=A.texture.type,me=de===On||de===Un||de===ra||de===si||de===Al||de===Cl,Me=Ze.getClearColor(),Te=Ze.getClearAlpha(),Be=Me.r,Re=Me.g,Pe=Me.b;me?(m[0]=Be,m[1]=Re,m[2]=Pe,m[3]=Te,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Be,g[1]=Re,g[2]=Pe,g[3]=Te,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}I&&(z|=U.DEPTH_BUFFER_BIT),O&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Ee.dispose(),Fe.dispose(),y.dispose(),B.dispose(),te.dispose(),ke.dispose(),Ye.dispose(),fe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",kt),Oe.removeEventListener("sessionend",it),ye&&(ye.dispose(),ye=null),Ut.stop()};function se(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const v=ct.autoReset,I=J.enabled,O=J.autoUpdate,z=J.needsUpdate,F=J.type;ut(),ct.autoReset=v,J.enabled=I,J.autoUpdate=O,J.needsUpdate=z,J.type=F}function ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function oe(v){const I=v.target;I.removeEventListener("dispose",oe),we(I)}function we(v){be(v),Fe.remove(v)}function be(v){const I=Fe.get(v).programs;I!==void 0&&(I.forEach(function(O){fe.releaseProgram(O)}),v.isShaderMaterial&&fe.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,O,z,F,de){I===null&&(I=Se);const me=F.isMesh&&F.matrixWorld.determinant()<0,Me=oc(v,I,O,z,F);pe.setMaterial(z,me);let Te=O.index,Be=1;if(z.wireframe===!0){if(Te=Q.getWireframeAttribute(O),Te===void 0)return;Be=2}const Re=O.drawRange,Pe=O.attributes.position;let ft=Re.start*Be,Gt=(Re.start+Re.count)*Be;de!==null&&(ft=Math.max(ft,de.start*Be),Gt=Math.min(Gt,(de.start+de.count)*Be)),Te!==null?(ft=Math.max(ft,0),Gt=Math.min(Gt,Te.count)):Pe!=null&&(ft=Math.max(ft,0),Gt=Math.min(Gt,Pe.count));const Mt=Gt-ft;if(Mt<0||Mt===1/0)return;ke.setup(F,z,Me,O,Te);let gn,dt=Ae;if(Te!==null&&(gn=ee.get(Te),dt=ve,dt.setIndex(gn)),F.isMesh)z.wireframe===!0?(pe.setLineWidth(z.wireframeLinewidth*Xe()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(F.isLine){let ze=z.linewidth;ze===void 0&&(ze=1),pe.setLineWidth(ze*Xe()),F.isLineSegments?dt.setMode(U.LINES):F.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else F.isPoints?dt.setMode(U.POINTS):F.isSprite&&dt.setMode(U.TRIANGLES);if(F.isBatchedMesh)dt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)dt.renderInstances(ft,Mt,F.count);else if(O.isInstancedBufferGeometry){const ze=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,er=Math.min(O.instanceCount,ze);dt.renderInstances(ft,Mt,er)}else dt.render(ft,Mt)};function tt(v,I,O){v.transparent===!0&&v.side===En&&v.forceSinglePass===!1?(v.side=Bt,v.needsUpdate=!0,as(v,I,O),v.side=Hn,v.needsUpdate=!0,as(v,I,O),v.side=En):as(v,I,O)}this.compile=function(v,I,O=null){O===null&&(O=v),f=Ee.get(O),f.init(),S.push(f),O.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),v!==O&&v.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(E._useLegacyLights);const z=new Set;return v.traverse(function(F){const de=F.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const Me=de[me];tt(Me,O,F),z.add(Me)}else tt(de,O,F),z.add(de)}),S.pop(),f=null,z},this.compileAsync=function(v,I,O=null){const z=this.compile(v,I,O);return new Promise(F=>{function de(){if(z.forEach(function(me){Fe.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){F(v);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let nt=null;function bt(v){nt&&nt(v)}function kt(){Ut.stop()}function it(){Ut.start()}const Ut=new ql;Ut.setAnimationLoop(bt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(v){nt=v,Oe.setAnimationLoop(v),v===null?Ut.stop():Ut.start()},Oe.addEventListener("sessionstart",kt),Oe.addEventListener("sessionend",it),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(I),I=Oe.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,I,A),f=Ee.get(v,S.length),f.init(),S.push(f),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,ce),x=he.get(v,p.length),x.init(),p.push(x),dn(v,I,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(X,q),this.info.render.frame++,K===!0&&Ne.beginShadows();const O=f.state.shadowsArray;if(J.render(O,v,I),K===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,v),f.setupLights(E._useLegacyLights),I.isArrayCamera){const z=I.cameras;for(let F=0,de=z.length;F<de;F++){const me=z[F];ga(x,v,me,me.viewport)}}else ga(x,v,I);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),v.isScene===!0&&v.onAfterRender(E,v,I),ke.resetDefaultState(),$=-1,_=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function dn(v,I,O,z){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||G.intersectsSprite(v)){z&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ge);const me=te.update(v),Me=v.material;Me.visible&&x.push(v,me,Me,O,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||G.intersectsObject(v))){const me=te.update(v),Me=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(ge)),Array.isArray(Me)){const Te=me.groups;for(let Be=0,Re=Te.length;Be<Re;Be++){const Pe=Te[Be],ft=Me[Pe.materialIndex];ft&&ft.visible&&x.push(v,me,ft,O,Ie.z,Pe)}}else Me.visible&&x.push(v,me,Me,O,Ie.z,null)}}const de=v.children;for(let me=0,Me=de.length;me<Me;me++)dn(de[me],I,O,z)}function ga(v,I,O,z){const F=v.opaque,de=v.transmissive,me=v.transparent;f.setupLightsView(O),K===!0&&Ne.setGlobalState(E.clippingPlanes,O),de.length>0&&ac(F,de,I,O),z&&pe.viewport(M.copy(z)),F.length>0&&rs(F,I,O),de.length>0&&rs(de,I,O),me.length>0&&rs(me,I,O),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ac(v,I,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const de=Ce.isWebGL2;ye===null&&(ye=new oi(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ts:On,minFilter:es,samples:de?4:0})),E.getDrawingBufferSize(Le),de?ye.setSize(Le.x,Le.y):ye.setSize(Zr(Le.x),Zr(Le.y));const me=E.getRenderTarget();E.setRenderTarget(ye),E.getClearColor(Z),L=E.getClearAlpha(),L<1&&E.setClearColor(16777215,.5),E.clear();const Me=E.toneMapping;E.toneMapping=Bn,rs(v,O,z),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye);let Te=!1;for(let Be=0,Re=I.length;Be<Re;Be++){const Pe=I[Be],ft=Pe.object,Gt=Pe.geometry,Mt=Pe.material,gn=Pe.group;if(Mt.side===En&&ft.layers.test(z.layers)){const dt=Mt.side;Mt.side=Bt,Mt.needsUpdate=!0,xa(ft,O,z,Gt,Mt,gn),Mt.side=dt,Mt.needsUpdate=!0,Te=!0}}Te===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye)),E.setRenderTarget(me),E.setClearColor(Z,L),E.toneMapping=Me}function rs(v,I,O){const z=I.isScene===!0?I.overrideMaterial:null;for(let F=0,de=v.length;F<de;F++){const me=v[F],Me=me.object,Te=me.geometry,Be=z===null?me.material:z,Re=me.group;Me.layers.test(O.layers)&&xa(Me,I,O,Te,Be,Re)}}function xa(v,I,O,z,F,de){v.onBeforeRender(E,I,O,z,F,de),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(E,I,O,z,v,de),F.transparent===!0&&F.side===En&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,E.renderBufferDirect(O,I,z,F,v,de),F.side=Hn,F.needsUpdate=!0,E.renderBufferDirect(O,I,z,F,v,de),F.side=En):E.renderBufferDirect(O,I,z,F,v,de),v.onAfterRender(E,I,O,z,F,de)}function as(v,I,O){I.isScene!==!0&&(I=Se);const z=Fe.get(v),F=f.state.lights,de=f.state.shadowsArray,me=F.state.version,Me=fe.getParameters(v,F.state,de,I,O),Te=fe.getProgramCacheKey(Me);let Be=z.programs;z.environment=v.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(v.isMeshStandardMaterial?B:y).get(v.envMap||z.environment),Be===void 0&&(v.addEventListener("dispose",oe),Be=new Map,z.programs=Be);let Re=Be.get(Te);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===me)return va(v,Me),Re}else Me.uniforms=fe.getUniforms(v),v.onBuild(O,Me,E),v.onBeforeCompile(Me,E),Re=fe.acquireProgram(Me,Te),Be.set(Te,Re),z.uniforms=Me.uniforms;const Pe=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Pe.clippingPlanes=Ne.uniform),va(v,Me),z.needsLights=cc(v),z.lightsStateVersion=me,z.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function ya(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Ns.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function va(v,I){const O=Fe.get(v);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function oc(v,I,O,z,F){I.isScene!==!0&&(I=Se),b.resetTextureUnits();const de=I.fog,me=z.isMeshStandardMaterial?I.environment:null,Me=A===null?E.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Tn,Te=(z.isMeshStandardMaterial?B:y).get(z.envMap||me),Be=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!O.morphAttributes.position,ft=!!O.morphAttributes.normal,Gt=!!O.morphAttributes.color;let Mt=Bn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const gn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,dt=gn!==void 0?gn.length:0,ze=Fe.get(z),er=f.state.lights;if(K===!0&&(ce===!0||v!==_)){const jt=v===_&&z.id===$;Ne.setState(z,v,jt)}let pt=!1;z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==er.state.version||ze.outputColorSpace!==Me||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||ze.envMap!==Te||z.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ne.numPlanes||ze.numIntersection!==Ne.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Re||ze.morphTargets!==Pe||ze.morphNormals!==ft||ze.morphColors!==Gt||ze.toneMapping!==Mt||Ce.isWebGL2===!0&&ze.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,ze.__version=z.version);let Gn=ze.currentProgram;pt===!0&&(Gn=as(z,I,F));let _a=!1,Hi=!1,tr=!1;const Rt=Gn.getUniforms(),Vn=ze.uniforms;if(pe.useProgram(Gn.program)&&(_a=!0,Hi=!0,tr=!0),z.id!==$&&($=z.id,Hi=!0),_a||_!==v){Rt.setValue(U,"projectionMatrix",v.projectionMatrix),Rt.setValue(U,"viewMatrix",v.matrixWorldInverse);const jt=Rt.map.cameraPosition;jt!==void 0&&jt.setValue(U,Ie.setFromMatrixPosition(v.matrixWorld)),Ce.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),_!==v&&(_=v,Hi=!0,tr=!0)}if(F.isSkinnedMesh){Rt.setOptional(U,F,"bindMatrix"),Rt.setOptional(U,F,"bindMatrixInverse");const jt=F.skeleton;jt&&(Ce.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Rt.setValue(U,"boneTexture",jt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Rt.setOptional(U,F,"batchingTexture"),Rt.setValue(U,"batchingTexture",F._matricesTexture,b));const nr=O.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0&&Ce.isWebGL2===!0)&&Ge.update(F,O,Gn),(Hi||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,Rt.setValue(U,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Vn.envMap.value=Te,Vn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Hi&&(Rt.setValue(U,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&lc(Vn,tr),de&&z.fog===!0&&le.refreshFogUniforms(Vn,de),le.refreshMaterialUniforms(Vn,z,j,V,ye),Ns.upload(U,ya(ze),Vn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ns.upload(U,ya(ze),Vn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Rt.setValue(U,"center",F.center),Rt.setValue(U,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(U,"normalMatrix",F.normalMatrix),Rt.setValue(U,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const jt=z.uniformsGroups;for(let ir=0,dc=jt.length;ir<dc;ir++)if(Ce.isWebGL2){const ba=jt[ir];Ye.update(ba,Gn),Ye.bind(ba,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function lc(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function cc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,I,O){Fe.get(v.texture).__webglTexture=I,Fe.get(v.depthTexture).__webglTexture=O;const z=Fe.get(v);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,I){const O=Fe.get(v);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,O=0){A=v,P=I,C=O;let z=!0,F=null,de=!1,me=!1;if(v){const Te=Fe.get(v);Te.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):Te.__webglFramebuffer===void 0?b.setupRenderTarget(v):Te.__hasExternalTextures&&b.rebindTextures(v,Fe.get(v.texture).__webglTexture,Fe.get(v.depthTexture).__webglTexture);const Be=v.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const Re=Fe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?F=Re[I][O]:F=Re[I],de=!0):Ce.isWebGL2&&v.samples>0&&b.useMultisampledRTT(v)===!1?F=Fe.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[O]:F=Re,M.copy(v.viewport),k.copy(v.scissor),H=v.scissorTest}else M.copy(Y).multiplyScalar(j).floor(),k.copy(ne).multiplyScalar(j).floor(),H=ie;if(pe.bindFramebuffer(U.FRAMEBUFFER,F)&&Ce.drawBuffers&&z&&pe.drawBuffers(v,F),pe.viewport(M),pe.scissor(k),pe.setScissorTest(H),de){const Te=Fe.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,O)}else if(me){const Te=Fe.get(v.texture),Be=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,O||0,Be)}$=-1},this.readRenderTargetPixels=function(v,I,O,z,F,de,me){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){pe.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Te=v.texture,Be=Te.format,Re=Te.type;if(Be!==ln&&ue.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===ts&&(_e.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==On&&ue.convert(Re)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Fn&&(Ce.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-z&&O>=0&&O<=v.height-F&&U.readPixels(I,O,z,F,ue.convert(Be),ue.convert(Re),de)}finally{const Te=A!==null?Fe.get(A).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(v,I,O=0){const z=Math.pow(2,-O),F=Math.floor(I.image.width*z),de=Math.floor(I.image.height*z);b.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,v.x,v.y,F,de),pe.unbindTexture()},this.copyTextureToTexture=function(v,I,O,z=0){const F=I.image.width,de=I.image.height,me=ue.convert(O.format),Me=ue.convert(O.type);b.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,v.x,v.y,F,de,me,Me,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,v.x,v.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,v.x,v.y,me,Me,I.image),z===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(v,I,O,z,F=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=v.max.x-v.min.x+1,me=v.max.y-v.min.y+1,Me=v.max.z-v.min.z+1,Te=ue.convert(z.format),Be=ue.convert(z.type);let Re;if(z.isData3DTexture)b.setTexture3D(z,0),Re=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)b.setTexture2DArray(z,0),Re=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Pe=U.getParameter(U.UNPACK_ROW_LENGTH),ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Gt=U.getParameter(U.UNPACK_SKIP_PIXELS),Mt=U.getParameter(U.UNPACK_SKIP_ROWS),gn=U.getParameter(U.UNPACK_SKIP_IMAGES),dt=O.isCompressedTexture?O.mipmaps[F]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,dt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,v.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,v.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,v.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(Re,F,I.x,I.y,I.z,de,me,Me,Te,Be,dt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Re,F,I.x,I.y,I.z,de,me,Me,Te,dt.data)):U.texSubImage3D(Re,F,I.x,I.y,I.z,de,me,Me,Te,Be,dt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Pe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Gt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,gn),F===0&&z.generateMipmaps&&U.generateMipmap(Re),pe.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===oa?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Js?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?ai:kl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ai?At:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xm extends tc{}xm.prototype.isWebGL1Renderer=!0;class ha{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ym extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new R;class Ws{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nc extends ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ti;const Xi=new R,Ai=new R,Ci=new R,Ri=new De,qi=new De,ic=new gt,Rs=new R,ji=new R,Ds=new R,Go=new De,Ur=new De,Vo=new De;class _m extends Ct{constructor(e=new nc){if(super(),this.isSprite=!0,this.type="Sprite",Ti===void 0){Ti=new mn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vm(t,5);Ti.setIndex([0,1,2,0,2,3]),Ti.setAttribute("position",new Ws(n,3,0,!1)),Ti.setAttribute("uv",new Ws(n,2,3,!1))}this.geometry=Ti,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),ic.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ci.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ls(Rs.set(-.5,-.5,0),Ci,a,Ai,i,r),Ls(ji.set(.5,-.5,0),Ci,a,Ai,i,r),Ls(Ds.set(.5,.5,0),Ci,a,Ai,i,r),Go.set(0,0),Ur.set(1,0),Vo.set(1,1);let o=e.ray.intersectTriangle(Rs,ji,Ds,!1,Xi);if(o===null&&(Ls(ji.set(-.5,.5,0),Ci,a,Ai,i,r),Ur.set(0,1),o=e.ray.intersectTriangle(Rs,Ds,ji,!1,Xi),o===null))return;const l=e.ray.origin.distanceTo(Xi);l<e.near||l>e.far||t.push({distance:l,point:Xi.clone(),uv:Qt.getInterpolation(Xi,Rs,ji,Ds,Go,Ur,Vo,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ls(s,e,t,n,i,r){Ri.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(qi.x=r*Ri.x-i*Ri.y,qi.y=i*Ri.x+r*Ri.y):qi.copy(Ri),s.copy(e),s.x+=qi.x,s.y+=qi.y,s.applyMatrix4(ic)}class bm extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,l,c=wt,d=wt,h,u){super(null,a,o,l,c,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua extends Ot{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fn extends mn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],m=[];let g=0;const x=[],f=n/2;let p=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(m,2));function S(){const T=new R,P=new R;let C=0;const A=(t-e)/n;for(let $=0;$<=r;$++){const _=[],M=$/r,k=M*(t-e)+e;for(let H=0;H<=i;H++){const Z=H/i,L=Z*l+o,N=Math.sin(L),V=Math.cos(L);P.x=k*N,P.y=-M*n+f,P.z=k*V,h.push(P.x,P.y,P.z),T.set(N,A,V).normalize(),u.push(T.x,T.y,T.z),m.push(Z,1-M),_.push(g++)}x.push(_)}for(let $=0;$<i;$++)for(let _=0;_<r;_++){const M=x[_][$],k=x[_+1][$],H=x[_+1][$+1],Z=x[_][$+1];d.push(M,k,Z),d.push(k,H,Z),C+=6}c.addGroup(p,C,0),p+=C}function E(T){const P=g,C=new De,A=new R;let $=0;const _=T===!0?e:t,M=T===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,f*M,0),u.push(0,M,0),m.push(.5,.5),g++;const k=g;for(let H=0;H<=i;H++){const L=H/i*l+o,N=Math.cos(L),V=Math.sin(L);A.x=_*V,A.y=f*M,A.z=_*N,h.push(A.x,A.y,A.z),u.push(0,M,0),C.x=N*.5+.5,C.y=V*.5*M+.5,m.push(C.x,C.y),g++}for(let H=0;H<i;H++){const Z=P+H,L=k+H;T===!0?d.push(L,L+1,Z):d.push(L+1,L,Z),$+=3}c.addGroup(p,$,T===!0?1:2),p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pa extends mn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new R,u=new R,m=[],g=[],x=[],f=[];for(let p=0;p<=n;p++){const S=[],E=p/n;let T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const C=P/t;h.x=-e*Math.cos(i+C*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(i+C*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),f.push(C+T,1-E),S.push(c++)}d.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const E=d[p][S+1],T=d[p][S],P=d[p+1][S],C=d[p+1][S+1];(p!==0||a>0)&&m.push(E,T,C),(p!==n-1||l<Math.PI)&&m.push(T,P,C)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tn extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mm extends ci{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class fa extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fr=new gt,Wo=new R,$o=new R;class sc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wo),$o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($o),t.updateMatrixWorld(),Fr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xo=new gt,Yi=new R,Nr=new R;class Em extends sc{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yi),Nr.copy(n.position),Nr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nr),n.updateMatrixWorld(),i.makeTranslation(-Yi.x,-Yi.y,-Yi.z),Xo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo)}}class qo extends fa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Em}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sm extends sc{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Sm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tm extends fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);class Am{constructor(e){w(this,"renderer");w(this,"camera");w(this,"activeScene",null);w(this,"lastTime",0);w(this,"_onTick");w(this,"_loop",e=>{requestAnimationFrame(this._loop);const t=Math.min(e-this.lastTime,100);this.lastTime=e,this._onTick?.(t),this.activeScene&&this.renderer.render(this.activeScene,this.camera)});this.renderer=new tc({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ml,this.renderer.toneMapping=Sl,this.renderer.toneMappingExposure=1.1,e.appendChild(this.renderer.domElement),this.camera=new $t(70,e.clientWidth/e.clientHeight,.1,60),this.camera.position.set(0,1.7,4),window.addEventListener("resize",()=>this._onResize(e))}setScene(e){this.activeScene=e}onTick(e){this._onTick=e}start(){this.lastTime=performance.now(),requestAnimationFrame(this._loop)}_onResize(e){const t=e.clientWidth,n=e.clientHeight;this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}}const Cm={"app.name":{ru:"Educator Sim 2",en:"Educator Sim 2"},"char.badge":{ru:"Educator Sim 2",en:"Educator Sim 2"},"char.title":{ru:"РЎРѕР·РґР°РЅРёРµ РїРµСЂСЃРѕРЅР°Р¶Р°",en:"Create Character"},"char.subtitle":{ru:"Р’С‹Р±РµСЂРёС‚Рµ РёРјСЏ, РїСЂРµРґРјРµС‚ Рё РєР»Р°СЃСЃ",en:"Choose your name, subject and class"},"char.name_label":{ru:"Р’Р°С€Рµ РёРјСЏ (Рё РѕС‚С‡РµСЃС‚РІРѕ)",en:"Your name"},"char.name_ph":{ru:"РќР°РїСЂРёРјРµСЂ: РРІР°РЅ РРІР°РЅРѕРІРёС‡",en:"e.g. John Smith"},"char.name_default":{ru:"РРІР°РЅ РРІР°РЅРѕРІРёС‡",en:"John Smith"},"char.subject":{ru:"РџСЂРµРґРјРµС‚",en:"Subject"},"char.grade":{ru:"РљР»Р°СЃСЃ (РіРѕРґ РѕР±СѓС‡РµРЅРёСЏ)",en:"School Grade"},"char.grade_unit":{ru:"РєР»Р°СЃСЃ",en:"grade"},"char.appearance":{ru:"Р’РЅРµС€РЅРѕСЃС‚СЊ",en:"Appearance"},"char.start":{ru:"рџЏ« РќР°С‡Р°С‚СЊ СЂР°Р±РѕС‚Сѓ!",en:"рџЏ« Start Teaching!"},"subj.math":{ru:"РњР°С‚РµРјР°С‚РёРєР°",en:"Mathematics"},"subj.physics":{ru:"Р¤РёР·РёРєР°",en:"Physics"},"subj.chemistry":{ru:"РҐРёРјРёСЏ",en:"Chemistry"},"subj.history":{ru:"РСЃС‚РѕСЂРёСЏ",en:"History"},"subj.literature":{ru:"Р›РёС‚РµСЂР°С‚СѓСЂР°",en:"Literature"},"subj.russian":{ru:"Р СѓСЃСЃРєРёР№ СЏР·С‹Рє",en:"Russian"},"app.default":{ru:"РљР»Р°СЃСЃРёС‡РµСЃРєРёР№",en:"Classic"},"app.strict":{ru:"РЎС‚СЂРѕРіРёР№",en:"Strict"},"app.cool":{ru:"РњРѕР»РѕРґРѕР№",en:"Cool"},"app.default_desc":{ru:"РЎС‚СЂРѕРіРёР№ РґРµР»РѕРІРѕР№ РєРѕСЃС‚СЋРј",en:"Formal business suit"},"app.strict_desc":{ru:"Р’СЃРµРіРґР° СЃ СѓРєР°Р·РєРѕР№",en:"Always with a pointer"},"app.cool_desc":{ru:"РЎРІРёС‚РµСЂ Рё РґР¶РёРЅСЃС‹",en:"Sweater and jeans"},"hud.day":{ru:"Р”РµРЅСЊ",en:"Day"},"hud.attention":{ru:"Р’РЅРёРјР°РЅРёРµ РєР»Р°СЃСЃР°",en:"Class Attention"},"hud.reputation":{ru:"Р РµРїСѓС‚Р°С†РёСЏ",en:"Reputation"},"hud.salary":{ru:"Р—Р°СЂРїР»Р°С‚Р°",en:"Salary"},"hud.topic_prefix":{ru:"РўРµРјР°:",en:"Topic:"},"hud.hint_e":{ru:"РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёРµ",en:"interact"},"hud.hint_f1":{ru:"РєСѓСЂСЃРѕСЂ",en:"cursor"},"hud.phase.explanation":{ru:"РћР±СЉСЏСЃРЅРµРЅРёРµ",en:"Explanation"},"hud.phase.tasks":{ru:"Р—Р°РґР°РЅРёСЏ",en:"Tasks"},"hud.phase.grading":{ru:"РџСЂРѕРІРµСЂРєР° С‚РµС‚СЂР°РґРµР№",en:"Grading Notebooks"},"hud.phase.homework":{ru:"Р”РѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ",en:"Homework"},"hud.phase.done":{ru:"РЈСЂРѕРє Р·Р°РІРµСЂС€С‘РЅ",en:"Lesson Complete"},"hud.phase.quiz":{ru:"РљРѕРЅС‚СЂРѕР»СЊРЅР°СЏ",en:"Quiz Day"},"hud.warn_attention":{ru:"вљ пёЏ РљР»Р°СЃСЃ С‚РµСЂСЏРµС‚ РІРЅРёРјР°РЅРёРµ!",en:"вљ пёЏ Class is losing attention!"},"expl.round":{ru:"Р§Р°СЃС‚СЊ",en:"Part"},"expl.topic":{ru:"РўРµРјР°:",en:"Topic:"},"expl.choose":{ru:"Р’С‹Р±РµСЂРёС‚Рµ РјРµС‚РѕРґ РѕР±СЉСЏСЃРЅРµРЅРёСЏ",en:"Choose an explanation method"},"expl.understanding":{ru:"РџРѕРЅРёРјР°РЅРёРµ",en:"Understanding"},"expl.attention":{ru:"Р’РЅРёРјР°РЅРёРµ",en:"Attention"},"expl.phase.intro":{ru:"Р’РІРµРґРµРЅРёРµ",en:"Introduction"},"expl.phase.main":{ru:"РћСЃРЅРѕРІРЅР°СЏ С‡Р°СЃС‚СЊ",en:"Core Lesson"},"expl.phase.conclusion":{ru:"Р—Р°РєСЂРµРїР»РµРЅРёРµ",en:"Practice"},"expl.stars.hard":{ru:"в…в…в… РЎР»РѕР¶РЅРѕ",en:"в…в…в… Difficult"},"expl.stars.medium":{ru:"в…в… РЎСЂРµРґРЅРµ",en:"в…в… Medium"},"expl.stars.easy":{ru:"в… Р›РµРіРєРѕ",en:"в… Easy"},"quiz.wednesday":{ru:"рџ“‹ РЎСЂРµРґР° вЂ” РїСЂРѕРІРµСЂРѕС‡РЅР°СЏ СЂР°Р±РѕС‚Р°!",en:"рџ“‹ Wednesday вЂ” Quiz Day!"},"quiz.collect_e":{ru:"рџ““ РЎРѕР±РµСЂРёС‚Рµ СЂР°Р±РѕС‚С‹ вЂ” РЅР°Р¶РјРёС‚Рµ E",en:"рџ““ Collect quizzes вЂ” press E"},"expl.type.theory":{ru:"С‚РµРѕСЂРёСЏ",en:"theory"},"expl.type.board":{ru:"РґРѕСЃРєР°",en:"board"},"expl.type.example":{ru:"РїСЂРёРјРµСЂ",en:"example"},"expl.type.question":{ru:"РІРѕРїСЂРѕСЃ",en:"question"},"nb.title":{ru:"рџ““ РџСЂРѕРІРµСЂРєР° С‚РµС‚СЂР°РґРµР№",en:"рџ““ Grading Notebooks"},"nb.student":{ru:"РЈС‡РµРЅРёРє:",en:"Student:"},"nb.errors_title":{ru:"РќР°Р№РґРµРЅРЅС‹Рµ РѕС€РёР±РєРё",en:"Found errors"},"nb.no_errors":{ru:"вњ… РћС€РёР±РѕРє РЅРµ РЅР°Р№РґРµРЅРѕ!",en:"вњ… No errors found!"},"nb.grade":{ru:"РћС†РµРЅРєР°:",en:"Grade:"},"nb.submit":{ru:"РџРѕСЃС‚Р°РІРёС‚СЊ в†’ РїСЂРѕРґРѕР»Р¶РёС‚СЊ",en:"Grade в†’ continue"},"nb.finish":{ru:"Р—Р°РІРµСЂС€РёС‚СЊ РїСЂРѕРІРµСЂРєСѓ",en:"Finish grading"},"nb.feedback.2":{ru:"РњР°С‚РµСЂРёР°Р» РЅРµ СѓСЃРІРѕРµРЅ. РЎРµСЂСЊС‘Р·РЅР°СЏ СЂР°Р±РѕС‚Р° РЅР°Рґ РѕС€РёР±РєР°РјРё.",en:"Material not mastered. Serious revision needed."},"nb.feedback.3":{ru:"РЈРґРѕРІР»РµС‚РІРѕСЂРёС‚РµР»СЊРЅРѕ. РћСЃРЅРѕРІРЅС‹Рµ РјРѕРјРµРЅС‚С‹ РїРѕРЅСЏС‚С‹.",en:"Satisfactory. Core ideas understood."},"nb.feedback.4":{ru:"РҐРѕСЂРѕС€Р°СЏ СЂР°Р±РѕС‚Р°! РќРµР±РѕР»СЊС€РёРµ РЅРµРґРѕС‡С‘С‚С‹.",en:"Good work! Minor issues."},"nb.feedback.5":{ru:"РћС‚Р»РёС‡РЅРѕ! Р‘РµР·СѓРїСЂРµС‡РЅР°СЏ СЂР°Р±РѕС‚Р°.",en:"Excellent! Flawless work."},"ev.label":{ru:"РЎРѕР±С‹С‚РёРµ",en:"Event"},"ev.continue":{ru:"РџСЂРѕРґРѕР»Р¶РёС‚СЊ СѓСЂРѕРє",en:"Continue lesson"},"pause.title":{ru:"вЏё РџР°СѓР·Р°",en:"вЏё Paused"},"pause.resume":{ru:"в–¶  РџСЂРѕРґРѕР»Р¶РёС‚СЊ",en:"в–¶  Resume"},"pause.save":{ru:"рџ’ѕ  РЎРѕС…СЂР°РЅРёС‚СЊ",en:"рџ’ѕ  Save"},"pause.settings":{ru:"вљ™пёЏ  РќР°СЃС‚СЂРѕР№РєРё",en:"вљ™пёЏ  Settings"},"pause.menu":{ru:"рџЏ   Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ",en:"рџЏ   Main Menu"},"pause.menu_confirm":{ru:"Р’С‹Р№С‚Рё РІ РјРµРЅСЋ? РќРµСЃРѕС…СЂР°РЅС‘РЅРЅС‹Р№ РїСЂРѕРіСЂРµСЃСЃ РїРѕС‚РµСЂСЏРµС‚СЃСЏ.",en:"Exit to menu? Unsaved progress will be lost."},"pause.version":{ru:"Educator Sim v2 В· teach2",en:"Educator Sim v2 В· teach2"},"report.title":{ru:"рџ“‹ РС‚РѕРіРё СѓСЂРѕРєР°",en:"рџ“‹ Lesson Report"},"report.understood":{ru:"РџРѕРЅСЏР»Рё С‚РµРјСѓ",en:"Understood topic"},"report.avg_und":{ru:"РЎСЂРµРґРЅРµРµ РїРѕРЅРёРјР°РЅРёРµ",en:"Avg. understanding"},"report.xp":{ru:"РћРїС‹С‚",en:"Experience"},"report.rep":{ru:"Р РµРїСѓС‚Р°С†РёСЏ",en:"Reputation"},"report.nb_grades":{ru:"рџ““ РћС†РµРЅРєРё Р·Р° С‚РµС‚СЂР°РґРё",en:"рџ““ Notebook grades"},"report.hw_given":{ru:"рџ“љ Р”РѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ Р·Р°РґР°РЅРѕ",en:"рџ“љ Homework assigned"},"report.hw_none":{ru:"Р”РѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ РЅРµ Р·Р°РґР°РЅРѕ",en:"No homework assigned"},"report.next":{ru:"РЎР»РµРґСѓСЋС‰РёР№ СѓСЂРѕРє в†’",en:"Next lesson в†’"},"sched.label":{ru:"Р Р°СЃРїРёСЃР°РЅРёРµ",en:"Schedule"},"sched.day":{ru:"Р”РµРЅСЊ",en:"Day"},"sched.start":{ru:"в–¶ РќР°С‡Р°С‚СЊ СѓСЂРѕРє",en:"в–¶ Start lesson"},"sched.continue":{ru:"в–¶ РџСЂРѕРґРѕР»Р¶РёС‚СЊ",en:"в–¶ Continue"},"week.title":{ru:"РС‚РѕРіРё РЅРµРґРµР»Рё",en:"Week Summary"},"week.promoted":{ru:"рџЏ† РљР°СЂСЊРµСЂР° РїРѕРІС‹С€РµРЅР°!",en:"рџЏ† Promoted!"},"week.xp":{ru:"РџРѕР»СѓС‡РµРЅРѕ РѕРїС‹С‚Р°",en:"Experience gained"},"week.rep":{ru:"РР·РјРµРЅРµРЅРёРµ СЂРµРїСѓС‚Р°С†РёРё",en:"Reputation change"},"week.money":{ru:"Р—Р°СЂРїР»Р°С‚Р°",en:"Salary"},"week.sp":{ru:"РћС‡РєРё РЅР°РІС‹РєРѕРІ",en:"Skill points"},"week.career":{ru:"РљР°СЂСЊРµСЂРЅС‹Р№ СѓСЂРѕРІРµРЅСЊ",en:"Career level"},"week.bonus":{ru:"РќР°РґР±Р°РІРєР°:",en:"Bonus:"},"week.lessons":{ru:"РџСЂРѕРІРµРґРµРЅРѕ СѓСЂРѕРєРѕРІ:",en:"Lessons taught:"},"week.next":{ru:"в–¶ РќР°С‡Р°С‚СЊ СЃР»РµРґСѓСЋС‰СѓСЋ РЅРµРґРµР»СЋ",en:"в–¶ Start next week"},"skills.title":{ru:"рџЊі Р”РµСЂРµРІРѕ РЅР°РІС‹РєРѕРІ",en:"рџЊі Skill Tree"},"skills.points":{ru:"РћС‡РєРё РЅР°РІС‹РєРѕРІ:",en:"Skill points:"},"skills.branch.pedagogy":{ru:"рџ“љ РџРµРґР°РіРѕРіРёРєР°",en:"рџ“љ Pedagogy"},"skills.branch.psychology":{ru:"рџ§  РџСЃРёС…РѕР»РѕРіРёСЏ",en:"рџ§  Psychology"},"skills.branch.org":{ru:"рџ“‹ РћСЂРіР°РЅРёР·Р°С†РёСЏ",en:"рџ“‹ Organization"},"skills.sp_unit":{ru:" SP",en:" SP"},"skills.unlocked":{ru:"РѕС‚РєСЂС‹С‚Рѕ",en:"unlocked"},"skill.ped1.name":{ru:"Р РёС‚РѕСЂРёРєР°",en:"Rhetoric"},"skill.ped1.desc":{ru:"РћР±СЉСЏСЃРЅРµРЅРёСЏ +20% РІРЅРёРјР°РЅРёСЏ",en:"Explanations +20% attention"},"skill.ped2.name":{ru:"РњР°СЃС‚РµСЂ РґРѕСЃРєРё",en:"Board Master"},"skill.ped2.desc":{ru:"Р”РѕСЃРєР° +25% РїРѕРЅРёРјР°РЅРёСЏ",en:"Board +25% understanding"},"skill.ped3.name":{ru:"РЎС‚РѕСЂРёС‚РµР»Р»РёРЅРі",en:"Storytelling"},"skill.ped3.desc":{ru:"РџСЂРёРјРµСЂС‹ +35% РјРѕС‚РёРІР°С†РёРё",en:"Examples +35% motivation"},"skill.ped4.name":{ru:"РњРµС‚РѕРґРёСЃС‚",en:"Methodologist"},"skill.ped4.desc":{ru:"РљСѓР»РґР°СѓРЅС‹ РґРµР№СЃС‚РІРёР№ в€’25%",en:"Action cooldowns в€’25%"},"skill.ped5.name":{ru:"РњР°СЃС‚РµСЂ-РєР»Р°СЃСЃ",en:"Master Class"},"skill.ped5.desc":{ru:"XP Р·Р° РѕР±СЉСЏСЃРЅРµРЅРёСЏ Г—1.5",en:"XP for explanations Г—1.5"},"skill.psy1.name":{ru:"Р­РјРїР°С‚РёСЏ",en:"Empathy"},"skill.psy1.desc":{ru:"РџРѕС…РІР°Р»Р° +25% РІРЅРёРјР°РЅРёСЏ",en:"Praise +25% attention"},"skill.psy2.name":{ru:"РџСЃРёС…РѕР»РѕРі",en:"Psychologist"},"skill.psy2.desc":{ru:"РўСЂРµРІРѕР¶РЅС‹Рµ СѓС‡Р°С‚СЃСЏ Р»СѓС‡С€Рµ",en:"Anxious students learn better"},"skill.psy3.name":{ru:"РњРѕС‚РёРІР°С‚РѕСЂ",en:"Motivator"},"skill.psy3.desc":{ru:"Р—Р°РґР°РЅРёСЏ +50% РјРѕС‚РёРІР°С†РёРё",en:"Tasks +50% motivation"},"skill.psy4.name":{ru:"РљРѕРЅС„Р»РёРєС‚РѕР»РѕРі",en:"Conflict Resolver"},"skill.psy4.desc":{ru:"РљРѕРЅС„Р»РёРєС‚С‹ в€’50% СѓСЂРѕРЅР°",en:"Conflicts в€’50% damage"},"skill.psy5.name":{ru:"РќР°СЃС‚Р°РІРЅРёРє",en:"Mentor"},"skill.psy5.desc":{ru:"Р РµРїСѓС‚Р°С†РёСЏ СЂР°СЃС‚С‘С‚ Г—1.5",en:"Reputation grows Г—1.5"},"skill.org1.name":{ru:"РўР°Р№Рј-РјРµРЅ.",en:"Time Manager"},"skill.org1.desc":{ru:"Р¤Р°Р·С‹ СѓСЂРѕРєР° +10% XP",en:"Lesson phases +10% XP"},"skill.org2.name":{ru:"РџР»Р°РЅРёСЂРѕРІС‰РёРє",en:"Planner"},"skill.org2.desc":{ru:"Р’РёРєС‚РѕСЂРёРЅР° +40% РІРЅРёРјР°РЅРёСЏ",en:"Quiz +40% attention"},"skill.org3.name":{ru:"РђРґРјРёРЅРёСЃС‚СЂР°С‚РѕСЂ",en:"Administrator"},"skill.org3.desc":{ru:"Р—Р°СЂРїР»Р°С‚Р° +10% РІ РЅРµРґРµР»СЋ",en:"Salary +10% per week"},"skill.org4.name":{ru:"РРЅРЅРѕРІР°С‚РѕСЂ",en:"Innovator"},"skill.org4.desc":{ru:"РћСЃРѕР±С‹Рµ СЃРѕР±С‹С‚РёСЏ Г—2 XP",en:"Special events Г—2 XP"},"skill.org5.name":{ru:"Р”РёСЂРµРєС‚РѕСЂ",en:"Director"},"skill.org5.desc":{ru:"Р Р°Р·Р±Р»РѕРєРёСЂСѓРµС‚ СЂРµР¶РёРј РґРёСЂРµРєС‚РѕСЂР°",en:"Unlocks Director mode"},"student.genius":{ru:"рџ§  РћС‚Р»РёС‡РЅРёРє",en:"рџ§  Genius"},"student.lazy":{ru:"рџґ Р›РµРЅС‚СЏР№",en:"рџґ Lazy"},"student.bully":{ru:"рџ¤ РҐСѓР»РёРіР°РЅ",en:"рџ¤ Bully"},"student.anxious":{ru:"рџ° РўСЂРµРІРѕР¶РЅС‹Р№",en:"рџ° Anxious"},"student.helper":{ru:"рџ¤ќ РџРѕРјРѕС‰РЅРёРє",en:"рџ¤ќ Helper"},"student.average":{ru:"рџЉ РћР±С‹С‡РЅС‹Р№",en:"рџЉ Average"},"remark.warning":{ru:"Р”Р°С‚СЊ Р·Р°РјРµС‡Р°РЅРёРµ",en:"Give Warning"},"remark.confiscate":{ru:"РћС‚РѕР±СЂР°С‚СЊ С‚РµР»РµС„РѕРЅ",en:"Confiscate Phone"},"remark.wake":{ru:"Р Р°Р·Р±СѓРґРёС‚СЊ",en:"Wake Up"},"remark.praise":{ru:"РџРѕС…РІР°Р»РёС‚СЊ",en:"Praise"},"remark.dismiss":{ru:"Р’С‹РіРЅР°С‚СЊ РёР· РєР»Р°СЃСЃР°",en:"Dismiss from Class"},"remark.warning_desc":{ru:"РџСЂРµРґСѓРїСЂРµРґРёС‚СЊ Р·Р° РЅР°СЂСѓС€РµРЅРёРµ РґРёСЃС†РёРїР»РёРЅС‹",en:"Warn for discipline violation"},"remark.confiscate_desc":{ru:"Р—Р°Р±СЂР°С‚СЊ С‚РµР»РµС„РѕРЅ РґРѕ РєРѕРЅС†Р° СѓСЂРѕРєР°",en:"Take phone until end of lesson"},"remark.wake_desc":{ru:"Р Р°Р·Р±СѓРґРёС‚СЊ СЃРїСЏС‰РµРіРѕ СѓС‡РµРЅРёРєР°",en:"Wake up sleeping student"},"remark.praise_desc":{ru:"РћС‚РјРµС‚РёС‚СЊ СѓСЃРµСЂРґРёРµ РёР»Рё РѕС‚РІРµС‚ СѓС‡РµРЅРёРєР°",en:"Note effort or student answer"},"remark.dismiss_desc":{ru:"Р’С‹РіРЅР°С‚СЊ Р·Р° СЃРµСЂСЊС‘Р·РЅРѕРµ РїРѕРІРµРґРµРЅРёРµ (-15 РґРёСЃС†РёРїР»РёРЅР°)",en:"Dismiss for serious behavior (-15 discipline)"},"task.phase":{ru:"Р¤Р°Р·Р° Р·Р°РґР°РЅРёР№",en:"Task Phase"},"task.choose_format":{ru:"Р’С‹Р±РµСЂРёС‚Рµ С„РѕСЂРјР°С‚ Р·Р°РґР°РЅРёСЏ",en:"Choose task format"},"task.format":{ru:"Р¤РѕСЂРјР°С‚:",en:"Format:"},"task.difficulty":{ru:"РЎР»РѕР¶РЅРѕСЃС‚СЊ:",en:"Difficulty:"},"task.task_for_class":{ru:"Р—Р°РґР°РЅРёРµ РґР»СЏ РєР»Р°СЃСЃР°:",en:"Task for class:"},"task.give_task":{ru:"Р”Р°С‚СЊ Р·Р°РґР°РЅРёРµ РєР»Р°СЃСЃСѓ",en:"Give task to class"},"task.easy":{ru:"Р›С‘РіРєРѕРµ",en:"Easy"},"task.medium":{ru:"РЎСЂРµРґРЅРµРµ",en:"Medium"},"task.hard":{ru:"РЎР»РѕР¶РЅРѕРµ",en:"Hard"},"task.easy_desc":{ru:"Р‘Р°Р·РѕРІС‹Р№ СѓСЂРѕРІРµРЅСЊ вЂ” РїСЂРѕРІРµСЂРєР° РїРѕРЅРёРјР°РЅРёСЏ. РЎРїСЂР°РІСЏС‚СЃСЏ РїРѕС‡С‚Рё РІСЃРµ.",en:"Basic level вЂ” understanding check. Almost everyone will succeed."},"task.medium_desc":{ru:"РЎСЂРµРґРЅСЏСЏ СЃР»РѕР¶РЅРѕСЃС‚СЊ вЂ” РЅСѓР¶РЅРѕ РїРѕРґСѓРјР°С‚СЊ. РҐРѕСЂРѕС€РёРµ СѓС‡РµРЅРёРєРё СЃРїСЂР°РІСЏС‚СЃСЏ.",en:"Medium difficulty вЂ” needs thinking. Good students will succeed."},"task.hard_desc":{ru:"Р’С‹СЃРѕРєРёР№ СѓСЂРѕРІРµРЅСЊ вЂ” С‚РѕР»СЊРєРѕ РѕС‚Р»РёС‡РЅРёРєРё. РћСЃС‚Р°Р»СЊРЅС‹Рµ РјРѕРіСѓС‚ Р·Р°РїСѓС‚Р°С‚СЊСЃСЏ.",en:"High level вЂ” only top students. Others may get confused."},"task.board":{ru:"РЈ РґРѕСЃРєРё",en:"At Board"},"task.written":{ru:"РџРёСЃСЊРјРµРЅРЅРѕ",en:"Written"},"task.board_desc":{ru:"Р’С‹Р·РѕРІРёС‚Рµ СѓС‡РµРЅРёРєР° Рє РґРѕСЃРєРµ. РџРѕРІС‹С€Р°РµС‚ РІРЅРёРјР°РЅРёРµ С…СѓР»РёРіР°РЅРѕРІ Рё Р»РµРЅС‚СЏРµРІ.",en:"Call student to board. Increases attention of bullies and lazy students."},"task.written_desc":{ru:"Р Р°Р·РґР°Р№С‚Рµ Р·Р°РґР°РЅРёРµ РЅР° Р±СѓРјР°РіРµ. РљР°Р¶РґС‹Р№ СЂР°Р±РѕС‚Р°РµС‚ СЃР°РјРѕСЃС‚РѕСЏС‚РµР»СЊРЅРѕ.",en:"Distribute paper task. Everyone works independently."},"prep.title":{ru:"РџРѕРґРіРѕС‚РѕРІРєР° Рє СѓСЂРѕРєСѓ",en:"Lesson Preparation"},"prep.grade":{ru:"РєР»Р°СЃСЃ",en:"grade"},"prep.topic":{ru:"РўРµРјР°:",en:"Topic:"},"prep.hw_submitted":{ru:"Р”Р— СЃРґР°Р»Рё:",en:"HW submitted:"},"prep.hw_checked":{ru:"РџСЂРѕРІРµСЂРµРЅРѕ",en:"Checked"},"prep.how_start":{ru:"РљР°Рє РЅР°С‡РЅС‘С‚Рµ СѓСЂРѕРє?",en:"How will you start the lesson?"},"prep.check_hw":{ru:"РџСЂРѕРІРµСЂРёС‚СЊ РґРѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ",en:"Check Homework"},"prep.check_hw_desc":{ru:"РћС‚РєСЂС‹С‚СЊ Р¶СѓСЂРЅР°Р» Р”Р—, РІС‹СЃС‚Р°РІРёС‚СЊ РѕС†РµРЅРєРё РєР°Р¶РґРѕРјСѓ СѓС‡РµРЅРёРєСѓ",en:"Open HW journal, grade each student"},"prep.review":{ru:"РџРѕРІС‚РѕСЂРёС‚СЊ С‚РµРјСѓ",en:"Review Topic"},"prep.review_desc":{ru:"РћСЃРІРµР¶РёС‚СЊ РјР°С‚РµСЂРёР°Р» СѓСЂРѕРєР° вЂ” РїРµСЂРІРѕРµ РѕР±СЉСЏСЃРЅРµРЅРёРµ СЃС‚Р°РЅРµС‚ С‚РѕС‡РЅРµРµ",en:"Refresh lesson material вЂ” first explanation will be more accurate"},"prep.bright_start":{ru:"РЇСЂРєРѕРµ РЅР°С‡Р°Р»Рѕ",en:"Bright Start"},"prep.bright_desc":{ru:"Р—Р°РіР°РґРєР° РёР»Рё РёРЅС‚СЂРёРіСѓСЋС‰РёР№ РІРѕРїСЂРѕСЃ вЂ” РєР»Р°СЃСЃ СЃСЂР°Р·Сѓ РІРєР»СЋС‡Р°РµС‚СЃСЏ",en:"Riddle or intriguing question вЂ” class engages immediately"},"prep.quick_start":{ru:"РЎСЂР°Р·Сѓ Рє СѓСЂРѕРєСѓ",en:"Quick Start"},"prep.quick_desc":{ru:"Р‘РµР· РїРѕРґРіРѕС‚РѕРІРєРё. РќРёРєР°РєРёС… Р±РѕРЅСѓСЃРѕРІ, Р·Р°С‚Рѕ Р±С‹СЃС‚СЂРµРµ.",en:"No preparation. No bonuses, but faster."},"prep.understanding":{ru:"РїРѕРЅРёРјР°РЅРёРµ",en:"understanding"},"prep.attention":{ru:"РІРЅРёРјР°РЅРёРµ",en:"attention"},"hwcheck.title":{ru:"РџСЂРѕРІРµСЂРєР° РґРѕРјР°С€РЅРµРіРѕ Р·Р°РґР°РЅРёСЏ",en:"Homework Check"},"hwcheck.submitted":{ru:"РЎРґР°Р»Рё:",en:"Submitted:"},"hwcheck.of":{ru:"РёР·",en:"of"},"hwcheck.completed":{ru:"РІС‹РїРѕР»РЅРёР»Рё",en:"completed"},"hwcheck.done":{ru:"Р’С‹РїРѕР»РЅРёР»Рё вЂ” РІС‹СЃС‚Р°РІРёС‚Рµ РѕС†РµРЅРєСѓ:",en:"Done вЂ” assign grade:"},"hwcheck.not_done":{ru:"РќРµ РІС‹РїРѕР»РЅРёР»Рё вЂ” РїРѕР»СѓС‡Р°С‚ 2:",en:"Not done вЂ” will get F:"},"hwcheck.skip":{ru:"РќРµ РїСЂРѕРІРµСЂСЏС‚СЊ",en:"Skip Check"},"hwcheck.finish":{ru:"Р—Р°РІРµСЂС€РёС‚СЊ РїСЂРѕРІРµСЂРєСѓ",en:"Finish Check"},"event.title":{ru:"РЎРѕР±С‹С‚РёРµ",en:"Event"},"event.continue":{ru:"РџСЂРѕРґРѕР»Р¶РёС‚СЊ СѓСЂРѕРє",en:"Continue Lesson"},"break.title":{ru:"РџРµСЂРµРјРµРЅР°!",en:"Break!"},"break.enter":{ru:"РќР°Р¶РјРёС‚Рµ E Сѓ РґРІРµСЂРё РєР»Р°СЃСЃР° С‡С‚РѕР±С‹ РІРѕР№С‚Рё СЂР°РЅСЊС€Рµ",en:"Press E at classroom door to enter early"},"break.remaining":{ru:"РџРµСЂРµРјРµРЅР° вЂ” РѕСЃС‚Р°Р»РѕСЃСЊ",en:"Break вЂ” remaining"},"break.sec":{ru:"СЃРµРє.",en:"sec."},"break.enter_door":{ru:"E Сѓ РґРІРµСЂРё вЂ” РІРѕР№С‚Рё",en:"E at door вЂ” enter"},"vp.title":{ru:"Р—Р°РІСѓС‡",en:"Vice Principal"},"vp.day":{ru:"Р”РµРЅСЊ",en:"Day"},"vp.go_to":{ru:"РёРґРёС‚Рµ Рє",en:"go to"},"vp.room":{ru:"РєР°Р±РёРЅРµС‚Сѓ",en:"room"},"vp.inspection_complete":{ru:"РћР±С…РѕРґ Р·Р°РІРµСЂС€С‘РЅ",en:"Inspection Complete"},"vp.points":{ru:"Р‘Р°Р»Р»РѕРІ:",en:"Points:"},"vp.rep":{ru:"Р РµРїСѓС‚",en:"Rep"},"vp.promoted":{ru:"Р’С‹ РЅР°Р·РЅР°С‡РµРЅС‹ Р”РёСЂРµРєС‚РѕСЂРѕРј С€РєРѕР»С‹!",en:"You are appointed School Director!"},"vp.wander":{ru:"РҐРѕРґРёС‚Рµ РїРѕ С€РєРѕР»Рµ, СЃРјРѕС‚СЂРёС‚Рµ Р·Р° СѓС‡РµРЅРёРєР°РјРё",en:"Walk around school, watch students"},"director.title":{ru:"Р”РёСЂРµРєС‚РѕСЂ",en:"Director"},"notif.saved":{ru:"РЎРѕС…СЂР°РЅРµРЅРѕ!",en:"Saved!"},"notif.settings_unavailable":{ru:"РќР°СЃС‚СЂРѕР№РєРё РїРѕРєР° РЅРµРґРѕСЃС‚СѓРїРЅС‹",en:"Settings not available yet"},"notif.got_warning":{ru:"РїРѕР»СѓС‡РёР» Р·Р°РјРµС‡Р°РЅРёРµ",en:"got warning"},"notif.phone_taken":{ru:"РўРµР»РµС„РѕРЅ РёР·СЉСЏС‚",en:"Phone confiscated"},"notif.woke_up":{ru:"РїСЂРѕСЃРЅСѓР»СЃСЏ",en:"wooke up"},"notif.praised":{ru:"РїРѕС…РІР°Р»РµРЅ!",en:"praised!"},"notif.dismissed":{ru:"РІС‹РіРЅР°РЅ РёР· РєР»Р°СЃСЃР°",en:"dismissed from class"},"notif.losing_attention":{ru:"РљР»Р°СЃСЃ С‚РµСЂСЏРµС‚ РІРЅРёРјР°РЅРёРµ!",en:"Class is losing attention!"},"career.novice":{ru:"рџЊ± РќРѕРІРёС‡РѕРє",en:"рџЊ± Novice"},"career.cat2":{ru:"рџ“ 2-СЃР°РЅР°С‚",en:"рџ“ Category 2"},"career.cat1":{ru:"рџ“— 1-СЃР°РЅР°С‚",en:"рџ“— Category 1"},"career.highest":{ru:"рџ“™ Р–РѕТ“Р°СЂС‹",en:"рџ“™ Highest"},"career.honored":{ru:"рџҐ‡ Т®Р·РґС–Рє",en:"рџҐ‡ Honored"},"career.zavuch":{ru:"рџЏ›пёЏ Р—Р°РІСѓС‡",en:"рџЏ›пёЏ Vice Principal"},"career.director":{ru:"рџ‘” Р”РёСЂРµРєС‚РѕСЂ",en:"рџ‘” Director"},"ending.history":{ru:"РўР°СЂРёС… Р¶Р°СЃР°Р»РґС‹",en:"History Made"},"ending.school_year":{ru:"Р–С‹Р» РјРµРєС‚РµР±С–!",en:"School Year!"},"ending.teacher_of":{ru:"РјТ±Т“Р°Р»С–РјС–",en:"Teacher of"},"ending.ministry":{ru:"ТљР°Р·Р°Т›СЃС‚Р°РЅ Р РµСЃРїСѓР±Р»РёРєР°СЃС‹ вЂ” Р‘С–Р»С–Рј Р¶У™РЅРµ Т“С‹Р»С‹Рј РјРёРЅРёСЃС‚СЂР»С–РіС–",en:"Republic of Kazakhstan вЂ” Ministry of Education and Science"},"ending.certificate":{ru:"Т®Р·РґС–Рє РїРµРґР°РіРѕРі РєСѓУ™Р»С–РіС–",en:"Excellence in Teaching Certificate"},"ending.school":{ru:"РћСЂС‚Р° РјРµРєС‚РµРї в„–47",en:"Secondary School No. 47"},"ending.weeks_work":{ru:"Р°РїС‚Р° Р¶Т±РјС‹СЃ",en:"weeks of work"},"ending.students_taught":{ru:"РѕТ›СѓС€С‹ С‚У™СЂР±РёРµР»РµРЅРґС–",en:"students taught"},"ending.avg_score":{ru:"РѕСЂС‚Р°С€Р° Р±Р°Р»Р»С‹",en:"average score"},"ending.school_rating":{ru:"РњРµРєС‚РµРї СЂРµР№С‚РёРЅРіС–",en:"School Rating"},"ending.total_earned":{ru:"Р‘Р°СЂР»С‹Т“С‹ С‚Р°Р±С‹Р»РґС‹",en:"Total Earned"},"ending.reputation":{ru:"Р‘РµРґРµР»С–",en:"Reputation"},"ending.subject":{ru:"РџУ™РЅ",en:"Subject"},"ending.career_path":{ru:"РњР°РЅСЃР°Рї Р¶РѕР»С‹",en:"Career Path"},"ending.career_title":{ru:"рџ“€ РњР°РЅСЃР°Рї Р¶РѕР»С‹",en:"рџ“€ Career Path"},"ending.continue":{ru:"Р–Р°Р»Т“Р°СЃС‚С‹СЂСѓ",en:"Continue"},"ending.new_game":{ru:"Р–Р°ТЈР° РѕР№С‹РЅ",en:"New Game"},"ending.best_school":{ru:"РЎС–Р·РґС–ТЈ РјРµРєС‚РµР±С–ТЈС–Р· ТљР°Р·Р°Т›СЃС‚Р°РЅРЅС‹ТЈ ТЇР·РґС–Рє РјРµРєС‚РµРїС‚РµСЂС–РЅС–ТЈ Р±С–СЂС– Р°С‚Р°РЅРґС‹!",en:"Your school has become one of the best schools in Kazakhstan!"},"ending.students_improved":{ru:"РѕТ›СѓС€С‹ СЃС–Р·РґС–ТЈ Р¶РµС‚РµРєС€С–Р»С–РєС‚РµСЂС–ТЈС–Р·РґРµ Р±С–Р»С–РјС–РЅ Р¶РµС‚С–Р»РґС–СЂРґС–",en:"students improved their knowledge under your leadership"},"ending.true_victory":{ru:"Р‘Т±Р» вЂ” С€С‹РЅ РјР°Т“С‹РЅР°СЃС‹РЅРґР°Т“С‹ Р¶РµТЈС–СЃ.",en:"This is a true victory."},"ending.reputation_spread":{ru:"РЎС–Р·РґС–ТЈ Р±РµРґРµР»С–ТЈС–Р· Р±ТЇРєС–Р» Р°СѓРґР°РЅРґР° Р¶Р°Р№С‹Р»РґС‹",en:"Your reputation has spread throughout the district"},"ending.true_teacher":{ru:"С€С‹РЅ РјТ±Т“Р°Р»С–РјРЅС–ТЈ Р±РµР»РіС–СЃС–",en:"sign of a true teacher"},"ending.year_worked":{ru:"Р°РїС‚Р° Р±РѕР№С‹ СЃС–Р· РјРµРєС‚РµРїС‚С– Р¶РµС‚С–Р»РґС–СЂСѓРіРµ Р¶Р°РЅ Р°СЏСѓСЃС‹Р· РµТЈР±РµРє РµС‚С‚С–ТЈС–Р·",en:"weeks you worked tirelessly to improve the school"},"ending.wont_forget":{ru:"РћТ›СѓС€С‹Р»Р°СЂ СЃС–Р·РґС– Т±РјС‹С‚РїР°Р№РґС‹",en:"Students will not forget you"},"ending.most_important":{ru:"Р‘Т±Р» РµТЈ РјР°ТЈС‹Р·РґС‹ РЅУ™СЂСЃРµ",en:"This is the most important thing"},"exam.title":{ru:"РљРћРќРўР РћР›Р¬РќРђРЇ Р РђР‘РћРўРђ",en:"QUIZ"},"exam.grade":{ru:"РєР»Р°СЃСЃ",en:"grade"},"exam.answer_correct":{ru:"РћС‚РІРµС‚: [РїРѕРєР°Р·Р°РЅ РІРµСЂРЅС‹Р№ С…РѕРґ СЂРµС€РµРЅРёСЏ]",en:"Answer: [correct solution shown]"},"exam.answer_partial":{ru:"РћС‚РІРµС‚: [С‡Р°СЃС‚РёС‡РЅРѕ РІРµСЂРЅРѕ, РµСЃС‚СЊ РЅРµРґРѕС‡С‘С‚С‹]",en:"Answer: [partially correct, has flaws]"},"exam.answer_wrong":{ru:"РћС‚РІРµС‚: [РїРѕРїС‹С‚РєР°, РЅРѕ РґРѕРїСѓС‰РµРЅС‹ СЃСѓС‰РµСЃС‚РІРµРЅРЅС‹Рµ РѕС€РёР±РєРё]",en:"Answer: [attempt, but significant errors made]"},"exam.q.math.1":{ru:"Р—Р°РґР°С‡Р° 1: Р РµС€РёС‚Рµ СѓСЂР°РІРЅРµРЅРёРµ 3xВІ - 5x + 2 = 0",en:"Problem 1: Solve equation 3xВІ - 5x + 2 = 0"},"exam.q.math.2":{ru:"Р—Р°РґР°С‡Р° 2: РќР°Р№РґРёС‚Рµ РїСЂРѕРёР·РІРѕРґРЅСѓСЋ f(x) = xВі - 4x + 7",en:"Problem 2: Find derivative of f(x) = xВі - 4x + 7"},"exam.q.math.3":{ru:"Р—Р°РґР°С‡Р° 3: Р’С‹С‡РёСЃР»РёС‚Рµ sinВІО± + cosВІО± РїСЂРё О± = 30В°",en:"Problem 3: Calculate sinВІО± + cosВІО± at О± = 30В°"},"exam.q.math.4":{ru:"Р—Р°РґР°С‡Р° 4: РќР°Р№РґРёС‚Рµ РєРѕСЂРЅРё: |x - 3| = 7",en:"Problem 4: Find roots: |x - 3| = 7"},"exam.q.math.5":{ru:"Р—Р°РґР°С‡Р° 5: Р›РѕРіР°СЂРёС„Рј: logв‚‚(32) = ?",en:"Problem 5: Logarithm: logв‚‚(32) = ?"},"exam.q.physics.1":{ru:"Р—Р°РґР°С‡Р° 1: РЎРєРѕСЂРѕСЃС‚СЊ С‚РµР»Р° 20 Рј/СЃ, РІСЂРµРјСЏ 5 СЃРµРє. РќР°Р№РґРёС‚Рµ СѓСЃРєРѕСЂРµРЅРёРµ.",en:"Problem 1: Speed is 20 m/s, time is 5 s. Find acceleration."},"exam.q.physics.2":{ru:"Р—Р°РґР°С‡Р° 2: РЎРёР»Р° 10 Рќ, РјР°СЃСЃР° 2 РєРі. РќР°Р№РґРёС‚Рµ СѓСЃРєРѕСЂРµРЅРёРµ.",en:"Problem 2: Force is 10 N, mass is 2 kg. Find acceleration."},"exam.q.physics.3":{ru:"Р—Р°РґР°С‡Р° 3: РќР°Р№РґРёС‚Рµ РєРёРЅРµС‚РёС‡РµСЃРєСѓСЋ СЌРЅРµСЂРіРёСЋ С‚РµР»Р° РјР°СЃСЃРѕР№ 4 РєРі РїСЂРё v=3 Рј/СЃ.",en:"Problem 3: Find kinetic energy of a 4 kg body at v=3 m/s."},"exam.q.physics.4":{ru:"Р—Р°РґР°С‡Р° 4: Р­Р»РµРєС‚СЂРёС‡РµСЃРєРёР№ С‚РѕРє 2 Рђ, СЃРѕРїСЂРѕС‚РёРІР»РµРЅРёРµ 5 РћРј. РќР°Р№РґРёС‚Рµ РЅР°РїСЂСЏР¶РµРЅРёРµ.",en:"Problem 4: Current is 2 A, resistance is 5 О©. Find voltage."},"exam.q.physics.5":{ru:"Р—Р°РґР°С‡Р° 5: Р”Р»РёРЅР° РІРѕР»РЅС‹ 400 РЅРј. РћРїСЂРµРґРµР»РёС‚Рµ С‡Р°СЃС‚РѕС‚Сѓ.",en:"Problem 5: Wavelength is 400 nm. Find frequency."},"name.aibek":{ru:"РђР№Р±РµРє",en:"Aibek"},"name.zarina":{ru:"Р—Р°СЂРёРЅР°",en:"Zarina"},"name.daniyar":{ru:"Р”Р°РЅРёСЏСЂ",en:"Daniyar"},"name.aysulu":{ru:"РђР№СЃТ±Р»Сѓ",en:"Aysulu"},"name.nurbolat":{ru:"РќТ±СЂР±РѕР»Р°С‚",en:"Nurbolat"},"name.madina":{ru:"РњР°РґРёРЅР°",en:"Madina"},"name.erlan":{ru:"Р•СЂР»Р°РЅ",en:"Erlan"},"name.gulnur":{ru:"Р“ТЇР»РЅТ±СЂ",en:"Gulnur"},"name.asel":{ru:"РђСЃРµР»",en:"Asel"},"name.ayaulym":{ru:"РђСЏСѓР»С‹Рј",en:"Ayaulym"},"name.bekzat":{ru:"Р‘РµРєР·Р°С‚",en:"Bekzat"},"name.azamat":{ru:"РђР·Р°РјР°С‚",en:"Azamat"},"name.tanirbek":{ru:"РўУ™ТЈС–СЂР±РµРє",en:"Tanirbek"},"name.inkar":{ru:"РРЅРєР°СЂ",en:"Inkar"},"name.aruzan":{ru:"РђСЂСѓР·Р°РЅ",en:"Aruzan"},"name.sabina":{ru:"РЎР°Р±РёРЅР°",en:"Sabina"},"name.zhanserik":{ru:"Р–Р°РЅСЃРµСЂС–Рє",en:"Zhanserik"},"name.aigerim":{ru:"РђР№РіРµСЂС–Рј",en:"Aigerim"},"name.dilnaz":{ru:"Р”С–Р»РЅУ™Р·",en:"Dilnaz"},"name.mukhametzhan":{ru:"РњТ±С…Р°РјРµРґР¶Р°РЅ",en:"Mukhametzhan"},"name.kenzhebek":{ru:"РљРµРЅР¶РµР±РµРє",en:"Kenzhebek"},"name.asyl":{ru:"РђСЃС‹Р»",en:"Asyl"},"name.dauren":{ru:"Р”Р°СѓСЂРµРЅ",en:"Dauren"},"name.balzhan":{ru:"Р‘Р°Р»Р¶Р°РЅ",en:"Balzhan"},"name.alibek":{ru:"РђР»РёР±РµРє",en:"Alibek"},"name.akmaral":{ru:"РђРєРјР°СЂР°Р»",en:"Akmaral"},"name.nazim":{ru:"РќУ™Р·С–Рј",en:"Nazim"},"name.zulfiya":{ru:"Р—Т±Р»С„РёСЏ",en:"Zulfiya"},"name.tolqyn":{ru:"РўРѕР»Т›С‹РЅ",en:"Tolqyn"},"name.adem":{ru:"РђРґРµРј",en:"Adem"},"ai.mood.attentive":{ru:"РІРЅРёРјР°С‚РµР»СЊРЅС‹Р№",en:"attentive"},"ai.mood.bored":{ru:"СЃРєСѓС‡Р°СЋС‰РёР№",en:"bored"},"ai.prompt.genius":{ru:"РЈС‡РµРЅРёРє-РѕС‚Р»РёС‡РЅРёРє",en:"Straight-A student"},"ai.prompt.rebel":{ru:"РЈС‡РµРЅРёРє-С…СѓР»РёРіР°РЅ",en:"Rebel student"},"ai.prompt.shy":{ru:"РўРёС…РёР№ СѓС‡РµРЅРёРє",en:"Shy student"},"ai.prompt.jester":{ru:"РЈС‡РµРЅРёРє-С€СѓС‚",en:"Class clown"},"ai.fallback.genius":{ru:"Р­С‚Рѕ РЅРµС‚РѕС‡РЅРѕ...",en:"That's not quite right..."},"ai.fallback.rebel":{ru:"РЎРєСѓРєР°Р¶СѓС…Р°.",en:"Boring..."},"ai.fallback.average":{ru:"РћРє...",en:"Okay..."},"ai.fallback.shy":{ru:"...",en:"..."},"ai.fallback.jester":{ru:"РҐР°С…Р°!",en:"Haha!"}};let ma="en";function Rm(s){ma=s}function Ps(){return ma}function W(s){const e=Cm[s];return e?e[ma]??e.ru??s:s}const qe={bg:"#060a14",panel:"#0D1117",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E"},Dm=[{id:"math",key:"subj.math",icon:"рџ“ђ"},{id:"physics",key:"subj.physics",icon:"вљЎ"},{id:"chemistry",key:"subj.chemistry",icon:"рџ§Є"},{id:"history",key:"subj.history",icon:"рџ“њ"},{id:"literature",key:"subj.literature",icon:"рџ“–"},{id:"russian",key:"subj.russian",icon:"вњЌпёЏ"}],Lm=[{id:"default",labelKey:"app.default",descKey:"app.default_desc",icon:"рџ‘”"},{id:"strict",labelKey:"app.strict",descKey:"app.strict_desc",icon:"рџ§‘вЂЌрџЏ«"},{id:"cool",labelKey:"app.cool",descKey:"app.cool_desc",icon:"рџЋ"}];class Pm{constructor(){w(this,"root");w(this,"onConfirm",null);w(this,"nameInput");w(this,"selectedSubject","math");w(this,"selectedGrades",new Set([7,8,9]));w(this,"selectedAppearance","default");w(this,"subjectBtns",new Map);w(this,"appearanceBtns",new Map);w(this,"gradeBtns",new Map);w(this,"card",null);w(this,"langToggle");this.root=document.createElement("div"),this.root.id="ew2-charselect",this.root.style.cssText=`
      position:fixed; inset:0; background:${qe.bg}; display:flex; align-items:center;
      justify-content:center; font-family:'Nunito',sans-serif; z-index:1000;
      overflow-y:auto; padding:20px;
    `,document.body.appendChild(this.root),this.buildLangToggle(),this.buildUI()}buildLangToggle(){const e=document.createElement("div");e.style.cssText=`
      position:fixed; top:16px; right:20px; display:flex; gap:6px; z-index:1100;
    `,["ru","en"].forEach(n=>{const i=document.createElement("button");i.textContent=n.toUpperCase(),i.style.cssText=`
        padding:5px 12px; border-radius:6px; border:1px solid ${qe.border};
        background:${Ps()===n?qe.mint:"#0D1117"};
        color:${Ps()===n?"#000":qe.muted};
        font-size:12px; font-weight:700; cursor:pointer; font-family:inherit; transition:all .15s;
        text-transform:uppercase; letter-spacing:1px;
      `,i.dataset.lang=n,i.addEventListener("click",()=>{Rm(n),this.refreshLangToggle(),this.rebuildCard()}),e.appendChild(i)}),this.langToggle=e,document.body.appendChild(e)}refreshLangToggle(){this.langToggle.querySelectorAll("button").forEach(e=>{const t=e.dataset.lang===Ps();e.style.background=t?qe.mint:"#0D1117",e.style.color=t?"#000":qe.muted})}rebuildCard(){const e=this.nameInput?.value??W("char.name_default");this.card&&this.card.remove(),this.subjectBtns.clear(),this.appearanceBtns.clear(),this.gradeBtns.clear(),this.buildUI(),this.nameInput&&(this.nameInput.value=e)}section(e){const t=document.createElement("div");t.style.cssText="display:flex; flex-direction:column; gap:10px;";const n=document.createElement("div");return n.style.cssText=`font-size:12px; color:${qe.muted}; text-transform:uppercase; letter-spacing:1px; font-weight:700;`,n.textContent=e,t.appendChild(n),[t,n]}buildUI(){const e=document.createElement("div");e.style.cssText=`
      background:${qe.panel}; border:1px solid ${qe.border}; border-radius:20px;
      padding:36px 40px; width:600px; max-width:96vw; display:flex; flex-direction:column; gap:24px;
    `,this.card=e;const t=document.createElement("div");t.style.cssText="text-align:center;",t.innerHTML=`
      <div style="font-size:13px; color:${qe.mint}; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:6px;">${W("char.badge")}</div>
      <h1 style="margin:0; font-size:28px; color:${qe.text}; font-weight:900;">${W("char.title")}</h1>
      <p style="margin:8px 0 0; font-size:14px; color:${qe.muted};">${W("char.subtitle")}</p>
    `,e.appendChild(t);const[n]=this.section(W("char.name_label"));this.nameInput=document.createElement("input"),this.nameInput.placeholder=W("char.name_ph"),this.nameInput.value=W("char.name_default"),this.nameInput.style.cssText=`
      padding:10px 14px; border-radius:8px; border:1px solid ${qe.border};
      background:#0D1117; color:${qe.text}; font-size:15px; font-family:inherit; width:100%; box-sizing:border-box;
    `,n.appendChild(this.nameInput),e.appendChild(n);const[i]=this.section(W("char.subject")),r=document.createElement("div");r.style.cssText="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;",Dm.forEach(u=>{const m=document.createElement("button");m.style.cssText=`padding:10px 8px; border-radius:8px; border:1px solid ${qe.border}; background:#0D1117; color:${qe.text}; cursor:pointer; font-size:13px; font-family:inherit; transition:all .15s;`,m.innerHTML=`<span style="display:block; font-size:20px;">${u.icon}</span>${W(u.key)}`,m.addEventListener("click",()=>this.selectSubject(u.id)),r.appendChild(m),this.subjectBtns.set(u.id,m)}),i.appendChild(r),e.appendChild(i);const a=Ps()==="ru"?"РљР»Р°СЃСЃС‹ (РІС‹Р±РµСЂРёС‚Рµ 2вЂ“3)":"Grades (pick 2вЂ“3)",[o]=this.section(a),l=document.createElement("div");l.style.cssText="display:flex; gap:8px; flex-wrap:wrap;";for(let u=5;u<=11;u++){const m=document.createElement("button");m.textContent=`${u}`,m.style.cssText=`width:44px; height:44px; border-radius:8px; border:1px solid ${qe.border}; background:#0D1117; color:${qe.text}; cursor:pointer; font-size:14px; font-weight:700; font-family:inherit; transition:all .15s;`,m.addEventListener("click",()=>this.toggleGrade(u)),l.appendChild(m),this.gradeBtns.set(u,m)}o.appendChild(l),e.appendChild(o);const[c]=this.section(W("char.appearance")),d=document.createElement("div");d.style.cssText="display:flex; gap:10px;",Lm.forEach(u=>{const m=document.createElement("button");m.style.cssText=`flex:1; padding:12px 8px; border-radius:10px; border:1px solid ${qe.border}; background:#0D1117; color:${qe.text}; cursor:pointer; font-size:13px; font-family:inherit; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;`,m.innerHTML=`<span style="font-size:26px;">${u.icon}</span><strong>${W(u.labelKey)}</strong><span style="font-size:11px; color:${qe.muted};">${W(u.descKey)}</span>`,m.addEventListener("click",()=>this.selectAppearance(u.id)),d.appendChild(m),this.appearanceBtns.set(u.id,m)}),c.appendChild(d),e.appendChild(c);const h=document.createElement("button");h.textContent=W("char.start"),h.style.cssText=`
      padding:14px; border-radius:10px; border:none; background:${qe.mint}; color:#000;
      font-size:16px; font-weight:900; cursor:pointer; font-family:inherit; transition:all .15s; margin-top:4px;
    `,h.addEventListener("mouseenter",()=>h.style.transform="scale(1.02)"),h.addEventListener("mouseleave",()=>h.style.transform=""),h.addEventListener("click",()=>this.confirm()),e.appendChild(h),this.root.appendChild(e),this.selectSubject(this.selectedSubject),this.refreshGradeBtns(),this.selectAppearance(this.selectedAppearance)}toggleGrade(e){if(this.selectedGrades.has(e))this.selectedGrades.size>1&&this.selectedGrades.delete(e);else{if(this.selectedGrades.size>=3){const t=this.selectedGrades.values().next().value;this.selectedGrades.delete(t)}this.selectedGrades.add(e)}this.refreshGradeBtns()}refreshGradeBtns(){this.gradeBtns.forEach((e,t)=>{const n=this.selectedGrades.has(t);e.style.borderColor=n?qe.gold:qe.border,e.style.background=n?qe.gold+"22":"#0D1117",e.style.color=n?qe.gold:qe.text})}selectSubject(e){this.selectedSubject=e,this.subjectBtns.forEach((t,n)=>{t.style.borderColor=n===e?qe.mint:qe.border,t.style.background=n===e?qe.mint+"18":"#0D1117",t.style.color=n===e?qe.mint:qe.text})}selectAppearance(e){this.selectedAppearance=e,this.appearanceBtns.forEach((t,n)=>{t.style.borderColor=n===e?"#BC8CFF":qe.border,t.style.background=n===e?"#BC8CFF18":"#0D1117"})}confirm(){const e=this.nameInput.value.trim()||W("char.name_default"),t=Array.from(this.selectedGrades).sort((n,i)=>n-i);this.onConfirm?.({name:e,subject:this.selectedSubject,grades:t,appearance:this.selectedAppearance})}open(e){this.onConfirm=e,this.root.style.display="flex"}close(){this.root.style.display="none",this.langToggle.style.display="none"}dispose(){this.root.remove(),this.langToggle.remove()}}const Jn=class Jn{constructor(){w(this,"listeners",new Map)}static getInstance(){return Jn.inst||(Jn.inst=new Jn),Jn.inst}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t)}off(e,t){this.listeners.get(e)?.delete(t)}emit(e,t=null){this.listeners.get(e)?.forEach(n=>n(t))}};w(Jn,"inst");let qt=Jn;const Qn=class Qn{constructor(){w(this,"_gameMinutes",0);w(this,"_paused",!1);w(this,"accumMs",0);w(this,"REAL_MS_PER_GAME_MIN",4e3)}static getInstance(){return Qn.inst||(Qn.inst=new Qn),Qn.inst}get paused(){return this._paused}set paused(e){this._paused=e}tick(e){if(!this._paused)for(this.accumMs+=e;this.accumMs>=this.REAL_MS_PER_GAME_MIN;)this.accumMs-=this.REAL_MS_PER_GAME_MIN,this._gameMinutes++}get gameMinutes(){return this._gameMinutes}reset(e=0){this._gameMinutes=e,this.accumMs=0}getHHMM(){const e=480+this._gameMinutes,t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}};w(Qn,"inst");let Qr=Qn;const Br="ew2_save",Or={teacherName:"",subject:"РњР°С‚РµРјР°С‚РёРєР°",grade:7,reputation:50,experience:0,money:8e4,careerRank:"bez_kategorii",skillPoints:0,unlockedPerks:[],dayNumber:1,lessonCount:0,completedTopics:[]},ei=class ei{constructor(){w(this,"data",{...Or})}static getInstance(){return ei.inst||(ei.inst=new ei),ei.inst}load(){try{const e=localStorage.getItem(Br);e&&(this.data={...Or,...JSON.parse(e)})}catch{}return this.data}save(e){this.data={...this.data,...e};try{localStorage.setItem(Br,JSON.stringify(this.data))}catch{}}get(){return this.data}reset(){this.data={...Or},localStorage.removeItem(Br)}};w(ei,"inst");let ea=ei;class jo{constructor(e,t=0,n=-5.48){w(this,"mesh");w(this,"ctx");w(this,"texture");w(this,"canvas");this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=320,this.ctx=this.canvas.getContext("2d"),this.texture=new ua(this.canvas);const i=new An(8,2.5),r=new tn({map:this.texture,roughness:.9});this.mesh=new xe(i,r),this.mesh.position.set(t,2.4,n),this.mesh.receiveShadow=!0,e.add(this.mesh);const a=new tn({color:2759178,roughness:.8}),o=new $e(8.3,2.8,.06),l=new xe(o,a);l.position.set(t,2.4,n-.02),e.add(l),this.clear()}clear(){const{ctx:e,canvas:t}=this;e.fillStyle="#1a3d2b",e.fillRect(0,0,t.width,t.height),this.texture.needsUpdate=!0}writeText(e){this.clear();const{ctx:t}=this;t.fillStyle="#e8f5e9",t.textAlign="left",e.forEach((n,i)=>{const r=i===0?44:32;t.font=`${i===0?"bold":"normal"} ${r}px sans-serif`,t.fillText(n,40,60+i*(r+14))}),this.texture.needsUpdate=!0}}const Im=3,km=5,Um=2.6,Fm=2,Nm=-4.8,Bm=-1;function Om(s,e,t){const n=new tn({color:13150574,roughness:.8}),i=new tn({color:9134912,roughness:.7}),r=new tn({color:2771583,roughness:.7}),a=new xe(new $e(1.1,.06,.7),n);a.position.set(e,.76,t),a.castShadow=!0,a.receiveShadow=!0,s.add(a);const o=new fn(.03,.03,.74,6),l=[[-.45,-.28],[.45,-.28],[-.45,.28],[.45,.28]];for(const[f,p]of l){const S=new xe(o,i);S.position.set(e+f,.39,t+p),s.add(S)}const c=new xe(new $e(.5,.05,.5),r);c.position.set(e,.46,t+.62),s.add(c);const d=new xe(new $e(.5,.38,.05),r);d.position.set(e,.67,t+.86),s.add(d);const h=new fn(.025,.025,.44,6);for(const[f,p]of[[-.2,.42],[.2,.42],[-.2,.82],[.2,.82]]){const S=new xe(h,i);S.position.set(e+f,.24,t+p),s.add(S)}const u=new tn({color:16119260,roughness:.9}),m=new xe(new $e(.22,.01,.28),u);m.position.set(e-.1,.795,t-.05),s.add(m);const g=new tn({color:16763904,roughness:.6}),x=new xe(new fn(.01,.01,.22,6),g);return x.rotation.z=Math.PI/2,x.position.set(e+.28,.798,t-.05),s.add(x),new Cn(new R(e-.6,0,t-.42),new R(e+.6,1,t+.95))}function zm(s,e=0,t=0){const n=[];for(let i=0;i<Im;i++)for(let r=0;r<km;r++){const a=Nm+r*Um+e,o=Bm+i*Fm+t,l=Om(s,a,o);n.push({row:i,col:r,position:new R(a,0,o),collider:l})}return n}function $s(s,e=-7.5,t=-3.5){const n=new tn({color:10506797,roughness:.7}),i=new tn({color:7027231,roughness:.7}),r=new xe(new $e(1.6,.07,.8),n);r.position.set(e,.8,t),r.castShadow=!0,r.receiveShadow=!0,s.add(r);const a=new fn(.04,.04,.78,8);for(const[d,h]of[[-.68,-.34],[.68,-.34],[-.68,.34],[.68,.34]]){const u=new xe(a,i);u.position.set(e+d,.41,t+h),s.add(u)}const o=new tn({color:9116186,roughness:.7}),l=new xe(new $e(.55,.06,.55),o);l.position.set(e,.5,t+.72),s.add(l);const c=new xe(new $e(.55,.4,.06),o);return c.position.set(e,.73,t+.98),s.add(c),new Cn(new R(e-.9,0,t-.5),new R(e+.9,1.1,t+1.1))}const at=3.2,un=.15,Hm=1.3;function pn(s,e,t,n,i,r,a,o){const l=new xe(new $e(i,r,a),o);return l.position.set(e,t,n),l.castShadow=!0,l.receiveShadow=!0,s.add(l),new Cn(new R(e-i/2,0,n-a/2),new R(e+i/2,r,n+a/2))}function Gm(s,e,t,n,i,r,a,o){const l=[],c=Hm/2;return[[i,a-c],[a+c,r]].forEach(([h,u])=>{if(u<=h)return;const m=u-h,g=(h+u)/2;l.push(pn(s,g,at/2,n,m,at,un,e))}),l}function Ki(s,e,t,n,i,r,a,o,l,c){const d=(n+i)/2,h=(r+a)/2,u=i-n,m=a-r,g=[],x=new xe(new An(u,m),c.floor);x.rotation.x=-Math.PI/2,x.position.set(d,0,h),x.receiveShadow=!0,s.add(x);const f=new xe(new An(u,m),c.ceil);f.rotation.x=Math.PI/2,f.position.set(d,at,h),s.add(f);const p=l?r:a;g.push(pn(s,d,at/2,p,u,at,un,c.wall)),g.push(pn(s,n,at/2,h,un,at,m,c.wall)),g.push(pn(s,i,at/2,h,un,at,m,c.wall));const S=l?a:r,E=d,T=Gm(s,c.wall,"x",S,n,i,E);g.push(...T);let P=null;if(e.startsWith("room")){const k=l?r+.52:a-.52;P=new jo(s,d,k)}const C=[];let A=null;if(e.startsWith("room")&&e!=="room103_npc"){const k=d,H=l?r+5:a-5;C.push(...zm(s,k,H-2));const Z=d,L=l?r+1.4:a-1.4;A=$s(s,Z,L),g.push(A);for(const N of C)g.push(N.collider)}if(e==="room103"){const k=l?r+.52:a-.52;P||(P=new jo(s,d,k));const H=l?r+2:a-2,Z=$s(s,d,H);g.push(Z)}const $=new R(E,0,o),_=new R(d,1.7,(r+a)/2),M=new R(E,1.7,o+(l?1.5:-1.5));return{id:e,label:t,doorPos:$,spawnInRoom:_,spawnInCorridor:M,deskInfos:C,blackboard:P,colliders:g}}class Vm{constructor(){w(this,"scene");w(this,"rooms",new Map);w(this,"corridorColliders",[]);this.scene=new ym,this.scene.background=new Ve(12111848),this.scene.fog=new ha(12111848,20,50),this._buildCorridor(),this._buildRooms(),this._buildLighting()}_mat(e,t=.85){return new tn({color:e,roughness:t})}_buildCorridor(){const e=this._mat(13154458),t=this._mat(15261648),n=this._mat(16052456),i=41,r=4,a=3.5,o=new xe(new An(i,r),e);o.rotation.x=-Math.PI/2,o.position.set(a,0,0),o.receiveShadow=!0,this.scene.add(o);const l=new xe(new An(i,r),n);l.rotation.x=Math.PI/2,l.position.set(a,at,0),this.scene.add(l),this.corridorColliders.push(pn(this.scene,-17,at/2,0,un,at,r,t)),this.corridorColliders.push(pn(this.scene,24,at/2,0,un,at,r,t));const c=this._mat(16777215);c.emissive=new Ve(16777215),c.emissiveIntensity=.6;for(const h of[-10,-2,8,18]){const u=new xe(new $e(6,.05,.18),c);u.position.set(h,at-.04,0),this.scene.add(u)}const d=this._mat(6982302);for(let h=0;h<6;h++){const u=new xe(new $e(.5,1.8,.4),d);u.position.set(20+h*.55,.9,1.6),u.castShadow=!0,this.scene.add(u)}}_buildRooms(){const e=this._mat(14735560),t=this._mat(12096874,.85),n=this._mat(16052456),i={wall:e,floor:t,ceil:n},r=this._mat(13945016,.9),a=this._mat(12626048,.8),o=this._mat(9134912,.7),l=Ki(this.scene,"room101","РљР°Р±РёРЅРµС‚ 101",-15,-3,-11,-2,-2,!0,i);this.rooms.set("room101",l),this.corridorColliders.push(...l.colliders);const c=Ki(this.scene,"room102","РљР°Р±РёРЅРµС‚ 102",0,12,-11,-2,-2,!0,i);this.rooms.set("room102",c),this.corridorColliders.push(...c.colliders);const d=Ki(this.scene,"room103","РљР°Р±РёРЅРµС‚ 103",15,24,-11,-2,-2,!0,i);this.rooms.set("room103",d),this.corridorColliders.push(...d.colliders);const h=pn(this.scene,-1.5,at/2,-2,3,at,un,e),u=pn(this.scene,13.5,at/2,-2,3,at,un,e);this.corridorColliders.push(h,u);const m={wall:r,floor:a,ceil:n},g=Ki(this.scene,"staff","РЈС‡РёС‚РµР»СЊСЃРєР°СЏ",-15,-3,2,11,2,!1,m);this._buildStaffRoom(g),this.rooms.set("staff",g),this.corridorColliders.push(...g.colliders);const x={wall:e,floor:o,ceil:n},f=Ki(this.scene,"principal","РљР°Р±РёРЅРµС‚ РґРёСЂРµРєС‚РѕСЂР°",0,12,2,11,2,!1,x);this._buildPrincipalOffice(f),this.rooms.set("principal",f),this.corridorColliders.push(...f.colliders);const p=pn(this.scene,-1.5,at/2,2,3,at,un,e),S=pn(this.scene,18,at/2,2,24,at,un,e);this.corridorColliders.push(p,S)}_buildStaffRoom(e){const t=this._mat(8084538),n=this._mat(13937002),i=new xe(new $e(2.4,.55,.9),t);i.position.set(-9,.275,4.5),i.castShadow=!0,this.scene.add(i);const r=new xe(new $e(1,.45,.6),n);r.position.set(-9,.225,5.6),this.scene.add(r);const a=this._mat(15255690),o=new xe(new $e(2.5,1.5,.06),a);o.position.set(-9,2.2,2.55),this.scene.add(o),$s(this.scene,-12,8),$s(this.scene,-6,8)}_buildPrincipalOffice(e){const t=this._mat(6041102,.6),n=new xe(new $e(2.5,.08,1.2),t);n.position.set(6,.85,4.5),n.castShadow=!0,this.scene.add(n);const i=this._mat(3807750);for(const[h,u]of[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]]){const m=new xe(new fn(.05,.05,.84,8),i);m.position.set(6+h,.42,4.5+u),this.scene.add(m)}const r=this._mat(9109504,.6),a=new xe(new $e(.7,.1,.6),r);a.position.set(6,.5,5.5),this.scene.add(a);const o=new xe(new $e(.7,.7,.08),r);o.position.set(6,.85,5.8),this.scene.add(o);const l=this._mat(7027231),c=new xe(new $e(2,2.4,.4),l);c.position.set(10.5,1.2,6),c.castShadow=!0,this.scene.add(c);const d=new xe(new $e(.6,.4,.02),new tn({color:16777215}));d.position.set(.6,2.8,2.58),this.scene.add(d)}_buildLighting(){this.scene.add(new Tm(16771280,.55));const e=new wm(16774608,.9);e.position.set(-8,10,0),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=20,e.shadow.camera.bottom=-20,e.shadow.camera.far=50,this.scene.add(e);for(const t of[-8,5,18]){const n=new qo(16775400,.7,16);n.position.set(t,at-.2,0),this.scene.add(n)}for(const[t,n]of[[-9,-6.5],[6,-6.5],[19.5,-6.5],[-9,6.5],[6,6.5]]){const i=new qo(16775400,.6,14);i.position.set(t,at-.3,n),this.scene.add(i)}}getRoomAt(e){for(const[,t]of this.rooms){const n=t.doorPos,i=n.z<0&&e.z<-1&&e.z>-12,r=n.z>0&&e.z>1&&e.z<12;if((i||r)&&e.x>(t.deskInfos.length>0?t.deskInfos[0].position.x-6:n.x-8)&&e.x<(t.deskInfos.length>0?t.deskInfos[t.deskInfos.length-1].position.x+6:n.x+8))return t}return null}getNearbyRoom(e,t=2.5){let n=null,i=1/0;for(const[,r]of this.rooms){const a=new De(e.x-r.doorPos.x,e.z-r.doorPos.z).length();a<t&&a<i&&(i=a,n=r)}return n}}const Wm={genius:{hair:1710638,eye:4886745,skin:16106915,uniform:2771615},lazy:{hair:4008730,eye:8026746,skin:15782064,uniform:2771615},bully:{hair:9109504,eye:13378048,skin:15249552,uniform:2771615},anxious:{hair:4862048,eye:10181046,skin:16570816,uniform:2771615},helper:{hair:8081192,eye:2600544,skin:16106915,uniform:2771615},average:{hair:2960685,eye:5592422,skin:16106915,uniform:2771615}};function $m(){const s=new Uint8Array([80,160,230]),e=new bm(s,3,1,Rl);return e.minFilter=e.magFilter=wt,e.needsUpdate=!0,e}function Di(s,e){return new Mm({color:s,gradientMap:e})}function Xm(s,e=1.07){const t=new ns({color:1118481,side:Bt}),n=new xe(s.geometry,t);return n.scale.setScalar(e),n}function Zi(s,e,t=1.07){s.add(e),s.add(Xm(e,t))}function qm(s){const e=new Ji,t=$m(),n=Wm[s],i=Di(n.skin,t),r=Di(n.hair,t),a=Di(n.uniform,t),o=Di(1976890,t),l=Di(15790320,t),c=Di(1710618,t),d=new xe(new $e(.52,.6,.28),a);d.position.set(0,.72,0),d.castShadow=!0,Zi(e,d);const h=new xe(new $e(.3,.14,.3),l);h.position.set(0,.95,.01),e.add(h);const u=new xe(new fn(.09,.1,.14,8),i);u.position.set(0,1.06,0),e.add(u);const m=new $e(.44,.44,.38),g=new xe(m,i);if(g.position.set(0,1.37,0),g.castShadow=!0,Zi(e,g,1.055),s==="genius"||s==="anxious"){const M=new ns({color:2236962}),k=new $e(.13,.09,.02),H=new xe(k,M);H.position.set(-.12,1.375,.205),e.add(H);const Z=new xe(k,M);Z.position.set(.12,1.375,.205),e.add(Z);const L=new xe(new $e(.06,.015,.01),M);L.position.set(0,1.375,.208),e.add(L)}const x=document.createElement("canvas");x.width=64,x.height=40;const f=x.getContext("2d");f.fillStyle="#fff";for(const M of[8,36])f.beginPath(),f.ellipse(M+12,20,14,12,0,0,Math.PI*2),f.fill();f.fillStyle=`#${n.eye.toString(16).padStart(6,"0")}`;for(const M of[8,36])f.beginPath(),f.ellipse(M+12,20,10,10,0,0,Math.PI*2),f.fill();f.fillStyle="#111";for(const M of[8,36])f.beginPath(),f.ellipse(M+12,22,6,7,0,0,Math.PI*2),f.fill();f.fillStyle="#fff";for(const M of[8,36])f.beginPath(),f.arc(M+16,16,3,0,Math.PI*2),f.fill();const p=new ua(x),S=new xe(new An(.36,.12),new ns({map:p,transparent:!0}));S.position.set(0,1.38,.195),e.add(S);const E=new xe(new $e(.5,.14,.42),r);E.position.set(0,1.63,0),Zi(e,E,1.04);const T=new xe(new $e(.12,.24,.38),r);T.rotation.z=.15,T.position.set(-.26,1.46,0),e.add(T);const P=T.clone();P.rotation.z=-.15,P.position.set(.26,1.46,0),e.add(P);const C=new xe(new $e(.42,.12,.08),r);C.position.set(0,1.55,.2),e.add(C);const A=new xe(new $e(.46,.34,.08),r);A.position.set(0,1.46,-.22),e.add(A);const $=new fn(.08,.07,.55,8);for(const M of[-1,1]){const k=new xe($,a);k.rotation.z=M*.18,k.position.set(M*.33,.62,0),k.castShadow=!0,Zi(e,k,1.08);const H=new xe(new pa(.075,8,8),i);H.position.set(M*.37,.31,0),e.add(H)}const _=new fn(.09,.08,.58,8);for(const M of[-1,1]){const k=new xe(_,o);k.position.set(M*.14,.13,0),k.castShadow=!0,Zi(e,k,1.08);const H=new xe(new $e(.18,.1,.24),c);H.position.set(M*.14,-.17,.04),e.add(H)}return s==="bully"&&e.scale.set(1.1,1.05,1.1),s==="lazy"&&e.scale.set(.97,.97,.97),e}function jm(){const s=document.createElement("canvas");s.width=64,s.height=32;const e=new ua(s),t=new nc({map:e,transparent:!0,depthTest:!1}),n=new _m(t);return n.scale.set(.8,.4,1),n.position.set(0,1.95,0),n}function Ym(s,e){const n=s.material.map,r=n.image.getContext("2d");r.clearRect(0,0,64,32),e&&(r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.roundRect(4,2,56,28,8),r.fill(),r.font="20px serif",r.textAlign="center",r.fillText(e,32,23)),n.needsUpdate=!0}const Km={neutral:"",happy:"рџЉ",bored:"рџ’",confused:"вќ“",sleeping:"рџ’¤",raising_hand:"вњ‹",writing:"вњЏпёЏ",troubled:"рџ°",phone:"рџ“±"};class Zm{constructor(e,t){w(this,"data");w(this,"group");w(this,"emotionSprite");w(this,"animTime",0);w(this,"_emotion","neutral");w(this,"_seated",!0);w(this,"seatPosition",new R);this.data=e,this.group=qm(e.type),this.emotionSprite=jm(),this.group.add(this.emotionSprite),t.add(this.group)}placeat(e){this.seatPosition.copy(e),this.group.position.copy(e)}setEmotion(e){this._emotion!==e&&(this._emotion=e,Ym(this.emotionSprite,Km[e]))}get emotion(){return this._emotion}set seated(e){this._seated=e,e&&(this.group.position.copy(this.seatPosition),this.group.rotation.y=0,this.group.rotation.x=0,this.group.rotation.z=0)}get seated(){return this._seated}modifyStat(e,t){this.data.stats[e]=Math.max(0,Math.min(100,this.data.stats[e]+t))}update(e){this.animTime+=e*.001;const t=this.animTime;switch(this._emotion){case"writing":{const n=Math.sin(t*5.5),i=Math.abs(Math.sin(t*5.5))*.012;this.group.rotation.x=.1+i,this.group.rotation.z=n*.035,this.group.position.y=this.seatPosition.y+i*.4;break}case"sleeping":this.group.rotation.x=.04,this.group.rotation.z=.32+Math.sin(t*.9)*.05,this.group.position.y=this.seatPosition.y;break;case"phone":this.group.rotation.x=.18+Math.sin(t*.4)*.02,this.group.rotation.z=Math.sin(t*.3)*.015,this.group.position.y=this.seatPosition.y;break;case"happy":this.group.rotation.x=-.02+Math.sin(t*5.5)*.025,this.group.rotation.z=Math.sin(t*3.8)*.018,this.group.position.y=this.seatPosition.y+Math.abs(Math.sin(t*5.5))*.015;break;case"bored":this.group.rotation.x=-.05+Math.sin(t*.5)*.02,this.group.rotation.z=Math.sin(t*.6)*.06,this.group.position.y=this.seatPosition.y;break;case"confused":this.group.rotation.x=.02,this.group.rotation.z=Math.sin(t*1.8)*.08,this.group.position.y=this.seatPosition.y;break;case"raising_hand":this.group.rotation.x=-.06,this.group.rotation.z=Math.sin(t*1.5)*.012,this.group.position.y=this.seatPosition.y+.02+Math.sin(t*2)*.015;break;case"troubled":this.group.rotation.x=.04,this.group.rotation.z=Math.sin(t*9)*.025,this.group.position.y=this.seatPosition.y;break;default:this.group.rotation.x=0,this.group.rotation.z=0,this.group.position.y=this.seatPosition.y}}distanceTo(e){return this.group.position.distanceTo(e)}}function Jm(s,e,t){return{id:s,name:e,type:t,stats:{...{genius:{understanding:75,attention:80,motivation:85,behavior:90},lazy:{understanding:35,attention:30,motivation:25,behavior:60},bully:{understanding:40,attention:45,motivation:40,behavior:20},anxious:{understanding:60,attention:70,motivation:55,behavior:85},helper:{understanding:65,attention:75,motivation:80,behavior:95},average:{understanding:55,attention:55,motivation:55,behavior:70}}[t]},hwDone:!0,notebookGrade:4,progressionScore:0}}let Xs=0;function Pt(){Xs++,document.pointerLockElement&&document.exitPointerLock()}function Tt(){Xs=Math.max(0,Xs-1)}function Yo(){return Xs>0}const Qm=4.5;class eg{constructor(e){w(this,"camera");w(this,"bus",qt.getInstance());w(this,"keys",new Set);w(this,"euler",new ss(0,0,0,"YXZ"));w(this,"colliders",[]);w(this,"isLocked",!1);w(this,"mobileVec",new R);w(this,"isMobile","ontouchstart"in window||navigator.maxTouchPoints>0);this.camera=e,this._setup()}setColliders(e){this.colliders=e}_setup(){document.addEventListener("click",()=>{this.isMobile||!this.isLocked&&!Yo()&&document.body.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=!!document.pointerLockElement,this.bus.emit("pointerLockChange",this.isLocked)}),document.addEventListener("mousemove",e=>{if(!this.isLocked)return;const t=.0018;this.euler.setFromQuaternion(this.camera.quaternion),this.euler.y-=e.movementX*t,this.euler.x-=e.movementY*t,this.euler.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,this.euler.x)),this.camera.quaternion.setFromEuler(this.euler)}),document.addEventListener("keydown",e=>{if(e.code==="Tab"){e.preventDefault();return}if(e.code==="F1"){e.preventDefault(),document.pointerLockElement?document.exitPointerLock():document.body.requestPointerLock();return}this.keys.add(e.code),e.code==="KeyE"&&this.isLocked&&this.bus.emit("playerInteract",this.camera.position.clone())}),document.addEventListener("keyup",e=>{this.keys.delete(e.code)})}update(e){const t=e*.001,n=new R,i=new R;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new R().crossVectors(i,new R(0,1,0)).normalize();if(this.isMobile){if(this.mobileVec.lengthSq()<.001)return;n.copy(this.mobileVec).normalize()}else{if(!this.isLocked||((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&n.add(i),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&n.sub(i),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&n.sub(r),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&n.add(r),n.lengthSq()===0))return;n.normalize()}const a=this.camera.position.clone().addScaledVector(n,Qm*t);a.y=1.7;const o=new Cn(new R(a.x-.22,0,a.z-.22),new R(a.x+.22,2,a.z+.22));let l=!1;for(const c of this.colliders)if(o.intersectsBox(c)){l=!0;break}l||this.camera.position.copy(a)}get locked(){return this.isLocked}applyTouchLook(e,t){if(Yo())return;const n=.004;this.euler.setFromQuaternion(this.camera.quaternion),this.euler.y-=e*n,this.euler.x-=t*n,this.euler.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,this.euler.x)),this.camera.quaternion.setFromEuler(this.euler)}exitLock(){document.exitPointerLock()}requestLock(){document.body.requestPointerLock()}}const ti=class ti{constructor(){w(this,"entries",[])}static getInstance(){return ti.inst||(ti.inst=new ti),ti.inst}add(e){this.entries.push(e)}getByStudent(e){return this.entries.filter(t=>t.studentId===e)}average(e){const t=this.getByStudent(e);return t.length?t.reduce((n,i)=>n+i.grade,0)/t.length:0}getByDay(e){return this.entries.filter(t=>t.lessonDay===e)}all(){return[...this.entries]}clear(){this.entries=[]}};w(ti,"inst");let qs=ti;const ni=class ni{constructor(){w(this,"_classAttention",70);w(this,"bus",qt.getInstance())}static getInstance(){return ni.inst||(ni.inst=new ni),ni.inst}get value(){return this._classAttention}tick(e){this._classAttention=Math.max(0,this._classAttention-.4);const t=e.reduce((n,i)=>n+i.data.stats.attention,0)/e.length;this._classAttention=this._classAttention*.8+t*.2,this._classAttention=Math.max(0,Math.min(100,this._classAttention)),this.bus.emit("attentionChanged",{value:Math.round(this._classAttention)}),this._classAttention<30&&this.bus.emit("attentionWarning",null)}boost(e){this._classAttention=Math.min(100,this._classAttention+e),this.bus.emit("attentionChanged",{value:Math.round(this._classAttention)})}drop(e){this._classAttention=Math.max(0,this._classAttention-e),this.bus.emit("attentionChanged",{value:Math.round(this._classAttention)})}reset(){this._classAttention=70}};w(ni,"inst");let js=ni;const tg=[{subject:"math",gradeMin:7,gradeMax:8,topic:"Р¤РЎРЈ вЂ” С„РѕСЂРјСѓР»С‹ СЃРѕРєСЂР°С‰С‘РЅРЅРѕРіРѕ СѓРјРЅРѕР¶РµРЅРёСЏ",options:[{label:"Рђ) РўРµРѕСЂРµС‚РёС‡РµСЃРєРёР№ РІС‹РІРѕРґ",text:`В«Р¤РЎРЈ вЂ” С‚РѕР¶РґРµСЃС‚РІР° РґР»СЏ СѓСЃРєРѕСЂРµРЅРЅРѕРіРѕ СѓРјРЅРѕР¶РµРЅРёСЏ.

  (a+b)ВІ = aВІ + 2ab + bВІ
  (aв€’b)ВІ = aВІ в€’ 2ab + bВІ
  aВІв€’bВІ = (a+b)(aв€’b)

Р—Р°РїРѕРјРЅРёС‚Рµ РІСЃРµ С‚СЂРё. РћРЅРё СѓР¶Рµ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ РІ Р•Р“Р­!В»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-5}},{label:"Р‘) РЁР°Рі Р·Р° С€Р°РіРѕРј Сѓ РґРѕСЃРєРё",text:`В«РЁР°Рі 1: (a+b)ВІ = (a+b)В·(a+b)
РЁР°Рі 2: Р Р°СЃРєСЂС‹РІР°РµРј: aВ·a + aВ·b + bВ·a + bВ·b
РЁР°Рі 3: aВІ + ab + ab + bВІ = aВІ + 2ab + bВІ
вњЏпёЏ Р—Р°РїРёС€РёС‚Рµ РєР°Р¶РґС‹Р№ С€Р°Рі вЂ” С‡РµСЂРµР· РЅРµРґРµР»СЋ Р±СѓРґРµС‚Рµ РґРµР»Р°С‚СЊ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё.В»`,understandingBase:10,attentionDelta:4,difficulty:"medium",typeBonus:{anxious:9,average:5,helper:3,genius:-2}},{label:"Р’) РџСЂРёРјРµСЂ СЃ С‡РёСЃР»Р°РјРё",text:`В«РЎС‡РёС‚Р°РµРј 102ВІ Р±РµР· РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР°:
102ВІ = (100+2)ВІ = 10 000 + 400 + 4 = 10 404 вњ”
РР»Рё 99ВІ = (100в€’1)ВІ = 10 000 в€’ 200 + 1 = 9 801.
РџРѕРїСЂРѕР±СѓР№С‚Рµ СЃР°РјРё РїСЂСЏРјРѕ СЃРµР№С‡Р°СЃ: 51ВІ = ?В»`,understandingBase:8,attentionDelta:9,difficulty:"easy",typeBonus:{lazy:8,bully:6,average:4,helper:2,anxious:2}},{label:"Р“) Р’РѕРїСЂРѕСЃ РєР»Р°СЃСЃСѓ",text:`В«РљС‚Рѕ РЅР°РїРёС€РµС‚ РЅР° РґРѕСЃРєРµ (a+b)ВІ?
РњРЅРѕРіРёРµ РїРёС€СѓС‚ aВІ+bВІ вЂ” СЌС‚Рѕ РѕС€РёР±РєР°!
РџСЂРѕРІРµСЂРєР°: (3+4)ВІ=49, Р° 3ВІ+4ВІ=25. РџРѕС‡РµРјСѓ СЂР°Р·РЅС‹Рµ?
Р’РѕС‚ С‡С‚Рѕ РїСЂРѕРїР°Р»Рё? РЎСЂРµРґРЅРµРµ СЃР»Р°РіР°РµРјРѕРµ вЂ” 2ab!В»`,understandingBase:7,attentionDelta:12,difficulty:"medium",typeBonus:{genius:13,bully:7,helper:5,lazy:4,anxious:-4}}],tasks:{easy:{text:"РќР°Р·РѕРІРёС‚Рµ С„РѕСЂРјСѓР»Сѓ (a+b)ВІ. Р—Р°РїРёС€РёС‚Рµ РІ С‚РµС‚СЂР°РґСЊ.",hint:"(a+b)ВІ = aВІ + 2ab + bВІ"},medium:{text:`Р Р°СЃРєСЂРѕР№С‚Рµ СЃРєРѕР±РєРё Рё СѓРїСЂРѕСЃС‚РёС‚Рµ:
(2x + 3)ВІ`},hard:{text:`Р Р°Р·Р»РѕР¶РёС‚Рµ РЅР° РјРЅРѕР¶РёС‚РµР»Рё:
8aВі + 27bВі
(РёСЃРїРѕР»СЊР·СѓР№С‚Рµ РєСѓР± СЃСѓРјРјС‹: aВі+bВі=(a+b)(aВІв€’ab+bВІ))`}},homework:{easy:"Р’С‹СѓС‡РёС‚Рµ С‚СЂРё РіР»Р°РІРЅС‹Рµ С„РѕСЂРјСѓР»С‹ Р¤РЎРЈ. РџСЂРёРґСѓРјР°Р№С‚Рµ С‡РёСЃР»РѕРІРѕР№ РїСЂРёРјРµСЂ Рє РєР°Р¶РґРѕР№.",medium:"Р Р°СЃРєСЂРѕР№С‚Рµ СЃРєРѕР±РєРё: (3aв€’2b)ВІ, (x+5)ВІ, (4yв€’1)ВІ",hard:"Р”РѕРєР°Р¶РёС‚Рµ (a+b)Ві=aВі+3aВІb+3abВІ+bВі. Р Р°Р·Р»РѕР¶РёС‚Рµ: aВів€’8."}},{subject:"math",gradeMin:8,gradeMax:9,topic:"РљРІР°РґСЂР°С‚РЅС‹Рµ СѓСЂР°РІРЅРµРЅРёСЏ",options:[{label:"Рђ) РћРїСЂРµРґРµР»РµРЅРёРµ Рё РґРёСЃРєСЂРёРјРёРЅР°РЅС‚",text:`В«axВІ+bx+c=0 вЂ” СЃС‚Р°РЅРґР°СЂС‚РЅР°СЏ С„РѕСЂРјР°.
Р”РёСЃРєСЂРёРјРёРЅР°РЅС‚: D = bВІв€’4ac.
Р•СЃР»Рё D>0 вЂ” РґРІР° РєРѕСЂРЅСЏ, D=0 вЂ” РѕРґРёРЅ, D<0 вЂ” РЅРµС‚ РєРѕСЂРЅРµР№.
Р¤РѕСЂРјСѓР»Р°: x = (в€’b В± в€љD) / 2aВ»`,understandingBase:13,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:1,lazy:-7,bully:-6}},{label:"Р‘) Р Р°Р·Р±РѕСЂ РїСЂРёРјРµСЂР° Сѓ РґРѕСЃРєРё",text:`В«Р РµС€РёРј xВІв€’5x+6=0
РЁР°Рі 1: a=1, b=в€’5, c=6
РЁР°Рі 2: D=25в€’24=1
РЁР°Рі 3: x=(5В±1)/2 в†’ xв‚Ѓ=3, xв‚‚=2
РџСЂРѕРІРµСЂРєР°: 3В·2=6=c вњ”, 3+2=5=в€’b/a вњ”В»`,understandingBase:11,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:9,average:5,helper:3,genius:-1}},{label:"Р’) РўРµРѕСЂРµРјР° Р’РёРµС‚Р° РєР°Рє Р»Р°Р№С„С…Р°Рє",text:`В«Р•СЃР»Рё xв‚Ѓ+xв‚‚=в€’b/a Рё xв‚ЃВ·xв‚‚=c/a вЂ” РјРѕР¶РЅРѕ РїРѕРґР±РёСЂР°С‚СЊ РєРѕСЂРЅРё!
РџСЂРёРјРµСЂ: xВІв€’7x+12=0 в†’ xв‚Ѓ+xв‚‚=7, xв‚ЃВ·xв‚‚=12
РџРѕРґР±РёСЂР°РµРј: 3 Рё 4 в†’ 3+4=7, 3В·4=12 вњ”
Р‘РµР· С„РѕСЂРјСѓР»С‹ Р·Р° 10 СЃРµРєСѓРЅРґ!В»`,understandingBase:9,attentionDelta:8,difficulty:"easy",typeBonus:{lazy:7,bully:5,average:4,helper:3}},{label:"Р“) Р“РґРµ СЌС‚Рѕ РЅСѓР¶РЅРѕ РІ Р¶РёР·РЅРё?",text:`В«РђСЂС…РёС‚РµРєС‚РѕСЂ СЃС‡РёС‚Р°РµС‚ СЂР°Р·РјРµСЂ Р°СЂРєРё. Р¤РёР·РёРє вЂ” С‚СЂР°РµРєС‚РѕСЂРёСЋ РјСЏС‡Р°. РџСЂРѕРіСЂР°РјРјРёСЃС‚ вЂ” РєРѕСЂРЅРё РІ Р°Р»РіРѕСЂРёС‚РјР°С….
РЎРµР№С‡Р°СЃ РІС‹ СЂРµС€РёС‚Рµ: РїСЂРё РєР°РєРѕРј x РїР»РѕС‰Р°РґСЊ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР° x(xв€’3)=10? Р—Р°РїРёС€РёС‚Рµ СѓСЂР°РІРЅРµРЅРёРµ.В»`,understandingBase:7,attentionDelta:13,difficulty:"medium",typeBonus:{genius:10,bully:8,lazy:6,helper:4,anxious:-3}}],tasks:{easy:{text:"РќР°Р№РґРёС‚Рµ РґРёСЃРєСЂРёРјРёРЅР°РЅС‚: xВІв€’6x+5=0",hint:"D = bВІв€’4ac = 36в€’20 = 16"},medium:{text:"Р РµС€РёС‚Рµ СѓСЂР°РІРЅРµРЅРёРµ: 2xВІ+3xв€’2=0"},hard:{text:"РЎРѕСЃС‚Р°РІСЊС‚Рµ РєРІР°РґСЂР°С‚РЅРѕРµ СѓСЂР°РІРЅРµРЅРёРµ СЃ РєРѕСЂРЅСЏРјРё xв‚Ѓ=в€’3, xв‚‚=5 Рё СЂРµС€РёС‚Рµ РµРіРѕ."}},homework:{easy:"РќР°Р№РґРёС‚Рµ РєРѕСЂРЅРё: xВІв€’4=0, xВІ+6x+9=0.",medium:"Р РµС€РёС‚Рµ: 3xВІв€’xв€’2=0, xВІв€’5xв€’6=0.",hard:"Р РµС€РёС‚Рµ СЃРёСЃС‚РµРјСѓ: xВІ+yВІ=25 Рё x+y=7."}},{subject:"math",gradeMin:7,gradeMax:7,topic:"Р›РёРЅРµР№РЅР°СЏ С„СѓРЅРєС†РёСЏ Рё РµС‘ РіСЂР°С„РёРє",options:[{label:"Рђ) РћРїСЂРµРґРµР»РµРЅРёРµ y = kx + b",text:`В«Р›РёРЅРµР№РЅР°СЏ С„СѓРЅРєС†РёСЏ: y = kx + b.
k вЂ” РЅР°РєР»РѕРЅ (СѓРіР»РѕРІРѕР№ РєРѕСЌС„С„РёС†РёРµРЅС‚),
b вЂ” С‚РѕС‡РєР° РїРµСЂРµСЃРµС‡РµРЅРёСЏ СЃ РѕСЃСЊСЋ Y.
РџСЂРё k>0 вЂ” РІРѕР·СЂР°СЃС‚Р°РЅРёРµ, k<0 вЂ” СѓР±С‹РІР°РЅРёРµ.В»`,understandingBase:11,attentionDelta:-2,difficulty:"medium",typeBonus:{genius:7,average:4,helper:4,lazy:-4,bully:-4,anxious:3}},{label:"Р‘) РЎС‚СЂРѕРёРј РіСЂР°С„РёРє РІРјРµСЃС‚Рµ",text:`В«РЎС‚СЂРѕРёРј y = 2x + 1:
РЁР°Рі 1: x=0 в†’ y=1. РўРѕС‡РєР° (0;1)
РЁР°Рі 2: x=1 в†’ y=3. РўРѕС‡РєР° (1;3)
РЁР°Рі 3: РџСЂРѕРІРѕРґРёРј РїСЂСЏРјСѓСЋ С‡РµСЂРµР· РѕР±Рµ С‚РѕС‡РєРё.
Р’СЃРµРіРґР° РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РґРІСѓС… С‚РѕС‡РµРє!В»`,understandingBase:10,attentionDelta:6,difficulty:"easy",typeBonus:{anxious:8,average:6,bully:4,lazy:5,helper:3}},{label:"Р’) РЈРіР»РѕРІРѕР№ РєРѕСЌС„С„РёС†РёРµРЅС‚ вЂ” СЌС‚Рѕ РєСЂСѓС‚РёР·РЅР°",text:`В«k = 10 вЂ” РїРѕС‡С‚Рё РІРµСЂС‚РёРєР°Р»СЊРЅР°СЏ РіРѕСЂР°.
k = 0.1 вЂ” РїРѕР»РѕРіРёР№ С…РѕР»Рј.
k = в€’2 вЂ” СЃРїСѓСЃРє.
k = 0 вЂ” РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊ.
РљС‚Рѕ РЅР°Р·РѕРІС‘С‚: РіРѕСЂРєР° y=в€’3x+5 РєСЂСѓС‚Р°СЏ?В»`,understandingBase:8,attentionDelta:10,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:3}},{label:"Р“) Р“РґРµ РїРµСЂРµСЃРµРєСѓС‚СЃСЏ РґРІРµ РїСЂСЏРјС‹Рµ?",text:`В«y=2x+1 Рё y=в€’x+7 вЂ” РіРґРµ РїРµСЂРµСЃРµРєР°СЋС‚СЃСЏ?
РџСЂРёСЂР°РІРЅРёРІР°РµРј: 2x+1=в€’x+7 в†’ 3x=6 в†’ x=2.
РџРѕРґСЃС‚Р°РІР»СЏРµРј: y=5. РўРѕС‡РєР° (2;5).
в†’ РўР°Рє СЂРµС€Р°СЋС‚ СЃРёСЃС‚РµРјС‹ СѓСЂР°РІРЅРµРЅРёР№!В»`,understandingBase:8,attentionDelta:9,difficulty:"medium",typeBonus:{genius:11,helper:5,average:3,anxious:-2}}],tasks:{easy:{text:"РќР°Р·РѕРІРёС‚Рµ k Рё b РґР»СЏ С„СѓРЅРєС†РёРё y = 3x в€’ 2.",hint:"k=3, b=в€’2"},medium:{text:"РџРѕСЃС‚СЂРѕР№С‚Рµ РіСЂР°С„РёРє С„СѓРЅРєС†РёРё y = в€’2x + 4 (2 С‚РѕС‡РєРё Рё РїСЂСЏРјР°СЏ)."},hard:{text:"РќР°Р№РґРёС‚Рµ С‚РѕС‡РєСѓ РїРµСЂРµСЃРµС‡РµРЅРёСЏ РїСЂСЏРјС‹С…: y = 3xв€’1 Рё y = в€’x+7."}},homework:{easy:"Р—Р°РїРёС€РёС‚Рµ С‚СЂРё С„СѓРЅРєС†РёРё СЃ k>0 Рё С‚СЂРё СЃ k<0.",medium:"РџРѕСЃС‚СЂРѕР№С‚Рµ РіСЂР°С„РёРєРё: y=x+3, y=в€’2x+5.",hard:"РџСЂРё РєР°РєРѕРј b РїСЂСЏРјР°СЏ y=2x+b РїСЂРѕС…РѕРґРёС‚ С‡РµСЂРµР· С‚РѕС‡РєСѓ (3;7)?"}},{subject:"math",gradeMin:8,gradeMax:8,topic:"РўРµРѕСЂРµРјР° РџРёС„Р°РіРѕСЂР°",options:[{label:"Рђ) Р¤РѕСЂРјСѓР»РёСЂРѕРІРєР° Рё РґРѕРєР°Р·Р°С‚РµР»СЊСЃС‚РІРѕ",text:`В«Р’ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРѕРј С‚СЂРµСѓРіРѕР»СЊРЅРёРєРµ: aВІ + bВІ = cВІ
c вЂ” РіРёРїРѕС‚РµРЅСѓР·Р° (РЅР°РїСЂРѕС‚РёРІ РїСЂСЏРјРѕРіРѕ СѓРіР»Р°).
Р”РѕРєР°Р·Р°С‚РµР»СЊСЃС‚РІРѕ: РїР»РѕС‰Р°РґСЊ Р±РѕР»СЊС€РѕРіРѕ РєРІР°РґСЂР°С‚Р° = РєРІР°РґСЂР°С‚Р°Рј РїРѕ РєР°С‚РµС‚Р°Рј.
Р—Р°РїРѕРјРЅРёС‚Рµ: "РџРёС„Р°РіРѕСЂРѕРІС‹ С‚СЂРѕР№РєРё" вЂ” 3,4,5 Рё 5,12,13.В»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-5,bully:-4}},{label:"Р‘) Р§РµСЂС‚С‘Р¶ Рё СЂР°СЃС‡С‘С‚",text:`В«РљР°С‚РµС‚С‹ a=3, b=4. РќР°Р№РґС‘Рј РіРёРїРѕС‚РµРЅСѓР·Сѓ.
РЁР°Рі 1: cВІ = 3ВІ + 4ВІ = 9 + 16 = 25
РЁР°Рі 2: c = в€љ25 = 5
Р­С‚Рѕ "РµРіРёРїРµС‚СЃРєРёР№ С‚СЂРµСѓРіРѕР»СЊРЅРёРє" вЂ” РµРіРѕ Р·РЅР°Р»Рё 4000 Р»РµС‚ РЅР°Р·Р°Рґ!В»`,understandingBase:11,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3,genius:-1}},{label:"Р’) РћС‚ РџРёС„Р°РіРѕСЂР° РґРѕ GPS",text:`В«GPS СЃС‡РёС‚Р°РµС‚ СЂР°СЃСЃС‚РѕСЏРЅРёСЏ РїРѕ "3D-РџРёС„Р°РіРѕСЂСѓ":
d = в€љ(О”xВІ+О”yВІ+О”zВІ).
РђСЂС…РёС‚РµРєС‚РѕСЂС‹ РёСЃРїРѕР»СЊР·СѓСЋС‚ С‚РµРѕСЂРµРјСѓ РїСЂРё СЂР°Р·РјРµС‚РєРµ С„СѓРЅРґР°РјРµРЅС‚Р°.
Р•С‰С‘: СЌРєСЂР°РЅ 16:9 вЂ” СЌС‚Рѕ РџРёС„Р°РіРѕСЂ Сѓ РІР°СЃ РІ РєР°СЂРјР°РЅРµ!В»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:3}},{label:"Р“) Р—Р°РґР°С‡Р° РЅР° РІСЂРµРјСЏ",text:`В«Р›РµСЃС‚РЅРёС†Р° 5 Рј СЃС‚РѕРёС‚ Сѓ СЃС‚РµРЅС‹. РќРёР¶РЅРёР№ РєРѕРЅРµС† РІ 3 Рј РѕС‚ СЃС‚РµРЅС‹.
РќР° РєР°РєРѕР№ РІС‹СЃРѕС‚Рµ РІРµСЂС…РЅРёР№?
в€љ(5ВІв€’3ВІ) = в€љ16 = 4 Рј.
РљС‚Рѕ СЂРµС€РёС‚: РІС‹СЃРѕС‚Р° РіРѕСЂС‹, РµСЃР»Рё РіРѕСЂРёР·РѕРЅС‚ 10 РєРј, СЂР°РґРёСѓСЃ Р—РµРјР»Рё 6400 РєРј?В»`,understandingBase:7,attentionDelta:11,difficulty:"medium",typeBonus:{genius:12,bully:6,helper:5,lazy:3,anxious:-2}}],badOption:{label:"Р”) В«РџСЂРѕСЃС‚Рѕ РЅР°СЂРёСЃСѓР№С‚Рµ С‚СЂРµСѓРіРѕР»СЊРЅРёРєВ»",text:"В«Р—Р°С‡РµРј С„РѕСЂРјСѓР»С‹? Р’РѕР·СЊРјРёС‚Рµ Р»РёРЅРµР№РєСѓ вЂ” РЅР°СЂРёСЃСѓР№С‚Рµ С‚СЂРµСѓРіРѕР»СЊРЅРёРє, РёР·РјРµСЂСЊС‚Рµ СЃС‚РѕСЂРѕРЅС‹. Р­С‚РѕРіРѕ РІРїРѕР»РЅРµ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ. РўРѕС‡РЅРѕСЃС‚СЊ РЅРµ С‚Р°Рє РІР°Р¶РЅР° РІ Р¶РёР·РЅРё.В»",understandingBase:-5,attentionDelta:5,difficulty:"easy",typeBonus:{bully:10,lazy:9,genius:-12,helper:-9,anxious:-7},isBad:!0},tasks:{easy:{text:"РљР°С‚РµС‚С‹ С‚СЂРµСѓРіРѕР»СЊРЅРёРєР° вЂ” 6 Рё 8. РќР°Р№РґРёС‚Рµ РіРёРїРѕС‚РµРЅСѓР·Сѓ.",hint:"c = в€љ(36+64) = 10"},medium:{text:"Р“РёРїРѕС‚РµРЅСѓР·Р° РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРѕРіРѕ С‚СЂРµСѓРіРѕР»СЊРЅРёРєР° СЂР°РІРЅР° 13, РѕРґРёРЅ РєР°С‚РµС‚ вЂ” 5. РќР°Р№РґРёС‚Рµ РІС‚РѕСЂРѕР№ РєР°С‚РµС‚."},hard:{text:"Р”РёР°РіРѕРЅР°Р»СЊ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР° 10 СЃРј, РѕРґРЅР° СЃС‚РѕСЂРѕРЅР° 6 СЃРј. РќР°Р№РґРёС‚Рµ РїР»РѕС‰Р°РґСЊ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°."}},homework:{easy:"РќР°Р№РґРёС‚Рµ РіРёРїРѕС‚РµРЅСѓР·Сѓ, РµСЃР»Рё РєР°С‚РµС‚С‹: a) 3 Рё 4; Р±) 5 Рё 12.",medium:"РњРѕР¶РµС‚ Р»Рё С‚СЂРµСѓРіРѕР»СЊРЅРёРє СЃРѕ СЃС‚РѕСЂРѕРЅР°РјРё 5, 7, 9 Р±С‹С‚СЊ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅС‹Рј? РћР±РѕСЃРЅСѓР№С‚Рµ.",hard:"РўРѕС‡РєРё A(1,2) Рё B(4,6). РќР°Р№РґРёС‚Рµ СЂР°СЃСЃС‚РѕСЏРЅРёРµ AB С‡РµСЂРµР· С‚РµРѕСЂРµРјСѓ РџРёС„Р°РіРѕСЂР°."}},{subject:"math",gradeMin:9,gradeMax:10,topic:"РўСЂРёРіРѕРЅРѕРјРµС‚СЂРёСЏ. РЎРёРЅСѓСЃ, РєРѕСЃРёРЅСѓСЃ, С‚Р°РЅРіРµРЅСЃ",options:[{label:"Рђ) РћРїСЂРµРґРµР»РµРЅРёСЏ С‡РµСЂРµР· РїСЂСЏРј. С‚СЂРµСѓРіРѕР»СЊРЅРёРє",text:`В«sin О± = РїСЂРѕС‚РёРІРѕР»РµР¶Р°С‰РёР№ РєР°С‚РµС‚ / РіРёРїРѕС‚РµРЅСѓР·Р°
cos О± = РїСЂРёР»РµР¶Р°С‰РёР№ РєР°С‚РµС‚ / РіРёРїРѕС‚РµРЅСѓР·Р°
tg О± = sin О± / cos О± = РїСЂРѕС‚РёРІРѕР». / РїСЂРёР»РµР¶Р°С‰РёР№.
Р“Р»Р°РІРЅРѕРµ С‚РѕР¶РґРµСЃС‚РІРѕ: sinВІО± + cosВІО± = 1В»`,understandingBase:13,attentionDelta:-4,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:2,lazy:-8,bully:-6}},{label:"Р‘) Р•РґРёРЅРёС‡РЅР°СЏ РѕРєСЂСѓР¶РЅРѕСЃС‚СЊ",text:`В«Р РёСЃСѓРµРј РѕРєСЂСѓР¶РЅРѕСЃС‚СЊ СЂР°РґРёСѓСЃРѕРј 1. РЈРіРѕР» О± РѕС‚ РѕСЃРё X.
РўРѕС‡РєР° РЅР° РѕРєСЂСѓР¶РЅРѕСЃС‚Рё: (cos О±, sin О±).
sin 0В°=0, cos 0В°=1; sin 90В°=1, cos 90В°=0.
MРЅРµРЅРёРµ: sinВІО±+cosВІО± = 1 вЂ” СЂР°СЃСЃС‚РѕСЏРЅРёРµ РѕС‚ С†РµРЅС‚СЂР°!В»`,understandingBase:11,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:8,average:5,helper:3,genius:2}},{label:"Р’) РЎРёРЅСѓСЃ РІ РјСѓР·С‹РєРµ Рё С„РёР·РёРєРµ",text:`В«Р—РІСѓРєРѕРІР°СЏ РІРѕР»РЅР° вЂ” СЌС‚Рѕ СЃРёРЅСѓСЃ! y = AВ·sin(П‰t+П†).
РљРѕР»РµР±Р°РЅРёСЏ РјР°СЏС‚РЅРёРєР°, С‚РѕРє РІ СЂРѕР·РµС‚РєРµ (50 Р“С†), РІРѕР»РЅС‹ РЅР° РІРѕРґРµ.
РўСЂРёРіРѕРЅРѕРјРµС‚СЂРёСЏ РѕР±СЉСЏСЃРЅСЏРµС‚ РІСЃС‘ РїРµСЂРёРѕРґРёС‡РµСЃРєРѕРµ.В»`,understandingBase:8,attentionDelta:13,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:4}},{label:"Р“) РўР°Р±Р»РёС†Р° Р·РЅР°С‡РµРЅРёР№ вЂ” СЃРѕСЂРµРІРЅРѕРІР°РЅРёРµ",text:`В«РљС‚Рѕ Р±С‹СЃС‚СЂРµРµ РЅР°Р·РѕРІС‘С‚: sin 30В°, cos 60В°, tg 45В°?
РџРѕРґСЃРєР°Р·РєР°: Р·Р°РїРѕРјРЅРёС‚Рµ 0В°, 30В°, 45В°, 60В°, 90В°.
0, 1/2, в€љ2/2, в€љ3/2, 1 РґР»СЏ СЃРёРЅСѓСЃР°.
Р­С‚Рё Р·РЅР°С‡РµРЅРёСЏ РІСЃС‚СЂРµС‡Р°СЋС‚СЃСЏ РІ Р•Р“Р­ РєР°Р¶РґС‹Р№ РіРѕРґ!В»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:12,bully:8,helper:5,lazy:3,anxious:-3}}],badOption:{label:"Р”) В«РСЃРїРѕР»СЊР·СѓР№С‚Рµ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ РІСЃРµРіРґР°В»",text:"В«Р—Р°С‡РµРј РїРѕРјРЅРёС‚СЊ sin Рё cos? Р’СЃРµРіРґР° РµСЃС‚СЊ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ. Р’РІРµРґРёС‚Рµ СѓРіРѕР» вЂ” РїРѕР»СѓС‡РёС‚Рµ РѕС‚РІРµС‚. РўР°Р±Р»РёС†С‹ СѓС‡РёС‚СЊ РЅРµ РЅСѓР¶РЅРѕ. Р’СЂРµРјСЏ РѕРіСЂР°РЅРёС‡РµРЅРѕ.В»",understandingBase:-4,attentionDelta:6,difficulty:"easy",typeBonus:{bully:10,lazy:12,genius:-10,helper:-8,anxious:-6},isBad:!0},tasks:{easy:{text:"Р’ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРѕРј С‚СЂРµСѓРіРѕР»СЊРЅРёРєРµ РіРёРїРѕС‚РµРЅСѓР·Р° = 10, СѓРіРѕР» = 30В°. РќР°Р№РґРёС‚Рµ РїСЂРѕС‚РёРІРѕР»РµР¶Р°С‰РёР№ РєР°С‚РµС‚.",hint:"a = cВ·sin30В° = 10В·0.5 = 5"},medium:{text:"РќР°Р№РґРёС‚Рµ: sinВІ45В° + cosВІ45В° (РїСЂРѕРІРµСЂСЊС‚Рµ РѕСЃРЅРѕРІРЅРѕРµ С‚РѕР¶РґРµСЃС‚РІРѕ)."},hard:{text:"РЈРїСЂРѕСЃС‚РёС‚Рµ РІС‹СЂР°Р¶РµРЅРёРµ: (sin О± + cos О±)ВІ в€’ 1."}},homework:{easy:"Р’С‹СѓС‡РёС‚Рµ Р·РЅР°С‡РµРЅРёСЏ sin/cos/tg РґР»СЏ 0В°, 30В°, 45В°, 60В°, 90В°.",medium:"Р РµС€РёС‚Рµ СѓСЂР°РІРЅРµРЅРёРµ: sin x = 0.5 (РЅР°Р№РґРёС‚Рµ РІСЃРµ СЂРµС€РµРЅРёСЏ РЅР° [0В°; 360В°]).",hard:"Р”РѕРєР°Р¶РёС‚Рµ С‚РѕР¶РґРµСЃС‚РІРѕ: tg О± + ctg О± = 1/(sin О± В· cos О±)."}},{subject:"math",gradeMin:8,gradeMax:9,topic:"Р’РµСЂРѕСЏС‚РЅРѕСЃС‚СЊ. РћСЃРЅРѕРІРЅС‹Рµ РїРѕРЅСЏС‚РёСЏ",options:[{label:"Рђ) РљР»Р°СЃСЃРёС‡РµСЃРєРѕРµ РѕРїСЂРµРґРµР»РµРЅРёРµ",text:`В«P(A) = m/n, РіРґРµ m вЂ” Р±Р»Р°РіРѕРїСЂРёСЏС‚РЅС‹Рµ РёСЃС…РѕРґС‹, n вЂ” РІСЃРµРіРѕ РІРѕР·РјРѕР¶РЅС‹С….
Р’СЃРµРіРґР°: 0 в‰¤ P(A) в‰¤ 1.
P(О©) = 1 (РґРѕСЃС‚РѕРІРµСЂРЅРѕРµ), P(в€…) = 0 (РЅРµРІРѕР·РјРѕР¶РЅРѕРµ).
Р•СЃР»Рё P(A)+P(РЅРµ-A)=1 вЂ” СЃРѕР±С‹С‚РёСЏ РїСЂРѕС‚РёРІРѕРїРѕР»РѕР¶РЅС‹.В»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-5}},{label:"Р‘) РњРѕРЅРµС‚РєР° Рё РєСѓР±РёРє",text:`В«РљСѓР±РёРє: 6 РіСЂР°РЅРµР№. P(РІС‹РїР°РґРµС‚ 3) = 1/6 в‰€ 0.17 = 17%.
РњРѕРЅРµС‚Р°: P(РѕСЂС‘Р») = 1/2 = 50%.
РљР°СЂС‚Р° РёР· РєРѕР»РѕРґС‹ 52: P(С‚СѓР·) = 4/52 = 1/13 в‰€ 8%.
РџРѕРїСЂРѕР±СѓР№С‚Рµ СЃР°РјРё: P(С‡С‘С‚РЅРѕРµ РЅР° РєСѓР±РёРєРµ) = ?В»`,understandingBase:11,attentionDelta:7,difficulty:"easy",typeBonus:{lazy:9,bully:8,average:6,helper:4}},{label:"Р’) Р’РµСЂРѕСЏС‚РЅРѕСЃС‚СЊ РІ Р¶РёР·РЅРё",text:`В«РџРѕРіРѕРґР°: "30% РґРѕР¶РґСЏ" вЂ” Р·РЅР°С‡РёС‚ РёР· 10 РїРѕС…РѕР¶РёС… РґРЅРµР№ РґРѕР¶РґСЊ РІ 3.
РњРµРґРёС†РёРЅР°: РІР°РєС†РёРЅР° 95% вЂ” Р·РЅР°С‡РёС‚ Р·Р°С‰РёС‰Р°РµС‚ 95 РёР· 100 РїСЂРёРІРёС‚С‹С….
РЎС‚СЂР°С…РѕРІС‹Рµ РєРѕРјРїР°РЅРёРё: СЃС‡РёС‚Р°СЋС‚ РІРµСЂРѕСЏС‚РЅРѕСЃС‚СЊ Р°РІР°СЂРёРё РґР»СЏ РєР°Р¶РґРѕРіРѕ РІРѕРґРёС‚РµР»СЏ!В»`,understandingBase:8,attentionDelta:11,difficulty:"easy",typeBonus:{lazy:10,bully:7,average:5,helper:4}},{label:"Р“) РџР°СЂР°РґРѕРєСЃ РјРѕРЅС‚РµСЂР° РҐРѕР»Р»Р°",text:`В«3 РґРІРµСЂРё, Р·Р° РѕРґРЅРѕР№ вЂ” РїСЂРёР·. Р’С‹ РІС‹Р±СЂР°Р»Рё в„–1. Р’РµРґСѓС‰РёР№ РѕС‚РєСЂС‹Р» в„–3 вЂ” С‚Р°Рј РєРѕР·Р°. РњРµРЅСЏС‚СЊ Р»Рё РІС‹Р±РѕСЂ?
РћС‚РІРµС‚: Р”Рђ! P РІС‹РёРіСЂР°С‚СЊ РїСЂРё СЃРјРµРЅРµ = 2/3!
РџРѕС‡РµРјСѓ? РћР±СЃСѓРґРёРј РІРјРµСЃС‚Рµ вЂ” СЌС‚Рѕ РїСЂРѕС‚РёРІ РёРЅС‚СѓРёС†РёРё.В»`,understandingBase:6,attentionDelta:16,difficulty:"medium",typeBonus:{genius:14,bully:9,helper:6,lazy:7,anxious:-4}}],badOption:{label:"Р”) В«Р’РµСЂРѕСЏС‚РЅРѕСЃС‚СЊ РЅРµРЅР°СѓС‡РЅР°В»",text:"В«Р§РµСЃС‚РЅРѕ РіРѕРІРѕСЂСЏ, РІРµСЂРѕСЏС‚РЅРѕСЃС‚СЊ вЂ” СЌС‚Рѕ РіР°РґР°РЅРёРµ. РќРёРєС‚Рѕ РЅРµ Р·РЅР°РµС‚ С‚РѕС‡РЅРѕ, С‡С‚Рѕ РїСЂРѕРёР·РѕР№РґС‘С‚. РџСЂРѕСЃС‚Рѕ СѓРіР°РґС‹РІР°Р№С‚Рµ. Р’ Р¶РёР·РЅРё РІСЃС‘ СЃР»СѓС‡Р°Р№РЅРѕ, С„РѕСЂРјСѓР»С‹ РЅРµ РїРѕРјРѕРіСѓС‚.В»",understandingBase:-7,attentionDelta:3,difficulty:"easy",typeBonus:{bully:11,lazy:10,genius:-13,helper:-10,anxious:-6},isBad:!0},tasks:{easy:{text:"Р’ РјРµС€РєРµ 3 РєСЂР°СЃРЅС‹С… Рё 7 СЃРёРЅРёС… С€Р°СЂРѕРІ. РљР°РєРѕРІР° РІРµСЂРѕСЏС‚РЅРѕСЃС‚СЊ РІС‹С‚Р°С‰РёС‚СЊ РєСЂР°СЃРЅС‹Р№?",hint:"P = 3/10 = 0.3"},medium:{text:"РњРѕРЅРµС‚Сѓ РїРѕРґР±СЂРѕСЃРёР»Рё 3 СЂР°Р·Р°. РќР°Р№РґРёС‚Рµ РІРµСЂРѕСЏС‚РЅРѕСЃС‚СЊ РІС‹РїР°РґРµРЅРёСЏ СЂРѕРІРЅРѕ РґРІСѓС… РѕСЂР»РѕРІ."},hard:{text:"РќР° 10 Р»РѕС‚РµСЂРµР№РЅС‹С… Р±РёР»РµС‚РѕРІ 3 РІС‹РёРіСЂС‹С€РЅС‹С…. РџРѕРєСѓРїР°СЋС‚ 4 Р±РёР»РµС‚Р°. РќР°Р№РґРёС‚Рµ P(С…РѕС‚СЏ Р±С‹ 1 РІС‹РёРіСЂР°РµС‚)."}},homework:{easy:"Р‘СЂРѕСЃР°СЋС‚ РєСѓР±РёРє. РќР°Р№РґРёС‚Рµ P(Р±РѕР»СЊС€Рµ 4), P(РЅРµС‡С‘С‚РЅРѕРµ), P(РєСЂР°С‚РЅРѕРµ 3).",medium:"РР· 5 РєР°СЂС‚РѕС‡РµРє (1,2,3,4,5) РґРѕСЃС‚Р°СЋС‚ 2. РќР°Р№РґРёС‚Рµ P(СЃСѓРјРјР° > 6).",hard:"Р—Р°РґР°С‡Р°: СЃС‚СЂРµР»СЏСЋС‚ 2 СЂР°Р·Р° РїРѕ РјРёС€РµРЅРё. P РїРѕРїР°РґР°РЅРёСЏ = 0.7 РєР°Р¶РґС‹Р№ СЂР°Р·. P(С…РѕС‚СЏ Р±С‹ РѕРґРЅРѕ РїРѕРїР°РґР°РЅРёРµ) = ?"}}],ng=[{subject:"physics",gradeMin:8,gradeMax:9,topic:"Р—Р°РєРѕРЅ РќСЊСЋС‚РѕРЅР° Рё РІС‚РѕСЂРѕР№ Р·Р°РєРѕРЅ",options:[{label:"Рђ) Р¤РѕСЂРјСѓР»РёСЂРѕРІРєР° С‚СЂС‘С… Р·Р°РєРѕРЅРѕРІ",text:`В«I Р·Р°РєРѕРЅ: С‚РµР»Рѕ РїРѕРєРѕРёС‚СЃСЏ, РµСЃР»Рё РЅРµС‚ СЃРёР»С‹.
II Р·Р°РєРѕРЅ: F = mВ·a вЂ” СЃРёР»Р° СЂР°РІРЅР° РјР°СЃСЃРµ РЅР° СѓСЃРєРѕСЂРµРЅРёРµ.
III Р·Р°РєРѕРЅ: РґРµР№СЃС‚РІРёРµ = РїСЂРѕС‚РёРІРѕРґРµР№СЃС‚РІРёРµ.
Р—Р°РїРёС€РёС‚Рµ РІСЃРµ С‚СЂРё С„РѕСЂРјСѓР»РёСЂРѕРІРєРё.В»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-7,bully:-5}},{label:"Р‘) Р—Р°РґР°С‡Р° РЅР° II Р·Р°РєРѕРЅ Сѓ РґРѕСЃРєРё",text:`В«РўРµР»Рѕ РјР°СЃСЃРѕР№ 2 РєРі СЂР°Р·РіРѕРЅСЏРµС‚СЃСЏ СЃ a=3 Рј/СЃВІ.
F = mВ·a = 2В·3 = 6 Рќ.
РЁР°Рі 1 вЂ” Р·Р°РїРёСЃР°С‚СЊ В«Р”Р°РЅРѕВ».
РЁР°Рі 2 вЂ” РІС‹Р±СЂР°С‚СЊ С„РѕСЂРјСѓР»Сѓ.
РЁР°Рі 3 вЂ” РїРѕРґСЃС‚Р°РІРёС‚СЊ С‡РёСЃР»Р°.В»`,understandingBase:11,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:9,average:6,helper:3}},{label:"Р’) РџСЂРёРјРµСЂ: Р»РёС„С‚ Рё РІРµСЃС‹",text:`В«Р’С‹ СЃС‚РѕРёС‚Рµ РІ Р»РёС„С‚Рµ. Р›РёС„С‚ РµРґРµС‚ РІРІРµСЂС… в†’ РІС‹ С‚СЏР¶РµР»РµРµ! Р’РЅРёР· в†’ Р»РµРіС‡Рµ.
РџРѕС‡РµРјСѓ? F=ma: РїСЂРё aв†‘ вЂ” СЃРёР»Р° N = mg+ma.
Р•СЃР»Рё С‚СЂРѕСЃ РѕР±СЂС‹РІР°РµС‚СЃСЏ вЂ” РЅРµРІРµСЃРѕРјРѕСЃС‚СЊ: N=0.В»`,understandingBase:9,attentionDelta:11,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:3}},{label:"Р“) Р­РєСЃРїРµСЂРёРјРµРЅС‚: С‚РѕР»РєРЅРё СЃС‚РѕР»",text:`В«РљС‚Рѕ РјРѕР¶РµС‚ СЃРґРІРёРЅСѓС‚СЊ СЃС‚РѕР» РѕРґРЅРёРј РїР°Р»СЊС†РµРј?
РџРѕ III Р·Р°РєРѕРЅСѓ, СЃС‚РѕР» С‚РѕР¶Рµ РґР°РІРёС‚ РЅР° РїР°Р»РµС†!
Р•СЃР»Рё a=0 в†’ СЃСѓРјРјР° СЃРёР» = 0 (I Р·Р°РєРѕРЅ).
РљР°Рє РЅР°Р·С‹РІР°РµС‚СЃСЏ СЌС‚Р° СЃРёС‚СѓР°С†РёСЏ?В»`,understandingBase:8,attentionDelta:14,difficulty:"medium",typeBonus:{bully:9,genius:10,lazy:7,helper:5,anxious:-3}}],tasks:{easy:{text:"РўРµР»Рѕ РјР°СЃСЃРѕР№ 5 РєРі РёРјРµРµС‚ СѓСЃРєРѕСЂРµРЅРёРµ 2 Рј/СЃВІ. РќР°Р№РґРёС‚Рµ РїСЂРёР»РѕР¶РµРЅРЅСѓСЋ СЃРёР»Сѓ.",hint:"F = mВ·a"},medium:{text:"РЎРёР»Р° 30 Рќ РґРµР№СЃС‚РІСѓРµС‚ РЅР° С‚РµР»Рѕ РјР°СЃСЃРѕР№ 6 РєРі. РќР°Р№РґРёС‚Рµ СѓСЃРєРѕСЂРµРЅРёРµ Рё СЃРєРѕСЂРѕСЃС‚СЊ С‡РµСЂРµР· 4 СЃ."},hard:{text:"РўСЂСѓР± РјР°СЃСЃР° 8 РєРі Р»РµР¶РёС‚ РЅР° РїРѕРІРµСЂС…РЅРѕСЃС‚Рё Ој=0.3. РљР°РєР°СЏ СЃРёР»Р° РЅСѓР¶РЅР° РґР»СЏ СЂР°РІРЅРѕРјРµСЂРЅРѕРіРѕ РґРІРёР¶РµРЅРёСЏ? (g=10)"}},homework:{easy:"Р’С‹СѓС‡РёС‚Рµ С‚СЂРё Р·Р°РєРѕРЅР° РќСЊСЋС‚РѕРЅР° Рё РїСЂРёРІРµРґРёС‚Рµ РїСЂРёРјРµСЂ РґР»СЏ РєР°Р¶РґРѕРіРѕ.",medium:"Р РµС€РёС‚Рµ Р·Р°РґР°С‡Рё: m=4РєРі, a=5Рј/СЃВІ, F=? Рё F=20Рќ, m=2РєРі, a=?",hard:"РћР±СЉСЏСЃРЅРёС‚Рµ, РїРѕС‡РµРјСѓ РїСЂРё РїСЂС‹Р¶РєРµ СЃ РїР°СЂР°С€СЋС‚РѕРј С‚РµР»Рѕ РІ РёС‚РѕРіРµ РґРІРёР¶РµС‚СЃСЏ СЂР°РІРЅРѕРјРµСЂРЅРѕ."}},{subject:"physics",gradeMin:8,gradeMax:9,topic:"Р—Р°РєРѕРЅ РћРјР°. РџРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕРµ Рё РїР°СЂР°Р»Р»РµР»СЊРЅРѕРµ СЃРѕРµРґРёРЅРµРЅРёРµ",options:[{label:"Рђ) Р—Р°РєРѕРЅ РћРјР°: I = U/R",text:`В«РўРѕРє I = U/R (РћРј). U вЂ” РЅР°РїСЂСЏР¶РµРЅРёРµ, R вЂ” СЃРѕРїСЂРѕС‚РёРІР»РµРЅРёРµ.
РџСЂРё РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕРј СЃРѕРµРґРёРЅРµРЅРёРё: R = Rв‚Ѓ+Rв‚‚, I РѕРґРёРЅР°РєРѕРІ.
РџСЂРё РїР°СЂР°Р»Р»РµР»СЊРЅРѕРј: 1/R = 1/Rв‚Ѓ+1/Rв‚‚, U РѕРґРёРЅР°РєРѕРІРѕ.В»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:1,lazy:-8,bully:-6}},{label:"Р‘) РЎС…РµРјР° РЅР° РґРѕСЃРєРµ",text:`В«Р РёСЃСѓРµРј: Р±Р°С‚Р°СЂРµСЏ 12Р’, Rв‚Ѓ=3РћРј, Rв‚‚=4РћРј РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕ.
R=3+4=7 РћРј.
I = U/R = 12/7 в‰€ 1.7 Рђ.
Uв‚Ѓ = IВ·Rв‚Ѓ = 5.1 Р’, Uв‚‚ = 6.9 Р’.
РџСЂРѕРІРµСЂРєР°: 5.1+6.9=12 вњ”В»`,understandingBase:11,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3}},{label:"Р’) Р‘С‹С‚РѕРІС‹Рµ РїСЂРёР±РѕСЂС‹ вЂ” СЌС‚Рѕ РїР°СЂР°Р»Р»РµР»СЊРЅРѕ!",text:`В«РџРѕС‡РµРјСѓ РїСЂРё РїРѕРґРєР»СЋС‡РµРЅРёРё С‚СЂРµС‚СЊРµРіРѕ РїСЂРёР±РѕСЂР° Р°РІС‚РѕРјР°С‚ РІС‹Р±РёРІР°РµС‚?
Р’СЃРµ СЂРѕР·РµС‚РєРё вЂ” РїР°СЂР°Р»Р»РµР»СЊРЅРѕ в†’ СЃСѓРјРјР°СЂРЅС‹Р№ С‚РѕРє СЂР°СЃС‚С‘С‚.
РљРѕР»РѕРЅРєР° + С‡Р°Р№РЅРёРє + С„РµРЅ = РїРµСЂРµРіСЂСѓР·РєР°.
Р’РѕС‚ Р·Р°С‡РµРј Р°РІС‚РѕРјР°С‚С‹!В»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:6,helper:4}},{label:"Р“) Р’РѕРїСЂРѕСЃ: С‡С‚Рѕ РѕРїР°СЃРЅРµРµ?",text:`В«Р’РѕРїСЂРѕСЃ РєР»Р°СЃСЃСѓ: РїСЂРё РѕРґРЅРѕРј РЅР°РїСЂСЏР¶РµРЅРёРё вЂ” Р±РѕР»СЊС€РѕР№ РёР»Рё РјР°Р»С‹Р№ С‚РѕРє РѕРїР°СЃРЅРµРµ?
Р РїРѕС‡РµРјСѓ РїСЂРѕРІРѕРґР° РіСЂРµСЋС‚СЃСЏ? (IВІR = РјРѕС‰РЅРѕСЃС‚СЊ РїРѕС‚РµСЂСЊ)
РљС‚Рѕ РѕР±СЉСЏСЃРЅРёС‚?В»`,understandingBase:7,attentionDelta:13,difficulty:"medium",typeBonus:{genius:12,bully:7,helper:5,lazy:4,anxious:-4}}],tasks:{easy:{text:"U=12Р’, R=4РћРј. РќР°Р№РґРёС‚Рµ С‚РѕРє I.",hint:"I = U/R"},medium:{text:"Rв‚Ѓ=6РћРј Рё Rв‚‚=3РћРј СЃРѕРµРґРёРЅРµРЅС‹ РїР°СЂР°Р»Р»РµР»СЊРЅРѕ. РќР°Р№РґРёС‚Рµ РѕР±С‰РµРµ СЃРѕРїСЂРѕС‚РёРІР»РµРЅРёРµ."},hard:{text:"Р¦РµРїСЊ: U=24Р’, Rв‚Ѓ=2РћРј (РїРѕСЃР».) Рё Rв‚‚=6РћРј||Rв‚ѓ=3РћРј (РїР°СЂ.). РќР°Р№РґРёС‚Рµ I С‡РµСЂРµР· РєР°Р¶РґС‹Р№ СЂРµР·РёСЃС‚РѕСЂ."}},homework:{easy:"Р—Р°РїРёС€РёС‚Рµ С„РѕСЂРјСѓР»Сѓ Р·Р°РєРѕРЅР° РћРјР°. РџСЂРёРІРµРґРёС‚Рµ РґРІР° С‡РёСЃР»РѕРІС‹С… РїСЂРёРјРµСЂР°.",medium:"Р РµС€РёС‚Рµ Р·Р°РґР°С‡Сѓ: С‚СЂРё СЂРµР·РёСЃС‚РѕСЂР° (2, 3, 6 РћРј) вЂ” РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕ Рё РїР°СЂР°Р»Р»РµР»СЊРЅРѕ. РќР°Р№РґРёС‚Рµ R.",hard:"РџСЂРё РєР°РєРѕРј R СЌР»РµРєС‚СЂРѕРїР»РёС‚РєР° РїРѕС‚СЂРµР±Р»СЏРµС‚ 2 РєР’С‚ РїСЂРё РЅР°РїСЂСЏР¶РµРЅРёРё 220Р’?"}},{subject:"physics",gradeMin:9,gradeMax:10,topic:"РћСЃРЅРѕРІС‹ С‚РµСЂРјРѕРґРёРЅР°РјРёРєРё. РўРµРјРїРµСЂР°С‚СѓСЂР° Рё С‚РµРїР»Рѕ",options:[{label:"Рђ) РўРµРјРїРµСЂР°С‚СѓСЂР° Рё РІРЅСѓС‚СЂРµРЅРЅСЏСЏ СЌРЅРµСЂРіРёСЏ",text:`В«РўРµРјРїРµСЂР°С‚СѓСЂР° T (РљРµР»СЊРІРёРЅ) = СЃРєРѕСЂРѕСЃС‚СЊ РґРІРёР¶РµРЅРёСЏ РјРѕР»РµРєСѓР».
Р’РЅСѓС‚СЂРµРЅРЅСЏСЏ СЌРЅРµСЂРіРёСЏ U = РєРёРЅРµС‚РёС‡РµСЃРєР°СЏ + РїРѕС‚РµРЅС†РёР°Р»СЊРЅР°СЏ РјРѕР»РµРєСѓР».
Q = cВ·mВ·О”T вЂ” С‚РµРїР»РѕС‚Р°; c вЂ” СѓРґРµР»СЊРЅР°СЏ С‚РµРїР»РѕС‘РјРєРѕСЃС‚СЊ.
Q > 0 вЂ” С‚РµР»Рѕ РЅР°РіСЂРµРІР°РµС‚СЃСЏ, Q < 0 вЂ” РѕСЃС‚С‹РІР°РµС‚.В»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-7,bully:-5}},{label:"Р‘) РџСЂРёРјРµСЂ: РЅР°РіСЂРµРІ РІРѕРґС‹",text:`В«РќР°РіСЂРµРµРј 0.5 РєРі РІРѕРґС‹ РЅР° 20В°C. c_РІРѕРґС‹ = 4200 Р”Р¶/(РєРіВ·Рљ).
Q = 4200 Г— 0.5 Г— 20 = 42 000 Р”Р¶ = 42 РєР”Р¶.
Р§Р°Р№РЅРёРє 2 РєР’С‚: t = Q/P = 42000/2000 = 21 СЃРµРє.
РўРµРїРµСЂСЊ Р·РЅР°РµС‚Рµ, РїРѕС‡РµРјСѓ С‡Р°Р№РЅРёРє РіСЂРµРµС‚ 2-3 РјРёРЅСѓС‚С‹?В»`,understandingBase:11,attentionDelta:7,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3}},{label:"Р’) РџР°СЂРЅРёРєРѕРІС‹Р№ СЌС„С„РµРєС‚ вЂ” С‚РµСЂРјРѕРґРёРЅР°РјРёРєР°",text:`В«COв‚‚ Р·Р°РґРµСЂР¶РёРІР°РµС‚ РёРЅС„СЂР°РєСЂР°СЃРЅРѕРµ РёР·Р»СѓС‡РµРЅРёРµ.
РџР»Р°РЅРµС‚Р° РЅРµ РјРѕР¶РµС‚ РѕСЃС‚С‹С‚СЊ в†’ С‚РµРјРїРµСЂР°С‚СѓСЂР° СЂР°СЃС‚С‘С‚.
Р­С‚Рѕ РїРµСЂРІРѕРµ РЅР°С‡Р°Р»Рѕ С‚РµСЂРјРѕРґРёРЅР°РјРёРєРё О”U = Q в€’ A.
Р¤РёР·РёРєР° РѕР±СЉСЏСЃРЅСЏРµС‚ РєР»РёРјР°С‚РёС‡РµСЃРєРёР№ РєСЂРёР·РёСЃ!В»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:9,bully:6,average:5,helper:4}},{label:"Р“) Р—Р°РґР°С‡Р° РЅР° Р·Р°РјРѕСЂРѕР·РєСѓ",text:`В«РљС‚Рѕ РѕР±СЉСЏСЃРЅРёС‚: РїРѕС‡РµРјСѓ РІРѕРґР° РїСЂРё Р·Р°РјРµСЂР·Р°РЅРёРё Р РђРЎРЁРР РЇР•РўРЎРЇ?
BРѕР»СЊС€РёРЅСЃС‚РІРѕ РІРµС‰РµСЃС‚РІ СЃР¶РёРјР°СЋС‚СЃСЏ РїСЂРё РѕС…Р»Р°Р¶РґРµРЅРёРё.
Рђ РІРѕРґР° вЂ” РЅРµС‚. РџРѕСЌС‚РѕРјСѓ Р»С‘Рґ РїР»Р°РІР°РµС‚, С‚СЂСѓР±С‹ Р»РѕРїР°СЋС‚СЃСЏ.
РћР±СЃСѓРґРёРј: РєР°Рє СЌС‚Рѕ СЃРІСЏР·Р°РЅРѕ СЃ РґРІРёР¶РµРЅРёРµРј РјРѕР»РµРєСѓР»?В»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:13,bully:8,helper:5,lazy:5,anxious:-3}}],badOption:{label:"Р”) В«РўРµРїР»Рѕ вЂ” СЌС‚Рѕ РїСЂРѕСЃС‚Рѕ РіРѕСЂСЏС‡РѕВ»",text:"В«РўРµСЂРјРѕРґРёРЅР°РјРёРєР° СЃР»РёС€РєРѕРј СЃР»РѕР¶РЅР°СЏ. РџСЂРѕСЃС‚Рѕ Р·Р°РїРѕРјРЅРёС‚Рµ: РіРѕСЂСЏС‡РµРµ вЂ” РјРЅРѕРіРѕ С‚РµРїР»Р°, С…РѕР»РѕРґРЅРѕРµ вЂ” РјР°Р»Рѕ. Р¤РѕСЂРјСѓР»С‹ РёР·СѓС‡РёРј РїРѕС‚РѕРј, РµСЃР»Рё РІС‹Р№РґРµС‚.В»",understandingBase:-5,attentionDelta:4,difficulty:"easy",typeBonus:{bully:10,lazy:9,genius:-11,helper:-9,anxious:-7},isBad:!0},tasks:{easy:{text:"Р§РµРјСѓ СЂР°РІРЅР° Q РїСЂРё РЅР°РіСЂРµРІРµ 1 РєРі Р¶РµР»РµР·Р° (c=460) РЅР° 50В°C?",hint:"Q = cВ·mВ·О”T = 460В·1В·50 = 23000 Р”Р¶"},medium:{text:"РЎРјРµС€Р°Р»Рё 0.2 РєРі РІРѕРґС‹ РїСЂРё 80В°C Рё 0.3 РєРі РїСЂРё 20В°C. РќР°Р№РґРёС‚Рµ С‚РµРјРїРµСЂР°С‚СѓСЂСѓ СЃРјРµСЃРё (c РѕРґРёРЅР°РєРѕРІ)."},hard:{text:"РљРџР” РґРІРёРіР°С‚РµР»СЏ О· = 1 в€’ Tв‚‚/Tв‚Ѓ. Р•СЃР»Рё Tв‚Ѓ=600K, Tв‚‚=300K, РЅР°Р№РґРёС‚Рµ РљРџР” Рё РѕР±СЉСЏСЃРЅРёС‚Рµ РµРіРѕ СЃРјС‹СЃР»."}},homework:{easy:"Р Р°СЃСЃС‡РёС‚Р°Р№С‚Рµ, СЃРєРѕР»СЊРєРѕ С‚РµРїР»Р° РЅСѓР¶РЅРѕ РґР»СЏ РЅР°РіСЂРµРІР° 2 РєРі РІРѕРґС‹ РѕС‚ 20 РґРѕ 100В°C.",medium:"РћР±СЉСЏСЃРЅРёС‚Рµ: РїРѕС‡РµРјСѓ РјРµС‚Р°Р»Р»РёС‡РµСЃРєРёРµ РїСЂРµРґРјРµС‚С‹ РЅР° С…РѕР»РѕРґРµ РєР°Р¶СѓС‚СЃСЏ С…РѕР»РѕРґРЅРµРµ РґРµСЂРµРІСЏРЅРЅС‹С…?",hard:"Р’С‚РѕСЂРѕРµ РЅР°С‡Р°Р»Рѕ С‚РµСЂРјРѕРґРёРЅР°РјРёРєРё вЂ” С„РѕСЂРјСѓР»РёСЂРѕРІРєРё РљР»Р°СѓР·РёСѓСЃР° Рё РўРѕРјСЃРѕРЅР°. РџСЂРёРІРµРґРёС‚Рµ РїРѕ 2 РїСЂРёРјРµСЂР°."}}],ig=[{subject:"chemistry",gradeMin:8,gradeMax:9,topic:"РЎС‚СЂРѕРµРЅРёРµ Р°С‚РѕРјР°. Р­Р»РµРєС‚СЂРѕРЅРЅС‹Рµ РѕР±РѕР»РѕС‡РєРё",options:[{label:"Рђ) РўРµРѕСЂРёСЏ: СЏРґСЂРѕ Рё СЌР»РµРєС‚СЂРѕРЅС‹",text:`В«РђС‚РѕРј: СЏРґСЂРѕ (РїСЂРѕС‚РѕРЅС‹+РЅРµР№С‚СЂРѕРЅС‹) + СЌР»РµРєС‚СЂРѕРЅРЅС‹Рµ РѕР±РѕР»РѕС‡РєРё.
Р—Р°СЂСЏРґ СЏРґСЂР° = РїРѕСЂСЏРґРєРѕРІС‹Р№ РЅРѕРјРµСЂ СЌР»РµРјРµРЅС‚Р°.
РћР±РѕР»РѕС‡РєРё: 1-СЏ вЂ” max 2СЌ, 2-СЏ вЂ” max 8СЌ, 3-СЏ вЂ” max 18СЌ.
Р­Р»РµРјРµРЅС‚С‹ СЂР°Р·Р° РїРµСЂРёРѕРґР° = РЅРѕРјРµСЂ РїРѕСЃР»РµРґРЅРµР№ РѕР±РѕР»РѕС‡РєРё.В»`,understandingBase:13,attentionDelta:-4,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:2,lazy:-8,bully:-6}},{label:"Р‘) Р—Р°РїРёСЃСЊ РЅР° РґРѕСЃРєРµ: РєРёСЃР»РѕСЂРѕРґ",text:`В«O: Z=8, РјР°СЃСЃР°=16.
РЁР°Рі 1: 8 РїСЂРѕС‚РѕРЅРѕРІ, 8 РЅРµР№С‚СЂРѕРЅРѕРІ.
РЁР°Рі 2: Р—Р°РїРѕР»РЅСЏРµРј РѕР±РѕР»РѕС‡РєРё: 1sВІ2sВІ2pвЃґ
РЁР°Рі 3: РџРѕСЃР»РµРґРЅСЏСЏ РѕР±РѕР»РѕС‡РєР°: 6 СЌР»РµРєС‚СЂРѕРЅРѕРІ в†’ РІР°Р»РµРЅС‚РЅРѕСЃС‚СЊ II.
в†’ Hв‚‚O!В»`,understandingBase:10,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3}},{label:"Р’) РџРѕС‡РµРјСѓ Р±Р»Р°РіРѕСЂРѕРґРЅС‹Рµ РіР°Р·С‹ В«Р»РµРЅРёРІС‹РµВ»?",text:`В«Р“РµР»РёР№, РЅРµРѕРЅ, Р°СЂРіРѕРЅ РЅРµ РІСЃС‚СѓРїР°СЋС‚ РІ СЂРµР°РєС†РёРё.
РџРѕС‡РµРјСѓ? РС… РѕР±РѕР»РѕС‡РєРё РїРѕР»РЅРѕСЃС‚СЊСЋ Р·Р°РїРѕР»РЅРµРЅС‹: HeвЂ”2e, NeвЂ”8e.
Р’СЃРµ РѕСЃС‚Р°Р»СЊРЅС‹Рµ СЌР»РµРјРµРЅС‚С‹ "С…РѕС‚СЏС‚" РґРѕСЃС‚РёС‡СЊ СЌС‚РѕРіРѕ вЂ” РѕС‚РґР°СЋС‚ РёР»Рё РїСЂРёРЅРёРјР°СЋС‚ СЌР»РµРєС‚СЂРѕРЅС‹.В»`,understandingBase:8,attentionDelta:11,difficulty:"easy",typeBonus:{lazy:9,bully:6,average:5,helper:4}},{label:"Р“) Р—Р°РіР°РґРєР°: РєС‚Рѕ РµСЃС‚СЊ РєС‚Рѕ?",text:`В«Р­Р»РµРјРµРЅС‚ СЃ Z=11, 3 РѕР±РѕР»РѕС‡РєРё, 1 РІРЅРµС€РЅРёР№ СЌР»РµРєС‚СЂРѕРЅ.
РћРЅ Р°РєС‚РёРІРЅС‹Р№ РјРµС‚Р°Р»Р». Р РµР°РіРёСЂСѓРµС‚ СЃ РІРѕРґРѕР№. РќР°Р·РѕРІРёС‚Рµ РµРіРѕ!
РџРѕРґСЃРєР°Р·РєР°: РµСЃС‚СЊ РІ СЃРѕР»Рё NaCl. Р­С‚РѕвЂ¦В»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:12,bully:8,helper:5,lazy:5,anxious:-3}}],tasks:{easy:{text:"РЎРєРѕР»СЊРєРѕ РїСЂРѕС‚РѕРЅРѕРІ Сѓ Р¶РµР»РµР·Р° (Fe, Z=26)?",hint:"Р§РёСЃР»Рѕ РїСЂРѕС‚РѕРЅРѕРІ = РїРѕСЂСЏРґРєРѕРІС‹Р№ РЅРѕРјРµСЂ"},medium:{text:"Р—Р°РїРёС€РёС‚Рµ СЌР»РµРєС‚СЂРѕРЅРЅСѓСЋ РєРѕРЅС„РёРіСѓСЂР°С†РёСЋ РЅР°С‚СЂРёСЏ (Na, Z=11)."},hard:{text:"РћР±СЉСЏСЃРЅРёС‚Рµ, РїРѕС‡РµРјСѓ С…Р»РѕСЂ РІ СЃРѕРµРґРёРЅРµРЅРёСЏС… РїСЂРѕСЏРІР»СЏРµС‚ СЃС‚РµРїРµРЅРё РѕРєРёСЃР»РµРЅРёСЏ в€’1, +1, +5, +7."}},homework:{easy:"Р—Р°РїРёС€РёС‚Рµ СЃС‚СЂРѕРµРЅРёРµ Р°С‚РѕРјРѕРІ: H, He, Li, Be (РІ РІРёРґРµ СЃС…РµРјС‹).",medium:"Р—Р°РїРёС€РёС‚Рµ СЌР»РµРєС‚СЂРѕРЅРЅС‹Рµ РєРѕРЅС„РёРіСѓСЂР°С†РёРё: S, Ca, Al.",hard:"РћР±СЉСЏСЃРЅРёС‚Рµ, С‡РµРј РёР·РѕС‚РѕРїС‹ РѕС‚Р»РёС‡Р°СЋС‚СЃСЏ РѕС‚ РёР·РѕР±Р°СЂРѕРІ. РџСЂРёРјРµСЂС‹."}},{subject:"chemistry",gradeMin:8,gradeMax:9,topic:"РљРёСЃР»РѕС‚С‹ Рё РѕСЃРЅРѕРІР°РЅРёСЏ. РќРµР№С‚СЂР°Р»РёР·Р°С†РёСЏ",options:[{label:"Рђ) РћРїСЂРµРґРµР»РµРЅРёСЏ Рё РїСЂРёРјРµСЂС‹",text:`В«РљРёСЃР»РѕС‚С‹ вЂ” РІРµС‰РµСЃС‚РІР°, РІС‹РґРµР»СЏСЋС‰РёРµ HвЃє: HCl, Hв‚‚SOв‚„, HNOв‚ѓ.
РћСЃРЅРѕРІР°РЅРёСЏ вЂ” РІС‹РґРµР»СЏСЋС‚ OHвЃ»: NaOH, Ca(OH)в‚‚.
Р РµР°РєС†РёСЏ РЅРµР№С‚СЂР°Р»РёР·Р°С†РёРё: РєРёСЃР»РѕС‚Р° + РѕСЃРЅРѕРІР°РЅРёРµ в†’ СЃРѕР»СЊ + РІРѕРґР°.
РќР°РїСЂРёРјРµСЂ: HCl + NaOH = NaCl + Hв‚‚OВ»`,understandingBase:12,attentionDelta:-3,difficulty:"medium",typeBonus:{genius:7,helper:4,anxious:3,lazy:-5}},{label:"Р‘) Р”РµРјРѕРЅСЃС‚СЂР°С†РёСЏ pH вЂ” РєРёСЃР»РѕС‚Р°/С‰С‘Р»РѕС‡СЊ",text:`В«pH < 7 вЂ” РєРёСЃР»Р°СЏ СЃСЂРµРґР° (Р¶РµР»СѓРґРѕС‡РЅС‹Р№ СЃРѕРє = 2)
pH = 7 вЂ” РЅРµР№С‚СЂР°Р»СЊРЅРѕ (С‡РёСЃС‚Р°СЏ РІРѕРґР°)
pH > 7 вЂ” С‰РµР»РѕС‡РЅР°СЏ (СЃРѕРґР° = 9, РјС‹Р»Рѕ = 10)
РџРѕРєР°Р·С‹РІР°РµРј РёРЅРґРёРєР°С‚РѕСЂРѕРј: РєСЂР°СЃРЅС‹Р№ в†’ РєРёСЃР»РѕС‚Р°.В»`,understandingBase:9,attentionDelta:13,difficulty:"easy",typeBonus:{lazy:10,bully:8,average:6,helper:4}},{label:"Р’) РЈСЂР°РІРЅРµРЅРёРµ РЅРµР№С‚СЂР°Р»РёР·Р°С†РёРё",text:`В«Hв‚‚SOв‚„ + 2 NaOH = Naв‚‚SOв‚„ + 2 Hв‚‚O
РЁР°Рі 1: Р Р°СЃСЃС‚Р°РІРёРј РєРѕСЌС„С„РёС†РёРµРЅС‚С‹.
РЁР°Рі 2: РџСЂРѕРІРµСЂРёРј Р±Р°Р»Р°РЅСЃ: S=1, O=4+2в†’4+2 вњ”, H=2+2в†’2 вњ”
РќР° С‡С‚Рѕ РїРѕС…РѕР¶Рµ? РќР° СѓСЂР°РІРЅРµРЅРёРµ РІ РјР°С‚РµРјР°С‚РёРєРµ!В»`,understandingBase:10,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3,genius:-1}},{label:"Р“) Р§С‚Рѕ Р±СѓРґРµС‚, РµСЃР»Рё СЃРјРµС€Р°С‚СЊ?",text:`В«РЈРєСЃСѓСЃ (РєРёСЃР»РѕС‚Р°) + СЃРѕРґР° (С‰С‘Р»РѕС‡СЊ) = Р±СѓСЂР»РµРЅРёРµ.
РџРѕС‡РµРјСѓ? COв‚‚ РІС‹РґРµР»СЏРµС‚СЃСЏ: Hв‚‚COв‚ѓ в†’ Hв‚‚O + COв‚‚в†‘
Р­С‚Рѕ РЅРµР№С‚СЂР°Р»РёР·Р°С†РёСЏ РІ Р±С‹С‚Сѓ вЂ” Р±РµР·РѕРїР°СЃРЅР°СЏ СЂРµР°РєС†РёСЏ.
РљС‚Рѕ РѕР±СЉСЏСЃРЅРёС‚, РїРѕС‡РµРјСѓ С‚РµСЃС‚Рѕ РїРѕРґРЅРёРјР°РµС‚СЃСЏ?В»`,understandingBase:8,attentionDelta:15,difficulty:"easy",typeBonus:{lazy:10,bully:9,genius:8,helper:5,anxious:2}}],tasks:{easy:{text:"РќР°Р·РѕРІРёС‚Рµ РїСЂРѕРґСѓРєС‚С‹ СЂРµР°РєС†РёРё: HCl + NaOH = ?",hint:"NaCl + Hв‚‚O"},medium:{text:"Р Р°СЃСЃС‚Р°РІСЊС‚Рµ РєРѕСЌС„С„РёС†РёРµРЅС‚С‹: Hв‚ѓPOв‚„ + Ca(OH)в‚‚ в†’ Caв‚ѓ(POв‚„)в‚‚ + Hв‚‚O"},hard:{text:"Р’С‹С‡РёСЃР»РёС‚Рµ РјР°СЃСЃСѓ СЃРѕР»Рё, РѕР±СЂР°Р·СѓСЋС‰РµР№СЃСЏ РїСЂРё СЂРµР°РєС†РёРё 0.2 РјРѕР»СЊ Hв‚‚SOв‚„ СЃ РґРѕСЃС‚Р°С‚РѕС‡РЅС‹Рј РєРѕР»РёС‡РµСЃС‚РІРѕРј NaOH."}},homework:{easy:"РџСЂРёРІРµРґРёС‚Рµ РїРѕ 2 РїСЂРёРјРµСЂР° РєРёСЃР»РѕС‚ Рё РѕСЃРЅРѕРІР°РЅРёР№ РёР· РїРѕРІСЃРµРґРЅРµРІРЅРѕР№ Р¶РёР·РЅРё.",medium:"РЎРѕСЃС‚Р°РІСЊС‚Рµ СѓСЂР°РІРЅРµРЅРёСЏ РЅРµР№С‚СЂР°Р»РёР·Р°С†РёРё РґР»СЏ: HNOв‚ѓ+KOH, Hв‚‚SOв‚„+Ba(OH)в‚‚.",hard:"РћРїСЂРµРґРµР»РёС‚Рµ pH СЂР°СЃС‚РІРѕСЂР° 0.1 РјРѕР»СЊ/Р» HCl. РћР±СЉСЏСЃРЅРёС‚Рµ СЂР°СЃС‡С‘С‚."}},{subject:"chemistry",gradeMin:8,gradeMax:9,topic:"РњРµС‚Р°Р»Р»С‹ Рё РёС… С…РёРјРёС‡РµСЃРєРёРµ СЃРІРѕР№СЃС‚РІР°",options:[{label:"Рђ) Р СЏРґ Р°РєС‚РёРІРЅРѕСЃС‚Рё РјРµС‚Р°Р»Р»РѕРІ",text:`В«Li K Ca Na Mg Al Zn Fe Ni Sn Pb H Cu Ag Au
РњРµС‚Р°Р»Р»С‹ Р»РµРІРµРµ H вЂ” РІС‹С‚РµСЃРЅСЏСЋС‚ РІРѕРґРѕСЂРѕРґ РёР· РєРёСЃР»РѕС‚.
РђРєС‚РёРІРЅС‹Рµ РјРµС‚Р°Р»Р»С‹ (Na, K) СЂРµР°РіРёСЂСѓСЋС‚ СЃ РІРѕРґРѕР№.
Рђu, Ag вЂ” Р±Р»Р°РіРѕСЂРѕРґРЅС‹Рµ, РЅРµ РѕРєРёСЃР»СЏСЋС‚СЃСЏ.В»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-7,bully:-5}},{label:"Р‘) Р РµР°РєС†РёРё РјРµС‚Р°Р»Р»РѕРІ",text:`В«Fe + 2HCl = FeClв‚‚ + Hв‚‚в†‘ (Р¶РµР»РµР·Рѕ + РєРёСЃР»РѕС‚Р°)
2Na + 2Hв‚‚O = 2NaOH + Hв‚‚в†‘ (РЅР°С‚СЂРёР№ + РІРѕРґР°!)
2Al + 6Hв‚‚SOв‚„(СЂР°Р·Р±) = Alв‚‚(SOв‚„)в‚ѓ + 3Hв‚‚в†‘
Р—Р°РїРёС€РёС‚Рµ РІСЃРµ С‚СЂРё С‚РёРїР° СЂРµР°РєС†РёР№.В»`,understandingBase:10,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3}},{label:"Р’) РњРµС‚Р°Р»Р»С‹ РІРѕРєСЂСѓРі РЅР°СЃ",text:`В«РђР»СЋРјРёРЅРёР№ вЂ” Сѓ РІР°СЃ РІ РєР°СЂРјР°РЅРµ (СЃРјР°СЂС‚С„РѕРЅ).
Р–РµР»РµР·Рѕ+С…СЂРѕРј = РЅРµСЂР¶Р°РІРµР№РєР° (СЃС‚РѕР»РѕРІС‹Рµ РїСЂРёР±РѕСЂС‹).
Р—РѕР»РѕС‚Рѕ вЂ” РІ СЂР°Р·СЉС‘РјР°С… РџРљ (Р»СѓС‡С€РёР№ РїСЂРѕРІРѕРґРЅРёРє).
РњРµРґСЊ вЂ” РІ РїСЂРѕРІРѕРґР°С… РІР°С€РµР№ С€РєРѕР»С‹.В»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:10,bully:7,average:5,helper:4}},{label:"Р“) Р’РѕРїСЂРѕСЃ: СЂР¶Р°РІС‡РёРЅР° РёР»Рё РЅРµ СЂР¶Р°РІС‡РёРЅР°?",text:`В«РџРѕС‡РµРјСѓ РЅРµСЂР¶Р°РІРµР№РєР° РЅРµ СЂР¶Р°РІРµРµС‚? (Р’РѕРїСЂРѕСЃ РєР»Р°СЃСЃСѓ)
РҐСЂРѕРј РѕР±СЂР°Р·СѓРµС‚ Р·Р°С‰РёС‚РЅСѓСЋ РѕРєСЃРёРґРЅСѓСЋ РїР»С‘РЅРєСѓ.
Рђ Р°Р»СЋРјРёРЅРёР№ С‚РѕР¶Рµ РѕРєРёСЃР»СЏРµС‚СЃСЏ вЂ” РЅРѕ РїР»С‘РЅРєР° Alв‚‚Oв‚ѓ Р·Р°С‰РёС‰Р°РµС‚!
РћР±СЃСѓРґРёРј: РєР°Рє Р·Р°С‰РёС‚РёС‚СЊ Р¶РµР»РµР·РЅС‹Р№ РјРѕСЃС‚?В»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:12,bully:8,helper:5,lazy:5,anxious:-3}}],badOption:{label:"Р”) В«РњРµС‚Р°Р»Р»С‹ РІСЃРµ РѕРґРёРЅР°РєРѕРІС‹РµВ»",text:"В«Р’СЃС‘ С‡С‚Рѕ Р±Р»РµСЃС‚РёС‚ вЂ” РјРµС‚Р°Р»Р». РҐРёРјРёСЏ Сѓ РЅРёС… РїРѕС…РѕР¶Р°СЏ. Р—Р°РїРѕРјРЅРёС‚Рµ: РјРµС‚Р°Р»Р»С‹ РїСЂРѕРІРѕРґСЏС‚ С‚РѕРє. Р­С‚РѕРіРѕ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РґР»СЏ РћР“Р­.В»",understandingBase:-6,attentionDelta:3,difficulty:"easy",typeBonus:{bully:11,lazy:10,genius:-12,helper:-10,anxious:-7},isBad:!0},tasks:{easy:{text:"РќР°Р·РѕРІРёС‚Рµ С‚СЂРё Р°РєС‚РёРІРЅС‹С… РјРµС‚Р°Р»Р»Р° РёР· СЂСЏРґР° Р°РєС‚РёРІРЅРѕСЃС‚Рё.",hint:"Li, K, Ca, Na, Mg..."},medium:{text:"РЎРѕСЃС‚Р°РІСЊС‚Рµ СѓСЂР°РІРЅРµРЅРёРµ СЂРµР°РєС†РёРё С†РёРЅРєР° СЃ СЃРµСЂРЅРѕР№ РєРёСЃР»РѕС‚РѕР№."},hard:{text:"Р’С‹С‡РёСЃР»РёС‚Рµ РѕР±СЉС‘Рј Hв‚‚ (РЅ.Сѓ.), РІС‹РґРµР»СЏСЋС‰РµРіРѕСЃСЏ РїСЂРё СЂР°СЃС‚РІРѕСЂРµРЅРёРё 13 Рі Zn РІ HCl."}},homework:{easy:"Р’С‹СѓС‡РёС‚Рµ РїРµСЂРІС‹Рµ 7 РјРµС‚Р°Р»Р»РѕРІ РІ СЂСЏРґСѓ Р°РєС‚РёРІРЅРѕСЃС‚Рё.",medium:"РќР°РїРёС€РёС‚Рµ СѓСЂР°РІРЅРµРЅРёСЏ СЂРµР°РєС†РёР№: Ca+Hв‚‚O, Fe+HCl, Cu+HNOв‚ѓ(РєРѕРЅС†).",hard:"Р—Р°РґР°С‡Р°: СЃРјРµС€Р°Р»Рё 5.6 Рі Fe Рё 3.2 Рі Cu СЃ HCl. РЎРєРѕР»СЊРєРѕ Hв‚‚ РІС‹РґРµР»РёС‚СЃСЏ?"}}],sg=[{subject:"history",gradeMin:9,gradeMax:9,topic:"РџРµСЂРІР°СЏ РјРёСЂРѕРІР°СЏ РІРѕР№РЅР°. РџСЂРёС‡РёРЅС‹ Рё РЅР°С‡Р°Р»Рѕ",options:[{label:"Рђ) РҐСЂРѕРЅРѕР»РѕРіРёСЏ Рё РїСЂРёС‡РёРЅС‹",text:`В«1914вЂ”1918. Р§РµС‚С‹СЂРµ РіР»Р°РІРЅС‹Рµ РїСЂРёС‡РёРЅС‹:
1. РРјРїРµСЂРёР°Р»РёР·Рј вЂ” Р±РѕСЂСЊР±Р° Р·Р° РєРѕР»РѕРЅРёРё
2. РЎРѕСЋР·С‹ вЂ” РђРЅС‚Р°РЅС‚Р° vs РўСЂРѕР№СЃС‚РІРµРЅРЅС‹Р№ СЃРѕСЋР·
3. РќР°С†РёРѕРЅР°Р»РёР·Рј
4. Р“РѕРЅРєР° РІРѕРѕСЂСѓР¶РµРЅРёР№
РџРѕРІРѕРґ: СѓР±РёР№СЃС‚РІРѕ Р¤СЂР°РЅС†Р° Р¤РµСЂРґРёРЅР°РЅРґР° 28.06.1914.В»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-5}},{label:"Р‘) РљР°СЂС‚Р°: Р±Р»РѕРєРё СЃС‚СЂР°РЅ",text:`В«РќР° РґРѕСЃРєРµ СЂРёСЃСѓРµРј РєР°СЂС‚Сѓ Р•РІСЂРѕРїС‹ 1914 Рі.
РђРЅС‚Р°РЅС‚Р°: Р РѕСЃСЃРёСЏ + Р¤СЂР°РЅС†РёСЏ + Р’РµР»РёРєРѕР±СЂРёС‚Р°РЅРёСЏ (СЃРёРЅРёРµ).
РўСЂРѕР№СЃС‚РІРµРЅРЅС‹Р№ СЃРѕСЋР·: Р“РµСЂРјР°РЅРёСЏ + РђРІСЃС‚СЂРёСЏ + РС‚Р°Р»РёСЏ (РєСЂР°СЃРЅС‹Рµ).
РЈР·РєРёР№ РєРѕСЂРёРґРѕСЂ Р‘Р°Р»РєР°РЅ вЂ” Р·Р°РїР°Р» РІРѕР№РЅС‹.В»`,understandingBase:10,attentionDelta:7,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3,genius:-1}},{label:"Р’) Р’С‹СЃС‚СЂРµР» РІ РЎР°СЂР°РµРІРѕ вЂ” РґРµС‚Р°Р»Рё",text:`В«РџСЂРёРЅС† СѓР±РёС‚ 28 РёСЋРЅСЏ 1914 Рі. РІ РЎР°СЂР°РµРІРѕ.
Р“Р°РІСЂРёР»Рѕ РџСЂРёРЅС†РёРї вЂ” 19-Р»РµС‚РЅРёР№ СЃРµСЂР±-РЅР°С†РёРѕРЅР°Р»РёСЃС‚.
РђРІСЃС‚СЂРёСЏ РїСЂРµРґСЉСЏРІРёР»Р° СѓР»СЊС‚РёРјР°С‚СѓРј РЎРµСЂР±РёРё.
РЎРµСЂР±РёСЏ РѕС‚РєР°Р·Р°Р»Р° РѕРґРёРЅ РїСѓРЅРєС‚ вЂ” РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РґР»СЏ РІРѕР№РЅС‹.
РўР°Рє РѕРґРЅР° РїСѓР»СЏ РёР·РјРµРЅРёР»Р° РјРёСЂ.В»`,understandingBase:9,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:8,bully:7,average:5,genius:4}},{label:"Р“) Р”РёСЃРєСѓСЃСЃРёСЏ: РјРѕР¶РЅРѕ Р»Рё Р±С‹Р»Рѕ РёР·Р±РµР¶Р°С‚СЊ?",text:`В«Р•СЃР»Рё Р±С‹ РђРІСЃС‚СЂРёСЏ РЅРµ РѕР±СЉСЏРІРёР»Р° РІРѕР№РЅСѓ, РјРёСЂРѕРІРѕР№ РІРѕР№РЅС‹ РЅРµ Р±С‹Р»Рѕ Р±С‹?
Рђ РµСЃР»Рё Р±С‹ СѓР±РёР№СЃС‚РІР° РЅРµ РїСЂРѕРёР·РѕС€Р»Рѕ вЂ” РЅР°С€С‘Р»СЃСЏ Р±С‹ РґСЂСѓРіРѕР№ РїРѕРІРѕРґ?
Р’С‹СЃРєР°Р·С‹РІР°Р№С‚РµСЃСЊ. РљР°РєРѕР№ С„Р°РєС‚РѕСЂ РіР»Р°РІРЅС‹Р№?В»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:13,bully:8,helper:6,lazy:5,anxious:-3}}],tasks:{easy:{text:"РќР°Р·РѕРІРёС‚Рµ РіРѕРґС‹ РџРµСЂРІРѕР№ РјРёСЂРѕРІРѕР№ РІРѕР№РЅС‹ Рё РґРІР° РµС‘ СѓС‡Р°СЃС‚РЅРёРєР°.",hint:"1914вЂ”1918"},medium:{text:"РџРµСЂРµС‡РёСЃР»РёС‚Рµ С‡РµС‚С‹СЂРµ РїСЂРёС‡РёРЅС‹ РџРµСЂРІРѕР№ РјРёСЂРѕРІРѕР№ РІРѕР№РЅС‹. РћР±СЉСЏСЃРЅРёС‚Рµ РєР°Р¶РґСѓСЋ РѕРґРЅРёРј РїСЂРµРґР»РѕР¶РµРЅРёРµРј."},hard:{text:"РЎСЂР°РІРЅРёС‚Рµ Р±Р»РѕРє РђРЅС‚Р°РЅС‚С‹ Рё РўСЂРѕР№СЃС‚РІРµРЅРЅС‹Р№ СЃРѕСЋР·: СЃРѕСЃС‚Р°РІ, С†РµР»Рё, СЃРёР»СЊРЅС‹Рµ Рё СЃР»Р°Р±С‹Рµ СЃС‚РѕСЂРѕРЅС‹."}},homework:{easy:"Р’С‹СѓС‡РёС‚Рµ СЃРѕСЃС‚Р°РІ РђРЅС‚Р°РЅС‚С‹ Рё РўСЂРѕР№СЃС‚РІРµРЅРЅРѕРіРѕ Р±Р»РѕРєР°.",medium:"РЎРѕСЃС‚Р°РІСЊС‚Рµ С…СЂРѕРЅРѕР»РѕРіРёС‡РµСЃРєСѓСЋ С‚Р°Р±Р»РёС†Сѓ: РєР»СЋС‡РµРІС‹Рµ РґР°С‚С‹ РёСЋР»СЏ-Р°РІРіСѓСЃС‚Р° 1914 Рі.",hard:"Р­СЃСЃРµ (10 РїСЂРµРґР»РѕР¶РµРЅРёР№): В«Р‘С‹Р» Р»Рё РЅРµРёР·Р±РµР¶РµРЅ РїРµСЂРµС…РѕРґ Рє РјРёСЂРѕРІРѕР№ РІРѕР№РЅРµ?В»"}},{subject:"history",gradeMin:8,gradeMax:8,topic:"Р РµС„РѕСЂРјС‹ РџРµС‚СЂР° I. РњРѕРґРµСЂРЅРёР·Р°С†РёСЏ Р РѕСЃСЃРёРё",options:[{label:"Рђ) РљР»СЋС‡РµРІС‹Рµ СЂРµС„РѕСЂРјС‹ СЃРїРёСЃРєРѕРј",text:`В«РџС‘С‚СЂ I (1682вЂ”1725):
вЂў РђСЂРјРёСЏ: СЂРµРєСЂСѓС‚СЃРєРёРµ РЅР°Р±РѕСЂС‹, СЂРµРіСѓР»СЏСЂРЅР°СЏ Р°СЂРјРёСЏ
вЂў Р¤Р»РѕС‚: РѕСЃРЅРѕРІР°РЅ РІ 1696
вЂў РћР±СЂР°Р·РѕРІР°РЅРёРµ: С€РєРѕР»С‹, РђРєР°РґРµРјРёСЏ РЅР°СѓРє (1724)
вЂў РљР°Р»РµРЅРґР°СЂСЊ: РїСЂРёРЅСЏС‚ РµРІСЂРѕРїРµР№СЃРєРёР№
вЂў РЎС‚РѕР»РёС†Р°: РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі (1703)В»`,understandingBase:12,attentionDelta:-4,difficulty:"hard",typeBonus:{genius:9,helper:5,anxious:3,lazy:-7,bully:-5}},{label:"Р‘) РџС‘С‚СЂ РІ Р•РІСЂРѕРїРµ вЂ” В«Р’РµР»РёРєРѕРµ РїРѕСЃРѕР»СЊСЃС‚РІРѕВ»",text:`В«1697вЂ”1698: РџС‘С‚СЂ РµРґРµС‚ РІ Р•РІСЂРѕРїСѓ РёРЅРєРѕРіРЅРёС‚Рѕ РїРѕРґ РёРјРµРЅРµРј "РџС‘С‚СЂ РњРёС…Р°Р№Р»РѕРІ".
Р Р°Р±РѕС‚Р°РµС‚ РїР»РѕС‚РЅРёРєРѕРј РЅР° РІРµСЂС„Рё РІ Р“РѕР»Р»Р°РЅРґРёРё.
РЈС‡РёС‚СЃСЏ СЃС‚СЂРѕРёС‚СЊ РєРѕСЂР°Р±Р»Рё, РЅР°Р±РёСЂР°РµС‚ РјР°СЃС‚РµСЂРѕРІ.
Р’РµСЂРЅСѓР»СЃСЏ вЂ” СЃСЂР°Р·Сѓ РЅР°С‡Р°Р» Р±СЂРёС‚СЊ Р±РѕСЂРѕРґС‹ Р±РѕСЏСЂР°Рј!В»`,understandingBase:9,attentionDelta:13,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:4}},{label:"Р’) РўР°Р±Р»РёС†Р° СЂРµС„РѕСЂРј РЅР° РґРѕСЃРєРµ",text:`В«Р”Рѕ РџРµС‚СЂР° в†’ РџРѕСЃР»Рµ РџРµС‚СЂР°:
РђСЂРјРёСЏ: СЃС‚СЂРµР»СЊС†С‹ в†’ СЂРµРіСѓР»СЏСЂРЅР°СЏ Р°СЂРјРёСЏ
Р¤Р»РѕС‚: РЅРµС‚ в†’ 800 РєРѕСЂР°Р±Р»РµР№
РћРґРµР¶РґР°: РєР°С„С‚Р°РЅС‹ в†’ РµРІСЂРѕРїРµР№СЃРєРѕРµ РїР»Р°С‚СЊРµ
РљР°Р»РµРЅРґР°СЂСЊ: РѕС‚ СЃРѕС‚РІРѕСЂРµРЅРёСЏ РјРёСЂР° в†’ РѕС‚ Р РѕР¶РґРµСЃС‚РІР° РҐСЂРёСЃС‚РѕРІР°В»`,understandingBase:10,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:4}},{label:"Р“) Р”РёСЃРєСѓСЃСЃРёСЏ: РіРµСЂРѕР№ РёР»Рё С‚РёСЂР°РЅ?",text:`В«РџС‘С‚СЂ РїСЂРѕСЂСѓР±РёР» "РѕРєРЅРѕ РІ Р•РІСЂРѕРїСѓ" вЂ” РёР»Рё РѕС‚СЂСѓР±РёР» РіРѕР»РѕРІСѓ СЂСѓСЃСЃРєРѕР№ РєСѓР»СЊС‚СѓСЂРµ?
РњРЅРµРЅРёРµ 1: Р РѕСЃСЃРёСЏ СЃС‚Р°Р»Р° РІРµР»РёРєРѕР№ РґРµСЂР¶Р°РІРѕР№.
РњРЅРµРЅРёРµ 2: Р РµС„РѕСЂРјС‹ С€Р»Рё С‡РµСЂРµР· РЅР°СЃРёР»РёРµ Рё РєСЂРµРїРѕСЃС‚РЅРёС‡РµСЃС‚РІРѕ.
Р’Р°С€Р° РїРѕР·РёС†РёСЏ?В»`,understandingBase:7,attentionDelta:15,difficulty:"medium",typeBonus:{genius:13,bully:9,helper:6,lazy:5,anxious:-3}}],tasks:{easy:{text:"РџСЂРёРІРµРґРёС‚Рµ С‚СЂРё СЂРµС„РѕСЂРјС‹ РџРµС‚СЂР° I.",hint:"РђСЂРјРёСЏ, С„Р»РѕС‚, РѕР±СЂР°Р·РѕРІР°РЅРёРµ"},medium:{text:"Р—Р°РїРѕР»РЅРёС‚Рµ С‚Р°Р±Р»РёС†Сѓ В«Р”Рѕ Рё РїРѕСЃР»Рµ РџРµС‚СЂР°В» РїРѕ 4 РЅР°РїСЂР°РІР»РµРЅРёСЏРј."},hard:{text:"РћС†РµРЅРёС‚Рµ СЂРµС„РѕСЂРјС‹ РџРµС‚СЂР°: РєР°РєРёРµ РґР°Р»Рё РґРѕР»РіРѕСЃСЂРѕС‡РЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚, Р° РєР°РєРёРµ Р±С‹Р»Рё РІС‹РЅСѓР¶РґРµРЅРЅС‹РјРё?"}},homework:{easy:"Р—Р°РїРѕРјРЅРёС‚Рµ 5 РґР°С‚ РїСЂР°РІР»РµРЅРёСЏ Рё СЂРµС„РѕСЂРј РџРµС‚СЂР° I.",medium:"РЎРѕСЃС‚Р°РІСЊС‚Рµ СЂР°СЃСЃРєР°Р· Рѕ В«Р’РµР»РёРєРѕРј РїРѕСЃРѕР»СЊСЃС‚РІРµВ» (6вЂ“8 РїСЂРµРґР»РѕР¶РµРЅРёР№).",hard:"РЎСЂР°РІРЅРёС‚Рµ СЂРµС„РѕСЂРјС‹ РџРµС‚СЂР° I Рё СЂРµС„РѕСЂРјС‹ РђР»РµРєСЃР°РЅРґСЂР° II РїРѕ РїР»Р°РЅСѓ: С†РµР»Рё, РјРµС‚РѕРґС‹, РёС‚РѕРіРё."}},{subject:"history",gradeMin:9,gradeMax:11,topic:"Р’РµР»РёРєР°СЏ РћС‚РµС‡РµСЃС‚РІРµРЅРЅР°СЏ РІРѕР№РЅР°. РљР»СЋС‡РµРІС‹Рµ СЃРѕР±С‹С‚РёСЏ",options:[{label:"Рђ) РҐСЂРѕРЅРѕР»РѕРіРёСЏ Рё СЌС‚Р°РїС‹",text:`В«Р’РћР’ 1941вЂ“1945.
Р­С‚Р°Рї 1 (1941вЂ“42): РѕС‚СЃС‚СѓРїР»РµРЅРёРµ, Р›РµРЅРёРЅРіСЂР°Рґ, РњРѕСЃРєРІР°.
Р­С‚Р°Рї 2 (1942вЂ“43): РїРµСЂРµР»РѕРј вЂ” РЎС‚Р°Р»РёРЅРіСЂР°Рґ, РљСѓСЂСЃРє.
Р­С‚Р°Рї 3 (1944вЂ“45): РЅР°СЃС‚СѓРїР»РµРЅРёРµ, РѕСЃРІРѕР±РѕР¶РґРµРЅРёРµ, Р‘РµСЂР»РёРЅ.
9 РјР°СЏ 1945 вЂ” Р”РµРЅСЊ РџРѕР±РµРґС‹.В»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-4}},{label:"Р‘) РЎС‚Р°Р»РёРЅРіСЂР°РґСЃРєР°СЏ Р±РёС‚РІР° вЂ” РїРµСЂРµР»РѕРј",text:`В«РЎС‚Р°Р»РёРЅРіСЂР°Рґ (Р°РІРі.1942 вЂ“ С„РµРІСЂ.1943): 200 РґРЅРµР№ Р±РѕС‘РІ.
РљРѕС‚С‘Р»: РѕРєСЂСѓР¶РµРЅР° Р°СЂРјРёСЏ РџР°СѓР»СЋСЃР° (330 С‚С‹СЃ. С‡РµР».).
РС‚РѕРі: РїРµСЂРІР°СЏ РєСЂСѓРїРЅР°СЏ РїРѕР±РµРґР° РЎРЎРЎР  в†’ РєРѕСЂРµРЅРЅРѕР№ РїРµСЂРµР»РѕРј.
РџРѕСЃР»Рµ 1943 вЂ” РёРЅРёС†РёР°С‚РёРІР° РїРµСЂРµС€Р»Р° Рє РЎРЎРЎР  РЅР°РІСЃРµРіРґР°.В»`,understandingBase:11,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:7,average:6,helper:3}},{label:"Р’) Р›РёС‡РЅС‹Рµ РёСЃС‚РѕСЂРёРё Р±РѕР№С†РѕРІ",text:`В«РЎРµСЂР¶Р°РЅС‚ РЇРєРѕРІ РџР°РІР»РѕРІ Р·Р°С‰РёС‰Р°Р» РѕРґРёРЅ РґРѕРј РІ РЎС‚Р°Р»РёРЅРіСЂР°РґРµ 58 РґРЅРµР№.
"Р”РѕРј РџР°РІР»РѕРІР°" СЃС‚Р°Р» СЃРёРјРІРѕР»РѕРј СЃС‚РѕР№РєРѕСЃС‚Рё.
Р’ СЃСЂРµРґРЅРµРј СЃРѕРІРµС‚СЃРєРёР№ СЃРѕР»РґР°С‚ РµР¶РµРґРЅРµРІРЅРѕ РѕС‚РІРѕС‘РІС‹РІР°Р» 400РјВІ.
Р¦РµРЅР° РџРѕР±РµРґС‹ вЂ” 27 РјРёР»Р»РёРѕРЅРѕРІ Р¶РёР·РЅРµР№.В»`,understandingBase:8,attentionDelta:14,difficulty:"easy",typeBonus:{lazy:9,bully:8,average:6,helper:4}},{label:"Р“) Р§С‚Рѕ Р±С‹Р»Рѕ Р±С‹, РµСЃР»Рё Р±С‹...",text:`В«Р’РѕРїСЂРѕСЃ РєР»Р°СЃСЃСѓ: РјРѕРіР»Р° Р»Рё Р“РµСЂРјР°РЅРёСЏ РїРѕР±РµРґРёС‚СЊ?
РЎРїРѕСЂРЅС‹Рµ С„Р°РєС‚РѕСЂС‹: РєР»РёРјР°С‚, Р»РµРЅРґ-Р»РёР·, РїР°СЂС‚РёР·Р°РЅС‹, СЂРµСЃСѓСЂСЃС‹.
Р§С‚Рѕ СЃС‚Р°Р»Рѕ РіР»Р°РІРЅРѕР№ РѕС€РёР±РєРѕР№ Р“РёС‚Р»РµСЂР°?
РћР±СЃСѓРґРёРј вЂ” СЌС‚Рѕ РїРѕРјРѕР¶РµС‚ РїРѕРЅСЏС‚СЊ Р·РЅР°С‡РµРЅРёРµ РїРѕР±РµРґС‹.В»`,understandingBase:7,attentionDelta:15,difficulty:"medium",typeBonus:{genius:13,bully:9,helper:6,lazy:6,anxious:-4}}],badOption:{label:"Р”) В«Р­С‚Рѕ РІСЃС‘ РґР°РІРЅРѕ РёР·РІРµСЃС‚РЅРѕВ»",text:"В«Р’РћР’ вЂ” С‚РµРјР° РёР·Р±РёС‚Р°СЏ. Р’С‹ РІСЃС‘ СЌС‚Рѕ СѓР¶Рµ РІРёРґРµР»Рё РІ РєРёРЅРѕ. РџСЂРѕСЃС‚Рѕ РїРµСЂРµСЃРјРѕС‚СЂРёС‚Рµ СЃРµСЂРёР°Р», СЌС‚Рѕ Р»СѓС‡С€Рµ Р»СЋР±РѕРіРѕ СѓСЂРѕРєР°. Р—Р°С‡РµРј СѓС‡РёС‚СЊ РґР°С‚С‹?В»",understandingBase:-4,attentionDelta:8,difficulty:"easy",typeBonus:{bully:10,lazy:11,genius:-9,helper:-8,anxious:-5},isBad:!0},tasks:{easy:{text:"РќР°Р·РѕРІРёС‚Рµ С‚СЂРё РєР»СЋС‡РµРІС‹С… СЃСЂР°Р¶РµРЅРёСЏ Р’РћР’ СЃ РґР°С‚Р°РјРё.",hint:"РњРѕСЃРєРІР° (1941), РЎС‚Р°Р»РёРЅРіСЂР°Рґ (1942вЂ“43), РљСѓСЂСЃРє (1943)"},medium:{text:'РћР±СЉСЏСЃРЅРёС‚Рµ СЃСѓС‚СЊ "РєРѕСЂРµРЅРЅРѕРіРѕ РїРµСЂРµР»РѕРјР°" РІ Р’РћР’. РљРѕРіРґР° Рё РїРѕС‡РµРјСѓ РѕРЅ РїСЂРѕРёР·РѕС€С‘Р»?'},hard:{text:"РЎСЂР°РІРЅРёС‚Рµ РџРµСЂРІСѓСЋ Рё Р’С‚РѕСЂСѓСЋ РјРёСЂРѕРІСѓСЋ РІРѕР№РЅС‹: РїСЂРёС‡РёРЅС‹, РјР°СЃС€С‚Р°Р±, РёС‚РѕРіРё (РїР»Р°РЅ РёР· 5 РїСѓРЅРєС‚РѕРІ)."}},homework:{easy:"Р—Р°РїРѕРјРЅРёС‚Рµ РєР»СЋС‡РµРІС‹Рµ РґР°С‚С‹ Р’РћР’: РЅР°С‡Р°Р»Рѕ, РЎС‚Р°Р»РёРЅРіСЂР°Рґ, РљСѓСЂСЃРє, РєРѕРЅРµС†.",medium:"РќР°РїРёС€РёС‚Рµ РѕР± РѕРґРЅРѕРј РіРµСЂРѕРµ Р’РћР’ (5вЂ“7 РїСЂРµРґР»РѕР¶РµРЅРёР№): РєС‚Рѕ РѕРЅ, С‡С‚Рѕ СЃРѕРІРµСЂС€РёР».",hard:'Р­СЃСЃРµ: "Р—РЅР°С‡РµРЅРёРµ РџРѕР±РµРґС‹ РІ Р’РћР’ РґР»СЏ СЃРѕРІСЂРµРјРµРЅРЅРѕР№ Р РѕСЃСЃРёРё" (200 СЃР»РѕРІ).'}}],rg=[{subject:"literature",gradeMin:10,gradeMax:10,topic:"РћР±СЂР°Р· Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР° РІ В«РџСЂРµСЃС‚СѓРїР»РµРЅРёРё Рё РЅР°РєР°Р·Р°РЅРёРёВ»",options:[{label:"Рђ) РўРµРѕСЂРёСЏ В«РґРІРѕР№РЅРёРєР°В» Рё В«СЂР°Р·СЂС‹РІВ»",text:`В«Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІ РґРµР»РёС‚ Р»СЋРґРµР№ РЅР° РґРІР° С‚РёРїР°:
вЂ” В«РўРІР°СЂРё РґСЂРѕР¶Р°С‰РёРµВ» вЂ” Р¶РёРІСѓС‚ РїРѕ Р·Р°РєРѕРЅР°Рј
вЂ” В«Р’Р»Р°СЃС‚РµР»РёРЅС‹В» вЂ” РјРѕРіСѓС‚ РїСЂРµСЃС‚СѓРїРёС‚СЊ Р·Р°РєРѕРЅ
РћРЅ РїСЂРѕРІРµСЂСЏРµС‚: Рє РєР°РєРѕРјСѓ С‚РёРїСѓ РѕС‚РЅРѕСЃРёС‚СЃСЏ СЃР°Рј?
РќР°РєР°Р·Р°РЅРёРµ вЂ” РЅРµ С‚СЋСЂСЊРјР°, Р° СѓРіСЂС‹Р·РµРЅРёСЏ СЃРѕРІРµСЃС‚Рё.В»`,understandingBase:13,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:2,lazy:-6,bully:-5}},{label:"Р‘) РђРЅР°Р»РѕРіРёСЏ: С‚РµРѕСЂРёСЏ Рё Р¶РёР·РЅСЊ",text:`В«РўРµРѕСЂРёСЏ РЅР° Р±СѓРјР°РіРµ Р·РІСѓС‡Р°Р»Р° Р»РѕРіРёС‡РЅРѕ.
РќРѕ СѓР±РёРІ СЃС‚Р°СЂСѓС…Сѓ, Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІ СѓР±РёРІР°РµС‚ Рё Р±РµСЂРµРјРµРЅРЅСѓСЋ Р›РёР·Р°РІРµС‚Сѓ.
Р­С‚Рѕ РЅРµ Р±С‹Р»Рѕ РІ РїР»Р°РЅРµ. Р’РѕС‚ РіРґРµ С‚РµРѕСЂРёСЏ СЂСѓС…РЅСѓР»Р°.
РџРѕС‡РµРјСѓ В«С…РѕСЂРѕС€РёРµВ» РёРґРµРё РјРѕРіСѓС‚ РїСЂРёРІРµСЃС‚Рё Рє Р·Р»Сѓ?В»`,understandingBase:9,attentionDelta:13,difficulty:"medium",typeBonus:{genius:8,bully:6,lazy:5,helper:4,anxious:3}},{label:"Р’) Р¦РёС‚Р°С‚С‹ Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР°",text:`В«"РЇ РЅРµ СЃС‚Р°СЂСѓС€РѕРЅРєСѓ СѓР±РёР» вЂ” СЏ СЃРµР±СЏ СѓР±РёР»."
"РўРІР°СЂСЊ Р»Рё СЏ РґСЂРѕР¶Р°С‰Р°СЏ РёР»Рё РїСЂР°РІРѕ РёРјРµСЋ?"

Р§С‚Рѕ Р·РЅР°С‡РёС‚ В«СѓР±РёС‚СЊ СЃРµР±СЏВ»?
Р“РµСЂРѕР№ СЂР°Р·СЂСѓС€РёР» СЃРѕР±СЃС‚РІРµРЅРЅСѓСЋ Р»РёС‡РЅРѕСЃС‚СЊ, РїРµСЂРµСЃС‚СѓРїРёРІ С‡РµСЂС‚Сѓ.В»`,understandingBase:10,attentionDelta:9,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:5,genius:4}},{label:"Р“) Р’РѕРїСЂРѕСЃ РєР»Р°СЃСЃСѓ: Р° РІС‹ Р±С‹ СЃРјРѕРіР»Рё?",text:`В«Р•СЃР»Рё Р±С‹ СѓР±РёР№СЃС‚РІРѕ РїР»РѕС…РѕРіРѕ С‡РµР»РѕРІРµРєР° СЃРїР°СЃР»Рѕ 100 РЅРµРІРёРЅРЅС‹С… вЂ” СЌС‚Рѕ РїСЂРµСЃС‚СѓРїР»РµРЅРёРµ?
Р”РѕСЃС‚РѕРµРІСЃРєРёР№ РѕС‚РІРµС‡Р°РµС‚: РґР°. РџРѕС‚РѕРјСѓ С‡С‚Рѕ...
Р’С‹СЃРєР°Р·С‹РІР°Р№С‚РµСЃСЊ вЂ” РјС‹ РёС‰РµРј РѕС‚РІРµС‚ Р”РѕСЃС‚РѕРµРІСЃРєРѕРіРѕ РІРјРµСЃС‚Рµ.В»`,understandingBase:7,attentionDelta:16,difficulty:"easy",typeBonus:{bully:10,genius:12,lazy:7,helper:6,anxious:-2}}],tasks:{easy:{text:"РљР°Рє Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІ РґРµР»РёС‚ Р»СЋРґРµР№? РљС‚Рѕ С‚Р°РєРёРµ В«С‚РІР°СЂРё РґСЂРѕР¶Р°С‰РёРµВ»?",hint:'РР· РµРіРѕ С‚РµРѕСЂРёРё РѕР± "РѕР±С‹РєРЅРѕРІРµРЅРЅС‹С…" Рё "РЅРµРѕР±С‹РєРЅРѕРІРµРЅРЅС‹С…"'},medium:{text:"РћРїРёС€РёС‚Рµ РїСЃРёС…РѕР»РѕРіРёС‡РµСЃРєРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР° РїРѕСЃР»Рµ СѓР±РёР№СЃС‚РІР° Рё РѕР±СЉСЏСЃРЅРёС‚Рµ РїРѕС‡РµРјСѓ РѕРЅРѕ РёР·РјРµРЅРёР»РѕСЃСЊ."},hard:{text:"РќР°РїРёС€РёС‚Рµ РјРёРЅРё-СЌСЃСЃРµ: В«Р§С‚Рѕ СЃРёРјРІРѕР»РёР·РёСЂСѓРµС‚ РїСЂРёР·РЅР°РЅРёРµ Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР° РЎРѕРЅРµ?В» (5вЂ“7 РїСЂРµРґР»РѕР¶РµРЅРёР№)"}},homework:{easy:"Р’С‹РїРёС€РёС‚Рµ 3 С†РёС‚Р°С‚С‹ Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР° Рё РѕР±СЉСЏСЃРЅРёС‚Рµ РєР°Р¶РґСѓСЋ РѕРґРЅРёРј РїСЂРµРґР»РѕР¶РµРЅРёРµРј.",medium:"РЎСЂР°РІРЅРёС‚Рµ Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР° Рё РЎРѕРЅСЋ: РёС… Р¶РёР·РЅРµРЅРЅС‹Рµ РїРѕР·РёС†РёРё (С‚Р°Р±Р»РёС†Р°).",hard:"Р­СЃСЃРµ В«РњРѕРіР»Р° Р»Рё С‚РµРѕСЂРёСЏ Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР° Р±С‹С‚СЊ РїСЂР°РІРґРѕР№?В» (10+ РїСЂРµРґР»РѕР¶РµРЅРёР№)."}},{subject:"literature",gradeMin:9,gradeMax:9,topic:"В«РњС‘СЂС‚РІС‹Рµ РґСѓС€РёВ» Р“РѕРіРѕР»СЏ. РћР±СЂР°Р·С‹ Рё СЃРјС‹СЃР»",options:[{label:"Рђ) РЎСЋР¶РµС‚ Рё Р·Р°РјС‹СЃРµР»",text:`В«Р§РёС‡РёРєРѕРІ СЃРєСѓРїР°РµС‚ В«РјС‘СЂС‚РІС‹Рµ РґСѓС€РёВ» вЂ” СѓРјРµСЂС€РёС… РєСЂРµСЃС‚СЊСЏРЅ РїРѕ СЂРµРІРёР·СЃРєРёРј СЃРєР°Р·РєР°Рј.
Р¦РµР»СЊ: Р·Р°Р»РѕР¶РёС‚СЊ РёС… Рё РїРѕР»СѓС‡РёС‚СЊ РґРµРЅСЊРіРё.
Р“РѕРіРѕР»СЊ С…РѕС‚РµР» РЅР°РїРёСЃР°С‚СЊ 3 С‚РѕРјР° вЂ” РђРґ (С‚.1), Р§РёСЃС‚РёР»РёС‰Рµ, Р Р°Р№.
Рў.2 СЃР¶С‘Рі СЃР°Рј вЂ” РёРґРµР°Р»СЊРЅРѕРіРѕ РіРµСЂРѕСЏ СЃРѕР·РґР°С‚СЊ РЅРµ РјРѕРі.В»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-4}},{label:"Р‘) Р“Р°Р»РµСЂРµСЏ РїРѕРјРµС‰РёРєРѕРІ",text:`В«РњР°РЅРёР»РѕРІ вЂ” РјРµС‡С‚Р°С‚РµР»СЊ Р±РµР· РґРµР»Р°.
РљРѕСЂРѕР±РѕС‡РєР° вЂ” С…РѕР·СЏР№СЃС‚РІРµРЅРЅР°СЏ, РЅРѕ С‚СѓРїР°СЏ.
РќРѕР·РґСЂС‘РІ вЂ” С…РІР°СЃС‚СѓРЅ Рё Р»РіСѓРЅ.
РЎРѕР±Р°РєРµРІРёС‡ вЂ” СѓРїСЂСЏРјС‹Р№ РјРµРґРІРµРґСЊ.
РџР»СЋС€РєРёРЅ вЂ” СЃРєСѓРїРµС†, РєРѕС‚РѕСЂРѕРіРѕ Р“РѕРіРѕР»СЊ Р¶Р°Р»РµРµС‚.
РћС‚ РјР°РЅРёР»РѕРІС‰РёРЅС‹ РґРѕ РїР»СЋС€РєРёРЅСЃС‚РІР° вЂ” РґРµРіСЂР°РґР°С†РёСЏ!В»`,understandingBase:11,attentionDelta:7,difficulty:"medium",typeBonus:{anxious:8,average:5,helper:3}},{label:"Р’) Р›РёСЂРёС‡РµСЃРєРёРµ РѕС‚СЃС‚СѓРїР»РµРЅРёСЏ",text:`В«В«Р СѓСЃСЊ! Р СѓСЃСЊ! Р’РёР¶Сѓ С‚РµР±СЏ...В» вЂ” Р“РѕРіРѕР»СЊ РІРµСЂРёС‚ РІ Р РѕСЃСЃРёСЋ.
РћС‚СЃС‚СѓРїР»РµРЅРёСЏ РЅСѓР¶РЅС‹, С‡С‚РѕР±С‹ РїРѕРєР°Р·Р°С‚СЊ: Р·Р° РїРѕС€Р»РѕСЃС‚СЊСЋ РµСЃС‚СЊ РґСѓС€Р° РЅР°СЂРѕРґР°.
РўСЂРѕР№РєР° РІ РєРѕРЅС†Рµ вЂ” СЌС‚Рѕ РґРІРёР¶РµРЅРёРµ Р РѕСЃСЃРёРё РІРїРµСЂС‘Рґ.
РљСѓРґР° Р»РµС‚РёС‚? Р“РѕРіРѕР»СЊ СЃР°Рј РЅРµ Р·РЅР°Р»...В»`,understandingBase:8,attentionDelta:11,difficulty:"easy",typeBonus:{lazy:8,bully:6,average:5,helper:4}},{label:"Р“) РљС‚Рѕ РёР· РїРѕРјРµС‰РёРєРѕРІ вЂ” РІС‹?",text:`В«РўРµСЃС‚ РєР»Р°СЃСЃСѓ: РєР°Р¶РґС‹Р№ вЂ” РњР°РЅРёР»РѕРІ, РљРѕСЂРѕР±РѕС‡РєР°, РќРѕР·РґСЂС‘РІ, РЎРѕР±Р°РєРµРІРёС‡ РёР»Рё РџР»СЋС€РєРёРЅ?
РћРїРёС€РёС‚Рµ С‡РµСЂС‚С‹ СЃРІРѕРµРіРѕ С‚РёРїР°.
РџРѕС‡РµРјСѓ Р“РѕРіРѕР»СЊ РЅР°Р·РІР°Р» РїРѕСЌРјСѓ РёРјРµРЅРЅРѕ С‚Р°Рє вЂ” СЃРѕ СЃРєСЂС‹С‚С‹Рј СЃРјС‹СЃР»РѕРј.
РћР±СЃСѓРґРёРј: РєС‚Рѕ "Р¶РёРІР°СЏ", Р° РєС‚Рѕ "РјС‘СЂС‚РІР°СЏ" РґСѓС€Р°?В»`,understandingBase:7,attentionDelta:16,difficulty:"medium",typeBonus:{genius:12,bully:10,helper:7,lazy:8,anxious:-3}}],badOption:{label:"Р”) В«РџРµСЂРµСЃРєР°Р· РїРѕ РёРЅС‚РµСЂРЅРµС‚СѓВ»",text:'В«"РњС‘СЂС‚РІС‹Рµ РґСѓС€Рё" вЂ” РґР»РёРЅРЅРѕ Рё СЃРєСѓС‡РЅРѕ. Р”РѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂРѕС‡РёС‚Р°С‚СЊ РєСЂР°С‚РєРѕРµ СЃРѕРґРµСЂР¶Р°РЅРёРµ РѕРЅР»Р°Р№РЅ. Р—Р°С‡РµРј С‚СЂР°С‚РёС‚СЊ РІСЂРµРјСЏ РЅР° РѕСЂРёРіРёРЅР°Р»?В»',understandingBase:-5,attentionDelta:5,difficulty:"easy",typeBonus:{bully:11,lazy:13,genius:-11,helper:-9,anxious:-6},isBad:!0},tasks:{easy:{text:"РќР°Р·РѕРІРёС‚Рµ 5 РїРѕРјРµС‰РёРєРѕРІ РёР· В«РњС‘СЂС‚РІС‹С… РґСѓС€В» Рё РѕРґРЅСѓ С‡РµСЂС‚Сѓ РєР°Р¶РґРѕРіРѕ."},medium:{text:"РћР±СЉСЏСЃРЅРёС‚Рµ, РїРѕС‡РµРјСѓ РїРѕСЌРјР° РЅР°Р·С‹РІР°РµС‚СЃСЏ В«РњС‘СЂС‚РІС‹Рµ РґСѓС€РёВ». Р”РІРѕР№РЅРѕР№ СЃРјС‹СЃР»."},hard:{text:"РњРёРЅРё-СЌСЃСЃРµ: В«Р§С‚Рѕ РѕР±СЉРµРґРёРЅСЏРµС‚ Р§РёС‡РёРєРѕРІР° Рё РїРѕРјРµС‰РёРєРѕРІ?В» (5вЂ“7 РїСЂРµРґР»РѕР¶РµРЅРёР№)."}},homework:{easy:"Р’С‹РїРёС€РёС‚Рµ С†РёС‚Р°С‚Сѓ Рѕ РєР°Р¶РґРѕРј РїРѕРјРµС‰РёРєРµ. РћР±СЉСЏСЃРЅРёС‚Рµ С…Р°СЂР°РєС‚РµСЂ РѕРґРЅРёРј СЃР»РѕРІРѕРј.",medium:"РќР°РїРёС€РёС‚Рµ: Р·Р° С‡С‚Рѕ Р“РѕРіРѕР»СЊ Р»СЋР±РёС‚ Рё РЅРµРЅР°РІРёРґРёС‚ Р РѕСЃСЃРёСЋ РІ С‚РµРєСЃС‚Рµ РїРѕСЌРјС‹.",hard:"РЎСЂР°РІРЅРёС‚Рµ Р§РёС‡РёРєРѕРІР° СЃ РєР°РєРёРј-Р»РёР±Рѕ СЃРѕРІСЂРµРјРµРЅРЅС‹Рј С‚РёРїРѕРј Р»СЋРґРµР№. РђСЂРіСѓРјРµРЅС‚РёСЂСѓР№С‚Рµ."}}],ag=[{subject:"russian",gradeMin:7,gradeMax:8,topic:"Р”РµРµРїСЂРёС‡Р°СЃС‚РЅС‹Р№ РѕР±РѕСЂРѕС‚. Р—РЅР°РєРё РїСЂРµРїРёРЅР°РЅРёСЏ",options:[{label:"Рђ) РћРїСЂРµРґРµР»РµРЅРёРµ Рё РїСЂР°РІРёР»Рѕ",text:`В«Р”РµРµРїСЂРёС‡Р°СЃС‚РЅС‹Р№ РѕР±РѕСЂРѕС‚ (Р”Рћ) вЂ” РґРµРµРїСЂРёС‡Р°СЃС‚РёРµ СЃ Р·Р°РІРёСЃРёРјС‹РјРё СЃР»РѕРІР°РјРё.
Р’С‹РґРµР»СЏРµС‚СЃСЏ Р·Р°РїСЏС‚С‹РјРё СЃ РѕР±РµРёС… СЃС‚РѕСЂРѕРЅ Р’РЎР•Р“Р”Рђ, РєСЂРѕРјРµ...
РСЃРєР»СЋС‡РµРЅРёРµ: СѓСЃС‚РѕР№С‡РёРІС‹Рµ РІС‹СЂР°Р¶РµРЅРёСЏ (СЃР»РѕР¶Р° СЂСѓРєРё, РЅРµ Р·РЅР°СЏ Р±СЂРѕРґСѓ).
Р’РѕРїСЂРѕСЃС‹: Р§С‚Рѕ РґРµР»Р°СЏ? Р§С‚Рѕ СЃРґРµР»Р°РІ?В»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:8,helper:4,anxious:3,lazy:-7,bully:-5}},{label:"Р‘) РЎС…РµРјР° СЂР°Р·Р±РѕСЂР° РЅР° РґРѕСЃРєРµ",text:`В«РџСЂРµРґР»РѕР¶РµРЅРёРµ: В«РџСЂРѕС‡РёС‚Р°РІ РєРЅРёРіСѓ, РѕРЅ Р»С‘Рі СЃРїР°С‚СЊ.В»
РЁР°Рі 1: РќР°Р№РґС‘Рј Р”Рћ вЂ” В«РїСЂРѕС‡РёС‚Р°РІ РєРЅРёРіСѓВ» (С‡С‚Рѕ СЃРґРµР»Р°РІ?)
РЁР°Рі 2: РћС‚РґРµР»СЏРµРј Р·Р°РїСЏС‚РѕР№ вЂ” СЃС‚РѕРёС‚ РІ РЅР°С‡Р°Р»Рµ в†’ Р·Р°РїСЏС‚Р°СЏ РїРѕСЃР»Рµ.
РЁР°Рі 3: РќРµР»СЊР·СЏ СѓР±СЂР°С‚СЊ РєРЅРёРіСѓ РёР· РѕР±РѕСЂРѕС‚Р°.В»`,understandingBase:11,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:9,average:6,helper:3}},{label:"Р’) РЎРјРµС€РЅС‹Рµ РѕС€РёР±РєРё",text:`В«"РџРѕРґС…РѕРґСЏ Рє СЃС‚Р°РЅС†РёРё, Сѓ РјРµРЅСЏ СЃР»РµС‚РµР»Р° С€Р»СЏРїР°." вЂ” РћРЁРР‘РљРђ!
РљС‚Рѕ РїРѕРґС…РѕРґРёР»? РЁР»СЏРїР°? РќРµС‚ вЂ” Р°РІС‚РѕСЂ.
Р”Рћ РґРѕР»Р¶РµРЅ РѕС‚РЅРѕСЃРёС‚СЊСЃСЏ Рє РїРѕРґР»РµР¶Р°С‰РµРјСѓ.
РџСЂР°РІРёР»СЊРЅРѕ: "РљРѕРіРґР° СЏ РїРѕРґС…РѕРґРёР» Рє СЃС‚Р°РЅС†РёРё, Сѓ РјРµРЅСЏ СЃР»РµС‚РµР»Р° С€Р»СЏРїР°."В»`,understandingBase:9,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:10,bully:8,average:6,helper:4}},{label:"Р“) РќР°Р№РґРёС‚Рµ РѕС€РёР±РєСѓ РІ РїСЂРµРґР»РѕР¶РµРЅРёСЏС…",text:`В«РЇ РїСЂРѕС‡РёС‚Р°СЋ С‚СЂРё РїСЂРµРґР»РѕР¶РµРЅРёСЏ вЂ” РЅР°Р№РґРёС‚Рµ РѕС€РёР±РєСѓ РІ СЂР°СЃСЃС‚Р°РЅРѕРІРєРµ Р·РЅР°РєРѕРІ:
1. "Р§РёС‚Р°СЏ РєРЅРёРіСѓ РѕРЅ Р·Р°СЃРЅСѓР»."
2. "РћРЅ СѓС‡РёР»СЃСЏ, РЅРµ Р·РЅР°СЏ СѓСЃС‚Р°Р»РѕСЃС‚Рё."
3. "РЈРїР°РІ РЅР° РїРѕР» С‚Р°СЂРµР»РєР° СЂР°Р·Р±РёР»Р°СЃСЊ."
РџРѕРґРЅРёРјРёС‚Рµ СЂСѓРєСѓ, РєС‚Рѕ РЅР°С€С‘Р» РІСЃРµ С‚СЂРё!В»`,understandingBase:8,attentionDelta:14,difficulty:"medium",typeBonus:{genius:11,bully:7,helper:6,lazy:4,anxious:-2}}],tasks:{easy:{text:`РќР°Р№РґРёС‚Рµ РґРµРµРїСЂРёС‡Р°СЃС‚РЅС‹Р№ РѕР±РѕСЂРѕС‚ Рё СЂР°СЃСЃС‚Р°РІСЊС‚Рµ Р·Р°РїСЏС‚С‹Рµ:
В«Р’С‹Р№РґСЏ РёР· РґРѕРјР° РѕРЅ РЅР°РїСЂР°РІРёР»СЃСЏ РІ С€РєРѕР»СѓВ»`,hint:"В«Р’С‹Р№РґСЏ РёР· РґРѕРјР°В» вЂ” Р”Рћ РІ РЅР°С‡Р°Р»Рµ, Р·Р°РїСЏС‚Р°СЏ РїРѕСЃР»Рµ"},medium:{text:"Р Р°СЃСЃС‚Р°РІСЊС‚Рµ Р·РЅР°РєРё Рё РѕР±СЉСЏСЃРЅРёС‚Рµ: В«РћРЅ СЃС‚РѕСЏР» Сѓ РѕРєРЅР° Р·Р°РґСѓРјС‡РёРІРѕ СЃРјРѕС‚СЂСЏ РЅР° СѓР»РёС†СѓВ»"},hard:{text:"РЎРѕСЃС‚Р°РІСЊС‚Рµ 3 СЃРІРѕРёС… РїСЂРµРґР»РѕР¶РµРЅРёСЏ СЃ РґРµРµРїСЂРёС‡Р°СЃС‚РЅС‹РјРё РѕР±РѕСЂРѕС‚Р°РјРё РІ СЂР°Р·РЅС‹С… РїРѕР·РёС†РёСЏС…."}},homework:{easy:"РќР°Р№РґРёС‚Рµ РґРµРµРїСЂРёС‡Р°СЃС‚РЅС‹Рµ РѕР±РѕСЂРѕС‚С‹ РІ 5 РїСЂРµРґР»РѕР¶РµРЅРёСЏС… СѓС‡РµР±РЅРёРєР° Рё РѕР±СЉСЏСЃРЅРёС‚Рµ Р·РЅР°РєРё.",medium:"РџРµСЂРµРїРёС€РёС‚Рµ 5 РїСЂРµРґР»РѕР¶РµРЅРёР№, РёСЃРїСЂР°РІРёРІ РѕС€РёР±РєРё РІ СѓРїРѕС‚СЂРµР±Р»РµРЅРёРё Р”Рћ.",hard:"РќР°РїРёС€РёС‚Рµ РјРёРЅРё-С‚РµРєСЃС‚ (7 РїСЂРµРґР»РѕР¶РµРЅРёР№) СЃ 3 РґРµРµРїСЂРёС‡Р°СЃС‚РЅС‹РјРё РѕР±РѕСЂРѕС‚Р°РјРё."}},{subject:"russian",gradeMin:8,gradeMax:9,topic:"РЎР»РѕР¶РЅРѕРїРѕРґС‡РёРЅС‘РЅРЅС‹Рµ РїСЂРµРґР»РѕР¶РµРЅРёСЏ",options:[{label:"Рђ) РћРїСЂРµРґРµР»РµРЅРёРµ Рё РІРёРґС‹ РїСЂРёРґР°С‚РѕС‡РЅС‹С…",text:`В«РЎРџРџ = РіР»Р°РІРЅРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ + РїСЂРёРґР°С‚РѕС‡РЅРѕРµ (СЃРѕСЋР·РѕРј РёР»Рё СЃРѕСЋР·РЅС‹Рј СЃР»РѕРІРѕРј).
Р’РёРґС‹: РѕРїСЂРµРґРµР»РёС‚РµР»СЊРЅС‹Рµ (РєРѕС‚РѕСЂС‹Р№), РёР·СЉСЏСЃРЅРёС‚РµР»СЊРЅС‹Рµ (С‡С‚Рѕ/РєР°Рє), РѕР±СЃС‚РѕСЏС‚РµР»СЊСЃС‚РІРµРЅРЅС‹Рµ (РєРѕРіРґР°/РµСЃР»Рё/С…РѕС‚СЏ).
Р—Р°РїСЏС‚Р°СЏ РїРµСЂРµРґ СЃРѕСЋР·РѕРј РІСЃРµРіРґР°!В»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-7,bully:-6}},{label:"Р‘) РЎС…РµРјР° Рё СЃС‚СЂРµР»РєРё РЅР° РґРѕСЃРєРµ",text:`В«"РЇ Р·РЅР°Р»(Р“Р›), С‡С‚Рѕ РѕРЅ РїСЂРёРґС‘С‚(РџР РР”)." вЂ” РёР·СЉСЏСЃРЅРёС‚РµР»СЊРЅРѕРµ
Р’РѕРїСЂРѕСЃ РѕС‚ Р“Р› Рє РїСЂРёРґ: Р·РЅР°Р» вЂ” С‡С‚Рѕ? вЂ” РїСЂРёРґС‘С‚
РЎРѕСЋР· "С‡С‚Рѕ" в†’ Р·Р°РїСЏС‚Р°СЏ РїРµСЂРµРґ РЅРёРј.
Р”РѕРіРѕРІРѕСЂРёРјСЃСЏ: РІСЃРµРіРґР° СЂРёСЃСѓРµРј СЃС…РµРјСѓ [Р“Р›], (СЃРѕСЋР· РїСЂРёРґ)В»`,understandingBase:10,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:9,average:6,helper:3}},{label:"Р’) РџСЂРёРјРµСЂС‹ РёР· РєРЅРёРі",text:`В«РџСѓС€РєРёРЅ: "РЇ РїРѕРјРЅСЋ С‡СѓРґРЅРѕРµ РјРіРЅРѕРІРµРЅСЊРµ, РєРѕРіРґР° С‚С‹ РїРѕСЏРІРёР»Р°СЃСЊ РїСЂРµРґРѕ РјРЅРѕР№."
РџСЂРёРґР°С‚РѕС‡РЅРѕРµ РІСЂРµРјРµРЅРё вЂ” РєРѕРіРґР°.
РћРїСЂРµРґРµР»СЏРµС‚ РљРћР“Р”Рђ РѕРЅ РїРѕРјРЅРёС‚.
РўСѓСЂРіРµРЅРµРІ С‚РѕР¶Рµ Р»СЋР±РёР» РЎРџРџ вЂ” РїСЂРѕРІРµСЂСЊС‚Рµ СЃР°РјРё!В»`,understandingBase:9,attentionDelta:10,difficulty:"easy",typeBonus:{lazy:8,average:5,helper:4,bully:4}},{label:"Р“) РЎРѕСЂРµРІРЅРѕРІР°РЅРёРµ: РїРµСЂРµРІРµСЃС‚Рё РџРџ РІ РЎРџРџ",text:`В«РџСЂРѕСЃС‚РѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ: "РЈС‚СЂРѕРј РІС‹РїР°Р» СЃРЅРµРі."
РЎР»РѕР¶РЅРѕРїРѕРґС‡РёРЅС‘РЅРЅРѕРµ: "РљРѕРіРґР° РЅР°СЃС‚СѓРїРёР»Рѕ СѓС‚СЂРѕ, РІС‹РїР°Р» СЃРЅРµРі."
Р’Р°С€ РІР°СЂРёР°РЅС‚ СЃ СЃРѕСЋР·РѕРј "РїРѕСЃР»Рµ С‚РѕРіРѕ РєР°Рє"?
РљС‚Рѕ РїСЂРµРґР»РѕР¶РёС‚ СЃР°РјС‹Р№ РєСЂР°СЃРёРІС‹Р№?В»`,understandingBase:8,attentionDelta:13,difficulty:"medium",typeBonus:{genius:11,bully:6,helper:5,lazy:4,anxious:-3}}],tasks:{easy:{text:"РќР°Р·РѕРІРёС‚Рµ РІРёРґ РїСЂРёРґР°С‚РѕС‡РЅРѕРіРѕ: В«РЇ РЅРµ Р·РЅР°Р», РіРґРµ Р¶РёРІС‘С‚ РљРѕР»СЏ.В»",hint:"РР·СЉСЏСЃРЅРёС‚РµР»СЊРЅРѕРµ (РІРѕРїСЂРѕСЃ: РЅРµ Р·РЅР°Р» вЂ” С‡РµРіРѕ? вЂ” РіРґРµ Р¶РёРІС‘С‚)"},medium:{text:`Р Р°СЃСЃС‚Р°РІСЊС‚Рµ Р·РЅР°РєРё Рё РѕРїСЂРµРґРµР»РёС‚Рµ РІРёРґ РїСЂРёРґР°С‚РѕС‡РЅРѕРіРѕ:
В«РљРѕРіРґР° Р·Р°РєРѕРЅС‡РёР»СЃСЏ СѓСЂРѕРє РІСЃРµ РІС‹С€Р»Рё РІ РєРѕСЂРёРґРѕСЂВ»`},hard:{text:"РЎРѕСЃС‚Р°РІСЊС‚Рµ РїРѕ РѕРґРЅРѕРјСѓ РЎРџРџ РєР°Р¶РґРѕРіРѕ РІРёРґР°: РѕРїСЂРµРґРµР»РёС‚РµР»СЊРЅРѕРµ, РёР·СЉСЏСЃРЅРёС‚РµР»СЊРЅРѕРµ, РѕР±СЃС‚РѕСЏС‚РµР»СЊСЃС‚РІРµРЅРЅРѕРµ."}},homework:{easy:"РќР°Р№РґРёС‚Рµ 5 РЎРџРџ РІ Р»СЋР±РѕРј С‚РµРєСЃС‚Рµ, РїРѕРґС‡РµСЂРєРЅРёС‚Рµ СЃРѕСЋР·С‹.",medium:"РЎРѕСЃС‚Р°РІСЊС‚Рµ 5 РЎРџРџ СЂР°Р·РЅС‹С… РІРёРґРѕРІ СЃ СЂР°СЃСЃС‚Р°РЅРѕРІРєРѕР№ Р·РЅР°РєРѕРІ.",hard:"РџСЂРµРѕР±СЂР°Р·СѓР№С‚Рµ 5 РїСЂРѕСЃС‚С‹С… РїСЂРµРґР»РѕР¶РµРЅРёР№ РІ СЃР»РѕР¶РЅРѕРїРѕРґС‡РёРЅС‘РЅРЅС‹Рµ С‚СЂС‘РјСЏ СЂР°Р·РЅС‹РјРё СЃРїРѕСЃРѕР±Р°РјРё РєР°Р¶РґРѕРµ."}},{subject:"russian",gradeMin:7,gradeMax:8,topic:"РџСЂРёС‡Р°СЃС‚РЅС‹Р№ РѕР±РѕСЂРѕС‚. РџСЂР°РІРѕРїРёСЃР°РЅРёРµ РїСЂРёС‡Р°СЃС‚РёР№",options:[{label:"Рђ) РџСЂРёС‡Р°СЃС‚РёРµ Рё РѕР±РѕСЂРѕС‚",text:`В«РџСЂРёС‡Р°СЃС‚РёРµ = РїСЂРёР»Р°РіР°С‚РµР»СЊРЅРѕРµ + РіР»Р°РіРѕР».
РћС‚РІРµС‡Р°РµС‚: РєР°РєРѕР№? С‡С‚Рѕ РґРµР»Р°СЋС‰РёР№? С‡С‚Рѕ СЃРґРµР»Р°РІС€РёР№?
РџСЂРёС‡Р°СЃС‚РЅС‹Р№ РѕР±РѕСЂРѕС‚ (РџРћ) = РїСЂРёС‡Р°СЃС‚РёРµ + Р·Р°РІРёСЃРёРјС‹Рµ СЃР»РѕРІР°.
РћР±РѕСЃРѕР±Р»СЏРµС‚СЃСЏ, РµСЃР»Рё СЃС‚РѕРёС‚ РџРћРЎР›Р• РѕРїСЂРµРґРµР»СЏРµРјРѕРіРѕ СЃР»РѕРІР°.В»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:8,helper:4,anxious:3,lazy:-7,bully:-6}},{label:"Р‘) РњРµСЃС‚Рѕ РёРјРµРµС‚ Р·РЅР°С‡РµРЅРёРµ",text:`В«РџРћРЎР›Р• вЂ” Р·Р°РїСЏС‚Р°СЏ: "РњР°Р»СЊС‡РёРє, Р±РµР¶Р°РІС€РёР№ РїРѕ СѓР»РёС†Рµ, СѓРїР°Р»."
Р”Рћ вЂ” РЅРµС‚ Р·Р°РїСЏС‚РѕР№: "Р‘РµР¶Р°РІС€РёР№ РїРѕ СѓР»РёС†Рµ РјР°Р»СЊС‡РёРє СѓРїР°Р»."
РњРЅРµРјРѕРЅРёРєР°: "Р•СЃР»Рё РѕР±РѕСЂРѕС‚ Р”РћР“РћРќРЇР•Рў СЃР»РѕРІРѕ вЂ” РІС‹РґРµР»СЏРµРј."
Р—Р°РїРёС€РµРј С‚СЂРё РїСЂРёРјРµСЂР° РЅР° РґРѕСЃРєРµ.В»`,understandingBase:10,attentionDelta:7,difficulty:"medium",typeBonus:{anxious:9,average:6,helper:3}},{label:"Р’) РќР°Р№РґРё РѕС€РёР±РєСѓ РІ РєРЅРёРіРµ",text:`В«РћС‚РєСЂРѕРµРј Р»СЋР±СѓСЋ СЃС‚СЂР°РЅРёС†Сѓ вЂ” РЅР°Р№РґС‘Рј РїСЂРёС‡Р°СЃС‚РЅС‹Р№ РѕР±РѕСЂРѕС‚!
Р’РѕР№РЅР° Рё РјРёСЂ: "РІРѕР№СЃРєР°, РѕС‚СЃС‚СѓРїР°РІС€РёРµ РїРѕ РґРѕСЂРѕРіРµ..." вЂ” РџРћ РџРћРЎР›Р•!
РџСѓС€РєРёРЅ: "РґР°РІРЅРѕ С‡РёС‚Р°РЅРЅС‹Р№ СЂРѕРјР°РЅ" вЂ” Р”Рћ! вЂ” РЅРµС‚ Р·Р°РїСЏС‚РѕР№.
Р­С‚Рѕ РїСЂР°РІРёР»Рѕ СЂР°Р±РѕС‚Р°РµС‚ РІ Р»СЋР±РѕРј С‚РµРєСЃС‚Рµ.В»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:8,bully:5,average:5,helper:4}},{label:"Р“) РЎРѕСЃС‚СЏР·Р°РЅРёРµ Сѓ РґРѕСЃРєРё",text:`В«Р Р°СЃСЃС‚Р°РІСЊС‚Рµ Р·Р°РїСЏС‚С‹Рµ: "Р РµР±С‘РЅРѕРє Р»СЋР±РёРІС€РёР№ С‡РёС‚Р°С‚СЊ РєРЅРёРіРё РІРµС‡РµСЂРѕРј Р·Р°СЃС‹РїР°Р» Р±С‹СЃС‚СЂРѕ."
РљС‚Рѕ РїРµСЂРІС‹Р№ РїСЂР°РІРёР»СЊРЅРѕ? РџРѕС‡РµРјСѓ РёРјРµРЅРЅРѕ С‚Р°Рє?
Рђ С‚РµРїРµСЂСЊ: РїРµСЂРµРґРІРёРЅСЊС‚Рµ РѕР±РѕСЂРѕС‚ РІ РЅР°С‡Р°Р»Рѕ вЂ” С‡С‚Рѕ РёР·РјРµРЅРёС‚СЃСЏ?В»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:12,bully:8,helper:5,lazy:4,anxious:-3}}],badOption:{label:"Р”) В«РЎС‚Р°РІСЊС‚Рµ Р·Р°РїСЏС‚С‹Рµ РЅР° СЃР»СѓС…В»",text:"В«РџСЂРёС‡Р°СЃС‚РЅС‹Р№ РѕР±РѕСЂРѕС‚ СЃР»РѕР¶РЅС‹Р№. РџСЂРѕСЃС‚Рѕ С‡РёС‚Р°Р№С‚Рµ РІСЃР»СѓС… вЂ” РіРґРµ РіРѕР»РѕСЃ РїРѕРЅРёР¶Р°РµС‚СЃСЏ, С‚Р°Рј Р·Р°РїСЏС‚Р°СЏ. РџСЂР°РІРёР»Р° СѓС‡РёС‚СЊ РЅРµРѕР±СЏР·Р°С‚РµР»СЊРЅРѕ, РіР»Р°РІРЅРѕРµ вЂ” С‡СѓРІСЃС‚РІРѕРІР°С‚СЊ СЏР·С‹Рє.В»",understandingBase:-6,attentionDelta:4,difficulty:"easy",typeBonus:{bully:11,lazy:12,genius:-10,helper:-9,anxious:-7},isBad:!0},tasks:{easy:{text:`Р’ РєР°РєРѕРј РїСЂРµРґР»РѕР¶РµРЅРёРё РЅСѓР¶РЅР° Р·Р°РїСЏС‚Р°СЏ?
Рђ) РџСЂРѕС‡РёС‚Р°РЅРЅР°СЏ РІС‡РµСЂР° РєРЅРёРіР° РѕРєР°Р·Р°Р»Р°СЃСЊ РёРЅС‚РµСЂРµСЃРЅРѕР№.
Р‘) РљРЅРёРіР° РїСЂРѕС‡РёС‚Р°РЅРЅР°СЏ РІС‡РµСЂР° РѕРєР°Р·Р°Р»Р°СЃСЊ РёРЅС‚РµСЂРµСЃРЅРѕР№.`,hint:"Р‘ вЂ” РѕР±РѕСЂРѕС‚ РїРѕСЃР»Рµ РѕРїСЂРµРґРµР»СЏРµРјРѕРіРѕ СЃР»РѕРІР°"},medium:{text:'Р Р°СЃСЃС‚Р°РІСЊС‚Рµ Р·РЅР°РєРё: "РџС‚РёС†С‹ Р·Р°РїРѕР»РЅРёРІС€РёРµ РЅРµР±Рѕ Р»РµС‚РµР»Рё РЅР° СЋРі." РћР±СЉСЏСЃРЅРёС‚Рµ.'},hard:{text:"РЎРѕСЃС‚Р°РІСЊС‚Рµ 3 РїСЂРµРґР»РѕР¶РµРЅРёСЏ СЃ РїСЂРёС‡Р°СЃС‚РЅС‹Рј РѕР±РѕСЂРѕС‚РѕРј (РґРѕ/РїРѕСЃР»Рµ/РІРЅСѓС‚СЂРё РѕРїСЂРµРґРµР»СЏРµРјРѕРіРѕ СЃР»РѕРІР°)."}},homework:{easy:"РќР°Р№РґРёС‚Рµ 5 РїСЂРёС‡Р°СЃС‚РЅС‹С… РѕР±РѕСЂРѕС‚РѕРІ РІ Р»СЋР±РѕРј С‚РµРєСЃС‚Рµ. Р’С‹РїРёС€РёС‚Рµ СЃ СЂР°СЃСЃС‚Р°РЅРѕРІРєРѕР№ Р·Р°РїСЏС‚С‹С….",medium:'РџРµСЂРµРїРёС€РёС‚Рµ, РІС‹РґРµР»СЏСЏ РїСЂРёС‡Р°СЃС‚РЅС‹Рµ РѕР±РѕСЂРѕС‚С‹: "Р”РѕСЂРѕРіР° РІРµРґСѓС‰Р°СЏ Рє РјРѕСЂСЋ Р±С‹Р»Р° СѓР·РєРѕР№." (3 РІР°СЂРёР°РЅС‚Р°).',hard:"РќР°РїРёС€РёС‚Рµ С‚РµРєСЃС‚ (7вЂ“8 РїСЂРµРґР»РѕР¶РµРЅРёР№) СЃ 4 РїСЂРёС‡Р°СЃС‚РЅС‹РјРё РѕР±РѕСЂРѕС‚Р°РјРё вЂ” РїСЂР°РІРёР»СЊРЅРѕ СЂР°СЃСЃС‚Р°РІСЊС‚Рµ Р·РЅР°РєРё."}}],Ko=[...tg,...ng,...ig,...sg,...rg,...ag];function og(s,e,t){const n=Ko.filter(i=>i.subject===s&&i.gradeMin<=e&&i.gradeMax>=e&&!t.includes(i.topic));if(n.length===0){const i=Ko.filter(r=>r.subject===s&&r.gradeMin<=e&&r.gradeMax>=e);return i.length===0?null:i[Math.floor(Math.random()*i.length)]}return n[Math.floor(Math.random()*n.length)]}const lg={math:["РљРІР°РґСЂР°С‚РЅС‹Рµ СѓСЂР°РІРЅРµРЅРёСЏ","РџСЂРѕРёР·РІРѕРґРЅР°СЏ","РўРµРѕСЂРµРјР° РџРёС„Р°РіРѕСЂР°","РўСЂРёРіРѕРЅРѕРјРµС‚СЂРёСЏ","Р›РѕРіР°СЂРёС„РјС‹","РџСЂРѕРіСЂРµСЃСЃРёРё"],physics:["Р—Р°РєРѕРЅС‹ РќСЊСЋС‚РѕРЅР°","Р—Р°РєРѕРЅ РћРјР°","РўРµСЂРјРѕРґРёРЅР°РјРёРєР°","РћРїС‚РёРєР°","РЇРґРµСЂРЅР°СЏ С„РёР·РёРєР°"],chemistry:["РЎС‚СЂРѕРµРЅРёРµ Р°С‚РѕРјР°","РћР’Р ","РўРёРїС‹ С…РёРјРёС‡РµСЃРєРёС… СЃРІСЏР·РµР№","РћСЂРіР°РЅРёС‡РµСЃРєР°СЏ С…РёРјРёСЏ"],history:["РџРµСЂРІР°СЏ РјРёСЂРѕРІР°СЏ РІРѕР№РЅР°","Р РµРІРѕР»СЋС†РёСЏ 1917","Р’РћР’","Р­РїРѕС…Р° РџСЂРѕСЃРІРµС‰РµРЅРёСЏ"],literature:["РћР±СЂР°Р· Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР°","РњС‘СЂС‚РІС‹Рµ РґСѓС€Рё","РџСѓС€РєРёРЅ","РЁРµРєСЃРїРёСЂ"],russian:["РџСЂРёС‡Р°СЃС‚РЅС‹Р№ РѕР±РѕСЂРѕС‚","РЎРџРџ","Р’РёРґС‹ РіР»Р°РіРѕР»Р°","РџСЂР°РІРѕРїРёСЃР°РЅРёРµ РїСЂРёСЃС‚Р°РІРѕРє"]},cg={theory:"рџ“–",board:"рџ“‹",example:"рџ’Ў",question:"вќ“"},Zo={math:["РќРµРІРµСЂРЅС‹Р№ Р·РЅР°Рє РїСЂРё СЂР°СЃРєСЂС‹С‚РёРё СЃРєРѕР±РѕРє","РћС€РёР±РєР° РІ РїРѕСЂСЏРґРєРµ РґРµР№СЃС‚РІРёР№","Р”РµР»РµРЅРёРµ РЅР° РЅРѕР»СЊ","РџСЂРѕРїСѓС‰РµРЅ РјРѕРґСѓР»СЊ","РќРµРІРµСЂРЅР°СЏ С„РѕСЂРјСѓР»Р°","РђСЂРёС„РјРµС‚РёС‡РµСЃРєР°СЏ РѕС€РёР±РєР°","РќРµ Р·Р°РїРёСЃР°РЅ РѕС‚РІРµС‚"],physics:["РќРµ СѓРєР°Р·Р°РЅС‹ РµРґРёРЅРёС†С‹ РёР·РјРµСЂРµРЅРёСЏ","РћС€РёР±РєР° РІ С„РѕСЂРјСѓР»Рµ","РќРµРІРµСЂРЅС‹Р№ РїРµСЂРµРІРѕРґ РµРґРёРЅРёС†","РџСЂРѕРїСѓС‰РµРЅ С‡РµСЂС‚С‘Р¶","Р—РЅР°Рє РЅР°РїСЂР°РІР»РµРЅРёСЏ РІРµРєС‚РѕСЂР°"],chemistry:["РќРµРІРµСЂРЅС‹Р№ РєРѕСЌС„С„РёС†РёРµРЅС‚","РћС€РёР±РєР° РІ С„РѕСЂРјСѓР»Рµ РІРµС‰РµСЃС‚РІР°","РџРѕС‚РµСЂСЏ СЌР»РµРєС‚СЂРѕРЅР° РІ СѓСЂР°РІРЅРµРЅРёРё","РќРµРІРµСЂРЅРѕРµ РЅР°Р·РІР°РЅРёРµ"],history:["РќРµРІРµСЂРЅР°СЏ РґР°С‚Р°","РџРµСЂРµРїСѓС‚Р°РЅ РёСЃС‚РѕСЂРёС‡РµСЃРєРёР№ РґРµСЏС‚РµР»СЊ","РќРµС‚РѕС‡РЅР°СЏ РїРµСЂРёРѕРґРёР·Р°С†РёСЏ","РќРµРІРµСЂРЅРѕРµ РЅР°Р·РІР°РЅРёРµ СЃРѕР±С‹С‚РёСЏ"],literature:["РќРµРїСЂР°РІРёР»СЊРЅР°СЏ С†РёС‚Р°С‚Р°","РџРµСЂРµРїСѓС‚Р°РЅС‹ РїРµСЂСЃРѕРЅР°Р¶Рё","РќРµРІРµСЂРЅС‹Р№ Р°РІС‚РѕСЂ РїСЂРѕРёР·РІРµРґРµРЅРёСЏ"],russian:["РџСЂРѕРїСѓС‰РµРЅР° Р·Р°РїСЏС‚Р°СЏ","РќРµРІРµСЂРЅРѕРµ РЅР°РїРёСЃР°РЅРёРµ СЃР»РѕРІР°","РћС€РёР±РєР° РІ СЃРєР»РѕРЅРµРЅРёРё","РќРµРІРµСЂРЅС‹Р№ СЂР°Р·Р±РѕСЂ РїСЂРµРґР»РѕР¶РµРЅРёСЏ"],default:["РџСЂРѕРїСѓС‰РµРЅРѕ СЃР»РѕРІРѕ","РќРµСЂР°Р·Р±РѕСЂС‡РёРІС‹Р№ РїРѕС‡РµСЂРє","РќРµ СѓРєР°Р·Р°РЅ РїСЂРёРјРµСЂ","Р“СЂР°РјРјР°С‚РёС‡РµСЃРєР°СЏ РѕС€РёР±РєР°"]},Jo={math:[["Р”Р°РЅРѕ:","xВІ+5x+6=0","Р РµС€РµРЅРёРµ: (x+2)(x+3)=0","xв‚Ѓ=в€’2, xв‚‚=в€’3"],["f(x)=3xВІв€’2x+1","f'(x)=6xв€’2","f'(2)=10"],["S=n/2В·(2aв‚Ѓ+(n-1)d)","n=10, aв‚Ѓ=2, d=3","S=155"]],physics:[["I=U/R=12/4=3 Рђ","РћС‚РІРµС‚: I=3 Рђ"],["F=ma=2Г—5=10 Рќ","РћС‚РІРµС‚: F=10 Рќ"],["v=в€љ(2gh)=20 Рј/СЃ","t=в€љ(2h/g)=2 СЃ"]],chemistry:[["2Hв‚‚+Oв‚‚в†’2Hв‚‚O","РўРёРї: СЃРѕРµРґРёРЅРµРЅРёРµ"],["1sВІ2sВІ2pвЃ¶3sВІ3pвЃґ","РЎС‚. РѕРєРёСЃР»РµРЅРёСЏ: в€’2,+4,+6"],["n=m/M=0.2 РјРѕР»СЊ","N=1.2Г—10ВІВі"]],history:[["1914вЂ”1918 вЂ” РџРµСЂРІР°СЏ РјРёСЂРѕРІР°СЏ РІРѕР№РЅР°","РџСЂРёС‡РёРЅС‹: РёРјРїРµСЂРёР°Р»РёСЃС‚РёС‡РµСЃРєРёРµ РїСЂРѕС‚РёРІРѕСЂРµС‡РёСЏ"],["Р¤РµРІСЂ. СЂРµРІРѕР»СЋС†РёСЏ 1917 Рі.","РС‚РѕРі: РѕС‚СЂРµС‡РµРЅРёРµ РќРёРєРѕР»Р°СЏ II"]],literature:[["Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІ: С‚РµРѕСЂРёСЏ Рѕ В«РїСЂР°РІРѕ РёРјРµСЋВ»","РќР°РєР°Р·Р°РЅРёРµ вЂ” СЃРѕРІРµСЃС‚СЊ"],["Р›РёСЂРёС‡РµСЃРєРёРµ РѕС‚СЃС‚СѓРїР»РµРЅРёСЏ: РїРѕР·РёС†РёСЏ Р°РІС‚РѕСЂР°","РўРµРјР°: Р РѕСЃСЃРёСЏ, РЅР°СЂРѕРґ"]],russian:[["Р”Рћ: В«РџСЂРѕС‡РёС‚Р°РІ РєРЅРёРіСѓ, РѕРЅ Р»С‘Рі.В»","Р’С‹РґРµР»СЏРµС‚СЃСЏ Р·Р°РїСЏС‚С‹РјРё"],["РЎРџРџ: С‡С‚Рѕ/РєР°Рє/РєРѕС‚РѕСЂС‹Р№","Р—Р°РїСЏС‚Р°СЏ РїРµСЂРµРґ СЃРѕСЋР·РѕРј"]]};function dg(s){const e=Jo[s]??Jo.math;return e[Math.floor(Math.random()*e.length)]}function hg(s,e,t){const n=Zo[s]??Zo.default,i=e==="easy"?0:e==="medium"?1:2,r=t<40?2:t<70?1:0,a=i+r+(Math.random()<.4?1:0);return[...n].sort(()=>Math.random()-.5).slice(0,Math.max(0,a))}function Qo(s,e){const t=["Рђ","Р‘","Р’","Р“"],n={Рђ:"theory",Р‘:"board",Р’:"example",Р“:"question"};return{label:s.label,text:s.text,type:n[t[e]]??"theory",icon:cg[n[t[e]]??"theory"],understandingDelta:s.understandingBase,attentionDelta:s.attentionDelta,difficulty:s.difficulty,isBad:s.isBad??!1}}const el=[[{label:"РўРµРѕСЂРёСЏ РїРѕ СѓС‡РµР±РЅРёРєСѓ",text:"РћС‚РєСЂС‹РІР°РµРј РїР°СЂР°РіСЂР°С„. Р§РёС‚Р°РµРј РѕРїСЂРµРґРµР»РµРЅРёРµ РІСЃР»СѓС…. Р—Р°РїРёСЃС‹РІР°РµРј РєР»СЋС‡РµРІС‹Рµ РїРѕРЅСЏС‚РёСЏ РІ С‚РµС‚СЂР°РґСЊ.",type:"theory",icon:"рџ“–",understandingDelta:13,attentionDelta:-8,difficulty:"hard",isBad:!1},{label:"РЎС…РµРјР° РЅР° РґРѕСЃРєРµ",text:"Р РёСЃСѓРµРј РѕРїРѕСЂРЅСѓСЋ СЃС…РµРјСѓ С€Р°Рі Р·Р° С€Р°РіРѕРј. РЈС‡РµРЅРёРєРё РєРѕРїРёСЂСѓСЋС‚ РІ С‚РµС‚СЂР°РґСЊ РїРѕ С…РѕРґСѓ РѕР±СЉСЏСЃРЅРµРЅРёСЏ.",type:"board",icon:"рџ“‹",understandingDelta:11,attentionDelta:3,difficulty:"medium",isBad:!1},{label:"РџСЂРёРјРµСЂ РёР· Р¶РёР·РЅРё",text:"Р“РґРµ РІ РїРѕРІСЃРµРґРЅРµРІРЅРѕР№ Р¶РёР·РЅРё СЌС‚Рѕ РІСЃС‚СЂРµС‡Р°РµС‚СЃСЏ? РќР°С…РѕРґРёРј С‚СЂРё СЂРµР°Р»СЊРЅС‹С… РїСЂРёРјРµСЂР° Рё РѕР±СЃСѓР¶РґР°РµРј.",type:"example",icon:"рџ’Ў",understandingDelta:8,attentionDelta:12,difficulty:"easy",isBad:!1},{label:"Р’РѕРїСЂРѕСЃ РєР»Р°СЃСЃСѓ",text:"РљС‚Рѕ РїРѕРїСЂРѕР±СѓРµС‚ РѕР±СЉСЏСЃРЅРёС‚СЊ СЃРІРѕРёРјРё СЃР»РѕРІР°РјРё? РџРѕРґРѕР¶РґС‘Рј 30 СЃРµРєСѓРЅРґ вЂ” РєС‚Рѕ РїРѕРґРЅРёРјРµС‚ СЂСѓРєСѓ?",type:"question",icon:"вќ“",understandingDelta:5,attentionDelta:15,difficulty:"medium",isBad:!1}],[{label:"РњРёРЅРё-Р»РµРєС†РёСЏ В«РѕС‚ РѕР±СЂР°С‚РЅРѕРіРѕВ»",text:"РЎРЅР°С‡Р°Р»Р° РїРѕРєР°Р¶РµРј, С‡С‚Рѕ Р±СѓРґРµС‚ РµСЃР»Рё СЃРґРµР»Р°С‚СЊ РЅРµРїСЂР°РІРёР»СЊРЅРѕ. РџРѕС‚РѕРј РѕР±СЉСЏСЃРЅРёРј РїРѕС‡РµРјСѓ.",type:"theory",icon:"рџ”„",understandingDelta:12,attentionDelta:-5,difficulty:"hard",isBad:!1},{label:"Р“СЂСѓРїРїРѕРІРѕРµ РѕР±СЃСѓР¶РґРµРЅРёРµ",text:"Р Р°Р·Р±РёРІР°РµРјСЃСЏ РЅР° РїР°СЂС‹ вЂ” 2 РјРёРЅСѓС‚С‹ РѕР±СЃСѓР¶РґР°РµРј С‚РµРјСѓ РјРµР¶РґСѓ СЃРѕР±РѕР№. РџРѕС‚РѕРј РґРµР»РёРјСЃСЏ РІС‹РІРѕРґР°РјРё.",type:"question",icon:"рџ¤ќ",understandingDelta:7,attentionDelta:14,difficulty:"medium",isBad:!1},{label:"РђРЅР°Р»РѕРіРёСЏ-СЃСЂР°РІРЅРµРЅРёРµ",text:"Р­С‚Рѕ РїРѕС…РѕР¶Рµ РЅР°вЂ¦ РќР°Р№РґС‘Рј РІСЃС‘ С‡С‚Рѕ Сѓ РЅРёС… РѕР±С‰РµРіРѕ Рё РіРґРµ РѕРЅРё РѕС‚Р»РёС‡Р°СЋС‚СЃСЏ.",type:"example",icon:"вљ–пёЏ",understandingDelta:9,attentionDelta:10,difficulty:"easy",isBad:!1},{label:"Р РѕР»РµРІРѕРµ РѕР±СЉСЏСЃРЅРµРЅРёРµ",text:"РћРґРёРЅ СѓС‡РµРЅРёРє Сѓ РґРѕСЃРєРё РѕР±СЉСЏСЃРЅСЏРµС‚ РІСЃРµРј РѕСЃС‚Р°Р»СЊРЅС‹Рј РєР°Рє В«СѓС‡РёС‚РµР»СЊВ». РЇ Р±СѓРґСѓ РїРѕРїСЂР°РІР»СЏС‚СЊ.",type:"board",icon:"рџЋ­",understandingDelta:6,attentionDelta:17,difficulty:"medium",isBad:!1}],[{label:"РЎРЅР°С‡Р°Р»Р° РїРѕРїСЂРѕР±СѓРµРј СЃР°РјРё",text:"Р”Р°СЋ Р·Р°РґР°РЅРёРµ вЂ” РІСЃРµ 3 РјРёРЅСѓС‚С‹ РїСЂРѕР±СѓСЋС‚ Р±РµР· РѕР±СЉСЏСЃРЅРµРЅРёСЏ. РџРѕС‚РѕРј РІРјРµСЃС‚Рµ СЂР°Р·Р±РёСЂР°РµРј РѕС€РёР±РєРё.",type:"board",icon:"рџ§Є",understandingDelta:10,attentionDelta:6,difficulty:"medium",isBad:!1},{label:"Р Р°Р·Р±РѕСЂ С‚РёРїРёС‡РЅС‹С… РѕС€РёР±РѕРє",text:"Р’РѕС‚ 3 С‚РёРїРёС‡РЅС‹Рµ РѕС€РёР±РєРё РїРѕ СЌС‚РѕР№ С‚РµРјРµ. РџРѕС‡РµРјСѓ РѕРЅРё РІРѕР·РЅРёРєР°СЋС‚ Рё РєР°Рє РёС… РёР·Р±РµР¶Р°С‚СЊ?",type:"theory",icon:"рџљ«",understandingDelta:11,attentionDelta:4,difficulty:"hard",isBad:!1},{label:"Р РµР°Р»СЊРЅС‹Р№ РѕРїС‹С‚ / СЌРєСЃРїРµСЂРёРјРµРЅС‚",text:"РџСЂРѕРІРµСЂСЏРµРј РїСЂСЏРјРѕ РІ РєР»Р°СЃСЃРµ. РќР°Р±Р»СЋРґР°РµРј вЂ” С‡С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚? Р”РµР»Р°РµРј РІС‹РІРѕРґ РІРјРµСЃС‚Рµ.",type:"example",icon:"рџ”¬",understandingDelta:8,attentionDelta:13,difficulty:"easy",isBad:!1},{label:"В«РЈРіР°РґР°Р№ Р·Р°РєРѕРЅРѕРјРµСЂРЅРѕСЃС‚СЊВ»",text:"РЎРјРѕС‚СЂРёРј РЅР° РЅРµСЃРєРѕР»СЊРєРѕ РїСЂРёРјРµСЂРѕРІ. РљС‚Рѕ РїРµСЂРІС‹Рј СѓРіР°РґР°РµС‚ РїСЂР°РІРёР»Рѕ вЂ” РїРѕРґРЅРёРјРёС‚Рµ СЂСѓРєСѓ!",type:"question",icon:"рџЋЇ",understandingDelta:5,attentionDelta:18,difficulty:"medium",isBad:!1}],[{label:"РћРїСЂРѕСЃ РїРѕ С†РµРїРѕС‡РєРµ",text:"РљР°Р¶РґС‹Р№ РґРѕР±Р°РІР»СЏРµС‚ РѕРґРЅРѕ СЃР»РѕРІРѕ Рє РѕРїСЂРµРґРµР»РµРЅРёСЋ. РќР°С‡РёРЅР°РµРј СЃ РїРµСЂРІРѕР№ РїР°СЂС‚С‹ вЂ” РїРѕ РєСЂСѓРіСѓ.",type:"question",icon:"рџ”—",understandingDelta:8,attentionDelta:9,difficulty:"medium",isBad:!1},{label:"РЎРѕСЃС‚Р°РІР»СЏРµРј СЃС…РµРјСѓ РІРјРµСЃС‚Рµ",text:"РЇ РЅР°С‡РЅСѓ вЂ” РЅР°СЂРёСЃСѓСЋ С†РµРЅС‚СЂ. РљС‚Рѕ РґРѕР±Р°РІРёС‚ СЃР»РµРґСѓСЋС‰СѓСЋ РІРµС‚РєСѓ? РЎС‚СЂРѕРёРј РєРѕРЅС†РµРїС‚-РєР°СЂС‚Сѓ РІРјРµСЃС‚Рµ.",type:"board",icon:"рџ—єпёЏ",understandingDelta:11,attentionDelta:5,difficulty:"medium",isBad:!1},{label:"РЎСЂР°РІРЅРµРЅРёРµ СЃ РёР·СѓС‡РµРЅРЅС‹Рј",text:"РќРѕРІР°СЏ С‚РµРјР° РїРѕС…РѕР¶Р° РЅР° С‚Рѕ С‡С‚Рѕ РјС‹ СѓР¶Рµ РїСЂРѕС…РѕРґРёР»Рё. Р’ С‡С‘Рј СЃС…РѕРґСЃС‚РІР°, РІ С‡С‘Рј РѕС‚Р»РёС‡РёСЏ?",type:"theory",icon:"рџ”Ћ",understandingDelta:9,attentionDelta:2,difficulty:"hard",isBad:!1},{label:"РџСЂРµРґСЃРєР°Р·Р°РЅРёРµ СЂРµР·СѓР»СЊС‚Р°С‚Р°",text:"РџСЂРµР¶РґРµ С‡РµРј РѕР±СЉСЏСЃРЅСЏС‚СЊ вЂ” РєР°Р¶РґС‹Р№ Р·Р°РїРёС€РµС‚ СЃРІРѕС‘ РїСЂРµРґРїРѕР»РѕР¶РµРЅРёРµ. РџРѕС‚РѕРј СЃРІРµСЂРёРј СЃ РїСЂР°РІРёР»СЊРЅС‹Рј.",type:"example",icon:"рџ”®",understandingDelta:6,attentionDelta:14,difficulty:"easy",isBad:!1}],[{label:"Р‘РѕР»СЊС€Р°СЏ РєР°СЂС‚РёРЅР°",text:"РЎРЅР°С‡Р°Р»Р° СЃРјРѕС‚СЂРёРј РЅР° С‚РµРјСѓ РіР»РѕР±Р°Р»СЊРЅРѕ вЂ” РіРґРµ РѕРЅР° РІ СЃРёСЃС‚РµРјРµ РїСЂРµРґРјРµС‚Р° Рё Р·Р°С‡РµРј РѕРЅР° РЅСѓР¶РЅР°.",type:"theory",icon:"рџЊђ",understandingDelta:12,attentionDelta:-3,difficulty:"hard",isBad:!1},{label:"Р”РµРјРѕРЅСЃС‚СЂР°С†РёСЏ РЅР° С‡РёСЃР»Р°С… / С„Р°РєС‚Р°С…",text:"Р’РѕР·СЊРјС‘Рј РєРѕРЅРєСЂРµС‚РЅС‹Рµ С‡РёСЃР»Р° Рё РїСЂРѕСЃР»РµРґРёРј РєР°Р¶РґС‹Р№ С€Р°Рі. Р‘РµР· РѕР±РѕР±С‰РµРЅРёР№ вЂ” С‡РёСЃС‚Р°СЏ РєРѕРЅРєСЂРµС‚РёРєР°.",type:"board",icon:"рџ“Љ",understandingDelta:10,attentionDelta:3,difficulty:"medium",isBad:!1},{label:"РўР°Р±Р»РёС†Р° В«Р”Рѕ Рё РџРѕСЃР»РµВ»",text:"Р§С‚Рѕ РјС‹ Р·РЅР°Р»Рё Рѕ С‚РµРјРµ Р”Рћ СѓСЂРѕРєР°? Р§С‚Рѕ СѓР·РЅР°С‘Рј? Р—Р°РїРѕР»РЅРёРј С‚Р°Р±Р»РёС†Сѓ РІРјРµСЃС‚Рµ.",type:"example",icon:"рџ“ќ",understandingDelta:8,attentionDelta:11,difficulty:"easy",isBad:!1},{label:"В«РћР±СЉСЏСЃРЅРё СЃРѕСЃРµРґСѓВ»",text:"РџРѕРІРѕСЂР°С‡РёРІР°РµРјСЃСЏ Рє СЃРѕСЃРµРґСѓ Рё Р·Р° 1 РјРёРЅСѓС‚Сѓ РѕР±СЉСЏСЃРЅСЏРµРј С‚РµРјСѓ СЃРІРѕРёРјРё СЃР»РѕРІР°РјРё. РџРѕРµС…Р°Р»Рё!",type:"question",icon:"рџ‘Ґ",understandingDelta:5,attentionDelta:16,difficulty:"medium",isBad:!1}]],tl=[{label:"Р”РёРєС‚РѕРІРєР° РѕРїСЂРµРґРµР»РµРЅРёСЏ",text:"Р’СЃРµ Р·Р°РїРёСЃС‹РІР°РµРј. РњРµРґР»РµРЅРЅРѕ. РЎР»РѕРІРѕ Р·Р° СЃР»РѕРІРѕРј. РќРµ РѕС‚РІР»РµРєР°С‚СЊСЃСЏ.",type:"theory",icon:"рџґ",understandingDelta:2,attentionDelta:-18,difficulty:"hard",isBad:!0},{label:"РџРµСЂРµСЃРєР°Р· РёР· СѓС‡РµР±РЅРёРєР° РґРѕСЃР»РѕРІРЅРѕ",text:"Р—Р°С‡РёС‚С‹РІР°СЋ РїР°СЂР°РіСЂР°С„ СЃР»РѕРІРѕ РІ СЃР»РѕРІРѕ. Р‘СѓРґРµС‚ РЅР° СЌРєР·Р°РјРµРЅРµ вЂ” СЃР»СѓС€Р°Р№С‚Рµ РІРЅРёРјР°С‚РµР»СЊРЅРѕ.",type:"theory",icon:"рџ“•",understandingDelta:3,attentionDelta:-15,difficulty:"hard",isBad:!0},{label:"РњРѕР»С‡Р°Р»РёРІРѕРµ С‡С‚РµРЅРёРµ 5 РјРёРЅСѓС‚",text:"РћС‚РєСЂС‹РІР°РµРј СѓС‡РµР±РЅРёРє СЃС‚СЂР°РЅРёС†Р° 47. Р§РёС‚Р°РµРј РїСЂРѕ СЃРµР±СЏ. Р’РѕРїСЂРѕСЃРѕРІ РЅРµ Р·Р°РґР°С‘Рј.",type:"theory",icon:"рџ”‡",understandingDelta:1,attentionDelta:-20,difficulty:"hard",isBad:!0}];function ug(s,e){const n=(s.split("").reduce((i,r)=>i+r.charCodeAt(0),0)+e*2)%el.length;return[...el[n]].sort(()=>Math.random()-.5)}class pg{constructor(){w(this,"bus",qt.getInstance());w(this,"gradebook",qs.getInstance());w(this,"attention",js.getInstance());w(this,"subject","math");w(this,"classGrade",9);w(this,"dayNumber",1);w(this,"completedTopics",[]);w(this,"phase","explanation");w(this,"topic","");w(this,"topicEntry",null);w(this,"rounds",[]);w(this,"currentRound",0);w(this,"taskConfig",null);w(this,"activeTask",null);w(this,"activeHomework",null);w(this,"notebooks",[]);w(this,"hwGiven",!1);w(this,"hwDifficulty",null);w(this,"prepUnderstandingBonus",0);w(this,"prepAttentionBonus",0)}init(e,t,n,i){this.subject=e,this.classGrade=t,this.dayNumber=n,this.completedTopics=[...i],this.phase="explanation",this.rounds=[],this.currentRound=0,this.taskConfig=null,this.activeTask=null,this.activeHomework=null,this.notebooks=[],this.hwGiven=!1,this.hwDifficulty=null,this.topicEntry=og(e,t,i),this.topic=this.topicEntry?.topic??lg[e]?.[0]??e;const r=["intro","main","conclusion"];for(let a=0;a<3;a++){let o;if(this.topicEntry?(o=[...this.topicEntry.options.map((l,c)=>Qo(l,c))],a>0&&o.sort(()=>Math.random()-.5)):o=ug(this.topic,a),a===2)if(this.topicEntry?.badOption){const l=Qo(this.topicEntry.badOption,o.length-1);l.isBad=!0,o[o.length-1]=l}else{const l=Math.floor(Math.random()*tl.length);o[o.length-1]={...tl[l]}}this.rounds.push({topic:this.topic,options:o,chosen:null,phase:r[a]})}this.bus.emit("lessonStarted",{topic:this.topic,subject:e,classGrade:t})}getPhase(){return this.phase}setPhase(e){this.phase=e}getTopic(){return this.topic}getRounds(){return this.rounds}getCurrentRound(){return this.rounds[this.currentRound]}getNotebooks(){return this.notebooks}getTaskConfig(){return this.taskConfig}getActiveTask(){return this.activeTask}getActiveHomework(){return this.activeHomework}getTopicEntry(){return this.topicEntry}setPrepBonus(e,t){this.prepUnderstandingBonus=e,this.prepAttentionBonus=t}chooseExplanationOption(e,t){if(this.phase!=="explanation")return;const n=this.rounds[this.currentRound];if(!n||n.chosen!==null)return;this.currentRound===0&&(this.prepUnderstandingBonus||this.prepAttentionBonus)&&(t.forEach(a=>{a.modifyStat("understanding",this.prepUnderstandingBonus),a.modifyStat("attention",this.prepAttentionBonus)}),this.prepUnderstandingBonus=0,this.prepAttentionBonus=0),n.chosen=e;const i=n.options[e],r=this.topicEntry?.options[e];t.forEach(a=>{let o=i.understandingDelta;r&&(o+=r.typeBonus[a.data.type]??0);const l=Math.max(.08,Math.min(1,a.data.stats.attention/85)),c=Math.round(o*l),d=a.data.type==="bully"?-2:a.data.type==="lazy"?-1:0,h=i.attentionDelta+d;a.modifyStat("understanding",c),a.modifyStat("attention",h);const u=a.data.stats.understanding;u>=80?a.setEmotion("happy"):u<40&&a.setEmotion("confused")}),this.attention.boost(i.attentionDelta),this.bus.emit("explanationChosen",{round:this.currentRound,option:i}),this.currentRound++,this.currentRound>=this.rounds.length?(this.phase="tasks",this.bus.emit("phaseChanged",{phase:"tasks"})):this.bus.emit("nextExplanationRound",{round:this.currentRound})}setTaskConfig(e,t,n="written"){if(this.phase!=="tasks")return;this.taskConfig=e;const i=this.topicEntry?.tasks[e.difficulty]??{text:`Р—Р°РґР°РЅРёРµ РїРѕ С‚РµРјРµ: ${this.topic} (${e.difficulty})`};this.activeTask={mode:n,difficulty:e.difficulty,data:i};const r={easy:.7,medium:1,hard:1.4}[e.difficulty],a=n==="board"?1.1:1;t.forEach(o=>{let l=10*r*a*(o.data.stats.understanding/100);e.difficulty==="hard"?o.data.type==="genius"?l*=1.6:o.data.type==="lazy"||o.data.type==="bully"?l*=.4:o.data.type==="anxious"&&(l*=.7):e.difficulty==="easy"&&(o.data.type==="genius"?l*=.6:o.data.type==="lazy"&&(l*=1.3)),n==="board"&&(o.data.type==="bully"&&o.modifyStat("behavior",5),o.data.type==="lazy"&&o.modifyStat("attention",5)),o.modifyStat("understanding",l*.4),o.setEmotion("writing")}),this.bus.emit("tasksStarted",{config:e,task:i,mode:n})}finishTasks(e){if(this.phase!=="tasks")return;this.phase="grading";const t=[...e].sort(()=>Math.random()-.5),n=t.slice(0,Math.min(4,t.length)),i=this.taskConfig?.difficulty??"medium";this.notebooks=n.map(r=>({studentId:r.data.id,studentName:r.data.name,errors:hg(this.subject,i,r.data.stats.behavior),content:dg(this.subject),grade:null})),e.forEach(r=>r.setEmotion("neutral")),this.bus.emit("phaseChanged",{phase:"grading"})}gradeNotebook(e,t){if(this.phase!=="grading")return;const n=this.notebooks.find(i=>i.studentId===e);n&&(n.grade=Math.max(2,Math.min(5,t)),this.gradebook.add({studentId:e,studentName:n.studentName,grade:n.grade,topic:this.topic,lessonDay:this.dayNumber,type:"notebook"}),this.bus.emit("notebookGraded",{studentId:e,grade:n.grade}))}finishGrading(){this.phase==="grading"&&(this.notebooks.forEach(e=>{e.grade===null&&this.gradeNotebook(e.studentId,3)}),this.phase="homework",this.bus.emit("phaseChanged",{phase:"homework"}))}setHomework(e,t,n){if(this.phase==="homework"){if(this.hwGiven=e,this.hwDifficulty=e?t:null,e){const i=this.topicEntry?.homework[t]??`Р”РѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ РїРѕ С‚РµРјРµ В«${this.topic}В» вЂ” СѓСЂРѕРІРµРЅСЊ ${t}`;this.activeHomework={difficulty:t,text:i},n.forEach(r=>{r.data.hwDone=!1;const a=t==="hard"?r.data.type==="genius"?5:-15:t==="easy"?r.data.type==="lazy"?8:5:0;r.modifyStat("motivation",a)})}this.phase="done",this.bus.emit("phaseChanged",{phase:"done"})}}skipHomework(e){this.setHomework(!1,"easy",e)}buildReport(e){const t=e.filter(l=>l.data.stats.understanding>=60).length,n=e.reduce((l,c)=>l+c.data.stats.understanding,0)/e.length,i=this.notebooks.filter(l=>l.grade!==null).length,r=i>0?this.notebooks.reduce((l,c)=>l+(c.grade??3),0)/i:3,a=Math.round(20+t*2+(r-2)*8+(this.hwGiven?10:0)),o=Math.round((t/e.length-.5)*6);return{topic:this.topic,subject:this.subject,classGrade:this.classGrade,dayNumber:this.dayNumber,understoodCount:t,avgUnderstanding:Math.round(n),notebookGrades:this.notebooks,xpEarned:a,repDelta:o,hwGiven:this.hwGiven,hwDifficulty:this.hwDifficulty}}}const nl={math:["Р—Р°РґР°С‡Р° 1: Р РµС€РёС‚Рµ СѓСЂР°РІРЅРµРЅРёРµ 3xВІ - 5x + 2 = 0","Р—Р°РґР°С‡Р° 2: РќР°Р№РґРёС‚Рµ РїСЂРѕРёР·РІРѕРґРЅСѓСЋ f(x) = xВі - 4x + 7","Р—Р°РґР°С‡Р° 3: Р’С‹С‡РёСЃР»РёС‚Рµ sinВІО± + cosВІО± РїСЂРё О± = 30В°","Р—Р°РґР°С‡Р° 4: РќР°Р№РґРёС‚Рµ РєРѕСЂРЅРё: |x - 3| = 7","Р—Р°РґР°С‡Р° 5: Р›РѕРіР°СЂРёС„Рј: logв‚‚(32) = ?"],physics:["Р—Р°РґР°С‡Р° 1: РўРµР»Рѕ РјР°СЃСЃРѕР№ 5 РєРі РґРІРёР¶РµС‚СЃСЏ СЃРѕ СЃРєРѕСЂРѕСЃС‚СЊСЋ 10 Рј/СЃ. РљРёРЅРµС‚РёС‡РµСЃРєР°СЏ СЌРЅРµСЂРіРёСЏ?","Р—Р°РґР°С‡Р° 2: РЎРѕРїСЂРѕС‚РёРІР»РµРЅРёРµ С†РµРїРё: Rв‚Ѓ=4 РћРј, Rв‚‚=6 РћРј РїР°СЂР°Р»Р»РµР»СЊРЅРѕ. РћР±С‰РµРµ R=?","Р—Р°РґР°С‡Р° 3: Р—Р°РєРѕРЅ РљСѓР»РѕРЅР°: Р·Р°СЂСЏРґС‹ 2РјРєРљР» Рё 3РјРєРљР» РЅР° СЂР°СЃСЃС‚РѕСЏРЅРёРё 0.1 Рј. РЎРёР»Р°=?","Р—Р°РґР°С‡Р° 4: РџРµСЂРёРѕРґ РєРѕР»РµР±Р°РЅРёР№ РјР°СЏС‚РЅРёРєР° РґР»РёРЅРѕР№ L=1 Рј. T=?","Р—Р°РґР°С‡Р° 5: РЎРєРѕСЂРѕСЃС‚СЊ СЃРІРµС‚Р° РІ СЃС‚РµРєР»Рµ (n=1.5). v=?"],chemistry:["Р—Р°РґР°С‡Р° 1: РЎРѕСЃС‚Р°РІСЊС‚Рµ СѓСЂР°РІРЅРµРЅРёРµ СЂРµР°РєС†РёРё РіРѕСЂРµРЅРёСЏ РјРµС‚Р°РЅР° CHв‚„","Р—Р°РґР°С‡Р° 2: РџРµСЂРµС‡РёСЃР»РёС‚Рµ С‚РёРїС‹ С…РёРјРёС‡РµСЃРєРёС… СЃРІСЏР·РµР№ СЃ РїСЂРёРјРµСЂР°РјРё","Р—Р°РґР°С‡Р° 3: pH СЂР°СЃС‚РІРѕСЂР° HCl СЃ РєРѕРЅС†РµРЅС‚СЂР°С†РёРµР№ 0.01 РјРѕР»СЊ/Р»?","Р—Р°РґР°С‡Р° 4: Р­Р»РµРєС‚СЂРѕРЅРЅР°СЏ РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ Р°С‚РѕРјР° РЅР°С‚СЂРёСЏ (Na, Z=11)?","Р—Р°РґР°С‡Р° 5: Р РµР°РєС†РёСЏ РЅРµР№С‚СЂР°Р»РёР·Р°С†РёРё: NaOH + HCl в†’ ?"],history:["Р’РѕРїСЂРѕСЃ 1: Р’ РєР°РєРѕРј РіРѕРґСѓ РЅР°С‡Р°Р»Р°СЃСЊ Р’РµР»РёРєР°СЏ РћС‚РµС‡РµСЃС‚РІРµРЅРЅР°СЏ РІРѕР№РЅР°?","Р’РѕРїСЂРѕСЃ 2: РќР°Р·РѕРІРёС‚Рµ РїСЂРёС‡РёРЅС‹ РџРµСЂРІРѕР№ РјРёСЂРѕРІРѕР№ РІРѕР№РЅС‹ (РЅРµ РјРµРЅРµРµ 3)","Р’РѕРїСЂРѕСЃ 3: РљС‚Рѕ С‚Р°РєРѕР№ РџС‘С‚СЂ Р’РµР»РёРєРёР№? Р•РіРѕ СЂРµС„РѕСЂРјС‹.","Р’РѕРїСЂРѕСЃ 4: Р”Р°С‚Р° Рё Р·РЅР°С‡РµРЅРёРµ РљСѓР»РёРєРѕРІСЃРєРѕР№ Р±РёС‚РІС‹?","Р’РѕРїСЂРѕСЃ 5: РћСЃРЅРѕРІРЅС‹Рµ СЃРѕР±С‹С‚РёСЏ СЂРµРІРѕР»СЋС†РёРё 1917 РіРѕРґР°."],literature:["Р’РѕРїСЂРѕСЃ 1: Р“Р»Р°РІРЅС‹Рµ С‚РµРјС‹ СЂРѕРјР°РЅР° В«Р’РѕР№РЅР° Рё РјРёСЂВ» РўРѕР»СЃС‚РѕРіРѕ","Р’РѕРїСЂРѕСЃ 2: РћР±СЂР°Р· Р Р°СЃРєРѕР»СЊРЅРёРєРѕРІР° РІ В«РџСЂРµСЃС‚СѓРїР»РµРЅРёРё Рё РЅР°РєР°Р·Р°РЅРёРёВ»","Р’РѕРїСЂРѕСЃ 3: РЎРјС‹СЃР» РЅР°Р·РІР°РЅРёСЏ В«РњС‘СЂС‚РІС‹Рµ РґСѓС€РёВ» Р“РѕРіРѕР»СЏ","Р’РѕРїСЂРѕСЃ 4: РљРѕРЅС„Р»РёРєС‚ РІ РїСЊРµСЃРµ В«Р“СЂРѕР·Р°В» РћСЃС‚СЂРѕРІСЃРєРѕРіРѕ","Р’РѕРїСЂРѕСЃ 5: Р›РёСЂРёС‡РµСЃРєРёР№ РіРµСЂРѕР№ РїРѕСЌР·РёРё РџСѓС€РєРёРЅР°"],russian:["Р—Р°РґР°РЅРёРµ 1: Р Р°СЃСЃС‚Р°РІСЊС‚Рµ Р·РЅР°РєРё РїСЂРµРїРёРЅР°РЅРёСЏ РІ РїСЂРµРґР»РѕР¶РµРЅРёРё","Р—Р°РґР°РЅРёРµ 2: РњРѕСЂС„РµРјРЅС‹Р№ СЂР°Р·Р±РѕСЂ СЃР»РѕРІР° В«РїРµСЂРµСЃРјРѕС‚СЂРёС€СЊВ»","Р—Р°РґР°РЅРёРµ 3: РЎРёРЅС‚Р°РєСЃРёС‡РµСЃРєРёР№ СЂР°Р·Р±РѕСЂ РїСЂРµРґР»РѕР¶РµРЅРёСЏ","Р—Р°РґР°РЅРёРµ 4: РќР°Р№РґРёС‚Рµ РІСЃРµ РїСЂРёС‡Р°СЃС‚РЅС‹Рµ РѕР±РѕСЂРѕС‚С‹ РІ С‚РµРєСЃС‚Рµ","Р—Р°РґР°РЅРёРµ 5: РќР°РїРёС€РёС‚Рµ РјРёРЅРё-СЃРѕС‡РёРЅРµРЅРёРµ РїРѕ РґР°РЅРЅРѕРјСѓ С‚РµРєСЃС‚Сѓ"]},il={math:["РќРµРІРµСЂРЅС‹Р№ Р·РЅР°Рє Сѓ РєРѕСЂРЅСЏ","РђСЂРёС„РјРµС‚РёС‡РµСЃРєР°СЏ РѕС€РёР±РєР°","РќРµРїСЂР°РІРёР»СЊРЅРѕРµ РїСЂРёРјРµРЅРµРЅРёРµ С„РѕСЂРјСѓР»С‹","РџСЂРѕРїСѓС‰РµРЅ РѕРґРёРЅ РєРѕСЂРµРЅСЊ","РћС€РёР±РєР° РІ СЂР°СЃРєСЂС‹С‚РёРё СЃРєРѕР±РѕРє"],physics:["РќРµРІРµСЂРЅС‹Рµ РµРґРёРЅРёС†С‹ РёР·РјРµСЂРµРЅРёСЏ","РћС€РёР±РєР° РІ С„РѕСЂРјСѓР»Рµ","РќРµРІРµСЂРЅРѕРµ РЅР°РїСЂР°РІР»РµРЅРёРµ РІРµРєС‚РѕСЂР°","РђСЂРёС„РјРµС‚РёС‡РµСЃРєР°СЏ РѕС€РёР±РєР°","РџСЂРѕРїСѓС‰РµРЅ Р·РЅР°Рє РјРёРЅСѓСЃ"],chemistry:["РќРµРІРµСЂРЅРѕ СЂР°СЃСЃС‚Р°РІР»РµРЅС‹ РєРѕСЌС„С„РёС†РёРµРЅС‚С‹","РћС€РёР±РєР° РІ С„РѕСЂРјСѓР»Рµ РІРµС‰РµСЃС‚РІР°","РќР°СЂСѓС€РµРЅ Р·Р°РєРѕРЅ СЃРѕС…СЂР°РЅРµРЅРёСЏ РјР°СЃСЃ","РќРµРІРµСЂРЅС‹Р№ Р·Р°СЂСЏРґ РёРѕРЅР°","РџСЂРѕРїСѓС‰РµРЅ РїСЂРѕРґСѓРєС‚ СЂРµР°РєС†РёРё"],history:["РќРµС‚РѕС‡РЅР°СЏ РґР°С‚Р°","РџРµСЂРµРїСѓС‚Р°РЅС‹ РёРјРµРЅР°","РќРµ СѓРєР°Р·Р°РЅР° РїСЂРёС‡РёРЅРЅРѕ-СЃР»РµРґСЃС‚РІРµРЅРЅР°СЏ СЃРІСЏР·СЊ","РќРµРїРѕР»РЅС‹Р№ РѕС‚РІРµС‚","РћС€РёР±РєР° РІ С…СЂРѕРЅРѕР»РѕРіРёРё"],literature:["РќРµРІРµСЂРЅР°СЏ С†РёС‚Р°С‚Р°","РћС€РёР±РєР° РІ РёРЅС‚РµСЂРїСЂРµС‚Р°С†РёРё","РќРµ СѓРєР°Р·Р°РЅС‹ С‡РµСЂС‚С‹ С…Р°СЂР°РєС‚РµСЂР°","РќРµС‚ СЃСЃС‹Р»РєРё РЅР° С‚РµРєСЃС‚","РџРѕРІРµСЂС…РЅРѕСЃС‚РЅС‹Р№ Р°РЅР°Р»РёР·"],russian:["РџСѓРЅРєС‚СѓР°С†РёРѕРЅРЅР°СЏ РѕС€РёР±РєР°","Р“СЂР°РјРјР°С‚РёС‡РµСЃРєР°СЏ РѕС€РёР±РєР°","РќРµРІРµСЂРЅС‹Р№ РјРѕСЂС„РµРјРЅС‹Р№ СЂР°Р·Р±РѕСЂ","РћС€РёР±РєР° СЃРѕРіР»Р°СЃРѕРІР°РЅРёСЏ","РќР°СЂСѓС€РµРЅРёРµ РЅРѕСЂРјС‹"]};function fg(s,e,t){const n=nl[s]??nl.math,i=["РљРћРќРўР РћР›Р¬РќРђРЇ Р РђР‘РћРўРђ",`${s.toUpperCase()} В· ${t} РєР»Р°СЃСЃ`];return n.slice(0,3+Math.floor(e*2)).forEach((a,o)=>{i.push(""),i.push(a),e>.75?i.push("РћС‚РІРµС‚: [РїРѕРєР°Р·Р°РЅ РІРµСЂРЅС‹Р№ С…РѕРґ СЂРµС€РµРЅРёСЏ]"):e>.45?i.push("РћС‚РІРµС‚: [С‡Р°СЃС‚РёС‡РЅРѕ РІРµСЂРЅРѕ, РµСЃС‚СЊ РЅРµРґРѕС‡С‘С‚С‹]"):i.push("РћС‚РІРµС‚: [РїРѕРїС‹С‚РєР°, РЅРѕ РґРѕРїСѓС‰РµРЅС‹ СЃСѓС‰РµСЃС‚РІРµРЅРЅС‹Рµ РѕС€РёР±РєРё]")}),i}function mg(s,e){return[...il[s]??il.math].sort(()=>Math.random()-.5).slice(0,e)}class sl{generateExam(e,t,n){return e.map(i=>{const r=i.data.stats.understanding/100,a=Math.max(.1,Math.min(.95,r+(Math.random()-.5)*.25));let o;a>=.85?o=5:a>=.7?o=4:a>=.5?o=3:o=2;const l=Math.max(0,5-o)+Math.floor(Math.random()*2),c=mg(t,l),d=fg(t,a,n);return{studentId:i.data.id,studentName:i.data.name,errors:c,grade:null,content:d}})}getAverageGrade(e){const t=e.filter(n=>n.grade!==null);return t.length===0?0:t.reduce((n,i)=>n+(i.grade??0),0)/t.length}static isPromotionEligible(e){return e>=4}}function gg(){return{type:"troublemaker",title:"Troublemaker!",icon:"рџ¤",desc:"One student is disrupting the whole class.",choices:[{label:"Issue a warning",icon:"рџ—ЈпёЏ",effect:s=>{const e=s.find(t=>t.data.stats.behavior<50)??s[0];return e.modifyStat("behavior",10),`Warning issued to ${e.data.name}.`}},{label:"Remove from class",icon:"рџљЄ",effect:s=>{const e=s.find(t=>t.data.stats.behavior<50)??s[0];return e.modifyStat("behavior",25),e.modifyStat("motivation",-20),`${e.data.name} was sent out.`}},{label:"Ignore it",icon:"рџ™„",effect:s=>"The class keeps making noise. Attention drops."}]}}function xg(){return{type:"fire_alarm",title:"Fire Alarm!",icon:"рџљЁ",desc:"The fire alarm went off. The entire schedule is disrupted.",choices:[{label:"Calmly evacuate the class",icon:"рџЏѓ",effect:s=>"Class evacuated safely. в€’10 min lesson time, +reputation."},{label:"Continue the lesson",icon:"рџ“љ",effect:s=>"Safety violation! в€’reputation."}]}}function yg(){return{type:"hw_sabotage",title:"Half the class skipped homework!",icon:"рџ¬",desc:"More than half the class showed up without their homework.",choices:[{label:"Give failing grades",icon:"вњ‚пёЏ",effect:s=>(s.forEach(e=>{e.data.hwDone||e.modifyStat("motivation",-10)}),"Failing marks given to all offenders.")},{label:"Give a second chance",icon:"рџ™Џ",effect:s=>(s.forEach(e=>{e.data.hwDone||e.modifyStat("motivation",5)}),"Second chance given. Motivation rises.")},{label:"Ask about the reasons",icon:"вќ“",effect:s=>"Students appreciated the understanding."}]}}function vg(s,e){return{type:"genius_question",title:"Tough question!",icon:"рџ¤“",desc:`A top student asks a tricky question about "${e}" (${s}).`,choices:[{label:"Answer the question",icon:"рџ’Ў",effect:t=>"Class is impressed! +attention, +reputation."},{label:"Cover it next lesson",icon:"рџ“†",effect:t=>"Deferred. The genius is slightly disappointed."},{label:"Ask them to answer it",icon:"рџЋ“",effect:t=>{const n=t.find(i=>i.data.type==="genius")??t[0];return n.modifyStat("motivation",15),`${n.data.name} happily answers!`}}]}}function _g(){return{type:"phone_ring",title:"Someone's phone is ringing!",icon:"рџ“±",desc:"A loud ringtone interrupts the lesson. The class giggles.",choices:[{label:"Confiscate the phone",icon:"рџ ",effect:s=>"Order restored. в€’mood for the offender."},{label:"Make a joke and continue",icon:"рџ„",effect:s=>"Class laughs. +mood! Meme moment."}]}}function bg(){return{type:"student_conflict",title:"Student conflict!",icon:"вљ”пёЏ",desc:"Two students had a fight and are disrupting the class.",choices:[{label:"Defuse the situation",icon:"рџ•ЉпёЏ",effect:s=>(s.slice(0,2).forEach(e=>e.modifyStat("behavior",10)),"Conflict resolved. Lesson continues.")},{label:"Call both to the board",icon:"рџ“‹",effect:s=>(s.slice(0,2).forEach(e=>{e.modifyStat("behavior",5),e.modifyStat("attention",15)}),"Giving them a task together will settle things.")}]}}class Mg{constructor(){w(this,"bus",qt.getInstance());w(this,"lastEventMinute",-30);w(this,"minInterval",12);w(this,"subject","");w(this,"topic","")}init(e,t){this.subject=e,this.topic=t,this.lastEventMinute=-30}maybeSpawnEvent(e){if(e-this.lastEventMinute<this.minInterval||Math.random()>.35)return null;this.lastEventMinute=e;const t=[gg(),xg(),yg(),vg(this.subject,this.topic),_g(),bg()];return t[Math.floor(Math.random()*t.length)]}}const kn=[{id:"novice",name:"Rookie Teacher",icon:"рџ“–",xpRequired:0,lessonsRequired:0,repRequired:0,salaryBonus:0},{id:"cat2",name:"Teacher Cat. II",icon:"рџ“—",xpRequired:300,lessonsRequired:8,repRequired:55,salaryBonus:.1},{id:"cat1",name:"Teacher Cat. I",icon:"рџ“",xpRequired:1e3,lessonsRequired:20,repRequired:75,salaryBonus:.2},{id:"highest",name:"Expert Teacher",icon:"рџЏ†",xpRequired:3e3,lessonsRequired:40,repRequired:110,salaryBonus:.35},{id:"honored",name:"Honored Teacher",icon:"рџЊџ",xpRequired:8e3,lessonsRequired:80,repRequired:130,salaryBonus:.6},{id:"zavuch",name:"Deputy Principal",icon:"рџЏ›пёЏ",xpRequired:15e3,lessonsRequired:100,repRequired:140,salaryBonus:.8},{id:"director",name:"School Director",icon:"рџ‘”",xpRequired:3e4,lessonsRequired:200,repRequired:180,salaryBonus:1.2}];class Eg{constructor(){w(this,"_rankIndex",0)}get rank(){return kn[this._rankIndex]}get rankIndex(){return this._rankIndex}isVP(){return this.rank.id==="zavuch"||this.rank.id==="director"}isDirector(){return this.rank.id==="director"}checkPromotion(e,t,n){const i=kn[this._rankIndex+1];return!i||i.id==="zavuch"||i.id==="director"?null:e>=i.xpRequired&&t>=i.lessonsRequired&&n>=i.repRequired?(this._rankIndex++,this.rank):null}checkExamPromotion(e,t,n,i){if(this.rank.id!=="honored")return null;const r=kn.find(a=>a.id==="zavuch");return i>=4&&e>=r.xpRequired&&t>=r.lessonsRequired&&n>=r.repRequired?(this._rankIndex=kn.indexOf(r),this.rank):null}checkDirectorPromotion(e,t){if(this.rank.id!=="zavuch")return null;const n=kn.find(i=>i.id==="director");return e>=6&&t>=n.repRequired?(this._rankIndex=kn.indexOf(n),this.rank):null}load(e){const t=kn.findIndex(n=>n.id===e);t>=0&&(this._rankIndex=t)}forceRank(e){const t=kn.findIndex(n=>n.id===e);t>=0&&(this._rankIndex=t)}}class Sg{constructor(e=8e4){w(this,"_balance");this._balance=e}get balance(){return this._balance}earn(e){this._balance+=e}spend(e){return this._balance<e?!1:(this._balance-=e,!0)}calcWeeklySalary(e,t){return Math.round((8e4+e*400)*(1+t))}}const ta=[{id:"ped1",branch:"pedagogy",tier:1,name:"Р РёС‚РѕСЂРёРєР°",desc:"РћР±СЉСЏСЃРЅРµРЅРёСЏ +20% РІРЅРёРјР°РЅРёСЏ",cost:100,icon:"рџ—ЈпёЏ"},{id:"ped2",branch:"pedagogy",tier:2,name:"РњР°СЃС‚РµСЂ РґРѕСЃРєРё",desc:"Р”РѕСЃРєР° +25% РїРѕРЅРёРјР°РЅРёСЏ",cost:250,icon:"рџ“‹",requires:"ped1"},{id:"ped3",branch:"pedagogy",tier:3,name:"РЎС‚РѕСЂРёС‚РµР»Р»РёРЅРі",desc:"РџСЂРёРјРµСЂС‹ +35% РјРѕС‚РёРІР°С†РёРё",cost:400,icon:"рџ“–",requires:"ped2"},{id:"ped4",branch:"pedagogy",tier:4,name:"РњРµС‚РѕРґРёСЃС‚",desc:"РљСѓР»РґР°СѓРЅС‹ РґРµР№СЃС‚РІРёР№ в€’25%",cost:600,icon:"вљЎ",requires:"ped3"},{id:"ped5",branch:"pedagogy",tier:5,name:"РњР°СЃС‚РµСЂ-РєР»Р°СЃСЃ",desc:"XP Р·Р° РѕР±СЉСЏСЃРЅРµРЅРёСЏ Г—1.5",cost:900,icon:"рџЋ“",requires:"ped4"},{id:"psy1",branch:"psychology",tier:1,name:"Р­РјРїР°С‚РёСЏ",desc:"РџРѕС…РІР°Р»Р° +25% РІРЅРёРјР°РЅРёСЏ",cost:100,icon:"вќ¤пёЏ"},{id:"psy2",branch:"psychology",tier:2,name:"РџСЃРёС…РѕР»РѕРі",desc:"РўСЂРµРІРѕР¶РЅС‹Рµ СѓС‡Р°С‚СЃСЏ Р»СѓС‡С€Рµ",cost:250,icon:"рџ§ ",requires:"psy1"},{id:"psy3",branch:"psychology",tier:3,name:"РњРѕС‚РёРІР°С‚РѕСЂ",desc:"Р—Р°РґР°РЅРёСЏ +50% РјРѕС‚РёРІР°С†РёРё",cost:400,icon:"рџЊџ",requires:"psy2"},{id:"psy4",branch:"psychology",tier:4,name:"РљРѕРЅС„Р»РёРєС‚РѕР»РѕРі",desc:"РљРѕРЅС„Р»РёРєС‚С‹ в€’50% СѓСЂРѕРЅР°",cost:600,icon:"рџ•ЉпёЏ",requires:"psy3"},{id:"psy5",branch:"psychology",tier:5,name:"РќР°СЃС‚Р°РІРЅРёРє",desc:"Р РµРїСѓС‚Р°С†РёСЏ СЂР°СЃС‚С‘С‚ Г—1.5",cost:900,icon:"рџЏ…",requires:"psy4"},{id:"org1",branch:"org",tier:1,name:"РўР°Р№Рј-РјРµРЅ.",desc:"Р¤Р°Р·С‹ СѓСЂРѕРєР° +10% XP",cost:100,icon:"вЏ±пёЏ"},{id:"org2",branch:"org",tier:2,name:"РџР»Р°РЅРёСЂРѕРІС‰РёРє",desc:"Р’РёРєС‚РѕСЂРёРЅР° +40% РІРЅРёРјР°РЅРёСЏ",cost:250,icon:"рџ“†",requires:"org1"},{id:"org3",branch:"org",tier:3,name:"РђРґРјРёРЅРёСЃС‚СЂР°С‚РѕСЂ",desc:"Р—Р°СЂРїР»Р°С‚Р° +10% РІ РЅРµРґРµР»СЋ",cost:400,icon:"рџ’ј",requires:"org2"},{id:"org4",branch:"org",tier:4,name:"РРЅРЅРѕРІР°С‚РѕСЂ",desc:"РћСЃРѕР±С‹Рµ СЃРѕР±С‹С‚РёСЏ Г—2 XP",cost:600,icon:"рџ”¬",requires:"org3"},{id:"org5",branch:"org",tier:5,name:"Р”РёСЂРµРєС‚РѕСЂ",desc:"Р Р°Р·Р±Р»РѕРєРёСЂСѓРµС‚ СЂРµР¶РёРј РґРёСЂРµРєС‚РѕСЂР°",cost:900,icon:"рџЏ›пёЏ",requires:"org4"}];class wg{constructor(){w(this,"unlocked",new Set);w(this,"_points",0)}get points(){return this._points}addPoints(e){this._points+=e}canUnlock(e){const t=ta.find(n=>n.id===e);return!(!t||this._points<t.cost||t.requires&&!this.unlocked.has(t.requires))}unlock(e){const t=ta.find(n=>n.id===e);return!t||!this.canUnlock(e)?!1:(this._points-=t.cost,this.unlocked.add(e),!0)}has(e){return this.unlocked.has(e)}getXPMult(e){let t=1;return e==="explain"&&this.has("ped5")&&(t*=1.5),e==="praise"&&this.has("psy5")&&(t*=1.5),this.has("ped5")&&this.has("psy5")&&(t*=1.1),t}load(e){e.forEach(t=>this.unlocked.add(t))}save(){return[...this.unlocked]}}const Tg="https://api.featherless.ai/v1/chat/completions",Ag="meta-llama/Meta-Llama-3.1-8B-Instruct",rl={theory:["РС‚Р°Рє, РІРЅРёРјР°РЅРёРµ РЅР° РґРѕСЃРєСѓ. РЎРµРіРѕРґРЅСЏ СЂР°Р·Р±РёСЂР°РµРј РєР»СЋС‡РµРІСѓСЋ РєРѕРЅС†РµРїС†РёСЋ...","Р Р°СЃСЃРјРѕС‚СЂРёРј С‚РµРѕСЂРµС‚РёС‡РµСЃРєСѓСЋ РѕСЃРЅРѕРІСѓ СЌС‚РѕР№ С‚РµРјС‹...","Р—Р°РїРёС€РµРј РѕРїСЂРµРґРµР»РµРЅРёРµ Рё С„РѕСЂРјСѓР»Сѓ..."],board:["РЎРјРѕС‚СЂРёС‚Рµ, РєР°Рє СЌС‚Рѕ СЂРµС€Р°РµС‚СЃСЏ РїРѕ С€Р°РіР°Рј:","РќР° РґРѕСЃРєРµ вЂ” Рё СЂР°Р·Р±РµСЂС‘Рј РІРјРµСЃС‚Рµ:","РђР»РіРѕСЂРёС‚Рј СЂРµС€РµРЅРёСЏ С‚Р°РєРѕР№..."],example:["РџСЂРµРґСЃС‚Р°РІСЊС‚Рµ: РІС‹ Р·Р°РєР°Р·С‹РІР°РµС‚Рµ РїРёС†С†Сѓ. Р’РѕС‚ РІР°Рј Рё РїСЂРѕРїРѕСЂС†РёРё!","Р­С‚Рѕ РєР°Рє СЃ РµР·РґРѕР№ РЅР° РІРµР»РѕСЃРёРїРµРґРµ вЂ” СЃРЅР°С‡Р°Р»Р° СЃС‚СЂР°С€РЅРѕ, РїРѕС‚РѕРј СЃР°Рј РµРґРµС€СЊ.","РР· Р¶РёР·РЅРё: РєР°Р¶РґС‹Р№ СЂР°Р·, РєРѕРіРґР° РІС‹ РґРµР»Р°РµС‚Рµ СЃРґР°С‡Сѓ РІ РјР°РіР°Р·РёРЅРµ..."],question:["РљС‚Рѕ РјРѕР¶РµС‚ СЃРєР°Р·Р°С‚СЊ, С‡С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚, РµСЃР»Рё...?","РџСЂРµР¶РґРµ С‡РµРј СЏ РѕР±СЉСЏСЃРЅСЋ, РїРѕРїСЂРѕР±СѓР№С‚Рµ СЃР°РјРё: РїРѕС‡РµРјСѓ С‚Р°Рє?","РРЅС‚РµСЂРµСЃРЅС‹Р№ РІРѕРїСЂРѕСЃ вЂ” РєР°Рє РґСѓРјР°РµС‚Рµ?"]},Cg=["РќРµ С‚Р° С„РѕСЂРјСѓР»Р°","Р’С‹С‡РёСЃР»РёС‚РµР»СЊРЅР°СЏ РѕС€РёР±РєР°","РќРµ Р·Р°РїРёСЃР°РЅ РѕС‚РІРµС‚","РћС€РёР±РєР° РІ Р·РЅР°РєРµ","РќРµРІРµСЂРЅС‹Р№ РІС‹РІРѕРґ","РџСЂРѕРїСѓС‰РµРЅ С€Р°Рі"],al=["РҐРѕСЂРѕС€Р°СЏ РїРѕРїС‹С‚РєР°, РЅРѕ Р·РґРµСЃСЊ РѕС€РёР±РєР°.","РџРѕС‡С‚Рё РІРµСЂРЅРѕ! РџСЂРѕРІРµСЂСЊ РІС‹С‡РёСЃР»РµРЅРёСЏ.","РћС€РёР±РєР° С‚РёРїРёС‡РЅР°СЏ вЂ” Р·Р°РїРѕРјРЅРё РїСЂР°РІРёР»Рѕ.","РЎС‚Р°СЂР°Р»СЃСЏ, РЅРѕ РЅРµ С…РІР°С‚РёР»Рѕ РІРЅРёРјР°С‚РµР»СЊРЅРѕСЃС‚Рё."];class Rg{constructor(e){w(this,"apiKey");w(this,"enabled",!0);this.apiKey=e,e||(this.enabled=!1)}async call(e,t=120){if(!this.enabled)throw new Error("no key");const n=await fetch(Tg,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:Ag,messages:e,max_tokens:t,temperature:.85})});if(!n.ok)throw new Error(`API ${n.status}`);return(await n.json()).choices?.[0]?.message?.content?.trim()??""}async getExplanationLine(e,t,n){try{const i=`РўС‹ СѓС‡РёС‚РµР»СЊ ${n} РІ СЂРѕСЃСЃРёР№СЃРєРѕР№ С€РєРѕР»Рµ. РћР±СЉСЏСЃРЅРё СѓС‡РµРЅРёРєР°Рј 9 РєР»Р°СЃСЃР° С‚РµРјСѓ "${e}" РјРµС‚РѕРґРѕРј: ${t}. РћРґРЅРѕвЂ“РґРІР° РїСЂРµРґР»РѕР¶РµРЅРёСЏ, СЂР°Р·РіРѕРІРѕСЂРЅС‹Рј СЏР·С‹РєРѕРј, РјРѕР¶РЅРѕ СЃ СЋРјРѕСЂРѕРј.`;return await this.call([{role:"user",content:i}],80)}catch{const i=rl[t]??rl.theory;return i[Math.floor(Math.random()*i.length)]}}async getNotebookErrors(e,t,n){try{const i=`РЈС‡РµРЅРёРє "${n}" СЂРµС€Р°Р» Р·Р°РґР°С‡Сѓ РїРѕ С‚РµРјРµ "${e}" (СЃР»РѕР¶РЅРѕСЃС‚СЊ: ${t}). РџРµСЂРµС‡РёСЃР»Рё 2вЂ“3 РєРѕРЅРєСЂРµС‚РЅС‹С… РѕС€РёР±РєРё РєРѕС‚РѕСЂС‹Рµ РѕРЅ РјРѕРі РґРѕРїСѓСЃС‚РёС‚СЊ, РєСЂР°С‚РєРѕ, РїРѕ РѕРґРЅРѕР№ С„СЂР°Р·Рµ РєР°Р¶РґР°СЏ. РўРѕР»СЊРєРѕ СЃРїРёСЃРѕРє С‡РµСЂРµР· 
.`;return(await this.call([{role:"user",content:i}],100)).split(`
`).map(a=>a.replace(/^\d+\.\s*/,"").trim()).filter(Boolean).slice(0,3)}catch{return Cg.sort(()=>Math.random()-.5).slice(0,2)}}async getGradeFeedback(e,t){try{const n=t.join("; "),i=`РЈС‡РёС‚РµР»СЊ СЃС‚Р°РІРёС‚ РѕС†РµРЅРєСѓ ${e} Р·Р° С‚РµС‚СЂР°РґСЊ. РћС€РёР±РєРё: ${n||"РЅРµС‚"}. РћРґРЅР° С„СЂР°Р·Р°-РєРѕРјРјРµРЅС‚Р°СЂРёР№ (СЂР°Р·РіРѕРІРѕСЂРЅРѕ, РјРѕР¶РЅРѕ РёСЂРѕРЅРёС‡РЅРѕ).`;return await this.call([{role:"user",content:i}],60)}catch{return al[Math.floor(Math.random()*al.length)]}}async getEventLine(e,t){try{const n=t?`РЈС‡РµРЅРёРє ${t}.`:"",i=`РљРѕСЂРѕС‚РєР°СЏ (1 РїСЂРµРґР»РѕР¶РµРЅРёРµ) СЂРµР°РєС†РёСЏ СѓС‡РёС‚РµР»СЏ РЅР° СЃРѕР±С‹С‚РёРµ "${e}" РІ РєР»Р°СЃСЃРµ. ${n} Р Р°Р·РіРѕРІРѕСЂРЅС‹Р№ СЃС‚РёР»СЊ.`;return await this.call([{role:"user",content:i}],60)}catch{return"РЎРёС‚СѓР°С†РёСЏ РІ РєР»Р°СЃСЃРµ РІС‹С…РѕРґРёС‚ РёР·-РїРѕРґ РєРѕРЅС‚СЂРѕР»СЏ!"}}}class Dg{constructor(e){w(this,"api");w(this,"bus",qt.getInstance());this.api=e}reactToExplanation(e,t,n){e.forEach(i=>{const r=i.data.stats.understanding;r>=80?i.setEmotion("happy"):r<=35?i.setEmotion("confused"):n<0?i.setEmotion("bored"):i.setEmotion("neutral")})}reactToTasks(e,t){e.forEach(n=>{const i=n.data.stats.understanding;t==="hard"&&i<50?n.setEmotion("confused"):t==="easy"&&i>70?n.setEmotion("bored"):n.setEmotion("writing")})}simulateHWCompletion(e,t){const n={easy:0,medium:15,hard:30};e.forEach(i=>{const r=(i.data.stats.motivation+i.data.stats.behavior)/2-n[t];i.data.hwDone=Math.random()*100<r})}behaviorTick(e){e.forEach(t=>{const{attention:n,behavior:i,motivation:r}=t.data.stats;if(n<25&&i<40&&Math.random()<.08){t.setEmotion("troubled"),this.bus.emit("studentDisrupting",{studentId:t.data.id,studentName:t.data.name});return}if(n<20&&r<30){t.setEmotion("bored");return}if(n>75&&r>70){t.setEmotion("happy");return}})}async getStudentReactionBubble(e,t){const n=e.data.type,i=e.data.stats.attention>60?"РІРЅРёРјР°С‚РµР»СЊРЅС‹Р№":"СЃРєСѓС‡Р°СЋС‰РёР№",r={genius:`РЈС‡РµРЅРёРє-РѕС‚Р»РёС‡РЅРёРє СЂРµР°РіРёСЂСѓРµС‚ РЅР° "${t}". 1 РєРѕСЂРѕС‚РєР°СЏ С„СЂР°Р·Р° (СѓРјРЅР°СЏ, РёРЅРѕРіРґР° Р·Р°РЅСѓРґРЅР°СЏ).`,rebel:`РЈС‡РµРЅРёРє-С…СѓР»РёРіР°РЅ СЂРµР°РіРёСЂСѓРµС‚ РЅР° "${t}". 1 РєРѕСЂРѕС‚РєР°СЏ С„СЂР°Р·Р° (РґРµСЂР·РєР°СЏ).`,average:`РћР±С‹С‡РЅС‹Р№ ${i} СѓС‡РµРЅРёРє СЂРµР°РіРёСЂСѓРµС‚ РЅР° "${t}". РћС‡РµРЅСЊ РєРѕСЂРѕС‚РєР°СЏ С„СЂР°Р·Р°.`,shy:`РўРёС…РёР№ ${i} СѓС‡РµРЅРёРє СЂРµР°РіРёСЂСѓРµС‚ РЅР° "${t}". 1 С‚РёС…Р°СЏ С„СЂР°Р·Р°.`,jester:`РЈС‡РµРЅРёРє-С€СѓС‚ СЂРµР°РіРёСЂСѓРµС‚ РЅР° "${t}". 1 СЃРјРµС€РЅР°СЏ С„СЂР°Р·Р°.`},a=r[n]??r.average;try{return await this.api.call([{role:"user",content:a}],40)}catch{const o={genius:["Р­С‚Рѕ РЅРµС‚РѕС‡РЅРѕ...","РЇ РїСЂРѕРІРµСЂРёР», Рё С„РѕСЂРјСѓР»Р° РґСЂСѓРіР°СЏ.","РРЅС‚РµСЂРµСЃРЅРѕ!"],rebel:["РЎРєСѓРєР°Р¶СѓС…Р°.","Р’С‹ СЃРµСЂСЊС‘Р·РЅРѕ?","РњРЅРµ РІСЃС‘ СЂР°РІРЅРѕ."],average:["РћРє...","Рђ СЌС‚Рѕ Р±СѓРґРµС‚ РІ РєРѕРЅС‚СЂРѕР»СЊРЅРѕР№?","РќРµ РїРѕРЅСЏР»."],shy:["...","РҐРѕСЂРѕС€Рѕ.","РЇ РїРѕРЅСЏР», РєР°Р¶РµС‚СЃСЏ."],jester:["РҐР°С…Р°!","Рђ РјРѕР¶РЅРѕ Р°РЅРµРєРґРѕС‚?","РЇ РЅРµ СЃР»СѓС€Р°Р»."]},l=o[n]??o.average;return l[Math.floor(Math.random()*l.length)]}}}const We={panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",red:"#FF4D4D",blue:"#58A6FF",text:"#E6EDF3",muted:"#8B949E"};class Lg{constructor(){w(this,"root");w(this,"timeEl");w(this,"phaseEl");w(this,"attentionBar");w(this,"attentionVal");w(this,"topicEl");w(this,"repEl");w(this,"moneyEl");w(this,"dayEl");w(this,"crosshair");w(this,"notifArea");w(this,"bus",qt.getInstance());this.root=document.createElement("div"),this.root.id="ew2-hud",this.root.style.cssText=`
      position:fixed; inset:0; pointer-events:none;
      font-family:'Nunito',sans-serif; font-size:14px; color:${We.text};
      z-index:100; user-select:none;
    `,document.body.appendChild(this.root),this.buildLayout(),this.bindEvents()}panel(e){const t=document.createElement("div");return t.style.cssText=`background:${We.panel}cc; border:1px solid ${We.border}; border-radius:8px; padding:8px 12px; backdrop-filter:blur(6px); ${e}`,t}buildLayout(){const e=document.createElement("div");e.style.cssText="position:absolute; top:12px; left:50%; transform:translateX(-50%); display:flex; gap:10px; align-items:center;",this.dayEl=document.createElement("span"),this.dayEl.style.cssText=`color:${We.muted}; font-weight:700; font-size:13px;`,this.dayEl.textContent=W("hud.day")+" 1",this.timeEl=document.createElement("span"),this.timeEl.style.cssText=`color:${We.gold}; font-weight:800; font-size:17px; font-family:'JetBrains Mono',monospace; min-width:52px; text-align:center;`,this.timeEl.textContent="08:30",this.phaseEl=document.createElement("span"),this.phaseEl.style.cssText=`color:${We.mint}; font-weight:700; font-size:13px; padding:2px 10px; background:${We.mint}22; border-radius:20px;`,this.phaseEl.textContent=W("hud.phase.explanation");const t=this.panel("display:flex; gap:14px; align-items:center; padding:6px 18px;");t.append(this.dayEl,this.timeEl,this.phaseEl),e.appendChild(t),this.root.appendChild(e);const n=this.panel("position:absolute; top:12px; right:14px; display:flex; flex-direction:column; gap:4px; min-width:110px;");this.repEl=document.createElement("div"),this.repEl.style.cssText="font-size:13px;",this.repEl.innerHTML=`<span style="color:${We.muted}">${W("hud.reputation")} </span><span style="color:${We.blue}; font-weight:800;">50</span>`,this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText="font-size:13px;",this.moneyEl.innerHTML=`<span style="color:${We.muted}">${W("hud.salary")} </span><span style="color:${We.gold}; font-weight:800;">80 000 в‚Ѕ</span>`,n.append(this.repEl,this.moneyEl),this.root.appendChild(n);const i=this.panel("position:absolute; bottom:14px; left:14px; min-width:220px; display:flex; flex-direction:column; gap:6px;");this.topicEl=document.createElement("div"),this.topicEl.style.cssText=`font-weight:700; font-size:13px; color:${We.mint};`,this.topicEl.textContent=W("hud.topic_prefix")+" вЂ”";const r=document.createElement("div");r.style.cssText=`display:flex; justify-content:space-between; font-size:12px; color:${We.muted};`,this.attentionVal=document.createElement("span"),this.attentionVal.style.cssText=`color:${We.text}; font-weight:800;`,this.attentionVal.textContent="100%",r.innerHTML=`<span>${W("hud.attention")}</span>`,r.appendChild(this.attentionVal);const a=document.createElement("div");a.style.cssText=`height:8px; background:${We.border}; border-radius:4px; overflow:hidden;`,this.attentionBar=document.createElement("div"),this.attentionBar.style.cssText=`height:100%; width:100%; background:${We.mint}; border-radius:4px; transition:width .4s, background .4s;`,a.appendChild(this.attentionBar),i.append(this.topicEl,r,a),this.root.appendChild(i),this.crosshair=document.createElement("div"),this.crosshair.style.cssText="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:18px; height:18px; pointer-events:none;",this.crosshair.innerHTML=`<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="1.5" fill="${We.mint}"/><line x1="9" y1="2" x2="9" y2="6" stroke="${We.mint}" stroke-width="1.5"/><line x1="9" y1="12" x2="9" y2="16" stroke="${We.mint}" stroke-width="1.5"/><line x1="2" y1="9" x2="6" y2="9" stroke="${We.mint}" stroke-width="1.5"/><line x1="12" y1="9" x2="16" y2="9" stroke="${We.mint}" stroke-width="1.5"/></svg>`,this.root.appendChild(this.crosshair),this.notifArea=document.createElement("div"),this.notifArea.style.cssText="position:absolute; top:70px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:6px; pointer-events:none;",this.root.appendChild(this.notifArea);const o=this.panel("position:absolute; bottom:14px; right:14px; font-size:12px; color:"+We.muted);o.innerHTML=`<kbd style="background:${We.border};padding:1px 6px;border-radius:4px;color:${We.text}">E</kbd> ${W("hud.hint_e")} &nbsp; <kbd style="background:${We.border};padding:1px 6px;border-radius:4px;color:${We.text}">F1</kbd> ${W("hud.hint_f1")}`,this.root.appendChild(o)}bindEvents(){this.bus.on("attentionChanged",e=>{const{value:t}=e;this.setAttention(t)}),this.bus.on("lessonStarted",e=>{const{topic:t}=e;this.topicEl.textContent=`${W("hud.topic_prefix")} ${t}`}),this.bus.on("phaseChanged",e=>{const{phase:t}=e,n={explanation:W("hud.phase.explanation"),tasks:W("hud.phase.tasks"),grading:W("hud.phase.grading"),homework:W("hud.phase.homework"),done:W("hud.phase.done")};this.phaseEl.textContent=n[t]??t})}setAttention(e){const t=Math.max(0,Math.min(100,e));this.attentionBar.style.width=t+"%",this.attentionVal.textContent=t.toFixed(0)+"%",this.attentionBar.style.background=t>60?We.mint:t>30?We.gold:We.red}setTime(e){this.timeEl.textContent=e}setDay(e){this.dayEl.textContent=W("hud.day")+" "+e}setReputation(e){this.repEl.innerHTML=`<span style="color:${We.muted}">${W("hud.reputation")} </span><span style="color:${We.blue}; font-weight:800;">${e}</span>`}setMoney(e){this.moneyEl.innerHTML=`<span style="color:${We.muted}">${W("hud.salary")} </span><span style="color:${We.gold}; font-weight:800;">${e.toLocaleString("ru-RU")} в‚ё</span>`}showNotification(e,t=We.mint,n=2800){const i=document.createElement("div");i.style.cssText=`background:${We.panel}ee; border:1px solid ${t}; border-radius:8px; padding:8px 18px; color:${t}; font-weight:700; font-size:14px; animation:ew2_fadein .25s; pointer-events:none; text-align:center; max-width:360px;`,i.textContent=e,this.notifArea.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity .4s",setTimeout(()=>i.remove(),420)},n)}addGlobalStyles(){if(document.getElementById("ew2-hud-style"))return;const e=document.createElement("style");e.id="ew2-hud-style",e.textContent="@keyframes ew2_fadein { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }",document.head.appendChild(e)}hide(){this.root.style.display="none"}show(){this.root.style.display=""}dispose(){this.root.remove()}}const je={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",red:"#FF4D4D",green:"#3FB950",text:"#E6EDF3",muted:"#8B949E",nb:"#FFFDE7",lines:"#DEE2A0"};function ol(s){return s>=5?je.green:s>=4?je.mint:s>=3?je.gold:je.red}class Pg{constructor(){w(this,"overlay");w(this,"notebooks",[]);w(this,"currentIdx",0);w(this,"onGrade",null);w(this,"onFinish",null);w(this,"bus",qt.getInstance());w(this,"selectedGrade",3);w(this,"gradeButtons",[]);w(this,"pageContent");w(this,"pageInfo");w(this,"feedbackEl");this.overlay=document.createElement("div"),this.overlay.id="ew2-notebook",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:300; font-family:'Nunito',sans-serif;
      backdrop-filter:blur(4px); opacity:0; pointer-events:none; transition:opacity .25s;
    `,document.body.appendChild(this.overlay),this.buildUI()}buildUI(){const e=document.createElement("div");e.style.cssText=`
      background:${je.bg}; border:1px solid ${je.border}; border-radius:14px;
      width:660px; max-width:96vw; padding:28px 32px; display:flex; flex-direction:column; gap:18px;
    `;const t=document.createElement("div");t.style.cssText="display:flex; align-items:center; justify-content:space-between;",t.innerHTML=`<h2 style="margin:0; color:${je.text}; font-size:20px;">${W("nb.title")}</h2>`,this.pageInfo=document.createElement("span"),this.pageInfo.style.cssText=`color:${je.muted}; font-size:14px;`,t.appendChild(this.pageInfo),e.appendChild(t);const n=document.createElement("div");n.style.cssText=`background:${je.nb}; border-radius:8px; border:2px solid ${je.lines}; overflow:hidden; position:relative;`;const i=document.createElement("div");i.style.cssText=`position:absolute; left:28px; top:0; bottom:0; width:2px; background:${je.lines}; z-index:1;`,n.appendChild(i),this.pageContent=document.createElement("div"),this.pageContent.style.cssText="padding:20px 20px 20px 44px; min-height:200px; position:relative;",n.appendChild(this.pageContent),e.appendChild(n);const r=document.createElement("div");r.id="ew2-nb-errors",e.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex; align-items:center; gap:10px;",a.innerHTML=`<span style="color:${je.muted}; font-size:14px; font-weight:700;">${W("nb.grade")}</span>`,this.gradeButtons=[];for(let d=2;d<=5;d++){const h=document.createElement("button");h.textContent=String(d),h.dataset.grade=String(d),h.style.cssText=`width:44px; height:44px; border-radius:8px; border:2px solid ${je.border};
        background:${je.panel}; color:${je.text}; font-size:20px; font-weight:800; cursor:pointer; transition:all .15s;`,h.addEventListener("click",()=>this.selectGrade(d)),a.appendChild(h),this.gradeButtons.push(h)}e.appendChild(a),this.feedbackEl=document.createElement("div"),this.feedbackEl.style.cssText=`font-size:13px; color:${je.muted}; font-style:italic; min-height:18px;`,e.appendChild(this.feedbackEl);const o=document.createElement("div");o.style.cssText="display:flex; gap:10px; justify-content:flex-end;";const l=document.createElement("button");l.textContent=W("nb.submit"),l.style.cssText=`padding:10px 22px; border-radius:8px; border:none; background:${je.mint}; color:#000; font-weight:800; cursor:pointer; font-size:14px;`,l.addEventListener("click",()=>this.submitAndNext());const c=document.createElement("button");c.textContent=W("nb.finish"),c.style.cssText=`padding:10px 18px; border-radius:8px; border:1px solid ${je.border}; background:transparent; color:${je.muted}; cursor:pointer; font-size:14px;`,c.addEventListener("click",()=>this.finish()),o.append(l,c),e.appendChild(o),this.overlay.appendChild(e)}selectGrade(e){this.selectedGrade=e,this.gradeButtons.forEach(n=>{const i=Number(n.dataset.grade)===e?ol(e):je.panel;n.style.background=i,n.style.color=Number(n.dataset.grade)===e?"#000":je.text,n.style.borderColor=Number(n.dataset.grade)===e?ol(e):je.border});const t={2:W("nb.feedback.2"),3:W("nb.feedback.3"),4:W("nb.feedback.4"),5:W("nb.feedback.5")};this.feedbackEl.textContent=t[e]??""}renderPage(){if(this.notebooks.length===0)return;const e=this.notebooks[this.currentIdx];this.pageInfo.textContent=`${this.currentIdx+1} / ${this.notebooks.length}`,this.pageContent.innerHTML="";const t=document.createElement("div");t.style.cssText=`font-family:'JetBrains Mono',monospace; font-size:14px; color:#333; margin-bottom:10px; border-bottom:1px solid ${je.lines}; padding-bottom:6px;`,t.textContent=`${W("nb.student")} ${e.studentName}`,this.pageContent.appendChild(t);const n=e.content??[];if(n.length>0)n.forEach(a=>{const o=document.createElement("div");o.style.cssText=`
          font-family:'JetBrains Mono',monospace; font-size:12px; color:#2a2a2a;
          line-height:1.9; border-bottom:1px solid ${je.lines}; min-height:22px;
          padding:0 2px; white-space:pre;
        `,o.textContent=a,this.pageContent.appendChild(o)});else for(let a=0;a<6;a++){const o=document.createElement("div");o.style.cssText=`height:1px; background:${je.lines}; margin:18px 0;`,this.pageContent.appendChild(o)}const i=this.overlay.querySelector("#ew2-nb-errors");if(i.innerHTML="",e.errors.length>0){const a=document.createElement("p");a.style.cssText=`margin:0 0 6px; font-weight:700; color:${je.red}; font-size:13px;`,a.textContent=`${W("nb.errors_title")} (${e.errors.length}):`,i.appendChild(a),e.errors.forEach(o=>{const l=document.createElement("div");l.style.cssText=`font-size:13px; padding:4px 10px; background:${je.red}18; border-left:3px solid ${je.red}; border-radius:4px; margin:3px 0; color:${je.text};`,l.textContent="вЂў "+o,i.appendChild(l)})}else{const a=document.createElement("p");a.style.cssText=`margin:0; font-size:13px; color:${je.green}; font-weight:700;`,a.textContent=W("nb.no_errors"),i.appendChild(a)}const r=e.errors.length===0?5:e.errors.length===1?4:e.errors.length===2?3:2;this.selectGrade(r)}submitAndNext(){if(!this.notebooks[this.currentIdx])return;const e=this.notebooks[this.currentIdx];this.onGrade?.(e.studentId,this.selectedGrade),this.currentIdx++,this.currentIdx<this.notebooks.length?this.renderPage():this.finish()}finish(){this.hide(),this.onFinish?.()}open(e,t,n){this.notebooks=e,this.currentIdx=0,this.onGrade=t,this.onFinish=n,this.renderPage(),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const St={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E"},Ig={theory:"#58A6FF",board:St.mint,example:St.gold,question:"#BC8CFF"};class kg{constructor(){w(this,"overlay");w(this,"bus",qt.getInstance());w(this,"onChoose",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-explain",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:flex-end;
      justify-content:center; z-index:200; font-family:'Nunito',sans-serif;
      padding-bottom:40px; opacity:0; pointer-events:none; transition:opacity .2s;
      backdrop-filter:blur(3px);
    `,document.body.appendChild(this.overlay)}open(e,t,n,i){this.onChoose=i,this.overlay.innerHTML="";const r=document.createElement("div");r.style.cssText=`
      background:${St.bg}; border:1px solid ${St.border}; border-radius:16px;
      padding:24px 28px; width:700px; max-width:96vw; display:flex; flex-direction:column; gap:16px;
    `;const a=document.createElement("div");a.style.cssText="display:flex; align-items:center; justify-content:space-between;";const o=`expl.phase.${e.phase??"intro"}`,l=W(o);a.innerHTML=`
      <div>
        <div style="font-size:11px; color:${St.muted}; text-transform:uppercase; letter-spacing:1px; margin-bottom:2px;">${W("expl.round")} ${t} / ${n}</div>
        <div style="font-weight:800; font-size:20px; color:${St.mint}; margin-bottom:2px;">${l}</div>
        <div style="font-weight:700; font-size:14px; color:${St.text};">рџ“љ ${W("expl.topic")} <span style="color:${St.gold}">${e.topic}</span></div>
      </div>
      <div style="font-size:12px; color:${St.muted};">${W("expl.choose")}</div>
    `,r.appendChild(a);const c=document.createElement("div");c.style.cssText="display:grid; grid-template-columns:1fr 1fr; gap:10px;",e.options.forEach((d,h)=>{const u=this.makeOptionCard(d,h);c.appendChild(u)}),r.appendChild(c),this.overlay.appendChild(r),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}makeOptionCard(e,t){const n=e.isBad?"#555566":Ig[e.type]??St.mint,i=`expl.stars.${e.difficulty}`,r=W(i),a=document.createElement("button");a.style.cssText=`
      background:${St.panel}; border:2px solid ${e.isBad?"#333":St.border}; border-radius:12px;
      padding:14px 16px; cursor:pointer; text-align:left; transition:all .15s;
      display:flex; flex-direction:column; gap:8px; font-family:'Nunito',sans-serif;
      opacity:${e.isBad?"0.75":"1"};
    `;const o=document.createElement("div");if(o.style.cssText="display:flex; align-items:flex-start; gap:8px;",o.innerHTML=`
      <span style="font-size:22px; flex-shrink:0;">${e.icon}</span>
      <div style="flex:1;">
        <div style="font-weight:800; color:${e.isBad?St.muted:St.text}; font-size:13px; line-height:1.3;">${e.label}</div>
        <div style="font-size:11px; margin-top:2px; color:${n}; font-weight:700;">${r}</div>
      </div>
    `,a.appendChild(o),e.text){const l=document.createElement("div");l.style.cssText=`
        font-size:12px; color:${St.muted}; white-space:pre-wrap; line-height:1.5;
        background:${St.bg}; border-radius:8px; padding:8px 10px;
        border-left:3px solid ${n}; font-family:'Courier New',monospace;
        max-height:90px; overflow:hidden;
      `,l.textContent=e.text,a.appendChild(l)}return a.addEventListener("mouseenter",()=>{a.style.borderColor=n,a.style.background=n+"18",a.style.transform="scale(1.01)"}),a.addEventListener("mouseleave",()=>{a.style.borderColor=e.isBad?"#333":St.border,a.style.background=St.panel,a.style.transform=""}),a.addEventListener("click",()=>{this.hide(),this.onChoose?.(t)}),a}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const st={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",text:"#E6EDF3",muted:"#8B949E"},Ug={easy:"Р›С‘РіРєРѕРµ",medium:"РЎСЂРµРґРЅРµРµ",hard:"РЎР»РѕР¶РЅРѕРµ"},ll={easy:"#4FFFB0",medium:"#FFD700",hard:"#FF4D4D"},Fg={easy:"Р‘Р°Р·РѕРІС‹Р№ СѓСЂРѕРІРµРЅСЊ вЂ” РїСЂРѕРІРµСЂРєР° РїРѕРЅРёРјР°РЅРёСЏ. РЎРїСЂР°РІСЏС‚СЃСЏ РїРѕС‡С‚Рё РІСЃРµ.",medium:"РЎСЂРµРґРЅСЏСЏ СЃР»РѕР¶РЅРѕСЃС‚СЊ вЂ” РЅСѓР¶РЅРѕ РїРѕРґСѓРјР°С‚СЊ. РҐРѕСЂРѕС€РёРµ СѓС‡РµРЅРёРєРё СЃРїСЂР°РІСЏС‚СЃСЏ.",hard:"Р’С‹СЃРѕРєРёР№ СѓСЂРѕРІРµРЅСЊ вЂ” С‚РѕР»СЊРєРѕ РѕС‚Р»РёС‡РЅРёРєРё. РћСЃС‚Р°Р»СЊРЅС‹Рµ РјРѕРіСѓС‚ Р·Р°РїСѓС‚Р°С‚СЊСЃСЏ."},Ng={easy:"рџџў",medium:"рџџЎ",hard:"рџ”ґ"},Bg={board:"РЈ РґРѕСЃРєРё",written:"РџРёСЃСЊРјРµРЅРЅРѕ"},Og={board:"рџ“‹",written:"вњЏпёЏ"},zg={board:"Р’С‹Р·РѕРІРёС‚Рµ СѓС‡РµРЅРёРєР° Рє РґРѕСЃРєРµ. РџРѕРІС‹С€Р°РµС‚ РІРЅРёРјР°РЅРёРµ С…СѓР»РёРіР°РЅРѕРІ Рё Р»РµРЅС‚СЏРµРІ.",written:"Р Р°Р·РґР°Р№С‚Рµ Р·Р°РґР°РЅРёРµ РЅР° Р±СѓРјР°РіРµ. РљР°Р¶РґС‹Р№ СЂР°Р±РѕС‚Р°РµС‚ СЃР°РјРѕСЃС‚РѕСЏС‚РµР»СЊРЅРѕ."};class Hg{constructor(){w(this,"overlay");w(this,"onConfirm",null);w(this,"selectedMode","written");w(this,"selectedDiff","medium");w(this,"modeBtns",new Map);w(this,"diffBtns",new Map);w(this,"taskTextEl");w(this,"startBtn");w(this,"tasksByDiff",{easy:"",medium:"",hard:""});this.overlay=document.createElement("div"),this.overlay.id="ew2-taskpanel",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:flex-end;
      justify-content:center; z-index:200; font-family:'Nunito',sans-serif;
      padding-bottom:40px; opacity:0; pointer-events:none; transition:opacity .2s;
      backdrop-filter:blur(3px);
    `,document.body.appendChild(this.overlay)}open(e,t){this.onConfirm=t,this.tasksByDiff=e,this.selectedMode="written",this.selectedDiff="medium",this.overlay.innerHTML="",this.modeBtns.clear(),this.diffBtns.clear();const n=document.createElement("div");n.style.cssText=`
      background:${st.bg}; border:1px solid ${st.border}; border-radius:16px;
      padding:24px 28px; width:720px; max-width:96vw; display:flex; flex-direction:column; gap:18px;
    `;const i=document.createElement("div");i.innerHTML=`
      <div style="font-size:11px;color:${st.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Р¤Р°Р·Р° Р·Р°РґР°РЅРёР№</div>
      <div style="font-size:18px;font-weight:800;color:${st.text};">рџ“ќ Р’С‹Р±РµСЂРёС‚Рµ С„РѕСЂРјР°С‚ Р·Р°РґР°РЅРёСЏ</div>
    `,n.appendChild(i);const r=document.createElement("div");r.style.cssText=`font-size:12px;color:${st.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`,r.textContent="Р¤РѕСЂРјР°С‚:",n.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex;gap:10px;",["board","written"].forEach(h=>{const u=document.createElement("button");u.style.cssText=`
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${st.border};
        background:${st.panel}; color:${st.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `,u.innerHTML=`
        <span style="font-size:24px;">${Og[h]}</span>
        <strong style="font-size:14px;">${Bg[h]}</strong>
        <span style="font-size:11px;color:${st.muted};">${zg[h]}</span>
      `,u.addEventListener("click",()=>{this.selectedMode=h,this.refreshMode()}),a.appendChild(u),this.modeBtns.set(h,u)}),n.appendChild(a);const o=document.createElement("div");o.style.cssText=`font-size:12px;color:${st.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`,o.textContent="РЎР»РѕР¶РЅРѕСЃС‚СЊ:",n.appendChild(o);const l=document.createElement("div");l.style.cssText="display:flex;gap:10px;",["easy","medium","hard"].forEach(h=>{const u=document.createElement("button");u.style.cssText=`
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${st.border};
        background:${st.panel}; color:${st.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `,u.innerHTML=`
        <span style="font-size:22px;">${Ng[h]}</span>
        <strong style="font-size:14px;color:${ll[h]};">${Ug[h]}</strong>
        <span style="font-size:11px;color:${st.muted};text-align:center;">${Fg[h]}</span>
      `,u.addEventListener("click",()=>{this.selectedDiff=h,this.refreshDiff(),this.refreshTaskText()}),l.appendChild(u),this.diffBtns.set(h,u)}),n.appendChild(l);const c=document.createElement("div");c.style.cssText=`
      background:${st.panel}; border:1px solid ${st.border}; border-radius:10px;
      padding:14px 18px; min-height:58px;
    `;const d=document.createElement("div");d.style.cssText=`font-size:11px;color:${st.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;font-weight:700;`,d.textContent="Р—Р°РґР°РЅРёРµ РґР»СЏ РєР»Р°СЃСЃР°:",this.taskTextEl=document.createElement("div"),this.taskTextEl.style.cssText=`font-size:14px;color:${st.text};white-space:pre-wrap;line-height:1.6;`,c.appendChild(d),c.appendChild(this.taskTextEl),n.appendChild(c),this.startBtn=document.createElement("button"),this.startBtn.style.cssText=`
      padding:13px; border-radius:10px; border:none; background:${st.mint}; color:#000;
      font-size:15px; font-weight:900; cursor:pointer; font-family:inherit; transition:all .15s;
    `,this.startBtn.textContent="в–¶ Р”Р°С‚СЊ Р·Р°РґР°РЅРёРµ РєР»Р°СЃСЃСѓ",this.startBtn.addEventListener("mouseenter",()=>{this.startBtn.style.transform="scale(1.02)"}),this.startBtn.addEventListener("mouseleave",()=>{this.startBtn.style.transform=""}),this.startBtn.addEventListener("click",()=>{this.hide(),this.onConfirm?.(this.selectedMode,this.selectedDiff)}),n.appendChild(this.startBtn),this.overlay.appendChild(n),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt(),this.refreshMode(),this.refreshDiff(),this.refreshTaskText()}refreshMode(){this.modeBtns.forEach((e,t)=>{const n=t===this.selectedMode;e.style.borderColor=n?st.mint:st.border,e.style.background=n?st.mint+"18":st.panel})}refreshDiff(){this.diffBtns.forEach((e,t)=>{const n=t===this.selectedDiff,i=ll[t];e.style.borderColor=n?i:st.border,e.style.background=n?i+"22":st.panel})}refreshTaskText(){const e=this.tasksByDiff[this.selectedDiff];this.taskTextEl.textContent=e||"вЂ” РЅРµС‚ РґР°РЅРЅС‹С… вЂ”"}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const yt={bg:"#0D1117",panel:"#161B22",border:"#30363D",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E"},Gg={easy:"Easy",medium:"Medium",hard:"Hard"},cl={easy:"#4FFFB0",medium:"#FFD700",hard:"#FF4D4D"},Vg={easy:"рџџў",medium:"рџџЎ",hard:"рџ”ґ"},Wg={easy:"Review вЂ” light practice. Students won't be overwhelmed.",medium:"Material reinforcement. Requires effort but achievable.",hard:"In-depth tasks. Only the most motivated will complete fully."};class $g{constructor(){w(this,"overlay");w(this,"onConfirm",null);w(this,"selectedDiff","medium");w(this,"diffBtns",new Map);w(this,"hwTextEl");w(this,"hwByDiff",{easy:"",medium:"",hard:""});this.overlay=document.createElement("div"),this.overlay.id="ew2-homeworkui",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:flex-end;
      justify-content:center; z-index:200; font-family:'Nunito',sans-serif;
      padding-bottom:40px; opacity:0; pointer-events:none; transition:opacity .2s;
      backdrop-filter:blur(3px);
    `,document.body.appendChild(this.overlay)}open(e,t){this.onConfirm=t,this.hwByDiff=e,this.selectedDiff="medium",this.diffBtns.clear(),this.overlay.innerHTML="";const n=this.buildCard();this.overlay.appendChild(n),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt(),this.refreshDiff(),this.refreshHwText()}buildCard(){const e=document.createElement("div");e.style.cssText=`
      background:${yt.bg}; border:1px solid ${yt.border}; border-radius:16px;
      padding:24px 28px; width:660px; max-width:96vw; display:flex; flex-direction:column; gap:16px;
    `;const t=document.createElement("div");t.innerHTML=`
      <div style="font-size:11px;color:${yt.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">End of Lesson</div>
      <div style="font-size:18px;font-weight:800;color:${yt.text};">рџ“љ Assign Homework?</div>
    `,e.appendChild(t);const n=document.createElement("div");n.style.cssText=`font-size:12px;color:${yt.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`,n.textContent="Difficulty:",e.appendChild(n);const i=document.createElement("div");i.style.cssText="display:flex;gap:10px;",["easy","medium","hard"].forEach(d=>{const h=document.createElement("button");h.style.cssText=`
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${yt.border};
        background:${yt.panel}; color:${yt.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `,h.innerHTML=`
        <span style="font-size:20px;">${Vg[d]}</span>
        <strong style="font-size:14px;color:${cl[d]};">${Gg[d]}</strong>
        <span style="font-size:11px;color:${yt.muted};text-align:center;">${Wg[d]}</span>
      `,h.addEventListener("click",()=>{this.selectedDiff=d,this.refreshDiff(),this.refreshHwText()}),i.appendChild(h),this.diffBtns.set(d,h)}),e.appendChild(i);const r=document.createElement("div");r.style.cssText=`
      background:${yt.panel}; border:1px solid ${yt.border}; border-radius:10px;
      padding:14px 18px; min-height:50px;
    `;const a=document.createElement("div");a.style.cssText=`font-size:11px;color:${yt.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;font-weight:700;`,a.textContent="Homework assignment:",this.hwTextEl=document.createElement("div"),this.hwTextEl.style.cssText=`font-size:14px;color:${yt.text};white-space:pre-wrap;line-height:1.6;`,r.appendChild(a),r.appendChild(this.hwTextEl),e.appendChild(r);const o=document.createElement("div");o.style.cssText="display:flex;gap:10px;";const l=document.createElement("button");l.style.cssText=`
      flex:1; padding:13px; border-radius:10px; border:2px solid ${yt.border};
      background:transparent; color:${yt.muted}; font-size:14px; font-weight:700;
      cursor:pointer; font-family:inherit; transition:all .15s;
    `,l.textContent="вњ— Skip",l.addEventListener("mouseenter",()=>{l.style.borderColor="#FF4D4D",l.style.color="#FF4D4D"}),l.addEventListener("mouseleave",()=>{l.style.borderColor=yt.border,l.style.color=yt.muted}),l.addEventListener("click",()=>{this.hide(),this.onConfirm?.(!1,this.selectedDiff)});const c=document.createElement("button");return c.style.cssText=`
      flex:2; padding:13px; border-radius:10px; border:none;
      background:${yt.gold}; color:#000; font-size:15px; font-weight:900;
      cursor:pointer; font-family:inherit; transition:all .15s;
    `,c.textContent="вњ“ Assign to Class",c.addEventListener("mouseenter",()=>{c.style.transform="scale(1.02)"}),c.addEventListener("mouseleave",()=>{c.style.transform=""}),c.addEventListener("click",()=>{this.hide(),this.onConfirm?.(!0,this.selectedDiff)}),o.appendChild(l),o.appendChild(c),e.appendChild(o),e}refreshDiff(){this.diffBtns.forEach((e,t)=>{const n=t===this.selectedDiff,i=cl[t];e.style.borderColor=n?i:yt.border,e.style.background=n?i+"22":yt.panel})}refreshHwText(){const e=this.hwByDiff[this.selectedDiff];this.hwTextEl.textContent=e||"вЂ” no data вЂ”"}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const an={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",text:"#E6EDF3",muted:"#8B949E"},Xg={troublemaker:"#FF4D4D",fire_alarm:"#FF6B1A",hw_sabotage:"#FFD700",genius_question:"#58A6FF",phone_ring:"#BC8CFF",student_conflict:"#FF4D4D"};class qg{constructor(){w(this,"overlay");w(this,"onResult",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-event",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:400; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s; backdrop-filter:blur(4px);
    `,document.body.appendChild(this.overlay)}open(e,t,n){this.onResult=n,this.overlay.innerHTML="";const i=Xg[e.type]??an.mint,r=document.createElement("div");r.style.cssText=`
      background:${an.bg}; border:2px solid ${i}; border-radius:16px;
      padding:28px 32px; width:520px; max-width:96vw; display:flex; flex-direction:column; gap:18px;
      box-shadow: 0 0 40px ${i}44;
    `;const a=document.createElement("div");a.style.cssText="display:flex; align-items:center; gap:14px;",a.innerHTML=`
      <span style="font-size:42px;">${e.icon}</span>
      <div>
        <div style="font-size:11px; color:${i}; text-transform:uppercase; letter-spacing:1px; font-weight:700;">РЎРѕР±С‹С‚РёРµ</div>
        <div style="font-size:20px; font-weight:800; color:${an.text};">${e.title}</div>
      </div>
    `,r.appendChild(a);const o=document.createElement("p");o.style.cssText=`margin:0; font-size:15px; color:${an.muted}; line-height:1.5;`,o.textContent=e.desc,r.appendChild(o);const l=document.createElement("div");l.style.cssText="display:flex; flex-direction:column; gap:8px;",e.choices.forEach(c=>{const d=document.createElement("button");d.style.cssText=`
        display:flex; align-items:center; gap:12px; padding:12px 16px;
        background:${an.panel}; border:1px solid ${an.border}; border-radius:10px;
        cursor:pointer; text-align:left; transition:all .15s; width:100%;
      `,d.innerHTML=`<span style="font-size:22px;">${c.icon}</span><span style="color:${an.text}; font-weight:700; font-size:14px;">${c.label}</span>`,d.addEventListener("mouseenter",()=>{d.style.borderColor=i,d.style.background=i+"18"}),d.addEventListener("mouseleave",()=>{d.style.borderColor=an.border,d.style.background=an.panel}),d.addEventListener("click",()=>{const h=c.effect(t);this.showResult(h,i)}),l.appendChild(d)}),r.appendChild(l),this.overlay.appendChild(r),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}showResult(e,t){this.overlay.innerHTML="";const n=document.createElement("div");n.style.cssText=`
      background:${an.bg}; border:2px solid ${t}; border-radius:14px;
      padding:28px 32px; width:420px; max-width:96vw;
      text-align:center; display:flex; flex-direction:column; gap:18px;
      box-shadow: 0 0 30px ${t}44;
    `,n.innerHTML=`
      <div style="font-size:36px;">вњ…</div>
      <div style="font-size:16px; color:${an.text}; font-weight:700;">${e}</div>
    `;const i=document.createElement("button");i.textContent="РџСЂРѕРґРѕР»Р¶РёС‚СЊ СѓСЂРѕРє",i.style.cssText=`padding:10px 24px; border-radius:8px; border:none; background:${t}; color:#000; font-weight:800; cursor:pointer; font-size:14px;`,i.addEventListener("click",()=>{this.hide(),this.onResult?.(e)}),n.appendChild(i),this.overlay.appendChild(n)}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const Kt={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",red:"#FF4D4D",text:"#E6EDF3",muted:"#8B949E"};class jg{constructor(){w(this,"overlay");w(this,"visible",!1);w(this,"cbs",null);w(this,"bus",qt.getInstance());this.overlay=document.createElement("div"),this.overlay.id="ew2-pause",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:500; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s; backdrop-filter:blur(6px);
    `,document.body.appendChild(this.overlay),this.buildUI(),window.addEventListener("keydown",e=>{e.code==="Escape"&&this.visible&&this.hide()})}buildUI(){const e=document.createElement("div");e.style.cssText=`
      background:${Kt.bg}; border:1px solid ${Kt.border}; border-radius:18px;
      padding:36px 44px; min-width:280px; display:flex; flex-direction:column; align-items:center; gap:14px;
    `;const t=document.createElement("h2");t.style.cssText=`margin:0 0 8px; font-size:26px; color:${Kt.text}; font-weight:900;`,t.textContent=W("pause.title"),e.appendChild(t);const n=document.createElement("hr");n.style.cssText=`width:100%; border:none; border-top:1px solid ${Kt.border}; margin:4px 0 10px;`,e.appendChild(n),[[W("pause.resume"),Kt.mint,()=>{this.hide(),this.cbs?.onResume()}],[W("pause.save"),"#58A6FF",()=>{this.cbs?.onSave()}],[W("pause.settings"),Kt.muted,()=>{this.cbs?.onSettings()}],[W("pause.menu"),Kt.red,()=>{confirm(W("pause.menu_confirm"))&&(this.hide(),this.cbs?.onMainMenu())}]].forEach(([a,o,l])=>{const c=document.createElement("button");c.textContent=a,c.style.cssText=`
        width:100%; padding:12px 20px; border-radius:10px; border:1px solid ${Kt.border};
        background:${Kt.panel}; color:${o}; font-family:inherit; font-size:15px;
        font-weight:800; cursor:pointer; text-align:left; transition:all .15s;
      `,c.addEventListener("mouseenter",()=>{c.style.background=o+"22",c.style.borderColor=o}),c.addEventListener("mouseleave",()=>{c.style.background=Kt.panel,c.style.borderColor=Kt.border}),c.addEventListener("click",l),e.appendChild(c)});const r=document.createElement("div");r.style.cssText=`margin-top:8px; font-size:11px; color:${Kt.muted};`,r.textContent=W("pause.version"),e.appendChild(r),this.overlay.appendChild(e)}show(e){this.cbs=e,this.visible=!0,this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){this.visible=!1,Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}isVisible(){return this.visible}dispose(){this.overlay.remove()}}const ot={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E"},Yg=[{id:"hw_check",icon:"рџ“‹",label:"РџСЂРѕРІРµСЂРёС‚СЊ РґРѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ",desc:"РћС‚РєСЂС‹С‚СЊ Р¶СѓСЂРЅР°Р» Р”Р—, РІС‹СЃС‚Р°РІРёС‚СЊ РѕС†РµРЅРєРё РєР°Р¶РґРѕРјСѓ СѓС‡РµРЅРёРєСѓ",understandingBonus:2,attentionBonus:8},{id:"topic_review",icon:"рџ“–",label:"РџРѕРІС‚РѕСЂРёС‚СЊ С‚РµРјСѓ",desc:"РћСЃРІРµР¶РёС‚СЊ РјР°С‚РµСЂРёР°Р» СѓСЂРѕРєР° вЂ” РїРµСЂРІРѕРµ РѕР±СЉСЏСЃРЅРµРЅРёРµ СЃС‚Р°РЅРµС‚ С‚РѕС‡РЅРµРµ",understandingBonus:8,attentionBonus:0},{id:"energetic",icon:"вљЎ",label:"РЇСЂРєРѕРµ РЅР°С‡Р°Р»Рѕ",desc:"Р—Р°РіР°РґРєР° РёР»Рё РёРЅС‚СЂРёРіСѓСЋС‰РёР№ РІРѕРїСЂРѕСЃ вЂ” РєР»Р°СЃСЃ СЃСЂР°Р·Сѓ РІРєР»СЋС‡Р°РµС‚СЃСЏ",understandingBonus:0,attentionBonus:12},{id:"skip",icon:"вЏ©",label:"РЎСЂР°Р·Сѓ Рє СѓСЂРѕРєСѓ",desc:"Р‘РµР· РїРѕРґРіРѕС‚РѕРІРєРё. РќРёРєР°РєРёС… Р±РѕРЅСѓСЃРѕРІ, Р·Р°С‚Рѕ Р±С‹СЃС‚СЂРµРµ.",understandingBonus:0,attentionBonus:0}];class Kg{constructor(){w(this,"overlay");this.overlay=document.createElement("div"),this.overlay.id="ew2-prep",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099;
      display:flex; align-items:center; justify-content:center;
      z-index:250; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s;
    `,document.body.appendChild(this.overlay)}open(e,t,n,i,r,a,o=!1){this.overlay.innerHTML="";const l=document.createElement("div");l.style.cssText=`
      background:${ot.bg}; border:1px solid ${ot.border}; border-radius:16px;
      padding:24px 28px; width:640px; max-width:96vw;
      display:flex; flex-direction:column; gap:14px;
    `;const c=document.createElement("div");c.innerHTML=`
      <div style="font-size:11px;color:${ot.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">рџЏ« РџРѕРґРіРѕС‚РѕРІРєР° Рє СѓСЂРѕРєСѓ</div>
      <div style="font-weight:800;font-size:20px;color:${ot.mint};margin-bottom:2px;">${t} РєР»Р°СЃСЃ</div>
      <div style="font-size:14px;color:${ot.text};">рџ“љ РўРµРјР°: <span style="color:${ot.gold}">${e}</span></div>
      <div style="font-size:12px;color:${ot.muted};margin-top:4px;">
        Р”Р— СЃРґР°Р»Рё: <span style="color:${n/i>.7?ot.mint:ot.gold};font-weight:700;">${n} РёР· ${i}</span>
        ${o?`<span style="color:${ot.mint};margin-left:8px;">вњ… РџСЂРѕРІРµСЂРµРЅРѕ</span>`:""}
      </div>
    `,l.appendChild(c);const d=document.createElement("div");d.style.cssText=`height:1px; background:${ot.border};`,l.appendChild(d);const h=document.createElement("div");h.style.cssText=`font-size:12px; color:${ot.muted}; font-weight:600;`,h.textContent="РљР°Рє РЅР°С‡РЅС‘С‚Рµ СѓСЂРѕРє?",l.appendChild(h),Yg.forEach(u=>{const m=u.id==="hw_check",g=m&&o,x=document.createElement("button");x.style.cssText=`
        background:${ot.panel}; border:2px solid ${m&&!o&&n>0?ot.gold:ot.border};
        border-radius:12px; padding:12px 16px; cursor:${g?"not-allowed":"pointer"};
        text-align:left; display:flex; align-items:center; gap:12px; transition:all .15s;
        font-family:'Nunito',sans-serif; opacity:${g?.45:1};
      `;const f=document.createElement("span");f.style.cssText="font-size:26px; flex-shrink:0;",f.textContent=u.icon,x.appendChild(f);const p=document.createElement("div");if(p.style.cssText="flex:1;",p.innerHTML=`
        <div style="font-weight:800;color:${ot.text};font-size:14px;">${u.label}</div>
        <div style="font-size:11px;color:${ot.muted};margin-top:2px;">${u.desc}</div>
      `,x.appendChild(p),u.understandingBonus>0||u.attentionBonus>0){const S=document.createElement("div");S.style.cssText="text-align:right; flex-shrink:0;",u.understandingBonus>0&&(S.innerHTML+=`<div style="font-size:11px;color:${ot.mint};font-weight:700;">+${u.understandingBonus} РїРѕРЅРёРјР°РЅРёРµ</div>`),u.attentionBonus>0&&(S.innerHTML+=`<div style="font-size:11px;color:${ot.gold};font-weight:700;">+${u.attentionBonus} РІРЅРёРјР°РЅРёРµ</div>`),x.appendChild(S)}g||(x.addEventListener("mouseenter",()=>{x.style.borderColor=ot.mint,x.style.background=ot.mint+"18"}),x.addEventListener("mouseleave",()=>{x.style.borderColor=m&&!o&&n>0?ot.gold:ot.border,x.style.background=ot.panel}),x.addEventListener("click",()=>{m?(this.hide(),a()):(this.hide(),r(u))})),l.appendChild(x)}),this.overlay.appendChild(l),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const Ke={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E",red:"#FF4D4D",blue:"#58A6FF"};class Zg{constructor(){w(this,"overlay");w(this,"grades",new Map);this.overlay=document.createElement("div"),this.overlay.id="ew2-hwcheck",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099;
      display:flex; align-items:center; justify-content:center;
      z-index:300; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s;
    `,document.body.appendChild(this.overlay)}open(e,t){this.grades=new Map,this.overlay.innerHTML="";const n=e.filter(d=>d.hwDone),i=e.filter(d=>!d.hwDone),r=Math.round(n.length/e.length*100),a=document.createElement("div");if(a.style.cssText=`
      background:${Ke.bg}; border:1px solid ${Ke.border}; border-radius:16px;
      padding:24px 28px; width:700px; max-width:96vw;
      display:flex; flex-direction:column; gap:12px;
      max-height:88vh; overflow-y:auto;
    `,a.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div style="font-size:11px;color:${Ke.muted};text-transform:uppercase;letter-spacing:1px;">рџ“‹ РџСЂРѕРІРµСЂРєР° РґРѕРјР°С€РЅРµРіРѕ Р·Р°РґР°РЅРёСЏ</div>
          <div style="font-weight:800;font-size:18px;color:${Ke.text};margin-top:2px;">РЎРґР°Р»Рё: ${n.length} РёР· ${e.length}</div>
        </div>
        <div style="text-align:right;font-size:12px;color:${Ke.muted};">
          <div style="color:${r>=70?Ke.mint:r>=40?Ke.gold:Ke.red};font-weight:700;font-size:22px;">${r}%</div>
          РІС‹РїРѕР»РЅРёР»Рё
        </div>
      </div>
      <div style="background:${Ke.border};border-radius:4px;height:6px;overflow:hidden;">
        <div style="width:${r}%;height:100%;background:${r>=70?Ke.mint:r>=40?Ke.gold:Ke.red};"></div>
      </div>
    `,n.length>0){const d=document.createElement("div");d.style.cssText=`font-size:12px;color:${Ke.mint};font-weight:700;padding:4px 0;`,d.textContent="вњ… Р’С‹РїРѕР»РЅРёР»Рё вЂ” РІС‹СЃС‚Р°РІРёС‚Рµ РѕС†РµРЅРєСѓ:",a.appendChild(d),n.forEach(h=>{const u=this.makeStudentRow(h,!0);a.appendChild(u)})}if(i.length>0){const d=document.createElement("div");d.style.cssText=`font-size:12px;color:${Ke.red};font-weight:700;padding:4px 0; margin-top:6px;`,d.textContent=`вќЊ РќРµ РІС‹РїРѕР»РЅРёР»Рё (${i.length} С‡РµР».) вЂ” РїРѕР»СѓС‡Р°С‚ 2:`,a.appendChild(d);const h=document.createElement("div");h.style.cssText="display:flex; flex-wrap:wrap; gap:6px;",i.forEach(u=>{const m=document.createElement("div");m.style.cssText=`
          background:${Ke.red}22; border:1px solid ${Ke.red}44; border-radius:6px;
          padding:4px 10px; font-size:12px; color:${Ke.red}; font-weight:600;
        `,m.textContent=u.name,h.appendChild(m)}),a.appendChild(h)}const o=document.createElement("div");o.style.cssText=`display:flex; justify-content:flex-end; gap:10px; margin-top:8px; padding-top:12px; border-top:1px solid ${Ke.border};`;const l=document.createElement("button");l.style.cssText=`
      background:transparent; color:${Ke.muted}; font-weight:600; font-size:13px;
      padding:10px 16px; border-radius:10px; border:1px solid ${Ke.border}; cursor:pointer;
      font-family:'Nunito',sans-serif;
    `,l.textContent="РќРµ РїСЂРѕРІРµСЂСЏС‚СЊ",l.addEventListener("click",()=>{this.hide(),t(new Map)});const c=document.createElement("button");c.style.cssText=`
      background:${Ke.mint}; color:#000; font-weight:800; font-size:14px;
      padding:10px 24px; border-radius:10px; border:none; cursor:pointer;
      font-family:'Nunito',sans-serif;
    `,c.textContent="вњ… Р—Р°РІРµСЂС€РёС‚СЊ РїСЂРѕРІРµСЂРєСѓ",c.addEventListener("click",()=>{this.hide(),t(new Map(this.grades))}),o.appendChild(l),o.appendChild(c),a.appendChild(o),this.overlay.appendChild(a),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}makeStudentRow(e,t){const n=document.createElement("div");n.style.cssText=`
      display:flex; align-items:center; gap:10px; padding:8px 12px;
      background:${Ke.panel}; border-radius:8px; border:1px solid ${Ke.border};
    `;const i=document.createElement("span");i.style.cssText=`flex:1; font-weight:700; color:${Ke.text}; font-size:13px;`,i.textContent=e.name,n.appendChild(i);const r=document.createElement("span"),a={genius:"рџ§ ",lazy:"рџґ",bully:"рџ¤",anxious:"рџ°",helper:"рџ¤ќ",average:"рџЉ"};if(r.textContent=a[e.type]??"рџЉ",r.style.cssText="font-size:16px;",n.appendChild(r),t){const o=document.createElement("div");o.style.cssText="display:flex; gap:4px;";const l={2:Ke.red,3:"#FFD700",4:Ke.blue,5:Ke.mint};[2,3,4,5].forEach(c=>{const d=document.createElement("button");d.textContent=String(c),d.style.cssText=`
          width:30px; height:30px; border-radius:6px; border:2px solid ${Ke.border};
          background:transparent; color:${l[c]}; font-weight:800; font-size:13px;
          cursor:pointer; transition:all .12s; font-family:'Nunito',sans-serif;
        `,d.addEventListener("click",()=>{o.querySelectorAll("button").forEach(h=>{h.style.background="transparent",h.style.borderColor=Ke.border}),d.style.background=l[c]+"33",d.style.borderColor=l[c],this.grades.set(e.id,c)}),o.appendChild(d)}),n.appendChild(o)}return n}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const Jg=.0025,Is=[new R(-14,.24,0),new R(-10,.24,.4),new R(-6,.24,-.3),new R(-2,.24,.5),new R(2,.24,-.4),new R(6,.24,.3),new R(10,.24,-.5),new R(14,.24,0),new R(18,.24,.4),new R(-8,.24,0),new R(4,.24,0)],dl={chat:["рџ’¬","рџ„","рџ—ЈпёЏ"],help:["рџ¤ќ","рџ’Ў","рџ“–"],conflict:["рџ ","рџ’ў","рџ¤"]};class Qg{constructor(){w(this,"students",[]);w(this,"targets",new Map);w(this,"socialEvents",[]);w(this,"socialTick",0);w(this,"breakTimer",0);w(this,"onBreakEnd",null);w(this,"active",!1);w(this,"bubbles",[]);w(this,"bubbleContainer");this.bubbleContainer=document.createElement("div"),this.bubbleContainer.style.cssText=`
      position:fixed; inset:0; pointer-events:none; z-index:90;
      font-family:'Nunito',sans-serif;
    `,document.body.appendChild(this.bubbleContainer)}start(e,t,n){this.students=e,this.breakTimer=t,this.onBreakEnd=n,this.active=!0,this.socialEvents=[],this.socialTick=0,this.targets.clear(),this.clearBubbles(),e.forEach((i,r)=>{const a=Is[r%Is.length],o=new R((Math.random()-.5)*6,0,(Math.random()-.5)*1.2),l=a.clone().add(o);l.x=Math.max(-17,Math.min(22,l.x)),l.z=Math.max(-1.8,Math.min(1.8,l.z)),l.y=.24,this.targets.set(i.data.id,l),i.seated=!1,i.setEmotion("happy")})}update(e){if(this.active){if(this.breakTimer-=e,this.breakTimer<=0){this.end();return}this.students.forEach(t=>{const n=this.targets.get(t.data.id);if(!n)return;const i=new R().subVectors(n,t.group.position);i.y=0;const r=i.length();if(r>.15){const a=Math.min(Jg*e,r);i.normalize().multiplyScalar(a),t.group.position.addScaledVector(i,1),t.group.position.y=.24,t.group.rotation.y=Math.atan2(i.x,i.z)}else{const a=Is[Math.floor(Math.random()*Is.length)],o=new R((Math.random()-.5)*5,0,(Math.random()-.5)*1.2),l=a.clone().add(o);if(l.x=Math.max(-17,Math.min(22,l.x)),l.z=Math.max(-1.8,Math.min(1.8,l.z)),l.y=.24,this.targets.set(t.data.id,l),Math.random()<.3){const c=["happy","happy","bored","neutral"];t.setEmotion(c[Math.floor(Math.random()*c.length)])}}}),this.socialEvents=this.socialEvents.filter(t=>(t.bubbleTimer-=e,t.bubbleTimer>0)),this.socialTick+=e,this.socialTick>=3e3&&(this.socialTick=0,this.trySpawnSocialEvent())}}trySpawnSocialEvent(){if(!(this.students.length<2))for(let e=0;e<8;e++){const t=Math.floor(Math.random()*this.students.length);let n=Math.floor(Math.random()*this.students.length);if(t===n)continue;const i=this.students[t],r=this.students[n];if(i.group.position.distanceTo(r.group.position)>6)continue;let o="chat";const l=i.data.type,c=r.data.type;if(l==="bully"||c==="bully"?o=Math.random()<.4?"conflict":"chat":((l==="genius"||l==="helper")&&(c==="anxious"||c==="average"||c==="lazy")||(c==="genius"||c==="helper")&&(l==="anxious"||l==="average"||l==="lazy"))&&(o="help"),o==="help"){const h=l==="genius"||l==="helper"?i:r,u=h===i?r:i;u.modifyStat("motivation",3),u.modifyStat("understanding",2),h.setEmotion("happy"),u.setEmotion("happy")}else if(o==="conflict"){const h=l==="bully"?r:i;h.modifyStat("motivation",-4),h.setEmotion("troubled")}else i.setEmotion("happy"),r.setEmotion("happy");this.socialEvents.push({aId:i.data.id,bId:r.data.id,type:o,bubbleTimer:2500});const d=dl[o][Math.floor(Math.random()*dl[o].length)];this.spawnBubbleFor(i.data.id,r.data.id,d);break}}spawnBubbleFor(e,t,n){const i=document.createElement("div");if(i.textContent=n,i.style.cssText=`
      position:absolute; font-size:22px; top:30%; left:50%;
      transform:translate(-50%,-50%); animation:floatUp 2.5s ease-out forwards;
    `,!document.querySelector("#ew2-bubble-style")){const r=document.createElement("style");r.id="ew2-bubble-style",r.textContent="@keyframes floatUp{0%{opacity:1;transform:translate(-50%,-50%) translateY(0)}100%{opacity:0;transform:translate(-50%,-50%) translateY(-40px)}}",document.head.appendChild(r)}this.bubbleContainer.appendChild(i),this.bubbles.push({el:i,studentId:e}),setTimeout(()=>i.remove(),2600)}clearBubbles(){this.bubbles.forEach(e=>e.el.remove()),this.bubbles=[]}end(){this.active&&(this.active=!1,this.clearBubbles(),this.students.forEach(e=>{e.setEmotion("neutral"),e.seated=!0}),this.onBreakEnd?.())}forceEnd(){this.end()}isActive(){return this.active}getRemaining(){return Math.max(0,this.breakTimer)}dispose(){this.bubbleContainer.remove()}}const Zt={bg:"#0D1117",panel:"#161B22",border:"#30363D",text:"#E6EDF3",muted:"#8B949E"},e0=[{id:"warning",icon:"вњ‹",label:"Р”Р°С‚СЊ Р·Р°РјРµС‡Р°РЅРёРµ",desc:"РџСЂРµРґСѓРїСЂРµРґРёС‚СЊ Р·Р° РЅР°СЂСѓС€РµРЅРёРµ РґРёСЃС†РёРїР»РёРЅС‹",color:"#FFD700"},{id:"confiscate_phone",icon:"рџ“µ",label:"РћС‚РѕР±СЂР°С‚СЊ С‚РµР»РµС„РѕРЅ",desc:"Р—Р°Р±СЂР°С‚СЊ С‚РµР»РµС„РѕРЅ РґРѕ РєРѕРЅС†Р° СѓСЂРѕРєР°",color:"#FF4D4D"},{id:"wake_up",icon:"рџ‘‹",label:"Р Р°Р·Р±СѓРґРёС‚СЊ",desc:"Р Р°Р·Р±СѓРґРёС‚СЊ СЃРїСЏС‰РµРіРѕ СѓС‡РµРЅРёРєР°",color:"#58A6FF"},{id:"praise",icon:"в­ђ",label:"РџРѕС…РІР°Р»РёС‚СЊ",desc:"РћС‚РјРµС‚РёС‚СЊ СѓСЃРµСЂРґРёРµ РёР»Рё РѕС‚РІРµС‚ СѓС‡РµРЅРёРєР°",color:"#4FFFB0"},{id:"dismiss",icon:"рџљЄ",label:"Р’С‹РіРЅР°С‚СЊ РёР· РєР»Р°СЃСЃР°",desc:"Р’С‹РіРЅР°С‚СЊ Р·Р° СЃРµСЂСЊС‘Р·РЅРѕРµ РїРѕРІРµРґРµРЅРёРµ (-15 РґРёСЃС†РёРїР»РёРЅР°)",color:"#FF4D4D"}];class t0{constructor(){w(this,"overlay");this.overlay=document.createElement("div"),this.overlay.id="ew2-remark",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000077;
      display:flex; align-items:center; justify-content:center;
      z-index:280; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .15s;
    `,document.body.appendChild(this.overlay)}open(e,t){this.overlay.innerHTML="";const n={genius:"рџ§  РћС‚Р»РёС‡РЅРёРє",lazy:"рџґ Р›РµРЅС‚СЏР№",bully:"рџ¤ РҐСѓР»РёРіР°РЅ",anxious:"рџ° РўСЂРµРІРѕР¶РЅС‹Р№",helper:"рџ¤ќ РџРѕРјРѕС‰РЅРёРє",average:"рџЉ РћР±С‹С‡РЅС‹Р№"},i=document.createElement("div");i.style.cssText=`
      background:${Zt.bg}; border:1px solid ${Zt.border}; border-radius:14px;
      padding:20px 24px; width:460px; max-width:94vw;
      display:flex; flex-direction:column; gap:10px;
    `,i.innerHTML=`
      <div style="display:flex;align-items:center;gap:10px;padding-bottom:10px;border-bottom:1px solid ${Zt.border};">
        <div style="font-size:26px;">${n[e.type]?.split(" ")[0]??"рџЉ"}</div>
        <div>
          <div style="font-weight:800;font-size:17px;color:${Zt.text};">${e.name}</div>
          <div style="font-size:11px;color:${Zt.muted};">${n[e.type]??""} В· Р”РёСЃС†РёРїР»РёРЅР°: ${e.stats.behavior}/100 В· Р’РЅРёРјР°РЅРёРµ: ${e.stats.attention}/100</div>
        </div>
      </div>
    `,e0.filter(o=>o.id==="confiscate_phone"?e.stats.attention<35:o.id==="wake_up"?e.stats.attention<20:o.id==="dismiss"?e.stats.behavior<30:!0).forEach(o=>{const l=document.createElement("button");l.style.cssText=`
        background:${Zt.panel}; border:1px solid ${Zt.border}; border-radius:10px;
        padding:10px 14px; cursor:pointer; text-align:left;
        display:flex; align-items:center; gap:10px; transition:all .12s;
        font-family:'Nunito',sans-serif; width:100%;
      `,l.innerHTML=`
        <span style="font-size:20px;">${o.icon}</span>
        <div>
          <div style="font-weight:700;color:${o.color};font-size:13px;">${o.label}</div>
          <div style="font-size:11px;color:${Zt.muted};">${o.desc}</div>
        </div>
      `,l.addEventListener("mouseenter",()=>{l.style.borderColor=o.color,l.style.background=o.color+"18"}),l.addEventListener("mouseleave",()=>{l.style.borderColor=Zt.border,l.style.background=Zt.panel}),l.addEventListener("click",()=>{this.hide(),t({type:o.id,studentId:e.id})}),i.appendChild(l)});const a=document.createElement("button");a.style.cssText=`
      background:transparent; border:1px solid ${Zt.border}; border-radius:8px;
      color:${Zt.muted}; font-size:12px; font-weight:600; padding:8px;
      cursor:pointer; font-family:'Nunito',sans-serif; margin-top:2px;
    `,a.textContent="РћС‚РјРµРЅР°",a.addEventListener("click",()=>this.hide()),i.appendChild(a),this.overlay.appendChild(i),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const ii=class ii{constructor(){w(this,"ctx",null);w(this,"master",null);w(this,"sfx",null);w(this,"music",null);w(this,"_ready",!1)}static getInstance(){return ii._inst||(ii._inst=new ii),ii._inst}init(){if(!this._ready)try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.65,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.music=this.ctx.createGain(),this.music.gain.value=.55,this.music.connect(this.master),this._ready=!0,this._startAmbient()}catch{}}playBell(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=t;const a=e+n*.13;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.15,a+.02),r.gain.exponentialRampToValueAtTime(.001,a+2),i.connect(r),r.connect(this.sfx),i.start(a),i.stop(a+2.1)})}playClick(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(900,e),t.frequency.exponentialRampToValueAtTime(450,e+.06),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(n),n.connect(this.sfx),t.start(e),t.stop(e+.11)}playChime(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.value=t;const a=e+n*.08;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.09,a+.01),r.gain.exponentialRampToValueAtTime(.001,a+.9),i.connect(r),r.connect(this.sfx),i.start(a),i.stop(a+1)})}playWarning(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime;for(let t=0;t<2;t++){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.value=340-t*40;const r=e+t*.18;i.gain.setValueAtTime(.07,r),i.gain.exponentialRampToValueAtTime(.001,r+.15),n.connect(i),i.connect(this.sfx),n.start(r),n.stop(r+.18)}}playWrite(){if(!this.ctx||!this.sfx)return;const e=this.ctx.sampleRate,n=this.ctx.createBuffer(1,Math.floor(e*.08),e),i=n.getChannelData(0);for(let l=0;l<i.length;l++)i[l]=(Math.random()*2-1)*(1-l/i.length)*.4;const r=this.ctx.createBufferSource(),a=this.ctx.createBiquadFilter(),o=this.ctx.createGain();a.type="bandpass",a.frequency.value=4e3,a.Q.value=1.2,o.gain.value=.04,r.buffer=n,r.connect(a),a.connect(o),o.connect(this.sfx),r.start()}playRemark(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(440,e),t.frequency.linearRampToValueAtTime(330,e+.2),n.gain.setValueAtTime(.07,e),n.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(n),n.connect(this.sfx),t.start(e),t.stop(e+.35)}_startAmbient(){if(!this.ctx||!this.music)return;const e=[261.63,293.66,329.63,392,440,523.25,587.33,659.25],t=()=>{if(!this.ctx||!this.music)return;const n=this.ctx.currentTime,i=e[Math.floor(Math.random()*e.length)],r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.value=i;const o=1.8+Math.random()*2.2;a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.08,n+.3),a.gain.setValueAtTime(.08,n+o-.4),a.gain.linearRampToValueAtTime(0,n+o),r.connect(a),a.connect(this.music),r.start(n),r.stop(n+o+.1),setTimeout(t,(o*.65+Math.random()*2)*1e3)};t()}playGameOver(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime;this.music&&(this.music.gain.setValueAtTime(this.music.gain.value,e),this.music.gain.linearRampToValueAtTime(0,e+1.5)),[440,330,220].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t;const a=e+n*.55;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.22,a+.05),r.gain.exponentialRampToValueAtTime(.001,a+1.2),i.connect(r),r.connect(this.sfx),i.start(a),i.stop(a+1.3)})}setMasterVolume(e){this.master&&(this.master.gain.value=Math.max(0,Math.min(1,e)))}setMusicVolume(e){this.music&&(this.music.gain.value=Math.max(0,Math.min(1,e)))}get ready(){return this._ready}};w(ii,"_inst");let na=ii;const hl=52,ks=110,zr=50;class n0{constructor(e){w(this,"root");w(this,"joystickBase");w(this,"joystickThumb");w(this,"player");w(this,"bus",qt.getInstance());w(this,"joyId",null);w(this,"joyOriginX",0);w(this,"joyOriginY",0);w(this,"lookId",null);w(this,"lookLastX",0);w(this,"lookLastY",0);this.player=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 500; pointer-events: none;
      touch-action: none; user-select: none; -webkit-user-select: none;
    `,this.joystickBase=document.createElement("div"),this.joystickBase.style.cssText=`
      position: absolute;
      width: ${ks}px; height: ${ks}px;
      border-radius: 50%;
      background: rgba(255,255,255,0.10);
      border: 2px solid rgba(255,255,255,0.25);
      display: flex; align-items: center; justify-content: center;
      pointer-events: none;
      display: none;
    `,this.joystickThumb=document.createElement("div"),this.joystickThumb.style.cssText=`
      width: ${zr}px; height: ${zr}px;
      border-radius: 50%;
      background: rgba(255,255,255,0.55);
      border: 2px solid rgba(255,255,255,0.8);
      pointer-events: none;
      position: absolute;
    `,this.joystickBase.appendChild(this.joystickThumb),this.root.appendChild(this.joystickBase);const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      right: env(safe-area-inset-right, 0px);
      bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
      margin-right: 24px;
      width: 72px; height: 72px;
      border-radius: 50%;
      background: rgba(88,166,255,0.30);
      border: 2px solid rgba(88,166,255,0.70);
      display: flex; align-items: center; justify-content: center;
      font-size: 26px; pointer-events: auto;
      touch-action: manipulation;
      color: white;
    `,t.textContent="вљЎ",t.addEventListener("touchstart",i=>{i.preventDefault(),this.bus.emit("playerInteract",this.player.camera.position.clone()),t.style.background="rgba(88,166,255,0.60)"},{passive:!1}),t.addEventListener("touchend",()=>{t.style.background="rgba(88,166,255,0.30)"}),this.root.appendChild(t);const n=document.createElement("div");n.style.cssText=`
      position: absolute;
      right: env(safe-area-inset-right, 0px);
      top: calc(env(safe-area-inset-top, 0px) + 12px);
      margin-right: 12px;
      width: 48px; height: 48px;
      border-radius: 10px;
      background: rgba(0,0,0,0.40);
      border: 1px solid rgba(255,255,255,0.20);
      display: flex; align-items: center; justify-content: center;
      font-size: 20px; pointer-events: auto;
      touch-action: manipulation;
      color: white;
    `,n.textContent="вЏё",n.addEventListener("touchstart",i=>{i.preventDefault(),window.dispatchEvent(new KeyboardEvent("keydown",{code:"Escape",key:"Escape",bubbles:!0}))},{passive:!1}),this.root.appendChild(n),this.root.style.pointerEvents="auto",this.root.addEventListener("touchstart",this._onTouchStart.bind(this),{passive:!1}),this.root.addEventListener("touchmove",this._onTouchMove.bind(this),{passive:!1}),this.root.addEventListener("touchend",this._onTouchEnd.bind(this),{passive:!1}),this.root.addEventListener("touchcancel",this._onTouchEnd.bind(this),{passive:!1}),t.addEventListener("touchstart",i=>i.stopPropagation()),n.addEventListener("touchstart",i=>i.stopPropagation()),document.getElementById("app").appendChild(this.root)}_onTouchStart(e){e.preventDefault();for(const t of Array.from(e.changedTouches)){const n=t.clientX<window.innerWidth*.45;if(n&&this.joyId===null){this.joyId=t.identifier,this.joyOriginX=t.clientX,this.joyOriginY=t.clientY;const i=ks/2;this.joystickBase.style.left=`${t.clientX-i}px`,this.joystickBase.style.top=`${t.clientY-i}px`,this.joystickBase.style.display="flex",this._updateThumb(0,0)}else!n&&this.lookId===null&&(this.lookId=t.identifier,this.lookLastX=t.clientX,this.lookLastY=t.clientY)}}_onTouchMove(e){e.preventDefault();for(const t of Array.from(e.changedTouches)){if(t.identifier===this.joyId){const n=t.clientX-this.joyOriginX,i=t.clientY-this.joyOriginY,r=Math.sqrt(n*n+i*i),a=Math.min(r,hl),o=Math.atan2(i,n),l=Math.cos(o)*a,c=Math.sin(o)*a;this._updateThumb(l,c);const d=a/hl,h=(r>4?n/r:0)*d,u=(r>4?i/r:0)*d;this._setMoveVec(h,u)}if(t.identifier===this.lookId){const n=t.clientX-this.lookLastX,i=t.clientY-this.lookLastY;this.lookLastX=t.clientX,this.lookLastY=t.clientY,this.player.applyTouchLook(n,i)}}}_onTouchEnd(e){for(const t of Array.from(e.changedTouches))t.identifier===this.joyId&&(this.joyId=null,this.joystickBase.style.display="none",this.player.mobileVec.set(0,0,0)),t.identifier===this.lookId&&(this.lookId=null)}_updateThumb(e,t){const n=(ks-zr)/2;this.joystickThumb.style.transform=`translate(${e+n}px, ${t+n}px)`}_setMoveVec(e,t){const n=new R,i=new R;this.player.camera.getWorldDirection(n),n.y=0,n.normalize(),i.crossVectors(n,new R(0,1,0)).normalize(),this.player.mobileVec.set(0,0,0).addScaledVector(n,-t).addScaledVector(i,e)}destroy(){this.root.remove()}}const Qe={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",red:"#FF4D4D",green:"#3FB950",blue:"#58A6FF",text:"#E6EDF3",muted:"#8B949E"};class i0{constructor(){w(this,"overlay");w(this,"onNext",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-report",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:600; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .25s; backdrop-filter:blur(4px);
      overflow-y:auto; padding:20px;
    `,document.body.appendChild(this.overlay)}show(e,t,n){this.onNext=n,this.overlay.innerHTML="";const i=document.createElement("div");i.style.cssText=`
      background:${Qe.bg}; border:1px solid ${Qe.border}; border-radius:18px;
      padding:30px 36px; width:560px; max-width:96vw; display:flex; flex-direction:column; gap:20px;
    `,i.innerHTML+=`
      <div style="text-align:center;">
        <div style="font-size:11px; color:${Qe.muted}; text-transform:uppercase; letter-spacing:1px;">${W("sched.day")} ${e.dayNumber} В· ${e.subject}</div>
        <h2 style="margin:6px 0 0; font-size:22px; color:${Qe.text}; font-weight:900;">${W("report.title")}</h2>
        <div style="font-size:15px; color:${Qe.mint}; margin-top:4px; font-weight:700;">В«${e.topic}В»</div>
      </div>
    `;const r=document.createElement("div");if(r.style.cssText="display:grid; grid-template-columns:1fr 1fr; gap:10px;",[{label:W("report.understood"),value:`${e.understoodCount} / ${this.getTotalStudents()}`,color:Qe.mint},{label:W("report.avg_und"),value:`${e.avgUnderstanding}%`,color:Qe.blue},{label:W("report.xp"),value:`+${e.xpEarned} XP`,color:Qe.gold},{label:W("report.rep"),value:e.repDelta>=0?`+${e.repDelta}`:String(e.repDelta),color:e.repDelta>=0?Qe.green:Qe.red}].forEach(c=>{const d=document.createElement("div");d.style.cssText=`background:${Qe.panel}; border:1px solid ${Qe.border}; border-radius:10px; padding:14px 16px;`,d.innerHTML=`<div style="font-size:12px; color:${Qe.muted}; margin-bottom:4px;">${c.label}</div><div style="font-size:20px; font-weight:900; color:${c.color};">${c.value}</div>`,r.appendChild(d)}),i.appendChild(r),e.notebookGrades.length>0){const c=document.createElement("div");c.innerHTML=`<div style="font-size:13px; font-weight:700; color:${Qe.muted}; margin-bottom:8px;">${W("report.nb_grades")}</div>`;const d=document.createElement("div");d.style.cssText="display:flex; flex-direction:column; gap:4px;",e.notebookGrades.forEach(h=>{const u=h.grade===5?Qe.green:h.grade===4?Qe.mint:h.grade===3?Qe.gold:Qe.red,m=document.createElement("div");m.style.cssText=`display:flex; align-items:center; justify-content:space-between; padding:6px 12px; background:${Qe.panel}; border-radius:6px; font-size:13px;`,m.innerHTML=`<span style="color:${Qe.text};">${h.studentName}</span><span style="color:${u}; font-weight:900; font-size:16px;">${h.grade??"вЂ”"}</span>`,d.appendChild(m)}),c.appendChild(d),i.appendChild(c)}const o=document.createElement("div");o.style.cssText=`padding:10px 14px; border-radius:8px; border-left:3px solid ${e.hwGiven?Qe.blue:Qe.muted}; background:${Qe.panel};`,o.innerHTML=e.hwGiven?`<span style="color:${Qe.blue}; font-weight:700;">${W("report.hw_given")}</span><span style="color:${Qe.muted}; font-size:13px; margin-left:8px;">(${e.hwDifficulty})</span>`:`<span style="color:${Qe.muted}; font-size:13px;">${W("report.hw_none")}</span>`,i.appendChild(o);const l=document.createElement("button");l.textContent=W("report.next"),l.style.cssText=`padding:13px; border-radius:10px; border:none; background:${Qe.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`,l.addEventListener("click",()=>{this.hide(),this.onNext?.()}),i.appendChild(l),this.overlay.appendChild(i),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}getTotalStudents(){return 15}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const zt={bg:"#060a14",panel:"#0D1117",border:"#30363D",mint:"#4FFFB0",text:"#E6EDF3",muted:"#8B949E"};class s0{constructor(){w(this,"overlay");w(this,"onStart",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-schedule",this.overlay.style.cssText=`
      position:fixed; inset:0; background:${zt.bg}; display:flex; align-items:center;
      justify-content:center; z-index:900; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .3s;
      overflow-y:auto; -webkit-overflow-scrolling:touch;
    `,document.body.appendChild(this.overlay)}show(e,t,n){this.onStart=n,this.overlay.innerHTML="";const i=document.createElement("div");i.style.cssText=`
      background:${zt.panel}; border:1px solid ${zt.border}; border-radius:18px;
      padding:32px 40px; width:480px; max-width:96vw; display:flex; flex-direction:column; gap:18px;
    `,i.innerHTML=`
      <div>
        <div style="font-size:11px; color:${zt.muted}; text-transform:uppercase; letter-spacing:1px;">${W("sched.label")}</div>
        <h2 style="margin:4px 0 0; font-size:22px; font-weight:900; color:${zt.text};">${W("sched.day")} ${e}</h2>
      </div>
    `;const r=document.createElement("div");r.style.cssText="display:flex; flex-direction:column; gap:8px;",t.forEach(l=>{const c=document.createElement("div"),d=l.current,h=l.done;c.style.cssText=`
        display:flex; align-items:center; gap:14px; padding:12px 16px; border-radius:10px;
        border:1px solid ${d?zt.mint:zt.border};
        background:${d?zt.mint+"18":h?"#ffffff08":zt.bg};
        opacity:${h?"0.5":"1"};
      `,c.innerHTML=`
        <span style="font-size:24px;">${l.icon}</span>
        <div style="flex:1;">
          <div style="font-weight:700; color:${d?zt.mint:zt.text}; font-size:14px;">${l.subject}</div>
          <div style="font-size:12px; color:${zt.muted};">${l.time}</div>
        </div>
        <span style="font-size:18px;">${h?"вњ…":d?"в–¶":"в—‹"}</span>
      `,r.appendChild(c)}),i.appendChild(r);const a=document.createElement("button"),o=t.find(l=>l.current);a.textContent=o?`${W("sched.start")} ${o.index+1}`:W("sched.continue"),a.style.cssText=`padding:13px; border-radius:10px; border:none; background:${zt.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`,a.addEventListener("click",()=>{this.hide(),this.onStart?.()}),i.appendChild(a),this.overlay.appendChild(i),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const mt={bg:"#060a14",panel:"#0D1117",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",purple:"#BC8CFF",text:"#E6EDF3",muted:"#8B949E"},ul={pedagogy:mt.mint,psychology:mt.purple,org:mt.gold};class r0{constructor(e){w(this,"overlay");w(this,"tree");w(this,"skillPoints",0);w(this,"onClose",null);this.tree=e,this.overlay=document.createElement("div"),this.overlay.id="ew2-skilltree",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#000000cc; display:flex; align-items:center;
      justify-content:center; z-index:700; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .25s; backdrop-filter:blur(6px);
      overflow-y:auto; padding:20px;
    `,document.body.appendChild(this.overlay)}open(e,t){this.skillPoints=e,this.onClose=t,this.render(),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}render(){this.overlay.innerHTML="";const e=document.createElement("div");e.style.cssText=`
      background:${mt.bg}; border:1px solid ${mt.border}; border-radius:18px;
      padding:30px 36px; width:740px; max-width:96vw; display:flex; flex-direction:column; gap:24px;
    `;const t=document.createElement("div");t.style.cssText="display:flex; align-items:center; justify-content:space-between;",t.innerHTML=`
      <div>
        <h2 style="margin:0; font-size:22px; font-weight:900; color:${mt.text};">${W("skills.title")}</h2>
        <div style="font-size:13px; color:${mt.muted}; margin-top:3px;">${W("skills.points")} <span style="color:${mt.gold}; font-weight:800;">${this.skillPoints}</span></div>
      </div>
    `;const n=document.createElement("button");n.textContent="вњ•",n.style.cssText=`width:34px; height:34px; border-radius:8px; border:1px solid ${mt.border}; background:${mt.panel}; color:${mt.text}; cursor:pointer; font-size:16px;`,n.addEventListener("click",()=>{this.hide(),this.onClose?.()}),t.appendChild(n),e.appendChild(t);const i=ta,r={};i.forEach(l=>{r[l.branch]||(r[l.branch]=[]),r[l.branch].push(l)});const a={pedagogy:W("skills.branch.pedagogy"),psychology:W("skills.branch.psychology"),org:W("skills.branch.org")},o=document.createElement("div");o.style.cssText="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;",Object.entries(r).forEach(([l,c])=>{const d=document.createElement("div");d.style.cssText="display:flex; flex-direction:column; gap:8px;";const h=document.createElement("div");h.style.cssText=`font-size:13px; font-weight:800; color:${ul[l]??mt.mint}; padding-bottom:4px; border-bottom:1px solid ${mt.border};`,h.textContent=a[l]??l,d.appendChild(h),c.forEach(u=>{const m=this.tree.has(u.id),g=!m&&this.tree.canUnlock(u.id),x=ul[l]??mt.mint,f=document.createElement("button");f.style.cssText=`
          padding:10px 12px; border-radius:8px; text-align:left; cursor:${g&&!m?"pointer":"default"};
          border:1px solid ${m?x:mt.border};
          background:${m?x+"18":g?mt.panel:"#0a0d12"};
          transition:all .15s; width:100%;
          opacity:${!m&&!g?"0.5":"1"};
        `,f.innerHTML=`
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span style="font-size:18px;">${u.icon}</span>
            <span style="font-weight:800; font-size:13px; color:${m?x:mt.text};">${u.name}</span>
            ${m?`<span style="margin-left:auto; color:${x}; font-size:12px;">вњ“</span>`:`<span style="margin-left:auto; color:${mt.muted}; font-size:12px;">${u.cost} SP</span>`}
          </div>
          <div style="font-size:11px; color:${mt.muted}; line-height:1.4;">${u.desc}</div>
        `,g&&!m&&(f.addEventListener("mouseenter",()=>{f.style.borderColor=x,f.style.background=x+"22"}),f.addEventListener("mouseleave",()=>{f.style.borderColor=mt.border,f.style.background=mt.panel}),f.addEventListener("click",()=>{this.tree.unlock(u.id),this.skillPoints=this.tree.points,this.render()})),d.appendChild(f)}),o.appendChild(d)}),e.appendChild(o),this.overlay.appendChild(e)}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const ht={bg:"#060a14",panel:"#0D1117",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",red:"#FF4D4D",green:"#3FB950",blue:"#58A6FF",text:"#E6EDF3",muted:"#8B949E"};class a0{constructor(){w(this,"overlay");w(this,"onNext",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-week",this.overlay.style.cssText=`
      position:fixed; inset:0; background:${ht.bg}; display:flex; align-items:center;
      justify-content:center; z-index:800; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .3s; overflow-y:auto; padding:20px;
    `,document.body.appendChild(this.overlay)}show(e,t){this.onNext=t,this.overlay.innerHTML="";const n=document.createElement("div");n.style.cssText=`
      background:${ht.panel}; border:1px solid ${ht.border}; border-radius:20px;
      padding:36px 44px; width:600px; max-width:96vw; display:flex; flex-direction:column; gap:24px;
    `,n.innerHTML=`
      <div style="text-align:center;">
        <div style="font-size:36px; margin-bottom:8px;">${e.promoted?"рџЋ‰":"рџ“…"}</div>
        <h2 style="margin:0; font-size:26px; font-weight:900; color:${ht.text};">${W("week.title")} ${e.weekNumber}</h2>
        ${e.promoted?`<div style="color:${ht.gold}; font-weight:700; font-size:15px; margin-top:6px;">${W("week.promoted")}</div>`:""}
      </div>
    `;const i=document.createElement("div");i.style.cssText="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px;",[{label:W("week.xp"),val:`+${e.xpTotal} XP`,color:ht.gold},{label:W("week.rep"),val:e.repDelta>=0?`+${e.repDelta}`:String(e.repDelta),color:e.repDelta>=0?ht.green:ht.red},{label:W("week.money"),val:`${e.moneyEarned.toLocaleString("ru-RU")} в‚ё`,color:ht.mint},{label:W("week.sp"),val:`+${e.skillPoints} SP`,color:ht.blue}].forEach(d=>{const h=document.createElement("div");h.style.cssText=`background:${ht.bg}; border:1px solid ${ht.border}; border-radius:12px; padding:16px 18px;`,h.innerHTML=`
        <div style="font-size:12px; color:${ht.muted}; margin-bottom:4px;">${d.label}</div>
        <div style="font-size:22px; font-weight:900; color:${d.color};">${d.val}</div>
      `,i.appendChild(h)}),n.appendChild(i);const a=document.createElement("div");a.style.cssText=`background:${ht.bg}; border:1px solid ${ht.border}; border-radius:10px; padding:14px 18px; display:flex; align-items:center; gap:14px;`,a.innerHTML=`
      <span style="font-size:30px;">рџЋ–</span>
      <div>
        <div style="font-size:12px; color:${ht.muted};">${W("week.career")}</div>
        <div style="font-size:16px; font-weight:800; color:${ht.gold};">${e.careerLevel.name}</div>
        <div style="font-size:12px; color:${ht.muted}; margin-top:2px;">${W("week.bonus")} ${(e.careerLevel.salaryBonus*100).toFixed(0)}%</div>
      </div>
    `,n.appendChild(a);const o=document.createElement("div");o.innerHTML=`<div style="font-size:13px; font-weight:700; color:${ht.muted}; margin-bottom:8px;">${W("week.lessons")} ${e.lessonReports.length}</div>`;const l=document.createElement("div");l.style.cssText="display:flex; flex-direction:column; gap:4px; max-height:160px; overflow-y:auto;",e.lessonReports.forEach(d=>{const h=document.createElement("div");h.style.cssText=`display:flex; justify-content:space-between; font-size:13px; padding:5px 10px; background:${ht.bg}; border-radius:6px; color:${ht.text};`,h.innerHTML=`<span>В«${d.topic}В»</span><span style="color:${ht.mint};">+${d.xpEarned} XP</span>`,l.appendChild(h)}),o.appendChild(l),n.appendChild(o);const c=document.createElement("button");c.textContent=W("week.next"),c.style.cssText=`padding:14px; border-radius:10px; border:none; background:${ht.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`,c.addEventListener("click",()=>{this.hide(),this.onNext?.()}),n.appendChild(c),this.overlay.appendChild(n),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const pl=[{name:"Aigerim Seitkali",subject:"Mathematics",grade:9},{name:"ErlanBekuly",subject:"Physics",grade:10},{name:"Gulnar Kasymova",subject:"Kazakh Lang.",grade:8},{name:"Dosym Nurlanov",subject:"Chemistry",grade:11},{name:"Zarina Alieva",subject:"Biology",grade:7},{name:"Bolatbek Sarsenov",subject:"Kazakh Hist.",grade:9},{name:"Kamila Zhanserik",subject:"English",grade:10},{name:"Nursulu Baizhanova",subject:"Computer Sci.",grade:11}],fl=[{quality:"excellent",notes:["Teacher explains material very clearly","Students are fully engaged","Excellent discipline and learning atmosphere"],hint:"рџ‘Ќ Model Lesson"},{quality:"excellent",notes:["Differentiated approach to students","Uses interactive methods","Lesson objective achieved"],hint:"рџЊџ Excellent Lesson"},{quality:"good",notes:["Lesson pace slightly fast","Some students are distracted","Generally clear instruction"],hint:"рџ‘Њ Good Lesson"},{quality:"good",notes:["Topic covered but pace is high","A few students falling behind","Good classroom interaction"],hint:"рџ‘Њ Good Lesson"},{quality:"poor",notes:["Students struggling to follow explanation","Discipline issues observed","Methodology needs improvement"],hint:"вљ пёЏ Needs Improvement"},{quality:"poor",notes:["Lesson objective not clearly stated","Students are passive","Methodological support required"],hint:"вљ пёЏ Needs Support"}],ml=[{icon:"рџ¤",title:"Hallway Conflict",description:"Two 9th-grade students got into a fight during break. One is trying to leave school mid-day.",options:[{label:"рџ“ћ Call both parents",repDelta:3,scoreDelta:2,color:"#1a6b48"},{label:"рџ“‹ Log in behavior journal",repDelta:1,scoreDelta:1,color:"#2a5a8a"},{label:"рџљЄ Let them go home",repDelta:-3,scoreDelta:0,color:"#7a2a2a"}]},{icon:"рџ“±",title:"Widespread Phone Use",description:"A teacher reports: half of grade 10 is openly on phones during class. Asking for VP intervention.",options:[{label:"рџ“ў Announce school-wide ban",repDelta:5,scoreDelta:2,color:"#1a6b48"},{label:"рџ¤ќ Go support the teacher in class",repDelta:2,scoreDelta:1,color:"#2a5a8a"},{label:"рџ¤· Leave it to the teacher",repDelta:-1,scoreDelta:0,color:"#7a2a2a"}]},{icon:"рџ°",title:"Teacher Requests Unplanned Day Off",description:"Erlan Bekuly is asking for a day off for family reasons. No substitute available вЂ” 3 physics lessons.",options:[{label:"вњ… Approve вЂ” assign independent work",repDelta:3,scoreDelta:1,color:"#1a6b48"},{label:"рџ“ќ Ask another teacher to cover",repDelta:1,scoreDelta:0,color:"#2a5a8a"},{label:"вќЊ Deny вЂ” no substitute available",repDelta:-2,scoreDelta:-1,color:"#7a2a2a"}]},{icon:"рџЏ†",title:"Math Olympiad",description:"District olympiad is tomorrow. Aigerim Seitkali asks to release 3 top students for preparation.",options:[{label:"рџЊџ Give 2 hours prep time",repDelta:6,scoreDelta:2,color:"#1a6b48"},{label:"рџ“љ Give study list to take home",repDelta:2,scoreDelta:1,color:"#2a5a8a"},{label:"вЏ­пёЏ They participate as-is",repDelta:0,scoreDelta:0,color:"#7a2a2a"}]},{icon:"рџў",title:"Student Crying in Class",description:"Gulnar Kasymova reports: grade 8 student Ayaulym is crying after a test. Classmates are mocking her.",options:[{label:"рџ’¬ Talk to the class about support",repDelta:5,scoreDelta:2,color:"#1a6b48"},{label:"рџ“ћ Call Ayaulym's parents",repDelta:3,scoreDelta:1,color:"#2a5a8a"},{label:"рџ™„ Let the teacher handle it",repDelta:-2,scoreDelta:0,color:"#7a2a2a"}]},{icon:"рџЊђ",title:"Social Media Complaint",description:"Parents posted in the WhatsApp group: history teacher allegedly gives too much homework.",options:[{label:"рџ“Љ Analyse workload from grade journal",repDelta:4,scoreDelta:2,color:"#1a6b48"},{label:"рџ¤ќ Talk with teacher and parents",repDelta:3,scoreDelta:1,color:"#2a5a8a"},{label:"рџљ« Ignore social media",repDelta:-4,scoreDelta:-1,color:"#7a2a2a"}]},{icon:"рџ§№",title:"Spill in Classroom",description:"Cleaning staff reported: water was spilled in room 103 before a lesson. Students are already entering.",options:[{label:"рџљЄ Urgently move lesson to another room",repDelta:4,scoreDelta:2,color:"#1a6b48"},{label:"рџ§№ Ask to clean quickly, delay lesson",repDelta:1,scoreDelta:0,color:"#2a5a8a"},{label:"рџђ Hold lesson anyway вЂ” not a big deal",repDelta:-2,scoreDelta:-1,color:"#7a2a2a"}]},{icon:"рџЋ“",title:"Mentoring a New Teacher",description:"Kamila Zhanserik has only been working 2 months. A senior teacher suggests running an open lesson with a mentor.",options:[{label:"рџ“Њ Organise open lesson + feedback session",repDelta:6,scoreDelta:2,color:"#1a6b48"},{label:"рџ“– Give methodological literature",repDelta:2,scoreDelta:1,color:"#2a5a8a"},{label:"рџ¤· Let her figure it out herself",repDelta:-1,scoreDelta:0,color:"#7a2a2a"}]},{icon:"рџ”Ґ",title:"Fire Alarm During Lesson",description:"Fire alarm went off in Block A during a test. This is the 4th false alarm this month.",options:[{label:"рџљЁ Immediately evacuate all per protocol",repDelta:7,scoreDelta:2,color:"#1a6b48"},{label:"рџ“‹ Send duty officer to check",repDelta:1,scoreDelta:0,color:"#2a5a8a"},{label:"рџ’ Continue test вЂ” probably another false alarm",repDelta:-5,scoreDelta:-2,color:"#7a2a2a"}]},{icon:"рџ“°",title:"Journalist at School",description:"A local reporter wants to write a story about the school. Asks to tour classrooms and speak to students.",options:[{label:"рџЋ¤ Give a tour, prepare top students",repDelta:8,scoreDelta:2,color:"#1a6b48"},{label:"рџ“„ Give official comment, restricted access",repDelta:2,scoreDelta:1,color:"#2a5a8a"},{label:"рџљ« Politely decline вЂ” bad timing",repDelta:-1,scoreDelta:0,color:"#7a2a2a"}]},{icon:"рџ’Љ",title:"Student Fell Ill in Class",description:"Nursulu Baizhanova reports: a grade 11 student became ill right during the lesson. School nurse is on sick leave.",options:[{label:"рџљ‘ Call an ambulance immediately",repDelta:6,scoreDelta:2,color:"#1a6b48"},{label:"рџ›‹пёЏ Escort to medical room and call parents",repDelta:3,scoreDelta:1,color:"#2a5a8a"},{label:"рџ’§ Give water вЂ” it will pass",repDelta:-4,scoreDelta:-1,color:"#7a2a2a"}]},{icon:"рџЏ…",title:"District Certificate of Merit",description:'The district education department offers to nominate one teacher for "Best Teacher of the Year."',options:[{label:"рџЊџ Nominate based on results",repDelta:5,scoreDelta:2,color:"#1a6b48"},{label:"рџ—іпёЏ Hold a vote among teachers",repDelta:3,scoreDelta:1,color:"#2a5a8a"},{label:"вЏ­пёЏ Skip nomination this year",repDelta:-1,scoreDelta:0,color:"#7a2a2a"}]}],Ks=class Ks{constructor(){w(this,"el",null);w(this,"records",[]);w(this,"currentTeacherIdx",0);w(this,"onDoneCallback",null);w(this,"_accRepDelta",0);w(this,"_globalScore",0)}get totalScore(){return this.records.reduce((e,t)=>e+t.score,0)}get inspectCount(){return this.records.length}setGlobalScore(e){this._globalScore=e}show(e,t){this.onDoneCallback=t,this._accRepDelta=0,Pt(),this._renderBriefing(e)}_nextTeacher(){const e=pl[this.currentTeacherIdx%pl.length];return this.currentTeacherIdx++,e}_renderBriefing(e){this.el&&this.el.remove();const t=this._globalScore,n=Ks.DIRECTOR_THRESHOLD,i=Math.min(100,Math.round(t/n*100)),r=i>=80?"#4FFFB0":i>=50?"#FFD700":"#58A6FF",a=document.createElement("div");a.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;',a.innerHTML=`
<div style="background:#12203a;color:#e0e8f0;border-radius:16px;padding:38px 48px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);border:1px solid #1e3a5a;">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:6px;">
    рџЏ›пёЏ Deputy Principal вЂ” Morning Briefing
  </div>
  <div style="font-size:26px;font-weight:800;margin-bottom:4px;color:#fff;">Good morning, Deputy Principal!</div>
  <div style="color:#8ab4d4;font-size:14px;margin-bottom:22px;">
    Today you are inspecting: <strong style="color:#a8d8ff;">${e}</strong>
  </div>

  <!-- Progress to Director -->
  <div style="background:#0a1628;border-radius:10px;padding:16px 20px;margin-bottom:20px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div style="font-size:13px;color:#5a8cc0;font-weight:600;">рџ“€ Progress to Director</div>
      <div style="font-size:13px;color:${r};font-weight:800;">${t} / ${n} pts</div>
    </div>
    <div style="background:#1a2a40;border-radius:4px;height:10px;overflow:hidden;">
      <div style="width:${i}%;height:100%;background:${r};border-radius:4px;transition:width .4s;"></div>
    </div>
    <div style="font-size:12px;color:#4a6a8a;margin-top:6px;">
      ${i>=100?"рџЋ‰ Ready for Director appointment!":`${n-t} more points until Director`}
    </div>
  </div>

  <!-- Today's focus -->
  <div style="background:#0f1e30;border-radius:8px;padding:14px 18px;margin-bottom:24px;">
    <div style="font-size:13px;color:#5a8cc0;margin-bottom:8px;">рџ“‹ Today's tasks:</div>
    <div style="font-size:13px;color:#bad4e8;line-height:1.7;">
      вЂў Visit a lesson in <strong>${e}</strong><br>
      вЂў Evaluate the teacher's performance<br>
      вЂў Handle school operational issues
    </div>
  </div>

  <button id="vp-brief-start"
    style="width:100%;padding:14px;border:none;border-radius:10px;cursor:pointer;
      background:linear-gradient(135deg,#1a4a8a,#2a6ab0);color:#fff;
      font-size:16px;font-weight:700;">
    в–¶ Start Working Day
  </button>
</div>`,a.querySelector("#vp-brief-start").addEventListener("click",()=>{a.remove(),this.el=null,Math.random()<.5?this._renderIncident(e):this._render(e)}),document.body.appendChild(a),this.el=a}_renderIncident(e){this.el&&this.el.remove();const t=ml[Math.floor(Math.random()*ml.length)],n=document.createElement("div");n.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.78);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;',n.innerHTML=`
<div style="background:#1a2535;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#7a9ec4;text-transform:uppercase;margin-bottom:8px;">
    рџЏ›пёЏ Deputy Principal вЂ” School Situation
  </div>
  <div style="font-size:36px;margin-bottom:8px;">${t.icon}</div>
  <div style="font-size:22px;font-weight:700;margin-bottom:12px;">${t.title}</div>
  <div style="background:#0f1a28;border-radius:8px;padding:16px 20px;margin-bottom:24px;font-size:14px;line-height:1.6;color:#bad4e8;">
    ${t.description}
  </div>
  <div style="font-size:13px;color:#7a9ec4;margin-bottom:12px;">What will you do?</div>
  <div style="display:flex;flex-direction:column;gap:10px;" id="inc-options">
    ${t.options.map((i,r)=>`
      <button data-idx="${r}"
        style="padding:13px 18px;border:none;border-radius:8px;cursor:pointer;text-align:left;
          background:${i.color}44;color:#e0e8f0;font-size:14px;font-weight:600;
          border:1px solid ${i.color}88;transition:filter .15s;">
        ${i.label}
        <span style="float:right;font-size:12px;opacity:.7;">${i.repDelta>0?"+":""}${i.repDelta} rep</span>
      </button>`).join("")}
  </div>
</div>`,n.querySelectorAll("#inc-options button").forEach(i=>{const r=i;r.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.3)"}),r.addEventListener("mouseleave",()=>{r.style.filter=""}),r.addEventListener("click",()=>{const a=parseInt(r.dataset.idx);this._accRepDelta+=t.options[a].repDelta,n.remove(),this.el=null,this._render(e)})}),document.body.appendChild(n),this.el=n}_render(e){this.el&&this.el.remove();const t=this._nextTeacher(),n=fl[Math.floor(Math.random()*fl.length)],i=document.createElement("div");i.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;',i.innerHTML=`
<div style="background:#1e2a38;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:560px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.6);">

  <div style="font-size:11px;letter-spacing:2px;color:#7a9ec4;text-transform:uppercase;margin-bottom:6px;">
    рџЏ›пёЏ Deputy Principal вЂ” Lesson Inspection
  </div>
  <div style="font-size:22px;font-weight:700;margin-bottom:4px;">${e}</div>
  <div style="color:#8ab4d4;font-size:14px;margin-bottom:20px;">
    ${t.name} В· ${t.subject} В· Grade ${t.grade}
  </div>

  <div style="background:#162030;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
    <div style="font-size:13px;color:#7a9ec4;margin-bottom:10px;">
      рџ”Ќ Observations during the lesson:
      <span style="font-size:12px;opacity:.65;margin-left:8px;">${n.hint}</span>
    </div>
    ${n.notes.map(r=>`<div style="margin-bottom:6px;font-size:14px;">вЂў ${r}</div>`).join("")}
  </div>

  <div style="font-size:14px;color:#a0b8cc;margin-bottom:14px;font-weight:600;">
    Official lesson rating:
  </div>

  <div style="display:flex;gap:10px;justify-content:center;margin-bottom:26px;">
    <button id="vp-poor"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#6b1a1a;color:#ffaaaa;
        border:1px solid #8b2222;transition:filter .15s;">
      рџ‘Ћ<br>Needs Improvement<br><span style="font-size:11px;opacity:.6;">0 pts</span>
    </button>
    <button id="vp-good"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#1a4a34;color:#80ffc0;
        border:1px solid #2a7a50;transition:filter .15s;">
      рџ‘Њ<br>Good<br><span style="font-size:11px;opacity:.6;">+1 pt</span>
    </button>
    <button id="vp-excellent"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#2a1a6a;color:#c0a0ff;
        border:1px solid #4a2e9a;transition:filter .15s;">
      в­ђ<br>Excellent<br><span style="font-size:11px;opacity:.6;">+2 pts</span>
    </button>
  </div>

  <div style="display:flex;justify-content:space-between;align-items:center;
    border-top:1px solid #2a3a4a;padding-top:14px;">
    <div style="font-size:12px;color:#5a7a9a;">
      Inspections today: ${this.records.length}
      ${this._accRepDelta!==0?` В· Rep: ${this._accRepDelta>0?"+":""}${this._accRepDelta}`:""}
    </div>
    <button id="vp-finish"
      style="padding:10px 20px;border:none;border-radius:7px;cursor:pointer;
        background:#1a2a3a;color:#6a9ab8;font-size:13px;border:1px solid #2a3a4a;">
      Finish Round
    </button>
  </div>
</div>`,["poor","good","excellent"].forEach(r=>{const a=i.querySelector(`#vp-${r}`);a.addEventListener("mouseenter",()=>{a.style.filter="brightness(1.25)"}),a.addEventListener("mouseleave",()=>{a.style.filter=""}),a.addEventListener("click",()=>{const o=r==="poor"?0:r==="good"?1:2;this.records.push({roomLabel:e,teacherName:t.name,rating:r,score:o}),i.remove(),this.el=null,this._renderPostFeedback(t.name,r,e)})}),i.querySelector("#vp-finish").addEventListener("click",()=>{Tt(),i.remove(),this.el=null,this.onDoneCallback?.(this.records,this._accRepDelta)}),document.body.appendChild(i),this.el=i}_renderPostFeedback(e,t,n){const i=t==="excellent"?"в­ђ Excellent":t==="good"?"рџ‘Њ Good":"рџ‘Ћ Needs Improvement",r=t==="excellent"?"#c0a0ff":t==="good"?"#80ffc0":"#ffaaaa",a=t==="poor"?[{label:"рџ“‹ Schedule unplanned assessment",repDelta:1,hint:"Official oversight"},{label:"рџ¤ќ Have a personal talk with teacher",repDelta:2,hint:"Individual support"},{label:"рџ“љ Send to professional development",repDelta:3,hint:"Long-term improvement"},{label:"вЏ­пёЏ Just log in protocol",repDelta:0,hint:"No additional steps"}]:t==="good"?[{label:"рџ“ќ Give written recommendations",repDelta:1,hint:"Methodological support"},{label:"рџ“Љ Suggest an open lesson",repDelta:2,hint:"Knowledge sharing"},{label:"вЏ­пёЏ Log in protocol and continue",repDelta:0,hint:"Standard procedure"}]:[{label:"рџЏ… Nominate for school award",repDelta:3,hint:"Motivates colleagues"},{label:"рџ‘Џ Praise at staff council",repDelta:2,hint:"Boosts morale"},{label:"рџ“Њ Recommend as mentor",repDelta:2,hint:"Spreading best practice"},{label:"вЏ­пёЏ Leave things as they are",repDelta:0,hint:"No extra action"}],o=document.createElement("div");o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;',o.innerHTML=`
<div style="background:#1a2a3a;color:#e0e8f0;border-radius:14px;padding:34px 42px;
  max-width:500px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:10px;">
    рџ“‹ Deputy Principal вЂ” Post Inspection
  </div>
  <div style="margin-bottom:6px;">
    <span style="font-size:15px;color:#a0c0e0;">${e}</span>
    <span style="margin-left:10px;font-size:13px;color:${r};font-weight:700;">${i}</span>
  </div>
  <div style="font-size:14px;color:#7a9ab8;margin-bottom:20px;">${n}</div>

  <div style="font-size:13px;color:#5a8cc0;margin-bottom:12px;font-weight:600;">
    Your next steps:
  </div>
  <div id="post-actions" style="display:flex;flex-direction:column;gap:9px;">
    ${a.map((l,c)=>`
      <button data-idx="${c}"
        style="padding:12px 16px;border:none;border-radius:8px;cursor:pointer;text-align:left;
          background:#0f1e30;color:#c8dcf0;font-size:13px;font-weight:600;
          border:1px solid #1e3040;transition:filter .15s;display:flex;justify-content:space-between;align-items:center;">
        <span>${l.label}</span>
        <span style="font-size:11px;color:#4a7a9a;">${l.hint}${l.repDelta>0?` В· +${l.repDelta} rep`:""}</span>
      </button>`).join("")}
  </div>
</div>`,o.querySelectorAll("#post-actions button").forEach(l=>{const c=l;c.addEventListener("mouseenter",()=>{c.style.filter="brightness(1.3)"}),c.addEventListener("mouseleave",()=>{c.style.filter=""}),c.addEventListener("click",()=>{const d=a[parseInt(c.dataset.idx)];this._accRepDelta+=d.repDelta,o.remove(),this.el=null,Tt(),this.onDoneCallback?.(this.records,this._accRepDelta)})}),document.body.appendChild(o),this.el=o}hide(){this.el&&(Tt(),this.el.remove(),this.el=null)}isVisible(){return this.el!==null}reset(){this.records=[],this.currentTeacherIdx=0,this._accRepDelta=0}};w(Ks,"DIRECTOR_THRESHOLD",20);let ia=Ks;const gl=[{id:"s1",name:"РђР№РіРµСЂРёРј РЎРµР№С‚Т›Р°Р»Рё",subject:"Mathematics",grade:9,salary:48e3,performance:78},{id:"s2",name:"Р•СЂР»Р°РЅ Р‘РµРєТ±Р»С‹",subject:"Physics",grade:10,salary:44e3,performance:65},{id:"s3",name:"Р“ТЇР»РЅР°СЂ ТљР°СЃС‹РјРѕРІР°",subject:"Kazakh Lang.",grade:8,salary:42e3,performance:82},{id:"s4",name:"Р”РѕСЃС‹Рј РќТ±СЂР»Р°РЅРѕРІ",subject:"Chemistry",grade:11,salary:46e3,performance:70},{id:"s5",name:"Р—Р°СЂРёРЅР° РђР»РёРµРІР°",subject:"Biology",grade:7,salary:4e4,performance:88},{id:"s6",name:"Р‘РѕР»Р°С‚Р±РµРє РЎУ™СЂСЃРµРЅРѕРІ",subject:"Kazakh History",grade:9,salary:43e3,performance:60}],xl=[{name:"РљР°РјРёР»Р° Р–Р°РЅСЃРµСЂС–Рє",subject:"English",salary:45e3},{name:"РќТ±СЂСЃТ±Р»Сѓ Р‘Р°Р№Р¶Р°РЅРѕРІР°",subject:"Computer Science",salary:5e4},{name:"РђСЂРјР°РЅ РЎРµР№С–С‚Т›Р°Р»Рё",subject:"Physical Education",salary:38e3},{name:"Р”РёРЅР° РђС…РјРµС‚РѕРІР°",subject:"Mathematics",salary:47e3},{name:"Р‘РµРєР·Р°С‚ РћРјР°СЂРѕРІ",subject:"Russian Language",salary:41e3},{name:"РђР№РЅТ±СЂ РњТ±С…Р°РјРµРґР¶Р°РЅ",subject:"Music / Art",salary:36e3}],yl=[{parent:"Artyom Lisin's mother",child:"Artyom, grade 9",text:"The physics teacher is unfairly lowering grades. Artyom does extra studying but has a '3' for the semester.",options:[{label:"рџ“‹ Request explanation from teacher",repDelta:4,budgetDelta:0,color:"#1a6b48"},{label:"рџ”„ Have committee review the grade",repDelta:2,budgetDelta:0,color:"#2a5a8a"},{label:'рџ¶ "The grade was lawfully given"',repDelta:-3,budgetDelta:0,color:"#7a2a2a"}]},{parent:"Dina Akhmetova's father",child:"Dina, grade 10",text:"Demands transfer to the top class. Claims teachers are biased against his daughter because of her nationality.",options:[{label:"рџ”Ќ Launch internal investigation",repDelta:6,budgetDelta:0,color:"#1a6b48"},{label:"рџ“‘ Offer school psychologist",repDelta:3,budgetDelta:-5e3,color:"#2a5a8a"},{label:"вќЊ Deny transfer request",repDelta:-4,budgetDelta:0,color:"#7a2a2a"}]},{parent:"Parent Committee 8B",child:"Class 8B",text:"The class wants to replace the history teacher вЂ” too much homework, children are overloaded.",options:[{label:"вљ–пёЏ Have a talk with the teacher",repDelta:3,budgetDelta:0,color:"#1a6b48"},{label:"рџ“… Adjust the lesson plan",repDelta:5,budgetDelta:0,color:"#2a5a8a"},{label:'рџ“ў "The workload is within norms"',repDelta:-2,budgetDelta:0,color:"#7a2a2a"}]},{parent:'School Sponsor вЂ” LLC "Impulse"',child:"Sponsorship matter",text:"The company is ready to provide 200,000 в‚ё for equipment, but requests placing an advertising banner in the lobby.",options:[{label:"вњ… Agree вЂ” the money is needed",repDelta:-1,budgetDelta:2e5,color:"#1a6b48"},{label:"рџ¤ќ Agree, but without the banner",repDelta:2,budgetDelta:1e5,color:"#2a5a8a"},{label:"вќЊ Decline the sponsorship",repDelta:5,budgetDelta:0,color:"#7a2a2a"}]},{parent:"Parent Committee 9A",child:"Class 9A",text:"Parents of class 9A say the teacher discriminates against students. A written complaint has been submitted.",options:[{label:"рџ”Ќ Investigate via committee",repDelta:6,budgetDelta:0,color:"#1a6b48"},{label:"рџ¤ќ Issue a formal warning to the teacher",repDelta:3,budgetDelta:0,color:"#2a5a8a"},{label:"рџ¤· Dismiss the complaint",repDelta:-5,budgetDelta:0,color:"#7a2a2a"}]},{parent:"Deputy Seitkali",child:"Influential parent",text:'A local deputy asks to enroll his nephew without going through the queue. Hints at "support from his side".',options:[{label:"рџ’ј Decline вЂ” standard queue only",repDelta:7,budgetDelta:0,color:"#1a6b48"},{label:"рџ“„ Find a formal reason to admit",repDelta:1,budgetDelta:5e4,color:"#2a5a8a"},{label:"вњ… Enroll immediately вЂ” connections matter",repDelta:-6,budgetDelta:1e5,color:"#7a2a2a"}]},{parent:"Azamat Nurlybekov's mother",child:"Azamat, grade 11",text:"Grade 11 student Azamat wants to enrol in UNT prep courses. His mother demands the school take responsibility.",options:[{label:"рџЋ“ Organise free prep classes at school",repDelta:5,budgetDelta:-15e3,color:"#1a6b48"},{label:"рџ“Љ Provide a list of recommended courses",repDelta:2,budgetDelta:0,color:"#2a5a8a"},{label:"вЏ­пёЏ This is not the school's responsibility",repDelta:-3,budgetDelta:0,color:"#7a2a2a"}]}],vl=[{icon:"рџ’§",title:"Water Pipe Burst",description:"A pipe burst in Block B. Three classrooms are flooded. Lessons will need to be relocated.",options:[{label:"рџ”§ Emergency repair вЂ” call workers",repDelta:2,budgetDelta:-4e4,color:"#1a6b48"},{label:"рџЏ« Temporarily move classes to the main hall",repDelta:0,budgetDelta:0,color:"#2a5a8a"},{label:"рџґ It can wait until Monday",repDelta:-5,budgetDelta:0,color:"#7a2a2a"}]},{icon:"рџ”Ґ",title:"Kitchen Fire",description:"The electrical panel in the school cafeteria caught smoke. The cook put it out, but equipment is broken.",options:[{label:"рџ”§ Replace equipment immediately",repDelta:3,budgetDelta:-6e4,color:"#1a6b48"},{label:"рџЌЅпёЏ Temporarily order food from another school",repDelta:0,budgetDelta:-2e4,color:"#2a5a8a"},{label:"рџҐЉ Skip lunches for a week",repDelta:-6,budgetDelta:0,color:"#7a2a2a"}]},{icon:"рџҐґ",title:"Flu Outbreak at School",description:"20% of students are sick. Parents demand disinfection. The district doctor warns of quarantine.",options:[{label:"рџ§ј Full sanitation treatment",repDelta:6,budgetDelta:-25e3,color:"#1a6b48"},{label:"рџ“° Recommend masks, keep school open",repDelta:1,budgetDelta:0,color:"#2a5a8a"},{label:"рџ¤· Do nothing вЂ” it will pass on its own",repDelta:-7,budgetDelta:0,color:"#7a2a2a"}]},{icon:"рџ”‹",title:"Power Outage",description:"The utility company warned: planned outage on Friday 9:00вЂ“17:00. Exams are scheduled that day.",options:[{label:"рџ“Љ Reschedule exams, notify everyone",repDelta:4,budgetDelta:0,color:"#1a6b48"},{label:"рџ”¦ Rent a generator",repDelta:2,budgetDelta:-15e3,color:"#2a5a8a"},{label:"вљЎ Hold exams by candlelight",repDelta:-3,budgetDelta:0,color:"#7a2a2a"}]},{icon:"рџ“Ў",title:"District Education Inspection",description:"A surprise document audit from the district education department. Some grade journals are incomplete.",options:[{label:"рџ“ќ Urgently get all documents in order",repDelta:5,budgetDelta:0,color:"#1a6b48"},{label:"рџ¤ќ Talk with inspector, explain the situation",repDelta:2,budgetDelta:0,color:"#2a5a8a"},{label:"рџђ Let them check as-is",repDelta:-4,budgetDelta:0,color:"#7a2a2a"}]}];class o0{constructor(){w(this,"el",null);w(this,"state");this.state={budget:12e5,income:32e4,expenses:gl.reduce((e,t)=>e+t.salary,0),staff:[...gl.map(e=>({...e}))],stats:{avgClassGrade:3.8,attendance:91,reputation:100,weekNumber:1},pendingHires:0,ministryWarning:!1,schoolRating:3.2,ministryWeekCounter:0}}updateStats(e,t,n){this.state.stats.reputation=e,this.state.stats.avgClassGrade=Math.round(t*10)/10,this.state.stats.weekNumber=n,this.state.stats.attendance=85+Math.floor(Math.random()*10);const i=Math.min(5,Math.max(1,e/100*2.5+t*.4));this.state.schoolRating=Math.round(Math.min(5,Math.max(1,this.state.schoolRating*.8+i*.2))*10)/10,this.state.income=Math.round(28e4+this.state.schoolRating*25e3),this.state.ministryWarning=this.state.budget<2e5,this.state.ministryWeekCounter++}show(e){Pt(),this.state.ministryWeekCounter>0&&this.state.ministryWeekCounter%3===0?this._renderMinistryInspection(e):Math.random()<.35?this._renderEmergencyEvent(e):Math.random()<.45?this._renderParentComplaint(e):this._render(e)}_renderMinistryInspection(e){const t=this.state.stats.reputation>=80&&this.state.stats.avgClassGrade>=3.5&&this.state.budget>=3e5,n=document.createElement("div");n.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;z-index:7500;font-family:"Segoe UI",sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;',n.innerHTML=`
<div style="background:#12202e;color:#e0e8f0;border-radius:16px;padding:40px 48px;
  max-width:540px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.8);border:1px solid ${t?"#2a6b4a":"#6b2a2a"};">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">
    рџЏ›пёЏ Director вЂ” Ministry Inspection
  </div>
  <div style="font-size:32px;margin-bottom:8px;">${t?"вњ…":"вќЊ"}</div>
  <div style="font-size:24px;font-weight:800;margin-bottom:12px;color:${t?"#4FFFB0":"#FF6060"};">
    ${t?"Inspection passed!":"Inspection failed!"}
  </div>
  <div style="background:#0a1628;border-radius:10px;padding:16px 20px;margin-bottom:20px;font-size:14px;line-height:1.7;color:#bad4e8;">
    The Ministry of Education has conducted a school inspection.<br><br>
    ${t?"рџ“Љ All indicators are within norms. The school receives additional funding of +120,000 в‚ё and a rating boost.":"вљ пёЏ Violations found: low budget or insufficient performance. Penalty of 80,000 в‚ё and a rating reduction."}
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:22px;font-size:13px;">
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">Reputation</div>
      <div style="font-weight:700;color:${this.state.stats.reputation>=80?"#4FFFB0":"#FF8060"};">${this.state.stats.reputation}</div>
    </div>
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">Avg Grade</div>
      <div style="font-weight:700;color:${this.state.stats.avgClassGrade>=3.5?"#4FFFB0":"#FF8060"};">${this.state.stats.avgClassGrade}</div>
    </div>
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">Budget</div>
      <div style="font-weight:700;color:${this.state.budget>=3e5?"#4FFFB0":"#FF8060"};">${this.state.budget.toLocaleString("ru")} в‚ё</div>
    </div>
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">School Rating</div>
      <div style="font-weight:700;color:#FFD700;">${"в…".repeat(Math.ceil(this.state.schoolRating))}${"в†".repeat(5-Math.ceil(this.state.schoolRating))}</div>
    </div>
  </div>
  <button id="ministry-ok"
    style="width:100%;padding:14px;border:none;border-radius:10px;cursor:pointer;
      background:linear-gradient(135deg,#1a4a8a,#2a6ab0);color:#fff;font-size:16px;font-weight:700;">
    Acknowledge
  </button>
</div>`,n.querySelector("#ministry-ok").addEventListener("click",()=>{t?(this.state.budget+=12e4,this.state.schoolRating=Math.min(5,this.state.schoolRating+.3)):(this.state.budget=Math.max(0,this.state.budget-8e4),this.state.schoolRating=Math.max(1,this.state.schoolRating-.4),this.state.stats.reputation=Math.max(0,this.state.stats.reputation-10)),n.remove(),this._render(e)}),document.body.appendChild(n)}_renderEmergencyEvent(e){const t=vl[Math.floor(Math.random()*vl.length)],n=document.createElement("div");n.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:7200;font-family:"Segoe UI",sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;',n.innerHTML=`
<div style="background:#1a1a2a;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.8);border:1px solid #3a2a1a;">
  <div style="font-size:11px;letter-spacing:2px;color:#d08040;text-transform:uppercase;margin-bottom:8px;">
    вљЎ Director вЂ” Emergency
  </div>
  <div style="font-size:36px;margin-bottom:8px;">${t.icon}</div>
  <div style="font-size:22px;font-weight:700;margin-bottom:12px;">${t.title}</div>
  <div style="background:#0f1220;border-radius:8px;padding:16px 20px;margin-bottom:24px;font-size:14px;line-height:1.6;color:#dac8a0;">
    ${t.description}
  </div>
  <div style="font-size:13px;color:#a08060;margin-bottom:12px;">Your decision:</div>
  <div style="display:flex;flex-direction:column;gap:10px;" id="emerg-options">
    ${t.options.map((i,r)=>`
      <button data-idx="${r}"
        style="padding:13px 18px;border:none;border-radius:8px;cursor:pointer;text-align:left;
          background:${i.color}33;color:#e0e8f0;font-size:14px;font-weight:600;
          border:1px solid ${i.color}66;transition:filter .15s;">
        ${i.label}
        <span style="float:right;font-size:12px;opacity:.7;">
          ${i.repDelta!==0?`${i.repDelta>0?"+":""}${i.repDelta} rep`:""}
          ${i.budgetDelta!==0?` В· ${i.budgetDelta>0?"+":""}${i.budgetDelta.toLocaleString("ru")} в‚ё`:""}
        </span>
      </button>`).join("")}
  </div>
</div>`,n.querySelectorAll("#emerg-options button").forEach(i=>{const r=i;r.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.3)"}),r.addEventListener("mouseleave",()=>{r.style.filter=""}),r.addEventListener("click",()=>{const a=t.options[parseInt(r.dataset.idx)];this.state.stats.reputation=Math.max(0,this.state.stats.reputation+a.repDelta),a.budgetDelta&&(this.state.budget=Math.max(0,this.state.budget+a.budgetDelta)),n.remove(),this._render(e)})}),document.body.appendChild(n)}_renderParentComplaint(e){const t=yl[Math.floor(Math.random()*yl.length)],n=document.createElement("div");n.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;z-index:7000;font-family:"Segoe UI",sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;',n.innerHTML=`
<div style="background:#15202e;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">
    рџ‘” Director вЂ” Complaint
  </div>
  <div style="font-size:20px;font-weight:700;margin-bottom:4px;">рџ“Ё ${t.parent}</div>
  <div style="font-size:13px;color:#6a98b8;margin-bottom:18px;">${t.child}</div>
  <div style="background:#0f1a28;border-radius:8px;padding:16px 20px;margin-bottom:24px;font-size:14px;line-height:1.6;color:#bad4e8;">
    "${t.text}"
  </div>
  <div style="font-size:13px;color:#5a8cc0;margin-bottom:12px;">Your decision:</div>
  <div style="display:flex;flex-direction:column;gap:10px;" id="complaint-options">
    ${t.options.map((i,r)=>`
      <button data-idx="${r}"
        style="padding:13px 18px;border:none;border-radius:8px;cursor:pointer;text-align:left;
          background:${i.color}44;color:#e0e8f0;font-size:14px;font-weight:600;
          border:1px solid ${i.color}88;transition:background .15s;">
        ${i.label}
        <span style="float:right;font-size:12px;opacity:.7;">
          ${i.repDelta>0?"+":""}${i.repDelta} rep
          ${i.budgetDelta!==0?` В· ${i.budgetDelta>0?"+":""}${i.budgetDelta.toLocaleString("ru")} в‚ё`:""}
        </span>
      </button>`).join("")}
  </div>
</div>`,n.querySelectorAll("#complaint-options button").forEach(i=>{const r=i;r.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.3)"}),r.addEventListener("mouseleave",()=>{r.style.filter=""}),r.addEventListener("click",()=>{const a=parseInt(r.dataset.idx),o=t.options[a];this.state.stats.reputation=Math.max(0,this.state.stats.reputation+o.repDelta),o.budgetDelta&&(this.state.budget+=o.budgetDelta),n.remove(),this._render(e)})}),document.body.appendChild(n)}_render(e){this.el&&this.el.remove();const{budget:t,income:n,expenses:i,staff:r,stats:a,ministryWarning:o,schoolRating:l}=this.state,c=n-i,d=r.filter(g=>!g.fired),h="в…".repeat(Math.ceil(l))+"в†".repeat(5-Math.ceil(l)),u=l>=4?"#FFD700":l>=3?"#e0a060":"#e05060",m=document.createElement("div");m.style.cssText='position:fixed;inset:0;background:#0d1520;color:#c8dce8;font-family:"Segoe UI",sans-serif;overflow-y:auto;z-index:6000;',m.innerHTML=`
<div style="max-width:980px;margin:0 auto;padding:36px 24px;">

  <!-- HEADER -->
  <div style="display:flex;align-items:center;justify-content:space-between;
    border-bottom:1px solid #1e3040;padding-bottom:20px;margin-bottom:${o?"10px":"24px"};">
    <div>
      <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;">рџ‘” School Director</div>
      <div style="font-size:28px;font-weight:700;color:#fff;margin-top:4px;">Secondary School No.47</div>
      <div style="margin-top:6px;">
        <span style="font-size:18px;color:${u};letter-spacing:2px;">${h}</span>
        <span style="font-size:13px;color:#6a98b8;margin-left:8px;">School Rating ${l.toFixed(1)}/5.0</span>
      </div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:12px;color:#6a98b8;">Week ${a.weekNumber}</div>
      <div style="font-size:22px;font-weight:700;color:${c>=0?"#4caf84":"#e05060"}">
        ${c>=0?"+":""}${c.toLocaleString("ru")} в‚ё/week
      </div>
    </div>
  </div>

  ${o?`
  <div style="background:#5a1818;border-radius:8px;padding:14px 20px;margin-bottom:18px;
    border:1px solid #9a3030;display:flex;align-items:center;gap:12px;">
    <span style="font-size:22px;">вљ пёЏ</span>
    <span style="font-size:14px;color:#ffbbbb;">
      <strong>Ministry Warning:</strong> The school budget has dropped to a critical level.
      Within 2 weeks, if no action is taken, an inspection will be sent.
    </span>
  </div>`:""}

  <!-- STATS ROW -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px;">
    ${this._statCard("рџ’° Budget",t.toLocaleString("ru")+" в‚ё",t>5e5?"#4caf84":t>2e5?"#e0a060":"#e05060")}
    ${this._statCard("рџ“Љ Avg Grade",a.avgClassGrade.toString(),a.avgClassGrade>=4?"#4caf84":"#e0a060")}
    ${this._statCard("рџЋ“ Attendance",a.attendance+"%",a.attendance>=90?"#4caf84":"#e0a060")}
    ${this._statCard("в­ђ Reputation",a.reputation.toString(),a.reputation>=120?"#4caf84":"#6a98b8")}
  </div>

  <!-- INCOME / EXPENSES -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;">
    <div style="background:#0f1e30;border-radius:10px;padding:18px 22px;">
      <div style="font-size:12px;color:#5a8cc0;margin-bottom:10px;text-transform:uppercase;letter-spacing:1.5px;">Weekly Income</div>
      <div style="font-size:22px;font-weight:700;color:#4caf84;">+${n.toLocaleString("ru")} в‚ё</div>
      <div style="font-size:13px;color:#4a7890;margin-top:6px;">Subsidies + grants В· Rating ${l.toFixed(1)}в… bonus</div>
    </div>
    <div style="background:#0f1e30;border-radius:10px;padding:18px 22px;">
      <div style="font-size:12px;color:#5a8cc0;margin-bottom:10px;text-transform:uppercase;letter-spacing:1.5px;">Weekly Expenses</div>
      <div style="font-size:22px;font-weight:700;color:#e05060;">в€’${i.toLocaleString("ru")} в‚ё</div>
      <div style="font-size:13px;color:#4a7890;margin-top:6px;">Salaries: ${d.length} teachers</div>
    </div>
  </div>

  <!-- STAFF TABLE -->
  <div style="background:#0f1e30;border-radius:10px;padding:20px 24px;margin-bottom:22px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <div style="font-size:14px;font-weight:600;color:#8cb8d4;">рџ‘©вЂЌрџЏ« Teaching Staff (${d.length})</div>
      <button id="dir-hire"
        style="padding:8px 18px;border:none;border-radius:6px;cursor:pointer;
          background:#2a4a7a;color:#a8d0f0;font-size:13px;font-weight:600;">
        + Hire Teacher
      </button>
    </div>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <thead>
          <tr style="color:#4a7890;border-bottom:1px solid #1e3040;">
            <th style="text-align:left;padding:8px 12px;">Name</th>
            <th style="text-align:left;padding:8px 12px;">Subject</th>
            <th style="text-align:center;padding:8px 12px;">Grade</th>
            <th style="text-align:right;padding:8px 12px;">Salary</th>
            <th style="text-align:center;padding:8px 12px;">Performance</th>
            <th style="text-align:center;padding:8px 12px;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${d.map(g=>this._staffRow(g)).join("")}
        </tbody>
      </table>
    </div>
  </div>

  <!-- DECISIONS -->
  <div style="background:#0f1e30;border-radius:10px;padding:20px 24px;margin-bottom:22px;">
    <div style="font-size:14px;font-weight:600;color:#8cb8d4;margin-bottom:14px;">рџ”§ Management Decisions</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
      ${this._actionBtn("dir-renovate","рџЏ—пёЏ Renovate Classroom","в€’50,000 в‚ё В· +5 rep","#2a5a3a")}
      ${this._actionBtn("dir-equipment","рџ’» Buy Equipment","в€’30,000 в‚ё В· +0.1 grade","#3a3a5a")}
      ${this._actionBtn("dir-event","рџЋ‰ School Event","в€’20,000 в‚ё В· +10 rep","#4a3a2a")}
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${this._actionBtn("dir-parents","рџ‘Є Parent Meeting","в€’10,000 в‚ё В· +8 rep","#3a2a5a")}
      ${this._actionBtn("dir-grant","рџ“‘ Grant Application","в€’5,000 в‚ё В· possibly +150,000 в‚ё","#205020")}
      ${this._actionBtn("dir-training","рџ“љ Teacher Training","в€’40,000 в‚ё В· all performance в†‘","#3a4a2a")}
    </div>
  </div>

  <!-- CONTINUE BUTTON -->
  <div style="text-align:center;padding-bottom:24px;">
    <button id="dir-continue"
      style="padding:16px 48px;border:none;border-radius:10px;cursor:pointer;
        background:linear-gradient(135deg,#1a4a8a,#2a6ab0);
        color:#fff;font-size:18px;font-weight:700;
        box-shadow:0 4px 20px rgba(30,90,170,.4);">
      в–¶ Next Week
    </button>
  </div>

</div>`,d.forEach(g=>{m.querySelector(`#fire-${g.id}`)?.addEventListener("click",()=>{g.fired=!0,this.state.expenses-=g.salary,this._render(e)}),m.querySelector(`#raise-${g.id}`)?.addEventListener("click",()=>{g.salary+=5e3,this.state.expenses+=5e3,g.performance=Math.min(100,g.performance+5),this._render(e)}),m.querySelector(`#lower-${g.id}`)?.addEventListener("click",()=>{g.salary>25e3&&(g.salary-=5e3,this.state.expenses-=5e3,g.performance=Math.max(10,g.performance-8),this._render(e))})}),m.querySelector("#dir-hire")?.addEventListener("click",()=>this._showHireDialog(e)),m.querySelector("#dir-renovate")?.addEventListener("click",()=>{this.state.budget>=5e4&&(this.state.budget-=5e4,this.state.stats.reputation+=5,this.state.schoolRating=Math.min(5,this.state.schoolRating+.1),this._render(e))}),m.querySelector("#dir-equipment")?.addEventListener("click",()=>{this.state.budget>=3e4&&(this.state.budget-=3e4,this.state.stats.avgClassGrade=Math.min(5,this.state.stats.avgClassGrade+.1),this.state.schoolRating=Math.min(5,this.state.schoolRating+.05),this._render(e))}),m.querySelector("#dir-event")?.addEventListener("click",()=>{this.state.budget>=2e4&&(this.state.budget-=2e4,this.state.stats.reputation+=10,this.state.stats.attendance=Math.min(100,this.state.stats.attendance+3),this._render(e))}),m.querySelector("#dir-parents")?.addEventListener("click",()=>{this.state.budget>=1e4&&(this.state.budget-=1e4,this.state.stats.reputation+=8,this.state.stats.attendance=Math.min(100,this.state.stats.attendance+2),this._render(e))}),m.querySelector("#dir-grant")?.addEventListener("click",()=>{this.state.budget>=5e3&&(this.state.budget-=5e3,Math.random()<.6&&(this.state.budget+=15e4,this.state.stats.reputation+=5),this._render(e))}),m.querySelector("#dir-training")?.addEventListener("click",()=>{this.state.budget>=4e4&&(this.state.budget-=4e4,this.state.staff.filter(g=>!g.fired).forEach(g=>{g.performance=Math.min(100,g.performance+7)}),this.state.stats.reputation+=3,this._render(e))}),m.querySelector("#dir-continue")?.addEventListener("click",()=>{this.state.budget+=this.state.income-this.state.expenses,Tt(),m.remove(),this.el=null,e()}),document.body.appendChild(m),this.el=m}_statCard(e,t,n){return`
      <div style="background:#0f1e30;border-radius:10px;padding:16px 18px;text-align:center;">
        <div style="font-size:12px;color:#4a7890;margin-bottom:6px;">${e}</div>
        <div style="font-size:22px;font-weight:700;color:${n};">${t}</div>
      </div>`}_staffRow(e){const t=e.performance>=80?"#4caf84":e.performance>=60?"#e0a060":"#e05060",n=`<div style="width:${e.performance}%;height:4px;background:${t};border-radius:2px;"></div>`;return`
      <tr style="border-bottom:1px solid #1e3040;">
        <td style="padding:9px 12px;">${e.name}</td>
        <td style="padding:9px 12px;color:#8ab0c8;">${e.subject}</td>
        <td style="padding:9px 12px;text-align:center;">${e.grade}</td>
        <td style="padding:9px 12px;text-align:right;">
          ${e.salary.toLocaleString("ru")} в‚ё
        </td>
        <td style="padding:9px 12px;min-width:70px;">
          <div style="background:#1e3040;border-radius:2px;">${n}</div>
          <div style="font-size:11px;color:#4a7890;margin-top:2px;text-align:center;">${e.performance}%</div>
        </td>
        <td style="padding:9px 12px;text-align:center;">
          <div style="display:flex;gap:6px;justify-content:center;">
            <button id="raise-${e.id}" title="Raise salary +5,000"
              style="padding:4px 8px;border:none;border-radius:4px;cursor:pointer;
                background:#1a4a2a;color:#80d0a0;font-size:12px;">в–І</button>
            <button id="lower-${e.id}" title="Lower salary в€’5,000"
              style="padding:4px 8px;border:none;border-radius:4px;cursor:pointer;
                background:#3a2a1a;color:#c0a060;font-size:12px;">в–ј</button>
            <button id="fire-${e.id}"
              style="padding:4px 10px;border:none;border-radius:4px;cursor:pointer;
                background:#5a1818;color:#f0a0a0;font-size:12px;">Fire</button>
          </div>
        </td>
      </tr>`}_actionBtn(e,t,n,i){return`
      <button id="${e}"
        style="padding:14px;border:none;border-radius:8px;cursor:pointer;
          background:${i};color:#d0e8f0;font-size:14px;font-weight:600;
          text-align:left;line-height:1.5;">
        ${t}<br>
        <span style="font-size:12px;opacity:.7;">${n}</span>
      </button>`}_showHireDialog(e){const t=xl[Math.floor(Math.random()*xl.length)],n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:7000;overflow-y:auto;-webkit-overflow-scrolling:touch;",n.innerHTML=`
      <div style="background:#0f1e30;color:#c8dce8;border-radius:12px;padding:32px 40px;max-width:400px;width:90%;">
        <div style="font-size:20px;font-weight:700;margin-bottom:16px;">Job Candidate</div>
        <div style="font-size:15px;margin-bottom:8px;">рџ‘©вЂЌрџЏ« ${t.name}</div>
        <div style="color:#8ab0c8;margin-bottom:8px;">Subject: ${t.subject}</div>
        <div style="color:#8ab0c8;margin-bottom:20px;">Salary: ${t.salary.toLocaleString("ru")} в‚ё/week</div>
        <div style="display:flex;gap:12px;">
          <button id="hire-yes" style="flex:1;padding:12px;border:none;border-radius:8px;
            background:#1a6b48;color:#fff;font-size:15px;font-weight:600;cursor:pointer;">
            вњ… Hire
          </button>
          <button id="hire-no" style="flex:1;padding:12px;border:none;border-radius:8px;
            background:#3a2a1a;color:#c89070;font-size:15px;font-weight:600;cursor:pointer;">
            вќЊ Decline
          </button>
        </div>
      </div>`,n.querySelector("#hire-yes")?.addEventListener("click",()=>{const i={id:`s${Date.now()}`,name:t.name,subject:t.subject,grade:8+Math.floor(Math.random()*4),salary:t.salary,performance:55+Math.floor(Math.random()*20)};this.state.staff.push(i),this.state.expenses+=i.salary,n.remove(),this._render(e)}),n.querySelector("#hire-no")?.addEventListener("click",()=>n.remove()),document.body.appendChild(n)}isVisible(){return this.el!==null}hide(){this.el&&(Tt(),this.el.remove(),this.el=null)}}const l0={reputation:{icon:"рџ“‰",title:"You were fired",body:"Your reputation dropped to a critical level. The director decided to let you go. Parents and administration have lost trust in you."},bad_grades:{icon:"рџ“ќ",title:"You were dismissed",body:"The class average grade stayed below 3.0 for three consecutive weeks. The education quality board demanded a replacement."},violation:{icon:"вљ пёЏ",title:"Misconduct",body:"Systematic grade manipulation was recorded. The dismissal order was signed by the director."}};class c0{constructor(){w(this,"el",null);w(this,"onRestartCb",null)}show(e,t,n){this.onRestartCb=n,this.el&&this.el.remove();const i=l0[e];this.el=document.createElement("div"),this.el.style.cssText=`
      position:fixed;inset:0;z-index:9999;
      background:rgba(0,0,0,.92);
      display:flex;align-items:center;justify-content:center;
      font-family:'Segoe UI',Nunito,sans-serif;
      animation:ew2_go_fade .6s ease;
    `,this.el.innerHTML=`
      <style>
        @keyframes ew2_go_fade { from { opacity:0; transform:scale(.94); } to { opacity:1; transform:none; } }
        @keyframes ew2_go_shake { 0%,100% { transform:translateX(0); } 20%,60% { transform:translateX(-6px); } 40%,80% { transform:translateX(6px); } }
        #ew2-go-box { animation: ew2_go_shake .5s .3s ease both; }
      </style>
      <div id="ew2-go-box" style="
        background:linear-gradient(160deg,#1a0a0a,#1a1018);
        border:1px solid #5a1a1a;
        border-radius:18px;
        padding:52px 58px;
        max-width:500px;width:90%;
        text-align:center;
        box-shadow:0 0 60px rgba(180,30,30,.35);
        color:#e0d0d0;
      ">
        <div style="font-size:62px;margin-bottom:12px;">${i.icon}</div>
        <div style="font-size:28px;font-weight:800;color:#ff6060;margin-bottom:12px;">${i.title}</div>
        <div style="font-size:15px;color:#c0a0a0;line-height:1.6;margin-bottom:28px;">${i.body}</div>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:32px;">
          <div style="background:#2a1010;border:1px solid #4a2020;border-radius:10px;padding:14px 10px;">
            <div style="font-size:11px;color:#905050;margin-bottom:4px;">WEEKS</div>
            <div style="font-size:22px;font-weight:700;color:#e08080;">${t.weeks}</div>
          </div>
          <div style="background:#2a1010;border:1px solid #4a2020;border-radius:10px;padding:14px 10px;">
            <div style="font-size:11px;color:#905050;margin-bottom:4px;">REPUTATION</div>
            <div style="font-size:22px;font-weight:700;color:#e08080;">${t.reputation}</div>
          </div>
          <div style="background:#2a1010;border:1px solid #4a2020;border-radius:10px;padding:14px 10px;">
            <div style="font-size:11px;color:#905050;margin-bottom:4px;">AVG GRADE</div>
            <div style="font-size:22px;font-weight:700;color:#e08080;">${t.avgGrade}</div>
          </div>
        </div>

        <button id="ew2-go-restart" style="
          padding:14px 44px;border:none;border-radius:12px;cursor:pointer;
          background:linear-gradient(135deg,#7a1a1a,#aa2a2a);
          color:#fff;font-size:17px;font-weight:700;
          transition:opacity .15s;
          font-family:'Segoe UI',sans-serif;
        " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
          рџ”„ Restart
        </button>
      </div>
    `,this.el.querySelector("#ew2-go-restart").addEventListener("click",()=>{this.hide(),this.onRestartCb?.()}),document.body.appendChild(this.el)}hide(){this.el?.remove(),this.el=null}}class Ys{constructor(){w(this,"el",null)}show(e,t){Pt(),this.el&&this.el.remove(),this._addStyles();const n=document.createElement("div");n.id="ending-screen",n.style.cssText=`
      position:fixed;inset:0;z-index:10000;
      background:radial-gradient(ellipse at center, #0a0f1e 0%, #060810 100%);
      font-family:'Segoe UI',sans-serif;overflow-y:auto;
    `,n.innerHTML=`
      <!-- Animated starfield background -->
      <canvas id="ending-stars" style="position:fixed;inset:0;pointer-events:none;z-index:0;"></canvas>

      <!-- Confetti layer -->
      <div id="confetti-layer" style="position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden;"></div>

      <!-- Content -->
      <div style="position:relative;z-index:2;max-width:800px;margin:0 auto;padding:48px 24px 60px;">

        <!-- Gold glow header -->
        <div style="text-align:center;margin-bottom:48px;animation:ending_rise 1s ease-out;">
          <div style="font-size:64px;margin-bottom:12px;filter:drop-shadow(0 0 24px #FFD700);">рџЏ†</div>
          <div style="font-size:13px;letter-spacing:4px;color:#a08040;text-transform:uppercase;margin-bottom:8px;
            animation:ending_fadeIn 1.5s ease-out;">
            ${W("ending.history")}
          </div>
          <h1 style="font-size:42px;font-weight:900;margin:0;
            background:linear-gradient(135deg,#FFD700,#FFF0A0,#FFD700);
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
            text-shadow:0 0 40px rgba(255,215,0,0.3);
            animation:ending_rise 1.2s ease-out;">
            ${W("ending.school_year")}
          </h1>
          <div style="font-size:18px;color:#d0c080;margin-top:10px;
            animation:ending_fadeIn 2s ease-out;">
            ${e.teacherName} вЂ” ${e.subject} ${W("ending.teacher_of")}
          </div>
        </div>

        <!-- Certificate card -->
        <div style="
          background:linear-gradient(135deg,#1a1a0a 0%,#2a2a10 50%,#1a1a0a 100%);
          border:2px solid #8a7020;
          border-radius:20px;padding:40px 48px;margin-bottom:36px;
          box-shadow:0 0 60px rgba(255,215,0,0.15),inset 0 0 40px rgba(255,215,0,0.05);
          position:relative;overflow:hidden;
          animation:ending_rise 1.4s ease-out;
        ">
          <!-- Corner ornaments -->
          <div style="position:absolute;top:10px;left:10px;font-size:20px;opacity:.4;">вњ¦</div>
          <div style="position:absolute;top:10px;right:10px;font-size:20px;opacity:.4;">вњ¦</div>
          <div style="position:absolute;bottom:10px;left:10px;font-size:20px;opacity:.4;">вњ¦</div>
          <div style="position:absolute;bottom:10px;right:10px;font-size:20px;opacity:.4;">вњ¦</div>

          <div style="text-align:center;margin-bottom:28px;">
            <div style="font-size:11px;letter-spacing:3px;color:#a08030;text-transform:uppercase;margin-bottom:8px;">
              ${W("ending.ministry")}
            </div>
            <div style="font-size:28px;font-weight:800;color:#FFD700;margin-bottom:4px;">
              ${W("ending.certificate")}
            </div>
            <div style="font-size:15px;color:#c0a060;">
              ${e.teacherName} В· ${W("ending.school")}
            </div>
          </div>

          <div style="border-top:1px solid #5a4a10;border-bottom:1px solid #5a4a10;padding:20px 0;margin-bottom:24px;
            display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center;">
            <div>
              <div style="font-size:32px;font-weight:900;color:#FFD700;">${e.totalWeeks}</div>
              <div style="font-size:12px;color:#8a7030;">${W("ending.weeks_work")}</div>
            </div>
            <div>
              <div style="font-size:32px;font-weight:900;color:#4FFFB0;">${e.totalStudents}</div>
              <div style="font-size:12px;color:#4a8a60;">${W("ending.students_taught")}</div>
            </div>
            <div>
              <div style="font-size:32px;font-weight:900;color:#58A6FF;">${e.avgGrade.toFixed(1)}</div>
              <div style="font-size:12px;color:#3a6a9a;">${W("ending.avg_score")}</div>
            </div>
          </div>

          <div style="text-align:center;">
            <div style="font-size:13px;color:#8a7030;margin-bottom:8px;">${W("ending.school_rating")}</div>
            <div style="font-size:28px;color:#FFD700;letter-spacing:4px;">
              ${"в…".repeat(Math.min(5,Math.ceil(e.schoolRating)))}${"в†".repeat(Math.max(0,5-Math.ceil(e.schoolRating)))}
            </div>
          </div>
        </div>

        <!-- Stats grid -->
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:36px;
          animation:ending_rise 1.6s ease-out;">
          ${this._statCard("рџ’°",W("ending.total_earned"),e.totalEarned.toLocaleString("ru")+" в‚ё","#FFD700")}
          ${this._statCard("в­ђ",W("ending.reputation"),e.reputation.toString(),"#58A6FF")}
          ${this._statCard("рџ“љ",W("ending.subject"),e.subject,"#4FFFB0")}
          ${this._statCard("рџЏ†",W("ending.career_path"),e.careerPath[e.careerPath.length-1]||W("career.director"),"#c080ff")}
        </div>

        <!-- Career timeline -->
        <div style="
          background:#0f1828;border-radius:14px;padding:24px 28px;margin-bottom:36px;
          border:1px solid #1e3040;animation:ending_rise 1.8s ease-out;
        ">
          <div style="font-size:13px;color:#4a8cc0;font-weight:700;margin-bottom:16px;letter-spacing:1px;text-transform:uppercase;">
            ${W("ending.career_title")}
          </div>
          <div style="display:flex;align-items:center;gap:0;overflow-x:auto;padding-bottom:4px;">
            ${e.careerPath.map((i,r)=>`
              <div style="display:flex;align-items:center;flex-shrink:0;">
                <div style="
                  background:${r===e.careerPath.length-1?"linear-gradient(135deg,#4a2a8a,#7040c0)":"#1a2a3a"};
                  border:1px solid ${r===e.careerPath.length-1?"#8060d0":"#2a3a4a"};
                  border-radius:8px;padding:8px 14px;font-size:13px;font-weight:600;
                  color:${r===e.careerPath.length-1?"#c0a0ff":"#6a9ab8"};
                  white-space:nowrap;
                ">
                  ${Ys._rankLabel(i)}
                </div>
                ${r<e.careerPath.length-1?'<div style="width:24px;height:2px;background:#2a3a4a;margin:0 2px;flex-shrink:0;"></div>':""}
              </div>`).join("")}
          </div>
        </div>

        <!-- Message -->
        <div style="
          text-align:center;margin-bottom:40px;
          animation:ending_fadeIn 2.5s ease-out;
        ">
          <div style="font-size:18px;color:#d0d8e8;line-height:1.7;max-width:580px;margin:0 auto;">
            ${Ys._getMessage(e)}
          </div>
        </div>

        <!-- Buttons -->
        <div style="display:flex;gap:16px;justify-content:center;animation:ending_rise 2s ease-out;">
          <button id="ending-continue"
            style="padding:16px 36px;border:none;border-radius:12px;cursor:pointer;
              background:linear-gradient(135deg,#1a4a2a,#2a7a40);
              color:#80ffb0;font-size:16px;font-weight:700;
              border:1px solid #3a8a50;
              box-shadow:0 4px 24px rgba(50,180,80,.3);
              transition:filter .15s;">
            в–¶ ${W("ending.continue")}
          </button>
          <button id="ending-newgame"
            style="padding:16px 36px;border:none;border-radius:12px;cursor:pointer;
              background:linear-gradient(135deg,#1a1a4a,#2a2a7a);
              color:#a0a0ff;font-size:16px;font-weight:700;
              border:1px solid #3a3a8a;
              box-shadow:0 4px 24px rgba(60,60,180,.3);
              transition:filter .15s;">
            рџ”„ ${W("ending.new_game")}
          </button>
        </div>

      </div>
    `,["#ending-continue","#ending-newgame"].forEach(i=>{const r=n.querySelector(i);r?.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.25)"}),r?.addEventListener("mouseleave",()=>{r.style.filter=""})}),n.querySelector("#ending-continue")?.addEventListener("click",()=>{n.remove(),this.el=null}),n.querySelector("#ending-newgame")?.addEventListener("click",()=>{n.remove(),this.el=null,t()}),document.body.appendChild(n),this.el=n,requestAnimationFrame(()=>{this._startStarfield(),this._spawnConfetti()})}_statCard(e,t,n,i){return`
      <div style="
        background:#0f1828;border:1px solid #1e3040;border-radius:12px;
        padding:20px 22px;display:flex;align-items:center;gap:14px;
      ">
        <span style="font-size:28px;">${e}</span>
        <div>
          <div style="font-size:12px;color:#4a7890;margin-bottom:4px;">${t}</div>
          <div style="font-size:18px;font-weight:800;color:${i};">${n}</div>
        </div>
      </div>`}static _rankLabel(e){return{novice:W("career.novice"),cat2:W("career.cat2"),cat1:W("career.cat1"),highest:W("career.highest"),honored:W("career.honored"),zavuch:W("career.zavuch"),director:W("career.director")}[e]??e}static _getMessage(e){return e.schoolRating>=4.5?W("ending.best_school").replace("${stats.totalStudents}",e.totalStudents.toString()):e.reputation>=150?W("ending.reputation_spread"):W("ending.year_worked").replace("${stats.totalWeeks}",e.totalWeeks.toString())}_startStarfield(){const e=this.el?.querySelector("#ending-stars");if(!e)return;e.width=window.innerWidth,e.height=window.innerHeight;const t=e.getContext("2d"),n=Array.from({length:200},()=>({x:Math.random()*e.width,y:Math.random()*e.height,r:Math.random()*1.5+.2,alpha:Math.random(),speed:Math.random()*.008+.003})),i=()=>{this.el&&(t.clearRect(0,0,e.width,e.height),n.forEach(r=>{r.alpha+=r.speed;const a=Math.abs(Math.sin(r.alpha));t.beginPath(),t.arc(r.x,r.y,r.r,0,Math.PI*2),t.fillStyle=`rgba(200,220,255,${a*.8})`,t.fill()}),requestAnimationFrame(i))};i()}_spawnConfetti(){const e=this.el?.querySelector("#confetti-layer");if(!e)return;const t=["#FFD700","#FF6B6B","#4FFFB0","#58A6FF","#c080ff","#ff98d0","#fff"],n=["в– ","в—Џ","в–І","в…","в™¦"];for(let i=0;i<80;i++)setTimeout(()=>{if(!this.el)return;const r=document.createElement("div"),a=t[Math.floor(Math.random()*t.length)],o=n[Math.floor(Math.random()*n.length)],l=Math.random()*100,c=2e3+Math.random()*3e3,d=10+Math.random()*16;r.textContent=o,r.style.cssText=`
          position:absolute;left:${l}%;top:-40px;
          font-size:${d}px;color:${a};
          animation:confetti_fall ${c}ms linear forwards;
          pointer-events:none;
        `,e.appendChild(r),setTimeout(()=>r.remove(),c+100)},i*120)}_addStyles(){if(document.getElementById("ending-screen-style"))return;const e=document.createElement("style");e.id="ending-screen-style",e.textContent=`
      @keyframes ending_rise {
        from { opacity:0; transform:translateY(30px); }
        to   { opacity:1; transform:none; }
      }
      @keyframes ending_fadeIn {
        from { opacity:0; }
        to   { opacity:1; }
      }
      @keyframes confetti_fall {
        0%   { transform:translateY(0) rotate(0deg); opacity:1; }
        80%  { opacity:1; }
        100% { transform:translateY(110vh) rotate(${Math.random()>.5?"":"-"}${Math.floor(Math.random()*720)}deg); opacity:0; }
      }
    `,document.head.appendChild(e)}isVisible(){return this.el!==null}hide(){this.el?.remove(),this.el=null}}const Us=4,Fs=3,d0=15,Hr=[7,8,9,10],h0={math:"рџ“ђ",physics:"вљЎ",chemistry:"рџ§Є",history:"рџ“њ",literature:"рџ“–",russian:"вњЌпёЏ"},u0=["РђР№Р±РµРє","Р—Р°СЂРёРЅР°","Р”Р°РЅРёСЏСЂ","РђР№СЃТ±Р»Сѓ","РќТ±СЂР±РѕР»Р°С‚","РњР°РґРёРЅР°","Р•СЂР»Р°РЅ","Р“ТЇР»РЅТ±СЂ","РђСЃРµР»","РђСЏСѓР»С‹Рј","Р‘РµРєР·Р°С‚","РђР·Р°РјР°С‚","РўУ™ТЈС–СЂР±РµРє","РРЅРєР°СЂ","РђСЂСѓР·Р°РЅ","РЎР°Р±РёРЅР°","Р–Р°РЅСЃРµСЂС–Рє","РђР№РіРµСЂС–Рј","Р”С–Р»РЅУ™Р·","РњТ±С…Р°РјРµРґР¶Р°РЅ","РљРµРЅР¶РµР±РµРє","РђСЃС‹Р»","Р”Р°СѓСЂРµРЅ","Р‘Р°Р»Р¶Р°РЅ","РђР»РёР±РµРє","РђРєРјР°СЂР°Р»","РќУ™Р·С–Рј","Р—Т±Р»С„РёСЏ","РўРѕР»Т›С‹РЅ","РђРґРµРј"],p0=["average","genius","average","anxious","average","helper","bully","average","average","lazy","anxious","average","genius","average","bully"];class f0{constructor(e,t=""){w(this,"app");w(this,"bus",qt.getInstance());w(this,"time",Qr.getInstance());w(this,"save",ea.getInstance());w(this,"school");w(this,"player");w(this,"students",[]);w(this,"lessonSys",new pg);w(this,"eventSys",new Mg);w(this,"attention",js.getInstance());w(this,"gradebook",qs.getInstance());w(this,"career",new Eg);w(this,"money",new Sg);w(this,"skillTree",new wg);w(this,"examSystem",new sl);w(this,"featherless");w(this,"studentAI");w(this,"hud");w(this,"notebookUI");w(this,"explPanel");w(this,"taskPanel");w(this,"hwUI");w(this,"eventUI");w(this,"pauseMenu");w(this,"reportCard");w(this,"scheduleScreen");w(this,"skillScreen");w(this,"weekScreen");w(this,"vpScreen",new ia);w(this,"directorScreen",new o0);w(this,"gameOverScreen",new c0);w(this,"endingScreen",new Ys);w(this,"prepPanel");w(this,"hwCheckUI");w(this,"breakSys",new Qg);w(this,"remarkUI");w(this,"sound",na.getInstance());w(this,"remarkTick",0);w(this,"charData");w(this,"dayNumber",1);w(this,"lessonIndex",0);w(this,"weekReports",[]);w(this,"completedTopicsPerGrade",{});w(this,"experience",0);w(this,"reputation",50);w(this,"blockInput",!1);w(this,"behaviorTick",0);w(this,"isWednesdayQuiz",!1);w(this,"pendingAction",null);w(this,"vpInspectionScore",0);w(this,"badExamStreak",0);w(this,"totalWeeks",0);this.app=e,this.featherless=new Rg(t)}async start(e){this.charData=e;const t=this.save.load();if(t){if(this.experience=t.experience,this.reputation=t.reputation,this.dayNumber=t.dayNumber,this.lessonIndex=0,this.career.load(t.careerRank),this.skillTree.load(t.unlockedPerks),t.completedTopicsPerGrade)this.completedTopicsPerGrade=t.completedTopicsPerGrade;else if(t.completedTopics?.length){const i=e.grades?.[0]??e.grade??9;this.completedTopicsPerGrade[i]=t.completedTopics}}this.studentAI=new Dg(this.featherless),this.school=new Vm,this.app.setScene(this.school.scene);const n=this.school.rooms.get("room101");for(let i=0;i<d0;i++){const r=Jm(String(i),u0[i]??`Student${i}`,p0[i]??"average"),a=new Zm(r,this.school.scene),o=n.deskInfos[i];o&&(a.placeat(new R(o.position.x,.24,o.position.z+.62)),a.group.rotation.y=Math.PI),this.students.push(a)}this.player=new eg(this.app.camera),this.player.setColliders(this.school.corridorColliders),this.player.isMobile&&new n0(this.player),this.app.camera.position.set(0,1.7,0),this.hud=new Lg,this.hud.addGlobalStyles(),this.notebookUI=new Pg,this.explPanel=new kg,this.taskPanel=new Hg,this.hwUI=new $g,this.eventUI=new qg,this.pauseMenu=new jg,this.reportCard=new i0,this.scheduleScreen=new s0,this.skillScreen=new r0(this.skillTree),this.weekScreen=new a0,this.prepPanel=new Kg,this.hwCheckUI=new Zg,this.remarkUI=new t0,this.hud.setReputation(this.reputation),this.hud.setMoney(this.money.calcWeeklySalary(this.reputation,this.career.rank.salaryBonus)),this.hud.setDay(this.dayNumber),this.app.onTick(i=>this.tick(i)),this.wireEvents(),this.showSchedule()}wireEvents(){this.bus.on("playerInteract",()=>this.onInteract()),this.bus.on("pauseToggled",()=>this.togglePause()),this.bus.on("attentionWarning",()=>{this.hud.showNotification("вљ пёЏ The class is losing attention!","#FFD700"),this.sound.playWarning()}),this.bus.on("studentDisrupting",e=>{const{studentName:t}=e;this.hud.showNotification(`рџ¤ ${t} is disrupting the class!`,"#FF4D4D"),this.sound.playWarning()}),document.addEventListener("click",()=>this.sound.init(),{once:!0}),document.addEventListener("keydown",()=>this.sound.init(),{once:!0}),document.addEventListener("keydown",e=>{e.key==="-"&&this._cheatPromoteToVP(),e.key==="="&&this._cheatPromoteToDirector()})}tick(e){this.time.tick(e),this.hud.setTime(this.time.getHHMM()),this.students.forEach(t=>t.update(e)),this.behaviorTick+=e,this.behaviorTick>5e3&&(this.behaviorTick=0,this.blockInput||this.studentAI.behaviorTick(this.students)),this.attention.tick(this.students),this.player.update(e),this.breakSys.isActive()&&this.breakSys.update(e),!this.blockInput&&this.lessonSys.getPhase()!=="done"&&(this.remarkTick+=e,this.remarkTick>15e3&&(this.remarkTick=0,this._tickStudentMisbehavior()))}gradeForLesson(e){const t=this.charData.grades??Hr;return t[e%t.length]??9}roomForLesson(e){const t=this.charData.grades??Hr,n=[...new Set(t)],i=t[e%t.length]??9;return n.indexOf(i)%2===0?"room101":"room102"}placeStudentsIn(e){const t=this.school.rooms.get(e);!t||t.deskInfos.length===0||this.students.forEach((n,i)=>{const r=t.deskInfos[i];r&&(n.placeat(new R(r.position.x,.24,r.position.z+.62)),n.group.rotation.y=Math.PI)})}showSchedule(){if(this.career.isDirector()){this._startDirectorWeek();return}if(this.career.isVP()){this._startVPDay();return}if(this.dayNumber%2===0){this._startSOR();return}this.blockInput=!0;const e=this.charData.grades??Hr,t=i=>{const r=Math.floor(i/60),a=String(i%60).padStart(2,"0");return`${r}:${a}`},n=Array.from({length:Us},(i,r)=>{const a=e[r%e.length]??9,o=this.school.rooms.get(this.roomForLesson(r))?.label??"Classroom",l=8*60+30+r*55,c=l+45;return{index:r,subject:`${this.charData.subject} вЂў Gr.${a} (${o})`,icon:h0[this.charData.subject]??"рџ“љ",time:`${t(l)} вЂ“ ${t(c)}`,done:r<this.lessonIndex,current:r===this.lessonIndex}});this.scheduleScreen.show(this.dayNumber,n,()=>{this.blockInput=!1,this.startLesson()})}startLesson(){const e=this.roomForLesson(this.lessonIndex);this.placeStudentsIn(e),this.attention.reset(),this.time.reset(30+this.lessonIndex*55),this.isWednesdayQuiz=(this.dayNumber-1)%5===2;const t=this.gradeForLesson(this.lessonIndex),n=this.completedTopicsPerGrade[t]??[];this.lessonSys.init(this.charData.subject,t,this.dayNumber,n),this.eventSys.init(this.charData.subject,this.lessonSys.getTopic());const i=this.school.rooms.get(e);i?.blackboard?.writeText([this.lessonSys.getTopic(),`${this.charData.subject.toUpperCase()} В· Grade ${t}`]),this.hud.show(),this.students.forEach(r=>r.setEmotion("neutral")),this.pendingAction=()=>this.openLessonPrep(),this.hud.showNotification(`рџЏ« ${i?.label??"Classroom"} В· Grade ${t} вЂ” approach the board and press E`,"#4FFFB0",7e3)}openLessonPrep(){this.blockInput=!0,this.time.paused=!0;const e=this.students.filter(a=>a.data.hwDone).length,t=this.lessonSys.getTopic(),n=this.gradeForLesson(this.lessonIndex),i=(a,o,l,c)=>{this.lessonSys.setPrepBonus(a,o),this.blockInput=!1,this.time.paused=!1,l&&this.hud.showNotification(l,c,2800),this.openExplanationPhase()},r=()=>{this.hwCheckUI.open(this.students.map(a=>a.data),a=>{a.forEach((l,c)=>{const d=this.students.find(h=>h.data.id===c);d&&this.gradebook.add({studentId:c,studentName:d.data.name,grade:l,topic:this.lessonSys.getTopic(),lessonDay:this.dayNumber,type:"oral"})}),this.students.forEach(l=>{!l.data.hwDone&&!a.has(l.data.id)&&this.gradebook.add({studentId:l.data.id,studentName:l.data.name,grade:2,topic:this.lessonSys.getTopic(),lessonDay:this.dayNumber,type:"oral"})});const o=a.size+this.students.filter(l=>!l.data.hwDone).length;this.hud.showNotification(`рџ“‹ HW checked: ${o} students`,"#58A6FF",2500),this.prepPanel.open(t,n,e,this.students.length,l=>i(l.understandingBonus,l.attentionBonus,l.id==="topic_review"?`рџ“– Topic reviewed! +${l.understandingBonus} understanding`:l.id==="energetic"?`вљЎ Energetic start! +${l.attentionBonus} attention`:"",l.id==="energetic"?"#FFD700":"#4FFFB0"),r,!0)})};this.prepPanel.open(t,n,e,this.students.length,a=>{a.id==="skip"?i(0,0,"",""):a.id==="topic_review"?i(a.understandingBonus,a.attentionBonus,`рџ“– Topic reviewed! +${a.understandingBonus} understanding`,"#4FFFB0"):a.id==="energetic"&&i(a.understandingBonus,a.attentionBonus,`вљЎ Energetic start! +${a.attentionBonus} attention`,"#FFD700")},r)}openExplanationPhase(){this.blockInput=!0,this.time.paused=!0;const e=this.lessonSys.getCurrentRound(),t=this.lessonSys.getRounds(),n=t.indexOf(e)+1;this.explPanel.open(e,n,t.length,i=>{this.time.paused=!1,this.lessonSys.chooseExplanationOption(i,this.students);const r=this.skillTree.getXPMult("explain");this.experience+=Math.round(5*r);const a=e.options[i];this.studentAI.reactToExplanation(this.students,a.understandingDelta,a.attentionDelta),this.blockInput=!1,this.lessonSys.getPhase()==="tasks"?(this.pendingAction=()=>this.openTaskPhase(),this.hud.showNotification("рџ“ќ Press E to assign a task to the class","#FFD700",7e3)):this.tryFireEvent(()=>{this.pendingAction=()=>this.openExplanationPhase(),this.hud.showNotification(`рџ“Њ Step ${n+1} вЂ” press E at the board`,"#4FFFB0",6e3)})})}openTaskPhase(){if(this.isWednesdayQuiz){this.runWednesdayQuiz();return}this.blockInput=!0,this.time.paused=!0;const e=this.lessonSys.getTopicEntry(),t=e?{easy:e.tasks.easy.text,medium:e.tasks.medium.text,hard:e.tasks.hard.text}:{easy:"вЂ” no data вЂ”",medium:"вЂ” no data вЂ”",hard:"вЂ” no data вЂ”"};this.taskPanel.open(t,(n,i)=>{this.time.paused=!1,this.blockInput=!1,this.lessonSys.setTaskConfig({difficulty:i,quantity:"few"},this.students,n);const r=n==="board"?"at board рџ“‹":"written вњЏпёЏ";this.hud.showNotification(`рџ“ќ Class working on task (${r}, ${i})вЂ¦ observe`,"#4FFFB0",4e3),setTimeout(()=>{this.lessonSys.finishTasks(this.students),this.tryFireEvent(()=>{this.pendingAction=()=>this.openGradingPhase(),this.hud.showNotification("рџ““ Collect notebooks вЂ” press E","#BC8CFF",1e4)})},12e3)})}openGradingPhase(){this.blockInput=!0,this.time.paused=!0;const e=this.lessonSys.getNotebooks();this.notebookUI.open(e,(t,n)=>{this.lessonSys.gradeNotebook(t,n)},()=>{this.time.paused=!1,this.lessonSys.finishGrading(),this.blockInput=!1,this.openHomeworkPhase()})}openHomeworkPhase(){this.showHomeworkChoice()}runWednesdayQuiz(){this.blockInput=!0,this.time.paused=!0,this.hud.showNotification("рџ“‹ Wednesday вЂ” written quiz!","#BC8CFF",4e3),this.students.forEach(t=>t.setEmotion("writing")),this.lessonSys.setPhase("tasks"),this.lessonSys.finishTasks(this.students);const e=this.lessonSys.getNotebooks();setTimeout(()=>{this.notebookUI.open(e,(t,n)=>{this.lessonSys.gradeNotebook(t,n)},()=>{this.time.paused=!1,this.lessonSys.finishGrading(),this.blockInput=!1,this.lessonSys.setPhase("homework"),this.openHomeworkPhase()})},1800)}showHomeworkChoice(){this.time.paused=!0;const e=this.lessonSys.getTopicEntry(),t=e?{easy:e.homework.easy,medium:e.homework.medium,hard:e.homework.hard}:{easy:"вЂ” no data вЂ”",medium:"вЂ” no data вЂ”",hard:"вЂ” no data вЂ”"};this.hwUI.open(t,(n,i)=>{this.time.paused=!1,this.lessonSys.setHomework(n,i,this.students),n?(this.sound.playBell(),this.hud.showNotification(`рџ“љ Homework assigned (${i})`,"#58A6FF",2200)):(this.sound.playBell(),this.hud.showNotification("вњ… Lesson finished вЂ” no homework","#4FFFB0",2200));const r=this.students.filter(o=>o.data.stats.understanding<70).sort(()=>Math.random()-.5).slice(0,1),a=r.length>0?r:[this.students[Math.floor(Math.random()*this.students.length)]];if(Math.random()<.65){setTimeout(()=>this._showStudentQuestion(a,()=>this.finishLesson()),600);return}setTimeout(()=>this.finishLesson(),2400)})}finishLesson(){this.blockInput=!0;const e=this.lessonSys.buildReport(this.students),t=this.skillTree.getXPMult("lesson"),n=Math.round(e.xpEarned*t);this.experience+=n,this.reputation=Math.max(0,Math.min(200,this.reputation+e.repDelta));const i=e.classGrade;this.completedTopicsPerGrade[i]||(this.completedTopicsPerGrade[i]=[]),this.completedTopicsPerGrade[i].push(e.topic),this.weekReports.push(e),e.hwGiven&&this.studentAI.simulateHWCompletion(this.students,e.hwDifficulty??"medium");const r=this.career.checkPromotion(this.experience,this.lessonIndex+1,this.reputation);r&&this.hud.showNotification(`рџЋ‰ Career promotion: ${r.name}!`,"#FFD700",4e3),this.skillTree.addPoints(10),this.hud.setReputation(this.reputation),this.hud.setMoney(this.money.calcWeeklySalary(this.reputation,this.career.rank.salaryBonus)),this.reportCard.show(e,this.experience-n,()=>{this.blockInput=!1,this.checkStudentProgression(),this.lessonIndex++,this.lessonIndex>=Us?this.endDay():this.startBreak(()=>this.showSchedule())})}startBreak(e){this.sound.playBell(),this.hud.showNotification("рџ”” Break! Press E near the classroom door to enter early.","#4FFFB0",6e3),this.app.camera.position.set(0,1.7,0),this.breakSys.start(this.students,3e4,()=>{this.pendingAction=null,e()}),this.pendingAction=()=>{this.breakSys.isActive()&&this.breakSys.forceEnd()};const n=i=>{this.breakSys.isActive()&&i>0&&(this.hud.showNotification(`вЏ± Break вЂ” ${Math.ceil(i/1e3)}s left (E at door вЂ” enter)`,"#8B949E",2500),setTimeout(()=>n(i-1e4),1e4))};setTimeout(()=>n(2e4),1e4)}checkStudentProgression(){this.students.forEach(e=>{const{understanding:t,motivation:n,behavior:i,attention:r}=e.data.stats,a=e.data.type;let o=!1;if(a==="lazy"&&t>50&&n>40&&(o=!0),a==="bully"&&i>60&&(o=!0),a==="anxious"&&t>60&&n>55&&(o=!0),a==="average"&&t>65&&r>60&&(o=!0),o){e.data.progressionScore++;const l=a==="bully"?4:3;if(e.data.progressionScore>=l){e.data.progressionScore=0,e.modifyStat("motivation",15),e.modifyStat("behavior",10),e.modifyStat("understanding",8);const c={lazy:`вњЁ ${e.data.name} started trying! Noticeable progress.`,bully:`рџЊџ ${e.data.name} has been behaving better!`,anxious:`рџ’Є ${e.data.name} gained confidence!`,average:`рџ“€ ${e.data.name} shows steady growth!`};this.hud.showNotification(c[a]??`вњЁ ${e.data.name} improved noticeably!`,"#FFD700",3500)}}})}endDay(){this.lessonIndex=0,this.dayNumber++,this._saveProgress(),this.dayNumber>Fs?this.endWeek():this.showSchedule()}endWeek(){const e=Math.ceil(this.dayNumber/Fs);this.totalWeeks=e;const t=this.money.calcWeeklySalary(this.reputation,this.career.rank.salaryBonus);if(this.reputation<10&&!this.career.isVP()&&!this.career.isDirector()){this._fireTeacher("reputation");return}this.money.earn(t);const n=this.weekReports.reduce((a,o)=>a+o.xpEarned,0),i=this.weekReports.reduce((a,o)=>a+o.repDelta,0),r={weekNumber:e,lessonReports:[...this.weekReports],xpTotal:n,repDelta:i,moneyEarned:t,careerLevel:this.career.rank,promoted:!1,skillPoints:this.skillTree.points};this.weekReports=[],this.dayNumber=1,this.lessonIndex=0,this.weekScreen.show(r,()=>{this._runWeeklyExam()})}_runWeeklyExam(){const e=this.gradeForLesson(0),t=this.examSystem.generateExam(this.students,this.charData.subject,e);this.blockInput=!0,this.hud.showNotification("рџ“‹ End of week вЂ” grade student exam papers","#BC8CFF",4e3),setTimeout(()=>{this.notebookUI.open(t,(n,i)=>{const r=t.find(a=>a.studentId===n);r&&(r.grade=i)},()=>{this.blockInput=!1;const n=this.examSystem.getAverageGrade(t);this._afterExam(n)})},4500)}_afterExam(e){const t=e.toFixed(2);if(e<2.8){if(this.badExamStreak++,this.badExamStreak>=3&&!this.career.isVP()&&!this.career.isDirector()){this._fireTeacher("bad_grades");return}}else this.badExamStreak=0;if(this.career.rank.id==="honored"){if(this.career.checkExamPromotion(this.experience,this.weekReports.length,this.reputation,e)){this.hud.showNotification(`рџЏ›пёЏ Congratulations! Average grade ${t} вЂ” appointed Deputy Principal!`,"#FFD700",6e3),this._saveProgress(),setTimeout(()=>this.showSchedule(),6500);return}sl.isPromotionEligible(e)?this.hud.showNotification(`в­ђ Average grade ${t} вЂ” excellent result! Keep it up.`,"#4FFFB0",4e3):this.hud.showNotification(`рџ“Љ Average grade ${t} вЂ” need в‰Ґ 4.0 for Deputy Principal`,"#FF9930",4e3)}else this.hud.showNotification(`рџ“Љ Average exam grade: ${t}`,"#4FFFB0",3e3);setTimeout(()=>{this.skillScreen.open(this.skillTree.points,()=>{this.showSchedule()})},4200)}_fireTeacher(e){this.blockInput=!0,this.sound.playGameOver();const t=this.weekReports.length>0?(this.weekReports.reduce((n,i)=>n+i.avgUnderstanding,0)/this.weekReports.length/20).toFixed(1):"вЂ”";setTimeout(()=>{this.gameOverScreen.show(e,{weeks:this.totalWeeks,reputation:this.reputation,avgGrade:t},()=>{this.save.reset(),window.location.reload()})},800)}_showStudentQuestion(e,t){const n=["I didn't quite understand this part of the topicвЂ¦ Could you explain again?","How do we apply this in practice? The example wasn't very clear.","Why exactly that answer? I thought it was differentвЂ¦","Can we go through another example? It didn't quite click for me.","Will this be on the test? I need to re-read it.","I got confused with the formulaвЂ¦ Where did I go wrong?"],i=this.lessonSys.getTopic();let r=0;const a=()=>{if(r>=e.length){t();return}const o=e[r++];o.setEmotion("confused");const l=n[Math.floor(Math.random()*n.length)],c=document.createElement("div");c.style.cssText=`
        position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
        z-index:4000;background:#1a2535ee;
        border:1px solid #3a6aaa;border-radius:14px;
        padding:18px 28px;max-width:420px;width:90%;
        font-family:'Segoe UI',sans-serif;color:#e0e8f0;
        box-shadow:0 4px 24px rgba(0,0,0,.6);
        animation:ew2_fadein .3s ease;
      `,c.innerHTML=`
        <div style="font-size:12px;color:#5a8cc0;margin-bottom:6px;letter-spacing:1px;text-transform:uppercase;">
          вќ“ Student Question В· ${i}
        </div>
        <div style="font-size:14px;font-weight:600;margin-bottom:4px;color:#a0c8ff;">${o.data.name}:</div>
        <div style="font-size:14px;line-height:1.5;margin-bottom:14px;">&ldquo;${l}&rdquo;</div>
        <div style="display:flex;gap:10px;">
          <button data-ans="explain" style="flex:1;padding:10px;border:none;border-radius:8px;cursor:pointer;background:#1a4a2a;color:#4FFFB0;font-size:13px;font-weight:700;">
            рџ“– Explain again
          </button>
          <button data-ans="later" style="flex:1;padding:10px;border:none;border-radius:8px;cursor:pointer;background:#2a2a3a;color:#8B949E;font-size:13px;font-weight:700;">
            вЏ­ Cover it next lesson
          </button>
        </div>
      `,c.querySelectorAll("button").forEach(d=>{d.addEventListener("click",()=>{const h=d.dataset.ans;c.remove(),h==="explain"?(o.modifyStat("understanding",12),o.modifyStat("motivation",5),o.setEmotion("happy"),this.reputation=Math.min(200,this.reputation+2),this.hud.setReputation(this.reputation),this.hud.showNotification(`вњ… ${o.data.name} understood! +2 rep`,"#4FFFB0",2e3)):(o.setEmotion("neutral"),this.hud.showNotification(`рџ“… ${o.data.name} will review at home`,"#8B949E",1500)),setTimeout(a,400)})}),document.body.appendChild(c)};a()}_cheatPromoteToVP(){this.career.forceRank("zavuch"),this._saveProgress(),this.dayNumber=1,this.lessonIndex=0,this.hud.showNotification("рџ”‘ [DEV] в†’ Deputy Principal","#BC8CFF",2e3),setTimeout(()=>this.showSchedule(),500)}_cheatPromoteToDirector(){this.career.forceRank("director"),this._saveProgress(),this.dayNumber=1,this.lessonIndex=0,this.hud.showNotification("рџ”‘ [DEV] в†’ Director","#FFD700",2e3),setTimeout(()=>this.showSchedule(),500)}_startSOR(){this.blockInput=!0,this.hud.show();const e=this.roomForLesson(0);this.placeStudentsIn(e),this.students.forEach(n=>{n.seated=!0,n.setEmotion("writing")});const t=document.createElement("div");t.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;',t.innerHTML=`
      <div style="background:#1a2535;color:#e0e8f0;border-radius:14px;padding:44px 54px;max-width:480px;width:90%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.7);">
        <div style="font-size:52px;margin-bottom:16px;">рџ“ќ</div>
        <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">Day ${this.dayNumber}</div>
        <div style="font-size:26px;font-weight:700;margin-bottom:10px;">Summative Assessment (SA)</div>
        <div style="font-size:15px;color:#8ab4d4;margin-bottom:28px;">
          Students write independently.<br>
          Afterwards you grade the notebooks.
        </div>
        <button id="sor-start-btn" style="padding:14px 44px;border:none;border-radius:10px;cursor:pointer;background:linear-gradient(135deg,#2a4a8a,#3a6ab0);color:#fff;font-size:17px;font-weight:700;transition:opacity .15s;" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
          в–¶ Start
        </button>
      </div>`,t.querySelector("#sor-start-btn").addEventListener("click",()=>{t.remove(),this._runSORExam()}),document.body.appendChild(t)}_runSORExam(){const e=this.gradeForLesson(0),t=this.examSystem.generateExam(this.students,this.charData.subject,e);this.students.forEach(n=>n.setEmotion("writing")),this.hud.showNotification("вњЏпёЏ SA вЂ” students are workingвЂ¦","#BC8CFF",6e3),setTimeout(()=>{this.notebookUI.open(t,(n,i)=>{const r=t.find(a=>a.studentId===n);r&&(r.grade=i)},()=>{this.blockInput=!1;const n=this.examSystem.getAverageGrade(t);this.hud.showNotification(`вњ… SA complete В· Average grade: ${n.toFixed(1)}`,"#4FFFB0",3e3);const i=this.lessonSys.getTopic()||"SA";t.forEach(r=>{this.gradebook.add({studentId:r.studentId,studentName:r.studentName,grade:r.grade,topic:i,lessonDay:this.dayNumber,type:"exam"});const a=this.students.find(o=>o.data.id===r.studentId);a&&a.modifyStat("motivation",(r.grade??3)>=4?8:(r.grade??3)===3?0:-8)}),this.lessonIndex=Us,this.endDay()})},6500)}_startVPDay(){this.blockInput=!1;const e=["room101","room102","room103"],t=e[this.dayNumber%e.length],n=this.school.rooms.get(t);this.hud.showNotification(`рџЏ›пёЏ Deputy Principal В· Day ${this.dayNumber} вЂ” go to ${n?.label??"the office"} and press E`,"#BC8CFF",8e3),this.pendingAction=()=>{this.vpScreen.setGlobalScore(this.vpInspectionScore),this.vpScreen.show(n?.label??"Classroom",(i,r)=>{if(this.vpInspectionScore+=i.reduce((o,l)=>o+l.score,0),r!==0&&(this.reputation=Math.max(0,Math.min(300,this.reputation+r)),this.hud.setReputation(this.reputation)),this.hud.showNotification(`вњ… Inspection done В· Score: ${this.vpInspectionScore}${r>0?` В· Rep +${r}`:""}`,"#4FFFB0",3e3),this.career.checkDirectorPromotion(this.vpInspectionScore,this.reputation)){this.hud.showNotification("рџЋ‰ You are appointed School Director!","#FFD700",6e3),this._saveProgress(),setTimeout(()=>this.showSchedule(),6500);return}this.lessonIndex=Us,this.endDay()})}}_saveProgress(){this.save.save({teacherName:this.charData.name,subject:this.charData.subject,grade:this.charData.grades?.[0]??9,grades:this.charData.grades,reputation:this.reputation,experience:this.experience,money:this.money.balance,careerRank:this.career.rank.id,skillPoints:this.skillTree.points,unlockedPerks:this.skillTree.save(),dayNumber:this.dayNumber,lessonCount:this.weekReports.length,completedTopics:[],completedTopicsPerGrade:this.completedTopicsPerGrade})}_startDirectorWeek(){const e=Math.ceil(this.dayNumber/Fs);if(this.directorScreen.updateStats(this.reputation,3.8+Math.random()*.4,e),e>=10&&this.reputation>=150&&this.directorScreen.state.budget>8e5){this._showEnding();return}this.directorScreen.show(()=>{this.dayNumber=1,this.lessonIndex=0,this._saveProgress(),this.showSchedule()})}_showEnding(){this.blockInput=!0;const e=Math.ceil(this.dayNumber/Fs),t=this.weekReports.length>0?Math.round(this.weekReports.reduce((i,r)=>i+r.avgUnderstanding,0)/this.weekReports.length/20*10)/10:3.8,n=["novice","cat2","cat1","highest","honored","zavuch","director"];this.endingScreen.show({teacherName:this.charData.name,subject:this.charData.subject,totalWeeks:e,totalStudents:this.students.length*e,avgGrade:t,totalEarned:this.money.balance,reputation:this.reputation,schoolRating:this.directorScreen.state.schoolRating,careerPath:n},()=>{this.save.reset(),window.location.reload()})}tryFireEvent(e){const t=this.time.gameMinutes,n=this.eventSys.maybeSpawnEvent(t);if(!n){e();return}this.blockInput=!0,this.eventUI.open(n,this.students,i=>{this.hud.showNotification(i,"#4FFFB0",2500),this.blockInput=!1,e()})}onInteract(){if(this.blockInput)return;if(this.sound.playClick(),this.lessonSys.getPhase()!=="done"&&!this.breakSys.isActive()){const t=this.app.camera.position,n=this.students.filter(i=>i.group.position.distanceTo(t)<2.4).sort((i,r)=>i.group.position.distanceTo(t)-r.group.position.distanceTo(t))[0];if(n){this.remarkUI.open(n.data,i=>this._applyRemark(i,n));return}}if(this.pendingAction){const t=this.pendingAction;this.pendingAction=null,t()}else this.hud.showNotification("рџ’Ў Walk around the school and watch students","#8B949E",1500)}_applyRemark(e,t){switch(this.sound.playRemark(),e.type){case"warning":t.modifyStat("behavior",8),t.modifyStat("attention",10),(t.emotion==="phone"||t.emotion==="sleeping")&&t.setEmotion("troubled"),this.hud.showNotification(`вњ‹ ${t.data.name} received a warning`,"#FFD700",2e3);break;case"confiscate_phone":t.modifyStat("attention",20),t.modifyStat("behavior",5),t.setEmotion("troubled"),this.hud.showNotification(`рџ“µ ${t.data.name}'s phone confiscated`,"#FF4D4D",2e3);break;case"wake_up":t.modifyStat("attention",15),t.setEmotion("confused"),this.hud.showNotification(`рџ‘‹ ${t.data.name} woke up`,"#58A6FF",2e3);break;case"praise":t.modifyStat("motivation",10),t.modifyStat("attention",5),t.setEmotion("happy"),this.sound.playChime(),this.hud.showNotification(`в­ђ ${t.data.name} praised!`,"#4FFFB0",2e3);break;case"dismiss":t.modifyStat("behavior",-15),t.modifyStat("motivation",-10),t.setEmotion("troubled"),this.hud.showNotification(`рџљЄ ${t.data.name} removed from class`,"#FF4D4D",2500);break}}_tickStudentMisbehavior(){this.students.forEach(e=>{if(e.emotion==="writing"||e.emotion==="raising_hand")return;const t=e.data.stats.attention,n=e.data.stats.behavior;if(t<35&&n<50&&Math.random()<.4){e.setEmotion("phone");return}if(t<20&&Math.random()<.5){e.setEmotion("sleeping");return}t<45&&e.emotion!=="phone"&&e.emotion!=="sleeping"&&Math.random()<.3&&e.setEmotion("bored")})}togglePause(){this.pauseMenu.isVisible()?this.pauseMenu.hide():this.pauseMenu.show({onResume:()=>{},onSave:()=>{this._saveProgress(),this.hud.showNotification("рџ’ѕ Saved!","#4FFFB0")},onSettings:()=>{this.hud.showNotification("вљ™пёЏ Settings coming soon","#8B949E")},onMainMenu:()=>{location.reload()}})}}const m0=document.getElementById("app"),rc=new Am(m0);rc.start();const _l=new Pm;_l.open(async s=>{_l.close();const t=new URLSearchParams(location.search).get("apiKey")??localStorage.getItem("ew2_apikey")??"";await new f0(rc,t).start(s)});

