(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[14,22],{248:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(1),o=t(3),c=t(75),i=t(18),u=t(54),l=t(88),s=t(52),d=t(32),p=t(14),b=t(5),m=t(6),h=t(28);function j(){var n=Object(b.a)(["\n    padding: 2rem;\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    \n"]);return j=function(){return n},n}function f(){var n=Object(b.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n    justify-items: start;\n"]);return f=function(){return n},n}function v(){var n=Object(b.a)(["\n    background-color: var(--color-red);\n\n"]);return v=function(){return n},n}function x(){var n=Object(b.a)(["\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return x=function(){return n},n}function O(){var n=Object(b.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return O=function(){return n},n}function g(){var n=Object(b.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n"]);return g=function(){return n},n}var k=m.c.div(g(),p.g),y=m.c.select(O()),w=Object(m.c)(h.a)(x()),C=Object(m.c)(h.a)(v()),S=m.c.div(f()),T=m.c.div(j());e.default=function(){var n=Object(o.i)().couponId,e=Object(a.useContext)(i.a),t=e.closeModal,b=e.isLoading,m=e.message,h=e.showModal,j=Object(a.useContext)(c.CouponsContext),f=j.coupon,v=j.getCoupon,x=j.handleChange,O=j.createCoupon,g=j.isUpdating,U=j.deleteCoupon,N=j.resetCoupons;return Object(a.useEffect)((function(){"novy-kupon"!==n&&v(n)}),[n]),Object(a.useEffect)((function(){return function(){N()}}),[]),Object(r.jsxs)("section",{children:[h&&Object(r.jsx)(d.a,{loading:b,title:m,close:t}),Object(r.jsx)(k,{children:Object(r.jsxs)(p.c,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Nov\xfd kup\xf3n"})}),Object(r.jsxs)("div",{children:[g&&Object(r.jsx)(C,{onClick:function(){return U(n)},children:"Odstr\xe1ni\u0165"}),!g&&Object(r.jsx)(w,{onClick:function(){return O(f)},children:"Vytvori\u0165"})]})]})}),Object(r.jsx)(u.a,{children:Object(r.jsxs)(S,{children:[Object(r.jsxs)(T,{children:[Object(r.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(r.jsx)(l.a,{label:"K\xf3d kup\xf3nu",example:"napr: 50off",children:Object(r.jsx)(s.a,{label:"K\xf3d",type:"text",name:"code",value:f.code,handleChange:function(n){return x(n)}})}),Object(r.jsx)(l.a,{label:"Typ kup\xf3nu",example:"",children:Object(r.jsxs)(y,{name:"type",value:f.type,onChange:function(n){return x(n)},children:[Object(r.jsx)("option",{value:"percentage",children:"Percent\xe1"}),Object(r.jsx)("option",{value:"flat",children:"Fixn\xe1 suma"})]})})]}),Object(r.jsxs)(T,{children:[Object(r.jsx)("h3",{children:"Parametre"}),Object(r.jsx)(l.a,{label:"Hodnota",example:"",children:Object(r.jsx)(s.a,{label:"Suma",type:"number",name:"value",value:f.value.toString(),handleChange:function(n){return x(n)}})}),Object(r.jsx)(l.a,{label:"Ko\u013eko maxim\xe1lne kr\xe1t m\xf4\u017ee tento kup\xf3n byt pou\u017eit\xfd jedn\xfdm \u010dlovek.",example:"",children:Object(r.jsx)(s.a,{label:"Suma",type:"number",name:"maxUses",value:f.maxUses.toString(),handleChange:function(n){return x(n)}})}),Object(r.jsx)(l.a,{label:"Minim\xe1lna hodnota objedn\xe1vky v eur\xe1ch, aby bol tento kup\xf3n aplikovate\u013en\xfd.",example:"",children:Object(r.jsx)(s.a,{label:"Suma",type:"number",name:"minValue",value:f.minValue.toString(),handleChange:function(n){return x(n)}})}),Object(r.jsx)(l.a,{label:"Ko\u013eko maxim\xe1lne kr\xe1t m\xf4\u017ee tento kup\xf3n byt pou\u017eit\xfd dohromady v\u0161etk\xfdmi u\u017e\xedvate\u013emi.",example:"",children:Object(r.jsx)(s.a,{label:"Suma",type:"number",name:"maxUsesTotal",value:f.maxUsesTotal.toString(),handleChange:function(n){return x(n)}})})]})]})})]})}},52:function(n,e,t){"use strict";var r=t(2),a=t(21),o=t(30),c=(t(1),t(5)),i=t(6);function u(){var n=Object(c.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function l(){var n=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return l=function(){return n},n}var s=Object(i.b)(l()),d=i.c.div(u(),s,s);e.a=function(n){var e=n.handleChange,t=n.label,c=n.name,i=Object(o.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:c,onChange:e},i)),t?Object(r.jsx)("label",{htmlFor:c,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},54:function(n,e,t){"use strict";var r=t(2),a=(t(1),t(5)),o=t(6),c=t(14);function i(){var n=Object(a.a)(["\n    max-width: 125rem;\n    width: 100%;\n"]);return i=function(){return n},n}function u(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return u=function(){return n},n}var l=o.c.div(u(),c.g),s=o.c.div(i());e.a=function(n){var e=n.children;return Object(r.jsx)(l,{children:Object(r.jsx)(s,{children:e})})}},55:function(n,e,t){"use strict";t.d(e,"f",(function(){return r})),t.d(e,"g",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return c})),t.d(e,"e",(function(){return i})),t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return l}));var r=["Obchodn\xe1 57, Bratislava","Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Vajnorsk\xe1 53, Bratislava"],a=[{id:0,name:"E-shop"},{id:1,name:"Obchodn\xe1 57, Bratislava"},{id:2,name:"Mileti\u010dova 38, Bratislava"},{id:3,name:"Vajnory, Bratislava"},{id:4,name:"Senica, OC Bran\u010d"},{id:5,name:"Vajnorsk\xe1 53, Bratislava"}],o=["\u010ciern\xe1","Modr\xe1","\u010cerven\xe1","Siv\xe1","Zlat\xe1","Strieborn\xe1","Hned\xe1","Fialov\xe1","Zelen\xe1","Sed\xe1","Bordov\xe1"],c=["Acet\xe1t","Kov","Tit\xe1n","TR90","Patent","Optyl"],i=["Pilot","Squared","Browline","Cat eye","Tiny","Oversize","Okr\xfahle","Ov\xe1lne","Obd\u013a\u017enikov\xe9","Flat top","\u0160peci\xe1lne"],u=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n.toString();var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)},l=function(n){return console.log(n),n.includes(",")?n.split(",")[0]+"."+n.split(",")[1]:n}},75:function(n,e,t){"use strict";t.r(e),t.d(e,"CouponsContext",(function(){return h}));var r=t(2),a=t(7),o=t.n(a),c=t(12),i=t(31),u=t(21),l=t(10),s=t(1),d=t(18),p=t(19),b=t(3),m=t(55),h=Object(s.createContext)({coupon:null,coupons:null,handleChange:function(){},getCoupon:function(){},getCoupons:function(){},createCoupon:function(){},deleteCoupon:function(){},isUpdating:!1,resetCoupons:function(){}}),j={code:"",type:"percentage",value:0,maxUses:0,minValue:0,maxUsesTotal:0};e.default=function(n){var e=n.children,t=Object(s.useContext)(d.a),a=t.closeModal,f=t.getMessage,v=t.setIsLoading,x=t.setShowModal,O=Object(s.useContext)(p.a).token,g=Object(b.h)().push,k=new Headers;k.append("auth-token",O),k.append("Content-Type","application/json");var y=Object(s.useState)(j),w=Object(l.a)(y,2),C=w[0],S=w[1],T=Object(s.useState)(null),U=Object(l.a)(T,2),N=U[0],B=U[1],V=Object(s.useState)(!1),z=Object(l.a)(V,2),M=z[0],E=z[1],K=function(){var n=Object(c.a)(o.a.mark((function n(e){var t,r,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!0),v(!0),x(!0),t={method:"GET",headers:k,redirect:"follow"},n.prev=4,n.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/").concat(e),t);case 7:return r=n.sent,n.next=10,r.json();case 10:if(!(c=n.sent).coupon){n.next=15;break}return S(Object(u.a)(Object(u.a)({},C),c.coupon)),a(),n.abrupt("return");case 15:f(c.message),v(!1),n.next=24;break;case 19:n.prev=19,n.t0=n.catch(4),console.log(n.t0),f("Nie\u010do sa pokazilo"),v(!1);case 24:case"end":return n.stop()}}),n,null,[[4,19]])})));return function(e){return n.apply(this,arguments)}}(),P=function(){var n=Object(c.a)(o.a.mark((function n(){var e,t,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),x(!0),e={method:"GET",headers:k,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons"),e);case 6:return t=n.sent,n.next=9,t.json();case 9:(r=n.sent).coupons&&B(r.coupons),v(!1),a(),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(3),console.log(n.t0),f("Nie\u010do sa pokazilo"),v(!1);case 20:case"end":return n.stop()}}),n,null,[[3,15]])})));return function(){return n.apply(this,arguments)}}(),H=function(){var n=Object(c.a)(o.a.mark((function n(e){var t,r,a,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),x(!0),console.log(e.value),t=JSON.stringify(Object(u.a)(Object(u.a)(Object(u.a)({code:e.code,type:e.type},e.value&&{value:"flat"===e.type?Object(m.a)(e.value):Number(e.value)}),{},{maxUses:""===e.maxUses||"0"===e.maxUses?void 0:Number(e.maxUses)},e.minValue&&{minValue:Object(m.a)(e.minValue)}),{},{maxUsesTotal:""===e.maxUsesTotal||"0"===e.maxUsesTotal?void 0:Number(e.maxUsesTotal)})),r={method:"POST",headers:k,body:t,redirect:"follow"},n.prev=5,n.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/create"),r);case 8:return a=n.sent,n.next=11,a.json();case 11:"format"===(c=n.sent).error&&f("K\xf3d kup\xf3nu je povinn\xfd"),"exists"===c.error&&f("Kup\xf3n u\u017e existuje"),a.ok&&(P(),g("/dashboard/kupony")),v(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(5),console.log(n.t0),f("Nie\u010do sa pokazilo"),v(!1);case 23:case"end":return n.stop()}}),n,null,[[5,18]])})));return function(e){return n.apply(this,arguments)}}(),F=function(){var n=Object(c.a)(o.a.mark((function n(e){var t,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),x(!0),t={method:"DELETE",headers:k,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/").concat(e),t);case 6:return r=n.sent,n.next=9,r.json();case 9:n.sent,r.ok&&(P(),g("/dashboard/kupony")),v(!1),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(3),console.log(n.t0),f("Nie\u010do sa pokazilo"),v(!1);case 19:case"end":return n.stop()}}),n,null,[[3,14]])})));return function(e){return n.apply(this,arguments)}}(),J=function(){var n=Object(c.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:E(!1),S(j);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsx)(h.Provider,{value:{coupon:C,coupons:N,handleChange:function(n){var e=n.target,t=e.name,r=e.value;S(Object(u.a)(Object(u.a)({},C),{},Object(i.a)({},t,r)))},getCoupon:K,getCoupons:P,createCoupon:H,deleteCoupon:F,isUpdating:M,resetCoupons:J},children:e})}},88:function(n,e,t){"use strict";var r=t(21),a=t(2),o=t(30),c=(t(1),t(5));function i(){var n=Object(c.a)(["\n    display:flex;\n    align-items: center;\n\n    p {\n        margin-top: 1.8rem;\n        margin-left: 2rem;\n            opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n    @media all and (max-width: 800px) {\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n    }\n"]);return i=function(){return n},n}var u=t(6).c.div(i());e.a=function(n){var e=n.children,t=n.label,c=n.example,i=Object(o.a)(n,["children","label","example"]);return Object(a.jsxs)(u,Object(r.a)(Object(r.a)({},i),{},{children:[Object(a.jsx)("div",{children:e}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[t+" ",Object(a.jsx)("span",{children:c})]})})]}))}}}]);
//# sourceMappingURL=14.9f0835bb.chunk.js.map