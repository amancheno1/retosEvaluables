document.getElementById("movieForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const movie = {
    title: document.getElementById("title").value,
    year: document.getElementById("year").value,
    actors: document.getElementById("actors").value,
    nationality: document.getElementById("nationality").value,
    director: document.getElementById("director").value,
    writer: document.getElementById("writer").value,
    language: document.getElementById("language").value,
    platform: document.getElementById("platform").value,
    producer: document.getElementById("producer").value,
    genre: document.getElementById("genre").value,
  };

  const movieList = document.getElementById("movieList");

  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <h3>${movie.title} (${movie.year})</h3>
    <p><strong>Actores:</strong> ${movie.actors}</p>
    <p><strong>Nacionalidad:</strong> ${movie.nationality}</p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Guionista:</strong> ${movie.writer}</p>
    <p><strong>Idioma:</strong> ${movie.language}</p>
    <p><strong>Plataforma:</strong> ${movie.platform}</p>
    <p><strong>Productor:</strong> ${movie.producer}</p>
    <p><strong>Género:</strong> ${movie.genre}</p>
  `;

  movieList.prepend(card);
  document.getElementById("movieForm").reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const form = document.getElementById("peliculaForm");

  const peliculas = [
    { titulo: "Inception", anio: 2010, imagen: "https://via.placeholder.com/160x220?text=Inception" },
    { titulo: "Interstellar", anio: 2014, imagen: "https://via.placeholder.com/160x220?text=Interstellar" },
    { titulo: "Tenet", anio: 2020, imagen: "https://via.placeholder.com/160x220?text=Tenet" },
    { titulo: "Dune", anio: 2021, imagen: "https://via.placeholder.com/160x220?text=Dune" },
    { titulo: "The Batman", anio: 2022, imagen: "https://via.placeholder.com/160x220?text=Batman" }
  ];

  function mostrarPeliculas() {
    carousel.innerHTML = "";
    peliculas.forEach(p => {
      carousel.innerHTML += `
        <div class="card">
          <img src="${p.imagen}" alt="${p.titulo}">
          <div class="info">
            <h3>${p.titulo}</h3>
            <p>${p.anio}</p>
          </div>
        </div>`;
    });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const nuevaPelicula = {
      titulo: document.getElementById("titulo").value,
      anio: parseInt(document.getElementById("anio").value),
      imagen: document.getElementById("imagen").value
    };
    peliculas.push(nuevaPelicula);
    mostrarPeliculas();
    form.reset();
  });

  mostrarPeliculas();
});
professionals.slice(0, 5).forEach(prof => {
    document.getElementById('profesionales-destacados').innerHTML += `
        <div class="flex flex-col items-center">
            <img src="${prof.photo}" class="w-20 h-20 rounded-full border-4 border-yellow-300 shadow-md mb-2 object-cover" alt="${prof.name}">
            <a href="profesionales.html" class="font-semibold text-yellow-300 hover:underline text-lg">
                ${prof.name}
            </a>
        </div>
    `;
});
