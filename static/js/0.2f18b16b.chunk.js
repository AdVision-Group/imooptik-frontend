(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"WarehouseContext",(function(){return O}));var n=a(2),r=a(8),c=a.n(r),s=a(12),o=a(57),i=a(31),u=a(13),l=a(5),d=a(1),p=a(3),b=a(19),f=a(20),v=a(74),j=a(55),O=Object(d.createContext)({eanCode:null,product:{},lenses:{},contactLensesParameters:{},glassesParameters:{},totalProducts:0,totalLenses:0,activePremisesTab:0,activeCategoryTypeTab:0,retailPremisesTabs:[],productCategoryTypeTabs:[],products:null,lensesProducts:null,handleChangeCategoryTypeTab:function(){},handleChangePremisesTab:function(){},getProductsByQuery:function(){},handleProductChange:function(){},handleProductAvailableChange:function(){},getSingleProduct:function(){},createProduct:function(){},updateProduct:function(){},deleteProduct:function(){},getSingleLenses:function(){},getLenses:function(){},createLenses:function(){},updateLenses:function(){},deleteLenses:function(){},handleLensesChange:function(){},handleLensesParameterChange:function(){},resetProduct:function(){},resetLenses:function(){},resetContactLenses:function(){},resetGlassesParameters:function(){},getEanCode:function(){},handleAddNewParameter:function(){},handleContactLensesParameterChange:function(){},handleGlassesParameterChange:function(){},handleGlassesParameterSpecsChange:function(){},handleGlassesSizeChange:function(){},deactivateMany:function(){}});t.default=function(e){var t=e.children,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",n=new RegExp(t.split("").join("|"),"g"),r=Object(d.useState)(""),c=Object(l.a)(r,2),s=c[0],o=c[1],i=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(n,(function(e){return a.charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};return Object(d.useEffect)((function(){var t=i(e);o(t)}),[e]),{slug:s,getSlug:i}}().getSlug,r=Object(p.h)().push,m=Object(d.useContext)(f.a),h=m.token,g=m.isAdmin,k=m.currentUser,y=m.stats,x=Object(d.useContext)(b.a),C=x.closeModal,w=x.setIsLoading,S=x.setShowModal,L=x.getMessage,P=Object(d.useState)(0),z=Object(l.a)(P,2),T=z[0],N=z[1],B=Object(d.useState)(0),A=Object(l.a)(B,2),E=A[0],M=A[1],R=Object(d.useState)(null),D=Object(l.a)(R,2),K=D[0],G=D[1],q=Object(d.useState)(Object(u.a)({},v.k)),J=Object(l.a)(q,2),F=J[0],H=J[1],V=Object(d.useState)(Object(u.a)({},v.j)),I=Object(l.a)(V,2),Z=I[0],Q=I[1],U=Object(d.useState)(Object(u.a)({},v.h)),_=Object(l.a)(U,2),W=_[0],Y=_[1],$=Object(d.useState)(Object(u.a)({},v.i)),X=Object(l.a)($,2),ee=X[0],te=X[1],ae=Object(d.useState)(null),ne=Object(l.a)(ae,2),re=ne[0],ce=ne[1],se=Object(d.useState)(null),oe=Object(l.a)(se,2),ie=oe[0],ue=oe[1],le=Object(d.useState)(0),de=Object(l.a)(le,2),pe=de[0],be=de[1],fe=Object(d.useState)([]),ve=Object(l.a)(fe,2),je=ve[0],Oe=ve[1],me=Object(d.useState)(v.a),he=Object(l.a)(me,1)[0],ge=Object(d.useState)(0),ke=Object(l.a)(ge,2),ye=ke[0],xe=ke[1],Ce=new Headers;Ce.append("auth-token",h),Ce.append("Content-Type","application/json");var we=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),t={method:"GET",headers:Ce,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/nextEanCode"),t);case 6:return a=e.sent,e.next=9,a.json();case 9:if(!(n=e.sent).eanCode){e.next=14;break}return G(n.eanCode),C(),e.abrupt("return");case 14:L(n.messageSK),w(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),a=JSON.stringify(t),n={method:"POST",headers:Ce,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/filter"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(s=e.sent).products){e.next=15;break}return ce(s.products),C(),e.abrupt("return");case 15:L(s.message),w(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),a=JSON.stringify(t),n={method:"POST",headers:Ce,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses/filter"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(s=e.sent).lenses){e.next=16;break}return ce(s.lenses),ue(s.lenses),C(),e.abrupt("return");case 16:L(s.messageSK),w(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),e.prev=2,e.next=5,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/store/products/").concat(t));case 5:return n=e.sent,e.next=8,n.json();case 8:if("not-found"===(r=e.sent).error&&Be(t,(function(){})),!r.product){e.next=16;break}return H(Object(u.a)(Object(u.a)({},r.product),{},{price:(r.product.price/100).toFixed(2)})),3===r.product.type?Y(Object(u.a)({},r.product.contactLenses)):te({colorCode:null!==(s=r.product.colorCode)&&void 0!==s?s:"",specs:Object(u.a)(Object(u.a)({},r.product.specs),{},{size:Object(o.a)(Array(4)).map((function(e,t){return r.product.specs.size[t]?r.product.specs.size[t]:0}))})}),a(r),C(),e.abrupt("return");case 16:L(r.messageSK),w(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 25:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t,a){return e.apply(this,arguments)}}(),ze=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,s,o,i,l,d,p,b,f,j,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),null,(null===t||void 0===t||null===(n=t.specs)||void 0===n?void 0:n.size)&&Object(v.c)((null===t||void 0===t||null===(l=t.specs)||void 0===l?void 0:l.size[0].toString())||"").replaceAll(" ","-").replaceAll(",","-").replaceAll(".","-").toLowerCase().trim(),d=a("".concat((null===t||void 0===t?void 0:t.name)||"neuvedene","-").concat((null===t||void 0===t||null===(s=t.specs)||void 0===s?void 0:s.frameColor)||"neuvedene","-").concat((null===t||void 0===t||null===(o=t.specs)||void 0===o?void 0:o.size)||"neuvedene")),p=Object(u.a)(Object(u.a)({},t),{},{price:Object(v.f)((null===t||void 0===t||null===(i=t.price)||void 0===i?void 0:i.toString())||""),link:d}),t.specs&&t.specs.size&&(p=Object(u.a)(Object(u.a)({},p),{},{specs:Object(u.a)(Object(u.a)({},p.specs),{},{size:t.specs.size.map((function(e){return 1001===e?0:Object(v.g)(e)}))})})),t.contactLenses&&(t.contactLenses.allowedCurves&&(p=Object(u.a)(Object(u.a)({},p),{},{contactLenses:Object(u.a)(Object(u.a)({},p.contactLenses),{},{allowedCurves:t.contactLenses.allowedCurves.map((function(e){return Object(v.g)(e)}))})})),t.contactLenses.allowedDiameters&&(p=Object(u.a)(Object(u.a)({},p),{},{contactLenses:Object(u.a)(Object(u.a)({},p.contactLenses),{},{allowedDiameters:t.contactLenses.allowedDiameters.map((function(e){return Object(v.g)(e)}))})})),t.contactLenses.dioptersRange&&(p=Object(u.a)(Object(u.a)({},p),{},{contactLenses:Object(u.a)(Object(u.a)({},p.contactLenses),{},{dioptersRange:t.contactLenses.dioptersRange.map((function(e){return Object(v.g)(e)}))})}))),b=JSON.stringify(Object(u.a)({},p)),f={method:"POST",headers:Ce,body:b,redirect:"follow"},e.prev=10,e.next=13,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products"),f);case 13:return j=e.sent,e.next=16,j.json();case 16:if(!(O=e.sent).product){e.next=23;break}return r("/dashboard/obchod"),Se({limit:10,skip:0,sortBy:{date:-1}}),G(null),C(),e.abrupt("return");case 23:L(O.messageSK),w(!1),e.next=32;break;case 27:e.prev=27,e.t0=e.catch(10),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 32:case"end":return e.stop()}}),e,null,[[10,27]])})));return function(t){return e.apply(this,arguments)}}(),Te=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,s,o,i,l,d,p,b,f,j,O,m,h,g,k,y,x,P;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),console.log(t),h=a("".concat((null===t||void 0===t?void 0:t.name)||(null===F||void 0===F?void 0:F.name),"-").concat((null===t||void 0===t||null===(n=t.specs)||void 0===n?void 0:n.frameColor)||(null===F||void 0===F||null===(s=F.specs)||void 0===s?void 0:s.frameColor),"-").concat((null===t||void 0===t||null===(o=t.specs)||void 0===o?void 0:o.size)||(null===F||void 0===F||null===(i=F.specs)||void 0===i?void 0:i.size))),(g=Object(u.a)(Object(u.a)({},t),{},{link:h,specs:{frameColor:(null===t||void 0===t||null===(l=t.specs)||void 0===l?void 0:l.frameColor)||(null===F||void 0===F||null===(d=F.specs)||void 0===d?void 0:d.frameColor),size:(null===t||void 0===t||null===(p=t.specs)||void 0===p?void 0:p.size)||(null===F||void 0===F||null===(b=F.specs)||void 0===b?void 0:b.size),frameMaterial:(null===t||void 0===t||null===(f=t.specs)||void 0===f?void 0:f.frameMaterial)||(null===F||void 0===F?void 0:F.specs.frameMaterial),frameStyle:(null===t||void 0===t||null===(j=t.specs)||void 0===j?void 0:j.frameStyle)||(null===F||void 0===F?void 0:F.specs.frameStyle),lensColor:(null===t||void 0===t||null===(O=t.specs)||void 0===O?void 0:O.lensColor)||(null===F||void 0===F?void 0:F.specs.lensColor),sex:(null===t||void 0===t||null===(m=t.specs)||void 0===m?void 0:m.sex)||(null===F||void 0===F?void 0:F.specs.sex)}})).price&&(g=Object(u.a)(Object(u.a)({},g),{},{price:Object(v.f)(t.price.toString())})),g.available&&(g="number"===typeof g.available?Object(u.a)(Object(u.a)({},g),{},{available:t.available}):Object(u.a)(Object(u.a)({},g),{},{available:t.available?t.available.map((function(e){return 1001===e?0:e})):[0,0,0,0,0,0,0]})),t.specs&&t.specs.size&&(g=Object(u.a)(Object(u.a)({},g),{},{specs:Object(u.a)(Object(u.a)({},g.specs),{},{size:t.specs.size.map((function(e){return 1001===e?0:Object(v.g)(e)}))})})),t.contactLenses&&(g=t.contactLenses.allowedCurves?Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{allowedCurves:t.contactLenses.allowedCurves.map((function(e){return Object(v.g)(e)}))})}):Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{allowedCurves:W.allowedCurves})}),g=t.contactLenses.allowedDiameters?Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{allowedDiameters:t.contactLenses.allowedDiameters.map((function(e){return Object(v.g)(e)}))})}):Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{allowedDiameters:W.allowedDiameters})}),g=t.contactLenses.dioptersRange?Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{dioptersRange:t.contactLenses.dioptersRange.map((function(e){return Object(v.g)(e)}))})}):Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{dioptersRange:W.dioptersRange})})),k=JSON.stringify(Object(u.a)({},g)),y={method:"PATCH",headers:Ce,body:k,redirect:"follow"},e.prev=11,e.next=14,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/").concat(F._id),y);case 14:return x=e.sent,e.next=17,x.json();case 17:if(!(P=e.sent).error){e.next=22;break}return L(P.messageSK),w(!1),e.abrupt("return");case 22:if(!P.product){e.next=27;break}return r("/dashboard/obchod"),Se({limit:10,skip:0,sortBy:{date:-1}}),C(),e.abrupt("return");case 27:L(P.messageSK),w(!1),e.next=36;break;case 31:e.prev=31,e.t0=e.catch(11),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 36:case"end":return e.stop()}}),e,null,[[11,31]])})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),a={method:"DELETE",headers:Ce,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/").concat(t),a);case 6:return n=e.sent,e.next=9,n.json();case 9:if(!(r=e.sent).product){e.next=14;break}return Se({limit:10,skip:0,sortBy:{date:-1}}),C(),e.abrupt("return");case 14:L(r.messageSK),w(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),Be=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),e.prev=2,e.next=5,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/store/lenses/").concat(t));case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(r=e.sent).lenses){e.next=14;break}return Q(r.lenses),a(r),C(),e.abrupt("return");case 14:L(r.messageSK),w(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t,a){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),a=JSON.stringify(Object(u.a)(Object(u.a)({},t),{},{price:Object(v.f)(t.price.toString())})),n={method:"POST",headers:Ce,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses"),n);case 7:return s=e.sent,e.next=10,s.json();case 10:if(!(o=e.sent).lenses){e.next=16;break}return r("/dashboard/obchod"),Le({sortBy:{dateCreated:-1}}),C(),e.abrupt("return");case 16:L(o.messageSK),w(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,s,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),(n=Object(u.a)({},t)).price&&(n=Object(u.a)(Object(u.a)({},n),{},{price:Object(v.f)(t.price.toString())})),s=JSON.stringify(Object(u.a)({},n)),o={method:"PATCH",headers:Ce,body:s,redirect:"follow"},e.prev=6,e.next=9,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses/").concat(a),o);case 9:return i=e.sent,e.next=12,i.json();case 12:if(!(l=e.sent).lenses){e.next=18;break}return r("/dashboard/obchod"),Le({sortBy:{dateCreated:-1}}),C(),e.abrupt("return");case 18:L(l.messageSK),w(!1),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(6),console.log(e.t0),L("Nieco sa pokazilo"),w(!1);case 27:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(t,a){return e.apply(this,arguments)}}(),Me=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),a={method:"DELETE",headers:Ce,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses/").concat(t),a);case 6:return n=e.sent,e.next=9,n.json();case 9:if(!(r=e.sent).lenses){e.next=14;break}return Le({sortBy:{dateCreated:-1}}),C(),e.abrupt("return");case 14:L(r.messageSK),w(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),L("Nie\u010do sa pokazilo"),w(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),a=JSON.stringify(t),n={method:"POST",headers:Ce,body:a,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/deactivateMany"),n);case 7:return r=e.sent,e.next=10,r.json();case 10:s=e.sent,L(s.messageSK),w(!1),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),L("Nie\u010do sa pokazilo"),w(!1);case 20:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){re&&(0===ye?Se({limit:10,skip:0,sortBy:{date:-1}}):1===ye?Le({sortBy:{dateCreated:-1}}):Se({limit:10,filters:{type:3},sortBy:{date:-1}}))}),[ye]),Object(d.useEffect)((function(){k&&(g?(Oe(j.h),be(0)):(Oe(j.h.filter((function(e){return e.premises===k.premises}))),be(0)))}),[k,g]),Object(d.useEffect)((function(){y&&(N(y.products),M(y.lenses))}),[y]),Object(d.useEffect)((function(){""!==F.name&&H(Object(u.a)(Object(u.a)({},F),{},{link:Object(v.e)(F.name)}))}),[F.name]),Object(n.jsx)(O.Provider,{value:{eanCode:K,product:F,lenses:Z,contactLensesParameters:W,glassesParameters:ee,totalProducts:T,totalLenses:E,activePremisesTab:pe,activeCategoryTypeTab:ye,retailPremisesTabs:je,productCategoryTypeTabs:he,products:re,lensesProducts:ie,handleChangeCategoryTypeTab:function(e){xe(e)},handleChangePremisesTab:function(e){be(e)},getProductsByQuery:Se,handleProductChange:function(e){var t=e.target,a=t.name,n=t.value;H(Object(u.a)(Object(u.a)({},F),{},Object(i.a)({},a,n)))},handleProductAvailableChange:function(e,t){var a=e.target,n=a.name,r=a.value,c=F[n];c[t]=""===r?1001:Number(r),H(Object(u.a)(Object(u.a)({},F),{},Object(i.a)({},n,c)))},getLenses:Le,getSingleProduct:Pe,createProduct:ze,updateProduct:Te,deleteProduct:Ne,getSingleLenses:Be,createLenses:Ae,updateLenses:Ee,deleteLenses:Me,handleLensesChange:function(e){var t=e.target,a=t.name,n=t.value;Q(Object(u.a)(Object(u.a)({},Z),{},Object(i.a)({},a,n)))},handleLensesParameterChange:function(e,t){var a=e.target,n=a.name,r=a.value,c=Z[n];c[t]=""===r?1001:Number(r),Q(Object(u.a)(Object(u.a)({},Z),{},Object(i.a)({},n,c)))},resetProduct:function(){H(Object(u.a)(Object(u.a)({},v.k),{},{available:[0,1001,1001,1001,1001,1001,1001]})),G(null)},resetLenses:function(){Q(Object(u.a)(Object(u.a)({},v.j),{},{dioptersRange:[1001,1001],cylinderRange:[1001,1001]}))},resetContactLenses:function(){Y(Object(u.a)(Object(u.a)({},v.h),{},{allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]}))},resetGlassesParameters:function(){te(Object(u.a)(Object(u.a)({},v.i),{},{specs:Object(u.a)(Object(u.a)({},v.i.specs),{},{size:[1001,1001,1001,1001]})}))},getEanCode:we,handleAddNewParameter:function(e){var t=e.target.name;Y(Object(u.a)(Object(u.a)({},W),{},Object(i.a)({},t,[].concat(Object(o.a)(W[t]),[1001]))))},handleContactLensesParameterChange:function(e,t){var a=e.target,n=a.name,r=a.value,c=W[n];c[t]=""===r?1001:r,Y(Object(u.a)(Object(u.a)({},W),{},Object(i.a)({},n,c)))},handleGlassesParameterChange:function(e){var t=e.target,a=t.name,n=t.value;te(Object(u.a)(Object(u.a)({},ee),{},Object(i.a)({},a,n)))},handleGlassesParameterSpecsChange:function(e){var t=e.target,a=t.name,n=t.value;te(Object(u.a)(Object(u.a)({},ee),{},{specs:Object(u.a)(Object(u.a)({},ee.specs),{},Object(i.a)({},a,n))}))},handleGlassesSizeChange:function(e,t){var a=e.target,n=a.name,r=a.value,c=ee.specs[n];c[t]=""===r?1001:r,te(Object(u.a)(Object(u.a)({},ee),{},{specs:Object(u.a)(Object(u.a)({},ee.specs),{},Object(i.a)({},n,c))}))},deactivateMany:Re},children:t})}},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"h",(function(){return c})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return l}));var n=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"],r=["eshop","Centr\xe1lny sklad","Obchodn\xe1, Bratislava","Mileti\u010dova, Bratislava","Vajnory, Bratislava","Vajnorsk\xe1 53, Bratislava","OC Bran\u010d, Senica"],c=[{id:0,name:"V\u0161etky"},{id:1,name:"Centr\xe1lny sklad"},{id:2,name:"Obchodn\xe1, Bratislava"},{id:3,name:"Mileti\u010dova, Bratislava"},{id:4,name:"Vajnory, Bratislava"},{id:5,name:"Vajnorsk\xe1 53, Bratislava"},{id:6,name:"OC Bran\u010d, Senica"}],s=["\u010ciern\xe1","Modr\xe1","\u010cerven\xe1","Siv\xe1","Zlat\xe1","Strieborn\xe1","Hned\xe1","Fialov\xe1","Zelen\xe1","Sed\xe1","Bordov\xe1"],o=["Acet\xe1t","Kov","Tit\xe1n","TR90","Patent","Optyl"],i=["Pilot","Squared","Browline","Cat eye","Tiny","Oversize","Okr\xfahle","Ov\xe1lne","Obd\u013a\u017enikov\xe9","Flat top","\u0160peci\xe1lne"],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.toString();var t=0;return e.includes(",")?1===e.split(",")[1].length?(t=e.split(",")[0]+e.split(",")[1]+"0",Number(t)):(t=e.split(",")[0]+e.split(",")[1],Number(t)):Number(100*e)},l=function(e){return e.includes(",")?e.split(",")[0]+"."+e.split(",")[1]:e}},57:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(22);var r=a(33);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},74:function(e,t,a){"use strict";a.d(t,"k",(function(){return r})),a.d(t,"i",(function(){return c})),a.d(t,"h",(function(){return s})),a.d(t,"j",(function(){return o})),a.d(t,"l",(function(){return i})),a.d(t,"m",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"f",(function(){return d})),a.d(t,"g",(function(){return p})),a.d(t,"d",(function(){return b})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return j})),a.d(t,"e",(function(){return O}));var n=a(2),r={name:"",subname:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[0,1001,1001,1001,1001,1001,1001],eanCode:"",image:"",eshop:!0,link:"",category:""},c={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"",size:[1001,1001,1001,1001]}},s={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},o={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:"",lensType:"\u010d\xedre",dioptric:!0},i=["\u010d\xedre","slne\u010dn\xe9","fotochromatick\xe9"],u=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"Slu\u017eby",value:6},{name:"\u0160o\u0161ovky",value:0}],l=[{id:0,name:"Okuliare"},{id:2,name:"Kontaktn\xe9 \u0161o\u0161ovky"},{id:1,name:"\u0160o\u0161ovky"}],d=function(e){var t=0;return e.includes(",")?1===e.split(",")[1].length?(t=e.split(",")[0]+e.split(",")[1]+"0",Number(t)):(t=e.split(",")[0]+e.split(",")[1],Number(t)):Number(100*e)},p=function(e){var t=e.toString(),a=0;return t.includes(",")?(a=t.split(",")[0]+"."+t.split(",")[1],Number(a)):Number(t)},b=function(e,t){return void 0===e?"\u0160o\u0161ovka":"number"===typeof e?e<0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(n.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(e)]})]}):0===e?Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(e," ks"):0===t?e.reduce((function(e,t){return e+t}))<0||0===e.reduce((function(e,t){return e+t}))?Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"V\u0161etky: 0 ks"}):"V\u0161etky: ".concat(e.reduce((function(e,t){return e+t}))," ks"):e[t]<0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(n.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(e[t])]})]}):0===e[t]?Object(n.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(e[t]," ks")},f=function(e,t){if(void 0!==e)return 0===e.length||1001===e[t]?"":e[t].toString()},v="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",j=function(e){for(var t="",a=0;a<e.length;a++)-1!==v.indexOf(e.charAt(a))?t+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(v.indexOf(e.charAt(a))):t+=e.charAt(a);return t},O=function(e){return j(e).replaceAll(" ","-").toLowerCase().trim()}}}]);
//# sourceMappingURL=0.2f18b16b.chunk.js.map