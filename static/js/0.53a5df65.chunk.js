(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"WarehouseContext",(function(){return m}));var a=n(2),r=n(8),c=n.n(r),s=n(12),o=n(57),i=n(31),u=n(13),l=n(5),d=n(1),p=n(3),b=n(19),f=n(20),v=n(92),j=n(74),O=n(55),m=Object(d.createContext)({eanCode:null,product:{},lenses:{},contactLensesParameters:{},glassesParameters:{},totalProducts:0,totalLenses:0,activePremisesTab:0,activeCategoryTypeTab:0,retailPremisesTabs:[],productCategoryTypeTabs:[],products:null,lensesProducts:null,handleChangeCategoryTypeTab:function(){},handleChangePremisesTab:function(){},getProductsByQuery:function(){},handleProductChange:function(){},handleProductAvailableChange:function(){},getSingleProduct:function(){},createProduct:function(){},updateProduct:function(){},deleteProduct:function(){},getSingleLenses:function(){},getLenses:function(){},createLenses:function(){},updateLenses:function(){},deleteLenses:function(){},handleLensesChange:function(){},handleLensesParameterChange:function(){},resetProduct:function(){},resetLenses:function(){},resetContactLenses:function(){},resetGlassesParameters:function(){},getEanCode:function(){},handleAddNewParameter:function(){},handleContactLensesParameterChange:function(){},handleGlassesParameterChange:function(){},handleGlassesParameterSpecsChange:function(){},handleGlassesSizeChange:function(){},deactivateMany:function(){},getFilteredLenses:function(){}});t.default=function(e){var t=e.children,n=Object(v.a)().getSlug,r=Object(p.h)().push,h=Object(d.useContext)(f.a),g=h.token,k=h.isAdmin,y=h.currentUser,x=h.stats,C=Object(d.useContext)(b.a),w=C.closeModal,S=C.setIsLoading,L=C.setShowModal,P=C.getMessage,z=Object(d.useState)(0),T=Object(l.a)(z,2),N=T[0],B=T[1],A=Object(d.useState)(0),E=Object(l.a)(A,2),M=E[0],R=E[1],D=Object(d.useState)(null),K=Object(l.a)(D,2),q=K[0],G=K[1],J=Object(d.useState)(Object(u.a)({},j.k)),F=Object(l.a)(J,2),H=F[0],V=F[1],I=Object(d.useState)(Object(u.a)({},j.j)),Z=Object(l.a)(I,2),Q=Z[0],U=Z[1],_=Object(d.useState)(Object(u.a)({},j.h)),W=Object(l.a)(_,2),Y=W[0],$=W[1],X=Object(d.useState)(Object(u.a)({},j.i)),ee=Object(l.a)(X,2),te=ee[0],ne=ee[1],ae=Object(d.useState)(null),re=Object(l.a)(ae,2),ce=re[0],se=re[1],oe=Object(d.useState)(null),ie=Object(l.a)(oe,2),ue=ie[0],le=ie[1],de=Object(d.useState)(0),pe=Object(l.a)(de,2),be=pe[0],fe=pe[1],ve=Object(d.useState)([]),je=Object(l.a)(ve,2),Oe=je[0],me=je[1],he=Object(d.useState)(j.a),ge=Object(l.a)(he,1)[0],ke=Object(d.useState)(0),ye=Object(l.a)(ke,2),xe=ye[0],Ce=ye[1],we=new Headers;we.append("auth-token",g),we.append("Content-Type","application/json");var Se=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),t={method:"GET",headers:we,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/nextEanCode"),t);case 6:return n=e.sent,e.next=9,n.json();case 9:if(!(a=e.sent).eanCode){e.next=14;break}return G(a.eanCode),w(),e.abrupt("return");case 14:P(a.messageSK),S(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),n=JSON.stringify(t),a={method:"POST",headers:we,body:n,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/filter"),a);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(s=e.sent).products){e.next=15;break}return se(s.products),w(),e.abrupt("return");case 15:P(s.message),S(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),n=JSON.stringify(t),a={method:"POST",headers:we,body:n,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses/filter"),a);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(s=e.sent).lenses){e.next=16;break}return se(s.lenses),le(s.lenses),w(),e.abrupt("return");case 16:P(s.messageSK),S(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),P("Nie\u010do sa pokazilo"),S(!1);case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),n=JSON.stringify(t),a={method:"POST",headers:we,body:n,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses/filter"),a);case 7:return r=e.sent,e.next=10,r.json();case 10:if(!(s=e.sent).lenses){e.next=16;break}return se(s.lenses),le(s.lenses),w(),e.abrupt("return");case 16:P(s.messageSK),S(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),P("Nie\u010do sa pokazilo"),S(!1);case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),Te=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),e.prev=2,e.next=5,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/store/products/").concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:if("not-found"===(r=e.sent).error&&Ee(t,(function(){})),!r.product){e.next=16;break}return V(Object(u.a)(Object(u.a)({},r.product),{},{price:(r.product.price/100).toFixed(2)})),3===r.product.type?$(Object(u.a)({},r.product.contactLenses)):ne({colorCode:null!==(s=r.product.colorCode)&&void 0!==s?s:"",specs:Object(u.a)(Object(u.a)({},r.product.specs),{},{size:Object(o.a)(Array(4)).map((function(e,t){return r.product.specs.size[t]?r.product.specs.size[t]:0}))})}),n(r),w(),e.abrupt("return");case 16:P(r.messageSK),S(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 25:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t,n){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,s,o,i,l,d,p,b,f,v,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),null,(null===t||void 0===t||null===(a=t.specs)||void 0===a?void 0:a.size)&&Object(j.c)((null===t||void 0===t||null===(l=t.specs)||void 0===l?void 0:l.size[0].toString())||"").replaceAll(" ","-").replaceAll(",","-").replaceAll(".","-").toLowerCase().trim(),d=n("".concat((null===t||void 0===t?void 0:t.name)||"neuvedene","-").concat((null===t||void 0===t||null===(s=t.specs)||void 0===s?void 0:s.frameColor)||"neuvedene","-").concat((null===t||void 0===t||null===(o=t.specs)||void 0===o?void 0:o.size)||"neuvedene")),p=Object(u.a)(Object(u.a)({},t),{},{price:Object(j.f)((null===t||void 0===t||null===(i=t.price)||void 0===i?void 0:i.toString())||""),link:d}),t.specs&&t.specs.size&&(p=Object(u.a)(Object(u.a)({},p),{},{specs:Object(u.a)(Object(u.a)({},p.specs),{},{size:t.specs.size.map((function(e){return 1001===e?0:Object(j.g)(e)}))})})),t.contactLenses&&(t.contactLenses.allowedCurves&&(p=Object(u.a)(Object(u.a)({},p),{},{contactLenses:Object(u.a)(Object(u.a)({},p.contactLenses),{},{allowedCurves:t.contactLenses.allowedCurves.map((function(e){return Object(j.g)(e)}))})})),t.contactLenses.allowedDiameters&&(p=Object(u.a)(Object(u.a)({},p),{},{contactLenses:Object(u.a)(Object(u.a)({},p.contactLenses),{},{allowedDiameters:t.contactLenses.allowedDiameters.map((function(e){return Object(j.g)(e)}))})})),t.contactLenses.dioptersRange&&(p=Object(u.a)(Object(u.a)({},p),{},{contactLenses:Object(u.a)(Object(u.a)({},p.contactLenses),{},{dioptersRange:t.contactLenses.dioptersRange.map((function(e){return Object(j.g)(e)}))})}))),b=JSON.stringify(Object(u.a)({},p)),f={method:"POST",headers:we,body:b,redirect:"follow"},e.prev=10,e.next=13,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products"),f);case 13:return v=e.sent,e.next=16,v.json();case 16:if(!(O=e.sent).product){e.next=23;break}return r("/dashboard/obchod"),Le({limit:10,skip:0,sortBy:{date:-1}}),G(null),w(),e.abrupt("return");case 23:P(O.messageSK),S(!1),e.next=32;break;case 27:e.prev=27,e.t0=e.catch(10),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 32:case"end":return e.stop()}}),e,null,[[10,27]])})));return function(t){return e.apply(this,arguments)}}(),Be=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,s,o,i,l,d,p,b,f,v,O,m,h,g,k,y,x,C;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),console.log(t),h=n("".concat((null===t||void 0===t?void 0:t.name)||(null===H||void 0===H?void 0:H.name),"-").concat((null===t||void 0===t||null===(a=t.specs)||void 0===a?void 0:a.frameColor)||(null===H||void 0===H||null===(s=H.specs)||void 0===s?void 0:s.frameColor)||"","-").concat((null===t||void 0===t||null===(o=t.specs)||void 0===o?void 0:o.size)||(null===H||void 0===H||null===(i=H.specs)||void 0===i?void 0:i.size))),g=Object(u.a)(Object(u.a)(Object(u.a)({},t),{},{link:h},!(""===t.image)&&{image:t.image}),t.specs&&{specs:{frameColor:(null===t||void 0===t||null===(l=t.specs)||void 0===l?void 0:l.frameColor)||(null===H||void 0===H||null===(d=H.specs)||void 0===d?void 0:d.frameColor),size:(null===t||void 0===t||null===(p=t.specs)||void 0===p?void 0:p.size)||(null===H||void 0===H||null===(b=H.specs)||void 0===b?void 0:b.size),frameMaterial:(null===t||void 0===t||null===(f=t.specs)||void 0===f?void 0:f.frameMaterial)||(null===H||void 0===H?void 0:H.specs.frameMaterial),frameStyle:(null===t||void 0===t||null===(v=t.specs)||void 0===v?void 0:v.frameStyle)||(null===H||void 0===H?void 0:H.specs.frameStyle),lensColor:(null===t||void 0===t||null===(O=t.specs)||void 0===O?void 0:O.lensColor)||(null===H||void 0===H?void 0:H.specs.lensColor),sex:(null===t||void 0===t||null===(m=t.specs)||void 0===m?void 0:m.sex)||(null===H||void 0===H?void 0:H.specs.sex)}}),console.log(g),g.price&&(g=Object(u.a)(Object(u.a)({},g),{},{price:Object(j.f)(t.price.toString())})),g.available&&(g="number"===typeof g.available?Object(u.a)(Object(u.a)({},g),{},{available:t.available}):Object(u.a)(Object(u.a)({},g),{},{available:t.available?t.available.map((function(e){return 1001===e?0:e})):[0,0,0,0,0,0,0]})),t.specs&&t.specs.size&&(g=Object(u.a)(Object(u.a)({},g),{},{specs:Object(u.a)(Object(u.a)({},g.specs),{},{size:t.specs.size.map((function(e){return 1001===e?0:Object(j.g)(e)}))})})),t.contactLenses&&(g=t.contactLenses.allowedCurves?Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{allowedCurves:t.contactLenses.allowedCurves.map((function(e){return Object(j.g)(e)}))})}):Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{allowedCurves:Y.allowedCurves})}),g=t.contactLenses.allowedDiameters?Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{allowedDiameters:t.contactLenses.allowedDiameters.map((function(e){return Object(j.g)(e)}))})}):Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{allowedDiameters:Y.allowedDiameters})}),g=t.contactLenses.dioptersRange?Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{dioptersRange:t.contactLenses.dioptersRange.map((function(e){return Object(j.g)(e)}))})}):Object(u.a)(Object(u.a)({},g),{},{contactLenses:Object(u.a)(Object(u.a)({},g.contactLenses),{},{dioptersRange:Y.dioptersRange})})),k=JSON.stringify(Object(u.a)({},g)),y={method:"PATCH",headers:we,body:k,redirect:"follow"},e.prev=12,e.next=15,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/").concat(H._id),y);case 15:return x=e.sent,e.next=18,x.json();case 18:if(!(C=e.sent).error){e.next=23;break}return P(C.messageSK),S(!1),e.abrupt("return");case 23:if(!C.product){e.next=28;break}return r("/dashboard/obchod"),Le({limit:10,skip:0,sortBy:{date:-1}}),w(),e.abrupt("return");case 28:P(C.messageSK),S(!1),e.next=37;break;case 32:e.prev=32,e.t0=e.catch(12),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 37:case"end":return e.stop()}}),e,null,[[12,32]])})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),n={method:"DELETE",headers:we,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/").concat(t),n);case 6:return a=e.sent,e.next=9,a.json();case 9:if(!(r=e.sent).product){e.next=14;break}return Le({limit:10,skip:0,sortBy:{date:-1}}),w(),e.abrupt("return");case 14:P(r.messageSK),S(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),e.prev=2,e.next=5,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/store/lenses/").concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:if(!(r=e.sent).lenses){e.next=14;break}return U(r.lenses),n(r),w(),e.abrupt("return");case 14:P(r.messageSK),S(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t,n){return e.apply(this,arguments)}}(),Me=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),n=JSON.stringify(Object(u.a)(Object(u.a)({},t),{},{price:Object(j.f)(t.price.toString())})),a={method:"POST",headers:we,body:n,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses"),a);case 7:return s=e.sent,e.next=10,s.json();case 10:if(!(o=e.sent).lenses){e.next=16;break}return r("/dashboard/obchod"),Pe({sortBy:{dateCreated:-1}}),w(),e.abrupt("return");case 16:P(o.messageSK),S(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,s,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),(a=Object(u.a)({},t)).price&&(a=Object(u.a)(Object(u.a)({},a),{},{price:Object(j.f)(t.price.toString())})),s=JSON.stringify(Object(u.a)({},a)),o={method:"PATCH",headers:we,body:s,redirect:"follow"},e.prev=6,e.next=9,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses/").concat(n),o);case 9:return i=e.sent,e.next=12,i.json();case 12:if(!(l=e.sent).lenses){e.next=18;break}return r("/dashboard/obchod"),Pe({sortBy:{dateCreated:-1}}),w(),e.abrupt("return");case 18:P(l.messageSK),S(!1),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(6),console.log(e.t0),P("Nieco sa pokazilo"),S(!1);case 27:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(t,n){return e.apply(this,arguments)}}(),De=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),n={method:"DELETE",headers:we,redirect:"follow"},e.prev=3,e.next=6,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/lenses/").concat(t),n);case 6:return a=e.sent,e.next=9,a.json();case 9:if(!(r=e.sent).lenses){e.next=14;break}return Pe({sortBy:{dateCreated:-1}}),w(),e.abrupt("return");case 14:P(r.messageSK),S(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),P("Nie\u010do sa pokazilo"),S(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),L(!0),n=JSON.stringify(t),a={method:"POST",headers:we,body:n,redirect:"follow"},e.prev=4,e.next=7,fetch("".concat("https://imooptik-backend-jbuievsjdq-ew.a.run.app","/api/admin/products/deactivateMany"),a);case 7:return r=e.sent,e.next=10,r.json();case 10:s=e.sent,P(s.messageSK),S(!1),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),P("Nie\u010do sa pokazilo"),S(!1);case 20:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){ce&&(0===xe?Le({limit:10,skip:0,sortBy:{date:-1}}):1===xe?Pe({sortBy:{dateCreated:-1}}):Le({limit:10,filters:{type:3},sortBy:{date:-1}}))}),[xe]),Object(d.useEffect)((function(){y&&(k?(me(O.h),fe(0)):(me(O.h.filter((function(e){return e.premises===y.premises}))),fe(0)))}),[y,k]),Object(d.useEffect)((function(){x&&(B(x.products),R(x.lenses))}),[x]),Object(d.useEffect)((function(){""!==H.name&&V(Object(u.a)(Object(u.a)({},H),{},{link:Object(j.e)(H.name)}))}),[H.name]),Object(a.jsx)(m.Provider,{value:{eanCode:q,product:H,lenses:Q,contactLensesParameters:Y,glassesParameters:te,totalProducts:N,totalLenses:M,activePremisesTab:be,activeCategoryTypeTab:xe,retailPremisesTabs:Oe,productCategoryTypeTabs:ge,products:ce,lensesProducts:ue,handleChangeCategoryTypeTab:function(e){Ce(e)},handleChangePremisesTab:function(e){fe(e)},getProductsByQuery:Le,handleProductChange:function(e){var t=e.target,n=t.name,a=t.value;V(Object(u.a)(Object(u.a)({},H),{},Object(i.a)({},n,a)))},handleProductAvailableChange:function(e,t){var n=e.target,a=n.name,r=n.value,c=H[a];c[t]=""===r?1001:Number(r),V(Object(u.a)(Object(u.a)({},H),{},Object(i.a)({},a,c)))},getLenses:Pe,getSingleProduct:Te,createProduct:Ne,updateProduct:Be,deleteProduct:Ae,getSingleLenses:Ee,createLenses:Me,updateLenses:Re,deleteLenses:De,handleLensesChange:function(e){var t=e.target,n=t.name,a=t.value;U(Object(u.a)(Object(u.a)({},Q),{},Object(i.a)({},n,a)))},handleLensesParameterChange:function(e,t){var n=e.target,a=n.name,r=n.value,c=Q[a];c[t]=""===r?1001:Number(r),U(Object(u.a)(Object(u.a)({},Q),{},Object(i.a)({},a,c)))},resetProduct:function(){V(Object(u.a)(Object(u.a)({},j.k),{},{available:[0,1001,1001,1001,1001,1001,1001]})),G(null)},resetLenses:function(){U(Object(u.a)(Object(u.a)({},j.j),{},{dioptersRange:[1001,1001],cylinderRange:[1001,1001]}))},resetContactLenses:function(){$(Object(u.a)(Object(u.a)({},j.h),{},{allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]}))},resetGlassesParameters:function(){ne(Object(u.a)(Object(u.a)({},j.i),{},{specs:Object(u.a)(Object(u.a)({},j.i.specs),{},{size:[1001,1001,1001,1001]})}))},getEanCode:Se,handleAddNewParameter:function(e){var t=e.target.name;$(Object(u.a)(Object(u.a)({},Y),{},Object(i.a)({},t,[].concat(Object(o.a)(Y[t]),[1001]))))},handleContactLensesParameterChange:function(e,t){var n=e.target,a=n.name,r=n.value,c=Y[a];c[t]=""===r?1001:r,$(Object(u.a)(Object(u.a)({},Y),{},Object(i.a)({},a,c)))},handleGlassesParameterChange:function(e){var t=e.target,n=t.name,a=t.value;ne(Object(u.a)(Object(u.a)({},te),{},Object(i.a)({},n,a)))},handleGlassesParameterSpecsChange:function(e){var t=e.target,n=t.name,a=t.value;ne(Object(u.a)(Object(u.a)({},te),{},{specs:Object(u.a)(Object(u.a)({},te.specs),{},Object(i.a)({},n,a))}))},handleGlassesSizeChange:function(e,t){var n=e.target,a=n.name,r=n.value,c=te.specs[a];c[t]=""===r?1001:r,ne(Object(u.a)(Object(u.a)({},te),{},{specs:Object(u.a)(Object(u.a)({},te.specs),{},Object(i.a)({},a,c))}))},deactivateMany:Ke,getFilteredLenses:ze},children:t})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l}));var a=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"],r=["eshop","Centr\xe1lny sklad","Obchodn\xe1, Bratislava","Mileti\u010dova, Bratislava","Vajnory, Bratislava","Vajnorsk\xe1 53, Bratislava","OC Bran\u010d, Senica"],c=[{id:0,name:"V\u0161etky"},{id:1,name:"Centr\xe1lny sklad"},{id:2,name:"Obchodn\xe1, Bratislava"},{id:3,name:"Mileti\u010dova, Bratislava"},{id:4,name:"Vajnory, Bratislava"},{id:5,name:"Vajnorsk\xe1 53, Bratislava"},{id:6,name:"OC Bran\u010d, Senica"}],s=["\u010ciern\xe1","Modr\xe1","\u010cerven\xe1","Siv\xe1","Zlat\xe1","Strieborn\xe1","Hned\xe1","Fialov\xe1","Zelen\xe1","Sed\xe1","Bordov\xe1"],o=["Acet\xe1t","Kov","Tit\xe1n","TR90","Patent","Optyl"],i=["Pilot","Squared","Browline","Cat eye","Tiny","Oversize","Okr\xfahle","Ov\xe1lne","Obd\u013a\u017enikov\xe9","Flat top","\u0160peci\xe1lne"],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.toString();var t=0;return e.includes(",")?1===e.split(",")[1].length?(t=e.split(",")[0]+e.split(",")[1]+"0",Number(t)):(t=e.split(",")[0]+e.split(",")[1],Number(t)):Number(100*e)},l=function(e){return e.includes(",")?e.split(",")[0]+"."+e.split(",")[1]:e}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(22);var r=n(33);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},74:function(e,t,n){"use strict";n.d(t,"k",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"j",(function(){return o})),n.d(t,"l",(function(){return i})),n.d(t,"m",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"e",(function(){return O}));var a=n(2),r={name:"",subname:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[0,1001,1001,1001,1001,1001,1001],eanCode:"",image:"",eshop:!0,link:"",category:""},c={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"",size:[1001,1001,1001,1001]}},s={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},o={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:"",lensType:"\u010d\xedre",dioptric:!0},i=["\u010d\xedre","slne\u010dn\xe9","fotochromatick\xe9"],u=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"Slu\u017eby",value:6},{name:"\u0160o\u0161ovky",value:0}],l=[{id:0,name:"Okuliare"},{id:2,name:"Kontaktn\xe9 \u0161o\u0161ovky"},{id:1,name:"\u0160o\u0161ovky"}],d=function(e){var t=0;return e.includes(",")?1===e.split(",")[1].length?(t=e.split(",")[0]+e.split(",")[1]+"0",Number(t)):(t=e.split(",")[0]+e.split(",")[1],Number(t)):Number(100*e)},p=function(e){var t=e.toString(),n=0;return t.includes(",")?(n=t.split(",")[0]+"."+t.split(",")[1],Number(n)):Number(t)},b=function(e,t){return void 0===e?"\u0160o\u0161ovka":"number"===typeof e?e<0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(a.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(e)]})]}):0===e?Object(a.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(e," ks"):0===t?e.reduce((function(e,t){return e+t}))<0||0===e.reduce((function(e,t){return e+t}))?Object(a.jsx)("p",{style:{color:"var(--color-red)"},children:"V\u0161etky: 0 ks"}):"V\u0161etky: ".concat(e.reduce((function(e,t){return e+t}))," ks"):e[t]<0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(a.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(e[t])]})]}):0===e[t]?Object(a.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(e[t]," ks")},f=function(e,t){if(void 0!==e)return 0===e.length||1001===e[t]?"":e[t].toString()},v="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",j=function(e){for(var t="",n=0;n<e.length;n++)-1!==v.indexOf(e.charAt(n))?t+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(v.indexOf(e.charAt(n))):t+=e.charAt(n);return t},O=function(e){return j(e).replaceAll(" ","-").toLowerCase().trim()}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(5),r=n(1),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",c=new RegExp(t.split("").join("|"),"g"),s=Object(r.useState)(""),o=Object(a.a)(s,2),i=o[0],u=o[1],l=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(c,(function(e){return n.charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};return Object(r.useEffect)((function(){var t=l(e);u(t)}),[e]),{slug:i,getSlug:l}}}}]);
//# sourceMappingURL=0.53a5df65.chunk.js.map