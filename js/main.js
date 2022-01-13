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
