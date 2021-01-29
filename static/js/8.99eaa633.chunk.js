(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[8,26,29],{234:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(10),o=t(0),c=t(82),i=t(61),s=t(2),l=t(50),u=t(49),d=t(63),b=t(59),m=t(30),j=t(93),f=t(95),p=t.n(f),h=t(8),g=t(9),x=t(27),O=t(26);function v(){var e=Object(h.a)(["\n    height: 100%;\n    background-color: #F5F5F5;\n    .ql-container, .ql-toolbar {\n        border: none;\n    }\n"]);return v=function(){return e},e}function k(){var e=Object(h.a)(["\n    margin-bottom: 2rem;\n"]);return k=function(){return e},e}function w(){var e=Object(h.a)(["\n    font-size: 1.4rem;\n"]);return w=function(){return e},e}function y(){var e=Object(h.a)(["\n    font-size: 1.4rem;\n    margin: 0 2rem;\n    background-color: #DD4C4C;\n\n    @media all and (max-width: 500px) {\n        margin: 0 .8rem;\n    }\n"]);return y=function(){return e},e}function N(){var e=Object(h.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    width: 100%;\n    background-color: ",";\n    margin-top: 3rem;\n    padding: 6rem;\n\n    position: relative;\n\n    img {\n        position: absolute;\n        width: 100%;\n        /* height: 100%; */\n        max-height: 40rem;\n        left: 0;\n        top: 0;\n        object-fit: cover;\n        object-position: center;\n\n    }\n"]);return N=function(){return e},e}function C(){var e=Object(h.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2rem;\n    height: inherit;\n    height: 100%;\n\n        @media all and (max-width: 800px) {\n            grid-template-columns: 1fr ;\n        }\n\n"]);return C=function(){return e},e}function q(){var e=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n\n    @media all and (max-width: 500px) {\n        flex-direction: column;\n    }\n"]);return q=function(){return e},e}var z=g.c.div(q(),x.b),S=g.c.div(C()),I=g.c.div(N(),(function(e){return e.hasImage?"transparent":"#eee"})),P=Object(g.c)(O.a)(y()),A=Object(g.c)(O.a)(w()),D=g.c.h2(k()),B=Object(g.c)(p.a)(v()),F=function(){return Object(r.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(r.jsx)("polygon",{className:"ql-fill ql-stroke",points:"6 10 4 12 2 10 6 10"}),Object(r.jsx)("path",{className:"ql-stroke",d:"M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"})]})},T=function(){return Object(r.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(r.jsx)("polygon",{className:"ql-fill ql-stroke",points:"12 10 14 12 16 10 12 10"}),Object(r.jsx)("path",{className:"ql-stroke",d:"M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"})]})};var E=f.Quill.import("formats/size");E.whitelist=["extra-small","small","medium","large"],f.Quill.register(E,!0);var L=f.Quill.import("formats/font");L.whitelist=["arial","comic-sans","courier-new","georgia","helvetica","lucida"],f.Quill.register(L,!0);var M={toolbar:{container:"#toolbar",handlers:{undo:function(){this.quill.history.undo()},redo:function(){this.quill.history.redo()}}},history:{delay:500,maxStack:100,userOnly:!0}},H=["header","font","size","bold","italic","underline","align","strike","script","blockquote","background","list","bullet","indent","link","image","color","code-block"],U=function(){return Object(r.jsxs)("div",{id:"toolbar",className:"toolbar",children:[Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsxs)("select",{className:"ql-size",defaultValue:"medium",children:[Object(r.jsx)("option",{value:"extra-small",children:"Size 1"}),Object(r.jsx)("option",{value:"small",children:"Size 2"}),Object(r.jsx)("option",{value:"medium",children:"Size 3"}),Object(r.jsx)("option",{value:"large",children:"Size 4"})]}),Object(r.jsxs)("select",{className:"ql-header",defaultValue:"3",children:[Object(r.jsx)("option",{value:"1",children:"Heading"}),Object(r.jsx)("option",{value:"2",children:"Subheading"}),Object(r.jsx)("option",{value:"3",children:"Normal"})]})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-bold"}),Object(r.jsx)("button",{className:"ql-italic"}),Object(r.jsx)("button",{className:"ql-underline"}),Object(r.jsx)("button",{className:"ql-strike"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-list",value:"ordered"}),Object(r.jsx)("button",{className:"ql-list",value:"bullet"}),Object(r.jsx)("button",{className:"ql-indent",value:"-1"}),Object(r.jsx)("button",{className:"ql-indent",value:"+1"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-script",value:"super"}),Object(r.jsx)("button",{className:"ql-script",value:"sub"}),Object(r.jsx)("button",{className:"ql-blockquote"}),Object(r.jsx)("button",{className:"ql-direction"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("select",{className:"ql-align"}),Object(r.jsx)("select",{className:"ql-color"}),Object(r.jsx)("select",{className:"ql-background"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-link"}),Object(r.jsx)("button",{className:"ql-image"}),Object(r.jsx)("button",{className:"ql-video"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-formula"}),Object(r.jsx)("button",{className:"ql-code-block"}),Object(r.jsx)("button",{className:"ql-clean"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-undo",children:Object(r.jsx)(F,{})}),Object(r.jsx)("button",{className:"ql-redo",children:Object(r.jsx)(T,{})})]})]})};n.default=function(){var e=Object(s.i)().id,n=Object(s.h)().push,t=Object(o.useContext)(c.BlogContext),f=t.createPost,p=t.isLoading,h=t.message,g=t.showLoading,x=t.setIsLoading,O=t.getPost,v=t.post,k=t.handlePostUpdate,w=t.resetBlog,y=Object(o.useContext)(i.ImageContext),N=y.selectedImage,C=y.setSelectedImage,q=Object(o.useState)(""),F=Object(a.a)(q,2),T=F[0],E=F[1],L=Object(o.useState)(""),J=Object(a.a)(L,2),V=J[0],R=J[1],_=Object(o.useState)(""),Q=Object(a.a)(_,2),G=Q[0],X=Q[1],K=Object(o.useState)(""),W=Object(a.a)(K,2),Y=W[0],Z=W[1],$=Object(o.useState)(!1),ee=Object(a.a)($,2),ne=ee[0],te=ee[1],re=Object(o.useState)(!1),ae=Object(a.a)(re,2),oe=ae[0],ce=ae[1],ie=Object(o.useState)(!1),se=Object(a.a)(ie,2),le=se[0],ue=se[1];return Object(o.useEffect)((function(){C(null),"novy-prispevok"!==e&&(O(e),ue(!0))}),[e]),Object(o.useEffect)((function(){console.log(v),v&&(console.log(v),E(v.name),R(v.description),X(v.html),te(v.draft),v.image&&(Z(v.image._id),C(v.image)))}),[v]),Object(o.useEffect)((function(){return function(){w(),E(""),R(""),X(""),Z(""),te(!1),ce(!1),ue(!1)}}),[]),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),Y.length<=0||G.length<=0||("novy-prispevok"===e?f(Y,T,V,ne,G):k(T,V,ne,G,Y,e),n("/dashboard/blog"))},children:[p&&Object(r.jsx)(m.a,{loading:g,title:h,close:function(){return x(!1)}}),oe&&Object(r.jsx)(j.a,{close:function(){return ce(!1)},setImage:Z}),Object(r.jsxs)(z,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Post"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{label:"Draft",checked:ne,onChange:function(){return te(!ne)}}),Object(r.jsx)(P,{children:"Vymaza\u0165"}),Object(r.jsx)(A,{type:"submit",children:le?"Upravi\u0165 pr\xedspevok":"Prida\u0165 pr\xedspevok"})]})]}),Object(r.jsx)(l.a,{children:Object(r.jsxs)(S,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Inform\xe1cia"}),Object(r.jsx)(u.a,{label:"Nadpis",type:"text",name:"title",value:T,handleChange:function(e){return E(e.target.value)},required:!0}),Object(r.jsx)(d.a,{label:"Popis",name:"description",rows:"5",value:V,handleChange:function(e){return R(e.target.value)},required:!0}),Object(r.jsx)("h2",{children:"Tituln\xe1 fotka"}),Object(r.jsxs)(I,{onClick:function(){return ce(!0)},hasImage:N,children:[!N&&"Vybra\u0165 obr\xe1zok",N&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(N.imagePath),alt:N.alt})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(D,{children:"Obsah"}),Object(r.jsx)(U,{}),Object(r.jsx)(B,{value:G,onChange:X,modules:M,formats:H})]})]})})]})}},49:function(e,n,t){"use strict";var r=t(1),a=t(19),o=t(29),c=(t(0),t(8)),i=t(9);function s(){var e=Object(c.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return e},e}function l(){var e=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return l=function(){return e},e}var u=Object(i.b)(l()),d=i.c.div(s(),u,u);n.a=function(e){var n=e.handleChange,t=e.label,c=e.name,i=Object(o.a)(e,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:c,onChange:n},i)),t?Object(r.jsx)("label",{htmlFor:c,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},50:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(8)),o=t(9),c=t(27);function i(){var e=Object(a.a)(["\n    max-width: 115rem;\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return s=function(){return e},e}var l=o.c.div(s(),c.b),u=o.c.div(i());n.a=function(e){var n=e.children;return Object(r.jsx)(l,{children:Object(r.jsx)(u,{children:n})})}},59:function(e,n,t){"use strict";var r=t(19),a=t(1),o=t(29),c=(t(0),t(8));function i(){var e=Object(c.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return i=function(){return e},e}var s=t(9).c.div(i(),(function(e){return e.isActive?"rgb(235, 172, 1)":"rgba(0,0,0,.06)"}),(function(e){return e.isActive?"#fff":"#000"}));n.a=function(e){var n=e.label,t=e.isActive,c=e.handleClick,i=Object(o.a)(e,["label","isActive","handleClick"]);return Object(a.jsx)(s,Object(r.a)(Object(r.a)({isActive:t,onClick:c},i),{},{children:n}))}},61:function(e,n,t){"use strict";t.r(n),t.d(n,"ImageContext",(function(){return j}));var r=t(1),a=t(4),o=t.n(a),c=t(11),i=t(10),s=t(0),l=t(16),u=t(17),d=function(e,n,t,r){var a=new Headers;a.append("auth-token",e),a.append("Content-Type","application/json");var o={method:"POST",headers:a,body:JSON.stringify({name:t||" ",alt:r||" ",image:n}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/images/upload"),o)},b=function(e,n,t){var r=new Headers;r.append("Content-Type","application/json");var a={method:"POST",headers:r,body:JSON.stringify({sortBy:{dateCreated:-1},limit:n,skip:t}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/images/filter"),a)},m=function(e,n){var t=new Headers;t.append("auth-token",e);var r={method:"DELETE",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/images/").concat(n),r)},j=Object(s.createContext)({isDisabled:!1,images:null,selectedImage:null,getImages:function(){},handleImage:function(){},handleDeleteImage:function(){},setSelectedImage:function(){},getNextImages:function(){},getPrevImage:function(){}});n.default=function(e){var n=e.children,t=Object(s.useContext)(l.a),a=t.getMessage,f=t.setIsLoading,p=t.setShowModal,h=t.closeModal,g=Object(s.useContext)(u.a).token,x=Object(s.useState)(!1),O=Object(i.a)(x,2),v=O[0],k=O[1],w=Object(s.useState)(null),y=Object(i.a)(w,2),N=y[0],C=y[1],q=Object(s.useState)(null),z=Object(i.a)(q,2),S=z[0],I=z[1],P=Object(s.useState)(4),A=Object(i.a)(P,1)[0],D=Object(s.useState)(0),B=Object(i.a)(D,2),F=B[0],T=B[1],E=function(){var e=Object(c.a)(o.a.mark((function e(n,t,r,c,i){var s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),f(!0),k(!0),e.prev=3,e.next=6,d(g,n,t,r);case 6:return s=e.sent,e.next=9,s.json();case 9:l=e.sent,console.log(l),l.image&&(I(l.image),c(l.image._id),H(),i()),p(!1),f(!1),k(!1),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0),a("Nieco sa pokazilo"),f(!1),k(!1);case 23:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(n,t,r,a,o){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,N.length===A){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,b(0,A,F+n);case 5:return t=e.sent,e.next=8,t.json();case 8:(r=e.sent).images&&(C(r.images),T(F+n)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),a("Nieco sa pokazilo"),f(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==F){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,b(0,A,F-n);case 5:return t=e.sent,e.next=8,t.json();case 8:(r=e.sent).images&&(C(r.images),T(F-n)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),a("Nieco sa pokazilo"),f(!1);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}(),H=function(){var e=Object(c.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),f(!0),e.prev=2,e.next=5,b(0,A,F);case 5:return n=e.sent,e.next=8,n.json();case 8:(t=e.sent).images&&C(t.images),a(t.message),f(!1),h(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),a("Nieco sa pokazilo"),f(!1);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(c.a)(o.a.mark((function e(n,t){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),f(!0),e.prev=3,e.next=6,m(g,n);case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,a(c.message),f(!1),H(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),a("Nieco sa pokazilo"),f(!1);case 20:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(r.jsx)(j.Provider,{value:{isDisabled:v,images:N,selectedImage:S,getImages:H,handleImage:E,handleDeleteImage:U,setSelectedImage:I,getNextImages:L,getPrevImage:M},children:n})}},63:function(e,n,t){"use strict";var r=t(1),a=t(19),o=t(29),c=(t(0),t(8)),i=t(9);function s(){var e=Object(c.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: .5rem .5rem .5rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 25px 0;\n        font-family: inherit;\n        resize: none;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: .6rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n"]);return s=function(){return e},e}function l(){var e=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return l=function(){return e},e}var u=Object(i.b)(l()),d=i.c.div(s(),u,u);n.a=function(e){var n=e.handleChange,t=e.label,c=e.name,i=Object(o.a)(e,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("textarea",Object(a.a)({className:"form-input",name:c,onChange:n},i)),t?Object(r.jsx)("label",{htmlFor:c,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},82:function(e,n,t){"use strict";t.r(n),t.d(n,"BlogContext",(function(){return f}));var r=t(1),a=t(4),o=t.n(a),c=t(11),i=t(10),s=t(0),l=t(17),u=t(16),d=function(e){return fetch("".concat("http://195.110.58.166:8080","/api/blogs/").concat(e))},b=function(e,n,t,r,a,o){var c=new Headers;c.append("auth-token",e),c.append("Content-Type","application/json");var i={method:"POST",headers:c,body:JSON.stringify({name:n,description:t,draft:r,html:a,image:o}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs"),i)},m=function(e,n,t,r,a,o,c){var i=new Headers;i.append("auth-token",e),i.append("Content-Type","application/json");var s={method:"PATCH",headers:i,body:JSON.stringify({name:n,description:t,draft:r,html:a,image:o}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs/").concat(c),s)},j=function(e,n){var t=new Headers;t.append("auth-token",e),t.append("Content-Type","application/json");var r={method:"DELETE",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs/").concat(n),r)},f=Object(s.createContext)({posts:null,post:null,postsCount:0,getPosts:function(){},createPost:function(){},getPost:function(){},handlePostUpdate:function(){},handlePostDelete:function(){},resetBlog:function(){}});n.default=function(e){var n=e.children,t=Object(s.useContext)(l.a).token,a=Object(s.useContext)(u.a),p=(a.closeModal,a.getMessage),h=a.setIsLoading,g=a.setShowModal,x=Object(s.useState)(null),O=Object(i.a)(x,2),v=O[0],k=O[1],w=Object(s.useState)(null),y=Object(i.a)(w,2),N=y[0],C=y[1],q=Object(s.useState)(0),z=Object(i.a)(q,2),S=z[0],I=z[1],P=function(){var e=Object(c.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),h(!0),e.next=4,fetch("".concat("http://195.110.58.166:8080","/api/blogs"));case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,k(t.blogs),I(t.count),g(!1),h(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),h(!0),e.prev=2,e.next=5,d(n);case 5:return t=e.sent,e.next=8,t.json();case 8:if(r=e.sent,console.log(r),!r.blog){e.next=15;break}return C(r.blog),h(!1),p(r.message),e.abrupt("return");case 15:h(!1),p(r.message),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0),p("Nieco sa pokazilo"),h(!1);case 24:g(!1),h(!1);case 26:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(o.a.mark((function e(n,r,a,c,i){var s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),h(!0),e.prev=2,e.next=5,b(t,r,a,c,i,n);case 5:return s=e.sent,e.next=8,s.json();case 8:l=e.sent,p(l.message),h(!1),P(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),p("Nieco sa pokazilo"),h(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t,r,a,o){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(o.a.mark((function e(n,r,a,c,i,s){var l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),h(!0),e.prev=2,e.next=5,m(t,n,r,a,c,i,s);case 5:return l=e.sent,e.next=8,l.json();case 8:u=e.sent,p(u.message),h(!1),P(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),p("Nieco sa pokazilo"),h(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t,r,a,o,c){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(o.a.mark((function e(n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),h(!0),e.prev=2,e.next=5,j(t,n);case 5:return r=e.sent,e.next=8,r.json();case 8:a=e.sent,p(a.message),h(!1),P(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),p("Nieco sa pokazilo"),h(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n){return e.apply(this,arguments)}}();return Object(r.jsx)(f.Provider,{value:{posts:v,post:N,postsCount:S,getPosts:P,createPost:D,getPost:A,handlePostUpdate:B,handlePostDelete:F,resetBlog:function(){C(null)}},children:n})}},93:function(e,n,t){"use strict";var r=t(1),a=t(10),o=t(0),c=t.n(o),i=t(18),s=t.n(i),l=t(61),u=t(49),d=t(8),b=t(9),m=t(26);function j(){var e=Object(d.a)(["\n    cursor: pointer;\n    outline: none;\n    border: none;\n    padding: .4rem 1rem;\n    border-radius: 50%;\n    color: #fff;\n    background-color: #000;\n    font-size: 1.2rem;\n    font-family: inherit;\n    margin: 0 .5rem;\n\n    &:focus {\n        outline: none;\n    }\n"]);return j=function(){return e},e}function f(){var e=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n"]);return f=function(){return e},e}function p(){var e=Object(d.a)(["\n    display: block;\n    margin: 2rem auto 0;\n\n    &:disabled {\n        cursor: not-allowed;\n        background-color: gray;\n    }\n"]);return p=function(){return e},e}function h(){var e=Object(d.a)(["\n    cursor: pointer;\n    outline:none;\n    border: none;\n    background-color: ",";\n    color: #fff;\n    font-weight: ",";\n    font-family: inherit;\n    font-size: 1.2rem;\n    padding: .8rem 1.5rem;\n    border-radius: .2rem;\n    margin-bottom: 2rem;\n    transition: all .3s ease-out;\n\n    &:focus {\n        outline: none;\n    }\n"]);return h=function(){return e},e}function g(){var e=Object(d.a)(["\n    max-width: 18rem;\n    display: flex;\n    justify-content: space-between;\n    margin: 0 auto;\n"]);return g=function(){return e},e}function x(){var e=Object(d.a)(["\n    display: block;\n    width: 100%;\n\n    img {\n        display: block;\n        max-width: 100%;\n        /* width: inherit; */\n    }\n"]);return x=function(){return e},e}function O(){var e=Object(d.a)(["\n    cursor: pointer;\n    display:none;\n    border-radius:50%;\n    position: absolute;\n    border: none;\n    background-color: rgb(235, 172, 1);\n    padding: .5rem .75rem;\n    font-size: 1rem;\n    right: .5rem;\n    top: .5rem;\n\n    outline: none;\n\n    &:focus {\n        outline: none;\n    }\n"]);return O=function(){return e},e}function v(){var e=Object(d.a)(["\n    position: relative;\n    cursor: pointer;\n    width: 20rem;\n    margin: 1rem 0;\n\n    &:hover button {\n        display: block\n    }\n\n    /* &:not(:last-child) {\n        margin-right: 1.5rem;\n    } */\n\n    img {\n        width:100%;\n        height:100%;\n        object-fit: contain;\n        object-position: center;\n    }\n"]);return v=function(){return e},e}function k(){var e=Object(d.a)(["\n    /* max-width: 46rem; */\n\n    /* width: 100%; */\n    /* overflow-x: scroll; */\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    margin: 2rem auto;\n"]);return k=function(){return e},e}function w(){var e=Object(d.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return w=function(){return e},e}function y(){var e=Object(d.a)(['\n    input[type="file"] {\n        position: absolute;\n        left: -999999999rem;\n    }\n    cursor: pointer;\n    background-color: #000;\n    color: #fff;\n    max-width: 18rem;\n    font-size: 1.4rem;\n    font-family: inherit;\n    padding: .8rem 1rem;\n    text-align: center;\n    display: block;\n    border: 1px solid #000;\n    transition: background-color .1s ease-out,\n                color .2s ease-out;\n    outline: none;\n    margin: 0 auto 2rem;\n\n    &:focus {\n        outline:none;\n    }\n\n    &:hover {\n        background-color: transparent;\n        color: #000;\n    }\n']);return y=function(){return e},e}function N(){var e=Object(d.a)(["\n    width:100%;\n    max-width: 50rem;\n    max-height: 60rem;\n\n    overflow-y: scroll;\n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: white;\n\n    position: relative;\n    z-index: 999999;\n\n"]);return N=function(){return e},e}function C(){var e=Object(d.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return C=function(){return e},e}var q=b.c.div(C()),z=b.c.div(N()),S=b.c.label(y()),I=b.c.button(w()),P=b.c.div(k()),A=b.c.div(v()),D=b.c.button(O()),B=b.c.div(x()),F=b.c.div(g()),T=b.c.button(h(),(function(e){return e.isActive?"rgb(235, 172, 1)":"#000"}),(function(e){return e.isActive?"700":"400"})),E=Object(b.c)(m.a)(p()),L=b.c.div(f()),M=b.c.button(j()),H=function(e,n){var t=new XMLHttpRequest;t.onload=function(){var e=new FileReader;e.onloadend=function(){var t=e.result,r=t.indexOf(";"),a=t.slice(r,t.length);n("data:image/png"+a)},e.readAsDataURL(t.response)},t.open("GET",e),t.responseType="blob",t.send()};n.a=function(e){var n=e.close,t=e.setImage,i=Object(o.useContext)(l.ImageContext),d=i.isDisabled,b=i.getImages,m=i.handleDeleteImage,j=i.handleImage,f=i.images,p=i.setSelectedImage,h=i.getNextImages,g=i.getPrevImage,x=Object(o.useState)("upload"),O=Object(a.a)(x,2),v=O[0],k=O[1],w=Object(o.useState)(null),y=Object(a.a)(w,2),N=y[0],C=y[1],U=Object(o.useState)(""),J=Object(a.a)(U,2),V=J[0],R=J[1],_=Object(o.useState)(""),Q=Object(a.a)(_,2),G=Q[0],X=Q[1],K=Object(o.useState)(""),W=Object(a.a)(K,2),Y=W[0],Z=W[1],$=function(e,n){e.preventDefault(),k(n),"images"===n&&(f||(console.log("API IMAGE CALL"),b()))};Object(o.useEffect)((function(){N&&R(URL.createObjectURL(N))}),[N]);return s.a.createPortal(Object(r.jsxs)(q,{children:[Object(r.jsx)(I,{onClick:n}),Object(r.jsxs)(z,{children:[Object(r.jsxs)(F,{children:[Object(r.jsx)(T,{isActive:"upload"===v,onClick:function(e){return $(e,"upload")},children:"Nov\xfd obrazok"}),Object(r.jsx)(T,{isActive:"images"===v,onClick:function(e){return $(e,"images")},children:"Obr\xe1zky"})]}),"upload"===v?Object(r.jsxs)("div",{children:[Object(r.jsxs)(S,{htmlFor:"image",children:[Object(r.jsx)("input",{id:"image",type:"file",name:"image",accept:"image/png, image/jpeg",onChange:function(e){return C(e.target.files[0])}}),"Vybra\u0165 obr\xe1zok"]}),V&&Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(B,{children:Object(r.jsx)("img",{src:V})}),Object(r.jsx)(u.a,{label:"N\xe1zov",type:"text",name:"imageName",value:G,handleChange:function(e){return X(e.target.value)}}),Object(r.jsx)(u.a,{label:"Alt",type:"text",name:"imageAlt",value:Y,handleChange:function(e){return Z(e.target.value)}}),Object(r.jsx)(E,{onClick:function(e){return function(e){e.preventDefault(),H(V,(function(e){j(e,G,Y,t,n)}))}(e)},disabled:d,children:"Vybra\u0165 obr\xe1zok"})]})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Nahrane obrazky"}),Object(r.jsx)(P,{children:f&&f.map((function(e){return Object(r.jsxs)(A,{children:[Object(r.jsx)(D,{onClick:function(n){return m(e._id,n)},children:"\u2715"}),Object(r.jsx)("img",{onClick:function(){return function(e){t(e._id),p(e),n()}(e)},src:"".concat("http://195.110.58.166:8080","/uploads/").concat(e.imagePath)})]},e._id)}))}),Object(r.jsxs)(L,{children:[Object(r.jsx)(M,{onClick:function(){return g(2)},children:"<"}),Object(r.jsx)(M,{onClick:function(){return h(2)},children:">"})]})]})]})]}),document.getElementById("portal"))}}}]);
//# sourceMappingURL=8.99eaa633.chunk.js.map