(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[12],{234:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(21),a=t(10),i=t(1),o=t(19),u=t(3),s=t(18),l=t(59),d=t(60),b=t(54),f=t(32),j=t(65),m=t(53),p=[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2}],v=t(5),O=t(6),h=t(28);function x(){var n=Object(v.a)(["\n    font-size: 1.4rem;\n    background-color: var(--color-red);\n    /* background-color: rgb(235, 172, 1); */\n    padding: .5rem 1.8rem;\n"]);return x=function(){return n},n}function g(){var n=Object(v.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n    padding: .5rem 1.8rem;\n"]);return g=function(){return n},n}function k(){var n=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 2fr 25rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n"]);return k=function(){return n},n}function y(){var n=Object(v.a)(["\n    padding: 2rem;\n    text-align: center;\n"]);return y=function(){return n},n}function w(){var n=Object(v.a)(["\n    display: grid;\n    align-content: center;\n    grid-template-columns: 1fr 2fr 25rem;\n    border-bottom: 1px solid var(--secondary-text-color);\n    font-weight: bolder;\n"]);return w=function(){return n},n}function S(){var n=Object(v.a)(["\n\n"]);return S=function(){return n},n}var C=O.c.div(S()),z=O.c.div(w()),E=O.c.div(y()),I=O.c.div(k()),A=Object(O.c)(h.a)(g()),N=Object(O.c)(h.a)(x());e.default=function(){var n=Object(i.useState)(""),e=Object(a.a)(n,2),t=e[0],v=e[1],O=Object(u.h)().push,h=Object(i.useContext)(o.a).isAdmin,x=Object(i.useState)([]),g=Object(a.a)(x,2),k=g[0],y=g[1],w=Object(i.useState)(0),S=Object(a.a)(w,2),P=S[0],T=S[1],H=Object(i.useState)({limit:10,skip:0,filters:{admin:P}}),L=Object(a.a)(H,2),M=L[0],Z=L[1],J=Object(m.c)("api/admin/users/filter",M),V=J.response,B=J.isLoading,Q=J.refetch,q=Object(i.useContext)(s.a),F=q.showModal,G=q.message,K=q.closeModal;return Object(i.useEffect)((function(){B||V&&(y(V.users),K())}),[B]),Object(i.useEffect)((function(){""===t&&(Z({limit:10,skip:0,filters:{admin:P}}),Q())}),[t]),Object(r.jsxs)("section",{children:[F&&Object(r.jsx)(f.a,{loading:B,title:G,close:K}),Object(r.jsx)(l.a,{searchQuery:t,handleSearch:function(){""!==t&&(Z({limit:10,skip:0,query:t}),Q())},handleChange:function(n){return v(n.target.value)},handleAddButton:function(){return O("zakaznici/novy-zakaznik")},title:"Z\xe1kazn\xedci"}),Object(r.jsx)(d.a,{items:h?p:[{id:0,name:"Z\xe1kazn\xedci",filter:0}],activeIndex:P,setActiveIndex:function(n){T(n),Z({limit:10,skip:0,filters:{admin:n}}),Q()}}),Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(C,{children:[Object(r.jsxs)(z,{children:[Object(r.jsx)(E,{children:"Meno a priezvisko"}),Object(r.jsx)(E,{children:"Email"}),Object(r.jsx)(E,{children:"Mo\u017enosti"})]}),k&&k.map((function(n,e){return Object(r.jsxs)(I,{children:[Object(r.jsx)(E,{children:n.name}),Object(r.jsx)(E,{children:n.email}),Object(r.jsxs)(E,{children:[Object(r.jsx)(A,{onClick:function(){return O("zakaznici/".concat(n._id))},children:"Upravi\u0165"}),Object(r.jsx)(N,{onClick:function(){return alert("Pekn\xfd pokus! Tu vel\xedm zatia\u013e ja :)")},children:"Odstr\xe1ni\u0165"})]})]},e)}))]}),Object(r.jsx)(j.a,{listItems:k,handleClickPrev:function(){0!==M.skip&&(Z(Object(c.a)(Object(c.a)({},M),{},{skip:M.skip-10})),Q())},handleClickNext:function(){k.length<10||(Z(Object(c.a)(Object(c.a)({},M),{},{skip:M.skip+10})),Q())}})]})]})}},52:function(n,e,t){"use strict";var r=t(2),c=t(21),a=t(30),i=(t(1),t(5)),o=t(6);function u(){var n=Object(i.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(i.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var l=Object(o.b)(s()),d=o.c.div(u(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,i=n.name,o=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(c.a)({className:"form-input",name:i,onChange:e},o)),t?Object(r.jsx)("label",{htmlFor:i,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return s})),t.d(e,"b",(function(){return l}));var r=t(7),c=t.n(r),a=t(12),i=t(10),o=t(1),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(o.useState)(null),r=Object(i.a)(t,2),u=r[0],s=r[1],l=Object(o.useState)(null),d=Object(i.a)(l,2),b=d[0],f=d[1],j=Object(o.useState)(null),m=Object(i.a)(j,2),p=m[0],v=m[1],O=Object(o.useState)(!0),h=Object(i.a)(O,2),x=h[0],g=h[1],k=Object(o.useState)(0),y=Object(i.a)(k,2),w=y[0],S=y[1],C=function(){return S((function(n){return n+1}))};return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(c.a.mark((function t(){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,fetch("".concat("http://195.110.58.166:8080","/").concat(n));case 5:return r=t.sent,t.next=8,r.json();case 8:a=t.sent,v(a.message),s(a),g(!1),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(2),f(t.t0),g(!1),v("Nie\u010do sa pokazilo");case 19:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(){return t.apply(this,arguments)}})()()}),[w]),{response:u,isLoading:x,error:b,message:p,refetch:C}},s=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(o.useState)(null),u=Object(i.a)(r,2),s=u[0],l=u[1],d=Object(o.useState)(null),b=Object(i.a)(d,2),f=b[0],j=b[1],m=Object(o.useState)(!0),p=Object(i.a)(m,2),v=p[0],O=p[1],h=Object(o.useState)(0),x=Object(i.a)(h,2),g=x[0],k=x[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S=JSON.stringify(e),C={method:"POST",headers:w,body:S,redirect:"follow"};return Object(o.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return O(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),C);case 6:return r=e.sent,e.next=9,r.json();case 9:a=e.sent,l(a),O(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),j(e.t0),O(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[g,n]),{response:s,isLoading:v,error:f,refetch:y}},l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(o.useState)(null),u=Object(i.a)(r,2),s=u[0],l=u[1],d=Object(o.useState)(null),b=Object(i.a)(d,2),f=b[0],j=b[1],m=Object(o.useState)(!0),p=Object(i.a)(m,2),v=p[0],O=p[1],h=Object(o.useState)(0),x=Object(i.a)(h,2),g=x[0],k=x[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S={method:"GET",headers:w,redirect:"follow"};return Object(o.useEffect)((function(){(function(){var r=Object(a.a)(c.a.mark((function r(){var a,i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return O(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),S);case 6:return a=r.sent,r.next=9,a.json();case 9:i=r.sent,l(i),O(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),j(r.t0),O(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[g,n,e]),{response:s,isLoading:v,error:f,refetch:y}}},54:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(5)),a=t(6),i=t(14);function o(){var n=Object(c.a)(["\n    /* max-width: 115rem; */\n"]);return o=function(){return n},n}function u(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return u=function(){return n},n}var s=a.c.div(u(),i.e),l=a.c.div(o());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(l,{children:e})})}},59:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(52)),a=t(5),i=t(6),o=t(28),u=t(14);function s(){var n=Object(a.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return s=function(){return n},n}function l(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function b(){var n=Object(a.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return n},n}function f(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return f=function(){return n},n}function j(){var n=Object(a.a)(["\n    display: flex;\n    color: var(--primary-text-color);\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return j=function(){return n},n}var m=i.c.div(j(),u.e),p=i.c.div(f()),v=i.c.div(b()),O=(i.c.div(d()),Object(i.c)(o.a)(l())),h=Object(i.c)(o.a)(s());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,a=n.handleChange,i=n.title,o=(n.count,n.handleAddButton),u=void 0===o?function(){}:o;return Object(r.jsxs)(m,{children:[Object(r.jsx)(p,{children:Object(r.jsx)("h1",{children:i})}),Object(r.jsxs)(v,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{type:"search",name:"searchbox",value:e,handleChange:a,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(O,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(h,{onClick:u,children:"Prida\u0165"})]})]})}},60:function(n,e,t){"use strict";var r=t(21),c=t(2),a=t(30),i=(t(1),t(5)),o=t(6),u=t(28),s=t(14);function l(){var n=Object(i.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return l=function(){return n},n}function d(){var n=Object(i.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return d=function(){return n},n}var b=o.c.div(d(),s.e),f=Object(o.c)(u.a)(l(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,i=n.setActiveIndex,o=Object(a.a)(n,["items","activeIndex","setActiveIndex"]);return Object(c.jsx)(b,Object(r.a)(Object(r.a)({},o),{},{children:Object(c.jsx)("ul",{children:e.map((function(n){return Object(c.jsx)("li",{children:Object(c.jsx)(f,{active:n.id===t,onClick:function(){return i(n.id)},children:n.name})},n.id)}))})}))}},65:function(n,e,t){"use strict";var r=t(2),c=t(10),a=t(1),i=t(57),o=t(5),u=t(6);function s(){var n=Object(o.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return s=function(){return n},n}function l(){var n=Object(o.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return l=function(){return n},n}var d=u.c.div(l()),b=u.c.button(s());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,o=n.handleClickPrev,u=void 0===o?function(){}:o,s=n.handleClickNext,l=void 0===s?function(){}:s,f=Object(a.useState)(!0),j=Object(c.a)(f,2),m=j[0],p=j[1],v=Object(a.useState)(!0),O=Object(c.a)(v,2),h=O[0],x=O[1],g=Object(a.useState)(0),k=Object(c.a)(g,2),y=k[0],w=k[1];Object(a.useEffect)((function(){0===y?p(!0):(p(!1),w(0))}),[t]),Object(a.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?x(!0):x(!1)}),[t]),Object(a.useEffect)((function(){0!==y&&w((function(n){return n--}))}),[u]),Object(a.useEffect)((function(){w((function(n){return n++}))}),[l]);return Object(r.jsxs)(d,{children:[Object(r.jsx)(b,{disabled:m,onClick:function(){u(),0!==y&&w((function(n){return n-1}))},children:Object(r.jsx)(i.b,{})}),Object(r.jsx)(b,{disabled:h,onClick:function(){l(),w((function(n){return n+1}))},children:Object(r.jsx)(i.c,{})})]})}}}]);
//# sourceMappingURL=12.b535578e.chunk.js.map