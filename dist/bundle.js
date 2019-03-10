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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst interpreter_1 = __webpack_require__(/*! ./interpreter */ \"./app/interpreter.js\");\r\nconst strategy_1 = __webpack_require__(/*! ./strategy */ \"./app/strategy.js\");\r\nlet renderingSystem = new strategy_1.Canvas();\r\nexports.renderingSystem = renderingSystem;\r\nclass Commands {\r\n    constructor() {\r\n    }\r\n    test(str) {\r\n        var instruction = new interpreter_1.MasterExpression();\r\n        return instruction.interpret(str);\r\n    }\r\n    draw() {\r\n        var canvas = document.getElementById('canvas');\r\n        if (canvas.getContext) {\r\n            let ctx = canvas.getContext('2d');\r\n            ctx.fillRect(25, 25, 100, 100);\r\n        }\r\n    }\r\n}\r\nwindow.onload = () => {\r\n    let app = new Commands();\r\n    if (app.test(\"draw square 2 2 4\"))\r\n        app.draw();\r\n    //TODO: passar a rendering tool para\r\n};\r\n//document.body.innerHTML = String(app.test(\"draw square 2 2 4\"));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcz85ZmVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycHJldGVyXzEgPSByZXF1aXJlKFwiLi9pbnRlcnByZXRlclwiKTtcclxuY29uc3Qgc3RyYXRlZ3lfMSA9IHJlcXVpcmUoXCIuL3N0cmF0ZWd5XCIpO1xyXG5sZXQgcmVuZGVyaW5nU3lzdGVtID0gbmV3IHN0cmF0ZWd5XzEuQ2FudmFzKCk7XHJcbmV4cG9ydHMucmVuZGVyaW5nU3lzdGVtID0gcmVuZGVyaW5nU3lzdGVtO1xyXG5jbGFzcyBDb21tYW5kcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIHRlc3Qoc3RyKSB7XHJcbiAgICAgICAgdmFyIGluc3RydWN0aW9uID0gbmV3IGludGVycHJldGVyXzEuTWFzdGVyRXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbi5pbnRlcnByZXQoc3RyKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMjUsIDI1LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXBwID0gbmV3IENvbW1hbmRzKCk7XHJcbiAgICBpZiAoYXBwLnRlc3QoXCJkcmF3IHNxdWFyZSAyIDIgNFwiKSlcclxuICAgICAgICBhcHAuZHJhdygpO1xyXG4gICAgLy9UT0RPOiBwYXNzYXIgYSByZW5kZXJpbmcgdG9vbCBwYXJhXHJcbn07XHJcbi8vZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBTdHJpbmcoYXBwLnRlc3QoXCJkcmF3IHNxdWFyZSAyIDIgNFwiKSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/app.js\n");

/***/ }),

/***/ "./app/interpreter.js":
/*!****************************!*\
  !*** ./app/interpreter.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//AND e UNION operator proxima aula \r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass TemporaryExpression {\r\n    constructor() { }\r\n    interpret(context) {\r\n        return false;\r\n    }\r\n}\r\nclass MasterExpression {\r\n    constructor() {\r\n        this.expression = new TemporaryExpression();\r\n    }\r\n    interpret(context) {\r\n        console.log(\"`interpret` method of MasterExpression is being called!\");\r\n        var contextParts = context.split(\" AND \");\r\n        if (contextParts.length == 1) {\r\n            this.expression = new InstructionExpression();\r\n        }\r\n        else {\r\n            this.expression = new AndExpression();\r\n        }\r\n        return this.expression.interpret(context);\r\n    }\r\n}\r\nexports.MasterExpression = MasterExpression;\r\nclass InstructionExpression {\r\n    constructor() {\r\n        this.expression = new TemporaryExpression();\r\n    }\r\n    interpret(context) {\r\n        console.log(\"`interpret` method of InstructionExpression is being called!\");\r\n        var contextParts = context.split(\" \");\r\n        switch (contextParts[0]) {\r\n            case \"draw\":\r\n                this.expression = new DrawExpression();\r\n                break;\r\n            default:\r\n                return false;\r\n        }\r\n        var rest = context.substring(context.indexOf(\" \") + 1);\r\n        return this.expression.interpret(rest);\r\n    }\r\n}\r\nclass AndExpression {\r\n    constructor() {\r\n        this.lhsExpression = new TemporaryExpression();\r\n        this.rhsExpression = new TemporaryExpression();\r\n    }\r\n    interpret(context) {\r\n        console.log(\"`interpret` method of AndExpression is being called!\");\r\n        var contextParts = context.split(\" AND \");\r\n        var restContext = context.substr(context.indexOf(\" AND \") + \" AND \".length);\r\n        this.lhsExpression = new InstructionExpression();\r\n        this.rhsExpression = new MasterExpression();\r\n        return this.lhsExpression.interpret(contextParts[0]) && this.rhsExpression.interpret(restContext);\r\n    }\r\n}\r\nclass DrawExpression {\r\n    interpret(context) {\r\n        console.log(\"`interpret` method of DrawExpression is being called!\");\r\n        var contextParts = context.split(\" \");\r\n        switch (contextParts[0]) {\r\n            case \"square\":\r\n                console.log(\"DRAW SQUARE\" + context.substr(context.indexOf(\" \")));\r\n                return contextParts.length == 4;\r\n                break;\r\n            case \"rect\":\r\n                console.log(\"DRAW RECT\");\r\n                return contextParts.length == 5;\r\n                break;\r\n            default:\r\n                return false;\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW50ZXJwcmV0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW50ZXJwcmV0ZXIuanM/YTBiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy9BTkQgZSBVTklPTiBvcGVyYXRvciBwcm94aW1hIGF1bGEgXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgVGVtcG9yYXJ5RXhwcmVzc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgaW50ZXJwcmV0KGNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgTWFzdGVyRXhwcmVzc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBuZXcgVGVtcG9yYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwcmV0KGNvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImBpbnRlcnByZXRgIG1ldGhvZCBvZiBNYXN0ZXJFeHByZXNzaW9uIGlzIGJlaW5nIGNhbGxlZCFcIik7XHJcbiAgICAgICAgdmFyIGNvbnRleHRQYXJ0cyA9IGNvbnRleHQuc3BsaXQoXCIgQU5EIFwiKTtcclxuICAgICAgICBpZiAoY29udGV4dFBhcnRzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBJbnN0cnVjdGlvbkV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBBbmRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24uaW50ZXJwcmV0KGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWFzdGVyRXhwcmVzc2lvbiA9IE1hc3RlckV4cHJlc3Npb247XHJcbmNsYXNzIEluc3RydWN0aW9uRXhwcmVzc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBuZXcgVGVtcG9yYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwcmV0KGNvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImBpbnRlcnByZXRgIG1ldGhvZCBvZiBJbnN0cnVjdGlvbkV4cHJlc3Npb24gaXMgYmVpbmcgY2FsbGVkIVwiKTtcclxuICAgICAgICB2YXIgY29udGV4dFBhcnRzID0gY29udGV4dC5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgc3dpdGNoIChjb250ZXh0UGFydHNbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImRyYXdcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBEcmF3RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN0ID0gY29udGV4dC5zdWJzdHJpbmcoY29udGV4dC5pbmRleE9mKFwiIFwiKSArIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24uaW50ZXJwcmV0KHJlc3QpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEFuZEV4cHJlc3Npb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5saHNFeHByZXNzaW9uID0gbmV3IFRlbXBvcmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLnJoc0V4cHJlc3Npb24gPSBuZXcgVGVtcG9yYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwcmV0KGNvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImBpbnRlcnByZXRgIG1ldGhvZCBvZiBBbmRFeHByZXNzaW9uIGlzIGJlaW5nIGNhbGxlZCFcIik7XHJcbiAgICAgICAgdmFyIGNvbnRleHRQYXJ0cyA9IGNvbnRleHQuc3BsaXQoXCIgQU5EIFwiKTtcclxuICAgICAgICB2YXIgcmVzdENvbnRleHQgPSBjb250ZXh0LnN1YnN0cihjb250ZXh0LmluZGV4T2YoXCIgQU5EIFwiKSArIFwiIEFORCBcIi5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMubGhzRXhwcmVzc2lvbiA9IG5ldyBJbnN0cnVjdGlvbkV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLnJoc0V4cHJlc3Npb24gPSBuZXcgTWFzdGVyRXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxoc0V4cHJlc3Npb24uaW50ZXJwcmV0KGNvbnRleHRQYXJ0c1swXSkgJiYgdGhpcy5yaHNFeHByZXNzaW9uLmludGVycHJldChyZXN0Q29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRHJhd0V4cHJlc3Npb24ge1xyXG4gICAgaW50ZXJwcmV0KGNvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImBpbnRlcnByZXRgIG1ldGhvZCBvZiBEcmF3RXhwcmVzc2lvbiBpcyBiZWluZyBjYWxsZWQhXCIpO1xyXG4gICAgICAgIHZhciBjb250ZXh0UGFydHMgPSBjb250ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBzd2l0Y2ggKGNvbnRleHRQYXJ0c1swXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRSQVcgU1FVQVJFXCIgKyBjb250ZXh0LnN1YnN0cihjb250ZXh0LmluZGV4T2YoXCIgXCIpKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dFBhcnRzLmxlbmd0aCA9PSA0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWN0XCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRSQVcgUkVDVFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0UGFydHMubGVuZ3RoID09IDU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/interpreter.js\n");

/***/ }),

/***/ "./app/strategy.js":
/*!*************************!*\
  !*** ./app/strategy.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Canvas {\r\n    constructor() {\r\n        this.canvas = document.getElementById('canvas');\r\n    }\r\n    drawSquare(args) {\r\n        args.shift(); //to remove the 'square' argument of the draw expression\r\n        console.log(\"Canvas - DRAW SQUARE \" + args);\r\n        let canvasContext = this.canvas.getContext('2d');\r\n        let x = Number(args[0]);\r\n        let y = Number(args[1]);\r\n        let size = Number(args[2]);\r\n        canvasContext.rect(x, y, size, size);\r\n        canvasContext.stroke();\r\n        //canvasContext.fillRect(x, y, size, size);\r\n    }\r\n    drawRectangle(args) {\r\n        args.shift(); //to remove the 'rect' argument of the draw expression\r\n        console.log(\"Canvas - DRAW RECT \" + args);\r\n        let canvasContext = this.canvas.getContext('2d');\r\n        let x = Number(args[0]);\r\n        let y = Number(args[1]);\r\n        let width = Number(args[2]);\r\n        let height = Number(args[3]);\r\n        canvasContext.rect(x, y, width, height);\r\n        canvasContext.stroke();\r\n        //canvasContext.fillRect(x, y, width, height);\r\n    }\r\n}\r\nexports.Canvas = Canvas;\r\nclass SVG {\r\n    constructor() {\r\n        this.svg = document.getElementById('svg');\r\n        this.namespace = \"http://www.w3.org/2000/svg\";\r\n    }\r\n    drawSquare(args) {\r\n        args.shift(); //to remove the 'square' argument of the draw expression\r\n        console.log(\"SVG - DRAW SQUARE \" + args);\r\n        let square = document.createElementNS(this.namespace, 'rect');\r\n        let x = args[0];\r\n        let y = args[1];\r\n        let size = args[2];\r\n        square.setAttributeNS(null, 'x', x);\r\n        square.setAttributeNS(null, 'y', y);\r\n        square.setAttributeNS(null, 'width', size);\r\n        square.setAttributeNS(null, 'height', size);\r\n        if (this.svg != undefined)\r\n            this.svg.appendChild(square);\r\n    }\r\n    drawRectangle(args) {\r\n        args.shift(); //to remove the 'rect' argument of the draw expression\r\n        console.log(\"SVG - DRAW RECT \" + args);\r\n        let rect = document.createElementNS(this.namespace, 'rect');\r\n        let x = args[0];\r\n        let y = args[1];\r\n        let width = args[2];\r\n        let height = args[3];\r\n        rect.setAttributeNS(null, 'x', x);\r\n        rect.setAttributeNS(null, 'y', y);\r\n        rect.setAttributeNS(null, 'width', width);\r\n        rect.setAttributeNS(null, 'height', height);\r\n        if (this.svg != undefined)\r\n            this.svg.appendChild(rect);\r\n    }\r\n}\r\nexports.SVG = SVG;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RyYXRlZ3kuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RyYXRlZ3kuanM/ZjU5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBDYW52YXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICB9XHJcbiAgICBkcmF3U3F1YXJlKGFyZ3MpIHtcclxuICAgICAgICBhcmdzLnNoaWZ0KCk7IC8vdG8gcmVtb3ZlIHRoZSAnc3F1YXJlJyBhcmd1bWVudCBvZiB0aGUgZHJhdyBleHByZXNzaW9uXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDYW52YXMgLSBEUkFXIFNRVUFSRSBcIiArIGFyZ3MpO1xyXG4gICAgICAgIGxldCBjYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBsZXQgeCA9IE51bWJlcihhcmdzWzBdKTtcclxuICAgICAgICBsZXQgeSA9IE51bWJlcihhcmdzWzFdKTtcclxuICAgICAgICBsZXQgc2l6ZSA9IE51bWJlcihhcmdzWzJdKTtcclxuICAgICAgICBjYW52YXNDb250ZXh0LnJlY3QoeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgY2FudmFzQ29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAvL2NhbnZhc0NvbnRleHQuZmlsbFJlY3QoeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBkcmF3UmVjdGFuZ2xlKGFyZ3MpIHtcclxuICAgICAgICBhcmdzLnNoaWZ0KCk7IC8vdG8gcmVtb3ZlIHRoZSAncmVjdCcgYXJndW1lbnQgb2YgdGhlIGRyYXcgZXhwcmVzc2lvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FudmFzIC0gRFJBVyBSRUNUIFwiICsgYXJncyk7XHJcbiAgICAgICAgbGV0IGNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGxldCB4ID0gTnVtYmVyKGFyZ3NbMF0pO1xyXG4gICAgICAgIGxldCB5ID0gTnVtYmVyKGFyZ3NbMV0pO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IE51bWJlcihhcmdzWzJdKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gTnVtYmVyKGFyZ3NbM10pO1xyXG4gICAgICAgIGNhbnZhc0NvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjYW52YXNDb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIC8vY2FudmFzQ29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNhbnZhcyA9IENhbnZhcztcclxuY2xhc3MgU1ZHIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N2ZycpO1xyXG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgfVxyXG4gICAgZHJhd1NxdWFyZShhcmdzKSB7XHJcbiAgICAgICAgYXJncy5zaGlmdCgpOyAvL3RvIHJlbW92ZSB0aGUgJ3NxdWFyZScgYXJndW1lbnQgb2YgdGhlIGRyYXcgZXhwcmVzc2lvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1ZHIC0gRFJBVyBTUVVBUkUgXCIgKyBhcmdzKTtcclxuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMubmFtZXNwYWNlLCAncmVjdCcpO1xyXG4gICAgICAgIGxldCB4ID0gYXJnc1swXTtcclxuICAgICAgICBsZXQgeSA9IGFyZ3NbMV07XHJcbiAgICAgICAgbGV0IHNpemUgPSBhcmdzWzJdO1xyXG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIHgpO1xyXG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIHkpO1xyXG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBzaXplKTtcclxuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHNpemUpO1xyXG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICB9XHJcbiAgICBkcmF3UmVjdGFuZ2xlKGFyZ3MpIHtcclxuICAgICAgICBhcmdzLnNoaWZ0KCk7IC8vdG8gcmVtb3ZlIHRoZSAncmVjdCcgYXJndW1lbnQgb2YgdGhlIGRyYXcgZXhwcmVzc2lvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1ZHIC0gRFJBVyBSRUNUIFwiICsgYXJncyk7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModGhpcy5uYW1lc3BhY2UsICdyZWN0Jyk7XHJcbiAgICAgICAgbGV0IHggPSBhcmdzWzBdO1xyXG4gICAgICAgIGxldCB5ID0gYXJnc1sxXTtcclxuICAgICAgICBsZXQgd2lkdGggPSBhcmdzWzJdO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBhcmdzWzNdO1xyXG4gICAgICAgIHJlY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCB4KTtcclxuICAgICAgICByZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgeSk7XHJcbiAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB3aWR0aCk7XHJcbiAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgaGVpZ2h0KTtcclxuICAgICAgICBpZiAodGhpcy5zdmcgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChyZWN0KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNWRyA9IFNWRztcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/strategy.js\n");

/***/ })

/******/ });