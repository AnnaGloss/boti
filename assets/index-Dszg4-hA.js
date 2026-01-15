(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const v of h)if(v.type==="childList")for(const b of v.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function o(h){const v={};return h.integrity&&(v.integrity=h.integrity),h.referrerPolicy&&(v.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?v.credentials="include":h.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function s(h){if(h.ep)return;h.ep=!0;const v=o(h);fetch(h.href,v)}})();function dm(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Rf={exports:{}},Dn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function lv(){if(kd)return Dn;kd=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(s,h,v){var b=null;if(v!==void 0&&(b=""+v),h.key!==void 0&&(b=""+h.key),"key"in h){v={};for(var _ in h)_!=="key"&&(v[_]=h[_])}else v=h;return h=v.ref,{$$typeof:c,type:s,key:b,ref:h!==void 0?h:null,props:v}}return Dn.Fragment=r,Dn.jsx=o,Dn.jsxs=o,Dn}var Fd;function av(){return Fd||(Fd=1,Rf.exports=lv()),Rf.exports}var m=av(),_f={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function nv(){if(Id)return F;Id=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),b=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),H=Symbol.iterator;function X(p){return p===null||typeof p!="object"?null:(p=H&&p[H]||p["@@iterator"],typeof p=="function"?p:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,w={};function K(p,C,q){this.props=p,this.context=C,this.refs=w,this.updater=q||W}K.prototype.isReactComponent={},K.prototype.setState=function(p,C){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,C,"setState")},K.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function k(){}k.prototype=K.prototype;function Y(p,C,q){this.props=p,this.context=C,this.refs=w,this.updater=q||W}var xt=Y.prototype=new k;xt.constructor=Y,Z(xt,K.prototype),xt.isPureReactComponent=!0;var ht=Array.isArray;function zt(){}var I={H:null,A:null,T:null,S:null},Ot=Object.prototype.hasOwnProperty;function Gt(p,C,q){var G=q.ref;return{$$typeof:c,type:p,key:C,ref:G!==void 0?G:null,props:q}}function ye(p,C){return Gt(p.type,C,p.props)}function De(p){return typeof p=="object"&&p!==null&&p.$$typeof===c}function kt(p){var C={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(q){return C[q]})}var jl=/\/+/g;function qe(p,C){return typeof p=="object"&&p!==null&&p.key!=null?kt(""+p.key):C.toString(36)}function Re(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(zt,zt):(p.status="pending",p.then(function(C){p.status==="pending"&&(p.status="fulfilled",p.value=C)},function(C){p.status==="pending"&&(p.status="rejected",p.reason=C)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function O(p,C,q,G,P){var lt=typeof p;(lt==="undefined"||lt==="boolean")&&(p=null);var ot=!1;if(p===null)ot=!0;else switch(lt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(p.$$typeof){case c:case r:ot=!0;break;case U:return ot=p._init,O(ot(p._payload),C,q,G,P)}}if(ot)return P=P(p),ot=G===""?"."+qe(p,0):G,ht(P)?(q="",ot!=null&&(q=ot.replace(jl,"$&/")+"/"),O(P,C,q,"",function(Ya){return Ya})):P!=null&&(De(P)&&(P=ye(P,q+(P.key==null||p&&p.key===P.key?"":(""+P.key).replace(jl,"$&/")+"/")+ot)),C.push(P)),1;ot=0;var $t=G===""?".":G+":";if(ht(p))for(var jt=0;jt<p.length;jt++)G=p[jt],lt=$t+qe(G,jt),ot+=O(G,C,q,lt,P);else if(jt=X(p),typeof jt=="function")for(p=jt.call(p),jt=0;!(G=p.next()).done;)G=G.value,lt=$t+qe(G,jt++),ot+=O(G,C,q,lt,P);else if(lt==="object"){if(typeof p.then=="function")return O(Re(p),C,q,G,P);throw C=String(p),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ot}function B(p,C,q){if(p==null)return p;var G=[],P=0;return O(p,G,"","",function(lt){return C.call(q,lt,P++)}),G}function $(p){if(p._status===-1){var C=p._result;C=C(),C.then(function(q){(p._status===0||p._status===-1)&&(p._status=1,p._result=q)},function(q){(p._status===0||p._status===-1)&&(p._status=2,p._result=q)}),p._status===-1&&(p._status=0,p._result=C)}if(p._status===1)return p._result.default;throw p._result}var vt=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},bt={map:B,forEach:function(p,C,q){B(p,function(){C.apply(this,arguments)},q)},count:function(p){var C=0;return B(p,function(){C++}),C},toArray:function(p){return B(p,function(C){return C})||[]},only:function(p){if(!De(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return F.Activity=N,F.Children=bt,F.Component=K,F.Fragment=o,F.Profiler=h,F.PureComponent=Y,F.StrictMode=s,F.Suspense=S,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,F.__COMPILER_RUNTIME={__proto__:null,c:function(p){return I.H.useMemoCache(p)}},F.cache=function(p){return function(){return p.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(p,C,q){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var G=Z({},p.props),P=p.key;if(C!=null)for(lt in C.key!==void 0&&(P=""+C.key),C)!Ot.call(C,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&C.ref===void 0||(G[lt]=C[lt]);var lt=arguments.length-2;if(lt===1)G.children=q;else if(1<lt){for(var ot=Array(lt),$t=0;$t<lt;$t++)ot[$t]=arguments[$t+2];G.children=ot}return Gt(p.type,P,G)},F.createContext=function(p){return p={$$typeof:b,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:v,_context:p},p},F.createElement=function(p,C,q){var G,P={},lt=null;if(C!=null)for(G in C.key!==void 0&&(lt=""+C.key),C)Ot.call(C,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(P[G]=C[G]);var ot=arguments.length-2;if(ot===1)P.children=q;else if(1<ot){for(var $t=Array(ot),jt=0;jt<ot;jt++)$t[jt]=arguments[jt+2];P.children=$t}if(p&&p.defaultProps)for(G in ot=p.defaultProps,ot)P[G]===void 0&&(P[G]=ot[G]);return Gt(p,lt,P)},F.createRef=function(){return{current:null}},F.forwardRef=function(p){return{$$typeof:_,render:p}},F.isValidElement=De,F.lazy=function(p){return{$$typeof:U,_payload:{_status:-1,_result:p},_init:$}},F.memo=function(p,C){return{$$typeof:g,type:p,compare:C===void 0?null:C}},F.startTransition=function(p){var C=I.T,q={};I.T=q;try{var G=p(),P=I.S;P!==null&&P(q,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(zt,vt)}catch(lt){vt(lt)}finally{C!==null&&q.types!==null&&(C.types=q.types),I.T=C}},F.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},F.use=function(p){return I.H.use(p)},F.useActionState=function(p,C,q){return I.H.useActionState(p,C,q)},F.useCallback=function(p,C){return I.H.useCallback(p,C)},F.useContext=function(p){return I.H.useContext(p)},F.useDebugValue=function(){},F.useDeferredValue=function(p,C){return I.H.useDeferredValue(p,C)},F.useEffect=function(p,C){return I.H.useEffect(p,C)},F.useEffectEvent=function(p){return I.H.useEffectEvent(p)},F.useId=function(){return I.H.useId()},F.useImperativeHandle=function(p,C,q){return I.H.useImperativeHandle(p,C,q)},F.useInsertionEffect=function(p,C){return I.H.useInsertionEffect(p,C)},F.useLayoutEffect=function(p,C){return I.H.useLayoutEffect(p,C)},F.useMemo=function(p,C){return I.H.useMemo(p,C)},F.useOptimistic=function(p,C){return I.H.useOptimistic(p,C)},F.useReducer=function(p,C,q){return I.H.useReducer(p,C,q)},F.useRef=function(p){return I.H.useRef(p)},F.useState=function(p){return I.H.useState(p)},F.useSyncExternalStore=function(p,C,q){return I.H.useSyncExternalStore(p,C,q)},F.useTransition=function(){return I.H.useTransition()},F.version="19.2.3",F}var Pd;function Yf(){return Pd||(Pd=1,_f.exports=nv()),_f.exports}var j=Yf();const uv=dm(j);var Of={exports:{}},Un={},jf={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function iv(){return tm||(tm=1,(function(c){function r(O,B){var $=O.length;O.push(B);t:for(;0<$;){var vt=$-1>>>1,bt=O[vt];if(0<h(bt,B))O[vt]=B,O[$]=bt,$=vt;else break t}}function o(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],$=O.pop();if($!==B){O[0]=$;t:for(var vt=0,bt=O.length,p=bt>>>1;vt<p;){var C=2*(vt+1)-1,q=O[C],G=C+1,P=O[G];if(0>h(q,$))G<bt&&0>h(P,q)?(O[vt]=P,O[G]=$,vt=G):(O[vt]=q,O[C]=$,vt=C);else if(G<bt&&0>h(P,$))O[vt]=P,O[G]=$,vt=G;else break t}}return B}function h(O,B){var $=O.sortIndex-B.sortIndex;return $!==0?$:O.id-B.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;c.unstable_now=function(){return v.now()}}else{var b=Date,_=b.now();c.unstable_now=function(){return b.now()-_}}var S=[],g=[],U=1,N=null,H=3,X=!1,W=!1,Z=!1,w=!1,K=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function xt(O){for(var B=o(g);B!==null;){if(B.callback===null)s(g);else if(B.startTime<=O)s(g),B.sortIndex=B.expirationTime,r(S,B);else break;B=o(g)}}function ht(O){if(Z=!1,xt(O),!W)if(o(S)!==null)W=!0,zt||(zt=!0,kt());else{var B=o(g);B!==null&&Re(ht,B.startTime-O)}}var zt=!1,I=-1,Ot=5,Gt=-1;function ye(){return w?!0:!(c.unstable_now()-Gt<Ot)}function De(){if(w=!1,zt){var O=c.unstable_now();Gt=O;var B=!0;try{t:{W=!1,Z&&(Z=!1,k(I),I=-1),X=!0;var $=H;try{e:{for(xt(O),N=o(S);N!==null&&!(N.expirationTime>O&&ye());){var vt=N.callback;if(typeof vt=="function"){N.callback=null,H=N.priorityLevel;var bt=vt(N.expirationTime<=O);if(O=c.unstable_now(),typeof bt=="function"){N.callback=bt,xt(O),B=!0;break e}N===o(S)&&s(S),xt(O)}else s(S);N=o(S)}if(N!==null)B=!0;else{var p=o(g);p!==null&&Re(ht,p.startTime-O),B=!1}}break t}finally{N=null,H=$,X=!1}B=void 0}}finally{B?kt():zt=!1}}}var kt;if(typeof Y=="function")kt=function(){Y(De)};else if(typeof MessageChannel<"u"){var jl=new MessageChannel,qe=jl.port2;jl.port1.onmessage=De,kt=function(){qe.postMessage(null)}}else kt=function(){K(De,0)};function Re(O,B){I=K(function(){O(c.unstable_now())},B)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(O){O.callback=null},c.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ot=0<O?Math.floor(1e3/O):5},c.unstable_getCurrentPriorityLevel=function(){return H},c.unstable_next=function(O){switch(H){case 1:case 2:case 3:var B=3;break;default:B=H}var $=H;H=B;try{return O()}finally{H=$}},c.unstable_requestPaint=function(){w=!0},c.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=H;H=O;try{return B()}finally{H=$}},c.unstable_scheduleCallback=function(O,B,$){var vt=c.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?vt+$:vt):$=vt,O){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=$+bt,O={id:U++,callback:B,priorityLevel:O,startTime:$,expirationTime:bt,sortIndex:-1},$>vt?(O.sortIndex=$,r(g,O),o(S)===null&&O===o(g)&&(Z?(k(I),I=-1):Z=!0,Re(ht,$-vt))):(O.sortIndex=bt,r(S,O),W||X||(W=!0,zt||(zt=!0,kt()))),O},c.unstable_shouldYield=ye,c.unstable_wrapCallback=function(O){var B=H;return function(){var $=H;H=B;try{return O.apply(this,arguments)}finally{H=$}}}})(Mf)),Mf}var em;function cv(){return em||(em=1,jf.exports=iv()),jf.exports}var Df={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function fv(){if(lm)return Kt;lm=1;var c=Yf();function r(S){var g="https://react.dev/errors/"+S;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)g+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+S+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},h=Symbol.for("react.portal");function v(S,g,U){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:N==null?null:""+N,children:S,containerInfo:g,implementation:U}}var b=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(S,g){if(S==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Kt.createPortal=function(S,g){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return v(S,g,null,U)},Kt.flushSync=function(S){var g=b.T,U=s.p;try{if(b.T=null,s.p=2,S)return S()}finally{b.T=g,s.p=U,s.d.f()}},Kt.preconnect=function(S,g){typeof S=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(S,g))},Kt.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Kt.preinit=function(S,g){if(typeof S=="string"&&g&&typeof g.as=="string"){var U=g.as,N=_(U,g.crossOrigin),H=typeof g.integrity=="string"?g.integrity:void 0,X=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;U==="style"?s.d.S(S,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:N,integrity:H,fetchPriority:X}):U==="script"&&s.d.X(S,{crossOrigin:N,integrity:H,fetchPriority:X,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Kt.preinitModule=function(S,g){if(typeof S=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var U=_(g.as,g.crossOrigin);s.d.M(S,{crossOrigin:U,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(S)},Kt.preload=function(S,g){if(typeof S=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var U=g.as,N=_(U,g.crossOrigin);s.d.L(S,U,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Kt.preloadModule=function(S,g){if(typeof S=="string")if(g){var U=_(g.as,g.crossOrigin);s.d.m(S,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:U,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(S)},Kt.requestFormReset=function(S){s.d.r(S)},Kt.unstable_batchedUpdates=function(S,g){return S(g)},Kt.useFormState=function(S,g,U){return b.H.useFormState(S,g,U)},Kt.useFormStatus=function(){return b.H.useHostTransitionStatus()},Kt.version="19.2.3",Kt}var am;function sv(){if(am)return Df.exports;am=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),Df.exports=fv(),Df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function rv(){if(nm)return Un;nm=1;var c=cv(),r=Yf(),o=sv();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function v(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function b(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(v(t)!==t)throw Error(s(188))}function g(t){var e=t.alternate;if(!e){if(e=v(t),e===null)throw Error(s(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return S(n),t;if(u===a)return S(n),e;u=u.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,f=n.child;f;){if(f===l){i=!0,l=n,a=u;break}if(f===a){i=!0,a=n,l=u;break}f=f.sibling}if(!i){for(f=u.child;f;){if(f===l){i=!0,l=u,a=n;break}if(f===a){i=!0,a=u,l=n;break}f=f.sibling}if(!i)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:e}function U(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=U(t),e!==null)return e;t=t.sibling}return null}var N=Object.assign,H=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),xt=Symbol.for("react.forward_ref"),ht=Symbol.for("react.suspense"),zt=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),De=Symbol.iterator;function kt(t){return t===null||typeof t!="object"?null:(t=De&&t[De]||t["@@iterator"],typeof t=="function"?t:null)}var jl=Symbol.for("react.client.reference");function qe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===jl?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case K:return"Profiler";case w:return"StrictMode";case ht:return"Suspense";case zt:return"SuspenseList";case Gt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case W:return"Portal";case Y:return t.displayName||"Context";case k:return(t._context.displayName||"Context")+".Consumer";case xt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:qe(t.type)||"Memo";case Ot:e=t._payload,t=t._init;try{return qe(t(e))}catch{}}return null}var Re=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},vt=[],bt=-1;function p(t){return{current:t}}function C(t){0>bt||(t.current=vt[bt],vt[bt]=null,bt--)}function q(t,e){bt++,vt[bt]=t.current,t.current=e}var G=p(null),P=p(null),lt=p(null),ot=p(null);function $t(t,e){switch(q(lt,e),q(P,t),q(G,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?xd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=xd(e),t=bd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}C(G),q(G,t)}function jt(){C(G),C(P),C(lt)}function Ya(t){t.memoizedState!==null&&q(ot,t);var e=G.current,l=bd(e,t.type);e!==l&&(q(P,t),q(G,l))}function Yn(t){P.current===t&&(C(G),C(P)),ot.current===t&&(C(ot),_n._currentValue=$)}var fi,$f;function Ml(t){if(fi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);fi=e&&e[1]||"",$f=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fi+t+$f}var si=!1;function ri(t,e){if(!t||si)return"";si=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(A){var z=A}Reflect.construct(t,[],D)}else{try{D.call()}catch(A){z=A}t.call(D.prototype)}}else{try{throw Error()}catch(A){z=A}(D=t())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(A){if(A&&z&&typeof A.stack=="string")return[A.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],f=u[1];if(i&&f){var d=i.split(`
`),T=f.split(`
`);for(n=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;if(a===d.length||n===T.length)for(a=d.length-1,n=T.length-1;1<=a&&0<=n&&d[a]!==T[n];)n--;for(;1<=a&&0<=n;a--,n--)if(d[a]!==T[n]){if(a!==1||n!==1)do if(a--,n--,0>n||d[a]!==T[n]){var R=`
`+d[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=n);break}}}finally{si=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ml(l):""}function Um(t,e){switch(t.tag){case 26:case 27:case 5:return Ml(t.type);case 16:return Ml("Lazy");case 13:return t.child!==e&&e!==null?Ml("Suspense Fallback"):Ml("Suspense");case 19:return Ml("SuspenseList");case 0:case 15:return ri(t.type,!1);case 11:return ri(t.type.render,!1);case 1:return ri(t.type,!0);case 31:return Ml("Activity");default:return""}}function Wf(t){try{var e="",l=null;do e+=Um(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var oi=Object.prototype.hasOwnProperty,di=c.unstable_scheduleCallback,mi=c.unstable_cancelCallback,Cm=c.unstable_shouldYield,Hm=c.unstable_requestPaint,ne=c.unstable_now,Bm=c.unstable_getCurrentPriorityLevel,kf=c.unstable_ImmediatePriority,Ff=c.unstable_UserBlockingPriority,Ln=c.unstable_NormalPriority,qm=c.unstable_LowPriority,If=c.unstable_IdlePriority,Ym=c.log,Lm=c.unstable_setDisableYieldValue,La=null,ue=null;function ul(t){if(typeof Ym=="function"&&Lm(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(La,t)}catch{}}var ie=Math.clz32?Math.clz32:wm,Gm=Math.log,Xm=Math.LN2;function wm(t){return t>>>=0,t===0?32:31-(Gm(t)/Xm|0)|0}var Gn=256,Xn=262144,wn=4194304;function Dl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~u,a!==0?n=Dl(a):(i&=f,i!==0?n=Dl(i):l||(l=f&~t,l!==0&&(n=Dl(l))))):(f=a&~u,f!==0?n=Dl(f):i!==0?n=Dl(i):l||(l=a&~t,l!==0&&(n=Dl(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function Ga(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Qm(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pf(){var t=wn;return wn<<=1,(wn&62914560)===0&&(wn=4194304),t}function hi(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Xa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zm(t,e,l,a,n,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,d=t.expirationTimes,T=t.hiddenUpdates;for(l=i&~l;0<l;){var R=31-ie(l),D=1<<R;f[R]=0,d[R]=-1;var z=T[R];if(z!==null)for(T[R]=null,R=0;R<z.length;R++){var A=z[R];A!==null&&(A.lane&=-536870913)}l&=~D}a!==0&&ts(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function ts(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ie(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function es(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ie(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function ls(t,e){var l=e&-e;return l=(l&42)!==0?1:vi(l),(l&(t.suspendedLanes|e))!==0?0:l}function vi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function as(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:Qd(t.type))}function ns(t,e){var l=B.p;try{return B.p=t,e()}finally{B.p=l}}var il=Math.random().toString(36).slice(2),Xt="__reactFiber$"+il,Ft="__reactProps$"+il,Il="__reactContainer$"+il,gi="__reactEvents$"+il,Vm="__reactListeners$"+il,Km="__reactHandles$"+il,us="__reactResources$"+il,wa="__reactMarker$"+il;function pi(t){delete t[Xt],delete t[Ft],delete t[gi],delete t[Vm],delete t[Km]}function Pl(t){var e=t[Xt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Il]||l[Xt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Rd(t);t!==null;){if(l=t[Xt])return l;t=Rd(t)}return e}t=l,l=t.parentNode}return null}function ta(t){if(t=t[Xt]||t[Il]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Qa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function ea(t){var e=t[us];return e||(e=t[us]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Yt(t){t[wa]=!0}var is=new Set,cs={};function Ul(t,e){la(t,e),la(t+"Capture",e)}function la(t,e){for(cs[t]=e,t=0;t<e.length;t++)is.add(e[t])}var Jm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fs={},ss={};function $m(t){return oi.call(ss,t)?!0:oi.call(fs,t)?!1:Jm.test(t)?ss[t]=!0:(fs[t]=!0,!1)}function Zn(t,e,l){if($m(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Vn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ye(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wm(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xi(t){if(!t._valueTracker){var e=rs(t)?"checked":"value";t._valueTracker=Wm(t,e,""+t[e])}}function os(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=rs(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Kn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var km=/[\n"\\]/g;function pe(t){return t.replace(km,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bi(t,e,l,a,n,u,i,f){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ge(e)):t.value!==""+ge(e)&&(t.value=""+ge(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Si(t,i,ge(e)):l!=null?Si(t,i,ge(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+ge(f):t.removeAttribute("name")}function ds(t,e,l,a,n,u,i,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){xi(t);return}l=l!=null?""+ge(l):"",e=e!=null?""+ge(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),xi(t)}function Si(t,e,l){e==="number"&&Kn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function aa(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ge(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function ms(t,e,l){if(e!=null&&(e=""+ge(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ge(l):""}function hs(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(s(92));if(Re(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ge(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),xi(t)}function na(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Fm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vs(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Fm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ys(t,e,l){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&vs(t,n,a)}else for(var u in e)e.hasOwnProperty(u)&&vs(t,u,e[u])}function Ei(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageR...

// (truncated for brevity, but the full code continues as in your original, with the changes below in the relevant parts)

const Ky=()=>{const{slug:c}=kv(),r=Kf.find(o=>o.slug===c);return r?m.jsxs("article",{className:"max-w-4xl mx-auto space-y-10 pb-20",children:[m.jsxs("nav",{className:"flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-bold",children:[m.jsx(Jt,{to:"/",className:"hover:text-indigo-600",children:"Главная"}),m.jsx("span",{children:"/"}),m.jsx(Jt,{to:"/reviews",className:"hover:text-indigo-600",children:"Обзоры"}),m.jsx("span",{children:"/"}),m.jsx("span",{className:"text-slate-600",children:r.name})]}),m.jsxs("header",{className:"space-y-6",children:[m.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8 md:items-start",children:[m.jsx("div",{className:"w-32 h-32 md:w-40 md:h-40 bg-white border border-slate-200 rounded-2xl p-4 flex-shrink-0 shadow-sm",children:m.jsx("img",{src:r.logo,alt:r.name,className:"w-full h-full object-contain"})}),m.jsxs("div",{className:"flex-grow text-center md:text-left pt-2",children:[m.jsxs("h1",{className:"text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight",children:[r.name,": Полный экспертный обзор (",new Date().getFullYear(),")"]}),m.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4",children:[m.jsx(Jf,{rating:r.rating}),m.jsx("span",{className:"text-slate-300",children:"|"}),m.jsxs("span",{className:"text-sm font-medium text-slate-500",children:["Опубликовано: ",r.publishDate]})]})]})]}),m.jsx("p",{className:"text-xl text-slate-600 leading-relaxed italic border-l-4 border-indigo-200 pl-6",children:r.detailedReview.intro})]}),m.jsxs("section",{className:"bg-white border border-slate-200 rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",children:[m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase tracking-wide",children:"Общий рейтинг"}),m.jsxs("p",{className:"text-2xl font-bold text-slate-900",children:[r.rating.toFixed(1)," / 5.0"]})]}),r.detailedReview.parameters.map((o,s)=>m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase tracking-wide",children:o.label}),m.jsx("p",{className:"text-lg font-bold text-slate-900",children:o.value})]},s)),m.jsx("div",{className:"md:col-span-1 flex items-center",children:m.jsx("a",{href:r.externalUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-center hover:bg-indigo-700 transition-all shadow-md",children:"Перейти на сайт"})})]}),m.jsxs("section",{className:"space-y-12",children:[m.jsxs("div",{className:"prose prose-slate lg:prose-lg max-w-none",children:[m.jsx("h2",{className:"text-2xl font-bold text-slate-900 border-b pb-4 mb-6",children:"Подробное описание"}),m.jsxs("div",{className:"text-slate-700 leading-relaxed space-y-6",children:[m.jsx("div",{className:"rich-text-content",dangerouslySetInnerHTML:{__html:r.detailedReview.fullDescription}}),m.jsxs("p",{className:"text-slate-500 italic text-sm",children:["В ходе нашего тестирования мы обнаружили, что ",r.name," отлично справляется с пиковыми нагрузками. Платформа демонстрирует стабильную работу модулей и отзывчивость интерфейса даже при сложных сценариях использования."]})]})]}),m.jsxs("div",{className:"space-y-6",children:[m.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Основные преимущества"}),m.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.detailedReview.advantages.map((o,s)=>m.jsxs("li",{className:"flex items-start gap-3 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100",children:[m.jsx("svg",{className:"w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),m.jsx("span",{className:"text-slate-700 text-sm font-medium",children:o})]},s))})]}),m.jsxs("div",{className:"prose prose-slate max-w-none",children:[m.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Кому подойдет?"}),m.jsx("p",{className:"text-slate-700 leading-relaxed",children:r.detailedReview.targetAudience})]}),m.jsxs("div",{className:"bg-slate-900 rounded-3xl p-8 md:p-12 text-white space-y-6",children:[m.jsx("h2",{className:"text-3xl font-bold text-white text-center mb-4",children:"Итоговое резюме"}),m.jsx("p",{className:"text-lg text-slate-300 text-center leading-relaxed",children:r.detailedReview.summary}),m.jsx("div",{className:"flex justify-center pt-6",children:m.jsxs("a",{href:r.externalUrl,target:"_blank",rel:"noopener noreferrer",className:"px-10 py-4 bg-indigo-500 hover:bg-indigo-400 rounded-2xl font-bold text-lg transition-all shadow-xl",children:["Начать работу с ",r.name]})})]})]}),m.jsxs("div",{className:"pt-10 border-t border-slate-200 flex justify-between items-center",children:[m.jsxs(Jt,{to:"/",className:"inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline",children:[m.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Вернуться в каталог"]}),m.jsx(Jt,{to:"/reviews",className:"text-slate-500 text-sm hover:text-indigo-600 transition-colors",children:"Смотреть все обзоры"})]})]}):m.jsx(ry,{to:"/",replace:!0})},eg=()=>m.jsxs("div",{className:"max-w-3xl mx-auto py-12 prose prose-slate",children:[m.jsx("h1",{className:"text-4xl font-extrabold text-slate-900 mb-8",children:"Политика конфиденциальности"}),m.jsx("p",{className:"text-slate-600 leading-relaxed mb-6",children:"Ваша конфиденциальность важна для нас. Политика ExpertReview заключается в уважении вашей конфиденциальности в отношении любой информации, которую мы можем собирать в ходе работы нашего веб-сайта."}),m.jsx("h2",{className:"text-2xl font-bold text-slate-800 mt-10 mb-4",children:"1. Сбор информации"}),m.jsx("p",{children:"Мы запрашиваем личную информацию только тогда, когда она действительно необходима нам для оказания вам услуг. Мы собираем ее честными и законными способами, с вашего ведома и согласия."}),m.jsx("h2",{className:"text-2xl font-bold text-slate-800 mt-10 mb-4",children:"2. Файлы Cookie"}),m.jsx("p",{children:"Наш сайт может использовать файлы cookie для улучшения вашего опыта просмотра. Это небольшие файлы данных, хранящиеся на вашем устройстве, которые помогают нам запомнить ваши предпочтения."}),m.jsx("h2",{className:"text-2xl font-bold text-slate-800 mt-10 mb-4",children:"3. Внешние ссылки"}),m.jsx("p",{children:"Наш сайт содержит ссылки на внешние ресурсы, которые не управляются нами. Пожалуйста, имейте в виду, что мы не контролируем контент и практику этих сайтов и не можем нести ответственность за их политику конфиденциальности."}),m.jsx("h2",{className:"text-2xl font-bold text-slate-800 mt-10 mb-4",children:"4. Соблюдение законодательства"}),m.jsx("p",{children:"Мы соблюдаем все соответствующие законы о защите данных. У вас есть право запросить удаление любых данных, которые мы храним о вас, связавшись с нами напрямую."}),m.jsx("div",{className:"mt-12 pt-8 border-t border-slate-100 italic text-sm text-slate-400 text-center",children:"Последнее обновление: Май 2024"})]}),lg=()=>m.jsxs("div",{className:"max-w-4xl mx-auto py-12 space-y-12",children:[m.jsxs("section",{className:"text-center space-y-6",children:[m.jsx("h1",{className:"text-5xl font-extrabold text-slate-900 tracking-tight",children:"О нашем каталоге"}),m.jsx("p",{className:"text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto",children:"Мы помогаем преодолеть разрыв между сложными техническими характеристиками софта и реальными потребностями бизнеса."})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 pt-12",children:[m.jsxs("div",{className:"space-y-4",children:[m.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Наша миссия"}),m.jsx("p",{className:"text-slate-600 leading-relaxed text-lg",children:"Наша цель — обеспечить прозрачность на рынке SaaS. В условиях, когда ежегодно запускаются тысячи новых инструментов, мы помогаем ЛПР находить качественные ресурсы без лишних затрат времени на пробы и ошибки."})]}),m.jsxs("div",{className:"space-y-4",children:[m.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Система оценки"}),m.jsx("p",{className:"text-slate-600 leading-relaxed text-lg",children:"Каждый ресурс оценивается по 15 критериям, включая производительность, безопасность, прозрачность ценообразования и скорость ответа техподдержки. Наш рейтинг — это взвешенное среднее этих показателей."})]})]}),m.jsxs("section",{className:"bg-white rounded-3xl p-10 border border-slate-200",children:[m.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-6",children:"Методология экспертов"}),m.jsxs("div",{className:"space-y-6 text-slate-600",children:[m.jsx("p",{children:"В отличие от автоматических агрегаторов, наши обзоры пишутся экспертами, которые проводят не менее 20 часов «руками» в каждом инструменте. Мы проверяем все заявления вендоров и сверяем их с реальным пользовательским опытом."}),m.jsx("p",{children:"Порядок ресурсов в наших списках определяется сочетанием текущей популярности и нашего внутреннего «Коэффициента эффективности», который измеряет качество результата относительно стоимости подписки."})]})]})]}),ag=()=>m.jsxs("div",{className:"max-w-xl mx-auto py-20 space-y-12",children:[m.jsxs("div",{className:"text-center space-y-4",children:[m.jsx("h1",{className:"text-5xl font-extrabold text-slate-900 tracking-tight",children:"Сотрудничество"}),m.jsx("p",{className:"text-xl text-slate-500",children:"Напишите нам, если вам нужна реклама"})]}),m.jsxs("div",{className:"bg-white rounded-3xl border border-slate-200 p-12 shadow-sm text-center space-y-8",children:[m.jsx("div",{className:"w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-indigo-600",children:m.jsx("svg",{className:"w-10 h-10",fill:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69c.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.81 7.74-3.35c3.69-1.54 4.45-1.81 4.95-1.81.11 0 .36.03.52.16.13.11.17.26.19.37.02.1.03.22.02.34z"})})}),m.jsx("p",{className:"text-slate-600 max-w-sm mx-auto",children:"Мы открыты для предложений по размещению рекламы, партнерских материалов и интеграций. Самый быстрый способ связи — Telegram."}),m.jsx("a",{href:"https://t.me/annaradoniy",target:"_blank",rel:"noopener noreferrer",className:"inline-block w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200",children:"Написать в Telegram"})]}),m.jsx("div",{className:"text-center text-sm text-slate-400",children:"Мы обычно отвечаем в течение нескольких часов."})]}),ng=()=>m.jsx(By,{children:m.jsx($y,{children:m.jsxs(dy,{children:[m.jsx(kl,{path:"/",element:m.jsx(Fy,{})}),m.jsx(kl,{path:"/reviews",element:m.jsx(Py,{})}),m.jsx(kl,{path:"/reviews/:slug",element:m.jsx(tg,{})}),m.jsx(kl,{path:"/about",element:m.jsx(lg,{})}),m.jsx(kl,{path:"/contacts",element:m.jsx(ag,{})}),m.jsx(kl,{path:"/privacy-policy",element:m.jsx(eg,{})})]})})}),Dm=document.getElementById("root");if(!Dm)throw new Error("Could not find root element to mount to");const ug=mv.createRoot(Dm);ug.render(m.jsx(uv.StrictMode,{children:m.jsx(ng,{})}));

// Key changes here:
const Wy=[
  {id:"ai",name:"ТОП-5 телеграмм ботов-раздеваторов",description:"Лучшие нейросети и AI на базе искусственного интеллекта для работы и творчества."},
  {id:"ai-video",name:"Боты раздеваторы и ИИ-генераторы видео",description:"Лучшие нейросети и AI на базе искусственного интеллекта для работы и творчества."},
  {id:"design",name:"Дизайн и Графика",description:"Профессиональное ПО для дизайнеров, иллюстраторов и UI/UX специалистов."},
  {id:"marketing",name:"Маркетинг и SEO",description:"Сервисы для продвижения бизнеса, анализа конкурентов и поисковой оптимизации."}
];

const Kf=[
  {
    id: 'ai-1',
    slug: 'resource-ai-1',
    name: 'Раздеватор',
    logo: '/images/Serene-Woman-Portrait.webp',
    rating: 5.0,
    externalUrl: 'https://t.me/razdevatel_ai_girl',
    category: 'ai',
    shortDescription: 'Быстрый и безопасный AI-раздеватор прямо в Telegram.',
    publishDate: '2026-01-15',
    detailedReview: {
      intro: 'Сервис для реалистичной генерации изображений с высокой точностью и анонимностью.',
      fullDescription: `
<h2>Раздеватор — простота и технологии</h2>
<p>С первого взгляда сервис выглядит максимально понятным: загружаешь изображение, немного ждёшь — и готов результат. Но за минималистичным интерфейсом скрывается мощная нейросеть с продвинутыми алгоритмами анализа.</p>
<p>AI-раздеватор обрабатывает изображение поэтапно: учитывает анатомию, позу, перспективу и освещение. Благодаря этому результат получается реалистичным, без искажений, артефактов и визуального шума. Раздеватор — пример того, как высокотехнологичный AI может быть удобным и доступным для любого пользователя.</p>

<h2>Приватность без компромиссов</h2>
<ul>
  <li>🔐 Работа напрямую через Telegram</li>
  <li>🗑 Автоматическое удаление изображений</li>
  <li>🤫 Отсутствие хранения файлов и истории</li>
</ul>
<p>Пользоваться сервисом можно безопасно и анонимно, без регистрации и привязки личных данных.</p>

<h2>⚡ Быстро и стабильно</h2>
<ul>
  <li>⏱ Среднее время генерации: 20–40 секунд</li>
  <li>🚀 Стабильная очередь без сбоев</li>
  <li>📲 Мгновенная выдача результата</li>
</ul>
<p>Сервис оптимизирован для высокой нагрузки и подходит тем, кто ценит время и не хочет сталкиваться с долгой обработкой или сложными настройками.</p>

<h2>🧠 Точная работа с анатомией</h2>
<ul>
  <li>✨ Естественные пропорции</li>
  <li>✨ Симметрия тела</li>
  <li>✨ Чистая и аккуратная генерация</li>
</ul>
<p>Раздеватор обучен на разнообразных данных и корректно распознаёт разные типы телосложения, позы и ракурсы. Бот не создаёт неестественных форм, обеспечивая визуально правдоподобный результат.</p>

<h2>🔍 Дополнительные возможности</h2>
<ul>
  <li>AI-раздеватор нового поколения</li>
  <li>Анонимный бот без регистрации</li>
  <li>Быстрая и безопасная генерация</li>
  <li>Реалистичный результат без искажений</li>
</ul>
<p>Сервис постоянно обновляется, улучшая качество генерации и стабильность работы. Всё функционирует прямо в Telegram, без установки дополнительного ПО.</p>

<p>Раздеватор AI объединяет удобство, скорость и современные технологии, делая сложные процессы максимально простыми для пользователя.</p>
      `,
      advantages: [
        'Анонимность и безопасность',
        'Реалистичная генерация',
        'Высокая скорость работы',
        'Прямо в Telegram'
      ],
      targetAudience: 'Пользователи Telegram, ценящие конфиденциальность и скорость обработки изображений.',
      summary: 'Удобный, быстрый и безопасный AI-раздеватор с реалистичной генерацией.',
      parameters: [
        { label: 'Язык', value: 'Русский' },
        { label: 'Цена', value: 'Бесплатно' },
        { label: 'Сложность', value: 'Легкая' }
      ]
    }
  },
  {
    id: 'ai-2',
    slug: 'resource-ai-2',
    name: 'Нюдс Бот',
    logo: '/images/Нюдс-Бот.webp',
    rating: 5.0,
    externalUrl: 'https://t.me/razdevator_girls',
    category: 'ai',
    shortDescription: 'Такой же быстрый и качественный Telegram сервис.',
    publishDate: '2026-01-15',
    detailedReview: {
      intro: 'Бот-раздеватор онлайн для удаления одежды с изображений в премиум качестве.',
      fullDescription: `
<h2>Нюдс Бот — простота и технологии</h2>
<p>Раздеватор AI объединяет минимализм интерфейса и мощные технологии. Всё, что нужно: загрузить изображение, немного подождать — и готов результат. За простотой скрыта нейросеть, которая тщательно анализирует каждую деталь изображения.</p>
<p>AI обрабатывает картинку поэтапно, учитывая анатомию, позу, перспективу и освещение. Благодаря этому генерация получается реалистичной, без артефактов и визуального шума. Раздеватор — пример того, как высокотехнологичный AI может быть доступным и понятным для каждого пользователя.</p>

<h2>Приватность и безопасность</h2>
<ul>
<li>🔐 Работа напрямую через Telegram без регистрации</li>
<li>🗑 Автоматическое удаление изображений после обработки</li>
<li>🤫 Полное отсутствие хранения файлов и истории</li>
</ul>
<p>Сервис позволяет использовать AI полностью анонимно, без привязки к личным данным и лишних формальностей.</p>

<h2>⚡ Быстро и надёжно</h2>
<ul>
<li>⏱ Среднее время генерации: 20–40 секунд</li>
<li>🚀 Стабильная очередь без сбоев</li>
<li>📲 Мгновенная выдача результата</li>
</ul>
<p>Раздеватор оптимизирован для высокой нагрузки, что позволяет быстро получать результат даже в пиковые часы. Идеально для пользователей, которые ценят своё время и не хотят сложных настроек.</p>

<h2>🧠 Точная работа с анатомией</h2>
<ul>
<li>✨ Сохраняет естественные пропорции тела</li>
<li>✨ Корректная симметрия и позы</li>
<li>✨ Чистая, аккуратная генерация без искажений</li>
</ul>
<p>Нейросеть обучена на большом разнообразии данных, благодаря чему корректно распознаёт разные типы телосложения и ракурсы, не создавая неестественных форм.</p>

<h2>🔍 Дополнительные возможности</h2>
<ul>
<li>AI нового поколения с улучшенной генерацией</li>
<li>Полностью анонимный бот без регистрации</li>
<li>Быстрая и безопасная обработка изображений</li>
<li>Реалистичный результат без визуальных артефактов</li>
</ul>
<p>Сервис работает прямо в Telegram, без установки программ, постоянно обновляется и совершенствует качество генерации.</p>

<p>Нюдс Бот сочетает удобство, скорость и передовые технологии, делая сложные процессы максимально простыми и безопасными для пользователя.</p>
`,
      advantages: [
        'Анонимность и безопасность',
        'Реалистичная генерация',
        'Высокая скорость работы',
        'Прямо в Telegram'
      ],
      targetAudience: 'Пользователи Telegram, ценящие конфиденциальность и скорость обработки изображений.',
      summary: 'Удобный, быстрый и безопасный AI-раздеватор с реалистичной генерацией.',
      parameters: [
        { label: 'Язык', value: 'Русский' },
        { label: 'Цена', value: 'Бесплатно' },
        { label: 'Сложность', value: 'Легкая' }
      ]
    }
  },
  {
    id: 'ai-3',
    slug: 'resource-ai-3',
    name: 'Раздеть девушку онлайн',
    logo: '/images/Young-Woman-with-Red-Sports Car.webp',
    rating: 4.9,
    externalUrl: 'https://t.me/razdet_girl_online',
    category: 'ai',
    shortDescription: 'Онлайн-сервис для AI-обработки изображений с акцентом на реализм и анонимность.',
    publishDate: '2026-01-02',
    detailedReview: {
      intro: 'Современный AI-сервис для автоматической обработки изображений без регистрации.',
      fullDescription: `
<h2>Раздеть девушку онлайн — AI-сервис нового поколения</h2>
<p>«Раздеть девушку онлайн» — это современный онлайн-сервис, использующий возможности искусственного интеллекта для обработки изображений. Платформа ориентирована на простоту использования: пользователю достаточно загрузить изображение и дождаться результата.</p>
<p>За внешней простотой скрывается продвинутая нейросеть, которая анализирует изображение по множеству параметров, включая анатомию, позу, перспективу и освещение. Такой подход позволяет добиться аккуратного и визуально цельного результата без грубых искажений.</p>

<h2>Анонимность и конфиденциальность</h2>
<ul>
<li>🔐 Использование сервиса без регистрации</li>
<li>🗑 Автоматическое удаление изображений</li>
<li>🤫 Отсутствие хранения файлов и истории</li>
</ul>
<p>Сервис ориентирован на пользователей, для которых важна приватность. Все операции выполняются без привязки к личным данным.</p>

<h2>⚡ Быстрая обработка изображений</h2>
<ul>
<li>⏱ Среднее время обработки: до 1 минуты</li>
<li>🚀 Стабильная работа даже при высокой нагрузке</li>
<li>📲 Быстрый доступ к результату</li>
</ul>
<p>Оптимизированная инфраструктура позволяет сервису стабильно работать и выдавать результат без длительного ожидания.</p>

<h2>🧠 Корректная работа с формами и пропорциями</h2>
<ul>
<li>✨ Сохранение естественных пропорций</li>
<li>✨ Учет позы и ракурса</li>
<li>✨ Чистая генерация без визуальных артефактов</li>
</ul>
<p>AI-модель обучена на разнообразных данных, что позволяет ей корректно интерпретировать структуру изображения и избегать неестественных форм.</p>

<h2>🔍 Возможности сервиса</h2>
<ul>
<li>Современный AI-алгоритм обработки изображений</li>
<li>Онлайн-формат без установки программ</li>
<li>Фокус на анонимность и безопасность</li>
<li>Стабильное качество результата</li>
</ul>
<p>Сервис постоянно развивается и обновляется, улучшая качество обработки и общую стабильность работы.</p>

<p>«Раздеть девушку онлайн» сочетает в себе технологичность, простоту и внимание к приватности, предлагая удобный инструмент для AI-обработки изображений.</p>
`,
      advantages: [
        'Простота использования',
        'Анонимная обработка изображений',
        'Быстрая генерация результата',
        'Современные AI-алгоритмы'
      ],
      targetAudience: 'Пользователи, которым нужен простой и анонимный AI-сервис для обработки изображений.',
      summary: 'Онлайн-AI-сервис с упором на реализм, скорость и конфиденциальность.',
      parameters: [
        { label: 'Язык', value: 'Русский' },
        { label: 'Формат', value: 'Онлайн-сервис' },
        { label: 'Регистрация', value: 'Не требуется' }
      ]
    }
  },
  {
    id: 'ai-4',
    slug: 'resource-ai-4',
    name: 'Undresser',
    logo: '/images/Elegant-Woman-Portrait.webp',
    rating: 4.8,
    externalUrl: 'https://t.me/razdevatel_ai_girls',
    category: 'ai',
    shortDescription: 'Онлайн AI-сервис для автоматической обработки изображений без лишних шагов.',
    publishDate: '2024-06-05',
    detailedReview: {
      intro: 'Функциональный AI-сервис для быстрой и анонимной обработки изображений.',
      fullDescription: `
<h2>AI-раздеватор онлайн — простой формат, продвинутый результат</h2>
<p>AI-раздеватор онлайн — это сервис, созданный для максимально простой и быстрой обработки изображений с помощью искусственного интеллекта. Пользователю не требуется разбираться в настройках или устанавливать программы — весь процесс проходит онлайн.</p>
<p>Нейросеть анализирует изображение комплексно, обращая внимание на анатомию, позу, ракурс и освещение. Такой подход позволяет добиться аккуратного и визуально согласованного результата без грубых ошибок и искажений.</p>

<h2>Анонимность и защита данных</h2>
<ul>
<li>🔐 Использование сервиса без регистрации</li>
<li>🗑 Автоматическое удаление загруженных файлов</li>
<li>🤫 Отсутствие сохранения изображений и истории</li>
</ul>
<p>Сервис разработан с учётом требований к конфиденциальности. Все действия выполняются без привязки к персональным данным пользователя.</p>

<h2>⚡ Быстрая и стабильная работа</h2>
<ul>
<li>⏱ Среднее время обработки: 30–60 секунд</li>
<li>🚀 Устойчивость к высокой нагрузке</li>
<li>📲 Оперативное получение результата</li>
</ul>
<p>Оптимизированная архитектура обеспечивает стабильную работу сервиса даже при большом количестве запросов.</p>

<h2>🧠 Корректная интерпретация изображения</h2>
<ul>
<li>✨ Сохранение пропорций и симметрии</li>
<li>✨ Учет позы и перспективы</li>
<li>✨ Минимизация визуальных артефактов</li>
</ul>
<p>AI-модель обучена на разнообразных данных, что позволяет ей корректно обрабатывать изображения и избегать неестественных форм.</p>

<h2>🔍 Функциональные возможности</h2>
<ul>
<li>Современные алгоритмы AI-обработки</li>
<li>Онлайн-доступ без установки ПО</li>
<li>Фокус на простоту и удобство</li>
<li>Стабильное качество результата</li>
</ul>
<p>Сервис регулярно обновляется и совершенствуется, улучшая качество обработки и общую производительность.</p>

<p>Undresser онлайн — это сочетание технологий, удобства и внимания к приватности, ориентированное на комфортный пользовательский опыт.</p>
`,
      advantages: [
        'Онлайн-формат без установки',
        'Анонимность и безопасность',
        'Стабильная работа',
        'Современные AI-алгоритмы'
      ],
      targetAudience: 'Пользователи, которым нужен простой и анонимный AI-сервис для обработки изображений.',
      summary: 'Удобный онлайн AI-сервис с упором на стабильность, приватность и качество результата.',
      parameters: [
        { label: 'Язык', value: 'Русский' },
        { label: 'Формат', value: 'Онлайн' },
        { label: 'Регистрация', value: 'Не требуется' }
      ]
    }
  },
  {
    id: 'ai-5',
    slug: 'resource-ai-5',
    name: 'AI-обработка изображений',
    logo: '/images/hot-amateur-naked-girl-selfie-1.webp',
    rating: 4.9,
    externalUrl: 'https://t.me/razdevatels',
    category: 'ai',
    shortDescription: 'Раздеть по фото - сервис для быстрой обработки изображений с упором на конфиденциальность.',
    publishDate: '2026-01-10',
    detailedReview: {
      intro: 'Универсальный AI-сервис для автоматической обработки изображений без регистрации.',
      fullDescription: `
<h2>AI-обработка изображений — удобный онлайн-сервис</h2>
<p>AI-обработка изображений — это онлайн-платформа, созданная для пользователей, которым важны простота, скорость и стабильный результат. Процесс максимально прямолинеен: загрузка изображения, короткое ожидание и получение готового результата.</p>
<p>В основе сервиса лежит нейросеть, способная анализировать изображение комплексно. Алгоритмы учитывают анатомию, положение тела, ракурс и освещение, что позволяет добиться визуально аккуратного и целостного результата.</p>

<h2>Конфиденциальность и анонимность</h2>
<ul>
  <li>🔐 Работа без создания аккаунта</li>
  <li>🗑 Автоматическое удаление загруженных изображений</li>
  <li>🤫 Отсутствие хранения файлов и истории действий</li>
</ul>
<p>Сервис ориентирован на пользователей, которые не хотят передавать личные данные и предпочитают анонимный формат работы.</p>

<h2>⚡ Высокая скорость обработки</h2>
<ul>
  <li>⏱ Среднее время обработки: 30–50 секунд</li>
  <li>🚀 Стабильная работа при высокой нагрузке</li>
  <li>📲 Быстрый доступ к результату без очередей</li>
</ul>
<p>Оптимизация серверной части позволяет сервису работать быстро и предсказуемо даже при большом количестве одновременных запросов.</p>

<h2>🧠 Аккуратная интерпретация изображения</h2>
<ul>
  <li>✨ Сохранение пропорций и симметрии</li>
  <li>✨ Корректный учет позы и перспективы</li>
  <li>✨ Минимум искажений и визуальных ошибок</li>
</ul>
<p>AI-модель обучена на разнообразных данных, благодаря чему корректно распознаёт структуру изображения и избегает неестественных форм.</p>

<h2>🔍 Ключевые особенности сервиса</h2>
<ul>
  <li>Современные алгоритмы искусственного интеллекта</li>
  <li>Полностью онлайн-формат</li>
  <li>Фокус на удобство и стабильность</li>
  <li>Постоянные обновления качества обработки</li>
</ul>
<p>Сервис регулярно совершенствуется, улучшая алгоритмы генерации и общую производительность платформы.</p>

<p>AI-обработка изображений — это сбалансированное решение для тех, кто ищет простой, быстрый и анонимный AI-инструмент без лишних шагов.</p>
      `,
      advantages: [
        'Простой и понятный интерфейс',
        'Анонимная работа без регистрации',
        'Стабильная скорость обработки',
        'Современные AI-алгоритмы'
      ],
      targetAudience: 'Пользователи, которым нужен быстрый и конфиденциальный AI-сервис для обработки изображений.',
      summary: 'Онлайн AI-сервис с упором на простоту, скорость и приватность.',
      parameters: [
        { label: 'Язык', value: 'Русский' },
        { label: 'Формат', value: 'Онлайн-сервис' },
        { label: 'Регистрация', value: 'Не требуется' }
      ]
    }
  },
  {
    id: 'ai-6',
    slug: 'resource-ai-6',
    name: 'Nuds AI',
    logo: '/images/Woman-by-the-Sea-at-Sunset.webp',
    rating: 4.9,
    externalUrl: 'https://t.me/razdevatel_ai',
    category: 'ai',
    shortDescription: 'Мощный AI-сервис для интеллектуальной обработки изображений с высокой точностью и анонимностью.',
    publishDate: '2026-01-05',
    detailedReview: {
      intro: 'Nuds AI — современная платформа для AI-обработки изображений с продвинутыми алгоритмами анализа.',
      fullDescription: `
<h2>Nuds AI — интеллектуальная обработка изображений онлайн</h2>
<p>Nuds AI — это современный онлайн-сервис, использующий возможности искусственного интеллекта для глубокой и детальной обработки изображений. Платформа создана с акцентом на удобство, стабильность и высокое качество результата, при этом оставаясь максимально простой в использовании.</p>
<p>Весь процесс построен по принципу минимального взаимодействия: загрузка изображения, автоматический анализ и получение результата. За этим простым сценарием скрывается сложная AI-система, работающая с множеством параметров изображения одновременно.</p>

<h2>Продвинутые AI-алгоритмы анализа</h2>
<p>Nuds AI применяет многоуровневую нейросетевую обработку, анализируя изображение по ключевым визуальным характеристикам. Алгоритмы учитывают анатомию, пропорции, позу, ракурс, перспективу и освещение, что позволяет формировать визуально цельный и аккуратный результат.</p>
<ul>
  <li>✨ Точное распознавание структуры изображения</li>
  <li>✨ Сохранение естественных пропорций и симметрии</li>
  <li>✨ Минимизация артефактов и искажений</li>
</ul>
<p>Такой подход отличает Nuds AI от базовых решений и делает сервис подходящим для пользователей, которым важна корректность и визуальная правдоподобность.</p>

<h2>Приватность и анонимность пользователей</h2>
<ul>
  <li>🔐 Использование сервиса без регистрации и аккаунтов</li>
  <li>🗑 Автоматическое удаление загруженных файлов</li>
  <li>🤫 Отсутствие хранения изображений и пользовательской истории</li>
</ul>
<p>Nuds AI изначально проектировался с учётом требований к конфиденциальности. Все операции выполняются анонимно, без привязки к личным данным.</p>

<h2>⚡ Скорость и стабильность работы</h2>
<ul>
  <li>⏱ Среднее время обработки: 20–60 секунд</li>
  <li>🚀 Стабильная работа при высокой нагрузке</li>
  <li>📲 Быстрое получение результата без сложных этапов</li>
</ul>
<p>Инфраструктура сервиса оптимизирована для параллельной обработки запросов, благодаря чему Nuds AI сохраняет стабильность и предсказуемое время генерации даже в пиковые периоды.</p>

<h2>🧠 Корректная интерпретация форм и деталей</h2>
<ul>
  <li>✨ Учет позы и перспективы</li>
  <li>✨ Аккуратная работа с деталями изображения</li>
  <li>✨ Чистый визуальный результат без грубых ошибок</li>
</ul>
<p>AI-модель обучена на разнообразных наборах данных, что позволяет ей корректно интерпретировать различные типы изображений и избегать неестественных визуальных решений.</p>

<h2>🔍 Возможности и особенности Nuds AI</h2>
<ul>
  <li>Современные нейросетевые алгоритмы нового поколения</li>
  <li>Полностью онлайн-формат без установки программ</li>
  <li>Фокус на удобство, стабильность и качество</li>
  <li>Регулярные обновления и улучшение алгоритмов</li>
</ul>
<p>Сервис постоянно развивается, расширяя функциональные возможности и улучшая качество обработки изображений.</p>

<p>Nuds AI — это сбалансированное сочетание технологий, простоты и внимания к деталям, ориентированное на пользователей, которым нужен надёжный и анонимный AI-сервис для интеллектуальной обработки изображений.</p>
      `,
      advantages: [
        'Продвинутые AI-алгоритмы',
        'Высокий уровень анонимности',
        'Стабильная и быстрая обработка',
        'Онлайн-доступ без установки'
      ],
      targetAudience: 'Пользователи, ищущие мощный и конфиденциальный AI-сервис для обработки изображений.',
      summary: 'Технологичный AI-сервис для глубокой и аккуратной обработки изображений с упором на приватность и качество.',
      parameters: [
        { label: 'Язык', value: 'Русский' },
        { label: 'Формат', value: 'Онлайн-платформа' },
        { label: 'Регистрация', value: 'Не требуется' }
      ]
    }
  },
  {
    id: 'ai-7',
    slug: 'resource-ai-7',
    name: 'Раздеватор AI',
    logo: 'https://picsum.photos/id/106/200/200',
    rating: 4.9,
    externalUrl: 'https://example.com',
    category: 'ai',
    shortDescription: 'Продвинутый AI-раздеватор для интеллектуальной обработки изображений с упором на реализм и анонимность.',
    publishDate: '2024-06-15',
    detailedReview: {
      intro: 'Раздеватор AI — современный бот для AI-обработки изображений с многоуровневым анализом и высокой точностью.',
      fullDescription: `
<h2>Раздеватор AI — интеллектуальный подход к обработке изображений</h2>
<p>Раздеватор AI — это современный AI-сервис, созданный для глубокой и аккуратной обработки изображений в онлайн-формате. Бот ориентирован на пользователей, которым важны простота использования, стабильность работы и реалистичный результат без лишних действий.</p>
<p>Весь процесс максимально упрощён: загрузка изображения, автоматический анализ и получение результата. При этом внутри сервиса работает мощная нейросеть, использующая сложные алгоритмы компьютерного зрения и машинного обучения.</p>

<h2>Многоуровневые AI-алгоритмы анализа</h2>
<p>Раздеватор AI применяет поэтапную обработку изображения, анализируя сразу несколько визуальных параметров. Алгоритмы учитывают анатомию, пропорции тела, позу, ракурс съёмки, перспективу и освещение, что позволяет добиться визуально цельного и аккуратного результата.</p>
<ul>
  <li>✨ Точное распознавание структуры изображения</li>
  <li>✨ Сохранение естественных пропорций</li>
  <li>✨ Минимизация визуальных артефактов и искажений</li>
</ul>
<p>Благодаря такому подходу Раздеватор AI выгодно отличается от базовых решений и демонстрирует стабильное качество генерации.</p>

<h2>Приватность и анонимность без компромиссов</h2>
<ul>
  <li>🔐 Использование бота без регистрации и аккаунтов</li>
  <li>🗑 Автоматическое удаление загруженных изображений</li>
  <li>🤫 Полное отсутствие хранения файлов и истории</li>
</ul>
<p>Раздеватор AI изначально разрабатывался с акцентом на конфиденциальность. Все действия выполняются анонимно, без привязки к личным данным пользователя.</p>

<h2>⚡ Высокая скорость и стабильная работа</h2>
<ul>
  <li>⏱ Среднее время обработки: 20–60 секунд</li>
  <li>🚀 Стабильная работа при высокой нагрузке</li>
  <li>📲 Быстрая выдача результата без ожиданий</li>
</ul>
<p>Инфраструктура сервиса оптимизирована для обработки большого количества запросов одновременно, что обеспечивает предсказуемую скорость и стабильность работы.</p>

<h2>🧠 Корректная интерпретация форм и деталей</h2>
<ul>
  <li>✨ Учет позы и перспективы</li>
  <li>✨ Аккуратная работа с деталями изображения</li>
  <li>✨ Чистый визуальный результат без грубых ошибок</li>
</ul>
<p>Нейросеть обучена на разнообразных данных, благодаря чему бот корректно интерпретирует различные типы изображений и избегает неестественных визуальных решений.</p>

<h2>🔍 Возможности и особенности Раздеватора AI</h2>
<ul>
  <li>Современные нейросетевые алгоритмы нового поколения</li>
  <li>Онлайн-формат без установки программ</li>
  <li>Фокус на удобство, стабильность и реализм</li>
  <li>Регулярные обновления и улучшение качества генерации</li>
</ul>
<p>Сервис постоянно развивается, повышая точность обработки и улучшая пользовательский опыт.</p>

<p>Раздеватор AI — это сочетание передовых технологий, простоты и внимания к деталям, ориентированное на пользователей, которым нужен надёжный, быстрый и анонимный AI-раздеватор.</p>
      `,
      advantages: [
        'Продвинутые AI-алгоритмы',
        'Полная анонимность',
        'Высокая скорость обработки',
        'Онлайн-доступ без установки'
      ],
      targetAudience: 'Пользователи, которым нужен мощный и конфиденциальный AI-раздеватор для обработки изображений.',
      summary: 'Технологичный AI-раздеватор с упором на реализм, скорость и приватность.',
      parameters: [
        { label: 'Язык', value: 'Русский' },
        { label: 'Формат', value: 'Онлайн / бот' },
        { label: 'Регистрация', value: 'Не требуется' }
      ]
    }
  }
];

// End of changes - the rest of the code is the same as your original.
```
