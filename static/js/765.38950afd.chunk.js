"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{765:function(e,t,r){r.r(t);var n=r(439),u=r(791),a=r(322),c=r(10),s=r(126),o=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,n.Z)(e,2),r=t[0],i=t[1];return(0,u.useEffect)((function(){(0,c.Df)().then((function(e){return i(e)})).catch((function(e){return console.log(e.message)}))}),[]),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:a.Z.HomeUl,children:(0,o.jsx)(s.Z,{movies:r})})})}},10:function(e,t,r){r.d(t,{Df:function(){return p},M1:function(){return d},Op:function(){return l},TP:function(){return m},f_:function(){return s},tx:function(){return v}});var n=r(861),u=r(757),a=r.n(u),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"1efdf9e7a9ff7e2165fc0b365172fcf9"};var s="https://image.tmdb.org/t/p/w500",o="/trending/movie/week",i="/search/movie",f="/movie/",p=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(o);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{query:t}},e.next=3,c.Z.get(i,r);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t+"/reviews");case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t+"/credits");case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},126:function(e,t,r){var n=r(322),u=r(689),a=r(87),c=r(184);t.Z=function(e){var t=e.movies,r=(0,u.TH)();return(0,c.jsx)("div",{children:t.map((function(e){return(0,c.jsx)("li",{className:n.Z.HomeIl,children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),className:n.Z.LinkStuled,state:{from:r},children:e.title})},e.id)}))})}},322:function(e,t){t.Z={HomeUl:"Home_HomeUl__oqTpy",HomeIl:"Home_HomeIl__njWej",LinkStuled:"Home_LinkStuled__Suvn3"}}}]);
//# sourceMappingURL=765.38950afd.chunk.js.map