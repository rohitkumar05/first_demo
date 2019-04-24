<?php
if(isset($_POST['submit'])) {
	$a=$_POST['id_t'];
	$b=$_POST['name'];
	$c=$_POST['email'];
	


$conn = new mysqli("localhost","root","hms@2019","nikhil");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully"; 	

$sql="insert into tbl_nikhil(id_t,name,email)values('$a','$b','$c')";



	if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>



<!DOCTYPE html>
<html>
<body>

<h2>HTML Forms</h2>

<form method="post" action="">

   user id:<br>
  <input type="text" name="id_t" placeholder="eneter id">
  <br>
  First name:<br>
  <input type="text" name="name" placeholder="eneter name">
  <br>
  Last name:<br>
  <input type="text" name="email"placeholder="enter email" >
  <br>
  <input type="submit" class="btn btn-default" value="SUBMIT" name="submit">
</form> 



</body>
</html>

