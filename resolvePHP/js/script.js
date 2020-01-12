$(function () {
    $("#distance").bind("keyup", function () {
        let distance = $(this).val();
        if(isNaN(distance) || distance == ""){
            $("#price").html("Цена: 0 TJS ");
            return;
        }
        let  data = {
            distance: distance
        };

        $.post("http://localhost:8080/resolvePHP/api/controllers/countController.php", data, function () {

        }).done(function (data) {
            $("#price").html("Цена: " + data + " TJS ")
        })
    })
})