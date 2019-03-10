export interface RenderEntity {
    drawSquare(args: String[]): any;
    drawRectangle(args: String[]): any;
}

export class Canvas implements RenderEntity {

    private canvas = <HTMLCanvasElement> document.getElementById('canvas');
    
    drawSquare(args: String[]) {
        
        args.shift() //to remove the 'square' argument of the draw expression

        console.log("Canvas - DRAW SQUARE " + args);

        let canvasContext = <CanvasRenderingContext2D> this.canvas.getContext('2d');

        let x = Number(args[0]);
        let y = Number(args[1]);
        let size = Number(args[2]);

        canvasContext.rect(x, y, size, size);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, size, size);
    }

    drawRectangle(args: String[]) {
        
        args.shift() //to remove the 'rect' argument of the draw expression

        console.log("Canvas - DRAW RECT " + args);

        let canvasContext = <CanvasRenderingContext2D> this.canvas.getContext('2d');

        let x = Number(args[0]);
        let y = Number(args[1]);
        let width = Number(args[2]);
        let height = Number(args[3]);

        canvasContext.rect(x, y, width, height);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, width, height);
    }

}

export class SVG implements RenderEntity {

    private svg = document.getElementById('svg'); 
    
    private namespace = "http://www.w3.org/2000/svg";

    drawSquare(args: String[]) {

        args.shift() //to remove the 'square' argument of the draw expression

        console.log("SVG - DRAW SQUARE " + args);
 
        let square = document.createElementNS(this.namespace, 'rect');

        let x = <string> args[0];
        let y = <string> args[1];
        let size = <string> args[2];

        square.setAttributeNS(null, 'x', x);
        square.setAttributeNS(null, 'y', y);
        square.setAttributeNS(null, 'width', size);
        square.setAttributeNS(null, 'height', size);

        if(this.svg != undefined)
            this.svg.appendChild(square);
    }

    drawRectangle(args: String[]) {
        
        args.shift() //to remove the 'rect' argument of the draw expression

        console.log("SVG - DRAW RECT " + args);
 
        let rect = document.createElementNS(this.namespace, 'rect');

        let x = <string> args[0];
        let y = <string> args[1];
        let width = <string> args[2];
        let height = <string> args[3];

        rect.setAttributeNS(null, 'x', x);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'width', width);
        rect.setAttributeNS(null, 'height', height);

        if(this.svg != undefined)
            this.svg.appendChild(rect);
    }
}