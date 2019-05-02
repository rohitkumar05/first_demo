<?php
$conn = new mysqli("localhost","root","hms@2019","first");{
    // Check connection
    if ($conn->connect_error) {
        die($sql); ("Connection failed: " . $conn->connect_error);
    } 
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);
    if ($result){
        while($row = $result->fetch_assoc()) {
            // echo $row["first_name"];
        }
    }
    // $conn->close();

?>     
<?php include_once('./partials/header.php'); ?>
<center>
<div class="container">
<form action=""  method="POST">
    <div class="form-group">
    <table class="table table-dark table-striped" >
        <h1 style="color:white;"> USERS INFORMATION</h1>
        <thead>
        <tr>
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
        </thead>
        <tbody>
        <?php
        if ($result){
            while($row = $result->fetch_assoc()) {
                
        echo $row->id;
                
            }
        }
        ?>
        
            
        </tbody>
    </table>
</form>
<?php include_once('./partials/footer.php'); ?> 

<?php 
}
?>