(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{627:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},628:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},629:function(e,t,n){"use strict";var o=n(0),a=n(630);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},630:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},631:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(629),i=n(628),s=n(55),c=n.n(s);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:d,groupId:p,className:m}=e,{tabGroupChoices:b,setTabGroupChoices:h}=Object(r.a)(),[f,v]=Object(o.useState)(s),g=o.Children.toArray(e.children),O=[];if(null!=p){const e=b[p];null!=e&&e!==f&&d.some((t=>t.value===e))&&v(e)}const y=e=>{const t=e.target,n=O.indexOf(t),o=g[n].props.value;v(o),null!=p&&(h(p,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&a<=i&&o<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},j=e=>{var t;let n;switch(e.keyCode){case u:{const t=O.indexOf(e.target)+1;n=O[t]||O[0];break}case l:{const t=O.indexOf(e.target)-1;n=O[t]||O[O.length-1];break}}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},d.map((e=>{let{value:t,label:n}=e;return a.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:y,onClick:y},n)}))),t?Object(o.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},632:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){let{children:t,hidden:n,className:o}=e;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=(n(0),n(627)),r=n(631),i=n(632);const s={id:"root",title:"Root",sidebar_label:"Root"},c={unversionedId:"docs/root",id:"version-7.11.2/docs/root",isDocsHomePage:!1,title:"Root",description:"The root is where the application layout structure is defined. It is typically the first UI element a user interacts with. The root can be changed multiple times during the lifespan of the application. For example, if an app requires users to login, it's common to use a stack-based root and transition to either tabs- or SideMenu-based root if login is successful.",source:"@site/versioned_docs/version-7.11.2/docs/docs-root.mdx",slug:"/docs/root",permalink:"/react-native-navigation/7.11.2/docs/root",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.11.2/docs/docs-root.mdx",version:"7.11.2",sidebar_label:"Root",sidebar:"version-7.11.2/docs",previous:{title:"External Component",permalink:"/react-native-navigation/7.11.2/docs/externalComponent"},next:{title:"Modal",permalink:"/react-native-navigation/7.11.2/docs/modal"}},l=[{value:"Setting root on app launch",id:"setting-root-on-app-launch",children:[]},{value:"Conditional initial root",id:"conditional-initial-root",children:[]},{value:"Common root structures",id:"common-root-structures",children:[]}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return Object(a.b)(d,Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The root is where the application layout structure is defined. It is typically the first UI element a user interacts with. The root can be changed multiple times during the lifespan of the application. For example, if an app requires users to login, it's common to use a stack-based root and transition to either tabs- or SideMenu-based root if login is successful."),Object(a.b)("h2",{id:"setting-root-on-app-launch"},"Setting root on app launch"),Object(a.b)("p",null,"RNN exposes an appLaunched listener which is invoked whenever root needs to be set."),Object(a.b)("p",null,"On iOS, the app launched event is usually emitted once in the lifespan of the application - when the app is opened for the first time. On Android things become a little bit more complicated. Like on iOS, the event is emitted when an app is opened for the first time. Since the system can destroy the Activity when the app is in the background to free resources, the event is emitted when the app returns to foreground after the activity has been destroyed."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Navigation.events().registerAppLaunchedListener(() => {\n  Navigation.setRoot({\n    root: {\n\n    }\n  });\n});\n")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"registerAppLaunchedListener() must be called as soon as the bundle is executed. Otherwise the event, which is emitted from native to JS, won't be handled at the correct moment in time."))),Object(a.b)("h2",{id:"conditional-initial-root"},"Conditional initial root"),Object(a.b)("p",null,"A common use case is to set the initial root according to a condition of some sort. For example:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If a user is logged in, show the application main root; otherwise show a login screen.")),Object(a.b)("p",null,"To do this, simply set the appropriate root according to your needs."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Navigation.events().registerAppLaunchedListener(() => {\n  if (isUserLoggedIn()) {\n    setMainRoot();\n  } else {\n    setLoginRoot();\n  }\n});\n")),Object(a.b)("h2",{id:"common-root-structures"},"Common root structures"),Object(a.b)(r.a,{defaultValue:"stack",values:[{label:"Stack root",value:"stack"},{label:"BottomTabs root",value:"bottomTabs"},{label:"SideMenu root",value:"sideMenu"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"stack",mdxType:"TabItem"},"Stacks are usually used as root for small scale apps or for short-lived flows within one big app. For example, here's a login flow:",Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setRoot({\n  root: {\n    stack: {\n      children: [\n        {\n          component: {\n            name: 'LOGIN_SCREEN'\n          }\n        }\n      ]\n    }\n  }\n});\n"))),Object(a.b)(i.a,{value:"bottomTabs",mdxType:"TabItem"},"Typically, stacks are used as direct children of BottomTabs and each child is an independent root. This lets users seamlessly switch between tabs as each tab has its own navigation hierarchy.",Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      children: [\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'FEED_SCREEN'\n                }\n              }\n            ]\n          }\n        },\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'CHAT_LIST'\n                }\n              }\n            ]\n          }\n        },\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'PROFILE_SCREEN'\n                }\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n});\n"))),Object(a.b)(i.a,{value:"sideMenu",mdxType:"TabItem"},"When a SideMenu layout is used as root, the center screen would typically be a stack. The center stack should be treated as a root - you can push child screens into it, or replace it alltogether by calling `setStackRoot`.",Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setRoot({\n  root: {\n    sideMenu: {\n      center: {\n        stack: {\n          children: [\n            {\n              component: {\n                name: 'HOME_SCREEN'\n              }\n            }\n          ]\n        }\n      },\n      left: {\n        component: {\n          name: 'MENU_SCREEN'\n        }\n      }\n    }\n  }\n});\n")))))}p.isMDXComponent=!0}}]);