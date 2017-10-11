$(function() {
	setInterval(function() { 

		$('.owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			items: 1,
	//  	animateOut: 'fadeOut',
		// animateIn: 'fadeIn',
		navText: false,
	})
	}, 50);


	$('select, input[type="number"]').styler();
	$("#phone").inputmask({ showMaskOnHover: false });
	$("#name").inputmask({ showMaskOnHover: false });

	$('[data-toggle="datepicker"]').datepicker({
		'language': 'ru-RU'
	});


	$('#basicExample').timepicker({
		'timeFormat': 'H:i'
	});
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
			'<span style="font-weight: bold; font-style: italic">Стоимость доставки: %sр.</span>';

			self._route = router.getPaths();

			self._route.options.set({ strokeWidth: 5, strokeColor: '0000ffff', opacity: 0.5 });
			self._map.geoObjects.add(self._route);
			self._start.properties.set('balloonContentBody', startBalloon + message.replace('%s', self.calculate(distance)));
			self._finish.properties.set('balloonContentBody', finishBalloon + message.replace('%s', self.calculate(distance)));

			self._finish.balloon.open();
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
		} else {
			this._finishBalloon = geocode.geoObjects.get(0) &&
			geocode.geoObjects.get(0).properties.get('balloonContentBody') || '';
			console.log(str + " " + this._finishBalloon);
		}
		this.getDirection();
	}, this);

}
ptp.calculate = function (len) {
    // Константы.
    var DELIVERY_TARIF = 20,
    MINIMUM_COST = 500;

    return Math.max(len * DELIVERY_TARIF, MINIMUM_COST);
  };

  ymaps.ready(init);

$( document ).ready(function() {
		// $( ".btn-check" ).click(function() {
		// 	$('.part-map').hide();
		// 	$('.dop-param-part').show();
		// });

		$('.dop-param-part').on('change', function (e) {

//кол-во доп. параметров
$time_loaders = $('#time-loaders').val();
$box_big = $('#box-big').val();
$box_small = $('#box-small').val();
$membrane = $('#membrane').val();
$membrane_str = $('#membrane-str').val();
$cardboard = $('#cardboard').val()
$scotch = $('#scotch').val()
$counters = $('.loaders__count input').val();
//стоимость доп. параметров
$time_ld_pr = $('#time-loaders').attr('data-loads_time') * $time_loaders;
$box_bg_pr = $('#box-big').attr('data-box_bg') * $box_big;
$box_sm_pr = $('#box-small').attr('data-box_sm') * $box_small;
$membrane_pr = $('#membrane').attr('data-membr') * $membrane;
$membrane_str_pr = $('#membrane-str').attr('data-membr-str') * $membrane_str;
$cardboard_pr = $('#cardboard').attr('data-cardb') * $cardboard;
$scotch_pr = $('#scotch').attr('data-scotch') * $scotch;
$counters_pr = $('.loaders__count input').attr('data-ld') * $counters;
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
$('.loaders-final .value').text($counters);

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

// if ($counters > 0){
// 	$('.loaders-final').show();
// }else
// $('.loaders-final').hide();
//вывод итоговой цены
$('.final-price .value').text($final_price);

// $(':contains("loaders-count=")').each(function(){
// 		$(this).html($(this).html().split("loaders-count=").join(""));
// })
// if($('.auto-final .value:contains("loaders-count=")'))
// {
// 	$('.auto-final .value:contains("loaders-count=")').remove();
// }
});

		// $('.loaders__count').on('change', function (e) {

			
		// 	$('.loaders-final .value').text($counters);
		// 	if ($counters > 0){
		// 		$('.loaders-final').show();
		// 	}else
		// 	$('.loaders-final').hide();
		// });

		$('.btn-car').one('click',function() {
			$("div.owl-item.active .car-title span").clone().appendTo(".auto-final .value");
		});
$('.btn-check').click(function(){
	$('.ymaps h3').clone().appendTo('.loaders-final .value');
	});

});






