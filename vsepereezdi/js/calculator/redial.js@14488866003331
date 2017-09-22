
$(function(){
	var bell_from = 11;
	var bell_to = 17;
	var bell_data = $('#bell [name="day_bell"]:checked').parent().find(".name").text().toLowerCase();
		$('form[name="redial"]').validate({
		errorClass: "error",
		validClass: "success",
		rules:{
			form_text_33:{
				required: true,
				custom_phone: true,
			},
			form_text_34:{
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
			$("#input_bell_from input").val(bell_from);
			$("#input_bell_to input").val(bell_to);
			$("#input_bell_data input").val(bell_data);
			$("#input_date input").val();
			$("#input_time input").val();
			$(form).ajaxSubmit();
			$("#bell .hide input").val("");
			$('form[name="redial"]').arcticmodal("close");
			$("#modal-ok .text").html('<h2>Заказ оформлен!</h2><p>Наш оператор свяжется с вами</p>');
			$("#modal-ok .modal-ok-input").text('ОК');
			modal_ok();
		},
	});
		function update_price() {
	
		$("#input_bell_from input").text(bell_from);
		$("#input_bell_to input").text(bell_to);
		$("#input_bell_data input").val(bell_day);
		
		}
	
	
	$('#bell [name="day_bell"]').change(function(){
		bell_data = $(this).parent().find(".name").text().toLowerCase();
		update_price();
	});	
	$(".bell").click(function() {
	var bell_type =  $(this).attr("data-type");
	$('.type1, .type2').hide();
	if (bell_type == 1) $('.type1').show();
	if (bell_type == 2) $('.type2').show();
		$('#bell').arcticmodal();
	});
		
	$(".bell_time_slider").noUiSlider({
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
			update_price();
		}
});


	
	$.each($(".bell_time_slider"), function() {
		$(this).find('.noUi-handle-lower').append('<div class="noUi-signature noUi-signature-lower"><span>11 ч.</span></div>');
		$(this).find('.noUi-handle-upper').append('<div class="noUi-signature noUi-signature-upper"><span>17 ч.</span></div>');
		$(this).find('.noUi-base').append('<div class="noUi-arrow-block"></div>');
		var width_div =  Math.round($(this).find('.noUi-base').width() / 14) - 2;
		for (var i = 9; i < 22; i++) {
			$(this).find('.noUi-base').find(".noUi-arrow-block").append('<div style="left: '+ 100 / 14 +'%; width: 27px" class="noUi-arrow noUi-arrow-active"></div>');
		};
		$(this).find('.noUi-arrow').slice(3,9).removeClass("noUi-arrow-active");
	});
	
});