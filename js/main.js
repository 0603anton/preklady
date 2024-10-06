$(document).ready(function(){
    $('.testimonials__items').slick({
        dots: true,
        arrows:true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel',{
        // pagination:true,
        classes: {
            pagination: 'splide__pagination your-class-pagination',
            page      : 'splide__pagination__page your-class-page',
        },
        height: '70vh',
        autoplay: true,
        interval: 50000,
        pauseOnHover: true,
        type   : 'loop',
    } ).mount();
} );


