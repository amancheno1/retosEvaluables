class Professional {
  constructor(name, age, weight, height, isRetired, nationality, oscarNumbers, profession) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarNumbers = oscarNumbers;
    this.profession = profession;
  }
}

class Movie {
  constructor(title, releaseYear, actors, nationality, director, writer, language, plataforma, producer, genre, isMCU) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.actors = actors;
    this.nationality = nationality;
    this.director = director;
    this.writer = writer;
    this.language = language;
    this.plataforma = plataforma;
    this.producer = producer;
    this.genre = genre;
    this.isMCU = isMCU;
  }
}

const profesionales = [
  new Professional("Leonardo DiCaprio", 49, 75, 183, false, "EEUU", 1, "Actor"),
  new Professional("Christopher Nolan", 53, 70, 180, false, "Reino Unido", 0, "Director"),
  new Professional("Emma Stone", 35, 55, 168, false, "EEUU", 1, "Actriz"),
  new Professional("Quentin Tarantino", 61, 85, 185, false, "EEUU", 2, "Director"),
  new Professional("Margot Robbie", 34, 57, 168, false, "Australia", 0, "Actriz"),
  new Professional("Hans Zimmer", 67, 80, 178, false, "Alemania", 2, "Compositor"),
  new Professional("Natalie Portman", 43, 50, 160, false, "Israel/EEUU", 1, "Actriz"),
  new Professional("Brad Pitt", 60, 78, 180, false, "EEUU", 2, "Actor")
];

const peliculas = [
  new Movie("Interstellar", 2014, [profesionales[0]], "EEUU", "Christopher Nolan", profesionales[1], "Inglés", "Netflix", "Warner Bros.", "Ciencia Ficción", false),
  new Movie("El Padrino",   1972, [profesionales[7]], "EEUU", "Francis Ford Coppola", profesionales[7], "Inglés", "Amazon Prime", "Paramount", "Drama", false),
  new Movie("La La Land",   2016, [profesionales[2]], "EEUU", "Damien Chazelle", profesionales[2], "Inglés", "HBO Max", "Summit Entertainment", "Musical", false),
  new Movie("Forrest Gump", 1994, [profesionales[7]], "EEUU", "Robert Zemeckis", profesionales[7], "Inglés", "Netflix", "Paramount", "Drama", false),
  new Movie("Gladiador",    2000, [profesionales[7]], "EEUU", "Ridley Scott", profesionales[7], "Inglés", "Amazon Prime", "Universal", "Acción", false),
  new Movie("Avatar",       2009, [profesionales[7]], "EEUU", "James Cameron", profesionales[7], "Inglés", "Disney+", "20th Cent. Fox", "Ciencia Ficción", false),
  new Movie("Dune",         2021, [profesionales[4]], "EEUU", "Denis Villeneuve", profesionales[4], "Inglés", "HBO Max", "Warner Bros.", "Ciencia Ficción", false),
  new Movie("Oppenheimer",  2023, [profesionales[0]], "EEUU", "Christopher Nolan", profesionales[1], "Inglés", "Peacock", "Universal", "Biografía", false)
];

// SCRIPT PARA TODAS LAS PAGINAS
window.onload = function () {
  // Home: destacados
  const profContainer = document.querySelector(".profesionales");
  if (profContainer && !document.querySelector('.profesionales-grid')) {
    profesionales.slice(0, 5).forEach((prof, i) => {
      const img = document.createElement("img");
      img.src = `img/p${i+1}.jpg`;
      img.alt = prof.name;
      img.className = "foto";
      profContainer.appendChild(img);
    });
  }
  const pelisLista = document.querySelector(".destacados ul");
  if (pelisLista) {
    peliculas.slice(0, 5).forEach(movie => {
      const li = document.createElement("li");
      li.textContent = `${movie.title} (${movie.releaseYear})`;
      pelisLista.appendChild(li);
    });
  }
  // Peliculas: grid completa
  const peliDetalle = document.querySelector(".peliculas-detalle");
  if (peliDetalle) {
    peliculas.forEach((movie, i) => {
      const card = document.createElement("div");
      card.className = "pelicula-detalle-card";
      card.innerHTML = `
        <div class="pelicula-img">
          <img src="img/m${i+1}.jpg" alt="${movie.title}">
        </div>
        <div class="pelicula-info">
          <h2>${movie.title} <span class="anio">(${movie.releaseYear})</span></h2>
          <div><strong>Director:</strong> ${movie.director}</div>
          <div><strong>Guionista:</strong> ${movie.writer.name}</div>
          <div><strong>Actores:</strong> ${movie.actors.map(a => a.name).join(', ')}</div>
          <div><strong>Nacionalidad:</strong> ${movie.nationality}</div>
          <div><strong>Idioma:</strong> ${movie.language}</div>
          <div><strong>Plataforma:</strong> ${movie.plataforma}</div>
          <div><strong>Productora:</strong> ${movie.producer}</div>
        </div>
      `;
      peliDetalle.appendChild(card);
    });
  }
  // Profesionales: grid completa
  const grid = document.querySelector('.profesionales-grid');
  if (grid) {
    profesionales.forEach((prof, i) => {
      const card = document.createElement('div');
      card.className = 'profesional-card';
      card.innerHTML = `
        <div class="prof-img">
          <img src="img/p${i+1}.jpg" alt="${prof.name}">
        </div>
        <div class="prof-info">
          <h2>${prof.name}</h2>
          <div><i class="fa-solid fa-cake-candles"></i> <strong>Edad:</strong> ${prof.age} años</div>
          <div><i class="fa-solid fa-weight-hanging"></i> <strong>Peso:</strong> ${prof.weight} kg</div>
          <div><i class="fa-solid fa-ruler-vertical"></i> <strong>Altura:</strong> ${prof.height} cm</div>
          <div><i class="fa-solid fa-user-clock"></i> <strong>Retirado:</strong> ${prof.isRetired ? 'Sí' : 'No'}</div>
          <div><i class="fa-solid fa-flag"></i> <strong>Nacionalidad:</strong> ${prof.nationality}</div>
          <div><i class="fa-solid fa-trophy"></i> <strong>Oscars:</strong> ${prof.oscarNumbers}</div>
          <div><i class="fa-solid fa-user-tie"></i> <strong>Profesión:</strong> ${prof.profession}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
};
