//AND e UNION operator proxima aula 


/* export interface AbstractExpression {
    interpret(context: String): boolean;
}

export class InstructionExpression implements AbstractExpression {

    private expression: AbstractExpression;

    constructor() {
        this.expression = new InstructionExpression();
    }

    public interpret(context: String): boolean {
        console.log("`interpret` method of InstructionExpression is being called!");

        var contextParts: String[] = context.split(" ");

        switch (contextParts[0]) {
            case "draw":
                this.expression = new DrawExpression();
                break;
            default:
                return false;

        }

        var rest: String = context.substring(context.indexOf(" "));

        return this.expression.interpret(rest);
    }
}

export class AndExpression implements AbstractExpression {

    private expression1: AbstractExpression;
    private expression2: AbstractExpression;

    constructor(e1: AbstractExpression, e2: AbstractExpression) {
        this.expression1 = e1;
        this.expression2 = e2;
    }

    public interpret(context: String): boolean {
        console.log("`interpret` method of DrawExpression is being called!");

        return this.expression1.interpret(context) && this.expression2.interpret(context);
    }
}

export class DrawExpression implements AbstractExpression {

    public interpret(context: String): boolean {
        console.log("`interpret` method of DrawExpression is being called!");

        var contextParts: String[] = context.split(" ");

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
    }
} */