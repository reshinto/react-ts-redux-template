(this["webpackJsonprepo-builder"]=this["webpackJsonprepo-builder"]||[]).push([[0],{2:function(e,t,n){e.exports={row:"styles_row__2EEb7",value:"styles_value__3kEkH",button:"styles_button__huoeW",textbox:"styles_textbox__Td1-B",asyncButton:"styles_asyncButton__1lDHR styles_button__huoeW"}},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(5),c=n.n(a),s=n(3),o=n(11),u=s.c,i=n(9),l=n.n(i),d=n(10),b=n(4);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var h=Object(b.b)("counter/fetchCount",function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(b.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),x=p.actions,f=x.increment,m=x.decrement,O=x.incrementByAmount,v=function(e){return e.counter.value},k=p.reducer,_=n(2),g=n.n(_),y=n(1);function N(){var e=u(v),t=Object(s.b)(),n=Object(r.useState)("2"),a=Object(o.a)(n,2),c=a[0],i=a[1],l=Number(c)||0;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:g.a.row,children:[Object(y.jsx)("button",{className:g.a.button,"aria-label":"Decrement value",onClick:function(){return t(m())},children:"-"}),Object(y.jsx)("span",{className:g.a.value,children:e}),Object(y.jsx)("button",{className:g.a.button,"aria-label":"Increment value",onClick:function(){return t(f())},children:"+"})]}),Object(y.jsxs)("div",{className:g.a.row,children:[Object(y.jsx)("input",{className:g.a.textbox,"aria-label":"Set increment amount",value:c,onChange:function(e){return i(e.target.value)}}),Object(y.jsx)("button",{className:g.a.button,onClick:function(){return t(O(l))},children:"Add Amount"}),Object(y.jsx)("button",{className:g.a.asyncButton,onClick:function(){return t(h(l))},children:"Add Async"}),Object(y.jsx)("button",{className:g.a.button,onClick:function(){return t((e=l,function(t,n){v(n())%2===1&&t(O(e))}));var e},children:"Add If Odd"})]})]})}n(22);var w=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)(N,{}),Object(y.jsxs)("p",{children:["Edit ",Object(y.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(y.jsxs)("span",{children:[Object(y.jsx)("span",{children:"Learn "}),Object(y.jsx)("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"React"}),Object(y.jsx)("span",{children:", "}),Object(y.jsx)("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"}),Object(y.jsx)("span",{children:", "}),Object(y.jsx)("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux Toolkit"}),",",Object(y.jsx)("span",{children:" and "}),Object(y.jsx)("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"React Redux"})]})]})})},A=Object(b.a)({reducer:{counter:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);c.a.render(Object(y.jsx)(r.StrictMode,{children:Object(y.jsx)(s.a,{store:A,children:Object(y.jsx)(w,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.74f6a53b.chunk.js.map