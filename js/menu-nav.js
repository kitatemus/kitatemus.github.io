// when the document has been loaded
$(document).ready(function() {
  $("#submit-form").hide();

  $("#about-me-button").click( function() {
    $("#thumbnails").hide();
    $(".full-images").hide();

    $("#submit-form").show();
  });

  $("#form-back").click( function() {
    $("#thumbnails").show();

    $("#submit-form").hide();
  });
});
