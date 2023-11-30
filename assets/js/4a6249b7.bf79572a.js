(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(627)),i=n(633);const o={id:"options-navigationBar",title:"Navigation Bar Options",sidebar_label:"Navigation Bar"},c={unversionedId:"api/options-navigationBar",id:"version-7.37.0/api/options-navigationBar",isDocsHomePage:!1,title:"Navigation Bar Options",description:"The Navigation Bar is the area at the bottom of the screen containing Android's three navigation buttons: Back, Home and Recents.",source:"@site/versioned_docs/version-7.37.0/api/options-navigationBar.mdx",slug:"/api/options-navigationBar",permalink:"/react-native-navigation/api/options-navigationBar",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.37.0/api/options-navigationBar.mdx",version:"7.37.0",sidebar_label:"Navigation Bar",sidebar:"version-7.37.0/api",previous:{title:"Modal Options",permalink:"/react-native-navigation/api/options-modal"},next:{title:"Overlay",permalink:"/react-native-navigation/api/options-overlay"}},l=[{value:"<code>visible</code>",id:"visible",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]}],b={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return Object(a.b)(u,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Navigation Bar is the area at the bottom of the screen containing Android's three navigation buttons: Back, Home and Recents."),Object(a.b)("p",null,"An example of a dark navigation bar:"),Object(a.b)("img",{width:"30%",src:Object(i.a)("/img/navBar_black.png")}),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  navigationBar: {}\n};\n")),Object(a.b)("h3",{id:"visible"},Object(a.b)("inlineCode",{parentName:"h3"},"visible")),Object(a.b)("p",null,"Set the navigation bar visibility."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Required"),Object(a.b)("th",{parentName:"tr",align:null},"Platform"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"No"),Object(a.b)("td",{parentName:"tr",align:null},"Android")))),Object(a.b)("h3",{id:"backgroundcolor"},Object(a.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(a.b)("p",null,"Set the navigation bar color. When a light background color is used, the color of the navigation bar icons will adapt to a dark color."),Object(a.b)("img",{width:"30%",src:Object(i.a)("/img/navBar_white.png")}),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Required"),Object(a.b)("th",{parentName:"tr",align:null},"Platform"),Object(a.b)("th",{parentName:"tr",align:null},"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Color"),Object(a.b)("td",{parentName:"tr",align:null},"No"),Object(a.b)("td",{parentName:"tr",align:null},"Android"),Object(a.b)("td",{parentName:"tr",align:null},"'black'")))))}p.isMDXComponent=!0},627:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,g=p["".concat(o,".").concat(s)]||p[s]||d[s]||i;return n?a.a.createElement(g,c(c({ref:t},b),{},{components:n})):a.a.createElement(g,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},633:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(634);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:i=!1,absolute:o=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function o(e,t){void 0===t&&(t={});const{withBaseUrl:n}=i();return n(e,t)}},634:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);