(this["webpackJsonpreact-js-ie11-starter"]=this["webpackJsonpreact-js-ie11-starter"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),c=n.n(l),o=(n(23),n(6)),u=n(5),m=function(){return r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Form")))},i=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home page"),r.a.createElement(m,null))},E=n(8),s=function(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("p",null,"\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ",n," \u0440\u0430\u0437"),r.a.createElement("button",{onClick:function(){return l(n+1)}},"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f"),r.a.createElement("h4",null,"For more information",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-state.html"}," see.")))},f=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/state-hook-example"},"State Hook Example")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/effect-hook-example"},"Effect Hook Example")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/reducer-hook-example"},"Reducer Hook Example"))))},h=function(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){document.title="\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ".concat(n," \u0440\u0430\u0437")})),r.a.createElement("div",null,r.a.createElement("h3",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e useEffect"),r.a.createElement("p",null,"\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ",n," \u0440\u0430\u0437"),r.a.createElement("button",{onClick:function(){return l(n+1)}},"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f"),r.a.createElement("h4",null,"For more information",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-effect.html"}," see.")))},p=r.a.createContext(),d={count:0};function k(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw new Error}}function v(){var e=Object(a.useReducer)(k,d),t=Object(E.a)(e,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,"Count: ",n.count,r.a.createElement("button",{onClick:function(){return l({type:"decrement"})}},"-"),r.a.createElement("button",{onClick:function(){return l({type:"increment"})}},"+"))}var b=function(){return r.a.createElement("div",null,r.a.createElement(v,null))};var x=function(){var e=window.location.pathname.toString();return console.log(e),r.a.createElement(p.Provider,null,r.a.createElement(o.a,null,r.a.createElement("h1",null,"Simple React App in JS"),r.a.createElement(f,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:i}),r.a.createElement(u.a,{path:"/state-hook-example",exact:!0,component:s}),r.a.createElement(u.a,{path:"/effect-hook-example",exact:!0,component:h}),r.a.createElement(u.a,{path:"/reducer-hook-example",exact:!0,component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0aeffe55.chunk.js.map