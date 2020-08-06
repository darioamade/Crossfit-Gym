
		$(document).ready(function() {
    
    
      /* For the sticky navigation */
        
      $('.js--section-hero').waypoint(function(direction) {
          if (direction == "down") {
              $('nav').addClass('sticky');
          } else {
              $('nav').removeClass('sticky');
          }
      }, {
        offset: '60px;'
      });
      
});



window.addEventListener("load", () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
 });
 