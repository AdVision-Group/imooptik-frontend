(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[9,17,29],{227:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(10),o=t(0),c=t(16),i=t(78),s=t(2),u=t(57),d=t(58),l=t(51),f=t(59),b=t(7),p=t(8),m=t(26);function j(){var e=Object(b.a)(["\n    font-size: 1rem;\n\n    text-decoration: none;\n    color: #fff;\n    background-color: #000;\n    padding: .8rem 1.5rem;\n    border-radius: .5rem;\n    margin-right: 1rem;\n\n"]);return j=function(){return e},e}function h(){var e=Object(b.a)(["\n    font-size: 1rem;\n    background-color: rgb(235, 172, 1);\n"]);return h=function(){return e},e}function v(){var e=Object(b.a)(["\n    font-size: 1rem;\n    margin-right: 1rem;\n"]);return v=function(){return e},e}function O(){var e=Object(b.a)(["\n    opacity: .63;\n    top: 2rem;\n    right: 2rem;\n    text-transform: uppercase;\n"]);return O=function(){return e},e}function g(){var e=Object(b.a)(["\n    grid-column: 2;\n    align-self: end;\n    justify-self: end;\n\n"]);return g=function(){return e},e}function x(){var e=Object(b.a)(["\n    cursor: pointer;\n    justify-self: end;\n    /* text-align: end; */\n    align-self: start;\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: #f5f5f5;\n    margin-bottom: 3rem;\n    transition: background-color .3s ease-out;\n\n    &:hover {\n        background-color: #eee;\n\n    }\n\n"]);return x=function(){return e},e}function y(){var e=Object(b.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return y=function(){return e},e}function k(){var e=Object(b.a)(["\n    font-size: 1.4rem;\n    /* font-weight: 700; */\n    color: gray;\n    /* margin-bottom: 2rem; */\n"]);return k=function(){return e},e}function S(){var e=Object(b.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return S=function(){return e},e}function w(){var e=Object(b.a)(["\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return w=function(){return e},e}function C(){var e=Object(b.a)(["\n    position:relative;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 35rem;\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns: 1fr;\n\n    }\n"]);return C=function(){return e},e}var P=p.c.div(C()),A=p.c.div(w()),D=p.c.p(S()),z=p.c.p(k()),B=(p.c.p(y()),p.c.div(x())),U=p.c.div(g()),M=p.c.p(O()),N=Object(p.c)(m.a)(v()),T=Object(p.c)(m.a)(h()),L=p.c.a(j()),I=function(e){var n=e.order,t=e.handleUpdateClick,a=n._id,o=n.date,c=n.status,i=new Date(o);return console.log(f.e),Object(r.jsxs)(P,{children:[Object(r.jsxs)(A,{children:[Object(r.jsx)("h2",{children:"ID objedn\xe1vky"}),Object(r.jsx)(D,{children:a}),Object(r.jsx)(z,{children:i.toLocaleDateString("sk-SK",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),Object(r.jsxs)(B,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(M,{children:c}),Object(r.jsx)("p",{children:"Vybavuje:"}),Object(r.jsx)("p",{children:0===n.premises?"Neuveden\xe9":f.e[n.premises]})]}),Object(r.jsx)("div",{})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(L,{href:"".concat("http://195.110.58.166:8080","/uploads/pdf/").concat(n.pdfPath),target:"_blank",rel:"noreferrer noopener",children:"Zobraz PDF"}),Object(r.jsx)(N,{onClick:t,children:"Zobrazi\u0165"}),Object(r.jsx)(T,{children:"Vymaza\u0165"})]})]})},E=t(30);n.default=function(){var e=Object(s.g)().push,n=Object(o.useContext)(c.a),t=n.closeModal,f=n.isLoading,b=n.message,p=(n.showModal,Object(o.useState)("")),m=Object(a.a)(p,2),j=m[0],h=m[1],v=[{id:1,name:"Zaplaten\xe9",value:"paid"},{id:2,name:"Z\xe1lohovan\xe9",value:"half-paid"},{id:3,name:"Spracovan\xe9",value:"processed"},{id:4,name:"Splnen\xe9",value:"fulfilled"}],O=Object(o.useState)(2),g=Object(a.a)(O,2),x=g[0],y=g[1],k=Object(o.useContext)(i.OrdersContext),S=k.getOrders,w=k.orders;if(Object(o.useEffect)((function(){S()}),[]),!w)return Object(r.jsx)(E.a,{loading:f,title:b,close:t});var C=w.filter((function(e){return e.status===v[x-1].value}));return console.log(w[0].status),console.log(v[x-1].value),console.log(C),Object(r.jsxs)("section",{children:[Object(r.jsx)(u.a,{searchQuery:j,handleChange:function(e){return h(e.target.value)},handleAddButton:function(){return e("/dashboard/objednavky/nova-objednavka")},title:"Objedn\xe1vky"}),Object(r.jsx)(d.a,{items:v,activeIndex:x,setActiveIndex:y}),Object(r.jsx)(l.a,{children:w&&C.length?C.map((function(n,t){return Object(r.jsx)(I,{order:n,handleUpdateClick:function(){return e("/dashboard/objednavky/".concat(n.orderedBy._id,"/").concat(n._id))}},t)})):Object(r.jsx)("div",{children:"\u017diadne objedn\xe1vky"})})]})}},50:function(e,n,t){"use strict";var r=t(1),a=t(19),o=t(29),c=(t(0),t(7)),i=t(8);function s(){var e=Object(c.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return e},e}function u(){var e=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return e},e}var d=Object(i.b)(u()),l=i.c.div(s(),d,d);n.a=function(e){var n=e.handleChange,t=e.label,c=e.name,i=Object(o.a)(e,["handleChange","label","name"]);return Object(r.jsxs)(l,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:c,onChange:n},i)),t?Object(r.jsx)("label",{htmlFor:c,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},51:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(7)),o=t(8),c=t(27);function i(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return i=function(){return e},e}var s=o.c.div(i(),c.b);n.a=function(e){var n=e.children;return Object(r.jsx)(s,{children:n})}},52:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,lenses:{cylinder:[0,0,0,0],cylinderAxes:[0,0,0,0],diopters:[0,0,0,0],distance:[0,0,0,0],addition:[0,0,0,0],basis:[0,0,0,0],prism:[0,0,0,0]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:""}},53:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(20);var a=t(32);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},57:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(50)),o=t(7),c=t(8),i=t(26),s=t(27);function u(){var e=Object(o.a)(["\n    margin-top: 2rem;\n\n    margin-left: 1rem;\n\n"]);return u=function(){return e},e}function d(){var e=Object(o.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return d=function(){return e},e}function l(){var e=Object(o.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return l=function(){return e},e}function f(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return e},e}function b(){var e=Object(o.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return b=function(){return e},e}function p(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return p=function(){return e},e}var m=c.c.div(p(),s.b),j=c.c.div(b()),h=c.c.div(f()),v=(c.c.div(l()),Object(c.c)(i.a)(d()),Object(c.c)(i.a)(u()));n.a=function(e){var n=e.searchQuery,t=e.handleChange,o=e.title,c=(e.count,e.handleAddButton),i=void 0===c?function(){}:c;return Object(r.jsxs)(m,{children:[Object(r.jsx)(j,{children:Object(r.jsx)("h1",{children:o})}),Object(r.jsxs)(h,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{type:"search",name:"searchbox",value:n,handleChange:t,label:"Vyh\u013eada\u0165"})}),Object(r.jsx)(v,{onClick:i,children:"Prida\u0165"})]})]})}},58:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(7)),o=t(8),c=t(26),i=t(27);function s(){var e=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return s=function(){return e},e}function u(){var e=Object(a.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return u=function(){return e},e}var d=o.c.div(u(),i.b),l=Object(o.c)(c.a)(s(),(function(e){return e.active?"#000":"#fff"}),(function(e){return e.active?"#fff":"#000"}),(function(e){return e.active?400:700}),(function(e){return e.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));n.a=function(e){var n=e.items,t=e.activeIndex,a=e.setActiveIndex;return Object(r.jsx)(d,{children:Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(l,{active:e.id===t,onClick:function(){return a(e.id)},children:e.name})},e.id)}))})})}},59:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"e",(function(){return o})),t.d(n,"d",(function(){return c})),t.d(n,"a",(function(){return i}));var r={name:"",description:"",price:"0",type:1,brand:"",soldAmount:0,available:[0],eanCode:"",colorCode:"",colorName:"",imagePath:"",image:null,eshop:!0,specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"M",size:[0,0,0]}},a={id:"",name:"",description:"",dioptersRange:["0","0"],cylinderRange:["0","0"],price:"0",brand:"",imagePath:""},o=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],c=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"\u0160portov\xe9",value:3},{name:"\u0160o\u0161ovky",value:4},{name:"Doplnky",value:5}],i=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"]},78:function(e,n,t){"use strict";t.r(n),t.d(n,"OrdersContext",(function(){return k}));var r=t(1),a=t(53),o=t(9),c=t.n(o),i=t(12),s=t(31),u=t(19),d=t(10),l=t(0),f=t(2),b=t(17),p=t(16),m={lenses:{cylinder:[0,0,0,0],cylinderAxes:[0,0,0,0],diopters:[0,0,0,0],distance:[0,0,0,0],addition:[0,0,0,0],basis:[0,0,0,0],prism:[0,0,0,0]},product:"",lens:"",price:0},j=[{name:"Hotovos\u0165",value:"cash"},{name:"Karta",value:"card"},{name:"Z\xe1loha",value:"coupon"}],h=["eshop","lenses","diopters","summary"],v=t(52),O=function(e){var n=new Headers;n.append("auth-token",e);var t={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),t)},g=function(e,n,t,r,a,o,c,i){var s=n.user,u=n.combinedProducts,d=new Headers;d.append("auth-token",e),d.append("Content-Type","application/json");var l=JSON.stringify({user:s._id,combinedProducts:u.map((function(e){return e._id})),overwrite:t?r:void 0,coupon:""===a?void 0:a,paidAlready:"coupon"===i?o>0?Number(o):0:void 0,status:c,paymentType:i});console.log(l);var f={method:"POST",headers:d,body:l,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),f)},x=function(e){var n=new Headers;n.append("Content-Type","application/json"),console.log(e);var t={method:"POST",headers:n,body:JSON.stringify(Object(u.a)({},e)),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/store/combinedProducts"),t)},y=function(e,n){var t=new Headers;t.append("auth-token",e);var r={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(n),r)},k=Object(l.createContext)({selectedUser:null,setSelectedUser:function(){},hasAddress:!1,isDifferentAddress:!1,setIsDifferentAddress:function(){},overwrite:{},coupon:"",setCoupon:function(){},handleOverwriteChange:function(){},handleChangeSelectedUser:function(){},isSearchingUser:!1,handleSelectUser:function(){},orders:null,getOrders:function(){},productsToOrder:[],selectedProduct:null,selectedLenses:null,combinedProduct:null,paymentOptions:[],deposit:0,setDeposit:function(){},steps:[],activeStep:"",handleChangeStep:function(){},selectedPayment:0,handleChangePayment:function(){},handleSelectProduct:function(){},handleSelectLenses:function(){},handleRemoveProduct:function(){},handleParameterChange:function(){},createOrder:function(){},createCombinedProduct:function(){},getUserOrder:function(){},isUpdating:!1,status:"",orderPremises:0,resetOrder:function(){}});n.default=function(e){var n=e.children,t=Object(f.g)().push,o=Object(l.useContext)(b.a).token,S=Object(l.useContext)(p.a),w=S.getMessage,C=S.setIsLoading,P=S.setShowModal,A=S.closeModal,D=Object(l.useState)(!1),z=Object(d.a)(D,2),B=z[0],U=z[1],M=Object(l.useState)(""),N=Object(d.a)(M,2),T=N[0],L=N[1],I=Object(l.useState)(0),E=Object(d.a)(I,2),F=E[0],H=E[1],R=Object(l.useState)(null),_=Object(d.a)(R,2),J=_[0],G=_[1],V=Object(l.useState)([]),Z=Object(d.a)(V,2),K=Z[0],Q=Z[1],q=Object(l.useState)(null),W=Object(d.a)(q,2),X=W[0],Y=W[1],$=Object(l.useState)(null),ee=Object(d.a)($,2),ne=ee[0],te=ee[1],re=Object(l.useState)(m),ae=Object(d.a)(re,2),oe=ae[0],ce=ae[1],ie=j,se=h,ue=Object(l.useState)(0),de=Object(d.a)(ue,2),le=de[0],fe=de[1],be=Object(l.useState)(""),pe=Object(d.a)(be,2),me=pe[0],je=pe[1],he=Object(l.useState)(v.a),ve=Object(d.a)(he,2),Oe=ve[0],ge=ve[1],xe=Object(l.useState)(!1),ye=Object(d.a)(xe,2),ke=ye[0],Se=ye[1],we=Object(l.useState)(!1),Ce=Object(d.a)(we,2),Pe=Ce[0],Ae=Ce[1],De=Object(l.useState)(!1),ze=Object(d.a)(De,2),Be=ze[0],Ue=ze[1],Me=Object(l.useState)({address:"",psc:"",city:"",country:""}),Ne=Object(d.a)(Me,2),Te=Ne[0],Le=Ne[1],Ie=Object(l.useState)("eshop"),Ee=Object(d.a)(Ie,2),Fe=Ee[0],He=Ee[1],Re=Object(l.useState)(0),_e=Object(d.a)(Re,2),Je=_e[0],Ge=_e[1],Ve=function(){te(null),Y(null),He("eshop"),ce(m),Ge(0),fe(0),je(""),Le({address:"",psc:"",city:"",country:""})},Ze=function(){var e=Object(i.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),e.prev=2,e.next=5,O(o);case 5:return n=e.sent,e.next=8,n.json();case 8:if(t=e.sent,console.log(t),!t.orders){e.next=14;break}return G(t.orders),A(),e.abrupt("return");case 14:w(t.message),C(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),w("Nieco sa pokazilo"),C(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(i.a)(c.a.mark((function e(n,r){var a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),a="paid",2===Je&&(a="half-paid"),e.prev=4,e.next=7,g(o,{user:n,combinedProducts:r},Be,Te,me,le,a,ie[Je].value);case 7:return i=e.sent,e.next=10,i.json();case 10:s=e.sent,console.log(s),s.orderId&&(Ve(),t("/dashboard/objednavky"),Ze()),w(s.message),C(!1),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0),w("Nieco sa pokazilo"),C(!1);case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(n,t){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),t={},t=5===X.type||4===X.type?{product:n.product}:{lenses:n.lenses,product:n.product,lens:n.lens},e.prev=4,e.next=7,x(t);case 7:return r=e.sent,e.next=10,r.json();case 10:if(o=e.sent,console.log(o),!o.combinedProduct){e.next=18;break}return Q([].concat(Object(a.a)(K),[o.combinedProduct])),Ve(),C(!1),A(),e.abrupt("return");case 18:w(o.message),C(!1),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(4),console.log(e.t0),w("Nieco sa pokazilo"),C(!1);case 27:case"end":return e.stop()}}),e,null,[[4,22]])})));return function(n){return e.apply(this,arguments)}}(),qe=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),e.prev=2,e.next=5,y(o,n);case 5:return t=e.sent,e.next=8,t.json();case 8:r=e.sent,console.log(r),r.order&&(U(!0),Q(r.order.combinedProducts),L(r.order.status),H(r.order.premises)),C(!1),w(r.message),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),w("Nieco sa pokazilo"),C(!1);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(n){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){if(Oe){var e=Oe.address,n=Oe.city,t=Oe.psc,r=Oe.country,a=Oe.phone;Ae(!!(e&&n&&t&&r&&a))}}),[Oe]),Object(r.jsx)(k.Provider,{value:{selectedUser:Oe,setSelectedUser:ge,hasAddress:Pe,isDifferentAddress:Be,setIsDifferentAddress:Ue,overwrite:Te,coupon:me,setCoupon:je,handleOverwriteChange:function(e){var n=e.target,t=n.name,r=n.value;Le(Object(u.a)(Object(u.a)({},Te),{},Object(s.a)({},t,r)))},handleChangeSelectedUser:function(e){var n=e.target,t=n.name,r=n.value;Se(!0),ge(Object(u.a)(Object(u.a)({},Oe),{},Object(s.a)({},t,r)))},isSearchingUser:ke,handleSelectUser:function(e){console.log(e),ge(Object(u.a)({},e)),Se(!1)},orders:J,getOrders:Ze,productsToOrder:K,selectedProduct:X,selectedLenses:ne,combinedProduct:oe,paymentOptions:ie,deposit:le,setDeposit:fe,steps:se,activeStep:Fe,handleChangeStep:function(e){He(se[e])},selectedPayment:Je,handleChangePayment:function(e,n){e.preventDefault(),Ge(n)},handleSelectProduct:function(e,n){e.preventDefault(),Y(n),ce(Object(u.a)(Object(u.a)({},oe),{},{product:n._id,price:oe.price+n.price})),4===n.type||5===n.type?He(se[3]):He(se[1])},handleSelectLenses:function(e,n){e.preventDefault(),te(n),ce(Object(u.a)(Object(u.a)({},oe),{},{lens:n._id,price:oe.price+n.price})),He(se[2])},handleRemoveProduct:function(e,n){e.preventDefault(),Q(K.filter((function(e){return e._id!==n._id})))},handleParameterChange:function(e,n){var t=e.target,r=t.name,a=t.value,o=oe.lenses[r];o[n]=Number(a),ce(Object(u.a)(Object(u.a)({},oe),{},{lenses:Object(u.a)(Object(u.a)({},oe.lenses),{},Object(s.a)({},r,o))}))},createOrder:Ke,createCombinedProduct:Qe,getUserOrder:qe,isUpdating:B,status:T,orderPremises:F,resetOrder:function(){console.log("reset order"),L(""),U(!1)}},children:n})}}}]);
//# sourceMappingURL=9.22a1e575.chunk.js.map