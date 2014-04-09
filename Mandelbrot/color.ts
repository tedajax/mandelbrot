class Color {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    toString() {
        return "rgba(" + (this.r * 100) + "%, " + (this.g * 100) + "%, " + (this.b * 100) + "%, " + this.a + ")";
    }

    static red = new Color(1.0, 0.0, 0.0, 1.0);
    static green = new Color(0.0, 1.0, 0.0, 1.0);
    static blue = new Color(0.0, 0.0, 1.0, 1.0);
    static yellow = new Color(1.0, 1.0, 0.0, 1.0);
    static cyan = new Color(0.0, 1.0, 1.0, 1.0);
    static magenta = new Color(1.0, 0.0, 1.0, 1.0);
    static white = new Color(1.0, 1.0, 1.0, 1.0);
    static black = new Color(0.0, 0.0, 0.0, 1.0);
} 