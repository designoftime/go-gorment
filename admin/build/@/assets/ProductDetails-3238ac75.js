import{j as e,d as l,n as v,u as B,r as f,S as F}from"./index-a570a048.js";import{u as A}from"./SettingServices-ea8fcb26.js";import{u as E}from"./useFilter-722fb9a8.js";import{u as I,P as O}from"./ProductDrawer-85f2e196.js";import{u as _,M as D,P as L}from"./DrawerButton-17fa8afa.js";import{u as C}from"./useUtilsFunction-f9c584e4.js";import{L as R}from"./Loading-b5f3121b.js";import{P as k}from"./PageTitle-e9c10df6.js";import"./httpService-4a0740c6.js";import"./browser-e1857a42.js";import"./index-363e7a54.js";import"./toast-8e649487.js";import"./ParentCategory-01d193bf.js";import"./Layout-fb1fc381.js";import"./iconBase-54cc2ecb.js";import"./index.esm-42363675.js";import"./InputArea-035be543.js";import"./LabelArea-fe2d9bcb.js";import"./InputValue-131b19ab.js";import"./useTranslationValue-d311f340.js";import"./LanguageServices-e3f068e8.js";import"./Uploader-3bd40f60.js";import"./tslib.es6-1fe07526.js";import"./Tooltip-d8706374.js";import"./index.prod-74c901b9.js";import"./SelectLanguageTwo-c3bde70e.js";import"./spinner-f39505bc.js";const V=({variants:o,variantTitle:r})=>{const{showingTranslateValue:h,currency:c,getNumberTwo:a}=C();return e.jsx(e.Fragment,{children:e.jsx(l.TableBody,{children:o==null?void 0:o.map((t,m)=>{var s;return e.jsxs(l.TableRow,{children:[e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:m+1}),e.jsx(l.TableCell,{children:e.jsx("div",{className:"flex items-center",children:t.image?e.jsx(l.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:t.image,alt:"product"}):e.jsx(l.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product",className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none"})})}),e.jsx(l.TableCell,{children:e.jsxs("div",{className:"flex flex-col text-sm",children:[e.jsx("span",{children:(s=r==null?void 0:r.map(i=>{var p,u;const d=(p=i==null?void 0:i.variants)==null?void 0:p.filter(x=>(x==null?void 0:x.name)!=="All"),n=(u=d==null?void 0:d.find(x=>x._id===t[i==null?void 0:i._id]))==null?void 0:u.name;return n===void 0?n==null?void 0:n.en:h(n)}))==null?void 0:s.filter(Boolean).join(" ")}),t.productId&&e.jsxs("span",{className:"text-xs text-gray-500",children:["(",t.productId,")"]})]})}),e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:t.sku}),e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:t.barcode}),e.jsxs(l.TableCell,{className:"font-semibold uppercase text-xs",children:[c,a(t.originalPrice)]}),e.jsxs(l.TableCell,{className:"font-semibold uppercase text-xs",children:[c,a(t.price)]}),e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:t.quantity})]},m+1)})})})},pe=()=>{var b,y,N,T;const{id:o}=v(),{t:r}=B(),{handleUpdate:h}=_(),{attribue:c}=I(o),[a,t]=f.useState([]),{lang:m}=f.useContext(F),{data:s,loading:i}=A(()=>L.getProductById(o)),{currency:d,showingTranslateValue:n,getNumberTwo:p}=C(),{handleChangePage:u,totalResults:x,resultsPerPage:P,dataTable:w}=E(s==null?void 0:s.variants);return f.useEffect(()=>{if(!i){const g=Object.keys(Object.assign({},...s==null?void 0:s.variants)),j=c==null?void 0:c.filter(S=>g.includes(S._id));t(j)}},[c,s==null?void 0:s.variants,i,m]),console.log("product",s),e.jsxs(e.Fragment,{children:[e.jsx(D,{product:!0,children:e.jsx(O,{id:o})}),e.jsx(k,{children:r("ProductDetails")}),i?e.jsx(R,{loading:i}):e.jsx("div",{className:"inline-block overflow-y-auto h-full align-middle transition-all transform",children:e.jsxs("div",{className:"flex flex-col lg:flex-row md:flex-row w-full overflow-hidden",children:[e.jsx("div",{className:"flex-shrink-0 flex items-center justify-center h-auto",children:s!=null&&s.image[0]?e.jsx("img",{src:s==null?void 0:s.image[0],alt:"product",className:"h-64 w-64"}):e.jsx("img",{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"})}),e.jsxs("div",{className:"w-full flex flex-col p-5 md:p-8 text-left",children:[e.jsxs("div",{className:"mb-5 block ",children:[e.jsx("div",{className:"font-serif font-semibold py-1 text-sm",children:e.jsxs("p",{className:"text-sm text-gray-500 pr-4",children:[r("Status"),":"," ",s.status==="show"?e.jsx("span",{className:"text-emerald-400",children:r("ThisProductShowing")}):e.jsx("span",{className:"text-red-400",children:r("ThisProductHidden")})]})}),e.jsx("h2",{className:"text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400",children:n(s==null?void 0:s.title)}),e.jsxs("p",{className:"uppercase font-serif font-medium text-gray-500 dark:text-gray-400 text-sm",children:[r("Sku")," :"," ",e.jsx("span",{className:"font-bold text-gray-500 dark:text-gray-500",children:s==null?void 0:s.sku})]})]}),e.jsx("div",{className:"font-serif product-price font-bold dark:text-gray-400",children:e.jsxs("span",{className:"inline-block text-2xl",children:[d,p((b=s==null?void 0:s.prices)==null?void 0:b.price),((y=s==null?void 0:s.prices)==null?void 0:y.discount)>=1&&e.jsxs("del",{className:"text-gray-400 dark:text-gray-500 text-lg pl-2",children:[d,p((N=s==null?void 0:s.prices)==null?void 0:N.originalPrice)]})]})}),e.jsxs("div",{className:"mb-3",children:[(s==null?void 0:s.stock)<=0?e.jsxs(l.Badge,{type:"danger",children:[e.jsx("span",{className:"font-bold",children:r("StockOut")})," "]}):e.jsxs(l.Badge,{type:"success",children:[" ",e.jsx("span",{className:"font-bold",children:r("InStock")})]}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium pl-4",children:[r("Quantity"),": ",s==null?void 0:s.stock]})]}),e.jsx("p",{className:"text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7",children:n(s==null?void 0:s.description)}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsxs("p",{className:"font-serif font-semibold py-1 text-gray-500 text-sm",children:[e.jsxs("span",{className:"text-gray-700 dark:text-gray-400",children:[r("Category"),":"," "]})," ",n((T=s==null?void 0:s.category)==null?void 0:T.name)]}),e.jsx("div",{className:"flex flex-row",children:JSON.parse(s==null?void 0:s.tag).map((g,j)=>e.jsx("span",{className:"bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300",children:g},j+1))})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{onClick:()=>h(o),className:"cursor-pointer leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 ",children:r("EditProduct")})})]})]})}),(s==null?void 0:s.isCombination)&&(a==null?void 0:a.length)>0&&!i&&e.jsxs(e.Fragment,{children:[e.jsx(k,{children:r("ProductVariantList")}),e.jsxs(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:r("SR")}),e.jsx(l.TableCell,{children:r("Image")}),e.jsx(l.TableCell,{children:r("Combination")}),e.jsx(l.TableCell,{children:r("Sku")}),e.jsx(l.TableCell,{children:r("Barcode")}),e.jsx(l.TableCell,{children:r("OrginalPrice")}),e.jsx(l.TableCell,{children:r("SalePrice")}),e.jsx(l.TableCell,{children:r("Quantity")})]})}),e.jsx(V,{lang:m,variants:w,currency:d,variantTitle:a})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:x,resultsPerPage:P,onChange:u,label:"Product Page Navigation"})})]})]})]})};export{pe as default};