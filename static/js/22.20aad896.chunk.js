(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[22],{232:function(e,n,a){"use strict";a.r(n);var t=a(2),r=a(21),c=a(31),i=a(10),o=a(1),l=a.n(o),s=a(18),u=a(98),d=a(85),b=a(19),m=a(3),j=a(54),h=a(123),v=a(32),g=a(52),p=a(61),f=a(58),O=a(5),x=a(6),y=a(55);function C(){var e=Object(O.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return C=function(){return e},e}function k(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n"]);return k=function(){return e},e}function w(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n    margin-bottom: 3rem;\n\n    h4 {\n        margin-top: 2rem;\n    }\n"]);return w=function(){return e},e}function P(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n"]);return P=function(){return e},e}function S(){var e=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return S=function(){return e},e}function I(){var e=Object(O.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return I=function(){return e},e}function z(){var e=Object(O.a)(["\n    margin-top: 2rem;\n    \n"]);return z=function(){return e},e}function L(){var e=Object(O.a)(["\n    margin-top: 2rem;\n"]);return L=function(){return e},e}var M=Object(x.c)(y.a)(L()),A=x.c.div(z()),N=x.c.div(I(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),B=x.c.div(S()),U=x.c.div(P()),R=x.c.div(w()),D=x.c.div(k()),V=x.c.select(C()),G=function(e){var n,a,r,c,s,u,d,b,m,j,h,v,O,x=e.product,y=e.handleChange,C=e.selectedImage,k=e.retailNames,w=e.currentUser,P=e.checkParameter,S=e.handleAvailableChange,I=e.handleGlassesParametersChange,z=e.handleGlassesSpecsSizeChange,L=e.handleSpecsChange,G=e.glassesParameters,E=e.setImageModal,Z=e.isUpdating,q=Object(o.useState)(!0),F=Object(i.a)(q,2),J=F[0],H=F[1];return console.log(x),Object(o.useEffect)((function(){"Nezna\u010dkov\xe9"===x.brand&&H(!1)}),[J]),Object(t.jsxs)(B,{children:[Object(t.jsxs)(U,{children:[Object(t.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(t.jsx)(g.a,{label:"eanCode*",type:"text",name:"eanCode",value:null!==(n=x.eanCode.toString())&&void 0!==n?n:"",handleChange:function(e){return y(e)}}),Object(t.jsx)(g.a,{label:"N\xe1zov doplnku*",type:"text",name:"name",value:null!==(a=x.name)&&void 0!==a?a:"",handleChange:function(e){return y(e)}}),Object(t.jsx)(M,{label:"Zna\u010dkov\xe9",isActive:J,handleClick:function(){J?(y({target:{name:"brand",value:"Nezna\u010dkov\xe9"}}),H(!1)):(y({target:{name:"brand",value:""}}),H(!0))}}),J&&Object(t.jsxs)(l.a.Fragment,{children:[Object(t.jsx)(g.a,{label:"Zna\u010dka",type:"text",name:"brand",value:null!==(r=x.brand)&&void 0!==r?r:"",handleChange:function(e){return y(e)},list:"brands"}),Object(t.jsx)("datalist",{id:"brands",children:f.a.map((function(e,n){return Object(t.jsx)("option",{value:e},n)}))})]}),Object(t.jsx)(g.a,{label:"Kateg\xf3ria",type:"text",name:"category",value:null!==(c=x.category)&&void 0!==c?c:"",handleChange:function(e){return y(e)}}),Z&&Object(t.jsx)(g.a,{label:"Link",type:"text",name:"link",value:null!==(s=x.link)&&void 0!==s?s:"",handleChange:function(e){return y(e)}}),Object(t.jsx)(p.a,{label:"Popis",name:"description",rows:"5",value:null!==(u=x.description)&&void 0!==u?u:"",handleChange:function(e){return y(e)},required:!0}),Object(t.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(d=x.price.toString())&&void 0!==d?d:"",handleChange:function(e){return y(e)},required:!0}),Object(t.jsx)(A,{children:Object(t.jsxs)(N,{onClick:function(){return E(!0)},hasImage:C,children:[!C&&"Vybra\u0165 obr\xe1zok",C&&Object(t.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(C.imagePath),alt:C.alt})]})})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)(R,{children:[Object(t.jsx)("h3",{children:"Parametre"}),Object(t.jsx)(g.a,{label:"Farebn\xfd k\xf3d",type:"text",name:"colorCode",value:null!==(b=G.colorCode)&&void 0!==b?b:"",handleChange:function(e){return I(e)}}),Object(t.jsxs)("div",{children:[Object(t.jsx)(g.a,{label:"Farba r\xe1mu",type:"text",name:"frameColor",value:null!==(m=G.specs.frameColor)&&void 0!==m?m:"",handleChange:function(e){return L(e)}}),Object(t.jsx)(g.a,{label:"Materi\xe1l r\xe1mu",type:"text",name:"frameMaterial",value:null!==(j=G.specs.frameMaterial)&&void 0!==j?j:"",handleChange:function(e){return L(e)}}),Object(t.jsx)(g.a,{label:"Tvar r\xe1mu",type:"text",name:"frameStyle",value:null!==(h=G.specs.frameStyle)&&void 0!==h?h:"",handleChange:function(e){return L(e)}}),Object(t.jsx)(g.a,{label:"Farba \u0161o\u0161ovky",type:"text",name:"lensColor",value:null!==(v=G.specs.lensColor)&&void 0!==v?v:"",handleChange:function(e){return L(e)}}),Object(t.jsxs)(V,{label:"Pohlavie",type:"text",name:"sex",value:null!==(O=G.specs.sex)&&void 0!==O?O:"",onChange:function(e){return L(e)},children:[Object(t.jsx)("option",{value:"M",children:"P\xe1nske"}),Object(t.jsx)("option",{value:"W",children:"D\xe1mske"}),Object(t.jsx)("option",{value:"D",children:"Detsk\xe9"}),Object(t.jsx)("option",{value:"U",children:"Nez\xe1le\u017e\xed"})]})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h4",{children:"Velkos\u0165"}),G.specs.size.map((function(e,n){return Object(t.jsx)(g.a,{label:0===n?"\u0160\xedrka o\u010dnice (mm)":1===n?"V\xfd\u0161ka o\u010dnice (mm)":2===n?"Ve\u013ekos\u0165 nosn\xedka (mm)":"D\u013a\u017eka stranice (mm)",type:"text",name:"size",value:P(G.specs.size,n),handleChange:function(e){return z(e,n)}},n)}))]})]}),w.admin>=2?Object(t.jsxs)(D,{children:[Object(t.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),x.available.map((function(e,n){if(0!==n)return Object(t.jsx)(g.a,{label:1===w.admin?k[w.premises-1]:k[n],type:"number",name:"available",value:P(x.available,n),handleChange:function(e){return S(e,n)}},n)}))]}):Object(t.jsxs)(D,{children:[Object(t.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),Object(t.jsx)(g.a,{label:(w.admin,k[w.premises]),type:"number",name:"available",value:P(x.available,w.premises),handleChange:function(e){return S(e,w.premises)}})]})]})]})},E=a(56);function Z(){var e=Object(O.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return Z=function(){return e},e}function q(){var e=Object(O.a)(["\n    margin-top: 2rem;\n    \n"]);return q=function(){return e},e}function F(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n\n    h3 {\n        /* margin-bottom: 1rem; */\n    }\n\n    h4 {\n        margin-top: 2rem;\n    }\n"]);return F=function(){return e},e}function J(){var e=Object(O.a)(["\n    /* width: 45rem; */\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n    /* display: inline-block; */\n    /* padding-bottom: 4rem;  */\n    margin-bottom: 5rem;\n"]);return J=function(){return e},e}function H(){var e=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return H=function(){return e},e}var K=x.c.div(H()),T=x.c.div(J()),W=x.c.div(F()),Q=x.c.div(q()),X=x.c.div(Z(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),Y=function(e){var n,a,r,c,i,o,l=e.lenses,s=e.selectedImage,u=e.setImageModal,d=e.handleChange,b=e.handleParameterChange,m=e.checkParameter;return Object(t.jsxs)(K,{children:[Object(t.jsxs)(T,{children:[Object(t.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(t.jsx)(g.a,{label:"eanCode*",type:"text",name:"eanCode",value:null!==(n=null===l||void 0===l||null===(a=l.eanCode)||void 0===a?void 0:a.toString())&&void 0!==n?n:"",handleChange:function(e){return d(e)}}),Object(t.jsx)(g.a,{label:"N\xe1zov \u0161o\u0161oviek*",type:"text",name:"name",value:null!==(r=l.name)&&void 0!==r?r:"",handleChange:function(e){return d(e)}}),Object(t.jsx)(g.a,{label:"Zna\u010dka*",type:"text",name:"brand",value:null!==(c=l.brand)&&void 0!==c?c:"",handleChange:function(e){return d(e)}}),Object(t.jsx)(p.a,{label:"Popis*",name:"description",rows:"5",value:null!==(i=l.description)&&void 0!==i?i:"",handleChange:function(e){return d(e)},required:!0}),Object(t.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(o=l.price.toString())&&void 0!==o?o:"",handleChange:function(e){return d(e)},required:!0}),Object(t.jsx)(Q,{children:Object(t.jsxs)(X,{onClick:function(){return u(!0)},hasImage:s,children:[!s&&"Vybra\u0165 obr\xe1zok",s&&Object(t.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(s.imagePath),alt:s.alt})]})})]}),Object(t.jsxs)(W,{children:[Object(t.jsx)("h3",{children:"Parametre"}),Object(t.jsx)("h4",{children:"Dioptrie"}),Object(E.a)(Array(2)).map((function(e,n){var a=0===n?"minimum*":"maximum*";return Object(t.jsx)("div",{children:Object(t.jsx)(g.a,{label:a,type:"number",name:"dioptersRange",value:m(l.dioptersRange,n),handleChange:function(e){return b(e,n)}})},n)})),Object(t.jsx)("h4",{children:"Cylinder"}),Object(E.a)(Array(2)).map((function(e,n){var a=0===n?"minimum*":"maximum*";return Object(t.jsx)("div",{children:Object(t.jsx)(g.a,{label:a,type:"number",name:"cylinderRange",value:m(l.cylinderRange,n),handleChange:function(e){return b(e,n)}})},n)}))]})]})};function $(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n"]);return $=function(){return e},e}function _(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n"]);return _=function(){return e},e}function ee(){var e=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return ee=function(){return e},e}function ne(){var e=Object(O.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return ne=function(){return e},e}function ae(){var e=Object(O.a)(["\n    margin-top: 2rem;\n    \n"]);return ae=function(){return e},e}var te=x.c.div(ae()),re=x.c.div(ne(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),ce=x.c.div(ee()),ie=x.c.div(_()),oe=x.c.div($()),le=function(e){var n,a,r,c,i,o,l,s=e.product,u=e.handleChange,d=e.selectedImage,b=e.setImageModal,m=e.handleAvailableChange,j=e.checkParameter,h=e.retailNames,v=e.currentUser,f=e.isUpdating;return Object(t.jsxs)(ce,{children:[Object(t.jsxs)(ie,{children:[Object(t.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(t.jsx)(g.a,{label:"eanCode*",type:"text",name:"name",value:null!==(n=s.eanCode.toString())&&void 0!==n?n:"",handleChange:function(e){return u(e)}}),Object(t.jsx)(g.a,{label:"N\xe1zov doplnku*",type:"text",name:"name",value:null!==(a=s.name)&&void 0!==a?a:"",handleChange:function(e){return u(e)}}),Object(t.jsx)(g.a,{label:"Zna\u010dka",type:"text",name:"brand",value:null!==(r=s.brand)&&void 0!==r?r:"",handleChange:function(e){return u(e)}}),Object(t.jsx)(g.a,{label:"Kateg\xf3ria",type:"text",name:"category",value:null!==(c=s.category)&&void 0!==c?c:"",handleChange:function(e){return u(e)}}),f&&Object(t.jsx)(g.a,{label:"Link",type:"text",name:"link",value:null!==(i=s.link)&&void 0!==i?i:"",handleChange:function(e){return u(e)}}),Object(t.jsx)(p.a,{label:"Popis",name:"description",rows:"5",value:null!==(o=s.description)&&void 0!==o?o:"",handleChange:function(e){return u(e)},required:!0}),Object(t.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(l=s.price.toString())&&void 0!==l?l:"",handleChange:function(e){return u(e)},required:!0}),Object(t.jsx)(te,{children:Object(t.jsxs)(re,{onClick:function(){return b(!0)},hasImage:d,children:[!d&&"Vybra\u0165 obr\xe1zok",d&&Object(t.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(d.imagePath),alt:d.alt})]})})]}),v.admin>=2?Object(t.jsxs)(oe,{children:[Object(t.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),s.available.map((function(e,n){if(0!==n)return Object(t.jsx)(g.a,{label:1===v.admin?h[v.premises-1]:h[n],type:"number",name:"available",value:j(s.available,n),handleChange:function(e){return m(e,n)}},n)}))]}):Object(t.jsxs)(oe,{children:[Object(t.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),Object(t.jsx)(g.a,{label:(v.admin,h[v.premises]),type:"number",name:"available",value:j(s.available,v.premises),handleChange:function(e){return m(e,v.premises)}})]})]})},se=a(28);function ue(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n"]);return ue=function(){return e},e}function de(){var e=Object(O.a)(["\n    margin-top: 2rem;\n    font-size: 1.4rem;\n\n"]);return de=function(){return e},e}function be(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n    margin-bottom: 3rem;\n\n    h4 {\n        margin-top: 1rem;\n    }\n"]);return be=function(){return e},e}function me(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n"]);return me=function(){return e},e}function je(){var e=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return je=function(){return e},e}function he(){var e=Object(O.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return he=function(){return e},e}function ve(){var e=Object(O.a)(["\n    margin-top: 2rem;\n    \n"]);return ve=function(){return e},e}var ge=x.c.div(ve()),pe=x.c.div(he(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),fe=x.c.div(je()),Oe=x.c.div(me()),xe=x.c.div(be()),ye=Object(x.c)(se.a)(de()),Ce=x.c.div(ue()),ke=function(e){var n,a,r,c,i,o,l,s=e.product,u=e.handleChange,d=e.setImageModal,b=e.selectedImage,m=e.checkParameter,j=e.handleContactLensesChange,h=e.handleAddNewParameter,v=e.contactLensesParameters,O=e.retailNames,x=e.currentUser,y=e.handleAvailableChange,C=e.isUpdating;return Object(t.jsxs)(fe,{children:[Object(t.jsxs)(Oe,{children:[Object(t.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(t.jsx)(g.a,{label:"eanCode*",type:"text",name:"name",value:null!==(n=s.eanCode.toString())&&void 0!==n?n:"",handleChange:function(e){return u(e)}}),Object(t.jsx)(g.a,{label:"N\xe1zov doplnku*",type:"text",name:"name",value:null!==(a=s.name)&&void 0!==a?a:"",handleChange:function(e){return u(e)}}),Object(t.jsx)(g.a,{label:"Zna\u010dka",type:"text",name:"brand",value:null!==(r=s.brand)&&void 0!==r?r:"",handleChange:function(e){return u(e)},list:"brands"}),Object(t.jsx)("datalist",{id:"brands",children:f.c.map((function(e,n){return Object(t.jsx)("option",{value:e},n)}))}),Object(t.jsx)(g.a,{label:"Kateg\xf3ria",type:"text",name:"category",value:null!==(c=s.category)&&void 0!==c?c:"",handleChange:function(e){return u(e)}}),C&&Object(t.jsx)(g.a,{label:"Link",type:"text",name:"link",value:null!==(i=s.link)&&void 0!==i?i:"",handleChange:function(e){return u(e)}}),Object(t.jsx)(p.a,{label:"Popis",name:"description",rows:"5",value:null!==(o=s.description)&&void 0!==o?o:"",handleChange:function(e){return u(e)},required:!0}),Object(t.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(l=s.price.toString())&&void 0!==l?l:"",handleChange:function(e){return u(e)},required:!0}),Object(t.jsx)(ge,{children:Object(t.jsxs)(pe,{onClick:function(){return d(!0)},hasImage:b,children:[!b&&"Vybra\u0165 obr\xe1zok",b&&Object(t.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(b.imagePath),alt:b.alt})]})})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)(xe,{children:[Object(t.jsx)("h3",{children:"Parametre"}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h4",{children:"Zakrivenie"}),v.allowedCurves.map((function(e,n){return Object(t.jsx)(g.a,{label:n+1,type:"text",name:"allowedCurves",value:m(v.allowedCurves,n),handleChange:function(e){return j(e,n)}},n)})),Object(t.jsx)(ye,{onClick:function(){return h({target:{name:"allowedCurves"}})},children:"Prida\u0165"})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h4",{children:"Priemery"}),v.allowedDiameters.map((function(e,n){return Object(t.jsx)(g.a,{label:n+1,type:"text",name:"allowedDiameters",value:m(v.allowedDiameters,n),handleChange:function(e){return j(e,n)}},n)})),Object(t.jsx)(ye,{onClick:function(){return h({target:{name:"allowedDiameters"}})},children:"Prida\u0165"})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h4",{children:"Dioptrie"}),v.dioptersRange.map((function(e,n){var a=0===n?"minimum":"maximum";return Object(t.jsx)(g.a,{label:a,type:"text",name:"dioptersRange",value:m(v.dioptersRange,n),handleChange:function(e){return j(e,n)}},n)}))]})]}),x.admin>=2?Object(t.jsxs)(Ce,{children:[Object(t.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),s.available.map((function(e,n){if(0!==n)return Object(t.jsx)(g.a,{label:1===x.admin?O[x.premises-1]:O[n],type:"number",name:"available",value:m(s.available,n),handleChange:function(e){return y(e,n)}},n)}))]}):Object(t.jsxs)(Ce,{children:[Object(t.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),Object(t.jsx)(g.a,{label:(x.admin,O[x.premises]),type:"number",name:"available",value:m(s.available,x.premises),handleChange:function(e){return y(e,x.premises)}})]})]})]})};function we(){var e=Object(O.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return we=function(){return e},e}function Pe(){var e=Object(O.a)(["\n    margin-top: 2rem;\n    \n"]);return Pe=function(){return e},e}function Se(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n"]);return Se=function(){return e},e}function Ie(){var e=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return Ie=function(){return e},e}var ze=x.c.div(Ie()),Le=x.c.div(Se()),Me=x.c.div(Pe()),Ae=x.c.div(we(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),Ne=function(e){var n,a,r,c=e.product,i=(e.isUpdating,e.handleChange),o=e.selectedImage,l=e.setImageModal;return Object(t.jsx)(ze,{children:Object(t.jsxs)(Le,{children:[Object(t.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(t.jsx)(g.a,{label:"N\xe1zov slu\u017eby*",type:"text",name:"name",value:null!==(n=c.name)&&void 0!==n?n:"",handleChange:function(e){return i(e)}}),Object(t.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(a=c.price.toString())&&void 0!==a?a:"",handleChange:function(e){return i(e)},required:!0}),Object(t.jsx)(p.a,{label:"Popis",name:"description",rows:"5",value:null!==(r=c.description)&&void 0!==r?r:"",handleChange:function(e){return i(e)},required:!0}),Object(t.jsx)(Me,{children:Object(t.jsxs)(Ae,{onClick:function(){return l(!0)},hasImage:o,children:[!o&&"Vybra\u0165 obr\xe1zok",o&&Object(t.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(o.imagePath),alt:o.alt})]})})]})})},Be=a(62),Ue=a(14);function Re(){var e=Object(O.a)(["\n    &:not(:last-child) {\n        margin-right: 2rem;\n    }\n"]);return Re=function(){return e},e}function De(){var e=Object(O.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n    display: inline-block;\n    margin-bottom: 3rem;\n\n    h3 {\n        margin-bottom: 1.5rem;\n    }\n"]);return De=function(){return e},e}function Ve(){var e=Object(O.a)(["\n    margin-right: 2rem;\n"]);return Ve=function(){return e},e}function Ge(){var e=Object(O.a)(["\n\n"]);return Ge=function(){return e},e}function Ee(){var e=Object(O.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n\n"]);return Ee=function(){return e},e}var Ze=x.c.div(Ee(),Ue.e),qe=Object(x.c)(se.a)(Ge()),Fe=Object(x.c)(y.a)(Ve()),Je=x.c.div(De()),He=Object(x.c)(y.a)(Re());n.default=function(){var e=Object(m.i)().id,n=Object(o.useContext)(s.a).currentUser,a=Object(o.useContext)(b.a),l=a.closeModal,g=a.message,p=a.isLoading,O=a.showModal,x=a.getMessage,y=a.setShowModal,C=Object(o.useContext)(d.ImageContext),k=C.selectedImage,w=C.setSelectedImage,P=Object(o.useState)(!1),S=Object(i.a)(P,2),I=S[0],z=S[1],L=Object(o.useState)(!1),M=Object(i.a)(L,2),A=M[0],N=M[1],B=Object(o.useContext)(u.WarehouseContext),U=B.eanCode,R=B.product,D=B.lenses,V=B.contactLensesParameters,E=B.glassesParameters,Z=B.handleLensesChange,q=B.handleLensesParameterChange,F=B.createProduct,J=B.updateProduct,H=B.resetProduct,K=B.resetLenses,T=B.resetContactLenses,W=B.resetGlassesParameters,Q=B.createLenses,X=B.updateLenses,$=B.handleProductChange,_=B.handleProductAvailableChange,ee=B.getEanCode,ne=B.handleAddNewParameter,ae=B.handleContactLensesParameterChange,te=B.handleGlassesParameterChange,re=B.handleGlassesParameterSpecsChange,ce=B.handleGlassesSizeChange,ie=B.getSingleProduct,oe=Object(o.useState)(!1),se=Object(i.a)(oe,2),ue=se[0],de=se[1],be=Object(o.useState)({}),me=Object(i.a)(be,2),je=me[0],he=me[1],ve=function(e){de(!0);var n=e.target,a=n.name,t=n.value;if(!A)if(0===je.type){if(Object.keys(je).length>2){if(!window.confirm("Rozpisane polia bud\xfa vymazane"))return;K()}}else if(Object.keys(je).length>2){if(!window.confirm("Rozpisane polia bud\xfa vymazane"))return;H(),T(),W()}he(Object(c.a)({},a,t))},ge=function(e){de(!0);var n=e.target,a=n.name,t=n.value;if(0===je.type&&Z(e),6===je.type&&$(e),5===je.type&&$(e),4===je.type&&$(e),3===je.type&&$(e),2===je.type&&$(e),1===je.type&&$(e),""!==t){var i;if(A)if("name"===a)return void he(Object(r.a)(Object(r.a)({},je),{},(i={},Object(c.a)(i,a,t),Object(c.a)(i,"link",Object(Be.e)(t)),i)));he(Object(r.a)(Object(r.a)({},je),{},Object(c.a)({},a,t)))}else delete je[a]},pe=function(e,n){var a=e.target,t=a.name,i=a.value,o=R[t];o[n]=""===i?1001:Number(i),_(e,n),he(Object(r.a)(Object(r.a)({},je),{},Object(c.a)({},t,o)))};return Object(o.useEffect)((function(){"novy-produkt"===e&&(U?void 0!==je.type&&ge({target:{name:"eanCode",value:U}}):ee())}),[e,U,je.type,je.eanCode,R.type]),Object(o.useEffect)((function(){"novy-produkt"!==e&&(ie(e),N(!0),je.type||ve({target:{name:"type",value:R.type}}))}),[e,R.type]),Object(o.useEffect)((function(){R.image&&w(R.image),D.image&&w(D.image)}),[R.image,D.image]),Object(o.useEffect)((function(){return function(){H(),K(),T(),W(),he({}),w(null),N(!1)}}),[]),Object(t.jsxs)("section",{children:[Object(t.jsx)(m.a,{when:ue,message:"Chcete opusti\u0165 formul\xe1r?"}),O&&Object(t.jsx)(v.a,{loading:p,title:g,close:l}),I&&Object(t.jsx)(h.a,{close:function(){return z(!1)},setImage:function(e){de(!0),he(Object(r.a)(Object(r.a)({},je),{},{image:e}))}}),Object(t.jsxs)(Ze,{children:[Object(t.jsx)("div",{children:Object(t.jsx)("h1",{children:A?"Upravi\u0165 produkt":"Nov\xfd produkt"})}),Object(t.jsxs)("div",{children:[Object(t.jsx)(Fe,{label:"Verejn\xe9",name:"eshop",isActive:R.eshop,handleClick:function(){return ge({target:{name:"eshop",value:!R.eshop}})}}),Object(t.jsx)(qe,{onClick:function(e){e.preventDefault();var a=Object(r.a)({},je);if(n.admin<2?a.available&&(a=Object(r.a)(Object(r.a)({},je),{},{available:je.available[n.premises]})):a.available&&(a=Object(r.a)(Object(r.a)({},je),{},{available:a.available?a.available.map((function(e){return 1001===e?0:e})):[0,0,0,0,0]})),A)return 0===a.type?(de(!1),delete a.link,delete a.type,void X(a)):3===a.type?(de(!1),delete a.type,void J(Object(r.a)(Object(r.a)({},a),{},{contactLenses:{}}))):(de(!1),delete a.type,void J(a));if(0===a.type){if(!(a.name&&a.brand&&a.description&&a.price&&a.image&&a.dioptersRange&&a.cylinderRange))return y(!0),void x("Povinn\xe9 \xfadaje s\xfa pr\xe1zdne");de(!1),delete a.type,Q(a)}if(6===a.type||5===a.type||4===a.type||3===a.type||2===a.type||1===a.type){if(!(a.name&&a.price&&a.image))return y(!0),void x("Povinn\xe9 \xfadaje s\xfa pr\xe1zdne");de(!1),F(a)}},children:A?"Upravi\u0165":"Vytvori\u0165"})]})]}),Object(t.jsxs)(j.a,{children:[!A&&Object(t.jsxs)(Je,{children:[Object(t.jsx)("h3",{children:"Ak\xfd produkt chcete prida\u0165?"}),Be.m.map((function(e,n){return Object(t.jsx)(He,{label:e.name,value:e.value,name:"type",isActive:e.value===je.type,handleClick:function(){return ve({target:{name:"type",value:e.value}})}},n)}))]}),0===je.type&&Object(t.jsx)(Y,{lenses:D,selectedImage:k,setImageModal:z,handleChange:ge,handleParameterChange:function(e,n){var a=e.target,t=a.name,i=a.value,o=D[t];o[n]=""===i?1001:Number(i),q(e,n),he(Object(r.a)(Object(r.a)({},je),{},Object(c.a)({},t,o)))},checkParameter:Be.b}),6===je.type&&Object(t.jsx)(Ne,{product:R,isUpdating:A,handleChange:ge,selectedImage:k,setImageModal:z}),5===je.type&&Object(t.jsx)(le,{product:R,isUpdating:A,currentUser:n,retailNames:f.d,selectedImage:k,handleChange:ge,setImageModal:z,checkParameter:Be.b,handleAvailableChange:pe}),3===je.type&&Object(t.jsx)(ke,{product:R,isUpdating:A,retailNames:f.d,currentUser:n,selectedImage:k,contactLensesParameters:V,handleChange:ge,setImageModal:z,checkParameter:Be.b,handleAddNewParameter:ne,handleAvailableChange:pe,handleContactLensesChange:function(e,n){var a=e.target,t=a.name,i=a.value,o=V[t];if(o[n]=""===i?1001:i,ae(e,n),""===i)return je.contactLenses[t].length>1?(o.splice(n,1),he(Object(r.a)(Object(r.a)({},je),{},{contactLenses:Object(r.a)(Object(r.a)({},je.contactLenses),{},Object(c.a)({},t,o))}))):delete je.contactLenses[t],void(0===Object.keys(je.contactLenses).length&&delete je.contactLenses);he(Object(r.a)(Object(r.a)({},je),{},{contactLenses:Object(r.a)(Object(r.a)({},je.contactLenses),{},Object(c.a)({},t,o))}))}}),(1===je.type||2===je.type||4===je.type)&&Object(t.jsx)(G,{product:R,isUpdating:A,retailNames:f.d,currentUser:n,selectedImage:k,glassesParameters:E,handleChange:ge,setImageModal:z,checkParameter:Be.b,handleSpecsChange:function(e){de(!0);var n=e.target,a=n.name,t=n.value;if(re(e),""===t)return delete je.specs[a],void(0===Object.keys(je.specs).length&&delete je.specs);he(Object(r.a)(Object(r.a)({},je),{},{specs:Object(r.a)(Object(r.a)({},je.specs),{},Object(c.a)({},a,t))}))},handleAvailableChange:pe,handleGlassesSpecsSizeChange:function(e,n){var a=e.target,t=a.name,i=a.value,o=E.specs[t];if(o[n]=""===i?1001:i,ce(e,n),""!==i)he(Object(r.a)(Object(r.a)({},je),{},{specs:Object(r.a)(Object(r.a)({},je.specs),{},Object(c.a)({},t,o))}));else{if(je.specs[t].length>1){o[n]=1001;var l=o[0];!1===o.map((function(e){return l===e})).find((function(e){return!1===e}))?he(Object(r.a)(Object(r.a)({},je),{},{specs:Object(r.a)(Object(r.a)({},je.specs),{},Object(c.a)({},t,o))})):delete je.specs[t]}0===Object.keys(je.specs).length&&delete je.specs}},handleGlassesParametersChange:function(e){de(!0);var n=e.target,a=n.name,t=n.value;te(e),""!==t?he(Object(r.a)(Object(r.a)({},je),{},Object(c.a)({},a,t))):delete je[a]}})]})]})}},58:function(e,n,a){"use strict";a.d(n,"a",(function(){return t})),a.d(n,"c",(function(){return r})),a.d(n,"d",(function(){return c})),a.d(n,"e",(function(){return i})),a.d(n,"b",(function(){return o}));var t=["Adidas","Armani Exchange","Arnette","Blackfin","Blumarine","Burberry","Bvlgari","Calvin Klein","Carolina Herrera","Carrera","David Beckham","Dior","Dolce & Gabbana","Elle","Emporio Armani","Esprit","Etnia Barcelona","Fendi","Fossil","Furla","Giorgio Armani","Givenchy","Gucci","Guess","H.I.S","Hawkers","Hugo Boss","Jaguar","Jimmy Choo","Lacoste","Liu Jo","Marc Jacobs","Max Mara","Max&Co","Meller","Mexx","Michael Kors","Moschino","Oakley","Persol","Polaroid","Police","Polo Ralph Lauren","Prada","Prada Linea Rossa","Ralph","Ralph Lauren","Ray-Ban","Salvatore Ferragamo","Smith","Strellson","Tiffany&Co.","Tom Ford","Tommy Hilfiger","Versace","Vogue"],r=["Acuvue","Adore","Air Optix","Biofinity","Biomedics","Clariti","ColourVue","Comfilcon A","Dailies","Freshlook","Lenjoy","Proclear","Purevision","Soflens"],c=["Obchodn\xe1 57, Bratislava","Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d"],i=[{id:0,name:"E-shop"},{id:1,name:"Obchodn\xe1 57, Bratislava"},{id:2,name:"Mileti\u010dova 38, Bratislava"},{id:3,name:"Vajnory, Bratislava"},{id:4,name:"Senica, OC Bran\u010d"}],o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.toString();var n=0;return e.includes(",")?1===e.split(",")[1].length?(n=e.split(",")[0]+e.split(",")[1]+"0",Number(n)):(n=e.split(",")[0]+e.split(",")[1],Number(n)):Number(100*e)}}}]);
//# sourceMappingURL=22.20aad896.chunk.js.map