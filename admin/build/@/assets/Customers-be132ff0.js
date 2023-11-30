import{r as j,S as D,j as e,d as s,L as E,t as P,u as k}from"./index-1335bc53.js";import{U as F}from"./UploadManyTwo-5704d7fc.js";import{d as A}from"./index-f507cea5.js";import{S as I,h as U}from"./Layout-0a51b8da.js";import{T,D as M,u as B,M as R}from"./DrawerButton-3ffda894.js";import{C as w,D as L,E as Y}from"./EditDeleteButton-65e4ad94.js";import{T as _}from"./Tooltip-93fd1ea4.js";import{u as q,E as u}from"./index.esm-c21e54b9.js";import{I as b}from"./InputArea-96a36b5f.js";import{L as f}from"./LabelArea-04bc4a8b.js";import{a as v,n as O}from"./toast-96a71eb1.js";import{T as V}from"./TableLoading-580c3b65.js";import{N as H}from"./NotFound-35992a63.js";import{P as J}from"./PageTitle-57dd9514.js";import{u as Z}from"./SettingServices-5c21999b.js";import{u as $}from"./useFilter-8f41bbb3.js";import"./exportFromJSON-59a1cb7c.js";import"./iconBase-2a642b10.js";import"./spinner-f39505bc.js";import"./httpService-1e0b915e.js";import"./SelectLanguageTwo-6d55d2b6.js";import"./LanguageServices-260d4ad7.js";import"./AdminServices-8fc05990.js";import"./CurrencyServices-54ecfec4.js";import"./browser-947e9f5d.js";import"./useUtilsFunction-0dc2cf9c.js";const z=r=>{const[i,m]=j.useState(""),[c,t]=j.useState(!1),{closeDrawer:a,setIsUpdate:h}=j.useContext(D),{register:C,handleSubmit:y,setValue:x,formState:{errors:N}}=q(),g=async n=>{var p,l;try{t(!0);const d={name:n.name,email:n.email,phone:n.phone,address:n.address};if(r){const o=await w.updateCustomer(r,d);h(!0),O(o.message),a()}t(!1)}catch(d){v(d?(l=(p=d==null?void 0:d.response)==null?void 0:p.data)==null?void 0:l.message:d.message),a()}};return j.useEffect(()=>{r&&(async()=>{var n,p;try{const l=await w.getCustomerById(r);l&&(x("name",l.name),x("phone",l.phone),x("email",l.email),x("address",l.address))}catch(l){v(l?(p=(n=l==null?void 0:l.response)==null?void 0:n.data)==null?void 0:p.message:l.message)}})()},[r,x]),{register:C,handleSubmit:y,onSubmit:g,errors:N,setImageUrl:m,imageUrl:i,isSubmitting:c}},G=({id:r})=>{const{register:i,handleSubmit:m,onSubmit:c,errors:t,isSubmitting:a}=z(r);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:r?e.jsx(T,{title:"Update Customer",description:"Update your Customer necessary information from here"}):e.jsx(T,{title:"Add Customer",description:"Add your Customer necessary information from here"})}),e.jsx(I,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:m(c),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(f,{label:"Name"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:i,label:"Name",name:"name",type:"text",placeholder:"Name"}),e.jsx(u,{errorName:t.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(f,{label:"Email"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:i,label:"Email",name:"email",type:"email",placeholder:"Email"}),e.jsx(u,{errorName:t.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(f,{label:"Phone"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{required:!0,register:i,label:"Phone",name:"phone",type:"text",placeholder:"Phone"}),e.jsx(u,{errorName:t.phone})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(f,{label:"Address"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{required:!0,register:i,label:"Address",name:"address",type:"text",placeholder:"Address"}),e.jsx(u,{errorName:t.address})]})]})]}),e.jsx(M,{id:r,title:"Customer",isSubmitting:a})]})})]})},K=({customers:r})=>{const{title:i,serviceId:m,handleModalOpen:c,handleUpdate:t}=B();return e.jsxs(e.Fragment,{children:[e.jsx(L,{id:m,title:i}),e.jsx(R,{children:e.jsx(G,{id:m})}),e.jsx(s.TableBody,{children:r==null?void 0:r.map(a=>{var h;return e.jsxs(s.TableRow,{children:[e.jsx(s.TableCell,{children:e.jsxs("span",{className:"font-semibold uppercase text-xs",children:[" ",(h=a==null?void 0:a._id)==null?void 0:h.substring(20,24)]})}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm",children:A(a.createdAt).format("MMM D, YYYY")})}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm",children:a.name})}),e.jsxs(s.TableCell,{children:[e.jsx("span",{className:"text-sm",children:a.email})," "]}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm font-medium",children:a.phone})}),e.jsx(s.TableCell,{children:e.jsxs("div",{className:"flex justify-end text-right",children:[e.jsxs("div",{className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600",children:[" ",e.jsx(E,{to:`/customer-order/${a._id}`,children:e.jsx(_,{id:"view",Icon:U,title:P("ViewOrder"),bgColor:"#34D399"})})]}),e.jsx(Y,{title:a.name,id:a._id,handleUpdate:t,handleModalOpen:c})]})})]},a._id)})})]})},we=()=>{const{data:r,loading:i,error:m}=Z(w.getAllCustomers),{userRef:c,dataTable:t,serviceData:a,filename:h,isDisabled:C,setSearchUser:y,totalResults:x,resultsPerPage:N,handleSubmitUser:g,handleSelectFile:n,handleChangePage:p,handleUploadMultiple:l,handleRemoveSelectFile:d}=$(r),{t:o}=k(),S=()=>{y(""),c.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:o("CustomersPage")}),e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsx("form",{onSubmit:g,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:e.jsx("div",{className:"items-center",children:e.jsx(F,{title:"Customers",exportData:r,filename:h,isDisabled:C,handleSelectFile:n,handleUploadMultiple:l,handleRemoveSelectFile:d})})})})}),e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsxs("form",{onSubmit:g,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(s.Input,{ref:c,type:"search",name:"search",placeholder:o("CustomersPageSearchPlaceholder")}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(s.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})}),e.jsx("div",{className:"w-full mx-1",children:e.jsx(s.Button,{layout:"outline",onClick:S,type:"reset",className:"px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]})]})})}),i?e.jsx(V,{row:12,col:6,width:190,height:20}):m?e.jsx("span",{className:"text-center mx-auto text-red-500",children:m}):(a==null?void 0:a.length)!==0?e.jsxs(s.TableContainer,{className:"mb-8",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:o("CustomersId")}),e.jsx(s.TableCell,{children:o("CustomersJoiningDate")}),e.jsx(s.TableCell,{children:o("CustomersName")}),e.jsx(s.TableCell,{children:o("CustomersEmail")}),e.jsx(s.TableCell,{children:o("CustomersPhone")}),e.jsx(s.TableCell,{className:"text-right",children:o("CustomersActions")})]})}),e.jsx(K,{customers:t})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:x,resultsPerPage:N,onChange:p,label:"Table navigation"})})]}):e.jsx(H,{title:"Sorry, There are no customers right now."})]})};export{we as default};
