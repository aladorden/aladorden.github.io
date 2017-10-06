

$(document).ready(function() {

    $('.phone-mask').mask("+7 (999) 999-9999");

    $('.complects-slider').owlCarousel({
        items : 1,
        singleItem : true,
        navigation : false,
        pagination : false,
        autoHeight : false,
        addClassActive : true,
        afterAction : function() {
            var item = this.owl.currentItem;
            var items = this.owl.owlItems.length - 1;
            var prevItem = (item == 0) ? items : item - 1;
            var nextItem = (item == items) ? 0 : item + 1;
            var prevTitle = $('.complects .items .owl-item:eq(' + prevItem + ') .title').html();
            var nextTitle = $('.complects .items .owl-item:eq(' + nextItem + ') .title').html();
            $('.complects .prev p').html(prevTitle);
            $('.complects .next p').html(nextTitle);
        },
        afterInit : function() {
            var complectsSlider = this;
            $('.complects .next').click(function() {
                complectsSlider.next();
                return false;
            });
            $('.complects .prev').click(function() {
                complectsSlider.prev();
                return false;
            });
        }
    });

    $('.reviews-slider').owlCarousel({
        items : 3,
        navigation : false,
        pagination : false,
        autoHeight : false,
        itemsCustom : [
        [0, 1],
        [400, 2],
        [700, 3],
        [1100, 4],
        [1200, 3],
        [1600, 3]
        ],
        afterInit : function() {
            var reviewsSlider = this;
            $('.reviews .controls .next').click(function() {
                reviewsSlider.next();
                return false;
            });
            $('.reviews .controls .prev').click(function() {
                reviewsSlider.prev();
                return false;
            });
            setTimeout(function() {
                var contHeight = $('.reviews .reviews-slider').height();
                $('.reviews .reviews-slider .item').height(contHeight - 20);
            }, 300)

        }
    });

    $('.popup-btn').magnificPopup({
        type: 'inline',
        mainClass: 'my-mfp-slide-bottom',
        removalDelay: 300,
        callbacks: {
            open: function() {
                $('body').addClass('popup-open');
                return false;
            },
            close: function() {
                $('body').removeClass('popup-open');
                return false;
            }
        }
    });

    function top_bar_pos() {
        var offset_top = $(window).scrollTop();
        var diff = 120 - offset_top;

        if (diff < 0) {
            $('body').addClass('fixed-top');
        }
        else {
            $('body').removeClass('fixed-top');
        }
    }
    top_bar_pos();
    $(window).scroll(function() {
        top_bar_pos();
    });

    $(".image1").click(function(){
        $('.image1').toggleClass("shadow");
        $('.image2, .image3, .image4').removeClass("shadow");
        $('.answ-2, .answ-3, .answ-4').slideUp("slow");
        $('.answ-1').slideToggle("slow");

    })

    $(".image2").click(function(){
        $('.image2').toggleClass("shadow");
        $('.image1, .image3, .image4').removeClass("shadow");
        $('.answ-1, .answ-3, .answ-4').slideUp("slow");
        $('.answ-2').slideToggle("slow");

    })
    $(".image3").click(function(){
        $('.image3').toggleClass("shadow");
        $('.image1, .image2, .image4').removeClass("shadow");
        $('.answ-2, .answ-1, .answ-4').slideUp("slow");
        $('.answ-3').slideToggle("slow");

    })
    $(".image4").click(function(){
        $('.image1, .image2, .image3').removeClass("shadow");
        $('.image4').toggleClass("shadow");
        $('.answ-2, .answ-3, .answ-1').slideUp("slow");
        $('.answ-4').slideToggle("slow");


    })
    // $(".image5").click(function(){
    //     $('.image5').toggleClass("shadow");
    //     $('.image1, .image2, .image3, .image4').removeClass("shadow");
    //     $('.answ-2, .answ-3, .answ-4, .answ-1').slideUp("slow");
    //     $('.answ-5').slideToggle("slow");
    // })




});

//mail
$(document).ready(function(){

  $('form').submit(function() {
    var cur = jQuery(this);
    var data = jQuery(this).find("input, textarea").serialize();
    cur.find(".error").removeClass("error");
    jQuery.post("/templates/landing/send.php", data, function(out){
      if(out.status == "ok") {
        $('.popup-btn').magnificPopup('close');
        setTimeout(function() {
            $.magnificPopup.open({
              items: { src: '#form-send-success', type: 'inline'},
              removalDelay: 300, mainClass: 'my-mfp-slide-bottom'
          });
        }, 300);
    }
    else cur.find("input[name="+out.errname+"]").addClass("error");
}, "json");

    return false;
});
});

//counter

function in_array(needle, haystack) {
    var found = 0;
    for (var i = 0, len = haystack.length; i < len; i++) {
        if (haystack[i] == needle) return true;
        found++;
    }
    return false;
}

$(document).ready(function() {


      // setInterval(function() { 
      //        $("section.complects .items").css({'height':($(".owl-carousel .owl-wrapper-outer").height()+'px')});
      //  }, 50);


      $('.special .timer').countdown('2017/11/04', function(event) {

        var dayName = 'дней';
        var hoursName = 'часов';
        var minutesName = 'минут';
        var secondsName = 'секунд';

        if (in_array(event.offset.seconds, [1, 21, 31, 41, 51])) secondsName = 'секунда';
        if (in_array(event.offset.seconds, [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54])) secondsName = 'секунды';

        if (in_array(event.offset.minutes, [1, 21, 31, 41, 51])) minutesName = 'минута';
        if (in_array(event.offset.minutes, [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54])) minutesName = 'минуты';

        if (in_array(event.offset.hours, [1, 21])) hoursName = 'час';
        if (in_array(event.offset.hours, [2, 3, 4, 22, 23, 24])) hoursName = 'часа';

        if (in_array(event.offset.daysToMonth, [1, 21, 31])) dayName = 'день';
        if (in_array(event.offset.daysToMonth, [2, 3, 4, 22, 23, 24])) dayName = 'дня';

        var $this = $(this).html(event.strftime(''
            + '<p class="days"><span>%D</span> ' + dayName + '</p>'
            + '<p class="hours"><span>%H</span> ' + hoursName + '</p>'
            + '<p class="mins"><span>%M</span> ' + minutesName + '</p>'
            + '<p class="seconds"><span>%S</span> ' + secondsName + '</p>'));

    });
  });

