import{r as t,c as e,h as n}from"./p-afa78421.js";import{e as o,h as s,i,w as a,v as r,C as c,d as l,b as d,c as h,E as u,a as f}from"./p-5ba60a84.js";import{z as p,U as w,D as m,N as b,H as g,O as y,G as C,Q as v,C as k,V as j,d as T,e as O,A as P,x,y as E,L,B as R,E as $}from"./p-bc85da7f.js";import{H as S}from"./p-dc68eded.js";import{a as A,p as F}from"./p-f8a2682a.js";import"./p-e506992e.js";import{B as W}from"./p-c9ce3e7b.js";import{C as H,p as M,P as B}from"./p-86bf4467.js";class _ extends H{constructor(...t){super(...t)}showModal(t,e,n,o,s={}){return this.createWebcModal({...s,modalTitle:e=e||"Info",modalContent:t,onConfirm:n,onClose:o})}showModalFromTemplate(t,e,n,o={}){return this.createWebcModal({...o,template:t,onConfirm:e,onClose:n})}showErrorModal(t,e,n,o,s={}){let i;return e=e||"Error",i=t instanceof Error?t.message:"object"==typeof t?t.toString():t,this.createWebcModal({disableClosing:!0,showCancelButton:!1,...s,modalTitle:e,modalContent:i,onConfirm:n,onClose:o})}showErrorModalAndRedirect(t,e,n,o,s={}){let i;e=e||"Error",i=t instanceof Error?t.message:"object"==typeof t?t.toString():t,o||(o=5e3),this.createWebcModal({disableExpanding:!0,disableClosing:!0,disableFooter:!0,...s,modalTitle:e,modalContent:i}),setTimeout((()=>{if(this.hideModal(),"string"==typeof n)this.navigateToUrl(n);else if("object"==typeof n){const{href:t,tag:e,state:o}=n;e?this.navigateToPageTag(e,o):this.navigateToUrl(t,o)}}),o)}createWebcModal({template:t,controller:e,model:n,translationModel:o,modalTitle:s,modalDescription:i,modalContent:a,modalFooter:r,confirmButtonText:c,cancelButtonText:l,centered:d,expanded:h,disableCancelButton:u,disableClosing:f,disableBackdropClosing:p,disableExpanding:w,disableFooter:m,autoShow:b,onConfirm:g,onClose:y,...C}){y||(y=g),n&&(n=M(n));const v=this.createAndAddElement("webc-modal",{template:t,controller:e,model:n,translationModel:o,modalTitle:s,modalDescription:i,modalContent:a,modalFooter:r,confirmButtonText:c,cancelButtonText:l,centered:d,expanded:h,disableCancelButton:u,disableClosing:f,disableBackdropClosing:p,disableExpanding:w,disableFooter:m,autoShow:b,...C});return v.addEventListener("confirmed",(t=>{g&&g(t),v.remove()})),v.addEventListener("closed",(t=>{y&&y(t),v.remove()})),v}hideModal(){this.element.hasAttribute("data-modal")?this.element.parentNode.host.remove():this.element.querySelectorAll("webc-modal").forEach((t=>t.remove()))}}const N=[{eventName:"ionChange",components:{"ion-checkbox":{chainTriggered:"checked"},"ion-toggle":{chainTriggered:"checked"}}}],U={Controller:H,WebcController:_,WebcIonicController:class extends _{constructor(...t){super(...t);let e=t[0];N.forEach((t=>{e.addEventListener(t.eventName,(e=>{let n,o=e.target,s=e.target.value,i=o.tagName.toLowerCase(),a=t.components[i];if(void 0===a?a="value":(a=t.components[i].chainTriggered,void 0!==o[a]&&(s=o[a])),o.hasAttribute("data-view-model")){n=o.getAttribute("data-view-model");let t=n.split("@").join("");"@"!==a&&(t=`${t}.${a}`),this.model.setChainValue(t,s)}else o.webcModelChains&&o.webcModelChains[a]&&this.model.setChainValue(o.webcModelChains[a],e.detail[a])}))}))}}},D={DataSource:class{constructor(t){t||(t={}),"number"!=typeof t.recordsNumber&&(t.recordsNumber=void 0),"number"!=typeof t.pageSize&&(t.pageSize=20),"number"!=typeof t.pageSizeDelta&&(t.pageSizeDelta=2),this.options=t}setRecordsNumber(t){"function"==typeof this.getElement?this.getElement().dataSize=t:this.options.recordsNumber=t}getRecordsNumber(){return"function"!=typeof this.getElement?this.options.recordsNumber:this.getElement().dataSize}setPageSize(t){"function"==typeof this.getElement?this.getElement().pageSize=t:this.options.pageSize=t}getPageSize(){return"function"!=typeof this.getElement?this.options.pageSize:this.getElement().pageSize}getCurrentPageIndex(){return this.getElement().curentPageIndex}getLastPageIndex(){return this.getElement().lastPageIndex}async getPageDataAsync(t,e){return[]}async clearPageDataAsync(){const t=this.getElement();await t.fillCurrentPage([])}async goToNextPage(){await this.goToPageByIndex(this.getCurrentPageIndex()+1)}async goToPreviousPage(){await this.goToPageByIndex(this.getCurrentPageIndex()-1)}async goToPageByIndex(t=0){t>=0&&await this._renderPageAsync(t)}_init=t=>(this.getElement=t,this.getElement().pageSizeDelta=this.options.pageSizeDelta,this.setPageSize(this.options.pageSize),this.setRecordsNumber(this.options.recordsNumber),B.setModel({data:[]}));_renderPageAsync=async(t=0)=>{const e=this.getElement(),{pageSize:n,dataSize:o}=e,s=n*t,i=o?Math.min(o-s,n):n;await e.clearCurrentPage(),e.curentPageIndex=t;const a=await this.getPageDataAsync(s,i);await e.fillCurrentPage(a)}}},I={identity:{name:"WebCardinal",email:"webcardinal@axiologic.net",avatar:""},pagesFallback:{name:"404"},pages:[{name:"Homepage",path:"/",src:"home.html"}],logLevel:"error",version:"1.0.0",docsSource:"github",translations:!0,skin:"default"};function z(){return{setSkin:async(t="default")=>{if(t&&"string"==typeof t||console.warn(['Function "setSkin(skin: string)" must receive a string as parameter!'].join("\n")),this.isConfigLoaded)return window.WebCardinal.state.skin=t,await window.WebCardinal.root.componentOnReady(),void(window.WebCardinal.state.page.loader.skin=t);this.config.skin=t},addControllers:t=>{if(this.isConfigLoaded)console.warn(['Function "addControllers(controllers: object)" must be called only in preload stage of WebCardinal!',"The configuration was already loaded!"].join("\n"));else{"object"==typeof t||Array.isArray(t)||console.warn(['Function "addControllers(controllers: object)" must receive an object as parameter!','Form of parameter: "{ <CONTROLLER_NAME>: <CONTROLLER_CLASS>, ... }"'].join("\n"));for(let n of Object.keys(t)){const o=t[n];e(o)?console.warn([`In function "addControllers(controllers: object)", "${n}" is not a valid WebCardinal Controller!`,"It will be ignored!"].join("\n")):this.injectedControllers[n]=o}}function e(t){const e=Object.getOwnPropertyNames(t);return!e.includes("prototype")||e.includes("arguments")}},addHook:(t,e,n)=>{let o=Object.values(p);if(!o.includes(t))return void console.error([`Function "addHook": "${t}" is not a valid HookType (values: "${o.join('", "')}")`].join("\n"));let s=this.injectedHooks;this.isConfigLoaded&&(s=window.WebCardinal.hooks),"function"!=typeof e?e&&"string"==typeof e&&"function"==typeof n?(s[t]||(s[t]={}),s[t][e]=n):console.error(['Function "addHook" has the following interface:','"addHook(type: HookType, hook: Function)"','"addHook(type: HookType, tag: string, hook: Function)"'].join("\n")):s[t]=n=e},setConfig:t=>{this.isConfigLoaded?console.warn(['Function "setConfig(config: object)" must be called only in preload stage of WebCardinal!',"The configuration was already loaded!"].join("\n")):this.config=t},getConfig:()=>{if(!this.isConfigLoaded)return this.config;console.warn(['Function "getConfig()" must be called only in preload stage of WebCardinal!',"The configuration was already loaded!"].join("\n"))},navigateToUrl:(t,e)=>{const{WebCardinal:n}=window;n.history.push(t,e)},navigateToPageTag:async(t,e)=>new Promise(((n,o)=>{const{WebCardinal:s}=window;s.root.querySelector("webc-app-router").dispatchEvent(new CustomEvent("webcardinal:tags:get",{detail:{tag:t,callback:(t,i)=>{if(t)return console.error(t),o(t);s.history.push(i,e),n(i)}}}))}))}}async function G(t){if(t){t.endsWith(".js")||(t+=".js");try{await import(w.join(this.basePath,t).pathname),console.log("[WebCardinal] Preload middleware was used!"),"function"==typeof this.injectedHooks[p.BEFORE_APP]&&await this.injectedHooks[p.BEFORE_APP]()}catch(t){console.error(t)}}}const J=new Set,K={},{join:Q}=w;async function V(t){return new Promise((e=>setTimeout(e,t)))}const{join:q}=w;let X,Y;function Z(t){const e=Object.assign(document.createElement("link"),{rel:"stylesheet",href:q(this.basePath,Y,P,"skin.css").pathname,id:E});return t.insertAdjacentElement("afterend",e),new Promise((t=>{e.addEventListener("load",(()=>t())),e.addEventListener("error",(()=>{console.error(`"skin.css" of "${X}" skin must be present in order to style webc-<component>s via Custom Properties!`),t()}))}))}function tt(t){const e=Object.assign(document.createElement("link"),{rel:"stylesheet",href:q(this.basePath,P,"skin.css").pathname,id:x});return t.insertAdjacentElement("afterend",e),new Promise((t=>{e.addEventListener("load",(async()=>("default"===X||await Z.bind(this)(e),t()))),e.addEventListener("error",(async()=>(console.error('"skin.css" of "default" skin must be present in order to style webc-<component>s via Custom Properties!'),"default"===X||await Z.bind(this)(e),t())))}))}async function et(){document.body.querySelector('link[href$="webcardinal.css"]')&&document.body.querySelector('script[src$="webcardinal.js"]')&&(console.error(["WebCardinal distribution must be added in <head> of index.html","In the case of current application WebCardinal is added in the <body>","As a result skin.css can not be applied!"].join("\n")),1)||(X=y(),Y=v(),await tt.bind(this)(function(){let t=document.head.querySelector('link[href$="webcardinal.css"]');return t||(console.error(["WebCardinal stylesheet not found!",'Add <link rel="stylesheet" href="webcardinal/webcardinal.css"> in your "index.html"'].join("\n")),t=document.head.querySelector('script[src$="webcardinal.js"]')),t}()))}class nt{constructor(t){this._trimPathname=t=>(t.startsWith("/")&&(t=t.slice(1)),t.endsWith("/")&&(t=t.slice(0,-1)),t),this.baseURL=this._initBaseURL(),this.basePath=this._initBasePath(),this.configURL=this._initResourceURL("webcardinal.json"),this.config={},this.injectedControllers={},this.injectedHooks={},this.pendingRequests=[],this.isConfigLoaded=!1,t.addEventListener(l,this._registerListener("routing")),t.addEventListener(d,this._registerListener("identity")),t.addEventListener(h,this._registerListener("logLevel")),t.addEventListener(u,this._registerListener("coreType")),t.addEventListener(f,this._registerListener("docsSource")),t.addEventListener("getThemeConfig",this._registerListener("theme"))}_initBaseURL(){const t=(()=>this._trimPathname(window.location.origin))(),e=(()=>{const t=document.querySelector("base");if(!t)return null;const e=t.getAttribute("href");return e&&"/"!==e?this._trimPathname(e):null})();return e?new URL(e,t):new URL(t)}_initBasePath(){const t=this._trimPathname(this.baseURL.pathname);return 0!==t.length?"/"+t:t}_initResourceURL(t){return new URL(this._trimPathname(this.baseURL.href)+"/"+this._trimPathname(t))}async _readConfiguration(){try{const t=await fetch(this.configURL.href);return[null,await t.json()]}catch(t){return[t]}}_prepareConfiguration(t){const e=e=>t[e]?t[e]:I[e],n=(t=this.baseURL.href,o=e("pages"))=>{const s=[];for(const e of o){const o={};if("string"!=typeof e.name){console.warn('An invalid page detected (in "webcardinal.json")',e);continue}if(e.name.includes("/")){console.warn(`Page name must not include '/' (in "${e.name}")`);continue}o.name=e.name;const i=o.name.replace(/\s+/g,"-").toLowerCase();if(o.indexed="boolean"!=typeof e.indexed||e.indexed,"string"==typeof e.path)o.path=e.path;else{const e="/"+i;try{o.path="."+new URL(e,t).pathname}catch(t){console.error(`Pathname "${e}" for "${o.name} can not be converted into a URL!\n`,t);continue}}const a=Array.isArray(e.children)&&e.children.length>0;if("string"==typeof e.src)o.src=e.src;else{let e="/"+i;a||(e+=".html");try{o.src="."+new URL(e,t).pathname}catch(t){console.error(`Source "${e}" for "${o.name} can not be converted into a URL!\n`,t);continue}}"string"==typeof e.tag&&(o.tag=e.tag),"string"==typeof e.loader&&(o.loader=e.loader),a&&(o.children=n(t,e.children)),s.push(o)}return s};e("skins")&&console.warn(['"skins" is deprecated in webcardinal.json, replace with "skin"!','Only the preferred / active skin must be set via "skin" keyword, otherwise the "default" is set','example: "skin": "advanced"'].join("\n"));const o=!0===e("translations")||("boolean"==typeof e("enableTranslations")&&console.warn('"enableTranslations" is deprecated in webcardinal.json, replace with "translations"!'),!0===e("enableTranslations")),s=(()=>{const t=e("skin");return"string"!=typeof t||0===t.length?(console.warn('Type of "skin" must be a non-empty string!'),"default"):t})();return{identity:(()=>{const t=e("identity"),n={};for(const e of Object.keys(I.identity))n[e]=t[e]||I.identity[e];return n})(),routing:{baseURL:(()=>this._trimPathname(this.baseURL.href))(),pages:n(),pagesFallback:(()=>{const t=n(this.baseURL.href,[e("pagesFallback")])[0],{name:o,src:s,loader:i,tag:a}=t,r={name:o,src:s,loader:i,tag:a};return Object.keys(r).forEach((t=>void 0===r[t]&&delete r[t])),r})()},logLevel:(()=>{const t=e("logLevel");return Object.values(L).includes(t)?t:I.logLevel})(),docsSource:e("docsSource"),theme:e("theme"),version:e("version"),coreType:"webcardinal",translations:o,skin:s}}_provideConfiguration(t,e){if("function"==typeof t&&void 0===e&&(e=t,t=void 0),"function"==typeof e)return void 0===t?e(void 0,this.config):this.config.hasOwnProperty(t)?e(void 0,this.config[t]):e(`Config "${t}" does not exists!`)}_registerListener(t){return e=>{let n;if(e.preventDefault(),e.stopImmediatePropagation(),"function"==typeof e.detail)n=e.detail;else{if(!e.detail||"function"!=typeof e.detail.callback)return;n=e.detail.callback}if(this.isConfigLoaded)return this._provideConfiguration(t,n);this.pendingRequests.push({configKey:t,callback:n})}}async process(t){const[e,n]=await this._readConfiguration();if(e)console.error(e);else{if(this.config=this._prepareConfiguration(n),window.WebCardinal={controllers:U,hooks:this.injectedHooks,preload:z.bind(this)(),components:Object.assign(Object.assign({},{define:(t,...e)=>{let n,l={templatePath:`${t=t.toLowerCase()}/${t}`,shadow:!1};"string"==typeof e[0]&&(l.templatePath=e[0],e.shift()),"object"==typeof e[0]&&(l=Object.assign(Object.assign({},l),e[0]||{})),customElements.define(t,class extends HTMLElement{constructor(){super(),(l.shadow||this.hasAttribute("shadow"))&&this.attachShadow({mode:"open"})}replaceChains(t){return(t=>(Array.from(this.attributes).forEach((e=>{if(e.nodeName===j)return;const n=new RegExp(`{{\\s*[${T}${O}](${e.nodeName})\\s*}}`,"gm");t=[T,O].includes(e.nodeValue[0])?t.replace(n,`{{ ${e.nodeValue} }}`):t.replace(n,e.nodeValue)})),t))((t=>{let e;try{e=(new DOMParser).parseFromString(t,"text/html")}catch(t){console.error(t)}if(!e||!e.body)return;const n=t=>{for(const e of Array.from(t.attributes))if(e.nodeValue.startsWith(T)||e.nodeValue.startsWith(O)){const n=e.nodeValue.slice(1);this.hasAttribute(n)&&t.setAttribute(e.nodeName,this.getAttribute(n))}for(const e of Array.from(t.children))n(e)};return n(e.body),[e.head.innerHTML,e.body.innerHTML].join("")})(t))}removeListeners(){this.listeners&&(this.listeners.getModel.remove(),this.listeners.getTranslationModel.remove(),this.listeners.getParentChain.remove())}async connectedCallback(){if(this.setAttribute(m,""),!n)try{n=await async function(t){const{basePath:e}=window.WebCardinal,n=y();if(K[n]||(K[n]={}),K[n][t])return K[n][t];let[o,s]=await C(Q(e,v(),k,t).pathname);return o?"default"===n?"":(K.default||(K.default={}),K.default[t]?K.default[t]:([o,s]=await C(Q(e,k,t).pathname),o?"":(K.default[t]=s,s))):(K[n][t]=s,s)}(l.templatePath)}catch(t){return void console.error(`Error while loading template for "${this.tagName.toLowerCase()}" from path "${l.templatePath}"`,t)}try{this.model=await A(o,this),this.translationModel=await A(s,this),this.parentChain=await A(i,this)}catch(t){console.error("Error while getting models for BindingService",t)}const t=this.replaceChains(n),e=this.model,d=this.translationModel,h=a(this.parentChain,r(this)),u=h?h.slice(1):null,f=b();this.shadowRoot?(this.hasAttribute("shadow")||this.setAttribute("shadow",""),this.initialHTML||(this.initialHTML=this.innerHTML),this.shadowRoot.innerHTML=t,this.innerHTML=this.initialHTML,W.bindChildNodes(this.shadowRoot,{model:e,translationModel:d,recursive:!0,chainPrefix:u,enableTranslations:f})):this.innerHTML=t,W.bindChildNodes(this,{model:e,translationModel:d,recursive:!0,chainPrefix:u,enableTranslations:f}),this.removeListeners(),this.listeners=new c(this,{model:e,translationModel:d,chain:u}),this.listeners.getModel.add(),this.listeners.getTranslationModel.add(),this.listeners.getParentChain.add(),this.removeAttribute(m),this.classList.add(g)}disconnectedCallback(){this.classList.remove(g),this.removeListeners()}async getModel(){return this.model}async getTranslationModel(){return this.translationModel}async getParentChain(){return this.parentChain}async componentOnReady(){for(;!this.classList.contains(g);)await V(10)}}),J.add(t)}}),{tags:J})},await G.bind(this)(t),console.log("[WebCardinal] Config:",this.config),this.isConfigLoaded=!0,window.WebCardinal=Object.assign(Object.assign({},window.WebCardinal),{basePath:this.basePath,controllers:Object.assign(Object.assign({},this.injectedControllers),U),dataSources:D,state:{translations:this.config.translations,skin:this.config.skin}}),window.localStorage){const t=localStorage.getItem("webcardinal.skin");t&&(window.WebCardinal.state.skin=t);const e=localStorage.getItem("webcardinal.translations");e&&(window.WebCardinal.state.translations="true"===e)}for(await et.bind(this)();this.pendingRequests.length;){const t=this.pendingRequests.pop();this._provideConfiguration(t.configKey,t.callback)}}}}function ot(){window.onerror=function(t,e,n,o,s){let i;return i=("string"==typeof t?t.toLowerCase():"").indexOf("script error")>-1?{message:"script error",isScriptError:!0}:{message:"string"==typeof t?t:JSON.stringify(t),url:e,lineNo:n,columnNo:o,error:s},window.dispatchEvent(new CustomEvent("webcAppError",{detail:i})),!1};const t=console.error;console.error=function(...e){return window.dispatchEvent(new CustomEvent("webcAppError",{detail:{message:e[0],isScriptError:!0}})),t.apply(console,e)}}const st=class{constructor(n){t(this,n),this.getLogLevelEvent=e(this,"webcardinal:config:getLogLevel",7),this.loader="webc-spinner",this.disableHeader=!1,this.disableLoaderHiding=!1,this.callHook=async t=>{if(!window.WebCardinal.hooks)return;const e=window.WebCardinal.hooks;"function"==typeof e[t]&&await e[t]()}}disableHeaderHandler(t){const e=this.host.querySelector("webc-app-menu");if(t){if(e)return e.remove(),this.host.style.setProperty(R," none"),this.host.setAttribute("layout","container"),void(this.menuRef=e)}else this.menuRef&&(this.host.style.setProperty(R," "+this.menuRef.mode),this.host.setAttribute("layout",this.menuRef.mode),this.host.prepend(this.menuRef))}async componentWillLoad(){if(!this.host.isConnected)return;this.host.parentElement&&this.loader&&(this._loaderElement=document.createElement(this.loader),this.host.parentElement.appendChild(this._loaderElement));const t=new nt(this.host);await t.process(this.preload),window.WebCardinal.root=this.host,window.WebCardinal.loader=this._loaderElement,0===this.host.children.length?await this.renderDefault():await this.registerAppErrorComponentAndListeners()}async componentDidLoad(){this._loaderElement&&(this.disableLoaderHiding||(this._loaderElement.hidden=!0)),await this.callHook(p.AFTER_APP)}renderOnlyContainer(){this.host.setAttribute("layout","container"),this.host.append(document.createElement("webc-app-container"))}async renderDefault(){const t=window.getComputedStyle(this.host),e=t.getPropertyValue(R).trim().toLowerCase();if(await this.registerAppErrorComponentAndListeners(),this.disableHeader)this.renderOnlyContainer();else switch(e){case"vertical":case"mobile":case"horizontal":{const n=t.getPropertyValue($).trim(),o=window.matchMedia(`(max-width: ${n})`),s=e,i="mobile",a={menu:Object.assign(document.createElement("webc-app-menu"),{mode:e}),container:document.createElement("webc-app-container")},r={menu:Object.assign(document.createElement("webc-app-menu"),{mode:i})};o.matches?(this.host.setAttribute("layout",i),this.host.append(r.menu,a.container)):(this.host.setAttribute("layout",s),this.host.append(a.menu,a.container)),s!==i&&o.addEventListener("change",(t=>{t.matches?(this.menuRef=r.menu,this.disableHeader||(this.host.style.setProperty(R," "+i),this.host.setAttribute("layout",i),a.menu.remove(),this.host.insertBefore(r.menu,a.container))):(this.menuRef=a.menu,this.disableHeader||(this.host.style.setProperty(R," "+e),this.host.setAttribute("layout",e),r.menu.remove(),this.host.insertBefore(a.menu,a.container)))}));break}case"none":default:this.renderOnlyContainer()}}async registerAppErrorComponentAndListeners(){this.host.appendChild(document.createElement("webc-app-error-toast"));try{!function(t){const{ERROR:e,WARN:n}=L;switch(t){case e:return void ot();case n:ot(),function(){const t=console.warn;console.warn=function(...e){return window.dispatchEvent(new CustomEvent("webcAppWarning",{detail:{}})),t.apply(console,e)}}()}}(await F(this.getLogLevelEvent))}catch(t){console.error(t)}}render(){return n("slot",null)}static get watchers(){return{disableHeader:["disableHeaderHandler"]}}};(function(t,e,n,o){var s,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(i<3?s(a):i>3?s(e,n,a):s(e,n))||a);i>3&&a&&Object.defineProperty(e,n,a)})([S()],st.prototype,"host",void 0),st.style={default:":host{display:block;width:100%;height:100%}:host([layout=vertical]){display:grid;grid-template-columns:auto 1fr}:host([layout=mobile]),:host([layout=horizontal]){display:grid;grid-template-rows:auto 1fr}"};export{st as webc_app_root}