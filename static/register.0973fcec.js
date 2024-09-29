import{_ as q,a as z}from"./logo.616fbdf0.js";import{E as Y}from"./el-input.1f6e577f.js";import{v as J,e as $,C as F,g as M,E as G,a as H}from"./index.ba15f77d.js";import{E as O,a as K}from"./el-checkbox.213cd7c8.js";import{_ as W}from"./Turnstile.9bb62ed9.js";import{E as D,t as Q}from"./throttle.89f674a8.js";import{d as X,r as h,A as Z,h as P,o as ee,a as g,c as w,b as s,u as o,f as l,w as i,M as x,F as te,m as se,l as oe,v as ae,E as re,e as le,N as ne,p as ie,i as ce,j as de}from"../bundle.js";import{c as ue}from"./passwords.0c085804.js";import{c as me}from"./dict.d48f8782.js";import{u as pe}from"./user.498bdc80.js";import{g as V}from"./utils.07ca15e2.js";import{a as fe,_ as U}from"./logo_bg.afb3ea32.js";import"./use-form-item.201259f7.js";import"./_initCloneObject.68f41e0d.js";import"./request.9321cb3c.js";import"./isEqual.f1181de3.js";const _e=async p=>{try{const f=await(p==null?void 0:p.validate());return Promise.resolve(f)}catch(f){const _=document.getElementsByClassName("is-error");throw _.length>0&&_[0].scrollIntoView({block:"center",behavior:"smooth"}),f}},he=""+globalThis.__publicAssetsURL("images/login/bg_kuang.png"),ge=""+globalThis.__publicAssetsURL("images/login/login_successful.png"),c=p=>(ie("data-v-e4811f5f"),p=p(),ce(),p),xe={class:"w-full h-screen pb-5"},ve=c(()=>s("img",{src:fe,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1)),we={class:"w-full h-full flex flex-col overflow-auto"},be=c(()=>s("div",{class:"w-full h-12 text-base text-white font-normal px-12 flex items-center justify-between"},[s("img",{src:z,alt:"",class:"w-52 h-16 mt-4"})],-1)),Ee={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},ye={class:"w-[480px] h-[690px] relative scale-[0.7] sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},ke=c(()=>s("img",{src:he,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1)),Fe={key:0,class:"w-full h-full flex flex-col py-5"},Pe={class:"w-full h-[80px] mt-30 flex flex-col items-center justify-center"},Ve=c(()=>s("div",{class:"text-3xl font-normal text-[#FFE099]"},"Sign UP ",-1)),Ue={class:"flex items-center space-x-2"},Ce=c(()=>s("span",{class:"text-sm font-normal text-[#C6BFAA]"},"Alrady have an account?",-1)),Ae={class:"text-sm font-normal text-[#5CF3FF] cursor-pointer"},Le={class:"w-full flex-1 px-12 pb-3 mt-14 overflow-hidden flex flex-col"},Te=c(()=>s("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1)),Ie=c(()=>s("span",{class:"iconfont icon--username text-[#FFE099] text-xl"},null,-1)),Se=c(()=>s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),je={class:"set_checkbox_sty"},Re=c(()=>s("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),Be=c(()=>s("span",{class:"iconfont icon-ico text-[#FFE099] text-xl"},null,-1)),Ne={class:"text-opacity-80 text-xs"},qe={class:"w-[243px] h-11 absolute left-[118px] -bottom-4 z-10"},ze=c(()=>s("img",{src:U,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),Ye=c(()=>s("span",{class:"text-base font-normal text-[#4E4A3C]"},"Sign up",-1)),Je={key:1,class:"w-full h-full flex flex-col items-center justify-center space-y-12"},$e=ae('<div class="w-[266px] h-72" data-v-e4811f5f><img src="'+ge+'" alt="" class="w-full h-full" data-v-e4811f5f></div><div class="flex flex-col items-center space-y-1" data-v-e4811f5f><span class="text-base font-normal text-[#FFE099]" data-v-e4811f5f> Registered Successfully </span><span class="text-sm font-normal text-white" data-v-e4811f5f>Welcome to the GAEA</span></div>',2),Me={class:"w-[243px] h-11 absolute left-[118px] -bottom-4 z-10"},Ge=c(()=>s("img",{src:U,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),He=c(()=>s("span",{class:"text-base font-normal text-[#4E4A3C]"},"BACK TO LOGIN",-1)),Oe=X({__name:"register",setup(p){const f=h(),_=h(!1),b=h(!1),v=h(!1),d=h(me()),C=pe(),A=Z(),t=P({email:"",password:"",uername:"",confirm_Password:"",referral_code:"",checkList:[],recaptcha_token:"",doYouAgree:!1}),L=P({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:(r,e,a)=>{const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e)return a();if(!u.test(e))return a(new Error("Please enter a valid email address!"));J({email:e}).then(m=>{m.code===200?a():a(new Error(m.msg))}).catch(()=>{a(new Error("Request was aborted."))})},trigger:"blur"}],uername:[{required:!0,message:"Please enter a valide uername",trigger:"blur"},{min:6,message:"Length should be 6",trigger:"blur"},{validator:(r,e,a)=>{e?$({username:e}).then(u=>{u.code===200?a():a(new Error(u.msg))}).catch(()=>{a(new Error)}):a()},trigger:"blur"}],password:[{validator:(r,e,a)=>{e===""?a(new Error("Please enter a valide password")):(t.checkList.length!==4&&a(new Error("Your password does not match")),a())},trigger:"blur"}],confirm_Password:[{validator:(r,e,a)=>{e===""?a(new Error("Please input the password again")):e!==t.password?a(new Error("Your password does not match")):a()},trigger:"blur"}],referral_code:[{required:!0,message:"Invalid referral code",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),T=()=>{const{password:r}=t,e=ue(r);t.checkList=[],e.lowercase&&t.checkList.push(d==null?void 0:d.value[0]),e.uppercase&&t.checkList.push(d==null?void 0:d.value[1]),e.special&&t.checkList.push(d==null?void 0:d.value[2]),e.characters&&t.checkList.push(d==null?void 0:d.value[3])},I=async r=>{try{if(!r)return;if(await _e(r),!t.doYouAgree){b.value=!0,setTimeout(()=>{b.value=!1},500);return}v.value=!0;const e={email:t.email.trim(),username:t.uername.trim(),password:F.SHA256(t.password).toString(F.enc.Hex).trim(),referral_code:t.referral_code.trim(),recaptcha_token:t.recaptcha_token.trim()},a=await M({...e});v.value=!1,a.code===200?_.value=!0:(re.error(a.msg),E())}catch(e){console.log(e),v.value=!1,E()}},S=r=>{t.recaptcha_token=r,f.value.clearValidate("recaptcha_token")},E=()=>{t.recaptcha_token="";const r=document.getElementById("register_recaptcha_token");r&&(r.innerHTML="",window.onloadTurnstileCallback())};return ee(()=>{t.referral_code=A.query.ref||"",C.clearUserInfo()}),(r,e)=>{const a=q,u=Y,m=G,y=O,j=K,R=W,B=H,k=D;return g(),w("div",xe,[ve,s("div",we,[be,s("div",Ee,[s("div",ye,[ke,o(_)?(g(),w("div",Je,[$e,s("div",Me,[l(k,{type:"primary",onClick:e[8]||(e[8]=n=>("navigateTo"in r?r.navigateTo:o(ne))("/login")),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:i(()=>[Ge,He]),_:1})])])):(g(),w("div",Fe,[s("div",Pe,[Ve,s("div",Ue,[Ce,s("span",Ae,[l(a,{to:"/login"},{default:i(()=>[x("Log in")]),_:1})])])]),s("div",Le,[l(B,{model:o(t),class:"w-full h-full overflow-auto space-y-7",ref_key:"ruleFormRef",ref:f,rules:o(L),"label-position":"top","hide-required-asterisk":""},{default:i(()=>[l(m,{label:"Email",prop:"email"},{default:i(()=>[l(u,{placeholder:"Enter your email",modelValue:o(t).email,"onUpdate:modelValue":e[0]||(e[0]=n=>o(t).email=n)},{prefix:i(()=>[Te]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"Username",prop:"uername"},{default:i(()=>[l(u,{placeholder:"Enter your  uername",modelValue:o(t).uername,"onUpdate:modelValue":e[1]||(e[1]=n=>o(t).uername=n)},{prefix:i(()=>[Ie]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"Password",prop:"password",onInput:T},{default:i(()=>[l(u,{placeholder:"Enter your password",type:"password",modelValue:o(t).password,"onUpdate:modelValue":e[2]||(e[2]=n=>o(t).password=n),"show-password":""},{prefix:i(()=>[Se]),_:1},8,["modelValue"]),s("div",je,[l(j,{modelValue:o(t).checkList,"onUpdate:modelValue":e[3]||(e[3]=n=>o(t).checkList=n),class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6"},{default:i(()=>[(g(!0),w(te,null,se(o(d),(n,N)=>(g(),le(y,{label:n,value:n,key:N},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),l(m,{label:"Confirm Password",prop:"confirm_Password"},{default:i(()=>[l(u,{placeholder:"Enter your password",type:"password",modelValue:o(t).confirm_Password,"onUpdate:modelValue":e[4]||(e[4]=n=>o(t).confirm_Password=n),"show-password":""},{prefix:i(()=>[Re]),_:1},8,["modelValue"])]),_:1}),l(m,null,{default:i(()=>[l(u,{placeholder:"Enter Code",modelValue:o(t).referral_code,"onUpdate:modelValue":e[5]||(e[5]=n=>o(t).referral_code=n)},{prefix:i(()=>[Be]),_:1},8,["modelValue"])]),_:1}),l(m,{prop:"recaptcha_token",class:"mt-8 h-[68px]"},{default:i(()=>[l(R,{onToUpdate:S,id:"register_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),s("div",{class:oe(["flex items-center space-x-2 text-white",{shake:!o(t).doYouAgree&&o(b)}])},[l(y,{modelValue:o(t).doYouAgree,"onUpdate:modelValue":e[6]||(e[6]=n=>o(t).doYouAgree=n)},null,8,["modelValue"]),s("span",Ne,[x(" I have read and agree to "),l(a,{class:"text-[#FFE099] underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:o(V))()}/home?type=termsOfUse`,target:"_blank"},{default:i(()=>[x(" Terms ")]),_:1},8,["to"]),x(" and "),l(a,{class:"text-[#FFE099] underline underline-offset-4 cursor-pointer",to:`${("getJumpURL"in r?r.getJumpURL:o(V))()}/home?type=privacyPolicy`,target:"_blank"},{default:i(()=>[x(" Privacy Policy ")]),_:1},8,["to"])])],2)]),s("div",qe,[l(k,{type:"primary",loading:o(v),onClick:e[7]||(e[7]=n=>("throttle"in r?r.throttle:o(Q))(()=>{I(o(f))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:i(()=>[ze,Ye]),_:1},8,["loading"])])]))])])])])}}});const ft=de(Oe,[["__scopeId","data-v-e4811f5f"]]);export{ft as default};
