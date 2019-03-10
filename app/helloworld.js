"use strict";
// /// <reference path="interpreter.ts" />
// import {InstructionExpression} from './interpreter'
var TemporaryExpression = /** @class */ (function () {
    function TemporaryExpression() {
    }
    TemporaryExpression.prototype.interpret = function (context) {
        return false;
    };
    return TemporaryExpression;
}());
var MasterExpression = /** @class */ (function () {
    function MasterExpression() {
        this.expression = new TemporaryExpression();
    }
    MasterExpression.prototype.interpret = function (context, tool) {
        console.log("`interpret` method of MasterExpression is being called!");
        var contextParts = context.split(" AND ");
        if (contextParts.length == 1) {
            this.expression = new InstructionExpression();
        }
        else {
            this.expression = new AndExpression();
        }
        return this.expression.interpret(context, tool);
    };
    return MasterExpression;
}());
var InstructionExpression = /** @class */ (function () {
    function InstructionExpression() {
        this.expression = new TemporaryExpression();
    }
    InstructionExpression.prototype.interpret = function (context, tool) {
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
    };
    return InstructionExpression;
}());
var AndExpression = /** @class */ (function () {
    function AndExpression() {
        this.lhsExpression = new TemporaryExpression();
        this.rhsExpression = new TemporaryExpression();
    }
    AndExpression.prototype.interpret = function (context, tool) {
        console.log("`interpret` method of AndExpression is being called!");
        var contextParts = context.split(" AND ");
        var restContext = context.substr(context.indexOf(" AND ") + " AND ".length);
        this.lhsExpression = new InstructionExpression();
        this.rhsExpression = new MasterExpression();
        return this.lhsExpression.interpret(contextParts[0], tool) && this.rhsExpression.interpret(restContext, tool);
    };
    return AndExpression;
}());
var DrawExpression = /** @class */ (function () {
    function DrawExpression() {
    }
    DrawExpression.prototype.interpret = function (context, tool) {
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
    };
    return DrawExpression;
}());
var CanvasTool = /** @class */ (function () {
    function CanvasTool() {
        this.canvas = document.getElementById('canvas');
    }
    CanvasTool.prototype.drawSquare = function (args) {
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
    CanvasTool.prototype.drawRectangle = function (args) {
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
    return CanvasTool;
}());
var SVGTool = /** @class */ (function () {
    function SVGTool() {
        this.svg = document.getElementById('svg');
        this.namespace = "http://www.w3.org/2000/svg";
    }
    SVGTool.prototype.drawSquare = function (args) {
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
    SVGTool.prototype.drawRectangle = function (args) {
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
    return SVGTool;
}());
function test(str) {
    var instruction = new MasterExpression();
    var tool = new CanvasTool();
    //var tool : DrawTool = new SVGTool();
    return instruction.interpret(str, tool);
}
