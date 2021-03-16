/*
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/strelka__left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/strelka_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
}); */
function newFunction() {
    $(document).ready(function () {
        $('.carousel__inner').slick({
            speed: 1200,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/strelka__left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/strelka_right.png"></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    });
}
