<?php

session_start();
        require_once('./common_files/common_function.php');
        $commonFunction = new CommonFunction;
        $commonFunction->redrectToLogin();

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
        $dbQueries->editSave($_POST);
        $result = $dbQueries->getItem($_POST["id"]);
    
      }

}
        
        
?>


<?php include_once('./partials/header.php'); ?>

<div class="container">
<div class="col-md-12">
<form action=""  method="POST" id="hero" novalidate>

  <div class="col-md-8 col-md-offset-2">
      
          <h1 style="color:black;">Add Items</h1>
            <input type="hidden" name="id" value="<?php echo $_GET['id']?>"/>
          <div class="form-group">
          <label>Item Name: </label>
          <input type="text" value="<?php echo ($_POST["item_name"])?>" id="item_name"   name="item_name" class="form-control demo" value="<?php echo $result['item_name']?>"/>
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
          <input type="text" value="<?php echo ($_POST["price"])?>" id="price"   name="price" class="form-control demo" value="<?php echo $result['price']?>"/>
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
            <option value="<?php echo $category;?>" <?php if ($category == $result['category']||$_GET["category"] ) echo "selected" ?>>
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
              
              
          <div>
          <input type="submit" class="btn btn-success col-md-3 form-control  container form-control " value="SUBMIT" name="submit">
          </div>



</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/menu.js"></script>

<?php include_once('./partials/footer.php'); ?>