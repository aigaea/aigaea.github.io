import{E as u}from"./throttle.ea24b49d.js";import{d as f,r as b,a as p,e as c,w as g,a4 as m,b as v,l as B,t as k,u as n,s as y}from"./entry.5e3e9910.js";const E=f({__name:"Btn",props:{title:{default:""},hoverTitle:{default:"Go"},btnLoading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},bg:{default:"#272C30"},hoverBg:{default:"#c79e70"}},emits:["clickHandle"],setup(s,{emit:r}){const e=s,o=b(!1),d=()=>{r("clickHandle")};return(l,t)=>{const i=u;return p(),c(i,{class:"w-full",color:e.bg,round:"",onMouseenter:t[0]||(t[0]=a=>o.value=!0),onMouseleave:t[1]||(t[1]=a=>o.value=!1),onClick:t[2]||(t[2]=a=>d()),loading:e.btnLoading,disabled:e.btnLoading,style:y({border:"none",backgroundColor:n(o)||e.btnLoading?e.hoverBg:e.bg})},{default:g(()=>[m(l.$slots,"default"),v("div",{class:B(["font-semibold text-base",l.disabled?"text-[#6E6E6E]":"text-white "])},k(n(o)?e.hoverTitle:e.title),3)]),_:3},8,["color","loading","disabled","style"])}}});export{E as _};
