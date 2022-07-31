"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[13975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96576:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,title:"\u672c\u5730\u90e8\u7f72",keywords:["Deployment"],description:"\u672c\u5730\u90e8\u7f72"},o=void 0,l={unversionedId:"deployment/deployment-local",id:"version-2.4.2/deployment/deployment-local",isDocsHomePage:!1,title:"\u672c\u5730\u90e8\u7f72",description:"\u672c\u5730\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/deployment/deployment-local.md",sourceDirName:"deployment",slug:"/deployment/deployment-local",permalink:"/zh/docs/2.4.2/deployment/deployment-local",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/deployment/deployment-local.md",version:"2.4.2",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u672c\u5730\u90e8\u7f72",keywords:["Deployment"],description:"\u672c\u5730\u90e8\u7f72"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"SPI\u6269\u5c55",permalink:"/zh/docs/2.4.2/design/spi-design"},next:{title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",permalink:"/zh/docs/2.4.2/deployment/deployment-quick"}},p=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801",id:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801",children:[]}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u672c\u5730\u73af\u5883\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5JDK1.8+"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Git"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Maven"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u6b3e\u5f00\u53d1\u5de5\u5177\uff0c\u6bd4\u5982IDEA")),(0,a.kt)("h3",{id:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801"},"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> git clone https://github.com/apache/incubator-shenyu.git\n> cd incubator-shenyu\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.admin.ShenyuAdminBootstrap"),"\uff0c\u8bbf\u95ee http://localhost:9095 \uff0c \u9ed8\u8ba4\u7528\u6237\u540d\u548c\u5bc6\u7801\u5206\u522b\u4e3a: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"123456"),"\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"h2"),"\u6765\u5b58\u50a8\uff0c\u8bbe\u7f6e\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"--spring.profiles.active = h2"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u6765\u5b58\u50a8\uff0c\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," \u914d\u7f6e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"PostgreSql"),"\u6765\u5b58\u50a8\uff0c\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"spring.profiles.active")," \u914d\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"pg"),"\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.bootstrap.ShenyuBootstrapApplication"),"\u3002"))))}u.isMDXComponent=!0}}]);