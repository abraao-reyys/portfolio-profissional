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
    });

const words = ["dinâmicos.", "atrativos.", "planejados.", "criativos."];
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