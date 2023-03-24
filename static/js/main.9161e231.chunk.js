(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(9),r=(c(35),c(36),c(0)),s=(c(37),c(3)),i=c(4),j=c(6),l=c(5),o="https://mate-academy.github.io/react_people-table/api/people.json";function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(o)})).then((function(e){return e.json()}));var e}c(38);var h=c(2),d=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},u=c(12),O=c.n(u),x=function(e){var t=e.person,c=t.slug,n=t.sex,r=t.name;return Object(h.jsx)(a.b,{to:"/people/".concat(c),className:O()({"has-text-danger":"f"===n}),children:r})},p=function(e){var t=e.people,c=e.slug,n=function(e){return e.slug===c},a=function(e){var c=t.find((function(t){return t.name===e}));return c?Object(h.jsx)(x,{person:c}):e||"-"};return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Sex"}),Object(h.jsx)("th",{children:"Born"}),Object(h.jsx)("th",{children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"person",className:O()({"has-background-warning":n(e)}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(x,{person:e})}),Object(h.jsx)("td",{children:e.sex}),Object(h.jsx)("td",{children:e.born}),Object(h.jsx)("td",{children:e.died}),Object(h.jsx)("td",{children:a(e.motherName)}),Object(h.jsx)("td",{children:a(e.fatherName)})]},e.slug)}))})]})},m=function(e){var t=e.slug,c=e.people,n=e.hasError;return e.isFetching?Object(h.jsx)(d,{}):n?Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):c.length?Object(h.jsx)(p,{people:c,slug:t}):Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},v=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),o=Object(l.a)(a,2),d=o[0],u=o[1],O=Object(r.useState)(!0),x=Object(l.a)(O,2),p=x[0],v=x[1],f=Object(s.p)().slug,g=void 0===f?"":f,N=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){N()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)("div",{className:"box table-container",children:Object(h.jsx)(m,{slug:g,people:c,hasError:d,isFetching:p})})})]})},f=function(){return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(a.c,{className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(h.jsx)(a.c,{className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},g=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(f,{}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/",element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsx)(s.b,{path:"home",element:Object(h.jsx)(s.a,{to:"/",replace:!0})}),Object(h.jsxs)(s.b,{path:"people",children:[Object(h.jsx)(s.b,{index:!0,element:Object(h.jsx)(v,{})}),Object(h.jsx)(s.b,{path:":slug",element:Object(h.jsx)(v,{})})]}),Object(h.jsx)(s.b,{path:"*",element:Object(h.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(h.jsx)(a.a,{children:Object(h.jsx)(g,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.9161e231.chunk.js.map