$(document).ready(function() {
  $('.selectpicker1').selectpicker();
  // $('#carouselExampleIndicators').carousel();
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
  var x = $('.banner-img > img').height();
  $('.banner-wrapper').css('height', x);
});
