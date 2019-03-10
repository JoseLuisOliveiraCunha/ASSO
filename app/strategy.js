"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Canvas {
    constructor() {
        this.canvasWidth = 800;
        this.canvasHeight = 600;
    }
    drawSquare(args) {
        args.shift(); //to remove the 'square' argument of the draw expression
        console.log("Canvas - DRAW SQUARE " + args);
        let canvas = document.getElementById('canvas');
        let canvasContext = canvas.getContext('2d');
        let x = Number(args[0]);
        let y = Number(args[1]);
        let size = Number(args[2]);
        canvasContext.beginPath();
        canvasContext.rect(x, y, size, size);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, size, size);
    }
    drawRectangle(args) {
        args.shift(); //to remove the 'rect' argument of the draw expression
        console.log("Canvas - DRAW RECT " + args);
        let canvas = document.getElementById('canvas');
        let canvasContext = canvas.getContext('2d');
        let x = Number(args[0]);
        let y = Number(args[1]);
        let width = Number(args[2]);
        let height = Number(args[3]);
        canvasContext.beginPath();
        canvasContext.rect(x, y, width, height);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, width, height);
    }
    replaceHTMLRenderingArea() {
        replaceHTMLRenderingAreaAux(`<canvas id="canvas" width="${this.canvasWidth}" height="${this.canvasHeight}"></canvas>`);
    }
    cleanDrawBoard() {
        console.log("Canvas - CLEANING BOARD");
        let canvas = document.getElementById('canvas');
        let canvasContext = canvas.getContext('2d');
        canvasContext.beginPath();
        canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}
exports.Canvas = Canvas;
class SVG {
    constructor() {
        this.SVGWidth = 800;
        this.SVGHeight = 600;
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
        var svg = document.getElementById('svg');
        if (svg != undefined)
            svg.appendChild(square);
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
        var svg = document.getElementById('svg');
        if (svg != undefined)
            svg.appendChild(rect);
    }
    replaceHTMLRenderingArea() {
        replaceHTMLRenderingAreaAux(`<svg id="svg" width="${this.SVGWidth}" height="${this.SVGHeight}"></svg>`);
    }
    cleanDrawBoard() {
        console.log("SVG - CLEANING BOARD");
        /*let rect = document.createElementNS(this.namespace, 'rect');
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'width', this.SVGWidth.toString());
        rect.setAttributeNS(null, 'height', this.SVGHeight.toString());
        rect.setAttributeNS(null,"fill"  ,"#ffffff");
        rect.setAttributeNS(null,"stroke","none");

        var svg = document.getElementById('svg');
        if(svg != undefined)
            svg.appendChild(rect);*/
        var svg = document.getElementById('svg');
        if (svg != undefined)
            svg.innerHTML = '';
    }
}
exports.SVG = SVG;
function replaceHTMLRenderingAreaAux(newElem) {
    var divElem = document.getElementById('rendering_area');
    if (divElem) {
        divElem.removeChild(divElem.children[0]);
        divElem.innerHTML = newElem + divElem.innerHTML;
    }
}
