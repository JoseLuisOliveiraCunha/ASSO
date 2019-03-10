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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar interpreter_1 = __webpack_require__(/*! ./interpreter */ \"./app/interpreter.js\");\r\nvar strategy_1 = __webpack_require__(/*! ./strategy */ \"./app/strategy.js\");\r\nvar renderingSystem = new strategy_1.Canvas();\r\nexports.renderingSystem = renderingSystem;\r\nvar Commands = /** @class */ (function () {\r\n    function Commands() {\r\n    }\r\n    Commands.prototype.test = function (str) {\r\n        var instruction = new interpreter_1.MasterExpression();\r\n        return instruction.interpret(str);\r\n    };\r\n    Commands.prototype.draw = function () {\r\n        var canvas = document.getElementById('canvas');\r\n        if (canvas.getContext) {\r\n            var ctx = canvas.getContext('2d');\r\n            ctx.fillRect(25, 25, 100, 100);\r\n        }\r\n    };\r\n    return Commands;\r\n}());\r\nwindow.onload = function () {\r\n    var app = new Commands();\r\n    if (app.test(\"draw square 2 2 4\"))\r\n        app.draw();\r\n    //TODO: passar a rendering tool para\r\n};\r\n//document.body.innerHTML = String(app.test(\"draw square 2 2 4\"));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcz85ZmVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBpbnRlcnByZXRlcl8xID0gcmVxdWlyZShcIi4vaW50ZXJwcmV0ZXJcIik7XHJcbnZhciBzdHJhdGVneV8xID0gcmVxdWlyZShcIi4vc3RyYXRlZ3lcIik7XHJcbnZhciByZW5kZXJpbmdTeXN0ZW0gPSBuZXcgc3RyYXRlZ3lfMS5DYW52YXMoKTtcclxuZXhwb3J0cy5yZW5kZXJpbmdTeXN0ZW0gPSByZW5kZXJpbmdTeXN0ZW07XHJcbnZhciBDb21tYW5kcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1hbmRzKCkge1xyXG4gICAgfVxyXG4gICAgQ29tbWFuZHMucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgdmFyIGluc3RydWN0aW9uID0gbmV3IGludGVycHJldGVyXzEuTWFzdGVyRXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbi5pbnRlcnByZXQoc3RyKTtcclxuICAgIH07XHJcbiAgICBDb21tYW5kcy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xyXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgyNSwgMjUsIDEwMCwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbW1hbmRzO1xyXG59KCkpO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFwcCA9IG5ldyBDb21tYW5kcygpO1xyXG4gICAgaWYgKGFwcC50ZXN0KFwiZHJhdyBzcXVhcmUgMiAyIDRcIikpXHJcbiAgICAgICAgYXBwLmRyYXcoKTtcclxuICAgIC8vVE9ETzogcGFzc2FyIGEgcmVuZGVyaW5nIHRvb2wgcGFyYVxyXG59O1xyXG4vL2RvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gU3RyaW5nKGFwcC50ZXN0KFwiZHJhdyBzcXVhcmUgMiAyIDRcIikpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/app.js\n");

/***/ }),

/***/ "./app/interpreter.js":
/*!****************************!*\
  !*** ./app/interpreter.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//AND e UNION operator proxima aula \r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar TemporaryExpression = /** @class */ (function () {\r\n    function TemporaryExpression() {\r\n    }\r\n    TemporaryExpression.prototype.interpret = function (context) {\r\n        return false;\r\n    };\r\n    return TemporaryExpression;\r\n}());\r\nvar MasterExpression = /** @class */ (function () {\r\n    function MasterExpression() {\r\n        this.expression = new TemporaryExpression();\r\n    }\r\n    MasterExpression.prototype.interpret = function (context) {\r\n        console.log(\"`interpret` method of MasterExpression is being called!\");\r\n        var contextParts = context.split(\" AND \");\r\n        if (contextParts.length == 1) {\r\n            this.expression = new InstructionExpression();\r\n        }\r\n        else {\r\n            this.expression = new AndExpression();\r\n        }\r\n        return this.expression.interpret(context);\r\n    };\r\n    return MasterExpression;\r\n}());\r\nexports.MasterExpression = MasterExpression;\r\nvar InstructionExpression = /** @class */ (function () {\r\n    function InstructionExpression() {\r\n        this.expression = new TemporaryExpression();\r\n    }\r\n    InstructionExpression.prototype.interpret = function (context) {\r\n        console.log(\"`interpret` method of InstructionExpression is being called!\");\r\n        var contextParts = context.split(\" \");\r\n        switch (contextParts[0]) {\r\n            case \"draw\":\r\n                this.expression = new DrawExpression();\r\n                break;\r\n            default:\r\n                return false;\r\n        }\r\n        var rest = context.substring(context.indexOf(\" \") + 1);\r\n        return this.expression.interpret(rest);\r\n    };\r\n    return InstructionExpression;\r\n}());\r\nvar AndExpression = /** @class */ (function () {\r\n    function AndExpression() {\r\n        this.lhsExpression = new TemporaryExpression();\r\n        this.rhsExpression = new TemporaryExpression();\r\n    }\r\n    AndExpression.prototype.interpret = function (context) {\r\n        console.log(\"`interpret` method of AndExpression is being called!\");\r\n        var contextParts = context.split(\" AND \");\r\n        var restContext = context.substr(context.indexOf(\" AND \") + \" AND \".length);\r\n        this.lhsExpression = new InstructionExpression();\r\n        this.rhsExpression = new MasterExpression();\r\n        return this.lhsExpression.interpret(contextParts[0]) && this.rhsExpression.interpret(restContext);\r\n    };\r\n    return AndExpression;\r\n}());\r\nvar DrawExpression = /** @class */ (function () {\r\n    function DrawExpression() {\r\n    }\r\n    DrawExpression.prototype.interpret = function (context) {\r\n        console.log(\"`interpret` method of DrawExpression is being called!\");\r\n        var contextParts = context.split(\" \");\r\n        switch (contextParts[0]) {\r\n            case \"square\":\r\n                console.log(\"DRAW SQUARE\" + context.substr(context.indexOf(\" \")));\r\n                return contextParts.length == 4;\r\n                break;\r\n            case \"rect\":\r\n                console.log(\"DRAW RECT\");\r\n                return contextParts.length == 5;\r\n                break;\r\n            default:\r\n                return false;\r\n        }\r\n    };\r\n    return DrawExpression;\r\n}());\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW50ZXJwcmV0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW50ZXJwcmV0ZXIuanM/YTBiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy9BTkQgZSBVTklPTiBvcGVyYXRvciBwcm94aW1hIGF1bGEgXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRlbXBvcmFyeUV4cHJlc3Npb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZW1wb3JhcnlFeHByZXNzaW9uKCkge1xyXG4gICAgfVxyXG4gICAgVGVtcG9yYXJ5RXhwcmVzc2lvbi5wcm90b3R5cGUuaW50ZXJwcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRlbXBvcmFyeUV4cHJlc3Npb247XHJcbn0oKSk7XHJcbnZhciBNYXN0ZXJFeHByZXNzaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWFzdGVyRXhwcmVzc2lvbigpIHtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBuZXcgVGVtcG9yYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgfVxyXG4gICAgTWFzdGVyRXhwcmVzc2lvbi5wcm90b3R5cGUuaW50ZXJwcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImBpbnRlcnByZXRgIG1ldGhvZCBvZiBNYXN0ZXJFeHByZXNzaW9uIGlzIGJlaW5nIGNhbGxlZCFcIik7XHJcbiAgICAgICAgdmFyIGNvbnRleHRQYXJ0cyA9IGNvbnRleHQuc3BsaXQoXCIgQU5EIFwiKTtcclxuICAgICAgICBpZiAoY29udGV4dFBhcnRzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBJbnN0cnVjdGlvbkV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBBbmRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24uaW50ZXJwcmV0KGNvbnRleHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYXN0ZXJFeHByZXNzaW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLk1hc3RlckV4cHJlc3Npb24gPSBNYXN0ZXJFeHByZXNzaW9uO1xyXG52YXIgSW5zdHJ1Y3Rpb25FeHByZXNzaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5zdHJ1Y3Rpb25FeHByZXNzaW9uKCkge1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBUZW1wb3JhcnlFeHByZXNzaW9uKCk7XHJcbiAgICB9XHJcbiAgICBJbnN0cnVjdGlvbkV4cHJlc3Npb24ucHJvdG90eXBlLmludGVycHJldCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJgaW50ZXJwcmV0YCBtZXRob2Qgb2YgSW5zdHJ1Y3Rpb25FeHByZXNzaW9uIGlzIGJlaW5nIGNhbGxlZCFcIik7XHJcbiAgICAgICAgdmFyIGNvbnRleHRQYXJ0cyA9IGNvbnRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoY29udGV4dFBhcnRzWzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkcmF3XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBuZXcgRHJhd0V4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdCA9IGNvbnRleHQuc3Vic3RyaW5nKGNvbnRleHQuaW5kZXhPZihcIiBcIikgKyAxKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uLmludGVycHJldChyZXN0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5zdHJ1Y3Rpb25FeHByZXNzaW9uO1xyXG59KCkpO1xyXG52YXIgQW5kRXhwcmVzc2lvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFuZEV4cHJlc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5saHNFeHByZXNzaW9uID0gbmV3IFRlbXBvcmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLnJoc0V4cHJlc3Npb24gPSBuZXcgVGVtcG9yYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgfVxyXG4gICAgQW5kRXhwcmVzc2lvbi5wcm90b3R5cGUuaW50ZXJwcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImBpbnRlcnByZXRgIG1ldGhvZCBvZiBBbmRFeHByZXNzaW9uIGlzIGJlaW5nIGNhbGxlZCFcIik7XHJcbiAgICAgICAgdmFyIGNvbnRleHRQYXJ0cyA9IGNvbnRleHQuc3BsaXQoXCIgQU5EIFwiKTtcclxuICAgICAgICB2YXIgcmVzdENvbnRleHQgPSBjb250ZXh0LnN1YnN0cihjb250ZXh0LmluZGV4T2YoXCIgQU5EIFwiKSArIFwiIEFORCBcIi5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMubGhzRXhwcmVzc2lvbiA9IG5ldyBJbnN0cnVjdGlvbkV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLnJoc0V4cHJlc3Npb24gPSBuZXcgTWFzdGVyRXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxoc0V4cHJlc3Npb24uaW50ZXJwcmV0KGNvbnRleHRQYXJ0c1swXSkgJiYgdGhpcy5yaHNFeHByZXNzaW9uLmludGVycHJldChyZXN0Q29udGV4dCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFuZEV4cHJlc3Npb247XHJcbn0oKSk7XHJcbnZhciBEcmF3RXhwcmVzc2lvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERyYXdFeHByZXNzaW9uKCkge1xyXG4gICAgfVxyXG4gICAgRHJhd0V4cHJlc3Npb24ucHJvdG90eXBlLmludGVycHJldCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJgaW50ZXJwcmV0YCBtZXRob2Qgb2YgRHJhd0V4cHJlc3Npb24gaXMgYmVpbmcgY2FsbGVkIVwiKTtcclxuICAgICAgICB2YXIgY29udGV4dFBhcnRzID0gY29udGV4dC5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgc3dpdGNoIChjb250ZXh0UGFydHNbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEUkFXIFNRVUFSRVwiICsgY29udGV4dC5zdWJzdHIoY29udGV4dC5pbmRleE9mKFwiIFwiKSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHRQYXJ0cy5sZW5ndGggPT0gNDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVjdFwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEUkFXIFJFQ1RcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dFBhcnRzLmxlbmd0aCA9PSA1O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBEcmF3RXhwcmVzc2lvbjtcclxufSgpKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/interpreter.js\n");

/***/ }),

/***/ "./app/strategy.js":
/*!*************************!*\
  !*** ./app/strategy.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Canvas = /** @class */ (function () {\r\n    function Canvas() {\r\n        this.canvas = document.getElementById('canvas');\r\n    }\r\n    Canvas.prototype.drawSquare = function (args) {\r\n        args.shift(); //to remove the 'square' argument of the draw expression\r\n        console.log(\"Canvas - DRAW SQUARE \" + args);\r\n        var canvasContext = this.canvas.getContext('2d');\r\n        var x = Number(args[0]);\r\n        var y = Number(args[1]);\r\n        var size = Number(args[2]);\r\n        canvasContext.rect(x, y, size, size);\r\n        canvasContext.stroke();\r\n        //canvasContext.fillRect(x, y, size, size);\r\n    };\r\n    Canvas.prototype.drawRectangle = function (args) {\r\n        args.shift(); //to remove the 'rect' argument of the draw expression\r\n        console.log(\"Canvas - DRAW RECT \" + args);\r\n        var canvasContext = this.canvas.getContext('2d');\r\n        var x = Number(args[0]);\r\n        var y = Number(args[1]);\r\n        var width = Number(args[2]);\r\n        var height = Number(args[3]);\r\n        canvasContext.rect(x, y, width, height);\r\n        canvasContext.stroke();\r\n        //canvasContext.fillRect(x, y, width, height);\r\n    };\r\n    return Canvas;\r\n}());\r\nexports.Canvas = Canvas;\r\nvar SVG = /** @class */ (function () {\r\n    function SVG() {\r\n        this.svg = document.getElementById('svg');\r\n        this.namespace = \"http://www.w3.org/2000/svg\";\r\n    }\r\n    SVG.prototype.drawSquare = function (args) {\r\n        args.shift(); //to remove the 'square' argument of the draw expression\r\n        console.log(\"SVG - DRAW SQUARE \" + args);\r\n        var square = document.createElementNS(this.namespace, 'rect');\r\n        var x = args[0];\r\n        var y = args[1];\r\n        var size = args[2];\r\n        square.setAttributeNS(null, 'x', x);\r\n        square.setAttributeNS(null, 'y', y);\r\n        square.setAttributeNS(null, 'width', size);\r\n        square.setAttributeNS(null, 'height', size);\r\n        if (this.svg != undefined)\r\n            this.svg.appendChild(square);\r\n    };\r\n    SVG.prototype.drawRectangle = function (args) {\r\n        args.shift(); //to remove the 'rect' argument of the draw expression\r\n        console.log(\"SVG - DRAW RECT \" + args);\r\n        var rect = document.createElementNS(this.namespace, 'rect');\r\n        var x = args[0];\r\n        var y = args[1];\r\n        var width = args[2];\r\n        var height = args[3];\r\n        rect.setAttributeNS(null, 'x', x);\r\n        rect.setAttributeNS(null, 'y', y);\r\n        rect.setAttributeNS(null, 'width', width);\r\n        rect.setAttributeNS(null, 'height', height);\r\n        if (this.svg != undefined)\r\n            this.svg.appendChild(rect);\r\n    };\r\n    return SVG;\r\n}());\r\nexports.SVG = SVG;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RyYXRlZ3kuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RyYXRlZ3kuanM/ZjU5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2FudmFzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgfVxyXG4gICAgQ2FudmFzLnByb3RvdHlwZS5kcmF3U3F1YXJlID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICBhcmdzLnNoaWZ0KCk7IC8vdG8gcmVtb3ZlIHRoZSAnc3F1YXJlJyBhcmd1bWVudCBvZiB0aGUgZHJhdyBleHByZXNzaW9uXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDYW52YXMgLSBEUkFXIFNRVUFSRSBcIiArIGFyZ3MpO1xyXG4gICAgICAgIHZhciBjYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgeCA9IE51bWJlcihhcmdzWzBdKTtcclxuICAgICAgICB2YXIgeSA9IE51bWJlcihhcmdzWzFdKTtcclxuICAgICAgICB2YXIgc2l6ZSA9IE51bWJlcihhcmdzWzJdKTtcclxuICAgICAgICBjYW52YXNDb250ZXh0LnJlY3QoeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgY2FudmFzQ29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAvL2NhbnZhc0NvbnRleHQuZmlsbFJlY3QoeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzLnByb3RvdHlwZS5kcmF3UmVjdGFuZ2xlID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICBhcmdzLnNoaWZ0KCk7IC8vdG8gcmVtb3ZlIHRoZSAncmVjdCcgYXJndW1lbnQgb2YgdGhlIGRyYXcgZXhwcmVzc2lvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FudmFzIC0gRFJBVyBSRUNUIFwiICsgYXJncyk7XHJcbiAgICAgICAgdmFyIGNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciB4ID0gTnVtYmVyKGFyZ3NbMF0pO1xyXG4gICAgICAgIHZhciB5ID0gTnVtYmVyKGFyZ3NbMV0pO1xyXG4gICAgICAgIHZhciB3aWR0aCA9IE51bWJlcihhcmdzWzJdKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gTnVtYmVyKGFyZ3NbM10pO1xyXG4gICAgICAgIGNhbnZhc0NvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjYW52YXNDb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIC8vY2FudmFzQ29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzO1xyXG59KCkpO1xyXG5leHBvcnRzLkNhbnZhcyA9IENhbnZhcztcclxudmFyIFNWRyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNWRygpIHtcclxuICAgICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdmcnKTtcclxuICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgIH1cclxuICAgIFNWRy5wcm90b3R5cGUuZHJhd1NxdWFyZSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgYXJncy5zaGlmdCgpOyAvL3RvIHJlbW92ZSB0aGUgJ3NxdWFyZScgYXJndW1lbnQgb2YgdGhlIGRyYXcgZXhwcmVzc2lvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1ZHIC0gRFJBVyBTUVVBUkUgXCIgKyBhcmdzKTtcclxuICAgICAgICB2YXIgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMubmFtZXNwYWNlLCAncmVjdCcpO1xyXG4gICAgICAgIHZhciB4ID0gYXJnc1swXTtcclxuICAgICAgICB2YXIgeSA9IGFyZ3NbMV07XHJcbiAgICAgICAgdmFyIHNpemUgPSBhcmdzWzJdO1xyXG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIHgpO1xyXG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIHkpO1xyXG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBzaXplKTtcclxuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHNpemUpO1xyXG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICB9O1xyXG4gICAgU1ZHLnByb3RvdHlwZS5kcmF3UmVjdGFuZ2xlID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICBhcmdzLnNoaWZ0KCk7IC8vdG8gcmVtb3ZlIHRoZSAncmVjdCcgYXJndW1lbnQgb2YgdGhlIGRyYXcgZXhwcmVzc2lvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1ZHIC0gRFJBVyBSRUNUIFwiICsgYXJncyk7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModGhpcy5uYW1lc3BhY2UsICdyZWN0Jyk7XHJcbiAgICAgICAgdmFyIHggPSBhcmdzWzBdO1xyXG4gICAgICAgIHZhciB5ID0gYXJnc1sxXTtcclxuICAgICAgICB2YXIgd2lkdGggPSBhcmdzWzJdO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBhcmdzWzNdO1xyXG4gICAgICAgIHJlY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCB4KTtcclxuICAgICAgICByZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgeSk7XHJcbiAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB3aWR0aCk7XHJcbiAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgaGVpZ2h0KTtcclxuICAgICAgICBpZiAodGhpcy5zdmcgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChyZWN0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU1ZHO1xyXG59KCkpO1xyXG5leHBvcnRzLlNWRyA9IFNWRztcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/strategy.js\n");

/***/ })

/******/ });