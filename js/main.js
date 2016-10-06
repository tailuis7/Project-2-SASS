$(document).ready(function() {
    $('.slider').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 0,
        dots: false,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });
});
