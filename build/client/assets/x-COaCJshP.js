import{r as i,j as g,R as ct}from"./jsx-runtime-D2HyDbKh.js";import{r as ut,a as lt}from"./index-BabtBpse.js";import{a as dt,c as ft}from"./cn-CytzSlOG.js";function vt(e,t){const n=i.createContext(t),r=a=>{const{children:c,...s}=a,d=i.useMemo(()=>s,Object.values(s));return g.jsx(n.Provider,{value:d,children:c})};r.displayName=e+"Provider";function o(a){const c=i.useContext(n);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[r,o]}function mt(e,t=[]){let n=[];function r(a,c){const s=i.createContext(c),d=n.length;n=[...n,c];const u=v=>{var y;const{scope:m,children:p,...E}=v,l=((y=m==null?void 0:m[e])==null?void 0:y[d])||s,h=i.useMemo(()=>E,Object.values(E));return g.jsx(l.Provider,{value:h,children:p})};u.displayName=a+"Provider";function f(v,m){var l;const p=((l=m==null?void 0:m[e])==null?void 0:l[d])||s,E=i.useContext(p);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${a}\``)}return[u,f]}const o=()=>{const a=n.map(c=>i.createContext(c));return function(s){const d=(s==null?void 0:s[e])||a;return i.useMemo(()=>({[`__scope${e}`]:{...s,[e]:d}}),[s,d])}};return o.scopeName=e,[r,ht(o,...t)]}function ht(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const c=r.reduce((s,{useScope:d,scopeName:u})=>{const v=d(a)[`__scope${u}`];return{...s,...v}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function me(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function De(...e){return t=>{let n=!1;const r=e.map(o=>{const a=me(o,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():me(e[o],null)}}}}function L(...e){return i.useCallback(De(...e),e)}function T(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}var Y=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},pt=ct.useId||(()=>{}),gt=0;function J(e){const[t,n]=i.useState(pt());return Y(()=>{e||n(r=>r??String(gt++))},[e]),e||(t?`radix-${t}`:"")}function M(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function yt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Et({defaultProp:t,onChange:n}),a=e!==void 0,c=a?e:r,s=M(n),d=i.useCallback(u=>{if(a){const v=typeof u=="function"?u(e):u;v!==e&&s(v)}else o(u)},[a,e,o,s]);return[c,d]}function Et({defaultProp:e,onChange:t}){const n=i.useState(e),[r]=n,o=i.useRef(r),a=M(t);return i.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),n}var H=i.forwardRef((e,t)=>{const{children:n,...r}=e,o=i.Children.toArray(n),a=o.find(Ct);if(a){const c=a.props.children,s=o.map(d=>d===a?i.Children.count(c)>1?i.Children.only(null):i.isValidElement(c)?c.props.children:null:d);return g.jsx(se,{...r,ref:t,children:i.isValidElement(c)?i.cloneElement(c,void 0,s):null})}return g.jsx(se,{...r,ref:t,children:n})});H.displayName="Slot";var se=i.forwardRef((e,t)=>{const{children:n,...r}=e;if(i.isValidElement(n)){const o=St(n);return i.cloneElement(n,{...wt(r,n.props),ref:t?De(t,o):o})}return i.Children.count(n)>1?i.Children.only(null):null});se.displayName="SlotClone";var bt=({children:e})=>g.jsx(g.Fragment,{children:e});function Ct(e){return i.isValidElement(e)&&e.type===bt}function wt(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...s)=>{a(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}function St(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var xt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],D=xt.reduce((e,t)=>{const n=i.forwardRef((r,o)=>{const{asChild:a,...c}=r,s=a?H:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),g.jsx(s,{...c,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Pt(e,t){e&&ut.flushSync(()=>e.dispatchEvent(t))}function Rt(e,t=globalThis==null?void 0:globalThis.document){const n=M(e);i.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Nt="DismissableLayer",ce="dismissableLayer.update",Ot="dismissableLayer.pointerDownOutside",Dt="dismissableLayer.focusOutside",he,Ae=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Te=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:c,onDismiss:s,...d}=e,u=i.useContext(Ae),[f,v]=i.useState(null),m=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=i.useState({}),E=L(t,b=>v(b)),l=Array.from(u.layers),[h]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),y=l.indexOf(h),x=f?l.indexOf(f):-1,C=u.layersWithOutsidePointerEventsDisabled.size>0,w=x>=y,S=Mt(b=>{const O=b.target,W=[...u.branches].some(Q=>Q.contains(O));!w||W||(o==null||o(b),c==null||c(b),b.defaultPrevented||s==null||s())},m),N=It(b=>{const O=b.target;[...u.branches].some(Q=>Q.contains(O))||(a==null||a(b),c==null||c(b),b.defaultPrevented||s==null||s())},m);return Rt(b=>{x===u.layers.size-1&&(r==null||r(b),!b.defaultPrevented&&s&&(b.preventDefault(),s()))},m),i.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(he=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),pe(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=he)}},[f,m,n,u]),i.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),pe())},[f,u]),i.useEffect(()=>{const b=()=>p({});return document.addEventListener(ce,b),()=>document.removeEventListener(ce,b)},[]),g.jsx(D.div,{...d,ref:E,style:{pointerEvents:C?w?"auto":"none":void 0,...e.style},onFocusCapture:T(e.onFocusCapture,N.onFocusCapture),onBlurCapture:T(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:T(e.onPointerDownCapture,S.onPointerDownCapture)})});Te.displayName=Nt;var At="DismissableLayerBranch",Tt=i.forwardRef((e,t)=>{const n=i.useContext(Ae),r=i.useRef(null),o=L(t,r);return i.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),g.jsx(D.div,{...e,ref:o})});Tt.displayName=At;function Mt(e,t=globalThis==null?void 0:globalThis.document){const n=M(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let d=function(){Me(Ot,n,u,{discrete:!0})};const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=d,t.addEventListener("click",o.current,{once:!0})):d()}else t.removeEventListener("click",o.current);r.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function It(e,t=globalThis==null?void 0:globalThis.document){const n=M(e),r=i.useRef(!1);return i.useEffect(()=>{const o=a=>{a.target&&!r.current&&Me(Dt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function pe(){const e=new CustomEvent(ce);document.dispatchEvent(e)}function Me(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Pt(o,a):o.dispatchEvent(a)}var ee="focusScope.autoFocusOnMount",te="focusScope.autoFocusOnUnmount",ge={bubbles:!1,cancelable:!0},Lt="FocusScope",Ie=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...c}=e,[s,d]=i.useState(null),u=M(o),f=M(a),v=i.useRef(null),m=L(t,l=>d(l)),p=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let l=function(C){if(p.paused||!s)return;const w=C.target;s.contains(w)?v.current=w:A(v.current,{select:!0})},h=function(C){if(p.paused||!s)return;const w=C.relatedTarget;w!==null&&(s.contains(w)||A(v.current,{select:!0}))},y=function(C){if(document.activeElement===document.body)for(const S of C)S.removedNodes.length>0&&A(s)};document.addEventListener("focusin",l),document.addEventListener("focusout",h);const x=new MutationObserver(y);return s&&x.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",l),document.removeEventListener("focusout",h),x.disconnect()}}},[r,s,p.paused]),i.useEffect(()=>{if(s){Ee.add(p);const l=document.activeElement;if(!s.contains(l)){const y=new CustomEvent(ee,ge);s.addEventListener(ee,u),s.dispatchEvent(y),y.defaultPrevented||(kt(Bt(Le(s)),{select:!0}),document.activeElement===l&&A(s))}return()=>{s.removeEventListener(ee,u),setTimeout(()=>{const y=new CustomEvent(te,ge);s.addEventListener(te,f),s.dispatchEvent(y),y.defaultPrevented||A(l??document.body,{select:!0}),s.removeEventListener(te,f),Ee.remove(p)},0)}}},[s,u,f,p]);const E=i.useCallback(l=>{if(!n&&!r||p.paused)return;const h=l.key==="Tab"&&!l.altKey&&!l.ctrlKey&&!l.metaKey,y=document.activeElement;if(h&&y){const x=l.currentTarget,[C,w]=_t(x);C&&w?!l.shiftKey&&y===w?(l.preventDefault(),n&&A(C,{select:!0})):l.shiftKey&&y===C&&(l.preventDefault(),n&&A(w,{select:!0})):y===x&&l.preventDefault()}},[n,r,p.paused]);return g.jsx(D.div,{tabIndex:-1,...c,ref:m,onKeyDown:E})});Ie.displayName=Lt;function kt(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(A(r,{select:t}),document.activeElement!==n)return}function _t(e){const t=Le(e),n=ye(t,e),r=ye(t.reverse(),e);return[n,r]}function Le(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ye(e,t){for(const n of e)if(!Ft(n,{upTo:t}))return n}function Ft(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function jt(e){return e instanceof HTMLInputElement&&"select"in e}function A(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&jt(e)&&t&&e.select()}}var Ee=Wt();function Wt(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=be(e,t),e.unshift(t)},remove(t){var n;e=be(e,t),(n=e[0])==null||n.resume()}}}function be(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Bt(e){return e.filter(t=>t.tagName!=="A")}var Ut="Portal",ke=i.forwardRef((e,t)=>{var s;const{container:n,...r}=e,[o,a]=i.useState(!1);Y(()=>a(!0),[]);const c=n||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return c?lt.createPortal(g.jsx(D.div,{...r,ref:t}),c):null});ke.displayName=Ut;function Vt(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var Z=e=>{const{present:t,children:n}=e,r=$t(t),o=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),a=L(r.ref,Kt(o));return typeof n=="function"||r.isPresent?i.cloneElement(o,{ref:a}):null};Z.displayName="Presence";function $t(e){const[t,n]=i.useState(),r=i.useRef({}),o=i.useRef(e),a=i.useRef("none"),c=e?"mounted":"unmounted",[s,d]=Vt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const u=B(r.current);a.current=s==="mounted"?u:"none"},[s]),Y(()=>{const u=r.current,f=o.current;if(f!==e){const m=a.current,p=B(u);e?d("MOUNT"):p==="none"||(u==null?void 0:u.display)==="none"?d("UNMOUNT"):d(f&&m!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,d]),Y(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,v=p=>{const l=B(r.current).includes(p.animationName);if(p.target===t&&l&&(d("ANIMATION_END"),!o.current)){const h=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=h)})}},m=p=>{p.target===t&&(a.current=B(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",v),t.addEventListener("animationend",v),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",v),t.removeEventListener("animationend",v)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:i.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function B(e){return(e==null?void 0:e.animationName)||"none"}function Kt(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ne=0;function Xt(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ce()),document.body.insertAdjacentElement("beforeend",e[1]??Ce()),ne++,()=>{ne===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ne--}},[])}function Ce(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var R=function(){return R=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},R.apply(this,arguments)};function _e(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Gt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var X="right-scroll-bar-position",G="width-before-scroll-bar",Yt="with-scroll-bars-hidden",zt="--removed-body-scroll-bar-size";function re(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ht(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Zt=typeof window<"u"?i.useLayoutEffect:i.useEffect,we=new WeakMap;function qt(e,t){var n=Ht(null,function(r){return e.forEach(function(o){return re(o,r)})});return Zt(function(){var r=we.get(n);if(r){var o=new Set(r),a=new Set(e),c=n.current;o.forEach(function(s){a.has(s)||re(s,null)}),a.forEach(function(s){o.has(s)||re(s,c)})}we.set(n,e)},[e]),n}function Qt(e){return e}function Jt(e,t){t===void 0&&(t=Qt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var c=t(a,r);return n.push(c),function(){n=n.filter(function(s){return s!==c})}},assignSyncMedium:function(a){for(r=!0;n.length;){var c=n;n=[],c.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var c=[];if(n.length){var s=n;n=[],s.forEach(a),c=n}var d=function(){var f=c;c=[],f.forEach(a)},u=function(){return Promise.resolve().then(d)};u(),n={push:function(f){c.push(f),u()},filter:function(f){return c=c.filter(f),n}}}};return o}function en(e){e===void 0&&(e={});var t=Jt(null);return t.options=R({async:!0,ssr:!1},e),t}var Fe=function(e){var t=e.sideCar,n=_e(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,R({},n))};Fe.isSideCarExport=!0;function tn(e,t){return e.useMedium(t),Fe}var je=en(),oe=function(){},q=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:oe,onWheelCapture:oe,onTouchMoveCapture:oe}),o=r[0],a=r[1],c=e.forwardProps,s=e.children,d=e.className,u=e.removeScrollBar,f=e.enabled,v=e.shards,m=e.sideCar,p=e.noIsolation,E=e.inert,l=e.allowPinchZoom,h=e.as,y=h===void 0?"div":h,x=e.gapMode,C=_e(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=m,S=qt([n,t]),N=R(R({},C),o);return i.createElement(i.Fragment,null,f&&i.createElement(w,{sideCar:je,removeScrollBar:u,shards:v,noIsolation:p,inert:E,setCallbacks:a,allowPinchZoom:!!l,lockRef:n,gapMode:x}),c?i.cloneElement(i.Children.only(s),R(R({},N),{ref:S})):i.createElement(y,R({},N,{className:d,ref:S}),s))});q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};q.classNames={fullWidth:G,zeroRight:X};var nn=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function rn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=nn();return t&&e.setAttribute("nonce",t),e}function on(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function an(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var sn=function(){var e=0,t=null;return{add:function(n){e==0&&(t=rn())&&(on(t,n),an(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},cn=function(){var e=sn();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},We=function(){var e=cn(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},un={left:0,top:0,right:0,gap:0},ae=function(e){return parseInt(e||"",10)||0},ln=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ae(n),ae(r),ae(o)]},dn=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return un;var t=ln(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},fn=We(),j="data-scroll-locked",vn=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Yt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(j,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(X,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(G,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(X," .").concat(X,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(j,`] {
    `).concat(zt,": ").concat(s,`px;
  }
`)},Se=function(){var e=parseInt(document.body.getAttribute(j)||"0",10);return isFinite(e)?e:0},mn=function(){i.useEffect(function(){return document.body.setAttribute(j,(Se()+1).toString()),function(){var e=Se()-1;e<=0?document.body.removeAttribute(j):document.body.setAttribute(j,e.toString())}},[])},hn=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;mn();var a=i.useMemo(function(){return dn(o)},[o]);return i.createElement(fn,{styles:vn(a,!t,o,n?"":"!important")})},ue=!1;if(typeof window<"u")try{var U=Object.defineProperty({},"passive",{get:function(){return ue=!0,!0}});window.addEventListener("test",U,U),window.removeEventListener("test",U,U)}catch{ue=!1}var k=ue?{passive:!1}:!1,pn=function(e){return e.tagName==="TEXTAREA"},Be=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!pn(e)&&n[t]==="visible")},gn=function(e){return Be(e,"overflowY")},yn=function(e){return Be(e,"overflowX")},xe=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Ue(e,r);if(o){var a=Ve(e,r),c=a[1],s=a[2];if(c>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},En=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},bn=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ue=function(e,t){return e==="v"?gn(t):yn(t)},Ve=function(e,t){return e==="v"?En(t):bn(t)},Cn=function(e,t){return e==="h"&&t==="rtl"?-1:1},wn=function(e,t,n,r,o){var a=Cn(e,window.getComputedStyle(t).direction),c=a*r,s=n.target,d=t.contains(s),u=!1,f=c>0,v=0,m=0;do{var p=Ve(e,s),E=p[0],l=p[1],h=p[2],y=l-h-a*E;(E||y)&&Ue(e,s)&&(v+=y,m+=E),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!d&&s!==document.body||d&&(t.contains(s)||t===s));return(f&&(Math.abs(v)<1||!o)||!f&&(Math.abs(m)<1||!o))&&(u=!0),u},V=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Pe=function(e){return[e.deltaX,e.deltaY]},Re=function(e){return e&&"current"in e?e.current:e},Sn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},xn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Pn=0,_=[];function Rn(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(Pn++)[0],a=i.useState(We)[0],c=i.useRef(e);i.useEffect(function(){c.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var l=Gt([e.lockRef.current],(e.shards||[]).map(Re),!0).filter(Boolean);return l.forEach(function(h){return h.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),l.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=i.useCallback(function(l,h){if("touches"in l&&l.touches.length===2||l.type==="wheel"&&l.ctrlKey)return!c.current.allowPinchZoom;var y=V(l),x=n.current,C="deltaX"in l?l.deltaX:x[0]-y[0],w="deltaY"in l?l.deltaY:x[1]-y[1],S,N=l.target,b=Math.abs(C)>Math.abs(w)?"h":"v";if("touches"in l&&b==="h"&&N.type==="range")return!1;var O=xe(b,N);if(!O)return!0;if(O?S=b:(S=b==="v"?"h":"v",O=xe(b,N)),!O)return!1;if(!r.current&&"changedTouches"in l&&(C||w)&&(r.current=S),!S)return!0;var W=r.current||S;return wn(W,h,l,W==="h"?C:w,!0)},[]),d=i.useCallback(function(l){var h=l;if(!(!_.length||_[_.length-1]!==a)){var y="deltaY"in h?Pe(h):V(h),x=t.current.filter(function(S){return S.name===h.type&&(S.target===h.target||h.target===S.shadowParent)&&Sn(S.delta,y)})[0];if(x&&x.should){h.cancelable&&h.preventDefault();return}if(!x){var C=(c.current.shards||[]).map(Re).filter(Boolean).filter(function(S){return S.contains(h.target)}),w=C.length>0?s(h,C[0]):!c.current.noIsolation;w&&h.cancelable&&h.preventDefault()}}},[]),u=i.useCallback(function(l,h,y,x){var C={name:l,delta:h,target:y,should:x,shadowParent:Nn(y)};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(w){return w!==C})},1)},[]),f=i.useCallback(function(l){n.current=V(l),r.current=void 0},[]),v=i.useCallback(function(l){u(l.type,Pe(l),l.target,s(l,e.lockRef.current))},[]),m=i.useCallback(function(l){u(l.type,V(l),l.target,s(l,e.lockRef.current))},[]);i.useEffect(function(){return _.push(a),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:m}),document.addEventListener("wheel",d,k),document.addEventListener("touchmove",d,k),document.addEventListener("touchstart",f,k),function(){_=_.filter(function(l){return l!==a}),document.removeEventListener("wheel",d,k),document.removeEventListener("touchmove",d,k),document.removeEventListener("touchstart",f,k)}},[]);var p=e.removeScrollBar,E=e.inert;return i.createElement(i.Fragment,null,E?i.createElement(a,{styles:xn(o)}):null,p?i.createElement(hn,{gapMode:e.gapMode}):null)}function Nn(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const On=tn(je,Rn);var $e=i.forwardRef(function(e,t){return i.createElement(q,R({},e,{ref:t,sideCar:On}))});$e.classNames=q.classNames;var Dn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},F=new WeakMap,$=new WeakMap,K={},ie=0,Ke=function(e){return e&&(e.host||Ke(e.parentNode))},An=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ke(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Tn=function(e,t,n,r){var o=An(t,Array.isArray(e)?e:[e]);K[n]||(K[n]=new WeakMap);var a=K[n],c=[],s=new Set,d=new Set(o),u=function(v){!v||s.has(v)||(s.add(v),u(v.parentNode))};o.forEach(u);var f=function(v){!v||d.has(v)||Array.prototype.forEach.call(v.children,function(m){if(s.has(m))f(m);else try{var p=m.getAttribute(r),E=p!==null&&p!=="false",l=(F.get(m)||0)+1,h=(a.get(m)||0)+1;F.set(m,l),a.set(m,h),c.push(m),l===1&&E&&$.set(m,!0),h===1&&m.setAttribute(n,"true"),E||m.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",m,y)}})};return f(t),s.clear(),ie++,function(){c.forEach(function(v){var m=F.get(v)-1,p=a.get(v)-1;F.set(v,m),a.set(v,p),m||($.has(v)||v.removeAttribute(r),$.delete(v)),p||v.removeAttribute(n)}),ie--,ie||(F=new WeakMap,F=new WeakMap,$=new WeakMap,K={})}},Mn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Dn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Tn(r,o,n,"aria-hidden")):function(){return null}},le="Dialog",[Xe,qn]=mt(le),[In,P]=Xe(le),Ge=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:c=!0}=e,s=i.useRef(null),d=i.useRef(null),[u=!1,f]=yt({prop:r,defaultProp:o,onChange:a});return g.jsx(In,{scope:t,triggerRef:s,contentRef:d,contentId:J(),titleId:J(),descriptionId:J(),open:u,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(v=>!v),[f]),modal:c,children:n})};Ge.displayName=le;var Ye="DialogTrigger",ze=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(Ye,n),a=L(t,o.triggerRef);return g.jsx(D.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ve(o.open),...r,ref:a,onClick:T(e.onClick,o.onOpenToggle)})});ze.displayName=Ye;var de="DialogPortal",[Ln,He]=Xe(de,{forceMount:void 0}),Ze=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=P(de,t);return g.jsx(Ln,{scope:t,forceMount:n,children:i.Children.map(r,c=>g.jsx(Z,{present:n||a.open,children:g.jsx(ke,{asChild:!0,container:o,children:c})}))})};Ze.displayName=de;var z="DialogOverlay",qe=i.forwardRef((e,t)=>{const n=He(z,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=P(z,e.__scopeDialog);return a.modal?g.jsx(Z,{present:r||a.open,children:g.jsx(kn,{...o,ref:t})}):null});qe.displayName=z;var kn=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(z,n);return g.jsx($e,{as:H,allowPinchZoom:!0,shards:[o.contentRef],children:g.jsx(D.div,{"data-state":ve(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),I="DialogContent",Qe=i.forwardRef((e,t)=>{const n=He(I,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=P(I,e.__scopeDialog);return g.jsx(Z,{present:r||a.open,children:a.modal?g.jsx(_n,{...o,ref:t}):g.jsx(Fn,{...o,ref:t})})});Qe.displayName=I;var _n=i.forwardRef((e,t)=>{const n=P(I,e.__scopeDialog),r=i.useRef(null),o=L(t,n.contentRef,r);return i.useEffect(()=>{const a=r.current;if(a)return Mn(a)},[]),g.jsx(Je,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:T(e.onCloseAutoFocus,a=>{var c;a.preventDefault(),(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:T(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,s=c.button===0&&c.ctrlKey===!0;(c.button===2||s)&&a.preventDefault()}),onFocusOutside:T(e.onFocusOutside,a=>a.preventDefault())})}),Fn=i.forwardRef((e,t)=>{const n=P(I,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return g.jsx(Je,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var c,s;(c=e.onCloseAutoFocus)==null||c.call(e,a),a.defaultPrevented||(r.current||(s=n.triggerRef.current)==null||s.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var d,u;(d=e.onInteractOutside)==null||d.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=a.target;((u=n.triggerRef.current)==null?void 0:u.contains(c))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),Je=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...c}=e,s=P(I,n),d=i.useRef(null),u=L(t,d);return Xt(),g.jsxs(g.Fragment,{children:[g.jsx(Ie,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:g.jsx(Te,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":ve(s.open),...c,ref:u,onDismiss:()=>s.onOpenChange(!1)})}),g.jsxs(g.Fragment,{children:[g.jsx(jn,{titleId:s.titleId}),g.jsx(Bn,{contentRef:d,descriptionId:s.descriptionId})]})]})}),fe="DialogTitle",et=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(fe,n);return g.jsx(D.h2,{id:o.titleId,...r,ref:t})});et.displayName=fe;var tt="DialogDescription",nt=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(tt,n);return g.jsx(D.p,{id:o.descriptionId,...r,ref:t})});nt.displayName=tt;var rt="DialogClose",ot=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(rt,n);return g.jsx(D.button,{type:"button",...r,ref:t,onClick:T(e.onClick,()=>o.onOpenChange(!1))})});ot.displayName=rt;function ve(e){return e?"open":"closed"}var at="DialogTitleWarning",[Qn,it]=vt(at,{contentName:I,titleName:fe,docsSlug:"dialog"}),jn=({titleId:e})=>{const t=it(at),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Wn="DialogDescriptionWarning",Bn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${it(Wn).contentName}}.`;return i.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Jn=Ge,er=ze,tr=Ze,nr=qe,rr=Qe,or=et,ar=nt,ir=ot;const Ne=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Oe=dt,Un=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Oe(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:a}=t,c=Object.keys(o).map(u=>{const f=n==null?void 0:n[u],v=a==null?void 0:a[u];if(f===null)return null;const m=Ne(f)||Ne(v);return o[u][m]}),s=n&&Object.entries(n).reduce((u,f)=>{let[v,m]=f;return m===void 0||(u[v]=m),u},{}),d=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,f)=>{let{class:v,className:m,...p}=f;return Object.entries(p).every(E=>{let[l,h]=E;return Array.isArray(h)?h.includes({...a,...s}[l]):{...a,...s}[l]===h})?[...u,v,m]:u},[]);return Oe(e,c,d,n==null?void 0:n.class,n==null?void 0:n.className)},Vn=Un("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),$n=i.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},a)=>{const c=r?H:"button";return g.jsx(c,{ref:a,className:ft(Vn({variant:t,size:n,className:e})),...o})});$n.displayName="Button";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),st=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...s},d)=>i.createElement("svg",{ref:d,...Xn,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:st("lucide",o),...s},[...c.map(([u,f])=>i.createElement(u,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=(e,t)=>{const n=i.forwardRef(({className:r,...o},a)=>i.createElement(Gn,{ref:a,iconNode:t,className:st(`lucide-${Kn(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=Yn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{$n as B,rr as C,ar as D,Ie as F,nr as O,D as P,Jn as R,bt as S,er as T,Qn as W,sr as X,Un as a,mt as b,Yn as c,qn as d,T as e,or as f,ir as g,tr as h,Vn as i,H as j,Y as k,M as l,Z as m,Te as n,J as o,yt as p,ke as q,Mn as r,Xt as s,De as t,L as u,$e as v,Pt as w};