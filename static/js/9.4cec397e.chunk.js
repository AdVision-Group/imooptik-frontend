(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[9],{216:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(3),c=t(0),i=t(37),l=t(8),s=t(55),j=t(17),d=t(83),o=t(16),u=t(5),b=t(6),O=t(15),h=t(36);function m(){var e=Object(u.a)(["\n    margin-top: 2rem;\n"]);return m=function(){return e},e}function v(){var e=Object(u.a)(["\n    margin-bottom: 2rem;\n"]);return v=function(){return e},e}function f(){var e=Object(u.a)(["\n    margin-left: 2rem;\n    font-size: 1.4rem;\n"]);return f=function(){return e},e}function x(){var e=Object(u.a)(["\n    width: 75%;\n"]);return x=function(){return e},e}function g(){var e=Object(u.a)(['\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: center;\n\n    input {\n        margin-bottom: 0 !important;\n    }\n\n    div:not(:last-child) {\n        padding-right: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns: 1fr 1fr;\n        grid-template-areas:\n            "a a"\n            "b c";\n\n        div:nth-child(1){\n            grid-area: a;\n            margin-bottom: 0;\n        }\n        div:nth-child(2){\n            grid-area: b;\n            margin-bottom: 2rem;\n\n        }\n        div:nth-child(3){\n            grid-area: c;\n            margin-bottom: 2rem;\n        }\n    }\n']);return g=function(){return e},e}function p(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    div:not(:last-child) {\n        padding-right: 2rem;\n    }\n"]);return p=function(){return e},e}function y(){var e=Object(u.a)(["\n    input {\n        margin-bottom: 0 !important;\n    }\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: start;\n\n    @media all and (max-width: 800px) {\n        grid-template-columns: 1fr;\n    }\n"]);return k=function(){return e},e}function C(){var e=Object(u.a)(["\n    background-color: #DD4C4C;\n    font-size: 1.4rem;\n"]);return C=function(){return e},e}function w(){var e=Object(u.a)(["\n    font-size: 4.5rem;\n    font-weight: 700;\n"]);return w=function(){return e},e}function z(){var e=Object(u.a)(["\n    /* padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08); */\n    margin-right: 2rem;\n\n"]);return z=function(){return e},e}function P(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n"]);return P=function(){return e},e}var S=b.c.div(P(),h.b),D=b.c.div(z()),E=(b.c.div(w()),Object(b.c)(O.a)(C())),I=b.c.div(k()),M=b.c.div(y()),U=b.c.div(p()),A=b.c.div(g()),N=b.c.div(x()),V=Object(b.c)(O.a)(f()),J=b.c.h2(v()),K=b.c.div(m());n.default=function(){var e=Object(c.useContext)(i.a),n=e.user,t=e.getUser,u=e.closeModal,b=e.isLoading,O=e.showModal,h=e.message,m=Object(l.h)().id,v=Object(c.useState)(""),f=Object(a.a)(v,2),x=f[0],g=f[1],p=Object(c.useState)(""),y=Object(a.a)(p,2),k=y[0],C=y[1],w=Object(c.useState)(""),z=Object(a.a)(w,2),P=z[0],F=z[1],L=Object(c.useState)(""),T=Object(a.a)(L,2),q=T[0],B=T[1],G=Object(c.useState)(""),H=Object(a.a)(G,2),Q=H[0],R=H[1],W=Object(c.useState)(""),X=Object(a.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)(""),_=Object(a.a)($,2),ee=_[0],ne=_[1],te=Object(c.useState)(""),re=Object(a.a)(te,2),ae=re[0],ce=re[1],ie=Object(c.useState)(""),le=Object(a.a)(ie,2),se=le[0],je=le[1],de=Object(c.useState)(""),oe=Object(a.a)(de,2),ue=oe[0],be=oe[1],Oe=Object(c.useState)(""),he=Object(a.a)(Oe,2),me=he[0],ve=he[1],fe=Object(c.useState)(""),xe=Object(a.a)(fe,2),ge=xe[0],pe=xe[1],ye=Object(c.useState)(""),ke=Object(a.a)(ye,2),Ce=ke[0],we=ke[1],ze=Object(c.useState)(""),Pe=Object(a.a)(ze,2),Se=Pe[0],De=Pe[1],Ee=Object(c.useState)(""),Ie=Object(a.a)(Ee,2),Me=Ie[0],Ue=Ie[1],Ae=Object(c.useState)(""),Ne=Object(a.a)(Ae,2),Ve=Ne[0],Je=Ne[1];return console.log(m),console.log(n),Object(c.useEffect)((function(){"novy-zakaznik"!==m&&t(m)}),[m]),Object(c.useEffect)((function(){return n&&(n.name&&(g(n.name.split(" ")[0]||""),C(n.name.split(" ")[1]||"")),F(n.email||""),B(n.phone||""),R(n.address||""),Z(n.psc||""),ne(n.city||""),ce(n.country||""),n.lenses.diopters.length>0&&(je(n.lenses.diopters[0]||""),be(n.lenses.diopters[1]||"")),n.lenses.distance.length>0&&(ve(n.lenses.distance[0]||""),pe(n.lenses.distance[1]||"")),n.lenses.cylinder.length>0&&(we(n.lenses.cylinder[0]||""),De(n.lenses.cylinder[1]||"")),n.lenses.cylinderAxes.length>0&&(Ue(n.lenses.cylinderAxes[0]||""),Je(n.lenses.cylinderAxes[1]||""))),function(){g(""),C(""),F(""),B(""),R(""),Z(""),ne(""),ce(""),je(""),be(""),ve(""),pe(""),we(""),De(""),Ue(""),Je("")}}),[n]),Object(c.useEffect)((function(){"novy-zakaznik"===m&&(g(""),C(""),F(""),B(""),R(""),Z(""),ne(""),ce(""),je(""),be(""),ve(""),pe(""),we(""),De(""),Ue(""),Je(""))}),[]),Object(r.jsxs)("section",{children:[O&&Object(r.jsx)(o.a,{loading:b,title:h,close:u}),Object(r.jsxs)(S,{children:[Object(r.jsx)("h1",{children:"Profil"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{children:"Vymaza\u0165"}),Object(r.jsx)(V,{children:"Ulo\u017ei\u0165 zmeny"})]})]}),Object(r.jsx)(s.a,{children:Object(r.jsxs)(I,{children:[Object(r.jsxs)(D,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Inform\xe1cie"}),Object(r.jsxs)(U,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Meno",type:"text",name:"fname",value:x,handleChange:function(e){return g(e.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Priezvisko",type:"text",name:"lname",value:k,handleChange:function(e){return C(e.target.value)}})})]})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)("h2",{children:"Kontaktn\xe9 \xfadaje"}),Object(r.jsxs)(N,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"E-mail",type:"email",name:"email",value:P,handleChange:function(e){return F(e.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Telef\xf3nne \u010d\xedslo",type:"text",name:"phone",value:q,handleChange:function(e){return B(e.target.value)}})})]})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)("h2",{children:"Faktura\u010dn\xe9 \xfadaje"}),Object(r.jsxs)(U,{children:[Object(r.jsx)(M,{children:Object(r.jsx)(j.a,{label:"Ulica a \u010dislo domu",type:"text",name:"street",value:Q,handleChange:function(e){return R(e.target.value)}})}),Object(r.jsx)(M,{children:Object(r.jsx)(j.a,{label:"PS\u010c",type:"text",name:"psc",value:Y,handleChange:function(e){return Z(e.target.value)}})})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Mesto",type:"text",name:"city",value:ee,handleChange:function(e){return ne(e.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Krajina",type:"text",name:"state",value:ae,handleChange:function(e){return ce(e.target.value)}})})]})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)("h2",{children:"Parametre"}),Object(r.jsxs)(A,{children:[Object(r.jsx)("div",{children:"Dioptrie"}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"\u013dav\xe9 oko",type:"text",name:"city",value:se,handleChange:function(e){return je(e.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Prav\xe9 oko",type:"text",name:"state",value:ue,handleChange:function(e){return be(e.target.value)}})})]}),Object(r.jsxs)(A,{children:[Object(r.jsx)("div",{children:"Vzdialenos\u0165"}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"\u013dav\xe9 oko",type:"text",name:"city",value:me,handleChange:function(e){return ve(e.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Prav\xe9 oko",type:"text",name:"state",value:ge,handleChange:function(e){return pe(e.target.value)}})})]}),Object(r.jsxs)(A,{children:[Object(r.jsx)("div",{children:"Cylinder"}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"\u013dav\xe9 oko",type:"text",name:"city",value:Ce,handleChange:function(e){return we(e.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Prav\xe9 oko",type:"text",name:"state",value:Se,handleChange:function(e){return De(e.target.value)}})})]}),Object(r.jsxs)(A,{children:[Object(r.jsx)("div",{children:"Os cylindrov"}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"\u013dav\xe9 oko",type:"text",name:"city",value:Me,handleChange:function(e){return Ue(e.target.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{label:"Prav\xe9 oko",type:"text",name:"state",value:Ve,handleChange:function(e){return Je(e.target.value)}})})]})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(J,{children:"Objedn\xe1vky"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(d.a,{name:"Product name",id:"[Product ID]",date:"28. November 2020",totalPrice:"99.99"}),Object(r.jsx)(d.a,{name:"Product name",id:"[Product ID]",date:"28. November 2020",totalPrice:"99.99"}),Object(r.jsx)(d.a,{name:"Product name",id:"[Product ID]",date:"28. November 2020",totalPrice:"99.99"})]})]})]})})]})}},55:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(5)),c=t(6),i=t(36);function l(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n"]);return l=function(){return e},e}var s=c.c.div(l(),i.b);n.a=function(e){var n=e.children;return Object(r.jsx)(s,{children:n})}},83:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(5)),c=t(6),i=t(15);function l(){var e=Object(a.a)(["\n    font-size: 1.4rem;\n    background-color: rgb(235, 172, 1);\n"]);return l=function(){return e},e}function s(){var e=Object(a.a)(["\n    font-size: 1.4rem;\n    margin-right: 1rem;\n"]);return s=function(){return e},e}function j(){var e=Object(a.a)(["\n    align-self: end;\n    justify-self: end;\n"]);return j=function(){return e},e}function d(){var e=Object(a.a)(["\n    font-weight: 700;\n    font-size: 1.8rem;\n"]);return d=function(){return e},e}function o(){var e=Object(a.a)(["\n    font-size: 1.4rem;\n    /* font-weight: 700; */\n    color: gray;\n    margin-bottom: 2rem;\n"]);return o=function(){return e},e}function u(){var e=Object(a.a)(["\n    font-size: 1.2rem;\n    color: gray;\n    margin-bottom: 2rem;\n"]);return u=function(){return e},e}function b(){var e=Object(a.a)(["\n    h2 {\n        font-size: 1.6rem;\n    }\n"]);return b=function(){return e},e}function O(){var e=Object(a.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 25rem;\n\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    padding: 2rem;\n\n    &:not(:last-child) {\n        margin-bottom: 2rem;\n    }\n\n    @media all and (max-width: 800px) {\n        grid-template-columns: 1fr;\n\n    }\n"]);return O=function(){return e},e}var h=c.c.div(O()),m=c.c.div(b()),v=c.c.p(u()),f=c.c.p(o()),x=c.c.p(d()),g=c.c.div(j()),p=Object(c.c)(i.a)(s()),y=Object(c.c)(i.a)(l());n.a=function(e){var n=e.name,t=e.id,a=e.date,c=e.totalPrice;return Object(r.jsxs)(h,{children:[Object(r.jsxs)(m,{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)(v,{children:t}),Object(r.jsx)(f,{children:a}),Object(r.jsxs)(x,{children:[c,"\u20ac"]})]}),Object(r.jsxs)(g,{children:[Object(r.jsx)(p,{children:"Upravi\u0165"}),Object(r.jsx)(y,{children:"Vymaza\u0165"})]})]})}}}]);
//# sourceMappingURL=9.4cec397e.chunk.js.map