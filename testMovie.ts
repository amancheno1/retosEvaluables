import { Movie } from './Movie';
import { Professional } from './Professional';


export const movie = new Movie("The Matrix", 1999, "USA", "Action");

movie.setActors([new Professional("Keanu Reeves", 52, 120, 180, false, "USA", 0, "Actor"), new Professional("Laurence Fishburne", 40, 110, 170, false, "USA", 0, "Actor")]);
movie.setDirector(new Professional("Christopher Nolan", 72, 120, 170, false, "USA", 0, "Director"));
movie.setWriter(new Professional("Christopher Nolan", 72, 120, 170, false, "USA", 0, "Writer"));
movie.setLanguage("English");
movie.setPlatform("DVD");
movie.setIsMCU(true);
movie.setMainCharacterName("Neo");
movie.setProducer("The Wachowskis");
movie.setDistributor("Warner Bros.");
movie.showMovie();