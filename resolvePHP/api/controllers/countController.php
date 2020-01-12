<?php
    $distance = $_POST['distance'];
    $price = 0;
    $first_distance = 999;

    if($distance <= $first_distance){
        $price = $distance * 0.5;
    }
    else if ($distance > 999 && $distance < 2000){
        $second_distance = $distance - $first_distance;
        $price = ($first_distance * 0.5) + ($second_distance * 0.45);
    }
    else if ($distance > 1999){
        $second_distance = 1000;
        $third_distance = $distance - ($first_distance + $second_distance);
        $price = ($first_distance * 0.5) + ($second_distance * 0.45) + ($third_distance * 0.4);
    }

    echo $price;
?>