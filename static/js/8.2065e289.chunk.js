(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[8,18],{216:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t(8),i=t(70),s=t(17),l=t(4),o=t(50),d=t(60),u=t(15),j=t(82),h=t(2),m=t(3);function b(){var e=Object(h.a)(["\n    margin-top: 2rem;\n"]);return b=function(){return e},e}function p(){var e=Object(h.a)(["\n    margin-bottom: 2rem;\n"]);return p=function(){return e},e}function f(){var e=Object(h.a)(["\n    width: 75%;\n"]);return f=function(){return e},e}function x(){var e=Object(h.a)(['\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: center;\n\n    input {\n        margin-bottom: 0 !important;\n    }\n\n    div:not(:last-child) {\n        padding-right: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns: 1fr 1fr;\n        grid-template-areas:\n            "a a"\n            "b c";\n\n        div:nth-child(1){\n            grid-area: a;\n            margin-bottom: 0;\n        }\n        div:nth-child(2){\n            grid-area: b;\n            margin-bottom: 2rem;\n\n        }\n        div:nth-child(3){\n            grid-area: c;\n            margin-bottom: 2rem;\n        }\n    }\n']);return x=function(){return e},e}function O(){var e=Object(h.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    div:not(:last-child) {\n        padding-right: 2rem;\n    }\n"]);return O=function(){return e},e}function v(){var e=Object(h.a)(["\n    input {\n        margin-bottom: 0 !important;\n    }\n"]);return v=function(){return e},e}function g(){var e=Object(h.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: start;\n\n    @media all and (max-width: 800px) {\n        grid-template-columns: 1fr;\n    }\n"]);return g=function(){return e},e}function y(){var e=Object(h.a)(["\n    /* padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */\n    margin-right: 2rem;\n\n"]);return y=function(){return e},e}var C=m.c.div(y()),k=m.c.div(g()),w=m.c.div(v()),N=m.c.div(O()),P=m.c.div(x()),U=m.c.div(f()),S=m.c.h2(p()),z=m.c.div(b()),A=function(e){var n=e.isAdmin,t=e.isUpdating,r=e.user,c=e.handleChange,i=e.handleDioptersChange,s=e.handleDistanceChange,l=e.handleCylinderChange,o=e.handleCylinderAxesChange;return Object(a.jsxs)(k,{children:[Object(a.jsxs)(C,{children:[n&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Admin panel"}),Object(a.jsx)(d.a,{label:"Predaj\u0148a na ktorej u\u017eivatel pracuje",example:"napr: 1-4",children:Object(a.jsx)(u.a,{label:"Premises*",type:"text",name:"premises",value:r.premises.toString(),handleChange:function(e){return c(e)},required:!0})}),Object(a.jsx)(d.a,{label:"V\xfd\u0161ka administrativn\xfdch pr\xe1v",example:"napr: 1-4",children:Object(a.jsx)(u.a,{label:"Admin*",type:"text",name:"admin",value:r.admin.toString(),handleChange:function(e){return c(e)},required:!0})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Inform\xe1cie"}),Object(a.jsxs)(N,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Meno*",type:"text",name:"fName",value:r.fName,handleChange:function(e){return c(e)}})}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Priezvisko*",type:"text",name:"lName",value:r.lName,handleChange:function(e){return c(e)}})})]})]}),Object(a.jsxs)(z,{children:[Object(a.jsx)("h2",{children:"Kontaktn\xe9 \xfadaje"}),Object(a.jsxs)(U,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"E-mail*",type:"email",name:"email",value:r.email,handleChange:function(e){return c(e)}})}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Telef\xf3nne \u010d\xedslo",type:"text",name:"phone",value:r.phone,handleChange:function(e){return c(e)}})})]})]}),Object(a.jsxs)(z,{children:[Object(a.jsx)("h2",{children:"Faktura\u010dn\xe9 \xfadaje"}),Object(a.jsxs)(N,{children:[Object(a.jsx)(w,{children:Object(a.jsx)(u.a,{label:"Ulica a \u010dislo domu",type:"text",name:"address",value:r.address,handleChange:function(e){return c(e)}})}),Object(a.jsx)(w,{children:Object(a.jsx)(u.a,{label:"PS\u010c",type:"text",name:"psc",value:r.psc,handleChange:function(e){return c(e)}})})]}),Object(a.jsxs)(N,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Mesto",type:"text",name:"city",value:r.city,handleChange:function(e){return c(e)}})}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Krajina",type:"text",name:"country",value:r.country,handleChange:function(e){return c(e)}})})]})]}),Object(a.jsxs)(z,{children:[Object(a.jsx)("h2",{children:"Parametre"}),Object(a.jsxs)(P,{children:[Object(a.jsx)("div",{children:"Dioptrie"}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"\u013dav\xe9 oko",type:"text",name:"city",value:r.lenses.diopters[0].toString(),handleChange:function(e){return i(e,0)}})}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Prav\xe9 oko",type:"text",name:"state",value:r.lenses.diopters[1].toString(),handleChange:function(e){return i(e,1)}})})]}),Object(a.jsxs)(P,{children:[Object(a.jsx)("div",{children:"Vzdialenos\u0165"}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"\u013dav\xe9 oko",type:"text",name:"city",value:r.lenses.distance[0].toString(),handleChange:function(e){return s(e,0)}})}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Prav\xe9 oko",type:"text",name:"state",value:r.lenses.distance[1].toString(),handleChange:function(e){return s(e,1)}})})]}),Object(a.jsxs)(P,{children:[Object(a.jsx)("div",{children:"Cylinder"}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"\u013dav\xe9 oko",type:"text",name:"city",value:r.lenses.cylinder[0].toString(),handleChange:function(e){return l(e,0)}})}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Prav\xe9 oko",type:"text",name:"state",value:r.lenses.cylinder[1].toString(),handleChange:function(e){return l(e,1)}})})]}),Object(a.jsxs)(P,{children:[Object(a.jsx)("div",{children:"Os cylindrov"}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"\u013dav\xe9 oko",type:"text",name:"city",value:r.lenses.cylinderAxes[0].toString(),handleChange:function(e){return o(e,0)}})}),Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{label:"Prav\xe9 oko",type:"text",name:"state",value:r.lenses.cylinderAxes[1].toString(),handleChange:function(e){return o(e,1)}})})]})]})]}),t&&Object(a.jsxs)("div",{children:[Object(a.jsx)(S,{children:"Objedn\xe1vky"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(j.a,{name:"Product name",id:"[Product ID]",date:"28. November 2020",totalPrice:"99.99"}),Object(a.jsx)(j.a,{name:"Product name",id:"[Product ID]",date:"28. November 2020",totalPrice:"99.99"}),Object(a.jsx)(j.a,{name:"Product name",id:"[Product ID]",date:"28. November 2020",totalPrice:"99.99"})]})]})]})},D=t(83),I=function(e){var n=e.formToShow,t=e.switchFormButtons,r=e.toggleUserForm,c=e.user,i=e.handleChange;return Object(a.jsxs)("div",{children:[Object(a.jsx)(D.a,{items:t,title:"Ak\xe9ho u\u017eivatela chcete vytvori\u0165?",activeIndex:n,handleClick:r}),0===n?Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Inform\xe1cie"}),Object(a.jsx)(d.a,{label:"",example:"napr: John",children:Object(a.jsx)(u.a,{label:"Meno*",type:"text",name:"fName",value:c.fName,handleChange:function(e){return i(e)}})}),Object(a.jsx)(d.a,{label:"",example:"napr: Doe",children:Object(a.jsx)(u.a,{label:"Priezvisko*",type:"text",name:"lName",value:c.lName,handleChange:function(e){return i(e)}})}),Object(a.jsx)(d.a,{label:"",example:"napr: priklad@email.com",children:Object(a.jsx)(u.a,{label:"E-mail*",type:"email",name:"email",value:c.email,handleChange:function(e){return i(e)}})})]})}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Admin panel"}),Object(a.jsx)(d.a,{label:"Predaj\u0148a na ktorej u\u017eivatel pracuje",example:"napr: 1-4",children:Object(a.jsx)(u.a,{label:"Premises*",type:"text",name:"premises",value:c.premises.toString(),handleChange:function(e){return i(e)},required:!0})}),Object(a.jsx)(d.a,{label:"V\xfd\u0161ka administrativn\xfdch pr\xe1v",example:"napr: 1-4",children:Object(a.jsx)(u.a,{label:"Admin*",type:"text",name:"admin",value:c.admin.toString(),handleChange:function(e){return i(e)},required:!0})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Inform\xe1cie"}),Object(a.jsx)(d.a,{label:"",example:"napr: John",children:Object(a.jsx)(u.a,{label:"Meno*",type:"text",name:"fName",value:c.fName,handleChange:function(e){return i(e)}})}),Object(a.jsx)(d.a,{label:"",example:"napr: Doe",children:Object(a.jsx)(u.a,{label:"Priezvisko*",type:"text",name:"lName",value:c.lName,handleChange:function(e){return i(e)}})}),Object(a.jsx)(d.a,{label:"",example:"napr: priklad@email.com",children:Object(a.jsx)(u.a,{label:"E-mail*",type:"email",name:"email",value:c.email,handleChange:function(e){return i(e)}})}),Object(a.jsx)(d.a,{label:"Heslo pou\u017eivatela, aspo\u0148 1 velk\xe9 pismeno, 1 mal\xe9 pismeno a 1 \u010d\xedslo*",example:"",children:Object(a.jsx)(u.a,{label:"Heslo*",type:"password",name:"password",value:c.password,handleChange:function(e){return i(e)}})}),Object(a.jsx)(d.a,{label:"",example:"",children:Object(a.jsx)(u.a,{label:"Potvr\u010f heslo*",type:"password",name:"confirmPassword",value:c.confirmPassword,handleChange:function(e){return i(e)}})})]})]})]})},T=t(13),F=t(14),M=t(31);function E(){var e=Object(h.a)(["\n    margin-left: 2rem;\n    font-size: 1.4rem;\n"]);return E=function(){return e},e}function H(){var e=Object(h.a)(["\n    background-color: #DD4C4C;\n    font-size: 1.4rem;\n"]);return H=function(){return e},e}function J(){var e=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n"]);return J=function(){return e},e}var V=m.c.div(J(),M.b),B=Object(m.c)(F.a)(H()),q=Object(m.c)(F.a)(E());n.default=function(){var e=Object(l.h)().id,n=Object(r.useContext)(c.a).isAdmin,t=Object(r.useContext)(s.a),d=t.closeModal,u=t.isLoading,j=t.message,h=t.showModal,m=Object(r.useContext)(i.UserContext),b=m.isUpdating,p=m.user,f=m.getUser,x=m.handleChange,O=m.handleDioptersChange,v=m.handleDistanceChange,g=m.handleCylinderChange,y=m.handleCylinderAxesChange,C=m.updateUser,k=m.resetUser,w=m.formToShow,N=m.switchFormButtons,P=m.toggleUserForm,U=m.createUser;return Object(r.useEffect)((function(){"novy-zakaznik"!==e&&f(e)}),[e]),Object(r.useEffect)((function(){return function(){console.log("UNMOUNT"),k()}}),[]),Object(a.jsxs)("section",{children:[h&&Object(a.jsx)(T.a,{loading:u,title:j,close:d}),Object(a.jsxs)("form",{onSubmit:function(n){n.preventDefault(),"novy-zakaznik"===e?(console.log("Create new user"),U(p)):(console.log("Update existing user"),C(p))},children:[Object(a.jsxs)(V,{children:[Object(a.jsx)("h1",{children:"Profil"}),Object(a.jsxs)("div",{children:[b&&Object(a.jsx)(B,{children:"Vymaza\u0165"}),Object(a.jsx)(q,{type:"submit",children:b?"Ulo\u017ei\u0165 zmeny":"Vytvori\u0165"})]})]}),Object(a.jsx)(o.a,{children:b?Object(a.jsx)(A,{isAdmin:n,isUpdating:b,user:p,handleChange:x,handleDioptersChange:O,handleDistanceChange:v,handleCylinderChange:g,handleCylinderAxesChange:y}):Object(a.jsx)(I,{formToShow:w,switchFormButtons:N,toggleUserForm:P,user:p,handleChange:x})})]})]})}},50:function(e,n,t){"use strict";var a=t(1),r=(t(0),t(2)),c=t(3),i=t(31);function s(){var e=Object(r.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return s=function(){return e},e}var l=c.c.div(s(),i.b);n.a=function(e){var n=e.children;return Object(a.jsx)(l,{children:n})}},60:function(e,n,t){"use strict";var a=t(19),r=t(1),c=t(23),i=(t(0),t(2));function s(){var e=Object(i.a)(["\n    display:flex;\n    align-items: center;\n\n    p {\n        margin-top: 1.8rem;\n        margin-left: 2rem;\n            opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n    @media all and (max-width: 800px) {\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n    }\n"]);return s=function(){return e},e}var l=t(3).c.div(s());n.a=function(e){var n=e.children,t=e.label,i=e.example,s=Object(c.a)(e,["children","label","example"]);return Object(r.jsxs)(l,Object(a.a)(Object(a.a)({},s),{},{children:[Object(r.jsx)("div",{children:n}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[t+" ",Object(r.jsx)("span",{children:i})]})})]}))}},70:function(e,n,t){"use strict";t.r(n),t.d(n,"UserContext",(function(){return v}));var a=t(1),r=t(7),c=t.n(r),i=t(12),s=t(32),l=t(19),o=t(5),d=t(0),u=t(4),j=t(8),h=t(17),m=function(e){var n=new Headers;n.append("auth-token",e);var t={method:"GET",headers:n,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users"),t)},b=function(e,n){var t=new Headers;t.append("auth-token",e),t.append("Content-Type","application/json");var a={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(n),a)},p=function(e,n){var t=n._id,a=n.address,r=n.admin,c=n.city,i=n.country,s=n.email,l=n.lenses,o=l.cylinder,d=l.cylinderAxes,u=l.diopters,j=l.distance,h=n.name,m=n.phone,b=n.psc,p=n.premises,f=new Headers;f.append("auth-token",e);var x={method:"PATCH",headers:f,body:JSON.stringify({address:a||" ",admin:r,premises:p,city:c||" ",country:i||" ",email:s,lenses:{cylinder:o,cylinderAxes:d,diopters:u,distance:j},name:h,phone:m||" ",psc:b||" "}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(t),x)},f=function(e,n){console.log(n);var t=n.name,a=n.email,r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var c={method:"POST",headers:r,body:JSON.stringify({email:a,name:t}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),c)},x=function(e,n){console.log(n);var t=n.name,a=n.email,r=n.password,c=n.premises,i=n.admin,s=new Headers;s.append("auth-token",e),s.append("Content-Type","application/json");var l={method:"POST",headers:s,body:JSON.stringify({admin:i,email:a,name:t,premises:c,password:r}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),l)},O={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,lenses:{cylinder:[0,0],cylinderAxes:[0,0],diopters:[0,0],distance:[0,0]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:""},v=Object(d.createContext)({isUpdating:!1,activeIndex:0,handleChangeFilterItem:function(){},filterItems:[],totalCount:0,users:null,user:null,getUsers:function(){},getUser:function(){},handleChange:function(){},handleDioptersChange:function(){},handleDistanceChange:function(){},handleCylinderChange:function(){},handleCylinderAxesChange:function(){},updateUser:function(){},resetUser:function(){},formToShow:0,switchFormButtons:[],toggleUserForm:function(){},createUser:function(){}});n.default=function(e){var n=e.children,t=Object(u.g)().push,r=Object(d.useContext)(j.a).token,g=Object(d.useContext)(h.a),y=g.closeModal,C=g.getMessage,k=g.setIsLoading,w=g.setShowModal,N=Object(d.useState)(O),P=Object(o.a)(N,2),U=P[0],S=P[1],z=Object(d.useState)(null),A=Object(o.a)(z,2),D=A[0],I=A[1],T=Object(d.useState)(0),F=Object(o.a)(T,2),M=F[0],E=F[1],H=Object(d.useState)(!1),J=Object(o.a)(H,2),V=J[0],B=J[1],q=Object(d.useState)(0),Z=Object(o.a)(q,2),L=Z[0],G=Z[1],K=Object(d.useState)(0),R=Object(o.a)(K,2),_=R[0],Q=R[1];Object(d.useEffect)((function(){S(Object(l.a)(Object(l.a)({},U),{},{name:U.fName+" "+U.lName}))}),[U.fName,U.lName]);var W=function(){var e=Object(i.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),e.prev=2,e.next=5,m(r);case 5:return n=e.sent,e.next=8,n.json();case 8:t=e.sent,console.log(t),t.users?(I(t.users),E(t.count),k(!1),y()):(C(t.message),k(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),C("Nieco sa pokazilo"),k(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),B(!0),e.prev=3,e.next=6,b(r,n);case 6:return t=e.sent,e.next=9,t.json();case 9:(a=e.sent).user?(S(Object(l.a)(Object(l.a)(Object(l.a)({},U),a.user),{},{lenses:{cylinder:a.user.lenses.cylinder.length?a.user.lenses.cylinder:[0,0],cylinderAxes:a.user.lenses.cylinderAxes.length?a.user.lenses.cylinderAxes:[0,0],diopters:a.user.lenses.diopters.length?a.user.lenses.diopters:[0,0],distance:a.user.lenses.distance.length?a.user.lenses.distance:[0,0]},fName:a.user.name?a.user.name.split(" ")[0]:"",lName:a.user.name?a.user.name.split(" ")[1]:""})),k(!1),y()):(C(a.message),k(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),C("Nieco sa pokazilo"),k(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(i.a)(c.a.mark((function e(n){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(n),e.prev=3,e.next=6,p(r,n);case 6:return a=e.sent,e.next=9,a.json();case 9:i=e.sent,console.log(i),i.error&&(k(!1),C(i.message)),k(!1),y(),t("/dashboard/zakaznici"),W(),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0),C("Nieco sa pokazilo"),k(!1);case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(n){return e.apply(this,arguments)}}(),$=function(){var e=Object(i.a)(c.a.mark((function e(n){var a,i,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),w(!0),e.prev=2,0!==_){e.next=21;break}return e.next=6,f(r,n);case 6:return a=e.sent,e.next=9,a.json();case 9:if(i=e.sent,console.log(i),!i.error){e.next=15;break}return C(i.message),k(!1),e.abrupt("return");case 15:k(!1),W(),t("/dashboard/zakaznici"),y(),e.next=36;break;case 21:return e.next=23,x(r,n);case 23:return s=e.sent,e.next=26,s.json();case 26:if(l=e.sent,console.log(l),!l.error){e.next=32;break}return C(l.message),k(!1),e.abrupt("return");case 32:k(!1),W(),t("/dashboard/zakaznici"),y();case 36:e.next=43;break;case 38:e.prev=38,e.t0=e.catch(2),console.log(e.t0),C("Nieco sa pokazilo"),k(!1);case 43:case"end":return e.stop()}}),e,null,[[2,38]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.jsx)(v.Provider,{value:{isUpdating:V,activeIndex:L,handleChangeFilterItem:function(e){G(e)},filterItems:[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci 1",filter:1},{id:2,name:"Zamestnanci 2",filter:2},{id:3,name:"Admin 3",filter:3}],users:D,user:U,totalCount:M,getUsers:W,getUser:X,handleChange:function(e){var n=e.target,t=n.name,a=n.value;S(Object(l.a)(Object(l.a)({},U),{},Object(s.a)({},t,a)))},handleDioptersChange:function(e,n){var t=U.lenses.diopters;t[n]=Number(e.target.value),S(Object(l.a)(Object(l.a)({},U),{},{lenses:Object(l.a)(Object(l.a)({},U.lenses),{},{diopters:t})}))},handleDistanceChange:function(e,n){var t=U.lenses.distance;t[n]=Number(e.target.value),S(Object(l.a)(Object(l.a)({},U),{},{lenses:Object(l.a)(Object(l.a)({},U.lenses),{},{distance:t})}))},handleCylinderChange:function(e,n){var t=U.lenses.cylinder;t[n]=Number(e.target.value),S(Object(l.a)(Object(l.a)({},U),{},{lenses:Object(l.a)(Object(l.a)({},U.lenses),{},{cylinder:t})}))},handleCylinderAxesChange:function(e,n){var t=U.lenses.cylinderAxes;t[n]=Number(e.target.value),S(Object(l.a)(Object(l.a)({},U),{},{lenses:Object(l.a)(Object(l.a)({},U.lenses),{},{cylinderAxes:t})}))},updateUser:Y,resetUser:function(){S(Object(l.a)({},O)),B(!1),Q(0)},formToShow:_,switchFormButtons:[{name:"Z\xe1kazn\xedk"},{name:"Admin"}],toggleUserForm:function(e,n){e.preventDefault(),Q(n)},createUser:$},children:n})}},82:function(e,n,t){"use strict";var a=t(1),r=(t(0),t(2)),c=t(3),i=t(14);function s(){var e=Object(r.a)(["\n    font-size: 1.4rem;\n    background-color: rgb(235, 172, 1);\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n"]);return l=function(){return e},e}function o(){var e=Object(r.a)(["\n    align-self: end;\n    justify-self: end;\n"]);return o=function(){return e},e}function d(){var e=Object(r.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return d=function(){return e},e}function u(){var e=Object(r.a)(["\n    font-size: 1.4rem;\n    /* font-weight: 700; */\n    color: gray;\n    margin-bottom: 2rem;\n"]);return u=function(){return e},e}function j(){var e=Object(r.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return j=function(){return e},e}function h(){var e=Object(r.a)(["\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return h=function(){return e},e}function m(){var e=Object(r.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 25rem;\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns: 1fr;\n\n    }\n"]);return m=function(){return e},e}var b=c.c.div(m()),p=c.c.div(h()),f=c.c.p(j()),x=c.c.p(u()),O=c.c.p(d()),v=c.c.div(o()),g=Object(c.c)(i.a)(l()),y=Object(c.c)(i.a)(s());n.a=function(e){var n=e.name,t=e.id,r=e.date,c=e.totalPrice;return Object(a.jsxs)(b,{children:[Object(a.jsxs)(p,{children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)(f,{children:t}),Object(a.jsx)(x,{children:r}),Object(a.jsxs)(O,{children:[c,"\u20ac"]})]}),Object(a.jsxs)(v,{children:[Object(a.jsx)(g,{children:"Upravi\u0165"}),Object(a.jsx)(y,{children:"Vymaza\u0165"})]})]})}},83:function(e,n,t){"use strict";var a=t(1),r=t(0),c=t.n(r),i=t(2),s=t(3),l=t(14);function o(){var e=Object(i.a)(["\n    background-color: ",";\n    font-weight: 700;\n"]);return o=function(){return e},e}function d(){var e=Object(i.a)(["\n    display: flex;\n    width: 25rem;\n    justify-content: space-between;\n    margin: 2rem auto;\n"]);return d=function(){return e},e}function u(){var e=Object(i.a)(["\n    margin-top: 2rem;\n    /* margin-bottom: 2rem; */\n"]);return u=function(){return e},e}var j=s.c.h3(u()),h=s.c.div(d()),m=Object(s.c)(l.a)(o(),(function(e){return e.isActive?"rgb(235, 172, 1)":"#000"}));n.a=function(e){var n=e.title,t=e.activeIndex,r=e.handleClick,i=e.items;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(j,{children:n}),Object(a.jsx)(h,{children:i.map((function(e,n){return Object(a.jsx)(m,{isActive:t===n,onClick:function(e){return r(e,n)},children:e.name},n)}))})]})}}}]);
//# sourceMappingURL=8.2065e289.chunk.js.map