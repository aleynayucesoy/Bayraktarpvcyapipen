window.$ = window.jQuery = require("jquery");
require("./owl.carousel.min");

console.log("hello world!");

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

var scrollLink = $(".scroll");

scrollLink.on("click", function (e) {
  e.preventDefault();

  $("body,html")
    .stop(true, true)
    .animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000,
      "easeOutExpo"
    );
});

/*
 * Left menu active switch on scroll to section
 */
$(window).on("scroll", function () {
  var scrollbarLocation = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionOffset = $(this.hash).offset().top - 20;
    if (sectionOffset <= scrollbarLocation) {
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
    }
  });
});

/*
 * Responsive nav menu
 */
$(".desktop-menu-btn").on("click", function (e) {
  e.preventDefault();
  $("body").toggleClass("dmenu-close");
});

$(".mobile-menu-btn").on("click", function (e) {
  e.preventDefault();
  $(".sidebar-menu").toggleClass("active");
});

$(".tabmenu-mobile").on("click", function (e) {
  e.preventDefault();
  $(".toolbar").toggleClass("active");
});
