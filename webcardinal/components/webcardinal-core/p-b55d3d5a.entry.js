import{r as t,h as s,g as e,a as o,c as i}from"./p-afa78421.js";import{C as n}from"./p-2c4422ec.js";import{P as a,w as r,U as h}from"./p-306a0f7f.js";import{H as c}from"./p-dc68eded.js";import{p as l}from"./p-f8a2682a.js";import"./p-e506992e.js";import{A as u}from"./p-0572c496.js";import{m as p,a as d,s as g,b as f,c as w,d as m,e as b,f as y,g as P,h as j,i as O,j as v,k,l as T,n as R,o as L,p as U}from"./p-9b6a9315.js";import{p as H}from"./p-dc1a0b7a.js";const M=class{constructor(s){t(this,s),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const s=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!s)return this.previousMatch=this.match,this.match=p(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!d(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return e(this)}static get watchers(){return{location:["computeMatch"]}}};u.injectProps(M,["location","history","historyType","routeViewsUpdated"]),M.style="stencil-route.inactive{display:none}";const S=t=>"STENCIL-ROUTE"===t.tagName,C=class{constructor(s){t(this,s),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=o(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let s=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(S).map(((e,o)=>{const i=p(t.pathname,{path:e.url,exact:e.exact,strict:!0});return i&&-1===s&&(s=o),{el:e,match:i}})),-1===s)return;if(this.activeIndex===s)return void(this.subscribers[s].el.match=this.subscribers[s].match);this.activeIndex=s;const e=this.subscribers[this.activeIndex];this.scrollTopOffset&&(e.el.scrollTopOffset=this.scrollTopOffset),e.el.group=this.group,e.el.match=e.match,e.el.componentUpdated=t=>{this.queue.write((()=>{this.subscribers.forEach(((t,s)=>{if(t.el.componentUpdated=void 0,s===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"}))})),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return e(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};u.injectProps(C,["location","routeViewsUpdated"]);const E=(t,...s)=>{t||console.warn(...s)},x=()=>{let t,s=[];return{setPrompt:s=>(E(null==t,"A history supports only one prompt at a time"),t=s,()=>{t===s&&(t=null)}),confirmTransitionTo:(s,e,o,i)=>{if(null!=t){const n="function"==typeof t?t(s,e):t;"string"==typeof n?"function"==typeof o?o(n,i):(E(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==n)}else i(!0)},appendListener:t=>{let e=!0;const o=(...s)=>{e&&t(...s)};return s.push(o),()=>{e=!1,s=s.filter((t=>t!==o))}},notifyListeners:(...t)=>{s.forEach((s=>s(...t)))}}},A=(t,s="scrollPositions")=>{let e=new Map;const o=(s,o)=>{if(e.set(s,o),g(t,"sessionStorage")){const s=[];e.forEach(((t,e)=>{s.push([e,t])})),t.sessionStorage.setItem("scrollPositions",JSON.stringify(s))}};if(g(t,"sessionStorage")){const o=t.sessionStorage.getItem(s);e=o?new Map(JSON.parse(o)):e}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:o,get:t=>e.get(t),has:t=>e.has(t),capture:s=>{o(s,[t.scrollX,t.scrollY])}}},$={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+L(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:L,decodePath:b},slash:{encodePath:b,decodePath:b}},_=(t,s)=>{const e=0==t.pathname.indexOf(s)?"/"+t.pathname.slice(s.length):t.pathname;return Object.assign({},t,{pathname:e})},B={browser:(t,s={})=>{let e=!1;const o=t.history,i=t.location,n=t.navigator,a=f(t),r=!w(n),h=A(t),c=null!=s.forceRefresh&&s.forceRefresh,l=null!=s.getUserConfirmation?s.getUserConfirmation:k,u=null!=s.keyLength?s.keyLength:6,p=s.basename?m(b(s.basename)):"",d=()=>{try{return t.history.state||{}}catch(t){return{}}},g=t=>{t=t||{};const{key:s,state:e}=t,{pathname:o,search:n,hash:a}=i;let r=o+n+a;return E(!p||j(r,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+p+'".'),p&&(r=O(r,p)),y(r,e,s||P(u))},R=x(),L=t=>{h.capture(V.location.key),Object.assign(V,t),V.location.scrollPosition=h.get(V.location.key),V.length=o.length,R.notifyListeners(V.location,V.action)},U=t=>{T(n,t)||M(g(t.state))},H=()=>{M(g(d()))},M=t=>{if(e)e=!1,L();else{const s="POP";R.confirmTransitionTo(t,s,l,(e=>{e?L({action:s,location:t}):S(t)}))}},S=t=>{let s=$.indexOf(V.location.key),o=$.indexOf(t.key);-1===s&&(s=0),-1===o&&(o=0);const i=s-o;i&&(e=!0,Y(i))},C=g(d());let $=[C.key],_=0,B=!1;const F=t=>p+v(t),Y=t=>{o.go(t)},N=s=>{_+=s,1===_?(t.addEventListener("popstate",U),r&&t.addEventListener("hashchange",H)):0===_&&(t.removeEventListener("popstate",U),r&&t.removeEventListener("hashchange",H))},V={length:o.length,action:"POP",location:C,createHref:F,push:(t,s)=>{E(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const e="PUSH",n=y(t,s,P(u),V.location);R.confirmTransitionTo(n,e,l,(t=>{if(!t)return;const s=F(n),{key:r,state:h}=n;if(a)if(o.pushState({key:r,state:h},"",s),c)i.href=s;else{const t=$.indexOf(V.location.key),s=$.slice(0,-1===t?0:t+1);s.push(n.key),$=s,L({action:e,location:n})}else E(void 0===h,"Browser history cannot push state in browsers that do not support HTML5 history"),i.href=s}))},replace:(t,s)=>{E(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const e="REPLACE",n=y(t,s,P(u),V.location);R.confirmTransitionTo(n,e,l,(t=>{if(!t)return;const s=F(n),{key:r,state:h}=n;if(a)if(o.replaceState({key:r,state:h},"",s),c)i.replace(s);else{const t=$.indexOf(V.location.key);-1!==t&&($[t]=n.key),L({action:e,location:n})}else E(void 0===h,"Browser history cannot replace state in browsers that do not support HTML5 history"),i.replace(s)}))},go:Y,goBack:()=>Y(-1),goForward:()=>Y(1),block:(t="")=>{const s=R.setPrompt(t);return B||(N(1),B=!0),()=>(B&&(B=!1,N(-1)),s())},listen:t=>{const s=R.appendListener(t);return N(1),()=>{N(-1),s()}},win:t};return V},hash:(t,s={})=>{let e=!1,o=null,i=0,n=!1;const a=t.location,r=t.history,h=R(t.navigator),c=null!=s.keyLength?s.keyLength:6,{getUserConfirmation:l=k,hashType:u="slash"}=s,p=s.basename?m(b(s.basename)):"",{encodePath:d,decodePath:g}=$[u],f=()=>{const t=a.href,s=t.indexOf("#");return-1===s?"":t.substring(s+1)},w=t=>{const s=a.href.indexOf("#");a.replace(a.href.slice(0,s>=0?s:0)+"#"+t)},T=()=>{let t=g(f());return E(!p||j(t,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+p+'".'),p&&(t=O(t,p)),y(t,void 0,P(c))},L=x(),H=t=>{Object.assign(V,t),V.length=r.length,L.notifyListeners(V.location,V.action)},M=()=>{const t=f(),s=d(t);if(t!==s)w(s);else{const t=T(),s=V.location;if(!e&&U(s,t))return;if(o===v(t))return;o=null,S(t)}},S=t=>{if(e)e=!1,H();else{const s="POP";L.confirmTransitionTo(t,s,l,(e=>{e?H({action:s,location:t}):C(t)}))}},C=t=>{let s=F.lastIndexOf(v(V.location)),o=F.lastIndexOf(v(t));-1===s&&(s=0),-1===o&&(o=0);const i=s-o;i&&(e=!0,Y(i))},A=f(),_=d(A);A!==_&&w(_);const B=T();let F=[v(B)];const Y=t=>{E(h,"Hash history go(n) causes a full page reload in this browser"),r.go(t)},N=(t,s)=>{i+=s,1===i?t.addEventListener("hashchange",M):0===i&&t.removeEventListener("hashchange",M)},V={length:r.length,action:"POP",location:B,createHref:t=>"#"+d(p+v(t)),push:(t,s)=>{E(void 0===s,"Hash history cannot push state; it is ignored");const e="PUSH",i=y(t,void 0,P(c),V.location);L.confirmTransitionTo(i,e,l,(t=>{if(!t)return;const s=v(i),n=d(p+s);if(f()!==n){o=s,(t=>{a.hash=t})(n);const t=F.lastIndexOf(v(V.location)),r=F.slice(0,-1===t?0:t+1);r.push(s),F=r,H({action:e,location:i})}else E(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),H()}))},replace:(t,s)=>{E(void 0===s,"Hash history cannot replace state; it is ignored");const e="REPLACE",i=y(t,void 0,P(c),V.location);L.confirmTransitionTo(i,e,l,(t=>{if(!t)return;const s=v(i),n=d(p+s);f()!==n&&(o=s,w(n));const a=F.indexOf(v(V.location));-1!==a&&(F[a]=s),H({action:e,location:i})}))},go:Y,goBack:()=>Y(-1),goForward:()=>Y(1),block:(s="")=>{const e=L.setPrompt(s);return n||(N(t,1),n=!0),()=>(n&&(n=!1,N(t,-1)),e())},listen:s=>{const e=L.appendListener(s);return N(t,1),()=>{N(t,-1),e()}},win:t};return V}},F=class{constructor(s){t(this,s),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const s=this.history.win.document.getElementById(t.scrollToId);if(s)return s.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=o(this,"isServer"),this.queue=o(this,"queue")}componentWillLoad(){this.history=B[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((t=>{t=_(t,this.root),this.location=t})),this.location=_(this.history.location,this.root)}scrollTo(t){const s=this.history;if(null!=t&&!this.isServer&&s)return"POP"===s.action&&Array.isArray(s.location.scrollPosition)?this.queue.write((()=>{s&&s.location&&Array.isArray(s.location.scrollPosition)&&s.win.scrollTo(s.location.scrollPosition[0],s.location.scrollPosition[1])})):this.queue.write((()=>{s.win.scrollTo(0,t)}))}render(){if(this.location&&this.history)return s(u.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return e(this)}};const{join:Y,trimEnd:N}=h;function V(){return window.$$&&window.$$.SSAPP_CONTEXT&&window.$$.SSAPP_CONTEXT.BASE_URL}const W=class{constructor(e){t(this,e),this.getRoutingConfigEvent=i(this,"webcardinal:config:getRouting",7),this.landingPage=null,this.routes=[],this.basePath="",this.tags={},this.content=[],this.mapping={},this._renderRoute=({path:t,src:e,loader:o,skin:i,tag:n})=>{const a={url:t,exact:!0,component:"webc-app-loader",componentProps:{src:e,loader:o,skin:i,basePath:this.basePath,saveState:!0}};if(n&&(a.componentProps.tag=n),"/"===a.url&&V()){const t=Object.assign(Object.assign({},a),{url:window.location.pathname,componentProps:{url:"/"}});t.component="webc-app-redirect",this.content.push(s("stencil-route",Object.assign({"data-path":t.url,"data-redirect":""},t)))}return s("stencil-route",Object.assign({"data-path":a.url,"data-src":e},a))},this._renderRoutes=(t=[],{path:s,src:e}={path:"",src:""},o=this._renderRoute)=>Array.isArray(t)&&0!==t.length?t.map((t=>{const i={path:Y("",s,t.path).pathname,src:Y("",e,t.src).pathname,skin:"none"};if(t.children)return this._renderRoutes(t.children,i);{""===i.path&&(i.path="/"),i.src=t.src.startsWith("http")?t.src:"."+Y(a,i.src).pathname;const s=Y(this.basePath,i.path).pathname;return this.mapping[s]=i.src.replace(this.pagesPathRegExp,""),t.tag&&(this.tags[t.tag]=i.path,i.tag=t.tag),t.loader&&(i.loader=t.loader),o(i)}})):null,this._renderFallback=t=>{if(!t||!t.src)return null;const e="."+Y(a,t.src).pathname,o={component:"webc-app-loader",componentProps:{src:e,loader:t.loader||"default",skin:"none",basePath:this.basePath,saveState:!0,isFallbackPage:!0}};return t.tag&&(o.componentProps.tag=t.tag),s("stencil-route",Object.assign({"data-src":e},o))},this.manageLandingPage=()=>{if(window&&window.frameElement&&window.frameElement.hasAttribute("landing-page")&&(this.landingPage=window.frameElement.getAttribute("landing-page")),this.landingPage){if(V()){const t=new URL(window.$$.SSAPP_CONTEXT.BASE_URL).pathname;this.landingPage=`${t}${0===this.landingPage.indexOf("/")?this.landingPage.substring(1):this.landingPage}`}const t={url:window.location.pathname,exact:!0,component:"webc-app-redirect",componentProps:{url:this.landingPage}};this.content.push(s("stencil-route",Object.assign({"data-path":t.url,"data-redirect":""},t)))}}}manageHooks(){if(!window.WebCardinal.hooks)return;const t=window.WebCardinal.hooks;for(const s of[r.BEFORE_PAGE,r.AFTER_PAGE])for(const e of Object.keys(t[s]||[]))this.tags[e]||(console.warn([`"addHook(tag: string, when: whenType, hook: Function)": tag "${e}" does not belong to any page`,"The hook can not be called for any page, the hook is removed!"].join("\n")),delete t[e])}async componentWillLoad(){if(this.host.isConnected)try{const t=await l(this.getRoutingConfigEvent);this.routes=t.pages,this.fallbackPage=t.pagesFallback,this.basePath=N(new URL(t.baseURL).pathname),this.pagesPathRegExp=new RegExp(`^(${a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`),this.manageLandingPage(),this.content.push(this._renderRoutes(this.routes),this._renderFallback(this.fallbackPage)),this.manageHooks(),this.listeners=new n(this.host,{tags:this.tags,routing:{basePath:this.basePath,mapping:this.mapping},model:H({}),translationModel:H({}),chain:""});const{getModel:s,getTranslationModel:e,getTags:o,getRouting:i,getParentChain:r}=this.listeners;null==s||s.add(),null==e||e.add(),null==o||o.add(),null==i||i.add(),null==r||r.add()}catch(t){console.error(t)}}async connectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:s,getTags:e,getRouting:o,getParentChain:i}=this.listeners;null==t||t.add(),null==s||s.add(),null==e||e.add(),null==o||o.add(),null==i||i.add()}}async disconnectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:s,getTags:e,getRouting:o,getParentChain:i}=this.listeners;null==t||t.remove(),null==s||s.remove(),null==e||e.remove(),null==o||o.remove(),null==i||i.remove()}}render(){return s("stencil-router",{"data-root":this.basePath+"/",root:this.basePath+"/"},s("stencil-route-switch",{scrollTopOffset:0},this.content))}};!function(t,s,e,o){var i,n=arguments.length,a=n<3?s:null===o?o=Object.getOwnPropertyDescriptor(s,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,s,e,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(n<3?i(a):n>3?i(s,e,a):i(s,e))||a);n>3&&a&&Object.defineProperty(s,e,a)}([c()],W.prototype,"host",void 0);export{M as stencil_route,C as stencil_route_switch,F as stencil_router,W as webc_app_router}