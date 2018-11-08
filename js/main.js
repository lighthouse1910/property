$(document).ready(function() {
  $('.selectpicker1').selectpicker();
  // $('#carouselExampleIndicators').carousel();
  $('.slide-banner-top--wrapper').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    prevArrow: "<i class='fa fa-chevron-left arrow-left'></i>",
    nextArrow: "<i class='fa fa-chevron-right arrow-right'></i>",
    speed: 300,
    margin: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    pauseOnHover: false
  });
  $('.about-info--slider_wrapper').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: false
  });
  $('.multiple-items').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnHover: false
  });
  var x = $('.banner-img > img').height();
  $('.banner-wrapper').css('height', x);
  $('.number-only').keydown(function(e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if (
      $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      // Allow: Ctrl/cmd+A
      (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl/cmd+C
      (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl/cmd+X
      (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });
});

function hideModal() {
  const modal = document.querySelector('.overlay');
  modal.style.display = 'none';
}

function showModal() {
  const modal = document.querySelector('.overlay');
  modal.style.display = 'block';
}

const support = document.querySelectorAll('.support-content--item');
const toggleSupport = document.querySelector('.support-content > .toggle-btn');
toggleSupport.addEventListener('click', function() {
  support.forEach(item => {
    item.classList.toggle('active');
  });
});
