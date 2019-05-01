$().ready(function(){

$("signupForm").validate({

rules:{

  first_name:"required",
  last_name:"required",

required: true;
minlenght: 1


},

email: {
  required: true,
  email = true
},

password: {
required: true,
minlenght: 10 

},
confirm_password: {
  required: true,
  minlenght: 10,
    requalTo:"password"
},

message: {
  first_name="please enter your first name",
  last_name="please enter your last name",
},
password: {
  required: "please provide a password",
  minlenght: "your password must be at 10 characters long"

},


})


});
$("first_name").focus(function(){
  var first_name = $("#first_name"),val();
  var last_name = $("#last_name"),val();



});
