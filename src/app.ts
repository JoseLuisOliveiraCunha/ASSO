import {Command} from './command'

var app = new Command();

function draw() {
    var canvas = <HTMLCanvasElement> document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = <CanvasRenderingContext2D> canvas.getContext('2d');
        ctx.fillRect(25, 25, 100, 100);
    }
}

function test(str : String){
    app.execute(str);
}

window.onload = () => {
    
    var formElem = document.getElementById('REPL_form');

    if(formElem) {

        formElem.onsubmit = function(event){
            event.preventDefault();

            let instruction = (<HTMLInputElement> document.getElementById('instruction')).value;
            app.execute(instruction);
        };
    }
}