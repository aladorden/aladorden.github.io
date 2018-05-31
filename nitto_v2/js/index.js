(function($, Drupal) {
    $(document).ready(function() {
        var controller = new ScrollMagic.Controller();

        //http://skidding.github.io/dragdealer/
        //шторка для выбора шин
        var eskobar = new Dragdealer('just-a-slider', {
            steps: 2,
            x: .5,
            //left:100,
            slide: false,
            animationCallback: function(x, y) {
                $('.js-tyre-choice__item').removeClass('active');
                if (x < 0.5) {
                    $('.js-tyre-choice__item_winter').addClass('active').width(100 * (1 - x) + '%');

                    //console.log('left');
                } else {
                    //console.log('right');
                    $('.js-tyre-choice__item_summer').addClass('active').width(100 * x + '%');

                }

                //$('#just-a-slider .value').text(Math.round(x * 100));
            }
        });

        $('.gallery').scrollbar({
            autoScrollSize: false,
            disableBodyScroll: true
        });

        $('.js-scroll_vertical').scrollbar({
            //autoScrollSize:false,
            disableBodyScroll: true
        });

        $(document).on('click', '.js-review-thumb', function() {

            var t = $(this);
            var p = t.closest('.js-review');

            p.find('.js-review-thumb').removeClass('active-tyre');
            p.find('.js-review-item').removeClass('active-tyre');

            t.addClass('active-tyre');
            $(t.data('preview')).addClass('active-tyre');

        });
    });

    //js for tire intro

    $(window).on('load', function() { $('.is-play-section-main').removeClass('is-play-section-main'); });

    //smooth scroll
    $('a[href*="#"]')
        // Remove links that link to popups
        .not('[href="#buy1-popup"]')
        .not('[href="#buy2-popup"]')
        .not('[href="#buy3-popup"]')
        .not('[href="#contacts-popup"]')
        .not('[href="#feedback-popup"]')
        .not('[href="#location-popup"]')
        .not('[href="#location-succes-popup"]')
        .not('[href="#wait-popup"]')
        .not('[href="#warning-popup"]')
        .not('[href="#youtube-popup"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $(".catalog-filter-container").click(function(){
        var facetLink = $(this).find(".custom-select-option.is-selected");
        if (!facetLink.attr("data-value")) {
            facetLink.hide();
        }
    });
    //trigger the scroll
    /* $(window).scroll(); */

    $(".fp-menu__item").click(function() {
        $(".fp-menu__item.active").removeClass('active');
        $(this).addClass('active');
    });

    /* function fpPagination() {
        if()
    } */
})(jQuery, Drupal);