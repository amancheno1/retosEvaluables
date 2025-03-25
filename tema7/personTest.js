import Person
 from "./person.js";
 const hobbies = ["nadad","comer","dormir"];
 const person = new Person("Alejandro",1979, 90,1.85,hobbies);
 
 console.log(person.calcImc());
 console.log(person.calcEdad());
 person.printAll();
 person.printhobbies();