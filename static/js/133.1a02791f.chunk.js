"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[133],{133:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(439),u=r(791),a=r(87),c="SearchForm_Searchbar__TfPCD",s="SearchForm_SearchForm__jbIQn",i="SearchForm_SearchForm_button__yxV1e",o="SearchForm_SearchForm_input__S3I-K",f=r(184),l=function(e){var t=e.updateQueryString;return(0,f.jsx)("div",{className:c,children:(0,f.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements.title.value.trim();t(r)},className:s,children:[(0,f.jsx)("input",{type:"text",name:"title",className:o}),(0,f.jsx)("button",{type:"submit",className:i,children:"Search"})]})})},p=r(10),m=r(126),h=function(){var e,t=(0,u.useState)(null),r=(0,n.Z)(t,2),c=r[0],s=r[1],i=(0,a.lr)(),o=(0,n.Z)(i,2),h=o[0],d=o[1],v=null!==(e=h.get("query"))&&void 0!==e?e:"";(0,u.useEffect)((function(){v&&(0,p.Op)(v).then((function(e){return s(e)})).catch((function(e){return console.log(e.message)}))}),[v]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{updateQueryString:function(e){d(""!==e?{query:e}:{})}}),(0,f.jsx)("div",{children:c&&(c.length>0?(0,f.jsx)(m.Z,{movies:c}):(0,f.jsx)("b",{children:"There is no such movie"}))})]})}},10:function(e,t,r){r.d(t,{Df:function(){return l},M1:function(){return d},Op:function(){return p},TP:function(){return m},f_:function(){return s},tx:function(){return h}});var n=r(861),u=r(757),a=r.n(u),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"1efdf9e7a9ff7e2165fc0b365172fcf9"};var s="https://image.tmdb.org/t/p/w500",i="/trending/movie/week",o="/search/movie",f="/movie/",l=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(i);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{query:t}},e.next=3,c.Z.get(o,r);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t+"/reviews");case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(f+t+"/credits");case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},126:function(e,t,r){var n=r(322),u=r(689),a=r(87),c=r(184);t.Z=function(e){var t=e.movies,r=(0,u.TH)();return(0,c.jsx)("div",{children:t.map((function(e){return(0,c.jsx)("li",{className:n.Z.HomeIl,children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),className:n.Z.LinkStuled,state:{from:r},children:e.title})},e.id)}))})}},322:function(e,t){t.Z={HomeUl:"Home_HomeUl__oqTpy",HomeIl:"Home_HomeIl__njWej",LinkStuled:"Home_LinkStuled__Suvn3"}}}]);
//# sourceMappingURL=133.1a02791f.chunk.js.map