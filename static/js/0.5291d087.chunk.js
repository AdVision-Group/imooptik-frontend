(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[0],{55:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(22);var r=a(33);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},60:function(e,t,a){"use strict";a.d(t,"k",(function(){return r})),a.d(t,"i",(function(){return c})),a.d(t,"h",(function(){return s})),a.d(t,"j",(function(){return o})),a.d(t,"n",(function(){return i})),a.d(t,"m",(function(){return u})),a.d(t,"l",(function(){return l})),a.d(t,"a",(function(){return b})),a.d(t,"f",(function(){return p})),a.d(t,"g",(function(){return d})),a.d(t,"d",(function(){return j})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return h})),a.d(t,"e",(function(){return m}));var n=a(2),r={name:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[0,1001,1001,1001,1001,1001],eanCode:"",image:"",eshop:!0,link:"",category:""},c={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"",size:[1001,1001,1001,1001]}},s={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},o={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:""},i=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Vajnorsk\xe1 53, Bratislava"],u=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"Slu\u017eby",value:6},{name:"\u0160o\u0161ovky",value:0}],l=[{id:0,name:"V\u0161etko",premises:0},{id:1,name:"Obchodn\xe1 57, Bratislava",premises:1},{id:2,name:"Mileti\u010dova 38, Bratislava",premises:2},{id:3,name:"Vajnory, Bratislava",premises:3},{id:4,name:"Senica, OC Bran\u010d",premises:4},{id:5,name:"Vajnorsk\xe1 53, Bratislava"}],b=[{id:0,name:"Okuliare"},{id:1,name:"\u0160osovky"}],p=function(e){var t=0;return e.includes(",")?1===e.split(",")[1].length?(t=e.split(",")[0]+e.split(",")[1]+"0",Number(t)):(t=e.split(",")[0]+e.split(",")[1],Number(t)):Number(100*e)},d=function(e){var t=0;return e.includes(",")?(t=e.split(",")[0]+"."+e.split(",")[1],Number(t)):Number(e)},j=function(e,t){return void 0===e?"\u0160osovka":"number"===typeof e?e<0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(n.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(e)]})]}):0===e?Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(e," ks"):0===t?e.reduce((function(e,t){return e+t}))<0||0===e.reduce((function(e,t){return e+t}))?Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"V\u0161etky: 0 ks"}):"V\u0161etky: ".concat(e.reduce((function(e,t){return e+t}))," ks"):e[t]<0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(n.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(e[t])]})]}):0===e[t]?Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(e[t]," ks")},f=function(e,t){if(void 0!==e)return 0===e.length||1001===e[t]?"":e[t].toString()},O="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",h=function(e){for(var t="",a=0;a<e.length;a++)-1!==O.indexOf(e.charAt(a))?t+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(O.indexOf(e.charAt(a))):t+=e.charAt(a);return t},m=function(e){return h(e).replaceAll(" ","-").toLowerCase().trim()}},99:function(e,t,a){"use strict";a.r(t),a.d(t,"WarehouseContext",(function(){return O}));var n=a(2),r=a(7),c=a.n(r),s=a(12),o=a(55),i=a(31),u=a(21),l=a(10),b=a(1),p=a(3),d=a(18),j=a(19),f=a(60),O=Object(b.createContext)({eanCode:null,product:{},lenses:{},contactLensesParameters:{},glassesParameters:{},totalProducts:0,totalLenses:0,activePremisesTab:0,activeCategoryTypeTab:0,retailPremisesTabs:[],productCategoryTypeTabs:[],products:null,lensesProducts:null,handleChangeCategoryTypeTab:function(){},handleChangePremisesTab:function(){},getProductsByQuery:function(){},handleProductChange:function(){},handleProductAvailableChange:function(){},getSingleProduct:function(){},createProduct:function(){},updateProduct:function(){},deleteProduct:function(){},getSingleLenses:function(){},getLenses:function(){},createLenses:function(){},updateLenses:function(){},deleteLenses:function(){},handleLensesChange:function(){},handleLensesParameterChange:function(){},resetProduct:function(){},resetLenses:function(){},resetContactLenses:function(){},resetGlassesParameters:function(){},getEanCode:function(){},handleAddNewParameter:function(){},handleContactLensesParameterChange:function(){},handleGlassesParameterChange:function(){},handleGlassesParameterSpecsChange:function(){},handleGlassesSizeChange:function(){},deactivateMany:function(){}});t.default=function(e){var t=e.children,a=Object(p.h)().push,r=Object(b.useContext)(j.a),h=r.token,m=r.isAdmin,v=r.currentUser,g=r.stats,k=Object(b.useContext)(d.a),x=k.closeModal,y=k.setIsLoading,C=k.setShowModal,w=k.getMessage,L=Object(b.useState)(0),S=Object(l.a)(L,2),P=S[0],T=S[1],N=Object(b.useState)(0),z=Object(l.a)(N,2),A=z[0],E=z[1],D=Object(b.useState)(null),R=Object(l.a)(D,2),K=R[0],B=R[1],M=Object(b.useState)(Object(u.a)({},f.k)),G=Object(l.a)(M,2),J=G[0],V=G[1],I=Object(b.useState)(Object(u.a)({},f.j)),F=Object(l.a)(I,2),H=F[0],Q=F[1],U=Object(b.useState)(Object(u.a)({},f.h)),_=Object(l.a)(U,2),W=_[0],Y=_[1],Z=Object(b.useState)(Object(u.a)({},f.i)),q=Object(l.a)(Z,2),X=q[0],$=q[1],ee=Object(b.useState)(null),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],re=Object(b.useState)(null),ce=Object(l.a)(re,2),se=ce[0],oe=ce[1],ie=Object(b.useState)(0),ue=Object(l.a)(ie,2),le=ue[0],be=ue[1],pe=Object(b.useState)([]),de=Object(l.a)(pe,2),je=de[0],fe=de[1],Oe=Object(b.useState)(f.a),he=Object(l.a)(Oe,1)[0],me=Object(b.useState)(0),ve=Object(l.a)(me,2),ge=ve[0],ke=ve[1],xe=new Headers;xe.append("auth-token",h),xe.append("Content-Type","application/json");var ye=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),t={method:"GET",headers:xe,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/nextEanCode"),t);case 6:return a=e.sent,e.next=9,a.json();case 9:if(!(n=e.sent).eanCode){e.next=14;break}return B(n.eanCode),x(),e.abrupt("return");case 14:w(n.messageSK),y(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),a=JSON.stringify(t),n={method:"POST",headers:xe,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/filter"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(s=e.sent).products){e.next=15;break}return ne(s.products),x(),e.abrupt("return");case 15:w(s.message),y(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),t={method:"GET",headers:xe,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses"),t);case 6:return a=e.sent,e.next=9,a.json();case 9:if(!(n=e.sent).lenses){e.next=15;break}return ne(n.lenses),oe(n.lenses),x(),e.abrupt("return");case 15:w(n.messageSK),y(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/store/products/").concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:if("not-found"===(n=e.sent).error&&Ne(t),!n.product){e.next=15;break}return V(Object(u.a)(Object(u.a)({},n.product),{},{price:(n.product.price/100).toFixed(2)})),3===n.product.type?Y(Object(u.a)({},n.product.contactLenses)):$({colorCode:null!==(r=n.product.colorCode)&&void 0!==r?r:"",specs:Object(u.a)(Object(u.a)({},n.product.specs),{},{size:Object(o.a)(Array(4)).map((function(e,t){return n.product.specs.size[t]?n.product.specs.size[t]:0}))})}),x(),e.abrupt("return");case 15:w(n.messageSK),y(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 24:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,s,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),n=Object(f.c)(t.name).replaceAll(" ","-").toLowerCase().trim(),r=Object(u.a)(Object(u.a)({},t),{},{price:Object(f.f)(t.price.toString()),link:n}),t.specs&&t.specs.size&&(r=Object(u.a)(Object(u.a)({},r),{},{specs:Object(u.a)(Object(u.a)({},r.specs),{},{size:t.specs.size.map((function(e){return 1001===e?0:Object(f.g)(e)}))})})),t.contactLenses&&(t.contactLenses.allowedCurves&&(r=Object(u.a)(Object(u.a)({},r),{},{contactLenses:Object(u.a)(Object(u.a)({},r.contactLenses),{},{allowedCurves:t.contactLenses.allowedCurves.map((function(e){return Object(f.g)(e)}))})})),t.contactLenses.allowedDiameters&&(r=Object(u.a)(Object(u.a)({},r),{},{contactLenses:Object(u.a)(Object(u.a)({},r.contactLenses),{},{allowedDiameters:t.contactLenses.allowedDiameters.map((function(e){return Object(f.g)(e)}))})})),t.contactLenses.dioptersRange&&(r=Object(u.a)(Object(u.a)({},r),{},{contactLenses:Object(u.a)(Object(u.a)({},r.contactLenses),{},{dioptersRange:t.contactLenses.dioptersRange.map((function(e){return Object(f.g)(e)}))})}))),s=JSON.stringify(Object(u.a)({},r)),o={method:"POST",headers:xe,body:s,redirect:"follow"},e.prev=8,e.next=11,fetch("".concat("http://195.110.58.166:8080","/api/admin/products"),o);case 11:return i=e.sent,e.next=14,i.json();case 14:if(!(l=e.sent).product){e.next=21;break}return a("/dashboard/obchod"),Ce({limit:10}),B(null),x(),e.abrupt("return");case 21:w(l.messageSK),y(!1),e.next=30;break;case 25:e.prev=25,e.t0=e.catch(8),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 30:case"end":return e.stop()}}),e,null,[[8,25]])})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,s,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),(n=Object(u.a)({},t)).price&&(n=Object(u.a)(Object(u.a)({},n),{},{price:Object(f.f)(t.price.toString())})),n.available&&(n="number"===typeof n.available?Object(u.a)(Object(u.a)({},n),{},{available:t.available}):Object(u.a)(Object(u.a)({},n),{},{available:t.available?t.available.map((function(e){return 1001===e?0:e})):[0,0,0,0,0,0]})),t.link&&(r=Object(f.c)(t.link).replaceAll(" ","-").toLowerCase().trim(),n=Object(u.a)(Object(u.a)({},n),{},{link:r})),t.specs&&t.specs.size&&(n=Object(u.a)(Object(u.a)({},n),{},{specs:Object(u.a)(Object(u.a)({},n.specs),{},{size:t.specs.size.map((function(e){return 1001===e?0:Object(f.g)(e)}))})})),t.contactLenses&&(n=t.contactLenses.allowedCurves?Object(u.a)(Object(u.a)({},n),{},{contactLenses:Object(u.a)(Object(u.a)({},n.contactLenses),{},{allowedCurves:t.contactLenses.allowedCurves.map((function(e){return Object(f.g)(e)}))})}):Object(u.a)(Object(u.a)({},n),{},{contactLenses:Object(u.a)(Object(u.a)({},n.contactLenses),{},{allowedCurves:W.allowedCurves})}),n=t.contactLenses.allowedDiameters?Object(u.a)(Object(u.a)({},n),{},{contactLenses:Object(u.a)(Object(u.a)({},n.contactLenses),{},{allowedDiameters:t.contactLenses.allowedDiameters.map((function(e){return Object(f.g)(e)}))})}):Object(u.a)(Object(u.a)({},n),{},{contactLenses:Object(u.a)(Object(u.a)({},n.contactLenses),{},{allowedDiameters:W.allowedDiameters})}),n=t.contactLenses.dioptersRange?Object(u.a)(Object(u.a)({},n),{},{contactLenses:Object(u.a)(Object(u.a)({},n.contactLenses),{},{dioptersRange:t.contactLenses.dioptersRange.map((function(e){return Object(f.g)(e)}))})}):Object(u.a)(Object(u.a)({},n),{},{contactLenses:Object(u.a)(Object(u.a)({},n.contactLenses),{},{dioptersRange:W.dioptersRange})})),s=JSON.stringify(Object(u.a)({},n)),o={method:"PATCH",headers:xe,body:s,redirect:"follow"},e.prev=10,e.next=13,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/").concat(J._id),o);case 13:return i=e.sent,e.next=16,i.json();case 16:if(!(l=e.sent).error){e.next=21;break}return w(l.messageSK),y(!1),e.abrupt("return");case 21:if(!l.product){e.next=26;break}return a("/dashboard/obchod"),Ce({limit:10}),x(),e.abrupt("return");case 26:w(l.messageSK),y(!1),e.next=35;break;case 30:e.prev=30,e.t0=e.catch(10),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 35:case"end":return e.stop()}}),e,null,[[10,30]])})));return function(t){return e.apply(this,arguments)}}(),Te=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),a={method:"DELETE",headers:xe,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/").concat(t),a);case 6:return n=e.sent,e.next=9,n.json();case 9:if(!(r=e.sent).product){e.next=14;break}return Ce({limit:10}),x(),e.abrupt("return");case 14:w(r.messageSK),y(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),e.prev=2,e.next=5,fetch("".concat("http://195.110.58.166:8080","/api/store/lenses/").concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:if(!(n=e.sent).lenses){e.next=13;break}return Q(n.lenses),x(),e.abrupt("return");case 13:w(n.messageSK),y(!1),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),n=JSON.stringify(Object(u.a)(Object(u.a)({},t),{},{price:Object(f.f)(t.price.toString())})),r={method:"POST",headers:xe,body:n,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses"),r);case 7:return s=e.sent,e.next=10,s.json();case 10:if(!(o=e.sent).lenses){e.next=16;break}return a("/dashboard/obchod"),we(),x(),e.abrupt("return");case 16:w(o.messageSK),y(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,s,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),(n=Object(u.a)({},t)).price&&(n=Object(u.a)(Object(u.a)({},n),{},{price:Object(f.f)(t.price.toString())})),r=JSON.stringify(Object(u.a)({},n)),s={method:"PATCH",headers:xe,body:r,redirect:"follow"},e.prev=6,e.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses/").concat(H._id),s);case 9:return o=e.sent,e.next=12,o.json();case 12:if(!(i=e.sent).lenses){e.next=18;break}return a("/dashboard/obchod"),we(),x(),e.abrupt("return");case 18:w(i.messageSK),y(!1),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(6),console.log(e.t0),w("Nieco sa pokazilo"),y(!1);case 27:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),a={method:"DELETE",headers:xe,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses/").concat(t),a);case 6:return n=e.sent,e.next=9,n.json();case 9:if(!(r=e.sent).lenses){e.next=14;break}return we(),x(),e.abrupt("return");case 14:w(r.messageSK),y(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),w("Nie\u010do sa pokazilo"),y(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),C(!0),a=JSON.stringify(t),n={method:"POST",headers:xe,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("http://195.110.58.166:8080","/api/admin/products/deactivateMany"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:s=e.sent,w(s.messageSK),y(!1),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),w("Nie\u010do sa pokazilo"),y(!1);case 20:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){ae&&(0===ge?Ce({limit:10}):we())}),[ge]),Object(b.useEffect)((function(){v&&(m?(fe(f.l),be(0)):(fe(f.l.filter((function(e){return e.premises===v.premises}))),be(0)))}),[v,m]),Object(b.useEffect)((function(){g&&(T(g.products),E(g.lenses))}),[g]),Object(b.useEffect)((function(){""!==J.name&&V(Object(u.a)(Object(u.a)({},J),{},{link:Object(f.e)(J.name)}))}),[J.name]),Object(n.jsx)(O.Provider,{value:{eanCode:K,product:J,lenses:H,contactLensesParameters:W,glassesParameters:X,totalProducts:P,totalLenses:A,activePremisesTab:le,activeCategoryTypeTab:ge,retailPremisesTabs:je,productCategoryTypeTabs:he,products:ae,lensesProducts:se,handleChangeCategoryTypeTab:function(e){ke(e)},handleChangePremisesTab:function(e){be(e)},getProductsByQuery:Ce,handleProductChange:function(e){var t=e.target,a=t.name,n=t.value;V(Object(u.a)(Object(u.a)({},J),{},Object(i.a)({},a,n)))},handleProductAvailableChange:function(e,t){var a=e.target,n=a.name,r=a.value,c=J[n];c[t]=""===r?1001:Number(r),V(Object(u.a)(Object(u.a)({},J),{},Object(i.a)({},n,c)))},getLenses:we,getSingleProduct:Le,createProduct:Se,updateProduct:Pe,deleteProduct:Te,getSingleLenses:Ne,createLenses:ze,updateLenses:Ae,deleteLenses:Ee,handleLensesChange:function(e){var t=e.target,a=t.name,n=t.value;Q(Object(u.a)(Object(u.a)({},H),{},Object(i.a)({},a,n)))},handleLensesParameterChange:function(e,t){var a=e.target,n=a.name,r=a.value,c=H[n];c[t]=""===r?1001:Number(r),Q(Object(u.a)(Object(u.a)({},H),{},Object(i.a)({},n,c)))},resetProduct:function(){V(Object(u.a)(Object(u.a)({},f.k),{},{available:[0,1001,1001,1001,1001,1001]})),B(null)},resetLenses:function(){Q(Object(u.a)(Object(u.a)({},f.j),{},{dioptersRange:[1001,1001],cylinderRange:[1001,1001]}))},resetContactLenses:function(){Y(Object(u.a)(Object(u.a)({},f.h),{},{allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]}))},resetGlassesParameters:function(){$(Object(u.a)(Object(u.a)({},f.i),{},{specs:Object(u.a)(Object(u.a)({},f.i.specs),{},{size:[1001,1001,1001,1001]})}))},getEanCode:ye,handleAddNewParameter:function(e){var t=e.target.name;Y(Object(u.a)(Object(u.a)({},W),{},Object(i.a)({},t,[].concat(Object(o.a)(W[t]),[1001]))))},handleContactLensesParameterChange:function(e,t){var a=e.target,n=a.name,r=a.value,c=W[n];c[t]=""===r?1001:r,Y(Object(u.a)(Object(u.a)({},W),{},Object(i.a)({},n,c)))},handleGlassesParameterChange:function(e){var t=e.target,a=t.name,n=t.value;$(Object(u.a)(Object(u.a)({},X),{},Object(i.a)({},a,n)))},handleGlassesParameterSpecsChange:function(e){var t=e.target,a=t.name,n=t.value;$(Object(u.a)(Object(u.a)({},X),{},{specs:Object(u.a)(Object(u.a)({},X.specs),{},Object(i.a)({},a,n))}))},handleGlassesSizeChange:function(e,t){var a=e.target,n=a.name,r=a.value,c=X.specs[n];c[t]=""===r?1001:r,$(Object(u.a)(Object(u.a)({},X),{},{specs:Object(u.a)(Object(u.a)({},X.specs),{},Object(i.a)({},n,c))}))},deactivateMany:De},children:t})}}}]);
//# sourceMappingURL=0.5291d087.chunk.js.map