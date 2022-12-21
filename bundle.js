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


class Square {
  constructor(x, y) {
    const thisX = x || 0; // converts falsey values to 0 (in this case, NaN)
    this.xy = [thisX, y];
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
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pubSub */ "./src/modules/pubSub.js");
/* eslint-disable no-use-before-define */













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

  _pubSub__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("rotateShip", xy);

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
    _pubSub__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("moveShip", result);
  }
  e.dataTransfer.setData("img", e.target.id);
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("img");

  e.target.appendChild(document.getElementById(data));

  _pubSub__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("placeShip", [
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
  _pubSub__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("gameStart", "true");

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
  _pubSub__WEBPACK_IMPORTED_MODULE_10__.pubSub.pub("playersMove", [x, y]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsK0dBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLCtFQUErRSwyQkFBMkIsMkVBQTJFLHFCQUFxQix1QkFBdUIsR0FBRyxvREFBb0QsMkJBQTJCLEdBQUcsS0FBSyxjQUFjLEdBQUcsZUFBZSxpQkFBaUIsR0FBRyxRQUFRLHFCQUFxQix3Q0FBd0MsR0FBRyx3Q0FBd0MsbUJBQW1CLG9CQUFvQixHQUFHLHNDQUFzQyxrQkFBa0IsR0FBRyxtQ0FBbUMsOEJBQThCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLDBCQUEwQixzQkFBc0IsaUJBQWlCLG1CQUFtQixxQkFBcUIsbUJBQW1CLHdCQUF3QixzQkFBc0IsbUVBQW1FLHVCQUF1Qix3QkFBd0IsMkJBQTJCLEdBQUcsVUFBVSxpQkFBaUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyx5QkFBeUIsUUFBUSxtQkFBbUIsS0FBSyxTQUFTLG1CQUFtQixLQUFLLFVBQVUsaUJBQWlCLEtBQUssR0FBRyxlQUFlLGdCQUFnQixrQkFBa0IsZUFBZSwySUFBMkksaUJBQWlCLHVCQUF1QixpQkFBaUIsMkNBQTJDLEdBQUcsaUJBQWlCLGtCQUFrQixrQkFBa0IsaUJBQWlCLHdCQUF3QixHQUFHLGdDQUFnQyxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsdUNBQXVDLGlCQUFpQixHQUFHLFlBQVksb0JBQW9CLEdBQUcscUJBQXFCLGtCQUFrQixjQUFjLHdCQUF3QixHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLGtCQUFrQixvQkFBb0IsR0FBRyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixrQkFBa0Isb0JBQW9CLEdBQUcsNEJBQTRCLGVBQWUsZ0JBQWdCLDhCQUE4Qix1QkFBdUIsc0JBQXNCLEdBQUcsK0JBQStCLGtCQUFrQiwwQ0FBMEMsdUNBQXVDLDJCQUEyQixtQkFBbUIsa0JBQWtCLEdBQUcsZ0JBQWdCLHFCQUFxQixxRUFBcUUsb0JBQW9CLHVCQUF1QixHQUFHLHlCQUF5QixnQkFBZ0IsZUFBZSx1QkFBdUIsR0FBRyxzQkFBc0IsZ0JBQWdCLGNBQWMsdUJBQXVCLEdBQUcsd0JBQXdCLGdCQUFnQixjQUFjLHVCQUF1QixHQUFHLHNCQUFzQixnQkFBZ0IsY0FBYyx1QkFBdUIsR0FBRywwQkFBMEIsOEJBQThCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLGdCQUFnQix1Q0FBdUMsR0FBRyxtQkFBbUIsOENBQThDLEdBQUcsUUFBUSxzQkFBc0IsdUJBQXVCLGtDQUFrQyx3QkFBd0IsdUJBQXVCLEdBQUcsbUJBQW1CLHFCQUFxQixxQkFBcUIsd0JBQXdCLHNCQUFzQiwwQkFBMEIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLDhCQUE4QixtQkFBbUIsd0JBQXdCLG9CQUFvQixHQUFHLHlCQUF5Qiw4QkFBOEIsbUJBQW1CLG9CQUFvQixHQUFHLE9BQU8saUdBQWlHLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsUUFBUSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxTQUFTLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxLQUFLLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsK0RBQStELDJCQUEyQixrREFBa0QscUJBQXFCLHVCQUF1QixHQUFHLG9EQUFvRCwyQkFBMkIsR0FBRyxLQUFLLGNBQWMsR0FBRyxlQUFlLGlCQUFpQixHQUFHLFFBQVEscUJBQXFCLHdDQUF3QyxHQUFHLHdDQUF3QyxtQkFBbUIsb0JBQW9CLEdBQUcsc0NBQXNDLGtCQUFrQixHQUFHLG1DQUFtQyw4QkFBOEIsR0FBRyxtQkFBbUIsdUJBQXVCLEdBQUcsMEJBQTBCLHNCQUFzQixpQkFBaUIsbUJBQW1CLHFCQUFxQixtQkFBbUIsd0JBQXdCLHNCQUFzQixtRUFBbUUsdUJBQXVCLHdCQUF3QiwyQkFBMkIsR0FBRyxVQUFVLGlCQUFpQixHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLHlCQUF5QixRQUFRLG1CQUFtQixLQUFLLFNBQVMsbUJBQW1CLEtBQUssVUFBVSxpQkFBaUIsS0FBSyxHQUFHLGVBQWUsZ0JBQWdCLGtCQUFrQixlQUFlLDJJQUEySSxpQkFBaUIsdUJBQXVCLGlCQUFpQiwyQ0FBMkMsR0FBRyxpQkFBaUIsa0JBQWtCLGtCQUFrQixpQkFBaUIsd0JBQXdCLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3Qix1Q0FBdUMsaUJBQWlCLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLGNBQWMsd0JBQXdCLEdBQUcscUJBQXFCLGlCQUFpQixrQkFBa0Isa0JBQWtCLG9CQUFvQixHQUFHLGdCQUFnQixpQkFBaUIsa0JBQWtCLGtCQUFrQixvQkFBb0IsR0FBRyw0QkFBNEIsZUFBZSxnQkFBZ0IsOEJBQThCLHVCQUF1QixzQkFBc0IsR0FBRywrQkFBK0Isa0JBQWtCLDBDQUEwQyx1Q0FBdUMsMkJBQTJCLG1CQUFtQixrQkFBa0IsR0FBRyxnQkFBZ0IscUJBQXFCLHFFQUFxRSxvQkFBb0IsdUJBQXVCLEdBQUcseUJBQXlCLGdCQUFnQixlQUFlLHVCQUF1QixHQUFHLHNCQUFzQixnQkFBZ0IsY0FBYyx1QkFBdUIsR0FBRyx3QkFBd0IsZ0JBQWdCLGNBQWMsdUJBQXVCLEdBQUcsc0JBQXNCLGdCQUFnQixjQUFjLHVCQUF1QixHQUFHLDBCQUEwQiw4QkFBOEIsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcsZ0JBQWdCLHVDQUF1QyxHQUFHLG1CQUFtQiw4Q0FBOEMsR0FBRyxRQUFRLHNCQUFzQix1QkFBdUIsa0NBQWtDLHdCQUF3Qix1QkFBdUIsR0FBRyxtQkFBbUIscUJBQXFCLHFCQUFxQix3QkFBd0Isc0JBQXNCLDBCQUEwQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix1QkFBdUIsOEJBQThCLG1CQUFtQix3QkFBd0Isb0JBQW9CLEdBQUcseUJBQXlCLDhCQUE4QixtQkFBbUIsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQzNuUztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVnRDtBQUNYO0FBQ0g7O0FBRWxDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQ0FBVTtBQUNoQixNQUFNO0FBQ047QUFDQSxNQUFNLCtDQUFVO0FBQ2hCO0FBQ0EsTUFBTSwrQ0FBVTtBQUNoQjs7QUFFQTtBQUNBLE1BQU0sK0NBQVU7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0NBQVUsbUJBQW1CLHFEQUFtQjtBQUN0RCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sK0NBQVUsZ0JBQWdCLG1EQUFpQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSwrQ0FBVTtBQUNoQjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU0sK0NBQVU7QUFDaEI7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLCtDQUFVO0FBQ2hCO0FBQ0E7QUFDQSxNQUFNLCtDQUFVO0FBQ2hCLE1BQU07QUFDTjtBQUNBLE1BQU0sK0NBQVU7QUFDaEI7QUFDQSxNQUFNLCtDQUFVO0FBQ2hCLE1BQU07QUFDTixNQUFNLCtDQUFVO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUF3QixDQUFDLHVDQUFLOztBQUVqRCwrQ0FBVTtBQUNWLCtDQUFVLGdCQUFnQixtREFBaUI7QUFDM0MsK0NBQVU7QUFDViwrQ0FBVSxtQkFBbUIscURBQW1CO0FBQ2hELCtDQUFVO0FBQ1YsK0NBQVU7QUFDViwrQ0FBVTtBQUNWLCtDQUFVLGtCQUFrQixxREFBbUI7QUFDL0MsK0NBQVU7QUFDViwrQ0FBVSxTQUFTLDRDQUFVO0FBQzdCLCtDQUFVLGFBQWEsZ0RBQWM7QUFDckMsK0NBQVUsWUFBWSxtREFBaUI7QUFDdkMsK0NBQVUsZUFBZSxrREFBZ0I7O0FBRXpDLCtDQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVlg7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0s0Qzs7QUFFNUM7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGlFQUF1QjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVyxPQUFPOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFlRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzVEY7O0FBRXNEO0FBQ0c7QUFDVjtBQUNNO0FBQ0Y7QUFDSjtBQUNJO0FBQ1I7QUFDQTtBQUNGO0FBQ1A7O0FBRWxDO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxVQUFVLElBQUksTUFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLHdCQUF3QiwyREFBYyxDQUFDLGtFQUFxQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxFQUFFLEdBQUcsRUFBRTtBQUN4RCxRQUFRO0FBQ1I7QUFDQTtBQUNBLDhDQUE4QyxFQUFFLEdBQUcsRUFBRTtBQUNyRDtBQUNBLE1BQU0sbUVBQWdCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGtCQUFrQixPQUFPO0FBQ3pCLG9CQUFvQixrREFBSzs7QUFFekIsSUFBSSxtRUFBZ0I7QUFDcEI7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixzREFBVSxFQUFFLE1BQU0sY0FBYztBQUNuRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixtREFBTyxFQUFFLE1BQU0sY0FBYztBQUNoRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixxREFBUyxFQUFFLE1BQU0sY0FBYztBQUNsRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixtREFBTyxFQUFFLE1BQU0sY0FBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsZ0RBQVU7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVU7QUFDZDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBLEVBQUUsZ0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsRUFBRSxnREFBVTs7QUFFWjtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFVO0FBQ1o7O0FBRUE7QUFDQSxRQUFRLFNBQVM7O0FBRVY7QUFDUDtBQUNBO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHlCQUF5Qjs7QUFFbkM7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDLG1EQUFtRCxnQkFBZ0I7QUFDbkU7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDLGtEQUFrRCxZQUFZO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixxREFBUztBQUNyQyx3QkFBd0IsaURBQUs7QUFDN0IsMkJBQTJCLGdEQUFJOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZELEVBQUUsR0FBRyxFQUFFOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiwwREFBMEQsRUFBRSxHQUFHLEVBQUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQ7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGlEQUFLO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQLGtCQUFrQixJQUFJLGtFQUFxQixNQUFNO0FBQ2pELG9CQUFvQiwyREFBYztBQUNsQyxJQUFJLG1FQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTSxHQUFHLFFBQVEsR0FBRyxRQUFRO0FBQ3hDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JjMEM7O0FBRXBEO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsY0FBYywwREFBVztBQUN6QixNQUFNO0FBQ04sY0FBYyx1REFBUTtBQUN0QjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFDQztBQUNaOztBQUV2QyxvRUFBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0eWxlcy5jc3M/MTA4MCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yZXRyby53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIExPQUQgUkVUUk8gRk9OVCAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZXRyb1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi8qIFNUWUxFUyAqL1xcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwODBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzAwYjE0MDtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDFweCAjMDBiMTQwKSBjb250cmFzdCgyKSBicmlnaHRuZXNzKDEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzE0MTIxMjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmV0cm9cXFwiO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FubGluZSB7XFxuICAwJSB7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3R0b206IDAlO1xcbiAgfVxcbn1cXG5cXG4uc2NhbmxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgei1pbmRleDogODtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMGRlZyxcXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwJSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEpIDEwMCVcXG4gICk7XFxuICBvcGFjaXR5OiAwLjE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwMCU7XFxuICBhbmltYXRpb246IHNjYW5saW5lIDhzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm5vdGlmLWFyZWEge1xcbiAgaGVpZ2h0OiAyMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogODQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ubm90aWYtbGVmdCxcXG4ubm90aWYtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IHJnYigxMCwgMTE3LCAzMykgNXB4IHNvbGlkO1xcbiAgd2lkdGg6IDg0MHB4O1xcbn1cXG5cXG4ubm90aWYge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiMTQwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMDBweDtcXG5cXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMXB4ICMwMGZmNWUpIGNvbnRyYXN0KDIpIGJyaWdodG5lc3MoMSk7XFxuICB6LWluZGV4OiA5OTk5OTk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5iYXR0bGVzaGlwLXJvdGF0ZWQge1xcbiAgbGVmdDogLTk4cHg7XFxuICB0b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY3J1aXNlci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC01OXB4O1xcbiAgdG9wOiA2MnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLXJvdGF0ZWQge1xcbiAgbGVmdDogLTM4cHg7XFxuICB0b3A6IDQxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mcmlnYXRlLXJvdGF0ZWQge1xcbiAgbGVmdDogLTE4cHg7XFxuICB0b3A6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5kZXN0cm95ZXItY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTRweCAyMyUgMTRweCAxNyU7XFxufVxcblxcbi5mcmlnYXRlLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4uaGl0LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgMTE2LCA1NCk7XFxufVxcblxcbi5oaXQtb2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIxLCAwLjgxNSk7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZXRyb1xcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogIzAwYjE0MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMjEyO1xcbiAgY29sb3I6ICMwMGIxNDA7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIxNDA7XFxuICBjb2xvcjogIzE0MTIxMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7O0FBRXBCO0VBQ0Usb0JBQW9CO0VBQ3BCLDREQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjs7QUFFakI7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDO0FBQ0E7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTs7OztFQUlFLGFBQWE7QUFDZjtBQUNBOzs7Ozs7O0VBT0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsOERBQThEO0VBQzlELGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtFQUNWOzs7OztHQUtDO0VBQ0QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdFQUFnRTtFQUNoRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBMT0FEIFJFVFJPIEZPTlQgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmV0cm9cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vcmV0cm8ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBSRVNFVCBTVFlMRVMgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuLyogU1RZTEVTICovXFxuXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDE2MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogMTA4MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjMDBiMTQwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMXB4ICMwMGIxNDApIGNvbnRyYXN0KDIpIGJyaWdodG5lc3MoMSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMTQxMjEyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZXRyb1xcXCI7XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYW5saW5lIHtcXG4gIDAlIHtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJvdHRvbTogMCU7XFxuICB9XFxufVxcblxcbi5zY2FubGluZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB6LWluZGV4OiA4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAwZGVnLFxcbiAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMSkgMTAwJVxcbiAgKTtcXG4gIG9wYWNpdHk6IDAuMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIGFuaW1hdGlvbjogc2NhbmxpbmUgOHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubm90aWYtYXJlYSB7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA4NDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5ub3RpZi1sZWZ0LFxcbi5ub3RpZi1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogcmdiKDEwLCAxMTcsIDMzKSA1cHggc29saWQ7XFxuICB3aWR0aDogODQwcHg7XFxufVxcblxcbi5ub3RpZiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY3B1LWJvYXJkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGxhY2VtZW50LWdyaWQtc3F1YXJlIHtcXG4gIHdpZHRoOiAxMCU7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGIxNDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWNvbHVtbi1nYXA6IDEwMHB4O1xcblxcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4xcHggIzAwZmY1ZSkgY29udHJhc3QoMikgYnJpZ2h0bmVzcygxKTtcXG4gIHotaW5kZXg6IDk5OTk5OTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtcm90YXRlZCB7XFxuICBsZWZ0OiAtOThweDtcXG4gIHRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5jcnVpc2VyLXJvdGF0ZWQge1xcbiAgbGVmdDogLTU5cHg7XFxuICB0b3A6IDYycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5kZXN0cm95ZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtMzhweDtcXG4gIHRvcDogNDFweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmZyaWdhdGUtcm90YXRlZCB7XFxuICBsZWZ0OiAtMThweDtcXG4gIHRvcDogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxNHB4IDIzJSAxNHB4IDE3JTtcXG59XFxuXFxuLmZyaWdhdGUtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5oaXQtZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxMTYsIDU0KTtcXG59XFxuXFxuLmhpdC1vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuODE1KTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBmb250LWZhbWlseTogXFxcIlJldHJvXFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBiMTQwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDEyMTI7XFxuICBjb2xvcjogIzAwYjE0MDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5zdGFydC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjE0MDtcXG4gIGNvbG9yOiAjMTQxMjEyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIG5vZGVUeXBlLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0LFxuICAgIGlucHV0VHlwZSxcbiAgICB2YWx1ZSxcbiAgICBjbGFzczEsXG4gICAgY2xhc3MyLFxuICAgIGNsYXNzMyxcbiAgICB0YXNrSUQsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaWQsXG4gICAgeHksXG4gICAgYWxsb3dEcm9wLFxuICB9ID0gZWxlbWVudDtcbiAgY29uc3QgY3JlYXRlRE9NTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuICAgIGNvbnN0IG5ld0RPTU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RE9NTm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaW5wdXRUeXBlKSB7XG4gICAgICBuZXdET01Ob2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RE9NTm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2xhc3MxKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MxKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMikge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgfVxuICAgIGlmIChjbGFzczMpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczMpO1xuICAgIH1cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIG5ld0RPTU5vZGUucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIG5ld0RPTU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaWQpIHtcbiAgICAgIG5ld0RPTU5vZGUuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBpZiAoeHkpIHtcbiAgICAgIG5ld0RPTU5vZGUuZGF0YXNldC54ID0geHlbMF07XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQueSA9IHh5WzFdO1xuICAgICAgbmV3RE9NTm9kZS5kYXRhc2V0LnNxbnVtID0geHlbMl07XG4gICAgfVxuICAgIGlmIChhbGxvd0Ryb3ApIHtcbiAgICAgIG5ld0RPTU5vZGUuc2V0QXR0cmlidXRlKFwib25kcm9wXCIsIFwiZHJvcChldmVudClcIik7XG4gICAgICBuZXdET01Ob2RlLnNldEF0dHJpYnV0ZShcIm9uZHJhZ292ZXJcIiwgXCJhbGxvd0Ryb3AoZXZlbnQpXCIpO1xuICAgIH1cbiAgICBwYXJlbnROb2RlLmFwcGVuZChuZXdET01Ob2RlKTtcbiAgfTtcbiAgY3JlYXRlRE9NTm9kZSgpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBub2RlVHlwZSxcbiAgICBwYXJlbnQsXG4gICAgdGV4dCxcbiAgICBpbnB1dFR5cGUsXG4gICAgdmFsdWUsXG4gICAgY2xhc3MxLFxuICAgIGNsYXNzMixcbiAgICB0YXNrSUQsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGlmYWNlIGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHViU3ViXCI7XG5cbmNvbnN0IGNvaW5GbGlwID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuXG4vLyBFdmVudCBlbWl0dGVyIGZvciBwdWIvc3ViIGltcGxlbWVudGF0aW9uXG5cbmNvbnN0IGdldEFkamFjZW50U3F1YXJlQnlEaXJlY3Rpb24gPSAoeCwgeSwgZGlyKSA9PiB7XG4gIHN3aXRjaCAoZGlyKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFt4LCB5ICsgMV07XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFt4ICsgMSwgeV07XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFt4LCB5IC0gMV07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbeCAtIDEsIHldO1xuICB9XG59O1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gcHVsbHMgaW4gcGxheWVycyBhbmQgYm9hcmQgZnJvbSBwbGF5ZXJGYWN0b3J5XG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVyRmFjdG9yeSgpO1xuICAgIC8vIGZsaXBzIGEgY29pbiB0byBkZXRlcm1pbmUgd2hvIGdvZXMgZmlyc3RcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBjb2luRmxpcCgpO1xuICAgIHRoaXMuc2hpcHNQbGFjZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwUGxhY2VkQ291bnQgPSAwO1xuICAgIHRoaXMuY3B1SGl0ID0gbnVsbDtcbiAgICB0aGlzLnNlY29uZENwdUhpdCA9IG51bGw7XG4gICAgdGhpcy5sYXN0SGl0ID0gbnVsbDtcbiAgICB0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgaWYgKGNvaW5GbGlwKCkgPT09IDEpIHtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMik7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q1BVTW92ZSgpIHtcbiAgICBsZXQgbW92ZSA9IHRoaXMucGxheWVycy5jcHUuYXR0YWNrKCk7XG5cbiAgICBpZiAodGhpcy5zZWNvbmRDcHVIaXQgJiYgIXRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbiA9IHRoaXMuZ2V0UHJvYmFibGVTaGlwRGlyZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtb3ZlID0gZ2V0QWRqYWNlbnRTcXVhcmVCeURpcmVjdGlvbihcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdFswXSxcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdFsxXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtb3ZlID0gZ2V0QWRqYWNlbnRTcXVhcmVCeURpcmVjdGlvbihcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdFswXSxcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdFsxXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtb3ZlID0gZ2V0QWRqYWNlbnRTcXVhcmVCeURpcmVjdGlvbihcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdFswXSxcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdFsxXSxcbiAgICAgICAgICAgIDNcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbW92ZSA9IGdldEFkamFjZW50U3F1YXJlQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICB0aGlzLmxhc3RIaXRbMF0sXG4gICAgICAgICAgICB0aGlzLmxhc3RIaXRbMV0sXG4gICAgICAgICAgICA0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jcHVIaXQgJiYgIXRoaXMuc2Vjb25kQ3B1SGl0ICYmICF0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbikge1xuICAgICAgbW92ZSA9IHRoaXMuZ2V0UmFuZG9tQWRqYWNlbnRTcXVhcmUodGhpcy5jcHVIaXQpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlKTtcblxuICAgIHdoaWxlIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBuZXdBdHRhY2sgPSB0aGlzLnBsYXllcnMuY3B1LmF0dGFjaygpO1xuXG4gICAgICBtb3ZlID0gbmV3QXR0YWNrO1xuICAgICAgcmVzdWx0ID0gdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLnJlY2VpdmVBdHRhY2sobmV3QXR0YWNrKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHRBcnJheSA9IFtdO1xuICAgIHJlc3VsdEFycmF5LnB1c2gobW92ZVswXSwgbW92ZVsxXSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgcmVzdWx0QXJyYXkucHVzaCh0cnVlLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMuY3B1SGl0ICYmICF0aGlzLnNlY29uZENwdUhpdCAmJiAhdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZWNvbmRDcHVIaXQgPSBbbW92ZVswXSwgbW92ZVsxXV07XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5jcHVIaXQpIHtcbiAgICAgICAgdGhpcy5jcHVIaXQgPSBbbW92ZVswXSwgbW92ZVsxXV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdEhpdCA9IFttb3ZlWzBdLCBtb3ZlWzFdXTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2goZmFsc2UsIHRydWUpO1xuICAgICAgaWYgKHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbiA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbiA9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICB0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24gPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0SGl0ID0gdGhpcy5jcHVIaXQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwic3Vua1wiKSB7XG4gICAgICB0aGlzLmNwdUhpdCA9IG51bGw7XG4gICAgICB0aGlzLnNlY29uZENwdUhpdCA9IG51bGw7XG4gICAgICB0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmxhc3RIaXQgPSBudWxsO1xuICAgICAgcmVzdWx0QXJyYXkucHVzaCh0cnVlLCB0cnVlKTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJzdW5rXCIsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJnYW1lT3ZlclwiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgcHViU3ViLnB1YihcImdhbWVPdmVyXCIsIFwiVGhlIGNvbXB1dGVyIHdpbnMhXCIpO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICBwdWJTdWIucHViKFwibWFya1NxdWFyZUhpdFwiLCByZXN1bHRBcnJheSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIHB1YlN1Yi5wdWIoXCJtYXJrU3F1YXJlSGl0XCIsIHJlc3VsdEFycmF5KTtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMSk7XG4gICAgfVxuICB9XG5cbiAgZ2FtZUZsb3cod2hvc2VUdXJuKSB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdob3NlVHVybiA9PT0gMSAmJiB0aGlzLmdhbWVPdmVyID09PSBmYWxzZSkge1xuICAgICAgLy8gcHJvbXB0IHBsYXllciBmb3IgYSBtb3ZlXG4gICAgICBwdWJTdWIucHViKFwiZ2V0UGxheWVyc01vdmVcIiwgaWZhY2UuZ2V0UGxheWVyTW92ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHByb21wdCBjcHUgZm9yIGEgbW92ZVxuICAgICAgZ2V0Q1BVTW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRlc3RTaGlwcygpIHtcbiAgICB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMCwgMCwgNik7XG4gICAgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDEsIDAsIDQpO1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAyLCAwLCAzKTtcbiAgICB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMywgMCwgMik7XG4gICAgdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAwLCAwLCA2KTtcbiAgICB0aGlzLnBsYXllcnMuY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDEsIDAsIDQpO1xuICAgIHRoaXMucGxheWVycy5jcHUuYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMiwgMCwgMyk7XG4gICAgdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAzLCAwLCAyKTtcbiAgfVxuXG4gIGRlY3JlbWVudFBsYWNlZENvdW50KCkge1xuICAgIHRoaXMuc2hpcFBsYWNlZENvdW50IC09IDE7XG4gIH1cblxuICBzaGlwUGxhY2VkKCkge1xuICAgIHRoaXMuc2hpcFBsYWNlZENvdW50ICs9IDE7XG5cbiAgICBpZiAodGhpcy5zaGlwUGxhY2VkQ291bnQgPT09IDQpIHtcbiAgICAgIHRoaXMuc2hpcHNQbGFjZWQgPSB0cnVlO1xuICAgICAgcHViU3ViLnB1YihcInNoaXBzUGxhY2VkXCIsIGlmYWNlLnNoaXBzUGxhY2VkKTtcbiAgICB9XG4gIH1cblxuICBwbGF5ZXJzTW92ZShtb3ZlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuXG4gICAgY29uc3QgcmVzdWx0QXJyYXkgPSBbXTtcbiAgICByZXN1bHRBcnJheS5wdXNoKG1vdmVbMF0sIG1vdmVbMV0pO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgcmVzdWx0QXJyYXkucHVzaCh0cnVlLCBmYWxzZSk7XG4gICAgICBwdWJTdWIucHViKFwibWFya1NxdWFyZUhpdFwiLCByZXN1bHRBcnJheSk7XG4gICAgICB0aGlzLmdhbWVGbG93KDIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAgICAgcmVzdWx0QXJyYXkucHVzaChmYWxzZSwgZmFsc2UpO1xuICAgICAgcHViU3ViLnB1YihcIm1hcmtTcXVhcmVIaXRcIiwgcmVzdWx0QXJyYXkpO1xuICAgICAgdGhpcy5nYW1lRmxvdygyKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzdW5rXCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgZmFsc2UpO1xuICAgICAgcHViU3ViLnB1YihcIm1hcmtTcXVhcmVIaXRcIiwgcmVzdWx0QXJyYXkpO1xuICAgICAgdGhpcy5nYW1lRmxvdygyKTtcbiAgICAgIC8vIGNoYW5nZSB0aGUgYmVsb3cgdG8gdXNlIHB1Yi9zdWIgdG9vXG4gICAgICBwdWJTdWIucHViKFwic3Vua1wiLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJnYW1lT3ZlclwiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKHRydWUsIGZhbHNlLCB0cnVlKTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJtYXJrU3F1YXJlSGl0XCIsIHJlc3VsdEFycmF5KTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgcHViU3ViLnB1YihcImdhbWVPdmVyXCIsIFwiWW91IHdpblwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICBwdWJTdWIucHViKFwiaW52YWxpZFwiKTtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmFuZG9tQWRqYWNlbnRTcXVhcmUoaGl0KSB7XG4gICAgY29uc3QgeCA9IGhpdFswXTtcbiAgICBjb25zdCB5ID0gaGl0WzFdO1xuICAgIGNvbnN0IHsgYm9hcmQgfSA9IHRoaXMucGxheWVycy5odW1hbjtcbiAgICBjb25zdCBhZGphY2VudFNxdWFyZXMgPSBbXG4gICAgICBbeCAtIDEsIHldLFxuICAgICAgW3ggKyAxLCB5XSxcbiAgICAgIFt4LCB5IC0gMV0sXG4gICAgICBbeCwgeSArIDFdLFxuICAgIF07XG4gICAgY29uc3QgdmFsaWRTcXVhcmVzID0gW107XG5cbiAgICBhZGphY2VudFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBpZiAoYm9hcmQuY2hlY2tJZlNxdWFyZUV4aXN0cyhzcXVhcmVbMF0sIHNxdWFyZVsxXSkpIHtcbiAgICAgICAgdmFsaWRTcXVhcmVzLnB1c2goc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHZhbGlkQXR0YWNrcyA9IFtdO1xuICAgIHZhbGlkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGlmICghYm9hcmQuY2hlY2tJZlNxdWFyZUlzSGl0KHNxdWFyZVswXSwgc3F1YXJlWzFdKSkge1xuICAgICAgICB2YWxpZEF0dGFja3MucHVzaChzcXVhcmUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkQXR0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY3B1SGl0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGEgcmFuZG9tIHNxdWFyZSBmcm9tIHZhbGlkQXR0YWNrc1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRBdHRhY2tzLmxlbmd0aCk7XG4gICAgY29uc3QgcmFuZG9tU3F1YXJlID0gdmFsaWRBdHRhY2tzW3JhbmRvbUluZGV4XTtcblxuICAgIHJldHVybiByYW5kb21TcXVhcmU7XG4gIH1cblxuICBnZXRQcm9iYWJsZVNoaXBEaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcjtcbiAgICBjb25zdCB4MSA9IHRoaXMuY3B1SGl0WzBdO1xuICAgIGNvbnN0IHkxID0gdGhpcy5jcHVIaXRbMV07XG4gICAgY29uc3QgeDIgPSB0aGlzLnNlY29uZENwdUhpdFswXTtcbiAgICBjb25zdCB5MiA9IHRoaXMuc2Vjb25kQ3B1SGl0WzFdO1xuICAgIGlmICh4MSA9PT0geDIpIHtcbiAgICAgIGlmICh5MiA+IHkxKSB7XG4gICAgICAgIGRpciA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXIgPSAzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoeDIgPiB4MSkge1xuICAgICAgZGlyID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyID0gNDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyO1xuICB9XG5cbiAgcGxhY2VIdW1hbihzaGlwKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoXG4gICAgICBzaGlwWzBdLFxuICAgICAgc2hpcFsxXSxcbiAgICAgIE51bWJlcihzaGlwWzJdKSxcbiAgICAgIHNoaXBbM11cbiAgICApO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIHBsYWNlZFNoaXAocmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICByb3RhdGVTaGlwKHNoaXBEYXRhKSB7XG4gICAgdGhpcy5kZWNyZW1lbnRQbGFjZWRDb3VudCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5yb3RhdGVTaGlwaW5TdG9yYWdlKHNoaXBEYXRhKTtcblxuICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNoaXBQbGFjZWQoKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlU2hpcChkZXRhaWxzKSB7XG4gICAgdGhpcy5kZWNyZW1lbnRQbGFjZWRDb3VudCgpO1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5tb3ZlU2hpcEluU3RvcmFnZShcbiAgICAgIGRldGFpbHNbMF0sXG4gICAgICBkZXRhaWxzWzFdLFxuICAgICAgZGV0YWlsc1syXSxcbiAgICAgIGRldGFpbHNbM11cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuXG5jb25zdCBwbGFjZWRTaGlwID0gY29udHJvbGxlci5zaGlwUGxhY2VkLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBzdGFydEdhbWUgPSBjb250cm9sbGVyLnN0YXJ0R2FtZS5iaW5kKGNvbnRyb2xsZXIpO1xuY29uc3QgcGxheWVyc01vdmUgPSBjb250cm9sbGVyLnBsYXllcnNNb3ZlLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBnZXRDUFVNb3ZlID0gY29udHJvbGxlci5nZXRDUFVNb3ZlLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBwbGFjZUh1bWFuU2hpcCA9IGNvbnRyb2xsZXIucGxhY2VIdW1hbi5iaW5kKGNvbnRyb2xsZXIpO1xuY29uc3Qgcm90YXRlU2hpcCA9IGNvbnRyb2xsZXIucm90YXRlU2hpcC5iaW5kKGNvbnRyb2xsZXIpO1xuY29uc3QgbW92ZVNoaXAgPSBjb250cm9sbGVyLm1vdmVTaGlwLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBtYXJrU3F1YXJlID0gaWZhY2UubWFya1NxdWFyZUhpdC5iaW5kKGlmYWNlKTtcblxucHViU3ViLnN1YihcInBsYWNlU2hpcFwiLCBwbGFjZUh1bWFuU2hpcCk7XG5wdWJTdWIuc3ViKFwic2hpcHNQbGFjZWRcIiwgaWZhY2Uuc2hpcHNQbGFjZWQpO1xucHViU3ViLnN1YihcImdhbWVTdGFydFwiLCBzdGFydEdhbWUpO1xucHViU3ViLnN1YihcImdldFBsYXllcnNNb3ZlXCIsIGlmYWNlLmdldFBsYXllck1vdmUpO1xucHViU3ViLnN1YihcInBsYXllcnNNb3ZlXCIsIHBsYXllcnNNb3ZlKTtcbnB1YlN1Yi5zdWIoXCJyb3RhdGVTaGlwXCIsIHJvdGF0ZVNoaXApO1xucHViU3ViLnN1YihcIm1vdmVTaGlwXCIsIG1vdmVTaGlwKTtcbnB1YlN1Yi5zdWIoXCJnZXRQbGF5ZXJNb3ZlXCIsIGlmYWNlLmdldFBsYXllck1vdmUpO1xucHViU3ViLnN1YihcIm1hcmtTcXVhcmVIaXRcIiwgbWFya1NxdWFyZSk7XG5wdWJTdWIuc3ViKFwic3Vua1wiLCBpZmFjZS5zdW5rKTtcbnB1YlN1Yi5zdWIoXCJnYW1lT3ZlclwiLCBpZmFjZS5nYW1lT3Zlcik7XG5wdWJTdWIuc3ViKFwiaW52YWxpZFwiLCBpZmFjZS5pbnZhbGlkTW92ZSk7XG5wdWJTdWIuc3ViKFwidXBkYXRlTm90c1wiLCBpZmFjZS51cGRhdGVOb3RzKTtcblxucHViU3ViLnN1YihcbiAgXCJkZWNyZW1lbnRQbGFjZWRDb3VudFwiLFxuICBjb250cm9sbGVyLmRlY3JlbWVudFBsYWNlZENvdW50LmJpbmQoY29udHJvbGxlcilcbik7XG5cbmV4cG9ydCB7IHB1YlN1YiB9O1xuIiwiZXhwb3J0IGNvbnN0IGRpc3BsYXlPYmplY3RzID0gW1xuICB7XG4gICAgbmFtZTogXCJtYWluXCIsXG4gICAgbm9kZVR5cGU6IFwibWFpblwiLFxuICAgIHBhcmVudDogXCJib2R5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImJlemVsXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIm1haW5cIixcbiAgICBjbGFzczE6IFwiYmV6ZWxcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZ2FtZUNvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuYmV6ZWxcIixcbiAgICBjbGFzczE6IFwiZ2FtZS1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic2NhbmxpbmVcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmdhbWUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInNjYW5saW5lXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInRpdGxlQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5nYW1lLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ0aXRsZS1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibm90aWZBcmVhXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5nYW1lLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJub3RpZi1hcmVhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIm5vdGlmVXBwZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLm5vdGlmLWFyZWFcIixcbiAgICBjbGFzczE6IFwibm90aWYtbGVmdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJub3RpZkxvd2VyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5ub3RpZi1hcmVhXCIsXG4gICAgY2xhc3MxOiBcIm5vdGlmLXJpZ2h0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIm1haW5UaXRsZVwiLFxuICAgIG5vZGVUeXBlOiBcImgxXCIsXG4gICAgcGFyZW50OiBcIi50aXRsZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwidGl0bGVcIixcbiAgICB0ZXh0OiBcIkJBVFRMRVNISVBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicGxhY2VtZW50Q29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5nYW1lLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJwbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImdyaWRDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZ3JpZC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiaHVtYW5HcmlkXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5ncmlkLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJwbGFjZW1lbnQtZ3JpZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjcHVCb2FyZFwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZ3JpZC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiY3B1LWJvYXJkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInNoaXBQbGFjZW1lbnRDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic2hpcC1wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImJTaGlwQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5zaGlwLXBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiYnNoaXAtY29udGFpbmVyXCIsXG4gICAgY2xhc3MyOiBcInNoaXAtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNydWlzZXJDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXAtcGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcnVpc2VyLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMjogXCJzaGlwLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkZXN0cm95ZXJDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXAtcGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJkZXN0cm95ZXItY29udGFpbmVyXCIsXG4gICAgY2xhc3MyOiBcInNoaXAtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImZyaWdhdGVDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXAtcGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJmcmlnYXRlLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMjogXCJzaGlwLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzdGFydEJ1dHRvblwiLFxuICAgIG5vZGVUeXBlOiBcImlucHV0XCIsXG4gICAgcGFyZW50OiBcIi5nYW1lLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzdGFydC1idXR0b25cIixcbiAgICBpbnB1dFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgdmFsdWU6IFwiU1RBUlRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicGxhY2VtZW50R3JpZFNxdWFyZVwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWdyaWRcIixcbiAgICBjbGFzczE6IFwicGxhY2VtZW50LWdyaWQtc3F1YXJlXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2hpcHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkJhdHRsZXNoaXBcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmJzaGlwLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJiYXR0bGVzaGlwLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDcnVpc2VyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5jcnVpc2VyLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcnVpc2VyLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZXN0cm95ZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmRlc3Ryb3llci1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZGVzdHJveWVyLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGcmlnYXRlXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5mcmlnYXRlLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJmcmlnYXRlLXBsYWNlbWVudFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG5vdGlmcyA9IFtcbiAge1xuICAgIG5hbWU6IFwibm90aWZIdW1hblwiLFxuICAgIG5vZGVUeXBlOiBcImgzXCIsXG4gICAgcGFyZW50OiBcIi5ub3RpZi1sZWZ0XCIsXG4gICAgY2xhc3MxOiBcIm5vdGlmXCIsXG4gICAgY2xhc3MyOiBcIm5vdGlmLWh1bWFuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIm5vdGlmQ3B1XCIsXG4gICAgbm9kZVR5cGU6IFwiaDNcIixcbiAgICBwYXJlbnQ6IFwiLm5vdGlmLXJpZ2h0XCIsXG4gICAgY2xhc3MxOiBcIm5vdGlmXCIsXG4gICAgY2xhc3MyOiBcIm5vdGlmLWNwdVwiLFxuICB9LFxuXTtcbiIsImltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIGNvbnN0IHRoaXNYID0geCB8fCAwOyAvLyBjb252ZXJ0cyBmYWxzZXkgdmFsdWVzIHRvIDAgKGluIHRoaXMgY2FzZSwgTmFOKVxuICAgIHRoaXMueHkgPSBbdGhpc1gsIHldO1xuICAgIHRoaXMub2NjdXBhbnQgPSBudWxsO1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gIH1cblxuICBwbGFjZVNoaXBPblNxdWFyZShzaGlwSUQpIHtcbiAgICBjb25zb2xlLmxvZygncGxhY2luZyBzaGlwIG9uIHNxdWFyZSEgdGhpcyBpcycsIHRoaXMpO1xuICAgIHRoaXMub2NjdXBhbnQgPSBzaGlwSUQ7XG4gIH1cbn1cblxuY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gYnVpbGRCb2FyZCgpO1xuICAgIHRoaXMuc2hpcEFycmF5ID0gW107XG4gICAgdGhpcy5wbGFjZVNoaXBPbkJvYXJkID0gcGxhY2VTaGlwT25Cb2FyZDtcbiAgICB0aGlzLmNoZWNrRm9yT2NjdXBhbnRzID0gY2hlY2tGb3JPY2N1cGFudHM7XG4gICAgdGhpcy5yZWNlaXZlQXR0YWNrID0gcmVjZWl2ZUF0dGFjaztcbiAgICB0aGlzLmdldFNoaXAgPSBnZXRTaGlwO1xuICAgIHRoaXMuY2hlY2tGbGVldFN1bmsgPSBjaGVja0ZsZWV0U3VuaztcbiAgICB0aGlzLnJvdGF0ZVNoaXBpblN0b3JhZ2UgPSByb3RhdGVTaGlwaW5TdG9yYWdlO1xuICAgIHRoaXMuZGVsZXRlU2hpcCA9IGRlbGV0ZVNoaXA7XG4gICAgdGhpcy5tb3ZlU2hpcEluU3RvcmFnZSA9IG1vdmVTaGlwSW5TdG9yYWdlO1xuICAgIHRoaXMuY2hlY2tJZlNxdWFyZUV4aXN0cyA9IGNoZWNrSWZTcXVhcmVFeGlzdHM7XG4gICAgdGhpcy5jaGVja0lmU3F1YXJlSXNIaXQgPSBjaGVja0lmU3F1YXJlSXNIaXQ7XG4gIH1cbn1cblxuY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmQoKTtcbmNvbnN0IGNwdUJvYXJkID0gbmV3IEJvYXJkKCk7XG5cbmZ1bmN0aW9uIGJ1aWxkQm9hcmQoKSB7XG4gIC8vIGJ1aWxkIGEgMmQgYXJyYXkgcmVwcmVzZW50aW5nIGEgMTB4MTAgZ2FtZSBib2FyZFxuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gaTtcbiAgICBjb25zdCB4QXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHkgPSBpbmRleDtcbiAgICAgIGNvbnN0IHNxID0gbmV3IFNxdWFyZSh4LCB5KTtcbiAgICAgIHhBcnJheS5wdXNoKHNxKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaCh4QXJyYXkpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSWZTcXVhcmVJc0hpdCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV0uaGl0O1xufVxuXG5mdW5jdGlvbiBjaGVja0lmU3F1YXJlRXhpc3RzKHgsIHkpIHtcbiAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB7IFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBob3JpelZlcnQsIHNoaXBUeXBlLCBJRCkge1xuICAvLyBtYWtlIGEgbmV3IHNoaXAgYWNjb3JkaW5nIHRvIHNoaXBUeXBlXG4gIGNvbnN0IG5ld1NoaXAgPSBzaGlwRmFjdG9yeS5zaGlwRmFjdG9yeShzaGlwVHlwZSk7XG4gIG5ld1NoaXAuZGlyZWN0aW9uID0gaG9yaXpWZXJ0O1xuICBjb25zdCBuZXdTaGlwTGVuZ3RoID0gbmV3U2hpcC5sZW5ndGg7XG5cbiAgLy8gaWYgdGhpcyB3YXMgYW4gYWxyZWFkeSBleGlzdGluZyBzaGlwLCBnaXZlIGl0IGl0cyBvbGQgSURcbiAgaWYgKElEKSB7XG4gICAgbmV3U2hpcC5zaGlwSUQgPSBJRDtcbiAgfVxuXG4gIC8vIHRoZSBmb2xsb3dpbmcgaWYgc3RhdGVtZW50cyBjaGVjayB0aGF0IHRoaXMgaXMgYSBsZWdhbCBzaGlwIHBsYWNlbWVudFxuICBpZiAoaG9yaXpWZXJ0ID09PSAwKSB7XG4gICAgaWYgKHggKyBuZXdTaGlwTGVuZ3RoID4gMTApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeSAtIG5ld1NoaXBMZW5ndGggPCAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5jaGVja0Zvck9jY3VwYW50cyh4LCB5LCBob3JpelZlcnQsIG5ld1NoaXBMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhpcy5zaGlwQXJyYXkucHVzaChuZXdTaGlwKTtcblxuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAvLyBsb29wIHRocm91Z2ggbmV3U2hpcExlbmd0aCBzcXVhcmVzIGluXG4gIC8vIHRoZSBkaXJlY3Rpb24gaW5kaWNhdGVkIGJ5IGhvcml6VmVydCwgbW9kaWZ5aW5nIHRoZWlyIG9jY3VwYW50XG4gIC8vIGF0dHJpYnV0ZXMgYWNjb3JkaW5nIHRvIG5ld1NoaXAncyBJRFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKG5ld1NoaXAuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAvLyBpLmUuIGlmIHRoaXMgc2hpcCBpcyBwbGFjZWQgaG9yaXpvbnRhbGx5XG4gICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XS5wbGFjZVNoaXBPblNxdWFyZShuZXdTaGlwLnNoaXBJRCk7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0ub2NjdXBhbnQgPT09IG5ld1NoaXAuc2hpcElEKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGUgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseVxuICAgICAgdGhpcy5ib2FyZFt4XVt5IC0gaV0ucGxhY2VTaGlwT25TcXVhcmUobmV3U2hpcC5zaGlwSUQpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSAtIGldLm9jY3VwYW50ID09PSBuZXdTaGlwLnNoaXBJRCkge1xuICAgICAgICByZXN1bHQucHVzaChbeCwgeSAtIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tGbGVldFN1bmsoKSB7XG4gIC8vIExvb3BzIHRocm91Z2ggdGhpcy5zaGlwQXJyYXksIGNoZWNraW5nIGVhY2ggc2hpcHMgLnN1bmsgcHJvcGVydHkuIElmXG4gIC8vIGFueSB1bnN1bmsgc2hpcCBpcyBmb3VuZCwgcmV0dXJucyBmYWxzZSAtIG90aGVyd2lzZSwgcmV0dXJucyB0cnVlLlxuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBBcnJheVtpXTtcbiAgICBpZiAoIXNoaXAuc3Vuaykge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuZnVuY3Rpb24gZ2V0U2hpcChJRCkge1xuICAvLyBMb29wcyB0aHJvdWdoIHRoaXMuc2hpcEFycmF5LCBjaGVja2luZyBmb3IgYW5kIHJldHVybmluZyB0aGVcbiAgLy8gb2JqZWN0IHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgSUQuXG4gIGNvbnN0IGFycmF5ID0gdGhpcy5zaGlwQXJyYXk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwID0gYXJyYXlbaV07XG4gICAgaWYgKHNoaXAuc2hpcElEID09PSBJRCkge1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XG4gIC8vIHdlIGxvb2sgdXAgdGhlIGdpdmVuIHNxdWFyZS4gaWYgdGhlcmUgaXMgYW4gb2NjdXBhbnQsIHdlIGdldCB0aGUgc2hpcCdzXG4gIC8vIG9iamVjdCB1c2luZyBnZXRTaGlwKCkgYW5kIGNhbGwgaXRzIGhpdCgpIG1ldGhvZFxuICBjb25zdCB4ID0gY29vcmRzWzBdO1xuICBjb25zdCB5ID0gY29vcmRzWzFdO1xuICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllclR5cGU7XG5cbiAgaWYgKCF0aGlzLmNoZWNrSWZTcXVhcmVFeGlzdHMoeCwgeSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5ib2FyZFt4XVt5XS5oaXQgPT09IHRydWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5nZXRTaGlwKHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQpO1xuICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0ID0gdHJ1ZTtcbiAgICBjb25zdCBzdGF0dXMgPSBzaGlwLmhpdCgpO1xuICAgIGxldCBjaGVja0ZsZWV0O1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoZWNrUGxheWVyRmxlZXRTdW5rID0gY2hlY2tGbGVldFN1bmsuYmluZChwbGF5ZXJCb2FyZCk7XG4gICAgICBjaGVja0ZsZWV0ID0gY2hlY2tQbGF5ZXJGbGVldFN1bmsoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hlY2tDcHVGbGVldFN1bmsgPSBjaGVja0ZsZWV0U3Vuay5iaW5kKGNwdUJvYXJkKTtcbiAgICAgIGNoZWNrRmxlZXQgPSBjaGVja0NwdUZsZWV0U3VuaygpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tGbGVldCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIFwiZ2FtZU92ZXJcIjtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJzdW5rXCIpIHtcbiAgICAgIHJldHVybiBcInN1bmtcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiaGl0XCI7XG4gIH1cbiAgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuICByZXR1cm4gXCJtaXNzXCI7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yT2NjdXBhbnRzKHgsIHksIGhvcml6VmVydCwgbGVuZ3RoKSB7XG4gIGlmIChob3JpelZlcnQgPT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICBpZiAoZWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuICAgICAgaWYgKGVsZW1lbnQub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlU2hpcChJRCkge1xuICAvLyBsb29wcyB0aHJvdWdoIHRoaXMuc2hpcEFycmF5LiB1cG9uIGZpbmRpbmcgc2hpcCB3aXRoIHRoZSBnaXZlbiBJRCxcbiAgLy8gZGVsZXRlcyBpdFxuXG4gIC8vIHB1YlN1Yi5wdWIoXCJkZWNyZW1lbnRQbGFjZWRDb3VudFwiLCAxKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzLnNoaXBBcnJheVtpXS5zaGlwSUQgPT09IElEKSB7XG4gICAgICB0aGlzLnNoaXBBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXBpblN0b3JhZ2Uoc2hpcERhdGEpIHtcbiAgY29uc3Qgc2hpcElEID0gdGhpcy5ib2FyZFtzaGlwRGF0YVswXV1bc2hpcERhdGFbMV1dLm9jY3VwYW50O1xuXG4gIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAoc2hpcElEKTtcblxuICBjb25zdCB4ID0gTnVtYmVyKHNoaXBEYXRhWzBdKTtcbiAgY29uc3QgeSA9IE51bWJlcihzaGlwRGF0YVsxXSk7XG4gIGxldCBkaXIgPSBOdW1iZXIoc2hpcERhdGFbMl0pO1xuICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2hpcERhdGFbM10pO1xuXG5cbiAgLy8gaWYgdGhlcmUgaXMgYSBzaGlwLCByZW1vdmUgaXQgZnJvbSB0aGUgYm9hcmRcbiAgaWYgKHNoaXAgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZGVsZXRlU2hpcChzaGlwSUQpO1xuXG4gICAgaWYgKGRpciA9PT0gMCkge1xuICAgICAgLy8gaWYgdGhlIHNoaXAgaXMgaG9yaXpvbnRhbCwgY2xlYXIgdGhlIGJvYXJkIG9mIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgICAgY29uc29sZS5sb2coJ3NoaXAgaXMgaG9yaXpvbnRhbCEnKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHhFbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG5cbiAgICAgICAgeEVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayB0aGF0IHRoZSBzcXVhcmVzIHdlIHdpbGwgcGxhY2UgdGhlIHNoaXAgaW4gYXJlIG5vdCBvY2N1cGllZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHlFbGVtZW50ID0gdGhpcy5ib2FyZFt4XVt5IC0gaV07XG4gICAgICAgIGlmICh5RWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBoYXZpbmcgcmVtb3ZlZCB0aGUgc2hpcCwgcGxhY2UgaXQgd2l0aCB0aGUgbmV3IGRpcmVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbHNlIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgICBjb25zb2xlLmxvZygnc2hpcCBpcyB2ZXJ0aWNhbCEnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuXG4gICAgICAgIHlFbGVtZW50Lm9jY3VwYW50ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgc3F1YXJlcyB3ZSB3aWxsIHBsYWNlIHRoZSBzaGlwIGluIGFyZSBub3Qgb2NjdXBpZWRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoIXRoaXMuYm9hcmRbeCArIGldKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHhFbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICAgIGlmICh4RWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLy8gZmxpcCB0aGUgZGlyZWN0aW9uXG4gIGlmIChkaXIgPT09IDApIHsgZGlyID0gMTsgfSBlbHNlIHsgZGlyID0gMDsgfTtcblxuICAvLyBoYXZpbmcgcmVtb3ZlZCB0aGUgc2hpcCwgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgZGlyZWN0aW9uIGFuZCByZXR1cm4gcmVzdWx0XG4gIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBkaXIsIGxlbmd0aCwgc2hpcElEKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW92ZVNoaXBJblN0b3JhZ2UoeCwgeSwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcblxuICAgIC8vIGZpbmQgdGhlIHNoaXAgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzIGFuZCBnZXQgaXRzIGRpcmVjdGlvblxuICBjb25zdCBzaGlwSUQgPSB0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50O1xuICBjb25zdCBzaGlwID0gdGhpcy5nZXRTaGlwKHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQpO1xuXG4gIGlmIChzaGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBzaGlwIGF0IHRoZXNlIGNvb3JkcywgaXQncyBiZWNhdXNlIHRoZXJlIHdhcyBhbiBpbnZhbGlkXG4gICAgLy8gc2hpcCBwbGFjZW1lbnQuIFRoZXJlcmVmb3JlLCB0aGVyZSBpcyBubyBzaGlwIHRvIGRlbGV0ZS4gU28sIHJldHVybi5cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGlyID0gc2hpcC5kaXJlY3Rpb247XG5cbiAgLy8gZGVsZXRlIHRoZSBzaGlwIGZyb20gc2hpcEFycmF5XG4gIHRoaXMuZGVsZXRlU2hpcChzaGlwSUQpO1xuXG4gIC8vIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcFxuICBpZiAoZGlyID09PSAwKSB7XG4gICAgLy8gaWYgdGhlIHNoaXAgaXMgaG9yaXpvbnRhbCwgY2xlYXIgdGhlIGJvYXJkIG9mIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHhFbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICB4RWxlbWVudC5vY2N1cGFudCA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGVsc2UgY2xlYXIgdGhlIGJvYXJkIG9mIHRoZSBzaGlwIHZlcnRpY2FsbHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuICAgICAgeUVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBidWlsZEJvYXJkLFxuICBwbGFjZVNoaXBPbkJvYXJkLFxuICBjaGVja0ZsZWV0U3VuayxcbiAgZ2V0U2hpcCxcbiAgcmVjZWl2ZUF0dGFjayxcbiAgY2hlY2tGb3JPY2N1cGFudHMsXG4gIGRlbGV0ZVNoaXAsXG4gIG1vdmVTaGlwSW5TdG9yYWdlLFxuICBjaGVja0lmU3F1YXJlRXhpc3RzLFxuICBjaGVja0lmU3F1YXJlSXNIaXQsXG4gIHBsYXllckJvYXJkLFxuICBjcHVCb2FyZCxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5pbXBvcnQgeyBjb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4vY29tcG9uZW50RmFjdG9yeVwiO1xuaW1wb3J0IHsgZGlzcGxheU9iamVjdHMsIHNoaXBzIH0gZnJvbSBcIi4vZGlzcGxheU9iamVjdHNcIjtcbmltcG9ydCBDcnVpc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvQ3J1aXNlci5wbmdcIjtcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuLi9yZXNvdXJjZXMvQmF0dGxlc2hpcC5wbmdcIjtcbmltcG9ydCBEZXN0cm95ZXIgZnJvbSBcIi4uL3Jlc291cmNlcy9EZXN0cm95ZXIucG5nXCI7XG5pbXBvcnQgRnJpZ2F0ZSBmcm9tIFwiLi4vcmVzb3VyY2VzL0ZyaWdhdGUucG5nXCI7XG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gXCIuLi9yZXNvdXJjZXMvZXhwbG9zaW9uLm1wM1wiO1xuaW1wb3J0IExhc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvbGFzZXIubXAzXCI7XG5pbXBvcnQgTXVzaWMgZnJvbSBcIi4uL3Jlc291cmNlcy9tdXNpYy5tcDNcIjtcbmltcG9ydCBTdW5rIGZyb20gXCIuLi9yZXNvdXJjZXMvc3Vuay5tcDNcIjtcbmltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YlN1YlwiO1xuXG5jbGFzcyBJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5O1xuICAgIHRoaXMuYnVpbGRHcmlkID0gYnVpbGRHcmlkO1xuICAgIHRoaXMuYnVpbGRTaGlwcyA9IGJ1aWxkU2hpcHM7XG4gICAgdGhpcy5yb3RhdGVTaGlwID0gcm90YXRlU2hpcDtcbiAgICB0aGlzLmNwdUF0dGFjayA9IGNwdUF0dGFjaztcbiAgICB0aGlzLnJlbW92ZUF0dGFja0xpc3RlbmVycyA9IHJlbW92ZUF0dGFja0xpc3RlbmVycztcbiAgICB0aGlzLmF0dGFjayA9IGF0dGFjaztcbiAgICB0aGlzLmFkZEF0dGFja0xpc3RlbmVycyA9IGFkZEF0dGFja0xpc3RlbmVycztcbiAgICB0aGlzLm1hcmtTcXVhcmVIaXQgPSBtYXJrU3F1YXJlSGl0O1xuICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lO1xuICAgIHRoaXMuZHJvcCA9IGRyb3A7XG4gICAgdGhpcy5hZGREcmFnTGlzdGVuZXJzID0gYWRkRHJhZ0xpc3RlbmVycztcbiAgICB0aGlzLmFsbG93RHJvcCA9IGFsbG93RHJvcDtcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlID0gYnVpbGRJbnRlcmZhY2U7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSBbXTtcbiAgICB0aGlzLmdhbWVOb3RzID0gW107XG4gICAgdGhpcy51cGRhdGVOb3RzRGlzcGxheSA9IHVwZGF0ZU5vdHNEaXNwbGF5O1xuICAgIHRoaXMubWFya1NxdWFyZSA9IG1hcmtTcXVhcmU7XG4gIH1cblxuICBhZGROb3RpZihub3RpZiwgcGxheWVyKSB7XG4gICAgY29uc3Qgbm90aWZXaXRoVGltZXN0YW1wID0gYCR7Z2V0VGltZSgpfTogJHtub3RpZn1gO1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIGlmICh0aGlzLmluc3RydWN0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluc3RydWN0aW9ucy5wdXNoKG5vdGlmV2l0aFRpbWVzdGFtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdhbWVOb3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy5nYW1lTm90cy5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5nYW1lTm90cy5wdXNoKG5vdGlmV2l0aFRpbWVzdGFtcCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTm90c0Rpc3BsYXkoKTtcbiAgfVxufVxuXG5jb25zdCBpZmFjZSA9IG5ldyBJbnRlcmZhY2UoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkR3JpZChwbGF5ZXIpIHtcbiAgbGV0IHNxTnVtID0gMDtcbiAgZm9yIChsZXQgaSA9IDk7IGkgPiAtMTsgaSAtPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBuZXdTcXVhcmUgPSBkaXNwbGF5T2JqZWN0c1tkaXNwbGF5T2JqZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgIG5ld1NxdWFyZS54eSA9IFtqLCBpLCBzcU51bSwgcGxheWVyXTtcbiAgICAgIHNxTnVtICs9IDE7XG4gICAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzczIgPSBcInBsYXllci1ncmlkLXNxdWFyZVwiO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MzID0gYHBsYXllci1ncmlkLXNxdWFyZS0ke2p9LSR7aX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMiA9IFwiY3B1LWdyaWQtc3F1YXJlXCI7XG4gICAgICAgIG5ld1NxdWFyZS5wYXJlbnQgPSBcIi5jcHUtYm9hcmRcIjtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMyA9IGBjcHUtZ3JpZC1zcXVhcmUtJHtqfS0ke2l9YDtcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudEZhY3RvcnkobmV3U3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2hpcHMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNoaXBzW2ldO1xuXG4gICAgY29tcG9uZW50RmFjdG9yeShlbGVtZW50KTtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBcIkJhdHRsZXNoaXBcIjpcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5jbGFzczF9YCkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz0ke0JhdHRsZXNoaXB9IGFsdD0ke2VsZW1lbnQubmFtZX0gZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZHJhZ2dhYmxlXCIgaWQ9XCJCYXR0bGVzaGlwXCIgZGF0YS1sZW5ndGg9XCI2XCIgZGF0YS1kaXJlY3Rpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJDcnVpc2VyXCI6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MxfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtDcnVpc2VyfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiQ3J1aXNlclwiICBkYXRhLWxlbmd0aD1cIjRcIiBkYXRhLWRpcmVjdGlvbj1cIjBcIj5gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkRlc3Ryb3llclwiOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMX1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7RGVzdHJveWVyfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiRGVzdHJveWVyXCIgIGRhdGEtbGVuZ3RoPVwiM1wiIGRhdGEtZGlyZWN0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMX1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7RnJpZ2F0ZX0gYWx0PSR7ZWxlbWVudC5uYW1lfSBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3M9XCJkcmFnZ2FibGVcIiBpZD1cIkZyaWdhdGVcIiAgZGF0YS1sZW5ndGg9XCIyXCIgZGF0YS1kaXJlY3Rpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVTaGlwKGUpIHtcbiAgY29uc3QgeHkgPSBbXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LngsXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnksXG4gICAgZS50YXJnZXQuZGF0YXNldC5kaXJlY3Rpb24sXG4gICAgZS50YXJnZXQuZGF0YXNldC5sZW5ndGgsXG4gIF07XG4gIGNvbnN0IHNoaXAgPSBlLnRhcmdldDtcblxuICBwdWJTdWIucHViKFwicm90YXRlU2hpcFwiLCB4eSk7XG5cbiAgc3dpdGNoIChOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5sZW5ndGgpKSB7XG4gICAgY2FzZSA2OlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcC1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImJhdHRsZXNoaXAtcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSA0OlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiY3J1aXNlci1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImNydWlzZXItcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzdHJveWVyLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJmcmlnYXRlLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiZnJpZ2F0ZS1yb3RhdGVkXCIpO1xuICAgICAgfVxuICB9XG59XG5cbmxldCBkcmFnU3RvcmFnZSA9IFwidGVzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhZyhlKSB7XG4gIGRyYWdTdG9yYWdlID0gZS50YXJnZXQ7XG5cbiAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxhY2VtZW50LWdyaWQtc3F1YXJlXCIpKSB7XG4gICAgY29uc3QgeCA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueCk7XG4gICAgY29uc3QgeSA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueSk7XG4gICAgY29uc3QgcmVzdWx0ID0gW1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5kaXJlY3Rpb24pLFxuICAgICAgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKSxcbiAgICBdO1xuICAgIHB1YlN1Yi5wdWIoXCJtb3ZlU2hpcFwiLCByZXN1bHQpO1xuICB9XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpbWdcIiwgZS50YXJnZXQuaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJpbWdcIik7XG5cbiAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSkpO1xuXG4gIHB1YlN1Yi5wdWIoXCJwbGFjZVNoaXBcIiwgW1xuICAgIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpLFxuICAgIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpLFxuICAgIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0LmRpcmVjdGlvbiksXG4gICAgTnVtYmVyKGRyYWdTdG9yYWdlLmRhdGFzZXQubGVuZ3RoKSxcbiAgXSk7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihgIyR7ZHJhZ1N0b3JhZ2UuaWR9YClcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZVNoaXApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEcm9wKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5jb25zdCBiaW5kQWRkQXR0YWNrTGlzdGVuZXJzID0gaWZhY2UuYWRkQXR0YWNrTGlzdGVuZXJzLmJpbmQoaWZhY2UpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAvLyBjbGVhciB0aGUgbm90aWZpY2F0aW9uIGFyZWFcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1sZWZ0XCIpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gdGVsbCB0aGUgY29udHJvbGxlciB0byBzdGFydCB0aGUgZ2FtZVxuICBwdWJTdWIucHViKFwiZ2FtZVN0YXJ0XCIsIFwidHJ1ZVwiKTtcblxuICAvLyByZW1vdmUgc2hpcC1yb3RhdGlvbiBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYWdnYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZHJhZ2dhYmxlc1tpXTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZyk7XG4gIH1cblxuICAvLyByZW1vdmUgZHJvcCBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhY2VtZW50LWdyaWQtc3F1YXJlXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzcXVhcmVzW2ldO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcCk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgYWxsb3dEcm9wKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBzdGFydCBidXR0b25cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIikucmVtb3ZlKCk7XG5cbiAgLy8gYWRkIHRoZSBhdHRhY2sgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBjcHUgYm9hcmRcbiAgYmluZEFkZEF0dGFja0xpc3RlbmVycygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcHNQbGFjZWQoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIik7XG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmLWxlZnRcIikuaW5uZXJIVE1MID1cbiAgICBcIlNoaXBzIHBsYWNlZCEgQ2xpY2sgc3RhcnQgdG8gYmVnaW4hXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcHVBdHRhY2soKSB7XG4gIGxldCBzdWNjZXNzZnVsQXR0YWNrID0gZmFsc2U7XG4gIHdoaWxlICghc3VjY2Vzc2Z1bEF0dGFjaykge1xuICAgIGNvbnN0IHRoaXNBdHRhY2sgPSBjb250cm9sbGVyLmNwdS5hdHRhY2soKTtcbiAgICBpZiAodGhpc0F0dGFjaykge1xuICAgICAgc3VjY2Vzc2Z1bEF0dGFjayA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFjayhlKSB7XG4gIGNvbnN0IHggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcbiAgY29uc3QgeSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuICBwdWJTdWIucHViKFwicGxheWVyc01vdmVcIiwgW3gsIHldKTtcbn1cblxuY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuY29uc3QgeyBzaWduYWwgfSA9IGFib3J0Q29udHJvbGxlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEF0dGFja0xpc3RlbmVycygpIHtcbiAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdS1ncmlkLXNxdWFyZVwiKTtcbiAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2ssIHsgc2lnbmFsLCBvbmNlOiB0cnVlIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUF0dGFja0xpc3RlbmVycygpIHtcbiAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW5rKGlzUGxheWVyQm9hcmQpIHtcbiAgcGxheVNvdW5kKDMpO1xuICBpZiAoIWlzUGxheWVyQm9hcmQpIHtcbiAgICBhZGROb3RpZihcIlRoZSBjb21wdXRlciBzdW5rIHlvdXIgc2hpcCFcIiwgMik7XG4gIH0gZWxzZSB7XG4gICAgYWRkTm90aWYoXCJZb3Ugc3VuayBhbiBlbmVteSBzaGlwIVwiLCAyKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm90c0Rpc3BsYXkoKSB7XG4gIC8vIHNlbGVjdCBhbmQgY2xlYXIgYm90aCB0aGUgaHVtYW4gYW5kIGNwdSBub3RpZmljYXRpb24gZGlzcGxheXNcblxuICBjb25zdCBsZWZ0Tm90aWZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1sZWZ0XCIpO1xuICBsZWZ0Tm90aWZzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgcmlnaHROb3RpZnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmLXJpZ2h0XCIpO1xuICByaWdodE5vdGlmcy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIC8vIGluaXRpYWxpemUgdHdvIHN0cmluZ3MgdG8gaG9sZCB0aGUgaHRtbCBmb3IgdGhlIG5vdGlmaWNhdGlvbnNcbiAgbGV0IGxlZnRSZXN1bHQgPSBcIlwiO1xuICBsZXQgcmlnaHRSZXN1bHQgPSBcIlwiO1xuXG4gIC8vIGdldCB0aGUgbm90aWZpY2F0aW9uIGFycmF5c1xuICBjb25zdCB7IGluc3RydWN0aW9ucywgZ2FtZU5vdHMgfSA9IHRoaXM7XG5cbiAgLy8gYXNzZW1ibGUgdGhlIGh0bWwgZm9yIHRoZSBub3RpZmljYXRpb25zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdHJ1Y3Rpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbGVmdFJlc3VsdCArPSBgPGgzIGNsYXNzPVwibm90aWYgaW5zdHJ1Y3Rpb25cIj4ke2luc3RydWN0aW9uc1tpXX08L2gzPmA7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTm90cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHJpZ2h0UmVzdWx0ICs9IGA8aDMgY2xhc3M9XCJub3RpZiBjcHUtbm90aWZcIj4ke2dhbWVOb3RzW2ldfTwvaDM+YDtcbiAgfVxuXG4gIC8vIHdyaXRlIHRoZSBodG1sIHRvIHRoZSBub3RpZmljYXRpb24gZGlzcGxheXNcbiAgbGVmdE5vdGlmcy5pbm5lckhUTUwgPSBsZWZ0UmVzdWx0O1xuICByaWdodE5vdGlmcy5pbm5lckhUTUwgPSByaWdodFJlc3VsdDtcbn1cblxuY29uc3QgZXhwbG9zaW9uID0gbmV3IEF1ZGlvKEV4cGxvc2lvbik7XG5jb25zdCBsYXNlciA9IG5ldyBBdWRpbyhMYXNlcik7XG5jb25zdCBzaGlwU3VuayA9IG5ldyBBdWRpbyhTdW5rKTtcblxuZnVuY3Rpb24gcGxheVNvdW5kKHNvdW5kKSB7XG4gIGlmIChzb3VuZCA9PT0gMSkge1xuICAgIGV4cGxvc2lvbi5wbGF5KCk7XG4gIH0gZWxzZSBpZiAoc291bmQgPT09IDIpIHtcbiAgICBsYXNlci5wbGF5KCk7XG4gIH0gZWxzZSB7XG4gICAgc2hpcFN1bmsucGxheSgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrU3F1YXJlSGl0KGFycmF5KSB7XG4gIGxldCBzcXVhcmU7XG4gIGNvbnN0IHggPSBhcnJheVswXTtcbiAgY29uc3QgeSA9IGFycmF5WzFdO1xuICBjb25zdCBpc09jY3VwaWVkID0gYXJyYXlbMl07XG4gIGNvbnN0IGlzUGxheWVyQm9hcmQgPSBhcnJheVszXTtcblxuICBpZiAoIWFycmF5WzRdKSB7XG4gICAgaWYgKGlzUGxheWVyQm9hcmQpIHtcbiAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItZ3JpZC1zcXVhcmUtJHt4fS0ke3l9YCk7XG5cbiAgICAgIGlmIChpc09jY3VwaWVkKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LW9jY3VwaWVkXCIpO1xuICAgICAgICBhZGROb3RpZihcIlRoZSBjb21wdXRlciBoaXQgeW91ciBzaGlwIVwiLCAyKTtcbiAgICAgICAgcGxheVNvdW5kKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXQtZW1wdHlcIik7XG4gICAgICAgIGFkZE5vdGlmKFwiVGhlIGNvbXB1dGVyIGhpdCBhbiBlbXB0eSBzcXVhcmUhXCIsIDIpO1xuICAgICAgICBwbGF5U291bmQoMik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jcHUtZ3JpZC1zcXVhcmUtJHt4fS0ke3l9YCk7XG5cbiAgICAgIGlmIChpc09jY3VwaWVkKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LW9jY3VwaWVkXCIpO1xuICAgICAgICBhZGROb3RpZihcIllvdSBoaXQgYW4gZW5lbXkgc2hpcCFcIiwgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1lbXB0eVwiKTtcbiAgICAgICAgYWRkTm90aWYoXCJZb3UgaGl0IGFuIGVtcHR5IHNxdWFyZSFcIiwgMik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkTW92ZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYWxlcnRcIikudGV4dENvbnRlbnQgPVxuICAgIFwiWW91IHRyaWVkIHRvIGF0dGFjayBhbiBpbnZhbGlkIHNxdWFyZSFcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVPdmVyKG1lc3NhZ2UpIHtcbiAgYmluZFJlbW92ZUF0dGFja0xpc3RlbmVycygpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmLWxlZnRcIikuaW5uZXJIVE1MID1cbiAgICAnPGgyIGNsYXNzPVwibm90aWYgaW5zdHJ1Y3Rpb25cIj5HYW1lIE92ZXIhIENsaWNrIHJlZnJlc2ggdG8gcGxheSBhZ2Fpbi48L2gyPic7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubm90aWYtcmlnaHRcIlxuICApLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJub3RpZiBpbnN0cnVjdGlvblwiPiR7bWVzc2FnZX08L2gyPmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF5ZXJNb3ZlKCkge1xuICBhZGROb3RpZihcIllvdXIgbW92ZSEgUGxlYXNlIGF0dGFjayBhbiBlbmVteSBzcXVhcmUgYnkgY2xpY2tpbmcuXCIsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRHJhZ0xpc3RlbmVycygpIHtcbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ2dhYmxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkcmFnZ2FibGVzW2ldO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWcpO1xuICB9XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYWNlbWVudC1ncmlkLXNxdWFyZVwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gc3F1YXJlc1tpXTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3ApO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGFsbG93RHJvcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2hpcFBsYWNlbWVudCgpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIilcbiAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1aWxkU2hpcFBsYWNlbWVudCk7XG4gIGFkZERyYWdMaXN0ZW5lcnMoKTtcblxuICAvLyBTZW5kcyB0aGUgcGxheWVyIGEgbWVzc2FnZSB0byBwbGFjZSBzaGlwc1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmLWxlZnRcIikuaW5uZXJIVE1MID1cbiAgICAnPGgyIGNsYXNzPVwibm90aWYgaHVtYW4tbm90aWZcIj5EcmFnIGFuZCBkcm9wIHRvIHBsYWNlIHlvdXIgc2hpcHMhIENsaWNrIGl0cyBsZWZ0IHNxdWFyZSB0byByb3RhdGUgYSBwbGFjZWQgc2hpcC48L2gyPic7XG5cbiAgLy8gUGxheXMgdGhlIG11c2ljXG4gIGNvbnN0IG11c2ljID0gbmV3IEF1ZGlvKE11c2ljKTtcbiAgbXVzaWMucGxheSgpO1xufVxuXG4vLyBHZXQgdGhlIERPTSBub2RlcycgaW5mbyBmb3IgdGhlIGZpcnN0IHNjcmVlbiBmcm9tIGRpc3BsYXlPYmplY3RzXG4vLyBhbmQgZHJhd3MgdGhlbVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRJbnRlcmZhY2UoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheU9iamVjdHMubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRpc3BsYXlPYmplY3RzW2ldO1xuICAgIGNvbXBvbmVudEZhY3RvcnkoZWxlbWVudCk7XG4gIH1cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1aWxkU2hpcFBsYWNlbWVudCk7XG4gIGJ1aWxkR3JpZCgxKTtcbiAgYnVpbGRHcmlkKDIpO1xuICBidWlsZFNoaXBzKCk7XG5cbiAgLy8gYWRkIHdlbGNvbWUgbWVzc2FnZSB0byB0aGUgbm90aWZpY2F0aW9uIGFyZWFcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmLWxlZnRcIikuaW5uZXJIVE1MID1cbiAgICAnPGgyIGNsYXNzPVwibm90aWYgbm90aWYtaHVtYW5cIj5XZWxjb21lIHRvIEJhdHRsZXNoaXAhIENsaWNrIFN0YXJ0IHRvIHBsYWNlIHlvdXIgc2hpcHMhPC9oMj4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICBpZiAobWludXRlcyA9PT0gXCIwXCIpIHtcbiAgICBtaW51dGVzID0gXCIwMFwiO1xuICB9XG4gIGNvbnN0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuXG5jb25zdCBhZGROb3RpZiA9IGlmYWNlLmFkZE5vdGlmLmJpbmQoaWZhY2UpO1xuXG5jb25zdCBiaW5kUmVtb3ZlQXR0YWNrTGlzdGVuZXJzID0gaWZhY2UucmVtb3ZlQXR0YWNrTGlzdGVuZXJzLmJpbmQoaWZhY2UpO1xuXG5mdW5jdGlvbiBtYXJrU3F1YXJlKHNxdWFyZSkge1xuICBjb25zdCBtYXJrID0gaWZhY2UubWFya1NxdWFyZUhpdC5iaW5kKGlmYWNlKTtcbiAgbWFyayhzcXVhcmUpO1xufVxuXG5leHBvcnQgeyBpZmFjZSB9O1xuIiwiaW1wb3J0IHsgcGxheWVyQm9hcmQsIGNwdUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkRmFjdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgaW5uZXJQbGF5ZXJGYWN0b3J5ID0gKHR5cGUpID0+IHtcbiAgICBsZXQgYm9hcmQ7XG4gICAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICAgIGJvYXJkID0gcGxheWVyQm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkID0gY3B1Qm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHBsYXllclR5cGUgPSB0eXBlO1xuXG4gICAgYm9hcmQucGxheWVyVHlwZSA9IHBsYXllclR5cGU7XG4gICAgcmV0dXJuIHsgcGxheWVyVHlwZSwgYm9hcmQgfTtcbiAgfTtcblxuICBjb25zdCBodW1hbiA9IGlubmVyUGxheWVyRmFjdG9yeSgxKTtcbiAgY29uc3QgY3B1ID0gaW5uZXJQbGF5ZXJGYWN0b3J5KDIpO1xuXG4gIGNvbnN0IHBsYWNlQ1BVU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcFR5cGVzID0gWzYsIDQsIDMsIDJdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgaG9yaXpWZXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBjb25zdCByZXN1bHQgPSBjcHUuYm9hcmQucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBob3JpelZlcnQsIHR5cGUpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGxhY2VTaGlwKHR5cGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzaGlwVHlwZXMuZm9yRWFjaCgoc2hpcFR5cGUpID0+IHtcbiAgICAgIHBsYWNlU2hpcChzaGlwVHlwZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcGxhY2VDUFVTaGlwcygpO1xuXG4gIGNvbnN0IGNwdUF0dGFjayA9ICgpID0+IHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcblxuICBjb25zdCBodW1hbkF0dGFjayA9ICh4LCB5KSA9PiBjcHUuYm9hcmQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgaHVtYW4uYXR0YWNrID0gaHVtYW5BdHRhY2s7XG4gIGNwdS5hdHRhY2sgPSBjcHVBdHRhY2s7XG5cbiAgcmV0dXJuIHsgaHVtYW4sIGNwdSB9O1xufTtcbiIsImNsYXNzIFRvcGljIHtcbiAgY29uc3RydWN0b3IodG9waWMpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW107XG4gIH1cbn1cblxuY2xhc3MgUHViU3ViIHtcbiAgc3ViKHRvcGljLCBzdWJzY3JpYmVyKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzY3JpYmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBgJHt0eXBlb2Ygc3Vic2NyaWJlcn0gaXMgbm90IGEgdmFsaWQgYXJndW1lbnQgZm9yIHN1YnNjcmliZXJzYDtcbiAgICB9XG4gICAgaWYgKCF0aGlzW3RvcGljXSkge1xuICAgICAgdGhpc1t0b3BpY10gPSBuZXcgVG9waWMoKTtcbiAgICB9XG4gICAgdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIHVuc3ViKHRvcGljLCBzdWJzY3JpYmVyKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzY3JpYmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBgJHt0eXBlb2Ygc3Vic2NyaWJlcn0gaXMgbm90IGEgdmFsaWQgYXJndW1lbnQgZm9yIHVuc3Vic2NyaWJpbmdgO1xuICAgIH1cbiAgICBpZiAodGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuaW5jbHVkZXMoc3Vic2NyaWJlcikpIHtcbiAgICAgIHRoaXNbdG9waWNdLnN1YnNjcmliZXJzID0gdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuZmlsdGVyKFxuICAgICAgICAoc3ViKSA9PiBzdWIgIT09IHN1YnNjcmliZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHViKHRvcGljLCBwYXlsb2FkKSB7XG4gICAgdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3ViKSA9PiBzdWIocGF5bG9hZCkpO1xuICB9XG5cbiAgcmV0dXJuU3Vic2NyaWJlcnModG9waWMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzW3RvcGljXS5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWIpID0+IHJlc3VsdC5wdXNoKHN1YikpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcblxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXG5leHBvcnQgY29uc3Qgc2hpcEZhY3RvcnkgPSAoKCkgPT4ge1xuICBsZXQgc2hpcENvdW50ZXIgPSAtMTtcbiAgY29uc3Qgc2hpcEZhY3RvcnkgPSAoc2hpcFR5cGUpID0+IHtcbiAgICBzaGlwQ291bnRlciArPSAxO1xuICAgIGNvbnN0IHNoaXBJRCA9IHNoaXBDb3VudGVyO1xuICAgIGxldCB0eXBlO1xuICAgIGxldCBsZW5ndGg7XG4gICAgbGV0IGhwO1xuICAgIGNvbnN0IHN1bmsgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHNoaXBUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHR5cGUgPSBcIlNpbmsgdGVzdFwiO1xuICAgICAgICBsZW5ndGggPSA2O1xuICAgICAgICBocCA9IDE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHR5cGUgPSBcIkZyaWdhdGVcIjtcbiAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgaHAgPSAyO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICB0eXBlID0gXCJEZXN0cm95ZXJcIjtcbiAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgaHAgPSAzO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICB0eXBlID0gXCJDcnVpc2VyXCI7XG4gICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgIGhwID0gNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHR5cGUgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgbGVuZ3RoID0gNjtcbiAgICAgICAgaHAgPSA2O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBsZW5ndGgsXG4gICAgICBocCxcbiAgICAgIHN1bmssXG4gICAgICBzaGlwSUQsXG4gICAgICBjaGVja1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgfSxcbiAgICAgIGhpdCgpIHtcbiAgICAgICAgaHAgLT0gMTtcbiAgICAgICAgaWYgKGhwID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gXCJzdW5rXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIHJldHVybiB7IHNoaXBGYWN0b3J5IH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCAqIGFzIG15SW50ZXJmYWNlIGZyb20gXCIuL21vZHVsZXMvaW50ZXJmYWNlXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL21vZHVsZXMvc3R5bGVzLmNzc1wiO1xuXG5teUludGVyZmFjZS5pZmFjZS5idWlsZEludGVyZmFjZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9