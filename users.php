<!---------START SUBMIT------------>
<?php
include_once('./common_files/validation/validate.php');
include_once('./common_files/common_function.php');
include_once('./common_files/database_queries.php');
if(isset($_POST['submit'])) {
  $validation = new Validations;
  $errors  = $validation->validate_user_form($_POST);
  if (count($errors) == 0) {
    $common_function = new CommonFunction;
    $encrypted_password = $common_function->encrypt_our_password($_POST['password']);
    $dbQueries = new DbQueries;
    $dbQueries->saveUser($_POST, $encrypted_password);
  }

  $commonFunction = new CommonFunction;
  $countries = $commonFunction->countryList();
  $states = $commonFunction->stateList();
  //echo '<pre>'; print_r($states);die;  
}

?>

<!------------submit  end------------->




<?php include_once('./partials/header.php'); ?>
<center>
<div class="container">
<div class="col-md-12">
<form action=""  method="POST" id="myform" novalidate>

  <div class="col-md-8 col-md-offset-2">
      
          <h1 style="color:black;"> USER  REGISTRATION</h1>

          <div class="form-group">
            <label>First Name: </label>
            <input type="text" placeholder="ENTER FIRST NAME :" id="first_name"  name="first_name" class="form-control demo"/>
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
          <input type="text" placeholder="ENTER LAST NAME :" id="last_name"  name="last_name" class="form-control demo" >
          <?php 
              if (isset($errors['last_name'])) {
                ?>
                  <label><?php echo $errors['last_name'] ?></label>
                <?php
              }
          ?>
         </div>
         <br>
          <div>
          <label>E-MAIL:</label>
            <input type="email" placeholder="ENTER E-MAIL :" name="email" class="form-control demo">
            <?php 
              if (isset($errors['email'])) {
                ?>
                  <label><?php echo $errors['email'] ?></label>
                <?php
              }
          ?>
          </div>
          <br>
          <div>
          <label>PASSWORD:</label>
          <input type="password" id="password" placeholder="ENTER PASSWORD :" name="password" class="form-control demo">
          <?php 
              if (isset($errors['password'])) {
                ?>
                  <label><?php echo $errors['password'] ?></label>
                <?php
              }
          ?>
          </div>

          <div>
          <label>Confirm PASSWORD:</label>
          <input type="password" id="confirm_password" placeholder="ENTER Confirm PASSWORD :" name="confirm_password" class="form-control demo">
          <?php 
              if (isset($errors['confirm_password'])) {
                ?>
                  <label><?php echo $errors['confirm_password'] ?></label>
                <?php
              }
          ?>
          </div>


          <br>
          <div class="input-radio demo">
          
          
          <label>GENTER : </label>
           <input type="radio" name="gender" value="male" > Male
            <input type="radio" name="gender" value="female"> Female
            <input type="radio" name="gender" value="other"> Other 
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
          <input type="text" placeholder="ENTER ADDRESS :" id="address" name="address" class="form-control demo">
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
          <input type="text" placeholder="ENTER NUMBER" id="phone_number" name="phone_number" class="form-control demo">
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
          <input type="text" placeholder="ENTER ZIP CODE" id="zip_code" name="zip_code" class="form-control demo">
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
          <td><input type="text" placeholder="ENTER CITY :" id="city" name="city" class="form-control demo">
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
          <select name="state" id="state" class="form-control demo" >
            <option value="">--SELECT COUNTRY--</option>

            <?php foreach($states as $state) {?>
                <option value="<?php echo $state;?>"><?php echo $state;?></option>
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
    
          
          
          <div>
          <input type="submit" class="btn btn-success col-md-3 form-control  container form-control " value="SUBMIT" name="submit">
          </div>
          </div> 
        
    </div>
</form>

</center>
</div>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/user_validation.js"></script>

<?php include_once('./partials/footer.php');?>