import{X as Je,bY as oe,bP as k,bv as wt,aT as we,bp as re,bZ as xt,aR as Qe,bn as St,b_ as xe,b$ as ae,bX as Tt,c0 as F,k as b,bR as Et,aq as et,r as z,b9 as ee,ab as te,bJ as jt,bC as Me,af as Ct,aI as It,ag as ce,ah as Ve,bH as At,Y as pe,d as tt,bd as _t,at as Pt,a8 as Be,bA as $t,c1 as Ot,c2 as zt,aZ as kt,n as $,o as Ft,aK as Mt,y as Vt,V as Bt,a as g,c as T,q as m,F as de,l as x,u as n,a4 as Z,b as O,e as j,w as R,aj as J,ak as D,J as fe,f as Nt,bc as Rt,aA as Dt,ad as Lt,t as Q,s as Kt,al as Ht,a0 as Ne,aw as Ut}from"./entry.5e3e9910.js";import{a as Wt,e as Gt,b as Yt,c as Xt}from"./use-form-item.ffa2db3f.js";const qt=()=>Je&&/firefox/i.test(window.navigator.userAgent);var Zt=oe(k,"WeakMap");const be=Zt;var Jt=9007199254740991;function at(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Jt}function Qt(e){return e!=null&&at(e.length)&&!wt(e)}var ea=Object.prototype;function ta(e){var r=e&&e.constructor,o=typeof r=="function"&&r.prototype||ea;return e===o}function aa(e,r){for(var o=-1,a=Array(e);++o<e;)a[o]=r(o);return a}var oa="[object Arguments]";function Re(e){return we(e)&&re(e)==oa}var ot=Object.prototype,ra=ot.hasOwnProperty,na=ot.propertyIsEnumerable,sa=Re(function(){return arguments}())?Re:function(e){return we(e)&&ra.call(e,"callee")&&!na.call(e,"callee")};const ia=sa;function la(){return!1}var rt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,De=rt&&typeof module=="object"&&module&&!module.nodeType&&module,ua=De&&De.exports===rt,Le=ua?k.Buffer:void 0,ca=Le?Le.isBuffer:void 0,pa=ca||la;const da=pa;var fa="[object Arguments]",va="[object Array]",ba="[object Boolean]",ya="[object Date]",ga="[object Error]",ma="[object Function]",ha="[object Map]",wa="[object Number]",xa="[object Object]",Sa="[object RegExp]",Ta="[object Set]",Ea="[object String]",ja="[object WeakMap]",Ca="[object ArrayBuffer]",Ia="[object DataView]",Aa="[object Float32Array]",_a="[object Float64Array]",Pa="[object Int8Array]",$a="[object Int16Array]",Oa="[object Int32Array]",za="[object Uint8Array]",ka="[object Uint8ClampedArray]",Fa="[object Uint16Array]",Ma="[object Uint32Array]",p={};p[Aa]=p[_a]=p[Pa]=p[$a]=p[Oa]=p[za]=p[ka]=p[Fa]=p[Ma]=!0;p[fa]=p[va]=p[Ca]=p[ba]=p[Ia]=p[ya]=p[ga]=p[ma]=p[ha]=p[wa]=p[xa]=p[Sa]=p[Ta]=p[Ea]=p[ja]=!1;function Va(e){return we(e)&&at(e.length)&&!!p[re(e)]}function Ba(e){return function(r){return e(r)}}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,L=nt&&typeof module=="object"&&module&&!module.nodeType&&module,Na=L&&L.exports===nt,ve=Na&&xt.process,Ra=function(){try{var e=L&&L.require&&L.require("util").types;return e||ve&&ve.binding&&ve.binding("util")}catch{}}();const Ke=Ra;var He=Ke&&Ke.isTypedArray,Da=He?Ba(He):Va;const La=Da;var Ka=Object.prototype,Ha=Ka.hasOwnProperty;function Ua(e,r){var o=Qe(e),a=!o&&ia(e),s=!o&&!a&&da(e),i=!o&&!a&&!s&&La(e),u=o||a||s||i,w=u?aa(e.length,String):[],f=w.length;for(var d in e)(r||Ha.call(e,d))&&!(u&&(d=="length"||s&&(d=="offset"||d=="parent")||i&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||St(d,f)))&&w.push(d);return w}function Wa(e,r){return function(o){return e(r(o))}}var Ga=Wa(Object.keys,Object);const Ya=Ga;var Xa=Object.prototype,qa=Xa.hasOwnProperty;function Za(e){if(!ta(e))return Ya(e);var r=[];for(var o in Object(e))qa.call(e,o)&&o!="constructor"&&r.push(o);return r}function Ja(e){return Qt(e)?Ua(e):Za(e)}function Qa(e,r){for(var o=-1,a=r.length,s=e.length;++o<a;)e[s+o]=r[o];return e}function eo(){this.__data__=new xe,this.size=0}function to(e){var r=this.__data__,o=r.delete(e);return this.size=r.size,o}function ao(e){return this.__data__.get(e)}function oo(e){return this.__data__.has(e)}var ro=200;function no(e,r){var o=this.__data__;if(o instanceof xe){var a=o.__data__;if(!ae||a.length<ro-1)return a.push([e,r]),this.size=++o.size,this;o=this.__data__=new Tt(a)}return o.set(e,r),this.size=o.size,this}function K(e){var r=this.__data__=new xe(e);this.size=r.size}K.prototype.clear=eo;K.prototype.delete=to;K.prototype.get=ao;K.prototype.has=oo;K.prototype.set=no;function so(e,r){for(var o=-1,a=e==null?0:e.length,s=0,i=[];++o<a;){var u=e[o];r(u,o,e)&&(i[s++]=u)}return i}function io(){return[]}var lo=Object.prototype,uo=lo.propertyIsEnumerable,Ue=Object.getOwnPropertySymbols,co=Ue?function(e){return e==null?[]:(e=Object(e),so(Ue(e),function(r){return uo.call(e,r)}))}:io;const po=co;function fo(e,r,o){var a=r(e);return Qe(e)?a:Qa(a,o(e))}function Wo(e){return fo(e,Ja,po)}var vo=oe(k,"DataView");const ye=vo;var bo=oe(k,"Promise");const ge=bo;var yo=oe(k,"Set");const me=yo;var We="[object Map]",go="[object Object]",Ge="[object Promise]",Ye="[object Set]",Xe="[object WeakMap]",qe="[object DataView]",mo=F(ye),ho=F(ae),wo=F(ge),xo=F(me),So=F(be),I=re;(ye&&I(new ye(new ArrayBuffer(1)))!=qe||ae&&I(new ae)!=We||ge&&I(ge.resolve())!=Ge||me&&I(new me)!=Ye||be&&I(new be)!=Xe)&&(I=function(e){var r=re(e),o=r==go?e.constructor:void 0,a=o?F(o):"";if(a)switch(a){case mo:return qe;case ho:return We;case wo:return Ge;case xo:return Ye;case So:return Xe}return r});const Go=I;var To=k.Uint8Array;const Yo=To;function Eo(e){return e==null}class jo extends Error{constructor(r){super(r),this.name="ElementPlusError"}}function Xo(e,r){throw new jo(`[${e}] ${r}`)}function qo(e,r){}const he="update:modelValue",Zo="change",Co=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),Io=["class","style"],Ao=/^on[A-Z]/,_o=(e={})=>{const{excludeListeners:r=!1,excludeKeys:o}=e,a=b(()=>((o==null?void 0:o.value)||[]).concat(Io)),s=et();return s?b(()=>{var i;return Et(Object.entries((i=s.proxy)==null?void 0:i.$attrs).filter(([u])=>!a.value.includes(u)&&!(r&&Ao.test(u))))}):b(()=>({}))};function Po(e){const r=z();function o(){if(e.value==null)return;const{selectionStart:s,selectionEnd:i,value:u}=e.value;if(s==null||i==null)return;const w=u.slice(0,Math.max(0,s)),f=u.slice(Math.max(0,i));r.value={selectionStart:s,selectionEnd:i,value:u,beforeTxt:w,afterTxt:f}}function a(){if(e.value==null||r.value==null)return;const{value:s}=e.value,{beforeTxt:i,afterTxt:u,selectionStart:w}=r.value;if(i==null||u==null||w==null)return;let f=s.length;if(s.endsWith(u))f=s.length-u.length;else if(s.startsWith(i))f=i.length;else{const d=i[w-1],y=s.indexOf(d,w-1);y!==-1&&(f=y+1)}e.value.setSelectionRange(f,f)}return[o,a]}function $o(e,{afterFocus:r,afterBlur:o}={}){const a=et(),{emit:s}=a,i=ee(),u=z(!1),w=y=>{u.value||(u.value=!0,s("focus",y),r==null||r())},f=y=>{var v;y.relatedTarget&&((v=i.value)!=null&&v.contains(y.relatedTarget))||(u.value=!1,s("blur",y),o==null||o())},d=()=>{var y;(y=e.value)==null||y.focus()};return te(i,y=>{y&&y.setAttribute("tabindex","-1")}),jt(i,"click",d),{wrapperRef:i,isFocused:u,handleFocus:w,handleBlur:f}}let S;const Oo=`
  height:0 !important;
  visibility:hidden !important;
  ${qt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,zo=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ko(e){const r=window.getComputedStyle(e),o=r.getPropertyValue("box-sizing"),a=Number.parseFloat(r.getPropertyValue("padding-bottom"))+Number.parseFloat(r.getPropertyValue("padding-top")),s=Number.parseFloat(r.getPropertyValue("border-bottom-width"))+Number.parseFloat(r.getPropertyValue("border-top-width"));return{contextStyle:zo.map(u=>`${u}:${r.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:s,boxSizing:o}}function Ze(e,r=1,o){var a;S||(S=document.createElement("textarea"),document.body.appendChild(S));const{paddingSize:s,borderSize:i,boxSizing:u,contextStyle:w}=ko(e);S.setAttribute("style",`${w};${Oo}`),S.value=e.value||e.placeholder||"";let f=S.scrollHeight;const d={};u==="border-box"?f=f+i:u==="content-box"&&(f=f-s),S.value="";const y=S.scrollHeight-s;if(Me(r)){let v=y*r;u==="border-box"&&(v=v+s+i),f=Math.max(v,f),d.minHeight=`${v}px`}if(Me(o)){let v=y*o;u==="border-box"&&(v=v+s+i),f=Math.min(v,f)}return d.height=`${f}px`,(a=S.parentNode)==null||a.removeChild(S),S=void 0,d}const Fo=Ct({id:{type:String,default:void 0},size:It,disabled:Boolean,modelValue:{type:ce([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ce([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ve},prefixIcon:{type:Ve},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ce([Object,Array,String]),default:()=>At({})}}),Mo={[he]:e=>pe(e),input:e=>pe(e),change:e=>pe(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},Vo=["role"],Bo=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],No=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Ro=tt({name:"ElInput",inheritAttrs:!1}),Do=tt({...Ro,props:Fo,emits:Mo,setup(e,{expose:r,emit:o}){const a=e,s=_t(),i=Pt(),u=b(()=>{const t={};return a.containerRole==="combobox"&&(t["aria-haspopup"]=s["aria-haspopup"],t["aria-owns"]=s["aria-owns"],t["aria-expanded"]=s["aria-expanded"]),t}),w=b(()=>[a.type==="textarea"?Te.b():c.b(),c.m(st.value),c.is("disabled",A.value),c.is("exceed",ct.value),{[c.b("group")]:i.prepend||i.append,[c.bm("group","append")]:i.append,[c.bm("group","prepend")]:i.prepend,[c.m("prefix")]:i.prefix||a.prefixIcon,[c.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[c.bm("suffix","password-clear")]:X.value&&ie.value},s.class]),f=b(()=>[c.e("wrapper"),c.is("focus",se.value)]),d=_o({excludeKeys:b(()=>Object.keys(u.value))}),{form:y,formItem:v}=Wt(),{inputId:Se}=Gt(a,{formItemContext:v}),st=Yt(),A=Xt(),c=Be("input"),Te=Be("textarea"),H=ee(),E=ee(),ne=z(!1),M=z(!1),U=z(!1),Ee=z(),W=ee(a.inputStyle),_=b(()=>H.value||E.value),{wrapperRef:it,isFocused:se,handleFocus:G,handleBlur:Y}=$o(_,{afterBlur(){var t;a.validateEvent&&((t=v==null?void 0:v.validate)==null||t.call(v,"blur").catch(l=>void 0))}}),je=b(()=>{var t;return(t=y==null?void 0:y.statusIcon)!=null?t:!1}),V=b(()=>(v==null?void 0:v.validateState)||""),Ce=b(()=>V.value&&$t[V.value]),lt=b(()=>U.value?Ot:zt),ut=b(()=>[s.style,a.inputStyle]),Ie=b(()=>[a.inputStyle,W.value,{resize:a.resize}]),C=b(()=>Eo(a.modelValue)?"":String(a.modelValue)),X=b(()=>a.clearable&&!A.value&&!a.readonly&&!!C.value&&(se.value||ne.value)),ie=b(()=>a.showPassword&&!A.value&&!a.readonly&&!!C.value&&(!!C.value||se.value)),P=b(()=>a.showWordLimit&&!!d.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!A.value&&!a.readonly&&!a.showPassword),le=b(()=>C.value.length),ct=b(()=>!!P.value&&le.value>Number(d.value.maxlength)),pt=b(()=>!!i.suffix||!!a.suffixIcon||X.value||a.showPassword||P.value||!!V.value&&je.value),[dt,ft]=Po(H);kt(E,t=>{if(vt(),!P.value||a.resize!=="both")return;const l=t[0],{width:h}=l.contentRect;Ee.value={right:`calc(100% - ${h+15+6}px)`}});const B=()=>{const{type:t,autosize:l}=a;if(!(!Je||t!=="textarea"||!E.value))if(l){const h=Ne(l)?l.minRows:void 0,q=Ne(l)?l.maxRows:void 0,Fe=Ze(E.value,h,q);W.value={overflowY:"hidden",...Fe},$(()=>{E.value.offsetHeight,W.value=Fe})}else W.value={minHeight:Ze(E.value).minHeight}},vt=(t=>{let l=!1;return()=>{var h;if(l||!a.autosize)return;((h=E.value)==null?void 0:h.offsetParent)===null||(t(),l=!0)}})(B),N=()=>{const t=_.value,l=a.formatter?a.formatter(C.value):C.value;!t||t.value===l||(t.value=l)},ue=async t=>{dt();let{value:l}=t.target;if(a.formatter&&(l=a.parser?a.parser(l):l),!M.value){if(l===C.value){N();return}o(he,l),o("input",l),await $(),N(),ft()}},Ae=t=>{o("change",t.target.value)},_e=t=>{o("compositionstart",t),M.value=!0},Pe=t=>{var l;o("compositionupdate",t);const h=(l=t.target)==null?void 0:l.value,q=h[h.length-1]||"";M.value=!Co(q)},$e=t=>{o("compositionend",t),M.value&&(M.value=!1,ue(t))},bt=()=>{U.value=!U.value,Oe()},Oe=async()=>{var t;await $(),(t=_.value)==null||t.focus()},yt=()=>{var t;return(t=_.value)==null?void 0:t.blur()},gt=t=>{ne.value=!1,o("mouseleave",t)},mt=t=>{ne.value=!0,o("mouseenter",t)},ze=t=>{o("keydown",t)},ht=()=>{var t;(t=_.value)==null||t.select()},ke=()=>{o(he,""),o("change",""),o("clear"),o("input","")};return te(()=>a.modelValue,()=>{var t;$(()=>B()),a.validateEvent&&((t=v==null?void 0:v.validate)==null||t.call(v,"change").catch(l=>void 0))}),te(C,()=>N()),te(()=>a.type,async()=>{await $(),N(),B()}),Ft(()=>{!a.formatter&&a.parser,N(),$(B)}),r({input:H,textarea:E,ref:_,textareaStyle:Ie,autosize:Mt(a,"autosize"),focus:Oe,blur:yt,select:ht,clear:ke,resizeTextarea:B}),(t,l)=>Vt((g(),T("div",fe(n(u),{class:n(w),style:n(ut),role:t.containerRole,onMouseenter:mt,onMouseleave:gt}),[m(" input "),t.type!=="textarea"?(g(),T(de,{key:0},[m(" prepend slot "),t.$slots.prepend?(g(),T("div",{key:0,class:x(n(c).be("group","prepend"))},[Z(t.$slots,"prepend")],2)):m("v-if",!0),O("div",{ref_key:"wrapperRef",ref:it,class:x(n(f))},[m(" prefix slot "),t.$slots.prefix||t.prefixIcon?(g(),T("span",{key:0,class:x(n(c).e("prefix"))},[O("span",{class:x(n(c).e("prefix-inner"))},[Z(t.$slots,"prefix"),t.prefixIcon?(g(),j(n(D),{key:0,class:x(n(c).e("icon"))},{default:R(()=>[(g(),j(J(t.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),O("input",fe({id:n(Se),ref_key:"input",ref:H,class:n(c).e("inner")},n(d),{type:t.showPassword?U.value?"text":"password":t.type,disabled:n(A),formatter:t.formatter,parser:t.parser,readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.label,placeholder:t.placeholder,style:t.inputStyle,form:a.form,onCompositionstart:_e,onCompositionupdate:Pe,onCompositionend:$e,onInput:ue,onFocus:l[0]||(l[0]=(...h)=>n(G)&&n(G)(...h)),onBlur:l[1]||(l[1]=(...h)=>n(Y)&&n(Y)(...h)),onChange:Ae,onKeydown:ze}),null,16,Bo),m(" suffix slot "),n(pt)?(g(),T("span",{key:1,class:x(n(c).e("suffix"))},[O("span",{class:x(n(c).e("suffix-inner"))},[!n(X)||!n(ie)||!n(P)?(g(),T(de,{key:0},[Z(t.$slots,"suffix"),t.suffixIcon?(g(),j(n(D),{key:0,class:x(n(c).e("icon"))},{default:R(()=>[(g(),j(J(t.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),n(X)?(g(),j(n(D),{key:1,class:x([n(c).e("icon"),n(c).e("clear")]),onMousedown:Dt(n(Lt),["prevent"]),onClick:ke},{default:R(()=>[Nt(n(Rt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),n(ie)?(g(),j(n(D),{key:2,class:x([n(c).e("icon"),n(c).e("password")]),onClick:bt},{default:R(()=>[(g(),j(J(n(lt))))]),_:1},8,["class"])):m("v-if",!0),n(P)?(g(),T("span",{key:3,class:x(n(c).e("count"))},[O("span",{class:x(n(c).e("count-inner"))},Q(n(le))+" / "+Q(n(d).maxlength),3)],2)):m("v-if",!0),n(V)&&n(Ce)&&n(je)?(g(),j(n(D),{key:4,class:x([n(c).e("icon"),n(c).e("validateIcon"),n(c).is("loading",n(V)==="validating")])},{default:R(()=>[(g(),j(J(n(Ce))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),t.$slots.append?(g(),T("div",{key:1,class:x(n(c).be("group","append"))},[Z(t.$slots,"append")],2)):m("v-if",!0)],64)):(g(),T(de,{key:1},[m(" textarea "),O("textarea",fe({id:n(Se),ref_key:"textarea",ref:E,class:n(Te).e("inner")},n(d),{tabindex:t.tabindex,disabled:n(A),readonly:t.readonly,autocomplete:t.autocomplete,style:n(Ie),"aria-label":t.label,placeholder:t.placeholder,form:a.form,onCompositionstart:_e,onCompositionupdate:Pe,onCompositionend:$e,onInput:ue,onFocus:l[2]||(l[2]=(...h)=>n(G)&&n(G)(...h)),onBlur:l[3]||(l[3]=(...h)=>n(Y)&&n(Y)(...h)),onChange:Ae,onKeydown:ze}),null,16,No),n(P)?(g(),T("span",{key:0,style:Kt(Ee.value),class:x(n(c).e("count"))},Q(n(le))+" / "+Q(n(d).maxlength),7)):m("v-if",!0)],64))],16,Vo)),[[Bt,t.type!=="hidden"]])}});var Lo=Ht(Do,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Jo=Ut(Lo);var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function er(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function tr(e){if(e.__esModule)return e;var r=e.default;if(typeof r=="function"){var o=function a(){if(this instanceof a){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(r,s);return new i}return r.apply(this,arguments)};o.prototype=r.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(e).forEach(function(a){var s=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(o,a,s.get?s:{enumerable:!0,get:function(){return e[a]}})}),o}export{Zo as C,Jo as E,K as S,he as U,po as a,Qa as b,Qo as c,fo as d,Go as e,Ba as f,er as g,Wo as h,da as i,qo as j,Ja as k,tr as l,Qt as m,Ke as n,La as o,ia as p,Co as q,at as r,io as s,Xo as t,ta as u,Ua as v,Wa as w,Yo as x,Eo as y,_o as z};
