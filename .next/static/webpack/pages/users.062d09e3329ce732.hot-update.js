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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Users = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            name: \"Petrovich\"\n        },\n        {\n            id: 2,\n            name: \"Vasilych\"\n        }\n    ]);\n    const [todooTitle, setTodoo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    let enterKey = (e)=>{\n        if (e) {\n            setUsers([\n                ...users,\n                {\n                    id: Date.now(),\n                    name: todooTitle\n                }\n            ]);\n            setTodoo(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.addEventListener(\"keyup\", enterKey);\n        return ()=>{\n            document.removeEventListener(\"keyup\", enterKey);\n        };\n    }, [\n        todooTitle\n    ]);\n    const addUsers = (e)=>{\n        if (todooTitle) {\n            setUsers([\n                ...users,\n                {\n                    id: Date.now(),\n                    name: todooTitle\n                }\n            ]);\n            setTodoo(\"\");\n        }\n    };\n    const handleClick = ()=>console.log(\"click\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const raw = localStorage.getItem(\"toodos\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.addEventListener(\"click\", handleClick);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClick);\n        };\n    }, [\n        users\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Пользователи\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                legacyBehavior: true,\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"На главную\"\n                }, void 0, false, {\n                    fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            legacyBehavior: true,\n                            href: \"/users/\".concat(user.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                                lineNumber: 77,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                            lineNumber: 76,\n                            columnNumber: 29\n                        }, undefined)\n                    }, user.id, false, {\n                        fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                        lineNumber: 75,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Добавить\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: todooTitle,\n                placeholder: \"введи текст\",\n                onChange: (e)=>setTodoo(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addUsers,\n                children: \"Добавить\"\n            }, void 0, false, {\n                fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amlin04/Рабочий стол/project react js/next/pages/users.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Users, \"+QLITXhOllykVh34hyAYbcNxaw4=\");\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTRCO0FBQ2U7QUFHM0MsTUFBTUcsUUFBUSxJQUFNOztJQUVoQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7UUFDL0I7WUFBRUksSUFBSTtZQUFHQyxNQUFNO1FBQVk7UUFDM0I7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQVc7S0FDN0I7SUFHRCxNQUFNLENBQUNDLFlBQVlDLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFeEMsSUFBSVEsV0FBV0MsQ0FBQUEsSUFBSztRQUNoQixJQUFJQSxHQUFHO1lBQ0hOLFNBQVM7bUJBQ0ZEO2dCQUNIO29CQUFFRSxJQUFJTSxLQUFLQyxHQUFHO29CQUFJTixNQUFNQztnQkFBVzthQUV0QztZQUNEQyxTQUFTO1FBQ2IsQ0FBQztJQUNMO0lBRUFSLGdEQUFTQSxDQUFDLElBQU07UUFDWmEsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU0w7UUFDbkMsT0FBTyxJQUFNO1lBQ1RJLFNBQVNFLG1CQUFtQixDQUFDLFNBQVNOO1FBQzFDO0lBRUosR0FBRztRQUFDRjtLQUFXO0lBTWYsTUFBTVMsV0FBVyxDQUFDTixJQUFNO1FBRXBCLElBQUlILFlBQVk7WUFDWkgsU0FBUzttQkFDRkQ7Z0JBQ0g7b0JBQUVFLElBQUlNLEtBQUtDLEdBQUc7b0JBQUlOLE1BQU1DO2dCQUFXO2FBRXRDO1lBQ0RDLFNBQVM7UUFDYixDQUFDO0lBRUw7SUFFQSxNQUFNUyxjQUFjLElBQU1DLFFBQVFDLEdBQUcsQ0FBQztJQUV0Q25CLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNb0IsTUFBTUMsYUFBYUMsT0FBTyxDQUFDO0lBRXJDLEdBQUcsRUFBRTtJQUdMdEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaYSxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTRztRQUNuQyxPQUFPLElBQU07WUFDVEosU0FBU0UsbUJBQW1CLENBQUMsU0FBU0U7UUFDMUM7SUFDSixHQUFHO1FBQUNkO0tBQU07SUFDVixxQkFFSSw4REFBQ29COzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ3pCLGtEQUFJQTtnQkFBQzBCLGNBQWM7Z0JBQUNDLE1BQUs7MEJBQ3RCLDRFQUFDQzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRVAsOERBQUNDOzBCQUVPekIsTUFBTTBCLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ04sOERBQUNDO2tDQUNHLDRFQUFDaEMsa0RBQUlBOzRCQUFDMEIsY0FBYzs0QkFBQ0MsTUFBTSxVQUFrQixPQUFSSSxLQUFLekIsRUFBRTtzQ0FDeEMsNEVBQUNzQjswQ0FBR0csS0FBS3hCLElBQUk7Ozs7Ozs7Ozs7O3VCQUZad0IsS0FBS3pCLEVBQUU7Ozs7Ozs7Ozs7MEJBYzVCLDhEQUFDMkI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU1DLE9BQU8zQjtnQkFBWTRCLGFBQVk7Z0JBQWNDLFVBQVUsQ0FBQzFCLElBQU1GLFNBQVNFLEVBQUUyQixNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFDNUYsOERBQUNJO2dCQUFPQyxTQUFTdkI7MEJBQVU7Ozs7Ozs7Ozs7OztBQUl2QztHQTFGTWQ7S0FBQUE7QUE0Rk4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanM/MDA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5cbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdQZXRyb3ZpY2gnIH0sXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdWYXNpbHljaCcgfVxuICAgIF0pXG5cblxuICAgIGNvbnN0IFt0b2Rvb1RpdGxlLCBzZXRUb2Rvb10gPSB1c2VTdGF0ZSgnJylcblxuICAgIGxldCBlbnRlcktleSA9IGUgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgc2V0VXNlcnMoW1xuICAgICAgICAgICAgICAgIC4uLnVzZXJzLFxuICAgICAgICAgICAgICAgIHsgaWQ6IERhdGUubm93KCksIG5hbWU6IHRvZG9vVGl0bGUgfVxuXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgc2V0VG9kb28oJycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGVudGVyS2V5KVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlbnRlcktleSlcbiAgICAgICAgfVxuXG4gICAgfSwgW3RvZG9vVGl0bGVdKVxuXG5cblxuXG5cbiAgICBjb25zdCBhZGRVc2VycyA9IChlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZiAodG9kb29UaXRsZSkge1xuICAgICAgICAgICAgc2V0VXNlcnMoW1xuICAgICAgICAgICAgICAgIC4uLnVzZXJzLFxuICAgICAgICAgICAgICAgIHsgaWQ6IERhdGUubm93KCksIG5hbWU6IHRvZG9vVGl0bGUgfVxuXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgc2V0VG9kb28oJycpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJ2NsaWNrJylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b29kb3MnKVxuXG4gICAgfSwgW10pXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljaylcbiAgICAgICAgfVxuICAgIH0sIFt1c2Vyc10pXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuDwvaDE+XG4gICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPtCd0LAg0LPQu9Cw0LLQvdGD0Y48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1c2Vycy5tYXAodXNlciA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgbGVnYWN5QmVoYXZpb3IgaHJlZj17YC91c2Vycy8ke3VzZXIuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt1c2VyLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuXG4gICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGgyPtCU0L7QsdCw0LLQuNGC0Yw8L2gyPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0b2Rvb1RpdGxlfSBwbGFjZWhvbGRlcj1cItCy0LLQtdC00Lgg0YLQtdC60YHRglwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9kb28oZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRVc2Vyc30+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnMiXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlcnMiLCJ1c2VycyIsInNldFVzZXJzIiwiaWQiLCJuYW1lIiwidG9kb29UaXRsZSIsInNldFRvZG9vIiwiZW50ZXJLZXkiLCJlIiwiRGF0ZSIsIm5vdyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRVc2VycyIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsInJhdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXYiLCJoMSIsImxlZ2FjeUJlaGF2aW9yIiwiaHJlZiIsImEiLCJ1bCIsIm1hcCIsInVzZXIiLCJsaSIsImgyIiwiaW5wdXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});