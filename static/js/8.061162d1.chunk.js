(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[8,21],{231:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(10),c=t(0),i=t(17),o=t(2),s=t(67),u=t(16),l=t(53),d=t(57),f=t(50),m=t(31),b=t(92),p=t(8),j=t(9),h=t(26);function v(){var e=Object(p.a)(["\n    font-size: 1.4rem;\n    background-color: #DD4C4C;\n    /* background-color: rgb(235, 172, 1); */\n    padding: .5rem 1.8rem;\n"]);return v=function(){return e},e}function O(){var e=Object(p.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n    padding: .5rem 1.8rem;\n"]);return O=function(){return e},e}function g(){var e=Object(p.a)(["\n    display: grid;\n    grid-template-columns: 1fr 2fr 25rem;\n    align-content: center;\n    margin-bottom: 1rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n"]);return g=function(){return e},e}function x(){var e=Object(p.a)(["\n    padding: 2rem;\n    text-align: center;\n"]);return x=function(){return e},e}function y(){var e=Object(p.a)(["\n    display: grid;\n    align-content: center;\n    grid-template-columns: 1fr 2fr 25rem;\n    border-bottom: 1px solid #000;\n    font-weight: bolder;\n"]);return y=function(){return e},e}function k(){var e=Object(p.a)(["\n\n"]);return k=function(){return e},e}var w=j.c.div(k()),C=j.c.div(y()),z=j.c.div(x()),S=j.c.div(g()),N=Object(j.c)(h.a)(O()),P=Object(j.c)(h.a)(v());n.default=function(){var e=Object(c.useState)(""),n=Object(a.a)(e,2),t=n[0],p=n[1],j=Object(o.h)().push,h=Object(c.useContext)(i.a).isAdmin,v=Object(c.useState)([]),O=Object(a.a)(v,2),g=O[0],x=O[1],y=Object(c.useContext)(u.a),k=y.isLoading,U=y.showModal,T=y.message,F=y.closeModal,I=Object(c.useContext)(s.UserContext),A=(I.user,I.activeIndex),B=I.handleChangeFilterItem,E=I.filterItems,M=I.users,D=I.totalCount,H=I.getFilteredUsers,J=I.getUserByQuery;Object(c.useEffect)((function(){M||H({filters:{admin:A}}),M&&x(M)}),[M]),Object(c.useEffect)((function(){M&&(H({filters:{admin:A}}),x(M))}),[A]),Object(c.useEffect)((function(){M&&""===t&&(H({filters:{admin:A}}),x(M))}),[t]);var Z=Object(c.useState)(1),_=Object(a.a)(Z,2),Q=_[0],L=_[1],V=Object(c.useState)(10),q=Object(a.a)(V,1)[0],G=Q*q,K=G-q,R=g.slice(K,G);return Object(r.jsxs)("section",{children:[U&&Object(r.jsx)(m.a,{loading:k,title:T,close:F}),Object(r.jsx)(l.a,{searchQuery:t,handleSearch:function(){""!==t&&J({query:t})},handleChange:function(e){return p(e.target.value)},handleAddButton:function(){return j("zakaznici/novy-zakaznik")},count:D,title:"Z\xe1kazn\xedci"}),Object(r.jsx)(d.a,{items:h?E:[{id:0,name:"Z\xe1kazn\xedci",filter:0}],activeIndex:A,setActiveIndex:B}),Object(r.jsxs)(f.a,{children:[Object(r.jsxs)(w,{children:[Object(r.jsxs)(C,{children:[Object(r.jsx)(z,{children:"Meno a priezvisko"}),Object(r.jsx)(z,{children:"Email"}),Object(r.jsx)(z,{children:"Mo\u017enosti"})]}),R.map((function(e,n){return Object(r.jsxs)(S,{children:[Object(r.jsx)(z,{children:e.name}),Object(r.jsx)(z,{children:e.email}),Object(r.jsxs)(z,{children:[Object(r.jsx)(N,{onClick:function(){return j("zakaznici/".concat(e._id))},children:"Upravi\u0165"}),Object(r.jsx)(P,{onClick:function(){return alert("Pekn\xfd pokus! Tu vel\xedm zatia\u013e ja :)")},children:"Odstr\xe1ni\u0165"})]})]},n)}))]}),Object(r.jsx)(b.a,{productsPerPage:q,totalProducts:g.length,paginate:function(e){return L(e)},activePage:Q})]})]})}},49:function(e,n,t){"use strict";var r=t(1),a=t(19),c=t(29),i=(t(0),t(8)),o=t(9);function s(){var e=Object(i.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return e},e}function u(){var e=Object(i.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return e},e}var l=Object(o.b)(u()),d=o.c.div(s(),l,l);n.a=function(e){var n=e.handleChange,t=e.label,i=e.name,o=Object(c.a)(e,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:i,onChange:n},o)),t?Object(r.jsx)("label",{htmlFor:i,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},50:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(8)),c=t(9),i=t(28);function o(){var e=Object(a.a)(["\n    max-width: 115rem;\n"]);return o=function(){return e},e}function s(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return s=function(){return e},e}var u=c.c.div(s(),i.b),l=c.c.div(o());n.a=function(e){var n=e.children;return Object(r.jsx)(u,{children:Object(r.jsx)(l,{children:n})})}},53:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(49)),c=t(8),i=t(9),o=t(26),s=t(28);function u(){var e=Object(c.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: rgb(235, 172, 1);\n    font-weight: bolder;\n"]);return u=function(){return e},e}function l(){var e=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return e},e}function d(){var e=Object(c.a)(["\n    background-color: #DD4C4C;\n    margin-left: 1.5rem;\n    color: #fff;\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return e},e}function f(){var e=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return f=function(){return e},e}function m(){var e=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return m=function(){return e},e}function b(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return b=function(){return e},e}var p=i.c.div(b(),s.b),j=i.c.div(m()),h=i.c.div(f()),v=(i.c.div(d()),Object(i.c)(o.a)(l())),O=Object(i.c)(o.a)(u());n.a=function(e){var n=e.searchQuery,t=e.handleSearch,c=e.handleChange,i=e.title,o=(e.count,e.handleAddButton),s=void 0===o?function(){}:o;return Object(r.jsxs)(p,{children:[Object(r.jsx)(j,{children:Object(r.jsx)("h1",{children:i})}),Object(r.jsxs)(h,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{type:"search",name:"searchbox",value:n,handleChange:c,onKeyPress:function(e){""!==n&&"Enter"===e.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(v,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(O,{onClick:s,children:"Prida\u0165"})]})]})}},54:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={address:"",admin:0,premises:0,boughtProducts:{},city:"",country:"",date:"",email:"",finishedRegistration:!1,company:{ico:"",dic:"",icdph:"",address:"",psc:"",country:""},lenses:{cylinder:[1001,1001,1001,1001],cylinderAxes:[1001,1001,1001,1001],diopters:[1001,1001,1001,1001],distance:[1001,1001,1001,1001],addition:[1001,1001,1001,1001],basis:[1001,1001,1001,1001],prism:[1001,1001,1001,1001]},name:"",orders:[],phone:"",psc:"",tempUser:!1,totalSpent:0,watchList:[],fName:"",lName:"",password:"",confirmPassword:"",birthDate:Date.now(),optometrist:!1}},57:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(8)),c=t(9),i=t(26),o=t(28);function s(){var e=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n"]);return s=function(){return e},e}function u(){var e=Object(a.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return u=function(){return e},e}var l=c.c.div(u(),o.b),d=Object(c.c)(i.a)(s(),(function(e){return e.active?"#000":"#fff"}),(function(e){return e.active?"#fff":"#000"}),(function(e){return e.active?400:700}),(function(e){return e.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}));n.a=function(e){var n=e.items,t=e.activeIndex,a=e.setActiveIndex;return Object(r.jsx)(l,{children:Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(d,{active:e.id===t,onClick:function(){return a(e.id)},children:e.name})},e.id)}))})})}},67:function(e,n,t){"use strict";t.r(n),t.d(n,"UserContext",(function(){return O}));var r=t(1),a=t(4),c=t.n(a),i=t(11),o=t(30),s=t(19),u=t(10),l=t(0),d=t(2),f=t(17),m=t(16),b=function(e,n){var t=new Headers;t.append("auth-token",e),t.append("Content-Type","application/json");var r={method:"GET",headers:t,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(n),r)},p=function(e,n,t){var r=new Headers;r.append("auth-token",e),r.append("Content-Type","application/json");var a={method:"PATCH",headers:r,body:JSON.stringify(Object(s.a)({},n)),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/admin/users/").concat(t),a)},j=function(e,n){var t=n.name,r=n.email,a=new Headers;a.append("auth-token",e),a.append("Content-Type","application/json");var c={method:"POST",headers:a,body:JSON.stringify({email:r,name:t}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),c)},h=function(e,n){console.log(n);var t=n.name,r=n.email,a=n.password,c=n.premises,i=n.admin,o=new Headers;o.append("auth-token",e),o.append("Content-Type","application/json");var s={method:"POST",headers:o,body:JSON.stringify({admin:Number(i),email:r,name:t,premises:Number(c),password:a}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),s)},v=t(54),O=Object(l.createContext)({isUpdating:!1,activeIndex:0,handleChangeFilterItem:function(){},filterItems:[],totalCount:0,users:null,user:null,getUser:function(){},handleChange:function(){},handleParameterChange:function(){},handleCompanyChange:function(){},updateUser:function(){},resetUser:function(){},formToShow:0,switchFormButtons:[],toggleUserForm:function(){},createUser:function(){},getFilteredUsers:function(){},getUserByQuery:function(){}});n.default=function(e){var n=e.children,t=Object(d.h)().push,a=Object(l.useContext)(f.a).token,g=Object(l.useContext)(m.a),x=g.closeModal,y=g.getMessage,k=g.setIsLoading,w=g.setShowModal,C=Object(l.useState)(v.a),z=Object(u.a)(C,2),S=z[0],N=z[1],P=Object(l.useState)(null),U=Object(u.a)(P,2),T=U[0],F=U[1],I=Object(l.useState)(0),A=Object(u.a)(I,2),B=A[0],E=(A[1],Object(l.useState)(!1)),M=Object(u.a)(E,2),D=M[0],H=M[1],J=Object(l.useState)(0),Z=Object(u.a)(J,2),_=Z[0],Q=Z[1],L=Object(l.useState)(0),V=Object(u.a)(L,2),q=V[0],G=V[1];Object(l.useEffect)((function(){N(Object(s.a)(Object(s.a)({},S),{},{name:S.fName+" "+S.lName}))}),[S.fName,S.lName]);var K=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),H(!0),e.prev=3,e.next=6,b(a,n);case 6:return t=e.sent,e.next=9,t.json();case 9:(r=e.sent).user?(N(Object(s.a)(Object(s.a)(Object(s.a)({},S),r.user),{},{fName:r.user.name?r.user.name.split(" ")[0]:"",lName:r.user.name?r.user.name.split(" ")[1]:""})),k(!1),x()):(y(r.message),k(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(c.a.mark((function e(n,r){var i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(n),e.prev=3,e.next=6,p(a,n,r);case 6:return i=e.sent,e.next=9,i.json();case 9:if(o=e.sent,console.log(o),!o.error){e.next=19;break}return y(o.message),"low-privileges"===o.error&&y("Nem\xf4\u017ee\u0161 upravova\u0165 u\u017e\xedvate\u013eov s v\xe4\u010d\u0161\xedmi alebo rovnak\xfdmi pr\xe1vami ako m\xe1\u0161 ty"),"format"===o.error&&y("Chyba form\xe1tovania: "+o.message),"format"===o.error&&o.message.includes("lenses.cylinderAxes")&&y("Osa mus\xed byt v\xe4\u010d\u0161ia alebo rovn\xe1 0"),"phone-exists"===o.error&&y("Telef\xf3nne \u010d\xedslo u\u017e v datab\xe1zy existuje"),k(!1),e.abrupt("return");case 19:k(!1),x(),t("/dashboard/zakaznici"),Y({filters:{admin:_}}),e.next=30;break;case 25:e.prev=25,e.t0=e.catch(3),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 30:case"end":return e.stop()}}),e,null,[[3,25]])})));return function(n,t){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(c.a.mark((function e(n){var r,i,o,u,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),w(!0),e.prev=2,0!==q){e.next=24;break}if(r={},n._id){e.next=20;break}return console.log("creating new user"),e.next=9,j(a,n);case 9:return i=e.sent,e.next=12,i.json();case 12:if(!(r=e.sent).error){e.next=19;break}return y(r.message),"email"===r.type&&y("Email existuje"),"format"===r.error&&r.message.includes("email")&&y("Email musi byt platny email"),k(!1),e.abrupt("return");case 19:N(Object(s.a)(Object(s.a)({},r.user),{},{_id:r.user._id}));case 20:o=r.user?r.user._id:n._id,R(Object(s.a)({},n),o),e.next=43;break;case 24:if(n.password===n.confirmPassword){e.next=28;break}return y("Hesl\xe1 sa nezhoduj\xfa"),k(!1),e.abrupt("return");case 28:return e.next=30,h(a,n);case 30:return u=e.sent,e.next=33,u.json();case 33:if(l=e.sent,console.log(l),!l.error){e.next=39;break}return y(l.message),k(!1),e.abrupt("return");case 39:k(!1),Y({filters:{admin:_}}),t("/dashboard/zakaznici"),x();case 43:e.next=50;break;case 45:e.prev=45,e.t0=e.catch(2),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 50:case"end":return e.stop()}}),e,null,[[2,45]])})));return function(n){return e.apply(this,arguments)}}(),X=new Headers;X.append("auth-token",a),X.append("Content-Type","application/json");var Y=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(n),t=JSON.stringify(n),r={method:"POST",headers:X,body:t,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),r);case 8:return a=e.sent,e.next=11,a.json();case 11:if(i=e.sent,console.log(i),!i.users){e.next=17;break}return F(i.users),x(),e.abrupt("return");case 17:y(i.message),k(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(n){return e.apply(this,arguments)}}(),$=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),w(!0),console.log(n),t=JSON.stringify(n),r={method:"POST",headers:X,body:t,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/users/filter"),r);case 8:return a=e.sent,e.next=11,a.json();case 11:if(i=e.sent,console.log(i),!i.users){e.next=17;break}return F(i.users),x(),e.abrupt("return");case 17:y(i.message),k(!1),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0),y("Nieco sa pokazilo"),k(!1);case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(n){return e.apply(this,arguments)}}();return Object(r.jsx)(O.Provider,{value:{isUpdating:D,activeIndex:_,handleChangeFilterItem:function(e){Q(e)},filterItems:[{id:0,name:"Z\xe1kaznici",filter:0},{id:1,name:"Zamestnanci",filter:1},{id:2,name:"Ved\xfaci",filter:2}],users:T,user:S,totalCount:B,getUser:K,handleChange:function(e){var n=e.target,t=n.name,r=n.value;console.log(t,r),N(Object(s.a)(Object(s.a)({},S),{},Object(o.a)({},t,r)))},handleParameterChange:function(e,n){var t=e.target,r=t.name,a=t.value,c=S.lenses[r];c[n]=""===a?1001:Number(a),N(Object(s.a)(Object(s.a)({},S),{},{lenses:Object(s.a)(Object(s.a)({},S.lenses),{},Object(o.a)({},r,c))}))},handleCompanyChange:function(e){var n=e.target,t=n.name,r=n.value;N(Object(s.a)(Object(s.a)({},S),{},{company:Object(s.a)(Object(s.a)({},S.company),{},Object(o.a)({},t,r))}))},updateUser:R,resetUser:function(){N(v.a),H(!1),G(0)},formToShow:q,switchFormButtons:[{name:"Z\xe1kazn\xedk"},{name:"Zamestnanec"}],toggleUserForm:function(e,n){e.preventDefault(),G(n)},createUser:W,getFilteredUsers:Y,getUserByQuery:$},children:n})}},92:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(8)),c=t(9);function i(){var e=Object(a.a)(["\n    cursor: pointer;\n    outline: none;\n    border: none;\n    background-color: ",";\n    color: ",";\n    font-family: inherit;\n    font-size: inherit;\n    border-radius: 50%;\n    padding: 0.3rem 1rem;\n\n\n    &:focus {\n        outline: none;\n    }\n"]);return i=function(){return e},e}function o(){var e=Object(a.a)(["\n    ul {\n        width:3rem;\n        list-style: none;\n        display: flex;\n        justify-content: space-between;\n        margin: 0 auto;\n\n        li {\n\n        }\n    }\n"]);return o=function(){return e},e}var s=c.c.div(o()),u=c.c.button(i(),(function(e){return e.isActive?"#000":"transparent"}),(function(e){return e.isActive?"#fff":"#000"}));n.a=function(e){for(var n=e.productsPerPage,t=e.totalProducts,a=e.paginate,c=e.activePage,i=[],o=1;o<=Math.ceil(t/n);o++)i.push(o);return Object(r.jsx)(s,{children:Object(r.jsx)("ul",{children:i.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(u,{isActive:c===e,onClick:function(){return a(e)},children:e})},e)}))})})}}}]);
//# sourceMappingURL=8.061162d1.chunk.js.map