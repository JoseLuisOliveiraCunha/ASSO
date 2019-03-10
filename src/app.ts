import {MasterExpression} from './interpreter'
import {RenderEntity, Canvas, SVG} from './strategy'

let renderingSystem : RenderEntity = new Canvas();
export {renderingSystem};

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
    
    
    //TODO: passar a rendering tool para
}

//document.body.innerHTML = String(app.test("draw square 2 2 4"));