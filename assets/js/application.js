const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navigation');
  if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.add('nav-black');
    });
  }
}

initUpdateNavbarOnScroll();

var w = Math.round($(document).width() / 255);
var h = Math.round($(document).height() / 255);
var body = $(".main-title, .icon, .current, .title");

$(document).mousemove(function(e){
    var pageX = Math.round(e.pageX / w);
    var pageY = 255 - Math.round(e.pageY / h);
    body.css("color", "rgb("+pageX+", "+pageY+",255)");
});
