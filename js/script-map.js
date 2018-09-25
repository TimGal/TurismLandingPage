ymaps.ready(function () {
	var mapJSON;

	var map = new ymaps.Map('map', {
			center: [49.11, 55.80],
			zoom: 12,
			controls: ['zoomControl']
		}),
		objectManager = new ymaps.ObjectManager({
			// Чтобы метки начали кластеризоваться, выставляем опцию.
			clusterize: true,
			// ObjectManager принимает те же опции, что и кластеризатор.
			gridSize: 64,
			// Макет метки кластера pieChart.
			clusterIconLayout: "default#pieChart"
		});

    map.behaviors.disable('scrollZoom'); 

	map.controls.get('zoomControl').options.set({
		size: 'small'
	});
	// Загружаем GeoJSON файл, экспортированный из Конструктора карт.



	$.getJSON('js/data3.json')
		.done(function (geoJson) {
	mapJSON = geoJson;
			geoJson.features.forEach(function (obj) {
				// Задаём контент балуна.
				obj.properties.balloonContent = obj.properties.name;

			});
			// Добавляем описание объектов в формате JSON в менеджер объектов.
			objectManager.add(geoJson);
			// Добавляем объекты на карту.
			map.geoObjects.add(objectManager);
		});

	// Создадим 4 пункта выпадающего списка.
	var listBoxItems = ['Музеи', 'Достопримечательности', 'Театры', 'Парки и набережные']
		.map(function (title) {
			return new ymaps.control.ListBoxItem({
				data: {
					content: title
				},
				state: {
					selected: false
				}
			});
		}),
		// Теперь создадим список, содержащий 4 пункта.
		listBoxControl = new ymaps.control.ListBox({
			data: {
				content: 'Фильтр',
				title: 'Фильтр'
			},
			items: listBoxItems,
			state: {
				// Признак, развернут ли список.
				expanded: false,
				filters: listBoxItems.reduce(function (filters, filter) {
					filters[filter.data.get('content')] = filter.isSelected();
					return filters;
				}, {})
			}
		});
	map.controls.add(listBoxControl);

	// Добавим отслеживание изменения признака, выбран ли пункт списка.
	listBoxControl.events.add(['select', 'deselect'], function (e) {
		var listBoxItem = e.get('target');
		var filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
		filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
		listBoxControl.state.set('filters', filters);
	});

	var filterMonitor = new ymaps.Monitor(listBoxControl.state);
	filterMonitor.add('filters', function (filters) {
		// Применим фильтр.
		objectManager.setFilter(getFilterFunction(filters));
	});

	function getFilterFunction(categories) {
		return function (obj) {
			var visible = false;
			for (var t in categories) {
				if (categories[t]) {
					if (obj.properties.type == t) {
						visible = true;
					}
				}
			}
			return visible;
		};
	}

	var items = listBoxControl.getAll();

	items[0].deselect();
	items[1].deselect();
	items[2].deselect();
	items[3].deselect();

	$(document).ready(function () {
		$("#museum").click(function () {
			if (items[0].isSelected()) {
				items[0].deselect();
				$("#museum").removeClass("active");
			} else {
				items[0].select();
				items[1].deselect();
				items[2].deselect();
				items[3].deselect();
				$("#museum").addClass("active");
				$("#historic").removeClass("active");
				$("#theatre").removeClass("active");
				$("#parks").removeClass("active");
			}
		});
		$("#historic").click(function () {
			if (items[1].isSelected()) {
				items[1].deselect();
				$("#historic").removeClass("active");
			} else {
				items[0].deselect();
				items[1].select();
				items[2].deselect();
				items[3].deselect();
				$("#museum").removeClass("active");
				$("#historic").addClass("active");
				$("#theatre").removeClass("active");
				$("#parks").removeClass("active");
			}
		});
		$("#theatre").click(function () {
			if (items[2].isSelected()) {
				items[2].deselect();
				$("#theatre").removeClass("active");
			} else {
				items[0].deselect();
				items[1].deselect();
				items[2].select();
				items[3].deselect();
				$("#museum").removeClass("active");
				$("#historic").removeClass("active");
				$("#theatre").addClass("active");
				$("#parks").removeClass("active");
			}
		});
		$("#parks").click(function () {
			if (items[3].isSelected()) {
				items[3].deselect();
				$("#parks").removeClass("active");
			} else {
				items[0].deselect();
				items[1].deselect();
				items[2].deselect();
				items[3].select();
				$("#museum").removeClass("active");
				$("#historic").removeClass("active");
				$("#theatre").removeClass("active");
				$("#parks").addClass("active");
			}
		});
	});

	function onObjectEvent (e) {
        var objectId = e.get('objectId');
        if (e.get('type') == 'click') {
            for (let object of mapJSON.features) {
				if (object.id == objectId) {
						console.log(object);
						console.log(e.get('objectId'));
						console.log(object.options.backgroundImage);
						$('div.map-photo').css('background-image', "url(" + object.options.backgroundImage + ")");
					}
			}
        }
    }

	objectManager.objects.events.add(['click'], onObjectEvent);
});
