import { Point } from "./point";
import { Triangle } from "./triangle";

// Crear vértices del triángulo
const vertex1 = new Point(0, 0);
const vertex2 = new Point(3, 0);
const vertex3 = new Point(0, 4);

// Crear instancia de Triangle
const myTriangle = new Triangle(vertex1, vertex2, vertex3);

// Probar el método calculateLengthSides
console.log( myTriangle.calculateLengthSides());//"Longitudes de los lados del triángulo:"