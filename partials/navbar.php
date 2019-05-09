
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
            <li><a href="fetch.php">USERS</a></li>
            <li><a href="restaurant_listing.php">RESTAURANT</a></li>
            
            
            
          </ul>
          <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Setting <b class="caret"></b></a>
              <ul class="dropdown-menu">
              <li><a href="reset.php">RESET PASSWORD</a></li>
              <li><a href="dashboard.php?logout=true"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
              <li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        
        <?php
        
        require_once('./common_files/common_function.php');
        //move this code to common function file
        $commonFunction = new CommonFunction;
        ?>
        <?php if ($commonFunction->checkSession()) { ?>
            
        <?php
     
        } else {?>
            
        <?php } ?>
      

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