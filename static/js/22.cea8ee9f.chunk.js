(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[22],{54:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));var a=["eshop","Centr\xe1lny sklad","Obchodn\xe1, Bratislava","Mileti\u010dova, Bratislava","Vajnory, Bratislava","Vajnorsk\xe1 53, Bratislava","OC Bran\u010d, Senica"],o=[{id:0,name:"V\u0161etky"},{id:1,name:"Centr\xe1lny sklad"},{id:2,name:"Obchodn\xe1, Bratislava"},{id:3,name:"Mileti\u010dova, Bratislava"},{id:4,name:"Vajnory, Bratislava"},{id:5,name:"Vajnorsk\xe1 53, Bratislava"},{id:6,name:"OC Bran\u010d, Senica"}],r=["\u010ciern\xe1","Modr\xe1","\u010cerven\xe1","Siv\xe1","Zlat\xe1","Strieborn\xe1","Hned\xe1","Fialov\xe1","Zelen\xe1","Sed\xe1","Bordov\xe1"],c=["Acet\xe1t","Kov","Tit\xe1n","TR90","Patent","Optyl"],s=["Pilot","Squared","Browline","Cat eye","Tiny","Oversize","Okr\xfahle","Ov\xe1lne","Obd\u013a\u017enikov\xe9","Flat top","\u0160peci\xe1lne"],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.toString();var t=0;return e.includes(",")?1===e.split(",")[1].length?(t=e.split(",")[0]+e.split(",")[1]+"0",Number(t)):(t=e.split(",")[0]+e.split(",")[1],Number(t)):Number(100*e)},i=function(e){return e.includes(",")?e.split(",")[0]+"."+e.split(",")[1]:e}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"CouponsContext",(function(){return h}));var a=n(2),o=n(7),r=n.n(o),c=n(12),s=n(31),u=n(21),i=n(10),p=n(1),l=n(18),d=n(19),v=n(3),f=n(54),h=Object(p.createContext)({coupon:null,coupons:null,handleChange:function(){},getCoupon:function(){},getCoupons:function(){},createCoupon:function(){},deleteCoupon:function(){},isUpdating:!1,resetCoupons:function(){}}),b={code:"",type:"percentage",value:0,maxUses:0,minValue:0,maxUsesTotal:0};t.default=function(e){var t=e.children,n=Object(p.useContext)(l.a),o=n.closeModal,m=n.getMessage,j=n.setIsLoading,O=n.setShowModal,x=Object(p.useContext)(d.a).token,k=Object(v.h)().push,g=new Headers;g.append("auth-token",x),g.append("Content-Type","application/json");var C=Object(p.useState)(b),y=Object(i.a)(C,2),w=y[0],S=y[1],T=Object(p.useState)(null),B=Object(i.a)(T,2),U=B[0],N=B[1],V=Object(p.useState)(!1),M=Object(i.a)(V,2),z=M[0],E=M[1],P=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),j(!0),O(!0),n={method:"GET",headers:g,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://coronashop.store:8080","/api/admin/coupons/").concat(t),n);case 7:return a=e.sent,e.next=10,a.json();case 10:if(!(c=e.sent).coupon){e.next=15;break}return S(Object(u.a)(Object(u.a)({},w),c.coupon)),o(),e.abrupt("return");case 15:m(c.message),j(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0),m("Nie\u010do sa pokazilo"),j(!1);case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),O(!0),t={method:"GET",headers:g,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://coronashop.store:8080","/api/admin/coupons"),t);case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).coupons&&N(a.coupons),j(!1),o(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),m("Nie\u010do sa pokazilo"),j(!1);case 20:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),O(!0),console.log(t.value),n=JSON.stringify(Object(u.a)(Object(u.a)(Object(u.a)({code:t.code,type:t.type},t.value&&{value:"flat"===t.type?Object(f.a)(t.value):Number(t.value)}),{},{maxUses:""===t.maxUses||"0"===t.maxUses?void 0:Number(t.maxUses)},t.minValue&&{minValue:Object(f.a)(t.minValue)}),{},{maxUsesTotal:""===t.maxUsesTotal||"0"===t.maxUsesTotal?void 0:Number(t.maxUsesTotal)})),a={method:"POST",headers:g,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("https://coronashop.store:8080","/api/admin/coupons/create"),a);case 8:return o=e.sent,e.next=11,o.json();case 11:"format"===(c=e.sent).error&&m("K\xf3d kup\xf3nu je povinn\xfd"),"exists"===c.error&&m("Kup\xf3n u\u017e existuje"),o.ok&&(J(),k("/dashboard/kupony")),j(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0),m("Nie\u010do sa pokazilo"),j(!1);case 23:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),O(!0),n={method:"DELETE",headers:g,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://coronashop.store:8080","/api/admin/coupons/").concat(t),n);case 6:return a=e.sent,e.next=9,a.json();case 9:e.sent,a.ok&&(J(),k("/dashboard/kupony")),j(!1),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0),m("Nie\u010do sa pokazilo"),j(!1);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!1),S(b);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(h.Provider,{value:{coupon:w,coupons:U,handleChange:function(e){var t=e.target,n=t.name,a=t.value;S(Object(u.a)(Object(u.a)({},w),{},Object(s.a)({},n,a)))},getCoupon:P,getCoupons:J,createCoupon:K,deleteCoupon:F,isUpdating:z,resetCoupons:G},children:t})}}}]);
//# sourceMappingURL=22.cea8ee9f.chunk.js.map