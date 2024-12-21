
// Swiper - Slide Timeline
document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.timeline .swiper-container');
  if (swiperContainer) {
    console.log("Inicializando o Swiper...");
    const timelineSwiper = new Swiper('.timeline .swiper-container', {
      direction: 'horizontal', // Default: Slide vertical (para telas maiores)
      loop: false,
      speed: 1600,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          const year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
          console.log(`Renderizando bullet: ${year}`); // Log para cada bullet
          return '<span class="' + className + '">' + year + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          direction: 'vertical', // Slide horizontal para telas menores
        },
      },
    });

    console.log("Swiper inicializado com sucesso:", timelineSwiper);
  } else {
    console.error("Erro: Não foi possível inicializar o Swiper, pois o container não foi encontrado.");
  }
});
