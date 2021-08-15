<?php
    include 'connect.php';
    $name = mysqli_real_escape_string($conn,$_POST['name']);
    $phone = mysqli_real_escape_string($conn,$_POST['phone']);
    
    $sql = "INSERT INTO vitality-orders(name,phone) VALUES($name, $phone)";
    $query = mysqli_query($conn, $sql);

?>