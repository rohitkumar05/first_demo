<?php
session_start();
require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();
  include_once('./common_files/database_queries.php');
  include_once('./common_files/validation/validate.php');
  require_once('./common_files/common_function.php');

  if(isset($_POST['submit'])) {
  $dbQueries = new DbQueries;
  $validation1 = new Validations;
  $common_function = new CommonFunction;
  $errors  = $validation1->resetValidatePassword($_POST,$common_function);
  
  if (count($errors) == 0) {
    
    $encrypted_password = $common_function->encrypt_our_password($_POST['current_password']);
    
    $dbQueries = new DbQueries;
  $dbQueries-> resetPassword($_POST,$common_function);
  }

}
  ?>


<?php include_once('./partials/header.php'); ?> 
<center>
<div class="container">
<div class="col-md-12">
<form action=""  method="POST" id="reset" novalidate>

  <div class="col-md-8 col-md-offset-2">
      
          <h1 style="color:black;"> USER  REGISTRATION</h1>

          <div class="form-group">
            <label>Current: </label>
            <input type="password" placeholder="ENTER CURRENT PASSWORD:" id="current_password"  name="current_password" class="form-control demo"/>
                <?php 
                    if (isset($errors['current_password'])) {
                      ?>
                        <label><?php echo $errors['current_password'] ?></label>
                      <?php
                    }
                ?>


          </div>
          <br>
          <div>
          <label> NEW PASSWORD:</label>
          <input type="password" placeholder="ENTER NEW PASSWORD :" id="new_password"  name="new_password" class="form-control demo" >
          <?php 
              if (isset($errors['new_password'])) {
                ?>
                  <label><?php echo $errors['new_password'] ?></label>
                <?php
              }
          ?>
         </div>
         <br>
          <div>
          <label>RETYPE NEW	:</label>
            <input type="password" placeholder="RETYPE NEW PASSWORD :" name="retype_password" class="form-control demo">
            <?php 
              if (isset($errors['retype_password'])) {
                ?>
                  <label><?php echo $errors['retype_password'] ?></label>
                <?php
              }
          ?>
          </div>
          <div>
              <input type="submit" class="col-md-8 col-md-offset-2 btn btn-success container " value="SAVE CHANGE" name="submit">
            </div>
      </div>
    </div>

  </div>
 </div>
</table>
</form>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/restaurant_validation.js"></script>
<?php include_once('./partials/footer.php'); ?> 