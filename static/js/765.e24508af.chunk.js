"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{765:function(e,t,n){n.r(t);var r=n(439),u=n(791),a=n(322),c=n(10),s=n(126),o=n(184);t.default=function(){var e=(0,u.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,u.useEffect)((function(){(0,c.Df)().then((function(e){return i(e)})).catch((function(e){return console.log(e.message)}))}),[]),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:a.Z.HomeUl,children:(0,o.jsx)(s.Z,{movies:n})})})}},10:function(e,t,n){n.d(t,{Df:function(){return p},M1:function(){return v},Op:function(){return l},TP:function(){return m},f_:function(){return s},tx:function(){return d}});var r=n(861),u=n(757),a=n.n(u),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"1efdf9e7a9ff7e2165fc0b365172fcf9"};var s="https://image.tmdb.org/t/p/w500",o="/trending/movie/week",i="/search/movie",f="/movie/",p=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(o);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{query:t}},e.next=3,c.Z.get(i,n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t);case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t+"/reviews");case 2:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t+"/credits");case 2:return n=e.sent,console.log(n.data.cast),e.abrupt("return",n.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},126:function(e,t,n){var r=n(322),u=n(689),a=n(87),c=n(184);t.Z=function(e){var t=e.movies,n=(0,u.TH)();return(0,c.jsx)("div",{children:t.map((function(e){return(0,c.jsx)("li",{className:r.Z.HomeIl,children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),className:r.Z.LinkStuled,state:{from:n},children:e.title})},e.id)}))})}},322:function(e,t){t.Z={HomeUl:"Home_HomeUl__oqTpy",HomeIl:"Home_HomeIl__njWej",LinkStuled:"Home_LinkStuled__Suvn3"}}}]);
//# sourceMappingURL=765.e24508af.chunk.js.map