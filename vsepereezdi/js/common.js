$(function() {
$(".submenu").clone().appendTo('.footer-nav');
$(".nav").clone().appendTo(".footer-nav");
$(".footer-nav .fa").removeClass("fa-angle-down").addClass("fa-angle-up");

$(".header-nav .primary-menu ul").clone().appendTo("#my-menu")
$(".header-nav .pay-online li").clone().appendTo("#my-menu ul")
$(".toggle-mnu .sub-2").clone().appendTo("#my-menu .mymenu-removals");
$(".toggle-mnu .sub-1").clone().appendTo("#my-menu .mymenu-trucking");
$("#my-menu i").remove();
$("#my-menu .mymenu-removals ul").removeClass("submenu sub-2");
$("#my-menu .mymenu-trucking ul").removeClass("submenu sub-1");


//header-nav
$(".header-nav .trucking").click(function(){
	$(".header-nav .sub-2").slideUp(200);
	$(".header-nav .truck-fa").toggleClass('fa-angle-down')
	$(".header-nav .truck-fa").toggleClass('fa-angle-up')
	$(".header-nav .sub-1").slideToggle(400);
	$(".header-nav .rem-fa").removeClass('fa-angle-up')
	$(".header-nav .rem-fa").addClass('fa-angle-down')
})

$(".header-nav .removals").click(function(){
	$(".header-nav .sub-1").slideUp(200);
	$(".header-nav .sub-2").slideToggle(400);
	$(".header-nav .rem-fa").toggleClass('fa-angle-down')
	$(".header-nav .rem-fa").toggleClass('fa-angle-up')
	$(".header-nav .truck-fa").removeClass('fa-angle-up')
	$(".header-nav .truck-fa").addClass('fa-angle-down')
})
//header-nav-end

$(".footer-nav .trucking").click(function(){

	$(".footer-nav .sub-2").slideUp(200);
	$(".footer-nav .truck-fa").toggleClass('fa-angle-up')
	$(".footer-nav .truck-fa").toggleClass('fa-angle-down')
	$(".footer-nav .sub-1").slideToggle(400);
	$(".footer-nav .rem-fa").removeClass('fa-angle-down')
	$(".footer-nav .rem-fa").addClass('fa-angle-up')
})

$(".footer-nav .removals").click(function(){
	$(".footer-nav .sub-1").slideUp(200);
	$(".footer-nav .sub-2").slideToggle(400);
	$(".footer-nav .rem-fa").toggleClass('fa-angle-up')
	$(".footer-nav .rem-fa").toggleClass('fa-angle-down')
	$(".footer-nav .truck-fa").removeClass('fa-angle-down')
	$(".footer-nav .truck-fa").addClass('fa-angle-up')
})


if ($('body').hasClass('trucking')) { 
	$(".sub-2").css("display", "none");
	$(".sub-1").css("display", "block");
}
//checkbox
$("#box-1").click(function(){
	$(".lb-1").toggleClass("lb-active");
})
$("#box-2").click(function(){
	$(".lb-2").toggleClass("lb-active");
})
//checkbox-end


if ($('body').hasClass('home')) { //codes only for home-page
//carousel
$(".carousel-photos").owlCarousel({
	loop: true,
	autoplay: true,
	items: 3,
	nav: true,
	navText: false,
	margin: 30,
	smartSpeed: 700,
	lazyLoad: true,
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
$('.carousel-photos .photos-item').on('mouseenter',function(e){
	$(this).closest('.carousel-photos').trigger('stop.owl.autoplay');
})
$('.carousel-photos .photos-item').on('mouseleave',function(e){
	$(this).closest('.carousel-photos').trigger('play.owl.autoplay',[500]);
})
//carousel-end

//ques-block
$(".qu-1").click(function(){
	$(".ans-1").slideToggle();
	$(".ans-6, .ans-2, .ans-3, .ans-4, .ans-5").slideUp();
})

$(".qu-2").click(function(){
	$(".ans-2").slideToggle();
	$(".ans-6, .ans-1, .ans-3, .ans-4, .ans-5").slideUp();
})

$(".qu-3").click(function(){
	$(".ans-3").slideToggle();
	$(".ans-6, .ans-2, .ans-1, .ans-4, .ans-5").slideUp();
})

$(".qu-4").click(function(){
	$(".ans-4").slideToggle();
	$(".ans-6, .ans-2, .ans-3, .ans-1, .ans-5").slideUp();
})

$(".qu-5").click(function(){
	$(".ans-5").slideToggle();
	$(".ans-6, .ans-2, .ans-3, .ans-4, .ans-1").slideUp();
})

$(".qu-6").click(function(){
	$(".ans-6").slideToggle();
	$(".ans-1, .ans-2, .ans-3, .ans-4, .ans-5").slideUp();
})
//ques-block-end

//day-picker
function clock() {
	var d = new Date();
	var day = d.getDate();

	if (day <= 9) day = "0" + day;

	date_time =  day;
	if (document.layers) {
		document.layers.doc_time.document.write(date_time);
		document.layers.doc_time.document.close();
	}
	else document.getElementById("doc_time").innerHTML = date_time;
}
clock();

$('.syotimer').syotimer({
	year: 2017,
	month: 10,
	day: 21,
	hour: 20,
	minute: 30,
	lang: 'rus'
});


$( ".bg-worp img" ).hover(function() {
	$(".worp-answ").toggle( 400 );
});

//waypoint
$('.section-1').waypoint(function(){
	var percent_number_step = $.animateNumber.numberStepFactories.append('%')
	$('#fun-level').animateNumber(
	{
		number: 100,
		easing: 'easeOutBack',
		numberStep: percent_number_step
	},
	3000
	);

	$({blurRadius: 5}).animate({blurRadius: 0}, {
		duration: 3000,
		easing: 'swing',
		step: function() {
			$(".counter").css({
				"-webkit-filter": "blur("+this.blurRadius+"px)",
				"filter": "blur("+this.blurRadius+"px)"
			});
		}
	});
}, {	
	offset : "10%"
});

$('.girl-section').waypoint(function(){
	$.fn.animate_Text = function() {
		var string = this.text();
		return this.each(function(){
			var $this = $(this);
			$this.html(string.replace(/./g, '<span class="new">$&</span>'));
			$this.find('span.new').each(function(i, el){
				setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
			});
		});
	};

	$('#example').fadeIn();
	$('#example').animate_Text();
	$('.callout-right').addClass('on');
}, {	
	offset : "71%"
});
} //codes only for home-page-end

$(document).ready(function () {

//smooth-scroll for Chrome
try {$.browserSelector(); if($("html").hasClass("chrome")) {$.smoothScroll(); }} catch(err){};
//smooth-scroll for Chrome-end

if ($('body').hasClass('home')) { //codes only for home-page
//3d-carousel-reviews

var carousel = $("#carousel").waterwheelCarousel({
	flankingItems: 2,
});
$('#prev').bind('click', function () {
	carousel.prev();
	return false
});
$('#next').bind('click', function () {
	carousel.next();
	return false;
});
//3d-carousel-reviews-end
} //codes only for home-page-end

});


//phone-input
$("#phone").inputmask({ showMaskOnHover: false });
$("#phone-2").inputmask({ showMaskOnHover: false });
$("#phone-3").inputmask({ showMaskOnHover: false });
$("#phone-5").inputmask({ showMaskOnHover: false });
//phone-input-end

//month-picker
if ($('body').hasClass('home')) {
	function month() {
		var d = new Date();
		var month_num = d.getMonth()

		month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
			"июля", "августа", "сентября", "октября", "ноября", "декабря");

		date_time = month[month_num];
		if (document.layers) {
			document.layers.doc_time.document.write(date_time);
			document.layers.doc_time.document.close();
		}
		else document.getElementById("month").innerHTML = date_time;

	}
	month();
}
//month-picker-end

//reviews-block
if ($('body').hasClass('home')) {
	$("#reviews_fl .desc").hide();
	$("#reviews_fl .desc:first").addClass('rew_act');
	$("#reviews_fl .rew_act").show();

	$("#reviews_fl .next_rew").click(function() {
		if ($("#reviews_fl .desc:last").hasClass('rew_act'))
			{$("#reviews_fl .desc").removeClass('rew_act').removeClass('rew_act_next');
		$("#reviews_fl .desc:first").addClass('rew_act');
		$("#reviews_fl .desc").hide();
		$("#reviews_fl .rew_act").fadeIn(1000);

	}
	else
	{
		$("#reviews_fl .rew_act").next().addClass('rew_act_next');
		$("#reviews_fl .desc").removeClass('rew_act');
		$("#reviews_fl .rew_act_next").addClass('rew_act');
		$("#reviews_fl .desc").removeClass('rew_act_next');
		$("#reviews_fl .desc").hide();
		$("#reviews_fl .rew_act").fadeIn(1000);
	}
});
}
// //reviews-block-end

// //adr-input
if ($('body').hasClass('home')) {
	$('.input_whence input').focus(function(){
		$(this).hide();
		var txt_adr = $(this).val();
		$('.adr_input').removeClass("where_act");
		$('.adr_input').addClass("whence_act");
		$('.input_where input').show();	
		$('#address').val(txt_adr);
		$('#address').show();	
		$('#address').focus();
	});


	$('.input_where input').focus(function(){
		$(this).hide();
		var txt_adr = $(this).val();
		$('.adr_input').removeClass("whence_act");
		$('.adr_input').addClass("where_act");
		$('.input_whence input').show();
		$('#address').val(txt_adr);
		$('#address').show();	
		$('#address').focus();
	});	


	$('#address').blur(function(){
		$('#address').hide();
		var txt_inp = $(this).val();
		if( $(this).hasClass('whence_act')){
			$('.input_whence input').val(txt_inp);
			$('.adr_input').removeClass("whence_act");
			$('.input_whence input').show();

		}
		else if($(this).hasClass('where_act')) {		
			$('.input_where input').val(txt_inp);
			$('.adr_input').removeClass("where_act");
			$('.input_where input').show();
		} 	

	});


	$('.arcticmodal-close').click(function(){
		$('#orderModal  #route_block').detach().prependTo('.parallelogram_group');
	});
}
//adr-input-end

});

// $(".sf-menu").after("<div id='my-menu'>");
// $(".sf-menu").clone().appendTo("#my-menu");
// $("#my-menu").find("*").attr("style", "");
// $("#my-menu").find("ul").removeClass("sf-menu");
$(function() {

	var percent_number_step = $.animateNumber.numberStepFactories.append('%')
	$('.fun-level-pereezd').animateNumber(
	{
		number: 10,
		easing: 'easeOutBack',
		numberStep: percent_number_step
	},
	1000
	);

	$("#my-menu").mmenu({
		extensions: {
			all: ["theme-dark", "fx-menu-slide", "pagedim-black"]
		},
		offCanvas: {
			position: "right",
		},
		navbar: {
			title: '<img src="img/logo-2.png" alt="Все переезды">',
		}

	});

	$('video').get(0).play();

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() { 
		$('.hamburger').removeClass('is-active');
	});


}); 

jQuery(document).ready(function(){

	var bell2_from = 11;
	var bell2_to = 17;
	var bell2_data = $('form[name="redial_2"] [name="day_bell2"]:checked').parent().find(".name").text().toLowerCase();

	$('form[name="redial_2"]').validate({
		errorClass: "error",
		validClass: "success",
		rules:{
			form_text_69:{
				required: true,
				custom_phone: true,
			},
			form_text_70:{
				required: true,
				custom_phone: false,
			},
		},       
		success: function(label) {

		},           
		errorPlacement: function(error, element) {
			update_error(element);
		},
		submitHandler: function(form) {
			if( $("#input_bell2_from input").val() == ''){
				$("#input_bell2_from input").val(bell2_from);
			}
			if( $("#input_bell2_to input").val() == ''){
				$("#input_bell2_to input").val(bell2_to);
			}
			if( $("#input_bell2_data input").val() == ''){
				$("#input_bell2_data input").val(bell2_data);
			}
			//alert('123');
			$(form).ajaxSubmit();
			$('form[name="web_form_apply"]').value('Форма отправленна');

//			$("#modal-ok .text").html('<h2>Заказ оформлен!</h2><p>Наш оператор свяжется с вами</p>');
//			$("#modal-ok .modal-ok-input").text('ОК');

},
});

	function update_price2(bell_from, bell_to, bell2_data) {

		if(bell_from != ""){ 	$("#input_bell2_from input").val(bell_from); 	}
		if(bell_to != ""){		$("#input_bell2_to input").val(bell_to);	 	}
		if(bell2_data != ""){	$("#input_bell2_data input").val(bell2_data);	}

	}


	$('form[name="redial_2"] [name="day_bell2"]').change(function(){
		bell2_data = $(this).parent().find(".name").text().toLowerCase();
		update_price2("", "", bell2_data);
	});	

	$(".bell_time_slider2").noUiSlider({
		range: [8, 22],
		start: [11, 17],
		handles: 2,
		step: 1,

		slide: function() {
			var time = $(this).val();
			$(this).find('.noUi-signature-lower span').text(Math.round(time[0]) + " ч.");
			$(this).find('.noUi-signature-upper span').text(Math.round(time[1]) + " ч.");
			$(this).find('.noUi-arrow').addClass("noUi-arrow-active");
			$(this).find('.noUi-arrow').slice(Math.round(time[0])-8, Math.round(time[1])-8).removeClass("noUi-arrow-active");

		},
		set: function() {
			var time = $(this).val();
			$(this).find('.noUi-signature-lower span').text(Math.round(time[0]) + " ч.");
			$(this).find('.noUi-signature-upper span').text(Math.round(time[1]) + " ч.");
			$(this).find('.noUi-arrow').addClass("noUi-arrow-active");
			$(this).find('.noUi-arrow').slice(Math.round(time[0])-8, Math.round(time[1])-8).removeClass("noUi-arrow-active");
			bell_from = Math.round(time[0]);
			bell_to = Math.round(time[1]);
			update_price2(bell_from, bell_to, "");
		}
	});

	$.each($(".bell_time_slider2"), function() {
		$(this).find('.noUi-handle-lower').append('<div class="noUi-signature noUi-signature-lower"><span>11 ч.</span></div>');
		$(this).find('.noUi-handle-upper').append('<div class="noUi-signature noUi-signature-upper"><span>17 ч.</span></div>');
		$(this).find('.noUi-base').append('<div class="noUi-arrow-block"></div>');

		for (var i = 9; i < 22; i++) {
			$(this).find('.noUi-base').find(".noUi-arrow-block").append('<div style="left: '+ 100 / 14 +'%; width: 27px" class="noUi-arrow noUi-arrow-active"></div>');
		};
		$(this).find('.noUi-arrow').slice(3,9).removeClass("noUi-arrow-active");
	});


});//end_ready