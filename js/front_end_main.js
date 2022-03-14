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

  $('#submit').click(function() {
    var name = $("#name").val();
    alert("Hi "+ name + " we have received your message. Thank you for reaching out to us. We'll get back to you soonest.")
  });

});
