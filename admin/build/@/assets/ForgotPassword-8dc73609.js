import{j as e,d as t,L as m}from"./index-78e5a7da.js";import{E as o}from"./index.esm-8bbccf9c.js";import{u as d}from"./useLoginSubmit-2920682b.js";import{L as c}from"./LabelArea-b34538a6.js";import{I as n}from"./InputArea-0ed39232.js";import{I as x,a as h}from"./forgot-password-office-dark-8bc730dc.js";import"./AdminServices-9b402829.js";import"./httpService-1eb58bf1.js";import"./toast-2b207009.js";const y=()=>{const{onSubmit:r,register:a,handleSubmit:s,errors:l,loading:i}=d();return e.jsx("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:e.jsx("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:e.jsxs("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[e.jsxs("div",{className:"h-32 md:h-auto md:w-1/2",children:[e.jsx("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:x,alt:"Office"}),e.jsx("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:h,alt:"Office"})]}),e.jsx("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Forgot password"}),e.jsxs("form",{onSubmit:s(r),children:[e.jsx(c,{label:"Email"}),e.jsx(n,{register:a,label:"Email",name:"verifyEmail",type:"email",placeholder:"john@doe.com"}),e.jsx(o,{errorName:l.verifyEmail}),e.jsx(t.Button,{disabled:i,type:"submit",block:!0,className:"mt-4 h-12",children:"Recover password"})]}),e.jsx("p",{className:"mt-4",children:e.jsx(m,{className:"text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:underline",to:"/login",children:"Already have an account? Login"})})]})})]})})})};export{y as default};