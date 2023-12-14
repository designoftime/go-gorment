import{m as R,r as o,S as U,u as H,j as e,L as k,d as s}from"./index-44cd13fd.js";import{g as V,f as $,d as q,e as z}from"./Layout-0c8d7242.js";import{a as G}from"./CategoryTable-fd5f1d34.js";import{B as J,C as K}from"./BulkActionDrawer-3b4836cf.js";import{D as O}from"./EditDeleteButton-5b32cd5c.js";import{L as Q}from"./Loading-cea321c7.js";import{N as W}from"./NotFound-676b1ccb.js";import{P as X}from"./PageTitle-9f5b4842.js";import{u as Y}from"./SettingServices-c4bcc4f6.js";import{u as Z}from"./useFilter-39bdc44e.js";import{u as ee,C as se}from"./DrawerButton-d3b8ec77.js";import{u as te}from"./useUtilsFunction-dcb53077.js";import"./iconBase-f80fec82.js";import"./ParentCategory-e3692792.js";import"./toast-89903da9.js";import"./index.esm-d7484bfd.js";import"./InputArea-0fe34b41.js";import"./LabelArea-ddb41641.js";import"./TextAreaCom-654a3858.js";import"./index.prod-3752d1eb.js";import"./Uploader-806334c4.js";import"./httpService-8e200f96.js";import"./tslib.es6-1fe07526.js";import"./index-2fb4d4d4.js";import"./useTranslationValue-df7a9a70.js";import"./LanguageServices-e7d06802.js";import"./CurrencyServices-add7f648.js";import"./spinner-f39505bc.js";import"./AdminServices-23b14afa.js";import"./Tooltip-c30f7462.js";import"./browser-a9c4b404.js";import"./SelectLanguageTwo-0a040e80.js";const Le=()=>{const{id:d}=R(),[c,A]=o.useState([]),[f,v]=o.useState([]),[j,P]=o.useState(!1),[m,x]=o.useState([]),{toggleDrawer:S,lang:b}=o.useContext(U),{handleDeleteMany:F,allId:T,handleUpdateMany:B}=ee(),{data:h,loading:p,error:N}=Y(se.getAllCategory),{showingTranslateValue:D}=te(),{t:r}=H();o.useEffect(()=>{var w,y;const l=(t,n,i=[])=>{for(let a of n){if(a._id===t)return i.concat(a);const g=l(t,a==null?void 0:a.children,i==null?void 0:i.concat(a));if(g)return g}},u=(t,n)=>{var i;return t._id===n?t:(i=t==null?void 0:t.children)==null?void 0:i.reduce((a,g)=>a??u(g,n),void 0)};if(!p){const t=u(h[0],d),n=l(d,(w=h[0])==null?void 0:w.children);((y=t==null?void 0:t.children)==null?void 0:y.length)>0&&(A(t==null?void 0:t.children),v(n))}},[d,p,h,c]);const{totalResults:I,resultsPerPage:E,dataTable:L,serviceData:C,handleChangePage:_}=Z(c),M=()=>{P(!j),x(c==null?void 0:c.map(l=>l._id)),j&&x([])};return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:r("CategoryPageTitle")}),e.jsx(O,{ids:T,setIsCheck:x,category:!0}),e.jsx(J,{ids:T,title:"Child Categories",lang:b,data:h,childId:d}),e.jsx("div",{className:"flex items-center pb-4",children:e.jsxs("ol",{className:"flex items-center w-full overflow-hidden font-serif",children:[e.jsx("li",{className:"text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold",children:e.jsx(k,{to:"/categories",children:r("Categories")})}),f==null?void 0:f.map((l,u)=>e.jsxs("span",{className:"flex items-center font-serif",children:[e.jsxs("li",{className:"text-sm mt-[1px]",children:[" ",e.jsx(V,{})," "]}),e.jsx("li",{className:"text-sm pl-1 transition duration-200 ease-in cursor-pointer text-blue-700 hover:text-emerald-500 font-semibold ",children:e.jsx(k,{to:`/categories/${l._id}`,children:D(l==null?void 0:l.name)})})]},u+1))]})}),e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsxs("div",{className:"flex justify-end items-end",children:[e.jsxs(s.Button,{onClick:S,className:"rounded-md h-12",children:[e.jsx("span",{className:"mr-3",children:e.jsx($,{})}),r("AddCategory")]}),e.jsx("div",{className:"ml-3 w-full md:w-24 lg:w-24 xl:w-24",children:e.jsxs(s.Button,{disabled:m.length<1,onClick:()=>B(m),className:"w-full rounded-md h-12",children:[e.jsx(q,{}),r("BulkAction")]})}),e.jsxs(s.Button,{disabled:m.length<1,onClick:()=>F(m),className:"ml-3 rounded-md h-12 bg-red-500",children:[e.jsx("span",{className:"mr-3",children:e.jsx(z,{})}),r("Delete")]})]})})}),p?e.jsx(Q,{loading:p}):N?e.jsx("span",{className:"text-center mx-auto text-red-500",children:N}):(C==null?void 0:C.length)!==0?e.jsxs(s.TableContainer,{className:"mb-8",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:e.jsx(K,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:M,isChecked:j})}),e.jsx(s.TableCell,{children:r("catIdTbl")}),e.jsx(s.TableCell,{children:r("catIconTbl")}),e.jsx(s.TableCell,{children:r("Name")}),e.jsx(s.TableCell,{children:r("Description")}),e.jsx(s.TableCell,{className:"text-center",children:r("catPublishedTbl")}),e.jsx(s.TableCell,{className:"text-right",children:r("catActionsTbl")})]})}),e.jsx(G,{categories:L,data:h,lang:b,isCheck:m,setIsCheck:x,useParamId:d})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:I,resultsPerPage:E,onChange:_,label:"Table navigation"})})]}):e.jsx(W,{title:"Sorry, There are no categories right now."})]})};export{Le as default};
