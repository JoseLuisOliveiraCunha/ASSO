// /// <reference path="interpreter.ts" />
// import {InstructionExpression} from './interpreter'

interface AbstractExpression {
    interpret(context: String, tool: DrawTool): boolean;
}

class TemporaryExpression implements AbstractExpression {
    
    constructor(){}

    interpret(context: String): boolean {
        return false;
    }
}

class MasterExpression implements AbstractExpression {

    private expression : AbstractExpression;

    constructor() {
        this.expression = new TemporaryExpression();
    }

    public interpret(context: String, tool: DrawTool): boolean {
        console.log("`interpret` method of MasterExpression is being called!");

        var contextParts : String[] = context.split(" AND ");

        if(contextParts.length == 1) {
            this.expression = new InstructionExpression();
        }
        else {
            this.expression = new AndExpression();
        }

        return this.expression.interpret(context, tool);
    }
}

class InstructionExpression implements AbstractExpression {

    private expression : AbstractExpression; 

    constructor(){
        this.expression = new TemporaryExpression();
    }

    public interpret(context: String, tool: DrawTool): boolean {
        console.log("`interpret` method of InstructionExpression is being called!");

        var contextParts : String[] = context.split(" ");

        switch(contextParts[0])
        {
            case "draw":
                this.expression = new DrawExpression();
                break;
            default: 
                return false;
    
        }
        
        var rest : String = context.substring(context.indexOf(" ") + 1);
        
        return this.expression.interpret(rest, tool);
    }
}

class AndExpression implements AbstractExpression {

    private lhsExpression : AbstractExpression;
    private rhsExpression : AbstractExpression;

    constructor(){
        this.lhsExpression = new TemporaryExpression();
        this.rhsExpression = new TemporaryExpression();
    }

    public interpret(context: String, tool: DrawTool): boolean {
        console.log("`interpret` method of AndExpression is being called!");

        var contextParts : String[] = context.split(" AND ");
        var restContext : String = context.substr(context.indexOf(" AND ") + " AND ".length);

        this.lhsExpression = new InstructionExpression();
        this.rhsExpression = new MasterExpression();

        return this.lhsExpression.interpret(contextParts[0], tool) && this.rhsExpression.interpret(restContext, tool);
    }
}

class DrawExpression implements AbstractExpression {

    public interpret(context: String, tool: DrawTool): boolean {
        console.log("`interpret` method of DrawExpression is being called!");

        var contextParts : String[] = context.split(" ");

        switch(contextParts[0])
        {
            case "square":
                console.log("DRAW SQUARE" + context.substr(context.indexOf(" ")));
                tool.drawSquare(contextParts);
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

interface DrawTool {
    drawSquare(args: String[]): any;
}

class CanvasTool implements DrawTool {

    private canvas = <HTMLCanvasElement> document.getElementById('canvas');
    
    drawSquare(args: String[]) {
        
        args.shift() //to remove the 'square' argument of the draw expression

        var canvasContext = <CanvasRenderingContext2D> this.canvas.getContext('2d');

        let x = Number(args[0]);
        let y = Number(args[1]);
        let size = Number(args[2]);

        canvasContext.fillRect(x, y, size, size);
    }

}

class SVGTool implements DrawTool {
    drawSquare(args: String[]) {
        throw new Error("Method not implemented.");
    }

}

function test(str : String){
    
    var instruction : MasterExpression = new MasterExpression();
    var tool : DrawTool = new CanvasTool();
    
    return instruction.interpret(str, tool);
}

//document.body.innerHTML = String(test("draw square 2 2 4"));




