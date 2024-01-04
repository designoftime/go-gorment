import{e as R,r as l,S as U}from"./index-78e5a7da.js";import{u as _}from"./index.esm-8bbccf9c.js";import{u as $,A as m}from"./themeServices-015c1982.js";import{a as p,n as S}from"./toast-2b207009.js";import{u as z}from"./useTranslationValue-697c0d2d.js";const W=n=>{const o=R(),{isDrawerOpen:x,closeDrawer:c,setIsUpdate:g,lang:y}=l.useContext(U),[u,d]=l.useState([]),[s,C]=l.useState(y),[w,I]=l.useState({}),[v,V]=l.useState(!1),[O,i]=l.useState(!1),{setServiceId:h}=$(),{handlerTextTranslateHandler:A}=z();let D=[];(async()=>{for(let t=0;t<u.length;t++){const a=await A(u[t],s);D=[...D,{name:{[s]:u[t],...a}}]}})();const{handleSubmit:L,register:j,setValue:r,clearErrors:b,formState:{errors:B}}=_(),k=async({title:t,name:a,option:e})=>{try{if(i(!0),!n&&u.length===0){p("Minimum one value is required for add attribute!");return}const f=await A(t,s),P=await A(a,s),E={title:{[s]:t,...f},name:{[s]:a,...P},variants:D,option:e,type:"attribute",lang:s};if(n){const T=await m.updateAttributes(n,E);g(!0),i(!1),S(T.message),c(),h()}else{const T=await m.addAttribute(E);g(!0),i(!1),S(T.message),c(),h()}}catch(f){p(f?f.response.data.message:f.message),c(),i(!1),h()}},q=async({name:t})=>{try{if(i(!0),n){const a=await m.updateChildAttributes({ids:o.pathname.split("/")[2],id:n},{name:{[s]:t},status:v?"show":"hide"});g(!0),i(!1),S(a.message),c()}else{const a=await m.addChildAttribute(o.pathname.split("/")[2],{name:{[s]:t},status:v?"show":"hide"});g(!0),i(!1),S(a.message),c()}}catch(a){p(a?a.response.data.message:a.message),c(),i(!1),h()}},F=t=>{C(t),Object.keys(w).length>0&&(r("title",w.title[t||"en"]),r("name",w.name[t||"en"]))},H=t=>{d([...u.filter((a,e)=>e!==t)])},M=t=>{t.preventDefault(),t.target.value!==""&&(d([...u,t.target.value]),t.target.value="")};return l.useEffect(()=>{if(!x){I({}),r("title"),r("name"),r("option"),b("title"),b("name"),b("option"),d([]),C(y),r("language",s);return}o.pathname==="/attributes"&&n?(async()=>{var t,a;try{const e=await m.getAttributeById(n);e&&(I(e),r("title",e.title[s||"en"]),r("name",e.name[s||"en"]),r("option",e.option))}catch(e){p(e?(a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message:e.message)}})():o.pathname===`/attributes/${o.pathname.split("/")[2]}`&&(async()=>{var t,a;try{const e=await m.getChildAttributeById({id:o.pathname.split("/")[2],ids:n});e&&(r("name",e.name[s||"en"]),V(e.status==="show"))}catch(e){p(e?(a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message:e.message)}})()},[b,n,x,r,o,s,y]),{handleSubmit:L,onSubmits:q,onSubmit:k,register:j,errors:B,variants:u,setVariants:d,addVariant:M,removeVariant:H,published:v,setPublished:V,isSubmitting:O,handleSelectLanguage:F}};export{W as u};