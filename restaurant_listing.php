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

<a href="restaurant_form.php?id=<?php echo $_GET["id"]?>" class="btn btn-success" style="float:right; margin-bottom:10px; ">Add RESTAURANT</a>
<div class="col-md-12">
<ol class="list-group">
        <?php while($row = mysqli_fetch_array($result)) {?>
            
            
            <div class="col-md-3">
            <li class="list-group-item"><a href="php"><img src="images/<?php echo $row['image'];?>"  alt="Cinque Terre"  class="mx-auto d-block img-thumbnail" alt="Cinque Terre" style="height:40%;width:100%;background-cover;"></a></li>
            <li class="list-group-item"><b> <p> Name: <?php echo $row['name'];?></p></li>
            <li class="list-group-item">  <p>phone_number: <?php echo $row['phone_number'];?></p></li>
            <li class="list-group-item">  <p>address: <?php echo $row['address'];?></p></li>
            <li class="list-group-item">  <p>city:<?php echo $row['city'];?></p></li>
            <li class="list-group-item">  <p>zip_code:<?php echo $row['zip_code'];?></p></li>
            <li class="list-group-item">  <p>state:<?php echo $row['state'];?></p></li>
              <li class="list-group-item">   <p>country:<?php echo $row['country'];?></p></li>
                

               
              <li class="list-group-item">  <a href="item.php?id=<?php echo $row['id']?>">Add Food</a> | 
                    <a href="edit_restaurant.php?id=<?php echo $row['id']?>">Edit</a> |
                    <a href="restaurant_listing.php?id=<?php  echo $row['id']?>&method=delete"onclick="return confirm('Are you sure to delete this record?')">Delete</a></li>
                
                
                </div>
        
         

        <?php } ?>
        </ol>
        </div>
    <!-- </form> -->
    <script>
$(document).ready(function() {
    $('#example').DataTable();
});
</script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>




<?php include_once('./partials/footer.php'); ?>