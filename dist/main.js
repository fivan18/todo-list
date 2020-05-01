/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/sidebar.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/sidebar.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".side-bar {\\n  height: 100%;\\n  width: 25%;\\n  position: fixed;\\n  z-index: 1;\\n  top: 0;\\n  left: 0;\\n  background-color: #f7f7f7 ;\\n  overflow-x: hidden;\\n  padding-top: 20px;\\n}\\n\\n.app-name {\\n  text-align: center;\\n}\\n\\n.projects {\\n  padding-left: 30px;\\n}\\n\\n.project-input {\\n  width: 70%;\\n}\\n\\n.project-button {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.each-project {\\n  list-style-type: none;\\n  font-size: 20px;\\n  margin-bottom: 5px;\\n  cursor: pointer;\\n  text-transform:capitalize;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/sidebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\\n\\n.main {\\n  margin-left: 25%;\\n  padding: 0px 10px;\\n}\\n\\n.todo-input {\\n  margin-bottom: 25px;\\n}\\n\\n.todo-item {\\n  border: solid 1px black;\\n  padding: 10px;\\n}\\n\\n.main-content-todo {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n}\\n\\n.editTodoForm {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  padding-top: 100px;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgb(0,0,0);\\n  background-color: rgba(0,0,0,0.4);\\n}\\n\\n.editTodoForm-content {\\n  background-color: #fefefe;\\n  margin: auto;\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 80%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/activeStorage.js":
/*!******************************!*\
  !*** ./src/activeStorage.js ***!
  \******************************/
/*! exports provided: storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst storage = (function() {\n  let projects = [];\n\n  const getProjects = () => projects;\n\n  function addProject(project) {\n    projects.push(project);\n    _localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveArr(projects);\n  }\n\n  function load() {\n    let localProjects = _localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].retrieveArr();\n    if (localProjects.length === 0){\n      createDefaultProject();\n    }else {\n      projects = [];\n      localProjects.forEach(localProject => {\n        let completeProject = Object.assign(Object(_todo__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])(''), localProject);\n        projects.push(completeProject);\n      });\n    }\n  }\n\n  function save() {\n    _localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveArr(projects);\n  }\n\n  function createDefaultProject(){\n    let defaultProject = \"Default Project\";\n    const project = Object(_todo__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])(defaultProject);\n    addProject(project);\n  }\n\n  return {\n    save,\n    addProject,\n    load,\n    getProjects\n  };\n\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/activeStorage.js?");

/***/ }),

/***/ "./src/assets/css/sidebar.css":
/*!************************************!*\
  !*** ./src/assets/css/sidebar.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/sidebar.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/css/sidebar.css?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/css/style.css?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dom\", function() { return dom; });\nconst dom = (function(){\n  function append(element, content) {\n    element.insertAdjacentHTML('beforeend', content);\n  }\n\n  function render(element, content) {\n    element.innerHTML = content;\n  }\n  \n  function getElement(element, target) {\n    return element.querySelector(target);\n  }\n  \n  function addClass(element, theClass) {\n    element.classList.add(theClass);\n  }\n  function removeClass(element, theClass) {\n    element.classList.remove(theClass);\n  }\n  \n  function setEventHandler(selector, event, handler) {\n    const items = [...document.querySelectorAll(selector)];\n    items.forEach((item) => {\n      item.addEventListener(event, handler);\n    });\n  }\n\n  return {\n    append,\n    render,\n    getElement,\n    addClass,\n    removeClass,\n    setEventHandler,\n  } \n})();\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/domManipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_css_sidebar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/sidebar.css */ \"./src/assets/css/sidebar.css\");\n/* harmony import */ var _assets_css_sidebar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_sidebar_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n/* harmony import */ var _activeStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activeStorage */ \"./src/activeStorage.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts */ \"./src/layouts.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\n\n\n\n\n\n\n/* ************************* Helper methods ************************* */\nfunction  displayAlert(content,status, place){\n  let alert = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document, place);\n  if(status==\"succes\"){\n    alert.style.color = \"green\"\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].render(alert, content);\n  } else {\n    alert.style.color = \"red\"\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].render(alert, content);\n  }\n}\n\nfunction validateStr(str, max, min = 0) {\n  if (str.length < max && str.length > min) {\n    return true;\n  }\n  return false;\n}\n\nfunction validateDateFormat(str){\n  return /^(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(str);\n}\n\nfunction renderItems(items, callback, container, indexParent = -1){\n  let layout = \"\";\n  items.forEach((item, index) => {\n    layout += callback(item, index, indexParent);\n  });\n  _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].render(_domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document, container), layout);\n}\n\n/* ************************* Todo's handlers ************************* */\n// create a todo\nwindow.todoHandler = function todoHandler(indexParent){\n  const projects = _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getProjects();\n  const activityInput = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document,'.todo-name').value;\n  const activityDate = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document,'.todo-date').value;\n  if (\n    validateStr(activityInput, 50, 5) &&\n    validateStr(activityDate, 11, 0) &&\n    validateDateFormat(activityDate)\n  ){\n    // modify the data model\n    const index = projects[indexParent].addTodo(activityInput, activityDate);\n    // publish a todo list has been modified\n    _pubsub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].publish( \"modify/todoOrProjectList\", {\n      append: true,\n      item: projects[indexParent].todos[index],\n      index,\n      indexParent,\n      alert: [\"Todo was created succesfully\", \"succes\",\".global-alert\"],\n      selectorContainer: '.todos',\n      layout: _layouts__WEBPACK_IMPORTED_MODULE_5__[\"layouts\"].todoItem\n    });\n  }else{\n    displayAlert(\" Title and date cannot be blank\", \"error\",\".global-alert\");\n  }\n}\n\n// check a todo\nwindow.check = function check(index , indexParent, element){\n  const projects = _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getProjects();\n  projects[indexParent].todos[index].checked = element.checked;\n  _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].save();\n}\n\n// delete a todo\nwindow.deleteTodo = function deleteTodo(index, indexParent){\n  // modify the data model\n  const projects = _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getProjects();\n  projects[indexParent].todos.splice(index,1);\n  // publish a todo list has been modified\n  _pubsub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].publish( \"modify/todoOrProjectList\", {\n    append: false,\n    items: projects[indexParent].todos,\n    indexParent,\n    alert: [\"Todo was deleted succesfully\", \"red\", \".global-alert\"],\n    selectorContainer: '.todos',\n    layout: _layouts__WEBPACK_IMPORTED_MODULE_5__[\"layouts\"].todoItem\n  });\n}\n\n// edit a todo\nwindow.closeEditTodo = function closeEditTodo(){\n  let modal = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document, '.editTodoForm');\n  modal.style.display = 'none';\n}\n\nwindow.saveEditTodo = function saveEditTodo(index, indexParent) {\n  console.log(index,indexParent);\n  let form = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document, \"#edit-form\")\n  const projects = _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getProjects();\n  let currentTodo = projects[indexParent].todos[index];\n  const { editTitle: {value: title},\n          editDescription: {value: description},\n          editDate: {value: dueDate},\n          editPriority: {value: priority} } = form;\n  if (validateStr(title, 50, 5) &&\n      validateStr(dueDate, 11, 0) &&\n      validateDateFormat(dueDate) &&\n      validateStr(description, 120, -1) &&\n      [0, 1, 2].includes(parseInt(priority))\n  ){\n    // modify the data model\n    currentTodo.title = title;\n    currentTodo.description = description;\n    currentTodo.dueDate = dueDate;\n    currentTodo.priority = parseInt(priority);\n    closeEditTodo();\n    // publish a todo list has been modified\n    _pubsub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].publish( \"modify/todoOrProjectList\", {\n      append: false,\n      items: projects[indexParent].todos,\n      indexParent,\n      alert: [\"Todo saved succesfully\", \"succes\",\".global-alert\"],\n      selectorContainer: '.todos',\n      layout: _layouts__WEBPACK_IMPORTED_MODULE_5__[\"layouts\"].todoItem\n    });\n  }else {\n    displayAlert(\"Invalid input on form\",\"red\",\".error-todo-form\")\n  }\n}\n\nwindow.showEditTodo = function showEditTodo(index, indexParent){\n  let modal = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document, '.editTodoForm');\n  modal.style.display = 'block';\n  let form = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(modal, \"#edit-form\")\n  const projects = _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getProjects();\n\n  let {title, description, dueDate, priority} = projects[indexParent].todos[index];\n  form.editTitle.value = title;\n  form.editDescription.value = description;\n  form.editDate.value = dueDate;\n  form.editPriority.value = priority;\n\n  _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].render(_domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document, '.save-todo'), _layouts__WEBPACK_IMPORTED_MODULE_5__[\"layouts\"].todoSaveBtn(index, indexParent));\n}\n\n// hide and unhide todos when the mouse is over\nwindow.unhide = function unhide(element){\n  let remainderContent = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(element, '.remainder-content');\n  remainderContent.style.display = 'block';\n}\n\nwindow.hide = function hide(element){\n  let remainderContent = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(element, '.remainder-content');\n  remainderContent.style.display = 'none';\n}\n\n/* ************************* Project's handlers ************************* */\n// handler to create a prject\nfunction projectHandler(){\n  const input = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document, '.project-input').value;\n  if (validateStr(input, 20, 5)) {\n    // modify data model\n    const project = Object(_todo__WEBPACK_IMPORTED_MODULE_2__[\"projectFactory\"])(input);\n    _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].addProject(project);\n    // publish the project list has been modified\n    _pubsub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].publish( \"modify/todoOrProjectList\", {\n      append: true,\n      item: project,\n      index: _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getProjects().length - 1,\n      alert: [\"Project created succesfully\", \"succes\",\".global-alert\"],\n      selectorContainer: '.display-projects',\n      layout: _layouts__WEBPACK_IMPORTED_MODULE_5__[\"layouts\"].projectItem\n    });\n  } else {\n    displayAlert(\" Project name must contains more than 5 chars and less than 20 \", \"red\", \".global-alert\");\n  }\n}\n_domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].setEventHandler('.project-button', 'click', projectHandler);\n\n// handler to display todos for a specific project\nwindow.displayTodos = function displayTodos(index) {\n  const projects = _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getProjects();\n  const createTodoForm = _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document,'.create-todo-form');\n  _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].render(createTodoForm, `<h3 class=\"name-of-the-project\">${projects[index].name} todo's:</h3>`);\n  _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].append(createTodoForm, _layouts__WEBPACK_IMPORTED_MODULE_5__[\"layouts\"].todoInput(index));\n  renderItems(projects[index].todos, _layouts__WEBPACK_IMPORTED_MODULE_5__[\"layouts\"].todoItem, '.todos', index);\n};\n\n/* ************************* Subscribe methods ************************* */\n// subscribers\nconst saver = function saver(topic, data) {\n  _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].save();\n};\nconst todosDisplyer = function todosDisplayer(topic, data){\n  if(data.append) {\n    _domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].append(_domManipulation__WEBPACK_IMPORTED_MODULE_3__[\"dom\"].getElement(document, data.selectorContainer), data.layout(data.item, data.index, data.indexParent));\n  } else {\n    renderItems(data.items, data.layout, data.selectorContainer, data.indexParent);\n  }  \n};\nconst alertDisplayer = function alertDisplayer(topic, data) {\n  displayAlert(...data.alert);\n};\n\n// subscribe\n_pubsub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].subscribe('modify/todoOrProjectList', saver);\n_pubsub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].subscribe('modify/todoOrProjectList', todosDisplyer);\n_pubsub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].subscribe('modify/todoOrProjectList', alertDisplayer); \n\n/* ************************* Initialize App ************************* */\n_activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].load();\nconst allProjects = _activeStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getProjects();\nrenderItems(allProjects, _layouts__WEBPACK_IMPORTED_MODULE_5__[\"layouts\"].projectItem, '.display-projects');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layouts.js":
/*!************************!*\
  !*** ./src/layouts.js ***!
  \************************/
/*! exports provided: layouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"layouts\", function() { return layouts; });\nconst layouts = (function() {\n\n  function projectItem(item, index, indexParent = -1) {\n    return ` <li class=\"each-project\" onClick=\"displayTodos(${index})\"> ${item.name} </li> ` ;\n  }\n\n  function todoInput(index){\n    return `\n      <div class=\"todo-input\">\n        <br>\n        <label>Create new Todo: </lable>\n        <form >\n          <input type=\"text\" class=\"todo-name\" name=\"\" value=\"\" placeholder=\"Add new activity\">\n          <input type=\"date\" class=\"todo-date\" name=\"\">\n          <button class =\"todo-button\" type=\"button\" onClick=\"todoHandler(${index})\" >Save Todo</button>\n        </form>\n      </div>\n    `;\n  }\n\n\n  function todoSaveBtn(index, indexParent) {\n    return `<button onclick=\"saveEditTodo(${index},${indexParent})\" type=\"button\"> Save Todo</button>`;\n  }\n\n  function todoItem(item, index, indexParent){\n    return `\n    <div class=\"todo-item\" onmouseover=\"unhide(this)\" onmouseout=\"hide(this)\">\n      <div class=\"main-content-todo\">\n        <form action=\"#\">\n          <label>\n            <input type=\"checkbox\" onclick=\"check(${index},${indexParent},this)\" value=\"first_checkbox\" ${item.checked ? 'checked' : ''}>\n            ${item.title}\n          </label>\n        </form>\n        <div class=\"priority-todo\">\n          ${item.priority}\n        </div>\n      </div>\n      <div class=\"remainder-content\" style=\"display: none;\">\n        <p>${item.description}</p>\n        <div>\n          <time datetime=\"${item.dueDate}\">${item.dueDate}</time>\n        </div>\n        <button class=\"delete\" onClick=\"deleteTodo(${index},${indexParent})\">\n          delete\n        </button>\n        <button class=\"edit\" onClick=\"showEditTodo(${index},${indexParent})\">\n          edit\n        </button>\n      </div>\n    </div>\n\n    `;\n  }\n\n\n  return {\n    todoItem,\n    projectItem,\n    todoInput,\n    todoSaveBtn\n  };\n\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/layouts.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nconst local = (function() {\n  const storageName = 'projects';\n  function saveArr(arr) {\n    window.localStorage.setItem(storageName, JSON.stringify(arr));\n  }\n\n  function retrieveArr() {\n    let arr = [];\n    if (window.localStorage.getItem(storageName) !== null) {\n      arr = JSON.parse(window.localStorage.getItem(storageName));\n    }\n    return arr;\n  }\n\n  return  {\n    retrieveArr,\n    saveArr\n  };\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (local);\n\n\n//# sourceURL=webpack:///./src/localStorage.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n\n  This is a Publish Subscribe Implementation made by Addy Osmani: https://twitter.com/addyosmani\n  You can find it at:\n  https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript\n\n*/\n\nvar pubsub = {};\n \n(function(myObject) {\n \n    // Storage for topics that can be broadcast\n    // or listened to\n    var topics = {};\n \n    // A topic identifier\n    var subUid = -1;\n \n    // Publish or broadcast events of interest\n    // with a specific topic name and arguments\n    // such as the data to pass along\n    myObject.publish = function( topic, args ) {\n \n        if ( !topics[topic] ) {\n            return false;\n        }\n \n        var subscribers = topics[topic],\n            len = subscribers ? subscribers.length : 0;\n \n        while (len--) {\n            subscribers[len].func( topic, args );\n        }\n \n        return this;\n    };\n \n    // Subscribe to events of interest\n    // with a specific topic name and a\n    // callback function, to be executed\n    // when the topic/event is observed\n    myObject.subscribe = function( topic, func ) {\n \n        if (!topics[topic]) {\n            topics[topic] = [];\n        }\n \n        var token = ( ++subUid ).toString();\n        topics[topic].push({\n            token: token,\n            func: func\n        });\n        return token;\n    };\n \n    // Unsubscribe from a specific\n    // topic, based on a tokenized reference\n    // to the subscription\n    myObject.unsubscribe = function( token ) {\n        for ( var m in topics ) {\n            if ( topics[m] ) {\n                for ( var i = 0, j = topics[m].length; i < j; i++ ) {\n                    if ( topics[m][i].token === token ) {\n                        topics[m].splice( i, 1 );\n                        return token;\n                    }\n                }\n            }\n        }\n        return this;\n    };\n}( pubsub ));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pubsub);\n\n//# sourceURL=webpack:///./src/pubsub.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: projectFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectFactory\", function() { return projectFactory; });\n\nconst projectFactory = (name) => {\n  const todos = [];\n\n  const addTodo = function addTodo(title, dueDate, description = '', priority = 0) {\n    return this.todos.push(todoFactory(title, dueDate, description, priority)) - 1;\n  };\n\n  return {\n    name,\n    todos,\n    addTodo\n  }\n};\n\nconst todoFactory = (title, dueDate, description = '', priority = 0) => {\n  const checked = false;\n  const notes = [];\n  return {\n    title,\n    description,\n    dueDate,\n    priority,\n    notes,\n    checked\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });