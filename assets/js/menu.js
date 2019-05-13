$(document).ready(function() {
    $( "#hero" ).validate({
      rules: {
        item_name: {
          required: true,
        },
        price: {
            required:true,
        },
        category:{
            required:true,  
         },
        },
        messages: {
            item_name: {
            required: "NAME IS REQUIRED",
            },
            price:{
                required: "PRICE IS REQUIRED",
            },
            category:{
                required: "CATEGORY IS REQUIRED",
            },
        },
    });
});