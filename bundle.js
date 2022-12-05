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
___CSS_LOADER_EXPORT___.push([module.id, "/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.placement-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 400px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid grey;\n  position: relative;\n  overflow: visible;\n}\n\n.ships-container {\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  margin-top: 62px;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n/*.cpu-grid-square:first-of-type {\n  margin-top: 50px;\n}*/\n\n/*.start-game {\n  display: none;\n}*/", "",{"version":3,"sources":["webpack://./src/modules/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;;EAEE;;AAEF;;EAEE","sourcesContent":["/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.placement-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 400px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid grey;\n  position: relative;\n  overflow: visible;\n}\n\n.ships-container {\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  margin-top: 62px;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n/*.cpu-grid-square:first-of-type {\n  margin-top: 50px;\n}*/\n\n/*.start-game {\n  display: none;\n}*/"],"sourceRoot":""}]);
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

// there perhaps needs to be some difference here between the cpu and player

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
  for (let i = 9; i > -1; i--) {
    for (let j = 0; j < 10; j++) {
      const newSquare = _displayObjects__WEBPACK_IMPORTED_MODULE_0__.shipPlacement[_displayObjects__WEBPACK_IMPORTED_MODULE_0__.shipPlacement.length - 1];
      newSquare.xy = [j, i, sqNum, player];
      sqNum += 1;
      if (player === 1) {
        newSquare.class2 = "player-grid-square";
      } else {
        newSquare.class2 = "cpu-grid-square";
        newSquare.parent = ".cpu-board";
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

const addAttackListeners = () => { 
  console.log("addAttackListeners!)")
  const gridSquares = document.querySelectorAll(".cpu-grid-square");
  gridSquares.forEach((square) => {
    square.addEventListener("click", (e) => {
      console.log("e.target is", e.target);
      const x = Number(e.target.dataset.x);
      const y = Number(e.target.dataset.y);
      console.log("x is", x);
      console.log("y is", y);
      const humanAttackResult = _controller__WEBPACK_IMPORTED_MODULE_5__.controller.human.attack(x, y);
      console.log("humanAttackResult is", humanAttackResult);
    });
  });
}

const buildMainGame = () => { 
  const startGame = document.querySelector('.start-game');
  startGame.style.display = 'none';
  componentFactory(_displayObjects__WEBPACK_IMPORTED_MODULE_0__.cpu[0]);
  buildGrid(2);
  _controller__WEBPACK_IMPORTED_MODULE_5__.controller.gameFlow(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3R087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g2RTtBQUM5QjtBQUNNO0FBQ0Y7QUFDSjtBQUNMO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1Qix3QkFBd0IsMERBQWEsQ0FBQyxpRUFBb0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixvQkFBb0Isa0RBQUs7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixzREFBVSxFQUFFLE1BQU0sY0FBYztBQUNuRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixtREFBTyxFQUFFLE1BQU0sY0FBYztBQUNoRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixxREFBUyxFQUFFLE1BQU0sY0FBYztBQUNsRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixtREFBTyxFQUFFLE1BQU0sY0FBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1RUFBOEI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLGlFQUFpRSx5RUFBZ0M7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0ZBQTJDO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9GQUEyQztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvRkFBMkM7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0ZBQTJDO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnRUFBdUI7QUFDdkQ7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBTTtBQUN6QjtBQUNBLEVBQUUsNERBQW1CO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixtREFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBGQUFpRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksaUVBQW9CLE1BQU07QUFDaEQsb0JBQW9CLDBEQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLEVBQUUsbUVBQXNCO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Uc0Q7QUFDakI7O0FBRTlCO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixtRUFBZ0I7QUFDbEMsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGtEQUFRO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsa0RBQVE7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxrREFBUTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGtEQUFRO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ3lCO0FBQ2xCOztBQUU5QyxrRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGVzLmNzcz8xMDgwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVCb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSRVNFVCBTVFlMRVMgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcnJpd2VhdGhlclxcXCIsIHNlcmlmO1xcbn1cXG5cXG4vKiBTVFlMRVMgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG59XFxuXFxuLnBsYWNlbWVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY3B1LWJvYXJkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA2MnB4O1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5iYXR0bGVzaGlwLXJvdGF0ZWQge1xcbiAgbGVmdDogLTk4cHg7XFxuICB0b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY3J1aXNlci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC01OXB4O1xcbiAgdG9wOiA2MnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLXJvdGF0ZWQge1xcbiAgbGVmdDogLTM4cHg7XFxuICB0b3A6IDQxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mcmlnYXRlLXJvdGF0ZWQge1xcbiAgbGVmdDogLTE4cHg7XFxuICB0b3A6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qLmNwdS1ncmlkLXNxdWFyZTpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufSovXFxuXFxuLyouc3RhcnQtZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn0qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCOztBQUVqQjs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSRVNFVCBTVFlMRVMgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcnJpd2VhdGhlclxcXCIsIHNlcmlmO1xcbn1cXG5cXG4vKiBTVFlMRVMgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG59XFxuXFxuLnBsYWNlbWVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY3B1LWJvYXJkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA2MnB4O1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5iYXR0bGVzaGlwLXJvdGF0ZWQge1xcbiAgbGVmdDogLTk4cHg7XFxuICB0b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY3J1aXNlci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC01OXB4O1xcbiAgdG9wOiA2MnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLXJvdGF0ZWQge1xcbiAgbGVmdDogLTM4cHg7XFxuICB0b3A6IDQxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mcmlnYXRlLXJvdGF0ZWQge1xcbiAgbGVmdDogLTE4cHg7XFxuICB0b3A6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qLmNwdS1ncmlkLXNxdWFyZTpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufSovXFxuXFxuLyouc3RhcnQtZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn0qL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IFNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vU2hpcEZhY3RvcnlcIjtcbmltcG9ydCB7IGZsaXBDb2luIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5jb25zdCBidWlsZEJvYXJkID0gKCkgPT4ge1xuICAvLyBidWlsZCBhIDJkIGFycmF5IHJlcHJlc2VudGluZyBhIDEweDEwIGdhbWUgYm9hcmRcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9IGk7XG4gICAgY29uc3QgeEFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCB5ID0gaW5kZXg7XG4gICAgICBjb25zdCBzcSA9IG5ldyBTcXVhcmUoeCwgeSk7XG4gICAgICB4QXJyYXkucHVzaChzcSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goeEFycmF5KTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5mdW5jdGlvbiBwbGFjZVNoaXBPbkJvYXJkKHgsIHksIGhvcml6VmVydCwgc2hpcFR5cGUpIHtcbiAgY29uc29sZS5sb2coXCJwbGFjZVNoaXBPbkJvYXJkISBhcmdzIGFyZSBcIiwgeCwgeSwgaG9yaXpWZXJ0LCBzaGlwVHlwZSk7XG4gIGNvbnNvbGUubG9nKFwicGxhY2VTaGlwT25Cb2FyZCEgdGhpcyBpcyBcIiwgdGhpcyk7XG4gIC8vIG1ha2UgYSBuZXcgc2hpcCBhY2NvcmRpbmcgdG8gc2hpcFR5cGVcbiAgY29uc3QgbmV3U2hpcCA9IFNoaXBGYWN0b3J5LlNoaXBGYWN0b3J5KHNoaXBUeXBlKTtcbiAgY29uc29sZS5sb2coXCJuZXdTaGlwIGlzIFwiLCBuZXdTaGlwKTtcblxuICBuZXdTaGlwLm9yaWVudGF0aW9uID0gaG9yaXpWZXJ0O1xuICBjb25zdCBuZXdTaGlwTGVuZ3RoID0gbmV3U2hpcC5sZW5ndGg7XG5cbiAgLy8gdGhlIGZvbGxvd2luZyBpZiBzdGF0ZW1lbnRzIGNoZWNrIHRoYXQgdGhpcyBpcyBhIGxlZ2FsIHNoaXAgcGxhY2VtZW50XG4gIGlmIChob3JpelZlcnQgPT09IDApIHtcbiAgICBpZiAoeCArIG5ld1NoaXBMZW5ndGggPiA5KSB7XG4gICAgICByZXR1cm4gXCJFcnJvciEgQ2FuJ3QgcGxhY2Ugc2hpcCBvdXQgb2YgYm91bmRzIVwiO1xuICAgIH1cbiAgfSBlbHNlIGlmICh5ICsgbmV3U2hpcExlbmd0aCA+IDkpIHtcbiAgICByZXR1cm4gXCJFcnJvciEgQ2FuJ3QgcGxhY2Ugc2hpcCBvdXQgb2YgYm91bmRzIVwiO1xuICB9XG4gIGlmICh0aGlzLmNoZWNrRm9yT2NjdXBhbnRzKHgsIHksIGhvcml6VmVydCwgbmV3U2hpcExlbmd0aCkpIHtcbiAgICByZXR1cm4gXCJFcnJvciEgQ2FuJ3QgcGxhY2UgYSBzaGlwIG9uIHRvcCBvZiBhbm90aGVyIHNoaXAhXCI7XG4gIH1cblxuICB0aGlzLnNoaXBBcnJheS5wdXNoKG5ld1NoaXApO1xuXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIC8vIGxvb3AgdGhyb3VnaCBuZXdTaGlwTGVuZ3RoIHNxdWFyZXMgaW5cbiAgLy8gdGhlIGRpcmVjdGlvbiBpbmRpY2F0ZWQgYnkgaG9yaXpWZXJ0LCBtb2RpZnlpbmcgdGhlaXIgb2NjdXBhbnRcbiAgLy8gYXR0cmlidXRlcyBhY2NvcmRpbmcgdG8gbmV3U2hpcCdzIElEXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobmV3U2hpcC5vcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgLy8gaS5lLiBpZiB0aGlzIHNoaXAgaXMgcGxhY2VkIGhvcml6b250YWxseVxuICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0ucGxhY2VTaGlwT25TcXVhcmUobmV3U2hpcC5zaGlwSUQpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeCArIGldW3ldLm9jY3VwYW50ID09PSBuZXdTaGlwLnNoaXBJRCkge1xuICAgICAgICByZXN1bHQucHVzaChbeCArIGksIHldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhlIHNoaXAgaXMgcGxhY2VkIHZlcnRpY2FsbHlcbiAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldLnBsYWNlU2hpcE9uU3F1YXJlKG5ld1NoaXAuc2hpcElEKTtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3kgKyBpXS5vY2N1cGFudCA9PT0gbmV3U2hpcC5zaGlwSUQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRmxlZXRTdW5rKCkge1xuICAvLyBMb29wcyB0aHJvdWdoIHRoaXMuc2hpcEFycmF5LCBjaGVja2luZyBlYWNoIHNoaXBzIC5zdW5rIHByb3BlcnR5LiBJZlxuICAvLyBhbnkgdW5zdW5rIHNoaXAgaXMgZm91bmQsIHJldHVybnMgZmFsc2UgLSBvdGhlcndpc2UsIHJldHVybnMgdHJ1ZS5cbiAgY29uc3QgYXJyYXkgPSB0aGlzLnNoaXBBcnJheTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXAgPSBhcnJheVtpXTtcbiAgICBpZiAoIXNoaXAuc3Vuaykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5mdW5jdGlvbiBnZXRTaGlwKElEKSB7XG4gIC8vIExvb3BzIHRocm91Z2ggdGhpcy5zaGlwQXJyYXksIGNoZWNraW5nIGZvciBhbmQgcmV0dXJuaW5nIHRoZVxuICAvLyBvYmplY3Qgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBJRC5cbiAgY29uc3QgYXJyYXkgPSB0aGlzLnNoaXBBcnJheTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXAgPSBhcnJheVtpXTtcbiAgICBpZiAoc2hpcC5zaGlwSUQgPT09IElEKSB7XG4gICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcCh4LCB5KSB7XG4gIGNvbnNvbGUubG9nKFwicm90YXRlU2hpcCEgYXJncyBhcmUgXCIsIHgsIHkpO1xuICBjb25zdCByZXN1bHQgPSB0aGlzLnJvdGF0ZVNoaXBpblN0b3JhZ2UoeCwgeSk7XG4gIGNvbnNvbGUubG9nKFwicmVzdWx0IGlzLCBcIiwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gdGhlcmUgcGVyaGFwcyBuZWVkcyB0byBiZSBzb21lIGRpZmZlcmVuY2UgaGVyZSBiZXR3ZWVuIHRoZSBjcHUgYW5kIHBsYXllclxuXG5mdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgLy8gd2UgbG9vayB1cCB0aGUgZ2l2ZW4gc3F1YXJlLiBpZiB0aGVyZSBpcyBhbiBvY2N1cGFudCwgd2UgZ2V0IHRoZSBzaGlwJ3NcbiAgLy8gb2JqZWN0IHVzaW5nIGdldFNoaXAoKSBhbmQgY2FsbCBpdHMgaGl0KCkgbWV0aG9kXG4gIGlmICh0aGlzLmJvYXJkW3hdW3ldLmhpdCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAodGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudCk7XG4gICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNoZWNrRmxlZXRTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gW1t4LHldLCB0cnVlXTtcbiAgfVxuICB0aGlzLmJvYXJkW3hdW3ldLmhpdCA9IHRydWU7XG4gIHJldHVybiBbW3gsIHldLCBmYWxzZV07XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yT2NjdXBhbnRzKHgsIHksIGhvcml6VmVydCwgbGVuZ3RoKSB7XG4gIGlmIChob3JpelZlcnQgPT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICBpZiAoZWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSArIGldO1xuICAgICAgaWYgKGVsZW1lbnQub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcGluU3RvcmFnZSh4LCB5KSB7XG4gIC8vIGZpbmQgdGhlIHNoaXAgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcywgXCIsIHRoaXMpO1xuICBjb25zb2xlLmxvZyhcInRoaXMuYm9hcmQgaXMsIFwiLCB0aGlzLmJvYXJkKTtcbiAgY29uc29sZS5sb2coXCJ0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50IGlzIFwiLCB0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50KTtcbiAgY29uc3Qgc2hpcElEID0gdGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudDtcbiAgY29uc3Qgc2hpcCA9IHRoaXMuZ2V0U2hpcCh0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50KTtcbiAgY29uc29sZS5sb2coXCJzaGlwIGlzLCBcIiwgc2hpcCk7XG4gIC8vIGlmIHRoZSBzaGlwIGlzIGhvcml6b250YWwsIHJvdGF0ZSBpdCB0byB2ZXJ0aWNhbFxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09IDApIHtcbiAgICBzaGlwLm9yaWVudGF0aW9uID0gMTtcbiAgICByZXN1bHQucHVzaChbeCwgeV0pO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeEVsZW1lbnQgPSB0aGlzLmJvYXJkW3ggKyBpXVt5XTtcbiAgICAgIHhFbGVtZW50Lm9jY3VwYW50ID0gbnVsbDtcbiAgICAgIGNvbnN0IHlFbGVtZW50ID0gdGhpcy5ib2FyZFt4XVt5IC0gaV07XG4gICAgICB5RWxlbWVudC5vY2N1cGFudCA9IHNoaXBJRDtcbiAgICAgIHJlc3VsdC5wdXNoKFt4LCB5ICsgaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBvdGhlcndpc2UsIHJvdGF0ZSBpdCB0byBob3Jpem9udGFsXG4gICAgc2hpcC5vcmllbnRhdGlvbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4RWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgeEVsZW1lbnQub2NjdXBhbnQgPSBzaGlwSUQ7XG4gICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuICAgICAgeUVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgICAgcmVzdWx0LnB1c2goW3ggKyBpLCB5XSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuXG5jbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBidWlsZEJvYXJkKCk7XG4gICAgdGhpcy5zaGlwQXJyYXkgPSBbXTtcbiAgICB0aGlzLnBsYWNlU2hpcE9uQm9hcmQgPSBwbGFjZVNoaXBPbkJvYXJkO1xuICAgIHRoaXMuY2hlY2tGb3JPY2N1cGFudHMgPSBjaGVja0Zvck9jY3VwYW50cztcbiAgICB0aGlzLnJlY2VpdmVBdHRhY2sgPSByZWNlaXZlQXR0YWNrO1xuICAgIHRoaXMuZ2V0U2hpcCA9IGdldFNoaXA7XG4gICAgdGhpcy5jaGVja0ZsZWV0U3VuayA9IGNoZWNrRmxlZXRTdW5rO1xuICAgIHRoaXMucm90YXRlU2hpcGluU3RvcmFnZSA9IHJvdGF0ZVNoaXBpblN0b3JhZ2U7XG4gICAgdGhpcy5yb3RhdGVTaGlwID0gcm90YXRlU2hpcDtcbiAgfVxufVxuXG5jbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgeCA9IHggfHwgMDsgLy8gY29udmVydHMgZmFsc2V5IHZhbHVlcyB0byAwIChpbiB0aGlzIGNhc2UsIE5hTilcbiAgICB0aGlzLnh5ID0gW3gsIHldO1xuICAgIHRoaXMub2NjdXBhbnQgPSBudWxsO1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gIH1cblxuICBwbGFjZVNoaXBPblNxdWFyZShzaGlwSUQpIHtcbiAgICB0aGlzLm9jY3VwYW50ID0gc2hpcElEO1xuICB9XG59XG5cbmNvbnN0IEdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IG5ldyBCb2FyZCgpO1xuICByZXR1cm4geyBnYW1lQm9hcmQgfTtcbn07XG5cbmV4cG9ydCB7XG4gIGJ1aWxkQm9hcmQsXG4gIHBsYWNlU2hpcE9uQm9hcmQsXG4gIGNoZWNrRmxlZXRTdW5rLFxuICBnZXRTaGlwLFxuICByZWNlaXZlQXR0YWNrLFxuICBjaGVja0Zvck9jY3VwYW50cyxcbiAgcm90YXRlU2hpcGluU3RvcmFnZSxcbiAgR2FtZUJvYXJkRmFjdG9yeSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbmV4cG9ydCBjb25zdCBTaGlwRmFjdG9yeSA9ICgoKSA9PiB7XG4gIGxldCBzaGlwQ291bnRlciA9IC0xO1xuICBjb25zdCBTaGlwRmFjdG9yeSA9IChzaGlwVHlwZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzaGlwRmFjdG9yeSEgc2hpcFR5cGUgaXMgJywgc2hpcFR5cGUpO1xuICAgIHNoaXBDb3VudGVyICs9IDE7XG4gICAgY29uc3Qgc2hpcElEID0gc2hpcENvdW50ZXI7XG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IGxlbmd0aDtcbiAgICBsZXQgaHA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHNoaXBUeXBlKSB7XG4gICAgICAvKmNhc2UgMTpcbiAgICAgICAgdHlwZSA9IFwiU2luayB0ZXN0XCI7XG4gICAgICAgIGxlbmd0aCA9IDY7XG4gICAgICAgIGhwID0gMTtcbiAgICAgICAgYnJlYWs7Ki9cblxuICAgICAgY2FzZSAyOlxuICAgICAgICBjb25zb2xlLmxvZygnaXMgZnJpZ2F0ZScpO1xuICAgICAgICB0eXBlID0gXCJGcmlnYXRlXCI7XG4gICAgICAgIGxlbmd0aCA9IDI7XG4gICAgICAgIGhwID0gMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY29uc29sZS5sb2coJ2lzIERlc3Ryb3llcicpO1xuICAgICAgICB0eXBlID0gXCJEZXN0cm95ZXJcIjtcbiAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgaHAgPSAzO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICBjb25zb2xlLmxvZygnaXMgQ3J1aXNlcicpO1xuICAgICAgICB0eXBlID0gXCJDcnVpc2VyXCI7XG4gICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgIGhwID0gNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdpcyBCYXR0bGVzaGlwJyk7XG4gICAgICAgIHR5cGUgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgbGVuZ3RoID0gNjtcbiAgICAgICAgaHAgPSA2O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBsZW5ndGgsXG4gICAgICBocCxcbiAgICAgIHN1bmssXG4gICAgICBzaGlwSUQsXG4gICAgICBjaGVja1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgfSxcbiAgICAgIGhpdCgpIHtcbiAgICAgICAgaHAgLT0gMTtcbiAgICAgICAgaWYgKGhwID09PSAwKSB7XG4gICAgICAgICAgc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0cnVlLCBocCwgdGhpcy5jaGVja1N1bmsoKV07XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIHJldHVybiB7IFNoaXBGYWN0b3J5IH07XG59KSgpO1xuIiwiaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbmltcG9ydCB7IGZsaXBDb2luIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgY29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHsgaHVtYW4sIGNwdSB9ID0gcGxheWVyRmFjdG9yeSgpO1xuXG4gIC8qY29uc3QgYXR0YWNrID0gKHgsIHksIHBsYXllcikgPT4ge1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIHJldHVybiBodW1hbi5ib2FyZC5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG4gICAgcmV0dXJuIGNwdS5ib2FyZC5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTsqL1xuXG4gIGNvbnN0IGdhbWVGbG93ID0gKGlzRmlyc3RUdXJuKSA9PiB7XG4gICAgaWYgKGlzRmlyc3RUdXJuKSB7XG4gICAgICBpZiAoZmxpcENvaW4oKSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaHVtYW4gZ29lcyBmaXJzdCcpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdjcHUgZ29lcyBmaXJzdCcpO1xuICAgICAgY29uc3QgY3B1QXR0YWNrUmVzdWx0ID0gY3B1LmF0dGFjaygpO1xuICAgICAgY29uc29sZS5sb2coJ2NwdSBhdHRhY2sgcmVzdWx0IGlzJywgY3B1QXR0YWNrUmVzdWx0KTtcbiAgICAgIHJldHVybiBjcHVBdHRhY2tSZXN1bHQ7XG4gICAgfSAgICBcbiAgICAgIFxuICB9XG5cbiAgcmV0dXJuIHsgZ2FtZUZsb3csIGh1bWFuLCBjcHUgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgZGlzcGxheU9iamVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIm1haW5cIixcbiAgICBub2RlVHlwZTogXCJtYWluXCIsXG4gICAgcGFyZW50OiBcImJvZHlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY29udGVudENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCJtYWluXCIsXG4gICAgY2xhc3MxOiBcImNvbnRlbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibWFpblRpdGxlXCIsXG4gICAgbm9kZVR5cGU6IFwiaDFcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwidGl0bGVcIixcbiAgICB0ZXh0OiBcIkJBVFRMRVNISVBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3RhcnRHYW1lXCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwic3RhcnQtYnV0dG9uXCIsXG4gICAgaW5wdXRUeXBlOiBcImJ1dHRvblwiLFxuICAgIHZhbHVlOiBcIkNsaWNrIHRvIHN0YXJ0XCIsXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBzaGlwUGxhY2VtZW50ID0gW1xuICB7XG4gICAgbmFtZTogXCJwbGFjZW1lbnRUaXRsZVwiLFxuICAgIG5vZGVUeXBlOiBcImgxXCIsXG4gICAgcGFyZW50OiBcIi5jb250ZW50XCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC10aXRsZVwiLFxuICAgIHRleHQ6IFwiUGxhY2UgeW91ciBzaGlwc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJwbGFjZW1lbnRDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIiwgXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicGxhY2VtZW50R3JpZFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJwbGFjZW1lbnQtZ3JpZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzaGlwc0NvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwcy1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3RhcnRHYW1lXCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3RhcnQtZ2FtZVwiLFxuICAgIGlucHV0VHlwZTogXCJidXR0b25cIixcbiAgICB2YWx1ZTogXCJTdGFydCBHYW1lXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInBsYWNlbWVudEdyaWRTcXVhcmVcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1ncmlkXCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1ncmlkLXNxdWFyZVwiLFxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBzaGlwcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQmF0dGxlc2hpcFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuc2hpcHMtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInNoaXAtcGxhY2VtZW50XCIsXG4gICAgY2xhc3MyOiBcImJhdHRsZXNoaXAtcGxhY2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNydWlzZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJjcnVpc2VyLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZXN0cm95ZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJkZXN0cm95ZXItcGxhY2VtZW50XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZyaWdhdGVcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXBzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudFwiLFxuICAgIGNsYXNzMjogXCJmcmlnYXRlLXBsYWNlbWVudFwiLFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgY3B1ID0gW1xuICB7XG4gICAgbmFtZTogXCJjcHVCb2FyZFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcHUtYm9hcmRcIixcbiAgfVxuXSIsImV4cG9ydCBjb25zdCBmbGlwQ29pbiA9ICgpID0+IHtcbiAgY29uc3QgY29pbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICByZXR1cm4gY29pbjtcbn0iLCJpbXBvcnQgeyBkaXNwbGF5T2JqZWN0cywgc2hpcFBsYWNlbWVudCwgc2hpcHMsIGNwdSB9IGZyb20gXCIuL2Rpc3BsYXlPYmplY3RzXCI7XG5pbXBvcnQgQ3J1aXNlciBmcm9tIFwiLi4vcmVzb3VyY2VzL0NydWlzZXIucG5nXCI7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tIFwiLi4vcmVzb3VyY2VzL0JhdHRsZXNoaXAucG5nXCI7XG5pbXBvcnQgRGVzdHJveWVyIGZyb20gXCIuLi9yZXNvdXJjZXMvRGVzdHJveWVyLnBuZ1wiO1xuaW1wb3J0IEZyaWdhdGUgZnJvbSBcIi4uL3Jlc291cmNlcy9GcmlnYXRlLnBuZ1wiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbi8vIGJ1aWxkcyB0aGUgc2hpcCBwbGFjZW1lbnQgc2NyZWVuXG5cbmNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBub2RlVHlwZSxcbiAgICBwYXJlbnQsXG4gICAgdGV4dCxcbiAgICBpbnB1dFR5cGUsXG4gICAgdmFsdWUsXG4gICAgY2xhc3MxLFxuICAgIGNsYXNzMixcbiAgICBjbGFzczMsXG4gICAgdGFza0lELFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlkLFxuICAgIHh5LFxuICB9ID0gZWxlbWVudDtcbiAgY29uc3QgY3JlYXRlRE9NTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuICAgIGNvbnN0IG5ld0RPTU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RE9NTm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaW5wdXRUeXBlKSB7XG4gICAgICBuZXdET01Ob2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RE9NTm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2xhc3MxKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MxKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMikge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgfVxuICAgIGlmIChjbGFzczMpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczMpO1xuICAgIH1cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIG5ld0RPTU5vZGUucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIG5ld0RPTU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudCBoYXMgaWQhIGlkID0gXCIsIGlkKTtcbiAgICAgIG5ld0RPTU5vZGUuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBpZiAoeHkpIHtcbiAgICAgIG5ld0RPTU5vZGUuZGF0YXNldC54ID0geHlbMF07XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQueSA9IHh5WzFdO1xuICAgICAgbmV3RE9NTm9kZS5kYXRhc2V0LnNxbnVtID0geHlbMl07XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQucGxheWVyID0geHlbM107XG4gICAgfVxuICAgIHBhcmVudE5vZGUuYXBwZW5kKG5ld0RPTU5vZGUpO1xuICB9O1xuICBjcmVhdGVET01Ob2RlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIG5vZGVUeXBlLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0LFxuICAgIGlucHV0VHlwZSxcbiAgICB2YWx1ZSxcbiAgICBjbGFzczEsXG4gICAgY2xhc3MyLFxuICAgIHRhc2tJRCxcbiAgfTtcbn07XG5cbmNvbnN0IGJ1aWxkR3JpZCA9IChwbGF5ZXIpID0+IHtcbiAgbGV0IHNxTnVtID0gMDtcbiAgZm9yIChsZXQgaSA9IDk7IGkgPiAtMTsgaS0tKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBuZXdTcXVhcmUgPSBzaGlwUGxhY2VtZW50W3NoaXBQbGFjZW1lbnQubGVuZ3RoIC0gMV07XG4gICAgICBuZXdTcXVhcmUueHkgPSBbaiwgaSwgc3FOdW0sIHBsYXllcl07XG4gICAgICBzcU51bSArPSAxO1xuICAgICAgaWYgKHBsYXllciA9PT0gMSkge1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MyID0gXCJwbGF5ZXItZ3JpZC1zcXVhcmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzczIgPSBcImNwdS1ncmlkLXNxdWFyZVwiO1xuICAgICAgICBuZXdTcXVhcmUucGFyZW50ID0gXCIuY3B1LWJvYXJkXCI7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRGYWN0b3J5KG5ld1NxdWFyZSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBidWlsZFNoaXBzID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzaGlwc1tpXTtcblxuICAgIGNvbXBvbmVudEZhY3RvcnkoZWxlbWVudCk7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgXCJCYXR0bGVzaGlwXCI6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MyfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtCYXR0bGVzaGlwfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiQmF0dGxlc2hpcFwiIGRhdGEtbGVuZ3RoPVwiNlwiIGRhdGEtb3JpZW50YXRpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJDcnVpc2VyXCI6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MyfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtDcnVpc2VyfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiQ3J1aXNlclwiICBkYXRhLWxlbmd0aD1cIjRcIiBkYXRhLW9yaWVudGF0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiRGVzdHJveWVyXCI6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MyfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtEZXN0cm95ZXJ9IGFsdD0ke2VsZW1lbnQubmFtZX0gZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZHJhZ2dhYmxlXCIgaWQ9XCJEZXN0cm95ZXJcIiAgZGF0YS1sZW5ndGg9XCIzXCIgZGF0YS1vcmllbnRhdGlvbj1cIjBcIj5gO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5jbGFzczJ9YCkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz0ke0ZyaWdhdGV9IGFsdD0ke2VsZW1lbnQubmFtZX0gZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZHJhZ2dhYmxlXCIgaWQ9XCJGcmlnYXRlXCIgIGRhdGEtbGVuZ3RoPVwiMlwiIGRhdGEtb3JpZW50YXRpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5sZXQgZHJhZ1N0b3JhZ2UgPSBbXTtcbmxldCBwbGFjZWRTaGlwc0NvdW50ID0gMDtcblxuY29uc3Qgcm90YXRlU2hpcGluU3RvcmFnZSA9ICh4LCB5KSA9PiB7XG4gIGNvbnRyb2xsZXIucm90YXRlU2hpcGluU3RvcmFnZSgpO1xufTtcblxuY29uc3Qgcm90YXRlU2hpcCA9IChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicm90YXRlU2hpcCEgZS50YXJnZXQgaXNcIiwgZS50YXJnZXQpO1xuICBjb25zb2xlLmxvZyhcInJvdGF0ZVNoaXAhIGNvbnRyb2xsZXIuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkIGlzXCIsIGNvbnRyb2xsZXIuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkKTtcbiAgY29uc3Qgc2hpcCA9IGUudGFyZ2V0O1xuICBjb25zb2xlLmxvZyhcInJvdGF0ZVNoaXAhIHNoaXAgaXNcIiwgc2hpcCk7XG4gIGNvbnN0IHBhcmVudCA9IHNoaXAucGFyZW50Tm9kZTtcbiAgY29uc3QgcGFyZW50WCA9IE51bWJlcihwYXJlbnQuZGF0YXNldC54KTtcbiAgY29uc3QgcGFyZW50WSA9IE51bWJlcihwYXJlbnQuZGF0YXNldC55KTtcbiAgc3dpdGNoIChOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5sZW5ndGgpKSB7XG4gICAgY2FzZSA2OlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCIxXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXAtcm90YXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImJhdHRsZXNoaXAtcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xsZXIuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnJvdGF0ZVNoaXAocGFyZW50WCwgcGFyZW50WSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgNDpcbiAgICAgIGlmIChzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9IFwiMVwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJjcnVpc2VyLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcIjBcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJjcnVpc2VyLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5yb3RhdGVTaGlwKHBhcmVudFgsIHBhcmVudFkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDM6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSBcIjBcIikge1xuICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcIjBcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXN0cm95ZXItcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xsZXIuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnJvdGF0ZVNoaXAocGFyZW50WCwgcGFyZW50WSk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSBcIjBcIikge1xuICAgICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZnJpZ2F0ZS1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiZnJpZ2F0ZS1yb3RhdGVkXCIpO1xuICAgICAgfVxuICAgICAgY29udHJvbGxlci5odW1hbi5ib2FyZC5nYW1lQm9hcmQucm90YXRlU2hpcChwYXJlbnRYLCBwYXJlbnRZKTtcbiAgfVxufTtcblxuY29uc3QgZHJhZyA9IChlKSA9PiB7XG4gIGRyYWdTdG9yYWdlID0gZS50YXJnZXQ7XG4gIGNvbnNvbGUubG9nKFwiZHJhZyEgZXYudGFyZ2V0ID0gXCIsIGUudGFyZ2V0KTtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImltZ1wiLCBlLnRhcmdldC5pZCk7XG5cbiAgY29uc29sZS5sb2coXCJkcmFnU3RvcmFnZSBpc1wiLCBkcmFnU3RvcmFnZSk7XG59O1xuXG5jb25zdCBhZGRBdHRhY2tMaXN0ZW5lcnMgPSAoKSA9PiB7IFxuICBjb25zb2xlLmxvZyhcImFkZEF0dGFja0xpc3RlbmVycyEpXCIpXG4gIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtZ3JpZC1zcXVhcmVcIik7XG4gIGdyaWRTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQgaXNcIiwgZS50YXJnZXQpO1xuICAgICAgY29uc3QgeCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpO1xuICAgICAgY29uc3QgeSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuICAgICAgY29uc29sZS5sb2coXCJ4IGlzXCIsIHgpO1xuICAgICAgY29uc29sZS5sb2coXCJ5IGlzXCIsIHkpO1xuICAgICAgY29uc3QgaHVtYW5BdHRhY2tSZXN1bHQgPSBjb250cm9sbGVyLmh1bWFuLmF0dGFjayh4LCB5KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaHVtYW5BdHRhY2tSZXN1bHQgaXNcIiwgaHVtYW5BdHRhY2tSZXN1bHQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgYnVpbGRNYWluR2FtZSA9ICgpID0+IHsgXG4gIGNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG4gIHN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb21wb25lbnRGYWN0b3J5KGNwdVswXSk7XG4gIGJ1aWxkR3JpZCgyKTtcbiAgY29udHJvbGxlci5nYW1lRmxvdyh0cnVlKTtcbiAgYWRkQXR0YWNrTGlzdGVuZXJzKCk7XG59XG5cbmNvbnN0IGRyb3AgPSAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImRyb3AhIGV2LnRhcmdldCA9IFwiLCBlLnRhcmdldCk7XG4gIGNvbnNvbGUubG9nKFwiY29udHJvbGxlciBpc1wiLCBjb250cm9sbGVyKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImltZ1wiKTtcbiAgY29uc29sZS5sb2coXCJkYXRhIGlzXCIsIGRhdGEpO1xuICBlLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKSk7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwiZHJvcCEgYWJvdXQgdG8gcGxhY2Ugc2hpcC4gYXJncyBhcmUgXCIsXG4gICAgZS50YXJnZXQuZGF0YXNldC54LFxuICAgIGUudGFyZ2V0LmRhdGFzZXQueSxcbiAgICAwXG4gICk7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwicGxhY2luZyBzaGlwISByZXN1bHQgaXNcIixcbiAgICBjb250cm9sbGVyLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKFxuICAgICAgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCksXG4gICAgICBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KSxcbiAgICAgIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0Lm9yaWVudGF0aW9uKSxcbiAgICAgIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0Lmxlbmd0aClcbiAgICApXG4gICk7XG4gIHBsYWNlZFNoaXBzQ291bnQgKz0gMTtcbiAgY29uc29sZS5sb2coJ3BsYWNlZFNoaXBzQ291bnQgaXMnLCBwbGFjZWRTaGlwc0NvdW50KTtcbiAgaWYgKHBsYWNlZFNoaXBzQ291bnQgPT09IDQpIHtcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xuICAgIHN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHN0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkTWFpbkdhbWUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBjb25zb2xlLmxvZyhcImRyYWdTdG9yYWdlLmlkIGlzXCIsIGRyYWdTdG9yYWdlLmlkKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihgIyR7ZHJhZ1N0b3JhZ2UuaWR9YClcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZVNoaXApO1xufTtcblxuY29uc3QgYWRkRHJhZ0xpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJhZGREcmFnTGlzdGVuZXJzIVwiKTtcbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpO1xuICBjb25zb2xlLmxvZyhcImRyYWdnYWJsZXMgPSBcIiwgZHJhZ2dhYmxlcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkcmFnZ2FibGVzW2ldO1xuICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudCBpczogXCIsIGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnKTtcbiAgfVxuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmVcIik7XG4gIGNvbnNvbGUubG9nKFwic3F1YXJlcyA9IFwiLCBzcXVhcmVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNxdWFyZXNbaV07XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBhbGxvd0Ryb3ApO1xuICB9XG59O1xuXG5jb25zdCBidWlsZFNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBQbGFjZW1lbnQubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNoaXBQbGFjZW1lbnRbaV07XG4gICAgY29tcG9uZW50RmFjdG9yeShlbGVtZW50KTtcbiAgfVxuICBidWlsZEdyaWQoMSk7XG4gIGJ1aWxkU2hpcHMoKTtcbiAgYWRkRHJhZ0xpc3RlbmVycygpO1xufTtcblxuLy8gZ2V0cyB0aGUgRE9NIG5vZGVzJyBpbmZvIGZvciB0aGUgZmlyc3Qgc2NyZWVuIGZyb20gZGlzcGxheU9iamVjdHNcbi8vIGFuZCBkcmF3cyB0aGVtXG5cbmV4cG9ydCBjb25zdCBhbGxvd0Ryb3AgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5leHBvcnQgY29uc3QgYnVpbGRJbnRlcmZhY2UgPSAoKSA9PiB7XG4gIGRpc3BsYXlPYmplY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb21wb25lbnRGYWN0b3J5KGVsZW1lbnQpO1xuICB9KTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1aWxkU2hpcFBsYWNlbWVudCk7XG59O1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL0dhbWVCb2FyZEZhY3RvcnlcIjtcbmltcG9ydCB7IGZsaXBDb2luIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgaW5uZXJQbGF5ZXJGYWN0b3J5ID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJUeXBlID0gdHlwZTtcbiAgICBjb25zdCBib2FyZCA9IEdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICByZXR1cm4geyBwbGF5ZXJUeXBlLCBib2FyZCB9O1xuICB9O1xuXG4gIGNvbnN0IGh1bWFuID0gaW5uZXJQbGF5ZXJGYWN0b3J5KDEpO1xuICBjb25zdCBjcHUgPSBpbm5lclBsYXllckZhY3RvcnkoMik7XG4gIFxuICBmdW5jdGlvbiByYW5kb214eSgpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcG9wdWxhdGVDUFVCb2FyZCgpIHsgXG4gICAgY29uc3QgcGxhY2VCYXR0bGVzaGlwID0gKCkgPT4geyBcbiAgICAgIGNvbnN0IHggPSByYW5kb214eSgpWzBdO1xuICAgICAgY29uc3QgeSA9IHJhbmRvbXh5KClbMV07XG4gICAgICBjb25zdCBwbGFjZW1lbnQgPSBjcHUuYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoeCwgeSwgZmxpcENvaW4oKSwgNilcbiAgICAgIGlmICh0eXBlb2YgcGxhY2VtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gcGxhY2VtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYWNlQmF0dGxlc2hpcCgpO1xuICAgIH1cbiAgICBjb25zdCBwbGFjZUNydWlzZXIgPSAoKSA9PiB7IFxuICAgICAgY29uc3QgeCA9IHJhbmRvbXh5KClbMF07XG4gICAgICBjb25zdCB5ID0gcmFuZG9teHkoKVsxXTtcbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBmbGlwQ29pbigpLCA0KVxuICAgICAgaWYgKHR5cGVvZiBwbGFjZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGxhY2VDcnVpc2VyKCk7ICBcbiAgICB9XG4gICAgY29uc3QgcGxhY2VEZXN0cm95ZXIgPSAoKSA9PiB7IFxuICAgICAgY29uc3QgeCA9IHJhbmRvbXh5KClbMF07XG4gICAgICBjb25zdCB5ID0gcmFuZG9teHkoKVsxXTtcbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBmbGlwQ29pbigpLCAzKVxuICAgICAgaWYgKHR5cGVvZiBwbGFjZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGxhY2VEZXN0cm95ZXIoKTtcbiAgICAgfVxuICAgIGNvbnN0IHBsYWNlRnJpZ2F0ZSA9ICgpID0+IHsgXG4gICAgICBjb25zdCB4ID0gcmFuZG9teHkoKVswXTtcbiAgICAgIGNvbnN0IHkgPSByYW5kb214eSgpWzFdO1xuICAgICAgY29uc3QgcGxhY2VtZW50ID0gY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKHgsIHksIGZsaXBDb2luKCksIDIpXG4gICAgICBpZiAodHlwZW9mIHBsYWNlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwbGFjZUZyaWdhdGUoKTtcbiAgICAgfVxuICAgIHBsYWNlQmF0dGxlc2hpcCgpO1xuICAgIHBsYWNlQ3J1aXNlcigpO1xuICAgIHBsYWNlRGVzdHJveWVyKCk7XG4gICAgcGxhY2VGcmlnYXRlKCk7XG4gIH1cblxuICBjcHUuYm9hcmQuZ2FtZUJvYXJkLnBvcHVsYXRlQ1BVQm9hcmQgPSBwb3B1bGF0ZUNQVUJvYXJkO1xuICBjcHUuYm9hcmQuZ2FtZUJvYXJkLnBvcHVsYXRlQ1BVQm9hcmQoKTtcbiAgXG4gIFxuICBjb25zdCBjcHVBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICByZXR1cm4gaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH07XG5cbiAgY29uc3QgaHVtYW5BdHRhY2sgPSAoeCwgeSkgPT4gY3B1LmJvYXJkLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gIGh1bWFuLmF0dGFjayA9IGh1bWFuQXR0YWNrO1xuICBjcHUuYXR0YWNrID0gY3B1QXR0YWNrO1xuXG4gIHJldHVybiB7IGh1bWFuLCBjcHUgfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9tb2R1bGVzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGJ1aWxkSW50ZXJmYWNlLCBhbGxvd0Ryb3AgfSBmcm9tIFwiLi9tb2R1bGVzL2ludGVyZmFjZVwiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVyXCI7XG5cbmJ1aWxkSW50ZXJmYWNlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=