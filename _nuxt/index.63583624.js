import{d as u,z as y,A as _,B as f,k as P,r as h,C as i,D as v,G as L,H as x,P as g,I as r,T,u as A,J as B,n as c,S as b,K as k,L as w,o as N,e as R,w as S,a as C,b as j,f as I,g as O,_ as z}from"./entry.51117c0c.js";import{u as D}from"./user.85cc518a.js";import{n as V}from"./ping.a7807cdf.js";import"./utils.69337edd.js";import"./referral.81759ec9.js";import"./request.e4855478.js";const E=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const a=await i[t.name]().then(o=>o.default||o);return()=>r(a,t.layoutProps,e.slots)}}),H=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const a=x(),o=y(g),n=o===_()?f():o,s=P(()=>A(t.name)??n.meta.layout??"default"),l=h();e.expose({layoutRef:l});const m=a.deferHydration();return()=>{const d=s.value&&s.value in i,p=n.meta.layoutTransition??v;return L(T,d&&p,{default:()=>r(b,{suspensible:!0,onResolve:()=>{c(m)}},{default:()=>r(M,{layoutProps:B(e.attrs,{ref:l}),key:s.value,name:s.value,shouldProvide:!t.name,hasTransition:!!p},e.slots)})}).default()}}}),M=u({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const a=t.name;return t.shouldProvide&&k(w,{isCurrent:o=>a===(o.meta.layout??"default")}),()=>{var o,n;return!a||typeof a=="string"&&!(a in i)?(n=(o=e.slots).default)==null?void 0:n.call(o):r(E,{key:a,layoutProps:t.layoutProps,name:a},e.slots)}}}),F=O(()=>z(()=>import("./entry.51117c0c.js").then(t=>t.ce),["./entry.51117c0c.js","./entry.1daf84dc.css"],import.meta.url).then(t=>t.default||t)),G={class:"w-full h-full"},W={__name:"index",setup(t){const e=D();return N(async()=>{await c(),e.getDisconnect||e.setPingIntervalTime(V)}),(a,o)=>{const n=F,s=H;return C(),R(s,{name:"index"},{default:S(()=>[j("div",G,[I(n)])]),_:1})}}};export{W as default};
