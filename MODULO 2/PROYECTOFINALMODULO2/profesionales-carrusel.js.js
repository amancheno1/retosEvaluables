const proSlider = document.getElementById('pro-slider');
const proItems = proSlider.children.length;
const proVisible = 4; // Profesionales visibles a la vez
let proCurrent = 0;
let proInterval = setInterval(moveProNext, 2500);

function moveProNext() {
  proCurrent = (proCurrent + 1) % (proItems - proVisible + 1);
  proSlider.style.transform = `translateX(-${proCurrent * 218}px)`; // 210 ancho + 2*4 margen
}

// Pausar al pasar el mouse sobre el carrusel
proSlider.parentElement.addEventListener('mouseenter', () => clearInterval(proInterval));
proSlider.parentElement.addEventListener('mouseleave', () => proInterval = setInterval(moveProNext, 2500));
