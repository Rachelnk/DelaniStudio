$(document).ready(function(){
  //Toggle functionality for the design icon
  $("#design-image").click(function(){
    $("#design-detail").show();
    $("#design-image").hide();
  });
  $("#design-detail").click(function(){
    $("#design-image").show();
    $("#design-detail").hide();
  });
  $("#development-image").click(function(){
    $("#development-detail").show();
    $("#development-image").hide();
  });
  $("#development-detail").click(function(){
    $("#development-image").show();
    $("#development-detail").hide();
  });
  $("#product-image").click(function(){
    $("#product-detail").show();
    $("#product-image").hide();
  });
  $("#product-detail").click(function(){
    $("#product-image").show();
    $("#product-detail").hide();
  });

  // hover over portfolio list images
  $("#work-image1").mouseover(function(){
    $("#work-detail1").show();
  }).mouseout(function(){
    $("#work-detail1").hide();
  });
  $("#work-image2").mouseover(function(){
    $("#work-detail2").show();
  }).mouseout(function(){
    $("#work-detail2").hide();
  });
  $("#work-image3").mouseover(function(){
    $("#work-detail3").show();
  }).mouseout(function(){
    $("#work-detail3").hide();
  });
  $("#work-image4").mouseover(function(){
    $("#work-detail4").show();
  }).mouseout(function(){
    $("#work-detail4").hide();
  });
  $("#work-image5").mouseover(function(){
    $("#work-detail5").show();
  }).mouseout(function(){
    $("#work-detail5").hide();
  });
  $("#work-image6").mouseover(function(){
    $("#work-detail6").show();
  }).mouseout(function(){
    $("#work-detail6").hide();
  });
  $("#work-image7").mouseover(function(){
    $("#work-detail7").show();
  }).mouseout(function(){
    $("#work-detail7").hide();
  });
  $("#work-image8").mouseover(function(){
    $("#work-detail8").show();
  }).mouseout(function(){
    $("#work-detail8").hide();
  });


});
$(document).ready(function(){


  // Get value of user's inputs from the user.
  $("#mc-embedded-subscribe-form").submit(function(){
    var fname = $("#fullname").val();
    var email = $("#email").val();
    var comment =$("#message").val();
    
    if (fname && email) {
      alert (fname + ", thank you for flling out the form. We have received your message.");
    }

      else {
        alert("Please enter your name and email.");
      }   

  })
});
  

