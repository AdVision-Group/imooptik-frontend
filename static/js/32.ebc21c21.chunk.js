(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[32],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"UserContext",(function(){return O}));var n=a(2),r=a(7),s=a.n(r),o=a(12),c=a(31),i=a(21),u=a(10),p=a(1),l=a(3),d=a(19),m=a(18),f=function(e,t){var a=new Headers;a.append("auth-token",e),a.append("Content-Type","application/json");var n={method:"GET",headers:a,redirect:"follow"};return fetch("".concat("https://coronashop.store:8080","/api/admin/users/").concat(t),n)},h=function(e,t,a){var n=new Headers;n.append("auth-token",e),n.append("Content-Type","application/json");var r={method:"PATCH",headers:n,body:JSON.stringify(Object(i.a)({},t)),redirect:"follow"};return fetch("".concat("https://coronashop.store:8080","/api/admin/users/").concat(a),r)},b=function(e,t){var a=t.name,n=t.email,r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var s={method:"POST",headers:r,body:JSON.stringify({email:n,name:a}),redirect:"follow"};return fetch("".concat("https://coronashop.store:8080","/api/auth/register"),s)},j=function(e,t){var a=t.name,n=t.email,r=t.password,s=t.premises,o=t.admin,c=new Headers;c.append("auth-token",e),c.append("Content-Type","application/json");var i={method:"POST",headers:c,body:JSON.stringify({admin:Number(o),email:n,name:a,premises:Number(s),password:r}),redirect:"follow"};return fetch("".concat("https://coronashop.store:8080","/api/auth/register"),i)},v={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,company:{ico:"",dic:"",icdph:"",address:"",psc:"",country:""},lenses:{cylinder:[1001,1001,1001,1001],cylinderAxes:[1001,1001,1001,1001],diopters:[1001,1001,1001,1001],distance:[1001,1001,1001,1001],addition:[1001,1001,1001,1001],basis:[1001,1001,1001,1001],prism:[1001,1001,1001,1001]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:"",birthDate:Date.now(),optometrist:!1},O=Object(p.createContext)({isUpdating:!1,activeIndex:0,handleChangeFilterItem:function(){},filterItems:[],totalCount:0,users:null,user:null,getUser:function(){},handleChange:function(){},handleParameterChange:function(){},handleCompanyChange:function(){},updateUser:function(){},resetUser:function(){},formToShow:0,switchFormButtons:[],toggleUserForm:function(){},createUser:function(){},getFilteredUsers:function(){},getUserByQuery:function(){},deleteUser:function(){}});t.default=function(e){var t=e.children,a=Object(l.h)().push,r=Object(p.useContext)(d.a).token,g=Object(p.useContext)(m.a),k=g.closeModal,x=g.getMessage,w=g.setIsLoading,y=g.setShowModal,N=Object(p.useState)(v),C=Object(u.a)(N,2),S=C[0],U=C[1],z=Object(p.useState)(null),T=Object(u.a)(z,2),P=T[0],E=T[1],F=Object(p.useState)(0),H=Object(u.a)(F,1)[0];console.count("USERCONTEXT"),console.log(S);var I=Object(p.useState)(!1),J=Object(u.a)(I,2),_=J[0],B=J[1],D=Object(p.useState)(0),Z=Object(u.a)(D,2),K=Z[0],L=Z[1],M=Object(p.useState)(0),A=Object(u.a)(M,2),Q=A[0],R=A[1];Object(p.useEffect)((function(){U(Object(i.a)(Object(i.a)({},S),{},{name:(null===S||void 0===S?void 0:S.fName)+" "+(null===S||void 0===S?void 0:S.lName)}))}),[null===S||void 0===S?void 0:S.fName,null===S||void 0===S?void 0:S.lName]);var G=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),y(!0),B(!0),e.prev=3,e.next=6,f(r,t);case 6:return a=e.sent,e.next=9,a.json();case 9:(n=e.sent).user?(U(Object(i.a)(Object(i.a)(Object(i.a)({},S),n.user),{},{fName:n.user.name?n.user.name.split(" ")[0]:"",lName:n.user.name?n.user.name.split(" ")[1]:""})),w(!1),k()):(x(n.message),w(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),x("Nieco sa pokazilo"),w(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(o.a)(s.a.mark((function e(t,n,o,c,u,p){var l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),y(!0),e.prev=2,e.next=5,h(r,t,n);case 5:return l=e.sent,e.next=8,l.json();case 8:if(!(d=e.sent).error){e.next=13;break}return x(d.messageSK),w(!1),e.abrupt("return");case 13:w(!1),k(),"order"===o?a("/dashboard/objednavky/".concat(n)):"profile"===o?a("/dashboard/zakaznici/".concat(n)):"isOrder"===o?(U(Object(i.a)(Object(i.a)(Object(i.a)({},t),d.user),{},{fName:d.user.name?d.user.name.split(" ")[0]:"",lName:d.user.name?d.user.name.split(" ")[1]:""})),p(Object(i.a)(Object(i.a)(Object(i.a)({},t),d.user),{},{fName:d.user.name?d.user.name.split(" ")[0]:"",lName:d.user.name?d.user.name.split(" ")[1]:""})),u()):a("/dashboard/zakaznici"),Y({filters:{admin:K}}),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0),x("Nieco sa pokazilo"),w(!1);case 24:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t,a,n,r,s,o){return e.apply(this,arguments)}}(),X=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var o,c,u,p,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!0),y(!0),e.prev=2,0!==Q){e.next=23;break}if(o={},t._id){e.next=19;break}return e.next=8,b(r,t);case 8:return c=e.sent,e.next=11,c.json();case 11:if(!(o=e.sent).error){e.next=18;break}return x(o.message),"email"===o.type&&x("Email existuje"),"format"===o.error&&o.message.includes("email")&&x("Email musi byt platny email"),w(!1),e.abrupt("return");case 18:U(Object(i.a)(Object(i.a)({},o.user),{},{_id:o.user._id}));case 19:u=o.user?o.user._id:t._id,V(Object(i.a)({},t),u,n),e.next=41;break;case 23:if(t.password===t.confirmPassword){e.next=27;break}return x("Hesl\xe1 sa nezhoduj\xfa"),w(!1),e.abrupt("return");case 27:return e.next=29,j(r,t);case 29:return p=e.sent,e.next=32,p.json();case 32:if(!(l=e.sent).error){e.next=37;break}return x(l.message),w(!1),e.abrupt("return");case 37:w(!1),Y({filters:{admin:K}}),a("/dashboard/zakaznici"),k();case 41:e.next=48;break;case 43:e.prev=43,e.t0=e.catch(2),console.log(e.t0),x("Nie\u010do sa pokazilo"),w(!1);case 48:case"end":return e.stop()}}),e,null,[[2,43]])})));return function(t,a){return e.apply(this,arguments)}}(),q=new Headers;q.append("auth-token",r),q.append("Content-Type","application/json");var W=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),y(!0),n={method:"DELETE",headers:q,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://coronashop.store:8080","/api/admin/users/").concat(t),n);case 6:return r=e.sent,e.next=9,r.json();case 9:if(!(o=e.sent).user){e.next=15;break}return a("/dashboard/zakaznici"),w(!1),k(),e.abrupt("return");case 15:x(o.messageSK),w(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0),x("Nie\u010do sa pokazilo"),w(!1);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),y(!0),a=JSON.stringify(t),n={method:"POST",headers:q,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://coronashop.store:8080","/api/admin/users/filter"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(o=e.sent).users){e.next=15;break}return E(o.users),k(),e.abrupt("return");case 15:x(o.messageSK),w(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0),x("Nieco sa pokazilo"),w(!1);case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),y(!0),a=JSON.stringify(t),n={method:"POST",headers:q,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://coronashop.store:8080","/api/admin/users/filter"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(o=e.sent).users){e.next=15;break}return E(o.users),k(),e.abrupt("return");case 15:x(o.message),w(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0),x("Nieco sa pokazilo"),w(!1);case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(O.Provider,{value:{isUpdating:_,activeIndex:K,handleChangeFilterItem:function(e){L(e)},filterItems:[{id:0,name:"Z\xe1kazn\xedci",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2}],users:P,user:S,totalCount:H,getUser:G,handleChange:function(e){var t=e.target,a=t.name,n=t.value;U(Object(i.a)(Object(i.a)({},S),{},Object(c.a)({},a,n)))},handleParameterChange:function(e,t){var a=e.target,n=a.name,r=a.value,s=S.lenses[n];s[t]=""===r?1001:r,U(Object(i.a)(Object(i.a)({},S),{},{lenses:Object(i.a)(Object(i.a)({},S.lenses),{},Object(c.a)({},n,s))}))},handleCompanyChange:function(e){var t=e.target,a=t.name,n=t.value;U(Object(i.a)(Object(i.a)({},S),{},{company:Object(i.a)(Object(i.a)({},S.company),{},Object(c.a)({},a,n))}))},updateUser:V,resetUser:function(){U(v),B(!1),R(0)},formToShow:Q,switchFormButtons:[{name:"Z\xe1kazn\xedk"},{name:"Zamestnanec"}],toggleUserForm:function(e,t){e.preventDefault(),R(t)},createUser:X,getFilteredUsers:Y,getUserByQuery:$,deleteUser:W},children:t})}}}]);
//# sourceMappingURL=32.ebc21c21.chunk.js.map