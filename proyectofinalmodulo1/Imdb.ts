import { readFileSync, writeFileSync } from 'fs';
import { Movie } from './Movie';


export class Imdb {

    movies: Movie[];
    constructor(movie: Movie[]){
        this.movies = movie;
    }


    toString(): string {
        return JSON.stringify(this.movies);
    }
    
    writeJsonFile(nameFile: string): void {
        
        writeFileSync(nameFile, this.toString());
    }

    getDataMDB(nameFile: string): Imdb {

        const file = readFileSync(nameFile, 'utf8');
        return JSON.parse(file);

    }
}