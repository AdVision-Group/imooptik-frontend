(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[14,22],{113:function(n,e,t){"use strict";t.r(e),t.d(e,"BookingContext",(function(){return j}));var r=t(1),c=t(9),a=t.n(c),i=t(12),o=t(10),s=t(0),u=t(17),l=t(16),d=function(n){return fetch("".concat("http://195.110.58.166:8080","/api/booking/calendars/").concat(n))},b=function(n){var e=new Headers;e.append("auth-token",n);var t={method:"GET",headers:e,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/booking/userBookings"),t)},j=Object(s.createContext)({calendar:null,calendars:null,getCalendars:function(){},getCalendar:function(){},bookings:null,getBookings:function(){},userBookings:null,getUserBookings:function(){},activeCalendar:0,resetBooking:function(){},selectedDate:"",setSelectedDate:function(){}});e.default=function(n){var e=n.children,t=Object(s.useContext)(l.a).token,c=Object(s.useContext)(u.a),f=c.getMessage,m=c.setIsLoading,h=c.setShowModal,g=c.closeModal,p=Object(s.useState)(0),O=Object(o.a)(p,2),v=O[0],x=O[1],k=Object(s.useState)(null),w=Object(o.a)(k,2),y=w[0],C=w[1],z=Object(s.useState)(null),B=Object(o.a)(z,2),S=B[0],D=B[1],N=Object(s.useState)(""),M=Object(o.a)(N,2),P=M[0],A=M[1],K=function(){var n=Object(i.a)(a.a.mark((function n(){var e,t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),h(!0),n.prev=2,n.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/calendars"));case 5:return e=n.sent,n.next=8,e.json();case 8:if(!(t=n.sent).error){n.next=13;break}return f(t.message),m(!1),n.abrupt("return");case 13:t.calendars&&(C(t.calendars),m(!1),g()),f(t.message),m(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(2),console.log(n.t0),f("Nieco sa pokazilo"),m(!1);case 23:case"end":return n.stop()}}),n,null,[[2,18]])})));return function(){return n.apply(this,arguments)}}(),U=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),h(!0),n.prev=2,n.next=5,d(e);case 5:return r=n.sent,n.next=8,r.json();case 8:if(c=n.sent,console.log(c),!c.calendar){n.next=15;break}return D(c.calendar),x(t),g(),n.abrupt("return");case 15:f(c.message),m(!1),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(2),console.log(n.t0),f("Nieco sa pokazilo"),m(!1);case 24:case"end":return n.stop()}}),n,null,[[2,19]])})));return function(e,t){return n.apply(this,arguments)}}(),F=Object(s.useState)(null),L=Object(o.a)(F,2),V=L[0],E=L[1],J=Object(s.useState)(null),Q=Object(o.a)(J,2),G=Q[0],H=Q[1],I=function(){var n=Object(i.a)(a.a.mark((function n(){var e,t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),h(!0),n.prev=2,n.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/bookings"));case 5:return e=n.sent,n.next=8,e.json();case 8:if(!(t=n.sent).error){n.next=13;break}return f(t.message),m(!1),n.abrupt("return");case 13:t.bookings&&(E(t.bookings),m(!1),g()),f(t.message),m(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(2),console.log(n.t0),f("Nieco sa pokazilo"),m(!1);case 23:case"end":return n.stop()}}),n,null,[[2,18]])})));return function(){return n.apply(this,arguments)}}(),T=function(){var n=Object(i.a)(a.a.mark((function n(){var e,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),h(!0),n.prev=2,n.next=5,b(t);case 5:return e=n.sent,n.next=8,e.json();case 8:if(!(r=n.sent).userBookings){n.next=13;break}return H(r.userBookings),g(),n.abrupt("return");case 13:f(r.message),m(!1),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(2),console.log(n.t0),f("Nieco sa pokazilo"),m(!1);case 22:case"end":return n.stop()}}),n,null,[[2,17]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsx)(j.Provider,{value:{calendar:S,calendars:y,getCalendars:K,getCalendar:U,bookings:V,getBookings:I,userBookings:G,getUserBookings:T,activeCalendar:v,resetBooking:function(){x(0)},selectedDate:P,setSelectedDate:A},children:e})}},221:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(10),a=t(0),i=t(17),o=t(113),s=t(55),u=t(50),l=t(30),d=t(7),b=t(8),j=t(26);function f(){var n=Object(d.a)(["\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    display: block;\n    margin-left: 2rem;;\n"]);return f=function(){return n},n}function m(){var n=Object(d.a)(["\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    display: block;\n    background-color: ",";\n    font-weight: bolder;\n    color: ",";\n"]);return m=function(){return n},n}function h(){var n=Object(d.a)(["\n    display: flex;\n"]);return h=function(){return n},n}function g(){var n=Object(d.a)(["\n    padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n\n    &:not(:last-child) {\n        /* margin-right: 2rem; */\n    }\n\n    h3  { \n        font-size: 1.8rem;\n    }\n\n    p {\n        font-size: 1.4rem;\n        color: gray;\n    }\n"]);return g=function(){return n},n}var p=b.c.div(g()),O=b.c.div(h()),v=Object(b.c)(j.a)(m(),(function(n){return n.isActive?"rgb(235, 172, 1)":"#eee"}),(function(n){return n.isActive?"#fff":"#000"})),x=Object(b.c)(j.a)(f()),k=function(n){var e=n.calendar,t=n.handleClick,c=n.isActive;return Object(r.jsxs)(p,{children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsx)("p",{children:"Obchodn\xe1 59, 84105 Bratislava"}),Object(r.jsx)("p",{children:"+421 902 688 952"}),Object(r.jsx)("p",{children:"obchodna@imooptik.sk"}),Object(r.jsxs)(O,{children:[Object(r.jsx)(v,{onClick:t,isActive:c,children:"Zobrazi\u0165"}),Object(r.jsx)(x,{children:"Upravi\u0165"})]})]})},w=t(19);function y(){var n=Object(d.a)(["\n    margin-left: auto\n"]);return y=function(){return n},n}function C(){var n=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    border-radius: 50%;\n    font-weight: bolder;\n    padding: .2rem .9rem;\n"]);return C=function(){return n},n}function z(){var n=Object(d.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n"]);return z=function(){return n},n}function B(){var n=Object(d.a)(["\n    cursor: pointer;\n    height: 7rem;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    border: 1px solid rgba(0,0,0,.1);\n    padding: .6rem 1rem;\n\n    transition: all .15s;\n\n    &:hover {\n        background-color: rgba(0,0,0,.1);\n    }\n\n"]);return B=function(){return n},n}function S(){var n=Object(d.a)(["\n    height: 8rem;\n    background-color: #000;\n    color: #fff;\n    display: flex;\n    align-items:center;\n    justify-content:center;\n    font-weight: 700;\n"]);return S=function(){return n},n}function D(){var n=Object(d.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border: 1px solid rgba(0,0,0,.1);\n    min-width: 55rem;\n"]);return D=function(){return n},n}var N=b.c.div(D()),M=b.c.div(S()),P=b.c.div(B()),A=b.c.div(z()),K=b.c.p(C(),(function(n){return n.active?" rgb(235, 172, 1)":"#eee"}),(function(n){return n.active?"#fff":"#000"})),U=b.c.p(y()),F=function(n){var e=n.calendar,t=n.setSelectedDate,i=Object(a.useState)(null),o=Object(c.a)(i,2),s=o[0],u=o[1],l=new Date,d=l.getFullYear(),b=l.getMonth(),j=new Date(d,b).getDay(),f=new Date(d,b+1,0).getDate();0===j&&(j=7);for(var m=[],h=1,g=Object.keys(e.booked),p=0;p<42;p++)p<j-1?m.push({day:0}):p<f+j-1&&function(){var n={},e=1;g.forEach((function(t){h!==Number(t.split("/")[0])||(n={booked:e++})})),m.push(Object(w.a)(Object(w.a)({},n),{},{day:h++}))}();return Object(r.jsxs)(N,{children:[[{name:"Pondelok"},{name:"Utorok"},{name:"Streda"},{name:"\u0160tvrtok"},{name:"Piatok"},{name:"Sobota"},{name:"Nede\u013ea"}].map((function(n,e){var t=n.name;return Object(r.jsx)(M,{children:t},e)})),m.map((function(n,e){var c=n.day,a=n.booked;return Object(r.jsx)(P,{onClick:a?function(){return function(n,e){var r=new Date(d,b,n),c={weekday:"long",month:"long",day:"numeric"};console.log(r.toLocaleDateString("sk-SK",c)),u(e),t(r.toLocaleDateString("sk-SK",c))}(c,e)}:null,children:!(0===c)&&Object(r.jsxs)(A,{children:[a&&Object(r.jsx)(K,{active:e===s,children:a}),Object(r.jsx)(U,{children:c})]})},e)}))]})};function L(){var n=Object(d.a)(["\n    margin-bottom: 1rem;\n"]);return L=function(){return n},n}function V(){var n=Object(d.a)(["\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    padding: .2rem .8rem;\n    border-radius: .5rem;\n"]);return V=function(){return n},n}function E(){var n=Object(d.a)(["\n    font-size: 1.2rem;\n    margin-right: .5rem;\n    padding: .2rem .8rem;\n    border-radius: .5rem;\n"]);return E=function(){return n},n}function J(){var n=Object(d.a)(["\n    align-self: end;\n"]);return J=function(){return n},n}function Q(){var n=Object(d.a)(["\n    color: gray;\n    font-size: 1.2rem;\n"]);return Q=function(){return n},n}function G(){var n=Object(d.a)(["\n    font-size: 1.4rem;\n    font-weight: 700;\n    line-height: 1;\n    margin-top: .5rem;\n"]);return G=function(){return n},n}function H(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n"]);return H=function(){return n},n}function I(){var n=Object(d.a)(["\n    height: 1px;\n    background-color: #eee;\n    width: 100%;\n    margin: .5rem 0;\n"]);return I=function(){return n},n}function T(){var n=Object(d.a)(["\n    font-size: 1.4rem;\n    font-weight: 700;\n"]);return T=function(){return n},n}function Y(){var n=Object(d.a)(["\n    margin-left: 2rem;  \n    padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    align-self: start;\n"]);return Y=function(){return n},n}function Z(){var n=Object(d.a)(["\n    margin-top: 3rem;\n    display: grid;\n    grid-template-columns: 4fr 2fr;\n"]);return Z=function(){return n},n}function _(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: repeat( auto-fit, minmax(25rem, 1fr) );\n    margin-bottom: 3rem;\n    grid-gap: 2rem;\n"]);return _=function(){return n},n}function q(){var n=Object(d.a)(["\n    margin-bottom: 2rem;\n"]);return q=function(){return n},n}var R=b.c.h2(q()),W=b.c.div(_()),X=b.c.div(Z()),$=b.c.div(Y()),nn=b.c.p(T()),en=b.c.div(I()),tn=b.c.div(H()),rn=b.c.p(G()),cn=b.c.span(Q()),an=b.c.div(J()),on=Object(b.c)(j.a)(E()),sn=Object(b.c)(j.a)(V()),un=b.c.div(L());e.default=function(){var n=Object(a.useContext)(i.a),e=n.closeModal,t=n.isLoading,d=n.message,b=n.showModal,j=Object(a.useContext)(o.BookingContext),f=j.calendar,m=j.calendars,h=j.getCalendars,g=j.getCalendar,p=j.userBookings,O=j.getUserBookings,v=j.activeCalendar,x=j.selectedDate,w=j.setSelectedDate,y=Object(a.useState)(""),C=Object(c.a)(y,2),z=C[0],B=C[1];return Object(a.useEffect)((function(){m||(h(),O())}),[m]),m?(console.log(p),Object(r.jsxs)("section",{children:[b&&Object(r.jsx)(l.a,{loading:t,title:d,close:e}),Object(r.jsx)(s.a,{searchQuery:z,handleChange:function(n){return B(n.target.value)},title:"Kalendar objedn\xe1vok"}),Object(r.jsxs)(u.a,{children:[Object(r.jsx)(R,{children:"Pobo\u010dky"}),Object(r.jsx)(W,{children:m.map((function(n,e){return Object(r.jsx)(k,{calendar:n,handleClick:function(){return g(n._id,e+1)},isActive:v===e+1},e)}))}),Object(r.jsx)(R,{children:"Kalend\xe1r"}),Object(r.jsxs)(X,{children:[f&&Object(r.jsx)(F,{calendar:f,setSelectedDate:w}),f&&x&&Object(r.jsxs)($,{children:[Object(r.jsx)(R,{children:x.charAt(0).toUpperCase()+x.slice(1)}),Object(r.jsxs)(un,{children:[Object(r.jsx)(nn,{children:"12:00"}),Object(r.jsx)(en,{}),Object(r.jsxs)(tn,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(rn,{children:"Meno Priezvisko"}),Object(r.jsx)(cn,{children:"Kontrola o\u010d\xed"})]}),Object(r.jsxs)(an,{children:[Object(r.jsx)(on,{children:"Vybaven\xfd"}),Object(r.jsx)(sn,{children:"Nepri\u0161iel"})]})]})]}),Object(r.jsxs)(un,{children:[Object(r.jsx)(nn,{children:"12:00"}),Object(r.jsx)(en,{}),Object(r.jsxs)(tn,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(rn,{children:"Meno Priezvisko"}),Object(r.jsx)(cn,{children:"Kontrola o\u010d\xed"})]}),Object(r.jsxs)(an,{children:[Object(r.jsx)(on,{children:"Vybaven\xfd"}),Object(r.jsx)(sn,{children:"Nepri\u0161iel"})]})]})]}),Object(r.jsxs)(un,{children:[Object(r.jsx)(nn,{children:"12:00"}),Object(r.jsx)(en,{}),Object(r.jsxs)(tn,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(rn,{children:"Meno Priezvisko"}),Object(r.jsx)(cn,{children:"Kontrola o\u010d\xed"})]}),Object(r.jsxs)(an,{children:[Object(r.jsx)(on,{children:"Vybaven\xfd"}),Object(r.jsx)(sn,{children:"Nepri\u0161iel"})]})]})]})]})]})]})]})):Object(r.jsx)(l.a,{loading:t,title:d,close:e})}},49:function(n,e,t){"use strict";var r=t(1),c=t(19),a=t(29),i=(t(0),t(7)),o=t(8);function s(){var n=Object(i.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return n},n}function u(){var n=Object(i.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return n},n}var l=Object(o.b)(u()),d=o.c.div(s(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,i=n.name,o=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(c.a)({className:"form-input",name:i,onChange:e},o)),t?Object(r.jsx)("label",{htmlFor:i,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},50:function(n,e,t){"use strict";var r=t(1),c=(t(0),t(7)),a=t(8),i=t(27);function o(){var n=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return o=function(){return n},n}var s=a.c.div(o(),i.b);e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:e})}},55:function(n,e,t){"use strict";var r=t(1),c=(t(0),t(49)),a=t(7),i=t(8),o=t(26),s=t(27);function u(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 1rem;\n\n"]);return u=function(){return n},n}function l(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function b(){var n=Object(a.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return n},n}function j(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return j=function(){return n},n}function f(){var n=Object(a.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return f=function(){return n},n}var m=i.c.div(f(),s.b),h=i.c.div(j()),g=i.c.div(b()),p=(i.c.div(d()),Object(i.c)(o.a)(l()),Object(i.c)(o.a)(u()));e.a=function(n){var e=n.searchQuery,t=n.handleChange,a=n.title,i=(n.count,n.handleAddButton),o=void 0===i?function(){}:i;return Object(r.jsxs)(m,{children:[Object(r.jsx)(h,{children:Object(r.jsx)("h1",{children:a})}),Object(r.jsxs)(g,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{type:"search",name:"searchbox",value:e,handleChange:t,label:"Vyh\u013eada\u0165"})}),Object(r.jsx)(p,{onClick:o,children:"Prida\u0165"})]})]})}}}]);
//# sourceMappingURL=14.4bbcef7e.chunk.js.map