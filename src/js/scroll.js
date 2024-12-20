// Scroll Suave na página
let menu = document.querySelector('#nav-bar');
const menuLinks = document.querySelectorAll('a[href^="#"]'); // Seleciona os links de navegação

// Função para calcular a distância do topo da página até o elemento
function getDistanceFromTheTop(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

/**
 * Trata o evento de clique nos links do menu e realiza a rolagem suave até a seção correspondente.
 *
 * @param {Event} event - O evento de clique acionado pelo link do menu.
 */
function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - menu.offsetHeight;
  smoothScrollTo(0, distanceFromTheTop);
}

// Adiciona um evento de clique a cada link de navegação
menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Função para rolar suavemente até a posição desejada
function smoothScrollTo(endX, endY, duration = 1000) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer); // Finaliza o intervalo quando o tempo terminar
    }
    window.scroll(newX, newY); // Faz a rolagem suave
  }, 1000 / 60); // Executa 60 vezes por segundo
}
