import{r as t,c as a,h as n,H as i}from"./p-afa78421.js";import{C as e}from"./p-2c4422ec.js";import{d as o,r as s,F as r,l,m as h,q as d,p as c}from"./p-306a0f7f.js";import{H as b}from"./p-dc68eded.js";import{p}from"./p-f8a2682a.js";import"./p-e506992e.js";import{i as u,a as f,B as g}from"./p-9b9eb541.js";const m=class{constructor(i){t(this,i),this.getModelEvent=a(this,"webcardinal:model:get",7),this.getTranslationModelEvent=a(this,"webcardinal:translationModel:get",7),this.pageSize=20,this.pageSizeDelta=2,this.curentPageIndex=0,this.lastPageIndex=0,this.hidePagination=!1,this.templateChildrenCount=0,this.childrenCount=0,this.bootConfig={hidePagination:!1},this.getTemplatesFromDOM=()=>{const t={header:[],data:[]},a=Object.keys(t);for(const n of Array.from(this.host.childNodes))if(u(n))t.data.push(n);else if(f(n)){const i=n;if(!i.hasAttribute("slot")){t.data.push(i),this.childrenCount++;continue}if(a.includes(i.slot)){const{slot:a}=i;i.removeAttribute("slot"),i.classList.add("webc-datatable--"+a),t[a].push(i),this.childrenCount++}}return t},this.getDataSourceFromModel=async()=>{let{chain:t}=this;return t.startsWith(o)&&(t=t.substring(1)),(await p(this.getModelEvent)).getChainValue(t)},this.renderPagination=()=>{const t=this.curentPageIndex+1,a=this.lastPageIndex,i=[],e=function(t,a,n=2){const i=[],e=[];if(a<=1)return i;i.push(1);for(let e=t-n;e<=t+n;e++)e<a&&e>1&&i.push(e);let o;i.push(a);for(let t of i)o&&(t-o==2?e.push(o+1):t-o!=1&&e.push("...")),e.push(t),o=t;return e}(t,a,this.pageSizeDelta);for(const a of e)if("number"!=typeof a)"string"==typeof a&&i.push(a);else{if(a===t){i.push(n("button",{active:!0,part:"pagination-button pagination-button--active",disabled:!0},a));continue}i.push(n("button",{part:"pagination-button",onClick:()=>this.dataSource.goToPageByIndex(a-1)},a))}return 1!==a&&(i.unshift(n("button",{part:"pagination-button pagination-button--previous",disabled:1===t,onClick:()=>this.dataSource.goToPreviousPage()},"‹")),i.push(n("button",{part:"pagination-button pagination-button--next",disabled:t===a,onClick:()=>this.dataSource.goToNextPage()},"›"))),i},this.managePagination=()=>(this.model.pageNumbers={current:this.curentPageIndex+1,start:1,end:this.lastPageIndex},this.hidePagination?null:n("div",{part:"pagination",class:"pagination"},this.renderPagination()))}async componentWillLoad(){if(!this.host.isConnected)return;this.bootConfig.hidePagination=this.hidePagination,this.dataSource=await this.getDataSourceFromModel();const t=await p(this.getTranslationModelEvent),{DataSource:a}=window.WebCardinal.dataSources;if(!(this.dataSource&&"object"==typeof this.dataSource&&this.dataSource instanceof a))return void console.error(`An invalid WebCardinal DataSource instance received: "${this.chain}"! [1]`,this.dataSource);try{this.model=await this.dataSource._init((()=>this.host))}catch(t){return console.error(`An invalid WebCardinal DataSource instance received: "${this.chain}"! [2]`,this.dataSource),void(this.dataSource=void 0)}const{header:n,data:i}=this.getTemplatesFromDOM();this.host.classList.add("webc-datatable");const b=document.createElement("style");b.innerHTML='\n[data-sortable] {\n    --header-arrow-size: 0.25rem;\n    --header-arrow-color: #BBBBBB;\n\n    cursor: pointer;\n    position: relative;\n    padding-right: calc(5 * var(--header-arrow-size));\n}\n\n[data-sortable]::before,\n[data-sortable]::after {\n    content: "";\n    height: 0;\n    width: 0;\n    position: absolute;\n    right: 4px;\n    border-left: var(--header-arrow-size) solid transparent;\n    border-right: var(--header-arrow-size) solid transparent;\n    opacity: 1;\n}\n\n[data-sortable]::before {\n    border-bottom: var(--header-arrow-size) solid var(--header-arrow-color);\n    border-top: var(--header-arrow-size) solid transparent;\n    bottom: 55%;\n}\n\n[data-sortable]::after {\n    border-top: var(--header-arrow-size) solid var(--header-arrow-color);\n    top: 55%;\n}\n';const u=document.createElement("div");u.setAttribute("slot","data"),u.classList.add("webc-datatable--container"),u.setAttribute(s,""+this.childrenCount),u.setAttribute(r,o+"data"),u.setAttribute(l,""+h),u.append(...i),u.addEventListener(d,(t=>{t.stopImmediatePropagation(),u.prepend(...n)})),u.addEventListener(c,(t=>{t.stopImmediatePropagation()})),this.host.append(b,u),g.bindChildNodes(this.host,{model:this.model,translationModel:t,recursive:!0,enableTranslations:!0}),this.listeners=new e(this.host,{model:this.model,translationModel:t,chain:o+"data"}),this.listeners.getModel.add(),this.listeners.getTranslationModel.add(),this.listeners.getParentChain.add(),u.prepend(...n),this.dataSource._renderPageAsync()}async componentWillRender(){this.lastPageIndex=this.dataSize?Math.ceil(this.dataSize/this.pageSize):1}async connectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:a,getParentChain:n}=this.listeners;null==t||t.add(),null==a||a.add(),null==n||n.add()}}async disconnectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:a,getParentChain:n}=this.listeners;null==t||t.remove(),null==a||a.remove(),null==n||n.remove()}}async fillCurrentPage(t){var a;const n=t=>this.host.shadowRoot.querySelector(`slot[name="${t}"]`),i=t=>{n("before").insertAdjacentElement("afterend",(t=>Object.assign(document.createElement("slot"),{name:t}))(t))},e=n("data");if(!t||0===t.length)return null==e||e.remove(),n("no-data")||i("no-data"),this.hidePagination=!0,void(this.model.data=[]);e||(null===(a=n("no-data"))||void 0===a||a.remove(),i("data")),this.bootConfig.hidePagination||(this.hidePagination=!1),this.model.data=t}async clearCurrentPage(){this.model.data.length=0}pageSizeHandler(){this.dataSource._renderPageAsync()}render(){return this.dataSource?n(i,null,n("slot",{name:"before"}),n("slot",{name:"data"}),this.managePagination(),n("slot",{name:"footer"}),n("slot",{name:"after"})):null}static get watchers(){return{pageSize:["pageSizeHandler"]}}};(function(t,a,n,i){var e,o=arguments.length,s=o<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,a,n,i);else for(var r=t.length-1;r>=0;r--)(e=t[r])&&(s=(o<3?e(s):o>3?e(a,n,s):e(a,n))||s);o>3&&s&&Object.defineProperty(a,n,s)})([b()],m.prototype,"host",void 0),m.style={default:":host .pagination{display:flex;gap:var(--pagination-gap);justify-content:center}:host .pagination>button{font-size:inherit;border:var(--pagination-button-border);background:var(--pagination-button-background)}:host .pagination>button:not([disabled]){cursor:pointer}:host .pagination>button[active]{color:inherit;font-weight:bold}"};export{m as webc_datatable}