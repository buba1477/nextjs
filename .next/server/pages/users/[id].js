/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./styles/User.module.scss":
/*!*********************************!*\
  !*** ./styles/User.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"cite\": \"User_cite__ZelbK\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvVXNlci5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9zdHlsZXMvVXNlci5tb2R1bGUuc2Nzcz9jYjUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNpdGVcIjogXCJVc2VyX2NpdGVfX1plbGJLXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/User.module.scss\n");

/***/ }),

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/User.module.scss */ \"./styles/User.module.scss\");\n/* harmony import */ var _styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ user  }) {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cite),\n                children: [\n                    \"Пользователь c ID \",\n                    query.id\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users/[id].js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Имя пользователя \",\n                    user.name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users/[id].js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users/[id].js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps({ params  }) {\n    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n    let user = await response.json();\n    return {\n        props: {\n            user\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFFVztBQUdsRCw2QkFBZSxvQ0FBVSxFQUFDRSxLQUFJLEVBQUMsRUFBRTtJQUMvQixNQUFNLEVBQUNDLE1BQUssRUFBQyxHQUFHSCxzREFBU0E7SUFFdkIscUJBQ0ksOERBQUNJOzswQkFDRyw4REFBQ0M7Z0JBQUdDLFdBQVdMLHNFQUFXOztvQkFBRTtvQkFBbUJFLE1BQU1LLEVBQUU7Ozs7Ozs7MEJBQ3ZELDhEQUFDSjs7b0JBQUk7b0JBQWtCRixLQUFLTyxJQUFJOzs7Ozs7Ozs7Ozs7O0FBRzVDLENBQUM7QUFFTSxlQUFlQyxtQkFBbUIsRUFBQ0MsT0FBTSxFQUFDLEVBQUU7SUFDL0MsSUFBSUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsMkNBQTJDLEVBQUVGLE9BQU9ILEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLElBQUlOLE9BQU8sTUFBTVUsU0FBU0UsSUFBSTtJQUM5QixPQUFPO1FBQ0xDLE9BQU87WUFBQ2I7UUFBSTtJQUNkO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1VzZXIubW9kdWxlLnNjc3NcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7dXNlcn0pIHtcbiAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXG4gIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jaXRlfT7Qn9C+0LvRjNC30L7QstCw0YLQtdC70YwgYyBJRCB7cXVlcnkuaWR9PC9oMT5cbiAgICAgICAgICAgIDxkaXY+0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyB7dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWApXG4gICAgbGV0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHt1c2VyfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxuICB9Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsInVzZXIiLCJxdWVyeSIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiY2l0ZSIsImlkIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();