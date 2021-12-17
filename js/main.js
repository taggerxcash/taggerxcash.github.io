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


$('.pop-1').click(function (e) {
  e.preventDefault();
  $('.popup-1').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-1').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-2').click(function (e) {
  e.preventDefault();
  $('.popup-2').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-2').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-3').click(function (e) {
  e.preventDefault();
  $('.popup-3').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-3').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-4').click(function (e) {
  e.preventDefault();
  $('.popup-4').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-4').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-5').click(function (e) {
  e.preventDefault();
  $('.popup-5').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-5').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-6').click(function (e) {
  e.preventDefault();
  $('.popup-6').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-6').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-7').click(function (e) {
  e.preventDefault();
  $('.popup-7').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-7').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-8').click(function (e) {
  e.preventDefault();
  $('.popup-8').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-8').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-9').click(function (e) {
  e.preventDefault();
  $('.popup-9').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-9').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-10').click(function (e) {
  e.preventDefault();
  $('.popup-10').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-10').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-11').click(function (e) {
  e.preventDefault();
  $('.popup-11').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-11').fadeOut(300);
  $('html').removeClass('no-scroll');
});

$('.pop-12').click(function (e) {
  e.preventDefault();
  $('.popup-12').fadeIn(300);
  $('html').addClass('no-scroll');
});
$('.popup-item-close').click(function () {
  $('.popup-12').fadeOut(300);
  $('html').removeClass('no-scroll');
});



$('.popup-item__info-button').click(function () {
  $('.popup__bg-item').fadeOut(500);
  $('html').removeClass('no-scroll');
});