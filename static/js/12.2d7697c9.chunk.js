(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[12,28],{246:function(n,e,t){"use strict";t.r(e),t.d(e,"analyticsRetailNames",(function(){return ln}));var r=t(2),i=t(31),a=t(13),o=t(5),c=t(1),l=t(93),s=t(19),d=t(20),u=t(60),b=t(56),v=t(32),j=t(53),m=t(21),h=t.n(m),p=t(55),f=t(6),O=t(7),x=t(28);function g(){var n=Object(f.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n    margin-bottom: 2rem;\n"]);return g=function(){return n},n}function k(){var n=Object(f.a)(["\n    display: block;\n    margin: 2rem auto 0;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return k=function(){return n},n}function y(){var n=Object(f.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return y=function(){return n},n}function w(){var n=Object(f.a)(["\n    width:100%;\n    max-width: 65rem;\n    max-height: 60rem;\n\n    overflow-y: scroll;\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--background-primary-color);\n    color: var(--primary-text-color);\n\n    position: relative;\n    z-index: 999999;\n\n    h2{ \n        margin-bottom: 2rem;\n        text-align: center;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return w=function(){return n},n}function C(){var n=Object(f.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return C=function(){return n},n}var S=O.c.div(C()),B=O.c.div(w()),z=O.c.button(y()),A=Object(O.c)(x.a)(k()),M=O.c.select(g()),P=function(n){var e=n.close,t=Object(l.useAnalytics)().updateRegistry,s=Object(c.useState)({amount:0,premises:0}),d=Object(o.a)(s,2),u=d[0],b=d[1],v=function(n){var e=n.target,t=e.name,r=e.value;b((function(n){return Object(a.a)(Object(a.a)({},n),{},Object(i.a)({},t,r))}))};return h.a.createPortal(Object(r.jsxs)(S,{children:[Object(r.jsx)(z,{onClick:e}),Object(r.jsxs)(B,{children:[Object(r.jsx)("h2",{children:"Upravi\u0165 stav pokladne"}),Object(r.jsx)("h3",{children:"Priradi\u0165 k prev\xe1dzke"}),Object(r.jsxs)(M,{value:u.premises,name:"premises",onChange:function(n){return v(n)},children:[Object(r.jsx)("option",{value:0,children:"Nezadan\xe9"}),p.g.map((function(n,e){if(0!==e)return Object(r.jsx)("option",{value:e,children:n},e)}))]}),Object(r.jsx)("h3",{children:"Mno\u017estvo ktor\xe9 chcete vlo\u017ei\u0165/vybra\u0165"}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Vlo\u017ete sumu*",name:"amount",value:u.amount.toString(),handleChange:v})}),Object(r.jsx)(A,{onClick:function(n){n.preventDefault(),0!==u.amount&&t(u,(function(n){console.log(n)}))},children:"Odosla\u0165"})]})]}),document.getElementById("portal"))},R=[{id:1,name:"V\u0161etko",value:"all"},{id:2,name:"De\u0148",value:"day"},{id:3,name:"T\xfd\u017ede\u0148",value:"week"},{id:4,name:"Mesiac",value:"month"},{id:5,name:"Rok",value:"year"}],T=t(15),V=t(58);function F(){var n=Object(f.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n"]);return F=function(){return n},n}function E(){var n=Object(f.a)(["\n    margin-top: 1rem;\n    margin-right: 1rem;\n"]);return E=function(){return n},n}function H(){var n=Object(f.a)(["\n    margin-bottom: 2rem;\n"]);return H=function(){return n},n}function N(){var n=Object(f.a)(["\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return N=function(){return n},n}function I(){var n=Object(f.a)(["\n    margin-top: 5rem;\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n\n    h2 {\n        margin-bottom: 2rem;\n    }\n"]);return I=function(){return n},n}function D(){var n=Object(f.a)(["\n    max-width: 50rem;\n    margin-bottom: 5rem;\n"]);return D=function(){return n},n}function J(){var n=Object(f.a)(["\n    font-size: 1.2rem;\n"]);return J=function(){return n},n}function K(){var n=Object(f.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            /* margin-bottom: 1rem; */\n            opacity: .6;\n\n            span {\n                display: block;\n                font-size: 1.2rem\n            }\n        }\n\n        p {\n            font-size: 4rem;\n        }\n\n        :nth-of-type(1) {\n            h3 {\n                margin-bottom: 1.8rem;\n            }\n        }\n    }\n"]);return K=function(){return n},n}function G(){var n=Object(f.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            margin-bottom: 1rem;\n            opacity: .6;\n\n        }\n\n        p {\n            font-size: 4rem;\n        }\n    }\n\n"]);return G=function(){return n},n}function L(){var n=Object(f.a)(["\n    /* display: grid; */\n    /* grid-template-columns: 1fr 1fr; */\n    /* grid-gap: 4rem; */\n"]);return L=function(){return n},n}function Z(){var n=Object(f.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 2rem;\n    margin-bottom: 4rem;\n\n    div {\n        background-color: var(--body-background-primary-color);\n        padding: 2rem;\n        border-radius: .5rem;\n        text-align: center;\n\n        h3 {\n            font-weight: lighter;\n            margin-bottom: 1rem;\n            opacity: .6;\n\n        }\n\n        p {\n            font-size: 4rem;\n        }\n    }\n"]);return Z=function(){return n},n}function q(){var n=Object(f.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n"]);return q=function(){return n},n}var U=O.c.div(q(),T.g),_=O.c.div(Z()),Q=O.c.div(L()),W=O.c.div(G()),X=O.c.div(K()),Y=Object(O.c)(x.a)(J()),$=O.c.div(D()),nn=O.c.div(I()),en=Object(O.c)(x.a)(N()),tn=O.c.div(H()),rn=Object(O.c)(V.a)(E()),an=O.c.div(F()),on=(e.default=function(){var n=Object(c.useContext)(s.a),e=n.closeModal,t=n.isLoading,m=n.message,h=n.showModal,p=Object(c.useContext)(d.a),f=p.stats,O=p.isAdmin,x=p.currentUser,g=Object(c.useContext)(l.AnalyticsContext),k=g.stats,y=g.getAnalytics,w=g.generateReport,C=O?ln:ln.filter((function(n){return n.id===x.premises||0===n.id})),S=Object(c.useState)(x.premises||0),B=Object(o.a)(S,2),z=B[0],A=B[1],M=Object(c.useState)(2),V=Object(o.a)(M,2),F=V[0],E=V[1],H=Object(c.useState)(null),N=Object(o.a)(H,2),I=N[0],D=N[1],J=Object(c.useState)({}),K=Object(o.a)(J,2),G=K[0],L=K[1],Z=Object(c.useState)(on[0].value),q=Object(o.a)(Z,2),sn=q[0],dn=q[1],un=Object(c.useState)(cn[0].value),bn=Object(o.a)(un,2),vn=bn[0],jn=bn[1],mn=Object(c.useState)({}),hn=Object(o.a)(mn,2),pn=hn[0],fn=hn[1],On=Object(c.useState)(!1),xn=Object(o.a)(On,2),gn=xn[0],kn=xn[1],yn=function(n){kn(n)},wn=function(n){var e=n.target,t=e.name,r=e.value;if(""===r)return delete G[t],void L(Object(a.a)({},G));L(Object(a.a)(Object(a.a)({},G),{},Object(i.a)({},t,r)))},Cn=function(n){var e=n.target,t=e.name,r=e.value;if(""===r)return delete pn[t],void fn(Object(a.a)({},pn));fn(Object(a.a)(Object(a.a)({},pn),{},Object(i.a)({},t,r)))};return Object(c.useEffect)((function(){if((null===pn||void 0===pn?void 0:pn.from)&&(null===pn||void 0===pn?void 0:pn.to)){var n=null===pn||void 0===pn?void 0:pn.from.split("-").reverse().join("/"),e=null===pn||void 0===pn?void 0:pn.to.split("-").reverse().join("/");y("".concat(n,":").concat(e))}}),[pn]),Object(c.useEffect)((function(){jn(cn[0].value)}),[sn]),Object(c.useEffect)((function(){y(R[F-1].value)}),[F]),Object(c.useEffect)((function(){k&&D(null===k||void 0===k?void 0:k.find((function(n){return n._id.premises===z})))}),[k,z]),Object(c.useEffect)((function(){return function(){A(0),E(2),D(null),L({}),dn(on[0].value),jn(cn[0].value)}}),[]),Object(r.jsxs)("section",{children:[h&&Object(r.jsx)(v.a,{loading:t,title:m,close:e}),gn&&Object(r.jsx)(P,{close:function(){return yn(!1)}}),Object(r.jsx)(U,{children:Object(r.jsx)("h1",{children:"Analytik\xe1"})}),Object(r.jsx)(T.d,{children:Object(r.jsx)(T.c,{children:Object(r.jsx)(u.a,{items:C,activeIndex:z,setActiveIndex:A})})}),Object(r.jsx)(T.d,{children:Object(r.jsx)(T.c,{children:Object(r.jsx)(u.a,{items:R,activeIndex:F,setActiveIndex:function(n){E(n),fn({})}})})}),Object(r.jsxs)(b.a,{children:[Object(r.jsxs)($,{children:[Object(r.jsx)("h3",{children:"D\xe1tum:"}),Object(r.jsxs)(an,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Od:"}),Object(r.jsx)(j.a,{label:"",value:(null===pn||void 0===pn?void 0:pn.from)||"",type:"date",name:"from",handleChange:Cn})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Do:"}),Object(r.jsx)(j.a,{label:"",value:(null===pn||void 0===pn?void 0:pn.to)||"",type:"date",name:"to",handleChange:Cn})]})]})]}),O&&Object(r.jsxs)(_,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Z\xe1kazn\xedci"}),Object(r.jsx)("p",{children:null===f||void 0===f?void 0:f.users})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Produkty"}),Object(r.jsx)("p",{children:null===f||void 0===f?void 0:f.products})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"\u0160o\u0161ovky"}),Object(r.jsx)("p",{children:null===f||void 0===f?void 0:f.lenses})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Z\xe1kazky"}),Object(r.jsx)("p",{children:null===f||void 0===f?void 0:f.orders})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Vy\u0161etrenia"}),Object(r.jsx)("p",{children:null===f||void 0===f?void 0:f.bookings})]})]}),k&&Object(r.jsx)(Q,{children:I?Object(r.jsxs)(X,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Tr\u017eba"}),Object(r.jsxs)("p",{children:[(((null===I||void 0===I?void 0:I.cash)+(null===I||void 0===I?void 0:I.card)+(null===I||void 0===I?void 0:I.coupons)+(null===I||void 0===I?void 0:I.eshopPickupPayments))/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Stav pokladne"}),Object(r.jsxs)("p",{children:[((null===I||void 0===I?void 0:I.cashRegistry)/100).toFixed(2),"\u20ac"]}),Object(r.jsx)(Y,{onClick:function(){return yn(!0)},children:"Upravi\u0165"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"hodnota nov\xfdch z\xe1kazok"}),Object(r.jsxs)("p",{children:[((null===I||void 0===I?void 0:I.potential)/100).toFixed(2),"\u20ac"]})]})]}):Object(r.jsx)(X,{children:Object(r.jsx)("p",{children:"\u017diadn\xe9 \u0161tatistiky"})})}),k&&Object(r.jsx)(Q,{children:I&&Object(r.jsxs)(W,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Hotovos\u0165"}),Object(r.jsxs)("p",{children:[((null===I||void 0===I?void 0:I.cash)/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Karta"}),Object(r.jsxs)("p",{children:[((null===I||void 0===I?void 0:I.card)/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Kup\xf3ny"}),Object(r.jsxs)("p",{children:[((null===I||void 0===I?void 0:I.coupons)/100).toFixed(2),"\u20ac"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Objedn\xe1vky"}),Object(r.jsx)("p",{children:null===I||void 0===I?void 0:I.orders})]})]})}),O&&Object(r.jsxs)(nn,{children:[Object(r.jsx)("h2",{children:"Vytvori\u0165 report"}),Object(r.jsxs)(tn,{children:[Object(r.jsx)("h5",{children:"Typ reportu"}),on.map((function(n,e){return Object(r.jsx)(rn,{label:n.name,isActive:sn===n.value,handleClick:function(){return dn(n.value)}},e)}))]}),"users"!==sn&&Object(r.jsxs)(tn,{children:[Object(r.jsx)("h5",{children:"Prev\xe1dzka"}),cn.map((function(n,e){return Object(r.jsx)(rn,{label:n.name,isActive:vn===n.value,handleClick:function(){return jn(n.value)}},e)}))]}),"users"!==sn?Object(r.jsxs)(an,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Od:"}),Object(r.jsx)(j.a,{label:"",value:(null===G||void 0===G?void 0:G.from)||"",type:"date",name:"from",handleChange:wn})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Do:"}),Object(r.jsx)(j.a,{label:"",value:(null===G||void 0===G?void 0:G.to)||"",type:"date",name:"to",handleChange:wn})]})]}):Object(r.jsx)("div",{style:{marginBottom:"2rem"},children:Object(r.jsx)("p",{children:"\u017diadne mo\u017enosti"})}),Object(r.jsx)(en,{onClick:function(){if((null===G||void 0===G?void 0:G.from)||(null===G||void 0===G?void 0:G.to)){var n=null===G||void 0===G?void 0:G.from.split("-").reverse().join("/"),e=null===G||void 0===G?void 0:G.to.split("-").reverse().join("/"),t=Object(a.a)({type:sn,timespan:"users"===sn?"all":"".concat(n,":").concat(e)},"users"!==sn&&{filters:{premises:vn}});w(t)}else{var r=Object(a.a)({type:sn,timespan:"all"},"users"!==sn&&{filters:{premises:vn}});w(r)}},children:"Generova\u0165"})]})]})]})},[{name:"Z\xe1kazn\xedci",value:"users"},{name:"Produkty",value:"products"},{name:"Z\xe1kazky",value:"orders"}]),cn=[{name:"Centr\xe1lny sklad",value:1},{name:"Obchodn\xe1, Bratislava",value:2},{name:"Mileti\u010dova, Bratislava",value:3},{name:"Vajnory, Bratislava",value:4},{name:"Vajnorsk\xe1 53, Bratislava",value:5},{name:"OC Bran\u010d, Senica",value:6}],ln=[{id:1,name:"Centr\xe1lny sklad"},{id:2,name:"Obchodn\xe1, Bratislava"},{id:3,name:"Mileti\u010dova, Bratislava"},{id:4,name:"Vajnory, Bratislava"},{id:5,name:"Vajnorsk\xe1 53, Bratislava"},{id:6,name:"OC Bran\u010d, Senica"}]},53:function(n,e,t){"use strict";var r=t(2),i=t(13),a=t(30),o=(t(1),t(6)),c=t(7);function l(){var n=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var d=Object(c.b)(s()),u=c.c.div(l(),d,d);e.a=function(n){var e=n.handleChange,t=n.label,o=n.name,c=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(u,{children:[Object(r.jsx)("input",Object(i.a)({className:"form-input",name:o,onChange:e},c)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(c.value.length?"shrink":""," form-input-label"),children:t}):null]})}},55:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"g",(function(){return i})),t.d(e,"h",(function(){return a})),t.d(e,"d",(function(){return o})),t.d(e,"e",(function(){return c})),t.d(e,"f",(function(){return l})),t.d(e,"b",(function(){return s})),t.d(e,"c",(function(){return d}));var r=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"],i=["eshop","Centr\xe1lny sklad","Obchodn\xe1, Bratislava","Mileti\u010dova, Bratislava","Vajnory, Bratislava","Vajnorsk\xe1 53, Bratislava","OC Bran\u010d, Senica"],a=[{id:0,name:"V\u0161etky"},{id:1,name:"Centr\xe1lny sklad"},{id:2,name:"Obchodn\xe1, Bratislava"},{id:3,name:"Mileti\u010dova, Bratislava"},{id:4,name:"Vajnory, Bratislava"},{id:5,name:"Vajnorsk\xe1 53, Bratislava"},{id:6,name:"OC Bran\u010d, Senica"}],o=["\u010ciern\xe1","Modr\xe1","\u010cerven\xe1","Siv\xe1","Zlat\xe1","Strieborn\xe1","Hned\xe1","Fialov\xe1","Zelen\xe1","Sed\xe1","Bordov\xe1"],c=["Acet\xe1t","Kov","Tit\xe1n","TR90","Patent","Optyl"],l=["Pilot","Squared","Browline","Cat eye","Tiny","Oversize","Okr\xfahle","Ov\xe1lne","Obd\u013a\u017enikov\xe9","Flat top","\u0160peci\xe1lne"],s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n.toString();var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)},d=function(n){return n.includes(",")?n.split(",")[0]+"."+n.split(",")[1]:n}},56:function(n,e,t){"use strict";var r=t(2),i=(t(1),t(6)),a=t(7),o=t(15);function c(){var n=Object(i.a)(["\n    max-width: 125rem;\n    width: 100%;\n"]);return c=function(){return n},n}function l(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n    /* border: 1px solid red; */\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n\n        @media all and (max-width: 700px) {\n            overflow-x: scroll;\n        }\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return l=function(){return n},n}var s=a.c.div(l(),o.g),d=a.c.div(c());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(d,{children:e})})}},58:function(n,e,t){"use strict";var r=t(13),i=t(2),a=t(30),o=(t(1),t(6));function c(){var n=Object(o.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    /* font-weight: ","; */\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return c=function(){return n},n}var l=t(7).c.div(c(),(function(n){return n.isActive?"var(--primary-color)":"var(--body-background-primary-color)"}),(function(n){return n.isActive?"var(--button-font-color)":"var(--secondary-text-color)"}),(function(n){return n.isActive?"border":"normal"}));e.a=function(n){var e=n.label,t=n.isActive,o=n.handleClick,c=Object(a.a)(n,["label","isActive","handleClick"]);return Object(i.jsx)(l,Object(r.a)(Object(r.a)({isActive:t,onClick:o},c),{},{children:e}))}},60:function(n,e,t){"use strict";var r=t(13),i=t(2),a=t(30),o=(t(1),t(6)),c=t(7),l=t(28),s=t(15);function d(){var n=Object(o.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return d=function(){return n},n}function u(){var n=Object(o.a)(["\n    margin-bottom: 3rem;\n    /* "," */\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return u=function(){return n},n}var b=c.c.div(u(),s.g),v=Object(c.c)(l.a)(d(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,o=n.setActiveIndex,c=Object(a.a)(n,["items","activeIndex","setActiveIndex"]);return Object(i.jsx)(b,Object(r.a)(Object(r.a)({},c),{},{children:Object(i.jsx)("ul",{children:e.map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(v,{active:n.id===t,onClick:function(){return o(n.id)},children:n.name})},n.id)}))})}))}},93:function(n,e,t){"use strict";t.r(e),t.d(e,"AnalyticsContext",(function(){return u})),t.d(e,"useAnalytics",(function(){return b}));var r=t(2),i=t(8),a=t.n(i),o=t(12),c=t(5),l=t(1),s=t(20),d=t(19),u=Object(l.createContext)({stats:null,getAnalytics:function(){},generateReport:function(){},updateRegistry:function(){}}),b=function(){return Object(l.useContext)(u)};e.default=function(n){var e=n.children,t=Object(l.useContext)(s.a).token,i=Object(l.useContext)(d.a),b=i.closeModal,v=i.getMessage,j=i.setShowModal,m=i.setIsLoading,h=Object(l.useState)(null),p=Object(c.a)(h,2),f=p[0],O=p[1],x=new Headers;x.append("auth-token",t),x.append("Content-Type","application/json");var g=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),m(!0),t={method:"GET",headers:x,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/stats?timespan=").concat(e),t);case 6:return r=n.sent,n.next=9,r.json();case 9:if(!(i=n.sent).stats){n.next=14;break}return O(i.stats),b(),n.abrupt("return");case 14:v(i.messageSK),m(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),m(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,i,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),m(!0),t=JSON.stringify(e),r={method:"POST",headers:x,body:t,redirect:"follow"},n.prev=4,n.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/stats/generateReport"),r);case 7:return i=n.sent,n.next=10,i.json();case 10:(o=n.sent).name&&setTimeout((function(){var n=window.open("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/uploads/excel/").concat(o.name),"_blank","noreferrer noopener");null===n||void 0===n||n.focus()}),2e3),v(o.messageSK),m(!1),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(4),console.log(n.t0),v("Nieo sa pokazilo"),m(!1);case 21:case"end":return n.stop()}}),n,null,[[4,16]])})));return function(e){return n.apply(this,arguments)}}(),y=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,i,o,c,l=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:function(){},j(!0),m(!0),r=JSON.stringify(e),i={method:"POST",headers:x,body:r,redirect:"follow"},n.prev=5,n.next=8,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/stats/modifyRegister"),i);case 8:return o=n.sent,n.next=11,o.json();case 11:c=n.sent,v(c.messageSK),t(c),m(!1),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(5),console.log(n.t0),v("Nie\u010do sa pokazilo"),m(!1);case 22:case"end":return n.stop()}}),n,null,[[5,17]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)(u.Provider,{value:{stats:f,getAnalytics:g,generateReport:k,updateRegistry:y},children:e})}}}]);
//# sourceMappingURL=12.2d7697c9.chunk.js.map