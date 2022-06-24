window.$ = window.jQuery = require("jquery");
require("./owl.carousel.min");
require("./jquery.scrollify");
require("./jquery.easing.compatibility");



$(function () {
  $(".hero-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
  });

  "use strict";

  /*
   * Smooth scroll to section from left menu
   */
  var scrollLink = $('.scroll');

  scrollLink.on('click', function (e) {

    e.preventDefault();

    $('body,html').stop(true, true).animate({

      scrollTop: $(this.hash).offset().top

    }, 1000, 'easeOutExpo');

  });

  /*
   * Left menu active switch on scroll to section
   */
  $(window).on('scroll', function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset();
      // var sectionOffset = $(this.hash).offset().top - 20;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  });

  /*
   * Project filter
   */
  $(".filter-button").on('click', function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.' + value).hide('1000');
      $('.filter').filter('.' + value).show('1000');
    }
  });

  /*
   * Responsive nav menu
   */
  $(".desktop-menu-btn").on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('dmenu-close');
  });

  $(".mobile-menu-btn").on('click', function (e) {
    e.preventDefault();
    $('.sidebar-menu').toggleClass('active');
  });

  $(".tabmenu-mobile").on('click', function (e) {
    e.preventDefault();
    $('.toolbar').toggleClass('active');
  });

  /*
   * wow animation
   */
  var wow = new WOW({
    animateClass: 'animated',
    offset: 0,
  });
  wow.init();

  /*
   * Lightbox
   */
  $('.gallery_product a.zoom-img-icon').superLightBox({});

  /*
   * Preloader
   */
  $('body').imagesLoaded({ background: true }, function () {
    $('.loader').fadeOut('slow');
  });
});