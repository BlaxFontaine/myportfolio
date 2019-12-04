const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
        navbar.classList.add('nav-black');
      } else {
        navbar.classList.remove('nav-black');
      }
    });
  }
}

initUpdateNavbarOnScroll();

var w = Math.round($(document).width() / 255);
var h = Math.round($(document).height() / 255);
var body = $(".navbar-brand, .nav-item, .navbar-toggler-icon, .footer-link");

$(document).mousemove(function(e){
    var pageX = Math.round(e.pageX / w);
    var pageY = 255 - Math.round(e.pageY / h);
    body.css("color", "rgb("+pageX+", "+pageY+",255)");
});



$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
  $("a[href*='#']:not([href='#'])").click(function() {
    event.preventDefault();
    if (
      location.hostname == this.hostname
      && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
      ) {
        var anchor = $(this.hash);
        anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
        if ( anchor.length ) {
          $("html, body").animate( { scrollTop: anchor.offset().top }, 1000).scrollIntoView(true);
        }
      }
  });
});
