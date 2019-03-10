export interface RenderEntity {
    drawSquare(args: String[]): any;
    drawRectangle(args: String[]): any;
    replaceHTMLRenderingArea(): any;
    cleanDrawBoard(): any;
}

export class Canvas implements RenderEntity {
    
    private canvasWidth = 800;
    private canvasHeight = 600;

    drawSquare(args: String[]) {
        
        args.shift() //to remove the 'square' argument of the draw expression

        console.log("Canvas - DRAW SQUARE " + args);

        let canvas = <HTMLCanvasElement> document.getElementById('canvas');
        let canvasContext = <CanvasRenderingContext2D> canvas.getContext('2d');

        let x = Number(args[0]);
        let y = Number(args[1]);
        let size = Number(args[2]);

        canvasContext.beginPath();
        canvasContext.rect(x, y, size, size);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, size, size);
    }

    drawRectangle(args: String[]) {
        
        args.shift() //to remove the 'rect' argument of the draw expression

        console.log("Canvas - DRAW RECT " + args);

        let canvas = <HTMLCanvasElement> document.getElementById('canvas');
        let canvasContext = <CanvasRenderingContext2D> canvas.getContext('2d');

        let x = Number(args[0]);
        let y = Number(args[1]);
        let width = Number(args[2]);
        let height = Number(args[3]);

        canvasContext.beginPath();
        canvasContext.rect(x, y, width, height);
        canvasContext.stroke();
        //canvasContext.fillRect(x, y, width, height);
    }

    replaceHTMLRenderingArea() {
        replaceHTMLRenderingAreaAux(`<canvas id="canvas" width="${this.canvasWidth}" height="${this.canvasHeight}"></canvas>`);
    }

    cleanDrawBoard() {
        console.log("Canvas - CLEANING BOARD");
        
        let canvas = <HTMLCanvasElement> document.getElementById('canvas');
        let canvasContext = <CanvasRenderingContext2D> canvas.getContext('2d');
        canvasContext.beginPath();
        canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}

export class SVG implements RenderEntity {
    
    private SVGWidth = 800;
    private SVGHeight = 600;
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

        var svg = document.getElementById('svg');
        if(svg != undefined)
            svg.appendChild(square);
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

        var svg = document.getElementById('svg');
        if(svg != undefined)
            svg.appendChild(rect);
    }

    replaceHTMLRenderingArea() {
        replaceHTMLRenderingAreaAux(`<svg id="svg" width="${this.SVGWidth}" height="${this.SVGHeight}"></svg>`);
    }

    cleanDrawBoard() {
        console.log("SVG - CLEANING BOARD");
 
        /*let rect = document.createElementNS(this.namespace, 'rect');
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'width', this.SVGWidth.toString());
        rect.setAttributeNS(null, 'height', this.SVGHeight.toString());
        rect.setAttributeNS(null,"fill"  ,"#ffffff");
        rect.setAttributeNS(null,"stroke","none");

        var svg = document.getElementById('svg');
        if(svg != undefined)
            svg.appendChild(rect);*/
        
        var svg = document.getElementById('svg');
        if(svg != undefined)
            svg.innerHTML = '';   
    }
}

function replaceHTMLRenderingAreaAux(newElem : String) {
    var divElem = document.getElementById('rendering_area');
    if(divElem) {
        divElem.removeChild(divElem.children[0]);
        divElem.innerHTML = newElem + divElem.innerHTML;
    }
}