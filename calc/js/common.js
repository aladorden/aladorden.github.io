$(function() {


	$('.owl-carousel').owlCarousel({
		loop:true,
		nav:true,
		items: 1,
	//  	animateOut: 'fadeOut',
		// animateIn: 'fadeIn',
		navText: false,
	})


	$('select, input[type="number"]').styler();

	$("#phone").inputmask({ showMaskOnHover: false });
	$("#name").inputmask({ showMaskOnHover: false });

	$("#phone1").inputmask({ showMaskOnHover: false });
	$("#name1").inputmask({ showMaskOnHover: false });

	$('[data-toggle="datepicker"]').datepicker({

	});


	$('#basicExample').timepicker({
		'timeFormat': 'H:i'
	});



	function init() {

		var myMap = new ymaps.Map('map', {
			center: [55.75, 37.64],
			zoom: 11,
			type: 'yandex#map',
			controls: []
		}),
		searchStartPoint = new ymaps.control.SearchControl({
			options: {
				useMapBounds: true,
				noPlacemark: true,
				noPopup: true,
				placeholderContent: 'Адрес начальной точки',
				size: 'large'
			}
		}),
		searchFinishPoint = new ymaps.control.SearchControl({
			options: {
				useMapBounds: true,
				noCentering: true,
				noPopup: true,
				noPlacemark: true,
				placeholderContent: 'Адрес конечной точки',
				size: 'large',
				float: 'none',
				position: { right: 10, top: 10 }
			}
		}),
		calculator = new DeliveryCalculator(myMap);

		myMap.controls.add(searchStartPoint);
		myMap.controls.add(searchFinishPoint);

		searchStartPoint.events.add('resultselect', function (e) {
			var results = searchStartPoint.getResultsArray(),
			selected = e.get('index'),
			point = results[selected].geometry.getCoordinates();

			calculator.setStartPoint(point);
		})
		.add('load', function (event) {
            // По полю skip определяем, что это не дозагрузка данных.
            // По getRusultsCount определяем, что есть хотя бы 1 результат.
            if (!event.get('skip') && searchStartPoint.getResultsCount()) {
            	searchStartPoint.showResult(0);
            }
          });

		searchFinishPoint.events.add('resultselect', function (e) {
			var results = searchFinishPoint.getResultsArray(),
			selected = e.get('index'),
			point = results[selected].geometry.getCoordinates();

			calculator.setFinishPoint(point);
		})
		.add('load', function (event) {
            // По полю skip определяем, что это не дозагрузка данных.
            // По getRusultsCount определяем, что есть хотя бы 1 результат.
            if (!event.get('skip') && searchFinishPoint.getResultsCount()) {
            	searchFinishPoint.showResult(0);
            }
          });
	}

	function DeliveryCalculator(map) {
		this._map = map;
		this._start = null;
		this._route = null;
		this._startBalloon;
		this._finishBalloon;

		map.events.add('click', this._onClick, this);
	}

	var ptp = DeliveryCalculator.prototype;

	ptp._onClick= function (e) {
		if (this._start) {
			this.setFinishPoint(e.get('coords'));
		} else {
			this.setStartPoint(e.get('coords'));
		}
	};

	ptp._onStartDragEnd = function (e) {
		var coords = this._start.geometry.getCoordinates();
		this.geocode("start", coords);
	}

	ptp._onFinishDragEnd = function (e) {
		var coords = this._finish.geometry.getCoordinates();
		this.geocode("finish", coords);
	}

	ptp.getDirection = function () {
		if(this._route) {
			this._map.geoObjects.remove(this._route);
		}

		if (this._start && this._finish) {
			var self = this,
			start = this._start.geometry.getCoordinates(),
			finish = this._finish.geometry.getCoordinates(),
			startBalloon = this._startBalloon,
			finishBalloon = this._finishBalloon;


			ymaps.route([start, finish])
			.then(function (router) {
				var distance = Math.round(router.getLength() / 1000),
				message = '<span>Расстояние: ' + distance + 'км.</span><br/>' +
				'<span style="font-weight: bold; font-style: italic">Стоимость доставки: <span class="pricedost">%s</span>р.</span>';

				self._route = router.getPaths();

				self._route.options.set({ strokeWidth: 5, strokeColor: '0000ffff', opacity: 0.5 });
				self._map.geoObjects.add(self._route);
				self._start.properties.set('balloonContentBody', startBalloon + message.replace('%s', self.calculate(distance)));
				self._finish.properties.set('balloonContentBody', finishBalloon + message.replace('%s', self.calculate(distance)));
			// self._start.balloon.open();
			// self._finish.balloon.open();
		});

			self._map.setBounds(self._map.geoObjects.getBounds())
		}
	};


	ptp.setStartPoint = function (position) {
		if(this._start) {
			this._start.geometry.setCoordinates(position);
		}
		else {
			this._start = new ymaps.Placemark(position, { iconContent: 'А' }, { draggable: true });
			this._start.events.add('dragend', this._onStartDragEnd, this);
			this._map.geoObjects.add(this._start);
		}
		this.geocode("start", position);
	};

	ptp.setFinishPoint = function (position) {
		if(this._finish) {
			this._finish.geometry.setCoordinates(position);
		}
		else {
			this._finish = new ymaps.Placemark(position, { iconContent: 'Б' }, { draggable: true });
			this._finish.events.add('dragend', this._onFinishDragEnd, this);
			this._map.geoObjects.add(this._finish);
		}
		if (this._start) {
			this.geocode("finish", position);
		}
	};

	ptp.geocode = function (str, point) {
		ymaps.geocode(point).then(function(geocode) {
			if (str == "start") {
				this._startBalloon = geocode.geoObjects.get(0) &&
				geocode.geoObjects.get(0).properties.get('balloonContentBody') || '';
				console.log(str + " " + this._startBalloon);
				$('.route-final .start').html(this._startBalloon);
			} else {
				this._finishBalloon = geocode.geoObjects.get(0) &&
				geocode.geoObjects.get(0).properties.get('balloonContentBody') || '';
				console.log(str + " " + this._finishBalloon);
				$('.route-final .finish').html(this._finishBalloon);
			}
			this.getDirection();
		}, this);

	}
	ptp.calculate = function (len) {
    // Константы.
    var DELIVERY_TARIF = 200,
    MINIMUM_COST = 500;

    return Math.max(len * DELIVERY_TARIF, MINIMUM_COST);
  };

  ymaps.ready(init);

  $( document ).ready(function() {

  	$( ".btn-map" ).click(function() {
  		$('.part-map').hide();
  		$('.part-car').show();
  		$('.st-2, .arr-1, .arr-2').addClass("active");
  	});

 	$( ".btn-car" ).click(function() {
  		$('.part-car').hide();
  		$('.dop-param-part').show();
  		$('.start p').remove();
  		$('.finish p').remove();
  		$('.st-3, .arr-2').addClass("active");
  		$('.arr-2').addClass("active-1");
  	});

 		$( ".st-1" ).click(function() {
  		$('.dop-param-part, .accept-part, .accept-later, .part-car').hide();
  		$('.part-map').show();
  		$('.start p').remove();
  		$('.finish p').remove();
  		$('.st-2, .arr-1, .arr-2').removeClass("active");
  		$('.arr-2').removeClass("active-1");
  		$('.st-3').removeClass("active");
  	});
 	$( ".st-2" ).click(function() {
  		$('.dop-param-part, .accept-part, .accept-later, .part-map').hide();
  		$('.part-car').show();
  		$('.start p').remove();
  		$('.finish p').remove();
  		$('.st-2, .arr-1, .arr-2').addClass("active");
  		$('.arr-2').removeClass("active-1");
  		$('.st-3').removeClass("active");
  	});

 	$( ".st-3" ).click(function() {
  		$('.part-car, .accept-part, .accept-later, .part-map').hide();
  		$('.dop-param-part').show();
  		$('.start p').remove();
  		$('.finish p').remove();
  		$('.st-2, .arr-1, .arr-2').addClass("active");
  		$('.st-3, .arr-2').addClass("active");
  		$('.arr-2').addClass("active-1");
  	});

  	$( ".btn-acc" ).click(function() {
  		$('.dop-param-part').hide();
  		$('.accept-part-1').show();

  	});


  $( ".btn-later" ).click(function() {
  	$('.accept-part-1').hide();
  	$('.accept-later').show();
  });

  $( ".btn-before" ).click(function() {
  	$('.accept-later').hide();
  	$('.accept-part-1').show();
  });

 // $('.btn-map').on('click',function() {
 //   $('.route-final .value').text($start);
 //  });

 // $('.btn-map').on('click',function() {
 // 	$price_rout = $(".pricedost").text();
 // 	$('.final-price .value').text($price_rout);
 // });



 function Summary() {
 	this.loaders_count = 1;

 	this.setLoadersCount = function (count) {
 		this.loaders_count = count;
 		this.buildSummary();
 	};

 	this.buildSummary = function () {
 		var summary_code = "";
 		$pr_ld = summary_code += + this.loaders_count ;
 		$('.summary__list .loaders-final .value').text($pr_ld);
 	};

 }
 var summary = new Summary()

 $('.loaders__count input').on('change', function (e) {
 	var input = $(this)[0];
 	summary.setLoadersCount(parseInt($(input).val()));
 });



 $('.dop-param-part').on('change', function (e) {

//кол-во доп. параметров
$time_loaders = $('#time-loaders').val();
$box_big = $('#box-big').val();
$box_small = $('#box-small').val();
$membrane = $('#membrane').val();
$membrane_str = $('#membrane-str').val();
$cardboard = $('#cardboard').val();
$scotch = $('#scotch').val();

//стоимость доп. параметров
$time_ld_pr = $('#time-loaders').attr('data-loads_time') * $time_loaders;
$box_bg_pr = $('#box-big').attr('data-box_bg') * $box_big;
$box_sm_pr = $('#box-small').attr('data-box_sm') * $box_small;
$membrane_pr = $('#membrane').attr('data-membr') * $membrane;
$membrane_str_pr = $('#membrane-str').attr('data-membr-str') * $membrane_str;
$cardboard_pr = $('#cardboard').attr('data-cardb') * $cardboard;
$scotch_pr = $('#scotch').attr('data-scotch') * $scotch;
// $count_pr = $('.loaders__count').attr('data-count_pr') * $('.loaders-final .value');
//рассчет итоговой цены
$final_price = parseInt($time_ld_pr) + parseInt($box_bg_pr) + parseInt($box_sm_pr) + parseInt($membrane_pr) + parseInt($membrane_str_pr) + parseInt($cardboard_pr) + parseInt($scotch_pr)

//вывод итоговых параметров
$('.ld-time-final .value').text($time_loaders);
$('.box-bg-final .value').text($box_big);
$('.box-sm-final .value').text($box_small);
$('.membrane-final .value').text($membrane);
$('.membrane-str-final .value').text($membrane_str);
$('.cardboard-final .value').text($cardboard);
$('.scotch-final .value').text($scotch);

if ($time_loaders > 0){
	$('.ld-time-final').show();
}else
$('.ld-time-final').hide();

if ($box_big > 0){
	$('.box-bg-final').show();
}else
$('.box-bg-final').hide();

if ($box_small > 0){
	$('.box-sm-final').show();
}else
$('.box-sm-final').hide();

if ($membrane > 0){
	$('.membrane-final').show();
}else
$('.membrane-final').hide();

if ($membrane_str > 0){
	$('.membrane-str-final').show();
}else
$('.membrane-str-final').hide();

if ($cardboard > 0){
	$('.cardboard-final').show();
}else
$('.cardboard-final').hide();

if ($scotch > 0){
	$('.scotch-final').show();
}else
$('.scotch-final').hide();


//вывод итоговой цены
$('.final-price .value').text($final_price);


});


 $('.start').remove('p');

});


$('.btn-check').on('click',function() {
	var text = $("div.owl-item.active .car-title span").text();
	$('.auto-final .value').text(text);
});


});