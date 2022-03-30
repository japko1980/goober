(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{79:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(98)),i={id:"keyframes",title:"keyframes",sidebar_label:"keyframes"},c={unversionedId:"api/keyframes",id:"api/keyframes",isDocsHomePage:!1,title:"keyframes",description:"keyframes",source:"@site/docs/api/keyframes.md",slug:"/api/keyframes",permalink:"/api/keyframes",editUrl:"https://github.com/cristianbote/goober/edit/master/docs/api/keyframes.md",version:"current",sidebar_label:"keyframes",sidebar:"docs",previous:{title:"createGlobalStyles",permalink:"/api/createGlobalStyles"},next:{title:"shouldForwardProp",permalink:"/api/shouldForwardProp"}},s=[],l={toc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"keyframes")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"keyframes")," is a helpful method to define reusable animations that can be decoupled from the main style declaration and shared across components."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { keyframes } from "goober";\n\nconst rotate = keyframes`\n    from, to {\n        transform: rotate(0deg);\n    }\n\n    50% {\n        transform: rotate(180deg);\n    }\n`;\n\nconst Wicked = styled("div")`\n  background: tomato;\n  color: white;\n  animation: ${rotate} 1s ease-in-out;\n`;\n')))}p.isMDXComponent=!0},98:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return t?a.a.createElement(d,c(c({ref:r},l),{},{components:t})):a.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);