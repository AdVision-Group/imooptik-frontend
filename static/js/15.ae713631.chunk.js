(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[15],{227:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(51),a=t(10),c=t(0),o=t(17),u=t(79),s=t(16),l=t(2),d=t(53),f=t(56),m=t(50),b=t(8),j=t(9),h=t(26);function p(){var n=Object(b.a)(["\n    font-size: 1.2rem;\n    background-color: #ebac01;\n"]);return p=function(){return n},n}function g(){var n=Object(b.a)(["\n    font-size: 1.2rem;\n    margin-right: 1rem;\n"]);return g=function(){return n},n}function v(){var n=Object(b.a)(["\n    grid-area: o;\n\n    align-self: end;\n    justify-self: end;\n"]);return v=function(){return n},n}function O(){var n=Object(b.a)(["\n    grid-area: p;\n\n    text-align:end;\n    align-self: center;\n    justify-self: end;\n"]);return O=function(){return n},n}function x(){var n=Object(b.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return x=function(){return n},n}function w(){var n=Object(b.a)(["\n    font-size: 1.4rem;\n    font-weight: 700;\n    color: #32AA5F;\n    margin-bottom: 1rem;\n"]);return w=function(){return n},n}function k(){var n=Object(b.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return k=function(){return n},n}function y(){var n=Object(b.a)(["\n    grid-area: c;\n\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return y=function(){return n},n}function C(){var n=Object(b.a)(["\n    /* width: 100%; */\n    /* height: 100%; */\n    /* background-color: #eee; */\n    margin-right: 2rem;\n    grid-area: i;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        object-position: start;\n    }  \n\n    @media all and (max-width: 800px) {\n        align-self: start;\n        grid-row-start: 1;\n        grid-row-end: 3;   \n\n        @media all and (max-width: 500px) {\n            justify-self: center;\n            margin-bottom: 2rem;\n        }\n\n    }\n"]);return C=function(){return n},n}function z(){var n=Object(b.a)(['\n    width: 100%;\n    display: grid;\n    grid-template-columns: 15rem 1fr 25rem;\n    grid-template-rows: 1fr auto;\n    grid-template-areas:    "i c p"\n                            "i c o";\n\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns : 20rem 1fr;\n        grid-template-rows: 1fr 1fr;\n\n        @media all and (max-width: 500px) {\n            grid-template-columns : 1fr;\n        }\n    }\n\n']);return z=function(){return n},n}var B=j.c.div(z()),P=j.c.div(C()),A=j.c.div(y()),F=j.c.p(k()),S=j.c.p(w()),D=j.c.p(x()),E=j.c.div(O()),U=j.c.div(v()),V=Object(j.c)(h.a)(g()),_=Object(j.c)(h.a)(p()),I=function(n){var e=n.name,t=n.stock,i=n.id,a=n.price,c=n.image,o=n.handleDeleteButton,u=n.handleUpdateButton;return Object(r.jsxs)(B,{children:[Object(r.jsx)(P,{children:c&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(c.imagePath),alt:c.alt})}),Object(r.jsxs)(A,{children:[Object(r.jsx)("h2",{children:e}),Object(r.jsx)(F,{children:i})]}),Object(r.jsxs)(E,{children:[Object(r.jsxs)(D,{children:[a,"\u20ac"]}),Object(r.jsx)(S,{children:null!=t?"Na sklade ".concat(t," kusov"):"\u0160o\u0161ovka"})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(V,{onClick:u,children:"Upravi\u0165"}),Object(r.jsx)(_,{onClick:o,children:"Vymaza\u0165"})]})]})},M=t(30);function L(){var n=Object(b.a)(["\n    cursor: pointer;\n    outline: none;\n    border: none;\n    background-color: ",";\n    color: ",";\n    font-family: inherit;\n    font-size: inherit;\n    border-radius: 50%;\n    padding: 0.3rem 1rem;\n\n\n    &:focus {\n        outline: none;\n    }\n"]);return L=function(){return n},n}function N(){var n=Object(b.a)(["\n    ul {\n        width:3rem;\n        list-style: none;\n        display: flex;\n        justify-content: space-between;\n        margin: 0 auto;\n\n        li {\n\n        }\n    }\n"]);return N=function(){return n},n}var J=j.c.div(N()),Q=j.c.button(L(),(function(n){return n.isActive?"#000":"transparent"}),(function(n){return n.isActive?"#fff":"#000"})),R=function(n){for(var e=n.productsPerPage,t=n.totalProducts,i=n.paginate,a=n.activePage,c=[],o=1;o<=Math.ceil(t/e);o++)c.push(o);return Object(r.jsx)(J,{children:Object(r.jsx)("ul",{children:c.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(Q,{isActive:a===n,onClick:function(){return i(n)},children:n})},n)}))})})},W=t(116);e.default=function(){var n=Object(c.useContext)(o.a),e=n.currentUser,t=n.token,b=n.stats,j=Object(c.useContext)(s.a),h=j.isLoading,p=j.showModal,g=j.message,v=j.closeModal,O=Object(c.useContext)(u.WarehouseContext),x=O.showUpdateForm,w=O.products,k=O.lensesArr,y=O.getProducts,C=O.getLenses,z=O.handleProductDelete,B=O.deleteLenses,P=Object(l.h)().push,A=Object(c.useState)(""),F=Object(a.a)(A,2),S=F[0],D=F[1],E=[{id:0,name:"V\u0161etko",permission:0},{id:1,name:"Obchodn\xe1 57, Bratislava",permission:1},{id:2,name:"Mileti\u010dova 38, Bratislava",permission:2},{id:3,name:"Senica, OC Bran\u010d",permission:3},{id:4,name:"Vajnory, Bratislava",permission:4}].filter((function(n){return n.permission===e.premises||e.admin>=2})),U=Object(c.useState)(2),V=Object(a.a)(U,2),_=V[0],L=V[1];Object(c.useEffect)((function(){console.log("fetch products"),w||(y(),C()),g||v()}),[w,k,t]),Object(c.useEffect)((function(){E.length&&L(E[0].id)}),[]);var N=Object(c.useState)([]),J=Object(a.a)(N,2),Q=J[0],q=J[1];Object(c.useEffect)((function(){w&&k&&q([].concat(Object(i.a)(w),Object(i.a)(k)))}),[k,w]);var G=new W.a(Q,{keys:["name","brand","description","eanCode"]});Object(c.useEffect)((function(){var n=G.search(S);n.length>0&&q(n.map((function(n){return n.item}))),S||w&&k&&q([].concat(Object(i.a)(w),Object(i.a)(k)))}),[S]);var H=Object(c.useState)(1),K=Object(a.a)(H,2),T=K[0],X=K[1],Y=Object(c.useState)(10),Z=Object(a.a)(Y,1)[0],$=T*Z,nn=$-Z,en=Q.slice(nn,$);return console.log(b),Object(r.jsxs)("section",{children:[p&&Object(r.jsx)(M.a,{loading:h,title:g,close:v}),Object(r.jsx)(d.a,{searchQuery:S,handleChange:function(n){return D(n.target.value)},handleAddButton:function(){return P("sklad/novy-produkt")},title:"E-shop"}),Object(r.jsx)(f.a,{items:E,activeIndex:_,setActiveIndex:L}),Object(r.jsxs)(m.a,{children:[en&&en.map((function(n){return Object(r.jsx)(I,{name:n.name,stock:"number"===typeof n.available?n.available:n.available?0===_?n.available.reduce((function(n,e){return n+e})):n.available[_-1]:null,id:n.eanCode||n._id,price:(n.price/100).toFixed(2),image:n.image,handleUpdateButton:function(){x(n.type?0:1),P("sklad/".concat(n._id))},handleDeleteButton:n.dioptersRange?function(){return B(n._id)}:function(){return z(n._id)}},n._id)})),Object(r.jsx)(R,{productsPerPage:Z,totalProducts:Q.length,paginate:function(n){return X(n)},activePage:T})]})]})}},49:function(n,e,t){"use strict";var r=t(1),i=t(19),a=t(29),c=(t(0),t(8)),o=t(9);function u(){var n=Object(c.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return s=function(){return n},n}var l=Object(o.b)(s()),d=o.c.div(u(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,c=n.name,o=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(i.a)({className:"form-input",name:c,onChange:e},o)),t?Object(r.jsx)("label",{htmlFor:c,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},50:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(8)),a=t(9),c=t(27);function o(){var n=Object(i.a)(["\n    max-width: 115rem;\n"]);return o=function(){return n},n}function u(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return u=function(){return n},n}var s=a.c.div(u(),c.b),l=a.c.div(o());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(l,{children:e})})}},53:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(49)),a=t(8),c=t(9),o=t(26),u=t(27);function s(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 1rem;\n\n"]);return s=function(){return n},n}function l(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function f(){var n=Object(a.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return n},n}function m(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return m=function(){return n},n}function b(){var n=Object(a.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return b=function(){return n},n}var j=c.c.div(b(),u.b),h=c.c.div(m()),p=c.c.div(f()),g=(c.c.div(d()),Object(c.c)(o.a)(l())),v=Object(c.c)(o.a)(s());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,a=n.handleChange,c=n.title,o=(n.count,n.handleAddButton),u=void 0===o?function(){}:o;return Object(r.jsxs)(j,{children:[Object(r.jsx)(h,{children:Object(r.jsx)("h1",{children:c})}),Object(r.jsxs)(p,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{type:"search",name:"searchbox",value:e,handleChange:a,label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(g,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(v,{onClick:u,children:"Prida\u0165"})]})]})}},56:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(8)),a=t(9),c=t(26),o=t(27);function u(){var n=Object(i.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return u=function(){return n},n}function s(){var n=Object(i.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return s=function(){return n},n}var l=a.c.div(s(),o.b),d=Object(a.c)(c.a)(u(),(function(n){return n.active?"#000":"#fff"}),(function(n){return n.active?"#fff":"#000"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));e.a=function(n){var e=n.items,t=n.activeIndex,i=n.setActiveIndex;return Object(r.jsx)(l,{children:Object(r.jsx)("ul",{children:e.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(d,{active:n.id===t,onClick:function(){return i(n.id)},children:n.name})},n.id)}))})})}}}]);
//# sourceMappingURL=15.ae713631.chunk.js.map