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

// function that takes a URL and navigates to a page
function URL_Navigator(urlString) {

  // function to tell us if any one element from a list is in another
  // return the index of the secondList which matched the firstList
  function elementSearch(firstList, secondList) {
    var secondListIndex, i;

    for (i=0; i<firstList.length; i++) {
      secondListIndex = secondList.indexOf(firstList[i]);
      if (secondListIndex != -1) {
        break;
      }
    }
    return secondListIndex;
  }

  // look for element that points to 'fall', 'winter' or 'spring'
  var splitURL, folderURLIndex, folderURLTitle, imageURLTitle;
  splitURL = urlString.split("#");
  if (splitURL.length == 1) {
    nav_content_switcher('packaging');
  }
  folderURLIndex = elementSearch(['about-me', 'posters', 'packaging'], splitURL);

  // if we found a folder in the url
  if (folderURLIndex != -1) {
    folderURLTitle = splitURL[folderURLIndex];
    nav_content_switcher(folderURLTitle);

    // check if that was the last element
    // (otherwise we need to point to a specific element)
    if (folderURLIndex != splitURL.length-1) {
      imageURLTitle = splitURL[folderURLIndex+1];
      document.querySelector("img#"+imageURLTitle).click();
    }
  }

}

window.onhashchange = function(args) {
  URL_Navigator(args.newURL);
}

// when the document has been loaded
document.addEventListener('DOMContentLoaded', function(){
  nav_content_switcher('packaging');
  URL_Navigator(document.URL);
});
