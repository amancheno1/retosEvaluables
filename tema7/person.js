class Person {
    constructor(nombre,anyoNacimiento,peso,altura,hobbies) {
        this.nombre=nombre;
        this.anyoNacimiento=anyoNacimiento;
        this.peso=peso;
        this.altura=altura;
        this.hobbies=hobbies;
    }

    calcImc(){
        return this.peso/(this.altura^2);
    }

    calEdad(){
        return new Date().getFullYear()-this.anyoNacimiento
    }

    printAll(){ 
        console.log(`nombre - ${this.nombre} anyoNacimiento - ${this.anyoNacimiento} peso - ${tihis.peso} altura - ${this.altura}`)
    }
    printhobbies(){
        console.log(this.hobbies);
    }
}

export default Person;