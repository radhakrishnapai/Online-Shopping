<?php 
session_start();
$link = mysql_connect('localhost', 'root', 'qburst1234');
if (!$link) {
    die('Not connected : ' . mysql_error());
}

// make foo the current db
$db_selected = mysql_select_db('onlineshopping', $link);
if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
}
$sql    = "select serialno from product where name = '".$_POST['name']."'";
$result = mysql_query($sql, $link);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

while ($row = mysql_fetch_assoc($result)) {
////    print_r($row);
//    echo $row['name'];
    $sql    = "insert into cart(userid,serialno) values(".$_SESSION['userid'].",".$row['serialno'].")";
    $variable   = mysql_query($sql,$link);
}
//echo $sql;
echo $_SESSION['userid'];
//echo $variable;
mysql_free_result($result);


//echo 'hello world';
//session_start();
//$con = mysqli_connect("localhost","root","qburst1234","onlineshopping");
//$asd = "Hello world";
//echo "$asd";
//if(mysqli_connect_errno($con)>0)
//    echo "connection error";
//$result=mysqli_query($con,"select username from register where email = 'q@q.com' and password = '12'");
////$result=  mysqli_query($con,"select * from product where name = 'Nokia Lumia 1020'");
//echo "hello world";
//$i=mysqli_query($con,"insert into register (username,email,password) values('".$_POST['username']."','".$_POST['email']."','".$_POST['password']."')");
//echo $i;
//if(mysqli_num_rows($result)>0)
//{
//    $row = mysqli_fetch_array($result);
//    $_SESSION['username']=$row['username'];
//    echo $_SESSION['username'];
//}
//else
//{
//	echo "fail";
//}
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
