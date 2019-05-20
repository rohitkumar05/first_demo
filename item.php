<?php

include_once('./common_files/database_queries.php');
include_once('./common_files/common_function.php');
if(isset($_POST['submit'])) {
   include_once('./common_files/validation/menu_validate.php');
   $idemValidation = new IdemValidation();
   $errors = $idemValidation->menuValidate($_POST);
    if (count($errors) == 0) {
      $dbQueries = new DbQueries;
      $imageName = time()."_".$_FILES['image']['name'];
      
      $lastIndetId = $dbQueries->saveItem($_POST, $imageName);
      if (!empty($lastIndetId)) {
        $commonFunction = new CommonFunction;
        $target_file = 'images/'.$imageName;
        $commonFunction->fileUpload($target_file, $_FILES);
       // echo "<pre>"; print_r($target_file); die;
      }
     

   }
}

$commonFunction1 = new CommonFunction;
$categories = $commonFunction1->itemList();
?>


<?php include_once('./partials/header.php'); ?> 

<div class="container">

<div class="col-md-12">
<form action=""  method="POST" id="item" enctype="multipart/form-data" novalidate>

  <div class="col-md-8 col-md-offset-2">
  <a href="item_listing.php" class="btn btn-success" style="float:right; margin-bottom:10px; ">Food List</a>
  
          <h1 style="color:black;">Add Items</h1>
            <input type="hidden" name="restaurant_id" value="<?php echo $_GET['id']?>"/>
          <div class="form-group">
          <label>Item Name: </label>
          <br>
          <input type="text" placeholder="ENTER  NAME :" id="item_name"   name="item_name" class="form-control demo" value="<?php echo $result['item_name']?>"/>
          
          <?php 
              if (isset($errors['item_name'])) {
                ?>
                  <label><?php echo $errors['item_name'] ?></label>
                <?php
              }
          ?>
        </div>
        <br>
          <div class="form-group">

          <label>Price: </label>
          <br>
          <input type="text" placeholder="ENTER PRICE :" id="price"   name="price" class="form-control demo" value="<?php echo $result['price']?>"/>
          <?php 
              if (isset($errors['price'])) {
                ?>
                  <label><?php echo $errors['price'] ?></label>
                <?php
              }
          ?>  
        </div>
        <br>
          <div>
          <label>Categories</label>
          <br>
          <select name="category" id="category" class="form-control demo" value="<?php echo $result['item_name']?>">
            <option value="">--SELECT Category--</option>

            <?php foreach($categories as $category) {?>
                <option value="<?php echo $category;?>"><?php echo $category;?></option>
            <?php } ?>
          </select>
          
          <?php 
              if (isset($errors['category'])) {
                ?>
                  <label><?php echo $errors['category'] ?></label>
                <?php
              }
          ?>

          </div>
          <br>
          <div>
          <label>Image</label>
          <br>
          <input type="file" name="image" id="image">
          </div>
          <br>
          <div>
          <input type="submit" class="btn btn-success col-md-3 form-control  container form-control " value="Add Item" name="submit">
          </div>



</div>
</div>
</div>
<?php include_once('./partials/footer.php');?>