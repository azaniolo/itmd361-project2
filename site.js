"use strict";
(function() {
  if (typeof(document.querySelector)==='undefined') {
    return;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var sidebar, navbar, navparent, sidebutton;
    document.querySelector('html').className='js';

    navbar = document.querySelector('nav');
    navparent = navbar.parentNode;

    sidebar = document.createElement('section');
    sidebar.id = 'sidebar';

    sidebutton = document.createElement('button');
    sidebutton.textContent = 'Menu';
    sidebutton.id = 'sidebutton';

    navparent.appendChild(sidebutton);
    navparent.replaceChild(sidebar, navbar);
    sidebar.appendChild(navbar);

    sidebutton.addEventListener('click', function(){
      var sidebar = document.getElementById('sidebar');
      if(sidebar.classList.contains('opennav')) {
        sidebar.classList.remove('opennav');
      }
      else {
        sidebar.classList.add('opennav');
      }
    });
  });

})();
