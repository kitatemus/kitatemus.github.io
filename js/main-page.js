back_button = function(){};

// when a navigation link has been clicked
function nav_content_switcher(type) {
  if (type == 'about-me') {
    document.querySelectorAll(".thumbs.row").style.display = 'none';
    document.querySelectorAll(".full-images").style.display = 'none';

    document.querySelectorAll("#about-me").style.display = '';
  }
  else {
    document.querySelectorAll("#about-me").style.display = 'none';
    document.querySelectorAll(".thumbs.row").style.display = 'none';
    document.querySelectorAll(".full-images").style.display = 'none';

    document.querySelectorAll( ".thumbs.row."+type ).style.display = '';

    // when a back button has been clicked
    back_button = function() {
      document.querySelectorAll("#about-me").style.display = 'none';
      document.querySelectorAll( ".thumbs.row."+type ).style.display = '';
    }

  }
}

// when the document has been loaded
document.addEventListener('DOMContentLoaded', function(){

  document.querySelectorAll(".thumbs.row.posters").style.display = 'none';
  document.querySelectorAll("#about-me").style.display = 'none';

});
