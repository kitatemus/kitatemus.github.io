// when the document has been loaded
$(document).ready(function() {

  // for every packaging folder, and ever poster folder
  var folders = [ "dead-witch",
                  "dogtown",
                  "dead-witch2",
                  "dogtown2"];

  // add the initial row (where the images will sit)
  $("#thumbnails").last().append('<div class="thumbs row packaging">');

  // iterate through each packaging folder
  $.each( folders, function(index,folder) {

    // get the package info
    thumb_path = "images-packaging/" + folder + "/thumb.png";
    alt_text_path = "images-packaging/" + folder + "/alt_text.txt";

    // append a div for the thumbnail and text
    $(".thumbs.row").last().append('\
    <div id="'+folder+'-thumb" class="three columns">\
    \
    <a href="#">\
    <img id="'+folder+'" class="thumb" src=' + thumb_path + ' width="100%">\
    </a>\
    <p class="'+folder+'-thumb alt-text"></p>\
    </div>\
    ');

    $("p."+folder+"-thumb.alt-text").load(alt_text_path);

    // if this is the last image in a row
    if (index%3 == 2) {
      // start the next row
      $("#thumbnails").last().append('<div class="thumbs row packaging">');
    }

    // get the info for the full page version
    full_path = "images-packaging/" + folder + "/full.png"
    full_text_path = "images-packaging/" + folder + "/full_text.txt"

    // append a div for the image and text
    $("#fulls").append('\
    <div id="'+folder+'-full" class="full-images one column">\
    \
    <img class="thumb" src=' + full_path + ' width="100%">\
    <p class="'+folder+'-full full-text"></p>\
    <a class="back-button" href="#">back</a>\
    </div>\
    ')

    $("p."+folder+"-full.full-text").load(full_text_path);

  });

  $(".full-images").hide();

  // when you click on a thumb in a row
  $("img.thumb").click(function() {
    // hide all the thumbnails
    $("#thumbnails").hide();
    // show the image and text
    $("#"+this.id+"-full").show()
    // change the location of the page
    //TODO
  });
  $("a.back-button").click(function() {
    // hide all the thumbnails
    $(".full-images").hide();
    // show the image and text
    $("#thumbnails").show();
    // change the location to the image

  });
});
