"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Users = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            name: \"Petrovich\"\n        },\n        {\n            id: 2,\n            name: \"Vasilych\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{});\n    document.addEventListener(\"keyup\", (e)=>{\n        console.log(e);\n    });\n    const [todooTitle, setTodoo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const addUsers = (e)=>{\n        console.log(e);\n        if (todooTitle) {\n            setUsers([\n                ...users,\n                {\n                    id: Date.now(),\n                    name: todooTitle\n                }\n            ]);\n            setTodoo(\"\");\n        }\n    };\n    const handleClick = ()=>console.log(\"click\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const raw = localStorage.getItem(\"toodos\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.addEventListener(\"click\", handleClick);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClick);\n        };\n    }, [\n        users\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Пользователи\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                legacyBehavior: true,\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"На главную\"\n                }, void 0, false, {\n                    fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            legacyBehavior: true,\n                            href: \"/users/\".concat(user.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                                lineNumber: 63,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                            lineNumber: 62,\n                            columnNumber: 29\n                        }, undefined)\n                    }, user.id, false, {\n                        fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Добавить\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: todooTitle,\n                placeholder: \"введи текст\",\n                onChange: (e)=>setTodoo(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addUsers,\n                children: \"Добавить\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Users, \"XgJ0GQIVNeD7T3/10OvNab5iuIY=\");\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTRCO0FBQ2U7QUFHM0MsTUFBTUcsUUFBUSxJQUFNOztJQUVoQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7UUFDL0I7WUFBRUksSUFBSTtZQUFHQyxNQUFNO1FBQVk7UUFDM0I7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQVc7S0FDN0I7SUFFRE4sZ0RBQVNBLENBQUUsSUFBTSxDQUdqQjtJQUNBTyxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTQyxDQUFBQSxJQUFJO1FBQ25DQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0lBSUEsTUFBTSxDQUFDRyxZQUFZQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1hLFdBQVcsQ0FBQ0wsSUFBTTtRQUN2QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLElBQUdHLFlBQVc7WUFDVlIsU0FBUzttQkFDRkQ7Z0JBQ0g7b0JBQUNFLElBQUlVLEtBQUtDLEdBQUc7b0JBQUlWLE1BQU1NO2dCQUFVO2FBRXBDO1lBQ0RDLFNBQVM7UUFDYixDQUFDO0lBRUY7SUFFQyxNQUFNSSxjQUFjLElBQU1QLFFBQVFDLEdBQUcsQ0FBQztJQUV0Q1gsZ0RBQVNBLENBQUUsSUFBTTtRQUNaLE1BQU1rQixNQUFNQyxhQUFhQyxPQUFPLENBQUM7SUFFdEMsR0FBRSxFQUFFO0lBR0pwQixnREFBU0EsQ0FBRSxJQUFNO1FBQ1pPLFNBQVNDLGdCQUFnQixDQUFDLFNBQVNTO1FBQ3JDLE9BQU8sSUFBTTtZQUNaVixTQUFTYyxtQkFBbUIsQ0FBQyxTQUFTSjtRQUN2QztJQUNILEdBQUc7UUFBQ2Q7S0FBTTtJQUNWLHFCQUVJLDhEQUFDbUI7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDeEIsa0RBQUlBO2dCQUFDeUIsY0FBYztnQkFBQ0MsTUFBSzswQkFDdEIsNEVBQUNDOzhCQUFFOzs7Ozs7Ozs7OzswQkFFUCw4REFBQ0M7MEJBRU94QixNQUFNeUIsR0FBRyxDQUFDQyxDQUFBQSxxQkFDTiw4REFBQ0M7a0NBQ0csNEVBQUMvQixrREFBSUE7NEJBQUN5QixjQUFjOzRCQUFDQyxNQUFNLFVBQWtCLE9BQVJJLEtBQUt4QixFQUFFO3NDQUN4Qyw0RUFBQ3FCOzBDQUFHRyxLQUFLdkIsSUFBSTs7Ozs7Ozs7Ozs7dUJBRlp1QixLQUFLeEIsRUFBRTs7Ozs7Ozs7OzswQkFjNUIsOERBQUMwQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUMsT0FBT3JCO2dCQUFZc0IsYUFBWTtnQkFBY0MsVUFBVSxDQUFDMUIsSUFBTUksU0FBU0osRUFBRTJCLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBCQUM1Riw4REFBQ0k7Z0JBQU9DLFNBQVN4QjswQkFBVTs7Ozs7Ozs7Ozs7O0FBSXZDO0dBNUVNWjtLQUFBQTtBQThFTiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy5qcz8wMDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cblxuY29uc3QgVXNlcnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogJ1BldHJvdmljaCcgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Zhc2lseWNoJyB9XG4gICAgXSlcblxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xuXG4gICAgICAgIFxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH0pXG4gICAgXG4gICAgXG4gICAgXG4gICAgY29uc3QgW3RvZG9vVGl0bGUsIHNldFRvZG9vXSA9IHVzZVN0YXRlKCcnKVxuXG4gICBjb25zdCBhZGRVc2VycyA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSkgXG4gICAgaWYodG9kb29UaXRsZSl7XG4gICAgICAgIHNldFVzZXJzKFtcbiAgICAgICAgICAgIC4uLnVzZXJzLFxuICAgICAgICAgICAge2lkOiBEYXRlLm5vdygpLCBuYW1lOiB0b2Rvb1RpdGxlfVxuICAgICAgICAgICAgXG4gICAgICAgIF0pXG4gICAgICAgIHNldFRvZG9vKCcnKVxuICAgIH1cbiAgIFxuICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiBjb25zb2xlLmxvZygnY2xpY2snKVxuXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XG4gICAgICAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9vZG9zJylcbiAgICAgICAgIFxuICAgIH0sW10pXG5cblxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xuICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljaylcbiAgICAgICB9XG4gICAgfSwgW3VzZXJzXSlcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4PC9oMT5cbiAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+0J3QsCDQs9C70LDQstC90YPRjjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzLm1hcCh1c2VyID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBocmVmPXtgL3VzZXJzLyR7dXNlci5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3VzZXIubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8aDI+0JTQvtCx0LDQstC40YLRjDwvaDI+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RvZG9vVGl0bGV9IHBsYWNlaG9sZGVyPVwi0LLQstC10LTQuCDRgtC10LrRgdGCXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2RvbyhlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFVzZXJzfT7QlNC+0LHQsNCy0LjRgtGMPC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VycyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVc2VycyIsInVzZXJzIiwic2V0VXNlcnMiLCJpZCIsIm5hbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29uc29sZSIsImxvZyIsInRvZG9vVGl0bGUiLCJzZXRUb2RvbyIsImFkZFVzZXJzIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUNsaWNrIiwicmF3IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJoMSIsImxlZ2FjeUJlaGF2aW9yIiwiaHJlZiIsImEiLCJ1bCIsIm1hcCIsInVzZXIiLCJsaSIsImgyIiwiaW5wdXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});