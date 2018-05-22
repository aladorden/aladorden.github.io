$(function() {

  $.scrollify({
    section: ".scrolify",
    updateHash: false,
    scrollSpeed: 1000,
    before: function(index) {

      $('body').on('DOMMouseScroll mousewheel', function(event) {

        setTimeout(function() {
          if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
            if (index < 3) {
              setTimeout(function() {
                $(".header_wrap").addClass("active");
                console.log('down' + index)
              }, 500)
            }
          } else {
            if ($.scrollify.currentIndex() <= 2) {
              setTimeout(function() {
                $(".header_wrap").removeClass("active");
              }, 500)
            } else {
              setTimeout(function() {
                $(".header_wrap").addClass("active");
              }, 500)
            }
          }
        }, 500)


      });
    },
    afterRender: function() {

      $('body').one('DOMMouseScroll mousewheel', function(event) {
        if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
          if ($.scrollify.currentIndex() <= 1) {
            setTimeout(function() {
              $(".header_wrap").addClass("active");
              console.log('down' + $.scrollify.currentIndex())
            }, 500)
          }
        }


      });
    },
  });


  $('.overview_slider').on({
    'mouseenter': function() {
      $.scrollify.disable()

    },
    'mouseleave': function() {
      $.scrollify.enable()

    }
  });

  //Стилизация <select/> - START
  $('select').select2({
    minimumResultsForSearch: -1
  });
  //Стилизация <select/> - End


  //slider в шапке - START
  var mySwiper = new Swiper('.slider_header .swiper-container', {
    effect: 'fade',
    loop: true,
    speed: 500,
    initialSlide: 0,
    preventInteractionOnTransition: true,
    slideActiveClass: 'swiper_active',
    slidesPerView: '1',
  });
  var pagination_active = function() {
    var real_in = mySwiper.realIndex + 1
    $('.slider_header .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
    $('.slider_header .swiper-pagination-bullet:nth-child(' + real_in + ')').addClass('swiper-pagination-bullet-active');
  }
  var pagination = function() {
    var total_slides = mySwiper.slides.length - 2

    for (i = 1; i <= total_slides; i++) {
      $('.slider_header .swiper-pagination').append('<span class="swiper-pagination-bullet"/>')
    }
    pagination_active();

    var clickNumber = 0;
    var lastClickTime = 0;
    var delay = 2300;
    $('.slider_header .swiper-pagination-bullet').click(function() {
      var ind = $(this).index() + 1
      var seconds = new Date().getTime() / delay;
      if ((seconds - lastClickTime) > 2) {
        $('.slider_header .swiper-slide').removeClass('wheel_load');
        $('.slider_header .swiper-slide').removeClass('wheel');
        $('.slider_header .swiper_active,.slider_header .swiper-slide-duplicate-active').addClass('wheel');
        setTimeout(function() {
          $('.slider_header .swiper-slide').addClass('wheel_slider');
          setTimeout(function() {
            $('.slider_header .swiper-slide').removeClass('wheel_slider');
          }, delay + 500)
          mySwiper.slideTo(ind, 500, false);
          pagination_active();
        }, delay + 170)
        clickNumber++;
        lastClickTime = seconds;
      }
    })
  }
  pagination()



  var clickNumber = 0;
  var lastClickTime = 0;

  function slide_nav_next(nav_cl, delay) {
    $(nav_cl).click(function() {

      var seconds = new Date().getTime() / delay;
      if ((seconds - lastClickTime) > 2) {
        $('.slider_header .swiper-slide').removeClass('wheel_load');
        $('.slider_header .swiper-slide').removeClass('wheel');
        $('.slider_header .swiper_active,.slider_header  .swiper-slide-duplicate-active').addClass('wheel');
        setTimeout(function() {
          $('.slider_header .swiper-slide').addClass('wheel_slider');
          setTimeout(function() {
            $('.slider_header .swiper-slide').removeClass('wheel_slider');
          }, delay + 500)
          mySwiper.slideNext()
          pagination_active();
        }, delay + 170)
        clickNumber++;
        lastClickTime = seconds;
      }
    });
  }

  function slide_nav_prev(nav_cl, delay) {

    $(nav_cl).click(function() {

      var seconds = new Date().getTime() / delay;
      if ((seconds - lastClickTime) > 2) {
        $('.slider_header .swiper-slide').removeClass('wheel_load');
        $('.slider_header .swiper-slide').removeClass('wheel');
        $('.slider_header .swiper_active, .swiper-slide-duplicate-active').addClass('wheel');
        setTimeout(function() {
          $('.slider_header .swiper-slide').addClass('wheel_slider');
          setTimeout(function() {
            $('.slider_header .swiper-slide').removeClass('wheel_slider');
          }, delay + 500)
          mySwiper.slidePrev()
          pagination_active();
        }, delay + 170)
        clickNumber++;
        lastClickTime = seconds;
      }
    });
  }
  setTimeout(function() {
    slide_nav_next('.slider_header .slider_header_nav .next', 2300)
    slide_nav_prev('.slider_header .slider_header_nav .prev', 2300)
  }, 3100)
  //slider в шапке - END

  //Подбор шин - STAR
  var pick_tires_parent = $('.picking_tires_form')
  $('.form_picking_tires .toggle_button').click(function() {
    console.log('clickable')
    $('.form_picking_tires .toggle_button').not(this).removeClass('active');
    $(this).addClass('active')
  })
  //Подбор шин - END


  //Фото до/после - START
  var object = document.querySelector('.compare'),
    initX, firstX;

  object.addEventListener('mousedown', function(e) {

    e.preventDefault();
    initX = this.offsetLeft;
    initY = this.offsetTop;
    firstX = e.pageX;
    firstY = e.pageY;

    this.addEventListener('mousemove', dragIt, false);

    window.addEventListener('mouseup', function() {
      object.removeEventListener('mousemove', dragIt, false);
    }, false);

  }, false);

  object.addEventListener('touchstart', function(e) {

    e.preventDefault();
    initX = this.offsetLeft;

    var touch = e.touches;
    firstX = touch[0].pageX;

    this.addEventListener('touchmove', swipeIt, false);

    window.addEventListener('touchend', function(e) {
      e.preventDefault();
      object.removeEventListener('touchmove', swipeIt, false);
    }, false);

  }, false);

  function dragIt(e) {
    var width = $('.compare').width()
    var l = e.pageX;
    // console.log(l)
    $('#handle').css('left', l)
    $('#separator').css('left', l)
    $('.images-compare-after').css('width', width - l)
    $('.images-compare-before').css('width', l)

    $('#handle').css({
      'transition': 'all 0s ease'
    });
    $('#separator').css({
      'transition': 'all 0s ease',
    });
    $('.images-compare-after').css({
      'transition': 'all 0s ease',
    });
    $('.images-compare-before').css({
      'transition': 'all 0s ease',
    });
  }

  function swipeIt(e) {
    var width = $('.compare').width()
    var contact = e.touches;
    l = contact[0].pageX;
    $('#handle').css('left', l)
    $('#separator').css('left', l)
    $('.images-compare-after').css('width', width - l)
    $('.images-compare-before').css('width', l)

    $('#handle').css({
      'transition': 'all 0s ease'
    });
    $('#separator').css({
      'transition': 'all 0s ease',
    });
    $('.images-compare-after').css({
      'transition': 'all 0s ease',
    });
    $('.images-compare-before').css({
      'transition': 'all 0s ease',
    });
  }



  $(window).resize(function() {
    $width = $('.compare').width()
  })
  $('div.images-compare-before:not(#handle)').click(function(e) {
    var e = e.pageX
    var l = $('#handle').offset().left

    $width = $('.compare').width()

    $('#handle').css({
      'left': $width,
      'transition': 'all .5s ease'
    });
    $('#separator').css({
      'left': $width,
      'transition': 'all .5s ease',
    });
    $('.images-compare-after').css({
      'width': 0,
      'transition': 'all .5s ease',
    });
    $('.images-compare-before').css({
      'width': $width,
      'transition': 'all .5s ease',
    });
  });
  $('div.images-compare-after:not(#handle)').click(function(e) {
    var e = e.pageX
    var l = $('#handle').offset().left
    $width = $('.compare').width()
    $('#handle').css({
      'left': 0,
      'transition': 'all .5s ease'
    });
    $('#separator').css({
      'left': 0,
      'transition': 'all .5s ease',
    });
    $('.images-compare-after').css({
      'width': $width,
      'transition': 'all .5s ease',
    });
    $('.images-compare-before').css({
      'width': 0,
      'transition': 'all .5s ease',
    });
  });

  //Фото до/после - END


  //modal-youtube - START
  function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function() {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-theVideo"),
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function() {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  }
  autoPlayYouTubeModal();
  //modal-youtube - END

  var mySwiper_gallery = new Swiper('.slider_gallery .swiper-container', {
    effect: 'swipe',
    loop: false,
    speed: 500,
    initialSlide: 0,
    autoplay: true,
    slidesPerView: '1',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });


  var mySwiper_overview = new Swiper('.overview_slider .swiper-container', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    direction: 'vertical',
    mousewheel: {
      invert: false,
    },
    slidesPerView: '4',
    progressbarOpposite: true
  });


  var video = $(".overview_slider .swiper-slide.active").data('video');
  var bg = $(".overview_slider .swiper-slide.active").data('image_bg');
  var title = $(".overview_slider .swiper-slide.active .title").text();
  $('section.overview iframe').attr('src', video);
  $('section.overview .video_wrap img.bg').attr('src', bg);
  $('section.overview .video_wrap .title').text(title);


  $('.overview_slider .swiper-slide').click(function() {
    var video = $(this).data('video');
    var bg = $(this).data('image_bg');
    var title = $(this).find('.title').text();
    $('section.overview iframe').attr('src', video);
    $('section.overview .video_wrap img.bg').attr('src', bg);
    $('section.overview .video_wrap').removeClass('active');
    $('section.overview .video_wrap .title').text(title);
    $('.overview_slider .swiper-slide').not(this).removeClass('active');
    $(this).addClass('active')
  });

  $('section.overview .video_wrap .play_video_btn').click(function() {
    var src = $(this).siblings('iframe').attr('src');
    $(this).parents('.video_wrap').addClass('active')
    $(this).siblings('iframe').attr('src', src + '?autoplay=1')

  })
});