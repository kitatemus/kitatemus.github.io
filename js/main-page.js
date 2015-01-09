// define back button early
back_button = function(){};

/* hide or show a set of elements
 * param: selector can be any selector
 * param: display should be either 'none' (to hide) or '' (to show)
 */
set_selector_display = function(selector, display) {
  var ele = document.querySelectorAll(selector);
  Array.prototype.forEach.call(ele, function(e) {
    e.style.display = display;
  });
}

// when a navigation link has been clicked
function nav_content_switcher(type) {
  if (type == 'about-me') {
    set_selector_display(".thumbs.row", 'none');
    set_selector_display(".full-images", 'none');

    set_selector_display("#about-me", '');
  }
  else {
    set_selector_display("#about-me", 'none');
    set_selector_display(".thumbs.row", 'none');
    set_selector_display(".full-images", 'none');

    set_selector_display( ".thumbs.row."+type , '');

    // when a back button has been clicked
    back_button = function() {
      set_selector_display("#about-me", 'none');
      set_selector_display(".full-images", 'none');

      set_selector_display( ".thumbs.row."+type , '');
    }

  }
}

// when the document has been loaded
document.addEventListener('DOMContentLoaded', function(){
  nav_content_switcher('packaging')
});
