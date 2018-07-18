$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    nav: false,
    pagination: false,
    animateOut: 'fadeOut',
    autoplay: 1000,
    autoplayTimeout: 15000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        700: {
            items: 4
        },
        1000: {
            items: 1
        }
    }
})