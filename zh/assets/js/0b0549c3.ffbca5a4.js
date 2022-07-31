"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[68338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,h=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},23328:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={title:"\u7ebf\u7a0b\u6a21\u578b",keywords:["\u7ebf\u7a0b\u6a21\u578b"],description:"\u7ebf\u7a0b\u6a21\u578b"},l=void 0,a={unversionedId:"developer/thread-model",id:"version-2.4.3/developer/thread-model",isDocsHomePage:!1,title:"\u7ebf\u7a0b\u6a21\u578b",description:"\u7ebf\u7a0b\u6a21\u578b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/thread-model.md",sourceDirName:"developer",slug:"/developer/thread-model",permalink:"/zh/docs/developer/thread-model",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/thread-model.md",version:"2.4.3",frontMatter:{title:"\u7ebf\u7a0b\u6a21\u578b",keywords:["\u7ebf\u7a0b\u6a21\u578b"],description:"\u7ebf\u7a0b\u6a21\u578b"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"ShenYu \u6027\u80fd\u4f18\u5316",permalink:"/zh/docs/developer/shenyu-optimize"}},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"IO\u4e0eWork\u7ebf\u7a0b",id:"io\u4e0ework\u7ebf\u7a0b",children:[]},{value:"\u4e1a\u52a1\u7ebf\u7a0b",id:"\u4e1a\u52a1\u7ebf\u7a0b",children:[]},{value:"\u5207\u6362\u7c7b\u578b",id:"\u5207\u6362\u7c7b\u578b",children:[]}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd ",(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7684\u7ebf\u7a0b\u6a21\u578b\uff0c\u4ee5\u53ca\u5404\u79cd\u573a\u666f\u7684\u4f7f\u7528\u3002")),(0,i.kt)("h2",{id:"io\u4e0ework\u7ebf\u7a0b"},"IO\u4e0eWork\u7ebf\u7a0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u5185\u7f6e\u4f9d\u8d56 ",(0,i.kt)("inlineCode",{parentName:"li"},"spring-webflux"),"\uff0c \u800c\u5176\u5e95\u5c42\u662f\u4f7f\u7528\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"netty"),"\uff0c\u8fd9\u4e00\u5757\u4e3b\u8981\u662f\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"netty")," \u7ebf\u7a0b\u6a21\u578b\u3002")),(0,i.kt)("h2",{id:"\u4e1a\u52a1\u7ebf\u7a0b"},"\u4e1a\u52a1\u7ebf\u7a0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528\u8c03\u5ea6\u7ebf\u7a0b\u6765\u6267\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528\u56fa\u5b9a\u7684\u7ebf\u7a0b\u6c60\u6765\u6267\u884c\uff0c\u5176\u7ebf\u7a0b\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"cpu * 2 + 1"),"\u3002")),(0,i.kt)("h2",{id:"\u5207\u6362\u7c7b\u578b"},"\u5207\u6362\u7c7b\u578b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reactor.core.scheduler.Schedulers"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"-Dshenyu.scheduler.type=fixed")," \u8fd9\u4e2a\u662f\u9ed8\u8ba4\u3002 \u8bbe\u7f6e\u5176\u4ed6\u7684\u503c \u5c31\u4f1a\u4f7f\u7528\u5f39\u6027\u7ebf\u7a0b\u6c60\u6765\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"Schedulers.elastic()"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"-Dshenyu.work.threads = xx")," \u6765\u6307\u5b9a\u7ebf\u7a0b\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"cpu * 2 + 1"),"\uff0c\u6700\u5c0f\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"16"),"\u4e2a\u7ebf\u7a0b\u3002")))}p.isMDXComponent=!0}}]);