"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\n\n\nconst regex = new RegExp(/\\.\\/images\\//);\nclass App extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                h: \"100vh\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: \"https://raw.githubusercontent.com/AnMe3z/BreachSneach/main/FrontEnd/pages/images/Logo.jpg\",\n                        boxSize: \"332px x 217px\"\n                    }, void 0, false, {\n                        fileName: \"/home/dmilchev/school_temp/BreachSneach/FrontEnd/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        colorScheme: \"blue\",\n                        ml: 4,\n                        children: \"Get started\"\n                    }, void 0, false, {\n                        fileName: \"/home/dmilchev/school_temp/BreachSneach/FrontEnd/pages/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dmilchev/school_temp/BreachSneach/FrontEnd/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/dmilchev/school_temp/BreachSneach/FrontEnd/pages/index.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ1M7QUFDTTtBQUNmO0FBQ2E7QUFFdEQsTUFBTVEsUUFBUSxJQUFJQyxPQUFPO0FBRVYsTUFBTUMsWUFBWVQsNENBQVNBO0lBQ3hDVSxTQUFTO1FBQ1AscUJBQ0UsOERBQUNSLDREQUFjQTtzQkFDYiw0RUFBQ0Msa0RBQUlBO2dCQUFDUSxHQUFFO2dCQUFRQyxZQUFXO2dCQUFTQyxnQkFBZTs7a0NBQ2pELDhEQUFDVCxtREFBS0E7d0JBQ0pVLEtBQUk7d0JBQ0pDLFNBQVE7Ozs7OztrQ0FFViw4REFBQ1Ysb0RBQU1BO3dCQUFDVyxhQUFZO3dCQUFPQyxJQUFJO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztJQUkxQztBQUNGO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9uZXh0LWpzJ1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXFwuXFwvaW1hZ2VzXFwvLyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgICA8RmxleCBoPVwiMTAwdmhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQW5NZTN6L0JyZWFjaFNuZWFjaC9tYWluL0Zyb250RW5kL3BhZ2VzL2ltYWdlcy9Mb2dvLmpwZ1wiXG4gICAgICAgICAgICBib3hTaXplPVwiMzMycHggeCAyMTdweFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPSdibHVlJyBtbD17NH0+R2V0IHN0YXJ0ZWQ8L0J1dHRvbj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYWNoZVByb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJGbGV4IiwiSW1hZ2UiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsInJlZ2V4IiwiUmVnRXhwIiwiQXBwIiwicmVuZGVyIiwiaCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInNyYyIsImJveFNpemUiLCJjb2xvclNjaGVtZSIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});