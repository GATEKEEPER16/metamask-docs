(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{341:function(t,n,r){},378:function(t,n,r){"use strict";var a=r(341);r.n(a).a},390:function(t,n,r){"use strict";r.r(n);r(10);var a={props:{repoName:{type:String,required:!0}},data:function(){return{metaMaskContributorList:[]}},mounted:function(){var t=this;fetch("https://api.github.com/repos/MetaMask/".concat(this.repoName,"/contributors")).then((function(t){return t.json()})).then((function(n){t.metaMaskContributorList=n}))}},e=(r(378),r(11)),i=Object(e.a)(a,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",t._l(t.metaMaskContributorList,(function(n){return r("div",{staticClass:"card"},[r("img",{attrs:{src:n.avatar_url,width:"100px"}}),t._v(" "),r("h4",[r("a",{attrs:{href:n.html_url,target:"_blank"}},[t._v("\n          "+t._s(n.login)+"\n        ")])])])})),0)])}),[],!1,null,"7802d31d",null);n.default=i.exports}}]);