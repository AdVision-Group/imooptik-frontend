(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[28],{63:function(e,t,r){"use strict";r.r(t),r.d(t,"OrdersContext",(function(){return h}));var n=r(1),o=r(19),a=r(4),s=r.n(a),c=r(11),i=r(10),u=r(0),d=r(2),l=r(17),p=r(16),h=Object(u.createContext)({orders:null,getOrders:function(){},createOrder:function(){}});t.default=function(e){var t=e.children,r=Object(d.h)().push,a=Object(u.useContext)(p.a),f=a.setIsLoading,b=a.setShowModal,O=a.getMessage,v=a.closeModal,j=Object(u.useContext)(l.a).token,g=Object(u.useState)(null),k=Object(i.a)(g,2),x=k[0],m=k[1],w=new Headers;w.append("auth-token",j),w.append("Content-Type","application/json");var y=function(){var e=Object(c.a)(s.a.mark((function e(){var t,r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),b(!0),t={method:"GET",headers:w,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),t);case 6:return r=e.sent,e.next=9,r.json();case 9:if(n=e.sent,console.log(n),!n.orders){e.next=15;break}return m(n.orders),v(),e.abrupt("return");case 15:O(n.message),f(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0),O("Nieco sa pokazilo"),f(!1);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a,c,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),b(!0),n=Object(o.a)({},t),console.log("ORDER BEFORE SEND"),console.log(n),a=JSON.stringify(n),c={method:"POST",headers:w,body:a,redirect:"follow"},e.prev=7,e.next=10,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),c);case 10:return i=e.sent,e.next=13,i.json();case 13:u=e.sent,console.log(u),u.order&&(y(),v(),r("/dashboard/objednavky")),O(u.message),f(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(7),console.log(e.t0),O("Nieco sa pokazilo"),f(!1);case 25:case"end":return e.stop()}}),e,null,[[7,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(h.Provider,{value:{orders:x,getOrders:y,createOrder:C},children:t})}}}]);
//# sourceMappingURL=28.28c681fd.chunk.js.map