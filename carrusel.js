const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function mostrarSlide(i) {
  index = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(${-index * 100}%)`;
}

prev.addEventListener('click', () => mostrarSlide(index - 1));
next.addEventListener('click', () => mostrarSlide(index + 1));

setInterval(() => mostrarSlide(index + 1), 4000); // autoplay

// Carrusel automático para cada servicio
document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach(carrusel => {
    const imagenes = carrusel.querySelectorAll("img");
    let indice = 0;

    // Mostrar la primera imagen
    imagenes[indice].classList.add("active");

    setInterval(() => {
      imagenes[indice].classList.remove("active");
      indice = (indice + 1) % imagenes.length;
      imagenes[indice].classList.add("active");
    }, 3000); // cambia cada 3 segundos
  });
});

