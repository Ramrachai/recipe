const el = document.querySelector('#hero-slider')

const slider = new BlazeSlider(el, {
    all: {
        enableAutoplay: true,
        autoplayInterval: 3000,
        transitionDuration: 300,
        slidesToShow: 6,
        stopAutoplayOnInteraction: true,
    },
    '(max-width: 900px)': {
        slidesToShow: 4,
    },
    '(max-width: 500px)': {
        slidesToShow: 2,
    },
})
