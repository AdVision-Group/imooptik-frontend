(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[21],{55:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(22);var o=n(33);function r(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},68:function(e,t,n){"use strict";n.r(t),n.d(t,"OrderContext",(function(){return b}));var c=n(2),o=n(7),r=n.n(o),s=n(12),a=n(55),u=n(21),i=n(10),d=n(1),l=n(18),f=n(19),b=Object(d.createContext)({step:"",order:{},cart:[],selectedProduct:null,setOrder:function(){},addUser:function(){},addProduct:function(){},addProductDiscount:function(){},addLensesParameters:function(){},deleteProduct:function(){},addLenses:function(){},addLensesDiscount:function(){},resetOrder:function(){},changeStep:function(){},selectProduct:function(){},createCombinedProducts:function(){}});t.default=function(e){var t=e.children,n=Object(d.useContext)(f.a).token,o=Object(d.useContext)(l.a),O=(o.closeModal,o.getMessage),p=o.setIsLoading,j=o.setShowModal,m=Object(d.useState)("select-user"),h=Object(i.a)(m,2),v=h[0],g=h[1],P=Object(d.useState)({}),y=Object(i.a)(P,2),S=y[0],k=y[1],w=Object(d.useState)([]),x=Object(i.a)(w,2),L=x[0],C=x[1],A=Object(d.useState)(null),D=Object(i.a)(A,2),I=D[0],M=D[1],T=function(){var e=Object(s.a)(r.a.mark((function e(){var t,c,o,s,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),j(!0),console.log("ORIGINAL CART"),console.log(L),t=L.map((function(e){return Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({product:e.product._id},e.discount&&{discount:Object(u.a)({},e.discount)}),e.lens&&{lens:e.lens._id}),e.lens&&{lenses:S.user.lenses}),e.lenses&&{contactLenses:e.lenses})})),console.log("FORMATED CART"),console.log(t),(c=new Headers).append("auth-token",n),o=JSON.stringify(t),s={method:"POST",headers:c,body:o,redirect:"follow"},e.prev=11,e.next=14,fetch("".concat("http://195.110.58.166:8080","/api/store/combinedProducts/createMany"),s);case 14:return a=e.sent,e.next=17,a.json();case 17:i=e.sent,console.log(i),p(!1),O(i.messageSK),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(11),console.log(e.t0),O("Nieco sa pokazilo"),p(!1);case 28:case"end":return e.stop()}}),e,null,[[11,23]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(b.Provider,{value:{step:v,order:S,cart:L,selectedProduct:I,setOrder:k,addUser:function(e){k(Object(u.a)(Object(u.a)({},S),{},{user:e}))},addProduct:function(e){C((function(t){return[].concat(Object(a.a)(t),[{product:e}])}))},addProductDiscount:function(e,t){if(""===t){var n=L.map((function(t,n){return e===n?Object.keys(t.discount).length>1?(delete t.discount.product,t):(delete t.discount,t):t}));C(n)}else{var c=L.map((function(n,c){return e===c?Object(u.a)(Object(u.a)({},n),{},{discount:{product:t}}):n}));C(c)}},addLensesParameters:function(e,t){var n=L.map((function(n,c){return e===c&&Object.keys(t).length>0?Object(u.a)(Object(u.a)({},n),{},{lenses:Object(u.a)({},t)}):n}));C(n)},deleteProduct:function(e){console.log(e);var t=L.filter((function(t){return t.product._id!==e.product._id}));C(t)},addLenses:function(e){if(null!==I){var t=L.map((function(t,n){return n===I?Object(u.a)(Object(u.a)({},t),{},{lens:e}):t}));C(t)}else C((function(t){return[].concat(Object(a.a)(t),[{product:{_id:"pseudo"},lens:e}])}));M(null)},addLensesDiscount:function(e,t){if(""===t){var n=L.map((function(t,n){return e===n?Object.keys(t.discount).length>1?(delete t.discount.lenses,t):(delete t.discount,t):t}));C(n)}else{var c=L.map((function(n,c){return e===c?Object(u.a)(Object(u.a)({},n),{},{discount:Object(u.a)(Object(u.a)({},n.discount),{},{lenses:t})}):n}));C(c)}},resetOrder:function(){k({})},changeStep:function(e){g(e)},selectProduct:function(e){M(e)},createCombinedProducts:T},children:t})}}}]);
//# sourceMappingURL=21.95dce179.chunk.js.map