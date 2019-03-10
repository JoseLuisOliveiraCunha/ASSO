"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
const singleton_1 = require("./singleton");
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
function instructionSubmission(event) {
    event.preventDefault();
    let instruction = document.getElementById('instruction').value;
    app.execute(instruction);
}
function changeToCanvas(event) {
    event.preventDefault();
    singleton_1.AppInfo.setCanvas();
    app.redraw();
}
function changeToSVG(event) {
    event.preventDefault();
    singleton_1.AppInfo.setSVG();
    app.redraw();
}
function undoAction(event) {
    event.preventDefault();
    app.undo();
}
function redoAction(event) {
    event.preventDefault();
    app.redo();
}
window.onload = () => {
    var formElem = document.getElementById('REPL_form');
    if (formElem) {
        formElem.addEventListener("submit", instructionSubmission, false);
    }
    var canvasButtonElem = document.getElementById('canvas_button');
    if (canvasButtonElem) {
        canvasButtonElem.addEventListener("click", changeToCanvas, false);
    }
    var SVGButtonElem = document.getElementById('SVG_button');
    if (SVGButtonElem) {
        SVGButtonElem.addEventListener("click", changeToSVG, false);
    }
    var undoButtonElem = document.getElementById('undo_button');
    if (undoButtonElem) {
        undoButtonElem.addEventListener("click", undoAction, false);
    }
    var redoButtonElem = document.getElementById('redo_button');
    if (redoButtonElem) {
        redoButtonElem.addEventListener("click", redoAction, false);
    }
};
