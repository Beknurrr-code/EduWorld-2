var oc=Object.defineProperty;var lc=(s,e,t)=>e in s?oc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var T=(s,e,t)=>lc(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="160",cc=0,_a=1,dc=2,xl=1,yl=2,Mn=3,Hn=0,Bt=1,En=2,Nn=0,Ii=1,ba=2,Ma=3,Ea=4,hc=5,Kn=100,uc=101,pc=102,Sa=103,wa=104,fc=200,mc=201,gc=202,xc=203,zr=204,Hr=205,yc=206,vc=207,_c=208,bc=209,Mc=210,Ec=211,Sc=212,wc=213,Tc=214,Ac=0,Cc=1,Rc=2,Ns=3,Dc=4,Lc=5,Pc=6,Ic=7,vl=0,Uc=1,kc=2,Bn=0,Fc=1,Nc=2,Bc=3,_l=4,Oc=5,zc=6,bl=300,ki=301,Fi=302,Gr=303,Vr=304,Ks=306,Wr=1e3,on=1001,$r=1002,wt=1003,Ta=1004,ir=1005,Zt=1006,Hc=1007,es=1008,On=1009,Gc=1010,Vc=1011,ia=1012,Ml=1013,kn=1014,Fn=1015,ts=1016,El=1017,Sl=1018,si=1020,Wc=1021,ln=1023,$c=1024,Xc=1025,ri=1026,Ni=1027,wl=1028,Tl=1029,qc=1030,Al=1031,Cl=1033,sr=33776,rr=33777,ar=33778,or=33779,Aa=35840,Ca=35841,Ra=35842,Da=35843,Rl=36196,La=37492,Pa=37496,Ia=37808,Ua=37809,ka=37810,Fa=37811,Na=37812,Ba=37813,Oa=37814,za=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,$a=37820,Xa=37821,lr=36492,qa=36494,ja=36495,jc=36283,Ya=36284,Ka=36285,Za=36286,Dl=3e3,ai=3001,Yc=3200,Kc=3201,sa=0,Zc=1,Qt="",At="srgb",Tn="srgb-linear",ra="display-p3",Zs="display-p3-linear",Bs="linear",rt="srgb",Os="rec709",zs="p3",di=7680,Ja=519,Jc=512,Qc=513,ed=514,Ll=515,td=516,nd=517,id=518,sd=519,Xr=35044,Qa="300 es",qr=1035,wn=2e3,Hs=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cr=Math.PI/180,jr=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ht(s,e,t){return Math.max(e,Math.min(t,s))}function rd(s,e){return(s%e+e)%e}function dr(s,e,t){return(1-t)*s+t*e}function eo(s){return(s&s-1)===0&&s!==0}function Yr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],m=n[5],g=n[8],x=i[0],f=i[3],p=i[6],S=i[1],E=i[4],w=i[7],P=i[2],C=i[5],A=i[8];return r[0]=a*x+o*S+l*P,r[3]=a*f+o*E+l*C,r[6]=a*p+o*w+l*A,r[1]=c*x+d*S+h*P,r[4]=c*f+d*E+h*C,r[7]=c*p+d*w+h*A,r[2]=u*x+m*S+g*P,r[5]=u*f+m*E+g*C,r[8]=u*p+m*w+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,m=c*r-a*l,g=t*h+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*c-d*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(d*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hr.makeScale(e,t)),this}rotate(e){return this.premultiply(hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new He;function Pl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ad(){const s=Gs("canvas");return s.style.display="block",s}const to={};function Qi(s){s in to||(to[s]=!0,console.warn(s))}const no=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),io=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Tn]:{transfer:Bs,primaries:Os,toReference:s=>s,fromReference:s=>s},[At]:{transfer:rt,primaries:Os,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zs]:{transfer:Bs,primaries:zs,toReference:s=>s.applyMatrix3(io),fromReference:s=>s.applyMatrix3(no)},[ra]:{transfer:rt,primaries:zs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(io),fromReference:s=>s.applyMatrix3(no).convertLinearToSRGB()}},od=new Set([Tn,Zs]),Je={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!od.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=os[e].toReference,i=os[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return os[s].primaries},getTransfer:function(s){return s===Qt?Bs:os[s].transfer}};function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hi;class Il{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=Gs("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ld=0;class Ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(pr(i[a].image)):r.push(pr(i[a]))}else r=pr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function pr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Il.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;class Ot extends Oi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=on,i=on,r=Zt,a=es,o=ln,l=On,c=Ot.DEFAULT_ANISOTROPY,d=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=zn(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ai?At:Qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?ai:Dl}set encoding(e){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ai?At:Qt}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=bl;Ot.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],g=l[9],x=l[2],f=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,w=(m+1)/2,P=(p+1)/2,C=(d+u)/4,A=(h+x)/4,$=(g+f)/4;return E>w&&E>P?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=C/n,r=A/n):w>P?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=C/i,r=$/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=$/r),this.set(n,i,r,t),this}let S=Math.sqrt((f-g)*(f-g)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-x)/S,this.z=(u-d)/S,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?At:Qt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kl extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hd extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==u||c!==m||d!==g){let f=1-o;const p=l*u+c*m+d*g+h*x,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const P=Math.sqrt(E),C=Math.atan2(P,p*S);f=Math.sin(f*C)/P,o=Math.sin(o*C)/P}const w=o*S;if(l=l*f+u*w,c=c*f+m*w,d=d*f+g*w,h=h*f+x*w,f===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*h+l*m-c*u,e[t+1]=l*g+d*u+c*h-o*m,e[t+2]=c*g+d*m+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(r/2),u=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"YXZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"ZXY":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"ZYX":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"YZX":this._x=u*d*h+c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h-u*m*g;break;case"XZY":this._x=u*d*h-c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-r*l,this._y=i*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=i+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fr.copy(this).projectOnVector(e),this.sub(fr)}reflect(e){return this.sub(fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new R,so=new is;class Cn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),cs.subVectors(this.max,Gi),ui.subVectors(e.a,Gi),pi.subVectors(e.b,Gi),fi.subVectors(e.c,Gi),Rn.subVectors(pi,ui),Dn.subVectors(fi,pi),Wn.subVectors(ui,fi);let t=[0,-Rn.z,Rn.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,Rn.z,0,-Rn.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-Rn.y,Rn.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!mr(t,ui,pi,fi,cs)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ui,pi,fi,cs))?!1:(ds.crossVectors(Rn,Dn),t=[ds.x,ds.y,ds.z],mr(t,ui,pi,fi,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new R,new R,new R,new R,new R,new R,new R,new R],nn=new R,ls=new Cn,ui=new R,pi=new R,fi=new R,Rn=new R,Dn=new R,Wn=new R,Gi=new R,cs=new R,ds=new R,$n=new R;function mr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){$n.fromArray(s,r);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),d=n.dot($n);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ud=new Cn,Vi=new R,gr=new R;class aa{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ud.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(gr)),this.expandByPoint(Vi.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new R,xr=new R,hs=new R,Ln=new R,yr=new R,us=new R,vr=new R;class pd{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xr.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(xr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=Ln.dot(this.direction),l=-Ln.dot(hs),c=Ln.lengthSq(),d=Math.abs(1-a*a);let h,u,m,g;if(d>0)if(h=a*l-o,u=a*o-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const x=1/d;h*=x,u*=x,m=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(xr).addScaledVector(hs,u),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,i,r){yr.subVectors(t,e),us.subVectors(n,e),vr.crossVectors(yr,us);let a=this.direction.dot(vr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(us.crossVectors(Ln,us));if(l<0)return null;const c=o*this.direction.dot(yr.cross(Ln));if(c<0||l+c>a)return null;const d=-o*Ln.dot(vr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,i,r,a,o,l,c,d,h,u,m,g,x,f){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,d,h,u,m,g,x,f)}set(e,t,n,i,r,a,o,l,c,d,h,u,m,g,x,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=m,p[7]=g,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,m=a*h,g=o*d,x=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,m=l*h,g=c*d,x=c*h;t[0]=u+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,m=l*h,g=c*d,x=c*h;t[0]=u-x*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,m=a*h,g=o*d,x=o*h;t[0]=l*d,t[4]=g*c-m,t[8]=u*c+x,t[1]=l*h,t[5]=x*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=x-u*h,t[8]=g*h+m,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*h+g,t[10]=u-x*h}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+x,t[5]=a*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fd,e,md)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Pn.crossVectors(n,Vt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Pn.crossVectors(n,Vt)),Pn.normalize(),ps.crossVectors(Vt,Pn),i[0]=Pn.x,i[4]=ps.x,i[8]=Vt.x,i[1]=Pn.y,i[5]=ps.y,i[9]=Vt.y,i[2]=Pn.z,i[6]=ps.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],m=n[13],g=n[2],x=n[6],f=n[10],p=n[14],S=n[3],E=n[7],w=n[11],P=n[15],C=i[0],A=i[4],$=i[8],_=i[12],M=i[1],U=i[5],H=i[9],Z=i[13],L=i[2],N=i[6],V=i[10],j=i[14],X=i[3],q=i[7],Y=i[11],ne=i[15];return r[0]=a*C+o*M+l*L+c*X,r[4]=a*A+o*U+l*N+c*q,r[8]=a*$+o*H+l*V+c*Y,r[12]=a*_+o*Z+l*j+c*ne,r[1]=d*C+h*M+u*L+m*X,r[5]=d*A+h*U+u*N+m*q,r[9]=d*$+h*H+u*V+m*Y,r[13]=d*_+h*Z+u*j+m*ne,r[2]=g*C+x*M+f*L+p*X,r[6]=g*A+x*U+f*N+p*q,r[10]=g*$+x*H+f*V+p*Y,r[14]=g*_+x*Z+f*j+p*ne,r[3]=S*C+E*M+w*L+P*X,r[7]=S*A+E*U+w*N+P*q,r[11]=S*$+E*H+w*V+P*Y,r[15]=S*_+E*Z+w*j+P*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],m=e[14],g=e[3],x=e[7],f=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*o*u+n*c*u+i*o*m-n*l*m)+x*(+t*l*m-t*c*u+r*a*u-i*a*m+i*c*d-r*l*d)+f*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*d-n*c*d)+p*(-i*o*d-t*l*h+t*o*u+i*a*h-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],m=e[11],g=e[12],x=e[13],f=e[14],p=e[15],S=h*f*c-x*u*c+x*l*m-o*f*m-h*l*p+o*u*p,E=g*u*c-d*f*c-g*l*m+a*f*m+d*l*p-a*u*p,w=d*x*c-g*h*c+g*o*m-a*x*m-d*o*p+a*h*p,P=g*h*l-d*x*l-g*o*u+a*x*u+d*o*f-a*h*f,C=t*S+n*E+i*w+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=S*A,e[1]=(x*u*r-h*f*r-x*i*m+n*f*m+h*i*p-n*u*p)*A,e[2]=(o*f*r-x*l*r+x*i*c-n*f*c-o*i*p+n*l*p)*A,e[3]=(h*l*r-o*u*r-h*i*c+n*u*c+o*i*m-n*l*m)*A,e[4]=E*A,e[5]=(d*f*r-g*u*r+g*i*m-t*f*m-d*i*p+t*u*p)*A,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*p-t*l*p)*A,e[7]=(a*u*r-d*l*r+d*i*c-t*u*c-a*i*m+t*l*m)*A,e[8]=w*A,e[9]=(g*h*r-d*x*r-g*n*m+t*x*m+d*n*p-t*h*p)*A,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*A,e[11]=(d*o*r-a*h*r-d*n*c+t*h*c+a*n*m-t*o*m)*A,e[12]=P*A,e[13]=(d*x*i-g*h*i+g*n*u-t*x*u-d*n*f+t*h*f)*A,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*f-t*o*f)*A,e[15]=(a*h*i-d*o*i+d*n*l-t*h*l-a*n*u+t*o*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,m=r*d,g=r*h,x=a*d,f=a*h,p=o*h,S=l*c,E=l*d,w=l*h,P=n.x,C=n.y,A=n.z;return i[0]=(1-(x+p))*P,i[1]=(m+w)*P,i[2]=(g-E)*P,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(u+p))*C,i[6]=(f+S)*C,i[7]=0,i[8]=(g+E)*A,i[9]=(f-S)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=mi.set(i[0],i[1],i[2]).length();const a=mi.set(i[4],i[5],i[6]).length(),o=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/r,d=1/a,h=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=d,sn.elements[5]*=d,sn.elements[6]*=d,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=wn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let m,g;if(o===wn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=wn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(a-r),u=(t+e)*c,m=(n+i)*d;let g,x;if(o===wn)g=(a+r)*h,x=-2*h;else if(o===Hs)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new R,sn=new gt,fd=new R(0,0,0),md=new R(1,1,1),Pn=new R,ps=new R,Vt=new R,ro=new gt,ao=new is;class ss{constructor(e=0,t=0,n=0,i=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ao.setFromEuler(this),this.setFromQuaternion(ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gd=0;const oo=new R,gi=new is,vn=new gt,fs=new R,Wi=new R,xd=new R,yd=new is,lo=new R(1,0,0),co=new R(0,1,0),ho=new R(0,0,1),vd={type:"added"},_d={type:"removed"};class Ct extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new R,t=new ss,n=new is,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new He}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(lo,e)}rotateY(e){return this.rotateOnAxis(co,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lo,e)}translateY(e){return this.translateOnAxis(co,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Wi,fs,this.up):vn.lookAt(fs,Wi,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(vn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new R(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new R,_n=new R,_r=new R,bn=new R,xi=new R,yi=new R,uo=new R,br=new R,Mr=new R,Er=new R;let ms=!1;class Jt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),_n.subVectors(n,t),_r.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(_n),l=rn.dot(_r),c=_n.dot(_n),d=_n.dot(_r),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,m=(c*l-o*d)*u,g=(a*d-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,i,r,a,o,l){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),_n.subVectors(e,t),rn.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),rn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;xi.subVectors(i,n),yi.subVectors(r,n),br.subVectors(e,n);const l=xi.dot(br),c=yi.dot(br);if(l<=0&&c<=0)return t.copy(n);Mr.subVectors(e,i);const d=xi.dot(Mr),h=yi.dot(Mr);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(xi,a);Er.subVectors(e,r);const m=xi.dot(Er),g=yi.dot(Er);if(g>=0&&m<=g)return t.copy(r);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(yi,o);const f=d*g-m*h;if(f<=0&&h-d>=0&&m-g>=0)return uo.subVectors(r,i),o=(h-d)/(h-d+(m-g)),t.copy(i).addScaledVector(uo,o);const p=1/(f+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(xi,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Sr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=rd(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sr(a,r,e+1/3),this.g=Sr(a,r,e),this.b=Sr(a,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Ht(Lt.r*255,0,255))*65536+Math.round(Ht(Lt.g*255,0,255))*256+Math.round(Ht(Lt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=At){Je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(gs);const n=dr(In.h,gs.h,t),i=dr(In.s,gs.s,t),r=dr(In.l,gs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ve;Ve.NAMES=Nl;let bd=0;class ci extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Ii,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zr,this.blendDst=Hr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Hr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ns extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new R,xs=new De;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xr&&(e.usage=this.usage),e}}class Bl extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ol extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Md=0;const jt=new gt,wr=new Ct,vi=new R,Wt=new Cn,$i=new Cn,Et=new R;class mn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Ol:Bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Wt.min,$i.min),Wt.expandByPoint(Et),Et.addVectors(Wt.max,$i.max),Wt.expandByPoint(Et)):(Wt.expandByPoint($i.min),Wt.expandByPoint($i.max))}Wt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Et.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),Et.add(vi)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let M=0;M<o;M++)c[M]=new R,d[M]=new R;const h=new R,u=new R,m=new R,g=new De,x=new De,f=new De,p=new R,S=new R;function E(M,U,H){h.fromArray(i,M*3),u.fromArray(i,U*3),m.fromArray(i,H*3),g.fromArray(a,M*2),x.fromArray(a,U*2),f.fromArray(a,H*2),u.sub(h),m.sub(h),x.sub(g),f.sub(g);const Z=1/(x.x*f.y-f.x*x.y);isFinite(Z)&&(p.copy(u).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(Z),S.copy(m).multiplyScalar(x.x).addScaledVector(u,-f.x).multiplyScalar(Z),c[M].add(p),c[U].add(p),c[H].add(p),d[M].add(S),d[U].add(S),d[H].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let M=0,U=w.length;M<U;++M){const H=w[M],Z=H.start,L=H.count;for(let N=Z,V=Z+L;N<V;N+=3)E(n[N+0],n[N+1],n[N+2])}const P=new R,C=new R,A=new R,$=new R;function _(M){A.fromArray(r,M*3),$.copy(A);const U=c[M];P.copy(U),P.sub(A.multiplyScalar(A.dot(U))).normalize(),C.crossVectors($,U);const Z=C.dot(d[M])<0?-1:1;l[M*4]=P.x,l[M*4+1]=P.y,l[M*4+2]=P.z,l[M*4+3]=Z}for(let M=0,U=w.length;M<U;++M){const H=w[M],Z=H.start,L=H.count;for(let N=Z,V=Z+L;N<V;N+=3)_(n[N+0]),_(n[N+1]),_(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,d=new R,h=new R;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let p=0;p<d;p++)u[g++]=c[m++]}return new cn(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new gt,Xn=new pd,ys=new aa,fo=new R,_i=new R,bi=new R,Mi=new R,Tr=new R,vs=new R,_s=new De,bs=new De,Ms=new De,mo=new R,go=new R,xo=new R,Es=new R,Ss=new R;class xe extends Ct{constructor(e=new mn,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Tr.fromBufferAttribute(h,e),a?vs.addScaledVector(Tr,d):vs.addScaledVector(Tr.sub(t),d))}t.add(vs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(ys.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(ys,fo)===null||Xn.origin.distanceToSquared(fo)>(e.far-e.near)**2))&&(po.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(po),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let w=S,P=E;w<P;w+=3){const C=o.getX(w),A=o.getX(w+1),$=o.getX(w+2);i=ws(this,p,e,n,c,d,h,C,A,$),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){const S=o.getX(f),E=o.getX(f+1),w=o.getX(f+2);i=ws(this,a,e,n,c,d,h,S,E,w),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let w=S,P=E;w<P;w+=3){const C=w,A=w+1,$=w+2;i=ws(this,p,e,n,c,d,h,C,A,$),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){const S=f,E=f+1,w=f+2;i=ws(this,a,e,n,c,d,h,S,E,w),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Ed(s,e,t,n,i,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Hn,o),l===null)return null;Ss.copy(o),Ss.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ss);return c<t.near||c>t.far?null:{distance:c,point:Ss.clone(),object:s}}function ws(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,_i),s.getVertexPosition(l,bi),s.getVertexPosition(c,Mi);const d=Ed(s,e,t,n,_i,bi,Mi,Es);if(d){i&&(_s.fromBufferAttribute(i,o),bs.fromBufferAttribute(i,l),Ms.fromBufferAttribute(i,c),d.uv=Jt.getInterpolation(Es,_i,bi,Mi,_s,bs,Ms,new De)),r&&(_s.fromBufferAttribute(r,o),bs.fromBufferAttribute(r,l),Ms.fromBufferAttribute(r,c),d.uv1=Jt.getInterpolation(Es,_i,bi,Mi,_s,bs,Ms,new De),d.uv2=d.uv1),a&&(mo.fromBufferAttribute(a,o),go.fromBufferAttribute(a,l),xo.fromBufferAttribute(a,c),d.normal=Jt.getInterpolation(Es,_i,bi,Mi,mo,go,xo,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};Jt.getNormal(_i,bi,Mi,h.normal),d.face=h}return d}class $e extends mn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(h,2));function g(x,f,p,S,E,w,P,C,A,$,_){const M=w/A,U=P/$,H=w/2,Z=P/2,L=C/2,N=A+1,V=$+1;let j=0,X=0;const q=new R;for(let Y=0;Y<V;Y++){const ne=Y*U-Z;for(let ie=0;ie<N;ie++){const G=ie*M-H;q[x]=G*S,q[f]=ne*E,q[p]=L,c.push(q.x,q.y,q.z),q[x]=0,q[f]=0,q[p]=C>0?1:-1,d.push(q.x,q.y,q.z),h.push(ie/A),h.push(1-Y/$),j+=1}}for(let Y=0;Y<$;Y++)for(let ne=0;ne<A;ne++){const ie=u+ne+N*Y,G=u+ne+N*(Y+1),K=u+(ne+1)+N*(Y+1),ce=u+(ne+1)+N*Y;l.push(ie,G,ce),l.push(G,K,ce),X+=6}o.addGroup(m,X,_),m+=X,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $e(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(s){const e={};for(let t=0;t<s.length;t++){const n=Bi(s[t]);for(const i in n)e[i]=n[i]}return e}function Sd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zl(s){return s.getRenderTarget()===null?s.outputColorSpace:Je.workingColorSpace}const wd={clone:Bi,merge:Nt};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hl extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends Hl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Si=1;class Cd extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(Ei,Si,e,t);i.layers=this.layers,this.add(i);const r=new $t(Ei,Si,e,t);r.layers=this.layers,this.add(r);const a=new $t(Ei,Si,e,t);a.layers=this.layers,this.add(a);const o=new $t(Ei,Si,e,t);o.layers=this.layers,this.add(o);const l=new $t(Ei,Si,e,t);l.layers=this.layers,this.add(l);const c=new $t(Ei,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gl extends Ot{constructor(e,t,n,i,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,i,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ai?At:Qt),this.texture=new Gl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $e(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Nn});r.uniforms.tEquirect.value=t;const a=new xe(i,r),o=t.minFilter;return t.minFilter===es&&(t.minFilter=Zt),new Cd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ar=new R,Dd=new R,Ld=new He;class jn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ar.subVectors(n,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ld.getNormalMatrix(e),i=this.coplanarPoint(Ar).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new aa,Ts=new R;class oa{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],m=i[8],g=i[9],x=i[10],f=i[11],p=i[12],S=i[13],E=i[14],w=i[15];if(n[0].setComponents(l-r,u-c,f-m,w-p).normalize(),n[1].setComponents(l+r,u+c,f+m,w+p).normalize(),n[2].setComponents(l+a,u+d,f+g,w+S).normalize(),n[3].setComponents(l-a,u-d,f-g,w-S).normalize(),n[4].setComponents(l-o,u-h,f-x,w-E).normalize(),t===wn)n[5].setComponents(l+o,u+h,f+x,w+E).normalize();else if(t===Hs)n[5].setComponents(o,h,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Pd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,h,u),c.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,d,h){const u=d.array,m=d._updateRange,g=d.updateRanges;if(s.bindBuffer(h,c),m.count===-1&&g.length===0&&s.bufferSubData(h,0,u),g.length!==0){for(let x=0,f=g.length;x<f;x++){const p=g[x];t?s.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(s.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:a,remove:o,update:l}}class An extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,m=[],g=[],x=[],f=[];for(let p=0;p<d;p++){const S=p*u-a;for(let E=0;E<c;E++){const w=E*h-r;g.push(w,-S,0),x.push(0,0,1),f.push(E/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const E=S+c*p,w=S+c*(p+1),P=S+1+c*(p+1),C=S+1+c*p;m.push(E,w,C),m.push(w,P,C)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
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
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
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
#endif`,qd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nh=`#define PI 3.141592653589793
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
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",dh=`
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
}`,hh=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_h=`#ifdef USE_GRADIENTMAP
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
}`,bh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
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
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,Ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
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
#endif`,Ph=`struct PhysicalMaterial {
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
}`,Ih=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vh=`#if defined( USE_POINTS_UV )
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
#endif`,Wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qh=`#ifdef USE_MORPHNORMALS
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
#endif`,jh=`#ifdef USE_MORPHTARGETS
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
#endif`,Yh=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tu=`#ifdef USE_NORMALMAP
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
#endif`,nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ou=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xu=`float getShadowMask() {
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
}`,yu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vu=`#ifdef USE_SKINNING
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
#endif`,_u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,Mu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Su=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tu=`#ifdef USE_TRANSMISSION
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
#endif`,Au=`#ifdef USE_TRANSMISSION
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
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iu=`uniform sampler2D t2D;
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
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`#include <common>
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
}`,Ou=`#if DEPTH_PACKING == 3200
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
}`,zu=`#define DISTANCE
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
}`,Hu=`#define DISTANCE
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`uniform float scale;
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
}`,$u=`uniform vec3 diffuse;
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
}`,Xu=`#include <common>
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
}`,qu=`uniform vec3 diffuse;
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
}`,ju=`#define LAMBERT
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
}`,Yu=`#define LAMBERT
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
}`,Ku=`#define MATCAP
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
}`,Zu=`#define MATCAP
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
}`,Ju=`#define NORMAL
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
}`,Qu=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,np=`#define STANDARD
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
}`,ip=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,rp=`#define TOON
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
}`,ap=`uniform float size;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 color;
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
}`,dp=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Id,alphahash_pars_fragment:Ud,alphamap_fragment:kd,alphamap_pars_fragment:Fd,alphatest_fragment:Nd,alphatest_pars_fragment:Bd,aomap_fragment:Od,aomap_pars_fragment:zd,batching_pars_vertex:Hd,batching_vertex:Gd,begin_vertex:Vd,beginnormal_vertex:Wd,bsdfs:$d,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:eh,color_vertex:th,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:sh,displacementmap_pars_vertex:rh,displacementmap_vertex:ah,emissivemap_fragment:oh,emissivemap_pars_fragment:lh,colorspace_fragment:ch,colorspace_pars_fragment:dh,envmap_fragment:hh,envmap_common_pars_fragment:uh,envmap_pars_fragment:ph,envmap_pars_vertex:fh,envmap_physical_pars_fragment:Th,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:xh,fog_fragment:yh,fog_pars_fragment:vh,gradientmap_pars_fragment:_h,lightmap_fragment:bh,lightmap_pars_fragment:Mh,lights_lambert_fragment:Eh,lights_lambert_pars_fragment:Sh,lights_pars_begin:wh,lights_toon_fragment:Ah,lights_toon_pars_fragment:Ch,lights_phong_fragment:Rh,lights_phong_pars_fragment:Dh,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Ih,lights_fragment_maps:Uh,lights_fragment_end:kh,logdepthbuf_fragment:Fh,logdepthbuf_pars_fragment:Nh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:Oh,map_fragment:zh,map_pars_fragment:Hh,map_particle_fragment:Gh,map_particle_pars_fragment:Vh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:$h,morphcolor_vertex:Xh,morphnormal_vertex:qh,morphtarget_pars_vertex:jh,morphtarget_vertex:Yh,normal_fragment_begin:Kh,normal_fragment_maps:Zh,normal_pars_fragment:Jh,normal_pars_vertex:Qh,normal_vertex:eu,normalmap_pars_fragment:tu,clearcoat_normal_fragment_begin:nu,clearcoat_normal_fragment_maps:iu,clearcoat_pars_fragment:su,iridescence_pars_fragment:ru,opaque_fragment:au,packing:ou,premultiplied_alpha_fragment:lu,project_vertex:cu,dithering_fragment:du,dithering_pars_fragment:hu,roughnessmap_fragment:uu,roughnessmap_pars_fragment:pu,shadowmap_pars_fragment:fu,shadowmap_pars_vertex:mu,shadowmap_vertex:gu,shadowmask_pars_fragment:xu,skinbase_vertex:yu,skinning_pars_vertex:vu,skinning_vertex:_u,skinnormal_vertex:bu,specularmap_fragment:Mu,specularmap_pars_fragment:Eu,tonemapping_fragment:Su,tonemapping_pars_fragment:wu,transmission_fragment:Tu,transmission_pars_fragment:Au,uv_pars_fragment:Cu,uv_pars_vertex:Ru,uv_vertex:Du,worldpos_vertex:Lu,background_vert:Pu,background_frag:Iu,backgroundCube_vert:Uu,backgroundCube_frag:ku,cube_vert:Fu,cube_frag:Nu,depth_vert:Bu,depth_frag:Ou,distanceRGBA_vert:zu,distanceRGBA_frag:Hu,equirect_vert:Gu,equirect_frag:Vu,linedashed_vert:Wu,linedashed_frag:$u,meshbasic_vert:Xu,meshbasic_frag:qu,meshlambert_vert:ju,meshlambert_frag:Yu,meshmatcap_vert:Ku,meshmatcap_frag:Zu,meshnormal_vert:Ju,meshnormal_frag:Qu,meshphong_vert:ep,meshphong_frag:tp,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:ap,points_frag:op,shadow_vert:lp,shadow_frag:cp,sprite_vert:dp,sprite_frag:hp},re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},hn={basic:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Nt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Nt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Nt([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Nt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Nt([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Nt([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Nt([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Nt([re.lights,re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};hn.physical={uniforms:Nt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const As={r:0,b:0,g:0};function up(s,e,t,n,i,r,a){const o=new Ve(0);let l=r===!0?0:1,c,d,h=null,u=0,m=null;function g(f,p){let S=!1,E=p.isScene===!0?p.background:null;E&&E.isTexture&&(E=(p.backgroundBlurriness>0?t:e).get(E)),E===null?x(o,l):E&&E.isColor&&(x(E,1),S=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Ks)?(d===void 0&&(d=new xe(new $e(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Bi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=Je.getTransfer(E.colorSpace)!==rt,(h!==E||u!==E.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,h=E,u=E.version,m=s.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new xe(new An(2,2),new li({name:"BackgroundMaterial",uniforms:Bi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Je.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function x(f,p){f.getRGB(As,zl(s)),n.buffers.color.setClear(As.r,As.g,As.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(o,l)},render:g}}function pp(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,d=!1;function h(L,N,V,j,X){let q=!1;if(a){const Y=x(j,V,N);c!==Y&&(c=Y,m(c.object)),q=p(L,j,V,X),q&&S(L,j,V,X)}else{const Y=N.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==Y)&&(c.geometry=j.id,c.program=V.id,c.wireframe=Y,q=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,$(L,N,V,j),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,N,V){const j=V.wireframe===!0;let X=o[L.id];X===void 0&&(X={},o[L.id]=X);let q=X[N.id];q===void 0&&(q={},X[N.id]=q);let Y=q[j];return Y===void 0&&(Y=f(u()),q[j]=Y),Y}function f(L){const N=[],V=[],j=[];for(let X=0;X<i;X++)N[X]=0,V[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:j,object:L,attributes:{},index:null}}function p(L,N,V,j){const X=c.attributes,q=N.attributes;let Y=0;const ne=V.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const K=X[ie];let ce=q[ie];if(ce===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;Y++}return c.attributesNum!==Y||c.index!==j}function S(L,N,V,j){const X={},q=N.attributes;let Y=0;const ne=V.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let K=q[ie];K===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),X[ie]=ce,Y++}c.attributes=X,c.attributesNum=Y,c.index=j}function E(){const L=c.newAttributes;for(let N=0,V=L.length;N<V;N++)L[N]=0}function w(L){P(L,0)}function P(L,N){const V=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;V[L]=1,j[L]===0&&(s.enableVertexAttribArray(L),j[L]=1),X[L]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),X[L]=N)}function C(){const L=c.newAttributes,N=c.enabledAttributes;for(let V=0,j=N.length;V<j;V++)N[V]!==L[V]&&(s.disableVertexAttribArray(V),N[V]=0)}function A(L,N,V,j,X,q,Y){Y===!0?s.vertexAttribIPointer(L,N,V,X,q):s.vertexAttribPointer(L,N,V,j,X,q)}function $(L,N,V,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const X=j.attributes,q=V.getAttributes(),Y=N.defaultAttributeValues;for(const ne in q){const ie=q[ne];if(ie.location>=0){let G=X[ne];if(G===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const K=G.normalized,ce=G.itemSize,ye=t.get(G);if(ye===void 0)continue;const ge=ye.buffer,Le=ye.type,Ie=ye.bytesPerElement,Se=n.isWebGL2===!0&&(Le===s.INT||Le===s.UNSIGNED_INT||G.gpuType===Ml);if(G.isInterleavedBufferAttribute){const Xe=G.data,k=Xe.stride,It=G.offset;if(Xe.isInstancedInterleavedBuffer){for(let _e=0;_e<ie.locationSize;_e++)P(ie.location+_e,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let _e=0;_e<ie.locationSize;_e++)w(ie.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let _e=0;_e<ie.locationSize;_e++)A(ie.location+_e,ce/ie.locationSize,Le,K,k*Ie,(It+ce/ie.locationSize*_e)*Ie,Se)}else{if(G.isInstancedBufferAttribute){for(let Xe=0;Xe<ie.locationSize;Xe++)P(ie.location+Xe,G.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Xe=0;Xe<ie.locationSize;Xe++)w(ie.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Xe=0;Xe<ie.locationSize;Xe++)A(ie.location+Xe,ce/ie.locationSize,Le,K,ce*Ie,ce/ie.locationSize*Xe*Ie,Se)}}else if(Y!==void 0){const K=Y[ne];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ie.location,K);break;case 3:s.vertexAttrib3fv(ie.location,K);break;case 4:s.vertexAttrib4fv(ie.location,K);break;default:s.vertexAttrib1fv(ie.location,K)}}}}C()}function _(){H();for(const L in o){const N=o[L];for(const V in N){const j=N[V];for(const X in j)g(j[X].object),delete j[X];delete N[V]}delete o[L]}}function M(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const V in N){const j=N[V];for(const X in j)g(j[X].object),delete j[X];delete N[V]}delete o[L.id]}function U(L){for(const N in o){const V=o[N];if(V[L.id]===void 0)continue;const j=V[L.id];for(const X in j)g(j[X].object),delete j[X];delete V[L.id]}}function H(){Z(),d=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:Z,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:w,disableUnusedAttributes:C}}function fp(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}function o(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function l(d,h,u){if(u===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,d,h,u),t.update(h,r,u)}function c(d,h,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(d[g],h[g]);else{m.multiDrawArraysWEBGL(r,d,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function mp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=u>0,w=a||e.has("OES_texture_float"),P=E&&w,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:E,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:C}}function gp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new jn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||i;return i=u,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,m){const g=h.clippingPlanes,x=h.clipIntersection,f=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?d(null):c();else{const S=r?0:n,E=S*4;let w=p.clippingState||null;l.value=w,w=d(g,u,E,m);for(let P=0;P!==E;++P)w[P]=t[P];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,m,g){const x=h!==null?h.length:0;let f=null;if(x!==0){if(f=l.value,g!==!0||f===null){const p=m+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let E=0,w=m;E!==x;++E,w+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function xp(s){let e=new WeakMap;function t(a,o){return o===Gr?a.mapping=ki:o===Vr&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gr||o===Vr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rd(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wl extends Hl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,yo=[.125,.215,.35,.446,.526,.582],Zn=20,Cr=new Wl,vo=new Ve;let Rr=null,Dr=0,Lr=0;const Yn=(1+Math.sqrt(5))/2,wi=1/Yn,_o=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Yn,wi),new R(0,Yn,-wi),new R(wi,0,Yn),new R(-wi,0,Yn),new R(Yn,wi,0),new R(-Yn,wi,0)];class bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Rr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rr,Dr,Lr),e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:ts,format:ln,colorSpace:Tn,depthBuffer:!1},i=Mo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(r)),this._blurMaterial=vp(r,e,t)}return i}_compileMaterial(e){const t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,i){const o=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(vo),d.toneMapping=Bn,d.autoClear=!1;const m=new ns({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new xe(new $e,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(vo),x=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Cs(i,S*E,p>2?E:0,E,E),d.setRenderTarget(i),x&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ki||e.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=_o[(i-1)%_o.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new xe(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),x=r/g,f=isFinite(r)?1+Math.floor(d*x):Zn;f>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zn}`);const p=[];let S=0;for(let A=0;A<Zn;++A){const $=A/x,_=Math.exp(-$*$/2);p.push(_),A===0?S+=_:A<f&&(S+=2*_)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const w=this._sizeLods[i],P=3*w*(i>E-Li?i-E+Li:0),C=4*(this._cubeSize-w);Cs(t,P,C,3*w,2*w),l.setRenderTarget(t),l.render(h,Cr)}}function yp(s){const e=[],t=[],n=[];let i=s;const r=s-Li+1+yo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Li?l=yo[a-s+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,x=3,f=2,p=1,S=new Float32Array(x*g*m),E=new Float32Array(f*g*m),w=new Float32Array(p*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,$=C>2?0:-1,_=[A,$,0,A+2/3,$,0,A+2/3,$+1,0,A,$,0,A+2/3,$+1,0,A,$+1,0];S.set(_,x*g*C),E.set(u,f*g*C);const M=[C,C,C,C,C,C];w.set(M,p*g*C)}const P=new mn;P.setAttribute("position",new cn(S,x)),P.setAttribute("uv",new cn(E,f)),P.setAttribute("faceIndex",new cn(w,p)),e.push(P),i>Li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mo(s,e,t){const n=new oi(s,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function vp(s,e,t){const n=new Float32Array(Zn),i=new R(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:la(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Eo(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function So(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}function _p(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gr||l===Vr,d=l===ki||l===Fi;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new bo(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||d&&h&&i(h)){t===null&&(t=new bo(s));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mp(s,e,t,n){const i={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let f=0,p=x.length;f<p;f++)e.remove(x[f])}u.removeEventListener("dispose",a),delete i[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const x=m[g];for(let f=0,p=x.length;f<p;f++)e.update(x[f],s.ARRAY_BUFFER)}}function c(h){const u=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const S=m.array;x=m.version;for(let E=0,w=S.length;E<w;E+=3){const P=S[E+0],C=S[E+1],A=S[E+2];u.push(P,C,C,A,A,P)}}else if(g!==void 0){const S=g.array;x=g.version;for(let E=0,w=S.length/3-1;E<w;E+=3){const P=E+0,C=E+1,A=E+2;u.push(P,C,C,A,A,P)}}else return;const f=new(Pl(u)?Ol:Bl)(u,1);f.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,f)}function d(h){const u=r.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Ep(s,e,t,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,g){s.drawElements(r,g,o,m*l),t.update(g,r,1)}function h(m,g,x){if(x===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,o,m*l,x),t.update(g,r,x)}function u(m,g,x){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<x;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let p=0;for(let S=0;S<x;S++)p+=g[S];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function Sp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wp(s,e){return s[0]-e[0]}function Tp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ap(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let f=r.get(d);if(f===void 0||f.count!==x){let N=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],$=d.morphAttributes.color||[];let _=0;E===!0&&(_=1),w===!0&&(_=2),P===!0&&(_=3);let M=d.attributes.position.count*_,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const H=new Float32Array(M*U*4*x),Z=new kl(H,M,U,x);Z.type=Fn,Z.needsUpdate=!0;const L=_*4;for(let V=0;V<x;V++){const j=C[V],X=A[V],q=$[V],Y=M*U*4*V;for(let ne=0;ne<j.count;ne++){const ie=ne*L;E===!0&&(a.fromBufferAttribute(j,ne),H[Y+ie+0]=a.x,H[Y+ie+1]=a.y,H[Y+ie+2]=a.z,H[Y+ie+3]=0),w===!0&&(a.fromBufferAttribute(X,ne),H[Y+ie+4]=a.x,H[Y+ie+5]=a.y,H[Y+ie+6]=a.z,H[Y+ie+7]=0),P===!0&&(a.fromBufferAttribute(q,ne),H[Y+ie+8]=a.x,H[Y+ie+9]=a.y,H[Y+ie+10]=a.z,H[Y+ie+11]=q.itemSize===4?a.w:1)}}f={count:x,texture:Z,size:new De(M,U)},r.set(d,f),d.addEventListener("dispose",N)}let p=0;for(let E=0;E<u.length;E++)p+=u[E];const S=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",u),h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let x=n[d.id];if(x===void 0||x.length!==g){x=[];for(let w=0;w<g;w++)x[w]=[w,0];n[d.id]=x}for(let w=0;w<g;w++){const P=x[w];P[0]=w,P[1]=u[w]}x.sort(Tp);for(let w=0;w<8;w++)w<g&&x[w][1]?(o[w][0]=x[w][0],o[w][1]=x[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(wp);const f=d.morphAttributes.position,p=d.morphAttributes.normal;let S=0;for(let w=0;w<8;w++){const P=o[w],C=P[0],A=P[1];C!==Number.MAX_SAFE_INTEGER&&A?(f&&d.getAttribute("morphTarget"+w)!==f[C]&&d.setAttribute("morphTarget"+w,f[C]),p&&d.getAttribute("morphNormal"+w)!==p[C]&&d.setAttribute("morphNormal"+w,p[C]),i[w]=A,S+=A):(f&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),p&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),i[w]=0)}const E=d.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Cp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class $l extends Ot{constructor(e,t,n,i,r,a,o,l,c,d){if(d=d!==void 0?d:ri,d!==ri&&d!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ri&&(n=kn),n===void 0&&d===Ni&&(n=si),super(null,i,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xl=new Ot,ql=new $l(1,1);ql.compareFunction=Ll;const jl=new kl,Yl=new hd,Kl=new Gl,wo=[],To=[],Ao=new Float32Array(16),Co=new Float32Array(9),Ro=new Float32Array(4);function zi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=wo[i];if(r===void 0&&(r=new Float32Array(i),wo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Js(s,e){let t=To[e];t===void 0&&(t=new Int32Array(e),To[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Rp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Dp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function Lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function Pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function Ip(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Ro.set(n),s.uniformMatrix2fv(this.addr,!1,Ro),_t(t,n)}}function Up(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Co.set(n),s.uniformMatrix3fv(this.addr,!1,Co),_t(t,n)}}function kp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Ao.set(n),s.uniformMatrix4fv(this.addr,!1,Ao),_t(t,n)}}function Fp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function Bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function Op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function zp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function Gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function Wp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?ql:Xl;t.setTexture2D(e||r,i)}function $p(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yl,i)}function Xp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kl,i)}function qp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jl,i)}function jp(s){switch(s){case 5126:return Rp;case 35664:return Dp;case 35665:return Lp;case 35666:return Pp;case 35674:return Ip;case 35675:return Up;case 35676:return kp;case 5124:case 35670:return Fp;case 35667:case 35671:return Np;case 35668:case 35672:return Bp;case 35669:case 35673:return Op;case 5125:return zp;case 36294:return Hp;case 36295:return Gp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}function Yp(s,e){s.uniform1fv(this.addr,e)}function Kp(s,e){const t=zi(e,this.size,2);s.uniform2fv(this.addr,t)}function Zp(s,e){const t=zi(e,this.size,3);s.uniform3fv(this.addr,t)}function Jp(s,e){const t=zi(e,this.size,4);s.uniform4fv(this.addr,t)}function Qp(s,e){const t=zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ef(s,e){const t=zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tf(s,e){const t=zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function nf(s,e){s.uniform1iv(this.addr,e)}function sf(s,e){s.uniform2iv(this.addr,e)}function rf(s,e){s.uniform3iv(this.addr,e)}function af(s,e){s.uniform4iv(this.addr,e)}function of(s,e){s.uniform1uiv(this.addr,e)}function lf(s,e){s.uniform2uiv(this.addr,e)}function cf(s,e){s.uniform3uiv(this.addr,e)}function df(s,e){s.uniform4uiv(this.addr,e)}function hf(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Xl,r[a])}function uf(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yl,r[a])}function pf(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Kl,r[a])}function ff(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||jl,r[a])}function mf(s){switch(s){case 5126:return Yp;case 35664:return Kp;case 35665:return Zp;case 35666:return Jp;case 35674:return Qp;case 35675:return ef;case 35676:return tf;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return af;case 5125:return of;case 36294:return lf;case 36295:return cf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return ff}}class gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jp(t.type)}}class xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mf(t.type)}}class yf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Pr=/(\w+)(\])?(\[|\.)?/g;function Do(s,e){s.seq.push(e),s.map[e.id]=e}function vf(s,e,t){const n=s.name,i=n.length;for(Pr.lastIndex=0;;){const r=Pr.exec(n),a=Pr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Do(t,c===void 0?new gf(o,s,e):new xf(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new yf(o),Do(t,h)),t=h}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);vf(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Lo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const _f=37297;let bf=0;function Mf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ef(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let n;switch(e===t?n="":e===zs&&t===Os?n="LinearDisplayP3ToLinearSRGB":e===Os&&t===zs&&(n="LinearSRGBToLinearDisplayP3"),s){case Tn:case Zs:return[n,"LinearTransferOETF"];case At:case ra:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Po(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Mf(s.getShaderSource(e),a)}else return i}function Sf(s,e){const t=Ef(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wf(s,e){let t;switch(e){case Fc:t="Linear";break;case Nc:t="Reinhard";break;case Bc:t="OptimizedCineon";break;case _l:t="ACESFilmic";break;case zc:t="AgX";break;case Oc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Af(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function Cf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rf(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Pi(s){return s!==""}function Io(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(s){return s.replace(Df,Pf)}const Lf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pf(s,e){let t=ke[e];if(t===void 0){const n=Lf.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kr(t)}const If=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ko(s){return s.replace(If,Uf)}function Uf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ff(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case Fi:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Bf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vl:e="ENVMAP_BLENDING_MULTIPLY";break;case Uc:e="ENVMAP_BLENDING_MIX";break;case kc:e="ENVMAP_BLENDING_ADD";break}return e}function Of(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zf(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=kf(t),c=Ff(t),d=Nf(t),h=Bf(t),u=Of(t),m=t.isWebGL2?"":Tf(t),g=Af(t),x=Cf(r),f=i.createProgram();let p,S,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pi).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pi).join(`
`),S.length>0&&(S+=`
`)):(p=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),S=[m,Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Bn?wf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Sf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),a=Kr(a),a=Io(a,t),a=Uo(a,t),o=Kr(o),o=Io(o,t),o=Uo(o,t),a=ko(a),o=ko(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=E+p+a,P=E+S+o,C=Lo(i,i.VERTEX_SHADER,w),A=Lo(i,i.FRAGMENT_SHADER,P);i.attachShader(f,C),i.attachShader(f,A),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function $(H){if(s.debug.checkShaderErrors){const Z=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(C).trim(),N=i.getShaderInfoLog(A).trim();let V=!0,j=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,C,A);else{const X=Po(i,C,"vertex"),q=Po(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+X+`
`+q)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||N==="")&&(j=!1);j&&(H.diagnostics={runnable:V,programLog:Z,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:S}})}i.deleteShader(C),i.deleteShader(A),_=new Fs(i,f),M=Rf(i,f)}let _;this.getUniforms=function(){return _===void 0&&$(this),_};let M;this.getAttributes=function(){return M===void 0&&$(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(f,_f)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=A,this}let Hf=0;class Gf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vf(e),t.set(e,n)),n}}class Vf{constructor(e){this.id=Hf++,this.code=e,this.usedTimes=0}}function Wf(s,e,t,n,i,r,a){const o=new Fl,l=new Gf,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function f(_,M,U,H,Z){const L=H.fog,N=Z.geometry,V=_.isMeshStandardMaterial?H.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||V),X=j&&j.mapping===Ks?j.image.height:null,q=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ne=Y!==void 0?Y.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let G,K,ce,ye;if(q){const Ut=hn[q];G=Ut.vertexShader,K=Ut.fragmentShader}else G=_.vertexShader,K=_.fragmentShader,l.update(_),ce=l.getVertexShaderID(_),ye=l.getFragmentShaderID(_);const ge=s.getRenderTarget(),Le=Z.isInstancedMesh===!0,Ie=Z.isBatchedMesh===!0,Se=!!_.map,Xe=!!_.matcap,k=!!j,It=!!_.aoMap,_e=!!_.lightMap,Ce=!!_.bumpMap,pe=!!_.normalMap,ct=!!_.displacementMap,Fe=!!_.emissiveMap,b=!!_.metalnessMap,y=!!_.roughnessMap,B=_.anisotropy>0,ee=_.clearcoat>0,Q=_.iridescence>0,te=_.sheen>0,fe=_.transmission>0,le=B&&!!_.anisotropyMap,he=ee&&!!_.clearcoatMap,Ee=ee&&!!_.clearcoatNormalMap,Ne=ee&&!!_.clearcoatRoughnessMap,J=Q&&!!_.iridescenceMap,Ze=Q&&!!_.iridescenceThicknessMap,Ge=te&&!!_.sheenColorMap,Ae=te&&!!_.sheenRoughnessMap,ve=!!_.specularMap,ue=!!_.specularColorMap,Ue=!!_.specularIntensityMap,Ye=fe&&!!_.transmissionMap,ut=fe&&!!_.thicknessMap,Oe=!!_.gradientMap,se=!!_.alphaMap,D=_.alphaTest>0,ae=!!_.alphaHash,oe=!!_.extensions,we=!!N.attributes.uv1,be=!!N.attributes.uv2,tt=!!N.attributes.uv3;let nt=Bn;return _.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(nt=s.toneMapping),{isWebGL2:d,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:G,fragmentShader:K,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Ie,instancing:Le,instancingColor:Le&&Z.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Tn,map:Se,matcap:Xe,envMap:k,envMapMode:k&&j.mapping,envMapCubeUVHeight:X,aoMap:It,lightMap:_e,bumpMap:Ce,normalMap:pe,displacementMap:u&&ct,emissiveMap:Fe,normalMapObjectSpace:pe&&_.normalMapType===Zc,normalMapTangentSpace:pe&&_.normalMapType===sa,metalnessMap:b,roughnessMap:y,anisotropy:B,anisotropyMap:le,clearcoat:ee,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ne,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:Ze,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:ve,specularColorMap:ue,specularIntensityMap:Ue,transmission:fe,transmissionMap:Ye,thicknessMap:ut,gradientMap:Oe,opaque:_.transparent===!1&&_.blending===Ii,alphaMap:se,alphaTest:D,alphaHash:ae,combine:_.combine,mapUv:Se&&x(_.map.channel),aoMapUv:It&&x(_.aoMap.channel),lightMapUv:_e&&x(_.lightMap.channel),bumpMapUv:Ce&&x(_.bumpMap.channel),normalMapUv:pe&&x(_.normalMap.channel),displacementMapUv:ct&&x(_.displacementMap.channel),emissiveMapUv:Fe&&x(_.emissiveMap.channel),metalnessMapUv:b&&x(_.metalnessMap.channel),roughnessMapUv:y&&x(_.roughnessMap.channel),anisotropyMapUv:le&&x(_.anisotropyMap.channel),clearcoatMapUv:he&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(_.sheenRoughnessMap.channel),specularMapUv:ve&&x(_.specularMap.channel),specularColorMapUv:ue&&x(_.specularColorMap.channel),specularIntensityMapUv:Ue&&x(_.specularIntensityMap.channel),transmissionMapUv:Ye&&x(_.transmissionMap.channel),thicknessMapUv:ut&&x(_.thicknessMap.channel),alphaMapUv:se&&x(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pe||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:be,vertexUv3s:tt,pointsUvs:Z.isPoints===!0&&!!N.attributes.uv&&(Se||se),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Se&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:oe&&_.extensions.derivatives===!0,extensionFragDepth:oe&&_.extensions.fragDepth===!0,extensionDrawBuffers:oe&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)M.push(U),M.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(S(M,_),E(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function S(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function E(_,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function w(_){const M=g[_.type];let U;if(M){const H=hn[M];U=wd.clone(H.uniforms)}else U=_.uniforms;return U}function P(_,M){let U;for(let H=0,Z=c.length;H<Z;H++){const L=c[H];if(L.cacheKey===M){U=L,++U.usedTimes;break}}return U===void 0&&(U=new zf(s,M,_,r),c.push(U)),U}function C(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),_.destroy()}}function A(_){l.remove(_)}function $(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:w,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:$}}function $f(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Xf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function No(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,m,g,x,f){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:f},s[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=f),e++,p}function o(h,u,m,g,x,f){const p=a(h,u,m,g,x,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,u,m,g,x,f){const p=a(h,u,m,g,x,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||Xf),n.length>1&&n.sort(u||No),i.length>1&&i.sort(u||No)}function d(){for(let h=e,u=s.length;h<u;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:c}}function qf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Bo,s.set(n,[a])):i>=r.length?(a=new Bo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function jf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ve};break;case"SpotLight":t={position:new R,direction:new R,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Yf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Kf=0;function Zf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Jf(s,e){const t=new jf,n=Yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new R);const r=new R,a=new gt,o=new gt;function l(d,h){let u=0,m=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,f=0,p=0,S=0,E=0,w=0,P=0,C=0,A=0,$=0,_=0;d.sort(Zf);const M=h===!0?Math.PI:1;for(let H=0,Z=d.length;H<Z;H++){const L=d[H],N=L.color,V=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*V*M,m+=N.g*V*M,g+=N.b*V*M;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],V);_++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const Y=L.shadow,ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,i.directionalShadow[x]=ne,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=L.shadow.matrix,w++}i.directional[x]=q,x++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(V*M),q.distance=j,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[p]=q;const Y=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&$++),i.spotLightMatrix[p]=Y.matrix,L.castShadow){const ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,i.spotShadow[p]=ne,i.spotShadowMap[p]=X,C++}p++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(N).multiplyScalar(V),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=q,S++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*M),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Y=L.shadow,ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,ne.shadowCameraNear=Y.camera.near,ne.shadowCameraFar=Y.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=X,i.pointShadowMatrix[f]=L.shadow.matrix,P++}i.point[f]=q,f++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(V*M),q.groundColor.copy(L.groundColor).multiplyScalar(V*M),i.hemi[E]=q,E++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==x||U.pointLength!==f||U.spotLength!==p||U.rectAreaLength!==S||U.hemiLength!==E||U.numDirectionalShadows!==w||U.numPointShadows!==P||U.numSpotShadows!==C||U.numSpotMaps!==A||U.numLightProbes!==_)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=S,i.point.length=f,i.hemi.length=E,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=C+A-$,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=$,i.numLightProbes=_,U.directionalLength=x,U.pointLength=f,U.spotLength=p,U.rectAreaLength=S,U.hemiLength=E,U.numDirectionalShadows=w,U.numPointShadows=P,U.numSpotShadows=C,U.numSpotMaps=A,U.numLightProbes=_,i.version=Kf++)}function c(d,h){let u=0,m=0,g=0,x=0,f=0;const p=h.matrixWorldInverse;for(let S=0,E=d.length;S<E;S++){const w=d[S];if(w.isDirectionalLight){const P=i.directional[u];P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),u++}else if(w.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(w.isRectAreaLight){const P=i.rectArea[x];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(p),o.identity(),a.copy(w.matrixWorld),a.premultiply(p),o.extractRotation(a),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(p),m++}else if(w.isHemisphereLight){const P=i.hemi[f];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function Oo(s,e){const t=new Jf(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qf(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Oo(s,e),t.set(r,[l])):a>=o.length?(l=new Oo(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class em extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tm extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
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
}`;function sm(s,e,t){let n=new oa;const i=new De,r=new De,a=new lt,o=new em({depthPacking:Kc}),l=new tm,c={},d=t.maxTextureSize,h={[Hn]:Bt,[Bt]:Hn,[En]:En},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:nm,fragmentShader:im}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xe(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let p=this.type;this.render=function(C,A,$){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const _=s.getRenderTarget(),M=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Nn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=p!==Mn&&this.type===Mn,L=p===Mn&&this.type!==Mn;for(let N=0,V=C.length;N<V;N++){const j=C[N],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const q=X.getFrameExtents();if(i.multiply(q),r.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/q.x),i.x=r.x*q.x,X.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/q.y),i.y=r.y*q.y,X.mapSize.y=r.y)),X.map===null||Z===!0||L===!0){const ne=this.type!==Mn?{minFilter:wt,magFilter:wt}:{};X.map!==null&&X.map.dispose(),X.map=new oi(i.x,i.y,ne),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const Y=X.getViewportCount();for(let ne=0;ne<Y;ne++){const ie=X.getViewport(ne);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),H.viewport(a),X.updateMatrices(j,ne),n=X.getFrustum(),w(A,$,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Mn&&S(X,$),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(_,M,U)};function S(C,A){const $=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new oi(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,$,u,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,$,m,x,null)}function E(C,A,$,_){let M=null;const U=$.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)M=U;else if(M=$.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,Z=A.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let N=L[Z];N===void 0&&(N=M.clone(),L[Z]=N,A.addEventListener("dispose",P)),M=N}if(M.visible=A.visible,M.wireframe=A.wireframe,_===Mn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,$.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=s.properties.get(M);H.light=$}return M}function w(C,A,$,_,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld);const Z=e.update(C),L=C.material;if(Array.isArray(L)){const N=Z.groups;for(let V=0,j=N.length;V<j;V++){const X=N[V],q=L[X.materialIndex];if(q&&q.visible){const Y=E(C,q,_,M);C.onBeforeShadow(s,C,A,$,Z,Y,X),s.renderBufferDirect($,null,Z,Y,C,X),C.onAfterShadow(s,C,A,$,Z,Y,X)}}}else if(L.visible){const N=E(C,L,_,M);C.onBeforeShadow(s,C,A,$,Z,N,null),s.renderBufferDirect($,null,Z,N,C,null),C.onAfterShadow(s,C,A,$,Z,N,null)}}const H=C.children;for(let Z=0,L=H.length;Z<L;Z++)w(H[Z],A,$,_,M)}function P(C){C.target.removeEventListener("dispose",P);for(const $ in c){const _=c[$],M=C.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}function rm(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const ae=new lt;let oe=null;const we=new lt(0,0,0,0);return{setMask:function(be){oe!==be&&!D&&(s.colorMask(be,be,be,be),oe=be)},setLocked:function(be){D=be},setClear:function(be,tt,nt,bt,Ut){Ut===!0&&(be*=bt,tt*=bt,nt*=bt),ae.set(be,tt,nt,bt),we.equals(ae)===!1&&(s.clearColor(be,tt,nt,bt),we.copy(ae))},reset:function(){D=!1,oe=null,we.set(-1,0,0,0)}}}function r(){let D=!1,ae=null,oe=null,we=null;return{setTest:function(be){be?Ie(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(be){ae!==be&&!D&&(s.depthMask(be),ae=be)},setFunc:function(be){if(oe!==be){switch(be){case Ac:s.depthFunc(s.NEVER);break;case Cc:s.depthFunc(s.ALWAYS);break;case Rc:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case Dc:s.depthFunc(s.EQUAL);break;case Lc:s.depthFunc(s.GEQUAL);break;case Pc:s.depthFunc(s.GREATER);break;case Ic:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=be}},setLocked:function(be){D=be},setClear:function(be){we!==be&&(s.clearDepth(be),we=be)},reset:function(){D=!1,ae=null,oe=null,we=null}}}function a(){let D=!1,ae=null,oe=null,we=null,be=null,tt=null,nt=null,bt=null,Ut=null;return{setTest:function(it){D||(it?Ie(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(it){ae!==it&&!D&&(s.stencilMask(it),ae=it)},setFunc:function(it,kt,dn){(oe!==it||we!==kt||be!==dn)&&(s.stencilFunc(it,kt,dn),oe=it,we=kt,be=dn)},setOp:function(it,kt,dn){(tt!==it||nt!==kt||bt!==dn)&&(s.stencilOp(it,kt,dn),tt=it,nt=kt,bt=dn)},setLocked:function(it){D=it},setClear:function(it){Ut!==it&&(s.clearStencil(it),Ut=it)},reset:function(){D=!1,ae=null,oe=null,we=null,be=null,tt=null,nt=null,bt=null,Ut=null}}}const o=new i,l=new r,c=new a,d=new WeakMap,h=new WeakMap;let u={},m={},g=new WeakMap,x=[],f=null,p=!1,S=null,E=null,w=null,P=null,C=null,A=null,$=null,_=new Ve(0,0,0),M=0,U=!1,H=null,Z=null,L=null,N=null,V=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=q>=2);let ne=null,ie={};const G=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ce=new lt().fromArray(G),ye=new lt().fromArray(K);function ge(D,ae,oe,we){const be=new Uint8Array(4),tt=s.createTexture();s.bindTexture(D,tt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<oe;nt++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(ae+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return tt}const Le={};Le[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(s.DEPTH_TEST),l.setFunc(Ns),Fe(!1),b(_a),Ie(s.CULL_FACE),pe(Nn);function Ie(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Xe(D,ae){return m[D]!==ae?(s.bindFramebuffer(D,ae),m[D]=ae,n&&(D===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ae),D===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(D,ae){let oe=x,we=!1;if(D)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),D.isWebGLMultipleRenderTargets){const be=D.texture;if(oe.length!==be.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,nt=be.length;tt<nt;tt++)oe[tt]=s.COLOR_ATTACHMENT0+tt;oe.length=be.length,we=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,we=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,we=!0);we&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function It(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const _e={[Kn]:s.FUNC_ADD,[uc]:s.FUNC_SUBTRACT,[pc]:s.FUNC_REVERSE_SUBTRACT};if(n)_e[Sa]=s.MIN,_e[wa]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(_e[Sa]=D.MIN_EXT,_e[wa]=D.MAX_EXT)}const Ce={[fc]:s.ZERO,[mc]:s.ONE,[gc]:s.SRC_COLOR,[zr]:s.SRC_ALPHA,[Mc]:s.SRC_ALPHA_SATURATE,[_c]:s.DST_COLOR,[yc]:s.DST_ALPHA,[xc]:s.ONE_MINUS_SRC_COLOR,[Hr]:s.ONE_MINUS_SRC_ALPHA,[bc]:s.ONE_MINUS_DST_COLOR,[vc]:s.ONE_MINUS_DST_ALPHA,[Ec]:s.CONSTANT_COLOR,[Sc]:s.ONE_MINUS_CONSTANT_COLOR,[wc]:s.CONSTANT_ALPHA,[Tc]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(D,ae,oe,we,be,tt,nt,bt,Ut,it){if(D===Nn){p===!0&&(Se(s.BLEND),p=!1);return}if(p===!1&&(Ie(s.BLEND),p=!0),D!==hc){if(D!==S||it!==U){if((E!==Kn||C!==Kn)&&(s.blendEquation(s.FUNC_ADD),E=Kn,C=Kn),it)switch(D){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.ONE,s.ONE);break;case Ma:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ea:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ma:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ea:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,P=null,A=null,$=null,_.set(0,0,0),M=0,S=D,U=it}return}be=be||ae,tt=tt||oe,nt=nt||we,(ae!==E||be!==C)&&(s.blendEquationSeparate(_e[ae],_e[be]),E=ae,C=be),(oe!==w||we!==P||tt!==A||nt!==$)&&(s.blendFuncSeparate(Ce[oe],Ce[we],Ce[tt],Ce[nt]),w=oe,P=we,A=tt,$=nt),(bt.equals(_)===!1||Ut!==M)&&(s.blendColor(bt.r,bt.g,bt.b,Ut),_.copy(bt),M=Ut),S=D,U=!1}function ct(D,ae){D.side===En?Se(s.CULL_FACE):Ie(s.CULL_FACE);let oe=D.side===Bt;ae&&(oe=!oe),Fe(oe),D.blending===Ii&&D.transparent===!1?pe(Nn):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const we=D.stencilWrite;c.setTest(we),we&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){H!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),H=D)}function b(D){D!==cc?(Ie(s.CULL_FACE),D!==Z&&(D===_a?s.cullFace(s.BACK):D===dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),Z=D}function y(D){D!==L&&(X&&s.lineWidth(D),L=D)}function B(D,ae,oe){D?(Ie(s.POLYGON_OFFSET_FILL),(N!==ae||V!==oe)&&(s.polygonOffset(ae,oe),N=ae,V=oe)):Se(s.POLYGON_OFFSET_FILL)}function ee(D){D?Ie(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Q(D){D===void 0&&(D=s.TEXTURE0+j-1),ne!==D&&(s.activeTexture(D),ne=D)}function te(D,ae,oe){oe===void 0&&(ne===null?oe=s.TEXTURE0+j-1:oe=ne);let we=ie[oe];we===void 0&&(we={type:void 0,texture:void 0},ie[oe]=we),(we.type!==D||we.texture!==ae)&&(ne!==oe&&(s.activeTexture(oe),ne=oe),s.bindTexture(D,ae||Le[D]),we.type=D,we.texture=ae)}function fe(){const D=ie[ne];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){ce.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function Ye(D){ye.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function ut(D,ae){let oe=h.get(ae);oe===void 0&&(oe=new WeakMap,h.set(ae,oe));let we=oe.get(D);we===void 0&&(we=s.getUniformBlockIndex(ae,D.name),oe.set(D,we))}function Oe(D,ae){const we=h.get(ae).get(D);d.get(ae)!==we&&(s.uniformBlockBinding(ae,we,D.__bindingPointIndex),d.set(ae,we))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ne=null,ie={},m={},g=new WeakMap,x=[],f=null,p=!1,S=null,E=null,w=null,P=null,C=null,A=null,$=null,_=new Ve(0,0,0),M=0,U=!1,H=null,Z=null,L=null,N=null,V=null,ce.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:Se,bindFramebuffer:Xe,drawBuffers:k,useProgram:It,setBlending:pe,setMaterial:ct,setFlipSided:Fe,setCullFace:b,setLineWidth:y,setPolygonOffset:B,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:fe,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:ve,texImage3D:ue,updateUBOMapping:ut,uniformBlockBinding:Oe,texStorage2D:Ge,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:Ne,compressedTexSubImage2D:J,compressedTexSubImage3D:Ze,scissor:Ue,viewport:Ye,reset:se}}function am(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return m?new OffscreenCanvas(b,y):Gs("canvas")}function x(b,y,B,ee){let Q=1;if((b.width>ee||b.height>ee)&&(Q=ee/Math.max(b.width,b.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const te=y?Yr:Math.floor,fe=te(Q*b.width),le=te(Q*b.height);h===void 0&&(h=g(fe,le));const he=B?g(fe,le):h;return he.width=fe,he.height=le,he.getContext("2d").drawImage(b,0,0,fe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+le+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function f(b){return eo(b.width)&&eo(b.height)}function p(b){return o?!1:b.wrapS!==on||b.wrapT!==on||b.minFilter!==wt&&b.minFilter!==Zt}function S(b,y){return b.generateMipmaps&&y&&b.minFilter!==wt&&b.minFilter!==Zt}function E(b){s.generateMipmap(b)}function w(b,y,B,ee,Q=!1){if(o===!1)return y;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=y;if(y===s.RED&&(B===s.FLOAT&&(te=s.R32F),B===s.HALF_FLOAT&&(te=s.R16F),B===s.UNSIGNED_BYTE&&(te=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(te=s.R8UI),B===s.UNSIGNED_SHORT&&(te=s.R16UI),B===s.UNSIGNED_INT&&(te=s.R32UI),B===s.BYTE&&(te=s.R8I),B===s.SHORT&&(te=s.R16I),B===s.INT&&(te=s.R32I)),y===s.RG&&(B===s.FLOAT&&(te=s.RG32F),B===s.HALF_FLOAT&&(te=s.RG16F),B===s.UNSIGNED_BYTE&&(te=s.RG8)),y===s.RGBA){const fe=Q?Bs:Je.getTransfer(ee);B===s.FLOAT&&(te=s.RGBA32F),B===s.HALF_FLOAT&&(te=s.RGBA16F),B===s.UNSIGNED_BYTE&&(te=fe===rt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(b,y,B){return S(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==wt&&b.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function C(b){return b===wt||b===Ta||b===ir?s.NEAREST:s.LINEAR}function A(b){const y=b.target;y.removeEventListener("dispose",A),_(y),y.isVideoTexture&&d.delete(y)}function $(b){const y=b.target;y.removeEventListener("dispose",$),U(y)}function _(b){const y=n.get(b);if(y.__webglInit===void 0)return;const B=b.source,ee=u.get(B);if(ee){const Q=ee[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(b),Object.keys(ee).length===0&&u.delete(B)}n.remove(b)}function M(b){const y=n.get(b);s.deleteTexture(y.__webglTexture);const B=b.source,ee=u.get(B);delete ee[y.__cacheKey],a.memory.textures--}function U(b){const y=b.texture,B=n.get(b),ee=n.get(y);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let te=0;te<B.__webglFramebuffer[Q].length;te++)s.deleteFramebuffer(B.__webglFramebuffer[Q][te]);else s.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)s.deleteFramebuffer(B.__webglFramebuffer[Q]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,te=y.length;Q<te;Q++){const fe=n.get(y[Q]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(y[Q])}n.remove(y),n.remove(b)}let H=0;function Z(){H=0}function L(){const b=H;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),H+=1,b}function N(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function V(b,y){const B=n.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(B,b,y);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function j(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ce(B,b,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function X(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ce(B,b,y);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function q(b,y){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ye(B,b,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const Y={[Wr]:s.REPEAT,[on]:s.CLAMP_TO_EDGE,[$r]:s.MIRRORED_REPEAT},ne={[wt]:s.NEAREST,[Ta]:s.NEAREST_MIPMAP_NEAREST,[ir]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[Hc]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},ie={[Jc]:s.NEVER,[sd]:s.ALWAYS,[Qc]:s.LESS,[Ll]:s.LEQUAL,[ed]:s.EQUAL,[id]:s.GEQUAL,[td]:s.GREATER,[nd]:s.NOTEQUAL};function G(b,y,B){if(B?(s.texParameteri(b,s.TEXTURE_WRAP_S,Y[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,Y[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,Y[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ne[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ne[y.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==on||y.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,C(y.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==wt&&y.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===wt||y.minFilter!==ir&&y.minFilter!==es||y.type===Fn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(b,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function K(b,y){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const ee=y.source;let Q=u.get(ee);Q===void 0&&(Q={},u.set(ee,Q));const te=N(y);if(te!==b.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[te].usedTimes++;const fe=Q[b.__cacheKey];fe!==void 0&&(Q[b.__cacheKey].usedTimes--,fe.usedTimes===0&&M(y)),b.__cacheKey=te,b.__webglTexture=Q[te].texture}return B}function ce(b,y,B){let ee=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=s.TEXTURE_3D);const Q=K(b,y),te=y.source;t.bindTexture(ee,b.__webglTexture,s.TEXTURE0+B);const fe=n.get(te);if(te.version!==fe.__version||Q===!0){t.activeTexture(s.TEXTURE0+B);const le=Je.getPrimaries(Je.workingColorSpace),he=y.colorSpace===Qt?null:Je.getPrimaries(y.colorSpace),Ee=y.colorSpace===Qt||le===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=p(y)&&f(y.image)===!1;let J=x(y.image,Ne,!1,i.maxTextureSize);J=Fe(y,J);const Ze=f(J)||o,Ge=r.convert(y.format,y.colorSpace);let Ae=r.convert(y.type),ve=w(y.internalFormat,Ge,Ae,y.colorSpace,y.isVideoTexture);G(ee,y,Ze);let ue;const Ue=y.mipmaps,Ye=o&&y.isVideoTexture!==!0&&ve!==Rl,ut=fe.__version===void 0||Q===!0,Oe=P(y,J,Ze);if(y.isDepthTexture)ve=s.DEPTH_COMPONENT,o?y.type===Fn?ve=s.DEPTH_COMPONENT32F:y.type===kn?ve=s.DEPTH_COMPONENT24:y.type===si?ve=s.DEPTH24_STENCIL8:ve=s.DEPTH_COMPONENT16:y.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ri&&ve===s.DEPTH_COMPONENT&&y.type!==ia&&y.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=kn,Ae=r.convert(y.type)),y.format===Ni&&ve===s.DEPTH_COMPONENT&&(ve=s.DEPTH_STENCIL,y.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=si,Ae=r.convert(y.type))),ut&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,ve,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,ve,J.width,J.height,0,Ge,Ae,null));else if(y.isDataTexture)if(Ue.length>0&&Ze){Ye&&ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,Ue[0].width,Ue[0].height);for(let se=0,D=Ue.length;se<D;se++)ue=Ue[se],Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ge,Ae,ue.data):t.texImage2D(s.TEXTURE_2D,se,ve,ue.width,ue.height,0,Ge,Ae,ue.data);y.generateMipmaps=!1}else Ye?(ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Ge,Ae,J.data)):t.texImage2D(s.TEXTURE_2D,0,ve,J.width,J.height,0,Ge,Ae,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ye&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ve,Ue[0].width,Ue[0].height,J.depth);for(let se=0,D=Ue.length;se<D;se++)ue=Ue[se],y.format!==ln?Ge!==null?Ye?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,J.depth,Ge,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,ve,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,J.depth,Ge,Ae,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,ve,ue.width,ue.height,J.depth,0,Ge,Ae,ue.data)}else{Ye&&ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,Ue[0].width,Ue[0].height);for(let se=0,D=Ue.length;se<D;se++)ue=Ue[se],y.format!==ln?Ge!==null?Ye?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ge,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,se,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ge,Ae,ue.data):t.texImage2D(s.TEXTURE_2D,se,ve,ue.width,ue.height,0,Ge,Ae,ue.data)}else if(y.isDataArrayTexture)Ye?(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ve,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ge,Ae,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,J.width,J.height,J.depth,0,Ge,Ae,J.data);else if(y.isData3DTexture)Ye?(ut&&t.texStorage3D(s.TEXTURE_3D,Oe,ve,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ge,Ae,J.data)):t.texImage3D(s.TEXTURE_3D,0,ve,J.width,J.height,J.depth,0,Ge,Ae,J.data);else if(y.isFramebufferTexture){if(ut)if(Ye)t.texStorage2D(s.TEXTURE_2D,Oe,ve,J.width,J.height);else{let se=J.width,D=J.height;for(let ae=0;ae<Oe;ae++)t.texImage2D(s.TEXTURE_2D,ae,ve,se,D,0,Ge,Ae,null),se>>=1,D>>=1}}else if(Ue.length>0&&Ze){Ye&&ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,Ue[0].width,Ue[0].height);for(let se=0,D=Ue.length;se<D;se++)ue=Ue[se],Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ge,Ae,ue):t.texImage2D(s.TEXTURE_2D,se,ve,Ge,Ae,ue);y.generateMipmaps=!1}else Ye?(ut&&t.texStorage2D(s.TEXTURE_2D,Oe,ve,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Ae,J)):t.texImage2D(s.TEXTURE_2D,0,ve,Ge,Ae,J);S(y,Ze)&&E(ee),fe.__version=te.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ye(b,y,B){if(y.image.length!==6)return;const ee=K(b,y),Q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+B);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+B);const fe=Je.getPrimaries(Je.workingColorSpace),le=y.colorSpace===Qt?null:Je.getPrimaries(y.colorSpace),he=y.colorSpace===Qt||fe===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Ee&&!Ne?J[se]=x(y.image[se],!1,!0,i.maxCubemapSize):J[se]=Ne?y.image[se].image:y.image[se],J[se]=Fe(y,J[se]);const Ze=J[0],Ge=f(Ze)||o,Ae=r.convert(y.format,y.colorSpace),ve=r.convert(y.type),ue=w(y.internalFormat,Ae,ve,y.colorSpace),Ue=o&&y.isVideoTexture!==!0,Ye=te.__version===void 0||ee===!0;let ut=P(y,Ze,Ge);G(s.TEXTURE_CUBE_MAP,y,Ge);let Oe;if(Ee){Ue&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ue,Ze.width,Ze.height);for(let se=0;se<6;se++){Oe=J[se].mipmaps;for(let D=0;D<Oe.length;D++){const ae=Oe[D];y.format!==ln?Ae!==null?Ue?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,ue,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ae.width,ae.height,Ae,ve,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,ue,ae.width,ae.height,0,Ae,ve,ae.data)}}}else{Oe=y.mipmaps,Ue&&Ye&&(Oe.length>0&&ut++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ue,J[0].width,J[0].height));for(let se=0;se<6;se++)if(Ne){Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Ae,ve,J[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,J[se].width,J[se].height,0,Ae,ve,J[se].data);for(let D=0;D<Oe.length;D++){const oe=Oe[D].image[se].image;Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,oe.width,oe.height,Ae,ve,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,ue,oe.width,oe.height,0,Ae,ve,oe.data)}}else{Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,ve,J[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,Ae,ve,J[se]);for(let D=0;D<Oe.length;D++){const ae=Oe[D];Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,Ae,ve,ae.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,ue,Ae,ve,ae.image[se])}}}S(y,Ge)&&E(s.TEXTURE_CUBE_MAP),te.__version=Q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ge(b,y,B,ee,Q,te){const fe=r.convert(B.format,B.colorSpace),le=r.convert(B.type),he=w(B.internalFormat,fe,le,B.colorSpace);if(!n.get(y).__hasExternalTextures){const Ne=Math.max(1,y.width>>te),J=Math.max(1,y.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,he,Ne,J,y.depth,0,fe,le,null):t.texImage2D(Q,te,he,Ne,J,0,fe,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,0,Ce(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(b,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let ee=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||pe(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Fn?ee=s.DEPTH_COMPONENT32F:Q.type===kn&&(ee=s.DEPTH_COMPONENT24));const te=Ce(y);pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ee,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ee,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const ee=Ce(y);B&&pe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,y.width,y.height):pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],fe=r.convert(te.format,te.colorSpace),le=r.convert(te.type),he=w(te.internalFormat,fe,le,te.colorSpace),Ee=Ce(y);B&&pe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,he,y.width,y.height):pe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,he,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,he,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const ee=n.get(y.depthTexture).__webglTexture,Q=Ce(y);if(y.depthTexture.format===ri)pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Ni)pe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Se(b){const y=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ie(y.__webglFramebuffer,b)}else if(B){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=s.createRenderbuffer(),Le(y.__webglDepthbuffer[ee],b,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Le(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(b,y,B){const ee=n.get(b);y!==void 0&&ge(ee.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Se(b)}function k(b){const y=b.texture,B=n.get(b),ee=n.get(y);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=y.version,a.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,te=b.isWebGLMultipleRenderTargets===!0,fe=f(b)||o;if(Q){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let he=0;he<y.mipmaps.length;he++)B.__webglFramebuffer[le][he]=s.createFramebuffer()}else B.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)B.__webglFramebuffer[le]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const le=b.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Ne=n.get(le[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&pe(b)===!1){const le=te?y:[y];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Ee=le[he];B.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Ne=r.convert(Ee.format,Ee.colorSpace),J=r.convert(Ee.type),Ze=w(Ee.internalFormat,Ne,J,Ee.colorSpace,b.isXRRenderTarget===!0),Ge=Ce(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ze,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,B.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),G(s.TEXTURE_CUBE_MAP,y,fe);for(let le=0;le<6;le++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)ge(B.__webglFramebuffer[le][he],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else ge(B.__webglFramebuffer[le],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);S(y,fe)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=b.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Ne=le[he],J=n.get(Ne);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),G(s.TEXTURE_2D,Ne,fe),ge(B.__webglFramebuffer,b,Ne,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),S(Ne,fe)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?le=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),G(le,y,fe),o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)ge(B.__webglFramebuffer[he],b,y,s.COLOR_ATTACHMENT0,le,he);else ge(B.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,le,0);S(y,fe)&&E(le),t.unbindTexture()}b.depthBuffer&&Se(b)}function It(b){const y=f(b)||o,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0,Q=B.length;ee<Q;ee++){const te=B[ee];if(S(te,y)){const fe=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(te).__webglTexture;t.bindTexture(fe,le),E(fe),t.unbindTexture()}}}function _e(b){if(o&&b.samples>0&&pe(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,ee=b.height;let Q=s.COLOR_BUFFER_BIT;const te=[],fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(b),he=b.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&te.push(fe);const Ne=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ne===!1&&(b.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Ne===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[fe])),he){const J=n.get(y[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,B,ee,0,0,B,ee,Q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Ne=n.get(y[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ce(b){return Math.min(i.maxSamples,b.samples)}function pe(b){const y=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(b){const y=a.render.frame;d.get(b)!==y&&(d.set(b,y),b.update())}function Fe(b,y){const B=b.colorSpace,ee=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===qr||B!==Tn&&B!==Qt&&(Je.getTransfer(B)===rt?o===!1?e.has("EXT_sRGB")===!0&&ee===ln?(b.format=qr,b.minFilter=Zt,b.generateMipmaps=!1):y=Il.sRGBToLinear(y):(ee!==ln||Q!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=Xe,this.setupRenderTarget=k,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=pe}function om(s,e,t){const n=t.isWebGL2;function i(r,a=Qt){let o;const l=Je.getTransfer(a);if(r===On)return s.UNSIGNED_BYTE;if(r===El)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gc)return s.BYTE;if(r===Vc)return s.SHORT;if(r===ia)return s.UNSIGNED_SHORT;if(r===Ml)return s.INT;if(r===kn)return s.UNSIGNED_INT;if(r===Fn)return s.FLOAT;if(r===ts)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Wc)return s.ALPHA;if(r===ln)return s.RGBA;if(r===$c)return s.LUMINANCE;if(r===Xc)return s.LUMINANCE_ALPHA;if(r===ri)return s.DEPTH_COMPONENT;if(r===Ni)return s.DEPTH_STENCIL;if(r===qr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===wl)return s.RED;if(r===Tl)return s.RED_INTEGER;if(r===qc)return s.RG;if(r===Al)return s.RG_INTEGER;if(r===Cl)return s.RGBA_INTEGER;if(r===sr||r===rr||r===ar||r===or)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===sr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===sr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ar)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===or)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Aa||r===Ca||r===Ra||r===Da)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Aa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ca)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ra)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Da)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===La||r===Pa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===La)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Pa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ia||r===Ua||r===ka||r===Fa||r===Na||r===Ba||r===Oa||r===za||r===Ha||r===Ga||r===Va||r===Wa||r===$a||r===Xa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ia)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ua)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ka)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Na)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ba)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===za)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ha)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ga)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Va)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$a)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lr||r===qa||r===ja)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===lr)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ja)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jc||r===Ya||r===Ka||r===Za)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===lr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ya)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ka)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Za)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===si?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class lm extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ji extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cm={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,n),p=this._getHandJoint(c,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dm extends Oi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,m=null,g=null;const x=t.getContextAttributes();let f=null,p=null;const S=[],E=[],w=new De;let P=null;const C=new $t;C.layers.enable(1),C.viewport=new lt;const A=new $t;A.layers.enable(2),A.viewport=new lt;const $=[C,A],_=new lm;_.layers.enable(1),_.layers.enable(2);let M=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=S[G];return K===void 0&&(K=new Ir,S[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=S[G];return K===void 0&&(K=new Ir,S[G]=K),K.getGripSpace()},this.getHand=function(G){let K=S[G];return K===void 0&&(K=new Ir,S[G]=K),K.getHandSpace()};function H(G){const K=E.indexOf(G.inputSource);if(K===-1)return;const ce=S[K];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function Z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",L);for(let G=0;G<S.length;G++){const K=E[G];K!==null&&(E[G]=null,S[G].disconnect(K))}M=null,U=null,e.setRenderTarget(f),m=null,u=null,h=null,i=null,p=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new oi(m.framebufferWidth,m.framebufferHeight,{format:ln,type:On,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ce=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=x.stencil?Ni:ri,ce=x.stencil?si:kn);const ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(ge),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new oi(u.textureWidth,u.textureHeight,{format:ln,type:On,depthTexture:new $l(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(p);Le.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(G){for(let K=0;K<G.removed.length;K++){const ce=G.removed[K],ye=E.indexOf(ce);ye>=0&&(E[ye]=null,S[ye].disconnect(ce))}for(let K=0;K<G.added.length;K++){const ce=G.added[K];let ye=E.indexOf(ce);if(ye===-1){for(let Le=0;Le<S.length;Le++)if(Le>=E.length){E.push(ce),ye=Le;break}else if(E[Le]===null){E[Le]=ce,ye=Le;break}if(ye===-1)break}const ge=S[ye];ge&&ge.connect(ce)}}const N=new R,V=new R;function j(G,K,ce){N.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const ye=N.distanceTo(V),ge=K.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Ie=ge[14]/(ge[10]-1),Se=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],k=(ge[9]-1)/ge[5],It=(ge[8]-1)/ge[0],_e=(Le[8]+1)/Le[0],Ce=Ie*It,pe=Ie*_e,ct=ye/(-It+_e),Fe=ct*-It;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(ct),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const b=Ie+ct,y=Se+ct,B=Ce-Fe,ee=pe+(ye-Fe),Q=Xe*Se/y*b,te=k*Se/y*b;G.projectionMatrix.makePerspective(B,ee,Q,te,b,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;_.near=A.near=C.near=G.near,_.far=A.far=C.far=G.far,(M!==_.near||U!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,U=_.far);const K=G.parent,ce=_.cameras;X(_,K);for(let ye=0;ye<ce.length;ye++)X(ce[ye],K);ce.length===2?j(_,C,A):_.projectionMatrix.copy(C.projectionMatrix),q(G,_,K)};function q(G,K,ce){ce===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=jr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let Y=null;function ne(G,K){if(d=K.getViewerPose(c||a),g=K,d!==null){const ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let ye=!1;ce.length!==_.cameras.length&&(_.cameras.length=0,ye=!0);for(let ge=0;ge<ce.length;ge++){const Le=ce[ge];let Ie=null;if(m!==null)Ie=m.getViewport(Le);else{const Xe=h.getViewSubImage(u,Le);Ie=Xe.viewport,ge===0&&(e.setRenderTargetTextures(p,Xe.colorTexture,u.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(p))}let Se=$[ge];Se===void 0&&(Se=new $t,Se.layers.enable(ge),Se.viewport=new lt,$[ge]=Se),Se.matrix.fromArray(Le.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Le.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ge===0&&(_.matrix.copy(Se.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ye===!0&&_.cameras.push(Se)}}for(let ce=0;ce<S.length;ce++){const ye=E[ce],ge=S[ce];ye!==null&&ge!==void 0&&ge.update(ye,K,c||a)}Y&&Y(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ie=new Vl;ie.setAnimationLoop(ne),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}function hm(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,zl(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,S,E,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),d(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,w)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,E):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Bt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Bt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const E=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*E,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,E){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=E*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function d(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function um(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,E){const w=E.program;n.uniformBlockBinding(S,w)}function c(S,E){let w=i[S.id];w===void 0&&(g(S),w=d(S),i[S.id]=w,S.addEventListener("dispose",f));const P=E.program;n.updateUBOMapping(S,P);const C=e.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}function d(S){const E=h();S.__bindingPointIndex=E;const w=s.createBuffer(),P=S.__size,C=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,w),w}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const E=i[S.id],w=S.uniforms,P=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let C=0,A=w.length;C<A;C++){const $=Array.isArray(w[C])?w[C]:[w[C]];for(let _=0,M=$.length;_<M;_++){const U=$[_];if(m(U,C,_,P)===!0){const H=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let N=0;N<Z.length;N++){const V=Z[N],j=x(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,H+L,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,E,w,P){const C=S.value,A=E+"_"+w;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const $=P[A];if(typeof C=="number"||typeof C=="boolean"){if($!==C)return P[A]=C,!0}else if($.equals(C)===!1)return $.copy(C),!0}return!1}function g(S){const E=S.uniforms;let w=0;const P=16;for(let A=0,$=E.length;A<$;A++){const _=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,U=_.length;M<U;M++){const H=_[M],Z=Array.isArray(H.value)?H.value:[H.value];for(let L=0,N=Z.length;L<N;L++){const V=Z[L],j=x(V),X=w%P;X!==0&&P-X<j.boundary&&(w+=P-X),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=j.storage}}}const C=w%P;return C>0&&(w+=P-C),S.__size=w,S.__cache={},this}function x(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function f(S){const E=S.target;E.removeEventListener("dispose",f);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Zl{constructor(e={}){const{canvas:t=ad(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,f=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const E=this;let w=!1,P=0,C=0,A=null,$=-1,_=null;const M=new lt,U=new lt;let H=null;const Z=new Ve(0);let L=0,N=t.width,V=t.height,j=1,X=null,q=null;const Y=new lt(0,0,N,V),ne=new lt(0,0,N,V);let ie=!1;const G=new oa;let K=!1,ce=!1,ye=null;const ge=new gt,Le=new De,Ie=new R,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return A===null?j:1}let k=n;function It(v,I){for(let O=0;O<v.length;O++){const z=v[O],F=t.getContext(z,I);if(F!==null)return F}return null}try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ae,!1),k===null){const I=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&I.shift(),k=It(I,v),k===null)throw It(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let _e,Ce,pe,ct,Fe,b,y,B,ee,Q,te,fe,le,he,Ee,Ne,J,Ze,Ge,Ae,ve,ue,Ue,Ye;function ut(){_e=new bp(k),Ce=new mp(k,_e,e),_e.init(Ce),ue=new om(k,_e,Ce),pe=new rm(k,_e,Ce),ct=new Sp(k),Fe=new $f,b=new am(k,_e,pe,Fe,Ce,ue,ct),y=new xp(E),B=new _p(E),ee=new Pd(k,Ce),Ue=new pp(k,_e,ee,Ce),Q=new Mp(k,ee,ct,Ue),te=new Cp(k,Q,ee,ct),Ge=new Ap(k,Ce,b),Ne=new gp(Fe),fe=new Wf(E,y,B,_e,Ce,Ue,Ne),le=new hm(E,Fe),he=new qf,Ee=new Qf(_e,Ce),Ze=new up(E,y,B,pe,te,u,l),J=new sm(E,te,Ce),Ye=new um(k,ct,Ce,pe),Ae=new fp(k,_e,ct,Ce),ve=new Ep(k,_e,ct,Ce),ct.programs=fe.programs,E.capabilities=Ce,E.extensions=_e,E.properties=Fe,E.renderLists=he,E.shadowMap=J,E.state=pe,E.info=ct}ut();const Oe=new dm(E,k);this.xr=Oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const v=_e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=_e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(N,V,!1))},this.getSize=function(v){return v.set(N,V)},this.setSize=function(v,I,O=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=v,V=I,t.width=Math.floor(v*j),t.height=Math.floor(I*j),O===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(N*j,V*j).floor()},this.setDrawingBufferSize=function(v,I,O){N=v,V=I,j=O,t.width=Math.floor(v*O),t.height=Math.floor(I*O),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(M)},this.getViewport=function(v){return v.copy(Y)},this.setViewport=function(v,I,O,z){v.isVector4?Y.set(v.x,v.y,v.z,v.w):Y.set(v,I,O,z),pe.viewport(M.copy(Y).multiplyScalar(j).floor())},this.getScissor=function(v){return v.copy(ne)},this.setScissor=function(v,I,O,z){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,I,O,z),pe.scissor(U.copy(ne).multiplyScalar(j).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(v){pe.setScissorTest(ie=v)},this.setOpaqueSort=function(v){X=v},this.setTransparentSort=function(v){q=v},this.getClearColor=function(v){return v.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(v=!0,I=!0,O=!0){let z=0;if(v){let F=!1;if(A!==null){const de=A.texture.format;F=de===Cl||de===Al||de===Tl}if(F){const de=A.texture.type,me=de===On||de===kn||de===ia||de===si||de===El||de===Sl,Me=Ze.getClearColor(),Te=Ze.getClearAlpha(),Be=Me.r,Re=Me.g,Pe=Me.b;me?(m[0]=Be,m[1]=Re,m[2]=Pe,m[3]=Te,k.clearBufferuiv(k.COLOR,0,m)):(g[0]=Be,g[1]=Re,g[2]=Pe,g[3]=Te,k.clearBufferiv(k.COLOR,0,g))}else z|=k.COLOR_BUFFER_BIT}I&&(z|=k.DEPTH_BUFFER_BIT),O&&(z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Ee.dispose(),Fe.dispose(),y.dispose(),B.dispose(),te.dispose(),Ue.dispose(),Ye.dispose(),fe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Ut),Oe.removeEventListener("sessionend",it),ye&&(ye.dispose(),ye=null),kt.stop()};function se(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const v=ct.autoReset,I=J.enabled,O=J.autoUpdate,z=J.needsUpdate,F=J.type;ut(),ct.autoReset=v,J.enabled=I,J.autoUpdate=O,J.needsUpdate=z,J.type=F}function ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function oe(v){const I=v.target;I.removeEventListener("dispose",oe),we(I)}function we(v){be(v),Fe.remove(v)}function be(v){const I=Fe.get(v).programs;I!==void 0&&(I.forEach(function(O){fe.releaseProgram(O)}),v.isShaderMaterial&&fe.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,O,z,F,de){I===null&&(I=Se);const me=F.isMesh&&F.matrixWorld.determinant()<0,Me=ic(v,I,O,z,F);pe.setMaterial(z,me);let Te=O.index,Be=1;if(z.wireframe===!0){if(Te=Q.getWireframeAttribute(O),Te===void 0)return;Be=2}const Re=O.drawRange,Pe=O.attributes.position;let ft=Re.start*Be,Gt=(Re.start+Re.count)*Be;de!==null&&(ft=Math.max(ft,de.start*Be),Gt=Math.min(Gt,(de.start+de.count)*Be)),Te!==null?(ft=Math.max(ft,0),Gt=Math.min(Gt,Te.count)):Pe!=null&&(ft=Math.max(ft,0),Gt=Math.min(Gt,Pe.count));const Mt=Gt-ft;if(Mt<0||Mt===1/0)return;Ue.setup(F,z,Me,O,Te);let gn,dt=Ae;if(Te!==null&&(gn=ee.get(Te),dt=ve,dt.setIndex(gn)),F.isMesh)z.wireframe===!0?(pe.setLineWidth(z.wireframeLinewidth*Xe()),dt.setMode(k.LINES)):dt.setMode(k.TRIANGLES);else if(F.isLine){let ze=z.linewidth;ze===void 0&&(ze=1),pe.setLineWidth(ze*Xe()),F.isLineSegments?dt.setMode(k.LINES):F.isLineLoop?dt.setMode(k.LINE_LOOP):dt.setMode(k.LINE_STRIP)}else F.isPoints?dt.setMode(k.POINTS):F.isSprite&&dt.setMode(k.TRIANGLES);if(F.isBatchedMesh)dt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)dt.renderInstances(ft,Mt,F.count);else if(O.isInstancedBufferGeometry){const ze=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Qs=Math.min(O.instanceCount,ze);dt.renderInstances(ft,Mt,Qs)}else dt.render(ft,Mt)};function tt(v,I,O){v.transparent===!0&&v.side===En&&v.forceSinglePass===!1?(v.side=Bt,v.needsUpdate=!0,as(v,I,O),v.side=Hn,v.needsUpdate=!0,as(v,I,O),v.side=En):as(v,I,O)}this.compile=function(v,I,O=null){O===null&&(O=v),f=Ee.get(O),f.init(),S.push(f),O.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),v!==O&&v.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(E._useLegacyLights);const z=new Set;return v.traverse(function(F){const de=F.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const Me=de[me];tt(Me,O,F),z.add(Me)}else tt(de,O,F),z.add(de)}),S.pop(),f=null,z},this.compileAsync=function(v,I,O=null){const z=this.compile(v,I,O);return new Promise(F=>{function de(){if(z.forEach(function(me){Fe.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){F(v);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let nt=null;function bt(v){nt&&nt(v)}function Ut(){kt.stop()}function it(){kt.start()}const kt=new Vl;kt.setAnimationLoop(bt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(v){nt=v,Oe.setAnimationLoop(v),v===null?kt.stop():kt.start()},Oe.addEventListener("sessionstart",Ut),Oe.addEventListener("sessionend",it),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(I),I=Oe.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,I,A),f=Ee.get(v,S.length),f.init(),S.push(f),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,ce),x=he.get(v,p.length),x.init(),p.push(x),dn(v,I,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(X,q),this.info.render.frame++,K===!0&&Ne.beginShadows();const O=f.state.shadowsArray;if(J.render(O,v,I),K===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,v),f.setupLights(E._useLegacyLights),I.isArrayCamera){const z=I.cameras;for(let F=0,de=z.length;F<de;F++){const me=z[F];fa(x,v,me,me.viewport)}}else fa(x,v,I);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),v.isScene===!0&&v.onAfterRender(E,v,I),Ue.resetDefaultState(),$=-1,_=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function dn(v,I,O,z){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||G.intersectsSprite(v)){z&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ge);const me=te.update(v),Me=v.material;Me.visible&&x.push(v,me,Me,O,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||G.intersectsObject(v))){const me=te.update(v),Me=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(ge)),Array.isArray(Me)){const Te=me.groups;for(let Be=0,Re=Te.length;Be<Re;Be++){const Pe=Te[Be],ft=Me[Pe.materialIndex];ft&&ft.visible&&x.push(v,me,ft,O,Ie.z,Pe)}}else Me.visible&&x.push(v,me,Me,O,Ie.z,null)}}const de=v.children;for(let me=0,Me=de.length;me<Me;me++)dn(de[me],I,O,z)}function fa(v,I,O,z){const F=v.opaque,de=v.transmissive,me=v.transparent;f.setupLightsView(O),K===!0&&Ne.setGlobalState(E.clippingPlanes,O),de.length>0&&nc(F,de,I,O),z&&pe.viewport(M.copy(z)),F.length>0&&rs(F,I,O),de.length>0&&rs(de,I,O),me.length>0&&rs(me,I,O),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function nc(v,I,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const de=Ce.isWebGL2;ye===null&&(ye=new oi(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ts:On,minFilter:es,samples:de?4:0})),E.getDrawingBufferSize(Le),de?ye.setSize(Le.x,Le.y):ye.setSize(Yr(Le.x),Yr(Le.y));const me=E.getRenderTarget();E.setRenderTarget(ye),E.getClearColor(Z),L=E.getClearAlpha(),L<1&&E.setClearColor(16777215,.5),E.clear();const Me=E.toneMapping;E.toneMapping=Bn,rs(v,O,z),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye);let Te=!1;for(let Be=0,Re=I.length;Be<Re;Be++){const Pe=I[Be],ft=Pe.object,Gt=Pe.geometry,Mt=Pe.material,gn=Pe.group;if(Mt.side===En&&ft.layers.test(z.layers)){const dt=Mt.side;Mt.side=Bt,Mt.needsUpdate=!0,ma(ft,O,z,Gt,Mt,gn),Mt.side=dt,Mt.needsUpdate=!0,Te=!0}}Te===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye)),E.setRenderTarget(me),E.setClearColor(Z,L),E.toneMapping=Me}function rs(v,I,O){const z=I.isScene===!0?I.overrideMaterial:null;for(let F=0,de=v.length;F<de;F++){const me=v[F],Me=me.object,Te=me.geometry,Be=z===null?me.material:z,Re=me.group;Me.layers.test(O.layers)&&ma(Me,I,O,Te,Be,Re)}}function ma(v,I,O,z,F,de){v.onBeforeRender(E,I,O,z,F,de),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(E,I,O,z,v,de),F.transparent===!0&&F.side===En&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,E.renderBufferDirect(O,I,z,F,v,de),F.side=Hn,F.needsUpdate=!0,E.renderBufferDirect(O,I,z,F,v,de),F.side=En):E.renderBufferDirect(O,I,z,F,v,de),v.onAfterRender(E,I,O,z,F,de)}function as(v,I,O){I.isScene!==!0&&(I=Se);const z=Fe.get(v),F=f.state.lights,de=f.state.shadowsArray,me=F.state.version,Me=fe.getParameters(v,F.state,de,I,O),Te=fe.getProgramCacheKey(Me);let Be=z.programs;z.environment=v.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(v.isMeshStandardMaterial?B:y).get(v.envMap||z.environment),Be===void 0&&(v.addEventListener("dispose",oe),Be=new Map,z.programs=Be);let Re=Be.get(Te);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===me)return xa(v,Me),Re}else Me.uniforms=fe.getUniforms(v),v.onBuild(O,Me,E),v.onBeforeCompile(Me,E),Re=fe.acquireProgram(Me,Te),Be.set(Te,Re),z.uniforms=Me.uniforms;const Pe=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Pe.clippingPlanes=Ne.uniform),xa(v,Me),z.needsLights=rc(v),z.lightsStateVersion=me,z.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function ga(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Fs.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function xa(v,I){const O=Fe.get(v);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function ic(v,I,O,z,F){I.isScene!==!0&&(I=Se),b.resetTextureUnits();const de=I.fog,me=z.isMeshStandardMaterial?I.environment:null,Me=A===null?E.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Tn,Te=(z.isMeshStandardMaterial?B:y).get(z.envMap||me),Be=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!O.morphAttributes.position,ft=!!O.morphAttributes.normal,Gt=!!O.morphAttributes.color;let Mt=Bn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const gn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,dt=gn!==void 0?gn.length:0,ze=Fe.get(z),Qs=f.state.lights;if(K===!0&&(ce===!0||v!==_)){const qt=v===_&&z.id===$;Ne.setState(z,v,qt)}let pt=!1;z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Qs.state.version||ze.outputColorSpace!==Me||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||ze.envMap!==Te||z.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ne.numPlanes||ze.numIntersection!==Ne.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Re||ze.morphTargets!==Pe||ze.morphNormals!==ft||ze.morphColors!==Gt||ze.toneMapping!==Mt||Ce.isWebGL2===!0&&ze.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,ze.__version=z.version);let Gn=ze.currentProgram;pt===!0&&(Gn=as(z,I,F));let ya=!1,Hi=!1,er=!1;const Rt=Gn.getUniforms(),Vn=ze.uniforms;if(pe.useProgram(Gn.program)&&(ya=!0,Hi=!0,er=!0),z.id!==$&&($=z.id,Hi=!0),ya||_!==v){Rt.setValue(k,"projectionMatrix",v.projectionMatrix),Rt.setValue(k,"viewMatrix",v.matrixWorldInverse);const qt=Rt.map.cameraPosition;qt!==void 0&&qt.setValue(k,Ie.setFromMatrixPosition(v.matrixWorld)),Ce.logarithmicDepthBuffer&&Rt.setValue(k,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Rt.setValue(k,"isOrthographic",v.isOrthographicCamera===!0),_!==v&&(_=v,Hi=!0,er=!0)}if(F.isSkinnedMesh){Rt.setOptional(k,F,"bindMatrix"),Rt.setOptional(k,F,"bindMatrixInverse");const qt=F.skeleton;qt&&(Ce.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Rt.setValue(k,"boneTexture",qt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Rt.setOptional(k,F,"batchingTexture"),Rt.setValue(k,"batchingTexture",F._matricesTexture,b));const tr=O.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0&&Ce.isWebGL2===!0)&&Ge.update(F,O,Gn),(Hi||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,Rt.setValue(k,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Vn.envMap.value=Te,Vn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Hi&&(Rt.setValue(k,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&sc(Vn,er),de&&z.fog===!0&&le.refreshFogUniforms(Vn,de),le.refreshMaterialUniforms(Vn,z,j,V,ye),Fs.upload(k,ga(ze),Vn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Fs.upload(k,ga(ze),Vn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Rt.setValue(k,"center",F.center),Rt.setValue(k,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(k,"normalMatrix",F.normalMatrix),Rt.setValue(k,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const qt=z.uniformsGroups;for(let nr=0,ac=qt.length;nr<ac;nr++)if(Ce.isWebGL2){const va=qt[nr];Ye.update(va,Gn),Ye.bind(va,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function sc(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function rc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,I,O){Fe.get(v.texture).__webglTexture=I,Fe.get(v.depthTexture).__webglTexture=O;const z=Fe.get(v);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,I){const O=Fe.get(v);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,O=0){A=v,P=I,C=O;let z=!0,F=null,de=!1,me=!1;if(v){const Te=Fe.get(v);Te.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(k.FRAMEBUFFER,null),z=!1):Te.__webglFramebuffer===void 0?b.setupRenderTarget(v):Te.__hasExternalTextures&&b.rebindTextures(v,Fe.get(v.texture).__webglTexture,Fe.get(v.depthTexture).__webglTexture);const Be=v.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const Re=Fe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?F=Re[I][O]:F=Re[I],de=!0):Ce.isWebGL2&&v.samples>0&&b.useMultisampledRTT(v)===!1?F=Fe.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[O]:F=Re,M.copy(v.viewport),U.copy(v.scissor),H=v.scissorTest}else M.copy(Y).multiplyScalar(j).floor(),U.copy(ne).multiplyScalar(j).floor(),H=ie;if(pe.bindFramebuffer(k.FRAMEBUFFER,F)&&Ce.drawBuffers&&z&&pe.drawBuffers(v,F),pe.viewport(M),pe.scissor(U),pe.setScissorTest(H),de){const Te=Fe.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,O)}else if(me){const Te=Fe.get(v.texture),Be=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.__webglTexture,O||0,Be)}$=-1},this.readRenderTargetPixels=function(v,I,O,z,F,de,me){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){pe.bindFramebuffer(k.FRAMEBUFFER,Me);try{const Te=v.texture,Be=Te.format,Re=Te.type;if(Be!==ln&&ue.convert(Be)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===ts&&(_e.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==On&&ue.convert(Re)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Fn&&(Ce.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-z&&O>=0&&O<=v.height-F&&k.readPixels(I,O,z,F,ue.convert(Be),ue.convert(Re),de)}finally{const Te=A!==null?Fe.get(A).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(v,I,O=0){const z=Math.pow(2,-O),F=Math.floor(I.image.width*z),de=Math.floor(I.image.height*z);b.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,O,0,0,v.x,v.y,F,de),pe.unbindTexture()},this.copyTextureToTexture=function(v,I,O,z=0){const F=I.image.width,de=I.image.height,me=ue.convert(O.format),Me=ue.convert(O.type);b.setTexture2D(O,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,v.x,v.y,F,de,me,Me,I.image.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,v.x,v.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,z,v.x,v.y,me,Me,I.image),z===0&&O.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(v,I,O,z,F=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=v.max.x-v.min.x+1,me=v.max.y-v.min.y+1,Me=v.max.z-v.min.z+1,Te=ue.convert(z.format),Be=ue.convert(z.type);let Re;if(z.isData3DTexture)b.setTexture3D(z,0),Re=k.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)b.setTexture2DArray(z,0),Re=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const Pe=k.getParameter(k.UNPACK_ROW_LENGTH),ft=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Gt=k.getParameter(k.UNPACK_SKIP_PIXELS),Mt=k.getParameter(k.UNPACK_SKIP_ROWS),gn=k.getParameter(k.UNPACK_SKIP_IMAGES),dt=O.isCompressedTexture?O.mipmaps[F]:O.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,dt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,v.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,v.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,v.min.z),O.isDataTexture||O.isData3DTexture?k.texSubImage3D(Re,F,I.x,I.y,I.z,de,me,Me,Te,Be,dt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Re,F,I.x,I.y,I.z,de,me,Me,Te,dt.data)):k.texSubImage3D(Re,F,I.x,I.y,I.z,de,me,Me,Te,Be,dt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Pe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Gt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Mt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,gn),F===0&&z.generateMipmaps&&k.generateMipmap(Re),pe.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,pe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ra?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Zs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?ai:Dl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ai?At:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pm extends Zl{}pm.prototype.isWebGL1Renderer=!0;class ca{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fm extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class mm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new R;class Vs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jl extends ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ti;const Xi=new R,Ai=new R,Ci=new R,Ri=new De,qi=new De,Ql=new gt,Rs=new R,ji=new R,Ds=new R,zo=new De,Ur=new De,Ho=new De;class gm extends Ct{constructor(e=new Jl){if(super(),this.isSprite=!0,this.type="Sprite",Ti===void 0){Ti=new mn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mm(t,5);Ti.setIndex([0,1,2,0,2,3]),Ti.setAttribute("position",new Vs(n,3,0,!1)),Ti.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=Ti,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),Ql.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ci.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ls(Rs.set(-.5,-.5,0),Ci,a,Ai,i,r),Ls(ji.set(.5,-.5,0),Ci,a,Ai,i,r),Ls(Ds.set(.5,.5,0),Ci,a,Ai,i,r),zo.set(0,0),Ur.set(1,0),Ho.set(1,1);let o=e.ray.intersectTriangle(Rs,ji,Ds,!1,Xi);if(o===null&&(Ls(ji.set(-.5,.5,0),Ci,a,Ai,i,r),Ur.set(0,1),o=e.ray.intersectTriangle(Rs,Ds,ji,!1,Xi),o===null))return;const l=e.ray.origin.distanceTo(Xi);l<e.near||l>e.far||t.push({distance:l,point:Xi.clone(),uv:Jt.getInterpolation(Xi,Rs,ji,Ds,zo,Ur,Ho,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ls(s,e,t,n,i,r){Ri.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(qi.x=r*Ri.x-i*Ri.y,qi.y=i*Ri.x+r*Ri.y):qi.copy(Ri),s.copy(e),s.x+=qi.x,s.y+=qi.y,s.applyMatrix4(Ql)}class xm extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,l,c=wt,d=wt,h,u){super(null,a,o,l,c,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da extends Ot{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fn extends mn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],m=[];let g=0;const x=[],f=n/2;let p=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(m,2));function S(){const w=new R,P=new R;let C=0;const A=(t-e)/n;for(let $=0;$<=r;$++){const _=[],M=$/r,U=M*(t-e)+e;for(let H=0;H<=i;H++){const Z=H/i,L=Z*l+o,N=Math.sin(L),V=Math.cos(L);P.x=U*N,P.y=-M*n+f,P.z=U*V,h.push(P.x,P.y,P.z),w.set(N,A,V).normalize(),u.push(w.x,w.y,w.z),m.push(Z,1-M),_.push(g++)}x.push(_)}for(let $=0;$<i;$++)for(let _=0;_<r;_++){const M=x[_][$],U=x[_+1][$],H=x[_+1][$+1],Z=x[_][$+1];d.push(M,U,Z),d.push(U,H,Z),C+=6}c.addGroup(p,C,0),p+=C}function E(w){const P=g,C=new De,A=new R;let $=0;const _=w===!0?e:t,M=w===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,f*M,0),u.push(0,M,0),m.push(.5,.5),g++;const U=g;for(let H=0;H<=i;H++){const L=H/i*l+o,N=Math.cos(L),V=Math.sin(L);A.x=_*V,A.y=f*M,A.z=_*N,h.push(A.x,A.y,A.z),u.push(0,M,0),C.x=N*.5+.5,C.y=V*.5*M+.5,m.push(C.x,C.y),g++}for(let H=0;H<i;H++){const Z=P+H,L=U+H;w===!0?d.push(L,L+1,Z):d.push(L+1,L,Z),$+=3}c.addGroup(p,$,w===!0?1:2),p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends mn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new R,u=new R,m=[],g=[],x=[],f=[];for(let p=0;p<=n;p++){const S=[],E=p/n;let w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const C=P/t;h.x=-e*Math.cos(i+C*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(i+C*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),f.push(C+w,1-E),S.push(c++)}d.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const E=d[p][S+1],w=d[p][S],P=d[p+1][S],C=d[p+1][S+1];(p!==0||a>0)&&m.push(E,w,C),(p!==n-1||l<Math.PI)&&m.push(w,P,C)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class en extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ym extends ci{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ua extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kr=new gt,Go=new R,Vo=new R;class ec{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Go.setFromMatrixPosition(e.matrixWorld),t.position.copy(Go),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wo=new gt,Yi=new R,Fr=new R;class vm extends ec{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yi),Fr.copy(n.position),Fr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fr),n.updateMatrixWorld(),i.makeTranslation(-Yi.x,-Yi.y,-Yi.z),Wo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo)}}class $o extends ua{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _m extends ec{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bm extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new _m}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mm extends ua{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);class Em{constructor(e){T(this,"renderer");T(this,"camera");T(this,"activeScene",null);T(this,"lastTime",0);T(this,"_onTick");T(this,"_loop",e=>{requestAnimationFrame(this._loop);const t=Math.min(e-this.lastTime,100);this.lastTime=e,this._onTick?.(t),this.activeScene&&this.renderer.render(this.activeScene,this.camera)});this.renderer=new Zl({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=yl,this.renderer.toneMapping=_l,this.renderer.toneMappingExposure=1.1,e.appendChild(this.renderer.domElement),this.camera=new $t(70,e.clientWidth/e.clientHeight,.1,60),this.camera.position.set(0,1.7,4),window.addEventListener("resize",()=>this._onResize(e))}setScene(e){this.activeScene=e}onTick(e){this._onTick=e}start(){this.lastTime=performance.now(),requestAnimationFrame(this._loop)}_onResize(e){const t=e.clientWidth,n=e.clientHeight;this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}}const Sm={"app.name":{ru:"Educator Sim 2",en:"Educator Sim 2"},"char.badge":{ru:"Educator Sim 2",en:"Educator Sim 2"},"char.title":{ru:"Создание персонажа",en:"Create Character"},"char.subtitle":{ru:"Выберите имя, предмет и класс",en:"Choose your name, subject and class"},"char.name_label":{ru:"Ваше имя (и отчество)",en:"Your name"},"char.name_ph":{ru:"Например: Иван Иванович",en:"e.g. John Smith"},"char.name_default":{ru:"Иван Иванович",en:"John Smith"},"char.subject":{ru:"Предмет",en:"Subject"},"char.grade":{ru:"Класс (год обучения)",en:"School Grade"},"char.grade_unit":{ru:"класс",en:"grade"},"char.appearance":{ru:"Внешность",en:"Appearance"},"char.start":{ru:"🏫 Начать работу!",en:"🏫 Start Teaching!"},"subj.math":{ru:"Математика",en:"Mathematics"},"subj.physics":{ru:"Физика",en:"Physics"},"subj.chemistry":{ru:"Химия",en:"Chemistry"},"subj.history":{ru:"История",en:"History"},"subj.literature":{ru:"Литература",en:"Literature"},"subj.russian":{ru:"Русский язык",en:"Russian"},"app.default":{ru:"Классический",en:"Classic"},"app.strict":{ru:"Строгий",en:"Strict"},"app.cool":{ru:"Молодой",en:"Cool"},"app.default_desc":{ru:"Строгий деловой костюм",en:"Formal business suit"},"app.strict_desc":{ru:"Всегда с указкой",en:"Always with a pointer"},"app.cool_desc":{ru:"Свитер и джинсы",en:"Sweater and jeans"},"hud.day":{ru:"День",en:"Day"},"hud.attention":{ru:"Внимание класса",en:"Class Attention"},"hud.reputation":{ru:"Репутация",en:"Reputation"},"hud.salary":{ru:"Зарплата",en:"Salary"},"hud.topic_prefix":{ru:"Тема:",en:"Topic:"},"hud.hint_e":{ru:"взаимодействие",en:"interact"},"hud.hint_f1":{ru:"курсор",en:"cursor"},"hud.phase.explanation":{ru:"Объяснение",en:"Explanation"},"hud.phase.tasks":{ru:"Задания",en:"Tasks"},"hud.phase.grading":{ru:"Проверка тетрадей",en:"Grading Notebooks"},"hud.phase.homework":{ru:"Домашнее задание",en:"Homework"},"hud.phase.done":{ru:"Урок завершён",en:"Lesson Complete"},"hud.phase.quiz":{ru:"Контрольная",en:"Quiz Day"},"hud.warn_attention":{ru:"⚠️ Класс теряет внимание!",en:"⚠️ Class is losing attention!"},"expl.round":{ru:"Часть",en:"Part"},"expl.topic":{ru:"Тема:",en:"Topic:"},"expl.choose":{ru:"Выберите метод объяснения",en:"Choose an explanation method"},"expl.understanding":{ru:"Понимание",en:"Understanding"},"expl.attention":{ru:"Внимание",en:"Attention"},"expl.phase.intro":{ru:"Введение",en:"Introduction"},"expl.phase.main":{ru:"Основная часть",en:"Core Lesson"},"expl.phase.conclusion":{ru:"Закрепление",en:"Practice"},"expl.stars.hard":{ru:"★★★ Сложно",en:"★★★ Difficult"},"expl.stars.medium":{ru:"★★ Средне",en:"★★ Medium"},"expl.stars.easy":{ru:"★ Легко",en:"★ Easy"},"quiz.wednesday":{ru:"📋 Среда — проверочная работа!",en:"📋 Wednesday — Quiz Day!"},"quiz.collect_e":{ru:"📓 Соберите работы — нажмите E",en:"📓 Collect quizzes — press E"},"expl.type.theory":{ru:"теория",en:"theory"},"expl.type.board":{ru:"доска",en:"board"},"expl.type.example":{ru:"пример",en:"example"},"expl.type.question":{ru:"вопрос",en:"question"},"nb.title":{ru:"📓 Проверка тетрадей",en:"📓 Grading Notebooks"},"nb.student":{ru:"Ученик:",en:"Student:"},"nb.errors_title":{ru:"Найденные ошибки",en:"Found errors"},"nb.no_errors":{ru:"✅ Ошибок не найдено!",en:"✅ No errors found!"},"nb.grade":{ru:"Оценка:",en:"Grade:"},"nb.submit":{ru:"Поставить → продолжить",en:"Grade → continue"},"nb.finish":{ru:"Завершить проверку",en:"Finish grading"},"nb.feedback.2":{ru:"Материал не усвоен. Серьёзная работа над ошибками.",en:"Material not mastered. Serious revision needed."},"nb.feedback.3":{ru:"Удовлетворительно. Основные моменты поняты.",en:"Satisfactory. Core ideas understood."},"nb.feedback.4":{ru:"Хорошая работа! Небольшие недочёты.",en:"Good work! Minor issues."},"nb.feedback.5":{ru:"Отлично! Безупречная работа.",en:"Excellent! Flawless work."},"ev.label":{ru:"Событие",en:"Event"},"ev.continue":{ru:"Продолжить урок",en:"Continue lesson"},"pause.title":{ru:"⏸ Пауза",en:"⏸ Paused"},"pause.resume":{ru:"▶  Продолжить",en:"▶  Resume"},"pause.save":{ru:"💾  Сохранить",en:"💾  Save"},"pause.settings":{ru:"⚙️  Настройки",en:"⚙️  Settings"},"pause.menu":{ru:"🏠  Главное меню",en:"🏠  Main Menu"},"pause.menu_confirm":{ru:"Выйти в меню? Несохранённый прогресс потеряется.",en:"Exit to menu? Unsaved progress will be lost."},"pause.version":{ru:"Educator Sim v2 · teach2",en:"Educator Sim v2 · teach2"},"report.title":{ru:"📋 Итоги урока",en:"📋 Lesson Report"},"report.understood":{ru:"Поняли тему",en:"Understood topic"},"report.avg_und":{ru:"Среднее понимание",en:"Avg. understanding"},"report.xp":{ru:"Опыт",en:"Experience"},"report.rep":{ru:"Репутация",en:"Reputation"},"report.nb_grades":{ru:"📓 Оценки за тетради",en:"📓 Notebook grades"},"report.hw_given":{ru:"📚 Домашнее задание задано",en:"📚 Homework assigned"},"report.hw_none":{ru:"Домашнее задание не задано",en:"No homework assigned"},"report.next":{ru:"Следующий урок →",en:"Next lesson →"},"sched.label":{ru:"Расписание",en:"Schedule"},"sched.day":{ru:"День",en:"Day"},"sched.start":{ru:"▶ Начать урок",en:"▶ Start lesson"},"sched.continue":{ru:"▶ Продолжить",en:"▶ Continue"},"week.title":{ru:"Итоги недели",en:"Week Summary"},"week.promoted":{ru:"🏆 Карьера повышена!",en:"🏆 Promoted!"},"week.xp":{ru:"Получено опыта",en:"Experience gained"},"week.rep":{ru:"Изменение репутации",en:"Reputation change"},"week.money":{ru:"Зарплата",en:"Salary"},"week.sp":{ru:"Очки навыков",en:"Skill points"},"week.career":{ru:"Карьерный уровень",en:"Career level"},"week.bonus":{ru:"Надбавка:",en:"Bonus:"},"week.lessons":{ru:"Проведено уроков:",en:"Lessons taught:"},"week.next":{ru:"▶ Начать следующую неделю",en:"▶ Start next week"},"skills.title":{ru:"🌳 Дерево навыков",en:"🌳 Skill Tree"},"skills.points":{ru:"Очки навыков:",en:"Skill points:"},"skills.branch.pedagogy":{ru:"📚 Педагогика",en:"📚 Pedagogy"},"skills.branch.psychology":{ru:"🧠 Психология",en:"🧠 Psychology"},"skills.branch.org":{ru:"📋 Организация",en:"📋 Organization"},"skills.sp_unit":{ru:" SP",en:" SP"},"skills.unlocked":{ru:"открыто",en:"unlocked"},"skill.ped1.name":{ru:"Риторика",en:"Rhetoric"},"skill.ped1.desc":{ru:"Объяснения +20% внимания",en:"Explanations +20% attention"},"skill.ped2.name":{ru:"Мастер доски",en:"Board Master"},"skill.ped2.desc":{ru:"Доска +25% понимания",en:"Board +25% understanding"},"skill.ped3.name":{ru:"Сторителлинг",en:"Storytelling"},"skill.ped3.desc":{ru:"Примеры +35% мотивации",en:"Examples +35% motivation"},"skill.ped4.name":{ru:"Методист",en:"Methodologist"},"skill.ped4.desc":{ru:"Кулдауны действий −25%",en:"Action cooldowns −25%"},"skill.ped5.name":{ru:"Мастер-класс",en:"Master Class"},"skill.ped5.desc":{ru:"XP за объяснения ×1.5",en:"XP for explanations ×1.5"},"skill.psy1.name":{ru:"Эмпатия",en:"Empathy"},"skill.psy1.desc":{ru:"Похвала +25% внимания",en:"Praise +25% attention"},"skill.psy2.name":{ru:"Психолог",en:"Psychologist"},"skill.psy2.desc":{ru:"Тревожные учатся лучше",en:"Anxious students learn better"},"skill.psy3.name":{ru:"Мотиватор",en:"Motivator"},"skill.psy3.desc":{ru:"Задания +50% мотивации",en:"Tasks +50% motivation"},"skill.psy4.name":{ru:"Конфликтолог",en:"Conflict Resolver"},"skill.psy4.desc":{ru:"Конфликты −50% урона",en:"Conflicts −50% damage"},"skill.psy5.name":{ru:"Наставник",en:"Mentor"},"skill.psy5.desc":{ru:"Репутация растёт ×1.5",en:"Reputation grows ×1.5"},"skill.org1.name":{ru:"Тайм-мен.",en:"Time Manager"},"skill.org1.desc":{ru:"Фазы урока +10% XP",en:"Lesson phases +10% XP"},"skill.org2.name":{ru:"Планировщик",en:"Planner"},"skill.org2.desc":{ru:"Викторина +40% внимания",en:"Quiz +40% attention"},"skill.org3.name":{ru:"Администратор",en:"Administrator"},"skill.org3.desc":{ru:"Зарплата +10% в неделю",en:"Salary +10% per week"},"skill.org4.name":{ru:"Инноватор",en:"Innovator"},"skill.org4.desc":{ru:"Особые события ×2 XP",en:"Special events ×2 XP"},"skill.org5.name":{ru:"Директор",en:"Director"},"skill.org5.desc":{ru:"Разблокирует режим директора",en:"Unlocks Director mode"},"student.genius":{ru:"🧠 Отличник",en:"🧠 Genius"},"student.lazy":{ru:"😴 Лентяй",en:"😴 Lazy"},"student.bully":{ru:"😤 Хулиган",en:"😤 Bully"},"student.anxious":{ru:"😰 Тревожный",en:"😰 Anxious"},"student.helper":{ru:"🤝 Помощник",en:"🤝 Helper"},"student.average":{ru:"😊 Обычный",en:"😊 Average"},"remark.warning":{ru:"Дать замечание",en:"Give Warning"},"remark.confiscate":{ru:"Отобрать телефон",en:"Confiscate Phone"},"remark.wake":{ru:"Разбудить",en:"Wake Up"},"remark.praise":{ru:"Похвалить",en:"Praise"},"remark.dismiss":{ru:"Выгнать из класса",en:"Dismiss from Class"},"remark.warning_desc":{ru:"Предупредить за нарушение дисциплины",en:"Warn for discipline violation"},"remark.confiscate_desc":{ru:"Забрать телефон до конца урока",en:"Take phone until end of lesson"},"remark.wake_desc":{ru:"Разбудить спящего ученика",en:"Wake up sleeping student"},"remark.praise_desc":{ru:"Отметить усердие или ответ ученика",en:"Note effort or student answer"},"remark.dismiss_desc":{ru:"Выгнать за серьёзное поведение (-15 дисциплина)",en:"Dismiss for serious behavior (-15 discipline)"},"task.phase":{ru:"Фаза заданий",en:"Task Phase"},"task.choose_format":{ru:"Выберите формат задания",en:"Choose task format"},"task.format":{ru:"Формат:",en:"Format:"},"task.difficulty":{ru:"Сложность:",en:"Difficulty:"},"task.task_for_class":{ru:"Задание для класса:",en:"Task for class:"},"task.give_task":{ru:"Дать задание классу",en:"Give task to class"},"task.easy":{ru:"Лёгкое",en:"Easy"},"task.medium":{ru:"Среднее",en:"Medium"},"task.hard":{ru:"Сложное",en:"Hard"},"task.easy_desc":{ru:"Базовый уровень — проверка понимания. Справятся почти все.",en:"Basic level — understanding check. Almost everyone will succeed."},"task.medium_desc":{ru:"Средняя сложность — нужно подумать. Хорошие ученики справятся.",en:"Medium difficulty — needs thinking. Good students will succeed."},"task.hard_desc":{ru:"Высокий уровень — только отличники. Остальные могут запутаться.",en:"High level — only top students. Others may get confused."},"task.board":{ru:"У доски",en:"At Board"},"task.written":{ru:"Письменно",en:"Written"},"task.board_desc":{ru:"Вызовите ученика к доске. Повышает внимание хулиганов и лентяев.",en:"Call student to board. Increases attention of bullies and lazy students."},"task.written_desc":{ru:"Раздайте задание на бумаге. Каждый работает самостоятельно.",en:"Distribute paper task. Everyone works independently."},"prep.title":{ru:"Подготовка к уроку",en:"Lesson Preparation"},"prep.grade":{ru:"класс",en:"grade"},"prep.topic":{ru:"Тема:",en:"Topic:"},"prep.hw_submitted":{ru:"ДЗ сдали:",en:"HW submitted:"},"prep.hw_checked":{ru:"Проверено",en:"Checked"},"prep.how_start":{ru:"Как начнёте урок?",en:"How will you start the lesson?"},"prep.check_hw":{ru:"Проверить домашнее задание",en:"Check Homework"},"prep.check_hw_desc":{ru:"Открыть журнал ДЗ, выставить оценки каждому ученику",en:"Open HW journal, grade each student"},"prep.review":{ru:"Повторить тему",en:"Review Topic"},"prep.review_desc":{ru:"Освежить материал урока — первое объяснение станет точнее",en:"Refresh lesson material — first explanation will be more accurate"},"prep.bright_start":{ru:"Яркое начало",en:"Bright Start"},"prep.bright_desc":{ru:"Загадка или интригующий вопрос — класс сразу включается",en:"Riddle or intriguing question — class engages immediately"},"prep.quick_start":{ru:"Сразу к уроку",en:"Quick Start"},"prep.quick_desc":{ru:"Без подготовки. Никаких бонусов, зато быстрее.",en:"No preparation. No bonuses, but faster."},"prep.understanding":{ru:"понимание",en:"understanding"},"prep.attention":{ru:"внимание",en:"attention"},"hwcheck.title":{ru:"Проверка домашнего задания",en:"Homework Check"},"hwcheck.submitted":{ru:"Сдали:",en:"Submitted:"},"hwcheck.of":{ru:"из",en:"of"},"hwcheck.completed":{ru:"выполнили",en:"completed"},"hwcheck.done":{ru:"Выполнили — выставите оценку:",en:"Done — assign grade:"},"hwcheck.not_done":{ru:"Не выполнили — получат 2:",en:"Not done — will get F:"},"hwcheck.skip":{ru:"Не проверять",en:"Skip Check"},"hwcheck.finish":{ru:"Завершить проверку",en:"Finish Check"},"event.title":{ru:"Событие",en:"Event"},"event.continue":{ru:"Продолжить урок",en:"Continue Lesson"},"break.title":{ru:"Перемена!",en:"Break!"},"break.enter":{ru:"Нажмите E у двери класса чтобы войти раньше",en:"Press E at classroom door to enter early"},"break.remaining":{ru:"Перемена — осталось",en:"Break — remaining"},"break.sec":{ru:"сек.",en:"sec."},"break.enter_door":{ru:"E у двери — войти",en:"E at door — enter"},"vp.title":{ru:"Завуч",en:"Vice Principal"},"vp.day":{ru:"День",en:"Day"},"vp.go_to":{ru:"идите к",en:"go to"},"vp.room":{ru:"кабинету",en:"room"},"vp.inspection_complete":{ru:"Обход завершён",en:"Inspection Complete"},"vp.points":{ru:"Баллов:",en:"Points:"},"vp.rep":{ru:"Репут",en:"Rep"},"vp.promoted":{ru:"Вы назначены Директором школы!",en:"You are appointed School Director!"},"vp.wander":{ru:"Ходите по школе, смотрите за учениками",en:"Walk around school, watch students"},"director.title":{ru:"Директор",en:"Director"},"notif.saved":{ru:"Сохранено!",en:"Saved!"},"notif.settings_unavailable":{ru:"Настройки пока недоступны",en:"Settings not available yet"},"notif.got_warning":{ru:"получил замечание",en:"got warning"},"notif.phone_taken":{ru:"Телефон изъят",en:"Phone confiscated"},"notif.woke_up":{ru:"проснулся",en:"wooke up"},"notif.praised":{ru:"похвален!",en:"praised!"},"notif.dismissed":{ru:"выгнан из класса",en:"dismissed from class"},"notif.losing_attention":{ru:"Класс теряет внимание!",en:"Class is losing attention!"},"career.novice":{ru:"🌱 Новичок",en:"🌱 Novice"},"career.cat2":{ru:"📘 2-санат",en:"📘 Category 2"},"career.cat1":{ru:"📗 1-санат",en:"📗 Category 1"},"career.highest":{ru:"📙 Жоғары",en:"📙 Highest"},"career.honored":{ru:"🥇 Үздік",en:"🥇 Honored"},"career.zavuch":{ru:"🏛️ Завуч",en:"🏛️ Vice Principal"},"career.director":{ru:"👔 Директор",en:"👔 Director"},"ending.history":{ru:"Тарих жасалды",en:"History Made"},"ending.school_year":{ru:"Жыл мектебі!",en:"School Year!"},"ending.teacher_of":{ru:"мұғалімі",en:"Teacher of"},"ending.ministry":{ru:"Қазақстан Республикасы — Білім және ғылым министрлігі",en:"Republic of Kazakhstan — Ministry of Education and Science"},"ending.certificate":{ru:"Үздік педагог куәлігі",en:"Excellence in Teaching Certificate"},"ending.school":{ru:"Орта мектеп №47",en:"Secondary School No. 47"},"ending.weeks_work":{ru:"апта жұмыс",en:"weeks of work"},"ending.students_taught":{ru:"оқушы тәрбиеленді",en:"students taught"},"ending.avg_score":{ru:"орташа баллы",en:"average score"},"ending.school_rating":{ru:"Мектеп рейтингі",en:"School Rating"},"ending.total_earned":{ru:"Барлығы табылды",en:"Total Earned"},"ending.reputation":{ru:"Беделі",en:"Reputation"},"ending.subject":{ru:"Пән",en:"Subject"},"ending.career_path":{ru:"Мансап жолы",en:"Career Path"},"ending.career_title":{ru:"📈 Мансап жолы",en:"📈 Career Path"},"ending.continue":{ru:"Жалғастыру",en:"Continue"},"ending.new_game":{ru:"Жаңа ойын",en:"New Game"},"ending.best_school":{ru:"Сіздің мектебіңіз Қазақстанның үздік мектептерінің бірі атанды!",en:"Your school has become one of the best schools in Kazakhstan!"},"ending.students_improved":{ru:"оқушы сіздің жетекшіліктеріңізде білімін жетілдірді",en:"students improved their knowledge under your leadership"},"ending.true_victory":{ru:"Бұл — шын мағынасындағы жеңіс.",en:"This is a true victory."},"ending.reputation_spread":{ru:"Сіздің беделіңіз бүкіл ауданда жайылды",en:"Your reputation has spread throughout the district"},"ending.true_teacher":{ru:"шын мұғалімнің белгісі",en:"sign of a true teacher"},"ending.year_worked":{ru:"апта бойы сіз мектепті жетілдіруге жан аяусыз еңбек еттіңіз",en:"weeks you worked tirelessly to improve the school"},"ending.wont_forget":{ru:"Оқушылар сізді ұмытпайды",en:"Students will not forget you"},"ending.most_important":{ru:"Бұл ең маңызды нәрсе",en:"This is the most important thing"},"exam.title":{ru:"КОНТРОЛЬНАЯ РАБОТА",en:"QUIZ"},"exam.grade":{ru:"класс",en:"grade"},"exam.answer_correct":{ru:"Ответ: [показан верный ход решения]",en:"Answer: [correct solution shown]"},"exam.answer_partial":{ru:"Ответ: [частично верно, есть недочёты]",en:"Answer: [partially correct, has flaws]"},"exam.answer_wrong":{ru:"Ответ: [попытка, но допущены существенные ошибки]",en:"Answer: [attempt, but significant errors made]"},"exam.q.math.1":{ru:"Задача 1: Решите уравнение 3x² - 5x + 2 = 0",en:"Problem 1: Solve equation 3x² - 5x + 2 = 0"},"exam.q.math.2":{ru:"Задача 2: Найдите производную f(x) = x³ - 4x + 7",en:"Problem 2: Find derivative of f(x) = x³ - 4x + 7"},"exam.q.math.3":{ru:"Задача 3: Вычислите sin²α + cos²α при α = 30°",en:"Problem 3: Calculate sin²α + cos²α at α = 30°"},"exam.q.math.4":{ru:"Задача 4: Найдите корни: |x - 3| = 7",en:"Problem 4: Find roots: |x - 3| = 7"},"exam.q.math.5":{ru:"Задача 5: Логарифм: log₂(32) = ?",en:"Problem 5: Logarithm: log₂(32) = ?"},"exam.q.physics.1":{ru:"Задача 1: Скорость тела 20 м/с, время 5 сек. Найдите ускорение.",en:"Problem 1: Speed is 20 m/s, time is 5 s. Find acceleration."},"exam.q.physics.2":{ru:"Задача 2: Сила 10 Н, масса 2 кг. Найдите ускорение.",en:"Problem 2: Force is 10 N, mass is 2 kg. Find acceleration."},"exam.q.physics.3":{ru:"Задача 3: Найдите кинетическую энергию тела массой 4 кг при v=3 м/с.",en:"Problem 3: Find kinetic energy of a 4 kg body at v=3 m/s."},"exam.q.physics.4":{ru:"Задача 4: Электрический ток 2 А, сопротивление 5 Ом. Найдите напряжение.",en:"Problem 4: Current is 2 A, resistance is 5 Ω. Find voltage."},"exam.q.physics.5":{ru:"Задача 5: Длина волны 400 нм. Определите частоту.",en:"Problem 5: Wavelength is 400 nm. Find frequency."},"name.aibek":{ru:"Айбек",en:"Aibek"},"name.zarina":{ru:"Зарина",en:"Zarina"},"name.daniyar":{ru:"Данияр",en:"Daniyar"},"name.aysulu":{ru:"Айсұлу",en:"Aysulu"},"name.nurbolat":{ru:"Нұрболат",en:"Nurbolat"},"name.madina":{ru:"Мадина",en:"Madina"},"name.erlan":{ru:"Ерлан",en:"Erlan"},"name.gulnur":{ru:"Гүлнұр",en:"Gulnur"},"name.asel":{ru:"Асел",en:"Asel"},"name.ayaulym":{ru:"Аяулым",en:"Ayaulym"},"name.bekzat":{ru:"Бекзат",en:"Bekzat"},"name.azamat":{ru:"Азамат",en:"Azamat"},"name.tanirbek":{ru:"Тәңірбек",en:"Tanirbek"},"name.inkar":{ru:"Инкар",en:"Inkar"},"name.aruzan":{ru:"Арузан",en:"Aruzan"},"name.sabina":{ru:"Сабина",en:"Sabina"},"name.zhanserik":{ru:"Жансерік",en:"Zhanserik"},"name.aigerim":{ru:"Айгерім",en:"Aigerim"},"name.dilnaz":{ru:"Ділнәз",en:"Dilnaz"},"name.mukhametzhan":{ru:"Мұхамеджан",en:"Mukhametzhan"},"name.kenzhebek":{ru:"Кенжебек",en:"Kenzhebek"},"name.asyl":{ru:"Асыл",en:"Asyl"},"name.dauren":{ru:"Даурен",en:"Dauren"},"name.balzhan":{ru:"Балжан",en:"Balzhan"},"name.alibek":{ru:"Алибек",en:"Alibek"},"name.akmaral":{ru:"Акмарал",en:"Akmaral"},"name.nazim":{ru:"Нәзім",en:"Nazim"},"name.zulfiya":{ru:"Зұлфия",en:"Zulfiya"},"name.tolqyn":{ru:"Толқын",en:"Tolqyn"},"name.adem":{ru:"Адем",en:"Adem"},"ai.mood.attentive":{ru:"внимательный",en:"attentive"},"ai.mood.bored":{ru:"скучающий",en:"bored"},"ai.prompt.genius":{ru:"Ученик-отличник",en:"Straight-A student"},"ai.prompt.rebel":{ru:"Ученик-хулиган",en:"Rebel student"},"ai.prompt.shy":{ru:"Тихий ученик",en:"Shy student"},"ai.prompt.jester":{ru:"Ученик-шут",en:"Class clown"},"ai.fallback.genius":{ru:"Это неточно...",en:"That's not quite right..."},"ai.fallback.rebel":{ru:"Скукажуха.",en:"Boring..."},"ai.fallback.average":{ru:"Ок...",en:"Okay..."},"ai.fallback.shy":{ru:"...",en:"..."},"ai.fallback.jester":{ru:"Хаха!",en:"Haha!"}};let pa="en";function wm(s){pa=s}function Ps(){return pa}function W(s){const e=Sm[s];return e?e[pa]??e.ru??s:s}const qe={bg:"#060a14",panel:"#0D1117",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E"},Tm=[{id:"math",key:"subj.math",icon:"📐"},{id:"physics",key:"subj.physics",icon:"⚡"},{id:"chemistry",key:"subj.chemistry",icon:"🧪"},{id:"history",key:"subj.history",icon:"📜"},{id:"literature",key:"subj.literature",icon:"📖"},{id:"russian",key:"subj.russian",icon:"✍️"}],Am=[{id:"default",labelKey:"app.default",descKey:"app.default_desc",icon:"👔"},{id:"strict",labelKey:"app.strict",descKey:"app.strict_desc",icon:"🧑‍🏫"},{id:"cool",labelKey:"app.cool",descKey:"app.cool_desc",icon:"😎"}];class Cm{constructor(){T(this,"root");T(this,"onConfirm",null);T(this,"nameInput");T(this,"selectedSubject","math");T(this,"selectedGrades",new Set([7,8,9]));T(this,"selectedAppearance","default");T(this,"subjectBtns",new Map);T(this,"appearanceBtns",new Map);T(this,"gradeBtns",new Map);T(this,"card",null);T(this,"langToggle");this.root=document.createElement("div"),this.root.id="ew2-charselect",this.root.style.cssText=`
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
      `,i.dataset.lang=n,i.addEventListener("click",()=>{wm(n),this.refreshLangToggle(),this.rebuildCard()}),e.appendChild(i)}),this.langToggle=e,document.body.appendChild(e)}refreshLangToggle(){this.langToggle.querySelectorAll("button").forEach(e=>{const t=e.dataset.lang===Ps();e.style.background=t?qe.mint:"#0D1117",e.style.color=t?"#000":qe.muted})}rebuildCard(){const e=this.nameInput?.value??W("char.name_default");this.card&&this.card.remove(),this.subjectBtns.clear(),this.appearanceBtns.clear(),this.gradeBtns.clear(),this.buildUI(),this.nameInput&&(this.nameInput.value=e)}section(e){const t=document.createElement("div");t.style.cssText="display:flex; flex-direction:column; gap:10px;";const n=document.createElement("div");return n.style.cssText=`font-size:12px; color:${qe.muted}; text-transform:uppercase; letter-spacing:1px; font-weight:700;`,n.textContent=e,t.appendChild(n),[t,n]}buildUI(){const e=document.createElement("div");e.style.cssText=`
      background:${qe.panel}; border:1px solid ${qe.border}; border-radius:20px;
      padding:36px 40px; width:600px; max-width:96vw; display:flex; flex-direction:column; gap:24px;
    `,this.card=e;const t=document.createElement("div");t.style.cssText="text-align:center;",t.innerHTML=`
      <div style="font-size:13px; color:${qe.mint}; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:6px;">${W("char.badge")}</div>
      <h1 style="margin:0; font-size:28px; color:${qe.text}; font-weight:900;">${W("char.title")}</h1>
      <p style="margin:8px 0 0; font-size:14px; color:${qe.muted};">${W("char.subtitle")}</p>
    `,e.appendChild(t);const[n]=this.section(W("char.name_label"));this.nameInput=document.createElement("input"),this.nameInput.placeholder=W("char.name_ph"),this.nameInput.value=W("char.name_default"),this.nameInput.style.cssText=`
      padding:10px 14px; border-radius:8px; border:1px solid ${qe.border};
      background:#0D1117; color:${qe.text}; font-size:15px; font-family:inherit; width:100%; box-sizing:border-box;
    `,n.appendChild(this.nameInput),e.appendChild(n);const[i]=this.section(W("char.subject")),r=document.createElement("div");r.style.cssText="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;",Tm.forEach(u=>{const m=document.createElement("button");m.style.cssText=`padding:10px 8px; border-radius:8px; border:1px solid ${qe.border}; background:#0D1117; color:${qe.text}; cursor:pointer; font-size:13px; font-family:inherit; transition:all .15s;`,m.innerHTML=`<span style="display:block; font-size:20px;">${u.icon}</span>${W(u.key)}`,m.addEventListener("click",()=>this.selectSubject(u.id)),r.appendChild(m),this.subjectBtns.set(u.id,m)}),i.appendChild(r),e.appendChild(i);const a=Ps()==="ru"?"Классы (выберите 2–3)":"Grades (pick 2–3)",[o]=this.section(a),l=document.createElement("div");l.style.cssText="display:flex; gap:8px; flex-wrap:wrap;";for(let u=5;u<=11;u++){const m=document.createElement("button");m.textContent=`${u}`,m.style.cssText=`width:44px; height:44px; border-radius:8px; border:1px solid ${qe.border}; background:#0D1117; color:${qe.text}; cursor:pointer; font-size:14px; font-weight:700; font-family:inherit; transition:all .15s;`,m.addEventListener("click",()=>this.toggleGrade(u)),l.appendChild(m),this.gradeBtns.set(u,m)}o.appendChild(l),e.appendChild(o);const[c]=this.section(W("char.appearance")),d=document.createElement("div");d.style.cssText="display:flex; gap:10px;",Am.forEach(u=>{const m=document.createElement("button");m.style.cssText=`flex:1; padding:12px 8px; border-radius:10px; border:1px solid ${qe.border}; background:#0D1117; color:${qe.text}; cursor:pointer; font-size:13px; font-family:inherit; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;`,m.innerHTML=`<span style="font-size:26px;">${u.icon}</span><strong>${W(u.labelKey)}</strong><span style="font-size:11px; color:${qe.muted};">${W(u.descKey)}</span>`,m.addEventListener("click",()=>this.selectAppearance(u.id)),d.appendChild(m),this.appearanceBtns.set(u.id,m)}),c.appendChild(d),e.appendChild(c);const h=document.createElement("button");h.textContent=W("char.start"),h.style.cssText=`
      padding:14px; border-radius:10px; border:none; background:${qe.mint}; color:#000;
      font-size:16px; font-weight:900; cursor:pointer; font-family:inherit; transition:all .15s; margin-top:4px;
    `,h.addEventListener("mouseenter",()=>h.style.transform="scale(1.02)"),h.addEventListener("mouseleave",()=>h.style.transform=""),h.addEventListener("click",()=>this.confirm()),e.appendChild(h),this.root.appendChild(e),this.selectSubject(this.selectedSubject),this.refreshGradeBtns(),this.selectAppearance(this.selectedAppearance)}toggleGrade(e){if(this.selectedGrades.has(e))this.selectedGrades.size>1&&this.selectedGrades.delete(e);else{if(this.selectedGrades.size>=3){const t=this.selectedGrades.values().next().value;this.selectedGrades.delete(t)}this.selectedGrades.add(e)}this.refreshGradeBtns()}refreshGradeBtns(){this.gradeBtns.forEach((e,t)=>{const n=this.selectedGrades.has(t);e.style.borderColor=n?qe.gold:qe.border,e.style.background=n?qe.gold+"22":"#0D1117",e.style.color=n?qe.gold:qe.text})}selectSubject(e){this.selectedSubject=e,this.subjectBtns.forEach((t,n)=>{t.style.borderColor=n===e?qe.mint:qe.border,t.style.background=n===e?qe.mint+"18":"#0D1117",t.style.color=n===e?qe.mint:qe.text})}selectAppearance(e){this.selectedAppearance=e,this.appearanceBtns.forEach((t,n)=>{t.style.borderColor=n===e?"#BC8CFF":qe.border,t.style.background=n===e?"#BC8CFF18":"#0D1117"})}confirm(){const e=this.nameInput.value.trim()||W("char.name_default"),t=Array.from(this.selectedGrades).sort((n,i)=>n-i);this.onConfirm?.({name:e,subject:this.selectedSubject,grades:t,appearance:this.selectedAppearance})}open(e){this.onConfirm=e,this.root.style.display="flex"}close(){this.root.style.display="none",this.langToggle.style.display="none"}dispose(){this.root.remove(),this.langToggle.remove()}}const Jn=class Jn{constructor(){T(this,"listeners",new Map)}static getInstance(){return Jn.inst||(Jn.inst=new Jn),Jn.inst}on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t)}off(e,t){this.listeners.get(e)?.delete(t)}emit(e,t=null){this.listeners.get(e)?.forEach(n=>n(t))}};T(Jn,"inst");let tn=Jn;const Qn=class Qn{constructor(){T(this,"_gameMinutes",0);T(this,"_paused",!1);T(this,"accumMs",0);T(this,"REAL_MS_PER_GAME_MIN",4e3)}static getInstance(){return Qn.inst||(Qn.inst=new Qn),Qn.inst}get paused(){return this._paused}set paused(e){this._paused=e}tick(e){if(!this._paused)for(this.accumMs+=e;this.accumMs>=this.REAL_MS_PER_GAME_MIN;)this.accumMs-=this.REAL_MS_PER_GAME_MIN,this._gameMinutes++}get gameMinutes(){return this._gameMinutes}reset(e=0){this._gameMinutes=e,this.accumMs=0}getHHMM(){const e=480+this._gameMinutes,t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}};T(Qn,"inst");let Zr=Qn;const Nr="ew2_save",Br={teacherName:"",subject:"Математика",grade:7,reputation:50,experience:0,money:8e4,careerRank:"bez_kategorii",skillPoints:0,unlockedPerks:[],dayNumber:1,lessonCount:0,completedTopics:[]},ei=class ei{constructor(){T(this,"data",{...Br})}static getInstance(){return ei.inst||(ei.inst=new ei),ei.inst}load(){try{const e=localStorage.getItem(Nr);e&&(this.data={...Br,...JSON.parse(e)})}catch{}return this.data}save(e){this.data={...this.data,...e};try{localStorage.setItem(Nr,JSON.stringify(this.data))}catch{}}get(){return this.data}reset(){this.data={...Br},localStorage.removeItem(Nr)}};T(ei,"inst");let Jr=ei;class Xo{constructor(e,t=0,n=-5.48){T(this,"mesh");T(this,"ctx");T(this,"texture");T(this,"canvas");this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=320,this.ctx=this.canvas.getContext("2d"),this.texture=new da(this.canvas);const i=new An(8,2.5),r=new en({map:this.texture,roughness:.9});this.mesh=new xe(i,r),this.mesh.position.set(t,2.4,n),this.mesh.receiveShadow=!0,e.add(this.mesh);const a=new en({color:2759178,roughness:.8}),o=new $e(8.3,2.8,.06),l=new xe(o,a);l.position.set(t,2.4,n-.02),e.add(l),this.clear()}clear(){const{ctx:e,canvas:t}=this;e.fillStyle="#1a3d2b",e.fillRect(0,0,t.width,t.height),this.texture.needsUpdate=!0}writeText(e){this.clear();const{ctx:t}=this;t.fillStyle="#e8f5e9",t.textAlign="left",e.forEach((n,i)=>{const r=i===0?44:32;t.font=`${i===0?"bold":"normal"} ${r}px sans-serif`,t.fillText(n,40,60+i*(r+14))}),this.texture.needsUpdate=!0}}const Rm=3,Dm=5,Lm=2.6,Pm=2,Im=-4.8,Um=-1;function km(s,e,t){const n=new en({color:13150574,roughness:.8}),i=new en({color:9134912,roughness:.7}),r=new en({color:2771583,roughness:.7}),a=new xe(new $e(1.1,.06,.7),n);a.position.set(e,.76,t),a.castShadow=!0,a.receiveShadow=!0,s.add(a);const o=new fn(.03,.03,.74,6),l=[[-.45,-.28],[.45,-.28],[-.45,.28],[.45,.28]];for(const[f,p]of l){const S=new xe(o,i);S.position.set(e+f,.39,t+p),s.add(S)}const c=new xe(new $e(.5,.05,.5),r);c.position.set(e,.46,t+.62),s.add(c);const d=new xe(new $e(.5,.38,.05),r);d.position.set(e,.67,t+.86),s.add(d);const h=new fn(.025,.025,.44,6);for(const[f,p]of[[-.2,.42],[.2,.42],[-.2,.82],[.2,.82]]){const S=new xe(h,i);S.position.set(e+f,.24,t+p),s.add(S)}const u=new en({color:16119260,roughness:.9}),m=new xe(new $e(.22,.01,.28),u);m.position.set(e-.1,.795,t-.05),s.add(m);const g=new en({color:16763904,roughness:.6}),x=new xe(new fn(.01,.01,.22,6),g);return x.rotation.z=Math.PI/2,x.position.set(e+.28,.798,t-.05),s.add(x),new Cn(new R(e-.6,0,t-.42),new R(e+.6,1,t+.95))}function Fm(s,e=0,t=0){const n=[];for(let i=0;i<Rm;i++)for(let r=0;r<Dm;r++){const a=Im+r*Lm+e,o=Um+i*Pm+t,l=km(s,a,o);n.push({row:i,col:r,position:new R(a,0,o),collider:l})}return n}function Ws(s,e=-7.5,t=-3.5){const n=new en({color:10506797,roughness:.7}),i=new en({color:7027231,roughness:.7}),r=new xe(new $e(1.6,.07,.8),n);r.position.set(e,.8,t),r.castShadow=!0,r.receiveShadow=!0,s.add(r);const a=new fn(.04,.04,.78,8);for(const[d,h]of[[-.68,-.34],[.68,-.34],[-.68,.34],[.68,.34]]){const u=new xe(a,i);u.position.set(e+d,.41,t+h),s.add(u)}const o=new en({color:9116186,roughness:.7}),l=new xe(new $e(.55,.06,.55),o);l.position.set(e,.5,t+.72),s.add(l);const c=new xe(new $e(.55,.4,.06),o);return c.position.set(e,.73,t+.98),s.add(c),new Cn(new R(e-.9,0,t-.5),new R(e+.9,1.1,t+1.1))}const at=3.2,un=.15,Nm=1.3;function pn(s,e,t,n,i,r,a,o){const l=new xe(new $e(i,r,a),o);return l.position.set(e,t,n),l.castShadow=!0,l.receiveShadow=!0,s.add(l),new Cn(new R(e-i/2,0,n-a/2),new R(e+i/2,r,n+a/2))}function Bm(s,e,t,n,i,r,a,o){const l=[],c=Nm/2;return[[i,a-c],[a+c,r]].forEach(([h,u])=>{if(u<=h)return;const m=u-h,g=(h+u)/2;l.push(pn(s,g,at/2,n,m,at,un,e))}),l}function Ki(s,e,t,n,i,r,a,o,l,c){const d=(n+i)/2,h=(r+a)/2,u=i-n,m=a-r,g=[],x=new xe(new An(u,m),c.floor);x.rotation.x=-Math.PI/2,x.position.set(d,0,h),x.receiveShadow=!0,s.add(x);const f=new xe(new An(u,m),c.ceil);f.rotation.x=Math.PI/2,f.position.set(d,at,h),s.add(f);const p=l?r:a;g.push(pn(s,d,at/2,p,u,at,un,c.wall)),g.push(pn(s,n,at/2,h,un,at,m,c.wall)),g.push(pn(s,i,at/2,h,un,at,m,c.wall));const S=l?a:r,E=d,w=Bm(s,c.wall,"x",S,n,i,E);g.push(...w);let P=null;if(e.startsWith("room")){const U=l?r+.52:a-.52;P=new Xo(s,d,U)}const C=[];let A=null;if(e.startsWith("room")&&e!=="room103_npc"){const U=d,H=l?r+5:a-5;C.push(...Fm(s,U,H-2));const Z=d,L=l?r+1.4:a-1.4;A=Ws(s,Z,L),g.push(A);for(const N of C)g.push(N.collider)}if(e==="room103"){const U=l?r+.52:a-.52;P||(P=new Xo(s,d,U));const H=l?r+2:a-2,Z=Ws(s,d,H);g.push(Z)}const $=new R(E,0,o),_=new R(d,1.7,(r+a)/2),M=new R(E,1.7,o+(l?1.5:-1.5));return{id:e,label:t,doorPos:$,spawnInRoom:_,spawnInCorridor:M,deskInfos:C,blackboard:P,colliders:g}}class Om{constructor(){T(this,"scene");T(this,"rooms",new Map);T(this,"corridorColliders",[]);this.scene=new fm,this.scene.background=new Ve(12111848),this.scene.fog=new ca(12111848,20,50),this._buildCorridor(),this._buildRooms(),this._buildLighting()}_mat(e,t=.85){return new en({color:e,roughness:t})}_buildCorridor(){const e=this._mat(13154458),t=this._mat(15261648),n=this._mat(16052456),i=41,r=4,a=3.5,o=new xe(new An(i,r),e);o.rotation.x=-Math.PI/2,o.position.set(a,0,0),o.receiveShadow=!0,this.scene.add(o);const l=new xe(new An(i,r),n);l.rotation.x=Math.PI/2,l.position.set(a,at,0),this.scene.add(l),this.corridorColliders.push(pn(this.scene,-17,at/2,0,un,at,r,t)),this.corridorColliders.push(pn(this.scene,24,at/2,0,un,at,r,t));const c=this._mat(16777215);c.emissive=new Ve(16777215),c.emissiveIntensity=.6;for(const h of[-10,-2,8,18]){const u=new xe(new $e(6,.05,.18),c);u.position.set(h,at-.04,0),this.scene.add(u)}const d=this._mat(6982302);for(let h=0;h<6;h++){const u=new xe(new $e(.5,1.8,.4),d);u.position.set(20+h*.55,.9,1.6),u.castShadow=!0,this.scene.add(u)}}_buildRooms(){const e=this._mat(14735560),t=this._mat(12096874,.85),n=this._mat(16052456),i={wall:e,floor:t,ceil:n},r=this._mat(13945016,.9),a=this._mat(12626048,.8),o=this._mat(9134912,.7),l=Ki(this.scene,"room101","Кабинет 101",-15,-3,-11,-2,-2,!0,i);this.rooms.set("room101",l),this.corridorColliders.push(...l.colliders);const c=Ki(this.scene,"room102","Кабинет 102",0,12,-11,-2,-2,!0,i);this.rooms.set("room102",c),this.corridorColliders.push(...c.colliders);const d=Ki(this.scene,"room103","Кабинет 103",15,24,-11,-2,-2,!0,i);this.rooms.set("room103",d),this.corridorColliders.push(...d.colliders);const h=pn(this.scene,-1.5,at/2,-2,3,at,un,e),u=pn(this.scene,13.5,at/2,-2,3,at,un,e);this.corridorColliders.push(h,u);const m={wall:r,floor:a,ceil:n},g=Ki(this.scene,"staff","Учительская",-15,-3,2,11,2,!1,m);this._buildStaffRoom(g),this.rooms.set("staff",g),this.corridorColliders.push(...g.colliders);const x={wall:e,floor:o,ceil:n},f=Ki(this.scene,"principal","Кабинет директора",0,12,2,11,2,!1,x);this._buildPrincipalOffice(f),this.rooms.set("principal",f),this.corridorColliders.push(...f.colliders);const p=pn(this.scene,-1.5,at/2,2,3,at,un,e),S=pn(this.scene,18,at/2,2,24,at,un,e);this.corridorColliders.push(p,S)}_buildStaffRoom(e){const t=this._mat(8084538),n=this._mat(13937002),i=new xe(new $e(2.4,.55,.9),t);i.position.set(-9,.275,4.5),i.castShadow=!0,this.scene.add(i);const r=new xe(new $e(1,.45,.6),n);r.position.set(-9,.225,5.6),this.scene.add(r);const a=this._mat(15255690),o=new xe(new $e(2.5,1.5,.06),a);o.position.set(-9,2.2,2.55),this.scene.add(o),Ws(this.scene,-12,8),Ws(this.scene,-6,8)}_buildPrincipalOffice(e){const t=this._mat(6041102,.6),n=new xe(new $e(2.5,.08,1.2),t);n.position.set(6,.85,4.5),n.castShadow=!0,this.scene.add(n);const i=this._mat(3807750);for(const[h,u]of[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]]){const m=new xe(new fn(.05,.05,.84,8),i);m.position.set(6+h,.42,4.5+u),this.scene.add(m)}const r=this._mat(9109504,.6),a=new xe(new $e(.7,.1,.6),r);a.position.set(6,.5,5.5),this.scene.add(a);const o=new xe(new $e(.7,.7,.08),r);o.position.set(6,.85,5.8),this.scene.add(o);const l=this._mat(7027231),c=new xe(new $e(2,2.4,.4),l);c.position.set(10.5,1.2,6),c.castShadow=!0,this.scene.add(c);const d=new xe(new $e(.6,.4,.02),new en({color:16777215}));d.position.set(.6,2.8,2.58),this.scene.add(d)}_buildLighting(){this.scene.add(new Mm(16771280,.55));const e=new bm(16774608,.9);e.position.set(-8,10,0),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=20,e.shadow.camera.bottom=-20,e.shadow.camera.far=50,this.scene.add(e);for(const t of[-8,5,18]){const n=new $o(16775400,.7,16);n.position.set(t,at-.2,0),this.scene.add(n)}for(const[t,n]of[[-9,-6.5],[6,-6.5],[19.5,-6.5],[-9,6.5],[6,6.5]]){const i=new $o(16775400,.6,14);i.position.set(t,at-.3,n),this.scene.add(i)}}getRoomAt(e){for(const[,t]of this.rooms){const n=t.doorPos,i=n.z<0&&e.z<-1&&e.z>-12,r=n.z>0&&e.z>1&&e.z<12;if((i||r)&&e.x>(t.deskInfos.length>0?t.deskInfos[0].position.x-6:n.x-8)&&e.x<(t.deskInfos.length>0?t.deskInfos[t.deskInfos.length-1].position.x+6:n.x+8))return t}return null}getNearbyRoom(e,t=2.5){let n=null,i=1/0;for(const[,r]of this.rooms){const a=new De(e.x-r.doorPos.x,e.z-r.doorPos.z).length();a<t&&a<i&&(i=a,n=r)}return n}}const zm={genius:{hair:1710638,eye:4886745,skin:16106915,uniform:2771615},lazy:{hair:4008730,eye:8026746,skin:15782064,uniform:2771615},bully:{hair:9109504,eye:13378048,skin:15249552,uniform:2771615},anxious:{hair:4862048,eye:10181046,skin:16570816,uniform:2771615},helper:{hair:8081192,eye:2600544,skin:16106915,uniform:2771615},average:{hair:2960685,eye:5592422,skin:16106915,uniform:2771615}};function Hm(){const s=new Uint8Array([80,160,230]),e=new xm(s,3,1,wl);return e.minFilter=e.magFilter=wt,e.needsUpdate=!0,e}function Di(s,e){return new ym({color:s,gradientMap:e})}function Gm(s,e=1.07){const t=new ns({color:1118481,side:Bt}),n=new xe(s.geometry,t);return n.scale.setScalar(e),n}function Zi(s,e,t=1.07){s.add(e),s.add(Gm(e,t))}function Vm(s){const e=new Ji,t=Hm(),n=zm[s],i=Di(n.skin,t),r=Di(n.hair,t),a=Di(n.uniform,t),o=Di(1976890,t),l=Di(15790320,t),c=Di(1710618,t),d=new xe(new $e(.52,.6,.28),a);d.position.set(0,.72,0),d.castShadow=!0,Zi(e,d);const h=new xe(new $e(.3,.14,.3),l);h.position.set(0,.95,.01),e.add(h);const u=new xe(new fn(.09,.1,.14,8),i);u.position.set(0,1.06,0),e.add(u);const m=new $e(.44,.44,.38),g=new xe(m,i);if(g.position.set(0,1.37,0),g.castShadow=!0,Zi(e,g,1.055),s==="genius"||s==="anxious"){const M=new ns({color:2236962}),U=new $e(.13,.09,.02),H=new xe(U,M);H.position.set(-.12,1.375,.205),e.add(H);const Z=new xe(U,M);Z.position.set(.12,1.375,.205),e.add(Z);const L=new xe(new $e(.06,.015,.01),M);L.position.set(0,1.375,.208),e.add(L)}const x=document.createElement("canvas");x.width=64,x.height=40;const f=x.getContext("2d");f.fillStyle="#fff";for(const M of[8,36])f.beginPath(),f.ellipse(M+12,20,14,12,0,0,Math.PI*2),f.fill();f.fillStyle=`#${n.eye.toString(16).padStart(6,"0")}`;for(const M of[8,36])f.beginPath(),f.ellipse(M+12,20,10,10,0,0,Math.PI*2),f.fill();f.fillStyle="#111";for(const M of[8,36])f.beginPath(),f.ellipse(M+12,22,6,7,0,0,Math.PI*2),f.fill();f.fillStyle="#fff";for(const M of[8,36])f.beginPath(),f.arc(M+16,16,3,0,Math.PI*2),f.fill();const p=new da(x),S=new xe(new An(.36,.12),new ns({map:p,transparent:!0}));S.position.set(0,1.38,.195),e.add(S);const E=new xe(new $e(.5,.14,.42),r);E.position.set(0,1.63,0),Zi(e,E,1.04);const w=new xe(new $e(.12,.24,.38),r);w.rotation.z=.15,w.position.set(-.26,1.46,0),e.add(w);const P=w.clone();P.rotation.z=-.15,P.position.set(.26,1.46,0),e.add(P);const C=new xe(new $e(.42,.12,.08),r);C.position.set(0,1.55,.2),e.add(C);const A=new xe(new $e(.46,.34,.08),r);A.position.set(0,1.46,-.22),e.add(A);const $=new fn(.08,.07,.55,8);for(const M of[-1,1]){const U=new xe($,a);U.rotation.z=M*.18,U.position.set(M*.33,.62,0),U.castShadow=!0,Zi(e,U,1.08);const H=new xe(new ha(.075,8,8),i);H.position.set(M*.37,.31,0),e.add(H)}const _=new fn(.09,.08,.58,8);for(const M of[-1,1]){const U=new xe(_,o);U.position.set(M*.14,.13,0),U.castShadow=!0,Zi(e,U,1.08);const H=new xe(new $e(.18,.1,.24),c);H.position.set(M*.14,-.17,.04),e.add(H)}return s==="bully"&&e.scale.set(1.1,1.05,1.1),s==="lazy"&&e.scale.set(.97,.97,.97),e}function Wm(){const s=document.createElement("canvas");s.width=64,s.height=32;const e=new da(s),t=new Jl({map:e,transparent:!0,depthTest:!1}),n=new gm(t);return n.scale.set(.8,.4,1),n.position.set(0,1.95,0),n}function $m(s,e){const n=s.material.map,r=n.image.getContext("2d");r.clearRect(0,0,64,32),e&&(r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.roundRect(4,2,56,28,8),r.fill(),r.font="20px serif",r.textAlign="center",r.fillText(e,32,23)),n.needsUpdate=!0}const Xm={neutral:"",happy:"😊",bored:"😒",confused:"❓",sleeping:"💤",raising_hand:"✋",writing:"✏️",troubled:"😰",phone:"📱"};class qm{constructor(e,t){T(this,"data");T(this,"group");T(this,"emotionSprite");T(this,"animTime",0);T(this,"_emotion","neutral");T(this,"_seated",!0);T(this,"seatPosition",new R);this.data=e,this.group=Vm(e.type),this.emotionSprite=Wm(),this.group.add(this.emotionSprite),t.add(this.group)}placeat(e){this.seatPosition.copy(e),this.group.position.copy(e)}setEmotion(e){this._emotion!==e&&(this._emotion=e,$m(this.emotionSprite,Xm[e]))}get emotion(){return this._emotion}set seated(e){this._seated=e,e&&(this.group.position.copy(this.seatPosition),this.group.rotation.y=0,this.group.rotation.x=0,this.group.rotation.z=0)}get seated(){return this._seated}modifyStat(e,t){this.data.stats[e]=Math.max(0,Math.min(100,this.data.stats[e]+t))}update(e){this.animTime+=e*.001;const t=this.animTime;switch(this._emotion){case"writing":{const n=Math.sin(t*5.5),i=Math.abs(Math.sin(t*5.5))*.012;this.group.rotation.x=.1+i,this.group.rotation.z=n*.035,this.group.position.y=this.seatPosition.y+i*.4;break}case"sleeping":this.group.rotation.x=.04,this.group.rotation.z=.32+Math.sin(t*.9)*.05,this.group.position.y=this.seatPosition.y;break;case"phone":this.group.rotation.x=.18+Math.sin(t*.4)*.02,this.group.rotation.z=Math.sin(t*.3)*.015,this.group.position.y=this.seatPosition.y;break;case"happy":this.group.rotation.x=-.02+Math.sin(t*5.5)*.025,this.group.rotation.z=Math.sin(t*3.8)*.018,this.group.position.y=this.seatPosition.y+Math.abs(Math.sin(t*5.5))*.015;break;case"bored":this.group.rotation.x=-.05+Math.sin(t*.5)*.02,this.group.rotation.z=Math.sin(t*.6)*.06,this.group.position.y=this.seatPosition.y;break;case"confused":this.group.rotation.x=.02,this.group.rotation.z=Math.sin(t*1.8)*.08,this.group.position.y=this.seatPosition.y;break;case"raising_hand":this.group.rotation.x=-.06,this.group.rotation.z=Math.sin(t*1.5)*.012,this.group.position.y=this.seatPosition.y+.02+Math.sin(t*2)*.015;break;case"troubled":this.group.rotation.x=.04,this.group.rotation.z=Math.sin(t*9)*.025,this.group.position.y=this.seatPosition.y;break;default:this.group.rotation.x=0,this.group.rotation.z=0,this.group.position.y=this.seatPosition.y}}distanceTo(e){return this.group.position.distanceTo(e)}}function jm(s,e,t){return{id:s,name:e,type:t,stats:{...{genius:{understanding:75,attention:80,motivation:85,behavior:90},lazy:{understanding:35,attention:30,motivation:25,behavior:60},bully:{understanding:40,attention:45,motivation:40,behavior:20},anxious:{understanding:60,attention:70,motivation:55,behavior:85},helper:{understanding:65,attention:75,motivation:80,behavior:95},average:{understanding:55,attention:55,motivation:55,behavior:70}}[t]},hwDone:!0,notebookGrade:4,progressionScore:0}}let $s=0;function Pt(){$s++,document.pointerLockElement&&document.exitPointerLock()}function Tt(){$s=Math.max(0,$s-1)}function Ym(){return $s>0}const Km=4.5;class Zm{constructor(e){T(this,"camera");T(this,"bus",tn.getInstance());T(this,"keys",new Set);T(this,"euler",new ss(0,0,0,"YXZ"));T(this,"colliders",[]);T(this,"isLocked",!1);this.camera=e,this._setup()}setColliders(e){this.colliders=e}_setup(){document.addEventListener("click",()=>{!this.isLocked&&!Ym()&&document.body.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=!!document.pointerLockElement,this.bus.emit("pointerLockChange",this.isLocked)}),document.addEventListener("mousemove",e=>{if(!this.isLocked)return;const t=.0018;this.euler.setFromQuaternion(this.camera.quaternion),this.euler.y-=e.movementX*t,this.euler.x-=e.movementY*t,this.euler.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,this.euler.x)),this.camera.quaternion.setFromEuler(this.euler)}),document.addEventListener("keydown",e=>{if(e.code==="Tab"){e.preventDefault();return}if(e.code==="F1"){e.preventDefault(),document.pointerLockElement?document.exitPointerLock():document.body.requestPointerLock();return}this.keys.add(e.code),e.code==="KeyE"&&this.isLocked&&this.bus.emit("playerInteract",this.camera.position.clone())}),document.addEventListener("keyup",e=>{this.keys.delete(e.code)})}update(e){if(!this.isLocked)return;const t=e*.001,n=new R,i=new R;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new R().crossVectors(i,new R(0,1,0)).normalize();if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&n.add(i),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&n.sub(i),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&n.sub(r),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&n.add(r),n.lengthSq()===0)return;n.normalize();const a=this.camera.position.clone().addScaledVector(n,Km*t);a.y=1.7;const o=new Cn(new R(a.x-.22,0,a.z-.22),new R(a.x+.22,2,a.z+.22));let l=!1;for(const c of this.colliders)if(o.intersectsBox(c)){l=!0;break}l||this.camera.position.copy(a)}get locked(){return this.isLocked}exitLock(){document.exitPointerLock()}requestLock(){document.body.requestPointerLock()}}const ti=class ti{constructor(){T(this,"entries",[])}static getInstance(){return ti.inst||(ti.inst=new ti),ti.inst}add(e){this.entries.push(e)}getByStudent(e){return this.entries.filter(t=>t.studentId===e)}average(e){const t=this.getByStudent(e);return t.length?t.reduce((n,i)=>n+i.grade,0)/t.length:0}getByDay(e){return this.entries.filter(t=>t.lessonDay===e)}all(){return[...this.entries]}clear(){this.entries=[]}};T(ti,"inst");let Xs=ti;const ni=class ni{constructor(){T(this,"_classAttention",70);T(this,"bus",tn.getInstance())}static getInstance(){return ni.inst||(ni.inst=new ni),ni.inst}get value(){return this._classAttention}tick(e){this._classAttention=Math.max(0,this._classAttention-.4);const t=e.reduce((n,i)=>n+i.data.stats.attention,0)/e.length;this._classAttention=this._classAttention*.8+t*.2,this._classAttention=Math.max(0,Math.min(100,this._classAttention)),this.bus.emit("attentionChanged",{value:Math.round(this._classAttention)}),this._classAttention<30&&this.bus.emit("attentionWarning",null)}boost(e){this._classAttention=Math.min(100,this._classAttention+e),this.bus.emit("attentionChanged",{value:Math.round(this._classAttention)})}drop(e){this._classAttention=Math.max(0,this._classAttention-e),this.bus.emit("attentionChanged",{value:Math.round(this._classAttention)})}reset(){this._classAttention=70}};T(ni,"inst");let qs=ni;const Jm=[{subject:"math",gradeMin:7,gradeMax:8,topic:"ФСУ — формулы сокращённого умножения",options:[{label:"А) Теоретический вывод",text:`«ФСУ — тождества для ускоренного умножения.

  (a+b)² = a² + 2ab + b²
  (a−b)² = a² − 2ab + b²
  a²−b² = (a+b)(a−b)

Запомните все три. Они уже используются в ЕГЭ!»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-5}},{label:"Б) Шаг за шагом у доски",text:`«Шаг 1: (a+b)² = (a+b)·(a+b)
Шаг 2: Раскрываем: a·a + a·b + b·a + b·b
Шаг 3: a² + ab + ab + b² = a² + 2ab + b²
✏️ Запишите каждый шаг — через неделю будете делать автоматически.»`,understandingBase:10,attentionDelta:4,difficulty:"medium",typeBonus:{anxious:9,average:5,helper:3,genius:-2}},{label:"В) Пример с числами",text:`«Считаем 102² без калькулятора:
102² = (100+2)² = 10 000 + 400 + 4 = 10 404 ✔
Или 99² = (100−1)² = 10 000 − 200 + 1 = 9 801.
Попробуйте сами прямо сейчас: 51² = ?»`,understandingBase:8,attentionDelta:9,difficulty:"easy",typeBonus:{lazy:8,bully:6,average:4,helper:2,anxious:2}},{label:"Г) Вопрос классу",text:`«Кто напишет на доске (a+b)²?
Многие пишут a²+b² — это ошибка!
Проверка: (3+4)²=49, а 3²+4²=25. Почему разные?
Вот что пропали? Среднее слагаемое — 2ab!»`,understandingBase:7,attentionDelta:12,difficulty:"medium",typeBonus:{genius:13,bully:7,helper:5,lazy:4,anxious:-4}}],tasks:{easy:{text:"Назовите формулу (a+b)². Запишите в тетрадь.",hint:"(a+b)² = a² + 2ab + b²"},medium:{text:`Раскройте скобки и упростите:
(2x + 3)²`},hard:{text:`Разложите на множители:
8a³ + 27b³
(используйте куб суммы: a³+b³=(a+b)(a²−ab+b²))`}},homework:{easy:"Выучите три главные формулы ФСУ. Придумайте числовой пример к каждой.",medium:"Раскройте скобки: (3a−2b)², (x+5)², (4y−1)²",hard:"Докажите (a+b)³=a³+3a²b+3ab²+b³. Разложите: a³−8."}},{subject:"math",gradeMin:8,gradeMax:9,topic:"Квадратные уравнения",options:[{label:"А) Определение и дискриминант",text:`«ax²+bx+c=0 — стандартная форма.
Дискриминант: D = b²−4ac.
Если D>0 — два корня, D=0 — один, D<0 — нет корней.
Формула: x = (−b ± √D) / 2a»`,understandingBase:13,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:1,lazy:-7,bully:-6}},{label:"Б) Разбор примера у доски",text:`«Решим x²−5x+6=0
Шаг 1: a=1, b=−5, c=6
Шаг 2: D=25−24=1
Шаг 3: x=(5±1)/2 → x₁=3, x₂=2
Проверка: 3·2=6=c ✔, 3+2=5=−b/a ✔»`,understandingBase:11,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:9,average:5,helper:3,genius:-1}},{label:"В) Теорема Виета как лайфхак",text:`«Если x₁+x₂=−b/a и x₁·x₂=c/a — можно подбирать корни!
Пример: x²−7x+12=0 → x₁+x₂=7, x₁·x₂=12
Подбираем: 3 и 4 → 3+4=7, 3·4=12 ✔
Без формулы за 10 секунд!»`,understandingBase:9,attentionDelta:8,difficulty:"easy",typeBonus:{lazy:7,bully:5,average:4,helper:3}},{label:"Г) Где это нужно в жизни?",text:`«Архитектор считает размер арки. Физик — траекторию мяча. Программист — корни в алгоритмах.
Сейчас вы решите: при каком x площадь прямоугольника x(x−3)=10? Запишите уравнение.»`,understandingBase:7,attentionDelta:13,difficulty:"medium",typeBonus:{genius:10,bully:8,lazy:6,helper:4,anxious:-3}}],tasks:{easy:{text:"Найдите дискриминант: x²−6x+5=0",hint:"D = b²−4ac = 36−20 = 16"},medium:{text:"Решите уравнение: 2x²+3x−2=0"},hard:{text:"Составьте квадратное уравнение с корнями x₁=−3, x₂=5 и решите его."}},homework:{easy:"Найдите корни: x²−4=0, x²+6x+9=0.",medium:"Решите: 3x²−x−2=0, x²−5x−6=0.",hard:"Решите систему: x²+y²=25 и x+y=7."}},{subject:"math",gradeMin:7,gradeMax:7,topic:"Линейная функция и её график",options:[{label:"А) Определение y = kx + b",text:`«Линейная функция: y = kx + b.
k — наклон (угловой коэффициент),
b — точка пересечения с осью Y.
При k>0 — возрастание, k<0 — убывание.»`,understandingBase:11,attentionDelta:-2,difficulty:"medium",typeBonus:{genius:7,average:4,helper:4,lazy:-4,bully:-4,anxious:3}},{label:"Б) Строим график вместе",text:`«Строим y = 2x + 1:
Шаг 1: x=0 → y=1. Точка (0;1)
Шаг 2: x=1 → y=3. Точка (1;3)
Шаг 3: Проводим прямую через обе точки.
Всегда достаточно двух точек!»`,understandingBase:10,attentionDelta:6,difficulty:"easy",typeBonus:{anxious:8,average:6,bully:4,lazy:5,helper:3}},{label:"В) Угловой коэффициент — это крутизна",text:`«k = 10 — почти вертикальная гора.
k = 0.1 — пологий холм.
k = −2 — спуск.
k = 0 — горизонталь.
Кто назовёт: горка y=−3x+5 крутая?»`,understandingBase:8,attentionDelta:10,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:3}},{label:"Г) Где пересекутся две прямые?",text:`«y=2x+1 и y=−x+7 — где пересекаются?
Приравниваем: 2x+1=−x+7 → 3x=6 → x=2.
Подставляем: y=5. Точка (2;5).
→ Так решают системы уравнений!»`,understandingBase:8,attentionDelta:9,difficulty:"medium",typeBonus:{genius:11,helper:5,average:3,anxious:-2}}],tasks:{easy:{text:"Назовите k и b для функции y = 3x − 2.",hint:"k=3, b=−2"},medium:{text:"Постройте график функции y = −2x + 4 (2 точки и прямая)."},hard:{text:"Найдите точку пересечения прямых: y = 3x−1 и y = −x+7."}},homework:{easy:"Запишите три функции с k>0 и три с k<0.",medium:"Постройте графики: y=x+3, y=−2x+5.",hard:"При каком b прямая y=2x+b проходит через точку (3;7)?"}},{subject:"math",gradeMin:8,gradeMax:8,topic:"Теорема Пифагора",options:[{label:"А) Формулировка и доказательство",text:`«В прямоугольном треугольнике: a² + b² = c²
c — гипотенуза (напротив прямого угла).
Доказательство: площадь большого квадрата = квадратам по катетам.
Запомните: "Пифагоровы тройки" — 3,4,5 и 5,12,13.»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-5,bully:-4}},{label:"Б) Чертёж и расчёт",text:`«Катеты a=3, b=4. Найдём гипотенузу.
Шаг 1: c² = 3² + 4² = 9 + 16 = 25
Шаг 2: c = √25 = 5
Это "египетский треугольник" — его знали 4000 лет назад!»`,understandingBase:11,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3,genius:-1}},{label:"В) От Пифагора до GPS",text:`«GPS считает расстояния по "3D-Пифагору":
d = √(Δx²+Δy²+Δz²).
Архитекторы используют теорему при разметке фундамента.
Ещё: экран 16:9 — это Пифагор у вас в кармане!»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:3}},{label:"Г) Задача на время",text:`«Лестница 5 м стоит у стены. Нижний конец в 3 м от стены.
На какой высоте верхний?
√(5²−3²) = √16 = 4 м.
Кто решит: высота горы, если горизонт 10 км, радиус Земли 6400 км?»`,understandingBase:7,attentionDelta:11,difficulty:"medium",typeBonus:{genius:12,bully:6,helper:5,lazy:3,anxious:-2}}],badOption:{label:"Д) «Просто нарисуйте треугольник»",text:"«Зачем формулы? Возьмите линейку — нарисуйте треугольник, измерьте стороны. Этого вполне достаточно. Точность не так важна в жизни.»",understandingBase:-5,attentionDelta:5,difficulty:"easy",typeBonus:{bully:10,lazy:9,genius:-12,helper:-9,anxious:-7},isBad:!0},tasks:{easy:{text:"Катеты треугольника — 6 и 8. Найдите гипотенузу.",hint:"c = √(36+64) = 10"},medium:{text:"Гипотенуза прямоугольного треугольника равна 13, один катет — 5. Найдите второй катет."},hard:{text:"Диагональ прямоугольника 10 см, одна сторона 6 см. Найдите площадь прямоугольника."}},homework:{easy:"Найдите гипотенузу, если катеты: a) 3 и 4; б) 5 и 12.",medium:"Может ли треугольник со сторонами 5, 7, 9 быть прямоугольным? Обоснуйте.",hard:"Точки A(1,2) и B(4,6). Найдите расстояние AB через теорему Пифагора."}},{subject:"math",gradeMin:9,gradeMax:10,topic:"Тригонометрия. Синус, косинус, тангенс",options:[{label:"А) Определения через прям. треугольник",text:`«sin α = противолежащий катет / гипотенуза
cos α = прилежащий катет / гипотенуза
tg α = sin α / cos α = противол. / прилежащий.
Главное тождество: sin²α + cos²α = 1»`,understandingBase:13,attentionDelta:-4,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:2,lazy:-8,bully:-6}},{label:"Б) Единичная окружность",text:`«Рисуем окружность радиусом 1. Угол α от оси X.
Точка на окружности: (cos α, sin α).
sin 0°=0, cos 0°=1; sin 90°=1, cos 90°=0.
Mнение: sin²α+cos²α = 1 — расстояние от центра!»`,understandingBase:11,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:8,average:5,helper:3,genius:2}},{label:"В) Синус в музыке и физике",text:`«Звуковая волна — это синус! y = A·sin(ωt+φ).
Колебания маятника, ток в розетке (50 Гц), волны на воде.
Тригонометрия объясняет всё периодическое.»`,understandingBase:8,attentionDelta:13,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:4}},{label:"Г) Таблица значений — соревнование",text:`«Кто быстрее назовёт: sin 30°, cos 60°, tg 45°?
Подсказка: запомните 0°, 30°, 45°, 60°, 90°.
0, 1/2, √2/2, √3/2, 1 для синуса.
Эти значения встречаются в ЕГЭ каждый год!»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:12,bully:8,helper:5,lazy:3,anxious:-3}}],badOption:{label:"Д) «Используйте калькулятор всегда»",text:"«Зачем помнить sin и cos? Всегда есть калькулятор. Введите угол — получите ответ. Таблицы учить не нужно. Время ограничено.»",understandingBase:-4,attentionDelta:6,difficulty:"easy",typeBonus:{bully:10,lazy:12,genius:-10,helper:-8,anxious:-6},isBad:!0},tasks:{easy:{text:"В прямоугольном треугольнике гипотенуза = 10, угол = 30°. Найдите противолежащий катет.",hint:"a = c·sin30° = 10·0.5 = 5"},medium:{text:"Найдите: sin²45° + cos²45° (проверьте основное тождество)."},hard:{text:"Упростите выражение: (sin α + cos α)² − 1."}},homework:{easy:"Выучите значения sin/cos/tg для 0°, 30°, 45°, 60°, 90°.",medium:"Решите уравнение: sin x = 0.5 (найдите все решения на [0°; 360°]).",hard:"Докажите тождество: tg α + ctg α = 1/(sin α · cos α)."}},{subject:"math",gradeMin:8,gradeMax:9,topic:"Вероятность. Основные понятия",options:[{label:"А) Классическое определение",text:`«P(A) = m/n, где m — благоприятные исходы, n — всего возможных.
Всегда: 0 ≤ P(A) ≤ 1.
P(Ω) = 1 (достоверное), P(∅) = 0 (невозможное).
Если P(A)+P(не-A)=1 — события противоположны.»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-5}},{label:"Б) Монетка и кубик",text:`«Кубик: 6 граней. P(выпадет 3) = 1/6 ≈ 0.17 = 17%.
Монета: P(орёл) = 1/2 = 50%.
Карта из колоды 52: P(туз) = 4/52 = 1/13 ≈ 8%.
Попробуйте сами: P(чётное на кубике) = ?»`,understandingBase:11,attentionDelta:7,difficulty:"easy",typeBonus:{lazy:9,bully:8,average:6,helper:4}},{label:"В) Вероятность в жизни",text:`«Погода: "30% дождя" — значит из 10 похожих дней дождь в 3.
Медицина: вакцина 95% — значит защищает 95 из 100 привитых.
Страховые компании: считают вероятность аварии для каждого водителя!»`,understandingBase:8,attentionDelta:11,difficulty:"easy",typeBonus:{lazy:10,bully:7,average:5,helper:4}},{label:"Г) Парадокс монтера Холла",text:`«3 двери, за одной — приз. Вы выбрали №1. Ведущий открыл №3 — там коза. Менять ли выбор?
Ответ: ДА! P выиграть при смене = 2/3!
Почему? Обсудим вместе — это против интуиции.»`,understandingBase:6,attentionDelta:16,difficulty:"medium",typeBonus:{genius:14,bully:9,helper:6,lazy:7,anxious:-4}}],badOption:{label:"Д) «Вероятность ненаучна»",text:"«Честно говоря, вероятность — это гадание. Никто не знает точно, что произойдёт. Просто угадывайте. В жизни всё случайно, формулы не помогут.»",understandingBase:-7,attentionDelta:3,difficulty:"easy",typeBonus:{bully:11,lazy:10,genius:-13,helper:-10,anxious:-6},isBad:!0},tasks:{easy:{text:"В мешке 3 красных и 7 синих шаров. Какова вероятность вытащить красный?",hint:"P = 3/10 = 0.3"},medium:{text:"Монету подбросили 3 раза. Найдите вероятность выпадения ровно двух орлов."},hard:{text:"На 10 лотерейных билетов 3 выигрышных. Покупают 4 билета. Найдите P(хотя бы 1 выиграет)."}},homework:{easy:"Бросают кубик. Найдите P(больше 4), P(нечётное), P(кратное 3).",medium:"Из 5 карточек (1,2,3,4,5) достают 2. Найдите P(сумма > 6).",hard:"Задача: стреляют 2 раза по мишени. P попадания = 0.7 каждый раз. P(хотя бы одно попадание) = ?"}}],Qm=[{subject:"physics",gradeMin:8,gradeMax:9,topic:"Закон Ньютона и второй закон",options:[{label:"А) Формулировка трёх законов",text:`«I закон: тело покоится, если нет силы.
II закон: F = m·a — сила равна массе на ускорение.
III закон: действие = противодействие.
Запишите все три формулировки.»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-7,bully:-5}},{label:"Б) Задача на II закон у доски",text:`«Тело массой 2 кг разгоняется с a=3 м/с².
F = m·a = 2·3 = 6 Н.
Шаг 1 — записать «Дано».
Шаг 2 — выбрать формулу.
Шаг 3 — подставить числа.»`,understandingBase:11,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:9,average:6,helper:3}},{label:"В) Пример: лифт и весы",text:`«Вы стоите в лифте. Лифт едет вверх → вы тяжелее! Вниз → легче.
Почему? F=ma: при a↑ — сила N = mg+ma.
Если трос обрывается — невесомость: N=0.»`,understandingBase:9,attentionDelta:11,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:3}},{label:"Г) Эксперимент: толкни стол",text:`«Кто может сдвинуть стол одним пальцем?
По III закону, стол тоже давит на палец!
Если a=0 → сумма сил = 0 (I закон).
Как называется эта ситуация?»`,understandingBase:8,attentionDelta:14,difficulty:"medium",typeBonus:{bully:9,genius:10,lazy:7,helper:5,anxious:-3}}],tasks:{easy:{text:"Тело массой 5 кг имеет ускорение 2 м/с². Найдите приложенную силу.",hint:"F = m·a"},medium:{text:"Сила 30 Н действует на тело массой 6 кг. Найдите ускорение и скорость через 4 с."},hard:{text:"Труб масса 8 кг лежит на поверхности μ=0.3. Какая сила нужна для равномерного движения? (g=10)"}},homework:{easy:"Выучите три закона Ньютона и приведите пример для каждого.",medium:"Решите задачи: m=4кг, a=5м/с², F=? и F=20Н, m=2кг, a=?",hard:"Объясните, почему при прыжке с парашютом тело в итоге движется равномерно."}},{subject:"physics",gradeMin:8,gradeMax:9,topic:"Закон Ома. Последовательное и параллельное соединение",options:[{label:"А) Закон Ома: I = U/R",text:`«Ток I = U/R (Ом). U — напряжение, R — сопротивление.
При последовательном соединении: R = R₁+R₂, I одинаков.
При параллельном: 1/R = 1/R₁+1/R₂, U одинаково.»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:1,lazy:-8,bully:-6}},{label:"Б) Схема на доске",text:`«Рисуем: батарея 12В, R₁=3Ом, R₂=4Ом последовательно.
R=3+4=7 Ом.
I = U/R = 12/7 ≈ 1.7 А.
U₁ = I·R₁ = 5.1 В, U₂ = 6.9 В.
Проверка: 5.1+6.9=12 ✔»`,understandingBase:11,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3}},{label:"В) Бытовые приборы — это параллельно!",text:`«Почему при подключении третьего прибора автомат выбивает?
Все розетки — параллельно → суммарный ток растёт.
Колонка + чайник + фен = перегрузка.
Вот зачем автоматы!»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:6,helper:4}},{label:"Г) Вопрос: что опаснее?",text:`«Вопрос классу: при одном напряжении — большой или малый ток опаснее?
И почему провода греются? (I²R = мощность потерь)
Кто объяснит?»`,understandingBase:7,attentionDelta:13,difficulty:"medium",typeBonus:{genius:12,bully:7,helper:5,lazy:4,anxious:-4}}],tasks:{easy:{text:"U=12В, R=4Ом. Найдите ток I.",hint:"I = U/R"},medium:{text:"R₁=6Ом и R₂=3Ом соединены параллельно. Найдите общее сопротивление."},hard:{text:"Цепь: U=24В, R₁=2Ом (посл.) и R₂=6Ом||R₃=3Ом (пар.). Найдите I через каждый резистор."}},homework:{easy:"Запишите формулу закона Ома. Приведите два числовых примера.",medium:"Решите задачу: три резистора (2, 3, 6 Ом) — последовательно и параллельно. Найдите R.",hard:"При каком R электроплитка потребляет 2 кВт при напряжении 220В?"}},{subject:"physics",gradeMin:9,gradeMax:10,topic:"Основы термодинамики. Температура и тепло",options:[{label:"А) Температура и внутренняя энергия",text:`«Температура T (Кельвин) = скорость движения молекул.
Внутренняя энергия U = кинетическая + потенциальная молекул.
Q = c·m·ΔT — теплота; c — удельная теплоёмкость.
Q > 0 — тело нагревается, Q < 0 — остывает.»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-7,bully:-5}},{label:"Б) Пример: нагрев воды",text:`«Нагреем 0.5 кг воды на 20°C. c_воды = 4200 Дж/(кг·К).
Q = 4200 × 0.5 × 20 = 42 000 Дж = 42 кДж.
Чайник 2 кВт: t = Q/P = 42000/2000 = 21 сек.
Теперь знаете, почему чайник греет 2-3 минуты?»`,understandingBase:11,attentionDelta:7,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3}},{label:"В) Парниковый эффект — термодинамика",text:`«CO₂ задерживает инфракрасное излучение.
Планета не может остыть → температура растёт.
Это первое начало термодинамики ΔU = Q − A.
Физика объясняет климатический кризис!»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:9,bully:6,average:5,helper:4}},{label:"Г) Задача на заморозку",text:`«Кто объяснит: почему вода при замерзании РАСШИРЯЕТСЯ?
Bольшинство веществ сжимаются при охлаждении.
А вода — нет. Поэтому лёд плавает, трубы лопаются.
Обсудим: как это связано с движением молекул?»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:13,bully:8,helper:5,lazy:5,anxious:-3}}],badOption:{label:"Д) «Тепло — это просто горячо»",text:"«Термодинамика слишком сложная. Просто запомните: горячее — много тепла, холодное — мало. Формулы изучим потом, если выйдет.»",understandingBase:-5,attentionDelta:4,difficulty:"easy",typeBonus:{bully:10,lazy:9,genius:-11,helper:-9,anxious:-7},isBad:!0},tasks:{easy:{text:"Чему равна Q при нагреве 1 кг железа (c=460) на 50°C?",hint:"Q = c·m·ΔT = 460·1·50 = 23000 Дж"},medium:{text:"Смешали 0.2 кг воды при 80°C и 0.3 кг при 20°C. Найдите температуру смеси (c одинаков)."},hard:{text:"КПД двигателя η = 1 − T₂/T₁. Если T₁=600K, T₂=300K, найдите КПД и объясните его смысл."}},homework:{easy:"Рассчитайте, сколько тепла нужно для нагрева 2 кг воды от 20 до 100°C.",medium:"Объясните: почему металлические предметы на холоде кажутся холоднее деревянных?",hard:"Второе начало термодинамики — формулировки Клаузиуса и Томсона. Приведите по 2 примера."}}],eg=[{subject:"chemistry",gradeMin:8,gradeMax:9,topic:"Строение атома. Электронные оболочки",options:[{label:"А) Теория: ядро и электроны",text:`«Атом: ядро (протоны+нейтроны) + электронные оболочки.
Заряд ядра = порядковый номер элемента.
Оболочки: 1-я — max 2э, 2-я — max 8э, 3-я — max 18э.
Элементы раза периода = номер последней оболочки.»`,understandingBase:13,attentionDelta:-4,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:2,lazy:-8,bully:-6}},{label:"Б) Запись на доске: кислород",text:`«O: Z=8, масса=16.
Шаг 1: 8 протонов, 8 нейтронов.
Шаг 2: Заполняем оболочки: 1s²2s²2p⁴
Шаг 3: Последняя оболочка: 6 электронов → валентность II.
→ H₂O!»`,understandingBase:10,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3}},{label:"В) Почему благородные газы «ленивые»?",text:`«Гелий, неон, аргон не вступают в реакции.
Почему? Их оболочки полностью заполнены: He—2e, Ne—8e.
Все остальные элементы "хотят" достичь этого — отдают или принимают электроны.»`,understandingBase:8,attentionDelta:11,difficulty:"easy",typeBonus:{lazy:9,bully:6,average:5,helper:4}},{label:"Г) Загадка: кто есть кто?",text:`«Элемент с Z=11, 3 оболочки, 1 внешний электрон.
Он активный металл. Реагирует с водой. Назовите его!
Подсказка: есть в соли NaCl. Это…»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:12,bully:8,helper:5,lazy:5,anxious:-3}}],tasks:{easy:{text:"Сколько протонов у железа (Fe, Z=26)?",hint:"Число протонов = порядковый номер"},medium:{text:"Запишите электронную конфигурацию натрия (Na, Z=11)."},hard:{text:"Объясните, почему хлор в соединениях проявляет степени окисления −1, +1, +5, +7."}},homework:{easy:"Запишите строение атомов: H, He, Li, Be (в виде схемы).",medium:"Запишите электронные конфигурации: S, Ca, Al.",hard:"Объясните, чем изотопы отличаются от изобаров. Примеры."}},{subject:"chemistry",gradeMin:8,gradeMax:9,topic:"Кислоты и основания. Нейтрализация",options:[{label:"А) Определения и примеры",text:`«Кислоты — вещества, выделяющие H⁺: HCl, H₂SO₄, HNO₃.
Основания — выделяют OH⁻: NaOH, Ca(OH)₂.
Реакция нейтрализации: кислота + основание → соль + вода.
Например: HCl + NaOH = NaCl + H₂O»`,understandingBase:12,attentionDelta:-3,difficulty:"medium",typeBonus:{genius:7,helper:4,anxious:3,lazy:-5}},{label:"Б) Демонстрация pH — кислота/щёлочь",text:`«pH < 7 — кислая среда (желудочный сок = 2)
pH = 7 — нейтрально (чистая вода)
pH > 7 — щелочная (сода = 9, мыло = 10)
Показываем индикатором: красный → кислота.»`,understandingBase:9,attentionDelta:13,difficulty:"easy",typeBonus:{lazy:10,bully:8,average:6,helper:4}},{label:"В) Уравнение нейтрализации",text:`«H₂SO₄ + 2 NaOH = Na₂SO₄ + 2 H₂O
Шаг 1: Расставим коэффициенты.
Шаг 2: Проверим баланс: S=1, O=4+2→4+2 ✔, H=2+2→2 ✔
На что похоже? На уравнение в математике!»`,understandingBase:10,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3,genius:-1}},{label:"Г) Что будет, если смешать?",text:`«Уксус (кислота) + сода (щёлочь) = бурление.
Почему? CO₂ выделяется: H₂CO₃ → H₂O + CO₂↑
Это нейтрализация в быту — безопасная реакция.
Кто объяснит, почему тесто поднимается?»`,understandingBase:8,attentionDelta:15,difficulty:"easy",typeBonus:{lazy:10,bully:9,genius:8,helper:5,anxious:2}}],tasks:{easy:{text:"Назовите продукты реакции: HCl + NaOH = ?",hint:"NaCl + H₂O"},medium:{text:"Расставьте коэффициенты: H₃PO₄ + Ca(OH)₂ → Ca₃(PO₄)₂ + H₂O"},hard:{text:"Вычислите массу соли, образующейся при реакции 0.2 моль H₂SO₄ с достаточным количеством NaOH."}},homework:{easy:"Приведите по 2 примера кислот и оснований из повседневной жизни.",medium:"Составьте уравнения нейтрализации для: HNO₃+KOH, H₂SO₄+Ba(OH)₂.",hard:"Определите pH раствора 0.1 моль/л HCl. Объясните расчёт."}},{subject:"chemistry",gradeMin:8,gradeMax:9,topic:"Металлы и их химические свойства",options:[{label:"А) Ряд активности металлов",text:`«Li K Ca Na Mg Al Zn Fe Ni Sn Pb H Cu Ag Au
Металлы левее H — вытесняют водород из кислот.
Активные металлы (Na, K) реагируют с водой.
Аu, Ag — благородные, не окисляются.»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-7,bully:-5}},{label:"Б) Реакции металлов",text:`«Fe + 2HCl = FeCl₂ + H₂↑ (железо + кислота)
2Na + 2H₂O = 2NaOH + H₂↑ (натрий + вода!)
2Al + 6H₂SO₄(разб) = Al₂(SO₄)₃ + 3H₂↑
Запишите все три типа реакций.»`,understandingBase:10,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3}},{label:"В) Металлы вокруг нас",text:`«Алюминий — у вас в кармане (смартфон).
Железо+хром = нержавейка (столовые приборы).
Золото — в разъёмах ПК (лучший проводник).
Медь — в проводах вашей школы.»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:10,bully:7,average:5,helper:4}},{label:"Г) Вопрос: ржавчина или не ржавчина?",text:`«Почему нержавейка не ржавеет? (Вопрос классу)
Хром образует защитную оксидную плёнку.
А алюминий тоже окисляется — но плёнка Al₂O₃ защищает!
Обсудим: как защитить железный мост?»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:12,bully:8,helper:5,lazy:5,anxious:-3}}],badOption:{label:"Д) «Металлы все одинаковые»",text:"«Всё что блестит — металл. Химия у них похожая. Запомните: металлы проводят ток. Этого достаточно для ОГЭ.»",understandingBase:-6,attentionDelta:3,difficulty:"easy",typeBonus:{bully:11,lazy:10,genius:-12,helper:-10,anxious:-7},isBad:!0},tasks:{easy:{text:"Назовите три активных металла из ряда активности.",hint:"Li, K, Ca, Na, Mg..."},medium:{text:"Составьте уравнение реакции цинка с серной кислотой."},hard:{text:"Вычислите объём H₂ (н.у.), выделяющегося при растворении 13 г Zn в HCl."}},homework:{easy:"Выучите первые 7 металлов в ряду активности.",medium:"Напишите уравнения реакций: Ca+H₂O, Fe+HCl, Cu+HNO₃(конц).",hard:"Задача: смешали 5.6 г Fe и 3.2 г Cu с HCl. Сколько H₂ выделится?"}}],tg=[{subject:"history",gradeMin:9,gradeMax:9,topic:"Первая мировая война. Причины и начало",options:[{label:"А) Хронология и причины",text:`«1914—1918. Четыре главные причины:
1. Империализм — борьба за колонии
2. Союзы — Антанта vs Тройственный союз
3. Национализм
4. Гонка вооружений
Повод: убийство Франца Фердинанда 28.06.1914.»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-5}},{label:"Б) Карта: блоки стран",text:`«На доске рисуем карту Европы 1914 г.
Антанта: Россия + Франция + Великобритания (синие).
Тройственный союз: Германия + Австрия + Италия (красные).
Узкий коридор Балкан — запал войны.»`,understandingBase:10,attentionDelta:7,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:3,genius:-1}},{label:"В) Выстрел в Сараево — детали",text:`«Принц убит 28 июня 1914 г. в Сараево.
Гаврило Принцип — 19-летний серб-националист.
Австрия предъявила ультиматум Сербии.
Сербия отказала один пункт — достаточно для войны.
Так одна пуля изменила мир.»`,understandingBase:9,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:8,bully:7,average:5,genius:4}},{label:"Г) Дискуссия: можно ли было избежать?",text:`«Если бы Австрия не объявила войну, мировой войны не было бы?
А если бы убийства не произошло — нашёлся бы другой повод?
Высказывайтесь. Какой фактор главный?»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:13,bully:8,helper:6,lazy:5,anxious:-3}}],tasks:{easy:{text:"Назовите годы Первой мировой войны и два её участника.",hint:"1914—1918"},medium:{text:"Перечислите четыре причины Первой мировой войны. Объясните каждую одним предложением."},hard:{text:"Сравните блок Антанты и Тройственный союз: состав, цели, сильные и слабые стороны."}},homework:{easy:"Выучите состав Антанты и Тройственного блока.",medium:"Составьте хронологическую таблицу: ключевые даты июля-августа 1914 г.",hard:"Эссе (10 предложений): «Был ли неизбежен переход к мировой войне?»"}},{subject:"history",gradeMin:8,gradeMax:8,topic:"Реформы Петра I. Модернизация России",options:[{label:"А) Ключевые реформы списком",text:`«Пётр I (1682—1725):
• Армия: рекрутские наборы, регулярная армия
• Флот: основан в 1696
• Образование: школы, Академия наук (1724)
• Календарь: принят европейский
• Столица: Санкт-Петербург (1703)»`,understandingBase:12,attentionDelta:-4,difficulty:"hard",typeBonus:{genius:9,helper:5,anxious:3,lazy:-7,bully:-5}},{label:"Б) Пётр в Европе — «Великое посольство»",text:`«1697—1698: Пётр едет в Европу инкогнито под именем "Пётр Михайлов".
Работает плотником на верфи в Голландии.
Учится строить корабли, набирает мастеров.
Вернулся — сразу начал брить бороды боярам!»`,understandingBase:9,attentionDelta:13,difficulty:"easy",typeBonus:{lazy:9,bully:7,average:5,helper:4}},{label:"В) Таблица реформ на доске",text:`«До Петра → После Петра:
Армия: стрельцы → регулярная армия
Флот: нет → 800 кораблей
Одежда: кафтаны → европейское платье
Календарь: от сотворения мира → от Рождества Христова»`,understandingBase:10,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:4}},{label:"Г) Дискуссия: герой или тиран?",text:`«Пётр прорубил "окно в Европу" — или отрубил голову русской культуре?
Мнение 1: Россия стала великой державой.
Мнение 2: Реформы шли через насилие и крепостничество.
Ваша позиция?»`,understandingBase:7,attentionDelta:15,difficulty:"medium",typeBonus:{genius:13,bully:9,helper:6,lazy:5,anxious:-3}}],tasks:{easy:{text:"Приведите три реформы Петра I.",hint:"Армия, флот, образование"},medium:{text:"Заполните таблицу «До и после Петра» по 4 направлениям."},hard:{text:"Оцените реформы Петра: какие дали долгосрочный результат, а какие были вынужденными?"}},homework:{easy:"Запомните 5 дат правления и реформ Петра I.",medium:"Составьте рассказ о «Великом посольстве» (6–8 предложений).",hard:"Сравните реформы Петра I и реформы Александра II по плану: цели, методы, итоги."}},{subject:"history",gradeMin:9,gradeMax:11,topic:"Великая Отечественная война. Ключевые события",options:[{label:"А) Хронология и этапы",text:`«ВОВ 1941–1945.
Этап 1 (1941–42): отступление, Ленинград, Москва.
Этап 2 (1942–43): перелом — Сталинград, Курск.
Этап 3 (1944–45): наступление, освобождение, Берлин.
9 мая 1945 — День Победы.»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-4}},{label:"Б) Сталинградская битва — перелом",text:`«Сталинград (авг.1942 – февр.1943): 200 дней боёв.
Котёл: окружена армия Паулюса (330 тыс. чел.).
Итог: первая крупная победа СССР → коренной перелом.
После 1943 — инициатива перешла к СССР навсегда.»`,understandingBase:11,attentionDelta:6,difficulty:"medium",typeBonus:{anxious:7,average:6,helper:3}},{label:"В) Личные истории бойцов",text:`«Сержант Яков Павлов защищал один дом в Сталинграде 58 дней.
"Дом Павлова" стал символом стойкости.
В среднем советский солдат ежедневно отвоёвывал 400м².
Цена Победы — 27 миллионов жизней.»`,understandingBase:8,attentionDelta:14,difficulty:"easy",typeBonus:{lazy:9,bully:8,average:6,helper:4}},{label:"Г) Что было бы, если бы...",text:`«Вопрос классу: могла ли Германия победить?
Спорные факторы: климат, ленд-лиз, партизаны, ресурсы.
Что стало главной ошибкой Гитлера?
Обсудим — это поможет понять значение победы.»`,understandingBase:7,attentionDelta:15,difficulty:"medium",typeBonus:{genius:13,bully:9,helper:6,lazy:6,anxious:-4}}],badOption:{label:"Д) «Это всё давно известно»",text:"«ВОВ — тема избитая. Вы всё это уже видели в кино. Просто пересмотрите сериал, это лучше любого урока. Зачем учить даты?»",understandingBase:-4,attentionDelta:8,difficulty:"easy",typeBonus:{bully:10,lazy:11,genius:-9,helper:-8,anxious:-5},isBad:!0},tasks:{easy:{text:"Назовите три ключевых сражения ВОВ с датами.",hint:"Москва (1941), Сталинград (1942–43), Курск (1943)"},medium:{text:'Объясните суть "коренного перелома" в ВОВ. Когда и почему он произошёл?'},hard:{text:"Сравните Первую и Вторую мировую войны: причины, масштаб, итоги (план из 5 пунктов)."}},homework:{easy:"Запомните ключевые даты ВОВ: начало, Сталинград, Курск, конец.",medium:"Напишите об одном герое ВОВ (5–7 предложений): кто он, что совершил.",hard:'Эссе: "Значение Победы в ВОВ для современной России" (200 слов).'}}],ng=[{subject:"literature",gradeMin:10,gradeMax:10,topic:"Образ Раскольникова в «Преступлении и наказании»",options:[{label:"А) Теория «двойника» и «разрыв»",text:`«Раскольников делит людей на два типа:
— «Твари дрожащие» — живут по законам
— «Властелины» — могут преступить закон
Он проверяет: к какому типу относится сам?
Наказание — не тюрьма, а угрызения совести.»`,understandingBase:13,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:10,helper:4,anxious:2,lazy:-6,bully:-5}},{label:"Б) Аналогия: теория и жизнь",text:`«Теория на бумаге звучала логично.
Но убив старуху, Раскольников убивает и беременную Лизавету.
Это не было в плане. Вот где теория рухнула.
Почему «хорошие» идеи могут привести к злу?»`,understandingBase:9,attentionDelta:13,difficulty:"medium",typeBonus:{genius:8,bully:6,lazy:5,helper:4,anxious:3}},{label:"В) Цитаты Раскольникова",text:`«"Я не старушонку убил — я себя убил."
"Тварь ли я дрожащая или право имею?"

Что значит «убить себя»?
Герой разрушил собственную личность, переступив черту.»`,understandingBase:10,attentionDelta:9,difficulty:"medium",typeBonus:{anxious:8,average:6,helper:5,genius:4}},{label:"Г) Вопрос классу: а вы бы смогли?",text:`«Если бы убийство плохого человека спасло 100 невинных — это преступление?
Достоевский отвечает: да. Потому что...
Высказывайтесь — мы ищем ответ Достоевского вместе.»`,understandingBase:7,attentionDelta:16,difficulty:"easy",typeBonus:{bully:10,genius:12,lazy:7,helper:6,anxious:-2}}],tasks:{easy:{text:"Как Раскольников делит людей? Кто такие «твари дрожащие»?",hint:'Из его теории об "обыкновенных" и "необыкновенных"'},medium:{text:"Опишите психологическое состояние Раскольникова после убийства и объясните почему оно изменилось."},hard:{text:"Напишите мини-эссе: «Что символизирует признание Раскольникова Соне?» (5–7 предложений)"}},homework:{easy:"Выпишите 3 цитаты Раскольникова и объясните каждую одним предложением.",medium:"Сравните Раскольникова и Соню: их жизненные позиции (таблица).",hard:"Эссе «Могла ли теория Раскольникова быть правдой?» (10+ предложений)."}},{subject:"literature",gradeMin:9,gradeMax:9,topic:"«Мёртвые души» Гоголя. Образы и смысл",options:[{label:"А) Сюжет и замысел",text:`«Чичиков скупает «мёртвые души» — умерших крестьян по ревизским сказкам.
Цель: заложить их и получить деньги.
Гоголь хотел написать 3 тома — Ад (т.1), Чистилище, Рай.
Т.2 сжёг сам — идеального героя создать не мог.»`,understandingBase:12,attentionDelta:-2,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-6,bully:-4}},{label:"Б) Галерея помещиков",text:`«Манилов — мечтатель без дела.
Коробочка — хозяйственная, но тупая.
Ноздрёв — хвастун и лгун.
Собакевич — упрямый медведь.
Плюшкин — скупец, которого Гоголь жалеет.
От маниловщины до плюшкинства — деградация!»`,understandingBase:11,attentionDelta:7,difficulty:"medium",typeBonus:{anxious:8,average:5,helper:3}},{label:"В) Лирические отступления",text:`««Русь! Русь! Вижу тебя...» — Гоголь верит в Россию.
Отступления нужны, чтобы показать: за пошлостью есть душа народа.
Тройка в конце — это движение России вперёд.
Куда летит? Гоголь сам не знал...»`,understandingBase:8,attentionDelta:11,difficulty:"easy",typeBonus:{lazy:8,bully:6,average:5,helper:4}},{label:"Г) Кто из помещиков — вы?",text:`«Тест классу: каждый — Манилов, Коробочка, Ноздрёв, Собакевич или Плюшкин?
Опишите черты своего типа.
Почему Гоголь назвал поэму именно так — со скрытым смыслом.
Обсудим: кто "живая", а кто "мёртвая" душа?»`,understandingBase:7,attentionDelta:16,difficulty:"medium",typeBonus:{genius:12,bully:10,helper:7,lazy:8,anxious:-3}}],badOption:{label:"Д) «Пересказ по интернету»",text:'«"Мёртвые души" — длинно и скучно. Достаточно прочитать краткое содержание онлайн. Зачем тратить время на оригинал?»',understandingBase:-5,attentionDelta:5,difficulty:"easy",typeBonus:{bully:11,lazy:13,genius:-11,helper:-9,anxious:-6},isBad:!0},tasks:{easy:{text:"Назовите 5 помещиков из «Мёртвых душ» и одну черту каждого."},medium:{text:"Объясните, почему поэма называется «Мёртвые души». Двойной смысл."},hard:{text:"Мини-эссе: «Что объединяет Чичикова и помещиков?» (5–7 предложений)."}},homework:{easy:"Выпишите цитату о каждом помещике. Объясните характер одним словом.",medium:"Напишите: за что Гоголь любит и ненавидит Россию в тексте поэмы.",hard:"Сравните Чичикова с каким-либо современным типом людей. Аргументируйте."}}],ig=[{subject:"russian",gradeMin:7,gradeMax:8,topic:"Деепричастный оборот. Знаки препинания",options:[{label:"А) Определение и правило",text:`«Деепричастный оборот (ДО) — деепричастие с зависимыми словами.
Выделяется запятыми с обеих сторон ВСЕГДА, кроме...
Исключение: устойчивые выражения (сложа руки, не зная броду).
Вопросы: Что делая? Что сделав?»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:8,helper:4,anxious:3,lazy:-7,bully:-5}},{label:"Б) Схема разбора на доске",text:`«Предложение: «Прочитав книгу, он лёг спать.»
Шаг 1: Найдём ДО — «прочитав книгу» (что сделав?)
Шаг 2: Отделяем запятой — стоит в начале → запятая после.
Шаг 3: Нельзя убрать книгу из оборота.»`,understandingBase:11,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:9,average:6,helper:3}},{label:"В) Смешные ошибки",text:`«"Подходя к станции, у меня слетела шляпа." — ОШИБКА!
Кто подходил? Шляпа? Нет — автор.
ДО должен относиться к подлежащему.
Правильно: "Когда я подходил к станции, у меня слетела шляпа."»`,understandingBase:9,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:10,bully:8,average:6,helper:4}},{label:"Г) Найдите ошибку в предложениях",text:`«Я прочитаю три предложения — найдите ошибку в расстановке знаков:
1. "Читая книгу он заснул."
2. "Он учился, не зная усталости."
3. "Упав на пол тарелка разбилась."
Поднимите руку, кто нашёл все три!»`,understandingBase:8,attentionDelta:14,difficulty:"medium",typeBonus:{genius:11,bully:7,helper:6,lazy:4,anxious:-2}}],tasks:{easy:{text:`Найдите деепричастный оборот и расставьте запятые:
«Выйдя из дома он направился в школу»`,hint:"«Выйдя из дома» — ДО в начале, запятая после"},medium:{text:"Расставьте знаки и объясните: «Он стоял у окна задумчиво смотря на улицу»"},hard:{text:"Составьте 3 своих предложения с деепричастными оборотами в разных позициях."}},homework:{easy:"Найдите деепричастные обороты в 5 предложениях учебника и объясните знаки.",medium:"Перепишите 5 предложений, исправив ошибки в употреблении ДО.",hard:"Напишите мини-текст (7 предложений) с 3 деепричастными оборотами."}},{subject:"russian",gradeMin:8,gradeMax:9,topic:"Сложноподчинённые предложения",options:[{label:"А) Определение и виды придаточных",text:`«СПП = главное предложение + придаточное (союзом или союзным словом).
Виды: определительные (который), изъяснительные (что/как), обстоятельственные (когда/если/хотя).
Запятая перед союзом всегда!»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:9,helper:4,anxious:2,lazy:-7,bully:-6}},{label:"Б) Схема и стрелки на доске",text:`«"Я знал(ГЛ), что он придёт(ПРИД)." — изъяснительное
Вопрос от ГЛ к прид: знал — что? — придёт
Союз "что" → запятая перед ним.
Договоримся: всегда рисуем схему [ГЛ], (союз прид)»`,understandingBase:10,attentionDelta:5,difficulty:"medium",typeBonus:{anxious:9,average:6,helper:3}},{label:"В) Примеры из книг",text:`«Пушкин: "Я помню чудное мгновенье, когда ты появилась предо мной."
Придаточное времени — когда.
Определяет КОГДА он помнит.
Тургенев тоже любил СПП — проверьте сами!»`,understandingBase:9,attentionDelta:10,difficulty:"easy",typeBonus:{lazy:8,average:5,helper:4,bully:4}},{label:"Г) Соревнование: перевести ПП в СПП",text:`«Простое предложение: "Утром выпал снег."
Сложноподчинённое: "Когда наступило утро, выпал снег."
Ваш вариант с союзом "после того как"?
Кто предложит самый красивый?»`,understandingBase:8,attentionDelta:13,difficulty:"medium",typeBonus:{genius:11,bully:6,helper:5,lazy:4,anxious:-3}}],tasks:{easy:{text:"Назовите вид придаточного: «Я не знал, где живёт Коля.»",hint:"Изъяснительное (вопрос: не знал — чего? — где живёт)"},medium:{text:`Расставьте знаки и определите вид придаточного:
«Когда закончился урок все вышли в коридор»`},hard:{text:"Составьте по одному СПП каждого вида: определительное, изъяснительное, обстоятельственное."}},homework:{easy:"Найдите 5 СПП в любом тексте, подчеркните союзы.",medium:"Составьте 5 СПП разных видов с расстановкой знаков.",hard:"Преобразуйте 5 простых предложений в сложноподчинённые трёмя разными способами каждое."}},{subject:"russian",gradeMin:7,gradeMax:8,topic:"Причастный оборот. Правописание причастий",options:[{label:"А) Причастие и оборот",text:`«Причастие = прилагательное + глагол.
Отвечает: какой? что делающий? что сделавший?
Причастный оборот (ПО) = причастие + зависимые слова.
Обособляется, если стоит ПОСЛЕ определяемого слова.»`,understandingBase:12,attentionDelta:-3,difficulty:"hard",typeBonus:{genius:8,helper:4,anxious:3,lazy:-7,bully:-6}},{label:"Б) Место имеет значение",text:`«ПОСЛЕ — запятая: "Мальчик, бежавший по улице, упал."
ДО — нет запятой: "Бежавший по улице мальчик упал."
Мнемоника: "Если оборот ДОГОНЯЕТ слово — выделяем."
Запишем три примера на доске.»`,understandingBase:10,attentionDelta:7,difficulty:"medium",typeBonus:{anxious:9,average:6,helper:3}},{label:"В) Найди ошибку в книге",text:`«Откроем любую страницу — найдём причастный оборот!
Война и мир: "войска, отступавшие по дороге..." — ПО ПОСЛЕ!
Пушкин: "давно читанный роман" — ДО! — нет запятой.
Это правило работает в любом тексте.»`,understandingBase:8,attentionDelta:12,difficulty:"easy",typeBonus:{lazy:8,bully:5,average:5,helper:4}},{label:"Г) Состязание у доски",text:`«Расставьте запятые: "Ребёнок любивший читать книги вечером засыпал быстро."
Кто первый правильно? Почему именно так?
А теперь: передвиньте оборот в начало — что изменится?»`,understandingBase:7,attentionDelta:14,difficulty:"medium",typeBonus:{genius:12,bully:8,helper:5,lazy:4,anxious:-3}}],badOption:{label:"Д) «Ставьте запятые на слух»",text:"«Причастный оборот сложный. Просто читайте вслух — где голос понижается, там запятая. Правила учить необязательно, главное — чувствовать язык.»",understandingBase:-6,attentionDelta:4,difficulty:"easy",typeBonus:{bully:11,lazy:12,genius:-10,helper:-9,anxious:-7},isBad:!0},tasks:{easy:{text:`В каком предложении нужна запятая?
А) Прочитанная вчера книга оказалась интересной.
Б) Книга прочитанная вчера оказалась интересной.`,hint:"Б — оборот после определяемого слова"},medium:{text:'Расставьте знаки: "Птицы заполнившие небо летели на юг." Объясните.'},hard:{text:"Составьте 3 предложения с причастным оборотом (до/после/внутри определяемого слова)."}},homework:{easy:"Найдите 5 причастных оборотов в любом тексте. Выпишите с расстановкой запятых.",medium:'Перепишите, выделяя причастные обороты: "Дорога ведущая к морю была узкой." (3 варианта).',hard:"Напишите текст (7–8 предложений) с 4 причастными оборотами — правильно расставьте знаки."}}],qo=[...Jm,...Qm,...eg,...tg,...ng,...ig];function sg(s,e,t){const n=qo.filter(i=>i.subject===s&&i.gradeMin<=e&&i.gradeMax>=e&&!t.includes(i.topic));if(n.length===0){const i=qo.filter(r=>r.subject===s&&r.gradeMin<=e&&r.gradeMax>=e);return i.length===0?null:i[Math.floor(Math.random()*i.length)]}return n[Math.floor(Math.random()*n.length)]}const rg={math:["Квадратные уравнения","Производная","Теорема Пифагора","Тригонометрия","Логарифмы","Прогрессии"],physics:["Законы Ньютона","Закон Ома","Термодинамика","Оптика","Ядерная физика"],chemistry:["Строение атома","ОВР","Типы химических связей","Органическая химия"],history:["Первая мировая война","Революция 1917","ВОВ","Эпоха Просвещения"],literature:["Образ Раскольникова","Мёртвые души","Пушкин","Шекспир"],russian:["Причастный оборот","СПП","Виды глагола","Правописание приставок"]},ag={theory:"📖",board:"📋",example:"💡",question:"❓"},jo={math:["Неверный знак при раскрытии скобок","Ошибка в порядке действий","Деление на ноль","Пропущен модуль","Неверная формула","Арифметическая ошибка","Не записан ответ"],physics:["Не указаны единицы измерения","Ошибка в формуле","Неверный перевод единиц","Пропущен чертёж","Знак направления вектора"],chemistry:["Неверный коэффициент","Ошибка в формуле вещества","Потеря электрона в уравнении","Неверное название"],history:["Неверная дата","Перепутан исторический деятель","Неточная периодизация","Неверное название события"],literature:["Неправильная цитата","Перепутаны персонажи","Неверный автор произведения"],russian:["Пропущена запятая","Неверное написание слова","Ошибка в склонении","Неверный разбор предложения"],default:["Пропущено слово","Неразборчивый почерк","Не указан пример","Грамматическая ошибка"]},Yo={math:[["Дано:","x²+5x+6=0","Решение: (x+2)(x+3)=0","x₁=−2, x₂=−3"],["f(x)=3x²−2x+1","f'(x)=6x−2","f'(2)=10"],["S=n/2·(2a₁+(n-1)d)","n=10, a₁=2, d=3","S=155"]],physics:[["I=U/R=12/4=3 А","Ответ: I=3 А"],["F=ma=2×5=10 Н","Ответ: F=10 Н"],["v=√(2gh)=20 м/с","t=√(2h/g)=2 с"]],chemistry:[["2H₂+O₂→2H₂O","Тип: соединение"],["1s²2s²2p⁶3s²3p⁴","Ст. окисления: −2,+4,+6"],["n=m/M=0.2 моль","N=1.2×10²³"]],history:[["1914—1918 — Первая мировая война","Причины: империалистические противоречия"],["Февр. революция 1917 г.","Итог: отречение Николая II"]],literature:[["Раскольников: теория о «право имею»","Наказание — совесть"],["Лирические отступления: позиция автора","Тема: Россия, народ"]],russian:[["ДО: «Прочитав книгу, он лёг.»","Выделяется запятыми"],["СПП: что/как/который","Запятая перед союзом"]]};function og(s){const e=Yo[s]??Yo.math;return e[Math.floor(Math.random()*e.length)]}function lg(s,e,t){const n=jo[s]??jo.default,i=e==="easy"?0:e==="medium"?1:2,r=t<40?2:t<70?1:0,a=i+r+(Math.random()<.4?1:0);return[...n].sort(()=>Math.random()-.5).slice(0,Math.max(0,a))}function Ko(s,e){const t=["А","Б","В","Г"],n={А:"theory",Б:"board",В:"example",Г:"question"};return{label:s.label,text:s.text,type:n[t[e]]??"theory",icon:ag[n[t[e]]??"theory"],understandingDelta:s.understandingBase,attentionDelta:s.attentionDelta,difficulty:s.difficulty,isBad:s.isBad??!1}}const Zo=[[{label:"Теория по учебнику",text:"Открываем параграф. Читаем определение вслух. Записываем ключевые понятия в тетрадь.",type:"theory",icon:"📖",understandingDelta:13,attentionDelta:-8,difficulty:"hard",isBad:!1},{label:"Схема на доске",text:"Рисуем опорную схему шаг за шагом. Ученики копируют в тетрадь по ходу объяснения.",type:"board",icon:"📋",understandingDelta:11,attentionDelta:3,difficulty:"medium",isBad:!1},{label:"Пример из жизни",text:"Где в повседневной жизни это встречается? Находим три реальных примера и обсуждаем.",type:"example",icon:"💡",understandingDelta:8,attentionDelta:12,difficulty:"easy",isBad:!1},{label:"Вопрос классу",text:"Кто попробует объяснить своими словами? Подождём 30 секунд — кто поднимет руку?",type:"question",icon:"❓",understandingDelta:5,attentionDelta:15,difficulty:"medium",isBad:!1}],[{label:"Мини-лекция «от обратного»",text:"Сначала покажем, что будет если сделать неправильно. Потом объясним почему.",type:"theory",icon:"🔄",understandingDelta:12,attentionDelta:-5,difficulty:"hard",isBad:!1},{label:"Групповое обсуждение",text:"Разбиваемся на пары — 2 минуты обсуждаем тему между собой. Потом делимся выводами.",type:"question",icon:"🤝",understandingDelta:7,attentionDelta:14,difficulty:"medium",isBad:!1},{label:"Аналогия-сравнение",text:"Это похоже на… Найдём всё что у них общего и где они отличаются.",type:"example",icon:"⚖️",understandingDelta:9,attentionDelta:10,difficulty:"easy",isBad:!1},{label:"Ролевое объяснение",text:"Один ученик у доски объясняет всем остальным как «учитель». Я буду поправлять.",type:"board",icon:"🎭",understandingDelta:6,attentionDelta:17,difficulty:"medium",isBad:!1}],[{label:"Сначала попробуем сами",text:"Даю задание — все 3 минуты пробуют без объяснения. Потом вместе разбираем ошибки.",type:"board",icon:"🧪",understandingDelta:10,attentionDelta:6,difficulty:"medium",isBad:!1},{label:"Разбор типичных ошибок",text:"Вот 3 типичные ошибки по этой теме. Почему они возникают и как их избежать?",type:"theory",icon:"🚫",understandingDelta:11,attentionDelta:4,difficulty:"hard",isBad:!1},{label:"Реальный опыт / эксперимент",text:"Проверяем прямо в классе. Наблюдаем — что происходит? Делаем вывод вместе.",type:"example",icon:"🔬",understandingDelta:8,attentionDelta:13,difficulty:"easy",isBad:!1},{label:"«Угадай закономерность»",text:"Смотрим на несколько примеров. Кто первым угадает правило — поднимите руку!",type:"question",icon:"🎯",understandingDelta:5,attentionDelta:18,difficulty:"medium",isBad:!1}],[{label:"Опрос по цепочке",text:"Каждый добавляет одно слово к определению. Начинаем с первой парты — по кругу.",type:"question",icon:"🔗",understandingDelta:8,attentionDelta:9,difficulty:"medium",isBad:!1},{label:"Составляем схему вместе",text:"Я начну — нарисую центр. Кто добавит следующую ветку? Строим концепт-карту вместе.",type:"board",icon:"🗺️",understandingDelta:11,attentionDelta:5,difficulty:"medium",isBad:!1},{label:"Сравнение с изученным",text:"Новая тема похожа на то что мы уже проходили. В чём сходства, в чём отличия?",type:"theory",icon:"🔎",understandingDelta:9,attentionDelta:2,difficulty:"hard",isBad:!1},{label:"Предсказание результата",text:"Прежде чем объяснять — каждый запишет своё предположение. Потом сверим с правильным.",type:"example",icon:"🔮",understandingDelta:6,attentionDelta:14,difficulty:"easy",isBad:!1}],[{label:"Большая картина",text:"Сначала смотрим на тему глобально — где она в системе предмета и зачем она нужна.",type:"theory",icon:"🌐",understandingDelta:12,attentionDelta:-3,difficulty:"hard",isBad:!1},{label:"Демонстрация на числах / фактах",text:"Возьмём конкретные числа и проследим каждый шаг. Без обобщений — чистая конкретика.",type:"board",icon:"📊",understandingDelta:10,attentionDelta:3,difficulty:"medium",isBad:!1},{label:"Таблица «До и После»",text:"Что мы знали о теме ДО урока? Что узнаём? Заполним таблицу вместе.",type:"example",icon:"📝",understandingDelta:8,attentionDelta:11,difficulty:"easy",isBad:!1},{label:"«Объясни соседу»",text:"Поворачиваемся к соседу и за 1 минуту объясняем тему своими словами. Поехали!",type:"question",icon:"👥",understandingDelta:5,attentionDelta:16,difficulty:"medium",isBad:!1}]],Jo=[{label:"Диктовка определения",text:"Все записываем. Медленно. Слово за словом. Не отвлекаться.",type:"theory",icon:"😴",understandingDelta:2,attentionDelta:-18,difficulty:"hard",isBad:!0},{label:"Пересказ из учебника дословно",text:"Зачитываю параграф слово в слово. Будет на экзамене — слушайте внимательно.",type:"theory",icon:"📕",understandingDelta:3,attentionDelta:-15,difficulty:"hard",isBad:!0},{label:"Молчаливое чтение 5 минут",text:"Открываем учебник страница 47. Читаем про себя. Вопросов не задаём.",type:"theory",icon:"🔇",understandingDelta:1,attentionDelta:-20,difficulty:"hard",isBad:!0}];function cg(s,e){const n=(s.split("").reduce((i,r)=>i+r.charCodeAt(0),0)+e*2)%Zo.length;return[...Zo[n]].sort(()=>Math.random()-.5)}class dg{constructor(){T(this,"bus",tn.getInstance());T(this,"gradebook",Xs.getInstance());T(this,"attention",qs.getInstance());T(this,"subject","math");T(this,"classGrade",9);T(this,"dayNumber",1);T(this,"completedTopics",[]);T(this,"phase","explanation");T(this,"topic","");T(this,"topicEntry",null);T(this,"rounds",[]);T(this,"currentRound",0);T(this,"taskConfig",null);T(this,"activeTask",null);T(this,"activeHomework",null);T(this,"notebooks",[]);T(this,"hwGiven",!1);T(this,"hwDifficulty",null);T(this,"prepUnderstandingBonus",0);T(this,"prepAttentionBonus",0)}init(e,t,n,i){this.subject=e,this.classGrade=t,this.dayNumber=n,this.completedTopics=[...i],this.phase="explanation",this.rounds=[],this.currentRound=0,this.taskConfig=null,this.activeTask=null,this.activeHomework=null,this.notebooks=[],this.hwGiven=!1,this.hwDifficulty=null,this.topicEntry=sg(e,t,i),this.topic=this.topicEntry?.topic??rg[e]?.[0]??e;const r=["intro","main","conclusion"];for(let a=0;a<3;a++){let o;if(this.topicEntry?(o=[...this.topicEntry.options.map((l,c)=>Ko(l,c))],a>0&&o.sort(()=>Math.random()-.5)):o=cg(this.topic,a),a===2)if(this.topicEntry?.badOption){const l=Ko(this.topicEntry.badOption,o.length-1);l.isBad=!0,o[o.length-1]=l}else{const l=Math.floor(Math.random()*Jo.length);o[o.length-1]={...Jo[l]}}this.rounds.push({topic:this.topic,options:o,chosen:null,phase:r[a]})}this.bus.emit("lessonStarted",{topic:this.topic,subject:e,classGrade:t})}getPhase(){return this.phase}setPhase(e){this.phase=e}getTopic(){return this.topic}getRounds(){return this.rounds}getCurrentRound(){return this.rounds[this.currentRound]}getNotebooks(){return this.notebooks}getTaskConfig(){return this.taskConfig}getActiveTask(){return this.activeTask}getActiveHomework(){return this.activeHomework}getTopicEntry(){return this.topicEntry}setPrepBonus(e,t){this.prepUnderstandingBonus=e,this.prepAttentionBonus=t}chooseExplanationOption(e,t){if(this.phase!=="explanation")return;const n=this.rounds[this.currentRound];if(!n||n.chosen!==null)return;this.currentRound===0&&(this.prepUnderstandingBonus||this.prepAttentionBonus)&&(t.forEach(a=>{a.modifyStat("understanding",this.prepUnderstandingBonus),a.modifyStat("attention",this.prepAttentionBonus)}),this.prepUnderstandingBonus=0,this.prepAttentionBonus=0),n.chosen=e;const i=n.options[e],r=this.topicEntry?.options[e];t.forEach(a=>{let o=i.understandingDelta;r&&(o+=r.typeBonus[a.data.type]??0);const l=Math.max(.08,Math.min(1,a.data.stats.attention/85)),c=Math.round(o*l),d=a.data.type==="bully"?-2:a.data.type==="lazy"?-1:0,h=i.attentionDelta+d;a.modifyStat("understanding",c),a.modifyStat("attention",h);const u=a.data.stats.understanding;u>=80?a.setEmotion("happy"):u<40&&a.setEmotion("confused")}),this.attention.boost(i.attentionDelta),this.bus.emit("explanationChosen",{round:this.currentRound,option:i}),this.currentRound++,this.currentRound>=this.rounds.length?(this.phase="tasks",this.bus.emit("phaseChanged",{phase:"tasks"})):this.bus.emit("nextExplanationRound",{round:this.currentRound})}setTaskConfig(e,t,n="written"){if(this.phase!=="tasks")return;this.taskConfig=e;const i=this.topicEntry?.tasks[e.difficulty]??{text:`Задание по теме: ${this.topic} (${e.difficulty})`};this.activeTask={mode:n,difficulty:e.difficulty,data:i};const r={easy:.7,medium:1,hard:1.4}[e.difficulty],a=n==="board"?1.1:1;t.forEach(o=>{let l=10*r*a*(o.data.stats.understanding/100);e.difficulty==="hard"?o.data.type==="genius"?l*=1.6:o.data.type==="lazy"||o.data.type==="bully"?l*=.4:o.data.type==="anxious"&&(l*=.7):e.difficulty==="easy"&&(o.data.type==="genius"?l*=.6:o.data.type==="lazy"&&(l*=1.3)),n==="board"&&(o.data.type==="bully"&&o.modifyStat("behavior",5),o.data.type==="lazy"&&o.modifyStat("attention",5)),o.modifyStat("understanding",l*.4),o.setEmotion("writing")}),this.bus.emit("tasksStarted",{config:e,task:i,mode:n})}finishTasks(e){if(this.phase!=="tasks")return;this.phase="grading";const t=[...e].sort(()=>Math.random()-.5),n=t.slice(0,Math.min(4,t.length)),i=this.taskConfig?.difficulty??"medium";this.notebooks=n.map(r=>({studentId:r.data.id,studentName:r.data.name,errors:lg(this.subject,i,r.data.stats.behavior),content:og(this.subject),grade:null})),e.forEach(r=>r.setEmotion("neutral")),this.bus.emit("phaseChanged",{phase:"grading"})}gradeNotebook(e,t){if(this.phase!=="grading")return;const n=this.notebooks.find(i=>i.studentId===e);n&&(n.grade=Math.max(2,Math.min(5,t)),this.gradebook.add({studentId:e,studentName:n.studentName,grade:n.grade,topic:this.topic,lessonDay:this.dayNumber,type:"notebook"}),this.bus.emit("notebookGraded",{studentId:e,grade:n.grade}))}finishGrading(){this.phase==="grading"&&(this.notebooks.forEach(e=>{e.grade===null&&this.gradeNotebook(e.studentId,3)}),this.phase="homework",this.bus.emit("phaseChanged",{phase:"homework"}))}setHomework(e,t,n){if(this.phase==="homework"){if(this.hwGiven=e,this.hwDifficulty=e?t:null,e){const i=this.topicEntry?.homework[t]??`Домашнее задание по теме «${this.topic}» — уровень ${t}`;this.activeHomework={difficulty:t,text:i},n.forEach(r=>{r.data.hwDone=!1;const a=t==="hard"?r.data.type==="genius"?5:-15:t==="easy"?r.data.type==="lazy"?8:5:0;r.modifyStat("motivation",a)})}this.phase="done",this.bus.emit("phaseChanged",{phase:"done"})}}skipHomework(e){this.setHomework(!1,"easy",e)}buildReport(e){const t=e.filter(l=>l.data.stats.understanding>=60).length,n=e.reduce((l,c)=>l+c.data.stats.understanding,0)/e.length,i=this.notebooks.filter(l=>l.grade!==null).length,r=i>0?this.notebooks.reduce((l,c)=>l+(c.grade??3),0)/i:3,a=Math.round(20+t*2+(r-2)*8+(this.hwGiven?10:0)),o=Math.round((t/e.length-.5)*6);return{topic:this.topic,subject:this.subject,classGrade:this.classGrade,dayNumber:this.dayNumber,understoodCount:t,avgUnderstanding:Math.round(n),notebookGrades:this.notebooks,xpEarned:a,repDelta:o,hwGiven:this.hwGiven,hwDifficulty:this.hwDifficulty}}}const Qo={math:["Задача 1: Решите уравнение 3x² - 5x + 2 = 0","Задача 2: Найдите производную f(x) = x³ - 4x + 7","Задача 3: Вычислите sin²α + cos²α при α = 30°","Задача 4: Найдите корни: |x - 3| = 7","Задача 5: Логарифм: log₂(32) = ?"],physics:["Задача 1: Тело массой 5 кг движется со скоростью 10 м/с. Кинетическая энергия?","Задача 2: Сопротивление цепи: R₁=4 Ом, R₂=6 Ом параллельно. Общее R=?","Задача 3: Закон Кулона: заряды 2мкКл и 3мкКл на расстоянии 0.1 м. Сила=?","Задача 4: Период колебаний маятника длиной L=1 м. T=?","Задача 5: Скорость света в стекле (n=1.5). v=?"],chemistry:["Задача 1: Составьте уравнение реакции горения метана CH₄","Задача 2: Перечислите типы химических связей с примерами","Задача 3: pH раствора HCl с концентрацией 0.01 моль/л?","Задача 4: Электронная конфигурация атома натрия (Na, Z=11)?","Задача 5: Реакция нейтрализации: NaOH + HCl → ?"],history:["Вопрос 1: В каком году началась Великая Отечественная война?","Вопрос 2: Назовите причины Первой мировой войны (не менее 3)","Вопрос 3: Кто такой Пётр Великий? Его реформы.","Вопрос 4: Дата и значение Куликовской битвы?","Вопрос 5: Основные события революции 1917 года."],literature:["Вопрос 1: Главные темы романа «Война и мир» Толстого","Вопрос 2: Образ Раскольникова в «Преступлении и наказании»","Вопрос 3: Смысл названия «Мёртвые души» Гоголя","Вопрос 4: Конфликт в пьесе «Гроза» Островского","Вопрос 5: Лирический герой поэзии Пушкина"],russian:["Задание 1: Расставьте знаки препинания в предложении","Задание 2: Морфемный разбор слова «пересмотришь»","Задание 3: Синтаксический разбор предложения","Задание 4: Найдите все причастные обороты в тексте","Задание 5: Напишите мини-сочинение по данному тексту"]},el={math:["Неверный знак у корня","Арифметическая ошибка","Неправильное применение формулы","Пропущен один корень","Ошибка в раскрытии скобок"],physics:["Неверные единицы измерения","Ошибка в формуле","Неверное направление вектора","Арифметическая ошибка","Пропущен знак минус"],chemistry:["Неверно расставлены коэффициенты","Ошибка в формуле вещества","Нарушен закон сохранения масс","Неверный заряд иона","Пропущен продукт реакции"],history:["Неточная дата","Перепутаны имена","Не указана причинно-следственная связь","Неполный ответ","Ошибка в хронологии"],literature:["Неверная цитата","Ошибка в интерпретации","Не указаны черты характера","Нет ссылки на текст","Поверхностный анализ"],russian:["Пунктуационная ошибка","Грамматическая ошибка","Неверный морфемный разбор","Ошибка согласования","Нарушение нормы"]};function hg(s,e,t){const n=Qo[s]??Qo.math,i=["КОНТРОЛЬНАЯ РАБОТА",`${s.toUpperCase()} · ${t} класс`];return n.slice(0,3+Math.floor(e*2)).forEach((a,o)=>{i.push(""),i.push(a),e>.75?i.push("Ответ: [показан верный ход решения]"):e>.45?i.push("Ответ: [частично верно, есть недочёты]"):i.push("Ответ: [попытка, но допущены существенные ошибки]")}),i}function ug(s,e){return[...el[s]??el.math].sort(()=>Math.random()-.5).slice(0,e)}class tl{generateExam(e,t,n){return e.map(i=>{const r=i.data.stats.understanding/100,a=Math.max(.1,Math.min(.95,r+(Math.random()-.5)*.25));let o;a>=.85?o=5:a>=.7?o=4:a>=.5?o=3:o=2;const l=Math.max(0,5-o)+Math.floor(Math.random()*2),c=ug(t,l),d=hg(t,a,n);return{studentId:i.data.id,studentName:i.data.name,errors:c,grade:null,content:d}})}getAverageGrade(e){const t=e.filter(n=>n.grade!==null);return t.length===0?0:t.reduce((n,i)=>n+(i.grade??0),0)/t.length}static isPromotionEligible(e){return e>=4}}function pg(){return{type:"troublemaker",title:"Troublemaker!",icon:"😤",desc:"One student is disrupting the whole class.",choices:[{label:"Issue a warning",icon:"🗣️",effect:s=>{const e=s.find(t=>t.data.stats.behavior<50)??s[0];return e.modifyStat("behavior",10),`Warning issued to ${e.data.name}.`}},{label:"Remove from class",icon:"🚪",effect:s=>{const e=s.find(t=>t.data.stats.behavior<50)??s[0];return e.modifyStat("behavior",25),e.modifyStat("motivation",-20),`${e.data.name} was sent out.`}},{label:"Ignore it",icon:"🙄",effect:s=>"The class keeps making noise. Attention drops."}]}}function fg(){return{type:"fire_alarm",title:"Fire Alarm!",icon:"🚨",desc:"The fire alarm went off. The entire schedule is disrupted.",choices:[{label:"Calmly evacuate the class",icon:"🏃",effect:s=>"Class evacuated safely. −10 min lesson time, +reputation."},{label:"Continue the lesson",icon:"📚",effect:s=>"Safety violation! −reputation."}]}}function mg(){return{type:"hw_sabotage",title:"Half the class skipped homework!",icon:"😬",desc:"More than half the class showed up without their homework.",choices:[{label:"Give failing grades",icon:"✂️",effect:s=>(s.forEach(e=>{e.data.hwDone||e.modifyStat("motivation",-10)}),"Failing marks given to all offenders.")},{label:"Give a second chance",icon:"🙏",effect:s=>(s.forEach(e=>{e.data.hwDone||e.modifyStat("motivation",5)}),"Second chance given. Motivation rises.")},{label:"Ask about the reasons",icon:"❓",effect:s=>"Students appreciated the understanding."}]}}function gg(s,e){return{type:"genius_question",title:"Tough question!",icon:"🤓",desc:`A top student asks a tricky question about "${e}" (${s}).`,choices:[{label:"Answer the question",icon:"💡",effect:t=>"Class is impressed! +attention, +reputation."},{label:"Cover it next lesson",icon:"📆",effect:t=>"Deferred. The genius is slightly disappointed."},{label:"Ask them to answer it",icon:"🎓",effect:t=>{const n=t.find(i=>i.data.type==="genius")??t[0];return n.modifyStat("motivation",15),`${n.data.name} happily answers!`}}]}}function xg(){return{type:"phone_ring",title:"Someone's phone is ringing!",icon:"📱",desc:"A loud ringtone interrupts the lesson. The class giggles.",choices:[{label:"Confiscate the phone",icon:"😠",effect:s=>"Order restored. −mood for the offender."},{label:"Make a joke and continue",icon:"😄",effect:s=>"Class laughs. +mood! Meme moment."}]}}function yg(){return{type:"student_conflict",title:"Student conflict!",icon:"⚔️",desc:"Two students had a fight and are disrupting the class.",choices:[{label:"Defuse the situation",icon:"🕊️",effect:s=>(s.slice(0,2).forEach(e=>e.modifyStat("behavior",10)),"Conflict resolved. Lesson continues.")},{label:"Call both to the board",icon:"📋",effect:s=>(s.slice(0,2).forEach(e=>{e.modifyStat("behavior",5),e.modifyStat("attention",15)}),"Giving them a task together will settle things.")}]}}class vg{constructor(){T(this,"bus",tn.getInstance());T(this,"lastEventMinute",-30);T(this,"minInterval",12);T(this,"subject","");T(this,"topic","")}init(e,t){this.subject=e,this.topic=t,this.lastEventMinute=-30}maybeSpawnEvent(e){if(e-this.lastEventMinute<this.minInterval||Math.random()>.35)return null;this.lastEventMinute=e;const t=[pg(),fg(),mg(),gg(this.subject,this.topic),xg(),yg()];return t[Math.floor(Math.random()*t.length)]}}const Un=[{id:"novice",name:"Rookie Teacher",icon:"📖",xpRequired:0,lessonsRequired:0,repRequired:0,salaryBonus:0},{id:"cat2",name:"Teacher Cat. II",icon:"📗",xpRequired:300,lessonsRequired:8,repRequired:55,salaryBonus:.1},{id:"cat1",name:"Teacher Cat. I",icon:"📘",xpRequired:1e3,lessonsRequired:20,repRequired:75,salaryBonus:.2},{id:"highest",name:"Expert Teacher",icon:"🏆",xpRequired:3e3,lessonsRequired:40,repRequired:110,salaryBonus:.35},{id:"honored",name:"Honored Teacher",icon:"🌟",xpRequired:8e3,lessonsRequired:80,repRequired:130,salaryBonus:.6},{id:"zavuch",name:"Deputy Principal",icon:"🏛️",xpRequired:15e3,lessonsRequired:100,repRequired:140,salaryBonus:.8},{id:"director",name:"School Director",icon:"👔",xpRequired:3e4,lessonsRequired:200,repRequired:180,salaryBonus:1.2}];class _g{constructor(){T(this,"_rankIndex",0)}get rank(){return Un[this._rankIndex]}get rankIndex(){return this._rankIndex}isVP(){return this.rank.id==="zavuch"||this.rank.id==="director"}isDirector(){return this.rank.id==="director"}checkPromotion(e,t,n){const i=Un[this._rankIndex+1];return!i||i.id==="zavuch"||i.id==="director"?null:e>=i.xpRequired&&t>=i.lessonsRequired&&n>=i.repRequired?(this._rankIndex++,this.rank):null}checkExamPromotion(e,t,n,i){if(this.rank.id!=="honored")return null;const r=Un.find(a=>a.id==="zavuch");return i>=4&&e>=r.xpRequired&&t>=r.lessonsRequired&&n>=r.repRequired?(this._rankIndex=Un.indexOf(r),this.rank):null}checkDirectorPromotion(e,t){if(this.rank.id!=="zavuch")return null;const n=Un.find(i=>i.id==="director");return e>=6&&t>=n.repRequired?(this._rankIndex=Un.indexOf(n),this.rank):null}load(e){const t=Un.findIndex(n=>n.id===e);t>=0&&(this._rankIndex=t)}forceRank(e){const t=Un.findIndex(n=>n.id===e);t>=0&&(this._rankIndex=t)}}class bg{constructor(e=8e4){T(this,"_balance");this._balance=e}get balance(){return this._balance}earn(e){this._balance+=e}spend(e){return this._balance<e?!1:(this._balance-=e,!0)}calcWeeklySalary(e,t){return Math.round((8e4+e*400)*(1+t))}}const Qr=[{id:"ped1",branch:"pedagogy",tier:1,name:"Риторика",desc:"Объяснения +20% внимания",cost:100,icon:"🗣️"},{id:"ped2",branch:"pedagogy",tier:2,name:"Мастер доски",desc:"Доска +25% понимания",cost:250,icon:"📋",requires:"ped1"},{id:"ped3",branch:"pedagogy",tier:3,name:"Сторителлинг",desc:"Примеры +35% мотивации",cost:400,icon:"📖",requires:"ped2"},{id:"ped4",branch:"pedagogy",tier:4,name:"Методист",desc:"Кулдауны действий −25%",cost:600,icon:"⚡",requires:"ped3"},{id:"ped5",branch:"pedagogy",tier:5,name:"Мастер-класс",desc:"XP за объяснения ×1.5",cost:900,icon:"🎓",requires:"ped4"},{id:"psy1",branch:"psychology",tier:1,name:"Эмпатия",desc:"Похвала +25% внимания",cost:100,icon:"❤️"},{id:"psy2",branch:"psychology",tier:2,name:"Психолог",desc:"Тревожные учатся лучше",cost:250,icon:"🧠",requires:"psy1"},{id:"psy3",branch:"psychology",tier:3,name:"Мотиватор",desc:"Задания +50% мотивации",cost:400,icon:"🌟",requires:"psy2"},{id:"psy4",branch:"psychology",tier:4,name:"Конфликтолог",desc:"Конфликты −50% урона",cost:600,icon:"🕊️",requires:"psy3"},{id:"psy5",branch:"psychology",tier:5,name:"Наставник",desc:"Репутация растёт ×1.5",cost:900,icon:"🏅",requires:"psy4"},{id:"org1",branch:"org",tier:1,name:"Тайм-мен.",desc:"Фазы урока +10% XP",cost:100,icon:"⏱️"},{id:"org2",branch:"org",tier:2,name:"Планировщик",desc:"Викторина +40% внимания",cost:250,icon:"📆",requires:"org1"},{id:"org3",branch:"org",tier:3,name:"Администратор",desc:"Зарплата +10% в неделю",cost:400,icon:"💼",requires:"org2"},{id:"org4",branch:"org",tier:4,name:"Инноватор",desc:"Особые события ×2 XP",cost:600,icon:"🔬",requires:"org3"},{id:"org5",branch:"org",tier:5,name:"Директор",desc:"Разблокирует режим директора",cost:900,icon:"🏛️",requires:"org4"}];class Mg{constructor(){T(this,"unlocked",new Set);T(this,"_points",0)}get points(){return this._points}addPoints(e){this._points+=e}canUnlock(e){const t=Qr.find(n=>n.id===e);return!(!t||this._points<t.cost||t.requires&&!this.unlocked.has(t.requires))}unlock(e){const t=Qr.find(n=>n.id===e);return!t||!this.canUnlock(e)?!1:(this._points-=t.cost,this.unlocked.add(e),!0)}has(e){return this.unlocked.has(e)}getXPMult(e){let t=1;return e==="explain"&&this.has("ped5")&&(t*=1.5),e==="praise"&&this.has("psy5")&&(t*=1.5),this.has("ped5")&&this.has("psy5")&&(t*=1.1),t}load(e){e.forEach(t=>this.unlocked.add(t))}save(){return[...this.unlocked]}}const Eg="https://api.featherless.ai/v1/chat/completions",Sg="meta-llama/Meta-Llama-3.1-8B-Instruct",nl={theory:["Итак, внимание на доску. Сегодня разбираем ключевую концепцию...","Рассмотрим теоретическую основу этой темы...","Запишем определение и формулу..."],board:["Смотрите, как это решается по шагам:","На доске — и разберём вместе:","Алгоритм решения такой..."],example:["Представьте: вы заказываете пиццу. Вот вам и пропорции!","Это как с ездой на велосипеде — сначала страшно, потом сам едешь.","Из жизни: каждый раз, когда вы делаете сдачу в магазине..."],question:["Кто может сказать, что происходит, если...?","Прежде чем я объясню, попробуйте сами: почему так?","Интересный вопрос — как думаете?"]},wg=["Не та формула","Вычислительная ошибка","Не записан ответ","Ошибка в знаке","Неверный вывод","Пропущен шаг"],il=["Хорошая попытка, но здесь ошибка.","Почти верно! Проверь вычисления.","Ошибка типичная — запомни правило.","Старался, но не хватило внимательности."];class Tg{constructor(e){T(this,"apiKey");T(this,"enabled",!0);this.apiKey=e,e||(this.enabled=!1)}async call(e,t=120){if(!this.enabled)throw new Error("no key");const n=await fetch(Eg,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:Sg,messages:e,max_tokens:t,temperature:.85})});if(!n.ok)throw new Error(`API ${n.status}`);return(await n.json()).choices?.[0]?.message?.content?.trim()??""}async getExplanationLine(e,t,n){try{const i=`Ты учитель ${n} в российской школе. Объясни ученикам 9 класса тему "${e}" методом: ${t}. Одно–два предложения, разговорным языком, можно с юмором.`;return await this.call([{role:"user",content:i}],80)}catch{const i=nl[t]??nl.theory;return i[Math.floor(Math.random()*i.length)]}}async getNotebookErrors(e,t,n){try{const i=`Ученик "${n}" решал задачу по теме "${e}" (сложность: ${t}). Перечисли 2–3 конкретных ошибки которые он мог допустить, кратко, по одной фразе каждая. Только список через 
.`;return(await this.call([{role:"user",content:i}],100)).split(`
`).map(a=>a.replace(/^\d+\.\s*/,"").trim()).filter(Boolean).slice(0,3)}catch{return wg.sort(()=>Math.random()-.5).slice(0,2)}}async getGradeFeedback(e,t){try{const n=t.join("; "),i=`Учитель ставит оценку ${e} за тетрадь. Ошибки: ${n||"нет"}. Одна фраза-комментарий (разговорно, можно иронично).`;return await this.call([{role:"user",content:i}],60)}catch{return il[Math.floor(Math.random()*il.length)]}}async getEventLine(e,t){try{const n=t?`Ученик ${t}.`:"",i=`Короткая (1 предложение) реакция учителя на событие "${e}" в классе. ${n} Разговорный стиль.`;return await this.call([{role:"user",content:i}],60)}catch{return"Ситуация в классе выходит из-под контроля!"}}}class Ag{constructor(e){T(this,"api");T(this,"bus",tn.getInstance());this.api=e}reactToExplanation(e,t,n){e.forEach(i=>{const r=i.data.stats.understanding;r>=80?i.setEmotion("happy"):r<=35?i.setEmotion("confused"):n<0?i.setEmotion("bored"):i.setEmotion("neutral")})}reactToTasks(e,t){e.forEach(n=>{const i=n.data.stats.understanding;t==="hard"&&i<50?n.setEmotion("confused"):t==="easy"&&i>70?n.setEmotion("bored"):n.setEmotion("writing")})}simulateHWCompletion(e,t){const n={easy:0,medium:15,hard:30};e.forEach(i=>{const r=(i.data.stats.motivation+i.data.stats.behavior)/2-n[t];i.data.hwDone=Math.random()*100<r})}behaviorTick(e){e.forEach(t=>{const{attention:n,behavior:i,motivation:r}=t.data.stats;if(n<25&&i<40&&Math.random()<.08){t.setEmotion("troubled"),this.bus.emit("studentDisrupting",{studentId:t.data.id,studentName:t.data.name});return}if(n<20&&r<30){t.setEmotion("bored");return}if(n>75&&r>70){t.setEmotion("happy");return}})}async getStudentReactionBubble(e,t){const n=e.data.type,i=e.data.stats.attention>60?"внимательный":"скучающий",r={genius:`Ученик-отличник реагирует на "${t}". 1 короткая фраза (умная, иногда занудная).`,rebel:`Ученик-хулиган реагирует на "${t}". 1 короткая фраза (дерзкая).`,average:`Обычный ${i} ученик реагирует на "${t}". Очень короткая фраза.`,shy:`Тихий ${i} ученик реагирует на "${t}". 1 тихая фраза.`,jester:`Ученик-шут реагирует на "${t}". 1 смешная фраза.`},a=r[n]??r.average;try{return await this.api.call([{role:"user",content:a}],40)}catch{const o={genius:["Это неточно...","Я проверил, и формула другая.","Интересно!"],rebel:["Скукажуха.","Вы серьёзно?","Мне всё равно."],average:["Ок...","А это будет в контрольной?","Не понял."],shy:["...","Хорошо.","Я понял, кажется."],jester:["Хаха!","А можно анекдот?","Я не слушал."]},l=o[n]??o.average;return l[Math.floor(Math.random()*l.length)]}}}const We={panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",red:"#FF4D4D",blue:"#58A6FF",text:"#E6EDF3",muted:"#8B949E"};class Cg{constructor(){T(this,"root");T(this,"timeEl");T(this,"phaseEl");T(this,"attentionBar");T(this,"attentionVal");T(this,"topicEl");T(this,"repEl");T(this,"moneyEl");T(this,"dayEl");T(this,"crosshair");T(this,"notifArea");T(this,"bus",tn.getInstance());this.root=document.createElement("div"),this.root.id="ew2-hud",this.root.style.cssText=`
      position:fixed; inset:0; pointer-events:none;
      font-family:'Nunito',sans-serif; font-size:14px; color:${We.text};
      z-index:100; user-select:none;
    `,document.body.appendChild(this.root),this.buildLayout(),this.bindEvents()}panel(e){const t=document.createElement("div");return t.style.cssText=`background:${We.panel}cc; border:1px solid ${We.border}; border-radius:8px; padding:8px 12px; backdrop-filter:blur(6px); ${e}`,t}buildLayout(){const e=document.createElement("div");e.style.cssText="position:absolute; top:12px; left:50%; transform:translateX(-50%); display:flex; gap:10px; align-items:center;",this.dayEl=document.createElement("span"),this.dayEl.style.cssText=`color:${We.muted}; font-weight:700; font-size:13px;`,this.dayEl.textContent=W("hud.day")+" 1",this.timeEl=document.createElement("span"),this.timeEl.style.cssText=`color:${We.gold}; font-weight:800; font-size:17px; font-family:'JetBrains Mono',monospace; min-width:52px; text-align:center;`,this.timeEl.textContent="08:30",this.phaseEl=document.createElement("span"),this.phaseEl.style.cssText=`color:${We.mint}; font-weight:700; font-size:13px; padding:2px 10px; background:${We.mint}22; border-radius:20px;`,this.phaseEl.textContent=W("hud.phase.explanation");const t=this.panel("display:flex; gap:14px; align-items:center; padding:6px 18px;");t.append(this.dayEl,this.timeEl,this.phaseEl),e.appendChild(t),this.root.appendChild(e);const n=this.panel("position:absolute; top:12px; right:14px; display:flex; flex-direction:column; gap:4px; min-width:110px;");this.repEl=document.createElement("div"),this.repEl.style.cssText="font-size:13px;",this.repEl.innerHTML=`<span style="color:${We.muted}">${W("hud.reputation")} </span><span style="color:${We.blue}; font-weight:800;">50</span>`,this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText="font-size:13px;",this.moneyEl.innerHTML=`<span style="color:${We.muted}">${W("hud.salary")} </span><span style="color:${We.gold}; font-weight:800;">80 000 ₽</span>`,n.append(this.repEl,this.moneyEl),this.root.appendChild(n);const i=this.panel("position:absolute; bottom:14px; left:14px; min-width:220px; display:flex; flex-direction:column; gap:6px;");this.topicEl=document.createElement("div"),this.topicEl.style.cssText=`font-weight:700; font-size:13px; color:${We.mint};`,this.topicEl.textContent=W("hud.topic_prefix")+" —";const r=document.createElement("div");r.style.cssText=`display:flex; justify-content:space-between; font-size:12px; color:${We.muted};`,this.attentionVal=document.createElement("span"),this.attentionVal.style.cssText=`color:${We.text}; font-weight:800;`,this.attentionVal.textContent="100%",r.innerHTML=`<span>${W("hud.attention")}</span>`,r.appendChild(this.attentionVal);const a=document.createElement("div");a.style.cssText=`height:8px; background:${We.border}; border-radius:4px; overflow:hidden;`,this.attentionBar=document.createElement("div"),this.attentionBar.style.cssText=`height:100%; width:100%; background:${We.mint}; border-radius:4px; transition:width .4s, background .4s;`,a.appendChild(this.attentionBar),i.append(this.topicEl,r,a),this.root.appendChild(i),this.crosshair=document.createElement("div"),this.crosshair.style.cssText="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:18px; height:18px; pointer-events:none;",this.crosshair.innerHTML=`<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="1.5" fill="${We.mint}"/><line x1="9" y1="2" x2="9" y2="6" stroke="${We.mint}" stroke-width="1.5"/><line x1="9" y1="12" x2="9" y2="16" stroke="${We.mint}" stroke-width="1.5"/><line x1="2" y1="9" x2="6" y2="9" stroke="${We.mint}" stroke-width="1.5"/><line x1="12" y1="9" x2="16" y2="9" stroke="${We.mint}" stroke-width="1.5"/></svg>`,this.root.appendChild(this.crosshair),this.notifArea=document.createElement("div"),this.notifArea.style.cssText="position:absolute; top:70px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:6px; pointer-events:none;",this.root.appendChild(this.notifArea);const o=this.panel("position:absolute; bottom:14px; right:14px; font-size:12px; color:"+We.muted);o.innerHTML=`<kbd style="background:${We.border};padding:1px 6px;border-radius:4px;color:${We.text}">E</kbd> ${W("hud.hint_e")} &nbsp; <kbd style="background:${We.border};padding:1px 6px;border-radius:4px;color:${We.text}">F1</kbd> ${W("hud.hint_f1")}`,this.root.appendChild(o)}bindEvents(){this.bus.on("attentionChanged",e=>{const{value:t}=e;this.setAttention(t)}),this.bus.on("lessonStarted",e=>{const{topic:t}=e;this.topicEl.textContent=`${W("hud.topic_prefix")} ${t}`}),this.bus.on("phaseChanged",e=>{const{phase:t}=e,n={explanation:W("hud.phase.explanation"),tasks:W("hud.phase.tasks"),grading:W("hud.phase.grading"),homework:W("hud.phase.homework"),done:W("hud.phase.done")};this.phaseEl.textContent=n[t]??t})}setAttention(e){const t=Math.max(0,Math.min(100,e));this.attentionBar.style.width=t+"%",this.attentionVal.textContent=t.toFixed(0)+"%",this.attentionBar.style.background=t>60?We.mint:t>30?We.gold:We.red}setTime(e){this.timeEl.textContent=e}setDay(e){this.dayEl.textContent=W("hud.day")+" "+e}setReputation(e){this.repEl.innerHTML=`<span style="color:${We.muted}">${W("hud.reputation")} </span><span style="color:${We.blue}; font-weight:800;">${e}</span>`}setMoney(e){this.moneyEl.innerHTML=`<span style="color:${We.muted}">${W("hud.salary")} </span><span style="color:${We.gold}; font-weight:800;">${e.toLocaleString("ru-RU")} ₸</span>`}showNotification(e,t=We.mint,n=2800){const i=document.createElement("div");i.style.cssText=`background:${We.panel}ee; border:1px solid ${t}; border-radius:8px; padding:8px 18px; color:${t}; font-weight:700; font-size:14px; animation:ew2_fadein .25s; pointer-events:none; text-align:center; max-width:360px;`,i.textContent=e,this.notifArea.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity .4s",setTimeout(()=>i.remove(),420)},n)}addGlobalStyles(){if(document.getElementById("ew2-hud-style"))return;const e=document.createElement("style");e.id="ew2-hud-style",e.textContent="@keyframes ew2_fadein { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }",document.head.appendChild(e)}hide(){this.root.style.display="none"}show(){this.root.style.display=""}dispose(){this.root.remove()}}const je={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",red:"#FF4D4D",green:"#3FB950",text:"#E6EDF3",muted:"#8B949E",nb:"#FFFDE7",lines:"#DEE2A0"};function sl(s){return s>=5?je.green:s>=4?je.mint:s>=3?je.gold:je.red}class Rg{constructor(){T(this,"overlay");T(this,"notebooks",[]);T(this,"currentIdx",0);T(this,"onGrade",null);T(this,"onFinish",null);T(this,"bus",tn.getInstance());T(this,"selectedGrade",3);T(this,"gradeButtons",[]);T(this,"pageContent");T(this,"pageInfo");T(this,"feedbackEl");this.overlay=document.createElement("div"),this.overlay.id="ew2-notebook",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:300; font-family:'Nunito',sans-serif;
      backdrop-filter:blur(4px); opacity:0; pointer-events:none; transition:opacity .25s;
    `,document.body.appendChild(this.overlay),this.buildUI()}buildUI(){const e=document.createElement("div");e.style.cssText=`
      background:${je.bg}; border:1px solid ${je.border}; border-radius:14px;
      width:660px; max-width:96vw; padding:28px 32px; display:flex; flex-direction:column; gap:18px;
    `;const t=document.createElement("div");t.style.cssText="display:flex; align-items:center; justify-content:space-between;",t.innerHTML=`<h2 style="margin:0; color:${je.text}; font-size:20px;">${W("nb.title")}</h2>`,this.pageInfo=document.createElement("span"),this.pageInfo.style.cssText=`color:${je.muted}; font-size:14px;`,t.appendChild(this.pageInfo),e.appendChild(t);const n=document.createElement("div");n.style.cssText=`background:${je.nb}; border-radius:8px; border:2px solid ${je.lines}; overflow:hidden; position:relative;`;const i=document.createElement("div");i.style.cssText=`position:absolute; left:28px; top:0; bottom:0; width:2px; background:${je.lines}; z-index:1;`,n.appendChild(i),this.pageContent=document.createElement("div"),this.pageContent.style.cssText="padding:20px 20px 20px 44px; min-height:200px; position:relative;",n.appendChild(this.pageContent),e.appendChild(n);const r=document.createElement("div");r.id="ew2-nb-errors",e.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex; align-items:center; gap:10px;",a.innerHTML=`<span style="color:${je.muted}; font-size:14px; font-weight:700;">${W("nb.grade")}</span>`,this.gradeButtons=[];for(let d=2;d<=5;d++){const h=document.createElement("button");h.textContent=String(d),h.dataset.grade=String(d),h.style.cssText=`width:44px; height:44px; border-radius:8px; border:2px solid ${je.border};
        background:${je.panel}; color:${je.text}; font-size:20px; font-weight:800; cursor:pointer; transition:all .15s;`,h.addEventListener("click",()=>this.selectGrade(d)),a.appendChild(h),this.gradeButtons.push(h)}e.appendChild(a),this.feedbackEl=document.createElement("div"),this.feedbackEl.style.cssText=`font-size:13px; color:${je.muted}; font-style:italic; min-height:18px;`,e.appendChild(this.feedbackEl);const o=document.createElement("div");o.style.cssText="display:flex; gap:10px; justify-content:flex-end;";const l=document.createElement("button");l.textContent=W("nb.submit"),l.style.cssText=`padding:10px 22px; border-radius:8px; border:none; background:${je.mint}; color:#000; font-weight:800; cursor:pointer; font-size:14px;`,l.addEventListener("click",()=>this.submitAndNext());const c=document.createElement("button");c.textContent=W("nb.finish"),c.style.cssText=`padding:10px 18px; border-radius:8px; border:1px solid ${je.border}; background:transparent; color:${je.muted}; cursor:pointer; font-size:14px;`,c.addEventListener("click",()=>this.finish()),o.append(l,c),e.appendChild(o),this.overlay.appendChild(e)}selectGrade(e){this.selectedGrade=e,this.gradeButtons.forEach(n=>{const i=Number(n.dataset.grade)===e?sl(e):je.panel;n.style.background=i,n.style.color=Number(n.dataset.grade)===e?"#000":je.text,n.style.borderColor=Number(n.dataset.grade)===e?sl(e):je.border});const t={2:W("nb.feedback.2"),3:W("nb.feedback.3"),4:W("nb.feedback.4"),5:W("nb.feedback.5")};this.feedbackEl.textContent=t[e]??""}renderPage(){if(this.notebooks.length===0)return;const e=this.notebooks[this.currentIdx];this.pageInfo.textContent=`${this.currentIdx+1} / ${this.notebooks.length}`,this.pageContent.innerHTML="";const t=document.createElement("div");t.style.cssText=`font-family:'JetBrains Mono',monospace; font-size:14px; color:#333; margin-bottom:10px; border-bottom:1px solid ${je.lines}; padding-bottom:6px;`,t.textContent=`${W("nb.student")} ${e.studentName}`,this.pageContent.appendChild(t);const n=e.content??[];if(n.length>0)n.forEach(a=>{const o=document.createElement("div");o.style.cssText=`
          font-family:'JetBrains Mono',monospace; font-size:12px; color:#2a2a2a;
          line-height:1.9; border-bottom:1px solid ${je.lines}; min-height:22px;
          padding:0 2px; white-space:pre;
        `,o.textContent=a,this.pageContent.appendChild(o)});else for(let a=0;a<6;a++){const o=document.createElement("div");o.style.cssText=`height:1px; background:${je.lines}; margin:18px 0;`,this.pageContent.appendChild(o)}const i=this.overlay.querySelector("#ew2-nb-errors");if(i.innerHTML="",e.errors.length>0){const a=document.createElement("p");a.style.cssText=`margin:0 0 6px; font-weight:700; color:${je.red}; font-size:13px;`,a.textContent=`${W("nb.errors_title")} (${e.errors.length}):`,i.appendChild(a),e.errors.forEach(o=>{const l=document.createElement("div");l.style.cssText=`font-size:13px; padding:4px 10px; background:${je.red}18; border-left:3px solid ${je.red}; border-radius:4px; margin:3px 0; color:${je.text};`,l.textContent="• "+o,i.appendChild(l)})}else{const a=document.createElement("p");a.style.cssText=`margin:0; font-size:13px; color:${je.green}; font-weight:700;`,a.textContent=W("nb.no_errors"),i.appendChild(a)}const r=e.errors.length===0?5:e.errors.length===1?4:e.errors.length===2?3:2;this.selectGrade(r)}submitAndNext(){if(!this.notebooks[this.currentIdx])return;const e=this.notebooks[this.currentIdx];this.onGrade?.(e.studentId,this.selectedGrade),this.currentIdx++,this.currentIdx<this.notebooks.length?this.renderPage():this.finish()}finish(){this.hide(),this.onFinish?.()}open(e,t,n){this.notebooks=e,this.currentIdx=0,this.onGrade=t,this.onFinish=n,this.renderPage(),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const St={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E"},Dg={theory:"#58A6FF",board:St.mint,example:St.gold,question:"#BC8CFF"};class Lg{constructor(){T(this,"overlay");T(this,"bus",tn.getInstance());T(this,"onChoose",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-explain",this.overlay.style.cssText=`
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
        <div style="font-weight:700; font-size:14px; color:${St.text};">📚 ${W("expl.topic")} <span style="color:${St.gold}">${e.topic}</span></div>
      </div>
      <div style="font-size:12px; color:${St.muted};">${W("expl.choose")}</div>
    `,r.appendChild(a);const c=document.createElement("div");c.style.cssText="display:grid; grid-template-columns:1fr 1fr; gap:10px;",e.options.forEach((d,h)=>{const u=this.makeOptionCard(d,h);c.appendChild(u)}),r.appendChild(c),this.overlay.appendChild(r),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}makeOptionCard(e,t){const n=e.isBad?"#555566":Dg[e.type]??St.mint,i=`expl.stars.${e.difficulty}`,r=W(i),a=document.createElement("button");a.style.cssText=`
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
      `,l.textContent=e.text,a.appendChild(l)}return a.addEventListener("mouseenter",()=>{a.style.borderColor=n,a.style.background=n+"18",a.style.transform="scale(1.01)"}),a.addEventListener("mouseleave",()=>{a.style.borderColor=e.isBad?"#333":St.border,a.style.background=St.panel,a.style.transform=""}),a.addEventListener("click",()=>{this.hide(),this.onChoose?.(t)}),a}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const st={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",text:"#E6EDF3",muted:"#8B949E"},Pg={easy:"Лёгкое",medium:"Среднее",hard:"Сложное"},rl={easy:"#4FFFB0",medium:"#FFD700",hard:"#FF4D4D"},Ig={easy:"Базовый уровень — проверка понимания. Справятся почти все.",medium:"Средняя сложность — нужно подумать. Хорошие ученики справятся.",hard:"Высокий уровень — только отличники. Остальные могут запутаться."},Ug={easy:"🟢",medium:"🟡",hard:"🔴"},kg={board:"У доски",written:"Письменно"},Fg={board:"📋",written:"✏️"},Ng={board:"Вызовите ученика к доске. Повышает внимание хулиганов и лентяев.",written:"Раздайте задание на бумаге. Каждый работает самостоятельно."};class Bg{constructor(){T(this,"overlay");T(this,"onConfirm",null);T(this,"selectedMode","written");T(this,"selectedDiff","medium");T(this,"modeBtns",new Map);T(this,"diffBtns",new Map);T(this,"taskTextEl");T(this,"startBtn");T(this,"tasksByDiff",{easy:"",medium:"",hard:""});this.overlay=document.createElement("div"),this.overlay.id="ew2-taskpanel",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:flex-end;
      justify-content:center; z-index:200; font-family:'Nunito',sans-serif;
      padding-bottom:40px; opacity:0; pointer-events:none; transition:opacity .2s;
      backdrop-filter:blur(3px);
    `,document.body.appendChild(this.overlay)}open(e,t){this.onConfirm=t,this.tasksByDiff=e,this.selectedMode="written",this.selectedDiff="medium",this.overlay.innerHTML="",this.modeBtns.clear(),this.diffBtns.clear();const n=document.createElement("div");n.style.cssText=`
      background:${st.bg}; border:1px solid ${st.border}; border-radius:16px;
      padding:24px 28px; width:720px; max-width:96vw; display:flex; flex-direction:column; gap:18px;
    `;const i=document.createElement("div");i.innerHTML=`
      <div style="font-size:11px;color:${st.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Фаза заданий</div>
      <div style="font-size:18px;font-weight:800;color:${st.text};">📝 Выберите формат задания</div>
    `,n.appendChild(i);const r=document.createElement("div");r.style.cssText=`font-size:12px;color:${st.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`,r.textContent="Формат:",n.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex;gap:10px;",["board","written"].forEach(h=>{const u=document.createElement("button");u.style.cssText=`
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${st.border};
        background:${st.panel}; color:${st.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `,u.innerHTML=`
        <span style="font-size:24px;">${Fg[h]}</span>
        <strong style="font-size:14px;">${kg[h]}</strong>
        <span style="font-size:11px;color:${st.muted};">${Ng[h]}</span>
      `,u.addEventListener("click",()=>{this.selectedMode=h,this.refreshMode()}),a.appendChild(u),this.modeBtns.set(h,u)}),n.appendChild(a);const o=document.createElement("div");o.style.cssText=`font-size:12px;color:${st.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`,o.textContent="Сложность:",n.appendChild(o);const l=document.createElement("div");l.style.cssText="display:flex;gap:10px;",["easy","medium","hard"].forEach(h=>{const u=document.createElement("button");u.style.cssText=`
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${st.border};
        background:${st.panel}; color:${st.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `,u.innerHTML=`
        <span style="font-size:22px;">${Ug[h]}</span>
        <strong style="font-size:14px;color:${rl[h]};">${Pg[h]}</strong>
        <span style="font-size:11px;color:${st.muted};text-align:center;">${Ig[h]}</span>
      `,u.addEventListener("click",()=>{this.selectedDiff=h,this.refreshDiff(),this.refreshTaskText()}),l.appendChild(u),this.diffBtns.set(h,u)}),n.appendChild(l);const c=document.createElement("div");c.style.cssText=`
      background:${st.panel}; border:1px solid ${st.border}; border-radius:10px;
      padding:14px 18px; min-height:58px;
    `;const d=document.createElement("div");d.style.cssText=`font-size:11px;color:${st.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;font-weight:700;`,d.textContent="Задание для класса:",this.taskTextEl=document.createElement("div"),this.taskTextEl.style.cssText=`font-size:14px;color:${st.text};white-space:pre-wrap;line-height:1.6;`,c.appendChild(d),c.appendChild(this.taskTextEl),n.appendChild(c),this.startBtn=document.createElement("button"),this.startBtn.style.cssText=`
      padding:13px; border-radius:10px; border:none; background:${st.mint}; color:#000;
      font-size:15px; font-weight:900; cursor:pointer; font-family:inherit; transition:all .15s;
    `,this.startBtn.textContent="▶ Дать задание классу",this.startBtn.addEventListener("mouseenter",()=>{this.startBtn.style.transform="scale(1.02)"}),this.startBtn.addEventListener("mouseleave",()=>{this.startBtn.style.transform=""}),this.startBtn.addEventListener("click",()=>{this.hide(),this.onConfirm?.(this.selectedMode,this.selectedDiff)}),n.appendChild(this.startBtn),this.overlay.appendChild(n),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt(),this.refreshMode(),this.refreshDiff(),this.refreshTaskText()}refreshMode(){this.modeBtns.forEach((e,t)=>{const n=t===this.selectedMode;e.style.borderColor=n?st.mint:st.border,e.style.background=n?st.mint+"18":st.panel})}refreshDiff(){this.diffBtns.forEach((e,t)=>{const n=t===this.selectedDiff,i=rl[t];e.style.borderColor=n?i:st.border,e.style.background=n?i+"22":st.panel})}refreshTaskText(){const e=this.tasksByDiff[this.selectedDiff];this.taskTextEl.textContent=e||"— нет данных —"}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const yt={bg:"#0D1117",panel:"#161B22",border:"#30363D",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E"},Og={easy:"Easy",medium:"Medium",hard:"Hard"},al={easy:"#4FFFB0",medium:"#FFD700",hard:"#FF4D4D"},zg={easy:"🟢",medium:"🟡",hard:"🔴"},Hg={easy:"Review — light practice. Students won't be overwhelmed.",medium:"Material reinforcement. Requires effort but achievable.",hard:"In-depth tasks. Only the most motivated will complete fully."};class Gg{constructor(){T(this,"overlay");T(this,"onConfirm",null);T(this,"selectedDiff","medium");T(this,"diffBtns",new Map);T(this,"hwTextEl");T(this,"hwByDiff",{easy:"",medium:"",hard:""});this.overlay=document.createElement("div"),this.overlay.id="ew2-homeworkui",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:flex-end;
      justify-content:center; z-index:200; font-family:'Nunito',sans-serif;
      padding-bottom:40px; opacity:0; pointer-events:none; transition:opacity .2s;
      backdrop-filter:blur(3px);
    `,document.body.appendChild(this.overlay)}open(e,t){this.onConfirm=t,this.hwByDiff=e,this.selectedDiff="medium",this.diffBtns.clear(),this.overlay.innerHTML="";const n=this.buildCard();this.overlay.appendChild(n),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt(),this.refreshDiff(),this.refreshHwText()}buildCard(){const e=document.createElement("div");e.style.cssText=`
      background:${yt.bg}; border:1px solid ${yt.border}; border-radius:16px;
      padding:24px 28px; width:660px; max-width:96vw; display:flex; flex-direction:column; gap:16px;
    `;const t=document.createElement("div");t.innerHTML=`
      <div style="font-size:11px;color:${yt.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">End of Lesson</div>
      <div style="font-size:18px;font-weight:800;color:${yt.text};">📚 Assign Homework?</div>
    `,e.appendChild(t);const n=document.createElement("div");n.style.cssText=`font-size:12px;color:${yt.muted};text-transform:uppercase;letter-spacing:1px;font-weight:700;`,n.textContent="Difficulty:",e.appendChild(n);const i=document.createElement("div");i.style.cssText="display:flex;gap:10px;",["easy","medium","hard"].forEach(d=>{const h=document.createElement("button");h.style.cssText=`
        flex:1; padding:12px 10px; border-radius:10px; border:2px solid ${yt.border};
        background:${yt.panel}; color:${yt.text}; cursor:pointer; font-family:inherit;
        font-size:13px; transition:all .15s; display:flex; flex-direction:column; align-items:center; gap:4px;
      `,h.innerHTML=`
        <span style="font-size:20px;">${zg[d]}</span>
        <strong style="font-size:14px;color:${al[d]};">${Og[d]}</strong>
        <span style="font-size:11px;color:${yt.muted};text-align:center;">${Hg[d]}</span>
      `,h.addEventListener("click",()=>{this.selectedDiff=d,this.refreshDiff(),this.refreshHwText()}),i.appendChild(h),this.diffBtns.set(d,h)}),e.appendChild(i);const r=document.createElement("div");r.style.cssText=`
      background:${yt.panel}; border:1px solid ${yt.border}; border-radius:10px;
      padding:14px 18px; min-height:50px;
    `;const a=document.createElement("div");a.style.cssText=`font-size:11px;color:${yt.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;font-weight:700;`,a.textContent="Homework assignment:",this.hwTextEl=document.createElement("div"),this.hwTextEl.style.cssText=`font-size:14px;color:${yt.text};white-space:pre-wrap;line-height:1.6;`,r.appendChild(a),r.appendChild(this.hwTextEl),e.appendChild(r);const o=document.createElement("div");o.style.cssText="display:flex;gap:10px;";const l=document.createElement("button");l.style.cssText=`
      flex:1; padding:13px; border-radius:10px; border:2px solid ${yt.border};
      background:transparent; color:${yt.muted}; font-size:14px; font-weight:700;
      cursor:pointer; font-family:inherit; transition:all .15s;
    `,l.textContent="✗ Skip",l.addEventListener("mouseenter",()=>{l.style.borderColor="#FF4D4D",l.style.color="#FF4D4D"}),l.addEventListener("mouseleave",()=>{l.style.borderColor=yt.border,l.style.color=yt.muted}),l.addEventListener("click",()=>{this.hide(),this.onConfirm?.(!1,this.selectedDiff)});const c=document.createElement("button");return c.style.cssText=`
      flex:2; padding:13px; border-radius:10px; border:none;
      background:${yt.gold}; color:#000; font-size:15px; font-weight:900;
      cursor:pointer; font-family:inherit; transition:all .15s;
    `,c.textContent="✓ Assign to Class",c.addEventListener("mouseenter",()=>{c.style.transform="scale(1.02)"}),c.addEventListener("mouseleave",()=>{c.style.transform=""}),c.addEventListener("click",()=>{this.hide(),this.onConfirm?.(!0,this.selectedDiff)}),o.appendChild(l),o.appendChild(c),e.appendChild(o),e}refreshDiff(){this.diffBtns.forEach((e,t)=>{const n=t===this.selectedDiff,i=al[t];e.style.borderColor=n?i:yt.border,e.style.background=n?i+"22":yt.panel})}refreshHwText(){const e=this.hwByDiff[this.selectedDiff];this.hwTextEl.textContent=e||"— no data —"}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const an={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",text:"#E6EDF3",muted:"#8B949E"},Vg={troublemaker:"#FF4D4D",fire_alarm:"#FF6B1A",hw_sabotage:"#FFD700",genius_question:"#58A6FF",phone_ring:"#BC8CFF",student_conflict:"#FF4D4D"};class Wg{constructor(){T(this,"overlay");T(this,"onResult",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-event",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:400; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s; backdrop-filter:blur(4px);
    `,document.body.appendChild(this.overlay)}open(e,t,n){this.onResult=n,this.overlay.innerHTML="";const i=Vg[e.type]??an.mint,r=document.createElement("div");r.style.cssText=`
      background:${an.bg}; border:2px solid ${i}; border-radius:16px;
      padding:28px 32px; width:520px; max-width:96vw; display:flex; flex-direction:column; gap:18px;
      box-shadow: 0 0 40px ${i}44;
    `;const a=document.createElement("div");a.style.cssText="display:flex; align-items:center; gap:14px;",a.innerHTML=`
      <span style="font-size:42px;">${e.icon}</span>
      <div>
        <div style="font-size:11px; color:${i}; text-transform:uppercase; letter-spacing:1px; font-weight:700;">Событие</div>
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
      <div style="font-size:36px;">✅</div>
      <div style="font-size:16px; color:${an.text}; font-weight:700;">${e}</div>
    `;const i=document.createElement("button");i.textContent="Продолжить урок",i.style.cssText=`padding:10px 24px; border-radius:8px; border:none; background:${t}; color:#000; font-weight:800; cursor:pointer; font-size:14px;`,i.addEventListener("click",()=>{this.hide(),this.onResult?.(e)}),n.appendChild(i),this.overlay.appendChild(n)}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const Yt={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",red:"#FF4D4D",text:"#E6EDF3",muted:"#8B949E"};class $g{constructor(){T(this,"overlay");T(this,"visible",!1);T(this,"cbs",null);T(this,"bus",tn.getInstance());this.overlay=document.createElement("div"),this.overlay.id="ew2-pause",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:500; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s; backdrop-filter:blur(6px);
    `,document.body.appendChild(this.overlay),this.buildUI(),window.addEventListener("keydown",e=>{e.code==="Escape"&&this.visible&&this.hide()})}buildUI(){const e=document.createElement("div");e.style.cssText=`
      background:${Yt.bg}; border:1px solid ${Yt.border}; border-radius:18px;
      padding:36px 44px; min-width:280px; display:flex; flex-direction:column; align-items:center; gap:14px;
    `;const t=document.createElement("h2");t.style.cssText=`margin:0 0 8px; font-size:26px; color:${Yt.text}; font-weight:900;`,t.textContent=W("pause.title"),e.appendChild(t);const n=document.createElement("hr");n.style.cssText=`width:100%; border:none; border-top:1px solid ${Yt.border}; margin:4px 0 10px;`,e.appendChild(n),[[W("pause.resume"),Yt.mint,()=>{this.hide(),this.cbs?.onResume()}],[W("pause.save"),"#58A6FF",()=>{this.cbs?.onSave()}],[W("pause.settings"),Yt.muted,()=>{this.cbs?.onSettings()}],[W("pause.menu"),Yt.red,()=>{confirm(W("pause.menu_confirm"))&&(this.hide(),this.cbs?.onMainMenu())}]].forEach(([a,o,l])=>{const c=document.createElement("button");c.textContent=a,c.style.cssText=`
        width:100%; padding:12px 20px; border-radius:10px; border:1px solid ${Yt.border};
        background:${Yt.panel}; color:${o}; font-family:inherit; font-size:15px;
        font-weight:800; cursor:pointer; text-align:left; transition:all .15s;
      `,c.addEventListener("mouseenter",()=>{c.style.background=o+"22",c.style.borderColor=o}),c.addEventListener("mouseleave",()=>{c.style.background=Yt.panel,c.style.borderColor=Yt.border}),c.addEventListener("click",l),e.appendChild(c)});const r=document.createElement("div");r.style.cssText=`margin-top:8px; font-size:11px; color:${Yt.muted};`,r.textContent=W("pause.version"),e.appendChild(r),this.overlay.appendChild(e)}show(e){this.cbs=e,this.visible=!0,this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){this.visible=!1,Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}isVisible(){return this.visible}dispose(){this.overlay.remove()}}const ot={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E"},Xg=[{id:"hw_check",icon:"📋",label:"Проверить домашнее задание",desc:"Открыть журнал ДЗ, выставить оценки каждому ученику",understandingBonus:2,attentionBonus:8},{id:"topic_review",icon:"📖",label:"Повторить тему",desc:"Освежить материал урока — первое объяснение станет точнее",understandingBonus:8,attentionBonus:0},{id:"energetic",icon:"⚡",label:"Яркое начало",desc:"Загадка или интригующий вопрос — класс сразу включается",understandingBonus:0,attentionBonus:12},{id:"skip",icon:"⏩",label:"Сразу к уроку",desc:"Без подготовки. Никаких бонусов, зато быстрее.",understandingBonus:0,attentionBonus:0}];class qg{constructor(){T(this,"overlay");this.overlay=document.createElement("div"),this.overlay.id="ew2-prep",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099;
      display:flex; align-items:center; justify-content:center;
      z-index:250; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .2s;
    `,document.body.appendChild(this.overlay)}open(e,t,n,i,r,a,o=!1){this.overlay.innerHTML="";const l=document.createElement("div");l.style.cssText=`
      background:${ot.bg}; border:1px solid ${ot.border}; border-radius:16px;
      padding:24px 28px; width:640px; max-width:96vw;
      display:flex; flex-direction:column; gap:14px;
    `;const c=document.createElement("div");c.innerHTML=`
      <div style="font-size:11px;color:${ot.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">🏫 Подготовка к уроку</div>
      <div style="font-weight:800;font-size:20px;color:${ot.mint};margin-bottom:2px;">${t} класс</div>
      <div style="font-size:14px;color:${ot.text};">📚 Тема: <span style="color:${ot.gold}">${e}</span></div>
      <div style="font-size:12px;color:${ot.muted};margin-top:4px;">
        ДЗ сдали: <span style="color:${n/i>.7?ot.mint:ot.gold};font-weight:700;">${n} из ${i}</span>
        ${o?`<span style="color:${ot.mint};margin-left:8px;">✅ Проверено</span>`:""}
      </div>
    `,l.appendChild(c);const d=document.createElement("div");d.style.cssText=`height:1px; background:${ot.border};`,l.appendChild(d);const h=document.createElement("div");h.style.cssText=`font-size:12px; color:${ot.muted}; font-weight:600;`,h.textContent="Как начнёте урок?",l.appendChild(h),Xg.forEach(u=>{const m=u.id==="hw_check",g=m&&o,x=document.createElement("button");x.style.cssText=`
        background:${ot.panel}; border:2px solid ${m&&!o&&n>0?ot.gold:ot.border};
        border-radius:12px; padding:12px 16px; cursor:${g?"not-allowed":"pointer"};
        text-align:left; display:flex; align-items:center; gap:12px; transition:all .15s;
        font-family:'Nunito',sans-serif; opacity:${g?.45:1};
      `;const f=document.createElement("span");f.style.cssText="font-size:26px; flex-shrink:0;",f.textContent=u.icon,x.appendChild(f);const p=document.createElement("div");if(p.style.cssText="flex:1;",p.innerHTML=`
        <div style="font-weight:800;color:${ot.text};font-size:14px;">${u.label}</div>
        <div style="font-size:11px;color:${ot.muted};margin-top:2px;">${u.desc}</div>
      `,x.appendChild(p),u.understandingBonus>0||u.attentionBonus>0){const S=document.createElement("div");S.style.cssText="text-align:right; flex-shrink:0;",u.understandingBonus>0&&(S.innerHTML+=`<div style="font-size:11px;color:${ot.mint};font-weight:700;">+${u.understandingBonus} понимание</div>`),u.attentionBonus>0&&(S.innerHTML+=`<div style="font-size:11px;color:${ot.gold};font-weight:700;">+${u.attentionBonus} внимание</div>`),x.appendChild(S)}g||(x.addEventListener("mouseenter",()=>{x.style.borderColor=ot.mint,x.style.background=ot.mint+"18"}),x.addEventListener("mouseleave",()=>{x.style.borderColor=m&&!o&&n>0?ot.gold:ot.border,x.style.background=ot.panel}),x.addEventListener("click",()=>{m?(this.hide(),a()):(this.hide(),r(u))})),l.appendChild(x)}),this.overlay.appendChild(l),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const Ke={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",text:"#E6EDF3",muted:"#8B949E",red:"#FF4D4D",blue:"#58A6FF"};class jg{constructor(){T(this,"overlay");T(this,"grades",new Map);this.overlay=document.createElement("div"),this.overlay.id="ew2-hwcheck",this.overlay.style.cssText=`
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
          <div style="font-size:11px;color:${Ke.muted};text-transform:uppercase;letter-spacing:1px;">📋 Проверка домашнего задания</div>
          <div style="font-weight:800;font-size:18px;color:${Ke.text};margin-top:2px;">Сдали: ${n.length} из ${e.length}</div>
        </div>
        <div style="text-align:right;font-size:12px;color:${Ke.muted};">
          <div style="color:${r>=70?Ke.mint:r>=40?Ke.gold:Ke.red};font-weight:700;font-size:22px;">${r}%</div>
          выполнили
        </div>
      </div>
      <div style="background:${Ke.border};border-radius:4px;height:6px;overflow:hidden;">
        <div style="width:${r}%;height:100%;background:${r>=70?Ke.mint:r>=40?Ke.gold:Ke.red};"></div>
      </div>
    `,n.length>0){const d=document.createElement("div");d.style.cssText=`font-size:12px;color:${Ke.mint};font-weight:700;padding:4px 0;`,d.textContent="✅ Выполнили — выставите оценку:",a.appendChild(d),n.forEach(h=>{const u=this.makeStudentRow(h,!0);a.appendChild(u)})}if(i.length>0){const d=document.createElement("div");d.style.cssText=`font-size:12px;color:${Ke.red};font-weight:700;padding:4px 0; margin-top:6px;`,d.textContent=`❌ Не выполнили (${i.length} чел.) — получат 2:`,a.appendChild(d);const h=document.createElement("div");h.style.cssText="display:flex; flex-wrap:wrap; gap:6px;",i.forEach(u=>{const m=document.createElement("div");m.style.cssText=`
          background:${Ke.red}22; border:1px solid ${Ke.red}44; border-radius:6px;
          padding:4px 10px; font-size:12px; color:${Ke.red}; font-weight:600;
        `,m.textContent=u.name,h.appendChild(m)}),a.appendChild(h)}const o=document.createElement("div");o.style.cssText=`display:flex; justify-content:flex-end; gap:10px; margin-top:8px; padding-top:12px; border-top:1px solid ${Ke.border};`;const l=document.createElement("button");l.style.cssText=`
      background:transparent; color:${Ke.muted}; font-weight:600; font-size:13px;
      padding:10px 16px; border-radius:10px; border:1px solid ${Ke.border}; cursor:pointer;
      font-family:'Nunito',sans-serif;
    `,l.textContent="Не проверять",l.addEventListener("click",()=>{this.hide(),t(new Map)});const c=document.createElement("button");c.style.cssText=`
      background:${Ke.mint}; color:#000; font-weight:800; font-size:14px;
      padding:10px 24px; border-radius:10px; border:none; cursor:pointer;
      font-family:'Nunito',sans-serif;
    `,c.textContent="✅ Завершить проверку",c.addEventListener("click",()=>{this.hide(),t(new Map(this.grades))}),o.appendChild(l),o.appendChild(c),a.appendChild(o),this.overlay.appendChild(a),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}makeStudentRow(e,t){const n=document.createElement("div");n.style.cssText=`
      display:flex; align-items:center; gap:10px; padding:8px 12px;
      background:${Ke.panel}; border-radius:8px; border:1px solid ${Ke.border};
    `;const i=document.createElement("span");i.style.cssText=`flex:1; font-weight:700; color:${Ke.text}; font-size:13px;`,i.textContent=e.name,n.appendChild(i);const r=document.createElement("span"),a={genius:"🧠",lazy:"😴",bully:"😤",anxious:"😰",helper:"🤝",average:"😊"};if(r.textContent=a[e.type]??"😊",r.style.cssText="font-size:16px;",n.appendChild(r),t){const o=document.createElement("div");o.style.cssText="display:flex; gap:4px;";const l={2:Ke.red,3:"#FFD700",4:Ke.blue,5:Ke.mint};[2,3,4,5].forEach(c=>{const d=document.createElement("button");d.textContent=String(c),d.style.cssText=`
          width:30px; height:30px; border-radius:6px; border:2px solid ${Ke.border};
          background:transparent; color:${l[c]}; font-weight:800; font-size:13px;
          cursor:pointer; transition:all .12s; font-family:'Nunito',sans-serif;
        `,d.addEventListener("click",()=>{o.querySelectorAll("button").forEach(h=>{h.style.background="transparent",h.style.borderColor=Ke.border}),d.style.background=l[c]+"33",d.style.borderColor=l[c],this.grades.set(e.id,c)}),o.appendChild(d)}),n.appendChild(o)}return n}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const Yg=.0025,Is=[new R(-14,.24,0),new R(-10,.24,.4),new R(-6,.24,-.3),new R(-2,.24,.5),new R(2,.24,-.4),new R(6,.24,.3),new R(10,.24,-.5),new R(14,.24,0),new R(18,.24,.4),new R(-8,.24,0),new R(4,.24,0)],ol={chat:["💬","😄","🗣️"],help:["🤝","💡","📖"],conflict:["😠","💢","😤"]};class Kg{constructor(){T(this,"students",[]);T(this,"targets",new Map);T(this,"socialEvents",[]);T(this,"socialTick",0);T(this,"breakTimer",0);T(this,"onBreakEnd",null);T(this,"active",!1);T(this,"bubbles",[]);T(this,"bubbleContainer");this.bubbleContainer=document.createElement("div"),this.bubbleContainer.style.cssText=`
      position:fixed; inset:0; pointer-events:none; z-index:90;
      font-family:'Nunito',sans-serif;
    `,document.body.appendChild(this.bubbleContainer)}start(e,t,n){this.students=e,this.breakTimer=t,this.onBreakEnd=n,this.active=!0,this.socialEvents=[],this.socialTick=0,this.targets.clear(),this.clearBubbles(),e.forEach((i,r)=>{const a=Is[r%Is.length],o=new R((Math.random()-.5)*6,0,(Math.random()-.5)*1.2),l=a.clone().add(o);l.x=Math.max(-17,Math.min(22,l.x)),l.z=Math.max(-1.8,Math.min(1.8,l.z)),l.y=.24,this.targets.set(i.data.id,l),i.seated=!1,i.setEmotion("happy")})}update(e){if(this.active){if(this.breakTimer-=e,this.breakTimer<=0){this.end();return}this.students.forEach(t=>{const n=this.targets.get(t.data.id);if(!n)return;const i=new R().subVectors(n,t.group.position);i.y=0;const r=i.length();if(r>.15){const a=Math.min(Yg*e,r);i.normalize().multiplyScalar(a),t.group.position.addScaledVector(i,1),t.group.position.y=.24,t.group.rotation.y=Math.atan2(i.x,i.z)}else{const a=Is[Math.floor(Math.random()*Is.length)],o=new R((Math.random()-.5)*5,0,(Math.random()-.5)*1.2),l=a.clone().add(o);if(l.x=Math.max(-17,Math.min(22,l.x)),l.z=Math.max(-1.8,Math.min(1.8,l.z)),l.y=.24,this.targets.set(t.data.id,l),Math.random()<.3){const c=["happy","happy","bored","neutral"];t.setEmotion(c[Math.floor(Math.random()*c.length)])}}}),this.socialEvents=this.socialEvents.filter(t=>(t.bubbleTimer-=e,t.bubbleTimer>0)),this.socialTick+=e,this.socialTick>=3e3&&(this.socialTick=0,this.trySpawnSocialEvent())}}trySpawnSocialEvent(){if(!(this.students.length<2))for(let e=0;e<8;e++){const t=Math.floor(Math.random()*this.students.length);let n=Math.floor(Math.random()*this.students.length);if(t===n)continue;const i=this.students[t],r=this.students[n];if(i.group.position.distanceTo(r.group.position)>6)continue;let o="chat";const l=i.data.type,c=r.data.type;if(l==="bully"||c==="bully"?o=Math.random()<.4?"conflict":"chat":((l==="genius"||l==="helper")&&(c==="anxious"||c==="average"||c==="lazy")||(c==="genius"||c==="helper")&&(l==="anxious"||l==="average"||l==="lazy"))&&(o="help"),o==="help"){const h=l==="genius"||l==="helper"?i:r,u=h===i?r:i;u.modifyStat("motivation",3),u.modifyStat("understanding",2),h.setEmotion("happy"),u.setEmotion("happy")}else if(o==="conflict"){const h=l==="bully"?r:i;h.modifyStat("motivation",-4),h.setEmotion("troubled")}else i.setEmotion("happy"),r.setEmotion("happy");this.socialEvents.push({aId:i.data.id,bId:r.data.id,type:o,bubbleTimer:2500});const d=ol[o][Math.floor(Math.random()*ol[o].length)];this.spawnBubbleFor(i.data.id,r.data.id,d);break}}spawnBubbleFor(e,t,n){const i=document.createElement("div");if(i.textContent=n,i.style.cssText=`
      position:absolute; font-size:22px; top:30%; left:50%;
      transform:translate(-50%,-50%); animation:floatUp 2.5s ease-out forwards;
    `,!document.querySelector("#ew2-bubble-style")){const r=document.createElement("style");r.id="ew2-bubble-style",r.textContent="@keyframes floatUp{0%{opacity:1;transform:translate(-50%,-50%) translateY(0)}100%{opacity:0;transform:translate(-50%,-50%) translateY(-40px)}}",document.head.appendChild(r)}this.bubbleContainer.appendChild(i),this.bubbles.push({el:i,studentId:e}),setTimeout(()=>i.remove(),2600)}clearBubbles(){this.bubbles.forEach(e=>e.el.remove()),this.bubbles=[]}end(){this.active&&(this.active=!1,this.clearBubbles(),this.students.forEach(e=>{e.setEmotion("neutral"),e.seated=!0}),this.onBreakEnd?.())}forceEnd(){this.end()}isActive(){return this.active}getRemaining(){return Math.max(0,this.breakTimer)}dispose(){this.bubbleContainer.remove()}}const Kt={bg:"#0D1117",panel:"#161B22",border:"#30363D",text:"#E6EDF3",muted:"#8B949E"},Zg=[{id:"warning",icon:"✋",label:"Дать замечание",desc:"Предупредить за нарушение дисциплины",color:"#FFD700"},{id:"confiscate_phone",icon:"📵",label:"Отобрать телефон",desc:"Забрать телефон до конца урока",color:"#FF4D4D"},{id:"wake_up",icon:"👋",label:"Разбудить",desc:"Разбудить спящего ученика",color:"#58A6FF"},{id:"praise",icon:"⭐",label:"Похвалить",desc:"Отметить усердие или ответ ученика",color:"#4FFFB0"},{id:"dismiss",icon:"🚪",label:"Выгнать из класса",desc:"Выгнать за серьёзное поведение (-15 дисциплина)",color:"#FF4D4D"}];class Jg{constructor(){T(this,"overlay");this.overlay=document.createElement("div"),this.overlay.id="ew2-remark",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000077;
      display:flex; align-items:center; justify-content:center;
      z-index:280; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .15s;
    `,document.body.appendChild(this.overlay)}open(e,t){this.overlay.innerHTML="";const n={genius:"🧠 Отличник",lazy:"😴 Лентяй",bully:"😤 Хулиган",anxious:"😰 Тревожный",helper:"🤝 Помощник",average:"😊 Обычный"},i=document.createElement("div");i.style.cssText=`
      background:${Kt.bg}; border:1px solid ${Kt.border}; border-radius:14px;
      padding:20px 24px; width:460px; max-width:94vw;
      display:flex; flex-direction:column; gap:10px;
    `,i.innerHTML=`
      <div style="display:flex;align-items:center;gap:10px;padding-bottom:10px;border-bottom:1px solid ${Kt.border};">
        <div style="font-size:26px;">${n[e.type]?.split(" ")[0]??"😊"}</div>
        <div>
          <div style="font-weight:800;font-size:17px;color:${Kt.text};">${e.name}</div>
          <div style="font-size:11px;color:${Kt.muted};">${n[e.type]??""} · Дисциплина: ${e.stats.behavior}/100 · Внимание: ${e.stats.attention}/100</div>
        </div>
      </div>
    `,Zg.filter(o=>o.id==="confiscate_phone"?e.stats.attention<35:o.id==="wake_up"?e.stats.attention<20:o.id==="dismiss"?e.stats.behavior<30:!0).forEach(o=>{const l=document.createElement("button");l.style.cssText=`
        background:${Kt.panel}; border:1px solid ${Kt.border}; border-radius:10px;
        padding:10px 14px; cursor:pointer; text-align:left;
        display:flex; align-items:center; gap:10px; transition:all .12s;
        font-family:'Nunito',sans-serif; width:100%;
      `,l.innerHTML=`
        <span style="font-size:20px;">${o.icon}</span>
        <div>
          <div style="font-weight:700;color:${o.color};font-size:13px;">${o.label}</div>
          <div style="font-size:11px;color:${Kt.muted};">${o.desc}</div>
        </div>
      `,l.addEventListener("mouseenter",()=>{l.style.borderColor=o.color,l.style.background=o.color+"18"}),l.addEventListener("mouseleave",()=>{l.style.borderColor=Kt.border,l.style.background=Kt.panel}),l.addEventListener("click",()=>{this.hide(),t({type:o.id,studentId:e.id})}),i.appendChild(l)});const a=document.createElement("button");a.style.cssText=`
      background:transparent; border:1px solid ${Kt.border}; border-radius:8px;
      color:${Kt.muted}; font-size:12px; font-weight:600; padding:8px;
      cursor:pointer; font-family:'Nunito',sans-serif; margin-top:2px;
    `,a.textContent="Отмена",a.addEventListener("click",()=>this.hide()),i.appendChild(a),this.overlay.appendChild(i),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",Tt()}dispose(){this.overlay.remove()}}const ii=class ii{constructor(){T(this,"ctx",null);T(this,"master",null);T(this,"sfx",null);T(this,"music",null);T(this,"_ready",!1)}static getInstance(){return ii._inst||(ii._inst=new ii),ii._inst}init(){if(!this._ready)try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.65,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.music=this.ctx.createGain(),this.music.gain.value=.55,this.music.connect(this.master),this._ready=!0,this._startAmbient()}catch{}}playBell(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=t;const a=e+n*.13;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.15,a+.02),r.gain.exponentialRampToValueAtTime(.001,a+2),i.connect(r),r.connect(this.sfx),i.start(a),i.stop(a+2.1)})}playClick(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(900,e),t.frequency.exponentialRampToValueAtTime(450,e+.06),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(n),n.connect(this.sfx),t.start(e),t.stop(e+.11)}playChime(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.value=t;const a=e+n*.08;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.09,a+.01),r.gain.exponentialRampToValueAtTime(.001,a+.9),i.connect(r),r.connect(this.sfx),i.start(a),i.stop(a+1)})}playWarning(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime;for(let t=0;t<2;t++){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.value=340-t*40;const r=e+t*.18;i.gain.setValueAtTime(.07,r),i.gain.exponentialRampToValueAtTime(.001,r+.15),n.connect(i),i.connect(this.sfx),n.start(r),n.stop(r+.18)}}playWrite(){if(!this.ctx||!this.sfx)return;const e=this.ctx.sampleRate,n=this.ctx.createBuffer(1,Math.floor(e*.08),e),i=n.getChannelData(0);for(let l=0;l<i.length;l++)i[l]=(Math.random()*2-1)*(1-l/i.length)*.4;const r=this.ctx.createBufferSource(),a=this.ctx.createBiquadFilter(),o=this.ctx.createGain();a.type="bandpass",a.frequency.value=4e3,a.Q.value=1.2,o.gain.value=.04,r.buffer=n,r.connect(a),a.connect(o),o.connect(this.sfx),r.start()}playRemark(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(440,e),t.frequency.linearRampToValueAtTime(330,e+.2),n.gain.setValueAtTime(.07,e),n.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(n),n.connect(this.sfx),t.start(e),t.stop(e+.35)}_startAmbient(){if(!this.ctx||!this.music)return;const e=[261.63,293.66,329.63,392,440,523.25,587.33,659.25],t=()=>{if(!this.ctx||!this.music)return;const n=this.ctx.currentTime,i=e[Math.floor(Math.random()*e.length)],r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.value=i;const o=1.8+Math.random()*2.2;a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.08,n+.3),a.gain.setValueAtTime(.08,n+o-.4),a.gain.linearRampToValueAtTime(0,n+o),r.connect(a),a.connect(this.music),r.start(n),r.stop(n+o+.1),setTimeout(t,(o*.65+Math.random()*2)*1e3)};t()}playGameOver(){if(!this.ctx||!this.sfx)return;const e=this.ctx.currentTime;this.music&&(this.music.gain.setValueAtTime(this.music.gain.value,e),this.music.gain.linearRampToValueAtTime(0,e+1.5)),[440,330,220].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t;const a=e+n*.55;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.22,a+.05),r.gain.exponentialRampToValueAtTime(.001,a+1.2),i.connect(r),r.connect(this.sfx),i.start(a),i.stop(a+1.3)})}setMasterVolume(e){this.master&&(this.master.gain.value=Math.max(0,Math.min(1,e)))}setMusicVolume(e){this.music&&(this.music.gain.value=Math.max(0,Math.min(1,e)))}get ready(){return this._ready}};T(ii,"_inst");let ea=ii;const Qe={bg:"#0D1117",panel:"#161B22",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",red:"#FF4D4D",green:"#3FB950",blue:"#58A6FF",text:"#E6EDF3",muted:"#8B949E"};class Qg{constructor(){T(this,"overlay");T(this,"onNext",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-report",this.overlay.style.cssText=`
      position:fixed; inset:0; background:#00000099; display:flex; align-items:center;
      justify-content:center; z-index:600; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .25s; backdrop-filter:blur(4px);
      overflow-y:auto; padding:20px;
    `,document.body.appendChild(this.overlay)}show(e,t,n){this.onNext=n,this.overlay.innerHTML="";const i=document.createElement("div");i.style.cssText=`
      background:${Qe.bg}; border:1px solid ${Qe.border}; border-radius:18px;
      padding:30px 36px; width:560px; max-width:96vw; display:flex; flex-direction:column; gap:20px;
    `,i.innerHTML+=`
      <div style="text-align:center;">
        <div style="font-size:11px; color:${Qe.muted}; text-transform:uppercase; letter-spacing:1px;">${W("sched.day")} ${e.dayNumber} · ${e.subject}</div>
        <h2 style="margin:6px 0 0; font-size:22px; color:${Qe.text}; font-weight:900;">${W("report.title")}</h2>
        <div style="font-size:15px; color:${Qe.mint}; margin-top:4px; font-weight:700;">«${e.topic}»</div>
      </div>
    `;const r=document.createElement("div");if(r.style.cssText="display:grid; grid-template-columns:1fr 1fr; gap:10px;",[{label:W("report.understood"),value:`${e.understoodCount} / ${this.getTotalStudents()}`,color:Qe.mint},{label:W("report.avg_und"),value:`${e.avgUnderstanding}%`,color:Qe.blue},{label:W("report.xp"),value:`+${e.xpEarned} XP`,color:Qe.gold},{label:W("report.rep"),value:e.repDelta>=0?`+${e.repDelta}`:String(e.repDelta),color:e.repDelta>=0?Qe.green:Qe.red}].forEach(c=>{const d=document.createElement("div");d.style.cssText=`background:${Qe.panel}; border:1px solid ${Qe.border}; border-radius:10px; padding:14px 16px;`,d.innerHTML=`<div style="font-size:12px; color:${Qe.muted}; margin-bottom:4px;">${c.label}</div><div style="font-size:20px; font-weight:900; color:${c.color};">${c.value}</div>`,r.appendChild(d)}),i.appendChild(r),e.notebookGrades.length>0){const c=document.createElement("div");c.innerHTML=`<div style="font-size:13px; font-weight:700; color:${Qe.muted}; margin-bottom:8px;">${W("report.nb_grades")}</div>`;const d=document.createElement("div");d.style.cssText="display:flex; flex-direction:column; gap:4px;",e.notebookGrades.forEach(h=>{const u=h.grade===5?Qe.green:h.grade===4?Qe.mint:h.grade===3?Qe.gold:Qe.red,m=document.createElement("div");m.style.cssText=`display:flex; align-items:center; justify-content:space-between; padding:6px 12px; background:${Qe.panel}; border-radius:6px; font-size:13px;`,m.innerHTML=`<span style="color:${Qe.text};">${h.studentName}</span><span style="color:${u}; font-weight:900; font-size:16px;">${h.grade??"—"}</span>`,d.appendChild(m)}),c.appendChild(d),i.appendChild(c)}const o=document.createElement("div");o.style.cssText=`padding:10px 14px; border-radius:8px; border-left:3px solid ${e.hwGiven?Qe.blue:Qe.muted}; background:${Qe.panel};`,o.innerHTML=e.hwGiven?`<span style="color:${Qe.blue}; font-weight:700;">${W("report.hw_given")}</span><span style="color:${Qe.muted}; font-size:13px; margin-left:8px;">(${e.hwDifficulty})</span>`:`<span style="color:${Qe.muted}; font-size:13px;">${W("report.hw_none")}</span>`,i.appendChild(o);const l=document.createElement("button");l.textContent=W("report.next"),l.style.cssText=`padding:13px; border-radius:10px; border:none; background:${Qe.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`,l.addEventListener("click",()=>{this.hide(),this.onNext?.()}),i.appendChild(l),this.overlay.appendChild(i),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}getTotalStudents(){return 15}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const zt={bg:"#060a14",panel:"#0D1117",border:"#30363D",mint:"#4FFFB0",text:"#E6EDF3",muted:"#8B949E"};class e0{constructor(){T(this,"overlay");T(this,"onStart",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-schedule",this.overlay.style.cssText=`
      position:fixed; inset:0; background:${zt.bg}; display:flex; align-items:center;
      justify-content:center; z-index:900; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .3s;
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
        <span style="font-size:18px;">${h?"✅":d?"▶":"○"}</span>
      `,r.appendChild(c)}),i.appendChild(r);const a=document.createElement("button"),o=t.find(l=>l.current);a.textContent=o?`${W("sched.start")} ${o.index+1}`:W("sched.continue"),a.style.cssText=`padding:13px; border-radius:10px; border:none; background:${zt.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`,a.addEventListener("click",()=>{this.hide(),this.onStart?.()}),i.appendChild(a),this.overlay.appendChild(i),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const mt={bg:"#060a14",panel:"#0D1117",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",purple:"#BC8CFF",text:"#E6EDF3",muted:"#8B949E"},ll={pedagogy:mt.mint,psychology:mt.purple,org:mt.gold};class t0{constructor(e){T(this,"overlay");T(this,"tree");T(this,"skillPoints",0);T(this,"onClose",null);this.tree=e,this.overlay=document.createElement("div"),this.overlay.id="ew2-skilltree",this.overlay.style.cssText=`
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
    `;const n=document.createElement("button");n.textContent="✕",n.style.cssText=`width:34px; height:34px; border-radius:8px; border:1px solid ${mt.border}; background:${mt.panel}; color:${mt.text}; cursor:pointer; font-size:16px;`,n.addEventListener("click",()=>{this.hide(),this.onClose?.()}),t.appendChild(n),e.appendChild(t);const i=Qr,r={};i.forEach(l=>{r[l.branch]||(r[l.branch]=[]),r[l.branch].push(l)});const a={pedagogy:W("skills.branch.pedagogy"),psychology:W("skills.branch.psychology"),org:W("skills.branch.org")},o=document.createElement("div");o.style.cssText="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;",Object.entries(r).forEach(([l,c])=>{const d=document.createElement("div");d.style.cssText="display:flex; flex-direction:column; gap:8px;";const h=document.createElement("div");h.style.cssText=`font-size:13px; font-weight:800; color:${ll[l]??mt.mint}; padding-bottom:4px; border-bottom:1px solid ${mt.border};`,h.textContent=a[l]??l,d.appendChild(h),c.forEach(u=>{const m=this.tree.has(u.id),g=!m&&this.tree.canUnlock(u.id),x=ll[l]??mt.mint,f=document.createElement("button");f.style.cssText=`
          padding:10px 12px; border-radius:8px; text-align:left; cursor:${g&&!m?"pointer":"default"};
          border:1px solid ${m?x:mt.border};
          background:${m?x+"18":g?mt.panel:"#0a0d12"};
          transition:all .15s; width:100%;
          opacity:${!m&&!g?"0.5":"1"};
        `,f.innerHTML=`
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span style="font-size:18px;">${u.icon}</span>
            <span style="font-weight:800; font-size:13px; color:${m?x:mt.text};">${u.name}</span>
            ${m?`<span style="margin-left:auto; color:${x}; font-size:12px;">✓</span>`:`<span style="margin-left:auto; color:${mt.muted}; font-size:12px;">${u.cost} SP</span>`}
          </div>
          <div style="font-size:11px; color:${mt.muted}; line-height:1.4;">${u.desc}</div>
        `,g&&!m&&(f.addEventListener("mouseenter",()=>{f.style.borderColor=x,f.style.background=x+"22"}),f.addEventListener("mouseleave",()=>{f.style.borderColor=mt.border,f.style.background=mt.panel}),f.addEventListener("click",()=>{this.tree.unlock(u.id),this.skillPoints=this.tree.points,this.render()})),d.appendChild(f)}),o.appendChild(d)}),e.appendChild(o),this.overlay.appendChild(e)}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const ht={bg:"#060a14",panel:"#0D1117",border:"#30363D",mint:"#4FFFB0",gold:"#FFD700",red:"#FF4D4D",green:"#3FB950",blue:"#58A6FF",text:"#E6EDF3",muted:"#8B949E"};class n0{constructor(){T(this,"overlay");T(this,"onNext",null);this.overlay=document.createElement("div"),this.overlay.id="ew2-week",this.overlay.style.cssText=`
      position:fixed; inset:0; background:${ht.bg}; display:flex; align-items:center;
      justify-content:center; z-index:800; font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none; transition:opacity .3s; overflow-y:auto; padding:20px;
    `,document.body.appendChild(this.overlay)}show(e,t){this.onNext=t,this.overlay.innerHTML="";const n=document.createElement("div");n.style.cssText=`
      background:${ht.panel}; border:1px solid ${ht.border}; border-radius:20px;
      padding:36px 44px; width:600px; max-width:96vw; display:flex; flex-direction:column; gap:24px;
    `,n.innerHTML=`
      <div style="text-align:center;">
        <div style="font-size:36px; margin-bottom:8px;">${e.promoted?"🎉":"📅"}</div>
        <h2 style="margin:0; font-size:26px; font-weight:900; color:${ht.text};">${W("week.title")} ${e.weekNumber}</h2>
        ${e.promoted?`<div style="color:${ht.gold}; font-weight:700; font-size:15px; margin-top:6px;">${W("week.promoted")}</div>`:""}
      </div>
    `;const i=document.createElement("div");i.style.cssText="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px;",[{label:W("week.xp"),val:`+${e.xpTotal} XP`,color:ht.gold},{label:W("week.rep"),val:e.repDelta>=0?`+${e.repDelta}`:String(e.repDelta),color:e.repDelta>=0?ht.green:ht.red},{label:W("week.money"),val:`${e.moneyEarned.toLocaleString("ru-RU")} ₸`,color:ht.mint},{label:W("week.sp"),val:`+${e.skillPoints} SP`,color:ht.blue}].forEach(d=>{const h=document.createElement("div");h.style.cssText=`background:${ht.bg}; border:1px solid ${ht.border}; border-radius:12px; padding:16px 18px;`,h.innerHTML=`
        <div style="font-size:12px; color:${ht.muted}; margin-bottom:4px;">${d.label}</div>
        <div style="font-size:22px; font-weight:900; color:${d.color};">${d.val}</div>
      `,i.appendChild(h)}),n.appendChild(i);const a=document.createElement("div");a.style.cssText=`background:${ht.bg}; border:1px solid ${ht.border}; border-radius:10px; padding:14px 18px; display:flex; align-items:center; gap:14px;`,a.innerHTML=`
      <span style="font-size:30px;">🎖</span>
      <div>
        <div style="font-size:12px; color:${ht.muted};">${W("week.career")}</div>
        <div style="font-size:16px; font-weight:800; color:${ht.gold};">${e.careerLevel.name}</div>
        <div style="font-size:12px; color:${ht.muted}; margin-top:2px;">${W("week.bonus")} ${(e.careerLevel.salaryBonus*100).toFixed(0)}%</div>
      </div>
    `,n.appendChild(a);const o=document.createElement("div");o.innerHTML=`<div style="font-size:13px; font-weight:700; color:${ht.muted}; margin-bottom:8px;">${W("week.lessons")} ${e.lessonReports.length}</div>`;const l=document.createElement("div");l.style.cssText="display:flex; flex-direction:column; gap:4px; max-height:160px; overflow-y:auto;",e.lessonReports.forEach(d=>{const h=document.createElement("div");h.style.cssText=`display:flex; justify-content:space-between; font-size:13px; padding:5px 10px; background:${ht.bg}; border-radius:6px; color:${ht.text};`,h.innerHTML=`<span>«${d.topic}»</span><span style="color:${ht.mint};">+${d.xpEarned} XP</span>`,l.appendChild(h)}),o.appendChild(l),n.appendChild(o);const c=document.createElement("button");c.textContent=W("week.next"),c.style.cssText=`padding:14px; border-radius:10px; border:none; background:${ht.mint}; color:#000; font-size:15px; font-weight:900; cursor:pointer; font-family:inherit;`,c.addEventListener("click",()=>{this.hide(),this.onNext?.()}),n.appendChild(c),this.overlay.appendChild(n),this.overlay.style.opacity="1",this.overlay.style.pointerEvents="auto",Pt()}hide(){Tt(),this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none"}dispose(){this.overlay.remove()}}const cl=[{name:"Aigerim Seitkali",subject:"Mathematics",grade:9},{name:"ErlanBekuly",subject:"Physics",grade:10},{name:"Gulnar Kasymova",subject:"Kazakh Lang.",grade:8},{name:"Dosym Nurlanov",subject:"Chemistry",grade:11},{name:"Zarina Alieva",subject:"Biology",grade:7},{name:"Bolatbek Sarsenov",subject:"Kazakh Hist.",grade:9},{name:"Kamila Zhanserik",subject:"English",grade:10},{name:"Nursulu Baizhanova",subject:"Computer Sci.",grade:11}],dl=[{quality:"excellent",notes:["Teacher explains material very clearly","Students are fully engaged","Excellent discipline and learning atmosphere"],hint:"👍 Model Lesson"},{quality:"excellent",notes:["Differentiated approach to students","Uses interactive methods","Lesson objective achieved"],hint:"🌟 Excellent Lesson"},{quality:"good",notes:["Lesson pace slightly fast","Some students are distracted","Generally clear instruction"],hint:"👌 Good Lesson"},{quality:"good",notes:["Topic covered but pace is high","A few students falling behind","Good classroom interaction"],hint:"👌 Good Lesson"},{quality:"poor",notes:["Students struggling to follow explanation","Discipline issues observed","Methodology needs improvement"],hint:"⚠️ Needs Improvement"},{quality:"poor",notes:["Lesson objective not clearly stated","Students are passive","Methodological support required"],hint:"⚠️ Needs Support"}],hl=[{icon:"😤",title:"Hallway Conflict",description:"Two 9th-grade students got into a fight during break. One is trying to leave school mid-day.",options:[{label:"📞 Call both parents",repDelta:3,scoreDelta:2,color:"#1a6b48"},{label:"📋 Log in behavior journal",repDelta:1,scoreDelta:1,color:"#2a5a8a"},{label:"🚪 Let them go home",repDelta:-3,scoreDelta:0,color:"#7a2a2a"}]},{icon:"📱",title:"Widespread Phone Use",description:"A teacher reports: half of grade 10 is openly on phones during class. Asking for VP intervention.",options:[{label:"📢 Announce school-wide ban",repDelta:5,scoreDelta:2,color:"#1a6b48"},{label:"🤝 Go support the teacher in class",repDelta:2,scoreDelta:1,color:"#2a5a8a"},{label:"🤷 Leave it to the teacher",repDelta:-1,scoreDelta:0,color:"#7a2a2a"}]},{icon:"😰",title:"Teacher Requests Unplanned Day Off",description:"Erlan Bekuly is asking for a day off for family reasons. No substitute available — 3 physics lessons.",options:[{label:"✅ Approve — assign independent work",repDelta:3,scoreDelta:1,color:"#1a6b48"},{label:"📝 Ask another teacher to cover",repDelta:1,scoreDelta:0,color:"#2a5a8a"},{label:"❌ Deny — no substitute available",repDelta:-2,scoreDelta:-1,color:"#7a2a2a"}]},{icon:"🏆",title:"Math Olympiad",description:"District olympiad is tomorrow. Aigerim Seitkali asks to release 3 top students for preparation.",options:[{label:"🌟 Give 2 hours prep time",repDelta:6,scoreDelta:2,color:"#1a6b48"},{label:"📚 Give study list to take home",repDelta:2,scoreDelta:1,color:"#2a5a8a"},{label:"⏭️ They participate as-is",repDelta:0,scoreDelta:0,color:"#7a2a2a"}]},{icon:"😢",title:"Student Crying in Class",description:"Gulnar Kasymova reports: grade 8 student Ayaulym is crying after a test. Classmates are mocking her.",options:[{label:"💬 Talk to the class about support",repDelta:5,scoreDelta:2,color:"#1a6b48"},{label:"📞 Call Ayaulym's parents",repDelta:3,scoreDelta:1,color:"#2a5a8a"},{label:"🙄 Let the teacher handle it",repDelta:-2,scoreDelta:0,color:"#7a2a2a"}]},{icon:"🌐",title:"Social Media Complaint",description:"Parents posted in the WhatsApp group: history teacher allegedly gives too much homework.",options:[{label:"📊 Analyse workload from grade journal",repDelta:4,scoreDelta:2,color:"#1a6b48"},{label:"🤝 Talk with teacher and parents",repDelta:3,scoreDelta:1,color:"#2a5a8a"},{label:"🚫 Ignore social media",repDelta:-4,scoreDelta:-1,color:"#7a2a2a"}]},{icon:"🧹",title:"Spill in Classroom",description:"Cleaning staff reported: water was spilled in room 103 before a lesson. Students are already entering.",options:[{label:"🚪 Urgently move lesson to another room",repDelta:4,scoreDelta:2,color:"#1a6b48"},{label:"🧹 Ask to clean quickly, delay lesson",repDelta:1,scoreDelta:0,color:"#2a5a8a"},{label:"😐 Hold lesson anyway — not a big deal",repDelta:-2,scoreDelta:-1,color:"#7a2a2a"}]},{icon:"🎓",title:"Mentoring a New Teacher",description:"Kamila Zhanserik has only been working 2 months. A senior teacher suggests running an open lesson with a mentor.",options:[{label:"📌 Organise open lesson + feedback session",repDelta:6,scoreDelta:2,color:"#1a6b48"},{label:"📖 Give methodological literature",repDelta:2,scoreDelta:1,color:"#2a5a8a"},{label:"🤷 Let her figure it out herself",repDelta:-1,scoreDelta:0,color:"#7a2a2a"}]},{icon:"🔥",title:"Fire Alarm During Lesson",description:"Fire alarm went off in Block A during a test. This is the 4th false alarm this month.",options:[{label:"🚨 Immediately evacuate all per protocol",repDelta:7,scoreDelta:2,color:"#1a6b48"},{label:"📋 Send duty officer to check",repDelta:1,scoreDelta:0,color:"#2a5a8a"},{label:"😒 Continue test — probably another false alarm",repDelta:-5,scoreDelta:-2,color:"#7a2a2a"}]},{icon:"📰",title:"Journalist at School",description:"A local reporter wants to write a story about the school. Asks to tour classrooms and speak to students.",options:[{label:"🎤 Give a tour, prepare top students",repDelta:8,scoreDelta:2,color:"#1a6b48"},{label:"📄 Give official comment, restricted access",repDelta:2,scoreDelta:1,color:"#2a5a8a"},{label:"🚫 Politely decline — bad timing",repDelta:-1,scoreDelta:0,color:"#7a2a2a"}]},{icon:"💊",title:"Student Fell Ill in Class",description:"Nursulu Baizhanova reports: a grade 11 student became ill right during the lesson. School nurse is on sick leave.",options:[{label:"🚑 Call an ambulance immediately",repDelta:6,scoreDelta:2,color:"#1a6b48"},{label:"🛋️ Escort to medical room and call parents",repDelta:3,scoreDelta:1,color:"#2a5a8a"},{label:"💧 Give water — it will pass",repDelta:-4,scoreDelta:-1,color:"#7a2a2a"}]},{icon:"🏅",title:"District Certificate of Merit",description:'The district education department offers to nominate one teacher for "Best Teacher of the Year."',options:[{label:"🌟 Nominate based on results",repDelta:5,scoreDelta:2,color:"#1a6b48"},{label:"🗳️ Hold a vote among teachers",repDelta:3,scoreDelta:1,color:"#2a5a8a"},{label:"⏭️ Skip nomination this year",repDelta:-1,scoreDelta:0,color:"#7a2a2a"}]}],Ys=class Ys{constructor(){T(this,"el",null);T(this,"records",[]);T(this,"currentTeacherIdx",0);T(this,"onDoneCallback",null);T(this,"_accRepDelta",0);T(this,"_globalScore",0)}get totalScore(){return this.records.reduce((e,t)=>e+t.score,0)}get inspectCount(){return this.records.length}setGlobalScore(e){this._globalScore=e}show(e,t){this.onDoneCallback=t,this._accRepDelta=0,Pt(),this._renderBriefing(e)}_nextTeacher(){const e=cl[this.currentTeacherIdx%cl.length];return this.currentTeacherIdx++,e}_renderBriefing(e){this.el&&this.el.remove();const t=this._globalScore,n=Ys.DIRECTOR_THRESHOLD,i=Math.min(100,Math.round(t/n*100)),r=i>=80?"#4FFFB0":i>=50?"#FFD700":"#58A6FF",a=document.createElement("div");a.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;',a.innerHTML=`
<div style="background:#12203a;color:#e0e8f0;border-radius:16px;padding:38px 48px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);border:1px solid #1e3a5a;">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:6px;">
    🏛️ Deputy Principal — Morning Briefing
  </div>
  <div style="font-size:26px;font-weight:800;margin-bottom:4px;color:#fff;">Good morning, Deputy Principal!</div>
  <div style="color:#8ab4d4;font-size:14px;margin-bottom:22px;">
    Today you are inspecting: <strong style="color:#a8d8ff;">${e}</strong>
  </div>

  <!-- Progress to Director -->
  <div style="background:#0a1628;border-radius:10px;padding:16px 20px;margin-bottom:20px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div style="font-size:13px;color:#5a8cc0;font-weight:600;">📈 Progress to Director</div>
      <div style="font-size:13px;color:${r};font-weight:800;">${t} / ${n} pts</div>
    </div>
    <div style="background:#1a2a40;border-radius:4px;height:10px;overflow:hidden;">
      <div style="width:${i}%;height:100%;background:${r};border-radius:4px;transition:width .4s;"></div>
    </div>
    <div style="font-size:12px;color:#4a6a8a;margin-top:6px;">
      ${i>=100?"🎉 Ready for Director appointment!":`${n-t} more points until Director`}
    </div>
  </div>

  <!-- Today's focus -->
  <div style="background:#0f1e30;border-radius:8px;padding:14px 18px;margin-bottom:24px;">
    <div style="font-size:13px;color:#5a8cc0;margin-bottom:8px;">📋 Today's tasks:</div>
    <div style="font-size:13px;color:#bad4e8;line-height:1.7;">
      • Visit a lesson in <strong>${e}</strong><br>
      • Evaluate the teacher's performance<br>
      • Handle school operational issues
    </div>
  </div>

  <button id="vp-brief-start"
    style="width:100%;padding:14px;border:none;border-radius:10px;cursor:pointer;
      background:linear-gradient(135deg,#1a4a8a,#2a6ab0);color:#fff;
      font-size:16px;font-weight:700;">
    ▶ Start Working Day
  </button>
</div>`,a.querySelector("#vp-brief-start").addEventListener("click",()=>{a.remove(),this.el=null,Math.random()<.5?this._renderIncident(e):this._render(e)}),document.body.appendChild(a),this.el=a}_renderIncident(e){this.el&&this.el.remove();const t=hl[Math.floor(Math.random()*hl.length)],n=document.createElement("div");n.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.78);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;',n.innerHTML=`
<div style="background:#1a2535;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#7a9ec4;text-transform:uppercase;margin-bottom:8px;">
    🏛️ Deputy Principal — School Situation
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
</div>`,n.querySelectorAll("#inc-options button").forEach(i=>{const r=i;r.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.3)"}),r.addEventListener("mouseleave",()=>{r.style.filter=""}),r.addEventListener("click",()=>{const a=parseInt(r.dataset.idx);this._accRepDelta+=t.options[a].repDelta,n.remove(),this.el=null,this._render(e)})}),document.body.appendChild(n),this.el=n}_render(e){this.el&&this.el.remove();const t=this._nextTeacher(),n=dl[Math.floor(Math.random()*dl.length)],i=document.createElement("div");i.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;',i.innerHTML=`
<div style="background:#1e2a38;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:560px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.6);">

  <div style="font-size:11px;letter-spacing:2px;color:#7a9ec4;text-transform:uppercase;margin-bottom:6px;">
    🏛️ Deputy Principal — Lesson Inspection
  </div>
  <div style="font-size:22px;font-weight:700;margin-bottom:4px;">${e}</div>
  <div style="color:#8ab4d4;font-size:14px;margin-bottom:20px;">
    ${t.name} · ${t.subject} · Grade ${t.grade}
  </div>

  <div style="background:#162030;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
    <div style="font-size:13px;color:#7a9ec4;margin-bottom:10px;">
      🔍 Observations during the lesson:
      <span style="font-size:12px;opacity:.65;margin-left:8px;">${n.hint}</span>
    </div>
    ${n.notes.map(r=>`<div style="margin-bottom:6px;font-size:14px;">• ${r}</div>`).join("")}
  </div>

  <div style="font-size:14px;color:#a0b8cc;margin-bottom:14px;font-weight:600;">
    Official lesson rating:
  </div>

  <div style="display:flex;gap:10px;justify-content:center;margin-bottom:26px;">
    <button id="vp-poor"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#6b1a1a;color:#ffaaaa;
        border:1px solid #8b2222;transition:filter .15s;">
      👎<br>Needs Improvement<br><span style="font-size:11px;opacity:.6;">0 pts</span>
    </button>
    <button id="vp-good"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#1a4a34;color:#80ffc0;
        border:1px solid #2a7a50;transition:filter .15s;">
      👌<br>Good<br><span style="font-size:11px;opacity:.6;">+1 pt</span>
    </button>
    <button id="vp-excellent"
      style="flex:1;padding:14px 8px;border:none;border-radius:8px;cursor:pointer;
        font-size:13px;font-weight:700;background:#2a1a6a;color:#c0a0ff;
        border:1px solid #4a2e9a;transition:filter .15s;">
      ⭐<br>Excellent<br><span style="font-size:11px;opacity:.6;">+2 pts</span>
    </button>
  </div>

  <div style="display:flex;justify-content:space-between;align-items:center;
    border-top:1px solid #2a3a4a;padding-top:14px;">
    <div style="font-size:12px;color:#5a7a9a;">
      Inspections today: ${this.records.length}
      ${this._accRepDelta!==0?` · Rep: ${this._accRepDelta>0?"+":""}${this._accRepDelta}`:""}
    </div>
    <button id="vp-finish"
      style="padding:10px 20px;border:none;border-radius:7px;cursor:pointer;
        background:#1a2a3a;color:#6a9ab8;font-size:13px;border:1px solid #2a3a4a;">
      Finish Round
    </button>
  </div>
</div>`,["poor","good","excellent"].forEach(r=>{const a=i.querySelector(`#vp-${r}`);a.addEventListener("mouseenter",()=>{a.style.filter="brightness(1.25)"}),a.addEventListener("mouseleave",()=>{a.style.filter=""}),a.addEventListener("click",()=>{const o=r==="poor"?0:r==="good"?1:2;this.records.push({roomLabel:e,teacherName:t.name,rating:r,score:o}),i.remove(),this.el=null,this._renderPostFeedback(t.name,r,e)})}),i.querySelector("#vp-finish").addEventListener("click",()=>{Tt(),i.remove(),this.el=null,this.onDoneCallback?.(this.records,this._accRepDelta)}),document.body.appendChild(i),this.el=i}_renderPostFeedback(e,t,n){const i=t==="excellent"?"⭐ Excellent":t==="good"?"👌 Good":"👎 Needs Improvement",r=t==="excellent"?"#c0a0ff":t==="good"?"#80ffc0":"#ffaaaa",a=t==="poor"?[{label:"📋 Schedule unplanned assessment",repDelta:1,hint:"Official oversight"},{label:"🤝 Have a personal talk with teacher",repDelta:2,hint:"Individual support"},{label:"📚 Send to professional development",repDelta:3,hint:"Long-term improvement"},{label:"⏭️ Just log in protocol",repDelta:0,hint:"No additional steps"}]:t==="good"?[{label:"📝 Give written recommendations",repDelta:1,hint:"Methodological support"},{label:"📊 Suggest an open lesson",repDelta:2,hint:"Knowledge sharing"},{label:"⏭️ Log in protocol and continue",repDelta:0,hint:"Standard procedure"}]:[{label:"🏅 Nominate for school award",repDelta:3,hint:"Motivates colleagues"},{label:"👏 Praise at staff council",repDelta:2,hint:"Boosts morale"},{label:"📌 Recommend as mentor",repDelta:2,hint:"Spreading best practice"},{label:"⏭️ Leave things as they are",repDelta:0,hint:"No extra action"}],o=document.createElement("div");o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;',o.innerHTML=`
<div style="background:#1a2a3a;color:#e0e8f0;border-radius:14px;padding:34px 42px;
  max-width:500px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:10px;">
    📋 Deputy Principal — Post Inspection
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
        <span style="font-size:11px;color:#4a7a9a;">${l.hint}${l.repDelta>0?` · +${l.repDelta} rep`:""}</span>
      </button>`).join("")}
  </div>
</div>`,o.querySelectorAll("#post-actions button").forEach(l=>{const c=l;c.addEventListener("mouseenter",()=>{c.style.filter="brightness(1.3)"}),c.addEventListener("mouseleave",()=>{c.style.filter=""}),c.addEventListener("click",()=>{const d=a[parseInt(c.dataset.idx)];this._accRepDelta+=d.repDelta,o.remove(),this.el=null,Tt(),this.onDoneCallback?.(this.records,this._accRepDelta)})}),document.body.appendChild(o),this.el=o}hide(){this.el&&(Tt(),this.el.remove(),this.el=null)}isVisible(){return this.el!==null}reset(){this.records=[],this.currentTeacherIdx=0,this._accRepDelta=0}};T(Ys,"DIRECTOR_THRESHOLD",20);let ta=Ys;const ul=[{id:"s1",name:"Айгерим Сейтқали",subject:"Mathematics",grade:9,salary:48e3,performance:78},{id:"s2",name:"Ерлан Бекұлы",subject:"Physics",grade:10,salary:44e3,performance:65},{id:"s3",name:"Гүлнар Қасымова",subject:"Kazakh Lang.",grade:8,salary:42e3,performance:82},{id:"s4",name:"Досым Нұрланов",subject:"Chemistry",grade:11,salary:46e3,performance:70},{id:"s5",name:"Зарина Алиева",subject:"Biology",grade:7,salary:4e4,performance:88},{id:"s6",name:"Болатбек Сәрсенов",subject:"Kazakh History",grade:9,salary:43e3,performance:60}],pl=[{name:"Камила Жансерік",subject:"English",salary:45e3},{name:"Нұрсұлу Байжанова",subject:"Computer Science",salary:5e4},{name:"Арман Сейітқали",subject:"Physical Education",salary:38e3},{name:"Дина Ахметова",subject:"Mathematics",salary:47e3},{name:"Бекзат Омаров",subject:"Russian Language",salary:41e3},{name:"Айнұр Мұхамеджан",subject:"Music / Art",salary:36e3}],fl=[{parent:"Artyom Lisin's mother",child:"Artyom, grade 9",text:"The physics teacher is unfairly lowering grades. Artyom does extra studying but has a '3' for the semester.",options:[{label:"📋 Request explanation from teacher",repDelta:4,budgetDelta:0,color:"#1a6b48"},{label:"🔄 Have committee review the grade",repDelta:2,budgetDelta:0,color:"#2a5a8a"},{label:'😶 "The grade was lawfully given"',repDelta:-3,budgetDelta:0,color:"#7a2a2a"}]},{parent:"Dina Akhmetova's father",child:"Dina, grade 10",text:"Demands transfer to the top class. Claims teachers are biased against his daughter because of her nationality.",options:[{label:"🔍 Launch internal investigation",repDelta:6,budgetDelta:0,color:"#1a6b48"},{label:"📑 Offer school psychologist",repDelta:3,budgetDelta:-5e3,color:"#2a5a8a"},{label:"❌ Deny transfer request",repDelta:-4,budgetDelta:0,color:"#7a2a2a"}]},{parent:"Parent Committee 8B",child:"Class 8B",text:"The class wants to replace the history teacher — too much homework, children are overloaded.",options:[{label:"⚖️ Have a talk with the teacher",repDelta:3,budgetDelta:0,color:"#1a6b48"},{label:"📅 Adjust the lesson plan",repDelta:5,budgetDelta:0,color:"#2a5a8a"},{label:'📢 "The workload is within norms"',repDelta:-2,budgetDelta:0,color:"#7a2a2a"}]},{parent:'School Sponsor — LLC "Impulse"',child:"Sponsorship matter",text:"The company is ready to provide 200,000 ₸ for equipment, but requests placing an advertising banner in the lobby.",options:[{label:"✅ Agree — the money is needed",repDelta:-1,budgetDelta:2e5,color:"#1a6b48"},{label:"🤝 Agree, but without the banner",repDelta:2,budgetDelta:1e5,color:"#2a5a8a"},{label:"❌ Decline the sponsorship",repDelta:5,budgetDelta:0,color:"#7a2a2a"}]},{parent:"Parent Committee 9A",child:"Class 9A",text:"Parents of class 9A say the teacher discriminates against students. A written complaint has been submitted.",options:[{label:"🔍 Investigate via committee",repDelta:6,budgetDelta:0,color:"#1a6b48"},{label:"🤝 Issue a formal warning to the teacher",repDelta:3,budgetDelta:0,color:"#2a5a8a"},{label:"🤷 Dismiss the complaint",repDelta:-5,budgetDelta:0,color:"#7a2a2a"}]},{parent:"Deputy Seitkali",child:"Influential parent",text:'A local deputy asks to enroll his nephew without going through the queue. Hints at "support from his side".',options:[{label:"💼 Decline — standard queue only",repDelta:7,budgetDelta:0,color:"#1a6b48"},{label:"📄 Find a formal reason to admit",repDelta:1,budgetDelta:5e4,color:"#2a5a8a"},{label:"✅ Enroll immediately — connections matter",repDelta:-6,budgetDelta:1e5,color:"#7a2a2a"}]},{parent:"Azamat Nurlybekov's mother",child:"Azamat, grade 11",text:"Grade 11 student Azamat wants to enrol in UNT prep courses. His mother demands the school take responsibility.",options:[{label:"🎓 Organise free prep classes at school",repDelta:5,budgetDelta:-15e3,color:"#1a6b48"},{label:"📊 Provide a list of recommended courses",repDelta:2,budgetDelta:0,color:"#2a5a8a"},{label:"⏭️ This is not the school's responsibility",repDelta:-3,budgetDelta:0,color:"#7a2a2a"}]}],ml=[{icon:"💧",title:"Water Pipe Burst",description:"A pipe burst in Block B. Three classrooms are flooded. Lessons will need to be relocated.",options:[{label:"🔧 Emergency repair — call workers",repDelta:2,budgetDelta:-4e4,color:"#1a6b48"},{label:"🏫 Temporarily move classes to the main hall",repDelta:0,budgetDelta:0,color:"#2a5a8a"},{label:"😴 It can wait until Monday",repDelta:-5,budgetDelta:0,color:"#7a2a2a"}]},{icon:"🔥",title:"Kitchen Fire",description:"The electrical panel in the school cafeteria caught smoke. The cook put it out, but equipment is broken.",options:[{label:"🔧 Replace equipment immediately",repDelta:3,budgetDelta:-6e4,color:"#1a6b48"},{label:"🍽️ Temporarily order food from another school",repDelta:0,budgetDelta:-2e4,color:"#2a5a8a"},{label:"🥊 Skip lunches for a week",repDelta:-6,budgetDelta:0,color:"#7a2a2a"}]},{icon:"🥴",title:"Flu Outbreak at School",description:"20% of students are sick. Parents demand disinfection. The district doctor warns of quarantine.",options:[{label:"🧼 Full sanitation treatment",repDelta:6,budgetDelta:-25e3,color:"#1a6b48"},{label:"📰 Recommend masks, keep school open",repDelta:1,budgetDelta:0,color:"#2a5a8a"},{label:"🤷 Do nothing — it will pass on its own",repDelta:-7,budgetDelta:0,color:"#7a2a2a"}]},{icon:"🔋",title:"Power Outage",description:"The utility company warned: planned outage on Friday 9:00–17:00. Exams are scheduled that day.",options:[{label:"📊 Reschedule exams, notify everyone",repDelta:4,budgetDelta:0,color:"#1a6b48"},{label:"🔦 Rent a generator",repDelta:2,budgetDelta:-15e3,color:"#2a5a8a"},{label:"⚡ Hold exams by candlelight",repDelta:-3,budgetDelta:0,color:"#7a2a2a"}]},{icon:"📡",title:"District Education Inspection",description:"A surprise document audit from the district education department. Some grade journals are incomplete.",options:[{label:"📝 Urgently get all documents in order",repDelta:5,budgetDelta:0,color:"#1a6b48"},{label:"🤝 Talk with inspector, explain the situation",repDelta:2,budgetDelta:0,color:"#2a5a8a"},{label:"😐 Let them check as-is",repDelta:-4,budgetDelta:0,color:"#7a2a2a"}]}];class i0{constructor(){T(this,"el",null);T(this,"state");this.state={budget:12e5,income:32e4,expenses:ul.reduce((e,t)=>e+t.salary,0),staff:[...ul.map(e=>({...e}))],stats:{avgClassGrade:3.8,attendance:91,reputation:100,weekNumber:1},pendingHires:0,ministryWarning:!1,schoolRating:3.2,ministryWeekCounter:0}}updateStats(e,t,n){this.state.stats.reputation=e,this.state.stats.avgClassGrade=Math.round(t*10)/10,this.state.stats.weekNumber=n,this.state.stats.attendance=85+Math.floor(Math.random()*10);const i=Math.min(5,Math.max(1,e/100*2.5+t*.4));this.state.schoolRating=Math.round(Math.min(5,Math.max(1,this.state.schoolRating*.8+i*.2))*10)/10,this.state.income=Math.round(28e4+this.state.schoolRating*25e3),this.state.ministryWarning=this.state.budget<2e5,this.state.ministryWeekCounter++}show(e){Pt(),this.state.ministryWeekCounter>0&&this.state.ministryWeekCounter%3===0?this._renderMinistryInspection(e):Math.random()<.35?this._renderEmergencyEvent(e):Math.random()<.45?this._renderParentComplaint(e):this._render(e)}_renderMinistryInspection(e){const t=this.state.stats.reputation>=80&&this.state.stats.avgClassGrade>=3.5&&this.state.budget>=3e5,n=document.createElement("div");n.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;z-index:7500;font-family:"Segoe UI",sans-serif;',n.innerHTML=`
<div style="background:#12202e;color:#e0e8f0;border-radius:16px;padding:40px 48px;
  max-width:540px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.8);border:1px solid ${t?"#2a6b4a":"#6b2a2a"};">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">
    🏛️ Director — Ministry Inspection
  </div>
  <div style="font-size:32px;margin-bottom:8px;">${t?"✅":"❌"}</div>
  <div style="font-size:24px;font-weight:800;margin-bottom:12px;color:${t?"#4FFFB0":"#FF6060"};">
    ${t?"Inspection passed!":"Inspection failed!"}
  </div>
  <div style="background:#0a1628;border-radius:10px;padding:16px 20px;margin-bottom:20px;font-size:14px;line-height:1.7;color:#bad4e8;">
    The Ministry of Education has conducted a school inspection.<br><br>
    ${t?"📊 All indicators are within norms. The school receives additional funding of +120,000 ₸ and a rating boost.":"⚠️ Violations found: low budget or insufficient performance. Penalty of 80,000 ₸ and a rating reduction."}
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
      <div style="font-weight:700;color:${this.state.budget>=3e5?"#4FFFB0":"#FF8060"};">${this.state.budget.toLocaleString("ru")} ₸</div>
    </div>
    <div style="background:#1a2a3a;border-radius:8px;padding:12px 16px;">
      <div style="color:#4a7890;">School Rating</div>
      <div style="font-weight:700;color:#FFD700;">${"★".repeat(Math.ceil(this.state.schoolRating))}${"☆".repeat(5-Math.ceil(this.state.schoolRating))}</div>
    </div>
  </div>
  <button id="ministry-ok"
    style="width:100%;padding:14px;border:none;border-radius:10px;cursor:pointer;
      background:linear-gradient(135deg,#1a4a8a,#2a6ab0);color:#fff;font-size:16px;font-weight:700;">
    Acknowledge
  </button>
</div>`,n.querySelector("#ministry-ok").addEventListener("click",()=>{t?(this.state.budget+=12e4,this.state.schoolRating=Math.min(5,this.state.schoolRating+.3)):(this.state.budget=Math.max(0,this.state.budget-8e4),this.state.schoolRating=Math.max(1,this.state.schoolRating-.4),this.state.stats.reputation=Math.max(0,this.state.stats.reputation-10)),n.remove(),this._render(e)}),document.body.appendChild(n)}_renderEmergencyEvent(e){const t=ml[Math.floor(Math.random()*ml.length)],n=document.createElement("div");n.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:7200;font-family:"Segoe UI",sans-serif;',n.innerHTML=`
<div style="background:#1a1a2a;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.8);border:1px solid #3a2a1a;">
  <div style="font-size:11px;letter-spacing:2px;color:#d08040;text-transform:uppercase;margin-bottom:8px;">
    ⚡ Director — Emergency
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
          ${i.budgetDelta!==0?` · ${i.budgetDelta>0?"+":""}${i.budgetDelta.toLocaleString("ru")} ₸`:""}
        </span>
      </button>`).join("")}
  </div>
</div>`,n.querySelectorAll("#emerg-options button").forEach(i=>{const r=i;r.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.3)"}),r.addEventListener("mouseleave",()=>{r.style.filter=""}),r.addEventListener("click",()=>{const a=t.options[parseInt(r.dataset.idx)];this.state.stats.reputation=Math.max(0,this.state.stats.reputation+a.repDelta),a.budgetDelta&&(this.state.budget=Math.max(0,this.state.budget+a.budgetDelta)),n.remove(),this._render(e)})}),document.body.appendChild(n)}_renderParentComplaint(e){const t=fl[Math.floor(Math.random()*fl.length)],n=document.createElement("div");n.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;z-index:7000;font-family:"Segoe UI",sans-serif;',n.innerHTML=`
<div style="background:#15202e;color:#e0e8f0;border-radius:14px;padding:36px 44px;
  max-width:520px;width:92%;box-shadow:0 8px 40px rgba(0,0,0,.7);">
  <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">
    👔 Director — Complaint
  </div>
  <div style="font-size:20px;font-weight:700;margin-bottom:4px;">📨 ${t.parent}</div>
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
          ${i.budgetDelta!==0?` · ${i.budgetDelta>0?"+":""}${i.budgetDelta.toLocaleString("ru")} ₸`:""}
        </span>
      </button>`).join("")}
  </div>
</div>`,n.querySelectorAll("#complaint-options button").forEach(i=>{const r=i;r.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.3)"}),r.addEventListener("mouseleave",()=>{r.style.filter=""}),r.addEventListener("click",()=>{const a=parseInt(r.dataset.idx),o=t.options[a];this.state.stats.reputation=Math.max(0,this.state.stats.reputation+o.repDelta),o.budgetDelta&&(this.state.budget+=o.budgetDelta),n.remove(),this._render(e)})}),document.body.appendChild(n)}_render(e){this.el&&this.el.remove();const{budget:t,income:n,expenses:i,staff:r,stats:a,ministryWarning:o,schoolRating:l}=this.state,c=n-i,d=r.filter(g=>!g.fired),h="★".repeat(Math.ceil(l))+"☆".repeat(5-Math.ceil(l)),u=l>=4?"#FFD700":l>=3?"#e0a060":"#e05060",m=document.createElement("div");m.style.cssText='position:fixed;inset:0;background:#0d1520;color:#c8dce8;font-family:"Segoe UI",sans-serif;overflow-y:auto;z-index:6000;',m.innerHTML=`
<div style="max-width:980px;margin:0 auto;padding:36px 24px;">

  <!-- HEADER -->
  <div style="display:flex;align-items:center;justify-content:space-between;
    border-bottom:1px solid #1e3040;padding-bottom:20px;margin-bottom:${o?"10px":"24px"};">
    <div>
      <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;">👔 School Director</div>
      <div style="font-size:28px;font-weight:700;color:#fff;margin-top:4px;">Secondary School No.47</div>
      <div style="margin-top:6px;">
        <span style="font-size:18px;color:${u};letter-spacing:2px;">${h}</span>
        <span style="font-size:13px;color:#6a98b8;margin-left:8px;">School Rating ${l.toFixed(1)}/5.0</span>
      </div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:12px;color:#6a98b8;">Week ${a.weekNumber}</div>
      <div style="font-size:22px;font-weight:700;color:${c>=0?"#4caf84":"#e05060"}">
        ${c>=0?"+":""}${c.toLocaleString("ru")} ₸/week
      </div>
    </div>
  </div>

  ${o?`
  <div style="background:#5a1818;border-radius:8px;padding:14px 20px;margin-bottom:18px;
    border:1px solid #9a3030;display:flex;align-items:center;gap:12px;">
    <span style="font-size:22px;">⚠️</span>
    <span style="font-size:14px;color:#ffbbbb;">
      <strong>Ministry Warning:</strong> The school budget has dropped to a critical level.
      Within 2 weeks, if no action is taken, an inspection will be sent.
    </span>
  </div>`:""}

  <!-- STATS ROW -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px;">
    ${this._statCard("💰 Budget",t.toLocaleString("ru")+" ₸",t>5e5?"#4caf84":t>2e5?"#e0a060":"#e05060")}
    ${this._statCard("📊 Avg Grade",a.avgClassGrade.toString(),a.avgClassGrade>=4?"#4caf84":"#e0a060")}
    ${this._statCard("🎓 Attendance",a.attendance+"%",a.attendance>=90?"#4caf84":"#e0a060")}
    ${this._statCard("⭐ Reputation",a.reputation.toString(),a.reputation>=120?"#4caf84":"#6a98b8")}
  </div>

  <!-- INCOME / EXPENSES -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;">
    <div style="background:#0f1e30;border-radius:10px;padding:18px 22px;">
      <div style="font-size:12px;color:#5a8cc0;margin-bottom:10px;text-transform:uppercase;letter-spacing:1.5px;">Weekly Income</div>
      <div style="font-size:22px;font-weight:700;color:#4caf84;">+${n.toLocaleString("ru")} ₸</div>
      <div style="font-size:13px;color:#4a7890;margin-top:6px;">Subsidies + grants · Rating ${l.toFixed(1)}★ bonus</div>
    </div>
    <div style="background:#0f1e30;border-radius:10px;padding:18px 22px;">
      <div style="font-size:12px;color:#5a8cc0;margin-bottom:10px;text-transform:uppercase;letter-spacing:1.5px;">Weekly Expenses</div>
      <div style="font-size:22px;font-weight:700;color:#e05060;">−${i.toLocaleString("ru")} ₸</div>
      <div style="font-size:13px;color:#4a7890;margin-top:6px;">Salaries: ${d.length} teachers</div>
    </div>
  </div>

  <!-- STAFF TABLE -->
  <div style="background:#0f1e30;border-radius:10px;padding:20px 24px;margin-bottom:22px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <div style="font-size:14px;font-weight:600;color:#8cb8d4;">👩‍🏫 Teaching Staff (${d.length})</div>
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
    <div style="font-size:14px;font-weight:600;color:#8cb8d4;margin-bottom:14px;">🔧 Management Decisions</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
      ${this._actionBtn("dir-renovate","🏗️ Renovate Classroom","−50,000 ₸ · +5 rep","#2a5a3a")}
      ${this._actionBtn("dir-equipment","💻 Buy Equipment","−30,000 ₸ · +0.1 grade","#3a3a5a")}
      ${this._actionBtn("dir-event","🎉 School Event","−20,000 ₸ · +10 rep","#4a3a2a")}
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${this._actionBtn("dir-parents","👪 Parent Meeting","−10,000 ₸ · +8 rep","#3a2a5a")}
      ${this._actionBtn("dir-grant","📑 Grant Application","−5,000 ₸ · possibly +150,000 ₸","#205020")}
      ${this._actionBtn("dir-training","📚 Teacher Training","−40,000 ₸ · all performance ↑","#3a4a2a")}
    </div>
  </div>

  <!-- CONTINUE BUTTON -->
  <div style="text-align:center;padding-bottom:24px;">
    <button id="dir-continue"
      style="padding:16px 48px;border:none;border-radius:10px;cursor:pointer;
        background:linear-gradient(135deg,#1a4a8a,#2a6ab0);
        color:#fff;font-size:18px;font-weight:700;
        box-shadow:0 4px 20px rgba(30,90,170,.4);">
      ▶ Next Week
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
          ${e.salary.toLocaleString("ru")} ₸
        </td>
        <td style="padding:9px 12px;min-width:70px;">
          <div style="background:#1e3040;border-radius:2px;">${n}</div>
          <div style="font-size:11px;color:#4a7890;margin-top:2px;text-align:center;">${e.performance}%</div>
        </td>
        <td style="padding:9px 12px;text-align:center;">
          <div style="display:flex;gap:6px;justify-content:center;">
            <button id="raise-${e.id}" title="Raise salary +5,000"
              style="padding:4px 8px;border:none;border-radius:4px;cursor:pointer;
                background:#1a4a2a;color:#80d0a0;font-size:12px;">▲</button>
            <button id="lower-${e.id}" title="Lower salary −5,000"
              style="padding:4px 8px;border:none;border-radius:4px;cursor:pointer;
                background:#3a2a1a;color:#c0a060;font-size:12px;">▼</button>
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
      </button>`}_showHireDialog(e){const t=pl[Math.floor(Math.random()*pl.length)],n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:7000;",n.innerHTML=`
      <div style="background:#0f1e30;color:#c8dce8;border-radius:12px;padding:32px 40px;max-width:400px;width:90%;">
        <div style="font-size:20px;font-weight:700;margin-bottom:16px;">Job Candidate</div>
        <div style="font-size:15px;margin-bottom:8px;">👩‍🏫 ${t.name}</div>
        <div style="color:#8ab0c8;margin-bottom:8px;">Subject: ${t.subject}</div>
        <div style="color:#8ab0c8;margin-bottom:20px;">Salary: ${t.salary.toLocaleString("ru")} ₸/week</div>
        <div style="display:flex;gap:12px;">
          <button id="hire-yes" style="flex:1;padding:12px;border:none;border-radius:8px;
            background:#1a6b48;color:#fff;font-size:15px;font-weight:600;cursor:pointer;">
            ✅ Hire
          </button>
          <button id="hire-no" style="flex:1;padding:12px;border:none;border-radius:8px;
            background:#3a2a1a;color:#c89070;font-size:15px;font-weight:600;cursor:pointer;">
            ❌ Decline
          </button>
        </div>
      </div>`,n.querySelector("#hire-yes")?.addEventListener("click",()=>{const i={id:`s${Date.now()}`,name:t.name,subject:t.subject,grade:8+Math.floor(Math.random()*4),salary:t.salary,performance:55+Math.floor(Math.random()*20)};this.state.staff.push(i),this.state.expenses+=i.salary,n.remove(),this._render(e)}),n.querySelector("#hire-no")?.addEventListener("click",()=>n.remove()),document.body.appendChild(n)}isVisible(){return this.el!==null}hide(){this.el&&(Tt(),this.el.remove(),this.el=null)}}const s0={reputation:{icon:"📉",title:"You were fired",body:"Your reputation dropped to a critical level. The director decided to let you go. Parents and administration have lost trust in you."},bad_grades:{icon:"📝",title:"You were dismissed",body:"The class average grade stayed below 3.0 for three consecutive weeks. The education quality board demanded a replacement."},violation:{icon:"⚠️",title:"Misconduct",body:"Systematic grade manipulation was recorded. The dismissal order was signed by the director."}};class r0{constructor(){T(this,"el",null);T(this,"onRestartCb",null)}show(e,t,n){this.onRestartCb=n,this.el&&this.el.remove();const i=s0[e];this.el=document.createElement("div"),this.el.style.cssText=`
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
          🔄 Restart
        </button>
      </div>
    `,this.el.querySelector("#ew2-go-restart").addEventListener("click",()=>{this.hide(),this.onRestartCb?.()}),document.body.appendChild(this.el)}hide(){this.el?.remove(),this.el=null}}class js{constructor(){T(this,"el",null)}show(e,t){Pt(),this.el&&this.el.remove(),this._addStyles();const n=document.createElement("div");n.id="ending-screen",n.style.cssText=`
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
          <div style="font-size:64px;margin-bottom:12px;filter:drop-shadow(0 0 24px #FFD700);">🏆</div>
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
            ${e.teacherName} — ${e.subject} ${W("ending.teacher_of")}
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
          <div style="position:absolute;top:10px;left:10px;font-size:20px;opacity:.4;">✦</div>
          <div style="position:absolute;top:10px;right:10px;font-size:20px;opacity:.4;">✦</div>
          <div style="position:absolute;bottom:10px;left:10px;font-size:20px;opacity:.4;">✦</div>
          <div style="position:absolute;bottom:10px;right:10px;font-size:20px;opacity:.4;">✦</div>

          <div style="text-align:center;margin-bottom:28px;">
            <div style="font-size:11px;letter-spacing:3px;color:#a08030;text-transform:uppercase;margin-bottom:8px;">
              ${W("ending.ministry")}
            </div>
            <div style="font-size:28px;font-weight:800;color:#FFD700;margin-bottom:4px;">
              ${W("ending.certificate")}
            </div>
            <div style="font-size:15px;color:#c0a060;">
              ${e.teacherName} · ${W("ending.school")}
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
              ${"★".repeat(Math.min(5,Math.ceil(e.schoolRating)))}${"☆".repeat(Math.max(0,5-Math.ceil(e.schoolRating)))}
            </div>
          </div>
        </div>

        <!-- Stats grid -->
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:36px;
          animation:ending_rise 1.6s ease-out;">
          ${this._statCard("💰",W("ending.total_earned"),e.totalEarned.toLocaleString("ru")+" ₸","#FFD700")}
          ${this._statCard("⭐",W("ending.reputation"),e.reputation.toString(),"#58A6FF")}
          ${this._statCard("📚",W("ending.subject"),e.subject,"#4FFFB0")}
          ${this._statCard("🏆",W("ending.career_path"),e.careerPath[e.careerPath.length-1]||W("career.director"),"#c080ff")}
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
                  ${js._rankLabel(i)}
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
            ${js._getMessage(e)}
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
            ▶ ${W("ending.continue")}
          </button>
          <button id="ending-newgame"
            style="padding:16px 36px;border:none;border-radius:12px;cursor:pointer;
              background:linear-gradient(135deg,#1a1a4a,#2a2a7a);
              color:#a0a0ff;font-size:16px;font-weight:700;
              border:1px solid #3a3a8a;
              box-shadow:0 4px 24px rgba(60,60,180,.3);
              transition:filter .15s;">
            🔄 ${W("ending.new_game")}
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
      </div>`}static _rankLabel(e){return{novice:W("career.novice"),cat2:W("career.cat2"),cat1:W("career.cat1"),highest:W("career.highest"),honored:W("career.honored"),zavuch:W("career.zavuch"),director:W("career.director")}[e]??e}static _getMessage(e){return e.schoolRating>=4.5?W("ending.best_school").replace("${stats.totalStudents}",e.totalStudents.toString()):e.reputation>=150?W("ending.reputation_spread"):W("ending.year_worked").replace("${stats.totalWeeks}",e.totalWeeks.toString())}_startStarfield(){const e=this.el?.querySelector("#ending-stars");if(!e)return;e.width=window.innerWidth,e.height=window.innerHeight;const t=e.getContext("2d"),n=Array.from({length:200},()=>({x:Math.random()*e.width,y:Math.random()*e.height,r:Math.random()*1.5+.2,alpha:Math.random(),speed:Math.random()*.008+.003})),i=()=>{this.el&&(t.clearRect(0,0,e.width,e.height),n.forEach(r=>{r.alpha+=r.speed;const a=Math.abs(Math.sin(r.alpha));t.beginPath(),t.arc(r.x,r.y,r.r,0,Math.PI*2),t.fillStyle=`rgba(200,220,255,${a*.8})`,t.fill()}),requestAnimationFrame(i))};i()}_spawnConfetti(){const e=this.el?.querySelector("#confetti-layer");if(!e)return;const t=["#FFD700","#FF6B6B","#4FFFB0","#58A6FF","#c080ff","#ff98d0","#fff"],n=["■","●","▲","★","♦"];for(let i=0;i<80;i++)setTimeout(()=>{if(!this.el)return;const r=document.createElement("div"),a=t[Math.floor(Math.random()*t.length)],o=n[Math.floor(Math.random()*n.length)],l=Math.random()*100,c=2e3+Math.random()*3e3,d=10+Math.random()*16;r.textContent=o,r.style.cssText=`
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
    `,document.head.appendChild(e)}isVisible(){return this.el!==null}hide(){this.el?.remove(),this.el=null}}const Us=4,ks=3,a0=15,Or=[7,8,9,10],o0={math:"📐",physics:"⚡",chemistry:"🧪",history:"📜",literature:"📖",russian:"✍️"},l0=["Айбек","Зарина","Данияр","Айсұлу","Нұрболат","Мадина","Ерлан","Гүлнұр","Асел","Аяулым","Бекзат","Азамат","Тәңірбек","Инкар","Арузан","Сабина","Жансерік","Айгерім","Ділнәз","Мұхамеджан","Кенжебек","Асыл","Даурен","Балжан","Алибек","Акмарал","Нәзім","Зұлфия","Толқын","Адем"],c0=["average","genius","average","anxious","average","helper","bully","average","average","lazy","anxious","average","genius","average","bully"];class d0{constructor(e,t=""){T(this,"app");T(this,"bus",tn.getInstance());T(this,"time",Zr.getInstance());T(this,"save",Jr.getInstance());T(this,"school");T(this,"player");T(this,"students",[]);T(this,"lessonSys",new dg);T(this,"eventSys",new vg);T(this,"attention",qs.getInstance());T(this,"gradebook",Xs.getInstance());T(this,"career",new _g);T(this,"money",new bg);T(this,"skillTree",new Mg);T(this,"examSystem",new tl);T(this,"featherless");T(this,"studentAI");T(this,"hud");T(this,"notebookUI");T(this,"explPanel");T(this,"taskPanel");T(this,"hwUI");T(this,"eventUI");T(this,"pauseMenu");T(this,"reportCard");T(this,"scheduleScreen");T(this,"skillScreen");T(this,"weekScreen");T(this,"vpScreen",new ta);T(this,"directorScreen",new i0);T(this,"gameOverScreen",new r0);T(this,"endingScreen",new js);T(this,"prepPanel");T(this,"hwCheckUI");T(this,"breakSys",new Kg);T(this,"remarkUI");T(this,"sound",ea.getInstance());T(this,"remarkTick",0);T(this,"charData");T(this,"dayNumber",1);T(this,"lessonIndex",0);T(this,"weekReports",[]);T(this,"completedTopicsPerGrade",{});T(this,"experience",0);T(this,"reputation",50);T(this,"blockInput",!1);T(this,"behaviorTick",0);T(this,"isWednesdayQuiz",!1);T(this,"pendingAction",null);T(this,"vpInspectionScore",0);T(this,"badExamStreak",0);T(this,"totalWeeks",0);this.app=e,this.featherless=new Tg(t)}async start(e){this.charData=e;const t=this.save.load();if(t){if(this.experience=t.experience,this.reputation=t.reputation,this.dayNumber=t.dayNumber,this.lessonIndex=0,this.career.load(t.careerRank),this.skillTree.load(t.unlockedPerks),t.completedTopicsPerGrade)this.completedTopicsPerGrade=t.completedTopicsPerGrade;else if(t.completedTopics?.length){const i=e.grades?.[0]??e.grade??9;this.completedTopicsPerGrade[i]=t.completedTopics}}this.studentAI=new Ag(this.featherless),this.school=new Om,this.app.setScene(this.school.scene);const n=this.school.rooms.get("room101");for(let i=0;i<a0;i++){const r=jm(String(i),l0[i]??`Student${i}`,c0[i]??"average"),a=new qm(r,this.school.scene),o=n.deskInfos[i];o&&(a.placeat(new R(o.position.x,.24,o.position.z+.62)),a.group.rotation.y=Math.PI),this.students.push(a)}this.player=new Zm(this.app.camera),this.player.setColliders(this.school.corridorColliders),this.app.camera.position.set(0,1.7,0),this.hud=new Cg,this.hud.addGlobalStyles(),this.notebookUI=new Rg,this.explPanel=new Lg,this.taskPanel=new Bg,this.hwUI=new Gg,this.eventUI=new Wg,this.pauseMenu=new $g,this.reportCard=new Qg,this.scheduleScreen=new e0,this.skillScreen=new t0(this.skillTree),this.weekScreen=new n0,this.prepPanel=new qg,this.hwCheckUI=new jg,this.remarkUI=new Jg,this.hud.setReputation(this.reputation),this.hud.setMoney(this.money.calcWeeklySalary(this.reputation,this.career.rank.salaryBonus)),this.hud.setDay(this.dayNumber),this.app.onTick(i=>this.tick(i)),this.wireEvents(),this.showSchedule()}wireEvents(){this.bus.on("playerInteract",()=>this.onInteract()),this.bus.on("pauseToggled",()=>this.togglePause()),this.bus.on("attentionWarning",()=>{this.hud.showNotification("⚠️ The class is losing attention!","#FFD700"),this.sound.playWarning()}),this.bus.on("studentDisrupting",e=>{const{studentName:t}=e;this.hud.showNotification(`😤 ${t} is disrupting the class!`,"#FF4D4D"),this.sound.playWarning()}),document.addEventListener("click",()=>this.sound.init(),{once:!0}),document.addEventListener("keydown",()=>this.sound.init(),{once:!0}),document.addEventListener("keydown",e=>{e.key==="-"&&this._cheatPromoteToVP(),e.key==="="&&this._cheatPromoteToDirector()})}tick(e){this.time.tick(e),this.hud.setTime(this.time.getHHMM()),this.students.forEach(t=>t.update(e)),this.behaviorTick+=e,this.behaviorTick>5e3&&(this.behaviorTick=0,this.blockInput||this.studentAI.behaviorTick(this.students)),this.attention.tick(this.students),this.player.update(e),this.breakSys.isActive()&&this.breakSys.update(e),!this.blockInput&&this.lessonSys.getPhase()!=="done"&&(this.remarkTick+=e,this.remarkTick>15e3&&(this.remarkTick=0,this._tickStudentMisbehavior()))}gradeForLesson(e){const t=this.charData.grades??Or;return t[e%t.length]??9}roomForLesson(e){const t=this.charData.grades??Or,n=[...new Set(t)],i=t[e%t.length]??9;return n.indexOf(i)%2===0?"room101":"room102"}placeStudentsIn(e){const t=this.school.rooms.get(e);!t||t.deskInfos.length===0||this.students.forEach((n,i)=>{const r=t.deskInfos[i];r&&(n.placeat(new R(r.position.x,.24,r.position.z+.62)),n.group.rotation.y=Math.PI)})}showSchedule(){if(this.career.isDirector()){this._startDirectorWeek();return}if(this.career.isVP()){this._startVPDay();return}if(this.dayNumber%2===0){this._startSOR();return}this.blockInput=!0;const e=this.charData.grades??Or,t=i=>{const r=Math.floor(i/60),a=String(i%60).padStart(2,"0");return`${r}:${a}`},n=Array.from({length:Us},(i,r)=>{const a=e[r%e.length]??9,o=this.school.rooms.get(this.roomForLesson(r))?.label??"Classroom",l=8*60+30+r*55,c=l+45;return{index:r,subject:`${this.charData.subject} • Gr.${a} (${o})`,icon:o0[this.charData.subject]??"📚",time:`${t(l)} – ${t(c)}`,done:r<this.lessonIndex,current:r===this.lessonIndex}});this.scheduleScreen.show(this.dayNumber,n,()=>{this.blockInput=!1,this.startLesson()})}startLesson(){const e=this.roomForLesson(this.lessonIndex);this.placeStudentsIn(e),this.attention.reset(),this.time.reset(30+this.lessonIndex*55),this.isWednesdayQuiz=(this.dayNumber-1)%5===2;const t=this.gradeForLesson(this.lessonIndex),n=this.completedTopicsPerGrade[t]??[];this.lessonSys.init(this.charData.subject,t,this.dayNumber,n),this.eventSys.init(this.charData.subject,this.lessonSys.getTopic());const i=this.school.rooms.get(e);i?.blackboard?.writeText([this.lessonSys.getTopic(),`${this.charData.subject.toUpperCase()} · Grade ${t}`]),this.hud.show(),this.students.forEach(r=>r.setEmotion("neutral")),this.pendingAction=()=>this.openLessonPrep(),this.hud.showNotification(`🏫 ${i?.label??"Classroom"} · Grade ${t} — approach the board and press E`,"#4FFFB0",7e3)}openLessonPrep(){this.blockInput=!0,this.time.paused=!0;const e=this.students.filter(a=>a.data.hwDone).length,t=this.lessonSys.getTopic(),n=this.gradeForLesson(this.lessonIndex),i=(a,o,l,c)=>{this.lessonSys.setPrepBonus(a,o),this.blockInput=!1,this.time.paused=!1,l&&this.hud.showNotification(l,c,2800),this.openExplanationPhase()},r=()=>{this.hwCheckUI.open(this.students.map(a=>a.data),a=>{a.forEach((l,c)=>{const d=this.students.find(h=>h.data.id===c);d&&this.gradebook.add({studentId:c,studentName:d.data.name,grade:l,topic:this.lessonSys.getTopic(),lessonDay:this.dayNumber,type:"oral"})}),this.students.forEach(l=>{!l.data.hwDone&&!a.has(l.data.id)&&this.gradebook.add({studentId:l.data.id,studentName:l.data.name,grade:2,topic:this.lessonSys.getTopic(),lessonDay:this.dayNumber,type:"oral"})});const o=a.size+this.students.filter(l=>!l.data.hwDone).length;this.hud.showNotification(`📋 HW checked: ${o} students`,"#58A6FF",2500),this.prepPanel.open(t,n,e,this.students.length,l=>i(l.understandingBonus,l.attentionBonus,l.id==="topic_review"?`📖 Topic reviewed! +${l.understandingBonus} understanding`:l.id==="energetic"?`⚡ Energetic start! +${l.attentionBonus} attention`:"",l.id==="energetic"?"#FFD700":"#4FFFB0"),r,!0)})};this.prepPanel.open(t,n,e,this.students.length,a=>{a.id==="skip"?i(0,0,"",""):a.id==="topic_review"?i(a.understandingBonus,a.attentionBonus,`📖 Topic reviewed! +${a.understandingBonus} understanding`,"#4FFFB0"):a.id==="energetic"&&i(a.understandingBonus,a.attentionBonus,`⚡ Energetic start! +${a.attentionBonus} attention`,"#FFD700")},r)}openExplanationPhase(){this.blockInput=!0,this.time.paused=!0;const e=this.lessonSys.getCurrentRound(),t=this.lessonSys.getRounds(),n=t.indexOf(e)+1;this.explPanel.open(e,n,t.length,i=>{this.time.paused=!1,this.lessonSys.chooseExplanationOption(i,this.students);const r=this.skillTree.getXPMult("explain");this.experience+=Math.round(5*r);const a=e.options[i];this.studentAI.reactToExplanation(this.students,a.understandingDelta,a.attentionDelta),this.blockInput=!1,this.lessonSys.getPhase()==="tasks"?(this.pendingAction=()=>this.openTaskPhase(),this.hud.showNotification("📝 Press E to assign a task to the class","#FFD700",7e3)):this.tryFireEvent(()=>{this.pendingAction=()=>this.openExplanationPhase(),this.hud.showNotification(`📌 Step ${n+1} — press E at the board`,"#4FFFB0",6e3)})})}openTaskPhase(){if(this.isWednesdayQuiz){this.runWednesdayQuiz();return}this.blockInput=!0,this.time.paused=!0;const e=this.lessonSys.getTopicEntry(),t=e?{easy:e.tasks.easy.text,medium:e.tasks.medium.text,hard:e.tasks.hard.text}:{easy:"— no data —",medium:"— no data —",hard:"— no data —"};this.taskPanel.open(t,(n,i)=>{this.time.paused=!1,this.blockInput=!1,this.lessonSys.setTaskConfig({difficulty:i,quantity:"few"},this.students,n);const r=n==="board"?"at board 📋":"written ✏️";this.hud.showNotification(`📝 Class working on task (${r}, ${i})… observe`,"#4FFFB0",4e3),setTimeout(()=>{this.lessonSys.finishTasks(this.students),this.tryFireEvent(()=>{this.pendingAction=()=>this.openGradingPhase(),this.hud.showNotification("📓 Collect notebooks — press E","#BC8CFF",1e4)})},12e3)})}openGradingPhase(){this.blockInput=!0,this.time.paused=!0;const e=this.lessonSys.getNotebooks();this.notebookUI.open(e,(t,n)=>{this.lessonSys.gradeNotebook(t,n)},()=>{this.time.paused=!1,this.lessonSys.finishGrading(),this.blockInput=!1,this.openHomeworkPhase()})}openHomeworkPhase(){this.showHomeworkChoice()}runWednesdayQuiz(){this.blockInput=!0,this.time.paused=!0,this.hud.showNotification("📋 Wednesday — written quiz!","#BC8CFF",4e3),this.students.forEach(t=>t.setEmotion("writing")),this.lessonSys.setPhase("tasks"),this.lessonSys.finishTasks(this.students);const e=this.lessonSys.getNotebooks();setTimeout(()=>{this.notebookUI.open(e,(t,n)=>{this.lessonSys.gradeNotebook(t,n)},()=>{this.time.paused=!1,this.lessonSys.finishGrading(),this.blockInput=!1,this.lessonSys.setPhase("homework"),this.openHomeworkPhase()})},1800)}showHomeworkChoice(){this.time.paused=!0;const e=this.lessonSys.getTopicEntry(),t=e?{easy:e.homework.easy,medium:e.homework.medium,hard:e.homework.hard}:{easy:"— no data —",medium:"— no data —",hard:"— no data —"};this.hwUI.open(t,(n,i)=>{this.time.paused=!1,this.lessonSys.setHomework(n,i,this.students),n?(this.sound.playBell(),this.hud.showNotification(`📚 Homework assigned (${i})`,"#58A6FF",2200)):(this.sound.playBell(),this.hud.showNotification("✅ Lesson finished — no homework","#4FFFB0",2200));const r=this.students.filter(o=>o.data.stats.understanding<70).sort(()=>Math.random()-.5).slice(0,1),a=r.length>0?r:[this.students[Math.floor(Math.random()*this.students.length)]];if(Math.random()<.65){setTimeout(()=>this._showStudentQuestion(a,()=>this.finishLesson()),600);return}setTimeout(()=>this.finishLesson(),2400)})}finishLesson(){this.blockInput=!0;const e=this.lessonSys.buildReport(this.students),t=this.skillTree.getXPMult("lesson"),n=Math.round(e.xpEarned*t);this.experience+=n,this.reputation=Math.max(0,Math.min(200,this.reputation+e.repDelta));const i=e.classGrade;this.completedTopicsPerGrade[i]||(this.completedTopicsPerGrade[i]=[]),this.completedTopicsPerGrade[i].push(e.topic),this.weekReports.push(e),e.hwGiven&&this.studentAI.simulateHWCompletion(this.students,e.hwDifficulty??"medium");const r=this.career.checkPromotion(this.experience,this.lessonIndex+1,this.reputation);r&&this.hud.showNotification(`🎉 Career promotion: ${r.name}!`,"#FFD700",4e3),this.skillTree.addPoints(10),this.hud.setReputation(this.reputation),this.hud.setMoney(this.money.calcWeeklySalary(this.reputation,this.career.rank.salaryBonus)),this.reportCard.show(e,this.experience-n,()=>{this.blockInput=!1,this.checkStudentProgression(),this.lessonIndex++,this.lessonIndex>=Us?this.endDay():this.startBreak(()=>this.showSchedule())})}startBreak(e){this.sound.playBell(),this.hud.showNotification("🔔 Break! Press E near the classroom door to enter early.","#4FFFB0",6e3),this.app.camera.position.set(0,1.7,0),this.breakSys.start(this.students,3e4,()=>{this.pendingAction=null,e()}),this.pendingAction=()=>{this.breakSys.isActive()&&this.breakSys.forceEnd()};const n=i=>{this.breakSys.isActive()&&i>0&&(this.hud.showNotification(`⏱ Break — ${Math.ceil(i/1e3)}s left (E at door — enter)`,"#8B949E",2500),setTimeout(()=>n(i-1e4),1e4))};setTimeout(()=>n(2e4),1e4)}checkStudentProgression(){this.students.forEach(e=>{const{understanding:t,motivation:n,behavior:i,attention:r}=e.data.stats,a=e.data.type;let o=!1;if(a==="lazy"&&t>50&&n>40&&(o=!0),a==="bully"&&i>60&&(o=!0),a==="anxious"&&t>60&&n>55&&(o=!0),a==="average"&&t>65&&r>60&&(o=!0),o){e.data.progressionScore++;const l=a==="bully"?4:3;if(e.data.progressionScore>=l){e.data.progressionScore=0,e.modifyStat("motivation",15),e.modifyStat("behavior",10),e.modifyStat("understanding",8);const c={lazy:`✨ ${e.data.name} started trying! Noticeable progress.`,bully:`🌟 ${e.data.name} has been behaving better!`,anxious:`💪 ${e.data.name} gained confidence!`,average:`📈 ${e.data.name} shows steady growth!`};this.hud.showNotification(c[a]??`✨ ${e.data.name} improved noticeably!`,"#FFD700",3500)}}})}endDay(){this.lessonIndex=0,this.dayNumber++,this._saveProgress(),this.dayNumber>ks?this.endWeek():this.showSchedule()}endWeek(){const e=Math.ceil(this.dayNumber/ks);this.totalWeeks=e;const t=this.money.calcWeeklySalary(this.reputation,this.career.rank.salaryBonus);if(this.reputation<10&&!this.career.isVP()&&!this.career.isDirector()){this._fireTeacher("reputation");return}this.money.earn(t);const n=this.weekReports.reduce((a,o)=>a+o.xpEarned,0),i=this.weekReports.reduce((a,o)=>a+o.repDelta,0),r={weekNumber:e,lessonReports:[...this.weekReports],xpTotal:n,repDelta:i,moneyEarned:t,careerLevel:this.career.rank,promoted:!1,skillPoints:this.skillTree.points};this.weekReports=[],this.dayNumber=1,this.lessonIndex=0,this.weekScreen.show(r,()=>{this._runWeeklyExam()})}_runWeeklyExam(){const e=this.gradeForLesson(0),t=this.examSystem.generateExam(this.students,this.charData.subject,e);this.blockInput=!0,this.hud.showNotification("📋 End of week — grade student exam papers","#BC8CFF",4e3),setTimeout(()=>{this.notebookUI.open(t,(n,i)=>{const r=t.find(a=>a.studentId===n);r&&(r.grade=i)},()=>{this.blockInput=!1;const n=this.examSystem.getAverageGrade(t);this._afterExam(n)})},4500)}_afterExam(e){const t=e.toFixed(2);if(e<2.8){if(this.badExamStreak++,this.badExamStreak>=3&&!this.career.isVP()&&!this.career.isDirector()){this._fireTeacher("bad_grades");return}}else this.badExamStreak=0;if(this.career.rank.id==="honored"){if(this.career.checkExamPromotion(this.experience,this.weekReports.length,this.reputation,e)){this.hud.showNotification(`🏛️ Congratulations! Average grade ${t} — appointed Deputy Principal!`,"#FFD700",6e3),this._saveProgress(),setTimeout(()=>this.showSchedule(),6500);return}tl.isPromotionEligible(e)?this.hud.showNotification(`⭐ Average grade ${t} — excellent result! Keep it up.`,"#4FFFB0",4e3):this.hud.showNotification(`📊 Average grade ${t} — need ≥ 4.0 for Deputy Principal`,"#FF9930",4e3)}else this.hud.showNotification(`📊 Average exam grade: ${t}`,"#4FFFB0",3e3);setTimeout(()=>{this.skillScreen.open(this.skillTree.points,()=>{this.showSchedule()})},4200)}_fireTeacher(e){this.blockInput=!0,this.sound.playGameOver();const t=this.weekReports.length>0?(this.weekReports.reduce((n,i)=>n+i.avgUnderstanding,0)/this.weekReports.length/20).toFixed(1):"—";setTimeout(()=>{this.gameOverScreen.show(e,{weeks:this.totalWeeks,reputation:this.reputation,avgGrade:t},()=>{this.save.reset(),window.location.reload()})},800)}_showStudentQuestion(e,t){const n=["I didn't quite understand this part of the topic… Could you explain again?","How do we apply this in practice? The example wasn't very clear.","Why exactly that answer? I thought it was different…","Can we go through another example? It didn't quite click for me.","Will this be on the test? I need to re-read it.","I got confused with the formula… Where did I go wrong?"],i=this.lessonSys.getTopic();let r=0;const a=()=>{if(r>=e.length){t();return}const o=e[r++];o.setEmotion("confused");const l=n[Math.floor(Math.random()*n.length)],c=document.createElement("div");c.style.cssText=`
        position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
        z-index:4000;background:#1a2535ee;
        border:1px solid #3a6aaa;border-radius:14px;
        padding:18px 28px;max-width:420px;width:90%;
        font-family:'Segoe UI',sans-serif;color:#e0e8f0;
        box-shadow:0 4px 24px rgba(0,0,0,.6);
        animation:ew2_fadein .3s ease;
      `,c.innerHTML=`
        <div style="font-size:12px;color:#5a8cc0;margin-bottom:6px;letter-spacing:1px;text-transform:uppercase;">
          ❓ Student Question · ${i}
        </div>
        <div style="font-size:14px;font-weight:600;margin-bottom:4px;color:#a0c8ff;">${o.data.name}:</div>
        <div style="font-size:14px;line-height:1.5;margin-bottom:14px;">&ldquo;${l}&rdquo;</div>
        <div style="display:flex;gap:10px;">
          <button data-ans="explain" style="flex:1;padding:10px;border:none;border-radius:8px;cursor:pointer;background:#1a4a2a;color:#4FFFB0;font-size:13px;font-weight:700;">
            📖 Explain again
          </button>
          <button data-ans="later" style="flex:1;padding:10px;border:none;border-radius:8px;cursor:pointer;background:#2a2a3a;color:#8B949E;font-size:13px;font-weight:700;">
            ⏭ Cover it next lesson
          </button>
        </div>
      `,c.querySelectorAll("button").forEach(d=>{d.addEventListener("click",()=>{const h=d.dataset.ans;c.remove(),h==="explain"?(o.modifyStat("understanding",12),o.modifyStat("motivation",5),o.setEmotion("happy"),this.reputation=Math.min(200,this.reputation+2),this.hud.setReputation(this.reputation),this.hud.showNotification(`✅ ${o.data.name} understood! +2 rep`,"#4FFFB0",2e3)):(o.setEmotion("neutral"),this.hud.showNotification(`📅 ${o.data.name} will review at home`,"#8B949E",1500)),setTimeout(a,400)})}),document.body.appendChild(c)};a()}_cheatPromoteToVP(){this.career.forceRank("zavuch"),this._saveProgress(),this.dayNumber=1,this.lessonIndex=0,this.hud.showNotification("🔑 [DEV] → Deputy Principal","#BC8CFF",2e3),setTimeout(()=>this.showSchedule(),500)}_cheatPromoteToDirector(){this.career.forceRank("director"),this._saveProgress(),this.dayNumber=1,this.lessonIndex=0,this.hud.showNotification("🔑 [DEV] → Director","#FFD700",2e3),setTimeout(()=>this.showSchedule(),500)}_startSOR(){this.blockInput=!0,this.hud.show();const e=this.roomForLesson(0);this.placeStudentsIn(e),this.students.forEach(n=>{n.seated=!0,n.setEmotion("writing")});const t=document.createElement("div");t.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;z-index:5000;font-family:"Segoe UI",sans-serif;',t.innerHTML=`
      <div style="background:#1a2535;color:#e0e8f0;border-radius:14px;padding:44px 54px;max-width:480px;width:90%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.7);">
        <div style="font-size:52px;margin-bottom:16px;">📝</div>
        <div style="font-size:11px;letter-spacing:2px;color:#5a8cc0;text-transform:uppercase;margin-bottom:8px;">Day ${this.dayNumber}</div>
        <div style="font-size:26px;font-weight:700;margin-bottom:10px;">Summative Assessment (SA)</div>
        <div style="font-size:15px;color:#8ab4d4;margin-bottom:28px;">
          Students write independently.<br>
          Afterwards you grade the notebooks.
        </div>
        <button id="sor-start-btn" style="padding:14px 44px;border:none;border-radius:10px;cursor:pointer;background:linear-gradient(135deg,#2a4a8a,#3a6ab0);color:#fff;font-size:17px;font-weight:700;transition:opacity .15s;" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
          ▶ Start
        </button>
      </div>`,t.querySelector("#sor-start-btn").addEventListener("click",()=>{t.remove(),this._runSORExam()}),document.body.appendChild(t)}_runSORExam(){const e=this.gradeForLesson(0),t=this.examSystem.generateExam(this.students,this.charData.subject,e);this.students.forEach(n=>n.setEmotion("writing")),this.hud.showNotification("✏️ SA — students are working…","#BC8CFF",6e3),setTimeout(()=>{this.notebookUI.open(t,(n,i)=>{const r=t.find(a=>a.studentId===n);r&&(r.grade=i)},()=>{this.blockInput=!1;const n=this.examSystem.getAverageGrade(t);this.hud.showNotification(`✅ SA complete · Average grade: ${n.toFixed(1)}`,"#4FFFB0",3e3);const i=this.lessonSys.getTopic()||"SA";t.forEach(r=>{this.gradebook.add({studentId:r.studentId,studentName:r.studentName,grade:r.grade,topic:i,lessonDay:this.dayNumber,type:"exam"});const a=this.students.find(o=>o.data.id===r.studentId);a&&a.modifyStat("motivation",(r.grade??3)>=4?8:(r.grade??3)===3?0:-8)}),this.lessonIndex=Us,this.endDay()})},6500)}_startVPDay(){this.blockInput=!1;const e=["room101","room102","room103"],t=e[this.dayNumber%e.length],n=this.school.rooms.get(t);this.hud.showNotification(`🏛️ Deputy Principal · Day ${this.dayNumber} — go to ${n?.label??"the office"} and press E`,"#BC8CFF",8e3),this.pendingAction=()=>{this.vpScreen.setGlobalScore(this.vpInspectionScore),this.vpScreen.show(n?.label??"Classroom",(i,r)=>{if(this.vpInspectionScore+=i.reduce((o,l)=>o+l.score,0),r!==0&&(this.reputation=Math.max(0,Math.min(300,this.reputation+r)),this.hud.setReputation(this.reputation)),this.hud.showNotification(`✅ Inspection done · Score: ${this.vpInspectionScore}${r>0?` · Rep +${r}`:""}`,"#4FFFB0",3e3),this.career.checkDirectorPromotion(this.vpInspectionScore,this.reputation)){this.hud.showNotification("🎉 You are appointed School Director!","#FFD700",6e3),this._saveProgress(),setTimeout(()=>this.showSchedule(),6500);return}this.lessonIndex=Us,this.endDay()})}}_saveProgress(){this.save.save({teacherName:this.charData.name,subject:this.charData.subject,grade:this.charData.grades?.[0]??9,grades:this.charData.grades,reputation:this.reputation,experience:this.experience,money:this.money.balance,careerRank:this.career.rank.id,skillPoints:this.skillTree.points,unlockedPerks:this.skillTree.save(),dayNumber:this.dayNumber,lessonCount:this.weekReports.length,completedTopics:[],completedTopicsPerGrade:this.completedTopicsPerGrade})}_startDirectorWeek(){const e=Math.ceil(this.dayNumber/ks);if(this.directorScreen.updateStats(this.reputation,3.8+Math.random()*.4,e),e>=10&&this.reputation>=150&&this.directorScreen.state.budget>8e5){this._showEnding();return}this.directorScreen.show(()=>{this.dayNumber=1,this.lessonIndex=0,this._saveProgress(),this.showSchedule()})}_showEnding(){this.blockInput=!0;const e=Math.ceil(this.dayNumber/ks),t=this.weekReports.length>0?Math.round(this.weekReports.reduce((i,r)=>i+r.avgUnderstanding,0)/this.weekReports.length/20*10)/10:3.8,n=["novice","cat2","cat1","highest","honored","zavuch","director"];this.endingScreen.show({teacherName:this.charData.name,subject:this.charData.subject,totalWeeks:e,totalStudents:this.students.length*e,avgGrade:t,totalEarned:this.money.balance,reputation:this.reputation,schoolRating:this.directorScreen.state.schoolRating,careerPath:n},()=>{this.save.reset(),window.location.reload()})}tryFireEvent(e){const t=this.time.gameMinutes,n=this.eventSys.maybeSpawnEvent(t);if(!n){e();return}this.blockInput=!0,this.eventUI.open(n,this.students,i=>{this.hud.showNotification(i,"#4FFFB0",2500),this.blockInput=!1,e()})}onInteract(){if(this.blockInput)return;if(this.sound.playClick(),this.lessonSys.getPhase()!=="done"&&!this.breakSys.isActive()){const t=this.app.camera.position,n=this.students.filter(i=>i.group.position.distanceTo(t)<2.4).sort((i,r)=>i.group.position.distanceTo(t)-r.group.position.distanceTo(t))[0];if(n){this.remarkUI.open(n.data,i=>this._applyRemark(i,n));return}}if(this.pendingAction){const t=this.pendingAction;this.pendingAction=null,t()}else this.hud.showNotification("💡 Walk around the school and watch students","#8B949E",1500)}_applyRemark(e,t){switch(this.sound.playRemark(),e.type){case"warning":t.modifyStat("behavior",8),t.modifyStat("attention",10),(t.emotion==="phone"||t.emotion==="sleeping")&&t.setEmotion("troubled"),this.hud.showNotification(`✋ ${t.data.name} received a warning`,"#FFD700",2e3);break;case"confiscate_phone":t.modifyStat("attention",20),t.modifyStat("behavior",5),t.setEmotion("troubled"),this.hud.showNotification(`📵 ${t.data.name}'s phone confiscated`,"#FF4D4D",2e3);break;case"wake_up":t.modifyStat("attention",15),t.setEmotion("confused"),this.hud.showNotification(`👋 ${t.data.name} woke up`,"#58A6FF",2e3);break;case"praise":t.modifyStat("motivation",10),t.modifyStat("attention",5),t.setEmotion("happy"),this.sound.playChime(),this.hud.showNotification(`⭐ ${t.data.name} praised!`,"#4FFFB0",2e3);break;case"dismiss":t.modifyStat("behavior",-15),t.modifyStat("motivation",-10),t.setEmotion("troubled"),this.hud.showNotification(`🚪 ${t.data.name} removed from class`,"#FF4D4D",2500);break}}_tickStudentMisbehavior(){this.students.forEach(e=>{if(e.emotion==="writing"||e.emotion==="raising_hand")return;const t=e.data.stats.attention,n=e.data.stats.behavior;if(t<35&&n<50&&Math.random()<.4){e.setEmotion("phone");return}if(t<20&&Math.random()<.5){e.setEmotion("sleeping");return}t<45&&e.emotion!=="phone"&&e.emotion!=="sleeping"&&Math.random()<.3&&e.setEmotion("bored")})}togglePause(){this.pauseMenu.isVisible()?this.pauseMenu.hide():this.pauseMenu.show({onResume:()=>{},onSave:()=>{this._saveProgress(),this.hud.showNotification("💾 Saved!","#4FFFB0")},onSettings:()=>{this.hud.showNotification("⚙️ Settings coming soon","#8B949E")},onMainMenu:()=>{location.reload()}})}}const h0=document.getElementById("app"),tc=new Em(h0);tc.start();const gl=new Cm;gl.open(async s=>{gl.close();const t=new URLSearchParams(location.search).get("apiKey")??localStorage.getItem("ew2_apikey")??"";await new d0(tc,t).start(s)});
