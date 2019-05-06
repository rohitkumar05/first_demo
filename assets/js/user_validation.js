$(document).ready(function() {
  $( "#myform" ).validate({
    rules: {
      first_name: {
        required: true,
      },
      last_name: {
        required: true,
      },
      email:{
        required: true,
      },
      password: {
        required: true,
      },
      confirm_password: {
        required: true,
        equalTo: "#password"
      },
      gender: {
        required: true,
      },
      address: {
        required: true,
      },
      phone_number: {
        required: true,
      },
      zip_code: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      country: {
        required: true,
      },
    },
    messages: {
      first_name: {
        required: "FIRST NAME IS REQUIRED",
      },
      last_name: {
        required: "LAST NAME IS REQUIRED",
      },
      email: {
        required: "EMAIL IS REQUIRED",
      },
      password: {
        required: "Password Is Required",
      },
      confirm_password: {
        required: "Password Is Required",
        equalTo: "Confirm Password is   Not Match"
      },
      gender: {
        required: "Gender Is Required",
      },
      address: {
        required: "Address Is Required",
      },
      phone_number: {
        required: "Phone Number Is Required",
      },
      zip_code: {
        required: "Zip Code Is Required",
      },
      city: {
        required: "City Is Required",
      },
      state: {
        required: "State Is Required",
      },
      country: {
        required: "Country Is Required",
      },
      
    }
    
  });



  $( "#myedit" ).validate({
    rules: {
      first_name: {
        required: true,
      },
      last_name: {
        required: true,
      },
      
      gender: {
        required: true,
      },
      address: {
        required: true,
      },
      phone_number: {
        required: true,
      },
      zip_code: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      country: {
        required: true,
      },
    },
    messages: {
      first_name: {
        required: "FIRST NAME IS REQUIRED",
      },
      last_name: {
        required: "LAST NAME IS REQUIRED",
      },
      
      gender: {
        required: "Gender Is Required",
      },
      address: {
        required: "Address Is Required",
      },
      phone_number: {
        required: "Phone Number Is Required",
      },
      zip_code: {
        required: "Zip Code Is Required",
      },
      city: {
        required: "City Is Required",
      },
      state: {
        required: "State Is Required",
      },
      country: {
        required: "Country Is Required",
      },
      
    }
    
  });
 
});
