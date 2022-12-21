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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/retro.woff2 */ "./src/resources/retro.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* LOAD RETRO FONT */\n\n@font-face {\n  font-family: \"Retro\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* STYLES */\n\nbody {\n  max-width: 1600px;\n  margin: auto;\n  height: 1080px;\n  overflow: hidden;\n  color: #00b140;\n  letter-spacing: 5px;\n  font-weight: bold;\n  filter: drop-shadow(0 0 1px #00b140) contrast(2) brightness(1);\n  text-align: center;\n  background: #141212;\n  font-family: \"Retro\";\n}\n\nmain {\n  margin: auto;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@keyframes scanline {\n  0% {\n    bottom: 100%;\n  }\n  80% {\n    bottom: 100%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n\n.scanline {\n  width: 100%;\n  height: 100px;\n  z-index: 8;\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(255, 255, 255, 0.2) 10%,\n    rgba(0, 0, 0, 0.1) 100%\n  );\n  opacity: 0.1;\n  position: absolute;\n  bottom: 100%;\n  animation: scanline 8s linear infinite;\n}\n\n.notif-area {\n  height: 154px;\n  display: flex;\n  width: 840px;\n  margin-bottom: 28px;\n}\n\n.notif-left,\n.notif-right {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: rgb(10, 117, 33) 5px solid;\n  width: 840px;\n}\n\n.notif {\n  font-size: 14px;\n}\n\n.grid-container {\n  display: flex;\n  gap: 40px;\n  margin-bottom: 18px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid #00b140;\n  position: relative;\n  overflow: visible;\n}\n\n.ship-placement-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 100px;\n\n  width: 400px;\n  height: 120px;\n}\n\n.draggable {\n  max-width: 100vw;\n  filter: drop-shadow(0 0 0.1px #00ff5e) contrast(2) brightness(1);\n  z-index: 999999;\n  position: absolute;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.destroyer-container {\n  margin: -16px 23% 0 17%;\n}\n\n.frigate-container {\n  margin-top: -16px;\n}\n\n.hit-empty {\n  background-color: rgb(50, 116, 54);\n}\n\n.hit-occupied {\n  background-color: rgba(0, 255, 21, 0.815);\n}\n\nh3 {\n  font-size: 0.7rem;\n  margin-bottom: 8px;\n  font-family: \"Retro\", serif;\n  font-weight: normal;\n  font-style: normal;\n}\n\n.button {\n  min-width: 200px;\n  min-height: 50px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #00b140;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 3px;\n  background-color: #141212;\n  color: #00b140;\n  /*margin-bottom: 40px;*/\n  font-size: 30px;\n}\n\n.button:hover {\n  background-color: #00b140;\n  color: #141212;\n  cursor: pointer;\n}\n\n.toggle-sound {\n  font-size: 14px;\n  min-width: 180px;\n  min-height: 30px;\n  margin-bottom: 20px;\n}", "",{"version":3,"sources":["webpack://./src/modules/styles.css"],"names":[],"mappings":"AAAA,oBAAoB;;AAEpB;EACE,oBAAoB;EACpB,4DAAoD;EACpD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,iBAAiB;EACjB,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,iBAAiB;EACjB,8DAA8D;EAC9D,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,WAAW;EACX,aAAa;EACb,UAAU;EACV;;;;;GAKC;EACD,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,sBAAsB;;EAEtB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,gEAAgE;EAChE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["/* LOAD RETRO FONT */\n\n@font-face {\n  font-family: \"Retro\";\n  src: url(\"../resources/retro.woff2\") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* STYLES */\n\nbody {\n  max-width: 1600px;\n  margin: auto;\n  height: 1080px;\n  overflow: hidden;\n  color: #00b140;\n  letter-spacing: 5px;\n  font-weight: bold;\n  filter: drop-shadow(0 0 1px #00b140) contrast(2) brightness(1);\n  text-align: center;\n  background: #141212;\n  font-family: \"Retro\";\n}\n\nmain {\n  margin: auto;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@keyframes scanline {\n  0% {\n    bottom: 100%;\n  }\n  80% {\n    bottom: 100%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n\n.scanline {\n  width: 100%;\n  height: 100px;\n  z-index: 8;\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(255, 255, 255, 0.2) 10%,\n    rgba(0, 0, 0, 0.1) 100%\n  );\n  opacity: 0.1;\n  position: absolute;\n  bottom: 100%;\n  animation: scanline 8s linear infinite;\n}\n\n.notif-area {\n  height: 154px;\n  display: flex;\n  width: 840px;\n  margin-bottom: 28px;\n}\n\n.notif-left,\n.notif-right {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: rgb(10, 117, 33) 5px solid;\n  width: 840px;\n}\n\n.notif {\n  font-size: 14px;\n}\n\n.grid-container {\n  display: flex;\n  gap: 40px;\n  margin-bottom: 18px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid #00b140;\n  position: relative;\n  overflow: visible;\n}\n\n.ship-placement-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 100px;\n\n  width: 400px;\n  height: 120px;\n}\n\n.draggable {\n  max-width: 100vw;\n  filter: drop-shadow(0 0 0.1px #00ff5e) contrast(2) brightness(1);\n  z-index: 999999;\n  position: absolute;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.destroyer-container {\n  margin: -16px 23% 0 17%;\n}\n\n.frigate-container {\n  margin-top: -16px;\n}\n\n.hit-empty {\n  background-color: rgb(50, 116, 54);\n}\n\n.hit-occupied {\n  background-color: rgba(0, 255, 21, 0.815);\n}\n\nh3 {\n  font-size: 0.7rem;\n  margin-bottom: 8px;\n  font-family: \"Retro\", serif;\n  font-weight: normal;\n  font-style: normal;\n}\n\n.button {\n  min-width: 200px;\n  min-height: 50px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #00b140;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 3px;\n  background-color: #141212;\n  color: #00b140;\n  /*margin-bottom: 40px;*/\n  font-size: 30px;\n}\n\n.button:hover {\n  background-color: #00b140;\n  color: #141212;\n  cursor: pointer;\n}\n\n.toggle-sound {\n  font-size: 14px;\n  min-width: 180px;\n  min-height: 30px;\n  margin-bottom: 20px;\n}"],"sourceRoot":""}]);
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
    class2: "button",
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
    this.soundOn = false;
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

  document.querySelector(".toggle-sound").addEventListener("click", () => {
    iface.toggleSound();
  });
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

/***/ "./src/resources/retro.woff2":
/*!***********************************!*\
  !*** ./src/resources/retro.woff2 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9fa906af077ee8704f0.woff2";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFZ0Q7QUFDWDtBQUNIOztBQUVsQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0NBQVU7QUFDaEIsTUFBTTtBQUNOO0FBQ0EsTUFBTSwrQ0FBVTtBQUNoQjtBQUNBLE1BQU0sK0NBQVU7QUFDaEI7O0FBRUE7QUFDQSxNQUFNLCtDQUFVO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtDQUFVLG1CQUFtQixxREFBbUI7QUFDdEQsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLCtDQUFVLGdCQUFnQixtREFBaUI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sK0NBQVU7QUFDaEI7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLCtDQUFVO0FBQ2hCO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTSwrQ0FBVTtBQUNoQjtBQUNBO0FBQ0EsTUFBTSwrQ0FBVTtBQUNoQixNQUFNO0FBQ047QUFDQSxNQUFNLCtDQUFVO0FBQ2hCO0FBQ0EsTUFBTSwrQ0FBVTtBQUNoQixNQUFNO0FBQ04sTUFBTSwrQ0FBVTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUNDO0FBQ1o7O0FBRXZDLG9FQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGVzLmNzcz8xMDgwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlPYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9yZXNvdXJjZXMvcmV0cm8ud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBMT0FEIFJFVFJPIEZPTlQgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmV0cm9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIFJFU0VUIFNUWUxFUyAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4vKiBTVFlMRVMgKi9cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTYwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDgwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICMwMGIxNDA7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxcHggIzAwYjE0MCkgY29udHJhc3QoMikgYnJpZ2h0bmVzcygxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxNDEyMTI7XFxuICBmb250LWZhbWlseTogXFxcIlJldHJvXFxcIjtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbmxpbmUge1xcbiAgMCUge1xcbiAgICBib3R0b206IDEwMCU7XFxuICB9XFxuICA4MCUge1xcbiAgICBib3R0b206IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gIH1cXG59XFxuXFxuLnNjYW5saW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHotaW5kZXg6IDg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDBkZWcsXFxuICAgIHJnYmEoMCwgMCwgMCwgMCkgMCUsXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xKSAxMDAlXFxuICApO1xcbiAgb3BhY2l0eTogMC4xO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgYW5pbWF0aW9uOiBzY2FubGluZSA4cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5ub3RpZi1hcmVhIHtcXG4gIGhlaWdodDogMTU0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDg0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcXG59XFxuXFxuLm5vdGlmLWxlZnQsXFxuLm5vdGlmLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiByZ2IoMTAsIDExNywgMzMpIDVweCBzb2xpZDtcXG4gIHdpZHRoOiA4NDBweDtcXG59XFxuXFxuLm5vdGlmIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4ucGxhY2VtZW50LWdyaWQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jcHUtYm9hcmQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYjE0MDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMTAwcHg7XFxuXFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjFweCAjMDBmZjVlKSBjb250cmFzdCgyKSBicmlnaHRuZXNzKDEpO1xcbiAgei1pbmRleDogOTk5OTk5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1yb3RhdGVkIHtcXG4gIGxlZnQ6IC05OHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNydWlzZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtNTlweDtcXG4gIHRvcDogNjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0zOHB4O1xcbiAgdG9wOiA0MXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZnJpZ2F0ZS1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0xOHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IC0xNnB4IDIzJSAwIDE3JTtcXG59XFxuXFxuLmZyaWdhdGUtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IC0xNnB4O1xcbn1cXG5cXG4uaGl0LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgMTE2LCA1NCk7XFxufVxcblxcbi5oaXQtb2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIxLCAwLjgxNSk7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZXRyb1xcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogIzAwYjE0MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMjEyO1xcbiAgY29sb3I6ICMwMGIxNDA7XFxuICAvKm1hcmdpbi1ib3R0b206IDQwcHg7Ki9cXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMTQwO1xcbiAgY29sb3I6ICMxNDEyMTI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2dnbGUtc291bmQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjs7QUFFcEI7RUFDRSxvQkFBb0I7RUFDcEIsNERBQW9EO0VBQ3BELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUEsaUJBQWlCOztBQUVqQjs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw4REFBOEQ7RUFDOUQsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0VBQ1Y7Ozs7O0dBS0M7RUFDRCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0VBQWdFO0VBQ2hFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIExPQUQgUkVUUk8gRk9OVCAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZXRyb1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vcmVzb3VyY2VzL3JldHJvLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi8qIFNUWUxFUyAqL1xcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwODBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzAwYjE0MDtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDFweCAjMDBiMTQwKSBjb250cmFzdCgyKSBicmlnaHRuZXNzKDEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzE0MTIxMjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmV0cm9cXFwiO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FubGluZSB7XFxuICAwJSB7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3R0b206IDAlO1xcbiAgfVxcbn1cXG5cXG4uc2NhbmxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgei1pbmRleDogODtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMGRlZyxcXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwJSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEpIDEwMCVcXG4gICk7XFxuICBvcGFjaXR5OiAwLjE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwMCU7XFxuICBhbmltYXRpb246IHNjYW5saW5lIDhzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm5vdGlmLWFyZWEge1xcbiAgaGVpZ2h0OiAxNTRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogODQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xcbn1cXG5cXG4ubm90aWYtbGVmdCxcXG4ubm90aWYtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IHJnYigxMCwgMTE3LCAzMykgNXB4IHNvbGlkO1xcbiAgd2lkdGg6IDg0MHB4O1xcbn1cXG5cXG4ubm90aWYge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiMTQwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMDBweDtcXG5cXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMXB4ICMwMGZmNWUpIGNvbnRyYXN0KDIpIGJyaWdodG5lc3MoMSk7XFxuICB6LWluZGV4OiA5OTk5OTk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5iYXR0bGVzaGlwLXJvdGF0ZWQge1xcbiAgbGVmdDogLTk4cHg7XFxuICB0b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY3J1aXNlci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC01OXB4O1xcbiAgdG9wOiA2MnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLXJvdGF0ZWQge1xcbiAgbGVmdDogLTM4cHg7XFxuICB0b3A6IDQxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mcmlnYXRlLXJvdGF0ZWQge1xcbiAgbGVmdDogLTE4cHg7XFxuICB0b3A6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5kZXN0cm95ZXItY29udGFpbmVyIHtcXG4gIG1hcmdpbjogLTE2cHggMjMlIDAgMTclO1xcbn1cXG5cXG4uZnJpZ2F0ZS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogLTE2cHg7XFxufVxcblxcbi5oaXQtZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxMTYsIDU0KTtcXG59XFxuXFxuLmhpdC1vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuODE1KTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBmb250LWZhbWlseTogXFxcIlJldHJvXFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBiMTQwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDEyMTI7XFxuICBjb2xvcjogIzAwYjE0MDtcXG4gIC8qbWFyZ2luLWJvdHRvbTogNDBweDsqL1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIxNDA7XFxuICBjb2xvcjogIzE0MTIxMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZ2dsZS1zb3VuZCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgbm9kZVR5cGUsXG4gICAgcGFyZW50LFxuICAgIHRleHQsXG4gICAgaW5wdXRUeXBlLFxuICAgIHZhbHVlLFxuICAgIGNsYXNzMSxcbiAgICBjbGFzczIsXG4gICAgY2xhc3MzLFxuICAgIHRhc2tJRCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpZCxcbiAgICB4eSxcbiAgICBhbGxvd0Ryb3AsXG4gIH0gPSBlbGVtZW50O1xuICBjb25zdCBjcmVhdGVET01Ob2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XG4gICAgY29uc3QgbmV3RE9NTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICBuZXdET01Ob2RlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfVxuICAgIGlmIChpbnB1dFR5cGUpIHtcbiAgICAgIG5ld0RPTU5vZGUudHlwZSA9IGlucHV0VHlwZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdET01Ob2RlLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmIChjbGFzczEpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczEpO1xuICAgIH1cbiAgICBpZiAoY2xhc3MyKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MyKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMykge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMyk7XG4gICAgfVxuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgbmV3RE9NTm9kZS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RE9NTm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIGlmIChpZCkge1xuICAgICAgbmV3RE9NTm9kZS5pZCA9IGlkO1xuICAgIH1cblxuICAgIGlmICh4eSkge1xuICAgICAgbmV3RE9NTm9kZS5kYXRhc2V0LnggPSB4eVswXTtcbiAgICAgIG5ld0RPTU5vZGUuZGF0YXNldC55ID0geHlbMV07XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQuc3FudW0gPSB4eVsyXTtcbiAgICB9XG4gICAgaWYgKGFsbG93RHJvcCkge1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoXCJvbmRyb3BcIiwgXCJkcm9wKGV2ZW50KVwiKTtcbiAgICAgIG5ld0RPTU5vZGUuc2V0QXR0cmlidXRlKFwib25kcmFnb3ZlclwiLCBcImFsbG93RHJvcChldmVudClcIik7XG4gICAgfVxuICAgIHBhcmVudE5vZGUuYXBwZW5kKG5ld0RPTU5vZGUpO1xuICB9O1xuICBjcmVhdGVET01Ob2RlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIG5vZGVUeXBlLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0LFxuICAgIGlucHV0VHlwZSxcbiAgICB2YWx1ZSxcbiAgICBjbGFzczEsXG4gICAgY2xhc3MyLFxuICAgIHRhc2tJRCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaWZhY2UgZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJTdWJcIjtcblxuY29uc3QgY29pbkZsaXAgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG5cbi8vIEV2ZW50IGVtaXR0ZXIgZm9yIHB1Yi9zdWIgaW1wbGVtZW50YXRpb25cblxuY29uc3QgZ2V0QWRqYWNlbnRTcXVhcmVCeURpcmVjdGlvbiA9ICh4LCB5LCBkaXIpID0+IHtcbiAgc3dpdGNoIChkaXIpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gW3gsIHkgKyAxXTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gW3ggKyAxLCB5XTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gW3gsIHkgLSAxXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFt4IC0gMSwgeV07XG4gIH1cbn07XG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBwdWxscyBpbiBwbGF5ZXJzIGFuZCBib2FyZCBmcm9tIHBsYXllckZhY3RvcnlcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJGYWN0b3J5KCk7XG4gICAgLy8gZmxpcHMgYSBjb2luIHRvIGRldGVybWluZSB3aG8gZ29lcyBmaXJzdFxuICAgIHRoaXMuY3VycmVudFBsYXllciA9IGNvaW5GbGlwKCk7XG4gICAgdGhpcy5zaGlwc1BsYWNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXBQbGFjZWRDb3VudCA9IDA7XG4gICAgdGhpcy5jcHVIaXQgPSBudWxsO1xuICAgIHRoaXMuc2Vjb25kQ3B1SGl0ID0gbnVsbDtcbiAgICB0aGlzLmxhc3RIaXQgPSBudWxsO1xuICAgIHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICBpZiAoY29pbkZsaXAoKSA9PT0gMSkge1xuICAgICAgdGhpcy5nYW1lRmxvdygxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nYW1lRmxvdygyKTtcbiAgICB9XG4gIH1cblxuICBnZXRDUFVNb3ZlKCkge1xuICAgIGxldCBtb3ZlID0gdGhpcy5wbGF5ZXJzLmNwdS5hdHRhY2soKTtcblxuICAgIGlmICh0aGlzLnNlY29uZENwdUhpdCAmJiAhdGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uID0gdGhpcy5nZXRQcm9iYWJsZVNoaXBEaXJlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24pIHtcbiAgICAgIHN3aXRjaCAodGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1vdmUgPSBnZXRBZGphY2VudFNxdWFyZUJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgdGhpcy5sYXN0SGl0WzBdLFxuICAgICAgICAgICAgdGhpcy5sYXN0SGl0WzFdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1vdmUgPSBnZXRBZGphY2VudFNxdWFyZUJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgdGhpcy5sYXN0SGl0WzBdLFxuICAgICAgICAgICAgdGhpcy5sYXN0SGl0WzFdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1vdmUgPSBnZXRBZGphY2VudFNxdWFyZUJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgdGhpcy5sYXN0SGl0WzBdLFxuICAgICAgICAgICAgdGhpcy5sYXN0SGl0WzFdLFxuICAgICAgICAgICAgM1xuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBtb3ZlID0gZ2V0QWRqYWNlbnRTcXVhcmVCeURpcmVjdGlvbihcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdFswXSxcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdFsxXSxcbiAgICAgICAgICAgIDRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNwdUhpdCAmJiAhdGhpcy5zZWNvbmRDcHVIaXQgJiYgIXRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uKSB7XG4gICAgICBtb3ZlID0gdGhpcy5nZXRSYW5kb21BZGphY2VudFNxdWFyZSh0aGlzLmNwdUhpdCk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuXG4gICAgd2hpbGUgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IG5ld0F0dGFjayA9IHRoaXMucGxheWVycy5jcHUuYXR0YWNrKCk7XG5cbiAgICAgIG1vdmUgPSBuZXdBdHRhY2s7XG4gICAgICByZXN1bHQgPSB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQucmVjZWl2ZUF0dGFjayhuZXdBdHRhY2spO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdEFycmF5ID0gW107XG4gICAgcmVzdWx0QXJyYXkucHVzaChtb3ZlWzBdLCBtb3ZlWzFdKTtcbiAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKHRydWUsIHRydWUpO1xuXG4gICAgICBpZiAodGhpcy5jcHVIaXQgJiYgIXRoaXMuc2Vjb25kQ3B1SGl0ICYmICF0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnNlY29uZENwdUhpdCA9IFttb3ZlWzBdLCBtb3ZlWzFdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmNwdUhpdCkge1xuICAgICAgICB0aGlzLmNwdUhpdCA9IFttb3ZlWzBdLCBtb3ZlWzFdXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0SGl0ID0gW21vdmVbMF0sIG1vdmVbMV1dO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAgICAgcmVzdWx0QXJyYXkucHVzaChmYWxzZSwgdHJ1ZSk7XG4gICAgICBpZiAodGhpcy5wcm9iYWJsZVNoaXBEaXJlY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbikge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uID0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLnByb2JhYmxlU2hpcERpcmVjdGlvbiA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RIaXQgPSB0aGlzLmNwdUhpdDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzdW5rXCIpIHtcbiAgICAgIHRoaXMuY3B1SGl0ID0gbnVsbDtcbiAgICAgIHRoaXMuc2Vjb25kQ3B1SGl0ID0gbnVsbDtcbiAgICAgIHRoaXMucHJvYmFibGVTaGlwRGlyZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMubGFzdEhpdCA9IG51bGw7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKHRydWUsIHRydWUpO1xuICAgICAgcHViU3ViLnB1YihcInN1bmtcIiwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImdhbWVPdmVyXCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBwdWJTdWIucHViKFwiZ2FtZU92ZXJcIiwgXCJUaGUgY29tcHV0ZXIgd2lucyFcIik7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJtYXJrU3F1YXJlSGl0XCIsIHJlc3VsdEFycmF5KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgcHViU3ViLnB1YihcIm1hcmtTcXVhcmVIaXRcIiwgcmVzdWx0QXJyYXkpO1xuICAgICAgdGhpcy5nYW1lRmxvdygxKTtcbiAgICB9XG4gIH1cblxuICBnYW1lRmxvdyh3aG9zZVR1cm4pIHtcbiAgICBpZiAodGhpcy5nYW1lT3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2hvc2VUdXJuID09PSAxICYmIHRoaXMuZ2FtZU92ZXIgPT09IGZhbHNlKSB7XG4gICAgICAvLyBwcm9tcHQgcGxheWVyIGZvciBhIG1vdmVcbiAgICAgIHB1YlN1Yi5wdWIoXCJnZXRQbGF5ZXJzTW92ZVwiLCBpZmFjZS5nZXRQbGF5ZXJNb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcHJvbXB0IGNwdSBmb3IgYSBtb3ZlXG4gICAgICBnZXRDUFVNb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVGVzdFNoaXBzKCkge1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAwLCAwLCA2KTtcbiAgICB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMSwgMCwgNCk7XG4gICAgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDIsIDAsIDMpO1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAzLCAwLCAyKTtcbiAgICB0aGlzLnBsYXllcnMuY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDAsIDAsIDYpO1xuICAgIHRoaXMucGxheWVycy5jcHUuYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMSwgMCwgNCk7XG4gICAgdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAyLCAwLCAzKTtcbiAgICB0aGlzLnBsYXllcnMuY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDMsIDAsIDIpO1xuICB9XG5cbiAgZGVjcmVtZW50UGxhY2VkQ291bnQoKSB7XG4gICAgdGhpcy5zaGlwUGxhY2VkQ291bnQgLT0gMTtcbiAgfVxuXG4gIHNoaXBQbGFjZWQoKSB7XG4gICAgdGhpcy5zaGlwUGxhY2VkQ291bnQgKz0gMTtcblxuICAgIGlmICh0aGlzLnNoaXBQbGFjZWRDb3VudCA9PT0gNCkge1xuICAgICAgdGhpcy5zaGlwc1BsYWNlZCA9IHRydWU7XG4gICAgICBwdWJTdWIucHViKFwic2hpcHNQbGFjZWRcIiwgaWZhY2Uuc2hpcHNQbGFjZWQpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXllcnNNb3ZlKG1vdmUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBsYXllcnMuY3B1LmJvYXJkLnJlY2VpdmVBdHRhY2sobW92ZSk7XG5cbiAgICBjb25zdCByZXN1bHRBcnJheSA9IFtdO1xuICAgIHJlc3VsdEFycmF5LnB1c2gobW92ZVswXSwgbW92ZVsxXSk7XG5cbiAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKHRydWUsIGZhbHNlKTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJtYXJrU3F1YXJlSGl0XCIsIHJlc3VsdEFycmF5KTtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKGZhbHNlLCBmYWxzZSk7XG4gICAgICBwdWJTdWIucHViKFwibWFya1NxdWFyZUhpdFwiLCByZXN1bHRBcnJheSk7XG4gICAgICB0aGlzLmdhbWVGbG93KDIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcInN1bmtcIikge1xuICAgICAgcmVzdWx0QXJyYXkucHVzaCh0cnVlLCBmYWxzZSk7XG4gICAgICBwdWJTdWIucHViKFwibWFya1NxdWFyZUhpdFwiLCByZXN1bHRBcnJheSk7XG4gICAgICB0aGlzLmdhbWVGbG93KDIpO1xuICAgICAgLy8gY2hhbmdlIHRoZSBiZWxvdyB0byB1c2UgcHViL3N1YiB0b29cbiAgICAgIHB1YlN1Yi5wdWIoXCJzdW5rXCIsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImdhbWVPdmVyXCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgZmFsc2UsIHRydWUpO1xuICAgICAgcHViU3ViLnB1YihcIm1hcmtTcXVhcmVIaXRcIiwgcmVzdWx0QXJyYXkpO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICBwdWJTdWIucHViKFwiZ2FtZU92ZXJcIiwgXCJZb3Ugd2luXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHB1YlN1Yi5wdWIoXCJpbnZhbGlkXCIpO1xuICAgICAgdGhpcy5nYW1lRmxvdygxKTtcbiAgICB9XG4gIH1cblxuICBnZXRSYW5kb21BZGphY2VudFNxdWFyZShoaXQpIHtcbiAgICBjb25zdCB4ID0gaGl0WzBdO1xuICAgIGNvbnN0IHkgPSBoaXRbMV07XG4gICAgY29uc3QgeyBib2FyZCB9ID0gdGhpcy5wbGF5ZXJzLmh1bWFuO1xuICAgIGNvbnN0IGFkamFjZW50U3F1YXJlcyA9IFtcbiAgICAgIFt4IC0gMSwgeV0sXG4gICAgICBbeCArIDEsIHldLFxuICAgICAgW3gsIHkgLSAxXSxcbiAgICAgIFt4LCB5ICsgMV0sXG4gICAgXTtcbiAgICBjb25zdCB2YWxpZFNxdWFyZXMgPSBbXTtcblxuICAgIGFkamFjZW50U3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGlmIChib2FyZC5jaGVja0lmU3F1YXJlRXhpc3RzKHNxdWFyZVswXSwgc3F1YXJlWzFdKSkge1xuICAgICAgICB2YWxpZFNxdWFyZXMucHVzaChzcXVhcmUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdmFsaWRBdHRhY2tzID0gW107XG4gICAgdmFsaWRTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgaWYgKCFib2FyZC5jaGVja0lmU3F1YXJlSXNIaXQoc3F1YXJlWzBdLCBzcXVhcmVbMV0pKSB7XG4gICAgICAgIHZhbGlkQXR0YWNrcy5wdXNoKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmFsaWRBdHRhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jcHVIaXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBnZXQgYSByYW5kb20gc3F1YXJlIGZyb20gdmFsaWRBdHRhY2tzXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZEF0dGFja3MubGVuZ3RoKTtcbiAgICBjb25zdCByYW5kb21TcXVhcmUgPSB2YWxpZEF0dGFja3NbcmFuZG9tSW5kZXhdO1xuXG4gICAgcmV0dXJuIHJhbmRvbVNxdWFyZTtcbiAgfVxuXG4gIGdldFByb2JhYmxlU2hpcERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyO1xuICAgIGNvbnN0IHgxID0gdGhpcy5jcHVIaXRbMF07XG4gICAgY29uc3QgeTEgPSB0aGlzLmNwdUhpdFsxXTtcbiAgICBjb25zdCB4MiA9IHRoaXMuc2Vjb25kQ3B1SGl0WzBdO1xuICAgIGNvbnN0IHkyID0gdGhpcy5zZWNvbmRDcHVIaXRbMV07XG4gICAgaWYgKHgxID09PSB4Mikge1xuICAgICAgaWYgKHkyID4geTEpIHtcbiAgICAgICAgZGlyID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpciA9IDM7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh4MiA+IHgxKSB7XG4gICAgICBkaXIgPSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXIgPSA0O1xuICAgIH1cblxuICAgIHJldHVybiBkaXI7XG4gIH1cblxuICBwbGFjZUh1bWFuKHNoaXApIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQucGxhY2VTaGlwT25Cb2FyZChcbiAgICAgIHNoaXBbMF0sXG4gICAgICBzaGlwWzFdLFxuICAgICAgTnVtYmVyKHNoaXBbMl0pLFxuICAgICAgc2hpcFszXVxuICAgICk7XG5cbiAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgcGxhY2VkU2hpcChyZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZVNoaXAoc2hpcERhdGEpIHtcbiAgICB0aGlzLmRlY3JlbWVudFBsYWNlZENvdW50KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLnJvdGF0ZVNoaXBpblN0b3JhZ2Uoc2hpcERhdGEpO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2hpcFBsYWNlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVTaGlwKGRldGFpbHMpIHtcbiAgICB0aGlzLmRlY3JlbWVudFBsYWNlZENvdW50KCk7XG4gICAgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLm1vdmVTaGlwSW5TdG9yYWdlKFxuICAgICAgZGV0YWlsc1swXSxcbiAgICAgIGRldGFpbHNbMV0sXG4gICAgICBkZXRhaWxzWzJdLFxuICAgICAgZGV0YWlsc1szXVxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cbmNvbnN0IHBsYWNlZFNoaXAgPSBjb250cm9sbGVyLnNoaXBQbGFjZWQuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IHN0YXJ0R2FtZSA9IGNvbnRyb2xsZXIuc3RhcnRHYW1lLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBwbGF5ZXJzTW92ZSA9IGNvbnRyb2xsZXIucGxheWVyc01vdmUuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IGdldENQVU1vdmUgPSBjb250cm9sbGVyLmdldENQVU1vdmUuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IHBsYWNlSHVtYW5TaGlwID0gY29udHJvbGxlci5wbGFjZUh1bWFuLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCByb3RhdGVTaGlwID0gY29udHJvbGxlci5yb3RhdGVTaGlwLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBtb3ZlU2hpcCA9IGNvbnRyb2xsZXIubW92ZVNoaXAuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IG1hcmtTcXVhcmUgPSBpZmFjZS5tYXJrU3F1YXJlSGl0LmJpbmQoaWZhY2UpO1xuXG5wdWJTdWIuc3ViKFwicGxhY2VTaGlwXCIsIHBsYWNlSHVtYW5TaGlwKTtcbnB1YlN1Yi5zdWIoXCJzaGlwc1BsYWNlZFwiLCBpZmFjZS5zaGlwc1BsYWNlZCk7XG5wdWJTdWIuc3ViKFwiZ2FtZVN0YXJ0XCIsIHN0YXJ0R2FtZSk7XG5wdWJTdWIuc3ViKFwiZ2V0UGxheWVyc01vdmVcIiwgaWZhY2UuZ2V0UGxheWVyTW92ZSk7XG5wdWJTdWIuc3ViKFwicGxheWVyc01vdmVcIiwgcGxheWVyc01vdmUpO1xucHViU3ViLnN1YihcInJvdGF0ZVNoaXBcIiwgcm90YXRlU2hpcCk7XG5wdWJTdWIuc3ViKFwibW92ZVNoaXBcIiwgbW92ZVNoaXApO1xucHViU3ViLnN1YihcImdldFBsYXllck1vdmVcIiwgaWZhY2UuZ2V0UGxheWVyTW92ZSk7XG5wdWJTdWIuc3ViKFwibWFya1NxdWFyZUhpdFwiLCBtYXJrU3F1YXJlKTtcbnB1YlN1Yi5zdWIoXCJzdW5rXCIsIGlmYWNlLnN1bmspO1xucHViU3ViLnN1YihcImdhbWVPdmVyXCIsIGlmYWNlLmdhbWVPdmVyKTtcbnB1YlN1Yi5zdWIoXCJpbnZhbGlkXCIsIGlmYWNlLmludmFsaWRNb3ZlKTtcbnB1YlN1Yi5zdWIoXCJ1cGRhdGVOb3RzXCIsIGlmYWNlLnVwZGF0ZU5vdHMpO1xuXG5wdWJTdWIuc3ViKFxuICBcImRlY3JlbWVudFBsYWNlZENvdW50XCIsXG4gIGNvbnRyb2xsZXIuZGVjcmVtZW50UGxhY2VkQ291bnQuYmluZChjb250cm9sbGVyKVxuKTtcblxuZXhwb3J0IHsgcHViU3ViIH07XG4iLCJleHBvcnQgY29uc3QgZGlzcGxheU9iamVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIm1haW5cIixcbiAgICBub2RlVHlwZTogXCJtYWluXCIsXG4gICAgcGFyZW50OiBcImJvZHlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiYmV6ZWxcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwibWFpblwiLFxuICAgIGNsYXNzMTogXCJiZXplbFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJnYW1lQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5iZXplbFwiLFxuICAgIGNsYXNzMTogXCJnYW1lLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzY2FubGluZVwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZ2FtZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic2NhbmxpbmVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwidGl0bGVDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmdhbWUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInRpdGxlLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJub3RpZkFyZWFcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmdhbWUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcIm5vdGlmLWFyZWFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibm90aWZVcHBlclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIubm90aWYtYXJlYVwiLFxuICAgIGNsYXNzMTogXCJub3RpZi1sZWZ0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIm5vdGlmTG93ZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLm5vdGlmLWFyZWFcIixcbiAgICBjbGFzczE6IFwibm90aWYtcmlnaHRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibWFpblRpdGxlXCIsXG4gICAgbm9kZVR5cGU6IFwiaDFcIixcbiAgICBwYXJlbnQ6IFwiLnRpdGxlLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ0aXRsZVwiLFxuICAgIHRleHQ6IFwiQkFUVExFU0hJUFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJwbGFjZW1lbnRDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmdhbWUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZ3JpZENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJncmlkLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJodW1hbkdyaWRcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmdyaWQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1ncmlkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNwdUJvYXJkXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5ncmlkLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcHUtYm9hcmRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic2hpcFBsYWNlbWVudENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzaGlwLXBsYWNlbWVudC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiYlNoaXBDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLnNoaXAtcGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJic2hpcC1jb250YWluZXJcIixcbiAgICBjbGFzczI6IFwic2hpcC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY3J1aXNlckNvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImNydWlzZXItY29udGFpbmVyXCIsXG4gICAgY2xhc3MyOiBcInNoaXAtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRlc3Ryb3llckNvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImRlc3Ryb3llci1jb250YWluZXJcIixcbiAgICBjbGFzczI6IFwic2hpcC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZnJpZ2F0ZUNvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImZyaWdhdGUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MyOiBcInNoaXAtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInN0YXJ0QnV0dG9uXCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLmdhbWUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInN0YXJ0LWJ1dHRvblwiLFxuICAgIGNsYXNzMjogXCJidXR0b25cIixcbiAgICBpbnB1dFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgdmFsdWU6IFwiU1RBUlRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicGxhY2VtZW50R3JpZFNxdWFyZVwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWdyaWRcIixcbiAgICBjbGFzczE6IFwicGxhY2VtZW50LWdyaWQtc3F1YXJlXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2hpcHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkJhdHRsZXNoaXBcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmJzaGlwLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJiYXR0bGVzaGlwLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDcnVpc2VyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5jcnVpc2VyLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcnVpc2VyLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZXN0cm95ZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmRlc3Ryb3llci1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZGVzdHJveWVyLXBsYWNlbWVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGcmlnYXRlXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5mcmlnYXRlLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJmcmlnYXRlLXBsYWNlbWVudFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG5vdGlmcyA9IFtcbiAge1xuICAgIG5hbWU6IFwibm90aWZIdW1hblwiLFxuICAgIG5vZGVUeXBlOiBcImgzXCIsXG4gICAgcGFyZW50OiBcIi5ub3RpZi1sZWZ0XCIsXG4gICAgY2xhc3MxOiBcIm5vdGlmXCIsXG4gICAgY2xhc3MyOiBcIm5vdGlmLWh1bWFuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIm5vdGlmQ3B1XCIsXG4gICAgbm9kZVR5cGU6IFwiaDNcIixcbiAgICBwYXJlbnQ6IFwiLm5vdGlmLXJpZ2h0XCIsXG4gICAgY2xhc3MxOiBcIm5vdGlmXCIsXG4gICAgY2xhc3MyOiBcIm5vdGlmLWNwdVwiLFxuICB9LFxuXTtcbiIsImltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIGNvbnN0IHRoaXNYID0geCB8fCAwOyAvLyBjb252ZXJ0cyBmYWxzZXkgdmFsdWVzIHRvIDAgKGluIHRoaXMgY2FzZSwgTmFOKVxuICAgIHRoaXMueHkgPSBbdGhpc1gsIHldO1xuICAgIHRoaXMub2NjdXBhbnQgPSBudWxsO1xuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gIH1cblxuICBwbGFjZVNoaXBPblNxdWFyZShzaGlwSUQpIHtcbiAgICBjb25zb2xlLmxvZygncGxhY2luZyBzaGlwIG9uIHNxdWFyZSEgdGhpcyBpcycsIHRoaXMpO1xuICAgIHRoaXMub2NjdXBhbnQgPSBzaGlwSUQ7XG4gIH1cbn1cblxuY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gYnVpbGRCb2FyZCgpO1xuICAgIHRoaXMuc2hpcEFycmF5ID0gW107XG4gICAgdGhpcy5wbGFjZVNoaXBPbkJvYXJkID0gcGxhY2VTaGlwT25Cb2FyZDtcbiAgICB0aGlzLmNoZWNrRm9yT2NjdXBhbnRzID0gY2hlY2tGb3JPY2N1cGFudHM7XG4gICAgdGhpcy5yZWNlaXZlQXR0YWNrID0gcmVjZWl2ZUF0dGFjaztcbiAgICB0aGlzLmdldFNoaXAgPSBnZXRTaGlwO1xuICAgIHRoaXMuY2hlY2tGbGVldFN1bmsgPSBjaGVja0ZsZWV0U3VuaztcbiAgICB0aGlzLnJvdGF0ZVNoaXBpblN0b3JhZ2UgPSByb3RhdGVTaGlwaW5TdG9yYWdlO1xuICAgIHRoaXMuZGVsZXRlU2hpcCA9IGRlbGV0ZVNoaXA7XG4gICAgdGhpcy5tb3ZlU2hpcEluU3RvcmFnZSA9IG1vdmVTaGlwSW5TdG9yYWdlO1xuICAgIHRoaXMuY2hlY2tJZlNxdWFyZUV4aXN0cyA9IGNoZWNrSWZTcXVhcmVFeGlzdHM7XG4gICAgdGhpcy5jaGVja0lmU3F1YXJlSXNIaXQgPSBjaGVja0lmU3F1YXJlSXNIaXQ7XG4gIH1cbn1cblxuY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmQoKTtcbmNvbnN0IGNwdUJvYXJkID0gbmV3IEJvYXJkKCk7XG5cbmZ1bmN0aW9uIGJ1aWxkQm9hcmQoKSB7XG4gIC8vIGJ1aWxkIGEgMmQgYXJyYXkgcmVwcmVzZW50aW5nIGEgMTB4MTAgZ2FtZSBib2FyZFxuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gaTtcbiAgICBjb25zdCB4QXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHkgPSBpbmRleDtcbiAgICAgIGNvbnN0IHNxID0gbmV3IFNxdWFyZSh4LCB5KTtcbiAgICAgIHhBcnJheS5wdXNoKHNxKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaCh4QXJyYXkpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSWZTcXVhcmVJc0hpdCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV0uaGl0O1xufVxuXG5mdW5jdGlvbiBjaGVja0lmU3F1YXJlRXhpc3RzKHgsIHkpIHtcbiAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB7IFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBob3JpelZlcnQsIHNoaXBUeXBlLCBJRCkge1xuICAvLyBtYWtlIGEgbmV3IHNoaXAgYWNjb3JkaW5nIHRvIHNoaXBUeXBlXG4gIGNvbnN0IG5ld1NoaXAgPSBzaGlwRmFjdG9yeS5zaGlwRmFjdG9yeShzaGlwVHlwZSk7XG4gIG5ld1NoaXAuZGlyZWN0aW9uID0gaG9yaXpWZXJ0O1xuICBjb25zdCBuZXdTaGlwTGVuZ3RoID0gbmV3U2hpcC5sZW5ndGg7XG5cbiAgLy8gaWYgdGhpcyB3YXMgYW4gYWxyZWFkeSBleGlzdGluZyBzaGlwLCBnaXZlIGl0IGl0cyBvbGQgSURcbiAgaWYgKElEKSB7XG4gICAgbmV3U2hpcC5zaGlwSUQgPSBJRDtcbiAgfVxuXG4gIC8vIHRoZSBmb2xsb3dpbmcgaWYgc3RhdGVtZW50cyBjaGVjayB0aGF0IHRoaXMgaXMgYSBsZWdhbCBzaGlwIHBsYWNlbWVudFxuICBpZiAoaG9yaXpWZXJ0ID09PSAwKSB7XG4gICAgaWYgKHggKyBuZXdTaGlwTGVuZ3RoID4gMTApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeSAtIG5ld1NoaXBMZW5ndGggPCAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5jaGVja0Zvck9jY3VwYW50cyh4LCB5LCBob3JpelZlcnQsIG5ld1NoaXBMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhpcy5zaGlwQXJyYXkucHVzaChuZXdTaGlwKTtcblxuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAvLyBsb29wIHRocm91Z2ggbmV3U2hpcExlbmd0aCBzcXVhcmVzIGluXG4gIC8vIHRoZSBkaXJlY3Rpb24gaW5kaWNhdGVkIGJ5IGhvcml6VmVydCwgbW9kaWZ5aW5nIHRoZWlyIG9jY3VwYW50XG4gIC8vIGF0dHJpYnV0ZXMgYWNjb3JkaW5nIHRvIG5ld1NoaXAncyBJRFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKG5ld1NoaXAuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAvLyBpLmUuIGlmIHRoaXMgc2hpcCBpcyBwbGFjZWQgaG9yaXpvbnRhbGx5XG4gICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XS5wbGFjZVNoaXBPblNxdWFyZShuZXdTaGlwLnNoaXBJRCk7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0ub2NjdXBhbnQgPT09IG5ld1NoaXAuc2hpcElEKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGUgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseVxuICAgICAgdGhpcy5ib2FyZFt4XVt5IC0gaV0ucGxhY2VTaGlwT25TcXVhcmUobmV3U2hpcC5zaGlwSUQpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSAtIGldLm9jY3VwYW50ID09PSBuZXdTaGlwLnNoaXBJRCkge1xuICAgICAgICByZXN1bHQucHVzaChbeCwgeSAtIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tGbGVldFN1bmsoKSB7XG4gIC8vIExvb3BzIHRocm91Z2ggdGhpcy5zaGlwQXJyYXksIGNoZWNraW5nIGVhY2ggc2hpcHMgLnN1bmsgcHJvcGVydHkuIElmXG4gIC8vIGFueSB1bnN1bmsgc2hpcCBpcyBmb3VuZCwgcmV0dXJucyBmYWxzZSAtIG90aGVyd2lzZSwgcmV0dXJucyB0cnVlLlxuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBBcnJheVtpXTtcbiAgICBpZiAoIXNoaXAuc3Vuaykge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuZnVuY3Rpb24gZ2V0U2hpcChJRCkge1xuICAvLyBMb29wcyB0aHJvdWdoIHRoaXMuc2hpcEFycmF5LCBjaGVja2luZyBmb3IgYW5kIHJldHVybmluZyB0aGVcbiAgLy8gb2JqZWN0IHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgSUQuXG4gIGNvbnN0IGFycmF5ID0gdGhpcy5zaGlwQXJyYXk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwID0gYXJyYXlbaV07XG4gICAgaWYgKHNoaXAuc2hpcElEID09PSBJRCkge1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XG4gIC8vIHdlIGxvb2sgdXAgdGhlIGdpdmVuIHNxdWFyZS4gaWYgdGhlcmUgaXMgYW4gb2NjdXBhbnQsIHdlIGdldCB0aGUgc2hpcCdzXG4gIC8vIG9iamVjdCB1c2luZyBnZXRTaGlwKCkgYW5kIGNhbGwgaXRzIGhpdCgpIG1ldGhvZFxuICBjb25zdCB4ID0gY29vcmRzWzBdO1xuICBjb25zdCB5ID0gY29vcmRzWzFdO1xuICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllclR5cGU7XG5cbiAgaWYgKCF0aGlzLmNoZWNrSWZTcXVhcmVFeGlzdHMoeCwgeSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5ib2FyZFt4XVt5XS5oaXQgPT09IHRydWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5nZXRTaGlwKHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQpO1xuICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0ID0gdHJ1ZTtcbiAgICBjb25zdCBzdGF0dXMgPSBzaGlwLmhpdCgpO1xuICAgIGxldCBjaGVja0ZsZWV0O1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoZWNrUGxheWVyRmxlZXRTdW5rID0gY2hlY2tGbGVldFN1bmsuYmluZChwbGF5ZXJCb2FyZCk7XG4gICAgICBjaGVja0ZsZWV0ID0gY2hlY2tQbGF5ZXJGbGVldFN1bmsoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hlY2tDcHVGbGVldFN1bmsgPSBjaGVja0ZsZWV0U3Vuay5iaW5kKGNwdUJvYXJkKTtcbiAgICAgIGNoZWNrRmxlZXQgPSBjaGVja0NwdUZsZWV0U3VuaygpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tGbGVldCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIFwiZ2FtZU92ZXJcIjtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJzdW5rXCIpIHtcbiAgICAgIHJldHVybiBcInN1bmtcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiaGl0XCI7XG4gIH1cbiAgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuICByZXR1cm4gXCJtaXNzXCI7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yT2NjdXBhbnRzKHgsIHksIGhvcml6VmVydCwgbGVuZ3RoKSB7XG4gIGlmIChob3JpelZlcnQgPT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICBpZiAoZWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuICAgICAgaWYgKGVsZW1lbnQub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlU2hpcChJRCkge1xuICAvLyBsb29wcyB0aHJvdWdoIHRoaXMuc2hpcEFycmF5LiB1cG9uIGZpbmRpbmcgc2hpcCB3aXRoIHRoZSBnaXZlbiBJRCxcbiAgLy8gZGVsZXRlcyBpdFxuXG4gIC8vIHB1YlN1Yi5wdWIoXCJkZWNyZW1lbnRQbGFjZWRDb3VudFwiLCAxKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzLnNoaXBBcnJheVtpXS5zaGlwSUQgPT09IElEKSB7XG4gICAgICB0aGlzLnNoaXBBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXBpblN0b3JhZ2Uoc2hpcERhdGEpIHtcbiAgY29uc3Qgc2hpcElEID0gdGhpcy5ib2FyZFtzaGlwRGF0YVswXV1bc2hpcERhdGFbMV1dLm9jY3VwYW50O1xuXG4gIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAoc2hpcElEKTtcblxuICBjb25zdCB4ID0gTnVtYmVyKHNoaXBEYXRhWzBdKTtcbiAgY29uc3QgeSA9IE51bWJlcihzaGlwRGF0YVsxXSk7XG4gIGxldCBkaXIgPSBOdW1iZXIoc2hpcERhdGFbMl0pO1xuICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2hpcERhdGFbM10pO1xuXG5cbiAgLy8gaWYgdGhlcmUgaXMgYSBzaGlwLCByZW1vdmUgaXQgZnJvbSB0aGUgYm9hcmRcbiAgaWYgKHNoaXAgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZGVsZXRlU2hpcChzaGlwSUQpO1xuXG4gICAgaWYgKGRpciA9PT0gMCkge1xuICAgICAgLy8gaWYgdGhlIHNoaXAgaXMgaG9yaXpvbnRhbCwgY2xlYXIgdGhlIGJvYXJkIG9mIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgICAgY29uc29sZS5sb2coJ3NoaXAgaXMgaG9yaXpvbnRhbCEnKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHhFbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG5cbiAgICAgICAgeEVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayB0aGF0IHRoZSBzcXVhcmVzIHdlIHdpbGwgcGxhY2UgdGhlIHNoaXAgaW4gYXJlIG5vdCBvY2N1cGllZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHlFbGVtZW50ID0gdGhpcy5ib2FyZFt4XVt5IC0gaV07XG4gICAgICAgIGlmICh5RWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBoYXZpbmcgcmVtb3ZlZCB0aGUgc2hpcCwgcGxhY2UgaXQgd2l0aCB0aGUgbmV3IGRpcmVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbHNlIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgICBjb25zb2xlLmxvZygnc2hpcCBpcyB2ZXJ0aWNhbCEnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuXG4gICAgICAgIHlFbGVtZW50Lm9jY3VwYW50ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgc3F1YXJlcyB3ZSB3aWxsIHBsYWNlIHRoZSBzaGlwIGluIGFyZSBub3Qgb2NjdXBpZWRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoIXRoaXMuYm9hcmRbeCArIGldKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHhFbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICAgIGlmICh4RWxlbWVudC5vY2N1cGFudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLy8gZmxpcCB0aGUgZGlyZWN0aW9uXG4gIGlmIChkaXIgPT09IDApIHsgZGlyID0gMTsgfSBlbHNlIHsgZGlyID0gMDsgfTtcblxuICAvLyBoYXZpbmcgcmVtb3ZlZCB0aGUgc2hpcCwgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgZGlyZWN0aW9uIGFuZCByZXR1cm4gcmVzdWx0XG4gIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBkaXIsIGxlbmd0aCwgc2hpcElEKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW92ZVNoaXBJblN0b3JhZ2UoeCwgeSwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcblxuICAgIC8vIGZpbmQgdGhlIHNoaXAgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzIGFuZCBnZXQgaXRzIGRpcmVjdGlvblxuICBjb25zdCBzaGlwSUQgPSB0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50O1xuICBjb25zdCBzaGlwID0gdGhpcy5nZXRTaGlwKHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQpO1xuXG4gIGlmIChzaGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBzaGlwIGF0IHRoZXNlIGNvb3JkcywgaXQncyBiZWNhdXNlIHRoZXJlIHdhcyBhbiBpbnZhbGlkXG4gICAgLy8gc2hpcCBwbGFjZW1lbnQuIFRoZXJlcmVmb3JlLCB0aGVyZSBpcyBubyBzaGlwIHRvIGRlbGV0ZS4gU28sIHJldHVybi5cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGlyID0gc2hpcC5kaXJlY3Rpb247XG5cbiAgLy8gZGVsZXRlIHRoZSBzaGlwIGZyb20gc2hpcEFycmF5XG4gIHRoaXMuZGVsZXRlU2hpcChzaGlwSUQpO1xuXG4gIC8vIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcFxuICBpZiAoZGlyID09PSAwKSB7XG4gICAgLy8gaWYgdGhlIHNoaXAgaXMgaG9yaXpvbnRhbCwgY2xlYXIgdGhlIGJvYXJkIG9mIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHhFbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICB4RWxlbWVudC5vY2N1cGFudCA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGVsc2UgY2xlYXIgdGhlIGJvYXJkIG9mIHRoZSBzaGlwIHZlcnRpY2FsbHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuICAgICAgeUVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBidWlsZEJvYXJkLFxuICBwbGFjZVNoaXBPbkJvYXJkLFxuICBjaGVja0ZsZWV0U3VuayxcbiAgZ2V0U2hpcCxcbiAgcmVjZWl2ZUF0dGFjayxcbiAgY2hlY2tGb3JPY2N1cGFudHMsXG4gIGRlbGV0ZVNoaXAsXG4gIG1vdmVTaGlwSW5TdG9yYWdlLFxuICBjaGVja0lmU3F1YXJlRXhpc3RzLFxuICBjaGVja0lmU3F1YXJlSXNIaXQsXG4gIHBsYXllckJvYXJkLFxuICBjcHVCb2FyZCxcbn07XG4iLCJpbXBvcnQgeyBjb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4vY29tcG9uZW50RmFjdG9yeVwiO1xuaW1wb3J0IHsgZGlzcGxheU9iamVjdHMsIHNoaXBzIH0gZnJvbSBcIi4vZGlzcGxheU9iamVjdHNcIjtcbmltcG9ydCBDcnVpc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvQ3J1aXNlci5wbmdcIjtcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuLi9yZXNvdXJjZXMvQmF0dGxlc2hpcC5wbmdcIjtcbmltcG9ydCBEZXN0cm95ZXIgZnJvbSBcIi4uL3Jlc291cmNlcy9EZXN0cm95ZXIucG5nXCI7XG5pbXBvcnQgRnJpZ2F0ZSBmcm9tIFwiLi4vcmVzb3VyY2VzL0ZyaWdhdGUucG5nXCI7XG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gXCIuLi9yZXNvdXJjZXMvZXhwbG9zaW9uLm1wM1wiO1xuaW1wb3J0IExhc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvbGFzZXIubXAzXCI7XG5pbXBvcnQgTXVzaWMgZnJvbSBcIi4uL3Jlc291cmNlcy9tdXNpYy5tcDNcIjtcbmltcG9ydCBTdW5rIGZyb20gXCIuLi9yZXNvdXJjZXMvc3Vuay5tcDNcIjtcbmltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YlN1YlwiO1xuXG5jbGFzcyBJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5O1xuICAgIHRoaXMuYnVpbGRHcmlkID0gYnVpbGRHcmlkO1xuICAgIHRoaXMuYnVpbGRTaGlwcyA9IGJ1aWxkU2hpcHM7XG4gICAgdGhpcy5yb3RhdGVTaGlwID0gcm90YXRlU2hpcDtcbiAgICB0aGlzLmNwdUF0dGFjayA9IGNwdUF0dGFjaztcbiAgICB0aGlzLnJlbW92ZUF0dGFja0xpc3RlbmVycyA9IHJlbW92ZUF0dGFja0xpc3RlbmVycztcbiAgICB0aGlzLmF0dGFjayA9IGF0dGFjaztcbiAgICB0aGlzLmFkZEF0dGFja0xpc3RlbmVycyA9IGFkZEF0dGFja0xpc3RlbmVycztcbiAgICB0aGlzLm1hcmtTcXVhcmVIaXQgPSBtYXJrU3F1YXJlSGl0O1xuICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lO1xuICAgIHRoaXMuZHJvcCA9IGRyb3A7XG4gICAgdGhpcy5hZGREcmFnTGlzdGVuZXJzID0gYWRkRHJhZ0xpc3RlbmVycztcbiAgICB0aGlzLmFsbG93RHJvcCA9IGFsbG93RHJvcDtcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlID0gYnVpbGRJbnRlcmZhY2U7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSBbXTtcbiAgICB0aGlzLmdhbWVOb3RzID0gW107XG4gICAgdGhpcy51cGRhdGVOb3RzRGlzcGxheSA9IHVwZGF0ZU5vdHNEaXNwbGF5O1xuICAgIHRoaXMubWFya1NxdWFyZSA9IG1hcmtTcXVhcmU7XG4gICAgdGhpcy5zb3VuZE9uID0gZmFsc2U7XG4gIH1cblxuICBhZGROb3RpZihub3RpZiwgcGxheWVyKSB7XG4gICAgY29uc3Qgbm90aWZXaXRoVGltZXN0YW1wID0gYCR7Z2V0VGltZSgpfTogJHtub3RpZn1gO1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIGlmICh0aGlzLmluc3RydWN0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluc3RydWN0aW9ucy5wdXNoKG5vdGlmV2l0aFRpbWVzdGFtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdhbWVOb3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy5nYW1lTm90cy5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5nYW1lTm90cy5wdXNoKG5vdGlmV2l0aFRpbWVzdGFtcCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTm90c0Rpc3BsYXkoKTtcbiAgfVxufVxuXG5jb25zdCBpZmFjZSA9IG5ldyBJbnRlcmZhY2UoKTtcbmNvbnN0IGV4cGxvc2lvbiA9IG5ldyBBdWRpbyhFeHBsb3Npb24pO1xuY29uc3QgbGFzZXIgPSBuZXcgQXVkaW8oTGFzZXIpO1xuY29uc3Qgc2hpcFN1bmsgPSBuZXcgQXVkaW8oU3Vuayk7XG5cbmZ1bmN0aW9uIHBsYXlTb3VuZChzb3VuZCkge1xuICBpZiAoc291bmQgPT09IDEpIHtcbiAgICBleHBsb3Npb24ucGxheSgpO1xuICB9IGVsc2UgaWYgKHNvdW5kID09PSAyKSB7XG4gICAgbGFzZXIucGxheSgpO1xuICB9IGVsc2Uge1xuICAgIHNoaXBTdW5rLnBsYXkoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRHcmlkKHBsYXllcikge1xuICBsZXQgc3FOdW0gPSAwO1xuICBmb3IgKGxldCBpID0gOTsgaSA+IC0xOyBpIC09IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IGRpc3BsYXlPYmplY3RzW2Rpc3BsYXlPYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgbmV3U3F1YXJlLnh5ID0gW2osIGksIHNxTnVtLCBwbGF5ZXJdO1xuICAgICAgc3FOdW0gKz0gMTtcbiAgICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMiA9IFwicGxheWVyLWdyaWQtc3F1YXJlXCI7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzczMgPSBgcGxheWVyLWdyaWQtc3F1YXJlLSR7an0tJHtpfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MyID0gXCJjcHUtZ3JpZC1zcXVhcmVcIjtcbiAgICAgICAgbmV3U3F1YXJlLnBhcmVudCA9IFwiLmNwdS1ib2FyZFwiO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3MzID0gYGNwdS1ncmlkLXNxdWFyZS0ke2p9LSR7aX1gO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50RmFjdG9yeShuZXdTcXVhcmUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTaGlwcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gc2hpcHNbaV07XG5cbiAgICBjb21wb25lbnRGYWN0b3J5KGVsZW1lbnQpO1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICBjYXNlIFwiQmF0dGxlc2hpcFwiOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMX1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7QmF0dGxlc2hpcH0gYWx0PSR7ZWxlbWVudC5uYW1lfSBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3M9XCJkcmFnZ2FibGVcIiBpZD1cIkJhdHRsZXNoaXBcIiBkYXRhLWxlbmd0aD1cIjZcIiBkYXRhLWRpcmVjdGlvbj1cIjBcIj5gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkNydWlzZXJcIjpcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5jbGFzczF9YCkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz0ke0NydWlzZXJ9IGFsdD0ke2VsZW1lbnQubmFtZX0gZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZHJhZ2dhYmxlXCIgaWQ9XCJDcnVpc2VyXCIgIGRhdGEtbGVuZ3RoPVwiNFwiIGRhdGEtZGlyZWN0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiRGVzdHJveWVyXCI6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MxfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtEZXN0cm95ZXJ9IGFsdD0ke2VsZW1lbnQubmFtZX0gZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZHJhZ2dhYmxlXCIgaWQ9XCJEZXN0cm95ZXJcIiAgZGF0YS1sZW5ndGg9XCIzXCIgZGF0YS1kaXJlY3Rpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MxfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtGcmlnYXRlfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiRnJpZ2F0ZVwiICBkYXRhLWxlbmd0aD1cIjJcIiBkYXRhLWRpcmVjdGlvbj1cIjBcIj5gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICBjb25zdCB4eSA9IFtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueCxcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueSxcbiAgICBlLnRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbixcbiAgICBlLnRhcmdldC5kYXRhc2V0Lmxlbmd0aCxcbiAgXTtcbiAgY29uc3Qgc2hpcCA9IGUudGFyZ2V0O1xuXG4gIHB1YlN1Yi5wdWIoXCJyb3RhdGVTaGlwXCIsIHh5KTtcblxuICBzd2l0Y2ggKE51bWJlcihlLnRhcmdldC5kYXRhc2V0Lmxlbmd0aCkpIHtcbiAgICBjYXNlIDY6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiYmF0dGxlc2hpcC1yb3RhdGVkXCIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDQ6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJjcnVpc2VyLXJvdGF0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIwXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiY3J1aXNlci1yb3RhdGVkXCIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDM6XG4gICAgICBpZiAoc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gXCIwXCIpIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXItcm90YXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjBcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXN0cm95ZXItcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID09PSBcIjBcIikge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIxXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImZyaWdhdGUtcm90YXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjBcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJmcmlnYXRlLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gIH1cbn1cblxubGV0IGRyYWdTdG9yYWdlID0gXCJ0ZXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgZHJhZ1N0b3JhZ2UgPSBlLnRhcmdldDtcblxuICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGFjZW1lbnQtZ3JpZC1zcXVhcmVcIikpIHtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC54KTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC55KTtcbiAgICBjb25zdCByZXN1bHQgPSBbXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbiksXG4gICAgICBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5sZW5ndGgpLFxuICAgIF07XG4gICAgcHViU3ViLnB1YihcIm1vdmVTaGlwXCIsIHJlc3VsdCk7XG4gIH1cbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImltZ1wiLCBlLnRhcmdldC5pZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImltZ1wiKTtcblxuICBlLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKSk7XG5cbiAgcHViU3ViLnB1YihcInBsYWNlU2hpcFwiLCBbXG4gICAgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCksXG4gICAgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSksXG4gICAgTnVtYmVyKGRyYWdTdG9yYWdlLmRhdGFzZXQuZGlyZWN0aW9uKSxcbiAgICBOdW1iZXIoZHJhZ1N0b3JhZ2UuZGF0YXNldC5sZW5ndGgpLFxuICBdKTtcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKGAjJHtkcmFnU3RvcmFnZS5pZH1gKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlU2hpcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd0Ryb3AoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmNvbnN0IGJpbmRBZGRBdHRhY2tMaXN0ZW5lcnMgPSBpZmFjZS5hZGRBdHRhY2tMaXN0ZW5lcnMuYmluZChpZmFjZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIC8vIGNsZWFyIHRoZSBub3RpZmljYXRpb24gYXJlYVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmLWxlZnRcIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyB0ZWxsIHRoZSBjb250cm9sbGVyIHRvIHN0YXJ0IHRoZSBnYW1lXG4gIHB1YlN1Yi5wdWIoXCJnYW1lU3RhcnRcIiwgXCJ0cnVlXCIpO1xuXG4gIC8vIHJlbW92ZSBzaGlwLXJvdGF0aW9uIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGVcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ2dhYmxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkcmFnZ2FibGVzW2ldO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZVNoaXApO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBkcm9wIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmVcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNxdWFyZXNbaV07XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBhbGxvd0Ryb3ApO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHN0YXJ0IGJ1dHRvblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKS5yZW1vdmUoKTtcblxuICAvLyBhZGQgdGhlIGF0dGFjayBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGNwdSBib2FyZFxuICBiaW5kQWRkQXR0YWNrTGlzdGVuZXJzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwc1BsYWNlZCgpIHtcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKTtcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWYtbGVmdFwiKS5pbm5lckhUTUwgPVxuICAgIFwiU2hpcHMgcGxhY2VkISBDbGljayBzdGFydCB0byBiZWdpbiFcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNwdUF0dGFjaygpIHtcbiAgbGV0IHN1Y2Nlc3NmdWxBdHRhY2sgPSBmYWxzZTtcbiAgd2hpbGUgKCFzdWNjZXNzZnVsQXR0YWNrKSB7XG4gICAgY29uc3QgdGhpc0F0dGFjayA9IGNvbnRyb2xsZXIuY3B1LmF0dGFjaygpO1xuICAgIGlmICh0aGlzQXR0YWNrKSB7XG4gICAgICBzdWNjZXNzZnVsQXR0YWNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNrKGUpIHtcbiAgY29uc3QgeCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LngpO1xuICBjb25zdCB5ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSk7XG4gIHB1YlN1Yi5wdWIoXCJwbGF5ZXJzTW92ZVwiLCBbeCwgeV0pO1xufVxuXG5jb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5jb25zdCB7IHNpZ25hbCB9ID0gYWJvcnRDb250cm9sbGVyO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXR0YWNrTGlzdGVuZXJzKCkge1xuICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3B1LWdyaWQtc3F1YXJlXCIpO1xuICBncmlkU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFjaywgeyBzaWduYWwsIG9uY2U6IHRydWUgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXR0YWNrTGlzdGVuZXJzKCkge1xuICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bmsoaXNQbGF5ZXJCb2FyZCkge1xuICBwbGF5U291bmQoMyk7XG4gIGlmICghaXNQbGF5ZXJCb2FyZCkge1xuICAgIGFkZE5vdGlmKFwiVGhlIGNvbXB1dGVyIHN1bmsgeW91ciBzaGlwIVwiLCAyKTtcbiAgfSBlbHNlIHtcbiAgICBhZGROb3RpZihcIllvdSBzdW5rIGFuIGVuZW15IHNoaXAhXCIsIDIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOb3RzRGlzcGxheSgpIHtcbiAgLy8gc2VsZWN0IGFuZCBjbGVhciBib3RoIHRoZSBodW1hbiBhbmQgY3B1IG5vdGlmaWNhdGlvbiBkaXNwbGF5c1xuXG4gIGNvbnN0IGxlZnROb3RpZnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmLWxlZnRcIik7XG4gIGxlZnROb3RpZnMuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCByaWdodE5vdGlmcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWYtcmlnaHRcIik7XG4gIHJpZ2h0Tm90aWZzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gaW5pdGlhbGl6ZSB0d28gc3RyaW5ncyB0byBob2xkIHRoZSBodG1sIGZvciB0aGUgbm90aWZpY2F0aW9uc1xuICBsZXQgbGVmdFJlc3VsdCA9IFwiXCI7XG4gIGxldCByaWdodFJlc3VsdCA9IFwiXCI7XG5cbiAgLy8gZ2V0IHRoZSBub3RpZmljYXRpb24gYXJyYXlzXG4gIGNvbnN0IHsgaW5zdHJ1Y3Rpb25zLCBnYW1lTm90cyB9ID0gdGhpcztcblxuICAvLyBhc3NlbWJsZSB0aGUgaHRtbCBmb3IgdGhlIG5vdGlmaWNhdGlvbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnN0cnVjdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsZWZ0UmVzdWx0ICs9IGA8aDMgY2xhc3M9XCJub3RpZiBpbnN0cnVjdGlvblwiPiR7aW5zdHJ1Y3Rpb25zW2ldfTwvaDM+YDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVOb3RzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgcmlnaHRSZXN1bHQgKz0gYDxoMyBjbGFzcz1cIm5vdGlmIGNwdS1ub3RpZlwiPiR7Z2FtZU5vdHNbaV19PC9oMz5gO1xuICB9XG5cbiAgLy8gd3JpdGUgdGhlIGh0bWwgdG8gdGhlIG5vdGlmaWNhdGlvbiBkaXNwbGF5c1xuICBsZWZ0Tm90aWZzLmlubmVySFRNTCA9IGxlZnRSZXN1bHQ7XG4gIHJpZ2h0Tm90aWZzLmlubmVySFRNTCA9IHJpZ2h0UmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya1NxdWFyZUhpdChhcnJheSkge1xuICBsZXQgc3F1YXJlO1xuICBjb25zdCB4ID0gYXJyYXlbMF07XG4gIGNvbnN0IHkgPSBhcnJheVsxXTtcbiAgY29uc3QgaXNPY2N1cGllZCA9IGFycmF5WzJdO1xuICBjb25zdCBpc1BsYXllckJvYXJkID0gYXJyYXlbM107XG5cbiAgaWYgKCFhcnJheVs0XSkge1xuICAgIGlmIChpc1BsYXllckJvYXJkKSB7XG4gICAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLWdyaWQtc3F1YXJlLSR7eH0tJHt5fWApO1xuXG4gICAgICBpZiAoaXNPY2N1cGllZCkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1vY2N1cGllZFwiKTtcbiAgICAgICAgYWRkTm90aWYoXCJUaGUgY29tcHV0ZXIgaGl0IHlvdXIgc2hpcCFcIiwgMik7XG4gICAgICAgIHBsYXlTb3VuZCgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LWVtcHR5XCIpO1xuICAgICAgICBhZGROb3RpZihcIlRoZSBjb21wdXRlciBoaXQgYW4gZW1wdHkgc3F1YXJlIVwiLCAyKTtcbiAgICAgICAgcGxheVNvdW5kKDIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY3B1LWdyaWQtc3F1YXJlLSR7eH0tJHt5fWApO1xuXG4gICAgICBpZiAoaXNPY2N1cGllZCkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1vY2N1cGllZFwiKTtcbiAgICAgICAgYWRkTm90aWYoXCJZb3UgaGl0IGFuIGVuZW15IHNoaXAhXCIsIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXQtZW1wdHlcIik7XG4gICAgICAgIGFkZE5vdGlmKFwiWW91IGhpdCBhbiBlbXB0eSBzcXVhcmUhXCIsIDIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZE1vdmUoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWFsZXJ0XCIpLnRleHRDb250ZW50ID1cbiAgICBcIllvdSB0cmllZCB0byBhdHRhY2sgYW4gaW52YWxpZCBzcXVhcmUhXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlcihtZXNzYWdlKSB7XG4gIGJpbmRSZW1vdmVBdHRhY2tMaXN0ZW5lcnMoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1sZWZ0XCIpLmlubmVySFRNTCA9XG4gICAgJzxoMiBjbGFzcz1cIm5vdGlmIGluc3RydWN0aW9uXCI+R2FtZSBPdmVyISBDbGljayByZWZyZXNoIHRvIHBsYXkgYWdhaW4uPC9oMj4nO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLm5vdGlmLXJpZ2h0XCJcbiAgKS5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwibm90aWYgaW5zdHJ1Y3Rpb25cIj4ke21lc3NhZ2V9PC9oMj5gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWVyTW92ZSgpIHtcbiAgYWRkTm90aWYoXCJZb3VyIG1vdmUhIFBsZWFzZSBhdHRhY2sgYW4gZW5lbXkgc3F1YXJlIGJ5IGNsaWNraW5nLlwiLCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERyYWdMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZVwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYWdnYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZHJhZ2dhYmxlc1tpXTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnKTtcbiAgfVxuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmVcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHNxdWFyZXNbaV07XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBhbGxvd0Ryb3ApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNoaXBQbGFjZW1lbnQoKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnV0dG9uXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWlsZFNoaXBQbGFjZW1lbnQpO1xuICBhZGREcmFnTGlzdGVuZXJzKCk7XG5cbiAgLy8gU2VuZHMgdGhlIHBsYXllciBhIG1lc3NhZ2UgdG8gcGxhY2Ugc2hpcHNcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1sZWZ0XCIpLmlubmVySFRNTCA9XG4gICAgJzxoMiBjbGFzcz1cIm5vdGlmIGh1bWFuLW5vdGlmXCI+RHJhZyBhbmQgZHJvcCB0byBwbGFjZSB5b3VyIHNoaXBzISBDbGljayBpdHMgbGVmdCBzcXVhcmUgdG8gcm90YXRlIGEgcGxhY2VkIHNoaXAuPC9oMj4nO1xuXG4gIC8vIFBsYXlzIHRoZSBtdXNpY1xuICBjb25zdCBtdXNpYyA9IG5ldyBBdWRpbyhNdXNpYyk7XG4gIG11c2ljLnBsYXkoKTtcbn1cblxuLy8gR2V0IHRoZSBET00gbm9kZXMnIGluZm8gZm9yIHRoZSBmaXJzdCBzY3JlZW4gZnJvbSBkaXNwbGF5T2JqZWN0c1xuLy8gYW5kIGRyYXdzIHRoZW1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW50ZXJmYWNlKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlPYmplY3RzLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkaXNwbGF5T2JqZWN0c1tpXTtcbiAgICBjb21wb25lbnRGYWN0b3J5KGVsZW1lbnQpO1xuICB9XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnV0dG9uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWlsZFNoaXBQbGFjZW1lbnQpO1xuICBidWlsZEdyaWQoMSk7XG4gIGJ1aWxkR3JpZCgyKTtcbiAgYnVpbGRTaGlwcygpO1xuXG4gIC8vIGFkZCB3ZWxjb21lIG1lc3NhZ2UgdG8gdGhlIG5vdGlmaWNhdGlvbiBhcmVhXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi1sZWZ0XCIpLmlubmVySFRNTCA9XG4gICAgJzxoMiBjbGFzcz1cIm5vdGlmIG5vdGlmLWh1bWFuXCI+V2VsY29tZSB0byBCYXR0bGVzaGlwISBDbGljayBTdGFydCB0byBwbGFjZSB5b3VyIHNoaXBzITwvaDI+JztcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1zb3VuZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmYWNlLnRvZ2dsZVNvdW5kKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICBpZiAobWludXRlcyA9PT0gXCIwXCIpIHtcbiAgICBtaW51dGVzID0gXCIwMFwiO1xuICB9XG4gIGNvbnN0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuXG5jb25zdCBhZGROb3RpZiA9IGlmYWNlLmFkZE5vdGlmLmJpbmQoaWZhY2UpO1xuXG5jb25zdCBiaW5kUmVtb3ZlQXR0YWNrTGlzdGVuZXJzID0gaWZhY2UucmVtb3ZlQXR0YWNrTGlzdGVuZXJzLmJpbmQoaWZhY2UpO1xuXG5mdW5jdGlvbiBtYXJrU3F1YXJlKHNxdWFyZSkge1xuICBjb25zdCBtYXJrID0gaWZhY2UubWFya1NxdWFyZUhpdC5iaW5kKGlmYWNlKTtcbiAgbWFyayhzcXVhcmUpO1xufVxuXG5leHBvcnQgeyBpZmFjZSB9O1xuIiwiaW1wb3J0IHsgcGxheWVyQm9hcmQsIGNwdUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkRmFjdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgaW5uZXJQbGF5ZXJGYWN0b3J5ID0gKHR5cGUpID0+IHtcbiAgICBsZXQgYm9hcmQ7XG4gICAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICAgIGJvYXJkID0gcGxheWVyQm9hcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkID0gY3B1Qm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHBsYXllclR5cGUgPSB0eXBlO1xuXG4gICAgYm9hcmQucGxheWVyVHlwZSA9IHBsYXllclR5cGU7XG4gICAgcmV0dXJuIHsgcGxheWVyVHlwZSwgYm9hcmQgfTtcbiAgfTtcblxuICBjb25zdCBodW1hbiA9IGlubmVyUGxheWVyRmFjdG9yeSgxKTtcbiAgY29uc3QgY3B1ID0gaW5uZXJQbGF5ZXJGYWN0b3J5KDIpO1xuXG4gIGNvbnN0IHBsYWNlQ1BVU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcFR5cGVzID0gWzYsIDQsIDMsIDJdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgaG9yaXpWZXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBjb25zdCByZXN1bHQgPSBjcHUuYm9hcmQucGxhY2VTaGlwT25Cb2FyZCh4LCB5LCBob3JpelZlcnQsIHR5cGUpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGxhY2VTaGlwKHR5cGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzaGlwVHlwZXMuZm9yRWFjaCgoc2hpcFR5cGUpID0+IHtcbiAgICAgIHBsYWNlU2hpcChzaGlwVHlwZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcGxhY2VDUFVTaGlwcygpO1xuXG4gIGNvbnN0IGNwdUF0dGFjayA9ICgpID0+IHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcblxuICBjb25zdCBodW1hbkF0dGFjayA9ICh4LCB5KSA9PiBjcHUuYm9hcmQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgaHVtYW4uYXR0YWNrID0gaHVtYW5BdHRhY2s7XG4gIGNwdS5hdHRhY2sgPSBjcHVBdHRhY2s7XG5cbiAgcmV0dXJuIHsgaHVtYW4sIGNwdSB9O1xufTtcbiIsImNsYXNzIFRvcGljIHtcbiAgY29uc3RydWN0b3IodG9waWMpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW107XG4gIH1cbn1cblxuY2xhc3MgUHViU3ViIHtcbiAgc3ViKHRvcGljLCBzdWJzY3JpYmVyKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzY3JpYmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBgJHt0eXBlb2Ygc3Vic2NyaWJlcn0gaXMgbm90IGEgdmFsaWQgYXJndW1lbnQgZm9yIHN1YnNjcmliZXJzYDtcbiAgICB9XG4gICAgaWYgKCF0aGlzW3RvcGljXSkge1xuICAgICAgdGhpc1t0b3BpY10gPSBuZXcgVG9waWMoKTtcbiAgICB9XG4gICAgdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIHVuc3ViKHRvcGljLCBzdWJzY3JpYmVyKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzY3JpYmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBgJHt0eXBlb2Ygc3Vic2NyaWJlcn0gaXMgbm90IGEgdmFsaWQgYXJndW1lbnQgZm9yIHVuc3Vic2NyaWJpbmdgO1xuICAgIH1cbiAgICBpZiAodGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuaW5jbHVkZXMoc3Vic2NyaWJlcikpIHtcbiAgICAgIHRoaXNbdG9waWNdLnN1YnNjcmliZXJzID0gdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuZmlsdGVyKFxuICAgICAgICAoc3ViKSA9PiBzdWIgIT09IHN1YnNjcmliZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHViKHRvcGljLCBwYXlsb2FkKSB7XG4gICAgdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3ViKSA9PiBzdWIocGF5bG9hZCkpO1xuICB9XG5cbiAgcmV0dXJuU3Vic2NyaWJlcnModG9waWMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICB0aGlzW3RvcGljXS5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWIpID0+IHJlc3VsdC5wdXNoKHN1YikpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcblxuIiwiZXhwb3J0IGNvbnN0IHNoaXBGYWN0b3J5ID0gKCgpID0+IHtcbiAgbGV0IHNoaXBDb3VudGVyID0gLTE7XG4gIGNvbnN0IHNoaXBGYWN0b3J5ID0gKHNoaXBUeXBlKSA9PiB7XG4gICAgc2hpcENvdW50ZXIgKz0gMTtcbiAgICBjb25zdCBzaGlwSUQgPSBzaGlwQ291bnRlcjtcbiAgICBsZXQgdHlwZTtcbiAgICBsZXQgbGVuZ3RoO1xuICAgIGxldCBocDtcbiAgICBjb25zdCBzdW5rID0gZmFsc2U7XG4gICAgc3dpdGNoIChzaGlwVHlwZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0eXBlID0gXCJTaW5rIHRlc3RcIjtcbiAgICAgICAgbGVuZ3RoID0gNjtcbiAgICAgICAgaHAgPSAxO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICB0eXBlID0gXCJGcmlnYXRlXCI7XG4gICAgICAgIGxlbmd0aCA9IDI7XG4gICAgICAgIGhwID0gMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdHlwZSA9IFwiRGVzdHJveWVyXCI7XG4gICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgIGhwID0gMztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdHlwZSA9IFwiQ3J1aXNlclwiO1xuICAgICAgICBsZW5ndGggPSA0O1xuICAgICAgICBocCA9IDQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0eXBlID0gXCJCYXR0bGVzaGlwXCI7XG4gICAgICAgIGxlbmd0aCA9IDY7XG4gICAgICAgIGhwID0gNjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlLFxuICAgICAgbGVuZ3RoLFxuICAgICAgaHAsXG4gICAgICBzdW5rLFxuICAgICAgc2hpcElELFxuICAgICAgY2hlY2tTdW5rKCkge1xuICAgICAgICByZXR1cm4gc3VuaztcbiAgICAgIH0sXG4gICAgICBoaXQoKSB7XG4gICAgICAgIGhwIC09IDE7XG4gICAgICAgIGlmIChocCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIFwic3Vua1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgfSxcbiAgICB9O1xuICB9O1xuICByZXR1cm4geyBzaGlwRmFjdG9yeSB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVyXCI7XG5pbXBvcnQgKiBhcyBteUludGVyZmFjZSBmcm9tIFwiLi9tb2R1bGVzL2ludGVyZmFjZVwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9tb2R1bGVzL3N0eWxlcy5jc3NcIjtcblxubXlJbnRlcmZhY2UuaWZhY2UuYnVpbGRJbnRlcmZhY2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==