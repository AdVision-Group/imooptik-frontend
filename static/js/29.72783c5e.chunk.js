(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[29],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogContext",(function(){return d}));var a=n(2),o=n(8),r=n.n(o),s=n(12),c=n(5),u=n(1),i=n(20),p=n(19),l=function(e){return fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/blogs/").concat(e))},f=function(e,t){var n=new Headers;n.append("auth-token",e),n.append("Content-Type","application/json");var a={method:"DELETE",headers:n,redirect:"follow"};return fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/blogs/").concat(t),a)},d=Object(u.createContext)({posts:null,post:null,postsCount:0,getPosts:function(){},createPost:function(){},getPost:function(){},updatePost:function(){},handlePostDelete:function(){},resetBlog:function(){}});t.default=function(e){var t=e.children,n=Object(u.useContext)(i.a).token,o=Object(u.useContext)(p.a),b=o.getMessage,h=o.setIsLoading,v=o.setShowModal,j=Object(u.useState)(null),g=Object(c.a)(j,2),k=g[0],x=g[1],m=Object(u.useState)(null),w=Object(c.a)(m,2),O=w[0],P=w[1],y=Object(u.useState)(0),C=Object(c.a)(y,2),S=C[0],N=C[1],q=new Headers;q.append("auth-token",n),q.append("Content-Type","application/json");var T=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),h(!0),e.next=4,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/blogs"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,x(n.blogs),N(n.count),v(!1),h(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),h(!0),e.prev=2,e.next=5,l(t);case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(a=e.sent).blog){e.next=14;break}return P(a.blog),h(!1),b(a.message),e.abrupt("return");case 14:h(!1),b(a.message),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),b("Nieco sa pokazilo"),h(!1);case 23:v(!1),h(!1);case 25:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,o,s,c,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:function(){},v(!0),h(!0),a=JSON.stringify(t),o={method:"POST",headers:q,body:a,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/blogs"),o);case 8:return s=e.sent,e.next=11,s.json();case 11:c=e.sent,b(c.messageSK),h(!1),n(c),T(),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0),b("Nie\u010do sa pokazilo"),h(!1);case 23:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,o,s,c,u,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:function(){},v(!0),h(!0),o=JSON.stringify(t),s={method:"PATCH",headers:q,body:o,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/blogs/").concat(n),s);case 8:return c=e.sent,e.next=11,c.json();case 11:u=e.sent,b(u.messageSK),h(!1),a(u),T(),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0),b("Nie\u010do sa pokazilo"),h(!1);case 23:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),h(!0),e.prev=2,e.next=5,f(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:o=e.sent,b(o.message),h(!1),T(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),b("Nieco sa pokazilo"),h(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(d.Provider,{value:{posts:k,post:O,postsCount:S,getPosts:T,createPost:J,getPost:z,updatePost:B,handlePostDelete:D,resetBlog:function(){P(null)}},children:t})}}}]);
//# sourceMappingURL=29.72783c5e.chunk.js.map