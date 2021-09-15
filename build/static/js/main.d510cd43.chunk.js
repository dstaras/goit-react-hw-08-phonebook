(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{14:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchContactsRequest",(function(){return r})),n.d(e,"fetchContactsSuccess",(function(){return a})),n.d(e,"fetchContactsError",(function(){return u})),n.d(e,"addContactRequest",(function(){return o})),n.d(e,"addContactSuccess",(function(){return i})),n.d(e,"addContactError",(function(){return s})),n.d(e,"deleteContactRequest",(function(){return b})),n.d(e,"deleteContactSuccess",(function(){return j})),n.d(e,"deleteContactError",(function(){return l})),n.d(e,"filterContact",(function(){return d}));var c=n(8),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),l=Object(c.b)("contacts/deleteContactError"),d=Object(c.b)("contacts/filter")},162:function(t,e,n){},163:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(9),u=n.n(a),o=n(23),i=n(21),s=n(88),b=n(12),j=n(27),l=(n(114),n(42)),d=n(62),O=n(26),f=n(2),h=["isAuthenticated","redirectTo","children"];function p(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(d.a)(t,h),r=Object(i.c)(O.b.getIsAuthenticated);return Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{children:r?n:Object(f.jsx)(b.a,{to:e})}))}var x=["isAuthenticated","redirectTo","children"];function v(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(d.a)(t,x),r=Object(i.c)(O.b.getIsAuthenticated);return Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{children:r&&c.restricted?Object(f.jsx)(b.a,{to:e}):n}))}var g=n(89),m=n.n(g);var C=function(t){var e=t.children;return Object(f.jsx)("div",{className:m.a.container,children:e})},k=n(68),_=n.n(k),y=n(196);var S=function(){return Object(f.jsx)("nav",{className:_.a.nav,children:Object(f.jsx)(o.b,{to:"/",exact:!0,children:Object(f.jsx)(y.a,{className:_.a.link,variant:"h4",children:"Home"})})})},N=n(70),w=n(38),E=n.n(w),R=n(200),A=n(85),q=n.n(A),L=n(202),U=n(173);function T(){var t=r.a.useState(null),e=Object(N.a)(t,2),n=e[0],c=e[1],a=Boolean(n),u=function(){c(null)},s=Object(i.b)(),b=Object(i.c)(O.b.getUserName);return Object(f.jsxs)("div",{className:E.a.container,children:[Object(f.jsxs)(y.a,{className:E.a.name,variant:"subtitle1",children:["Welcome, ",b]}),Object(f.jsxs)("div",{className:E.a.container,children:[Object(f.jsx)(R.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(t){c(t.currentTarget)},color:"inherit",children:Object(f.jsx)(q.a,{})}),Object(f.jsxs)(U.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:u,children:[Object(f.jsx)(o.b,{className:E.a.menu__item,to:"/contacts",exact:!0,children:Object(f.jsx)(L.a,{className:E.a.menu__item,onClick:u,children:"Contacts"})}),Object(f.jsx)(L.a,{className:E.a.menu__item,onClick:function(){s(O.a.logOut()),u()},children:"Logout"})]})]})]})}var z=n(45),I=n.n(z),P=function(){return Object(f.jsxs)("div",{className:I.a.container,children:[Object(f.jsx)(o.b,{to:"/register",exact:!0,children:Object(f.jsx)(y.a,{className:I.a.link,variant:"h6",children:"Sign up"})}),Object(f.jsx)(o.b,{to:"/login",exact:!0,className:I.a.link,activeClassName:I.a.activeLink,children:Object(f.jsx)(y.a,{className:I.a.link,variant:"h6",children:"Log in"})})]})},B=n(203),M=n(204),J=n(205),G=Object(B.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function K(){var t=Object(i.c)(O.b.getIsAuthenticated),e=G();return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)(M.a,{position:"static",children:Object(f.jsxs)(J.a,{children:[Object(f.jsx)(S,{}),t?Object(f.jsx)(T,{}):Object(f.jsx)(P,{})]})})})}var F=n(74),W=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,239))})),D=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,240))})),H=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,241))})),Q=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,238))})),V=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,242))}));var Y,X,Z,$=function(){var t=Object(i.b)();return Object(c.useEffect)((function(){t(O.a.getCurrentUser())}),[t]),Object(f.jsxs)(C,{maxWidth:"md",children:[Object(f.jsx)(K,{}),Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)(F.a,{}),children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(v,{path:"/",exact:!0,children:Object(f.jsx)(W,{})}),Object(f.jsx)(v,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(f.jsx)(D,{})}),Object(f.jsx)(v,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(f.jsx)(H,{})}),Object(f.jsx)(p,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(b.b,{children:Object(f.jsx)(V,{})})]})}),Object(f.jsx)(j.a,{autoClose:3700,position:"top-center"})]})},tt=n(61),et=n(8),nt=n(32),ct=n(95),rt=n.n(ct),at=n(3),ut=n(18),ot=n(14),it=Object(et.c)([],(Y={},Object(at.a)(Y,ot.fetchContactsSuccess,(function(t,e){return e.payload})),Object(at.a)(Y,ot.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n])})),Object(at.a)(Y,ot.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Y)),st=Object(et.c)(!1,(X={},Object(at.a)(X,ot.fetchContactsRequest,(function(){return!0})),Object(at.a)(X,ot.fetchContactsSuccess,(function(){return!1})),Object(at.a)(X,ot.fetchContactsError,(function(){return!1})),Object(at.a)(X,ot.addContactRequest,(function(){return!0})),Object(at.a)(X,ot.addContactSuccess,(function(){return!1})),Object(at.a)(X,ot.addContactError,(function(){return!1})),Object(at.a)(X,ot.deleteContactRequest,(function(){return!0})),Object(at.a)(X,ot.deleteContactSuccess,(function(){return!1})),Object(at.a)(X,ot.deleteContactError,(function(){return!1})),X)),bt=Object(et.c)("",Object(at.a)({},ot.filterContact,(function(t,e){return e.payload}))),jt=function(t,e){return e.payload},lt=Object(et.c)(null,(Z={},Object(at.a)(Z,ot.fetchContactsError,jt),Object(at.a)(Z,ot.addContactError,jt),Object(at.a)(Z,ot.deleteContactError,jt),Object(at.a)(Z,ot.fetchContactsRequest,(function(){return null})),Object(at.a)(Z,ot.addContactRequest,(function(){return null})),Object(at.a)(Z,ot.deleteContactRequest,(function(){return null})),Z)),dt=Object(ut.c)({items:it,filter:bt,isLoading:st,error:lt}),Ot=n(54),ft=Object(tt.a)(Object(et.d)({serializableCheck:{ignoredActions:[nt.a,nt.f,nt.b,nt.c,nt.d,nt.e]}})),ht={key:"auth",storage:rt.a,whitelist:["token"]},pt=Object(et.a)({reducer:{auth:Object(nt.g)(ht,Ot.a),contacts:dt},middleware:ft,devTools:!1}),xt=Object(nt.h)(pt);n(162);u.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(i.a,{store:pt,children:Object(f.jsx)(s.a,{loading:null,persistor:xt,children:Object(f.jsx)(o.a,{children:Object(f.jsx)($,{})})})})}),document.getElementById("root"))},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));var c={};n.r(c),n.d(c,"register",(function(){return O})),n.d(c,"logIn",(function(){return f})),n.d(c,"logOut",(function(){return h})),n.d(c,"getCurrentUser",(function(){return p}));var r={};n.r(r),n.d(r,"getIsAuthenticated",(function(){return x})),n.d(r,"getUserName",(function(){return v})),n.d(r,"getLoading",(function(){return g})),n.d(r,"getError",(function(){return m}));var a=n(6),u=(n(54),n(31)),o=n.n(u),i=n(50),s=n(35),b=n.n(s),j=n(27);b.a.defaults.baseURL="https://connections-api.herokuapp.com/";var l=function(t){b.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){b.a.defaults.headers.common.Authorization=""},O=function(t){return function(){var e=Object(i.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(a.k)()),e.prev=1,e.next=4,b.a.post("/users/signup",t);case 4:c=e.sent,l(c.data.token),n(Object(a.l)(c.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(a.j)(e.t0)),400===e.t0.response.status?j.b.error("User creation error! Please try again!"):500===e.t0.response.status?j.b.error("Oops! Server error! Please try later!"):j.b.error("Something went wrong!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},f=function(t){return function(){var e=Object(i.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(a.e)()),e.prev=1,e.next=4,b.a.post("/users/login",t);case 4:c=e.sent,l(c.data.token),n(Object(a.f)(c.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(a.d)(e.t0)),j.b.error("Invalid email or password! Try again!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var t=Object(i.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(a.h)()),t.prev=1,t.next=4,b.a.post("/users/logout");case 4:d(),e(Object(a.i)()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(a.g)(t.t0)),500===t.t0.response.status?j.b.error("Oops! Server error! Please try later!"):j.b.error("Something went wrong! Please reload the page!");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var t=Object(i.a)(o.a.mark((function t(e,n){var c,r,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return l(r),e(Object(a.b)()),t.prev=5,t.next=8,b.a.get("/users/current");case 8:u=t.sent,e(Object(a.c)(u.data)),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(a.a)(t.t0)),d(),j.b.warn("Authorization timed out! Please authenticate again!");case 17:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},x=function(t){return t.auth.isAuthenticated},v=function(t){return t.auth.user.name},g=function(t){return t.auth.isLoading},m=function(t){return t.auth.error}},38:function(t,e,n){t.exports={container:"UserMenu_container__GgYhE",name:"UserMenu_name__3e8KV",menu__item:"UserMenu_menu__item__2LiFT"}},45:function(t,e,n){t.exports={link:"AuthNav_link__2ejsg",activeLink:"AuthNav_activeLink__3huQJ",container:"AuthNav_container__2sSIa"}},54:function(t,e,n){"use strict";var c,r,a,u,o,i=n(3),s=n(8),b=n(18),j=n(6),l={name:null,email:null},d=Object(s.c)(l,(c={},Object(i.a)(c,j.l,(function(t,e){return e.payload.user})),Object(i.a)(c,j.f,(function(t,e){return e.payload.user})),Object(i.a)(c,j.i,(function(){return l})),Object(i.a)(c,j.c,(function(t,e){return e.payload})),c)),O=Object(s.c)(null,(r={},Object(i.a)(r,j.l,(function(t,e){return e.payload.token})),Object(i.a)(r,j.f,(function(t,e){return e.payload.token})),Object(i.a)(r,j.i,(function(){return null})),r)),f=function(t,e){return e.payload},h=Object(s.c)(null,(a={},Object(i.a)(a,j.j,f),Object(i.a)(a,j.d,f),Object(i.a)(a,j.g,f),Object(i.a)(a,j.a,f),Object(i.a)(a,j.k,(function(){return null})),Object(i.a)(a,j.e,(function(){return null})),Object(i.a)(a,j.h,(function(){return null})),Object(i.a)(a,j.b,(function(){return null})),a)),p=Object(s.c)(!1,(u={},Object(i.a)(u,j.l,(function(){return!0})),Object(i.a)(u,j.f,(function(){return!0})),Object(i.a)(u,j.c,(function(){return!0})),Object(i.a)(u,j.j,(function(){return!1})),Object(i.a)(u,j.d,(function(){return!1})),Object(i.a)(u,j.a,(function(){return!1})),Object(i.a)(u,j.i,(function(){return!1})),u)),x=Object(s.c)(!1,(o={},Object(i.a)(o,j.k,(function(){return!0})),Object(i.a)(o,j.l,(function(){return!1})),Object(i.a)(o,j.j,(function(){return!1})),Object(i.a)(o,j.e,(function(){return!0})),Object(i.a)(o,j.f,(function(){return!1})),Object(i.a)(o,j.d,(function(){return!1})),Object(i.a)(o,j.h,(function(){return!0})),Object(i.a)(o,j.i,(function(){return!1})),Object(i.a)(o,j.g,(function(){return!1})),Object(i.a)(o,j.b,(function(){return!0})),Object(i.a)(o,j.c,(function(){return!1})),Object(i.a)(o,j.a,(function(){return!1})),o));e.a=Object(b.c)({user:d,isAuthenticated:p,token:O,error:h,isLoading:x})},6:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return f}));var c=n(8),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getCurrentUserRequest"),O=Object(c.b)("auth/getCurrentUserSuccess"),f=Object(c.b)("auth/getCurrentUserError")},68:function(t,e,n){t.exports={link:"Navigation_link__12o2K",activeLink:"Navigation_activeLink__2rUFB Navigation_link__12o2K"}},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n(93),r=n.n(c),a=(n(159),n(94)),u=n.n(a),o=n(2);var i=function(){return Object(o.jsx)("div",{className:u.a.overlay,children:Object(o.jsx)(r.a,{type:"ThreeDots",color:"#3f50b5",height:"35"})})}},89:function(t,e,n){t.exports={container:"Container_container__3RIox"}},94:function(t,e,n){t.exports={overlay:"LoaderComponent_overlay__3-Jp5"}}},[[163,7,8]]]);
//# sourceMappingURL=main.d510cd43.chunk.js.map