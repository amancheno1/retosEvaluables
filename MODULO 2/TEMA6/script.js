const productos = [
    { nombre: 'Cardigan largo rayas', precio: 39.99, imagen: 'img/cardigan_largo_rayas.png' },
    { nombre: 'Falda mini zebra', precio: 29.99, imagen: 'img/falda_mini_zebra.png' },
    { nombre: 'Falda print', precio: 34.99, imagen: 'img/falda_print.png' },
    { nombre: 'Mono overol', precio: 49.99, imagen: 'img/mono_overol.png' },
    { nombre: 'Pantalón ancho', precio: 44.99, imagen: 'img/pantalon_ancho.png' },
    { nombre: 'Pantalón talle alto', precio: 39.50, imagen: 'img/pantalones_tallealto.png' },
    { nombre: 'Vestido jersey', precio: 32.00, imagen: 'img/vestido_jersey.png' },
    { nombre: 'Vestido túnico', precio: 36.75, imagen: 'img/vestido_tunico.png' }
  ];
  
  let carrito = [];
  
  function loadCart() {
    const datos = localStorage.getItem('carrito');
    carrito = datos ? JSON.parse(datos) : [];
  }
  
  function saveCart() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  
  function renderProductos() {
    const cont = $('#productos');
    cont.empty();
    productos.forEach((p, i) => {
      cont.append(`
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">Precio: €${p.precio.toFixed(2)}</p>
              <button class="btn btn-outline-primary mt-auto agregarCarrito" data-index="${i}">
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      `);
    });
  }

  function actualizarCarritoView() {
    const lista = $('#listaCarrito');
    lista.empty();
    if (carrito.length === 0) {
      lista.append('<li class="list-group-item">El carrito está vacío.</li>');
    } else {
      carrito.forEach((item, idx) => {
        lista.append(`
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${item.nombre} - €${item.precio.toFixed(2)}
            <button class="btn btn-sm btn-danger eliminarItem" data-index="${idx}">X</button>
          </li>
        `);
      });
    }
    const total = carrito.reduce((sum, it) => sum + it.precio, 0);
    $('#totalCarrito').text(total.toFixed(2));
    $('#contadorCarrito').text(carrito.length);
  }
  
  function showSummary() {
    const container = $('#bodyCarrito');
    if (carrito.length === 0) {
      container.html('<p>No hay artículos en el carrito.</p>');
    } else {
      let html = '<h5>Resumen de tu pedido:</h5><ul class="list-group mb-3">';
      carrito.forEach(it => {
        html += `<li class="list-group-item">
          ${it.nombre} — $${it.precio.toFixed(2)}
        </li>`;
      });
      html += '</ul>';
      const total = carrito.reduce((sum, it) => sum + it.precio, 0);
      html += `<h5>Total a Pagar: €${total.toFixed(2)}</h5>`;
      container.html(html);
    }
    $('#checkoutBtn').addClass('d-none');
    $('#backBtn').removeClass('d-none');
  }
  
  function backToCart() {
    $('#bodyCarrito').html('<ul class="list-group" id="listaCarrito"></ul>');
    actualizarCarritoView();
    $('#checkoutBtn').removeClass('d-none');
    $('#backBtn').addClass('d-none');
  }
  
  $(document).ready(function() {
    loadCart();
    renderProductos();
    actualizarCarritoView();
  
    $(document).on('click', '.agregarCarrito', function() {
      const idx = $(this).data('index');
      carrito.push(productos[idx]);
      saveCart();
      actualizarCarritoView();
    });
  
    $(document).on('click', '.eliminarItem', function() {
      const idx = $(this).data('index');
      carrito.splice(idx, 1);
      saveCart();
      actualizarCarritoView();
    });
  
    $('#checkoutBtn').click(function() {
      showSummary();
    });
  
    $('#backBtn').click(function() {
      backToCart();
    });
    $('#carritoModal').on('shown.bs.modal', function () {
      backToCart();
    });
  });
  