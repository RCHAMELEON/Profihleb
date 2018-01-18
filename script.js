$(document).ready(function () {
    $('.master-class').hover(function () {
        var  height = $(this).find('.master-class-desc').height()+40;
        var pheight = $(this).height();
        if(height < pheight){
            height = pheight;
            $(this).find('.master-class-desc').css('height',height);
        }
        $(this).css('height', height);
    },function () {
        $(this).css('height', '')
    });

    $('.mk-sliders').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        adaptiveHeight: false,
        variableWidth: true
    });
});