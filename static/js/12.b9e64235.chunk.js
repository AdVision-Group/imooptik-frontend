(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[12],{239:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(21),a=t(10),i=t(1),o=t(19),u=t(3),l=t(18),s=t(63),d=t(58),b=t(54),f=t(32),j=t(64),m=t(53),p=[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2}],h=t(14),v=t(5),O=t(6),x=t(28);function g(){var n=Object(v.a)(["\n    font-size: 1.4rem;\n    background-color: var(--color-red);\n    /* background-color: rgb(235, 172, 1); */\n    padding: .5rem 1.8rem;\n"]);return g=function(){return n},n}function k(){var n=Object(v.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n    padding: .5rem 1.8rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return k=function(){return n},n}function w(){var n=Object(v.a)(["\n    width: 100%;\n    /* min-width: 60rem; */\n\n    display: table;\n    overflow-x: scroll;\n    border-collapse: collapse;\n    border-spacing: 0;\n\n    /* var(--container-background-table-row-odd) */\n\n    "," {\n        :nth-child(even) {\n            background-color: var(--container-background-table-row-odd);\n        }\n    }\n\n"]);return w=function(){return n},n}function y(){var n=Object(v.a)(["\n    display: table-row;\n\n    /* box-shadow: var(--container-shadow); */\n    background-color: var(--container-background-table-row);\n\n    @media all and (max-width: 920px) {\n        font-size: 1.2rem\n    }\n\n"]);return y=function(){return n},n}function S(){var n=Object(v.a)(["\n\n    display: table-row;\n    \n    font-weight: bolder;\n    position: sticky;\n    top: -1.5rem;\n    background-color: var(--background-primary-color);\n\n    "," {\n        background-color: var(--background-primary-color);\n        border-bottom: 1px solid var(--secondary-text-color);\n\n    }\n\n    @media all and (max-width: 920px) {\n        font-size: 1.2rem\n    }\n"]);return S=function(){return n},n}function z(){var n=Object(v.a)(["\n    width: 30rem;\n    display: table-cell;\n    padding: 2rem;\n"]);return z=function(){return n},n}function C(){var n=Object(v.a)(["\n    /* width: 100%; */\n    /* overflow-x: scroll; */\n"]);return C=function(){return n},n}var E=O.c.div(C()),I=O.c.div(z()),A=O.c.div(S(),I),N=O.c.div(y()),T=O.c.table(w(),N),P=Object(O.c)(x.a)(k());Object(O.c)(x.a)(g()),e.default=function(){var n=Object(i.useState)(""),e=Object(a.a)(n,2),t=e[0],v=e[1],O=Object(u.h)().push,x=Object(i.useContext)(o.a).isAdmin,g=Object(i.useState)([]),k=Object(a.a)(g,2),w=k[0],y=k[1],S=Object(i.useState)(0),z=Object(a.a)(S,2),C=z[0],H=z[1],L=Object(i.useState)({limit:10,skip:0,filters:{admin:C}}),M=Object(a.a)(L,2),Z=M[0],J=M[1],V=Object(m.c)("api/admin/users/filter",Z),B=V.response,G=V.isLoading,Q=V.refetch,q=Object(i.useContext)(l.a),F=q.showModal,K=q.message,U=q.closeModal;return Object(i.useEffect)((function(){G||B&&(y(B.users),U())}),[G]),Object(i.useEffect)((function(){""===t&&(J({limit:10,skip:0,filters:{admin:C}}),Q())}),[t]),Object(r.jsxs)("section",{children:[F&&Object(r.jsx)(f.a,{loading:G,title:K,close:U}),Object(r.jsx)(s.a,{searchQuery:t,handleSearch:function(){""!==t&&(J({limit:10,skip:0,query:t,filters:{admin:C}}),Q())},handleChange:function(n){return v(n.target.value)},handleAddButton:function(){return O("zakaznici/novy-zakaznik")},title:"Z\xe1kazn\xedci"}),Object(r.jsx)(h.d,{children:Object(r.jsx)(h.c,{children:Object(r.jsx)(d.a,{items:x?p:[{id:0,name:"Z\xe1kazn\xedci",filter:0}],activeIndex:C,setActiveIndex:function(n){H(n),J({limit:10,skip:0,filters:{admin:n}}),Q()}})})}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(E,{children:Object(r.jsxs)(T,{children:[Object(r.jsxs)(A,{children:[Object(r.jsx)(I,{children:"Meno a priezvisko"}),Object(r.jsx)(I,{children:"Email"}),Object(r.jsx)(I,{children:"Mo\u017enosti"})]}),w&&w.map((function(n,e){return Object(r.jsxs)(N,{children:[Object(r.jsx)(I,{children:n.name}),Object(r.jsx)(I,{children:n.email}),Object(r.jsx)(I,{children:Object(r.jsx)(P,{onClick:function(){return O("zakaznici/".concat(n._id))},children:"Upravi\u0165"})})]},e)}))]})}),Object(r.jsx)(j.a,{listItems:w,handleClickPrev:function(){0!==Z.skip&&(J(Object(c.a)(Object(c.a)({},Z),{},{skip:Z.skip-10})),Q())},handleClickNext:function(){w.length<10||(J(Object(c.a)(Object(c.a)({},Z),{},{skip:Z.skip+10})),Q())}})]})]})}},52:function(n,e,t){"use strict";var r=t(2),c=t(21),a=t(30),i=(t(1),t(5)),o=t(6);function u(){var n=Object(i.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function l(){var n=Object(i.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return l=function(){return n},n}var s=Object(o.b)(l()),d=o.c.div(u(),s,s);e.a=function(n){var e=n.handleChange,t=n.label,i=n.name,o=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(c.a)({className:"form-input",name:i,onChange:e},o)),t?Object(r.jsx)("label",{htmlFor:i,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return l})),t.d(e,"b",(function(){return s}));var r=t(7),c=t.n(r),a=t(12),i=t(10),o=t(1),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=Object(o.useState)(null),u=Object(i.a)(r,2),l=u[0],s=u[1],d=Object(o.useState)(null),b=Object(i.a)(d,2),f=b[0],j=b[1],m=Object(o.useState)(null),p=Object(i.a)(m,2),h=p[0],v=p[1],O=Object(o.useState)(!0),x=Object(i.a)(O,2),g=x[0],k=x[1],w=Object(o.useState)(0),y=Object(i.a)(w,2),S=y[0],z=y[1],C=function(){return z((function(n){return n+1}))},E={method:t,redirect:"follow"};return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(c.a.mark((function t(){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return k(!0),t.prev=3,t.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),E);case 6:return r=t.sent,t.next=9,r.json();case 9:a=t.sent,v(a.message),s(a),k(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),j(t.t0),k(!1),v("Nie\u010do sa pokazilo");case 20:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}})()()}),[S]),{response:l,isLoading:g,error:f,message:h,refetch:C}},l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(o.useState)(null),u=Object(i.a)(r,2),l=u[0],s=u[1],d=Object(o.useState)(null),b=Object(i.a)(d,2),f=b[0],j=b[1],m=Object(o.useState)(!0),p=Object(i.a)(m,2),h=p[0],v=p[1],O=Object(o.useState)(0),x=Object(i.a)(O,2),g=x[0],k=x[1],w=function(){return k((function(n){return n+1}))},y=new Headers;y.append("auth-token",localStorage.getItem("mptkthtkn")),y.append("Content-Type","application/json");var S=JSON.stringify(e),z={method:"POST",headers:y,body:S,redirect:"follow"};return Object(o.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return v(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),z);case 6:return r=e.sent,e.next=9,r.json();case 9:a=e.sent,s(a),v(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),j(e.t0),v(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[g,n]),{response:l,isLoading:h,error:f,refetch:w}},s=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(o.useState)(null),u=Object(i.a)(r,2),l=u[0],s=u[1],d=Object(o.useState)(null),b=Object(i.a)(d,2),f=b[0],j=b[1],m=Object(o.useState)(!0),p=Object(i.a)(m,2),h=p[0],v=p[1],O=Object(o.useState)(0),x=Object(i.a)(O,2),g=x[0],k=x[1],w=function(){return k((function(n){return n+1}))},y=new Headers;y.append("auth-token",localStorage.getItem("mptkthtkn")),y.append("Content-Type","application/json");var S={method:"GET",headers:y,redirect:"follow"};return Object(o.useEffect)((function(){(function(){var r=Object(a.a)(c.a.mark((function r(){var a,i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return v(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),S);case 6:return a=r.sent,r.next=9,a.json();case 9:i=r.sent,s(i),v(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),j(r.t0),v(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[g,n,e]),{response:l,isLoading:h,error:f,refetch:w}}},54:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(5)),a=t(6),i=t(14);function o(){var n=Object(c.a)(["\n    max-width: 125rem;\n    width: 100%;\n"]);return o=function(){return n},n}function u(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return u=function(){return n},n}var l=a.c.div(u(),i.g),s=a.c.div(o());e.a=function(n){var e=n.children;return Object(r.jsx)(l,{children:Object(r.jsx)(s,{children:e})})}},58:function(n,e,t){"use strict";var r=t(21),c=t(2),a=t(30),i=(t(1),t(5)),o=t(6),u=t(28),l=t(14);function s(){var n=Object(i.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return s=function(){return n},n}function d(){var n=Object(i.a)(["\n    margin-bottom: 3rem;\n    /* "," */\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return d=function(){return n},n}var b=o.c.div(d(),l.g),f=Object(o.c)(u.a)(s(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,i=n.setActiveIndex,o=Object(a.a)(n,["items","activeIndex","setActiveIndex"]);return Object(c.jsx)(b,Object(r.a)(Object(r.a)({},o),{},{children:Object(c.jsx)("ul",{children:e.map((function(n){return Object(c.jsx)("li",{children:Object(c.jsx)(f,{active:n.id===t,onClick:function(){return i(n.id)},children:n.name})},n.id)}))})}))}},63:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(52)),a=t(5),i=t(6),o=t(28),u=t(14);function l(){var n=Object(a.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return l=function(){return n},n}function s(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return s=function(){return n},n}function d(){var n=Object(a.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function b(){var n=Object(a.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return n},n}function f(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return f=function(){return n},n}function j(){var n=Object(a.a)(["\n    max-width: 125rem;\n    display: flex;\n    justify-content: space-between;\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return j=function(){return n},n}function m(){var n=Object(a.a)(["\n    color: var(--primary-text-color);\n    margin-bottom: 3rem;\n    ",";    \n    /* max-width: 125rem; */\n\n\n"]);return m=function(){return n},n}var p=i.c.div(m(),u.g),h=i.c.div(j()),v=i.c.div(f()),O=i.c.div(b()),x=(i.c.div(d()),Object(i.c)(o.a)(s())),g=Object(i.c)(o.a)(l());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,a=n.handleChange,i=n.title,o=(n.count,n.handleAddButton),u=void 0===o?function(){}:o;return Object(r.jsx)(p,{children:Object(r.jsxs)(h,{children:[Object(r.jsx)(v,{children:Object(r.jsx)("h1",{children:i})}),Object(r.jsxs)(O,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{type:"search",name:"searchbox",value:e,handleChange:a,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(x,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(g,{onClick:u,children:"Prida\u0165"})]})]})})}},64:function(n,e,t){"use strict";var r=t(2),c=t(10),a=t(1),i=t(57),o=t(5),u=t(6);function l(){var n=Object(o.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return s=function(){return n},n}var d=u.c.div(s()),b=u.c.button(l());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,o=n.handleClickPrev,u=void 0===o?function(){}:o,l=n.handleClickNext,s=void 0===l?function(){}:l,f=Object(a.useState)(!0),j=Object(c.a)(f,2),m=j[0],p=j[1],h=Object(a.useState)(!0),v=Object(c.a)(h,2),O=v[0],x=v[1],g=Object(a.useState)(0),k=Object(c.a)(g,2),w=k[0],y=k[1];Object(a.useEffect)((function(){p(0===w)}),[t]),Object(a.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?x(!0):x(!1)}),[t]),Object(a.useEffect)((function(){0!==w&&y((function(n){return n--}))}),[u]),Object(a.useEffect)((function(){y((function(n){return n++}))}),[s]);return Object(r.jsxs)(d,{children:[Object(r.jsx)(b,{disabled:m,onClick:function(){u(),0!==w&&y((function(n){return n-1}))},children:Object(r.jsx)(i.b,{})}),Object(r.jsx)(b,{disabled:O,onClick:function(){s(),y((function(n){return n+1}))},children:Object(r.jsx)(i.c,{})})]})}}}]);
//# sourceMappingURL=12.b9e64235.chunk.js.map