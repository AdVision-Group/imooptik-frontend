(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[30],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"ImageContext",(function(){return d}));var a=n(2),r=n(7),s=n.n(r),c=n(12),o=n(10),i=n(1),u=n(18),p=n(19),l=function(e,t,n,a){var r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var s={method:"POST",headers:r,body:JSON.stringify({name:n||" ",alt:a||" ",image:t}),redirect:"follow"};return fetch("".concat("https://coronashop.store:8080","/api/admin/images/upload"),s)},f=function(e,t,n){var a=new Headers;a.append("Content-Type","application/json");var r={method:"POST",headers:a,body:JSON.stringify({sortBy:{dateCreated:-1},limit:t,skip:n}),redirect:"follow"};return fetch("".concat("https://coronashop.store:8080","/api/images/filter"),r)},g=function(e,t){var n=new Headers;n.append("auth-token",e);var a={method:"DELETE",headers:n,redirect:"follow"};return fetch("".concat("https://coronashop.store:8080","/api/admin/images/").concat(t),a)},d=Object(i.createContext)({isDisabled:!1,images:null,selectedImage:null,getImages:function(){},handleImage:function(){},handleDeleteImage:function(){},setSelectedImage:function(){},getNextImages:function(){},getPrevImage:function(){}});t.default=function(e){var t=e.children,n=Object(i.useContext)(u.a),r=n.getMessage,m=n.setIsLoading,h=n.setShowModal,v=n.closeModal,b=Object(i.useContext)(p.a).token,x=Object(i.useState)(!1),j=Object(o.a)(x,2),k=j[0],O=j[1],w=Object(i.useState)(null),I=Object(o.a)(w,2),y=I[0],S=I[1],N=Object(i.useState)(null),C=Object(o.a)(N,2),D=C[0],z=C[1],P=Object(i.useState)(4),T=Object(o.a)(P,1)[0],J=Object(i.useState)(0),E=Object(o.a)(J,2),H=E[0],M=E[1],L=function(){var e=Object(c.a)(s.a.mark((function e(t,n,a,c,o){var i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),m(!0),O(!0),e.prev=3,e.next=6,l(b,t,n,a);case 6:return i=e.sent,e.next=9,i.json();case 9:(u=e.sent).image&&(z(u.image),c(u.image._id),q(),o()),h(!1),m(!1),O(!1),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0),r("Nieco sa pokazilo"),m(!1),O(!1);case 22:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t,n,a,r,s){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y.length===T){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,f(0,T,H+t);case 5:return n=e.sent,e.next=8,n.json();case 8:(a=e.sent).images&&(S(a.images),M(H+t)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),r("Nieco sa pokazilo"),m(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==H){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,f(0,T,H-t);case 5:return n=e.sent,e.next=8,n.json();case 8:(a=e.sent).images&&(S(a.images),M(H-t)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),r("Nieco sa pokazilo"),m(!1);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),m(!0),e.prev=2,e.next=5,f(0,T,H);case 5:return t=e.sent,e.next=8,t.json();case 8:(n=e.sent).images&&S(n.images),r(n.message),m(!1),v(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),r("Nieco sa pokazilo"),m(!1);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(s.a.mark((function e(t,n){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),h(!0),m(!0),e.prev=3,e.next=6,g(b,t);case 6:return a=e.sent,e.next=9,a.json();case 9:c=e.sent,r(c.message),m(!1),q(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),r("Nieco sa pokazilo"),m(!1);case 20:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.jsx)(d.Provider,{value:{isDisabled:k,images:y,selectedImage:D,getImages:q,handleImage:L,handleDeleteImage:A,setSelectedImage:z,getNextImages:B,getPrevImage:_},children:t})}}}]);
//# sourceMappingURL=30.4eeb7d0d.chunk.js.map