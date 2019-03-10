"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interpreter_1 = require("./interpreter");
const strategy_1 = require("./strategy");
let renderingSystem = new strategy_1.Canvas();
exports.renderingSystem = renderingSystem;
class Commands {
    constructor() {
    }
    test(str) {
        var instruction = new interpreter_1.MasterExpression();
        return instruction.interpret(str);
    }
    draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.fillRect(25, 25, 100, 100);
        }
    }
}
window.onload = () => {
    let app = new Commands();
    if (app.test("draw square 2 2 4"))
        app.draw();
    //TODO: passar a rendering tool para
};
//document.body.innerHTML = String(app.test("draw square 2 2 4"));
