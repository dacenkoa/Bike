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

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTopBtn').addClass('showBtn');
    } else {
      $('.scrollToTopBtn').removeClass('showBtn');
    }
  });

  $('.scrollToTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });


  // По кліку на кнопку змінюємо тему
  $('#theme-toggle').click(function () {
    // Перевіряємо поточну тему та змінюємо її
    if ($('body').hasClass('light-mode')) {
      $('body').removeClass('light-mode').addClass('dark-mode');
      $('.header__link-img').attr("src", "../images/logo_img-dark.jpg");
      $('.bx').removeClass('bxl-youtube').addClass('bxl-instagram');

    } else {
      $('body').removeClass('dark-mode').addClass('light-mode');
      $('.header__link-img').attr("src", "../images/logo_img.jpg");
      $('.bx').removeClass('bxl-instagram').addClass('bxl-youtube');
    }

  });

});
