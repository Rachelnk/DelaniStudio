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

  

  $("#development").click(function(){
    $("#dev-showing").toggle();


  })
  


});
