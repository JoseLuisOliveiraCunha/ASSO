"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interpreter_1 = require("./interpreter");
var strategy_1 = require("./strategy");
var renderingSystem = new strategy_1.Canvas();
exports.renderingSystem = renderingSystem;
var Commands = /** @class */ (function () {
    function Commands() {
    }
    Commands.prototype.test = function (str) {
        var instruction = new interpreter_1.MasterExpression();
        return instruction.interpret(str);
    };
    Commands.prototype.draw = function () {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.fillRect(25, 25, 100, 100);
        }
    };
    return Commands;
}());
window.onload = function () {
    var app = new Commands();
    if (app.test("draw square 2 2 4"))
        app.draw();
    //TODO: passar a rendering tool para
};
//document.body.innerHTML = String(app.test("draw square 2 2 4"));
