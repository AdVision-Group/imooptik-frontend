(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[14,26],{237:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t(0),r=t(2),c=t(69),i=t(16),u=t(51),s=t(53),l=t(50),p=t(30),d=t(7),m=t(8),b=t(27),f=t(26);function j(){var e=Object(d.a)(["\n    background-color: #DD4C4C;\n\n"]);return j=function(){return e},e}function h(){var e=Object(d.a)(["\n\n"]);return h=function(){return e},e}function x(){var e=Object(d.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: #F5F5F5;\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return x=function(){return e},e}function v(){var e=Object(d.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    display: flex;\n    justify-content: space-between;\n"]);return v=function(){return e},e}var O=m.c.div(v(),b.b),g=m.c.select(x()),k=Object(m.c)(f.a)(h()),y=Object(m.c)(f.a)(j());n.default=function(){var e=Object(r.h)().couponId,n=Object(a.useContext)(i.a),t=n.closeModal,d=n.isLoading,m=n.message,b=n.showModal,f=Object(a.useContext)(c.CouponsContext),j=f.coupon,h=f.getCoupon,x=f.handleChange,v=f.createCoupon,C=f.isUpdating,w=f.deleteCoupon,U=f.resetCoupons;return Object(a.useEffect)((function(){"novy-kupon"!==e&&h(e)}),[e]),Object(a.useEffect)((function(){return function(){U()}}),[]),Object(o.jsxs)("section",{children:[b&&Object(o.jsx)(p.a,{loading:d,title:m,close:t}),Object(o.jsxs)(O,{children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Nov\xfd kup\xf3n"})}),Object(o.jsxs)("div",{children:[C&&Object(o.jsx)(y,{onClick:function(){return w(e)},children:"Odstr\xe1ni\u0165"}),!C&&Object(o.jsx)(k,{onClick:function(){return v(j)},children:"Vytvori\u0165"})]})]}),Object(o.jsxs)(u.a,{children:[Object(o.jsx)(s.a,{label:"K\xf3d kup\xf3nu",example:"napr: 50off",children:Object(o.jsx)(l.a,{label:"K\xf3d",type:"text",name:"code",value:j.code,handleChange:function(e){return x(e)}})}),Object(o.jsx)(s.a,{label:"Typ kup\xf3nu",example:"",children:Object(o.jsxs)(g,{name:"type",value:j.type,onChange:function(e){return x(e)},children:[Object(o.jsx)("option",{value:"percentage",children:"Percent\xe1"}),Object(o.jsx)("option",{value:"flat",children:"Fixn\xe1 suma"})]})}),Object(o.jsx)(s.a,{label:"Hodnota",example:"",children:Object(o.jsx)(l.a,{label:"Suma",type:"number",name:"value",value:j.value.toString(),handleChange:function(e){return x(e)}})}),Object(o.jsx)(s.a,{label:"Kolko maximalne krat moze tento kupon byt pouzity jednym clovek, default je nekonecne",example:"",children:Object(o.jsx)(l.a,{label:"Suma",type:"number",name:"maxUses",value:j.maxUses.toString(),handleChange:function(e){return x(e)}})}),Object(o.jsx)(s.a,{label:"Minimalna hodnota objednavky v centoch, aby bol tento kupon aplikovatelny, default je 0",example:"",children:Object(o.jsx)(l.a,{label:"Suma",type:"number",name:"minValue",value:j.minValue.toString(),handleChange:function(e){return x(e)}})}),Object(o.jsx)(s.a,{label:"Kolko maximalne krat moze tento kupon byt pouzity dohromady vsetkymi uzivatelmi, default je nekonecne",example:"",children:Object(o.jsx)(l.a,{label:"Suma",type:"number",name:"maxUsesTotal",value:j.maxUsesTotal.toString(),handleChange:function(e){return x(e)}})})]})]})}},50:function(e,n,t){"use strict";var o=t(1),a=t(19),r=t(29),c=(t(0),t(7)),i=t(8);function u(){var e=Object(c.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return e},e}function s(){var e=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return s=function(){return e},e}var l=Object(i.b)(s()),p=i.c.div(u(),l,l);n.a=function(e){var n=e.handleChange,t=e.label,c=e.name,i=Object(r.a)(e,["handleChange","label","name"]);return Object(o.jsxs)(p,{children:[Object(o.jsx)("input",Object(a.a)({className:"form-input",name:c,onChange:n},i)),t?Object(o.jsx)("label",{htmlFor:c,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},51:function(e,n,t){"use strict";var o=t(1),a=(t(0),t(7)),r=t(8),c=t(27);function i(){var e=Object(a.a)(["\n    max-width: 115rem;\n"]);return i=function(){return e},e}function u(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return u=function(){return e},e}var s=r.c.div(u(),c.b),l=r.c.div(i());n.a=function(e){var n=e.children;return Object(o.jsx)(s,{children:Object(o.jsx)(l,{children:n})})}},53:function(e,n,t){"use strict";var o=t(19),a=t(1),r=t(29),c=(t(0),t(7));function i(){var e=Object(c.a)(["\n    display:flex;\n    align-items: center;\n\n    p {\n        margin-top: 1.8rem;\n        margin-left: 2rem;\n            opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n    @media all and (max-width: 800px) {\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n    }\n"]);return i=function(){return e},e}var u=t(8).c.div(i());n.a=function(e){var n=e.children,t=e.label,c=e.example,i=Object(r.a)(e,["children","label","example"]);return Object(a.jsxs)(u,Object(o.a)(Object(o.a)({},i),{},{children:[Object(a.jsx)("div",{children:n}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[t+" ",Object(a.jsx)("span",{children:c})]})})]}))}},69:function(e,n,t){"use strict";t.r(n),t.d(n,"CouponsContext",(function(){return b}));var o=t(1),a=t(9),r=t.n(a),c=t(12),i=t(31),u=t(19),s=t(10),l=t(0),p=t(16),d=t(17),m=t(2),b=Object(l.createContext)({coupon:null,coupons:null,handleChange:function(){},getCoupon:function(){},getCoupons:function(){},createCoupon:function(){},deleteCoupon:function(){},isUpdating:!1,resetCoupons:function(){}}),f={code:"",type:"percentage",value:0,maxUses:0,minValue:0,maxUsesTotal:0};n.default=function(e){var n=e.children,t=Object(l.useContext)(p.a),a=t.closeModal,j=t.getMessage,h=t.setIsLoading,x=t.setShowModal,v=Object(l.useContext)(d.a).token,O=Object(m.g)().push,g=new Headers;g.append("auth-token",v),g.append("Content-Type","application/json");var k=Object(l.useState)(f),y=Object(s.a)(k,2),C=y[0],w=y[1],U=Object(l.useState)(null),z=Object(s.a)(U,2),S=z[0],T=z[1],N=Object(l.useState)(!1),F=Object(s.a)(N,2),V=F[0],E=F[1],K=function(){var e=Object(c.a)(r.a.mark((function e(n){var t,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Get coupon"),E(!0),h(!0),x(!0),t={method:"GET",headers:g,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/").concat(n),t);case 8:return o=e.sent,e.next=11,o.json();case 11:if(!(c=e.sent).coupon){e.next=16;break}return w(Object(u.a)(Object(u.a)({},C),c.coupon)),a(),e.abrupt("return");case 16:j(c.message),h(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(5),console.log(e.t0),j("Nie\u010do sa pokazilo"),h(!1);case 25:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(r.a.mark((function e(){var n,t,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Get coupons"),h(!0),x(!0),n={method:"GET",headers:g,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons"),n);case 7:return t=e.sent,e.next=10,t.json();case 10:o=e.sent,console.log(o),o.coupons&&T(o.coupons),h(!1),a(),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0),j("Nie\u010do sa pokazilo"),h(!1);case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(r.a.mark((function e(n){var t,o,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Create coupon"),h(!0),x(!0),t=JSON.stringify({code:n.code,type:n.type,value:""===n.value||"0"===n.value?void 0:Number(n.value),maxUses:""===n.maxUses||"0"===n.maxUses?void 0:Number(n.maxUses),minValue:""===n.minValue||"0"===n.minValue?void 0:Number(n.minValue),maxUsesTotal:""===n.maxUsesTotal||"0"===n.maxUsesTotal?void 0:Number(n.maxUsesTotal)}),console.log(t),o={method:"POST",headers:g,body:t,redirect:"follow"},e.prev=6,e.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/create"),o);case 9:return a=e.sent,e.next=12,a.json();case 12:c=e.sent,console.log(c),"format"===c.error&&j("K\xf3d kup\xf3nu je povinn\xfd"),"exists"===c.error&&j("Kup\xf3n u\u017e existuje"),a.ok&&(M(),O("/dashboard/kupony")),h(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(6),console.log(e.t0),j("Nie\u010do sa pokazilo"),h(!1);case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(n){return e.apply(this,arguments)}}(),G=function(){var e=Object(c.a)(r.a.mark((function e(n){var t,o,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Delete coupon"),h(!0),x(!0),t={method:"DELETE",headers:g,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/coupons/").concat(n),t);case 7:return o=e.sent,e.next=10,o.json();case 10:a=e.sent,console.log(a),o.ok&&(M(),O("/dashboard/kupony")),h(!1),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0),j("Nie\u010do sa pokazilo"),h(!1);case 21:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(n){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!1),w(f);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(b.Provider,{value:{coupon:C,coupons:S,handleChange:function(e){var n=e.target,t=n.name,o=n.value;w(Object(u.a)(Object(u.a)({},C),{},Object(i.a)({},t,o)))},getCoupon:K,getCoupons:M,createCoupon:D,deleteCoupon:G,isUpdating:V,resetCoupons:B},children:n})}}}]);
//# sourceMappingURL=14.4395a16d.chunk.js.map