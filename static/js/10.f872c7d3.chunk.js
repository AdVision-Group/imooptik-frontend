(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[10,26],{243:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(10),c=t(1),o=t(86),i=t(3),u=t(19),s=t(59),l=t(60),d=t(54),f=t(32),b=t(65),p=t(53),m=t(5),j=t(6),h=t(28);function v(){var n=Object(m.a)(["\n    font-size: 1.4rem;\n    background-color: rgb(235, 172, 1);\n"]);return v=function(){return n},n}function O(){var n=Object(m.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n"]);return O=function(){return n},n}function g(){var n=Object(m.a)(["\n    align-self: end;\n    justify-self: end;\n"]);return g=function(){return n},n}function x(){var n=Object(m.a)(["\n    h2 {\n        font-size: 1.6rem;\n    }\n\n    p {\n        font-size: 1.4rem;\n        color: gray;\n    }\n\n        @media all and (max-width: 500px) {\n            margin-bottom: 2rem;\n        }\n"]);return x=function(){return n},n}function k(){var n=Object(m.a)(["\n    height: 15rem;\n    /* width: 100%; */\n    /* height: 100%; */\n    margin-right: 2rem;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-position: center;\n        object-fit: cover;\n    }\n\n        @media all and (max-width: 800px) {\n        align-self: start;\n        grid-row-start: 1;\n        grid-row-end: 3;   \n\n        @media all and (max-width: 500px) {\n            justify-self: center;\n            margin-bottom: 2rem;\n        }\n\n    }\n"]);return k=function(){return n},n}function y(){var n=Object(m.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr 25rem;\n\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n        @media all and (max-width: 800px) {\n        grid-template-columns : 20rem 1fr;\n        grid-template-rows: 1fr 1fr;\n\n        @media all and (max-width: 500px) {\n            grid-template-columns : 1fr;\n            grid-template-rows: unset;\n        }\n    }\n"]);return y=function(){return n},n}var w=j.c.div(y()),S=j.c.div(k()),C=j.c.div(x()),P=j.c.div(g()),z=Object(j.c)(h.a)(O()),E=Object(j.c)(h.a)(v());e.default=function(){var n=Object(c.useContext)(u.a),e=n.closeModal,t=n.isLoading,m=n.message,j=n.showModal,h=Object(c.useContext)(o.BlogContext),v=h.postsCount,O=h.handlePostDelete,g=Object(i.h)().push,x=Object(c.useState)([]),k=Object(a.a)(x,2),y=k[0],B=k[1],T=Object(c.useState)({limit:10,sortBy:{date:-1}}),I=Object(a.a)(T,2),N=I[0],H=I[1],L=Object(c.useState)(""),A=Object(a.a)(L,2),J=A[0],D=A[1],M=Object(c.useState)(0),V=Object(a.a)(M,2),U=V[0],_=V[1],G=Object(p.c)("api/blogs/filter",N);return Object(c.useEffect)((function(){""===J&&(H({limit:10,sortBy:{date:-1}}),G.refetch())}),[J]),Object(c.useEffect)((function(){0===U?(H({limit:10,sortBy:{date:-1}}),G.refetch()):(H({limit:10,sortBy:{date:1}}),G.refetch())}),[U]),Object(c.useEffect)((function(){var n;G.isLoading||B(null===(n=G.response)||void 0===n?void 0:n.blogs)}),[G.isLoading]),Object(c.useEffect)((function(){return function(){e(),D(""),_(0),B([]),H({limit:10,sortBy:{date:-1}})}}),[]),Object(r.jsxs)("section",{children:[j&&Object(r.jsx)(f.a,{loading:t,title:m,close:e}),Object(r.jsx)(s.a,{searchQuery:J,handleChange:function(n){return D(n.target.value)},handleSearch:function(){""!==J&&(H({limit:10,sortBy:{date:-1},query:J}),G.refetch())},handleAddButton:function(){return g("blog/novy-prispevok")},count:v,title:"Blog"}),Object(r.jsx)(l.a,{items:[{id:0,name:"Zostupne"},{id:1,name:"Vzostupne"}],activeIndex:U,setActiveIndex:_}),Object(r.jsxs)(d.a,{children:[y&&y.length?y.map((function(n){return Object(r.jsxs)(w,{children:[Object(r.jsx)(S,{children:n.image&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(n.image.imagePath),alt:n.image.alt})}),Object(r.jsxs)(C,{children:[Object(r.jsx)("h2",{children:n.name}),Object(r.jsx)("p",{children:n.description})]}),Object(r.jsxs)(P,{children:[Object(r.jsx)(z,{onClick:function(){return g("blog/".concat(n._id))},children:"Upravi\u0165"}),Object(r.jsx)(E,{onClick:function(){return e=n._id,O(e),void G.refetch();var e},children:"Vymaza\u0165"})]})]},n._id)})):Object(r.jsx)("div",{children:"\u017diadne pr\xedspevky"}),Object(r.jsx)(b.a,{listItems:y})]})]})}},52:function(n,e,t){"use strict";var r=t(2),a=t(21),c=t(30),o=(t(1),t(5)),i=t(6);function u(){var n=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var l=Object(i.b)(s()),d=i.c.div(u(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,o=n.name,i=Object(c.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:o,onChange:e},i)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return s})),t.d(e,"b",(function(){return l}));var r=t(7),a=t.n(r),c=t(12),o=t(10),i=t(1),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=Object(i.useState)(null),u=Object(o.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),f=Object(o.a)(d,2),b=f[0],p=f[1],m=Object(i.useState)(null),j=Object(o.a)(m,2),h=j[0],v=j[1],O=Object(i.useState)(!0),g=Object(o.a)(O,2),x=g[0],k=g[1],y=Object(i.useState)(0),w=Object(o.a)(y,2),S=w[0],C=w[1],P=function(){return C((function(n){return n+1}))},z={method:t,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var t=Object(c.a)(a.a.mark((function t(){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return k(!0),t.prev=3,t.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),z);case 6:return r=t.sent,t.next=9,r.json();case 9:c=t.sent,v(c.message),l(c),k(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),p(t.t0),k(!1),v("Nie\u010do sa pokazilo");case 20:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}})()()}),[S]),{response:s,isLoading:x,error:b,message:h,refetch:P}},s=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(o.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),f=Object(o.a)(d,2),b=f[0],p=f[1],m=Object(i.useState)(!0),j=Object(o.a)(m,2),h=j[0],v=j[1],O=Object(i.useState)(0),g=Object(o.a)(O,2),x=g[0],k=g[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S=JSON.stringify(e),C={method:"POST",headers:w,body:S,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return v(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),C);case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,l(c),v(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),p(e.t0),v(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[x,n]),{response:s,isLoading:h,error:b,refetch:y}},l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(o.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),f=Object(o.a)(d,2),b=f[0],p=f[1],m=Object(i.useState)(!0),j=Object(o.a)(m,2),h=j[0],v=j[1],O=Object(i.useState)(0),g=Object(o.a)(O,2),x=g[0],k=g[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var S={method:"GET",headers:w,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var r=Object(c.a)(a.a.mark((function r(){var c,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return v(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),S);case 6:return c=r.sent,r.next=9,c.json();case 9:o=r.sent,l(o),v(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),p(r.t0),v(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[x,n,e]),{response:s,isLoading:h,error:b,refetch:y}}},54:function(n,e,t){"use strict";var r=t(2),a=(t(1),t(5)),c=t(6),o=t(14);function i(){var n=Object(a.a)(["\n    /* max-width: 115rem; */\n"]);return i=function(){return n},n}function u(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return u=function(){return n},n}var s=c.c.div(u(),o.e),l=c.c.div(i());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(l,{children:e})})}},59:function(n,e,t){"use strict";var r=t(2),a=(t(1),t(52)),c=t(5),o=t(6),i=t(28),u=t(14);function s(){var n=Object(c.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return s=function(){return n},n}function l(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(c.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function f(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return n},n}function b(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return b=function(){return n},n}function p(){var n=Object(c.a)(["\n    display: flex;\n    color: var(--primary-text-color);\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return p=function(){return n},n}var m=o.c.div(p(),u.e),j=o.c.div(b()),h=o.c.div(f()),v=(o.c.div(d()),Object(o.c)(i.a)(l())),O=Object(o.c)(i.a)(s());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,c=n.handleChange,o=n.title,i=(n.count,n.handleAddButton),u=void 0===i?function(){}:i;return Object(r.jsxs)(m,{children:[Object(r.jsx)(j,{children:Object(r.jsx)("h1",{children:o})}),Object(r.jsxs)(h,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{type:"search",name:"searchbox",value:e,handleChange:c,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(v,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(O,{onClick:u,children:"Prida\u0165"})]})]})}},60:function(n,e,t){"use strict";var r=t(21),a=t(2),c=t(30),o=(t(1),t(5)),i=t(6),u=t(28),s=t(14);function l(){var n=Object(o.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return l=function(){return n},n}function d(){var n=Object(o.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return d=function(){return n},n}var f=i.c.div(d(),s.e),b=Object(i.c)(u.a)(l(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,o=n.setActiveIndex,i=Object(c.a)(n,["items","activeIndex","setActiveIndex"]);return Object(a.jsx)(f,Object(r.a)(Object(r.a)({},i),{},{children:Object(a.jsx)("ul",{children:e.map((function(n){return Object(a.jsx)("li",{children:Object(a.jsx)(b,{active:n.id===t,onClick:function(){return o(n.id)},children:n.name})},n.id)}))})}))}},65:function(n,e,t){"use strict";var r=t(2),a=t(10),c=t(1),o=t(57),i=t(5),u=t(6);function s(){var n=Object(i.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return s=function(){return n},n}function l(){var n=Object(i.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return l=function(){return n},n}var d=u.c.div(l()),f=u.c.button(s());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,i=n.handleClickPrev,u=void 0===i?function(){}:i,s=n.handleClickNext,l=void 0===s?function(){}:s,b=Object(c.useState)(!0),p=Object(a.a)(b,2),m=p[0],j=p[1],h=Object(c.useState)(!0),v=Object(a.a)(h,2),O=v[0],g=v[1],x=Object(c.useState)(0),k=Object(a.a)(x,2),y=k[0],w=k[1];Object(c.useEffect)((function(){j(0===y)}),[t]),Object(c.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?g(!0):g(!1)}),[t]),Object(c.useEffect)((function(){0!==y&&w((function(n){return n--}))}),[u]),Object(c.useEffect)((function(){w((function(n){return n++}))}),[l]);return Object(r.jsxs)(d,{children:[Object(r.jsx)(f,{disabled:m,onClick:function(){u(),0!==y&&w((function(n){return n-1}))},children:Object(r.jsx)(o.b,{})}),Object(r.jsx)(f,{disabled:O,onClick:function(){l(),w((function(n){return n+1}))},children:Object(r.jsx)(o.c,{})})]})}},86:function(n,e,t){"use strict";t.r(e),t.d(e,"BlogContext",(function(){return m}));var r=t(2),a=t(7),c=t.n(a),o=t(12),i=t(10),u=t(1),s=t(18),l=t(19),d=function(n){return fetch("".concat("http://195.110.58.166:8080","/api/blogs/").concat(n))},f=function(n,e,t,r,a,c){var o=new Headers;o.append("auth-token",n),o.append("Content-Type","application/json");var i={method:"POST",headers:o,body:JSON.stringify({name:e,description:t,draft:r,html:a,image:c}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs"),i)},b=function(n,e,t,r,a,c,o){var i=new Headers;i.append("auth-token",n),i.append("Content-Type","application/json");var u={method:"PATCH",headers:i,body:JSON.stringify({name:e,description:t,draft:r,html:a,image:c}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs/").concat(o),u)},p=function(n,e){var t=new Headers;t.append("auth-token",n),t.append("Content-Type","application/json");var r={method:"DELETE",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs/").concat(e),r)},m=Object(u.createContext)({posts:null,post:null,postsCount:0,getPosts:function(){},createPost:function(){},getPost:function(){},handlePostUpdate:function(){},handlePostDelete:function(){},resetBlog:function(){}});e.default=function(n){var e=n.children,t=Object(u.useContext)(s.a).token,a=Object(u.useContext)(l.a),j=a.getMessage,h=a.setIsLoading,v=a.setShowModal,O=Object(u.useState)(null),g=Object(i.a)(O,2),x=g[0],k=g[1],y=Object(u.useState)(null),w=Object(i.a)(y,2),S=w[0],C=w[1],P=Object(u.useState)(0),z=Object(i.a)(P,2),E=z[0],B=z[1],T=function(){var n=Object(o.a)(c.a.mark((function n(){var e,t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),h(!0),n.next=4,fetch("".concat("http://195.110.58.166:8080","/api/blogs"));case 4:return e=n.sent,n.next=7,e.json();case 7:t=n.sent,k(t.blogs),B(t.count),v(!1),h(!1);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),I=function(){var n=Object(o.a)(c.a.mark((function n(e){var t,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),h(!0),n.prev=2,n.next=5,d(e);case 5:return t=n.sent,n.next=8,t.json();case 8:if(r=n.sent,console.log(r),!r.blog){n.next=15;break}return C(r.blog),h(!1),j(r.message),n.abrupt("return");case 15:h(!1),j(r.message),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(2),console.log(n.t0),j("Nieco sa pokazilo"),h(!1);case 24:v(!1),h(!1);case 26:case"end":return n.stop()}}),n,null,[[2,19]])})));return function(e){return n.apply(this,arguments)}}(),N=function(){var n=Object(o.a)(c.a.mark((function n(e,r,a,o,i){var u,s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),h(!0),n.prev=2,n.next=5,f(t,r,a,o,i,e);case 5:return u=n.sent,n.next=8,u.json();case 8:s=n.sent,j(s.message),h(!1),T(),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0),j("Nieco sa pokazilo"),h(!1);case 19:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e,t,r,a,c){return n.apply(this,arguments)}}(),H=function(){var n=Object(o.a)(c.a.mark((function n(e,r,a,o,i,u){var s,l;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),h(!0),n.prev=2,n.next=5,b(t,e,r,a,o,i,u);case 5:return s=n.sent,n.next=8,s.json();case 8:l=n.sent,j(l.message),h(!1),T(),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0),j("Nieco sa pokazilo"),h(!1);case 19:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e,t,r,a,c,o){return n.apply(this,arguments)}}(),L=function(){var n=Object(o.a)(c.a.mark((function n(e){var r,a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),h(!0),n.prev=2,n.next=5,p(t,e);case 5:return r=n.sent,n.next=8,r.json();case 8:a=n.sent,j(a.message),h(!1),T(),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0),j("Nieco sa pokazilo"),h(!1);case 19:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)(m.Provider,{value:{posts:x,post:S,postsCount:E,getPosts:T,createPost:N,getPost:I,handlePostUpdate:H,handlePostDelete:L,resetBlog:function(){C(null)}},children:e})}}}]);
//# sourceMappingURL=10.f872c7d3.chunk.js.map