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

    $( "#king" ).validate({
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
});
    
