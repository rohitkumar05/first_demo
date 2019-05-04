
<?php
session_start();
require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();


require_once('./common_files/database_queries.php');
$dbQueries = new DbQueries;
$result = $dbQueries->getUser($_GET["id"]);

if(isset($_POST['submit'])) {
    
    $dbQueries = new DbQueries;
    $dbQueries->saveEdit($_POST);
    $dbQueries1 = new DbQueries;
    $result = $dbQueries1->getUser($_POST["id"]);
}


$countries = $commonFunction->countryList();
$states = $commonFunction->stateList();
//echo '<pre>'; print_r($states);die;
?>

<?php include_once('./partials/header.php'); ?>

<center>
<div class="container">
<div class="col-md-12">
<form action=""  method="POST" id="form" novalidate>

  <div class="col-md-8 col-md-offset-2">
      
          <h1 style="color:black;"> EDIT</h1>
            <input type="hidden" name="id" value="<?php echo $result['id']?>"/>
          <div class="form-group">
          <label>First Name: </label>
          <input type="text" placeholder="ENTER FIRST NAME :" id="first_name"  name="first_name" class="form-control demo" value="<?php echo $result['first_name']?>"/>
          <?php 
              if (isset($errors['first_name'])) {
                ?>
                  <label><?php echo $errors['first_name'] ?></label>
                <?php
              }
          ?>


          </div>
          <br>
          <div>
          <label>LAST NAME:</label>
          <input type="text" placeholder="ENTER LAST NAME :" id="last_name"  name="last_name" class="form-control demo" value="<?php echo $result['last_name']?>"/>
          <?php 
              if (isset($errors['last_name'])) {
                ?>
                  <label><?php echo $errors['last_name'] ?></label>
                <?php
              }
          ?>
         </div>
         <br>
          
          <div class="input-radio demo">
          
          
          <label>GENTER : </label>
           <input type="radio" name="gender" value="male" <?php if ($result['gender'] == 'male') echo "checked" ?>> Male
            <input type="radio" name="gender" value="female" <?php if ($result['gender'] == 'female') echo "checked" ?>> Female
            <input type="radio" name="gender" value="other" <?php if ($result['gender'] == 'other') echo "checked" ?>> Other 
            <?php 
              if (isset($errors['gender'])) {
                ?>
                  <?php echo $errors['gender'] ?>
                <?php
              }
          ?>
          
          </div>
          <br>
          <div>
          <label>ADDRESS:</label>
          <input type="text" placeholder="ENTER ADDRESS :" id="address" name="address"class="form-control demo"value="<?php echo $result['address']?>"/>
          <?php 
              if (isset($errors['address'])) {
                ?>
                  <label><?php echo $errors['address'] ?></label>
                <?php
              }
          ?>
          </div>
          <div>
          <label>PHONE NUMBER:</label>
          <input type="text" placeholder="ENTER NUMBER" id="phone_number" name="phone_number" class="form-control demo" value="<?php echo $result['phone_number']?>"/>
          <?php 
              if (isset($errors['phone_number'])) {
                ?>
                  <label><?php echo $errors['phone_number'] ?></label>
                <?php
              }
          ?>
          </div>
          <div>
          <label>ZIP CODE:</label>
          <input type="text" placeholder="ENTER ZIP CODE" id="zip_code" name="zip_code" class="form-control demo" value="<?php echo $result['zip_code']?>"/>
          <?php 
              if (isset($errors['zip_code'])) {
                ?>
                  <label><?php echo $errors['zip_code'] ?></label>
                <?php
              }
          ?>
          </div>
          <div>
          <label>CITY:</label>
          <td><input type="text" placeholder="ENTER CITY :" id="city" name="city" class="form-control demo" value="<?php echo $result['city']?>"/>
          <?php 
              if (isset($errors['city'])) {
                ?>
                  <label><?php echo $errors['city'] ?></label>
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
          <?php 
              if (isset($errors['state'])) {
                ?>
                  <label><?php echo $errors['state'] ?></label>
                <?php
              }
                ?>
                  





                  <div>
                      <label>COUNTRY:</label>
                      <select name="country" id="country" class=" form-control demo" >
                        <option value="">--SELECT COUNTRY--</option>

                        <?php foreach($countries as $country) {?>
                            <option value="<?php echo $country;?>" <?php if ($country == $result['country']) echo "selected" ?>>
                            <?php echo $country;?></option>
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
                
                      
                      
                      <div>
                      <input type="submit" class="btn btn-success col-md-3 form-control  container form-control " value="SUBMIT" name="submit">
                      </div>
          </div> 
        
    </div>
</form>

</center>
</div>


<?php include_once('./partials/footer.php'); 