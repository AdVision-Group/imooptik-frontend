(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[11,25],{240:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(31),a=t(21),c=t(10),o=t(1),l=t(99),s=t(18),d=t(19),u=t(58),b=t(54),j=t(32),v=t(52),m=t(65),h=[{id:1,name:"V\u0161etko",value:"all"},{id:2,name:"De\u0148",value:"day"},{id:3,name:"T\xfd\u017eden",value:"week"},{id:4,name:"Mesiac",value:"month"},{id:5,name:"Rok",value:"year"}],f=t(14),p=t(5),O=t(6),x=t(28),g=t(56);function k(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n"]);return k=function(){return n},n}function y(){var n=Object(p.a)(["\n    margin-top: 1rem;\n    margin-right: 1rem;\n"]);return y=function(){return n},n}function w(){var n=Object(p.a)(["\n    margin-bottom: 2rem;\n"]);return w=function(){return n},n}function C(){var n=Object(p.a)(["\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return C=function(){return n},n}function A(){var n=Object(p.a)(["\n    margin-top: 5rem;\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n\n    h2 {\n        margin-bottom: 2rem;\n    }\n"]);return A=function(){return n},n}function S(){var n=Object(p.a)(["\n    max-width: 50rem;\n    margin-bottom: 5rem;\n"]);return S=function(){return n},n}function z(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            margin-bottom: 1rem;\n            opacity: .6;\n\n        }\n\n        p {\n            font-size: 4rem;\n        }\n    }\n\n"]);return z=function(){return n},n}function B(){var n=Object(p.a)(["\n    /* display: grid; */\n    /* grid-template-columns: 1fr 1fr; */\n    /* grid-gap: 4rem; */\n"]);return B=function(){return n},n}function I(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            margin-bottom: 1rem;\n            opacity: .6;\n\n        }\n\n        p {\n            font-size: 4rem;\n        }\n    }\n"]);return I=function(){return n},n}function M(){var n=Object(p.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n"]);return M=function(){return n},n}var N=O.c.div(M(),f.g),E=O.c.div(I()),T=O.c.div(B()),V=O.c.div(z()),P=O.c.div(S()),R=O.c.div(A()),D=Object(O.c)(x.a)(C()),H=O.c.div(w()),K=Object(O.c)(g.a)(y()),Z=O.c.div(k()),F=(e.default=function(){var n=Object(o.useContext)(s.a),e=n.closeModal,t=n.isLoading,p=n.message,O=n.showModal,x=Object(o.useContext)(d.a),g=x.stats,k=x.isAdmin,y=x.currentUser,w=Object(o.useContext)(l.AnalyticsContext),C=w.stats,A=w.getAnalytics,S=w.generateReport,z=k?m.c:m.c.filter((function(n){return n.id===y.premises||0===n.id})),B=Object(o.useState)(0),I=Object(c.a)(B,2),M=I[0],G=I[1],L=Object(o.useState)(2),_=Object(c.a)(L,2),U=_[0],q=_[1],Q=Object(o.useState)(null),W=Object(c.a)(Q,2),X=W[0],Y=W[1],$=Object(o.useState)({}),nn=Object(c.a)($,2),en=nn[0],tn=nn[1],rn=Object(o.useState)(F[0].value),an=Object(c.a)(rn,2),cn=an[0],on=an[1],ln=Object(o.useState)(J[0].value),sn=Object(c.a)(ln,2),dn=sn[0],un=sn[1],bn=Object(o.useState)({}),jn=Object(c.a)(bn,2),vn=jn[0],mn=jn[1],hn=function(n){var e=n.target,t=e.name,r=e.value;if(""===r)return delete en[t],void tn(Object(a.a)({},en));tn(Object(a.a)(Object(a.a)({},en),{},Object(i.a)({},t,r)))},fn=function(n){var e=n.target,t=e.name,r=e.value;if(""===r)return delete vn[t],void mn(Object(a.a)({},vn));mn(Object(a.a)(Object(a.a)({},vn),{},Object(i.a)({},t,r)))};return Object(o.useEffect)((function(){if((null===vn||void 0===vn?void 0:vn.from)&&(null===vn||void 0===vn?void 0:vn.to)){var n=null===vn||void 0===vn?void 0:vn.from.split("-").reverse().join("/"),e=null===vn||void 0===vn?void 0:vn.to.split("-").reverse().join("/");A("".concat(n,":").concat(e))}}),[vn]),Object(o.useEffect)((function(){un(J[0].value)}),[cn]),Object(o.useEffect)((function(){A(h[U-1].value)}),[U]),Object(o.useEffect)((function(){C&&Y(null===C||void 0===C?void 0:C.find((function(n){return n._id.premises===M})))}),[C,M]),Object(o.useEffect)((function(){return function(){G(0),q(2),Y(null),tn({}),on(F[0].value),un(J[0].value)}}),[]),Object(r.jsxs)("section",{children:[O&&Object(r.jsx)(j.a,{loading:t,title:p,close:e}),Object(r.jsx)(N,{children:Object(r.jsx)("h1",{children:"Analytik\xe1"})}),Object(r.jsx)(f.d,{children:Object(r.jsx)(f.c,{children:Object(r.jsx)(u.a,{items:z,activeIndex:M,setActiveIndex:G})})}),Object(r.jsx)(f.d,{children:Object(r.jsx)(f.c,{children:Object(r.jsx)(u.a,{items:h,activeIndex:U,setActiveIndex:function(n){q(n),mn({})}})})}),Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(P,{children:[Object(r.jsx)("h3",{children:"D\xe1tum:"}),Object(r.jsxs)(Z,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Od:"}),Object(r.jsx)(v.a,{label:"",value:(null===vn||void 0===vn?void 0:vn.from)||"",type:"date",name:"from",handleChange:fn})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Do:"}),Object(r.jsx)(v.a,{label:"",value:(null===vn||void 0===vn?void 0:vn.to)||"",type:"date",name:"to",handleChange:fn})]})]})]}),Object(r.jsxs)(E,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Z\xe1kazn\xedci"}),Object(r.jsx)("p",{children:null===g||void 0===g?void 0:g.users})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Produkty"}),Object(r.jsx)("p",{children:null===g||void 0===g?void 0:g.products})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"\u0160o\u0161ovky"}),Object(r.jsx)("p",{children:null===g||void 0===g?void 0:g.lenses})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Z\xe1kazky"}),Object(r.jsx)("p",{children:null===g||void 0===g?void 0:g.orders})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Vy\u0161etrenia"}),Object(r.jsx)("p",{children:null===g||void 0===g?void 0:g.bookings})]})]}),C&&Object(r.jsx)(T,{children:X?Object(r.jsxs)(V,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Hotovos\u0165"}),Object(r.jsxs)("p",{children:[((null===X||void 0===X?void 0:X.cash)/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Karta"}),Object(r.jsxs)("p",{children:[((null===X||void 0===X?void 0:X.card)/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Kup\xf3ny"}),Object(r.jsx)("p",{children:null===X||void 0===X?void 0:X.coupons})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Objedn\xe1vky"}),Object(r.jsx)("p",{children:null===X||void 0===X?void 0:X.orders})]})]}):Object(r.jsx)(V,{children:Object(r.jsx)("p",{children:"\u017diadn\xe9 \u0161tatistiky"})})}),k&&Object(r.jsxs)(R,{children:[Object(r.jsx)("h2",{children:"Vytvori\u0165 report"}),Object(r.jsxs)(H,{children:[Object(r.jsx)("h5",{children:"Typ reportu"}),F.map((function(n,e){return Object(r.jsx)(K,{label:n.name,isActive:cn===n.value,handleClick:function(){return on(n.value)}},e)}))]}),"users"!==cn&&Object(r.jsxs)(H,{children:[Object(r.jsx)("h5",{children:"Prev\xe1dzka"}),J.map((function(n,e){return Object(r.jsx)(K,{label:n.name,isActive:dn===n.value,handleClick:function(){return un(n.value)}},e)}))]}),Object(r.jsxs)(Z,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Od:"}),Object(r.jsx)(v.a,{label:"",value:(null===en||void 0===en?void 0:en.from)||"",type:"date",name:"from",handleChange:hn})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Do:"}),Object(r.jsx)(v.a,{label:"",value:(null===en||void 0===en?void 0:en.to)||"",type:"date",name:"to",handleChange:hn})]})]}),Object(r.jsx)(D,{onClick:function(){if((null===en||void 0===en?void 0:en.from)||(null===en||void 0===en?void 0:en.to)){var n=null===en||void 0===en?void 0:en.from.split("-").reverse().join("/"),e=null===en||void 0===en?void 0:en.to.split("-").reverse().join("/"),t=Object(a.a)({type:cn,timespan:"".concat(n,":").concat(e)},null!==dn&&{filters:{premises:dn}});S(t)}},children:"Generova\u0165"})]})]})]})},[{name:"Z\xe1kazn\xedci",value:"users"},{name:"Produkty",value:"products"},{name:"Z\xe1kazky",value:"orders"}]),J=[{name:"V\u0161etko",value:null},{name:"Obchodn\xe1 57, Bratislava",value:1},{name:"Mileti\u010dova 38, Bratislava",value:2},{name:"Vajnory, Bratislava",value:3},{name:"Senica, OC Bran\u010d",value:4}]},52:function(n,e,t){"use strict";var r=t(2),i=t(21),a=t(30),c=(t(1),t(5)),o=t(6);function l(){var n=Object(c.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return l=function(){return n},n}function s(){var n=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var d=Object(o.b)(s()),u=o.c.div(l(),d,d);e.a=function(n){var e=n.handleChange,t=n.label,c=n.name,o=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(u,{children:[Object(r.jsx)("input",Object(i.a)({className:"form-input",name:c,onChange:e},o)),t?Object(r.jsx)("label",{htmlFor:c,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},54:function(n,e,t){"use strict";var r=t(2),i=(t(1),t(5)),a=t(6),c=t(14);function o(){var n=Object(i.a)(["\n    max-width: 125rem;\n"]);return o=function(){return n},n}function l(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return l=function(){return n},n}var s=a.c.div(l(),c.g),d=a.c.div(o());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(d,{children:e})})}},56:function(n,e,t){"use strict";var r=t(21),i=t(2),a=t(30),c=(t(1),t(5));function o(){var n=Object(c.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    /* font-weight: ","; */\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return o=function(){return n},n}var l=t(6).c.div(o(),(function(n){return n.isActive?"var(--primary-color)":"var(--body-background-primary-color)"}),(function(n){return n.isActive?"var(--button-font-color)":"var(--secondary-text-color)"}),(function(n){return n.isActive?"border":"normal"}));e.a=function(n){var e=n.label,t=n.isActive,c=n.handleClick,o=Object(a.a)(n,["label","isActive","handleClick"]);return Object(i.jsx)(l,Object(r.a)(Object(r.a)({isActive:t,onClick:c},o),{},{children:e}))}},58:function(n,e,t){"use strict";var r=t(21),i=t(2),a=t(30),c=(t(1),t(5)),o=t(6),l=t(28),s=t(14);function d(){var n=Object(c.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return d=function(){return n},n}function u(){var n=Object(c.a)(["\n    margin-bottom: 3rem;\n    /* "," */\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return u=function(){return n},n}var b=o.c.div(u(),s.g),j=Object(o.c)(l.a)(d(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,c=n.setActiveIndex,o=Object(a.a)(n,["items","activeIndex","setActiveIndex"]);return Object(i.jsx)(b,Object(r.a)(Object(r.a)({},o),{},{children:Object(i.jsx)("ul",{children:e.map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(j,{active:n.id===t,onClick:function(){return c(n.id)},children:n.name})},n.id)}))})}))}},65:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return a}));var r=["Obchodn\xe1 57, Bratislava","Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d"],i=[{id:0,name:"E-shop"},{id:1,name:"Obchodn\xe1 57, Bratislava"},{id:2,name:"Mileti\u010dova 38, Bratislava"},{id:3,name:"Vajnory, Bratislava"},{id:4,name:"Senica, OC Bran\u010d"}],a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n.toString();var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)}},99:function(n,e,t){"use strict";t.r(e),t.d(e,"AnalyticsContext",(function(){return u}));var r=t(2),i=t(7),a=t.n(i),c=t(12),o=t(10),l=t(1),s=t(19),d=t(18),u=Object(l.createContext)({stats:null,getAnalytics:function(){},generateReport:function(){}});e.default=function(n){var e=n.children,t=Object(l.useContext)(s.a).token,i=Object(l.useContext)(d.a),b=i.closeModal,j=i.getMessage,v=i.setShowModal,m=i.setIsLoading,h=Object(l.useState)(null),f=Object(o.a)(h,2),p=f[0],O=f[1],x=new Headers;x.append("auth-token",t),x.append("Content-Type","application/json");var g=function(){var n=Object(c.a)(a.a.mark((function n(e){var t,r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),m(!0),t={method:"GET",headers:x,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/stats?timespan=").concat(e),t);case 6:return r=n.sent,n.next=9,r.json();case 9:if(!(i=n.sent).stats){n.next=14;break}return O(i.stats),b(),n.abrupt("return");case 14:j(i.messageSK),m(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),j("Nieco sa pokazilo"),m(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=Object(c.a)(a.a.mark((function n(e){var t,r,i,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),m(!0),t=JSON.stringify(e),r={method:"POST",headers:x,body:t,redirect:"follow"},n.prev=4,n.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/stats/generateReport"),r);case 7:return i=n.sent,n.next=10,i.json();case 10:(c=n.sent).name&&setTimeout((function(){var n=window.open("".concat("http://195.110.58.166:8080","/uploads/excel/").concat(c.name),"_blank","noreferrer noopener");null===n||void 0===n||n.focus()}),2e3),j(c.messageSK),m(!1),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(4),console.log(n.t0),j("Nieco sa pokazilo"),m(!1);case 21:case"end":return n.stop()}}),n,null,[[4,16]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)(u.Provider,{value:{stats:p,getAnalytics:g,generateReport:k},children:e})}}}]);
//# sourceMappingURL=11.7869075c.chunk.js.map