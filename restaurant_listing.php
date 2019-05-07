<?php
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

<center>
    <div class="container">
    <!-- <form action=""  method="POST"> -->
    <table id="example" class="display" style="width:100%">
              
      <div class="form-group">
    
      <thead>
                <tr>
                    <td>NAME:</td>
                    <td>PHONE NUMBER:</td>
                    <td>ADDRESS:</td>
                    <td>CITY:</td>
                    <td>ZIP CODE:</td>
                    <td>STATE:</td>
                    <td>COUNTRY:</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                
        </tr>
        </thead>
        <tbody>
        <?php while($row = mysqli_fetch_array($result)) {?>
        
            <tr>
                    <td><?php echo $row['name'];?></td>
                    <td><?php echo $row['phone_number'];?></td>    
                    <td><?php echo $row['address'];?></td>
                    <td><?php echo $row['city'];?></td>
                    <td><?php echo $row['zip_code'];?></td>
                    <td><?php echo $row['state'];?></td>
                    <td><?php echo $row['country'];?></td>
                    <td><a href="edit_restaurant.php?id=<?php echo $row['id']?>">EDIT</a></td>
                    <td><a href="restaurant_listing.php?id=<?php echo $row['id']?>&method=delete">DELETE</a> </td>
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