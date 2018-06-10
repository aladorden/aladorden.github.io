
        //Зимние/летние шины - START
        $(document).ready(function() {
          var l
          var width
          var w_w
          var season_width
          var val

          function pos_less() {
            $('#handle').css('left', season_width);
            $('.images-compare-after').css('width', w_w - season_width);
            $('.images-compare-before').css('width', season_width);

            $('.images-compare-before .season_wrap .h2').addClass('move');
            $('.images-compare-after .season_wrap .h2').removeClass('move');

            $('.images-compare-before .catalog_modal ').mCustomScrollbar('scrollTo', 'top');
            $('.images-compare-after .catalog_modal ').mCustomScrollbar('scrollTo', 'top');

          }


          function pos_more() {
            $('#handle').css('left', w_w - season_width);
            $('.images-compare-after').css('width', season_width);
            $('.images-compare-before').css('width', w_w - season_width);

            $('.images-compare-before .season_wrap .h2').removeClass('move');
            $('.images-compare-after .season_wrap .h2').addClass('move');

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

            if (val <= 25) {
              $('.images-compare-before .season_wrap').addClass('show');
              $('.images-compare-after .season_wrap').removeClass('show')

              $('.images-compare-before').removeClass('show_wheel');
              $('.images-compare-after').removeClass('show_wheel');
              $('.images-compare-after').addClass('show_wheel');
              $('.img-compare').attr('data-direct', 'left');

              pos_transition(.5)
              pos_less();
            } else if (val >= 75) {

              $('.images-compare-after .season_wrap').addClass('show');
              $('.images-compare-before .season_wrap').removeClass('show');

              $('.images-compare-before').removeClass('show_wheel');
              $('.images-compare-after').removeClass('show_wheel');
              $('.images-compare-before').addClass('show_wheel');
              $('.img-compare').attr('data-direct', 'right');
              pos_transition(.5)
              pos_more();
            } else {
              $('.img-compare').attr('data-direct', 'center');
            }

            if ((catalog_show_1 !== 'true') && (catalog_show_2 !== 'true')) {

            } else {
              if (val <= 25) {
                $('.images-compare-before').attr('data-catalog', 'false');
                $('.images-compare-after').attr('data-catalog', 'true');
              } else if (val >= 75) {
                $('.images-compare-before').attr('data-catalog', 'true');
                $('.images-compare-after').attr('data-catalog', 'false');
              } else {

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
                $('.images-compare-before .season_wrap').addClass('show');
                $('.images-compare-after').addClass('show_wheel');
              } else if (val >= 75) {
                $('.images-compare-after .season_wrap').addClass('show');
                $('.images-compare-before').addClass('show_wheel');
              } else {
                $('.images-compare-after .season_wrap').removeClass('show');
                $('.images-compare-before').removeClass('show_wheel');

                $('.images-compare-before .season_wrap').removeClass('show');
                $('.images-compare-after').removeClass('show_wheel');
              }

              if (l <= season_width) {
                pos_less();
                pos_transition(.5)
              } else if (l >= w_w - season_width) {
                pos_more();
                pos_transition(.5)
              } else {
                pos_drag();
                pos_transition(0);
                $('.images-compare-before .season_wrap .h2').removeClass('move');
                $('.images-compare-after .season_wrap .h2').removeClass('move');
              }
            } else {

              if (val <= 20) {
                $('.images-compare-before .season_wrap').addClass('show');
              } else if (val >= 80) {
                $('.images-compare-after .season_wrap').addClass('show');
              } else {
                $('.images-compare-after .season_wrap').removeClass('show');
                $('.images-compare-before .season_wrap').removeClass('show');
              }

              if (l <= season_width) {
                pos_less();
                pos_transition(.5)
              } else if (l >= w_w - season_width) {
                pos_more();
                pos_transition(.5)
              } else {

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
            var wheel_center_pos_left = parent.find('.wheel').offset().left
            var pos_left_wheel_center = $('.images-compare-before .wheel').offset().left - 20 + $('.images-compare-before .wheel').width() / 2

            var pos_left = parent.find('.rotate img').offset().left - 20;
            var width_center_wheel = $('.img-compare .images-compare-before .wheel').width();
            var width_wheel_bg = $('.img-compare .images-compare-before .wheel_bg').width();


            parent.find('.mask_wheel').remove();
            parent.find('.compare-wrapper').append('<div class="mask_wheel"><img src="' + bg_img + '"></div>');
            parent.find('.mask_wheel').width(w + 80);
            parent.find('.mask_wheel').height(w_h);


            var width_wheel = $('.img-compare .images-compare-before .wheel').width();
            var total_pos_Left = (w_w / 2) + (width_wheel / 2);

            $('.img-compare .images-compare-before .wheel').css('left', w_w / 2 - width_center_wheel / 2 + 'px');
            $('.img-compare .images-compare-before .wheel_bg').css('left', total_pos_Left - $('.img-compare .images-compare-before .mask_wheel').width() + 'px');


            parent.find('.mask_wheel').css('left', total_pos_Left - $('.img-compare .images-compare-before .mask_wheel').width() - 30 + 'px');
            parent.find('.mask_wheel img').css('left', (total_pos_Left - $('.img-compare .images-compare-before .mask_wheel').width() - 30) * -1 + 'px');
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
            var w = parent.find('.rotate img').width();
            var h = parent.find('.rotate img').height();
            var pos_left = w_w - parent.find('.rotate img').offset().left - 100 - w;
            var width_center_wheel = $('.img-compare .images-compare-after .wheel').width();
            var pos_right_wheel_center = $('.images-compare-after .wheel').offset().left - 20 + $('.images-compare-after .wheel').width() / 2
            var width_wheel_bg = $('.img-compare .images-compare-after .wheel_bg').width();


            var width_wheel = $('.img-compare .images-compare-after .wheel').width();
            var total_pos_right = (w_w / 2) + (width_wheel / 2);


            parent.find('.wheel').css('right', w_w / 2 - width_center_wheel / 2 + 'px');
            parent.find('.mask_wheel').width(w + 80);
            parent.find('.mask_wheel').height(w_h);

            parent.find('.wheel_bg').css('right', total_pos_right - $('.img-compare .images-compare-after .mask_wheel').width() + 'px');
            parent.find('.mask_wheel').css('right', total_pos_right - $('.img-compare .images-compare-after .mask_wheel').width() - 30 + 'px');
            parent.find('.mask_wheel img').css('right', (total_pos_right - $('.img-compare .images-compare-after .mask_wheel').width() - 30) * -1 + 'px');

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
              $('.images-compare-after').css('width', width - handle);
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



          //Catalog-Modal-START;
          function move_direction() {
            var direction = "",
              oldx = 0;
            $("body").mousemove(function(e) {

              if (e.pageX < oldx) {
                direction = "left"
              } else if (e.pageX > oldx) {
                direction = "right"
              }
              oldx = e.pageX;

            });

            function mouse_move_wheel() {
              var w_w = $(window).width()
              var wheel_w = $('.images-compare-before').find('.wheel_bg').width()
              var handle_pos = $('#handle').offset().left
              var rotate_deg = (handle_pos - wheel_w) / 2.5
              // console.log('translateX(Это полный  -'+ (w_w - handle_pos - wheel_w - 100)+ 'px)')
              // console.log('translateX(Это handle_pos '+ (handle_pos)+ 'px)')

              $('.images-compare-after[data-catalog="true"] .wheel_bg *, .images-compare-before[data-catalog="true"] .wheel_bg *').css('transition', 'all .4s ease-out 0s');

              if (val <= 20) {
                $('.images-compare-after[data-catalog="false"] .wheel_bg').css({
                  'transform': 'translateX(' + (w_w - 100) * -1 + 'px) rotate(' + -360 * 1.1 + 'deg)',
                  'right': '0% !important',
                  'transition': 'all 1s ease-in-out 0s'
                });
                $('.images-compare-after[data-catalog="false"] .wheel_bg .rotate .shadow').css({
                  'transform': 'rotate(' + -360 * 1.1 + 'deg)',
                  'transition': 'all 1s ease-out 0s'
                });

                $('.images-compare-before[data-catalog="false"] .wheel_bg').css({
                  'transform': 'translateX(' + (handle_pos - wheel_w - 100) + 'px) rotate(' + (rotate_deg) + 'deg)',
                  'left': '0% !important',
                  'transition': 'all .4s ease-out 0s'
                });
                $('.images-compare-before[data-catalog="false"] .wheel_bg .rotate .shadow').css({
                  'transform': 'rotate(-' + (rotate_deg) + 'deg)',
                  'transition': 'all .4s ease-out 0s'
                });

                if (direction == "left") {
                  $('.images-compare-before[data-catalog="false"] .wheel_bg').css({
                    'transform': 'translateX(' + -wheel_w + 'px) rotat)e(' + (0) + 'deg)',
                    'left': '0% !important',
                    'transition': 'all .4s ease-out 0s'
                  });
                  $('.images-compare-before[data-catalog="false"] .wheel_bg .rotate .shadow').css({
                    'transform': 'rotate(-' + (0) + 'deg)',
                    'transition': 'all .4s ease-out 0s'
                  });
                }

              } else if (val >= 80) {
                $('.images-compare-before[data-catalog="false"] .wheel_bg').css({
                  'transform': 'translateX(' + (w_w + 100) + 'px) rotate(' + 360 * 2.2 + 'deg)',
                  'left': '0% !important',
                  'transition': 'all 1s ease-out 0s'
                });
                $('.images-compare-before[data-catalog="false"] .wheel_bg .rotate .shadow').css({
                  'transform': 'rotate(' + -360 * 2.2 + 'deg)',
                  'transition': 'all 1s ease-out 0s'
                });
                // $('.images-compare-before .wheel_bg *, .images-compare-after .wheel_bg *,.images-compare-before .wheel_bg, .images-compare-after .wheel_bg').css('transform', '');
              } else {
                $('.images-compare-before[data-catalog="false"] .wheel_bg').css({
                  'transform': 'translateX(' + (handle_pos - wheel_w - 100) + 'px) rotate(' + (rotate_deg) + 'deg)',
                  'left': '0% !important',
                  'transition': 'all .4s ease-out 0s'
                });
                $('.images-compare-before[data-catalog="false"] .wheel_bg .rotate .shadow').css({
                  'transform': 'rotate(-' + (rotate_deg) + 'deg)',
                  'transition': 'all .4s ease-out 0s'
                });
                // $('.images-compare-after[data-catalog="false"] .wheel_bg').css({
                //   'transform': 'translateX(' + (w_w - handle_pos - wheel_w - 100) * -1 + 'px) rotate(' + (rotate_deg) + 'deg)',
                //   'right': '0% !important',
                //   'transition': 'all .4s ease-out 0s'
                // });
                // $('.images-compare-after[data-catalog="false"] .wheel_bg .rotate .shadow').css({
                //   'transform': 'rotate(-' + (rotate_deg) + 'deg)',
                //   'transition': 'all .4s ease-out 0s'
                // });
                $('.images-compare-before[data-catalog="false"] .wheel_bg *, .images-compare-after[data-catalog="false"] .wheel_bg *').css('transition', 'all .4s ease-out 0s');
              }
            }

            container.on("move", function(e) {
              var l_e = e.pageX;
              var catalog_show_1 = $('.images-compare-before').attr('data-catalog');
              var catalog_show_2 = $('.images-compare-after').attr('data-catalog');
              var season_width = $('.img-compare .season_wrap').width();
              if ((catalog_show_1 !== 'true') && (catalog_show_2 !== 'true')) {

              } else {
                mouse_move_wheel();
                $('section.compare .img-compare').addClass('catalog_modal');
                if (val <= 20) {


                  if (direction == 'left') {
                    $('.images-compare-before').attr('data-catalog', 'false');
                    $('.images-compare-after').attr('data-catalog', 'true');
                    $('section.compare .img-compare').attr('data-direct', 'left');
                    pos_transition(.5)
                    pos_less();
                  } else {
                    if (l_e <= season_width) {
                      pos_transition(.5)
                      pos_less();
                    } else {
                      pos_transition(0)
                      pos_drag();
                    }
                  }

                  // $('.images-compare-before').removeClass('show_wheel');
                  // $('.images-compare-after').addClass('show_wheel');

                } else if (val >= 80) {
                  if (direction == 'right') {
                    $('.images-compare-before').attr('data-catalog', 'true');
                    $('.images-compare-after').attr('data-catalog', 'false');
                    $('section.compare .img-compare').attr('data-direct', 'right');
                    pos_transition(.5)
                    pos_more();
                  } else {
                    if (l_e >= w_w - season_width) {
                      pos_transition(.5)
                      pos_more();
                    } else {
                      pos_transition(0)
                      pos_drag();
                    }
                  }
                  // $('.images-compare-before').addClass('show_wheel');
                  // $('.images-compare-after').removeClass('show_wheel');

                } else {
                  $('.images-compare-before .season_wrap .h2').removeClass('move');
                  $('.images-compare-after .season_wrap .h2').removeClass('move');
                  $('section.compare .img-compare').attr('data-direct', 'center');

                  pos_transition(0)
                  pos_drag();
                }
              }
            });
          }
          move_direction()

          function catalog_modal(period_class_div) {

            var w_h = $(window).height(),
              parent_sect = $('.section-season');

            $('.catalog_modal' + period_class_div + '').remove().appendTo('.img-compare ' + period_class_div + '');
            $('section.compare ' + period_class_div + ' .images-compare-label').click(function() {
              $('.images-compare-before .season_wrap .h2').removeClass('move');
              $('.images-compare-after .season_wrap .h2').removeClass('move');
              $('section.compare .img-compare').attr('data-direct', 'center');

              setTimeout(function() {
                $('.images-compare-before .rotate img, .images-compare-after .rotate img, .images-compare-before .rotate .shadow, .images-compare-after .rotate .shadow').css('transition', 'all 0s ease 0s');
                $('.images-compare-before').removeClass('show_wheel');
                $('.images-compare-after').removeClass('show_wheel');

                $('.images-compare-before').addClass('show_wheel_catalog');
                $('.images-compare-after').addClass('show_wheel_catalog');
              }, 1500)
              $('#menu').fadeOut();
              var dir = $('.img-compare').attr('data-direct');

              if (dir == "left") {
                console.log('left');
                $('section.compare ' + period_class_div + '').attr('data-catalog', 'true');
                $('section.compare div:not(' + period_class_div + ')').attr('data-catalog', 'false');
                $('section.compare ' + period_class_div + ' .compare-wrapper').addClass('blur');
                setTimeout(function() {
                  $.fn.fullpage.setMouseWheelScrolling(false);
                  $.fn.fullpage.setAllowScrolling(false);
                }, 100)

              } else if (dir == "center") {
                width = $('.compare').width();
                w_w = $(window).width();
                season_width = $('.img-compare .season_wrap').width();
                $('section.compare ' + period_class_div + '').attr('data-catalog', 'true');
                $('section.compare div:not(' + period_class_div + ')').attr('data-catalog', 'false');
                $('section.compare ' + period_class_div + ' .compare-wrapper').addClass('blur');
                if (period_class_div == '.winter') {
                  $('.images-compare-before .season_wrap').addClass('show');
                  $('.images-compare-after .season_wrap').removeClass('show');
                  $('.images-compare-before').removeClass('show_wheel');
                  $('.images-compare-after').addClass('show_wheel');
                  pos_transition(.5)
                  pos_less();
                } else {
                  $('.images-compare-before .season_wrap').removeClass('show');
                  $('.images-compare-after .season_wrap').addClass('show');
                  $('.images-compare-before').addClass('show_wheel');
                  $('.images-compare-after').removeClass('show_wheel');
                  pos_transition(.5)
                  pos_more();
                }
                setTimeout(function() {
                  $.fn.fullpage.setMouseWheelScrolling(false);
                  $.fn.fullpage.setAllowScrolling(false);
                }, 100)

              } else if (dir == "right") {
                console.log('right');
                $('section.compare ' + period_class_div + '').attr('data-catalog', 'true');
                $('section.compare div:not(' + period_class_div + ')').attr('data-catalog', 'false');
                $('section.compare ' + period_class_div + ' .compare-wrapper').addClass('blur');
                setTimeout(function() {
                  $.fn.fullpage.setMouseWheelScrolling(false);
                  $.fn.fullpage.setAllowScrolling(false);
                }, 100)
              }

            });

            $('section.compare .catalog-window__close-wrap').click(function() {
              $('section.compare .img-compare').removeClass('catalog_modal');
              $('.images-compare-before').removeClass('show_wheel_catalog');
              $('.images-compare-after').removeClass('show_wheel_catalog');

              $('section.compare .img-compare').attr('data-direct', 'center');
              $('section.compare ' + period_class_div + '').attr('data-catalog', 'false');
              $('section.compare ' + period_class_div + ' .compare-wrapper').removeClass('blur');
              $('section.compare .images-compare-before, section.compare .images-compare-after').removeClass('show_wheel');

              $('.images-compare-before .wheel_bg *, .images-compare-after .wheel_bg *').css('transition', '');
              $('.images-compare-before .wheel_bg *, .images-compare-after .wheel_bg *,.images-compare-before .wheel_bg, .images-compare-after .wheel_bg').css('transform', '');
              $.fn.fullpage.setMouseWheelScrolling(true);
              $.fn.fullpage.setAllowScrolling(true);
              $('#menu').fadeIn();
              $('.images-compare-before').attr('data-catalog', 'false');
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
                });
                $('.images-compare-before .season_wrap').removeClass('show');
                $('.images-compare-after .season_wrap').removeClass('show');
              }
              setTimeout(function() {
                seasonCompareReset(.40)
              }, 0)


            });
          }


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
        });
        //Зимние/летние шины- END
