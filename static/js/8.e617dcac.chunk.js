(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[8,31],{233:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(21),o=t(10),a=t(1),i=t(3),u=t(19),s=t(59),l=t(60),d=t(54),f=t(73),b=t(29),p=t(7),j=t.n(p),m=t(12),v=t(18),h=t(20),O=t.n(h),g=t(32),x=t(61),k=t(5),y=t(6),w=t(28);function S(){var n=Object(k.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return S=function(){return n},n}function C(){var n=Object(k.a)(["\n    display: flex;\n    margin: 3rem auto 0;\n"]);return C=function(){return n},n}function z(){var n=Object(k.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return z=function(){return n},n}function N(){var n=Object(k.a)(["\n    width:100%;\n    max-width: 50rem;\n    max-height: 60rem;\n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--background-primary-color);\n    color: var(--primary-text-color);\n\n    position: relative;\n    z-index: 999999;\n\n    h3 {\n        text-align: center;\n    }\n\n\n"]);return N=function(){return n},n}function E(){var n=Object(k.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return E=function(){return n},n}var B=y.c.div(E()),P=y.c.div(N()),T=y.c.select(z()),I=Object(y.c)(w.a)(C()),D=y.c.button(S()),A=function(n){var e=n.close,t=n.premise,c=n.id,i=n.refetch,s=Object(a.useState)(t),l=Object(o.a)(s,2),d=l[0],f=l[1],b=Object(a.useContext)(v.a).token,p=Object(a.useContext)(u.a),h=p.getMessage,k=p.message,y=p.isLoading,w=p.setIsLoading,S=p.closeModal,C=function(){var n=Object(m.a)(j.a.mark((function n(){var t,r,o,a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),(t=new Headers).append("auth-token",b),t.append("Content-Type","application/json"),r=JSON.stringify({premises:Number(d)}),o={method:"POST",headers:t,body:r,redirect:"follow"},n.prev=6,n.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(c,"/delegate"),o);case 9:return a=n.sent,console.log(a),400===a.status&&h("Fakt\xfara mus\xed byt zaplaten\xe1, aby mohla by\u0165 priraden\xe1 prev\xe1dzke"),401===a.status&&h("Mus\xed\u0161 byt ved\xfaci, aby si mohol manipulova\u0165 s priradovanim"),n.next=15,a.json();case 15:if(!n.sent.order){n.next=21;break}return i(),w(!1),e(),n.abrupt("return");case 21:w(!1),n.next=28;break;case 24:n.prev=24,n.t0=n.catch(6),console.log(n.t0),w(!1);case 28:case"end":return n.stop()}}),n,null,[[6,24]])})));return function(){return n.apply(this,arguments)}}();return y||k?Object(r.jsx)(g.a,{loading:y,title:k,close:S}):O.a.createPortal(Object(r.jsxs)(B,{children:[Object(r.jsx)(D,{onClick:e}),Object(r.jsxs)(P,{children:[Object(r.jsx)("h3",{children:"Priradi\u0165 k prev\xe1dzke"}),Object(r.jsxs)(T,{value:d,onChange:function(n){return f(n.target.value)},children:[Object(r.jsx)("option",{value:0,children:"Nezadan\xe9"}),x.n.map((function(n,e){if(4!==e)return Object(r.jsx)("option",{value:e+1,children:n},e)}))]}),Object(r.jsx)(I,{onClick:C,children:"Priradi\u0165"})]})]}),document.getElementById("portal"))};var L=t(57),M=t(124);function R(){var n=Object(k.a)(["\n    width: 75%;\n    height: .1rem;\n    background-color: var(--secondary-text-color);\n    margin: 1rem auto;\n    opacity: .1;\n"]);return R=function(){return n},n}function K(){var n=Object(k.a)(["\n    position: absolute;\n    padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    border-radius: .5rem;\n    background-color: var(--dropdown-background-color);\n    z-index: 99;\n    right: 3rem;\n    top: 6rem;\n    width: 20rem;\n    text-align: start;\n\n    ul {\n        list-style: none;\n\n        li {\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            transition: background-color .3s ease-out;\n            border-radius: 9999rem .5rem .5rem 9999rem;\n            color: var(--primary-text-color);\n\n            &:not(:last-child) {\n                margin-bottom: 1rem;\n            }\n\n            div {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                padding: 1rem;\n                background-color: var(--dropdown-hover-background-color);\n                border-radius: 50%;\n                margin-right: 1rem;\n\n                svg {\n                    transition: color .3s ease-out;\n                }\n            }\n\n            &:hover {\n                background-color: var(--dropdown-hover-background-color);\n\n                div {\n                    svg {\n                        color: var(--primary-color);\n                    }\n                }\n            }\n\n        }\n        a:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n    }\n"]);return K=function(){return n},n}function V(){var n=Object(k.a)(["\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem;\n    border-radius: 50%;\n    background-color: var(--dropdownbutton-background-color);\n\n    svg {\n        font-size: 1.2rem;\n        margin-top: .1rem;\n        display: block;\n        color: var(--dropdownbutton-color);\n    }\n"]);return V=function(){return n},n}function H(){var n=Object(k.a)(["\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--body-background-primary-color);\n    }\n"]);return H=function(){return n},n}function _(){var n=Object(k.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    transition: background-color .3s ease-out; \n"]);return _=function(){return n},n}function J(){var n=Object(k.a)(["\n    position: relative;\n    padding: 2rem;\n    text-align: center;\n"]);return J=function(){return n},n}function Z(){var n=Object(k.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n"]);return Z=function(){return n},n}var F=y.c.div(Z()),G=y.c.div(J()),Q=Object(y.c)(G)(_()),U=y.c.div(H()),Y=y.c.div(V()),q=y.c.div(K()),W=y.c.div(R()),X=function(n){var e,t,c,i=n.order,u=n.refetch,s=Object(a.useContext)(f.OrdersContext),l=s.finishOrder,d=s.cancelOrder,p=Object(a.useState)(!1),j=Object(o.a)(p,2),m=j[0],v=j[1],h=new Date(i.date),O=Object(a.useRef)(null);t=O,c=function(){return v(!1)},Object(a.useEffect)((function(){var n=function(n){t.current&&!t.current.contains(n.target)&&c()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[t]);var g,k=Object(a.useState)(!1),y=Object(o.a)(k,2),w=y[0],S=y[1];return Object(r.jsxs)(F,{children:[Object(r.jsx)(G,{children:i.customId}),Object(r.jsx)(G,{children:h.toLocaleDateString("sk-SK",{weekday:"long",month:"long",day:"numeric"})}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(U,{onClick:function(){return S(!0)},children:0===i.premises?"Neuveden\xe9":x.n[i.premises-1]}),w&&Object(r.jsx)(A,{refetch:u,close:function(){return S(!1)},premise:i.premises,id:i._id})]}),Object(r.jsx)(G,{children:(g=i.status,"finished"===g?"Dokon\u010den\xe9":"fulfilled"===g?"Vybaven\xe9":"pending"===g?"\u010cak\xe1 na vybavenie":"paid"===g?"Zaplaten\xe9":"half-paid"===g?"Z\xe1lohovan\xe9":"cancelled"===g?"Zru\u0161en\xe9":void 0)}),Object(r.jsxs)(G,{children:[Object(r.jsx)(Y,{onClick:function(){return v(!m)},children:Object(r.jsx)(L.a,{})}),m&&Object(r.jsxs)(q,{ref:O,children:[Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{onClick:function(){return n=i._id,l(n,u),void v(!1);var n},children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.e,{})}),"Vybaven\xe9"]}),Object(r.jsxs)("li",{onClick:function(){return n=i._id,d(n,u),void v(!1);var n},children:[Object(r.jsx)("div",{children:Object(r.jsx)(M.a,{})}),"Odstr\xe1ni\u0165"]})]}),Object(r.jsx)(W,{}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("a",{href:"".concat("http://195.110.58.166:8080","/uploads/pdf/").concat(i.pdfPath),target:"_blank",rel:"noreferrer noopener",children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.i,{})}),"Zobraz PDF"]})}),Object(r.jsx)(b.b,{to:"/dashboard/objednavky/".concat(null===i||void 0===i||null===(e=i.orderedBy)||void 0===e?void 0:e._id,"/").concat(i._id),children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.j,{})}),"Zobrazi\u0165"]})})]})]})]})]})},$=t(65),nn=t(125),en=t(53),tn=[{id:1,name:"Nevybaven\xe9"},{id:2,name:"Dokon\u010den\xe9"}];function rn(){var n=Object(k.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    transition: background-color .3s ease-out; \n"]);return rn=function(){return n},n}function cn(){var n=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2.5rem;\n"]);return cn=function(){return n},n}function on(){var n=Object(k.a)(["\n    cursor:  ",";\n    position: relative;\n    padding: 2rem;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n"]);return on=function(){return n},n}function an(){var n=Object(k.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n"]);return an=function(){return n},n}function un(){var n=Object(k.a)(["\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    border-bottom: 1px solid var(--secondary-text-color);\n    font-weight: bolder;\n"]);return un=function(){return n},n}function sn(){var n=Object(k.a)(["\n    min-width: 65rem;\n    /* margin-bottom: 10rem; */\n"]);return sn=function(){return n},n}var ln=y.c.div(sn()),dn=y.c.div(un()),fn=(y.c.div(an()),y.c.div(on(),(function(n){return n.clickable?"pointer":"default"}))),bn=y.c.div(cn());Object(y.c)(fn)(rn()),e.default=function(){var n=Object(i.h)().push,e=Object(a.useContext)(u.a),t=e.closeModal,f=e.isLoading,b=e.message,p=e.showModal,j=Object(a.useState)(""),m=Object(o.a)(j,2),v=m[0],h=m[1],O=Object(a.useState)(1),x=Object(o.a)(O,2),k=x[0],y=x[1],w=Object(a.useState)([]),S=Object(o.a)(w,2),C=S[0],z=S[1],N=Object(a.useState)({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}),E=Object(o.a)(N,2),B=E[0],P=E[1],T=Object(en.c)("api/admin/orders/filter",B),I=T.isLoading,D=T.response,A=T.refetch,L=function(){A()};return Object(a.useEffect)((function(){I||D&&(z(null===D||void 0===D?void 0:D.orders),t())}),[I,D,k]),console.log(D),Object(a.useEffect)((function(){return function(){y(1),h(""),z([]),P({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}})}}),[]),Object(r.jsxs)("section",{children:[p&&Object(r.jsx)(g.a,{loading:f,title:b,close:t}),Object(r.jsx)(s.a,{searchQuery:v,handleChange:function(n){return h(n.target.value)},handleAddButton:function(){return n("/dashboard/objednavky/nova-objednavka")},title:"Objedn\xe1vky"}),Object(r.jsx)(l.a,{items:tn,activeIndex:k,setActiveIndex:function(n){y(n),P(1===n?{limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}:{limit:10,skip:0,sortBy:{date:-1},filters:{finished:!0}}),L()}}),Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(ln,{children:[Object(r.jsxs)(dn,{children:[Object(r.jsx)(fn,{children:"ID"}),Object(r.jsxs)(fn,{clickable:!0,onClick:function(){P((function(n){return Object(c.a)(Object(c.a)({},B),{},{sortBy:{date:1===n.sortBy.date?-1:1}})})),L()},children:["D\xe1tum ",1===B.sortBy.date?Object(r.jsx)(bn,{children:Object(r.jsx)(nn.a,{})}):Object(r.jsx)(bn,{children:Object(r.jsx)(nn.b,{})})]}),Object(r.jsx)(fn,{children:"Prev\xe1dzka"}),Object(r.jsx)(fn,{children:"Status"}),Object(r.jsx)(fn,{children:"Mo\u017enosti"})]}),C.map((function(n,e){return Object(r.jsx)(X,{order:n,refetch:L},e)}))]}),Object(r.jsx)($.a,{listItems:C,handleClickNext:function(){C.length<10||(P((function(n){return Object(c.a)(Object(c.a)({},n),{},{skip:n.skip+10})})),A())},handleClickPrev:function(){0!==B.skip&&(P((function(n){return Object(c.a)(Object(c.a)({},n),{},{skip:n.skip-10})})),A())}})]})]})}},52:function(n,e,t){"use strict";var r=t(2),c=t(21),o=t(30),a=(t(1),t(5)),i=t(6);function u(){var n=Object(a.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(a.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var l=Object(i.b)(s()),d=i.c.div(u(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,a=n.name,i=Object(o.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(c.a)({className:"form-input",name:a,onChange:e},i)),t?Object(r.jsx)("label",{htmlFor:a,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return s})),t.d(e,"b",(function(){return l}));var r=t(7),c=t.n(r),o=t(12),a=t(10),i=t(1),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(i.useState)(null),r=Object(a.a)(t,2),u=r[0],s=r[1],l=Object(i.useState)(null),d=Object(a.a)(l,2),f=d[0],b=d[1],p=Object(i.useState)(null),j=Object(a.a)(p,2),m=j[0],v=j[1],h=Object(i.useState)(!0),O=Object(a.a)(h,2),g=O[0],x=O[1],k=Object(i.useState)(0),y=Object(a.a)(k,2),w=y[0],S=y[1],C=function(){return S((function(n){return n+1}))};return Object(i.useEffect)((function(){(function(){var t=Object(o.a)(c.a.mark((function t(){var r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,fetch("".concat("http://195.110.58.166:8080","/").concat(n));case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,v(o.message),s(o),x(!1),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(2),b(t.t0),x(!1),v("Nie\u010do sa pokazilo");case 19:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(){return t.apply(this,arguments)}})()()}),[w]),{response:u,isLoading:g,error:f,message:m,refetch:C}},s=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(a.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),f=Object(a.a)(d,2),b=f[0],p=f[1],j=Object(i.useState)(!0),m=Object(a.a)(j,2),v=m[0],h=m[1],O=Object(i.useState)(0),g=Object(a.a)(O,2),x=g[0],k=g[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S=JSON.stringify(e),C={method:"POST",headers:w,body:S,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var e=Object(o.a)(c.a.mark((function e(){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),C);case 6:return r=e.sent,e.next=9,r.json();case 9:o=e.sent,l(o),h(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),p(e.t0),h(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[x,n]),{response:s,isLoading:v,error:b,refetch:y}},l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(a.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),f=Object(a.a)(d,2),b=f[0],p=f[1],j=Object(i.useState)(!0),m=Object(a.a)(j,2),v=m[0],h=m[1],O=Object(i.useState)(0),g=Object(a.a)(O,2),x=g[0],k=g[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S={method:"GET",headers:w,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var r=Object(o.a)(c.a.mark((function r(){var o,a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return h(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),S);case 6:return o=r.sent,r.next=9,o.json();case 9:a=r.sent,l(a),h(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),p(r.t0),h(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[x,n,e]),{response:s,isLoading:v,error:b,refetch:y}}},54:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(5)),o=t(6),a=t(14);function i(){var n=Object(c.a)(["\n    /* max-width: 115rem; */\n"]);return i=function(){return n},n}function u(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return u=function(){return n},n}var s=o.c.div(u(),a.e),l=o.c.div(i());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(l,{children:e})})}},59:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(52)),o=t(5),a=t(6),i=t(28),u=t(14);function s(){var n=Object(o.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return s=function(){return n},n}function l(){var n=Object(o.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(o.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function f(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return n},n}function b(){var n=Object(o.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return b=function(){return n},n}function p(){var n=Object(o.a)(["\n    display: flex;\n    color: var(--primary-text-color);\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return p=function(){return n},n}var j=a.c.div(p(),u.e),m=a.c.div(b()),v=a.c.div(f()),h=(a.c.div(d()),Object(a.c)(i.a)(l())),O=Object(a.c)(i.a)(s());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,o=n.handleChange,a=n.title,i=(n.count,n.handleAddButton),u=void 0===i?function(){}:i;return Object(r.jsxs)(j,{children:[Object(r.jsx)(m,{children:Object(r.jsx)("h1",{children:a})}),Object(r.jsxs)(v,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{type:"search",name:"searchbox",value:e,handleChange:o,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(h,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(O,{onClick:u,children:"Prida\u0165"})]})]})}},60:function(n,e,t){"use strict";var r=t(21),c=t(2),o=t(30),a=(t(1),t(5)),i=t(6),u=t(28),s=t(14);function l(){var n=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return d=function(){return n},n}var f=i.c.div(d(),s.e),b=Object(i.c)(u.a)(l(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,a=n.setActiveIndex,i=Object(o.a)(n,["items","activeIndex","setActiveIndex"]);return Object(c.jsx)(f,Object(r.a)(Object(r.a)({},i),{},{children:Object(c.jsx)("ul",{children:e.map((function(n){return Object(c.jsx)("li",{children:Object(c.jsx)(b,{active:n.id===t,onClick:function(){return a(n.id)},children:n.name})},n.id)}))})}))}},61:function(n,e,t){"use strict";t.d(e,"k",(function(){return r})),t.d(e,"i",(function(){return c})),t.d(e,"h",(function(){return o})),t.d(e,"j",(function(){return a})),t.d(e,"n",(function(){return i})),t.d(e,"m",(function(){return u})),t.d(e,"l",(function(){return s})),t.d(e,"a",(function(){return l})),t.d(e,"f",(function(){return d})),t.d(e,"g",(function(){return f})),t.d(e,"d",(function(){return b})),t.d(e,"b",(function(){return p})),t.d(e,"c",(function(){return m})),t.d(e,"e",(function(){return v}));var r={name:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[0,1001,1001,1001,1001],eanCode:"",image:"",eshop:!0,link:"",category:""},c={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"M",size:[1001,1001,1001,1001]}},o={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},a={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:""},i=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],u=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"\u0160o\u0161ovky",value:0}],s=[{id:0,name:"V\u0161etko",premises:0},{id:1,name:"Obchodn\xe1 57, Bratislava",premises:1},{id:2,name:"Mileti\u010dova 38, Bratislava",premises:2},{id:3,name:"Vajnory, Bratislava",premises:3},{id:4,name:"Senica, OC Bran\u010d",premises:4}],l=[{id:0,name:"Okuliare"},{id:1,name:"\u0160osovky"}],d=function(n){var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)},f=function(n){var e=0;return n.includes(",")?(e=n.split(",")[0]+"."+n.split(",")[1],Number(e)):Number(n)},b=function(n,e){return void 0===n?"\u0160osovka":(console.log(e),console.log(n),"number"===typeof n?"Na sklade ".concat(n," kusov"):0===e?"Vo v\u0161etk\xfdch skladoch je ".concat(n.reduce((function(n,e){return n+e}))," kusov"):"Na sklade ".concat(n[e]," kusov"))},p=function(n,e){return 0===n.length||1001===n[e]?"":n[e].toString()},j="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",m=function(n){for(var e="",t=0;t<n.length;t++)-1!==j.indexOf(n.charAt(t))?e+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(j.indexOf(n.charAt(t))):e+=n.charAt(t);return e},v=function(n){return m(n).replaceAll(" ","-").toLowerCase().trim()}},65:function(n,e,t){"use strict";var r=t(2),c=t(10),o=t(1),a=t(57),i=t(5),u=t(6);function s(){var n=Object(i.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return s=function(){return n},n}function l(){var n=Object(i.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return l=function(){return n},n}var d=u.c.div(l()),f=u.c.button(s());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,i=n.handleClickPrev,u=void 0===i?function(){}:i,s=n.handleClickNext,l=void 0===s?function(){}:s,b=Object(o.useState)(!0),p=Object(c.a)(b,2),j=p[0],m=p[1],v=Object(o.useState)(!0),h=Object(c.a)(v,2),O=h[0],g=h[1],x=Object(o.useState)(0),k=Object(c.a)(x,2),y=k[0],w=k[1];Object(o.useEffect)((function(){m(0===y)}),[t]),Object(o.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?g(!0):g(!1)}),[t]),Object(o.useEffect)((function(){0!==y&&w((function(n){return n--}))}),[u]),Object(o.useEffect)((function(){w((function(n){return n++}))}),[l]);return Object(r.jsxs)(d,{children:[Object(r.jsx)(f,{disabled:j,onClick:function(){u(),0!==y&&w((function(n){return n-1}))},children:Object(r.jsx)(a.b,{})}),Object(r.jsx)(f,{disabled:O,onClick:function(){l(),w((function(n){return n+1}))},children:Object(r.jsx)(a.c,{})})]})}},73:function(n,e,t){"use strict";t.r(e),t.d(e,"OrdersContext",(function(){return b}));var r=t(2),c=t(21),o=t(7),a=t.n(o),i=t(12),u=t(10),s=t(1),l=t(3),d=t(18),f=t(19),b=Object(s.createContext)({orders:null,getOrders:function(){},createOrder:function(){},updateOrder:function(){},finishOrder:function(){},cancelOrder:function(){}});e.default=function(n){var e=n.children,t=Object(l.h)().push,o=Object(s.useContext)(f.a),p=o.setIsLoading,j=o.setShowModal,m=o.getMessage,v=o.closeModal,h=Object(s.useContext)(d.a).token,O=Object(s.useState)(null),g=Object(u.a)(O,2),x=g[0],k=g[1],y=new Headers;y.append("auth-token",h),y.append("Content-Type","application/json");var w=function(){var n=Object(i.a)(a.a.mark((function n(){var e,t,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),e={method:"GET",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),e);case 6:return t=n.sent,n.next=9,t.json();case 9:if(r=n.sent,console.log(r),!r.orders){n.next=15;break}return k(r.orders),v(),n.abrupt("return");case 15:m(r.messageSK),p(!1),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(3),console.log(n.t0),m("Nieco sa pokazilo"),p(!1);case 24:case"end":return n.stop()}}),n,null,[[3,19]])})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=Object(i.a)(a.a.mark((function n(e){var r,o,i,u,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),r=Object(c.a)({},e),console.log("ORDER BEFORE SEND"),console.log(r),o=JSON.stringify(r),i={method:"POST",headers:y,body:o,redirect:"follow"},n.prev=7,n.next=10,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),i);case 10:return u=n.sent,n.next=13,u.json();case 13:s=n.sent,console.log(s),s.order&&(w(),v(),t("/dashboard/objednavky"),setTimeout((function(){var n=window.open("".concat("http://195.110.58.166:8080","/uploads/pdf/").concat(s.order.pdfPath),"_blank","noreferrer noopener");null===n||void 0===n||n.focus()}),2e3)),m(s.messageSK),p(!1),n.next=25;break;case 20:n.prev=20,n.t0=n.catch(7),console.log(n.t0),m("Nieco sa pokazilo"),p(!1);case 25:case"end":return n.stop()}}),n,null,[[7,20]])})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=Object(i.a)(a.a.mark((function n(e,r){var o,i,u,s,l;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),o=Object(c.a)({},e),console.log("ORDER BEFORE SEND"),console.log(o),i=JSON.stringify(o),u={method:"PATCH",headers:y,body:i,redirect:"follow"},n.prev=7,n.next=10,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(r),u);case 10:return s=n.sent,n.next=13,s.json();case 13:l=n.sent,console.log(l),l.order&&(w(),v(),t("/dashboard/objednavky")),m(l.messageSK),p(!1),n.next=25;break;case 20:n.prev=20,n.t0=n.catch(7),console.log(n.t0),m("Nieco sa pokazilo"),p(!1);case 25:case"end":return n.stop()}}),n,null,[[7,20]])})));return function(e,t){return n.apply(this,arguments)}}(),z=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),r={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/fulfill"),r);case 6:return c=n.sent,n.next=9,c.json();case 9:if(o=n.sent,console.log(o),!o.order){n.next=15;break}return t(),v(),n.abrupt("return");case 15:m(o.messageSK),p(!1),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(3),console.log(n.t0),m("Nieco sa pokazilo"),p(!1);case 24:case"end":return n.stop()}}),n,null,[[3,19]])})));return function(e,t){return n.apply(this,arguments)}}(),N=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),r={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/cancel"),r);case 6:return c=n.sent,n.next=9,c.json();case 9:if(o=n.sent,console.log(o),!o.order){n.next=14;break}return setTimeout((function(){t(),v()}),100),n.abrupt("return");case 14:m(o.messageSK),p(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),m("Nieco sa pokazilo"),p(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(r.jsx)(b.Provider,{value:{orders:x,getOrders:w,createOrder:S,updateOrder:C,finishOrder:z,cancelOrder:N},children:e})}}}]);
//# sourceMappingURL=8.e617dcac.chunk.js.map