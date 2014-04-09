window.onload = initialize;

var FPS = 60;
var currTime;
var prevTime;

var mandelbrot;

function initialize() {
    var canvas = document.getElementById("canvas");

    canvas.addEventListener("contextmenu", function (e) {
        if (e.button == 2) {
            e.preventDefault();
            return false;
        }
    }, false);

    mandelbrot = new Mandelbrot(canvas);

    prevTime = performance.now();
    currTime = performance.now();

    var calcTime = performance.now();
    mandelbrot.calculateCells();
    console.log(performance.now() - calcTime);
    var renderTime = performance.now();
    mandelbrot.render();
    console.log(performance.now() - renderTime);
    //setTimeout(update, 1000 / FPS);
    //requestAnimationFrame(render);
}

function update() {
    prevTime = currTime;
    currTime = performance.now();
    var dt = (currTime - prevTime) / 1000.0;

    mandelbrot.update(dt);

    setTimeout(update, 1000 / FPS);
}

function render() {
    mandelbrot.render();

    requestAnimationFrame(render);
}
//# sourceMappingURL=app.js.map
