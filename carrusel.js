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
// CARRUSELES DE SERVICIOS(MEJORADO)
// =======================
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los contenedores principales
  const bloquesServicio = document.querySelectorAll(".servicio-carrusel");

  bloquesServicio.forEach(bloque => {
    const imagenes = bloque.querySelectorAll(".carrusel img");
    const btnPrev = bloque.querySelector(".prev");
    const btnNext = bloque.querySelector(".next");
    let indice = 0;
    let intervalo;

    // Función para mostrar imagen específica
    function mostrarImagen(n) {
      // Quitar clase active a todas
      imagenes.forEach(img => img.classList.remove("active"));
      
      // Calcular nuevo índice (ciclico)
      indice = (n + imagenes.length) % imagenes.length;
      
      // Activar la nueva
      imagenes[indice].classList.add("active");
    }

    // Funciones de navegación
    function siguiente() {
      mostrarImagen(indice + 1);
    }

    function anterior() {
      mostrarImagen(indice - 1);
    }

    // Iniciar auto-play
    function iniciarAutoPlay() {
      intervalo = setInterval(siguiente, 3500); // 3.5 segundos (más calmado)
    }

    // Pausar auto-play (al pasar mouse o hacer click)
    function pausarAutoPlay() {
      clearInterval(intervalo);
    }

    // --- EVENTOS ---
    if (btnNext && btnPrev) {
      btnNext.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita conflictos
        pausarAutoPlay();
        siguiente();
        iniciarAutoPlay(); // Reinicia el timer
      });

      btnPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        pausarAutoPlay();
        anterior();
        iniciarAutoPlay();
      });
    }

    // Pausar si el mouse está encima (para leer o ver detalle)
    bloque.addEventListener("mouseenter", pausarAutoPlay);
    bloque.addEventListener("mouseleave", iniciarAutoPlay);

    // Inicializar
    if (imagenes.length > 0) {
      imagenes[0].classList.add("active");
      if (imagenes.length > 1) {
        iniciarAutoPlay();
      }
    }
  });
});