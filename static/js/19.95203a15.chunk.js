(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[19],{51:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,lenses:{cylinder:[0,0],cylinderAxes:[0,0],diopters:[0,0],distance:[0,0]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:""}},61:function(e,n,t){"use strict";t.r(n),t.d(n,"UserContext",(function(){return O}));var a=t(1),r=t(9),s=t.n(r),c=t(12),o=t(31),i=t(19),u=t(10),l=t(0),d=t(2),p=t(17),h=t(16),f=function(e){var n=new Headers;n.append("auth-token",e);var t={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users"),t)},m=function(e,n){var t=new Headers;t.append("auth-token",e),t.append("Content-Type","application/json");var a={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(n),a)},b=function(e,n){var t=n._id,a=n.address,r=n.admin,s=n.city,c=n.country,o=(n.email,n.lenses),i=o.cylinder,u=o.cylinderAxes,l=o.diopters,d=o.distance,p=n.name,h=n.phone,f=n.psc,m=n.premises,b=new Headers;b.append("auth-token",e),b.append("Content-Type","application/json");var g={method:"PATCH",headers:b,body:JSON.stringify({address:a||void 0,admin:r,premises:0===Number(m)?void 0:m,city:s||void 0,country:c||void 0,lenses:{cylinder:i,cylinderAxes:u,diopters:l,distance:d},name:p,phone:h||void 0,psc:f||void 0}),redirect:"follow"};return console.log(t),fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(t),g)},g=function(e,n){console.log(n);var t=n.name,a=n.email,r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var s={method:"POST",headers:r,body:JSON.stringify({email:a,name:t}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),s)},j=function(e,n){console.log(n);var t=n.name,a=n.email,r=n.password,s=n.premises,c=n.admin,o=new Headers;o.append("auth-token",e),o.append("Content-Type","application/json");var i={method:"POST",headers:o,body:JSON.stringify({admin:Number(c),email:a,name:t,premises:Number(s),password:r}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),i)},v=t(51),O=Object(l.createContext)({isUpdating:!1,activeIndex:0,handleChangeFilterItem:function(){},filterItems:[],totalCount:0,users:null,user:null,getUsers:function(){},getUser:function(){},handleChange:function(){},handleDioptersChange:function(){},handleDistanceChange:function(){},handleCylinderChange:function(){},handleCylinderAxesChange:function(){},updateUser:function(){},resetUser:function(){},formToShow:0,switchFormButtons:[],toggleUserForm:function(){},createUser:function(){}});n.default=function(e){var n=e.children,t=Object(d.g)().push,r=Object(l.useContext)(p.a).token,x=Object(l.useContext)(h.a),y=x.closeModal,k=x.getMessage,w=x.setIsLoading,C=x.setShowModal,N=Object(l.useState)(v.a),U=Object(u.a)(N,2),S=U[0],z=U[1],A=Object(l.useState)(null),T=Object(u.a)(A,2),I=T[0],F=T[1],H=Object(l.useState)(0),P=Object(u.a)(H,2),D=P[0],J=P[1],E=Object(l.useState)(!1),M=Object(u.a)(E,2),Z=M[0],B=M[1],G=Object(l.useState)(0),L=Object(u.a)(G,2),V=L[0],R=L[1],_=Object(l.useState)(0),q=Object(u.a)(_,2),K=q[0],Q=q[1];Object(l.useEffect)((function(){z(Object(i.a)(Object(i.a)({},S),{},{name:S.fName+" "+S.lName}))}),[S.fName,S.lName]);var W=function(){var e=Object(c.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),e.prev=2,e.next=5,f(r);case 5:return n=e.sent,e.next=8,n.json();case 8:t=e.sent,console.log(t),t.users?(F(t.users),J(t.count),w(!1),y()):(k(t.message),w(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(c.a)(s.a.mark((function e(n){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),B(!0),e.prev=3,e.next=6,m(r,n);case 6:return t=e.sent,e.next=9,t.json();case 9:(a=e.sent).user?(z(Object(i.a)(Object(i.a)(Object(i.a)({},S),a.user),{},{lenses:{cylinder:a.user.lenses.cylinder.length?a.user.lenses.cylinder:[0,0],cylinderAxes:a.user.lenses.cylinderAxes.length?a.user.lenses.cylinderAxes:[0,0],diopters:a.user.lenses.diopters.length?a.user.lenses.diopters:[0,0],distance:a.user.lenses.distance.length?a.user.lenses.distance:[0,0]},fName:a.user.name?a.user.name.split(" ")[0]:"",lName:a.user.name?a.user.name.split(" ")[1]:""})),w(!1),y()):(k(a.message),w(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(s.a.mark((function e(n){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),C(!0),console.log(n),e.prev=3,e.next=6,b(r,n);case 6:return a=e.sent,e.next=9,a.json();case 9:if(c=e.sent,console.log(c),!c.error){e.next=15;break}return w(!1),k(c.message),e.abrupt("return");case 15:w(!1),y(),t("/dashboard/zakaznici"),W(),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(3),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 26:case"end":return e.stop()}}),e,null,[[3,21]])})));return function(n){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(s.a.mark((function e(n){var a,c,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!0),C(!0),e.prev=2,0!==K){e.next=21;break}return e.next=6,g(r,n);case 6:return a=e.sent,e.next=9,a.json();case 9:if(c=e.sent,console.log(c),!c.error){e.next=15;break}return k(c.message),w(!1),e.abrupt("return");case 15:w(!1),W(),t("/dashboard/zakaznici"),y(),e.next=36;break;case 21:return e.next=23,j(r,n);case 23:return o=e.sent,e.next=26,o.json();case 26:if(i=e.sent,console.log(i),!i.error){e.next=32;break}return k(i.message),w(!1),e.abrupt("return");case 32:w(!1),W(),t("/dashboard/zakaznici"),y();case 36:e.next=43;break;case 38:e.prev=38,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),w(!1);case 43:case"end":return e.stop()}}),e,null,[[2,38]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.jsx)(O.Provider,{value:{isUpdating:Z,activeIndex:V,handleChangeFilterItem:function(e){R(e)},filterItems:[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2},{id:3,name:"Velk\xfd brat",filter:3}],users:I,user:S,totalCount:D,getUsers:W,getUser:X,handleChange:function(e){var n=e.target,t=n.name,a=n.value;z(Object(i.a)(Object(i.a)({},S),{},Object(o.a)({},t,a)))},handleDioptersChange:function(e,n){var t=S.lenses.diopters;t[n]=Number(e.target.value),z(Object(i.a)(Object(i.a)({},S),{},{lenses:Object(i.a)(Object(i.a)({},S.lenses),{},{diopters:t})}))},handleDistanceChange:function(e,n){var t=S.lenses.distance;t[n]=Number(e.target.value),z(Object(i.a)(Object(i.a)({},S),{},{lenses:Object(i.a)(Object(i.a)({},S.lenses),{},{distance:t})}))},handleCylinderChange:function(e,n){var t=S.lenses.cylinder;t[n]=Number(e.target.value),z(Object(i.a)(Object(i.a)({},S),{},{lenses:Object(i.a)(Object(i.a)({},S.lenses),{},{cylinder:t})}))},handleCylinderAxesChange:function(e,n){var t=S.lenses.cylinderAxes;t[n]=Number(e.target.value),z(Object(i.a)(Object(i.a)({},S),{},{lenses:Object(i.a)(Object(i.a)({},S.lenses),{},{cylinderAxes:t})}))},updateUser:Y,resetUser:function(){z(Object(i.a)({},v.a)),B(!1),Q(0)},formToShow:K,switchFormButtons:[{name:"Z\xe1kazn\xedk"},{name:"Admin"}],toggleUserForm:function(e,n){e.preventDefault(),Q(n)},createUser:$},children:n})}}}]);
//# sourceMappingURL=19.95203a15.chunk.js.map