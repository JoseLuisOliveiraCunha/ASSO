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
    MasterExpression.prototype.interpret = function (context) {
        console.log("`interpret` method of MasterExpression is being called!");
        var contextParts = context.split(" AND ");
        if (contextParts.length == 1) {
            this.expression = new InstructionExpression();
        }
        else {
            this.expression = new AndExpression();
        }
        return this.expression.interpret(context);
    };
    return MasterExpression;
}());
var InstructionExpression = /** @class */ (function () {
    function InstructionExpression() {
        this.expression = new TemporaryExpression();
    }
    InstructionExpression.prototype.interpret = function (context) {
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
        return this.expression.interpret(rest);
    };
    return InstructionExpression;
}());
var AndExpression = /** @class */ (function () {
    function AndExpression() {
        this.lhsExpression = new TemporaryExpression();
        this.rhsExpression = new TemporaryExpression();
    }
    AndExpression.prototype.interpret = function (context) {
        console.log("`interpret` method of AndExpression is being called!");
        var contextParts = context.split(" AND ");
        var restContext = context.substr(context.indexOf(" AND ") + " AND ".length);
        this.lhsExpression = new InstructionExpression();
        this.rhsExpression = new MasterExpression();
        return this.lhsExpression.interpret(contextParts[0]) && this.rhsExpression.interpret(restContext);
    };
    return AndExpression;
}());
var DrawExpression = /** @class */ (function () {
    function DrawExpression() {
    }
    DrawExpression.prototype.interpret = function (context) {
        console.log("`interpret` method of DrawExpression is being called!");
        var contextParts = context.split(" ");
        switch (contextParts[0]) {
            case "square":
                console.log("DRAW SQUARE" + context.substr(context.indexOf(" ")));
                return contextParts.length == 4;
                break;
            case "rect":
                console.log("DRAW RECT");
                return contextParts.length == 5;
                break;
            default:
                return false;
        }
    };
    return DrawExpression;
}());
var Commands = /** @class */ (function () {
    function Commands() {
    }
    Commands.prototype.test = function (str) {
        var instruction = new MasterExpression();
        return instruction.interpret(str);
    };
    Commands.prototype.draw = function () {
        var canvas = document.getElementById('canvas');
        console.log("antes ");
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.fillRect(25, 25, 100, 100);
            console.log("AAA");
        }
    };
    return Commands;
}());
window.onload = function () {
    var app = new Commands();
    app.draw();
    document.body.innerHTML = String(app.test("draw square 2 2 4"));
};
