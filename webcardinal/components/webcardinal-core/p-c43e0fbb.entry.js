import{r as t,c as s,h as i}from"./p-afa78421.js";import{H as e}from"./p-dc68eded.js";import{p as o}from"./p-f8a2682a.js";import"./p-e506992e.js";const r=class{constructor(i){t(this,i),this.getTagsEvent=s(this,"webcardinal:tags:get",7)}async componentWillLoad(){if(this.host.isConnected){if(!this.href)try{return this.href=await o(this.getTagsEvent,{tag:this.tag}),void(this.content=i("stencil-route-link",{url:this.href},i("slot",null)))}catch(t){return void console.error(t)}try{let t;t=this.href.startsWith("/")?new URL(this.href,window.location.href):new URL(this.href),window.location.origin===t.origin?(this.href=t.pathname,this.content=i("stencil-route-link",{url:this.href},i("slot",null))):this.content=i("a",{href:this.href},i("slot",null))}catch(t){console.error(t)}}}render(){return this.content}};!function(t,s,i,e){var o,r=arguments.length,l=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,s,i,e);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(l=(r<3?o(l):r>3?o(s,i,l):o(s,i))||l);r>3&&l&&Object.defineProperty(s,i,l)}([e()],r.prototype,"host",void 0);export{r as webc_link}