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
___CSS_LOADER_EXPORT___.push([module.id, "/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\nbody {\n  max-width: 1600px;\n  margin: auto;\n  height: 1080px;\n  overflow: hidden;\n  font-family: \"Press Start 2P\", sans-serif;\n  color: #00b140;\n  letter-spacing: 5px;\n  font-weight: bold;\n  filter: drop-shadow(0 0 10px #00b140) drop-shadow(0 0 20px #00b140)\n    contrast(2) brightness(1);\n  text-align: center;\n  background: #141212;\n}\n\nmain {\n  margin: auto;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.notif-area {\n  height: 300px;\n}\n\n.notif-upper,\n.notif-lower {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n}\n\n.start-button {\n  min-width: 200px;\n  min-height: 50px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #00b140;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 3px;\n  background-color: #141212;\n  color: #00b140;\n  margin-bottom: 40px;\n}\n\n.start-button:hover {\n  background-color: #00b140;\n  color: #141212;\n  cursor: pointer;\n}\n\n.grid-container {\n  display: flex;\n  gap: 40px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid #00b140;\n  position: relative;\n  overflow: visible;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  width: 400px;\n  height: 120px;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.destroyer-container {\n  margin: 14px 23% 14px 17%;\n\n}\n\n.frigate-container {\n  margin-top: 14px;\n}\n\n.hit-empty {\n  background-color: black;\n}\n\n.hit-occupied {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\n/*\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.placement-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 400px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid grey;\n  position: relative;\n  overflow: visible;\n}\n\n.ships-container {\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  margin-top: 62px;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.hit-empty {\n  background-color: black;\n}\n\n.hit-occupied {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n*/\n", "",{"version":3,"sources":["webpack://./src/modules/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA,WAAW;;AAEX;EACE,iBAAiB;EACjB,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,yCAAyC;EACzC,cAAc;EACd,mBAAmB;EACnB,iBAAiB;EACjB;6BAC2B;EAC3B,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,oBAAoB;EACpB,iBAAiB;EACjB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;;AAE3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CA+FC","sourcesContent":["/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\nbody {\n  max-width: 1600px;\n  margin: auto;\n  height: 1080px;\n  overflow: hidden;\n  font-family: \"Press Start 2P\", sans-serif;\n  color: #00b140;\n  letter-spacing: 5px;\n  font-weight: bold;\n  filter: drop-shadow(0 0 10px #00b140) drop-shadow(0 0 20px #00b140)\n    contrast(2) brightness(1);\n  text-align: center;\n  background: #141212;\n}\n\nmain {\n  margin: auto;\n}\n\n.game-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.notif-area {\n  height: 300px;\n}\n\n.notif-upper,\n.notif-lower {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n}\n\n.start-button {\n  min-width: 200px;\n  min-height: 50px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #00b140;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 3px;\n  background-color: #141212;\n  color: #00b140;\n  margin-bottom: 40px;\n}\n\n.start-button:hover {\n  background-color: #00b140;\n  color: #141212;\n  cursor: pointer;\n}\n\n.grid-container {\n  display: flex;\n  gap: 40px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid #00b140;\n  position: relative;\n  overflow: visible;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  width: 400px;\n  height: 120px;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.destroyer-container {\n  margin: 14px 23% 14px 17%;\n\n}\n\n.frigate-container {\n  margin-top: 14px;\n}\n\n.hit-empty {\n  background-color: black;\n}\n\n.hit-occupied {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\n/*\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.placement-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 400px;\n}\n\n.placement-grid {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cpu-board {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.placement-grid-square {\n  width: 10%;\n  height: 10%;\n  border: 1px solid grey;\n  position: relative;\n  overflow: visible;\n}\n\n.ships-container {\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  margin-top: 62px;\n}\n\n.draggable {\n  max-width: 100vw;\n}\n\n.ship-placement {\n  position: relative;\n}\n\n.battleship-rotated {\n  left: -98px;\n  top: 100px;\n  position: absolute;\n}\n\n.cruiser-rotated {\n  left: -59px;\n  top: 62px;\n  position: absolute;\n}\n\n.destroyer-rotated {\n  left: -38px;\n  top: 41px;\n  position: absolute;\n}\n\n.frigate-rotated {\n  left: -18px;\n  top: 20px;\n  position: absolute;\n}\n\n.hit-empty {\n  background-color: black;\n}\n\n.hit-occupied {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n*/\n"],"sourceRoot":""}]);
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
/* harmony export */   "moveShipInStorage": () => (/* binding */ moveShipInStorage),
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

function placeShipOnBoard(x, y, horizVert, shipType, ID) {
  console.log('placeShipOnBoard called with', x, y, horizVert, shipType, ID);
  // make a new ship according to shipType
  const newShip = _ShipFactory__WEBPACK_IMPORTED_MODULE_0__.ShipFactory.ShipFactory(shipType);
  newShip.direction = horizVert;
  const newShipLength = newShip.length;
  if (ID) { 
    newShip.shipID = ID;
  }

  // the following if statements check that this is a legal ship placement
  if (horizVert === 0) {
    if (x + newShipLength > 10) {
      console.log('x + newShipLength = ', x + newShipLength)
      return false;
    }
  } else if (y - newShipLength < -1) {
    console.log('y - newShipLength = ', y - newShipLength)
    return false;
  }
  if (this.checkForOccupants(x, y, horizVert, newShipLength)) {
    return false;
  }
  
  

  this.shipArray.push(newShip);
  console.log('pushed ship! shipArray is now', this.shipArray);

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
  for (let i = 0; i < this.shipArray.length; i += 1) { 
    if (this.shipArray[i].shipID === ID) {
      console.log('found ship!! this.shipArray is', this.shipArray);
      this.shipArray.splice(i, 1);
      console.log('deleted ship! this.shipArray is now', this.shipArray);
    }
  }
}

function rotateShipinStorage(x, y) {
  // find the ship at the given coordinates and get its direction
  console.log('rotating ship! this.board[x][y] is', this.board[x][y])
  /*if (this.board[x][y].occupant === null) { 
    return false;
  }*/
  const shipID = this.board[x][y].occupant;
  console.log('shipID is', shipID);
  const ship = this.getShip(this.board[x][y].occupant);
  console.log('got ship! ship is', ship)
  const dir = ship.direction;

  // delete the ship from shipArray
  console.log("rotating ship! this is", this);
  this.deleteShip(shipID);

  let result;

  if (dir === 0) {
    // if the ship is horizontal, clear the board of the ship horizontally
    for (let i = 0; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      console.log("clearing squares! xElement.occupant =", xElement);
      xElement.occupant = null;
      console.log("cleared square! xElement.occupant =", xElement);
    }
    
    // check that the squares we will place the ship in are not occupied
    for (let i = 0; i < ship.length; i++) {
      const yElement = this.board[x][y - i];
      if (yElement.occupant !== null) {
        console.log('yElement is ', yElement)
        console.log('yElement.occupant is ', yElement.occupant, 'not null')
        return false;
      }
    }
    
    // having removed the ship, place it with the new direction
    result = this.placeShipOnBoard(x, y, 1, ship.length, shipID);
  } else {
    // else clear the board of the ship vertically
    for (let i = 0; i < ship.length; i++) {
      const yElement = this.board[x][y - i];
      console.log("clearing squares! yElement.occupant =", yElement.occupant);
      yElement.occupant = null;
      console.log("cleared square! yElement.occupant =", yElement.occupant);
    }
    
    // check that the squares we will place the ship in are not occupied
    for (let i = 0; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      if (xElement.occupant !== null) {
        console.log('xElement is ', xElement);
        console.log('xElement.occupant is ', xElement.occupant, 'not null')
        return false;
      }
    }

    // having removed the ship, replace it with the new direction
    result = this.placeShipOnBoard(x, y, 0, ship.length, shipID);
  }
  return result;
}

function moveShipInStorage(x, y, direction, length) {
  console.log('called moveShipInStorage!!');
  // find the ship at the given coordinates and get its direction
  const shipID = this.board[x][y].occupant;
  const ship = this.getShip(this.board[x][y].occupant);
  console.log('ship is', ship)
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
    for (let i = 0; i < length; i++) {
      const xElement = this.board[x + i][y];
      xElement.occupant = null;
    }
  } else {
    // else clear the board of the ship vertically
    for (let i = 0; i < length; i++) {
      const yElement = this.board[x][y - i];
      yElement.occupant = null;
    }
  }

  // place the ship on the board
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
      pubSub.pub("getPlayersMove", _interface__WEBPACK_IMPORTED_MODULE_1__.getPlayersMove);
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

  shipPlaced(result) {
    this.shipPlacedCount += 1;
    console.log('********shipPlaced! result is', result);
    const type = result.length;
    pubSub.pub("placedRight", type);
    console.log('type is ', type);

    if (this.shipPlacedCount === 4) {
      this.shipsPlaced = true;
      pubSub.pub("shipsPlaced", _interface__WEBPACK_IMPORTED_MODULE_1__.shipsPlaced);
    }
  }

  playersMove(move) {
    const result = this.players.cpu.board.receiveAttack(move);
    console.log('playersMove! move is ', move);
    let resultArray = [];
    resultArray.push(move[0], move[1]);
    if (result === "hit") {
      resultArray.push(true, false);
    } else if (result === "miss") {
      resultArray.push(false, false);
    } else if (result === "sunk") {
      resultArray.push(true, false);
      // change the below to use pub/sub too
      pubSub.pub("sunk", true);
    } else if (result === "gameOver") {
      this.gameOver = true;
      pubSub.pub("gameOver", "You win");
    } else if (result === "false") {
      pubSub.pub("invalid");
      this.gameFlow(1);
    }
    pubSub.pub("markSquareHit", resultArray);
    this.gameFlow(2);
  }

  getCPUMove() {
    const move = this.players.cpu.attack();
    console.log('getCPUMove! move is ', move);
    const result = this.players.human.board.receiveAttack(move);
    console.log('getCPUMove! result is ', result)
    let resultArray = [];
    resultArray.push(move[0], move[1]);
    if (result === "hit") {
      resultArray.push(true, true);
    } else if (result === "miss") {
      resultArray.push(false, true);
    } else if (result === "sunk") {
      resultArray.push(true, true);
      pubSub.pub("sunk", false);
    } else if (result === "gameOver") {
      pubSub.pub("gameOver", "The computer wins!");
      this.gameOver = true;
    } else if (result === "false") {
      getCPUMove();
    }
    console.log('passed the if/else');
    if (result !== false) { 
      pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(1);
    }
  }

  placeHuman(ship) {
    console.log('placeHuman called! ship is ', ship);
    const result = this.players.human.board.placeShipOnBoard(
      ship[0],
      ship[1],
      ship[2],
      ship[3]
    );
    console.log('result is ', result);
    if (result !== false) {
      placedShip(result);
      return;
    }
    pubSub.pub("placedWrong", ship[3]);
  }

  rotateShip(coords) {
    console.log("pubSub called rotateShip!", coords);
    this.players.human.board.rotateShipinStorage(Number(coords[0]), Number(coords[1]));
  }

  moveShip(details) {
    console.log("pubSub called moveShip! details are ", details);
    console.log("this.players.human.board = ", this.players.human.board);
    console.log('moveShip = ', moveShip);
    console.log('this.players.human.board.getShip = ', this.players.human.board.getShip);
    this.players.human.board.moveShipInStorage(details[0], details[1], details[2], details[3]);
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


pubSub.sub("placeShip", placeHumanShip);
pubSub.sub("shipsPlaced", _interface__WEBPACK_IMPORTED_MODULE_1__.shipsPlaced);
pubSub.sub("gameStart", startGame);
pubSub.sub("getPlayersMove", _interface__WEBPACK_IMPORTED_MODULE_1__.getPlayerMove);
pubSub.sub("playersMove", playersMove);
pubSub.sub("rotateShip", rotateShip);
pubSub.sub("moveShip", moveShip);
pubSub.sub("getPlayerMove", _interface__WEBPACK_IMPORTED_MODULE_1__.getPlayerMove);
pubSub.sub("markSquareHit", _interface__WEBPACK_IMPORTED_MODULE_1__.markSquareHit);
pubSub.sub("sunk", _interface__WEBPACK_IMPORTED_MODULE_1__.sunk);
pubSub.sub("gameOver", _interface__WEBPACK_IMPORTED_MODULE_1__.gameOver);
pubSub.sub("invalid", _interface__WEBPACK_IMPORTED_MODULE_1__.invalidMove);
pubSub.sub("placedRight", _interface__WEBPACK_IMPORTED_MODULE_1__.placedRight);
pubSub.sub("placedWrong", _interface__WEBPACK_IMPORTED_MODULE_1__.placedWrong);
console.log("subs are", pubSub.returnSubscribers("placeShip"));




/***/ }),

/***/ "./src/modules/displayObjects.js":
/*!***************************************!*\
  !*** ./src/modules/displayObjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    name: "gameContainer",
    nodeType: "div",
    parent: "main",
    class1: "game-container",
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
    class1: "notif-upper",
  },
  { 
    name: "notifLower",
    nodeType: "div",
    parent: ".notif-area",
    class1: "notif-lower",
  },
  {
    name: "mainTitle",
    nodeType: "h1",
    parent: ".notif-upper",
    class1: "title",
    text: "BATTLESHIP",
  },
  {
    name: "notifs",
    nodeType: "h3",
    parent: ".notif-lower",
    class1: "notifs",
    text: "",
  },
  {
    name: "startButton",
    nodeType: "input",
    parent: ".game-container",
    class1: "start-button",
    inputType: "button",
    value: "Start",
  },
]

const shipPlacement = [
  {
    name: "placementContainer",
    nodeType: "div",
    parent: ".game-container",
    class1: "placement-container",
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
/* harmony export */   "placedRight": () => (/* binding */ placedRight),
/* harmony export */   "placedWrong": () => (/* binding */ placedWrong),
/* harmony export */   "removeAttackListeners": () => (/* binding */ removeAttackListeners),
/* harmony export */   "rotateShip": () => (/* binding */ rotateShip),
/* harmony export */   "shipsPlaced": () => (/* binding */ shipsPlaced),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "sunk": () => (/* binding */ sunk)
/* harmony export */ });
/* harmony import */ var _componentFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentFactory */ "./src/modules/componentFactory.js");
/* harmony import */ var _displayObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayObjects */ "./src/modules/displayObjects.js");
/* harmony import */ var _resources_Cruiser_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/Cruiser.png */ "./src/resources/Cruiser.png");
/* harmony import */ var _resources_Battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/Battleship.png */ "./src/resources/Battleship.png");
/* harmony import */ var _resources_Destroyer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/Destroyer.png */ "./src/resources/Destroyer.png");
/* harmony import */ var _resources_Frigate_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/Frigate.png */ "./src/resources/Frigate.png");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controller */ "./src/modules/controller.js");
/* eslint-disable no-sequences */








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

function shipsPlaced() {
  const startButton = document.querySelector(".start-button");
  startButton.addEventListener("click", startGame);
}

function rotateShip(e) {
  console.log("rotateShip! e.target is", e.target);
  console.log("e.target.parentElement is", e.target.parentElement);
  const ship = e.target;
  console.log("rotateShip! ship is", ship);
  if (checkPlacement(ship.dataset.length)) {
    return;
  }
  const xy = [
    e.target.parentElement.dataset.x,
    e.target.parentElement.dataset.y,
  ];
  _controller__WEBPACK_IMPORTED_MODULE_6__.pubSub.pub("rotateShip", xy);

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

function cpuAttack() {
  let successfulAttack = false;
  while (!successfulAttack) {
    const thisAttack = controller.cpu.attack();
    if (thisAttack) {
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
  _controller__WEBPACK_IMPORTED_MODULE_6__.pubSub.pub("playersMove", [x, y]);

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
  console.log("sunk called! isPlayerBoard is", isPlayerBoard);
  if (!isPlayerBoard) {
    console.log("SHOULD BE WRITING TO CPU ALERT!");
    document.querySelector(".cpu-alert").textContent =
      "The computer sunk your ship!";
  } else {
    console.log("SHOULD BE WRITING TO PLAYER ALERT!");
    const playerAlert = document.querySelector(".player-alert");
    console.log("playerAlert.textContent is", playerAlert.textContent);
    playerAlert.textContent = "You sunk an enemy ship!";
    console.log("playerAlert.textContent is", playerAlert.textContent);
    /*document.querySelector(".player-alert").textContent =
      "You sunk an enemy ship!";*/
  }
}

function markSquareHit(array) {
  console.log("markSquareHit! array is", array);
  let square;
  const x = array[0];
  const y = array[1];
  const isOccupied = array[2];
  const isPlayerBoard = array[3];

  if (isPlayerBoard) {
    square = document.querySelector(`.player-grid-square-${x}-${y}`);
    console.log("player square is", square);
    const upperNotifs = document.querySelector(".notifs-upper");
    if (isOccupied) {
      square.classList.add("hit-occupied");
      upperNotifstextContent =
        "The computer hit your ship!";
    } else {
      square.classList.add("hit-empty");
      upperNotifs.textContent =
        "The computer hit an empty square!";
    }
  } else {
    square = document.querySelector(`.cpu-grid-square-${x}-${y}`);
    console.log("cpu square is", square);
    const lowerNotifs = document.querySelector(".notifs");
    if (isOccupied) {
      square.classList.add("hit-occupied");
      lowerNotifs.textContent =
        "You hit an enemy ship!";
    } else {
      square.classList.add("hit-empty");
      lowerNotifs.textContent =
        "You hit an empty square!";
    }
  }
}

function invalidMove() {
  document.querySelector(".player-alert").textContent =
    "You tried to attack an invalid square!";
}

function gameOver(message) {
  document.querySelector(".cpu-alert").textContent = "";
  document.querySelector(".player-alert").textContent = message;
}

function startGame() {
  
  // removes the title and replaces it with another notification
  // h3
  document.querySelector(".notif-upper").innerHTML =
  '<h3 class="notifs-upper"></h3>';

  _controller__WEBPACK_IMPORTED_MODULE_6__.pubSub.pub("gameStart", "true");

  // remove ship-rotation event listeners
  const draggables = document.querySelectorAll(".draggable");
  for (let index = 0; index < draggables.length; index++) {
    const element = draggables[index];
    element.removeEventListener("click", rotateShip);
    element.removeEventListener("dragstart", drag);
  }

  // remove drop event listeners
  const squares = document.querySelectorAll(".placement-grid-square");
  console.log("squares = ", squares);
  for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.removeEventListener("drop", drop);
    element.removeEventListener("dragover", allowDrop);
  }
}

let dragStorage = "test";

let isBadlyPlaced = {
  6: true,
  4: true,
  3: true,
  2: true,
};

function getPlayerMove() {
  // provide the player with some sort of prompt. for now, console
  document.querySelector(".notifs").textContent =
    "Your move! Please attack an enemy square by clicking.";
  addAttackListeners();
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
  console.log("pubSub.pub is", _controller__WEBPACK_IMPORTED_MODULE_6__.pubSub.pub);
  _controller__WEBPACK_IMPORTED_MODULE_6__.pubSub.pub("placeShip", [
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
  // Remove the event listener to prevent running this function again
  document
    .querySelector(".start-button")
    .removeEventListener("click", buildShipPlacement);

  // Build the ship placement grids
  for (let i = 0; i < _displayObjects__WEBPACK_IMPORTED_MODULE_1__.shipPlacement.length - 1; i += 1) {
    const element = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.shipPlacement[i];
    (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(element);
  }
  buildGrid(1);
  buildGrid(2);
  buildShips();
  addDragListeners();

  // Sends the player a message to place their ships
  document.querySelector(".notifs").textContent =
    "Place your ships! Click to rotate a placed ship.";
}

// Get the DOM nodes' info for the first screen from displayObjects
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
  console.log("drag! e.target.parentElement = ", e.target.parentElement);
  if (e.target.parentElement.classList.contains("placement-grid-square")) {
    console.log("this is a square!");
    console.log(
      "e.target.parentElement.dataset.x = ",
      e.target.parentElement.dataset.x
    );
    console.log(
      "e.target.parentElement.dataset.y = ",
      e.target.parentElement.dataset.y
    );
    const x = Number(e.target.parentElement.dataset.x);
    const y = Number(e.target.parentElement.dataset.y);
    const result = [
      x,
      y,
      Number(e.target.dataset.direction),
      Number(e.target.dataset.length),
    ];
    _controller__WEBPACK_IMPORTED_MODULE_6__.pubSub.pub("moveShip", result);
  }
  e.dataTransfer.setData("img", e.target.id);
  console.log("dragStorage is", dragStorage);
}

function checkPlacement(ship) {
  return isBadlyPlaced[ship];
}

function placedRight(ship) {
  console.log("placedRight called! isBadlyPlaced is: ", isBadlyPlaced);
  switch (ship) {
    case 6:
      isBadlyPlaced[6] = false;
      break;
    case 4:
      isBadlyPlaced[4] = false;
      break;
    case 3:
      isBadlyPlaced[3] = false;
      break;
    default:
      isBadlyPlaced[2] = false;
      break;
  }
  console.log("placedRight called! isBadlyPlaced is: ", isBadlyPlaced);
}

function placedWrong(ship) {
  console.log("placedWrong called! isBadlyPlaced is: ", isBadlyPlaced);
  switch (ship) {
    case 6:
      isBadlyPlaced[6] = true;
      break;
    case 4:
      isBadlyPlaced[4] = true;
      break;
    case 3:
      isBadlyPlaced[3] = true;
      break;
    default:
      isBadlyPlaced[2] = true;
      break;
  }
  console.log("placedWrong! isBadlyPlaced is: ", isBadlyPlaced);
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
    this.startGame = startGame;
    this.drop = drop;
    this.addDragListeners = addDragListeners;
    this.buildShipPlacement = buildShipPlacement;
    this.allowDrop = allowDrop;
    this.buildInterface = buildInterface;
    this.placedRight = placedRight;
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
/* harmony import */ var _modules_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/styles.css */ "./src/modules/styles.css");





//import css from "./styles.css";
console.log(_modules_interface__WEBPACK_IMPORTED_MODULE_1__.iface)
console.log('conroller is', _modules_controller__WEBPACK_IMPORTED_MODULE_0__.controller)
_modules_interface__WEBPACK_IMPORTED_MODULE_1__.iface.buildInterface();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1T1g7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0FBQ3NEO0FBQ3VCO0FBQzlCO0FBQ007QUFDRjtBQUNKO0FBQ1Q7O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUIsd0JBQXdCLDBEQUFhLENBQUMsaUVBQW9CO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUUsR0FBRyxFQUFFO0FBQ3hEO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSw4Q0FBOEMsRUFBRSxHQUFHLEVBQUU7QUFDckQ7QUFDQTtBQUNBLE1BQU0sbUVBQWdCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGtCQUFrQixPQUFPO0FBQ3pCLG9CQUFvQixrREFBSzs7QUFFekIsSUFBSSxtRUFBZ0I7QUFDcEI7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixzREFBVSxFQUFFLE1BQU0sY0FBYztBQUNuRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixtREFBTyxFQUFFLE1BQU0sY0FBYztBQUNoRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixxREFBUyxFQUFFLE1BQU0sY0FBYztBQUNsRDs7QUFFQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELG1CQUFtQixtREFBTyxFQUFFLE1BQU0sY0FBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFVOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBVTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsUUFBUSxHQUFHLFFBQVE7QUFDakY7QUFDQSxJQUFJO0FBQ0osaUVBQWlFLFFBQVEsR0FBRyxRQUFRO0FBQ3BGO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJELEVBQUUsR0FBRyxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix3REFBd0QsRUFBRSxHQUFHLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxtREFBVTs7QUFFWjtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1EQUFVO0FBQ3pDLEVBQUUsbURBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFJLGlFQUFvQixNQUFNO0FBQ2hELG9CQUFvQiwwREFBYTtBQUNqQyxJQUFJLG1FQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsRUFBRSxtRUFBc0I7QUFDeEIsSUFBSSxtRUFBZ0I7QUFDcEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbGQwQzs7QUFFcEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBEQUFXO0FBQ3pCLE1BQU0sT0FBTyxRQUFRLHVEQUFRO0FBQzdCOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ0M7QUFDVDs7O0FBRzFDO0FBQ0EsWUFBWSxxREFBaUI7QUFDN0IsNEJBQTRCLDJEQUFVO0FBQ3RDLG9FQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3R5bGVzLmNzcz8xMDgwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVCb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSRVNFVCBTVFlMRVMgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcnJpd2VhdGhlclxcXCIsIHNlcmlmO1xcbn1cXG5cXG4vKiBTVFlMRVMgKi9cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTYwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDgwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzAwYjE0MDtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDEwcHggIzAwYjE0MCkgZHJvcC1zaGFkb3coMCAwIDIwcHggIzAwYjE0MClcXG4gICAgY29udHJhc3QoMikgYnJpZ2h0bmVzcygxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxNDEyMTI7XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubm90aWYtYXJlYSB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ubm90aWYtdXBwZXIsXFxuLm5vdGlmLWxvd2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogIzAwYjE0MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMjEyO1xcbiAgY29sb3I6ICMwMGIxNDA7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIxNDA7XFxuICBjb2xvcjogIzE0MTIxMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiMTQwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcXG4gIGdyaWQtcm93LWdhcDogMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtcm90YXRlZCB7XFxuICBsZWZ0OiAtOThweDtcXG4gIHRvcDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5jcnVpc2VyLXJvdGF0ZWQge1xcbiAgbGVmdDogLTU5cHg7XFxuICB0b3A6IDYycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5kZXN0cm95ZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtMzhweDtcXG4gIHRvcDogNDFweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmZyaWdhdGUtcm90YXRlZCB7XFxuICBsZWZ0OiAtMThweDtcXG4gIHRvcDogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxNHB4IDIzJSAxNHB4IDE3JTtcXG5cXG59XFxuXFxuLmZyaWdhdGUtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5oaXQtZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaXQtb2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbi8qXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNwdS1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNjJweDtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1yb3RhdGVkIHtcXG4gIGxlZnQ6IC05OHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNydWlzZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtNTlweDtcXG4gIHRvcDogNjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0zOHB4O1xcbiAgdG9wOiA0MXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZnJpZ2F0ZS1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0xOHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGl0LW9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbn1cXG4qL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCOztBQUVqQjs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakI7NkJBQzJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBK0ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJFU0VUIFNUWUxFUyAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyXFxcIiwgc2VyaWY7XFxufVxcblxcbi8qIFNUWUxFUyAqL1xcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwODBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMDBiMTQwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCAjMDBiMTQwKSBkcm9wLXNoYWRvdygwIDAgMjBweCAjMDBiMTQwKVxcbiAgICBjb250cmFzdCgyKSBicmlnaHRuZXNzKDEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzE0MTIxMjtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub3RpZi1hcmVhIHtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5ub3RpZi11cHBlcixcXG4ubm90aWYtbG93ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBiMTQwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDEyMTI7XFxuICBjb2xvcjogIzAwYjE0MDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5zdGFydC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjE0MDtcXG4gIGNvbG9yOiAjMTQxMjEyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY3B1LWJvYXJkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGxhY2VtZW50LWdyaWQtc3F1YXJlIHtcXG4gIHdpZHRoOiAxMCU7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGIxNDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1yb3RhdGVkIHtcXG4gIGxlZnQ6IC05OHB4O1xcbiAgdG9wOiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNydWlzZXItcm90YXRlZCB7XFxuICBsZWZ0OiAtNTlweDtcXG4gIHRvcDogNjJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmRlc3Ryb3llci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0zOHB4O1xcbiAgdG9wOiA0MXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZnJpZ2F0ZS1yb3RhdGVkIHtcXG4gIGxlZnQ6IC0xOHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDE0cHggMjMlIDE0cHggMTclO1xcblxcbn1cXG5cXG4uZnJpZ2F0ZS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuXFxuLmhpdC1lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpdC1vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuLypcXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG59XFxuXFxuLnBsYWNlbWVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY3B1LWJvYXJkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA2MnB4O1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5iYXR0bGVzaGlwLXJvdGF0ZWQge1xcbiAgbGVmdDogLTk4cHg7XFxuICB0b3A6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY3J1aXNlci1yb3RhdGVkIHtcXG4gIGxlZnQ6IC01OXB4O1xcbiAgdG9wOiA2MnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZGVzdHJveWVyLXJvdGF0ZWQge1xcbiAgbGVmdDogLTM4cHg7XFxuICB0b3A6IDQxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mcmlnYXRlLXJvdGF0ZWQge1xcbiAgbGVmdDogLTE4cHg7XFxuICB0b3A6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5oaXQtZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaXQtb2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcbiovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgU2hpcEZhY3RvcnkgfSBmcm9tIFwiLi9TaGlwRmFjdG9yeVwiO1xuXG5jb25zdCBidWlsZEJvYXJkID0gKCkgPT4ge1xuICAvLyBidWlsZCBhIDJkIGFycmF5IHJlcHJlc2VudGluZyBhIDEweDEwIGdhbWUgYm9hcmRcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9IGk7XG4gICAgY29uc3QgeEFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCB5ID0gaW5kZXg7XG4gICAgICBjb25zdCBzcSA9IG5ldyBTcXVhcmUoeCwgeSk7XG4gICAgICB4QXJyYXkucHVzaChzcSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goeEFycmF5KTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5mdW5jdGlvbiBwbGFjZVNoaXBPbkJvYXJkKHgsIHksIGhvcml6VmVydCwgc2hpcFR5cGUsIElEKSB7XG4gIGNvbnNvbGUubG9nKCdwbGFjZVNoaXBPbkJvYXJkIGNhbGxlZCB3aXRoJywgeCwgeSwgaG9yaXpWZXJ0LCBzaGlwVHlwZSwgSUQpO1xuICAvLyBtYWtlIGEgbmV3IHNoaXAgYWNjb3JkaW5nIHRvIHNoaXBUeXBlXG4gIGNvbnN0IG5ld1NoaXAgPSBTaGlwRmFjdG9yeS5TaGlwRmFjdG9yeShzaGlwVHlwZSk7XG4gIG5ld1NoaXAuZGlyZWN0aW9uID0gaG9yaXpWZXJ0O1xuICBjb25zdCBuZXdTaGlwTGVuZ3RoID0gbmV3U2hpcC5sZW5ndGg7XG4gIGlmIChJRCkgeyBcbiAgICBuZXdTaGlwLnNoaXBJRCA9IElEO1xuICB9XG5cbiAgLy8gdGhlIGZvbGxvd2luZyBpZiBzdGF0ZW1lbnRzIGNoZWNrIHRoYXQgdGhpcyBpcyBhIGxlZ2FsIHNoaXAgcGxhY2VtZW50XG4gIGlmIChob3JpelZlcnQgPT09IDApIHtcbiAgICBpZiAoeCArIG5ld1NoaXBMZW5ndGggPiAxMCkge1xuICAgICAgY29uc29sZS5sb2coJ3ggKyBuZXdTaGlwTGVuZ3RoID0gJywgeCArIG5ld1NoaXBMZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKHkgLSBuZXdTaGlwTGVuZ3RoIDwgLTEpIHtcbiAgICBjb25zb2xlLmxvZygneSAtIG5ld1NoaXBMZW5ndGggPSAnLCB5IC0gbmV3U2hpcExlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuY2hlY2tGb3JPY2N1cGFudHMoeCwgeSwgaG9yaXpWZXJ0LCBuZXdTaGlwTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgXG5cbiAgdGhpcy5zaGlwQXJyYXkucHVzaChuZXdTaGlwKTtcbiAgY29uc29sZS5sb2coJ3B1c2hlZCBzaGlwISBzaGlwQXJyYXkgaXMgbm93JywgdGhpcy5zaGlwQXJyYXkpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIC8vIGxvb3AgdGhyb3VnaCBuZXdTaGlwTGVuZ3RoIHNxdWFyZXMgaW5cbiAgLy8gdGhlIGRpcmVjdGlvbiBpbmRpY2F0ZWQgYnkgaG9yaXpWZXJ0LCBtb2RpZnlpbmcgdGhlaXIgb2NjdXBhbnRcbiAgLy8gYXR0cmlidXRlcyBhY2NvcmRpbmcgdG8gbmV3U2hpcCdzIElEXG4gIGNvbnNvbGUubG9nKFwibmV3U2hpcCBpc1wiLCBuZXdTaGlwKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobmV3U2hpcC5kaXJlY3Rpb24gPT09IDApIHtcbiAgICAgIC8vIGkuZS4gaWYgdGhpcyBzaGlwIGlzIHBsYWNlZCBob3Jpem9udGFsbHlcbiAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldLnBsYWNlU2hpcE9uU3F1YXJlKG5ld1NoaXAuc2hpcElEKTtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3ggKyBpXVt5XS5vY2N1cGFudCA9PT0gbmV3U2hpcC5zaGlwSUQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoZSBzaGlwIGlzIHBsYWNlZCB2ZXJ0aWNhbGx5XG4gICAgICB0aGlzLmJvYXJkW3hdW3kgLSBpXS5wbGFjZVNoaXBPblNxdWFyZShuZXdTaGlwLnNoaXBJRCk7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4XVt5IC0gaV0ub2NjdXBhbnQgPT09IG5ld1NoaXAuc2hpcElEKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFt4LCB5IC0gaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjaGVja0ZsZWV0U3VuaygpIHtcbiAgLy8gTG9vcHMgdGhyb3VnaCB0aGlzLnNoaXBBcnJheSwgY2hlY2tpbmcgZWFjaCBzaGlwcyAuc3VuayBwcm9wZXJ0eS4gSWZcbiAgLy8gYW55IHVuc3VuayBzaGlwIGlzIGZvdW5kLCByZXR1cm5zIGZhbHNlIC0gb3RoZXJ3aXNlLCByZXR1cm5zIHRydWUuXG4gIGxldCByZXN1bHQgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcEFycmF5W2ldO1xuICAgIGlmICghc2hpcC5zdW5rKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKHJlc3VsdCkge1xuICAgIGFsZXJ0KFwiZ2FtZSBvdmVyISFcIik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5mdW5jdGlvbiBnZXRTaGlwKElEKSB7XG4gIC8vIExvb3BzIHRocm91Z2ggdGhpcy5zaGlwQXJyYXksIGNoZWNraW5nIGZvciBhbmQgcmV0dXJuaW5nIHRoZVxuICAvLyBvYmplY3Qgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBJRC5cbiAgY29uc3QgYXJyYXkgPSB0aGlzLnNoaXBBcnJheTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXAgPSBhcnJheVtpXTtcbiAgICBpZiAoc2hpcC5zaGlwSUQgPT09IElEKSB7XG4gICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZHMpIHtcbiAgLy8gd2UgbG9vayB1cCB0aGUgZ2l2ZW4gc3F1YXJlLiBpZiB0aGVyZSBpcyBhbiBvY2N1cGFudCwgd2UgZ2V0IHRoZSBzaGlwJ3NcbiAgLy8gb2JqZWN0IHVzaW5nIGdldFNoaXAoKSBhbmQgY2FsbCBpdHMgaGl0KCkgbWV0aG9kXG4gIGNvbnN0IHggPSBjb29yZHNbMF07XG4gIGNvbnN0IHkgPSBjb29yZHNbMV07XG4gIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyVHlwZTtcbiAgaWYgKHRoaXMuYm9hcmRbeF1beV0uaGl0ID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuZ2V0U2hpcCh0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50KTtcbiAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCA9IHRydWU7XG4gICAgY29uc3Qgc3RhdHVzID0gc2hpcC5oaXQoKTtcbiAgICBsZXQgY2hlY2tGbGVldDtcbiAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICBjb25zdCBjaGVja1BsYXllckZsZWV0U3VuayA9IGNoZWNrRmxlZXRTdW5rLmJpbmQocGxheWVyQm9hcmQpO1xuICAgICAgY2hlY2tGbGVldCA9IGNoZWNrUGxheWVyRmxlZXRTdW5rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoZWNrQ3B1RmxlZXRTdW5rID0gY2hlY2tGbGVldFN1bmsuYmluZChjcHVCb2FyZCk7XG4gICAgICBjaGVja0ZsZWV0ID0gY2hlY2tDcHVGbGVldFN1bmsoKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrRmxlZXQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBcImdhbWVPdmVyXCI7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IFwic3Vua1wiKSB7XG4gICAgICByZXR1cm4gXCJzdW5rXCI7XG4gICAgfVxuICAgIHJldHVybiBcImhpdFwiO1xuICB9XG4gIHRoaXMuYm9hcmRbeF1beV0uaGl0ID0gdHJ1ZTtcbiAgcmV0dXJuIFwibWlzc1wiO1xufVxuXG5mdW5jdGlvbiBjaGVja0Zvck9jY3VwYW50cyh4LCB5LCBob3JpelZlcnQsIGxlbmd0aCkge1xuICBpZiAoaG9yaXpWZXJ0ID09PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgaWYgKGVsZW1lbnQub2NjdXBhbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJvYXJkW3hdW3kgLSBpXTtcbiAgICAgIGlmIChlbGVtZW50Lm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVNoaXAoSUQpIHtcbiAgLy8gbG9vcHMgdGhyb3VnaCB0aGlzLnNoaXBBcnJheS4gdXBvbiBmaW5kaW5nIHNoaXAgd2l0aCB0aGUgZ2l2ZW4gSUQsXG4gIC8vIGRlbGV0ZXMgaXRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkgeyBcbiAgICBpZiAodGhpcy5zaGlwQXJyYXlbaV0uc2hpcElEID09PSBJRCkge1xuICAgICAgY29uc29sZS5sb2coJ2ZvdW5kIHNoaXAhISB0aGlzLnNoaXBBcnJheSBpcycsIHRoaXMuc2hpcEFycmF5KTtcbiAgICAgIHRoaXMuc2hpcEFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVkIHNoaXAhIHRoaXMuc2hpcEFycmF5IGlzIG5vdycsIHRoaXMuc2hpcEFycmF5KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcGluU3RvcmFnZSh4LCB5KSB7XG4gIC8vIGZpbmQgdGhlIHNoaXAgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzIGFuZCBnZXQgaXRzIGRpcmVjdGlvblxuICBjb25zb2xlLmxvZygncm90YXRpbmcgc2hpcCEgdGhpcy5ib2FyZFt4XVt5XSBpcycsIHRoaXMuYm9hcmRbeF1beV0pXG4gIC8qaWYgKHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQgPT09IG51bGwpIHsgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9Ki9cbiAgY29uc3Qgc2hpcElEID0gdGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudDtcbiAgY29uc29sZS5sb2coJ3NoaXBJRCBpcycsIHNoaXBJRCk7XG4gIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAodGhpcy5ib2FyZFt4XVt5XS5vY2N1cGFudCk7XG4gIGNvbnNvbGUubG9nKCdnb3Qgc2hpcCEgc2hpcCBpcycsIHNoaXApXG4gIGNvbnN0IGRpciA9IHNoaXAuZGlyZWN0aW9uO1xuXG4gIC8vIGRlbGV0ZSB0aGUgc2hpcCBmcm9tIHNoaXBBcnJheVxuICBjb25zb2xlLmxvZyhcInJvdGF0aW5nIHNoaXAhIHRoaXMgaXNcIiwgdGhpcyk7XG4gIHRoaXMuZGVsZXRlU2hpcChzaGlwSUQpO1xuXG4gIGxldCByZXN1bHQ7XG5cbiAgaWYgKGRpciA9PT0gMCkge1xuICAgIC8vIGlmIHRoZSBzaGlwIGlzIGhvcml6b250YWwsIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCBob3Jpem9udGFsbHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHhFbGVtZW50ID0gdGhpcy5ib2FyZFt4ICsgaV1beV07XG4gICAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nIHNxdWFyZXMhIHhFbGVtZW50Lm9jY3VwYW50ID1cIiwgeEVsZW1lbnQpO1xuICAgICAgeEVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgICAgY29uc29sZS5sb2coXCJjbGVhcmVkIHNxdWFyZSEgeEVsZW1lbnQub2NjdXBhbnQgPVwiLCB4RWxlbWVudCk7XG4gICAgfVxuICAgIFxuICAgIC8vIGNoZWNrIHRoYXQgdGhlIHNxdWFyZXMgd2Ugd2lsbCBwbGFjZSB0aGUgc2hpcCBpbiBhcmUgbm90IG9jY3VwaWVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB5RWxlbWVudCA9IHRoaXMuYm9hcmRbeF1beSAtIGldO1xuICAgICAgaWYgKHlFbGVtZW50Lm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5RWxlbWVudCBpcyAnLCB5RWxlbWVudClcbiAgICAgICAgY29uc29sZS5sb2coJ3lFbGVtZW50Lm9jY3VwYW50IGlzICcsIHlFbGVtZW50Lm9jY3VwYW50LCAnbm90IG51bGwnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIGhhdmluZyByZW1vdmVkIHRoZSBzaGlwLCBwbGFjZSBpdCB3aXRoIHRoZSBuZXcgZGlyZWN0aW9uXG4gICAgcmVzdWx0ID0gdGhpcy5wbGFjZVNoaXBPbkJvYXJkKHgsIHksIDEsIHNoaXAubGVuZ3RoLCBzaGlwSUQpO1xuICB9IGVsc2Uge1xuICAgIC8vIGVsc2UgY2xlYXIgdGhlIGJvYXJkIG9mIHRoZSBzaGlwIHZlcnRpY2FsbHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHlFbGVtZW50ID0gdGhpcy5ib2FyZFt4XVt5IC0gaV07XG4gICAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nIHNxdWFyZXMhIHlFbGVtZW50Lm9jY3VwYW50ID1cIiwgeUVsZW1lbnQub2NjdXBhbnQpO1xuICAgICAgeUVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgICAgY29uc29sZS5sb2coXCJjbGVhcmVkIHNxdWFyZSEgeUVsZW1lbnQub2NjdXBhbnQgPVwiLCB5RWxlbWVudC5vY2N1cGFudCk7XG4gICAgfVxuICAgIFxuICAgIC8vIGNoZWNrIHRoYXQgdGhlIHNxdWFyZXMgd2Ugd2lsbCBwbGFjZSB0aGUgc2hpcCBpbiBhcmUgbm90IG9jY3VwaWVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4RWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgaWYgKHhFbGVtZW50Lm9jY3VwYW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd4RWxlbWVudCBpcyAnLCB4RWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd4RWxlbWVudC5vY2N1cGFudCBpcyAnLCB4RWxlbWVudC5vY2N1cGFudCwgJ25vdCBudWxsJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhhdmluZyByZW1vdmVkIHRoZSBzaGlwLCByZXBsYWNlIGl0IHdpdGggdGhlIG5ldyBkaXJlY3Rpb25cbiAgICByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcE9uQm9hcmQoeCwgeSwgMCwgc2hpcC5sZW5ndGgsIHNoaXBJRCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW92ZVNoaXBJblN0b3JhZ2UoeCwgeSwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxlZCBtb3ZlU2hpcEluU3RvcmFnZSEhJyk7XG4gIC8vIGZpbmQgdGhlIHNoaXAgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzIGFuZCBnZXQgaXRzIGRpcmVjdGlvblxuICBjb25zdCBzaGlwSUQgPSB0aGlzLmJvYXJkW3hdW3ldLm9jY3VwYW50O1xuICBjb25zdCBzaGlwID0gdGhpcy5nZXRTaGlwKHRoaXMuYm9hcmRbeF1beV0ub2NjdXBhbnQpO1xuICBjb25zb2xlLmxvZygnc2hpcCBpcycsIHNoaXApXG4gIGlmIChzaGlwID09PSB1bmRlZmluZWQpIHsgXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gc2hpcCBhdCB0aGVzZSBjb29yZHMsIGl0J3MgYmVjYXVzZSB0aGVyZSB3YXMgYW4gaW52YWxpZFxuICAgIC8vIHNoaXAgcGxhY2VtZW50LiBUaGVyZXJlZm9yZSwgdGhlcmUgaXMgbm8gc2hpcCB0byBkZWxldGUuIFNvLCByZXR1cm4uXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRpciA9IHNoaXAuZGlyZWN0aW9uO1xuXG4gIC8vIGRlbGV0ZSB0aGUgc2hpcCBmcm9tIHNoaXBBcnJheVxuICB0aGlzLmRlbGV0ZVNoaXAoc2hpcElEKTtcblxuICAvLyBjbGVhciB0aGUgYm9hcmQgb2YgdGhlIHNoaXBcbiAgaWYgKGRpciA9PT0gMCkge1xuICAgIC8vIGlmIHRoZSBzaGlwIGlzIGhvcml6b250YWwsIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCBob3Jpem9udGFsbHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4RWxlbWVudCA9IHRoaXMuYm9hcmRbeCArIGldW3ldO1xuICAgICAgeEVsZW1lbnQub2NjdXBhbnQgPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBlbHNlIGNsZWFyIHRoZSBib2FyZCBvZiB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeUVsZW1lbnQgPSB0aGlzLmJvYXJkW3hdW3kgLSBpXTtcbiAgICAgIHlFbGVtZW50Lm9jY3VwYW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBwbGFjZSB0aGUgc2hpcCBvbiB0aGUgYm9hcmRcbn1cblxuY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gYnVpbGRCb2FyZCgpO1xuICAgIHRoaXMuc2hpcEFycmF5ID0gW107XG4gICAgdGhpcy5wbGFjZVNoaXBPbkJvYXJkID0gcGxhY2VTaGlwT25Cb2FyZDtcbiAgICB0aGlzLmNoZWNrRm9yT2NjdXBhbnRzID0gY2hlY2tGb3JPY2N1cGFudHM7XG4gICAgdGhpcy5yZWNlaXZlQXR0YWNrID0gcmVjZWl2ZUF0dGFjaztcbiAgICB0aGlzLmdldFNoaXAgPSBnZXRTaGlwO1xuICAgIHRoaXMuY2hlY2tGbGVldFN1bmsgPSBjaGVja0ZsZWV0U3VuaztcbiAgICB0aGlzLnJvdGF0ZVNoaXBpblN0b3JhZ2UgPSByb3RhdGVTaGlwaW5TdG9yYWdlO1xuICAgIHRoaXMuZGVsZXRlU2hpcCA9IGRlbGV0ZVNoaXA7XG4gICAgdGhpcy5tb3ZlU2hpcEluU3RvcmFnZSA9IG1vdmVTaGlwSW5TdG9yYWdlO1xuICB9XG59XG5cbmNsYXNzIFNxdWFyZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB4ID0geCB8fCAwOyAvLyBjb252ZXJ0cyBmYWxzZXkgdmFsdWVzIHRvIDAgKGluIHRoaXMgY2FzZSwgTmFOKVxuICAgIHRoaXMueHkgPSBbeCwgeV07XG4gICAgdGhpcy5vY2N1cGFudCA9IG51bGw7XG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgfVxuXG4gIHBsYWNlU2hpcE9uU3F1YXJlKHNoaXBJRCkge1xuICAgIHRoaXMub2NjdXBhbnQgPSBzaGlwSUQ7XG4gIH1cbn1cblxuY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmQoKTtcbmNvbnN0IGNwdUJvYXJkID0gbmV3IEJvYXJkKCk7XG5cbi8qY29uc3QgY2hlY2tQbGF5ZXJGbGVldFN1bmsgPSBjaGVja0ZsZWV0U3Vuay5iaW5kKHBsYXllckJvYXJkKTtcbmNvbnNvbGUubG9nKCdjaGVja1BsYXllckZsZWV0U3VuayBpcycsIGNoZWNrUGxheWVyRmxlZXRTdW5rKVxuY29uc29sZS5sb2coJ2NoZWNrcGxheWVyRmxlZXRTdW5rKCkgaXMnLCBjaGVja1BsYXllckZsZWV0U3VuaygpKVxuY29uc3QgY2hlY2tDcHVGbGVldFN1bmsgPSBjaGVja0ZsZWV0U3Vuay5iaW5kKGNwdUJvYXJkKTtcbmNvbnNvbGUubG9nKCdjaGVja0NwdUZsZWV0U3VuayBpcycsIGNoZWNrQ3B1RmxlZXRTdW5rKSovXG5cbmV4cG9ydCB7XG4gIGJ1aWxkQm9hcmQsXG4gIHBsYWNlU2hpcE9uQm9hcmQsXG4gIGNoZWNrRmxlZXRTdW5rLFxuICBnZXRTaGlwLFxuICByZWNlaXZlQXR0YWNrLFxuICBjaGVja0Zvck9jY3VwYW50cyxcbiAgZGVsZXRlU2hpcCxcbiAgbW92ZVNoaXBJblN0b3JhZ2UsXG4gIHBsYXllckJvYXJkLFxuICBjcHVCb2FyZCxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbmV4cG9ydCBjb25zdCBTaGlwRmFjdG9yeSA9ICgoKSA9PiB7XG4gIGxldCBzaGlwQ291bnRlciA9IC0xO1xuICBjb25zdCBTaGlwRmFjdG9yeSA9IChzaGlwVHlwZSkgPT4ge1xuICAgIHNoaXBDb3VudGVyICs9IDE7XG4gICAgY29uc3Qgc2hpcElEID0gc2hpcENvdW50ZXI7XG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IGxlbmd0aDtcbiAgICBsZXQgaHA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHNoaXBUeXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHR5cGUgPSBcIlNpbmsgdGVzdFwiO1xuICAgICAgICBsZW5ndGggPSA2O1xuICAgICAgICBocCA9IDE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHR5cGUgPSBcIkZyaWdhdGVcIjtcbiAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgaHAgPSAyO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICB0eXBlID0gXCJEZXN0cm95ZXJcIjtcbiAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgaHAgPSAzO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICB0eXBlID0gXCJDcnVpc2VyXCI7XG4gICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgIGhwID0gNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHR5cGUgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICAgICAgbGVuZ3RoID0gNjtcbiAgICAgICAgaHAgPSA2O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBsZW5ndGgsXG4gICAgICBocCxcbiAgICAgIHN1bmssXG4gICAgICBzaGlwSUQsXG4gICAgICBjaGVja1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgICAgfSxcbiAgICAgIGhpdCgpIHtcbiAgICAgICAgaHAgLT0gMTtcbiAgICAgICAgaWYgKGhwID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gXCJzdW5rXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIHJldHVybiB7IFNoaXBGYWN0b3J5IH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZygnY29tcG9uZW50RmFjdG9yeSBjYWxsZWQgd2l0aCBlbGVtZW50ID0gJywgZWxlbWVudCk7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIG5vZGVUeXBlLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0LFxuICAgIGlucHV0VHlwZSxcbiAgICB2YWx1ZSxcbiAgICBjbGFzczEsXG4gICAgY2xhc3MyLFxuICAgIGNsYXNzMyxcbiAgICB0YXNrSUQsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaWQsXG4gICAgeHksXG4gICAgYWxsb3dEcm9wLFxuICB9ID0gZWxlbWVudDtcbiAgY29uc3QgY3JlYXRlRE9NTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuICAgIGNvbnN0IG5ld0RPTU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RE9NTm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaW5wdXRUeXBlKSB7XG4gICAgICBuZXdET01Ob2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RE9NTm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2xhc3MxKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MxKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMikge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgfVxuICAgIGlmIChjbGFzczMpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczMpO1xuICAgIH1cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIG5ld0RPTU5vZGUucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIG5ld0RPTU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50IGhhcyBpZCEgaWQgPSAnLCBpZCk7XG4gICAgICBuZXdET01Ob2RlLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgaWYgKHh5KSB7XG4gICAgICBuZXdET01Ob2RlLmRhdGFzZXQueCA9IHh5WzBdO1xuICAgICAgbmV3RE9NTm9kZS5kYXRhc2V0LnkgPSB4eVsxXTtcbiAgICAgIG5ld0RPTU5vZGUuZGF0YXNldC5zcW51bSA9IHh5WzJdO1xuICAgIH1cbiAgICBpZiAoYWxsb3dEcm9wKSB7XG4gICAgICBuZXdET01Ob2RlLnNldEF0dHJpYnV0ZShcIm9uZHJvcFwiLCBcImRyb3AoZXZlbnQpXCIpO1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoXCJvbmRyYWdvdmVyXCIsIFwiYWxsb3dEcm9wKGV2ZW50KVwiKTtcbiAgICB9XG4gICAgcGFyZW50Tm9kZS5hcHBlbmQobmV3RE9NTm9kZSk7XG4gIH07XG4gIGNyZWF0ZURPTU5vZGUoKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgbm9kZVR5cGUsXG4gICAgcGFyZW50LFxuICAgIHRleHQsXG4gICAgaW5wdXRUeXBlLFxuICAgIHZhbHVlLFxuICAgIGNsYXNzMSxcbiAgICBjbGFzczIsXG4gICAgdGFza0lELFxuICB9O1xufTtcblxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBwbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaWZhY2UgZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmNsYXNzIFRvcGljIHtcbiAgY29uc3RydWN0b3IodG9waWMpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gW107XG4gIH1cbn1cblxuY2xhc3MgUHViU3ViIHtcbiAgc3ViKHRvcGljLCBzdWJzY3JpYmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJzdWIhIHRvcGljIGlzXCIsIHRvcGljKTtcbiAgICBpZiAodHlwZW9mIHN1YnNjcmliZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGAke3R5cGVvZiBzdWJzY3JpYmVyfSBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCBmb3Igc3Vic2NyaWJlcnNgO1xuICAgIH1cbiAgICBpZiAoIXRoaXNbdG9waWNdKSB7XG4gICAgICB0aGlzW3RvcGljXSA9IG5ldyBUb3BpYygpO1xuICAgIH1cbiAgICB0aGlzW3RvcGljXS5zdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgIGNvbnNvbGUubG9nKFwic3ViYmVkISB0aGlzW3RvcGljXSA9IFwiLCB0aGlzW3RvcGljXSk7XG4gIH1cblxuICB1bnN1Yih0b3BpYywgc3Vic2NyaWJlcikge1xuICAgIGlmICh0eXBlb2Ygc3Vic2NyaWJlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gYCR7dHlwZW9mIHN1YnNjcmliZXJ9IGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50IGZvciB1bnN1YnNjcmliaW5nYDtcbiAgICB9XG4gICAgaWYgKHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLmluY2x1ZGVzKHN1YnNjcmliZXIpKSB7XG4gICAgICB0aGlzW3RvcGljXS5zdWJzY3JpYmVycyA9IHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLmZpbHRlcihcbiAgICAgICAgKHN1YikgPT4gc3ViICE9PSBzdWJzY3JpYmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1Yih0b3BpYywgcGF5bG9hZCkge1xuICAgIGNvbnNvbGUubG9nKFwicHViIGNhbGxlZCEgdG9waWMsIHBheWxvYWQgYXJlIFwiLCB0b3BpYywgcGF5bG9hZCk7XG4gICAgdGhpc1t0b3BpY10uc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3ViKSA9PiBzdWIocGF5bG9hZCkpO1xuICB9XG5cbiAgcmV0dXJuU3Vic2NyaWJlcnModG9waWMpIHtcbiAgICBjb25zb2xlLmxvZyhcInJldHVyblN1YnNjcmliZXJzIGNhbGxlZCEgdG9waWMgaXMgXCIsIHRvcGljLCBcInRoaXMgaXMgXCIsIHRoaXMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXNbdG9waWNdLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YikgPT4gcmVzdWx0LnB1c2goc3ViKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90U2VydiA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwibm90aWZpY2F0aW9uIHNlcnZlciEgYXJnc1swXVswXSBpcyBcIiwgYXJnc1swXVswXSk7XG4gIGlmIChhcmdzWzBdID09PSBcInNoaXBzUGxhY2VkXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcInNoaXBzUGxhY2VkIG5vdGlmaWNhdGlvbiByZWNlaXZlZCFcIik7XG4gIH1cblxuICBpZiAoYXJnc1swXVswXSA9PT0gXCJzaGlwRHJvcHBlZFwiKSB7XG4gICAgY29uc29sZS5sb2coXCJzaGlwRHJvcHBlZCBub3RpZmljYXRpb24gcmVjZWl2ZWQhXCIpO1xuICB9XG59O1xuXG4vKmNvbnRyb2xsZXIucHViU3ViLnB1YihcInBsYWNlU2hpcFwiLCBbTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCksXG4gIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpLFxuICBOdW1iZXIoZHJhZ1N0b3JhZ2UuZGF0YXNldC5kaXJlY3Rpb24pLFxuICBOdW1iZXIoZHJhZ1N0b3JhZ2UuZGF0YXNldC5sZW5ndGgpXSApKi9cblxuY29uc3QgcHViU3ViID0gbmV3IFB1YlN1YigpO1xuXG5jb25zdCBjb2luRmxpcCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMTtcblxuLy8gRXZlbnQgZW1pdHRlciBmb3IgcHViL3N1YiBpbXBsZW1lbnRhdGlvblxuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gcHVsbHMgaW4gcGxheWVycyBhbmQgYm9hcmQgZnJvbSBwbGF5ZXJGYWN0b3J5XG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVyRmFjdG9yeSgpO1xuICAgIC8vIGZsaXBzIGEgY29pbiB0byBkZXRlcm1pbmUgd2hvIGdvZXMgZmlyc3RcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBjb2luRmxpcCgpO1xuICAgIHRoaXMuc2hpcHNQbGFjZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwUGxhY2VkQ291bnQgPSAwO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIGlmIChjb2luRmxpcCgpID09PSAxKSB7XG4gICAgICB0aGlzLmdhbWVGbG93KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbWVGbG93KDIpO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVGbG93KHdob3NlVHVybikge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdhbWUgaXMgb3ZlciFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3aG9zZVR1cm4gPT09IDEpIHtcbiAgICAgIC8vIHByb21wdCBwbGF5ZXIgZm9yIGEgbW92ZVxuICAgICAgcHViU3ViLnB1YihcImdldFBsYXllcnNNb3ZlXCIsIGlmYWNlLmdldFBsYXllcnNNb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcHJvbXB0IGNwdSBmb3IgYSBtb3ZlXG4gICAgICBnZXRDUFVNb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVGVzdFNoaXBzKCkge1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAwLCAwLCA2KTtcbiAgICB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMSwgMCwgNCk7XG4gICAgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDIsIDAsIDMpO1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAzLCAwLCAyKTtcbiAgICB0aGlzLnBsYXllcnMuY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDAsIDAsIDYpO1xuICAgIHRoaXMucGxheWVycy5jcHUuYm9hcmQuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoMCwgMSwgMCwgNCk7XG4gICAgdGhpcy5wbGF5ZXJzLmNwdS5ib2FyZC5nYW1lQm9hcmQucGxhY2VTaGlwT25Cb2FyZCgwLCAyLCAwLCAzKTtcbiAgICB0aGlzLnBsYXllcnMuY3B1LmJvYXJkLmdhbWVCb2FyZC5wbGFjZVNoaXBPbkJvYXJkKDAsIDMsIDAsIDIpO1xuICB9XG5cbiAgc2hpcFBsYWNlZChyZXN1bHQpIHtcbiAgICB0aGlzLnNoaXBQbGFjZWRDb3VudCArPSAxO1xuICAgIGNvbnNvbGUubG9nKCcqKioqKioqKnNoaXBQbGFjZWQhIHJlc3VsdCBpcycsIHJlc3VsdCk7XG4gICAgY29uc3QgdHlwZSA9IHJlc3VsdC5sZW5ndGg7XG4gICAgcHViU3ViLnB1YihcInBsYWNlZFJpZ2h0XCIsIHR5cGUpO1xuICAgIGNvbnNvbGUubG9nKCd0eXBlIGlzICcsIHR5cGUpO1xuXG4gICAgaWYgKHRoaXMuc2hpcFBsYWNlZENvdW50ID09PSA0KSB7XG4gICAgICB0aGlzLnNoaXBzUGxhY2VkID0gdHJ1ZTtcbiAgICAgIHB1YlN1Yi5wdWIoXCJzaGlwc1BsYWNlZFwiLCBpZmFjZS5zaGlwc1BsYWNlZCk7XG4gICAgfVxuICB9XG5cbiAgcGxheWVyc01vdmUobW92ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGxheWVycy5jcHUuYm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICBjb25zb2xlLmxvZygncGxheWVyc01vdmUhIG1vdmUgaXMgJywgbW92ZSk7XG4gICAgbGV0IHJlc3VsdEFycmF5ID0gW107XG4gICAgcmVzdWx0QXJyYXkucHVzaChtb3ZlWzBdLCBtb3ZlWzFdKTtcbiAgICBpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKHRydWUsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2goZmFsc2UsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzdW5rXCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgZmFsc2UpO1xuICAgICAgLy8gY2hhbmdlIHRoZSBiZWxvdyB0byB1c2UgcHViL3N1YiB0b29cbiAgICAgIHB1YlN1Yi5wdWIoXCJzdW5rXCIsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImdhbWVPdmVyXCIpIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgcHViU3ViLnB1YihcImdhbWVPdmVyXCIsIFwiWW91IHdpblwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICBwdWJTdWIucHViKFwiaW52YWxpZFwiKTtcbiAgICAgIHRoaXMuZ2FtZUZsb3coMSk7XG4gICAgfVxuICAgIHB1YlN1Yi5wdWIoXCJtYXJrU3F1YXJlSGl0XCIsIHJlc3VsdEFycmF5KTtcbiAgICB0aGlzLmdhbWVGbG93KDIpO1xuICB9XG5cbiAgZ2V0Q1BVTW92ZSgpIHtcbiAgICBjb25zdCBtb3ZlID0gdGhpcy5wbGF5ZXJzLmNwdS5hdHRhY2soKTtcbiAgICBjb25zb2xlLmxvZygnZ2V0Q1BVTW92ZSEgbW92ZSBpcyAnLCBtb3ZlKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICBjb25zb2xlLmxvZygnZ2V0Q1BVTW92ZSEgcmVzdWx0IGlzICcsIHJlc3VsdClcbiAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgICByZXN1bHRBcnJheS5wdXNoKG1vdmVbMF0sIG1vdmVbMV0pO1xuICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJzdW5rXCIpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2godHJ1ZSwgdHJ1ZSk7XG4gICAgICBwdWJTdWIucHViKFwic3Vua1wiLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiZ2FtZU92ZXJcIikge1xuICAgICAgcHViU3ViLnB1YihcImdhbWVPdmVyXCIsIFwiVGhlIGNvbXB1dGVyIHdpbnMhXCIpO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiZmFsc2VcIikge1xuICAgICAgZ2V0Q1BVTW92ZSgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygncGFzc2VkIHRoZSBpZi9lbHNlJyk7XG4gICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHsgXG4gICAgICBwdWJTdWIucHViKFwibWFya1NxdWFyZUhpdFwiLCByZXN1bHRBcnJheSk7XG4gICAgICB0aGlzLmdhbWVGbG93KDEpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlSHVtYW4oc2hpcCkge1xuICAgIGNvbnNvbGUubG9nKCdwbGFjZUh1bWFuIGNhbGxlZCEgc2hpcCBpcyAnLCBzaGlwKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQucGxhY2VTaGlwT25Cb2FyZChcbiAgICAgIHNoaXBbMF0sXG4gICAgICBzaGlwWzFdLFxuICAgICAgc2hpcFsyXSxcbiAgICAgIHNoaXBbM11cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKCdyZXN1bHQgaXMgJywgcmVzdWx0KTtcbiAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgcGxhY2VkU2hpcChyZXN1bHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwdWJTdWIucHViKFwicGxhY2VkV3JvbmdcIiwgc2hpcFszXSk7XG4gIH1cblxuICByb3RhdGVTaGlwKGNvb3Jkcykge1xuICAgIGNvbnNvbGUubG9nKFwicHViU3ViIGNhbGxlZCByb3RhdGVTaGlwIVwiLCBjb29yZHMpO1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5yb3RhdGVTaGlwaW5TdG9yYWdlKE51bWJlcihjb29yZHNbMF0pLCBOdW1iZXIoY29vcmRzWzFdKSk7XG4gIH1cblxuICBtb3ZlU2hpcChkZXRhaWxzKSB7XG4gICAgY29uc29sZS5sb2coXCJwdWJTdWIgY2FsbGVkIG1vdmVTaGlwISBkZXRhaWxzIGFyZSBcIiwgZGV0YWlscyk7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLnBsYXllcnMuaHVtYW4uYm9hcmQgPSBcIiwgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkKTtcbiAgICBjb25zb2xlLmxvZygnbW92ZVNoaXAgPSAnLCBtb3ZlU2hpcCk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMucGxheWVycy5odW1hbi5ib2FyZC5nZXRTaGlwID0gJywgdGhpcy5wbGF5ZXJzLmh1bWFuLmJvYXJkLmdldFNoaXApO1xuICAgIHRoaXMucGxheWVycy5odW1hbi5ib2FyZC5tb3ZlU2hpcEluU3RvcmFnZShkZXRhaWxzWzBdLCBkZXRhaWxzWzFdLCBkZXRhaWxzWzJdLCBkZXRhaWxzWzNdKTtcbiAgfVxuXG5cbn1cblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cbmNvbnN0IHBsYWNlZFNoaXAgPSBjb250cm9sbGVyLnNoaXBQbGFjZWQuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IHN0YXJ0R2FtZSA9IGNvbnRyb2xsZXIuc3RhcnRHYW1lLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBwbGF5ZXJzTW92ZSA9IGNvbnRyb2xsZXIucGxheWVyc01vdmUuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IGdldENQVU1vdmUgPSBjb250cm9sbGVyLmdldENQVU1vdmUuYmluZChjb250cm9sbGVyKTtcbmNvbnN0IHBsYWNlSHVtYW5TaGlwID0gY29udHJvbGxlci5wbGFjZUh1bWFuLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCByb3RhdGVTaGlwID0gY29udHJvbGxlci5yb3RhdGVTaGlwLmJpbmQoY29udHJvbGxlcik7XG5jb25zdCBtb3ZlU2hpcCA9IGNvbnRyb2xsZXIubW92ZVNoaXAuYmluZChjb250cm9sbGVyKTtcblxuXG5wdWJTdWIuc3ViKFwicGxhY2VTaGlwXCIsIHBsYWNlSHVtYW5TaGlwKTtcbnB1YlN1Yi5zdWIoXCJzaGlwc1BsYWNlZFwiLCBpZmFjZS5zaGlwc1BsYWNlZCk7XG5wdWJTdWIuc3ViKFwiZ2FtZVN0YXJ0XCIsIHN0YXJ0R2FtZSk7XG5wdWJTdWIuc3ViKFwiZ2V0UGxheWVyc01vdmVcIiwgaWZhY2UuZ2V0UGxheWVyTW92ZSk7XG5wdWJTdWIuc3ViKFwicGxheWVyc01vdmVcIiwgcGxheWVyc01vdmUpO1xucHViU3ViLnN1YihcInJvdGF0ZVNoaXBcIiwgcm90YXRlU2hpcCk7XG5wdWJTdWIuc3ViKFwibW92ZVNoaXBcIiwgbW92ZVNoaXApO1xucHViU3ViLnN1YihcImdldFBsYXllck1vdmVcIiwgaWZhY2UuZ2V0UGxheWVyTW92ZSk7XG5wdWJTdWIuc3ViKFwibWFya1NxdWFyZUhpdFwiLCBpZmFjZS5tYXJrU3F1YXJlSGl0KTtcbnB1YlN1Yi5zdWIoXCJzdW5rXCIsIGlmYWNlLnN1bmspO1xucHViU3ViLnN1YihcImdhbWVPdmVyXCIsIGlmYWNlLmdhbWVPdmVyKTtcbnB1YlN1Yi5zdWIoXCJpbnZhbGlkXCIsIGlmYWNlLmludmFsaWRNb3ZlKTtcbnB1YlN1Yi5zdWIoXCJwbGFjZWRSaWdodFwiLCBpZmFjZS5wbGFjZWRSaWdodCk7XG5wdWJTdWIuc3ViKFwicGxhY2VkV3JvbmdcIiwgaWZhY2UucGxhY2VkV3JvbmcpO1xuY29uc29sZS5sb2coXCJzdWJzIGFyZVwiLCBwdWJTdWIucmV0dXJuU3Vic2NyaWJlcnMoXCJwbGFjZVNoaXBcIikpO1xuXG5leHBvcnQgeyBwdWJTdWIgfTtcbiIsImV4cG9ydCBjb25zdCBkaXNwbGF5T2JqZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwibWFpblwiLFxuICAgIG5vZGVUeXBlOiBcIm1haW5cIixcbiAgICBwYXJlbnQ6IFwiYm9keVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJnYW1lQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIm1haW5cIixcbiAgICBjbGFzczE6IFwiZ2FtZS1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibm90aWZBcmVhXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5nYW1lLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJub3RpZi1hcmVhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIm5vdGlmVXBwZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLm5vdGlmLWFyZWFcIixcbiAgICBjbGFzczE6IFwibm90aWYtdXBwZXJcIixcbiAgfSxcbiAgeyBcbiAgICBuYW1lOiBcIm5vdGlmTG93ZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLm5vdGlmLWFyZWFcIixcbiAgICBjbGFzczE6IFwibm90aWYtbG93ZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibWFpblRpdGxlXCIsXG4gICAgbm9kZVR5cGU6IFwiaDFcIixcbiAgICBwYXJlbnQ6IFwiLm5vdGlmLXVwcGVyXCIsXG4gICAgY2xhc3MxOiBcInRpdGxlXCIsXG4gICAgdGV4dDogXCJCQVRUTEVTSElQXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIm5vdGlmc1wiLFxuICAgIG5vZGVUeXBlOiBcImgzXCIsXG4gICAgcGFyZW50OiBcIi5ub3RpZi1sb3dlclwiLFxuICAgIGNsYXNzMTogXCJub3RpZnNcIixcbiAgICB0ZXh0OiBcIlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzdGFydEJ1dHRvblwiLFxuICAgIG5vZGVUeXBlOiBcImlucHV0XCIsXG4gICAgcGFyZW50OiBcIi5nYW1lLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzdGFydC1idXR0b25cIixcbiAgICBpbnB1dFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgdmFsdWU6IFwiU3RhcnRcIixcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IHNoaXBQbGFjZW1lbnQgPSBbXG4gIHtcbiAgICBuYW1lOiBcInBsYWNlbWVudENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZ2FtZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwicGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzaGlwUGxhY2VtZW50Q29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInNoaXAtcGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJiU2hpcENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuc2hpcC1wbGFjZW1lbnQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImJzaGlwLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMjogXCJzaGlwLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjcnVpc2VyQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5zaGlwLXBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiY3J1aXNlci1jb250YWluZXJcIixcbiAgICBjbGFzczI6IFwic2hpcC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGVzdHJveWVyQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5zaGlwLXBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZGVzdHJveWVyLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMjogXCJzaGlwLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJmcmlnYXRlQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5zaGlwLXBsYWNlbWVudC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZnJpZ2F0ZS1jb250YWluZXJcIixcbiAgICBjbGFzczI6IFwic2hpcC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZ3JpZENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJncmlkLWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJodW1hbkdyaWRcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmdyaWQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInBsYWNlbWVudC1ncmlkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNwdUJvYXJkXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5ncmlkLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcHUtYm9hcmRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicGxhY2VtZW50R3JpZFNxdWFyZVwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIucGxhY2VtZW50LWdyaWRcIixcbiAgICBjbGFzczE6IFwicGxhY2VtZW50LWdyaWQtc3F1YXJlXCIsXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHNoaXBzID0gW1xuICB7XG4gICAgbmFtZTogXCJCYXR0bGVzaGlwXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5ic2hpcC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiYmF0dGxlc2hpcC1wbGFjZW1lbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ3J1aXNlclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuY3J1aXNlci1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiY3J1aXNlci1wbGFjZW1lbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGVzdHJveWVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5kZXN0cm95ZXItY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImRlc3Ryb3llci1wbGFjZW1lbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRnJpZ2F0ZVwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZnJpZ2F0ZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZnJpZ2F0ZS1wbGFjZW1lbnRcIixcbiAgfSxcbl0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cbmltcG9ydCB7IGNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9jb21wb25lbnRGYWN0b3J5XCI7XG5pbXBvcnQgeyBkaXNwbGF5T2JqZWN0cywgc2hpcFBsYWNlbWVudCwgc2hpcHMsIGNwdSB9IGZyb20gXCIuL2Rpc3BsYXlPYmplY3RzXCI7XG5pbXBvcnQgQ3J1aXNlciBmcm9tIFwiLi4vcmVzb3VyY2VzL0NydWlzZXIucG5nXCI7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tIFwiLi4vcmVzb3VyY2VzL0JhdHRsZXNoaXAucG5nXCI7XG5pbXBvcnQgRGVzdHJveWVyIGZyb20gXCIuLi9yZXNvdXJjZXMvRGVzdHJveWVyLnBuZ1wiO1xuaW1wb3J0IEZyaWdhdGUgZnJvbSBcIi4uL3Jlc291cmNlcy9GcmlnYXRlLnBuZ1wiO1xuaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRHcmlkKHBsYXllcikge1xuICBsZXQgc3FOdW0gPSAwO1xuICBsZXQgaHVtYW5TcU51bSA9IDA7XG4gIGxldCBjcHVTcU51bSA9IDA7XG4gIGZvciAobGV0IGkgPSA5OyBpID4gLTE7IGktLSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgbmV3U3F1YXJlID0gc2hpcFBsYWNlbWVudFtzaGlwUGxhY2VtZW50Lmxlbmd0aCAtIDFdO1xuICAgICAgbmV3U3F1YXJlLnh5ID0gW2osIGksIHNxTnVtLCBwbGF5ZXJdO1xuICAgICAgc3FOdW0gKz0gMTtcbiAgICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzMiA9IFwicGxheWVyLWdyaWQtc3F1YXJlXCI7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzczMgPSBgcGxheWVyLWdyaWQtc3F1YXJlLSR7an0tJHtpfWA7XG4gICAgICAgIGh1bWFuU3FOdW0gKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzczIgPSBcImNwdS1ncmlkLXNxdWFyZVwiO1xuICAgICAgICBuZXdTcXVhcmUucGFyZW50ID0gXCIuY3B1LWJvYXJkXCI7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzczMgPSBgY3B1LWdyaWQtc3F1YXJlLSR7an0tJHtpfWA7XG4gICAgICAgIGNwdVNxTnVtICs9IDE7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRGYWN0b3J5KG5ld1NxdWFyZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNoaXBzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzaGlwc1tpXTtcblxuICAgIGNvbXBvbmVudEZhY3RvcnkoZWxlbWVudCk7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgXCJCYXR0bGVzaGlwXCI6XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuY2xhc3MxfWApLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9JHtCYXR0bGVzaGlwfSBhbHQ9JHtlbGVtZW50Lm5hbWV9IGRyYWdnYWJsZT1cInRydWVcIiBjbGFzcz1cImRyYWdnYWJsZVwiIGlkPVwiQmF0dGxlc2hpcFwiIGRhdGEtbGVuZ3RoPVwiNlwiIGRhdGEtZGlyZWN0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiQ3J1aXNlclwiOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LmNsYXNzMX1gKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPSR7Q3J1aXNlcn0gYWx0PSR7ZWxlbWVudC5uYW1lfSBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3M9XCJkcmFnZ2FibGVcIiBpZD1cIkNydWlzZXJcIiAgZGF0YS1sZW5ndGg9XCI0XCIgZGF0YS1kaXJlY3Rpb249XCIwXCI+YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJEZXN0cm95ZXJcIjpcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5jbGFzczF9YCkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz0ke0Rlc3Ryb3llcn0gYWx0PSR7ZWxlbWVudC5uYW1lfSBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3M9XCJkcmFnZ2FibGVcIiBpZD1cIkRlc3Ryb3llclwiICBkYXRhLWxlbmd0aD1cIjNcIiBkYXRhLWRpcmVjdGlvbj1cIjBcIj5gO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5jbGFzczF9YCkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz0ke0ZyaWdhdGV9IGFsdD0ke2VsZW1lbnQubmFtZX0gZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZHJhZ2dhYmxlXCIgaWQ9XCJGcmlnYXRlXCIgIGRhdGEtbGVuZ3RoPVwiMlwiIGRhdGEtZGlyZWN0aW9uPVwiMFwiPmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcHNQbGFjZWQoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIik7XG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlU2hpcChlKSB7XG4gIGNvbnNvbGUubG9nKFwicm90YXRlU2hpcCEgZS50YXJnZXQgaXNcIiwgZS50YXJnZXQpO1xuICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LnBhcmVudEVsZW1lbnQgaXNcIiwgZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gIGNvbnN0IHNoaXAgPSBlLnRhcmdldDtcbiAgY29uc29sZS5sb2coXCJyb3RhdGVTaGlwISBzaGlwIGlzXCIsIHNoaXApO1xuICBpZiAoY2hlY2tQbGFjZW1lbnQoc2hpcC5kYXRhc2V0Lmxlbmd0aCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeHkgPSBbXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LngsXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnksXG4gIF07XG4gIHB1YlN1Yi5wdWIoXCJyb3RhdGVTaGlwXCIsIHh5KTtcblxuICBjb25zdCBwYXJlbnQgPSBzaGlwLnBhcmVudE5vZGU7XG4gIGNvbnN0IHBhcmVudFggPSBOdW1iZXIocGFyZW50LmRhdGFzZXQueCk7XG4gIGNvbnN0IHBhcmVudFkgPSBOdW1iZXIocGFyZW50LmRhdGFzZXQueSk7XG4gIHN3aXRjaCAoTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKSkge1xuICAgIGNhc2UgNjpcbiAgICAgIGlmIChzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID09PSBcIjBcIikge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIxXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXAtcm90YXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjBcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJiYXR0bGVzaGlwLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgNDpcbiAgICAgIGlmIChzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID09PSBcIjBcIikge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIxXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImNydWlzZXItcm90YXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjBcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJjcnVpc2VyLXJvdGF0ZWRcIik7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMzpcbiAgICAgIGlmIChzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID09PSBcIjBcIikge1xuICAgICAgICBzaGlwLmRhdGFzZXQuZGlyZWN0aW9uID0gXCIxXCI7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llci1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImRlc3Ryb3llci1yb3RhdGVkXCIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwiMFwiKSB7XG4gICAgICAgIHNoaXAuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjFcIjtcbiAgICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZnJpZ2F0ZS1yb3RhdGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImZyaWdhdGUtcm90YXRlZFwiKTtcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3B1QXR0YWNrKCkge1xuICBsZXQgc3VjY2Vzc2Z1bEF0dGFjayA9IGZhbHNlO1xuICB3aGlsZSAoIXN1Y2Nlc3NmdWxBdHRhY2spIHtcbiAgICBjb25zdCB0aGlzQXR0YWNrID0gY29udHJvbGxlci5jcHUuYXR0YWNrKCk7XG4gICAgaWYgKHRoaXNBdHRhY2spIHtcbiAgICAgIHN1Y2Nlc3NmdWxBdHRhY2sgPSB0cnVlO1xuICAgICAgYWRkQXR0YWNrTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFjayhlKSB7XG4gIGNvbnNvbGUubG9nKFwiZS50YXJnZXQgaXNcIiwgZS50YXJnZXQpO1xuICBjb25zdCB4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG4gIGNvbnN0IHkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcbiAgY29uc29sZS5sb2coXCJ4IGlzXCIsIHgpO1xuICBjb25zb2xlLmxvZyhcInkgaXNcIiwgeSk7XG4gIHB1YlN1Yi5wdWIoXCJwbGF5ZXJzTW92ZVwiLCBbeCwgeV0pO1xuXG4gIC8qY29uc3QgaHVtYW5BdHRhY2tSZXN1bHQgPSBjb250cm9sbGVyLmh1bWFuLmF0dGFjayh4LCB5KTtcbiAgaWYgKGh1bWFuQXR0YWNrUmVzdWx0KSB7XG4gICAgcmVtb3ZlQXR0YWNrTGlzdGVuZXJzKCk7XG4gIH1cbiAgY29uc29sZS5sb2coXCJodW1hbkF0dGFja1Jlc3VsdCBpc1wiLCBodW1hbkF0dGFja1Jlc3VsdCk7Ki9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUF0dGFja0xpc3RlbmVycygpIHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3B1LWdyaWQtc3F1YXJlXCIpO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrKTtcbiAgfSk7XG59XG5cbi8qZXhwb3J0IGZ1bmN0aW9uIG1pc3MobW92ZSwgcGxheWVyKSB7XG4gIGNvbnNvbGUubG9nKCdtaXNzISBjaGVjayBzcXVhcmUnKVxuICBpZiAocGxheWVyID09PSAxKSB7IFxuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jcHUtZ3JpZC1zcXVhcmUtJHttb3ZlWzBdfS0ke21vdmVbMV19YCk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItZ3JpZC1zcXVhcmUtJHttb3ZlWzBdfS0ke21vdmVbMV19YCk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICB9XG59Ki9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEF0dGFja0xpc3RlbmVycygpIHtcbiAgY29uc29sZS5sb2coXCJhZGRBdHRhY2tMaXN0ZW5lcnMhKVwiKTtcbiAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdS1ncmlkLXNxdWFyZVwiKTtcbiAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2spO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bmsoaXNQbGF5ZXJCb2FyZCkge1xuICBjb25zb2xlLmxvZyhcInN1bmsgY2FsbGVkISBpc1BsYXllckJvYXJkIGlzXCIsIGlzUGxheWVyQm9hcmQpO1xuICBpZiAoIWlzUGxheWVyQm9hcmQpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNIT1VMRCBCRSBXUklUSU5HIFRPIENQVSBBTEVSVCFcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcHUtYWxlcnRcIikudGV4dENvbnRlbnQgPVxuICAgICAgXCJUaGUgY29tcHV0ZXIgc3VuayB5b3VyIHNoaXAhXCI7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJTSE9VTEQgQkUgV1JJVElORyBUTyBQTEFZRVIgQUxFUlQhXCIpO1xuICAgIGNvbnN0IHBsYXllckFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYWxlcnRcIik7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJBbGVydC50ZXh0Q29udGVudCBpc1wiLCBwbGF5ZXJBbGVydC50ZXh0Q29udGVudCk7XG4gICAgcGxheWVyQWxlcnQudGV4dENvbnRlbnQgPSBcIllvdSBzdW5rIGFuIGVuZW15IHNoaXAhXCI7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJBbGVydC50ZXh0Q29udGVudCBpc1wiLCBwbGF5ZXJBbGVydC50ZXh0Q29udGVudCk7XG4gICAgLypkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1hbGVydFwiKS50ZXh0Q29udGVudCA9XG4gICAgICBcIllvdSBzdW5rIGFuIGVuZW15IHNoaXAhXCI7Ki9cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya1NxdWFyZUhpdChhcnJheSkge1xuICBjb25zb2xlLmxvZyhcIm1hcmtTcXVhcmVIaXQhIGFycmF5IGlzXCIsIGFycmF5KTtcbiAgbGV0IHNxdWFyZTtcbiAgY29uc3QgeCA9IGFycmF5WzBdO1xuICBjb25zdCB5ID0gYXJyYXlbMV07XG4gIGNvbnN0IGlzT2NjdXBpZWQgPSBhcnJheVsyXTtcbiAgY29uc3QgaXNQbGF5ZXJCb2FyZCA9IGFycmF5WzNdO1xuXG4gIGlmIChpc1BsYXllckJvYXJkKSB7XG4gICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1ncmlkLXNxdWFyZS0ke3h9LSR7eX1gKTtcbiAgICBjb25zb2xlLmxvZyhcInBsYXllciBzcXVhcmUgaXNcIiwgc3F1YXJlKTtcbiAgICBjb25zdCB1cHBlck5vdGlmcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWZzLXVwcGVyXCIpO1xuICAgIGlmIChpc09jY3VwaWVkKSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1vY2N1cGllZFwiKTtcbiAgICAgIHVwcGVyTm90aWZzdGV4dENvbnRlbnQgPVxuICAgICAgICBcIlRoZSBjb21wdXRlciBoaXQgeW91ciBzaGlwIVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1lbXB0eVwiKTtcbiAgICAgIHVwcGVyTm90aWZzLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJUaGUgY29tcHV0ZXIgaGl0IGFuIGVtcHR5IHNxdWFyZSFcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNwdS1ncmlkLXNxdWFyZS0ke3h9LSR7eX1gKTtcbiAgICBjb25zb2xlLmxvZyhcImNwdSBzcXVhcmUgaXNcIiwgc3F1YXJlKTtcbiAgICBjb25zdCBsb3dlck5vdGlmcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWZzXCIpO1xuICAgIGlmIChpc09jY3VwaWVkKSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1vY2N1cGllZFwiKTtcbiAgICAgIGxvd2VyTm90aWZzLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJZb3UgaGl0IGFuIGVuZW15IHNoaXAhXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LWVtcHR5XCIpO1xuICAgICAgbG93ZXJOb3RpZnMudGV4dENvbnRlbnQgPVxuICAgICAgICBcIllvdSBoaXQgYW4gZW1wdHkgc3F1YXJlIVwiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZE1vdmUoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWFsZXJ0XCIpLnRleHRDb250ZW50ID1cbiAgICBcIllvdSB0cmllZCB0byBhdHRhY2sgYW4gaW52YWxpZCBzcXVhcmUhXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlcihtZXNzYWdlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LWFsZXJ0XCIpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYWxlcnRcIikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBcbiAgLy8gcmVtb3ZlcyB0aGUgdGl0bGUgYW5kIHJlcGxhY2VzIGl0IHdpdGggYW5vdGhlciBub3RpZmljYXRpb25cbiAgLy8gaDNcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZi11cHBlclwiKS5pbm5lckhUTUwgPVxuICAnPGgzIGNsYXNzPVwibm90aWZzLXVwcGVyXCI+PC9oMz4nO1xuXG4gIHB1YlN1Yi5wdWIoXCJnYW1lU3RhcnRcIiwgXCJ0cnVlXCIpO1xuXG4gIC8vIHJlbW92ZSBzaGlwLXJvdGF0aW9uIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGVcIik7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkcmFnZ2FibGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkcmFnZ2FibGVzW2luZGV4XTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZyk7XG4gIH1cblxuICAvLyByZW1vdmUgZHJvcCBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhY2VtZW50LWdyaWQtc3F1YXJlXCIpO1xuICBjb25zb2xlLmxvZyhcInNxdWFyZXMgPSBcIiwgc3F1YXJlcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzcXVhcmVzW2ldO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcCk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgYWxsb3dEcm9wKTtcbiAgfVxufVxuXG5sZXQgZHJhZ1N0b3JhZ2UgPSBcInRlc3RcIjtcblxubGV0IGlzQmFkbHlQbGFjZWQgPSB7XG4gIDY6IHRydWUsXG4gIDQ6IHRydWUsXG4gIDM6IHRydWUsXG4gIDI6IHRydWUsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWVyTW92ZSgpIHtcbiAgLy8gcHJvdmlkZSB0aGUgcGxheWVyIHdpdGggc29tZSBzb3J0IG9mIHByb21wdC4gZm9yIG5vdywgY29uc29sZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGlmc1wiKS50ZXh0Q29udGVudCA9XG4gICAgXCJZb3VyIG1vdmUhIFBsZWFzZSBhdHRhY2sgYW4gZW5lbXkgc3F1YXJlIGJ5IGNsaWNraW5nLlwiO1xuICBhZGRBdHRhY2tMaXN0ZW5lcnMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyb3AoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiaW1nXCIpO1xuICBjb25zb2xlLmxvZyhcImRhdGEgaXNcIiwgZGF0YSk7XG4gIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbiAgY29uc29sZS5sb2coXG4gICAgXCJkcm9wISBhYm91dCB0byBwbGFjZSBzaGlwLiBhcmdzIGFyZSBcIixcbiAgICBlLnRhcmdldC5kYXRhc2V0LngsXG4gICAgZS50YXJnZXQuZGF0YXNldC55LFxuICAgIDBcbiAgKTtcbiAgY29uc29sZS5sb2coXCJwdWJTdWIucHViIGlzXCIsIHB1YlN1Yi5wdWIpO1xuICBwdWJTdWIucHViKFwicGxhY2VTaGlwXCIsIFtcbiAgICBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KSxcbiAgICBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KSxcbiAgICBOdW1iZXIoZHJhZ1N0b3JhZ2UuZGF0YXNldC5kaXJlY3Rpb24pLFxuICAgIE51bWJlcihkcmFnU3RvcmFnZS5kYXRhc2V0Lmxlbmd0aCksXG4gIF0pO1xuXG4gIGNvbnNvbGUubG9nKFwiZHJhZ1N0b3JhZ2UuaWQgaXNcIiwgZHJhZ1N0b3JhZ2UuaWQpO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKGAjJHtkcmFnU3RvcmFnZS5pZH1gKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlU2hpcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREcmFnTGlzdGVuZXJzKCkge1xuICBjb25zb2xlLmxvZyhcImFkZERyYWdMaXN0ZW5lcnMhXCIpO1xuICBjb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGVcIik7XG4gIGNvbnNvbGUubG9nKFwiZHJhZ2dhYmxlcyA9IFwiLCBkcmFnZ2FibGVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRyYWdnYWJsZXNbaV07XG4gICAgY29uc29sZS5sb2coXCJlbGVtZW50IGlzOiBcIiwgZWxlbWVudCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWcpO1xuICB9XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYWNlbWVudC1ncmlkLXNxdWFyZVwiKTtcbiAgY29uc29sZS5sb2coXCJzcXVhcmVzID0gXCIsIHNxdWFyZXMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gc3F1YXJlc1tpXTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3ApO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGFsbG93RHJvcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2hpcFBsYWNlbWVudCgpIHtcbiAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB0byBwcmV2ZW50IHJ1bm5pbmcgdGhpcyBmdW5jdGlvbiBhZ2FpblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKVxuICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRTaGlwUGxhY2VtZW50KTtcblxuICAvLyBCdWlsZCB0aGUgc2hpcCBwbGFjZW1lbnQgZ3JpZHNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwUGxhY2VtZW50Lmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzaGlwUGxhY2VtZW50W2ldO1xuICAgIGNvbXBvbmVudEZhY3RvcnkoZWxlbWVudCk7XG4gIH1cbiAgYnVpbGRHcmlkKDEpO1xuICBidWlsZEdyaWQoMik7XG4gIGJ1aWxkU2hpcHMoKTtcbiAgYWRkRHJhZ0xpc3RlbmVycygpO1xuXG4gIC8vIFNlbmRzIHRoZSBwbGF5ZXIgYSBtZXNzYWdlIHRvIHBsYWNlIHRoZWlyIHNoaXBzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWZzXCIpLnRleHRDb250ZW50ID1cbiAgICBcIlBsYWNlIHlvdXIgc2hpcHMhIENsaWNrIHRvIHJvdGF0ZSBhIHBsYWNlZCBzaGlwLlwiO1xufVxuXG4vLyBHZXQgdGhlIERPTSBub2RlcycgaW5mbyBmb3IgdGhlIGZpcnN0IHNjcmVlbiBmcm9tIGRpc3BsYXlPYmplY3RzXG4vLyBhbmQgZHJhd3MgdGhlbVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEcm9wKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRJbnRlcmZhY2UoKSB7XG4gIGRpc3BsYXlPYmplY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb21wb25lbnRGYWN0b3J5KGVsZW1lbnQpO1xuICB9KTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1aWxkU2hpcFBsYWNlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgZHJhZ1N0b3JhZ2UgPSBlLnRhcmdldDtcbiAgY29uc29sZS5sb2coXCJkcmFnISBlLnRhcmdldCA9IFwiLCBlLnRhcmdldCk7XG4gIGNvbnNvbGUubG9nKFwiZHJhZyEgZS50YXJnZXQucGFyZW50RWxlbWVudCA9IFwiLCBlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxhY2VtZW50LWdyaWQtc3F1YXJlXCIpKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGEgc3F1YXJlIVwiKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnggPSBcIixcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC54XG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnkgPSBcIixcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC55XG4gICAgKTtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC54KTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC55KTtcbiAgICBjb25zdCByZXN1bHQgPSBbXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbiksXG4gICAgICBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5sZW5ndGgpLFxuICAgIF07XG4gICAgcHViU3ViLnB1YihcIm1vdmVTaGlwXCIsIHJlc3VsdCk7XG4gIH1cbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImltZ1wiLCBlLnRhcmdldC5pZCk7XG4gIGNvbnNvbGUubG9nKFwiZHJhZ1N0b3JhZ2UgaXNcIiwgZHJhZ1N0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBjaGVja1BsYWNlbWVudChzaGlwKSB7XG4gIHJldHVybiBpc0JhZGx5UGxhY2VkW3NoaXBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VkUmlnaHQoc2hpcCkge1xuICBjb25zb2xlLmxvZyhcInBsYWNlZFJpZ2h0IGNhbGxlZCEgaXNCYWRseVBsYWNlZCBpczogXCIsIGlzQmFkbHlQbGFjZWQpO1xuICBzd2l0Y2ggKHNoaXApIHtcbiAgICBjYXNlIDY6XG4gICAgICBpc0JhZGx5UGxhY2VkWzZdID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBpc0JhZGx5UGxhY2VkWzRdID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBpc0JhZGx5UGxhY2VkWzNdID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaXNCYWRseVBsYWNlZFsyXSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc29sZS5sb2coXCJwbGFjZWRSaWdodCBjYWxsZWQhIGlzQmFkbHlQbGFjZWQgaXM6IFwiLCBpc0JhZGx5UGxhY2VkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlZFdyb25nKHNoaXApIHtcbiAgY29uc29sZS5sb2coXCJwbGFjZWRXcm9uZyBjYWxsZWQhIGlzQmFkbHlQbGFjZWQgaXM6IFwiLCBpc0JhZGx5UGxhY2VkKTtcbiAgc3dpdGNoIChzaGlwKSB7XG4gICAgY2FzZSA2OlxuICAgICAgaXNCYWRseVBsYWNlZFs2XSA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBpc0JhZGx5UGxhY2VkWzRdID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGlzQmFkbHlQbGFjZWRbM10gPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlzQmFkbHlQbGFjZWRbMl0gPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc29sZS5sb2coXCJwbGFjZWRXcm9uZyEgaXNCYWRseVBsYWNlZCBpczogXCIsIGlzQmFkbHlQbGFjZWQpO1xufVxuXG5jbGFzcyBJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5O1xuICAgIHRoaXMuYnVpbGRHcmlkID0gYnVpbGRHcmlkO1xuICAgIHRoaXMuYnVpbGRTaGlwcyA9IGJ1aWxkU2hpcHM7XG4gICAgdGhpcy5yb3RhdGVTaGlwID0gcm90YXRlU2hpcDtcbiAgICB0aGlzLmNwdUF0dGFjayA9IGNwdUF0dGFjaztcbiAgICB0aGlzLnJlbW92ZUF0dGFja0xpc3RlbmVycyA9IHJlbW92ZUF0dGFja0xpc3RlbmVycztcbiAgICB0aGlzLmF0dGFjayA9IGF0dGFjaztcbiAgICB0aGlzLmFkZEF0dGFja0xpc3RlbmVycyA9IGFkZEF0dGFja0xpc3RlbmVycztcbiAgICB0aGlzLm1hcmtTcXVhcmVIaXQgPSBtYXJrU3F1YXJlSGl0O1xuICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lO1xuICAgIHRoaXMuZHJvcCA9IGRyb3A7XG4gICAgdGhpcy5hZGREcmFnTGlzdGVuZXJzID0gYWRkRHJhZ0xpc3RlbmVycztcbiAgICB0aGlzLmJ1aWxkU2hpcFBsYWNlbWVudCA9IGJ1aWxkU2hpcFBsYWNlbWVudDtcbiAgICB0aGlzLmFsbG93RHJvcCA9IGFsbG93RHJvcDtcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlID0gYnVpbGRJbnRlcmZhY2U7XG4gICAgdGhpcy5wbGFjZWRSaWdodCA9IHBsYWNlZFJpZ2h0O1xuICB9XG59XG5cbmNvbnN0IGlmYWNlID0gbmV3IEludGVyZmFjZSgpO1xuXG5leHBvcnQgeyBpZmFjZSB9O1xuIiwiaW1wb3J0IHsgcGxheWVyQm9hcmQsIGNwdUJvYXJkIH0gZnJvbSBcIi4vR2FtZUJvYXJkRmFjdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgaW5uZXJQbGF5ZXJGYWN0b3J5ID0gKHR5cGUpID0+IHtcbiAgICBsZXQgYm9hcmQ7XG4gICAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICAgIGJvYXJkID0gcGxheWVyQm9hcmQ7XG4gICAgfSBlbHNlIHsgYm9hcmQgPSBjcHVCb2FyZDsgfVxuICAgIGNvbnN0IHBsYXllclR5cGUgPSB0eXBlO1xuXG4gICAgYm9hcmQucGxheWVyVHlwZSA9IHBsYXllclR5cGU7XG4gICAgcmV0dXJuIHsgcGxheWVyVHlwZSwgYm9hcmQgfTtcbiAgfTtcblxuICBjb25zdCBodW1hbiA9IGlubmVyUGxheWVyRmFjdG9yeSgxKTtcbiAgY29uc3QgY3B1ID0gaW5uZXJQbGF5ZXJGYWN0b3J5KDIpO1xuXG4gIGNvbnN0IHBsYWNlQ1BVU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcFR5cGVzID0gWzYsIDQsIDMsIDJdO1xuICAgIGNvbnNvbGUubG9nKCdjcHUuYm9hcmQgaXMnLCBjcHUuYm9hcmQpO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICBjb25zdCBob3JpelZlcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNwdS5ib2FyZC5wbGFjZVNoaXBPbkJvYXJkKHgsIHksIGhvcml6VmVydCwgdHlwZSk7XG4gICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICBwbGFjZVNoaXAodHlwZSk7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICBzaGlwVHlwZXMuZm9yRWFjaChzaGlwVHlwZSA9PiB7XG4gICAgICBwbGFjZVNoaXAoc2hpcFR5cGUpO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ2NwdS5ib2FyZC5zaGlwQXJyYXkgPSAnLCBjcHUuYm9hcmQuc2hpcEFycmF5KTtcbiAgfTtcbiAgXG4gIHBsYWNlQ1BVU2hpcHMoKTtcblxuICBjb25zdCBjcHVBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xuXG4gIGNvbnN0IGh1bWFuQXR0YWNrID0gKHgsIHkpID0+IGNwdS5ib2FyZC5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcblxuICBodW1hbi5hdHRhY2sgPSBodW1hbkF0dGFjaztcbiAgY3B1LmF0dGFjayA9IGNwdUF0dGFjaztcblxuICByZXR1cm4geyBodW1hbiwgY3B1IH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCAqIGFzIG15SW50ZXJmYWNlIGZyb20gXCIuL21vZHVsZXMvaW50ZXJmYWNlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21vZHVsZXMvc3R5bGVzLmNzc1wiO1xuXG5cbi8vaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5jb25zb2xlLmxvZyhteUludGVyZmFjZS5pZmFjZSlcbmNvbnNvbGUubG9nKCdjb25yb2xsZXIgaXMnLCBjb250cm9sbGVyKVxubXlJbnRlcmZhY2UuaWZhY2UuYnVpbGRJbnRlcmZhY2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==