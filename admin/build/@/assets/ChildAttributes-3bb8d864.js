import{j as e,d as s,m as U,r as u,S as H,L as O}from"./index-44cd13fd.js";import{S as z,g as q,f as G,d as J,e as K}from"./Layout-0c8d7242.js";import{T as A,D as Q,u as k,M as B,A as C}from"./DrawerButton-d3b8ec77.js";import{u as F}from"./useUtilsFunction-dcb53077.js";import{C as P,S as W,B as X}from"./BulkActionDrawer-3b4836cf.js";import{D as E,E as Y}from"./EditDeleteButton-5b32cd5c.js";import{E as S}from"./index.esm-d7484bfd.js";import{I as Z}from"./InputArea-0fe34b41.js";import{L as v}from"./LabelArea-ddb41641.js";import{S as $}from"./TextAreaCom-654a3858.js";import{u as ee}from"./useAttributeSubmit-92a8b62e.js";import{L as se}from"./Loading-cea321c7.js";import{N as le}from"./NotFound-676b1ccb.js";import{P as ae}from"./PageTitle-9f5b4842.js";import{u as D}from"./SettingServices-c4bcc4f6.js";import{u as re}from"./useFilter-39bdc44e.js";import"./iconBase-f80fec82.js";import"./httpService-8e200f96.js";import"./SelectLanguageTwo-0a040e80.js";import"./LanguageServices-e7d06802.js";import"./spinner-f39505bc.js";import"./index-2fb4d4d4.js";import"./index.prod-3752d1eb.js";import"./CurrencyServices-add7f648.js";import"./toast-89903da9.js";import"./ParentCategory-e3692792.js";import"./AdminServices-23b14afa.js";import"./Tooltip-c30f7462.js";import"./useTranslationValue-df7a9a70.js";import"./browser-a9c4b404.js";const I=({id:t})=>{const{handleSubmit:j,onSubmits:r,register:i,errors:d,published:x,isSubmitting:o,setPublished:a,handleSelectLanguage:n}=ee(t);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:t?e.jsx(A,{register:i,handleSelectLanguage:n,title:"Add/Update Attribute Valu",description:"Add your attribute values and necessary information from here"}):e.jsx(A,{register:i,handleSelectLanguage:n,title:"Add/Update Attribute Values",description:"Add your attribute values and necessary information from here"})}),e.jsx(z,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:j(r),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center",children:[e.jsx(v,{label:"Display Name"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Z,{register:i,label:"Display Name",name:"name",type:"text",placeholder:"Color or Size or Dimension or Material or Fabric"}),e.jsx(S,{errorName:d.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center",children:[e.jsx(v,{label:"Published"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx($,{handleProcess:a,processOption:x}),e.jsx(S,{errorName:d.published})]})]})]}),e.jsx(Q,{id:t,title:"Attribute",isSubmitting:o})]})})]})},te=({att:t,loading:j,isCheck:r,setIsCheck:i,childAttributes:d})=>{const{title:x,serviceId:o,handleModalOpen:a,handleUpdate:n}=k(),{showingTranslateValue:h}=F(),f=l=>{const{id:c,checked:m}=l.target;i([...r,c]),m||i(r.filter(N=>N!==c))};return e.jsxs(e.Fragment,{children:[r.length<1&&e.jsx(E,{id:o,title:x}),r.length<2&&e.jsx(B,{children:e.jsx(I,{id:o})}),e.jsx(s.TableBody,{children:d==null?void 0:d.map((l,c)=>{var m;return e.jsxs(s.TableRow,{children:[e.jsx(s.TableCell,{children:e.jsx(P,{type:"checkbox",name:"child-attribute",id:l._id,handleClick:f,isChecked:r==null?void 0:r.includes(l._id)})}),e.jsx(s.TableCell,{className:"font-semibold uppercase text-xs",children:(m=l==null?void 0:l._id)==null?void 0:m.substring(20,24)}),e.jsx(s.TableCell,{className:"font-medium text-sm",children:h(l==null?void 0:l.name)}),e.jsx(s.TableCell,{className:"font-medium text-sm",children:t==null?void 0:t.option}),e.jsx(s.TableCell,{className:"text-center",children:e.jsx(W,{id:l._id,status:l.status})}),e.jsx(s.TableCell,{children:e.jsx(Y,{id:l._id,isCheck:r,setIsCheck:i,handleUpdate:n,handleModalOpen:a,title:h(l.name)})})]},c+1)})})]})},Le=()=>{let{id:t}=U();const{handleDeleteMany:j,allId:r,serviceId:i,handleUpdateMany:d}=k(),{toggleDrawer:x,lang:o}=u.useContext(H),{data:a,loading:n,error:h}=D(()=>C.getAttributeById(t)),{showingTranslateValue:f}=F(),{data:l}=D(()=>C.getAllAttributes({type:"attribute",option:"Dropdown",option1:"Radio"})),{totalResults:c,resultsPerPage:m,dataTable:N,serviceData:w,handleChangePage:V}=re(a==null?void 0:a.variants),[y,L]=u.useState(!1),[p,g]=u.useState([]),[M,_]=u.useState([]),R=()=>{var b;L(!y),g((b=a==null?void 0:a.variants)==null?void 0:b.map(T=>T._id)),y&&g([])};return u.useEffect(()=>{const b=l==null?void 0:l.filter(T=>T._id!==t);_(b)},[l,t]),e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:"Attributes Values"}),e.jsx(E,{ids:r,setIsCheck:g,title:"Selected Attribute Value(s)"}),e.jsx(X,{attributes:M,ids:r,title:"Attribute Value(s)",childId:t}),e.jsx(B,{children:e.jsx(I,{id:i})}),e.jsx("div",{className:"flex items-center pb-4",children:e.jsxs("ol",{className:"flex items-center w-full overflow-hidden font-serif",children:[e.jsx("li",{className:"text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold",children:e.jsx(O,{className:"text-blue-700",to:"/attributes",children:"Attributes"})}),e.jsxs("span",{className:"flex items-center font-serif dark:text-gray-400",children:[e.jsxs("li",{className:"text-sm mt-[1px]",children:[" ",e.jsx(q,{})," "]}),e.jsx("li",{className:"text-sm pl-1 font-semibold dark:text-gray-400",children:!n&&f(a==null?void 0:a.title)})]})]})}),e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsxs(s.CardBody,{className:"py-3 grid gap-4 justify-end lg:gap-4 xl:gap-4 md:flex xl:flex",children:[e.jsx("div",{className:"flex justify-end items-end",children:e.jsxs(s.Button,{onClick:x,className:"rounded-md h-12",children:[e.jsx("span",{className:"mr-3",children:e.jsx(G,{})}),"Add Value"]})}),e.jsx("div",{className:"w-full md:w-24 lg:w-24 xl:w-24",children:e.jsxs(s.Button,{disabled:p.length<1,onClick:()=>d(p),className:"w-full rounded-md h-12",children:[e.jsx(J,{}),"Bulk Action"]})}),e.jsxs(s.Button,{disabled:p.length<1,onClick:()=>j(p),className:"rounded-md h-12 bg-red-500",children:[e.jsx("span",{className:"mr-3",children:e.jsx(K,{})}),"Delete"]})]})}),n?e.jsx(se,{loading:n}):h?e.jsx("span",{className:"text-center mx-auto text-red-500",children:h}):(w==null?void 0:w.length)!==0?e.jsxs(s.TableContainer,{className:"mb-8",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:e.jsx(P,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:R,isChecked:y})}),e.jsx(s.TableCell,{children:"Id"}),e.jsx(s.TableCell,{children:"Name"}),e.jsx(s.TableCell,{children:"Type"}),e.jsx(s.TableCell,{className:"text-center",children:"Status"}),e.jsx(s.TableCell,{className:"text-right",children:"Actions"})]})}),e.jsx(te,{att:a,lang:o,loading:n,isCheck:p,setIsCheck:g,childAttributes:N})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:c,resultsPerPage:m,onChange:V,label:"Table navigation"})})]}):e.jsx(le,{title:"Sorry, There are no attributes right now."})]})};export{Le as default};
