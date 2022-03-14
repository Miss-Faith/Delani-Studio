$(document).ready(function() {

  $("#design").click(function() {
    $("#designimage").toggle();
    $("#designtext").toggle();
  });
  $("#development").click(function() {
    $("#developmentimage").toggle();
    $("#developmenttext").toggle();
  });
  $("#product").click(function() {
    $("#productimage").toggle();
    $("#producttext").toggle();
  });

  $(".hover").hover(function() {
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  });


});
