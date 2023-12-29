import{r as o,S as I,u as M,j as e,d as r}from"./index-7ddd1067.js";import{N as $}from"./NotFound-1f4b4f81.js";import{P as L}from"./PageTitle-fcd80b23.js";import{u as V}from"./SettingServices-0472aa5a.js";import{u as q}from"./useFilter-52169072.js";import{R as S,D as O,E as z}from"./EditDeleteButton-5c5ce7f9.js";import{I as _}from"./InputAreaTwo-634aa40c.js";import{u as J,E as y}from"./index.esm-d5c207c9.js";import{a as N,n as Z}from"./toast-5f3e84aa.js";import{T as G}from"./TextAreaCom-c9ff722b.js";import{u as H}from"./themeServices-4edfd558.js";import{T as K}from"./TableLoading-60a5b725.js";import"./index-5f1602ba.js";import"./httpService-dfa47f40.js";import"./browser-af2ce1bd.js";import"./useUtilsFunction-b0620b49.js";import"./Layout-56213aca.js";import"./iconBase-57cd5f28.js";import"./spinner-f39505bc.js";import"./AdminServices-69cf4601.js";import"./LanguageServices-72f8190f.js";import"./CurrencyServices-0581390c.js";import"./Tooltip-99d7e3f9.js";const Q=a=>{const[h,m]=o.useState(""),[u,c]=o.useState(!1),{closeDrawer:x,setIsUpdate:p}=o.useContext(I),{register:v,handleSubmit:b,setValue:n,formState:{errors:R}}=J(),k=async i=>{var d,t;try{const l={rating:i.review_rating,reviewTitle:i.review_title,review:i.review_description};if(a&&l.rating<=5){const j=await S.updateReviews(a,l);p(!0),Z(j.message),x()}else N("Rating must be less than or equal to 5.");c(!1)}catch(l){N(l?(t=(d=l==null?void 0:l.response)==null?void 0:d.data)==null?void 0:t.message:l.message),x()}};return o.useEffect(()=>{a&&(async()=>{var i,d;try{const t=await S.getReviewById(a);t&&(n("review_rating",t.data.rating),n("review_title",t.data.reviewTitle),n("review_description",t.data.review))}catch(t){N(t?(d=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:d.message:t.message)}})()},[a,n]),{register:v,handleSubmit:b,onSubmit:k,errors:R,setImageUrl:m,imageUrl:h,isSubmitting:u}},Ce=()=>{const{data:a,loading:h,error:m}=V(S.getAllReviews),{title:u,serviceId:c,handleModalOpen:x,handleUpdate:p}=H(),{toggleDrawer:v,isDrawerOpen:b}=o.useContext(I),{data:n}=a,{userRef:R,dataTable:k,serviceData:i,filename:d,isDisabled:t,setSearchUser:l,totalResults:j,resultsPerPage:U,handleSubmitUser:W,handleSelectFile:X,handleChangePage:E,handleUploadMultiple:Y,handleRemoveSelectFile:ee}=q(n),{t:g}=M(),{register:w,handleSubmit:F,onSubmit:A,errors:f,setImageUrl:se,imageUrl:ae,isSubmitting:te}=Q(c);return e.jsxs(e.Fragment,{children:[e.jsx(O,{id:c,title:u}),e.jsx(L,{children:"Customer Reviews"}),e.jsxs("div",{className:"flex-grow scrollbar-hide w-full max-h-full xl:px-10",children:[e.jsx("div",{className:"inline-flex md:text-base text-sm my-3 text-gray-500 dark:text-gray-400",children:e.jsx("strong",{children:" Manage All Customer Reviews"})}),e.jsx("hr",{className:"md:mb-12 mb-3"}),e.jsxs("p",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:[a.totalReviews," global ratings"]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsxs("a",{href:"#",className:"text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline",children:[a.fiveStar," star"]}),e.jsx("div",{style:{width:` ${a.fiveStar}px`},className:"h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700",children:e.jsx("div",{className:"h-5 bg-yellow-300 rounded"})})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsxs("a",{href:"#",className:"text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline",children:[a.fourStar," star"]}),e.jsx("div",{style:{width:` ${a.fourStar}px`},className:" h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700",children:e.jsx("div",{className:"h-5 bg-yellow-300 rounded"})})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsxs("a",{href:"#",className:"text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline",children:[a.threeStar," star"]}),e.jsx("div",{style:{width:` ${a.threeStar}px`},className:" h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700",children:e.jsx("div",{className:"h-5 bg-yellow-300 rounded"})})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsxs("a",{href:"#",className:"text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline",children:[a.twoStar," star"]}),e.jsx("div",{style:{width:` ${a.twoStar}px`},className:" h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700",children:e.jsx("div",{className:"h-5 bg-yellow-300 rounded"})})]}),e.jsxs("div",{className:"flex items-center mt-4 pb-8",children:[e.jsxs("a",{href:"#",className:"text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline",children:[a.oneStar," star"]}),e.jsx("div",{style:{width:` ${a.oneStar}px`},className:" h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700",children:e.jsx("div",{className:"h-5 bg-yellow-300 rounded"})})]}),h?e.jsx(K,{row:12,col:7,width:160,height:20}):m?e.jsx("span",{className:"text-center mx-auto text-red-500",children:m}):e.jsxs(r.TableContainer,{className:"mb-8",children:[e.jsx("div",{className:"grid  md:grid-cols-12 sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative",children:b?e.jsx("div",{className:"sm:col-span-4",children:e.jsx(r.Card,{children:e.jsx(r.CardBody,{children:e.jsxs("form",{onSubmit:F(A),children:[e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{className:"block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1",children:"Review Rating"}),e.jsx(_,{register:w,label:g("Review Rating"),name:"review_rating",minValue:1,maxValue:5,defaultValue:1,type:"number",placeholder:g("Review Rating")}),e.jsx(y,{errorName:f.review_rating})]}),e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{className:"block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1",children:"Review Title"}),e.jsx(_,{required:!0,register:w,label:g("Review Title"),name:"review_title",type:"text",placeholder:g("Review Title")}),e.jsx(y,{errorName:f.review_title})]}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx("label",{className:"block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1",children:"Review Description"}),e.jsx(G,{required:!0,register:w,label:"Review Description",name:"review_description",type:"text",placeholder:"Review Description"}),e.jsx(y,{errorName:f.review_description})]}),e.jsxs("div",{className:"flex justify-between ",children:[e.jsxs(r.Button,{className:"mt-6",type:"button",onClick:v,children:["Cancel"," "]}),e.jsx(r.Button,{className:"mt-6",type:"submit",children:"Update"})]})]})})})}):a.data.length>=0?a==null?void 0:a.data.map((s,B)=>{var T,C,D;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"sm:col-span-4",children:e.jsxs(r.Card,{children:[e.jsx("img",{className:"w-full h-64",src:(T=s==null?void 0:s.productId)==null?void 0:T.image[0]}),e.jsxs(r.CardBody,{children:[e.jsx("p",{className:"mb-4 font-semibold text-gray-600 dark:text-gray-300",children:(D=(C=s==null?void 0:s.productId)==null?void 0:C.title)==null?void 0:D.en}),e.jsxs("p",{className:" flex justify-between mb-4 font-semibold text-gray-600 dark:text-gray-300",children:[e.jsxs("div",{className:"flex justify-between gap-2",children:[e.jsx(r.Avatar,{size:"small",src:"https://cdn-icons-png.flaticon.com/512/1077/1077114.png",alt:"Judith"}),s==null?void 0:s.name,s.emailStatus&&e.jsx(r.Badge,{type:"success",children:"verified"})]}),e.jsxs("div",{className:"flex items-center",children:[Array(s==null?void 0:s.rating).fill(0).map((re,P)=>e.jsx(e.Fragment,{children:e.jsx("svg",{className:"w-4 h-4 text-yellow-300 me-1","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 20",children:e.jsx("path",{d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})},P)})),e.jsx("p",{className:"ms-1 text-sm font-medium text-gray-500 dark:text-gray-400",children:s==null?void 0:s.rating}),e.jsx("p",{className:"ms-1 text-sm font-medium text-gray-500 dark:text-gray-400",children:"out of"}),e.jsx("p",{className:"ms-1 text-sm font-medium text-gray-500 dark:text-gray-400",children:"5"})]})]}),e.jsxs("p",{className:"mb-4 font-semibold text-gray-400 dark:text-gray-200",children:['"',s==null?void 0:s.reviewTitle,'"']}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:['"',s.review,'"']}),e.jsx(z,{id:s==null?void 0:s._id,handleUpdate:p,handleModalOpen:x,title:s==null?void 0:s.reviewTitle})]})]})},B)})}):e.jsx($,{title:"Sorry, There are no customers reviews right now."})}),e.jsx(r.TableFooter,{children:e.jsx(r.Pagination,{totalResults:j,resultsPerPage:U,onChange:E,label:"Table navigation"})})]})]})]})};export{Ce as default};
