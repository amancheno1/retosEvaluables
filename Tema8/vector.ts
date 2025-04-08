export class Vector {
    private elements: number[];

    constructor(n: number, k: number) {
        this.elements = Array.from({ length: n }, () => Math.floor(Math.random() * (k + 1)));
    }

    public print(): void {
        console.log(this.elements);
    }

    public add(v1: Vector): Vector {
        const result = this.elements.map((val, i) => val + v1.elements[i]);
        const vector = new Vector(0, 0);
        vector.elements = result;
        return vector;
    }

    public subs(v1: Vector): Vector {
        const result = this.elements.map((val, i) => val - v1.elements[i]);
        const vector = new Vector(0, 0)
        return vector;
        vector.elements = result;

    }

    public mult(v1: Vector): Vector {
        const result = this.elements.map((val, i) => val * v1.elements[i]);
        const vector = new Vector(0, 0);
        vector.elements = result;
        return vector;
    }

    public multNumber(n: number): Vector {
        const result = this.elements.map(val => val * n);
        const vector = new Vector(0, 0);
        vector.elements = result;
        return vector;
    }
}


// Ejemplo 

const v1 = new Vector(5, 10);
const v2 = new Vector(5, 10);

v1.print();
v2.print();

const suma = v1.add(v2);
suma.print();

const resta = v1.subs(v2);
resta.print();

const producto = v1.mult(v2);
producto.print();

const multiplicado = v1.multNumber(3);
multiplicado.print();
