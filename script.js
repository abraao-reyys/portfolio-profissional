const swiper = new Swiper('.swiper', {
    slidesPerView: 3, // Número de slides visíveis ao mesmo tempo
    centeredSlides: true, // Centraliza o slide ativo
    loop: true, // Loop infinito
    spaceBetween: 50, // Espaço entre slides
    effect: 'coverflow', // Efeito de rotação
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        slideChangeTransitionEnd: () => {
            // Obtém o índice do slide ativo no Swiper
            const activeIndex = swiper.realIndex;

            // Seleciona todos os projetos
            const projectInfos = document.querySelectorAll('.project-info');

            // Mostra apenas o projeto correspondente ao índice ativo
            projectInfos.forEach((project, index) => {
                project.style.display = index === activeIndex ? 'block' : 'none';
            });
        },
    },
});

// Exibe o primeiro projeto por padrão ao carregar a página
document.querySelectorAll('.project-info').forEach((project, index) => {
    project.style.display = index === 0 ? 'block' : 'none';
});


const words = ["dinâmicos.", "modernos.", "intuitivos.", "responsivos.", "atrativos.", "funcionais.", "agradáveis.", "criativos."];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false; // Define se estamos apagando o texto
const typingElement = document.getElementById("typing");

function type() {
const currentWord = words[currentWordIndex];
if (!isDeleting) {
// Adiciona uma letra
typingElement.textContent = currentWord.slice(0, currentCharIndex + 1);
currentCharIndex++;

// Se a palavra foi completamente digitada, espera antes de apagar
if (currentCharIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1400); // Pausa de 1 segundo antes de apagar
    return;
}
} else {
// Remove uma letra
typingElement.textContent = currentWord.slice(0, currentCharIndex - 1);
currentCharIndex--;

// Quando a palavra é completamente apagada, troca para a próxima
if (currentCharIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length; // Vai para a próxima palavra, looping
}
}

// Controla a velocidade de digitação e apagamento
const typingSpeed = isDeleting ? 120 : 200;
setTimeout(type, typingSpeed);
}

// Inicia a animação de digitação
type();

const body = window.document.querySelector('body');
const main = window.document.querySelector('main');
const screen_darken = window.document.querySelector('div.screen-darken');
const sideMenu = window.document.getElementById('side-menu');
const close_button = window.document.querySelector('#side-menu img');
const menu_button = window.document.getElementById('menu-button');
const listItem = window.document.querySelector('#side-menu ul');

menu_button.addEventListener('click', openMenu);
close_button.addEventListener('click', closeMenu);
main.addEventListener('click', closeMenu);
listItem.addEventListener('click', closeMenu);

function openMenu() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 480) {
        sideMenu.style.width = '40vw'; 
    } else {
       sideMenu.style.width = '60vw'; 
    }
    sideMenu.style.padding = '20px';
    body.style.overflow = 'hidden';
    screen_darken.style.display = 'block';
}

function closeMenu() {
    sideMenu.style.width = '0vw';
    sideMenu.style.padding = '0px';
    body.style.overflow = 'scroll';
    screen_darken.style.display = 'none';
}