"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
var app = new command_1.Command();
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.fillRect(25, 25, 100, 100);
    }
}
function test(str) {
    app.execute(str);
}
window.onload = () => {
    var formElem = document.getElementById('REPL_form');
    if (formElem) {
        formElem.onsubmit = function (event) {
            event.preventDefault();
            let instruction = document.getElementById('instruction').value;
            app.execute(instruction);
        };
    }
};
