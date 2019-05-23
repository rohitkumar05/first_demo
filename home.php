<?php
require_once('./common_files/database_queries.php');
$dbQueries = new DbQueries;
$result = $dbQueries->intex_user();
// echo "<pre>";print_r($result); die;

?>



<?php include_once('./partials/header.php'); ?> 
<center>
    <div class="container">  
<div class="col-md-12">
<ol class="list-group">

      <?php while($row = mysqli_fetch_array($result)) {
        //   echo "<pre>";print_r($row); die;
          ?>
            <div class="col-md-3">
                <h3><?php echo $row['category'];?></h3>
                <li class="list-group-item"><a href="php"><img src="images/<?php echo $row['image'];?>"  alt="Cinque Terre"  class="mx-auto d-block img-thumbnail" alt="Cinque Terre" style="height:40%;width:100%;background-cover;"></a></li>
                <li class="list-group-item"> <b><p>Name: <?php echo $row['first_name']. " ". $row['last_name'];?></p></li>
                <li class="list-group-item"><p>Restaurant : <?php echo $row['name'];?></p></li>
                <li class="list-group-item"><p>Address: <?php echo $row['address']." ". $row['city']." ".row['state']." ".row['country'] ;?></p></li>
                <li class="list-group-item"><p>Phone Number: <?php echo $row['phone_number'];?></p></li> 
                </li>
                
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