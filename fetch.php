<?php
 $conn = new mysqli("localhost","root","hms@2019","first");{
    
    // Check connection
    if ($conn->connect_error) {
        
        die($sql); ("Connection failed: " . $conn->connect_error);
    } 
    echo "Connected successfully";
    $sql="select first_name, last_name, email, password, confirm_password, gender, address, phone_number, zip_code, city, state, country from users";
//die($sql) => die($sql);
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
}
?>     
   <?php include_once('./partials/header.php'); ?>
   <center>
<div class="container">
<form action=""  method="POST">
    <div class="form-group">
    <table class="table table-dark table-striped" >
<h1 style="color:white;"> USERS INFORMATION</h1>
<tr>
<div class="form-group">
<th>FIRST NAME:</th>
<th>LAST NAME:</th>
<th>E-MAIL:</th>
<th>PASSWORD:</th>
<th>CONFIRM PASSWORD:</th>
<th>GENTER:</th>
<th>ADDRESS:</th>
<th>PHONE NUMBER:</th>
<th>ZIP CODE:</th>
<th>CITY:</th>
<th>STATE:</th>
<th>COUNTRY:</th>
</tr>
</table>
</form>
<?php include_once('./partials/footer.php'); ?> 
