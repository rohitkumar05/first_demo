<?php
session_start();

require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();



if (isset($_GET) && $_GET['logout'] == 'true') {
    $commonFunction = new CommonFunction;
    $commonFunction->userLogout();
}




?>

<?php include_once('./partials/header.php'); ?>

DASHBOARD HERE I am <?php echo $_SESSION['user']['first_name'] . " ". $_SESSION['user']['last_name'];?>!!

<a href='dashboard.php?logout=true'>Logout</a>





<div class="container">
    
    <a href="restaurant_form.php?id=<?php echo $_GET["id"]?>" class="btn btn-success" style="float:right; margin-bottom:10px; ">Add Item</a>
    
              
      <div class="col-md-12">
    
     
        <?php while($row = mysqli_fetch_array($result)) {?>
            <div class="col-md-3">
                <h3><?php echo $row['category'];?></h3>
                <a href="veg.php"><img src="images/<?php echo $row['image'];?>"  alt="Cinque Terre"  class="mx-auto d-block img-thumbnail" alt="Cinque Terre" style="width:50%"></a>
                <p>Name: <?php echo $row['item_name'];?></p>
                <p>PHONE NUMBER: <?php echo $row['phone_number'];?></p>
                <p>ADDRESS:<?php echo $row['address'];?></p>
                <p>CITY:<?php echo $row['city'];?></p>
                <p>ZIP CODE:<?php echo $row['zip_code'];?></p>
                <p>STATE:<?php echo $row['state'];?></p>
                <p>COUNTRY:<?php echo $row['country'];?></p>
                <div> 
                    <a href="edit_restaurant.php?id=<?php echo $row['id']?>">Edit</a> |
                    <a href="item_listing.php?id=<?php  echo $row['id']?>&method=delete"onclick="return confirm('Are you sure to delete this record?')">Delete</a>
                
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