import{g as X,r as V,h as I,P as h,j as p,u as re,A as ne,d as oe}from"./index-1335bc53.js";import{u as ae}from"./useStaffSubmit-7545e326.js";import{o as ie}from"./index-7ca70503.js";import{L as j}from"./LabelArea-04bc4a8b.js";import{U as se}from"./Uploader-afd0161c.js";import{I as F}from"./InputArea-96a36b5f.js";import{E as _}from"./index.esm-c21e54b9.js";import{S as le}from"./SelectRole-d1a44ad0.js";import"./index-f507cea5.js";import"./AdminServices-8fc05990.js";import"./httpService-1e0b915e.js";import"./toast-96a71eb1.js";import"./useTranslationValue-ab99a2e2.js";import"./LanguageServices-260d4ad7.js";import"./tslib.es6-1fe07526.js";import"./Layout-0a51b8da.js";import"./iconBase-2a642b10.js";import"./SettingServices-5c21999b.js";function ce(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Q=V,ue=ce(Q);function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fe(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var de=!!(typeof window<"u"&&window.document&&window.document.createElement);function pe(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var c=[],i;function s(){i=t(c.map(function(u){return u.props})),l.canUseDOM?e(i):n&&(i=n(i))}var l=function(u){fe(d,u);function d(){return u.apply(this,arguments)||this}d.peek=function(){return i},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var E=i;return i=void 0,c=[],E};var m=d.prototype;return m.UNSAFE_componentWillMount=function(){c.push(this),s()},m.componentDidUpdate=function(){s()},m.componentWillUnmount=function(){var E=c.indexOf(this);c.splice(E,1),s()},m.render=function(){return ue.createElement(a,this.props)},d}(Q.PureComponent);return $(l,"displayName","SideEffect("+r(a)+")"),$(l,"canUseDOM",de),l}}var me=pe;const Te=X(me);var he=typeof Element<"u",ge=typeof Map=="function",ve=typeof Set=="function",Ee=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function M(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!M(t[r],e[r]))return!1;return!0}var a;if(ge&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!M(r.value[1],e.get(r.value[0])))return!1;return!0}if(ve&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Ee&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(he&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!M(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var ye=function(e,n){try{return M(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Ae=X(ye);var P={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(f).map(function(t){return f[t]});var g={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},be=Object.keys(H).reduce(function(t,e){return t[H[e]]=e,t},{}),Se=[f.NOSCRIPT,f.SCRIPT,f.STYLE],y="data-react-helmet",Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Oe=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},we=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},G=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},xe=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},k=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},je=function(e){var n=w(e,f.TITLE),r=w(e,L.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=w(e,L.DEFAULT_TITLE);return n||o||void 0},Re=function(e){return w(e,L.ON_CHANGE_CLIENT_STATE)||function(){}},D=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return v({},r,o)},{})},Ne=function(e,n){return n.filter(function(r){return typeof r[f.BASE]<"u"}).map(function(r){return r[f.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),c=0;c<a.length;c++){var i=a[c],s=i.toLowerCase();if(e.indexOf(s)!==-1&&o[s])return r.concat(o)}return r},[])},R=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Me("Helmet: "+e+' should be of type "Array". Instead found type "'+Ce(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,c){var i={};c.filter(function(m){for(var T=void 0,E=Object.keys(m),A=0;A<E.length;A++){var b=E[A],S=b.toLowerCase();n.indexOf(S)!==-1&&!(T===g.REL&&m[T].toLowerCase()==="canonical")&&!(S===g.REL&&m[S].toLowerCase()==="stylesheet")&&(T=S),n.indexOf(b)!==-1&&(b===g.INNER_HTML||b===g.CSS_TEXT||b===g.ITEM_PROP)&&(T=b)}if(!T||!m[T])return!1;var x=m[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][x]?!1:(i[T][x]=!0,!0)}).reverse().forEach(function(m){return a.push(m)});for(var s=Object.keys(i),l=0;l<s.length;l++){var u=s[l],d=ie({},o[u],i[u]);o[u]=d}return a},[]).reverse()},w=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},Ie=function(e){return{baseTag:Ne([g.HREF,g.TARGET],e),bodyAttributes:D(P.BODY,e),defer:w(e,L.DEFER),encode:w(e,L.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:D(P.HTML,e),linkTags:R(f.LINK,[g.REL,g.HREF],e),metaTags:R(f.META,[g.NAME,g.CHARSET,g.HTTPEQUIV,g.PROPERTY,g.ITEM_PROP],e),noscriptTags:R(f.NOSCRIPT,[g.INNER_HTML],e),onChangeClientState:Re(e),scriptTags:R(f.SCRIPT,[g.SRC,g.INNER_HTML],e),styleTags:R(f.STYLE,[g.CSS_TEXT],e),title:je(e),titleAttributes:D(P.TITLE,e)}},U=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){U(e)},0)}}(),W=function(e){return clearTimeout(e)},Le=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||U:global.requestAnimationFrame||U,_e=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||W:global.cancelAnimationFrame||W,Me=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},N=null,He=function(e){N&&_e(N),e.defer?N=Le(function(){z(e,function(){N=null})}):(z(e),N=null)},z=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,m=e.title,T=e.titleAttributes;B(f.BODY,o),B(f.HTML,a),Fe(m,T);var E={baseTag:O(f.BASE,r),linkTags:O(f.LINK,c),metaTags:O(f.META,i),noscriptTags:O(f.NOSCRIPT,s),scriptTags:O(f.SCRIPT,u),styleTags:O(f.STYLE,d)},A={},b={};Object.keys(E).forEach(function(S){var x=E[S],q=x.newTags,te=x.oldTags;q.length&&(A[S]=q),te.length&&(b[S]=E[S].oldTags)}),n&&n(),l(e,A,b)},J=function(e){return Array.isArray(e)?e.join(""):e},Fe=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=J(e)),B(f.TITLE,n)},B=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(y),a=o?o.split(","):[],c=[].concat(a),i=Object.keys(n),s=0;s<i.length;s++){var l=i[s],u=n[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),a.indexOf(l)===-1&&a.push(l);var d=c.indexOf(l);d!==-1&&c.splice(d,1)}for(var m=c.length-1;m>=0;m--)r.removeAttribute(c[m]);a.length===c.length?r.removeAttribute(y):r.getAttribute(y)!==i.join(",")&&r.setAttribute(y,i.join(","))}},O=function(e,n){var r=document.head||document.querySelector(f.HEAD),o=r.querySelectorAll(e+"["+y+"]"),a=Array.prototype.slice.call(o),c=[],i=void 0;return n&&n.length&&n.forEach(function(s){var l=document.createElement(e);for(var u in s)if(s.hasOwnProperty(u))if(u===g.INNER_HTML)l.innerHTML=s.innerHTML;else if(u===g.CSS_TEXT)l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText));else{var d=typeof s[u]>"u"?"":s[u];l.setAttribute(u,d)}l.setAttribute(y,"true"),a.some(function(m,T){return i=T,l.isEqualNode(m)})?a.splice(i,1):c.push(l)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),c.forEach(function(s){return r.appendChild(s)}),{oldTags:a,newTags:c}},Z=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},De=function(e,n,r,o){var a=Z(r),c=J(n);return a?"<"+e+" "+y+'="true" '+a+">"+k(c,o)+"</"+e+">":"<"+e+" "+y+'="true">'+k(c,o)+"</"+e+">"},ke=function(e,n,r){return n.reduce(function(o,a){var c=Object.keys(a).filter(function(l){return!(l===g.INNER_HTML||l===g.CSS_TEXT)}).reduce(function(l,u){var d=typeof a[u]>"u"?u:u+'="'+k(a[u],r)+'"';return l?l+" "+d:d},""),i=a.innerHTML||a.cssText||"",s=Se.indexOf(e)===-1;return o+"<"+e+" "+y+'="true" '+c+(s?"/>":">"+i+"</"+e+">")},"")},K=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[H[o]||o]=e[o],r},n)},Ue=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[be[o]||o]=e[o],r},n)},Be=function(e,n,r){var o,a=(o={key:n},o[y]=!0,o),c=K(r,a);return[I.createElement(f.TITLE,c,n)]},Ye=function(e,n){return n.map(function(r,o){var a,c=(a={key:o},a[y]=!0,a);return Object.keys(r).forEach(function(i){var s=H[i]||i;if(s===g.INNER_HTML||s===g.CSS_TEXT){var l=r.innerHTML||r.cssText;c.dangerouslySetInnerHTML={__html:l}}else c[s]=r[i]}),I.createElement(e,c)})},C=function(e,n,r){switch(e){case f.TITLE:return{toComponent:function(){return Be(e,n.title,n.titleAttributes)},toString:function(){return De(e,n.title,n.titleAttributes,r)}};case P.BODY:case P.HTML:return{toComponent:function(){return K(n)},toString:function(){return Z(n)}};default:return{toComponent:function(){return Ye(e,n)},toString:function(){return ke(e,n,r)}}}},ee=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,d=e.title,m=d===void 0?"":d,T=e.titleAttributes;return{base:C(f.BASE,n,o),bodyAttributes:C(P.BODY,r,o),htmlAttributes:C(P.HTML,a,o),link:C(f.LINK,c,o),meta:C(f.META,i,o),noscript:C(f.NOSCRIPT,s,o),script:C(f.SCRIPT,l,o),style:C(f.STYLE,u,o),title:C(f.TITLE,{title:m,titleAttributes:T},o)}},qe=function(e){var n,r;return r=n=function(o){we(a,o);function a(){return Pe(this,a),xe(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!Ae(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,s){if(!s)return null;switch(i.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:s};case f.STYLE:return{cssText:s}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var s,l=i.child,u=i.arrayTypeChildren,d=i.newChildProps,m=i.nestedChildren;return v({},u,(s={},s[l.type]=[].concat(u[l.type]||[],[v({},d,this.mapNestedChildrenToProps(l,m))]),s))},a.prototype.mapObjectTypeChildren=function(i){var s,l,u=i.child,d=i.newProps,m=i.newChildProps,T=i.nestedChildren;switch(u.type){case f.TITLE:return v({},d,(s={},s[u.type]=T,s.titleAttributes=v({},m),s));case f.BODY:return v({},d,{bodyAttributes:v({},m)});case f.HTML:return v({},d,{htmlAttributes:v({},m)})}return v({},d,(l={},l[u.type]=v({},m),l))},a.prototype.mapArrayTypeChildrenToProps=function(i,s){var l=v({},s);return Object.keys(i).forEach(function(u){var d;l=v({},l,(d={},d[u]=i[u],d))}),l},a.prototype.warnOnInvalidChildren=function(i,s){return!0},a.prototype.mapChildrenToProps=function(i,s){var l=this,u={};return I.Children.forEach(i,function(d){if(!(!d||!d.props)){var m=d.props,T=m.children,E=G(m,["children"]),A=Ue(E);switch(l.warnOnInvalidChildren(d,T),d.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:u=l.flattenArrayTypeChildren({child:d,arrayTypeChildren:u,newChildProps:A,nestedChildren:T});break;default:s=l.mapObjectTypeChildren({child:d,newProps:s,newChildProps:A,nestedChildren:T});break}}}),s=this.mapArrayTypeChildrenToProps(u,s),s},a.prototype.render=function(){var i=this.props,s=i.children,l=G(i,["children"]),u=v({},l);return s&&(u=this.mapChildrenToProps(s,u)),I.createElement(e,u)},Oe(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(I.Component),n.propTypes={base:h.object,bodyAttributes:h.object,children:h.oneOfType([h.arrayOf(h.node),h.node]),defaultTitle:h.string,defer:h.bool,encodeSpecialCharacters:h.bool,htmlAttributes:h.object,link:h.arrayOf(h.object),meta:h.arrayOf(h.object),noscript:h.arrayOf(h.object),onChangeClientState:h.func,script:h.arrayOf(h.object),style:h.arrayOf(h.object),title:h.string,titleAttributes:h.object,titleTemplate:h.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},$e=function(){return null},Ge=Te(Ie,He,ee)($e),Y=qe(Ge);Y.renderStatic=Y.rewind;const We=({title:t,description:e})=>p.jsxs(Y,{children:[p.jsxs("title",{children:[" ",t?` ${t} | Dashtar : Point of Sale and E-Commerce Website all in one`:"Dashtar : Point of Sale and E-Commerce Website all in one"]}),p.jsx("meta",{name:"description",content:e?` ${e} `:"Dashtar : Point of Sale and E-Commerce Website all in one"})]}),ft=()=>{const{t}=re(),{state:{adminInfo:e}}=V.useContext(ne),{register:n,handleSubmit:r,onSubmit:o,errors:a,imageUrl:c,setImageUrl:i}=ae(e._id);return p.jsxs(p.Fragment,{children:[p.jsxs(We,{children:[" ",t("EditProfile")," "]}),p.jsx("div",{className:"container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg",children:p.jsxs("form",{onSubmit:r(o),children:[p.jsxs("div",{className:"p-6 flex-grow scrollbar-hide w-full max-h-full",children:[p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(j,{label:t("ProfilePicture")}),p.jsx("div",{className:"col-span-8 sm:col-span-4",children:p.jsx(se,{imageUrl:c,setImageUrl:i,folder:"customer"})})]}),p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(j,{label:t("ProfileName")}),p.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[p.jsx(F,{register:n,label:"Name",name:"name",type:"text",placeholder:"Your Name"}),p.jsx(_,{errorName:a.name})]})]}),p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(j,{label:t("ProfileEmail")}),p.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[p.jsx(F,{register:n,label:"Email",name:"email",type:"text",placeholder:"Email"}),p.jsx(_,{errorName:a.email})]})]}),p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(j,{label:t("ProfileContactNumber")}),p.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[p.jsx(F,{register:n,label:"Contact Number",name:"phone",type:"text",placeholder:"Contact Number"}),p.jsx(_,{errorName:a.phone})]})]}),p.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[p.jsx(j,{label:t("ProfileYourRole")}),p.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[p.jsx(le,{register:n,label:"Role",name:"role"}),p.jsx(_,{errorName:a.role})]})]})]}),p.jsx("div",{className:"flex flex-row-reverse pr-6 pb-6",children:p.jsx(oe.Button,{type:"submit",className:"h-12 px-6",children:t("updateProfile")})})]})})]})};export{ft as default};
