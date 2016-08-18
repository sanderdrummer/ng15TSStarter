"use strict";var WP;!function(t){angular.module("wpBlog").config(["$compileProvider","$httpProvider",function(t,e){t.debugInfoEnabled(!1),e.useLegacyPromiseExtensions=!1,e.useApplyAsync(!0)}]).constant("apiUrl","http://localhost:3000/wordpress/wp-json/wp/v2/").component("wpApp",{templateUrl:"app.html"})}(WP||(WP={}));var WP;!function(t){angular.module("wpBlog").config(["$stateProvider","$urlRouterProvider",function(t,e){e.otherwise("/home"),t.state("home",{url:"/home",template:"<home></home>"}).state("posts",{url:"/posts",template:"<posts></posts>"}).state("category",{url:"/posts/:category",template:"<posts></posts>"}).state("category.post",{url:"/:id",views:{posts:{template:"<post></post>"}},onEnter:function(){document.body.classList.add("noScroll")},onExit:function(){document.body.classList.remove("noScroll")}}).state("post",{url:"/post/:id",template:"<post></post>"}).state("page",{url:"/page/:id",template:"<page></page>"})}])}(WP||(WP={}));var WP;!function(t){var e=function(){function t(t){this.$cacheFactory=t,this.cache=t("appCache")}return t.prototype.cacheList=function(t){var e=this;t.forEach(function(t){e.cache.put(t.id,t)})},t.$inject=["$cacheFactory"],t}();t.AppCache=e,angular.module("wpBlog").service("appCache",e)}(WP||(WP={}));var WP;!function(t){angular.module("wpBlog").directive("htmlRender",["$compile",function(t){var e=function(e,o){if(e.html){var a=t(e.html)(e);o.append(a)}};return{link:e,scope:{html:"<"}}}])}(WP||(WP={})),angular.module("CompiledTemplates").run(["$templateCache",function(t){t.put("app.html",'das ist ein test<nav><a ui-sref="home">HOME</a> <a ui-sref="posts">POSTS</a> <a ui-sref="post({id: 1})">Sample Post</a> <a ui-sref="page({id: 2})">Sample Page</a> <a ui-sref="category({category: \'gigs\'})">Gigs</a></nav><div ui-view=""></div>')}]),angular.module("CompiledTemplates").run(["$templateCache",function(t){t.put("components/home/home.html","HOME")}]);var WP;!function(t){var e=function(){function t(){}return t.$inject=[],t}();angular.module("wpBlog").component("home",{templateUrl:"components/home/home.html",controller:e,controllerAs:"home"})}(WP||(WP={}));