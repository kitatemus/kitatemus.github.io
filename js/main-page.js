// when the document has been loaded
$(document).ready(function() {
  $(".thumbs.row.posters").hide();
  $("#submit-form").hide();

  $("#packaging-button").click( function() {
    $("#submit-form").hide();
    $(".thumbs.row.posters").hide();
    $(".full-images").hide();

    $(".thumbs.row.packaging").show();
  });

  $("#posters-button").click( function() {
    $("#submit-form").hide();
    $(".thumbs.row.packaging").hide();
    $(".full-images").hide();

    $(".thumbs.row.posters").show();
  });

  $("#about-me-button").click( function() {
    $(".thumbs.row").hide();
    $(".full-images").hide();

    $("#submit-form").show();
  });

  $("#form-back").click( function() {
    $(".thumbs.row.packaging").show();

    $("#submit-form").hide();
  });
});
