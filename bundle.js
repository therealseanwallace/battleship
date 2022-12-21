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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./retro.woff2 */ "./src/modules/retro.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* LOAD RETRO FONT */\n\n@font-face {\n  font-family: \"Retro\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* STYLES */\n\nbody {\n  max-width: 1600px;\n  margin: auto;\n  height: 1080px;\n  overflow: hidden;\n  color: #00b140;\n  letter-spacing: 5px;\n  font-weight: bold;\n  filter: drop-shadow(0 0 1px #00b140) contrast(2) brightness(1);\n  text-align: center;\n  background: #141212;\n  font-family: \"Retro\";\n}\n\nmain {\n  margin: auto;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@keyframes scanline {\n  0% {\n    bottom: 100%;\n  }\n  80% {\n    bottom: 100%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n\n.scanline {\n  width: 100%;\n  height: 100px;\n  z-index: 8;\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(255, 255, 255, 0.2) 10%,\n    rgba(0, 0, 0, 0.1) 100%\n  );\n  opacity: 0.1;\n  position: absolute;\n  bottom: 100%;\n  animation: scanline 8s linear infinite;\n}\n\n.notif-area {\n  height: 220px;\n  display: flex;\n  width: 840px;\n  margin-bottom: 40px;\n}\n\n.notif-left,\n.notif-right {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: rgb(10, 117, 33) 5px solid;\n  width: 840px;\n}\n\n.notif {\n  font-size: 14px;\n}\n\n.grid-container {\n  display: flex;\n  gap: 40px;\n  margin-bottom: 18px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid #00b140;\n  position: relative;\n  overflow: visible;\n}\n\n.ship-placement-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 100px;\n\n  width: 400px;\n  height: 120px;\n}\n\n.draggable {\n  max-width: 100vw;\n  filter: drop-shadow(0 0 0.1px #00ff5e) contrast(2) brightness(1);\n  z-index: 999999;\n  position: absolute;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.destroyer-container {\n  margin: 14px 23% 14px 17%;\n}\n\n.frigate-container {\n  margin-top: 14px;\n}\n\n.hit-empty {\n  background-color: rgb(50, 116, 54);\n}\n\n.hit-occupied {\n  background-color: rgba(0, 255, 21, 0.815);\n}\n\nh3 {\n  font-size: 0.7rem;\n  margin-bottom: 8px;\n  font-family: \"Retro\", serif;\n  font-weight: normal;\n  font-style: normal;\n}\n\n.start-button {\n  min-width: 200px;\n  min-height: 50px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #00b140;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 3px;\n  background-color: #141212;\n  color: #00b140;\n  margin-bottom: 40px;\n  font-size: 30px;\n}\n\n.start-button:hover {\n  background-color: #00b140;\n  color: #141212;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/modules/styles.css"],"names":[],"mappings":"AAAA,oBAAoB;;AAEpB;EACE,oBAAoB;EACpB,4DAAyC;EACzC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,iBAAiB;EACjB,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,iBAAiB;EACjB,8DAA8D;EAC9D,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,WAAW;EACX,aAAa;EACb,UAAU;EACV;;;;;GAKC;EACD,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,sBAAsB;;EAEtB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,gEAAgE;EAChE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB","sourcesContent":["/* LOAD RETRO FONT */\n\n@font-face {\n  font-family: \"Retro\";\n  src: url(\"./retro.woff2\") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* STYLES */\n\nbody {\n  max-width: 1600px;\n  margin: auto;\n  height: 1080px;\n  overflow: hidden;\n  color: #00b140;\n  letter-spacing: 5px;\n  font-weight: bold;\n  filter: drop-shadow(0 0 1px #00b140) contrast(2) brightness(1);\n  text-align: center;\n  background: #141212;\n  font-family: \"Retro\";\n}\n\nmain {\n  margin: auto;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@keyframes scanline {\n  0% {\n    bottom: 100%;\n  }\n  80% {\n    bottom: 100%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n\n.scanline {\n  width: 100%;\n  height: 100px;\n  z-index: 8;\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(255, 255, 255, 0.2) 10%,\n    rgba(0, 0, 0, 0.1) 100%\n  );\n  opacity: 0.1;\n  position: absolute;\n  bottom: 100%;\n  animation: scanline 8s linear infinite;\n}\n\n.notif-area {\n  height: 220px;\n  display: flex;\n  width: 840px;\n  margin-bottom: 40px;\n}\n\n.notif-left,\n.notif-right {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: rgb(10, 117, 33) 5px solid;\n  width: 840px;\n}\n\n.notif {\n  font-size: 14px;\n}\n\n.grid-container {\n  display: flex;\n  gap: 40px;\n  margin-bottom: 18px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid #00b140;\n  position: relative;\n  overflow: visible;\n}\n\n.ship-placement-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 100px;\n\n  width: 400px;\n  height: 120px;\n}\n\n.draggable {\n  max-width: 100vw;\n  filter: drop-shadow(0 0 0.1px #00ff5e) contrast(2) brightness(1);\n  z-index: 999999;\n  position: absolute;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.destroyer-container {\n  margin: 14px 23% 14px 17%;\n}\n\n.frigate-container {\n  margin-top: 14px;\n}\n\n.hit-empty {\n  background-color: rgb(50, 116, 54);\n}\n\n.hit-occupied {\n  background-color: rgba(0, 255, 21, 0.815);\n}\n\nh3 {\n  font-size: 0.7rem;\n  margin-bottom: 8px;\n  font-family: \"Retro\", serif;\n  font-weight: normal;\n  font-style: normal;\n}\n\n.start-button {\n  min-width: 200px;\n  min-height: 50px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #00b140;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 3px;\n  background-color: #141212;\n  color: #00b140;\n  margin-bottom: 40px;\n  font-size: 30px;\n}\n\n.start-button:hover {\n  background-color: #00b140;\n  color: #141212;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony export */   "pubSub": () => (/* reexport safe */ _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub)
/* harmony export */ });
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/modules/playerFactory.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub */ "./src/modules/pubSub.js");
/* eslint-disable no-use-before-define */





const coinFlip = () => Math.floor(Math.random() * 2) + 1;

// Event emitter for pub/sub implementation

const getAdjacentSquareByDirection = (x, y, dir) => {
  switch (dir) {
    case 1:
      return [x, y + 1];
    case 2:
      return [x + 1, y];
    case 3:
      return [x, y - 1];
    default:
      return [x - 1, y];
  }
};

class Controller {
  constructor() {
    // pulls in players and board from playerFactory
    this.players = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)();
    // flips a coin to determine who goes first
    this.currentPlayer = coinFlip();
    this.shipsPlaced = false;
    this.gameOver = false;
    this.shipPlacedCount = 0;
    this.cpuHit = null;
    this.secondCpuHit = null;
    this.lastHit = null;
    this.probableShipDirection = null;
  }

  startGame() {
    if (coinFlip() === 1) {
      this.gameFlow(1);
    } else {
      this.gameFlow(2);
    }
  }

  getCPUMove() {
    let move = this.players.cpu.attack();

    if (this.secondCpuHit && !this.probableShipDirection) {
      this.probableShipDirection = this.getProbableShipDirection();
    }

    if (this.probableShipDirection) {
      switch (this.probableShipDirection) {
        case 1:
          move = getAdjacentSquareByDirection(
            this.lastHit[0],
            this.lastHit[1],
            1
          );
          break;

        case 2:
          move = getAdjacentSquareByDirection(
            this.lastHit[0],
            this.lastHit[1],
            2
          );
          break;

        case 3:
          move = getAdjacentSquareByDirection(
            this.lastHit[0],
            this.lastHit[1],
            3
          );
          break;

        default:
          move = getAdjacentSquareByDirection(
            this.lastHit[0],
            this.lastHit[1],
            4
          );
          break;
      }
    }

    if (this.cpuHit && !this.secondCpuHit && !this.probableShipDirection) {
      move = this.getRandomAdjacentSquare(this.cpuHit);
    }

    let result = this.players.human.board.receiveAttack(move);

    while (result === false) {
      const newAttack = this.players.cpu.attack();

      move = newAttack;
      result = this.players.human.board.receiveAttack(newAttack);
    }

    const resultArray = [];
    resultArray.push(move[0], move[1]);
    if (result === "hit") {
      resultArray.push(true, true);

      if (this.cpuHit && !this.secondCpuHit && !this.probableShipDirection) {
        this.secondCpuHit = [move[0], move[1]];
      }

      if (!this.cpuHit) {
        this.cpuHit = [move[0], move[1]];
      }

      this.lastHit = [move[0], move[1]];
    } else if (result === "miss") {
      resultArray.push(false, true);
      if (this.probableShipDirection) {
        switch (this.probableShipDirection) {
          case 1:
            this.probableShipDirection = 3;
            break;
          case 2:
            this.probableShipDirection = 4;
            break;
          case 3:
            this.probableShipDirection = 1;
            break;
          default:
            this.probableShipDirection = 2;
            break;
        }
        this.lastHit = this.cpuHit;
      }
    } else if (result === "sunk") {
      this.cpuHit = null;
      this.secondCpuHit = null;
      this.probableShipDirection = null;
      this.lastHit = null;
      resultArray.push(true, true);
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("sunk", false);
    } else if (result === "gameOver") {
      resultArray.push(true, true, true);
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("gameOver", "The computer wins!");
      this.gameOver = true;
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("markSquareHit", resultArray);
    }

    if (result !== false) {
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(1);
    }
  }

  gameFlow(whoseTurn) {
    if (this.gameOver === true) {
      return;
    }
    if (whoseTurn === 1 && this.gameOver === false) {
      // prompt player for a move
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("getPlayersMove", _interface__WEBPACK_IMPORTED_MODULE_1__.getPlayerMove);
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

  decrementPlacedCount() {
    this.shipPlacedCount -= 1;
  }

  shipPlaced() {
    this.shipPlacedCount += 1;

    if (this.shipPlacedCount === 4) {
      this.shipsPlaced = true;
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("shipsPlaced", _interface__WEBPACK_IMPORTED_MODULE_1__.shipsPlaced);
    }
  }

  playersMove(move) {
    const result = this.players.cpu.board.receiveAttack(move);

    const resultArray = [];
    resultArray.push(move[0], move[1]);

    if (result === "hit") {
      resultArray.push(true, false);
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(2);
    } else if (result === "miss") {
      resultArray.push(false, false);
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(2);
    } else if (result === "sunk") {
      resultArray.push(true, false);
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(2);
      // change the below to use pub/sub too
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("sunk", true);
    } else if (result === "gameOver") {
      resultArray.push(true, false, true);
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("markSquareHit", resultArray);
      this.gameOver = true;
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("gameOver", "You win");
    } else if (result === "false") {
      _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.pub("invalid");
      this.gameFlow(1);
    }
  }

  getRandomAdjacentSquare(hit) {
    const x = hit[0];
    const y = hit[1];
    const { board } = this.players.human;
    const adjacentSquares = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    const validSquares = [];

    adjacentSquares.forEach((square) => {
      if (board.checkIfSquareExists(square[0], square[1])) {
        validSquares.push(square);
      }
    });

    const validAttacks = [];
    validSquares.forEach((square) => {
      if (!board.checkIfSquareIsHit(square[0], square[1])) {
        validAttacks.push(square);
      }
    });

    if (validAttacks.length === 0) {
      this.cpuHit = false;
    }

    // get a random square from validAttacks
    const randomIndex = Math.floor(Math.random() * validAttacks.length);
    const randomSquare = validAttacks[randomIndex];

    return randomSquare;
  }

  getProbableShipDirection() {
    let dir;
    const x1 = this.cpuHit[0];
    const y1 = this.cpuHit[1];
    const x2 = this.secondCpuHit[0];
    const y2 = this.secondCpuHit[1];
    if (x1 === x2) {
      if (y2 > y1) {
        dir = 1;
      } else {
        dir = 3;
      }
    } else if (x2 > x1) {
      dir = 2;
    } else {
      dir = 4;
    }

    return dir;
  }

  placeHuman(ship) {
    const result = this.players.human.board.placeShipOnBoard(
      ship[0],
      ship[1],
      Number(ship[2]),
      ship[3]
    );

    if (result !== false) {
      placedShip(result);
    }
  }

  rotateShip(shipData) {
    this.decrementPlacedCount();
    const result = this.players.human.board.rotateShipinStorage(shipData);

    if (result !== false) {
      this.shipPlaced();
    }
  }

  moveShip(details) {
    this.decrementPlacedCount();
    this.players.human.board.moveShipInStorage(
      details[0],
      details[1],
      details[2],
      details[3]
    );
  }
}

const controller = new Controller();

const placedShip = controller.shipPlaced.bind(controller);
const startGame = controller.startGame.bind(controller);
const playersMove = controller.playersMove.bind(controller);
const getCPUMove = controller.getCPUMove.bind(controller);
const placeHumanShip = controller.placeHuman.bind(controller);
const rotateShip = controller.rotateShip.bind(controller);
const moveShip = controller.moveShip.bind(controller);
const markSquare = _interface__WEBPACK_IMPORTED_MODULE_1__.markSquareHit.bind(_interface__WEBPACK_IMPORTED_MODULE_1__);

_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("placeShip", placeHumanShip);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("shipsPlaced", _interface__WEBPACK_IMPORTED_MODULE_1__.shipsPlaced);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("gameStart", startGame);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("getPlayersMove", _interface__WEBPACK_IMPORTED_MODULE_1__.getPlayerMove);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("playersMove", playersMove);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("rotateShip", rotateShip);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("moveShip", moveShip);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("getPlayerMove", _interface__WEBPACK_IMPORTED_MODULE_1__.getPlayerMove);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("markSquareHit", markSquare);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("sunk", _interface__WEBPACK_IMPORTED_MODULE_1__.sunk);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("gameOver", _interface__WEBPACK_IMPORTED_MODULE_1__.gameOver);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("invalid", _interface__WEBPACK_IMPORTED_MODULE_1__.invalidMove);
_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub("updateNots", _interface__WEBPACK_IMPORTED_MODULE_1__.updateNots);

_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubSub.sub(
  "decrementPlacedCount",
  controller.decrementPlacedCount.bind(controller)
);




/***/ }),

/***/ "./src/modules/displayObjects.js":
/*!***************************************!*\
  !*** ./src/modules/displayObjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayObjects": () => (/* binding */ displayObjects),
/* harmony export */   "notifs": () => (/* binding */ notifs),
/* harmony export */   "ships": () => (/* binding */ ships)
/* harmony export */ });
const displayObjects = [
  {
    name: "main",
    nodeType: "main",
    parent: "body",
  },
  {
    name: "bezel",
    nodeType: "div",
    parent: "main",
    class1: "bezel",
  },
  {
    name: "gameContainer",
    nodeType: "div",
    parent: ".bezel",
    class1: "game-container",
  },
  {
    name: "scanline",
    nodeType: "div",
    parent: ".game-container",
    class1: "scanline",
  },
  {
    name: "titleContainer",
    nodeType: "div",
    parent: ".game-container",
    class1: "title-container",
  },
  {
    name: "notifArea",
    nodeType: "div",
    parent: ".game-container",
    class1: "notif-area",
  },
  {
    name: "notifUpper",
    nodeType: "div",
    parent: ".notif-area",
    class1: "notif-left",
  },
  {
    name: "notifLower",
    nodeType: "div",
    parent: ".notif-area",
    class1: "notif-right",
  },
  {
    name: "mainTitle",
    nodeType: "h1",
    parent: ".title-container",
    class1: "title",
    text: "BATTLESHIP",
  },
  {
    name: "placementContainer",
    nodeType: "div",
    parent: ".game-container",
    class1: "placement-container",
  },
  {
    name: "gridContainer",
    nodeType: "div",
    parent: ".placement-container",
    class1: "grid-container",
  },
  {
    name: "humanGrid",
    nodeType: "div",
    parent: ".grid-container",
    class1: "placement-grid",
  },
  {
    name: "cpuBoard",
    nodeType: "div",
    parent: ".grid-container",
    class1: "cpu-board",
  },
  {
    name: "shipPlacementContainer",
    nodeType: "div",
    parent: ".placement-container",
    class1: "ship-placement-container",
  },
  {
    name: "bShipContainer",
    nodeType: "div",
    parent: ".ship-placement-container",
    class1: "bship-container",
    class2: "ship-container",
  },
  {
    name: "cruiserContainer",
    nodeType: "div",
    parent: ".ship-placement-container",
    class1: "cruiser-container",
    class2: "ship-container",
  },
  {
    name: "destroyerContainer",
    nodeType: "div",
    parent: ".ship-placement-container",
    class1: "destroyer-container",
    class2: "ship-container",
  },
  {
    name: "frigateContainer",
    nodeType: "div",
    parent: ".ship-placement-container",
    class1: "frigate-container",
    class2: "ship-container",
  },
  {
    name: "startButton",
    nodeType: "input",
    parent: ".game-container",
    class1: "start-button",
    inputType: "button",
    value: "START",
  },
  {
    name: "placementGridSquare",
    nodeType: "div",
    parent: ".placement-grid",
    class1: "placement-grid-square",
  },
];

const ships = [
  {
    name: "Battleship",
    nodeType: "div",
    parent: ".bship-container",
    class1: "battleship-placement",
  },
  {
    name: "Cruiser",
    nodeType: "div",
    parent: ".cruiser-container",
    class1: "cruiser-placement",
  },
  {
    name: "Destroyer",
    nodeType: "div",
    parent: ".destroyer-container",
    class1: "destroyer-placement",
  },
  {
    name: "Frigate",
    nodeType: "div",
    parent: ".frigate-container",
    class1: "frigate-placement",
  },
];

const notifs = [
  {
    name: "notifHuman",
    nodeType: "h3",
    parent: ".notif-left",
    class1: "notif",
    class2: "notif-human",
  },
  {
    name: "notifCpu",
    nodeType: "h3",
    parent: ".notif-right",
    class1: "notif",
    class2: "notif-cpu",
  },
];


/***/ }),

/***/ "./src/modules/gameBoardFactory.js":
/*!*****************************************!*\
  !*** ./src/modules/gameBoardFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildBoard": () => (/* binding */ buildBoard),
/* harmony export */   "checkFleetSunk": () => (/* binding */ checkFleetSunk),
/* harmony export */   "checkForOccupants": () => (/* binding */ checkForOccupants),
/* harmony export */   "checkIfSquareExists": () => (/* binding */ checkIfSquareExists),
/* harmony export */   "checkIfSquareIsHit": () => (/* binding */ checkIfSquareIsHit),
/* harmony export */   "cpuBoard": () => (/* binding */ cpuBoard),
/* harmony export */   "deleteShip": () => (/* binding */ deleteShip),
/* harmony export */   "getShip": () => (/* binding */ getShip),
/* harmony export */   "moveShipInStorage": () => (/* binding */ moveShipInStorage),
/* harmony export */   "placeShipOnBoard": () => (/* binding */ placeShipOnBoard),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "receiveAttack": () => (/* binding */ receiveAttack)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/modules/shipFactory.js");
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */


class Square {
  constructor(x, y) {
    x = x || 0; // converts falsey values to 0 (in this case, NaN)
    this.xy = [x, y];
    this.occupant = null;
    this.hit = false;
  }

  placeShipOnSquare(shipID) {
    console.log('placing ship on square! this is', this);
    this.occupant = shipID;
  }
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
    this.moveShipInStorage = moveShipInStorage;
    this.checkIfSquareExists = checkIfSquareExists;
    this.checkIfSquareIsHit = checkIfSquareIsHit;
  }
}

const playerBoard = new Board();
const cpuBoard = new Board();

function buildBoard() {
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

function checkIfSquareIsHit(x, y) {
    return this.board[x][y].hit;
}

function checkIfSquareExists(x, y) {
  if (x < 0 || x > 9 || y < 0 || y > 9) { 
    return false;
  }
  return true;
}

function placeShipOnBoard(x, y, horizVert, shipType, ID) {
  // make a new ship according to shipType
  const newShip = _shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory.shipFactory(shipType);
  newShip.direction = horizVert;
  const newShipLength = newShip.length;

  // if this was an already existing ship, give it its old ID
  if (ID) {
    newShip.shipID = ID;
  }

  // the following if statements check that this is a legal ship placement
  if (horizVert === 0) {
    if (x + newShipLength > 10) {
      return false;
    }
  } else if (y - newShipLength < -1) {
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

  for (let i = 0; i < newShipLength; i += 1) {
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

  if (!this.checkIfSquareExists(x, y)) {
    return false;
  }

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
    for (let i = 0; i < length; i += 1) {
      const element = this.board[x + i][y];
      if (element.occupant !== null) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < length; i += 1) {
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

  // pubSub.pub("decrementPlacedCount", 1);
  for (let i = 0; i < this.shipArray.length; i += 1) {
    if (this.shipArray[i].shipID === ID) {
      this.shipArray.splice(i, 1);
    }
  }
}

function rotateShipinStorage(shipData) {
  const shipID = this.board[shipData[0]][shipData[1]].occupant;

  const ship = this.getShip(shipID);

  const x = Number(shipData[0]);
  const y = Number(shipData[1]);
  let dir = Number(shipData[2]);
  const length = Number(shipData[3]);


  // if there is a ship, remove it from the board
  if (ship !== undefined) {
    this.deleteShip(shipID);

    if (dir === 0) {
      // if the ship is horizontal, clear the board of the ship horizontally
      console.log('ship is horizontal!')
      for (let i = 0; i < ship.length; i += 1) {
        const xElement = this.board[x + i][y];

        xElement.occupant = null;
      }

      // check that the squares we will place the ship in are not occupied
      for (let i = 0; i < ship.length; i += 1) {
        const yElement = this.board[x][y - i];
        if (yElement.occupant !== null) {
          return false;
        }
      }

      // having removed the ship, place it with the new direction
    } else {
      // else clear the board of the ship vertically
      console.log('ship is vertical!');
      for (let i = 0; i < ship.length; i += 1) {
        const yElement = this.board[x][y - i];

        yElement.occupant = null;
      }

      // check that the squares we will place the ship in are not occupied
      for (let i = 0; i < ship.length; i += 1) {
        if (!this.board[x + i]) {
          return false;
        }
        const xElement = this.board[x + i][y];
        if (xElement.occupant !== null) {
          return false;
        }
      }
    }
  }
  
  // flip the direction
  if (dir === 0) { dir = 1; } else { dir = 0; };

  // having removed the ship, replace it with the new direction and return result
  const result = this.placeShipOnBoard(x, y, dir, length, shipID);
  return result;
}

function moveShipInStorage(x, y, direction, length) {

    // find the ship at the given coordinates and get its direction
  const shipID = this.board[x][y].occupant;
  const ship = this.getShip(this.board[x][y].occupant);

  if (ship === undefined) {
    // if there is no ship at these coords, it's because there was an invalid
    // ship placement. Thererefore, there is no ship to delete. So, return.
    return;
  }
  const dir = ship.direction;

  // delete the ship from shipArray
  this.deleteShip(shipID);

  // clear the board of the ship
  if (dir === 0) {
    // if the ship is horizontal, clear the board of the ship horizontally
    for (let i = 0; i < length; i += 1) {
      const xElement = this.board[x + i][y];
      xElement.occupant = null;
    }
  } else {
    // else clear the board of the ship vertically
    for (let i = 0; i < length; i += 1) {
      const yElement = this.board[x][y - i];
      yElement.occupant = null;
    }
  }
}




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
/* harmony export */   "buildShipPlacement": () => (/* binding */ buildShipPlacement),
/* harmony export */   "buildShips": () => (/* binding */ buildShips),
/* harmony export */   "cpuAttack": () => (/* binding */ cpuAttack),
/* harmony export */   "drag": () => (/* binding */ drag),
/* harmony export */   "drop": () => (/* binding */ drop),
/* harmony export */   "gameOver": () => (/* binding */ gameOver),
/* harmony export */   "getPlayerMove": () => (/* binding */ getPlayerMove),
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "iface": () => (/* binding */ iface),
/* harmony export */   "invalidMove": () => (/* binding */ invalidMove),
/* harmony export */   "markSquareHit": () => (/* binding */ markSquareHit),
/* harmony export */   "removeAttackListeners": () => (/* binding */ removeAttackListeners),
/* harmony export */   "rotateShip": () => (/* binding */ rotateShip),
/* harmony export */   "shipsPlaced": () => (/* binding */ shipsPlaced),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "sunk": () => (/* binding */ sunk),
/* harmony export */   "updateNotsDisplay": () => (/* binding */ updateNotsDisplay)
/* harmony export */ });
/* harmony import */ var _componentFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentFactory */ "./src/modules/componentFactory.js");
/* harmony import */ var _displayObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayObjects */ "./src/modules/displayObjects.js");
/* harmony import */ var _resources_Cruiser_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/Cruiser.png */ "./src/resources/Cruiser.png");
/* harmony import */ var _resources_Battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/Battleship.png */ "./src/resources/Battleship.png");
/* harmony import */ var _resources_Destroyer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/Destroyer.png */ "./src/resources/Destroyer.png");
/* harmony import */ var _resources_Frigate_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/Frigate.png */ "./src/resources/Frigate.png");
/* harmony import */ var _resources_explosion_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources/explosion.mp3 */ "./src/resources/explosion.mp3");
/* harmony import */ var _resources_laser_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/laser.mp3 */ "./src/resources/laser.mp3");
/* harmony import */ var _resources_music_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resources/music.mp3 */ "./src/resources/music.mp3");
/* harmony import */ var _resources_sunk_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resources/sunk.mp3 */ "./src/resources/sunk.mp3");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controller */ "./src/modules/controller.js");

/* eslint-disable no-sequences */












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
    this.startGame = startGame;
    this.drop = drop;
    this.addDragListeners = addDragListeners;
    this.allowDrop = allowDrop;
    this.buildInterface = buildInterface;
    this.instructions = [];
    this.gameNots = [];
    this.updateNotsDisplay = updateNotsDisplay;
    this.markSquare = markSquare;
  }

  addNotif(notif, player) {
    const notifWithTimestamp = `${getTime()}: ${notif}`;
    if (player === 1) {
      if (this.instructions.length > 1) {
        this.instructions.shift();
      }
      this.instructions.push(notifWithTimestamp);
    } else {
      if (this.gameNots.length > 1) {
        this.gameNots.shift();
      }
      this.gameNots.push(notifWithTimestamp);
    }
    this.updateNotsDisplay();
  }
}

const iface = new Interface();

function buildGrid(player) {
  let sqNum = 0;
  for (let i = 9; i > -1; i -= 1) {
    for (let j = 0; j < 10; j += 1) {
      const newSquare = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.displayObjects[_displayObjects__WEBPACK_IMPORTED_MODULE_1__.displayObjects.length - 1];
      newSquare.xy = [j, i, sqNum, player];
      sqNum += 1;
      if (player === 1) {
        newSquare.class2 = "player-grid-square";
        newSquare.class3 = `player-grid-square-${j}-${i}`;
      } else {
        newSquare.class2 = "cpu-grid-square";
        newSquare.parent = ".cpu-board";
        newSquare.class3 = `cpu-grid-square-${j}-${i}`;
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
        document.querySelector(`.${element.class1}`).innerHTML = `
        <img src=${_resources_Battleship_png__WEBPACK_IMPORTED_MODULE_3__} alt=${element.name} draggable="true" class="draggable" id="Battleship" data-length="6" data-direction="0">`;
        break;

      case "Cruiser":
        document.querySelector(`.${element.class1}`).innerHTML = `
        <img src=${_resources_Cruiser_png__WEBPACK_IMPORTED_MODULE_2__} alt=${element.name} draggable="true" class="draggable" id="Cruiser"  data-length="4" data-direction="0">`;
        break;

      case "Destroyer":
        document.querySelector(`.${element.class1}`).innerHTML = `
        <img src=${_resources_Destroyer_png__WEBPACK_IMPORTED_MODULE_4__} alt=${element.name} draggable="true" class="draggable" id="Destroyer"  data-length="3" data-direction="0">`;
        break;

      default:
        document.querySelector(`.${element.class1}`).innerHTML = `
        <img src=${_resources_Frigate_png__WEBPACK_IMPORTED_MODULE_5__} alt=${element.name} draggable="true" class="draggable" id="Frigate"  data-length="2" data-direction="0">`;
        break;
    }
  }
}

function rotateShip(e) {
  const xy = [
    e.target.parentElement.dataset.x,
    e.target.parentElement.dataset.y,
    e.target.dataset.direction,
    e.target.dataset.length,
  ];
  const ship = e.target;

  _controller__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("rotateShip", xy);

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
  }
}

let dragStorage = "test";

function drag(e) {
  dragStorage = e.target;

  if (e.target.parentElement.classList.contains("placement-grid-square")) {
    const x = Number(e.target.parentElement.dataset.x);
    const y = Number(e.target.parentElement.dataset.y);
    const result = [
      x,
      y,
      Number(e.target.dataset.direction),
      Number(e.target.dataset.length),
    ];
    _controller__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("moveShip", result);
  }
  e.dataTransfer.setData("img", e.target.id);
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("img");

  e.target.appendChild(document.getElementById(data));

  _controller__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("placeShip", [
    Number(e.target.dataset.x),
    Number(e.target.dataset.y),
    Number(dragStorage.dataset.direction),
    Number(dragStorage.dataset.length),
  ]);

  document
    .querySelector(`#${dragStorage.id}`)
    .addEventListener("click", rotateShip);
}

function allowDrop(e) {
  e.preventDefault();
}

const bindAddAttackListeners = iface.addAttackListeners.bind(iface);

function startGame() {
  // clear the notification area
  document.querySelector(".notif-left").innerHTML = "";

  // tell the controller to start the game
  _controller__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("gameStart", "true");

  // remove ship-rotation event listeners
  const draggables = document.querySelectorAll(".draggable");
  for (let i = 0; i < draggables.length; i += 1) {
    const element = draggables[i];
    element.removeEventListener("click", rotateShip);
    element.removeEventListener("dragstart", drag);
  }

  // remove drop event listeners
  const squares = document.querySelectorAll(".placement-grid-square");

  for (let i = 0; i < squares.length; i += 1) {
    const element = squares[i];
    element.removeEventListener("drop", drop);
    element.removeEventListener("dragover", allowDrop);
  }

  // remove start button
  document.querySelector(".start-button").remove();

  // add the attack event listeners to the cpu board
  bindAddAttackListeners();
}

function shipsPlaced() {
  const startButton = document.querySelector(".start-button");
  startButton.addEventListener("click", startGame);
  document.querySelector(".notif-left").innerHTML =
    "Ships placed! Click start to begin!";
}



function cpuAttack() {
  let successfulAttack = false;
  while (!successfulAttack) {
    const thisAttack = controller.cpu.attack();
    if (thisAttack) {
      successfulAttack = true;
    }
  }
}

function attack(e) {
  const x = Number(e.target.dataset.x);
  const y = Number(e.target.dataset.y);
  _controller__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("playersMove", [x, y]);
}

const abortController = new AbortController();
const { signal } = abortController;

function addAttackListeners() {
  const gridSquares = document.querySelectorAll(".cpu-grid-square");
  gridSquares.forEach((square) => {
    square.addEventListener("click", attack, { signal, once: true });
  });
}

function removeAttackListeners() {
  abortController.abort();
}

function sunk(isPlayerBoard) {
  playSound(3);
  if (!isPlayerBoard) {
    addNotif("The computer sunk your ship!", 2);
  } else {
    addNotif("You sunk an enemy ship!", 2);
  }
}

function updateNotsDisplay() {
  // select and clear both the human and cpu notification displays

  const leftNotifs = document.querySelector(".notif-left");
  leftNotifs.innerHTML = "";

  const rightNotifs = document.querySelector(".notif-right");
  rightNotifs.innerHTML = "";

  // initialize two strings to hold the html for the notifications
  let leftResult = "";
  let rightResult = "";

  // get the notification arrays
  const { instructions, gameNots } = this;

  // assemble the html for the notifications
  for (let i = 0; i < instructions.length; i += 1) {
    leftResult += `<h3 class="notif instruction">${instructions[i]}</h3>`;
  }
  for (let i = 0; i < gameNots.length; i += 1) {
    rightResult += `<h3 class="notif cpu-notif">${gameNots[i]}</h3>`;
  }

  // write the html to the notification displays
  leftNotifs.innerHTML = leftResult;
  rightNotifs.innerHTML = rightResult;
}

const explosion = new Audio(_resources_explosion_mp3__WEBPACK_IMPORTED_MODULE_6__);
const laser = new Audio(_resources_laser_mp3__WEBPACK_IMPORTED_MODULE_7__);
const shipSunk = new Audio(_resources_sunk_mp3__WEBPACK_IMPORTED_MODULE_9__);

function playSound(sound) {
  if (sound === 1) {
    explosion.play();
  } else if (sound === 2) {
    laser.play();
  } else {
    shipSunk.play();
  }
}

function markSquareHit(array) {
  let square;
  const x = array[0];
  const y = array[1];
  const isOccupied = array[2];
  const isPlayerBoard = array[3];

  if (!array[4]) {
    if (isPlayerBoard) {
      square = document.querySelector(`.player-grid-square-${x}-${y}`);

      if (isOccupied) {
        square.classList.add("hit-occupied");
        addNotif("The computer hit your ship!", 2);
        playSound(1);
      } else {
        square.classList.add("hit-empty");
        addNotif("The computer hit an empty square!", 2);
        playSound(2);
      }
    } else {
      square = document.querySelector(`.cpu-grid-square-${x}-${y}`);

      if (isOccupied) {
        square.classList.add("hit-occupied");
        addNotif("You hit an enemy ship!", 2);
      } else {
        square.classList.add("hit-empty");
        addNotif("You hit an empty square!", 2);
      }
    }
  }
}

function invalidMove() {
  document.querySelector(".player-alert").textContent =
    "You tried to attack an invalid square!";
}

function gameOver(message) {
  bindRemoveAttackListeners();
  document.querySelector(".notif-left").innerHTML =
    '<h2 class="notif instruction">Game Over! Click refresh to play again.</h2>';
  document.querySelector(
    ".notif-right"
  ).innerHTML = `<h2 class="notif instruction">${message}</h2>`;
}





function getPlayerMove() {
  addNotif("Your move! Please attack an enemy square by clicking.", 1);
}



function addDragListeners() {
  const draggables = document.querySelectorAll(".draggable");

  for (let i = 0; i < draggables.length; i += 1) {
    const element = draggables[i];

    element.addEventListener("dragstart", drag);
  }
  const squares = document.querySelectorAll(".placement-grid-square");

  for (let i = 0; i < squares.length; i += 1) {
    const element = squares[i];
    element.addEventListener("drop", drop);
    element.addEventListener("dragover", allowDrop);
  }
}

function buildShipPlacement() {
  document
    .querySelector(".start-button")
    .removeEventListener("click", buildShipPlacement);
  addDragListeners();

  // Sends the player a message to place ships
  document.querySelector(".notif-left").innerHTML =
    '<h2 class="notif human-notif">Drag and drop to place your ships! Click its left square to rotate a placed ship.</h2>';

  // Plays the music
  const music = new Audio(_resources_music_mp3__WEBPACK_IMPORTED_MODULE_8__);
  music.play();
}

// Get the DOM nodes' info for the first screen from displayObjects
// and draws them



function buildInterface() {
  for (let i = 0; i < _displayObjects__WEBPACK_IMPORTED_MODULE_1__.displayObjects.length - 1; i += 1) {
    const element = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.displayObjects[i];
    (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(element);
  }
  document
    .querySelector(".start-button")
    .addEventListener("click", buildShipPlacement);
  buildGrid(1);
  buildGrid(2);
  buildShips();

  // add welcome message to the notification area

  document.querySelector(".notif-left").innerHTML =
    '<h2 class="notif notif-human">Welcome to Battleship! Click Start to place your ships!</h2>';
}



function getTime() {
  const date = new Date();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes === "0") {
    minutes = "00";
  }
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}



const addNotif = iface.addNotif.bind(iface);

const bindRemoveAttackListeners = iface.removeAttackListeners.bind(iface);

function markSquare(square) {
  const mark = iface.markSquareHit.bind(iface);
  mark(square);
}




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
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardFactory */ "./src/modules/gameBoardFactory.js");


const playerFactory = () => {
  const innerPlayerFactory = (type) => {
    let board;
    if (type === 1) {
      board = _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__.playerBoard;
    } else {
      board = _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__.cpuBoard;
    }
    const playerType = type;

    board.playerType = playerType;
    return { playerType, board };
  };

  const human = innerPlayerFactory(1);
  const cpu = innerPlayerFactory(2);

  const placeCPUShips = () => {
    const shipTypes = [6, 4, 3, 2];

    const placeShip = (type) => {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const horizVert = Math.floor(Math.random() * 2);
      const result = cpu.board.placeShipOnBoard(x, y, horizVert, type);
      if (result === false) {
        placeShip(type);
      }
    };

    shipTypes.forEach((shipType) => {
      placeShip(shipType);
    });
  };

  placeCPUShips();

  const cpuAttack = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  };

  const humanAttack = (x, y) => cpu.board.gameBoard.receiveAttack(x, y);

  human.attack = humanAttack;
  cpu.attack = cpuAttack;

  return { human, cpu };
};


/***/ }),

/***/ "./src/modules/pubSub.js":
/*!*******************************!*\
  !*** ./src/modules/pubSub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubSub": () => (/* binding */ pubSub)
/* harmony export */ });
class Topic {
  constructor(topic) {
    this.subscribers = [];
  }
}

class PubSub {
  sub(topic, subscriber) {
    if (typeof subscriber !== "function") {
      return `${typeof subscriber} is not a valid argument for subscribers`;
    }
    if (!this[topic]) {
      this[topic] = new Topic();
    }
    this[topic].subscribers.push(subscriber);
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
    this[topic].subscribers.forEach((sub) => sub(payload));
  }

  returnSubscribers(topic) {
    const result = [];
    this[topic].subscribers.forEach((sub) => result.push(sub));
    return result;
  }
}

const pubSub = new PubSub();

/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
/* eslint-disable no-shadow */
const shipFactory = (() => {
  let shipCounter = -1;
  const shipFactory = (shipType) => {
    shipCounter += 1;
    const shipID = shipCounter;
    let type;
    let length;
    let hp;
    const sunk = false;
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
  return { shipFactory };
})();


/***/ }),

/***/ "./src/modules/retro.woff2":
/*!*********************************!*\
  !*** ./src/modules/retro.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9fa906af077ee8704f0.woff2";

/***/ }),

/***/ "./src/resources/Battleship.png":
/*!**************************************!*\
  !*** ./src/resources/Battleship.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c549a7e59ae2fa003af4.png";

/***/ }),

/***/ "./src/resources/Cruiser.png":
/*!***********************************!*\
  !*** ./src/resources/Cruiser.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8809fba4e6b6c64dc59d.png";

/***/ }),

/***/ "./src/resources/Destroyer.png":
/*!*************************************!*\
  !*** ./src/resources/Destroyer.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7f7a059bc086c14aa20.png";

/***/ }),

/***/ "./src/resources/Frigate.png":
/*!***********************************!*\
  !*** ./src/resources/Frigate.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da0083dac72595f37ecf.png";

/***/ }),

/***/ "./src/resources/explosion.mp3":
/*!*************************************!*\
  !*** ./src/resources/explosion.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d3e7db2644e93f9f404.mp3";

/***/ }),

/***/ "./src/resources/laser.mp3":
/*!*********************************!*\
  !*** ./src/resources/laser.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8d064b8cfd4e8c3bd0b.mp3";

/***/ }),

/***/ "./src/resources/music.mp3":
/*!*********************************!*\
  !*** ./src/resources/music.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59d6e99a7e0196bfe383.mp3";

/***/ }),

/***/ "./src/resources/sunk.mp3":
/*!********************************!*\
  !*** ./src/resources/sunk.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "033c5b53e077f374aa84.mp3";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/styles.css */ "./src/modules/styles.css");




_modules_interface__WEBPACK_IMPORTED_MODULE_1__.iface.buildInterface();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ0M7QUFDWjs7QUFFdkMsb0VBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdHlsZXMuY3NzPzEwODAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29tcG9uZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVCb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcHViU3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcmV0cm8ud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBMT0FEIFJFVFJPIEZPTlQgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmV0cm9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIFJFU0VUIFNUWUxFUyAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4vKiBTVFlMRVMgKi9cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTYwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDgwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICMwMGIxNDA7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxcHggIzAwYjE0MCkgY29udHJhc3QoMikgYnJpZ2h0bmVzcygxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxNDEyMTI7XFxuICBmb250LWZhbWlseTogXFxcIlJldHJvXFxcIjtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbmxpbmUge1xcbiAgMCUge1xcbiAgICBib3R0b206IDEwMCU7XFxuICB9XFxuICA4MCUge1xcbiAgICBib3R0b206IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gIH1cXG59XFxuXFxuLnNjYW5saW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHotaW5kZXg6IDg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDBkZWcsXFxuICAgIHJnYmEoMCwgMCwgMCwgMCkgMCUsXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xKSAxMDAlXFxuICApO1xcbiAgb3BhY2l0eTogMC4xO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgYW5pbWF0aW9uOiBzY2FubGluZSA4cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5ub3RpZi1hcmVhIHtcXG4gIGhlaWdodDogMjIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDg0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm5vdGlmLWxlZnQsXFxuLm5vdGlmLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiByZ2IoMTAsIDExNywgMzMpIDVweCBzb2xpZDtcXG4gIHdpZHRoOiA4NDBweDtcXG59XFxuXFxuLm5vdGlmIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4ucGxhY2VtZW50LWdyaWQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jcHUtYm9hcmQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYjE0MDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMTAwcHg7XFxuXFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjFweCAjMDBmZjVlKSBjb250cmFzdCgyKSBicmlnaHRuZXNzKDEpO1xcbiAgei1pbmRleDogOTk5OTk5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1yb3RhdGVkIHtcXG4gIGxlZnQ6IC05OHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNydWlzZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtNTlweDtcXG4gIHRvcDogNjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0zOHB4O1xcbiAgdG9wOiA0MXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZnJpZ2F0ZS1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0xOHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDE0cHggMjMlIDE0cHggMTclO1xcbn1cXG5cXG4uZnJpZ2F0ZS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuXFxuLmhpdC1lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDExNiwgNTQpO1xcbn1cXG5cXG4uaGl0LW9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyMSwgMC44MTUpO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmV0cm9cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5zdGFydC1idXR0b24ge1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItY29sb3I6ICMwMGIxNDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTIxMjtcXG4gIGNvbG9yOiAjMDBiMTQwO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMTQwO1xcbiAgY29sb3I6ICMxNDEyMTI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQW9COztBQUVwQjtFQUNFLG9CQUFvQjtFQUNwQiw0REFBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxpQkFBaUI7O0FBRWpCOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQztBQUNBOzs7OztFQUtFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDhEQUE4RDtFQUM5RCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFVBQVU7RUFDVjs7Ozs7R0FLQztFQUNELFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLHNCQUFzQjs7RUFFdEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnRUFBZ0U7RUFDaEUsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTE9BRCBSRVRSTyBGT05UICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJldHJvXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL3JldHJvLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi8qIFNUWUxFUyAqL1xcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwODBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzAwYjE0MDtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDFweCAjMDBiMTQwKSBjb250cmFzdCgyKSBicmlnaHRuZXNzKDEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzE0MTIxMjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmV0cm9cXFwiO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FubGluZSB7XFxuICAwJSB7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3R0b206IDAlO1xcbiAgfVxcbn1cXG5cXG4uc2NhbmxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgei1pbmRleDogODtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMGRlZyxcXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwJSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEpIDEwMCVcXG4gICk7XFxuICBvcGFjaXR5OiAwLjE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwMCU7XFxuICBhbmltYXRpb246IHNjYW5saW5lIDhzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm5vdGlmLWFyZWEge1xcbiAgaGVpZ2h0OiAyMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogODQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ubm90aWYtbGVmdCxcXG4ubm90aWYtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IHJnYigxMCwgMTE3LCAzMykgNXB4IHNvbGlkO1xcbiAgd2lkdGg6IDg0MHB4O1xcbn1cXG5cXG4ubm90aWYge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiMTQwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMDBweDtcXG5cXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMXB4ICMwMGZmNWUpIGNvbnRyYXN0KDIpIGJyaWdodG5lc3MoMSk7XFxuICB6LWluZGV4OiA5OTk5OTk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5iYXR0bGVzaGlwLXJvdGF0ZWQge1xcbiAgbGVmdDogLTk4cHg7XFxuICB0b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY3J1aXNlci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC01OXB4O1xcbiAgdG9wOiA2MnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLXJvdGF0ZWQge1xcbiAgbGVmdDogLTM4cHg7XFxuICB0b3A6IDQxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mcmlnYXRlLXJvdGF0ZWQge1xcbiAgbGVmdDogLTE4cHg7XFxuICB0b3A6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5kZXN0cm95ZXItY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTRweCAyMyUgMTRweCAxNyU7XFxufVxcblxcbi5mcmlnYXRlLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4uaGl0LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgMTE2LCA1NCk7XFxufVxcblxcbi5oaXQtb2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIxLCAwLjgxNSk7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZXRyb1xcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogIzAwYjE0MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMjEyO1xcbiAgY29sb3I6ICMwMGIxNDA7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIxNDA7XFxuICBjb2xvcjogIzE0MTIxMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBub2RlVHlwZSxcbiAgICBwYXJlbnQsXG4gICAgdGV4dCxcbiAgICBpbnB1dFR5cGUsXG4gICAgdmFsdWUsXG4gICAgY2xhc3MxLFxuICAgIGNsYXNzMixcbiAgICBjbGFzczMsXG4gICAgdGFza0lELFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlkLFxuICAgIHh5LFxuICAgIGFsbG93RHJvcCxcbiAgfSA9IGVsZW1lbnQ7XG4gIGNvbnN0IGNyZWF0ZURPTU5vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KTtcbiAgICBjb25zdCBuZXdET01Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIG5ld0RPTU5vZGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG4gICAgaWYgKGlucHV0VHlwZSkge1xuICAgICAgbmV3RE9NTm9kZS50eXBlID0gaW5wdXRUeXBlO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0RPTU5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMSkge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMSk7XG4gICAgfVxuICAgIGlmIChjbGFzczIpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczIpO1xuICAgIH1cbiAgICBpZiAoY2xhc3MzKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MzKTtcbiAgICB9XG4gICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICBuZXdET01Ob2RlLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICBuZXdET01Ob2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgaWYgKGlkKSB7XG4gICAgICBuZXdET01Ob2RlLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgaWYgKHh5KSB7XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQueCA9IHh5WzBdO1xuICAgICAgbmV3RE9NTm9kZS5kYXRhc2V0LnkgPSB4eVsxXTtcbiAgICAgIG5ld0RPTU5vZGUuZGF0YXNldC5zcW51bSA9IHh5WzJdO1xuICAgIH1cbiAgICBpZiAoYWxsb3dEcm9wKSB7XG4gICAgICBuZXdET01Ob2RlLnNldEF0dHJpYnV0ZShcIm9uZHJvcFwiLCBcImRyb3AoZXZlbnQpXCIpO1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoXCJvbmRyYWdvdmVyXCIsIFwiYWxsb3dEcm9wKGV2ZW50KVwiKTtcbiAgICB9XG4gICAgcGFyZW50Tm9kZS5hcHBlbmQobmV3RE9NTm9kZSk7XG4gIH07XG4gIGNyZWF0ZURPTU5vZGUoKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgbm9kZVR5cGUsXG4gICAgcGFyZW50LFxuICAgIHRleHQsXG4gICAgaW5wdXRUeXBlLFxuICAgIHZhbHVlLFxuICAgIGNsYXNzMSxcbiAgICBjbGFzczIsXG4gICAgdGFza0lELFxuICB9O1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbmltcG9ydCB7IHBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpZmFjZSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YlN1YlwiO1xuXG5jb25zdCBjb2luRmxpcCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMTtcblxuLy8gRXZlbnQgZW1pdHRlciBmb3IgcHViL3N1YiBpbXBsZW1lbnRhdGlvblxuXG5jb25zdCBnZXRBZGphY2VudFNxdWFyZUJ5RGlyZWN0aW9uID0gKHgsIHksIGRpcikgPT4ge1xuICBzd2l0Y2ggKGRpcikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbeCwgeSArIDFdO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBbeCArIDEsIHldO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBbeCwgeSAtIDFdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW3ggLSAxLCB5XTtcbiAgfVxufTtcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHB1bGxzIGluIHBsYXllcnMgYW5kIGJvYXJkIGZyb20gcGxheWVyRmFjdG9yeVxuICAgIHRoaXMucGxheWVycyA9IHBsYXllckZhY3RvcnkoKTtcbiAgICAvLyBmbGlwcyBhIGNvaW4gdG8gZGV0ZXJtaW5lIHdobyBnb2VzIGZpcnN0XG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gY29pbkZsaXAoKTtcbiAgICB0aGlzLnNoaXBzUGxhY2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcFBsYWNlZENvdW50ID0gMDtcbiAgICB0aGlzLmNwdUhpdCA9IG51bGw7XG4gICAgdGhpcy5zZWNvbmRDcHVIaXQgPSBudWxsO1xuICAgIHRoaXMubGFzdEhpdCA9IG51bGw7XG4gICAgdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIGlmIChjb2luRmxpcCgpID09PSAxKSB7XG4gICAgICB0aGlzLmdhbWVGbG93KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbWVGbG93KDIpO1xuICAgIH1cbiAgfVxuXG4gIGdldENQVU1vdmUoKSB7XG4gICAgbGV0IG1vdmUgPSB0aGlzLnBsYXllcnMuY3B1LmF0dGFjaygpO1xuXG4gICAgaWYgKHRoaXMuc2Vjb25kQ3B1SGl0ICYmICF0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbikge1xuICAgICAgdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24gPSB0aGlzLmdldFByb2JhYmxlU2hpcERpcmVjdGlvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbikge1xuICAgICAgc3dpdGNoICh0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbikge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbW92ZSA9IGdldEFkamFjZW50U3F1YXJlQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICB0aGlzLmxhc3RIaXRbMF0sXG4gICAgICAgICAgICB0aGlzLmxhc3RIaXRbMV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbW92ZSA9IGdldEFkamFjZW50U3F1YXJlQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICB0aGlzLmxhc3RIaXRbMF0sXG4gICAgICAgICAgICB0aGlzLmxhc3RIaXRbMV0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbW92ZSA9IGdldEFkamFjZW50U3F1YXJlQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICB0aGlzLmxhc3RIaXRbMF0sXG4gICAgICAgICAgICB0aGlzLmxhc3RIaXRbMV0sXG4gICAgICAgICAgICAzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG1vdmUgPSBnZXRBZGphY2VudFNxdWFyZUJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgdGhpcy5sYXN0SGl0WzBdLFxuICAgICAgICAgICAgdGhpcy5sYXN0SGl0WzFdLFxuICAgICAgICAgICAgNFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3B1SGl0ICYmICF0aGlzLnNlY29uZENwdUhpdCAmJiAhdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24pIHtcbiAgICAgIG1vdmUgPSB0aGlzLmdldFJhbmRvbUFkamFjZW50U3F1YXJlKHRoaXMuY3B1SGl0KTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLnJlY2VpdmVBdHRhY2sobW92ZSk7XG5cbiAgICB3aGlsZSAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgbmV3QXR0YWNrID0gdGhpcy5wbGF5ZXJzLmNwdS5hdHRhY2soKTtcblxuICAgICAgbW92ZSA9IG5ld0F0dGFjaztcbiAgICAgIHJlc3VsdCA9IHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5yZWNlaXZlQXR0YWNrKG5ld0F0dGFjayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0QXJyYXkgPSBbXTtcbiAgICByZXN1bHRBcnJheS5wdXNoKG1vdmVbMF0sIG1vdmVbMV0pO1xuICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmNwdUhpdCAmJiAhdGhpcy5zZWNvbmRDcHVIaXQgJiYgIXRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kQ3B1SGl0ID0gW21vdmVbMF0sIG1vdmVbMV1dO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY3B1SGl0KSB7XG4gICAgICAgIHRoaXMuY3B1SGl0ID0gW21vdmVbMF0sIG1vdmVbMV1dO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RIaXQgPSBbbW92ZVswXSwgbW92ZVsxXV07XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKGZhbHNlLCB0cnVlKTtcbiAgICAgIGlmICh0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24gPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24gPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdEhpdCA9IHRoaXMuY3B1SGl0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcInN1bmtcIikge1xuICAgICAgdGhpcy5jcHVIaXQgPSBudWxsO1xuICAgICAgdGhpcy5zZWNvbmRDcHVIaXQgPSBudWxsO1xuICAgICAgdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5sYXN0SGl0ID0gbnVsbDtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgdHJ1ZSk7XG4gICAgICBwdWJTdWIucHViKFwic3Vua1wiLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiZ2FtZU92ZXJcIikge1xuICAgICAgcmVzdWx0QXJyYXkucHVzaCh0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJnYW1lT3ZlclwiLCBcIlRoZSBjb21wdXRlciB3aW5zIVwiKTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgcHViU3ViLnB1YihcIm1hcmtTcXVhcmVIaXRcIiwgcmVzdWx0QXJyYXkpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICBwdWJTdWIucHViKFwibWFya1NxdWFyZUhpdFwiLCByZXN1bHRBcnJheSk7XG4gICAgICB0aGlzLmdhbWVGbG93KDEpO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVGbG93KHdob3NlVHVybikge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3aG9zZVR1cm4gPT09IDEgJiYgdGhpcy5nYW1lT3ZlciA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIHByb21wdCBwbGF5ZXIgZm9yIGEgbW92ZVxuICAgICAgcHViU3ViLnB1YihcImdldFBsYXllcnNNb3ZlXCIsIGlmYWNlLmdldFBsYXllck1vdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBwcm9tcHQgY3B1IGZvciBhIG1vdmVcbiAgICAgIGdldENQVU1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBhZGRUZXN0U2hpcHMoKSB7XG4gICAgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDAsIDAsIDYpO1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAxLCAwLCA0KTtcbiAgICB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMiwgMCwgMyk7XG4gICAgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDMsIDAsIDIpO1xuICAgIHRoaXMucGxheWVycy5jcHUuYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMCwgMCwgNik7XG4gICAgdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAxLCAwLCA0KTtcbiAgICB0aGlzLnBsYXllcnMuY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDIsIDAsIDMpO1xuICAgIHRoaXMucGxheWVycy5jcHUuYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMywgMCwgMik7XG4gIH1cblxuICBkZWNyZW1lbnRQbGFjZWRDb3VudCgpIHtcbiAgICB0aGlzLnNoaXBQbGFjZWRDb3VudCAtPSAxO1xuICB9XG5cbiAgc2hpcFBsYWNlZCgpIHtcbiAgICB0aGlzLnNoaXBQbGFjZWRDb3VudCArPSAxO1xuXG4gICAgaWYgKHRoaXMuc2hpcFBsYWNlZENvdW50ID09PSA0KSB7XG4gICAgICB0aGlzLnNoaXBzUGxhY2VkID0gdHJ1ZTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJzaGlwc1BsYWNlZFwiLCBpZmFjZS5zaGlwc1BsYWNlZCk7XG4gICAgfVxuICB9XG5cbiAgcGxheWVyc01vdmUobW92ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxheWVycy5jcHUuYm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlKTtcblxuICAgIGNvbnN0IHJlc3VsdEFycmF5ID0gW107XG4gICAgcmVzdWx0QXJyYXkucHVzaChtb3ZlWzBdLCBtb3ZlWzFdKTtcblxuICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgZmFsc2UpO1xuICAgICAgcHViU3ViLnB1YihcIm1hcmtTcXVhcmVIaXRcIiwgcmVzdWx0QXJyYXkpO1xuICAgICAgdGhpcy5nYW1lRmxvdygyKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2goZmFsc2UsIGZhbHNlKTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJtYXJrU3F1YXJlSGl0XCIsIHJlc3VsdEFycmF5KTtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwic3Vua1wiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKHRydWUsIGZhbHNlKTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJtYXJrU3F1YXJlSGl0XCIsIHJlc3VsdEFycmF5KTtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMik7XG4gICAgICAvLyBjaGFuZ2UgdGhlIGJlbG93IHRvIHVzZSBwdWIvc3ViIHRvb1xuICAgICAgcHViU3ViLnB1YihcInN1bmtcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiZ2FtZU92ZXJcIikge1xuICAgICAgcmVzdWx0QXJyYXkucHVzaCh0cnVlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICBwdWJTdWIucHViKFwibWFya1NxdWFyZUhpdFwiLCByZXN1bHRBcnJheSk7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJnYW1lT3ZlclwiLCBcIllvdSB3aW5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiZmFsc2VcIikge1xuICAgICAgcHViU3ViLnB1YihcImludmFsaWRcIik7XG4gICAgICB0aGlzLmdhbWVGbG93KDEpO1xuICAgIH1cbiAgfVxuXG4gIGdldFJhbmRvbUFkamFjZW50U3F1YXJlKGhpdCkge1xuICAgIGNvbnN0IHggPSBoaXRbMF07XG4gICAgY29uc3QgeSA9IGhpdFsxXTtcbiAgICBjb25zdCB7IGJvYXJkIH0gPSB0aGlzLnBsYXllcnMuaHVtYW47XG4gICAgY29uc3QgYWRqYWNlbnRTcXVhcmVzID0gW1xuICAgICAgW3ggLSAxLCB5XSxcbiAgICAgIFt4ICsgMSwgeV0sXG4gICAgICBbeCwgeSAtIDFdLFxuICAgICAgW3gsIHkgKyAxXSxcbiAgICBdO1xuICAgIGNvbnN0IHZhbGlkU3F1YXJlcyA9IFtdO1xuXG4gICAgYWRqYWNlbnRTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgaWYgKGJvYXJkLmNoZWNrSWZTcXVhcmVFeGlzdHMoc3F1YXJlWzBdLCBzcXVhcmVbMV0pKSB7XG4gICAgICAgIHZhbGlkU3F1YXJlcy5wdXNoKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB2YWxpZEF0dGFja3MgPSBbXTtcbiAgICB2YWxpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBpZiAoIWJvYXJkLmNoZWNrSWZTcXVhcmVJc0hpdChzcXVhcmVbMF0sIHNxdWFyZVsxXSkpIHtcbiAgICAgICAgdmFsaWRBdHRhY2tzLnB1c2goc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2YWxpZEF0dGFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNwdUhpdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGdldCBhIHJhbmRvbSBzcXVhcmUgZnJvbSB2YWxpZEF0dGFja3NcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkQXR0YWNrcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9IHZhbGlkQXR0YWNrc1tyYW5kb21JbmRleF07XG5cbiAgICByZXR1cm4gcmFuZG9tU3F1YXJlO1xuICB9XG5cbiAgZ2V0UHJvYmFibGVTaGlwRGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXI7XG4gICAgY29uc3QgeDEgPSB0aGlzLmNwdUhpdFswXTtcbiAgICBjb25zdCB5MSA9IHRoaXMuY3B1SGl0WzFdO1xuICAgIGNvbnN0IHgyID0gdGhpcy5zZWNvbmRDcHVIaXRbMF07XG4gICAgY29uc3QgeTIgPSB0aGlzLnNlY29uZENwdUhpdFsxXTtcbiAgICBpZiAoeDEgPT09IHgyKSB7XG4gICAgICBpZiAoeTIgPiB5MSkge1xuICAgICAgICBkaXIgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlyID0gMztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHgyID4geDEpIHtcbiAgICAgIGRpciA9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpciA9IDQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcjtcbiAgfVxuXG4gIHBsYWNlSHVtYW4oc2hpcCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5wbGFjZVNoaXBPbkJvYXJkKFxuICAgICAgc2hpcFswXSxcbiAgICAgIHNoaXBbMV0sXG4gICAgICBOdW1iZXIoc2hpcFsyXSksXG4gICAgICBzaGlwWzNdXG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICBwbGFjZWRTaGlwKHJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgcm90YXRlU2hpcChzaGlwRGF0YSkge1xuICAgIHRoaXMuZGVjcmVtZW50UGxhY2VkQ291bnQoKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQucm90YXRlU2hpcGluU3RvcmFnZShzaGlwRGF0YSk7XG5cbiAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5zaGlwUGxhY2VkKCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVNoaXAoZGV0YWlscykge1xuICAgIHRoaXMuZGVjcmVtZW50UGxhY2VkQ291bnQoKTtcbiAgICB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQubW92ZVNoaXBJblN0b3JhZ2UoXG4gICAgICBkZXRhaWxzWzBdLFxuICAgICAgZGV0YWlsc1sxXSxcbiAgICAgIGRldGFpbHNbMl0sXG4gICAgICBkZXRhaWxzWzNdXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxuY29uc3QgcGxhY2VkU2hpcCA9IGNvbnRyb2xsZXIuc2hpcFBsYWNlZC5iaW5kKGNvbnRyb2xsZXIpO1xuY29uc3Qgc3RhcnRHYW1lID0gY29udHJvbGxlci5zdGFydEdhbWUuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IHBsYXllcnNNb3ZlID0gY29udHJvbGxlci5wbGF5ZXJzTW92ZS5iaW5kKGNvbnRyb2xsZXIpO1xuY29uc3QgZ2V0Q1BVTW92ZSA9IGNvbnRyb2xsZXIuZ2V0Q1BVTW92ZS5iaW5kKGNvbnRyb2xsZXIpO1xuY29uc3QgcGxhY2VIdW1hblNoaXAgPSBjb250cm9sbGVyLnBsYWNlSHVtYW4uYmluZChjb250cm9sbGVyKTtcbmNvbnN0IHJvdGF0ZVNoaXAgPSBjb250cm9sbGVyLnJvdGF0ZVNoaXAuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IG1vdmVTaGlwID0gY29udHJvbGxlci5tb3ZlU2hpcC5iaW5kKGNvbnRyb2xsZXIpO1xuY29uc3QgbWFya1NxdWFyZSA9IGlmYWNlLm1hcmtTcXVhcmVIaXQuYmluZChpZmFjZSk7XG5cbnB1YlN1Yi5zdWIoXCJwbGFjZVNoaXBcIiwgcGxhY2VIdW1hblNoaXApO1xucHViU3ViLnN1YihcInNoaXBzUGxhY2VkXCIsIGlmYWNlLnNoaXBzUGxhY2VkKTtcbnB1YlN1Yi5zdWIoXCJnYW1lU3RhcnRcIiwgc3RhcnRHYW1lKTtcbnB1YlN1Yi5zdWIoXCJnZXRQbGF5ZXJzTW92ZVwiLCBpZmFjZS5nZXRQbGF5ZXJNb3ZlKTtcbnB1YlN1Yi5zdWIoXCJwbGF5ZXJzTW92ZVwiLCBwbGF5ZXJzTW92ZSk7XG5wdWJTdWIuc3ViKFwicm90YXRlU2hpcFwiLCByb3RhdGVTaGlwKTtcbnB1YlN1Yi5zdWIoXCJtb3ZlU2hpcFwiLCBtb3ZlU2hpcCk7XG5wdWJTdWIuc3ViKFwiZ2V0UGxheWVyTW92ZVwiLCBpZmFjZS5nZXRQbGF5ZXJNb3ZlKTtcbnB1YlN1Yi5zdWIoXCJtYXJrU3F1YXJlSGl0XCIsIG1hcmtTcXVhcmUpO1xucHViU3ViLnN1YihcInN1bmtcIiwgaWZhY2Uuc3Vuayk7XG5wdWJTdWIuc3ViKFwiZ2FtZU92ZXJcIiwgaWZhY2UuZ2FtZU92ZXIpO1xucHViU3ViLnN1YihcImludmFsaWRcIiwgaWZhY2UuaW52YWxpZE1vdmUpO1xucHViU3ViLnN1YihcInVwZGF0ZU5vdHNcIiwgaWZhY2UudXBkYXRlTm90cyk7XG5cbnB1YlN1Yi5zdWIoXG4gIFwiZGVjcmVtZW50UGxhY2VkQ291bnRcIixcbiAgY29udHJvbGxlci5kZWNyZW1lbnRQbGFjZWRDb3VudC5iaW5kKGNvbnRyb2xsZXIpXG4pO1xuXG5leHBvcnQgeyBwdWJTdWIgfTtcbiIsImV4cG9ydCBjb25zdCBkaXNwbGF5T2JqZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwibWFpblwiLFxuICAgIG5vZGVUeXBlOiBcIm1haW5cIixcbiAgICBwYXJlbnQ6IFwiYm9keVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJiZXplbFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCJtYWluXCIsXG4gICAgY2xhc3MxOiBcImJlemVsXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImdhbWVDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmJlemVsXCIsXG4gICAgY2xhc3MxOiBcImdhbWUtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInNjYW5saW5lXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5nYW1lLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzY2FubGluZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJ0aXRsZUNvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZ2FtZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwidGl0bGUtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIm5vdGlmQXJlYVwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZ2FtZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwibm90aWYtYXJlYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJub3RpZlVwcGVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5ub3RpZi1hcmVhXCIsXG4gICAgY2xhc3MxOiBcIm5vdGlmLWxlZnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibm90aWZMb3dlclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIubm90aWYtYXJlYVwiLFxuICAgIGNsYXNzMTogXCJub3RpZi1yaWdodFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJtYWluVGl0bGVcIixcbiAgICBub2RlVHlwZTogXCJoMVwiLFxuICAgIHBhcmVudDogXCIudGl0bGUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInRpdGxlXCIsXG4gICAgdGV4dDogXCJCQVRUTEVTSElQXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInBsYWNlbWVudENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZ2FtZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwicGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJncmlkQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImdyaWQtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImh1bWFuR3JpZFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZ3JpZC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwicGxhY2VtZW50LWdyaWRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY3B1Qm9hcmRcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmdyaWQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImNwdS1ib2FyZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzaGlwUGxhY2VtZW50Q29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInNoaXAtcGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJiU2hpcENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImJzaGlwLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMjogXCJzaGlwLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjcnVpc2VyQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5zaGlwLXBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiY3J1aXNlci1jb250YWluZXJcIixcbiAgICBjbGFzczI6IFwic2hpcC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGVzdHJveWVyQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5zaGlwLXBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZGVzdHJveWVyLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMjogXCJzaGlwLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJmcmlnYXRlQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5zaGlwLXBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZnJpZ2F0ZS1jb250YWluZXJcIixcbiAgICBjbGFzczI6IFwic2hpcC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3RhcnRCdXR0b25cIixcbiAgICBub2RlVHlwZTogXCJpbnB1dFwiLFxuICAgIHBhcmVudDogXCIuZ2FtZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3RhcnQtYnV0dG9uXCIsXG4gICAgaW5wdXRUeXBlOiBcImJ1dHRvblwiLFxuICAgIHZhbHVlOiBcIlNUQVJUXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInBsYWNlbWVudEdyaWRTcXVhcmVcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1ncmlkXCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1ncmlkLXNxdWFyZVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNoaXBzID0gW1xuICB7XG4gICAgbmFtZTogXCJCYXR0bGVzaGlwXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5ic2hpcC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiYmF0dGxlc2hpcC1wbGFjZW1lbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ3J1aXNlclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuY3J1aXNlci1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiY3J1aXNlci1wbGFjZW1lbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGVzdHJveWVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5kZXN0cm95ZXItY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImRlc3Ryb3llci1wbGFjZW1lbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRnJpZ2F0ZVwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZnJpZ2F0ZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZnJpZ2F0ZS1wbGFjZW1lbnRcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBub3RpZnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIm5vdGlmSHVtYW5cIixcbiAgICBub2RlVHlwZTogXCJoM1wiLFxuICAgIHBhcmVudDogXCIubm90aWYtbGVmdFwiLFxuICAgIGNsYXNzMTogXCJub3RpZlwiLFxuICAgIGNsYXNzMjogXCJub3RpZi1odW1hblwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJub3RpZkNwdVwiLFxuICAgIG5vZGVUeXBlOiBcImgzXCIsXG4gICAgcGFyZW50OiBcIi5ub3RpZi1yaWdodFwiLFxuICAgIGNsYXNzMTogXCJub3RpZlwiLFxuICAgIGNsYXNzMjogXCJub3RpZi1jcHVcIixcbiAgfSxcbl07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHggPSB4IHx8IDA7IC8vIGNvbnZlcnRzIGZhbHNleSB2YWx1ZXMgdG8gMCAoaW4gdGhpcyBjYXNlLCBOYU4pXG4gICAgdGhpcy54eSA9IFt4LCB5XTtcbiAgICB0aGlzLm9jY3VwYW50ID0gbnVsbDtcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICB9XG5cbiAgcGxhY2VTaGlwT25TcXVhcmUoc2hpcElEKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYWNpbmcgc2hpcCBvbiBzcXVhcmUhIHRoaXMgaXMnLCB0aGlzKTtcbiAgICB0aGlzLm9jY3VwYW50ID0gc2hpcElEO1xuICB9XG59XG5cbmNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IGJ1aWxkQm9hcmQoKTtcbiAgICB0aGlzLnNoaXBBcnJheSA9IFtdO1xuICAgIHRoaXMucGxhY2VTaGlwT25Cb2FyZCA9IHBsYWNlU2hpcE9uQm9hcmQ7XG4gICAgdGhpcy5jaGVja0Zvck9jY3VwYW50cyA9IGNoZWNrRm9yT2NjdXBhbnRzO1xuICAgIHRoaXMucmVjZWl2ZUF0dGFjayA9IHJlY2VpdmVBdHRhY2s7XG4gICAgdGhpcy5nZXRTaGlwID0gZ2V0U2hpcDtcbiAgICB0aGlzLmNoZWNrRmxlZXRTdW5rID0gY2hlY2tGbGVldFN1bms7XG4gICAgdGhpcy5yb3RhdGVTaGlwaW5TdG9yYWdlID0gcm90YXRlU2hpcGluU3RvcmFnZTtcbiAgICB0aGlzLmRlbGV0ZVNoaXAgPSBkZWxldGVTaGlwO1xuICAgIHRoaXMubW92ZVNoaXBJblN0b3JhZ2UgPSBtb3ZlU2hpcEluU3RvcmFnZTtcbiAgICB0aGlzLmNoZWNrSWZTcXVhcmVFeGlzdHMgPSBjaGVja0lmU3F1YXJlRXhpc3RzO1xuICAgIHRoaXMuY2hlY2tJZlNxdWFyZUlzSGl0ID0gY2hlY2tJZlNxdWFyZUlzSGl0O1xuICB9XG59XG5cbmNvbnN0IHBsYXllckJvYXJkID0gbmV3IEJvYXJkKCk7XG5jb25zdCBjcHVCb2FyZCA9IG5ldyBCb2FyZCgpO1xuXG5mdW5jdGlvbiBidWlsZEJvYXJkKCkge1xuICAvLyBidWlsZCBhIDJkIGFycmF5IHJlcHJlc2VudGluZyBhIDEweDEwIGdhbWUgYm9hcmRcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9IGk7XG4gICAgY29uc3QgeEFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCB5ID0gaW5kZXg7XG4gICAgICBjb25zdCBzcSA9IG5ldyBTcXVhcmUoeCwgeSk7XG4gICAgICB4QXJyYXkucHVzaChzcSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goeEFycmF5KTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5mdW5jdGlvbiBjaGVja0lmU3F1YXJlSXNIaXQoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkW3hdW3ldLmhpdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlNxdWFyZUV4aXN0cyh4LCB5KSB7XG4gIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgeyBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcE9uQm9hcmQoeCwgeSwgaG9yaXpWZXJ0LCBzaGlwVHlwZSwgSUQpIHtcbiAgLy8gbWFrZSBhIG5ldyBzaGlwIGFjY29yZGluZyB0byBzaGlwVHlwZVxuICBjb25zdCBuZXdTaGlwID0gc2hpcEZhY3Rvcnkuc2hpcEZhY3Rvcnkoc2hpcFR5cGUpO1xuICBuZXdTaGlwLmRpcmVjdGlvbiA9IGhvcml6VmVydDtcbiAgY29uc3QgbmV3U2hpcExlbmd0aCA9IG5ld1NoaXAubGVuZ3RoO1xuXG4gIC8vIGlmIHRoaXMgd2FzIGFuIGFscmVhZHkgZXhpc3Rpbmcgc2hpcCwgZ2l2ZSBpdCBpdHMgb2xkIElEXG4gIGlmIChJRCkge1xuICAgIG5ld1NoaXAuc2hpcElEID0gSUQ7XG4gIH1cblxuICAvLyB0aGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudHMgY2hlY2sgdGhhdCB0aGlzIGlzIGEgbGVnYWwgc2hpcCBwbGFjZW1lbnRcbiAgaWYgKGhvcml6VmVydCA9PT0gMCkge1xuICAgIGlmICh4ICsgbmV3U2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKHkgLSBuZXdTaGlwTGVuZ3RoIDwgLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuY2hlY2tGb3JPY2N1cGFudHMoeCwgeSwgaG9yaXpWZXJ0LCBuZXdTaGlwTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuc2hpcEFycmF5LnB1c2gobmV3U2hpcCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgLy8gbG9vcCB0aHJvdWdoIG5ld1NoaXBMZW5ndGggc3F1YXJlcyBpblxuICAvLyB0aGUgZGlyZWN0aW9uIGluZGljYXRlZCBieSBob3JpelZlcnQsIG1vZGlmeWluZyB0aGVpciBvY2N1cGFudFxuICAvLyBhdHRyaWJ1dGVzIGFjY29yZGluZyB0byBuZXdTaGlwJ3MgSURcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChuZXdTaGlwLmRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgLy8gaS5lLiBpZiB0aGlzIHNoaXAgaXMgcGxhY2VkIGhvcml6b250YWxseVxuICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0ucGxhY2VTaGlwT25TcXVhcmUobmV3U2hpcC5zaGlwSUQpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeCArIGldW3ldLm9jY3VwYW50ID09PSBuZXdTaGlwLnNoaXBJRCkge1xuICAgICAgICByZXN1bHQucHVzaChbeCArIGksIHldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhlIHNoaXAgaXMgcGxhY2VkIHZlcnRpY2FsbHlcbiAgICAgIHRoaXMuYm9hcmRbeF1beSAtIGldLnBsYWNlU2hpcE9uU3F1YXJlKG5ld1NoaXAuc2hpcElEKTtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3kgLSBpXS5vY2N1cGFudCA9PT0gbmV3U2hpcC5zaGlwSUQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW3gsIHkgLSBpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRmxlZXRTdW5rKCkge1xuICAvLyBMb29wcyB0aHJvdWdoIHRoaXMuc2hpcEFycmF5LCBjaGVja2luZyBlYWNoIHNoaXBzIC5zdW5rIHByb3BlcnR5LiBJZlxuICAvLyBhbnkgdW5zdW5rIHNoaXAgaXMgZm91bmQsIHJldHVybnMgZmFsc2UgLSBvdGhlcndpc2UsIHJldHVybnMgdHJ1ZS5cbiAgbGV0IHJlc3VsdCA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwQXJyYXlbaV07XG4gICAgaWYgKCFzaGlwLnN1bmspIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmZ1bmN0aW9uIGdldFNoaXAoSUQpIHtcbiAgLy8gTG9vcHMgdGhyb3VnaCB0aGlzLnNoaXBBcnJheSwgY2hlY2tpbmcgZm9yIGFuZCByZXR1cm5pbmcgdGhlXG4gIC8vIG9iamVjdCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIElELlxuICBjb25zdCBhcnJheSA9IHRoaXMuc2hpcEFycmF5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcCA9IGFycmF5W2ldO1xuICAgIGlmIChzaGlwLnNoaXBJRCA9PT0gSUQpIHtcbiAgICAgIHJldHVybiBzaGlwO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICAvLyB3ZSBsb29rIHVwIHRoZSBnaXZlbiBzcXVhcmUuIGlmIHRoZXJlIGlzIGFuIG9jY3VwYW50LCB3ZSBnZXQgdGhlIHNoaXAnc1xuICAvLyBvYmplY3QgdXNpbmcgZ2V0U2hpcCgpIGFuZCBjYWxsIGl0cyBoaXQoKSBtZXRob2RcbiAgY29uc3QgeCA9IGNvb3Jkc1swXTtcbiAgY29uc3QgeSA9IGNvb3Jkc1sxXTtcbiAgY29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXJUeXBlO1xuXG4gIGlmICghdGhpcy5jaGVja0lmU3F1YXJlRXhpc3RzKHgsIHkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuYm9hcmRbeF1beV0uaGl0ID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuZ2V0U2hpcCh0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50KTtcbiAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCA9IHRydWU7XG4gICAgY29uc3Qgc3RhdHVzID0gc2hpcC5oaXQoKTtcbiAgICBsZXQgY2hlY2tGbGVldDtcbiAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICBjb25zdCBjaGVja1BsYXllckZsZWV0U3VuayA9IGNoZWNrRmxlZXRTdW5rLmJpbmQocGxheWVyQm9hcmQpO1xuICAgICAgY2hlY2tGbGVldCA9IGNoZWNrUGxheWVyRmxlZXRTdW5rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoZWNrQ3B1RmxlZXRTdW5rID0gY2hlY2tGbGVldFN1bmsuYmluZChjcHVCb2FyZCk7XG4gICAgICBjaGVja0ZsZWV0ID0gY2hlY2tDcHVGbGVldFN1bmsoKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrRmxlZXQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBcImdhbWVPdmVyXCI7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IFwic3Vua1wiKSB7XG4gICAgICByZXR1cm4gXCJzdW5rXCI7XG4gICAgfVxuICAgIHJldHVybiBcImhpdFwiO1xuICB9XG4gIHRoaXMuYm9hcmRbeF1beV0uaGl0ID0gdHJ1ZTtcbiAgcmV0dXJuIFwibWlzc1wiO1xufVxuXG5mdW5jdGlvbiBjaGVja0Zvck9jY3VwYW50cyh4LCB5LCBob3JpelZlcnQsIGxlbmd0aCkge1xuICBpZiAoaG9yaXpWZXJ0ID09PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgaWYgKGVsZW1lbnQub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJvYXJkW3hdW3kgLSBpXTtcbiAgICAgIGlmIChlbGVtZW50Lm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVNoaXAoSUQpIHtcbiAgLy8gbG9vcHMgdGhyb3VnaCB0aGlzLnNoaXBBcnJheS4gdXBvbiBmaW5kaW5nIHNoaXAgd2l0aCB0aGUgZ2l2ZW4gSUQsXG4gIC8vIGRlbGV0ZXMgaXRcblxuICAvLyBwdWJTdWIucHViKFwiZGVjcmVtZW50UGxhY2VkQ291bnRcIiwgMSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpcy5zaGlwQXJyYXlbaV0uc2hpcElEID09PSBJRCkge1xuICAgICAgdGhpcy5zaGlwQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwaW5TdG9yYWdlKHNoaXBEYXRhKSB7XG4gIGNvbnN0IHNoaXBJRCA9IHRoaXMuYm9hcmRbc2hpcERhdGFbMF1dW3NoaXBEYXRhWzFdXS5vY2N1cGFudDtcblxuICBjb25zdCBzaGlwID0gdGhpcy5nZXRTaGlwKHNoaXBJRCk7XG5cbiAgY29uc3QgeCA9IE51bWJlcihzaGlwRGF0YVswXSk7XG4gIGNvbnN0IHkgPSBOdW1iZXIoc2hpcERhdGFbMV0pO1xuICBsZXQgZGlyID0gTnVtYmVyKHNoaXBEYXRhWzJdKTtcbiAgY29uc3QgbGVuZ3RoID0gTnVtYmVyKHNoaXBEYXRhWzNdKTtcblxuXG4gIC8vIGlmIHRoZXJlIGlzIGEgc2hpcCwgcmVtb3ZlIGl0IGZyb20gdGhlIGJvYXJkXG4gIGlmIChzaGlwICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmRlbGV0ZVNoaXAoc2hpcElEKTtcblxuICAgIGlmIChkaXIgPT09IDApIHtcbiAgICAgIC8vIGlmIHRoZSBzaGlwIGlzIGhvcml6b250YWwsIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCBob3Jpem9udGFsbHlcbiAgICAgIGNvbnNvbGUubG9nKCdzaGlwIGlzIGhvcml6b250YWwhJylcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB4RWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuXG4gICAgICAgIHhFbGVtZW50Lm9jY3VwYW50ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgc3F1YXJlcyB3ZSB3aWxsIHBsYWNlIHRoZSBzaGlwIGluIGFyZSBub3Qgb2NjdXBpZWRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuICAgICAgICBpZiAoeUVsZW1lbnQub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaGF2aW5nIHJlbW92ZWQgdGhlIHNoaXAsIHBsYWNlIGl0IHdpdGggdGhlIG5ldyBkaXJlY3Rpb25cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZWxzZSBjbGVhciB0aGUgYm9hcmQgb2YgdGhlIHNoaXAgdmVydGljYWxseVxuICAgICAgY29uc29sZS5sb2coJ3NoaXAgaXMgdmVydGljYWwhJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgeUVsZW1lbnQgPSB0aGlzLmJvYXJkW3hdW3kgLSBpXTtcblxuICAgICAgICB5RWxlbWVudC5vY2N1cGFudCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHNxdWFyZXMgd2Ugd2lsbCBwbGFjZSB0aGUgc2hpcCBpbiBhcmUgbm90IG9jY3VwaWVkXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvYXJkW3ggKyBpXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4RWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgICBpZiAoeEVsZW1lbnQub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8vIGZsaXAgdGhlIGRpcmVjdGlvblxuICBpZiAoZGlyID09PSAwKSB7IGRpciA9IDE7IH0gZWxzZSB7IGRpciA9IDA7IH07XG5cbiAgLy8gaGF2aW5nIHJlbW92ZWQgdGhlIHNoaXAsIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IGRpcmVjdGlvbiBhbmQgcmV0dXJuIHJlc3VsdFxuICBjb25zdCByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcE9uQm9hcmQoeCwgeSwgZGlyLCBsZW5ndGgsIHNoaXBJRCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vdmVTaGlwSW5TdG9yYWdlKHgsIHksIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG5cbiAgICAvLyBmaW5kIHRoZSBzaGlwIGF0IHRoZSBnaXZlbiBjb29yZGluYXRlcyBhbmQgZ2V0IGl0cyBkaXJlY3Rpb25cbiAgY29uc3Qgc2hpcElEID0gdGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudDtcbiAgY29uc3Qgc2hpcCA9IHRoaXMuZ2V0U2hpcCh0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50KTtcblxuICBpZiAoc2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gc2hpcCBhdCB0aGVzZSBjb29yZHMsIGl0J3MgYmVjYXVzZSB0aGVyZSB3YXMgYW4gaW52YWxpZFxuICAgIC8vIHNoaXAgcGxhY2VtZW50LiBUaGVyZXJlZm9yZSwgdGhlcmUgaXMgbm8gc2hpcCB0byBkZWxldGUuIFNvLCByZXR1cm4uXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRpciA9IHNoaXAuZGlyZWN0aW9uO1xuXG4gIC8vIGRlbGV0ZSB0aGUgc2hpcCBmcm9tIHNoaXBBcnJheVxuICB0aGlzLmRlbGV0ZVNoaXAoc2hpcElEKTtcblxuICAvLyBjbGVhciB0aGUgYm9hcmQgb2YgdGhlIHNoaXBcbiAgaWYgKGRpciA9PT0gMCkge1xuICAgIC8vIGlmIHRoZSBzaGlwIGlzIGhvcml6b250YWwsIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCBob3Jpem9udGFsbHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB4RWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgeEVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBlbHNlIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgeUVsZW1lbnQgPSB0aGlzLmJvYXJkW3hdW3kgLSBpXTtcbiAgICAgIHlFbGVtZW50Lm9jY3VwYW50ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgYnVpbGRCb2FyZCxcbiAgcGxhY2VTaGlwT25Cb2FyZCxcbiAgY2hlY2tGbGVldFN1bmssXG4gIGdldFNoaXAsXG4gIHJlY2VpdmVBdHRhY2ssXG4gIGNoZWNrRm9yT2NjdXBhbnRzLFxuICBkZWxldGVTaGlwLFxuICBtb3ZlU2hpcEluU3RvcmFnZSxcbiAgY2hlY2tJZlNxdWFyZUV4aXN0cyxcbiAgY2hlY2tJZlNxdWFyZUlzSGl0LFxuICBwbGF5ZXJCb2FyZCxcbiAgY3B1Qm9hcmQsXG59O1xuIiwiXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cbmltcG9ydCB7IGNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9jb21wb25lbnRGYWN0b3J5XCI7XG5pbXBvcnQgeyBkaXNwbGF5T2JqZWN0cywgc2hpcHMgfSBmcm9tIFwiLi9kaXNwbGF5T2JqZWN0c1wiO1xuaW1wb3J0IENydWlzZXIgZnJvbSBcIi4uL3Jlc291cmNlcy9DcnVpc2VyLnBuZ1wiO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4uL3Jlc291cmNlcy9CYXR0bGVzaGlwLnBuZ1wiO1xuaW1wb3J0IERlc3Ryb3llciBmcm9tIFwiLi4vcmVzb3VyY2VzL0Rlc3Ryb3llci5wbmdcIjtcbmltcG9ydCBGcmlnYXRlIGZyb20gXCIuLi9yZXNvdXJjZXMvRnJpZ2F0ZS5wbmdcIjtcbmltcG9ydCBFeHBsb3Npb24gZnJvbSBcIi4uL3Jlc291cmNlcy9leHBsb3Npb24ubXAzXCI7XG5pbXBvcnQgTGFzZXIgZnJvbSBcIi4uL3Jlc291cmNlcy9sYXNlci5tcDNcIjtcbmltcG9ydCBNdXNpYyBmcm9tIFwiLi4vcmVzb3VyY2VzL211c2ljLm1wM1wiO1xuaW1wb3J0IFN1bmsgZnJvbSBcIi4uL3Jlc291cmNlcy9zdW5rLm1wM1wiO1xuaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5jbGFzcyBJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5O1xuICAgIHRoaXMuYnVpbGRHcmlkID0gYnVpbGRHcmlkO1xuICAgIHRoaXMuYnVpbGRTaGlwcyA9IGJ1aWxkU2hpcHM7XG4gICAgdGhpcy5yb3RhdGVTaGlwID0gcm90YXRlU2hpcDtcbiAgICB0aGlzLmNwdUF0dGFjayA9IGNwdUF0dGFjaztcbiAgICB0aGlzLnJlbW92ZUF0dGFja0xpc3RlbmVycyA9IHJlbW92ZUF0dGFja0xpc3RlbmVycztcbiAgICB0aGlzLmF0dGFjayA9IGF0dGFjaztcbiAgICB0aGlzLmFkZEF0dGFja0xpc3RlbmVycyA9IGFkZEF0dGFja0xpc3RlbmVycztcbiAgICB0aGlzLm1hcmtTcXVhcmVIaXQgPSBtYXJrU3F1YXJlSGl0O1xuICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lO1xuICAgIHRoaXMuZHJvcCA9IGRyb3A7XG4gICAgdGhpcy5hZGREcmFnTGlzdGVuZXJzID0gYWRkRHJhZ0xpc3RlbmVycztcbiAgICB0aGlzLmFsbG93RHJvcCA9IGFsbG93RHJvcDtcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlID0gYnVpbGRJbnRlcmZhY2U7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSBbXTtcbiAgICB0aGlzLmdhbWVOb3RzID0gW107XG4gICAgdGhpcy51cGRhdGVOb3RzRGlzcGxheSA9IHVwZGF0ZU5vdHNEaXNwbGF5O1xuICAgIHRoaXMubWFya1NxdWFyZSA9IG1hcmtTcXVhcmU7XG4gIH1cblxuICBhZGROb3RpZihub3RpZiwgcGxheWVyKSB7XG4gICAgY29uc3Qgbm90aWZXaXRoVGltZXN0YW1wID0gYCR7Z2V0VGltZSgpfTogJHtub3RpZn1gO1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIGlmICh0aGlzLmluc3RydWN0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluc3RydWN0aW9ucy5wdXNoKG5vdGlmV2l0aFRpbWVzdGFtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdhbWVOb3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy5nYW1lTm90cy5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5nYW1lTm90cy5wdXNoKG5vdGlmV2l0aFRpbWVzdGFtcCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTm90c0Rpc3BsYXkoKTtcbiAgfVxufVxuXG5jb25zdCBpZmFjZSA9IG5ldyBJbnRlcmZhY2UoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkR3JpZChwbGF5ZXIpIHtcbiAgbGV0IHNxTnVtID0gMDtcbiAgZm9yIChsZXQgaSA9IDk7IGkgPiAtMTsgaSAtPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBuZXdTcXVhcmUgPSBkaXNwbGF5T2JqZWN0c1tkaXNwbGF5T2JqZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgIG5ld1NxdWFyZS54eSA9IFtqLCBpLCBzcU51bSwgcGxheWVyXTtcbiAgICAgIHNxTnVtICs9IDE7XG4gICAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzczIgPSBcInBsYXllci1ncmlkLXNxdWFyZVwiO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MzID0gYHBsYXllci1ncmlkLXNxdWFyZS0ke2p9LSR7aX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMiA9IFwiY3B1LWdyaWQtc3F1YXJlXCI7XG4gICAgICAgIG5ld1NxdWFyZS5wYXJlbnQgPSBcIi5jcHUtYm9hcmRcIjtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMyA9IGBjcHUtZ3JpZC1zcXVhcmUtJHtqfS0ke2l9YDtcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudEZhY3RvcnkobmV3U3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2hpcHMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNoaXBzW2ldO1xuXG4gICAgY29tcG9uZW50RmFjdG9yeShlbGVtZW50KTtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBcIkJhdHRsZXNoaXBcIjpcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5jbGFzczF9YCkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz0ke0JhdHRsZXNoaXB9IGFsdD0ke2VsZW1lbnQubmFtZX0gZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZHJhZ2dhYmxlXCIgaWQ9XCJCYXR0bGVzaGlwXCIgZGF0YS1sZW5ndGg9XCI2XCIgZGF0YS1kaXJlY3Rpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJDcnVpc2VyXCI6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MxfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtDcnVpc2VyfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiQ3J1aXNlclwiICBkYXRhLWxlbmd0aD1cIjRcIiBkYXRhLWRpcmVjdGlvbj1cIjBcIj5gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkRlc3Ryb3llclwiOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMX1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7RGVzdHJveWVyfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiRGVzdHJveWVyXCIgIGRhdGEtbGVuZ3RoPVwiM1wiIGRhdGEtZGlyZWN0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMX1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7RnJpZ2F0ZX0gYWx0PSR7ZWxlbWVudC5uYW1lfSBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3M9XCJkcmFnZ2FibGVcIiBpZD1cIkZyaWdhdGVcIiAgZGF0YS1sZW5ndGg9XCIyXCIgZGF0YS1kaXJlY3Rpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVTaGlwKGUpIHtcbiAgY29uc3QgeHkgPSBbXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LngsXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnksXG4gICAgZS50YXJnZXQuZGF0YXNldC5kaXJlY3Rpb24sXG4gICAgZS50YXJnZXQuZGF0YXNldC5sZW5ndGgsXG4gIF07XG4gIGNvbnN0IHNoaXAgPSBlLnRhcmdldDtcblxuICBwdWJTdWIucHViKFwicm90YXRlU2hpcFwiLCB4eSk7XG5cbiAgc3dpdGNoIChOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5sZW5ndGgpKSB7XG4gICAgY2FzZSA2OlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcC1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImJhdHRsZXNoaXAtcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSA0OlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiY3J1aXNlci1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImNydWlzZXItcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzdHJveWVyLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJmcmlnYXRlLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiZnJpZ2F0ZS1yb3RhdGVkXCIpO1xuICAgICAgfVxuICB9XG59XG5cbmxldCBkcmFnU3RvcmFnZSA9IFwidGVzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhZyhlKSB7XG4gIGRyYWdTdG9yYWdlID0gZS50YXJnZXQ7XG5cbiAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxhY2VtZW50LWdyaWQtc3F1YXJlXCIpKSB7XG4gICAgY29uc3QgeCA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueCk7XG4gICAgY29uc3QgeSA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueSk7XG4gICAgY29uc3QgcmVzdWx0ID0gW1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5kaXJlY3Rpb24pLFxuICAgICAgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKSxcbiAgICBdO1xuICAgIHB1YlN1Yi5wdWIoXCJtb3ZlU2hpcFwiLCByZXN1bHQpO1xuICB9XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpbWdcIiwgZS50YXJnZXQuaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJpbWdcIik7XG5cbiAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSkpO1xuXG4gIHB1YlN1Yi5wdWIoXCJwbGFjZVNoaXBcIiwgW1xuICAgIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpLFxuICAgIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpLFxuICAgIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0LmRpcmVjdGlvbiksXG4gICAgTnVtYmVyKGRyYWdTdG9yYWdlLmRhdGFzZXQubGVuZ3RoKSxcbiAgXSk7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihgIyR7ZHJhZ1N0b3JhZ2UuaWR9YClcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZVNoaXApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEcm9wKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5jb25zdCBiaW5kQWRkQXR0YWNrTGlzdGVuZXJzID0gaWZhY2UuYWRkQXR0YWNrTGlzdGVuZXJzLmJpbmQoaWZhY2UpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAvLyBjbGVhciB0aGUgbm90aWZpY2F0aW9uIGFyZWFcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1sZWZ0XCIpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gdGVsbCB0aGUgY29udHJvbGxlciB0byBzdGFydCB0aGUgZ2FtZVxuICBwdWJTdWIucHViKFwiZ2FtZVN0YXJ0XCIsIFwidHJ1ZVwiKTtcblxuICAvLyByZW1vdmUgc2hpcC1yb3RhdGlvbiBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYWdnYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZHJhZ2dhYmxlc1tpXTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZyk7XG4gIH1cblxuICAvLyByZW1vdmUgZHJvcCBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhY2VtZW50LWdyaWQtc3F1YXJlXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzcXVhcmVzW2ldO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcCk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgYWxsb3dEcm9wKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBzdGFydCBidXR0b25cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIikucmVtb3ZlKCk7XG5cbiAgLy8gYWRkIHRoZSBhdHRhY2sgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBjcHUgYm9hcmRcbiAgYmluZEFkZEF0dGFja0xpc3RlbmVycygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcHNQbGFjZWQoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIik7XG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmLWxlZnRcIikuaW5uZXJIVE1MID1cbiAgICBcIlNoaXBzIHBsYWNlZCEgQ2xpY2sgc3RhcnQgdG8gYmVnaW4hXCI7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY3B1QXR0YWNrKCkge1xuICBsZXQgc3VjY2Vzc2Z1bEF0dGFjayA9IGZhbHNlO1xuICB3aGlsZSAoIXN1Y2Nlc3NmdWxBdHRhY2spIHtcbiAgICBjb25zdCB0aGlzQXR0YWNrID0gY29udHJvbGxlci5jcHUuYXR0YWNrKCk7XG4gICAgaWYgKHRoaXNBdHRhY2spIHtcbiAgICAgIHN1Y2Nlc3NmdWxBdHRhY2sgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2soZSkge1xuICBjb25zdCB4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG4gIGNvbnN0IHkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcbiAgcHViU3ViLnB1YihcInBsYXllcnNNb3ZlXCIsIFt4LCB5XSk7XG59XG5cbmNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbmNvbnN0IHsgc2lnbmFsIH0gPSBhYm9ydENvbnRyb2xsZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBdHRhY2tMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtZ3JpZC1zcXVhcmVcIik7XG4gIGdyaWRTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrLCB7IHNpZ25hbCwgb25jZTogdHJ1ZSB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRhY2tMaXN0ZW5lcnMoKSB7XG4gIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vuayhpc1BsYXllckJvYXJkKSB7XG4gIHBsYXlTb3VuZCgzKTtcbiAgaWYgKCFpc1BsYXllckJvYXJkKSB7XG4gICAgYWRkTm90aWYoXCJUaGUgY29tcHV0ZXIgc3VuayB5b3VyIHNoaXAhXCIsIDIpO1xuICB9IGVsc2Uge1xuICAgIGFkZE5vdGlmKFwiWW91IHN1bmsgYW4gZW5lbXkgc2hpcCFcIiwgMik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vdHNEaXNwbGF5KCkge1xuICAvLyBzZWxlY3QgYW5kIGNsZWFyIGJvdGggdGhlIGh1bWFuIGFuZCBjcHUgbm90aWZpY2F0aW9uIGRpc3BsYXlzXG5cbiAgY29uc3QgbGVmdE5vdGlmcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWYtbGVmdFwiKTtcbiAgbGVmdE5vdGlmcy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHJpZ2h0Tm90aWZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1yaWdodFwiKTtcbiAgcmlnaHROb3RpZnMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBpbml0aWFsaXplIHR3byBzdHJpbmdzIHRvIGhvbGQgdGhlIGh0bWwgZm9yIHRoZSBub3RpZmljYXRpb25zXG4gIGxldCBsZWZ0UmVzdWx0ID0gXCJcIjtcbiAgbGV0IHJpZ2h0UmVzdWx0ID0gXCJcIjtcblxuICAvLyBnZXQgdGhlIG5vdGlmaWNhdGlvbiBhcnJheXNcbiAgY29uc3QgeyBpbnN0cnVjdGlvbnMsIGdhbWVOb3RzIH0gPSB0aGlzO1xuXG4gIC8vIGFzc2VtYmxlIHRoZSBodG1sIGZvciB0aGUgbm90aWZpY2F0aW9uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RydWN0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxlZnRSZXN1bHQgKz0gYDxoMyBjbGFzcz1cIm5vdGlmIGluc3RydWN0aW9uXCI+JHtpbnN0cnVjdGlvbnNbaV19PC9oMz5gO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZU5vdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICByaWdodFJlc3VsdCArPSBgPGgzIGNsYXNzPVwibm90aWYgY3B1LW5vdGlmXCI+JHtnYW1lTm90c1tpXX08L2gzPmA7XG4gIH1cblxuICAvLyB3cml0ZSB0aGUgaHRtbCB0byB0aGUgbm90aWZpY2F0aW9uIGRpc3BsYXlzXG4gIGxlZnROb3RpZnMuaW5uZXJIVE1MID0gbGVmdFJlc3VsdDtcbiAgcmlnaHROb3RpZnMuaW5uZXJIVE1MID0gcmlnaHRSZXN1bHQ7XG59XG5cbmNvbnN0IGV4cGxvc2lvbiA9IG5ldyBBdWRpbyhFeHBsb3Npb24pO1xuY29uc3QgbGFzZXIgPSBuZXcgQXVkaW8oTGFzZXIpO1xuY29uc3Qgc2hpcFN1bmsgPSBuZXcgQXVkaW8oU3Vuayk7XG5cbmZ1bmN0aW9uIHBsYXlTb3VuZChzb3VuZCkge1xuICBpZiAoc291bmQgPT09IDEpIHtcbiAgICBleHBsb3Npb24ucGxheSgpO1xuICB9IGVsc2UgaWYgKHNvdW5kID09PSAyKSB7XG4gICAgbGFzZXIucGxheSgpO1xuICB9IGVsc2Uge1xuICAgIHNoaXBTdW5rLnBsYXkoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya1NxdWFyZUhpdChhcnJheSkge1xuICBsZXQgc3F1YXJlO1xuICBjb25zdCB4ID0gYXJyYXlbMF07XG4gIGNvbnN0IHkgPSBhcnJheVsxXTtcbiAgY29uc3QgaXNPY2N1cGllZCA9IGFycmF5WzJdO1xuICBjb25zdCBpc1BsYXllckJvYXJkID0gYXJyYXlbM107XG5cbiAgaWYgKCFhcnJheVs0XSkge1xuICAgIGlmIChpc1BsYXllckJvYXJkKSB7XG4gICAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLWdyaWQtc3F1YXJlLSR7eH0tJHt5fWApO1xuXG4gICAgICBpZiAoaXNPY2N1cGllZCkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1vY2N1cGllZFwiKTtcbiAgICAgICAgYWRkTm90aWYoXCJUaGUgY29tcHV0ZXIgaGl0IHlvdXIgc2hpcCFcIiwgMik7XG4gICAgICAgIHBsYXlTb3VuZCgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LWVtcHR5XCIpO1xuICAgICAgICBhZGROb3RpZihcIlRoZSBjb21wdXRlciBoaXQgYW4gZW1wdHkgc3F1YXJlIVwiLCAyKTtcbiAgICAgICAgcGxheVNvdW5kKDIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY3B1LWdyaWQtc3F1YXJlLSR7eH0tJHt5fWApO1xuXG4gICAgICBpZiAoaXNPY2N1cGllZCkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1vY2N1cGllZFwiKTtcbiAgICAgICAgYWRkTm90aWYoXCJZb3UgaGl0IGFuIGVuZW15IHNoaXAhXCIsIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXQtZW1wdHlcIik7XG4gICAgICAgIGFkZE5vdGlmKFwiWW91IGhpdCBhbiBlbXB0eSBzcXVhcmUhXCIsIDIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZE1vdmUoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWFsZXJ0XCIpLnRleHRDb250ZW50ID1cbiAgICBcIllvdSB0cmllZCB0byBhdHRhY2sgYW4gaW52YWxpZCBzcXVhcmUhXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlcihtZXNzYWdlKSB7XG4gIGJpbmRSZW1vdmVBdHRhY2tMaXN0ZW5lcnMoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1sZWZ0XCIpLmlubmVySFRNTCA9XG4gICAgJzxoMiBjbGFzcz1cIm5vdGlmIGluc3RydWN0aW9uXCI+R2FtZSBPdmVyISBDbGljayByZWZyZXNoIHRvIHBsYXkgYWdhaW4uPC9oMj4nO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLm5vdGlmLXJpZ2h0XCJcbiAgKS5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwibm90aWYgaW5zdHJ1Y3Rpb25cIj4ke21lc3NhZ2V9PC9oMj5gO1xufVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF5ZXJNb3ZlKCkge1xuICBhZGROb3RpZihcIllvdXIgbW92ZSEgUGxlYXNlIGF0dGFjayBhbiBlbmVteSBzcXVhcmUgYnkgY2xpY2tpbmcuXCIsIDEpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERyYWdMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZVwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYWdnYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZHJhZ2dhYmxlc1tpXTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnKTtcbiAgfVxuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmVcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNxdWFyZXNbaV07XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBhbGxvd0Ryb3ApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNoaXBQbGFjZW1lbnQoKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnV0dG9uXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWlsZFNoaXBQbGFjZW1lbnQpO1xuICBhZGREcmFnTGlzdGVuZXJzKCk7XG5cbiAgLy8gU2VuZHMgdGhlIHBsYXllciBhIG1lc3NhZ2UgdG8gcGxhY2Ugc2hpcHNcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1sZWZ0XCIpLmlubmVySFRNTCA9XG4gICAgJzxoMiBjbGFzcz1cIm5vdGlmIGh1bWFuLW5vdGlmXCI+RHJhZyBhbmQgZHJvcCB0byBwbGFjZSB5b3VyIHNoaXBzISBDbGljayBpdHMgbGVmdCBzcXVhcmUgdG8gcm90YXRlIGEgcGxhY2VkIHNoaXAuPC9oMj4nO1xuXG4gIC8vIFBsYXlzIHRoZSBtdXNpY1xuICBjb25zdCBtdXNpYyA9IG5ldyBBdWRpbyhNdXNpYyk7XG4gIG11c2ljLnBsYXkoKTtcbn1cblxuLy8gR2V0IHRoZSBET00gbm9kZXMnIGluZm8gZm9yIHRoZSBmaXJzdCBzY3JlZW4gZnJvbSBkaXNwbGF5T2JqZWN0c1xuLy8gYW5kIGRyYXdzIHRoZW1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEludGVyZmFjZSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5T2JqZWN0cy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZGlzcGxheU9iamVjdHNbaV07XG4gICAgY29tcG9uZW50RmFjdG9yeShlbGVtZW50KTtcbiAgfVxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRTaGlwUGxhY2VtZW50KTtcbiAgYnVpbGRHcmlkKDEpO1xuICBidWlsZEdyaWQoMik7XG4gIGJ1aWxkU2hpcHMoKTtcblxuICAvLyBhZGQgd2VsY29tZSBtZXNzYWdlIHRvIHRoZSBub3RpZmljYXRpb24gYXJlYVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWYtbGVmdFwiKS5pbm5lckhUTUwgPVxuICAgICc8aDIgY2xhc3M9XCJub3RpZiBub3RpZi1odW1hblwiPldlbGNvbWUgdG8gQmF0dGxlc2hpcCEgQ2xpY2sgU3RhcnQgdG8gcGxhY2UgeW91ciBzaGlwcyE8L2gyPic7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICBpZiAobWludXRlcyA9PT0gXCIwXCIpIHtcbiAgICBtaW51dGVzID0gXCIwMFwiO1xuICB9XG4gIGNvbnN0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuXG5cblxuY29uc3QgYWRkTm90aWYgPSBpZmFjZS5hZGROb3RpZi5iaW5kKGlmYWNlKTtcblxuY29uc3QgYmluZFJlbW92ZUF0dGFja0xpc3RlbmVycyA9IGlmYWNlLnJlbW92ZUF0dGFja0xpc3RlbmVycy5iaW5kKGlmYWNlKTtcblxuZnVuY3Rpb24gbWFya1NxdWFyZShzcXVhcmUpIHtcbiAgY29uc3QgbWFyayA9IGlmYWNlLm1hcmtTcXVhcmVIaXQuYmluZChpZmFjZSk7XG4gIG1hcmsoc3F1YXJlKTtcbn1cblxuZXhwb3J0IHsgaWZhY2UgfTtcbiIsImltcG9ydCB7IHBsYXllckJvYXJkLCBjcHVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZEZhY3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IHBsYXllckZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGlubmVyUGxheWVyRmFjdG9yeSA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IGJvYXJkO1xuICAgIGlmICh0eXBlID09PSAxKSB7XG4gICAgICBib2FyZCA9IHBsYXllckJvYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZCA9IGNwdUJvYXJkO1xuICAgIH1cbiAgICBjb25zdCBwbGF5ZXJUeXBlID0gdHlwZTtcblxuICAgIGJvYXJkLnBsYXllclR5cGUgPSBwbGF5ZXJUeXBlO1xuICAgIHJldHVybiB7IHBsYXllclR5cGUsIGJvYXJkIH07XG4gIH07XG5cbiAgY29uc3QgaHVtYW4gPSBpbm5lclBsYXllckZhY3RvcnkoMSk7XG4gIGNvbnN0IGNwdSA9IGlubmVyUGxheWVyRmFjdG9yeSgyKTtcblxuICBjb25zdCBwbGFjZUNQVVNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFs2LCA0LCAzLCAyXTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IGhvcml6VmVydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gY3B1LmJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoeCwgeSwgaG9yaXpWZXJ0LCB0eXBlKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHBsYWNlU2hpcCh0eXBlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2hpcFR5cGVzLmZvckVhY2goKHNoaXBUeXBlKSA9PiB7XG4gICAgICBwbGFjZVNoaXAoc2hpcFR5cGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHBsYWNlQ1BVU2hpcHMoKTtcblxuICBjb25zdCBjcHVBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH07XG5cbiAgY29uc3QgaHVtYW5BdHRhY2sgPSAoeCwgeSkgPT4gY3B1LmJvYXJkLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gIGh1bWFuLmF0dGFjayA9IGh1bWFuQXR0YWNrO1xuICBjcHUuYXR0YWNrID0gY3B1QXR0YWNrO1xuXG4gIHJldHVybiB7IGh1bWFuLCBjcHUgfTtcbn07XG4iLCJjbGFzcyBUb3BpYyB7XG4gIGNvbnN0cnVjdG9yKHRvcGljKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICB9XG59XG5cbmNsYXNzIFB1YlN1YiB7XG4gIHN1Yih0b3BpYywgc3Vic2NyaWJlcikge1xuICAgIGlmICh0eXBlb2Ygc3Vic2NyaWJlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gYCR7dHlwZW9mIHN1YnNjcmliZXJ9IGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50IGZvciBzdWJzY3JpYmVyc2A7XG4gICAgfVxuICAgIGlmICghdGhpc1t0b3BpY10pIHtcbiAgICAgIHRoaXNbdG9waWNdID0gbmV3IFRvcGljKCk7XG4gICAgfVxuICAgIHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gIH1cblxuICB1bnN1Yih0b3BpYywgc3Vic2NyaWJlcikge1xuICAgIGlmICh0eXBlb2Ygc3Vic2NyaWJlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gYCR7dHlwZW9mIHN1YnNjcmliZXJ9IGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50IGZvciB1bnN1YnNjcmliaW5nYDtcbiAgICB9XG4gICAgaWYgKHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLmluY2x1ZGVzKHN1YnNjcmliZXIpKSB7XG4gICAgICB0aGlzW3RvcGljXS5zdWJzY3JpYmVycyA9IHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLmZpbHRlcihcbiAgICAgICAgKHN1YikgPT4gc3ViICE9PSBzdWJzY3JpYmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1Yih0b3BpYywgcGF5bG9hZCkge1xuICAgIHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YikgPT4gc3ViKHBheWxvYWQpKTtcbiAgfVxuXG4gIHJldHVyblN1YnNjcmliZXJzKHRvcGljKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3ViKSA9PiByZXN1bHQucHVzaChzdWIpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwdWJTdWIgPSBuZXcgUHViU3ViKCk7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXG5leHBvcnQgY29uc3Qgc2hpcEZhY3RvcnkgPSAoKCkgPT4ge1xuICBsZXQgc2hpcENvdW50ZXIgPSAtMTtcbiAgY29uc3Qgc2hpcEZhY3RvcnkgPSAoc2hpcFR5cGUpID0+IHtcbiAgICBzaGlwQ291bnRlciArPSAxO1xuICAgIGNvbnN0IHNoaXBJRCA9IHNoaXBDb3VudGVyO1xuICAgIGxldCB0eXBlO1xuICAgIGxldCBsZW5ndGg7XG4gICAgbGV0IGhwO1xuICAgIGNvbnN0IHN1bmsgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHNoaXBUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHR5cGUgPSBcIlNpbmsgdGVzdFwiO1xuICAgICAgICBsZW5ndGggPSA2O1xuICAgICAgICBocCA9IDE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHR5cGUgPSBcIkZyaWdhdGVcIjtcbiAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgaHAgPSAyO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICB0eXBlID0gXCJEZXN0cm95ZXJcIjtcbiAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgaHAgPSAzO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICB0eXBlID0gXCJDcnVpc2VyXCI7XG4gICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgIGhwID0gNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHR5cGUgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgbGVuZ3RoID0gNjtcbiAgICAgICAgaHAgPSA2O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBsZW5ndGgsXG4gICAgICBocCxcbiAgICAgIHN1bmssXG4gICAgICBzaGlwSUQsXG4gICAgICBjaGVja1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgfSxcbiAgICAgIGhpdCgpIHtcbiAgICAgICAgaHAgLT0gMTtcbiAgICAgICAgaWYgKGhwID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gXCJzdW5rXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIHJldHVybiB7IHNoaXBGYWN0b3J5IH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCAqIGFzIG15SW50ZXJmYWNlIGZyb20gXCIuL21vZHVsZXMvaW50ZXJmYWNlXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL21vZHVsZXMvc3R5bGVzLmNzc1wiO1xuXG5teUludGVyZmFjZS5pZmFjZS5idWlsZEludGVyZmFjZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9