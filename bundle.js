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
___CSS_LOADER_EXPORT___.push([module.id, "/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.placement-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 400px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid grey;\n  position: relative;\n  overflow: visible;\n}\n\n.ships-container {\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  margin-top: 62px;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.hit-empty {\n  background-color: black;\n}\n\n.hit-occupied {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/modules/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;AACxC","sourcesContent":["/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.placement-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 400px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid grey;\n  position: relative;\n  overflow: visible;\n}\n\n.ships-container {\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  margin-top: 62px;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.hit-empty {\n  background-color: black;\n}\n\n.hit-occupied {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "buildBoard": () => (/* binding */ buildBoard),
/* harmony export */   "checkFleetSunk": () => (/* binding */ checkFleetSunk),
/* harmony export */   "checkForOccupants": () => (/* binding */ checkForOccupants),
/* harmony export */   "cpuBoard": () => (/* binding */ cpuBoard),
/* harmony export */   "deleteShip": () => (/* binding */ deleteShip),
/* harmony export */   "getShip": () => (/* binding */ getShip),
/* harmony export */   "placeShipOnBoard": () => (/* binding */ placeShipOnBoard),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "receiveAttack": () => (/* binding */ receiveAttack)
/* harmony export */ });
/* harmony import */ var _ShipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipFactory */ "./src/modules/ShipFactory.js");
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
  // make a new ship according to shipType
  const newShip = _ShipFactory__WEBPACK_IMPORTED_MODULE_0__.ShipFactory.ShipFactory(shipType);
  newShip.direction = horizVert;
  const newShipLength = newShip.length;

  // the following if statements check that this is a legal ship placement
  if (horizVert === 0) {
    if (x + newShipLength > 9) {
      return false;
    }
  } else if (y - newShipLength < 0) {
    return false;
  }
  if (this.checkForOccupants(x, y, horizVert, newShipLength)) {
    return false;
  }

  this.shipArray.push(newShip);

  const result = [];

  // loop through newShipLength squares in
  // the direction indicated by horizVert, modifying their occupant
  // attributes according to newShip's ID
  console.log("newShip is", newShip);
  for (let i = 0; i < newShipLength; i++) {
    if (newShip.direction === 0) {
      // i.e. if this ship is placed horizontally
      this.board[x + i][y].placeShipOnSquare(newShip.shipID);
      if (this.board[x + i][y].occupant === newShip.shipID) {
        result.push([x + i, y]);
      }
    } else {
      // the ship is placed vertically
      this.board[x][y - i].placeShipOnSquare(newShip.shipID);
      if (this.board[x][y - i].occupant === newShip.shipID) {
        result.push([x, y - i]);
      }
    }
  }
  return result;
}

function checkFleetSunk() {
  // Loops through this.shipArray, checking each ships .sunk property. If
  // any unsunk ship is found, returns false - otherwise, returns true.
  let result = true;
  for (let i = 0; i < this.shipArray.length; i += 1) {
    const ship = this.shipArray[i];
    if (!ship.sunk) {
      result = false;
    }
  }
  if (result) {
    alert("game over!!");
  }
  return result;
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

function receiveAttack(coords) {
  // we look up the given square. if there is an occupant, we get the ship's
  // object using getShip() and call its hit() method
  const x = coords[0];
  const y = coords[1];
  const player = this.playerType;
  if (this.board[x][y].hit === true) {
    return false;
  }
  if (this.board[x][y].occupant !== null) {
    const ship = this.getShip(this.board[x][y].occupant);
    this.board[x][y].hit = true;
    const status = ship.hit();
    let checkFleet;
    if (player === 1) {
      const checkPlayerFleetSunk = checkFleetSunk.bind(playerBoard);
      checkFleet = checkPlayerFleetSunk();
    } else {
      const checkCpuFleetSunk = checkFleetSunk.bind(cpuBoard);
      checkFleet = checkCpuFleetSunk();
    }
    if (checkFleet === true) {
      return "gameOver";
    }
    if (status === "sunk") {
      return "sunk";
    }
    return "hit";
  }
  this.board[x][y].hit = true;
  return "miss";
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
      const element = this.board[x][y - i];
      if (element.occupant !== null) {
        return true;
      }
    }
  }
  return false;
}

function deleteShip(ID) {
  // loops through this.shipArray. upon finding ship with the given ID,
  // deletes it
  const array = this.shipArray;
  for (let i = 0; i < array.length; i += 1) {
    const ship = array[i];
    if (ship.shipID === ID) {
      array.splice(i, 1);
    }
  }
}

function rotateShipinStorage(x, y) {
  // find the ship at the given coordinates and get its direction
  const shipID = this.board[x][y].occupant;
  const ship = this.getShip(this.board[x][y].occupant);
  const dir = ship.direction;

  // delete the ship from shipArray
  console.log("rotating ship! this is", this);
  this.deleteShip(shipID);

  let result;

  if (dir === 0) {
    // if the ship is horizontal, clear the board of the ship horizontally
    for (let i = 1; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      console.log("clearing squares! xElement.occupant =", xElement);
      xElement.occupant = null;
      console.log("cleared square! xElement.occupant =", xElement);
    }
    // check that the squares we will place the ship in are not occupied
    for (let i = 1; i < ship.length; i++) {
      const yElement = this.board[x][y + i];
      if (yElement.occupant !== null) {
        console.log('yElement is ', yElement)
        console.log('yElement.occupant is ', yElement.occupant, 'not null')
        return false;
      }
    }
    // having removed the ship, place it with the new direction
    result = this.placeShipOnBoard(x, y, 1, ship.length);
  } else {
    // else clear the board of the ship vertically
    for (let i = 1; i < ship.length; i++) {
      const yElement = this.board[x][y + i];
      console.log("clearing squares! yElement.occupant =", yElement.occupant);
      yElement.occupant = null;
      console.log("cleared square! yElement.occupant =", yElement.occupant);
    }
    // check that the squares we will place the ship in are not occupied

    for (let i = 1; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      if (xElement.occupant !== null) {
        console.log('xElement is ', xElement);
        console.log('xElement.occupant is ', xElement.occupant, 'not null')
        return false;
      }
    }
    // having removed the ship, replace it with the new direction
    result = this.placeShipOnBoard(x, y, 0, ship.length);
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
    this.deleteShip = deleteShip;
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

const playerBoard = new Board();
const cpuBoard = new Board();

/*const checkPlayerFleetSunk = checkFleetSunk.bind(playerBoard);
console.log('checkPlayerFleetSunk is', checkPlayerFleetSunk)
console.log('checkplayerFleetSunk() is', checkPlayerFleetSunk())
const checkCpuFleetSunk = checkFleetSunk.bind(cpuBoard);
console.log('checkCpuFleetSunk is', checkCpuFleetSunk)*/




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
    shipCounter += 1;
    const shipID = shipCounter;
    let type;
    let length;
    let hp;
    let sunk = false;
    switch (shipType) {
      case 1:
        type = "Sink test";
        length = 6;
        hp = 1;
        break;

      case 2:
        type = "Frigate";
        length = 2;
        hp = 2;
        break;

      case 3:
        type = "Destroyer";
        length = 3;
        hp = 3;
        break;

      case 4:
        type = "Cruiser";
        length = 4;
        hp = 4;
        break;

      default:
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
          this.sunk = true;
          return "sunk";
        }
        return "hit";
      },
    };
  };
  return { ShipFactory };
})();


/***/ }),

/***/ "./src/modules/componentFactory.js":
/*!*****************************************!*\
  !*** ./src/modules/componentFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentFactory": () => (/* binding */ componentFactory)
/* harmony export */ });
const componentFactory = (element) => {
  console.log('componentFactory called with element = ', element);
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
    allowDrop,
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
      console.log('element has id! id = ', id);
      newDOMNode.id = id;
    }

    if (xy) {
      newDOMNode.dataset.x = xy[0];
      newDOMNode.dataset.y = xy[1];
      newDOMNode.dataset.sqnum = xy[2];
    }
    if (allowDrop) {
      newDOMNode.setAttribute("ondrop", "drop(event)");
      newDOMNode.setAttribute("ondragover", "allowDrop(event)");
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



/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notServ": () => (/* binding */ notServ),
/* harmony export */   "pubSub": () => (/* binding */ pubSub)
/* harmony export */ });
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/modules/playerFactory.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");
/* eslint-disable import/no-cycle */



class Topic {
  constructor(topic) {
    this.subscribers = [];
  }
}

class PubSub {
  sub(topic, subscriber) {
    console.log("sub! topic is", topic);
    if (typeof subscriber !== "function") {
      return `${typeof subscriber} is not a valid argument for subscribers`;
    }
    if (!this[topic]) {
      this[topic] = new Topic();
    }
    this[topic].subscribers.push(subscriber);
    console.log("subbed! this[topic] = ", this[topic]);
  }

  unsub(topic, subscriber) {
    if (typeof subscriber !== "function") {
      return `${typeof subscriber} is not a valid argument for unsubscribing`;
    }
    if (this[topic].subscribers.includes(subscriber)) {
      this[topic].subscribers = this[topic].subscribers.filter(
        (sub) => sub !== subscriber
      );
    }
  }

  pub(topic, payload) {
    console.log("pub called! topic, payload are ", topic, payload);
    console.log("this is ", this);
    this[topic].subscribers.forEach((sub) => sub(payload));
  }

  returnSubscribers(topic) {
    console.log("returnSubscribers called! topic is ", topic, "this is ", this);
    const result = [];
    this[topic].subscribers.forEach((sub) => result.push(sub));
    return result;
  }
}

const notServ = (...args) => {
  console.log("notification server! args[0][0] is ", args[0][0]);
  if (args[0] === "shipsPlaced") {
    console.log("shipsPlaced notification received!");
  }

  if (args[0][0] === "shipDropped") {
    console.log("shipDropped notification received!");
  }
};

/*controller.pubSub.pub("placeShip", [Number(e.target.dataset.x),
  Number(e.target.dataset.y),
  Number(dragStorage.dataset.direction),
  Number(dragStorage.dataset.length)] )*/

const pubSub = new PubSub();

const coinFlip = () => Math.floor(Math.random() * 2) + 1;

// Event emitter for pub/sub implementation

class Controller {
  constructor() {
    // pulls in players and board from playerFactory
    this.players = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)();
    // flips a coin to determine who goes first
    this.currentPlayer = coinFlip();
    this.shipsPlaced = false;
    this.gameOver = false;
    this.shipPlacedCount = 0;
  }

  startGame() {
    if (coinFlip() === 1) {
      this.gameFlow(1);
    } else {
      this.gameFlow(2);
    }
  }

  gameFlow(whoseTurn) {
    if (this.gameOver === true) {
      console.log("game is over!");
      return;
    }
    if (whoseTurn === 1) {
      // prompt player for a move
      _interface__WEBPACK_IMPORTED_MODULE_1__.getPlayerMove();
    } else {
      // prompt cpu for a move
      getCPUMove();
    }
  }

  addTestShips() {
    this.players.human.board.gameBoard.placeShipOnBoard(0, 0, 0, 6);
    this.players.human.board.gameBoard.placeShipOnBoard(0, 1, 0, 4);
    this.players.human.board.gameBoard.placeShipOnBoard(0, 2, 0, 3);
    this.players.human.board.gameBoard.placeShipOnBoard(0, 3, 0, 2);
    this.players.cpu.board.gameBoard.placeShipOnBoard(0, 0, 0, 6);
    this.players.cpu.board.gameBoard.placeShipOnBoard(0, 1, 0, 4);
    this.players.cpu.board.gameBoard.placeShipOnBoard(0, 2, 0, 3);
    this.players.cpu.board.gameBoard.placeShipOnBoard(0, 3, 0, 2);
  }

  shipPlaced() {
    this.shipPlacedCount += 1;
    if (this.shipPlacedCount === 4) {
      this.shipsPlaced = true;
      pubSub.pub("shipsPlaced", _interface__WEBPACK_IMPORTED_MODULE_1__.shipsPlaced);
    }
  }

  playersMove(move) {
    const result = this.players.cpu.board.receiveAttack(move);
    if (result === "hit") {
      _interface__WEBPACK_IMPORTED_MODULE_1__.markSquareHit(move[0], move[1], true, false);
    } else if (result === "miss") {
      _interface__WEBPACK_IMPORTED_MODULE_1__.markSquareHit(move[0], move[1], false, false);
    } else if (result === "sunk") {
      _interface__WEBPACK_IMPORTED_MODULE_1__.markSquareHit(move[0], move[1], true, false);
      _interface__WEBPACK_IMPORTED_MODULE_1__.sunk(move[0], move[1], false);
    } else if (result === "gameOver") {
      this.gameOver = true
      _interface__WEBPACK_IMPORTED_MODULE_1__.gameOver('You win');
    } else if (result === "false") {
      _interface__WEBPACK_IMPORTED_MODULE_1__.invalidMove(1);
      this.gameFlow(1);
    }
    this.gameFlow(2);
  }

  getCPUMove() {
    const move = this.players.cpu.attack();
    const result = this.players.human.board.receiveAttack(move);
    if (result === "hit") {
      _interface__WEBPACK_IMPORTED_MODULE_1__.markSquareHit(move[0], move[1], true, true);
    } else if (result === "miss") {
      _interface__WEBPACK_IMPORTED_MODULE_1__.markSquareHit(move[0], move[1], false, true);
    } else if (result === "sunk") {
      _interface__WEBPACK_IMPORTED_MODULE_1__.markSquareHit(move[0], move[1], true, true);
      _interface__WEBPACK_IMPORTED_MODULE_1__.sunk(true);
    } else if (result === "gameOver") {
      _interface__WEBPACK_IMPORTED_MODULE_1__.gameOver('The computer wins!');
      this.gameOver = true;
    } else if (result === "false") {
      getCPUMove();
    }
    this.gameFlow(1);
  }

  placeHuman(ship) {
    const result = this.players.human.board.placeShipOnBoard(
      ship[0],
      ship[1],
      ship[2],
      ship[3]
    );
    if (result !== false) {
      placedShip();
    }
  }
}

const controller = new Controller();

const placedShip = controller.shipPlaced.bind(controller);
const startGame = controller.startGame.bind(controller);
const playersMove = controller.playersMove.bind(controller);
const getCPUMove = controller.getCPUMove.bind(controller);
const placeHumanShip = controller.placeHuman.bind(controller);
const rotateShip = controller.rotateShip.bind(controller);

pubSub.sub("placeShip", placeHumanShip);
pubSub.sub("shipsPlaced", _interface__WEBPACK_IMPORTED_MODULE_1__.shipsPlaced);
pubSub.sub("gameStart", startGame);
pubSub.sub("getPlayersMove", _interface__WEBPACK_IMPORTED_MODULE_1__.getPlayerMove);
pubSub.sub("playersMove", playersMove);
pubSub.sub("rotateShip", rotateShip);
console.log("subs are", pubSub.returnSubscribers("placeShip"));




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
    name: "gameAlertContainer",
    nodeType: "div",
    parent: ".placement-container",
    class1: "game-alert-container",
  },
  {
    name: "playerAlerts",
    nodeType: "h3",
    parent: ".game-alert-container",
    class1: "player-alert",
    text: "",
  },
  {
    name: "cpuAlerts",
    nodeType: "h3",
    parent: ".game-alert-container",
    class1: "cpu-alert",
    text: "",
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

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAttackListeners": () => (/* binding */ addAttackListeners),
/* harmony export */   "addDragListeners": () => (/* binding */ addDragListeners),
/* harmony export */   "allowDrop": () => (/* binding */ allowDrop),
/* harmony export */   "buildGrid": () => (/* binding */ buildGrid),
/* harmony export */   "buildInterface": () => (/* binding */ buildInterface),
/* harmony export */   "buildMainGame": () => (/* binding */ buildMainGame),
/* harmony export */   "buildShipPlacement": () => (/* binding */ buildShipPlacement),
/* harmony export */   "buildShips": () => (/* binding */ buildShips),
/* harmony export */   "cpuAttack": () => (/* binding */ cpuAttack),
/* harmony export */   "drag": () => (/* binding */ drag),
/* harmony export */   "drop": () => (/* binding */ drop),
/* harmony export */   "gameOver": () => (/* binding */ gameOver),
/* harmony export */   "getPlayerMove": () => (/* binding */ getPlayerMove),
/* harmony export */   "iface": () => (/* binding */ iface),
/* harmony export */   "invalidMove": () => (/* binding */ invalidMove),
/* harmony export */   "markSquareHit": () => (/* binding */ markSquareHit),
/* harmony export */   "removeAttackListeners": () => (/* binding */ removeAttackListeners),
/* harmony export */   "rotateShip": () => (/* binding */ rotateShip),
/* harmony export */   "rotateShipinStorage": () => (/* binding */ rotateShipinStorage),
/* harmony export */   "shipsPlaced": () => (/* binding */ shipsPlaced),
/* harmony export */   "sunk": () => (/* binding */ sunk)
/* harmony export */ });
/* harmony import */ var _componentFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentFactory */ "./src/modules/componentFactory.js");
/* harmony import */ var _displayObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayObjects */ "./src/modules/displayObjects.js");
/* harmony import */ var _resources_Cruiser_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/Cruiser.png */ "./src/resources/Cruiser.png");
/* harmony import */ var _resources_Battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/Battleship.png */ "./src/resources/Battleship.png");
/* harmony import */ var _resources_Destroyer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/Destroyer.png */ "./src/resources/Destroyer.png");
/* harmony import */ var _resources_Frigate_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/Frigate.png */ "./src/resources/Frigate.png");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/modules/styles.css");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controller */ "./src/modules/controller.js");









function buildGrid(player) {
  let sqNum = 0;
  let humanSqNum = 0;
  let cpuSqNum = 0;
  for (let i = 9; i > -1; i--) {
    for (let j = 0; j < 10; j++) {
      const newSquare = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.shipPlacement[_displayObjects__WEBPACK_IMPORTED_MODULE_1__.shipPlacement.length - 1];
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
      (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(newSquare);
    }
  }
}

function buildShips() {
  for (let i = 0; i < 4; i += 1) {
    const element = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.ships[i];

    (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(element);
    switch (element.name) {
      case "Battleship":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${_resources_Battleship_png__WEBPACK_IMPORTED_MODULE_3__} alt=${element.name} draggable="true" class="draggable" id="Battleship" data-length="6" data-direction="0">`;
        break;

      case "Cruiser":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${_resources_Cruiser_png__WEBPACK_IMPORTED_MODULE_2__} alt=${element.name} draggable="true" class="draggable" id="Cruiser"  data-length="4" data-direction="0">`;
        break;

      case "Destroyer":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${_resources_Destroyer_png__WEBPACK_IMPORTED_MODULE_4__} alt=${element.name} draggable="true" class="draggable" id="Destroyer"  data-length="3" data-direction="0">`;
        break;

      default:
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${_resources_Frigate_png__WEBPACK_IMPORTED_MODULE_5__} alt=${element.name} draggable="true" class="draggable" id="Frigate"  data-length="2" data-direction="0">`;
        break;
    }
  }
}

function shipsPlaced() {
  console.log("shipsPlaced() called! adding event listener");
  const draggables = document.querySelectorAll(".draggable");
  draggables.forEach((draggable) => {
    console.log("draggable = ", draggable);
    console.log("drabbale.parentElement = ", draggable.parentElement);
    // using the x and y data attributes of the parent element,
    // we can determine whether the ships' positions on the board are valid
  });
  const startGame = document.querySelector(".start-game");
  startGame.addEventListener("click", buildMainGame);
}

function rotateShipinStorage(x, y) {
  controller.rotateShipinStorage();
}

function rotateShip(e) {
  console.log("rotateShip! e.target is", e.target);
  console.log(
    "rotateShip! controller.human.board.gameBoard is",
    controller.human.board.gameBoard
  );
  const ship = e.target;
  console.log("rotateShip! ship is", ship);
  const parent = ship.parentNode;
  const parentX = Number(parent.dataset.x);
  const parentY = Number(parent.dataset.y);
  switch (Number(e.target.dataset.length)) {
    case 6:
      if (ship.dataset.direction === "0") {
        ship.dataset.direction = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("battleship-rotated");
      } else {
        ship.dataset.direction = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("battleship-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    case 4:
      if (ship.dataset.direction === "0") {
        ship.dataset.direction = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("cruiser-rotated");
      } else {
        ship.dataset.direction = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("cruiser-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    case 3:
      if (ship.dataset.direction === "0") {
        ship.dataset.direction = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("destroyer-rotated");
      } else {
        ship.dataset.direction = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("destroyer-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    default:
      if (ship.dataset.direction === "0") {
        ship.dataset.direction = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("frigate-rotated");
      } else {
        ship.dataset.direction = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("frigate-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
  }
}

function cpuAttack() {
  let successfulAttack = false;
  while (!successfulAttack) {
    const attack = controller.cpu.attack();
    if (attack) {
      successfulAttack = true;
      addAttackListeners();
    }
  }
}

function attack(e) {
  console.log("e.target is", e.target);
  const x = Number(e.target.dataset.x);
  const y = Number(e.target.dataset.y);
  console.log("x is", x);
  console.log("y is", y);
  _controller__WEBPACK_IMPORTED_MODULE_7__.pubSub.pub("playersMove", [x, y]);

  /*const humanAttackResult = controller.human.attack(x, y);
  if (humanAttackResult) {
    removeAttackListeners();
  }
  console.log("humanAttackResult is", humanAttackResult);*/
}

function removeAttackListeners() {
  const squares = document.querySelectorAll(".cpu-grid-square");
  squares.forEach((square) => {
    square.removeEventListener("click", attack);
  });
}

/*export function miss(move, player) {
  console.log('miss! check square')
  if (player === 1) { 
    const square = document.querySelector(`.cpu-grid-square-${move[0]}-${move[1]}`);
    square.classList.add("miss");
  } else {
    const square = document.querySelector(`.player-grid-square-${move[0]}-${move[1]}`);
    square.classList.add("miss");
  }
}*/

function addAttackListeners() {
  console.log("addAttackListeners!)");
  const gridSquares = document.querySelectorAll(".cpu-grid-square");
  gridSquares.forEach((square) => {
    square.addEventListener("click", attack);
  });
}

function sunk(isPlayerBoard) {
  if (!isPlayerBoard) {
    document.querySelector(".cpu-alert").textContent =
      "The computer sunk your ship!";
  } else {
    document.querySelector(".player-alert").textContent =
      "You sunk an enemy ship!";
  }
}

function markSquareHit(x, y, isOccupied, isPlayerBoard) {
  let square;

  if (isPlayerBoard) {
    square = document.querySelector(`.player-grid-square-${x}-${y}`);
    console.log("square is", square);
    if (isOccupied) {
      square.classList.add("hit-occupied");
      document.querySelector(".cpu-alert").textContent =
        "The computer hit your ship!";
    } else {
      square.classList.add("hit-empty");
      document.querySelector(".cpu-alert").textContent =
        "The computer hit an empty square!";
    }
  } else {
    square = document.querySelector(`.cpu-grid-square-${x}-${y}`);
    console.log("square is", square);
    if (isOccupied) {
      square.classList.add("hit-occupied");
      document.querySelector(".player-alert").textContent =
        "You hit an enemy ship!";
    } else {
      square.classList.add("hit-empty");
      document.querySelector(".player-alert").textContent =
        "You hit an empty square!";
    }
  }
}

function invalidMove(player) {
  if (player === 1) {
    document.querySelector(".cpu-alert").textContent =
      "The computer tried to attack an invalid square!";
  } else {
    document.querySelector(".player-alert").textContent =
      "You tried to attack an invalid square!";
  }
}

function gameOver(message) {
  document.querySelector(".cpu-alert").textContent = "";
  document.querySelector(".player-alert").textContent = message;
}

function buildMainGame() {
  const startGameButton = document.querySelector(".start-game");
  startGameButton.style.display = "none";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cpu[0]);
  buildGrid(2);
  _controller__WEBPACK_IMPORTED_MODULE_7__.pubSub.pub("gameStart", "true");
  // remove ship-rotation event listeners
  const draggables = document.querySelectorAll(".draggable");
  for (let index = 0; index < draggables.length; index++) {
    const element = draggables[index];
    element.removeEventListener("click", rotateShip);
    element.removeEventListener("dragstart", drag);
  }
  const squares = document.querySelectorAll(".placement-grid-square");
  console.log("squares = ", squares);
  for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.removeEventListener("drop", drop);
    element.removeEventListener("dragover", allowDrop);
  }
}

let dragStorage = "test";

function getPlayerMove() {
  // provide the player with some sort of prompt. for now, console
  console.log("please make your move!");
  const gridSquares = document.querySelectorAll(".cpu-grid-square");
  gridSquares.forEach((square) => {
    square.addEventListener("click", attack);
  });
}

function drop(e) {
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
  console.log("pubSub.pub is", _controller__WEBPACK_IMPORTED_MODULE_7__.pubSub.pub);
  _controller__WEBPACK_IMPORTED_MODULE_7__.pubSub.pub("placeShip", [
    Number(e.target.dataset.x),
    Number(e.target.dataset.y),
    Number(dragStorage.dataset.direction),
    Number(dragStorage.dataset.length),
  ]);

  console.log("dragStorage.id is", dragStorage.id);
  document
    .querySelector(`#${dragStorage.id}`)
    .addEventListener("click", rotateShip);
}

function addDragListeners() {
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
}

function buildShipPlacement() {
  document.querySelector(".content").innerHTML = "";
  for (let i = 0; i < _displayObjects__WEBPACK_IMPORTED_MODULE_1__.shipPlacement.length - 1; i += 1) {
    const element = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.shipPlacement[i];
    (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(element);
  }
  buildGrid(1);
  buildShips();
  addDragListeners();
}

// gets the DOM nodes' info for the first screen from displayObjects
// and draws them

function allowDrop(e) {
  e.preventDefault();
}

function buildInterface() {
  _displayObjects__WEBPACK_IMPORTED_MODULE_1__.displayObjects.forEach((element) => {
    (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(element);
  });
  document
    .querySelector(".start-button")
    .addEventListener("click", buildShipPlacement);
}

function drag(e) {
  dragStorage = e.target;
  console.log("drag! e.target = ", e.target);
  e.dataTransfer.setData("img", e.target.id);
  console.log("dragStorage is", this.dragStorage);
}

class Interface {
  constructor() {
    this.componentFactory = _componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory;
    this.buildGrid = buildGrid;
    this.buildShips = buildShips;
    this.rotateShip = rotateShip;
    this.cpuAttack = cpuAttack;
    this.removeAttackListeners = removeAttackListeners;
    this.attack = attack;
    this.addAttackListeners = addAttackListeners;
    this.markSquareHit = markSquareHit;
    this.buildMainGame = buildMainGame;
    this.drop = drop;
    this.addDragListeners = addDragListeners;
    this.buildShipPlacement = buildShipPlacement;
    this.allowDrop = allowDrop;
    this.buildInterface = buildInterface;
    this.dragStorage = [];
  }
}

const iface = new Interface();




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


const playerFactory = () => {
  const innerPlayerFactory = (type) => {
    let board;
    if (type === 1) {
      board = _GameBoardFactory__WEBPACK_IMPORTED_MODULE_0__.playerBoard;
    } else { board = _GameBoardFactory__WEBPACK_IMPORTED_MODULE_0__.cpuBoard; }
    const playerType = type;

    board.playerType = playerType;
    return { playerType, board };
  };

  const human = innerPlayerFactory(1);
  const cpu = innerPlayerFactory(2);

  const placeCPUShips = () => {
    const shipTypes = [6, 4, 3, 2];
    console.log('cpu.board is', cpu.board);
    const placeShip = (type) => {
      const x = Math.floor(Math.random() * 9);
      const y = Math.floor(Math.random() * 9);
      const horizVert = Math.floor(Math.random() * 2);
      const result = cpu.board.placeShipOnBoard(x, y, horizVert, type);
      if (result === false) {
        placeShip(type);
      }
      
    }

    shipTypes.forEach(shipType => {
      placeShip(shipType);
    });

    console.log('cpu.board.shipArray = ', cpu.board.shipArray);
  };
  
  placeCPUShips();

  const cpuAttack = () => {
    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    return [x, y];
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
/* harmony import */ var _modules_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/controller */ "./src/modules/controller.js");
/* harmony import */ var _modules_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interface */ "./src/modules/interface.js");



console.log(_modules_interface__WEBPACK_IMPORTED_MODULE_1__.iface)
console.log('conroller is', _modules_controller__WEBPACK_IMPORTED_MODULE_0__.controller)
_modules_interface__WEBPACK_IMPORTED_MODULE_1__.iface.buildInterface();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ0M7O0FBRW5ELFlBQVkscURBQWlCO0FBQzdCLDRCQUE0QiwyREFBVTtBQUN0QyxvRUFBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlcy5jc3M/MTA4MCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29tcG9uZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogU1RZTEVTICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNjJweDtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1yb3RhdGVkIHtcXG4gIGxlZnQ6IC05OHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNydWlzZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtNTlweDtcXG4gIHRvcDogNjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0zOHB4O1xcbiAgdG9wOiA0MXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZnJpZ2F0ZS1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0xOHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGl0LW9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjs7QUFFakI7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDO0FBQ0E7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTs7OztFQUlFLGFBQWE7QUFDZjtBQUNBOzs7Ozs7O0VBT0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogU1RZTEVTICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNjJweDtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1yb3RhdGVkIHtcXG4gIGxlZnQ6IC05OHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNydWlzZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtNTlweDtcXG4gIHRvcDogNjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0zOHB4O1xcbiAgdG9wOiA0MXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZnJpZ2F0ZS1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0xOHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGl0LW9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyBTaGlwRmFjdG9yeSB9IGZyb20gXCIuL1NoaXBGYWN0b3J5XCI7XG5cbmNvbnN0IGJ1aWxkQm9hcmQgPSAoKSA9PiB7XG4gIC8vIGJ1aWxkIGEgMmQgYXJyYXkgcmVwcmVzZW50aW5nIGEgMTB4MTAgZ2FtZSBib2FyZFxuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gaTtcbiAgICBjb25zdCB4QXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHkgPSBpbmRleDtcbiAgICAgIGNvbnN0IHNxID0gbmV3IFNxdWFyZSh4LCB5KTtcbiAgICAgIHhBcnJheS5wdXNoKHNxKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaCh4QXJyYXkpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcE9uQm9hcmQoeCwgeSwgaG9yaXpWZXJ0LCBzaGlwVHlwZSkge1xuICAvLyBtYWtlIGEgbmV3IHNoaXAgYWNjb3JkaW5nIHRvIHNoaXBUeXBlXG4gIGNvbnN0IG5ld1NoaXAgPSBTaGlwRmFjdG9yeS5TaGlwRmFjdG9yeShzaGlwVHlwZSk7XG4gIG5ld1NoaXAuZGlyZWN0aW9uID0gaG9yaXpWZXJ0O1xuICBjb25zdCBuZXdTaGlwTGVuZ3RoID0gbmV3U2hpcC5sZW5ndGg7XG5cbiAgLy8gdGhlIGZvbGxvd2luZyBpZiBzdGF0ZW1lbnRzIGNoZWNrIHRoYXQgdGhpcyBpcyBhIGxlZ2FsIHNoaXAgcGxhY2VtZW50XG4gIGlmIChob3JpelZlcnQgPT09IDApIHtcbiAgICBpZiAoeCArIG5ld1NoaXBMZW5ndGggPiA5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKHkgLSBuZXdTaGlwTGVuZ3RoIDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5jaGVja0Zvck9jY3VwYW50cyh4LCB5LCBob3JpelZlcnQsIG5ld1NoaXBMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhpcy5zaGlwQXJyYXkucHVzaChuZXdTaGlwKTtcblxuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAvLyBsb29wIHRocm91Z2ggbmV3U2hpcExlbmd0aCBzcXVhcmVzIGluXG4gIC8vIHRoZSBkaXJlY3Rpb24gaW5kaWNhdGVkIGJ5IGhvcml6VmVydCwgbW9kaWZ5aW5nIHRoZWlyIG9jY3VwYW50XG4gIC8vIGF0dHJpYnV0ZXMgYWNjb3JkaW5nIHRvIG5ld1NoaXAncyBJRFxuICBjb25zb2xlLmxvZyhcIm5ld1NoaXAgaXNcIiwgbmV3U2hpcCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2hpcExlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld1NoaXAuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAvLyBpLmUuIGlmIHRoaXMgc2hpcCBpcyBwbGFjZWQgaG9yaXpvbnRhbGx5XG4gICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XS5wbGFjZVNoaXBPblNxdWFyZShuZXdTaGlwLnNoaXBJRCk7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0ub2NjdXBhbnQgPT09IG5ld1NoaXAuc2hpcElEKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGUgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseVxuICAgICAgdGhpcy5ib2FyZFt4XVt5IC0gaV0ucGxhY2VTaGlwT25TcXVhcmUobmV3U2hpcC5zaGlwSUQpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSAtIGldLm9jY3VwYW50ID09PSBuZXdTaGlwLnNoaXBJRCkge1xuICAgICAgICByZXN1bHQucHVzaChbeCwgeSAtIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tGbGVldFN1bmsoKSB7XG4gIC8vIExvb3BzIHRocm91Z2ggdGhpcy5zaGlwQXJyYXksIGNoZWNraW5nIGVhY2ggc2hpcHMgLnN1bmsgcHJvcGVydHkuIElmXG4gIC8vIGFueSB1bnN1bmsgc2hpcCBpcyBmb3VuZCwgcmV0dXJucyBmYWxzZSAtIG90aGVyd2lzZSwgcmV0dXJucyB0cnVlLlxuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBBcnJheVtpXTtcbiAgICBpZiAoIXNoaXAuc3Vuaykge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChyZXN1bHQpIHtcbiAgICBhbGVydChcImdhbWUgb3ZlciEhXCIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuZnVuY3Rpb24gZ2V0U2hpcChJRCkge1xuICAvLyBMb29wcyB0aHJvdWdoIHRoaXMuc2hpcEFycmF5LCBjaGVja2luZyBmb3IgYW5kIHJldHVybmluZyB0aGVcbiAgLy8gb2JqZWN0IHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgSUQuXG4gIGNvbnN0IGFycmF5ID0gdGhpcy5zaGlwQXJyYXk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwID0gYXJyYXlbaV07XG4gICAgaWYgKHNoaXAuc2hpcElEID09PSBJRCkge1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XG4gIC8vIHdlIGxvb2sgdXAgdGhlIGdpdmVuIHNxdWFyZS4gaWYgdGhlcmUgaXMgYW4gb2NjdXBhbnQsIHdlIGdldCB0aGUgc2hpcCdzXG4gIC8vIG9iamVjdCB1c2luZyBnZXRTaGlwKCkgYW5kIGNhbGwgaXRzIGhpdCgpIG1ldGhvZFxuICBjb25zdCB4ID0gY29vcmRzWzBdO1xuICBjb25zdCB5ID0gY29vcmRzWzFdO1xuICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllclR5cGU7XG4gIGlmICh0aGlzLmJvYXJkW3hdW3ldLmhpdCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAodGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudCk7XG4gICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuICAgIGNvbnN0IHN0YXR1cyA9IHNoaXAuaGl0KCk7XG4gICAgbGV0IGNoZWNrRmxlZXQ7XG4gICAgaWYgKHBsYXllciA9PT0gMSkge1xuICAgICAgY29uc3QgY2hlY2tQbGF5ZXJGbGVldFN1bmsgPSBjaGVja0ZsZWV0U3Vuay5iaW5kKHBsYXllckJvYXJkKTtcbiAgICAgIGNoZWNrRmxlZXQgPSBjaGVja1BsYXllckZsZWV0U3VuaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGVja0NwdUZsZWV0U3VuayA9IGNoZWNrRmxlZXRTdW5rLmJpbmQoY3B1Qm9hcmQpO1xuICAgICAgY2hlY2tGbGVldCA9IGNoZWNrQ3B1RmxlZXRTdW5rKCk7XG4gICAgfVxuICAgIGlmIChjaGVja0ZsZWV0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gXCJnYW1lT3ZlclwiO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSBcInN1bmtcIikge1xuICAgICAgcmV0dXJuIFwic3Vua1wiO1xuICAgIH1cbiAgICByZXR1cm4gXCJoaXRcIjtcbiAgfVxuICB0aGlzLmJvYXJkW3hdW3ldLmhpdCA9IHRydWU7XG4gIHJldHVybiBcIm1pc3NcIjtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JPY2N1cGFudHMoeCwgeSwgaG9yaXpWZXJ0LCBsZW5ndGgpIHtcbiAgaWYgKGhvcml6VmVydCA9PT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJvYXJkW3ggKyBpXVt5XTtcbiAgICAgIGlmIChlbGVtZW50Lm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ib2FyZFt4XVt5IC0gaV07XG4gICAgICBpZiAoZWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkZWxldGVTaGlwKElEKSB7XG4gIC8vIGxvb3BzIHRocm91Z2ggdGhpcy5zaGlwQXJyYXkuIHVwb24gZmluZGluZyBzaGlwIHdpdGggdGhlIGdpdmVuIElELFxuICAvLyBkZWxldGVzIGl0XG4gIGNvbnN0IGFycmF5ID0gdGhpcy5zaGlwQXJyYXk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwID0gYXJyYXlbaV07XG4gICAgaWYgKHNoaXAuc2hpcElEID09PSBJRCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwaW5TdG9yYWdlKHgsIHkpIHtcbiAgLy8gZmluZCB0aGUgc2hpcCBhdCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgYW5kIGdldCBpdHMgZGlyZWN0aW9uXG4gIGNvbnN0IHNoaXBJRCA9IHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQ7XG4gIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAodGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudCk7XG4gIGNvbnN0IGRpciA9IHNoaXAuZGlyZWN0aW9uO1xuXG4gIC8vIGRlbGV0ZSB0aGUgc2hpcCBmcm9tIHNoaXBBcnJheVxuICBjb25zb2xlLmxvZyhcInJvdGF0aW5nIHNoaXAhIHRoaXMgaXNcIiwgdGhpcyk7XG4gIHRoaXMuZGVsZXRlU2hpcChzaGlwSUQpO1xuXG4gIGxldCByZXN1bHQ7XG5cbiAgaWYgKGRpciA9PT0gMCkge1xuICAgIC8vIGlmIHRoZSBzaGlwIGlzIGhvcml6b250YWwsIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCBob3Jpem9udGFsbHlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHhFbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nIHNxdWFyZXMhIHhFbGVtZW50Lm9jY3VwYW50ID1cIiwgeEVsZW1lbnQpO1xuICAgICAgeEVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgICAgY29uc29sZS5sb2coXCJjbGVhcmVkIHNxdWFyZSEgeEVsZW1lbnQub2NjdXBhbnQgPVwiLCB4RWxlbWVudCk7XG4gICAgfVxuICAgIC8vIGNoZWNrIHRoYXQgdGhlIHNxdWFyZXMgd2Ugd2lsbCBwbGFjZSB0aGUgc2hpcCBpbiBhcmUgbm90IG9jY3VwaWVkXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSArIGldO1xuICAgICAgaWYgKHlFbGVtZW50Lm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5RWxlbWVudCBpcyAnLCB5RWxlbWVudClcbiAgICAgICAgY29uc29sZS5sb2coJ3lFbGVtZW50Lm9jY3VwYW50IGlzICcsIHlFbGVtZW50Lm9jY3VwYW50LCAnbm90IG51bGwnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGhhdmluZyByZW1vdmVkIHRoZSBzaGlwLCBwbGFjZSBpdCB3aXRoIHRoZSBuZXcgZGlyZWN0aW9uXG4gICAgcmVzdWx0ID0gdGhpcy5wbGFjZVNoaXBPbkJvYXJkKHgsIHksIDEsIHNoaXAubGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBlbHNlIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSArIGldO1xuICAgICAgY29uc29sZS5sb2coXCJjbGVhcmluZyBzcXVhcmVzISB5RWxlbWVudC5vY2N1cGFudCA9XCIsIHlFbGVtZW50Lm9jY3VwYW50KTtcbiAgICAgIHlFbGVtZW50Lm9jY3VwYW50ID0gbnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJlZCBzcXVhcmUhIHlFbGVtZW50Lm9jY3VwYW50ID1cIiwgeUVsZW1lbnQub2NjdXBhbnQpO1xuICAgIH1cbiAgICAvLyBjaGVjayB0aGF0IHRoZSBzcXVhcmVzIHdlIHdpbGwgcGxhY2UgdGhlIHNoaXAgaW4gYXJlIG5vdCBvY2N1cGllZFxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4RWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgaWYgKHhFbGVtZW50Lm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd4RWxlbWVudCBpcyAnLCB4RWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd4RWxlbWVudC5vY2N1cGFudCBpcyAnLCB4RWxlbWVudC5vY2N1cGFudCwgJ25vdCBudWxsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBoYXZpbmcgcmVtb3ZlZCB0aGUgc2hpcCwgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgZGlyZWN0aW9uXG4gICAgcmVzdWx0ID0gdGhpcy5wbGFjZVNoaXBPbkJvYXJkKHgsIHksIDAsIHNoaXAubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5jbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBidWlsZEJvYXJkKCk7XG4gICAgdGhpcy5zaGlwQXJyYXkgPSBbXTtcbiAgICB0aGlzLnBsYWNlU2hpcE9uQm9hcmQgPSBwbGFjZVNoaXBPbkJvYXJkO1xuICAgIHRoaXMuY2hlY2tGb3JPY2N1cGFudHMgPSBjaGVja0Zvck9jY3VwYW50cztcbiAgICB0aGlzLnJlY2VpdmVBdHRhY2sgPSByZWNlaXZlQXR0YWNrO1xuICAgIHRoaXMuZ2V0U2hpcCA9IGdldFNoaXA7XG4gICAgdGhpcy5jaGVja0ZsZWV0U3VuayA9IGNoZWNrRmxlZXRTdW5rO1xuICAgIHRoaXMucm90YXRlU2hpcGluU3RvcmFnZSA9IHJvdGF0ZVNoaXBpblN0b3JhZ2U7XG4gICAgdGhpcy5kZWxldGVTaGlwID0gZGVsZXRlU2hpcDtcbiAgfVxufVxuXG5jbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgeCA9IHggfHwgMDsgLy8gY29udmVydHMgZmFsc2V5IHZhbHVlcyB0byAwIChpbiB0aGlzIGNhc2UsIE5hTilcbiAgICB0aGlzLnh5ID0gW3gsIHldO1xuICAgIHRoaXMub2NjdXBhbnQgPSBudWxsO1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gIH1cblxuICBwbGFjZVNoaXBPblNxdWFyZShzaGlwSUQpIHtcbiAgICB0aGlzLm9jY3VwYW50ID0gc2hpcElEO1xuICB9XG59XG5cbmNvbnN0IHBsYXllckJvYXJkID0gbmV3IEJvYXJkKCk7XG5jb25zdCBjcHVCb2FyZCA9IG5ldyBCb2FyZCgpO1xuXG4vKmNvbnN0IGNoZWNrUGxheWVyRmxlZXRTdW5rID0gY2hlY2tGbGVldFN1bmsuYmluZChwbGF5ZXJCb2FyZCk7XG5jb25zb2xlLmxvZygnY2hlY2tQbGF5ZXJGbGVldFN1bmsgaXMnLCBjaGVja1BsYXllckZsZWV0U3VuaylcbmNvbnNvbGUubG9nKCdjaGVja3BsYXllckZsZWV0U3VuaygpIGlzJywgY2hlY2tQbGF5ZXJGbGVldFN1bmsoKSlcbmNvbnN0IGNoZWNrQ3B1RmxlZXRTdW5rID0gY2hlY2tGbGVldFN1bmsuYmluZChjcHVCb2FyZCk7XG5jb25zb2xlLmxvZygnY2hlY2tDcHVGbGVldFN1bmsgaXMnLCBjaGVja0NwdUZsZWV0U3VuaykqL1xuXG5leHBvcnQge1xuICBidWlsZEJvYXJkLFxuICBwbGFjZVNoaXBPbkJvYXJkLFxuICBjaGVja0ZsZWV0U3VuayxcbiAgZ2V0U2hpcCxcbiAgcmVjZWl2ZUF0dGFjayxcbiAgY2hlY2tGb3JPY2N1cGFudHMsXG4gIGRlbGV0ZVNoaXAsXG4gIHBsYXllckJvYXJkLFxuICBjcHVCb2FyZCxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbmV4cG9ydCBjb25zdCBTaGlwRmFjdG9yeSA9ICgoKSA9PiB7XG4gIGxldCBzaGlwQ291bnRlciA9IC0xO1xuICBjb25zdCBTaGlwRmFjdG9yeSA9IChzaGlwVHlwZSkgPT4ge1xuICAgIHNoaXBDb3VudGVyICs9IDE7XG4gICAgY29uc3Qgc2hpcElEID0gc2hpcENvdW50ZXI7XG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IGxlbmd0aDtcbiAgICBsZXQgaHA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHNoaXBUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHR5cGUgPSBcIlNpbmsgdGVzdFwiO1xuICAgICAgICBsZW5ndGggPSA2O1xuICAgICAgICBocCA9IDE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHR5cGUgPSBcIkZyaWdhdGVcIjtcbiAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgaHAgPSAyO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICB0eXBlID0gXCJEZXN0cm95ZXJcIjtcbiAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgaHAgPSAzO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICB0eXBlID0gXCJDcnVpc2VyXCI7XG4gICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgIGhwID0gNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHR5cGUgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgbGVuZ3RoID0gNjtcbiAgICAgICAgaHAgPSA2O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBsZW5ndGgsXG4gICAgICBocCxcbiAgICAgIHN1bmssXG4gICAgICBzaGlwSUQsXG4gICAgICBjaGVja1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgfSxcbiAgICAgIGhpdCgpIHtcbiAgICAgICAgaHAgLT0gMTtcbiAgICAgICAgaWYgKGhwID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gXCJzdW5rXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIHJldHVybiB7IFNoaXBGYWN0b3J5IH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZygnY29tcG9uZW50RmFjdG9yeSBjYWxsZWQgd2l0aCBlbGVtZW50ID0gJywgZWxlbWVudCk7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIG5vZGVUeXBlLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0LFxuICAgIGlucHV0VHlwZSxcbiAgICB2YWx1ZSxcbiAgICBjbGFzczEsXG4gICAgY2xhc3MyLFxuICAgIGNsYXNzMyxcbiAgICB0YXNrSUQsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaWQsXG4gICAgeHksXG4gICAgYWxsb3dEcm9wLFxuICB9ID0gZWxlbWVudDtcbiAgY29uc3QgY3JlYXRlRE9NTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuICAgIGNvbnN0IG5ld0RPTU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RE9NTm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaW5wdXRUeXBlKSB7XG4gICAgICBuZXdET01Ob2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RE9NTm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2xhc3MxKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MxKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMikge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgfVxuICAgIGlmIChjbGFzczMpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczMpO1xuICAgIH1cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIG5ld0RPTU5vZGUucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIG5ld0RPTU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50IGhhcyBpZCEgaWQgPSAnLCBpZCk7XG4gICAgICBuZXdET01Ob2RlLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgaWYgKHh5KSB7XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQueCA9IHh5WzBdO1xuICAgICAgbmV3RE9NTm9kZS5kYXRhc2V0LnkgPSB4eVsxXTtcbiAgICAgIG5ld0RPTU5vZGUuZGF0YXNldC5zcW51bSA9IHh5WzJdO1xuICAgIH1cbiAgICBpZiAoYWxsb3dEcm9wKSB7XG4gICAgICBuZXdET01Ob2RlLnNldEF0dHJpYnV0ZShcIm9uZHJvcFwiLCBcImRyb3AoZXZlbnQpXCIpO1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoXCJvbmRyYWdvdmVyXCIsIFwiYWxsb3dEcm9wKGV2ZW50KVwiKTtcbiAgICB9XG4gICAgcGFyZW50Tm9kZS5hcHBlbmQobmV3RE9NTm9kZSk7XG4gIH07XG4gIGNyZWF0ZURPTU5vZGUoKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgbm9kZVR5cGUsXG4gICAgcGFyZW50LFxuICAgIHRleHQsXG4gICAgaW5wdXRUeXBlLFxuICAgIHZhbHVlLFxuICAgIGNsYXNzMSxcbiAgICBjbGFzczIsXG4gICAgdGFza0lELFxuICB9O1xufTtcblxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBwbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaWZhY2UgZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmNsYXNzIFRvcGljIHtcbiAgY29uc3RydWN0b3IodG9waWMpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW107XG4gIH1cbn1cblxuY2xhc3MgUHViU3ViIHtcbiAgc3ViKHRvcGljLCBzdWJzY3JpYmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJzdWIhIHRvcGljIGlzXCIsIHRvcGljKTtcbiAgICBpZiAodHlwZW9mIHN1YnNjcmliZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCBmb3Igc3Vic2NyaWJlcnNgO1xuICAgIH1cbiAgICBpZiAoIXRoaXNbdG9waWNdKSB7XG4gICAgICB0aGlzW3RvcGljXSA9IG5ldyBUb3BpYygpO1xuICAgIH1cbiAgICB0aGlzW3RvcGljXS5zdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgIGNvbnNvbGUubG9nKFwic3ViYmVkISB0aGlzW3RvcGljXSA9IFwiLCB0aGlzW3RvcGljXSk7XG4gIH1cblxuICB1bnN1Yih0b3BpYywgc3Vic2NyaWJlcikge1xuICAgIGlmICh0eXBlb2Ygc3Vic2NyaWJlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gYCR7dHlwZW9mIHN1YnNjcmliZXJ9IGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50IGZvciB1bnN1YnNjcmliaW5nYDtcbiAgICB9XG4gICAgaWYgKHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLmluY2x1ZGVzKHN1YnNjcmliZXIpKSB7XG4gICAgICB0aGlzW3RvcGljXS5zdWJzY3JpYmVycyA9IHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLmZpbHRlcihcbiAgICAgICAgKHN1YikgPT4gc3ViICE9PSBzdWJzY3JpYmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1Yih0b3BpYywgcGF5bG9hZCkge1xuICAgIGNvbnNvbGUubG9nKFwicHViIGNhbGxlZCEgdG9waWMsIHBheWxvYWQgYXJlIFwiLCB0b3BpYywgcGF5bG9hZCk7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIFwiLCB0aGlzKTtcbiAgICB0aGlzW3RvcGljXS5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWIpID0+IHN1YihwYXlsb2FkKSk7XG4gIH1cblxuICByZXR1cm5TdWJzY3JpYmVycyh0b3BpYykge1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuU3Vic2NyaWJlcnMgY2FsbGVkISB0b3BpYyBpcyBcIiwgdG9waWMsIFwidGhpcyBpcyBcIiwgdGhpcyk7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3ViKSA9PiByZXN1bHQucHVzaChzdWIpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXJ2ID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS5sb2coXCJub3RpZmljYXRpb24gc2VydmVyISBhcmdzWzBdWzBdIGlzIFwiLCBhcmdzWzBdWzBdKTtcbiAgaWYgKGFyZ3NbMF0gPT09IFwic2hpcHNQbGFjZWRcIikge1xuICAgIGNvbnNvbGUubG9nKFwic2hpcHNQbGFjZWQgbm90aWZpY2F0aW9uIHJlY2VpdmVkIVwiKTtcbiAgfVxuXG4gIGlmIChhcmdzWzBdWzBdID09PSBcInNoaXBEcm9wcGVkXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcInNoaXBEcm9wcGVkIG5vdGlmaWNhdGlvbiByZWNlaXZlZCFcIik7XG4gIH1cbn07XG5cbi8qY29udHJvbGxlci5wdWJTdWIucHViKFwicGxhY2VTaGlwXCIsIFtOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KSxcbiAgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSksXG4gIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0LmRpcmVjdGlvbiksXG4gIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0Lmxlbmd0aCldICkqL1xuXG5jb25zdCBwdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5cbmNvbnN0IGNvaW5GbGlwID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuXG4vLyBFdmVudCBlbWl0dGVyIGZvciBwdWIvc3ViIGltcGxlbWVudGF0aW9uXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBwdWxscyBpbiBwbGF5ZXJzIGFuZCBib2FyZCBmcm9tIHBsYXllckZhY3RvcnlcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJGYWN0b3J5KCk7XG4gICAgLy8gZmxpcHMgYSBjb2luIHRvIGRldGVybWluZSB3aG8gZ29lcyBmaXJzdFxuICAgIHRoaXMuY3VycmVudFBsYXllciA9IGNvaW5GbGlwKCk7XG4gICAgdGhpcy5zaGlwc1BsYWNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXBQbGFjZWRDb3VudCA9IDA7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgaWYgKGNvaW5GbGlwKCkgPT09IDEpIHtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMik7XG4gICAgfVxuICB9XG5cbiAgZ2FtZUZsb3cod2hvc2VUdXJuKSB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBpcyBvdmVyIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdob3NlVHVybiA9PT0gMSkge1xuICAgICAgLy8gcHJvbXB0IHBsYXllciBmb3IgYSBtb3ZlXG4gICAgICBpZmFjZS5nZXRQbGF5ZXJNb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHByb21wdCBjcHUgZm9yIGEgbW92ZVxuICAgICAgZ2V0Q1BVTW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRlc3RTaGlwcygpIHtcbiAgICB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMCwgMCwgNik7XG4gICAgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDEsIDAsIDQpO1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAyLCAwLCAzKTtcbiAgICB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMywgMCwgMik7XG4gICAgdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAwLCAwLCA2KTtcbiAgICB0aGlzLnBsYXllcnMuY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDEsIDAsIDQpO1xuICAgIHRoaXMucGxheWVycy5jcHUuYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMiwgMCwgMyk7XG4gICAgdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAzLCAwLCAyKTtcbiAgfVxuXG4gIHNoaXBQbGFjZWQoKSB7XG4gICAgdGhpcy5zaGlwUGxhY2VkQ291bnQgKz0gMTtcbiAgICBpZiAodGhpcy5zaGlwUGxhY2VkQ291bnQgPT09IDQpIHtcbiAgICAgIHRoaXMuc2hpcHNQbGFjZWQgPSB0cnVlO1xuICAgICAgcHViU3ViLnB1YihcInNoaXBzUGxhY2VkXCIsIGlmYWNlLnNoaXBzUGxhY2VkKTtcbiAgICB9XG4gIH1cblxuICBwbGF5ZXJzTW92ZShtb3ZlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgIGlmYWNlLm1hcmtTcXVhcmVIaXQobW92ZVswXSwgbW92ZVsxXSwgdHJ1ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAgICAgaWZhY2UubWFya1NxdWFyZUhpdChtb3ZlWzBdLCBtb3ZlWzFdLCBmYWxzZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcInN1bmtcIikge1xuICAgICAgaWZhY2UubWFya1NxdWFyZUhpdChtb3ZlWzBdLCBtb3ZlWzFdLCB0cnVlLCBmYWxzZSk7XG4gICAgICBpZmFjZS5zdW5rKG1vdmVbMF0sIG1vdmVbMV0sIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJnYW1lT3ZlclwiKSB7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZVxuICAgICAgaWZhY2UuZ2FtZU92ZXIoJ1lvdSB3aW4nKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICBpZmFjZS5pbnZhbGlkTW92ZSgxKTtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMSk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUZsb3coMik7XG4gIH1cblxuICBnZXRDUFVNb3ZlKCkge1xuICAgIGNvbnN0IG1vdmUgPSB0aGlzLnBsYXllcnMuY3B1LmF0dGFjaygpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgIGlmYWNlLm1hcmtTcXVhcmVIaXQobW92ZVswXSwgbW92ZVsxXSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICBpZmFjZS5tYXJrU3F1YXJlSGl0KG1vdmVbMF0sIG1vdmVbMV0sIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzdW5rXCIpIHtcbiAgICAgIGlmYWNlLm1hcmtTcXVhcmVIaXQobW92ZVswXSwgbW92ZVsxXSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZmFjZS5zdW5rKHRydWUpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImdhbWVPdmVyXCIpIHtcbiAgICAgIGlmYWNlLmdhbWVPdmVyKCdUaGUgY29tcHV0ZXIgd2lucyEnKTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImZhbHNlXCIpIHtcbiAgICAgIGdldENQVU1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lRmxvdygxKTtcbiAgfVxuXG4gIHBsYWNlSHVtYW4oc2hpcCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5wbGFjZVNoaXBPbkJvYXJkKFxuICAgICAgc2hpcFswXSxcbiAgICAgIHNoaXBbMV0sXG4gICAgICBzaGlwWzJdLFxuICAgICAgc2hpcFszXVxuICAgICk7XG4gICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIHBsYWNlZFNoaXAoKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cbmNvbnN0IHBsYWNlZFNoaXAgPSBjb250cm9sbGVyLnNoaXBQbGFjZWQuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IHN0YXJ0R2FtZSA9IGNvbnRyb2xsZXIuc3RhcnRHYW1lLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBwbGF5ZXJzTW92ZSA9IGNvbnRyb2xsZXIucGxheWVyc01vdmUuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IGdldENQVU1vdmUgPSBjb250cm9sbGVyLmdldENQVU1vdmUuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IHBsYWNlSHVtYW5TaGlwID0gY29udHJvbGxlci5wbGFjZUh1bWFuLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCByb3RhdGVTaGlwID0gY29udHJvbGxlci5yb3RhdGVTaGlwLmJpbmQoY29udHJvbGxlcik7XG5cbnB1YlN1Yi5zdWIoXCJwbGFjZVNoaXBcIiwgcGxhY2VIdW1hblNoaXApO1xucHViU3ViLnN1YihcInNoaXBzUGxhY2VkXCIsIGlmYWNlLnNoaXBzUGxhY2VkKTtcbnB1YlN1Yi5zdWIoXCJnYW1lU3RhcnRcIiwgc3RhcnRHYW1lKTtcbnB1YlN1Yi5zdWIoXCJnZXRQbGF5ZXJzTW92ZVwiLCBpZmFjZS5nZXRQbGF5ZXJNb3ZlKTtcbnB1YlN1Yi5zdWIoXCJwbGF5ZXJzTW92ZVwiLCBwbGF5ZXJzTW92ZSk7XG5wdWJTdWIuc3ViKFwicm90YXRlU2hpcFwiLCByb3RhdGVTaGlwKTtcbmNvbnNvbGUubG9nKFwic3VicyBhcmVcIiwgcHViU3ViLnJldHVyblN1YnNjcmliZXJzKFwicGxhY2VTaGlwXCIpKTtcblxuZXhwb3J0IHsgcHViU3ViIH07XG4iLCJleHBvcnQgY29uc3QgZGlzcGxheU9iamVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIm1haW5cIixcbiAgICBub2RlVHlwZTogXCJtYWluXCIsXG4gICAgcGFyZW50OiBcImJvZHlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY29udGVudENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCJtYWluXCIsXG4gICAgY2xhc3MxOiBcImNvbnRlbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibWFpblRpdGxlXCIsXG4gICAgbm9kZVR5cGU6IFwiaDFcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwidGl0bGVcIixcbiAgICB0ZXh0OiBcIkJBVFRMRVNISVBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3RhcnRHYW1lXCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwic3RhcnQtYnV0dG9uXCIsXG4gICAgaW5wdXRUeXBlOiBcImJ1dHRvblwiLFxuICAgIHZhbHVlOiBcIkNsaWNrIHRvIHN0YXJ0XCIsXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBzaGlwUGxhY2VtZW50ID0gW1xuICB7XG4gICAgbmFtZTogXCJwbGFjZW1lbnRUaXRsZVwiLFxuICAgIG5vZGVUeXBlOiBcImgxXCIsXG4gICAgcGFyZW50OiBcIi5jb250ZW50XCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC10aXRsZVwiLFxuICAgIHRleHQ6IFwiUGxhY2UgeW91ciBzaGlwc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJwbGFjZW1lbnRDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIiwgXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicGxhY2VtZW50R3JpZFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJwbGFjZW1lbnQtZ3JpZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzaGlwc0NvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwcy1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3RhcnRHYW1lXCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3RhcnQtZ2FtZVwiLFxuICAgIGlucHV0VHlwZTogXCJidXR0b25cIixcbiAgICB2YWx1ZTogXCJTdGFydCBHYW1lXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImdhbWVBbGVydENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJnYW1lLWFsZXJ0LWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJwbGF5ZXJBbGVydHNcIixcbiAgICBub2RlVHlwZTogXCJoM1wiLFxuICAgIHBhcmVudDogXCIuZ2FtZS1hbGVydC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwicGxheWVyLWFsZXJ0XCIsXG4gICAgdGV4dDogXCJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY3B1QWxlcnRzXCIsXG4gICAgbm9kZVR5cGU6IFwiaDNcIixcbiAgICBwYXJlbnQ6IFwiLmdhbWUtYWxlcnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImNwdS1hbGVydFwiLFxuICAgIHRleHQ6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInBsYWNlbWVudEdyaWRTcXVhcmVcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1ncmlkXCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1ncmlkLXNxdWFyZVwiLFxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBzaGlwcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQmF0dGxlc2hpcFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuc2hpcHMtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInNoaXAtcGxhY2VtZW50XCIsXG4gICAgY2xhc3MyOiBcImJhdHRsZXNoaXAtcGxhY2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNydWlzZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJjcnVpc2VyLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZXN0cm95ZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJkZXN0cm95ZXItcGxhY2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZyaWdhdGVcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJmcmlnYXRlLXBsYWNlbWVudFwiLFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgY3B1ID0gW1xuICB7XG4gICAgbmFtZTogXCJjcHVCb2FyZFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcHUtYm9hcmRcIixcbiAgfVxuXSIsImltcG9ydCB7IGNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9jb21wb25lbnRGYWN0b3J5XCI7XG5pbXBvcnQgeyBkaXNwbGF5T2JqZWN0cywgc2hpcFBsYWNlbWVudCwgc2hpcHMsIGNwdSB9IGZyb20gXCIuL2Rpc3BsYXlPYmplY3RzXCI7XG5pbXBvcnQgQ3J1aXNlciBmcm9tIFwiLi4vcmVzb3VyY2VzL0NydWlzZXIucG5nXCI7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tIFwiLi4vcmVzb3VyY2VzL0JhdHRsZXNoaXAucG5nXCI7XG5pbXBvcnQgRGVzdHJveWVyIGZyb20gXCIuLi9yZXNvdXJjZXMvRGVzdHJveWVyLnBuZ1wiO1xuaW1wb3J0IEZyaWdhdGUgZnJvbSBcIi4uL3Jlc291cmNlcy9GcmlnYXRlLnBuZ1wiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEdyaWQocGxheWVyKSB7XG4gIGxldCBzcU51bSA9IDA7XG4gIGxldCBodW1hblNxTnVtID0gMDtcbiAgbGV0IGNwdVNxTnVtID0gMDtcbiAgZm9yIChsZXQgaSA9IDk7IGkgPiAtMTsgaS0tKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBuZXdTcXVhcmUgPSBzaGlwUGxhY2VtZW50W3NoaXBQbGFjZW1lbnQubGVuZ3RoIC0gMV07XG4gICAgICBuZXdTcXVhcmUueHkgPSBbaiwgaSwgc3FOdW0sIHBsYXllcl07XG4gICAgICBzcU51bSArPSAxO1xuICAgICAgaWYgKHBsYXllciA9PT0gMSkge1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MyID0gXCJwbGF5ZXItZ3JpZC1zcXVhcmVcIjtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMyA9IGBwbGF5ZXItZ3JpZC1zcXVhcmUtJHtqfS0ke2l9YDtcbiAgICAgICAgaHVtYW5TcU51bSArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMiA9IFwiY3B1LWdyaWQtc3F1YXJlXCI7XG4gICAgICAgIG5ld1NxdWFyZS5wYXJlbnQgPSBcIi5jcHUtYm9hcmRcIjtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMyA9IGBjcHUtZ3JpZC1zcXVhcmUtJHtqfS0ke2l9YDtcbiAgICAgICAgY3B1U3FOdW0gKz0gMTtcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudEZhY3RvcnkobmV3U3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2hpcHMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNoaXBzW2ldO1xuXG4gICAgY29tcG9uZW50RmFjdG9yeShlbGVtZW50KTtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBcIkJhdHRsZXNoaXBcIjpcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5jbGFzczJ9YCkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz0ke0JhdHRsZXNoaXB9IGFsdD0ke2VsZW1lbnQubmFtZX0gZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZHJhZ2dhYmxlXCIgaWQ9XCJCYXR0bGVzaGlwXCIgZGF0YS1sZW5ndGg9XCI2XCIgZGF0YS1kaXJlY3Rpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJDcnVpc2VyXCI6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MyfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtDcnVpc2VyfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiQ3J1aXNlclwiICBkYXRhLWxlbmd0aD1cIjRcIiBkYXRhLWRpcmVjdGlvbj1cIjBcIj5gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkRlc3Ryb3llclwiOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMn1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7RGVzdHJveWVyfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiRGVzdHJveWVyXCIgIGRhdGEtbGVuZ3RoPVwiM1wiIGRhdGEtZGlyZWN0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMn1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7RnJpZ2F0ZX0gYWx0PSR7ZWxlbWVudC5uYW1lfSBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3M9XCJkcmFnZ2FibGVcIiBpZD1cIkZyaWdhdGVcIiAgZGF0YS1sZW5ndGg9XCIyXCIgZGF0YS1kaXJlY3Rpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwc1BsYWNlZCgpIHtcbiAgY29uc29sZS5sb2coXCJzaGlwc1BsYWNlZCgpIGNhbGxlZCEgYWRkaW5nIGV2ZW50IGxpc3RlbmVyXCIpO1xuICBjb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGVcIik7XG4gIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmFnZ2FibGUgPSBcIiwgZHJhZ2dhYmxlKTtcbiAgICBjb25zb2xlLmxvZyhcImRyYWJiYWxlLnBhcmVudEVsZW1lbnQgPSBcIiwgZHJhZ2dhYmxlLnBhcmVudEVsZW1lbnQpO1xuICAgIC8vIHVzaW5nIHRoZSB4IGFuZCB5IGRhdGEgYXR0cmlidXRlcyBvZiB0aGUgcGFyZW50IGVsZW1lbnQsXG4gICAgLy8gd2UgY2FuIGRldGVybWluZSB3aGV0aGVyIHRoZSBzaGlwcycgcG9zaXRpb25zIG9uIHRoZSBib2FyZCBhcmUgdmFsaWRcbiAgfSk7XG4gIGNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZVwiKTtcbiAgc3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWlsZE1haW5HYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVNoaXBpblN0b3JhZ2UoeCwgeSkge1xuICBjb250cm9sbGVyLnJvdGF0ZVNoaXBpblN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICBjb25zb2xlLmxvZyhcInJvdGF0ZVNoaXAhIGUudGFyZ2V0IGlzXCIsIGUudGFyZ2V0KTtcbiAgY29uc29sZS5sb2coXG4gICAgXCJyb3RhdGVTaGlwISBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZCBpc1wiLFxuICAgIGNvbnRyb2xsZXIuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkXG4gICk7XG4gIGNvbnN0IHNoaXAgPSBlLnRhcmdldDtcbiAgY29uc29sZS5sb2coXCJyb3RhdGVTaGlwISBzaGlwIGlzXCIsIHNoaXApO1xuICBjb25zdCBwYXJlbnQgPSBzaGlwLnBhcmVudE5vZGU7XG4gIGNvbnN0IHBhcmVudFggPSBOdW1iZXIocGFyZW50LmRhdGFzZXQueCk7XG4gIGNvbnN0IHBhcmVudFkgPSBOdW1iZXIocGFyZW50LmRhdGFzZXQueSk7XG4gIHN3aXRjaCAoTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKSkge1xuICAgIGNhc2UgNjpcbiAgICAgIGlmIChzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID09PSBcIjBcIikge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIxXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXAtcm90YXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjBcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJiYXR0bGVzaGlwLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5yb3RhdGVTaGlwKHBhcmVudFgsIHBhcmVudFkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDQ6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJjcnVpc2VyLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiY3J1aXNlci1yb3RhdGVkXCIpO1xuICAgICAgfVxuICAgICAgY29udHJvbGxlci5odW1hbi5ib2FyZC5nYW1lQm9hcmQucm90YXRlU2hpcChwYXJlbnRYLCBwYXJlbnRZKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzdHJveWVyLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5yb3RhdGVTaGlwKHBhcmVudFgsIHBhcmVudFkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZnJpZ2F0ZS1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImZyaWdhdGUtcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xsZXIuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnJvdGF0ZVNoaXAocGFyZW50WCwgcGFyZW50WSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNwdUF0dGFjaygpIHtcbiAgbGV0IHN1Y2Nlc3NmdWxBdHRhY2sgPSBmYWxzZTtcbiAgd2hpbGUgKCFzdWNjZXNzZnVsQXR0YWNrKSB7XG4gICAgY29uc3QgYXR0YWNrID0gY29udHJvbGxlci5jcHUuYXR0YWNrKCk7XG4gICAgaWYgKGF0dGFjaykge1xuICAgICAgc3VjY2Vzc2Z1bEF0dGFjayA9IHRydWU7XG4gICAgICBhZGRBdHRhY2tMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNrKGUpIHtcbiAgY29uc29sZS5sb2coXCJlLnRhcmdldCBpc1wiLCBlLnRhcmdldCk7XG4gIGNvbnN0IHggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcbiAgY29uc3QgeSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuICBjb25zb2xlLmxvZyhcInggaXNcIiwgeCk7XG4gIGNvbnNvbGUubG9nKFwieSBpc1wiLCB5KTtcbiAgcHViU3ViLnB1YihcInBsYXllcnNNb3ZlXCIsIFt4LCB5XSk7XG5cbiAgLypjb25zdCBodW1hbkF0dGFja1Jlc3VsdCA9IGNvbnRyb2xsZXIuaHVtYW4uYXR0YWNrKHgsIHkpO1xuICBpZiAoaHVtYW5BdHRhY2tSZXN1bHQpIHtcbiAgICByZW1vdmVBdHRhY2tMaXN0ZW5lcnMoKTtcbiAgfVxuICBjb25zb2xlLmxvZyhcImh1bWFuQXR0YWNrUmVzdWx0IGlzXCIsIGh1bWFuQXR0YWNrUmVzdWx0KTsqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXR0YWNrTGlzdGVuZXJzKCkge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtZ3JpZC1zcXVhcmVcIik7XG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICB9KTtcbn1cblxuLypleHBvcnQgZnVuY3Rpb24gbWlzcyhtb3ZlLCBwbGF5ZXIpIHtcbiAgY29uc29sZS5sb2coJ21pc3MhIGNoZWNrIHNxdWFyZScpXG4gIGlmIChwbGF5ZXIgPT09IDEpIHsgXG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNwdS1ncmlkLXNxdWFyZS0ke21vdmVbMF19LSR7bW92ZVsxXX1gKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1ncmlkLXNxdWFyZS0ke21vdmVbMF19LSR7bW92ZVsxXX1gKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gIH1cbn0qL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXR0YWNrTGlzdGVuZXJzKCkge1xuICBjb25zb2xlLmxvZyhcImFkZEF0dGFja0xpc3RlbmVycyEpXCIpO1xuICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3B1LWdyaWQtc3F1YXJlXCIpO1xuICBncmlkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjayk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vuayhpc1BsYXllckJvYXJkKSB7XG4gIGlmICghaXNQbGF5ZXJCb2FyZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LWFsZXJ0XCIpLnRleHRDb250ZW50ID1cbiAgICAgIFwiVGhlIGNvbXB1dGVyIHN1bmsgeW91ciBzaGlwIVwiO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWFsZXJ0XCIpLnRleHRDb250ZW50ID1cbiAgICAgIFwiWW91IHN1bmsgYW4gZW5lbXkgc2hpcCFcIjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya1NxdWFyZUhpdCh4LCB5LCBpc09jY3VwaWVkLCBpc1BsYXllckJvYXJkKSB7XG4gIGxldCBzcXVhcmU7XG5cbiAgaWYgKGlzUGxheWVyQm9hcmQpIHtcbiAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLWdyaWQtc3F1YXJlLSR7eH0tJHt5fWApO1xuICAgIGNvbnNvbGUubG9nKFwic3F1YXJlIGlzXCIsIHNxdWFyZSk7XG4gICAgaWYgKGlzT2NjdXBpZWQpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LW9jY3VwaWVkXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcHUtYWxlcnRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICBcIlRoZSBjb21wdXRlciBoaXQgeW91ciBzaGlwIVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1lbXB0eVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LWFsZXJ0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJUaGUgY29tcHV0ZXIgaGl0IGFuIGVtcHR5IHNxdWFyZSFcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNwdS1ncmlkLXNxdWFyZS0ke3h9LSR7eX1gKTtcbiAgICBjb25zb2xlLmxvZyhcInNxdWFyZSBpc1wiLCBzcXVhcmUpO1xuICAgIGlmIChpc09jY3VwaWVkKSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1vY2N1cGllZFwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWFsZXJ0XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJZb3UgaGl0IGFuIGVuZW15IHNoaXAhXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LWVtcHR5XCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYWxlcnRcIikudGV4dENvbnRlbnQgPVxuICAgICAgICBcIllvdSBoaXQgYW4gZW1wdHkgc3F1YXJlIVwiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZE1vdmUocGxheWVyKSB7XG4gIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNwdS1hbGVydFwiKS50ZXh0Q29udGVudCA9XG4gICAgICBcIlRoZSBjb21wdXRlciB0cmllZCB0byBhdHRhY2sgYW4gaW52YWxpZCBzcXVhcmUhXCI7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYWxlcnRcIikudGV4dENvbnRlbnQgPVxuICAgICAgXCJZb3UgdHJpZWQgdG8gYXR0YWNrIGFuIGludmFsaWQgc3F1YXJlIVwiO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlcihtZXNzYWdlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LWFsZXJ0XCIpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYWxlcnRcIikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNYWluR2FtZSgpIHtcbiAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lXCIpO1xuICBzdGFydEdhbWVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb21wb25lbnRGYWN0b3J5KGNwdVswXSk7XG4gIGJ1aWxkR3JpZCgyKTtcbiAgcHViU3ViLnB1YihcImdhbWVTdGFydFwiLCBcInRydWVcIik7XG4gIC8vIHJlbW92ZSBzaGlwLXJvdGF0aW9uIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGVcIik7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkcmFnZ2FibGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkcmFnZ2FibGVzW2luZGV4XTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZyk7XG4gIH1cbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhY2VtZW50LWdyaWQtc3F1YXJlXCIpO1xuICBjb25zb2xlLmxvZyhcInNxdWFyZXMgPSBcIiwgc3F1YXJlcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzcXVhcmVzW2ldO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcCk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgYWxsb3dEcm9wKTtcbiAgfVxufVxuXG5sZXQgZHJhZ1N0b3JhZ2UgPSBcInRlc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllck1vdmUoKSB7XG4gIC8vIHByb3ZpZGUgdGhlIHBsYXllciB3aXRoIHNvbWUgc29ydCBvZiBwcm9tcHQuIGZvciBub3csIGNvbnNvbGVcbiAgY29uc29sZS5sb2coXCJwbGVhc2UgbWFrZSB5b3VyIG1vdmUhXCIpO1xuICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3B1LWdyaWQtc3F1YXJlXCIpO1xuICBncmlkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjayk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJpbWdcIik7XG4gIGNvbnNvbGUubG9nKFwiZGF0YSBpc1wiLCBkYXRhKTtcbiAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSkpO1xuICBjb25zb2xlLmxvZyhcbiAgICBcImRyb3AhIGFib3V0IHRvIHBsYWNlIHNoaXAuIGFyZ3MgYXJlIFwiLFxuICAgIGUudGFyZ2V0LmRhdGFzZXQueCxcbiAgICBlLnRhcmdldC5kYXRhc2V0LnksXG4gICAgMFxuICApO1xuICBjb25zb2xlLmxvZyhcInB1YlN1Yi5wdWIgaXNcIiwgcHViU3ViLnB1Yik7XG4gIHB1YlN1Yi5wdWIoXCJwbGFjZVNoaXBcIiwgW1xuICAgIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpLFxuICAgIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpLFxuICAgIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0LmRpcmVjdGlvbiksXG4gICAgTnVtYmVyKGRyYWdTdG9yYWdlLmRhdGFzZXQubGVuZ3RoKSxcbiAgXSk7XG5cbiAgY29uc29sZS5sb2coXCJkcmFnU3RvcmFnZS5pZCBpc1wiLCBkcmFnU3RvcmFnZS5pZCk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoYCMke2RyYWdTdG9yYWdlLmlkfWApXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERyYWdMaXN0ZW5lcnMoKSB7XG4gIGNvbnNvbGUubG9nKFwiYWRkRHJhZ0xpc3RlbmVycyFcIik7XG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZVwiKTtcbiAgY29uc29sZS5sb2coXCJkcmFnZ2FibGVzID0gXCIsIGRyYWdnYWJsZXMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZHJhZ2dhYmxlc1tpXTtcbiAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQgaXM6IFwiLCBlbGVtZW50KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZyk7XG4gIH1cbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhY2VtZW50LWdyaWQtc3F1YXJlXCIpO1xuICBjb25zb2xlLmxvZyhcInNxdWFyZXMgPSBcIiwgc3F1YXJlcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzcXVhcmVzW2ldO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgYWxsb3dEcm9wKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTaGlwUGxhY2VtZW50KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwUGxhY2VtZW50Lmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzaGlwUGxhY2VtZW50W2ldO1xuICAgIGNvbXBvbmVudEZhY3RvcnkoZWxlbWVudCk7XG4gIH1cbiAgYnVpbGRHcmlkKDEpO1xuICBidWlsZFNoaXBzKCk7XG4gIGFkZERyYWdMaXN0ZW5lcnMoKTtcbn1cblxuLy8gZ2V0cyB0aGUgRE9NIG5vZGVzJyBpbmZvIGZvciB0aGUgZmlyc3Qgc2NyZWVuIGZyb20gZGlzcGxheU9iamVjdHNcbi8vIGFuZCBkcmF3cyB0aGVtXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd0Ryb3AoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEludGVyZmFjZSgpIHtcbiAgZGlzcGxheU9iamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbXBvbmVudEZhY3RvcnkoZWxlbWVudCk7XG4gIH0pO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRTaGlwUGxhY2VtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWcoZSkge1xuICBkcmFnU3RvcmFnZSA9IGUudGFyZ2V0O1xuICBjb25zb2xlLmxvZyhcImRyYWchIGUudGFyZ2V0ID0gXCIsIGUudGFyZ2V0KTtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImltZ1wiLCBlLnRhcmdldC5pZCk7XG4gIGNvbnNvbGUubG9nKFwiZHJhZ1N0b3JhZ2UgaXNcIiwgdGhpcy5kcmFnU3RvcmFnZSk7XG59XG5cbmNsYXNzIEludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeSA9IGNvbXBvbmVudEZhY3Rvcnk7XG4gICAgdGhpcy5idWlsZEdyaWQgPSBidWlsZEdyaWQ7XG4gICAgdGhpcy5idWlsZFNoaXBzID0gYnVpbGRTaGlwcztcbiAgICB0aGlzLnJvdGF0ZVNoaXAgPSByb3RhdGVTaGlwO1xuICAgIHRoaXMuY3B1QXR0YWNrID0gY3B1QXR0YWNrO1xuICAgIHRoaXMucmVtb3ZlQXR0YWNrTGlzdGVuZXJzID0gcmVtb3ZlQXR0YWNrTGlzdGVuZXJzO1xuICAgIHRoaXMuYXR0YWNrID0gYXR0YWNrO1xuICAgIHRoaXMuYWRkQXR0YWNrTGlzdGVuZXJzID0gYWRkQXR0YWNrTGlzdGVuZXJzO1xuICAgIHRoaXMubWFya1NxdWFyZUhpdCA9IG1hcmtTcXVhcmVIaXQ7XG4gICAgdGhpcy5idWlsZE1haW5HYW1lID0gYnVpbGRNYWluR2FtZTtcbiAgICB0aGlzLmRyb3AgPSBkcm9wO1xuICAgIHRoaXMuYWRkRHJhZ0xpc3RlbmVycyA9IGFkZERyYWdMaXN0ZW5lcnM7XG4gICAgdGhpcy5idWlsZFNoaXBQbGFjZW1lbnQgPSBidWlsZFNoaXBQbGFjZW1lbnQ7XG4gICAgdGhpcy5hbGxvd0Ryb3AgPSBhbGxvd0Ryb3A7XG4gICAgdGhpcy5idWlsZEludGVyZmFjZSA9IGJ1aWxkSW50ZXJmYWNlO1xuICAgIHRoaXMuZHJhZ1N0b3JhZ2UgPSBbXTtcbiAgfVxufVxuXG5jb25zdCBpZmFjZSA9IG5ldyBJbnRlcmZhY2UoKTtcblxuZXhwb3J0IHsgaWZhY2UgfTtcbiIsImltcG9ydCB7IHBsYXllckJvYXJkLCBjcHVCb2FyZCB9IGZyb20gXCIuL0dhbWVCb2FyZEZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHBsYXllckZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGlubmVyUGxheWVyRmFjdG9yeSA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IGJvYXJkO1xuICAgIGlmICh0eXBlID09PSAxKSB7XG4gICAgICBib2FyZCA9IHBsYXllckJvYXJkO1xuICAgIH0gZWxzZSB7IGJvYXJkID0gY3B1Qm9hcmQ7IH1cbiAgICBjb25zdCBwbGF5ZXJUeXBlID0gdHlwZTtcblxuICAgIGJvYXJkLnBsYXllclR5cGUgPSBwbGF5ZXJUeXBlO1xuICAgIHJldHVybiB7IHBsYXllclR5cGUsIGJvYXJkIH07XG4gIH07XG5cbiAgY29uc3QgaHVtYW4gPSBpbm5lclBsYXllckZhY3RvcnkoMSk7XG4gIGNvbnN0IGNwdSA9IGlubmVyUGxheWVyRmFjdG9yeSgyKTtcblxuICBjb25zdCBwbGFjZUNQVVNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFs2LCA0LCAzLCAyXTtcbiAgICBjb25zb2xlLmxvZygnY3B1LmJvYXJkIGlzJywgY3B1LmJvYXJkKTtcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAodHlwZSkgPT4ge1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgY29uc3QgaG9yaXpWZXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBjb25zdCByZXN1bHQgPSBjcHUuYm9hcmQucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBob3JpelZlcnQsIHR5cGUpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGxhY2VTaGlwKHR5cGUpO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgc2hpcFR5cGVzLmZvckVhY2goc2hpcFR5cGUgPT4ge1xuICAgICAgcGxhY2VTaGlwKHNoaXBUeXBlKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdjcHUuYm9hcmQuc2hpcEFycmF5ID0gJywgY3B1LmJvYXJkLnNoaXBBcnJheSk7XG4gIH07XG4gIFxuICBwbGFjZUNQVVNoaXBzKCk7XG5cbiAgY29uc3QgY3B1QXR0YWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcblxuICBjb25zdCBodW1hbkF0dGFjayA9ICh4LCB5KSA9PiBjcHUuYm9hcmQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgaHVtYW4uYXR0YWNrID0gaHVtYW5BdHRhY2s7XG4gIGNwdS5hdHRhY2sgPSBjcHVBdHRhY2s7XG5cbiAgcmV0dXJuIHsgaHVtYW4sIGNwdSB9O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVyXCI7XG5pbXBvcnQgKiBhcyBteUludGVyZmFjZSBmcm9tIFwiLi9tb2R1bGVzL2ludGVyZmFjZVwiO1xuXG5jb25zb2xlLmxvZyhteUludGVyZmFjZS5pZmFjZSlcbmNvbnNvbGUubG9nKCdjb25yb2xsZXIgaXMnLCBjb250cm9sbGVyKVxubXlJbnRlcmZhY2UuaWZhY2UuYnVpbGRJbnRlcmZhY2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==