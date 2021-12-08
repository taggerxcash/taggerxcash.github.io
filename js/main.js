$(function () {
  $('.nav-catalog').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('.catalog').offset().top }, 1000);
    e.preventDefault();
  });
});

$(function () {
  $('.nav-about').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('.footer').offset().top }, 1000);
    e.preventDefault();
  });
});



$('.catalog__inner__section__blocks__item').click(function (e) {
  e.preventDefault();
  $('.popup__bg-item').fadeIn(300);
  $('html').addClass('no-scroll');
});

$('.popup-item-close').click(function () {
  $('.popup__bg-item').fadeOut(300);
  $('html').removeClass('no-scroll');
});