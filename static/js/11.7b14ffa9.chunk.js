(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[11,25],{240:function(n,e,r){"use strict";r.r(e);var t=r(2),a=r(31),i=r(21),o=r(10),c=r(1),l=r(99),s=r(19),u=r(18),d=r(60),b=r(54),v=r(32),m=r(52),j=r(58),h=[{id:1,name:"V\u0161etko",value:"all"},{id:2,name:"De\u0148",value:"day"},{id:3,name:"T\xfd\u017eden",value:"week"},{id:4,name:"Mesiac",value:"month"},{id:5,name:"Rok",value:"year"}],p=r(5),f=r(6),O=r(14),x=r(28),g=r(55);function k(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n"]);return k=function(){return n},n}function y(){var n=Object(p.a)(["\n    margin-top: 1rem;\n    margin-right: 1rem;\n"]);return y=function(){return n},n}function w(){var n=Object(p.a)(["\n    margin-bottom: 2rem;\n"]);return w=function(){return n},n}function C(){var n=Object(p.a)(["\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return C=function(){return n},n}function A(){var n=Object(p.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n\n    h2 {\n        margin-bottom: 2rem;\n    }\n"]);return A=function(){return n},n}function B(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            margin-bottom: 1rem;\n            opacity: .6;\n\n        }\n\n        p {\n            font-size: 4rem;\n        }\n    }\n\n"]);return B=function(){return n},n}function S(){var n=Object(p.a)(["\n    /* display: grid; */\n    /* grid-template-columns: 1fr 1fr; */\n    /* grid-gap: 4rem; */\n"]);return S=function(){return n},n}function M(){var n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            margin-bottom: 1rem;\n            opacity: .6;\n\n        }\n\n        p {\n            font-size: 4rem;\n        }\n    }\n"]);return M=function(){return n},n}function z(){var n=Object(p.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n"]);return z=function(){return n},n}var P=f.c.div(z(),O.e),E=f.c.div(M()),I=f.c.div(S()),R=f.c.div(B()),T=f.c.div(A()),F=Object(f.c)(x.a)(C()),H=f.c.div(w()),V=Object(f.c)(g.a)(y()),L=f.c.div(k()),N=(e.default=function(){var n=Object(c.useContext)(s.a),e=n.closeModal,r=n.isLoading,p=n.message,f=n.showModal,O=Object(c.useContext)(u.a),x=O.stats,g=O.isAdmin,k=O.currentUser,y=Object(c.useContext)(l.AnalyticsContext),w=y.stats,C=y.getAnalytics,A=y.generateReport,B=g?j.e:j.e.filter((function(n){return n.id===k.premises||0===n.id})),S=Object(c.useState)(0),M=Object(o.a)(S,2),z=M[0],J=M[1],D=Object(c.useState)(2),K=Object(o.a)(D,2),Z=K[0],_=K[1],U=Object(c.useState)(null),q=Object(o.a)(U,2),Q=q[0],W=q[1],X=Object(c.useState)({}),Y=Object(o.a)(X,2),$=Y[0],nn=Y[1],en=Object(c.useState)(N[0].value),rn=Object(o.a)(en,2),tn=rn[0],an=rn[1],on=Object(c.useState)(G[0].value),cn=Object(o.a)(on,2),ln=cn[0],sn=cn[1],un=function(n){var e=n.target,r=e.name,t=e.value;if(""===t)return delete $[r],void nn(Object(i.a)({},$));nn(Object(i.a)(Object(i.a)({},$),{},Object(a.a)({},r,t)))};return Object(c.useEffect)((function(){C(h[Z-1].value)}),[Z]),Object(c.useEffect)((function(){w&&W(null===w||void 0===w?void 0:w.find((function(n){return n._id.premises===z})))}),[w,z]),Object(c.useEffect)((function(){return function(){J(0),_(2),W(null),nn({}),an(N[0].value),sn(G[0].value)}}),[]),Object(t.jsxs)("section",{children:[f&&Object(t.jsx)(v.a,{loading:r,title:p,close:e}),Object(t.jsx)(P,{children:Object(t.jsx)("h1",{children:"Analytik\xe1"})}),Object(t.jsx)(d.a,{items:B,activeIndex:z,setActiveIndex:J}),Object(t.jsx)(d.a,{items:h,activeIndex:Z,setActiveIndex:_}),Object(t.jsxs)(b.a,{children:[Object(t.jsxs)(E,{children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Z\xe1kazn\xedci"}),Object(t.jsx)("p",{children:null===x||void 0===x?void 0:x.users})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Produkty"}),Object(t.jsx)("p",{children:null===x||void 0===x?void 0:x.products})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"\u0160o\u0161ovky"}),Object(t.jsx)("p",{children:null===x||void 0===x?void 0:x.lenses})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Z\xe1kazky"}),Object(t.jsx)("p",{children:null===x||void 0===x?void 0:x.orders})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Vy\u0161etrenia"}),Object(t.jsx)("p",{children:null===x||void 0===x?void 0:x.bookings})]})]}),w&&Object(t.jsx)(I,{children:Q?Object(t.jsxs)(R,{children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Hotovos\u0165"}),Object(t.jsxs)("p",{children:[((null===Q||void 0===Q?void 0:Q.cash)/100).toFixed(2),"\u20ac"]})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Karta"}),Object(t.jsxs)("p",{children:[((null===Q||void 0===Q?void 0:Q.card)/100).toFixed(2),"\u20ac"]})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Kup\xf3ny"}),Object(t.jsx)("p",{children:null===Q||void 0===Q?void 0:Q.coupons})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Objedn\xe1vky"}),Object(t.jsx)("p",{children:null===Q||void 0===Q?void 0:Q.orders})]})]}):Object(t.jsx)(R,{children:Object(t.jsx)("p",{children:"\u017diadn\xe9 \u0161tatistiky"})})}),g&&Object(t.jsxs)(T,{children:[Object(t.jsx)("h2",{children:"Vytvori\u0165 report"}),Object(t.jsxs)(H,{children:[Object(t.jsx)("h5",{children:"Typ reportu"}),N.map((function(n,e){return Object(t.jsx)(V,{label:n.name,isActive:tn===n.value,handleClick:function(){return an(n.value)}},e)}))]}),Object(t.jsxs)(H,{children:[Object(t.jsx)("h5",{children:"Prev\xe1dzka"}),G.map((function(n,e){return Object(t.jsx)(V,{label:n.name,isActive:ln===n.value,handleClick:function(){return sn(n.value)}},e)}))]}),Object(t.jsxs)(L,{children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("h5",{children:"Od:"}),Object(t.jsx)(m.a,{label:"",value:(null===$||void 0===$?void 0:$.from)||"",type:"date",name:"from",handleChange:un})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h5",{children:"Do:"}),Object(t.jsx)(m.a,{label:"",value:(null===$||void 0===$?void 0:$.to)||"",type:"date",name:"to",handleChange:un})]})]}),Object(t.jsx)(F,{onClick:function(){if((null===$||void 0===$?void 0:$.from)||(null===$||void 0===$?void 0:$.to)){var n=null===$||void 0===$?void 0:$.from.split("-").reverse().join("/"),e=null===$||void 0===$?void 0:$.to.split("-").reverse().join("/");A({type:tn,timespan:"".concat(n,":").concat(e),filters:{premises:ln}})}},children:"Generova\u0165"})]})]})]})},[{name:"Z\xe1kazn\xedci",value:"users"},{name:"Produkty",value:"products"},{name:"Z\xe1kazky",value:"orders"}]),G=[{name:"Obchodn\xe1 57, Bratislava",value:1},{name:"Mileti\u010dova 38, Bratislava",value:2},{name:"Vajnory, Bratislava",value:3},{name:"Senica, OC Bran\u010d",value:4}]},52:function(n,e,r){"use strict";var t=r(2),a=r(21),i=r(30),o=(r(1),r(5)),c=r(6);function l(){var n=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var u=Object(c.b)(s()),d=c.c.div(l(),u,u);e.a=function(n){var e=n.handleChange,r=n.label,o=n.name,c=Object(i.a)(n,["handleChange","label","name"]);return Object(t.jsxs)(d,{children:[Object(t.jsx)("input",Object(a.a)({className:"form-input",name:o,onChange:e},c)),r?Object(t.jsx)("label",{htmlFor:o,className:"".concat(c.value.length?"shrink":""," form-input-label"),children:r}):null]})}},54:function(n,e,r){"use strict";var t=r(2),a=(r(1),r(5)),i=r(6),o=r(14);function c(){var n=Object(a.a)(["\n    /* max-width: 115rem; */\n"]);return c=function(){return n},n}function l(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return l=function(){return n},n}var s=i.c.div(l(),o.e),u=i.c.div(c());e.a=function(n){var e=n.children;return Object(t.jsx)(s,{children:Object(t.jsx)(u,{children:e})})}},55:function(n,e,r){"use strict";var t=r(21),a=r(2),i=r(30),o=(r(1),r(5));function c(){var n=Object(o.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    /* font-weight: ","; */\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return c=function(){return n},n}var l=r(6).c.div(c(),(function(n){return n.isActive?"var(--primary-color)":"var(--body-background-primary-color)"}),(function(n){return n.isActive?"var(--button-font-color)":"var(--secondary-text-color)"}),(function(n){return n.isActive?"border":"normal"}));e.a=function(n){var e=n.label,r=n.isActive,o=n.handleClick,c=Object(i.a)(n,["label","isActive","handleClick"]);return Object(a.jsx)(l,Object(t.a)(Object(t.a)({isActive:r,onClick:o},c),{},{children:e}))}},58:function(n,e,r){"use strict";r.d(e,"a",(function(){return t})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return i})),r.d(e,"e",(function(){return o})),r.d(e,"b",(function(){return c}));var t=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"],a=["Acuvue","Adore","Air Optix","Biofinity","Biomedics","Clariti","ColourVue","Comfilcon A","Dailies","Freshlook","Lenjoy","Proclear","Purevision","Soflens"],i=["Obchodn\xe1 57, Bratislava","Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d"],o=[{id:0,name:"E-shop"},{id:1,name:"Obchodn\xe1 57, Bratislava"},{id:2,name:"Mileti\u010dova 38, Bratislava"},{id:3,name:"Vajnory, Bratislava"},{id:4,name:"Senica, OC Bran\u010d"}],c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n.toString();var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)}},60:function(n,e,r){"use strict";var t=r(21),a=r(2),i=r(30),o=(r(1),r(5)),c=r(6),l=r(28),s=r(14);function u(){var n=Object(o.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return u=function(){return n},n}function d(){var n=Object(o.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return d=function(){return n},n}var b=c.c.div(d(),s.e),v=Object(c.c)(l.a)(u(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,r=n.activeIndex,o=n.setActiveIndex,c=Object(i.a)(n,["items","activeIndex","setActiveIndex"]);return Object(a.jsx)(b,Object(t.a)(Object(t.a)({},c),{},{children:Object(a.jsx)("ul",{children:e.map((function(n){return Object(a.jsx)("li",{children:Object(a.jsx)(v,{active:n.id===r,onClick:function(){return o(n.id)},children:n.name})},n.id)}))})}))}},99:function(n,e,r){"use strict";r.r(e),r.d(e,"AnalyticsContext",(function(){return d}));var t=r(2),a=r(7),i=r.n(a),o=r(12),c=r(10),l=r(1),s=r(18),u=r(19),d=Object(l.createContext)({stats:null,getAnalytics:function(){},generateReport:function(){}});e.default=function(n){var e=n.children,r=Object(l.useContext)(s.a).token,a=Object(l.useContext)(u.a),b=a.closeModal,v=a.getMessage,m=a.setShowModal,j=a.setIsLoading,h=Object(l.useState)(null),p=Object(c.a)(h,2),f=p[0],O=p[1],x=new Headers;x.append("auth-token",r),x.append("Content-Type","application/json");var g=function(){var n=Object(o.a)(i.a.mark((function n(e){var r,t,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),j(!0),r={method:"GET",headers:x,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/stats?timespan=").concat(e),r);case 6:return t=n.sent,n.next=9,t.json();case 9:if(a=n.sent,console.log(a),!a.stats){n.next=15;break}return O(a.stats),b(),n.abrupt("return");case 15:v(a.messageSK),j(!1),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),j(!1);case 24:case"end":return n.stop()}}),n,null,[[3,19]])})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=Object(o.a)(i.a.mark((function n(e){var r,t,a,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),j(!0),r=JSON.stringify(e),t={method:"POST",headers:x,body:r,redirect:"follow"},n.prev=4,n.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/stats/generateReport"),t);case 7:return a=n.sent,n.next=10,a.json();case 10:o=n.sent,console.log(o),o.name&&setTimeout((function(){var n=window.open("".concat("http://195.110.58.166:8080","/uploads/excel/").concat(o.name),"_blank","noreferrer noopener");null===n||void 0===n||n.focus()}),2e3),v(o.messageSK),j(!1),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(4),console.log(n.t0),v("Nieco sa pokazilo"),j(!1);case 22:case"end":return n.stop()}}),n,null,[[4,17]])})));return function(e){return n.apply(this,arguments)}}();return Object(t.jsx)(d.Provider,{value:{stats:f,getAnalytics:g,generateReport:k},children:e})}}}]);
//# sourceMappingURL=11.7b14ffa9.chunk.js.map