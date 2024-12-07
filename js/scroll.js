$(document).ready(function() {
  // Smooth scrolling when clicking on the "Learn more" button or any anchor links
  $('a[href^="#"]:not(.carousel-control-prev):not(.carousel-control-next):not(.report-btn)').on('click', function(e) {
    e.preventDefault();  // Prevent default action (jumping directly to the section)
    var target = this.hash;
    var $target = $(target);

    // Animate the scroll to the target section
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 1000, 'swing');
  });
});