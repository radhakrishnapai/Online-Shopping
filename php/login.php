<?php
$con = mysqli_connect("localhost","root","qburst1234","onlineshopping");
if(mysqli_connect_errno($con)>0)
    echo "connection error";
$result=mysqli_query($con,"select username from register where email = '".$_POST['email']."' and password = '".$_POST['password']."'");
if(mysqli_num_rows($result)>0)
{
    $row = mysqli_fetch_array($result);
    echo $row['username'];
}
else
{
	echo "fail";
}
 ?>
