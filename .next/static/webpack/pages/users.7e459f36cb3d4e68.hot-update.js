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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Users = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            name: \"Petrovich\"\n        },\n        {\n            id: 2,\n            name: \"Vasilych\"\n        }\n    ]);\n    const [todooTitle, setTodoo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.addEventListener(\"keyup\", (e)=>{\n            console.log(e);\n        });\n    });\n    const addUsers = (e)=>{\n        console.log(e);\n        if (todooTitle) {\n            setUsers([\n                ...users,\n                {\n                    id: Date.now(),\n                    name: todooTitle\n                }\n            ]);\n            setTodoo(\"\");\n        }\n    };\n    const handleClick = ()=>console.log(\"click\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const raw = localStorage.getItem(\"toodos\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.addEventListener(\"click\", handleClick);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClick);\n        };\n    }, [\n        users\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Пользователи\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                legacyBehavior: true,\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"На главную\"\n                }, void 0, false, {\n                    fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            legacyBehavior: true,\n                            href: \"/users/\".concat(user.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                                lineNumber: 64,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                            lineNumber: 63,\n                            columnNumber: 29\n                        }, undefined)\n                    }, user.id, false, {\n                        fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Добавить\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: todooTitle,\n                placeholder: \"введи текст\",\n                onChange: (e)=>setTodoo(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addUsers,\n                children: \"Добавить\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Users, \"+QLITXhOllykVh34hyAYbcNxaw4=\");\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTRCO0FBQ2U7QUFHM0MsTUFBTUcsUUFBUSxJQUFNOztJQUVoQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7UUFDL0I7WUFBRUksSUFBSTtZQUFHQyxNQUFNO1FBQVk7UUFDM0I7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQVc7S0FDN0I7SUFHRCxNQUFNLENBQUNDLFlBQVlDLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFeENELGdEQUFTQSxDQUFFLElBQU07UUFDYlMsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU0MsQ0FBQUEsSUFBSTtZQUNuQ0MsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBTUQsTUFBTUcsV0FBVyxDQUFDSCxJQUFNO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osSUFBR0osWUFBVztZQUNWSCxTQUFTO21CQUNGRDtnQkFDSDtvQkFBQ0UsSUFBSVUsS0FBS0MsR0FBRztvQkFBSVYsTUFBTUM7Z0JBQVU7YUFFcEM7WUFDREMsU0FBUztRQUNiLENBQUM7SUFFRjtJQUVDLE1BQU1TLGNBQWMsSUFBTUwsUUFBUUMsR0FBRyxDQUFDO0lBRXRDYixnREFBU0EsQ0FBRSxJQUFNO1FBQ1osTUFBTWtCLE1BQU1DLGFBQWFDLE9BQU8sQ0FBQztJQUV0QyxHQUFFLEVBQUU7SUFHSnBCLGdEQUFTQSxDQUFFLElBQU07UUFDWlMsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU087UUFDckMsT0FBTyxJQUFNO1lBQ1pSLFNBQVNZLG1CQUFtQixDQUFDLFNBQVNKO1FBQ3ZDO0lBQ0gsR0FBRztRQUFDZDtLQUFNO0lBQ1YscUJBRUksOERBQUNtQjs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUN4QixrREFBSUE7Z0JBQUN5QixjQUFjO2dCQUFDQyxNQUFLOzBCQUN0Qiw0RUFBQ0M7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVQLDhEQUFDQzswQkFFT3hCLE1BQU15QixHQUFHLENBQUNDLENBQUFBLHFCQUNOLDhEQUFDQztrQ0FDRyw0RUFBQy9CLGtEQUFJQTs0QkFBQ3lCLGNBQWM7NEJBQUNDLE1BQU0sVUFBa0IsT0FBUkksS0FBS3hCLEVBQUU7c0NBQ3hDLDRFQUFDcUI7MENBQUdHLEtBQUt2QixJQUFJOzs7Ozs7Ozs7Ozt1QkFGWnVCLEtBQUt4QixFQUFFOzs7Ozs7Ozs7OzBCQWM1Qiw4REFBQzBCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFNQyxPQUFPMUI7Z0JBQVkyQixhQUFZO2dCQUFjQyxVQUFVLENBQUN4QixJQUFNSCxTQUFTRyxFQUFFeUIsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBQzVGLDhEQUFDSTtnQkFBT0MsU0FBU3hCOzBCQUFVOzs7Ozs7Ozs7Ozs7QUFJdkM7R0E3RU1aO0tBQUFBO0FBK0VOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzLmpzPzAwNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5jb25zdCBVc2VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnUGV0cm92aWNoJyB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnVmFzaWx5Y2gnIH1cbiAgICBdKVxuXG5cbiAgICBjb25zdCBbdG9kb29UaXRsZSwgc2V0VG9kb29dID0gdXNlU3RhdGUoJycpXG5cbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICBcbiAgICBcbiAgICBcbiAgICBcblxuICAgY29uc3QgYWRkVXNlcnMgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpIFxuICAgIGlmKHRvZG9vVGl0bGUpe1xuICAgICAgICBzZXRVc2VycyhbXG4gICAgICAgICAgICAuLi51c2VycyxcbiAgICAgICAgICAgIHtpZDogRGF0ZS5ub3coKSwgbmFtZTogdG9kb29UaXRsZX1cbiAgICAgICAgICAgIFxuICAgICAgICBdKVxuICAgICAgICBzZXRUb2RvbygnJylcbiAgICB9XG4gICBcbiAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJ2NsaWNrJylcblxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xuICAgICAgICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rvb2RvcycpXG4gICAgICAgICBcbiAgICB9LFtdKVxuXG5cbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spXG4gICAgICAgfVxuICAgIH0sIFt1c2Vyc10pXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuDwvaDE+XG4gICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPtCd0LAg0LPQu9Cw0LLQvdGD0Y48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1c2Vycy5tYXAodXNlciA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgbGVnYWN5QmVoYXZpb3IgaHJlZj17YC91c2Vycy8ke3VzZXIuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt1c2VyLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuXG4gICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGgyPtCU0L7QsdCw0LLQuNGC0Yw8L2gyPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0b2Rvb1RpdGxlfSBwbGFjZWhvbGRlcj1cItCy0LLQtdC00Lgg0YLQtdC60YHRglwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9kb28oZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRVc2Vyc30+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnMiXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlcnMiLCJ1c2VycyIsInNldFVzZXJzIiwiaWQiLCJuYW1lIiwidG9kb29UaXRsZSIsInNldFRvZG9vIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRVc2VycyIsIkRhdGUiLCJub3ciLCJoYW5kbGVDbGljayIsInJhdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiaDEiLCJsZWdhY3lCZWhhdmlvciIsImhyZWYiLCJhIiwidWwiLCJtYXAiLCJ1c2VyIiwibGkiLCJoMiIsImlucHV0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});