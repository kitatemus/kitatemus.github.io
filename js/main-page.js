// when the document has been loaded
$(document).ready(function() {
  $(".thumbs.row.posters").hide();
  $("#about-me").hide();

  $("#packaging-button").click( function() {
    $("#about-me").hide();
    $(".thumbs.row.posters").hide();
    $(".full-images").hide();

    $(".thumbs.row.packaging").show();
  });

  $("#posters-button").click( function() {
    $("#about-me").hide();
    $(".thumbs.row.packaging").hide();
    $(".full-images").hide();

    $(".thumbs.row.posters").show();
  });

  $("#about-me-button").click( function() {
    $(".thumbs.row").hide();
    $(".full-images").hide();

    $("#about-me").show();
  });

  $("#form-back").click( function() {
    $(".thumbs.row.packaging").show();

    $("#about-me").hide();
  });
});
