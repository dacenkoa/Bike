$(document).ready(function () {
  $('.top__slider , .bike__slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  $('.form__choice-radio').on('click', function () {
    $('.form__choice-item').removeClass('img__active');
    $(this).parent().addClass('img__active');
  });

  $('.burger__menu').on('click', function () {
    $('.header__menu').toggleClass('show');
    $('.burger__menu').toggleClass('show');
    $('.top').toggleClass('show');
  });
});
