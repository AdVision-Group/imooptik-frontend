(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[9,31],{233:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(21),o=t(10),a=t(1),i=t(3),s=t(19),u=t(59),l=t(60),d=t(54),b=t(73),f=t(29),j=t(7),p=t.n(j),m=t(12),v=t(18),h=t(20),O=t.n(h),x=t(32),g=t(62),k=t(5),y=t(6),w=t(28);function S(){var n=Object(k.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return S=function(){return n},n}function C(){var n=Object(k.a)(["\n    display: flex;\n    margin: 3rem auto 0;\n"]);return C=function(){return n},n}function z(){var n=Object(k.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return z=function(){return n},n}function E(){var n=Object(k.a)(["\n    width:100%;\n    max-width: 50rem;\n    max-height: 60rem;\n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--background-primary-color);\n    color: var(--primary-text-color);\n\n    position: relative;\n    z-index: 999999;\n\n    h3 {\n        text-align: center;\n    }\n\n\n"]);return E=function(){return n},n}function N(){var n=Object(k.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return N=function(){return n},n}var B=y.c.div(N()),P=y.c.div(E()),T=y.c.select(z()),I=Object(y.c)(w.a)(C()),D=y.c.button(S()),A=function(n){var e=n.close,t=n.premise,c=n.id,i=n.refetch,u=Object(a.useState)(t),l=Object(o.a)(u,2),d=l[0],b=l[1],f=Object(a.useContext)(v.a).token,j=Object(a.useContext)(s.a),h=j.getMessage,k=j.message,y=j.isLoading,w=j.setIsLoading,S=j.closeModal,C=function(){var n=Object(m.a)(p.a.mark((function n(){var t,r,o,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),(t=new Headers).append("auth-token",f),t.append("Content-Type","application/json"),r=JSON.stringify({premises:Number(d)}),o={method:"POST",headers:t,body:r,redirect:"follow"},n.prev=6,n.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(c,"/delegate"),o);case 9:return a=n.sent,console.log(a),400===a.status&&h("Fakt\xfara mus\xed byt zaplaten\xe1, aby mohla by\u0165 priraden\xe1 prev\xe1dzke"),401===a.status&&h("Mus\xed\u0161 byt ved\xfaci, aby si mohol manipulova\u0165 s priradovanim"),n.next=15,a.json();case 15:if(!n.sent.order){n.next=21;break}return i(),w(!1),e(),n.abrupt("return");case 21:w(!1),n.next=28;break;case 24:n.prev=24,n.t0=n.catch(6),console.log(n.t0),w(!1);case 28:case"end":return n.stop()}}),n,null,[[6,24]])})));return function(){return n.apply(this,arguments)}}();return y||k?Object(r.jsx)(x.a,{loading:y,title:k,close:S}):O.a.createPortal(Object(r.jsxs)(B,{children:[Object(r.jsx)(D,{onClick:e}),Object(r.jsxs)(P,{children:[Object(r.jsx)("h3",{children:"Priradi\u0165 k prev\xe1dzke"}),Object(r.jsxs)(T,{value:d,onChange:function(n){return b(n.target.value)},children:[Object(r.jsx)("option",{value:0,children:"Nezadan\xe9"}),g.n.map((function(n,e){if(4!==e)return Object(r.jsx)("option",{value:e+1,children:n},e)}))]}),Object(r.jsx)(I,{onClick:C,children:"Priradi\u0165"})]})]}),document.getElementById("portal"))};var L=t(57),M=t(124);function R(){var n=Object(k.a)(["\n    width: 75%;\n    height: .1rem;\n    background-color: var(--secondary-text-color);\n    margin: 1rem auto;\n    opacity: .1;\n"]);return R=function(){return n},n}function V(){var n=Object(k.a)(["\n    position: absolute;\n    padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    border-radius: .5rem;\n    background-color: var(--dropdown-background-color);\n    z-index: 99;\n    right: 3rem;\n    top: 6rem;\n    width: 20rem;\n    text-align: start;\n\n    ul {\n        list-style: none;\n\n        li {\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            transition: background-color .3s ease-out;\n            border-radius: 9999rem .5rem .5rem 9999rem;\n            color: var(--primary-text-color);\n\n            &:not(:last-child) {\n                margin-bottom: 1rem;\n            }\n\n            div {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                padding: 1rem;\n                background-color: var(--dropdown-hover-background-color);\n                border-radius: 50%;\n                margin-right: 1rem;\n\n                svg {\n                    transition: color .3s ease-out;\n                }\n            }\n\n            &:hover {\n                background-color: var(--dropdown-hover-background-color);\n\n                div {\n                    svg {\n                        color: var(--primary-color);\n                    }\n                }\n            }\n\n        }\n        a:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n    }\n"]);return V=function(){return n},n}function K(){var n=Object(k.a)(["\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem;\n    border-radius: 50%;\n    background-color: var(--dropdownbutton-background-color);\n\n    svg {\n        font-size: 1.2rem;\n        margin-top: .1rem;\n        display: block;\n        color: var(--dropdownbutton-color);\n    }\n"]);return K=function(){return n},n}function _(){var n=Object(k.a)(["\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--body-background-primary-color);\n    }\n"]);return _=function(){return n},n}function F(){var n=Object(k.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    transition: background-color .3s ease-out; \n"]);return F=function(){return n},n}function H(){var n=Object(k.a)(["\n    position: relative;\n    padding: 2rem;\n    text-align: center;\n"]);return H=function(){return n},n}function Z(){var n=Object(k.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n"]);return Z=function(){return n},n}var J=y.c.div(Z()),G=y.c.div(H()),Q=Object(y.c)(G)(F()),U=y.c.div(_()),Y=y.c.div(K()),q=y.c.div(V()),W=y.c.div(R()),X=function(n){var e,t,c,i,s=n.order,u=n.refetch,l=Object(a.useContext)(b.OrdersContext),d=l.finishOrder,j=l.cancelOrder,p=Object(a.useState)(!1),m=Object(o.a)(p,2),v=m[0],h=m[1],O=new Date(s.date),x=Object(a.useRef)(null);c=x,i=function(){return h(!1)},Object(a.useEffect)((function(){var n=function(n){c.current&&!c.current.contains(n.target)&&i()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[c]);var k,y=Object(a.useState)(!1),w=Object(o.a)(y,2),S=w[0],C=w[1],z=(null===s||void 0===s||null===(e=s.orderedBy)||void 0===e?void 0:e._id)?null===s||void 0===s||null===(t=s.orderedBy)||void 0===t?void 0:t._id:null===s||void 0===s?void 0:s.orderedBy;return Object(r.jsxs)(J,{children:[Object(r.jsx)(G,{children:s.customId}),Object(r.jsx)(G,{children:O.toLocaleDateString("sk-SK",{weekday:"long",month:"long",day:"numeric"})}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(U,{onClick:function(){return C(!0)},children:0===s.premises?"Neuveden\xe9":g.n[s.premises-1]}),S&&Object(r.jsx)(A,{refetch:u,close:function(){return C(!1)},premise:s.premises,id:s._id})]}),Object(r.jsx)(G,{children:(k=s.status,"finished"===k?"Dokon\u010den\xe9":"fulfilled"===k?"Vybaven\xe9":"pending"===k?"\u010cak\xe1 na vybavenie":"paid"===k?"Zaplaten\xe9":"half-paid"===k?"Z\xe1lohovan\xe9":"cancelled"===k?"Zru\u0161en\xe9":void 0)}),Object(r.jsxs)(G,{children:[Object(r.jsx)(Y,{onClick:function(){return h(!v)},children:Object(r.jsx)(L.a,{})}),v&&Object(r.jsxs)(q,{ref:x,children:[Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{onClick:function(){return n=s._id,d(n,u),void h(!1);var n},children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.e,{})}),"Vybaven\xe9"]}),Object(r.jsxs)("li",{onClick:function(){return n=s._id,j(n,u),void h(!1);var n},children:[Object(r.jsx)("div",{children:Object(r.jsx)(M.a,{})}),"Odstr\xe1ni\u0165"]})]}),Object(r.jsx)(W,{}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("a",{href:"".concat("http://195.110.58.166:8080","/uploads/pdf/").concat(s.pdfPath),target:"_blank",rel:"noreferrer noopener",children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.i,{})}),"Zobraz PDF"]})}),Object(r.jsx)(f.b,{to:"/dashboard/objednavky/".concat(z,"/").concat(s._id),children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.j,{})}),"Zobrazi\u0165"]})})]})]})]})]})},$=t(65),nn=t(125),en=t(53),tn=[{id:1,name:"Nevybaven\xe9"},{id:2,name:"Dokon\u010den\xe9"},{id:3,name:"Zru\u0161en\xe9"}];function rn(){var n=Object(k.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    transition: background-color .3s ease-out; \n"]);return rn=function(){return n},n}function cn(){var n=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2.5rem;\n"]);return cn=function(){return n},n}function on(){var n=Object(k.a)(["\n    cursor:  ",";\n    position: relative;\n    padding: 2rem;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n"]);return on=function(){return n},n}function an(){var n=Object(k.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n"]);return an=function(){return n},n}function sn(){var n=Object(k.a)(["\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    border-bottom: 1px solid var(--secondary-text-color);\n    font-weight: bolder;\n"]);return sn=function(){return n},n}function un(){var n=Object(k.a)(["\n    min-width: 65rem;\n    /* margin-bottom: 10rem; */\n"]);return un=function(){return n},n}var ln=y.c.div(un()),dn=y.c.div(sn()),bn=(y.c.div(an()),y.c.div(on(),(function(n){return n.clickable?"pointer":"default"}))),fn=y.c.div(cn());Object(y.c)(bn)(rn()),e.default=function(){var n=Object(i.h)().push,e=Object(a.useContext)(s.a),t=e.closeModal,b=e.isLoading,f=e.message,j=e.showModal,p=Object(a.useState)(""),m=Object(o.a)(p,2),v=m[0],h=m[1],O=Object(a.useState)(1),g=Object(o.a)(O,2),k=g[0],y=g[1],w=Object(a.useState)([]),S=Object(o.a)(w,2),C=S[0],z=S[1],E=Object(a.useState)({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}),N=Object(o.a)(E,2),B=N[0],P=N[1],T=Object(en.c)("api/admin/orders/filter",B),I=T.isLoading,D=T.response,A=T.refetch,L=function(){A()};return Object(a.useEffect)((function(){I||D&&(z(null===D||void 0===D?void 0:D.orders),t())}),[I,D,k]),console.log(D),Object(a.useEffect)((function(){return function(){y(1),h(""),z([]),P({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}})}}),[]),Object(r.jsxs)("section",{children:[j&&Object(r.jsx)(x.a,{loading:b,title:f,close:t}),Object(r.jsx)(u.a,{searchQuery:v,handleChange:function(n){return h(n.target.value)},handleAddButton:function(){return n("/dashboard/objednavky/nova-objednavka")},title:"Objedn\xe1vky"}),Object(r.jsx)(l.a,{items:tn,activeIndex:k,setActiveIndex:function(n){y(n),1===n?P({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}):2===n?P({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!0}}):3===n&&P({limit:10,skip:0,sortBy:{date:-1},filters:{status:"cancelled"}}),L()}}),Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(ln,{children:[Object(r.jsxs)(dn,{children:[Object(r.jsx)(bn,{children:"ID"}),Object(r.jsxs)(bn,{clickable:!0,onClick:function(){P((function(n){return Object(c.a)(Object(c.a)({},B),{},{sortBy:{date:1===n.sortBy.date?-1:1}})})),L()},children:["D\xe1tum ",1===B.sortBy.date?Object(r.jsx)(fn,{children:Object(r.jsx)(nn.a,{})}):Object(r.jsx)(fn,{children:Object(r.jsx)(nn.b,{})})]}),Object(r.jsx)(bn,{children:"Prev\xe1dzka"}),Object(r.jsx)(bn,{children:"Status"}),Object(r.jsx)(bn,{children:"Mo\u017enosti"})]}),C.map((function(n,e){return Object(r.jsx)(X,{order:n,refetch:L},e)}))]}),Object(r.jsx)($.a,{listItems:C,handleClickNext:function(){C.length<10||(P((function(n){return Object(c.a)(Object(c.a)({},n),{},{skip:n.skip+10})})),A())},handleClickPrev:function(){0!==B.skip&&(P((function(n){return Object(c.a)(Object(c.a)({},n),{},{skip:n.skip-10})})),A())}})]})]})}},52:function(n,e,t){"use strict";var r=t(2),c=t(21),o=t(30),a=(t(1),t(5)),i=t(6);function s(){var n=Object(a.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return n},n}function u(){var n=Object(a.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return u=function(){return n},n}var l=Object(i.b)(u()),d=i.c.div(s(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,a=n.name,i=Object(o.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(c.a)({className:"form-input",name:a,onChange:e},i)),t?Object(r.jsx)("label",{htmlFor:a,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return l}));var r=t(7),c=t.n(r),o=t(12),a=t(10),i=t(1),s=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=Object(i.useState)(null),s=Object(a.a)(r,2),u=s[0],l=s[1],d=Object(i.useState)(null),b=Object(a.a)(d,2),f=b[0],j=b[1],p=Object(i.useState)(null),m=Object(a.a)(p,2),v=m[0],h=m[1],O=Object(i.useState)(!0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=Object(i.useState)(0),w=Object(a.a)(y,2),S=w[0],C=w[1],z=function(){return C((function(n){return n+1}))},E={method:t,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var t=Object(o.a)(c.a.mark((function t(){var r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return k(!0),t.prev=3,t.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),E);case 6:return r=t.sent,t.next=9,r.json();case 9:o=t.sent,h(o.message),l(o),k(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),j(t.t0),k(!1),h("Nie\u010do sa pokazilo");case 20:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}})()()}),[S]),{response:u,isLoading:g,error:f,message:v,refetch:z}},u=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),s=Object(a.a)(r,2),u=s[0],l=s[1],d=Object(i.useState)(null),b=Object(a.a)(d,2),f=b[0],j=b[1],p=Object(i.useState)(!0),m=Object(a.a)(p,2),v=m[0],h=m[1],O=Object(i.useState)(0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S=JSON.stringify(e),C={method:"POST",headers:w,body:S,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var e=Object(o.a)(c.a.mark((function e(){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),C);case 6:return r=e.sent,e.next=9,r.json();case 9:o=e.sent,l(o),h(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),j(e.t0),h(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[g,n]),{response:u,isLoading:v,error:f,refetch:y}},l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),s=Object(a.a)(r,2),u=s[0],l=s[1],d=Object(i.useState)(null),b=Object(a.a)(d,2),f=b[0],j=b[1],p=Object(i.useState)(!0),m=Object(a.a)(p,2),v=m[0],h=m[1],O=Object(i.useState)(0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S={method:"GET",headers:w,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var r=Object(o.a)(c.a.mark((function r(){var o,a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return h(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),S);case 6:return o=r.sent,r.next=9,o.json();case 9:a=r.sent,l(a),h(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),j(r.t0),h(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[g,n,e]),{response:u,isLoading:v,error:f,refetch:y}}},54:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(5)),o=t(6),a=t(14);function i(){var n=Object(c.a)(["\n    /* max-width: 115rem; */\n"]);return i=function(){return n},n}function s(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return s=function(){return n},n}var u=o.c.div(s(),a.e),l=o.c.div(i());e.a=function(n){var e=n.children;return Object(r.jsx)(u,{children:Object(r.jsx)(l,{children:e})})}},59:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(52)),o=t(5),a=t(6),i=t(28),s=t(14);function u(){var n=Object(o.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return u=function(){return n},n}function l(){var n=Object(o.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(o.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function b(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return n},n}function f(){var n=Object(o.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return f=function(){return n},n}function j(){var n=Object(o.a)(["\n    display: flex;\n    color: var(--primary-text-color);\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return j=function(){return n},n}var p=a.c.div(j(),s.e),m=a.c.div(f()),v=a.c.div(b()),h=(a.c.div(d()),Object(a.c)(i.a)(l())),O=Object(a.c)(i.a)(u());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,o=n.handleChange,a=n.title,i=(n.count,n.handleAddButton),s=void 0===i?function(){}:i;return Object(r.jsxs)(p,{children:[Object(r.jsx)(m,{children:Object(r.jsx)("h1",{children:a})}),Object(r.jsxs)(v,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{type:"search",name:"searchbox",value:e,handleChange:o,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(h,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(O,{onClick:s,children:"Prida\u0165"})]})]})}},60:function(n,e,t){"use strict";var r=t(21),c=t(2),o=t(30),a=(t(1),t(5)),i=t(6),s=t(28),u=t(14);function l(){var n=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return d=function(){return n},n}var b=i.c.div(d(),u.e),f=Object(i.c)(s.a)(l(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,a=n.setActiveIndex,i=Object(o.a)(n,["items","activeIndex","setActiveIndex"]);return Object(c.jsx)(b,Object(r.a)(Object(r.a)({},i),{},{children:Object(c.jsx)("ul",{children:e.map((function(n){return Object(c.jsx)("li",{children:Object(c.jsx)(f,{active:n.id===t,onClick:function(){return a(n.id)},children:n.name})},n.id)}))})}))}},62:function(n,e,t){"use strict";t.d(e,"k",(function(){return c})),t.d(e,"i",(function(){return o})),t.d(e,"h",(function(){return a})),t.d(e,"j",(function(){return i})),t.d(e,"n",(function(){return s})),t.d(e,"m",(function(){return u})),t.d(e,"l",(function(){return l})),t.d(e,"a",(function(){return d})),t.d(e,"f",(function(){return b})),t.d(e,"g",(function(){return f})),t.d(e,"d",(function(){return j})),t.d(e,"b",(function(){return p})),t.d(e,"c",(function(){return v})),t.d(e,"e",(function(){return h}));var r=t(2),c={name:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[0,1001,1001,1001,1001],eanCode:"",image:"",eshop:!0,link:"",category:""},o={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"",size:[1001,1001,1001,1001]}},a={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},i={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:""},s=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],u=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"Slu\u017eby",value:6},{name:"\u0160o\u0161ovky",value:0}],l=[{id:0,name:"V\u0161etko",premises:0},{id:1,name:"Obchodn\xe1 57, Bratislava",premises:1},{id:2,name:"Mileti\u010dova 38, Bratislava",premises:2},{id:3,name:"Vajnory, Bratislava",premises:3},{id:4,name:"Senica, OC Bran\u010d",premises:4}],d=[{id:0,name:"Okuliare"},{id:1,name:"\u0160osovky"}],b=function(n){var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)},f=function(n){var e=0;return n.includes(",")?(e=n.split(",")[0]+"."+n.split(",")[1],Number(e)):Number(n)},j=function(n,e){return void 0===n?"\u0160osovka":(console.log(e),console.log(n),"number"===typeof n?n<0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(r.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(n)]})]}):0===n?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(n," ks"):0===e?n.reduce((function(n,e){return n+e}))<0||0===n.reduce((function(n,e){return n+e}))?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"V\u0161etky: 0 ks"}):"V\u0161etky: ".concat(n.reduce((function(n,e){return n+e}))," ks"):n[e]<0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(r.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(n[e])]})]}):0===n[e]?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(n[e]," ks"))},p=function(n,e){if(void 0!==n)return 0===n.length||1001===n[e]?"":n[e].toString()},m="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",v=function(n){for(var e="",t=0;t<n.length;t++)-1!==m.indexOf(n.charAt(t))?e+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(m.indexOf(n.charAt(t))):e+=n.charAt(t);return e},h=function(n){return v(n).replaceAll(" ","-").toLowerCase().trim()}},65:function(n,e,t){"use strict";var r=t(2),c=t(10),o=t(1),a=t(57),i=t(5),s=t(6);function u(){var n=Object(i.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return u=function(){return n},n}function l(){var n=Object(i.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return l=function(){return n},n}var d=s.c.div(l()),b=s.c.button(u());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,i=n.handleClickPrev,s=void 0===i?function(){}:i,u=n.handleClickNext,l=void 0===u?function(){}:u,f=Object(o.useState)(!0),j=Object(c.a)(f,2),p=j[0],m=j[1],v=Object(o.useState)(!0),h=Object(c.a)(v,2),O=h[0],x=h[1],g=Object(o.useState)(0),k=Object(c.a)(g,2),y=k[0],w=k[1];Object(o.useEffect)((function(){m(0===y)}),[t]),Object(o.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?x(!0):x(!1)}),[t]),Object(o.useEffect)((function(){0!==y&&w((function(n){return n--}))}),[s]),Object(o.useEffect)((function(){w((function(n){return n++}))}),[l]);return Object(r.jsxs)(d,{children:[Object(r.jsx)(b,{disabled:p,onClick:function(){s(),0!==y&&w((function(n){return n-1}))},children:Object(r.jsx)(a.b,{})}),Object(r.jsx)(b,{disabled:O,onClick:function(){l(),w((function(n){return n+1}))},children:Object(r.jsx)(a.c,{})})]})}},73:function(n,e,t){"use strict";t.r(e),t.d(e,"OrdersContext",(function(){return f}));var r=t(2),c=t(21),o=t(7),a=t.n(o),i=t(12),s=t(10),u=t(1),l=t(3),d=t(18),b=t(19),f=Object(u.createContext)({orders:null,getOrders:function(){},createOrder:function(){},updateOrder:function(){},finishOrder:function(){},cancelOrder:function(){}});e.default=function(n){var e=n.children,t=Object(l.h)().push,o=Object(u.useContext)(b.a),j=o.setIsLoading,p=o.setShowModal,m=o.getMessage,v=o.closeModal,h=Object(u.useContext)(d.a).token,O=Object(u.useState)(null),x=Object(s.a)(O,2),g=x[0],k=x[1],y=new Headers;y.append("auth-token",h),y.append("Content-Type","application/json");var w=function(){var n=Object(i.a)(a.a.mark((function n(){var e,t,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),e={method:"GET",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),e);case 6:return t=n.sent,n.next=9,t.json();case 9:if(r=n.sent,console.log(r),!r.orders){n.next=15;break}return k(r.orders),v(),n.abrupt("return");case 15:m(r.messageSK),j(!1),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(3),console.log(n.t0),m("Nieco sa pokazilo"),j(!1);case 24:case"end":return n.stop()}}),n,null,[[3,19]])})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=Object(i.a)(a.a.mark((function n(e){var r,o,i,s,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),r=Object(c.a)({},e),console.log("ORDER BEFORE SEND"),console.log(r),o=JSON.stringify(r),i={method:"POST",headers:y,body:o,redirect:"follow"},n.prev=7,n.next=10,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),i);case 10:return s=n.sent,n.next=13,s.json();case 13:u=n.sent,console.log(u),u.order&&(w(),v(),t("/dashboard/objednavky"),setTimeout((function(){var n=window.open("".concat("http://195.110.58.166:8080","/uploads/pdf/").concat(u.order.pdfPath),"_blank","noreferrer noopener");null===n||void 0===n||n.focus()}),2e3)),m(u.messageSK),j(!1),n.next=25;break;case 20:n.prev=20,n.t0=n.catch(7),console.log(n.t0),m("Nieco sa pokazilo"),j(!1);case 25:case"end":return n.stop()}}),n,null,[[7,20]])})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=Object(i.a)(a.a.mark((function n(e,r){var o,i,s,u,l;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),o=Object(c.a)({},e),console.log("ORDER BEFORE SEND"),console.log(o),i=JSON.stringify(o),s={method:"PATCH",headers:y,body:i,redirect:"follow"},n.prev=7,n.next=10,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(r),s);case 10:return u=n.sent,n.next=13,u.json();case 13:l=n.sent,console.log(l),l.order&&(w(),v(),t("/dashboard/objednavky")),m(l.messageSK),j(!1),n.next=25;break;case 20:n.prev=20,n.t0=n.catch(7),console.log(n.t0),m("Nieco sa pokazilo"),j(!1);case 25:case"end":return n.stop()}}),n,null,[[7,20]])})));return function(e,t){return n.apply(this,arguments)}}(),z=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),r={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/fulfill"),r);case 6:return c=n.sent,n.next=9,c.json();case 9:if(o=n.sent,console.log(o),!o.order){n.next=15;break}return t(),v(),n.abrupt("return");case 15:m(o.messageSK),j(!1),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(3),console.log(n.t0),m("Nieco sa pokazilo"),j(!1);case 24:case"end":return n.stop()}}),n,null,[[3,19]])})));return function(e,t){return n.apply(this,arguments)}}(),E=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),r={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/cancel"),r);case 6:return c=n.sent,n.next=9,c.json();case 9:if(o=n.sent,console.log(o),!o.order){n.next=14;break}return setTimeout((function(){t(),v()}),100),n.abrupt("return");case 14:m(o.messageSK),j(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),m("Nieco sa pokazilo"),j(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(r.jsx)(f.Provider,{value:{orders:g,getOrders:w,createOrder:S,updateOrder:C,finishOrder:z,cancelOrder:E},children:e})}}}]);
//# sourceMappingURL=9.8d725bb1.chunk.js.map