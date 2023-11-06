(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{623:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(638),i=a(636);var r=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(i.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(i.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(i.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(16),c=a(637),d=a(635);function m(e){let{siteTitle:t,versionLabel:a}=e;return l.a.createElement(i.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:l.a.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u(e){let{siteTitle:t,versionLabel:a}=e;return l.a.createElement(i.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:l.a.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){let{versionLabel:t,to:a,onClick:n}=e;return l.a.createElement(i.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:l.a.createElement("strong",null,l.a.createElement(s.a,{to:a,onClick:n},l.a.createElement(i.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var p=function(){const{siteConfig:{title:e}}=Object(o.default)(),{pluginId:t}=Object(c.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=Object(d.useDocsPreferredVersion)(t),n=Object(c.useActiveVersion)(t),{latestDocSuggestion:s,latestVersionSuggestion:i}=Object(c.useDocVersionSuggestions)(t);if(!i)return l.a.createElement(l.a.Fragment,null);const r=null!=s?s:(p=i).docs.find((e=>e.id===p.mainDocId));var p;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},l.a.createElement("div",null,"current"===n.name?l.a.createElement(m,{siteTitle:e,versionLabel:n.label}):l.a.createElement(u,{siteTitle:e,versionLabel:n.label})),l.a.createElement("div",{className:"margin-top--md"},l.a.createElement(v,{versionLabel:i.label,to:r.path,onClick:()=>a(i.name)})))},b=a(666),g=a(122),E=a.n(g);function h(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return l.a.createElement(i.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l.a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:E.a.lastUpdatedDate},a)}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return l.a.createElement(i.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l.a.createElement("strong",null,t)}}," by {user}")}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:n}=e;return l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,l.a.createElement(i.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?l.a.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?l.a.createElement(f,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)))}var N=a(628);var _=function(e,t,a){const[l,s]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const r=document.getElementsByClassName(e);for(;a<r.length&&!i;){const e=r[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),s(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},U=a(123),w=a.n(U);const T="table-of-contents__link";function y(e){let{toc:t,isChild:a}=e;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:T,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(y,{isChild:!0,toc:e.children}))))):null}var k=function(e){let{toc:t}=e;return _(T,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(N.a)(w.a.tableOfContents,"thin-scrollbar")},l.a.createElement(y,{toc:t}))},A=a(3),O=a(124),j=a.n(O);var C=e=>{let{className:t,...a}=e;return l.a.createElement("svg",Object(A.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(N.a)(j.a.iconEdit,t),"aria-label":"Edit page"},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function V(e){let{editUrl:t}=e;return l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(C,null),l.a.createElement(i.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var x=a(125),B=a.n(x);t.default=function(e){const{content:t}=e,{metadata:a,frontMatter:{image:n,keywords:s,hide_title:i,hide_table_of_contents:o}}=t,{description:d,title:m,editUrl:u,lastUpdatedAt:v,formattedLastUpdatedAt:g,lastUpdatedBy:E}=a,{pluginId:h}=Object(c.useActivePlugin)({failfast:!0}),f=Object(c.useVersions)(h),_=Object(c.useActiveVersion)(h),U=f.length>1;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{title:m,description:d,keywords:s,image:n}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(N.a)("col",{[B.a.docItemCol]:!o})},l.a.createElement(p,null),l.a.createElement("div",{className:B.a.docItemContainer},l.a.createElement("article",null,U&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",_.label)),!i&&l.a.createElement("header",null,l.a.createElement("h1",{className:B.a.docTitle},m)),l.a.createElement("div",{className:"markdown"},l.a.createElement(t,null))),(u||v||E)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},u&&l.a.createElement(V,{editUrl:u})),(v||E)&&l.a.createElement(L,{lastUpdatedAt:v,formattedLastUpdatedAt:g,lastUpdatedBy:E}))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(r,{metadata:a})))),!o&&t.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(k,{toc:t.toc}))))}}}]);