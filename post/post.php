<?php

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

if($usuario === '' || $pass === ''){

    //enviar el echo en formato json
    echo json_encode ('error');
}else{

    echo json_encode('Enviado <br> usuario: '.$usuario.'<br> Pass: '.$pass);
}