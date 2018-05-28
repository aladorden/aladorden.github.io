$(function() {
  //волновой эффект при нажатии - START
  $.fn.yarp = function(o) {
    var o = o || {};
    this.options = {
      colors: ["gray"],
      duration: 750
    }, this.options = $.extend({}, this.options, o), $(this).each(function(o, t) {
      $(t).css({
        overflow: "hidden"
      }), $(t).on("click", function(o) {
        var i = $("<div class='color'></div>").appendTo($(t));
        // $(this).addClass('text_color')
        i.css({
          width: 1,
          height: 1,
          borderRadius: "50%",
          opacity: 1,
          background: '',
          top: o.clientY - ($(t).offset().top - $(window).scrollTop()),
          left: o.clientX - ($(t).offset().left - $(window).scrollLeft()),
          position: "absolute"
        }), setTimeout(function() {
          i.css({
            transform: "scale(1000)",
            opacity: 0,
            transition: "all " + this.options.duration + "ms linear"
          })
        }.bind(this), 0), setTimeout(function() {
          i.remove()
          $(t).removeClass('text_color')
        }, this.options.duration)
      }.bind(this))
    }.bind(this))
  };

  $('.btn').yarp();

  //волновой эффект при нажатии - END


  //Шапка сайта - START
  $('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('body').toggleClass('hidden');
    $('.header_fixed').toggleClass('mnu_active');
    toggle_mnu_height();
  });

  $(document).mouseup(function(e) {
    var div = $(".header_fixed");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass('mnu_active');
      $('.hamburger').removeClass('is-active');
      $('body').removeClass('hidden');
    }
  });


  function toggle_mnu_height() {
    $(window).on('resize', function() {
      var p_h = $(window).height();
      var mnu_h = 2 + p_h - $('.toggle_mnu_top').outerHeight() - parseInt($('.toggle_mnu_bottom').css('padding-top')) - parseInt($('.toggle_mnu_bottom').css('padding-bottom'));
      console.log(p_h + '  и  ' + mnu_h);


      if ($(window).width() < 768) {
        $('.toggle_mnu_bottom .row').css({
          'height': mnu_h,
          'overflow-y': 'scroll'
        });
      } else {
        $('.toggle_mnu_bottom .row').css({
          'height': 'auto',
          'overflow-y': 'hidden'
        });
      }

    }).resize();
  }

  function top_mnu_link_remove() {
    var toggle_width = true

    $(window).on('resize', function() {
      if ($(window).width() < 768) {
        toggle_width = true;

        if (toggle_width) {
          $($(".toggle_mnu_top .col[data-pos='1'] .links_wrap").detach()).attr('data-pos', '1').appendTo(".toggle_mnu_bottom .row > div:last-child");
          $($(".toggle_mnu_top .col[data-pos='3'] .links_wrap").detach()).attr('data-pos', '3').appendTo(".toggle_mnu_bottom .row > div:last-child");
          $('.header_links').removeClass('mobile');
        }
      } else {
        $('.header_links').siblings('ul').show();
        toggle_width = false;
        if (!toggle_width) {
          $('.header_links').addClass('mobile');
          $($(".toggle_mnu_bottom .links_wrap[data-pos='1']").detach()).appendTo(".toggle_mnu_top .col[data-pos='1'] .left_menu");
          $($(".toggle_mnu_bottom .links_wrap[data-pos='3']").detach()).appendTo(".toggle_mnu_top .col[data-pos='3'] .right_menu");
        }
      }

    }).resize();
  }
  top_mnu_link_remove();

  $('.header_links .title').click(function() {
    $(this).toggleClass('arrow');
    $('.header_links .title').not(this).removeClass('arrow')
    $('.header_links .title').not(this).siblings('ul').slideUp();
    $(this).siblings('ul').slideToggle();
  })
  //Шапка сайта - END

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


  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    swipeToSlide: true,
    adaptiveHeight: true,
    infinite: true,
    touchThreshold: 15,
    useTransform: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        arrows: false,
      }
    }]
  });

  $('.slider-nav')
    .on('init', function(event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      arrows: true,
      focusOnSelect: false,
      infinite: true,
      touchThreshold: 15,
      swipeToSlide: false,
    });

  $('.slider-single').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slider-nav').slick('slickGoTo', nextSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + nextSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });

  $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });

  var s = $(".header_fixed");
  var pos = s.position();
  var windowpos = $(window).scrollTop();
  if (windowpos < 1) {
    s.removeClass("stick");
  } else {
    s.addClass("stick");
  }
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (windowpos < 1) {
      s.removeClass("stick");
    } else {
      s.addClass("stick");
    }
  });



  $('.images_wrap .slider').slick({
    slidesToShow: 5,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    touchThreshold: 15,
    pauseOnHover: false,
    variableWidth: true,
    arrows: false,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        infinite: true,
        variableWidth: false,
      }
    }]
  });

  //позиционирование слайдера внутри картинки - START
  $(window).on('resize', function() {
    h = $('section.interface .image_center_absolute img').height() * 0.73;
    if ($(window).width() <= 355) {
      b = $('section.interface .image_center_absolute img').height() * 0.15 - 32;
    } else {
      b = $('section.interface .image_center_absolute img').height() * 0.15 - 32;
    }

    $('section.interface .images_wrap .slider img').height(h);
    $('section.interface .images_wrap .slider').css('bottom', b);
  }).resize();
  //позиционирование слайдера внутри картинки - END

  $('form').submit(function(e) {
    e.preventDefault();
  })
});