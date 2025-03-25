import { Point } from "./point";

// Crear un nuevo objeto Point
const myPoint = new Point(5, 8);

// Probar los métodos
console.log(myPoint.toString()); // Salida: "(5,8)"

myPoint.setX(15);
console.log(myPoint.getX()); // Salida: 15

myPoint.setY(25);
console.log(myPoint.getY()); // Salida: 25

console.log(myPoint.toString()); // Salida: "(15,25)"

// Archivo de prueba: pointTest.ts ejercio 2
const myPoint1 = new Point(3, 4);
const myPoint2 = new Point(6, 8);

console.log(myPoint1.distanceToOrigin()); //"Distancia de point1 al origen:"
console.log(myPoint1.calculateDistance(myPoint2));//"Distancia entre point1 y point2:"

// Archivo de prueba: pointTest.ts ejercicio 3

const point1 = new Point(3, 4);
const point2 = new Point(6, 8);
const point3 = new Point(-5, 7);
const point4 = new Point(-3, -2);
const point5 = new Point(4, -6);
const point6 = new Point(0, 5);

console.log(point1.distanceToOrigin());//"Distancia de point1 al origen:"
console.log(point1.calculateDistance(point2));//"Distancia entre point1 y point2:"
console.log(point1.calculateQuadrant());//"Cuadrante de point1:"
console.log(point3.calculateQuadrant());//"Cuadrante de point1:"
console.log(point4.calculateQuadrant());//"Cuadrante de point4:
console.log(point5.calculateQuadrant());//"Cuadrante de point5:"
console.log(point6.calculateQuadrant());//"Cuadrante de point6:"