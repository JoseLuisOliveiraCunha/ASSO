import {MasterExpression} from './interpreter'

class Commands {

    constructor() {
    }

    public test(str : String){
        var instruction : MasterExpression = new MasterExpression();
        return instruction.interpret(str);
    }

    public draw() {
        var canvas = <HTMLCanvasElement> document.getElementById('canvas');
        if (canvas.getContext) {
            let ctx = <CanvasRenderingContext2D> canvas.getContext('2d');
            ctx.fillRect(25, 25, 100, 100);
        }
    }
}

window.onload = () => {
    let app = new Commands();
    
    if(app.test("draw square 2 2 4"))
        app.draw();
}

//document.body.innerHTML = String(app.test("draw square 2 2 4"));