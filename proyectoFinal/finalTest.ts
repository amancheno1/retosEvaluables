const readLineSync = require('readline-sync');
import { Professional } from './Professional';
import { imbd } from './testImdb';


const path = './imdbBBDD.json';

console.log("Introduce los Datos del profesional:")
const name = readLineSync.question("Nombre: ");
const age = readLineSync.question("Edad: ");
const weight = readLineSync.question("Peso: ");
const height = readLineSync.question("Altura: ");
const isRetired = readLineSync.question("Estas Retirado: ");
const nationality = readLineSync.question("Nacionalidad: ");
const oscarsNumber = readLineSync.question("Numero de Oscars: ");
const profession = readLineSync.question("Profesion: ");

const profesional = new Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession);

imbd.movies[0].actors.push(profesional);
imbd.writeJsonFile(path);

console.log(imbd.getDataMDB(path));
