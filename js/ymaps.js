ymaps.ready(function () {
    // Создание карты
    var myMap = new ymaps.Map('map', {
        center: [43.4047257986593, 39.95964882209595],
        zoom: 15,
        controls: [] // Отключаем все элементы управления
    });

    // Создание и добавление стандартной метки в центр карты
    var myPlacemark = new ymaps.Placemark([43.4047257986593, 39.95964882209595], {
        // Свойства метки
        hintContent: 'Сириус'
    }, {
        // Опции метки
        preset: 'islands#redIcon' // Использование стандартной красной иконки
    });

    myMap.geoObjects.add(myPlacemark);
});