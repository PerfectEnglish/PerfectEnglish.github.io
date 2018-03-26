// You can also use "$(window).load(function() {"

jQuery(window).trigger('resize').trigger('scroll');

$(function () {
    $('.parallax-window').parallax(/*{
        imageSrc: 'img/newV/children.jpg',
        naturalWidth: 600,
        naturalHeight: 400
    }*/);
});