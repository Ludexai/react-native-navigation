(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{287:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,O=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(O,l(l({ref:t},b),{},{components:n})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(287)),c={id:"options-scrollEdgeAppearance",title:"Scroll Edge Appearance Options",sidebar_label:"Scroll Edge Appearance"},l={unversionedId:"api/options-scrollEdgeAppearance",id:"api/options-scrollEdgeAppearance",isDocsHomePage:!1,title:"Scroll Edge Appearance Options",description:"Controls the top bar background styling.",source:"@site/docs/api/options-scrollEdgeAppearance.mdx",slug:"/api/options-scrollEdgeAppearance",permalink:"/react-native-navigation/next/api/options-scrollEdgeAppearance",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/api/options-scrollEdgeAppearance.mdx",version:"current",sidebar_label:"Scroll Edge Appearance"},i=[{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Controls the top bar background styling."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const options = {\n  topBar: {\n    scrollEdgeAppearance: {\n        background: {},\n        enabled: true\n    }\n  }\n};\n")),Object(o.b)("h3",{id:"enabled"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled")),Object(o.b)("p",null,"Since this might be considered as a breaking change (meaning that previous configs might behave different), you'll need to\npass enabled ",Object(o.b)("inlineCode",{parentName:"p"},"true/false")," to activate this option.\n| Type  | Required | Platform |\n| ----- | -------- | -------- |\n| Bool | No       | iOS     |"),Object(o.b)("h3",{id:"color"},Object(o.b)("inlineCode",{parentName:"h3"},"color")),Object(o.b)("p",null,"Set the background color."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Color"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))),Object(o.b)("h3",{id:"translucent"},Object(o.b)("inlineCode",{parentName:"h3"},"translucent")),Object(o.b)("p",null,"Allows the Scroll Edge Appearance to be translucent (blurred)."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))))}p.isMDXComponent=!0}}]);