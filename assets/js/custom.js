(function ($) {
  "use strict";

  // Mean Menu
  $(".mean-menu").meanmenu({
    meanScreenWidth: "1199",
  });

  // Search Bar
  $("#popupSearchButton").on("click", function () {
    $(".popupSearchBar").toggle();
  });

  // banner-ara

  $(".slider-wrapper-banner").owlCarousel({
    smartSpeed: 1000,
    center: true,
    items: 1.3,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: ['<iconify-icon icon="fa6-solid:angle-left"></iconify-icon>', '<iconify-icon icon="fa6-solid:angle-right"></iconify-icon>'],
    responsive: {

    }

  });

  // Slider area

  $(".popular-products-slider-area").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ['<iconify-icon icon="fa6-solid:angle-left"></iconify-icon>', '<iconify-icon icon="fa6-solid:angle-right"></iconify-icon>'],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".popup-product-image").magnificPopup({
    type: "image",
    // other options
  });
})(jQuery);
