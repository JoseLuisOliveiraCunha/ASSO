"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
    }
    drawSquare(args) {
        args.shift(); //to remove the 'square' argument of the draw expression
        console.log("Canvas - DRAW SQUARE " + args);
        let canvasContext = this.canvas.getContext('2d');
        let x = Number(args[0]);
        let y = Number(args[1]);
        let size = Number(args[2]);
        canvasContext.rect(x, y, size, size);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, size, size);
    }
    drawRectangle(args) {
        args.shift(); //to remove the 'rect' argument of the draw expression
        console.log("Canvas - DRAW RECT " + args);
        let canvasContext = this.canvas.getContext('2d');
        let x = Number(args[0]);
        let y = Number(args[1]);
        let width = Number(args[2]);
        let height = Number(args[3]);
        canvasContext.rect(x, y, width, height);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, width, height);
    }
}
exports.Canvas = Canvas;
class SVG {
    constructor() {
        this.svg = document.getElementById('svg');
        this.namespace = "http://www.w3.org/2000/svg";
    }
    drawSquare(args) {
        args.shift(); //to remove the 'square' argument of the draw expression
        console.log("SVG - DRAW SQUARE " + args);
        let square = document.createElementNS(this.namespace, 'rect');
        let x = args[0];
        let y = args[1];
        let size = args[2];
        square.setAttributeNS(null, 'x', x);
        square.setAttributeNS(null, 'y', y);
        square.setAttributeNS(null, 'width', size);
        square.setAttributeNS(null, 'height', size);
        if (this.svg != undefined)
            this.svg.appendChild(square);
    }
    drawRectangle(args) {
        args.shift(); //to remove the 'rect' argument of the draw expression
        console.log("SVG - DRAW RECT " + args);
        let rect = document.createElementNS(this.namespace, 'rect');
        let x = args[0];
        let y = args[1];
        let width = args[2];
        let height = args[3];
        rect.setAttributeNS(null, 'x', x);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'width', width);
        rect.setAttributeNS(null, 'height', height);
        if (this.svg != undefined)
            this.svg.appendChild(rect);
    }
}
exports.SVG = SVG;
