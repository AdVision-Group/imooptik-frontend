(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[11,26],{101:function(n,e,t){"use strict";t.r(e),t.d(e,"AnalyticsContext",(function(){return u}));var r=t(2),i=t(7),a=t.n(i),o=t(12),c=t(10),l=t(1),s=t(19),d=t(18),u=Object(l.createContext)({stats:null,getAnalytics:function(){},generateReport:function(){}});e.default=function(n){var e=n.children,t=Object(l.useContext)(s.a).token,i=Object(l.useContext)(d.a),v=i.closeModal,b=i.getMessage,j=i.setShowModal,m=i.setIsLoading,h=Object(l.useState)(null),p=Object(c.a)(h,2),f=p[0],O=p[1],x=new Headers;x.append("auth-token",t),x.append("Content-Type","application/json");var g=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),m(!0),t={method:"GET",headers:x,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("https://coronashop.store:8080","/api/admin/stats?timespan=").concat(e),t);case 6:return r=n.sent,n.next=9,r.json();case 9:if(!(i=n.sent).stats){n.next=14;break}return O(i.stats),v(),n.abrupt("return");case 14:b(i.messageSK),m(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),b("Nieco sa pokazilo"),m(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,i,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),m(!0),t=JSON.stringify(e),r={method:"POST",headers:x,body:t,redirect:"follow"},n.prev=4,n.next=7,fetch("".concat("https://coronashop.store:8080","/api/admin/stats/generateReport"),r);case 7:return i=n.sent,n.next=10,i.json();case 10:(o=n.sent).name&&setTimeout((function(){var n=window.open("".concat("https://coronashop.store:8080","/uploads/excel/").concat(o.name),"_blank","noreferrer noopener");null===n||void 0===n||n.focus()}),2e3),b(o.messageSK),m(!1),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(4),console.log(n.t0),b("Nieco sa pokazilo"),m(!1);case 21:case"end":return n.stop()}}),n,null,[[4,16]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)(u.Provider,{value:{stats:f,getAnalytics:g,generateReport:k},children:e})}},242:function(n,e,t){"use strict";t.r(e),t.d(e,"analyticsRetailNames",(function(){return L}));var r=t(2),i=t(31),a=t(21),o=t(10),c=t(1),l=t(101),s=t(18),d=t(19),u=t(59),v=t(55),b=t(32),j=t(52),m=(t(54),[{id:1,name:"V\u0161etko",value:"all"},{id:2,name:"De\u0148",value:"day"},{id:3,name:"T\xfd\u017ede\u0148",value:"week"},{id:4,name:"Mesiac",value:"month"},{id:5,name:"Rok",value:"year"}]),h=t(14),p=t(5),f=t(6),O=t(28),x=t(57);function g(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n"]);return g=function(){return n},n}function k(){var n=Object(p.a)(["\n    margin-top: 1rem;\n    margin-right: 1rem;\n"]);return k=function(){return n},n}function y(){var n=Object(p.a)(["\n    margin-bottom: 2rem;\n"]);return y=function(){return n},n}function w(){var n=Object(p.a)(["\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return w=function(){return n},n}function C(){var n=Object(p.a)(["\n    margin-top: 5rem;\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n\n    h2 {\n        margin-bottom: 2rem;\n    }\n"]);return C=function(){return n},n}function B(){var n=Object(p.a)(["\n    max-width: 50rem;\n    margin-bottom: 5rem;\n"]);return B=function(){return n},n}function S(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            /* margin-bottom: 1rem; */\n            opacity: .6;\n\n            span {\n                display: block;\n                font-size: 1.2rem\n            }\n        }\n\n        p {\n            font-size: 4rem;\n        }\n\n        :nth-of-type(1) {\n            h3 {\n                margin-bottom: 1.8rem;\n            }\n        }\n    }\n"]);return S=function(){return n},n}function A(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            margin-bottom: 1rem;\n            opacity: .6;\n\n        }\n\n        p {\n            font-size: 4rem;\n        }\n    }\n\n"]);return A=function(){return n},n}function z(){var n=Object(p.a)(["\n    /* display: grid; */\n    /* grid-template-columns: 1fr 1fr; */\n    /* grid-gap: 4rem; */\n"]);return z=function(){return n},n}function T(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            margin-bottom: 1rem;\n            opacity: .6;\n\n        }\n\n        p {\n            font-size: 4rem;\n        }\n    }\n"]);return T=function(){return n},n}function V(){var n=Object(p.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n"]);return V=function(){return n},n}var M=f.c.div(V(),h.g),I=f.c.div(T()),N=f.c.div(z()),P=f.c.div(A()),F=f.c.div(S()),R=f.c.div(B()),E=f.c.div(C()),Z=Object(f.c)(O.a)(w()),H=f.c.div(y()),K=Object(f.c)(x.a)(k()),D=f.c.div(g()),J=(e.default=function(){var n=Object(c.useContext)(s.a),e=n.closeModal,t=n.isLoading,p=n.message,f=n.showModal,O=Object(c.useContext)(d.a),x=O.stats,g=O.isAdmin,k=O.currentUser,y=Object(c.useContext)(l.AnalyticsContext),w=y.stats,C=y.getAnalytics,B=y.generateReport,S=g?L:L.filter((function(n){return n.id===k.premises||0===n.id})),A=Object(c.useState)(k.premises||0),z=Object(o.a)(A,2),T=z[0],V=z[1],_=Object(c.useState)(2),q=Object(o.a)(_,2),U=q[0],Q=q[1],W=Object(c.useState)(null),X=Object(o.a)(W,2),Y=X[0],$=X[1],nn=Object(c.useState)({}),en=Object(o.a)(nn,2),tn=en[0],rn=en[1],an=Object(c.useState)(J[0].value),on=Object(o.a)(an,2),cn=on[0],ln=on[1],sn=Object(c.useState)(G[0].value),dn=Object(o.a)(sn,2),un=dn[0],vn=dn[1],bn=Object(c.useState)({}),jn=Object(o.a)(bn,2),mn=jn[0],hn=jn[1],pn=function(n){var e=n.target,t=e.name,r=e.value;if(""===r)return delete tn[t],void rn(Object(a.a)({},tn));rn(Object(a.a)(Object(a.a)({},tn),{},Object(i.a)({},t,r)))},fn=function(n){var e=n.target,t=e.name,r=e.value;if(""===r)return delete mn[t],void hn(Object(a.a)({},mn));hn(Object(a.a)(Object(a.a)({},mn),{},Object(i.a)({},t,r)))};return Object(c.useEffect)((function(){if((null===mn||void 0===mn?void 0:mn.from)&&(null===mn||void 0===mn?void 0:mn.to)){var n=null===mn||void 0===mn?void 0:mn.from.split("-").reverse().join("/"),e=null===mn||void 0===mn?void 0:mn.to.split("-").reverse().join("/");C("".concat(n,":").concat(e))}}),[mn]),Object(c.useEffect)((function(){vn(G[0].value)}),[cn]),Object(c.useEffect)((function(){C(m[U-1].value)}),[U]),Object(c.useEffect)((function(){w&&$(null===w||void 0===w?void 0:w.find((function(n){return n._id.premises===T})))}),[w,T]),Object(c.useEffect)((function(){return function(){V(0),Q(2),$(null),rn({}),ln(J[0].value),vn(G[0].value)}}),[]),console.log(w),Object(r.jsxs)("section",{children:[f&&Object(r.jsx)(b.a,{loading:t,title:p,close:e}),Object(r.jsx)(M,{children:Object(r.jsx)("h1",{children:"Analytik\xe1"})}),Object(r.jsx)(h.d,{children:Object(r.jsx)(h.c,{children:Object(r.jsx)(u.a,{items:S,activeIndex:T,setActiveIndex:V})})}),Object(r.jsx)(h.d,{children:Object(r.jsx)(h.c,{children:Object(r.jsx)(u.a,{items:m,activeIndex:U,setActiveIndex:function(n){Q(n),hn({})}})})}),Object(r.jsxs)(v.a,{children:[Object(r.jsxs)(R,{children:[Object(r.jsx)("h3",{children:"D\xe1tum:"}),Object(r.jsxs)(D,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Od:"}),Object(r.jsx)(j.a,{label:"",value:(null===mn||void 0===mn?void 0:mn.from)||"",type:"date",name:"from",handleChange:fn})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Do:"}),Object(r.jsx)(j.a,{label:"",value:(null===mn||void 0===mn?void 0:mn.to)||"",type:"date",name:"to",handleChange:fn})]})]})]}),g&&Object(r.jsxs)(I,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Z\xe1kazn\xedci"}),Object(r.jsx)("p",{children:null===x||void 0===x?void 0:x.users})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Produkty"}),Object(r.jsx)("p",{children:null===x||void 0===x?void 0:x.products})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"\u0160o\u0161ovky"}),Object(r.jsx)("p",{children:null===x||void 0===x?void 0:x.lenses})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Z\xe1kazky"}),Object(r.jsx)("p",{children:null===x||void 0===x?void 0:x.orders})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Vy\u0161etrenia"}),Object(r.jsx)("p",{children:null===x||void 0===x?void 0:x.bookings})]})]}),w&&Object(r.jsx)(N,{children:Y?Object(r.jsxs)(F,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Tr\u017eba"}),Object(r.jsxs)("p",{children:[(((null===Y||void 0===Y?void 0:Y.cash)+(null===Y||void 0===Y?void 0:Y.card)+(null===Y||void 0===Y?void 0:Y.coupons)+(null===Y||void 0===Y?void 0:Y.eshopPickupPayments))/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{children:["Tr\u017eba ",Object(r.jsx)("span",{children:"(potenci\xe1lna)"})]}),Object(r.jsxs)("p",{children:[((null===Y||void 0===Y?void 0:Y.potential)/100).toFixed(2),"\u20ac"]})]})]}):Object(r.jsx)(F,{children:Object(r.jsx)("p",{children:"\u017diadn\xe9 \u0161tatistiky"})})}),w&&Object(r.jsx)(N,{children:Y&&Object(r.jsxs)(P,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Hotovos\u0165"}),Object(r.jsxs)("p",{children:[((null===Y||void 0===Y?void 0:Y.cash)/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Karta"}),Object(r.jsxs)("p",{children:[((null===Y||void 0===Y?void 0:Y.card)/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Kup\xf3ny"}),Object(r.jsxs)("p",{children:[((null===Y||void 0===Y?void 0:Y.coupons)/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Objedn\xe1vky"}),Object(r.jsx)("p",{children:null===Y||void 0===Y?void 0:Y.orders})]})]})}),g&&Object(r.jsxs)(E,{children:[Object(r.jsx)("h2",{children:"Vytvori\u0165 report"}),Object(r.jsxs)(H,{children:[Object(r.jsx)("h5",{children:"Typ reportu"}),J.map((function(n,e){return Object(r.jsx)(K,{label:n.name,isActive:cn===n.value,handleClick:function(){return ln(n.value)}},e)}))]}),"users"!==cn&&Object(r.jsxs)(H,{children:[Object(r.jsx)("h5",{children:"Prev\xe1dzka"}),G.map((function(n,e){return Object(r.jsx)(K,{label:n.name,isActive:un===n.value,handleClick:function(){return vn(n.value)}},e)}))]}),"users"!==cn?Object(r.jsxs)(D,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Od:"}),Object(r.jsx)(j.a,{label:"",value:(null===tn||void 0===tn?void 0:tn.from)||"",type:"date",name:"from",handleChange:pn})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Do:"}),Object(r.jsx)(j.a,{label:"",value:(null===tn||void 0===tn?void 0:tn.to)||"",type:"date",name:"to",handleChange:pn})]})]}):Object(r.jsx)("div",{style:{marginBottom:"2rem"},children:Object(r.jsx)("p",{children:"\u017diadne mo\u017enosti"})}),Object(r.jsx)(Z,{onClick:function(){if((null===tn||void 0===tn?void 0:tn.from)||(null===tn||void 0===tn?void 0:tn.to)){var n=null===tn||void 0===tn?void 0:tn.from.split("-").reverse().join("/"),e=null===tn||void 0===tn?void 0:tn.to.split("-").reverse().join("/"),t=Object(a.a)({type:cn,timespan:"users"===cn?"all":"".concat(n,":").concat(e)},"users"!==cn&&{filters:{premises:un}});B(t)}else{var r=Object(a.a)({type:cn,timespan:"all"},"users"!==cn&&{filters:{premises:un}});B(r)}},children:"Generova\u0165"})]})]})]})},[{name:"Z\xe1kazn\xedci",value:"users"},{name:"Produkty",value:"products"},{name:"Z\xe1kazky",value:"orders"}]),G=[{name:"Centr\xe1lny sklad",value:1},{name:"Obchodn\xe1, Bratislava",value:2},{name:"Mileti\u010dova, Bratislava",value:3},{name:"Vajnory, Bratislava",value:4},{name:"Vajnorsk\xe1 53, Bratislava",value:5},{name:"OC Bran\u010d, Senica",value:6}],L=[{id:1,name:"Centr\xe1lny sklad"},{id:2,name:"Obchodn\xe1, Bratislava"},{id:3,name:"Mileti\u010dova, Bratislava"},{id:4,name:"Vajnory, Bratislava"},{id:5,name:"Vajnorsk\xe1 53, Bratislava"},{id:6,name:"OC Bran\u010d, Senica"}]},52:function(n,e,t){"use strict";var r=t(2),i=t(21),a=t(30),o=(t(1),t(5)),c=t(6);function l(){var n=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var d=Object(c.b)(s()),u=c.c.div(l(),d,d);e.a=function(n){var e=n.handleChange,t=n.label,o=n.name,c=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(u,{children:[Object(r.jsx)("input",Object(i.a)({className:"form-input",name:o,onChange:e},c)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(c.value.length?"shrink":""," form-input-label"),children:t}):null]})}},54:function(n,e,t){"use strict";t.d(e,"f",(function(){return r})),t.d(e,"g",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"d",(function(){return o})),t.d(e,"e",(function(){return c})),t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return s}));var r=["eshop","Centr\xe1lny sklad","Obchodn\xe1, Bratislava","Mileti\u010dova, Bratislava","Vajnory, Bratislava","Vajnorsk\xe1 53, Bratislava","OC Bran\u010d, Senica"],i=[{id:0,name:"V\u0161etky"},{id:1,name:"Centr\xe1lny sklad"},{id:2,name:"Obchodn\xe1, Bratislava"},{id:3,name:"Mileti\u010dova, Bratislava"},{id:4,name:"Vajnory, Bratislava"},{id:5,name:"Vajnorsk\xe1 53, Bratislava"},{id:6,name:"OC Bran\u010d, Senica"}],a=["\u010ciern\xe1","Modr\xe1","\u010cerven\xe1","Siv\xe1","Zlat\xe1","Strieborn\xe1","Hned\xe1","Fialov\xe1","Zelen\xe1","Sed\xe1","Bordov\xe1"],o=["Acet\xe1t","Kov","Tit\xe1n","TR90","Patent","Optyl"],c=["Pilot","Squared","Browline","Cat eye","Tiny","Oversize","Okr\xfahle","Ov\xe1lne","Obd\u013a\u017enikov\xe9","Flat top","\u0160peci\xe1lne"],l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n.toString();var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)},s=function(n){return console.log(n),n.includes(",")?n.split(",")[0]+"."+n.split(",")[1]:n}},55:function(n,e,t){"use strict";var r=t(2),i=(t(1),t(5)),a=t(6),o=t(14);function c(){var n=Object(i.a)(["\n    max-width: 125rem;\n    width: 100%;\n"]);return c=function(){return n},n}function l(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n    /* border: 1px solid red; */\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n\n        @media all and (max-width: 700px) {\n            overflow-x: scroll;\n        }\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return l=function(){return n},n}var s=a.c.div(l(),o.g),d=a.c.div(c());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(d,{children:e})})}},57:function(n,e,t){"use strict";var r=t(21),i=t(2),a=t(30),o=(t(1),t(5));function c(){var n=Object(o.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    /* font-weight: ","; */\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return c=function(){return n},n}var l=t(6).c.div(c(),(function(n){return n.isActive?"var(--primary-color)":"var(--body-background-primary-color)"}),(function(n){return n.isActive?"var(--button-font-color)":"var(--secondary-text-color)"}),(function(n){return n.isActive?"border":"normal"}));e.a=function(n){var e=n.label,t=n.isActive,o=n.handleClick,c=Object(a.a)(n,["label","isActive","handleClick"]);return Object(i.jsx)(l,Object(r.a)(Object(r.a)({isActive:t,onClick:o},c),{},{children:e}))}},59:function(n,e,t){"use strict";var r=t(21),i=t(2),a=t(30),o=(t(1),t(5)),c=t(6),l=t(28),s=t(14);function d(){var n=Object(o.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return d=function(){return n},n}function u(){var n=Object(o.a)(["\n    margin-bottom: 3rem;\n    /* "," */\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return u=function(){return n},n}var v=c.c.div(u(),s.g),b=Object(c.c)(l.a)(d(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,o=n.setActiveIndex,c=Object(a.a)(n,["items","activeIndex","setActiveIndex"]);return Object(i.jsx)(v,Object(r.a)(Object(r.a)({},c),{},{children:Object(i.jsx)("ul",{children:e.map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(b,{active:n.id===t,onClick:function(){return o(n.id)},children:n.name})},n.id)}))})}))}}}]);
//# sourceMappingURL=11.e9f46146.chunk.js.map