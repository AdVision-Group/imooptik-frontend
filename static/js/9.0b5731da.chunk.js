(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[9,18],{228:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(10),c=t(0),o=t(58),i=t(16),s=t(2),u=t(53),l=t(57),d=t(50),b=t(52),f=t(8),m=t(9),p=t(26);function j(){var e=Object(f.a)(["\n    font-size: 1.2rem;\n    background-color: #ebac01;\n"]);return j=function(){return e},e}function h(){var e=Object(f.a)(["\n    font-size: 1.2rem;\n    margin-right: 1rem;\n"]);return h=function(){return e},e}function g(){var e=Object(f.a)(["\n    grid-area: o;\n\n    align-self: end;\n    justify-self: end;\n"]);return g=function(){return e},e}function v(){var e=Object(f.a)(["\n    grid-area: p;\n\n    text-align:end;\n    align-self: center;\n    justify-self: end;\n"]);return v=function(){return e},e}function O(){var e=Object(f.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return O=function(){return e},e}function x(){var e=Object(f.a)(["\n    font-size: 1.4rem;\n    font-weight: 700;\n    color: #32AA5F;\n    margin-bottom: 1rem;\n"]);return x=function(){return e},e}function y(){var e=Object(f.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return y=function(){return e},e}function k(){var e=Object(f.a)(["\n    grid-area: c;\n\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return k=function(){return e},e}function C(){var e=Object(f.a)(["\n    /* width: 100%; */\n    /* height: 100%; */\n    /* background-color: #eee; */\n    margin-right: 2rem;\n    grid-area: i;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        object-position: start;\n    }  \n\n    @media all and (max-width: 800px) {\n        align-self: start;\n        grid-row-start: 1;\n        grid-row-end: 3;   \n\n        @media all and (max-width: 500px) {\n            justify-self: center;\n            margin-bottom: 2rem;\n        }\n\n    }\n"]);return C=function(){return e},e}function w(){var e=Object(f.a)(['\n    width: 100%;\n    display: grid;\n    grid-template-columns: 15rem 1fr 25rem;\n    grid-template-rows: 1fr auto;\n    grid-template-areas:    "i c p"\n                            "i c o";\n\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns : 20rem 1fr;\n        grid-template-rows: 1fr 1fr;\n\n        @media all and (max-width: 500px) {\n            grid-template-columns : 1fr;\n        }\n    }\n\n']);return w=function(){return e},e}var S=m.c.div(w()),T=m.c.div(C()),P=m.c.div(k()),L=m.c.p(y()),A=m.c.p(x()),N=m.c.p(O()),z=m.c.div(v()),B=m.c.div(g()),E=Object(m.c)(p.a)(h()),D=Object(m.c)(p.a)(j()),I=function(e){var n=e.product,t=e.handleDeleteButton,a=e.handleUpdateButton,c=e.activePremisesTab,o=n.name,i=n.available,s=n.eanCode,u=n.price,l=n.image;return Object(r.jsxs)(S,{children:[Object(r.jsx)(T,{children:l&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(l.imagePath),alt:l.alt})}),Object(r.jsxs)(P,{children:[Object(r.jsx)("h2",{children:o}),Object(r.jsx)(L,{children:s})]}),Object(r.jsxs)(z,{children:[Object(r.jsxs)(N,{children:[(u/100).toFixed(2),"\u20ac"]}),Object(r.jsx)(A,{children:Object(b.d)(i,c)})]}),Object(r.jsxs)(B,{children:[Object(r.jsx)(E,{onClick:a,children:"Upravi\u0165"}),Object(r.jsx)(D,{onClick:t,children:"Vymaza\u0165"})]})]})},R=t(31);n.default=function(){var e=Object(s.h)().push,n=Object(c.useContext)(i.a),t=n.closeModal,b=n.showModal,f=n.isLoading,m=n.message,p=Object(c.useState)(""),j=Object(a.a)(p,2),h=j[0],g=j[1],v=Object(c.useState)([]),O=Object(a.a)(v,2),x=O[0],y=O[1],k=Object(c.useContext)(o.WarehouseContext),C=k.activePremisesTab,w=k.products,S=k.retailPremisesTabs,T=k.getProductsByQuery,P=k.handleChangePremisesTab,L=k.productCategoryTypeTabs,A=k.activeCategoryTypeTab,N=k.handleChangeCategoryTypeTab;return Object(c.useEffect)((function(){w||T({limit:10}),w&&y(w)}),[w]),Object(c.useEffect)((function(){!h&&w&&0===A&&T({limit:10})}),[h]),Object(r.jsxs)("section",{children:[b&&Object(r.jsx)(R.a,{loading:f,title:m,close:t}),Object(r.jsx)(u.a,{title:"Sklad",searchQuery:h,handleSearch:function(){""!==h&&0===A&&T({query:h})},handleChange:function(e){return g(e.target.value)},handleAddButton:function(){return e("sklad/novy-produkt")}}),Object(r.jsx)(l.a,{items:S,activeIndex:C,setActiveIndex:P}),Object(r.jsx)(l.a,{items:L,activeIndex:A,setActiveIndex:N}),Object(r.jsx)(d.a,{children:x.map((function(e,n){return Object(r.jsx)(I,{product:e,activePremisesTab:C},n)}))})]})}},49:function(e,n,t){"use strict";var r=t(1),a=t(19),c=t(29),o=(t(0),t(8)),i=t(9);function s(){var e=Object(o.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return e},e}function u(){var e=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return e},e}var l=Object(i.b)(u()),d=i.c.div(s(),l,l);n.a=function(e){var n=e.handleChange,t=e.label,o=e.name,i=Object(c.a)(e,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:o,onChange:n},i)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},50:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(8)),c=t(9),o=t(28);function i(){var e=Object(a.a)(["\n    max-width: 115rem;\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return s=function(){return e},e}var u=c.c.div(s(),o.b),l=c.c.div(i());n.a=function(e){var n=e.children;return Object(r.jsx)(u,{children:Object(r.jsx)(l,{children:n})})}},51:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(20);var a=t(32);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},52:function(e,n,t){"use strict";t.d(n,"h",(function(){return r})),t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return c})),t.d(n,"k",(function(){return o})),t.d(n,"j",(function(){return i})),t.d(n,"i",(function(){return s})),t.d(n,"a",(function(){return u})),t.d(n,"e",(function(){return l})),t.d(n,"d",(function(){return d})),t.d(n,"b",(function(){return b})),t.d(n,"c",(function(){return m}));var r={name:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[1001,1001,1001,1001,0],eanCode:"",image:"",eshop:!0,link:"",category:""},a={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},c={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:""},o=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],i=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"\u0160o\u0161ovky",value:0}],s=[{id:0,name:"V\u0161etko",premises:0},{id:1,name:"Obchodn\xe1 57, Bratislava",premises:1},{id:2,name:"Mileti\u010dova 38, Bratislava",premises:2},{id:3,name:"Senica, OC Bran\u010d",premises:3},{id:4,name:"Vajnory, Bratislava",premises:4}],u=[{id:0,name:"Okuliare"},{id:1,name:"\u0160osovky"}],l=function(e){var n=0;return e.includes(",")?1===e.split(",")[1].length?(n=e.split(",")[0]+e.split(",")[1]+"0",Number(n)):(n=e.split(",")[0]+e.split(",")[1],Number(n)):Number(100*e)},d=function(e,n){return void 0===e?"\u0160osovka":"number"===typeof e?"Na sklade ".concat(e," kusov"):0===n?"Vo v\u0161etk\xfdch skladoch je ".concat(e.reduce((function(e,n){return e+n}))," kusov"):"Na sklade ".concat(e[n]," kusov")},b=function(e,n){return 0===e.length||1001===e[n]?"":e[n].toString()},f="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",m=function(e){for(var n="",t=0;t<e.length;t++)-1!=f.indexOf(e.charAt(t))?n+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(f.indexOf(e.charAt(t))):n+=e.charAt(t);return n}},53:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(49)),c=t(8),o=t(9),i=t(26),s=t(28);function u(){var e=Object(c.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: rgb(235, 172, 1);\n    font-weight: bolder;\n"]);return u=function(){return e},e}function l(){var e=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return e},e}function d(){var e=Object(c.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return e},e}function b(){var e=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return e},e}function f(){var e=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return f=function(){return e},e}function m(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return m=function(){return e},e}var p=o.c.div(m(),s.b),j=o.c.div(f()),h=o.c.div(b()),g=(o.c.div(d()),Object(o.c)(i.a)(l())),v=Object(o.c)(i.a)(u());n.a=function(e){var n=e.searchQuery,t=e.handleSearch,c=e.handleChange,o=e.title,i=(e.count,e.handleAddButton),s=void 0===i?function(){}:i;return Object(r.jsxs)(p,{children:[Object(r.jsx)(j,{children:Object(r.jsx)("h1",{children:o})}),Object(r.jsxs)(h,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{type:"search",name:"searchbox",value:n,handleChange:c,onKeyPress:function(e){""!==n&&"Enter"===e.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(g,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(v,{onClick:s,children:"Prida\u0165"})]})]})}},57:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(8)),c=t(9),o=t(26),i=t(28);function s(){var e=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return s=function(){return e},e}function u(){var e=Object(a.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return u=function(){return e},e}var l=c.c.div(u(),i.b),d=Object(c.c)(o.a)(s(),(function(e){return e.active?"#000":"#fff"}),(function(e){return e.active?"#fff":"#000"}),(function(e){return e.active?400:700}),(function(e){return e.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));n.a=function(e){var n=e.items,t=e.activeIndex,a=e.setActiveIndex;return Object(r.jsx)(l,{children:Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(d,{active:e.id===t,onClick:function(){return a(e.id)},children:e.name})},e.id)}))})})}},58:function(e,n,t){"use strict";t.r(n),t.d(n,"WarehouseContext",(function(){return j}));var r=t(1),a=t(4),c=t.n(a),o=t(11),i=t(30),s=t(51),u=t(19),l=t(10),d=t(0),b=t(2),f=t(16),m=t(17),p=t(52),j=Object(d.createContext)({eanCode:null,product:{},lenses:{},contactLensesParameters:{},totalProducts:0,totalLenses:0,activePremisesTab:0,activeCategoryTypeTab:0,retailPremisesTabs:[],productCategoryTypeTabs:[],products:null,handleChangeCategoryTypeTab:function(){},handleChangePremisesTab:function(){},getProductsByQuery:function(){},handleProductChange:function(){},handleProductAvailableChange:function(){},getSingleProduct:function(){},createProduct:function(){},getSingleLenses:function(){},getLenses:function(){},createLenses:function(){},handleLensesChange:function(){},handleLensesParameterChange:function(){},resetProduct:function(){},resetLenses:function(){},resetContactLenses:function(){},getEanCode:function(){},handleAddNewParameter:function(){},handleContactLensesParameterChange:function(){}});n.default=function(e){var n=e.children,t=Object(b.h)().push,a=Object(d.useContext)(m.a),h=a.token,g=a.isAdmin,v=a.currentUser,O=a.stats,x=Object(d.useContext)(f.a),y=x.closeModal,k=x.setIsLoading,C=x.setShowModal,w=x.getMessage,S=Object(d.useState)(0),T=Object(l.a)(S,2),P=T[0],L=T[1],A=Object(d.useState)(0),N=Object(l.a)(A,2),z=N[0],B=N[1],E=Object(d.useState)(null),D=Object(l.a)(E,2),I=D[0],R=D[1],M=Object(d.useState)(Object(u.a)({},p.h)),V=Object(l.a)(M,2),F=V[0],J=V[1],Q=Object(d.useState)(Object(u.a)({},p.g)),U=Object(l.a)(Q,2),G=U[0],K=U[1],W=Object(d.useState)(Object(u.a)({},p.f)),q=Object(l.a)(W,2),H=q[0],Y=q[1],Z=Object(d.useState)(null),X=Object(l.a)(Z,2),$=X[0],_=X[1],ee=Object(d.useState)(0),ne=Object(l.a)(ee,2),te=ne[0],re=ne[1],ae=Object(d.useState)([]),ce=Object(l.a)(ae,2),oe=ce[0],ie=ce[1],se=Object(d.useState)(p.a),ue=Object(l.a)(se,2),le=ue[0],de=(ue[1],Object(d.useState)(0)),be=Object(l.a)(de,2),fe=be[0],me=be[1],pe=new Headers;pe.append("auth-token",h),pe.append("Content-Type","application/json");var je=function(){var e=Object(o.a)(c.a.mark((function e(){var n,t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),C(!0),n={method:"GET",headers:pe,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/nextEanCode"),n);case 6:return t=e.sent,e.next=9,t.json();case 9:if(r=e.sent,console.log(r),!r.eanCode){e.next=15;break}return R(r.eanCode),y(),e.abrupt("return");case 15:w(r.message),k(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0),w("Nieco sa pokazilo"),k(!1);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(o.a)(c.a.mark((function e(n){var t,r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),C(!0),console.log(n),t=JSON.stringify(n),r={method:"POST",headers:pe,body:t,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/filter"),r);case 8:return a=e.sent,e.next=11,a.json();case 11:if(o=e.sent,console.log(o),!o.products){e.next=17;break}return _(o.products),y(),e.abrupt("return");case 17:w(o.message),k(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),w("Nieco sa pokazilo"),k(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(n){return e.apply(this,arguments)}}(),ge=function(){var e=Object(o.a)(c.a.mark((function e(){var n,t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),C(!0),n={method:"GET",headers:pe,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses"),n);case 6:return t=e.sent,e.next=9,t.json();case 9:if(r=e.sent,console.log(r),!r.lenses){e.next=15;break}return _(r.lenses),y(),e.abrupt("return");case 15:w(r.message),k(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0),w("Nieco sa pokazilo"),k(!1);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(o.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),C(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/store/products/").concat(n));case 5:return t=e.sent,e.next=8,t.json();case 8:if(r=e.sent,console.log(r),!r.product){e.next=14;break}return J(r.product),y(),e.abrupt("return");case 14:w(r.message),k(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),w("Nieco sa pokazilo"),k(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(n){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(o.a)(c.a.mark((function e(n){var r,a,o,i,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),C(!0),r=Object(p.c)(n.name).replaceAll(" ","-").toLowerCase().trim(),a=Object(u.a)(Object(u.a)({},n),{},{price:Object(p.e)(n.price.toString()),link:r,available:n.available?n.available.map((function(e){return 1001===e?0:e})):[0,0,0,0,0]}),n.contactLenses&&(n.contactLenses.allowedCurves&&(a=Object(u.a)(Object(u.a)({},a),{},{contactLenses:Object(u.a)(Object(u.a)({},a.contactLenses),{},{allowedCurves:n.contactLenses.allowedCurves.map((function(e){return Number(e)}))})})),n.contactLenses.allowedDiameters&&(a=Object(u.a)(Object(u.a)({},a),{},{contactLenses:Object(u.a)(Object(u.a)({},a.contactLenses),{},{allowedDiameters:n.contactLenses.allowedDiameters.map((function(e){return Number(e)}))})})),n.contactLenses.dioptersRange&&(a=Object(u.a)(Object(u.a)({},a),{},{contactLenses:Object(u.a)(Object(u.a)({},a.contactLenses),{},{dioptersRange:n.contactLenses.dioptersRange.map((function(e){return Number(e)}))})}))),console.log("modifiedProduct"),console.log(a),o=JSON.stringify(Object(u.a)(Object(u.a)({},n),{},{price:Object(p.e)(n.price.toString()),link:r,available:n.available?n.available.map((function(e){return 1001===e?0:e})):[0,0,0,0,0]})),i={method:"POST",headers:pe,body:o,redirect:"follow"},e.prev=9,e.next=12,fetch("".concat("http://195.110.58.166:8080","/api/admin/products"),i);case 12:return s=e.sent,e.next=15,s.json();case 15:if(l=e.sent,console.log(l),!l.product){e.next=23;break}return t("/dashboard/obchod"),he({limit:10}),R(null),y(),e.abrupt("return");case 23:w(l.message),k(!1),e.next=32;break;case 27:e.prev=27,e.t0=e.catch(9),console.log(e.t0),w("Nieco sa pokazilo"),k(!1);case 32:case"end":return e.stop()}}),e,null,[[9,27]])})));return function(n){return e.apply(this,arguments)}}(),xe=function(){var e=Object(o.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),C(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/store/lenses/").concat(n));case 5:return t=e.sent,e.next=8,t.json();case 8:if(r=e.sent,console.log(r),!r.lenses){e.next=14;break}return K(r.lenses),y(),e.abrupt("return");case 14:w(r.message),k(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),w("Nieco sa pokazilo"),k(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(n){return e.apply(this,arguments)}}(),ye=function(){var e=Object(o.a)(c.a.mark((function e(n){var r,a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),C(!0),r=JSON.stringify(Object(u.a)(Object(u.a)({},n),{},{price:Object(p.e)(n.price.toString())})),a={method:"POST",headers:pe,body:r,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses"),a);case 7:return o=e.sent,e.next=10,o.json();case 10:if(i=e.sent,console.log(i),!i.lenses){e.next=17;break}return t("/dashboard/obchod"),ge(),y(),e.abrupt("return");case 17:w(i.message),k(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(4),console.log(e.t0),w("Nieco sa pokazilo"),k(!1);case 26:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(n){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){$&&(console.log("GET ".concat(le[fe].name," DATA")),0===fe?he({limit:10}):ge())}),[fe]),Object(d.useEffect)((function(){console.log("SET PREMISES"),v&&(g?(ie(p.i),re(0)):(ie(p.i.filter((function(e){return e.premises===v.premises}))),re(0)))}),[v,g]),Object(d.useEffect)((function(){O&&(console.log("SET STATS"),L(O.products),B(O.lenses))}),[O]),Object(r.jsx)(j.Provider,{value:{eanCode:I,product:F,lenses:G,contactLensesParameters:H,totalProducts:P,totalLenses:z,activePremisesTab:te,activeCategoryTypeTab:fe,retailPremisesTabs:oe,productCategoryTypeTabs:le,products:$,handleChangeCategoryTypeTab:function(e){me(e)},handleChangePremisesTab:function(e){re(e)},getProductsByQuery:he,handleProductChange:function(e){var n=e.target,t=n.name,r=n.value;J(Object(u.a)(Object(u.a)({},F),{},Object(i.a)({},t,r)))},handleProductAvailableChange:function(e,n){var t=e.target,r=t.name,a=t.value,c=F[r];c[n]=""===a?1001:Number(a),J(Object(u.a)(Object(u.a)({},F),{},Object(i.a)({},r,c)))},getLenses:ge,getSingleProduct:ve,createProduct:Oe,getSingleLenses:xe,createLenses:ye,handleLensesChange:function(e){var n=e.target,t=n.name,r=n.value;K(Object(u.a)(Object(u.a)({},G),{},Object(i.a)({},t,r)))},handleLensesParameterChange:function(e,n){var t=e.target,r=t.name,a=t.value,c=G[r];c[n]=""===a?1001:Number(a),K(Object(u.a)(Object(u.a)({},G),{},Object(i.a)({},r,c)))},resetProduct:function(){J(Object(u.a)(Object(u.a)({},p.h),{},{available:[1001,1001,1001,1001,0]})),R(null)},resetLenses:function(){K(Object(u.a)(Object(u.a)({},p.g),{},{dioptersRange:[1001,1001],cylinderRange:[1001,1001]}))},resetContactLenses:function(){Y({allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]})},getEanCode:je,handleAddNewParameter:function(e){var n=e.target.name;Y(Object(u.a)(Object(u.a)({},H),{},Object(i.a)({},n,[].concat(Object(s.a)(H[n]),[1001]))))},handleContactLensesParameterChange:function(e,n){var t=e.target,r=t.name,a=t.value,c=H[r];c[n]=""===a?1001:a,Y(Object(u.a)(Object(u.a)({},H),{},Object(i.a)({},r,c)))}},children:n})}}}]);
//# sourceMappingURL=9.0b5731da.chunk.js.map