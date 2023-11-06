(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),i=(n(0),n(627)),o=n(631),r=n(632),s=n(633);const l={id:"style-animations",title:"Animations",sidebar_label:"Animations"},c={unversionedId:"docs/style-animations",id:"docs/style-animations",isDocsHomePage:!1,title:"Animations",description:"Various UI elements can be animated by declaring animation options.",source:"@site/docs/docs/style-animations.mdx",slug:"/docs/style-animations",permalink:"/react-native-navigation/next/docs/style-animations",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/style-animations.mdx",version:"current",sidebar_label:"Animations",sidebar:"docs",previous:{title:"Orientation",permalink:"/react-native-navigation/next/docs/style-orientation"},next:{title:"Changing fonts",permalink:"/react-native-navigation/next/docs/style-fonts"}},p=[{value:"Layout animations",id:"layout-animations",children:[{value:"Root animations",id:"root-animations",children:[]},{value:"Stack animations",id:"stack-animations",children:[]},{value:"Modal animations",id:"modal-animations",children:[]}]},{value:"Shared element transitions",id:"shared-element-transitions",children:[{value:"Transition breakdown",id:"transition-breakdown",children:[]},{value:"Implementing shared element transitions",id:"implementing-shared-element-transitions",children:[]}]},{value:"Element Transitions",id:"element-transitions",children:[{value:"Recreating",id:"recreating",children:[]}]},{value:"Peek and Pop (iOS 11.4+)",id:"peek-and-pop-ios-114",children:[]}],b={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return Object(i.b)(m,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Various UI elements can be animated by declaring animation options.\nYou can change the default animations for various commands, like push and pop, and even animate elements in\nyour screens during screen transitions."),Object(i.b)("h4",{id:"animation-properties"},"Animation properties"),Object(i.b)("p",null,"The following properties can be animated with our animation framework:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," - Translate the view to a coordinate along the x axis."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," - Translate the view to a coordinate along the y axis."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"translationX")," - Translate the view along the x axis relative to its current x position."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"translationY")," - Translate the view along the y axis relative to its current y position."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"alpha")," - Apply alpha animation to the view. A value of 0 means the view is not visible, 1 means it's visible."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scaleX")," - Scale the view on the x axis. A value of 1 means that no scaling is applied."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scaleY")," - Scale the view on the y axis. A value of 1 means that no scaling is applied."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rotationX")," - Applies rotation around the x axis (in degrees, passed as a float)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rotationY")," - Applies rotation around the y axis (in degrees, passed as a float)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rotation")," - Rotates the view on all axis. Positive values result in clockwise rotation.")),Object(i.b)("h2",{id:"layout-animations"},"Layout animations"),Object(i.b)("h3",{id:"root-animations"},"Root animations"),Object(i.b)("p",null,"Animating switches between roots, using the enter/exit animations that grants control on how each root is animated when entering or exiting the screen."),Object(i.b)("p",null,"This can be acheived by modifying the default options (",Object(i.b)("inlineCode",{parentName:"p"},"setDefaultOptions")," for example) to be like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"options:{\n  animations: {\n        push:{...},\n        setRoot: {\n          enter: {\n            waitForRender: true,\n            enabled: false,\n            translationY: {\n              from: 0,\n              to: 1,\n              duration: 3,\n            },\n          },\n          exit:{...}\n        },\n      },\n    };\n")),Object(i.b)("p",null,"In Playground, you can try it by setting ",Object(i.b)("inlineCode",{parentName:"p"},"useCustomAnimations")," in ",Object(i.b)("inlineCode",{parentName:"p"},"flags.ts")," file."),Object(i.b)("h3",{id:"stack-animations"},"Stack animations"),Object(i.b)("p",null,"When animating screens in and out of a stack, there are three elements you can work with:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"content")," - screen being pushed or popped"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"topBar")," - stack's TopBar"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"bottomTabs")," - if stack is a child of a bottomTabs layout, we can control the ",Object(i.b)("inlineCode",{parentName:"li"},"hide")," and ",Object(i.b)("inlineCode",{parentName:"li"},"show")," animations of the bottomTabs.")),Object(i.b)("p",null,"The following example demonstrates how to replace the default push and pop animations with slide animations."),Object(i.b)(o.a,{defaultValue:"push",values:[{label:"Push",value:"push"},{label:"Pop",value:"pop"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"push",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    push: {\n      content: {\n        translationX: {\n          from: require('react-native').Dimensions.get('window').width,\n          to: 0,\n          duration: 300\n        }\n      }\n    }\n  }\n}\n"))),Object(i.b)(r.a,{value:"pop",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    pop: {\n      content: {\n        translationX: {\n          from: 0,\n          to: -require('react-native').Dimensions.get('window').width,\n          duration: 300\n        }\n      }\n    }\n  }\n}\n")))),Object(i.b)("h3",{id:"modal-animations"},"Modal animations"),Object(i.b)("p",null,"Modal animations are declared similarly to stack animations, only this time we animate the entire view and not only part of the UI (content).\nThe appearing modal can play custom enter animation and exit for the disappearing screen when showing/dismissing modal."),Object(i.b)(o.a,{defaultValue:"show",values:[{label:"Show",value:"show"},{label:"Dismiss",value:"dismiss"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"show",mdxType:"TabItem"},Object(i.b)("p",null,"The following example demonstrates how to show a modal with a fade-in animation."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Deprecation warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Consider using enter, exit animations instead."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    showModal: {\n      alpha: {\n        from: 0,\n        to: 1,\n        duration: 300\n      }\n    }\n  }\n}\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    showModal: {\n    enter :{\n      enabled:true,\n      alpha: {\n            from: 0,\n            to: 1,\n            duration: 300\n       }\n    },\n    exit :{\n      enabled:true,\n      alpha: {\n                from: 1,\n                to: 0,\n                duration: 300\n           }\n        }\n    }\n  }\n}\n"))),Object(i.b)(r.a,{value:"dismiss",mdxType:"TabItem"},Object(i.b)("p",null,"The following example demonstrates how to dismiss a modal with a fade-out animation."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Deprecation warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Consider using enter, exit animations instead."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    dismissModal: {\n      alpha: {\n        from: 1,\n        to: 0,\n        duration: 300\n      }\n    }\n  }\n}\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    dismissModal: {\n     exit:{\n     enabled:true\n      alpha: {\n             from: 1,\n             to: 0,\n             duration: 300\n         }\n      },\n      enter:{\n       enabled:false\n       alpha: {\n            from: 0,\n            to: 1,\n            duration: 300\n         }\n      }\n    }\n  }\n}\n")))),Object(i.b)("h2",{id:"shared-element-transitions"},"Shared element transitions"),Object(i.b)("p",null,"Shared element transitions allow us to provide visual continuity when navigating between destinations. This also focuses user attention on a particular significant element, which then also gives such user better context when transitioning to some other destination."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"At the moment, the transition is available for push and pop commands. We are working on expanding supported commands to show/dismiss modal and change BottomTabs."))),Object(i.b)("h3",{id:"transition-breakdown"},"Transition breakdown"),Object(i.b)("p",null,"Let's take a more in-depth look at the following example, which you can find in the playground app:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation/blob/master/playground/src/screens/sharedElementTransition/CocktailsListScreen.tsx"},"Source screen")," and the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation/blob/master/playground/src/screens/sharedElementTransition/CocktailDetailsScreen.tsx"},"Destination screen"))),Object(i.b)("p",{align:"center"},Object(i.b)("img",{alt:"Shared Element Transition",src:Object(s.a)("img/sharedElement.gif")})),Object(i.b)("p",null,"Four elements are animated in this example. Let's list the elements involved in the transition and note which properties are being animated."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"image")," - the item image is animated to the next screen."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"image scale (resizeMode)"),Object(i.b)("li",{parentName:"ul"},"position on screen"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"image background"),' - each item has a "shadow" view which transitions to the next screen and turns into a colorful header.'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"scale"),Object(i.b)("li",{parentName:"ul"},"position on screen"),Object(i.b)("li",{parentName:"ul"},"color"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"title")," - the title of the item is animated to the next screen."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"font size"),Object(i.b)("li",{parentName:"ul"},"font color"),Object(i.b)("li",{parentName:"ul"},"position on screen"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Description")," - the description of the item in the destination screen."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"fade-in"),Object(i.b)("li",{parentName:"ul"},"translation y")))),Object(i.b)("h3",{id:"implementing-shared-element-transitions"},"Implementing shared element transitions"),Object(i.b)("h4",{id:"step-1---set-a-nativeid-prop-to-elements-in-the-source-screen"},"Step 1 - set a nativeID prop to elements in the source screen"),Object(i.b)("p",null,"In order for RNN to be able to detect the corresponding native views of the elements,\neach element must include a unique ",Object(i.b)("inlineCode",{parentName:"p"},"nativeID")," prop."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Image\n  source={item.image}\n  nativeID={`image${item.id}`}\n  style={styles.image}\n  resizeMode={'contain'}\n/>\n")),Object(i.b)("h4",{id:"step-2---set-a-nativeid-prop-to-elements-in-the-destination-screen"},"Step 2 - set a nativeID prop to elements in the destination screen"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Image source={this.props.image} nativeID={`image${this.props.id}Dest`} style={styles.image} />\n")),Object(i.b)("h4",{id:"step-3---declare-the-shared-element-animation-when-pushing-the-screen"},"Step 3 - Declare the shared element animation when pushing the screen"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"Navigation.push(this.props.componentId, {\n  component: {\n    name: Screens.CocktailDetailsScreen,\n    passProps: { ...item },\n    options: {\n      animations: {\n        push: {\n          sharedElementTransitions: [\n            {\n              fromId: `image${item.id}`,\n              toId: `image${item.id}Dest`,\n              interpolation: { type: 'linear' }\n            },\n          ],\n        },\n      },\n    },\n  },\n});\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"interpolation")," property is an object which consists of a ",Object(i.b)("inlineCode",{parentName:"p"},"type")," property, and optional parameters to further configure the interpolation function. The following ",Object(i.b)("inlineCode",{parentName:"p"},"type"),"s are supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'accelerate'"),": Begin building up speed until destination has been reached.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"factor"),": The acceleration factor. Higher values look faster."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'decelerate'"),": Start at a high speed and slow down to settle.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"factor"),": The acceleration factor. Higher values look slower."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'accelerateDecelerate'"),": Begin building up speed until half of the animation is complete, then begin slowing down to settle."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'decelerateAccelerate'"),": Start at a high speed and slow down until half of the animation is complete, then speed up again to settle."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'linear'"),": Linearly move towards the destination."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'overshoot'"),": Begin building up speed and overshoot the destination, then fling back to settle.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tension"),": The tension of the overshoot animation defines how far the object can overshoot. ",Object(i.b)("em",{parentName:"li"},"Default: ",Object(i.b)("inlineCode",{parentName:"em"},"1"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'spring'"),": Acts like an actual spring. Depending on the configuration, this interpolation can overshoot the destination multiple times, or be very stiff and smoothly ease towards the destination.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mass"),': The mass defines how "heavy" the object is. ',Object(i.b)("em",{parentName:"li"},"Default: ",Object(i.b)("inlineCode",{parentName:"em"},"3"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"damping"),": The damping property specifies how much the moving object is being slowed down. Higher values can lead to overdamping, lower values to underdamping. ",Object(i.b)("em",{parentName:"li"},"Default: ",Object(i.b)("inlineCode",{parentName:"em"},"500"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"stiffness"),": The stiffness property defines how stiff the animated object is. ",Object(i.b)("em",{parentName:"li"},"Default: ",Object(i.b)("inlineCode",{parentName:"em"},"200")))))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Since a Spring interpolation is not a time based animation, you have to manually tweak the configuration to match the duration of the animation, otherwise the remaining time of the Spring interpolation will get skipped."))),Object(i.b)("h2",{id:"element-transitions"},"Element Transitions"),Object(i.b)("p",null,"Element transitions also allow you to animate elements during shared element transitions."),Object(i.b)("h3",{id:"recreating"},"Recreating"),Object(i.b)("h4",{id:"step-1---set-a-nativeid-prop-to-the-element-youd-like-to-animate"},"Step 1 - Set a nativeID prop to the element you'd like to animate"),Object(i.b)("p",null,"An element can either be in the source or destination screen."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Text nativeID="description" style={styles.description}>\n  {this.props.description}\n</Text>\n')),Object(i.b)("h4",{id:"step-2---declare-the-element-animation-when-pushing-the-screen"},"Step 2 - Declare the element animation when pushing the screen"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"Navigation.push(this.props.componentId, {\n  component: {\n    name: Screens.CocktailDetailsScreen,\n    passProps: { ...item },\n    options: {\n      animations: {\n        push: {\n          elementTransitions: [\n            {\n              id: 'description',\n              alpha: {\n                from: 0, // We don't declare 'to' value as that is the element's current alpha value, here we're essentially animating from 0 to 1\n                duration: SHORT_DURATION,\n              },\n              translationY: {\n                from: 16, // Animate translationY from 16dp to 0dp\n                duration: SHORT_DURATION,\n              },\n            },\n          ],\n        },\n      },\n    },\n  },\n});\n")),Object(i.b)("h2",{id:"peek-and-pop-ios-114"},"Peek and Pop (iOS 11.4+)"),Object(i.b)("p",null,"react-native-navigation supports ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/#//apple_ref/doc/uid/TP40016543-CH1-SW3"},"Peek and pop")," feature in iOS 11.4 and newer."),Object(i.b)("p",null,"This works by passing a ref to a component you want to transform into peek view. We have included a handy component to handle all the touches and ref for you:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const handlePress ({ reactTag }) => {\n  Navigation.push(this.props.componentId, {\n    component {\n      name: 'previewed.screen',\n      options: {\n        preview: {\n          reactTag,\n          height: 300,\n          width: 300,\n          commit: true,\n          actions: [{\n            title: \"Displayed Name\",\n            id: \"actionId\",\n            style: 'default', /* or 'selected', 'destructive'*/\n            actions: [/*define a submenu of actions with the same options*/]\n          }]\n        },\n      },\n    },\n  });\n};\n\nconst Button = (\n  <Navigation.TouchablePreview\n    touchableComponent={TouchableHighlight}\n    onPress={handlePress}\n    onPressIn={handlePress}\n  >\n    <Text>My button</Text>\n  </Navigation.TouchablePreview>\n);\n")),Object(i.b)("p",null,"All options except for reactTag are optional. Actions trigger the same event as ",Object(i.b)("a",{parentName:"p",href:"https://wix.github.io/react-native-navigation/#/docs/topBar-buttons?id=handling-button-press-events"},"navigation button presses"),". To react when a preview is committed, listen to the ",Object(i.b)("a",{parentName:"p",href:"https://wix.github.io/react-native-navigation/#/docs/events?id=previewcompleted-ios-114-only"},"previewCompleted")," event."))}d.isMDXComponent=!0},627:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||o;return n?i.a.createElement(u,s(s({ref:t},c),{},{components:n})):i.a.createElement(u,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},628:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},629:function(e,t,n){"use strict";var a=n(0),i=n(630);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},630:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},631:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(629),r=n(628),s=n(55),l=n.n(s);const c=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:b,groupId:m,className:d}=e,{tabGroupChoices:u,setTabGroupChoices:h}=Object(o.a)(),[O,j]=Object(a.useState)(s),g=a.Children.toArray(e.children),v=[];if(null!=m){const e=u[m];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const f=e=>{const t=e.target,n=v.indexOf(t),a=g[n].props.value;j(a),null!=m&&(h(m,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return t>=0&&i<=r&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((()=>t.classList.remove(l.a.tabItemActive)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case p:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case c:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},d)},b.map((e=>{let{value:t,label:n}=e;return i.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:e=>v.push(e),onKeyDown:N,onFocus:f,onClick:f},n)}))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},632:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){let{children:t,hidden:n,className:a}=e;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},633:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(16),i=n(634);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,a){let{forcePrependBaseUrl:o=!1,absolute:r=!1}=void 0===a?{}:a;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(o)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+s:s}(t,e,n,a)}}function r(e,t){void 0===t&&(t={});const{withBaseUrl:n}=o();return n(e,t)}},634:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);