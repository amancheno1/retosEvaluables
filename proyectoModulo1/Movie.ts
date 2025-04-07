import { Professional } from './Professional';


export class Movie {

    title: string;
    releaseYear: number;
    actors: Professional[];
    nationality: string;
    director: Professional;
    writer: Professional;
    language: string;
    platform: string;
    isMCU: boolean;
    mainCharacterName: string;
    producer: string;
    distributor: string;
    genre: string;

    constructor(title: string, releaseYear: number, nationality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;

    }

    showMovie() {
        console.log(`${this.title} was released in ${this.releaseYear} and is a ${this.genre} movie`);
        console.log(`It was produced by ${this.producer} and distributed by ${this.distributor}`);
        console.log(`The movie was directed by ${this.director.name} and written by ${this.writer.name}`);
        console.log('The movie stars:');
        for( const professional of this.actors) {
            console.log(professional.name);
        }
        
        console.log(`The movie is ${this.isMCU ? "" : "not"} a MCU movie`);
        console.log(`The main character of the movie is ${this.mainCharacterName}`);
        console.log(`The movie is released in ${this.language} and for ${this.platform}`);
    }

    setTitle(title: string) {
        this.title = title;
    }
    setReleaseYear(releaseYear: number) {
        this.releaseYear = releaseYear;
    }
    setGenre(genre: string) {
        this.genre = genre;
    }
    setDirector(director: Professional) {
        this.director = director;
    }
    setWriter(writer: Professional) {
        this.writer = writer;
    }
    setLanguage(language: string) {
        this.language = language;
    }
    setPlatform(platform: string) {
        this.platform = platform;
    }
    setIsMCU(isMCU: boolean) {
        this.isMCU = isMCU;
    }
    setMainCharacterName(mainCharacterName: string) {
        this.mainCharacterName = mainCharacterName;
    }
    setProducer(producer: string) {
        this.producer = producer;
    }
    setDistributor(distributor: string) {
        this.distributor = distributor;
    }
    setActors(actors: Professional[]) {
        this.actors = actors;
    }
 
}