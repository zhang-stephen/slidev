import{d,i as _,a as p,u as h,b as u,c as m,e as f,o as n,f as l,g as t,t as s,h as a,F as g,r as v,n as x,j as y,k as b,l as k,m as N,p as w,q as P,_ as S}from"./index-a7d704c2.js";import{N as V}from"./NoteDisplay-ced1c163.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>b.slice(0,-1).map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),l("div",{id:"page-root",style:x(a(y))},[t("div",j,[t("div",L,[t("h1",T,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),l(g,null,v(a(i),(e,c)=>(n(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(k)),1),N(" "+s(e==null?void 0:e.title)+" ",1),z])]),w(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(n(),l("hr",F)):P("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/home/runner/work/slidev/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
