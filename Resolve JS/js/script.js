$(function () {
    $("#distance").bind('keyup', function () {
        let distance = parseFloat($("#distance").val());
        let first_distance = 999;
        let second_distance = 0;
        if(distance <= first_distance){
            $("#result").html("Cумма: " + (distance * 0.5).toFixed(2) + " TJS")
        }
        else if (distance >= 1000 && distance < 1999){
            second_distance = (distance - first_distance) * 0.45;
            let price = (first_distance * 0.5) + second_distance;
            $("#result").html("Cумма: " + price.toFixed(2) + " TJS")
        }
        else if (distance >= 2000){
            second_distance = 1000;
            let third_distance = (distance - first_distance - second_distance);
            let price = (first_distance * 0.5) + (second_distance * 0.45) + (third_distance * 0.4);
            $("#result").html("Сумма: " + price.toFixed(2) + " TJS");
        }
        if ($("#distance").val() == ""){
            $("#result").html("Введите расстояние чтоб узнать цену")
        }
    })
})