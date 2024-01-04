import{u as y,j as e,r as d,S as _,d as l}from"./index-b7a5549d.js";import{d as $,e as q,f as G}from"./Layout-f2a02bb8.js";import{u as b}from"./SettingServices-7f7a0dde.js";import{u as J,C}from"./themeServices-4cc20a2b.js";import{u as K}from"./useFilter-d1e31a51.js";import{D as Q}from"./EditDeleteButton-4d689b9f.js";import{B as V,C as W}from"./BulkActionDrawer-18b446ee.js";import{P as X}from"./PageTitle-800b2fce.js";import{M as Y}from"./DrawerButton-b9b70d23.js";import{C as Z,a as ee}from"./CategoryTable-b5a3a8c6.js";import{U as le}from"./UploadManyTwo-9d63c683.js";import{a as se}from"./index.prod-0cf84bad.js";import{T as ae}from"./TableLoading-3bafd42b.js";import{N as te}from"./NotFound-aab8acd4.js";import"./iconBase-4887631a.js";import"./httpService-f80adca5.js";import"./browser-f394fd76.js";import"./index-3dfa6e17.js";import"./toast-03090123.js";import"./useUtilsFunction-3ede5aec.js";import"./spinner-f39505bc.js";import"./AdminServices-03b8c083.js";import"./CustomerServices-5f73556c.js";import"./LanguageServices-74d9215e.js";import"./CurrencyServices-a77033de.js";import"./Tooltip-1cb23d0e.js";import"./ParentCategory-85c82093.js";import"./index.esm-3774b945.js";import"./LabelArea-03aa42f0.js";import"./SwitchToggle-f89c729e.js";import"./TextAreaCom-18b804f0.js";import"./SelectLanguageTwo-f9b2e648.js";import"./InputArea-b4aac65e.js";import"./Uploader-bbb6c4da.js";import"./tslib.es6-1fe07526.js";import"./useTranslationValue-bbbde44d.js";import"./exportFromJSON-59a1cb7c.js";const re=({title:n,handleProcess:r,processOption:a})=>{const{t:i}=y();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mb-3",children:e.jsxs("div",{className:"flex flex-wrap items-center float-right",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:n}),e.jsx(se,{onChange:r,checked:a,className:"react-switch md:ml-0 ml-3",uncheckedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"left",alignItems:"center",height:"100%",fontSize:12,color:"white",paddingRight:50,paddingTop:1,marginLeft:-40,whiteSpace:"nowrap"},children:i("ParentsOnly")}),width:115,height:28,handleDiameter:26,offColor:"#0e9f6e",onColor:"#2F855A",checkedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:12,color:"white",paddingLeft:8,paddingTop:1},children:i("All")})})]})})})},$e=()=>{var j,u;const{toggleDrawer:n,lang:r}=d.useContext(_),{data:a,loading:i,error:h}=b(C.getAllCategory),{data:N}=b(C.getAllCategories),{handleDeleteMany:T,allId:g,handleUpdateMany:k,serviceId:S}=J(),{t:s}=y(),{handleSubmitCategory:p,categoryRef:f,totalResults:v,resultsPerPage:A,dataTable:F,serviceData:c,handleChangePage:B,filename:D,isDisabled:I,setCategoryType:P,handleSelectFile:M,handleUploadMultiple:R,handleRemoveSelectFile:E}=K((j=a[0])!=null&&j.children?(u=a[0])==null?void 0:u.children:a),[m,U]=d.useState(!1),[t,o]=d.useState([]),[x,L]=d.useState(!1),z=()=>{var w;U(!m),o((w=a[0])==null?void 0:w.children.map(H=>H._id)),m&&o([])},O=()=>{P(""),f.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:s("Category")}),e.jsx(Q,{ids:g,setIsCheck:o}),e.jsx(V,{ids:g,title:"Categories",lang:r,data:a,isCheck:t}),e.jsx(Y,{children:e.jsx(Z,{id:S,data:a,lang:r})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(l.CardBody,{className:"",children:e.jsxs("form",{onSubmit:p,className:"py-3  grid gap-4 lg:gap-6 xl:gap-6  xl:flex",children:[e.jsx("div",{className:"flex justify-start w-1/2 xl:w-1/2 md:w-full",children:e.jsx(le,{title:"Categories",exportData:N,filename:D,isDisabled:I,handleSelectFile:M,handleUploadMultiple:R,handleRemoveSelectFile:E})}),e.jsxs("div",{className:"lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0",children:[e.jsx("div",{className:"w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0",children:e.jsxs(l.Button,{disabled:t.length<1,onClick:()=>k(t),className:"w-full rounded-md h-12 text-gray-600 btn-gray",children:[e.jsx("span",{className:"mr-2",children:e.jsx($,{})}),s("BulkAction")]})}),e.jsx("div",{className:"w-full md:w-32 lg:w-32 xl:w-32  mr-3 mb-3 lg:mb-0",children:e.jsxs(l.Button,{disabled:t.length<1,onClick:()=>T(t),className:"w-full rounded-md h-12 bg-red-500 disabled  btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(q,{})}),s("Delete")]})}),e.jsx("div",{className:"w-full md:w-48 lg:w-48 xl:w-48",children:e.jsxs(l.Button,{onClick:n,className:"rounded-md h-12 w-full",children:[e.jsx("span",{className:"mr-2",children:e.jsx(G,{})}),s("AddCategory")]})})]})]})})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(l.CardBody,{children:e.jsxs("form",{onSubmit:p,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(l.Input,{ref:f,type:"search",placeholder:s("SearchCategory")})}),e.jsxs("div",{className:"flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})}),e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{layout:"outline",onClick:O,type:"reset",className:"px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]})]})})}),e.jsx(re,{title:" ",handleProcess:L,processOption:x,name:x}),i?e.jsx(ae,{row:12,col:6,width:190,height:20}):h?e.jsx("span",{className:"text-center mx-auto text-red-500",children:h}):(c==null?void 0:c.length)!==0?e.jsxs(l.TableContainer,{className:"mb-8",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:e.jsx(W,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:z,isChecked:m})}),e.jsx(l.TableCell,{children:s("catIdTbl")}),e.jsx(l.TableCell,{children:s("catIconTbl")}),e.jsx(l.TableCell,{children:s("CatTbName")}),e.jsx(l.TableCell,{children:"Sub Title"}),e.jsx(l.TableCell,{className:"text-center",children:s("catPublishedTbl")}),e.jsx(l.TableCell,{className:"text-right",children:s("catActionsTbl")})]})}),e.jsx(ee,{data:a,lang:r,isCheck:t,categories:F,setIsCheck:o,showChild:x})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:v,resultsPerPage:A,onChange:B,label:"Table navigation"})})]}):e.jsx(te,{title:"Sorry, There are no categories right now."})]})};export{$e as default};