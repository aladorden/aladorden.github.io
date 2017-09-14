$(function() {

 $(".submenu-general").click(function(){
 	$(".submenu").slideToggle();
 })

$("#box-1").click(function(){
 	$(".lb").toggleClass("lb-active");
 })

$('.item-bg, .item-capture').animated('fadeInUp');
$('.counter').animated('fadeInLeft');
$('.counter-advantages').animated('fadeInRight');

$('.our-company').waypoint(function(){
	var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
$('#fun-level').animateNumber(
  {
    number: 100,
    easing: 'easeOutBack',
    numberStep: percent_number_step
  },
  5000
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
	offset : "1%"
});

$('.lady-bg').waypoint(function(){
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
 $('#example').fadeIn(500);
 $('#example').animate_Text();
}, {	
	offset : "71%"
});

});
 $(document).ready(function(){
  $("#phone").inputmask({ showMaskOnHover: false });
  $("#phone-2").inputmask({ showMaskOnHover: false });

 

});