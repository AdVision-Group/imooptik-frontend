(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[16,21],{55:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(22);var r=n(33);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},61:function(e,t,n){"use strict";n.r(t),n.d(t,"OrderContext",(function(){return f}));var a=n(2),r=n(7),c=n.n(r),s=n(12),o=n(55),u=n(21),i=n(10),d=n(1),l=n(19),p=n(18),f=Object(d.createContext)({step:"",order:{},cart:[],selectedProduct:null,setOrder:function(){},addUser:function(){},addProduct:function(){},addProductDiscount:function(){},addLensesParameters:function(){},deleteProduct:function(){},addLenses:function(){},addLensesDiscount:function(){},resetOrder:function(){},changeStep:function(){},selectProduct:function(){},createCombinedProducts:function(){},incrementQuantity:function(){},decrementQuantity:function(){}});t.default=function(e){var t=e.children,n=Object(d.useContext)(p.a).token,r=Object(d.useContext)(l.a),b=r.closeModal,m=r.getMessage,j=r.setIsLoading,O=r.setShowModal,h=Object(d.useState)("select-user"),g=Object(i.a)(h,2),v=g[0],y=g[1],k=Object(d.useState)({}),x=Object(i.a)(k,2),w=x[0],P=x[1],S=Object(d.useState)([]),C=Object(i.a)(S,2),N=C[0],T=C[1],U=Object(d.useState)(null),z=Object(i.a)(U,2),Q=z[0],I=z[1],A=function(e){console.log("combinedProductsArr"),console.log(e),console.log("combinedProductsArr"),P(Object(u.a)(Object(u.a)({},w),{},{combinedProducts:Object(o.a)(e)}))},L=function(e){y(e)},M=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,r,s,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==N.length){e.next=2;break}return e.abrupt("return");case 2:return j(!0),O(!0),console.log("ORIGINAL CART"),console.log(N),t=N.map((function(e){return Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({product:e.product.isPseudo?"pseudo":e.product._id},e.discount&&{discount:Object(u.a)({},e.discount)}),e.lens&&{lens:e.lens._id}),e.lensesQuant&&{lensesQuant:e.lensesQuant}),e.lenses&&{contactLenses:e.lenses})})),console.log("FORMATED CART"),console.log(t),(a=new Headers).append("auth-token",n),a.append("Content-Type","application/json"),r=JSON.stringify({combinedProducts:t}),s={method:"POST",headers:a,body:r,redirect:"follow"},e.prev=14,e.next=17,fetch("".concat("http://195.110.58.166:8080","/api/store/combinedProducts/createMany"),s);case 17:return o=e.sent,e.next=20,o.json();case 20:if(i=e.sent,console.log(i),!i.combinedProducts){e.next=27;break}return A(i.combinedProducts),b(),L("summary"),e.abrupt("return");case 27:j(!1),m(i.messageSK),e.next=36;break;case 31:e.prev=31,e.t0=e.catch(14),console.log(e.t0),m("Nieco sa pokazilo"),j(!1);case 36:case"end":return e.stop()}}),e,null,[[14,31]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(f.Provider,{value:{step:v,order:w,cart:N,selectedProduct:Q,setOrder:P,addUser:function(e){P(Object(u.a)(Object(u.a)({},w),{},{user:e}))},addProduct:function(e){T((function(t){return[].concat(Object(o.a)(t),[{product:e}])}))},addProductDiscount:function(e,t){if(""===t){var n=N.map((function(t,n){return e===n?Object.keys(t.discount).length>1?(delete t.discount.product,t):(delete t.discount,t):t}));T(n)}else{var a=N.map((function(n,a){return e===a?Object(u.a)(Object(u.a)({},n),{},{discount:{product:{percent:t}}}):n}));T(a)}},addLensesParameters:function(e,t){var n=N.map((function(n,a){return e===a&&Object.keys(t).length>0?Object(u.a)(Object(u.a)({},n),{},{lenses:Object(u.a)({},t)}):n}));T(n)},deleteProduct:function(e,t){var n=N.filter((function(t,n){return n!==e}));T(n),setTimeout((function(){t(null)}),100)},addLenses:function(e){if(null!==e||null!==Q){if(null!==Q){var t=N.map((function(t,n){return n===Q?Object(u.a)(Object(u.a)({},t),{},{lens:e,lensesQuant:1}):t}));T(t)}else T((function(t){return[].concat(Object(o.a)(t),[{product:{_id:Math.floor(10*Math.random()),isPseudo:!0},lens:e,lensesQuant:1}])}));I(null)}},addLensesDiscount:function(e,t){if(""===t){var n=N.map((function(t,n){return e===n?Object.keys(t.discount).length>1?(delete t.discount.lenses,t):(delete t.discount,t):t}));T(n)}else{var a=N.map((function(n,a){return e===a?Object(u.a)(Object(u.a)({},n),{},{discount:Object(u.a)(Object(u.a)({},n.discount),{},{lenses:{percent:t}})}):n}));T(a)}},resetOrder:function(){P({})},changeStep:L,selectProduct:function(e){I(Q===e?null:e)},createCombinedProducts:M,incrementQuantity:function(e,t){var n=N.map((function(n,a){return t===a?Object(u.a)(Object(u.a)({},n),{},{lensesQuant:e+1}):n}));T(n)},decrementQuantity:function(e,t){if(1!==e){var n=N.map((function(n,a){return t===a?Object(u.a)(Object(u.a)({},n),{},{lensesQuant:e-1}):n}));T(n)}}},children:t})}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"UserContext",(function(){return g}));var a=n(2),r=n(7),c=n.n(r),s=n(12),o=n(31),u=n(21),i=n(10),d=n(1),l=n(3),p=n(18),f=n(19),b=(n(61),function(e,t){var n=new Headers;n.append("auth-token",e),n.append("Content-Type","application/json");var a={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(t),a)}),m=function(e,t,n){var a=new Headers;a.append("auth-token",e),a.append("Content-Type","application/json");var r={method:"PATCH",headers:a,body:JSON.stringify(Object(u.a)({},t)),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(n),r)},j=function(e,t){var n=t.name,a=t.email,r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var c={method:"POST",headers:r,body:JSON.stringify({email:a,name:n}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),c)},O=function(e,t){console.log(t);var n=t.name,a=t.email,r=t.password,c=t.premises,s=t.admin,o=new Headers;o.append("auth-token",e),o.append("Content-Type","application/json");var u={method:"POST",headers:o,body:JSON.stringify({admin:Number(s),email:a,name:n,premises:Number(c),password:r}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),u)},h={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,company:{ico:"",dic:"",icdph:"",address:"",psc:"",country:""},lenses:{cylinder:[1001,1001,1001,1001],cylinderAxes:[1001,1001,1001,1001],diopters:[1001,1001,1001,1001],distance:[1001,1001,1001,1001],addition:[1001,1001,1001,1001],basis:[1001,1001,1001,1001],prism:[1001,1001,1001,1001]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:"",birthDate:Date.now(),optometrist:!1},g=Object(d.createContext)({isUpdating:!1,activeIndex:0,handleChangeFilterItem:function(){},filterItems:[],totalCount:0,users:null,user:null,getUser:function(){},handleChange:function(){},handleParameterChange:function(){},handleCompanyChange:function(){},updateUser:function(){},resetUser:function(){},formToShow:0,switchFormButtons:[],toggleUserForm:function(){},createUser:function(){},getFilteredUsers:function(){},getUserByQuery:function(){}});t.default=function(e){var t=e.children,n=Object(l.h)().push,r=Object(d.useContext)(p.a).token,v=Object(d.useContext)(f.a),y=v.closeModal,k=v.getMessage,x=v.setIsLoading,w=v.setShowModal,P=Object(d.useState)(h),S=Object(i.a)(P,2),C=S[0],N=S[1],T=Object(d.useState)(null),U=Object(i.a)(T,2),z=U[0],Q=U[1],I=Object(d.useState)(0),A=Object(i.a)(I,2),L=A[0],M=(A[1],Object(d.useState)(!1)),F=Object(i.a)(M,2),D=F[0],H=F[1],J=Object(d.useState)(0),_=Object(i.a)(J,2),E=_[0],R=_[1],B=Object(d.useState)(0),Z=Object(i.a)(B,2),G=Z[0],K=Z[1];Object(d.useEffect)((function(){N(Object(u.a)(Object(u.a)({},C),{},{name:C.fName+" "+C.lName}))}),[C.fName,C.lName]);var V=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),w(!0),H(!0),e.prev=3,e.next=6,b(r,t);case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).user?(N(Object(u.a)(Object(u.a)(Object(u.a)({},C),a.user),{},{fName:a.user.name?a.user.name.split(" ")[0]:"",lName:a.user.name?a.user.name.split(" ")[1]:""})),x(!1),y()):(k(a.message),x(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),k("Nieco sa pokazilo"),x(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(s.a)(c.a.mark((function e(t,a,s,o,i,d){var l,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),w(!0),console.log(t),e.prev=3,e.next=6,m(r,t,a);case 6:return l=e.sent,e.next=9,l.json();case 9:if(p=e.sent,console.log(p),!p.error){e.next=15;break}return k(p.messageSK),x(!1),e.abrupt("return");case 15:x(!1),y(),"order"===s?n("/dashboard/objednavky/".concat(a)):"profile"===s?n("/dashboard/zakaznici/".concat(a)):"isOrder"===s?(N(Object(u.a)(Object(u.a)(Object(u.a)({},t),p.user),{},{fName:p.user.name?p.user.name.split(" ")[0]:"",lName:p.user.name?p.user.name.split(" ")[1]:""})),d(Object(u.a)(Object(u.a)(Object(u.a)({},t),p.user),{},{fName:p.user.name?p.user.name.split(" ")[0]:"",lName:p.user.name?p.user.name.split(" ")[1]:""})),i()):n("/dashboard/zakaznici"),Y({filters:{admin:E}}),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(3),console.log(e.t0),k("Nieco sa pokazilo"),x(!1);case 26:case"end":return e.stop()}}),e,null,[[3,21]])})));return function(t,n,a,r,c,s){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var s,o,i,d,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),w(!0),e.prev=2,0!==G){e.next=24;break}if(s={},t._id){e.next=20;break}return console.log("creating new user"),e.next=9,j(r,t);case 9:return o=e.sent,e.next=12,o.json();case 12:if(!(s=e.sent).error){e.next=19;break}return k(s.message),"email"===s.type&&k("Email existuje"),"format"===s.error&&s.message.includes("email")&&k("Email musi byt platny email"),x(!1),e.abrupt("return");case 19:N(Object(u.a)(Object(u.a)({},s.user),{},{_id:s.user._id}));case 20:i=s.user?s.user._id:t._id,q(Object(u.a)({},t),i,a),e.next=43;break;case 24:if(t.password===t.confirmPassword){e.next=28;break}return k("Hesl\xe1 sa nezhoduj\xfa"),x(!1),e.abrupt("return");case 28:return e.next=30,O(r,t);case 30:return d=e.sent,e.next=33,d.json();case 33:if(l=e.sent,console.log(l),!l.error){e.next=39;break}return k(l.message),x(!1),e.abrupt("return");case 39:x(!1),Y({filters:{admin:E}}),n("/dashboard/zakaznici"),y();case 43:e.next=50;break;case 45:e.prev=45,e.t0=e.catch(2),console.log(e.t0),k("Nieco sa pokazilo"),x(!1);case 50:case"end":return e.stop()}}),e,null,[[2,45]])})));return function(t,n){return e.apply(this,arguments)}}(),X=new Headers;X.append("auth-token",r),X.append("Content-Type","application/json");var Y=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),w(!0),console.log(t),n=JSON.stringify(t),a={method:"POST",headers:X,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),a);case 8:return r=e.sent,e.next=11,r.json();case 11:if(s=e.sent,console.log(s),!s.users){e.next=17;break}return Q(s.users),y(),e.abrupt("return");case 17:k(s.message),x(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),k("Nieco sa pokazilo"),x(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),w(!0),console.log(t),n=JSON.stringify(t),a={method:"POST",headers:X,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),a);case 8:return r=e.sent,e.next=11,r.json();case 11:if(s=e.sent,console.log(s),!s.users){e.next=17;break}return Q(s.users),y(),e.abrupt("return");case 17:k(s.message),x(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),k("Nieco sa pokazilo"),x(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(g.Provider,{value:{isUpdating:D,activeIndex:E,handleChangeFilterItem:function(e){R(e)},filterItems:[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2}],users:z,user:C,totalCount:L,getUser:V,handleChange:function(e){var t=e.target,n=t.name,a=t.value;console.log(n,a),N(Object(u.a)(Object(u.a)({},C),{},Object(o.a)({},n,a)))},handleParameterChange:function(e,t){var n=e.target,a=n.name,r=n.value,c=C.lenses[a];c[t]=""===r?1001:r,N(Object(u.a)(Object(u.a)({},C),{},{lenses:Object(u.a)(Object(u.a)({},C.lenses),{},Object(o.a)({},a,c))}))},handleCompanyChange:function(e){var t=e.target,n=t.name,a=t.value;N(Object(u.a)(Object(u.a)({},C),{},{company:Object(u.a)(Object(u.a)({},C.company),{},Object(o.a)({},n,a))}))},updateUser:q,resetUser:function(){N(h),H(!1),K(0)},formToShow:G,switchFormButtons:[{name:"Z\xe1kazn\xedk"},{name:"Zamestnanec"}],toggleUserForm:function(e,t){e.preventDefault(),K(t)},createUser:W,getFilteredUsers:Y,getUserByQuery:$},children:t})}}}]);
//# sourceMappingURL=16.a38e63c4.chunk.js.map