(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yaxinlu/Desktop/571-Homework/HW8/my-app/src/main.ts */"zUnb");


/***/ }),

/***/ "43SX":
/*!*****************************************************************!*\
  !*** ./src/app/typeahead-template/typeahead-template.module.ts ***!
  \*****************************************************************/
/*! exports provided: NgbdTypeaheadTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadTemplateModule", function() { return NgbdTypeaheadTemplateModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _typeahead_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeahead-template */ "Hyku");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class NgbdTypeaheadTemplateModule {
}
NgbdTypeaheadTemplateModule.ɵfac = function NgbdTypeaheadTemplateModule_Factory(t) { return new (t || NgbdTypeaheadTemplateModule)(); };
NgbdTypeaheadTemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NgbdTypeaheadTemplateModule, bootstrap: [_typeahead_template__WEBPACK_IMPORTED_MODULE_4__["NgbdTypeaheadTemplate"]] });
NgbdTypeaheadTemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NgbdTypeaheadTemplateModule, { declarations: [_typeahead_template__WEBPACK_IMPORTED_MODULE_4__["NgbdTypeaheadTemplate"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]], exports: [_typeahead_template__WEBPACK_IMPORTED_MODULE_4__["NgbdTypeaheadTemplate"]] }); })();


/***/ }),

/***/ "5Xtw":
/*!********************************************!*\
  !*** ./src/app/services/detail.service.ts ***!
  \********************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DetailService {
    constructor(http) {
        this.http = http;
        this.url = '/api/detail';
    }
    getDetails(type, id) {
        console.log(id);
        this.url = '/api/detail' + "?type=" + type + "&id=" + id.toString();
        console.log(this.url);
        return this.http.get(this.url);
    }
    getDetails2(type, id) {
        console.log(id);
        this.url = '/api/detail2' + "?type=" + type + "&id=" + id.toString();
        console.log(this.url);
        return this.http.get(this.url);
    }
    getDetails3(type, id) {
        //"/api/credits"
        this.url = '/api/credits' + "?type=" + type + "&id=" + id.toString();
        console.log(this.url);
        return this.http.get(this.url);
    }
    getPerson(id) {
        //"/api/credits"
        this.url = '/api/person' + "?id=" + id.toString();
        console.log(this.url);
        return this.http.get(this.url);
    }
    getExternal(id) {
        this.url =  '/api/external' + "?id=" + id.toString();
        console.log(this.url);
        return this.http.get(this.url);
    }
    getReview(type, id) {
        this.url =  "/api/review" + "?type=" + type + "&id=" + id.toString();
        console.log(this.url);
        return this.http.get(this.url);
    }
    getRecommend_Or_Similar(type, id, type2) {
        if (type2 == "Recommended Movies" || type2 == "Recommended TV Shows") {
            this.url =   "/api/recommend" + "?type=" + type + "&id=" + id.toString();
            return this.http.get(this.url);
        }
        else {
            this.url =  "/api/similar" + "?type=" + type + "&id=" + id.toString();
            return this.http.get(this.url);
        }
    }
}
DetailService.ɵfac = function DetailService_Factory(t) { return new (t || DetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetailService, factory: DetailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5dtB":
/*!***********************************************!*\
  !*** ./src/app/services/carousel2.service.ts ***!
  \***********************************************/
/*! exports provided: Carousel2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel2Service", function() { return Carousel2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class Carousel2Service {
    constructor(http) {
        this.http = http;
    }
    getUrl(my_url) {
        return this.http.get( my_url);
    }
}
Carousel2Service.ɵfac = function Carousel2Service_Factory(t) { return new (t || Carousel2Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
Carousel2Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Carousel2Service, factory: Carousel2Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _typeahead_template_typeahead_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../typeahead-template/typeahead-template */ "Hyku");






const _c0 = function () { return { exact: true }; };
class NavBarComponent {
    constructor(breakpointObserver, cdRef) {
        this.breakpointObserver = breakpointObserver;
        this.cdRef = cdRef;
        this.isMenuCollapsed = true;
        this.mobile = false;
    }
    showMe() {
        console.log("now isMenuCollapse is");
        console.log(this.isMenuCollapsed);
    }
    changeHide(val) {
        console.log("receive the emit!");
        this.isMenuCollapsed = true;
        console.log("already change the status of isMeu!");
    }
    ngOnInit() {
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall]) {
                console.log('Matches XSmall viewport');
                this.mobile = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small]) {
                console.log('Matches Small viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium]) {
                console.log('Matches Medium  viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large]) {
                console.log('Matches Large viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge]) {
                console.log('Matches XLarge viewport');
                this.mobile = false;
            }
        });
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 16, vars: 13, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", 2, "background-color", "rgb(0, 10, 25)", "padding-left", "5%", "padding-bottom", "0"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand", 3, "routerLinkActiveOptions", "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], [1, "sr-only"], [1, "nav-item", 2, "position", "relative", "left", "20%"], ["routerLink", "/mylist", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], [3, "onHide"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_1_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_3_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_8_listener() { ctx.isMenuCollapsed = true; return ctx.showMe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_13_listener() { ctx.isMenuCollapsed = true; return ctx.showMe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngbd-typeahead-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onHide", function NavBarComponent_Template_ngbd_typeahead_template_onHide_15_listener($event) { return ctx.changeHide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("my_alink11", !ctx.mobile)("my_alink1", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("my_alink2", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _typeahead_template_typeahead_template__WEBPACK_IMPORTED_MODULE_4__["NgbdTypeaheadTemplate"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */", ".navbar[_ngcontent-%COMP%]{\n  position: sticky;\n    top: 0;\n    width: 100%;\n    z-index: 999;\n}\n\n.my_alink1[_ngcontent-%COMP%]{\n  padding-left: 83%;\n}\n\n.my_alink11[_ngcontent-%COMP%]{\n  padding-left:30%;\n}\n.my_alink2[_ngcontent-%COMP%]{\n  padding-left:60%;\n}"] });


/***/ }),

/***/ "6AZv":
/*!****************************************************!*\
  !*** ./src/app/tv-details/tv-details.component.ts ***!
  \****************************************************/
/*! exports provided: TvDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvDetailsComponent", function() { return TvDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail-video/detail-video.component */ "G0z7");
/* harmony import */ var _cast_cast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cast/cast.component */ "lNMc");




class TvDetailsComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            window.scrollTo(0, 0);
            return false;
        };
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
    }
}
TvDetailsComponent.ɵfac = function TvDetailsComponent_Factory(t) { return new (t || TvDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TvDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvDetailsComponent, selectors: [["app-tv-details"]], decls: 3, vars: 2, consts: [[2, "background-color", "rgb(7, 5, 38)"], [3, "cate"]], template: function TvDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "tv");
    } }, directives: [_detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_2__["DetailVideoComponent"], _cast_cast_component__WEBPACK_IMPORTED_MODULE_3__["CastComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0di1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "76GK":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function MylistComponent_div_0_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.titles[i_r5]);
} }
function MylistComponent_div_0_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.titles[i_r5]);
} }
function MylistComponent_div_0_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.titles[i_r5]);
} }
function MylistComponent_div_0_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.titles[i_r5]);
} }
function MylistComponent_div_0_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.titles[i_r5]);
} }
function MylistComponent_div_0_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.titles[i_r5]);
} }
function MylistComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function MylistComponent_div_0_div_5_Template_div_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const i_r5 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r18.display_text[i_r5] = true); })("mouseout", function MylistComponent_div_0_div_5_Template_div_mouseout_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const i_r5 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r20.display_text[i_r5] = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MylistComponent_div_0_div_5_div_5_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MylistComponent_div_0_div_5_div_6_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MylistComponent_div_0_div_5_div_7_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MylistComponent_div_0_div_5_div_8_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MylistComponent_div_0_div_5_div_9_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MylistComponent_div_0_div_5_div_10_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("col-sm-2", !ctx_r3.mobile)("col-12", ctx_r3.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("card-mobile", ctx_r3.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx_r3.getDetailLink(i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 6 == 0 && ctx_r3.display_text[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 6 == 1 && ctx_r3.display_text[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 6 == 2 && ctx_r3.display_text[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 6 == 3 && ctx_r3.display_text[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 6 == 4 && ctx_r3.display_text[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 6 == 5 && ctx_r3.display_text[i_r5]);
} }
function MylistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MylistComponent_div_0_div_5_Template, 11, 14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("listheader", !ctx_r0.mobile)("listheader-mobile", ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
function MylistComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No items found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("warn", !ctx_r2.mobile)("warn-mobile", ctx_r2.mobile);
} }
class MylistComponent {
    constructor(cdRef, breakpointObserver) {
        this.cdRef = cdRef;
        this.breakpointObserver = breakpointObserver;
        this.images = new Array();
        this.display_text = new Array();
        this.titles = new Array();
        this.ids = new Array();
        this.multiKind = new Array();
        this.mobile = false;
        this.displayOrNot = false;
    }
    getDetailLink(i) {
        //console.log('/watch/'+ this.kind +'/'+ this.ids[i].toString());
        return '/watch/' + this.multiKind[i] + '/' + this.ids[i].toString();
    }
    ngOnInit() {
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall]) {
                console.log('Matches XSmall viewport');
                this.mobile = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small]) {
                console.log('Matches Small viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium]) {
                console.log('Matches Medium  viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large]) {
                console.log('Matches Large viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge]) {
                console.log('Matches XLarge viewport');
                this.mobile = false;
            }
        });
        let pastSearches = new Array();
        if (!localStorage)
            return;
        if (localStorage["watchlist"]) {
            pastSearches = JSON.parse(localStorage["watchlist"]);
        }
        else {
            return;
        }
        if (pastSearches.length == 0) {
            return;
        }
        this.displayOrNot = true;
        for (var i = 0; i < pastSearches.length; i++) {
            this.images[i] = "https://image.tmdb.org/t/p/w500" + pastSearches[i].imgs;
            this.ids[i] = pastSearches[i].id;
            this.titles[i] = pastSearches[i].name;
            this.multiKind[i] = pastSearches[i].type;
            //this.display_text[i] = false;
        }
        this.cdRef.detectChanges();
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 3, vars: 2, consts: [["class", "video1", 4, "ngIf", "ngIfElse"], ["other", ""], [1, "video1"], [1, "container"], [1, "row"], [3, "col-sm-2", "col-12", 4, "ngFor", "ngForOf"], [1, "card", 3, "mouseover", "mouseout"], ["routerLinkActive", "active", 3, "routerLink"], [1, "card-body"], [2, "width", "100%", 3, "src"], ["class", "text1", 4, "ngIf"], ["class", "text2", 4, "ngIf"], ["class", "text3", 4, "ngIf"], ["class", "text4", 4, "ngIf"], ["class", "text5", 4, "ngIf"], ["class", "text6", 4, "ngIf"], [1, "text1"], [1, "p1"], [1, "text2"], [1, "text3"], [1, "text4"], [1, "text5"], [1, "text6"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MylistComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MylistComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayOrNot)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteWxpc3QuY29tcG9uZW50LmNzcyJ9 */", ".listheader[_ngcontent-%COMP%]{\n    margin-top: 0%;\n    padding-top: 0%;\n\n    color:white;\n     background-color:rgb(7, 5, 38);\n     padding-left: 10%;\n    padding-bottom: 3%;\n}\n\n.listheader-mobile[_ngcontent-%COMP%]{\n    margin-top: 0%;\n    padding-top: 12%;\n    color: white;\n    background-color: rgb(7, 5, 38);\n    padding-left: 10%;\n    padding-bottom: 9%;\n}\n\n.video1[_ngcontent-%COMP%]{\n  background-color: rgb(7, 5, 38);\n    min-height: 80vh;\n}\n\n\n[_nghost-%COMP%]     .card-text{\n\n}\n\n[_nghost-%COMP%]     .card-body{\n  padding:0;\n}\n[_nghost-%COMP%]     .card{\n  border: 0px solid rgba(0, 0, 0, 0.125);\n  margin-bottom: 40%;\n}\n\n.p1[_ngcontent-%COMP%]{\n    width: 100%;\n    overflow: hidden;\n    white-space: normal;\n    padding-left: 5%;\n    padding-right: 4%;\n    padding-top:5%;\n }\n\n\n .text1[_ngcontent-%COMP%]{\n   color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 0%;\n  right: 0;\n  padding-top: 1%;\n  width: 100%;\n\n\n\n }\n\n .text2[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding-top: 1%;\n  width: 100%;\n }\n\n .text3[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding-top: 1%;\n  width: 100%;\n\n }\n\n .text4[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding-top: 1%;\n  width: 100%;\n }\n\n .text5[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding-top: 1%;\n  width: 100%;\n }\n\n .text6[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding-top: 1%;\n  width: 100%;\n }\n\n .card-mobile[_ngcontent-%COMP%]{\n  width: 70%;\n    margin-left: 15%;\n    margin-bottom: 20%;\n }\n\n\n .warn-mobile[_ngcontent-%COMP%]{\n  color: white;\n    text-align: center;\n    padding-top: 20%;\n    width: 80%;\n    margin-left: 10%;\n }\n\n .warn[_ngcontent-%COMP%]{\n\n  color:white; text-align:center;\n }"] });


/***/ }),

/***/ "8Sq0":
/*!**************************************************!*\
  !*** ./src/app/carousel2/carousel2.component.ts ***!
  \**************************************************/
/*! exports provided: Carousel2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel2Component", function() { return Carousel2Component; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_carousel2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/carousel2.service */ "5dtB");
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/detail.service */ "5Xtw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









function Carousel2Component_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.cate);
} }
function Carousel2Component_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.cate);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.titles[i_r9 * 6 + j_r13]);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.titles[i_r9 * 6 + j_r13]);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.titles[i_r9 * 6 + j_r13]);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r17.titles[i_r9 * 6 + j_r13]);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r18.titles[i_r9 * 6 + j_r13]);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.titles[i_r9 * 6 + j_r13]);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_Template_div_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const j_r13 = ctx.index; const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return (ctx_r32.display_text[i_r9 * 6 + j_r13] = true); })("mouseout", function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_Template_div_mouseout_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const j_r13 = ctx.index; const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return (ctx_r35.display_text[i_r9 * 6 + j_r13] = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_4_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_5_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_6_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_7_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_8_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_div_9_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r12 = ctx.$implicit;
    const j_r13 = ctx.index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", ctx_r11.getDetailLink(i_r9 * 6 + j_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r13 % 6 == 0 && ctx_r11.display_text[i_r9 * 6 + j_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r13 % 6 == 1 && ctx_r11.display_text[i_r9 * 6 + j_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r13 % 6 == 2 && ctx_r11.display_text[i_r9 * 6 + j_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r13 % 6 == 3 && ctx_r11.display_text[i_r9 * 6 + j_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r13 % 6 == 4 && ctx_r11.display_text[i_r9 * 6 + j_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r13 % 6 == 5 && ctx_r11.display_text[i_r9 * 6 + j_r13]);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_div_0_Template, 10, 8, "div", 11);
} if (rf & 2) {
    const group_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r8);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Carousel2Component_div_0_div_4_ngb_carousel_1_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} }
function Carousel2Component_div_0_div_4_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel2Component_div_0_div_4_ngb_carousel_1_1_Template, 1, 0, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", !ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.imagesFormatted);
} }
function Carousel2Component_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel2Component_div_0_div_4_ngb_carousel_1_Template, 2, 3, "ngb-carousel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.mobile);
} }
function Carousel2Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel2Component_div_0_div_1_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Carousel2Component_div_0_ng_template_2_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, Carousel2Component_div_0_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.first)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.images);
} }
function Carousel2Component_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r39.cate);
} }
function Carousel2Component_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r41.cate);
} }
function Carousel2Component_div_1_div_4_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r46 = ctx_r48.index;
    const image_r45 = ctx_r48.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", ctx_r47.getDetailLink(i_r46));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r45, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r47.titles[i_r46]);
} }
function Carousel2Component_div_1_div_4_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Carousel2Component_div_1_div_4_ngb_carousel_1_1_ng_template_0_Template, 7, 3, "ng-template", 10);
} }
function Carousel2Component_div_1_div_4_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel2Component_div_1_div_4_ngb_carousel_1_1_Template, 1, 0, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", !ctx_r43.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r43.images);
} }
function Carousel2Component_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel2Component_div_1_div_4_ngb_carousel_1_Template, 2, 3, "ngb-carousel", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r42.mobile);
} }
function Carousel2Component_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel2Component_div_1_div_1_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Carousel2Component_div_1_ng_template_2_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, Carousel2Component_div_1_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.first)("ngIfElse", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.images);
} }
class Carousel2Component {
    constructor(config, Carousel2Service, DetailService, cdRef, breakpointObserver) {
        this.Carousel2Service = Carousel2Service;
        this.DetailService = DetailService;
        this.cdRef = cdRef;
        this.breakpointObserver = breakpointObserver;
        this.mobile = false;
        this.First = false;
        this.cate = "Popular Movies";
        this.first = false;
        this.input_id = 0;
        this.statusUrl = "/api/popular";
        //we will change it into placeholder img
        this.images = new Array();
        this.imagesFormatted = new Array();
        this.ids = new Array();
        this.titles = new Array();
        this.kind = "movie";
        this.display_text = new Array();
        this.multiKind = new Array();
        this.details = false;
        this.display = true;
        config.pauseOnHover = true;
        config.interval = 100000000;
    }
    IsFirst() {
        return this.First;
    }
    getDetailLink(i) {
        //console.log('/watch/'+ this.kind +'/'+ this.ids[i].toString());
        return '/watch/' + this.multiKind[i] + '/' + this.ids[i].toString();
    }
    ngOnInit() {
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
                console.log('Matches XSmall viewport');
                this.mobile = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
                console.log('Matches Small viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                console.log('Matches Medium  viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                console.log('Matches Large viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                console.log('Matches XLarge viewport');
                this.mobile = false;
            }
        });
        //first we should know which part we are in!
        if (this.cate == "Popular Movies") {
            this.statusUrl = "/api/popular";
            this.First = true;
        }
        else if (this.cate == "Top Rated Movies") {
            this.statusUrl = "/api/tp-m";
        }
        else if (this.cate == "Trending Movies") {
            this.statusUrl = "/api/trending-m";
        }
        else if (this.cate == "Popular TV Shows") {
            this.statusUrl = "/api/pop-tv";
            this.kind = "tv";
        }
        //// "/api/rated-tv"
        else if (this.cate == "Top Rated TV Shows") {
            this.statusUrl = "/api/rated-tv";
            this.kind = "tv";
        }
        else if (this.cate == "Trending TV Shows") {
            this.statusUrl = "/api/trend-tv";
            this.kind = "tv";
        }
        else if (this.cate == "Recommended Movies") {
            this.statusUrl = "/api/recommend";
            this.kind = "movie";
            this.details = true;
        }
        else if (this.cate == "Similar Movies") {
            this.statusUrl = "/api/similar";
            this.kind = "movie";
            this.details = true;
        }
        else if (this.cate == "Similar TV Shows") {
            this.kind = "tv";
            this.details = true;
        }
        else if (this.cate == "Recommended TV Shows") {
            this.kind = "tv";
            this.details = true;
        }
        else {
            this.kind = "multi";
        }
        //and other caraousels....
        if (this.kind != "multi" && this.details == false) {
            this.Carousel2Service.getUrl(this.statusUrl).subscribe((result) => {
                this.Current_play = result.results;
                //only here we will print out the status! or we will get noting!
                let num = this.Current_play.length > 24 ? 24 : this.Current_play.length;
                console.log(num);
                console.log(this.Current_play);
                var j = 0;
                for (var i = 0; i < this.Current_play.length; i++) {
                    if (this.Current_play[i].poster_path == null || this.Current_play[i].poster_path == "") {
                        continue;
                    }
                    if (j == num)
                        break;
                    this.images[j] = "https://image.tmdb.org/t/p/w500" + this.Current_play[i].poster_path;
                    this.ids[j] = this.Current_play[i].id;
                    console.log(this.images[j]);
                    if (this.kind == "movie")
                        this.titles[j] = this.Current_play[i].title;
                    else
                        this.titles[j] = this.Current_play[i].name;
                    this.multiKind[j] = this.kind;
                    j++;
                }
                var true_num = j;
                j = -1;
                console.log("True is");
                console.log(true_num);
                for (var i = 0; i < true_num; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.imagesFormatted[j] = [];
                        this.imagesFormatted[j].push(this.images[i]);
                    }
                    else {
                        this.imagesFormatted[j].push(this.images[i]);
                    }
                }
                console.log(this.imagesFormatted);
            });
        }
        else if (this.details == true) {
            //this.details = false;
            this.DetailService.getRecommend_Or_Similar(this.kind, this.input_id, this.cate).subscribe((result) => {
                this.Current_play = result.results;
                //only here we will print out the status! or we will get noting!
                console.log(result);
                console.log(this.Current_play);
                if (this.Current_play.length == 0) {
                    console.log("display is false!!");
                    this.display = false;
                    this.cdRef.detectChanges();
                }
                console.log("num is");
                let num = this.Current_play.length > 24 ? 24 : this.Current_play.length;
                console.log(num);
                console.log(this.Current_play);
                var j = 0;
                for (var i = 0; i < this.Current_play.length; i++) {
                    if (this.Current_play[i].poster_path == null || this.Current_play[i].poster_path == "") {
                        continue;
                    }
                    if (j == num)
                        break;
                    this.images[j] = "https://image.tmdb.org/t/p/w500" + this.Current_play[i].poster_path;
                    this.ids[j] = this.Current_play[i].id;
                    console.log(this.images[j]);
                    if (this.kind == "movie")
                        this.titles[j] = this.Current_play[i].title;
                    else
                        this.titles[j] = this.Current_play[i].name;
                    this.multiKind[j] = this.kind;
                    j++;
                }
                var true_num = j;
                j = -1;
                console.log("True is");
                console.log(true_num);
                for (var i = 0; i < true_num; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.imagesFormatted[j] = [];
                        this.imagesFormatted[j].push(this.images[i]);
                    }
                    else {
                        this.imagesFormatted[j].push(this.images[i]);
                    }
                }
                console.log(this.imagesFormatted);
            });
        }
        else {
            let pastSearches = new Array();
            if (!localStorage)
                return;
            if (this.cate == "My WatchList") {
                if (localStorage["watchlist"]) {
                    pastSearches = JSON.parse(localStorage["watchlist"]);
                }
                else {
                    this.display = false;
                    this.cdRef.detectChanges();
                    return;
                }
            }
            else {
                //continue watch
                if (localStorage["continue"]) {
                    pastSearches = JSON.parse(localStorage["continue"]);
                }
                else {
                    this.display = false;
                    this.cdRef.detectChanges();
                    return;
                }
            }
            if (pastSearches.length == 0) {
                this.display = false;
                this.cdRef.detectChanges();
                return;
            }
            for (var i = 0; i < pastSearches.length; i++) {
                this.images[i] = "https://image.tmdb.org/t/p/w500" + pastSearches[i].imgs;
                this.ids[i] = pastSearches[i].id;
                this.titles[i] = pastSearches[i].name;
                this.multiKind[i] = pastSearches[i].type;
            }
            //we use the data in this
            var j = -1;
            for (var i = 0; i < pastSearches.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.imagesFormatted[j] = [];
                    this.imagesFormatted[j].push(this.images[i]);
                }
                else {
                    this.imagesFormatted[j].push(this.images[i]);
                }
            }
        }
    }
}
Carousel2Component.ɵfac = function Carousel2Component_Factory(t) { return new (t || Carousel2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_carousel2_service__WEBPACK_IMPORTED_MODULE_3__["Carousel2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_detail_service__WEBPACK_IMPORTED_MODULE_4__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
Carousel2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Carousel2Component, selectors: [["app-carousel2"]], inputs: { cate: "cate", first: "first", input_id: "input_id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "title_of_carousel1", 4, "ngIf", "ngIfElse"], ["other", ""], ["class", "carou", 4, "ngIf"], [1, "title_of_carousel1"], [1, "title_of_carousel"], [1, "carou"], ["style", "padding-left: 10%;\n    background-color:rgb(7, 5, 38);", 3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [2, "padding-left", "10%", "background-color", "rgb(7, 5, 38)", 3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["class", "", "style", "display: inline; padding-right: 2.5%;", 4, "ngFor", "ngForOf"], [1, "", 2, "display", "inline", "padding-right", "2.5%"], [2, "display", "inline", "white-space", "nowrap", "overflow", "hidden", 3, "mouseover", "mouseout"], ["routerLinkActive", "active", 3, "routerLink"], [1, "img1", "zoom", 2, "width", "12.8%", 3, "src"], ["class", "text1", 4, "ngIf"], ["class", "text2", 4, "ngIf"], ["class", "text3", 4, "ngIf"], ["class", "text4", 4, "ngIf"], ["class", "text5", 4, "ngIf"], ["class", "text6", 4, "ngIf"], [1, "text1"], [1, "p1"], [1, "text2"], [1, "text3"], [1, "text4"], [1, "text5"], [1, "text6"], ["class", "my_title2", 4, "ngIf", "ngIfElse"], [1, "my_title2"], [1, "my_title"], ["style", "padding-left: 16%; background-color:rgb(7, 5, 38);  margin-bottom: 15%;", 3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [2, "padding-left", "16%", "background-color", "rgb(7, 5, 38)", "margin-bottom", "15%", 3, "showNavigationArrows", "showNavigationIndicators"], [1, "zoom", 2, "width", "80%", "overflow", "hidden", "max-width", "300px"], [1, "col-xs-12", "col-md-3", "col-lg-3", "col-sm-12"], [1, "img1", 2, "width", "100%", 3, "src"], [1, "text7"]], template: function Carousel2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Carousel2Component_div_0_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel2Component_div_1_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.display && !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.display && ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbDIuY29tcG9uZW50LmNzcyJ9 */", "*[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n  [_nghost-%COMP%]     .carousel-indicators{\n  top:110%;\n }\n\n .text1[_ngcontent-%COMP%]{\n   color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 0%;\n  right: 0;\n  padding-top: 1%;\n  width: 13.5%;\n\n }\n\n .text2[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 14.6%;\n  right: 0;\n  padding-top: 1%;\n  width: 14.3%;\n }\n\n .text3[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 29.8%;\n  right: 0;\n  padding-top: 1%;\n  width: 14.3%;\n\n }\n\n .text4[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 45%;\n  right: 0;\n  padding-top: 1%;\n  width: 14.4%;\n }\n\n .text5[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 60.5%;\n  right: 0;\n  padding-top: 1%;\n  width: 14.4%;\n }\n\n .text6[_ngcontent-%COMP%]{\n  color:white;\n   font-size: small;\n   position: absolute;\n   background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 75.6%;\n  right: 0;\n  padding-top: 1%;\n  width: 14.4%;\n }\n\n .text7[_ngcontent-%COMP%]{\n\n  bottom: 0;\n\n  position: absolute;\n    color: white;\n    font-size: 85%;\n    right: 0;\n    padding-top: 35%;\n    padding-bottom: 2.5%;\n    left: 5%;\n    padding-left: 10%;\n    width: 90%;\n    top: 63%;\n    background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n }\n\n .p1[_ngcontent-%COMP%]{\n   color: white;\n    width: 100%;\n    overflow: hidden;\n    white-space: normal;\n    padding-left: 5%;\n    padding-right: 4%;\n    padding-top:5%;\n }\n\n\n\n .zoom[_ngcontent-%COMP%] {\n  transition: transform .2s; \n}\n\n.zoom[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1); \n}\n\n.my_title[_ngcontent-%COMP%]{\n    color: white;\n\n    margin-bottom: 4%;\n    font-size: 280%;\n\n    margin-top: 19%;\n\n    padding-bottom: 5%;\n    padding-top: 4%;\n\n\n\n    margin-left: 10%;\n    text-align: left;\n    width: 80%;\n    padding-left: 0;\n}\n\n.my_title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  font-size: 2.5rem;\n}\n\n.my_title2[_ngcontent-%COMP%]{\n  color: white;\n\n    margin-top: 5%;\n    padding-bottom: 5%;\n    padding-top: 4%;\n    font-size: 2.5rem;\n\n    text-align: left;\n    width: 80%;\n    font-size: 2.5rem;\n    margin-left: 10%;\n    text-align: left;\n    width: 80%;\n    padding-left: 0;\n\n}\n\n.my_title2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  font-size: 2.5rem;\n}"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _carousel1_carousel1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel1/carousel1.component */ "IvtG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel2_carousel2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel2/carousel2.component */ "8Sq0");






function HomeComponent_app_carousel2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel2", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "Continue Watching")("first", ctx_r0.ContinueOrNOT());
} }
class HomeComponent {
    constructor(http, config) {
        this.http = http;
    }
    ContinueOrNOT() {
        if (localStorage) {
            if (localStorage["continue"])
                return true;
        }
        return false;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 8, consts: [[2, "background-color", "rgb(7, 5, 38)"], [3, "cate", "first", 4, "ngIf"], [3, "cate", "first"], [3, "cate"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_carousel2_2_Template, 1, 2, "app-carousel2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-carousel2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-carousel2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-carousel2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-carousel2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-carousel2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-carousel2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ContinueOrNOT());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "Popular Movies")("first", !ctx.ContinueOrNOT());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "Trending TV Shows");
    } }, directives: [_carousel1_carousel1_component__WEBPACK_IMPORTED_MODULE_3__["Carousel1Component"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _carousel2_carousel2_component__WEBPACK_IMPORTED_MODULE_5__["Carousel2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */", "[_nghost-%COMP%]    .title_of_carousel1{\n    color:white;\n     background-color:rgb(7, 5, 38);\n     padding-left: 10%;\n     padding-top: 3%;\n     padding-bottom: 3%;\n  }\n\n  [_nghost-%COMP%]    .title_of_carousel{\n    color:white;\n    background-color:rgb(7, 5, 38);\n     padding-left: 10%;\n     padding-top: 4%;\n     padding-bottom: 2%;\n     margin-top: 3%;\n  }\n\n  [_nghost-%COMP%]    .carou{\n    background-color: rgb(7, 5, 38);\n      height: 300px;\n\n  }\n\n    ng-scrollbar.virtual-scroll {\n    --scrollbar-size: 8px;\n    --scrollbar-thumb-color: gray;\n    --scrollbar-hover-size: 12px;\n    --scrollbar-track-color: rgba(0, 0, 0, 0.05);\n    --scrollbar-border-radius: 10px;\n\n\n    height: 1000px;\n\n    border-radius: 6px;\n    border: 1px solid gray;\n    overflow: hidden;\n  }\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px grey;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  border: 1px solid rgb(148, 154, 150);\n  border-radius: 5px;\n\n  -webkit-appearance: none;\n  width: 4px;\n  height: 6px;\n  background-color: rgb(7, 5, 38);\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  width:1%;\n  border-radius: 5px;\n  background-color:rgb(148, 154, 150);\n}"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "G0z7":
/*!********************************************************!*\
  !*** ./src/app/detail-video/detail-video.component.ts ***!
  \********************************************************/
/*! exports provided: DetailVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailVideoComponent", function() { return DetailVideoComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/detail.service */ "5Xtw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function DetailVideoComponent_div_2_ngb_alert_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function DetailVideoComponent_div_2_ngb_alert_21_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.Alertclose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx_r1.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.successMessage, " ");
} }
function DetailVideoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "youtube-player", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailVideoComponent_div_2_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.buttonclick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DetailVideoComponent_div_2_ngb_alert_21_Template, 3, 2, "ngb-alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("video_play", !ctx_r0.mobile)("video_play2", ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("videoId", ctx_r0.video_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mobile_context2", ctx_r0.mobile)("context2", !ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("head1", !ctx_r0.mobile)("head2", ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.tagline, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.second_line, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.g_line, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.g_line2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.s_line, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.s_line2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.button_mes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.close);
} }
class DetailVideoComponent {
    constructor(route, DetailService, cdRef, breakpointObserver) {
        this.route = route;
        this.DetailService = DetailService;
        this.cdRef = cdRef;
        this.breakpointObserver = breakpointObserver;
        this.cate = "";
        this.video_url = "tzkWB85ULJY?controls=0";
        this.video_url2 = "tzkWB85ULJY?controls=0";
        this.find = false;
        this.video_type = "";
        this.video_name = "";
        this.name = "";
        this.genres = new Array();
        this.spoken_lang = new Array();
        this.img_url = "";
        this.mobile = false;
        this.staticAlertClosed = false;
        this.successMessage = "Added to watchlist.";
        this.close = true;
        this.button_mes = "Add to Watchlist";
        this.alertType = 'success';
    }
    //initialize must carefull!! need to check the localhost
    Initilize() {
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall]) {
                console.log('Matches XSmall viewport');
                this.mobile = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small]) {
                console.log('Matches Small viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium]) {
                console.log('Matches Medium  viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large]) {
                console.log('Matches Large viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge]) {
                console.log('Matches XLarge viewport');
                this.mobile = false;
            }
        });
        let pastSearches = new Array();
        console.log("change");
        let cur = { name: this.name, id: this.id, type: this.cate, imgs: this.img_url };
        if (localStorage) {
            if (localStorage["watchlist"]) {
                pastSearches = JSON.parse(localStorage["watchlist"]);
                console.log("change2");
                console.log(pastSearches);
                console.log(cur);
            }
            else
                return;
            //first delete this item in array, then add it!
            for (var i = 0; i < pastSearches.length; i++) {
                if (JSON.stringify(pastSearches[i]) === JSON.stringify(cur)) {
                    console.log("change3");
                    //we already have it in our list! so we must change the button message and alert message
                    this.button_mes = "Remove from Watchlist";
                    this.successMessage = "Removed from watchlist.";
                    this.alertType = 'danger';
                }
            }
        }
    }
    Alertclose() {
        //if already close, must return!
        if (this.close)
            return;
        this.close = true;
        if (this.button_mes == "Add to Watchlist") {
            this.successMessage = "Added to watchlist.";
            this.alertType = 'success';
        }
        else if (this.button_mes == "Remove from Watchlist") {
            this.successMessage = "Removed from watchlist.";
            this.alertType = 'danger';
        }
    }
    buttonclick() {
        if (this.button_mes == "" || this.button_mes == "Add to Watchlist") {
            this.button_mes = "Remove from Watchlist";
            //we should add current into the localstorage
            let cur = { name: this.name, id: this.id, type: this.cate, imgs: this.img_url };
            this.SetLocalStorageItem(cur, "watchlist");
        }
        else {
            //we should remove it from localstorage
            this.button_mes = "Add to Watchlist";
            let cur = { name: this.name, id: this.id, type: this.cate, imgs: this.img_url };
            this.RemoveFromStorage(cur, "watchlist");
        }
        this.close = false;
        setTimeout(() => (this.Alertclose()), 5000);
    }
    RemoveFromStorage(search, dic) {
        let pastSearches = new Array();
        if (localStorage) {
            if (localStorage[dic]) {
                pastSearches = JSON.parse(localStorage[dic]);
            }
            else {
                return;
            }
            //first delete this item in array,
            for (var i = 0; i < pastSearches.length; i++) {
                if (JSON.stringify(pastSearches[i]) === JSON.stringify(search)) {
                    pastSearches.splice(i, 1);
                }
            }
            localStorage.setItem(dic, JSON.stringify(pastSearches));
            console.log(localStorage);
            return;
        }
    }
    SetLocalStorageItem(search, dic) {
        let pastSearches = new Array();
        // Check if the browser support Local Storage
        if (localStorage) {
            if (localStorage[dic]) {
                pastSearches = JSON.parse(localStorage[dic]);
            }
            else {
                //the dictionary does not exist yet, we must create one!
                pastSearches = new Array();
            }
            // Check if the value exists in the array,
            // returns -1 if the array does not contain the value
            //first delete this item in array, then add it!
            for (var i = 0; i < pastSearches.length; i++) {
                if (JSON.stringify(pastSearches[i]) === JSON.stringify(search)) {
                    pastSearches.splice(i, 1);
                }
            }
            pastSearches.unshift(search);
            //  ...pop one at the end if array is too big
            if (pastSearches.length > 24) {
                pastSearches.pop();
            }
            // Adding the search to the storage
            localStorage.setItem(dic, JSON.stringify(pastSearches));
            console.log(localStorage);
            console.log(pastSearches);
        }
    }
    ShareUrl() {
        var _a, _b;
        //https://twitter.com/intent/tweet?text=watch%20me%0Ahttps://www.youtube.com/watch?v=HjlNHsMEXAg%20%0A&hashtags=USC,CSCI571,FightOn
        let url_twitter = "https://twitter.com/intent/tweet?text=Watch " + this.name + "%0A" + "https://www.youtube.com/watch?v="
            + this.video_url2 + "%0A&hashtags=USC,CSCI571,FightOn";
        (_a = document.querySelector(".twitter-btn")) === null || _a === void 0 ? void 0 : _a.setAttribute("href", url_twitter);
        console.log("we set url here");
        console.log(this.video_url2);
        console.log(document.querySelector(".twitter-btn"));
        let url_facebook = "https://www.facebook.com/sharer.php?u=" + "https://www.youtube.com/watch?v=" + this.video_url2;
        (_b = document.querySelector(".facebook-btn")) === null || _b === void 0 ? void 0 : _b.setAttribute("href", url_facebook);
        this.cdRef.detectChanges();
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.DetailService.getDetails(this.cate, this.id).subscribe((result) => {
            //only here we will print out the status! or we will get noting!
            this.find = false;
            var array = result.results;
            console.log(array);
            for (var i = 0; i < array.length; i++) {
                if (this.find == true)
                    break;
                console.log(array[i].type);
                if (array[i].type === "Trailer") {
                    console.log("enter if!");
                    this.video_url = array[i].key + "?controls=0";
                    this.video_url2 = array[i].key;
                    this.video_name = array[i].name;
                    this.video_type = array[i].type;
                    this.find = true;
                }
                else if (array[i].type == "Teaser") {
                    this.video_url = array[i].key + "?controls=0";
                    this.video_url2 = array[i].key;
                    this.find = true;
                    this.video_name = array[i].name;
                    this.video_type = array[i].type;
                }
            }
            if (!this.find)
                this.video_url = "tzkWB85ULJY?controls=0";
            this.find = true;
            this.cdRef.detectChanges();
            console.log(this.video_url);
        });
        this.DetailService.getDetails2(this.cate, this.id).subscribe((result) => {
            var res = result;
            if (this.cate == "movie")
                this.name = res.title;
            else
                this.name = res.name;
            for (var i = 0; i < res.genres.length; i++) {
                this.genres[i] = res.genres[i]['name'];
            }
            for (var i = 0; i < res.spoken_languages.length; i++) {
                this.spoken_lang[i] = res.spoken_languages[i]['english_name'];
            }
            this.img_url = res.poster_path;
            if (this.cate == "movie")
                this.runtime = res.runtime;
            else
                this.runtime = res.episode_run_time[0];
            this.overview = res.overview;
            this.vote_average = res.vote_average;
            this.tagline = res.tagline;
            if (this.cate == "movie")
                this.date = res.release_date.slice(0, 4);
            else
                this.date = res.first_air_date.slice(0, 4);
            this.second_line = this.date + ' | ' + '\u2605' + "    " + this.vote_average + ' | ' + Math.floor(this.runtime / 60)
                + 'hrs ' + this.runtime % 60 + 'mins';
            if (Math.floor(this.runtime / 60) == 0)
                this.second_line = this.date + ' | ' + '\u2605' + "    " + this.vote_average + ' | '
                    + this.runtime % 60 + 'mins';
            if (this.runtime % 60 == 0)
                this.second_line = this.date + ' | ' + '\u2605' + "    " + this.vote_average + ' | '
                    + Math.floor(this.runtime / 60) + 'hrs ';
            else if (Math.floor(this.runtime / 60) == 0 && this.runtime % 60 == 0) {
                this.second_line = this.date + ' | ' + '\u2605' + "    " + this.vote_average;
            }
            this.g_line = "Genres : ";
            this.g_line2 = "";
            for (var i = 0; i < this.genres.length; i++) {
                if (i == this.genres.length - 1)
                    this.g_line2 = this.g_line2 + this.genres[i];
                else
                    this.g_line2 = this.g_line2 + this.genres[i] + ",";
            }
            this.s_line = "Spoken Languages : ";
            this.s_line2 = "";
            for (var i = 0; i < this.spoken_lang.length; i++) {
                if (i == this.spoken_lang.length - 1)
                    this.s_line2 = this.s_line2 + this.spoken_lang[i];
                else
                    this.s_line2 = this.s_line2 + this.spoken_lang[i] + ",";
            }
            let cur = { name: this.name, id: this.id, type: this.cate, imgs: this.img_url };
            this.SetLocalStorageItem(cur, "continue");
            this.Initilize();
            this.ShareUrl();
        });
        //initilize the button and alert!can not do it here!because detail2.subscribe is asychornous!
        //if we do anything here, then it may excute before we fetch all data we want!
    }
}
DetailVideoComponent.ɵfac = function DetailVideoComponent_Factory(t) { return new (t || DetailVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
DetailVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailVideoComponent, selectors: [["app-detail-video"]], inputs: { cate: "cate" }, decls: 16, vars: 16, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["class", "whole container-fluid", 4, "ngIf"], [2, "background-color", "rgb(7, 5, 38)", "padding-top", "5%"], [1, "text1", "des"], [2, "color", "grey"], [1, "text1", 2, "margin-bottom", "-0.8%"], ["href", "#", "target", "_blank", 1, "twitter-btn"], [1, "fab", "fa-twitter", "icon1"], ["href", "#", "target", "_blank", 1, "facebook-btn"], [1, "fa", "fa-facebook-official", "icon1", "icon2"], [1, "whole", "container-fluid"], ["suggestedQuality", "highres", 2, "width", "100%", 3, "videoId"], [1, "text1"], [1, "text1", "tagline"], [1, "text1", "two_line"], [1, "text1", "g_s"], [1, "text1", "g_s2"], [1, "btn", "btn-primary", "button1", 3, "click"], ["class", "alert1", 3, "type", "closed", 4, "ngIf"], [1, "alert1", 3, "type", "closed"], ["selfClosingAlert", ""]], template: function DetailVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DetailVideoComponent_div_2_Template, 22, 22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.find);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("des", !ctx.mobile)("des2", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("share-btn-container2", ctx.mobile)("share-btn-container", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("icon3", !ctx.mobile)("icon22", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("iconf", ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtdmlkZW8uY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%]     .container-fluid{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  white-space: normal;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin-left: 0%;\n  margin-right:0%;\n  padding-right: 0;\n    padding-left: 0;\n\n}\n  .whole[_ngcontent-%COMP%]{\n     background-color:  rgb(7, 5, 38);\n     padding-top: 2%;\n     height: 100%;\n\n\n  }\n  .video_play[_ngcontent-%COMP%]{\n    display: block;\n    margin-left: 10%;\n    margin-right:0;\n    width: 50%;\n  }\n.video_play[_ngcontent-%COMP%]     iframe{\n  position: absolute;\n  top:0;\n  left:10%;\n  width:50%;\n  top: 16%;\n\n}\n\n.video_play2[_ngcontent-%COMP%]{\n    display: block;\n    margin-left: 10%;\n    margin-right:0;\n    width: 80%;\n    height: 5vh;\n    margin-top: 10%;\n  }\n.video_play2[_ngcontent-%COMP%]     iframe{\n  position: absolute;\n  top:8%;\n  left:8%;\n  width:85%;\n\n  height:30%;\n}\n  .text1[_ngcontent-%COMP%]{\n    display: block;\n    color:white;\n    margin-left: 0.6em;\n  }\n\n  .head1[_ngcontent-%COMP%]{\n     width: 60%;\n     font-size:380%;\n     font-weight: normal;\n  }\n\n  .head2[_ngcontent-%COMP%]{\n    width: 70%;\n     font-size:380%;\n     font-weight: normal;\n  }\n\n  .tagline[_ngcontent-%COMP%]{\n    font-size: 150%;\n    display: block;\n    padding-left: 4%;\n\n  }\n\n  .two_line[_ngcontent-%COMP%]{\n    font-size: 180%;\n    display: block;\n    padding-left: 4%;\n  }\n\n  .g_s[_ngcontent-%COMP%]{\n\n    font-size: 150%;\n    display: block;\n    padding-left: 4%;\n    margin-bottom: 0;\n\n  }\n\n  .g_s2[_ngcontent-%COMP%]{\n\n  font-size: 150%;\n  display: block;\n  padding-left: 4%;\n  margin-top: 0;\n\n  }\n\n  .button1[_ngcontent-%COMP%]{\n    margin-left:6.5%;\n  }\n\n  .alert1[_ngcontent-%COMP%]{\n    margin-left:6.5%;\n    width:60%;\n    font-weight: normal;\n  }\n\n  .des[_ngcontent-%COMP%]{\n    margin-top: 0;\n    padding-left: 10%;\n    width: 89%;\n  }\n\n  .des2[_ngcontent-%COMP%]{\n    margin-top: 0;\n    padding-left: 4%;\n    width: 89%;\n  }\n\n\n.share-btn-container[_ngcontent-%COMP%]  {\n  padding-left: 9.5%;\n}\n\n.share-btn-container2[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n\n  .share-btn-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 200%;\n}\n\n.icon1[_ngcontent-%COMP%]{\n  padding: 0.3%;\n}\n\n.fa-facebook-official[_ngcontent-%COMP%] {\ncolor:rgb(23, 0, 255);\nbackground-color: rgb(7, 5, 38);\nfont-size:40px;\n}\n.fa[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 30px;\n  width: 50px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n}\n\n.context2[_ngcontent-%COMP%]{\n  margin-left: 0%;display: block;\n        text-align: left;\n        color: white;\n        font-size: small;\n        font-weight: lighter; width: 37%;\n\n}\n\n.mobile_context2[_ngcontent-%COMP%]{\n  padding-top: 52%;\n  width: 100%;\n  margin-left: 0%;display: block;\n        text-align: left;\n        color: white;\n        font-size: small;\n        font-weight: lighter;\n}\n\n.icon2[_ngcontent-%COMP%]{\n  padding-left: 0.6%;\n}\n\n.icon3[_ngcontent-%COMP%]{\n  padding-left: 1%;\n}\n\n.icon22[_ngcontent-%COMP%]{\n  padding-left: 4%; font-size: 180%;\n}\n\n.iconf[_ngcontent-%COMP%]{\n  padding-top:0%;\n}"] });


/***/ }),

/***/ "Hyku":
/*!**********************************************************!*\
  !*** ./src/app/typeahead-template/typeahead-template.ts ***!
  \**********************************************************/
/*! exports provided: NgbdTypeaheadTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadTemplate", function() { return NgbdTypeaheadTemplate; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_multi_search1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/multi-search1.service */ "mIF7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









function NgbdTypeaheadTemplate_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngb-highlight", 5);
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", r_r2["imgs"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", ctx_r1.truncateString(r_r2.name, 20))("term", t_r3);
} }
const statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
];
class NgbdTypeaheadTemplate {
    constructor(MultiSearch1Service, router) {
        this.MultiSearch1Service = MultiSearch1Service;
        this.router = router;
        this.multi_res = new Array(7);
        this.searching = false;
        this.searchFailed = false;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.searching = true), 
            // switchMap allows returning an observable rather than maps array
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((searchText) => this.MultiSearch1Service.Lookup(searchText).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.searchFailed = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => {
                this.searchFailed = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }))));
        };
        this.formatter = (x) => x.name;
    }
    setHide() {
        this.onHide.emit(true);
    }
    getDetailLink2(i, type) {
        //console.log('/watch/'+ this.kind +'/'+ this.ids[i].toString());
        return '/watch/' + type + '/' + i.toString();
    }
    selectedItem(item) {
        this.clickedItem = item.item;
        console.log("you select the item!");
        this.setHide();
        this.router.navigate([this.getDetailLink2(this.clickedItem.id, this.clickedItem.type)]);
    }
    truncateString(str, num) {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (str.length <= num) {
            return str;
        }
        // Return str truncated with '...' concatenated to the end of str.
        return str.slice(0, num) + '...';
    }
}
NgbdTypeaheadTemplate.ɵfac = function NgbdTypeaheadTemplate_Factory(t) { return new (t || NgbdTypeaheadTemplate)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_multi_search1_service__WEBPACK_IMPORTED_MODULE_3__["MultiSearch1Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NgbdTypeaheadTemplate.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgbdTypeaheadTemplate, selectors: [["ngbd-typeahead-template"]], outputs: { onHide: "onHide" }, decls: 6, vars: 6, consts: [[1, "form-inline"], [1, "form-group"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "Search", 1, "form-control", "mx-sm-3", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "selectItem"], [1, "mr-1", 2, "width", "100px", 3, "src"], [3, "result", "term"]], template: function NgbdTypeaheadTemplate_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NgbdTypeaheadTemplate_ng_template_2_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NgbdTypeaheadTemplate_Template_input_ngModelChange_4_listener($event) { return ctx.model = $event; })("selectItem", function NgbdTypeaheadTemplate_Template_input_selectItem_4_listener($event) { return ctx.selectedItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbHighlight"]], styles: [".form-control[_ngcontent-%COMP%] { width: 300px; }", ".form-control[_ngcontent-%COMP%] {\n  width:90%;\n  background-color: transparent;\n  border-color: transparent;\n  border-bottom-color: white;\n  border-radius: 0;\n  color: white;\n}\n\n\n  .dropdown-menu{\n  background-color: rgb(7, 5, 38);\n  color: white;\n  border-color: white;\n  border-width: 1px;\n  border-radius: 5px;\n}\n\n  .dropdown-item{\n  color: white;\n}"] });


/***/ }),

/***/ "IvtG":
/*!**************************************************!*\
  !*** ./src/app/carousel1/carousel1.component.ts ***!
  \**************************************************/
/*! exports provided: Carousel1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel1Component", function() { return Carousel1Component; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








function Carousel1Component_div_0_ngb_carousel_2_1_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.titles[i_r5]);
} }
function Carousel1Component_div_0_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Carousel1Component_div_0_ngb_carousel_2_1_ng_template_0_div_3_Template, 3, 1, "div", 9);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r5 = ctx_r9.index;
    const image_r4 = ctx_r9.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", ctx_r6.getDetailLink(i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.display_text);
} }
function Carousel1Component_div_0_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Carousel1Component_div_0_ngb_carousel_2_1_ng_template_0_Template, 4, 3, "ng-template", 5);
} }
function Carousel1Component_div_0_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function Carousel1Component_div_0_ngb_carousel_2_Template_ngb_carousel_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.display_text = true; })("mouseout", function Carousel1Component_div_0_ngb_carousel_2_Template_ngb_carousel_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.display_text = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel1Component_div_0_ngb_carousel_2_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.images);
} }
function Carousel1Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Carousel1Component_div_0_ngb_carousel_2_Template, 2, 1, "ngb-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.images);
} }
function Carousel1Component_div_1_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r16 = ctx_r18.index;
    const image_r15 = ctx_r18.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", ctx_r17.getDetailLink(i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r17.titles[i_r16]);
} }
function Carousel1Component_div_1_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Carousel1Component_div_1_ngb_carousel_2_1_ng_template_0_Template, 6, 3, "ng-template", 5);
} }
function Carousel1Component_div_1_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel1Component_div_1_ngb_carousel_2_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r13.images);
} }
function Carousel1Component_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Carousel1Component_div_1_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.images);
} }
class Carousel1Component {
    constructor(http, config, breakpointObserver) {
        this.http = http;
        this.breakpointObserver = breakpointObserver;
        this.statusUrl = "http://localhost:8080" + '/api/status';
        //we will change it into placeholder img
        this.images = [700, 800, 807, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.ids = [1, 2, 3, 4, 5];
        this.titles = ['unknow', 'unknow', 'unknow', 'unknow', 'unknow'];
        this.display_text = false;
        this.mobile = false;
        //
        config.interval = 500000;
        config.keyboard = true;
        config.pauseOnHover = true;
    }
    getDetailLink(i) {
        //console.log('/watch/'+ this.kind +'/'+ this.ids[i].toString());
        return '/watch/movie/' + this.ids[i].toString();
    }
    ngOnInit() {
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
                console.log('Matches XSmall viewport');
                this.mobile = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
                console.log('Matches Small viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                console.log('Matches Medium  viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                console.log('Matches Large viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                console.log('Matches XLarge viewport');
                this.mobile = false;
            }
        });
        this.http.get(this.statusUrl).subscribe((result) => {
            this.Current_play = result.results;
            //only here we will print out the status! or we will get noting!
            console.log(result);
            console.log(this.Current_play);
            for (var i = 0; i < 5; i++) {
                this.images[i] = "https://image.tmdb.org/t/p/original" + this.Current_play[i].backdrop_path;
                this.ids[i] = this.Current_play[i].id;
                this.titles[i] = this.Current_play[i].title;
            }
            console.log(this.titles);
        });
    }
}
Carousel1Component.ɵfac = function Carousel1Component_Factory(t) { return new (t || Carousel1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
Carousel1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Carousel1Component, selectors: [["app-carousel1"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "container-fluid", "zoom", 2, "background-color", "rgb(7, 5, 38)", "padding-left", "5%", "padding-right", "5%"], ["style", "display: block;padding-right: 5%; height: max-content;", 3, "mouseover", "mouseout", 4, "ngIf"], [2, "display", "block", "padding-right", "5%", "height", "max-content", 3, "mouseover", "mouseout"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["routerLinkActive", "active", 3, "routerLink"], [1, "wrapper"], ["alt", "Random first slide", 2, "margin-left", "2%", 3, "src"], ["class", "carousel-caption", 4, "ngIf"], [1, "carousel-caption"], [2, "padding-left", "5.5%", "font-size", "medium", "font-weight", "normal", "text-align", "left"], [1, "container-fluid", "zoom", 2, "background-color", "rgb(7, 5, 38)", "padding-left", "5%", "padding-right", "5%", "padding-top", "10%"], ["style", "display: block;padding-right: 5%; height: max-content;", 3, "showNavigationIndicators", 4, "ngIf"], [2, "display", "block", "padding-right", "5%", "height", "max-content", 3, "showNavigationIndicators"], [1, "wrapper2"], [1, "carousel-caption", "my_carousel_cap"], [2, "padding-left", "5.5%", "font-size", "small", "font-weight", "300", "text-align", "left"]], template: function Carousel1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Carousel1Component_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carousel1Component_div_1_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbDEuY29tcG9uZW50LmNzcyJ9 */", "\n\n*:focus {\n    outline: none;\n}\n\n  ngb-carousel .wrapper {\n    position: relative;\n\n      padding-top: 25%;\n      padding-left:4%;\n      padding-right: 10%;\n      height: 440px;\n  }\n\n  ngb-carousel .wrapper2{\n    position: relative;\n    padding-top: 25%;\n    padding-left: 4%;\n    padding-right: 10%;\n    height: 220px;\n}\n\nngb-carousel .wrapper2>img {\n    position: absolute;\n    top: 10%;\n      left: 4%;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n\n  }\n\n  ngb-carousel .wrapper>img {\n    position: absolute;\n    top: 10%;\n      left: 4%;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n\n  }\n\n\n\n.zoom {\n  transition: transform .2s; /* Animation */\n}\n\n.zoom:hover {\n  transform: scale(1.05); /* (150% zoom)*/\n}\n\n.carousel-caption{\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n  display: block;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin-left: 5.9%;\n  padding-top: 5%;\n  padding-bottom: 3%;\n}\n\n.my_carousel_cap{\n  height: 20%;\n    background-image: linear-gradient(\n0deg\n, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n    display: block;\n\n    left: 0;\n    right: 0;\n    margin-left: 5.9%;\n    padding-top: 15%;\n    padding-bottom: 3%;\n    bottom: 0;\n    top: 62%;\n    padding-bottom: 9%;\n}\n\n.carousel-control-prev{\n  z-index: 50;\n}\n\n.carousel-control-next{\n z-index:50;\n}\n\n\n  "], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_multi_search1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/multi-search1.service */ "mIF7");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(MultiSearch1Service, breakpointObserver) {
        this.MultiSearch1Service = MultiSearch1Service;
        this.breakpointObserver = breakpointObserver;
        this.title = 'my-app';
        this.mobile = false;
    }
    ngOnInit() {
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
                console.log('Matches XSmall viewport');
                this.mobile = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
                console.log('Matches Small viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                console.log('Matches Medium  viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                console.log('Matches Large viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                console.log('Matches XLarge viewport');
                this.mobile = false;
            }
        });
    }
    getSearchData(query) {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_multi_search1_service__WEBPACK_IMPORTED_MODULE_3__["MultiSearch1Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        )], decls: 5, vars: 6, consts: [["style", "margin-top:-10%;background-color: rgb(7, 5, 38); padding-bottom: 25%;", 4, "ngIf"], ["style", "margin-top:0;background-color: rgb(7, 5, 38);", 4, "ngIf"], [2, "margin-top", "-10%", "background-color", "rgb(7, 5, 38)", "padding-bottom", "25%"], [2, "margin-top", "0", "background-color", "rgb(7, 5, 38)"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("flex-wrapper", !ctx.mobile)("flex-wrapper-mobile", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", ".flex-wrapper-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 95vh;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: rgb(7, 5, 38);\n}\n\n.flex-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 90vh;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: rgb(7, 5, 38);\n}"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "r0S5");
/* harmony import */ var _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tv-details/tv-details.component */ "6AZv");
/* harmony import */ var _carousel1_carousel1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel1/carousel1.component */ "IvtG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _carousel2_carousel2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel2/carousel2.component */ "8Sq0");
/* harmony import */ var _typeahead_template_typeahead_template_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typeahead-template/typeahead-template.module */ "43SX");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detail-video/detail-video.component */ "G0z7");
/* harmony import */ var _cast_cast_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cast/cast.component */ "lNMc");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            // import HttpClientModule after BrowserModule.
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _typeahead_template_typeahead_template_module__WEBPACK_IMPORTED_MODULE_12__["NgbdTypeaheadTemplateModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__["MylistComponent"],
        _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailsComponent"],
        _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_8__["TvDetailsComponent"],
        _carousel1_carousel1_component__WEBPACK_IMPORTED_MODULE_9__["Carousel1Component"],
        _carousel2_carousel2_component__WEBPACK_IMPORTED_MODULE_11__["Carousel2Component"],
        _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_14__["DetailVideoComponent"],
        _cast_cast_component__WEBPACK_IMPORTED_MODULE_15__["CastComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        // import HttpClientModule after BrowserModule.
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _typeahead_template_typeahead_template_module__WEBPACK_IMPORTED_MODULE_12__["NgbdTypeaheadTemplateModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"]] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"], [1, "p2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powered by TMDB. Developed by Yaxin Lu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */", ".footer[_ngcontent-%COMP%]{\n  padding-top: 1%;\n  padding-bottom: 1%;\n  background-image: linear-gradient(\n0deg\n, rgba(0, 0, 0, 1) 65%, rgba(255, 255, 255, 0)90%);\n\nposition: sticky;\n    bottom: 0;\n}\n\n.p2[_ngcontent-%COMP%]{\n  color: white;\n  text-align: center;\n  margin-bottom: 0;\n\n}"] });


/***/ }),

/***/ "lNMc":
/*!****************************************!*\
  !*** ./src/app/cast/cast.component.ts ***!
  \****************************************/
/*! exports provided: CastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastComponent", function() { return CastComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/detail.service */ "5Xtw");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel2_carousel2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../carousel2/carousel2.component */ "8Sq0");









const _c0 = ["content"];
function CastComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("castheader", !ctx_r0.mobile)("castheader2", ctx_r0.mobile);
} }
function CastComponent_ng_template_4_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Website : ", ctx_r7.homepage, "");
} }
function CastComponent_ng_template_4_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r8.imdb_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CastComponent_ng_template_4_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r9.instram_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CastComponent_ng_template_4_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r10.facebook_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CastComponent_ng_template_4_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r11.twitter_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CastComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CastComponent_ng_template_4_Template_button_click_3_listener() { const modal_r6 = ctx.$implicit; return modal_r6.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CastComponent_ng_template_4_p_17_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CastComponent_ng_template_4_a_23_Template, 2, 1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CastComponent_ng_template_4_a_24_Template, 2, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CastComponent_ng_template_4_a_25_Template, 2, 1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CastComponent_ng_template_4_a_26_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.cur_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("container-fluid1", !ctx_r2.mobile)("", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("img_container_modal", !ctx_r2.mobile)("img_container_modal_mobile", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("img_modal", !ctx_r2.mobile)("img_modal_mobile", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r2.img2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("m_text", !ctx_r2.mobile)("m_text2", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Birth: ", ctx_r2.Date_of_b, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Birth Place: ", ctx_r2.place_b, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Gender: ", ctx_r2.cur_gender, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Known for: ", ctx_r2.cur_known_for, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Also Know as:", ctx_r2.Other_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.imdb);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.instram);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.facebook);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.twitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bio", !ctx_r2.mobile)("bio2", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.biography);
} }
function CastComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.num_of_review);
} }
function CastComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-carousel2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-carousel2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cate", "Recommended Movies")("input_id", ctx_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cate", "Similar Movies")("input_id", ctx_r4.id);
} }
function CastComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-carousel2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-carousel2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cate", "Recommended TV Shows")("input_id", ctx_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cate", "Similar TV Shows")("input_id", ctx_r5.id);
} }
class CastComponent {
    constructor(route, DetailService, modalService, cdRef, breakpointObserver) {
        this.route = route;
        this.DetailService = DetailService;
        this.modalService = modalService;
        this.cdRef = cdRef;
        this.breakpointObserver = breakpointObserver;
        this.cate = "";
        this.name_of_cast = new Array();
        this.Image_of_cast = new Array();
        this.id_of_cast = new Array();
        this.gender = new Array();
        this.Known_for = new Array();
        this.name_of_char = new Array();
        this.biography = "";
        this.homepage = "";
        this.img2 = "";
        this.imdb = "";
        this.facebook = "";
        this.instram = "";
        this.twitter = "";
        this.imdb_url = "";
        this.facebook_url = "";
        this.instram_url = "";
        this.twitter_url = "";
        this.num_of_review = 0;
        this._isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.isAuthenticatedObs = this._isAuthenticatedSubject.asObservable();
        this.playCast = false;
        this.mobile = false;
    }
    openLg(input1) {
        this.modalService.open(this.content, { size: 'lg' });
    }
    showModal(target) {
        var title1 = target.firstChild.innerText;
        //we will find which actor is been clicked
        var index = 0;
        this.cur_name = title1;
        for (index; index < this.name_of_cast.length; index++) {
            if (title1 == this.name_of_cast[index]) {
                break;
            }
        }
        this.cur_known_for = this.Known_for[index];
        this.cur_gender = this.gender[index];
        this.DetailService.getPerson(this.id_of_cast[index]).subscribe((result) => {
            this.Date_of_b = result.birthday;
            this.place_b = result.place_of_birth;
            //other name
            this.Other_name = "";
            for (var j = 0; j < result.also_known_as.length; j++) {
                if (j == result.also_known_as.length - 1)
                    this.Other_name = this.Other_name + result.also_known_as[j];
                else
                    this.Other_name = this.Other_name + result.also_known_as[j] + ",";
            }
            this.biography = result.biography;
            console.log(this.biography);
            this.img2 = "https://image.tmdb.org/t/p/w500/" + result.profile_path;
            if (result.profile_path == "" || result.profile_path == null) {
                this.img2 = "";
            }
            this.homepage = result.homepage;
            this.DetailService.getExternal(this.id_of_cast[index]).subscribe((res) => {
                this.imdb = res.imdb_id;
                this.twitter = res.twitter_id;
                this.facebook = res.facebook_id;
                this.instram = res.instagram_id;
                this.facebook_url = "https://www.facebook.com/" + this.facebook;
                this.twitter_url = "https://www.twitter.com/" + this.twitter;
                this.instram_url = "https://www.instagram.com/" + this.instram;
                this.imdb_url = "https://www.imdb.com/name/" + this.imdb;
                this.openLg("yes");
            });
        });
    }
    PlayCards() {
        //generate html element
        var root = document.querySelector(".row");
        for (var i = 0; i < this.name_of_cast.length; i++) {
            //no image just jump
            if (this.Image_of_cast[i] == "")
                continue;
            var div1 = document.createElement("div");
            if (!this.mobile)
                div1.classList.add("col-md-2");
            else
                div1.classList.add("col-6");
            root === null || root === void 0 ? void 0 : root.appendChild(div1);
            var div2 = document.createElement("div");
            div2.classList.add("card");
            div1.appendChild(div2);
            div2.addEventListener("click", event => {
                console.log(event.target);
                this.showModal(event.target);
                // this is how you get your ".card" element ^
            });
            var img1 = document.createElement("img");
            img1.classList.add("card-img-top");
            img1.src = this.Image_of_cast[i];
            div2.appendChild(img1);
            var div3 = document.createElement("div");
            div3.classList.add("card-block");
            div3.classList.add("stretched-link");
            var title1 = document.createElement("h5");
            title1.innerText = this.name_of_cast[i];
            title1.classList.add("card-title");
            div3.appendChild(title1);
            var title2 = document.createElement("h5");
            title2.innerHTML = "<strong>AS</strong>";
            title2.classList.add("card-title2");
            div3.appendChild(title2);
            var text = document.createElement("p");
            text.classList.add("card-text");
            text.innerText = this.name_of_char[i];
            div3.appendChild(text);
            //<a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
            //<span id="node42" class="node-link">My Text</span>
            var alink = document.createElement("span");
            alink.classList.add("node-link");
            div2.appendChild(alink);
            alink.appendChild(div3);
        }
    }
    playReview() {
        this.DetailService.getReview(this.cate, this.id).subscribe((result) => {
            let res = result.results;
            console.log("review is");
            console.log(res);
            var num = res.length > 10 ? 10 : res.length;
            console.log(num);
            this.num_of_review = num;
            this.cdRef.detectChanges();
            var root = document.querySelector(".wholeReview");
            for (var i = 0; i < num; i++) {
                var card = document.createElement("div");
                card.classList.add("card");
                if (!this.mobile)
                    card.classList.add("revcard");
                else
                    card.classList.add("revcard-mobile");
                root === null || root === void 0 ? void 0 : root.appendChild(card);
                var div2 = document.createElement("div");
                div2.classList.add("card-body");
                if (this.mobile)
                    div2.classList.add("container-fluid_mobile");
                else
                    div2.classList.add("container-fluid");
                card.appendChild(div2);
                var div3 = document.createElement("div");
                var img1 = document.createElement("img");
                img1.classList.add("img_r");
                if (res[i]['author_details']['avatar_path'] == null || res[i]['author_details']['avatar_path'] == "")
                    img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
                else if (res[i]['author_details']['avatar_path'].indexOf("/https") == -1)
                    img1.src = "https://image.tmdb.org/t/p/original" + res[i]['author_details']['avatar_path'];
                else {
                    console.log(res[i]['author_details']['avatar_path']);
                    img1.src = res[i]['author_details']['avatar_path'].substring(1);
                }
                ;
                console.log(img1.src);
                div3.appendChild(img1);
                div3.classList.add("img_div");
                div2.appendChild(div3);
                //left word_div!
                var word_div = document.createElement("div");
                div2.appendChild(word_div);
                //create title and its span
                var rate = res[i]['author_details']['rating'] == null ? 0 : res[i]['author_details']['rating'];
                var head = document.createElement("h5");
                if (!this.mobile)
                    head.classList.add("card-title3");
                else
                    head.classList.add("card-title3-mobile");
                head.innerText = "A review created by " + res[i].author;
                var span;
                if (!this.mobile) {
                    span = document.createElement('span');
                    span.classList.add('star_icon');
                }
                else {
                    span = document.createElement('p');
                    span.classList.add('star_icon-mobile');
                }
                span.innerText = '\u2605' + " " + rate;
                if (!this.mobile) {
                    head.appendChild(span);
                    word_div.appendChild(head);
                }
                else {
                    word_div.appendChild(head);
                    word_div.appendChild(span);
                }
                //create written message
                var create = document.createElement("p");
                word_div.appendChild(create);
                //get time
                var time = new Date(res[i].created_at);
                let times = time.toString().split(" ");
                var this_line = "Written by " + res[i].author + " on" + time.toLocaleString('en-US', { month: 'long' }) + " " + times[2] + ", " + time.toLocaleString('en-US', { year: 'numeric' }) + "," + time.toLocaleString('en-US').split(",")[1];
                create.innerText = this_line;
                create.classList.add("p1");
                //content
                var content1 = document.createElement("p");
                content1.classList.add("text_lines");
                content1.innerText = res[i].content;
                word_div.appendChild(content1);
                //a link
                var link1 = document.createElement("a");
                link1.innerText = "Read the rest";
                link1.setAttribute("href", res[i].url);
                link1.setAttribute("target", "_blank");
                link1.classList.add("a_link1");
                word_div.appendChild(link1);
            }
        });
    }
    ngOnInit() {
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
                console.log('Matches XSmall viewport');
                this.mobile = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
                console.log('Matches Small viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                console.log('Matches Medium  viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                console.log('Matches Large viewport');
                this.mobile = false;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                console.log('Matches XLarge viewport');
                this.mobile = false;
            }
        });
        this.id = this.route.snapshot.paramMap.get('id');
        //get cast!
        this.DetailService.getDetails3(this.cate, this.id).subscribe((result) => {
            let res = result.cast;
            console.log(res);
            if (res.length != 0) {
                this.playCast = true;
                this.cdRef.detectChanges();
            }
            for (var i = 0; i < res.length; i++) {
                this.name_of_cast[i] = res[i].name;
                if (res[i].profile_path != null && res[i].profile_path != "")
                    this.Image_of_cast[i] = "https://image.tmdb.org/t/p/w500/" + res[i].profile_path;
                else
                    this.Image_of_cast[i] = "";
                this.name_of_char[i] = res[i].character;
                this.id_of_cast[i] = res[i].id;
                if (res[i].gender == 1)
                    this.gender[i] = "Female";
                else if (res[i].gender == 2)
                    this.gender[i] = "Male";
                else
                    this.gender[i] = "Undefined";
                this.Known_for[i] = res[i].known_for_department;
            }
            this.PlayCards();
        });
        //get reviews
        this.playReview();
    }
}
CastComponent.ɵfac = function CastComponent_Factory(t) { return new (t || CastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_detail_service__WEBPACK_IMPORTED_MODULE_4__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
CastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CastComponent, selectors: [["app-cast"]], viewQuery: function CastComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { cate: "cate" }, decls: 9, vars: 8, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [4, "ngIf"], ["content", ""], ["class", "wholeReview", 4, "ngIf"], [1, "scrollmenu"], [1, "container"], [1, "row"], [1, "modal-header", 2, "z-index", "1000"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "font-size", "medium", "font-weight", "250", "height", "80vh", "overflow-y", "auto"], [3, "src"], [2, "margin-bottom", "0"], ["style", "margin-bottom: 0;", 4, "ngIf"], [1, "share-btn-container"], ["class", "IMDB-btn", "target", "_blank", "placement", "top", "ngbPopover", "Visit IMDB", "container", "body", "popoverTitle", "", "triggers", "mouseenter:mouseleave", 3, "href", 4, "ngIf"], ["class", "instagram-btn", "target", "_blank", "placement", "top", "ngbPopover", "Visit Instagram", "container", "body", "popoverTitle", "", "triggers", "mouseenter:mouseleave", 3, "href", 4, "ngIf"], ["class", "facebook-btn", "target", "_blank", "placement", "top", "ngbPopover", "Visit Facebook", "container", "body", "popoverTitle", "", "triggers", "mouseenter:mouseleave", 3, "href", 4, "ngIf"], ["class", "twitter-btn", "target", "_blank", "placement", "top", "ngbPopover", "Visit Twitter", "container", "body", "popoverTitle", "", "triggers", "mouseenter:mouseleave", 3, "href", 4, "ngIf"], ["target", "_blank", "placement", "top", "ngbPopover", "Visit IMDB", "container", "body", "popoverTitle", "", "triggers", "mouseenter:mouseleave", 1, "IMDB-btn", 3, "href"], [1, "fa", "fa-imdb", "icon1", 2, "padding-right", "2%"], ["target", "_blank", "placement", "top", "ngbPopover", "Visit Instagram", "container", "body", "popoverTitle", "", "triggers", "mouseenter:mouseleave", 1, "instagram-btn", 3, "href"], [1, "fa", "fa-instagram", "icon1", 2, "padding-right", "2%", "color", "purple"], ["target", "_blank", "placement", "top", "ngbPopover", "Visit Facebook", "container", "body", "popoverTitle", "", "triggers", "mouseenter:mouseleave", 1, "facebook-btn", 3, "href"], [1, "fa", "fa-facebook-official", "icon1", 2, "padding-right", "2%"], ["target", "_blank", "placement", "top", "ngbPopover", "Visit Twitter", "container", "body", "popoverTitle", "", "triggers", "mouseenter:mouseleave", 1, "twitter-btn", 3, "href"], [1, "fab", "fa-twitter", "icon1", 2, "padding-right", "2%"], [1, "wholeReview"], [1, "rev"], [2, "color", "grey", "padding-left", "3%"], [3, "cate", "input_id"]], template: function CastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CastComponent_div_3_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CastComponent_ng_template_4_Template, 32, 33, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CastComponent_div_6_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CastComponent_div_7_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CastComponent_div_8_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("wholeSection", !ctx.mobile)("wholeSection2", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.playCast);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.num_of_review);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cate == "movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cate == "tv");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopover"], _carousel2_carousel2_component__WEBPACK_IMPORTED_MODULE_7__["Carousel2Component"]], styles: [".card-title11[_ngcontent-%COMP%]{\n  font-size: medium;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 1rem;\n  margin-bottom: 0.3rem;\n}\n\n.card-title112[_ngcontent-%COMP%]{\n  font-size: medium;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  margin-bottom: 0.3rem;\n\n}\n\n.card-text11[_ngcontent-%COMP%]{\n  font-size: 90%;\n  text-align: center;\n  font-weight:300;\n  width: 100%;\n  white-space: normal;\n  padding-bottom: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjs7QUFFdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZTExe1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xufVxuXG4uY2FyZC10aXRsZTExMntcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgcGFkZGluZy1ib3R0b206IDElO1xuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG5cbn1cblxuLmNhcmQtdGV4dDExe1xuICBmb250LXNpemU6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDozMDA7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBwYWRkaW5nLWJvdHRvbTogNyU7XG59XG4iXX0= */", ".wholeSection[_ngcontent-%COMP%]{\n  background-color: rgb(7, 5, 38);\n  padding-left: 10%;\n}\n\n\n.wholeSection2[_ngcontent-%COMP%]{\n  background-color: rgb(7, 5, 38);\n  padding-left: 5.5%;\n}\n\n\n.castheader[_ngcontent-%COMP%]{\n  color:white;\n  font-size:280%;\n  font-weight: normal;\n  padding-top: 4%;\n}\n\n.castheader2[_ngcontent-%COMP%]{\n  color:white;\n  font-size:240%;\n  font-weight: normal;\n  padding-top: 4%;\n}\n\n.container[_ngcontent-%COMP%]{\n  margin-left: 0;\n    padding-left: 0;\n\n}\n\n[_nghost-%COMP%]     .container-fluid{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  white-space: normal;\n\n}\n\n[_nghost-%COMP%]     .container-fluid_mobile{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  white-space: normal;\n}\n\n.container-fluid1[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow-y: auto;\n  overflow-x: hidden;\n  white-space: normal;\n\n}\n\n.container-fluid1_mobile[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  overflow-x: hidden;\n  white-space: normal;\n\n}\n.row[_ngcontent-%COMP%]{\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n\n  white-space:nowrap;\n  justify-content: start;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n  padding-bottom: 2rem;\n  margin-left: 0;\n  padding-left: 0;\n}\n[_nghost-%COMP%]     .card {\n\n    background-color: #fff;\n    background-clip: border-box;\n    border: 0px solid rgba(0, 0, 0, 0.125);\n    border-radius: 0.5rem;\n\n}\n\n[_nghost-%COMP%]     .col-md-2{\n  padding-right: 0;\n}\n\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 85%;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px grey;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  border: 1px solid rgb(148, 154, 150);\n  border-radius: 5px;\n\n  -webkit-appearance: none;\n  width: 6px;\n  height: 6px;\n  background-color: rgb(7, 5, 38);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  width:1%;\n  border-radius: 5px;\n  background-color:darkgray;\n}\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  border: 1px solid rgb(148, 154, 150);\n  border-radius: 5px;\n\n  -webkit-appearance: none;\n  width: 10px;\n  height: 10px;\n  background-color: white;\n}\n\n\n\n\ndiv.scrollmenu[_ngcontent-%COMP%] {\n\n  margin-left: -1.2%;\n  overflow: auto;\n  white-space: nowrap;\n}\n\n[_nghost-%COMP%]     .card-title{\n  font-size: medium;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 1rem;\n  margin-bottom: 0.3rem;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{\n  min-width:1%;\n  border-radius: 5px;\n  background-color:rgb(83, 84, 81);\n}\n\n[_nghost-%COMP%]     .card-title2{\n  font-size: medium;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  margin-bottom: 0.3rem;\n\n}\n\n[_nghost-%COMP%]     .card-text{\n  font-size: 90%;\n  text-align: center;\n  font-weight:300;\n  width: 100%;\n  white-space: normal;\n  padding-bottom: 7%;\n}\n\n[_nghost-%COMP%]     .node-link { cursor: pointer; }\n\n.share-btn-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 220%;\n}\n\n.fa-facebook-official[_ngcontent-%COMP%] {\ncolor:rgb(23, 0, 255);\n\n}\n\n.fa-imdb[_ngcontent-%COMP%]{\n  color:rgb(226, 169, 0);\n}\n\n.rev[_ngcontent-%COMP%]{\n  color:white;\n  font-size:280%;\n  font-weight: normal;\n  padding-top: 4%;\n}\n\n[_nghost-%COMP%]     .revcard{\n  margin-bottom: 2%;\n  width: 87%;\n}\n\n[_nghost-%COMP%]     .revcard-mobile{\n  margin-bottom: 2%;\n  width: 94%;\n}\n\n\n\n[_nghost-%COMP%]     .text_lines{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3; \n    -webkit-box-orient: vertical;\n    margin-bottom: 3.3%;\n    font-weight: 250;\n    font-size: 90%;\n }\n\n [_nghost-%COMP%]     .star_icon{\n  margin-left: 1vw;\n    background-color: white;\n    display: inline;\n    border-radius: 33%;\n    border: 1px solid black;\n    color: white;\n    background-color: black;\n    font-weight: bold;\n    font-size: 1.1vw;\n    padding: 0.5% 1.2%;\n    position: relative;\n    top: -5px;\n    font-weight: lighter;\n}\n[_nghost-%COMP%]     .star_icon-mobile{\nmargin-left: 1vw;\n    background-color: white;\n    display: inline;\n    border-radius: 39%;\n    border: 1px solid black;\n    color: white;\n    background-color: black;\n    font-weight: bold;\n    font-size: 5vw;\n    padding: 0.5% 1.2%;\n    position: relative;\n    top: -5px;\n    font-weight: lighter;\n}\n\n[_nghost-%COMP%]     .title_re{\n  display: inline;\n}\n\n[_nghost-%COMP%]     .img_r{\n  width:100px;\n  border-radius: 50%;\n}\n\n[_nghost-%COMP%]     .img_div{\n   margin-right: 10%;\n   margin-left: 6%;\n}\n\n[_nghost-%COMP%]     .card-title3{\n\n\n  font-weight: bold;\n    margin-top: 0rem;\n    margin-bottom: 0.3rem;\n    text-align: left;\n    font-size: 140%;\n}\n\n\n\n[_nghost-%COMP%]     .card-title3-mobile {\n    font-weight: bold;\n    margin-top: 0rem;\n    margin-bottom: 0.6rem;\n    text-align: left;\n    font-size: 140%;\n    width: 80%;\n}\n\n\n[_nghost-%COMP%]     .p1{\n  margin-top: 4%;\n    margin-bottom: 3%;\n    font-weight: 300;\n    color: grey;\n    font-size: 90%;\n}\n\n[_nghost-%COMP%]     .a_link1{\n   color:indigo;\n   border-bottom: 1.5px solid indigo;\n}\n\n[_nghost-%COMP%]     .carou{\n  margin-left: -10%;\n  height: 300px;\n}\n\n[_nghost-%COMP%]     .title_of_carousel{\n  color:white;\n  margin-top:8%;\n  margin-bottom: 4%;\n  font-size: 280%;\n}\n\n[_nghost-%COMP%]     .title_of_carousel h2{\n\n  font-size: 90%;\n}\n\n\n[_nghost-%COMP%]     .carousel-indicators {\n    top: 110%;\n}\n\n\n\n\n\n.img_modal_mobile[_ngcontent-%COMP%]{\n  width: 100%;\n    height: 95%;\n    max-width: 391px;\n    max-height: 375px;\n}\n\n.img_container_modal_mobile[_ngcontent-%COMP%]{\n  width: 100%;\n    overflow: hidden;\n    max-width: 391px;\n    margin-right: 0;\n}\n\n\n\n.img_modal[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 95%;\n  max-width: 191px;\n  max-height: 275px;\n}\n\n.img_container_modal[_ngcontent-%COMP%]{\n  width: 42%;\n  overflow:hidden;\n  max-width: 191px;\n}\n\n.bio[_ngcontent-%COMP%]{\n  margin-left: 1.5%;\n    margin-right: 1.5%;\n}\n\n.m_text[_ngcontent-%COMP%]{\n  margin-left:5%\n}\n\n.bio2[_ngcontent-%COMP%]{\n  margin-left: 0;\n  margin-top:5%;\n}\n\n.m_text2[_ngcontent-%COMP%]{\n  margin-left:0;\n}"] });


/***/ }),

/***/ "mIF7":
/*!***************************************************!*\
  !*** ./src/app/services/multi-search1.service.ts ***!
  \***************************************************/
/*! exports provided: MultiSearch1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSearch1Service", function() { return MultiSearch1Service; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MultiSearch1Service {
    constructor(http) {
        this.http = http;
        this.statusUrl = '/api/multi';
        this.url = '';
    }
    Lookup(term) {
        term = term.trim();
        console.log(term);
        if (term == '')
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        this.url = this.statusUrl + "?query=" + term;
        //up to server to return multi type
        //// now returns an Observable of multi
        return this.http.get("http://localhost:8080" + this.url);
    }
}
MultiSearch1Service.ɵfac = function MultiSearch1Service_Factory(t) { return new (t || MultiSearch1Service)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MultiSearch1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MultiSearch1Service, factory: MultiSearch1Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "r0S5":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/detail.service */ "5Xtw");
/* harmony import */ var _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail-video/detail-video.component */ "G0z7");
/* harmony import */ var _cast_cast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cast/cast.component */ "lNMc");





class MovieDetailsComponent {
    constructor(route, DetailService, router) {
        this.route = route;
        this.DetailService = DetailService;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            window.scrollTo(0, 0);
            return false;
        };
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 3, vars: 2, consts: [[2, "background-color", "rgb(7, 5, 38)"], [3, "cate"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cate", "movie");
    } }, directives: [_detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_3__["DetailVideoComponent"], _cast_cast_component__WEBPACK_IMPORTED_MODULE_4__["CastComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-details/tv-details.component */ "6AZv");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "r0S5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'mylist', component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__["MylistComponent"] },
    { path: 'watch',
        //component: TvDetailsComponent
        children: [
            { path: 'movie',
                children: [
                    { path: ':id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"] }
                ] },
            { path: 'tv',
                children: [
                    { path: ':id', component: _tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_3__["TvDetailsComponent"] }
                ]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map