import{r as t,c as s,h as i}from"./p-d4191909.js";import"./p-8fa78097.js";import{E as a,x as e,G as n,T as h,U as o,B as r}from"./p-856e6638.js";import{H as c}from"./p-813bc48c.js";import{k as l,m as p,C as f}from"./p-173c2a35.js";import{p as m}from"./p-f8a2682a.js";import"./p-e506992e.js";import{B as d}from"./p-62c01f8b.js";const{join:u}=o,b={};const w=class{constructor(i){t(this,i),this.getModelEvent=s(this,"webcardinal:model:get",7),this.getTranslationModelEvent=s(this,"webcardinal:translationModel:get",7),this.getChainPrefix=s(this,"webcardinal:parentChain:get",7),this.disableContainer=!1,this.chain=""}async componentWillLoad(){if(this.host.isConnected&&(this.host.hasAttribute("template-name")&&!this.template&&(console.warn(['Attribute "template-name" is deprecated!','Use "template" instead!'].join("\n"),"target:",this.host),this.template=this.host.getAttribute("template-name")),this.host.innerHTML=await(async t=>{const{basePath:s}=window.WebCardinal,i=a();if(b[i]||(b[i]={}),b[i][t])return b[i][t];let[o,r]=await e(u(s,n(),h,t).pathname);return o?"default"===i?"":(b.default||(b.default={}),b.default[t]?b.default[t]:([o,r]=await e(u(s,h,t).pathname),o?"":(b.default[t]=r,r))):(b[i][t]=r,r)})(this.template),this.chain=l(this.host),-1!==this.chain.indexOf("@"))){const t=await m(this.getChainPrefix);this.chain=p(t,this.chain);try{this.model=await m(this.getModelEvent),this.translationModel=await m(this.getTranslationModelEvent)}catch(t){console.error(t)}d.bindChildNodes(this.host,{model:this.model,translationModel:this.translationModel,recursive:!0,chainPrefix:this.chain?this.chain.slice(1):null,enableTranslations:r()}),this.listeners=new f(this.host,{chain:this.chain}),this.listeners.getParentChain.add()}}async componentDidLoad(){this.disableContainer&&(Array.from(this.host.childNodes).forEach((t=>this.host.parentNode.insertBefore(t,this.host))),this.host.remove())}async connectedCallback(){if(this.listeners){const{getParentChain:t}=this.listeners;null==t||t.add()}}async disconnectedCallback(){if(this.listeners){const{getParentChain:t}=this.listeners;null==t||t.remove()}}async getModel(){if(this.model)return this.model}async getTranslationModel(){if(this.translationModel)return this.translationModel}render(){if(!this.disableContainer)return i("slot",null)}};!function(t,s,i,a){var e,n=arguments.length,h=n<3?s:null===a?a=Object.getOwnPropertyDescriptor(s,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,s,i,a);else for(var o=t.length-1;o>=0;o--)(e=t[o])&&(h=(n<3?e(h):n>3?e(s,i,h):e(s,i))||h);n>3&&h&&Object.defineProperty(s,i,h)}([c()],w.prototype,"host",void 0);export{w as webc_template}