if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"@/assets/404-0919f78f.svg",revision:null},{url:"@/assets/404-7a6466ca.js",revision:null},{url:"@/assets/AdminServices-73cf91ba.js",revision:null},{url:"@/assets/Attributes-537a0140.js",revision:null},{url:"@/assets/browser-6ff82bd3.js",revision:null},{url:"@/assets/BulkActionDrawer-aec810b8.js",revision:null},{url:"@/assets/Category-bf778cb3.js",revision:null},{url:"@/assets/CategoryTable-1f64e0bd.js",revision:null},{url:"@/assets/ChildAttributes-5f5b20af.js",revision:null},{url:"@/assets/ChildCategory-f742cfa2.js",revision:null},{url:"@/assets/ComingSoon-99e35119.js",revision:null},{url:"@/assets/Coupons-9f015cb1.js",revision:null},{url:"@/assets/Currencies-e8031a73.js",revision:null},{url:"@/assets/CurrencyServices-e939909b.js",revision:null},{url:"@/assets/CustomerOrder-94cbc593.js",revision:null},{url:"@/assets/Customers-5eb4166b.js",revision:null},{url:"@/assets/Dashboard-0919612a.js",revision:null},{url:"@/assets/de-8f8ee105.svg",revision:null},{url:"@/assets/DrawerButton-17f96a60.js",revision:null},{url:"@/assets/EditDeleteButton-8f26ece5.js",revision:null},{url:"@/assets/EditProfile-401e06a3.js",revision:null},{url:"@/assets/exportFromJSON-59a1cb7c.js",revision:null},{url:"@/assets/forgot-password-office-dark-8bc730dc.js",revision:null},{url:"@/assets/ForgotPassword-423c8077.js",revision:null},{url:"@/assets/httpService-60e92197.js",revision:null},{url:"@/assets/iconBase-30d9bc8a.js",revision:null},{url:"@/assets/index-03fa0279.js",revision:null},{url:"@/assets/index-11a0b704.js",revision:null},{url:"@/assets/index-d1e14391.js",revision:null},{url:"@/assets/index-d60121a7.js",revision:null},{url:"@/assets/index.esm-027ad8f1.js",revision:null},{url:"@/assets/index.esm-2f5e57fc.js",revision:null},{url:"@/assets/index.prod-f9325a10.js",revision:null},{url:"@/assets/InputArea-90412ec5.js",revision:null},{url:"@/assets/InputAreaTwo-b159aeba.js",revision:null},{url:"@/assets/InputValue-450f639c.js",revision:null},{url:"@/assets/LabelArea-5c735f8e.js",revision:null},{url:"@/assets/Languages-84e532a6.js",revision:null},{url:"@/assets/LanguageServices-a1e999e2.js",revision:null},{url:"@/assets/Layout-5a04b572.js",revision:null},{url:"@/assets/Loading-cde7b610.js",revision:null},{url:"@/assets/Login-3a9dd5b8.js",revision:null},{url:"@/assets/logo-color-9777c72a.svg",revision:null},{url:"@/assets/logo-dark-a4d6f179.svg",revision:null},{url:"@/assets/no-result-62d6ac3a.svg",revision:null},{url:"@/assets/NotFound-65d00ebe.js",revision:null},{url:"@/assets/OrderInvoice-6b6ef30b.js",revision:null},{url:"@/assets/Orders-29b201bb.js",revision:null},{url:"@/assets/OrderServices-75b45961.js",revision:null},{url:"@/assets/OrderTable-0ac73ec8.js",revision:null},{url:"@/assets/PageTitle-76a4edf1.js",revision:null},{url:"@/assets/ParentCategory-4ebbc964.js",revision:null},{url:"@/assets/ProductDetails-c6aefd36.js",revision:null},{url:"@/assets/ProductDrawer-90d0606e.js",revision:null},{url:"@/assets/Products-8716bf92.js",revision:null},{url:"@/assets/progress-22dc7e07.svg",revision:null},{url:"@/assets/ResetPassword-0963cc3d.js",revision:null},{url:"@/assets/SelectLanguageTwo-587edb5b.js",revision:null},{url:"@/assets/SelectRole-63d405b5.js",revision:null},{url:"@/assets/SelectStatus-eadf1e74.js",revision:null},{url:"@/assets/Setting-3928e29f.js",revision:null},{url:"@/assets/SettingServices-3facf7d7.js",revision:null},{url:"@/assets/SignUp-f7c027f7.js",revision:null},{url:"@/assets/spinner-f39505bc.js",revision:null},{url:"@/assets/Staff-acabba7e.js",revision:null},{url:"@/assets/Status-a5496227.js",revision:null},{url:"@/assets/StoreHome-1a1f2419.js",revision:null},{url:"@/assets/TableLoading-73088f54.js",revision:null},{url:"@/assets/TextAreaCom-9fad0fa9.js",revision:null},{url:"@/assets/toast-d481aa53.js",revision:null},{url:"@/assets/Tooltip-24ab5e72.js",revision:null},{url:"@/assets/tslib.es6-1fe07526.js",revision:null},{url:"@/assets/Uploader-13ab0939.js",revision:null},{url:"@/assets/UploadManyTwo-a5fe2c17.js",revision:null},{url:"@/assets/us-e5db71b4.svg",revision:null},{url:"@/assets/useAttributeSubmit-c288a598.js",revision:null},{url:"@/assets/useFilter-f0d4e28c.js",revision:null},{url:"@/assets/useLoginSubmit-ff2a9f49.js",revision:null},{url:"@/assets/useStaffSubmit-4bb32f3c.js",revision:null},{url:"@/assets/useTranslationValue-114d49a3.js",revision:null},{url:"@/assets/useUtilsFunction-c001a999.js",revision:null},{url:"@/assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"dashtar-admin.png",revision:"bb31262c53ca8c0bda2595391cf117a2"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"index.html",revision:"de7757d96947031958a13d0bc9db35dd"},{url:"logo-dark.svg",revision:"6d56d5e9299f4a31803292ce79f4ff6b"},{url:"logo-light.svg",revision:"46c5c929a9c91b74433bd947534fd2a8"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"offline.html",revision:"cf1db1205b0d84f35f48de3c991e30d1"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"dashtar-admin.png",revision:"bb31262c53ca8c0bda2595391cf117a2"},{url:"favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"logo-dark.svg",revision:"6d56d5e9299f4a31803292ce79f4ff6b"},{url:"logo-light.svg",revision:"46c5c929a9c91b74433bd947534fd2a8"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"a4004b1e72c81fb11e246e75ae81953d"},{url:"offline.html",revision:"cf1db1205b0d84f35f48de3c991e30d1"},{url:"robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"manifest.webmanifest",revision:"e1cdb74c83d624a109cec0fd7499cdfa"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
