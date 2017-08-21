

$(document).ready(function() {
	if ($(window).width() > 991) {
		$(document).on('scroll',function(){
			if($(this).scrollTop() > 1){
				$('.top-line').addClass('sticky');
				$('.main-head .top-line .logo a img').attr("src", "img/logo-dark.png");
			} else{
				$('.top-line').removeClass('sticky');
				$('.main-head .top-line .logo a img').attr("src", "img/logo.png");
			}
		});
	} else {
		$('.top-line').removeClass('sticky');
		$('.main-head .top-line .logo a img').attr("src", "img/logo.png");
	}

$(function(){ // this replaces document.ready
	setTimeout(function(){
		$('#preloader').fadeOut('slow', function() {
			$(this).remove();
		});
	}, 300);
});

$(document).ready(function() {
	setTimeout(function(){
		$('.block-video .vid-cont').css("display", "none");
	}, 300);
});
//sliders

$(".owl-fade").owlCarousel({
	items: 1,
	loop: true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	nav: true,
	mouseDrag: false,
	touchDrag: false,
	dots: true,
	navText: false,
	lazyload: true,
});

$(".logos").owlCarousel({
	loop: true,
	smartSpeed: 700,
	responsiveClass: true,
	items: 4,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		992: {
			items: 3
		},
		1200: {
			items: 4
		},
	}
});

$(".carousel-news").owlCarousel({
	loop: true,
	autoplay: true,
	items: 3,
	nav: true,
	navText: false,
	smartSpeed: 700,
	margin: 30,
	smartSpeed: 700,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		1200: {
			items: 3
		},
	}
});

$('.carousel-news .carousel-news-item').on('mouseenter',function(e){
	$(this).closest('.carousel-news').trigger('stop.owl.autoplay');
})
$('.carousel-news .carousel-news-item').on('mouseleave',function(e){
	$(this).closest('.carousel-news').trigger('play.owl.autoplay',[500]);
})


owl = $('.owl-fade').owlCarousel();
$(".fade-prev").click(function () {
	owl.trigger('prev.owl.carousel');
});

$(".fade-next").click(function () {
	owl.trigger('next.owl.carousel');
});

// owl = $('.carousel-news').owlCarousel();
// $(".nav-prev").click(function () {
// 	owl.trigger('prev.owl.carousel');
// });

// $(".nav-next").click(function () {
// 	owl.trigger('next.owl.carousel');
// });

$(this).find(".owl-item.active .anim-1").addClass("fadeInLeftBig animated").css("opacity","1");
$(this).find(".owl-item.active .anim-2").addClass("fadeInRightBig animated").css("opacity","1");
$(this).find(".owl-item.active .anim-3").addClass("fadeInUp animated").css("opacity","1");
$(this).find(".owl-item.active .anim-4").addClass("fadeInUp animated").css("opacity","1");

//block-1
$(".owl-fade").on("translate.owl.carousel", function () {
	$(this).find(".owl-item .anim-1").removeClass("fadeInLeftBig animated").css("opacity","0");
	$(this).find(".owl-item .anim-2").removeClass("fadeInRightBig animated").css("opacity","0");
	$(this).find(".owl-item .anim-3").removeClass("fadeInUp animated").css("opacity","0");
	$(this).find(".owl-item .anim-4").removeClass("fadeInUp animated").css("opacity","0");
});          
$(".owl-fade").on("translated.owl.carousel", function () {
	$(this).find(".owl-item.active .anim-1").addClass("fadeInLeftBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-2").addClass("fadeInRightBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-3").addClass("fadeInUp animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-4").addClass("fadeInUp animated").css("opacity","1");
});

//block-2
$(".owl-fade").on("translate.owl.carousel", function () {
	$(this).find(".owl-item .anim-5").removeClass("fadeInUp animated").css("opacity","0");
	$(this).find(".owl-item .anim-6").removeClass("fadeInUp animated").css("opacity","0");
	$(this).find(".owl-item .anim-7").removeClass("fadeInUp animated").css("opacity","0");
	$(this).find(".owl-item .anim-8").removeClass("fadeInUp animated").css("opacity","0");
});

$(".owl-fade").on("translated.owl.carousel", function () {
	$(this).find(".owl-item.active .anim-5").addClass("fadeInUp animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-6").addClass("fadeInUp animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-7").addClass("fadeInUp animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-8").addClass("fadeInUp animated").css("opacity","1");
});

 //block-3
$(".owl-fade").on("translate.owl.carousel", function () {
	$(this).find(".owl-item .anim-9").removeClass("zoomInLeft animated").css("opacity","0");
	$(this).find(".owl-item .anim-10").removeClass("zoomInRight animated").css("opacity","0");
	$(this).find(".owl-item .anim-11").removeClass("bounceInUp animated").css("opacity","0");
	$(this).find(".owl-item .anim-12").removeClass("bounceInUp animated").css("opacity","0");
});
$(".owl-fade").on("translated.owl.carousel", function () {
	$(this).find(".owl-item.active .anim-9").addClass("zoomInLeft animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-10").addClass("zoomInRight animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-11").addClass("bounceInUp animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-12").addClass("bounceInUp animated").css("opacity","1");
});

//sliders-end

$(".sf-menu").after("<div id='my-menu'>");
$(".sf-menu").clone().appendTo("#my-menu");
$("#my-menu").find("*").attr("style", "");
$("#my-menu").find("ul").removeClass("sf-menu");

$("#my-menu").mmenu({
	extensions: {
		all: ["theme-dark", "fx-menu-slide", "pagedim-black","fx-menu-zoom","fx-panels-zoom","fx-listitems-slide"]
	},
	offCanvas: {
		position: "right",
	},
	navbar: {
		title: '<img src="img/logo.png" alt="Waxom">',
	}

});

var api = $('#my-menu').data('mmenu');

api.bind('open:finish', function() {
	$('.hamburger').addClass('is-active');
});
api.bind('close:finish', function() { 
	$('.hamburger').removeClass('is-active');
});

// Isotope-сортировка

$grid = $('.grid');
$grid.isotope({
	transitionDuration: '.8s'
})

$('#architecture-button,#illustration-button, #all-button, #nature-button, #photo-button, #web-button').click(function() {
	$('#architecture-button,#illustration-button, #all-button, #nature-button, #photo-button, #web-button').removeClass('active-1');
	$(this).addClass('active-1');
	var id = $(this).attr('id');
	var className = id.replace("-button", "");

	if (className == 'all') {
		$grid.isotope({
			filter: '*'
		});
		return false;
	}
	$grid.isotope({
		filter: '.' + className
	});
});


var iso = new Isotope( '.grid', {
	hiddenStyle: {
		opacity: 0
	},
	visibleStyle: {
		opacity: 1
	},

});
//Isotope-end


//waypoints
$('.hand').waypoint(function(){
	$('.num1').animateNumber({ number: 3587 }, 2000, 'swing');
	$('.num2').animateNumber({ number: 207 }, 2000, 'swing');
	$('.num3').animateNumber({ number: 2500 }, 2000, 'swing');
	$('.num4').animateNumber({ number: 873 }, 2000, 'swing');
	$('.num5').animateNumber({ number: 900 }, 2000, 'swing');
	$('.num1').removeClass();
	$('.num2').removeClass();
	$('.num3').removeClass();
	$('.num4').removeClass();
	$('.num5').removeClass();
}, {	
	offset : "15%"
});
//waypoints-end

//animation.css

$('.img-left').animated('fadeInLeft');
$('.img-center').animated('fadeInDown');
$('.img-right').animated('fadeInRight');
$('h4').animated('fadeInRight');
$('.section7 p, .button-right').animated('fadeInRight');
$('.section2 p, .section4 p, .section10 p, .gradient h3, .gradient .p').animated('fadeInLeft');
$('.carousel-news-items, .p-i, .news-navigation').animated('fadeInUp');
$('.play, .video-info, .top-line, footer .col-md-3, .hand, .owl-dots, .fade-nav').animated('fadeInOwl');
//animation.css-end

// youtube
$('.play').click(function() {
	$('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/9ZfN87gSjvI?enablejsapi=1&version=3&playerapiid=ytplayer')
});
$('.play').click(function(){
	$(".play").css('zIndex', '0')
	$(".vid-cont").css('zIndex', '10')
});
$('.play').click(function() { setTimeout(function() {
	$('body').css("overflow","hidden");
	$('.vid-cont').toggle();
	$('.page-overlay').toggle();
	$('.fa-times').toggle();
	$('.top-line').hide();
	$('.embed-responsive-item')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}, 500); });

	// скрытие объектов при клюке на любом месте
$(document).click(function(e){
	if ($(e.target).closest(".play").length) return;
	$('.page-overlay').hide();
	$('.fa-times').hide();
	$('.vid-cont').hide();
	$('.top-line').show();
	$('.embed-responsive-item')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	e.stopPropagation();
	$("body").css("overflow","auto");
	$(".play").css('zIndex', '10')
	$(".vid-cont").css('zIndex', '0')
});
	// скрытие объектов при клюке на любом месте - end
// youtube-end

// поочередное появление-начало
$('.section1').waypoint(function() {
	$('.menusect').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "70%"
});

$('.blocks-set').waypoint(function() {
	$('.block-compiler').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "55%"
});

$('.carousel-news').waypoint(function() {
	$('.carousel-news-item').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "70%"
});

$('.sponsors').waypoint(function() {
	$('.logo').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "70%"
});
$('.menu-button').waypoint(function() {
	$('.menu-button').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "65%"
});

// поочередное появление-конец

try {
	$.browserSelector();
	if($("html").hasClass("chrome")) {
		$.smoothScroll();
	}
} catch(err) {

};

$("img, a").on("dragstart", function(event) { event.preventDefault(); });


$(".scroll-button").click(function() {
	$("html, body").animate({ scrollTop: $(".section2").height()+250 }, "slow");
	return false;
});

$(".scroll-page-button").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

$(function(f){
	var element = f('.scroll-page-button');
	f(window).scroll(function(){
		element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](1500);           
	});
});



});
// $(".menusect").equalHeights();


	// Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

	// //SVG Fallback


	// //Аякс отправка форм
	// //Документация: http://api.$.com/$.ajax/
	// $("#form").submit(function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {

	// 			$("#form").trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
