// define back button early
back_button = function(){};

/* hide or show a set of elements
 * param: selector can be any selector
 * param: display should be either 'none' (to hide) or '' (to show)
 */
set_display_selector = function(selector, display) {
  ele = document.querySelectorAll(selector);
  Array.prototype.forEach.call(ele, function(e) {
    console.log(display);
    ele.style.display = display;
  });
}

// when a navigation link has been clicked
function nav_content_switcher(type) {
  if (type == 'about-me') {
    set_display_selector(".thumbs.row", 'none');
    set_display_selector(".full-images", 'none');

    set_display_selector("#about-me", '');
  }
  else {
    set_display_selector("#about-me", 'none');
    set_display_selector(".thumbs.row", 'none');
    set_display_selector(".full-images", 'none');

    set_display_selector( ".thumbs.row."+type , '');

    // when a back button has been clicked
    back_button = function() {
      set_display_selector("#about-me", 'none');
      set_display_selector(".full-images", 'none');

      set_display_selector( ".thumbs.row."+type , '');
    }

  }
}

// when the document has been loaded
document.addEventListener('DOMContentLoaded', function(){

  set_display_selector(".thumbs.row.posters", 'none');
  set_display_selector("#about-me", 'none');

});
