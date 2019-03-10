"use strict";
//AND e UNION operator proxima aula 
Object.defineProperty(exports, "__esModule", { value: true });
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
    interpret(context) {
        console.log("`interpret` method of MasterExpression is being called!");
        var contextParts = context.split(" AND ");
        if (contextParts.length == 1) {
            this.expression = new InstructionExpression();
        }
        else {
            this.expression = new AndExpression();
        }
        return this.expression.interpret(context);
    }
}
exports.MasterExpression = MasterExpression;
class InstructionExpression {
    constructor() {
        this.expression = new TemporaryExpression();
    }
    interpret(context) {
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
    }
}
class AndExpression {
    constructor() {
        this.lhsExpression = new TemporaryExpression();
        this.rhsExpression = new TemporaryExpression();
    }
    interpret(context) {
        console.log("`interpret` method of AndExpression is being called!");
        var contextParts = context.split(" AND ");
        var restContext = context.substr(context.indexOf(" AND ") + " AND ".length);
        this.lhsExpression = new InstructionExpression();
        this.rhsExpression = new MasterExpression();
        return this.lhsExpression.interpret(contextParts[0]) && this.rhsExpression.interpret(restContext);
    }
}
class DrawExpression {
    interpret(context) {
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
    }
}
