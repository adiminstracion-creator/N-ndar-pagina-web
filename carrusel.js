// =======================
// CARRUSEL PRINCIPAL (slider de portada)
// =======================
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function mostrarSlide(i) {
  if (!slider || slides.length === 0) return; // 🔹 evita errores si no existe
  index = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(${-index * 100}%)`;
}

if (prev && next) {
  prev.addEventListener('click', () => mostrarSlide(index - 1));
  next.addEventListener('click', () => mostrarSlide(index + 1));
}

if (slides.length > 1) {
  setInterval(() => mostrarSlide(index + 1), 4000); // autoplay solo si hay más de 1 slide
}

// =======================
// CARRUSELES DE SERVICIOS
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach(carrusel => {
    const imagenes = carrusel.querySelectorAll("img");
    let indice = 0;

    if (imagenes.length > 0) {
      imagenes[indice].classList.add("active");  // 🔹 asegura que una se vea
    }

    if (imagenes.length > 1) {
      setInterval(() => {
        imagenes[indice].classList.remove("active");
        indice = (indice + 1) % imagenes.length;
        imagenes[indice].classList.add("active");
      }, 2000);
    }
  });
});
