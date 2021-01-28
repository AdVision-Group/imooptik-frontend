(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[15,28],{238:function(n,e,t){"use strict";t.r(e);var a=t(1),o=t(0),r=t(2),c=t(69),i=t(16),u=t(50),s=t(57),l=t(49),p=t(30),d=t(8),m=t(9),b=t(27),j=t(26);function f(){var n=Object(d.a)(["\n    padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    \n"]);return f=function(){return n},n}function h(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n    justify-items: start;\n"]);return h=function(){return n},n}function x(){var n=Object(d.a)(["\n    background-color: #DD4C4C;\n\n"]);return x=function(){return n},n}function v(){var n=Object(d.a)(["\n\n"]);return v=function(){return n},n}function O(){var n=Object(d.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: #F5F5F5;\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return O=function(){return n},n}function g(){var n=Object(d.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    display: flex;\n    justify-content: space-between;\n"]);return g=function(){return n},n}var k=m.c.div(g(),b.b),C=m.c.select(O()),y=Object(m.c)(j.a)(v()),w=Object(m.c)(j.a)(x()),U=m.c.div(h()),S=m.c.div(f());e.default=function(){var n=Object(r.i)().couponId,e=Object(o.useContext)(i.a),t=e.closeModal,d=e.isLoading,m=e.message,b=e.showModal,j=Object(o.useContext)(c.CouponsContext),f=j.coupon,h=j.getCoupon,x=j.handleChange,v=j.createCoupon,O=j.isUpdating,g=j.deleteCoupon,T=j.resetCoupons;return Object(o.useEffect)((function(){"novy-kupon"!==n&&h(n)}),[n]),Object(o.useEffect)((function(){return function(){T()}}),[]),Object(a.jsxs)("section",{children:[b&&Object(a.jsx)(p.a,{loading:d,title:m,close:t}),Object(a.jsxs)(k,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Nov\xfd kup\xf3n"})}),Object(a.jsxs)("div",{children:[O&&Object(a.jsx)(w,{onClick:function(){return g(n)},children:"Odstr\xe1ni\u0165"}),!O&&Object(a.jsx)(y,{onClick:function(){return v(f)},children:"Vytvori\u0165"})]})]}),Object(a.jsx)(u.a,{children:Object(a.jsxs)(U,{children:[Object(a.jsxs)(S,{children:[Object(a.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(a.jsx)(s.a,{label:"K\xf3d kup\xf3nu",example:"napr: 50off",children:Object(a.jsx)(l.a,{label:"K\xf3d",type:"text",name:"code",value:f.code,handleChange:function(n){return x(n)}})}),Object(a.jsx)(s.a,{label:"Typ kup\xf3nu",example:"",children:Object(a.jsxs)(C,{name:"type",value:f.type,onChange:function(n){return x(n)},children:[Object(a.jsx)("option",{value:"percentage",children:"Percent\xe1"}),Object(a.jsx)("option",{value:"flat",children:"Fixn\xe1 suma"})]})})]}),Object(a.jsxs)(S,{children:[Object(a.jsx)("h3",{children:"Parametre"}),Object(a.jsx)(s.a,{label:"Hodnota",example:"",children:Object(a.jsx)(l.a,{label:"Suma",type:"number",name:"value",value:f.value.toString(),handleChange:function(n){return x(n)}})}),Object(a.jsx)(s.a,{label:"Ko\u013eko maxim\xe1lne kr\xe1t m\xf4\u017ee tento kup\xf3n byt pou\u017eit\xfd jedn\xfdm \u010dlovek.",example:"",children:Object(a.jsx)(l.a,{label:"Suma",type:"number",name:"maxUses",value:f.maxUses.toString(),handleChange:function(n){return x(n)}})}),Object(a.jsx)(s.a,{label:"Minim\xe1lna hodnota objedn\xe1vky v centoch, aby bol tento kup\xf3n aplikovate\u013en\xfd.",example:"",children:Object(a.jsx)(l.a,{label:"Suma",type:"number",name:"minValue",value:f.minValue.toString(),handleChange:function(n){return x(n)}})}),Object(a.jsx)(s.a,{label:"Ko\u013eko maxim\xe1lne kr\xe1t m\xf4\u017ee tento kup\xf3n byt pou\u017eit\xfd dohromady v\u0161etk\xfdmi u\u017e\xedvate\u013emi.",example:"",children:Object(a.jsx)(l.a,{label:"Suma",type:"number",name:"maxUsesTotal",value:f.maxUsesTotal.toString(),handleChange:function(n){return x(n)}})})]})]})})]})}},49:function(n,e,t){"use strict";var a=t(1),o=t(19),r=t(29),c=(t(0),t(8)),i=t(9);function u(){var n=Object(c.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return s=function(){return n},n}var l=Object(i.b)(s()),p=i.c.div(u(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,c=n.name,i=Object(r.a)(n,["handleChange","label","name"]);return Object(a.jsxs)(p,{children:[Object(a.jsx)("input",Object(o.a)({className:"form-input",name:c,onChange:e},i)),t?Object(a.jsx)("label",{htmlFor:c,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},50:function(n,e,t){"use strict";var a=t(1),o=(t(0),t(8)),r=t(9),c=t(27);function i(){var n=Object(o.a)(["\n    max-width: 115rem;\n"]);return i=function(){return n},n}function u(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return u=function(){return n},n}var s=r.c.div(u(),c.b),l=r.c.div(i());e.a=function(n){var e=n.children;return Object(a.jsx)(s,{children:Object(a.jsx)(l,{children:e})})}},57:function(n,e,t){"use strict";var a=t(19),o=t(1),r=t(29),c=(t(0),t(8));function i(){var n=Object(c.a)(["\n    display:flex;\n    align-items: center;\n\n    p {\n        margin-top: 1.8rem;\n        margin-left: 2rem;\n            opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n    @media all and (max-width: 800px) {\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n    }\n"]);return i=function(){return n},n}var u=t(9).c.div(i());e.a=function(n){var e=n.children,t=n.label,c=n.example,i=Object(r.a)(n,["children","label","example"]);return Object(o.jsxs)(u,Object(a.a)(Object(a.a)({},i),{},{children:[Object(o.jsx)("div",{children:e}),Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:[t+" ",Object(o.jsx)("span",{children:c})]})})]}))}},69:function(n,e,t){"use strict";t.r(e),t.d(e,"CouponsContext",(function(){return b}));var a=t(1),o=t(4),r=t.n(o),c=t(11),i=t(31),u=t(19),s=t(10),l=t(0),p=t(16),d=t(17),m=t(2),b=Object(l.createContext)({coupon:null,coupons:null,handleChange:function(){},getCoupon:function(){},getCoupons:function(){},createCoupon:function(){},deleteCoupon:function(){},isUpdating:!1,resetCoupons:function(){}}),j={code:"",type:"percentage",value:0,maxUses:0,minValue:0,maxUsesTotal:0};e.default=function(n){var e=n.children,t=Object(l.useContext)(p.a),o=t.closeModal,f=t.getMessage,h=t.setIsLoading,x=t.setShowModal,v=Object(l.useContext)(d.a).token,O=Object(m.h)().push,g=new Headers;g.append("auth-token",v),g.append("Content-Type","application/json");var k=Object(l.useState)(j),C=Object(s.a)(k,2),y=C[0],w=C[1],U=Object(l.useState)(null),S=Object(s.a)(U,2),T=S[0],N=S[1],z=Object(l.useState)(!1),F=Object(s.a)(z,2),V=F[0],E=F[1],K=function(){var n=Object(c.a)(r.a.mark((function n(e){var t,a,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Get coupon"),E(!0),h(!0),x(!0),t={method:"GET",headers:g,redirect:"follow"},n.prev=5,n.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/").concat(e),t);case 8:return a=n.sent,n.next=11,a.json();case 11:if(!(c=n.sent).coupon){n.next=16;break}return w(Object(u.a)(Object(u.a)({},y),c.coupon)),o(),n.abrupt("return");case 16:f(c.message),h(!1),n.next=25;break;case 20:n.prev=20,n.t0=n.catch(5),console.log(n.t0),f("Nie\u010do sa pokazilo"),h(!1);case 25:case"end":return n.stop()}}),n,null,[[5,20]])})));return function(e){return n.apply(this,arguments)}}(),M=function(){var n=Object(c.a)(r.a.mark((function n(){var e,t,a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Get coupons"),h(!0),x(!0),e={method:"GET",headers:g,redirect:"follow"},n.prev=4,n.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons"),e);case 7:return t=n.sent,n.next=10,t.json();case 10:a=n.sent,console.log(a),a.coupons&&N(a.coupons),h(!1),o(),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(4),console.log(n.t0),f("Nie\u010do sa pokazilo"),h(!1);case 22:case"end":return n.stop()}}),n,null,[[4,17]])})));return function(){return n.apply(this,arguments)}}(),D=function(){var n=Object(c.a)(r.a.mark((function n(e){var t,a,o,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Create coupon"),h(!0),x(!0),t=JSON.stringify({code:e.code,type:e.type,value:""===e.value||"0"===e.value?void 0:Number(e.value),maxUses:""===e.maxUses||"0"===e.maxUses?void 0:Number(e.maxUses),minValue:""===e.minValue||"0"===e.minValue?void 0:Number(e.minValue),maxUsesTotal:""===e.maxUsesTotal||"0"===e.maxUsesTotal?void 0:Number(e.maxUsesTotal)}),console.log(t),a={method:"POST",headers:g,body:t,redirect:"follow"},n.prev=6,n.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/create"),a);case 9:return o=n.sent,n.next=12,o.json();case 12:c=n.sent,console.log(c),"format"===c.error&&f("K\xf3d kup\xf3nu je povinn\xfd"),"exists"===c.error&&f("Kup\xf3n u\u017e existuje"),o.ok&&(M(),O("/dashboard/kupony")),h(!1),n.next=25;break;case 20:n.prev=20,n.t0=n.catch(6),console.log(n.t0),f("Nie\u010do sa pokazilo"),h(!1);case 25:case"end":return n.stop()}}),n,null,[[6,20]])})));return function(e){return n.apply(this,arguments)}}(),G=function(){var n=Object(c.a)(r.a.mark((function n(e){var t,a,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Delete coupon"),h(!0),x(!0),t={method:"DELETE",headers:g,redirect:"follow"},n.prev=4,n.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/").concat(e),t);case 7:return a=n.sent,n.next=10,a.json();case 10:o=n.sent,console.log(o),a.ok&&(M(),O("/dashboard/kupony")),h(!1),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(4),console.log(n.t0),f("Nie\u010do sa pokazilo"),h(!1);case 21:case"end":return n.stop()}}),n,null,[[4,16]])})));return function(e){return n.apply(this,arguments)}}(),P=function(){var n=Object(c.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:E(!1),w(j);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.jsx)(b.Provider,{value:{coupon:y,coupons:T,handleChange:function(n){var e=n.target,t=e.name,a=e.value;w(Object(u.a)(Object(u.a)({},y),{},Object(i.a)({},t,a)))},getCoupon:K,getCoupons:M,createCoupon:D,deleteCoupon:G,isUpdating:V,resetCoupons:P},children:e})}}}]);
//# sourceMappingURL=15.11e7176f.chunk.js.map