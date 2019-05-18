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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.sidenav-content {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n  \r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n    <div [@routeAnimations]=\"prepareRoute(o)\">\n        <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n</app-navbar>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/animation */ "./src/app/services/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'anderson-davanse';
        this.showFiller = true;
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_services_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInOutAnimation"]]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/article/article.component */ "./src/app/components/article/article.component.ts");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _components_article_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/article/article-list/article-list.component */ "./src/app/components/article/article-list/article-list.component.ts");
/* harmony import */ var _components_article_single_article_single_article_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/article/single-article/single-article.component */ "./src/app/components/article/single-article/single-article.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _fragment_polyfill_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fragment.polyfill.module */ "./src/app/fragment.polyfill.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRouter = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'articles', component: _components_article_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_15__["ArticleListComponent"] },
    { path: 'articles/:id', component: _components_article_single_article_single_article_component__WEBPACK_IMPORTED_MODULE_16__["SingleArticleComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["AppNavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_article_article_component__WEBPACK_IMPORTED_MODULE_13__["ArticleComponent"],
                _components_article_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_15__["ArticleListComponent"],
                _components_article_single_article_single_article_component__WEBPACK_IMPORTED_MODULE_16__["SingleArticleComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _fragment_polyfill_module__WEBPACK_IMPORTED_MODULE_18__["FragmentPolyfillModule"].forRoot({
                    smooth: true
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRouter, {
                    useHash: true
                })
            ],
            providers: [_services_article_service__WEBPACK_IMPORTED_MODULE_14__["ArticleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/article/article-list/article-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/article/article-list/article-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    height: 250px;\r\n}\r\n\r\n.mat-card-actions {\r\n    width: 90%;    \r\n}\r\n\r\n.mat-card>.mat-card-actions:last-child {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.container-right {\r\n    float: right;    \r\n}\r\n\r\n.example-card {\r\n    width: 320px;\r\n    height: 400px;\r\n    margin: 1rem 1rem 1rem 1rem;\r\n}\r\n\r\n.article-list {\r\n    position: relative;\r\n    display: flex; \r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.mat-card-actions {\r\n    margin: 0.5rem 0.5rem 0.5rem 0.5rem;\r\n    position: absolute;\r\n    bottom: 12px;\r\n}\r\n\r\n@media only screen and (max-width: 658px) {\r\n    .example-card {\r\n        width: 270px;\r\n        height: 360px;\r\n        margin: 1rem 0.5rem 1rem 0.5rem;\r\n    }  \r\n\r\n    img {\r\n        height: 220px;\r\n    }    \r\n}"

/***/ }),

/***/ "./src/app/components/article/article-list/article-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/article/article-list/article-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-list\">\n\n  <mat-card *ngFor=\"let article of articles\" class=\"example-card\">    \n    <mat-card-header>\n      <mat-card-title>{{ article.title }}</mat-card-title>\n    </mat-card-header>    \n    <img mat-card-image [src]=\"article.imageUrl\"/>\n    <mat-card-content>\n      <p>\n        {{ article.summary }}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <div class=\"container-right\">\n         <a mat-raised-button color=\"primary\" [routerLink]=\"['../articles', article.id]\">mais...</a>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/components/article/article-list/article-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/article/article-list/article-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/article.service */ "./src/app/services/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(articleService) {
        this.articleService = articleService;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService
            .obterArtigos()
            .subscribe(function (resp) {
            _this.articles = resp;
        });
    };
    ArticleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "./src/app/components/article/article-list/article-list.component.html"),
            styles: [__webpack_require__(/*! ./article-list.component.css */ "./src/app/components/article/article-list/article-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/components/article/article.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/article/article.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/article/article.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/article/article.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-article-list></app-article-list>\n"

/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/article.service */ "./src/app/services/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(articleService) {
        this.articleService = articleService;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService
            .obterArtigos()
            .subscribe(function (resp) {
            _this.articles = resp;
        });
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/components/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/components/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/article/single-article/single-article.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/article/single-article/single-article.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    height: 40%;\r\n    width: 50%;\r\n}\r\n\r\n.color-green {\r\n    color: green;\r\n}\r\n\r\n@media only screen and (max-width: 758px) {\r\n    img {\r\n        height: 40%;\r\n        width: 100%;            \r\n    }\r\n\r\n    .article-container {\r\n        margin: 2rem 2rem 1rem 2rem;\r\n    }\r\n    \r\n    .article-botton {\r\n        margin: 2rem 2rem 1rem 2rem;\r\n    }    \r\n}"

/***/ }),

/***/ "./src/app/components/article/single-article/single-article.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/article/single-article/single-article.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"article\" id=\"{{ 'A' + article?.nextArticle.id }}\">\n  <br>\n  <br>\n  <div class=\"article-container\">\n    <span>\n      <h1><b>{{ article?.title }}</b></h1>\n    </span>\n    <hr>\n    <br>\n    <article [innerHtml]=\"article?.body\"></article>\n  </div>\n\n  <div class=\"article-botton\">\n    <hr>\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['../']\">Voltar</a>\n    &nbsp;\n\n    <a *ngIf=\"article?.nextArticle.visible\" mat-raised-button color=\"primary\" [routerLink]=\"['../', article?.nextArticle.id]\" fragment=\"{{ 'A' + article?.nextArticle.id }}\">{{ article?.nextArticle.title }}</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/article/single-article/single-article.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/article/single-article/single-article.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SingleArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleArticleComponent", function() { return SingleArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleArticleComponent = /** @class */ (function () {
    function SingleArticleComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    SingleArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('identificador: ', this.identificador);
        if (this.identificador > 0) {
            this.obterArtigo(this.identificador);
        }
        else {
            this.route.params.subscribe(function (params) {
                _this.obterArtigo(params['id']);
            });
        }
    };
    SingleArticleComponent.prototype.obterArtigo = function (identificador) {
        var _this = this;
        this.articleService.obterArtigo(identificador).subscribe(function (resp) {
            _this.article = resp;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SingleArticleComponent.prototype, "identificador", void 0);
    SingleArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-article',
            template: __webpack_require__(/*! ./single-article.component.html */ "./src/app/components/article/single-article/single-article.component.html"),
            styles: [__webpack_require__(/*! ./single-article.component.css */ "./src/app/components/article/single-article/single-article.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SingleArticleComponent);
    return SingleArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n:host {\r\n    width: 100%;\r\n}\r\n\r\n.profile-card {\r\n    width: 190px;\r\n    max-width: 400px;\r\n    margin: 1rem 2rem 1rem 2rem;\r\n}\r\n\r\n.example-header-image {\r\n    background-image: url('/assets/img/GitHub-Logo.png');\r\n    background-size: cover;\r\n}\r\n\r\n.github-img {\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n\r\n.mat-card-avatar {\r\n    height: 70px;\r\n    width: 70px;\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    text-align: center;    \r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n.mat-card-header {\r\n    text-align: center;\r\n    display: inline;\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\ni {\r\n    color: rgba(0,0,0,.54);\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"item center\">\n    <mat-card class=\"profile-card\">\n      <mat-card-content>\n        <br>\n        <a href=\"mailto:andervanse@gmail.com?Subject=Ola%20Anderson\"><img class=\"github-img\" src=\"/assets/img/email.jpg\" /></a>\n        <h3>\n          <i>\n            <a href=\"mailto:andervanse@gmail.com?Subject=Ola%20Anderson\" target=\"_top\">andervanse@gmail.com</a>\n          </i>\n        </h3>\n      </mat-card-content>\n      <mat-card-actions>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n\n  <div class=\"item center\">\n    <mat-card class=\"profile-card\">\n        <mat-card-header>\n          <mat-card-title>LinkedIn</mat-card-title>\n          <a href=\"https://www.linkedin.com/in/anderson-davanse\" target=\"_blank\"><img class=\"github-img\" src=\"/assets/img/linkedIn-22-512.png\" /></a>\n        </mat-card-header>      \n      <mat-card-content>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"item center\">\n      <mat-card class=\"profile-card\">\n        <mat-card-header>\n          <mat-card-title>GitHub</mat-card-title>\n          <a href=\"https://github.com/andervanse\" target=\"_blank\"><img class=\"github-img\" src=\"/assets/img/GitHub-Logo.png\" /></a>\n        </mat-card-header>\n        <mat-card-content>\n        </mat-card-content>\n      </mat-card>\n    </div>  \n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"article-container\" *ngIf=\"article\">\n    <app-single-article identificador='1'></app-single-article>\n</div> -->\n\n<app-article-list></app-article-list>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/article.service */ "./src/app/services/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(articleService) {
        this.articleService = articleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService
            .obterArtigo(1)
            .subscribe(function (resp) {
            _this.article = resp;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 290px;  \n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n  text-align: center;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-button {\n  font: 500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;  \n}\n\n.mat-button.home-btn {\n  width: 100%;\n}\n\n.container-right {\n  width: 100%;\n  text-align: right;\n}\n\n.container-center {\n  width: 100%;\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\">\n    <mat-toolbar>\n      <a type=\"button\" mat-button class=\"mat-button home-btn\" href=\"#\" routerLink=\"home\" (click)=\"drawer.toggle()\">Home</a>\n    </mat-toolbar>\n    <mat-nav-list>\n      <app-contact></app-contact>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <div *ngIf=\"!(isHandset$ | async)\"> \n        <a type=\"button\" aria-label=\"Toggle sidenav\" mat-button class=\"mat-button\" (click)=\"drawer.toggle()\">Menu</a>\n      </div>\n      <div [class]=\"!(isHandset$ | async) ? 'container-right' : 'container-center'\">\n        <span>Anderson Davanse</span>\n      </div>\n      <div class=\"container-right\" *ngIf=\"!(isHandset$ | async)\">\n          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n      </div>\n    </mat-toolbar>\n\n      <ng-content></ng-content>\n    \n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: AppNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbarComponent", function() { return AppNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    AppNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "./src/app/fragment.polyfill.module.ts":
/*!*********************************************!*\
  !*** ./src/app/fragment.polyfill.module.ts ***!
  \*********************************************/
/*! exports provided: WINDOW_SCROLLER_OPTIONS, WindowScroller, FragmentTargetDirective, FragmentPolyfillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_SCROLLER_OPTIONS", function() { return WINDOW_SCROLLER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowScroller", function() { return WindowScroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentTargetDirective", function() { return FragmentTargetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentPolyfillModule", function() { return FragmentPolyfillModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Import the core angular services.






var WINDOW_SCROLLER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("WindowScroller.Options");
// I provide the dependency-injection token for the window-scroller so that it can be
// more easily injected into the FragmentTarget directive. This allows other developers
// to provide an override that implements this Type without have to deal with the silly
// @Inject() decorator.
var WindowScroller = /** @class */ (function () {
    function WindowScroller() {
    }
    return WindowScroller;
}());

// I provide an implementation for scrolling a given Element Reference into view. By
// default, it uses the native .scrollIntoView() method; but, it can be overridden to
// use something like a jQuery plug-in, or other custom implementation.
var NativeWindowScroller = /** @class */ (function () {
    // I initialize the window scroller implementation.
    function NativeWindowScroller(options) {
        this.behavior = (options.smooth ? "smooth" : "auto");
        this.timer = null;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I scroll the given ElementRef into the client's viewport.
    NativeWindowScroller.prototype.scrollIntoView = function (elementRef) {
        var _this = this;
        // NOTE: There is an odd race-condition that I cannot figure out. The initial
        // scrollToView() will not work when the BROWSER IS REFRESHED. It will work if
        // the page is opened in a new tab; it only fails on refresh (WAT?!). To fix this
        // peculiarity, I'm putting the first scroll operation behind a timer. The rest
        // of the scroll operations will initiate synchronously.
        if (this.timer) {
            this.doScroll(elementRef);
        }
        else {
            this.timer = setTimeout(function () {
                _this.doScroll(elementRef);
            }, 0);
        }
    };
    // ---
    // PRIVATE METHOD.
    // ---
    // I perform the scrolling of the viewport.
    NativeWindowScroller.prototype.doScroll = function (elementRef) {
        elementRef.nativeElement.scrollIntoView({
            behavior: this.behavior,
            block: "start"
        });
    };
    NativeWindowScroller = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(WINDOW_SCROLLER_OPTIONS)),
        __metadata("design:paramtypes", [Object])
    ], NativeWindowScroller);
    return NativeWindowScroller;
}());
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var FragmentTargetDirective = /** @class */ (function () {
    // I initialize the fragment-target directive.
    function FragmentTargetDirective(activatedRoute, elementRef, windowScroller) {
        this.activatedRoute = activatedRoute;
        this.elementRef = elementRef;
        this.windowScroller = windowScroller;
        this.id = null;
        this.fragmentSubscription = null;
        this.name = null;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I get called once when the directive is being destroyed.
    FragmentTargetDirective.prototype.ngOnDestroy = function () {
        (this.fragmentSubscription) && this.fragmentSubscription.unsubscribe();
    };
    // I get called once after the inputs have been bound for the first time.
    FragmentTargetDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubscription = this.activatedRoute.fragment.subscribe(function (fragment) {
            if (!fragment) {
                return;
            }
            if ((fragment !== _this.id) &&
                (fragment !== _this.name)) {
                return;
            }
            _this.windowScroller.scrollIntoView(_this.elementRef);
        });
    };
    FragmentTargetDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[id], a[name]",
            inputs: ["id", "name"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            WindowScroller])
    ], FragmentTargetDirective);
    return FragmentTargetDirective;
}());

var FragmentPolyfillModule = /** @class */ (function () {
    function FragmentPolyfillModule() {
    }
    FragmentPolyfillModule_1 = FragmentPolyfillModule;
    FragmentPolyfillModule.forRoot = function (options) {
        return ({
            ngModule: FragmentPolyfillModule_1,
            providers: [
                {
                    provide: WINDOW_SCROLLER_OPTIONS,
                    useValue: {
                        smooth: ((options && options.smooth) || false)
                    }
                },
                {
                    provide: WindowScroller,
                    useClass: NativeWindowScroller
                }
            ]
        });
    };
    var FragmentPolyfillModule_1;
    FragmentPolyfillModule = FragmentPolyfillModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                FragmentTargetDirective
            ],
            declarations: [
                FragmentTargetDirective
            ]
        })
    ], FragmentPolyfillModule);
    return FragmentPolyfillModule;
}());



/***/ }),

/***/ "./src/app/services/animation.ts":
/*!***************************************!*\
  !*** ./src/app/services/animation.ts ***!
  \***************************************/
/*! exports provided: fadeInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOutAnimation", function() { return fadeInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s 200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s 200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/services/article.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/article.service.ts ***!
  \*********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.obterArtigo = function (articleId) {
        var _this = this;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/assets/articles.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var article = res.map(function (article) { return _this.addBaseUrlToImage(article); }).filter(function (x) { return x.id == articleId; })[0];
            while (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(article) && !article.visible) {
                article = res.map(function (a) { return _this.addBaseUrlToImage(a); }).filter(function (x) { return x.id == article.nextArticle.id; })[0];
            }
            return article;
        }));
    };
    ArticleService.prototype.obterArtigos = function () {
        var _this = this;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/assets/articles.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.map(function (article) { return _this.addBaseUrlToImage(article); }).filter(function (x) { return x.visible == true; });
        }));
    };
    ArticleService.prototype.addBaseUrlToImage = function (article) {
        if (article['imageUrl'] !== undefined)
            article['imageUrl'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + article['imageUrl'];
        return article;
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
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
    production: false,
    apiBaseUrl: 'http://localhost:4200'
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

module.exports = __webpack_require__(/*! C:\Users\ander\Documents\Projects\anderson-davanse-cv\anderson-davanse-cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map