(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[9],{232:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(21),a=t(10),o=t(1),c=t(98),l=t(18),u=t(3),d=t(58),s=t(59),b=t(54),f=t(61),v=t(5),m=t(6),j=t(28);function h(){var n=Object(v.a)(["\n    font-size: 1.2rem;\n    background-color: var(--primary-color);\n"]);return h=function(){return n},n}function p(){var n=Object(v.a)(["\n    font-size: 1.2rem;\n    margin-right: 1rem;\n"]);return p=function(){return n},n}function O(){var n=Object(v.a)(["\n    grid-area: o;\n\n    align-self: end;\n    justify-self: end;\n"]);return O=function(){return n},n}function g(){var n=Object(v.a)(["\n    grid-area: p;\n\n    text-align:end;\n    align-self: center;\n    justify-self: end;\n"]);return g=function(){return n},n}function x(){var n=Object(v.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return x=function(){return n},n}function y(){var n=Object(v.a)(["\n    font-size: 1.4rem;\n    font-weight: 700;\n    color: var(--color-green);\n    margin-bottom: 1rem;\n"]);return y=function(){return n},n}function k(){var n=Object(v.a)(["\n    font-size: 1.2rem;\n    color: var(--secondary-text-color);\n    margin-bottom: 2rem;\n"]);return k=function(){return n},n}function C(){var n=Object(v.a)(["\n    grid-area: c;\n\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return C=function(){return n},n}function w(){var n=Object(v.a)(["\n    /* width: 100%; */\n    /* height: 100%; */\n    background-color: var(--image-background-color);\n    border-radius: .5rem;\n    padding: 1rem;\n    margin-right: 2rem;\n    grid-area: i;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        object-position: start;\n    }  \n\n    @media all and (max-width: 800px) {\n        align-self: start;\n        grid-row-start: 1;\n        grid-row-end: 3;   \n\n        @media all and (max-width: 500px) {\n            justify-self: center;\n            margin-bottom: 2rem;\n        }\n\n    }\n"]);return w=function(){return n},n}function A(){var n=Object(v.a)(['\n    width: 100%;\n    display: grid;\n    grid-template-columns: 15rem 1fr 25rem;\n    grid-template-rows: 1fr auto;\n    grid-template-areas:    "i c p"\n                            "i c o";\n\n\n    box-shadow: var(--container-shadow);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns : 20rem 1fr;\n        grid-template-rows: 1fr 1fr;\n\n        @media all and (max-width: 500px) {\n            grid-template-columns : 1fr;\n        }\n    }\n\n']);return A=function(){return n},n}var B=m.c.div(A()),P=m.c.div(w()),S=m.c.div(C()),z=m.c.p(k()),T=m.c.p(y()),E=m.c.p(x()),F=m.c.div(g()),M=m.c.div(O()),I=Object(m.c)(j.a)(p()),H=Object(m.c)(j.a)(h()),V=function(n){var e=n.product,t=n.handleDeleteButton,i=n.handleUpdateButton,a=n.activePremisesTab,o=e.name,c=e.available,l=e.eanCode,u=e.price,d=e.image;return Object(r.jsxs)(B,{children:[Object(r.jsx)(P,{children:d&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(d.imagePath),alt:d.alt})}),Object(r.jsxs)(S,{children:[Object(r.jsx)("h2",{children:o}),Object(r.jsx)(z,{children:l})]}),Object(r.jsxs)(F,{children:[Object(r.jsxs)(E,{children:[(u/100).toFixed(2),"\u20ac"]}),Object(r.jsx)(T,{children:Object(f.d)(c,a)})]}),Object(r.jsxs)(M,{children:[Object(r.jsx)(I,{onClick:i,children:"Upravi\u0165"}),Object(r.jsx)(H,{onClick:t,children:"Vymaza\u0165"})]})]})},L=t(32),D=t(31),N=t(20),J=t.n(N),R=t(52),G=t(56),K=t(57);function Q(){var n=Object(v.a)(["\n    background-color: var(--color-red);\n"]);return Q=function(){return n},n}function U(){var n=Object(v.a)(["\n    font-weight: bolder;\n    background-color: var(--primary-color);\n    margin-left: 1rem;\n"]);return U=function(){return n},n}function _(){var n=Object(v.a)(["\n    display:flex;\n    justify-content: flex-end;\n"]);return _=function(){return n},n}function q(){var n=Object(v.a)(["\n    margin-bottom: 3rem;\n\n    :not(:nth-of-type(1)) {\n        h3 {\n            margin-bottom: 1rem;\n        }\n    }\n\n    h4 {\n        margin-bottom: 1rem;\n    }\n\n    div {\n        margin-bottom: 1rem;\n        margin-right: 1rem;\n    }\n"]);return q=function(){return n},n}function W(){var n=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return W=function(){return n},n}function Z(){var n=Object(v.a)(["\n    overflow-y: scroll;\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--background-primary-color);\n    color: var(--primary-text-color);\n\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 45rem;\n\n    position: fixed;\n    z-index: 999999;\n\n    h2{ \n        margin-bottom: 2rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n\n"]);return Z=function(){return n},n}function X(){var n=Object(v.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return X=function(){return n},n}var Y=m.c.div(X()),$=m.c.div(Z()),nn=m.c.button(W()),en=m.c.div(q()),tn=m.c.div(_()),rn=Object(m.c)(j.a)(U()),an=Object(m.c)(j.a)(Q()),on=function(n){var e,t,c,l,u,d,s,b,f=n.close,v=n.applyFilter,m=n.resetFilter,j=Object(o.useState)({}),h=Object(a.a)(j,2),p=h[0],O=h[1],g=function(n){var e=n.target,t=e.name,r=e.value;""!==r?O((function(n){return Object(i.a)(Object(i.a)({},n),{},{filters:Object(i.a)(Object(i.a)({},null===n||void 0===n?void 0:n.filters),{},Object(D.a)({},t,r))})})):Object.keys(null===p||void 0===p?void 0:p.filters).length>1?(null===p||void 0===p||delete p.filters[t],O(Object(i.a)({},p))):(delete p.filters,O(Object(i.a)({},p)))};return Object(o.useEffect)((function(){return function(){O({})}}),[]),J.a.createPortal(Object(r.jsxs)(Y,{children:[Object(r.jsx)(nn,{onClick:f}),Object(r.jsxs)($,{children:[Object(r.jsx)("h2",{children:"Vybra\u0165 filter"}),Object(r.jsxs)(en,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Typ produktu"}),Object(r.jsx)(G.a,{label:"Dioptrick\xe9",isActive:1===(null===p||void 0===p||null===(e=p.filters)||void 0===e?void 0:e.type),handleClick:function(){var n,e;return g({target:{name:"type",value:(null===p||void 0===p||null===(n=p.filters)||void 0===n?void 0:n.type)&&1===(null===p||void 0===p||null===(e=p.filters)||void 0===e?void 0:e.type)?"":1}})}}),Object(r.jsx)(G.a,{label:"Slne\u010dn\xe9",isActive:2===(null===p||void 0===p||null===(t=p.filters)||void 0===t?void 0:t.type),handleClick:function(){var n,e;return g({target:{name:"type",value:(null===p||void 0===p||null===(n=p.filters)||void 0===n?void 0:n.type)&&2===(null===p||void 0===p||null===(e=p.filters)||void 0===e?void 0:e.type)?"":2}})}}),Object(r.jsx)(G.a,{label:"\u0160portov\xe9",isActive:4===(null===p||void 0===p||null===(c=p.filters)||void 0===c?void 0:c.type),handleClick:function(){var n,e;return g({target:{name:"type",value:(null===p||void 0===p||null===(n=p.filters)||void 0===n?void 0:n.type)&&4===(null===p||void 0===p||null===(e=p.filters)||void 0===e?void 0:e.type)?"":4}})}}),Object(r.jsx)(G.a,{label:"Kontaktn\xe9 \u0161osovky",isActive:3===(null===p||void 0===p||null===(l=p.filters)||void 0===l?void 0:l.type),handleClick:function(){var n,e;return g({target:{name:"type",value:(null===p||void 0===p||null===(n=p.filters)||void 0===n?void 0:n.type)&&3===(null===p||void 0===p||null===(e=p.filters)||void 0===e?void 0:e.type)?"":3}})}})]}),Object(r.jsx)("h3",{children:"Filtovat podla:"}),Object(r.jsx)("div",{children:Object(r.jsx)(R.a,{label:"Meno produktu",name:"name",value:(null===p||void 0===p||null===(u=p.filters)||void 0===u?void 0:u.name)||"",handleChange:g})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(R.a,{label:"Zna\u010dka produktu",name:"brand",value:(null===p||void 0===p||null===(d=p.filters)||void 0===d?void 0:d.brand)||"",handleChange:g,list:"brands"}),Object(r.jsx)("datalist",{id:"brands",children:K.a.map((function(n,e){return Object(r.jsx)("option",{value:n},e)}))})]}),Object(r.jsx)("div",{children:Object(r.jsx)(R.a,{label:"Kategoria produktu",name:"category",value:(null===p||void 0===p||null===(s=p.filters)||void 0===s?void 0:s.category)||"",handleChange:g})}),Object(r.jsx)("div",{children:Object(r.jsx)(R.a,{label:"Eank\xf3d produktu",name:"eanCode",value:(null===p||void 0===p||null===(b=p.filters)||void 0===b?void 0:b.eanCode)||"",handleChange:g})})]}),Object(r.jsxs)(tn,{children:[Object(r.jsx)(an,{onClick:function(){return m()},children:"Resetova\u0165 filter"}),Object(r.jsx)(rn,{onClick:function(){return v(p)},children:"Filtrova\u0165"})]})]})]}),document.getElementById("portal"))},cn=t(65);function ln(){var n=Object(v.a)(["\n    cursor: pointer;\n    color: var(--color-red);\n    /* font-weight: bolder; */\n    padding: .5rem 2rem;\n"]);return ln=function(){return n},n}function un(){var n=Object(v.a)(["\n    cursor: pointer;\n    background-color: var(--body-background-primary-color);\n    color: var(--primary-color);\n    font-weight: bolder;\n    padding: .5rem 2rem;\n    margin-left: 1rem;\n"]);return un=function(){return n},n}function dn(){var n=Object(v.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding-right: 3rem;\n"]);return dn=function(){return n},n}var sn=m.c.div(dn()),bn=m.c.button(un()),fn=m.c.button(ln());e.default=function(){var n=Object(u.h)().push,e=Object(o.useContext)(l.a),t=e.closeModal,f=e.showModal,v=e.isLoading,m=e.message,j=Object(o.useState)(""),h=Object(a.a)(j,2),p=h[0],O=h[1],g=Object(o.useState)([]),x=Object(a.a)(g,2),y=x[0],k=x[1],C=Object(o.useState)({limit:10,skip:0}),w=Object(a.a)(C,2),A=w[0],B=w[1],P=Object(o.useState)(!1),S=Object(a.a)(P,2),z=S[0],T=S[1],E=Object(o.useState)(!1),F=Object(a.a)(E,2),M=F[0],I=F[1],H=Object(o.useContext)(c.WarehouseContext),D=H.activePremisesTab,N=H.products,J=H.retailPremisesTabs,R=H.getProductsByQuery,G=H.handleChangePremisesTab,K=H.productCategoryTypeTabs,Q=H.activeCategoryTypeTab,U=H.handleChangeCategoryTypeTab,_=H.deleteProduct,q=H.deleteLenses,W=function(){R({limit:10,skip:0}),T(!1),I(!1)};Object(o.useEffect)((function(){N||R({limit:10}),N&&k(N)}),[N]),Object(o.useEffect)((function(){!p&&N&&0===Q&&R({limit:10})}),[p]);return Object(r.jsxs)("section",{children:[f&&Object(r.jsx)(L.a,{loading:v,title:m,close:t}),z&&Object(r.jsx)(on,{applyFilter:function(n){R(n),T(!1),I(!0)},resetFilter:W,close:function(){return T(!1)}}),Object(r.jsx)(d.a,{title:"Sklad",searchQuery:p,handleSearch:function(){""!==p&&0===Q&&R({query:p})},handleChange:function(n){return O(n.target.value)},handleAddButton:function(){return n("sklad/novy-produkt")}}),Object(r.jsx)(s.a,{items:J,activeIndex:D,setActiveIndex:G}),Object(r.jsxs)(sn,{children:[Object(r.jsx)(s.a,{items:K,activeIndex:Q,setActiveIndex:U}),0===Q&&Object(r.jsxs)("div",{children:[M&&Object(r.jsx)(fn,{onClick:W,children:"reset"}),Object(r.jsx)(bn,{onClick:function(){return T(!0)},children:"Filter"})]})]}),Object(r.jsxs)(b.a,{children:[y.map((function(e,t){return Object(r.jsx)(V,{product:e,activePremisesTab:D,handleUpdateButton:function(){return n("sklad/".concat(e._id))},handleDeleteButton:0===Q?function(){return n=e._id,void _(n);var n}:function(){return q(e._id)}},t)})),Object(r.jsx)(cn.a,{listItems:y,handleClickPrev:function(){0!==A.skip&&(R(Object(i.a)(Object(i.a)({},A),{},{skip:A.skip-10})),B(Object(i.a)(Object(i.a)({},A),{},{skip:A.skip-10})))},handleClickNext:function(){y.length<10||(R(Object(i.a)(Object(i.a)({},A),{},{skip:A.skip+10})),B(Object(i.a)(Object(i.a)({},A),{},{skip:A.skip+10})))}})]})]})}},52:function(n,e,t){"use strict";var r=t(2),i=t(21),a=t(30),o=(t(1),t(5)),c=t(6);function l(){var n=Object(o.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return l=function(){return n},n}function u(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return u=function(){return n},n}var d=Object(c.b)(u()),s=c.c.div(l(),d,d);e.a=function(n){var e=n.handleChange,t=n.label,o=n.name,c=Object(a.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(s,{children:[Object(r.jsx)("input",Object(i.a)({className:"form-input",name:o,onChange:e},c)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(c.value.length?"shrink":""," form-input-label"),children:t}):null]})}},54:function(n,e,t){"use strict";var r=t(2),i=(t(1),t(5)),a=t(6),o=t(14);function c(){var n=Object(i.a)(["\n    /* max-width: 115rem; */\n"]);return c=function(){return n},n}function l(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return l=function(){return n},n}var u=a.c.div(l(),o.e),d=a.c.div(c());e.a=function(n){var e=n.children;return Object(r.jsx)(u,{children:Object(r.jsx)(d,{children:e})})}},56:function(n,e,t){"use strict";var r=t(21),i=t(2),a=t(30),o=(t(1),t(5));function c(){var n=Object(o.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    /* font-weight: ","; */\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return c=function(){return n},n}var l=t(6).c.div(c(),(function(n){return n.isActive?"var(--primary-color)":"var(--body-background-primary-color)"}),(function(n){return n.isActive?"var(--button-font-color)":"var(--secondary-text-color)"}),(function(n){return n.isActive?"border":"normal"}));e.a=function(n){var e=n.label,t=n.isActive,o=n.handleClick,c=Object(a.a)(n,["label","isActive","handleClick"]);return Object(i.jsx)(l,Object(r.a)(Object(r.a)({isActive:t,onClick:o},c),{},{children:e}))}},57:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return o})),t.d(e,"b",(function(){return c}));var r=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"],i=["Acuvue","Adore","Air Optix","Biofinity","Biomedics","Clariti","ColourVue","Comfilcon A","Dailies","Freshlook","Lenjoy","Proclear","Purevision","Soflens"],a=["Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Trnava, City Ar\xe9na"],o=[{id:0,name:"E-shop"},{id:1,name:"Obchodn\xe1 57, Bratislava"},{id:2,name:"Mileti\u010dova 38, Bratislava"},{id:3,name:"Vajnory, Bratislava"},{id:4,name:"Senica, OC Bran\u010d"}],c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n.toString();var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)}},58:function(n,e,t){"use strict";var r=t(2),i=(t(1),t(52)),a=t(5),o=t(6),c=t(28),l=t(14);function u(){var n=Object(a.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return u=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return d=function(){return n},n}function s(){var n=Object(a.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return s=function(){return n},n}function b(){var n=Object(a.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return n},n}function f(){var n=Object(a.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return f=function(){return n},n}function v(){var n=Object(a.a)(["\n    display: flex;\n    color: var(--primary-text-color);\n    justify-content: space-between;\n    margin-bottom: 3rem;\n    ",";    \n\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return v=function(){return n},n}var m=o.c.div(v(),l.e),j=o.c.div(f()),h=o.c.div(b()),p=(o.c.div(s()),Object(o.c)(c.a)(d())),O=Object(o.c)(c.a)(u());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,a=n.handleChange,o=n.title,c=(n.count,n.handleAddButton),l=void 0===c?function(){}:c;return Object(r.jsxs)(m,{children:[Object(r.jsx)(j,{children:Object(r.jsx)("h1",{children:o})}),Object(r.jsxs)(h,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{type:"search",name:"searchbox",value:e,handleChange:a,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(p,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(O,{onClick:l,children:"Prida\u0165"})]})]})}},59:function(n,e,t){"use strict";var r=t(21),i=t(2),a=t(30),o=(t(1),t(5)),c=t(6),l=t(28),u=t(14);function d(){var n=Object(o.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return d=function(){return n},n}function s(){var n=Object(o.a)(["\n    margin-bottom: 3rem;\n    ","\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return s=function(){return n},n}var b=c.c.div(s(),u.e),f=Object(c.c)(l.a)(d(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,o=n.setActiveIndex,c=Object(a.a)(n,["items","activeIndex","setActiveIndex"]);return Object(i.jsx)(b,Object(r.a)(Object(r.a)({},c),{},{children:Object(i.jsx)("ul",{children:e.map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(f,{active:n.id===t,onClick:function(){return o(n.id)},children:n.name})},n.id)}))})}))}},65:function(n,e,t){"use strict";var r=t(2),i=t(10),a=t(1),o=t(60),c=t(5),l=t(6);function u(){var n=Object(c.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return u=function(){return n},n}function d(){var n=Object(c.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return d=function(){return n},n}var s=l.c.div(d()),b=l.c.button(u());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,c=n.handleClickPrev,l=void 0===c?function(){}:c,u=n.handleClickNext,d=void 0===u?function(){}:u,f=Object(a.useState)(!0),v=Object(i.a)(f,2),m=v[0],j=v[1],h=Object(a.useState)(!0),p=Object(i.a)(h,2),O=p[0],g=p[1],x=Object(a.useState)(0),y=Object(i.a)(x,2),k=y[0],C=y[1];Object(a.useEffect)((function(){0===k?j(!0):(j(!1),C(0))}),[t]),Object(a.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?g(!0):g(!1)}),[t]),Object(a.useEffect)((function(){0!==k&&C((function(n){return n--}))}),[l]),Object(a.useEffect)((function(){C((function(n){return n++}))}),[d]);return Object(r.jsxs)(s,{children:[Object(r.jsx)(b,{disabled:m,onClick:function(){l(),0!==k&&C((function(n){return n-1}))},children:Object(r.jsx)(o.b,{})}),Object(r.jsx)(b,{disabled:O,onClick:function(){d(),C((function(n){return n+1}))},children:Object(r.jsx)(o.c,{})})]})}}}]);
//# sourceMappingURL=9.50707b7d.chunk.js.map