(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[17,36],{224:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(21),c=t(32),i=t(10),o=t(1),l=t(19),s=t(71),u=t(82),d=t(18),b=t(3),m=t(52),j=t(117),h=t(31),g=t(51),p=t(64),v=(t(62),t(5)),f=t(6);function O(){var e=Object(v.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return O=function(){return e},e}function x(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n"]);return x=function(){return e},e}function y(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n    margin-bottom: 3rem;\n\n    h4 {\n        margin-top: 1rem;\n    }\n"]);return y=function(){return e},e}function C(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n"]);return C=function(){return e},e}function k(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return k=function(){return e},e}function w(){var e=Object(v.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return w=function(){return e},e}function P(){var e=Object(v.a)(["\n    margin-top: 2rem;\n    \n"]);return P=function(){return e},e}var I=f.c.div(P()),S=f.c.div(w(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),z=f.c.div(k()),L=f.c.div(C()),A=f.c.div(y()),N=f.c.div(x()),M=f.c.select(O()),U=function(e){var n,t,r,c,i,o,l,s,u,d,b,m,j,h=e.product,v=e.handleChange,f=e.selectedImage,O=e.retailNames,x=e.currentUser,y=e.checkParameter,C=e.handleAvailableChange,k=e.handleGlassesParametersChange,w=e.handleGlassesSpecsSizeChange,P=e.handleSpecsChange,U=e.glassesParameters,R=e.setImageModal,D=e.isUpdating;return Object(a.jsxs)(z,{children:[Object(a.jsxs)(L,{children:[Object(a.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(a.jsx)(g.a,{label:"eanCode*",type:"text",name:"name",value:null!==(n=h.eanCode.toString())&&void 0!==n?n:"",handleChange:function(e){return v(e)}}),Object(a.jsx)(g.a,{label:"N\xe1zov doplnku*",type:"text",name:"name",value:null!==(t=h.name)&&void 0!==t?t:"",handleChange:function(e){return v(e)}}),Object(a.jsx)(g.a,{label:"Zna\u010dka",type:"text",name:"brand",value:null!==(r=h.brand)&&void 0!==r?r:"",handleChange:function(e){return v(e)}}),Object(a.jsx)(g.a,{label:"Kateg\xf3ria",type:"text",name:"category",value:null!==(c=h.category)&&void 0!==c?c:"",handleChange:function(e){return v(e)}}),D&&Object(a.jsx)(g.a,{label:"Link",type:"text",name:"link",value:null!==(i=h.link)&&void 0!==i?i:"",handleChange:function(e){return v(e)}}),Object(a.jsx)(p.a,{label:"Popis",name:"description",rows:"5",value:null!==(o=h.description)&&void 0!==o?o:"",handleChange:function(e){return v(e)},required:!0}),Object(a.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(l=h.price.toString())&&void 0!==l?l:"",handleChange:function(e){return v(e)},required:!0}),Object(a.jsx)(I,{children:Object(a.jsxs)(S,{onClick:function(){return R(!0)},hasImage:f,children:[!f&&"Vybra\u0165 obr\xe1zok",f&&Object(a.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(f.imagePath),alt:f.alt})]})})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)(A,{children:[Object(a.jsx)("h3",{children:"Parametre"}),Object(a.jsx)(g.a,{label:"Farebn\xfd k\xf3d",type:"text",name:"colorCode",value:null!==(s=U.colorCode)&&void 0!==s?s:"",handleChange:function(e){return k(e)}}),Object(a.jsxs)("div",{children:[Object(a.jsx)(g.a,{label:"Farba r\xe1mu",type:"text",name:"frameColor",value:null!==(u=U.specs.frameColor)&&void 0!==u?u:"",handleChange:function(e){return P(e)}}),Object(a.jsx)(g.a,{label:"Materi\xe1l r\xe1mu",type:"text",name:"frameMaterial",value:null!==(d=U.specs.frameMaterial)&&void 0!==d?d:"",handleChange:function(e){return P(e)}}),Object(a.jsx)(g.a,{label:"Tvar r\xe1mu",type:"text",name:"frameStyle",value:null!==(b=U.specs.frameStyle)&&void 0!==b?b:"",handleChange:function(e){return P(e)}}),Object(a.jsx)(g.a,{label:"Farba \u0161o\u0161ovky",type:"text",name:"lensColor",value:null!==(m=U.specs.lensColor)&&void 0!==m?m:"",handleChange:function(e){return P(e)}}),Object(a.jsxs)(M,{label:"Pohlavie",type:"text",name:"sex",value:null!==(j=U.specs.sex)&&void 0!==j?j:"",onChange:function(e){return P(e)},children:[Object(a.jsx)("option",{value:"M",children:"P\xe1nske"}),Object(a.jsx)("option",{value:"W",children:"D\xe1mske"}),Object(a.jsx)("option",{value:"D",children:"Detsk\xe9"}),Object(a.jsx)("option",{value:"U",children:"Nez\xe1le\u017e\xed"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Velkos\u0165"}),U.specs.size.map((function(e,n){return Object(a.jsx)(g.a,{label:0===n?"Ve\u013ekos\u0165 o\u010dnice":1===n?"Ve\u013ekos\u0165 mostika":"Ve\u013ekos\u0165 stranice",type:"text",name:"size",value:y(U.specs.size,n),handleChange:function(e){return w(e,n)}},n)}))]})]}),Object(a.jsxs)(N,{children:[Object(a.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),h.available.map((function(e,n){if(4!==n)return Object(a.jsx)(g.a,{label:1===x.admin?O[x.premises-1]:O[n],type:"number",name:"available",value:y(h.available,n),handleChange:function(e){return C(e,n)}},n)}))]})]})]})},R=t(54);function D(){var e=Object(v.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return D=function(){return e},e}function V(){var e=Object(v.a)(["\n    margin-top: 2rem;\n    \n"]);return V=function(){return e},e}function Z(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n\n    h3 {\n        /* margin-bottom: 1rem; */\n    }\n\n    h4 {\n        margin-top: 2rem;\n    }\n"]);return Z=function(){return e},e}function q(){var e=Object(v.a)(["\n    /* width: 45rem; */\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n    /* display: inline-block; */\n    /* padding-bottom: 4rem;  */\n    margin-bottom: 5rem;\n"]);return q=function(){return e},e}function G(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return G=function(){return e},e}var E=f.c.div(G()),T=f.c.div(q()),F=f.c.div(Z()),J=f.c.div(V()),K=f.c.div(D(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),W=function(e){var n,t,r,c,i=e.lenses,o=e.selectedImage,l=e.setImageModal,s=e.handleChange,u=e.handleParameterChange,d=e.checkParameter;return Object(a.jsxs)(E,{children:[Object(a.jsxs)(T,{children:[Object(a.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(a.jsx)(g.a,{label:"N\xe1zov \u0161o\u0161oviek*",type:"text",name:"name",value:null!==(n=i.name)&&void 0!==n?n:"",handleChange:function(e){return s(e)}}),Object(a.jsx)(g.a,{label:"Zna\u010dka*",type:"text",name:"brand",value:null!==(t=i.brand)&&void 0!==t?t:"",handleChange:function(e){return s(e)}}),Object(a.jsx)(p.a,{label:"Popis*",name:"description",rows:"5",value:null!==(r=i.description)&&void 0!==r?r:"",handleChange:function(e){return s(e)},required:!0}),Object(a.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(c=i.price.toString())&&void 0!==c?c:"",handleChange:function(e){return s(e)},required:!0}),Object(a.jsx)(J,{children:Object(a.jsxs)(K,{onClick:function(){return l(!0)},hasImage:o,children:[!o&&"Vybra\u0165 obr\xe1zok",o&&Object(a.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(o.imagePath),alt:o.alt})]})})]}),Object(a.jsxs)(F,{children:[Object(a.jsx)("h3",{children:"Parametre"}),Object(a.jsx)("h4",{children:"Dioptrie"}),Object(R.a)(Array(2)).map((function(e,n){var t=0===n?"minimum*":"maximum*";return Object(a.jsx)("div",{children:Object(a.jsx)(g.a,{label:t,type:"number",name:"dioptersRange",value:d(i.dioptersRange,n),handleChange:function(e){return u(e,n)}})},n)})),Object(a.jsx)("h4",{children:"Cylinder"}),Object(R.a)(Array(2)).map((function(e,n){var t=0===n?"minimum*":"maximum*";return Object(a.jsx)("div",{children:Object(a.jsx)(g.a,{label:t,type:"number",name:"cylinderRange",value:d(i.cylinderRange,n),handleChange:function(e){return u(e,n)}})},n)}))]})]})};function B(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n"]);return B=function(){return e},e}function H(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n"]);return H=function(){return e},e}function Q(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return Q=function(){return e},e}function X(){var e=Object(v.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return X=function(){return e},e}function Y(){var e=Object(v.a)(["\n    margin-top: 2rem;\n    \n"]);return Y=function(){return e},e}var $=f.c.div(Y()),_=f.c.div(X(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),ee=f.c.div(Q()),ne=f.c.div(H()),te=f.c.div(B()),ae=function(e){var n,t,r,c,i,o,l,s=e.product,u=e.handleChange,d=e.selectedImage,b=e.setImageModal,m=e.handleAvailableChange,j=e.checkParameter,h=e.retailNames,v=e.currentUser,f=e.isUpdating;return Object(a.jsxs)(ee,{children:[Object(a.jsxs)(ne,{children:[Object(a.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(a.jsx)(g.a,{label:"eanCode*",type:"text",name:"name",value:null!==(n=s.eanCode.toString())&&void 0!==n?n:"",handleChange:function(e){return u(e)}}),Object(a.jsx)(g.a,{label:"N\xe1zov doplnku*",type:"text",name:"name",value:null!==(t=s.name)&&void 0!==t?t:"",handleChange:function(e){return u(e)}}),Object(a.jsx)(g.a,{label:"Zna\u010dka",type:"text",name:"brand",value:null!==(r=s.brand)&&void 0!==r?r:"",handleChange:function(e){return u(e)}}),Object(a.jsx)(g.a,{label:"Kateg\xf3ria",type:"text",name:"category",value:null!==(c=s.category)&&void 0!==c?c:"",handleChange:function(e){return u(e)}}),f&&Object(a.jsx)(g.a,{label:"Link",type:"text",name:"link",value:null!==(i=s.link)&&void 0!==i?i:"",handleChange:function(e){return u(e)}}),Object(a.jsx)(p.a,{label:"Popis",name:"description",rows:"5",value:null!==(o=s.description)&&void 0!==o?o:"",handleChange:function(e){return u(e)},required:!0}),Object(a.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(l=s.price.toString())&&void 0!==l?l:"",handleChange:function(e){return u(e)},required:!0}),Object(a.jsx)($,{children:Object(a.jsxs)(_,{onClick:function(){return b(!0)},hasImage:d,children:[!d&&"Vybra\u0165 obr\xe1zok",d&&Object(a.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(d.imagePath),alt:d.alt})]})})]}),Object(a.jsxs)(te,{children:[Object(a.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),s.available.map((function(e,n){if(4!==n)return Object(a.jsx)(g.a,{label:1===v.admin?h[v.premises-1]:h[n],type:"number",name:"available",value:j(s.available,n),handleChange:function(e){return m(e,n)}},n)}))]})]})},re=t(28);function ce(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n"]);return ce=function(){return e},e}function ie(){var e=Object(v.a)(["\n    margin-top: 2rem;\n    font-size: 1.4rem;\n\n"]);return ie=function(){return e},e}function oe(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n\n    border-radius: .5rem;\n    margin-bottom: 3rem;\n\n    h4 {\n        margin-top: 1rem;\n    }\n"]);return oe=function(){return e},e}function le(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n"]);return le=function(){return e},e}function se(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n"]);return se=function(){return e},e}function ue(){var e=Object(v.a)(["\n    cursor: pointer;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    background-color: ",";\n    margin: 3rem 0 2rem;\n    min-height: 20rem;\n    position: relative;\n    /* max-width: 45rem; */\n\n    img {\n        width: 100%;\n        object-fit:cover;\n        object-position:center;\n        left: 0;\n        top: 0;\n    }\n"]);return ue=function(){return e},e}function de(){var e=Object(v.a)(["\n    margin-top: 2rem;\n    \n"]);return de=function(){return e},e}var be=f.c.div(de()),me=f.c.div(ue(),(function(e){return e.hasImage?"transparent":"var(--input-background-color)"})),je=f.c.div(se()),he=f.c.div(le()),ge=f.c.div(oe()),pe=Object(f.c)(re.a)(ie()),ve=f.c.div(ce()),fe=function(e){var n,t,r,c,i,o,l,s=e.product,u=e.handleChange,d=e.setImageModal,b=e.selectedImage,m=e.checkParameter,j=e.handleContactLensesChange,h=e.handleAddNewParameter,v=e.contactLensesParameters,f=e.retailNames,O=e.currentUser,x=e.handleAvailableChange,y=e.isUpdating;return Object(a.jsxs)(je,{children:[Object(a.jsxs)(he,{children:[Object(a.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(a.jsx)(g.a,{label:"eanCode*",type:"text",name:"name",value:null!==(n=s.eanCode.toString())&&void 0!==n?n:"",handleChange:function(e){return u(e)}}),Object(a.jsx)(g.a,{label:"N\xe1zov doplnku*",type:"text",name:"name",value:null!==(t=s.name)&&void 0!==t?t:"",handleChange:function(e){return u(e)}}),Object(a.jsx)(g.a,{label:"Zna\u010dka",type:"text",name:"brand",value:null!==(r=s.brand)&&void 0!==r?r:"",handleChange:function(e){return u(e)}}),Object(a.jsx)(g.a,{label:"Kateg\xf3ria",type:"text",name:"category",value:null!==(c=s.category)&&void 0!==c?c:"",handleChange:function(e){return u(e)}}),y&&Object(a.jsx)(g.a,{label:"Link",type:"text",name:"link",value:null!==(i=s.link)&&void 0!==i?i:"",handleChange:function(e){return u(e)}}),Object(a.jsx)(p.a,{label:"Popis",name:"description",rows:"5",value:null!==(o=s.description)&&void 0!==o?o:"",handleChange:function(e){return u(e)},required:!0}),Object(a.jsx)(g.a,{label:"Cena*",type:"text",name:"price",value:null!==(l=s.price.toString())&&void 0!==l?l:"",handleChange:function(e){return u(e)},required:!0}),Object(a.jsx)(be,{children:Object(a.jsxs)(me,{onClick:function(){return d(!0)},hasImage:b,children:[!b&&"Vybra\u0165 obr\xe1zok",b&&Object(a.jsx)("img",{src:"".concat("http://195.110.58.166:8080","/uploads/").concat(b.imagePath),alt:b.alt})]})})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)(ge,{children:[Object(a.jsx)("h3",{children:"Parametre"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Zakrivenie"}),v.allowedCurves.map((function(e,n){return Object(a.jsx)(g.a,{label:n+1,type:"text",name:"allowedCurves",value:m(v.allowedCurves,n),handleChange:function(e){return j(e,n)}},n)})),Object(a.jsx)(pe,{onClick:function(){return h({target:{name:"allowedCurves"}})},children:"Prida\u0165"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Priemery"}),v.allowedDiameters.map((function(e,n){return Object(a.jsx)(g.a,{label:n+1,type:"text",name:"allowedDiameters",value:m(v.allowedDiameters,n),handleChange:function(e){return j(e,n)}},n)})),Object(a.jsx)(pe,{onClick:function(){return h({target:{name:"allowedDiameters"}})},children:"Prida\u0165"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Dioptrie"}),v.dioptersRange.map((function(e,n){var t=0===n?"minimum":"maximum";return Object(a.jsx)(g.a,{label:t,type:"text",name:"dioptersRange",value:m(v.dioptersRange,n),handleChange:function(e){return j(e,n)}},n)}))]})]}),Object(a.jsxs)(ve,{children:[Object(a.jsx)("h3",{children:"Skladov\xe9 z\xe1soby"}),s.available.map((function(e,n){if(4!==n)return Object(a.jsx)(g.a,{label:1===O.admin?f[O.premises-1]:f[n],type:"number",name:"available",value:m(s.available,n),handleChange:function(e){return x(e,n)}},n)}))]})]})]})},Oe=t(56),xe=t(14),ye=t(63);function Ce(){var e=Object(v.a)(["\n    &:not(:last-child) {\n        margin-right: 2rem;\n    }\n"]);return Ce=function(){return e},e}function ke(){var e=Object(v.a)(["\n    padding: 2rem; \n    box-shadow: var(--container-shadow);\n    background-color: var(--container-background-color);\n    border-radius: .5rem;\n    display: inline-block;\n    margin-bottom: 3rem;\n\n    h3 {\n        margin-bottom: 1.5rem;\n    }\n"]);return ke=function(){return e},e}function we(){var e=Object(v.a)(["\n    margin-right: 2rem;\n"]);return we=function(){return e},e}function Pe(){var e=Object(v.a)(["\n\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(v.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n\n"]);return Ie=function(){return e},e}var Se=f.c.div(Ie(),xe.e),ze=Object(f.c)(re.a)(Pe()),Le=Object(f.c)(ye.a)(we()),Ae=f.c.div(ke()),Ne=Object(f.c)(ye.a)(Ce());n.default=function(){var e=Object(b.i)().id,n=Object(o.useContext)(l.a).currentUser,t=Object(o.useContext)(d.a),g=t.closeModal,p=t.message,v=t.isLoading,f=t.showModal,O=t.getMessage,x=t.setShowModal,y=Object(o.useContext)(u.ImageContext),C=y.selectedImage,k=y.setSelectedImage,w=Object(o.useState)(!1),P=Object(i.a)(w,2),I=P[0],S=P[1],z=Object(o.useState)(!1),L=Object(i.a)(z,2),A=L[0],N=L[1],M=Object(o.useContext)(s.WarehouseContext),R=M.eanCode,D=M.product,V=M.lenses,Z=M.contactLensesParameters,q=M.glassesParameters,G=M.handleLensesChange,E=M.handleLensesParameterChange,T=M.createProduct,F=M.updateProduct,J=M.resetProduct,K=M.resetLenses,B=M.resetContactLenses,H=M.resetGlassesParameters,Q=M.createLenses,X=M.updateLenses,Y=M.handleProductChange,$=M.handleProductAvailableChange,_=M.getEanCode,ee=M.handleAddNewParameter,ne=M.handleContactLensesParameterChange,te=M.handleGlassesParameterChange,re=M.handleGlassesParameterSpecsChange,ce=M.handleGlassesSizeChange,ie=M.getSingleProduct,oe=Object(o.useState)(!1),le=Object(i.a)(oe,2),se=le[0],ue=le[1],de=Object(o.useState)({}),be=Object(i.a)(de,2),me=be[0],je=be[1],he=function(e){ue(!0);var n=e.target,t=n.name,a=n.value;if(!A)if(0===me.type){if(Object.keys(me).length>1){if(!window.confirm("Rozpisane polia bud\xfa vymazane"))return;K()}}else if(Object.keys(me).length>2){if(!window.confirm("Rozpisane polia bud\xfa vymazane"))return;J(),B(),H()}je(Object(c.a)({},t,a))},ge=function(e){ue(!0);var n=e.target,t=n.name,a=n.value;if(0===me.type&&G(e),5===me.type&&Y(e),4===me.type&&Y(e),3===me.type&&Y(e),2===me.type&&Y(e),1===me.type&&Y(e),""!==a){var i;if(A)if("name"===t)return void je(Object(r.a)(Object(r.a)({},me),{},(i={},Object(c.a)(i,t,a),Object(c.a)(i,"link",Object(Oe.e)(a)),i)));je(Object(r.a)(Object(r.a)({},me),{},Object(c.a)({},t,a)))}else delete me[t]},pe=function(e,n){var t=e.target,a=t.name,i=t.value,o=D[a];o[n]=""===i?1001:Number(i),$(e,n),je(Object(r.a)(Object(r.a)({},me),{},Object(c.a)({},a,o)))};console.log("PRODUCT OBJECT"),console.log(me);return Object(o.useEffect)((function(){"novy-produkt"===e&&(R?me.type&&ge({target:{name:"eanCode",value:R}}):_())}),[e,R,me.type,me.eanCode,D.type]),Object(o.useEffect)((function(){"novy-produkt"!==e&&(ie(e),N(!0),me.type||he({target:{name:"type",value:D.type}}))}),[e,D.type]),Object(o.useEffect)((function(){D.image&&k(D.image),V.image&&k(V.image)}),[D.image,V.image]),Object(o.useEffect)((function(){return function(){J(),K(),B(),H(),je({}),k(null),N(!1)}}),[]),Object(a.jsxs)("section",{children:[Object(a.jsx)(b.a,{when:se,message:"Chcete opusti\u0165 formul\xe1r?"}),f&&Object(a.jsx)(h.a,{loading:v,title:p,close:g}),I&&Object(a.jsx)(j.a,{close:function(){return S(!1)},setImage:function(e){ue(!0),je(Object(r.a)(Object(r.a)({},me),{},{image:e}))}}),Object(a.jsxs)(Se,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Nov\xfd Produkt"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(Le,{label:"Verejn\xe9",name:"eshop",isActive:D.eshop,handleClick:function(){return ge({target:{name:"eshop",value:!D.eshop}})}}),Object(a.jsx)(ze,{onClick:function(e){if(e.preventDefault(),A)return 0===me.type?(ue(!1),delete me.link,delete me.type,void X(me)):3===me.type?(ue(!1),delete me.type,void F(Object(r.a)(Object(r.a)({},me),{},{contactLenses:{}}))):(ue(!1),delete me.type,void F(me));if(0===me.type){if(!(me.name&&me.brand&&me.description&&me.price&&me.image&&me.dioptersRange&&me.cylinderRange))return x(!0),void O("Povinn\xe9 \xfadaje s\xfa pr\xe1zdne");ue(!1),delete me.type,Q(me)}if(5===me.type||4===me.type||3===me.type||2===me.type||1===me.type){if(!(me.name&&me.price&&me.image))return x(!0),void O("Povinn\xe9 \xfadaje s\xfa pr\xe1zdne");ue(!1),T(me)}},children:"Vytvori\u0165"})]})]}),Object(a.jsxs)(m.a,{children:[!A&&Object(a.jsxs)(Ae,{children:[Object(a.jsx)("h3",{children:"Ak\xfd produkt chcete prida\u0165?"}),Oe.m.map((function(e,n){return Object(a.jsx)(Ne,{label:e.name,value:e.value,name:"type",isActive:e.value===me.type,handleClick:function(){return he({target:{name:"type",value:e.value}})}},n)}))]}),0===me.type&&Object(a.jsx)(W,{lenses:V,selectedImage:C,setImageModal:S,handleChange:ge,handleParameterChange:function(e,n){var t=e.target,a=t.name,i=t.value,o=V[a];o[n]=""===i?1001:Number(i),E(e,n),je(Object(r.a)(Object(r.a)({},me),{},Object(c.a)({},a,o)))},checkParameter:Oe.b}),5===me.type&&Object(a.jsx)(ae,{product:D,isUpdating:A,currentUser:n,retailNames:Oe.n,selectedImage:C,handleChange:ge,setImageModal:S,checkParameter:Oe.b,handleAvailableChange:pe}),3===me.type&&Object(a.jsx)(fe,{product:D,isUpdating:A,retailNames:Oe.n,currentUser:n,selectedImage:C,contactLensesParameters:Z,handleChange:ge,setImageModal:S,checkParameter:Oe.b,handleAddNewParameter:ee,handleAvailableChange:pe,handleContactLensesChange:function(e,n){var t=e.target,a=t.name,i=t.value,o=Z[a];if(o[n]=""===i?1001:i,ne(e,n),""===i)return me.contactLenses[a].length>1?(o.splice(n,1),je(Object(r.a)(Object(r.a)({},me),{},{contactLenses:Object(r.a)(Object(r.a)({},me.contactLenses),{},Object(c.a)({},a,o))}))):delete me.contactLenses[a],void(0===Object.keys(me.contactLenses).length&&delete me.contactLenses);je(Object(r.a)(Object(r.a)({},me),{},{contactLenses:Object(r.a)(Object(r.a)({},me.contactLenses),{},Object(c.a)({},a,o))}))}}),(1===me.type||2===me.type||4===me.type)&&Object(a.jsx)(U,{product:D,isUpdating:A,retailNames:Oe.n,currentUser:n,selectedImage:C,glassesParameters:q,handleChange:ge,setImageModal:S,checkParameter:Oe.b,handleSpecsChange:function(e){ue(!0);var n=e.target,t=n.name,a=n.value;if(re(e),""===a)return delete me.specs[t],void(0===Object.keys(me.specs).length&&delete me.specs);je(Object(r.a)(Object(r.a)({},me),{},{specs:Object(r.a)(Object(r.a)({},me.specs),{},Object(c.a)({},t,a))}))},handleAvailableChange:pe,handleGlassesSpecsSizeChange:function(e,n){var t=e.target,a=t.name,i=t.value,o=q.specs[a];if(o[n]=""===i?1001:i,ce(e,n),""!==i)je(Object(r.a)(Object(r.a)({},me),{},{specs:Object(r.a)(Object(r.a)({},me.specs),{},Object(c.a)({},a,o))}));else{if(me.specs[a].length>1){o[n]=1001;var l=o[0];!1===o.map((function(e){return l===e})).find((function(e){return!1===e}))?je(Object(r.a)(Object(r.a)({},me),{},{specs:Object(r.a)(Object(r.a)({},me.specs),{},Object(c.a)({},a,o))})):delete me.specs[a]}0===Object.keys(me.specs).length&&delete me.specs}},handleGlassesParametersChange:function(e){ue(!0);var n=e.target,t=n.name,a=n.value;te(e),""!==a?je(Object(r.a)(Object(r.a)({},me),{},Object(c.a)({},t,a))):delete me[t]}})]})]})}},54:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(22);var r=t(33);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},62:function(e,n,t){"use strict";var a=t(21),r=t(2),c=t(30),i=(t(1),t(5));function o(){var e=Object(i.a)(["\n    display:flex;\n    align-items: center;\n\n    p {\n        margin-top: 1.8rem;\n        margin-left: 2rem;\n            opacity: .75;\n\n        span {\n            font-weight: 700;\n        }\n    }\n\n    @media all and (max-width: 800px) {\n        flex-direction: column-reverse;\n        align-items: flex-start;\n\n        p {\n            margin-left: unset;\n        }\n    }\n"]);return o=function(){return e},e}var l=t(6).c.div(o());n.a=function(e){var n=e.children,t=e.label,i=e.example,o=Object(c.a)(e,["children","label","example"]);return Object(r.jsxs)(l,Object(a.a)(Object(a.a)({},o),{},{children:[Object(r.jsx)("div",{children:n}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[t+" ",Object(r.jsx)("span",{children:i})]})})]}))}}}]);
//# sourceMappingURL=17.b89d2ac1.chunk.js.map