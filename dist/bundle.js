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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/helloworld.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/helloworld.js":
/*!***************************!*\
  !*** ./app/helloworld.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// /// <reference path=\"interpreter.ts\" />\r\n// import {InstructionExpression} from './interpreter'\r\nvar TemporaryExpression = /** @class */ (function () {\r\n    function TemporaryExpression() {\r\n    }\r\n    TemporaryExpression.prototype.interpret = function (context) {\r\n        return false;\r\n    };\r\n    return TemporaryExpression;\r\n}());\r\nvar MasterExpression = /** @class */ (function () {\r\n    function MasterExpression() {\r\n        this.expression = new TemporaryExpression();\r\n    }\r\n    MasterExpression.prototype.interpret = function (context) {\r\n        console.log(\"`interpret` method of MasterExpression is being called!\");\r\n        var contextParts = context.split(\" AND \");\r\n        if (contextParts.length == 1) {\r\n            this.expression = new InstructionExpression();\r\n        }\r\n        else {\r\n            this.expression = new AndExpression();\r\n        }\r\n        return this.expression.interpret(context);\r\n    };\r\n    return MasterExpression;\r\n}());\r\nvar InstructionExpression = /** @class */ (function () {\r\n    function InstructionExpression() {\r\n        this.expression = new TemporaryExpression();\r\n    }\r\n    InstructionExpression.prototype.interpret = function (context) {\r\n        console.log(\"`interpret` method of InstructionExpression is being called!\");\r\n        var contextParts = context.split(\" \");\r\n        switch (contextParts[0]) {\r\n            case \"draw\":\r\n                this.expression = new DrawExpression();\r\n                break;\r\n            default:\r\n                return false;\r\n        }\r\n        var rest = context.substring(context.indexOf(\" \") + 1);\r\n        return this.expression.interpret(rest);\r\n    };\r\n    return InstructionExpression;\r\n}());\r\nvar AndExpression = /** @class */ (function () {\r\n    function AndExpression() {\r\n        this.lhsExpression = new TemporaryExpression();\r\n        this.rhsExpression = new TemporaryExpression();\r\n    }\r\n    AndExpression.prototype.interpret = function (context) {\r\n        console.log(\"`interpret` method of AndExpression is being called!\");\r\n        var contextParts = context.split(\" AND \");\r\n        var restContext = context.substr(context.indexOf(\" AND \") + \" AND \".length);\r\n        this.lhsExpression = new InstructionExpression();\r\n        this.rhsExpression = new MasterExpression();\r\n        return this.lhsExpression.interpret(contextParts[0]) && this.rhsExpression.interpret(restContext);\r\n    };\r\n    return AndExpression;\r\n}());\r\nvar DrawExpression = /** @class */ (function () {\r\n    function DrawExpression() {\r\n    }\r\n    DrawExpression.prototype.interpret = function (context) {\r\n        console.log(\"`interpret` method of DrawExpression is being called!\");\r\n        var contextParts = context.split(\" \");\r\n        switch (contextParts[0]) {\r\n            case \"square\":\r\n                console.log(\"DRAW SQUARE\" + context.substr(context.indexOf(\" \")));\r\n                return contextParts.length == 4;\r\n                break;\r\n            case \"rect\":\r\n                console.log(\"DRAW RECT\");\r\n                return contextParts.length == 5;\r\n                break;\r\n            default:\r\n                return false;\r\n        }\r\n    };\r\n    return DrawExpression;\r\n}());\r\nvar Commands = /** @class */ (function () {\r\n    function Commands() {\r\n    }\r\n    Commands.prototype.test = function (str) {\r\n        var instruction = new MasterExpression();\r\n        return instruction.interpret(str);\r\n    };\r\n    Commands.prototype.draw = function () {\r\n        var canvas = document.getElementById('canvas');\r\n        console.log(\"antes \");\r\n        if (canvas.getContext) {\r\n            var ctx = canvas.getContext('2d');\r\n            ctx.fillRect(25, 25, 100, 100);\r\n            console.log(\"AAA\");\r\n        }\r\n    };\r\n    return Commands;\r\n}());\r\nwindow.onload = function () {\r\n    var app = new Commands();\r\n    app.draw();\r\n    document.body.innerHTML = String(app.test(\"draw square 2 2 4\"));\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaGVsbG93b3JsZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9oZWxsb3dvcmxkLmpzPzUxZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIC8vLyA8cmVmZXJlbmNlIHBhdGg9XCJpbnRlcnByZXRlci50c1wiIC8+XHJcbi8vIGltcG9ydCB7SW5zdHJ1Y3Rpb25FeHByZXNzaW9ufSBmcm9tICcuL2ludGVycHJldGVyJ1xyXG52YXIgVGVtcG9yYXJ5RXhwcmVzc2lvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRlbXBvcmFyeUV4cHJlc3Npb24oKSB7XHJcbiAgICB9XHJcbiAgICBUZW1wb3JhcnlFeHByZXNzaW9uLnByb3RvdHlwZS5pbnRlcnByZXQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGVtcG9yYXJ5RXhwcmVzc2lvbjtcclxufSgpKTtcclxudmFyIE1hc3RlckV4cHJlc3Npb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXN0ZXJFeHByZXNzaW9uKCkge1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBUZW1wb3JhcnlFeHByZXNzaW9uKCk7XHJcbiAgICB9XHJcbiAgICBNYXN0ZXJFeHByZXNzaW9uLnByb3RvdHlwZS5pbnRlcnByZXQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYGludGVycHJldGAgbWV0aG9kIG9mIE1hc3RlckV4cHJlc3Npb24gaXMgYmVpbmcgY2FsbGVkIVwiKTtcclxuICAgICAgICB2YXIgY29udGV4dFBhcnRzID0gY29udGV4dC5zcGxpdChcIiBBTkQgXCIpO1xyXG4gICAgICAgIGlmIChjb250ZXh0UGFydHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uID0gbmV3IEluc3RydWN0aW9uRXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uID0gbmV3IEFuZEV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbi5pbnRlcnByZXQoY29udGV4dCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hc3RlckV4cHJlc3Npb247XHJcbn0oKSk7XHJcbnZhciBJbnN0cnVjdGlvbkV4cHJlc3Npb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbnN0cnVjdGlvbkV4cHJlc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gbmV3IFRlbXBvcmFyeUV4cHJlc3Npb24oKTtcclxuICAgIH1cclxuICAgIEluc3RydWN0aW9uRXhwcmVzc2lvbi5wcm90b3R5cGUuaW50ZXJwcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImBpbnRlcnByZXRgIG1ldGhvZCBvZiBJbnN0cnVjdGlvbkV4cHJlc3Npb24gaXMgYmVpbmcgY2FsbGVkIVwiKTtcclxuICAgICAgICB2YXIgY29udGV4dFBhcnRzID0gY29udGV4dC5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgc3dpdGNoIChjb250ZXh0UGFydHNbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImRyYXdcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IG5ldyBEcmF3RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN0ID0gY29udGV4dC5zdWJzdHJpbmcoY29udGV4dC5pbmRleE9mKFwiIFwiKSArIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24uaW50ZXJwcmV0KHJlc3QpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbnN0cnVjdGlvbkV4cHJlc3Npb247XHJcbn0oKSk7XHJcbnZhciBBbmRFeHByZXNzaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQW5kRXhwcmVzc2lvbigpIHtcclxuICAgICAgICB0aGlzLmxoc0V4cHJlc3Npb24gPSBuZXcgVGVtcG9yYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMucmhzRXhwcmVzc2lvbiA9IG5ldyBUZW1wb3JhcnlFeHByZXNzaW9uKCk7XHJcbiAgICB9XHJcbiAgICBBbmRFeHByZXNzaW9uLnByb3RvdHlwZS5pbnRlcnByZXQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYGludGVycHJldGAgbWV0aG9kIG9mIEFuZEV4cHJlc3Npb24gaXMgYmVpbmcgY2FsbGVkIVwiKTtcclxuICAgICAgICB2YXIgY29udGV4dFBhcnRzID0gY29udGV4dC5zcGxpdChcIiBBTkQgXCIpO1xyXG4gICAgICAgIHZhciByZXN0Q29udGV4dCA9IGNvbnRleHQuc3Vic3RyKGNvbnRleHQuaW5kZXhPZihcIiBBTkQgXCIpICsgXCIgQU5EIFwiLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5saHNFeHByZXNzaW9uID0gbmV3IEluc3RydWN0aW9uRXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMucmhzRXhwcmVzc2lvbiA9IG5ldyBNYXN0ZXJFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGhzRXhwcmVzc2lvbi5pbnRlcnByZXQoY29udGV4dFBhcnRzWzBdKSAmJiB0aGlzLnJoc0V4cHJlc3Npb24uaW50ZXJwcmV0KHJlc3RDb250ZXh0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQW5kRXhwcmVzc2lvbjtcclxufSgpKTtcclxudmFyIERyYXdFeHByZXNzaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRHJhd0V4cHJlc3Npb24oKSB7XHJcbiAgICB9XHJcbiAgICBEcmF3RXhwcmVzc2lvbi5wcm90b3R5cGUuaW50ZXJwcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImBpbnRlcnByZXRgIG1ldGhvZCBvZiBEcmF3RXhwcmVzc2lvbiBpcyBiZWluZyBjYWxsZWQhXCIpO1xyXG4gICAgICAgIHZhciBjb250ZXh0UGFydHMgPSBjb250ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBzd2l0Y2ggKGNvbnRleHRQYXJ0c1swXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRSQVcgU1FVQVJFXCIgKyBjb250ZXh0LnN1YnN0cihjb250ZXh0LmluZGV4T2YoXCIgXCIpKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dFBhcnRzLmxlbmd0aCA9PSA0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWN0XCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRSQVcgUkVDVFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0UGFydHMubGVuZ3RoID09IDU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERyYXdFeHByZXNzaW9uO1xyXG59KCkpO1xyXG52YXIgQ29tbWFuZHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21tYW5kcygpIHtcclxuICAgIH1cclxuICAgIENvbW1hbmRzLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciBpbnN0cnVjdGlvbiA9IG5ldyBNYXN0ZXJFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RydWN0aW9uLmludGVycHJldChzdHIpO1xyXG4gICAgfTtcclxuICAgIENvbW1hbmRzLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhbnRlcyBcIik7XHJcbiAgICAgICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDI1LCAyNSwgMTAwLCAxMDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFBQVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbW1hbmRzO1xyXG59KCkpO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFwcCA9IG5ldyBDb21tYW5kcygpO1xyXG4gICAgYXBwLmRyYXcoKTtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gU3RyaW5nKGFwcC50ZXN0KFwiZHJhdyBzcXVhcmUgMiAyIDRcIikpO1xyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/helloworld.js\n");

/***/ })

/******/ });