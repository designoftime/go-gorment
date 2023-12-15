import{j as e,d as s,n as d,u as o}from"./index-54596add.js";import{j as h}from"./Layout-a33231f7.js";import{u as j}from"./SettingServices-bfb4ba3e.js";import{O as u}from"./OrderServices-a24d24d8.js";import{u as b}from"./useFilter-69c72f22.js";import{P as p}from"./PageTitle-29e0922a.js";import{L as C}from"./Loading-68f85cc3.js";import{S as T}from"./Status-eb0c8d9f.js";import{u as g}from"./useUtilsFunction-d4cebd2f.js";import{S as f}from"./SelectStatus-cc649f95.js";import"./iconBase-02f11cdd.js";import"./httpService-9723377f.js";import"./browser-74f97612.js";import"./index-59113629.js";import"./toast-f90a3672.js";const N=({orders:n})=>{const{showDateTimeFormat:t,getNumberTwo:r,currency:a}=g();return e.jsx(e.Fragment,{children:e.jsx(s.TableBody,{children:n==null?void 0:n.map(l=>{var i,m,c;return e.jsxs(s.TableRow,{children:[e.jsx(s.TableCell,{children:e.jsx("span",{className:"font-semibold uppercase text-xs",children:(i=l==null?void 0:l._id)==null?void 0:i.substring(20,24)})}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm",children:t(l.createdAt)})}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm",children:(m=l==null?void 0:l.user_info)==null?void 0:m.address})}),e.jsxs(s.TableCell,{children:[" ",e.jsx("span",{className:"text-sm",children:(c=l.user_info)==null?void 0:c.contact})," "]}),e.jsx(s.TableCell,{children:e.jsx("span",{className:"text-sm font-semibold",children:l.paymentMethod})}),e.jsxs(s.TableCell,{children:[" ",e.jsxs("span",{className:"text-sm font-semibold",children:[a,r(l.total)]})," "]}),e.jsx(s.TableCell,{className:"text-center",children:e.jsx(T,{status:l.status})}),e.jsx(s.TableCell,{className:"text-right",children:e.jsx(f,{id:l._id,order:l})})]},l._id)})})})},M=()=>{const{id:n}=d(),{t}=o(),{data:r,loading:a,error:l}=j(()=>u.getOrderCustomer(n)),{handleChangePage:i,totalResults:m,resultsPerPage:c,dataTable:x}=b(r);return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:t("CustomerOrderList")}),a&&e.jsx(C,{loading:a}),!l&&!a&&x.length===0&&e.jsx("div",{className:"w-full bg-white rounded-md dark:bg-gray-800",children:e.jsxs("div",{className:"p-8 text-center",children:[e.jsx("span",{className:"flex justify-center my-30 text-red-500 font-semibold text-6xl",children:e.jsx(h,{})}),e.jsx("h2",{className:"font-medium text-base mt-4 text-gray-600",children:t("CustomerOrderEmpty")})]})}),r.length>0&&!l&&!a?e.jsxs(s.TableContainer,{className:"mb-8",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsxs(s.TableCell,{children:[" ",t("CustomerOrderId")," "]}),e.jsx(s.TableCell,{children:t("CustomerOrderTime")}),e.jsx(s.TableCell,{children:t("CustomerShippingAddress")}),e.jsxs(s.TableCell,{children:[t("Phone")," "]}),e.jsxs(s.TableCell,{children:[t("CustomerOrderMethod")," "]}),e.jsx(s.TableCell,{children:t("Amount")}),e.jsxs(s.TableCell,{className:"text-center",children:[" ",t("CustomerOrderStatus")," "]}),e.jsx(s.TableCell,{className:"text-center",children:t("CustomerOrderAction")})]})}),e.jsx(N,{orders:x})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:m,resultsPerPage:c,onChange:i,label:"Table navigation"})})]}):null]})};export{M as default};