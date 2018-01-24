$(document).ready(function () {
    /*$('.master-class').hover(function () {
        var  height = $(this).find('.master-class-desc').height()+40;
        var pheight = $(this).height();
        if(height < pheight){
            height = pheight;
            $(this).find('.master-class-desc').css('height',height);
        }
        $(this).css('height', height);
    },function () {
        $(this).css('height', '')
    });*/

    $('.mk-sliders').slick({
        arrows: true,
        dots: false,
        variableWidth: true,
        centerMode: false,
        infinite: false,
        slidesToShow: 3,
        adaptiveHeight: false,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    adaptiveHeight: true,
                    centerMode: false,
                    variableWidth: true

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    centerMode: false,
                    variableWidth: false
                }
            }
        ]
    });
});