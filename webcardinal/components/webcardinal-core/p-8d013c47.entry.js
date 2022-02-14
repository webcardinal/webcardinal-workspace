import{r as t,c as s,h as i}from"./p-62bd51c0.js";import{v as a,w as e,C as n}from"./p-ad3412da.js";import{O as h,G as o,Q as r,T as c,U as l,N as d}from"./p-064ec144.js";import{H as p}from"./p-3e8e1274.js";import"./p-8d1ed174.js";import{p as m}from"./p-f8a2682a.js";import"./p-e506992e.js";import{B as f}from"./p-1da6d2a3.js";const{join:u}=l,w={};const b=class{constructor(i){t(this,i),this.getModelEvent=s(this,"webcardinal:model:get",7),this.getTranslationModelEvent=s(this,"webcardinal:translationModel:get",7),this.getChainPrefix=s(this,"webcardinal:parentChain:get",7),this.disableContainer=!1,this.chain=""}async componentWillLoad(){if(this.host.isConnected&&(this.host.hasAttribute("template-name")&&!this.template&&(console.warn(['Attribute "template-name" is deprecated!','Use "template" instead!'].join("\n"),"target:",this.host),this.template=this.host.getAttribute("template-name")),this.host.innerHTML=await(async t=>{const{basePath:s}=window.WebCardinal,i=h();if(w[i]||(w[i]={}),w[i][t])return w[i][t];let[a,e]=await o(u(s,r(),c,t).pathname);return a?"default"===i?"":(w.default||(w.default={}),w.default[t]?w.default[t]:([a,e]=await o(u(s,c,t).pathname),a?"":(w.default[t]=e,e))):(w[i][t]=e,e)})(this.template),this.chain=a(this.host),-1!==this.chain.indexOf("@"))){const t=await m(this.getChainPrefix);this.chain=e(t,this.chain);try{this.model=await m(this.getModelEvent),this.translationModel=await m(this.getTranslationModelEvent)}catch(t){console.error(t)}f.bindChildNodes(this.host,{model:this.model,translationModel:this.translationModel,recursive:!0,chainPrefix:this.chain?this.chain.slice(1):null,enableTranslations:d()}),this.listeners=new n(this.host,{chain:this.chain}),this.listeners.getParentChain.add()}}async componentDidLoad(){this.disableContainer&&(Array.from(this.host.childNodes).forEach((t=>this.host.parentNode.insertBefore(t,this.host))),this.host.remove())}async connectedCallback(){if(this.listeners){const{getParentChain:t}=this.listeners;null==t||t.add()}}async disconnectedCallback(){if(this.listeners){const{getParentChain:t}=this.listeners;null==t||t.remove()}}async getModel(){if(this.model)return this.model}async getTranslationModel(){if(this.translationModel)return this.translationModel}render(){if(!this.disableContainer)return i("slot",null)}};!function(t,s,i,a){var e,n=arguments.length,h=n<3?s:null===a?a=Object.getOwnPropertyDescriptor(s,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,s,i,a);else for(var o=t.length-1;o>=0;o--)(e=t[o])&&(h=(n<3?e(h):n>3?e(s,i,h):e(s,i))||h);n>3&&h&&Object.defineProperty(s,i,h)}([p()],b.prototype,"host",void 0);export{b as webc_template}