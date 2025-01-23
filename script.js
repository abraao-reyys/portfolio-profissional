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
    swiper.on('slideChange', () => {
        const activeIndex = swiper.realIndex; // Índice do slide central ativo (realIndex ignora o loop)
        
        // Opcional: adiciona uma classe "ativo" ao slide central
        swiper.slides.forEach((slide, index) => {
            if (index === swiper.activeIndex) {
                slide.classList.add('ativo');
            } else {
                slide.classList.remove('ativo');
            }
        });
    });