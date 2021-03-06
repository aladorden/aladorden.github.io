(function($, Drupal) {
    var func = {
        "hover": function() {
          $('.preview__item').hover(
            function() {
              $(this).addClass('preview__item-activated')
            },
            function() {
              $(this).removeClass('preview__item-activated')
            }
          )
          $('.news__item').hover(
            function() {
              $(this).addClass('news__item-activated')
            },
            function() {
              $(this).removeClass('news__item-activated')
            }
          )
          $('.recommended__item').hover(
            function() {
              $(this).addClass('recommended__item-activated')
            },
            function() {
              $(this).removeClass('recommended__item-activated')
            }
          )
          $('.s-header .nav__item').hover(
            function() {
              $(this).addClass('active-menu')
            },
            function() {
              $(this).removeClass('active-menu')
            }
          )
        },

        "productTabs": function() {
          $(".product-options__item").click(function(evt) {
            $('.product-options__item.product-options__item-selected').not(this).removeClass('product-options__item-selected');
            $(this).toggleClass('product-options__item-selected');
            var tabName = $(this).data('tab-id');
            $('.slick-slider').slick('setPosition');
            openTab(evt, tabName);
          })

          $(".product-types__item").click(function(evt) {
            $('.product-options__item.product-options__item-selected').not(this).removeClass('product-options__item-selected');
            $(".product-options__item_dealers").toggleClass('product-options__item-selected');
            var tabName = $(this).data('tab-id');
            $('.slick-slider').slick('setPosition');
            openTab(evt, tabName);
          })

          function openTab(evt, tabName) {
            var i, tabcontent, tablinks;

            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }

            tablinks = document.getElementsByClassName(".product-options__item");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" .product-options__item-selected", "");
            }

            document.getElementById(tabName).style.display = "flex";

          }
        },

        "descTabs": function() {
          $(".product-desc__item").click(function(evt) {
            // $('.product-desc__item.product-desc__item_active').not(this).removeClass('product-desc__item_active');
            // $(this).toggleClass('product-desc__item_active');
            // var tabName = $(this).data('tab-id');
            // openDesc(evt, tabName);
            var slideno = $(this).data("tab-id").slice(-1);
            $('.product-desc__hero-wrap').slick('slickGoTo', slideno - 1);
          })

          $("product-desc").on("scroll", function() {
            if ($("product-desc__item_1").hasClass("product-desc__item_active")) {
              $("product-desc__item_1").removeClass("product-desc__item_active")
              $("product-desc__item_2").addClass("product-desc__item_active")
            }
          })

          function openDesc(evt, descName) {
            var i, tabcontent, tablinks;

            tabcontent = document.getElementsByClassName("tabcontent-desc");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }

            tablinks = document.getElementsByClassName("product-desc__item");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" product-desc__item_active", "");
            }

            document.getElementById(descName).style.display = "flex";
            evt.currentTarget.className += " product-desc__item_active";
            $('.product-desc__video-container').slick('setPosition');

          }

          function scrollNav() {
            $('.banner-info__feedback').click(function(evt) {
              $('.product-options__item.product-options__item-selected').removeClass('product-options__item-selected');
              $(".product-options__item:last-of-type").addClass('product-options__item-selected');
              tabcontent = document.getElementsByClassName("tabcontent");
              for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
              }
              var tabName = $(this).data('tab-id');
              openDesc(evt, tabName);

              $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
              }, 1000);
              return false;
            });
            $('.scrollTop a').scrollTop();
          }

          function scrollNav2() {
            $('.banner-info__button').click(function(evt) {
              $('.product-options__item.product-options__item-selected').removeClass('product-options__item-selected');
              $(".product-options__item_dealers").addClass('product-options__item-selected');
              tabcontent = document.getElementsByClassName("tabcontent");
              for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
              }
              var tabName = $(this).data('tab-id');
              openDesc(evt, tabName);

              $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
              }, 1000);
              return false;
            });
            $('.scrollTop a').scrollTop();
          }

          function scrollNav3() {
            $('.product-info-dealer__supply').click(function(evt) {
              $('.product-options__item.product-options__item-selected').removeClass('product-options__item-selected');
              $(".product-options__item_dealers").addClass('product-options__item-selected');
              tabcontent = document.getElementsByClassName("tabcontent");
              for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
              }
              var tabName = $(this).data('tab-id');
              openDesc(evt, tabName);

              $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
              }, 1000);
              return false;
            });
            $('.scrollTop a').scrollTop();
          }

          scrollNav();
          scrollNav2();
          scrollNav3();

          $(".product-options__item_desc").click(function(evt) {
            var tabName = $(".product-desc__item:first-of-type").data('tab-id');
            openDesc(evt, tabName);
            $(".product-desc__item:first-of-type").addClass("product-desc__item_active")
          })

        },

        "dropdown": function() {
          $(".dropbtn").hover(function() {
            $("#myDropdown").fadeIn(300)
            $("#locate-dropdown").css("display", "none")
            $("#search-dropdown").css("display", "none")
          })

          $(".row").mouseleave(function(e) {
            $("#myDropdown").fadeOut(300)
          });

          $(document).mouseup(function(e) {
            var container = $("#myDropdown");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
              container.hide();
            }
            $("#myDropdown").fadeOut(300)
          });

          $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
              $('#myDropdown').fadeOut(300)
            }
          });
        },

        "dropdownCity": function() {
          $(".locate").click(function() {
            $("#locate-dropdown").css("display", "flex")
            $("#search-dropdown").css("display", "none")
            $("#myDropdown").css("display", "none")
          })

          $(document).mouseup(function(e) {
            var container = $("#locate-dropdown");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
              container.hide();
            }
          });

          $(".locate-yes").click(function(e) {
            e.stopPropagation();
            $("#locate-dropdown").css("display", "none")
          })

          $(".locate-yes").mouseleave(function() {
            $(".locate-yes").removeClass("locate-yes_active")
          });

          $(".locate-no").mouseenter(function() {
            $(".locate-yes").removeClass("locate-yes_active")
          });

          $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
              $('#locate-dropdown').css({
                'display': 'none'
              });
            }
          });
        },

        "bannerParalax": function() {
          var scrolled = $(window).scrollTop();
          if ($('.banner').length > 0) {
            // $('.banner__left, .banner__right').css('transform','translateY('+(scrolled*.45)+'px)');
            // $('.banner-info').css('transform','translateY('+(scrolled*.35)+'px)');
            var bgPos = 50 % +(scrolled * .35);
            $('.banner').css('background-position', 'center ' + (scrolled * .35) + 'px');
            $('.banner-img').css('transform', 'translateY(' + ((scrolled * .35)) + 'px)');
          }
        },
        "productDescScroll": function() {
          if ($('.product-desc').length > 0 && $('.product-desc').is(':visible')) {
            var offset = $('.product-desc').offset().top;
          }
        },
        "catalogWindow": function() {
          $(document).on('click', '.tyre-choice-item__caption', function() {
            var href = $(this).attr('href');
            var el = $('.catalog-window[data-href="' + href + '"]');
            $('.catalog-window').removeClass('active');
            el.addClass('active');
            $('.fp-menu').css('display', 'none');
            $('html, body').css('overflow', 'hidden');
            $.fn.fullpage.setMouseWheelScrolling(false);
            $.fn.fullpage.setAllowScrolling(false);
            $('.s-main').addClass('active');
          });
          $(document).on('click', '.js-catalog-window__close', function() {
            $(this).closest('.catalog-window').removeClass('active');
            $('.fp-menu').css('display', 'block');
            $.fn.fullpage.setMouseWheelScrolling(true);
            $.fn.fullpage.setAllowScrolling(true);
            $('.s-main').removeClass('active');
          });
        },
        "dropdownSearch": function() {
          $(".search").hover(function() {
            $("#search-dropdown").fadeIn(300).css("display", "flex")
            $("#locate-dropdown").css("display", "none")
            $("#myDropdown").css("display", "none")
          })
          $(".row").mouseleave(function(e) {
            $("#search-dropdown").fadeOut(300)
          });

          $(document).mouseup(function(e) {
            var container = $("#search-dropdown");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
              container.hide();
            }
          });

          $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
              $('#search-dropdown').fadeOut(300)
            }
          });
        },

        "diameter": function() {
          $(".product-types__diameters-item-text").click(function() {
            $('.product-types__diameters-item-text').removeClass('product-types__diameters-item_active');
            $(this).addClass('product-types__diameters-item_active');
            var diameter = $(this).data('diameter');
            $('.product-types__item').css('display', 'none');
            $('.product-types__item_' + diameter).css('display', 'flex');
          })
        },

        "slick": function() {
          //slick init news gallery
          $(document).ready(function() {
            $('.fullnews__gallery-main').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              fade: true,
              asNavFor: '.fullnews__gallery-nav',
              centerMode: true,
              nextArrow: $('.nav-forward__img'),
              prevArrow: $('.nav-back__img')
            });
          });

          $(document).ready(function() {
            $('.fullnews__gallery-nav').slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              asNavFor: '.fullnews__gallery-main',
              dots: false,
              focusOnSelect: true,
              centerMode: true,
              infinite: true,
              nextArrow: $('.nav-forward__img'),
              prevArrow: $('.nav-back__img')
            });
          });

          //video desc
          $(document).ready(function() {
            $('.product-desc__video-container').slick({
              prevArrow: $(".arrow-left_desc"),
              nextArrow: $(".arrow-right_desc")
            });
          });

          //intro slider
          $(document).ready(function() {

            // $('.intro-slider__list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            //   remove_first_blur_img()
            // });
            $('.intro-slider__list').slick({
              prevArrow: $(".intro-arrow__left"),
              nextArrow: $(".intro-arrow__right"),
              speed: 1000,
              fade: true,
              arrows: false,
            });
          });


          //Denys Vol - START

          $(document).ready(function() {


            var active_slide = $(".intro-slider__list .slick-active")
            var blur_src_first_slide = active_slide.find('img.back').data('blur');
            console.log(blur_src_first_slide);
            active_slide.find('.rentgen_item').prepend('<div class="blur_image"><img src="' + blur_src_first_slide + '"/></div>');


            function slide_show_1(offset_right, rotate_deg_start, rotate_deg_end) {
              var w_w = $(window).width();
              rotate_deg_start = rotate_deg_start * 360;
              rotate_deg_end = rotate_deg_end * 360;
              var loupe_act = $('.intro-slider__list .slick-active .rentgen_item_loupe')
              var loupe_act_front = $('.intro-slider__list .slick-active .rentgen_item_loupe img.front')
              var wheel_act = $('.intro-slider__list .slick-active .rentgen_item_loupe img.image_wheel')

              $('.intro-slider__list .slick-slide').removeClass('wheel');
              $('.intro-slider__list .slick-active').addClass('wheel_interval');

              function p_w(offset_right) {
                return w_w * offset_right / 100
              }

              loupe_act.css({
                'transform': 'translateX(' + -w_w + 'px)',
                'transition': 'all 0s ease'
              });

              loupe_act_front.css({
                'transform': 'translateX(' + w_w + 'px)',
                'transition': 'all 0s ease'
              });
              wheel_act.css({
                'transform': 'rotate(' + rotate_deg_start + 'deg)',
                'transition': 'all 0s ease'
              });


              setTimeout(function() {
                loupe_act.css({
                  'transform': 'translateX(' + p_w(offset_right) + 'px)',
                  'transition': 'all 1s ease'
                });

                loupe_act_front.css({
                  'transform': 'translateX(' + p_w(-offset_right) + 'px)',
                  'transition': 'all 1s ease'
                });
                wheel_act.css({
                  'transform': 'rotate(' + rotate_deg_end + 'deg)',
                  'transition': 'all 1s ease'
                });
              }, 200)
            }

            function slide_show_2(offset_right, rotate_deg_end) {
              var w_w = $(window).width();
              rotate_deg_end = rotate_deg_end * 360;
              var loupe_act = $('.intro-slider__list .slick-active .rentgen_item_loupe')
              var loupe_act_front = $('.intro-slider__list .slick-active .rentgen_item_loupe img.front')
              var wheel_act = $('.intro-slider__list .slick-active .rentgen_item_loupe  img.image_wheel')

              $('.intro-slider__list .slick-slide').removeClass('wheel_interval');
              $('.intro-slider__list .slick-active').addClass('wheel');

              function p_w(offset_right) {
                return w_w * offset_right / 100
              }

              loupe_act.css({
                'transform': 'translateX(' + p_w(offset_right) + 'px)',
                'transition': 'all .5s ease'
              });

              loupe_act_front.css({
                'transform': 'translateX(' + p_w(-offset_right) + 'px)',
                'transition': 'all .5s ease'
              });
              wheel_act.css({
                'transform': 'rotate(' + rotate_deg_end + 'deg)',
                'transition': 'all .5s ease'
              });
            }

            var remove_first_blur_img = function() {
              setTimeout(function() {
                $('.intro-slider__list').find('img.back[data-blur]').attr('src', blur_src_first_slide);
                $('.intro-slider__list .blur_image').remove();
              }, 2500)
            }



            setTimeout(function() {
              $('body').addClass('show');
            }, 1000);
            setTimeout(function() {
              slide_show_1(11, 0.5, 2);
            }, 2000)
            setTimeout(function() {
              active_slide.find('.blur_image').addClass('show')
            }, 1000)

            // $(window).resize(function() {
            //   slide_show_1(11, 0.5, 2);
            // });



            var clickNumber = 0;
            var lastClickTime = 0;
            var slick_Intro = $('.intro-slider__list');

            function slide_nav_next(nav_cl, delay) {
              $(nav_cl).click(function() {
                $('.rentgen_item').addClass('blur')
                var seconds = new Date().getTime() / (delay - 1400);
                if ((seconds - lastClickTime) > 2) {
                  slide_show_2(66, 2.5);
                  setTimeout(function() {
                    slick_Intro.slick('slickNext');
                    remove_first_blur_img()
                    setTimeout(function() {
                      slide_show_1(11, 0.5, 2);
                    }, 0)
                  }, delay - 1700)
                  clickNumber++;
                  lastClickTime = seconds;
                }
              });
            }

            function slide_nav_prev(nav_cl, delay) {
              $(nav_cl).click(function() {
                $('.rentgen_item').addClass('blur')
                var seconds = new Date().getTime() / (delay - 1400);
                if ((seconds - lastClickTime) > 2) {
                  slide_show_2(66, 2.5);
                  setTimeout(function() {
                    slick_Intro.slick('slickPrev');
                    remove_first_blur_img()
                    setTimeout(function() {
                      slide_show_1(11, 0.5, 2);
                    }, 0)
                  }, delay - 1700)
                  clickNumber++;
                  lastClickTime = seconds;
                }
              });
            }

            setTimeout(function() {
              slide_nav_next('.intro-arrow__right', 2500)
              slide_nav_prev('.intro-arrow__left', 2500)
            }, 2500)
            //slider в шапке - END


          });
          //Denys Vol - END

          $(document).ready(function() {
            $('.review-card__wrap').slick({
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 3,
              variableWidth: true,
              infinite: true,
              speed: 600,
              prevArrow: $('.review__prev'),
              nextArrow: $('.review__next')
            });
          });

          $('.review-card__wrap').on('click', '.slick-slide', function(e) {
            e.stopPropagation();
            var index = $(this).data("slick-index");

            if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
              $('.slick-slider').slick('slickGoTo', index);
            }
          });

          $('.review-card__wrap').on('init', function(event, slick) {
            var slider = '.widget.review [data-slick-index=0]';
            $('.widget.review .review-background').css("background-image", $(slider).css("background-image"));
          });

          $('.review-card__wrap').on('afterChange', function(event, slick, currentSlide) {
            var slider = '.widget.review [data-slick-index=' + currentSlide + ']';
            $('.widget.review .review-background').css("background-image", $(slider).css("background-image"));
          });

          $(document).ready(function() {
            $('.recommended__list').slick({
              slidesToShow: 2,
              arrows: true,
              variableWidth: true,
              infinite: true,
              /* centerPadding: '50px', */
              speed: 600,
              prevArrow: $(".recommended__arrow_left"),
              nextArrow: $(".recommended__arrow_right"),
              responsive: [{
                breakpoint: 1160,
                settings: {
                  slidesToShow: 1,
                  centerMode: true
                }
              }]
            });
          });
        },

        "popups": function() {

          $(document).ready(function() {
            $('.popup').magnificPopup({
              type: 'inline',

              fixedContentPos: false,
              fixedBgPos: true,

              overflowY: 'auto',

              closeBtnInside: true,
              preloader: false,

              midClick: true,
              removalDelay: 300,
              mainClass: 'my-mfp-zoom-in',
            });

            $('.youtube-popup').magnificPopup({
              type: 'inline',

              fixedContentPos: false,
              fixedBgPos: true,

              overflowY: 'auto',

              closeBtnInside: true,
              preloader: false,

              midClick: true,
              removalDelay: 300,
              mainClass: 'my-mfp-zoom-in',
              callbacks: {
                open: function() {
                  $.magnificPopup.instance.content.find('img').trigger('click');
                },
              },
            });

            $('.warn-popup').magnificPopup({
              type: 'inline',

              fixedContentPos: false,
              fixedBgPos: true,

              overflowY: 'auto',

              closeBtnInside: true,
              preloader: false,

              midClick: true,
              removalDelay: 300,
              mainClass: 'my-mfp-zoom-in',
              callbacks: {
                afterClose: function() {
                  $(".product-options__item_types").trigger("click")
                  $(".product-options__item_types").addClass('product-options__item-selected')
                  $('html, body').stop().animate({
                    scrollTop: $("#tabs").offset().top
                  }, 1000);
                }
              }
            });

            $('.locate-no').magnificPopup({
              type: 'inline',

              fixedContentPos: false,
              fixedBgPos: true,

              overflowY: 'auto',

              closeBtnInside: true,
              preloader: false,

              midClick: true,
              removalDelay: 300,
              mainClass: 'my-mfp-zoom-in',
              callbacks: {
                open: function() {
                  $('.locate-no').addClass("locate-no_active")
                },
                afterClose: function() {
                  $('.locate-no').removeClass("locate-no_active")
                }
              }
            });


            /* $(".product-contacts-info__location-button-text").click(function() {
              $.magnificPopup.close();
            })
            $('.product-forms__warning').find(".mfp-close").click(function() {
              $('.mfp-close').trigger('click');
            });
            $(".product-forms__warning-button").click(function() {
              $(".product-options__item_dealers").attr("data-tab-id", "contacts");
              $(".product-contacts").css("display", "flex")
            }); */

            if ($('#status-messages').length) {
              $.magnificPopup.open({
                items: {
                  src: '#status-messages',
                  type: 'inline'
                }
              });
            }
            $('form#order-form').submit(function() {
              $.magnificPopup.open({
                items: {
                  src: '#wait-popup',
                  type: 'inline'
                }
              });
            });
          });
        },
        "productGallery": function() {
          $(".product-previews__item").click(function() {
            $(".product-previews__item").removeClass('product-previews__item_active');
            $(this).addClass('product-previews__item_active');
            var image = $(".product-previews__item_active > .product-previews__img").attr("src");
            $(".product-hero__img").attr("src", image);
            $(".product-hero__picture").css("display", "flex");
          });
        },

        "scrollbars": function() {

          $(window).on("load", function() {
            $(".product-types__list").mCustomScrollbar({
              setTop: 0,
            });
          });

          $(window).on("load", function() {
            $(".section.compare .catalog_modal").mCustomScrollbar({
              setTop: 0,
            });
          });

          $(".product-types__list").mCustomScrollbar({
            theme: "nitto",
            setTop: 50,
            mouseWheel: {
              scrollAmount: 200
            },
            snapAmount: 200,
            callbacks: {
              onScroll: function() {
                $(".mCS-nitto.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar_onDrag").css("background-color", "#eb373b").css("opacity", "1");
              }
            }
          });

          $(window).on("load", function() {
            $(".product-feedback__wrapper").mCustomScrollbar({
              setTop: 0,
            });
          });

          $(".product-feedback__wrapper").mCustomScrollbar({
            theme: "nitto",
            mouseWheel: {
              scrollAmount: 317
            },
            snapAmount: 317,
            callbacks: {
              onScroll: function() {
                $(".mCS-nitto.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar_onDrag").css("background-color", "#8b8b8b").css("opacity", "1");
              }
            }
          });

          $(window).on("load", function() {
            $(".product-contacts-info__location-list").mCustomScrollbar({
              setTop: 0
            });
          });

          $(".product-contacts-info__location-list").mCustomScrollbar({
            theme: "nitto",
            callbacks: {
              onScroll: function() {
                $(".mCS-nitto.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar_onDrag").css("background-color", "#8b8b8b").css("opacity", "1");
              }
            }
          });

          $(window).on("load", function() {
            $(".filter__auto").find(".custom-select-panel").mCustomScrollbar({
              setTop: 0
            });
          });

          $(".filter__auto").find(".custom-select-panel").mCustomScrollbar({
            theme: "nitto",
            callbacks: {
              onScroll: function() {
                $(".mCS-nitto.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar_onDrag").css("background-color", "#eb373b").css("opacity", "1");
              }
            }
          });

          $(window).on("load", function() {
            $(".filter__size").find(".custom-select-panel").mCustomScrollbar({
              setTop: 0
            });
          });

          $(".filter__size").find(".custom-select-panel").mCustomScrollbar({
            theme: "nitto",
            callbacks: {
              onScroll: function() {
                $(".mCS-nitto.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar_onDrag").css("background-color", "#eb373b").css("opacity", "1");
              }
            }
          });

          $(window).on("load", function() {
            $(".catalog-filter-selects_param").find(".custom-select-panel").mCustomScrollbar({
              setTop: 0
            });
          });

          $(".catalog-filter-selects_param").find(".custom-select-panel").mCustomScrollbar({
            theme: "nitto",
            callbacks: {
              onScroll: function() {
                $(".mCS-nitto.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar_onDrag").css("background-color", "#eb373b").css("opacity", "1");
              }
            }
          });

          $(window).on("load", function() {
            $(".banner-info__text").mCustomScrollbar({
              setTop: 0
            });
          });
          $(".banner-info__text").mCustomScrollbar({
            theme: "nitto",
            mouseWheel: {
              scrollAmount: 48
            },
            snapAmount: 24,
            callbacks: {
              onScroll: function() {
                $(".mCS-nitto.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar_onDrag").css("background-color", "#eb373b").css("opacity", "1");
              }
            }
          });
          $(".product-previews").mCustomScrollbar({
            theme: "nitto",
            mouseWheel: {
              scrollAmount: 110
            },
            snapAmount: 55,
            callbacks: {
              onScroll: function() {
                $(".mCS-nitto.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar_onDrag").css("background-color", "#eb373b").css("opacity", "1");
              }
            }
          });
        },

        "fixedHeader": function() {
          function fixedHeader() {
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var navbarHeight = $('.js-header').outerHeight();

            $(window).scroll(function(event) {
              didScroll = true;
            });

            setInterval(function() {
              if (didScroll) {
                hasScrolled();
                didScroll = false;
              }
            }, 250);

            function hasScrolled() {
              var st = $(this).scrollTop();

              if (Math.abs(lastScrollTop - st) <= delta)
                return;

              if (st > lastScrollTop && st > navbarHeight) {
                $('.js-header').removeClass('s-header_down').addClass('s-header_up');
              } else if (st > navbarHeight) {
                if (st + $(window).height() < $(document).height()) {
                  $('.js-header').removeClass('s-header_up').addClass('s-header_down');
                }
              } else {
                $('.js-header').removeClass('s-header_down s-header_up');

              }

              lastScrollTop = st;
            }
          }
          $(document).ready(function() {
            fixedHeader();
          })
        },

        "clickFilterMain": function() {
          $(".filter__field_tglr").click(function() {
            var field = $(".filter__field_tglr");
            if (!$(this).hasClass("filter__field_tglr_active")) {
              $(field).removeClass("filter__field_tglr_active");
              $(this).addClass("filter__field_tglr_active")
              if ($(this).hasClass("filter__field_tglr_size")) {
                $(".filter__size").addClass("filter_active")
                $(".filter__auto").removeClass("filter_active")
              } else {
                $(".filter__size").removeClass("filter_active")
                $(".filter__auto").addClass("filter_active")
              }
            }
          })
        },
        "clickFilterInner": function() {
          $(".catalog-filter-type__item input").click(function() {
            $(".catalog-filter-selects").toggleClass('catalog-filter-selects_active');
          })
        },
        "filterActivationMain": function() {
          var attr = $(".filter__field_mark").find(".is-selected").attr("data-value")
          var attr2 = $(".filter__field_model").find(".is-selected").attr("data-value")
          $(".filter__field_mark").find(".custom-select-option").click(function() {
            if (typeof attr !== typeof undefined && attr !== false) {
              changeAttrModel()
            }
          })

          $(".filter__field_model").find(".custom-select-option").click(function() {
            if (typeof attr !== typeof undefined && attr !== false) {
              changeAttrGen()
            }
          })

          function changeAttrModel() {
            $(".filter__field_model").addClass("filter__field_model_active")
            $(".filter__field_model").removeClass("filter__field_inactive")
          }

          function changeAttrGen() {
            $(".filter__field_gen").addClass("filter__field_gen_active")
            $(".filter__field_gen").removeClass("filter__field_inactive")
          }

        },
        "filterActivationInner": function() {
          var attr = $(".catalog-filter__field_mark").find(".is-selected").attr("data-value")
          var attr2 = $(".catalog-filter__field_model").find(".is-selected").attr("data-value")
          $(".catalog-filter__field_mark").find(".custom-select-option").click(function() {
            if (typeof attr !== typeof undefined && attr !== false) {
              changeAttrModel()
            }
          })

          $(".catalog-filter__field_model").find(".custom-select-option").click(function() {
            if (typeof attr !== typeof undefined && attr !== false) {
              changeAttrGen()
            }
          })

          function changeAttrModel() {
            $(".catalog-filter__field_model").addClass("catalog-filter__field_model_active")
            $(".catalog-filter__field_model").removeClass("catalog-filter__field_inactive")
          }

          function changeAttrGen() {
            $(".catalog-filter__field_gen").addClass("catalog-filter__field_gen_active")
            $(".catalog-filter__field_gen").removeClass("catalog-filter__field_inactive")
          }
        },
        "locateChoice": function() {
          $(".locate__desc-text").click(function() {
            $(".locate__desc-wrap").addClass("locate__desc-wrap_inactive")
            $(".locate__choice").addClass("locate__choice_activated")
            var text = $(this).text();
            $(".locate__desc").find(".custom-select-opener > span").text(text)
            window.setTimeout(function() {
              $(".locate__psa-text").text("Спасибо, Ваш город учтён!")
              $(".locate__psa-text").addClass("locate__psa-text_chosen")
            }, 600);
          })
          $(".locate__desc").find(".custom-select-panel > .custom-select-option").click(function() {
            $(".locate__desc-wrap").addClass("locate__desc-wrap_inactive")
            $(".locate__choice").addClass("locate__choice_activated")
            var text = $(this).text();
            $(".locate__desc").find(".custom-select-opener > span").text(text)
            $(".locate__desc-wrap").delay(650).hide()
            window.setTimeout(function() {
              $(".locate__psa-text").text("Спасибо, Ваш город учтён!")
              $(".locate__psa-text").addClass("locate__psa-text_chosen")
            }, 100);
          })
        },
        'jsTwentytwenty': function() {

            //Фото до/после - START
            $(document).ready(function() {
                  var l
                  var width
                  var w_w
                  var season_width
                  var val

                  function pos_less() {
                    $('#handle').css('left', season_width)
                    $('.images-compare-after').css('width', w_w - season_width)
                    $('.images-compare-before').css('width', season_width)

                  }

                  function pos_more() {
                    $('#handle').css('left', w_w - season_width)
                    $('.images-compare-after').css('width', season_width)
                    $('.images-compare-before').css('width', w_w - season_width)

                    $('.images-compare-before .catalog_modal ').mCustomScrollbar('scrollTo', 'top');
                    $('.images-compare-after .catalog_modal ').mCustomScrollbar('scrollTo', 'top');
                  }

                  function pos_drag() {
                    $('#handle').css('left', l);
                    $('.images-compare-after').css('width', width - l);
                    $('.images-compare-before').css('width', l);
                  }

                  function pos_transition(time) {
                    $('.images-compare-before .catalog_modal ').mCustomScrollbar('scrollTo', 'top');
                    $('.images-compare-after .catalog_modal ').mCustomScrollbar('scrollTo', 'top');
                    $('#handle').css({
                      'transition': 'all ' + time + 's ease'
                    });
                    $('.images-compare-after').css({
                      'transition': 'all ' + time + 's ease',
                    });
                    $('.images-compare-before').css({
                      'transition': 'all ' + time + 's ease',
                    });
                  }


                  var container = $('#handle')
                  container.on("movestart", function(e) {
                    var catalog_show_1 = $('.images-compare-before').attr('data-catalog');
                    var catalog_show_2 = $('.images-compare-after').attr('data-catalog');
                    if ((catalog_show_1 !== 'true') && (catalog_show_2 !== 'true')) {
                      container.addClass("active");
                      container.css('left', e.pageX)
                    }
                  });
                  container.on("moveend", function(e) {
                    l = e.pageX;
                    width = $('.compare').width()
                    w_w = $(window).width();
                    season_width = $('.img-compare .season_wrap').width()
                    val = l * 100 / w_w;
                    var pos_r = w_w - $('#handle').offset().left - $('#handle').width() / 2 - 5

                    var catalog_show_1 = $('.images-compare-before').attr('data-catalog');
                    var catalog_show_2 = $('.images-compare-after').attr('data-catalog');
                    if ((catalog_show_1 !== 'true') && (catalog_show_2 !== 'true')) {
                      if (val <= 25) {
                        pos_transition(.5)
                        pos_less();

                      } else if (val >= 75) {
                        pos_transition(.5)
                        pos_more();

                      }

                      if (val <= 25) {
                        $('.images-compare-before .season_wrap').addClass('show');
                        $('.images-compare-after .season_wrap').removeClass('show')

                        $('.images-compare-before').removeClass('show_wheel');
                        $('.images-compare-after').removeClass('show_wheel');
                        $('.images-compare-after').addClass('show_wheel');
                        $('.img-compare').attr('data-direct', 'left');
                      } else {
                        $('.img-compare').attr('data-direct', 'center');
                      }
                      if (val >= 75) {

                        $('.images-compare-after .season_wrap').addClass('show');
                        $('.images-compare-before .season_wrap').removeClass('show');

                        $('.images-compare-before').removeClass('show_wheel');
                        $('.images-compare-after').removeClass('show_wheel');
                        $('.images-compare-before').addClass('show_wheel');
                        $('.img-compare').attr('data-direct', 'right');
                      }
                    }
                  });

                  container.on("move", function(e) {
                    l = e.pageX;
                    width = $('.compare').width()
                    w_w = $(window).width();
                    if (w_w >= 1160) {
                      w_w = w_w
                    } else {
                      w_w = 1160
                    }
                    season_width = $('.img-compare .season_wrap').width()
                    val = l * 100 / w_w;

                    var catalog_show_1 = $('.images-compare-before').attr('data-catalog');
                    var catalog_show_2 = $('.images-compare-after').attr('data-catalog');

                    if ((catalog_show_1 !== 'true') && (catalog_show_2 !== 'true')) {
                      if (val <= 25) {
                        $('.images-compare-after').attr('data-catalog', 'true');
                        $('.images-compare-before').attr('data-catalog', 'false');
                        $('.images-compare-after .season_wrap').removeClass('show');
                        $('.images-compare-before .season_wrap').addClass('show');
                        pos_less();
                        pos_transition(.5)

                        $('.images-compare-before .season_wrap').addClass('show');
                        $('.images-compare-after').addClass('show_wheel');

                      } else {
                        $('.images-compare-before .season_wrap').removeClass('show');
                        $('.images-compare-after').removeClass('show_wheel');

                      }

                      if (val >= 75) {
                        $('.images-compare-before').attr('data-catalog', 'true');
                        $('.images-compare-after').attr('data-catalog', 'false');
                        $('.images-compare-before .season_wrap').removeClass('show');
                        $('.images-compare-after .season_wrap').addClass('show');
                        $('.images-compare-before').scrollTop(0);
                        pos_more();
                        pos_transition(.5)

                        $('.images-compare-after .season_wrap').addClass('show');
                        $('.images-compare-before').addClass('show_wheel');
                      } else {
                        $('.images-compare-after .season_wrap').removeClass('show');
                        $('.images-compare-before').removeClass('show_wheel');
                      }

                      if (l <= season_width) {
                        pos_less();
                        pos_transition(.5)
                      } else if (l >= w_w - season_width) {
                        pos_more();
                        pos_transition(.5)
                      } else {
                        pos_drag();
                        pos_transition(0)
                      }
                    } else {
                      if (e.distX > 0) {
                        $('.images-compare-before').attr('data-catalog', 'true');
                        $('.images-compare-after').attr('data-catalog', 'false');
                        $('.images-compare-before .season_wrap').removeClass('show');
                        $('.images-compare-after .season_wrap').addClass('show');
                        $('.images-compare-before').scrollTop(0);
                        pos_more();
                        pos_transition(.5)
                      } else if (e.distX < 0) {
                        $('.images-compare-after').attr('data-catalog', 'true');
                        $('.images-compare-before').attr('data-catalog', 'false');
                        $('.images-compare-after .season_wrap').removeClass('show');
                        $('.images-compare-before .season_wrap').addClass('show');
                        pos_less();
                        pos_transition(.5)
                      }
                    }

                  });


                  $('.images-compare-after .season_wrap').click(function() {
                    var catalog_show_1 = $('.images-compare-before').attr('data-catalog');
                    var catalog_show_2 = $('.images-compare-after').attr('data-catalog');
                    if ((catalog_show_1 !== 'true') && (catalog_show_2 !== 'true')) {

                    } else {
                      $('.images-compare-after').attr('data-catalog', 'true');
                      $('.images-compare-before').attr('data-catalog', 'false');
                      $('.images-compare-after .season_wrap').removeClass('show');
                      $('.images-compare-before .season_wrap').addClass('show');
                      $('.images-compare-after').scrollTop(0);
                      pos_less();
                      pos_transition(.5)
                    }
                  });
                  $('.images-compare-before .season_wrap').click(function() {
                    var catalog_show_1 = $('.images-compare-before').attr('data-catalog');
                    var catalog_show_2 = $('.images-compare-after').attr('data-catalog');
                    if ((catalog_show_1 !== 'true') && (catalog_show_2 !== 'true')) {

                    } else {
                      $('.images-compare-before').attr('data-catalog', 'true');
                      $('.images-compare-after').attr('data-catalog', 'false');
                      $('.images-compare-before .season_wrap').removeClass('show');
                      $('.images-compare-after .season_wrap').addClass('show');
                      $('.images-compare-before').scrollTop(0);
                      pos_more();
                      pos_transition(.5)
                    }
                  });

                  //Фото до/после - END

                  //Маска для колеса
                  function mask_wheel1(parent_div) {
                    var w_w = $(window).width();
                    if (w_w >= 1160) {
                      w_w = w_w
                    } else {
                      w_w = 1160
                    }
                    var w_h = $(window).height();
                    var parent = $('' + parent_div + '');
                    var bg_img = parent.find('img.compr').attr('src');
                    var w = parent.find('.rotate img').width();
                    var h = parent.find('.rotate img').height();
                    var pos_left_wheel_center = $('.images-compare-before .wheel').offset().left + $('.images-compare-before .wheel').width() / 2

                    var pos_left = parent.find('.rotate img').offset().left - 20;
                    var width_center_wheel = $('.img-compare .images-compare-before .wheel').width();
                    var width_wheel_bg = $('.img-compare .images-compare-before .wheel_bg').width();
                    // $('.img-compare .images-compare-before .wheel').css('left', w_w / 2 - width_center_wheel / 2 + 'px');
                    // $('.img-compare .images-compare-before .wheel_bg').css('left', w_w / 2 - width_center_wheel / 2 - width_wheel_bg / 2 + 'px');
                    parent.find('.mask_wheel').remove();
                    parent.find('.compare-wrapper').append('<div class="mask_wheel"><img src="' + bg_img + '"></div>');
                    parent.find('.mask_wheel').width(w + 80);
                    parent.find('.mask_wheel').height(w_h);


                    //
                    parent.find('.mask_wheel').css('left', pos_left_wheel_center - w + 'px');
                    parent.find('.mask_wheel img').css('left', (pos_left_wheel_center - w) * -1 + 'px');

                    $('.img-compare .images-compare-before .wheel').css('left', w_w / 2 - width_center_wheel / 2 + 'px');
                    $('.img-compare .images-compare-before .wheel_bg').css('left', w_w / 2 - width_center_wheel / 2 - width_wheel_bg / 2 - 50 + 'px');
                  }

                  function mask_wheel2(parent_div) {
                    var w_w = $(window).width();
                    var w_h = $(window).height();
                    if (w_w >= 1160) {
                      w_w = w_w
                    } else {
                      w_w = 1160
                    }
                    var parent = $('' + parent_div + '');
                    var bg_img = parent.find('img.compr').attr('src');
                    var w = parent.find('.rotate img').width();
                    var h = parent.find('.rotate img').height();
                    var pos_left = w_w - parent.find('.rotate img').offset().left - 100 - w;
                    var width_center_wheel = $('.img-compare .images-compare-after .wheel').width();
                    var pos_right_wheel_center = $('.images-compare-after .wheel').offset().left + $('.images-compare-after .wheel').width() / 2
                    var width_wheel_bg = $('.img-compare .images-compare-after .wheel_bg').width();

                    // $('.img-compare .images-compare-before .wheel_bg').css('left', w_w / 2 - width_center_wheel / 2 - width_wheel_bg / 2 - width_wheel_bg / 2 + 'px');

                    $('.img-compare .images-compare-after .wheel').css('right', w_w / 2 - width_center_wheel / 2 + 'px');
                    $('.img-compare .images-compare-after .wheel_bg').css('right', w_w / 2 - width_center_wheel / 2 - width_wheel_bg / 2 + 'px');

                    parent.find('.mask_wheel').width(w + 80);
                    parent.find('.mask_wheel').height(w_h);

                    parent.find('.mask_wheel').css('right', pos_right_wheel_center - w + 'px');
                    parent.find('.mask_wheel img').css('right', (pos_right_wheel_center - w) * -1 + 'px');
                  }

                  var bg_img1 = $('.images-compare-before').find('img.compr').attr('src');
                  var bg_img2 = $('.images-compare-after').find('img.compr').attr('src');

                  $('.images-compare-before').find('.compare-wrapper').append('<div class="mask_wheel"><img src="' + bg_img1 + '"></div>');
                  $('.images-compare-after').find('.compare-wrapper').append('<div class="mask_wheel"><img src="' + bg_img2 + '"></div>');
                  mask_wheel1('.images-compare-before');
                  mask_wheel2('.images-compare-after');
                  //Маска для колеса


                  function compareDocLoad() {
                    var width = $(window).width();
                    if (width >= 1160) {
                      width = width
                    } else {
                      width = 1160
                    }
                    var time = .35
                    setTimeout(function() {
                      var handle = $('#handle').offset().left + $('#handle').width() / 2
                      $('.images-compare-before').css('width', handle);
                      $('.images-compare-after').css('width', width - handle - 3);
                    }, 300)

                    $('#handle').css({
                      'transition': 'all ' + time + 's ease'
                    });
                    $('.images-compare-after').css({
                      'transition': 'all ' + time + 's ease',
                    });
                    $('.images-compare-before').css({
                      'transition': 'all ' + time + 's ease',
                    });
                  }

                  function seasonCompareReset(time) {
                    var width = $(window).width();
                    $('section.compare .img-compare').attr('data-direct', 'center');
                    $('#handle').css('left', width / 2 + 'px');
                    $('.images-compare-after').css('width', width / 2 + 'px');
                    $('.images-compare-before').css('width', width / 2 + 'px');

                    $('#handle').css({
                      'transition': 'all ' + time + 's ease'
                    });
                    $('.images-compare-after').css({
                      'transition': 'all ' + time + 's ease',
                    });
                    $('.images-compare-before').css({
                      'transition': 'all ' + time + 's ease',
                    });
                    $('.images-compare-before .season_wrap').removeClass('show');
                    $('.images-compare-after .season_wrap').removeClass('show');
                  }
                  seasonCompareReset(0);


                  $(window).resize(function() {
                    mask_wheel1('.images-compare-before');
                    mask_wheel2('.images-compare-after');
                    compareDocLoad();
                  });



                  //Catalog-Modal-START
                  function catalog_modal(period_class_div) {

                    var w_h = $(window).height(),
                      parent_sect = $('.section-season');

                    $('.catalog_modal' + period_class_div + '').remove().appendTo('.img-compare ' + period_class_div + '');
                    $('section.compare ' + period_class_div + ' .images-compare-label').click(function() {
                          $(window).resize(function() {
                                mask_wheel1('.images-compare-before');
                                if ($('header').hasClass('s-header_up')) {
                                  $('header').addClass('s-header_down');
                                }
                                $('body').addClass('catalog_modal');
                                $('#menu').fadeOut();
                                $(window).resize(function() {
                                  var dir = $('.img-compare').attr('data-direct');
                                  mask_wheel1('.images-compare-before');
                                  if (dir == "left") {
                                    console.log('left');
                                    $('section.compare ' + period_class_div + '').attr('data-catalog', 'true');
                                    $('section.compare ' + period_class_div + ' .compare-wrapper').addClass('blur');
                                    setTimeout(function() {
                                      $.fn.fullpage.setMouseWheelScrolling(false);
                                      $.fn.fullpage.setAllowScrolling(false);
                                    }, 100)
                                    mask_wheel2('.images-compare-after');
                                  } else if (dir == "center") {
                                    width = $('.compare').width();
                                    w_w = $(window).width();
                                    season_width = $('.img-compare .season_wrap').width();
                                    $('section.compare ' + period_class_div + '').attr('data-catalog', 'true');
                                    $('section.compare ' + period_class_div + ' .compare-wrapper').addClass('blur');
                                    if (period_class_div == '.winter') {
                                      $('.images-compare-before .season_wrap').addClass('show');
                                      $('.images-compare-after .season_wrap').removeClass('show');
                                      pos_transition(.5)
                                      pos_less();

                                    } else {
                                      $('.images-compare-before .season_wrap').removeClass('show');
                                      $('.images-compare-after .season_wrap').addClass('show');
                                      pos_transition(.5)
                                      pos_more();
                                    }
                                    setTimeout(function() {
                                      $.fn.fullpage.setMouseWheelScrolling(false);
                                      $.fn.fullpage.setAllowScrolling(false);
                                    }, 100)
                                    //Catalog-Modal-START
                                  } else if (dir == "right") {
                                    console.log('right');
                                    $('section.compare ' + period_class_div + '').attr('data-catalog', 'true');
                                    $('section.compare ' + period_class_div + ' .compare-wrapper').addClass('blur');
                                    setTimeout(function() {
                                      $.fn.fullpage.setMouseWheelScrolling(false);
                                      $.fn.fullpage.setAllowScrolling(false);
                                    }, 100)
                                  }
                                  var w_h = $(window).height(),
                                });
                                parent_sect = $('.section-season');
                                $('section.compare .catalog-window__close-wrap').click(function() {
                                  $('section.compare ' + period_class_div + '').attr('data-catalog', 'false');
                                  $('section.compare ' + period_class_div + ' .compare-wrapper').removeClass('blur');
                                  $.fn.fullpage.setMouseWheelScrolling(true);
                                  $.fn.fullpage.setAllowScrolling(true);
                                  $('#menu').fadeIn();
                                  $('.images-compare-before').attr('data-catalog', 'false');
                                  $('.images-compare-after').attr('data-catalog', 'false');
                                  if ($('header').hasClass('s-header_up')) {
                                    function seasonCompareReset(time) {
                                      var width = $(window).width();
                                    }
                                    $('section.compare .img-compare').attr('data-direct', 'center');
                                    $('#handle').css('left', width / 2 + 'px');
                                    $('.images-compare-after').css('width', width / 2 + 'px');
                                    $('.images-compare-before').css('width', width / 2 + 'px');
                                    $('section.compare ' + period_class_div + ' .compare-wrapper').addClass('blur');
                                    $('#handle').css({
                                      'transition': 'all ' + time + 's ease'
                                    });
                                    $('.images-compare-after').css({
                                      'transition': 'all ' + time + 's ease',
                                    });
                                    $('.images-compare-before').css({
                                      'transition': 'all ' + time + 's ease',
                                    });
                                    $('.images-compare-before .season_wrap').removeClass('show');
                                    $('.images-compare-after .season_wrap').removeClass('show');
                                  }
                                  setTimeout(function() {
                                    pos_transition(.5)
                                  }, 250)
                                  if (period_class_div == '.winter') {}
                                });
                                $('section.compare ' + period_class_div + ' .compare-wrapper').addClass('blur');
                                setTimeout(function() {

                                      catalog_modal('.summer');
                                      catalog_modal('.winter')

                                      //Catalog-Modal-END
                                      var ms_ie = false;
                                      var ua = window.navigator.userAgent;
                                      var old_ie = ua.indexOf('MSIE ');
                                      var new_ie = ua.indexOf('Trident/');

                                      setTimeout(function() {
                                        if ((old_ie > -1) || (new_ie > -1)) {
                                          $('.catalog_modal .hero, .catalog_modal .catalog-filter').addClass('browser_ie');
                                        }

                                        if (ms_ie) {
                                          $('.catalog_modal .hero, .catalog_modal .catalog-filter').addClass('browser_ie');
                                        }
                                      }, 100)
                                      $.fn.fullpage.setMouseWheelScrolling(false);
                                      //Фото до/после - END
                                    },
                                    "galleryMainSlider": function() {
                                      $('.gallery-main-slider').slick({
                                        infinite: false,
                                        arrows: false
                                      });
                                      $('.gallery-main-slider').mousewheel(function(e) {
                                        if (e.deltaY < 0) {
                                          if ($(this).slick('slickCurrentSlide') == $(this).find('.slick-slide').length - 1) {
                                            $.fn.fullpage.setAllowScrolling(false);
                                            $.fn.fullpage.setMouseWheelScrolling(true);
                                            $.fn.fullpage.setAllowScrolling(true);
                                            return
                                          }
                                          e.preventDefault();
                                          $(this).slick('slickNext');
                                        } else {
                                          if ($(this).slick('slickCurrentSlide') == 0) {
                                            $.fn.fullpage.setMouseWheelScrolling(true);
                                            $.fn.fullpage.setMouseWheelScrolling(true);
                                            $.fn.fullpage.setAllowScrolling(true);
                                            return
                                          }
                                          e.preventDefault();
                                          $(this).slick('slickPrev');
                                        }
                                      })
                                    },
                                    "fullPage": function() {
                                      $('.fp-menu__link').on('click', function() {
                                        $.fn.fullpage.setMouseWheelScrolling(true);
                                        $.fn.fullpage.setAllowScrolling(true);
                                      });
                                      $('.fullpage').fullpage({
                                          anchors: ['section-main', 'section-season', 'section-gallery', 'section-reviews'],
                                          menu: '.fp-menu__list',
                                          onLeave: function(index, nextIndex, direction) {
                                            var leavingSection = $(this);

                                            if (direction == 'down') {
                                              $('html').addClass('is-header-hide')
                                            } else {
                                              $('html').removeClass('is-header-hide')
                                            }
                                          },
                                          afterRender: function() {
                                            func.jsTwentytwenty();
                                          },
                                          afterLoad: function(anchorLink, index) {
                                            if (index == 3) {
                                              $.fn.fullpage.setMouseWheelScrolling(false);
                                              $.fn.fullpage.setAllowScrolling(false);
                                            }
                                          },
                                          onLeave: function(index, nextIndex, direction) {
                                            var leavingSection = $(this);
                                            // console.log(index);
                                            $.fn.fullpage.setAllowScrolling(true);
                                            $('#menu').fadeIn();
                                            $('.images-compare-after').attr('data-catalog', 'false');

                                            function seasonCompareReset(time) {
                                              var width = $(window).width();

                                              $('section.compare .img-compare').attr('data-direct', 'center');
                                              $('#handle').css('left', width / 2 + 'px');
                                              $('.images-compare-after').css('width', width / 2 + 'px');
                                              $('.images-compare-before').css('width', width / 2 + 'px');

                                              $('#handle').css({
                                                'transition': 'all ' + time + 's ease'
                                              });
                                              $('.images-compare-after').css({
                                                'transition': 'all ' + time + 's ease',
                                              });
                                              $('.images-compare-before').css({
                                                'transition': 'all ' + time + 's ease',
                                                $('.images-compare-after .season_wrap').removeClass('show');
                                                seasonCompareReset(.35);
                                              }, 1000)
                                            }
                                          },
                                          250) if (index == 2 && direction == 'up') {
                                          $(".s-header").removeClass("s-header_down")
                                          $(".s-header").removeClass("s-header_up")
                                          $(".s-header").addClass("s-header_first-section")
                                        } else if (index == 3 && direction == 'up') {
                                          $.fn.fullpage.setMouseWheelScrolling(false);
                                          $.fn.fullpage.setAllowScrolling(false);
                                          $(".scroll-bar").css("left", "0")
                                          $(".s-header").addClass("s-header_down")
                                          $(".s-header").removeClass("s-header_up")
                                        } else if (index == 4 && direction == 'up') {
                                          $(".s-header").addClass("s-header_down")
                                          $(".s-header").removeClass("s-header_up")
                                        } else if (index == 1 && direction == 'down') {
                                          $("#locate-dropdown").css("display", "none")
                                          $(".s-header").removeClass("s-header_down")
                                          $(".s-header").addClass("s-header_up")
                                        } else if (index == 2 && direction == 'down') {
                                          $.fn.fullpage.setMouseWheelScrolling(false);
                                          $.fn.fullpage.setAllowScrolling(false);
                                          $("#locate-dropdown").css("display", "none")
                                          $(".s-header").removeClass("s-header_down")
                                          $(".s-header").addClass("s-header_up")
                                        } else if (index == 3 && direction == 'down') {
                                          $("#locate-dropdown").css("display", "none")
                                          $(".scroll-bar").css("left", "0")
                                          $(".s-header").removeClass("s-header_down")
                                          $(".s-header").addClass("s-header_up")
                                        }
                                        var new_ie = ua.indexOf('Trident/');
                                      });
                                  },

                                  "snowFall": function() {
                                    var c = document.getElementById('canv');
                                    if (!c) {
                                      return;
                                      $.fn.fullpage.setAllowScrolling(true);
                                      $('.fullpage').fullpage({
                                        var $ = c.getContext("2d");
                                        var w = c.width = window.innerWidth,
                                          h = c.height = window.innerHeight;
                                        var width = $(window).width();
                                        Snowy();
                                      });

                                      function Snowy() {
                                        var snow, arr = [];
                                        var num = 600,
                                          tsc = 1,
                                          sp = 1;
                                        var sc = 1.3,
                                          t = 0,
                                          mv = 20,
                                          min = 1;
                                        for (var i = 0; i < num; ++i) {
                                          snow = new Flake();
                                          snow.y = Math.random() * (h + 50);
                                          snow.x = Math.random() * w;
                                          snow.t = Math.random() * (Math.PI * 2);
                                          snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
                                          snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
                                          snow.sp = snow.sp < min ? min : snow.sp;
                                          arr.push(snow);
                                        } else if (index == 3 && direction == 'down') {
                                          go();
                                          $(".s-header").addClass("s-header_up")

                                          function go() {
                                            window.requestAnimationFrame(go);
                                            $.clearRect(0, 0, w, h);
                                            /* $.fillStyle = 'hsla(242, 95%, 3%, 1)'; */
                                            $.fillRect(0, 0, w, h);
                                            $.fill();
                                            for (var i = 0; i < arr.length; ++i) {
                                              f = arr[i];
                                              f.t += .05;
                                              f.t = f.t >= Math.PI * 2 ? 0 : f.t;
                                              f.y += f.sp;
                                              f.x += Math.sin(f.t * tsc) * (f.sz * .3);
                                              if (f.y > h + 50) f.y = -10 - Math.random() * mv;
                                              if (f.x > w + mv) f.x = -mv;
                                              if (f.x < -mv) f.x = w + mv;
                                              f.draw();
                                            }
                                            f.x += Math.sin(f.t * tsc) * (f.sz * .3);
                                            if (f.x > w + mv) f.x = -mv;

                                            function Flake() {
                                              this.draw = function() {
                                                this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
                                                this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
                                                this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
                                                $.moveTo(this.x, this.y);
                                                $.fillStyle = this.g;
                                                $.beginPath();
                                                $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
                                                $.fill();
                                              }
                                              $.moveTo(this.x, this.y);
                                              $.fillStyle = this.g;
                                              /*________________________________________*/
                                              window.addEventListener('resize', function() {
                                                c.width = w = window.innerWidth;
                                                c.height = h = window.innerHeight;
                                              }, false);
                                            },
                                            window.addEventListener('resize', function() {
                                                  "changeIntroBg": function() {
                                                    $(".intro-arrow__right").click(function() {
                                                      $(".section-main__img").toggleClass("section-main__img_summer");
                                                      $(".section-main__img-back").toggleClass("section-main__img-back_summer");
                                                      $(".section-main__wheel").toggleClass("section-main__wheel_summer");
                                                    })
                                                    $(".intro-arrow__left").click(function() {
                                                      $(".section-main__img").toggleClass("section-main__img_summer");
                                                      $(".section-main__img-back").toggleClass("section-main__img-back_summer");
                                                      $(".section-main__wheel").toggleClass("section-main__wheel_summer");
                                                    })
                                                  },
                                                  "putCityInSearch": function() {
                                                    $(".locate__desc-text").click(function() {
                                                      var text = $(".locate__desc-text").text();
                                                      $(".locate__desc-search").html(text);
                                                    })
                                                  },
                                                  "reviewBg": function() {
                                                    if ($(".slick-slide").hasClass("review-card-3")) {
                                                      $(".review-card-bg").css("display", "block");
                                                    } else {},
                                                    "inputMask": function() {
                                                      useFullStars: true,
                                                      $(".order__input_phone").inputmask({
                                                        "mask": "+7 (9##)###-##-##",
                                                        "cc": "RU",
                                                        "cd": "Russia",
                                                        "type": "mobile"
                                                      }); //specifying options
                                                    });
                                                },
                                                "filterChange": function() {
                                                  if (!$(".filter__field_tglr").hasClass("filter__field_tglr_active")) {
                                                    $(".filter__field_tglr").removeClass("filter__field_tglr_active")
                                                    $(this).addClass("filter__field_tglr_active")
                                                  }
                                                },
                                                "gifPlaying": function() {
                                                  $(".gallery-item__gif").hover(
                                                    function() {
                                                      var gifURL = $(this).data('gallery-item-gif');
                                                      if (gifURL.length) {
                                                        $(this).css("background-image", "url('" + gifURL + "')");
                                                        $(this).siblings(".gallery-item__play").css("display", "none");
                                                      }
                                                    },
                                                    function() {
                                                      var imgURL = $(this).data('gallery-item-img');
                                                      if (imgURL.length) {
                                                        $(this).css("background-image", "url('" + imgURL + "')");
                                                        $(this).siblings(".gallery-item__play").css("display", "block");
                                                      }
                                                    });
                                                },
                                                "reviewPictures": function() {
                                                  $(".review-card-1").click(function() {
                                                        $(".review-background").addClass("review-background_1")
                                                        $(".review-background").removeClass("review-background_2")
                                                        $(".review-background").removeClass("review-background_3")
                                                        $(".tyre-choice-item__caption_summer").click(function() {
                                                              $(".review-card-2").click(function() {
                                                                $(".review-background").addClass("review-background_2")
                                                                $(".review-background").removeClass("review-background_1")
                                                                $(".review-background").removeClass("review-background_3")
                                                              })
                                                              $(".review-card-3").click(function() {
                                                                $(".review-background").addClass("review-background_3")
                                                                $(".review-background").removeClass("review-background_1")
                                                                $(".review-background").removeClass("review-background_2")
                                                              })
                                                            },
                                                            "clumpText": function() {
                                                              $(document).ready(function() {
                                                                    $(".preview__wrapper p").fadeIn(10)
                                                                    $(".preview__wrapper p").trunk8({
                                                                      lines: 4
                                                                    });
                                                                    accessibility: false,
                                                                      $(document).ready(function() {
                                                                        $(".recommended__link p").fadeIn(10)
                                                                        $(".recommended__link p").trunk8({
                                                                          lines: 5
                                                                        });
                                                                      });
                                                                  },
                                                                  "instrItem": function() {
                                                                    $(".instr__plus").click(function() {
                                                                          if (!$(this).closest(".instr__item").hasClass("instr__item_active")) {
                                                                            $(".instr__item").removeClass("instr__item_active")
                                                                            $(this).closest(".instr__item").addClass("instr__item_active")
                                                                            $(".instr__item").find(".instr__content").slideUp("10")
                                                                            $(this).closest(".instr__item").find(".instr__content").slideDown("slow")
                                                                            if ($(this).slick('slickCurrentSlide') == $(this).find('.slick-slide').length - 1) {
                                                                              setTimeout(function() {
                                                                                $(".instr__item").removeClass("instr__item_active")
                                                                              }, 550);
                                                                              $(".instr__item").find(".instr__content").slideUp("slow")
                                                                              if ($(this).slick('slickCurrentSlide') == 0) {})
                                                                            $(".instr__close").click(function() {
                                                                              $(this).closest(".instr__item").removeClass("instr__item_active")
                                                                              $(this).closest(".instr__item").find(".instr__content").slideUp("slow")
                                                                            })
                                                                          },
                                                                          "starRating": function() {
                                                                            $(".rating").starRating({
                                                                                  starShape: "rounded",
                                                                                  totalStars: 5,
                                                                                  starSize: 20,
                                                                                  strokeWidth: 10,
                                                                                  strokeColor: '#eb373b',
                                                                                  initialRating: 0,
                                                                                  emptyColor: '#666666',
                                                                                  hoverColor: '#eb373b',
                                                                                  activeColor: '#eb373b',
                                                                                  ratedColor: '#eb373b',
                                                                                  useGradient: false,
                                                                                  useFullStars: true,
                                                                                  disableAfterRate: false
                                                                                  return
                                                                                  $(".banner-info__stars").starRating({
                                                                                      starShape: "rounded",
                                                                                      totalStars: 5,
                                                                                      starSize: 10,
                                                                                      strokeWidth: 30,
                                                                                      strokeColor: '#eb373b',
                                                                                      initialRating: 4,
                                                                                      emptyColor: '#666666',
                                                                                      hoverColor: '#eb373b',
                                                                                      activeColor: '#eb373b',
                                                                                      ratedColor: '#eb373b',
                                                                                      useGradient: false,
                                                                                      useFullStars: true,
                                                                                      readOnly: true
                                                                                    }
                                                                                    $(".banner-info__stars_feedback").starRating({
                                                                                      starShape: "rounded",
                                                                                      totalStars: 5,
                                                                                      starSize: 20,
                                                                                      strokeWidth: 20,
                                                                                      strokeColor: '#eb373b',
                                                                                      initialRating: 4,
                                                                                      emptyColor: '#666666',
                                                                                      hoverColor: '#eb373b',
                                                                                      activeColor: '#eb373b',
                                                                                      ratedColor: '#eb373b',
                                                                                      useGradient: false,
                                                                                      useFullStars: true,
                                                                                      readOnly: true
                                                                                    }); $(".stars__list").starRating({
                                                                                      starShape: "rounded",
                                                                                      totalStars: 5,
                                                                                      starSize: 20,
                                                                                      strokeWidth: 10,
                                                                                      strokeColor: '#eb373b',
                                                                                      initialRating: 4,
                                                                                      emptyColor: '#666666',
                                                                                      hoverColor: '#eb373b',
                                                                                      activeColor: '#eb373b',
                                                                                      ratedColor: '#eb373b',
                                                                                      useGradient: false,
                                                                                      useFullStars: true,
                                                                                      readOnly: true
                                                                                    });
                                                                                  },
                                                                                  /* "bannerFadeIn": function() {
                                                                                      $(document).ready(function() {
                                                                                          $(".hero-tire__info").fadeIn(1000)
                                                                                      });
                                                                                  }, */
                                                                                  /* "openModal": function() {
                                                                                      $(".tyre-choice-item__caption_summer").click(function() {
                                                                                          $(".modal").addClass("modal_open")
                                                                                          $("section").hide()
                                                                                          $("header").hide()
                                                                                          $(".fp-menu").hide()
                                                                                      })
                                                                                  }, */
                                                                                  "descProductMinWidth": function() {
                                                                                    var count = $(".product-desc__list").children().length
                                                                                    if ($(".product-desc__list").children().length <= 3) {
                                                                                      $(".product-desc__item").css("max-width", "350px")
                                                                                    }
                                                                                  },
                                                                                  "descSlide": function() {
                                                                                      if ($('.product-desc__hero-wrap').length > 0) {
                                                                                        $('.product-desc__hero-wrap').slick({
                                                                                          slidesToShow: 1,
                                                                                          slidesToScroll: 1,
                                                                                          infinite: false,
                                                                                          accessibility: false,
                                                                                          dots: false,
                                                                                          centerMode: false,
                                                                                          arrows: false,
                                                                                          focusOnSelect: true,
                                                                                        });
                                                                                        $('.product-desc__hero-wrap').mousewheel(function(e) {
                                                                                              if (e.deltaY < 0) {
                                                                                                // if($(this).slick('slickCurrentSlide') == 0){
                                                                                                //   $('html, body').animate({
                                                                                                //     scrollTop: $(".product-tabs").offset().top
                                                                                                //   }, 500);
                                                                                                //   $('body, html').addClass('overflowH');
                                                                                                // }
                                                                                                // if($(this).slick('slickCurrentSlide') == ($(this).slick("getSlick").slideCount - 1)){
                                                                                                //   $('body, html').removeClass('overflowH');
                                                                                                // }
                                                                                                if ($(this).slick('slickCurrentSlide') == $(this).find('.slick-slide').length - 1) {
                                                                                                  return
                                                                                                }
                                                                                                e.preventDefault();
                                                                                                $(this).slick('slickNext');
                                                                                                if (e.deltaY < 0) {
                                                                                                  // if($(this).slick('slickCurrentSlide') == ($(this).slick("getSlick").slideCount - 1)){
                                                                                                  //   $('html, body').animate({
                                                                                                  //     scrollTop: $(".product-tabs").offset().top
                                                                                                  //   }, 500);
                                                                                                  //   $('body, html').addClass('overflowH');
                                                                                                  // }
                                                                                                  // if($(this).slick('slickCurrentSlide') == 0){
                                                                                                  //   $('body, html').removeClass('overflowH');
                                                                                                  // }
                                                                                                  if ($(this).slick('slickCurrentSlide') == 0) {
                                                                                                    return
                                                                                                  }
                                                                                                  e.preventDefault();
                                                                                                  $(this).slick('slickPrev');
                                                                                                  $(`.product-desc__item[data-tab-id='description-tab-${prevId}']`).trigger('click')
                                                                                                  fromEdge: function() {
                                                                                                      $('.product-desc__hero-wrap').on('afterChange', function(event, slick, currentSlide, nextSlide) {
                                                                                                        $('.product-desc__item').removeClass('product-desc__item_active');
                                                                                                        $('.product-desc__item').eq(currentSlide).addClass('product-desc__item_active');
                                                                                                      });
                                                                                                      $('.next-slide').css("display", "flex")
                                                                                                    },
                                                                                                    "descScrolling": function() {
                                                                                                      /* document.querySelector(".product-desc").addEventListener('wheel', descSorting)
                                                                                                      function descSorting(e) {
                                                                                                        const itemList = $(".product-desc__item")
                                                                                                        console.log(itemList.length)
                                                                                                        let active = $(".product-desc__item_active")
                                                                                                        let activeId = Number($(".product-desc__item_active").data("tab-id").slice(-1))
                                                                                                        let nextId = Number(activeId) + 1
                                                                                                        let prevId = Number(activeId) - 1
                                                                                                        console.log(activeId)
                                                                                                        console.log(nextId)
                                                                                                        console.log(prevId)
                                                                                                        console.log(active)
                                                                                                        e.preventDefault()
                                                                                                        if(active.data('tab-id') == `description-tab-${activeId}`) {
                                                                                                          if (e.deltaY < 0) {
                                                                                                            if(prevId != 0) {
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${activeId}']`).removeClass("product-desc__item_active")
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${prevId}']`).addClass("product-desc__item_active")
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${prevId}']`).trigger('click')
                                                                                                            } else {
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${activeId}']`).removeClass("product-desc__item_active")
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${itemList.length}']`).addClass("product-desc__item_active")
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${itemList.length}']`).trigger('click')
                                                                                                            "options": {
                                                                                                          }
                                                                                                          if (e.deltaY > 0) {
                                                                                                            if(nextId <= itemList.length) {
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${activeId}']`).removeClass("product-desc__item_active")
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${nextId}']`).addClass("product-desc__item_active")
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${nextId}']`).trigger('click')
                                                                                                            } else {
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-${activeId}']`).removeClass("product-desc__item_active")
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-1']`).addClass("product-desc__item_active")
                                                                                                              $(`.product-desc__item[data-tab-id='description-tab-1']`).trigger('click')
                                                                                                            "options": {
                                                                                                          }
                                                                                                        }
                                                                                                      }  */
                                                                                                    },
                                                                                                    "brandHistory": function() {
                                                                                                      const data = [{
                                                                                                          dateLabel: 'Основание компании «Toyo Tire»',
                                                                                                          title: '1945'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Основание компании «Nitto Tire»',
                                                                                                          title: '1949'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Слияние компаний «Toyo Tire» и «Nitto Tire»',
                                                                                                          title: '1979'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Возрождение бренда NITTO в США',
                                                                                                          title: '1995'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Основание торговой компании для продаж шин NITTO в Мексике ',
                                                                                                          title: '2002'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Официальное основание компании «Nitto Tire North  America» ',
                                                                                                          title: '2005'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Основание «Nitto Tire Japan» ',
                                                                                                          title: '2005'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Cайт nittotire.com получает высшую премию Horizon Interactive Awards в категории «Consumer Information»',
                                                                                                          title: '2007'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Основание «Nitto Tire Canada» ',
                                                                                                          title: '2007'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Курс на развитие глобальных продаж шин NITTO (принятие решения о продажах шин NITTO за пределами Америки) ',
                                                                                                          title: '2009'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Страница NITTO на Facebook набрала более 6 миллионов подписчиков',
                                                                                                          title: '2014'
                                                                                                        },
                                                                                                        {
                                                                                                          dateLabel: 'Начало официальных поставок в Российскую Федерацию',
                                                                                                          title: '2015'
                                                                                                        },
                                                                                                      ];
                                                                                                      new Vue({
                                                                                                            el: '#app',
                                                                                                            data: {
                                                                                                              steps: data,
                                                                                                            },
                                                                                                            "mounted": function() {
                                                                                                              var swiper = new Swiper('.swiper-container', {
                                                                                                                  slidesPerView: 4,
                                                                                                                  paginationClickable: true,
                                                                                                                  grabCursor: false,
                                                                                                                  slideToClickedSlide: true,
                                                                                                                  centeredSlides: true,
                                                                                                                  navigation: {
                                                                                                                    nextEl: '.next-slide',
                                                                                                                    prevEl: '.prev-slide',
                                                                                                                    "type": "Feature",
                                                                                                                    on: {
                                                                                                                      reachBeginning: function() {
                                                                                                                        $('.prev-slide').hide()
                                                                                                                      },
                                                                                                                      reachEnd: function() {
                                                                                                                        $('.next-slide').hide()
                                                                                                                      },
                                                                                                                      fromEdge: function() {
                                                                                                                        $('.next-slide').css("display", "flex")
                                                                                                                        $('.prev-slide').css("display", "flex")
                                                                                                                      },
                                                                                                                      "coordinates": [55.80884207, 37.60733150]
                                                                                                                    });
                                                                                                                }
                                                                                                              })
                                                                                                          },
                                                                                                          "productParallax": function() {

                                                                                                          },
                                                                                                          "previewButton": function() {
                                                                                                            $(".preview__item").hover(function() {
                                                                                                              $(this).find(".preview-button").stop(true).css("height", "60px").css("visibility", "visible")
                                                                                                            })
                                                                                                            $(".preview__item").mouseleave(function() {
                                                                                                              /* $(this).find(".preview-button").delay(300).stop(true).css("display","none") */
                                                                                                              $(this).find(".preview-button").stop(true).css("height", "0").css("visibility", "hidden")
                                                                                                            })
                                                                                                          },
                                                                                                          "recommendedButton": function() {
                                                                                                            $(".recommended__item").hover(function() {
                                                                                                              $(this).find(".recommended__button").stop(true).css("height", "60px").css("visibility", "visible")
                                                                                                            })
                                                                                                            $(".recommended__item").mouseleave(function() {
                                                                                                              $(this).find(".recommended__button").stop(true).css("height", "0").css("visibility", "hidden")
                                                                                                            })
                                                                                                          },
                                                                                                          "feedbackOpen": function() {
                                                                                                            $(".product-options__item_feedback").click(function() {
                                                                                                              $('html, body').stop().animate({
                                                                                                                scrollTop: $(".product-tabs").offset().top
                                                                                                              }, 1000);
                                                                                                            })
                                                                                                            $(".banner-info__feedback").click(function() {
                                                                                                              $('html, body').stop().animate({
                                                                                                                scrollTop: $(".product-tabs").offset().top
                                                                                                              }, 1000);
                                                                                                            })
                                                                                                          },
                                                                                                          "yandexMap": function() {
                                                                                                            ymaps.ready(function() {
                                                                                                                  var c = document.getElementById('yandex-map-markup');
                                                                                                                  if (!c) {
                                                                                                                    return;
                                                                                                                  }
                                                                                                                  var map = new ymaps.Map("yandex-map-markup", {
                                                                                                                    center: [55.76, 37.64],
                                                                                                                    zoom: 10,
                                                                                                                    controls: []
                                                                                                                  });
                                                                                                                  var data1 = {
                                                                                                                      "type": "FeatureCollection",
                                                                                                                      "features": [{
                                                                                                                            "type": "Feature",
                                                                                                                            "id": 1,
                                                                                                                            "geometry": {
                                                                                                                              "type": "Point",
                                                                                                                              "coordinates": [55.75824507, 37.52946138]
                                                                                                                            },
                                                                                                                            "properties": {
                                                                                                                              "hintContent": "Шин-сервис",
                                                                                                                              "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                            },
                                                                                                                            "options": {
                                                                                                                              "iconLayout": "default#image",
                                                                                                                              "iconImageHref": '../img/star-button-mini.png',
                                                                                                                              "iconImageSize": [24, 24],
                                                                                                                              "iconImageOffset": [0, 0]
                                                                                                                            }
                                                                                                                            "type": "Feature",
                                                                                                                            {
                                                                                                                              "type": "Feature",
                                                                                                                              "id": 2,
                                                                                                                              "geometry": {
                                                                                                                                "type": "Point",
                                                                                                                                "coordinates": [55.70079142, 37.59068875]
                                                                                                                              },
                                                                                                                              "properties": {
                                                                                                                                "hintContent": "Шин-сервис",
                                                                                                                                "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                              },
                                                                                                                              "options": {
                                                                                                                                "iconLayout": "default#image",
                                                                                                                                "iconImageHref": '../img/mappin-partner.png',
                                                                                                                                "iconImageSize": [12, 12],
                                                                                                                                "iconImageOffset": [0, 0]
                                                                                                                              }
                                                                                                                              "coordinates": [55.79827757, 37.72326800] {
                                                                                                                                  "type": "Feature",
                                                                                                                                  "id": 3,
                                                                                                                                  "geometry": {
                                                                                                                                    "type": "Point",
                                                                                                                                    "coordinates": [55.80884207, 37.60733150]
                                                                                                                                  },
                                                                                                                                  "properties": {
                                                                                                                                    "hintContent": "Шин-сервис",
                                                                                                                                    "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                  },
                                                                                                                                  "options": {
                                                                                                                                    "iconLayout": "default#image",
                                                                                                                                    "iconImageHref": '../img/star-button-mini.png',
                                                                                                                                    "iconImageSize": [24, 24],
                                                                                                                                    "iconImageOffset": [0, 0]
                                                                                                                                  }
                                                                                                                                  "type": "Feature",
                                                                                                                                  {
                                                                                                                                    "type": "Feature",
                                                                                                                                    "id": 4,
                                                                                                                                    "geometry": {
                                                                                                                                      "type": "Point",
                                                                                                                                      "coordinates": [55.79827757, 37.72326800]
                                                                                                                                    },
                                                                                                                                    "properties": {
                                                                                                                                      "hintContent": "Шин-сервис",
                                                                                                                                      "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                    },
                                                                                                                                    "options": {
                                                                                                                                      "iconLayout": "default#image",
                                                                                                                                      "iconImageHref": '../img/mappin-partner.png',
                                                                                                                                      "iconImageSize": [12, 12],
                                                                                                                                      "iconImageOffset": [0, 0]
                                                                                                                                    }
                                                                                                                                    "coordinates": [55.74895957, 37.76344050] {
                                                                                                                                        "type": "Feature",
                                                                                                                                        "id": 5,
                                                                                                                                        "geometry": {
                                                                                                                                          "type": "Point",
                                                                                                                                          "coordinates": [55.74895957, 37.76344050]
                                                                                                                                        },
                                                                                                                                        "properties": {
                                                                                                                                          "hintContent": "Шин-сервис",
                                                                                                                                          "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                        },
                                                                                                                                        "options": {
                                                                                                                                          "iconLayout": "default#image",
                                                                                                                                          "iconImageHref": '../img/star-button-mini.png',
                                                                                                                                          "iconImageSize": [24, 24],
                                                                                                                                          "iconImageOffset": [0, 0]
                                                                                                                                        }
                                                                                                                                        "type": "Feature",
                                                                                                                                        {
                                                                                                                                          "type": "Feature",
                                                                                                                                          "id": 6,
                                                                                                                                          "geometry": {
                                                                                                                                            "type": "Point",
                                                                                                                                            "coordinates": [55.65237457, 37.51618850]
                                                                                                                                          },
                                                                                                                                          "properties": {
                                                                                                                                            "hintContent": "Шин-сервис",
                                                                                                                                            "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                          },
                                                                                                                                          "options": {
                                                                                                                                            "iconLayout": "default#image",
                                                                                                                                            "iconImageHref": '../img/mappin-partner.png',
                                                                                                                                            "iconImageSize": [12, 12],
                                                                                                                                            "iconImageOffset": [0, 0]
                                                                                                                                          }
                                                                                                                                          "coordinates": [55.65237457, 37.51618850] {
                                                                                                                                              "type": "Feature",
                                                                                                                                              "id": 7,
                                                                                                                                              "geometry": {
                                                                                                                                                "type": "Point",
                                                                                                                                                "coordinates": [55.57589707, 37.57336650]
                                                                                                                                              },
                                                                                                                                              "properties": {
                                                                                                                                                "hintContent": "Шин-сервис",
                                                                                                                                                "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                              },
                                                                                                                                              "options": {
                                                                                                                                                "iconLayout": "default#image",
                                                                                                                                                "iconImageHref": '../img/star-button-mini.png',
                                                                                                                                                "iconImageSize": [24, 24],
                                                                                                                                                "iconImageOffset": [0, 0]
                                                                                                                                              }
                                                                                                                                              "type": "Feature",
                                                                                                                                              {
                                                                                                                                                "type": "Feature",
                                                                                                                                                "id": 8,
                                                                                                                                                "geometry": {
                                                                                                                                                  "type": "Point",
                                                                                                                                                  "coordinates": [55.68279257, 37.78060750]
                                                                                                                                                },
                                                                                                                                                "properties": {
                                                                                                                                                  "hintContent": "Шин-сервис",
                                                                                                                                                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                },
                                                                                                                                                "options": {
                                                                                                                                                  "iconLayout": "default#image",
                                                                                                                                                  "iconImageHref": '../img/mappin-partner.png',
                                                                                                                                                  "iconImageSize": [12, 12],
                                                                                                                                                  "iconImageOffset": [0, 0]
                                                                                                                                                }
                                                                                                                                                "coordinates": [55.57589707, 37.57336650] {
                                                                                                                                                    "type": "Feature",
                                                                                                                                                    "id": 9,
                                                                                                                                                    "geometry": {
                                                                                                                                                      "type": "Point",
                                                                                                                                                      "coordinates": [55.75589592, 37.68186521]
                                                                                                                                                    },
                                                                                                                                                    "properties": {
                                                                                                                                                      "hintContent": "Шин-сервис",
                                                                                                                                                      "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                    },
                                                                                                                                                    "options": {
                                                                                                                                                      "iconLayout": "default#image",
                                                                                                                                                      "iconImageHref": '../img/star-button-mini.png',
                                                                                                                                                      "iconImageSize": [24, 24],
                                                                                                                                                      "iconImageOffset": [0, 0]
                                                                                                                                                    }
                                                                                                                                                    "type": "Feature",
                                                                                                                                                    {
                                                                                                                                                      "type": "Feature",
                                                                                                                                                      "id": 10,
                                                                                                                                                      "geometry": {
                                                                                                                                                        "type": "Point",
                                                                                                                                                        "coordinates": [55.77623137, 37.68332498]
                                                                                                                                                      },
                                                                                                                                                      "properties": {
                                                                                                                                                        "hintContent": "Шин-сервис",
                                                                                                                                                        "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                      },
                                                                                                                                                      "options": {
                                                                                                                                                        "iconLayout": "default#image",
                                                                                                                                                        "iconImageHref": '../img/mappin-partner.png',
                                                                                                                                                        "iconImageSize": [12, 12],
                                                                                                                                                        "iconImageOffset": [0, 0]
                                                                                                                                                      }
                                                                                                                                                      "coordinates": [55.68279257, 37.78060750] {
                                                                                                                                                          "type": "Feature",
                                                                                                                                                          "id": 11,
                                                                                                                                                          "geometry": {
                                                                                                                                                            "type": "Point",
                                                                                                                                                            "coordinates": [55.81378400, 37.64094346]
                                                                                                                                                          },
                                                                                                                                                          "properties": {
                                                                                                                                                            "hintContent": "Шин-сервис",
                                                                                                                                                            "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                          },
                                                                                                                                                          "options": {
                                                                                                                                                            "iconLayout": "default#image",
                                                                                                                                                            "iconImageHref": '../img/star-button-mini.png',
                                                                                                                                                            "iconImageSize": [24, 24],
                                                                                                                                                            "iconImageOffset": [0, 0]
                                                                                                                                                          }
                                                                                                                                                          "type": "Feature",
                                                                                                                                                          {
                                                                                                                                                            "type": "Feature",
                                                                                                                                                            "id": 12,
                                                                                                                                                            "geometry": {
                                                                                                                                                              "type": "Point",
                                                                                                                                                              "coordinates": [55.83227550, 37.53164106]
                                                                                                                                                            },
                                                                                                                                                            "properties": {
                                                                                                                                                              "hintContent": "Шин-сервис",
                                                                                                                                                              "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                            },
                                                                                                                                                            "options": {
                                                                                                                                                              "iconLayout": "default#image",
                                                                                                                                                              "iconImageHref": '../img/mappin-partner.png',
                                                                                                                                                              "iconImageSize": [12, 12],
                                                                                                                                                              "iconImageOffset": [0, 0]
                                                                                                                                                            }
                                                                                                                                                            "coordinates": [55.75589592, 37.68186521] {
                                                                                                                                                                "type": "Feature",
                                                                                                                                                                "id": 13,
                                                                                                                                                                "geometry": {
                                                                                                                                                                  "type": "Point",
                                                                                                                                                                  "coordinates": [55.85408558, 37.45021908]
                                                                                                                                                                },
                                                                                                                                                                "properties": {
                                                                                                                                                                  "hintContent": "Шин-сервис",
                                                                                                                                                                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                                },
                                                                                                                                                                "options": {
                                                                                                                                                                  "iconLayout": "default#image",
                                                                                                                                                                  "iconImageHref": '../img/star-button-mini.png',
                                                                                                                                                                  "iconImageSize": [24, 24],
                                                                                                                                                                  "iconImageOffset": [0, 0]
                                                                                                                                                                }
                                                                                                                                                                "type": "Feature",
                                                                                                                                                                {
                                                                                                                                                                  "type": "Feature",
                                                                                                                                                                  "id": 14,
                                                                                                                                                                  "geometry": {
                                                                                                                                                                    "type": "Point",
                                                                                                                                                                    "coordinates": [55.81248845, 37.36769178]
                                                                                                                                                                  },
                                                                                                                                                                  "properties": {
                                                                                                                                                                    "hintContent": "Шин-сервис",
                                                                                                                                                                    "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                                  },
                                                                                                                                                                  "options": {
                                                                                                                                                                    "iconLayout": "default#image",
                                                                                                                                                                    "iconImageHref": '../img/mappin-partner.png',
                                                                                                                                                                    "iconImageSize": [12, 12],
                                                                                                                                                                    "iconImageOffset": [0, 0]
                                                                                                                                                                  }
                                                                                                                                                                  "coordinates": [55.77623137, 37.68332498] {
                                                                                                                                                                    "type": "Feature",
                                                                                                                                                                    "id": 15,
                                                                                                                                                                    "geometry": {
                                                                                                                                                                      "type": "Point",
                                                                                                                                                                      "coordinates": [55.76669400, 37.38400154]
                                                                                                                                                                    },
                                                                                                                                                                    "properties": {
                                                                                                                                                                      "hintContent": "Шин-сервис",
                                                                                                                                                                      "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                                    },
                                                                                                                                                                    "options": {
                                                                                                                                                                      "iconLayout": "default#image",
                                                                                                                                                                      "iconImageHref": '../img/star-button-mini.png',
                                                                                                                                                                      "iconImageSize": [24, 24],
                                                                                                                                                                      "iconImageOffset": [0, 0]
                                                                                                                                                                    }
                                                                                                                                                                    "type": "Feature",
                                                                                                                                                                    {
                                                                                                                                                                      "type": "Feature",
                                                                                                                                                                      "id": 16,
                                                                                                                                                                      "geometry": {
                                                                                                                                                                        "type": "Point",
                                                                                                                                                                        "coordinates": [55.67256780, 37.45374971]
                                                                                                                                                                      },
                                                                                                                                                                      "properties": {
                                                                                                                                                                        "hintContent": "Шин-сервис",
                                                                                                                                                                        "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                                                                                                                                                                      },
                                                                                                                                                                      "options": {
                                                                                                                                                                        "iconLayout": "default#image",
                                                                                                                                                                        "iconImageHref": '../img/mappin-partner.png',
                                                                                                                                                                        "iconImageSize": [12, 12],
                                                                                                                                                                        "iconImageOffset": [0, 0]
                                                                                                                                                                      }
                                                                                                                                                                      "coordinates": [55.81378400, 37.64094346]
                                                                                                                                                                    ]
                                                                                                                                                                  };
                                                                                                                                                                  var om1 = new ymaps.ObjectManager();
                                                                                                                                                                  om1.add(data1);
                                                                                                                                                                  map.geoObjects.add(om1);
                                                                                                                                                                  map.events.add("click", function() {
                                                                                                                                                                    map.balloon.close()
                                                                                                                                                                  })
                                                                                                                                                                  om1.add(data1);
                                                                                                                                                                  /* map.balloon.events.add("close", function() {
                                                                                                                                                                    $(".product-contacts-info__location-button-text").trigger("click")
                                                                                                                                                                  }) */
                                                                                                                                                                  map.geoObjects.events.add('balloonclose', function(e) {
                                                                                                                                                                    $(".product-contacts-info__location-button-text").trigger("click")
                                                                                                                                                                  });
                                                                                                                                                                  /* map.balloon.events.add("close", function() {
        ymaps.ready(function() {
          var c = document.getElementById('yandex-map');
          if (!c) {
            return;
          }
          var map = new ymaps.Map("yandex-map", {
              center: [55.76, 37.64],
              zoom: 10,
              controls: []
            }),
            BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p>{{properties.address}}</p><a href="#product-contacts-info__buy-{{properties.nid}}" class="balloon-close" style="color : #eb2d2e;">Подробнее</a>', {
                build: function() {
                  BalloonContentLayout.superclass.build.call(this);
                  $('.balloon-close').bind('click', this.onMoreClick);
                },
                clear: function() {
                  $('.balloon-close').unbind('click', this.onMoreClick);
                  BalloonContentLayout.superclass.clear.call(this);
                },
                onMoreClick: function(event) {
                  event.preventDefault();
                  $($(this).attr('href') + ' .button').trigger('click');
                }
              });

          $('.product-contacts-info__location .product-contacts-info__buy').each(function() {
            var gps = $(this).data('gps');
            if (typeof gps == 'string') {
              var latlon = gps.split(',');
              var placemark = new ymaps.Placemark([latlon[0], latlon[1]], {
                name: $(this).data('dealer'),
                address: $(this).data('address'),
                id: $(this).data('id'),
                nid: $(this).data('nid')
              }, {
                iconLayout: 'default#image',
                iconImageHref: drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                iconImageSize: [24, 24],
                iconImageOffset: [0, 0],
                balloonContentLayout: BalloonContentLayout,
                balloonPanelMaxMapArea: 0
              });
              map.geoObjects.add(placemark);
            }
          });
        });

        ymaps.ready(function() {
          var c = document.getElementById('yandex-map2');
          if (!c) {
            return;
          }
          var map = new ymaps.Map("yandex-map2", {
        var c = document.getElementById('yandex-map');
        if (!c) {
          return;
          });
          var data1 = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "id": 1,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.75824507, 37.52946138]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                  "iconImageSize": [24, 24],
                  "iconImageOffset": [0, 0]
                }
          BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              {
                "type": "Feature",
                "id": 2,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.70079142, 37.59068875]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/mappin-partner.png',
                  "iconImageSize": [12, 12],
                  "iconImageOffset": [0, 0]
                }
                $('.balloon-close').bind('click', this.onMoreClick);
              {
                "type": "Feature",
                "id": 3,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.80884207, 37.60733150]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                  "iconImageSize": [24, 24],
                  "iconImageOffset": [0, 0]
                }
              "type": "Feature",
              {
                "type": "Feature",
                "id": 4,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.79827757, 37.72326800]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/mappin-partner.png',
                  "iconImageSize": [12, 12],
                  "iconImageOffset": [0, 0]
                }
                "coordinates": [55.75824507, 37.52946138]
              {
                "type": "Feature",
                "id": 5,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.74895957, 37.76344050]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                  "iconImageSize": [24, 24],
                  "iconImageOffset": [0, 0]
                }
              "type": "Feature",
              {
                "type": "Feature",
                "id": 6,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.65237457, 37.51618850]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/mappin-partner.png',
                  "iconImageSize": [12, 12],
                  "iconImageOffset": [0, 0]
                }
                "coordinates": [55.70079142, 37.59068875]
              {
                "type": "Feature",
                "id": 7,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.57589707, 37.57336650]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                  "iconImageSize": [24, 24],
                  "iconImageOffset": [0, 0]
                }
              "type": "Feature",
              {
                "type": "Feature",
                "id": 8,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.68279257, 37.78060750]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/mappin-partner.png',
                  "iconImageSize": [12, 12],
                  "iconImageOffset": [0, 0]
                }
                "coordinates": [55.80884207, 37.60733150]
              {
                "type": "Feature",
                "id": 9,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.75589592, 37.68186521]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                  "iconImageSize": [24, 24],
                  "iconImageOffset": [0, 0]
                }
              "type": "Feature",
              {
                "type": "Feature",
                "id": 10,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.77623137, 37.68332498]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/mappin-partner.png',
                  "iconImageSize": [12, 12],
                  "iconImageOffset": [0, 0]
                }
                "coordinates": [55.79827757, 37.72326800]
              {
                "type": "Feature",
                "id": 11,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.81378400, 37.64094346]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                  "iconImageSize": [24, 24],
                  "iconImageOffset": [0, 0]
                }
              "type": "Feature",
              {
                "type": "Feature",
                "id": 12,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.83227550, 37.53164106]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/mappin-partner.png',
                  "iconImageSize": [12, 12],
                  "iconImageOffset": [0, 0]
                }
                "coordinates": [55.74895957, 37.76344050]
              {
                "type": "Feature",
                "id": 13,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.85408558, 37.45021908]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                  "iconImageSize": [24, 24],
                  "iconImageOffset": [0, 0]
                }
              "type": "Feature",
              {
                "type": "Feature",
                "id": 14,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.81248845, 37.36769178]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/mappin-partner.png',
                  "iconImageSize": [12, 12],
                  "iconImageOffset": [0, 0]
                }
                "coordinates": [55.65237457, 37.51618850]
              {
                "type": "Feature",
                "id": 15,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.76669400, 37.38400154]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/star-button-mini.png',
                  "iconImageSize": [24, 24],
                  "iconImageOffset": [0, 0]
                }
              "type": "Feature",
              {
                "type": "Feature",
                "id": 16,
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.67256780, 37.45374971]
                },
                "properties": {
                  "hintContent": "Шин-сервис",
                  "balloonContent": "<p>Москва, улица Ермакова Роща, д. 7А, стр. 2</p><a class='balloon-close' style='color : #eb2d2e;'>Подробнее</a>"
                },
                "options": {
                  "iconLayout": "default#image",
                  "iconImageHref": drupalSettings.path.themeUrl + '/img/mappin-partner.png',
                  "iconImageSize": [12, 12],
                  "iconImageOffset": [0, 0]
                }
                "coordinates": [55.57589707, 37.57336650]
            ]
          };
          var om1 = new ymaps.ObjectManager();
          om1.add(data1);
          map.geoObjects.add(om1);
        });
      },
      "rainTyre": function() {
        /* new RainyDay({
          image: 'background-rain',
          enableSizeChange:	true
        }); */
                                                                                                                                                                  "rainTyre": function() {
                                                                                                                                                                      function rain_0() {
                                                                                                                                                                        var canvas = document.getElementById('rain');
                                                                                                                                                                        if (!canvas) {
                                                                                                                                                                          return;
                                                                                                                                                                        }

                                                                                                                                                                        function rain_0() {
                                                                                                                                                                          var ctx = canvas.getContext('2d');
                                                                                                                                                                          if (!canvas) {
                                                                                                                                                                            var W = window.innerWidth;
                                                                                                                                                                            var H = window.innerHeight;
                                                                                                                                                                            canvas.width = W;
                                                                                                                                                                            canvas.height = H;

                                                                                                                                                                            var W = window.innerWidth;
                                                                                                                                                                            var md = 900;
                                                                                                                                                                            var drops = [];
                                                                                                                                                                            var angle = 0;

                                                                                                                                                                            setInterval(draw, 25);
                                                                                                                                                                            var md = 900;
                                                                                                                                                                            for (var i = 0; i < md; i++) {
                                                                                                                                                                              drops.push({
                                                                                                                                                                                x: Math.random() * W,
                                                                                                                                                                                y: Math.random() * H,
                                                                                                                                                                                r: Math.random() * 1.1,
                                                                                                                                                                                d: Math.random() + 4,
                                                                                                                                                                              })
                                                                                                                                                                            }
                                                                                                                                                                            y: Math.random() * H,
                                                                                                                                                                              function draw() {
                                                                                                                                                                                d: Math.random() + 4,
                                                                                                                                                                                ctx.clearRect(0, 0, W, H);
                                                                                                                                                                                ctx.fillStyle = 'white';
                                                                                                                                                                                ctx.beginPath();

                                                                                                                                                                                function draw() {
                                                                                                                                                                                  for (var i = 0; i < md; i++) {
                                                                                                                                                                                    ctx.clearRect(0, 0, W, H);
                                                                                                                                                                                    var f = drops[i]
                                                                                                                                                                                    ctx.moveTo(f.x, f.y);
                                                                                                                                                                                    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
                                                                                                                                                                                  }
                                                                                                                                                                                  ctx.fill();
                                                                                                                                                                                  update();
                                                                                                                                                                                  for (var i = 0; i < md; i++) {
                                                                                                                                                                                    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);

                                                                                                                                                                                    function update() {
                                                                                                                                                                                      ctx.fill();
                                                                                                                                                                                      angle += 0.01;
                                                                                                                                                                                    }
                                                                                                                                                                                    for (var i = 0; i < md; i++) {
                                                                                                                                                                                      function update() {
                                                                                                                                                                                        var f = drops[i];
                                                                                                                                                                                        angle += 0.01;
                                                                                                                                                                                        f.y += Math.pow(f.d, 2) + 1;
                                                                                                                                                                                        f.x += Math.sin(angle) * 2;

                                                                                                                                                                                        if (f.y > H) {
                                                                                                                                                                                          drops[i] = {
                                                                                                                                                                                            x: Math.random() * W,
                                                                                                                                                                                            y: -10,
                                                                                                                                                                                            r: f.r,
                                                                                                                                                                                            d: f.d
                                                                                                                                                                                          }
                                                                                                                                                                                          drops[i] = {
                                                                                                                                                                                            x: Math.random() * W,
                                                                                                                                                                                            r: f.r,
                                                                                                                                                                                            d: f.d
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                      //rain_test_1_START
                                                                                                                                                                                      function rain_1() {
                                                                                                                                                                                        if ($('#rain_1').length !== 0) {
                                                                                                                                                                                          var canvas1 = $('#rain_1')[0];
                                                                                                                                                                                          canvas1.width = window.innerWidth;
                                                                                                                                                                                          canvas1.height = window.innerHeight;

                                                                                                                                                                                          function rain_1() {
                                                                                                                                                                                            if (canvas1.getContext) {
                                                                                                                                                                                              var ctx1 = canvas1.getContext('2d');
                                                                                                                                                                                              var w1 = canvas1.width;
                                                                                                                                                                                              var h1 = canvas1.height;
                                                                                                                                                                                              ctx1.strokeStyle = 'rgba(251, 251, 251, 0.6)';
                                                                                                                                                                                              ctx1.lineWidth = 1;
                                                                                                                                                                                              ctx1.lineCap = 'round';
                                                                                                                                                                                              var w1 = canvas1.width;
                                                                                                                                                                                              var h1 = canvas1.height;
                                                                                                                                                                                              var init = [];
                                                                                                                                                                                              var maxParts = 1900;
                                                                                                                                                                                              for (var a = 0; a < maxParts; a++) {
                                                                                                                                                                                                init.push({
                                                                                                                                                                                                  x: Math.random() * w1,
                                                                                                                                                                                                  y: Math.random() * h1,
                                                                                                                                                                                                  l: Math.random() * .2,
                                                                                                                                                                                                  xs: -6 + Math.random() * 1 + 4,
                                                                                                                                                                                                  ys: Math.random() * 42 + 2
                                                                                                                                                                                                })
                                                                                                                                                                                              }
                                                                                                                                                                                              l: Math.random() * .2,
                                                                                                                                                                                                var particles = [];
                                                                                                                                                                                              for (var b = 0; b < maxParts; b++) {
                                                                                                                                                                                                particles[b] = init[b];
                                                                                                                                                                                              }

                                                                                                                                                                                              function draw() {
                                                                                                                                                                                                ctx1.clearRect(0, 0, w1, h1);
                                                                                                                                                                                                for (var c = 0; c < particles.length; c++) {
                                                                                                                                                                                                  var p = particles[c];
                                                                                                                                                                                                  ctx1.beginPath();
                                                                                                                                                                                                  ctx1.moveTo(p.x, p.y);
                                                                                                                                                                                                  ctx1.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                                                                                                                                                  ctx1.stroke();
                                                                                                                                                                                                }
                                                                                                                                                                                                move();
                                                                                                                                                                                                var p = particles[c];
                                                                                                                                                                                                ctx1.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);

                                                                                                                                                                                                function move() {
                                                                                                                                                                                                  for (var b = 0; b < particles.length; b++) {
                                                                                                                                                                                                    var p = particles[b];
                                                                                                                                                                                                    p.x += p.xs;
                                                                                                                                                                                                    p.y += p.ys;
                                                                                                                                                                                                    if (p.x > w1 || p.y > h1) {
                                                                                                                                                                                                      p.x = Math.random() * w1;
                                                                                                                                                                                                      p.y = -20;
                                                                                                                                                                                                    }
                                                                                                                                                                                                    p.x += p.xs;
                                                                                                                                                                                                    p.y += p.ys;
                                                                                                                                                                                                    p.x = Math.random() * w1;
                                                                                                                                                                                                    setInterval(draw, 30);
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                            setInterval(draw, 30);

                                                                                                                                                                                            function rain_2() {
                                                                                                                                                                                              if ($('#rain_2').length !== 0) {
                                                                                                                                                                                                var global_width = window.innerWidth,
                                                                                                                                                                                                  global_height = window.innerHeight,
                                                                                                                                                                                                  canvas = document.getElementById("rain_2"),
                                                                                                                                                                                                  ctx = canvas.getContext("2d");
                                                                                                                                                                                                if ($('#rain_2').length !== 0) {
                                                                                                                                                                                                  canvas.width = global_width * 2;
                                                                                                                                                                                                  canvas.height = global_height * 2;
                                                                                                                                                                                                  canvas = document.getElementById("rain_2"),
                                                                                                                                                                                                    canvas.style.width = global_width;
                                                                                                                                                                                                  canvas.style.height = global_height;
                                                                                                                                                                                                  canvas.width = global_width * 2;
                                                                                                                                                                                                  var particles = [],
                                                                                                                                                                                                    num_particles = 3000;
                                                                                                                                                                                                  canvas.style.width = global_width;

                                                                                                                                                                                                  function init() {

                                                                                                                                                                                                    createParticles();
                                                                                                                                                                                                    num_particles = 3000;
                                                                                                                                                                                                    TweenLite.ticker.addEventListener("tick", update);
                                                                                                                                                                                                  }

                                                                                                                                                                                                  var Particle = function() {
                                                                                                                                                                                                    this.x = canvas.width * Math.random();
                                                                                                                                                                                                    this.y = randomNumber(-100, -250);
                                                                                                                                                                                                    this.Color = GetRandomColor(randomNumber(0.3, 0.7));
                                                                                                                                                                                                  }
                                                                                                                                                                                                  var Particle = function() {
                                                                                                                                                                                                    Particle.prototype.Draw = function(ctx) {
                                                                                                                                                                                                      ctx.beginPath();
                                                                                                                                                                                                      ctx.fillRect(this.x, this.y, 2, 10);
                                                                                                                                                                                                      ctx.fillStyle = this.Color;
                                                                                                                                                                                                      ctx.fill();
                                                                                                                                                                                                    }
                                                                                                                                                                                                    ctx.beginPath();

                                                                                                                                                                                                    function createParticles() {
                                                                                                                                                                                                      ctx.fillStyle = this.Color;
                                                                                                                                                                                                      for (var i = 0; i < num_particles; i++) {}
                                                                                                                                                                                                      particles.push(new Particle());

                                                                                                                                                                                                      function createParticles() {
                                                                                                                                                                                                        setParticle(particles[i]);
                                                                                                                                                                                                        for (var i = 0; i < num_particles; i++) {}


                                                                                                                                                                                                        particles.push(new Particle());

                                                                                                                                                                                                        function setParticle(target) {
                                                                                                                                                                                                          setParticle(particles[i]);
                                                                                                                                                                                                          this.x = canvas.width * Math.random();
                                                                                                                                                                                                          this.y = -500;
                                                                                                                                                                                                        }
                                                                                                                                                                                                        TweenLite.set(target, {
                                                                                                                                                                                                          x: this.x,
                                                                                                                                                                                                          y: this.y
                                                                                                                                                                                                        });

                                                                                                                                                                                                        animateParticle(target);
                                                                                                                                                                                                      }

                                                                                                                                                                                                      function animateParticle(target) {
                                                                                                                                                                                                        y: this.y
                                                                                                                                                                                                        TweenLite.to(target, randomNumber(.7, 1.3), {
                                                                                                                                                                                                          y: (canvas.height + 400),
                                                                                                                                                                                                          delay: randomNumber(0, 2),
                                                                                                                                                                                                          ease: Power0.easeNone,
                                                                                                                                                                                                          onComplete: function() {
                                                                                                                                                                                                            setParticle(target);

                                                                                                                                                                                                          }
                                                                                                                                                                                                        });
                                                                                                                                                                                                        y: (canvas.height + 400),
                                                                                                                                                                                                        onComplete: function() {}
                                                                                                                                                                                                        setParticle(target);

                                                                                                                                                                                                        function update(event) {
                                                                                                                                                                                                          ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                                                                                                                                                                          for (var i = 0; i < num_particles; i++) {
                                                                                                                                                                                                            particles[i].Draw(ctx);
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }

                                                                                                                                                                                                        function update(event) {
                                                                                                                                                                                                          function killTweens() {
                                                                                                                                                                                                            for (var i = 0; i < num_particles; i++) {
                                                                                                                                                                                                              TweenLite.ticker.removeEventListener("tick", update);
                                                                                                                                                                                                            }
                                                                                                                                                                                                            for (var i = 0; i < num_particles; i++) {
                                                                                                                                                                                                              TweenLite.killTweensOf(particles[i]);
                                                                                                                                                                                                            }


                                                                                                                                                                                                            function resize() {
                                                                                                                                                                                                              ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                                                                                                                                                                            }
                                                                                                                                                                                                            killTweens();
                                                                                                                                                                                                            canvas.width = window.innerWidth * 2;
                                                                                                                                                                                                            canvas.height = window.innerHeight * 2;
                                                                                                                                                                                                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                                                                                                                                                                            canvas.style.width = window.innerWidth;
                                                                                                                                                                                                            canvas.style.height = window.innerHeight;
                                                                                                                                                                                                            canvas.width = window.innerWidth * 2;
                                                                                                                                                                                                            for (var i = 0; i < num_particles; i++) {
                                                                                                                                                                                                              setParticle(particles[i]);
                                                                                                                                                                                                            }
                                                                                                                                                                                                            canvas.style.height = window.innerHeight;
                                                                                                                                                                                                            TweenLite.ticker.addEventListener("tick", update);
                                                                                                                                                                                                            for (var i = 0; i < num_particles; i++) {};
                                                                                                                                                                                                          }
                                                                                                                                                                                                          window.addEventListener('resize', resize, false);
                                                                                                                                                                                                          TweenLite.ticker.addEventListener("tick", update);

                                                                                                                                                                                                          function GetRandomColor(alpha) {
                                                                                                                                                                                                            var r = 0,
                                                                                                                                                                                                              g = 0,
                                                                                                                                                                                                              b = 0;
                                                                                                                                                                                                            while (r < 100 && g < 100 && b < 100) {
                                                                                                                                                                                                              r = 255;
                                                                                                                                                                                                              g = 255;
                                                                                                                                                                                                              b = 255;
                                                                                                                                                                                                            }

                                                                                                                                                                                                            return "rgba(" + r + "," + g + "," + b + ", " + alpha + ")";
                                                                                                                                                                                                            b = 0;
                                                                                                                                                                                                            while (r < 100 && g < 100 && b < 100) {
                                                                                                                                                                                                              window.addEventListener('load', init);
                                                                                                                                                                                                              b = 255;

                                                                                                                                                                                                              function getMousePosition(canvas, event) {
                                                                                                                                                                                                                var rect = canvas.getBoundingClientRect();
                                                                                                                                                                                                                return {
                                                                                                                                                                                                                  x: event.clientX - rect.left,
                                                                                                                                                                                                                  y: event.clientY - rect.top
                                                                                                                                                                                                                };
                                                                                                                                                                                                              }

                                                                                                                                                                                                              function distance(x1, y1, x2, y2) {
                                                                                                                                                                                                                return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
                                                                                                                                                                                                              }
                                                                                                                                                                                                              return {
                                                                                                                                                                                                                function randomWholeNumber(min, max) {
                                                                                                                                                                                                                  return Math.floor(Math.random() * (1 + max - min) + min);
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }

                                                                                                                                                                                                              function randomNumber(min, max) {
                                                                                                                                                                                                                return Math.random() * (max - min) + min;
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }

                                                                                                                                                                                                            function randomExcluded(min, max, minExcluded, maxExcluded) {
                                                                                                                                                                                                              var n = minExcluded
                                                                                                                                                                                                              while (n >= minExcluded && n <= maxExcluded)
                                                                                                                                                                                                                n = Math.floor(Math.random() * (1 + max - min) + min);
                                                                                                                                                                                                              return n;
                                                                                                                                                                                                            }
                                                                                                                                                                                                            return Math.floor(Math.random() * (1 + max - min) + min);
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                        if ($('#rain').length !== 0) {
                                                                                                                                                                                                          rain_0();
                                                                                                                                                                                                          console.log('0')
                                                                                                                                                                                                          var n = minExcluded
                                                                                                                                                                                                          if ($('#rain_1').length !== 0) {
                                                                                                                                                                                                            rain_1();
                                                                                                                                                                                                            console.log('1')
                                                                                                                                                                                                          }
                                                                                                                                                                                                          if ($('#rain_2').length !== 0) {
                                                                                                                                                                                                            rain_2();
                                                                                                                                                                                                            console.log('2')
                                                                                                                                                                                                          }
                                                                                                                                                                                                          n = Math.floor(Math.random() * (1 + max - min) + min);
                                                                                                                                                                                                        }
                                                                                                                                                                                                        if ($('#rain_2').length !== 0) {
                                                                                                                                                                                                          rain_2();
                                                                                                                                                                                                          //rain_test_1_END
                                                                                                                                                                                                          console.log('2')
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "rainTyreAlter": function() {
                                                                                                                                                                                                          $(document).ready(function() {
                                                                                                                                                                                                            new RainyDay({
                                                                                                                                                                                                              image: image,
                                                                                                                                                                                                              enableSizeChange: true,
                                                                                                                                                                                                            });
                                                                                                                                                                                                            var image = document.getElementById('background-rain');
                                                                                                                                                                                                            image.crossOrigin = 'anonymous';
                                                                                                                                                                                                          })
                                                                                                                                                                                                        }
                                                                                                                                                                                                      });
                                                                                                                                                                                                    var image = document.getElementById('background-rain');
                                                                                                                                                                                                    image.crossOrigin = 'anonymous';
                                                                                                                                                                                                  })
                                                                                                                                                                                              }
                                                                                                                                                                                            };

                                                                                                                                                                                            var app = {
                                                                                                                                                                                              'scroll': function() {
                                                                                                                                                                                                func.bannerParalax();
                                                                                                                                                                                                func.productDescScroll();
                                                                                                                                                                                              },
                                                                                                                                                                                              'init': function() {
                                                                                                                                                                                                func.hover();
                                                                                                                                                                                                func.productTabs();
                                                                                                                                                                                                func.descTabs();
                                                                                                                                                                                                func.dropdown();
                                                                                                                                                                                                func.diameter();
                                                                                                                                                                                                func.slick();
                                                                                                                                                                                                func.popups();
                                                                                                                                                                                                func.productGallery();
                                                                                                                                                                                                func.scrollbars();
                                                                                                                                                                                                func.yandexMap();
                                                                                                                                                                                                func.fixedHeader();
                                                                                                                                                                                                func.fullPage();
                                                                                                                                                                                                func.clickFilterMain();
                                                                                                                                                                                                func.snowFall();
                                                                                                                                                                                                func.dropdownCity();
                                                                                                                                                                                                func.inputMask();
                                                                                                                                                                                                func.filterChange();
                                                                                                                                                                                                func.gifPlaying();
                                                                                                                                                                                                func.reviewPictures();
                                                                                                                                                                                                func.filterActivationMain();
                                                                                                                                                                                                func.clickFilterInner();
                                                                                                                                                                                                func.filterActivationInner();
                                                                                                                                                                                                func.locateChoice();
                                                                                                                                                                                                func.dropdownSearch();
                                                                                                                                                                                                func.reviewBg();
                                                                                                                                                                                                func.clumpText();
                                                                                                                                                                                                func.instrItem();
                                                                                                                                                                                                func.starRating();
                                                                                                                                                                                                /* func.bannerFadeIn(); */
                                                                                                                                                                                                /* func.openModal(); */
                                                                                                                                                                                                func.descProductMinWidth();
                                                                                                                                                                                                func.brandHistory();
                                                                                                                                                                                                func.descScrolling();
                                                                                                                                                                                                func.productParallax();
                                                                                                                                                                                                func.descSlide();
                                                                                                                                                                                                func.catalogWindow();
                                                                                                                                                                                                func.feedbackOpen();
                                                                                                                                                                                                func.previewButton();
                                                                                                                                                                                                func.rainTyre();
                                                                                                                                                                                                func.rainTyreAlter();
                                                                                                                                                                                                func.recommendedButton();
                                                                                                                                                                                                func.galleryMainSlider();
                                                                                                                                                                                              },
                                                                                                                                                                                              'load': function() {
                                                                                                                                                                                                // $('.is-play-section-main').removeClass('is-play-section-main');
                                                                                                                                                                                              },
                                                                                                                                                                                              'resize': function() {},
                                                                                                                                                                                              /* 'scroll': function() {
                                                                                                                                                                                                func.bannerParalax();
                                                                                                                                                                                                func.productDescScroll();
                                                                                                                                                                                              } */
                                                                                                                                                                                            };

                                                                                                                                                                                            $(function() {
                                                                                                                                                                                              app.init();
                                                                                                                                                                                              $(window).on('load', function() {
                                                                                                                                                                                                app.load();
                                                                                                                                                                                              });
                                                                                                                                                                                              $(window).on('resize', function() {
                                                                                                                                                                                                app.resize();
                                                                                                                                                                                              });
                                                                                                                                                                                              $(window).on('scroll', function() {
                                                                                                                                                                                                app.scroll();
                                                                                                                                                                                              })
                                                                                                                                                                                            })

                                                                                                                                                                                            Drupal.behaviors.nitto = {
                                                                                                                                                                                              attach: function(context, settings) {
                                                                                                                                                                                                $('select', context).customSelect("select");

                                                                                                                                                                                                $('.ajax-popup', context).click(function(event) {
                                                                                                                                                                                                  event.preventDefault();
                                                                                                                                                                                                  var target = $(this).data('target');
                                                                                                                                                                                                  $.magnificPopup.open({
                                                                                                                                                                                                    items: {
                                                                                                                                                                                                      src: '#wait2-popup',
                                                                                                                                                                                                      type: 'inline'
                                                                                                                                                                                                    }
                                                                                                                                                                                                  });
                                                                                                                                                                                                  $.ajax({
                                                                                                                                                                                                    url: $(this).attr('href'),
                                                                                                                                                                                                    success: function(html) {
                                                                                                                                                                                                      $(target).html(html);
                                                                                                                                                                                                      Drupal.attachBehaviors(target, {});
                                                                                                                                                                                                      // func.slick();
                                                                                                                                                                                                      $.magnificPopup.open({
                                                                                                                                                                                                        items: {
                                                                                                                                                                                                          src: target,
                                                                                                                                                                                                          type: 'inline'
                                                                                                                                                                                                        }
                                                                                                                                                                                                      });
                                                                                                                                                                                                    }
                                                                                                                                                                                                  });
                                                                                                                                                                                                });

                                                                                                                                                                                                $('.ajax-link', context).click(function(event) {
                                                                                                                                                                                                  event.preventDefault();
                                                                                                                                                                                                  var target = $(this).data('target');
                                                                                                                                                                                                  $.ajax({
                                                                                                                                                                                                    url: $(this).attr('href'),
                                                                                                                                                                                                    success: function(html) {
                                                                                                                                                                                                      $(target).html(html);
                                                                                                                                                                                                      Drupal.attachBehaviors(target, {});
                                                                                                                                                                                                    }
                                                                                                                                                                                                  });
                                                                                                                                                                                                });

                                                                                                                                                                                                $('.store-picture__gallery', context).slick({
                                                                                                                                                                                                  prevArrow: $(".store-arrow-left__img"),
                                                                                                                                                                                                  nextArrow: $(".store-arrow-right__img")
                                                                                                                                                                                                });

                                                                                                                                                                                                // Prettier embeds for YouTubes
                                                                                                                                                                                                $().prettyEmbed({});

                                                                                                                                                                                              })(jQuery, Drupal);
                                                                                                                                                                                            window.open($('#order-form .ext-link').val(), '_blank');
                                                                                                                                                                                          });
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  })(jQuery, Drupal);