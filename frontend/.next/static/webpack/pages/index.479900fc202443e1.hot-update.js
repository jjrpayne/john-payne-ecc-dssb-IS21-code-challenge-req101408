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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst API_URL = \"http://localhost:3000/api/\";\nfunction Home() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchdata = async ()=>{\n            const response = await fetch(API_URL + \"products\");\n            const data = await response.json();\n            setProducts(data);\n        };\n        fetchdata();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-e32c52b7eb280334\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container) || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        className: \"jsx-e32c52b7eb280334\",\n                        children: \"ECC Products\"\n                    }, void 0, false, {\n                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-e32c52b7eb280334\"\n                    }, void 0, false, {\n                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-e32c52b7eb280334\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-e32c52b7eb280334\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title) || \"\"),\n                        children: \"ECC Web Application Catalogue\"\n                    }, void 0, false, {\n                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-e32c52b7eb280334\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().description) || \"\"),\n                        children: [\n                            \"Total products: \",\n                            products.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-e32c52b7eb280334\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card) || \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-e32c52b7eb280334\" + \" \" + \"relative overflow-x-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                className: \"jsx-e32c52b7eb280334\" + \" \" + \"w-full text-md text-left text-gray-500 dark:text-gray-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"text-sm text-gray-700 uppercase dark:text-gray-400\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            className: \"jsx-e32c52b7eb280334\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-3\",\n                                                    children: \"Product Number\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-3\",\n                                                    children: \"Product Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-3\",\n                                                    children: \"Scrum Master\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-3\",\n                                                    children: \"Product Owner\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-3\",\n                                                    children: \"Developer Names\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-3\",\n                                                    children: \"Start Date\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-3\",\n                                                    children: \"Methodology\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-3\",\n                                                    children: \"Action\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                        className: \"jsx-e32c52b7eb280334\",\n                                        children: products.map((product, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                className: \"jsx-e32c52b7eb280334\" + \" \" + \"bg-white border-b dark:bg-gray-800 dark:border-gray-700\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-4\",\n                                                        children: product.productId\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-4\",\n                                                        children: product.productName\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-4\",\n                                                        children: product.scrumMasterName\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-4\",\n                                                        children: product.productOwnerName\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-4\",\n                                                        children: product.Developers.toString().replace(/,/g, \", \")\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-4\",\n                                                        children: product.startDate\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-4\",\n                                                        children: product.methodology\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"jsx-e32c52b7eb280334\" + \" \" + \"px-6 py-4\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"jsx-e32c52b7eb280334\" + \" \" + \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                                                            children: \"Edit\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 49\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, key, true, {\n                                                fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 21\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"e0092855bdfdf53d\",\n                children: \"main.jsx-e32c52b7eb280334{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}code.jsx-e32c52b7eb280334{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\"\n            }, void 0, false, void 0, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b0cffc484a2fa82a\",\n                children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jj/bc public service/john-payne-ecc-dssb-IS21-code-challenge-req101408/frontend/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNrQjtBQUNIO0FBRTVDLE1BQU1JLFVBQVU7QUFFRCxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssWUFBWTtZQUNoQixNQUFNQyxXQUFXLE1BQU1DLE1BQU1OLFVBQVU7WUFDdkMsTUFBTU8sT0FBTyxNQUFNRixTQUFTRztZQUM1QkwsWUFBWUk7UUFDZDtRQUNBSDtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO21EQUFlWiwwRUFBZ0JhOzswQkFDOUIsOERBQUNkLGtEQUFJQTs7a0NBQ0gsOERBQUNlOztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDOzs7a0NBQ0MsOERBQUNDO21FQUFjbkIsc0VBQVljO2tDQUFFOzs7Ozs7a0NBSTdCLDhEQUFDTTttRUFBYXBCLDRFQUFrQnFCOzs0QkFBRTs0QkFDZmhCLFNBQVNpQjs7Ozs7OztrQ0FFNUIsOERBQUNWO21FQUFlWixxRUFBV3VCO2tDQUN6Qiw0RUFBQ1g7c0VBQWM7c0NBQ2IsNEVBQUNZOzBFQUFnQjs7a0RBQ2YsOERBQUNDO2tGQUFnQjtrREFDZiw0RUFBQ0M7Ozs4REFDQyw4REFBQ0M7b0RBQUdDLE9BQU07OEZBQWdCOzhEQUFZOzs7Ozs7OERBQ3RDLDhEQUFDRDtvREFBR0MsT0FBTTs4RkFBZ0I7OERBQVk7Ozs7Ozs4REFDdEMsOERBQUNEO29EQUFHQyxPQUFNOzhGQUFnQjs4REFBWTs7Ozs7OzhEQUN0Qyw4REFBQ0Q7b0RBQUdDLE9BQU07OEZBQWdCOzhEQUFZOzs7Ozs7OERBQ3RDLDhEQUFDRDtvREFBR0MsT0FBTTs4RkFBZ0I7OERBQVk7Ozs7Ozs4REFDdEMsOERBQUNEO29EQUFHQyxPQUFNOzhGQUFnQjs4REFBWTs7Ozs7OzhEQUN0Qyw4REFBQ0Q7b0RBQUdDLE9BQU07OEZBQWdCOzhEQUFZOzs7Ozs7OERBQ3RDLDhEQUFDRDtvREFBR0MsT0FBTTs4RkFBZ0I7OERBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUcxQyw4REFBQ0M7O2tEQUVHeEIsU0FBU3lCLElBQUssQ0FBQ0MsU0FBU0Msb0JBQ3RCLDhEQUFDTjswRkFBdUI7O2tFQUN0Qiw4REFBQ087a0dBQWE7a0VBQWFGLFFBQVFHOzs7Ozs7a0VBQ25DLDhEQUFDRDtrR0FBYTtrRUFBYUYsUUFBUUk7Ozs7OztrRUFDbkMsOERBQUNGO2tHQUFhO2tFQUFhRixRQUFRSzs7Ozs7O2tFQUNuQyw4REFBQ0g7a0dBQWE7a0VBQWFGLFFBQVFNOzs7Ozs7a0VBQ25DLDhEQUFDSjtrR0FBYTtrRUFBYUYsUUFBUU8sV0FBV0MsV0FBV0MsUUFBUSxNQUFNOzs7Ozs7a0VBQ3ZFLDhEQUFDUDtrR0FBYTtrRUFBYUYsUUFBUVU7Ozs7OztrRUFDbkMsOERBQUNSO2tHQUFhO2tFQUFhRixRQUFRVzs7Ozs7O2tFQUNuQyw4REFBQ1Q7a0dBQWE7a0VBQVksNEVBQUNVO3NHQUFpQjtzRUFBdUU7Ozs7Ozs7Ozs7OzsrQ0FSNUdYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0Q3QjtHQWpHd0I1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQVBJX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpLydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaGRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwgKyAncHJvZHVjdHMnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hkYXRhKCk7XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVDQyBQcm9kdWN0czwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgRUNDIFdlYiBBcHBsaWNhdGlvbiBDYXRhbG9ndWVcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgVG90YWwgcHJvZHVjdHM6IHtwcm9kdWN0cy5sZW5ndGh9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LW1kIHRleHQtbGVmdCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5Qcm9kdWN0IE51bWJlcjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5Qcm9kdWN0IE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+U2NydW0gTWFzdGVyPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlByb2R1Y3QgT3duZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+RGV2ZWxvcGVyIE5hbWVzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlN0YXJ0IERhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+TWV0aG9kb2xvZ3k8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAocHJvZHVjdCwga2V5KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17a2V5fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPntwcm9kdWN0LnByb2R1Y3RJZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57cHJvZHVjdC5wcm9kdWN0TmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57cHJvZHVjdC5zY3J1bU1hc3Rlck5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+e3Byb2R1Y3QucHJvZHVjdE93bmVyTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57cHJvZHVjdC5EZXZlbG9wZXJzLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCAnLCAnKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57cHJvZHVjdC5zdGFydERhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+e3Byb2R1Y3QubWV0aG9kb2xvZ3l9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPkVkaXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFQSV9VUkwiLCJIb21lIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZldGNoZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImRpdiIsImNvbnRhaW5lciIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJjYXJkIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwicHJvZHVjdCIsImtleSIsInRkIiwicHJvZHVjdElkIiwicHJvZHVjdE5hbWUiLCJzY3J1bU1hc3Rlck5hbWUiLCJwcm9kdWN0T3duZXJOYW1lIiwiRGV2ZWxvcGVycyIsInRvU3RyaW5nIiwicmVwbGFjZSIsInN0YXJ0RGF0ZSIsIm1ldGhvZG9sb2d5IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});