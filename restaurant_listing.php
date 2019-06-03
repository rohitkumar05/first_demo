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

        <?php while($row = mysqli_fetch_array($result)) {
            if ($row['status'] == 'Inactive') {
                $inactiveClass = "inactive";
            } else {
                $inactiveClass = "";
            }

            
            ?>
            
            
            <div class="col-md-3 ">
            <ol class="list-group <?php echo $inactiveClass;?>">
            <li class="list-group-item"><a href="php"><img src="images/<?php echo $row['image'];?>"  alt="Cinque Terre"  class="mx-auto d-block img-thumbnail" alt="Cinque Terre" style="height:40%;width:100%;background-cover;"></a></li>
            <li class="list-group-item"> <p> Name: <?php echo $row['name'];?></p></li>
            <li class="list-group-item">  <p>phone_number: <?php echo $row['phone_number'];?></p></li>
            <li class="list-group-item">  <p>address: <?php echo $row['address'];?></p></li>
            <li class="list-group-item">  <p>city:<?php echo $row['city'];?></p></li>
            <li class="list-group-item">  <p>zip_code:<?php echo $row['zip_code'];?></p></li>
            <li class="list-group-item">  <p>state:<?php echo $row['state'];?></p></li>
            <li class="list-group-item">   <p>country:<?php echo $row['country'];?></p></li>
                

               
            <li class="list-group-item"> 
                <?php if ($row['status'] == 'Inactive') {?>
                    <a href="javascript:void(0);" onclick="activateResturant(<?php echo $row['id'];?>)"  id="activate_<?php echo $row['id'] ?>">Activate</a> |
                <?php } ?>
                <a href="item.php?id=<?php echo $row['id']?>">Add Food</a> | 
                <a href="edit_restaurant.php?id=<?php echo $row['id']?>">Edit</a> |
                <a href="restaurant_listing.php?id=<?php  echo $row['id']?>&method=delete"onclick="return confirm('Are you sure to delete this record?')">Delete</a>
            </li>
                
                    </ol>
                </div>
        


        <?php } ?>
      </div>  
        </div>
    <!-- </form> -->
    <script>
$(document).ready(function() {
    $('#example').DataTable();
});
function activateResturant(id) {
    $.ajax({
        url: "ajax/activate_resurant.php",
        method: 'post',
        dataType: 'json',
        data: {id: id},
        success: function(result){
            if (result.status == true) {
                $('#activate_' + id).hide();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Status Code" + xhr.status);
            alert("Error" + thrownError);
        }
    });

}
</script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>




<?php include_once('./partials/footer.php'); ?>