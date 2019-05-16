<?php
session_start();
require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();

    require_once('./common_files/database_queries.php');
    if(isset($_GET) && $_GET['method'] == 'delete') {
        $id = $_GET['id'];
        $dbQueries3 = new DbQueries;
        $result3 = $dbQueries3->deleteItem($id);
        

    }
        require_once('./common_files/database_queries.php');
        $dbQueries = new DbQueries;
        $result = $dbQueries->itemList($_GET["id"]);
        
?>

<?php include_once('./partials/header.php'); ?> 




<center>
    <div class="container">
    
    <a href="item.php?id=<?php echo $_GET["id"]?>" class="btn btn-success" style="float:right; margin-bottom:10px; ">Add Item</a>
    
              
      <div class="col-md-12">
    
     
        <?php while($row = mysqli_fetch_array($result)) {?>
            <div class="col-md-3">
                <h3><?php echo $row['category'];?></h3>
                <a href="veg.php"><img src="images/<?php echo $row['image'];?>"  alt="Cinque Terre"  class="mx-auto d-block img-thumbnail" alt="Cinque Terre" style="width:50%"></a>
                <p>Item Name: <?php echo $row['item_name'];?></p>
                <p>Price: <?php echo $row['price'];?></p>
               
                <div> 
                    <a href="edititem.php?id=<?php echo $row['id']?>">Edit</a> |
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