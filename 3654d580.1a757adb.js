(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),o=(a(0),a(171)),c={id:"overlay-api",title:"Overlay",sidebar_label:"Overlay"},l={id:"overlay-api",title:"Overlay",description:"## `showOverlay()`",source:"@site/docs/api-overlay.mdx",permalink:"/react-native-navigation/docs/overlay-api",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/api-overlay.mdx",sidebar_label:"Overlay",sidebar:"api",previous:{title:"Modal",permalink:"/react-native-navigation/docs/modal-api"},next:{title:"Layout",permalink:"/react-native-navigation/docs/layout"}},i=[{value:"<code>showOverlay()</code>",id:"showoverlay",children:[]},{value:"<code>dismissOverlay()</code>",id:"dismissoverlay",children:[]}],b={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"showoverlay"},Object(o.b)("inlineCode",{parentName:"h2"},"showOverlay()")),Object(o.b)("p",null,"Shows a component as an overlay."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"layout"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"layout"}),"Layout")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any type of layout. Typically, Component layout is used in Overlays but it's possible to load any other layout (",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"bottomTabs-layout"}),"BottomTabs"),", ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"stack-layout"}),"Stack"),", ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"sideMenu-layout"}),"SideMenu"),", ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"component-layout"}),"Component"),")")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.showOverlay({\n  component: {\n    name: 'example.Overlay',\n    options: {\n      overlay: {\n        interceptTouchOutside: true\n      }\n    }\n  }\n});\n")),Object(o.b)("h2",{id:"dismissoverlay"},Object(o.b)("inlineCode",{parentName:"h2"},"dismissOverlay()")),Object(o.b)("p",null,"Dismisses an overlay matching the given overlay componentId."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The component id presented in Overlay")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.dismissOverlay(this.props.componentId);\n")))}p.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(a),s=n,m=u["".concat(c,".").concat(s)]||u[s]||O[s]||o;return a?r.a.createElement(m,l({ref:t},b,{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);