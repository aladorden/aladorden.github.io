$(function() {

	$(".head-carousel").owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		navText: false,
		dots: true,
		smartSpeed: 800,
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

	/* Открытие меню */

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

	$('#vd1').click(function(e) {
		e.preventDefault()
		$('#iframe_main').attr('src', 'http://www.youtube.com/embed/wTcNtgA6gHs?enablejsapi=1&version=3&playerapiid=ytplayer')
	});

	$('#vd2').click(function(e) {
		e.preventDefault()
		$('#iframe_main').attr('src', 'http://www.youtube.com/embed/oxB8hFDE6GU?enablejsapi=1&version=3&playerapiid=ytplayer')
	});

	$('#vd3').click(function(e) {
		e.preventDefault()
		$('#iframe_main').attr('src', 'http://www.youtube.com/embed/5lWkZ-JaEOc?enablejsapi=1&version=3&playerapiid=ytplayer')
	});


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


	try {$.browserSelector(); if($("html").hasClass("chrome")) {$.smoothScroll(); }} catch(err){};

//bg-video start
	$(function(){ $("#P1").YTPlayer(); }); 

	$('#togglePlay').click(function() {	
		setTimeout(function() { $(".mbYTP_wrapper").addClass('special');}, 550);
		$("#P1").YTPChangeMovie({startAt:0, stopAt:0, mute:false, showControls: true});
		$(".video-border, .video-content, .big-ov-play").fadeOut(500);
	});

	$('#togglePlay').click(function() {	setTimeout(function() {
		$('#P1').YTPFullscreen(); }, 550); });

	$('#P1').on("YTPFullScreenEnd",function(e){
		var currentTime = e.time;
		$(".mbYTP_wrapper").removeClass('special');
		$("#P1").YTPChangeMovie({startAt:10, stopAt:27, mute:true, showControls: false});
		$(".video-border, .video-content, .big-ov-play").fadeIn(500);
	});
	function changeLabel(state){
		$("#togglePlay").html(); }
//bg-video end

	$(".scroll-button").click(function() {
		$("html, body").animate({ scrollTop: $(".section-1").height()-150 }, "slow");
		return false;
	});
});

