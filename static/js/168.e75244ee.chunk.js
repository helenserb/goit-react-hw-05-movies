"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{10:function(t,e,r){r.d(e,{Df:function(){return p},M1:function(){return l},Op:function(){return d},TP:function(){return v},f_:function(){return s},tx:function(){return h}});var n=r(861),u=r(757),a=r.n(u),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"1efdf9e7a9ff7e2165fc0b365172fcf9"};var s="https://image.tmdb.org/t/p/w500",i="/trending/movie/week",o="/search/movie",f="/movie/",p=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(i);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={params:{query:e}},t.next=3,c.Z.get(o,r);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(f+e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(f+e+"/reviews");case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(f+e+"/credits");case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},168:function(t,e,r){r.r(e),r.d(e,{default:function(){return o}});var n=r(439),u=r(10),a=r(689),c=r(791),s="Reviews_ReviewsStyled__WRekk",i=r(184),o=function(){var t=(0,c.useState)([]),e=(0,n.Z)(t,2),r=e[0],o=e[1],f=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.tx)(f).then((function(t){return o(t)})).catch((function(t){return console.log(t)}))}),[f]),(0,i.jsx)("div",{className:s,children:r.length>0?(0,i.jsx)("ul",{children:r.map((function(t){var e=t.id,r=t.author,n=t.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:r}),(0,i.jsx)("p",{children:n})]},e)}))}):(0,i.jsx)("b",{children:"NO reviews!"})})}}}]);
//# sourceMappingURL=168.e75244ee.chunk.js.map