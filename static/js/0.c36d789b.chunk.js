(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[0],{55:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(22);var c=n(33);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},62:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"h",(function(){return r})),n.d(t,"j",(function(){return s})),n.d(t,"n",(function(){return o})),n.d(t,"m",(function(){return u})),n.d(t,"l",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return m}));var a={name:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[1001,1001,1001,1001,0],eanCode:"",image:"",eshop:!0,link:"",category:""},c={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"M",size:[1001,1001,1001,1001]}},r={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},s={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:""},o=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],u=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"\u0160o\u0161ovky",value:0}],i=[{id:0,name:"V\u0161etko",premises:0},{id:1,name:"Obchodn\xe1 57, Bratislava",premises:1},{id:2,name:"Mileti\u010dova 38, Bratislava",premises:2},{id:3,name:"Vajnory, Bratislava",premises:3},{id:4,name:"Senica, OC Bran\u010d",premises:4}],l=[{id:0,name:"Okuliare"},{id:1,name:"\u0160osovky"}],b=function(e){var t=0;return e.includes(",")?1===e.split(",")[1].length?(t=e.split(",")[0]+e.split(",")[1]+"0",Number(t)):(t=e.split(",")[0]+e.split(",")[1],Number(t)):Number(100*e)},p=function(e){var t=0;return e.includes(",")?(t=e.split(",")[0]+"."+e.split(",")[1],Number(t)):Number(e)},d=function(e,t){return void 0===e?"\u0160osovka":(console.log(t),console.log(e),"number"===typeof e?"Na sklade ".concat(e," kusov"):0===t?"Vo v\u0161etk\xfdch skladoch je ".concat(e.reduce((function(e,t){return e+t}))," kusov"):"Na sklade ".concat(e[t-1]," kusov"))},f=function(e,t){return 0===e.length||1001===e[t]?"":e[t].toString()},j="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",O=function(e){for(var t="",n=0;n<e.length;n++)-1!=j.indexOf(e.charAt(n))?t+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(j.indexOf(e.charAt(n))):t+=e.charAt(n);return t},m=function(e){return O(e).replaceAll(" ","-").toLowerCase().trim()}},98:function(e,t,n){"use strict";n.r(t),n.d(t,"WarehouseContext",(function(){return O}));var a=n(2),c=n(7),r=n.n(c),s=n(12),o=n(55),u=n(31),i=n(21),l=n(10),b=n(1),p=n(3),d=n(19),f=n(18),j=n(62),O=Object(b.createContext)({eanCode:null,product:{},lenses:{},contactLensesParameters:{},glassesParameters:{},totalProducts:0,totalLenses:0,activePremisesTab:0,activeCategoryTypeTab:0,retailPremisesTabs:[],productCategoryTypeTabs:[],products:null,lensesProducts:null,handleChangeCategoryTypeTab:function(){},handleChangePremisesTab:function(){},getProductsByQuery:function(){},handleProductChange:function(){},handleProductAvailableChange:function(){},getSingleProduct:function(){},createProduct:function(){},updateProduct:function(){},deleteProduct:function(){},getSingleLenses:function(){},getLenses:function(){},createLenses:function(){},updateLenses:function(){},deleteLenses:function(){},handleLensesChange:function(){},handleLensesParameterChange:function(){},resetProduct:function(){},resetLenses:function(){},resetContactLenses:function(){},resetGlassesParameters:function(){},getEanCode:function(){},handleAddNewParameter:function(){},handleContactLensesParameterChange:function(){},handleGlassesParameterChange:function(){},handleGlassesParameterSpecsChange:function(){},handleGlassesSizeChange:function(){}});t.default=function(e){var t=e.children,n=Object(p.h)().push,c=Object(b.useContext)(f.a),m=c.token,h=c.isAdmin,g=c.currentUser,v=c.stats,k=Object(b.useContext)(d.a),C=k.closeModal,x=k.setIsLoading,L=k.setShowModal,y=k.getMessage,w=Object(b.useState)(0),S=Object(l.a)(w,2),P=S[0],T=S[1],N=Object(b.useState)(0),z=Object(l.a)(N,2),A=z[0],E=z[1],D=Object(b.useState)(null),R=Object(l.a)(D,2),K=R[0],G=R[1],B=Object(b.useState)(Object(i.a)({},j.k)),M=Object(l.a)(B,2),J=M[0],I=M[1],V=Object(b.useState)(Object(i.a)({},j.j)),H=Object(l.a)(V,2),Q=H[0],U=H[1],_=Object(b.useState)(Object(i.a)({},j.h)),F=Object(l.a)(_,2),W=F[0],Y=F[1],Z=Object(b.useState)(Object(i.a)({},j.i)),q=Object(l.a)(Z,2),X=q[0],$=q[1],ee=Object(b.useState)(null),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=Object(b.useState)(null),re=Object(l.a)(ce,2),se=re[0],oe=re[1],ue=Object(b.useState)(0),ie=Object(l.a)(ue,2),le=ie[0],be=ie[1],pe=Object(b.useState)([]),de=Object(l.a)(pe,2),fe=de[0],je=de[1],Oe=Object(b.useState)(j.a),me=Object(l.a)(Oe,1)[0],he=Object(b.useState)(0),ge=Object(l.a)(he,2),ve=ge[0],ke=ge[1],Ce=new Headers;Ce.append("auth-token",m),Ce.append("Content-Type","application/json");var xe=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),t={method:"GET",headers:Ce,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/nextEanCode"),t);case 6:return n=e.sent,e.next=9,n.json();case 9:if(a=e.sent,console.log(a),!a.eanCode){e.next=15;break}return G(a.eanCode),C(),e.abrupt("return");case 15:y(a.messageSK),x(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),console.log(t),n=JSON.stringify(t),a={method:"POST",headers:Ce,body:n,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/filter"),a);case 8:return c=e.sent,e.next=11,c.json();case 11:if(s=e.sent,console.log(s),!s.products){e.next=17;break}return ae(s.products),C(),e.abrupt("return");case 17:y(s.message),x(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),t={method:"GET",headers:Ce,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses"),t);case 6:return n=e.sent,e.next=9,n.json();case 9:if(a=e.sent,console.log(a),!a.lenses){e.next=16;break}return ae(a.lenses),oe(a.lenses),C(),e.abrupt("return");case 16:y(a.messageSK),x(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(3),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 25:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/store/products/").concat(t));case 5:return n=e.sent,e.next=8,n.json();case 8:if(a=e.sent,console.log(a),"not-found"===a.error&&Ne(t),!a.product){e.next=16;break}return I(Object(i.a)(Object(i.a)({},a.product),{},{price:(a.product.price/100).toFixed(2)})),3===a.product.type?Y(Object(i.a)({},a.product.contactLenses)):$({colorCode:null!==(c=a.product.colorCode)&&void 0!==c?c:"",specs:Object(i.a)(Object(i.a)({},a.product.specs),{},{size:Object(o.a)(Array(4)).map((function(e,t){return a.product.specs.size[t]?a.product.specs.size[t]:0}))})}),C(),e.abrupt("return");case 16:y(a.messageSK),x(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 25:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,c,s,o,u,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),a=Object(j.c)(t.name).replaceAll(" ","-").toLowerCase().trim(),c=Object(i.a)(Object(i.a)({},t),{},{price:Object(j.f)(t.price.toString()),link:a}),t.specs&&t.specs.size&&(c=Object(i.a)(Object(i.a)({},c),{},{specs:Object(i.a)(Object(i.a)({},c.specs),{},{size:t.specs.size.map((function(e){return 1001===e?0:Object(j.g)(e)}))})})),t.contactLenses&&(t.contactLenses.allowedCurves&&(c=Object(i.a)(Object(i.a)({},c),{},{contactLenses:Object(i.a)(Object(i.a)({},c.contactLenses),{},{allowedCurves:t.contactLenses.allowedCurves.map((function(e){return Object(j.g)(e)}))})})),t.contactLenses.allowedDiameters&&(c=Object(i.a)(Object(i.a)({},c),{},{contactLenses:Object(i.a)(Object(i.a)({},c.contactLenses),{},{allowedDiameters:t.contactLenses.allowedDiameters.map((function(e){return Object(j.g)(e)}))})})),t.contactLenses.dioptersRange&&(c=Object(i.a)(Object(i.a)({},c),{},{contactLenses:Object(i.a)(Object(i.a)({},c.contactLenses),{},{dioptersRange:t.contactLenses.dioptersRange.map((function(e){return Object(j.g)(e)}))})}))),console.log("modifiedProduct"),console.log(c),s=JSON.stringify(Object(i.a)({},c)),o={method:"POST",headers:Ce,body:s,redirect:"follow"},e.prev=10,e.next=13,fetch("".concat("http://195.110.58.166:8080","/api/admin/products"),o);case 13:return u=e.sent,e.next=16,u.json();case 16:if(l=e.sent,console.log(l),!l.product){e.next=24;break}return n("/dashboard/obchod"),Le({limit:10}),G(null),C(),e.abrupt("return");case 24:y(l.messageSK),x(!1),e.next=33;break;case 28:e.prev=28,e.t0=e.catch(10),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 33:case"end":return e.stop()}}),e,null,[[10,28]])})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,c,s,o,u,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),(a=Object(i.a)({},t)).price&&(a=Object(i.a)(Object(i.a)({},a),{},{price:Object(j.f)(t.price.toString())})),a.available&&(a=Object(i.a)(Object(i.a)({},a),{},{available:t.available?t.available.map((function(e){return 1001===e?0:e})):[0,0,0,0,0]})),t.link&&(c=Object(j.c)(t.link).replaceAll(" ","-").toLowerCase().trim(),a=Object(i.a)(Object(i.a)({},a),{},{link:c})),t.specs&&t.specs.size&&(a=Object(i.a)(Object(i.a)({},a),{},{specs:Object(i.a)(Object(i.a)({},a.specs),{},{size:t.specs.size.map((function(e){return 1001===e?0:Object(j.g)(e)}))})})),t.contactLenses&&(a=t.contactLenses.allowedCurves?Object(i.a)(Object(i.a)({},a),{},{contactLenses:Object(i.a)(Object(i.a)({},a.contactLenses),{},{allowedCurves:t.contactLenses.allowedCurves.map((function(e){return Object(j.g)(e)}))})}):Object(i.a)(Object(i.a)({},a),{},{contactLenses:Object(i.a)(Object(i.a)({},a.contactLenses),{},{allowedCurves:W.allowedCurves})}),a=t.contactLenses.allowedDiameters?Object(i.a)(Object(i.a)({},a),{},{contactLenses:Object(i.a)(Object(i.a)({},a.contactLenses),{},{allowedDiameters:t.contactLenses.allowedDiameters.map((function(e){return Object(j.g)(e)}))})}):Object(i.a)(Object(i.a)({},a),{},{contactLenses:Object(i.a)(Object(i.a)({},a.contactLenses),{},{allowedDiameters:W.allowedDiameters})}),a=t.contactLenses.dioptersRange?Object(i.a)(Object(i.a)({},a),{},{contactLenses:Object(i.a)(Object(i.a)({},a.contactLenses),{},{dioptersRange:t.contactLenses.dioptersRange.map((function(e){return Object(j.g)(e)}))})}):Object(i.a)(Object(i.a)({},a),{},{contactLenses:Object(i.a)(Object(i.a)({},a.contactLenses),{},{dioptersRange:W.dioptersRange})})),s=JSON.stringify(Object(i.a)({},a)),o={method:"PATCH",headers:Ce,body:s,redirect:"follow"},e.prev=10,e.next=13,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/").concat(J._id),o);case 13:return u=e.sent,e.next=16,u.json();case 16:if(l=e.sent,console.log(l),!l.error){e.next=22;break}return y(l.messageSK),x(!1),e.abrupt("return");case 22:if(!l.product){e.next=27;break}return n("/dashboard/obchod"),Le({limit:10}),C(),e.abrupt("return");case 27:y(l.messageSK),x(!1),e.next=36;break;case 31:e.prev=31,e.t0=e.catch(10),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 36:case"end":return e.stop()}}),e,null,[[10,31]])})));return function(t){return e.apply(this,arguments)}}(),Te=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),n={method:"DELETE",headers:Ce,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/").concat(t),n);case 6:return a=e.sent,e.next=9,a.json();case 9:if(c=e.sent,console.log(c),!c.product){e.next=15;break}return Le({limit:10}),C(),e.abrupt("return");case 15:y(c.messageSK),x(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/store/lenses/").concat(t));case 5:return n=e.sent,e.next=8,n.json();case 8:if(a=e.sent,console.log(a),!a.lenses){e.next=14;break}return U(a.lenses),C(),e.abrupt("return");case 14:y(a.messageSK),x(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,c,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),a=JSON.stringify(Object(i.a)(Object(i.a)({},t),{},{price:Object(j.f)(t.price.toString())})),c={method:"POST",headers:Ce,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses"),c);case 7:return s=e.sent,e.next=10,s.json();case 10:if(o=e.sent,console.log(o),!o.lenses){e.next=17;break}return n("/dashboard/obchod"),ye(),C(),e.abrupt("return");case 17:y(o.messageSK),x(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(4),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 26:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,c,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),(a=Object(i.a)({},t)).price&&(a=Object(i.a)(Object(i.a)({},a),{},{price:Object(j.f)(t.price.toString())})),c=JSON.stringify(Object(i.a)({},a)),s={method:"PATCH",headers:Ce,body:c,redirect:"follow"},e.prev=6,e.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses/").concat(Q._id),s);case 9:return o=e.sent,e.next=12,o.json();case 12:if(u=e.sent,console.log(u),!u.lenses){e.next=19;break}return n("/dashboard/obchod"),ye(),C(),e.abrupt("return");case 19:y(u.messageSK),x(!1),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(6),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 28:case"end":return e.stop()}}),e,null,[[6,23]])})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),L(!0),n={method:"DELETE",headers:Ce,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses/").concat(t),n);case 6:return a=e.sent,e.next=9,a.json();case 9:if(c=e.sent,console.log(c),!c.lenses){e.next=15;break}return ye(),C(),e.abrupt("return");case 15:y(c.messageSK),x(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0),y("Nieco sa pokazilo"),x(!1);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){ne&&(console.log("GET ".concat(me[ve].name," DATA")),0===ve?Le({limit:10}):ye())}),[ve]),Object(b.useEffect)((function(){console.log("SET PREMISES"),g&&(h?(je(j.l),be(0)):(je(j.l.filter((function(e){return e.premises===g.premises}))),be(0)))}),[g,h]),Object(b.useEffect)((function(){v&&(console.log("SET STATS"),T(v.products),E(v.lenses))}),[v]),Object(b.useEffect)((function(){""!==J.name&&I(Object(i.a)(Object(i.a)({},J),{},{link:Object(j.e)(J.name)}))}),[J.name]),Object(a.jsx)(O.Provider,{value:{eanCode:K,product:J,lenses:Q,contactLensesParameters:W,glassesParameters:X,totalProducts:P,totalLenses:A,activePremisesTab:le,activeCategoryTypeTab:ve,retailPremisesTabs:fe,productCategoryTypeTabs:me,products:ne,lensesProducts:se,handleChangeCategoryTypeTab:function(e){ke(e)},handleChangePremisesTab:function(e){be(e)},getProductsByQuery:Le,handleProductChange:function(e){var t=e.target,n=t.name,a=t.value;I(Object(i.a)(Object(i.a)({},J),{},Object(u.a)({},n,a)))},handleProductAvailableChange:function(e,t){var n=e.target,a=n.name,c=n.value,r=J[a];r[t]=""===c?1001:Number(c),I(Object(i.a)(Object(i.a)({},J),{},Object(u.a)({},a,r)))},getLenses:ye,getSingleProduct:we,createProduct:Se,updateProduct:Pe,deleteProduct:Te,getSingleLenses:Ne,createLenses:ze,updateLenses:Ae,deleteLenses:Ee,handleLensesChange:function(e){var t=e.target,n=t.name,a=t.value;U(Object(i.a)(Object(i.a)({},Q),{},Object(u.a)({},n,a)))},handleLensesParameterChange:function(e,t){var n=e.target,a=n.name,c=n.value,r=Q[a];r[t]=""===c?1001:Number(c),U(Object(i.a)(Object(i.a)({},Q),{},Object(u.a)({},a,r)))},resetProduct:function(){I(Object(i.a)(Object(i.a)({},j.k),{},{available:[1001,1001,1001,1001,0]})),G(null)},resetLenses:function(){U(Object(i.a)(Object(i.a)({},j.j),{},{dioptersRange:[1001,1001],cylinderRange:[1001,1001]}))},resetContactLenses:function(){Y(Object(i.a)(Object(i.a)({},j.h),{},{allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]}))},resetGlassesParameters:function(){$(Object(i.a)(Object(i.a)({},j.i),{},{specs:Object(i.a)(Object(i.a)({},j.i.specs),{},{size:[1001,1001,1001,1001]})}))},getEanCode:xe,handleAddNewParameter:function(e){var t=e.target.name;Y(Object(i.a)(Object(i.a)({},W),{},Object(u.a)({},t,[].concat(Object(o.a)(W[t]),[1001]))))},handleContactLensesParameterChange:function(e,t){var n=e.target,a=n.name,c=n.value,r=W[a];r[t]=""===c?1001:c,Y(Object(i.a)(Object(i.a)({},W),{},Object(u.a)({},a,r)))},handleGlassesParameterChange:function(e){var t=e.target,n=t.name,a=t.value;$(Object(i.a)(Object(i.a)({},X),{},Object(u.a)({},n,a)))},handleGlassesParameterSpecsChange:function(e){var t=e.target,n=t.name,a=t.value;$(Object(i.a)(Object(i.a)({},X),{},{specs:Object(i.a)(Object(i.a)({},X.specs),{},Object(u.a)({},n,a))}))},handleGlassesSizeChange:function(e,t){var n=e.target,a=n.name,c=n.value,r=X.specs[a];r[t]=""===c?1001:c,$(Object(i.a)(Object(i.a)({},X),{},{specs:Object(i.a)(Object(i.a)({},X.specs),{},Object(u.a)({},a,r))}))}},children:t})}}}]);
//# sourceMappingURL=0.c36d789b.chunk.js.map