(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[2],{13:function(n,e,t){"use strict";t.d(e,"a",(function(){return O}));var r=t(1),a=(t(0),t(25)),i=t.n(a),o=t(15),c=t(2),s=t(3);function u(){var n=Object(c.a)(["\n    border: 5px solid transparent;\n    border-top: 5px solid rgb(256,172,1);\n    border-radius: 50%;\n    width: 38px;\n    height: 38px;\n    animation: spin 800ms linear infinite;\n\n    @keyframes spin {\n        0% { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n    }\n"]);return u=function(){return n},n}var l=s.c.div(u()),d=function(){return Object(r.jsx)(l,{})};function b(){var n=Object(c.a)(["\n    color: #383838;\n    font-size: 2.1rem;\n    font-weight: 700;\n    text-align: center;\n\n    margin-bottom: 2rem;\n"]);return b=function(){return n},n}function h(){var n=Object(c.a)(["\n    max-width: 50rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 2rem;\n\n    border-radius: .5rem;\n\n    background-color: white;\n"]);return h=function(){return n},n}function j(){var n=Object(c.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 999999;\n    min-height: 100vh;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return j=function(){return n},n}var m=s.c.div(j()),f=s.c.div(h()),p=s.c.div(b());function O(n){var e=n.loading,t=n.title,a=n.close;return i.a.createPortal(Object(r.jsx)(m,{children:e?Object(r.jsx)(f,{children:Object(r.jsx)(d,{})}):Object(r.jsxs)(f,{children:[Object(r.jsx)(p,{children:t}),Object(r.jsx)(o.a,{onClick:a,children:"Zavrie\u0165"})]})}),document.getElementById("portal"))}},15:function(n,e,t){"use strict";var r=t(20),a=t(1),i=t(24),o=(t(0),t(2));function c(){var n=Object(o.a)(["\n    cursor: pointer;\n    background-color: #000;\n    color: #fff;\n    padding: .8rem 3rem;\n    font-size: inherit;\n    font-family: inherit;\n    border-radius: .2rem;\n    border: none;\n    outline: none;\n\n    &:focus {\n        outline: none\n    }\n\n    @media all and (max-width: 500px) {\n        padding: 0.5rem 1.5rem;\n        font-size: 1.4rem;\n    }\n"]);return c=function(){return n},n}var s=t(3).c.button(c());e.a=function(n){var e=n.children,t=Object(i.a)(n,["children"]);return Object(a.jsx)(s,Object(r.a)(Object(r.a)({},t),{},{children:e}))}},16:function(n,e,t){"use strict";var r=t(1),a=t(20),i=t(24),o=(t(0),t(2)),c=t(3);function s(){var n=Object(o.a)(["\n    position: relative;\n    /* margin: 45px 0; */\n\n    .form-input {\n        background: none;\n        background-color: #F5F5F5;\n        color: #000;\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: #B1B1B1;\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return s=function(){return n},n}function u(){var n=Object(o.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: #000;\n"]);return u=function(){return n},n}var l=Object(c.b)(u()),d=c.c.div(s(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,o=n.name,c=Object(i.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(a.a)({className:"form-input",name:o,onChange:e},c)),t?Object(r.jsx)("label",{htmlFor:o,className:"".concat(c.value.length?"shrink":""," form-input-label"),children:t}):null]})}},18:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(1),a=t(5),i=t(0),o=Object(i.createContext)({isLoading:!1,showModal:!1,message:"",closeModal:function(){},getMessage:function(){},setIsLoading:function(){},setShowModal:function(){}});e.b=function(n){var e=n.children,t=Object(i.useState)(!1),c=Object(a.a)(t,2),s=c[0],u=c[1],l=Object(i.useState)(!1),d=Object(a.a)(l,2),b=d[0],h=d[1],j=Object(i.useState)(""),m=Object(a.a)(j,2),f=m[0],p=m[1];return Object(r.jsx)(o.Provider,{value:{isLoading:s,showModal:b,message:f,closeModal:function(){u(!1),h(!1),p("")},getMessage:function(n){p(n)},setIsLoading:u,setShowModal:h},children:e})}},32:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return s}));var r=t(2),a=t(3);function i(){var n=Object(r.a)(["\n    padding: 0 3rem;\n\n    @media all and (max-width: 800px) {\n        padding: 0 2rem;\n        @media all and (max-width: 500px) {\n            padding: 0 1.5rem;\n        }\n    }\n"]);return i=function(){return n},n}function o(){var n=Object(r.a)(["\n    *, *::before, *::after {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n        font-family: 'Titillium Web', sans-serif;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        font-size: 1.6rem;\n        overflow: hidden;\n    }\n\n    section, form {\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n    }\n\n"]);return o=function(){return n},n}var c=Object(a.a)(o()),s=Object(a.b)(i())},50:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),i=t.n(a),o=t(25),c=t.n(o),s=t(8),u=t(32),l=t(19),d=t(4),b=t(5),h=t(7),j=t.n(h),m=t(12),f=t(18),p=t(16),O=t(13),x=t(2),g=t(3),v=t(15);function w(){var n=Object(x.a)(["\n    cursor: pointer;\n    background-color: transparent;\n    color: #DD4C4C;\n    font-family: inherit;\n    border: none;\n    outline: none;\n\n    &:focus {\n        outline: none;\n    }\n"]);return w=function(){return n},n}function k(){var n=Object(x.a)(["\n    margin-top: 2rem;\n\n    width: 100%;\n"]);return k=function(){return n},n}function y(){var n=Object(x.a)(["\n    display: block;\n    height: initial;\n    width: 100%;\n    max-width: 35rem;\n    padding: 3rem 4rem;\n    border-radius: .5rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    margin: 0 1rem 3rem;\n\n\n    h2 {\n        font-size: 2.8rem;\n        text-align: center;\n        margin-bottom: 5rem;\n\n        \n        @media all and (max-width: 500px) {\n            font-size: 2.5rem;\n        }\n    }\n"]);return y=function(){return n},n}var z=g.c.form(y()),S=Object(g.c)(v.a)(k()),C=g.c.button(w()),P=function(n){var e=n.showForgotPwsForm,t=Object(a.useState)(""),o=Object(b.a)(t,2),c=o[0],u=o[1],l=Object(a.useState)(""),d=Object(b.a)(l,2),h=d[0],x=d[1],g=Object(a.useContext)(s.a).logIn,v=Object(a.useContext)(f.a),w=v.isLoading,k=v.closeModal,y=v.message,P=v.showModal,F=function(){var n=Object(m.a)(j.a.mark((function n(e){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),g(c,h),u(""),x("");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsxs)(i.a.Fragment,{children:[P&&Object(r.jsx)(O.a,{loading:w,title:y,close:k}),Object(r.jsxs)(z,{onSubmit:F,children:[Object(r.jsx)("h2",{children:"Prihl\xe1si\u0165 sa"}),Object(r.jsx)(p.a,{label:"E-mail",type:"email",name:"email",value:c,handleChange:function(n){return u(n.target.value)},required:!0}),Object(r.jsx)(p.a,{label:"Heslo",type:"password",name:"pwd",value:h,handleChange:function(n){return x(n.target.value)},required:!0}),Object(r.jsx)(S,{children:"Prihl\xe1si\u0165 sa"})]}),Object(r.jsx)(C,{onClick:function(){return e()},children:"Zabudol som heslo"})]})};function F(){var n=Object(x.a)(["\n    cursor: pointer;\n    background-color: transparent;\n    color: #DD4C4C;\n    font-family: inherit;\n    border: none;\n    outline: none;\n    margin-bottom: 1rem; \n\n    &:focus {\n        outline: none;\n    }\n"]);return F=function(){return n},n}function I(){var n=Object(x.a)(["\n    margin-top: 2rem;\n\n    width: 100%;\n"]);return I=function(){return n},n}function M(){var n=Object(x.a)(["\n    display: block;\n    height: initial;\n    width: 100%;\n    max-width: 35rem;\n    padding: 3rem 4rem;\n    border-radius: .5rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    margin: 0 1rem 3rem;\n\n\n    h2 {\n        font-size: 2.8rem;\n        text-align: center;\n        margin-bottom: 5rem;\n\n        \n        @media all and (max-width: 500px) {\n            font-size: 2.5rem;\n        }\n    }\n"]);return M=function(){return n},n}var T=g.c.form(M()),E=Object(g.c)(v.a)(I()),N=g.c.button(F()),L=function(n){var e=n.showSignInForm,t=Object(a.useState)(""),o=Object(b.a)(t,2),c=o[0],u=o[1],l=Object(a.useContext)(s.a),d=l.isWaitingForResponse,h=l.errMessage,f=l.isLoading,x=l.setIsLoading,g=l.handleResetPassword,v=function(){var n=Object(m.a)(j.a.mark((function n(e){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),g(c);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsxs)(i.a.Fragment,{children:[f&&Object(r.jsx)(O.a,{loading:d,title:h,close:function(){return x(!1)}}),Object(r.jsxs)(T,{onSubmit:v,children:[Object(r.jsx)("h2",{children:"Zadaj e-mail"}),Object(r.jsx)(p.a,{label:"E-mail",type:"email",name:"email",value:c,handleChange:function(n){return u(n.target.value)},required:!0}),Object(r.jsx)(E,{children:"Odosla\u0165"})]}),Object(r.jsx)(N,{onClick:function(){return e()},children:"Sp\xe4t na prihl\xe1senie"})]})};function Z(){var n=Object(x.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    h1 {\n        font-size: 8rem;\n        font-weight: 700;\n        margin-bottom: 5rem;\n\n        @media all and (max-width: 800px) {\n            font-size: 6rem;\n\n            @media all and (max-width: 500px) {\n            font-size: 5rem;\n\n            }\n        }   \n    }\n"]);return Z=function(){return n},n}var D=g.c.div(Z()),A=function(){var n=Object(a.useState)(!1),e=Object(b.a)(n,2),t=e[0],i=e[1];return Object(r.jsxs)(D,{children:[Object(r.jsx)("h1",{children:"IMOOPTIK"}),t?Object(r.jsx)(L,{showSignInForm:function(){i(!1)}}):Object(r.jsx)(P,{showForgotPwsForm:function(){i(!0)}})]})},H=t.p+"static/media/logo.361eddbd.png",R=t(14);function B(){var n=Object(x.a)(["\n                &:nth-child(1) {\n                    top: 0;\n                }\n\n                &:nth-child(2) {\n                    top: 50%;\n                    transform: translateY(-50%);\n                }\n\n                &:nth-child(3) {\n                    bottom: 0;\n                }\n            "]);return B=function(){return n},n}function J(){var n=Object(x.a)(["\n                &:nth-child(1) {\n                    top: 1rem;\n                    transform: rotate(45deg);\n                }\n\n                &:nth-child(2) {\n                    opacity: 0;\n                }\n\n                &:nth-child(3) {\n                    bottom: 1.3rem;\n                    transform: rotate(-45deg);\n                }\n            "]);return J=function(){return n},n}function U(){var n=Object(x.a)(["\n    cursor: pointer;\n    display: none;\n    outline: none;\n    border: none;\n    background-color: transparent;\n\n    &:focus {\n        outline: none;\n    }\n\n    @media all and (max-width: 1150px) {\n        top: 3rem;\n        left: ",";\n        transition: all .5s ease-out;\n        align-self: flex-start;\n        display: block;\n        background-color: transparent;\n        border: none;\n        width: 3.5rem;\n        height: 2.5rem;\n        position: absolute;\n\n        @media all and (max-width: 800px) {\n            left: ",";\n            @media all and (max-width: 500px) {\n                left: ",";\n            }\n        }\n\n        div {\n            position: absolute;\n            width: 3.5rem;\n            height: 2.5px;\n            background-color: #000000;\n            transition: all 0.3s ease-in-out;\n            ","\n        }\n \n    }\n"]);return U=function(){return n},n}function q(){var n=Object(x.a)(["\n    min-width: 20rem;\n    cursor: pointer;\n    outline:none;\n    background-color: transparent;\n    border: none;\n    display: flex;\n    align-items: center;\n    color: #fff;\n    font-family: inherit;\n    font-weight: 700;\n    font-size: 1.8rem;\n    transition: .2s color ease-out;\n\n\n    @media all and (max-width: 500px) {\n        font-size: 1.6rem;\n    }\n\n    &:hover {\n        color: #eee;\n    }\n\n\n    &:focus {\n        outline: none;\n    }\n"]);return q=function(){return n},n}function W(){var n=Object(x.a)(["\n    opacity: ",";\n    position: absolute;\n    width: 4px;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgb(235, 172, 1);\n    transition: opacity .3s ease-out;\n"]);return W=function(){return n},n}function G(){var n=Object(x.a)(["\n    width: 5rem;\n    height: 5rem;\n    /* background-color: #3E3E3E; */\n    margin-right: 3rem;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2.5rem;\n    color: ",";\n    transition: color .3s ease-out;\n\n\n    @media all and (max-width: 500px) {\n        margin-right: 2rem;\n\n    }\n"]);return G=function(){return n},n}function K(){var n=Object(x.a)(["\n    list-style: none;\n    width: 100%;\n    overflow-x: hidden;\n\n    @media all and (max-height: 725px) {\n        overflow-y: scroll;\n\n        ::-webkit-scrollbar {\n            width: 10px;\n        }\n\n        /* Track */\n        ::-webkit-scrollbar-track {\n            background:  #3E3E3E;\n        }\n\n        /* Handle */\n        ::-webkit-scrollbar-thumb {\n            background: #888;\n        }\n\n        /* Handle on hover */\n        ::-webkit-scrollbar-thumb:hover {\n            background: #555;\n        }\n    }\n\n    li {\n        cursor: pointer;\n        position: relative;\n        display: flex;\n        align-items: center;\n        margin-bottom: 3rem;\n\n\n            &:hover {\n                div {\n                    color: rgb(235, 172, 1);\n\n                }\n    }\n    }\n"]);return K=function(){return n},n}function V(){var n=Object(x.a)(["\n    font-size: 3rem;\n    font-weight: 700;\n    color: #fff;\n    margin-bottom: 3rem;\n    margin-right: 3rem;\n\n    img {\n        width: 100%;\n    }\n\n    @media all and (max-width: 1150px) {\n        transition: opacity .5s ease-out;\n        opacity: ",";\n\n    }\n"]);return V=function(){return n},n}function Y(){var n=Object(x.a)(["\n    position: relative;\n    background-color: #000000;\n    padding: 3rem 0 3rem 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    z-index: 999;\n    overflow-x: hidden;\n\n    @media all and (max-width: 1150px) {\n        position: absolute;\n\n        width: ",";\n        transition: width .5s ease-out;\n\n        @media all and (max-width: 800px){\n            position: absolute;\n            transition: left .5s ease-out;\n            left: ",";\n        }\n\n        @media all and (max-width: 500px) {\n            width: 25rem;\n            left: ",";\n\n        }\n    }\n"]);return Y=function(){return n},n}var Q=g.c.aside(Y(),(function(n){return n.isOpen?"30rem":"10rem"}),(function(n){return n.isOpen?0:"-30rem"}),(function(n){return n.isOpen?0:"-25rem"})),X=g.c.div(V(),(function(n){return n.isOpen?1:0})),$=g.c.ul(K()),_=g.c.div(G(),(function(n){return n.isActive?"rgb(235, 172, 1)":"#fff"})),nn=g.c.span(W(),(function(n){return n.isActive?1:0})),en=g.c.button(q()),tn=g.c.button(U(),(function(n){return n.isOpen?"32rem":"12rem"}),(function(n){return n.isOpen?"32rem":"2rem"}),(function(n){return n.isOpen?"26rem":"1rem"}),(function(n){return n.isOpen?Object(g.b)(J()):Object(g.b)(B())})),rn=function(n){var e=n.routes,t=n.match,o=Object(a.useContext)(s.a).logOut,c=Object(d.g)().push,u=Object(a.useState)(!1),l=Object(b.a)(u,2),h=l[0],j=l[1],m=Object(a.useState)(0),f=Object(b.a)(m,2),p=f[0],O=f[1];return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsxs)(tn,{onClick:function(){return j(!h)},isOpen:h,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),Object(r.jsxs)(Q,{isOpen:h,children:[Object(r.jsx)(X,{isOpen:h,children:Object(r.jsx)("img",{src:H,alt:"imooptik logo"})}),Object(r.jsxs)($,{children:[e.map((function(n,e){return Object(r.jsxs)("li",{onClick:function(){return function(n,e){h&&j(!1),O(e),c(n)}(t.url+n.path,e)},children:[Object(r.jsxs)(en,{children:[Object(r.jsx)(_,{isActive:p===e,children:Object(r.jsx)(n.icon,{})})," ",n.name]}),Object(r.jsx)(nn,{isActive:p===e})]},e)})),Object(r.jsx)("li",{onClick:o,children:Object(r.jsxs)(en,{children:[Object(r.jsx)(_,{children:Object(r.jsx)(R.f,{})})," Odhl\xe1si\u0165 sa",Object(r.jsx)(nn,{})]})})]}),Object(r.jsx)("div",{})]})]})};function an(){var n=Object(x.a)(["\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 30rem 1fr;\n\n    @media all and (max-width: 1150px) {\n        grid-template-columns: 1fr;\n\n        main {\n            margin-top: 8rem;\n            margin-left: 10rem;\n        }\n\n        @media all and (max-width: 800px) {\n            grid-template-columns: 1fr;\n\n            main {\n                margin-left: unset;\n                height: 100%;\n\n            }\n        }\n    }\n"]);return an=function(){return n},n}var on=g.c.div(an()),cn=Object(a.lazy)((function(){return t.e(18).then(t.bind(null,56))})),sn=Object(a.lazy)((function(){return t.e(16).then(t.bind(null,74))})),un=Object(a.lazy)((function(){return t.e(19).then(t.bind(null,59))})),ln=Object(a.lazy)((function(){return t.e(0).then(t.bind(null,85))})),dn=Object(a.lazy)((function(){return t.e(17).then(t.bind(null,110))})),bn=Object(a.lazy)((function(){return Promise.all([t.e(1),t.e(0),t.e(12)]).then(t.bind(null,215))})),hn=Object(a.lazy)((function(){return Promise.all([t.e(1),t.e(11)]).then(t.bind(null,220))})),jn=Object(a.lazy)((function(){return t.e(13).then(t.bind(null,218))})),mn=Object(a.lazy)((function(){return t.e(15).then(t.bind(null,221))})),fn=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,213))})),pn=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,214))})),On=Object(a.lazy)((function(){return t.e(10).then(t.bind(null,222))})),xn=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,216))})),gn=Object(a.lazy)((function(){return Promise.all([t.e(4),t.e(7)]).then(t.bind(null,223))})),vn=Object(a.lazy)((function(){return t.e(20).then(t.bind(null,219))})),wn=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,217))})),kn=function(){var n=Object(d.i)(),e=[{name:"E-shop",path:"/obchod",permission:1,icon:R.c},{name:"U\u017eivatelia",path:"/zakaznici",permission:1,icon:R.g},{name:"Objedn\xe1vky",path:"/objednavky",permission:0,icon:R.d},{name:"Rezerv\xe1cie",path:"/rezervacie",permission:0,icon:R.a},{name:"Blog",path:"/blog",permission:0,icon:R.b},{name:"Analytika",path:"/analytika",permission:1,icon:R.e}];return 0===Object(a.useContext)(s.a).currentUser.admin?Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(O.a,{loading:!0}),children:Object(r.jsx)(vn,{})}):Object(r.jsxs)(on,{children:[Object(r.jsx)(rn,{routes:e,match:n}),Object(r.jsx)("main",{children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(O.a,{loading:!0}),children:Object(r.jsxs)(cn,{children:[Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"".concat(n.path,"/obchod"),render:function(){return Object(r.jsx)(ln,{children:Object(r.jsx)(bn,{})})}}),Object(r.jsx)(d.b,{path:"".concat(n.path,"/sklad/:id"),render:function(){return Object(r.jsx)(ln,{children:Object(r.jsx)(pn,{})})}}),Object(r.jsx)(d.b,{exact:!0,path:"".concat(n.path,"/objednavky"),component:jn}),Object(r.jsx)(d.b,{path:"".concat(n.path,"/objednavky/:userId"),render:function(){return Object(r.jsx)(un,{children:Object(r.jsx)(ln,{children:Object(r.jsx)(wn,{})})})}}),Object(r.jsx)(d.b,{path:"".concat(n.path,"/analytika"),component:mn}),Object(r.jsx)(d.b,{path:"".concat(n.path,"/rezervacie"),render:function(){return Object(r.jsx)(dn,{children:Object(r.jsx)(xn,{})})}}),Object(r.jsx)(d.b,{exact:!0,path:"".concat(n.path,"/blog"),render:function(){return Object(r.jsx)(sn,{children:Object(r.jsx)(On,{})})}}),Object(r.jsx)(d.b,{path:"".concat(n.path,"/blog/:id"),render:function(){return Object(r.jsx)(sn,{children:Object(r.jsx)(gn,{})})}}),Object(r.jsxs)(un,{children:[Object(r.jsx)(d.b,{exact:!0,path:"".concat(n.path,"/zakaznici"),component:hn}),Object(r.jsx)(d.b,{path:"".concat(n.path,"/zakaznici/:id"),component:fn})]})]}),Object(r.jsx)(d.a,{to:"".concat(n.path,"/obchod")})]})})})]})};function yn(){var n=Object(x.a)(["\n    width: 100%;\n"]);return yn=function(){return n},n}function zn(){var n=Object(x.a)(["\n    display: block;\n    height: initial;\n    width: 100%;\n    max-width: 35rem;\n    padding: 3rem 4rem;\n    border-radius: .5rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n\n    margin: 0 1rem 3rem;\n\n\n    h2 {\n        font-size: 2.8rem;\n        text-align: center;\n        margin-bottom: 5rem;\n\n        @media all and (max-width: 500px) {\n            font-size: 2.5rem;\n        }\n    }\n"]);return zn=function(){return n},n}function Sn(){var n=Object(x.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return Sn=function(){return n},n}var Cn=g.c.div(Sn()),Pn=g.c.form(zn()),Fn=Object(g.c)(v.a)(yn()),In=function(){var n=Object(a.useContext)(s.a),e=n.isLoading,t=n.isWaitingForResponse,o=n.setIsLoading,c=n.errMessage,u=n.handleCreatingNewPassword,l=Object(d.g)().push,h=Object(d.h)().token,j=Object(a.useState)(""),m=Object(b.a)(j,2),f=m[0],x=m[1];return Object(r.jsxs)(i.a.Fragment,{children:[e&&Object(r.jsx)(O.a,{loading:t,title:c,close:function(){o(!1),l("/")}}),Object(r.jsx)(Cn,{children:Object(r.jsxs)(Pn,{onSubmit:function(n){n.preventDefault(),u(h,f)},children:[Object(r.jsx)("h2",{children:"Vytvori\u0165 nov\xe9 heslo"}),Object(r.jsx)(p.a,{label:"Nov\xe9 heslo",type:"password",name:"password",value:f,handleChange:function(n){return x(n.target.value)},required:!0}),Object(r.jsx)(Fn,{children:"Odosla\u0165"})]})})]})},Mn=function(){console.log("RENDER APP");var n=Object(a.useContext)(s.a).currentUser;return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(l.a,{basename:"/",children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/prihlasenie",render:function(){return n?Object(r.jsx)(d.a,{to:"/dashboard"}):Object(r.jsx)(A,{})}}),Object(r.jsx)(d.b,{path:"/dashboard",render:function(){return n?Object(r.jsx)(kn,{}):Object(r.jsx)(d.a,{to:"/prihlasenie"})}}),Object(r.jsx)(d.b,{path:"/reset/:token",component:In}),n?Object(r.jsx)(d.a,{to:"/dashboard/obchod"}):Object(r.jsx)(d.a,{to:"/prihlasenie"})]})})]})},Tn=function(n){n&&n instanceof Function&&t.e(21).then(t.bind(null,212)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),i(n),o(n)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f.b,{children:Object(r.jsx)(s.b,{children:Object(r.jsx)(Mn,{})})})}),document.getElementById("root")),Tn()},8:function(n,e,t){"use strict";t.d(e,"a",(function(){return m}));var r=t(1),a=t(7),i=t.n(a),o=t(12),c=t(5),s=t(0),u=t(18),l=function(n){var e=n.email,t=n.password,r=new Headers;r.append("Content-Type","application/json");var a={method:"POST",headers:r,body:JSON.stringify({email:e,password:t}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/login"),a)},d=function(n){var e=n.name,t=n.email,r=n.password,a=new Headers;a.append("Content-Type","application/json");var i={method:"POST",headers:a,body:JSON.stringify({email:t,password:r,name:e}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/register"),i)},b=function(n){var e=new Headers;e.append("Content-Type","application/json");var t={method:"POST",headers:e,body:JSON.stringify({email:n}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/forgot"),t)},h=function(n,e){var t=new Headers;t.append("Content-Type","application/json");var r={method:"POST",headers:t,body:JSON.stringify({resetSecret:n,password:e}),redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/auth/reset"),r)},j=function(n){var e=new Headers;e.append("auth-token",n),e.append("Content-Type","application/json");var t={method:"GET",headers:e,redirect:"follow"};return fetch("".concat("http://195.110.58.166:8080","/api/user/profile"),t)},m=Object(s.createContext)({currentUser:null,isAdmin:!1,token:null,logIn:function(){},logOut:function(){},register:function(){},handleResetPassword:function(){},handleCreatingNewPassword:function(){}});e.b=function(n){var e=n.children,t=Object(s.useContext)(u.a),a=t.setShowModal,f=t.setIsLoading,p=t.getMessage,O=t.closeModal,x=Object(s.useState)(null),g=Object(c.a)(x,2),v=g[0],w=g[1],k=Object(s.useState)(null),y=Object(c.a)(k,2),z=y[0],S=y[1],C=Object(s.useState)(!1),P=Object(c.a)(C,2),F=P[0],I=P[1],M=function(n){n.admin>1?I(!0):I(!1)},T=function(){var n=Object(o.a)(i.a.mark((function n(e,t){var r,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a(!0),f(!0),e){n.next=7;break}return console.log("Ziadny e-mail"),a(!1),f(!1),n.abrupt("return");case 7:if(t){n.next=12;break}return console.log("Ziadne heslo"),a(!1),f(!1),n.abrupt("return");case 12:return n.prev=12,n.next=15,l({email:e,password:t});case 15:return r=n.sent,n.next=18,r.json();case 18:o=n.sent,p(o.message),f(!1),o.user&&(w(o.user),S(o.authToken),localStorage.setItem("mptkthtkn",o.authToken),M(o.user),O()),n.next=29;break;case 24:n.prev=24,n.t0=n.catch(12),console.log(n.t0),p("Nieco sa pokazilo"),f(!1);case 29:case"end":return n.stop()}}),n,null,[[12,24]])})));return function(e,t){return n.apply(this,arguments)}}(),E=function(){var n=Object(o.a)(i.a.mark((function n(e,t,r,o){var c,s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a(!0),f(!0),e){n.next=7;break}return console.log("Ziadne meno"),a(!1),f(!1),n.abrupt("return");case 7:if(t){n.next=12;break}return console.log("Ziadny e-mail"),a(!1),f(!1),n.abrupt("return");case 12:if(r){n.next=17;break}return console.log("Ziadne heslo"),a(!1),f(!1),n.abrupt("return");case 17:if(r===o){n.next=22;break}return console.log("hesla sa nezhoduju"),a(!1),f(!1),n.abrupt("return");case 22:return n.prev=22,n.next=25,d({name:e,email:t,password:r});case 25:return c=n.sent,n.next=28,c.json();case 28:s=n.sent,f(!1),p(s.message),n.next=38;break;case 33:n.prev=33,n.t0=n.catch(22),console.log(n.t0),p("Nieco sa pokazilo"),f(!1);case 38:case"end":return n.stop()}}),n,null,[[22,33]])})));return function(e,t,r,a){return n.apply(this,arguments)}}(),N=function(){var n=Object(o.a)(i.a.mark((function n(e){var t,r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a(!0),f(!0),e){n.next=7;break}return console.log("Ziadny e-mail"),a(!1),f(!1),n.abrupt("return");case 7:return n.prev=7,n.next=10,b(e);case 10:return t=n.sent,n.next=13,t.json();case 13:r=n.sent,p(r.message),f(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(7),console.log(n.t0),p("Nieco sa pokazilo"),f(!1);case 23:case"end":return n.stop()}}),n,null,[[7,18]])})));return function(e){return n.apply(this,arguments)}}(),L=function(){var n=Object(o.a)(i.a.mark((function n(e,t){var r,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a(!0),f(!0),e){n.next=7;break}return console.log("Ziadny reset token"),a(!1),f(!1),n.abrupt("return");case 7:if(t){n.next=12;break}return console.log("Ziadne heslo"),a(!1),f(!1),n.abrupt("return");case 12:return n.prev=12,n.next=15,h(e,t);case 15:return r=n.sent,n.next=18,r.json();case 18:o=n.sent,p(o.message),f(!1),n.next=28;break;case 23:n.prev=23,n.t0=n.catch(12),console.log(n.t0),p("Nieco sa pokazilo"),f(!1);case 28:case"end":return n.stop()}}),n,null,[[12,23]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(s.useEffect)((function(){localStorage.getItem("mptkthtkn")&&S(localStorage.getItem("mptkthtkn"))}),[]),Object(s.useEffect)((function(){z&&function(){var n=Object(o.a)(i.a.mark((function n(){var e,t;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(z);case 2:return e=n.sent,n.next=5,e.json();case 5:(t=n.sent).user&&(w(t.user),M(t.user));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[z]),Object(r.jsx)(m.Provider,{value:{token:z,currentUser:v,isAdmin:F,logIn:T,logOut:function(){localStorage.removeItem("mptkthtkn"),w(null),S(null)},register:E,handleResetPassword:N,handleCreatingNewPassword:L},children:e})}}},[[50,3,5]]]);
//# sourceMappingURL=main.141b6195.chunk.js.map