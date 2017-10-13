class Rectangle {
    private _width: number;

    constructor(width: number) {
        this._width = width;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }
}

const rectangle = new Rectangle(8);

console.log(rectangle.width);
rectangle.width = 3;
console.log(rectangle.width);

// Rectangular area is 24