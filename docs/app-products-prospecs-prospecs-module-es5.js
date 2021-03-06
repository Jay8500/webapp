(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-products-prospecs-prospecs-module"], {
    /***/
    "2kwN":
    /*!******************************************************!*\
      !*** ./src/app/products/prospecs/prospecs.module.ts ***!
      \******************************************************/

    /*! exports provided: ProspecsModule */

    /***/
    function kwN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProspecsModule", function () {
        return ProspecsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _prospecs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prospecs.component */
      "ijVW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var route = [{
        path: '',
        component: _prospecs_component__WEBPACK_IMPORTED_MODULE_1__["ProspecsComponent"]
      }];

      var ProspecsModule = function ProspecsModule() {
        _classCallCheck(this, ProspecsModule);
      };

      ProspecsModule.??fac = function ProspecsModule_Factory(t) {
        return new (t || ProspecsModule)();
      };

      ProspecsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: ProspecsModule
      });
      ProspecsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ProspecsModule, {
          declarations: [_prospecs_component__WEBPACK_IMPORTED_MODULE_1__["ProspecsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ijVW":
    /*!*********************************************************!*\
      !*** ./src/app/products/prospecs/prospecs.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProspecsComponent */

    /***/
    function ijVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProspecsComponent", function () {
        return ProspecsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProspecsComponent = /*#__PURE__*/function () {
        function ProspecsComponent() {
          _classCallCheck(this, ProspecsComponent);

          this.Product = {
            tabImg: '',
            tabDspl: '',
            productRate: '100 Rs/-',
            imgId: '',
            tabsRepeat: ''
          };
        }

        _createClass(ProspecsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var getCats = localStorage.getItem('CatItems');
            console.log(JSON.parse(getCats));
            var parseGetcats = JSON.parse(getCats);
            this.Product = {
              tabImg: parseGetcats.imgUrl,
              tabDspl: parseGetcats.imgDisp,
              productRate: '100 Rs/-',
              imgId: parseGetcats.imgId,
              tabsRepeat: parseGetcats.tabRepeat
            };
          }
        }]);

        return ProspecsComponent;
      }();

      ProspecsComponent.??fac = function ProspecsComponent_Factory(t) {
        return new (t || ProspecsComponent)();
      };

      ProspecsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProspecsComponent,
        selectors: [["app-prospecs"]],
        decls: 39,
        vars: 7,
        consts: [[1, "for-home-content"], [1, "for-content-prodcut"], [1, "row"], [1, "col-6"], [1, "card", 2, "width", "300px", "margin", "12px"], [1, "img-fluid"], ["width", "300px", "height", "300px", 3, "src"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card", 2, "width", "500px", "margin", "10px"], [1, "card-header", "text-center"], [1, "ml-3"], [1, "card", 2, "width", "430px", "margin-bottom", "20px"], [1, "m-4"], [1, "btn", "btn-primary", "btn-block"]],
        template: function ProspecsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Specifications :- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Touch : Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "RAM : 4GB Inside ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Graphic Card : NVIDIA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Charging Capacity : 12000 MAH");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Add To Wish List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Add To Cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "assets/", ctx.Product.tabsRepeat, "/", ctx.Product.tabImg, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.Product.tabDspl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.Product.productRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.Product.tabDspl.toUpperCase(), " Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Product Name :- ", ctx.Product.tabDspl, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Product Rate :- ", ctx.Product.productRate, "");
          }
        },
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=app-products-prospecs-prospecs-module-es5.js.map