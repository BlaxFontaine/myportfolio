const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
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




const title = document.querySelector('.banner_title')


//////// Light //////////
document.onmousemove = function(e) {
  let x = e.pageX - window.innerWidth/2;
  let y = e.pageY - window.innerHeight/2;

  title.style.setProperty('--x', x + 'px')
  title.style.setProperty('--y', y + 'px')
}

////////////// Shadow ///////////////////
title.onmousemove = function(e) {
  let x = e.pageX - window.innerWidth/2;
  let y = e.pageY - window.innerHeight/2;

  let rad = Math.atan2(y, x).toFixed(2);
  let length = Math.round(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))/10);

  let x_shadow = Math.round(length * Math.cos(rad));
  let y_shadow = Math.round(length * Math.sin(rad));

  title.style.setProperty('--x-shadow', - x_shadow + 'px')
  title.style.setProperty('--y-shadow', - y_shadow + 'px')

}
