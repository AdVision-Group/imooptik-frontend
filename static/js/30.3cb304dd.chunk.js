(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[30],{70:function(e,n,t){"use strict";t.r(n),t.d(n,"BookingContext",(function(){return d}));var a=t(2),r=t(8),o=t.n(r),c=t(12),s=t(1),i=t(19),u=t(20),p=t(3),d=Object(s.createContext)({createCalendar:function(){},updateCalendar:function(){},deleteCalendar:function(){},createBooking:function(){},updateBooking:function(){},deleteBooking:function(){},createUserBooking:function(){}});n.default=function(e){var n=e.children,t=Object(p.h)().push,r=Object(s.useContext)(u.a).token,l=Object(s.useContext)(i.a),f=l.getMessage,k=l.setIsLoading,h=l.setShowModal,b=l.closeModal,v=new Headers;v.append("auth-token",r),v.append("Content-Type","application/json");var g=function(){var e=Object(c.a)(o.a.mark((function e(n){var a,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),h(!0),a=JSON.stringify(n),r={method:"POST",headers:v,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/booking/calendars"),r);case 7:return c=e.sent,e.next=10,c.json();case 10:if(!(s=e.sent).calendar){e.next=16;break}return k(!1),b(),t("/dashboard/rezervacie"),e.abrupt("return");case 16:k(!1),f(s.messageSK),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),f("Nie\u010do sa pokazilo"),k(!1);case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(o.a.mark((function e(n,a){var r,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),h(!0),r=JSON.stringify(n),c={method:"PATCH",headers:v,body:r,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/booking/calendars/").concat(a),c);case 7:return s=e.sent,e.next=10,s.json();case 10:if(!(i=e.sent).calendar){e.next=16;break}return k(!1),b(),t("/dashboard/rezervacie"),e.abrupt("return");case 16:k(!1),f(i.messageSK),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),f("Nie\u010do sa pokazilo"),k(!1);case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(n,t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),h(!0),t={method:"DELETE",headers:v,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/booking/calendars/").concat(n),t);case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,k(!1),f(r.messageSK),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0),f("Nie\u010do sa pokazilo"),k(!1);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),h(!0),t=JSON.stringify(n),a={method:"POST",headers:v,body:t,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/booking/bookings"),a);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(c=e.sent).booking){e.next=15;break}return k(!1),b(),e.abrupt("return");case 15:k(!1),f(c.messageSK),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0),f("Nie\u010do sa pokazilo"),k(!1);case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(o.a.mark((function e(n,t){var a,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),h(!0),a=JSON.stringify(n),r={method:"PATCH",headers:v,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/booking/bookings/").concat(t),r);case 7:return c=e.sent,e.next=10,c.json();case 10:s=e.sent,k(!1),f(s.message),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),f("Nie\u010do sa pokazilo"),k(!1);case 20:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(n,t){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),h(!0),t={method:"DELETE",headers:v,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/booking/bookings/").concat(n),t);case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,k(!1),f(r.message),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0),f("Nie\u010do sa pokazilo"),k(!1);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(o.a.mark((function e(n,t,a,r){var c,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),h(!0),c=JSON.stringify(n),s={method:"POST",headers:v,body:c,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/booking/userBookings"),s);case 7:return i=e.sent,e.next=10,i.json();case 10:(u=e.sent).userBooking&&(k(!1),t(),r(),b(),a()),k(!1),f(u.messageSK),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0),f("Nie\u010do sa pokazilo"),k(!1);case 21:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(n,t,a,r){return e.apply(this,arguments)}}();return Object(a.jsx)(d.Provider,{value:{createCalendar:g,updateCalendar:m,deleteCalendar:x,createBooking:j,updateBooking:w,deleteBooking:O,createUserBooking:y},children:n})}}}]);
//# sourceMappingURL=30.3cb304dd.chunk.js.map