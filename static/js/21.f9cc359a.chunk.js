(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[21],{55:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(22);var o=n(33);function r(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},61:function(e,t,n){"use strict";n.r(t),n.d(t,"OrderContext",(function(){return b}));var c=n(2),o=n(7),r=n.n(o),u=n(12),a=n(55),s=n(21),i=n(10),d=n(1),l=n(19),f=n(18),b=Object(d.createContext)({step:"",order:{},cart:[],selectedProduct:null,setOrder:function(){},addUser:function(){},addProduct:function(){},addProductDiscount:function(){},addLensesParameters:function(){},deleteProduct:function(){},addLenses:function(){},addLensesDiscount:function(){},resetOrder:function(){},changeStep:function(){},selectProduct:function(){},createCombinedProducts:function(){},incrementQuantity:function(){},decrementQuantity:function(){}});t.default=function(e){var t=e.children,n=Object(d.useContext)(f.a).token,o=Object(d.useContext)(l.a),p=o.closeModal,O=o.getMessage,j=o.setIsLoading,m=o.setShowModal,h=Object(d.useState)("select-user"),P=Object(i.a)(h,2),v=P[0],y=P[1],g=Object(d.useState)({}),k=Object(i.a)(g,2),S=k[0],x=k[1],Q=Object(d.useState)([]),w=Object(i.a)(Q,2),A=w[0],C=w[1],L=Object(d.useState)(null),M=Object(i.a)(L,2),T=M[0],D=M[1],I=function(e){console.log("combinedProductsArr"),console.log(e),console.log("combinedProductsArr"),x(Object(s.a)(Object(s.a)({},S),{},{combinedProducts:Object(a.a)(e)}))},_=function(e){y(e)},R=function(){var e=Object(u.a)(r.a.mark((function e(){var t,c,o,u,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==A.length){e.next=2;break}return e.abrupt("return");case 2:return j(!0),m(!0),console.log("ORIGINAL CART"),console.log(A),t=A.map((function(e){return Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({product:e.product.isPseudo?"pseudo":e.product._id},e.discount&&{discount:Object(s.a)({},e.discount)}),e.lens&&{lens:e.lens._id}),e.lensesQuant&&{lensesQuant:e.lensesQuant}),e.lenses&&{contactLenses:e.lenses})})),console.log("FORMATED CART"),console.log(t),(c=new Headers).append("auth-token",n),c.append("Content-Type","application/json"),o=JSON.stringify({combinedProducts:t}),u={method:"POST",headers:c,body:o,redirect:"follow"},e.prev=14,e.next=17,fetch("".concat("http://195.110.58.166:8080","/api/store/combinedProducts/createMany"),u);case 17:return a=e.sent,e.next=20,a.json();case 20:if(i=e.sent,console.log(i),!i.combinedProducts){e.next=27;break}return I(i.combinedProducts),p(),_("summary"),e.abrupt("return");case 27:j(!1),O(i.messageSK),e.next=36;break;case 31:e.prev=31,e.t0=e.catch(14),console.log(e.t0),O("Nieco sa pokazilo"),j(!1);case 36:case"end":return e.stop()}}),e,null,[[14,31]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(b.Provider,{value:{step:v,order:S,cart:A,selectedProduct:T,setOrder:x,addUser:function(e){x(Object(s.a)(Object(s.a)({},S),{},{user:e}))},addProduct:function(e){C((function(t){return[].concat(Object(a.a)(t),[{product:e}])}))},addProductDiscount:function(e,t){if(""===t){var n=A.map((function(t,n){return e===n?Object.keys(t.discount).length>1?(delete t.discount.product,t):(delete t.discount,t):t}));C(n)}else{var c=A.map((function(n,c){return e===c?Object(s.a)(Object(s.a)({},n),{},{discount:{product:{percent:t}}}):n}));C(c)}},addLensesParameters:function(e,t){var n=A.map((function(n,c){return e===c&&Object.keys(t).length>0?Object(s.a)(Object(s.a)({},n),{},{lenses:Object(s.a)({},t)}):n}));C(n)},deleteProduct:function(e){console.log(e);var t=A.filter((function(t){return t.product._id!==e.product._id}));C(t)},addLenses:function(e){if(null!==e||null!==T){if(null!==T){var t=A.map((function(t,n){return n===T?Object(s.a)(Object(s.a)({},t),{},{lens:e,lensesQuant:1}):t}));C(t)}else C((function(t){return[].concat(Object(a.a)(t),[{product:{_id:Math.floor(10*Math.random()),isPseudo:!0},lens:e,lensesQuant:1}])}));D(null)}},addLensesDiscount:function(e,t){if(""===t){var n=A.map((function(t,n){return e===n?Object.keys(t.discount).length>1?(delete t.discount.lenses,t):(delete t.discount,t):t}));C(n)}else{var c=A.map((function(n,c){return e===c?Object(s.a)(Object(s.a)({},n),{},{discount:Object(s.a)(Object(s.a)({},n.discount),{},{lenses:{percent:t}})}):n}));C(c)}},resetOrder:function(){x({})},changeStep:_,selectProduct:function(e){D(e)},createCombinedProducts:R,incrementQuantity:function(e,t){var n=A.map((function(n,c){return t===c?Object(s.a)(Object(s.a)({},n),{},{lensesQuant:e+1}):n}));C(n)},decrementQuantity:function(e,t){if(1!==e){var n=A.map((function(n,c){return t===c?Object(s.a)(Object(s.a)({},n),{},{lensesQuant:e-1}):n}));C(n)}}},children:t})}}}]);
//# sourceMappingURL=21.f9cc359a.chunk.js.map