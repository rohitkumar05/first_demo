<?php
session_start();

include_once('./common_files/database_queries.php');
include_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;

$commonFunction->redrectToLogin();
$countries = $commonFunction->countryList();
$states = $commonFunction->stateList();



if(isset($_POST['submit'])) {
    include_once('./common_files/validation/restaurant_validate.php');
    $restaurantValidation = new RestaurantValidation();
    
    $errors = $restaurantValidation->validateRestaurant($_POST);
    //echo "<pre>"; print_r($errors); die;
    if (count($errors) == 0) {

      $dbQueries = new DbQueries;
     // echo "<pre>"; print_r($$dbQueries); die;
      $imageName = time()."_".$_FILES['image']['name'];
      //echo "<pre>"; print_r($_FILES); die;
      $lastIndetId = $dbQueries->restaurantAdd($_POST, $imageName);
     // echo "<pre>"; print_r($imageName); die;
      if (!empty($lastIndetId)) {
        $commonFunction = new CommonFunction;
        $target_file = 'images/'.$imageName;
        $commonFunction->imageUpload($target_file,$_FILES);
       // echo "<pre>"; print_r($target_file); die;
      }
     

   }
  }
?>
<?php include_once('./partials/header.php');?>

<div class="container">
<div class="col-md-12">
<form action=""  method="POST" id="myrest" enctype="multipart/form-data" novalidate>
  <div class="col-md-8 col-md-offset-2">
          <h1 style="color:black;"> ADD RESTAURANT </h1>
            <div class="form-group">
            <label> Name: </label>
            <input type="text" placeholder="ENTER NAME :" id="name"  name="name" class="form-control demo"/>
            <?php 
              if (isset($errors['name'])) {
                ?>
                  <label><?php echo $errors['name'] ?></label>
                <?php
              }
          ?>
          </div>
          <div>
              <label>PHONE NUMBER:</label>
              <input type="text" placeholder="ENTER PHONE NUMBER:" id="phone_number" name="phone_number" class="form-control demo"/>
              <?php 
              if (isset($errors['phone_number'])) {
                ?>
                  <label><?php echo $errors['phone_number'] ?></label>
                <?php
              }
          ?>
         </div>
          <div>
              <label>ADDRESS:</label>
              <input type="text" placeholder="ENTER ADDRESS:" id="address" name="address"  class="form-control demo"/>
              <?php 
              if (isset($errors['address'])) {
                ?>
                  <label><?php echo $errors['address'] ?></label>
                <?php
              }
          ?>
         </div>
         <div>
              <label>CITY:</label>
              <input type="text" placeholder="ENTER CITY:" id="city" name="city"  class="form-control demo"/>
              <?php 
              if (isset($errors['city'])) {
                ?>
                  <label><?php echo $errors['city'] ?></label>
                <?php
              }
          ?>
         </div>
         <div>
          <label>ZIP CODE:</label>
          <?php //die($result['zip_code']); ?>
          <input type="text" placeholder="ENTER ZIP CODE" id="zip_code" 
          name="zip_code" class="form-control demo" value="<?php echo $result['zip_code']?>"/>
          <?php 
              if (isset($errors['zip_code'])) {
                ?>
                
                  <label><?php echo $errors['zip_code'] ?></label>
                <?php
              }
          ?>
          </div>
         <div>
          <label>STATE</label>
          <?php //die($result['state']); ?>
          <select name="state"  id="state" class=" form-control demo" value="<?php echo $result['state']?>">
            <option value="">--SELECT STATE--</option>
            <?php foreach($states as $state) {?>
                <option value="<?php echo $state;?>" <?php if ($state == $result['state']) echo "selected" ?>>
                <?php echo $state;?></option>
            <?php } ?>
            
             </select>
             <?php 
              if (isset($errors['state'])) {
                ?>
                  <label><?php echo $errors['state'] ?></label>
                <?php
              }
          ?>
        </div>  
        <div>
          <label>COUNTRY:</label>
          <select name="country" id="country" class="form-control demo" >
            <option value="">--SELECT COUNTRY--</option>

            <?php foreach($countries as $country) {?>
                <option value="<?php echo $country;?>"><?php echo $country;?></option>
            <?php } ?>
          </select>
          <?php 
              if (isset($errors['country'])) {
                ?>
                  <label><?php echo $errors['country'] ?></label>
                <?php
              }
          ?>
         </div>
         <label>Image</label>
          <br>
          <input type="file" name="image" id="image">
          </div>
         <div>
          <input type="submit" class="btn btn-success col-md-3 form-control  container form-control " value="SUBMIT" name="submit">
          </div>
</div>
</div>
</div>
</form>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/restaurant_validation.js"></script>
<?php include_once('./partials/footer.php');?>  
