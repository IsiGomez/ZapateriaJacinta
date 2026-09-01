document.querySelectorAll('.carousel').forEach(carrusel => {
    const indicadores = carrusel.querySelector('.carousel-indicators');
    const items = carrusel.querySelectorAll('.carousel-item');

    if (indicadores && items.length > 0) {
        items.forEach((item, indice) => {
            const boton = document.createElement('button');
            boton.type = 'button';
            boton.setAttribute('data-bs-target', '#${carrusel.id}');
            boton.setAttribute('data-bs-slide-to', indice);
            if (indice === 0) {
                boton.classList.add('active');
                boton.setAttribute('aria-current', 'true');
            }
            indicadores.appendChild(boton);
        });
    }
});