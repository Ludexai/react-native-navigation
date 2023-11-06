(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{522:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(627));const o={id:"options-overlay",title:"Overlay",sidebar_label:"Overlay"},l={unversionedId:"api/options-overlay",id:"version-7.25.4/api/options-overlay",isDocsHomePage:!1,title:"Overlay",description:"Controls overlay options",source:"@site/versioned_docs/version-7.25.4/api/options-overlay.mdx",slug:"/api/options-overlay",permalink:"/react-native-navigation/7.25.4/api/options-overlay",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.25.4/api/options-overlay.mdx",version:"7.25.4",sidebar_label:"Overlay",sidebar:"version-7.25.4/api",previous:{title:"Navigation Bar Options",permalink:"/react-native-navigation/7.25.4/api/options-navigationBar"},next:{title:"Overlay Attach (Tooltips)",permalink:"/react-native-navigation/7.25.4/api/options-overlay-attach"}},i=[{value:"<code>interceptTouchOutside</code>",id:"intercepttouchoutside",children:[]},{value:"<code>handleKeyboardEvents</code>",id:"handlekeyboardevents",children:[]},{value:"<code>attach</code>",id:"attach",children:[]}],c={toc:i},b="wrapper";function p(e){let{components:t,...n}=e;return Object(r.b)(b,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Controls overlay options"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  overlay: {\n\n  }\n}\n")),Object(r.b)("h3",{id:"intercepttouchoutside"},Object(r.b)("inlineCode",{parentName:"h3"},"interceptTouchOutside")),Object(r.b)("p",null,"Controls whether touch events outside the bounds of the overlay are to be handled by content behind the overlay. When set to true, touch events will ",Object(r.b)("strong",{parentName:"p"},"not")," pass through to the underlying content."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h3",{id:"handlekeyboardevents"},Object(r.b)("inlineCode",{parentName:"h3"},"handleKeyboardEvents")),Object(r.b)("p",null,"Overlays on iOS don't handle keyboard events by default. If your Overlay contains a TextInput component, you'll want to enable this option so that TextInput responds to keyboard events."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"iOS")))),Object(r.b)("h3",{id:"attach"},Object(r.b)("inlineCode",{parentName:"h3"},"attach")),Object(r.b)("p",null,"Attach the overlay component as a tooltip for a given anchor view id, in a layer id (Z-Axis)."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/7.25.4/api/options-overlay-attach"},"OverlayAttachOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))))}p.isMDXComponent=!0},627:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return n?r.a.createElement(O,i(i({ref:t},b),{},{components:n})):r.a.createElement(O,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);