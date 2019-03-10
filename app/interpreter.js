"use strict";
//AND e UNION operator proxima aula 
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
class TemporaryExpression {
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
        var unionParts = context.split(" UNION ");
        console.log("union parts " + unionParts);
        if (unionParts.length != 1) {
            this.expression = new UnionExpression();
            return this.expression.interpret(context);
        }
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
                singleton_1.AppInfo.getRenderingSystem().drawSquare(contextParts);
                return contextParts.length == 3; //drawSquare tira 'square' do contextParts, portanto o length e 3
            case "rect":
                singleton_1.AppInfo.getRenderingSystem().drawRectangle(contextParts);
                return contextParts.length == 4; //drawRectangle tira 'rect' do contextParts, portanto o length e 4
            default:
                return false;
        }
    }
}
class UnionExpression {
    interpret(context) {
        console.log("`interpret` method of UnionExpression is being called!");
        console.log("context: " + context);
        var contextParts = context.split(" UNION ");
        var i;
        var parcels = [];
        for (i = 0; i < contextParts.length; i++) {
            let parcel = new UnionParcel();
            if (!parcel.interpret(contextParts[i])) {
                console.log("Invalid UNION EXPRESSION");
                return false;
            }
            parcels.push(contextParts[i]);
        }
        singleton_1.AppInfo.getRenderingSystem().drawUnion(parcels);
        return true;
    }
}
class UnionParcel {
    interpret(context) {
        console.log("`interpret` method of DrawExpression is being called!");
        var contextParts = context.split(" ");
        if (contextParts[0] != "draw")
            return false;
        switch (contextParts[1]) {
            case "square":
                return contextParts.length == 5;
            case "rect":
                return contextParts.length == 6;
            default:
                return false;
        }
    }
}
