import{j as e,d as t,L as m}from"./index-c6d5a983.js";import{E as o}from"./index.esm-ef1c889f.js";import{u as d}from"./useLoginSubmit-fc91f2c1.js";import{L as c}from"./LabelArea-e308e497.js";import{I as n}from"./InputArea-79d62ba9.js";import{I as x,a as h}from"./forgot-password-office-dark-8bc730dc.js";import"./AdminServices-cefbe1ea.js";import"./httpService-0fa6dd26.js";import"./toast-24126cdf.js";const y=()=>{const{onSubmit:r,register:a,handleSubmit:s,errors:l,loading:i}=d();return e.jsx("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:e.jsx("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:e.jsxs("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[e.jsxs("div",{className:"h-32 md:h-auto md:w-1/2",children:[e.jsx("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:x,alt:"Office"}),e.jsx("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:h,alt:"Office"})]}),e.jsx("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Forgot password"}),e.jsxs("form",{onSubmit:s(r),children:[e.jsx(c,{label:"Email"}),e.jsx(n,{register:a,label:"Email",name:"verifyEmail",type:"email",placeholder:"john@doe.com"}),e.jsx(o,{errorName:l.verifyEmail}),e.jsx(t.Button,{disabled:i,type:"submit",block:!0,className:"mt-4 h-12",children:"Recover password"})]}),e.jsx("p",{className:"mt-4",children:e.jsx(m,{className:"text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:underline",to:"/login",children:"Already have an account? Login"})})]})})]})})})};export{y as default};