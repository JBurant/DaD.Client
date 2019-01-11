(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modules_feed_components_feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/feed/components/feed-list/feed-list.component */ "./src/app/modules/feed/components/feed-list/feed-list.component.ts");
/* harmony import */ var src_app_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/feed/feed.module */ "./src/app/modules/feed/feed.module.ts");
/* harmony import */ var src_app_modules_article_article_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/article/article.module */ "./src/app/modules/article/article.module.ts");
/* harmony import */ var src_app_modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/editor/editor.module */ "./src/app/modules/editor/editor.module.ts");
/* harmony import */ var _modules_editor_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/editor/components/editor/editor.component */ "./src/app/modules/editor/components/editor/editor.component.ts");
/* harmony import */ var _modules_archive_components_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/archive/components/archive-list/archive-list.component */ "./src/app/modules/archive/components/archive-list/archive-list.component.ts");
/* harmony import */ var _modules_archive_archive_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/archive/archive.module */ "./src/app/modules/archive/archive.module.ts");










var routes = [
    { path: 'feed-list', component: src_app_modules_feed_components_feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_3__["FeedList"] },
    { path: 'editor', component: _modules_editor_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_7__["Editor"] },
    { path: 'archive', component: _modules_archive_components_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_8__["ArchiveList"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), src_app_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_modules_article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"], src_app_modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_6__["EditorModule"], _modules_archive_archive_module__WEBPACK_IMPORTED_MODULE_9__["ArchiveModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <nav class=\"UpperBar\">\r\n    <label>\r\n      Logo\r\n    </label>\r\n    <label>\r\n      Lonely Fort\r\n    </label>\r\n  </nav>\r\n\r\n  <nav>\r\n    <button class=\"MenuButton\" routerLink= \"feed-list\">Feed</button>\r\n    <!--\r\n    -->\r\n    <button class=\"MenuButton\" routerLink = \"editor\">New Article</button>\r\n    <!--\r\n    -->\r\n    <button class=\"MenuButton\" routerLink = \"archive\">Archive</button>\r\n  </nav>a\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/editor/editor.module */ "./src/app/modules/editor/editor.module.ts");
/* harmony import */ var _modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/feed/feed.module */ "./src/app/modules/feed/feed.module.ts");
/* harmony import */ var _modules_archive_archive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/archive/archive.module */ "./src/app/modules/archive/archive.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _modules_editor_editor_module__WEBPACK_IMPORTED_MODULE_6__["EditorModule"],
                _modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"],
                _modules_archive_archive_module__WEBPACK_IMPORTED_MODULE_8__["ArchiveModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_article_article_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/article/article-provider.service */ "./src/app/core/services/article/article-provider.service.ts");





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            providers: [_services_article_article_provider_service__WEBPACK_IMPORTED_MODULE_4__["ArticleProvider"]],
            bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/article/article-header.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/article/article-header.service.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleHeader", function() { return ArticleHeader; });
var ArticleHeader = /** @class */ (function () {
    function ArticleHeader(name, timestamp, author) {
        this.name = name;
        this.timestamp = timestamp;
        this.author = author;
    }
    return ArticleHeader;
}());



/***/ }),

/***/ "./src/app/core/services/article/article-model.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/services/article/article-model.service.ts ***!
  \****************************************************************/
/*! exports provided: ArticleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModel", function() { return ArticleModel; });
var ArticleModel = /** @class */ (function () {
    function ArticleModel(header, content) {
        this.header = header;
        this.content = content;
    }
    return ArticleModel;
}());



/***/ }),

/***/ "./src/app/core/services/article/article-provider.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/services/article/article-provider.service.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleProvider", function() { return ArticleProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _article_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-model.service */ "./src/app/core/services/article/article-model.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-header.service */ "./src/app/core/services/article/article-header.service.ts");




var ArticleProvider = /** @class */ (function () {
    function ArticleProvider(
    //private backend: Backend,
    ) {
        this.articles = [];
    }
    ArticleProvider.prototype.getArticles = function () {
        //this.backend.getAll().then((heroes: ArticleModel[]) => {
        //  this.articles.push(...heroes); // fill cache
        //});
        var article = new _article_model_service__WEBPACK_IMPORTED_MODULE_1__["ArticleModel"](new _article_header_service__WEBPACK_IMPORTED_MODULE_3__["ArticleHeader"]("Lorem ipsum", "123456789", "Jirka"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum fermentum risus at elementum sodales.Aenean ullamcorper sapien varius odio tristique, cursus semper massa feugiat.Etiam id laoreet nisl.Cras nec vestibulum enim.Nam eget imperdiet quam, a aliquet est.Donec efficitur, mauris sit amet tincidunt maximus, mauris sapien auctor velit, ut feugiat enim magna quis nisl.Pellentesque fermentum nulla ex, sed facilisis libero egestas sit amet. Praesent auctor ornare risus, ut aliquam nibh malesuada id.Sed massa erat, pharetra sed urna quis, bibendum euismod urna.Vivamus vel elementum tortor.Ut eleifend metus ac cursus maximus.Nullam in libero id elit pretium venenatis ut tempor turpis.Mauris vitae dolor a mauris lacinia euismod.Morbi porttitor scelerisque sapien, a dictum felis blandit dapibus.Ut semper sit amet nisi eget finibus.In enim eros, elementum sed nulla sed, sodales aliquam nibh.Pellentesque sit amet elit quis quam lacinia efficitur.Mauris pharetra cursus tortor, a posuere velit tempus ut. Integer commodo sollicitudin viverra.Phasellus eget ullamcorper mi.Integer porta dapibus mattis.Vestibulum gravida elementum interdum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer in ex tristique, porta eros eget, euismod enim.Maecenas dictum neque vitae tortor mollis luctus.Aliquam erat volutpat.Morbi varius ante vel metus rutrum feugiat.Phasellus euismod congue blandit.Donec in tristique tellus.Donec vitae tortor nec felis efficitur tristique.Quisque nec blandit turpis.Maecenas dapibus arcu vel scelerisque pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Mauris dictum justo ut magna posuere, ac tempor magna gravida.Cras non magna mi.Donec eu massa lorem.Mauris at venenatis mi, nec egestas risus.Cras pharetra lacinia massa, eu mattis sem aliquet eget.Aenean sagittis nibh a justo euismod cursus.Ut iaculis suscipit leo.Vestibulum malesuada, nisl ut imperdiet posuere, sem turpis pulvinar lacus, nec vehicula tortor ante et nisi.Maecenas facilisis fermentum nibh, quis dictum nisl auctor commodo.Vestibulum aliquet posuere velit nec ornare. Quisque feugiat, sapien in suscipit placerat, orci nibh elementum libero, a eleifend mauris libero ut est.In hac habitasse platea dictumst.Mauris sagittis felis sit amet leo convallis, in dignissim libero ultricies.Praesent et dolor a leo consectetur molestie vel in odio.In aliquet scelerisque nunc sit amet tempus.Sed a sagittis lectus, ac mattis nibh.Mauris fringilla nulla ut enim mattis, quis sagittis augue tincidunt.Maecenas felis magna, lobortis ac finibus a, sagittis ut dolor.Sed maximus justo efficitur nisi lobortis vehicula.Vivamus est ante, convallis non mauris ac, posuere feugiat diam. ");
        var article2 = new _article_model_service__WEBPACK_IMPORTED_MODULE_1__["ArticleModel"](new _article_header_service__WEBPACK_IMPORTED_MODULE_3__["ArticleHeader"]("Lorem ipsum", "123456789", "Jirka"), "Lorem ipsum");
        return [article, article2];
    };
    ArticleProvider.prototype.getListOfArticles = function () {
        return [new _article_header_service__WEBPACK_IMPORTED_MODULE_3__["ArticleHeader"]("Lorem ipsum", "123456789", "Jirka"), new _article_header_service__WEBPACK_IMPORTED_MODULE_3__["ArticleHeader"]("Lorem ipsum", "123456789", "Jirka")];
    };
    ArticleProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleProvider);
    return ArticleProvider;
}());



/***/ }),

/***/ "./src/app/modules/archive/archive.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/archive/archive.module.ts ***!
  \***************************************************/
/*! exports provided: ArchiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveModule", function() { return ArchiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/archive-list/archive-list.component */ "./src/app/modules/archive/components/archive-list/archive-list.component.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var src_app_modules_article_article_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/article/article.module */ "./src/app/modules/article/article.module.ts");







var ArchiveModule = /** @class */ (function () {
    function ArchiveModule() {
    }
    ArchiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_4__["ArchiveList"]],
            exports: [_components_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_4__["ArchiveList"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], src_app_modules_article_article_module__WEBPACK_IMPORTED_MODULE_6__["ArticleModule"]],
            providers: [],
            bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], ArchiveModule);
    return ArchiveModule;
}());



/***/ }),

/***/ "./src/app/modules/archive/components/archive-list/archive-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/archive/components/archive-list/archive-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ArchiveList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveList", function() { return ArchiveList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_article_article_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/article/article-provider.service */ "./src/app/core/services/article/article-provider.service.ts");



var ArchiveList = /** @class */ (function () {
    function ArchiveList() {
        this.articleProvider = new _core_services_article_article_provider_service__WEBPACK_IMPORTED_MODULE_2__["ArticleProvider"]();
        this.articles = this.articleProvider.getListOfArticles();
    }
    ArchiveList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'archive-list',
            template: __webpack_require__(/*! ./archive-list.html */ "./src/app/modules/archive/components/archive-list/archive-list.html"),
            styles: [__webpack_require__(/*! ./archive-list.scss */ "./src/app/modules/archive/components/archive-list/archive-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArchiveList);
    return ArchiveList;
}());



/***/ }),

/***/ "./src/app/modules/archive/components/archive-list/archive-list.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/archive/components/archive-list/archive-list.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ul>\r\n    <li *ngFor=\"let article of articles\">\r\n      <article-info [articleHeader] =\"article\"></article-info>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/archive/components/archive-list/archive-list.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/archive/components/archive-list/archive-list.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXJjaGl2ZS9jb21wb25lbnRzL2FyY2hpdmUtbGlzdC9hcmNoaXZlLWxpc3Quc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/article/article.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/article/article.module.ts ***!
  \***************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/article-preview/article-preview.component */ "./src/app/modules/article/components/article-preview/article-preview.component.ts");
/* harmony import */ var _components_article_info_article_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/article-info/article-info.component */ "./src/app/modules/article/components/article-info/article-info.component.ts");





var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_3__["ArticlePreview"], _components_article_info_article_info_component__WEBPACK_IMPORTED_MODULE_4__["ArticleInfo"]],
            exports: [_components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_3__["ArticlePreview"], _components_article_info_article_info_component__WEBPACK_IMPORTED_MODULE_4__["ArticleInfo"]],
            imports: [],
            providers: [],
            bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/modules/article/components/article-info/article-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/article/components/article-info/article-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ArticleInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleInfo", function() { return ArticleInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_article_article_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/article/article-header.service */ "./src/app/core/services/article/article-header.service.ts");



var ArticleInfo = /** @class */ (function () {
    function ArticleInfo() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_services_article_article_header_service__WEBPACK_IMPORTED_MODULE_2__["ArticleHeader"])
    ], ArticleInfo.prototype, "articleHeader", void 0);
    ArticleInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'article-info',
            template: __webpack_require__(/*! ./article-info.html */ "./src/app/modules/article/components/article-info/article-info.html"),
            styles: [__webpack_require__(/*! ./article-info.scss */ "./src/app/modules/article/components/article-info/article-info.scss"), __webpack_require__(/*! ../../shared/article-styles.scss */ "./src/app/modules/article/shared/article-styles.scss")]
        })
    ], ArticleInfo);
    return ArticleInfo;
}());



/***/ }),

/***/ "./src/app/modules/article/components/article-info/article-info.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/article/components/article-info/article-info.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"articleHeader\">\r\n  <label>{{articleHeader.name}}</label>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/article/components/article-info/article-info.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/article/components/article-info/article-info.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testInner {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcnRpY2xlL2NvbXBvbmVudHMvYXJ0aWNsZS1pbmZvL0M6XFxVc2Vyc1xcamlyaWJcXHNvdXJjZVxccmVwb3NcXENsaWVudFxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhcnRpY2xlXFxjb21wb25lbnRzXFxhcnRpY2xlLWluZm9cXGFydGljbGUtaW5mby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcnRpY2xlL2NvbXBvbmVudHMvYXJ0aWNsZS1pbmZvL2FydGljbGUtaW5mby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RJbm5lclxyXG57XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/article/components/article-preview/article-preview.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/article/components/article-preview/article-preview.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ArticlePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreview", function() { return ArticlePreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_article_article_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/article/article-model.service */ "./src/app/core/services/article/article-model.service.ts");



var ArticlePreview = /** @class */ (function () {
    function ArticlePreview() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_services_article_article_model_service__WEBPACK_IMPORTED_MODULE_2__["ArticleModel"])
    ], ArticlePreview.prototype, "articleModel", void 0);
    ArticlePreview = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'article-preview',
            template: __webpack_require__(/*! ./article-preview.html */ "./src/app/modules/article/components/article-preview/article-preview.html"),
            styles: [__webpack_require__(/*! ./article-preview.scss */ "./src/app/modules/article/components/article-preview/article-preview.scss"), __webpack_require__(/*! ../../shared/article-styles.scss */ "./src/app/modules/article/shared/article-styles.scss")]
        })
    ], ArticlePreview);
    return ArticlePreview;
}());



/***/ }),

/***/ "./src/app/modules/article/components/article-preview/article-preview.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/article/components/article-preview/article-preview.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article\">\r\n  <div class=\"articleHeader\">\r\n    <label>{{articleModel.header.name}}</label>\r\n    <div class=\"articleRightHeader\">\r\n      <label class=\"articleAuthor\">{{articleModel.header.author}}</label>\r\n      <label class=\"articleSpacer\"> | </label>\r\n      <label class=\"articleTimestamp\">{{articleModel.header.timestamp}}</label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"articleContent\">\r\n    <article>{{articleModel.content}}</article>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/article/components/article-preview/article-preview.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/article/components/article-preview/article-preview.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".articleContent {\n  background-color: #000099;\n  font-size: 10pt;\n  padding: 20pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcnRpY2xlL2NvbXBvbmVudHMvYXJ0aWNsZS1wcmV2aWV3L0M6XFxVc2Vyc1xcamlyaWJcXHNvdXJjZVxccmVwb3NcXENsaWVudFxcQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhcnRpY2xlXFxjb21wb25lbnRzXFxhcnRpY2xlLXByZXZpZXdcXGFydGljbGUtcHJldmlldy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQXlCO0VBQ3pCLGdCQUFlO0VBQ2YsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcnRpY2xlL2NvbXBvbmVudHMvYXJ0aWNsZS1wcmV2aWV3L2FydGljbGUtcHJldmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGVDb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDk5O1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxuICBwYWRkaW5nOiAyMHB0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/article/shared/article-styles.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/article/shared/article-styles.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article {\n  margin: 0;\n  color: white;\n  box-shadow: 0pt 2pt #AAAAAA; }\n\n.articleHeader {\n  background-color: #000066;\n  padding: 20pt; }\n\n.articleRightHeader {\n  float: right; }\n\n.articleSpacer {\n  padding-left: 10pt;\n  padding-right: 10pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcnRpY2xlL3NoYXJlZC9DOlxcVXNlcnNcXGppcmliXFxzb3VyY2VcXHJlcG9zXFxDbGllbnRcXENsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYXJ0aWNsZVxcc2hhcmVkXFxhcnRpY2xlLXN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBUztFQUNULGFBQVk7RUFDWiw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsY0FBYSxFQUNkOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXJ0aWNsZS9zaGFyZWQvYXJ0aWNsZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBwdCAycHQgI0FBQUFBQTtcclxufVxyXG5cclxuLmFydGljbGVIZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjY7XHJcbiAgcGFkZGluZzogMjBwdDtcclxufVxyXG5cclxuLmFydGljbGVSaWdodEhlYWRlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYXJ0aWNsZVNwYWNlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/editor/components/editor/editor.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/editor/components/editor/editor.component.ts ***!
  \**********************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Editor = /** @class */ (function () {
    function Editor() {
    }
    Editor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'editor',
            template: __webpack_require__(/*! ./editor.html */ "./src/app/modules/editor/components/editor/editor.html"),
            styles: [__webpack_require__(/*! ./editor.scss */ "./src/app/modules/editor/components/editor/editor.scss")]
        })
    ], Editor);
    return Editor;
}());



/***/ }),

/***/ "./src/app/modules/editor/components/editor/editor.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/editor/components/editor/editor.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\r\n  <div>\r\n    <label>Title</label>\r\n  </div>\r\n  <div>\r\n    <input />\r\n  </div>\r\n  <div>\r\n    <label>Content</label>\r\n  </div>\r\n  <div>\r\n    <textarea>Type here...</textarea>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/editor/components/editor/editor.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/editor/components/editor/editor.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor {\n  background-color: #000066;\n  padding: 10pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lZGl0b3IvY29tcG9uZW50cy9lZGl0b3IvQzpcXFVzZXJzXFxqaXJpYlxcc291cmNlXFxyZXBvc1xcQ2xpZW50XFxDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGVkaXRvclxcY29tcG9uZW50c1xcZWRpdG9yXFxlZGl0b3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDBCQUF5QjtFQUN6QixjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VkaXRvci9jb21wb25lbnRzL2VkaXRvci9lZGl0b3Iuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Jcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjY7XHJcbiAgcGFkZGluZzogMTBwdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/editor/editor.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/editor/editor.module.ts ***!
  \*************************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/modules/editor/components/editor/editor.component.ts");





var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["Editor"]],
            exports: [_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["Editor"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            providers: [],
            bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "./src/app/modules/feed/components/feed-list/feed-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/feed/components/feed-list/feed-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedList", function() { return FeedList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_article_article_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/article/article-provider.service */ "./src/app/core/services/article/article-provider.service.ts");



var FeedList = /** @class */ (function () {
    function FeedList() {
        this.articleProvider = new src_app_core_services_article_article_provider_service__WEBPACK_IMPORTED_MODULE_2__["ArticleProvider"]();
        this.articleModels = this.articleProvider.getArticles();
    }
    FeedList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed-list',
            template: __webpack_require__(/*! ./feed-list.html */ "./src/app/modules/feed/components/feed-list/feed-list.html"),
            styles: [__webpack_require__(/*! ./feed-list.scss */ "./src/app/modules/feed/components/feed-list/feed-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeedList);
    return FeedList;
}());



/***/ }),

/***/ "./src/app/modules/feed/components/feed-list/feed-list.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/feed/components/feed-list/feed-list.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ul>\r\n    <li *ngFor=\"let model of articleModels\">      <!--(click)=\"selectHero(hero)\"-->\r\n      <article-preview [articleModel] =\"model\"></article-preview>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/feed/components/feed-list/feed-list.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/feed/components/feed-list/feed-list.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtbGlzdC9mZWVkLWxpc3Quc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/feed/feed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/feed/feed.module.ts ***!
  \*********************************************/
/*! exports provided: FeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/feed-list/feed-list.component */ "./src/app/modules/feed/components/feed-list/feed-list.component.ts");
/* harmony import */ var src_app_modules_article_article_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/article/article.module */ "./src/app/modules/article/article.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var FeedModule = /** @class */ (function () {
    function FeedModule() {
    }
    FeedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_3__["FeedList"]],
            exports: [_components_feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_3__["FeedList"]],
            imports: [src_app_modules_article_article_module__WEBPACK_IMPORTED_MODULE_4__["ArticleModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            providers: [],
            bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], FeedModule);
    return FeedModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            providers: [],
            bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jirib\source\repos\Client\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map