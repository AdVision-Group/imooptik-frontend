(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[22],{52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,company:{ico:"",dic:"",icdph:"",address:"",psc:"",country:""},lenses:{cylinder:[],cylinderAxes:[],diopters:[],distance:[],addition:[],basis:[],prism:[]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:"",birthDate:Date.now(),optometrist:!1}},62:function(e,t,n){"use strict";n.r(t),n.d(t,"UserContext",(function(){return O}));var a=n(1),r=n(4),s=n.n(r),o=n(11),c=n(31),i=n(19),u=n(10),l=n(0),p=n(2),d=n(17),f=n(16),m=function(e,t){var n=new Headers;n.append("auth-token",e),n.append("Content-Type","application/json");var a={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(t),a)},h=function(e,t,n){var a=new Headers;a.append("auth-token",e),a.append("Content-Type","application/json");var r={method:"PATCH",headers:a,body:JSON.stringify(Object(i.a)({},t)),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(n),r)},b=function(e,t){var n=t.name,a=t.email,r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var s={method:"POST",headers:r,body:JSON.stringify({email:a,name:n}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),s)},j=function(e,t){console.log(t);var n=t.name,a=t.email,r=t.password,s=t.premises,o=t.admin,c=new Headers;c.append("auth-token",e),c.append("Content-Type","application/json");var i={method:"POST",headers:c,body:JSON.stringify({admin:Number(o),email:a,name:n,premises:Number(s),password:r}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),i)},g=n(52),O=Object(l.createContext)({isUpdating:!1,activeIndex:0,handleChangeFilterItem:function(){},filterItems:[],totalCount:0,users:null,user:null,getUser:function(){},handleChange:function(){},handleCompanyChange:function(){},updateUser:function(){},resetUser:function(){},formToShow:0,switchFormButtons:[],toggleUserForm:function(){},createUser:function(){},getFilteredUsers:function(){},getUserByQuery:function(){}});t.default=function(e){var t=e.children,n=Object(p.h)().push,r=Object(l.useContext)(d.a).token,v=Object(l.useContext)(f.a),y=v.closeModal,x=v.getMessage,k=v.setIsLoading,w=v.setShowModal,C=Object(l.useState)(g.a),N=Object(u.a)(C,2),S=N[0],U=N[1],T=Object(l.useState)(null),z=Object(u.a)(T,2),P=z[0],F=z[1],I=Object(l.useState)(0),J=Object(u.a)(I,2),H=J[0],_=(J[1],Object(l.useState)(!1)),A=Object(u.a)(_,2),B=A[0],E=A[1],D=Object(l.useState)(0),M=Object(u.a)(D,2),Z=M[0],L=M[1],Q=Object(l.useState)(0),G=Object(u.a)(Q,2),R=G[0],V=G[1];Object(l.useEffect)((function(){U(Object(i.a)(Object(i.a)({},S),{},{name:S.fName+" "+S.lName}))}),[S.fName,S.lName]);var q=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),E(!0),e.prev=3,e.next=6,m(r,t);case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).user?(U(Object(i.a)(Object(i.a)(Object(i.a)({},S),a.user),{},{fName:a.user.name?a.user.name.split(" ")[0]:"",lName:a.user.name?a.user.name.split(" ")[1]:""})),k(!1),y()):(x(a.message),k(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),x("Nieco sa pokazilo"),k(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(o.a)(s.a.mark((function e(t,a){var o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(t),e.prev=3,e.next=6,h(r,t,a);case 6:return o=e.sent,e.next=9,o.json();case 9:if(c=e.sent,console.log(c),!c.error){e.next=17;break}return x(c.message),"format"===c.error&&c.message.includes("lenses.cylinderAxes")&&x("Osa mus\xed byt v\xe4\u010d\u0161ia alebo rovn\xe1 0"),"phone-exists"===c.error&&x("Telef\xf3nne \u010d\xedslo u\u017e v datab\xe1zy existuje"),k(!1),e.abrupt("return");case 17:k(!1),y(),n("/dashboard/zakaznici"),Y({filters:{admin:Z}}),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(3),console.log(e.t0),x("Nieco sa pokazilo"),k(!1);case 28:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,o,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),w(!0),e.prev=2,0!==R){e.next=24;break}if(a={},t._id){e.next=21;break}return console.log("creating new user"),e.next=9,b(r,t);case 9:return o=e.sent,e.next=12,o.json();case 12:if(a=e.sent,console.log(a),!a.error){e.next=20;break}return x(a.message),"email"===a.type&&x("Email existuje"),"format"===a.error&&a.message.includes("email")&&x("Email musi byt platny email"),k(!1),e.abrupt("return");case 20:U(Object(i.a)(Object(i.a)({},t),{},{_id:a.user._id}));case 21:K({_id:a.user?a.user._id:t._id,lenses:Object(i.a)({},t.lenses),address:t.city,city:t.city,country:t.country,phone:t.phone,psc:t.phone}),e.next=39;break;case 24:return e.next=26,j(r,t);case 26:return c=e.sent,e.next=29,c.json();case 29:if(u=e.sent,console.log(u),!u.error){e.next=35;break}return x(u.message),k(!1),e.abrupt("return");case 35:k(!1),Y({filters:{admin:Z}}),n("/dashboard/zakaznici"),y();case 39:e.next=46;break;case 41:e.prev=41,e.t0=e.catch(2),console.log(e.t0),x("Nieco sa pokazilo"),k(!1);case 46:case"end":return e.stop()}}),e,null,[[2,41]])})));return function(t){return e.apply(this,arguments)}}(),X=new Headers;X.append("auth-token",r),X.append("Content-Type","application/json");var Y=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(t),n=JSON.stringify(t),a={method:"POST",headers:X,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),a);case 8:return r=e.sent,e.next=11,r.json();case 11:if(o=e.sent,console.log(o),!o.users){e.next=17;break}return F(o.users),y(),e.abrupt("return");case 17:x(o.message),k(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),x("Nieco sa pokazilo"),k(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(t),n=JSON.stringify(t),a={method:"POST",headers:X,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),a);case 8:return r=e.sent,e.next=11,r.json();case 11:if(o=e.sent,console.log(o),!o.users){e.next=17;break}return F(o.users),y(),e.abrupt("return");case 17:x(o.message),k(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),x("Nieco sa pokazilo"),k(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(O.Provider,{value:{isUpdating:B,activeIndex:Z,handleChangeFilterItem:function(e){L(e)},filterItems:[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2}],users:P,user:S,totalCount:H,getUser:q,handleChange:function(e){var t=e.target,n=t.name,a=t.value;console.log(n,a),U(Object(i.a)(Object(i.a)({},S),{},Object(c.a)({},n,a)))},handleParameterChange:function(e,t){var n=e.target,a=n.name,r=n.value,s=S.lenses[a];s[t]=Number(r),U(Object(i.a)(Object(i.a)({},S),{},{lenses:Object(i.a)(Object(i.a)({},S.lenses),{},Object(c.a)({},a,s))}))},handleCompanyChange:function(e){var t=e.target,n=t.name,a=t.value;U(Object(i.a)(Object(i.a)({},S),{},{company:Object(i.a)(Object(i.a)({},S.company),{},Object(c.a)({},n,a))}))},updateUser:K,resetUser:function(){U(Object(i.a)({},g.a)),E(!1),V(0)},formToShow:R,switchFormButtons:[{name:"Z\xe1kazn\xedk"},{name:"Admin"}],toggleUserForm:function(e,t){e.preventDefault(),V(t)},createUser:W,getFilteredUsers:Y,getUserByQuery:$},children:t})}}}]);
//# sourceMappingURL=22.da2fdd8c.chunk.js.map