back_button = function(){};

// when a navigation link has been clicked
function nav_content_switcher(type) {
  if (type == 'about-me') {
    document.querySelector(".thumbs.row").style.display = 'none';
    document.querySelector(".full-images").style.display = 'none';

    document.querySelector("#about-me").style.display = '';
  }
  else {
    document.querySelector("#about-me").style.display = 'none';
    document.querySelector(".thumbs.row").style.display = 'none';
    document.querySelector(".full-images").style.display = 'none';

    document.querySelector( ".thumbs.row."+type ).style.display = '';

    // when a back button has been clicked
    back_button = function() {
      document.querySelector("#about-me").style.display = 'none';
      document.querySelector( ".thumbs.row."+type ).style.display = '';
    }

  }
}

// when the document has been loaded
document.addEventListener('DOMContentLoaded', function(){

  document.querySelector(".thumbs.row.posters").style.display = 'none';
  document.querySelector("#about-me").style.display = 'none';

});
