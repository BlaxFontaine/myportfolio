var w = Math.round($(document).width() / 255);
var h = Math.round($(document).height() / 255);
var body = $(".navbar-brand, .nav-item, .navbar-toggler-icon, .footer-link");

$(document).mousemove(function(e){
    var pageX = Math.round(e.pageX / w);
    var pageY = 255 - Math.round(e.pageY / h);
    body.css("color", "rgb("+pageX+", "+pageY+",255)");
});


$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
});
// $(function() {
//     /**
//     * Smooth scrolling to page anchor on click
//     **/
//   $("a[href*='#']:not([href='#'])").click(function() {
//     event.preventDefault();
//     if (
//       location.hostname == this.hostname
//       && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
//       ) {
//         var anchor = $(this.hash);
//         anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
//         if ( anchor.length ) {
//           $("html, body").animate( { scrollTop: anchor.offset().top }, 1000).scrollIntoView(true);
//         }
//       }
//   });
// });
