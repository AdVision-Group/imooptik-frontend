(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[6,28],{220:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(10),i=t(0),c=t.n(i),o=t(17),l=t(88),u=t(57),s=t(16),d=t(2),b=t(50),m=t(30),j=t(89),h=t(66),p=t(31),f=t(49),g=t(78),x=t(58),O=t(7),v=t(8),y=t(61);function C(){var n=Object(O.a)(["\n    margin-top: 2rem;\n"]);return C=function(){return n},n}function k(){var n=Object(O.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: #F5F5F5;\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return k=function(){return n},n}function w(){var n=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 35rem 1fr;\n    /* align-items: center; */\n    /* max-width: 45rem; */\n\n    p {\n        margin-top: 2.5rem;\n        margin-left: 2rem;\n        opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n    @media all and (max-width: 800px) {\n        display: flex;\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n\n        div {\n            width: 100%;\n        }\n    }\n"]);return w=function(){return n},n}function z(){var n=Object(O.a)(["\n    margin: 0 1rem 2rem;\n"]);return z=function(){return n},n}function S(){var n=Object(O.a)(["\n    width:100%;\n    display: flex;\n    /* justify-content: space-evenly; */\n    margin-bottom: 1rem;\n    flex-wrap: wrap;\n\n"]);return S=function(){return n},n}function P(){var n=Object(O.a)(["\n    margin-bottom: 2rem;\n"]);return P=function(){return n},n}var A=v.c.h3(P()),F=v.c.div(S()),I=Object(v.c)(y.a)(z()),D=v.c.div(w()),L=v.c.select(k()),N=v.c.h3(C()),R=t(62),T=function(n){var e,t=n.product,a=n.handleChange,i=n.handleSizeChange,o=n.handleSpecsChange,l=n.handleAvailableChange,u=n.categories,s=n.handleCategoryChange,d=n.activeCategoryIndex,b=n.lensesParameters,m=n.handleParameterChange,j=n.currentUser;return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(A,{children:"Kateg\xf3ria"}),Object(r.jsx)(F,{children:u.map((function(n,e){return Object(r.jsx)(I,{label:n.name,value:n.value,name:"type",isActive:n.value===d,handleClick:function(){return s(n.value)}},e)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Z\xe1kladn\xe9 informacie"}),Object(r.jsx)(x.a,{label:"Unik\xe1tny k\xf3d produktu",example:"napr: TH1590807",children:Object(r.jsx)(f.a,{label:"Ean k\xf3d*",type:"text",name:"eanCode",value:t.eanCode,handleChange:function(n){return a(n)},required:!0})}),Object(r.jsx)(x.a,{label:"N\xe1zov produktu",example:"napr: Tommy Hilfiger",children:Object(r.jsx)(f.a,{label:"N\xe1zov*",type:"text",name:"name",value:t.name,handleChange:function(n){return a(n)},required:!0})}),Object(r.jsxs)(x.a,{label:"Zna\u010dka",example:"napr: Tommy Hilfiger",children:[Object(r.jsx)(f.a,{label:"Zna\u010dka",type:"text",name:"brand",value:t.brand,handleChange:function(n){return a(n)},list:"brands",autoComplete:"off"}),Object(r.jsx)("datalist",{id:"brands",children:R.a.map((function(n){return Object(r.jsx)("option",{value:n},n)}))})]}),Object(r.jsx)(x.a,{label:"Cena v centoch",example:"napr: 1055 = 10,55\u20ac",children:Object(r.jsx)(f.a,{label:"Cena*",type:"number",name:"price",value:t.price.toString(),handleChange:function(n){return a(n)},required:!0})}),Object(r.jsxs)(D,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{label:"Popis",name:"description",rows:"5",value:t.description,handleChange:function(n){return a(n)}})}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Popis produktu"})})]}),4===t.type&&Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)("h3",{children:"Parametre"}),Object(r.jsx)(x.a,{label:"Dioptrie",example:"napr: 0",children:Object(r.jsx)(f.a,{label:"minimum",type:"number",name:"diopters",value:b.diopters[0].toString(),handleChange:function(n){return m(n,0)}})}),Object(r.jsx)(x.a,{label:"Dioptrie",example:"napr: 0",children:Object(r.jsx)(f.a,(e={label:"maximum",type:"number",value:"",name:"diopters"},Object(p.a)(e,"value",b.diopters[1].toString()),Object(p.a)(e,"handleChange",(function(n){return m(n,1)})),e))}),Object(r.jsx)(x.a,{label:"",example:"napr: 8.5",children:Object(r.jsx)(f.a,Object(p.a)({label:"Zakrivenie",type:"number",value:"",name:"curvature"},"value",b.curvature.toString()))}),Object(r.jsx)(x.a,{label:"",example:"napr: 14",children:Object(r.jsx)(f.a,Object(p.a)({label:"Priemer",type:"number",value:"",name:"average"},"value",b.average.toString()))})]}),!(5===t.type||4===t.type)&&Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)("h3",{children:"\u0160pecifikacie"}),Object(r.jsx)(x.a,{label:"Farebn\xfd k\xf3d produktu",example:"napr: #000000",children:Object(r.jsx)(f.a,{label:"Color code",type:"text",name:"colorCode",value:t.colorCode,handleChange:function(n){return a(n)}})}),Object(r.jsx)(x.a,{label:"Pohlavie pre ktor\xe9 je produkt ur\u010den\xfd",example:"",children:Object(r.jsxs)(L,{name:"sex",value:t.specs.sex,onChange:function(n){return o(n)},children:[Object(r.jsx)("option",{value:"M",children:"P\xe1nske"}),Object(r.jsx)("option",{value:"W",children:"D\xe1mske"}),Object(r.jsx)("option",{value:"D",children:"Detsk\xe9"}),Object(r.jsx)("option",{value:"U",children:"Nez\xe1le\u017e\xed"})]})}),Object(r.jsx)(x.a,{label:"Farba",example:"napr: \u010cierna",children:Object(r.jsx)(f.a,{label:"Farba r\xe1mu",type:"text",name:"frameColor",value:t.specs.frameColor,handleChange:function(n){return o(n)}})}),Object(r.jsx)(x.a,{label:"Materi\xe1l",example:"napr: Tit\xe1n",children:Object(r.jsx)(f.a,{label:"Materi\xe1l r\xe1mu",type:"text",name:"frameMaterial",value:t.specs.frameMaterial,handleChange:function(n){return o(n)}})}),Object(r.jsx)(x.a,{label:"Tvar",example:"napr: Okruhl\xfd",children:Object(r.jsx)(f.a,{label:"Tvar r\xe1mu",type:"text",name:"frameStyle",value:t.specs.frameStyle,handleChange:function(n){return o(n)}})}),Object(r.jsx)(x.a,{label:"Farba skla",example:"napr: Prieh\u013eadn\xe1",children:Object(r.jsx)(f.a,{label:"Farba",type:"text",name:"lensColor",value:t.specs.lensColor,handleChange:function(n){return o(n)}})}),Object(r.jsx)(N,{children:"Velikos\u0165"}),t.specs.size.map((function(n,e){return Object(r.jsx)(x.a,{label:"Velkos\u0165",example:"napr: 0",children:Object(r.jsx)(f.a,{label:"".concat(e),type:"number",value:n.toString(),handleChange:function(n){return i(n,e)}})},e)}))]}),Object(r.jsx)(N,{children:"Skladov\xe9 z\xe1soby"}),t&&t.available.map((function(n,e){return Object(r.jsx)(x.a,{label:"Po\u010det kusov na predajni,",example:"napr: 0",children:Object(r.jsx)(f.a,{label:1===j.admin?R.e[j.premises-1]:R.e[e],type:"number",value:n.toString(),handleChange:function(n){return l(n,e)}})},e)}))]})]})};function U(){var n=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 35rem 1fr;\n    /* align-items: center; */\n    /* max-width: 45rem; */\n\n    p {\n        margin-top: 2.5rem;\n        margin-left: 2rem;\n        opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n        @media all and (max-width: 800px) {\n        display: flex;\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n\n        div {\n            width: 100%;\n        }\n    }\n"]);return U=function(){return n},n}var M=v.c.div(U()),B=function(n){var e=n.lense,t=n.handleChange,a=n.handleLensesCylinderRangeChange,i=n.handleLensesDioptersRangeChange;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Z\xe1kladn\xe9 informacie"}),Object(r.jsx)(x.a,{label:"N\xe1zov \u0161o\u0161oviek",example:"napr: Smile",children:Object(r.jsx)(f.a,{label:"N\xe1zov*",type:"text",name:"name",value:e.name,handleChange:function(n){return t(n)},required:!0})}),Object(r.jsx)(x.a,{label:"Zna\u010dka",example:"napr: Zeiss",children:Object(r.jsx)(f.a,{label:"Zna\u010dka",type:"text",name:"brand",value:e.brand,handleChange:function(n){return t(n)}})}),Object(r.jsx)(x.a,{label:"Cena v centoch",example:"napr: 1055 = 10,55\u20ac",children:Object(r.jsx)(f.a,{label:"Cena*",type:"text",name:"price",value:e.price.toString(),handleChange:function(n){return t(n)},required:!0})}),Object(r.jsxs)(M,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{label:"Popis*",name:"description",rows:"5",value:e.description,handleChange:function(n){return t(n)},required:!0})}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Popis produktu"})})]}),Object(r.jsx)("h3",{children:"\u0160pecifikacie"}),e&&e.dioptersRange.map((function(n,e){return Object(r.jsx)(x.a,{label:"Dioptrie",example:"napr: 0",children:Object(r.jsx)(f.a,{label:0===e?"minimum":"maximum",type:"number",value:n.toString(),handleChange:function(n){return i(n,e)}})},e)})),e&&e.cylinderRange.map((function(n,e){return Object(r.jsx)(x.a,{label:"Cylinder",example:"napr: 0",children:Object(r.jsx)(f.a,{label:0===e?"minimum":"maximum",type:"number",value:n.toString(),handleChange:function(n){return a(n,e)}})},e)}))]})},E=t(27),Z=t(26);function q(){var n=Object(O.a)(["\n    margin-right: 2rem;\n"]);return q=function(){return n},n}function V(){var n=Object(O.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 5rem;\n    padding: 6rem;\n    position: relative;\n    max-width: 45rem;\n\n    img {\n        position: absolute;\n        width: 100%;\n        /* max-height: 40rem; */\n        object-fit:cover;\n        object-position:center;\n\n        /* height: 100%; */\n        left: 0;\n        top: 0;\n\n    }\n"]);return V=function(){return n},n}function _(){var n=Object(O.a)(["\n    margin-top: 2rem;\n    \n"]);return _=function(){return n},n}function H(){var n=Object(O.a)(["\n    margin-top: 2rem;\n    /* margin-bottom: 2rem; */\n"]);return H=function(){return n},n}function G(){var n=Object(O.a)(["\n    font-size: 1.4rem;\n"]);return G=function(){return n},n}function J(){var n=Object(O.a)(["\n    font-size: 1.4rem;\n    margin: 0 2rem 0 0;\n    background-color: #DD4C4C;\n"]);return J=function(){return n},n}function W(){var n=Object(O.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n\n    @media all and (max-width: 800px) {\n        flex-wrap: wrap;\n\n        div:nth-child(2) {\n            margin-bottom: 2rem;\n        }\n    }\n"]);return W=function(){return n},n}var K=v.c.div(W(),E.b),X=Object(v.c)(Z.a)(J()),Q=Object(v.c)(Z.a)(G()),Y=v.c.h3(H()),$=v.c.div(_()),nn=v.c.div(V(),(function(n){return n.hasImage?"transparent":"#eee"})),en=Object(v.c)(y.a)(q());e.default=function(){var n=Object(i.useState)(!1),e=Object(a.a)(n,2),t=e[0],c=e[1],p=Object(i.useContext)(o.a).currentUser,f=Object(d.h)().id,g=Object(i.useContext)(l.WarehouseContext),x=g.switchFormButtons,O=g.formToShow,v=g.toggleProductForms,y=g.isUpdating,C=g.activeCategoryIndex,k=g.categories,w=g.toggleDraft,z=g.handleCategoryChange,S=g.handleAvailableChange,P=g.handleSizeChange,A=g.selectImage,F=g.product,I=g.createNewProduct,D=g.updateProduct,L=g.handleProductDelete,N=g.resetProduct,R=g.lenses,U=g.handleLensesChange,M=g.handleLensesDioptersRangeChange,E=g.handleLensesCylinderRangeChange,Z=g.getSigleLenses,q=g.createNewLenses,V=g.updateLenses,_=g.deleteLenses,H=g.getSingleProduct,G=g.handleChange,J=g.handleSpecsChange,W=g.lensesParameters,tn=g.handleParameterChange,rn=Object(i.useContext)(s.a),an=rn.closeModal,cn=rn.isLoading,on=rn.showModal,ln=rn.message,un=Object(i.useContext)(u.ImageContext).selectedImage;return Object(i.useEffect)((function(){"novy-produkt"!==f&&(console.log("formToShow"),console.log(O),console.log("formToShow"),0===O?H(f):Z(f))}),[f]),Object(i.useEffect)((function(){return function(){console.log("UNMOUNT"),N()}}),[]),Object(r.jsxs)("form",{onSubmit:function(n){return function(n){if(n.preventDefault(),0===O){if(!F.imagePath)return void alert("\u017diaden obrazok!");"novy-produkt"===f?(I(F),N()):(D(F),N())}else{if(!R.imagePath)return void alert("\u017diaden obrazok!");"novy-produkt"===f?q(R):V(R)}}(n)},children:[on&&Object(r.jsx)(m.a,{loading:cn,title:ln,close:an}),t&&Object(r.jsx)(j.a,{close:function(){return c(!1)},setImage:A}),Object(r.jsxs)(K,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:y?"Upravi\u0165 produkt":"Prida\u0165 nov\xfd produkt"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(en,{label:"Verejn\xfd",isActive:0===O?F.eshop:R.eshop,handleClick:function(){return w()}}),y&&Object(r.jsx)(X,{onClick:0===O?function(){return L(F._id)}:function(){return _(R._id)},children:"Vymaza\u0165"}),Object(r.jsx)(Q,{type:"submit",children:y?"Upravi\u0165 produkt":"Prida\u0165 product"})]})]}),Object(r.jsxs)(b.a,{children:[!y&&Object(r.jsx)(h.a,{items:x,title:"Ak\xfd produkt chcete prida\u0165?",activeIndex:O,handleClick:v}),0===O?Object(r.jsx)(T,{activeCategoryIndex:C,categories:k,product:F,handleChange:G,handleSizeChange:P,handleSpecsChange:J,handleCategoryChange:z,handleAvailableChange:S,lensesParameters:W,handleParameterChange:tn,currentUser:p}):Object(r.jsx)(B,{lense:R,handleChange:U,handleLensesDioptersRangeChange:M,handleLensesCylinderRangeChange:E}),Object(r.jsx)("div",{children:Object(r.jsxs)($,{children:[Object(r.jsx)(Y,{children:"Obr\xe1zok"}),Object(r.jsxs)(nn,{onClick:function(){return c(!0)},hasImage:un,children:[!un&&"Vybra\u0165 obr\xe1zok",un&&Object(r.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(un.imagePath),alt:un.alt})]})]})})]})]})}},49:function(n,e,t){"use strict";var r=t(1),a=t(19),i=t(28),c=(t(0),t(7)),o=t(8);function l(){var n=Object(c.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return l=function(){return n},n}function u(){var n=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return n},n}var s=Object(o.b)(u()),d=o.c.div(l(),s,s);e.a=function(n){var e=n.handleChange,t=n.label,c=n.name,o=Object(i.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:c,onChange:e},o)),t?Object(r.jsx)("label",{htmlFor:c,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},50:function(n,e,t){"use strict";var r=t(1),a=(t(0),t(7)),i=t(8),c=t(27);function o(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return o=function(){return n},n}var l=i.c.div(o(),c.b);e.a=function(n){var e=n.children;return Object(r.jsx)(l,{children:e})}},52:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(20);var a=t(32);function i(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(a.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},58:function(n,e,t){"use strict";var r=t(19),a=t(1),i=t(28),c=(t(0),t(7));function o(){var n=Object(c.a)(["\n    display:flex;\n    align-items: center;\n\n    p {\n        margin-top: 1.8rem;\n        margin-left: 2rem;\n            opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n    @media all and (max-width: 800px) {\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n    }\n"]);return o=function(){return n},n}var l=t(8).c.div(o());e.a=function(n){var e=n.children,t=n.label,c=n.example,o=Object(i.a)(n,["children","label","example"]);return Object(a.jsxs)(l,Object(r.a)(Object(r.a)({},o),{},{children:[Object(a.jsx)("div",{children:e}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[t+" ",Object(a.jsx)("span",{children:c})]})})]}))}},61:function(n,e,t){"use strict";var r=t(19),a=t(1),i=t(28),c=(t(0),t(7));function o(){var n=Object(c.a)(["\n    display: inline-block;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 700;\n    /* margin-right: 2rem; */\n    background-color: ",";\n    color: ",";\n    padding: .8rem 3rem;\n    border-radius: .2rem;\n    transition: all .2s ease-out;\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return o=function(){return n},n}var l=t(8).c.div(o(),(function(n){return n.isActive?"rgb(235, 172, 1)":"rgba(0,0,0,.06)"}),(function(n){return n.isActive?"#fff":"#000"}));e.a=function(n){var e=n.label,t=n.isActive,c=n.handleClick,o=Object(i.a)(n,["label","isActive","handleClick"]);return Object(a.jsx)(l,Object(r.a)(Object(r.a)({isActive:t,onClick:c},o),{},{children:e}))}},66:function(n,e,t){"use strict";var r=t(1),a=t(0),i=t.n(a),c=t(7),o=t(8),l=t(26);function u(){var n=Object(c.a)(["\n    background-color: ",";\n    font-weight: 700;\n    margin-right: 2rem;\n"]);return u=function(){return n},n}function s(){var n=Object(c.a)(["\n    display: flex;\n    margin: 2rem 0;\n"]);return s=function(){return n},n}function d(){var n=Object(c.a)(["\n    margin-top: 2rem;\n    /* margin-bottom: 2rem; */\n"]);return d=function(){return n},n}var b=o.c.h3(d()),m=o.c.div(s()),j=Object(o.c)(l.a)(u(),(function(n){return n.isActive?"rgb(235, 172, 1)":"#000"}));e.a=function(n){var e=n.title,t=n.activeIndex,a=n.handleClick,c=n.items;return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(b,{children:e}),Object(r.jsx)(m,{children:c.map((function(n,e){return Object(r.jsx)(j,{isActive:t===e,onClick:function(n){return a(n,e)},children:n.name},e)}))})]})}},78:function(n,e,t){"use strict";var r=t(1),a=t(19),i=t(28),c=(t(0),t(7)),o=t(8);function l(){var n=Object(c.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: .5rem .5rem .5rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 25px 0;\n        font-family: inherit;\n        resize: none;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: .6rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n"]);return l=function(){return n},n}function u(){var n=Object(c.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return n},n}var s=Object(o.b)(u()),d=o.c.div(l(),s,s);e.a=function(n){var e=n.handleChange,t=n.label,c=n.name,o=Object(i.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("textarea",Object(a.a)({className:"form-input",name:c,onChange:e},o)),t?Object(r.jsx)("label",{htmlFor:c,className:"".concat(o.value.length?"shrink":""," form-input-label"),children:t}):null]})}},89:function(n,e,t){"use strict";var r=t(1),a=t(10),i=t(0),c=t.n(i),o=t(18),l=t.n(o),u=t(57),s=t(49),d=t(7),b=t(8),m=t(26);function j(){var n=Object(d.a)(["\n    cursor: pointer;\n    outline: none;\n    border: none;\n    padding: .4rem 1rem;\n    border-radius: 50%;\n    color: #fff;\n    background-color: #000;\n    font-size: 1.2rem;\n    font-family: inherit;\n    margin: 0 .5rem;\n\n    &:focus {\n        outline: none;\n    }\n"]);return j=function(){return n},n}function h(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n"]);return h=function(){return n},n}function p(){var n=Object(d.a)(["\n    display: block;\n    margin: 2rem auto 0;\n\n    &:disabled {\n        cursor: not-allowed;\n        background-color: gray;\n    }\n"]);return p=function(){return n},n}function f(){var n=Object(d.a)(["\n    cursor: pointer;\n    outline:none;\n    border: none;\n    background-color: ",";\n    color: #fff;\n    font-weight: ",";\n    font-family: inherit;\n    font-size: 1.2rem;\n    padding: .8rem 1.5rem;\n    border-radius: .2rem;\n    margin-bottom: 2rem;\n    transition: all .3s ease-out;\n\n    &:focus {\n        outline: none;\n    }\n"]);return f=function(){return n},n}function g(){var n=Object(d.a)(["\n    max-width: 18rem;\n    display: flex;\n    justify-content: space-between;\n    margin: 0 auto;\n"]);return g=function(){return n},n}function x(){var n=Object(d.a)(["\n    display: block;\n    width: 100%;\n\n    img {\n        display: block;\n        max-width: 100%;\n        /* width: inherit; */\n    }\n"]);return x=function(){return n},n}function O(){var n=Object(d.a)(["\n    cursor: pointer;\n    display:none;\n    border-radius:50%;\n    position: absolute;\n    border: none;\n    background-color: rgb(235, 172, 1);\n    padding: .5rem .75rem;\n    font-size: 1rem;\n    right: .5rem;\n    top: .5rem;\n\n    outline: none;\n\n    &:focus {\n        outline: none;\n    }\n"]);return O=function(){return n},n}function v(){var n=Object(d.a)(["\n    position: relative;\n    cursor: pointer;\n    width: 20rem;\n    margin: 1rem 0;\n\n    &:hover button {\n        display: block\n    }\n\n    /* &:not(:last-child) {\n        margin-right: 1.5rem;\n    } */\n\n    img {\n        width:100%;\n        height:100%;\n        object-fit: contain;\n        object-position: center;\n    }\n"]);return v=function(){return n},n}function y(){var n=Object(d.a)(["\n    /* max-width: 46rem; */\n\n    /* width: 100%; */\n    /* overflow-x: scroll; */\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    margin: 2rem auto;\n"]);return y=function(){return n},n}function C(){var n=Object(d.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return C=function(){return n},n}function k(){var n=Object(d.a)(['\n    input[type="file"] {\n        position: absolute;\n        left: -999999999rem;\n    }\n    cursor: pointer;\n    background-color: #000;\n    color: #fff;\n    max-width: 18rem;\n    font-size: 1.4rem;\n    font-family: inherit;\n    padding: .8rem 1rem;\n    text-align: center;\n    display: block;\n    border: 1px solid #000;\n    transition: background-color .1s ease-out,\n                color .2s ease-out;\n    outline: none;\n    margin: 0 auto 2rem;\n\n    &:focus {\n        outline:none;\n    }\n\n    &:hover {\n        background-color: transparent;\n        color: #000;\n    }\n']);return k=function(){return n},n}function w(){var n=Object(d.a)(["\n    width:100%;\n    max-width: 50rem;\n    max-height: 60rem;\n\n    overflow-y: scroll;\n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: white;\n\n    position: relative;\n    z-index: 999999;\n\n"]);return w=function(){return n},n}function z(){var n=Object(d.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return z=function(){return n},n}var S=b.c.div(z()),P=b.c.div(w()),A=b.c.label(k()),F=b.c.button(C()),I=b.c.div(y()),D=b.c.div(v()),L=b.c.button(O()),N=b.c.div(x()),R=b.c.div(g()),T=b.c.button(f(),(function(n){return n.isActive?"rgb(235, 172, 1)":"#000"}),(function(n){return n.isActive?"700":"400"})),U=Object(b.c)(m.a)(p()),M=b.c.div(h()),B=b.c.button(j()),E=function(n,e){var t=new XMLHttpRequest;t.onload=function(){var n=new FileReader;n.onloadend=function(){var t=n.result,r=t.indexOf(";"),a=t.slice(r,t.length);e("data:image/png"+a)},n.readAsDataURL(t.response)},t.open("GET",n),t.responseType="blob",t.send()};e.a=function(n){var e=n.close,t=n.setImage,o=Object(i.useContext)(u.ImageContext),d=o.isDisabled,b=o.getImages,m=o.handleDeleteImage,j=o.handleImage,h=o.images,p=o.setSelectedImage,f=o.getNextImages,g=o.getPrevImage,x=Object(i.useState)("upload"),O=Object(a.a)(x,2),v=O[0],y=O[1],C=Object(i.useState)(null),k=Object(a.a)(C,2),w=k[0],z=k[1],Z=Object(i.useState)(""),q=Object(a.a)(Z,2),V=q[0],_=q[1],H=Object(i.useState)(""),G=Object(a.a)(H,2),J=G[0],W=G[1],K=Object(i.useState)(""),X=Object(a.a)(K,2),Q=X[0],Y=X[1],$=function(n,e){n.preventDefault(),y(e),"images"===e&&(h||(console.log("API IMAGE CALL"),b()))};Object(i.useEffect)((function(){w&&_(URL.createObjectURL(w))}),[w]);return l.a.createPortal(Object(r.jsxs)(S,{children:[Object(r.jsx)(F,{onClick:e}),Object(r.jsxs)(P,{children:[Object(r.jsxs)(R,{children:[Object(r.jsx)(T,{isActive:"upload"===v,onClick:function(n){return $(n,"upload")},children:"Nov\xfd obrazok"}),Object(r.jsx)(T,{isActive:"images"===v,onClick:function(n){return $(n,"images")},children:"Obr\xe1zky"})]}),"upload"===v?Object(r.jsxs)("div",{children:[Object(r.jsxs)(A,{htmlFor:"image",children:[Object(r.jsx)("input",{id:"image",type:"file",name:"image",accept:"image/png, image/jpeg",onChange:function(n){return z(n.target.files[0])}}),"Vybra\u0165 obr\xe1zok"]}),V&&Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(N,{children:Object(r.jsx)("img",{src:V})}),Object(r.jsx)(s.a,{label:"N\xe1zov",type:"text",name:"imageName",value:J,handleChange:function(n){return W(n.target.value)}}),Object(r.jsx)(s.a,{label:"Alt",type:"text",name:"imageAlt",value:Q,handleChange:function(n){return Y(n.target.value)}}),Object(r.jsx)(U,{onClick:function(n){return function(n){n.preventDefault(),E(V,(function(n){j(n,J,Q,t,e)}))}(n)},disabled:d,children:"Oreza\u0165 a nahra\u0165"})]})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Nahrane obrazky"}),Object(r.jsx)(I,{children:h&&h.map((function(n){return Object(r.jsxs)(D,{children:[Object(r.jsx)(L,{onClick:function(e){return m(n._id,e)},children:"\u2715"}),Object(r.jsx)("img",{onClick:function(){return function(n){t(n._id),p(n),e()}(n)},src:"".concat("http://195.110.58.166:8080","/uploads/").concat(n.imagePath)})]},n._id)}))}),Object(r.jsxs)(M,{children:[Object(r.jsx)(B,{onClick:function(){return g(2)},children:"<"}),Object(r.jsx)(B,{onClick:function(){return f(2)},children:">"})]})]})]})]}),document.getElementById("portal"))}}}]);
//# sourceMappingURL=6.d8a47084.chunk.js.map