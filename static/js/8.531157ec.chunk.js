(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[8,31],{234:function(n,e,t){"use strict";t.r(e);var r=t(2),o=t(21),c=t(10),a=t(1),i=t(3),u=t(18),s=t(63),l=t(58),d=t(54),b=t(32),f=t(64),p=t(126),j=t(53),v=[{id:1,name:"Nevybaven\xe9"},{id:2,name:"Dokon\u010den\xe9"},{id:3,name:"Zru\u0161en\xe9"}],h=t(14),m=t(5),O=t(6),x=t(30),g=t(73),k=t(29),y=t(7),w=t.n(y),S=t(12),C=t(19),z=t(20),N=t.n(z),B=t(60),P=t(28);function T(){var n=Object(m.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return T=function(){return n},n}function E(){var n=Object(m.a)(["\n    display: flex;\n    margin: 3rem auto 0;\n"]);return E=function(){return n},n}function I(){var n=Object(m.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return I=function(){return n},n}function L(){var n=Object(m.a)(["\n    width:100%;\n    max-width: 50rem;\n    max-height: 60rem;\n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--background-primary-color);\n    color: var(--primary-text-color);\n\n    position: relative;\n    z-index: 999999;\n\n    h3 {\n        text-align: center;\n    }\n\n\n"]);return L=function(){return n},n}function M(){var n=Object(m.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return M=function(){return n},n}var D=O.c.div(M()),A=O.c.div(L()),K=O.c.select(I()),H=Object(O.c)(P.a)(E()),Z=O.c.button(T()),_=function(n){var e=n.close,t=n.premise,o=n.id,i=n.refetch,s=Object(a.useState)(t),l=Object(c.a)(s,2),d=l[0],f=l[1],p=Object(a.useContext)(C.a).token,j=Object(a.useContext)(u.a),v=j.getMessage,h=j.message,m=j.isLoading,O=j.setIsLoading,x=j.closeModal,g=function(){var n=Object(S.a)(w.a.mark((function n(){var t,r,c,a,u;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),(t=new Headers).append("auth-token",p),t.append("Content-Type","application/json"),r=JSON.stringify({premises:Number(d)}),c={method:"POST",headers:t,body:r,redirect:"follow"},n.prev=6,n.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(o,"/delegate"),c);case 9:return a=n.sent,n.next=12,a.json();case 12:if(!(u=n.sent).order){n.next=18;break}return i(),O(!1),e(),n.abrupt("return");case 18:v(u.messageSK),O(!1),n.next=26;break;case 22:n.prev=22,n.t0=n.catch(6),console.log(n.t0),O(!1);case 26:case"end":return n.stop()}}),n,null,[[6,22]])})));return function(){return n.apply(this,arguments)}}();return m||h?Object(r.jsx)(b.a,{loading:m,title:h,close:x}):N.a.createPortal(Object(r.jsxs)(D,{children:[Object(r.jsx)(Z,{onClick:e}),Object(r.jsxs)(A,{children:[Object(r.jsx)("h3",{children:"Priradi\u0165 k prev\xe1dzke"}),Object(r.jsxs)(K,{value:d,onChange:function(n){return f(n.target.value)},children:[Object(r.jsx)("option",{value:0,children:"Nezadan\xe9"}),B.n.map((function(n,e){if(0!==e)return Object(r.jsx)("option",{value:e,children:n},e)}))]}),Object(r.jsx)(H,{onClick:g,children:"Priradi\u0165"})]})]}),document.getElementById("portal"))};function V(){var n=Object(m.a)(["\n    display: block;\n    margin: 0 auto;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return V=function(){return n},n}function F(){var n=Object(m.a)(["\n    margin-top: 1.5rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .5rem .5rem .5rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n    margin-bottom: 2rem;\n"]);return F=function(){return n},n}function J(){var n=Object(m.a)(["\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n\n    border: none;\n    outline: none;\n    opacity: 0;\n\n    &:focus {\n        outline: none\n    }\n"]);return J=function(){return n},n}function R(){var n=Object(m.a)(["\n    width:100%;\n    max-width: 65rem;\n    max-height: 60rem;\n\n    overflow-y: scroll;\n\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--background-primary-color);\n    color: var(--primary-text-color);\n\n    position: relative;\n    z-index: 999999;\n\n    h2{ \n        margin-bottom: 2rem;\n        text-align: center;\n    }\n\n    h3 {\n        text-align: center;\n        font-weight: lighter;\n        font-size: 5rem;\n        opacity: .5;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return R=function(){return n},n}function G(){var n=Object(m.a)(["\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 99999;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0,0,0,0.3);\n"]);return G=function(){return n},n}var Q=O.c.div(G()),U=O.c.div(R()),Y=O.c.button(J()),q=O.c.select(F()),W=Object(O.c)(P.a)(V()),X=function(n){var e=n.close,t=n.id,o=n.refetch,i=Object(a.useContext)(C.a).token,s=Object(a.useContext)(u.a),l=s.getMessage,d=(s.message,s.isLoading,s.setIsLoading),b=(s.closeModal,Object(a.useState)("")),f=Object(c.a)(b,2),p=f[0],j=f[1],v=function(){var n=Object(S.a)(w.a.mark((function n(){var r,c,a,u,s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),(r=new Headers).append("auth-token",i),r.append("Content-Type","application/json"),c=JSON.stringify({paymentType:p}),a={method:"POST",headers:r,body:c,redirect:"follow"},n.prev=6,n.next=9,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(t,"/fulfill"),a);case 9:return u=n.sent,n.next=12,u.json();case 12:if(!(s=n.sent).order){n.next=18;break}return o(),d(!1),e(),n.abrupt("return");case 18:l(s.messageSK),d(!1),n.next=26;break;case 22:n.prev=22,n.t0=n.catch(6),console.log(n.t0),d(!1);case 26:case"end":return n.stop()}}),n,null,[[6,22]])})));return function(){return n.apply(this,arguments)}}();return N.a.createPortal(Object(r.jsxs)(Q,{children:[Object(r.jsx)(Y,{onClick:e}),Object(r.jsxs)(U,{children:[Object(r.jsx)("h2",{children:"Sp\xf4sob \xfahrady"}),Object(r.jsxs)(q,{value:p,onChange:function(n){return j(n.target.value)},children:[Object(r.jsx)("option",{value:"",children:"Neuveden\xe9"}),Object(r.jsx)("option",{value:"card",children:"Karta"}),Object(r.jsx)("option",{value:"cash",children:"Hotovos\u0165"}),Object(r.jsx)("option",{value:"coupon",children:"Kup\xf3n"})]}),Object(r.jsx)(W,{onClick:v,children:"Zaplati\u0165"})]})]}),document.getElementById("portal"))};var $=t(57),nn=t(124),en=t(125);function tn(){var n=Object(m.a)(["\n    width: 75%;\n    height: .1rem;\n    background-color: var(--secondary-text-color);\n    margin: 1rem auto;\n    opacity: .1;\n"]);return tn=function(){return n},n}function rn(){var n=Object(m.a)(["\n    position: absolute;\n    padding: 2rem;\n    box-shadow: 0 0 1.5rem 0 rgba(0,0,0, 0.08);\n    border-radius: .5rem;\n    background-color: var(--dropdown-background-color);\n    z-index: 99;\n    right: 0;\n    top: 6rem;\n    width: 20rem;\n    text-align: start;\n\n    ul {\n        list-style: none;\n\n        button {\n            width: 100%;\n            display: block;\n            margin-bottom: 1rem;\n\n            &:hover {\n                /* background-color: var(--dropdown-hover-background-color); */\n            }\n        }\n\n        li {\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            transition: background-color .3s ease-out;\n            border-radius: 9999rem .5rem .5rem 9999rem;\n            color: var(--primary-text-color);\n\n            &:not(:last-child) {\n                margin-bottom: 1rem;\n            }\n\n            div {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                padding: 1rem;\n                background-color: var(--dropdown-hover-background-color);\n                border-radius: 50%;\n                margin-right: 1rem;\n\n                svg {\n                    transition: color .3s ease-out;\n                }\n            }\n\n            &:hover {\n                background-color: var(--dropdown-hover-background-color);\n\n                div {\n                    svg {\n                        color: var(--primary-color);\n                    }\n                }\n            }\n\n        }\n        a:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n    }\n"]);return rn=function(){return n},n}function on(){var n=Object(m.a)(["\n    position: relative;\n    display: table-row;\n\n    /* box-shadow: var(--container-shadow); */\n    background-color: var(--container-background-table-row);\n\n    @media all and (max-width: 920px) {\n        font-size: 1.2rem\n    }\n\n\n"]);return on=function(){return n},n}function cn(){var n=Object(m.a)(["\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: .5rem;\n    border-radius: 50%;\n\n    svg {\n        font-size: 1.2rem;\n        margin-top: .1rem;\n        display: block;\n        color: var(--dropdownbutton-color);\n    }\n"]);return cn=function(){return n},n}function an(){var n=Object(m.a)(["\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--body-background-primary-color);\n    }\n"]);return an=function(){return n},n}function un(){var n=Object(m.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    width: 30rem;\n    display: table-cell;\n    transition: background-color .3s ease-out; \n"]);return un=function(){return n},n}function sn(){var n=Object(m.a)(["\n    width: 30rem;\n    display: table-cell;\n    padding: 2rem;\n    position: relative;\n\n"]);return sn=function(){return n},n}var ln=O.c.div(sn()),dn=Object(O.c)(ln)(un()),bn=O.c.div(an()),fn=O.c.div(cn()),pn=O.c.div(on()),jn=O.c.div(rn()),vn=O.c.div(tn()),hn=function(n){var e,t,i,u,s=n.order,l=n.refetch,d=Object(x.a)(n,["order","refetch"]),b=Object(a.useContext)(g.OrdersContext),f=b.finishOrder,p=b.cancelOrder,j=b.getPDF,v=Object(a.useState)(!1),h=Object(c.a)(v,2),m=h[0],O=h[1],y=new Date(s.date),w=Object(a.useRef)(null);i=w,u=function(){return O(!1)},Object(a.useEffect)((function(){var n=function(n){i.current&&!i.current.contains(n.target)&&u()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[i]);var S,C=Object(a.useState)(!1),z=Object(c.a)(C,2),N=z[0],P=z[1],T=Object(a.useState)(!1),E=Object(c.a)(T,2),I=E[0],L=E[1],M=(null===s||void 0===s||null===(e=s.orderedBy)||void 0===e?void 0:e._id)?null===s||void 0===s||null===(t=s.orderedBy)||void 0===t?void 0:t._id:null===s||void 0===s?void 0:s.orderedBy;return Object(r.jsxs)(pn,Object(o.a)(Object(o.a)({},d),{},{children:[I&&Object(r.jsx)(X,{close:function(){return L(!1)},refetch:l,id:s._id}),Object(r.jsx)(ln,{children:s.customId}),Object(r.jsx)(ln,{children:y.toLocaleDateString("sk-SK",{weekday:"long",month:"long",day:"numeric"})}),Object(r.jsxs)(dn,{children:[Object(r.jsx)(bn,{onClick:function(){return P(!0)},children:0===s.premises?"Neuveden\xe9":B.n[s.premises]}),N&&Object(r.jsx)(_,{refetch:l,close:function(){return P(!1)},premise:s.premises,id:s._id})]}),Object(r.jsx)(ln,{children:(S=s.status,"finished"===S?"Dokon\u010den\xe9":"fulfilled"===S?"Vybaven\xe9":"pending"===S?"\u010cak\xe1 na vybavenie":"paid"===S?"Zaplaten\xe9":"half-paid"===S?"Z\xe1lohovan\xe9":"cancelled"===S?"Zru\u0161en\xe9":void 0)}),Object(r.jsxs)(ln,{children:[Object(r.jsx)(fn,{onClick:function(){return O(!m)},children:Object(r.jsx)($.a,{})}),m&&Object(r.jsxs)(jn,{ref:w,children:[Object(r.jsxs)("ul",{children:["half-paid"===s.status&&Object(r.jsxs)("li",{onClick:function(){return L(!0)},children:[Object(r.jsx)("div",{children:Object(r.jsx)(nn.a,{})}),"Zaplati\u0165"]}),"half-paid"!==s.status&&"fulfilled"!==s.status&&"cancelled"!==s.status&&Object(r.jsxs)("li",{onClick:function(){return n=s._id,f(n,l),void O(!1);var n},children:[Object(r.jsx)("div",{children:Object(r.jsx)($.e,{})}),"Vybaven\xe9"]}),"cancelled"!==s.status&&Object(r.jsxs)("li",{onClick:function(){return n=s._id,p(n,l),void O(!1);var n},children:[Object(r.jsx)("div",{children:Object(r.jsx)(en.a,{})}),"Odstr\xe1ni\u0165"]})]}),Object(r.jsx)(vn,{}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("button",{onClick:function(){return j(s._id)},children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)($.i,{})}),"Zobraz PDF"]})}),Object(r.jsx)(k.b,{to:"/dashboard/objednavky/".concat(M,"/").concat(s._id),children:Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{children:Object(r.jsx)($.j,{})}),"Zobrazi\u0165"]})})]})]})]})]}))};function mn(){var n=Object(m.a)(["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2.5rem;\n"]);return mn=function(){return n},n}function On(){var n=Object(m.a)(["\n    min-width: 100%;\n    display: table;\n    overflow-x: scroll;\n    border-collapse: collapse;\n    border-spacing: 0;\n\n    "," {\n        :nth-child(even) {\n            background-color: var(--container-background-table-row-odd);\n            "," {\n                background-color: var(--dropdownbutton-background-color);\n            }\n\n            "," {\n                &:hover {\n                    background-color: var(--dropdownbutton-background-color);\n                }\n            }\n\n        }   \n        :nth-child(odd) {\n            "," {\n                background-color: var(--dropdownbutton-background-color-odd);\n            }\n\n            "," {\n                &:hover {\n                    background-color: var(--dropdownbutton-background-color-odd);\n                }\n            }\n        }\n    }\n"]);return On=function(){return n},n}function xn(){var n=Object(m.a)(["\n"]);return xn=function(){return n},n}function gn(){var n=Object(m.a)(["\n    display: table-row;\n\n    font-weight: bolder;\n    position: sticky;\n    top: -1.5rem;\n    background-color: var(--background-primary-color);\n\n    "," {\n        background-color: var(--background-primary-color);\n        border-bottom: 1px solid var(--secondary-text-color);\n    }\n\n    @media all and (max-width: 920px) {\n        font-size: 1.2rem\n    }\n"]);return gn=function(){return n},n}function kn(){var n=Object(m.a)(["\n    cursor: pointer;\n    padding: 1rem;\n    transition: background-color .3s ease-out; \n    width: 30rem;\n    display: table-cell;\n"]);return kn=function(){return n},n}function yn(){var n=Object(m.a)(["\n    cursor:  ",";\n    position: relative;\n    width: 30rem;\n    display: table-cell;\n    padding: 2rem;\n     \n    p {\n        display: flex;\n    }\n"]);return yn=function(){return n},n}var wn=O.c.div(yn(),(function(n){return n.clickable?"pointer":"default"})),Sn=(Object(O.c)(wn)(kn()),O.c.div(gn(),wn)),Cn=Object(O.c)(hn)(xn()),zn=O.c.div(On(),Cn,fn,bn,fn,bn),Nn=O.c.div(mn());e.default=function(){var n,e=Object(i.h)().push,t=Object(a.useContext)(u.a),m=t.closeModal,O=t.isLoading,x=t.message,g=t.showModal,k=Object(a.useState)(""),y=Object(c.a)(k,2),w=y[0],S=y[1],C=Object(a.useState)(1),z=Object(c.a)(C,2),N=z[0],B=z[1],P=Object(a.useState)([]),T=Object(c.a)(P,2),E=T[0],I=T[1],L=Object(a.useState)({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}),M=Object(c.a)(L,2),D=M[0],A=M[1],K=Object(j.c)("api/admin/orders/filter",D),H=K.isLoading,Z=K.response,_=K.refetch,V=function(){_()};return Object(a.useEffect)((function(){""===w&&(1===N?A({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}):2===N?A({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!0}}):3===N&&A({limit:10,skip:0,sortBy:{date:-1},filters:{status:"cancelled"}}),V())}),[w]),Object(a.useEffect)((function(){H||Z&&(I(null===Z||void 0===Z?void 0:Z.orders),m())}),[H,Z,N]),Object(a.useEffect)((function(){return function(){B(1),S(""),I([]),A({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}})}}),[]),Object(r.jsxs)("section",{children:[g&&Object(r.jsx)(b.a,{loading:O,title:x,close:m}),Object(r.jsx)(s.a,{searchQuery:w,handleSearch:function(){""!==w&&A((function(n){return{filters:{customId:Number(w)}}})),_()},handleChange:function(n){return S(n.target.value)},handleAddButton:function(){return e("/dashboard/objednavky/nova-objednavka")},title:"Z\xe1kazky"}),Object(r.jsx)(h.d,{children:Object(r.jsx)(h.c,{children:Object(r.jsx)(l.a,{items:v,activeIndex:N,setActiveIndex:function(n){B(n),1===n?A({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!1}}):2===n?A({limit:10,skip:0,sortBy:{date:-1},filters:{finished:!0}}):3===n&&A({limit:10,skip:0,sortBy:{date:-1},filters:{status:"cancelled"}}),V()}})})}),Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(zn,{children:[Object(r.jsxs)(Sn,{children:[Object(r.jsx)(wn,{children:"ID"}),Object(r.jsx)(wn,{clickable:!0,onClick:function(){A((function(n){var e;return Object(o.a)(Object(o.a)({},D),{},{sortBy:{date:1===(null===n||void 0===n||null===(e=n.sortBy)||void 0===e?void 0:e.date)?-1:1}})})),V()},children:Object(r.jsxs)("p",{children:["D\xe1tum ",1===(null===D||void 0===D||null===(n=D.sortBy)||void 0===n?void 0:n.date)?Object(r.jsx)(Nn,{children:Object(r.jsx)(p.a,{})}):Object(r.jsx)(Nn,{children:Object(r.jsx)(p.b,{})})]})}),Object(r.jsx)(wn,{children:"Prev\xe1dzka"}),Object(r.jsx)(wn,{children:"Status"}),Object(r.jsx)(wn,{children:"Mo\u017enosti"})]}),null===E||void 0===E?void 0:E.map((function(n,e){return Object(r.jsx)(Cn,{order:n,refetch:V},e)}))]}),Object(r.jsx)(f.a,{listItems:E,handleClickNext:function(){E.length<10||(A((function(n){return Object(o.a)(Object(o.a)({},n),{},{skip:n.skip+10})})),_())},handleClickPrev:function(){0!==D.skip&&(A((function(n){return Object(o.a)(Object(o.a)({},n),{},{skip:n.skip-10})})),_())}})]})]})}},52:function(n,e,t){"use strict";var r=t(2),o=t(21),c=t(30),a=(t(1),t(5)),i=t(6);function u(){var n=Object(a.a)(["\n    position: relative;\n\n    /* margin: 45px 0; */\n\n    .form-input {\n        /* background: none; */\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        font-size: 1.5rem;\n        padding: 1rem .5rem 1rem 2rem;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: .5rem;\n        /* border-bottom: 1px solid #000; */\n        margin: 2rem 0 0;\n        font-family: inherit;\n\n        &:focus {\n        outline: none;\n        }\n\n        &:focus ~ .form-input-label {\n            ","\n        }\n    }\n\n    input[type = 'password'] {\n        letter-spacing: 0.3em;\n    }\n\n    .form-input-label {\n        color: var(--input-color);\n        font-size: 1.4rem;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 1.5rem;\n        top: 1rem;\n        transition: 300ms ease all;\n\n        &.shrink {\n            ","\n        }\n    }\n\n    @media all and (max-width: 500px) {\n        .form-input {\n            font-size: 1.4rem;\n        }\n        /* padding: 1rem .5rem 1rem 2rem; */\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(a.a)(["\n    left: .5rem;\n    top: -14px;\n    font-size: 12px;\n    color: var(--input-color);\n"]);return s=function(){return n},n}var l=Object(i.b)(s()),d=i.c.div(u(),l,l);e.a=function(n){var e=n.handleChange,t=n.label,a=n.name,i=Object(c.a)(n,["handleChange","label","name"]);return Object(r.jsxs)(d,{children:[Object(r.jsx)("input",Object(o.a)({className:"form-input",name:a,onChange:e},i)),t?Object(r.jsx)("label",{htmlFor:a,className:"".concat(i.value.length?"shrink":""," form-input-label"),children:t}):null]})}},53:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return s})),t.d(e,"b",(function(){return l}));var r=t(7),o=t.n(r),c=t(12),a=t(10),i=t(1),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=Object(i.useState)(null),u=Object(a.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),b=Object(a.a)(d,2),f=b[0],p=b[1],j=Object(i.useState)(null),v=Object(a.a)(j,2),h=v[0],m=v[1],O=Object(i.useState)(!0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=Object(i.useState)(0),w=Object(a.a)(y,2),S=w[0],C=w[1],z=function(){return C((function(n){return n+1}))},N={method:t,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var t=Object(c.a)(o.a.mark((function t(){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return k(!0),t.prev=3,t.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),N);case 6:return r=t.sent,t.next=9,r.json();case 9:c=t.sent,m(c.message),l(c),k(!1),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),p(t.t0),k(!1),m("Nie\u010do sa pokazilo");case 20:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}})()()}),[S]),{response:s,isLoading:g,error:f,message:h,refetch:z}},s=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(a.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),b=Object(a.a)(d,2),f=b[0],p=b[1],j=Object(i.useState)(!0),v=Object(a.a)(j,2),h=v[0],m=v[1],O=Object(i.useState)(0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtknv2")),w.append("Content-Type","application/json");var S=JSON.stringify(e),C={method:"POST",headers:w,body:S,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var e=Object(c.a)(o.a.mark((function e(){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return m(!0),e.prev=3,e.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n),C);case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,l(c),m(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),p(e.t0),m(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[g,n]),{response:s,isLoading:h,error:f,refetch:y}},l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(i.useState)(null),u=Object(a.a)(r,2),s=u[0],l=u[1],d=Object(i.useState)(null),b=Object(a.a)(d,2),f=b[0],p=b[1],j=Object(i.useState)(!0),v=Object(a.a)(j,2),h=v[0],m=v[1],O=Object(i.useState)(0),x=Object(a.a)(O,2),g=x[0],k=x[1],y=function(){return k((function(n){return n+1}))},w=new Headers;w.append("auth-token",localStorage.getItem("mptkthtknv2")),w.append("Content-Type","application/json");var S={method:"GET",headers:w,redirect:"follow"};return Object(i.useEffect)((function(){(function(){var r=Object(c.a)(o.a.mark((function r(){var c,a;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return m(!0),r.prev=3,r.next=6,fetch("".concat("http://195.110.58.166:8080","/").concat(n,"/").concat(e),S);case 6:return c=r.sent,r.next=9,c.json();case 9:a=r.sent,l(a),m(!1),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),p(r.t0),m(!1);case 18:case"end":return r.stop()}}),r,null,[[3,14]])})));return function(){return r.apply(this,arguments)}})()()}),[g,n,e]),{response:s,isLoading:h,error:f,refetch:y}}},54:function(n,e,t){"use strict";var r=t(2),o=(t(1),t(5)),c=t(6),a=t(14);function i(){var n=Object(o.a)(["\n    max-width: 125rem;\n    width: 100%;\n"]);return i=function(){return n},n}function u(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    /* height: 100%; */\n    overflow-y: scroll;\n    overflow-x: visible;\n    scroll-behavior: smooth;\n    ",";\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--primary-text-color);\n\n\n\n\n    @media all and (max-width: 1150px) {\n        margin-bottom: 8rem;\n    }\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        background:  var(--background-primary-color);\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n    }\n"]);return u=function(){return n},n}var s=c.c.div(u(),a.g),l=c.c.div(i());e.a=function(n){var e=n.children;return Object(r.jsx)(s,{children:Object(r.jsx)(l,{children:e})})}},58:function(n,e,t){"use strict";var r=t(21),o=t(2),c=t(30),a=(t(1),t(5)),i=t(6),u=t(28),s=t(14);function l(){var n=Object(a.a)(["\n    transition: all 0.3s ease-out;\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n    padding: ",";\n    font-weight: ",";\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-bottom: 3rem;\n    /* "," */\n\n    ul {\n        display: flex;\n        list-style: none;\n\n        li {\n            margin-right: 1.5rem;\n        }\n    }\n"]);return d=function(){return n},n}var b=i.c.div(d(),s.g),f=Object(i.c)(u.a)(l(),(function(n){return n.active?"var(--primary-color)":"var(--background-primary-color)"}),(function(n){return n.active?"#fff":"var(--primary-text-color)"}),(function(n){return n.active?400:700}),(function(n){return n.active?".5rem 2.5rem":".5rem 1rem .5rem 0"}),(function(n){return n.active?"bolder":"normal"}));e.a=function(n){var e=n.items,t=n.activeIndex,a=n.setActiveIndex,i=Object(c.a)(n,["items","activeIndex","setActiveIndex"]);return Object(o.jsx)(b,Object(r.a)(Object(r.a)({},i),{},{children:Object(o.jsx)("ul",{children:e.map((function(n){return Object(o.jsx)("li",{children:Object(o.jsx)(f,{active:n.id===t,onClick:function(){return a(n.id)},children:n.name})},n.id)}))})}))}},60:function(n,e,t){"use strict";t.d(e,"k",(function(){return o})),t.d(e,"i",(function(){return c})),t.d(e,"h",(function(){return a})),t.d(e,"j",(function(){return i})),t.d(e,"n",(function(){return u})),t.d(e,"m",(function(){return s})),t.d(e,"l",(function(){return l})),t.d(e,"a",(function(){return d})),t.d(e,"f",(function(){return b})),t.d(e,"g",(function(){return f})),t.d(e,"d",(function(){return p})),t.d(e,"b",(function(){return j})),t.d(e,"c",(function(){return h})),t.d(e,"e",(function(){return m}));var r=t(2),o={name:"",description:"",price:0,type:0,brand:"",soldAmount:0,available:[0,1001,1001,1001,1001,1001],eanCode:"",image:"",eshop:!0,link:"",category:""},c={colorCode:"",specs:{frameColor:"",frameMaterial:"",frameStyle:"",lensColor:"",sex:"",size:[1001,1001,1001,1001]}},a={allowedCurves:[1001],allowedDiameters:[1001],dioptersRange:[1001,1001]},i={id:"",name:"",description:"",dioptersRange:[1001,1001],cylinderRange:[1001,1001],price:0,brand:"",image:""},u=["Obchodn\xe1 57, Bratislava","Obchodn\xe1 57, Bratislava","Mileti\u010dova 38, Bratislava","Vajnory, Bratislava","Senica, OC Bran\u010d","Nov\xe1 prevadzka"],s=[{name:"Dioptrick\xe9",value:1},{name:"Slne\u010dn\xe9",value:2},{name:"Kontaktn\xe9 \u0160o\u0161ovky",value:3},{name:"\u0160portov\xe9",value:4},{name:"Doplnky",value:5},{name:"Slu\u017eby",value:6},{name:"\u0160o\u0161ovky",value:0}],l=[{id:0,name:"V\u0161etko",premises:0},{id:1,name:"Obchodn\xe1 57, Bratislava",premises:1},{id:2,name:"Mileti\u010dova 38, Bratislava",premises:2},{id:3,name:"Vajnory, Bratislava",premises:3},{id:4,name:"Senica, OC Bran\u010d",premises:4},{id:5,name:"Nov\xe1 prevadzka"}],d=[{id:0,name:"Okuliare"},{id:1,name:"\u0160osovky"}],b=function(n){var e=0;return n.includes(",")?1===n.split(",")[1].length?(e=n.split(",")[0]+n.split(",")[1]+"0",Number(e)):(e=n.split(",")[0]+n.split(",")[1],Number(e)):Number(100*n)},f=function(n){var e=0;return n.includes(",")?(e=n.split(",")[0]+"."+n.split(",")[1],Number(e)):Number(n)},p=function(n,e){return void 0===n?"\u0160osovka":"number"===typeof n?n<0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(r.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(n)]})]}):0===n?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(n," ks"):0===e?n.reduce((function(n,e){return n+e}))<0||0===n.reduce((function(n,e){return n+e}))?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"V\u0161etky: 0 ks"}):"V\u0161etky: ".concat(n.reduce((function(n,e){return n+e}))," ks"):n[e]<0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}),Object(r.jsxs)("p",{style:{color:"var(--color-red)"},children:["Ch\xfdba ",Math.abs(n[e])]})]}):0===n[e]?Object(r.jsx)("p",{style:{color:"var(--color-red)"},children:"0 ks"}):"".concat(n[e]," ks")},j=function(n,e){if(void 0!==n)return 0===n.length||1001===n[e]?"":n[e].toString()},v="\xe1\xe4\u010d\u010f\xe9\xed\u013e\u013a\u0148\xf3\xf4\u0155\u0161\u0165\xfa\xfd\u017e\xc1\u010c\u010e\xc9\xcd\u013d\u0139\u0147\xd3\u0160\u0164\xda\xdd\u017d",h=function(n){for(var e="",t=0;t<n.length;t++)-1!==v.indexOf(n.charAt(t))?e+="aacdeillnoorstuyzACDEILLNOSTUYZ".charAt(v.indexOf(n.charAt(t))):e+=n.charAt(t);return e},m=function(n){return h(n).replaceAll(" ","-").toLowerCase().trim()}},63:function(n,e,t){"use strict";var r=t(2),o=(t(1),t(52)),c=t(5),a=t(6),i=t(28),u=t(14);function s(){var n=Object(c.a)(["\n    margin-top: 2rem;\n    margin-left: 1rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return s=function(){return n},n}function l(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    margin-left: 2rem;\n"]);return l=function(){return n},n}function d(){var n=Object(c.a)(["\n    background-color: var(--color-red);\n    margin-left: 1.5rem;\n    color: var(--primary-text-color);\n    padding: .5rem 1rem;\n    border-radius: 1.5rem;\n    font-size: 1.4rem;\n"]);return d=function(){return n},n}function b(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]);return b=function(){return n},n}function f(){var n=Object(c.a)(["\n    margin-top: 2rem;\n\n    display: flex;\n    align-items: center;\n\n"]);return f=function(){return n},n}function p(){var n=Object(c.a)(["\n    max-width: 125rem;\n    display: flex;\n    justify-content: space-between;\n    @media all and (max-width: 600px) {\n        flex-wrap: wrap;\n    }\n"]);return p=function(){return n},n}function j(){var n=Object(c.a)(["\n    color: var(--primary-text-color);\n    margin-bottom: 3rem;\n    ",";    \n    /* max-width: 125rem; */\n\n\n"]);return j=function(){return n},n}var v=a.c.div(j(),u.g),h=a.c.div(p()),m=a.c.div(f()),O=a.c.div(b()),x=(a.c.div(d()),Object(a.c)(i.a)(l())),g=Object(a.c)(i.a)(s());e.a=function(n){var e=n.searchQuery,t=n.handleSearch,c=n.handleChange,a=n.title,i=(n.count,n.handleAddButton),u=void 0===i?function(){}:i;return Object(r.jsx)(v,{children:Object(r.jsxs)(h,{children:[Object(r.jsx)(m,{children:Object(r.jsx)("h1",{children:a})}),Object(r.jsxs)(O,{children:[t&&Object(r.jsx)("div",{children:Object(r.jsx)(o.a,{type:"search",name:"searchbox",value:e,handleChange:c,onKeyPress:function(n){""!==e&&"Enter"===n.key&&t()},label:"Vyh\u013eada\u0165"})}),t&&Object(r.jsx)(x,{onClick:t,children:"Vyh\u013eada\u0165"}),Object(r.jsx)(g,{onClick:u,children:"Prida\u0165"})]})]})})}},64:function(n,e,t){"use strict";var r=t(2),o=t(10),c=t(1),a=t(57),i=t(5),u=t(6);function s(){var n=Object(i.a)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--text-primary-color);\n    font-size: 3.5rem;\n    transition: color .2s ease-in-out;\n\n    &:hover {\n        color: var(--primary-color);\n    }\n\n    &:disabled {\n        cursor: default;\n        opacity: .35;\n\n        &:hover {\n            color: var(--text-primary-color);\n        }\n    }\n"]);return s=function(){return n},n}function l(){var n=Object(i.a)(["\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return l=function(){return n},n}var d=u.c.div(l()),b=u.c.button(s());e.a=function(n){var e=n.listItems,t=void 0===e?[]:e,i=n.handleClickPrev,u=void 0===i?function(){}:i,s=n.handleClickNext,l=void 0===s?function(){}:s,f=Object(c.useState)(!0),p=Object(o.a)(f,2),j=p[0],v=p[1],h=Object(c.useState)(!0),m=Object(o.a)(h,2),O=m[0],x=m[1],g=Object(c.useState)(0),k=Object(o.a)(g,2),y=k[0],w=k[1];Object(c.useEffect)((function(){v(0===y)}),[t]),Object(c.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<10?x(!0):x(!1)}),[t]),Object(c.useEffect)((function(){0!==y&&w((function(n){return n--}))}),[u]),Object(c.useEffect)((function(){w((function(n){return n++}))}),[l]);return Object(r.jsxs)(d,{children:[Object(r.jsx)(b,{disabled:j,onClick:function(){u(),0!==y&&w((function(n){return n-1}))},children:Object(r.jsx)(a.b,{})}),Object(r.jsx)(b,{disabled:O,onClick:function(){l(),w((function(n){return n+1}))},children:Object(r.jsx)(a.c,{})})]})}},73:function(n,e,t){"use strict";t.r(e),t.d(e,"OrdersContext",(function(){return f}));var r=t(2),o=t(21),c=t(7),a=t.n(c),i=t(12),u=t(10),s=t(1),l=t(3),d=t(19),b=t(18),f=Object(s.createContext)({orders:null,getPDF:function(){},getOrders:function(){},createOrder:function(){},updateOrder:function(){},finishOrder:function(){},cancelOrder:function(){}});e.default=function(n){var e=n.children,t=Object(l.h)().push,c=Object(s.useContext)(b.a),p=c.setIsLoading,j=c.setShowModal,v=c.getMessage,h=c.closeModal,m=Object(s.useContext)(d.a).token,O=Object(s.useState)(null),x=Object(u.a)(O,2),g=x[0],k=x[1],y=new Headers;y.append("auth-token",m),y.append("Content-Type","application/json");var w=function(){var n=Object(i.a)(a.a.mark((function n(){var e,t,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),e={method:"GET",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),e);case 6:return t=n.sent,n.next=9,t.json();case 9:if(!(r=n.sent).orders){n.next=14;break}return k(r.orders),h(),n.abrupt("return");case 14:v(r.messageSK),p(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),p(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=Object(i.a)(a.a.mark((function n(e){var t,r,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),t={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/createPdf"),t);case 6:return r=n.sent,n.next=9,r.json();case 9:(o=n.sent).filename&&(p(!1),v(o.messageSK),setTimeout((function(){var n=window.open("".concat("http://195.110.58.166:8080","/uploads/pdf/").concat(o.filename),"_blank","noreferrer noopener");null===n||void 0===n||n.focus()}),100)),v(o.messageSK),p(!1),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),p(!1);case 20:case"end":return n.stop()}}),n,null,[[3,15]])})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=Object(i.a)(a.a.mark((function n(e){var r,c,i,u,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),r=Object(o.a)({},e),c=JSON.stringify(r),i={method:"POST",headers:y,body:c,redirect:"follow"},n.prev=5,n.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders"),i);case 8:return u=n.sent,n.next=11,u.json();case 11:(s=n.sent).order&&(w(),h(),t("/dashboard/objednavky"),setTimeout((function(){S(s.order._id)}),100)),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(5),console.log(n.t0),v("Nieco sa pokazilo"),p(!1);case 20:case"end":return n.stop()}}),n,null,[[5,15]])})));return function(e){return n.apply(this,arguments)}}(),z=function(){var n=Object(i.a)(a.a.mark((function n(e,r){var c,i,u,s,l;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),c=Object(o.a)({},e),i=JSON.stringify(c),u={method:"PATCH",headers:y,body:i,redirect:"follow"},n.prev=5,n.next=8,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(r),u);case 8:return s=n.sent,n.next=11,s.json();case 11:(l=n.sent).order&&(w(),h(),t("/dashboard/objednavky")),v(l.messageSK),p(!1),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(5),console.log(n.t0),v("Nieco sa pokazilo"),p(!1);case 22:case"end":return n.stop()}}),n,null,[[5,17]])})));return function(e,t){return n.apply(this,arguments)}}(),N=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,o,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),r={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/fulfill"),r);case 6:return o=n.sent,n.next=9,o.json();case 9:if(!(c=n.sent).order){n.next=14;break}return t(),h(),n.abrupt("return");case 14:v(c.messageSK),p(!1),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),p(!1);case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e,t){return n.apply(this,arguments)}}(),B=function(){var n=Object(i.a)(a.a.mark((function n(e,t){var r,o,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),j(!0),r={method:"POST",headers:y,redirect:"follow"},n.prev=3,n.next=6,fetch("".concat("http://195.110.58.166:8080","/api/admin/orders/").concat(e,"/cancel"),r);case 6:return o=n.sent,n.next=9,o.json();case 9:if(!(c=n.sent).order){n.next=13;break}return setTimeout((function(){t(),h()}),100),n.abrupt("return");case 13:v(c.messageSK),p(!1),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(3),console.log(n.t0),v("Nieco sa pokazilo"),p(!1);case 22:case"end":return n.stop()}}),n,null,[[3,17]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(r.jsx)(f.Provider,{value:{orders:g,getPDF:S,getOrders:w,createOrder:C,updateOrder:z,finishOrder:N,cancelOrder:B},children:e})}}}]);
//# sourceMappingURL=8.531157ec.chunk.js.map