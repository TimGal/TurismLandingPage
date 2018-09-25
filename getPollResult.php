<?php
    // название файла: getColorRGB.php
//    header("Content-Type: application/json; charset=UTF-8");
    $json = file_get_contents("polls.json");
    //Выводим JSON для AJAX-запрса:
    echo $json;
?>
