(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[22],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"BookingContext",(function(){return g}));var a=n(1),r=n(9),o=n.n(r),c=n(12),s=n(10),u=n(0),i=n(17),l=n(16),p=function(e){return fetch("".concat("http://195.110.58.166:8080","/api/booking/calendars/").concat(e))},b=function(e){var t=new Headers;t.append("auth-token",e);var n={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/booking/userBookings"),n)},g=Object(u.createContext)({calendar:null,calendars:null,getCalendars:function(){},getCalendar:function(){},bookings:null,getBookings:function(){},userBookings:null,getUserBookings:function(){},activeCalendar:0,resetBooking:function(){},selectedDate:{name:"",value:""},setSelectedDate:function(){}});t.default=function(e){var t=e.children,n=Object(u.useContext)(l.a).token,r=Object(u.useContext)(i.a),k=r.getMessage,f=r.setIsLoading,d=r.setShowModal,v=r.closeModal,h=Object(u.useState)(0),j=Object(s.a)(h,2),x=j[0],O=j[1],m=Object(u.useState)(null),w=Object(s.a)(m,2),B=w[0],C=w[1],S=Object(u.useState)(null),y=Object(s.a)(S,2),z=y[0],D=y[1],N=Object(u.useState)({name:"",value:""}),M=Object(s.a)(N,2),J=M[0],U=M[1],E=function(){var e=Object(c.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),d(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/calendars"));case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(n=e.sent).error){e.next=13;break}return k(n.message),f(!1),e.abrupt("return");case 13:n.calendars&&(C(n.calendars),f(!1),v()),k(n.message),f(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),f(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),d(!0),U({name:"",value:""}),e.prev=3,e.next=6,p(t);case 6:return a=e.sent,e.next=9,a.json();case 9:if(r=e.sent,console.log(r),!r.calendar){e.next=16;break}return D(r.calendar),O(n),v(),e.abrupt("return");case 16:k(r.message),f(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(3),console.log(e.t0),k("Nieco sa pokazilo"),f(!1);case 25:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t,n){return e.apply(this,arguments)}}(),H=Object(u.useState)(null),I=Object(s.a)(H,2),L=I[0],P=I[1],T=Object(u.useState)(null),q=Object(s.a)(T,2),A=q[0],F=q[1],K=function(){var e=Object(c.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),d(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/booking/bookings"));case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(n=e.sent).error){e.next=13;break}return k(n.message),f(!1),e.abrupt("return");case 13:n.bookings&&(P(n.bookings),f(!1),v()),k(n.message),f(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),f(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(c.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),d(!0),e.prev=2,e.next=5,b(n);case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(a=e.sent).userBookings){e.next=13;break}return F(a.userBookings),v(),e.abrupt("return");case 13:k(a.message),f(!1),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),f(!1);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(g.Provider,{value:{calendar:z,calendars:B,getCalendars:E,getCalendar:G,bookings:L,getBookings:K,userBookings:A,getUserBookings:Q,activeCalendar:x,resetBooking:function(){O(0)},selectedDate:J,setSelectedDate:U},children:t})}}}]);
//# sourceMappingURL=22.96bf5641.chunk.js.map