(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[11],{215:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(3),a=t(0),c=t(9),o=t(37),u=t(58),s=t(55),d=t(15),l=t(5),m=t(6),b=t(16);function f(){var n=Object(l.a)(["\n    font-size: 1.4rem;\n    background-color: rgb(235, 172, 1);\n"]);return f=function(){return n},n}function j(){var n=Object(l.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n"]);return j=function(){return n},n}function h(){var n=Object(l.a)(["\n    align-self: end;\n    justify-self: end;\n"]);return h=function(){return n},n}function O(){var n=Object(l.a)(["\n    max-width: 45rem;\n    font-size: 1.4rem;\n    color: gray;\n\n    @media all and (max-width: 500px) {\n        margin-bottom: 2rem;\n    }\n"]);return O=function(){return n},n}function g(){var n=Object(l.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return g=function(){return n},n}function v(){var n=Object(l.a)(["\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return v=function(){return n},n}function x(){var n=Object(l.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 25rem;\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 500px) {\n        grid-template-columns: 1fr;   \n    }\n"]);return x=function(){return n},n}var p=m.c.div(x()),w=m.c.div(v()),y=m.c.p(g()),k=m.c.p(O()),z=m.c.div(h()),C=Object(m.c)(b.a)(j()),V=Object(m.c)(b.a)(f());e.default=function(){var n=Object(a.useState)(""),e=Object(i.a)(n,2),t=e[0],l=e[1],m=Object(c.g)().push,b=Object(a.useContext)(o.a),f=b.users,j=b.totalCount,h=b.isLoading,O=b.message,g=b.showModal,v=b.getUsers,x=b.closeModal;return Object(a.useEffect)((function(){f||v()}),[f]),Object(r.jsxs)("section",{children:[g&&Object(r.jsx)(d.a,{loading:h,title:O,close:x}),Object(r.jsx)(u.a,{searchQuery:t,handleChange:function(n){return l(n.target.value)},handleAddButton:function(){return m("zakaznici/novy-zakaznik")},count:j,title:"Z\xe1kazn\xedci"}),Object(r.jsx)(s.a,{children:f&&f.map((function(n){return Object(r.jsxs)(p,{children:[Object(r.jsxs)(w,{children:[Object(r.jsx)("h2",{children:n.name||n.email}),Object(r.jsx)(y,{children:n._id}),Object(r.jsx)(k,{children:"Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi..."})]}),Object(r.jsxs)(z,{children:[Object(r.jsx)(C,{onClick:function(){return m("zakaznici/".concat(n._id))},children:"Upravi\u0165"}),Object(r.jsx)(V,{children:"Vymaza\u0165"})]})]},n._id)}))})]})}},55:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(5)),a=t(6),c=t(36);function o(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return o=function(){return n},n}var u=a.c.div(o(),c.b);e.a=function(n){var e=n.children;return Object(r.jsx)(u,{children:e})}},58:function(n,e,t){"use strict";var r=t(1),i=(t(0),t(17)),a=t(5),c=t(6),o=t(16),u=t(36);function s(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 1rem;\n\n"]);return s=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return d=function(){return n},n}function l(){var n=Object(a.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return l=function(){return n},n}function m(){var n=Object(a.a)(["\n    display: flex;\n    align-items: center;\n"]);return m=function(){return n},n}function b(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return b=function(){return n},n}function f(){var n=Object(a.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return f=function(){return n},n}var j=c.c.div(f(),u.b),h=c.c.div(b()),O=c.c.div(m()),g=(c.c.div(l()),Object(c.c)(o.a)(d())),v=Object(c.c)(o.a)(s());e.a=function(n){var e=n.searchQuery,t=n.handleChange,a=n.title,c=(n.count,n.handleAddButton),o=void 0===c?function(){}:c;return Object(r.jsxs)(j,{children:[Object(r.jsx)(h,{children:Object(r.jsx)("h1",{children:a})}),Object(r.jsxs)(O,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{type:"search",name:"searchbox",value:e,handleChange:t,label:"Vyh\u013eada\u0165"})}),Object(r.jsx)(g,{children:"Vyh\u013eada\u0165"}),Object(r.jsx)(v,{onClick:o,children:"Prida\u0165"})]})]})}}}]);
//# sourceMappingURL=11.9d0513bc.chunk.js.map