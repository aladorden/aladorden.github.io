var declOfNum = function(number, titles)
{  
    var  cases = [2, 0, 1, 1, 1, 2];  
    return titles[ 
            (number % 100 > 4 && number % 100 < 20) 
            ? 
            2 
            : 
            cases[(number % 10 < 5) ? number % 10 : 5] 
    ];  
}

$(function(){
	/*****************/
	var cost = $(".car_menu .active").attr("data-cost");
	var cost_dop = $(".car_menu .active").attr("data-cost_dop");
	var margin_mkad = $(".car_menu .active").attr("data-margin_mkad");
	var margin_ttk = $(".car_menu .active").attr("data-margin_ttk");
	var margin_sadovoe = $(".car_menu .active").attr("data-margin_sadovoe");
	var minimal_lease_time = $(".car_menu .active").attr("data-rental_time")*1;
	var delta_lease_time = minimal_lease_time - 2;
	var all_time = $(".car_menu .active").attr("data-rental_time");
	var lease_name = $(".car_menu .active .name").text().toLowerCase();
	var cost_porter = $('#calculator_auto [name="cost_porter"]:checked').val();
	var porter_name = $('#calculator_auto [name="cost_porter"]:checked').parent().find(".name").text().toLowerCase();
	var porter_minimum_time = $('#calculator_auto [name="cost_porter"]:checked').attr("data-minimum_time");
	var delta_porter = porter_minimum_time*1 - 2;
	var lease_time = 0;
	var porter_time = 1;
	var number_movers = 0;
	var summa= 0;
	var arenda_summa= 0;
	var arenda_dop = 0;
	
	$('form[name="SIMPLE_FORM_1"]').validate({
		errorClass: "error",
		validClass: "success",
		rules:{
			form_text_4:{
				required: true,
				custom_phone: true,
			},
		},       
		success: function(label) {

		},           
		errorPlacement: function(error, element) {
			update_error(element);
		},
		submitHandler: function(form) {
		
			var date = $('#orderModal [name="datepicker"]').val().split(" ");
			$("#input_car_type input").val(lease_name);
			$("#input_car_time input").val(all_time);
			$("#input_mover_type input").val(porter_name);
			$("#input_mover_time input").val(porter_time);
			$("#input_mover_number input").val(number_movers);
			$("#input_summa input").val($("#calculator_auto .all_price .price_val").text());
			 $('#orderModal  #route_block').detach().prependTo('.parallelogram_group');
			if (typeof date[0] != 'undefined')
				$("#input_date input").val(date[0]);
			if (typeof date[1] != 'undefined')
				$("#input_time input").val(date[1]);
				
			if ($('#orderModal [name="rigging"]').is(":checked"))
				$("#input_rigging input").prop("checked", true);
			else
				$("#input_rigging input").prop("checked", false);
				
			$("#input_date input").val();
			$("#input_time input").val();
			$(form).ajaxSubmit();
			$("#orderModal .hide input").val("");
			$('form[name="SIMPLE_FORM_1"]').arcticmodal("close");
			$("#modal-ok .text").html('<h2>Заказ оформлен!</h2><p>Наш оператор свяжется с вами</p>');
			$("#modal-ok .modal-ok-input").text('ОК');
			modal_ok();
		},
	});
	
	function update_price() {
	var ttk = $('.time_ttk').text()*1;
	ttk = ttk*margin_ttk;
	var sad = $('.time_sad').text()*1;
	sad = sad*margin_sadovoe;
	var mkad = $('.km_mkad').text()*1;
	mkad = mkad*margin_mkad;

		
		$("#calculator_auto .lease_time_desc").text(minimal_lease_time + " " + declOfNum(minimal_lease_time, ['час', 'часа', 'часов']) + " x " + cost + " руб.");
		$("#calculator_auto .porter_time .price_val").text(porter_time * cost_porter * number_movers);
		$("#calculator_auto .porter_time_desc").text(number_movers + " x " + porter_time + " " + declOfNum(porter_time, ['час', 'часа', 'часов']) + " x " + cost_porter + " руб.");
		$("#calculator_auto .porter_time i").text(number_movers + " " + declOfNum(number_movers, ['грузчик', 'грузчика', 'грузчиков']) + " (" + porter_name + ")");
		$("#calculator_auto .price_ttk").text(ttk);
		$("#calculator_auto .price_sad").text(sad);
		$("#calculator_auto .price_mkad").text(mkad);
		arenda_dop = (all_time - minimal_lease_time) * cost_dop*1;
		$("#calculator_auto .cost_dop_summa").text(arenda_dop);
		arenda_summa = (minimal_lease_time + 1) * cost + arenda_dop+ ttk + sad;
		$("#calculator_auto .lease_time .price_val").text(arenda_summa);
		summa = arenda_summa + porter_time * cost_porter * number_movers +mkad;
		$("#calculator_auto .all_price .price_val").text(summa);
		$("#orderModal h2").text($("#calculator_auto h3").text()+ ' на ' + all_time + ' ' + declOfNum(all_time, ['час', 'часа', 'часов']));
		if (number_movers != 0){
			$("#orderModal h2").text($("#orderModal h2").text() + ' и ' + number_movers + ' ' + declOfNum(number_movers, ['грузчик', 'грузчика', 'грузчиков']) + ' на ' + porter_time + ' ' + declOfNum(porter_time, ['час', 'часа', 'часов']));
			$(".porter").show();}
			else{$(".porter").hide();};
		if (arenda_dop > 0)
			{$('.lease_all').show();}
			else{$('.lease_all').hide();}
			
		}
	
	$('#calculator_auto [name="number_movers"]').change(function(){
		number_movers = $(this).val();
		update_price();
	});
	
	$('#calculator_auto [name="cost_porter"]').change(function(){
		cost_porter = $(this).val();
		porter_name = $(this).parent().find(".name").text().toLowerCase();
		porter_minimum_time1 = $('#calculator_auto [name="cost_porter"]:checked').attr("data-minimum_time");
		delta_porter = porter_minimum_time1*1 - 2;
		porter_minimum_time = porter_minimum_time1*1-delta_porter;
		if (porter_minimum_time1*1 < porter_time ){
			$("#calculator_auto .porter_time_slider").val(porter_time - porter_minimum_time1*1 + 2, true);
		}else{
			$("#calculator_auto .porter_time_slider").val(porter_minimum_time, true);
		}
		update_price();
	});

	$("#calculator_auto .orderModal").click(function() {
		$('#orderModal').arcticmodal();
		
        $('.parallelogram_group #route_block').detach().prependTo('#orderModal form');
 
	});
	$(".zvonok").click(function() {
		$('#bell').arcticmodal();
	});
	
	$("#calculator_auto .input_whence input").bind('change keyup', function() {
		$("#orderModal .input_whence input").val($(this).val());
	});
	
	$("#calculator_auto .input_where input").bind('change keyup', function() {
		$("#orderModal .input_where input").val($(this).val());
	});
	
	$("#orderModal .input_whence input").bind('change keyup', function() {
		$("#calculator_auto .input_whence input").val($(this).val());
	});
	
	$("#orderModal .input_where input").bind('change keyup', function() {
		$("#calculator_auto .input_where input").val($(this).val());
	});
	
	
	$("#calculator_auto .lease_time_slider").noUiSlider({
		range: [1, 10],
		start: 2,
		handles: 1,
		step: 1,
		slide: function() {
			var time1 = $(this).val() * 1 + delta_lease_time + "";
			var time2 = declOfNum($(this).val() * 1 + delta_lease_time, ['час', 'часа', 'часов']);
			var time = "<span>"+ time1 + "</span> " + time2;
			$(this).find('.noUi-signature span').html(time);
			$(this).find('.noUi-arrow').removeClass("noUi-arrow-active");
			$(this).find('.noUi-arrow').slice(0, ($(this).val()) * 1-1).addClass("noUi-arrow-active");
			all_time = $(this).val() * 1 + delta_lease_time;
			
			update_price();
			
			if ($(this).val() < minimal_lease_time * 1 )
			$("#calculator_auto .lease_time_slider").val(minimal_lease_time, true);
		},
		set: function() {
			var time1 = $(this).val() * 1 + delta_lease_time + "";
			var time2 = declOfNum($(this).val() * 1 + delta_lease_time, ['час', 'часа', 'часов']);
			var time = "<span>"+ time1 + "</span> " + time2;
			$(this).find('.noUi-signature span').html(time);
			$(this).find('.noUi-arrow').removeClass("noUi-arrow-active");
			$(this).find('.noUi-arrow').slice(0, ($(this).val()) * 1-1).addClass("noUi-arrow-active");
			all_time = $(this).val() * 1 + delta_lease_time;
			update_price();
		
			if ($(this).val() < minimal_lease_time * 1 )
			$("#calculator_auto .lease_time_slider").val(minimal_lease_time, true);
			
		}
	});
	
	$("#calculator_auto .porter_time_slider").noUiSlider({
		range: [1, 10],
		start: 2,
		handles: 1,
		step: 1,
		slide: function() {
			var time11 = $(this).val() * 1 + delta_porter + " ";
			var time12 = declOfNum($(this).val()*1 + delta_porter, ['час', 'часа', 'часов']);
			var time1 = "<span>"+ time11 + "</span> " + time12;
			$(this).find('.noUi-signature span').html(time1);
			$(this).find('.noUi-arrow').removeClass("noUi-arrow-active");
			$(this).find('.noUi-arrow').slice(0, ($(this).val()) * 1-1).addClass("noUi-arrow-active");
			porter_time = $(this).val() * 1+ delta_porter;
			update_price();
			
			if ($(this).val() < porter_minimum_time * 1)
				$("#calculator_auto .porter_time_slider").val(porter_minimum_time, true);
		},
		set: function() {
			var time11 = $(this).val() * 1 + delta_porter + " ";
			var time12 = declOfNum($(this).val()*1 + delta_porter, ['час', 'часа', 'часов']);
			var time1 = "<span>"+ time11 + "</span> " + time12;
			$(this).find('.noUi-signature span').html(time1);
			$(this).find('.noUi-arrow').removeClass("noUi-arrow-active");
			$(this).find('.noUi-arrow').slice(0, ($(this).val()) * 1-1).addClass("noUi-arrow-active");
			porter_time = $(this).val() * 1+ delta_porter;
			update_price();
			
			if ($(this).val() < porter_minimum_time * 1)
				$("#calculator_auto .porter_time_slider").val(porter_minimum_time, true);
		}
	});
	
	$.each($("#calculator_auto .lease_time_slider, #calculator_auto .porter_time_slider"), function() {
		$(this).find('.noUi-origin').append('<div class="noUi-signature"><span>1 час</span></div>');
		$(this).find('.noUi-base').append('<div class="noUi-arrow-block"></div>');
		var width_div =  Math.round($(this).find('.noUi-base').width() / 9) - 2;
		for (var i = 0; i < 9; i++) {
			$(this).find('.noUi-base').find(".noUi-arrow-block").append('<div style="left: '+ 100 / 9 +'%; width: '+ width_div +'px" class="noUi-arrow"></div>');
		}
	});
	
	$(".car_menu a").click(function(){
		minimal_lease_time1 = $(this).attr("data-rental_time");
		delta_lease_time = minimal_lease_time1*1 - 2;
		minimal_lease_time = minimal_lease_time1*1-delta_lease_time;
		$("#calculator_auto .lease_time_slider").val(minimal_lease_time, true);
		porter_minimum_time1 = $('#calculator_auto [name="cost_porter"]:checked').attr("data-minimum_time");
		delta_porter = porter_minimum_time1*1 - 2;
		porter_minimum_time = porter_minimum_time1*1-delta_porter;
		if (porter_minimum_time1*1 < porter_time ){
			$("#calculator_auto .porter_time_slider").val(porter_time - porter_minimum_time1*1 + 2, true);
		}else{
			$("#calculator_auto .porter_time_slider").val(porter_minimum_time, true);
		}
		cost = $(this).attr("data-cost");
		cost_dop = $(this).attr("data-cost_dop");
		margin_mkad = $(this).attr("data-margin_mkad");
		margin_ttk = $(this).attr("data-margin_ttk");
		margin_sadovoe = $(this).attr("data-margin_sadovoe");
		lease_name = $(this).find(".name").text().toLowerCase();
		$("#calculator_auto .main_img, #orderModal .main_img").attr("src", $(this).attr("data-img"));
		$("#calculator_auto .cost").text(cost);
		$("#calculator_auto h2 .cost_dop").text(cost_dop);
		$("#calculator_auto .sad_cost").text(margin_sadovoe);
		$("#calculator_auto .ttk_cost").text(margin_ttk);
		$("#calculator_auto .mkad_cost").text(margin_mkad);
		$("#calculator_auto h3").text($(this).attr("data-name"));
		$("#calculator_auto .volume").text($(this).attr("data-volume") + " м3");
		$("#calculator_auto .tonnage").text($(this).attr("data-tonnage") + " тонн");
		ttk = $('.active_dopoln .time_ttk').text()*1;
		ttk = ttk*margin_ttk*1;
		sad = $('.active_dopoln .time_sad').text()*1;
		sad = sad*margin_sadovoe*1;
		mkad = $('.active_dopoln .km_mkad').text()*1;
		mkad = mkad*margin_mkad*1;

		if (typeof $(this).attr("data-width") == 'undefined' && typeof $(this).attr("data-length") == 'undefined' && typeof $(this).attr("data-height") == 'undefined')
			$("#calculator_auto .size").text("уточняйте у оператора");
		else
			$("#calculator_auto .size").text($(this).attr("data-width")+"м x "+$(this).attr("data-length")+"м x "+$(this).attr("data-height")+"м");

		$(".car_menu a").removeClass("active");
		$(this).addClass("active");
		active_car = $(this);
		update_price();
		return false;
	});
	
	$(".car_menu .active").trigger("click");
});