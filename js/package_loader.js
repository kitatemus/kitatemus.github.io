// when the document has been loaded
$(document).ready(function() {

  // for every packaging folder, and ever poster folder
  var folders = [ "dead-witch",
                  "dogtown",
                  "dead-witch2",
                  "dogtown2"];

  // add the initial row (where the images will sit)
  $("#thumbnails").last().append('<div class="thumbs row">');

  // iterate through each packaging folder
  $.each( folders, function(index,folder) {

    // get the package info
    thumb_path = "images-packaging/" + folder + "/thumb.png";
    alt_text_path = "images-packaging/" + folder + "/alt_text.txt";

    // append a div for the thumbnail and text
    $(".thumbs.row").last().append('\
    <div class="three columns">\
    \
    <img src=' + thumb_path + ' width="100%">\
    <p>' + $.get(alt_text_path) + '</p>\
    </div>\
    ')

    // if this is the last image in a row
    if (index%3 == 2) {
      // start the next row
      $("#thumbnails").last().append('<div class="thumbs row">');
    }
  });
});
