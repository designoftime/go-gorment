import{j as e,u as c,d as x,L as i}from"./index-98fd535f.js";import{I as u,a as h}from"./index.esm-c06a36d9.js";import{E as m}from"./index.esm-67973827.js";import{L as n}from"./LabelArea-77568c9d.js";import{I as d}from"./InputArea-acaab33d.js";import{u as f}from"./useLoginSubmit-fa523018.js";import{s as g}from"./spinner-f39505bc.js";import"./iconBase-6a015158.js";import"./AdminServices-47c0ce87.js";import"./httpService-32635d4a.js";import"./toast-c2632e3f.js";const p="/@/assets/login-office-60da650f.jpeg",j="/@/assets/login-office-60da650f.jpeg",b=({type:s,onClick:a,className:t,disabled:r})=>e.jsxs("button",{type:s,onClick:a,disabled:r,className:`${t} opacity-50 cursor-not-allowed text-white text-sm h-12 font-semibold align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 focus:outline-none`,children:[e.jsx("img",{src:g,alt:"Loading",width:20,height:10}),e.jsx("span",{className:"font-serif ml-1 font-light text-sm text-white",children:"Processing"})]}),A=()=>{const{t:s}=c(),{onSubmit:a,register:t,handleSubmit:r,errors:l,loading:o}=f();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:e.jsx("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:e.jsxs("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[e.jsxs("div",{className:"h-32 md:h-auto md:w-1/2",children:[e.jsx("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:p,alt:"Office"}),e.jsx("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:j,alt:"Office"})]}),e.jsx("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:"Login"}),e.jsxs("form",{onSubmit:r(a),children:[e.jsx(n,{label:"Email"}),e.jsx(d,{register:t,defaultValue:"admin@gmail.com",label:"Email",name:"email",type:"email",autoComplete:"username",placeholder:"john@doe.com"}),e.jsx(m,{errorName:l.email}),e.jsx("div",{className:"mt-6"}),e.jsx(n,{label:"Password"}),e.jsx(d,{register:t,defaultValue:"12345678",label:"Password",name:"password",type:"password",autocomplete:"current-password",placeholder:"***************"}),e.jsx(m,{errorName:l.password}),o?e.jsx(b,{disabled:o,type:"submit",className:"bg-emerald-600 rounded-md mt-4 h-12 w-full",to:"/dashboard"}):e.jsx(x.Button,{disabled:o,type:"submit",className:"mt-4 h-12 w-full",to:"/dashboard",children:s("LoginTitle")}),e.jsx("hr",{className:"my-10"}),e.jsxs("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2 md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2",children:[e.jsx(u,{className:"w-4 h-4 mr-2"})," ",e.jsxs("span",{className:"ml-2",children:[" ",s("LoginWithFacebook")," "]})]}),e.jsxs("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2  md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full",children:[e.jsx(h,{className:"w-4 h-4 mr-2"})," ",e.jsx("span",{className:"ml-2",children:s("LoginWithGoogle")})]})]}),e.jsx("p",{className:"mt-4",children:e.jsx(i,{className:"text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:underline",to:"/forgot-password",children:s("ForgotPassword")})}),e.jsx("p",{className:"mt-1",children:e.jsx(i,{className:"text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:underline",to:"/signup",children:s("CreateAccountTitle")})})]})})]})})})})};export{A as default};