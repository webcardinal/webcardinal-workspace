import{O as o,J as t,Q as a,a as r,U as s}from"./p-bc85da7f.js";import"./p-e506992e.js";const{join:e}=s,n={getController:async s=>{const{controllers:n,basePath:l}=window.WebCardinal,i=o();if(n[s])return n[s];let c=await t(e(l,a(),r,"controllers",s).pathname);return c?(n[s]=c,c):"default"!==i?(c=await t(e(l,r,"controllers",s).pathname),c?(n[s]=c,c):void 0):void 0}};export{n as C}