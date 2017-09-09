$(function() {

//sliders
	$(".head-carousel").owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		navText: false,
		dots: true,
		smartSpeed: 600,
			onInitialized  : counter, //When the plugin has initialized.
			onTranslated : counter,
		});
	function counter(event) {
		var element   = event.target;         // DOM element, in this example .owl-carousel
		var items     = event.item.count;     // Number of items
		var item      = event.item.index + 1;     // Position of the current item
		$('#counter').html("0"+item)
	}

	$('.cf li').click(function(){
		var setLang = $('.cf').data('location'),
		dataLangSelect = $(this).data('lang')
		$('.language-select').data('location', dataLangSelect);
		$('.language-select li').removeClass('active');
		$(this).toggleClass('active');
	})
//sliders-end

//slide menu
	$('.hamburger').click(function(){
		setTimeout(function(){
			$(".hamburger").toggleClass("is-active");
				// $(".hamburger").toggleClass("close");
				$(".head-overlay, .head-overlay-right").fadeToggle("500");
				$("#counter").blur();
			}, 450);
		$('.pushmenu-push').toggleClass('pushmenu-push-toright');
		$('#menu').toggleClass('active');
	});
//slide menu-end

//dynamic links for video-items
	$('#vd1').click(function(e) {
		e.preventDefault()
		$('#iframe_main').attr('src', 'https://www.youtube.com/embed/wTcNtgA6gHs?enablejsapi=1&version=3&playerapiid=ytplayer')
	});

	$('#vd2').click(function(e) {
		e.preventDefault()
		$('#iframe_main').attr('src', 'https://www.youtube.com/embed/oxB8hFDE6GU?enablejsapi=1&version=3&playerapiid=ytplayer')
	});

	$('#vd3').click(function(e) {
		e.preventDefault()
		$('#iframe_main').attr('src', 'https://www.youtube.com/embed/5lWkZ-JaEOc?enablejsapi=1&version=3&playerapiid=ytplayer')
	});
//dynamic links for video-items-end

//vide-items parameters

	$('#vd1, #vd2, #vd3').click(function() { setTimeout(function() {
		$('#idiv').fadeIn(500);
		$('body').css("overflow","hidden");
		$('.page-overlay').delay(0).fadeIn(1000);
		$('#iframe_main')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	}, 550); });

	$(document).click(function(e){
		if ($(e.target).closest("#iframe_main").length) return;
		$('.page-overlay').fadeOut(1000);
		$('#idiv').fadeOut(500);
		$('#iframe_main')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		e.stopPropagation();
		$("body").css("overflow","auto");
	});
//vide-items parameters-end

//smooth-scroll for Chrome
	try {$.browserSelector(); if($("html").hasClass("chrome")) {$.smoothScroll(); }} catch(err){};
//smooth-scroll for Chrome-end

//bg-video start
	if ($(window).width() > 768) {
			$("#P1").YTPlayer();
		$('#togglePlay').click(function() {	
		setTimeout(function() { $(".mbYTP_wrapper").addClass('special');}, 550);
		$("#P1").YTPChangeMovie({startAt:0, stopAt:0, mute:false, showControls: true, optimizeDisplay: false});
		$(".video-border, .video-content, .big-ov-play").fadeOut(500);
	});
	
	$('#P1').on("YTPFullScreenEnd",function(e){
		var currentTime = e.time;
		$(".mbYTP_wrapper").removeClass('special');
		$("#P1").YTPChangeMovie({startAt:10, stopAt:27, mute:true, showControls: false, optimizeDisplay: true});
		$(".video-border, .video-content, .big-ov-play").fadeIn(500);
	});
	function changeLabel(state){
		$("#togglePlay").html(); }

	//change parameters for other browser 
	var isChromium = window.chrome,
	vendorName = window.navigator.vendor,
	isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
	isIEedge = window.navigator.userAgent.indexOf("Edge") > -1;
	var FF = !(window.mozInnerScreenX == null);
	if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
		$('#togglePlay').click(function() {	setTimeout(function() {
			$('#P1').YTPFullscreen(); }, 550); });
	} else { 
	// not Google chrome 
	}
	var FF = !(window.mozInnerScreenX == null);
	if(FF) {
	$('#togglePlay').click(function() {	setTimeout(function() {
		$('#P1').YTPFullscreen(); }, 550); });
	} else { 
	  // not firefox 
	}

	} else {
		//dynamic links for video-items
$('#togglePlay').click(function(e) {
		e.preventDefault()
		$('#iframe_main').attr('src', 'https://www.youtube.com/embed/cDzG_jyvci0?enablejsapi=1&version=3&playerapiid=ytplayer')
	});
//dynamic links for video-items-end

//vide-items parameters
	$('#togglePlay').click(function() { setTimeout(function() {
		$('#idiv').fadeIn(500);
		$('body').css("overflow","hidden");
		$('.page-overlay').delay(0).fadeIn(1000);
		$('#iframe_main')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	}, 550); });

	$(document).click(function(e){
		if ($(e.target).closest("#iframe_main").length) return;
		$('.page-overlay').fadeOut(1000);
		$('#idiv').fadeOut(500);
		$('#iframe_main')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		e.stopPropagation();
		$("body").css("overflow","auto");
	});
//vide-items parameters-end
	}
//bg-video end

//scroll buttons
$(".scroll-button").click(function() {
    var offset = -20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $(".section-1").offset().top + offset
    }, 1200);
});
$(".scroll-page-button").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

$(function(f){
	var element = f('.scroll-page-button');
	f(window).scroll(function(){
		element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](1000);           
	});
});
//scroll buttons-end

//animation
$('.head-content h1').animated('fadeInDown');
$('.btn').animated('fadeInUp');
$('.left-count, .head-carousel, .products-image').animated('fadeInLeft');
$('.scroll-button, .top-line, .hamburger, .top-leng, .products-item-left, .numeration, .titul, .video-content, .video-border, .owl-dots').animated('fadeInOwl');
$('.pr-top').animated('fadeInRight');
$('.furn').animated('fadeInLeftBig');
$('.dec').animated('fadeInRightBig');
//animation-end

//waypoint
$('.dec').waypoint(function() {
$('.video-item').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 
});


});