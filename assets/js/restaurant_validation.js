$(document).ready(function() {
    $( "#myrest" ).validate({
      rules: {
        name: {
          required: true,
        },
        phone_number: {
            required:true,
        },
        address:{
            required:true,  
         },
         city:{
            required:true,  
         },
         zip_code:{
            required:true,  
         },
         state:{
            required:true,  
         },
         country:{
            required:true,  
            },
        },
        messages: {
            name: {
            required: "NAME IS REQUIRED",
            },
            phone_number:{
                required: "PHONE NUMBER IS REQUIRED",
            },
            address:{
                required: "ADDRESS IS REQUIRED",
            },
            city:{
                required: "CITY IS REQUIRED",
            },
            zip_code:{
                required: "ZIP CODE IS REQUIRED",
            },
            state:{
                required: "STATE IS REQUIRED",
            },
            country:{
                required: "COUNTRY IS REQUIRED",
            },
        }
    });

    $( "#kingResturant" ).validate({
        rules: {
            name: {
              required: true,
            },
            phone_number: {
                required:true,
            },
            address:{
                required:true,  
             },
             city:{
                required:true,  
             },
             zip_code:{
                required:true,  
             },
             state:{
                required:true,  
             },
             country:{
                required:true,  
                },
            },
            messages: {

                name: {
                    required: "NAME IS REQUIRED",
                },
                phone_number:{
                    required: "PHONE NUMBER IS REQUIRED",
                },
                address:{
                    required: "ADDRESS IS REQUIRED",
                },
                city:{
                    required: "CITY IS REQUIRED",
                },
                zip_code:{
                    required: "ZIP CODE IS REQUIRED",
                },
                state:{
                    required: "STATE IS REQUIRED",
                },
                country:{
                    required: "COUNTRY IS REQUIRED",
                },
            }
        });
        $( "#reset" ).validate({
            rules: {
                current_password: {
                  required: true,
                },
                new_password: {
                    required:true,
                },
                retype_password:{
                    required:true,
                    equalTo: "#new_password"
                 },
             },
                messages: {

                    current_password: {
                        required: "PASSWORD REQUIRED",
                    },
                    new_password:{
                        required: "NEW PASSWORD IS REQUIRED",
                    },
                    retype_password:{
                        required: "RETYPE PASSWORD IS REQUIRED",
                        equalTo: "RETYPE PASSWORD IS NOT MATCH",
                    },
                },
     });
});
    
