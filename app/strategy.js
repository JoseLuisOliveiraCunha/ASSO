"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.canvas = document.getElementById('canvas');
    }
    Canvas.prototype.drawSquare = function (args) {
        args.shift(); //to remove the 'square' argument of the draw expression
        console.log("Canvas - DRAW SQUARE " + args);
        var canvasContext = this.canvas.getContext('2d');
        var x = Number(args[0]);
        var y = Number(args[1]);
        var size = Number(args[2]);
        canvasContext.rect(x, y, size, size);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, size, size);
    };
    Canvas.prototype.drawRectangle = function (args) {
        args.shift(); //to remove the 'rect' argument of the draw expression
        console.log("Canvas - DRAW RECT " + args);
        var canvasContext = this.canvas.getContext('2d');
        var x = Number(args[0]);
        var y = Number(args[1]);
        var width = Number(args[2]);
        var height = Number(args[3]);
        canvasContext.rect(x, y, width, height);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, width, height);
    };
    return Canvas;
}());
exports.Canvas = Canvas;
var SVG = /** @class */ (function () {
    function SVG() {
        this.svg = document.getElementById('svg');
        this.namespace = "http://www.w3.org/2000/svg";
    }
    SVG.prototype.drawSquare = function (args) {
        args.shift(); //to remove the 'square' argument of the draw expression
        console.log("SVG - DRAW SQUARE " + args);
        var square = document.createElementNS(this.namespace, 'rect');
        var x = args[0];
        var y = args[1];
        var size = args[2];
        square.setAttributeNS(null, 'x', x);
        square.setAttributeNS(null, 'y', y);
        square.setAttributeNS(null, 'width', size);
        square.setAttributeNS(null, 'height', size);
        if (this.svg != undefined)
            this.svg.appendChild(square);
    };
    SVG.prototype.drawRectangle = function (args) {
        args.shift(); //to remove the 'rect' argument of the draw expression
        console.log("SVG - DRAW RECT " + args);
        var rect = document.createElementNS(this.namespace, 'rect');
        var x = args[0];
        var y = args[1];
        var width = args[2];
        var height = args[3];
        rect.setAttributeNS(null, 'x', x);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'width', width);
        rect.setAttributeNS(null, 'height', height);
        if (this.svg != undefined)
            this.svg.appendChild(rect);
    };
    return SVG;
}());
exports.SVG = SVG;
