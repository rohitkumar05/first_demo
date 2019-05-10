<?php
session_start();
  require_once('./common_files/common_function.php');
  //move this code to common function file
  $commonFunction = new CommonFunction;
?>

    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">APPNA PROJECT.COM</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
          <?php if ($commonFunction->checkSession()) { ?>
            <li><a href="fetch.php" class="fa fa-users">USERS</a></li>
            <li><a href="restaurant_listing.php">RESTAURANT</a></li>
            <?php } ?>
            
            
          </ul>
          <ul class="nav navbar-nav navbar-right">
          
           <?php if ($commonFunction->checkSession()) { ?>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>Settings</a><b class="caret"></b></a>
              <ul class="dropdown-menu">
             
                <li><a href="reset.php"class="fa fa-key" > Change password</a></li>
                
                <li><a href="dashboard.php?logout=true"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
              <?php
     
               } else {?>
               <li class="dropdown">
               <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-server" aria-hidden="true"></i><b class=""></b></a>
              <ul class="dropdown-menu">
                <li><a href="users.php"><span class="glyphicon glyphicon-log-in"></span> Sign Up</a></li>
                <li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              <?php } ?>
            </ul>
      
      

    </ul>
        </div>
       
        </div>
  </div>
</nav>

          <!-- <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul> -->
            </li>
          </ul>
        </div>
       
      </div>
      
    </nav>
  </div>
</div>