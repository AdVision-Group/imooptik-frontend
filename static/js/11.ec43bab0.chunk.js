(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[11,35],{228:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(19),c=t(10),a=t(0),o=t(70),u=t(16),l=t(2),s=t(53),d=t(57),f=t(50),b=t(54),m=t(8),j=t(9),h=t(26);function O(){var n=Object(m.a)(["\n    font-size: 1.2rem;\n    background-color: var(--primary-color);\n"]);return O=function(){return n},n}function p(){var n=Object(m.a)(["\n    font-size: 1.2rem;\n    margin-right: 1rem;\n"]);return p=function(){return n},n}function v(){var n=Object(m.a)(["\n    grid-area: o;\n\n    align-self: end;\n    justify-self: end;\n"]);return v=function(){return n},n}function g(){var n=Object(m.a)(["\n    grid-area: p;\n\n    text-align:end;\n    align-self: center;\n    justify-self: end;\n"]);return g=function(){return n},n}function x(){var n=Object(m.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return x=function(){return n},n}function y(){var n=Object(m.a)(["\n    font-size: 1.4rem;\n    font-weight: 700;\n    color: #32AA5F;\n    margin-bottom: 1rem;\n"]);return y=function(){return n},n}function k(){var n=Object(m.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return k=function(){return n},n}function w(){var n=Object(m.a)(["\n    grid-area: c;\n\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return w=function(){return n},n}function C(){var n=Object(m.a)(["\n    /* width: 100%; */\n    /* height: 100%; */\n    /* background-color: #eee; */\n    margin-right: 2rem;\n    grid-area: i;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        object-position: start;\n    }  \n\n    @media all and (max-width: 800px) {\n        align-self: start;\n        grid-row-start: 1;\n        grid-row-end: 3;   \n\n        @media all and (max-width: 500px) {\n            justify-self: center;\n            margin-bottom: 2rem;\n        }\n\n    }\n"]);return C=function(){return n},n}function z(){var n=Object(m.a)(['\n    width: 100%;\n    display: grid;\n    grid-template-columns: 15rem 1fr 25rem;\n    grid-template-rows: 1fr auto;\n    grid-template-areas:    "i c p"\n                            "i c o";\n\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns : 20rem 1fr;\n        grid-template-rows: 1fr 1fr;\n\n        @media all and (max-width: 500px) {\n            grid-template-columns : 1fr;\n        }\n    }\n\n']);return z=function(){return n},n}var P=j.c.div(z()),S=j.c.div(C()),T=j.c.div(w()),A=j.c.p(k()),B=j.c.p(y()),I=j.c.p(x()),E=j.c.div(g()),F=j.c.div(v()),D=Object(j.c)(h.a)(p()),N=Object(j.c)(h.a)(O()),Q=function(n){var e=n.product,t=n.handleDeleteButton,i=n.handleUpdateButton,c=n.activePremisesTab,a=e.name,o=e.available,u=e.eanCode,l=e.price,s=e.image;return Object(r.jsxs)(P,{children:[Object(r.jsx)(S,{children:s&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(s.imagePath),alt:s.alt})}),Object(r.jsxs)(T,{children:[Object(r.jsx)("h2",{children:a}),Object(r.jsx)(A,{children:u})]}),Object(r.jsxs)(E,{children:[Object(r.jsxs)(I,{children:[(l/100).toFixed(2),"\u20ac"]}),Object(r.jsx)(B,{children:Object(b.d)(o,c)})]}),Object(r.jsxs)(F,{children:[Object(r.jsx)(D,{onClick:i,children:"Upravi\u0165"}),Object(r.jsx)(N,{onClick:t,children:"Vymaza\u0165"})]})]})},U=t(30),V=t(58);e.default=function(){var n=Object(l.h)().push,e=Object(a.useContext)(u.a),t=e.closeModal,b=e.showModal,m=e.isLoading,j=e.message,h=Object(a.useState)(""),O=Object(c.a)(h,2),p=O[0],v=O[1],g=Object(a.useState)([]),x=Object(c.a)(g,2),y=x[0],k=x[1],w=Object(a.useState)({limit:10,skip:0}),C=Object(c.a)(w,2),z=C[0],P=C[1],S=Object(a.useContext)(o.WarehouseContext),T=S.activePremisesTab,A=S.products,B=S.retailPremisesTabs,I=S.getProductsByQuery,E=S.handleChangePremisesTab,F=S.productCategoryTypeTabs,D=S.activeCategoryTypeTab,N=S.handleChangeCategoryTypeTab,_=S.deleteProduct,J=S.deleteLenses;Object(a.useEffect)((function(){A||I({limit:10}),A&&k(A)}),[A]),Object(a.useEffect)((function(){!p&&A&&0===D&&I({limit:10})}),[p]);return Object(r.jsxs)("section",{children:[b&&Object(r.jsx)(U.a,{loading:m,title:j,close:t}),Object(r.jsx)(s.a,{title:"Sklad",searchQuery:p,handleSearch:function(){""!==p&&0===D&&I({query:p})},handleChange:function(n){return v(n.target.value)},handleAddButton:function(){return n("sklad/novy-produkt")}}),Object(r.jsx)(d.a,{items:B,activeIndex:T,setActiveIndex:E}),Object(r.jsx)(d.a,{items:F,activeIndex:D,setActiveIndex:N}),Object(r.jsxs)(f.a,{children:[y.map((function(e,t){return Object(r.jsx)(Q,{product:e,activePremisesTab:T,handleUpdateButton:function(){return n("sklad/".concat(e._id))},handleDeleteButton:0===D?function(){return n=e._id,void _(n);var n}:function(){return J(e._id)}},t)})),Object(r.jsx)(V.a,{listItems:y,handleClickPrev:function(){I(Object(i.a)(Object(i.a)({},z),{},{skip:z.skip-10})),P(Object(i.a)(Object(i.a)({},z),{},{skip:z.skip-10}))},handleClickNext:function(){y.length<10||(I(Object(i.a)(Object(i.a)({},z),{},{skip:z.skip+10})),P(Object(i.a)(Object(i.a)({},z),{},{skip:z.skip+10})))}})]})]})}},49:function(n,e,t){"use strict";var r=t(1),i=t(19),c=t(29),a=(t(0),t(8)),o=t(9);function u(){var n=Object(a.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function l(){var n=Object(a.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return l=function(){return n},n}var s=Object(o.b)(l()),d=o.c.div(u(),s,s);e.a=function(n){var e=n.handleChange,t=n.label,a=n.name,o=Object(c.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(i.a)({className:"form-input",name:a,onChange:e},o)),t?Object(r.jsx)("label",{htmlFor:a,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},50:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(8)),c=t(9),a=t(28);function o(){var n=Object(i.a)(["\n    max-width: 115rem;\n"]);return o=function(){return n},n}function u(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return u=function(){return n},n}var l=c.c.div(u(),a.b),s=c.c.div(o());e.a=function(n){var e=n.children;return Object(r.jsx)(l,{children:Object(r.jsx)(s,{children:e})})}},52:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(20);var i=t(32);function c(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(i.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},53:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(49)),c=t(8),a=t(9),o=t(26),u=t(28);function l(){var n=Object(c.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: rgb(235, 172, 1);\n    font-weight: bolder;\n"]);return l=function(){return n},n}function s(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return s=function(){return n},n}function d(){var n=Object(c.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function f(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return n},n}function b(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return b=function(){return n},n}function m(){var n=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return m=function(){return n},n}var j=a.c.div(m(),u.b),h=a.c.div(b()),O=a.c.div(f()),p=(a.c.div(d()),Object(a.c)(o.a)(s())),v=Object(a.c)(o.a)(l());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,c=n.handleChange,a=n.title,o=(n.count,n.handleAddButton),u=void 0===o?function(){}:o;return Object(r.jsxs)(j,{children:[Object(r.jsx)(h,{children:Object(r.jsx)("h1",{children:a})}),Object(r.jsxs)(O,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{type:"search",name:"searchbox",value:e,handleChange:c,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(p,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(v,{onClick:u,children:"Prida\u0165"})]})]})}},57:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(8)),c=t(9),a=t(26),o=t(28);function u(){var n=Object(i.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return u=function(){return n},n}function l(){var n=Object(i.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return l=function(){return n},n}var s=c.c.div(l(),o.b),d=Object(c.c)(a.a)(u(),(function(n){return n.active?"#000":"#fff"}),(function(n){return n.active?"#fff":"#000"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));e.a=function(n){var e=n.items,t=n.activeIndex,i=n.setActiveIndex;return Object(r.jsx)(s,{children:Object(r.jsx)("ul",{children:e.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(d,{active:n.id===t,onClick:function(){return i(n.id)},children:n.name})},n.id)}))})})}},58:function(n,e,t){"use strict";var r=t(1),i=t(10),c=t(0),a=t(59),o=t(8),u=t(9);function l(){var n=Object(o.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return s=function(){return n},n}var d=u.c.div(s()),f=u.c.button(l());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,o=n.handleClickPrev,u=void 0===o?function(){}:o,l=n.handleClickNext,s=void 0===l?function(){}:l,b=Object(c.useState)(!0),m=Object(i.a)(b,2),j=m[0],h=m[1],O=Object(c.useState)(!0),p=Object(i.a)(O,2),v=p[0],g=p[1],x=Object(c.useState)(0),y=Object(i.a)(x,2),k=y[0],w=y[1];Object(c.useEffect)((function(){h(0===k)}),[t]),Object(c.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?g(!0):g(!1)}),[t]),Object(c.useEffect)((function(){0!==k&&w((function(n){return n--}))}),[u]),Object(c.useEffect)((function(){w((function(n){return n++}))}),[s]);return Object(r.jsxs)(d,{children:[Object(r.jsx)(f,{disabled:j,onClick:function(){u(),0!==k&&w((function(n){return n-1}))},children:Object(r.jsx)(a.b,{})}),Object(r.jsx)(f,{disabled:v,onClick:function(){s(),w((function(n){return n+1}))},children:Object(r.jsx)(a.c,{})})]})}}}]);
//# sourceMappingURL=11.ec43bab0.chunk.js.map