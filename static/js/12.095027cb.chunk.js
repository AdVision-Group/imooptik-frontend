(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[12,22],{232:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(10),c=t(0),o=t(79),i=t(2),s=t(17),u=t(58),l=t(59),d=t(51),f=t(30),m=t(7),p=t(8),b=t(26);function h(){var n=Object(m.a)(["\n    font-size: 1.4rem;\n    background-color: rgb(235, 172, 1);\n"]);return h=function(){return n},n}function j(){var n=Object(m.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n"]);return j=function(){return n},n}function g(){var n=Object(m.a)(["\n    align-self: end;\n    justify-self: end;\n"]);return g=function(){return n},n}function v(){var n=Object(m.a)(["\n    h2 {\n        font-size: 1.6rem;\n    }\n\n    p {\n        font-size: 1.4rem;\n        color: gray;\n    }\n\n        @media all and (max-width: 500px) {\n            margin-bottom: 2rem;\n        }\n"]);return v=function(){return n},n}function x(){var n=Object(m.a)(["\n    /* width: 100%; */\n    /* height: 100%; */\n    margin-right: 2rem;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-position: top;\n        object-fit: contain;\n    }\n\n        @media all and (max-width: 800px) {\n        align-self: start;\n        grid-row-start: 1;\n        grid-row-end: 3;   \n\n        @media all and (max-width: 500px) {\n            justify-self: center;\n            margin-bottom: 2rem;\n        }\n\n    }\n"]);return x=function(){return n},n}function O(){var n=Object(m.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 25rem 1fr 25rem;\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n        @media all and (max-width: 800px) {\n        grid-template-columns : 20rem 1fr;\n        grid-template-rows: 1fr 1fr;\n\n        @media all and (max-width: 500px) {\n            grid-template-columns : 1fr;\n            grid-template-rows: unset;\n        }\n    }\n"]);return O=function(){return n},n}var w=p.c.div(O()),k=p.c.div(x()),y=p.c.div(v()),C=p.c.div(g()),P=Object(p.c)(b.a)(j()),z=Object(p.c)(b.a)(h());e.default=function(){var n=Object(c.useContext)(s.a),e=n.closeModal,t=n.isLoading,m=n.message,p=n.showModal,b=Object(c.useContext)(o.BlogContext),h=b.getPosts,j=b.posts,g=b.postsCount,v=b.handlePostDelete,x=Object(i.g)().push,O=Object(c.useState)(""),B=Object(a.a)(O,2),S=B[0],N=B[1],D=[{id:0,name:"D\xe1tum pridania"},{id:1,name:"Abecedne"}],A=Object(c.useState)(0),T=Object(a.a)(A,2),I=T[0],M=T[1];return Object(c.useEffect)((function(){j||h(D[I])}),[j]),Object(r.jsxs)("section",{children:[p&&Object(r.jsx)(f.a,{loading:t,title:m,close:e}),Object(r.jsx)(u.a,{searchQuery:S,handleChange:function(n){return N(n.target.value)},handleAddButton:function(){return x("blog/novy-prispevok")},count:g,title:"Blog"}),Object(r.jsx)(l.a,{items:D,activeIndex:I,setActiveIndex:M}),Object(r.jsx)(d.a,{children:j&&j.length?j.map((function(n){return Object(r.jsxs)(w,{children:[Object(r.jsx)(k,{children:n.image&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(n.image.imagePath),alt:n.image.alt})}),Object(r.jsxs)(y,{children:[Object(r.jsx)("h2",{children:n.name}),Object(r.jsx)("p",{children:n.description})]}),Object(r.jsxs)(C,{children:[Object(r.jsx)(P,{onClick:function(){return x("blog/".concat(n._id))},children:"Upravi\u0165"}),Object(r.jsx)(z,{onClick:function(){return v(n._id)},children:"Vymaza\u0165"})]})]},n._id)})):Object(r.jsx)("div",{children:"\u017diadne pr\xedspevky"})})]})}},50:function(n,e,t){"use strict";var r=t(1),a=t(19),c=t(29),o=(t(0),t(7)),i=t(8);function s(){var n=Object(o.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return n},n}function u(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return n},n}var l=Object(i.b)(u()),d=i.c.div(s(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,o=n.name,i=Object(c.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:o,onChange:e},i)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},51:function(n,e,t){"use strict";var r=t(1),a=(t(0),t(7)),c=t(8),o=t(27);function i(){var n=Object(a.a)(["\n    max-width: 115rem;\n"]);return i=function(){return n},n}function s(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return s=function(){return n},n}var u=c.c.div(s(),o.b),l=c.c.div(i());e.a=function(n){var e=n.children;return Object(r.jsx)(u,{children:Object(r.jsx)(l,{children:e})})}},58:function(n,e,t){"use strict";var r=t(1),a=(t(0),t(50)),c=t(7),o=t(8),i=t(26),s=t(27);function u(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 1rem;\n\n"]);return u=function(){return n},n}function l(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(c.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function f(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return n},n}function m(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return m=function(){return n},n}function p(){var n=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return p=function(){return n},n}var b=o.c.div(p(),s.b),h=o.c.div(m()),j=o.c.div(f()),g=(o.c.div(d()),Object(o.c)(i.a)(l()),Object(o.c)(i.a)(u()));e.a=function(n){var e=n.searchQuery,t=n.handleChange,c=n.title,o=(n.count,n.handleAddButton),i=void 0===o?function(){}:o;return Object(r.jsxs)(b,{children:[Object(r.jsx)(h,{children:Object(r.jsx)("h1",{children:c})}),Object(r.jsxs)(j,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{type:"search",name:"searchbox",value:e,handleChange:t,label:"Vyh\u013eada\u0165"})}),Object(r.jsx)(g,{onClick:i,children:"Prida\u0165"})]})]})}},59:function(n,e,t){"use strict";var r=t(1),a=(t(0),t(7)),c=t(8),o=t(26),i=t(27);function s(){var n=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return s=function(){return n},n}function u(){var n=Object(a.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return u=function(){return n},n}var l=c.c.div(u(),i.b),d=Object(c.c)(o.a)(s(),(function(n){return n.active?"#000":"#fff"}),(function(n){return n.active?"#fff":"#000"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));e.a=function(n){var e=n.items,t=n.activeIndex,a=n.setActiveIndex;return Object(r.jsx)(l,{children:Object(r.jsx)("ul",{children:e.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(d,{active:n.id===t,onClick:function(){return a(n.id)},children:n.name})},n.id)}))})})}},79:function(n,e,t){"use strict";t.r(e),t.d(e,"BlogContext",(function(){return b}));var r=t(1),a=t(9),c=t.n(a),o=t(12),i=t(10),s=t(0),u=t(16),l=t(17),d=function(n){return fetch("".concat("http://195.110.58.166:8080","/api/blogs/").concat(n))},f=function(n,e,t,r,a,c){var o=new Headers;o.append("auth-token",n),o.append("Content-Type","application/json");var i={method:"POST",headers:o,body:JSON.stringify({name:e,description:t,draft:r,html:a,image:c}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs"),i)},m=function(n,e,t,r,a,c,o){var i=new Headers;i.append("auth-token",n),i.append("Content-Type","application/json");var s={method:"PATCH",headers:i,body:JSON.stringify({name:e,description:t,draft:r,html:a,image:c}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs/").concat(o),s)},p=function(n,e){var t=new Headers;t.append("auth-token",n),t.append("Content-Type","application/json");var r={method:"DELETE",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs/").concat(e),r)},b=Object(s.createContext)({posts:null,post:null,postsCount:0,getPosts:function(){},createPost:function(){},getPost:function(){},handlePostUpdate:function(){},handlePostDelete:function(){},resetBlog:function(){}});e.default=function(n){var e=n.children,t=Object(s.useContext)(u.a).token,a=Object(s.useContext)(l.a),h=(a.closeModal,a.getMessage),j=a.setIsLoading,g=a.setShowModal,v=Object(s.useState)(null),x=Object(i.a)(v,2),O=x[0],w=x[1],k=Object(s.useState)(null),y=Object(i.a)(k,2),C=y[0],P=y[1],z=Object(s.useState)(0),B=Object(i.a)(z,2),S=B[0],N=B[1],D=function(){var n=Object(o.a)(c.a.mark((function n(){var e,t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),j(!0),n.next=4,fetch("".concat("http://195.110.58.166:8080","/api/blogs"));case 4:return e=n.sent,n.next=7,e.json();case 7:t=n.sent,w(t.blogs),N(t.count),g(!1),j(!1);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),A=function(){var n=Object(o.a)(c.a.mark((function n(e){var t,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),j(!0),n.prev=2,n.next=5,d(e);case 5:return t=n.sent,n.next=8,t.json();case 8:if(r=n.sent,console.log(r),!r.blog){n.next=15;break}return P(r.blog),j(!1),h(r.message),n.abrupt("return");case 15:j(!1),h(r.message),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(2),console.log(n.t0),h("Nieco sa pokazilo"),j(!1);case 24:g(!1),j(!1);case 26:case"end":return n.stop()}}),n,null,[[2,19]])})));return function(e){return n.apply(this,arguments)}}(),T=function(){var n=Object(o.a)(c.a.mark((function n(e,r,a,o,i){var s,u;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),j(!0),n.prev=2,n.next=5,f(t,r,a,o,i,e);case 5:return s=n.sent,n.next=8,s.json();case 8:u=n.sent,h(u.message),j(!1),D(),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0),h("Nieco sa pokazilo"),j(!1);case 19:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e,t,r,a,c){return n.apply(this,arguments)}}(),I=function(){var n=Object(o.a)(c.a.mark((function n(e,r,a,o,i,s){var u,l;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),j(!0),n.prev=2,n.next=5,m(t,e,r,a,o,i,s);case 5:return u=n.sent,n.next=8,u.json();case 8:l=n.sent,h(l.message),j(!1),D(),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0),h("Nieco sa pokazilo"),j(!1);case 19:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e,t,r,a,c,o){return n.apply(this,arguments)}}(),M=function(){var n=Object(o.a)(c.a.mark((function n(e){var r,a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),j(!0),n.prev=2,n.next=5,p(t,e);case 5:return r=n.sent,n.next=8,r.json();case 8:a=n.sent,h(a.message),j(!1),D(),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0),h("Nieco sa pokazilo"),j(!1);case 19:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)(b.Provider,{value:{posts:O,post:C,postsCount:S,getPosts:D,createPost:T,getPost:A,handlePostUpdate:I,handlePostDelete:M,resetBlog:function(){P(null)}},children:e})}}}]);
//# sourceMappingURL=12.095027cb.chunk.js.map