<?php
session_start();

require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();


require_once('./common_files/database_queries.php');
$dbQueries = new DbQueries;
$result = $dbQueries->fetch_users();
   // echo '<pre>'; print_r($result);die;
  
   //require_once('./common_files/database_queries.php');
    //$dbQueries1 = new DbQueries;
    //$result1 = $dbQueries1->deleteData($id);
    //echo '<pre>'; print_r($result1);die;
?>

<?php include_once('./partials/header.php'); ?>
    <center>
    <div class="container">
    <form action=""  method="POST">
        <table border="1">        <div class="form-group">
        
                <tr>
                    <td>FIRST NAME:</td>
                    <td>LAST NAME:</td>
                    
                    <td>GENTER:</td>
                    <td>ADDRESS:</td>
                    <td>PHONE NUMBER:</td>
                    <td>ZIP CODE:</td>
                    <td>CITY:</td>
                    <td>STATE:</td>
                    <td>COUNTRY:</td>
                
        </tr>
        <?php while($row = mysqli_fetch_array($result)) {?>
            <tr>
                    <td><?php echo $row['first_name'];?></td>
                    <td><?php echo $row['last_name'];?></td>
                    
                    <td><?php echo $row['gender'];?></td>
                    <td><?php echo $row['address'];?></td>
                    <td><?php echo $row['phone_number'];?></td>
                    <td><?php echo $row['zip_code'];?></td>
                    <td><?php echo $row['city'];?></td>
                    <td><?php echo $row['state'];?></td>
                    <td><?php echo $row['country'];?></td>
                    <td><a href="edit.php?id=<?php echo $row['id']?>">EDIT</a>  
                    <td><a href="">DELETE</a> 
        </tr>

        <?php } ?>
        
    </form>
<?php include_once('./partials/footer.php'); 

?> 