(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[22],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"BookingContext",(function(){return l}));var r=n(1),o=n(9),a=n.n(o),s=n(12),c=n(10),i=n(0),u=n(16),l=Object(i.createContext)({calendars:null,getCalendars:function(){},bookings:null,getBookings:function(){},bookingRows:null,getBookingRows:function(){}});t.default=function(e){var t=e.children,n=Object(i.useContext)(u.a),o=n.getMessage,p=n.setIsLoading,b=n.setShowModal,g=n.closeModal,k=Object(i.useState)(null),f=Object(c.a)(k,2),h=f[0],v=f[1],x=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),b(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/calendars"));case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(n=e.sent).error){e.next=13;break}return o(n.message),p(!1),e.abrupt("return");case 13:n.calendars&&(v(n.calendars),p(!1),g()),o(n.message),p(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),o("Nieco sa pokazilo"),p(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),d=Object(i.useState)(null),j=Object(c.a)(d,2),w=j[0],O=j[1],m=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),b(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/bookings"));case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(n=e.sent).error){e.next=13;break}return o(n.message),p(!1),e.abrupt("return");case 13:n.bookings&&(O(n.bookings),p(!1),g()),o(n.message),p(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),o("Nieco sa pokazilo"),p(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),R=Object(i.useState)(null),B=Object(c.a)(R,2),C=B[0],S=B[1],y=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),b(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/bookingRows"));case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(n=e.sent).error){e.next=13;break}return o(n.message),p(!1),e.abrupt("return");case 13:n.bookingRows&&(S(n.bookingRows),p(!1),g()),o(n.message),p(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),o("Nieco sa pokazilo"),p(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(l.Provider,{value:{calendars:h,getCalendars:x,bookings:w,getBookings:m,bookingRows:C,getBookingRows:y},children:t})}}}]);
//# sourceMappingURL=22.f1660cce.chunk.js.map