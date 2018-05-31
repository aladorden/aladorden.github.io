(function ($, Drupal) {

  function fixedHeader() {
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.js-header').outerHeight();

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
        return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.js-header').removeClass('s-header_down').addClass('s-header_up');
      } else if (st > navbarHeight) {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('.js-header').removeClass('s-header_up').addClass('s-header_down');
        }
      } else {
        $('.js-header').removeClass('s-header_down s-header_up');

      }

      lastScrollTop = st;
    }
  }

  $(document).ready(function () {
    fixedHeader();
  })

})(jQuery, Drupal);
