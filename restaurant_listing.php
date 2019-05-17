<?php

session_start();
require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();

require_once('./common_files/database_queries.php');
            
$dbQueries = new DbQueries;
$result = $dbQueries->restaurant_listing();

        if(isset($_GET) && $_GET['method'] == 'delete') {
        $id = $_GET['id'];
        $dbQueries1 = new DbQueries;
        $result2 = $dbQueries1->deleteRestaurant($id);

        $dbQueries = new DbQueries;
            $result = $dbQueries->restaurant_listing();
} 


?>
<?php include_once('./partials/header.php'); ?>

<div class="col-md-12">
    
     
        <?php while($row = mysqli_fetch_array($result)) {?>
            <div class="col-md-3">
                <h3><?php echo $row['category'];?></h3>
                <a href="php"><img src="images/<?php echo $row['image'];?>"  alt="Cinque Terre"  class="mx-auto d-block img-thumbnail" alt="Cinque Terre" style="width:50%"></a>
                <p> Name: <?php echo $row['name'];?></p>
                <p>phone_number: <?php echo $row['phone_number'];?></p>
                <p>address: <?php echo $row['address'];?></p>
                <p>city:<?php echo $row['city'];?></p>
                <p>zip_code:<?php echo $row['zip_code'];?></p>
                <p>state:<?php echo $row['state'];?></p>
                <p>country:<?php echo $row['country'];?></p>
                

                <div> 
                    <a href="edit_restaurant.php?id=<?php echo $row['id']?>">Edit</a> |
                    <a href="restaurant_listing.php?id=<?php  echo $row['id']?>&method=delete"onclick="return confirm('Are you sure to delete this record?')">Delete</a>
                
                </div>
                </div>
        
         

        <?php } ?>
        
    <!-- </form> -->
    <script>
$(document).ready(function() {
    $('#example').DataTable();
});
</script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>




<?php include_once('./partials/footer.php'); ?>