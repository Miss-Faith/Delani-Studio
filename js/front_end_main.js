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
    var name = $("#mce-FNAME").val();
    alert("Hi "+ name + " we have received your message. Thank you for reaching out to us. We'll get back to you soonest.")

  /*  (function($) {
      window.fnames = new Array();
      window.ftypes = new Array();
      fnames[0]='EMAIL';
      ftypes[0]='email';
      fnames[1]='FNAME';
      ftypes[1]='text';
      fnames[3]='MMERGE3';
      ftypes[3]='text';
    }
    (jQuery));var $mcj = jQuery.noConflict(true);</script>*/
  });

});
