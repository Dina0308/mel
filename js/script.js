$(document).ready(function () {
    let currentFloor = 2,
        btnUp = $(".btn__up"),
        btnDown = $('.btn__down'),
        floorPath = $('.main__home path');

        //функция при наведении мышкой на этаж
        floorPath.on("mouseover", function() {
        floorPath.removeClass('current-floor');                       //удаляем активный этаж
        currentFloor = $(this).attr("data-floor");                      //получаем значение текущего этажа
        $(".main__floorNumb").text(currentFloor);                      //записываем значение этажа в счетчик
    });

    //отслеживаем клик по кнопке
    btnUp.on("click", function() {
        if (currentFloor < 18) {   //проверяем значение этажа
            currentFloor++;       // прибавляем этаж
            usCurrentFloor = currentFloor.toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false});    //форматируем значение этажа, чтобы было 02 а не 2
            $(".main__floorNumb").text(usCurrentFloor);           //записываем значение этажа в счетчик

            floorPath.removeClass('current-floor');             // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");     //подсвечиваем активный этаж
        }
    })

    btnDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false});
            $(".main__floorNumb").text(usCurrentFloor);

            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});