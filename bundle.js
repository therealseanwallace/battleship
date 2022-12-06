/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/styles.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/styles.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.placement-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 400px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid grey;\n  position: relative;\n  overflow: visible;\n}\n\n.ships-container {\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  margin-top: 62px;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.hit-occupied {\n  background-color: green;\n}\n\n.hit-empty {\n  background-color: red;\n}\n/*.cpu-grid-square:first-of-type {\n  margin-top: 50px;\n}*/\n\n/*.start-game {\n  display: none;\n}*/", "",{"version":3,"sources":["webpack://./src/modules/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;AACA;;EAEE;;AAEF;;EAEE","sourcesContent":["/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.placement-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 400px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid grey;\n  position: relative;\n  overflow: visible;\n}\n\n.ships-container {\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  margin-top: 62px;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.hit-occupied {\n  background-color: green;\n}\n\n.hit-empty {\n  background-color: red;\n}\n/*.cpu-grid-square:first-of-type {\n  margin-top: 50px;\n}*/\n\n/*.start-game {\n  display: none;\n}*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/styles.css":
/*!********************************!*\
  !*** ./src/modules/styles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/GameBoardFactory.js":
/*!*****************************************!*\
  !*** ./src/modules/GameBoardFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoardFactory": () => (/* binding */ GameBoardFactory),
/* harmony export */   "buildBoard": () => (/* binding */ buildBoard),
/* harmony export */   "checkFleetSunk": () => (/* binding */ checkFleetSunk),
/* harmony export */   "checkForOccupants": () => (/* binding */ checkForOccupants),
/* harmony export */   "getShip": () => (/* binding */ getShip),
/* harmony export */   "placeShipOnBoard": () => (/* binding */ placeShipOnBoard),
/* harmony export */   "receiveAttack": () => (/* binding */ receiveAttack),
/* harmony export */   "rotateShipinStorage": () => (/* binding */ rotateShipinStorage)
/* harmony export */ });
/* harmony import */ var _ShipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipFactory */ "./src/modules/ShipFactory.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");
/* eslint-disable no-param-reassign */



const buildBoard = () => {
  // build a 2d array representing a 10x10 game board
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    const x = i;
    const xArray = [];
    for (let index = 0; index < 10; index += 1) {
      const y = index;
      const sq = new Square(x, y);
      xArray.push(sq);
    }
    array.push(xArray);
  }
  return array;
};

function placeShipOnBoard(x, y, horizVert, shipType) {
  console.log("placeShipOnBoard! args are ", x, y, horizVert, shipType);
  console.log("placeShipOnBoard! this is ", this);
  // make a new ship according to shipType
  const newShip = _ShipFactory__WEBPACK_IMPORTED_MODULE_0__.ShipFactory.ShipFactory(shipType);
  console.log("newShip is ", newShip);

  newShip.orientation = horizVert;
  const newShipLength = newShip.length;

  // the following if statements check that this is a legal ship placement
  if (horizVert === 0) {
    if (x + newShipLength > 9) {
      return "Error! Can't place ship out of bounds!";
    }
  } else if (y + newShipLength > 9) {
    return "Error! Can't place ship out of bounds!";
  }
  if (this.checkForOccupants(x, y, horizVert, newShipLength)) {
    return "Error! Can't place a ship on top of another ship!";
  }

  this.shipArray.push(newShip);

  const result = [];

  // loop through newShipLength squares in
  // the direction indicated by horizVert, modifying their occupant
  // attributes according to newShip's ID

  for (let i = 0; i < newShipLength; i++) {
    if (newShip.orientation === 0) {
      // i.e. if this ship is placed horizontally
      this.board[x + i][y].placeShipOnSquare(newShip.shipID);
      if (this.board[x + i][y].occupant === newShip.shipID) {
        result.push([x + i, y]);
      }
    } else {
      // the ship is placed vertically
      this.board[x][y + i].placeShipOnSquare(newShip.shipID);
      if (this.board[x][y + i].occupant === newShip.shipID) {
        result.push([x, y + i]);
      }
    }
  }
  return result;
}

function checkFleetSunk() {
  // Loops through this.shipArray, checking each ships .sunk property. If
  // any unsunk ship is found, returns false - otherwise, returns true.
  const array = this.shipArray;
  for (let i = 0; i < array.length; i += 1) {
    const ship = array[i];
    if (!ship.sunk) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line consistent-return
function getShip(ID) {
  // Loops through this.shipArray, checking for and returning the
  // object with the corresponding ID.
  const array = this.shipArray;
  for (let i = 0; i < array.length; i += 1) {
    const ship = array[i];
    if (ship.shipID === ID) {
      return ship;
    }
  }
}

function rotateShip(x, y) {
  console.log("rotateShip! args are ", x, y);
  const result = this.rotateShipinStorage(x, y);
  console.log("result is, ", result);
  return result;
}

function receiveAttack(x, y) {
  // we look up the given square. if there is an occupant, we get the ship's
  // object using getShip() and call its hit() method
  if (this.board[x][y].hit === true) {
    return false;
  }
  if (this.board[x][y].occupant !== null) {
    const ship = this.getShip(this.board[x][y].occupant);
    this.board[x][y].hit = true;
    if (this.checkFleetSunk() === true) {
      return true;
    }
    return [[x,y], true];
  }
  this.board[x][y].hit = true;
  return [[x, y], false];
}

function checkForOccupants(x, y, horizVert, length) {
  if (horizVert === 0) {
    for (let i = 0; i < length; i++) {
      const element = this.board[x + i][y];
      if (element.occupant !== null) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < length; i++) {
      const element = this.board[x][y + i];
      if (element.occupant !== null) {
        return true;
      }
    }
  }
  return false;
}

function rotateShipinStorage(x, y) {
  // find the ship at the given coordinates
  console.log("this is, ", this);
  console.log("this.board is, ", this.board);
  console.log("this.board[x][y].occupant is ", this.board[x][y].occupant);
  const shipID = this.board[x][y].occupant;
  const ship = this.getShip(this.board[x][y].occupant);
  console.log("ship is, ", ship);
  // if the ship is horizontal, rotate it to vertical
  const result = [];
  if (ship.orientation === 0) {
    ship.orientation = 1;
    result.push([x, y]);
    for (let i = 1; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      xElement.occupant = null;
      const yElement = this.board[x][y - i];
      yElement.occupant = shipID;
      result.push([x, y + i]);
    }
  } else {
    // otherwise, rotate it to horizontal
    ship.orientation = 0;
    for (let i = 1; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      xElement.occupant = shipID;
      const yElement = this.board[x][y - i];
      yElement.occupant = null;
      result.push([x + i, y]);
    }
  }
  return result;
}



class Board {
  constructor() {
    this.board = buildBoard();
    this.shipArray = [];
    this.placeShipOnBoard = placeShipOnBoard;
    this.checkForOccupants = checkForOccupants;
    this.receiveAttack = receiveAttack;
    this.getShip = getShip;
    this.checkFleetSunk = checkFleetSunk;
    this.rotateShipinStorage = rotateShipinStorage;
    this.rotateShip = rotateShip;
  }
}

class Square {
  constructor(x, y) {
    x = x || 0; // converts falsey values to 0 (in this case, NaN)
    this.xy = [x, y];
    this.occupant = null;
    this.hit = false;
  }

  placeShipOnSquare(shipID) {
    this.occupant = shipID;
  }
}

const GameBoardFactory = () => {
  const gameBoard = new Board();
  return { gameBoard };
};




/***/ }),

/***/ "./src/modules/ShipFactory.js":
/*!************************************!*\
  !*** ./src/modules/ShipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipFactory": () => (/* binding */ ShipFactory)
/* harmony export */ });
/* eslint-disable no-shadow */
const ShipFactory = (() => {
  let shipCounter = -1;
  const ShipFactory = (shipType) => {
    console.log('shipFactory! shipType is ', shipType);
    shipCounter += 1;
    const shipID = shipCounter;
    let type;
    let length;
    let hp;
    let sunk = false;
    switch (shipType) {
      /*case 1:
        type = "Sink test";
        length = 6;
        hp = 1;
        break;*/

      case 2:
        console.log('is frigate');
        type = "Frigate";
        length = 2;
        hp = 2;
        break;

      case 3:
        console.log('is Destroyer');
        type = "Destroyer";
        length = 3;
        hp = 3;
        break;

      case 4:
        console.log('is Cruiser');
        type = "Cruiser";
        length = 4;
        hp = 4;
        break;

      default:
        console.log('is Battleship');
        type = "Battleship";
        length = 6;
        hp = 6;
        break;
    }
    return {
      type,
      length,
      hp,
      sunk,
      shipID,
      checkSunk() {
        return sunk;
      },
      hit() {
        hp -= 1;
        if (hp === 0) {
          sunk = true;
        }
        return [true, hp, this.checkSunk()];
      },
    };
  };
  return { ShipFactory };
})();


/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controller": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/modules/playerFactory.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");



const controller = (() => {
  const { human, cpu } = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)();

  /*const attack = (x, y, player) => {
    if (player === 1) {
      return human.board.gameBoard.receiveAttack(x, y);
    }
    return cpu.board.gameBoard.receiveAttack(x, y);
  };*/

  const gameFlow = (isFirstTurn) => {
    if (isFirstTurn) {
      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.flipCoin)() === 0) {
        console.log('human goes first');
        return 1;
      }
      console.log('cpu goes first');
      const cpuAttackResult = cpu.attack();
      console.log('cpu attack result is', cpuAttackResult);
      return cpuAttackResult;
    }    
      
  }

  return { gameFlow, human, cpu };
})();


/***/ }),

/***/ "./src/modules/displayObjects.js":
/*!***************************************!*\
  !*** ./src/modules/displayObjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cpu": () => (/* binding */ cpu),
/* harmony export */   "displayObjects": () => (/* binding */ displayObjects),
/* harmony export */   "shipPlacement": () => (/* binding */ shipPlacement),
/* harmony export */   "ships": () => (/* binding */ ships)
/* harmony export */ });
const displayObjects = [
  {
    name: "main",
    nodeType: "main",
    parent: "body",
  },
  {
    name: "contentContainer",
    nodeType: "div",
    parent: "main",
    class1: "content",
  },
  {
    name: "mainTitle",
    nodeType: "h1",
    parent: ".content",
    class1: "title",
    text: "BATTLESHIP",
  },
  {
    name: "startGame",
    nodeType: "input",
    parent: ".content",
    class1: "start-button",
    inputType: "button",
    value: "Click to start",
  },
]

const shipPlacement = [
  {
    name: "placementTitle",
    nodeType: "h1",
    parent: ".content",
    class1: "placement-title",
    text: "Place your ships",
  },
  {
    name: "placementContainer",
    nodeType: "div",
    parent: ".content", 
    class1: "placement-container",
  },
  {
    name: "placementGrid",
    nodeType: "div",
    parent: ".placement-container",
    class1: "placement-grid",
  },
  {
    name: "shipsContainer",
    nodeType: "div",
    parent: ".placement-container",
    class1: "ships-container",
  },
  {
    name: "startGame",
    nodeType: "input",
    parent: ".placement-container",
    class1: "start-game",
    inputType: "button",
    value: "Start Game",
  },
  {
    name: "placementGridSquare",
    nodeType: "div",
    parent: ".placement-grid",
    class1: "placement-grid-square",
  }
]

const ships = [
  {
    name: "Battleship",
    nodeType: "div",
    parent: ".ships-container",
    class1: "ship-placement",
    class2: "battleship-placement",
  },
  {
    name: "Cruiser",
    nodeType: "div",
    parent: ".ships-container",
    class1: "ship-placement",
    class2: "cruiser-placement",
  },
  {
    name: "Destroyer",
    nodeType: "div",
    parent: ".ships-container",
    class1: "ship-placement",
    class2: "destroyer-placement",
  },
  {
    name: "Frigate",
    nodeType: "div",
    parent: ".ships-container",
    class1: "ship-placement",
    class2: "frigate-placement",
  },
]

const cpu = [
  {
    name: "cpuBoard",
    nodeType: "div",
    parent: ".placement-container",
    class1: "cpu-board",
  }
]

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flipCoin": () => (/* binding */ flipCoin)
/* harmony export */ });
const flipCoin = () => {
  const coin = Math.floor(Math.random() * 2);
  return coin;
}

/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allowDrop": () => (/* binding */ allowDrop),
/* harmony export */   "buildInterface": () => (/* binding */ buildInterface)
/* harmony export */ });
/* harmony import */ var _displayObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayObjects */ "./src/modules/displayObjects.js");
/* harmony import */ var _resources_Cruiser_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/Cruiser.png */ "./src/resources/Cruiser.png");
/* harmony import */ var _resources_Battleship_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/Battleship.png */ "./src/resources/Battleship.png");
/* harmony import */ var _resources_Destroyer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/Destroyer.png */ "./src/resources/Destroyer.png");
/* harmony import */ var _resources_Frigate_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/Frigate.png */ "./src/resources/Frigate.png");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller */ "./src/modules/controller.js");






// builds the ship placement screen

const componentFactory = (element) => {
  const {
    name,
    nodeType,
    parent,
    text,
    inputType,
    value,
    class1,
    class2,
    class3,
    taskID,
    placeholder,
    id,
    xy,
  } = element;
  const createDOMNode = () => {
    const parentNode = document.querySelector(parent);
    const newDOMNode = document.createElement(nodeType);
    if (text) {
      newDOMNode.innerHTML = text;
    }
    if (inputType) {
      newDOMNode.type = inputType;
    }
    if (value) {
      newDOMNode.value = value;
    }
    if (class1) {
      newDOMNode.classList.add(class1);
    }
    if (class2) {
      newDOMNode.classList.add(class2);
    }
    if (class3) {
      newDOMNode.classList.add(class3);
    }
    if (placeholder) {
      newDOMNode.placeholder = placeholder;
    }
    if (text) {
      newDOMNode.textContent = text;
    }
    if (id) {
      console.log("element has id! id = ", id);
      newDOMNode.id = id;
    }

    if (xy) {
      newDOMNode.dataset.x = xy[0];
      newDOMNode.dataset.y = xy[1];
      newDOMNode.dataset.sqnum = xy[2];
      newDOMNode.dataset.player = xy[3];
    }
    parentNode.append(newDOMNode);
  };
  createDOMNode();

  return {
    name,
    nodeType,
    parent,
    text,
    inputType,
    value,
    class1,
    class2,
    taskID,
  };
};

const buildGrid = (player) => {
  let sqNum = 0;
  let humanSqNum = 0;
  let cpuSqNum = 0;
  for (let i = 9; i > -1; i--) {
    for (let j = 0; j < 10; j++) {
      const newSquare = _displayObjects__WEBPACK_IMPORTED_MODULE_0__.shipPlacement[_displayObjects__WEBPACK_IMPORTED_MODULE_0__.shipPlacement.length - 1];
      newSquare.xy = [j, i, sqNum, player];
      sqNum += 1;
      if (player === 1) {
        newSquare.class2 = "player-grid-square";
        newSquare.class3 = `player-grid-square-${j}-${i}`;
        humanSqNum += 1;
      } else {
        newSquare.class2 = "cpu-grid-square";
        newSquare.parent = ".cpu-board";
        newSquare.class3 = `cpu-grid-square-${j}-${i}`;
        cpuSqNum += 1;
      }
      componentFactory(newSquare);
    }
  }
};

const buildShips = () => {
  for (let i = 0; i < 4; i += 1) {
    const element = _displayObjects__WEBPACK_IMPORTED_MODULE_0__.ships[i];

    componentFactory(element);
    switch (element.name) {
      case "Battleship":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${_resources_Battleship_png__WEBPACK_IMPORTED_MODULE_2__} alt=${element.name} draggable="true" class="draggable" id="Battleship" data-length="6" data-orientation="0">`;
        break;

      case "Cruiser":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${_resources_Cruiser_png__WEBPACK_IMPORTED_MODULE_1__} alt=${element.name} draggable="true" class="draggable" id="Cruiser"  data-length="4" data-orientation="0">`;
        break;

      case "Destroyer":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${_resources_Destroyer_png__WEBPACK_IMPORTED_MODULE_3__} alt=${element.name} draggable="true" class="draggable" id="Destroyer"  data-length="3" data-orientation="0">`;
        break;

      default:
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${_resources_Frigate_png__WEBPACK_IMPORTED_MODULE_4__} alt=${element.name} draggable="true" class="draggable" id="Frigate"  data-length="2" data-orientation="0">`;
        break;
    }
  }
};

let dragStorage = [];
let placedShipsCount = 0;

const rotateShipinStorage = (x, y) => {
  _controller__WEBPACK_IMPORTED_MODULE_5__.controller.rotateShipinStorage();
};

const rotateShip = (e) => {
  console.log("rotateShip! e.target is", e.target);
  console.log("rotateShip! controller.human.board.gameBoard is", _controller__WEBPACK_IMPORTED_MODULE_5__.controller.human.board.gameBoard);
  const ship = e.target;
  console.log("rotateShip! ship is", ship);
  const parent = ship.parentNode;
  const parentX = Number(parent.dataset.x);
  const parentY = Number(parent.dataset.y);
  switch (Number(e.target.dataset.length)) {
    case 6:
      if (ship.dataset.orientation === "0") {
        ship.dataset.orientation = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("battleship-rotated");
      } else {
        ship.dataset.orientation = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("battleship-rotated");
      }
      _controller__WEBPACK_IMPORTED_MODULE_5__.controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    case 4:
      if (ship.dataset.orientation === "0") {
        ship.dataset.orientation = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("cruiser-rotated");
      } else {
        ship.dataset.orientation = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("cruiser-rotated");
      }
      _controller__WEBPACK_IMPORTED_MODULE_5__.controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    case 3:
      if (ship.dataset.orientation === "0") {
        ship.dataset.orientation = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("destroyer-rotated");
      } else {
        ship.dataset.orientation = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("destroyer-rotated");
      }
      _controller__WEBPACK_IMPORTED_MODULE_5__.controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    default:
      if (ship.dataset.orientation === "0") {
        ship.dataset.orientation = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("frigate-rotated");
      } else {
        ship.dataset.orientation = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("frigate-rotated");
      }
      _controller__WEBPACK_IMPORTED_MODULE_5__.controller.human.board.gameBoard.rotateShip(parentX, parentY);
  }
};

const drag = (e) => {
  dragStorage = e.target;
  console.log("drag! ev.target = ", e.target);
  e.dataTransfer.setData("img", e.target.id);
  console.log("dragStorage is", dragStorage);
};

const cpuAttack = () => { 
  let successfulAttack = false;
  while (!successfulAttack) { 
    const attack = _controller__WEBPACK_IMPORTED_MODULE_5__.controller.cpu.attack();
    if (attack) {
      successfulAttack = true;
      addAttackListeners();
    }
  }
}

const removeAttackListeners = () => { 
  const squares = document.querySelectorAll(".cpu-grid-square");
  squares.forEach((square) => {
    square.removeEventListener("click", attack);
  });
 }

 const attack = (e) => { 
  console.log("e.target is", e.target);
      const x = Number(e.target.dataset.x);
      const y = Number(e.target.dataset.y);
      console.log("x is", x);
      console.log("y is", y);
      const humanAttackResult = _controller__WEBPACK_IMPORTED_MODULE_5__.controller.human.attack(x, y);
      if (humanAttackResult) { 
        removeAttackListeners();
      }
      console.log("humanAttackResult is", humanAttackResult);
}


const addAttackListeners = () => { 
  console.log("addAttackListeners!)")
  const gridSquares = document.querySelectorAll(".cpu-grid-square");
  gridSquares.forEach((square) => {
    square.addEventListener("click", attack);
  });
}

const markSquareHit = (x, y, isOccupied, isCPU) => {
  let square;
  if (isCPU) { 
    square = document.querySelector(`.player-grid-square-${x}-${y}`);
    console.log("square is", square);
    if (isOccupied) { 
      square.classList.add("hit-occupied");
    } else { 
      square.classList.add("hit-empty");
    }
   } else {
    square = document.querySelector(`.cpu-grid-square-${x}-${y}`);
    console.log("square is", square);
    if (isOccupied) { 
      square.classList.add("hit-occupied");
    } else {
      square.classList.add("hit-empty");
    }
   }
   console.log('square is', square);
}

const buildMainGame = () => { 
  const startGameButton = document.querySelector('.start-game');
  startGameButton.style.display = 'none';
  componentFactory(_displayObjects__WEBPACK_IMPORTED_MODULE_0__.cpu[0]);
  buildGrid(2);
  const beginGame = _controller__WEBPACK_IMPORTED_MODULE_5__.controller.gameFlow(true);
  console.log("beginGame is", beginGame);
  if (beginGame !== 1) { 
    markSquareHit(beginGame[0][0], beginGame[0][1], beginGame[1], true);
  }

  addAttackListeners();
}

const drop = (e) => {
  console.log("drop! ev.target = ", e.target);
  console.log("controller is", _controller__WEBPACK_IMPORTED_MODULE_5__.controller);
  e.preventDefault();
  const data = e.dataTransfer.getData("img");
  console.log("data is", data);
  e.target.appendChild(document.getElementById(data));
  console.log(
    "drop! about to place ship. args are ",
    e.target.dataset.x,
    e.target.dataset.y,
    0
  );
  console.log(
    "placing ship! result is",
    _controller__WEBPACK_IMPORTED_MODULE_5__.controller.human.board.gameBoard.placeShipOnBoard(
      Number(e.target.dataset.x),
      Number(e.target.dataset.y),
      Number(dragStorage.dataset.orientation),
      Number(dragStorage.dataset.length)
    )
  );
  placedShipsCount += 1;
  console.log('placedShipsCount is', placedShipsCount);
  if (placedShipsCount === 4) {
    const startGame = document.querySelector('.start-game');
    startGame.style.display = "block";
    startGame.addEventListener('click', buildMainGame);
    document.querySelector(".ships-container").style.display = "none";
  }
  console.log("dragStorage.id is", dragStorage.id);
  document
    .querySelector(`#${dragStorage.id}`)
    .addEventListener("click", rotateShip);
};

const addDragListeners = () => {
  console.log("addDragListeners!");
  const draggables = document.querySelectorAll(".draggable");
  console.log("draggables = ", draggables);
  for (let i = 0; i < draggables.length; i++) {
    const element = draggables[i];
    console.log("element is: ", element);
    element.addEventListener("dragstart", drag);
  }
  const squares = document.querySelectorAll(".placement-grid-square");
  console.log("squares = ", squares);
  for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.addEventListener("drop", drop);
    element.addEventListener("dragover", allowDrop);
  }
};

const buildShipPlacement = () => {
  document.querySelector(".content").innerHTML = "";
  for (let i = 0; i < _displayObjects__WEBPACK_IMPORTED_MODULE_0__.shipPlacement.length - 1; i += 1) {
    const element = _displayObjects__WEBPACK_IMPORTED_MODULE_0__.shipPlacement[i];
    componentFactory(element);
  }
  buildGrid(1);
  buildShips();
  addDragListeners();
};

// gets the DOM nodes' info for the first screen from displayObjects
// and draws them

const allowDrop = (e) => {
  e.preventDefault();
};

const buildInterface = () => {
  _displayObjects__WEBPACK_IMPORTED_MODULE_0__.displayObjects.forEach((element) => {
    componentFactory(element);
  });
  document
    .querySelector(".start-button")
    .addEventListener("click", buildShipPlacement);
};


/***/ }),

/***/ "./src/modules/playerFactory.js":
/*!**************************************!*\
  !*** ./src/modules/playerFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _GameBoardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoardFactory */ "./src/modules/GameBoardFactory.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");



const playerFactory = () => {
  const innerPlayerFactory = (type) => {
    const playerType = type;
    const board = (0,_GameBoardFactory__WEBPACK_IMPORTED_MODULE_0__.GameBoardFactory)();
    return { playerType, board };
  };

  const human = innerPlayerFactory(1);
  const cpu = innerPlayerFactory(2);
  
  function randomxy() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }
  
  function populateCPUBoard() { 
    const placeBattleship = () => { 
      const x = randomxy()[0];
      const y = randomxy()[1];
      const placement = cpu.board.gameBoard.placeShipOnBoard(x, y, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.flipCoin)(), 6)
      if (typeof placement === 'object') {
        return placement;
      }
      return placeBattleship();
    }
    const placeCruiser = () => { 
      const x = randomxy()[0];
      const y = randomxy()[1];
      const placement = cpu.board.gameBoard.placeShipOnBoard(x, y, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.flipCoin)(), 4)
      if (typeof placement === 'object') {
        return placement;
      }
      return placeCruiser();  
    }
    const placeDestroyer = () => { 
      const x = randomxy()[0];
      const y = randomxy()[1];
      const placement = cpu.board.gameBoard.placeShipOnBoard(x, y, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.flipCoin)(), 3)
      if (typeof placement === 'object') {
        return placement;
      }
      return placeDestroyer();
     }
    const placeFrigate = () => { 
      const x = randomxy()[0];
      const y = randomxy()[1];
      const placement = cpu.board.gameBoard.placeShipOnBoard(x, y, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.flipCoin)(), 2)
      if (typeof placement === 'object') {
        return placement;
      }
      return placeFrigate();
     }
    placeBattleship();
    placeCruiser();
    placeDestroyer();
    placeFrigate();
  }

  cpu.board.gameBoard.populateCPUBoard = populateCPUBoard;
  cpu.board.gameBoard.populateCPUBoard();
  
  
  const cpuAttack = () => {
    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    return human.board.gameBoard.receiveAttack(x, y);
  };

  const humanAttack = (x, y) => cpu.board.gameBoard.receiveAttack(x, y);

  human.attack = humanAttack;
  cpu.attack = cpuAttack;

  return { human, cpu };
};


/***/ }),

/***/ "./src/resources/Battleship.png":
/*!**************************************!*\
  !*** ./src/resources/Battleship.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "412a9bc08b6e0da317a0.png";

/***/ }),

/***/ "./src/resources/Cruiser.png":
/*!***********************************!*\
  !*** ./src/resources/Cruiser.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc2c1bca5279ee0f25bf.png";

/***/ }),

/***/ "./src/resources/Destroyer.png":
/*!*************************************!*\
  !*** ./src/resources/Destroyer.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b25fcc98b5f3c79fd80d.png";

/***/ }),

/***/ "./src/resources/Frigate.png":
/*!***********************************!*\
  !*** ./src/resources/Frigate.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdf61743c65f1052518e.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/styles.css */ "./src/modules/styles.css");
/* harmony import */ var _modules_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interface */ "./src/modules/interface.js");
/* harmony import */ var _modules_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/controller */ "./src/modules/controller.js");




(0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.buildInterface)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0dPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkU7QUFDOUI7QUFDTTtBQUNGO0FBQ0o7QUFDTDtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Q1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUN5QjtBQUNsQjs7QUFFOUMsa0VBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlcy5jc3M/MTA4MCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogU1RZTEVTICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNjJweDtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1yb3RhdGVkIHtcXG4gIGxlZnQ6IC05OHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNydWlzZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtNTlweDtcXG4gIHRvcDogNjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0zOHB4O1xcbiAgdG9wOiA0MXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZnJpZ2F0ZS1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0xOHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0LW9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGl0LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLyouY3B1LWdyaWQtc3F1YXJlOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59Ki9cXG5cXG4vKi5zdGFydC1nYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufSovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7O0FBRWpCOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQztBQUNBOzs7OztFQUtFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUU7O0FBRUY7O0VBRUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogU1RZTEVTICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNjJweDtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1yb3RhdGVkIHtcXG4gIGxlZnQ6IC05OHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNydWlzZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtNTlweDtcXG4gIHRvcDogNjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0zOHB4O1xcbiAgdG9wOiA0MXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZnJpZ2F0ZS1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0xOHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0LW9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGl0LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLyouY3B1LWdyaWQtc3F1YXJlOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59Ki9cXG5cXG4vKi5zdGFydC1nYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufSovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgU2hpcEZhY3RvcnkgfSBmcm9tIFwiLi9TaGlwRmFjdG9yeVwiO1xuaW1wb3J0IHsgZmxpcENvaW4gfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IGJ1aWxkQm9hcmQgPSAoKSA9PiB7XG4gIC8vIGJ1aWxkIGEgMmQgYXJyYXkgcmVwcmVzZW50aW5nIGEgMTB4MTAgZ2FtZSBib2FyZFxuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gaTtcbiAgICBjb25zdCB4QXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHkgPSBpbmRleDtcbiAgICAgIGNvbnN0IHNxID0gbmV3IFNxdWFyZSh4LCB5KTtcbiAgICAgIHhBcnJheS5wdXNoKHNxKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaCh4QXJyYXkpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcE9uQm9hcmQoeCwgeSwgaG9yaXpWZXJ0LCBzaGlwVHlwZSkge1xuICBjb25zb2xlLmxvZyhcInBsYWNlU2hpcE9uQm9hcmQhIGFyZ3MgYXJlIFwiLCB4LCB5LCBob3JpelZlcnQsIHNoaXBUeXBlKTtcbiAgY29uc29sZS5sb2coXCJwbGFjZVNoaXBPbkJvYXJkISB0aGlzIGlzIFwiLCB0aGlzKTtcbiAgLy8gbWFrZSBhIG5ldyBzaGlwIGFjY29yZGluZyB0byBzaGlwVHlwZVxuICBjb25zdCBuZXdTaGlwID0gU2hpcEZhY3RvcnkuU2hpcEZhY3Rvcnkoc2hpcFR5cGUpO1xuICBjb25zb2xlLmxvZyhcIm5ld1NoaXAgaXMgXCIsIG5ld1NoaXApO1xuXG4gIG5ld1NoaXAub3JpZW50YXRpb24gPSBob3JpelZlcnQ7XG4gIGNvbnN0IG5ld1NoaXBMZW5ndGggPSBuZXdTaGlwLmxlbmd0aDtcblxuICAvLyB0aGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudHMgY2hlY2sgdGhhdCB0aGlzIGlzIGEgbGVnYWwgc2hpcCBwbGFjZW1lbnRcbiAgaWYgKGhvcml6VmVydCA9PT0gMCkge1xuICAgIGlmICh4ICsgbmV3U2hpcExlbmd0aCA+IDkpIHtcbiAgICAgIHJldHVybiBcIkVycm9yISBDYW4ndCBwbGFjZSBzaGlwIG91dCBvZiBib3VuZHMhXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHkgKyBuZXdTaGlwTGVuZ3RoID4gOSkge1xuICAgIHJldHVybiBcIkVycm9yISBDYW4ndCBwbGFjZSBzaGlwIG91dCBvZiBib3VuZHMhXCI7XG4gIH1cbiAgaWYgKHRoaXMuY2hlY2tGb3JPY2N1cGFudHMoeCwgeSwgaG9yaXpWZXJ0LCBuZXdTaGlwTGVuZ3RoKSkge1xuICAgIHJldHVybiBcIkVycm9yISBDYW4ndCBwbGFjZSBhIHNoaXAgb24gdG9wIG9mIGFub3RoZXIgc2hpcCFcIjtcbiAgfVxuXG4gIHRoaXMuc2hpcEFycmF5LnB1c2gobmV3U2hpcCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgLy8gbG9vcCB0aHJvdWdoIG5ld1NoaXBMZW5ndGggc3F1YXJlcyBpblxuICAvLyB0aGUgZGlyZWN0aW9uIGluZGljYXRlZCBieSBob3JpelZlcnQsIG1vZGlmeWluZyB0aGVpciBvY2N1cGFudFxuICAvLyBhdHRyaWJ1dGVzIGFjY29yZGluZyB0byBuZXdTaGlwJ3MgSURcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NoaXBMZW5ndGg7IGkrKykge1xuICAgIGlmIChuZXdTaGlwLm9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAvLyBpLmUuIGlmIHRoaXMgc2hpcCBpcyBwbGFjZWQgaG9yaXpvbnRhbGx5XG4gICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XS5wbGFjZVNoaXBPblNxdWFyZShuZXdTaGlwLnNoaXBJRCk7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0ub2NjdXBhbnQgPT09IG5ld1NoaXAuc2hpcElEKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGUgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseVxuICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0ucGxhY2VTaGlwT25TcXVhcmUobmV3U2hpcC5zaGlwSUQpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSArIGldLm9jY3VwYW50ID09PSBuZXdTaGlwLnNoaXBJRCkge1xuICAgICAgICByZXN1bHQucHVzaChbeCwgeSArIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tGbGVldFN1bmsoKSB7XG4gIC8vIExvb3BzIHRocm91Z2ggdGhpcy5zaGlwQXJyYXksIGNoZWNraW5nIGVhY2ggc2hpcHMgLnN1bmsgcHJvcGVydHkuIElmXG4gIC8vIGFueSB1bnN1bmsgc2hpcCBpcyBmb3VuZCwgcmV0dXJucyBmYWxzZSAtIG90aGVyd2lzZSwgcmV0dXJucyB0cnVlLlxuICBjb25zdCBhcnJheSA9IHRoaXMuc2hpcEFycmF5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcCA9IGFycmF5W2ldO1xuICAgIGlmICghc2hpcC5zdW5rKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmZ1bmN0aW9uIGdldFNoaXAoSUQpIHtcbiAgLy8gTG9vcHMgdGhyb3VnaCB0aGlzLnNoaXBBcnJheSwgY2hlY2tpbmcgZm9yIGFuZCByZXR1cm5pbmcgdGhlXG4gIC8vIG9iamVjdCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIElELlxuICBjb25zdCBhcnJheSA9IHRoaXMuc2hpcEFycmF5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcCA9IGFycmF5W2ldO1xuICAgIGlmIChzaGlwLnNoaXBJRCA9PT0gSUQpIHtcbiAgICAgIHJldHVybiBzaGlwO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwKHgsIHkpIHtcbiAgY29uc29sZS5sb2coXCJyb3RhdGVTaGlwISBhcmdzIGFyZSBcIiwgeCwgeSk7XG4gIGNvbnN0IHJlc3VsdCA9IHRoaXMucm90YXRlU2hpcGluU3RvcmFnZSh4LCB5KTtcbiAgY29uc29sZS5sb2coXCJyZXN1bHQgaXMsIFwiLCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgLy8gd2UgbG9vayB1cCB0aGUgZ2l2ZW4gc3F1YXJlLiBpZiB0aGVyZSBpcyBhbiBvY2N1cGFudCwgd2UgZ2V0IHRoZSBzaGlwJ3NcbiAgLy8gb2JqZWN0IHVzaW5nIGdldFNoaXAoKSBhbmQgY2FsbCBpdHMgaGl0KCkgbWV0aG9kXG4gIGlmICh0aGlzLmJvYXJkW3hdW3ldLmhpdCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAodGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudCk7XG4gICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNoZWNrRmxlZXRTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gW1t4LHldLCB0cnVlXTtcbiAgfVxuICB0aGlzLmJvYXJkW3hdW3ldLmhpdCA9IHRydWU7XG4gIHJldHVybiBbW3gsIHldLCBmYWxzZV07XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yT2NjdXBhbnRzKHgsIHksIGhvcml6VmVydCwgbGVuZ3RoKSB7XG4gIGlmIChob3JpelZlcnQgPT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICBpZiAoZWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSArIGldO1xuICAgICAgaWYgKGVsZW1lbnQub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcGluU3RvcmFnZSh4LCB5KSB7XG4gIC8vIGZpbmQgdGhlIHNoaXAgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcywgXCIsIHRoaXMpO1xuICBjb25zb2xlLmxvZyhcInRoaXMuYm9hcmQgaXMsIFwiLCB0aGlzLmJvYXJkKTtcbiAgY29uc29sZS5sb2coXCJ0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50IGlzIFwiLCB0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50KTtcbiAgY29uc3Qgc2hpcElEID0gdGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudDtcbiAgY29uc3Qgc2hpcCA9IHRoaXMuZ2V0U2hpcCh0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50KTtcbiAgY29uc29sZS5sb2coXCJzaGlwIGlzLCBcIiwgc2hpcCk7XG4gIC8vIGlmIHRoZSBzaGlwIGlzIGhvcml6b250YWwsIHJvdGF0ZSBpdCB0byB2ZXJ0aWNhbFxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09IDApIHtcbiAgICBzaGlwLm9yaWVudGF0aW9uID0gMTtcbiAgICByZXN1bHQucHVzaChbeCwgeV0pO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeEVsZW1lbnQgPSB0aGlzLmJvYXJkW3ggKyBpXVt5XTtcbiAgICAgIHhFbGVtZW50Lm9jY3VwYW50ID0gbnVsbDtcbiAgICAgIGNvbnN0IHlFbGVtZW50ID0gdGhpcy5ib2FyZFt4XVt5IC0gaV07XG4gICAgICB5RWxlbWVudC5vY2N1cGFudCA9IHNoaXBJRDtcbiAgICAgIHJlc3VsdC5wdXNoKFt4LCB5ICsgaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBvdGhlcndpc2UsIHJvdGF0ZSBpdCB0byBob3Jpem9udGFsXG4gICAgc2hpcC5vcmllbnRhdGlvbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4RWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgeEVsZW1lbnQub2NjdXBhbnQgPSBzaGlwSUQ7XG4gICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuICAgICAgeUVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgICAgcmVzdWx0LnB1c2goW3ggKyBpLCB5XSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuXG5jbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBidWlsZEJvYXJkKCk7XG4gICAgdGhpcy5zaGlwQXJyYXkgPSBbXTtcbiAgICB0aGlzLnBsYWNlU2hpcE9uQm9hcmQgPSBwbGFjZVNoaXBPbkJvYXJkO1xuICAgIHRoaXMuY2hlY2tGb3JPY2N1cGFudHMgPSBjaGVja0Zvck9jY3VwYW50cztcbiAgICB0aGlzLnJlY2VpdmVBdHRhY2sgPSByZWNlaXZlQXR0YWNrO1xuICAgIHRoaXMuZ2V0U2hpcCA9IGdldFNoaXA7XG4gICAgdGhpcy5jaGVja0ZsZWV0U3VuayA9IGNoZWNrRmxlZXRTdW5rO1xuICAgIHRoaXMucm90YXRlU2hpcGluU3RvcmFnZSA9IHJvdGF0ZVNoaXBpblN0b3JhZ2U7XG4gICAgdGhpcy5yb3RhdGVTaGlwID0gcm90YXRlU2hpcDtcbiAgfVxufVxuXG5jbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgeCA9IHggfHwgMDsgLy8gY29udmVydHMgZmFsc2V5IHZhbHVlcyB0byAwIChpbiB0aGlzIGNhc2UsIE5hTilcbiAgICB0aGlzLnh5ID0gW3gsIHldO1xuICAgIHRoaXMub2NjdXBhbnQgPSBudWxsO1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gIH1cblxuICBwbGFjZVNoaXBPblNxdWFyZShzaGlwSUQpIHtcbiAgICB0aGlzLm9jY3VwYW50ID0gc2hpcElEO1xuICB9XG59XG5cbmNvbnN0IEdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IG5ldyBCb2FyZCgpO1xuICByZXR1cm4geyBnYW1lQm9hcmQgfTtcbn07XG5cbmV4cG9ydCB7XG4gIGJ1aWxkQm9hcmQsXG4gIHBsYWNlU2hpcE9uQm9hcmQsXG4gIGNoZWNrRmxlZXRTdW5rLFxuICBnZXRTaGlwLFxuICByZWNlaXZlQXR0YWNrLFxuICBjaGVja0Zvck9jY3VwYW50cyxcbiAgcm90YXRlU2hpcGluU3RvcmFnZSxcbiAgR2FtZUJvYXJkRmFjdG9yeSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbmV4cG9ydCBjb25zdCBTaGlwRmFjdG9yeSA9ICgoKSA9PiB7XG4gIGxldCBzaGlwQ291bnRlciA9IC0xO1xuICBjb25zdCBTaGlwRmFjdG9yeSA9IChzaGlwVHlwZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzaGlwRmFjdG9yeSEgc2hpcFR5cGUgaXMgJywgc2hpcFR5cGUpO1xuICAgIHNoaXBDb3VudGVyICs9IDE7XG4gICAgY29uc3Qgc2hpcElEID0gc2hpcENvdW50ZXI7XG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IGxlbmd0aDtcbiAgICBsZXQgaHA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHNoaXBUeXBlKSB7XG4gICAgICAvKmNhc2UgMTpcbiAgICAgICAgdHlwZSA9IFwiU2luayB0ZXN0XCI7XG4gICAgICAgIGxlbmd0aCA9IDY7XG4gICAgICAgIGhwID0gMTtcbiAgICAgICAgYnJlYWs7Ki9cblxuICAgICAgY2FzZSAyOlxuICAgICAgICBjb25zb2xlLmxvZygnaXMgZnJpZ2F0ZScpO1xuICAgICAgICB0eXBlID0gXCJGcmlnYXRlXCI7XG4gICAgICAgIGxlbmd0aCA9IDI7XG4gICAgICAgIGhwID0gMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY29uc29sZS5sb2coJ2lzIERlc3Ryb3llcicpO1xuICAgICAgICB0eXBlID0gXCJEZXN0cm95ZXJcIjtcbiAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgaHAgPSAzO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICBjb25zb2xlLmxvZygnaXMgQ3J1aXNlcicpO1xuICAgICAgICB0eXBlID0gXCJDcnVpc2VyXCI7XG4gICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgIGhwID0gNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdpcyBCYXR0bGVzaGlwJyk7XG4gICAgICAgIHR5cGUgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgbGVuZ3RoID0gNjtcbiAgICAgICAgaHAgPSA2O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBsZW5ndGgsXG4gICAgICBocCxcbiAgICAgIHN1bmssXG4gICAgICBzaGlwSUQsXG4gICAgICBjaGVja1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgfSxcbiAgICAgIGhpdCgpIHtcbiAgICAgICAgaHAgLT0gMTtcbiAgICAgICAgaWYgKGhwID09PSAwKSB7XG4gICAgICAgICAgc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0cnVlLCBocCwgdGhpcy5jaGVja1N1bmsoKV07XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIHJldHVybiB7IFNoaXBGYWN0b3J5IH07XG59KSgpO1xuIiwiaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbmltcG9ydCB7IGZsaXBDb2luIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgY29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHsgaHVtYW4sIGNwdSB9ID0gcGxheWVyRmFjdG9yeSgpO1xuXG4gIC8qY29uc3QgYXR0YWNrID0gKHgsIHksIHBsYXllcikgPT4ge1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIHJldHVybiBodW1hbi5ib2FyZC5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG4gICAgcmV0dXJuIGNwdS5ib2FyZC5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTsqL1xuXG4gIGNvbnN0IGdhbWVGbG93ID0gKGlzRmlyc3RUdXJuKSA9PiB7XG4gICAgaWYgKGlzRmlyc3RUdXJuKSB7XG4gICAgICBpZiAoZmxpcENvaW4oKSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaHVtYW4gZ29lcyBmaXJzdCcpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdjcHUgZ29lcyBmaXJzdCcpO1xuICAgICAgY29uc3QgY3B1QXR0YWNrUmVzdWx0ID0gY3B1LmF0dGFjaygpO1xuICAgICAgY29uc29sZS5sb2coJ2NwdSBhdHRhY2sgcmVzdWx0IGlzJywgY3B1QXR0YWNrUmVzdWx0KTtcbiAgICAgIHJldHVybiBjcHVBdHRhY2tSZXN1bHQ7XG4gICAgfSAgICBcbiAgICAgIFxuICB9XG5cbiAgcmV0dXJuIHsgZ2FtZUZsb3csIGh1bWFuLCBjcHUgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgZGlzcGxheU9iamVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIm1haW5cIixcbiAgICBub2RlVHlwZTogXCJtYWluXCIsXG4gICAgcGFyZW50OiBcImJvZHlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY29udGVudENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCJtYWluXCIsXG4gICAgY2xhc3MxOiBcImNvbnRlbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibWFpblRpdGxlXCIsXG4gICAgbm9kZVR5cGU6IFwiaDFcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwidGl0bGVcIixcbiAgICB0ZXh0OiBcIkJBVFRMRVNISVBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3RhcnRHYW1lXCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwic3RhcnQtYnV0dG9uXCIsXG4gICAgaW5wdXRUeXBlOiBcImJ1dHRvblwiLFxuICAgIHZhbHVlOiBcIkNsaWNrIHRvIHN0YXJ0XCIsXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBzaGlwUGxhY2VtZW50ID0gW1xuICB7XG4gICAgbmFtZTogXCJwbGFjZW1lbnRUaXRsZVwiLFxuICAgIG5vZGVUeXBlOiBcImgxXCIsXG4gICAgcGFyZW50OiBcIi5jb250ZW50XCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC10aXRsZVwiLFxuICAgIHRleHQ6IFwiUGxhY2UgeW91ciBzaGlwc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJwbGFjZW1lbnRDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIiwgXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicGxhY2VtZW50R3JpZFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJwbGFjZW1lbnQtZ3JpZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzaGlwc0NvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwcy1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3RhcnRHYW1lXCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3RhcnQtZ2FtZVwiLFxuICAgIGlucHV0VHlwZTogXCJidXR0b25cIixcbiAgICB2YWx1ZTogXCJTdGFydCBHYW1lXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInBsYWNlbWVudEdyaWRTcXVhcmVcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1ncmlkXCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1ncmlkLXNxdWFyZVwiLFxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBzaGlwcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQmF0dGxlc2hpcFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuc2hpcHMtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInNoaXAtcGxhY2VtZW50XCIsXG4gICAgY2xhc3MyOiBcImJhdHRsZXNoaXAtcGxhY2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNydWlzZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJjcnVpc2VyLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZXN0cm95ZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJkZXN0cm95ZXItcGxhY2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZyaWdhdGVcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJmcmlnYXRlLXBsYWNlbWVudFwiLFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgY3B1ID0gW1xuICB7XG4gICAgbmFtZTogXCJjcHVCb2FyZFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcHUtYm9hcmRcIixcbiAgfVxuXSIsImV4cG9ydCBjb25zdCBmbGlwQ29pbiA9ICgpID0+IHtcbiAgY29uc3QgY29pbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICByZXR1cm4gY29pbjtcbn0iLCJpbXBvcnQgeyBkaXNwbGF5T2JqZWN0cywgc2hpcFBsYWNlbWVudCwgc2hpcHMsIGNwdSB9IGZyb20gXCIuL2Rpc3BsYXlPYmplY3RzXCI7XG5pbXBvcnQgQ3J1aXNlciBmcm9tIFwiLi4vcmVzb3VyY2VzL0NydWlzZXIucG5nXCI7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tIFwiLi4vcmVzb3VyY2VzL0JhdHRsZXNoaXAucG5nXCI7XG5pbXBvcnQgRGVzdHJveWVyIGZyb20gXCIuLi9yZXNvdXJjZXMvRGVzdHJveWVyLnBuZ1wiO1xuaW1wb3J0IEZyaWdhdGUgZnJvbSBcIi4uL3Jlc291cmNlcy9GcmlnYXRlLnBuZ1wiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbi8vIGJ1aWxkcyB0aGUgc2hpcCBwbGFjZW1lbnQgc2NyZWVuXG5cbmNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBub2RlVHlwZSxcbiAgICBwYXJlbnQsXG4gICAgdGV4dCxcbiAgICBpbnB1dFR5cGUsXG4gICAgdmFsdWUsXG4gICAgY2xhc3MxLFxuICAgIGNsYXNzMixcbiAgICBjbGFzczMsXG4gICAgdGFza0lELFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlkLFxuICAgIHh5LFxuICB9ID0gZWxlbWVudDtcbiAgY29uc3QgY3JlYXRlRE9NTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuICAgIGNvbnN0IG5ld0RPTU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RE9NTm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaW5wdXRUeXBlKSB7XG4gICAgICBuZXdET01Ob2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RE9NTm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2xhc3MxKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MxKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMikge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgfVxuICAgIGlmIChjbGFzczMpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczMpO1xuICAgIH1cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIG5ld0RPTU5vZGUucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIG5ld0RPTU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudCBoYXMgaWQhIGlkID0gXCIsIGlkKTtcbiAgICAgIG5ld0RPTU5vZGUuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBpZiAoeHkpIHtcbiAgICAgIG5ld0RPTU5vZGUuZGF0YXNldC54ID0geHlbMF07XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQueSA9IHh5WzFdO1xuICAgICAgbmV3RE9NTm9kZS5kYXRhc2V0LnNxbnVtID0geHlbMl07XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQucGxheWVyID0geHlbM107XG4gICAgfVxuICAgIHBhcmVudE5vZGUuYXBwZW5kKG5ld0RPTU5vZGUpO1xuICB9O1xuICBjcmVhdGVET01Ob2RlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIG5vZGVUeXBlLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0LFxuICAgIGlucHV0VHlwZSxcbiAgICB2YWx1ZSxcbiAgICBjbGFzczEsXG4gICAgY2xhc3MyLFxuICAgIHRhc2tJRCxcbiAgfTtcbn07XG5cbmNvbnN0IGJ1aWxkR3JpZCA9IChwbGF5ZXIpID0+IHtcbiAgbGV0IHNxTnVtID0gMDtcbiAgbGV0IGh1bWFuU3FOdW0gPSAwO1xuICBsZXQgY3B1U3FOdW0gPSAwO1xuICBmb3IgKGxldCBpID0gOTsgaSA+IC0xOyBpLS0pIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IHNoaXBQbGFjZW1lbnRbc2hpcFBsYWNlbWVudC5sZW5ndGggLSAxXTtcbiAgICAgIG5ld1NxdWFyZS54eSA9IFtqLCBpLCBzcU51bSwgcGxheWVyXTtcbiAgICAgIHNxTnVtICs9IDE7XG4gICAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzczIgPSBcInBsYXllci1ncmlkLXNxdWFyZVwiO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MzID0gYHBsYXllci1ncmlkLXNxdWFyZS0ke2p9LSR7aX1gO1xuICAgICAgICBodW1hblNxTnVtICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MyID0gXCJjcHUtZ3JpZC1zcXVhcmVcIjtcbiAgICAgICAgbmV3U3F1YXJlLnBhcmVudCA9IFwiLmNwdS1ib2FyZFwiO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MzID0gYGNwdS1ncmlkLXNxdWFyZS0ke2p9LSR7aX1gO1xuICAgICAgICBjcHVTcU51bSArPSAxO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50RmFjdG9yeShuZXdTcXVhcmUpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgYnVpbGRTaGlwcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gc2hpcHNbaV07XG5cbiAgICBjb21wb25lbnRGYWN0b3J5KGVsZW1lbnQpO1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICBjYXNlIFwiQmF0dGxlc2hpcFwiOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMn1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7QmF0dGxlc2hpcH0gYWx0PSR7ZWxlbWVudC5uYW1lfSBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3M9XCJkcmFnZ2FibGVcIiBpZD1cIkJhdHRsZXNoaXBcIiBkYXRhLWxlbmd0aD1cIjZcIiBkYXRhLW9yaWVudGF0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiQ3J1aXNlclwiOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMn1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7Q3J1aXNlcn0gYWx0PSR7ZWxlbWVudC5uYW1lfSBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3M9XCJkcmFnZ2FibGVcIiBpZD1cIkNydWlzZXJcIiAgZGF0YS1sZW5ndGg9XCI0XCIgZGF0YS1vcmllbnRhdGlvbj1cIjBcIj5gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkRlc3Ryb3llclwiOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMn1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7RGVzdHJveWVyfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiRGVzdHJveWVyXCIgIGRhdGEtbGVuZ3RoPVwiM1wiIGRhdGEtb3JpZW50YXRpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MyfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtGcmlnYXRlfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiRnJpZ2F0ZVwiICBkYXRhLWxlbmd0aD1cIjJcIiBkYXRhLW9yaWVudGF0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxubGV0IGRyYWdTdG9yYWdlID0gW107XG5sZXQgcGxhY2VkU2hpcHNDb3VudCA9IDA7XG5cbmNvbnN0IHJvdGF0ZVNoaXBpblN0b3JhZ2UgPSAoeCwgeSkgPT4ge1xuICBjb250cm9sbGVyLnJvdGF0ZVNoaXBpblN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHJvdGF0ZVNoaXAgPSAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcInJvdGF0ZVNoaXAhIGUudGFyZ2V0IGlzXCIsIGUudGFyZ2V0KTtcbiAgY29uc29sZS5sb2coXCJyb3RhdGVTaGlwISBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZCBpc1wiLCBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZCk7XG4gIGNvbnN0IHNoaXAgPSBlLnRhcmdldDtcbiAgY29uc29sZS5sb2coXCJyb3RhdGVTaGlwISBzaGlwIGlzXCIsIHNoaXApO1xuICBjb25zdCBwYXJlbnQgPSBzaGlwLnBhcmVudE5vZGU7XG4gIGNvbnN0IHBhcmVudFggPSBOdW1iZXIocGFyZW50LmRhdGFzZXQueCk7XG4gIGNvbnN0IHBhcmVudFkgPSBOdW1iZXIocGFyZW50LmRhdGFzZXQueSk7XG4gIHN3aXRjaCAoTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKSkge1xuICAgIGNhc2UgNjpcbiAgICAgIGlmIChzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9IFwiMVwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcIjBcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJiYXR0bGVzaGlwLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5yb3RhdGVTaGlwKHBhcmVudFgsIHBhcmVudFkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDQ6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSBcIjBcIikge1xuICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiY3J1aXNlci1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiY3J1aXNlci1yb3RhdGVkXCIpO1xuICAgICAgfVxuICAgICAgY29udHJvbGxlci5odW1hbi5ib2FyZC5nYW1lQm9hcmQucm90YXRlU2hpcChwYXJlbnRYLCBwYXJlbnRZKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCIxXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llci1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzdHJveWVyLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5yb3RhdGVTaGlwKHBhcmVudFgsIHBhcmVudFkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCIxXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImZyaWdhdGUtcm90YXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImZyaWdhdGUtcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xsZXIuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnJvdGF0ZVNoaXAocGFyZW50WCwgcGFyZW50WSk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYWcgPSAoZSkgPT4ge1xuICBkcmFnU3RvcmFnZSA9IGUudGFyZ2V0O1xuICBjb25zb2xlLmxvZyhcImRyYWchIGV2LnRhcmdldCA9IFwiLCBlLnRhcmdldCk7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpbWdcIiwgZS50YXJnZXQuaWQpO1xuICBjb25zb2xlLmxvZyhcImRyYWdTdG9yYWdlIGlzXCIsIGRyYWdTdG9yYWdlKTtcbn07XG5cbmNvbnN0IGNwdUF0dGFjayA9ICgpID0+IHsgXG4gIGxldCBzdWNjZXNzZnVsQXR0YWNrID0gZmFsc2U7XG4gIHdoaWxlICghc3VjY2Vzc2Z1bEF0dGFjaykgeyBcbiAgICBjb25zdCBhdHRhY2sgPSBjb250cm9sbGVyLmNwdS5hdHRhY2soKTtcbiAgICBpZiAoYXR0YWNrKSB7XG4gICAgICBzdWNjZXNzZnVsQXR0YWNrID0gdHJ1ZTtcbiAgICAgIGFkZEF0dGFja0xpc3RlbmVycygpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZW1vdmVBdHRhY2tMaXN0ZW5lcnMgPSAoKSA9PiB7IFxuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtZ3JpZC1zcXVhcmVcIik7XG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICB9KTtcbiB9XG5cbiBjb25zdCBhdHRhY2sgPSAoZSkgPT4geyBcbiAgY29uc29sZS5sb2coXCJlLnRhcmdldCBpc1wiLCBlLnRhcmdldCk7XG4gICAgICBjb25zdCB4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSk7XG4gICAgICBjb25zb2xlLmxvZyhcInggaXNcIiwgeCk7XG4gICAgICBjb25zb2xlLmxvZyhcInkgaXNcIiwgeSk7XG4gICAgICBjb25zdCBodW1hbkF0dGFja1Jlc3VsdCA9IGNvbnRyb2xsZXIuaHVtYW4uYXR0YWNrKHgsIHkpO1xuICAgICAgaWYgKGh1bWFuQXR0YWNrUmVzdWx0KSB7IFxuICAgICAgICByZW1vdmVBdHRhY2tMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiaHVtYW5BdHRhY2tSZXN1bHQgaXNcIiwgaHVtYW5BdHRhY2tSZXN1bHQpO1xufVxuXG5cbmNvbnN0IGFkZEF0dGFja0xpc3RlbmVycyA9ICgpID0+IHsgXG4gIGNvbnNvbGUubG9nKFwiYWRkQXR0YWNrTGlzdGVuZXJzISlcIilcbiAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdS1ncmlkLXNxdWFyZVwiKTtcbiAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICB9KTtcbn1cblxuY29uc3QgbWFya1NxdWFyZUhpdCA9ICh4LCB5LCBpc09jY3VwaWVkLCBpc0NQVSkgPT4ge1xuICBsZXQgc3F1YXJlO1xuICBpZiAoaXNDUFUpIHsgXG4gICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1ncmlkLXNxdWFyZS0ke3h9LSR7eX1gKTtcbiAgICBjb25zb2xlLmxvZyhcInNxdWFyZSBpc1wiLCBzcXVhcmUpO1xuICAgIGlmIChpc09jY3VwaWVkKSB7IFxuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXQtb2NjdXBpZWRcIik7XG4gICAgfSBlbHNlIHsgXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1lbXB0eVwiKTtcbiAgICB9XG4gICB9IGVsc2Uge1xuICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jcHUtZ3JpZC1zcXVhcmUtJHt4fS0ke3l9YCk7XG4gICAgY29uc29sZS5sb2coXCJzcXVhcmUgaXNcIiwgc3F1YXJlKTtcbiAgICBpZiAoaXNPY2N1cGllZCkgeyBcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LW9jY3VwaWVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1lbXB0eVwiKTtcbiAgICB9XG4gICB9XG4gICBjb25zb2xlLmxvZygnc3F1YXJlIGlzJywgc3F1YXJlKTtcbn1cblxuY29uc3QgYnVpbGRNYWluR2FtZSA9ICgpID0+IHsgXG4gIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG4gIHN0YXJ0R2FtZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb21wb25lbnRGYWN0b3J5KGNwdVswXSk7XG4gIGJ1aWxkR3JpZCgyKTtcbiAgY29uc3QgYmVnaW5HYW1lID0gY29udHJvbGxlci5nYW1lRmxvdyh0cnVlKTtcbiAgY29uc29sZS5sb2coXCJiZWdpbkdhbWUgaXNcIiwgYmVnaW5HYW1lKTtcbiAgaWYgKGJlZ2luR2FtZSAhPT0gMSkgeyBcbiAgICBtYXJrU3F1YXJlSGl0KGJlZ2luR2FtZVswXVswXSwgYmVnaW5HYW1lWzBdWzFdLCBiZWdpbkdhbWVbMV0sIHRydWUpO1xuICB9XG5cbiAgYWRkQXR0YWNrTGlzdGVuZXJzKCk7XG59XG5cbmNvbnN0IGRyb3AgPSAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImRyb3AhIGV2LnRhcmdldCA9IFwiLCBlLnRhcmdldCk7XG4gIGNvbnNvbGUubG9nKFwiY29udHJvbGxlciBpc1wiLCBjb250cm9sbGVyKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImltZ1wiKTtcbiAgY29uc29sZS5sb2coXCJkYXRhIGlzXCIsIGRhdGEpO1xuICBlLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKSk7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwiZHJvcCEgYWJvdXQgdG8gcGxhY2Ugc2hpcC4gYXJncyBhcmUgXCIsXG4gICAgZS50YXJnZXQuZGF0YXNldC54LFxuICAgIGUudGFyZ2V0LmRhdGFzZXQueSxcbiAgICAwXG4gICk7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwicGxhY2luZyBzaGlwISByZXN1bHQgaXNcIixcbiAgICBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKFxuICAgICAgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCksXG4gICAgICBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KSxcbiAgICAgIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0Lm9yaWVudGF0aW9uKSxcbiAgICAgIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0Lmxlbmd0aClcbiAgICApXG4gICk7XG4gIHBsYWNlZFNoaXBzQ291bnQgKz0gMTtcbiAgY29uc29sZS5sb2coJ3BsYWNlZFNoaXBzQ291bnQgaXMnLCBwbGFjZWRTaGlwc0NvdW50KTtcbiAgaWYgKHBsYWNlZFNoaXBzQ291bnQgPT09IDQpIHtcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xuICAgIHN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHN0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkTWFpbkdhbWUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBjb25zb2xlLmxvZyhcImRyYWdTdG9yYWdlLmlkIGlzXCIsIGRyYWdTdG9yYWdlLmlkKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihgIyR7ZHJhZ1N0b3JhZ2UuaWR9YClcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZVNoaXApO1xufTtcblxuY29uc3QgYWRkRHJhZ0xpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJhZGREcmFnTGlzdGVuZXJzIVwiKTtcbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpO1xuICBjb25zb2xlLmxvZyhcImRyYWdnYWJsZXMgPSBcIiwgZHJhZ2dhYmxlcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkcmFnZ2FibGVzW2ldO1xuICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudCBpczogXCIsIGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnKTtcbiAgfVxuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmVcIik7XG4gIGNvbnNvbGUubG9nKFwic3F1YXJlcyA9IFwiLCBzcXVhcmVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNxdWFyZXNbaV07XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBhbGxvd0Ryb3ApO1xuICB9XG59O1xuXG5jb25zdCBidWlsZFNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBQbGFjZW1lbnQubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNoaXBQbGFjZW1lbnRbaV07XG4gICAgY29tcG9uZW50RmFjdG9yeShlbGVtZW50KTtcbiAgfVxuICBidWlsZEdyaWQoMSk7XG4gIGJ1aWxkU2hpcHMoKTtcbiAgYWRkRHJhZ0xpc3RlbmVycygpO1xufTtcblxuLy8gZ2V0cyB0aGUgRE9NIG5vZGVzJyBpbmZvIGZvciB0aGUgZmlyc3Qgc2NyZWVuIGZyb20gZGlzcGxheU9iamVjdHNcbi8vIGFuZCBkcmF3cyB0aGVtXG5cbmV4cG9ydCBjb25zdCBhbGxvd0Ryb3AgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5leHBvcnQgY29uc3QgYnVpbGRJbnRlcmZhY2UgPSAoKSA9PiB7XG4gIGRpc3BsYXlPYmplY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb21wb25lbnRGYWN0b3J5KGVsZW1lbnQpO1xuICB9KTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1aWxkU2hpcFBsYWNlbWVudCk7XG59O1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL0dhbWVCb2FyZEZhY3RvcnlcIjtcbmltcG9ydCB7IGZsaXBDb2luIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgaW5uZXJQbGF5ZXJGYWN0b3J5ID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJUeXBlID0gdHlwZTtcbiAgICBjb25zdCBib2FyZCA9IEdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICByZXR1cm4geyBwbGF5ZXJUeXBlLCBib2FyZCB9O1xuICB9O1xuXG4gIGNvbnN0IGh1bWFuID0gaW5uZXJQbGF5ZXJGYWN0b3J5KDEpO1xuICBjb25zdCBjcHUgPSBpbm5lclBsYXllckZhY3RvcnkoMik7XG4gIFxuICBmdW5jdGlvbiByYW5kb214eSgpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcG9wdWxhdGVDUFVCb2FyZCgpIHsgXG4gICAgY29uc3QgcGxhY2VCYXR0bGVzaGlwID0gKCkgPT4geyBcbiAgICAgIGNvbnN0IHggPSByYW5kb214eSgpWzBdO1xuICAgICAgY29uc3QgeSA9IHJhbmRvbXh5KClbMV07XG4gICAgICBjb25zdCBwbGFjZW1lbnQgPSBjcHUuYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoeCwgeSwgZmxpcENvaW4oKSwgNilcbiAgICAgIGlmICh0eXBlb2YgcGxhY2VtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gcGxhY2VtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYWNlQmF0dGxlc2hpcCgpO1xuICAgIH1cbiAgICBjb25zdCBwbGFjZUNydWlzZXIgPSAoKSA9PiB7IFxuICAgICAgY29uc3QgeCA9IHJhbmRvbXh5KClbMF07XG4gICAgICBjb25zdCB5ID0gcmFuZG9teHkoKVsxXTtcbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBmbGlwQ29pbigpLCA0KVxuICAgICAgaWYgKHR5cGVvZiBwbGFjZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGxhY2VDcnVpc2VyKCk7ICBcbiAgICB9XG4gICAgY29uc3QgcGxhY2VEZXN0cm95ZXIgPSAoKSA9PiB7IFxuICAgICAgY29uc3QgeCA9IHJhbmRvbXh5KClbMF07XG4gICAgICBjb25zdCB5ID0gcmFuZG9teHkoKVsxXTtcbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBmbGlwQ29pbigpLCAzKVxuICAgICAgaWYgKHR5cGVvZiBwbGFjZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGxhY2VEZXN0cm95ZXIoKTtcbiAgICAgfVxuICAgIGNvbnN0IHBsYWNlRnJpZ2F0ZSA9ICgpID0+IHsgXG4gICAgICBjb25zdCB4ID0gcmFuZG9teHkoKVswXTtcbiAgICAgIGNvbnN0IHkgPSByYW5kb214eSgpWzFdO1xuICAgICAgY29uc3QgcGxhY2VtZW50ID0gY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKHgsIHksIGZsaXBDb2luKCksIDIpXG4gICAgICBpZiAodHlwZW9mIHBsYWNlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwbGFjZUZyaWdhdGUoKTtcbiAgICAgfVxuICAgIHBsYWNlQmF0dGxlc2hpcCgpO1xuICAgIHBsYWNlQ3J1aXNlcigpO1xuICAgIHBsYWNlRGVzdHJveWVyKCk7XG4gICAgcGxhY2VGcmlnYXRlKCk7XG4gIH1cblxuICBjcHUuYm9hcmQuZ2FtZUJvYXJkLnBvcHVsYXRlQ1BVQm9hcmQgPSBwb3B1bGF0ZUNQVUJvYXJkO1xuICBjcHUuYm9hcmQuZ2FtZUJvYXJkLnBvcHVsYXRlQ1BVQm9hcmQoKTtcbiAgXG4gIFxuICBjb25zdCBjcHVBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICByZXR1cm4gaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH07XG5cbiAgY29uc3QgaHVtYW5BdHRhY2sgPSAoeCwgeSkgPT4gY3B1LmJvYXJkLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gIGh1bWFuLmF0dGFjayA9IGh1bWFuQXR0YWNrO1xuICBjcHUuYXR0YWNrID0gY3B1QXR0YWNrO1xuXG4gIHJldHVybiB7IGh1bWFuLCBjcHUgfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9tb2R1bGVzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGJ1aWxkSW50ZXJmYWNlLCBhbGxvd0Ryb3AgfSBmcm9tIFwiLi9tb2R1bGVzL2ludGVyZmFjZVwiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVyXCI7XG5cbmJ1aWxkSW50ZXJmYWNlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=