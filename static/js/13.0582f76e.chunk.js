(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[13,35],{225:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(10),a=t(1),o=t.n(a),i=t(3),u=t(55),l=t(52),s=t(31),d=t(5),b=t(6),f=t(28);function j(){var n=Object(d.a)(["\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    display: block;\n    margin-left: 2rem;;\n"]);return j=function(){return n},n}function p(){var n=Object(d.a)(["\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    display: block;\n    background-color: ",";\n    font-weight: bolder;\n    color: ",";\n"]);return p=function(){return n},n}function m(){var n=Object(d.a)(["\n    display: flex;\n"]);return m=function(){return n},n}function v(){var n=Object(d.a)(["\n    padding: 2rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    &:not(:last-child) {\n        /* margin-right: 2rem; */\n    }\n\n    h3  { \n        font-size: 1.8rem;\n    }\n\n    p {\n        font-size: 1.4rem;\n        opacity: .83;\n\n        span {\n            font-weight: bolder;\n        }\n    }\n"]);return v=function(){return n},n}var h=b.c.div(v()),O=b.c.div(m()),g=Object(b.c)(f.a)(p(),(function(n){return n.isActive?"var(--primary-color)":"var(--body-background-primary-color)"}),(function(n){return n.isActive?"var(--primary-text-color)":"var(--primary-color)"})),x=Object(b.c)(f.a)(j()),y=function(n){var e=n.calendar,t=void 0===e?{}:e,c=n.selectedCalendar,a=void 0===c?null:c,o=n.handleShowUpClick,i=void 0===o?function(){}:o;return Object(r.jsxs)(h,{children:[Object(r.jsx)("h3",{children:null===t||void 0===t?void 0:t.name}),Object(r.jsxs)("p",{children:["Interval medzi vy\u0161etreniami: ",Object(r.jsxs)("span",{children:[null===t||void 0===t?void 0:t.interval,"min"]})]}),Object(r.jsxs)("p",{children:["Po\u010det min\xfat pred rezerv\xe1ciou: ",Object(r.jsxs)("span",{children:[null===t||void 0===t?void 0:t.allowMinutesBefore,"min"]})]}),Object(r.jsxs)("p",{children:["Ko\u013eko dn\xed dopredu sa da objedna\u0165: ",Object(r.jsx)("span",{children:null===t||void 0===t?void 0:t.daysIntoFuture})]}),Object(r.jsxs)(O,{children:[Object(r.jsx)(g,{isActive:a===(null===t||void 0===t?void 0:t._id),onClick:i,children:"Zobrazi\u0165"}),Object(r.jsx)(x,{children:"Upravi\u0165"})]})]})},k=["Pondelok","Utorok","Streda","\u0160tvrtok","Piatok","Sobota","Nede\u013ea"],w=["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","september","okt\xf3ber","november","december"],S=["Mesiac","T\xfd\u017eden"],D=t(53);function N(){var n=Object(d.a)(["\n    margin-left: auto\n"]);return N=function(){return n},n}function C(){var n=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    border-radius: 50%;\n    font-weight: bolder;\n    padding: .2rem .9rem;\n"]);return C=function(){return n},n}function z(){var n=Object(d.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n"]);return z=function(){return n},n}function A(){var n=Object(d.a)(["\n    height: 10rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    border: 1px solid rgba(0,0,0,.1);\n    padding: .6rem 1rem;\n\n    transition: all .15s;\n\n    p {\n        span {\n            width: 3rem;\n            height: 3rem;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border-radius: 50%;\n            background-color: var(--body-background-primary-color);\n            color: var(--primary-color);\n            font-weight: bolder;\n            font-size: 1.5rem;\n        }\n    }\n\n    ",";\n\n\n\n"]);return A=function(){return n},n}function E(){var n=Object(d.a)(["\n    cursor: default;\n    height: 8rem;\n    background-color: var(--color-black);\n    color: var(--primary-text-color);\n    display: flex;\n    align-items:center;\n    justify-content:center;\n    font-weight: 700;\n"]);return E=function(){return n},n}function P(){var n=Object(d.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border: 1px solid rgba(0,0,0,.1);\n    min-width: 55rem;\n"]);return P=function(){return n},n}var I=b.c.div(P()),T=b.c.div(E()),L=b.c.div(A(),(function(n){return n.faded?"opacity: .6":"    \n        cursor: pointer;\n        &:hover {\n        background-color: var(--body-background-primary-color);\n        }\n    "})),F=(b.c.div(z()),b.c.p(C(),(function(n){return n.active?" rgb(235, 172, 1)":"#eee"}),(function(n){return n.active?"#fff":"#000"})),b.c.p(N()),function(n){var e=n.calendar,t=n.month,o=n.year;(new Date).setDate(1);var i=new Date(o,t+1,0).getDate(),u=new Date(o,t,0).getDate(),l=new Date(o,t,0).getDay(),s=7-new Date(o,t+1,0).getDay(),d=Object(D.b)("api/booking/calendars",e,!e),b=d.response,f=d.isLoading,j=d.refetch,p=Object(a.useState)(null),m=Object(c.a)(p,2),v=(m[0],m[1]),h=Object(a.useState)([]),O=Object(c.a)(h,2),g=O[0],x=O[1],y=Object(a.useState)([]),w=Object(c.a)(y,2),S=w[0],N=w[1],C=Object(a.useState)([]),z=Object(c.a)(C,2),A=z[0],E=z[1];return Object(a.useEffect)((function(){j()}),[t]),Object(a.useEffect)((function(){e&&j()}),[e]),Object(a.useEffect)((function(){if(!f&&(null===b||void 0===b?void 0:b.calendar)){v(b.calendar);var n=function(n){for(var e=[],t=n;t>0;t--)e.push({dayNumber:t});return e}(l),e=function(n){for(var e=[],t=1;t<=n;t++)e.push({dayNumber:t});return e}(i),r=function(n){console.log(n);for(var e=[],t=1;t<=n;t++)e.push({dayNumber:t});return e}(s),c=function(n,e,t,r){if(!e.booked)return n;var c=Object.keys(null===e||void 0===e?void 0:e.booked).filter((function(n){var e=n.split("/"),c=!1;if(e.forEach((function(n){return c=t+1===Number(e[1])&&r===Number(e[2])})),c)return n}));return n.map((function(n){var t={};return c.forEach((function(r){var c=r.split("/");return Number(c[0])===n.dayNumber?t={dayNumber:n.dayNumber,bookings:e.booked[r]}:t.bookings?void 0:t={dayNumber:n.dayNumber}})),t.bookings?t:{dayNumber:n.dayNumber}}))}(e,b.calendar,t,o);x(n),N(c),E(r)}}),[f]),Object(r.jsxs)(I,{children:[k.map((function(n,e){return Object(r.jsx)(T,{children:n},e)})),g.map((function(n,e){return Object(r.jsxs)(L,{faded:!0,children:[Object(r.jsx)("p",{}),Object(r.jsx)("p",{children:u-e})]},e)})),S.map((function(n,e){console.log(n);var t=n.dayNumber,c=n.bookings;return Object(r.jsxs)(L,{children:[Object(r.jsx)("p",{children:c&&Object(r.jsx)("span",{children:c.length})}),Object(r.jsx)("p",{children:t})]},e)})),A.map((function(n,e){return Object(r.jsxs)(L,{faded:!0,children:[Object(r.jsx)("p",{}),Object(r.jsx)("p",{children:e+1})]},e)}))]})}),K=t(54);function U(){var n=Object(d.a)(["\n\n    div {\n        height: 10rem;\n        padding: .5rem;\n        border: 1px solid rgba(0,0,0,0.1);\n\n        span {\n            opacity: .6;\n        }\n    }\n\n    :not(:nth-child(8n)) {\n        div {\n            padding: 2rem;\n\n            span {\n                display: none;\n            }\n        }\n    }\n"]);return U=function(){return n},n}function B(){var n=Object(d.a)(["\n    cursor: default;\n    height: 8rem;\n    background-color: var(--color-black);\n    color: var(--table-head-color);\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    justify-content:center;\n    font-weight: 700;\n\n    p:first-child {\n        font-weight: lighter;\n    }\n"]);return B=function(){return n},n}function J(){var n=Object(d.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border: 1px solid rgba(0,0,0,.1);\n    min-width: 55rem;\n"]);return J=function(){return n},n}var M=b.c.div(J()),H=b.c.div(B()),Q=b.c.div(U()),V=function(){var n=function(n){var e=(n=new Date(n)).getDay(),t=n.getDate()-e+(0==e?-6:1);return new Date(n.setDate(t))}(new Date).getDate();return console.log("monday"),console.log(n),console.log("monday"),Object(r.jsx)("div",{children:Object(r.jsxs)(M,{children:[Object(K.a)(Array(7)).map((function(e,t){return Object(r.jsxs)(H,{children:[Object(r.jsx)("p",{children:k[t]}),Object(r.jsx)("p",{children:n+t})]},t)})),Object(K.a)(Array(7)).map((function(n,e){return Object(r.jsx)(Q,{idx:e,children:Object(K.a)(Array(24)).map((function(n,e){return Object(r.jsx)("div",{idx:e,children:Object(r.jsxs)("span",{children:[e+1,":00"]})})}))})}))]})})},_=t(57);function G(){var n=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n    padding: 0.5rem 2rem;\n\n    transition: all .3s ease-in-out;\n"]);return G=function(){return n},n}function Y(){var n=Object(d.a)(["\n    display: flex;\n    align-items: center;\n\n    button {\n        cursor: pointer;\n        font-size: 2rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: var(--primary-color);\n\n    }\n\n    p {\n        text-transform: capitalize;\n        margin: 0 1rem;\n    }\n"]);return Y=function(){return n},n}function Z(){var n=Object(d.a)(["\n    display: flex; \n    justify-content: space-between;\n    align-items: center;\n\n    ul {\n        list-style: none;\n        display: flex;\n        /* gap: 2rem; */\n\n\n    }\n"]);return Z=function(){return n},n}function q(){var n=Object(d.a)(["\n    margin-top: 3rem;\n    margin-bottom: 10rem;\n"]);return q=function(){return n},n}function R(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: repeat( auto-fit, minmax(27rem, 1fr) );\n    margin-bottom: 3rem;\n    grid-gap: 2rem;\n"]);return R=function(){return n},n}function W(){var n=Object(d.a)(["\n    margin-bottom: 2rem;\n"]);return W=function(){return n},n}var X=b.c.h2(W()),$=b.c.div(R()),nn=b.c.div(q()),en=b.c.div(Z()),tn=b.c.div(Y()),rn=b.c.li(G(),(function(n){return n.isActive?"var(--primary-color)":"none"}),(function(n){return n.isActive?"var(--button-font-color)":"var(--primary-color)"}));e.default=function(){var n=Object(i.h)().push,e=Object(a.useState)(!0),t=Object(c.a)(e,2),d=t[0],b=t[1],f=Object(a.useState)(0),j=Object(c.a)(f,2),p=j[0],m=j[1],v=Object(a.useState)(""),h=Object(c.a)(v,2),O=h[0],g=h[1],x=Object(a.useState)([]),k=Object(c.a)(x,2),N=k[0],C=k[1],z=Object(a.useState)(null),A=Object(c.a)(z,2),E=A[0],P=A[1],I=Object(a.useState)((new Date).getMonth()),T=Object(c.a)(I,2),L=T[0],K=T[1],U=Object(a.useState)((new Date).getFullYear()),B=Object(c.a)(U,2),J=B[0],M=B[1],H=Object(D.a)("api/booking/calendars"),Q=H.isLoading,G=H.response,Y=H.message;H.refetch;return Object(a.useEffect)((function(){Q||G&&(C(G.calendars),b(!1))}),[Q]),Object(r.jsxs)("section",{children:[d&&Object(r.jsx)(s.a,{loading:Q,title:Y,close:function(){return b(!1)}}),Object(r.jsx)(u.a,{searchQuery:O,handleChange:function(n){return g(n.target.value)},handleAddButton:function(){return n("rezervacie/novy-kalendar")},title:"Kalendar s objedn\xe1vkami"}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(X,{children:"Pobo\u010dky"}),Object(r.jsx)($,{children:N&&N.map((function(n,e){return Object(r.jsx)(y,{calendar:n,selectedCalendar:E,handleShowUpClick:function(){return e=n._id,void P(e);var e}},e)}))}),E&&Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsxs)(en,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(X,{children:"Kalend\xe1r"})}),Object(r.jsxs)(tn,{children:[Object(r.jsx)("button",{onClick:function(){0===L?(M((function(n){return n-1})),K(10)):K((function(n){return n-1}))},children:Object(r.jsx)(_.k,{})}),Object(r.jsx)("p",{children:w[L]}),Object(r.jsx)("button",{onClick:function(){10===L?(M((function(n){return n+1})),K(0)):K((function(n){return n+1}))},children:Object(r.jsx)(_.n,{})})]}),Object(r.jsx)("ul",{children:S.map((function(n,e){return Object(r.jsx)(rn,{isActive:p===e,onClick:function(){return m(e)},children:n},e)}))})]}),Object(r.jsx)(nn,{children:0===p?Object(r.jsx)(F,{calendar:E,month:L,year:J}):Object(r.jsx)(V,{calendar:E})})]})]})]})}},51:function(n,e,t){"use strict";var r=t(2),c=t(21),a=t(30),o=(t(1),t(5)),i=t(6);function u(){var n=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function l(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return l=function(){return n},n}var s=Object(i.b)(l()),d=i.c.div(u(),s,s);e.a=function(n){var e=n.handleChange,t=n.label,o=n.name,i=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(c.a)({className:"form-input",name:o,onChange:e},i)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},52:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(5)),a=t(6),o=t(14);function i(){var n=Object(c.a)(["\n    max-width: 115rem;\n"]);return i=function(){return n},n}function u(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return u=function(){return n},n}var l=a.c.div(u(),o.e),s=a.c.div(i());e.a=function(n){var e=n.children;return Object(r.jsx)(l,{children:Object(r.jsx)(s,{children:e})})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return l})),t.d(e,"b",(function(){return s}));var r=t(7),c=t.n(r),a=t(12),o=t(10),i=t(1),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(i.useState)(null),r=Object(o.a)(t,2),u=r[0],l=r[1],s=Object(i.useState)(null),d=Object(o.a)(s,2),b=d[0],f=d[1],j=Object(i.useState)(null),p=Object(o.a)(j,2),m=p[0],v=p[1],h=Object(i.useState)(!0),O=Object(o.a)(h,2),g=O[0],x=O[1],y=Object(i.useState)(0),k=Object(o.a)(y,2),w=k[0],S=k[1],D=function(){return S((function(n){return n+1}))};return Object(i.useEffect)((function(){(function(){var t=Object(a.a)(c.a.mark((function t(){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,fetch("".concat("http://195.110.58.166:8080","/").concat(n));case 5:return r=t.sent,t.next=8,r.json();case 8:a=t.sent,v(a.message),l(a),x(!1),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(2),f(t.t0),x(!1),v("Nie\u010do sa pokazilo");case 19:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(){return t.apply(this,arguments)}})()()}),[w]),{response:u,isLoading:g,error:b,message:m,refetch:D}},l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(o.a)(r,2),l=u[0],s=u[1],d=Object(i.useState)(null),b=Object(o.a)(d,2),f=b[0],j=b[1],p=Object(i.useState)(!0),m=Object(o.a)(p,2),v=m[0],h=m[1],O=Object(i.useState)(0),g=Object(o.a)(O,2),x=g[0],y=g[1],k=function(){return y((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S=JSON.stringify(e),D={method:"POST",headers:w,body:S,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),D);case 6:return r=e.sent,e.next=9,r.json();case 9:a=e.sent,s(a),h(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),j(e.t0),h(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[x,n]),{response:l,isLoading:v,error:f,refetch:k}},s=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(o.a)(r,2),l=u[0],s=u[1],d=Object(i.useState)(null),b=Object(o.a)(d,2),f=b[0],j=b[1],p=Object(i.useState)(!0),m=Object(o.a)(p,2),v=m[0],h=m[1],O=Object(i.useState)(0),g=Object(o.a)(O,2),x=g[0],y=g[1],k=function(){return y((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S={method:"GET",headers:w,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var r=Object(a.a)(c.a.mark((function r(){var a,o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return h(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),S);case 6:return a=r.sent,r.next=9,a.json();case 9:o=r.sent,s(o),h(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),j(r.t0),h(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[x,n,e]),{response:l,isLoading:v,error:f,refetch:k}}},54:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(22);var c=t(33);function a(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(c.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},55:function(n,e,t){"use strict";var r=t(2),c=(t(1),t(51)),a=t(5),o=t(6),i=t(28),u=t(14);function l(){var n=Object(a.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return l=function(){return n},n}function s(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return s=function(){return n},n}function d(){var n=Object(a.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function b(){var n=Object(a.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return n},n}function f(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return f=function(){return n},n}function j(){var n=Object(a.a)(["\n    display: flex;\n    color: var(--primary-text-color);\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return j=function(){return n},n}var p=o.c.div(j(),u.e),m=o.c.div(f()),v=o.c.div(b()),h=(o.c.div(d()),Object(o.c)(i.a)(s())),O=Object(o.c)(i.a)(l());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,a=n.handleChange,o=n.title,i=(n.count,n.handleAddButton),u=void 0===i?function(){}:i;return Object(r.jsxs)(p,{children:[Object(r.jsx)(m,{children:Object(r.jsx)("h1",{children:o})}),Object(r.jsxs)(v,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{type:"search",name:"searchbox",value:e,handleChange:a,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(h,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(O,{onClick:u,children:"Prida\u0165"})]})]})}}}]);
//# sourceMappingURL=13.0582f76e.chunk.js.map