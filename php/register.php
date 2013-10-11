<?php
$con = mysqli_connect("localhost","root","qburst1234","onlineshopping");
if(mysqli_connect_errno($con)>0)
    echo "connection error";
$i=mysqli_query($con,"insert into register (username,email,password) values('".$_POST['username']."','".$_POST['email']."','".$_POST['password']."')");
echo $i;
 ?>
