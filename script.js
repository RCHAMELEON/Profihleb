$(document).ready(function () {
    var flag = false;
    $('#checkbox1').click(onclick, function () {
        if(flag == false){
            $('.all-classes_upcoming').fadeOut();
            $('.all-classes_past').fadeIn();
            flag  = true;
        }
        else {
            $('.all-classes_upcoming').fadeIn();
            $('.all-classes_past').fadeOut();
            flag  = false;
        }
    });

    $('.hamburger').click(onclick, function () {
        if(flag == false){
            $(this).addClass('open-hamburger');
            $('.menu-hamburger').css('box-shadow','none');
            $('.headings').addClass('headings_open');
            $('.heading').css('display', 'table');
            flag  = true;
        }
        else {
            $(this).removeClass('open-hamburger');
            $('.headings').removeClass('headings_open');
            $('.menu-hamburger').css('box-shadow','1px 1px 0 0 rgba(230, 230, 230, 0.73)');
            flag  = false;
        }
    });

    $('.heading-past').click(onclick, function () {
        $('.heading-up').css('display', 'none');
        $('.headings').removeClass('headings_open');
        $('.hamburger').removeClass('open-hamburger');
        $('.all-classes_upcoming').fadeOut();
        $('.all-classes_past').fadeIn();
    });

    $('.heading-up').click(onclick, function () {
        $('.heading-past').css('display', 'none');
        $('.headings').removeClass('headings_open');
        $('.hamburger').removeClass('open-hamburger');
        $('.all-classes_past').fadeOut();
        $('.all-classes_upcoming').fadeIn();
    });

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