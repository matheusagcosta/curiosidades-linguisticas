<?php
$file = fopen("screenshot.png", "w");
$data = explode(",", $_POST['screenshot']);
$data = base64_decode($data[1]);
fwrite($file, $data);
fclose($file);
echo "OK";
