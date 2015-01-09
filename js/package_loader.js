// image object that sets up folders
var imagesObj = {
  'packaging': ["wegmans",
                "owl-house",
                "forge",
                "dogtown",
                "dead-witch" ],

  'posters': ["america",
              "japan",
              "children",
              "black-metal",
              "detroit"]
}

// check if a url exists
function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

// function to select a thumbnail
function select_thumb() {

  // hide all the thumbnails
  var thumbs = document.querySelectorAll(".thumbs.row.packaging");
  Array.prototype.forEach.call(thumbs, function(e) {
    e.style.display = 'none';
  });

  // show the image and text
  document.querySelector("#"+this.id+"-full").style.display = '';

  // change the location of the page
  //TODO

}

// function to append element to last of a selection
function append_last(selector, element) {

  var selection = document.querySelectorAll(selector);
  var last_selection = selection[selection.length - 1];
  last_selection.appendChild(element);

}

/* function to load images
 * root can be packaging or posters... 'images-' will be prepended when appr.
 * folders should be a list with each folder name inside 'images-<root>'
 */
function folder_loaders(root, folders) {

  // add the initial row (where the images will sit)
  var init_row = document.createElement('div');
  init_row.setAttribute('class', 'thumbs row ' + root );

  append_last("#thumbnails", init_row);

  // iterate through each packaging folder
  Array.prototype.forEach.call( folders, function(folder, index) {

    // get the image info
    var thumb_path = "images-" + root + "/" + folder + "/thumb.png";
    var alt_text_path = "images-" + root + "/" + folder + "/alt_text.txt";

    // div with thumb and text
    var new_element = document.createElement('div');
    new_element.setAttribute('class', "three columns");
    new_element.setAttribute('id', folder+'-thumb');
    new_element.innerHTML = '\
      <a href="#">\
        <img id="'+folder+'" class="thumb" src=' + thumb_path + ' onclick="select_thumb" width="100%">\
      </a>\
      <p class="'+folder+'-thumb alt-text"></p>\
    ';

    // append the div
    append_last(".thumbs.row", new_element)

    // load in the alt_text
    var alt_text_loader = new XMLHttpRequest();
    alt_text_loader.open("GET",alt_text_path,true);
    alt_text_loader.send();

    alt_text_loader.onreadystatechange = function() {
      if (this.readyState== 4 && this.status == 200){
        alt_element = document.querySelector("p."+folder+"-thumb.alt-text");
        alt_element.innerHTML = this.responseText;
      }
    }

    // if this is the last image in a row
    if (index%3 == 2) {
      // start the next row
      var next_row = document.createElement('div');
      next_row.setAttribute('class', 'thumbs row ' + root );
      append_last("#thumbnails", next_row)
    }

    // get the info for the full page version
    var full_path = "images-" + root + "/" + folder + "/full.png";
    var full_text_path = "images-" + root + "/" + folder + "/full_text.txt";

    // div with thumb and text
    var new_element = document.createElement('div');
    new_element.setAttribute('class', "full-images row");
    new_element.setAttribute('id', folder+'-full');
    new_element.innerHTML = '\
      <div class="'+folder+'-full image-container eight columns">\
        <img class="full-image" src=' + full_path + ' width="100%">\
      </div>\
      <div class="'+folder+'-full text-container four columns">\
        <p class="'+folder+'-full full-text"></p>\
      </div>\
    ';

    // append the div
    append_last("#fulls", new_element)

    // try to pull in other images (e.g. full1.png, full2.png, etc...)
    var full_path_part = "images-" + root + "/" + folder + "/full";
    var current_img = 1;
    var current_path = full_path_part + current_img + ".png";

    // while we still have images to load
    while ( UrlExists(current_path) ) {

      // append those images to the div
      var new_full = document.createElement("img");
      new_full.setAttribute("class", "full-image");
      new_full.setAttribute("src", current_path);
      new_full.setAttribute("width", "100%");

      append_last("."+folder+"-full.image-container", new_full);

      // bump up the image number
      current_img = current_img + 1;
      current_path = full_path_part + current_img + ".png";
    }

    // load in the full_text
    var full_text_loader = new XMLHttpRequest();
    full_text_loader.open("GET",full_text_path,true);
    full_text_loader.send();

    full_text_loader.onreadystatechange = function() {
      if (this.readyState== 4 && this.status == 200){
        full_element = document.querySelector("p."+folder+"-full.full-text");
        full_element.innerHTML = this.responseText;
      }
    }

    // append back button
    var back_button = document.createElement('a');
    back_button.setAttribute("class", root+"-back-button");
    back_button.setAttribute("href", "#");
    back_button.setAttribute("onclick", "back_button()");
    back_button.textContent = "back";

    append_last("."+folder+"-full.text-container", back_button);

  });
}

// when the document has been loaded
document.addEventListener('DOMContentLoaded', function(){

  folder_loaders("packaging", imagesObj["packaging"]);

});
