var InterpreterPattern;
(function (InterpreterPattern) {
    var InstructionExpression = /** @class */ (function () {
        function InstructionExpression() {
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
            var rest = context.substring(context.indexOf(" "));
            return this.expression.interpret(rest);
        };
        return InstructionExpression;
    }());
    InterpreterPattern.InstructionExpression = InstructionExpression;
    var AndExpression = /** @class */ (function () {
        function AndExpression(e1, e2) {
            this.expression1 = e1;
            this.expression2 = e2;
        }
        AndExpression.prototype.interpret = function (context) {
            console.log("`interpret` method of DrawExpression is being called!");
            return this.expression1.interpret(context) && this.expression2.interpret(context);
        };
        return AndExpression;
    }());
    InterpreterPattern.AndExpression = AndExpression;
    var DrawExpression = /** @class */ (function () {
        function DrawExpression() {
        }
        DrawExpression.prototype.interpret = function (context) {
            console.log("`interpret` method of DrawExpression is being called!");
            var contextParts = context.split(" ");
            switch (contextParts[0]) {
                case "square":
                    console.log("DRAW SQUARE");
                    return contextParts.length == 4;
                    break;
                case "rect":
                    console.log("DRAW SQUARE");
                    return contextParts.length == 5;
                    break;
                default:
                    return false;
            }
        };
        return DrawExpression;
    }());
    InterpreterPattern.DrawExpression = DrawExpression;
})(InterpreterPattern || (InterpreterPattern = {}));
