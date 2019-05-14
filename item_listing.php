<?php


require_once('./common_files/database_queries.php');
if(isset($_GET) && $_GET['method'] == 'delete') {
    $id = $_GET['id'];
     $dbQueries3 = new DbQueries;
     $result3 = $dbQueries3->deleteItem($id);
    
}
require_once('./common_files/database_queries.php');
$dbQueries = new DbQueries;
$result = $dbQueries->itemList();
?>

<?php include_once('./partials/header.php'); ?> 




<center>
    <div class="container">
    
    <a href="item.php" class="btn btn-success" style="float:right; margin-bottom:10px; ">Add Item</a>
    <table id="example" class="display" style="width:100%">
              
      <div class="form-group">
    
      <thead>
                <tr>
                    <td>Item Name:</td>
                    <td>Price:</td>
                    <td>Categories:</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                
        </tr>
        </thead>
        <tbody>
        <?php while($row = mysqli_fetch_array($result)) {?>
        
            <tr>
                    <td><?php echo $row['item_name'];?></td>
                    <td><?php echo $row['price'];?></td>    
                    <td><?php echo $row['category'];?></td>
                    
                    <td><a href="edititem.php?id=<?php echo $row['id']?>"><button onclick="return confirm('Are you sure to Edit this record?')">EDIT</a></td>
                    <td><a href="item_listing.php?id=<?php echo $row['id']?>&method=delete"><button onclick="return confirm('Are you sure to delete this record?')">DELETE</button></a> </td>
        </tr>

        <?php } ?>
        </tbody>
        </table>
    <!-- </form> -->
    <script>
$(document).ready(function() {
    $('#example').DataTable();
});
</script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>




<?php include_once('./partials/footer.php'); ?>