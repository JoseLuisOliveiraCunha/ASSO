import {MasterExpression} from './interpreter'

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