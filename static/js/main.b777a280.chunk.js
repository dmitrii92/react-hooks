(this["webpackJsonpreact-js-ie11-starter"]=this["webpackJsonpreact-js-ie11-starter"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),o=(n(23),n(6)),u=n(5),m=function(){return r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Form")))},i=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home page"),r.a.createElement(m,null))},E=n(8),s=function(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("p",null,"\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ",n," \u0440\u0430\u0437"),r.a.createElement("button",{onClick:function(){return c(n+1)}},"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f"),r.a.createElement("h4",null,"For more information",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-state.html"}," see.")))},f=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/state-hook-example",exact:!0},"State Hook Example")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/effect-hook-example",exact:!0},"Effect Hook Example")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/reducer-hook-example",exact:!0},"Reducer Hook Example"))))},h=function(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){document.title="\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ".concat(n," \u0440\u0430\u0437")})),r.a.createElement("div",null,r.a.createElement("h3",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e useEffect"),r.a.createElement("p",null,"\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ",n," \u0440\u0430\u0437"),r.a.createElement("button",{onClick:function(){return c(n+1)}},"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f"),r.a.createElement("h4",null,"For more information",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-effect.html"}," see.")))},p=r.a.createContext(),d={count:0};function b(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw new Error}}function k(){var e=Object(a.useReducer)(b,d),t=Object(E.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,"Count: ",n.count,r.a.createElement("button",{onClick:function(){return c({type:"decrement"})}},"-"),r.a.createElement("button",{onClick:function(){return c({type:"increment"})}},"+"))}var v=function(){return r.a.createElement("div",null,r.a.createElement(k,null))};var x=function(){return r.a.createElement(p.Provider,null,r.a.createElement(o.a,{basename:"/".concat(window.location.toString())},r.a.createElement("h1",null,"Simple React App in JS"),r.a.createElement(f,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:i}),r.a.createElement(u.b,{path:"/state-hook-example",component:s}),r.a.createElement(u.b,{path:"/effect-hook-example",component:h}),r.a.createElement(u.b,{path:"/reducer-hook-example",component:v}),r.a.createElement(u.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b777a280.chunk.js.map