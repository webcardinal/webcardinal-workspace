let n,t,e=!1;const o="undefined"!=typeof window?window:{},s=o.document||{head:{}},l={t:0,o:"",jmp:n=>n(),raf:n=>requestAnimationFrame(n),ael:(n,t,e,o)=>n.addEventListener(t,e,o),rel:(n,t,e,o)=>n.removeEventListener(t,e,o),ce:(n,t)=>new CustomEvent(n,t)},c=n=>Promise.resolve(n),i={},a=n=>"object"==(n=typeof n)||"function"===n,r=(n,t,...e)=>{let o=null,s=!1,l=!1,c=[];const i=t=>{for(let e=0;e<t.length;e++)o=t[e],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((s="function"!=typeof n&&!a(o))&&(o+=""),s&&l?c[c.length-1].l+=o:c.push(s?u(null,o):o),l=s)};if(i(e),t){const n=t.className||t.class;n&&(t.class="object"!=typeof n?n:Object.keys(n).filter((t=>n[t])).join(" "))}const r=u(n,null);return r.i=t,c.length>0&&(r.u=c),r},u=(n,t)=>({t:0,m:n,l:t,h:null,u:null,i:null}),d={},f=(n,t,e,s,c,i)=>{if(e!==s){let r=H(n,t),u=t.toLowerCase();if("class"===t){const t=n.classList,o=m(e),l=m(s);t.remove(...o.filter((n=>n&&!l.includes(n)))),t.add(...l.filter((n=>n&&!o.includes(n))))}else if("style"===t){for(const t in e)s&&null!=s[t]||(t.includes("-")?n.style.removeProperty(t):n.style[t]="");for(const t in s)e&&s[t]===e[t]||(t.includes("-")?n.style.setProperty(t,s[t]):n.style[t]=s[t])}else if(r||"o"!==t[0]||"n"!==t[1]){const o=a(s);if((r||o&&null!==s)&&!c)try{if(n.tagName.includes("-"))n[t]=s;else{let o=null==s?"":s;"list"===t?r=!1:null!=e&&n[t]==o||(n[t]=o)}}catch(n){}null==s||!1===s?!1===s&&""!==n.getAttribute(t)||n.removeAttribute(t):(!r||4&i||c)&&!o&&n.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):H(o,u)?u.slice(2):u[2]+t.slice(3),e&&l.rel(n,t,e,!1),s&&l.ael(n,t,s,!1)}},w=/\s/,m=n=>n?n.split(w):[],b=(n,t,e,o)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,l=n&&n.i||i,c=t.i||i;for(o in l)o in c||f(s,o,l[o],void 0,e,t.t);for(o in c)f(s,o,l[o],c[o],e,t.t)},h=(t,e,o)=>{let l,c,i=e.u[o],a=0;if(null!==i.l)l=i.h=s.createTextNode(i.l);else if(l=i.h=s.createElement(i.m),b(null,i,!1),null!=n&&l["s-si"]!==n&&l.classList.add(l["s-si"]=n),i.u)for(a=0;a<i.u.length;++a)c=h(t,i,a),c&&l.appendChild(c);return l},p=(n,e,o,s,l,c)=>{let i,a=n;for(a.shadowRoot&&a.tagName===t&&(a=a.shadowRoot);l<=c;++l)s[l]&&(i=h(null,o,l),i&&(s[l].h=i,a.insertBefore(i,e)))},y=(n,t,e,o)=>{for(;t<=e;++t)(o=n[t])&&o.h.remove()},$=(n,t)=>n.m===t.m,g=(n,t)=>{const e=t.h=n.h,o=n.u,s=t.u,l=t.l;null===l?("slot"===t.m||b(n,t,!1),null!==o&&null!==s?((n,t,e,o)=>{let s,l=0,c=0,i=t.length-1,a=t[0],r=t[i],u=o.length-1,d=o[0],f=o[u];for(;l<=i&&c<=u;)null==a?a=t[++l]:null==r?r=t[--i]:null==d?d=o[++c]:null==f?f=o[--u]:$(a,d)?(g(a,d),a=t[++l],d=o[++c]):$(r,f)?(g(r,f),r=t[--i],f=o[--u]):$(a,f)?(g(a,f),n.insertBefore(a.h,r.h.nextSibling),a=t[++l],f=o[--u]):$(r,d)?(g(r,d),n.insertBefore(r.h,a.h),r=t[--i],d=o[++c]):(s=h(t&&t[c],e,c),d=o[++c],s&&a.h.parentNode.insertBefore(s,a.h));l>i?p(n,null==o[u+1]?null:o[u+1].h,e,o,c,u):c>u&&y(t,l,i)})(e,o,t,s):null!==s?(null!==n.l&&(e.textContent=""),p(e,null,t,s,0,s.length-1)):null!==o&&y(o,0,o.length-1)):n.l!==l&&(e.data=l)},E=n=>W(n).p,v=(n,t)=>{t&&!n.$&&t["s-p"]&&t["s-p"].push(new Promise((t=>n.$=t)))},T=(n,t)=>{if(n.t|=16,!(4&n.t))return v(n,n.g),B((()=>C(n,t)));n.t|=512},C=(n,t)=>{const e=n.v;let o;return t&&(o=L(e,"componentWillLoad")),M(o,(()=>P(n,e)))},P=async(e,o)=>{const s=e.p,l=s["s-rc"];((e,o)=>{const s=e.p,l=e.T,c=e.C||u(null,null),i=(n=>n&&n.m===d)(o)?o:r(null,null,o);t=s.tagName,l.P&&(i.i=i.i||{},l.P.map((([n,t])=>i.i[t]=s[n]))),i.m=null,i.t|=4,e.C=i,i.h=c.h=s.shadowRoot||s,n=s["s-sc"],g(c,i)})(e,O(e,o)),l&&(l.map((n=>n())),s["s-rc"]=void 0);{const n=s["s-p"],t=()=>j(e);0===n.length?t():(Promise.all(n).then(t),e.t|=4,n.length=0)}},O=(n,t)=>{try{t=t.render(),n.t&=-17,n.t|=2}catch(t){V(t,n.p)}return t},j=n=>{const t=n.p,e=n.v,o=n.g;L(e,"componentDidRender"),64&n.t||(n.t|=64,R(t),L(e,"componentDidLoad"),n.O(t),o||k()),n.j(t),n.$&&(n.$(),n.$=void 0),512&n.t&&G((()=>T(n,!1))),n.t&=-517},k=()=>{R(s.documentElement),G((()=>(n=>{const t=l.ce("appload",{detail:{namespace:"webcardinal"}});return n.dispatchEvent(t),t})(o)))},L=(n,t,e)=>{if(n&&n[t])try{return n[t](e)}catch(n){V(n)}},M=(n,t)=>n&&n.then?n.then(t):t(),R=n=>n.classList.add("hydrated"),x=(n,t,e)=>{if(t.k){n.watchers&&(t.L=n.watchers);const o=Object.entries(t.k),s=n.prototype;if(o.map((([n,[o]])=>{31&o||2&e&&32&o?Object.defineProperty(s,n,{get(){return((n,t)=>W(this).M.get(t))(0,n)},set(e){((n,t,e,o)=>{const s=W(n),l=s.p,c=s.M.get(t),i=s.t,r=s.v;if(e=((n,t)=>null==n||a(n)?n:4&t?"false"!==n&&(""===n||!!n):1&t?n+"":n)(e,o.k[t][0]),!(8&i&&void 0!==c||e===c)&&(s.M.set(t,e),r)){if(o.L&&128&i){const n=o.L[t];n&&n.map((n=>{try{r[n](e,c,t)}catch(n){V(n,l)}}))}2==(18&i)&&T(s,!1)}})(this,n,e,t)},configurable:!0,enumerable:!0}):1&e&&64&o&&Object.defineProperty(s,n,{value(...t){const e=W(this);return e.R.then((()=>e.v[n](...t)))}})})),1&e){const e=new Map;s.attributeChangedCallback=function(n,t,o){l.jmp((()=>{const t=e.get(n);this[t]=(null!==o||"boolean"!=typeof this[t])&&o}))},n.observedAttributes=o.filter((([n,t])=>15&t[0])).map((([n,o])=>{const s=o[1]||n;return e.set(s,n),512&o[0]&&t.P.push([n,s]),s}))}}return n},D=(n,t={})=>{const e=[],c=t.exclude||[],i=o.customElements,a=s.head,r=a.querySelector("meta[charset]"),u=s.createElement("style"),d=[];let f,w=!0;Object.assign(l,t),l.o=new URL(t.resourcesUrl||"./",s.baseURI).href,n.map((n=>n[1].map((t=>{const o={t:t[0],D:t[1],k:t[2],S:t[3]};o.k=t[2],o.P=[],o.L={};const s=o.D,a=class extends HTMLElement{constructor(n){super(n),A(n=this,o),1&o.t&&n.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),w?d.push(this):l.jmp((()=>(n=>{if(0==(1&l.t)){const t=W(n),e=t.T,o=()=>{};if(!(1&t.t)){t.t|=1;{let e=n;for(;e=e.parentNode||e.host;)if(e["s-p"]){v(t,t.g=e);break}}e.k&&Object.entries(e.k).map((([t,[e]])=>{if(31&e&&n.hasOwnProperty(t)){const e=n[t];delete n[t],n[t]=e}})),(async(n,t,e,o,s)=>{if(0==(32&t.t)){if(t.t|=32,(s=I(e)).then){const n=()=>{};s=await s,n()}s.isProxied||(e.L=s.watchers,x(s,e,2),s.isProxied=!0);const n=()=>{};t.t|=8;try{new s(t)}catch(n){V(n)}t.t&=-9,t.t|=128,n()}const l=t.g,c=()=>T(t,!0);l&&l["s-rc"]?l["s-rc"].push(c):c()})(0,t,e)}o()}})(this)))}disconnectedCallback(){l.jmp((()=>(()=>{0==(1&l.t)&&L(W(this).v,"disconnectedCallback")})()))}componentOnReady(){return W(this).W}};o._=n[0],c.includes(s)||i.get(s)||(e.push(s),i.define(s,x(a,o,1)))})))),u.innerHTML=e+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),a.insertBefore(u,r?r.nextSibling:a.firstChild),w=!1,d.length?d.map((n=>n.connectedCallback())):l.jmp((()=>f=setTimeout(k,30)))},S=new WeakMap,W=n=>S.get(n),_=(n,t)=>S.set(t.v=n,t),A=(n,t)=>{const e={t:0,p:n,T:t,M:new Map};return e.R=new Promise((n=>e.j=n)),e.W=new Promise((n=>e.O=n)),n["s-p"]=[],n["s-rc"]=[],S.set(n,e)},H=(n,t)=>t in n,V=(n,t)=>(0,console.error)(n,t),q=new Map,I=n=>{const t=n.D.replace(/-/g,"_"),e=n._,o=q.get(e);return o?o[t]:import(`./${e}.entry.js`).then((n=>(q.set(e,n),n[t])),V)},N=[],U=[],Y=(n,t)=>o=>{n.push(o),e||(e=!0,t&&4&l.t?G(F):l.raf(F))},z=n=>{for(let t=0;t<n.length;t++)try{n[t](performance.now())}catch(n){V(n)}n.length=0},F=()=>{z(N),z(U),(e=N.length>0)&&l.raf(F)},G=n=>c().then(n),B=Y(U,!0);function J(n,t,e=!1,o=null){const s=new CustomEvent(n,t);e&&(o?o.dispatchEvent(s):document.dispatchEvent(s))}function K(n){return n&&"string"==typeof n&&0!==n.length?n.split("").map((n=>n===n.toLowerCase()?n:"-"+n.toLowerCase())).join(""):""}function Q(n){if("string"!=typeof n)throw Error("Invalid model chain");return n.split("@").join("")}function X(n){if("boolean"==typeof n)return n;if("string"==typeof n)switch(n.toLowerCase().trim()){case"true":case"1":return!0;case"false":case"0":case null:return!1;default:return!!n}return!!n}function Z(n){return n.replace(/-([a-z])/g,(function(n){return n[1].toUpperCase()}))}function nn(n,t){const e=document.createElement("style");e.innerHTML=t,n.appendChild(e)}window.cardinal=window.cardinal||{},window.cardinal.oldCustomTheme=window.cardinal.oldCustomTheme||{};const{oldCustomTheme:tn}=window.cardinal;tn.dependencies=tn.dependencies||{},tn.imports=tn.imports||{},tn.appTheme=tn.appTheme||null;const{dependencies:en,imports:on}=tn,sn=/@import.*?["']([^"']+)["'].*?;/g;function ln(n){return new Promise(((t,e)=>{fetch(n).then((n=>{if(n.ok)return t(n.text());e({url:n.url,status:n.status,statusText:n.statusText})}))}))}function cn(n,t){return!!t&&(t.shadowRoot?n.parentNode===t.shadowRoot.host:cn(t,t.parentElement))}function an(){let n=n=>{let t={};n.addEventListener("styleExists",(e=>{e.stopImmediatePropagation(),e.preventDefault();let o=e.detail.componentTag;(0,e.detail.callback)(void 0,t.hasOwnProperty(o),n),t[o]||(t[o]=!0)})),n.addEventListener("componentWasRemoved",(n=>{let e=n.detail.componentTag;t[e]&&delete t[e]}))};return n(document.querySelector("body")),t=>{const{componentWillLoad:e,disconnectedCallback:o}=t;t.componentWillLoad=function(){const t=E(this);if(t&&t.isConnected){let o=o=>{let s="";window&&(window.basePath?s=window.basePath:window.WebCardinal&&window.WebCardinal.basePath&&(s=window.WebCardinal.basePath));let l=t.tagName.toLowerCase(),c=n=>new Promise((t=>{let c=s+"/themes/"+o+"/components/"+l+"/"+l+".css";en[c]||(en[c]=new Promise(((n,t)=>{ln(c).then((t=>{n(t)})).catch(t)}))),en[c].then((t=>{(function(n,t){return on[n]||(on[n]=new Promise(((n,e)=>{sn.exec(t)?t.replace(sn,((o,s)=>{en[s]||(en[s]=ln(s)),en[s].then((e=>{n(t.replace(o,e))})).catch(e)})):n(t)}))),on[n]})(c,t).then((t=>{let e=document.createElement("style");e.innerHTML=t,n.append(e)}))})).catch((n=>{console.log(`Request on resource ${n.url} ended with status: ${n.status} (${n.statusText})`)})).finally((()=>{t(e&&e.call(this))}))}));return t.shadowRoot?(n(t),c(t.shadowRoot)):new Promise(t.isConnected?n=>{let o=cn(t,t.parentElement);t.isSlotted=o;let s=new CustomEvent("styleExists",{bubbles:!0,cancelable:!0,composed:!0,detail:{callback:(t,s,l)=>{t?console.log(t):s?n(e&&e.call(this)):(o||(l=l.shadowRoot),c(l).then((()=>{n()})))},componentTag:o?"SLOTTED:"+l:l}});t.dispatchEvent(s)}:n=>{n(e&&e.call(this))})};return tn.appTheme?o(tn.appTheme):new Promise((n=>{let e=new CustomEvent("getThemeConfig",{bubbles:!0,cancelable:!0,composed:!0,detail:(t,e)=>{if(t)return console.log(t);tn.appTheme=e,o(tn.appTheme).then((()=>{n()}))}});t.dispatchEvent(e)}))}return e&&e.call(this)},t.disconnectedCallback=function(){const n=E(this);let t=n.tagName.toLowerCase();n.isSlotted&&(t="SLOTTED:"+t);let e=new CustomEvent("componentWasRemoved",{bubbles:!0,cancelable:!0,composed:!0,detail:{componentTag:t}});n.dispatchEvent(e),o&&o.call(this)}}}window.cardinal=window.cardinal||{},window.cardinal.customTheme=window.cardinal.customTheme||{THEME:void 0,IMPORTS:{},EVENTS:{GET_THEME:"getThemeConfig",ADD_STYLE:"CustomTheme:add-style",REMOVE_STYLE:"CustomTheme:remove-style"}};const rn=window.cardinal.customTheme;async function un(n){let t="";window&&(window.basePath?t=window.basePath:window.WebCardinal&&window.WebCardinal.basePath&&(t=window.WebCardinal.basePath));const e=n.tagName.toLowerCase(),o=n.mode||n.getAttribute("mode")||"default",s=`${t}/themes/${rn.THEME}/components/${e}/${e+("default"!==o?"."+o:"")+".css"}`;if(!rn.IMPORTS[s]){const[n,t]=await async function(n){try{const t=await function(n,t=null){let e=window.$$;return e&&e.SSAPP_CONTEXT&&e.SSAPP_CONTEXT.BASE_URL&&e.SSAPP_CONTEXT.SEED&&0!==n.indexOf(e.SSAPP_CONTEXT.BASE_URL)&&0!==n.indexOf("data:image")&&(n=`${e.SSAPP_CONTEXT.BASE_URL}${0===n.indexOf("/")?n.substr(1):n}`),fetch(n,t)}(n);return[!0,await t.text()]}catch(n){return console.log(n),[!1]}}(s);if(!n)return;rn.IMPORTS[s]=t}const l=rn.IMPORTS[s];n.shadowRoot?(function(n){const t=n.host,e={true:{},false:{}};t.addEventListener(rn.EVENTS.ADD_STYLE,(o=>{o.preventDefault(),o.stopImmediatePropagation();const{data:{tag:s,slotted:l},callback:c}=o.detail;e[l][s]||(c(void 0,l?{target:t}:{target:n}),e[l][s]=!0)})),t.addEventListener(rn.EVENTS.REMOVE_STYLE,(n=>{n.preventDefault(),n.stopImmediatePropagation();const{data:{tag:t,slotted:o}}=n.detail;e[o][t]=!1}))}(n.shadowRoot),nn(n.shadowRoot,l)):(n.isSlotted=function(n){for(;n.parentElement;){if(n.parentElement.shadowRoot)return n.parentElement.shadowRoot.host===n.parentNode;n=n.parentElement}return!1}(n),n.dispatchEvent(new CustomEvent(rn.EVENTS.ADD_STYLE,{bubbles:!0,cancelable:!0,composed:!0,detail:{data:{tag:e,slotted:n.isSlotted},callback:async(n,t)=>{if(n)return console.log(n);const{target:e}=t;nn(e,l)}}})))}function dn(){return n=>{const{componentWillLoad:t,disconnectedCallback:e}=n;n.componentWillLoad=async function(){const n=E(this);return(n||n.isConnected)&&(rn.THEME?await un(n):await async function(n,t){n.dispatchEvent(new CustomEvent(rn.EVENTS.GET_THEME,{bubbles:!0,cancelable:!0,composed:!0,detail:async(e,o)=>{if(e)return console.log(e);rn.THEME=o,await t(n)}}))}(n,un)),t&&t.call(this)},n.disconnectedCallback=async function(){const n=E(this);return n.dispatchEvent(new CustomEvent(rn.EVENTS.REMOVE_STYLE,{bubbles:!0,cancelable:!0,composed:!0,detail:{data:{tag:n.tagName.toLowerCase(),slotted:!!n.isSlotted}}})),e&&e.call(this)}}}window.cardinal=window.cardinal||{},window.cardinal.controllers=window.cardinal.controllers||{},window.cardinal.pendingControllerRequests=window.cardinal.pendingControllerRequests||{};export{an as C,dn as a,D as b,J as c,Z as d,Q as e,E as g,r as h,K as n,c as p,_ as r,X as s}