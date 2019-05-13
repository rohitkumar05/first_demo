<?php
include_once('./common_files/database_queries.php');
include_once('./common_files/common_function.php');
if(isset($_POST['submit'])) {
    $dbQueries = new DbQueries;
    $dbQueries->saveItem($_POST);
    

    $dbQueries1 = new DbQueries;
       $dbQueries1->editList($_POST);
       
       }

       
    $commonFunction1 = new CommonFunction;
    $categories = $commonFunction1->itemList();


?>


<?php include_once('./partials/header.php'); ?>

<div class="container">
<div class="col-md-12">
<form action=""  method="POST" id="hero" novalidate>

  <div class="col-md-8 col-md-offset-2">
      
          <h1 style="color:black;">Add Items</h1>
            <input type="hidden" name="restaurant_id" value="<?php echo $_GET['id']?>"/>
          <div class="form-group">
          <label>Item Name: </label>
          <input type="text" placeholder="ENTER  NAME :" id="item_name"   name="item_name" class="form-control demo" value="<?php echo $result['item_name']?>"/>
          <?php 
              if (isset($errors['item_name'])) {
                ?>
                  <label><?php echo $errors['item_name'] ?></label>
                <?php
              }
          ?>
        </div>
          <div class="form-group">
          <label>Price: </label>
          <input type="text" placeholder="ENTER PRICE :" id="price"   name="price" class="form-control demo" value="<?php echo $result['price']?>"/>
          <?php 
              if (isset($errors['price'])) {
                ?>
                  <label><?php echo $errors['price'] ?></label>
                <?php
              }
          ?>  
        </div>
          <div>
          <label>Categories</label>
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
          <div>
          <input type="submit" class="btn btn-success col-md-3 form-control  container form-control " value="ADD ITEM" name="submit">
          </div>



</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/menu.js"></script>

<?php include_once('./partials/footer.php'); ?>