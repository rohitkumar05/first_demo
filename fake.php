<!DOCTYPE html>
<html>
<body>
<h2>HTML Forms</h2>

<form action="fake.php">
  First name:<br>
  <input type="text" name="name" placeholder="eneter name">
  <br>
  Last name:<br>
  <input type="text" name="email"placeholder="enter email" >
  <br><br>
  <input type="submit" value="Submit">
</form> 



</body>
</html>

<?php

if(isset($_POST['submit']))
{
	$a=$_POST['name'];
	$b=$_POST['email'];



$conn = new mysqli("localhost","root","hms@2019","nikhil");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully"; 	


$sql="insert into tbl_nikhil(name,email)values('$a','$b')";







	if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
