//AND e UNION operator proxima aula 

import {AppInfo} from './singleton'

interface AbstractExpression {
    interpret(context: String): boolean;
}

class TemporaryExpression implements AbstractExpression {
    
    constructor(){}

    interpret(context: String): boolean {
        return false;
    }
}

export class MasterExpression implements AbstractExpression {

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
                AppInfo.getRenderingSystem().drawSquare(contextParts);
                return contextParts.length == 3; //drawSquare tira 'square' do contextParts, portanto o length e 3
                break;
            case "rect":
                AppInfo.getRenderingSystem().drawRectangle(contextParts);
                return contextParts.length == 4; //drawRectangle tira 'rect' do contextParts, portanto o length e 4
                break;
            default: 
                return false;
        }
    }
}