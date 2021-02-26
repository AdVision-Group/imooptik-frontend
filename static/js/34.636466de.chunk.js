(this.webpackJsonpimooptik=this.webpackJsonpimooptik||[]).push([[34],{238:function(e,n,t){"use strict";t.r(n);var r=t(2),i=t(56),a=t(31),c=t(21),o=t(10),d=t(1),l=t(69),s=t(19),u=t(18),j=t(3),b=t(54),v=t(5),m=t(6);function h(){var e=Object(v.a)(["\n    margin-top: 2rem;\n    min-width: 16.5rem;\n    width: 100%;\n    background-color: var(--input-background-color);\n    color: var(--input-color);\n    border: none;\n    padding: .8rem 1rem .8rem 1rem;\n    font-size: inherit;\n    font-family: inherit;\n    display: block;\n"]);return h=function(){return e},e}var O=m.c.select(h()),p=function(e){var n=e.name,t=e.value,i=e.handleChange,a=e.listItems,c=e.defaultOption,o=void 0!==c&&c,d=e.defaultValue,l=e.defaultLabel;return Object(r.jsxs)(O,{name:n,value:t,onChange:function(e){return i(e)},children:[o&&Object(r.jsx)("option",{value:d,children:l}),a.map((function(e,n){if(4!==n)return Object(r.jsx)("option",{value:n+1,children:e},n)}))]})},f=t(52),x=t(32),g=t(53),y=t(65),k=t(67),C=t(14),w=t(28);function D(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    /* justify-items: center; */\n    /* align-items: center; */\n\n\n    select {\n        /* margin-top: 2rem; */\n        /* min-width: 16.5rem; */\n        width: 100%;\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        border: none;\n        padding: .8rem .5rem .8rem .5rem;\n        font-size: inherit;\n        font-family: inherit;\n        display: block;\n    }\n"]);return D=function(){return e},e}function z(){var e=Object(v.a)(["\n    padding: 2rem;\n    text-align: center;\n\n    border-right: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return z=function(){return e},e}function M(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    /* justify-items: center; */\n    border-bottom: 1px solid var(--secondary-text-color);\n"]);return M=function(){return e},e}function X(){var e=Object(v.a)(["\n    grid-column: 1/3;\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--container-background-color);\n    box-shadow: var(--container-shadow);\n    margin-bottom: 3rem;\n    min-width: 90rem;\n\n    h3 {\n        margin-bottom: 2rem;\n    }\n\n    h4 {\n        margin-top: 2rem;\n    }\n"]);return X=function(){return e},e}function T(){var e=Object(v.a)(["\n    padding: 2rem;\n    border-radius: .5rem;\n    background-color: var(--container-background-color);\n    box-shadow: var(--container-shadow);\n    margin-bottom: 3rem;\n\n    h3 {\n        margin-bottom: 2rem;\n    }\n\n    h4 {\n        margin-top: 2rem;\n    }\n\n    select {\n        margin-top: 2rem;\n        /* min-width: 16.5rem; */\n        width: 100%;\n        background-color: var(--input-background-color);\n        color: var(--input-color);\n        border: none;\n        padding: .8rem .5rem .8rem .5rem;\n        font-size: inherit;\n        font-family: inherit;\n        display: block;\n    }\n"]);return T=function(){return e},e}function N(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 3rem;\n    align-items: start;\n    margin-bottom: 5rem;\n"]);return N=function(){return e},e}function F(){var e=Object(v.a)(["\n    margin-top: 2rem;\n    background-color: var(--primary-color);\n    font-weight: bolder;\n"]);return F=function(){return e},e}function I(){var e=Object(v.a)(["\n    background-color: var(--color-red);\n"]);return I=function(){return e},e}function K(){var e=Object(v.a)(["\n    background-color: var(--primary-color);\n    font-weight: bolder;\n    margin-left: 1rem;\n"]);return K=function(){return e},e}function S(){var e=Object(v.a)(["\n    ","\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    color: var(--primary-text-color);\n"]);return S=function(){return e},e}var L=m.c.div(S(),C.g),V=Object(m.c)(w.a)(K()),A=Object(m.c)(w.a)(I()),B=Object(m.c)(w.a)(F()),P=m.c.div(N()),E=m.c.div(T()),J=m.c.div(X()),Z=m.c.div(M()),_=m.c.div(z(),(function(e){return e.isFirst?"1px solid var(--secondary-text-color)":""})),U=m.c.div(D());n.default=function(){var e,n,t,v=Object(d.useContext)(s.a),m=v.closeModal,h=v.getMessage,O=v.setShowModal,w=v.isLoading,D=v.message,z=v.showModal,M=Object(d.useContext)(u.a).isAdmin,X=Object(d.useContext)(l.BookingContext),T=X.createCalendar,N=X.updateCalendar,F=X.deleteCalendar,I=Object(j.i)().calendarId,K=Object(g.b)("api/booking/calendars",I,"novy-kalendar"===I),S=K.response,q=K.isLoading,G=Object(d.useState)({}),H=Object(o.a)(G,2),Q=H[0],R=H[1],W=Object(d.useState)(!1),Y=Object(o.a)(W,2),$=Y[0],ee=Y[1],ne=function(e){var n=e.target,t=n.name,r=n.value;if(""===r)return delete Q[t],void R(Object(c.a)({},Q));R((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},t,r))}))},te=function(e,n){var t=e.target,r=t.name,i=t.value,o=Q[r]?Q[r]:["X","X","X","X","X","X","X"];o[n]=i,R((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},r,o))}))};return Object(d.useEffect)((function(){if(!q&&S.calendar)if(ee(!0),S.calendar.exceptDays){var e=Object(k.i)(S.calendar.exceptDays);R(Object(c.a)(Object(c.a)({},S.calendar),{},{exceptDays:e})),m()}else R(S.calendar),m()}),[q]),Object(d.useEffect)((function(){return function(){ee(!1),R({})}}),[]),Object(r.jsxs)("section",{children:[z&&Object(r.jsx)(x.a,{loading:w,title:D,close:m}),Object(r.jsx)(L,{children:Object(r.jsxs)(C.c,{children:[Object(r.jsx)("div",{children:$?Object(r.jsxs)("h1",{children:["Kalend\xe1r: ",null===Q||void 0===Q?void 0:Q.name]}):Object(r.jsx)("h1",{children:"Nov\xfd kalend\xe1r"})}),Object(r.jsxs)("div",{children:[$&&Object(r.jsx)(A,{onClick:function(){return F(null===Q||void 0===Q?void 0:Q._id)},children:"Vymaza\u0165"}),Object(r.jsx)(V,{onClick:function(){if(!Q.name)return h("Meno Kalend\xe1ra je povinn\xe9"),void O(!0);if(!Q.premises)return h("Nie je zvolen\xe1 prev\xe1dzka ku ktorej patr\xed kalend\xe1r"),void O(!0);if(!Q.endTimes&&!Q.startTimes)return h("Nie s\xfa vyplnen\xe9 \u010dasy na prehliadky"),void O(!0);if(!Q.interval)return h("Nie je zvolen\xfd interval"),void O(!0);if($){var e=Object(k.f)(Q);N(e,Q._id)}else{var n={};n=Q.exceptDays?Object(c.a)(Object(c.a)({},Q),{},{exceptDays:Object(k.j)(Q.exceptDays)}):Object(c.a)({},Q),T(n)}},children:$?"Upravi\u0165":"Vytvori\u0165"})]})]})}),Object(r.jsx)(b.a,{children:Object(r.jsxs)(P,{children:[Object(r.jsxs)("div",{children:[M&&Object(r.jsxs)(E,{children:[Object(r.jsx)("h3",{children:"Z\xe1kladn\xe9 inform\xe1cie"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Kalendar je pre prev\xe1dzku"}),Object(r.jsx)(p,{name:"premises",value:(null===Q||void 0===Q?void 0:Q.premises)||"0",listItems:y.b,defaultOption:!0,defaultValue:0,defaultLabel:"Nezadan\xe9",handleChange:ne})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Meno kalend\xe1ra"}),Object(r.jsx)(f.a,{type:"text",label:"Meno*",name:"name",value:(null===Q||void 0===Q?void 0:Q.name)||"",handleChange:ne})]})]}),Object(r.jsxs)(E,{children:[Object(r.jsx)("h3",{children:"Dni kedy sa nerobia prehliadky"}),(null===Q||void 0===Q?void 0:Q.exceptDays)&&(null===Q||void 0===Q||null===(e=Q.exceptDays)||void 0===e?void 0:e.map((function(e,n){return Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{type:"date",name:"exceptDays",value:e||"",handleChange:function(e){return function(e,n){var t=e.target,r=t.name,i=t.value,o=Q[r];o[n]=i,R((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},r,o))}))}(e,n)}})},n)}))),Object(r.jsx)(B,{onClick:function(){R((function(e){return Object(c.a)(Object(c.a)({},e),{},{exceptDays:e.exceptDays?[].concat(Object(i.a)(e.exceptDays),[""]):[""]})}))},children:"Prida\u0165"})]})]}),Object(r.jsxs)(E,{children:[Object(r.jsx)("h3",{children:"Nastavenie kalend\xe1ra"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Interval medzi prehliadkami"}),Object(r.jsxs)("select",{name:"interval",value:(null===Q||void 0===Q?void 0:Q.interval)||"",onChange:ne,children:[Object(r.jsx)("option",{value:"",children:"Nezadan\xe9"}),Object(r.jsx)("option",{value:30,children:"30min"}),Object(r.jsx)("option",{value:60,children:"60min"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"\u010cas pred objednan\xedm"}),Object(r.jsx)(f.a,{type:"text",label:"Po\u010det min\xfat",name:"allowMinutesBefore",value:(null===Q||void 0===Q||null===(n=Q.allowMinutesBefore)||void 0===n?void 0:n.toString())||"",handleChange:ne})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Ko\u013eko dn\xed dopredu sa d\xe1 objedna\u0165"}),Object(r.jsx)(f.a,{type:"text",label:"Po\u010det dn\xed",name:"daysIntoFuture",value:(null===Q||void 0===Q||null===(t=Q.daysIntoFuture)||void 0===t?void 0:t.toString())||"",handleChange:ne})]})]}),Object(r.jsxs)(J,{children:[Object(r.jsx)("h3",{children:"Ordina\u010dn\xe9 hodiny"}),Object(r.jsxs)(Z,{children:[Object(r.jsx)(_,{isFirst:!0,children:"\u010cas \\ Den"}),k.c.map((function(e,n){return Object(r.jsx)(_,{children:e},n)}))]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(_,{isFirst:!0,children:"Za\u010diatok"}),Object(i.a)(Array(7)).map((function(e,n){return Object(r.jsx)(_,{children:Object(r.jsxs)("select",{name:"startTimes",value:(null===Q||void 0===Q?void 0:Q.startTimes)?null===Q||void 0===Q?void 0:Q.startTimes[n]:"x",onChange:function(e){return te(e,n)},children:[Object(r.jsx)("option",{value:"X",children:"\u017diadn\xfd"}),k.b.map((function(e,n){var t=e.name,i=e.value;return Object(r.jsx)("option",{value:i,children:t},n)}))]})},n)}))]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(_,{isFirst:!0,children:"Koniec"}),Object(i.a)(Array(7)).map((function(e,n){return Object(r.jsx)(_,{children:Object(r.jsxs)("select",{name:"endTimes",value:(null===Q||void 0===Q?void 0:Q.endTimes)?null===Q||void 0===Q?void 0:Q.endTimes[n]:"x",onChange:function(e){return te(e,n)},children:[Object(r.jsx)("option",{value:"X",children:"\u017diadn\xfd"}),k.b.map((function(e,n){var t=e.name,i=e.value;return Object(r.jsx)("option",{value:i,children:t},n)}))]})},n)}))]})]})]})})]})}}}]);
//# sourceMappingURL=34.636466de.chunk.js.map