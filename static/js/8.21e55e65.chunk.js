(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[8,31],{233:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(21),o=t(10),a=t(1),i=t(3),u=t(18),s=t(63),l=t(58),d=t(54),f=t(73),b=t(29),j=t(7),p=t.n(j),v=t(12),m=t(19),h=t(20),O=t.n(h),x=t(32),g=t(60),k=t(5),y=t(6),w=t(28);function S(){var n=Object(k.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return S=function(){return n},n}function C(){var n=Object(k.a)(["\n    display: flex;\n    margin: 3rem auto 0;\n"]);return C=function(){return n},n}function z(){var n=Object(k.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return z=function(){return n},n}function N(){var n=Object(k.a)(["\n    width:100%;\n    max-width: 50rem;\n    max-height: 60rem;\n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--background-primary-color);\n    color: var(--primary-text-color);\n\n    position: relative;\n    z-index: 999999;\n\n    h3 {\n        text-align: center;\n    }\n\n\n"]);return N=function(){return n},n}function B(){var n=Object(k.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return B=function(){return n},n}var P=y.c.div(B()),T=y.c.div(N()),E=y.c.select(z()),I=Object(y.c)(w.a)(C()),A=y.c.button(S()),D=function(n){var e=n.close,t=n.premise,c=n.id,i=n.refetch,s=Object(a.useState)(t),l=Object(o.a)(s,2),d=l[0],f=l[1],b=Object(a.useContext)(m.a).token,j=Object(a.useContext)(u.a),h=j.getMessage,k=j.message,y=j.isLoading,w=j.setIsLoading,S=j.closeModal,C=function(){var n=Object(v.a)(p.a.mark((function n(){var t,r,o,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),(t=new Headers).append("auth-token",b),t.append("Content-Type","application/json"),r=JSON.stringify({premises:Number(d)}),o={method:"POST",headers:t,body:r,redirect:"follow"},n.prev=6,n.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(c,"/delegate"),o);case 9:return 400===(a=n.sent).status&&h("Fakt\xfara mus\xed byt zaplaten\xe1, aby mohla by\u0165 priraden\xe1 prev\xe1dzke"),401===a.status&&h("Mus\xed\u0161 byt ved\xfaci, aby si mohol manipulova\u0165 s priradovanim"),n.next=14,a.json();case 14:if(!n.sent.order){n.next=20;break}return i(),w(!1),e(),n.abrupt("return");case 20:w(!1),n.next=27;break;case 23:n.prev=23,n.t0=n.catch(6),console.log(n.t0),w(!1);case 27:case"end":return n.stop()}}),n,null,[[6,23]])})));return function(){return n.apply(this,arguments)}}();return y||k?Object(r.jsx)(x.a,{loading:y,title:k,close:S}):O.a.createPortal(Object(r.jsxs)(P,{children:[Object(r.jsx)(A,{onClick:e}),Object(r.jsxs)(T,{children:[Object(r.jsx)("h3",{children:"Priradi\u0165 k prev\xe1dzke"}),Object(r.jsxs)(E,{value:d,onChange:function(n){return f(n.target.value)},children:[Object(r.jsx)("option",{value:0,children:"Nezadan\xe9"}),g.n.map((function(n,e){if(4!==e)return Object(r.jsx)("option",{value:e+1,children:n},e)}))]}),Object(r.jsx)(I,{onClick:C,children:"Priradi\u0165"})]})]}),document.getElementById("portal"))};var L=t(57),M=t(124);function K(){var n=Object(k.a)(["\n    width: 75%;\n    height: .1rem;\n    background-color: var(--secondary-text-color);\n    margin: 1rem auto;\n    opacity: .1;\n"]);return K=function(){return n},n}function V(){var n=Object(k.a)(["\n    position: absolute;\n    padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    border-radius: .5rem;\n    background-color: var(--dropdown-background-color);\n    z-index: 99;\n    right: 3rem;\n    top: 6rem;\n    width: 20rem;\n    text-align: start;\n\n    ul {\n        list-style: none;\n\n        li {\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            transition: background-color .3s ease-out;\n            border-radius: 9999rem .5rem .5rem 9999rem;\n            color: var(--primary-text-color);\n\n            &:not(:last-child) {\n                margin-bottom: 1rem;\n            }\n\n            div {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                padding: 1rem;\n                background-color: var(--dropdown-hover-background-color);\n                border-radius: 50%;\n                margin-right: 1rem;\n\n                svg {\n                    transition: color .3s ease-out;\n                }\n            }\n\n            &:hover {\n                background-color: var(--dropdown-hover-background-color);\n\n                div {\n                    svg {\n                        color: var(--primary-color);\n                    }\n                }\n            }\n\n        }\n        a:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n    }\n"]);return V=function(){return n},n}function _(){var n=Object(k.a)(["\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem;\n    border-radius: 50%;\n    background-color: var(--dropdownbutton-background-color);\n\n    svg {\n        font-size: 1.2rem;\n        margin-top: .1rem;\n        display: block;\n        color: var(--dropdownbutton-color);\n    }\n"]);return _=function(){return n},n}function F(){var n=Object(k.a)(["\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--body-background-primary-color);\n    }\n"]);return F=function(){return n},n}function H(){var n=Object(k.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    transition: background-color .3s ease-out; \n"]);return H=function(){return n},n}function Z(){var n=Object(k.a)(["\n    position: relative;\n    padding: 2rem;\n    text-align: center;\n"]);return Z=function(){return n},n}function J(){var n=Object(k.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n"]);return J=function(){return n},n}var R=y.c.div(J()),G=y.c.div(Z()),Q=Object(y.c)(G)(H()),U=y.c.div(F()),Y=y.c.div(_()),q=y.c.div(V()),W=y.c.div(K()),X=function(n){var e,t,c,i,u=n.order,s=n.refetch,l=Object(a.useContext)(f.OrdersContext),d=l.finishOrder,j=l.cancelOrder,p=l.getPDF,v=Object(a.useState)(!1),m=Object(o.a)(v,2),h=m[0],O=m[1],x=new Date(u.date),k=Object(a.useRef)(null);c=k,i=function(){return O(!1)},Object(a.useEffect)((function(){var n=function(n){c.current&&!c.current.contains(n.target)&&i()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[c]);var y,w=Object(a.useState)(!1),S=Object(o.a)(w,2),C=S[0],z=S[1],N=(null===u||void 0===u||null===(e=u.orderedBy)||void 0===e?void 0:e._id)?null===u||void 0===u||null===(t=u.orderedBy)||void 0===t?void 0:t._id:null===u||void 0===u?void 0:u.orderedBy;return Object(r.jsxs)(R,{children:[Object(r.jsx)(G,{children:u.customId}),Object(r.jsx)(G,{children:x.toLocaleDateString("sk-SK",{weekday:"long",month:"long",day:"numeric"})}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(U,{onClick:function(){return z(!0)},children:0===u.premises?"Neuveden\xe9":g.n[u.premises-1]}),C&&Object(r.jsx)(D,{refetch:s,close:function(){return z(!1)},premise:u.premises,id:u._id})]}),Object(r.jsx)(G,{children:(y=u.status,"finished"===y?"Dokon\u010den\xe9":"fulfilled"===y?"Vybaven\xe9":"pending"===y?"\u010cak\xe1 na vybavenie":"paid"===y?"Zaplaten\xe9":"half-paid"===y?"Z\xe1lohovan\xe9":"cancelled"===y?"Zru\u0161en\xe9":void 0)}),Object(r.jsxs)(G,{children:[Object(r.jsx)(Y,{onClick:function(){return O(!h)},children:Object(r.jsx)(L.a,{})}),h&&Object(r.jsxs)(q,{ref:k,children:[Object(r.jsxs)("ul",{children:["fulfilled"!==u.status&&"cancelled"!==u.status&&Object(r.jsxs)("li",{onClick:function(){return n=u._id,d(n,s),void O(!1);var n},children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.e,{})}),"Vybaven\xe9"]}),"cancelled"!==u.status&&Object(r.jsxs)("li",{onClick:function(){return n=u._id,j(n,s),void O(!1);var n},children:[Object(r.jsx)("div",{children:Object(r.jsx)(M.a,{})}),"Odstr\xe1ni\u0165"]})]}),Object(r.jsx)(W,{}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("button",{onClick:function(){return p(u._id)},children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.i,{})}),"Zobraz PDF"]})}),Object(r.jsx)(b.b,{to:"/dashboard/objednavky/".concat(N,"/").concat(u._id),children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(L.j,{})}),"Zobrazi\u0165"]})})]})]})]})]})},$=t(64),nn=t(125),en=t(53),tn=[{id:1,name:"Nevybaven\xe9"},{id:2,name:"Dokon\u010den\xe9"},{id:3,name:"Zru\u0161en\xe9"}],rn=t(14);function cn(){var n=Object(k.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    transition: background-color .3s ease-out; \n"]);return cn=function(){return n},n}function on(){var n=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2.5rem;\n"]);return on=function(){return n},n}function an(){var n=Object(k.a)(["\n    cursor:  ",";\n    position: relative;\n    padding: 2rem;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n"]);return an=function(){return n},n}function un(){var n=Object(k.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n"]);return un=function(){return n},n}function sn(){var n=Object(k.a)(["\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    border-bottom: 1px solid var(--secondary-text-color);\n    font-weight: bolder;\n"]);return sn=function(){return n},n}function ln(){var n=Object(k.a)(["\n    min-width: 65rem;\n    /* margin-bottom: 10rem; */\n"]);return ln=function(){return n},n}var dn=y.c.div(ln()),fn=y.c.div(sn()),bn=(y.c.div(un()),y.c.div(an(),(function(n){return n.clickable?"pointer":"default"}))),jn=y.c.div(on());Object(y.c)(bn)(cn()),e.default=function(){var n,e=Object(i.h)().push,t=Object(a.useContext)(u.a),f=t.closeModal,b=t.isLoading,j=t.message,p=t.showModal,v=Object(a.useState)(""),m=Object(o.a)(v,2),h=m[0],O=m[1],g=Object(a.useState)(1),k=Object(o.a)(g,2),y=k[0],w=k[1],S=Object(a.useState)([]),C=Object(o.a)(S,2),z=C[0],N=C[1],B=Object(a.useState)({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}),P=Object(o.a)(B,2),T=P[0],E=P[1],I=Object(en.c)("api/admin/orders/filter",T),A=I.isLoading,D=I.response,L=I.refetch,M=function(){L()};console.log(D);return Object(a.useEffect)((function(){A||D&&(N(null===D||void 0===D?void 0:D.orders),f())}),[A,D,y]),Object(a.useEffect)((function(){return function(){w(1),O(""),N([]),E({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}})}}),[]),Object(r.jsxs)("section",{children:[p&&Object(r.jsx)(x.a,{loading:b,title:j,close:f}),Object(r.jsx)(s.a,{searchQuery:h,handleSearch:function(){""!==h&&E((function(n){return{orderId:h}})),L()},handleChange:function(n){return O(n.target.value)},handleAddButton:function(){return e("/dashboard/objednavky/nova-objednavka")},title:"Objedn\xe1vky"}),Object(r.jsx)(rn.d,{children:Object(r.jsx)(rn.c,{children:Object(r.jsx)(l.a,{items:tn,activeIndex:y,setActiveIndex:function(n){w(n),1===n?E({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}):2===n?E({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!0}}):3===n&&E({limit:10,skip:0,sortBy:{date:-1},filters:{status:"cancelled"}}),M()}})})}),Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(dn,{children:[Object(r.jsxs)(fn,{children:[Object(r.jsx)(bn,{children:"ID"}),Object(r.jsxs)(bn,{clickable:!0,onClick:function(){E((function(n){var e;return Object(c.a)(Object(c.a)({},T),{},{sortBy:{date:1===(null===n||void 0===n||null===(e=n.sortBy)||void 0===e?void 0:e.date)?-1:1}})})),M()},children:["D\xe1tum ",1===(null===T||void 0===T||null===(n=T.sortBy)||void 0===n?void 0:n.date)?Object(r.jsx)(jn,{children:Object(r.jsx)(nn.a,{})}):Object(r.jsx)(jn,{children:Object(r.jsx)(nn.b,{})})]}),Object(r.jsx)(bn,{children:"Prev\xe1dzka"}),Object(r.jsx)(bn,{children:"Status"}),Object(r.jsx)(bn,{children:"Mo\u017enosti"})]}),null===z||void 0===z?void 0:z.map((function(n,e){return Object(r.jsx)(X,{order:n,refetch:M},e)}))]}),Object(r.jsx)($.a,{listItems:z,handleClickNext:function(){z.length<10||(E((function(n){return Object(c.a)(Object(c.a)({},n),{},{skip:n.skip+10})})),L())},handleClickPrev:function(){0!==T.skip&&(E((function(n){return Object(c.a)(Object(c.a)({},n),{},{skip:n.skip-10})})),L())}})]})]})}},52:function(n,e,t){"use strict";var r=t(2),c=t(21),o=t(30),a=(t(1),t(5)),i=t(6);function u(){var n=Object(a.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(a.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var l=Object(i.b)(s()),d=i.c.div(u(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,a=n.name,i=Object(o.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(c.a)({className:"form-input",name:a,onChange:e},i)),t?Object(r.jsx)("label",{htmlFor:a,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return s})),t.d(e,"b",(function(){return l}));var r=t(7),c=t.n(r),o=t(12),a=t(10),i=t(1),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=Object(i.useState)(null),u=Object(a.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),f=Object(a.a)(d,2),b=f[0],j=f[1],p=Object(i.useState)(null),v=Object(a.a)(p,2),m=v[0],h=v[1],O=Object(i.useState)(!0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=Object(i.useState)(0),w=Object(a.a)(y,2),S=w[0],C=w[1],z=function(){return C((function(n){return n+1}))},N={method:t,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var t=Object(o.a)(c.a.mark((function t(){var r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return k(!0),t.prev=3,t.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),N);case 6:return r=t.sent,t.next=9,r.json();case 9:o=t.sent,h(o.message),l(o),k(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),j(t.t0),k(!1),h("Nie\u010do sa pokazilo");case 20:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}})()()}),[S]),{response:s,isLoading:g,error:b,message:m,refetch:z}},s=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(a.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),f=Object(a.a)(d,2),b=f[0],j=f[1],p=Object(i.useState)(!0),v=Object(a.a)(p,2),m=v[0],h=v[1],O=Object(i.useState)(0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S=JSON.stringify(e),C={method:"POST",headers:w,body:S,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var e=Object(o.a)(c.a.mark((function e(){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),C);case 6:return r=e.sent,e.next=9,r.json();case 9:o=e.sent,l(o),h(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),j(e.t0),h(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[g,n]),{response:s,isLoading:m,error:b,refetch:y}},l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(a.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),f=Object(a.a)(d,2),b=f[0],j=f[1],p=Object(i.useState)(!0),v=Object(a.a)(p,2),m=v[0],h=v[1],O=Object(i.useState)(0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S={method:"GET",headers:w,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var r=Object(o.a)(c.a.mark((function r(){var o,a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return h(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),S);case 6:return o=r.sent,r.next=9,o.json();case 9:a=r.sent,l(a),h(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),j(r.t0),h(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[g,n,e]),{response:s,isLoading:m,error:b,refetch:y}}},54:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(5)),o=t(6),a=t(14);function i(){var n=Object(c.a)(["\n    max-width: 125rem;\n"]);return i=function(){return n},n}function u(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return u=function(){return n},n}var s=o.c.div(u(),a.g),l=o.c.div(i());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(l,{children:e})})}},58:function(n,e,t){"use strict";var r=t(21),c=t(2),o=t(30),a=(t(1),t(5)),i=t(6),u=t(28),s=t(14);function l(){var n=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-bottom: 3rem;\n    /* "," */\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return d=function(){return n},n}var f=i.c.div(d(),s.g),b=Object(i.c)(u.a)(l(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,a=n.setActiveIndex,i=Object(o.a)(n,["items","activeIndex","setActiveIndex"]);return Object(c.jsx)(f,Object(r.a)(Object(r.a)({},i),{},{children:Object(c.jsx)("ul",{children:e.map((function(n){return Object(c.jsx)("li",{children:Object(c.jsx)(b,{active:n.id===t,onClick:function(){return a(n.id)},children:n.name})},n.id)}))})}))}},60:function(n,e,t){"use strict";t.d(e,"k",(function(){return c})),t.d(e,"i",(function(){return o})),t.d(e,"h",(function(){return a})),t.d(e,"j",(function(){return i})),t.d(e,"n",(function(){return u})),t.d(e,"m",(function(){return s})),t.d(e,"l",(function(){return l})),t.d(e,"a",(function(){return d})),t.d(e,"f",(function(){return f})),t.d(e,"g",(function(){return b})),t.d(e,"d",(function(){return j})),t.d(e,"b",(function(){return p})),t.d(e,"c",(function(){return m})),t.d(e,"e",(function(){return h}));var r=t(2),c={name:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[0,1001,1001,1001,1001],eanCode:"",image:"",eshop:!0,link:"",category:""},o={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"",size:[1001,1001,1001,1001]}},a={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},i={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:""},u=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],s=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"Slu\u017eby",value:6},{name:"\u0160o\u0161ovky",value:0}],l=[{id:0,name:"V\u0161etko",premises:0},{id:1,name:"Obchodn\xe1 57, Bratislava",premises:1},{id:2,name:"Mileti\u010dova 38, Bratislava",premises:2},{id:3,name:"Vajnory, Bratislava",premises:3},{id:4,name:"Senica, OC Bran\u010d",premises:4}],d=[{id:0,name:"Okuliare"},{id:1,name:"\u0160osovky"}],f=function(n){var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)},b=function(n){var e=0;return n.includes(",")?(e=n.split(",")[0]+"."+n.split(",")[1],Number(e)):Number(n)},j=function(n,e){return void 0===n?"\u0160osovka":"number"===typeof n?n<0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(r.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(n)]})]}):0===n?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(n," ks"):0===e?n.reduce((function(n,e){return n+e}))<0||0===n.reduce((function(n,e){return n+e}))?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"V\u0161etky: 0 ks"}):"V\u0161etky: ".concat(n.reduce((function(n,e){return n+e}))," ks"):n[e]<0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(r.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(n[e])]})]}):0===n[e]?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(n[e]," ks")},p=function(n,e){if(void 0!==n)return 0===n.length||1001===n[e]?"":n[e].toString()},v="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",m=function(n){for(var e="",t=0;t<n.length;t++)-1!==v.indexOf(n.charAt(t))?e+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(v.indexOf(n.charAt(t))):e+=n.charAt(t);return e},h=function(n){return m(n).replaceAll(" ","-").toLowerCase().trim()}},63:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(52)),o=t(5),a=t(6),i=t(28),u=t(14);function s(){var n=Object(o.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return s=function(){return n},n}function l(){var n=Object(o.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(o.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function f(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return n},n}function b(){var n=Object(o.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return b=function(){return n},n}function j(){var n=Object(o.a)(["\n    max-width: 125rem;\n    display: flex;\n    justify-content: space-between;\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return j=function(){return n},n}function p(){var n=Object(o.a)(["\n    color: var(--primary-text-color);\n    margin-bottom: 3rem;\n    ",";    \n    /* max-width: 125rem; */\n\n\n"]);return p=function(){return n},n}var v=a.c.div(p(),u.g),m=a.c.div(j()),h=a.c.div(b()),O=a.c.div(f()),x=(a.c.div(d()),Object(a.c)(i.a)(l())),g=Object(a.c)(i.a)(s());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,o=n.handleChange,a=n.title,i=(n.count,n.handleAddButton),u=void 0===i?function(){}:i;return Object(r.jsx)(v,{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(h,{children:Object(r.jsx)("h1",{children:a})}),Object(r.jsxs)(O,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{type:"search",name:"searchbox",value:e,handleChange:o,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(x,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(g,{onClick:u,children:"Prida\u0165"})]})]})})}},64:function(n,e,t){"use strict";var r=t(2),c=t(10),o=t(1),a=t(57),i=t(5),u=t(6);function s(){var n=Object(i.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return s=function(){return n},n}function l(){var n=Object(i.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return l=function(){return n},n}var d=u.c.div(l()),f=u.c.button(s());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,i=n.handleClickPrev,u=void 0===i?function(){}:i,s=n.handleClickNext,l=void 0===s?function(){}:s,b=Object(o.useState)(!0),j=Object(c.a)(b,2),p=j[0],v=j[1],m=Object(o.useState)(!0),h=Object(c.a)(m,2),O=h[0],x=h[1],g=Object(o.useState)(0),k=Object(c.a)(g,2),y=k[0],w=k[1];Object(o.useEffect)((function(){v(0===y)}),[t]),Object(o.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?x(!0):x(!1)}),[t]),Object(o.useEffect)((function(){0!==y&&w((function(n){return n--}))}),[u]),Object(o.useEffect)((function(){w((function(n){return n++}))}),[l]);return Object(r.jsxs)(d,{children:[Object(r.jsx)(f,{disabled:p,onClick:function(){u(),0!==y&&w((function(n){return n-1}))},children:Object(r.jsx)(a.b,{})}),Object(r.jsx)(f,{disabled:O,onClick:function(){l(),w((function(n){return n+1}))},children:Object(r.jsx)(a.c,{})})]})}},73:function(n,e,t){"use strict";t.r(e),t.d(e,"OrdersContext",(function(){return b}));var r=t(2),c=t(21),o=t(7),a=t.n(o),i=t(12),u=t(10),s=t(1),l=t(3),d=t(19),f=t(18),b=Object(s.createContext)({orders:null,getPDF:function(){},getOrders:function(){},createOrder:function(){},updateOrder:function(){},finishOrder:function(){},cancelOrder:function(){}});e.default=function(n){var e=n.children,t=Object(l.h)().push,o=Object(s.useContext)(f.a),j=o.setIsLoading,p=o.setShowModal,v=o.getMessage,m=o.closeModal,h=Object(s.useContext)(d.a).token,O=Object(s.useState)(null),x=Object(u.a)(O,2),g=x[0],k=x[1],y=new Headers;y.append("auth-token",h),y.append("Content-Type","application/json");var w=function(){var n=Object(i.a)(a.a.mark((function n(){var e,t,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),e={method:"GET",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),e);case 6:return t=n.sent,n.next=9,t.json();case 9:if(!(r=n.sent).orders){n.next=14;break}return k(r.orders),m(),n.abrupt("return");case 14:v(r.messageSK),j(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),j(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=Object(i.a)(a.a.mark((function n(e){var t,r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),t={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/createPdf"),t);case 6:return r=n.sent,n.next=9,r.json();case 9:(c=n.sent).filename&&(j(!1),v(c.messageSK),setTimeout((function(){var n=window.open("".concat("http://195.110.58.166:8080","/uploads/pdf/").concat(c.filename),"_blank","noreferrer noopener");null===n||void 0===n||n.focus()}),100)),v(c.messageSK),j(!1),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),j(!1);case 20:case"end":return n.stop()}}),n,null,[[3,15]])})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=Object(i.a)(a.a.mark((function n(e){var r,o,i,u,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),r=Object(c.a)({},e),o=JSON.stringify(r),i={method:"POST",headers:y,body:o,redirect:"follow"},n.prev=5,n.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),i);case 8:return u=n.sent,n.next=11,u.json();case 11:(s=n.sent).order&&(w(),m(),t("/dashboard/objednavky"),setTimeout((function(){S(s.order._id)}),100)),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(5),console.log(n.t0),v("Nieco sa pokazilo"),j(!1);case 20:case"end":return n.stop()}}),n,null,[[5,15]])})));return function(e){return n.apply(this,arguments)}}(),z=function(){var n=Object(i.a)(a.a.mark((function n(e,r){var o,i,u,s,l;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),o=Object(c.a)({},e),i=JSON.stringify(o),u={method:"PATCH",headers:y,body:i,redirect:"follow"},n.prev=5,n.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(r),u);case 8:return s=n.sent,n.next=11,s.json();case 11:(l=n.sent).order&&(w(),m(),t("/dashboard/objednavky")),v(l.messageSK),j(!1),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(5),console.log(n.t0),v("Nieco sa pokazilo"),j(!1);case 22:case"end":return n.stop()}}),n,null,[[5,17]])})));return function(e,t){return n.apply(this,arguments)}}(),N=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),r={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/fulfill"),r);case 6:return c=n.sent,n.next=9,c.json();case 9:if(!(o=n.sent).order){n.next=14;break}return t(),m(),n.abrupt("return");case 14:v(o.messageSK),j(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),j(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e,t){return n.apply(this,arguments)}}(),B=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),p(!0),r={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/cancel"),r);case 6:return c=n.sent,n.next=9,c.json();case 9:if(!(o=n.sent).order){n.next=13;break}return setTimeout((function(){t(),m()}),100),n.abrupt("return");case 13:v(o.messageSK),j(!1),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),j(!1);case 22:case"end":return n.stop()}}),n,null,[[3,17]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(r.jsx)(b.Provider,{value:{orders:g,getPDF:S,getOrders:w,createOrder:C,updateOrder:z,finishOrder:N,cancelOrder:B},children:e})}}}]);
//# sourceMappingURL=8.21e55e65.chunk.js.map