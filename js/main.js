$(document).ready(function(){

  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
  	
  });
});

//PARALLAX
$(document).ready(function() {

  "use strict";
  
  $(window).bind('load', function() {
      "use strict";
      parallaxInit();
  });

  function parallaxInit() {
      "use strict";
      $('.home-parallax').parallax("30%", 0.1);
      $('.subscribe-parallax').parallax("30%", 0.1);
      $('.testimonial').parallax("10%", 1);
      /*add as necessary*/
  }
});


