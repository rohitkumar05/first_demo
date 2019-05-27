<?php
session_start();
require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();



require_once('./common_files/database_queries.php');
        $dbQueries = new DbQueries;
        
        $result = $dbQueries->itemList($_GET["id"]);
        
       // echo "<pre>"; print_r($result); die;
        require_once('./common_files/database_queries.php');
    if(isset($_GET) && $_GET['method'] == 'delete') {
        $id = $_GET['id'];
        $dbQueries = new DbQueries;
        $result = $dbQueries-> deleteItem($id);
    
        $result = $dbQueries->itemList($_GET["id"]);
    }
        
?>

<?php include_once('./partials/header.php'); ?> 




<center>
    <div class="container">
    
    <a href="item.php?id=<?php echo $_GET["id"]?>" class="btn btn-success" style="float:right; margin-bottom:10px; ">Add Item</a>
   
              
      <div class="col-md-12">
    
      
<div class="col-md-12">
<ol class="list-group">

<?php while($row = mysqli_fetch_array($result)) {
            if ($row['status'] == 'Inactive') {
                $inactiveClass = "inactive";
            } else {
                $inactiveClass = "";
            }

            
            ?>
            
            
            <div class="col-md-3 ">
            <ol class="list-group <?php echo $inactiveClass;?>">
                <h3><?php echo $row['category'];?></h3>
                <li class="list-group-item"><a href="php"><img src="images/<?php echo $row['image'];?>"  alt="Cinque Terre"  class="mx-auto d-block img-thumbnail" alt="Cinque Terre" style="height:40%;width:100%;background-cover;"></a></li>
                <li class="list-group-item"> <b><p>Item Name: <?php echo $row['item_name'];?></p></li>
                <li class="list-group-item"><p>Price: <?php echo $row['price'];?></p></li>
               
                
                <li class="list-group-item">   <a href="edititem.php?id=<?php echo $row['id']?>">Edit</a> |
                    <a href="item_listing.php?id=<?php  echo $row['id']?>&method=delete"onclick="return confirm('Are you sure to delete this record?')">Delete</a>
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