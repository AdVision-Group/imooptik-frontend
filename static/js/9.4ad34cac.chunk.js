(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[9],{237:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(21),c=t(56),o=t(10),a=t(1),l=t(99),u=t(18),d=t(3),s=t(63),b=t(59),f=t(55),v=t(73),j=t(5),m=t(6),p=t(28);function h(){var n=Object(j.a)(["\n    font-size: 1.2rem;\n    background-color: var(--primary-color);\n"]);return h=function(){return n},n}function O(){var n=Object(j.a)(["\n    font-size: 1.2rem;\n    margin-right: 1rem;\n"]);return O=function(){return n},n}function g(){var n=Object(j.a)(["\n    /* grid-area: o; */\n\n    /* align-self: end; */\n    justify-self: end;\n\n    div {\n        text-align: right;\n        margin-bottom: 1rem;\n    }\n"]);return g=function(){return n},n}function x(){var n=Object(j.a)(["\n    /* grid-area: p; */\n\n    text-align:end;\n    /* align-self: center; */\n    align-self: end;\n\n    justify-self: end;\n"]);return x=function(){return n},n}function y(){var n=Object(j.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return y=function(){return n},n}function k(){var n=Object(j.a)(["\n    font-size: 1.4rem;\n    font-weight: 700;\n    color: var(--color-green);\n    margin-bottom: 1rem;\n"]);return k=function(){return n},n}function w(){var n=Object(j.a)(["\n    font-size: 1.2rem;\n    color: var(--secondary-text-color);\n    margin-bottom: 2rem;\n"]);return w=function(){return n},n}function C(){var n=Object(j.a)(["\n    /* grid-area: c; */\n\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return C=function(){return n},n}function S(){var n=Object(j.a)(["\n    /* width: 100%; */\n    /* height: 100%; */\n    background-color: var(--image-background-color);\n    border-radius: .5rem;\n    padding: 1rem;\n    margin-right: 2rem;\n    /* grid-area: i; */\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        object-position: start;\n    }  \n\n    @media all and (max-width: 800px) {\n        align-self: start;\n        grid-row-start: 1;\n        grid-row-end: 3;   \n\n        @media all and (max-width: 500px) {\n            justify-self: center;\n            margin-bottom: 2rem;\n        }\n\n    }\n"]);return S=function(){return n},n}function z(){var n=Object(j.a)(['\n    width: 100%;\n    display: grid;\n    grid-template-columns: 15rem 1fr 1fr 25rem;\n    /* grid-template-rows: 1fr auto;\n    grid-template-areas:    "i c p"\n                            "i c o"; */\n\n\n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns : 20rem 1fr;\n        grid-template-rows: 1fr 1fr;\n\n        @media all and (max-width: 500px) {\n            grid-template-columns : 1fr;\n        }\n    }\n\n']);return z=function(){return n},n}var P=m.c.div(z()),T=m.c.div(S()),E=m.c.div(C()),A=m.c.p(w()),B=m.c.p(k()),I=m.c.p(y()),F=m.c.div(x()),N=m.c.div(g()),H=Object(m.c)(p.a)(O()),L=Object(m.c)(p.a)(h()),V=function(n){var e=n.product,t=n.handleDeleteButton,i=n.handleUpdateButton,c=n.activePremisesTab,l=n.selectProduct,u=n.deselectProduct,d=n.selectedProducts,s=e.name,b=e.available,f=e.eanCode,j=e.price,m=e.image,p=e.type,h=Object(a.useState)(!1),O=Object(o.a)(h,2),g=O[0],x=O[1];return Object(a.useEffect)((function(){0===d.length&&x(!1)}),[d]),Object(r.jsxs)(P,{children:[Object(r.jsx)(T,{children:m&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(m.imagePath),alt:m.alt})}),Object(r.jsxs)(E,{children:[Object(r.jsx)("h2",{children:s}),Object(r.jsx)(A,{children:f})]}),Object(r.jsxs)(F,{children:[Object(r.jsxs)(I,{children:[(j/100).toFixed(2),"\u20ac"]}),Object(r.jsx)(B,{children:6===p?"Slu\u017eba":Object(v.d)(b,c)})]}),Object(r.jsxs)(N,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("input",{id:"selected",name:"selected",type:"checkbox",checked:g,onChange:function(){return n=e._id,void(g?(u(d,n),x(!1)):(l(n),x(!0)));var n}})}),Object(r.jsx)(H,{onClick:i,children:"Upravi\u0165"}),Object(r.jsx)(L,{onClick:t,children:"Vymaza\u0165"})]})]})},q=t(32),D=t(31),M=t(20),_=t.n(M),G=t(52),J=t(57),Q=t(53);function U(){var n=Object(j.a)(["\n    background-color: var(--color-red);\n"]);return U=function(){return n},n}function K(){var n=Object(j.a)(["\n    font-weight: bolder;\n    background-color: var(--primary-color);\n    margin-left: 1rem;\n"]);return K=function(){return n},n}function R(){var n=Object(j.a)(["\n    display:flex;\n    justify-content: flex-end;\n"]);return R=function(){return n},n}function W(){var n=Object(j.a)(["\n    margin-bottom: 3rem;\n\n    :not(:nth-of-type(1)) {\n        h3 {\n            margin-bottom: 1rem;\n        }\n    }\n\n    h4 {\n        margin-bottom: 1rem;\n    }\n\n    div {\n        margin-bottom: 1rem;\n        margin-right: 1rem;\n    }\n"]);return W=function(){return n},n}function Z(){var n=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return Z=function(){return n},n}function X(){var n=Object(j.a)(["\n    overflow-y: scroll;\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--background-primary-color);\n    color: var(--primary-text-color);\n\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 45rem;\n\n    position: fixed;\n    z-index: 999999;\n\n    h2{ \n        margin-bottom: 2rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n\n"]);return X=function(){return n},n}function Y(){var n=Object(j.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return Y=function(){return n},n}var $=m.c.div(Y()),nn=m.c.div(X()),en=m.c.button(Z()),tn=m.c.div(W()),rn=m.c.div(R()),cn=Object(m.c)(p.a)(K()),on=Object(m.c)(p.a)(U()),an=function(n){var e,t,c,l,u,d,s,b,f,v,j,m=n.close,p=n.applyFilter,h=n.resetFilter,O=Object(a.useState)({}),g=Object(o.a)(O,2),x=g[0],y=g[1],k=Object(Q.a)("api/store/products/".concat(null===x||void 0===x||null===(e=x.filters)||void 0===e?void 0:e.type,"/filters"),!(null===x||void 0===x||null===(t=x.filters)||void 0===t?void 0:t.type),"GET"),w=k.response,C=k.isLoading,S=k.refetch,z=Object(a.useState)(null),P=Object(o.a)(z,2),T=P[0],E=P[1],A=function(n){var e=n.target,t=e.name,r=e.value;""!==r?y((function(n){return Object(i.a)(Object(i.a)({},n),{},{filters:Object(i.a)(Object(i.a)({},null===n||void 0===n?void 0:n.filters),{},Object(D.a)({},t,r))})})):Object.keys(null===x||void 0===x?void 0:x.filters).length>1?(null===x||void 0===x||delete x.filters[t],y(Object(i.a)({},x))):(delete x.filters,y(Object(i.a)({},x)))};return Object(a.useEffect)((function(){var n;(null===x||void 0===x||null===(n=x.filters)||void 0===n?void 0:n.type)&&(E(null),S())}),[null===x||void 0===x||null===(c=x.filters)||void 0===c?void 0:c.type]),Object(a.useEffect)((function(){C||(null===w||void 0===w?void 0:w.filters)&&E(null===w||void 0===w?void 0:w.filters)}),[C]),Object(a.useEffect)((function(){return function(){y({})}}),[]),_.a.createPortal(Object(r.jsxs)($,{children:[Object(r.jsx)(en,{onClick:m}),Object(r.jsxs)(nn,{children:[Object(r.jsx)("h2",{children:"Vybra\u0165 filter"}),Object(r.jsxs)(tn,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Typ produktu"}),Object(r.jsx)(J.a,{label:"Dioptrick\xe9",isActive:1===(null===x||void 0===x||null===(l=x.filters)||void 0===l?void 0:l.type),handleClick:function(){var n,e;return A({target:{name:"type",value:(null===x||void 0===x||null===(n=x.filters)||void 0===n?void 0:n.type)&&1===(null===x||void 0===x||null===(e=x.filters)||void 0===e?void 0:e.type)?"":1}})}}),Object(r.jsx)(J.a,{label:"Slne\u010dn\xe9",isActive:2===(null===x||void 0===x||null===(u=x.filters)||void 0===u?void 0:u.type),handleClick:function(){var n,e;return A({target:{name:"type",value:(null===x||void 0===x||null===(n=x.filters)||void 0===n?void 0:n.type)&&2===(null===x||void 0===x||null===(e=x.filters)||void 0===e?void 0:e.type)?"":2}})}}),Object(r.jsx)(J.a,{label:"\u0160portov\xe9",isActive:4===(null===x||void 0===x||null===(d=x.filters)||void 0===d?void 0:d.type),handleClick:function(){var n,e;return A({target:{name:"type",value:(null===x||void 0===x||null===(n=x.filters)||void 0===n?void 0:n.type)&&4===(null===x||void 0===x||null===(e=x.filters)||void 0===e?void 0:e.type)?"":4}})}}),Object(r.jsx)(J.a,{label:"Kontaktn\xe9 \u0161o\u0161ovky",isActive:3===(null===x||void 0===x||null===(s=x.filters)||void 0===s?void 0:s.type),handleClick:function(){var n,e;return A({target:{name:"type",value:(null===x||void 0===x||null===(n=x.filters)||void 0===n?void 0:n.type)&&3===(null===x||void 0===x||null===(e=x.filters)||void 0===e?void 0:e.type)?"":3}})}}),Object(r.jsx)(J.a,{label:"Doplnky",isActive:5===(null===x||void 0===x||null===(b=x.filters)||void 0===b?void 0:b.type),handleClick:function(){var n,e;return A({target:{name:"type",value:(null===x||void 0===x||null===(n=x.filters)||void 0===n?void 0:n.type)&&5===(null===x||void 0===x||null===(e=x.filters)||void 0===e?void 0:e.type)?"":5}})}}),Object(r.jsx)(J.a,{label:"Slu\u017eby",isActive:6===(null===x||void 0===x||null===(f=x.filters)||void 0===f?void 0:f.type),handleClick:function(){var n,e;return A({target:{name:"type",value:(null===x||void 0===x||null===(n=x.filters)||void 0===n?void 0:n.type)&&6===(null===x||void 0===x||null===(e=x.filters)||void 0===e?void 0:e.type)?"":6}})}})]}),Object(r.jsx)("h3",{children:"Filtovat podla:"}),Object(r.jsx)("div",{children:Object(r.jsx)(G.a,{label:"Meno produktu",name:"query",value:(null===x||void 0===x?void 0:x.query)||"",handleChange:function(n){var e=n.target,t=e.name,r=e.value;if(""===r)return delete x.query,void y(Object(i.a)({},x));y((function(n){return Object(i.a)(Object(i.a)({},n),{},Object(D.a)({},t,r))}))}})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(G.a,{label:"Zna\u010dka produktu",name:"brand",value:(null===x||void 0===x||null===(v=x.filters)||void 0===v?void 0:v.brand)||"",handleChange:A,list:"brands"}),Object(r.jsx)("datalist",{id:"brands",children:(null===T||void 0===T?void 0:T.brands.length)>0&&T.brands.map((function(n,e){return Object(r.jsx)("option",{value:n},e)}))})]}),Object(r.jsx)("div",{children:Object(r.jsx)(G.a,{label:"Eank\xf3d produktu",name:"eanCode",value:(null===x||void 0===x||null===(j=x.filters)||void 0===j?void 0:j.eanCode)||"",handleChange:A})})]}),Object(r.jsxs)(rn,{children:[Object(r.jsx)(on,{onClick:function(){return h()},children:"Resetova\u0165 filter"}),Object(r.jsx)(cn,{onClick:function(){return p(x)},children:"Filtrova\u0165"})]})]})]}),document.getElementById("portal"))},ln=t(64),un=t(14);function dn(){var n=Object(j.a)(["\n    font-size: 1.2rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n\n    :not(:last-child) {\n        margin-right: 1rem;\n    }\n"]);return dn=function(){return n},n}function sn(){var n=Object(j.a)(["\n    cursor: pointer;\n    color: var(--color-red);\n    /* font-weight: bolder; */\n    padding: .5rem 2rem;\n"]);return sn=function(){return n},n}function bn(){var n=Object(j.a)(["\n    cursor: pointer;\n    background-color: var(--body-background-primary-color);\n    color: var(--primary-color);\n    font-weight: bolder;\n    padding: .5rem 2rem;\n    margin-left: 1rem;\n"]);return bn=function(){return n},n}var fn=m.c.button(bn()),vn=m.c.button(sn()),jn=Object(m.c)(p.a)(dn());e.default=function(){var n=Object(d.h)().push,e=Object(a.useContext)(u.a),t=e.closeModal,v=e.showModal,j=e.isLoading,m=e.message,p=Object(a.useState)(""),h=Object(o.a)(p,2),O=h[0],g=h[1],x=Object(a.useState)([]),y=Object(o.a)(x,2),k=y[0],w=y[1],C=Object(a.useState)({limit:10,skip:0,sortBy:{date:-1}}),S=Object(o.a)(C,2),z=S[0],P=S[1],T=Object(a.useState)(!1),E=Object(o.a)(T,2),A=E[0],B=E[1],I=Object(a.useState)(!1),F=Object(o.a)(I,2),N=F[0],H=F[1],L=Object(a.useState)([]),D=Object(o.a)(L,2),M=D[0],_=D[1],G=function(n){_((function(e){return[].concat(Object(c.a)(e),[n])}))},J=function(n,e){var t=n.filter((function(n){return n!==e}));_(t)},Q=Object(a.useContext)(l.WarehouseContext),U=Q.activePremisesTab,K=Q.products,R=Q.retailPremisesTabs,W=Q.getProductsByQuery,Z=Q.handleChangePremisesTab,X=Q.productCategoryTypeTabs,Y=Q.activeCategoryTypeTab,$=Q.handleChangeCategoryTypeTab,nn=Q.deleteProduct,en=Q.deleteLenses,tn=Q.deactivateMany,rn=function(n,e){tn({products:n,activate:e}),_([])},cn=function(){W({limit:10,skip:0,sortBy:{date:-1}}),B(!1),H(!1)};Object(a.useEffect)((function(){K||W({limit:10,sortBy:{date:-1}}),K&&w(K)}),[K]),Object(a.useEffect)((function(){!O&&K&&0===Y&&W({limit:10,sortBy:{date:-1}})}),[O]);return Object(r.jsxs)("section",{children:[v&&Object(r.jsx)(q.a,{loading:j,title:m,close:t}),A&&Object(r.jsx)(an,{applyFilter:function(n){W(n),B(!1),H(!0)},resetFilter:cn,close:function(){return B(!1)}}),Object(r.jsx)(s.a,{title:"Sklad",searchQuery:O,handleSearch:function(){""!==O&&0===Y&&W({query:O,sortBy:{date:-1}})},handleChange:function(n){return g(n.target.value)},handleAddButton:function(){return n("sklad/novy-produkt")}}),Object(r.jsx)(un.d,{children:Object(r.jsx)(un.c,{children:Object(r.jsx)(b.a,{items:R,activeIndex:U,setActiveIndex:Z})})}),Object(r.jsx)(un.d,{children:Object(r.jsxs)(un.c,{children:[Object(r.jsx)(b.a,{items:X,activeIndex:Y,setActiveIndex:$}),M.length>0&&Object(r.jsxs)("div",{children:[Object(r.jsx)(jn,{onClick:function(){return rn(M,!1)},children:"Neverejn\xe9"}),Object(r.jsx)(jn,{onClick:function(){return rn(M,!0)},children:"Verejn\xe9"})]}),0===Y&&Object(r.jsxs)("div",{children:[N&&Object(r.jsx)(vn,{onClick:cn,children:"reset"}),Object(r.jsx)(fn,{onClick:function(){return B(!0)},children:"Filter"})]})]})}),Object(r.jsxs)(f.a,{children:[k.map((function(e,t){return Object(r.jsx)(V,{product:e,activePremisesTab:U,handleUpdateButton:function(){return n("sklad/".concat(e._id))},handleDeleteButton:0===Y?function(){return n=e._id,void nn(n);var n}:function(){return en(e._id)},selectProduct:G,deselectProduct:J,selectedProducts:M},t)})),Object(r.jsx)(ln.a,{listItems:k,handleClickPrev:function(){0!==z.skip&&(W(Object(i.a)(Object(i.a)({},z),{},{skip:z.skip-10})),P(Object(i.a)(Object(i.a)({},z),{},{skip:z.skip-10})))},handleClickNext:function(){k.length<10||(W(Object(i.a)(Object(i.a)({},z),{},{skip:z.skip+10})),P(Object(i.a)(Object(i.a)({},z),{},{skip:z.skip+10})))}})]})]})}},52:function(n,e,t){"use strict";var r=t(2),i=t(21),c=t(30),o=(t(1),t(5)),a=t(6);function l(){var n=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return l=function(){return n},n}function u(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return u=function(){return n},n}var d=Object(a.b)(u()),s=a.c.div(l(),d,d);e.a=function(n){var e=n.handleChange,t=n.label,o=n.name,a=Object(c.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(s,{children:[Object(r.jsx)("input",Object(i.a)({className:"form-input",name:o,onChange:e},a)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(a.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return d}));var r=t(7),i=t.n(r),c=t(12),o=t(10),a=t(1),l=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=Object(a.useState)(null),l=Object(o.a)(r,2),u=l[0],d=l[1],s=Object(a.useState)(null),b=Object(o.a)(s,2),f=b[0],v=b[1],j=Object(a.useState)(null),m=Object(o.a)(j,2),p=m[0],h=m[1],O=Object(a.useState)(!0),g=Object(o.a)(O,2),x=g[0],y=g[1],k=Object(a.useState)(0),w=Object(o.a)(k,2),C=w[0],S=w[1],z=function(){return S((function(n){return n+1}))},P={method:t,redirect:"follow"};return Object(a.useEffect)((function(){(function(){var t=Object(c.a)(i.a.mark((function t(){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return y(!0),t.prev=3,t.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),P);case 6:return r=t.sent,t.next=9,r.json();case 9:c=t.sent,h(c.message),d(c),y(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),v(t.t0),y(!1),h("Nie\u010do sa pokazilo");case 20:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}})()()}),[C]),{response:u,isLoading:x,error:f,message:p,refetch:z}},u=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(a.useState)(null),l=Object(o.a)(r,2),u=l[0],d=l[1],s=Object(a.useState)(null),b=Object(o.a)(s,2),f=b[0],v=b[1],j=Object(a.useState)(!0),m=Object(o.a)(j,2),p=m[0],h=m[1],O=Object(a.useState)(0),g=Object(o.a)(O,2),x=g[0],y=g[1],k=function(){return y((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtknv2")),w.append("Content-Type","application/json");var C=JSON.stringify(e),S={method:"POST",headers:w,body:C,redirect:"follow"};return Object(a.useEffect)((function(){(function(){var e=Object(c.a)(i.a.mark((function e(){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),S);case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,d(c),h(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),v(e.t0),h(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[x,n]),{response:u,isLoading:p,error:f,refetch:k}},d=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(a.useState)(null),l=Object(o.a)(r,2),u=l[0],d=l[1],s=Object(a.useState)(null),b=Object(o.a)(s,2),f=b[0],v=b[1],j=Object(a.useState)(!0),m=Object(o.a)(j,2),p=m[0],h=m[1],O=Object(a.useState)(0),g=Object(o.a)(O,2),x=g[0],y=g[1],k=function(){return y((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtknv2")),w.append("Content-Type","application/json");var C={method:"GET",headers:w,redirect:"follow"};return Object(a.useEffect)((function(){(function(){var r=Object(c.a)(i.a.mark((function r(){var c,o;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return h(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),C);case 6:return c=r.sent,r.next=9,c.json();case 9:o=r.sent,d(o),h(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),v(r.t0),h(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[x,n,e]),{response:u,isLoading:p,error:f,refetch:k}}},55:function(n,e,t){"use strict";var r=t(2),i=(t(1),t(5)),c=t(6),o=t(14);function a(){var n=Object(i.a)(["\n    max-width: 125rem;\n    width: 100%;\n"]);return a=function(){return n},n}function l(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n    /* border: 1px solid red; */\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n\n        @media all and (max-width: 700px) {\n            overflow-x: scroll;\n        }\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return l=function(){return n},n}var u=c.c.div(l(),o.g),d=c.c.div(a());e.a=function(n){var e=n.children;return Object(r.jsx)(u,{children:Object(r.jsx)(d,{children:e})})}},57:function(n,e,t){"use strict";var r=t(21),i=t(2),c=t(30),o=(t(1),t(5));function a(){var n=Object(o.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    /* font-weight: ","; */\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return a=function(){return n},n}var l=t(6).c.div(a(),(function(n){return n.isActive?"var(--primary-color)":"var(--body-background-primary-color)"}),(function(n){return n.isActive?"var(--button-font-color)":"var(--secondary-text-color)"}),(function(n){return n.isActive?"border":"normal"}));e.a=function(n){var e=n.label,t=n.isActive,o=n.handleClick,a=Object(c.a)(n,["label","isActive","handleClick"]);return Object(i.jsx)(l,Object(r.a)(Object(r.a)({isActive:t,onClick:o},a),{},{children:e}))}},59:function(n,e,t){"use strict";var r=t(21),i=t(2),c=t(30),o=(t(1),t(5)),a=t(6),l=t(28),u=t(14);function d(){var n=Object(o.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return d=function(){return n},n}function s(){var n=Object(o.a)(["\n    margin-bottom: 3rem;\n    /* "," */\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return s=function(){return n},n}var b=a.c.div(s(),u.g),f=Object(a.c)(l.a)(d(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,o=n.setActiveIndex,a=Object(c.a)(n,["items","activeIndex","setActiveIndex"]);return Object(i.jsx)(b,Object(r.a)(Object(r.a)({},a),{},{children:Object(i.jsx)("ul",{children:e.map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(f,{active:n.id===t,onClick:function(){return o(n.id)},children:n.name})},n.id)}))})}))}},63:function(n,e,t){"use strict";var r=t(2),i=(t(1),t(52)),c=t(5),o=t(6),a=t(28),l=t(14);function u(){var n=Object(c.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return u=function(){return n},n}function d(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return d=function(){return n},n}function s(){var n=Object(c.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return s=function(){return n},n}function b(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return n},n}function f(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return f=function(){return n},n}function v(){var n=Object(c.a)(["\n    max-width: 125rem;\n    display: flex;\n    justify-content: space-between;\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return v=function(){return n},n}function j(){var n=Object(c.a)(["\n    color: var(--primary-text-color);\n    margin-bottom: 3rem;\n    ",";    \n    /* max-width: 125rem; */\n\n\n"]);return j=function(){return n},n}var m=o.c.div(j(),l.g),p=o.c.div(v()),h=o.c.div(f()),O=o.c.div(b()),g=(o.c.div(s()),Object(o.c)(a.a)(d())),x=Object(o.c)(a.a)(u());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,c=n.handleChange,o=n.title,a=(n.count,n.handleAddButton),l=void 0===a?function(){}:a;return Object(r.jsx)(m,{children:Object(r.jsxs)(p,{children:[Object(r.jsx)(h,{children:Object(r.jsx)("h1",{children:o})}),Object(r.jsxs)(O,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{type:"search",name:"searchbox",value:e,handleChange:c,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(g,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(x,{onClick:l,children:"Prida\u0165"})]})]})})}},64:function(n,e,t){"use strict";var r=t(2),i=t(10),c=t(1),o=t(58),a=t(5),l=t(6);function u(){var n=Object(a.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return u=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return d=function(){return n},n}var s=l.c.div(d()),b=l.c.button(u());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,a=n.handleClickPrev,l=void 0===a?function(){}:a,u=n.handleClickNext,d=void 0===u?function(){}:u,f=Object(c.useState)(!0),v=Object(i.a)(f,2),j=v[0],m=v[1],p=Object(c.useState)(!0),h=Object(i.a)(p,2),O=h[0],g=h[1],x=Object(c.useState)(0),y=Object(i.a)(x,2),k=y[0],w=y[1];Object(c.useEffect)((function(){m(0===k)}),[t]),Object(c.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?g(!0):g(!1)}),[t]),Object(c.useEffect)((function(){0!==k&&w((function(n){return n--}))}),[l]),Object(c.useEffect)((function(){w((function(n){return n++}))}),[d]);return Object(r.jsxs)(s,{children:[Object(r.jsx)(b,{disabled:j,onClick:function(){l(),0!==k&&w((function(n){return n-1}))},children:Object(r.jsx)(o.b,{})}),Object(r.jsx)(b,{disabled:O,onClick:function(){d(),w((function(n){return n+1}))},children:Object(r.jsx)(o.c,{})})]})}}}]);
//# sourceMappingURL=9.4ad34cac.chunk.js.map