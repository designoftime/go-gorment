import{r as d,S as oe,u as de,j as e,d as x,L as y}from"./index-f7c619e6.js";import{S as ce,I as me}from"./Layout-7bfcbf44.js";import{C as pe,S as xe}from"./BulkActionDrawer-cb234d25.js";import{C as q,T as ee,D as ge,u as ue,M as he}from"./DrawerButton-aaf0c012.js";import{D as je,E as be}from"./EditDeleteButton-b0a5a69b.js";import{T as fe}from"./ParentCategory-d0b61d8a.js";import{a as $,n as se}from"./toast-13fdf8d2.js";import{u as Ne,E as V}from"./index.esm-31ff2d2e.js";import{I as Q}from"./InputArea-f1a3289f.js";import{L as j}from"./LabelArea-180e7a9c.js";import{T as ve,S as Se}from"./TextAreaCom-7c715f25.js";import{U as B}from"./Uploader-188f1691.js";import{u as Te}from"./useTranslationValue-fa84a1d7.js";import{u as ae}from"./useUtilsFunction-8e49f675.js";const Ce=(i,g)=>{const{isDrawerOpen:r,closeDrawer:b,setIsUpdate:c,lang:I}=d.useContext(oe),[N,v]=d.useState({}),[T,_]=d.useState(""),[D,u]=d.useState(""),[A,s]=d.useState(""),[f,C]=d.useState(""),[p,z]=d.useState(""),[H,K]=d.useState(""),[P,F]=d.useState([]),[t,E]=d.useState(I),[O,w]=d.useState(!0),[L,k]=d.useState(""),[M,U]=d.useState(!1),{handlerTextTranslateHandler:R}=Te(),{register:l,handleSubmit:h,setValue:a,clearErrors:m,reset:Y,formState:{errors:le}}=Ne(),re=async({name:o,description:n,background_color:ne,text_color:ie})=>{var W,X;try{U(!0);const S=await R(o,t),G=await R(n,t),Z={name:{[t]:o,...S},description:{[t]:n||"",...G},background_color:{[t]:ne||"",...G},text_color:{[t]:ie||"",...G},parentId:T||void 0,parentName:L||"Home",icon:D,icon1:A,icon2:f,icon3:p,icon4:H,status:O?"show":"hide",lang:t};if(i){const J=await q.updateCategory(i,Z);c(!0),U(!1),se(J.message),b(),Y()}else{const J=await q.addCategory(Z);c(!0),U(!1),se(J.message),b()}}catch(S){U(!1),$(S?(X=(W=S==null?void 0:S.response)==null?void 0:W.data)==null?void 0:X.message:S==null?void 0:S.message),b()}},te=o=>{E(o),Object.keys(N).length>0&&(a("name",N.name[o||"en"]),a("description",N.description[o||"en"]),a("background_color",N.background_color[o||"en"]),a("text_color",N.text_color[o||"en"]))};return d.useEffect(()=>{var o;if(!r){v({}),a("name"),a("parentId"),a("parentName"),a("description"),a("background_color"),a("text_color"),a("icon"),a("icon1"),a("icon2"),a("icon3"),a("icon4"),u(""),w(!0),m("name"),m("parentId"),m("parentName"),m("description"),m("background_color"),m("text_color"),k("Home"),E(I),a("language",t),g!==void 0&&((o=g[0])==null?void 0:o._id)!==void 0&&_(g[0]._id);return}i&&(async()=>{try{const n=await q.getCategoryById(i);n&&(v(n),a("name",n.name[t||"en"]),a("description",n.description[t||"en"]),a("language",t),a("parentId",n.parentId),a("parentName",n.parentName),k(n.parentName),_(n.parentId),u(n.icon),w(n.status==="show"))}catch(n){$(n?n.response.data.message:n.message)}})()},[i,a,r,t,m,g,I]),{register:l,handleSubmit:h,onSubmit:re,errors:le,imageUrl:D,imageUrl1:A,imageUrl2:f,imageUrl3:p,imageUrl4:H,setImageUrl:u,setImageUrl1:s,setImageUrl2:C,setImageUrl3:z,setImageUrl4:K,children:P,setChildren:F,published:O,setPublished:w,checked:T,setChecked:_,isSubmitting:M,selectCategoryName:L,setSelectCategoryName:k,handleSelectLanguage:te}},Ue=({id:i,data:g})=>{const{t:r}=de(),{checked:b,register:c,onSubmit:I,handleSubmit:N,errors:v,imageUrl:T,imageUrl1:_,imageUrl2:D,imageUrl3:u,imageUrl4:A,setImageUrl:s,setImageUrl1:f,setImageUrl2:C,setImageUrl3:p,setImageUrl4:z,published:H,setPublished:K,setChecked:P,selectCategoryName:F,setSelectCategoryName:t,handleSelectLanguage:E,isSubmitting:O}=Ce(i,g),{showingTranslateValue:w}=ae(),L=`
  .rc-tree-child-tree {
    display: hidden;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`,k={motionName:"node-motion",motionAppear:!1,onAppearStart:l=>({height:0}),onAppearActive:l=>({height:l.scrollHeight}),onLeaveStart:l=>({height:l.offsetHeight}),onLeaveActive:()=>({height:0})},M=l=>{let h=[];for(let a of l)h.push({title:w(a.name),key:a._id,children:a.children.length>0&&M(a.children)});return h},U=(l,h)=>{var a;return l._id===h?l:(a=l==null?void 0:l.children)==null?void 0:a.reduce((m,Y)=>m??U(Y,h),void 0)},R=async l=>{if(l!==void 0)if(i){const h=await q.getCategoryById(l);if(i===l)return $("This can't be select as a parent category!");if(i===h.parentId)return $("This can't be select as a parent category!");{if(l===void 0)return;P(l);const a=g[0],m=U(a,l);t(w(m==null?void 0:m.name))}}else{if(l===void 0)return;P(l);const h=g[0],a=U(h,l);t(w(a==null?void 0:a.name))}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:i?e.jsx(ee,{register:c,handleSelectLanguage:E,title:r("UpdateCategory"),description:r("UpdateCategoryDescription")}):e.jsx(ee,{register:c,handleSelectLanguage:E,title:r("AddCategoryTitle"),description:r("AddCategoryDescription")})}),e.jsx(ce,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:N(I),children:[e.jsxs("div",{className:"p-6 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:r("Name")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Q,{register:c,label:"Category title",name:"name",type:"text",placeholder:r("ParentCategoryPlaceholder")}),e.jsx(V,{errorName:v.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:r("Description")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(ve,{required:!0,register:c,label:"Description",name:"description",type:"text",placeholder:"Category Description"}),e.jsx(V,{errorName:v.description})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:r("ParentCategory")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4 relative",children:[e.jsx(x.Input,{readOnly:!0,...c("parent",{required:!1}),name:"parent",value:F||"Home",placeholder:r("ParentCategory"),type:"text"}),e.jsxs("div",{className:"draggable-demo capitalize",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:L}}),e.jsx(fe,{expandAction:"click",treeData:M(g),selectedKeys:[b],onSelect:l=>R(l[0]),motion:k,animation:"slide-up"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:r("CategoryIcon")}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(B,{imageUrl:T,setImageUrl:s,folder:"category"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:"Testimonial One"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(B,{imageUrl:_,setImageUrl:f,folder:"category"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:"Testimonial Two"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(B,{imageUrl:D,setImageUrl:C,folder:"category"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:"Testimonial Three"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(B,{imageUrl:u,setImageUrl:p,folder:"category"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:"Testimonial Four"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(B,{imageUrl:A,setImageUrl:z,folder:"category"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:"Background Color"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Q,{register:c,label:"Background Color",name:"background_color",type:"text",placeholder:"Background Color"}),e.jsx(V,{errorName:v.background_color})]})]})," ",e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:"Text Color"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Q,{register:c,label:"Text Color",name:"text_color",type:"text",placeholder:"Text Color"}),e.jsx(V,{errorName:v.text_color})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(j,{label:r("Published")}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(Se,{handleProcess:K,processOption:H})})]})]}),e.jsx(ge,{id:i,title:"Category",isSubmitting:O})]})})]})},Re=({data:i,lang:g,isCheck:r,categories:b,setIsCheck:c,useParamId:I,showChild:N})=>{const{title:v,serviceId:T,handleModalOpen:_,handleUpdate:D}=ue(),{showingTranslateValue:u}=ae(),A=s=>{const{id:f,checked:C}=s.target;c([...r,f]),C||c(r.filter(p=>p!==f))};return console.log(b,i),e.jsxs(e.Fragment,{children:[(r==null?void 0:r.length)<1&&e.jsx(je,{useParamId:I,id:T,title:v}),e.jsx(he,{children:e.jsx(Ue,{id:T,data:i,lang:g})}),e.jsx(x.TableBody,{children:b==null?void 0:b.map(s=>{var f,C;return e.jsxs(x.TableRow,{children:[e.jsx(x.TableCell,{children:e.jsx(pe,{type:"checkbox",name:"category",id:s._id,handleClick:A,isChecked:r==null?void 0:r.includes(s._id)})}),e.jsx(x.TableCell,{className:"font-semibold uppercase text-xs",children:(f=s==null?void 0:s._id)==null?void 0:f.substring(20,24)}),e.jsx(x.TableCell,{children:s!=null&&s.icon?e.jsx(x.Avatar,{className:"hidden mr-3 md:block bg-gray-50 p-1",src:s==null?void 0:s.icon,alt:s==null?void 0:s.parent}):e.jsx(x.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product",className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none"})}),e.jsx(x.TableCell,{className:"font-medium text-sm ",children:(s==null?void 0:s.children.length)>0?e.jsxs(y,{to:`/categories/${s==null?void 0:s._id}`,className:"text-blue-700",children:[u(s==null?void 0:s.name),e.jsx(e.Fragment,{children:N&&e.jsxs(e.Fragment,{children:[" ",e.jsx("div",{className:"pl-2 ",children:(C=s==null?void 0:s.children)==null?void 0:C.map(p=>e.jsx("div",{children:e.jsx(y,{to:`/categories/${p==null?void 0:p._id}`,className:"text-blue-700",children:e.jsxs("div",{className:"flex text-xs items-center  text-blue-800",children:[e.jsx("span",{className:" text-xs text-gray-500 pr-1",children:e.jsx(me,{})}),e.jsx("span",{className:"text-gray-500",children:u(p.name)})]})})},p._id))})]})})]}):e.jsx("span",{children:u(s==null?void 0:s.name)})}),e.jsx(x.TableCell,{className:"text-sm",children:u(s==null?void 0:s.description)}),e.jsx(x.TableCell,{className:"text-center",children:e.jsx(xe,{id:s._id,category:!0,status:s.status})}),e.jsx(x.TableCell,{children:e.jsx(be,{id:s==null?void 0:s._id,parent:s,isCheck:r,children:s==null?void 0:s.children,handleUpdate:D,handleModalOpen:_,title:u(s==null?void 0:s.name)})})]},s._id)})})]})};export{Ue as C,Re as a};
