(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[25],{94:function(t,e,n){"use strict";n.r(e),n.d(e,"AnalyticsContext",(function(){return p}));var a=n(1),s=n(4),o=n.n(s),c=n(11),r=n(10),i=n(0),u=n(17),l=n(16),p=Object(i.createContext)({stats:null,getAnalytics:function(){}});e.default=function(t){var e=t.children,n=Object(i.useContext)(u.a).token,s=Object(i.useContext)(l.a),d=s.closeModal,h=s.getMessage,f=s.setShowModal,b=s.setIsLoading,g=Object(i.useState)(null),j=Object(r.a)(g,2),k=j[0],v=j[1],x=new Headers;x.append("auth-token",n),x.append("Content-Type","application/json");var w=function(){var t=Object(c.a)(o.a.mark((function t(e){var n,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),f(!0),b(!0),n={method:"GET",headers:x,redirect:"follow"},t.prev=4,t.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/stats/").concat(e),n);case 7:return a=t.sent,console.log(a),t.next=11,a.json();case 11:if(s=t.sent,console.log(s),!s.stats){t.next=17;break}return v(s.stats),d(),t.abrupt("return");case 17:h(s.message),b(!1),t.next=26;break;case 21:t.prev=21,t.t0=t.catch(4),console.log(t.t0),h("Nieco sa pokazilo"),b(!1);case 26:case"end":return t.stop()}}),t,null,[[4,21]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(p.Provider,{value:{stats:k,getAnalytics:w},children:e})}}}]);
//# sourceMappingURL=25.c5cc72d5.chunk.js.map