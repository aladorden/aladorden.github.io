
$(window).on('resize',myfunction, resize_dropdown);
$(document).ready(resize_dropdown);
$(document).ready(myfunction);
function resize_dropdown(){
		 var $wrapper = $('#block-inner8 .sides-wrap p');//the element we want to measure
    var wrapperWidth = $wrapper.width();//get its width  
    $('#block-inner8 .dropcontainer').css('width',wrapperWidth);


    var $wrapper_2 = $('#block-inner8 .acsiya')
var wrapper_2_height = $wrapper_2.height();//get its width  
$('#block-inner8 .acsiya .galka, .galka_dark').css('border-width',wrapper_2_height/2);

}
function myfunction() {
	if ($(window).width() < 480) {
		var animate_start = {opacity: 0, top: '65%'}
		$('.modal_form').css('top','65%');
	}
	else {
		var animate_start = {opacity: 0, top: '45%'}
		$('.modal_form').css('top','45%');
	}
}
var owl_rows = function(item,rows){
		var item // slide item
    var rows // по сколько элементов в строке
    var divsArr = item.get()
    for(var i = 0; i < item.length; i += rows){
    	$(divsArr.slice(i,i+rows)).wrapAll('<div class="item"></div>');
    }
  }

  var carousel_funct = function(){
  	$(".carousel_2").owlCarousel({
  		autoplay: false,
  		autoplayTimeout: 2500,
  		items: 1,
  		rewind: true,
      slideBy: 1,
      scrollPerPage : true,
      smartSpeed: 500,
      responsiveClass:true,
      autoHeight:false,
      responsive:{
       0:{
        items:1,
      },
      600:{
        items:1,
      },
      1100:{
        items:2,
      }

    }
  });
  	$("#nextslide2").click(function () {
  		$('.carousel_2').trigger('prev.owl.carousel');
  	});

  	$("#prevslide2").click(function () {
  		$('.carousel_2').trigger('next.owl.carousel');
  	});
  	// $('.carousel_2 .item').on('mouseover',function(e){
  	// 	$ (this) .closest ('.owl-carousel'). trigger ('stop.owl.autoplay'); 
  	// })
  	// $('.carousel_2 .item').on('mouseleave',function(e){
  	// 	$ (this) .closest ('.owl-carousel'). trigger ('play.owl.autoplay'); 
  	// })


  //    var mh = 0;
  //   $("#block-6 .slide").each(function () {
  //    var h_block = parseInt($(this).height());
  //    if(h_block > mh) {
  //     mh = h_block;
  //   };
  // });

    // $("#block-6 .slide").height(mh);

    $(".carousel_1").owlCarousel({
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed: 500,
      items: 1,
      rewind: true,
    });

    owl_1 = $('.carousel_1, .carousel_vnutr')
    $("#nextslide, .button-to-left").click(function () {
      owl_1.trigger('prev.owl.carousel');
    });

    $("#prevslide, .button-to-right").click(function () {
      owl_1.trigger('next.owl.carousel');
    });
    $('.carousel_1 .adv-1').on('mouseover',function(e){
      $ (this) .closest ('.owl-carousel'). trigger ('stop.owl.autoplay'); 
    })
    $('.carousel_1 .adv-1').on('mouseleave',function(e){
      $ (this) .closest ('.owl-carousel'). trigger ('play.owl.autoplay'); 
    })
  }




  $(document).ready(function() {
    if ( $( "div" ).hasClass( "prices_section" ) ) {

      $('.table').footable();

    }

// setTimeout(function(){
//   $('.prices_wrapper tr').click(function(){
// // $('.footable-detail-row').hide();
// console.log($(this).after().html())
// var a = $(this).not().html()
// console.log(a);
// });
// },1500)
$("#my-menu").mmenu({
  "extensions": [
  "fx-menu-slide",
  "fx-panels-slide-100",
  "fx-listitems-slide",
  "border-none",
  "listview-huge",
  "pagedim-black",
  ],
  "iconPanels": true,
  "navbar": {
   "title": 'Полиграфия Москва',
 }
});


var API = $("#my-menu").data( "mmenu" );
API.bind( "open:finish", function() {
  setTimeout(function() {
   $('.hamburger').addClass( "is-active" );
 }, 100);
});
API.bind( "close:finish", function() {
  setTimeout(function() {
   $('.hamburger').removeClass( "is-active" );
 }, 100);
});
$('ul.mm-listview li a, .mm-panel_has-navbar .mm-navbar').each(function(){
  $(this).append("<div class='border'/>")
});
$('ul.mm-listview > li > a[href^="#"]').each(function(){
  var href = $(this).attr("href");
  $(this).parents('li').attr('data-href',href)
});

$( ".r_click" ).contextmenu(function() {
  console.log('right')
  var link = $(this).data('link');
  $(this).find('a.mm-btn_next').attr('href',link);
  $(this).click(function() {
   console.log('left')
   var aria = $(this).data('href');
   $(this).find('a.mm-btn_next').attr('href',aria);
 });
});
$('.checkbox').attr('checked','checked');
$("input[name='tel']").mask("+7 (999)-999-99-99", {placeholder: ""});
if ($(window).width() < 500) {

  owl_rows($('.carousel_2 .slide'),1);
  carousel_funct();
}
else {
  owl_rows($('.carousel_2 .slide'),2);
  carousel_funct();
}

$(".carousel_vnutr").owlCarousel({
  autoplay: false,
  autoplayTimeout: 10000,
  smartSpeed: 500,
  items: 1,
  mouseDrag: false,
  rewind: true,
});

owl_rows($('.inners.owl-carousel .inner'),3);
$("#block-inner11 .inners.owl-carousel").owlCarousel({
  smartSpeed: 500,
  items: 4,
  rewind: true,
  margin: 10,
  navText: false,
  mouseDrag: false,
  touchDrag: false,
  responsiveClass:true,
  responsive:{
   0:{
    items:1,
    touchDrag: true,
    nav: true
  },
  580:{
    items:2,
    touchDrag: true,
    nav: true
  },
  900:{
    items:3,
    touchDrag: true,
    nav: true
  },
  1100:{
    items:3,
    touchDrag: true,
    nav: true
  },
  1151:{
    items:4,
    touchDrag: false

  }

}
});

$(".gallery_card_carousel").owlCarousel({
  autoplay: false,
  autoplayTimeout: 10000,
  smartSpeed: 500,
  items: 1,
  rewind: false,
  loop: false,
  mouseDrag: true,
});

$("#otvet2").click(function () {
  $(".gallery_card_carousel").owlCarousel().trigger('prev.owl.carousel');
});

$("#otvet").click(function () {
  $(".gallery_card_carousel").owlCarousel().trigger('next.owl.carousel');
});



// After slide has moved fire some stuff

$('#block-inner11 .menu-but').one("click",function(){
	$('.inners.owl-carousel .owl-item:not(".active"):eq(0) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(0) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(1) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(1) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(2) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(2) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(3) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(3) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(4) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(0) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(5) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(1) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(6) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(2) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(7) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(3) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(8) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(0) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(9) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(1) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(10) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(2) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(11) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(3) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(12) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(0) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(13) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(1) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(14) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(2) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(15) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(3) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(16) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(0) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(17) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(1) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(18) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(2) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(19) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(3) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(20) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(0) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(21) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(1) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(22) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(2) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(23) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(3) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(24) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(0) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(25) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(1) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(26) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(2) .item');
	$('.inners.owl-carousel .owl-item:not(".active"):eq(27) .inner').appendTo('.inners.owl-carousel .owl-item.active:eq(3) .item');
	var width = $('.inners.owl-carousel').width();
	$('.inners.owl-carousel .owl-item:not(".active")').remove();
})




$(".our_clients_carousel").owlCarousel({
	margin: 20,
	nav: false,
	navText: false,
	rewind:true,
	smartSpeed: 500,
	items: 3,
	responsiveClass:true,
	responsive:{
		100:{
			items: 1,
			nav: true,
			navText: false,
			margin: 0,
		},
		600:{
			items:2,
			nav: true,
			navText: false,
			margin: 10,
		},
		950:{
			items:3,
			margin: 10,
			nav: true,
			navText: false,

		},
		1100:{
			items:3,
			nav: true,
			navText: false,

		},
		1300:{
			items:3,
			nav: false,
			navText: false,
		},
	}

});
$(".our_clients_carousel, .button-to-left").click(function () {
	$(".our_clients_carousel").owlCarousel().trigger('prev.owl.carousel');
});

$(".our_clients_carousel, .button-to-right").click(function () {
	$(".our_clients_carousel").owlCarousel().trigger('next.owl.carousel');
});




if ($(window).width() > 950) {
	var owl = $('.our_clients_carousel');
	owl.find('.owl-item.active').removeClass("red");
	owl.find('.owl-item.active:eq(1)').addClass("red");
  owl.on('changed.owl.carousel', function(event) {
   owl.find('.owl-item.active').removeClass("red");
   setTimeout(function() { 
    owl.find('.owl-item.active:eq(1)').addClass("red");
  }, 20);

 })

}

var $wid=$("#viewport").width();

var slideWidth = $wid;   

$('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);

if ($(window).width() < 900) {
  $("#otvet").click(function(){
   nextSlide();
   $("#otvet2").animate({"bottom":"10px"},500);
 });
  		// $("#otvet2").click(prevSlide);
  	}
  	else {
  		$("#otvet").click(function(){
  			nextSlide();
  			$("#otvet2").animate({"left":"-300px"},500);
  		});
  		owl.on('changed.owl.carousel', function(event) {
  			owl.find('.owl-item.active').removeClass("red");
  			setTimeout(function() { 
  				owl.find('.owl-item.active:eq(1)').addClass("red");
  			}, 20);

  		})
  	}



  	function nextSlide(){
  		var currentSlide=parseInt($('.slidewrapper').data('current')); 
  		currentSlide++;  


  		if(currentSlide<$('.slidewrapper').children().length) 
  		{
  			$('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
  		}
  	}
  	function prevSlide(){
  		var currentSlide=parseInt($('.slidewrapper').data('current'));  
  		currentSlide--;  
  		if(currentSlide>=0) 
  		{
  			$('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
  		} else {$("#otvet2").animate({"left":"0px"},500);}

  	}

  	$(document).on('click', 'a[href^="#"]', function (event) {
  		event.preventDefault();

  		$('html, body').animate({
  			scrollTop: $($.attr(this, 'href')).offset().top
  		}, 1000);
  	});


  	// if ($(window).width() < 500) {
  	// 	owl_rows($('.carousel_2 .slide'),1);
  	// 	carousel_funct();
  	// }
  	// else {
  	// 	owl_rows($('.carousel_2 .slide'),2);
  	// 	carousel_funct();
  	// }
  	


  	if ($(window).width() < 480) {
  		var animate_start = {opacity: 0, top: '65%'}
  		$('.modal_form').css('top','65%');
  	}
  	else {
  		var animate_start = {opacity: 0, top: '45%'}
  		$('.modal_form').css('top','45%');
  	}



  	// $('#form1').click( function(event){event.preventDefault(); 
  	// 	$('#overlay').fadeIn(400, 
  	// 		function(){ 
  	// 			$('#modal_form').css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
  	// 		});
  	// });

  	// $('#modal_close, #overlay').click( function(){
  	// 	$('#modal_form').animate(animate_start, 200,  
  	// 		function(){ 
  	// 			$(this).css('display', 'none'); 
  	// 			$('#overlay').fadeOut(400); 
  	// 		}
  	// 		);
  	// });

  	// $('#form2').click( function(event){event.preventDefault(); 
  	// 	$('#overlay').fadeIn(400, 
  	// 		function(){ 
  	// 			$('#modal_form2').css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
  	// 		});
  	// });

  	// $('#modal_close2, #overlay').click( function(){
  	// 	$('#modal_form2').animate(animate_start, 200,  
  	// 		function(){ 
  	// 			$(this).css('display', 'none'); 
  	// 			$('#overlay').fadeOut(400); 
  	// 		}
  	// 		);
  	// });



  	$('#formotziv').click( function(event){ 
  		event.preventDefault(); 
  		$('#overlay').fadeIn(400, 
  			function(){ 
  				$('#modal_otziv').css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
  			});
  	});

  	$('#modal_close_otziv, #overlay').click( function(){
  		$('#modal_otziv').animate(animate_start, 200,  
  			function(){ 
  				$(this).css('display', 'none'); 
  				$('#overlay').fadeOut(400); 
  			}
  			);
  	});


  	$('#fast_zakaz, #fast_zakaz_2').click( function(event){ 
  		event.preventDefault(); 
  		$('#overlay').fadeIn(400, 
  			function(){ 
  				$('#modal_zakaz').css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
  			});
  	});

  	$('#modal_close_zakaz, #overlay').click( function(){
  		$('#modal_zakaz')
  		.animate(animate_start, 200,  
  			function(){ 
  				$(this).css('display', 'none'); 
  				$('#overlay').fadeOut(400); 
  			}
  			);
  	});


  });



$("#counter1").viewportChecker({
	callbackFunction:function(){
		$('#counter1')
		.prop('number', 0)
		.animateNumber(
		{
			number: 312
		},
		5000
		);
	}
});

$("#items_figure").viewportChecker({
	callbackFunction:function(){
		$(function() {
			$.each($('#items_figure .item'), function(i, el) {
				setTimeout(function() {
					$(el).removeClass("active");
				}, 600 + (i * 750));

			});
		});
	}
});


$(".acsiya").viewportChecker({
	callbackFunction:function(){
		$('.acsiya').css({"right":"100%",opacity: "1"});
		$('.acsiya .gruz').css({"right":"150%"});
		$('.acsiya p').css({"right":"150%"});
		$('.acsiya').animate({left:"0%"},1000,function(){
			$('.acsiya .gruz').animate({"right":"10px"},2000,function(){
				$('.acsiya p').animate({"right":"0%"},1000);});});
	}
});




$(".pos1").viewportChecker({
	callbackFunction:function(){

		$(".pos1").css({"opacity":"0","left":"-600px"});
		$(".pos1").animate(
		{
			opacity: "1",
			left: "15"
		},
		1000);


		$(".pos2").css({"opacity":"0","right":"-600px"});
		$(".pos2").delay(300).animate(
		{
			opacity: "1",
			right: "15"
		},
		1000);


		$(".pos3").css({"opacity":"0","left":"-600px"});
		$(".pos3").delay(500).animate(
		{
			opacity: "1",
			left: "15"
		},
		1000);


		$(".pos4").css({"opacity":"0","right":"-600px"});
		$(".pos4").delay(700).animate(
		{
			opacity: "1",
			right: "15"
		},
		1000);


		$(".pos5").css({"opacity":"0","left":"-600px"});
		$(".pos5").delay(900).animate(
		{
			opacity: "1",
			left: "15"
		},
		1000);
	}
});


$("#block-inner11 .redb").click(function(){
	$("#block-inner11 .inners2").animate({"height":"100%"},100,function(){
		$("#block-inner11 .redb").css({"display":"none"});
		$("#block-inner11 .inners2").animate({"opacity":"1"},500);
	});
});



var animate_pos = function(class_block) {
	$(class_block).hover(
		function(){	if ($(window).width() > 600) {
			$(this).find(".arrow-text-hover").animate({"width":"516px"});
			$(this).find(".arrow-text").stop(1,1).delay(500).animate({"left":"0px","top":"-70px"},500,function(){
			});		
			$(this).find(".arrow-text-hover .text").delay(1100).animate({"opacity":"1"});
			$(this).find(".arrow-text").delay(0).animate({color:"#fff"});

		}}, 
		function(){	if ($(window).width() > 600) {
			$(this).find(".arrow-text-hover .text").animate({"opacity":"0"});
			$(this).find(".arrow-text").stop(1,1).animate({color:"#000"});
			$(this).find(".arrow-text").stop(1,1).animate({"top":"0px", "left":"0px"});
			$(this).find(".arrow-text-hover").stop(1,1).animate({"width":"0"});

		}});
}
animate_pos(".pos")


//parralacs effect	
var tempScrollTop = 0;

$(window).scroll(function(){

	currentScrollTop = jQuery(window).scrollTop();
	if (tempScrollTop < currentScrollTop )
		$('.paralacs').animate( {backgroundPositionY: "-=6px"} ,1);
	else if (tempScrollTop > currentScrollTop )
		$('.paralacs').animate( {backgroundPositionY: "+=6px"} ,1);
	tempScrollTop = currentScrollTop;


});

// countdown timer

// var countDownDate = new Date(2018,0,1).getTime();


// var x = setInterval(function() {
// 	var now = new Date().getTime();
// 	var distance = countDownDate - now;
// 	if (distance > 0) {


// 		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 		var seconds = Math.floor((distance % (1000 * 60)) / 1000);


// 		document.getElementById("dayscount").innerHTML = days;
// 		document.getElementById("hourscount").innerHTML = hours;
// 		document.getElementById("minutescount").innerHTML = minutes;
// 		document.getElementById("secondscount").innerHTML = seconds;
// 	}
// 	if (distance <= 0) {
// 		var distance = now - countDownDate + 1000;

// 		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 		var seconds = Math.floor((distance % (1000 * 60)) / 1000);


// 		document.getElementById("dayscount").innerHTML = days;
// 		document.getElementById("hourscount").innerHTML = hours;
// 		document.getElementById("minutescount").innerHTML = minutes;
// 		document.getElementById("secondscount").innerHTML = seconds;
// 	}
// }, 1000);

 ///////////////////////////////
			// калькулятор //
/////////////////////////////

$(function(){

	var calculator = function() {
		var total_pr = 0;
		$('.select').find('input').each(function() {
			total_pr = parseFloat($(this).val()) + total_pr;
		});
		$('#itogo').text(' ' + total_pr + ' рублей')
	}

	calculator();
	$('#block-inner8 a.trigger').on("DOMSubtreeModified", function(){
		calculator();
	});


});

$('form').each(function () {
	var $form = $(this);
	$(this).validate({
    	 // messages: {
      //       tel: {
      //           minlength: "Введите полный номер",
      //       }
      //   }
      errorPlacement: function(error,element) {
      	return true;
      }
    });
});
