
<!---------START SUBMIT------------>
<?php

if(isset($_POST['submit'])) {
//print_r($_POST);die;
	$first_name=$_POST['first_name'];
	$last_name=$_POST['last_name'];
	$email=$_POST['email'];
	$password=$_POST['password'];
	$confirm_password=$_POST['confirm_password'];
	$gender=$_POST['gender'];
    $address=$_POST['address'];
    $phone_number=$_POST['phone_number'];
    $zip_code=$_POST['zip_code'];
	$city=$_POST['city'];
	$state=$_POST['state'];
    $country=$_POST['country'];
//$con=mysqli_connect("localhost","root","hms@2019","user");
// Create connection
$conn = new mysqli("localhost","root","hms@2019","first");

// Check connection
if ($conn->connect_error) {
    
    die($sql); ("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully"; 	

$sql="insert into users(first_name,last_name,email,password,confirm_password,gender,address,phone_number,zip_code,city,state,country)
values('$first_name','$last_name','$email','$password','$confirm_password','$gender','$address','$phone_number',',$zip_code','$city','$state','$country')";

 
//die($sql) => die($sql);
	if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>

<!------------submit  end------------->


<?php include_once('./partials/header.php'); ?>
<center>
<div class="container">
<form action="" class="needs-validation" novalidate>
    <div class="form-group">
    <table class="table table-dark table-striped" >
<h1 style="color:white;"> USER  REGISTRATION</h1>
<tr>
<div class="form-group">
<th>FIRST NAME:</th>
<td><input type="text" placeholder="ENTER FIRST NAME :"  name="first_name"required></td>
</div>
</tr>
<tr>
<th>LAST NAME:</th>
<td><input type="text" placeholder="ENTER LAST NAME :"  name="last_name"required></td>
</tr>

<tr>
<th>E-MAIL:</th>
<td><input type="email" placeholder="ENTER E-MAIL :" name="email"required></td>
</tr>
<tr>
<th>PASSWORD:</th>
<td><input type="password" placeholder="ENTER PASSWORD :" name="password"required></td>
</tr>
<tr>
<th>CONFIRM PASSWORD:</th>
<td><input type="password" placeholder="ENTER CONFIRM PASSWORD :" name="confirm_password"required></td>
</tr>
<tr>
<th>GENTER : </th>
<td> <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female
  <input type="radio" name="gender" value="other"> Other 
</tr>
<tr>
<th>ADDRESS:</th>
<td><input type="text" placeholder="ENTER ADDRESS :" name="address"required></td>
</tr>
<tr>
<th>PHONE NUMBER:</th>
<td><input type="text" placeholder="ENTER NUMBER" name="phone_number"></td>
</tr>
<tr>
<th>ZIP CODE:</th>
<td><input type="text" placeholder="ENTER ZIP CODE" name="zip_code"required></td>
</tr>
<tr>
<th>CITY:</th>
<td><input type="text" placeholder="ENTER CITY :" name="city"required></td>
</tr>
<tr>
<th>STATE</th>

<td><select name="state">
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

</tr>
<th>COUNTRY:</th>
<td><select name="country">
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
<div class="container">
<tr>
<td></td>
   <td><input type="submit" class="btn btn-default" value="SUBMIT" name="submit"></td>
</tr>
</div>
</div>
</div>
<center>
</div>
</table>
</form>
<?php include_once('./partials/footer.php');?>