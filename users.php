
<!---------START SUBMIT------------>
<?php
include_once('./common_files/validate.php');
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

          <tr>
          <th>E-MAIL:</th>
          <td>
            <input type="email" placeholder="ENTER E-MAIL :" name="email" class="demo">
            <?php 
              if (isset($errors['email'])) {
                ?>
                  <label><?php echo $errors['email'] ?></label>
                <?php
              }
          ?>
          </td>
          </tr>
          <tr>
          <th>PASSWORD:</th>
          <td><input type="password" id="password" placeholder="ENTER PASSWORD :" name="password" class="demo">
          <?php 
              if (isset($errors['password'])) {
                ?>
                  <label><?php echo $errors['password'] ?></label>
                <?php
              }
          ?>
          </td>
          </tr>
          <tr>
          <th>CONFIRM PASSWORD:</th>
          <td><input type="password" id="confirm_password" placeholder="ENTER CONFIRM PASSWORD :" name="confirm_password" class="demo">
          <?php 
              if (isset($errors['confirm_password'])) {
                ?>
                  <label><?php echo $errors['confirm_password'] ?></label>
                <?php
              }
          ?>
          </td>
          </tr>
          <div class="demo">
          <tr>
          <th>GENTER : </th>
          <td> <input type="radio" name="gender" value="male"> Male
            <input type="radio" name="gender" value="female"> Female
            <input type="radio" name="gender" value="other"> Other 
            <?php 
              if (isset($errors['gender'])) {
                ?>
                  <label><?php echo $errors['gender'] ?></label>
                <?php
              }
          ?>
          </tr>
          </div>
          <tr>
          <th>ADDRESS:</th>
          <td><input type="text" placeholder="ENTER ADDRESS :" id="address" name="address" class="demo">
          <?php 
              if (isset($errors['address'])) {
                ?>
                  <label><?php echo $errors['address'] ?></label>
                <?php
              }
          ?>
          </td>
          </tr>
          <tr>
          <th>PHONE NUMBER:</th>
          <td><input type="text" placeholder="ENTER NUMBER" id="phone_number" name="phone_number" class="demo">
          <?php 
              if (isset($errors['phone_number'])) {
                ?>
                  <label><?php echo $errors['phone_number'] ?></label>
                <?php
              }
          ?>
          </td>
          </tr>
          <tr>
          <th>ZIP CODE:</th>
          <td><input type="text" placeholder="ENTER ZIP CODE" id="zip_code" name="zip_code" class="demo">
          <?php 
              if (isset($errors['zip_code'])) {
                ?>
                  <label><?php echo $errors['zip_code'] ?></label>
                <?php
              }
          ?>
          </td>
          </tr>
          <tr>
          <th>CITY:</th>
          <td><input type="text" placeholder="ENTER CITY :" id="city" name="city" class="demo">
          <?php 
              if (isset($errors['city'])) {
                ?>
                  <label><?php echo $errors['city'] ?></label>
                <?php
              }
          ?>
          </td>
          </tr>
          <tr>
          <th>STATE</th>

          <td><select name="state"  id="state" class="demo">
            <option value="">--SELECT STATE--</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
          <?php 
              if (isset($errors['state'])) {
                ?>
                  <label><?php echo $errors['state'] ?></label>
                <?php
              }
          ?>
          </tr>
          <th>COUNTRY:</th>
          <td><select name="country" id="country" class="demo">
            <option value="">--SELECT COUNTRY--</option>
            
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="United States of America">United States of America</option>
            <option value="South Korean">South Korean</option>
            <option value="Germany">Germany</option>
            <option value="China">China</option>
            <option value="England">England</option>
            <option value="Canada">Canada</option>
            <option value="Sweden">Sweden</option>
            <option value="Kerala">Kerala</option>
            <option value="Australia">Maharashtra</option>
            <option value="Russia">Russia</option>
            <option value="Finland">Finland</option>
            <option value="Russia">Russia</option>
          </select>
          <?php 
              if (isset($errors['country'])) {
                ?>
                  <label><?php echo $errors['country'] ?></label>
                <?php
              }
          ?>
          <div class="container">
          <tr>
          <td></td>
            <td><input type="submit" class="btn btn-default" value="SUBMIT" name="submit"></td>
          </tr>
          </div>
          </div>
          </div>
          </div> 
          </table>
    </div>
</form>

</center>
</div>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/user_validation.js"></script>

<?php include_once('./partials/footer.php');?>