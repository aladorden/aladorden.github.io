$(function() {

	$(".owl-header").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: false,
		smartSpeed: 1300,
		dots: true,
	});

	$(".carousel-works").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: false,
		smartSpeed: 500,
		nav: true,
		dots: false,
	});

	$(".twitter-content").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: false,
		smartSpeed: 500,
		nav: true,
		autoHeight: true,
		dots: false,
	});

	// $('.twitter-content .owl-dots').addClass('disabled');
	


	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		slidesPerColumn: 3,
		spaceBetween: 5,
		nextButton: '.button-next',
		prevButton: '.button-prev',
		breakpoints: {
    // when window width is <= 320px
    320: {
    	slidesPerView: 1,
    	slidesPerColumn: 1,
    },
    // when window width is <= 480px
    600: {
    	slidesPerView: 1,
    	slidesPerColumn: 1,
    },
    // when window width is <= 640px
    768:
    {
    	slidesPerView: 2,
    	slidesPerColumn: 1
    },
    991: {
    	slidesPerView: 2,
    	slidesPerColumn: 2,
    }
  }
});

	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

	$(".hamburger").click(function() {
		$(".mnu-mobile").slideToggle();
		return false;
	});

	$(document).click(function(event) {
		if ($(event.target).closest(".mnu-mobile").length) return;
		$(".mnu-mobile").slideUp();
		event.stopPropagation();
	});

	$("body").append('<div class="top"><i class="fa fa-angle-double-up">')

	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass('active');
		} else {
			$(".top").removeClass('active');
		}
	});

});

