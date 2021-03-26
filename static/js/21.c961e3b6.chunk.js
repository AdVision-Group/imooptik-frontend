(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[21,27],{246:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(10),s=n(1),r=n(87),o=n(86),l=n(18),i=n(3),u=n(55),j=n(52),b=n(60),d=n(57),p=n(32),m=n(98),h=n(103),f=n.n(h),O=n(14),x=n(5),g=n(6),v=n(28);function k(){var e=Object(x.a)(["\n    height: 50rem;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    \n    .ql-container, .ql-toolbar {\n        border: none;\n    }\n"]);return k=function(){return e},e}function q(){var e=Object(x.a)(["\n    margin-bottom: 2rem;\n"]);return q=function(){return e},e}function N(){var e=Object(x.a)(["\n    font-size: 1.4rem;\n"]);return N=function(){return e},e}function w(){var e=Object(x.a)(["\n    font-size: 1.4rem;\n    margin: 0 2rem;\n    background-color: var(--color-red);\n\n    @media all and (max-width: 500px) {\n        margin: 0 .8rem;\n    }\n"]);return w=function(){return e},e}function y(){var e=Object(x.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    width: 100%;\n    background-color: ",";\n    margin-top: 3rem;\n    padding: 6rem;\n\n    position: relative;\n\n    img {\n        position: absolute;\n        width: 100%;\n        /* height: 100%; */\n        max-height: 40rem;\n        left: 0;\n        top: 0;\n        object-fit: cover;\n        object-position: center;\n\n    }\n"]);return y=function(){return e},e}function S(){var e=Object(x.a)(["\n    padding: 2rem;\n    background-color: var(--container-background-color);\n    box-shadow: var(--container-shadow);\n"]);return S=function(){return e},e}function C(){var e=Object(x.a)(["\n    display: grid;\n    align-items: start;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2rem;\n    height: inherit;\n    height: 100%;\n\n        @media all and (max-width: 800px) {\n            grid-template-columns: 1fr ;\n        }\n\n"]);return C=function(){return e},e}function P(){var e=Object(x.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n"]);return P=function(){return e},e}var z=g.c.div(P(),O.g),I=g.c.div(C()),B=g.c.div(S()),T=g.c.div(y(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),E=Object(g.c)(v.a)(w()),D=Object(g.c)(v.a)(N()),H=g.c.h2(q()),L=Object(g.c)(f.a)(k()),M=function(){return Object(a.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(a.jsx)("polygon",{className:"ql-fill ql-stroke",points:"6 10 4 12 2 10 6 10"}),Object(a.jsx)("path",{className:"ql-stroke",d:"M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"})]})},A=function(){return Object(a.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(a.jsx)("polygon",{className:"ql-fill ql-stroke",points:"12 10 14 12 16 10 12 10"}),Object(a.jsx)("path",{className:"ql-stroke",d:"M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"})]})};var J=h.Quill.import("formats/size");J.whitelist=["extra-small","small","medium","large"],h.Quill.register(J,!0);var Q=h.Quill.import("formats/font");Q.whitelist=["arial","comic-sans","courier-new","georgia","helvetica","lucida"],h.Quill.register(Q,!0);var U={toolbar:{container:"#toolbar",handlers:{undo:function(){this.quill.history.undo()},redo:function(){this.quill.history.redo()}}},history:{delay:500,maxStack:100,userOnly:!0}},V=["header","font","size","bold","italic","underline","align","strike","script","blockquote","background","list","bullet","indent","link","image","color","code-block"],_=function(){return Object(a.jsxs)("div",{id:"toolbar",className:"toolbar",children:[Object(a.jsxs)("span",{className:"ql-formats",children:[Object(a.jsxs)("select",{className:"ql-size",defaultValue:"medium",children:[Object(a.jsx)("option",{value:"extra-small",children:"Size 1"}),Object(a.jsx)("option",{value:"small",children:"Size 2"}),Object(a.jsx)("option",{value:"medium",children:"Size 3"}),Object(a.jsx)("option",{value:"large",children:"Size 4"})]}),Object(a.jsxs)("select",{className:"ql-header",defaultValue:"3",children:[Object(a.jsx)("option",{value:"1",children:"Heading"}),Object(a.jsx)("option",{value:"2",children:"Subheading"}),Object(a.jsx)("option",{value:"3",children:"Normal"})]})]}),Object(a.jsxs)("span",{className:"ql-formats",children:[Object(a.jsx)("button",{className:"ql-bold"}),Object(a.jsx)("button",{className:"ql-italic"}),Object(a.jsx)("button",{className:"ql-underline"}),Object(a.jsx)("button",{className:"ql-strike"})]}),Object(a.jsxs)("span",{className:"ql-formats",children:[Object(a.jsx)("button",{className:"ql-list",value:"ordered"}),Object(a.jsx)("button",{className:"ql-list",value:"bullet"}),Object(a.jsx)("button",{className:"ql-indent",value:"-1"}),Object(a.jsx)("button",{className:"ql-indent",value:"+1"})]}),Object(a.jsxs)("span",{className:"ql-formats",children:[Object(a.jsx)("button",{className:"ql-script",value:"super"}),Object(a.jsx)("button",{className:"ql-script",value:"sub"}),Object(a.jsx)("button",{className:"ql-blockquote"}),Object(a.jsx)("button",{className:"ql-direction"})]}),Object(a.jsxs)("span",{className:"ql-formats",children:[Object(a.jsx)("select",{className:"ql-align"}),Object(a.jsx)("select",{className:"ql-color"}),Object(a.jsx)("select",{className:"ql-background"})]}),Object(a.jsxs)("span",{className:"ql-formats",children:[Object(a.jsx)("button",{className:"ql-link"}),Object(a.jsx)("button",{className:"ql-image"}),Object(a.jsx)("button",{className:"ql-video"})]}),Object(a.jsxs)("span",{className:"ql-formats",children:[Object(a.jsx)("button",{className:"ql-formula"}),Object(a.jsx)("button",{className:"ql-code-block"}),Object(a.jsx)("button",{className:"ql-clean"})]}),Object(a.jsxs)("span",{className:"ql-formats",children:[Object(a.jsx)("button",{className:"ql-undo",children:Object(a.jsx)(M,{})}),Object(a.jsx)("button",{className:"ql-redo",children:Object(a.jsx)(A,{})})]})]})};t.default=function(){var e=Object(i.i)().id,t=Object(i.h)().push,n=Object(s.useContext)(r.BlogContext),h=n.createPost,f=n.isLoading,x=n.message,g=n.showLoading,v=n.setIsLoading,k=n.getPost,q=n.post,N=n.handlePostUpdate,w=n.resetBlog,y=Object(s.useContext)(l.a).closeModal,S=Object(s.useContext)(o.ImageContext),C=S.selectedImage,P=S.setSelectedImage,M=Object(s.useState)(""),A=Object(c.a)(M,2),J=A[0],Q=A[1],F=Object(s.useState)(""),G=Object(c.a)(F,2),K=G[0],R=G[1],W=Object(s.useState)(""),X=Object(c.a)(W,2),Y=X[0],Z=X[1],$=Object(s.useState)(""),ee=Object(c.a)($,2),te=ee[0],ne=ee[1],ae=Object(s.useState)(!1),ce=Object(c.a)(ae,2),se=ce[0],re=ce[1],oe=Object(s.useState)(!1),le=Object(c.a)(oe,2),ie=le[0],ue=le[1],je=Object(s.useState)(!1),be=Object(c.a)(je,2),de=be[0],pe=be[1];return Object(s.useEffect)((function(){P(null),"novy-prispevok"!==e&&(k(e),pe(!0))}),[e]),Object(s.useEffect)((function(){"novy-prispevok"!==e&&q&&(Q(q.name),R(q.description),Z(q.html),re(q.draft),q.image&&(ne(q.image._id),P(q.image)))}),[q]),Object(s.useEffect)((function(){return function(){y(),w(),Q(""),R(""),Z(""),ne(""),re(!1),ue(!1),pe(!1)}}),[]),Object(a.jsxs)("form",{onSubmit:function(n){n.preventDefault(),te.length<=0||Y.length<=0||("novy-prispevok"===e?h(te,J,K,se,Y):N(J,K,se,Y,te,e),t("/dashboard/blog"))},children:[f&&Object(a.jsx)(p.a,{loading:g,title:x,close:function(){return v(!1)}}),ie&&Object(a.jsx)(m.a,{close:function(){return ue(!1)},setImage:ne}),Object(a.jsx)(z,{children:Object(a.jsxs)(O.c,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Post"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(d.a,{label:"Draft",isActive:se,handleClick:function(){return re((function(e){return!e}))}}),Object(a.jsx)(E,{children:"Vymaza\u0165"}),Object(a.jsx)(D,{type:"submit",children:de?"Upravi\u0165 pr\xedspevok":"Prida\u0165 pr\xedspevok"})]})]})}),Object(a.jsx)(u.a,{children:Object(a.jsxs)(I,{children:[Object(a.jsxs)(B,{children:[Object(a.jsx)("h2",{children:"Inform\xe1cia"}),Object(a.jsx)(j.a,{label:"Nadpis",type:"text",name:"title",value:J,handleChange:function(e){return Q(e.target.value)},required:!0}),Object(a.jsx)(b.a,{label:"Popis",name:"description",rows:"5",value:K,handleChange:function(e){return R(e.target.value)},required:!0}),Object(a.jsx)("h2",{children:"Tituln\xe1 fotka"}),Object(a.jsxs)(T,{onClick:function(){return ue(!0)},hasImage:C,children:[!C&&"Vybra\u0165 obr\xe1zok",C&&Object(a.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(C.imagePath),alt:C.alt})]})]}),Object(a.jsxs)(B,{children:[Object(a.jsx)(H,{children:"Obsah"}),Object(a.jsx)(_,{}),Object(a.jsx)(L,{value:Y,onChange:Z,modules:U,formats:V})]})]})})]})}},87:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogContext",(function(){return m}));var a=n(2),c=n(7),s=n.n(c),r=n(12),o=n(10),l=n(1),i=n(19),u=n(18),j=function(e){return fetch("".concat("http://195.110.58.166:8080","/api/blogs/").concat(e))},b=function(e,t,n,a,c,s){var r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var o={method:"POST",headers:r,body:JSON.stringify({name:t,description:n,draft:a,html:c,image:s}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs"),o)},d=function(e,t,n,a,c,s,r){var o=new Headers;o.append("auth-token",e),o.append("Content-Type","application/json");var l={method:"PATCH",headers:o,body:JSON.stringify({name:t,description:n,draft:a,html:c,image:s}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs/").concat(r),l)},p=function(e,t){var n=new Headers;n.append("auth-token",e),n.append("Content-Type","application/json");var a={method:"DELETE",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/blogs/").concat(t),a)},m=Object(l.createContext)({posts:null,post:null,postsCount:0,getPosts:function(){},createPost:function(){},getPost:function(){},handlePostUpdate:function(){},handlePostDelete:function(){},resetBlog:function(){}});t.default=function(e){var t=e.children,n=Object(l.useContext)(i.a).token,c=Object(l.useContext)(u.a),h=c.getMessage,f=c.setIsLoading,O=c.setShowModal,x=Object(l.useState)(null),g=Object(o.a)(x,2),v=g[0],k=g[1],q=Object(l.useState)(null),N=Object(o.a)(q,2),w=N[0],y=N[1],S=Object(l.useState)(0),C=Object(o.a)(S,2),P=C[0],z=C[1],I=function(){var e=Object(r.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),e.next=4,fetch("".concat("http://195.110.58.166:8080","/api/blogs"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,k(n.blogs),z(n.count),O(!1),f(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(r.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),e.prev=2,e.next=5,j(t);case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(a=e.sent).blog){e.next=14;break}return y(a.blog),f(!1),h(a.message),e.abrupt("return");case 14:f(!1),h(a.message),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),h("Nieco sa pokazilo"),f(!1);case 23:O(!1),f(!1);case 25:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(r.a)(s.a.mark((function e(t,a,c,r,o){var l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),e.prev=2,e.next=5,b(n,a,c,r,o,t);case 5:return l=e.sent,e.next=8,l.json();case 8:i=e.sent,h(i.message),f(!1),I(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),h("Nieco sa pokazilo"),f(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,a,c,s){return e.apply(this,arguments)}}(),E=function(){var e=Object(r.a)(s.a.mark((function e(t,a,c,r,o,l){var i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),e.prev=2,e.next=5,d(n,t,a,c,r,o,l);case 5:return i=e.sent,e.next=8,i.json();case 8:u=e.sent,h(u.message),f(!1),I(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),h("Nieco sa pokazilo"),f(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,a,c,s,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(r.a)(s.a.mark((function e(t){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),e.prev=2,e.next=5,p(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,h(c.message),f(!1),I(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),h("Nieco sa pokazilo"),f(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(m.Provider,{value:{posts:v,post:w,postsCount:P,getPosts:I,createPost:T,getPost:B,handlePostUpdate:E,handlePostDelete:D,resetBlog:function(){y(null)}},children:t})}}}]);
//# sourceMappingURL=21.c961e3b6.chunk.js.map