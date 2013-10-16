<?php
$link = mysql_connect('localhost', 'root', 'qburst1234');
if (!$link) {
    die('Not connected : ' . mysql_error());
}

// make foo the current db
$db_selected = mysql_select_db('onlineshopping', $link);
if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
}
$sql    = "select cart.productid,product.name,product.price,product.warranty,product.description from cart,product where cart.serialno = product.serialno";
$result = mysql_query($sql, $link);

//while($row = mysql_fetch_array($result))
//{
//    echo $row[0];
//    echo $row[1];
//    echo $row[2];
//    echo $row[3];
//    echo $row[4];
//}

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

echo "<table border='1'>
<tr>
<th>Serial No.</th>
<th>Name</th>
<th>Price</th>
<th>Warranty</th>
<th>Description</th>
</tr>";

while($row = mysql_fetch_array($result))
  {
  echo "<tr>";
  echo "<td>" . $row[0] . "</td>";
  echo "<td>" . $row[1] . "</td>";
  echo "<td>" . $row[2] . "</td>";
  echo "<td>" . $row[3] . "</td>";
  echo "<td>" . $row[4] . "</td>";
  echo "</tr>";
  }
  
echo "</table>";

mysqli_close($link);
  
//while ($row = mysql_fetch_assoc($result)) {
////    print_r($row);
//    echo $row['name'];
////    echo $result;
//}
//echo $result;
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
