import{a as i}from"./utils.69337edd.js";import{d as l,r as d,o as u,n as p,O as _,a as m,c as f,j as w}from"./entry.51117c0c.js";const x=["id"],k=l({__name:"Turnstile",props:{id:{default:"example-container"}},emits:["toUpdate"],setup(r,{emit:a}){const n=r;d();const s=e=>new Promise((o,c)=>{const t=document.createElement("script");t.src=e,t.defer=!0,t.onload=()=>o(!0),t.onerror=()=>c(new Error("Script load error")),document.body.appendChild(t)});return u(async()=>{await p();try{await s("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"),window.onloadTurnstileCallback=function(){window.turnstile&&window.turnstile.render(`#${n.id}`,{sitekey:i(),language:"en",callback:function(e){a("toUpdate",e)}})}}catch(e){console.error(e)}}),_(()=>{const e=document.getElementById(n.id);e&&(e.innerHTML=""),delete window.onloadTurnstileCallback}),(e,o)=>(m(),f("div",{id:`${n.id}`,class:"w-full turnstile h-[68px] flex items-center justify-center"},null,8,x))}});const h=w(k,[["__scopeId","data-v-4220f032"]]);export{h as _};
