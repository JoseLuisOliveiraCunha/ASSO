"use strict";
// /// <reference path="interpreter.ts" />
// import {InstructionExpression} from './interpreter'
class TemporaryExpression {
    constructor() { }
    interpret(context) {
        return false;
    }
}
class MasterExpression {
    constructor() {
        this.expression = new TemporaryExpression();
    }
    interpret(context, tool) {
        console.log("`interpret` method of MasterExpression is being called!");
        var contextParts = context.split(" AND ");
        if (contextParts.length == 1) {
            this.expression = new InstructionExpression();
        }
        else {
            this.expression = new AndExpression();
        }
        return this.expression.interpret(context, tool);
    }
}
class InstructionExpression {
    constructor() {
        this.expression = new TemporaryExpression();
    }
    interpret(context, tool) {
        console.log("`interpret` method of InstructionExpression is being called!");
        var contextParts = context.split(" ");
        switch (contextParts[0]) {
            case "draw":
                this.expression = new DrawExpression();
                break;
            default:
                return false;
        }
        var rest = context.substring(context.indexOf(" ") + 1);
        return this.expression.interpret(rest, tool);
    }
}
class AndExpression {
    constructor() {
        this.lhsExpression = new TemporaryExpression();
        this.rhsExpression = new TemporaryExpression();
    }
    interpret(context, tool) {
        console.log("`interpret` method of AndExpression is being called!");
        var contextParts = context.split(" AND ");
        var restContext = context.substr(context.indexOf(" AND ") + " AND ".length);
        this.lhsExpression = new InstructionExpression();
        this.rhsExpression = new MasterExpression();
        return this.lhsExpression.interpret(contextParts[0], tool) && this.rhsExpression.interpret(restContext, tool);
    }
}
class DrawExpression {
    interpret(context, tool) {
        console.log("`interpret` method of DrawExpression is being called!");
        var contextParts = context.split(" ");
        switch (contextParts[0]) {
            case "square":
                tool.drawSquare(contextParts);
                return contextParts.length == 3; //drawSquare tira 'square' do contextParts, portanto o length e 3
                break;
            case "rect":
                tool.drawRectangle(contextParts);
                return contextParts.length == 4; //drawRectangle tira 'rect' do contextParts, portanto o length e 4
                break;
            default:
                return false;
        }
    }
}
class CanvasTool {
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
class SVGTool {
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
function test(str) {
    var instruction = new MasterExpression();
    var tool = new CanvasTool();
    //var tool : DrawTool = new SVGTool();
    return instruction.interpret(str, tool);
}
