(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[2],{16:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(1),a=t(10),o=t(0),c=Object(o.createContext)({isLoading:!1,showModal:!1,message:"",closeModal:function(){},getMessage:function(){},setIsLoading:function(){},setShowModal:function(){}});n.b=function(e){var n=e.children,t=Object(o.useState)(!1),i=Object(a.a)(t,2),s=i[0],u=i[1],l=Object(o.useState)(!1),d=Object(a.a)(l,2),f=d[0],p=d[1],b=Object(o.useState)(""),h=Object(a.a)(b,2),j=h[0],m=h[1];return Object(r.jsx)(c.Provider,{value:{isLoading:s,showModal:f,message:j,closeModal:function(){u(!1),p(!1),m("")},getMessage:function(e){m(e)},setIsLoading:u,setShowModal:p},children:n})}},17:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r=t(1),a=t(9),o=t.n(a),c=t(12),i=t(10),s=t(0),u=t(16),l=function(e){var n=e.email,t=e.password,r=new Headers;r.append("Content-Type","application/json");var a={method:"POST",headers:r,body:JSON.stringify({email:n,password:t}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/login"),a)},d=function(e){var n=e.name,t=e.email,r=e.password,a=new Headers;a.append("Content-Type","application/json");var o={method:"POST",headers:a,body:JSON.stringify({email:t,password:r,name:n}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),o)},f=function(e){var n=new Headers;n.append("Content-Type","application/json");var t={method:"POST",headers:n,body:JSON.stringify({email:e}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/forgot"),t)},p=function(e,n){var t=new Headers;t.append("Content-Type","application/json");var r={method:"POST",headers:t,body:JSON.stringify({resetSecret:e,password:n}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/reset"),r)},b=function(e){var n=new Headers;n.append("auth-token",e),n.append("Content-Type","application/json");var t={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/user/profile"),t)},h=Object(s.createContext)({currentUser:null,isAdmin:!1,token:null,logIn:function(){},logOut:function(){},register:function(){},handleResetPassword:function(){},handleCreatingNewPassword:function(){}});n.b=function(e){var n=e.children,t=Object(s.useContext)(u.a),a=t.setShowModal,j=t.setIsLoading,m=t.getMessage,g=t.closeModal,x=Object(s.useState)(null),O=Object(i.a)(x,2),v=O[0],w=O[1],k=Object(s.useState)(null),y=Object(i.a)(k,2),S=y[0],P=y[1],z=Object(s.useState)(!1),C=Object(i.a)(z,2),T=C[0],I=C[1],M=function(e){e.admin>1?I(!0):I(!1)},N=function(){var e=Object(c.a)(o.a.mark((function e(n,t){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(!0),j(!0),n){e.next=7;break}return console.log("Ziadny e-mail"),a(!1),j(!1),e.abrupt("return");case 7:if(t){e.next=12;break}return console.log("Ziadne heslo"),a(!1),j(!1),e.abrupt("return");case 12:return e.prev=12,e.next=15,l({email:n,password:t});case 15:return r=e.sent,e.next=18,r.json();case 18:c=e.sent,m(c.message),j(!1),c.user&&(w(c.user),P(c.authToken),localStorage.setItem("mptkthtkn",c.authToken),M(c.user),g()),e.next=29;break;case 24:e.prev=24,e.t0=e.catch(12),console.log(e.t0),m("Nieco sa pokazilo"),j(!1);case 29:case"end":return e.stop()}}),e,null,[[12,24]])})));return function(n,t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(c.a)(o.a.mark((function e(n,t,r,c){var i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(!0),j(!0),n){e.next=7;break}return console.log("Ziadne meno"),a(!1),j(!1),e.abrupt("return");case 7:if(t){e.next=12;break}return console.log("Ziadny e-mail"),a(!1),j(!1),e.abrupt("return");case 12:if(r){e.next=17;break}return console.log("Ziadne heslo"),a(!1),j(!1),e.abrupt("return");case 17:if(r===c){e.next=22;break}return console.log("hesla sa nezhoduju"),a(!1),j(!1),e.abrupt("return");case 22:return e.prev=22,e.next=25,d({name:n,email:t,password:r});case 25:return i=e.sent,e.next=28,i.json();case 28:s=e.sent,j(!1),m(s.message),e.next=38;break;case 33:e.prev=33,e.t0=e.catch(22),console.log(e.t0),m("Nieco sa pokazilo"),j(!1);case 38:case"end":return e.stop()}}),e,null,[[22,33]])})));return function(n,t,r,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(!0),j(!0),n){e.next=7;break}return console.log("Ziadny e-mail"),a(!1),j(!1),e.abrupt("return");case 7:return e.prev=7,e.next=10,f(n);case 10:return t=e.sent,e.next=13,t.json();case 13:r=e.sent,m(r.message),j(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(7),console.log(e.t0),m("Nieco sa pokazilo"),j(!1);case 23:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(n){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(o.a.mark((function e(n,t){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(!0),j(!0),console.log(n),n){e.next=8;break}return console.log("Ziadny reset token"),a(!1),j(!1),e.abrupt("return");case 8:if(t){e.next=13;break}return console.log("Ziadne heslo"),a(!1),j(!1),e.abrupt("return");case 13:return e.prev=13,e.next=16,p(n,t);case 16:return r=e.sent,e.next=19,r.json();case 19:c=e.sent,m(c.message),j(!1),e.next=29;break;case 24:e.prev=24,e.t0=e.catch(13),console.log(e.t0),m("Nieco sa pokazilo"),j(!1);case 29:case"end":return e.stop()}}),e,null,[[13,24]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){localStorage.getItem("mptkthtkn")&&P(localStorage.getItem("mptkthtkn"))}),[]),Object(s.useEffect)((function(){S&&function(){var e=Object(c.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(S);case 2:return n=e.sent,e.next=5,n.json();case 5:(t=e.sent).user&&(w(t.user),M(t.user));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[S]),Object(r.jsx)(h.Provider,{value:{token:S,currentUser:v,isAdmin:T,logIn:N,logOut:function(){localStorage.removeItem("mptkthtkn"),w(null),P(null)},register:Z,handleResetPassword:E,handleCreatingNewPassword:L},children:n})}},26:function(e,n,t){"use strict";var r=t(19),a=t(1),o=t(28),c=(t(0),t(7));function i(){var e=Object(c.a)(["\n    cursor: pointer;\n    background-color: #000;\n    color: #fff;\n    padding: .8rem 3rem;\n    font-size: inherit;\n    font-family: inherit;\n    border-radius: .2rem;\n    border: none;\n    outline: none;\n\n    &:focus {\n        outline: none\n    }\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return i=function(){return e},e}var s=t(8).c.button(i());n.a=function(e){var n=e.children,t=Object(o.a)(e,["children"]);return Object(a.jsx)(s,Object(r.a)(Object(r.a)({},t),{},{children:n}))}},27:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return s}));var r=t(7),a=t(8);function o(){var e=Object(r.a)(["\n    padding: 0 3rem;\n\n    @media all and (max-width: 800px) {\n        padding: 0 2rem;\n        @media all and (max-width: 500px) {\n            padding: 0 1.5rem;\n        }\n    }\n"]);return o=function(){return e},e}function c(){var e=Object(r.a)(["\n    *, *::before, *::after {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n        font-family: 'Titillium Web', sans-serif;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        font-size: 1.6rem;\n        overflow: hidden;\n    }\n\n    section, form {\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n    }\n\n"]);return c=function(){return e},e}var i=Object(a.a)(c()),s=Object(a.b)(o())},30:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(1),a=(t(0),t(18)),o=t.n(a),c=t(26),i=t(7),s=t(8);function u(){var e=Object(i.a)(["\n    border: 5px solid transparent;\n    border-top: 5px solid rgb(256,172,1);\n    border-radius: 50%;\n    width: 38px;\n    height: 38px;\n    animation: spin 800ms linear infinite;\n\n    @keyframes spin {\n        0% { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n    }\n"]);return u=function(){return e},e}var l=s.c.div(u()),d=function(){return Object(r.jsx)(l,{})};function f(){var e=Object(i.a)(["\n    color: #383838;\n    font-size: 2.1rem;\n    font-weight: 700;\n    text-align: center;\n\n    margin-bottom: 2rem;\n"]);return f=function(){return e},e}function p(){var e=Object(i.a)(["\n    max-width: 50rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 2rem;\n\n    border-radius: .5rem;\n\n    background-color: white;\n"]);return p=function(){return e},e}function b(){var e=Object(i.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 999999;\n    min-height: 100vh;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return b=function(){return e},e}var h=s.c.div(b()),j=s.c.div(p()),m=s.c.div(f());function g(e){var n=e.loading,t=e.title,a=e.close;return o.a.createPortal(Object(r.jsx)(h,{children:n?Object(r.jsx)(j,{children:Object(r.jsx)(d,{})}):Object(r.jsxs)(j,{children:[Object(r.jsx)(m,{children:t}),Object(r.jsx)(c.a,{onClick:a,children:"Zavrie\u0165"})]})}),document.getElementById("portal"))}},48:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),o=t.n(a),c=t(18),i=t.n(c),s=t(17),u=t(27),l=t(29),d=t(2),f=t(30),p=Object(a.lazy)((function(){return t.e(18).then(t.bind(null,218))})),b=Object(a.lazy)((function(){return Promise.all([t.e(20),t.e(24)]).then(t.bind(null,221))})),h=Object(a.lazy)((function(){return t.e(17).then(t.bind(null,226))})),j=function(){console.log("RENDER APP");var e=Object(a.useContext)(s.a).currentUser;return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(f.a,{loading:!0}),children:Object(r.jsx)(l.a,{basename:"/",children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/prihlasenie",render:function(){return e?Object(r.jsx)(d.a,{to:"/dashboard"}):Object(r.jsx)(p,{})}}),Object(r.jsx)(d.b,{path:"/dashboard",render:function(){return e?Object(r.jsx)(b,{}):Object(r.jsx)(d.a,{to:"/prihlasenie"})}}),Object(r.jsx)(d.b,{path:"/reset/:token",component:h}),e?Object(r.jsx)(d.a,{to:"/dashboard/obchod"}):Object(r.jsx)(d.a,{to:"/prihlasenie"})]})})})]})},m=function(e){e&&e instanceof Function&&t.e(27).then(t.bind(null,216)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),o(e),c(e)}))},g=t(16);i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(g.b,{children:Object(r.jsx)(s.b,{children:Object(r.jsx)(j,{})})})}),document.getElementById("root")),m()}},[[48,3,5]]]);
//# sourceMappingURL=main.48a5d3e7.chunk.js.map