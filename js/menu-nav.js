// when the document has been loaded
$(document).ready(function() {
  $("#submit-form").hide();

  $("#about-me-button").click( function() {
    $("#thumbnails").hide();
    $("#fulls").hide();

    $("#submit-form").show();
  });
});
