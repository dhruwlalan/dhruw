// ASSETS
import './assets.js';

// MAIN


$(window).on("scroll", function() {
    $(window).scrollTop() >= 50 ? $(".header-navbar").addClass("header-navbar--sticky") : $(".header-navbar").removeClass("header-navbar--sticky")
})