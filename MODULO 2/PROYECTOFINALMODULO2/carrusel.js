const slider = document.getElementById('slider');
const items = slider.children.length;
const visible = 4; // Cuántos se ven a la vez
let current = 0;
let interval = setInterval(moveNext, 2500);

function moveNext() {
  current = (current + 1) % (items - visible + 1);
  slider.style.transform = `translateX(-${current * 172}px)`; // 160 ancho + 2*6 margen
}

// Pausar al pasar el mouse sobre el carrusel
slider.parentElement.addEventListener('mouseenter', () => clearInterval(interval));
slider.parentElement.addEventListener('mouseleave', () => interval = setInterval(moveNext, 2500));
