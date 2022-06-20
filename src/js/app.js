window.$ = window.jQuery = require('jquery');    
require("./owl.carousel.min");

console.log('hello world!');

$('.hero-slider').owlCarousel({
    items: 1,
    loop:true,
    margin:1,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut'  
})

$(".open-menu").on("click", ()=> {
    $(".sidebar-menu").toggleClass("open")
    $(".menu .navbar").toggleClass("d-none");
})