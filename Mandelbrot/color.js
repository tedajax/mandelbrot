var Color = (function () {
    function Color(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    Color.prototype.toString = function () {
        return "rgba(" + (this.r * 100) + "%, " + (this.g * 100) + "%, " + (this.b * 100) + "%, " + this.a + ")";
    };

    Color.red = new Color(1.0, 0.0, 0.0, 1.0);
    Color.green = new Color(0.0, 1.0, 0.0, 1.0);
    Color.blue = new Color(0.0, 0.0, 1.0, 1.0);
    Color.yellow = new Color(1.0, 1.0, 0.0, 1.0);
    Color.cyan = new Color(0.0, 1.0, 1.0, 1.0);
    Color.magenta = new Color(1.0, 0.0, 1.0, 1.0);
    Color.white = new Color(1.0, 1.0, 1.0, 1.0);
    Color.black = new Color(0.0, 0.0, 0.0, 1.0);
    return Color;
})();
//# sourceMappingURL=color.js.map
