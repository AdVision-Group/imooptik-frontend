(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[1,31],{52:function(e,n,t){"use strict";var r=t(2),a=t(21),i=t(30),o=(t(1),t(5)),c=t(6);function s(){var e=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return e},e}function u(){var e=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return u=function(){return e},e}var l=Object(c.b)(u()),d=c.c.div(s(),l,l);n.a=function(e){var n=e.handleChange,t=e.label,o=e.name,c=Object(i.a)(e,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:o,onChange:n},c)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(c.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return l}));var r=t(7),a=t.n(r),i=t(12),o=t(10),c=t(1),s=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(c.useState)(null),r=Object(o.a)(t,2),s=r[0],u=r[1],l=Object(c.useState)(null),d=Object(o.a)(l,2),p=d[0],b=d[1],m=Object(c.useState)(null),f=Object(o.a)(m,2),h=f[0],j=f[1],v=Object(c.useState)(!0),O=Object(o.a)(v,2),g=O[0],x=O[1],y=Object(c.useState)(0),k=Object(o.a)(y,2),w=k[0],C=k[1],N=function(){return C((function(e){return e+1}))};return Object(c.useEffect)((function(){(function(){var t=Object(i.a)(a.a.mark((function t(){var r,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,fetch("".concat("http://195.110.58.166:8080","/").concat(e));case 5:return r=t.sent,t.next=8,r.json();case 8:i=t.sent,j(i.message),u(i),x(!1),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(2),b(t.t0),x(!1),j("Nie\u010do sa pokazilo");case 19:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(){return t.apply(this,arguments)}})()()}),[w]),{response:s,isLoading:g,error:p,message:h,refetch:N}},u=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(c.useState)(null),s=Object(o.a)(r,2),u=s[0],l=s[1],d=Object(c.useState)(null),p=Object(o.a)(d,2),b=p[0],m=p[1],f=Object(c.useState)(!0),h=Object(o.a)(f,2),j=h[0],v=h[1],O=Object(c.useState)(0),g=Object(o.a)(O,2),x=g[0],y=g[1],k=function(){return y((function(e){return e+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var C=JSON.stringify(n),N={method:"POST",headers:w,body:C,redirect:"follow"};return Object(c.useEffect)((function(){(function(){var n=Object(i.a)(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return");case 2:return v(!0),n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(e),N);case 6:return r=n.sent,n.next=9,r.json();case 9:i=n.sent,l(i),v(!1),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(3),m(n.t0),v(!1);case 18:case"end":return n.stop()}}),n,null,[[3,14]])})));return function(){return n.apply(this,arguments)}})()()}),[x,e]),{response:u,isLoading:j,error:b,refetch:k}},l=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(c.useState)(null),s=Object(o.a)(r,2),u=s[0],l=s[1],d=Object(c.useState)(null),p=Object(o.a)(d,2),b=p[0],m=p[1],f=Object(c.useState)(!0),h=Object(o.a)(f,2),j=h[0],v=h[1],O=Object(c.useState)(0),g=Object(o.a)(O,2),x=g[0],y=g[1],k=function(){return y((function(e){return e+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtkn")),w.append("Content-Type","application/json");var C={method:"GET",headers:w,redirect:"follow"};return Object(c.useEffect)((function(){(function(){var r=Object(i.a)(a.a.mark((function r(){var i,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return v(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(e,"/").concat(n),C);case 6:return i=r.sent,r.next=9,i.json();case 9:o=r.sent,l(o),v(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),m(r.t0),v(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[x,e,n]),{response:u,isLoading:j,error:b,refetch:k}}},54:function(e,n,t){"use strict";var r=t(2),a=(t(1),t(5)),i=t(6),o=t(14);function c(){var e=Object(a.a)(["\n    /* max-width: 115rem; */\n"]);return c=function(){return e},e}function s(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return s=function(){return e},e}var u=i.c.div(s(),o.e),l=i.c.div(c());n.a=function(e){var n=e.children;return Object(r.jsx)(u,{children:Object(r.jsx)(l,{children:n})})}},56:function(e,n,t){"use strict";var r=t(21),a=t(2),i=t(30),o=(t(1),t(5));function c(){var e=Object(o.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    /* font-weight: ","; */\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return c=function(){return e},e}var s=t(6).c.div(c(),(function(e){return e.isActive?"var(--primary-color)":"var(--body-background-primary-color)"}),(function(e){return e.isActive?"var(--button-font-color)":"var(--secondary-text-color)"}),(function(e){return e.isActive?"border":"normal"}));n.a=function(e){var n=e.label,t=e.isActive,o=e.handleClick,c=Object(i.a)(e,["label","isActive","handleClick"]);return Object(a.jsx)(s,Object(r.a)(Object(r.a)({isActive:t,onClick:o},c),{},{children:n}))}},61:function(e,n,t){"use strict";t.d(n,"k",(function(){return r})),t.d(n,"i",(function(){return a})),t.d(n,"h",(function(){return i})),t.d(n,"j",(function(){return o})),t.d(n,"n",(function(){return c})),t.d(n,"m",(function(){return s})),t.d(n,"l",(function(){return u})),t.d(n,"a",(function(){return l})),t.d(n,"f",(function(){return d})),t.d(n,"g",(function(){return p})),t.d(n,"d",(function(){return b})),t.d(n,"b",(function(){return m})),t.d(n,"c",(function(){return h})),t.d(n,"e",(function(){return j}));var r={name:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[1001,1001,1001,1001,0],eanCode:"",image:"",eshop:!0,link:"",category:""},a={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"M",size:[1001,1001,1001]}},i={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},o={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:""},c=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],s=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"\u0160o\u0161ovky",value:0}],u=[{id:0,name:"V\u0161etko",premises:0},{id:1,name:"Obchodn\xe1 57, Bratislava",premises:1},{id:2,name:"Mileti\u010dova 38, Bratislava",premises:2},{id:3,name:"Vajnory, Bratislava",premises:3},{id:4,name:"Senica, OC Bran\u010d",premises:4}],l=[{id:0,name:"Okuliare"},{id:1,name:"\u0160osovky"}],d=function(e){var n=0;return e.includes(",")?1===e.split(",")[1].length?(n=e.split(",")[0]+e.split(",")[1]+"0",Number(n)):(n=e.split(",")[0]+e.split(",")[1],Number(n)):Number(100*e)},p=function(e){var n=0;return e.includes(",")?(n=e.split(",")[0]+"."+e.split(",")[1],Number(n)):Number(e)},b=function(e,n){return void 0===e?"\u0160osovka":(console.log(n),console.log(e),"number"===typeof e?"Na sklade ".concat(e," kusov"):0===n?"Vo v\u0161etk\xfdch skladoch je ".concat(e.reduce((function(e,n){return e+n}))," kusov"):"Na sklade ".concat(e[n-1]," kusov"))},m=function(e,n){return 0===e.length||1001===e[n]?"":e[n].toString()},f="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",h=function(e){for(var n="",t=0;t<e.length;t++)-1!=f.indexOf(e.charAt(t))?n+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(f.indexOf(e.charAt(t))):n+=e.charAt(t);return n},j=function(e){return h(e).replaceAll(" ","-").toLowerCase().trim()}},96:function(e,n,t){"use strict";t.r(n),t.d(n,"UserContext",(function(){return O}));var r=t(2),a=t(7),i=t.n(a),o=t(12),c=t(31),s=t(21),u=t(10),l=t(1),d=t(3),p=t(19),b=t(18),m=function(e,n){var t=new Headers;t.append("auth-token",e),t.append("Content-Type","application/json");var r={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(n),r)},f=function(e,n,t){var r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var a={method:"PATCH",headers:r,body:JSON.stringify(Object(s.a)({},n)),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(t),a)},h=function(e,n){var t=n.name,r=n.email,a=new Headers;a.append("auth-token",e),a.append("Content-Type","application/json");var i={method:"POST",headers:a,body:JSON.stringify({email:r,name:t}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),i)},j=function(e,n){console.log(n);var t=n.name,r=n.email,a=n.password,i=n.premises,o=n.admin,c=new Headers;c.append("auth-token",e),c.append("Content-Type","application/json");var s={method:"POST",headers:c,body:JSON.stringify({admin:Number(o),email:r,name:t,premises:Number(i),password:a}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),s)},v={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,company:{ico:"",dic:"",icdph:"",address:"",psc:"",country:""},lenses:{cylinder:[1001,1001,1001,1001],cylinderAxes:[1001,1001,1001,1001],diopters:[1001,1001,1001,1001],distance:[1001,1001,1001,1001],addition:[1001,1001,1001,1001],basis:[1001,1001,1001,1001],prism:[1001,1001,1001,1001]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:"",birthDate:Date.now(),optometrist:!1},O=Object(l.createContext)({isUpdating:!1,activeIndex:0,handleChangeFilterItem:function(){},filterItems:[],totalCount:0,users:null,user:null,getUser:function(){},handleChange:function(){},handleParameterChange:function(){},handleCompanyChange:function(){},updateUser:function(){},resetUser:function(){},formToShow:0,switchFormButtons:[],toggleUserForm:function(){},createUser:function(){},getFilteredUsers:function(){},getUserByQuery:function(){}});n.default=function(e){var n=e.children,t=Object(d.h)().push,a=Object(l.useContext)(p.a).token,g=Object(l.useContext)(b.a),x=g.closeModal,y=g.getMessage,k=g.setIsLoading,w=g.setShowModal,C=Object(l.useState)(v),N=Object(u.a)(C,2),S=N[0],z=N[1],A=Object(l.useState)(null),T=Object(u.a)(A,2),U=T[0],P=T[1],B=Object(l.useState)(0),F=Object(u.a)(B,2),H=F[0],I=(F[1],Object(l.useState)(!1)),E=Object(u.a)(I,2),D=E[0],J=E[1],L=Object(l.useState)(0),M=Object(u.a)(L,2),V=M[0],Z=M[1],_=Object(l.useState)(0),R=Object(u.a)(_,2),G=R[0],Q=R[1];Object(l.useEffect)((function(){z(Object(s.a)(Object(s.a)({},S),{},{name:S.fName+" "+S.lName}))}),[S.fName,S.lName]);var K=function(){var e=Object(o.a)(i.a.mark((function e(n){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),J(!0),e.prev=3,e.next=6,m(a,n);case 6:return t=e.sent,e.next=9,t.json();case 9:(r=e.sent).user?(z(Object(s.a)(Object(s.a)(Object(s.a)({},S),r.user),{},{fName:r.user.name?r.user.name.split(" ")[0]:"",lName:r.user.name?r.user.name.split(" ")[1]:""})),k(!1),x()):(y(r.message),k(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(o.a)(i.a.mark((function e(n,r,o){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(n),e.prev=3,e.next=6,f(a,n,r);case 6:return c=e.sent,e.next=9,c.json();case 9:if(s=e.sent,console.log(s),!s.error){e.next=19;break}return y(s.message),"low-privileges"===s.error&&y("Nem\xf4\u017ee\u0161 upravova\u0165 u\u017e\xedvate\u013eov s v\xe4\u010d\u0161\xedmi alebo rovnak\xfdmi pr\xe1vami ako m\xe1\u0161 ty"),"format"===s.error&&y("Chyba form\xe1tovania: "+s.message),"format"===s.error&&s.message.includes("lenses.cylinderAxes")&&y("Osa mus\xed byt v\xe4\u010d\u0161ia alebo rovn\xe1 0"),"phone-exists"===s.error&&y("Telef\xf3nne \u010d\xedslo u\u017e v datab\xe1zy existuje"),k(!1),e.abrupt("return");case 19:k(!1),x(),t("order"===o?"/dashboard/objednavky/".concat(r):"profile"===o?"/dashboard/zakaznici/".concat(r):"/dashboard/zakaznici"),X({filters:{admin:V}}),e.next=30;break;case 25:e.prev=25,e.t0=e.catch(3),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 30:case"end":return e.stop()}}),e,null,[[3,25]])})));return function(n,t,r){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(i.a.mark((function e(n,r){var o,c,u,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),w(!0),e.prev=2,0!==G){e.next=24;break}if(o={},n._id){e.next=20;break}return console.log("creating new user"),e.next=9,h(a,n);case 9:return c=e.sent,e.next=12,c.json();case 12:if(!(o=e.sent).error){e.next=19;break}return y(o.message),"email"===o.type&&y("Email existuje"),"format"===o.error&&o.message.includes("email")&&y("Email musi byt platny email"),k(!1),e.abrupt("return");case 19:z(Object(s.a)(Object(s.a)({},o.user),{},{_id:o.user._id}));case 20:u=o.user?o.user._id:n._id,Y(Object(s.a)({},n),u,r),e.next=43;break;case 24:if(n.password===n.confirmPassword){e.next=28;break}return y("Hesl\xe1 sa nezhoduj\xfa"),k(!1),e.abrupt("return");case 28:return e.next=30,j(a,n);case 30:return l=e.sent,e.next=33,l.json();case 33:if(d=e.sent,console.log(d),!d.error){e.next=39;break}return y(d.message),k(!1),e.abrupt("return");case 39:k(!1),X({filters:{admin:V}}),t("/dashboard/zakaznici"),x();case 43:e.next=50;break;case 45:e.prev=45,e.t0=e.catch(2),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 50:case"end":return e.stop()}}),e,null,[[2,45]])})));return function(n,t){return e.apply(this,arguments)}}(),W=new Headers;W.append("auth-token",a),W.append("Content-Type","application/json");var X=function(){var e=Object(o.a)(i.a.mark((function e(n){var t,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(n),t=JSON.stringify(n),r={method:"POST",headers:W,body:t,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),r);case 8:return a=e.sent,e.next=11,a.json();case 11:if(o=e.sent,console.log(o),!o.users){e.next=17;break}return P(o.users),x(),e.abrupt("return");case 17:y(o.message),k(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(n){return e.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(i.a.mark((function e(n){var t,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(n),t=JSON.stringify(n),r={method:"POST",headers:W,body:t,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),r);case 8:return a=e.sent,e.next=11,a.json();case 11:if(o=e.sent,console.log(o),!o.users){e.next=17;break}return P(o.users),x(),e.abrupt("return");case 17:y(o.message),k(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(n){return e.apply(this,arguments)}}();return Object(r.jsx)(O.Provider,{value:{isUpdating:D,activeIndex:V,handleChangeFilterItem:function(e){Z(e)},filterItems:[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2}],users:U,user:S,totalCount:H,getUser:K,handleChange:function(e){var n=e.target,t=n.name,r=n.value;console.log(t,r),z(Object(s.a)(Object(s.a)({},S),{},Object(c.a)({},t,r)))},handleParameterChange:function(e,n){var t=e.target,r=t.name,a=t.value,i=S.lenses[r];i[n]=""===a?1001:a,z(Object(s.a)(Object(s.a)({},S),{},{lenses:Object(s.a)(Object(s.a)({},S.lenses),{},Object(c.a)({},r,i))}))},handleCompanyChange:function(e){var n=e.target,t=n.name,r=n.value;z(Object(s.a)(Object(s.a)({},S),{},{company:Object(s.a)(Object(s.a)({},S.company),{},Object(c.a)({},t,r))}))},updateUser:Y,resetUser:function(){z(v),J(!1),Q(0)},formToShow:G,switchFormButtons:[{name:"Z\xe1kazn\xedk"},{name:"Zamestnanec"}],toggleUserForm:function(e,n){e.preventDefault(),Q(n)},createUser:q,getFilteredUsers:X,getUserByQuery:$},children:n})}},97:function(e,n,t){"use strict";var r=t(55),a=t(2),i=t(1),o=t(5),c=t(6);function s(){var e=Object(o.a)(["\n        text-align:center;\n        align-self: center;\n        margin-left: .5rem;\n\n\n        &:nth-child(1) {\n            align-self: center;\n        }\n\n        input {\n            display:block;\n            width: 100%;\n            border: none;\n            padding: 1rem .5rem;\n            text-align: center;\n            font-family: inherit;\n            font-size: inherit;\n            background-color: var(--input-background-color);\n            color: var(--input-color);\n            border-radius: .5rem;\n            outline: none;\n\n            &:focus {\n                outline: none;\n            }\n        }\n\n        input[type=number]::-webkit-inner-spin-button, \n        input[type=number]::-webkit-outer-spin-button {  \n            display:none;\n            opacity: 0;\n\n        }\n"]);return s=function(){return e},e}function u(){var e=Object(o.a)(["\n    display: grid;\n    grid-template-rows: repeat(4, 5rem);\n    div {\n        text-align:center;\n        align-self: center;\n        margin-left: .5rem;\n\n\n        &:nth-child(1) {\n            align-self: center;\n        }\n\n        input {\n            display:block;\n            width: 100%;\n            border: none;\n            padding: 1rem .5rem;\n            text-align: center;\n            font-family: inherit;\n            font-size: inherit;\n            background-color: var(--input-background-color);\n            color: var(--input-color);\n            border-radius: .5rem;\n            outline: none;\n\n            &:focus {\n                outline: none;\n            }\n\n            &:disabled {\n                opacity: .83;\n            }\n        }\n\n        input[type=number]::-webkit-inner-spin-button, \n        input[type=number]::-webkit-outer-spin-button {  \n            opacity: 1;\n\n        }\n    }\n"]);return u=function(){return e},e}function l(){var e=Object(o.a)(["\n    display: grid;\n    grid-template-rows: repeat(4, 5rem);\n    div {\n        align-self: center;\n        display:flex;\n        justify-content: space-between;\n    }\n"]);return l=function(){return e},e}function d(){var e=Object(o.a)(["\n    display: grid;\n    grid-template-columns: 2rem repeat(7, 7.5rem);\n    margin-bottom: 3rem;\n"]);return d=function(){return e},e}var p=c.c.div(d()),b=c.c.div(l()),m=c.c.div(u()),f=c.c.div(s());n.a=function(e){var n=e.parameters,t=e.handleChange,o=e.disabledInputs,c=void 0!==o&&o,s=function(e,n){return 0===e.length||1001===e[n]?"":e[n]};return console.log(0===(Number(s(n.diopters,0))+Number(s(n.addition,0))).toFixed(2)),Object(i.useEffect)((function(){t&&n.diopters&&n.addition&&(t({target:{name:"diopters",value:Number(s(n.diopters,0))+Number(s(n.addition,0))===0?"":(Number(s(n.diopters,0))+Number(s(n.addition,0))).toFixed(2)}},2),t({target:{name:"diopters",value:Number(s(n.diopters,1))+Number(s(n.addition,1))===0?"":(Number(s(n.diopters,1))+Number(s(n.addition,1))).toFixed(2)}},3))}),[n.diopters[0],n.addition[0],n.diopters[1],n.addition[1]]),Object(a.jsxs)(p,{children:[Object(a.jsxs)(b,{children:[Object(a.jsx)("div",{children:" "}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"P"})}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"\u013d"})}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"P"})}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"\u013d"})})]}),Object(a.jsxs)(m,{children:[Object(a.jsx)("div",{children:"sph"}),Object(r.a)(Array(4)).map((function(e,r){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",value:s(n.diopters,r),name:"diopters",onChange:function(e){return t(e,r)},disabled:c})},r)}))]}),Object(a.jsxs)(m,{children:[Object(a.jsx)("div",{children:"cyl"}),Object(r.a)(Array(4)).map((function(e,r){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",value:s(n.cylinder,r),name:"cylinder",onChange:function(e){return t(e,r)},disabled:c})},r)}))]}),Object(a.jsxs)(m,{children:[Object(a.jsx)("div",{children:"ax"}),Object(r.a)(Array(4)).map((function(e,r){return Object(a.jsx)(f,{children:Object(a.jsx)("input",{type:"text",value:s(n.cylinderAxes,r),name:"cylinderAxes",onChange:function(e){return t(e,r)},disabled:c})},r)}))]}),Object(a.jsxs)(m,{children:[Object(a.jsx)("div",{children:"PD"}),Object(r.a)(Array(4)).map((function(e,r){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",value:s(n.distance,r),name:"distance",onChange:function(e){return t(e,r)},disabled:c})},r)}))]}),Object(a.jsxs)(m,{children:[Object(a.jsx)("div",{children:"prizma"}),Object(r.a)(Array(4)).map((function(e,r){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",value:s(n.prism,r),name:"prism",onChange:function(e){return t(e,r)},disabled:c})},r)}))]}),Object(a.jsxs)(m,{children:[Object(a.jsx)("div",{children:"basis"}),Object(r.a)(Array(4)).map((function(e,r){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",value:s(n.basis,r),name:"basis",onChange:function(e){return t(e,r)},disabled:c})},r)}))]}),Object(a.jsxs)(m,{children:[Object(a.jsx)("div",{children:"addicia"}),Object(r.a)(Array(2)).map((function(e,r){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",value:s(n.addition,r),name:"addition",onChange:function(e){return t(e,r)},disabled:c})},r)}))]})]})}}}]);
//# sourceMappingURL=1.f23e2ef1.chunk.js.map