//Navbar Box Shadow on Scroll 
$(window).on('load', function (){
    var navbar = $('.navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 40){
       		navbar.css('box-shadow', 'none');
        } else {
          navbar.css('box-shadow', '0px 10px 20px rgba(0, 0, 0, 0.4)'); 
        }
    });  
})


//Function from Bluthemes, lets you add li elemants to affix object without having to alter and data attributes set out by bootstrap
$(function(){

	// name your elements here
	var stickyElement   = '.panel-affix',   // the element you want to make sticky
		bottomElement   = 'footer'; // the bottom element where you want the sticky element to stop (usually the footer) 

	// make sure the element exists on the page before trying to initalize
	if($( stickyElement ).length){
		$( stickyElement ).each(function(){

			// let's save some messy code in clean variables
			// when should we start affixing? (the amount of pixels to the top from the element)
			var fromTop = $( this ).offset().top, 
				// where is the bottom of the element?
				fromBottom = $( document ).height()-($( this ).offset().top + $( this ).outerHeight()),
				// where should we stop? (the amount of pixels from the top where the bottom element is)
				// also add the outer height mismatch to the height of the element to account for padding and borders
				stopOn = $( document ).height()-( $( bottomElement ).offset().top)+($( this ).outerHeight() - $( this ).height()); 

			// if the element doesn't need to get sticky, then skip it so it won't mess up your layout
			if( (fromBottom-stopOn) > 200 ){
				// let's put a sticky width on the element and assign it to the top
				$( this ).css('width', $( this ).width()).css('top', 0).css('position', '');
				// assign the affix to the element
				$( this ).affix({
					offset: { 
						// make it stick where the top pixel of the element is
						top: fromTop - 80,  
						// make it stop where the top pixel of the bottom element is
						bottom: stopOn
					}
				// when the affix get's called then make sure the position is the default (fixed) and it's at the top
				}).on('affix.bs.affix', function(){ $( this ).css('top', '80px').css('position', ''); });
			}
			// trigger the scroll event so it always activates 
			$( window ).trigger('scroll'); 
		}); 
	}

});

//Offset scrollspy height to highlight li elements at good window height
$('body').scrollspy({
	offset: 60
});

//Smooth Scrolling For Internal Page Links
/*
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

*/

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myScrollspy a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});