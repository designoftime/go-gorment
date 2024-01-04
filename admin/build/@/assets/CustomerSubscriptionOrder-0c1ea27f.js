import{r as x,S as C,j as s,d as t,m as T,u as g}from"./index-cfea1030.js";import{j as f}from"./Layout-fc599ef4.js";import{u as y}from"./SettingServices-0485a3fd.js";import{u as N}from"./useFilter-265e0d27.js";import{P as S}from"./PageTitle-a8ea07c8.js";import{L as v}from"./Loading-b1fc8d78.js";import{C as o}from"./CustomerServices-832e13cf.js";import{S as I}from"./Status-9e77745a.js";import{u as P}from"./useUtilsFunction-ff5dab0d.js";import{n as E,a as F}from"./toast-409cb233.js";import"./iconBase-91d4f96a.js";import"./httpService-a0bb7019.js";import"./browser-8997366e.js";import"./index-bf4b3711.js";const w=({subscriptionId:i,order:n})=>{const{setIsUpdate:c}=x.useContext(C),a=e=>{o.updateCustomerSub({subscriptionId:e.target.value}).then(l=>{E(l.message),c(!0)}).catch(l=>F(l.message))};return s.jsx(s.Fragment,{children:s.jsxs(t.Select,{onChange:e=>a(e),className:"h-8",children:[s.jsx("option",{value:"status",defaultValue:!0,hidden:!0,children:n==null?void 0:n.status}),s.jsx("option",{defaultValue:(n==null?void 0:n.status)==="Inactive",value:i,children:"Inactive"})]})})},O=({orders:i})=>{const{showDateTimeFormat:n,getNumberTwo:c,currency:a}=P();return s.jsx(s.Fragment,{children:s.jsx(t.TableBody,{children:i==null?void 0:i.map(e=>{var l,m,u;return s.jsxs(t.TableRow,{children:[s.jsx(t.TableCell,{children:s.jsx("span",{className:"font-semibold uppercase text-xs",children:(l=e==null?void 0:e._id)==null?void 0:l.substring(20,24)})}),s.jsx(t.TableCell,{children:s.jsx("span",{className:"text-sm",children:(u=(m=e==null?void 0:e.product)==null?void 0:m.title)==null?void 0:u.en})}),s.jsx(t.TableCell,{children:s.jsx("span",{className:"text-sm",children:e==null?void 0:e.attribute})}),s.jsxs(t.TableCell,{children:[" ",s.jsx("span",{className:"text-sm",children:e==null?void 0:e.quantity})," "]}),s.jsx(t.TableCell,{children:s.jsx("span",{className:"text-sm font-semibold",children:e.subscription_duration})}),s.jsxs(t.TableCell,{children:[s.jsxs("span",{className:"text-sm font-semibold",children:[a,c(e.subscription_price)]})," "]}),s.jsx(t.TableCell,{className:"text-center",children:s.jsx(I,{status:e.status})}),s.jsx(t.TableCell,{className:"text-center",children:s.jsx(w,{subscriptionId:e._id,order:e})})]},e._id)})})})},G=()=>{const[i,n]=x.useState([]),{id:c}=T(),{t:a}=g();x.useEffect(()=>{(async()=>{var d,j;try{if(c){const r=await o.getCustomerById(c);n(r.subscriptionType)}}catch(r){notifyError(r?(j=(d=r==null?void 0:r.response)==null?void 0:d.data)==null?void 0:j.message:r.message)}})()},[c,n,o]);const{data:e,loading:l,error:m}=y(()=>i),{handleChangePage:u,totalResults:b,resultsPerPage:p,dataTable:h}=N(e);return s.jsxs(s.Fragment,{children:[s.jsx(S,{children:a("Customer Subscription List")}),l&&s.jsx(v,{loading:l}),!m&&!l&&h.length===0&&s.jsx("div",{className:"w-full bg-white rounded-md dark:bg-gray-800",children:s.jsxs("div",{className:"p-8 text-center",children:[s.jsx("span",{className:"flex justify-center my-30 text-red-500 font-semibold text-6xl",children:s.jsx(f,{})}),s.jsx("h2",{className:"font-medium text-base mt-4 text-gray-600",children:a("CustomerOrderEmpty")})]})}),e.length>0&&!m&&!l?s.jsxs(t.TableContainer,{className:"mb-8",children:[s.jsxs(t.Table,{children:[s.jsx(t.TableHeader,{children:s.jsxs("tr",{children:[s.jsxs(t.TableCell,{children:[" ",a("CustomerOrderId")," "]}),s.jsx(t.TableCell,{children:a("Product Title")}),s.jsx(t.TableCell,{children:a("Attribute")}),s.jsxs(t.TableCell,{children:[a("Quantity")," "]}),s.jsxs(t.TableCell,{children:[a("Duration")," "]}),s.jsx(t.TableCell,{children:a("Amount")}),s.jsxs(t.TableCell,{className:"text-center",children:[" ",a("CustomerOrderStatus")," "]}),s.jsx(t.TableCell,{className:"text-center",children:a("CustomerOrderAction")})]})}),s.jsx(O,{orders:h})]}),s.jsx(t.TableFooter,{children:s.jsx(t.Pagination,{totalResults:b,resultsPerPage:p,onChange:u,label:"Table navigation"})})]}):null]})};export{G as default};