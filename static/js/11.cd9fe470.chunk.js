(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[11,19],{221:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(6),a=t(1),i=t(9),o=t(75),u=t(55),s=t(56),d=t(52),l=t(3),f=t(4),b=t(16);function j(){var e=Object(l.a)(["\n    font-size: 1.4rem;\n    background-color: rgb(235, 172, 1);\n"]);return j=function(){return e},e}function m(){var e=Object(l.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n"]);return m=function(){return e},e}function O(){var e=Object(l.a)(["\n    align-self: end;\n    justify-self: end;\n"]);return O=function(){return e},e}function h(){var e=Object(l.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return h=function(){return e},e}function v(){var e=Object(l.a)(["\n    font-size: 1.4rem;\n    /* font-weight: 700; */\n    color: gray;\n    margin-bottom: 2rem;\n"]);return v=function(){return e},e}function p(){var e=Object(l.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return p=function(){return e},e}function g(){var e=Object(l.a)(["\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return g=function(){return e},e}function x(){var e=Object(l.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 25rem;\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns: 1fr;\n\n    }\n"]);return x=function(){return e},e}var y=f.c.div(x()),P=f.c.div(g()),w=f.c.p(p()),C=f.c.p(v()),k=f.c.p(h()),S=f.c.div(O()),D=Object(f.c)(b.a)(m()),z=Object(f.c)(b.a)(j()),I=function(e){var n=e.name,t=e.id,c=e.date,a=e.totalPrice;return Object(r.jsxs)(y,{children:[Object(r.jsxs)(P,{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)(w,{children:t}),Object(r.jsx)(C,{children:c}),Object(r.jsxs)(k,{children:[a,"\u20ac"]})]}),Object(r.jsxs)(S,{children:[Object(r.jsx)(D,{children:"Upravi\u0165"}),Object(r.jsx)(z,{children:"Vymaza\u0165"})]})]})};n.default=function(){var e=Object(a.useContext)(i.a).currentUser,n=Object(a.useState)(""),t=Object(c.a)(n,2),l=t[0],f=t[1],b=Object(a.useState)(2),j=Object(c.a)(b,2),m=j[0],O=j[1],h=Object(a.useContext)(o.OrdersContext).getOrders;return Object(a.useEffect)((function(){h()}),[]),Object(r.jsxs)("section",{children:[Object(r.jsx)(u.a,{searchQuery:l,handleChange:function(e){return f(e.target.value)},title:"Objedn\xe1vky"}),Object(r.jsx)(s.a,{items:[{id:1,name:"V\u0161etko"},{id:2,name:"De\u0148"},{id:3,name:"T\xfd\u017eden"},{id:4,name:"Mesiac"},{id:5,name:"Rok"}],activeIndex:m,setActiveIndex:O}),Object(r.jsx)(d.a,{children:e.orders.length?e.orders.map((function(e,n){return Object(r.jsx)(I,{name:"Product name",id:"[Product ID]",date:"28. November 2020",totalPrice:"99.99"},n)})):Object(r.jsx)("div",{children:"\u017diadne objedn\xe1vky"})})]})}},52:function(e,n,t){"use strict";var r=t(2),c=(t(1),t(3)),a=t(4),i=t(33);function o(){var e=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return o=function(){return e},e}var u=a.c.div(o(),i.b);n.a=function(e){var n=e.children;return Object(r.jsx)(u,{children:n})}},55:function(e,n,t){"use strict";var r=t(2),c=(t(1),t(17)),a=t(3),i=t(4),o=t(16),u=t(33);function s(){var e=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 1rem;\n\n"]);return s=function(){return e},e}function d(){var e=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return d=function(){return e},e}function l(){var e=Object(a.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return l=function(){return e},e}function f(){var e=Object(a.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return e},e}function b(){var e=Object(a.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return b=function(){return e},e}function j(){var e=Object(a.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return j=function(){return e},e}var m=i.c.div(j(),u.b),O=i.c.div(b()),h=i.c.div(f()),v=(i.c.div(l()),Object(i.c)(o.a)(d()),Object(i.c)(o.a)(s()));n.a=function(e){var n=e.searchQuery,t=e.handleChange,a=e.title,i=(e.count,e.handleAddButton),o=void 0===i?function(){}:i;return Object(r.jsxs)(m,{children:[Object(r.jsx)(O,{children:Object(r.jsx)("h1",{children:a})}),Object(r.jsxs)(h,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{type:"search",name:"searchbox",value:n,handleChange:t,label:"Vyh\u013eada\u0165"})}),Object(r.jsx)(v,{onClick:o,children:"Prida\u0165"})]})]})}},56:function(e,n,t){"use strict";var r=t(2),c=(t(1),t(3)),a=t(4),i=t(16),o=t(33);function u(){var e=Object(c.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return u=function(){return e},e}function s(){var e=Object(c.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return s=function(){return e},e}var d=a.c.div(s(),o.b),l=Object(a.c)(i.a)(u(),(function(e){return e.active?"#000":"#fff"}),(function(e){return e.active?"#fff":"#000"}),(function(e){return e.active?400:700}),(function(e){return e.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));n.a=function(e){var n=e.items,t=e.activeIndex,c=e.setActiveIndex;return Object(r.jsx)(d,{children:Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(l,{active:e.id===t,onClick:function(){return c(e.id)},children:e.name})},e.id)}))})})}},75:function(e,n,t){"use strict";t.r(n),t.d(n,"OrdersContext",(function(){return h}));var r=t(2),c=t(8),a=t.n(c),i=t(13),o=t(34),u=t(20),s=t(6),d=t(1),l=t(9),f=t(19),b={lenses:{diopters:[0,0],distance:[0,0],cylinder:[0,0],cylinderAxes:[0,0]},product:"",lens:"",price:2220},j=[{name:"Hotovos\u0165"},{name:"Karta"},{name:"Z\xe1loha"}],m=["eshop","lenses","diopters","summary"],O=function(e){var n=new Headers;n.append("auth-token",e);var t={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),t)},h=Object(d.createContext)({orders:null,getOrders:function(){},productsToOrder:[],selectedProduct:null,selectedLenses:null,combinedProduct:null,paymentOptions:[],deposit:0,setDeposit:function(){},steps:[],activeStep:"",handleChangeStep:function(){},selectedPayment:0,handleChangePayment:function(){},handleSelectProduct:function(){},handleSelectLenses:function(){},handleRemoveProduct:function(){},handleParameterChange:function(){}});n.default=function(e){var n=e.children,t=Object(d.useContext)(l.a).token,c=Object(d.useContext)(f.a),v=c.getMessage,p=c.setIsLoading,g=c.setShowModal,x=c.closeModal,y=Object(d.useState)(null),P=Object(s.a)(y,2),w=P[0],C=P[1],k=Object(d.useState)([]),S=Object(s.a)(k,2),D=S[0],z=S[1],I=Object(d.useState)(null),L=Object(s.a)(I,2),A=L[0],M=L[1],T=Object(d.useState)(null),N=Object(s.a)(T,2),R=N[0],V=N[1],E=Object(d.useState)(b),H=Object(s.a)(E,2),J=H[0],Q=H[1],U=j,_=m,B=Object(d.useState)(0),G=Object(s.a)(B,2),K=G[0],Z=G[1],q=Object(d.useState)("eshop"),F=Object(s.a)(q,2),W=F[0],X=F[1],Y=Object(d.useState)(0),$=Object(s.a)(Y,2),ee=$[0],ne=$[1],te=function(){var e=Object(i.a)(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),g(!0),e.prev=2,e.next=5,O(t);case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(r=e.sent).orders){e.next=13;break}return C(r.orders),x(),e.abrupt("return");case 13:v(r.message),p(!1),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),v("Nieco sa pokazilo"),p(!1);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}();return console.log("combinedProduct"),console.log(J),console.log("combinedProduct"),Object(r.jsx)(h.Provider,{value:{orders:w,getOrders:te,productsToOrder:D,selectedProduct:A,selectedLenses:R,combinedProduct:J,paymentOptions:U,deposit:K,setDeposit:Z,steps:_,activeStep:W,handleChangeStep:function(e){X(_[e])},selectedPayment:ee,handleChangePayment:function(e,n){e.preventDefault(),ne(n)},handleSelectProduct:function(e,n){e.preventDefault(),M(n),Q(Object(u.a)(Object(u.a)({},J),{},{product:n._id})),X(_[1])},handleSelectLenses:function(e,n){console.log(n),e.preventDefault(),V(n),Q(Object(u.a)(Object(u.a)({},J),{},{lens:n._id})),X(_[2])},handleRemoveProduct:function(e,n,t){e.preventDefault(),z(D.filter((function(e,n){return n!==t})))},handleParameterChange:function(e,n){var t=e.target,r=t.name,c=t.value,a=J.lenses[r];a[n]=Number(c),Q(Object(u.a)(Object(u.a)({},J),{},{lenses:Object(u.a)(Object(u.a)({},J.lenses),{},Object(o.a)({},r,a))}))}},children:n})}}}]);
//# sourceMappingURL=11.cd9fe470.chunk.js.map