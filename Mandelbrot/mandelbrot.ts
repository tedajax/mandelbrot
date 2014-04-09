class MandelbrotCell {
    x: number;
    y: number;
    iterations: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.iterations = 0;
    }

    calcIterations(maxIter: number) {
        var z = 0;
        var zi = 0;
        var a = this.x;
        var b = this.y;
        for (var i = 0; i < maxIter; ++i) {
            
            var zprime = z;
            var ziprime = zi;
            z = (zprime * zprime) - (ziprime * ziprime);
            zi = 2 * zprime * ziprime;
            z += a;
            zi += b;

            var mag = Math.pow(z, 2) + Math.pow(zi, 2);
            if (mag >= 4) {
                this.iterations = i;
                return;
            }
        }

        this.iterations = maxIter - 1;
    }
}

class Mandelbrot {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    width: number;
    height: number;
    zoom: number;
    sharpness: number;
    iterations: number;
    maxX: number;
    minX: number;
    maxY: number;
    minY: number;
    colors: Array<Color>;
    colorStrs: Array<string>;
    cells: Array<MandelbrotCell>;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.sharpness = this.canvas.width;

        this.sharpness = Math.max(this.sharpness, 3);
        if (this.sharpness % 2 == 0) {
            this.sharpness++;
        }

        //this.colors = [
        //    Color.red,
        //    Color.green,
        //    Color.blue,
        //    Color.yellow,
        //    Color.cyan,
        //    Color.magenta,
        //    new Color(1.0, 0.7, 0.4, 1.0),
        //    Color.black
        //]
        this.colors = [];
        var iter = 50;
        for (var i = 0; i < iter; ++i) {
            this.colors.push(new Color((i / iter), (i / iter), 1 - (i / iter), 1.0));
        }
        this.colors.push(Color.black);

        this.iterations = this.colors.length;

        this.colorStrs = [];
        for (var i = 0, len = this.colors.length; i < len; ++i) {
            this.colorStrs[i] = this.colors[i].toString();
        }

        this.cells = [];

        this.zoom = 1;
        this.maxX = 1;
        this.minX = -2;
        this.maxY = 1.5;
        this.minY = -1.5;
    }

    calculateCells() {
        this.cells.length = this.sharpness * this.sharpness;
        var index = 0;
        for (var x = 0; x < this.sharpness; ++x) {
            for (var y = 0; y < this.sharpness; ++y) {
                var cx = this.minX + ((this.maxX - this.minX) / (this.sharpness - 1)) * x;
                var cy = this.minY + ((this.maxY - this.minY) / (this.sharpness - 1)) * y;
                this.cells[index] = new MandelbrotCell(cx, cy);
                this.cells[index].calcIterations(this.iterations);
                ++index;
            }
        }
    }

    update(dt: number) {
    }

    render() {
        this.context.fillStyle = "rgba(0, 0, 0, 1)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        var width = this.width / this.sharpness;
        var height = this.height / this.sharpness;

        var diffX = this.maxX - this.minX;
        var diffY = this.maxY - this.minY;

        for (var c = 0, len = this.cells.length; c < len; ++c) {
            var cell = this.cells[c];

            if (cell.iterations == this.iterations - 1) {
                continue;
            }
            this.context.fillStyle = this.colorStrs[cell.iterations];
            var canvasX = ((cell.x + -this.minX) / diffX) * this.width;
            var canvasY = ((cell.y + -this.minY) / diffY) * this.height;
            this.context.fillRect(canvasX, canvasY, width, height);
        }
    }
}