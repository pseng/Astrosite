import{r as Se,a as we}from"./index.Ug27TblK.js";var ue,ce,U={exports:{}},w={};function Ae(){return ue||(ue=1,function(){function e(o){if(null==o)return null;if("function"==typeof o)return o.$$typeof===T?null:o.displayName||o.name||null;if("string"==typeof o)return o;switch(o){case S:return"Fragment";case j:return"Portal";case E:return"Profiler";case k:return"StrictMode";case C:return"Suspense";case _:return"SuspenseList"}if("object"==typeof o)switch("number"==typeof o.tag&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case A:return(o.displayName||"Context")+".Provider";case D:return(o._context.displayName||"Context")+".Consumer";case L:var r=o.render;return(o=o.displayName)||(o=""!==(o=r.displayName||r.name||"")?"ForwardRef("+o+")":"ForwardRef"),o;case V:return null!==(r=o.displayName||null)?r:e(o.type)||"Memo";case R:r=o._payload,o=o._init;try{return e(o(r))}catch{}}return null}function o(e){return""+e}function r(e){try{o(e);var r=!1}catch{r=!0}if(r){var t=(r=console).error,n="function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),o(e)}}function t(){}function n(e){if(void 0===z)try{throw Error()}catch(e){var o=e.stack.trim().match(/\n( *(at )?)/);z=o&&o[1]||"",B=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+z+e+B}function i(e,o){if(!e||J)return"";var r=K.get(e);if(void 0!==r)return r;J=!0,r=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var i;i=W.H,W.H=null,function(){if(0===M){f=console.log,p=console.info,g=console.warn,h=console.error,y=console.group,b=console.groupCollapsed,v=console.groupEnd;var e={configurable:!0,enumerable:!0,value:t,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}();try{var s={DetermineComponentFrameRoot:function(){try{if(o){var r=function(){throw Error()};if(Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(r,[])}catch(e){var t=e}Reflect.construct(e,[],r)}else{try{r.call()}catch(e){t=e}e.call(r.prototype)}}else{try{throw Error()}catch(e){t=e}(r=e())&&"function"==typeof r.catch&&r.catch((function(){}))}}catch(e){if(e&&t&&"string"==typeof e.stack)return[e.stack,t.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=s.DetermineComponentFrameRoot(),c=l[0],u=l[1];if(c&&u){var m=c.split("\n"),d=u.split("\n");for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===d.length)for(a=m.length-1,l=d.length-1;1<=a&&0<=l&&m[a]!==d[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==d[l]){if(1!==a||1!==l)do{if(a--,0>--l||m[a]!==d[l]){var x="\n"+m[a].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),"function"==typeof e&&K.set(e,x),x}}while(1<=a&&0<=l);break}}}finally{J=!1,W.H=i,function(){if(0==--M){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:f}),info:I({},e,{value:p}),warn:I({},e,{value:g}),error:I({},e,{value:h}),group:I({},e,{value:y}),groupCollapsed:I({},e,{value:b}),groupEnd:I({},e,{value:v})})}0>M&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=r}return m=(m=e?e.displayName||e.name:"")?n(m):"","function"==typeof e&&K.set(e,m),m}function s(e){if(null==e)return"";if("function"==typeof e){var o=e.prototype;return i(e,!(!o||!o.isReactComponent))}if("string"==typeof e)return n(e);switch(e){case C:return n("Suspense");case _:return n("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case L:return e=i(e.render,!1);case V:return s(e.type);case R:o=e._payload,e=e._init;try{return s(e(o))}catch{}}return""}function a(){var e=W.A;return null===e?null:e.getOwner()}function l(){var o=e(this.type);return Y[o]||(Y[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),void 0!==(o=this.props.ref)?o:null}function c(o,t,n,i,s,c){if("string"==typeof o||"function"==typeof o||o===S||o===E||o===k||o===C||o===_||o===O||"object"==typeof o&&null!==o&&(o.$$typeof===R||o.$$typeof===V||o.$$typeof===A||o.$$typeof===D||o.$$typeof===L||o.$$typeof===U||void 0!==o.getModuleId)){var m=t.children;if(void 0!==m)if(i)if(F(m)){for(i=0;i<m.length;i++)u(m[i],o);Object.freeze&&Object.freeze(m)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else u(m,o)}else m="",(void 0===o||"object"==typeof o&&null!==o&&0===Object.keys(o).length)&&(m+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),null===o?i="null":F(o)?i="array":void 0!==o&&o.$$typeof===N?(i="<"+(e(o.type)||"Unknown")+" />",m=" Did you accidentally export a JSX literal instead of a component?"):i=typeof o,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,m);if(P.call(t,"key")){m=e(o);var d=Object.keys(t).filter((function(e){return"key"!==e}));i=0<d.length?"{key: someKey, "+d.join(": ..., ")+": ...}":"{key: someKey}",q[m+i]||(d=0<d.length?"{"+d.join(": ..., ")+": ...}":"{}",console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',i,m,d,m),q[m+i]=!0)}if(m=null,void 0!==n&&(r(n),m=""+n),function(e){if(P.call(e,"key")){var o=Object.getOwnPropertyDescriptor(e,"key").get;if(o&&o.isReactWarning)return!1}return void 0!==e.key}(t)&&(r(t.key),m=""+t.key),"key"in t)for(var f in n={},t)"key"!==f&&(n[f]=t[f]);else n=t;return m&&function(e,o){function r(){H||(H=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",o))}r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(n,"function"==typeof o?o.displayName||o.name||"Unknown":o),function(e,o,r,t,n,i){return r=i.ref,e={$$typeof:N,type:e,key:o,props:i,_owner:n},null!==(void 0!==r?r:null)?Object.defineProperty(e,"ref",{enumerable:!1,get:l}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}(o,m,c,0,a(),n)}function u(e,o){if("object"==typeof e&&e&&e.$$typeof!==X)if(F(e))for(var r=0;r<e.length;r++){var t=e[r];m(t)&&d(t,o)}else if(m(e))e._store&&(e._store.validated=1);else if(null===e||"object"!=typeof e?r=null:r="function"==typeof(r=$&&e[$]||e["@@iterator"])?r:null,"function"==typeof r&&r!==e.entries&&(r=r.call(e))!==e)for(;!(e=r.next()).done;)m(e.value)&&d(e.value,o)}function m(e){return"object"==typeof e&&null!==e&&e.$$typeof===N}function d(o,r){if(o._store&&!o._store.validated&&null==o.key&&(o._store.validated=1,r=function(o){var r="",t=a();return t&&(t=e(t.type))&&(r="\n\nCheck the render method of `"+t+"`."),r||(o=e(o))&&(r="\n\nCheck the top-level render call using <"+o+">."),r}(r),!G[r])){G[r]=!0;var t="";o&&null!=o._owner&&o._owner!==a()&&(t=null,"number"==typeof o._owner.tag?t=e(o._owner.type):"string"==typeof o._owner.name&&(t=o._owner.name),t=" It was passed a child from "+t+".");var n=W.getCurrentStack;W.getCurrentStack=function(){var e=s(o.type);return n&&(e+=n()||""),e},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',r,t),W.getCurrentStack=n}}var f,p,g,h,y,b,v,x=Se(),N=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),A=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),$=Symbol.iterator,T=Symbol.for("react.client.reference"),W=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=Object.prototype.hasOwnProperty,I=Object.assign,U=Symbol.for("react.client.reference"),F=Array.isArray,M=0;t.__reactDisabledLog=!0;var z,B,H,J=!1,K=new("function"==typeof WeakMap?WeakMap:Map),X=Symbol.for("react.client.reference"),Y={},q={},G={};w.Fragment=S,w.jsxDEV=function(e,o,r,t,n,i){return c(e,o,r,t,0,i)}}()),w}function ke(){return ce||(ce=1,U.exports=Ae()),U.exports}var o=ke();const p={PreStructural:()=>o.jsxDEV("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"w-7 h-7",children:o.jsxDEV("circle",{cx:"12",cy:"12",r:"6",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:6,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:5,columnNumber:5},void 0),UniStructural:()=>o.jsxDEV("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"w-7 h-7",children:o.jsxDEV("line",{x1:"8",y1:"12",x2:"16",y2:"12",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:11,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:10,columnNumber:5},void 0),MultiStructural:()=>o.jsxDEV("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"w-7 h-7",children:[o.jsxDEV("line",{x1:"6",y1:"12",x2:"18",y2:"12",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:16,columnNumber:7},void 0),o.jsxDEV("line",{x1:"6",y1:"8",x2:"18",y2:"8",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:17,columnNumber:7},void 0),o.jsxDEV("line",{x1:"6",y1:"16",x2:"18",y2:"16",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:18,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:15,columnNumber:5},void 0),Relational:()=>o.jsxDEV("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"w-7 h-7",children:[o.jsxDEV("circle",{cx:"8",cy:"8",r:"2",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:23,columnNumber:7},void 0),o.jsxDEV("circle",{cx:"16",cy:"8",r:"2",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:24,columnNumber:7},void 0),o.jsxDEV("circle",{cx:"8",cy:"16",r:"2",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:25,columnNumber:7},void 0),o.jsxDEV("circle",{cx:"16",cy:"16",r:"2",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:26,columnNumber:7},void 0),o.jsxDEV("line",{x1:"8",y1:"8",x2:"16",y2:"16",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:27,columnNumber:7},void 0),o.jsxDEV("line",{x1:"16",y1:"8",x2:"8",y2:"16",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:28,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:22,columnNumber:5},void 0),ExtendedAbstract:()=>o.jsxDEV("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"w-7 h-7",children:[o.jsxDEV("circle",{cx:"6",cy:"12",r:"2",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:33,columnNumber:7},void 0),o.jsxDEV("circle",{cx:"12",cy:"12",r:"2",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:34,columnNumber:7},void 0),o.jsxDEV("circle",{cx:"18",cy:"12",r:"2",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:35,columnNumber:7},void 0),o.jsxDEV("path",{d:"M18 12 C18 8, 22 8, 22 12",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:36,columnNumber:7},void 0),o.jsxDEV("line",{x1:"8",y1:"12",x2:"10",y2:"12",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:37,columnNumber:7},void 0),o.jsxDEV("line",{x1:"14",y1:"12",x2:"16",y2:"12",strokeWidth:"1.5"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:38,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:32,columnNumber:5},void 0)},Ce=[{title:"Pre-Structural",icon:p.PreStructural,description:"I don't really know anything about this.",details:"At this stage, learning is minimal or non-existent. The learner may have scattered, unconnected information without any real understanding.",color:"bg-indigo-100 hover:bg-indigo-200",textColor:"text-gray-800"},{title:"Uni-Structural",icon:p.UniStructural,description:"I know one thing about this.",details:"Basic understanding of one aspect of the topic. The learner can identify, name, or follow simple procedures.",color:"bg-indigo-200 hover:bg-indigo-300",textColor:"text-gray-800"},{title:"Multi-Structural",icon:p.MultiStructural,description:"I know three or more things but I'm not sure when or why to use it.",details:"Understanding of several aspects of the topic, but they are treated independently. The learner can enumerate, describe, list, and combine.",color:"bg-indigo-300 hover:bg-indigo-400",textColor:"text-gray-800"},{title:"Relational",icon:p.Relational,description:"I can do this and I know when and why I should use this.",details:"Understanding of how different aspects of the topic relate to each other. The learner can compare, contrast, explain causes, analyze, and integrate.",color:"bg-indigo-400 hover:bg-indigo-500",textColor:"text-white"},{title:"Extended Abstract",icon:p.ExtendedAbstract,description:"I am able to model or teach this to others. I can even use what I know in other contexts.",details:"Deep understanding that extends beyond the immediate topic. The learner can theorize, generalize, hypothesize, and reflect.",color:"bg-indigo-500 hover:bg-indigo-600",textColor:"text-white"}],_e=()=>{const[e,r]=we.useState(null);return o.jsxDEV("div",{className:"max-w-4xl mx-auto p-6",children:[o.jsxDEV("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Learning Stages"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:91,columnNumber:7},void 0),o.jsxDEV("div",{className:"grid gap-4",children:Ce.map(((t,n)=>{const i=t.icon;return o.jsxDEV("div",{className:`group ${t.color} rounded-lg p-4 transition-transform transition-colors duration-700 ease-in-out transform hover:scale-105 cursor-pointer shadow-sm hover:shadow-md`,onMouseEnter:()=>r(n),onMouseLeave:()=>r(null),children:o.jsxDEV("div",{className:"flex items-start space-x-4",children:[o.jsxDEV("div",{className:"transition-all duration-700 ease-in-out group-hover:scale-110 text-indigo-600",children:o.jsxDEV(i,{},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:104,columnNumber:19},void 0)},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:103,columnNumber:17},void 0),o.jsxDEV("div",{className:"flex-1",children:[o.jsxDEV("h3",{className:`font-bold text-lg mb-2 transition-all duration-700 ease-in-out group-hover:translate-x-2 ${t.textColor||"text-white"}`,children:t.title},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:107,columnNumber:19},void 0),o.jsxDEV("p",{className:`${t.textColor||"text-white"} opacity-90 transition-all duration-700 ease-in-out group-hover:translate-x-2`,children:t.description},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:110,columnNumber:19},void 0),o.jsxDEV("div",{className:"overflow-hidden transition-all duration-700 ease-in-out "+(e===n?"max-h-32 opacity-100 mt-2":"max-h-0 opacity-0"),children:o.jsxDEV("p",{className:`text-sm ${t.textColor||"text-white"} opacity-80`,children:t.details},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:118,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:113,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:106,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:102,columnNumber:15},void 0)},t.title,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:96,columnNumber:13},void 0)}))},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:92,columnNumber:7},void 0),o.jsxDEV("p",{className:"text-sm text-gray-500 mt-4 text-center",children:"Hover over each stage to learn more details"},void 0,!1,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:128,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/user/Astrosite/src/components/LearningStages.jsx",lineNumber:90,columnNumber:5},void 0)};export{_e as default};