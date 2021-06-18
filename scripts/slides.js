var swiper = new Swiper(".bannerIncial", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});
// Para telas acima de 1000 Pixels
if (screen.width >= 1000) {

    var swiper = new Swiper(".depoimento", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    var swiper = new Swiper(".atv", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    var swiper = new Swiper(".simples", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
} else if (screen.width >= 767) {

    var swiper = new Swiper(".depoimento", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    var swiper = new Swiper(".atv", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    var swiper = new Swiper(".simples", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
} else if (screen.width > 540) { // Para telas maiores que 540 pixels e menores que 767 pixels

    var swiper = new Swiper(".depoimento", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    var swiper = new Swiper(".atv", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    var swiper = new Swiper(".simples", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
} else {

    var swiper = new Swiper(".depoimento", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    var swiper = new Swiper(".atv", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    var swiper = new Swiper(".simples", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
}