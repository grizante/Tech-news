// Função para voltar ao início da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Função para aparecer o botão de acordo com a altura da tela
(function () {
  let top = document.getElementById('to-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 600) top.classList.add('button-top');
    else top.classList.remove('button-top')
  })
})();


// Atualização Ano de postagem
document.addEventListener('DOMContentLoaded', function () {
  const yearSpan = document.getElementById('current-year');
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear.toString();
});


// Slides simples de referências
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  const slides = document.querySelectorAll('.slide');
  currentIndex = Math.min(slides.length - 1, currentIndex + 1);
  updateSlider();
});
