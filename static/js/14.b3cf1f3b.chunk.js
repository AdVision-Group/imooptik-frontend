(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[14,25],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"BookingContext",(function(){return x}));var r=t(2),a=t(7),c=t.n(a),o=t(12),i=t(32),s=t(21),l=t(10),u=t(1),d=t(18),b=t(19),p=t(3),h=function(e){return fetch("".concat("http://195.110.58.166:8080","/api/booking/calendars/").concat(e))},j=function(e){var n=new Headers;n.append("auth-token",e);var t={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/booking/userBookings"),t)},f=function(e,n){var t=new Headers;t.append("auth-token",e),t.append("Content-Type","application/json"),console.log(n);var r={method:"POST",headers:t,body:JSON.stringify(Object(s.a)({},n)),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/booking/calendars"),r)},m=function(e,n){var t=new Headers;t.append("auth-token",e),t.append("Content-Type","application/json"),console.log(n);var r=n.name,a=n.interval,c=n.startTimes,o=n.endTimes,i=n.daysIntoFuture,s=n.allowMinutesBefore,l={method:"PATCH",headers:t,body:JSON.stringify({name:r,interval:a,startTimes:c,endTimes:o,daysIntoFuture:i,allowMinutesBefore:s}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/booking/calendars/").concat(n._id),l)},v=function(e){return fetch("".concat("http://195.110.58.166:8080","/api/admin/booking/calendars/").concat(e),{method:"DELETE",redirect:"follow"})},g={name:"",interval:30,startTimes:["10/00","10/00","10/00","10/00","10/00","X","X"],endTimes:["16/00","16/00","18/00","16/00","16/00","X","X"],daysIntoFuture:60,premises:1,allowMinutesBefore:120,exceptDays:{"24/12/2020":"00/00-23/59"}},x=Object(u.createContext)({calendar:null,calendars:null,handleCalendarChange:function(){},handleDayTimeChange:function(){},getCalendars:function(){},getCalendar:function(){},createCalendar:function(){},updateCalendar:function(){},delCalendar:function(){},isUpdatingCalendar:!1,bookings:null,getBookings:function(){},userBookings:null,getUserBookings:function(){},activeCalendar:0,resetBooking:function(){},selectedDate:{name:"",value:""},setSelectedDate:function(){}});n.default=function(e){var n=e.children,t=Object(p.h)().push,a=Object(u.useContext)(b.a).token,O=Object(u.useContext)(d.a),k=O.getMessage,w=O.setIsLoading,C=O.setShowModal,y=O.closeModal,T=Object(u.useState)(!1),B=Object(l.a)(T,2),S=B[0],M=B[1],z=Object(u.useState)(0),N=Object(l.a)(z,2),D=N[0],H=N[1],I=Object(u.useState)(null),P=Object(l.a)(I,2),U=P[0],q=P[1],E=Object(u.useState)(g),F=Object(l.a)(E,2),J=F[0],X=F[1],K=Object(u.useState)({name:"",value:""}),L=Object(l.a)(K,2),A=L[0],G=L[1],V=function(){var e=Object(o.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/calendars"));case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(t=e.sent).error){e.next=13;break}return k(t.message),w(!1),e.abrupt("return");case 13:if(!t.calendars){e.next=18;break}return q(t.calendars),w(!1),y(),e.abrupt("return");case 18:k(t.message),w(!1),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 27:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(o.a)(c.a.mark((function e(n,t){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),G({name:"",value:""}),t||M(!0),e.prev=4,e.next=7,h(n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(a=e.sent,console.log(a),!a.calendar){e.next=17;break}return X(a.calendar),H(t),y(),e.abrupt("return");case 17:k(a.message),w(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(4),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 26:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(n,t){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(c.a.mark((function e(n){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),e.prev=2,e.next=5,f(a,n);case 5:return r=e.sent,e.next=8,r.json();case 8:if(!(o=e.sent).calendar){e.next=15;break}return w(!1),y(),V(),t("/dashboard/rezervacie"),e.abrupt("return");case 15:w(!1),k(o.message),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 24:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(o.a)(c.a.mark((function e(n){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),e.prev=2,e.next=5,m(a,n);case 5:return r=e.sent,e.next=8,r.json();case 8:if(o=e.sent,console.log(o),!o.calendar){e.next=16;break}return w(!1),y(),V(),t("/dashboard/rezervacie"),e.abrupt("return");case 16:w(!1),k(o.message),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 25:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(n){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),e.prev=2,e.next=5,v(n);case 5:return t=e.sent,e.next=8,t.json();case 8:r=e.sent,console.log(r),w(!1),k(r.message),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n){return e.apply(this,arguments)}}(),W=Object(u.useState)(null),Y=Object(l.a)(W,2),$=Y[0],ee=Y[1],ne=Object(u.useState)(null),te=Object(l.a)(ne,2),re=te[0],ae=te[1],ce=function(){var e=Object(o.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/bookings"));case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(t=e.sent).error){e.next=13;break}return k(t.message),w(!1),e.abrupt("return");case 13:t.bookings&&(ee(t.bookings),w(!1),y()),k(t.message),w(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(o.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),e.prev=2,e.next=5,j(a);case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(t=e.sent).userBookings){e.next=13;break}return ae(t.userBookings),y(),e.abrupt("return");case 13:k(t.message),w(!1),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(x.Provider,{value:{calendar:J,calendars:U,handleCalendarChange:function(e){var n=e.target,t=n.name,r=n.value;X(Object(s.a)(Object(s.a)({},J),{},Object(i.a)({},t,r)))},handleDayTimeChange:function(e,n){var t=e.target,r=t.name,a=t.value,c=J.startTimes;c[n]=a,X(Object(s.a)(Object(s.a)({},J),{},Object(i.a)({},r,c)))},getCalendars:V,getCalendar:Z,createCalendar:_,updateCalendar:Q,delCalendar:R,isUpdatingCalendar:S,bookings:$,getBookings:ce,userBookings:re,getUserBookings:oe,activeCalendar:D,resetBooking:function(){H(0),X(g),M(!1)},selectedDate:A,setSelectedDate:G},children:n})}},236:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(1),c=t(116),o=t(18),i=t(3),s=t(52),l=t(62),u=t(51),d=t(31),b=t(5),p=t(6),h=t(14),j=t(28);function f(){var e=Object(b.a)(["\n    h3 {\n        margin-bottom: 3rem;\n    }\n\n    h4 {\n        margin-bottom: 3.74rem;\n        font-weight: lighter;\n    }\n"]);return f=function(){return e},e}function m(){var e=Object(b.a)(["\n    --gap: 2rem;\n    display: flex;\n    flex-wrap: wrap;\n    margin: calc(-1 * var(--gap)) 2rem 2rem calc(-1 * var(--gap));\n    /* width: calc(100% + var(--gap)); */\n\n    & > * {\n        margin: var(--gap) 2rem 2rem var(--gap);\n    }\n    margin-top: 3rem;\n\n"]);return m=function(){return e},e}function v(){var e=Object(b.a)(["\n    background-color: var(--color-red);\n\n"]);return v=function(){return e},e}function g(){var e=Object(b.a)(["\n    margin-left: 1rem;\n"]);return g=function(){return e},e}function x(){var e=Object(b.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    display: flex;\n    justify-content: space-between;\n    color: var(--primary-text-color);\n"]);return x=function(){return e},e}var O=p.c.div(x(),h.e),k=Object(p.c)(j.a)(g()),w=Object(p.c)(j.a)(v()),C=p.c.div(m()),y=p.c.div(f());n.default=function(){var e=Object(i.i)().calendarId,n=Object(a.useContext)(c.BookingContext),t=n.isUpdatingCalendar,b=n.handleCalendarChange,p=n.handleDayTimeChange,h=n.getCalendar,j=n.createCalendar,f=n.updateCalendar,m=n.delCalendar,v=n.calendar,g=n.resetBooking,x=Object(a.useContext)(o.a),T=x.closeModal,B=x.isLoading,S=x.message,M=x.showModal;return Object(a.useEffect)((function(){"novy-kalendar"!==e&&h(e)}),[e]),Object(a.useEffect)((function(){return function(){g()}}),[]),!v||M?Object(r.jsx)(d.a,{loading:B,title:S,close:T}):(console.log(t),console.log(v),Object(r.jsx)("section",{children:Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),"novy-kalendar"===e?j(v):(console.log("update calendar"),f(v))},children:[Object(r.jsxs)(O,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:t?"Kalend\xe1r: ".concat(v.name):"Nov\xfd kalend\xe1r"})}),Object(r.jsxs)("div",{children:[t&&Object(r.jsx)(w,{onClick:function(){return m(e)},children:"Odstr\xe1ni\u0165"}),Object(r.jsx)(k,{children:t?"Upravi\u0165 kalend\xe1r":"Vytvori\u0165 kalend\xe1r"})]})]}),Object(r.jsxs)(s.a,{children:[Object(r.jsx)(l.a,{label:"Meno kalend\xe1ru",example:"",children:Object(r.jsx)(u.a,{label:"Pobo\u010dka*",type:"text",name:"name",value:v.name,handleChange:function(e){return b(e)},required:!0})}),Object(r.jsx)(l.a,{label:"Ko\u013eko dn\xed dopredu sa da objedna\u0165",example:"",children:Object(r.jsx)(u.a,{label:"Po\u010det dn\xed",type:"number",name:"daysIntoFuture",value:v.daysIntoFuture.toString(),handleChange:function(e){return b(e)},required:!0})}),Object(r.jsx)(l.a,{label:"Minimaln\xfd \u010das k odoslan\xed rezerv\xe1cie",example:"",children:Object(r.jsx)(u.a,{label:"Min",type:"number",name:"allowMinutesBefore",value:v.allowMinutesBefore.toString(),handleChange:function(e){return b(e)},required:!0})}),Object(r.jsx)(l.a,{label:"\u010cas medzi rezerv\xe1ciami",example:"",children:Object(r.jsx)(u.a,{label:"Min*",type:"number",name:"interval",value:v.interval.toString(),handleChange:function(e){return b(e)},required:!0})}),Object(r.jsxs)(C,{children:[Object(r.jsxs)(y,{children:[Object(r.jsx)("h3",{children:"Den"}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:"Pondelok"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:"Utorok"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:"Streda"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:"\u0160tvrtok"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:"Piatok"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:"Sobota"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:"Nede\u013ea"})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Za\u010diatok prehliadok"}),v.startTimes.map((function(e,n){return Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{label:"\u010cas: HH/MM*",type:"text",name:"startTimes",value:e,handleChange:function(e){return p(e,n)},required:!0})},n)}))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Koniec prehliadok"}),v.endTimes.map((function(e,n){return Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{label:"\u010cas: HH/MM*",type:"text",name:"endTimes",value:e,handleChange:function(e){return p(e,n)},required:!0})},n)}))]})]})]})]})}))}},51:function(e,n,t){"use strict";var r=t(2),a=t(21),c=t(30),o=(t(1),t(5)),i=t(6);function s(){var e=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return e},e}function l(){var e=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return l=function(){return e},e}var u=Object(i.b)(l()),d=i.c.div(s(),u,u);n.a=function(e){var n=e.handleChange,t=e.label,o=e.name,i=Object(c.a)(e,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:o,onChange:n},i)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},52:function(e,n,t){"use strict";var r=t(2),a=(t(1),t(5)),c=t(6),o=t(14);function i(){var e=Object(a.a)(["\n    /* max-width: 115rem; */\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return s=function(){return e},e}var l=c.c.div(s(),o.e),u=c.c.div(i());n.a=function(e){var n=e.children;return Object(r.jsx)(l,{children:Object(r.jsx)(u,{children:n})})}},62:function(e,n,t){"use strict";var r=t(21),a=t(2),c=t(30),o=(t(1),t(5));function i(){var e=Object(o.a)(["\n    display:flex;\n    align-items: center;\n\n    p {\n        margin-top: 1.8rem;\n        margin-left: 2rem;\n            opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n    @media all and (max-width: 800px) {\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n    }\n"]);return i=function(){return e},e}var s=t(6).c.div(i());n.a=function(e){var n=e.children,t=e.label,o=e.example,i=Object(c.a)(e,["children","label","example"]);return Object(a.jsxs)(s,Object(r.a)(Object(r.a)({},i),{},{children:[Object(a.jsx)("div",{children:n}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[t+" ",Object(a.jsx)("span",{children:o})]})})]}))}}}]);
//# sourceMappingURL=14.b3cf1f3b.chunk.js.map