(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[22],{54:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,lenses:{cylinder:[0,0,0,0],cylinderAxes:[0,0,0,0],diopters:[0,0,0,0],distance:[0,0,0,0],addition:[0,0,0,0],basis:[0,0,0,0],prism:[0,0,0,0]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:""}},67:function(e,t,n){"use strict";n.r(t),n.d(t,"UserContext",(function(){return y}));var r=n(1),s=n(9),a=n.n(s),o=n(12),c=n(31),i=n(19),u=n(10),l=n(0),d=n(2),p=n(17),m=n(16),f=function(e){var t=new Headers;t.append("auth-token",e);var n={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users"),n)},h=function(e,t){var n=new Headers;n.append("auth-token",e),n.append("Content-Type","application/json");var r={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(t),r)},b=function(e,t){var n=t._id,r=t.address,s=t.admin,a=t.city,o=t.country,c=t.email,i=t.lenses,u=i.cylinder,l=i.cylinderAxes,d=i.diopters,p=i.distance,m=i.addition,f=i.basis,h=i.prism,b=t.name,g=t.phone,v=t.psc,j=t.premises,y=new Headers;y.append("auth-token",e),y.append("Content-Type","application/json");var x={method:"PATCH",headers:y,body:JSON.stringify({address:r||void 0,admin:s,premises:0===Number(j)?void 0:j,city:a||void 0,country:o||void 0,email:c||void 0,lenses:{cylinder:u,cylinderAxes:l,diopters:d,distance:p,addition:m,basis:f,prism:h},name:b,phone:g||void 0,psc:v||void 0}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(n),x)},g=function(e,t){var n=t.name,r=t.email,s=new Headers;s.append("auth-token",e),s.append("Content-Type","application/json");var a={method:"POST",headers:s,body:JSON.stringify({email:r,name:n}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),a)},v=function(e,t){console.log(t);var n=t.name,r=t.email,s=t.password,a=t.premises,o=t.admin,c=new Headers;c.append("auth-token",e),c.append("Content-Type","application/json");var i={method:"POST",headers:c,body:JSON.stringify({admin:Number(o),email:r,name:n,premises:Number(a),password:s}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),i)},j=n(54),y=Object(l.createContext)({isUpdating:!1,activeIndex:0,handleChangeFilterItem:function(){},filterItems:[],totalCount:0,users:null,user:null,getUsers:function(){},getUser:function(){},handleChange:function(){},updateUser:function(){},resetUser:function(){},formToShow:0,switchFormButtons:[],toggleUserForm:function(){},createUser:function(){},getFilteredUsers:function(){},getUserByQuery:function(){}});t.default=function(e){var t=e.children,n=Object(d.g)().push,s=Object(l.useContext)(p.a).token,x=Object(l.useContext)(m.a),O=x.closeModal,k=x.getMessage,w=x.setIsLoading,N=x.setShowModal,U=Object(l.useState)(j.a),S=Object(u.a)(U,2),C=S[0],T=S[1],z=Object(l.useState)(null),A=Object(u.a)(z,2),P=A[0],F=A[1],H=Object(l.useState)(0),I=Object(u.a)(H,2),J=I[0],_=I[1],E=Object(l.useState)(!1),B=Object(u.a)(E,2),M=B[0],Z=B[1],G=Object(l.useState)(0),L=Object(u.a)(G,2),Q=L[0],D=L[1],R=Object(l.useState)(0),V=Object(u.a)(R,2),q=V[0],K=V[1];Object(l.useEffect)((function(){T(Object(i.a)(Object(i.a)({},C),{},{name:C.fName+" "+C.lName}))}),[C.fName,C.lName]);var W=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),N(!0),e.prev=2,e.next=5,f(s);case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,console.log(n),n.users?(F(n.users),_(n.count),w(!1),O()):(k(n.message),w(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),N(!0),Z(!0),e.prev=3,e.next=6,h(s,t);case 6:return n=e.sent,e.next=9,n.json();case 9:(r=e.sent).user?(T(Object(i.a)(Object(i.a)(Object(i.a)({},C),r.user),{},{lenses:{cylinder:r.user.lenses.cylinder.length?r.user.lenses.cylinder:[0,0,0,0],cylinderAxes:r.user.lenses.cylinderAxes.length?r.user.lenses.cylinderAxes:[0,0,0,0],diopters:r.user.lenses.diopters.length?r.user.lenses.diopters:[0,0,0,0],distance:r.user.lenses.distance.length?r.user.lenses.distance:[0,0,0,0],addition:r.user.lenses.addition.length?r.user.lenses.addition:[0,0,0,0],basis:r.user.lenses.basis.length?r.user.lenses.basis:[0,0,0,0],prism:r.user.lenses.prism.length?r.user.lenses.prism:[0,0,0,0]},fName:r.user.name?r.user.name.split(" ")[0]:"",lName:r.user.name?r.user.name.split(" ")[1]:""})),w(!1),O()):(k(r.message),w(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),N(!0),console.log(t),e.prev=3,e.next=6,b(s,t);case 6:return r=e.sent,e.next=9,r.json();case 9:if(o=e.sent,console.log(o),!o.error){e.next=17;break}return k(o.message),"format"===o.error&&o.message.includes("lenses.cylinderAxes")&&k("Osa mus\xed byt v\xe4\u010d\u0161ia alebo rovn\xe1 0"),"phone-exists"===o.error&&k("Telef\xf3nne \u010d\xedslo u\u017e v datab\xe1zy existuje"),w(!1),e.abrupt("return");case 17:w(!1),O(),n("/dashboard/zakaznici"),W(),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(3),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 28:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,o,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!0),N(!0),e.prev=2,0!==q){e.next=24;break}if(r={},t._id){e.next=21;break}return console.log("creating new user"),e.next=9,g(s,t);case 9:return o=e.sent,e.next=12,o.json();case 12:if(r=e.sent,console.log(r),!r.error){e.next=20;break}return k(r.message),"email"===r.type&&k("Email existuje"),"format"===r.error&&r.message.includes("email")&&k("Email musi byt platny email"),w(!1),e.abrupt("return");case 20:T(Object(i.a)(Object(i.a)({},t),{},{_id:r.user._id}));case 21:Y({_id:r.user?r.user._id:t._id,lenses:Object(i.a)({},t.lenses),address:t.city,city:t.city,country:t.country,phone:t.phone,psc:t.phone}),e.next=39;break;case 24:return e.next=26,v(s,t);case 26:return c=e.sent,e.next=29,c.json();case 29:if(u=e.sent,console.log(u),!u.error){e.next=35;break}return k(u.message),w(!1),e.abrupt("return");case 35:w(!1),W(),n("/dashboard/zakaznici"),O();case 39:e.next=46;break;case 41:e.prev=41,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 46:case"end":return e.stop()}}),e,null,[[2,41]])})));return function(t){return e.apply(this,arguments)}}(),ee=new Headers;ee.append("auth-token",s),ee.append("Content-Type","application/json");var te=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),N(!0),console.log(t),n=JSON.stringify(t),r={method:"POST",headers:ee,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),r);case 8:return s=e.sent,e.next=11,s.json();case 11:if(o=e.sent,console.log(o),!o.users){e.next=17;break}return F(o.users),O(),e.abrupt("return");case 17:k(o.message),w(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),N(!0),console.log(t),n=JSON.stringify(t),r={method:"POST",headers:ee,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),r);case 8:return s=e.sent,e.next=11,s.json();case 11:if(o=e.sent,console.log(o),!o.users){e.next=17;break}return F(o.users),O(),e.abrupt("return");case 17:k(o.message),w(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(y.Provider,{value:{isUpdating:M,activeIndex:Q,handleChangeFilterItem:function(e){D(e)},filterItems:[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2}],users:P,user:C,totalCount:J,getUsers:W,getUser:X,handleChange:function(e){var t=e.target,n=t.name,r=t.value;T(Object(i.a)(Object(i.a)({},C),{},Object(c.a)({},n,r)))},handleParameterChange:function(e,t){var n=e.target,r=n.name,s=n.value,a=C.lenses[r];a[t]=Number(s),T(Object(i.a)(Object(i.a)({},C),{},{lenses:Object(i.a)(Object(i.a)({},C.lenses),{},Object(c.a)({},r,a))}))},updateUser:Y,resetUser:function(){T(Object(i.a)({},j.a)),Z(!1),K(0)},formToShow:q,switchFormButtons:[{name:"Z\xe1kazn\xedk"},{name:"Admin"}],toggleUserForm:function(e,t){e.preventDefault(),K(t)},createUser:$,getFilteredUsers:te,getUserByQuery:ne},children:t})}}}]);
//# sourceMappingURL=22.f22bf3d3.chunk.js.map