$(function() {

//header-nav
$("#trucking").click(function(){
	$(".sub-2").slideUp(200);
	$(".truck-fa").toggleClass('fa-angle-down')
	$(".truck-fa").toggleClass('fa-angle-up')
	$(".sub-1").slideToggle(400);
	$(".rem-fa").removeClass('fa-angle-up')
	$(".rem-fa").addClass('fa-angle-down')
})

$("#removals").click(function(){
	$(".sub-1").slideUp(200);
	$(".sub-2").slideToggle(400);
	$(".rem-fa").toggleClass('fa-angle-down')
	$(".rem-fa").toggleClass('fa-angle-up')
	$(".truck-fa").removeClass('fa-angle-up')
	$(".truck-fa").addClass('fa-angle-down')
})
//header-nav-end

//footer-nav
$(".trucking-footer").click(function(){

	$(".sub-2").slideUp(200);
	$(".truck-fa").toggleClass('fa-angle-up')
	$(".truck-fa").toggleClass('fa-angle-down')
	$(".sub-1").slideToggle(400);
	$(".rem-fa").removeClass('fa-angle-down')
	$(".rem-fa").addClass('fa-angle-up')
})

$(".removals-footer").click(function(){
	$(".sub-1").slideUp(200);
	$(".sub-2").slideToggle(400);
	$(".rem-fa").toggleClass('fa-angle-up')
	$(".rem-fa").toggleClass('fa-angle-down')
	$(".truck-fa").removeClass('fa-angle-down')
	$(".truck-fa").addClass('fa-angle-up')
})
//footer-nav-end

//checkbox
$("#box-1").click(function(){
	$(".lb-1").toggleClass("lb-active");
})
$("#box-2").click(function(){
	$(".lb-2").toggleClass("lb-active");
})
//checkbox-end

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



$(document).ready(function () {

//smooth-scroll for Chrome
try {$.browserSelector(); if($("html").hasClass("chrome")) {$.smoothScroll(); }} catch(err){};
//smooth-scroll for Chrome-end

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

});

//phone-input
$("#phone").inputmask({ showMaskOnHover: false });
$("#phone-2").inputmask({ showMaskOnHover: false });
$("#phone-3").inputmask({ showMaskOnHover: false });
//phone-input-end

//month-picker
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
//month-picker-end

//reviews-block
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
// //reviews-block-end

// //adr-input
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
//adr-input-end
});