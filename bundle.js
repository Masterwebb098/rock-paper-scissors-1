/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Chango&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n\\tmargin: 0px;\\n\\tpadding: 0px;\\n\\tbox-sizing: border-box;\\n\\tfont-family: 'Open sans', sans-serif;\\n}\\nbody {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tbackground: rgb(241, 241, 241);\\n}\\n.game {\\n\\tmargin-top: 50px;\\n\\tmargin-bottom: 50px;\\n\\tmargin-right: 100px;\\n\\tmargin-left: 100px;\\n\\tbackground: #ffd538;\\n\\theight: 550px;\\n\\twidth: 800px;\\n\\tmin-width: 300px;\\n\\tposition: relative;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tborder: #ffd538;\\n\\tborder-radius: 20px;\\n\\tbox-shadow: rgba(50, 50, 93, 0.25) 0px 6px 30px 6px,\\n\\t\\trgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\\n}\\n.blur {\\n\\ttransition: 0.5s;\\n\\tfilter: blur(20px);\\n\\tpointer-events: none;\\n\\tuser-select: none;\\n}\\n.game-screen {\\n\\tflex: 2;\\n\\tdisplay: flex;\\n}\\n.game-log-container {\\n\\tmin-width: 300px;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n.game-log {\\n\\twidth: 90%;\\n\\tmax-width: 268px;\\n\\theight: 85%;\\n\\tdisplay: flex;\\n\\tbackground-color: #333333;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tborder: 0.9px solid #333333;\\n\\tborder-radius: 30px;\\n\\tfont-size: 40px;\\n\\tfont-weight: 400;\\n\\tline-height: 1.2em;\\n\\tcolor: rgb(238, 238, 238);\\n\\toverflow: hidden;\\n\\ttext-align: center;\\n}\\n.scoreboard-container {\\n\\tflex: 1;\\n\\tposition: relative;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n.score-text {\\n\\tposition: relative;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-content: center;\\n\\tfont-weight: 800;\\n\\tfont-size: 200px;\\n}\\n.indicator {\\n\\tposition: absolute;\\n\\ttop: 20px;\\n\\tfont-weight: 300;\\n\\tfont-size: 20px;\\n}\\n\\n.you-text {\\n\\tleft: 40px;\\n}\\n\\n.computer-text {\\n\\tright: 40px;\\n}\\n\\n.option-screen {\\n\\tflex: 1.5;\\n\\tmin-width: 300px;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n.item-selection-container {\\n\\tposition: relative;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tborder: 0.9px solid #333333;\\n\\tborder-radius: 20px;\\n\\tbackground-color: #333333;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n.choose-text {\\n\\theight: 40px;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tfont-weight: 500;\\n\\tcolor: rgb(238, 238, 238);\\n}\\n.btn-container {\\n\\tflex: 1;\\n\\tdisplay: flex;\\n\\tposition: relative;\\n\\tmargin-top: -20px;\\n\\tjustify-content: space-evenly;\\n\\talign-items: center;\\n}\\n.selection {\\n\\tborder: transparent;\\n\\tborder-radius: 30px;\\n\\ttransition: 0.5s;\\n}\\n.selection:hover {\\n\\ttransform: translateY(-2px);\\n\\tcursor: pointer;\\n}\\n.selection:active {\\n\\ttransform: scale(0.95);\\n}\\n#result {\\n\\tposition: absolute;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-content: center;\\n\\tflex-direction: column;\\n\\tvisibility: hidden;\\n\\topacity: 0;\\n\\ttransition: 0.5s;\\n}\\n#result h1 {\\n\\tfont-size: 20px;\\n\\tcolor: #181818;\\n}\\n#result.active {\\n\\tvisibility: visible;\\n\\topacity: 1;\\n\\ttransition: 0.5s;\\n}\\n.button-1 {\\n\\tborder-radius: 6px;\\n\\tbackground-color: #ffd538;\\n\\tborder: none;\\n\\tcolor: #000000;\\n\\ttext-align: center;\\n\\tfont-size: 30px;\\n\\tfont-weight: 300;\\n\\tmargin-top: 10px;\\n\\twidth: 220px;\\n\\tmargin: auto;\\n\\ttransition: all 0.1s;\\n\\tcursor: pointer;\\n\\toutline: none;\\n}\\n.button-1:hover {\\n\\tbackground-color: #d4b131;\\n}\\n.button-1:active {\\n\\ttransform: scale(0.95);\\n}\\n@media only screen and (max-width: 860px) {\\n\\t.game-screen {\\n\\t\\tflex-direction: column;\\n\\t}\\n\\t.game-log-container {\\n\\t\\tflex: 0.7;\\n\\t}\\n\\t.game-log {\\n\\t\\tmax-width: 90%;\\n\\t\\tfont-size: 30px;\\n\\t}\\n\\t.score-text {\\n\\t\\tfont-size: 120px;\\n\\t}\\n}\\n@media only screen and (max-width: 700px) {\\n\\t.game {\\n\\t\\tmargin: 0;\\n\\t\\twidth: 100vw;\\n\\t\\theight: 100vh;\\n\\t\\tborder-radius: 0px;\\n\\t}\\n\\t.item-selection-container {\\n\\t\\tborder-bottom-left-radius: 0px;\\n\\t\\tborder-bottom-right-radius: 0px;\\n\\t}\\n}\\n@media only screen and (max-width: 420px) {\\n\\tbody {\\n\\t\\tmargin: auto;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\t#result h1 {\\n\\t\\tfont-size: 15px;\\n\\t\\tcolor: #181818;\\n\\t}\\n\\t.selection {\\n\\t\\theight: 130px;\\n\\t}\\n\\t.selection:hover {\\n\\t\\ttransform: translateY(-0px);\\n\\t}\\n\\t.selection:active {\\n\\t\\ttransform: scale(0.95);\\n\\t}\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://rock-paper-scissors/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/style/style.css":
/*!************************************!*\
  !*** ./src/assets/style/style.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rock-paper-scissors/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/game.ts":
/*!*************************!*\
  !*** ./src/app/game.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\nvar Game = /** @class */ (function () {\n    function Game(userInterface) {\n        var _this = this;\n        this.playRound = function (playerSelection) {\n            var playerSelect = playerSelection.toLowerCase();\n            var opponentSelect = _this.computerPlay();\n            if ((playerSelect === 'rock' && opponentSelect === 'scissors') ||\n                (playerSelect === 'scissors' && opponentSelect === 'paper') ||\n                (playerSelect === 'paper' && opponentSelect === 'rock')) {\n                _this.addScore(1, 0);\n                return \"You win! \" + playerSelect + \" beats \" + opponentSelect + \".\";\n            }\n            if ((opponentSelect === 'rock' && playerSelect === 'scissors') ||\n                (opponentSelect === 'scissors' && playerSelect === 'paper') ||\n                (opponentSelect === 'paper' && playerSelect === 'rock')) {\n                _this.addScore(0, 1);\n                return \"You lose! \" + opponentSelect + \" beats \" + playerSelect + \".\";\n            }\n            if (playerSelect === opponentSelect) {\n                _this.addScore(0, 0);\n                return \"No one won! it's a draw.\";\n            }\n        };\n        this.getScores = function () {\n            return [_this._playerScore, _this._computerScore];\n        };\n        this.resetScore = function () {\n            _this._playerScore = 0;\n            _this._computerScore = 0;\n        };\n        this.userInterface = userInterface;\n        this._playerScore = 0;\n        this._computerScore = 0;\n        //Explicitly call function to bind events\n        this.userInterface.bindEvents(this);\n    }\n    Game.prototype.addScore = function (player, computer) {\n        this._playerScore += player;\n        this._computerScore += computer;\n    };\n    //Function: randomize choice from string array for opponent\n    Game.prototype.computerPlay = function () {\n        var choice = ['rock', 'paper', 'scissors'];\n        //Auto generate index number for random selection\n        return choice[Math.floor(Math.random() * choice.length)];\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/app/game.ts?");

/***/ }),

/***/ "./src/app/gameUI.ts":
/*!***************************!*\
  !*** ./src/app/gameUI.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserInterface\": () => (/* binding */ UserInterface)\n/* harmony export */ });\n/* harmony import */ var _assets_images_rock_hover_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/rock-hover.svg */ \"./src/assets/images/rock-hover.svg\");\n/* harmony import */ var _assets_images_rock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/rock.svg */ \"./src/assets/images/rock.svg\");\n/* harmony import */ var _assets_images_paper_hover_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/paper-hover.svg */ \"./src/assets/images/paper-hover.svg\");\n/* harmony import */ var _assets_images_paper_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/paper.svg */ \"./src/assets/images/paper.svg\");\n/* harmony import */ var _assets_images_scissors_hover_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/scissors-hover.svg */ \"./src/assets/images/scissors-hover.svg\");\n/* harmony import */ var _assets_images_scissors_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/scissors.svg */ \"./src/assets/images/scissors.svg\");\n\n\n\n\n\n\nvar UserInterface = /** @class */ (function () {\n    function UserInterface() {\n        var _this = this;\n        this.selectWeapon = function (game) {\n            var _a;\n            (_a = _this.userSelect) === null || _a === void 0 ? void 0 : _a.forEach(function (weapon) {\n                weapon.addEventListener('click', function () {\n                    var winner = game.playRound(weapon.id);\n                    _this.scoreObserver(game);\n                    _this.announceResults(winner);\n                });\n            });\n        };\n        //type score\n        this.scoreObserver = function (game) {\n            var gameScore = game.getScores();\n            var playerScore = gameScore[0], computerScore = gameScore[1];\n            if (playerScore === 5 || computerScore === 5)\n                _this.endGame(gameScore);\n            _this.scoreBoard[0].textContent = String(playerScore);\n            _this.scoreBoard[1].textContent = String(computerScore);\n        };\n        this.endGame = function (scoreResults) {\n            //Display result modal\n            var blur = document.getElementById('game');\n            blur.classList.add('blur');\n            var result = document.getElementById('result');\n            result.classList.add('active');\n            var playerScore = scoreResults[0], computerScore = scoreResults[1];\n            var announceText = '';\n            //Check results\n            playerScore > computerScore\n                ? (announceText = \"You have won the game!\")\n                : (announceText = 'You have lost. Computer has won the game !');\n            //Update results text content\n            result.querySelector('h1').textContent = announceText;\n        };\n        this.bindEvents = function (game) {\n            _this.bindPlayAgainButton();\n            _this.bindSelectionHoverEvents();\n            _this.selectWeapon(game);\n        };\n        this.scoreBoard = document.querySelectorAll('#scoreboard-container > h3');\n        this.gameLog = document.getElementById('game-log');\n        this.userSelect = document.querySelectorAll('.selection');\n        this.playAgainButton = document.getElementById('playButton');\n    }\n    UserInterface.prototype.activeHover = function (event) {\n        var target = event.target;\n        if (target.id === 'rock') {\n            target.src = _assets_images_rock_hover_svg__WEBPACK_IMPORTED_MODULE_0__;\n        }\n        if (target.id === 'paper') {\n            target.src = _assets_images_paper_hover_svg__WEBPACK_IMPORTED_MODULE_2__;\n        }\n        if (target.id === 'scissors') {\n            target.src = _assets_images_scissors_hover_svg__WEBPACK_IMPORTED_MODULE_4__;\n        }\n    };\n    UserInterface.prototype.inactiveHover = function (event) {\n        var target = event.target;\n        if (target.id === 'rock') {\n            target.src = _assets_images_rock_svg__WEBPACK_IMPORTED_MODULE_1__;\n        }\n        if (target.id === 'paper') {\n            target.src = _assets_images_paper_svg__WEBPACK_IMPORTED_MODULE_3__;\n        }\n        if (target.id === 'scissors') {\n            target.src = _assets_images_scissors_svg__WEBPACK_IMPORTED_MODULE_5__;\n        }\n    };\n    UserInterface.prototype.announceResults = function (winner) {\n        this.gameLog.textContent = winner;\n    };\n    UserInterface.prototype.bindSelectionHoverEvents = function () {\n        var _this = this;\n        var _a;\n        (_a = this.userSelect) === null || _a === void 0 ? void 0 : _a.forEach(function (select) {\n            select.addEventListener('mouseenter', function (e) {\n                _this.activeHover(e);\n            });\n        });\n        this.userSelect.forEach(function (select) {\n            select.addEventListener('mouseleave', function (e) {\n                _this.inactiveHover(e);\n            });\n        });\n    };\n    UserInterface.prototype.bindPlayAgainButton = function () {\n        var _a;\n        (_a = this.playAgainButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {\n            window.location.reload(true);\n        });\n    };\n    return UserInterface;\n}());\n\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/app/gameUI.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/game */ \"./src/app/game.ts\");\n/* harmony import */ var _app_gameUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/gameUI */ \"./src/app/gameUI.ts\");\n/* harmony import */ var _assets_style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/style/style.css */ \"./src/assets/style/style.css\");\n\n\n\nnew _app_game__WEBPACK_IMPORTED_MODULE_0__.Game(new _app_gameUI__WEBPACK_IMPORTED_MODULE_1__.UserInterface());\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/index.ts?");

/***/ }),

/***/ "./src/assets/images/paper-hover.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/paper-hover.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c61cee45e8f312912217.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/paper-hover.svg?");

/***/ }),

/***/ "./src/assets/images/paper.svg":
/*!*************************************!*\
  !*** ./src/assets/images/paper.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5895af05f59c001c9aa9.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/paper.svg?");

/***/ }),

/***/ "./src/assets/images/rock-hover.svg":
/*!******************************************!*\
  !*** ./src/assets/images/rock-hover.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"189510152f6b7e96ba93.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/rock-hover.svg?");

/***/ }),

/***/ "./src/assets/images/rock.svg":
/*!************************************!*\
  !*** ./src/assets/images/rock.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed5e0ce56ad08e6f1e36.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/rock.svg?");

/***/ }),

/***/ "./src/assets/images/scissors-hover.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/scissors-hover.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6f85863ab33d7aeddaa.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/scissors-hover.svg?");

/***/ }),

/***/ "./src/assets/images/scissors.svg":
/*!****************************************!*\
  !*** ./src/assets/images/scissors.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cfe4edbe6b078813a00.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors/./src/assets/images/scissors.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;