<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
require_once('./common_files/common_function.php');
require_once('./common_files/database_queries.php');
$dbQueries = new DbQueries;
$result = $dbQueries->intex_user();
//echo "<pre>";print_r($result); die;


$comm = new CommonFunction;

?>




<?php include_once('./partials/header.php'); ?> 
<center>
    <div class="container"> 
    <div class="row">
<div class="col-md-12">
<div class="list-group">
<a href="foodlist.php?id=<?php echo $_GET["id"]?>" class="btn btn-success" style="float:right; margin-bottom:10px; ">Food List</a>
<div class="col-md-12">
<?php while($row = mysqli_fetch_assoc($result)) {
          
             
            ?>
            
            
            <div class="col-md-3 ">
            <ol class="list-group">
                <h3><?php echo $row['category'];?></h3>
                <li class="list-group-item"><a href="php"><img src="<?php echo $comm->imageType($row['image'])?>" alt="Cinque Terre"  class="mx-auto d-block img-thumbnail" alt="Cinque Terre" style="height:40%;width:100%;background-cover;"></a></li>
                <li class="list-group-item"> <b><p>Name: <?php echo $row['first_name'];?> <?php echo $row['last_name'];?></p></li>
                <li class="list-group-item"><p>Restaurant Name: <?php echo $row['name'];?></p></li>
                <li class="list-group-item"><p> Phone Number: <?php echo $row['phone_number'];?></p></li>
                <li class="list-group-item"><p>Address: <?php echo $row['address']." ".$row['city']." ".$row['state']." ".$row['country'];?></p></li>
                </div>
        
                </ol>

                
        
<?php }?>

</div>
</div>
</div>
</div>
    
    <script>
$(document).ready(function() {
    $('#example').DataTable();
});
</script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>

<?php include_once('./partials/footer.php'); ?> 