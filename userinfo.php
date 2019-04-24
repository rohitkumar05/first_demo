<?php
if(isset($_POST['submit'])) {
//print_r($_POST);die;
	$a=$_POST['uid'];
	$b=$_POST['fname'];
	$c=$_POST['lname'];
	$d=$_POST['uemail'];
	$e=$_POST['gender'];
	$f=$_POST['upon'];
	$g=$_POST['uzip'];
	$h=$_POST['ucity'];
	$i=$_POST['ucountry'];

//$con=mysqli_connect("localhost","root","hms@2019","user");
// Create connection
$conn = new mysqli("localhost","root","hms@2019","user");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully"; 	

$sql="insert into user_info(uid,fname,lname,uemail,gender,upon,uzip,ucity,ucountry)values('$a','$b','$c','$d','$e','$f','$g','$h','$i')";



	if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>

<!------------submit  end------------->

<!DOCTYPE html>
<html>
<head>
<title>user data</title>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<style>

.btn-default {
      box-shadow: 1px 2px 5px #000000;   
  }
  .btn-default {
      background: #000;
      color: #fff;
   }
  .btn-default:hover {
      background: #fff;
      color: #000;
   }


  

body {
  background-color: black;
}
</style>
<div class="container">
<center>
<form method="post" action="">
<table class="table table-dark table-striped" id="rohit" >


<h1 style="color:white;">USER INFORMATION</h1>
<img src="image/Customers_customer_user_male_man_people_light.png" class="mx-auto d-block" style="width:10%"> 
<tr>
<th> USER ID : </th>
<td><input type ="text" placeholder=" ENTER ID: "name="uid"/></td>
</tr>
<tr>
<th>FIRST NAME : </th>
<td><input type="text" placeholder="ENTER FIRST NAME"name="fname"/></td>
</tr>
<tr>
<th>LAST NAME : </th>
<td><input type="text" placeholder="ENTER LAST NAME"name="lname"/></td>
</tr>
<tr>
<th>EMAIL : </th>
<td><input type="email" placeholder="ENTER EMAIL"name="uemail"/></td>
</tr>
<tr>
<th>GENTER : </th>
<td> <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female
  <input type="radio" name="gender" value="other"> Other</td>
</tr>
<tr>
<th>PHONE NUMBER : </th>
<td><input type="number" placeholder="ENTER PHONE NUMBER"name="upno"/></td>
</tr>
<tr>
<th>ZIP CODE : </th>
<td><input type="number" placeholder="ENTER zip CODE"name="uzip"> </tr>
</tr>
<tr>
<th>CITY</th>
<td><input type="text" placeholder="ENTER CITY NAME"name="ucity"/></td>
</tr>
<tr>
<th>STATE</th>

<td><select name="ucity">
	<option placeholder="Select State">--SELECT STATE--</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jammu & Kashmir">Jammu & Kashmir</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Maharashtra">Maharashtra</option>
</select>
</td>
</tr>
<tr>
<th>COUNTRY:</th>
<td><select name="ucountry">
	<option placeholder="SELECT COUNTRY">--SELECT COUNTRY--</option>
  
  <option value="India">India</option>
  <option value="Japan">Japan</option>
  <option value="United States of America">United States of America</option>
  <option value="South Korean">South Korean</option>
  <option value="Germany">Germany</option>
  <option value="China">China</option>
  <option value="England">England</option>
  <option value="Canada">Canada</option>
  <option value="Sweden">Sweden</option>
  <option value="Kerala">Kerala</option>
  <option value="Australia">Maharashtra</option>
  <option value="Russia">Russia</option>
  <option value="Finland">Finland</option>
  <option value="Russia">Russia</option>
</select>
</td>
</tr>

<div class="container">
<tr>
<td></td>
   <td><input type="submit" class="btn btn-default" value="SUBMIT" name="submit"></td>
</tr>
</div>

</table>
</form>
</center>

</body>
</head>
</html>







