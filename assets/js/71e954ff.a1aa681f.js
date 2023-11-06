(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),o=(n(0),n(627));const r={id:"passing-data-to-components",title:"Passing data to components",sidebar_label:"Passing data to components"},i={unversionedId:"docs/passing-data-to-components",id:"version-7.37.0/docs/passing-data-to-components",isDocsHomePage:!1,title:"Passing data to components",description:"Initial props",source:"@site/versioned_docs/version-7.37.0/docs/docs-passing-data-to-components.mdx",slug:"/docs/passing-data-to-components",permalink:"/react-native-navigation/docs/passing-data-to-components",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.37.0/docs/docs-passing-data-to-components.mdx",version:"7.37.0",sidebar_label:"Passing data to components",sidebar:"version-7.37.0/docs",previous:{title:"Screen Lifecycle",permalink:"/react-native-navigation/docs/screen-lifecycle"},next:{title:"Using functional components as screens",permalink:"/react-native-navigation/docs/functionalComponents"}},s=[{value:"Initial props",id:"initial-props",children:[]},{value:"Handling passProps in static options",id:"handling-passprops-in-static-options",children:[]},{value:"Updating props",id:"updating-props",children:[]}],p={toc:s},c="wrapper";function l(e){let{components:t,...n}=e;return Object(o.b)(c,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"initial-props"},"Initial props"),Object(o.b)("p",null,"React components use ",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/props"},"props")," to receive data when they are created. When displaying the ",Object(o.b)("a",{parentName:"p",href:"../api/layout-component"},"component")," layout, you can pass initial props to components using the ",Object(o.b)("inlineCode",{parentName:"p"},"passProps")," property."),Object(o.b)("p",null,"In this example, we push the ",Object(o.b)("inlineCode",{parentName:"p"},"UserProfile")," screen and pass two initial props to it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.push(this.props.componentId, {\n  component: {\n    name: 'UserProfile',\n    id: 'PROFILE_SCREEN_ID'\n    passProps: {\n      name: 'John Doe',\n      status: 'online'\n    }\n  }\n});\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Serialization")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"passProps don't need to be serializable. You can use this mechanism to pass lambda functions or even React Components."))),Object(o.b)("h2",{id:"handling-passprops-in-static-options"},"Handling passProps in static options"),Object(o.b)("p",null,"Each component can have a static options property which is used to configure the style properties of elements on the screen when that component is displayed. "),Object(o.b)("p",null,"Static options can either be a simple object, or a function which accepts ",Object(o.b)("inlineCode",{parentName:"p"},"passProps")," as an argument. Sometimes when declaring components, not all style properties are known. For example, a user profile screen will usually have the user's name as the TopBar title text. Therefore the title must be configured dynamically when pushing the screen."),Object(o.b)("p",null,"Following the code example ",Object(o.b)("a",{parentName:"p",href:"passing-data-to-components#initial-props"},"above"),", lets see how to use props passed in the push command to set the TopBar title."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"class UserProfileScreen extends React.Component {\n  static options(props) {\n    return {\n      topBar: {\n        title: {\n          text: props.name\n        }\n      }\n    };\n  }\n}\n")),Object(o.b)("h2",{id:"updating-props"},"Updating props"),Object(o.b)("p",null,"To update a component's props, use the ",Object(o.b)("a",{parentName:"p",href:"../api/component#updateprops"},"Navigation.updateProps()")," command. Updating props triggers the component lifecycle methods related to ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html#updating"},"updating"),"."),Object(o.b)("p",null,"Notice that we're using the component ",Object(o.b)("inlineCode",{parentName:"p"},"id")," in order to update props of this specific instance of the component."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.updateProps('PROFILE_SCREEN_ID', {\n  status: 'offline'\n});\n")))}l.isMDXComponent=!0},627:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);