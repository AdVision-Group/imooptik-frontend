(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[8],{229:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(10),c=t(0),o=t(2),i=t(28),s=t(93),u=t(16),d=t(68),l=t(52),f=t(59),b=t(51),p=t(9),m=t.n(p),j=t(12),h=t(17),v=t(18),O=t.n(v),g=t(30),x=t(55),y=t(7),k=t(8),w=t(26);function S(){var e=Object(y.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return S=function(){return e},e}function C(){var e=Object(y.a)(["\n    display: flex;\n    margin: 3rem auto 0;\n"]);return C=function(){return e},e}function P(){var e=Object(y.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: #F5F5F5;\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return P=function(){return e},e}function z(){var e=Object(y.a)(["\n    width:100%;\n    max-width: 50rem;\n    max-height: 60rem;\n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: white;\n\n    position: relative;\n    z-index: 999999;\n\n    h3 {\n        text-align: center;\n    }\n\n\n"]);return z=function(){return e},e}function N(){var e=Object(y.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return N=function(){return e},e}var D=k.c.div(N()),A=k.c.div(z()),M=k.c.select(P()),B=Object(k.c)(w.a)(C()),F=k.c.button(S()),L=function(e){var n=e.close,t=e.premise,o=e.id,i=Object(c.useState)(t),s=Object(a.a)(i,2),l=s[0],f=s[1],b=Object(c.useContext)(h.a).token,p=Object(c.useContext)(d.OrdersContext).getOrders,v=Object(c.useContext)(u.a),y=v.getMessage,k=v.message,w=v.isLoading,S=v.setIsLoading,C=v.closeModal,P=function(){var e=Object(j.a)(m.a.mark((function e(){var t,r,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),(t=new Headers).append("auth-token",b),t.append("Content-Type","application/json"),r=JSON.stringify({premises:Number(l)}),a={method:"POST",headers:t,body:r,redirect:"follow"},e.prev=6,e.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(o,"/delegate"),a);case 9:return c=e.sent,console.log(c),400===c.status&&y("Fakt\xfara mus\xed byt zaplaten\xe1, aby mohla by\u0165 priraden\xe1 prev\xe1dzke"),401===c.status&&y("Mus\xed\u0161 byt ved\xfaci, aby si mohol manipulova\u0165 s priradovanim"),e.next=15,c.json();case 15:if(!e.sent.order){e.next=21;break}return p(),S(!1),n(),e.abrupt("return");case 21:S(!1),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(6),console.log(e.t0),S(!1);case 28:case"end":return e.stop()}}),e,null,[[6,24]])})));return function(){return e.apply(this,arguments)}}();return w||k?Object(r.jsx)(g.a,{loading:w,title:k,close:C}):O.a.createPortal(Object(r.jsxs)(D,{children:[Object(r.jsx)(F,{onClick:n}),Object(r.jsxs)(A,{children:[Object(r.jsx)("h3",{children:"Priradi\u0165 k prev\xe1dzke"}),Object(r.jsxs)(M,{value:l,onChange:function(e){return f(e.target.value)},children:[Object(r.jsx)("option",{value:0,children:"Nezadan\xe9"}),x.f.map((function(e,n){if(4!==n)return Object(r.jsx)("option",{value:n+1,children:e},n)}))]}),Object(r.jsx)(B,{onClick:P,children:"Priradi\u0165"})]})]}),document.getElementById("portal"))},T=t(61),E=t(69);function U(){var e=Object(y.a)(["\n    width: 100%;\n    height: .1rem;\n    background-color: #000;\n    margin: 1rem 0;\n    opacity: .3;\n"]);return U=function(){return e},e}function H(){var e=Object(y.a)(["\n    position: absolute;\n    padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    border-radius: .5rem;\n    background-color: #fff;\n    z-index: 99;\n    right: 3rem;\n    top: 6rem;\n    width: 20rem;\n    text-align: start;\n\n    ul {\n        list-style: none;\n\n        li {\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            transition: background-color .3s ease-out;\n            border-radius: 9999rem .5rem .5rem 9999rem;\n\n\n            div {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                padding: 1rem;\n                background-color: #f5f5f5;\n                border-radius: 50%;\n                margin-right: 1rem;\n\n                svg {\n                    transition: color .3s ease-out;\n                }\n            }\n\n            &:hover {\n                background-color: #f5f5f5;\n\n                div {\n                    svg {\n                        color: rgb(235, 172, 1);\n                    }\n                }\n            }\n\n        }\n        a:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n    }\n"]);return H=function(){return e},e}function I(){var e=Object(y.a)(["\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem;\n    border-radius: 50%;\n    background-color: #000;\n\n    svg {\n        font-size: 1.2rem;\n        margin-top: .1rem;\n        display: block;\n        color: #fff;\n    }\n"]);return I=function(){return e},e}function R(){var e=Object(y.a)(["\n    padding: 1rem;\n\n    &:hover {\n        background-color: #f5f5f5;\n    }\n"]);return R=function(){return e},e}function _(){var e=Object(y.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    transition: background-color .3s ease-out; \n"]);return _=function(){return e},e}function J(){var e=Object(y.a)(["\n    position: relative;\n    padding: 2rem;\n    text-align: center;\n"]);return J=function(){return e},e}function G(){var e=Object(y.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n"]);return G=function(){return e},e}function V(){var e=Object(y.a)(["\n    display: grid;\n    grid-template-columns: 10rem 2fr 2fr 1fr 10rem;\n    border-bottom: 1px solid #000;\n    font-weight: bolder;\n"]);return V=function(){return e},e}function K(){var e=Object(y.a)(["\n    min-width: 65rem;\n    margin-bottom: 10rem;\n"]);return K=function(){return e},e}var Z=k.c.div(K()),Q=k.c.div(V()),q=k.c.div(G()),W=k.c.div(J()),X=Object(k.c)(W)(_()),Y=k.c.div(R()),$=k.c.div(I()),ee=k.c.div(H()),ne=k.c.div(U()),te=function(e){var n,t,o=e.order,s=Object(c.useState)(!1),u=Object(a.a)(s,2),d=u[0],l=u[1],f=new Date(o.date),b=Object(c.useRef)(null);n=b,t=function(){return l(!1)},Object(c.useEffect)((function(){var e=function(e){n.current&&!n.current.contains(e.target)&&t()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n]);var p=Object(c.useState)(!1),m=Object(a.a)(p,2),j=m[0],h=m[1];return Object(r.jsxs)(q,{children:[Object(r.jsx)(W,{children:o.customId}),Object(r.jsx)(W,{children:f.toLocaleDateString("sk-SK",{weekday:"long",month:"long",day:"numeric"})}),Object(r.jsxs)(X,{children:[Object(r.jsx)(Y,{onClick:function(){return h(!0)},children:0===o.premises?"Neuveden\xe9":x.f[o.premises-1]}),j&&Object(r.jsx)(L,{close:function(){return h(!1)},premise:o.premises,id:o._id})]}),Object(r.jsx)(W,{children:o.status}),Object(r.jsxs)(W,{children:[Object(r.jsx)($,{onClick:function(){return l(!d)},children:Object(r.jsx)(E.a,{})}),d&&Object(r.jsxs)(ee,{ref:b,children:[Object(r.jsx)("ul",{children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(E.c,{})}),"Vybaven\xe9"]})}),Object(r.jsx)(ne,{}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("a",{href:"".concat("http://195.110.58.166:8080","/uploads/pdf/").concat(o.pdfPath),target:"_blank",rel:"noreferrer noopener",children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(E.f,{})}),"Zobraz PDF"]})}),Object(r.jsx)(i.b,{to:"/dashboard/objednavky/".concat(o.orderedBy._id,"/").concat(o._id),children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(E.g,{})}),"Zobrazi\u0165"]})})]})]})]})]})};n.default=function(){var e=Object(o.g)().push,n=Object(c.useState)(""),t=Object(a.a)(n,2),i=t[0],p=t[1],m=Object(c.useState)(1),j=Object(a.a)(m,2),h=j[0],v=j[1],O=Object(c.useState)([]),x=Object(a.a)(O,2),y=x[0],k=x[1],w=Object(c.useContext)(u.a),S=w.closeModal,C=w.isLoading,P=w.message,z=w.showModal,N=Object(c.useContext)(d.OrdersContext),D=N.getOrders,A=N.orders;return Object(c.useEffect)((function(){A||D(),A&&k(2===h?A.filter((function(e){return"finished"===e.status})):A.filter((function(e){return"finished"!==e.status})))}),[A]),Object(c.useEffect)((function(){A&&k(2===h?A.filter((function(e){return"finished"===e.status})):A.filter((function(e){return"finished"!==e.status})))}),[h]),Object(c.useEffect)((function(){if(A){var e=new s.a(A,{keys:["customId","status","date"]});if(""!==i){var n=e.search(i);k(n.map((function(e){return e.item})))}i||k(2===h?A.filter((function(e){return"finished"===e.status})):A.filter((function(e){return"finished"!==e.status})))}}),[i]),Object(r.jsxs)("section",{children:[z&&Object(r.jsx)(g.a,{loading:C,title:P,close:S}),Object(r.jsx)(l.a,{searchQuery:i,handleChange:function(e){return p(e.target.value)},handleAddButton:function(){return e("/dashboard/objednavky/nova-objednavka")},title:"Objedn\xe1vky"}),Object(r.jsx)(f.a,{items:T.d,activeIndex:h,setActiveIndex:v}),Object(r.jsx)(b.a,{children:Object(r.jsxs)(Z,{children:[Object(r.jsxs)(Q,{children:[Object(r.jsx)(W,{children:"ID"}),Object(r.jsx)(W,{children:"D\xe1tum"}),Object(r.jsx)(W,{children:"Prev\xe1dzka"}),Object(r.jsx)(W,{children:"Status"}),Object(r.jsx)(W,{children:"Mo\u017enosti"})]}),A&&y.map((function(e,n){return Object(r.jsx)(te,{order:e},n)}))]})})]})}},50:function(e,n,t){"use strict";var r=t(1),a=t(19),c=t(29),o=(t(0),t(7)),i=t(8);function s(){var e=Object(o.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return e},e}function u(){var e=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return e},e}var d=Object(i.b)(u()),l=i.c.div(s(),d,d);n.a=function(e){var n=e.handleChange,t=e.label,o=e.name,i=Object(c.a)(e,["handleChange","label","name"]);return Object(r.jsxs)(l,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:o,onChange:n},i)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},51:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(7)),c=t(8),o=t(27);function i(){var e=Object(a.a)(["\n    max-width: 115rem;\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return s=function(){return e},e}var u=c.c.div(s(),o.b),d=c.c.div(i());n.a=function(e){var n=e.children;return Object(r.jsx)(u,{children:Object(r.jsx)(d,{children:n})})}},52:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(50)),c=t(7),o=t(8),i=t(26),s=t(27);function u(){var e=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 1rem;\n\n"]);return u=function(){return e},e}function d(){var e=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return d=function(){return e},e}function l(){var e=Object(c.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return l=function(){return e},e}function f(){var e=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return e},e}function b(){var e=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return b=function(){return e},e}function p(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return p=function(){return e},e}var m=o.c.div(p(),s.b),j=o.c.div(b()),h=o.c.div(f()),v=(o.c.div(l()),Object(o.c)(i.a)(d())),O=Object(o.c)(i.a)(u());n.a=function(e){var n=e.searchQuery,t=e.handleSearch,c=e.handleChange,o=e.title,i=(e.count,e.handleAddButton),s=void 0===i?function(){}:i;return Object(r.jsxs)(m,{children:[Object(r.jsx)(j,{children:Object(r.jsx)("h1",{children:o})}),Object(r.jsxs)(h,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{type:"search",name:"searchbox",value:n,handleChange:c,label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(v,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(O,{onClick:s,children:"Prida\u0165"})]})]})}},54:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,lenses:{cylinder:[0,0,0,0],cylinderAxes:[0,0,0,0],diopters:[0,0,0,0],distance:[0,0,0,0],addition:[0,0,0,0],basis:[0,0,0,0],prism:[0,0,0,0]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:""}},55:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"f",(function(){return c})),t.d(n,"e",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return s}));var r={name:"",description:"",price:"0",type:1,brand:"",soldAmount:0,available:[0],eanCode:"",colorCode:"",colorName:"",imagePath:"",image:null,eshop:!0,specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"M",size:[0,0,0]}},a={id:"",name:"",description:"",dioptersRange:["0","0"],cylinderRange:["0","0"],price:"0",brand:"",imagePath:""},c=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],o=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"\u0160portov\xe9",value:3},{name:"\u0160o\u0161ovky",value:4},{name:"Doplnky",value:5}],i=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"],s=function(e){var n=0;return e.includes(",")?1===e.split(",")[1].length?(n=e.split(",")[0]+e.split(",")[1]+"0",Number(n)):(n=e.split(",")[0]+e.split(",")[1],Number(n)):Number(100*e)}},59:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(7)),c=t(8),o=t(26),i=t(27);function s(){var e=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return s=function(){return e},e}function u(){var e=Object(a.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return u=function(){return e},e}var d=c.c.div(u(),i.b),l=Object(c.c)(o.a)(s(),(function(e){return e.active?"#000":"#fff"}),(function(e){return e.active?"#fff":"#000"}),(function(e){return e.active?400:700}),(function(e){return e.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));n.a=function(e){var n=e.items,t=e.activeIndex,a=e.setActiveIndex;return Object(r.jsx)(d,{children:Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(l,{active:e.id===t,onClick:function(){return a(e.id)},children:e.name})},e.id)}))})})}},61:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return o}));var r={lenses:{cylinder:[0,0,0,0],cylinderAxes:[0,0,0,0],diopters:[0,0,0,0],distance:[0,0,0,0],addition:[0,0,0,0],basis:[0,0,0,0],prism:[0,0,0,0]},product:"",lens:"",price:0},a=[{name:"Hotovos\u0165",value:"cash"},{name:"Karta",value:"card"},{name:"Z\xe1loha",value:"coupon"}],c=["eshop","lenses","diopters","summary"],o=[{id:1,name:"Nevybaven\xe9",value:"fulfilled"},{id:2,name:"Vybaven\xe9",value:"finished"}]},68:function(e,n,t){"use strict";t.r(n),t.d(n,"OrdersContext",(function(){return k}));var r=t(1),a=t(58),c=t(9),o=t.n(c),i=t(12),s=t(31),u=t(19),d=t(10),l=t(0),f=t(2),b=t(17),p=t(16),m=t(61),j=t(54),h=function(e){var n=new Headers;n.append("auth-token",e);var t={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),t)},v=function(e,n,t,r,a,c,o,i){var s=n.user,u=n.combinedProducts,d=new Headers;d.append("auth-token",e),d.append("Content-Type","application/json");var l=JSON.stringify({user:s._id,combinedProducts:u.map((function(e){return e._id})),overwrite:t?r:void 0,coupon:""===a?void 0:a,paidAlready:"coupon"===i?c>0?Number(c):0:void 0,status:o,paymentType:i});console.log(l);var f={method:"POST",headers:d,body:l,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),f)},O=function(e){var n=new Headers;n.append("Content-Type","application/json"),console.log(e);var t={method:"POST",headers:n,body:JSON.stringify(Object(u.a)({},e)),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/store/combinedProducts"),t)},g=function(e,n){var t=new Headers;t.append("auth-token",e);var r={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(n),r)},x=function(e,n){var t=new Headers;t.append("auth-token",e);var r={method:"POST",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(n,"/fulfill"),r)},y=function(e,n){var t=new Headers;t.append("auth-token",e);var r={method:"POST",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(n,"/finish"),r)},k=Object(l.createContext)({selectedUser:null,setSelectedUser:function(){},hasAddress:!1,isDifferentAddress:!1,setIsDifferentAddress:function(){},overwrite:{},coupon:"",setCoupon:function(){},handleOverwriteChange:function(){},handleChangeSelectedUser:function(){},isSearchingUser:!1,handleSelectUser:function(){},orders:null,getOrders:function(){},productsToOrder:[],selectedProduct:null,selectedLenses:null,combinedProduct:null,paymentOptions:[],deposit:0,setDeposit:function(){},steps:[],activeStep:"",handleChangeStep:function(){},selectedPayment:0,handleChangePayment:function(){},handleSelectProduct:function(){},handleSelectLenses:function(){},handleRemoveProduct:function(){},handleParameterChange:function(){},createOrder:function(){},createCombinedProduct:function(){},getUserOrder:function(){},isUpdating:!1,status:"",orderPremises:0,resetOrder:function(){},handleFulfill:function(){},handleFinish:function(){}});n.default=function(e){var n=e.children,t=Object(f.g)().push,c=Object(l.useContext)(b.a).token,w=Object(l.useContext)(p.a),S=w.getMessage,C=w.setIsLoading,P=w.setShowModal,z=w.closeModal,N=Object(l.useState)(!1),D=Object(d.a)(N,2),A=D[0],M=D[1],B=Object(l.useState)(""),F=Object(d.a)(B,2),L=F[0],T=F[1],E=Object(l.useState)(0),U=Object(d.a)(E,2),H=U[0],I=U[1],R=Object(l.useState)(null),_=Object(d.a)(R,2),J=_[0],G=_[1],V=Object(l.useState)([]),K=Object(d.a)(V,2),Z=K[0],Q=K[1],q=Object(l.useState)(null),W=Object(d.a)(q,2),X=W[0],Y=W[1],$=Object(l.useState)(null),ee=Object(d.a)($,2),ne=ee[0],te=ee[1],re=Object(l.useState)(m.a),ae=Object(d.a)(re,2),ce=ae[0],oe=ae[1],ie=m.b,se=m.c,ue=Object(l.useState)(0),de=Object(d.a)(ue,2),le=de[0],fe=de[1],be=Object(l.useState)(""),pe=Object(d.a)(be,2),me=pe[0],je=pe[1],he=Object(l.useState)(j.a),ve=Object(d.a)(he,2),Oe=ve[0],ge=ve[1],xe=Object(l.useState)(!1),ye=Object(d.a)(xe,2),ke=ye[0],we=ye[1],Se=Object(l.useState)(!1),Ce=Object(d.a)(Se,2),Pe=Ce[0],ze=Ce[1],Ne=Object(l.useState)(!1),De=Object(d.a)(Ne,2),Ae=De[0],Me=De[1],Be=Object(l.useState)({address:"",psc:"",city:"",country:""}),Fe=Object(d.a)(Be,2),Le=Fe[0],Te=Fe[1],Ee=Object(l.useState)("eshop"),Ue=Object(d.a)(Ee,2),He=Ue[0],Ie=Ue[1],Re=Object(l.useState)(0),_e=Object(d.a)(Re,2),Je=_e[0],Ge=_e[1],Ve=function(){te(null),Y(null),Ie("eshop"),oe(m.a),Te({address:"",psc:"",city:"",country:""})},Ke=function(){var e=Object(i.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),e.prev=2,e.next=5,h(c);case 5:return n=e.sent,e.next=8,n.json();case 8:if(t=e.sent,console.log(t),!t.orders){e.next=14;break}return G(t.orders),z(),e.abrupt("return");case 14:S(t.message),C(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),S("Nieco sa pokazilo"),C(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(i.a)(o.a.mark((function e(n,r){var a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),P(!0),a="paid",2===Je&&(a="half-paid"),Ae){e.next=9;break}if(Oe.address&&Oe.city&&Oe.psc&&Oe.country){e.next=9;break}return S("Chyba adressa"),C(!1),e.abrupt("return");case 9:return e.prev=9,e.next=12,v(c,{user:n,combinedProducts:r},Ae,Le,me,le,a,ie[Je].value);case 12:return 200===(i=e.sent).status&&S("Objednavkabola vytvoren\xe1"),e.next=16,i.json();case 16:e.sent.order&&(Ve(),t("/dashboard/objednavky"),Ke()),C(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(9),console.log(e.t0),S("Nieco sa pokazilo"),C(!1);case 26:case"end":return e.stop()}}),e,null,[[9,21]])})));return function(n,t){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),t={},t=5===X.type||4===X.type?{product:n.product}:{lenses:n.lenses,product:n.product,lens:n.lens},e.prev=4,e.next=7,O(t);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(c=e.sent).combinedProduct){e.next=17;break}return Q([].concat(Object(a.a)(Z),[c.combinedProduct])),Ve(),C(!1),z(),e.abrupt("return");case 17:S(c.message),C(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(4),console.log(e.t0),S("Nieco sa pokazilo"),C(!1);case 26:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(n){return e.apply(this,arguments)}}(),qe=function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),e.prev=2,e.next=5,g(c,n);case 5:return t=e.sent,e.next=8,t.json();case 8:r=e.sent,console.log(r),r.order&&(M(!0),Q(r.order.combinedProducts),T(r.order.status),I(r.order.premises)),C(!1),S(r.message),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),S("Nieco sa pokazilo"),C(!1);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(n){return e.apply(this,arguments)}}(),We=function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),e.prev=2,e.next=5,x(c,n);case 5:return 400===(t=e.sent).status&&S("Objedn\xe1vka nieje priradena k prev\xe1dzke"),e.next=9,t.json();case 9:if(r=e.sent,console.log(r),!r.order){e.next=15;break}return Ke(),C(!1),e.abrupt("return");case 15:C(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),S("Nieco sa pokazilo"),C(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(n){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),P(!0),e.prev=2,e.next=5,y(c,n);case 5:return t=e.sent,e.next=8,t.json();case 8:if(r=e.sent,console.log(r),!r.order){e.next=14;break}return Ke(),C(!1),e.abrupt("return");case 14:S(r.message),C(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),S("Nieco sa pokazilo"),C(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(n){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){if(Oe){var e=Oe.address,n=Oe.city,t=Oe.psc,r=Oe.country,a=Oe.phone;ze(!!(e&&n&&t&&r&&a))}}),[Oe]),Object(l.useEffect)((function(){Oe&&Oe.lenses&&oe(Object(u.a)(Object(u.a)({},ce),{},{lenses:Oe.lenses}))}),[Oe]),Object(r.jsx)(k.Provider,{value:{selectedUser:Oe,setSelectedUser:ge,hasAddress:Pe,isDifferentAddress:Ae,setIsDifferentAddress:Me,overwrite:Le,coupon:me,setCoupon:je,handleOverwriteChange:function(e){var n=e.target,t=n.name,r=n.value;Te(Object(u.a)(Object(u.a)({},Le),{},Object(s.a)({},t,r)))},handleChangeSelectedUser:function(e){var n=e.target,t=n.name,r=n.value;we(!0),ge(Object(u.a)(Object(u.a)({},Oe),{},Object(s.a)({},t,r)))},isSearchingUser:ke,handleSelectUser:function(e){console.log(e),ge(Object(u.a)({},e)),we(!1)},orders:J,getOrders:Ke,productsToOrder:Z,selectedProduct:X,selectedLenses:ne,combinedProduct:ce,paymentOptions:ie,deposit:le,setDeposit:fe,steps:se,activeStep:He,handleChangeStep:function(e){Ie(se[e])},selectedPayment:Je,handleChangePayment:function(e,n){e.preventDefault(),Ge(n)},handleSelectProduct:function(e,n){e.preventDefault(),Y(n),oe(Object(u.a)(Object(u.a)({},ce),{},{product:n._id,price:ce.price+n.price})),4===n.type||5===n.type?Ie(se[3]):Ie(se[1])},handleSelectLenses:function(e,n){e.preventDefault(),te(n),oe(Object(u.a)(Object(u.a)({},ce),{},{lens:n._id,price:ce.price+n.price})),Ie(se[2])},handleRemoveProduct:function(e,n){e.preventDefault(),Q(Z.filter((function(e){return e._id!==n._id})))},handleParameterChange:function(e,n){var t=e.target,r=t.name,a=t.value,c=ce.lenses[r];c[n]=Number(a),oe(Object(u.a)(Object(u.a)({},ce),{},{lenses:Object(u.a)(Object(u.a)({},ce.lenses),{},Object(s.a)({},r,c))}))},createOrder:Ze,createCombinedProduct:Qe,getUserOrder:qe,isUpdating:A,status:L,orderPremises:H,resetOrder:function(){console.log("reset order"),T(""),M(!1),Ge(0),fe(0),je("")},handleFulfill:We,handleFinish:Xe},children:n})}}}]);
//# sourceMappingURL=8.939f68fd.chunk.js.map