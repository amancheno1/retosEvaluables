const solicitudes = [];

function solicitarInformacion() {
  const nombre = document.getElementById("nombre").value;
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const personas = document.getElementById("personas").value;
  const fecha = document.getElementById("fecha").value;

  const nuevaSolicitud = {
    nombre,
    origen,
    destino,
    personas: parseInt(personas),
    fecha
  };

  solicitudes.push(nuevaSolicitud);
  console.log("Solicitud añadida:", nuevaSolicitud);
  console.log("Todas las solicitudes:", solicitudes);

  document.getElementById("infoForm").reset();
}

function filtrar() {
  alert("Función de filtrado en desarrollo...");
}

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

