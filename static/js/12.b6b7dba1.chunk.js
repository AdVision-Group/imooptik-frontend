(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[12],{216:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(86),c=t(5),a=t(0),o=t(8),u=t(87),s=t(18),l=t(4),d=t(54),f=t(55),m=t(51),j=t(2),b=t(3),h=t(15);function v(){var n=Object(j.a)(["\n    font-size: 1.4rem;\n    background-color: #ebac01;\n"]);return v=function(){return n},n}function O(){var n=Object(j.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n"]);return O=function(){return n},n}function g(){var n=Object(j.a)(["\n    align-self: end;\n    justify-self: end;\n"]);return g=function(){return n},n}function p(){var n=Object(j.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return p=function(){return n},n}function x(){var n=Object(j.a)(["\n    font-size: 1.4rem;\n    font-weight: 700;\n    color: #32AA5F;\n    margin-bottom: 2rem;\n"]);return x=function(){return n},n}function w(){var n=Object(j.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return w=function(){return n},n}function k(){var n=Object(j.a)(["\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return k=function(){return n},n}function y(){var n=Object(j.a)(["\n    /* width: 100%; */\n    /* height: 100%; */\n    /* background-color: #eee; */\n    margin-right: 2rem;\n \n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        object-position: start;\n    }  \n\n    @media all and (max-width: 800px) {\n        align-self: start;\n        grid-row-start: 1;\n        grid-row-end: 3;   \n\n        @media all and (max-width: 500px) {\n            justify-self: center;\n            margin-bottom: 2rem;\n        }\n\n    }\n"]);return y=function(){return n},n}function C(){var n=Object(j.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 20rem 1fr 25rem;\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns : 20rem 1fr;\n        grid-template-rows: 1fr 1fr;\n\n        @media all and (max-width: 500px) {\n            grid-template-columns : 1fr;\n        }\n    }\n\n"]);return C=function(){return n},n}var P=b.c.div(C()),A=b.c.div(y()),B=b.c.div(k()),z=b.c.p(w()),S=b.c.p(x()),D=b.c.p(p()),E=b.c.div(g()),U=Object(b.c)(h.a)(O()),_=Object(b.c)(h.a)(v()),I=function(n){var e=n.name,t=n.stock,i=n.id,c=n.price,a=n.image,o=n.handleDeleteButton,u=n.handleUpdateButton;return Object(r.jsxs)(P,{children:[Object(r.jsx)(A,{children:a&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(a.imagePath),alt:a.alt})}),Object(r.jsxs)(B,{children:[Object(r.jsx)("h2",{children:e}),Object(r.jsx)(z,{children:i}),Object(r.jsx)(S,{children:null!=t?"Na sklade ".concat(t," kusov"):"\u0160o\u0161ovka"}),Object(r.jsxs)(D,{children:[c,"\u20ac"]})]}),Object(r.jsxs)(E,{children:[Object(r.jsx)(U,{onClick:u,children:"Upravi\u0165"}),Object(r.jsx)(_,{onClick:o,children:"Vymaza\u0165"})]})]})},M=t(13);function V(){var n=Object(j.a)(["\n    cursor: pointer;\n    outline: none;\n    border: none;\n    background-color: ",";\n    color: ",";\n    font-family: inherit;\n    font-size: inherit;\n    border-radius: 50%;\n    padding: 0.3rem 1rem;\n\n\n    &:focus {\n        outline: none;\n    }\n"]);return V=function(){return n},n}function F(){var n=Object(j.a)(["\n    ul {\n        width:3rem;\n        list-style: none;\n        display: flex;\n        justify-content: space-between;\n        margin: 0 auto;\n\n        li {\n\n        }\n    }\n"]);return F=function(){return n},n}var L=b.c.div(F()),J=b.c.button(V(),(function(n){return n.isActive?"#000":"transparent"}),(function(n){return n.isActive?"#fff":"#000"})),Q=function(n){for(var e=n.productsPerPage,t=n.totalProducts,i=n.paginate,c=n.activePage,a=[],o=1;o<=Math.ceil(t/e);o++)a.push(o);return Object(r.jsx)(L,{children:Object(r.jsx)("ul",{children:a.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(J,{isActive:c===n,onClick:function(){return i(n)},children:n})},n)}))})})},N=t(85);e.default=function(){var n=Object(a.useContext)(o.a),e=n.currentUser,t=n.token,j=Object(a.useContext)(s.a),b=j.isLoading,h=j.showModal,v=j.message,O=j.closeModal,g=Object(a.useContext)(u.WarehouseContext),p=g.showUpdateForm,x=g.products,w=g.lensesArr,k=g.getProducts,y=g.getLenses,C=g.handleProductDelete,P=g.deleteLenses,A=Object(l.g)().push,B=Object(a.useState)(""),z=Object(c.a)(B,2),S=z[0],D=z[1],E=[{id:0,name:"V\u0161etko",permission:0},{id:1,name:"Obchodn\xe1 57, Bratislava",permission:1},{id:2,name:"Mileti\u010dova 38, Bratislava",permission:2},{id:3,name:"Senica, OC Bran\u010d",permission:3},{id:4,name:"Vajnory, Bratislava",permission:4}].filter((function(n){return n.permission===e.premises||e.admin>=2})),U=Object(a.useState)(2),_=Object(c.a)(U,2),V=_[0],F=_[1];Object(a.useEffect)((function(){console.log("fetch products"),x||(k(),y()),v||O()}),[x,w,t]),Object(a.useEffect)((function(){E.length&&F(E[0].id)}),[]);var L=Object(a.useState)([]),J=Object(c.a)(L,2),R=J[0],W=J[1];Object(a.useEffect)((function(){x&&w&&W([].concat(Object(i.a)(x),Object(i.a)(w)))}),[w,x]);var q=new N.a(R,{keys:["name","brand","description"]});Object(a.useEffect)((function(){var n=q.search(S);n.length>0&&W(n.map((function(n){return n.item}))),S||x&&w&&W([].concat(Object(i.a)(x),Object(i.a)(w)))}),[S]);var G=Object(a.useState)(1),H=Object(c.a)(G,2),K=H[0],T=H[1],X=Object(a.useState)(10),Y=Object(c.a)(X,1)[0],Z=K*Y,$=Z-Y,nn=R.slice($,Z);return console.log(x),Object(r.jsxs)("section",{children:[h&&Object(r.jsx)(M.a,{loading:b,title:v,close:O}),Object(r.jsx)(d.a,{searchQuery:S,handleChange:function(n){return D(n.target.value)},handleAddButton:function(){return A("sklad/novy-produkt")},title:"E-shop"}),Object(r.jsx)(f.a,{items:E,activeIndex:V,setActiveIndex:F}),Object(r.jsxs)(m.a,{children:[nn&&nn.map((function(n){return Object(r.jsx)(I,{name:n.name,stock:n.available?0===V?n.available.reduce((function(n,e){return n+e})):n.available[V-1]:null,id:n.eanCode||n._id,price:(n.price/100).toFixed(2),image:n.image,handleUpdateButton:function(){p(n.available?0:1),A("sklad/".concat(n._id))},handleDeleteButton:n.dioptersRange?function(){return P(n._id)}:function(){return C(n._id)}},n._id)})),Object(r.jsx)(Q,{productsPerPage:Y,totalProducts:R.length,paginate:function(n){return T(n)},activePage:K})]})]})}},51:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(2)),c=t(3),a=t(32);function o(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return o=function(){return n},n}var u=c.c.div(o(),a.b);e.a=function(n){var e=n.children;return Object(r.jsx)(u,{children:e})}},54:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(16)),c=t(2),a=t(3),o=t(15),u=t(32);function s(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 1rem;\n\n"]);return s=function(){return n},n}function l(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(c.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function f(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return n},n}function m(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return m=function(){return n},n}function j(){var n=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return j=function(){return n},n}var b=a.c.div(j(),u.b),h=a.c.div(m()),v=a.c.div(f()),O=(a.c.div(d()),Object(a.c)(o.a)(l()),Object(a.c)(o.a)(s()));e.a=function(n){var e=n.searchQuery,t=n.handleChange,c=n.title,a=(n.count,n.handleAddButton),o=void 0===a?function(){}:a;return Object(r.jsxs)(b,{children:[Object(r.jsx)(h,{children:Object(r.jsx)("h1",{children:c})}),Object(r.jsxs)(v,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{type:"search",name:"searchbox",value:e,handleChange:t,label:"Vyh\u013eada\u0165"})}),Object(r.jsx)(O,{onClick:o,children:"Prida\u0165"})]})]})}},55:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(2)),c=t(3),a=t(15),o=t(32);function u(){var n=Object(i.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return u=function(){return n},n}function s(){var n=Object(i.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return s=function(){return n},n}var l=c.c.div(s(),o.b),d=Object(c.c)(a.a)(u(),(function(n){return n.active?"#000":"#fff"}),(function(n){return n.active?"#fff":"#000"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));e.a=function(n){var e=n.items,t=n.activeIndex,i=n.setActiveIndex;return Object(r.jsx)(l,{children:Object(r.jsx)("ul",{children:e.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(d,{active:n.id===t,onClick:function(){return i(n.id)},children:n.name})},n.id)}))})})}}}]);
//# sourceMappingURL=12.b6b7dba1.chunk.js.map