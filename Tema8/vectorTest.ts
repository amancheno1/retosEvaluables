import { Vector } from "./vector";

// Creamos dos vectores con 5 elementos, valores de 0 a 10
const v1 = new Vector(5, 10);
const v2 = new Vector(5, 10);

// Imprimimos los vectores originales
console.log("Vector 1:");
v1.print();

console.log("Vector 2:");
v2.print();

// Probamos la suma
const suma = v1.add(v2);
console.log("Suma:");
suma.print();

// Probamos la resta
const resta = v1.subs(v2);
console.log("Resta:");
resta.print();

// Probamos la  multiplicación elemento 
const producto = v1.mult(v2);
console.log("Producto elemento a elemento:");
producto.print();

// Probamos la multiplicación por número
const multiplicado = v1.multNumber(3);
console.log("Multiplicación por número (3):");
multiplicado.print();
