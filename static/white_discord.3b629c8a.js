import{X as B,aU as ke,af as ve,ag as re,bH as me,bC as de,d as Q,c3 as fe,c4 as _e,c5 as Ie,ai as pe,a8 as ge,ao as Le,r as k,c6 as ze,b9 as Ce,k as v,ab as ie,n as we,o as be,a as b,e as ce,f as u,w as I,b as w,l as d,u as a,s as ue,aA as Ee,q as L,ak as O,by as Te,c as x,F as J,bk as xe,bl as Ne,c7 as Oe,c8 as Se,aj as Re,c9 as Ae,ca as $e,m as Ve,y as Be,V as Me,a4 as G,T as Ye,av as Xe,al as ye,bJ as M,ae as V,cb as De,aw as he,bd as Fe,t as He,J as Pe,aG as je,Y as Ue,cc as We}from"../bundle.js";import{d as Ke}from"./debounce.f5a4c604.js";import{z as Ze}from"./el-input.1f6e577f.js";import{a as qe}from"./validator.895cccad.js";const Ge=(i,f)=>{if(!B||!i||!f)return!1;const o=i.getBoundingClientRect();let s;return f instanceof Element?s=f.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<s.bottom&&o.bottom>s.top&&o.right>s.left&&o.left<s.right};var Je="Expected a function";function le(i,f,o){var s=!0,y=!0;if(typeof i!="function")throw new TypeError(Je);return ke(o)&&(s="leading"in o?!!o.leading:s,y="trailing"in o?!!o.trailing:y),Ke(i,f,{leading:s,maxWait:f,trailing:y})}const Qe=ve({urlList:{type:re(Array),default:()=>me([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),et={close:()=>!0,switch:i=>de(i)},tt=["src"],at=Q({name:"ElImageViewer"}),nt=Q({...at,props:Qe,emits:et,setup(i,{expose:f,emit:o}){const s=i,y={CONTAIN:{name:"contain",icon:fe(_e)},ORIGINAL:{name:"original",icon:fe(Ie)}},{t:z}=pe(),r=ge("image-viewer"),{nextZIndex:ee}=Le(),S=k(),N=k([]),C=ze(),_=k(!0),m=k(s.initialIndex),p=Ce(y.CONTAIN),c=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=v(()=>{const{urlList:e}=s;return e.length<=1}),A=v(()=>m.value===0),H=v(()=>m.value===s.urlList.length-1),te=v(()=>s.urlList[m.value]),ae=v(()=>[r.e("btn"),r.e("prev"),r.is("disabled",!s.infinite&&A.value)]),X=v(()=>[r.e("btn"),r.e("next"),r.is("disabled",!s.infinite&&H.value)]),ne=v(()=>{const{scale:e,deg:n,offsetX:l,offsetY:g,enableTransition:E}=c.value;let h=l/e,T=g/e;switch(n%360){case 90:case-270:[h,T]=[T,-h];break;case 180:case-180:[h,T]=[-h,-T];break;case 270:case-90:[h,T]=[-T,h];break}const $={transform:`scale(${e}) rotate(${n}deg) translate(${h}px, ${T}px)`,transition:E?"transform .3s":""};return p.value.name===y.CONTAIN.name&&($.maxWidth=$.maxHeight="100%"),$}),P=v(()=>de(s.zIndex)?s.zIndex:ee());function R(){oe(),o("close")}function se(){const e=le(l=>{switch(l.code){case V.esc:s.closeOnPressEscape&&R();break;case V.space:K();break;case V.left:Z();break;case V.up:t("zoomIn");break;case V.right:q();break;case V.down:t("zoomOut");break}}),n=le(l=>{const g=l.deltaY||l.deltaX;t(g<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});C.run(()=>{M(document,"keydown",e),M(document,"wheel",n)})}function oe(){C.stop()}function j(){_.value=!1}function U(e){_.value=!1,e.target.alt=z("el.image.error")}function W(e){if(_.value||e.button!==0||!S.value)return;c.value.enableTransition=!1;const{offsetX:n,offsetY:l}=c.value,g=e.pageX,E=e.pageY,h=le($=>{c.value={...c.value,offsetX:n+$.pageX-g,offsetY:l+$.pageY-E}}),T=M(document,"mousemove",h);M(document,"mouseup",()=>{T()}),e.preventDefault()}function D(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function K(){if(_.value)return;const e=De(y),n=Object.values(y),l=p.value.name,E=(n.findIndex(h=>h.name===l)+1)%e.length;p.value=y[e[E]],D()}function F(e){const n=s.urlList.length;m.value=(e+n)%n}function Z(){A.value&&!s.infinite||F(m.value-1)}function q(){H.value&&!s.infinite||F(m.value+1)}function t(e,n={}){if(_.value)return;const{zoomRate:l,rotateDeg:g,enableTransition:E}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(e){case"zoomOut":c.value.scale>.2&&(c.value.scale=Number.parseFloat((c.value.scale/l).toFixed(3)));break;case"zoomIn":c.value.scale<7&&(c.value.scale=Number.parseFloat((c.value.scale*l).toFixed(3)));break;case"clockwise":c.value.deg+=g;break;case"anticlockwise":c.value.deg-=g;break}c.value.enableTransition=E}return ie(te,()=>{we(()=>{const e=N.value[0];e!=null&&e.complete||(_.value=!0)})}),ie(m,e=>{D(),o("switch",e)}),be(()=>{var e,n;se(),(n=(e=S.value)==null?void 0:e.focus)==null||n.call(e)}),f({setActiveItem:F}),(e,n)=>(b(),ce(Xe,{to:"body",disabled:!e.teleported},[u(Ye,{name:"viewer-fade",appear:""},{default:I(()=>[w("div",{ref_key:"wrapper",ref:S,tabindex:-1,class:d(a(r).e("wrapper")),style:ue({zIndex:a(P)})},[w("div",{class:d(a(r).e("mask")),onClick:n[0]||(n[0]=Ee(l=>e.hideOnClickModal&&R(),["self"]))},null,2),L(" CLOSE "),w("span",{class:d([a(r).e("btn"),a(r).e("close")]),onClick:R},[u(a(O),null,{default:I(()=>[u(a(Te))]),_:1})],2),L(" ARROW "),a(Y)?L("v-if",!0):(b(),x(J,{key:0},[w("span",{class:d(a(ae)),onClick:Z},[u(a(O),null,{default:I(()=>[u(a(xe))]),_:1})],2),w("span",{class:d(a(X)),onClick:q},[u(a(O),null,{default:I(()=>[u(a(Ne))]),_:1})],2)],64)),L(" ACTIONS "),w("div",{class:d([a(r).e("btn"),a(r).e("actions")])},[w("div",{class:d(a(r).e("actions__inner"))},[u(a(O),{onClick:n[1]||(n[1]=l=>t("zoomOut"))},{default:I(()=>[u(a(Oe))]),_:1}),u(a(O),{onClick:n[2]||(n[2]=l=>t("zoomIn"))},{default:I(()=>[u(a(Se))]),_:1}),w("i",{class:d(a(r).e("actions__divider"))},null,2),u(a(O),{onClick:K},{default:I(()=>[(b(),ce(Re(a(p).icon)))]),_:1}),w("i",{class:d(a(r).e("actions__divider"))},null,2),u(a(O),{onClick:n[3]||(n[3]=l=>t("anticlockwise"))},{default:I(()=>[u(a(Ae))]),_:1}),u(a(O),{onClick:n[4]||(n[4]=l=>t("clockwise"))},{default:I(()=>[u(a($e))]),_:1})],2)],2),L(" CANVAS "),w("div",{class:d(a(r).e("canvas"))},[(b(!0),x(J,null,Ve(e.urlList,(l,g)=>Be((b(),x("img",{ref_for:!0,ref:E=>N.value[g]=E,key:l,src:l,style:ue(a(ne)),class:d(a(r).e("img")),onLoad:j,onError:U,onMousedown:W},null,46,tt)),[[Me,g===m.value]])),128))],2),G(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var st=ye(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const ot=he(st),lt=ve({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:re([String,Object])},previewSrcList:{type:re(Array),default:()=>me([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),rt={load:i=>i instanceof Event,error:i=>i instanceof Event,switch:i=>de(i),close:()=>!0,show:()=>!0},it=["src","loading"],ct={key:0},ut=Q({name:"ElImage",inheritAttrs:!1}),dt=Q({...ut,props:lt,emits:rt,setup(i,{emit:f}){const o=i;let s="";const{t:y}=pe(),z=ge("image"),r=Fe(),ee=Ze(),S=k(),N=k(!1),C=k(!0),_=k(!1),m=k(),p=k(),c=B&&"loading"in HTMLImageElement.prototype;let Y,A;const H=v(()=>[z.e("inner"),X.value&&z.e("preview"),C.value&&z.is("loading")]),te=v(()=>r.style),ae=v(()=>{const{fit:t}=o;return B&&t?{objectFit:t}:{}}),X=v(()=>{const{previewSrcList:t}=o;return Array.isArray(t)&&t.length>0}),ne=v(()=>{const{previewSrcList:t,initialIndex:e}=o;let n=e;return e>t.length-1&&(n=0),n}),P=v(()=>o.loading==="eager"?!1:!c&&o.loading==="lazy"||o.lazy),R=()=>{B&&(C.value=!0,N.value=!1,S.value=o.src)};function se(t){C.value=!1,N.value=!1,f("load",t)}function oe(t){C.value=!1,N.value=!0,f("error",t)}function j(){Ge(m.value,p.value)&&(R(),D())}const U=We(j,200,!0);async function W(){var t;if(!B)return;await we();const{scrollContainer:e}=o;je(e)?p.value=e:Ue(e)&&e!==""?p.value=(t=document.querySelector(e))!=null?t:void 0:m.value&&(p.value=qe(m.value)),p.value&&(Y=M(p,"scroll",U),setTimeout(()=>j(),100))}function D(){!B||!p.value||!U||(Y==null||Y(),p.value=void 0)}function K(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function F(){X.value&&(A=M("wheel",K,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",_.value=!0,f("show"))}function Z(){A==null||A(),document.body.style.overflow=s,_.value=!1,f("close")}function q(t){f("switch",t)}return ie(()=>o.src,()=>{P.value?(C.value=!0,N.value=!1,D(),W()):R()}),be(()=>{P.value?W():R()}),(t,e)=>(b(),x("div",{ref_key:"container",ref:m,class:d([a(z).b(),t.$attrs.class]),style:ue(a(te))},[N.value?G(t.$slots,"error",{key:0},()=>[w("div",{class:d(a(z).e("error"))},He(a(y)("el.image.error")),3)]):(b(),x(J,{key:1},[S.value!==void 0?(b(),x("img",Pe({key:0},a(ee),{src:S.value,loading:t.loading,style:a(ae),class:a(H),onClick:F,onLoad:se,onError:oe}),null,16,it)):L("v-if",!0),C.value?(b(),x("div",{key:1,class:d(a(z).e("wrapper"))},[G(t.$slots,"placeholder",{},()=>[w("div",{class:d(a(z).e("placeholder"))},null,2)])],2)):L("v-if",!0)],64)),a(X)?(b(),x(J,{key:2},[_.value?(b(),ce(a(ot),{key:0,"z-index":t.zIndex,"initial-index":a(ne),infinite:t.infinite,"zoom-rate":t.zoomRate,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:Z,onSwitch:q},{default:I(()=>[t.$slots.viewer?(b(),x("div",ct,[G(t.$slots,"viewer")])):L("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):L("v-if",!0)],64)):L("v-if",!0)],6))}});var ft=ye(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const wt=he(ft);const bt=""+globalThis.__publicAssetsURL("images/public/default_avatar.png"),yt=""+globalThis.__publicAssetsURL("images/missions/white_x.png?v=2%60"),ht=""+globalThis.__publicAssetsURL("images/missions/white_discord.png?v=3%60");export{wt as E,bt as _,yt as a,ht as b};
