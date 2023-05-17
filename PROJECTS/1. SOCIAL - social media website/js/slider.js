// -----------------------------------------------------------------------------------------

// HOME SECTION CAROSELS

$(document).ready(function () {
  // story carosel
  $(".story-carousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 4,
      },
      321: {
        items: 5,
      },
      461: {
        items: 6,
      },
      600: {
        items: 7,
      },
      830: {
        items: 8,
      },
      921: {
        items: 6,
      },
      1150: {
        items: 7,
      },
    },
  });

  // find friend carousel
  $(".find-friend-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 5,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      365: {
        items: 2,
      },
      481: {
        items: 2,
        stagePadding: 40,
      },
      531: {
        items: 3,
      },
      631: {
        items: 3,
        stagePadding: 30,
      },
      751: {
        items: 3,
      },
      921: {
        items: 2,
        stagePadding: 40,
      },
      1101: {
        items: 3,
      },
    },
  });
});
