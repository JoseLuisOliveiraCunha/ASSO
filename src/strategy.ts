export interface RenderEntity {
    drawSquare(args: String[]): any;
    drawRectangle(args: String[]): any;
    drawUnion(parcels: String[]): any;
}

export class Canvas implements RenderEntity {
    
    drawSquare(args: String[]) {
        
        args.shift() //to remove the 'square' argument of the draw expression

        console.log("Canvas - DRAW SQUARE " + args);

        let canvas = <HTMLCanvasElement> document.getElementById('canvas');
        let canvasContext = <CanvasRenderingContext2D> canvas.getContext('2d');

        let x = Number(args[0]);
        let y = Number(args[1]);
        let size = Number(args[2]);

        canvasContext.strokeRect(x, y, size, size);
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

        canvasContext.strokeRect(x, y, width, height);
    }

    drawUnion(parcels: String[]) {

        let canvas = <HTMLCanvasElement> document.getElementById('canvas');
        let canvasContext = <CanvasRenderingContext2D> canvas.getContext('2d');

        var i : number;
        for(i = 0; i < parcels.length; i++)
        {
            this.drawParcel(parcels[i], canvasContext, true);
        }
        
        canvasContext.globalCompositeOperation='destination-out';

        var i : number;
        for(i = 0; i < parcels.length; i++)
        {
            this.drawParcel(parcels[i], canvasContext, false);
        }
       
        canvasContext.globalCompositeOperation='source-over';
    }

    drawParcel(parcel : String, canvasContext : CanvasRenderingContext2D, stroke : boolean){

        var parcelParts : String[] = parcel.split(" ");

        parcelParts.shift();

        var x : number;
        var y : number;
        var size : number;
        var width : number;
        var height : number;

        switch(parcelParts[0])
        {
            case "square":
                x = Number(parcelParts[1]);
                y = Number(parcelParts[2]);
                size = Number(parcelParts[3]);
                if(stroke)
                    canvasContext.strokeRect(x, y, size, size);
                else
                    canvasContext.fillRect(x, y, size, size);
            case "rect":
                x = Number(parcelParts[1]);
                y = Number(parcelParts[2]);
                width = Number(parcelParts[2]);
                height = Number(parcelParts[3]);
                if(stroke)
                    canvasContext.strokeRect(x, y, width, height);
                else
                    canvasContext.fillRect(x, y, width, height);
        }
    }
}

export class SVG implements RenderEntity {

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

    drawUnion(parcels: String[]) {
        throw new Error("Method not implemented.");
    }
}