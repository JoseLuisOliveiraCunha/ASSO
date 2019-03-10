// /// <reference path="interpreter.ts" />
// import {InstructionExpression} from './interpreter'

interface AbstractExpression {
    interpret(context: String): boolean;
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

    public interpret(context: String): boolean {
        console.log("`interpret` method of MasterExpression is being called!");

        var contextParts : String[] = context.split(" AND ");

        if(contextParts.length == 1) {
            this.expression = new InstructionExpression();
        }
        else {
            this.expression = new AndExpression();
        }

        return this.expression.interpret(context);
    }
}

class InstructionExpression implements AbstractExpression {

    private expression : AbstractExpression; 

    constructor(){
        this.expression = new TemporaryExpression();
    }

    public interpret(context: String): boolean {
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
        
        return this.expression.interpret(rest);
    }
}

class AndExpression implements AbstractExpression {

    private lhsExpression : AbstractExpression;
    private rhsExpression : AbstractExpression;

    constructor(){
        this.lhsExpression = new TemporaryExpression();
        this.rhsExpression = new TemporaryExpression();
    }

    public interpret(context: String): boolean {
        console.log("`interpret` method of AndExpression is being called!");

        var contextParts : String[] = context.split(" AND ");
        var restContext : String = context.substr(context.indexOf(" AND ") + " AND ".length);

        this.lhsExpression = new InstructionExpression();
        this.rhsExpression = new MasterExpression();

        return this.lhsExpression.interpret(contextParts[0]) && this.rhsExpression.interpret(restContext);
    }
}

class DrawExpression implements AbstractExpression {

    public interpret(context: String): boolean {
        console.log("`interpret` method of DrawExpression is being called!");

        var contextParts : String[] = context.split(" ");

        switch(contextParts[0])
        {
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

class Commands {

    constructor(){}

    public test(str : String){
        var instruction : MasterExpression = new MasterExpression();
        return instruction.interpret(str);
    }
    
    public draw() {
        var canvas = <HTMLCanvasElement> document.getElementById('canvas');
        console.log("antes ");
        if (canvas.getContext) {
            var ctx = <CanvasRenderingContext2D> canvas.getContext('2d');
      
            ctx.fillRect(25, 25, 100, 100);
            console.log("AAA");
        }
    }
}

window.onload = () => {
	let app = new Commands();

    app.draw();
    document.body.innerHTML = String(app.test("draw square 2 2 4"));
}



