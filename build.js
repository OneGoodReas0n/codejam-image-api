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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/arrows-alt.svg":
/*!*************************************!*\
  !*** ./assets/icons/arrows-alt.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/0f343e1ee1ab72ed0a60e70af3d8368c.svg\";\n\n//# sourceURL=webpack:///./assets/icons/arrows-alt.svg?");

/***/ }),

/***/ "./assets/icons/exchange-alt.svg":
/*!***************************************!*\
  !*** ./assets/icons/exchange-alt.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/f8b2ec1e5fa4677293406fb3bb51440e.svg\";\n\n//# sourceURL=webpack:///./assets/icons/exchange-alt.svg?");

/***/ }),

/***/ "./assets/icons/eye-dropper.svg":
/*!**************************************!*\
  !*** ./assets/icons/eye-dropper.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/e3eaa89e8851e3d94ad7402a2c7577fc.svg\";\n\n//# sourceURL=webpack:///./assets/icons/eye-dropper.svg?");

/***/ }),

/***/ "./assets/icons/fill-drip.svg":
/*!************************************!*\
  !*** ./assets/icons/fill-drip.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/1029238d30723d537adf2d3b279baed4.svg\";\n\n//# sourceURL=webpack:///./assets/icons/fill-drip.svg?");

/***/ }),

/***/ "./assets/icons/pencil.svg":
/*!*********************************!*\
  !*** ./assets/icons/pencil.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/2755e180b7ddcca3dce55a543d285e0c.svg\";\n\n//# sourceURL=webpack:///./assets/icons/pencil.svg?");

/***/ }),

/***/ "./assets/icons/search-icon.svg":
/*!**************************************!*\
  !*** ./assets/icons/search-icon.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/6c51593230285bd09de04e850f7891cf.svg\";\n\n//# sourceURL=webpack:///./assets/icons/search-icon.svg?");

/***/ }),

/***/ "./functional/Palette.ts":
/*!*******************************!*\
  !*** ./functional/Palette.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ \"./functional/Tools.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./functional/api.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar Palette = /** @class */ (function () {\r\n    function Palette(context) {\r\n        var _this = this;\r\n        this.init = function () {\r\n            _this.canvas = document.getElementById('canvas');\r\n            _this.sizebarDiv = document.getElementById('sizebar');\r\n            _this.colorbarDiv = document.getElementById('colorbar');\r\n            _this.toolbarDiv = document.getElementById('toolbar');\r\n            _this.colorWheel = document.getElementById('colorWhell');\r\n            _this.searchbarDiv = document.getElementById('searchContolBar');\r\n            _this.searchbarBtn = document.getElementById('searchContolBtn');\r\n            _this.searchbarInput = document.getElementById('searchbarInput');\r\n            _this.loadBtn = _this.searchbarDiv.children.item(1);\r\n            _this.grayBtn = _this.searchbarDiv.children.item(2);\r\n            _this.photoIsReady = false;\r\n            _this.inputInFocus = false;\r\n            _this.canvasLength = _this.canvas.offsetWidth;\r\n            _this.matrixSizeMap.set('128x128', 128);\r\n            _this.matrixSizeMap.set('256x256', 256);\r\n            _this.matrixSizeMap.set('512x512', 512);\r\n            _this.tools = new _Tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.context, _this.canvas);\r\n            _this.tools.init();\r\n            _this.canvas.addEventListener('mousedown', _this.tools.mouseDownHandler);\r\n            _this.canvas.addEventListener('mousedown', _this.setCurrentColor);\r\n            _this.canvas.addEventListener('mousemove', _this.tools.mouseMoveHandler);\r\n            _this.canvas.addEventListener('mouseup', _this.tools.mouseUpHandler);\r\n            _this.searchbarBtn.addEventListener('click', _this.searchHandler);\r\n            _this.loadBtn.addEventListener('click', _this.loadPhotoAtCanvas);\r\n            _this.grayBtn.addEventListener('click', _this.useGrayscalingAtPhoto);\r\n            _this.searchbarInput.onfocus = function () {\r\n                _this.inputInFocus = true;\r\n            };\r\n            _this.searchbarInput.onblur = function () {\r\n                _this.inputInFocus = false;\r\n            };\r\n            var sizeBarArr = document.getElementsByClassName('select-list__item');\r\n            for (var i = 0; i < sizeBarArr.length; i += 1) {\r\n                sizeBarArr[i].addEventListener('click', _this.changeMatrixSize);\r\n                if (sizeBarArr[i].classList.contains('select-list__item_active')) {\r\n                    _this.initMatrixSize(sizeBarArr[i].children.item(1).innerHTML);\r\n                }\r\n            }\r\n            var colorBarArr = document.getElementsByClassName('colors-bar__item');\r\n            for (var i = 0; i < colorBarArr.length; i += 1) {\r\n                colorBarArr[i].addEventListener('click', _this.changeColorHandler);\r\n            }\r\n            for (var i = 0; i < _this.colorbarDiv.children.length; i += 1) {\r\n                if (_this.initColorsArr[i]) {\r\n                    _this.colorbarDiv.children[i].children[0].setAttribute('style', \"background-color:\" + _this.initColorsArr[i]);\r\n                }\r\n            }\r\n            for (var i = 0; i < _this.toolbarDiv.children.length; i += 1) {\r\n                _this.toolbarDiv.children[i].addEventListener('click', _this.changeToolhandler);\r\n            }\r\n            _this.colorWheelValue = '#554433';\r\n            _this.colorWheel.value = _this.colorWheelValue;\r\n            _this.colorWheel.addEventListener('change', _this.setColorWheelColor);\r\n            document.addEventListener('keydown', function (e) {\r\n                if (!_this.inputInFocus) {\r\n                    var code = e.code;\r\n                    var arr = ['Pencil', 'Paint bucket', 'Choose color'];\r\n                    switch (code) {\r\n                        case 'KeyB':\r\n                            _this.changeToolhandler(arr[1]);\r\n                            break;\r\n                        case 'KeyC':\r\n                            _this.changeToolhandler(arr[2]);\r\n                            break;\r\n                        case 'KeyP':\r\n                            _this.changeToolhandler(arr[0]);\r\n                            break;\r\n                        default:\r\n                            break;\r\n                    }\r\n                }\r\n            });\r\n        };\r\n        this.getCanvas = function () {\r\n            if (_this.canvas !== undefined) {\r\n                return _this.canvas;\r\n            }\r\n            return null;\r\n        };\r\n        this.getMatrixSizeMap = function () {\r\n            return _this.matrixSizeMap;\r\n        };\r\n        this.getContext = function () {\r\n            return _this.context;\r\n        };\r\n        this.getCanvasLength = function () {\r\n            return _this.canvasLength;\r\n        };\r\n        this.clearCanvas = function () {\r\n            _this.context.clearRect(0, 0, _this.canvasLength, _this.canvasLength);\r\n        };\r\n        this.initMatrixSize = function (name) {\r\n            switch (name) {\r\n                case '128x128':\r\n                    _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\r\n                    break;\r\n                case '256x256':\r\n                    _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\r\n                    break;\r\n                case '512x512':\r\n                    _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        };\r\n        this.changeMatrixSize = function (e) {\r\n            var target = e.target;\r\n            var name = target.children.item(1).innerHTML;\r\n            switch (name) {\r\n                case '128x128':\r\n                    _this.sizebarDiv.childNodes.forEach(function (el) {\r\n                        if (el.nodeName === 'DIV') {\r\n                            if (el.id === 'sm') {\r\n                                el.classList.add('select-list__item_active');\r\n                                _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\r\n                            }\r\n                            else {\r\n                                el.classList.remove('select-list__item_active');\r\n                            }\r\n                        }\r\n                    });\r\n                    break;\r\n                case '256x256':\r\n                    _this.sizebarDiv.childNodes.forEach(function (el) {\r\n                        if (el.nodeName === 'DIV') {\r\n                            if (el.id === 'md') {\r\n                                el.classList.add('select-list__item_active');\r\n                                _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\r\n                            }\r\n                            else {\r\n                                el.classList.remove('select-list__item_active');\r\n                            }\r\n                        }\r\n                    });\r\n                    break;\r\n                case '512x512':\r\n                    _this.sizebarDiv.childNodes.forEach(function (el) {\r\n                        if (el.nodeName === 'DIV') {\r\n                            if (el.id === 'lg') {\r\n                                el.classList.add('select-list__item_active');\r\n                                _this.tools.setMatrixSize(_this.matrixSizeMap.get(name));\r\n                            }\r\n                            else {\r\n                                el.classList.remove('select-list__item_active');\r\n                            }\r\n                        }\r\n                    });\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        };\r\n        this.setCurrentColor = function () {\r\n            if (_this.tools.colorPickerValue !== undefined && _this.tools.colorPickerValue !== '') {\r\n                var currentColorDiv = _this.colorbarDiv.children.item(0).children.item(0);\r\n                currentColorDiv.setAttribute('style', \"background-color:\" + _this.tools.colorPickerValue);\r\n            }\r\n        };\r\n        this.setColorWheelColor = function (e) {\r\n            _this.colorWheelValue = e.target.value;\r\n        };\r\n        this.changeColorHandler = function (e) {\r\n            var target = e.target;\r\n            var currentColorDiv = _this.colorbarDiv.children.item(0).children.item(0);\r\n            var currentColorVal = currentColorDiv.style.backgroundColor;\r\n            var prevColorDiv = _this.colorbarDiv.children.item(1).children.item(0);\r\n            var prevColorVal = prevColorDiv.style.backgroundColor;\r\n            var clickedDiv = target.children.item(0);\r\n            var divName = target.nodeName === 'INPUT'\r\n                ? target.id\r\n                : target.children.item(1).innerHTML;\r\n            switch (divName) {\r\n                case 'red':\r\n                    currentColorDiv.setAttribute('style', \"background-color:\" + clickedDiv.style.backgroundColor);\r\n                    prevColorDiv.setAttribute('style', \"background-color:\" + currentColorVal);\r\n                    _this.colorOrder.push(prevColorVal);\r\n                    _this.tools.setColor(clickedDiv.style.backgroundColor);\r\n                    break;\r\n                case 'blue':\r\n                    currentColorDiv.setAttribute('style', \"background-color:\" + clickedDiv.style.backgroundColor);\r\n                    prevColorDiv.setAttribute('style', \"background-color:\" + currentColorVal);\r\n                    _this.colorOrder.push(prevColorVal);\r\n                    _this.tools.setColor(clickedDiv.style.backgroundColor);\r\n                    break;\r\n                case 'Prev color':\r\n                    currentColorDiv.setAttribute('style', \"background-color:\" + clickedDiv.style.backgroundColor);\r\n                    _this.tools.setColor(clickedDiv.style.backgroundColor);\r\n                    if (_this.colorOrder.length > 0) {\r\n                        prevColorDiv.setAttribute('style', \"background-color:\" + _this.colorOrder[_this.colorOrder.length - 1]);\r\n                        _this.colorOrder.pop();\r\n                    }\r\n                    break;\r\n                case 'Color selection':\r\n                    prevColorDiv.setAttribute('style', \"background-color:\" + currentColorVal);\r\n                    currentColorDiv.setAttribute('style', \"background-color:\" + _this.colorWheelValue);\r\n                    _this.colorOrder.push(prevColorVal);\r\n                    _this.tools.setColor(_this.colorWheelValue);\r\n                    break;\r\n                case 'Current color':\r\n                default:\r\n                    break;\r\n            }\r\n        };\r\n        this.changeToolhandler = function (e) {\r\n            var name = '';\r\n            if (e.target !== undefined) {\r\n                var target = e.target;\r\n                name = target.children[1].innerHTML;\r\n            }\r\n            else {\r\n                name = e;\r\n            }\r\n            switch (name) {\r\n                case 'Pencil':\r\n                    _this.toolbarDiv.childNodes.forEach(function (el) {\r\n                        if (el.nodeName === 'DIV') {\r\n                            if (el.children[1].innerHTML === name) {\r\n                                el.classList.add('tools-bar__item_active');\r\n                                _this.selectedTool = name;\r\n                                _this.tools.setSelectedTool(_this.selectedTool);\r\n                            }\r\n                            else {\r\n                                el.classList.remove('tools-bar__item_active');\r\n                            }\r\n                        }\r\n                    });\r\n                    break;\r\n                case 'Paint bucket':\r\n                    _this.toolbarDiv.childNodes.forEach(function (el) {\r\n                        if (el.nodeName === 'DIV') {\r\n                            if (el.children[1].innerHTML === name) {\r\n                                el.classList.add('tools-bar__item_active');\r\n                                _this.selectedTool = name;\r\n                                _this.tools.setSelectedTool(_this.selectedTool);\r\n                            }\r\n                            else {\r\n                                el.classList.remove('tools-bar__item_active');\r\n                            }\r\n                        }\r\n                    });\r\n                    break;\r\n                case 'Choose color':\r\n                    _this.toolbarDiv.childNodes.forEach(function (el) {\r\n                        if (el.nodeName === 'DIV') {\r\n                            if (el.children[1].innerHTML === name) {\r\n                                el.classList.add('tools-bar__item_active');\r\n                                _this.selectedTool = name;\r\n                                _this.tools.setSelectedTool(_this.selectedTool);\r\n                            }\r\n                            else {\r\n                                el.classList.remove('tools-bar__item_active');\r\n                            }\r\n                        }\r\n                    });\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        };\r\n        this.getPreparedData = function () { return __awaiter(_this, void 0, void 0, function () {\r\n            var query, photoObjects, e_1;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        _a.trys.push([0, 2, , 3]);\r\n                        query = this.searchbarInput.value;\r\n                        return [4 /*yield*/, Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchData\"])(query)];\r\n                    case 1:\r\n                        photoObjects = _a.sent();\r\n                        return [2 /*return*/, photoObjects];\r\n                    case 2:\r\n                        e_1 = _a.sent();\r\n                        console.log(e_1);\r\n                        return [3 /*break*/, 3];\r\n                    case 3: return [2 /*return*/];\r\n                }\r\n            });\r\n        }); };\r\n        this.searchHandler = function () {\r\n            _this.getPreparedData()\r\n                .then(function (data) {\r\n                var random = Math.floor(Math.random() * 10);\r\n                var photo = data[random];\r\n                _this.photoObj = photo;\r\n                setTimeout(function () {\r\n                    _this.updatePhotoHolder(_this.photoObj);\r\n                    _this.loadBtn.classList.remove('btn_disabled');\r\n                }, 1000);\r\n            })\r\n                .catch(function (e) {\r\n                alert('Bad request, check your request and repeat !');\r\n            });\r\n        };\r\n        this.updatePhotoHolder = function (photo) {\r\n            var photoHolder = _this.searchbarDiv.children.item(0);\r\n            photoHolder.setAttribute('style', \"background-image:url(\" + photo.smallUrl + \");background-size:contain;background-repeat:no-repeat;background-position:center\");\r\n        };\r\n        this.getPhotoForDrawing = function () {\r\n            var photo = _this.photoObj;\r\n            var width = photo.width, height = photo.height, url = photo.url;\r\n            var image = new Image(width, height);\r\n            var x = 0;\r\n            var y = 0;\r\n            var dWidth = 0;\r\n            var dHeight = 0;\r\n            if (width > height) {\r\n                dWidth = _this.canvasLength;\r\n                dHeight = (height / width) * _this.canvasLength;\r\n                y = (_this.canvasLength - dHeight) / 2;\r\n            }\r\n            else if (width < height) {\r\n                dHeight = _this.canvasLength;\r\n                dWidth = (width / height) * _this.canvasLength;\r\n                x = (_this.canvasLength - dWidth) / 2;\r\n            }\r\n            else {\r\n                dWidth = 512;\r\n                dHeight = 512;\r\n            }\r\n            image.width = dWidth;\r\n            image.height = dHeight;\r\n            image.src = url;\r\n            var photoData = new PhotoData(x, y, image);\r\n            return photoData;\r\n        };\r\n        this.loadPhotoAtCanvas = function () {\r\n            _this.clearCanvas();\r\n            var photoData = _this.getPhotoForDrawing();\r\n            var image = photoData.image;\r\n            image.crossOrigin = 'Anonymous';\r\n            image.onload = function () {\r\n                _this.context.drawImage(image, photoData.x, photoData.y, image.width, image.height);\r\n                _this.photoIsReady = true;\r\n            };\r\n        };\r\n        this.getGrayscaleValue = function (r, g, b) {\r\n            return r * 0.2126 + g * 0.7152 + b * 0.0722;\r\n        };\r\n        this.useGrayscalingAtPhoto = function () {\r\n            if (_this.photoIsReady) {\r\n                var photo = _this.getPhotoForDrawing();\r\n                photo.image.crossOrigin = 'Anonymous';\r\n                var imageData = _this.context.getImageData(photo.x, photo.y, photo.image.width, photo.image.height);\r\n                for (var i = 0; i < imageData.data.length; i += 4) {\r\n                    var grayscale = _this.getGrayscaleValue(imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]);\r\n                    imageData.data[i] = grayscale;\r\n                    imageData.data[i + 1] = grayscale;\r\n                    imageData.data[i + 2] = grayscale;\r\n                    imageData.data[i + 3] = 255;\r\n                }\r\n                _this.context.putImageData(imageData, photo.x, photo.y);\r\n            }\r\n            else {\r\n                alert('There is no photo to grayscale!');\r\n            }\r\n        };\r\n        this.context = context;\r\n        this.canvasLength = 0;\r\n        this.initBackground = '';\r\n        this.colorWheelValue = '';\r\n        this.selectedTool = 'Pencil';\r\n        this.initColorsArr = ['#000000', '#ffffff', '', '#e74c3c', '#2980b9'];\r\n        this.matrixSizeMap = new Map();\r\n        this.colorOrder = [];\r\n    }\r\n    return Palette;\r\n}());\r\nvar PhotoData = /** @class */ (function () {\r\n    function PhotoData(x, y, image) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.image = image;\r\n    }\r\n    return PhotoData;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Palette);\r\n\n\n//# sourceURL=webpack:///./functional/Palette.ts?");

/***/ }),

/***/ "./functional/Tools.ts":
/*!*****************************!*\
  !*** ./functional/Tools.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Tools = /** @class */ (function () {\r\n    function Tools(context, canvas) {\r\n        var _this = this;\r\n        this.init = function () {\r\n            _this.canvasLength = _this.canvas.offsetWidth;\r\n            _this.color = '#000000';\r\n        };\r\n        this.setSelectedTool = function (tool) {\r\n            _this.selectedTool = tool;\r\n        };\r\n        this.mouseDownHandler = function (e) {\r\n            var offsetX = e.offsetX, offsetY = e.offsetY;\r\n            switch (_this.selectedTool) {\r\n                case 'Pencil':\r\n                    _this.isDrawing = true;\r\n                    _this.pointState.setX(offsetX);\r\n                    _this.pointState.setY(offsetY);\r\n                    break;\r\n                case 'Paint bucket':\r\n                    _this.pointState.setX(offsetX);\r\n                    _this.pointState.setY(offsetY);\r\n                    _this.fill();\r\n                    break;\r\n                case 'Choose color':\r\n                    _this.colorPicker(offsetX, offsetY);\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        };\r\n        this.mouseMoveHandler = function (e) {\r\n            var offsetX = e.offsetX, offsetY = e.offsetY;\r\n            if (_this.isDrawing) {\r\n                _this.drawLine(_this.pointState.getX(), _this.pointState.getY(), offsetX, offsetY);\r\n                _this.pointState.setX(offsetX);\r\n                _this.pointState.setY(offsetY);\r\n            }\r\n        };\r\n        this.mouseUpHandler = function () {\r\n            _this.isDrawing = false;\r\n            _this.pointState.setX(0);\r\n            _this.pointState.setY(0);\r\n        };\r\n        this.getDrawingStatus = function () {\r\n            return _this.isDrawing;\r\n        };\r\n        this.setMatrixSize = function (size) {\r\n            _this.matrixSize = size;\r\n        };\r\n        this.setColor = function (color) {\r\n            _this.color = color;\r\n        };\r\n        this.setCanvasLength = function (length) {\r\n            _this.canvasLength = length;\r\n        };\r\n        this.drawLine = function (x1, y1, x2, y2) {\r\n            var x;\r\n            var y;\r\n            var px;\r\n            var py;\r\n            var xe;\r\n            var ye;\r\n            var i;\r\n            var dx = x2 - x1;\r\n            var dy = y2 - y1;\r\n            var dx1 = Math.abs(x2 - x1);\r\n            var dy1 = Math.abs(y2 - y1);\r\n            px = 2 * dy1 - dx1;\r\n            py = 2 * dx1 - dy1;\r\n            if (dy1 <= dx1) {\r\n                if (dx >= 0) {\r\n                    x = x1;\r\n                    y = y1;\r\n                    xe = x2;\r\n                }\r\n                else {\r\n                    x = x2;\r\n                    y = y2;\r\n                    xe = x1;\r\n                }\r\n                _this.drawPxl(x, y);\r\n                for (i = 0; x < xe; i += 1) {\r\n                    x += 1;\r\n                    if (px < 0) {\r\n                        px += 2 * dy1;\r\n                    }\r\n                    else {\r\n                        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {\r\n                            y += 1;\r\n                        }\r\n                        else {\r\n                            y -= 1;\r\n                        }\r\n                        px += 2 * (dy1 - dx1);\r\n                    }\r\n                    _this.drawPxl(x, y);\r\n                }\r\n            }\r\n            else {\r\n                if (dy >= 0) {\r\n                    x = x1;\r\n                    y = y1;\r\n                    ye = y2;\r\n                }\r\n                else {\r\n                    x = x2;\r\n                    y = y2;\r\n                    ye = y1;\r\n                }\r\n                _this.drawPxl(x, y);\r\n                for (i = 0; y < ye; i += 1) {\r\n                    y += 1;\r\n                    if (py <= 0) {\r\n                        py += 2 * dx1;\r\n                    }\r\n                    else {\r\n                        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {\r\n                            x += 1;\r\n                        }\r\n                        else {\r\n                            x -= 1;\r\n                        }\r\n                        py += 2 * (dx1 - dy1);\r\n                    }\r\n                    _this.drawPxl(x, y);\r\n                }\r\n            }\r\n        };\r\n        this.drawPxl = function (x, y) {\r\n            var pxlSize = _this.canvasLength / _this.matrixSize;\r\n            _this.ctx.fillStyle = _this.color;\r\n            if (_this.matrixSize === 512) {\r\n                var x1 = x;\r\n                var y1 = y;\r\n                _this.ctx.fillRect(x1, y1, pxlSize, pxlSize);\r\n            }\r\n            else {\r\n                var _a = _this.getPixelSize(x, y), x1 = _a[0], y1 = _a[1];\r\n                _this.ctx.fillRect(x1, y1, pxlSize, pxlSize);\r\n            }\r\n        };\r\n        this.getPixelSize = function (coord1, coord2) {\r\n            var arr = [];\r\n            var columnSize = _this.canvasLength / _this.matrixSize;\r\n            arr.push(Math.floor(coord1 / columnSize) * columnSize, Math.floor(coord2 / columnSize) * columnSize);\r\n            return arr;\r\n        };\r\n        this.clear = function () {\r\n            _this.ctx.clearRect(0, 0, _this.canvasLength, _this.canvasLength);\r\n        };\r\n        this.fill = function () {\r\n            _this.ctx.fillStyle = _this.color;\r\n            var pxlSize = _this.canvasLength / _this.matrixSize;\r\n            for (var i = 0; i < _this.matrixSize; i += 1) {\r\n                for (var j = 0; j < _this.matrixSize; j += 1) {\r\n                    _this.ctx.fillRect(pxlSize * j, pxlSize * i, pxlSize, pxlSize);\r\n                }\r\n            }\r\n        };\r\n        this.colorPicker = function (x, y) {\r\n            var pixel = _this.ctx.getImageData(x, y, 1, 1);\r\n            var data = pixel.data;\r\n            var rgba = \"rgba(\" + data[0] + \",\" + data[1] + \",\" + data[2] + \",\" + data[3] / 255 + \")\";\r\n            _this.colorPickerValue = rgba;\r\n        };\r\n        this.canvas = canvas;\r\n        this.ctx = context;\r\n        this.selectedTool = 'Pencil';\r\n        this.colorPickerValue = '';\r\n        this.canvasLength = 0;\r\n        this.matrixSize = 0;\r\n        this.color = '';\r\n        this.isDrawing = false;\r\n        this.pointState = new PointState();\r\n    }\r\n    return Tools;\r\n}());\r\nvar PointState = /** @class */ (function () {\r\n    function PointState(initX, initY) {\r\n        if (initX === void 0) { initX = 0; }\r\n        if (initY === void 0) { initY = 0; }\r\n        this.X = initX;\r\n        this.Y = initY;\r\n    }\r\n    PointState.prototype.setX = function (x) {\r\n        this.X = x;\r\n    };\r\n    PointState.prototype.setY = function (y) {\r\n        this.Y = y;\r\n    };\r\n    PointState.prototype.getX = function () {\r\n        return this.X;\r\n    };\r\n    PointState.prototype.getY = function () {\r\n        return this.Y;\r\n    };\r\n    return PointState;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tools);\r\n\n\n//# sourceURL=webpack:///./functional/Tools.ts?");

/***/ }),

/***/ "./functional/api.ts":
/*!***************************!*\
  !*** ./functional/api.ts ***!
  \***************************/
/*! exports provided: fetchData, PhotoObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhotoObject\", function() { return PhotoObject; });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ \"./functional/consts.ts\");\n\r\nvar fetchData = function (query, orientation, page, per_page) {\r\n    if (orientation === void 0) { orientation = ''; }\r\n    if (page === void 0) { page = 1; }\r\n    if (per_page === void 0) { per_page = 10; }\r\n    var url = \"https://api.unsplash.com/search/photos?page=\" + page + \"&per_page=\" + per_page + \"&query=town,\" + query + (orientation.length !== 0 ? \"&orientation=\" + orientation : '');\r\n    return fetch(url, {\r\n        headers: {\r\n            Authorization: \"Client-ID \" + _consts__WEBPACK_IMPORTED_MODULE_0__[\"ACCESS_KEY\"],\r\n        },\r\n    })\r\n        .then(function (data) { return data.json(); })\r\n        .then(function (json) {\r\n        var arr = json.results;\r\n        if (arr.length > 0) {\r\n            var photoObjArray_1 = [];\r\n            arr.forEach(function (el) {\r\n                var url = el.urls.raw;\r\n                var cleanUrl = String(url).slice(0, url.indexOf('?'));\r\n                var photo = new PhotoObject(el.width, el.height, cleanUrl, el.urls.thumb, el.alt_description);\r\n                photoObjArray_1.push(photo);\r\n            });\r\n            return photoObjArray_1;\r\n        }\r\n        else {\r\n            throw new Error('There is no photo for such request!');\r\n        }\r\n    })\r\n        .catch(function (e) {\r\n        console.error(e);\r\n    });\r\n};\r\nvar PhotoObject = /** @class */ (function () {\r\n    function PhotoObject(width, height, url, smallUrl, name) {\r\n        this.width = width;\r\n        this.height = height;\r\n        this.url = url;\r\n        this.smallUrl = smallUrl;\r\n        this.name = name;\r\n    }\r\n    return PhotoObject;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./functional/api.ts?");

/***/ }),

/***/ "./functional/consts.ts":
/*!******************************!*\
  !*** ./functional/consts.ts ***!
  \******************************/
/*! exports provided: ACCESS_KEY, SECRET_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACCESS_KEY\", function() { return ACCESS_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SECRET_KEY\", function() { return SECRET_KEY; });\nvar ACCESS_KEY = '081e16787a5369762a370e032e12627dbd94dd81836ea178a877cb1653017ad8';\r\nvar SECRET_KEY = 'fc73cbcd49fa0cc48f4b23c852f267f2843aabca04e1637a3e6964007ba70057';\r\n\r\n\n\n//# sourceURL=webpack:///./functional/consts.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_arrows_alt_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/arrows-alt.svg */ \"./assets/icons/arrows-alt.svg\");\n/* harmony import */ var _assets_icons_arrows_alt_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrows_alt_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_icons_exchange_alt_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/exchange-alt.svg */ \"./assets/icons/exchange-alt.svg\");\n/* harmony import */ var _assets_icons_exchange_alt_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_exchange_alt_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_eye_dropper_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/eye-dropper.svg */ \"./assets/icons/eye-dropper.svg\");\n/* harmony import */ var _assets_icons_eye_dropper_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_eye_dropper_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_icons_fill_drip_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/fill-drip.svg */ \"./assets/icons/fill-drip.svg\");\n/* harmony import */ var _assets_icons_fill_drip_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_fill_drip_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/pencil.svg */ \"./assets/icons/pencil.svg\");\n/* harmony import */ var _assets_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/search-icon.svg */ \"./assets/icons/search-icon.svg\");\n/* harmony import */ var _assets_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functional_Palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functional/Palette */ \"./functional/Palette.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = function () {\r\n    var canvas = document.getElementById('canvas');\r\n    var ctx = canvas.getContext('2d');\r\n    var palette = new _functional_Palette__WEBPACK_IMPORTED_MODULE_7__[\"default\"](ctx);\r\n    palette.init();\r\n};\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.scss?");

/***/ })

/******/ });