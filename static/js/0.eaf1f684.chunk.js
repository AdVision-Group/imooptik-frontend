(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[0,17],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"WarehouseContext",(function(){return S}));var a=n(1),r=n(7),o=n.n(r),c=n(12),s=n(32),i=n(19),u=n(5),l=n(0),p=n(4),d=n(17),f=n(8),h=n(55),g=function(e){var t=new Headers;t.append("auth-token",e);var n={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/products"),n)},b=function(e){return fetch("".concat("http://195.110.58.166:8080","/api/store/products/").concat(e))},m=function(e){var t=new Headers;t.append("auth-token",e);var n={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses"),n)},v=function(e){return fetch("".concat("http://195.110.58.166:8080","/api/store/lenses/").concat(e))},j=function(e,t){var n=new Headers;n.append("auth-token",e);var a={method:"DELETE",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses/").concat(t),a)},O=function(e,t){var n=t.brand,a=t.cylinderRange,r=t.description,o=t.dioptersRange,c=t.name,s=t.price,i=t.imagePath,u=t.eshop,l=new Headers;l.append("auth-token",e),l.append("Content-Type","application/json");var p={method:"POST",headers:l,body:JSON.stringify({brand:n||" ",cylinderRange:a.map((function(e){return Number(e)})),name:c,price:Number(s),description:r,image:i,dioptersRange:o.map((function(e){return Number(e)})),eshop:u}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses"),p)},x=function(e,t){var n=t._id,a=t.brand,r=t.cylinderRange,o=t.description,c=t.dioptersRange,s=t.name,i=t.price,u=t.imagePath,l=t.eshop,p=new Headers;p.append("auth-token",e),p.append("Content-Type","application/json");var d={method:"PATCH",headers:p,body:JSON.stringify({brand:a||" ",cylinderRange:r.map((function(e){return Number(e)})),name:s,price:Number(i),description:o,image:u,dioptersRange:c.map((function(e){return Number(e)})),eshop:l}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/lenses/").concat(n),d)},k=function(e,t){var n=t.available,a=t.brand,r=t.colorCode,o=t.description,c=t.eanCode,s=t.eshop,i=t.name,u=t.price,l=t.specs,p=l.frameColor,d=l.frameMaterial,f=l.frameStyle,h=l.lensColor,g=l.sex,b=t.type,m=t.imagePath;console.log(m);var v=new Headers;v.append("auth-token",e),v.append("Content-Type","application/json");var j={};j=4===b||5===b?JSON.stringify({available:n,brand:a||" ",colorCode:r||" ",description:o||" ",eanCode:c,eshop:s,name:i,price:u,type:b,image:m}):JSON.stringify({available:n,brand:a||" ",colorCode:r||" ",description:o||" ",eanCode:c,eshop:s,name:i,price:u,specs:{frameColor:p||" ",frameMaterial:d||" ",frameStyle:f||" ",lensColor:h||" ",sex:g},type:b,image:m}),console.log(j);var O={method:"POST",headers:v,body:j,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/products"),O)},C=function(e,t){var n=t.available,a=t.brand,r=t.colorCode,o=t.description,c=t.eanCode,s=t.eshop,i=t.name,u=t.price,l=t.specs,p=l.frameColor,d=l.frameMaterial,f=l.frameStyle,h=l.lensColor,g=l.sex,b=t.type,m=t.imagePath,v=t._id,j=new Headers;j.append("auth-token",e),j.append("Content-Type","application/json");var O={};O=4===b||5===b?JSON.stringify({available:n,brand:a||" ",colorCode:r||" ",description:o||" ",eanCode:c,eshop:s,name:i,price:u,type:b,image:m}):JSON.stringify({available:n,brand:a||" ",colorCode:r||" ",description:o||" ",eanCode:c,eshop:s,name:i,price:u,specs:{frameColor:p||" ",frameMaterial:d||" ",frameStyle:f||" ",lensColor:h||" ",sex:g},type:b,image:m}),console.log(O);var x={method:"PATCH",headers:j,body:O,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/products/").concat(v),x)},y=function(e,t){var n=new Headers;n.append("auth-token",e),n.append("Content-Type","application/json");var a={method:"DELETE",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/products/").concat(t),a)},w=n(85),S=Object(l.createContext)({formToShow:0,toggleProductForms:function(){},showUpdateForm:function(){},isUpdating:!1,activeCategoryIndex:0,categories:[],toggleDraft:function(){},handleCategoryChange:function(){},handleAvailableChange:function(){},handleSizeChange:function(){},selectImage:function(){},product:null,products:null,handleChange:function(){},handleSpecsChange:function(){},resetProduct:function(){},lenses:null,lensesArr:null,handleLensesChange:function(){},handleLensesDioptersRangeChange:function(){},handleLensesCylinderRangeChange:function(){},totalCount:0,getProducts:function(){},getSingleProduct:function(){},createNewProduct:function(){},handleProductDelete:function(){},updateProduct:function(){},createNewLenses:function(){},getLenses:function(){},getSigleLenses:function(){},updateLenses:function(){},deleteLenses:function(){}});t.default=function(e){var t=e.children,n=Object(l.useContext)(f.a).token,r=Object(l.useContext)(d.a),N=r.setIsLoading,P=r.setShowModal,L=r.getMessage,I=r.closeModal,R=Object(l.useContext)(h.ImageContext).setSelectedImage,T=Object(p.g)().push,z=Object(l.useState)(0),D=Object(u.a)(z,2),M=D[0],H=D[1],E=Object(l.useState)(!1),J=Object(u.a)(E,2),A=J[0],B=J[1],F=Object(l.useState)(0),G=Object(u.a)(F,2),_=G[0],U=G[1],K=Object(l.useState)(0),V=Object(u.a)(K,2),W=V[0],q=V[1],Q=Object(l.useState)(w.d),X=Object(u.a)(Q,1)[0],Y=Object(l.useState)(w.c),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=Object(l.useState)(null),ne=Object(u.a)(te,2),ae=ne[0],re=ne[1],oe=Object(l.useState)(w.b),ce=Object(u.a)(oe,2),se=ce[0],ie=ce[1],ue=Object(l.useState)(null),le=Object(u.a)(ue,2),pe=le[0],de=le[1],fe=function(){ee(w.c),ie(w.b),R(null),B(!1),U(0),q(0)},he=function(){var e=Object(c.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,g(n);case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(a=e.sent).products){e.next=14;break}return H(M+a.count),re(a.products),N(!1),e.abrupt("return");case 14:L(a.message),N(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,b(t);case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(a=e.sent).error){e.next=13;break}return L(a.message),N(!1),e.abrupt("return");case 13:a.product&&(ee(Object(i.a)(Object(i.a)(Object(i.a)({},$),a.product),{},{specs:Object(i.a)(Object(i.a)({},$.specs),a.product.specs),imagePath:a.product.image._id})),U(a.product.type),R(a.product.image),B(!0)),I(),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,k(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:if(r=e.sent,console.log(r),!r.error){e.next=14;break}return L(r.message),N(!1),e.abrupt("return");case 14:N(!1),L(r.success),fe(),T("/dashboard/obchod"),he(),I(),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 27:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,C(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:if(r=e.sent,console.log(r),!r.error){e.next=14;break}return L(r.message),N(!1),e.abrupt("return");case 14:L(r.message),N(!1),T("/dashboard/obchod"),he(),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 25:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,y(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,N(!1),L(r.message),he(),T("/dashboard/obchod"),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(c.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,m(n);case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(a=e.sent).lenses){e.next=14;break}return H(M+a.count),de(a.lenses),N(!1),e.abrupt("return");case 14:N(!1),L(a.message),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,v(t);case 5:return n=e.sent,e.next=8,n.json();case 8:if(a=e.sent,console.log(a),!a.error){e.next=14;break}return L(a.message),N(!1),e.abrupt("return");case 14:a.lenses&&(ie(Object(i.a)(Object(i.a)(Object(i.a)({},se),a.lenses),{},{imagePath:a.lenses.image._id})),R(a.lenses.image),B(!0)),I(),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,O(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:(r=e.sent)&&(N(!1),L(r.message),T("/dashboard/obchod"),je(),I()),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,x(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,console.log(r),r&&(N(!1),L(r.message),T("/dashboard/obchod"),je()),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),P(!0),e.prev=2,e.next=5,j(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:(r=e.sent).error&&(N(!1),L(r.message)),je(),N(!1),L(r.message),T("/dashboard/obchod"),I(),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),L("Nieco sa pokazilo"),N(!1);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(S.Provider,{value:{switchFormButtons:[{name:"Okuliare a i."},{name:"Skl\xe1"}],formToShow:W,toggleProductForms:function(e,t){e.preventDefault(),q(t)},showUpdateForm:function(e){q(e),B(!0)},isUpdating:A,activeCategoryIndex:_,categories:X,toggleDraft:function(){ee(Object(i.a)(Object(i.a)({},$),{},{eshop:!$.eshop})),ie(Object(i.a)(Object(i.a)({},se),{},{eshop:!$.eshop}))},handleCategoryChange:function(e){U(e),ee(Object(i.a)(Object(i.a)({},$),{},{type:e}))},handleAvailableChange:function(e,t){var n=$.available;n[t]=Number(e.target.value),ee(Object(i.a)(Object(i.a)({},$),{},{available:n}))},handleSizeChange:function(e,t){var n=$.specs.size;n[t]=Number(e.target.value),ee(Object(i.a)(Object(i.a)({},$),{},{specs:Object(i.a)(Object(i.a)({},$.specs),{},{size:n})}))},selectImage:function(e){ee(Object(i.a)(Object(i.a)({},$),{},{imagePath:e})),ie(Object(i.a)(Object(i.a)({},se),{},{imagePath:e}))},product:$,products:ae,handleChange:function(e){var t=e.target,n=t.name,a=t.value;ee(Object(i.a)(Object(i.a)({},$),{},Object(s.a)({},n,a)))},handleSpecsChange:function(e){var t=e.target,n=t.name,a=t.value;ee(Object(i.a)(Object(i.a)({},$),{},{specs:Object(i.a)(Object(i.a)({},$.specs),{},Object(s.a)({},n,a))}))},resetProduct:fe,lenses:se,lensesArr:pe,handleLensesChange:function(e){var t=e.target,n=t.name,a=t.value;ie(Object(i.a)(Object(i.a)({},se),{},Object(s.a)({},n,a)))},handleLensesDioptersRangeChange:function(e,t){var n=se.dioptersRange;n[t]=Number(e.target.value),ie(Object(i.a)(Object(i.a)({},se),{},{dioptersRange:n}))},handleLensesCylinderRangeChange:function(e,t){var n=se.cylinderRange;n[t]=Number(e.target.value),ie(Object(i.a)(Object(i.a)({},se),{},{cylinderRange:n}))},totalCount:M,getProducts:he,getSingleProduct:ge,createNewProduct:be,handleProductDelete:ve,updateProduct:me,createNewLenses:xe,getLenses:je,getSigleLenses:Oe,updateLenses:ke,deleteLenses:Ce},children:t})}},55:function(e,t,n){"use strict";n.r(t),n.d(t,"ImageContext",(function(){return h}));var a=n(1),r=n(7),o=n.n(r),c=n(12),s=n(5),i=n(0),u=n(17),l=n(8),p=function(e,t,n,a){var r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var o={method:"POST",headers:r,body:JSON.stringify({name:n||" ",alt:a||" ",image:t}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/images/upload"),o)},d=function(e,t,n){var a=new Headers;a.append("Content-Type","application/json");var r={method:"POST",headers:a,body:JSON.stringify({sortBy:{dateCreated:-1},limit:t,skip:n}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/images/filter"),r)},f=function(e,t){var n=new Headers;n.append("auth-token",e);var a={method:"DELETE",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/images/").concat(t),a)},h=Object(i.createContext)({isDisabled:!1,images:null,selectedImage:null,getImages:function(){},handleImage:function(){},handleDeleteImage:function(){},setSelectedImage:function(){},getNextImages:function(){},getPrevImage:function(){}});t.default=function(e){var t=e.children,n=Object(i.useContext)(u.a),r=n.getMessage,g=n.setIsLoading,b=n.setShowModal,m=n.closeModal,v=Object(i.useContext)(l.a).token,j=Object(i.useState)(!1),O=Object(s.a)(j,2),x=O[0],k=O[1],C=Object(i.useState)(null),y=Object(s.a)(C,2),w=y[0],S=y[1],N=Object(i.useState)(null),P=Object(s.a)(N,2),L=P[0],I=P[1],R=Object(i.useState)(4),T=Object(s.a)(R,2),z=T[0],D=(T[1],Object(i.useState)(0)),M=Object(s.a)(D,2),H=M[0],E=M[1],J=function(){var e=Object(c.a)(o.a.mark((function e(t,n,a,c,s){var i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),g(!0),k(!0),e.prev=3,e.next=6,p(v,t,n,a);case 6:return i=e.sent,e.next=9,i.json();case 9:u=e.sent,console.log(u),u.image&&(I(u.image),c(u.image._id),F(),s()),b(!1),g(!1),k(!1),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0),r("Nieco sa pokazilo"),g(!1),k(!1);case 23:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t,n,a,r,o){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,w.length===z){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,d(0,z,H+t);case 5:return n=e.sent,e.next=8,n.json();case 8:(a=e.sent).images&&(S(a.images),E(H+t)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),r("Nieco sa pokazilo"),g(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==H){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,d(0,z,H-t);case 5:return n=e.sent,e.next=8,n.json();case 8:(a=e.sent).images&&(S(a.images),E(H-t)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),r("Nieco sa pokazilo"),g(!1);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),g(!0),e.prev=2,e.next=5,d(0,z,H);case 5:return t=e.sent,e.next=8,t.json();case 8:(n=e.sent).images&&S(n.images),r(n.message),g(!1),m(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),r("Nieco sa pokazilo"),g(!1);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),b(!0),g(!0),e.prev=3,e.next=6,f(v,t);case 6:return a=e.sent,e.next=9,a.json();case 9:c=e.sent,r(c.message),g(!1),F(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),r("Nieco sa pokazilo"),g(!1);case 20:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.jsx)(h.Provider,{value:{isDisabled:x,images:w,selectedImage:L,getImages:F,handleImage:J,handleDeleteImage:G,setSelectedImage:I,getNextImages:A,getPrevImage:B},children:t})}},85:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c}));var a={name:"",description:"",price:"0",type:1,brand:"",soldAmount:0,available:[0,0,0,0,0],eanCode:"",colorCode:"",colorName:"",imagePath:"",image:null,eshop:!1,specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"M",size:[0,0,0]}},r={id:"",name:"",description:"",dioptersRange:["0","0"],cylinderRange:["0","0"],price:"0",brand:"",imagePath:""},o=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"\u0160portov\xe9",value:3},{name:"\u0160o\u0161ovky",value:4},{name:"Doplnky",value:5}],c=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"]}}]);
//# sourceMappingURL=0.eaf1f684.chunk.js.map