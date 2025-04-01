
export class Professional {

    name: string;
    age: number;
    weight: number;
    height: number;
    isRetired: boolean;
    nationality: string;
    oscarsNumber: number;
    profession: string;

    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    showProfessional() {
        console.log(`${this.name} is ${this.age} years old, ${this.weight} kg, ${this.height} cm, ${this.isRetired}, ${this.nationality}, ${this.oscarsNumber}, ${this.profession}`);
    }
}