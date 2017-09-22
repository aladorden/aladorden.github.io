function update_error(elem) {
	if (elem.hasClass("error"))
		elem.parent().addClass("error-border");
	else
		elem.parent().removeClass("error-border");
}

function modal_ok() {
	$("#modal-ok").arcticmodal();
	setInterval(function() {
		$("#modal-ok").arcticmodal("close");
	}, 5000)
}

$(document).ready(function() {
	$(".js_radio input").change(function() {
		$(this).parent().parent().find("label").removeClass("active");
		$(this).parent().addClass("active");
	});
	
	$('input[name="datepicker"]').appendDtpicker({
		"closeOnSelected": true,
		"locale": "ru",
		"firstDayOfWeek": 1
	});
	 $(".phone input").attr('id', 'inptel');
	 
	$(".phone input").mask("+7(9?99) 999-99-99******************************", {
		function_ok: function(){
			$(".phone input:focus").removeClass("error").addClass("success");
			update_error($(".phone input:focus"));
		},
		function_no: function(){
			$(".phone input:focus").removeClass("success").addClass("error");
			update_error($(".phone input:focus"));
		}
	});
	

	$('input[name="form_text_34"]').change(function() {
	if($('input[name="form_text_34"]').val()!="") {
		
			$('input[name="form_text_34"]:focus').removeClass("error").addClass("success");
			update_error($('input[name="form_text_34"]:focus'));
			if ($(this).parent().find(".phone_ok").length == 0) {
				$(this).after('<span class="phone_ok"></span>').parent().find(".phone_ok").css({ "left": 260 + "px", "top": 0 + "px"});
			}
		}else
		{
			$('input[name="form_text_34"]:focus').removeClass("success").addClass("error");
			update_error($('input[name="form_text_34"]:focus'));
			$(this).parent().find(".phone_ok").remove();	
		}
		});
	
	// Мой код
	$('input[name="form_text_70"]').change(function() {
	if($('input[name="form_text_70"]').val()!="") {
		
			$('input[name="form_text_70"]:focus').removeClass("error").addClass("success");
			update_error($('input[name="form_text_70"]:focus'));
			if ($(this).parent().find(".phone_ok").length == 0) {
				$(this).after('<span class="phone_ok"></span>').parent().find(".phone_ok").css({ "left": 260 + "px", "top": 0 + "px"});
			}
		}else
		{
			$('input[name="form_text_70"]:focus').removeClass("success").addClass("error");
			update_error($('input[name="form_text_70"]:focus'));
			$(this).parent().find(".phone_ok").remove();	
		}
		});
		

	$(".phone input").on('click keypress', function () {
	     
			if ($(this).caret().begin >16 || $(this).caret().begin <3 || $(this).val() == "+7(___) ___-__-__")
			$(this).caret(3);
	        
	});
	
	$(".box-modal").on("keyup", ".phone input", function() {
		if ($(this).hasClass("success")) {
			if ($(this).parent().find(".phone_ok").length == 0) {
				var pos = $(this).position();
				$(this).after('<span class="phone_ok"></span>').parent().find(".phone_ok").css({ "left": (pos.left + $(this).width() + 20) + "px", "top": (pos.top - 8) + "px"});
			}
		}
		else {
			$(this).parent().find(".phone_ok").remove();
		}
	});
	

	$.validator.addMethod("custom_phone", function(value, element) {
		return $(element).hasClass("success");
	}, 
	"");
});