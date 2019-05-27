<?php

session_start();
require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();
$status = $commonFunction->statusList();

      require_once('./common_files/database_queries.php');
      include_once('./common_files/common_function.php');

        $commonFunction1 = new CommonFunction;
        $categories = $commonFunction1->itemList();
        $dbQueries = new DbQueries;
        $result = $dbQueries->getItem($_GET["id"]);
        if(isset($_POST['submit'])) {
            include_once('./common_files/validation/menu_validate.php');
            $idemValidation = new IdemValidation();
            $errors = $idemValidation->editValidate($_POST);
            if (count($errors) == 0) {
                $dbQueries = new DbQueries;
                $result = $dbQueries->getItem($_POST["id"]);
                //echo "<pre>"; print_r($_FILES); die;
                $imageName = time()."_".$_FILES['image']['name'];
                $lastIndetId = $dbQueries->editSave($_POST,$imageName);
                $commonFunction = new CommonFunction;
                $target_file = 'images/'.$imageName;
                $commonFunction->fileUpload($target_file, $_FILES);
                
                
                
                
                //echo "<pre>"; print_r($result); die;
            }

      }
        
        
?>


<?php include_once('./partials/header.php'); ?>

<div class="container">
<div class="col-md-12">
<form action=""  method="POST" id="hero" enctype="multipart/form-data"  novalidate>

  <div class="col-md-8 col-md-offset-2">
          <h1 style="color:black;">Add Items</h1>
            <input type="hidden" name="id" value="<?php echo $_GET['id']?>"/>
          <div class="form-group">
          <label>Item Name: </label>
          <input type="text" id="item_name"   name="item_name" class="form-control demo" value="<?php echo (isset($_POST['item_name']) ? $_POST['item_name'] : $result['item_name'])?>"/>
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
          <input type="text" id="price"   name="price" class="form-control demo" value="<?php echo (isset($_POST['price']) ? $_POST['price'] : $result['price'])?>"/>
          <?php 
              if (isset($errors['price'])) {
                ?>
                  <label><?php echo $errors['price'] ?></label>
                <?php
              }
          ?>  
       <br>
        <label>category</label>
      
      <select name="category"  id="category" class=" form-control demo" value="<?php echo $result['category']||$_POST["category"]?>">
        <option value="">--SELECT category--</option>
        <?php foreach($categories as $category) {?>
            <option value="<?php echo $category;?>" <?php if ($category == $result['category'] || $category == $_POST["category"] ) echo "selected" ?>>
            <?php echo $category;?></option>
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
      <?php 
          if (isset($errors['category'])) {
            ?>
              <label><?php echo $errors['category'] ?></label>
            <?php
          }
            ?>
            <br>
<div>
                <label>Status:</label>
                      <select name="status" id="status" class=" form-control demo" >
                        <option value="">--Select-Status--</option>
                        
                        <?php foreach($status as $data) {?>
                            <option value="<?php echo $data;?>" <?php if ($data == $result2['status']) echo "selected" ?>>
                            <?php echo $data;?></option>
                        <?php } ?>
                        </div>

              <div>
          <label>Image</label>
          <br>
          <input type="file" name="image" id="image" >
          </div>
              
          <div>
          <input type="submit" class="btn btn-success col-md-3 form-control  container form-control " value="SUBMIT" name="submit">
          </div>



</div>
</form>
</div>
</div>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/menu.js"></script>

<?php include_once('./partials/footer.php'); ?>