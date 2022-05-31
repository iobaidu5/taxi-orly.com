$(document).ready(function () {
    $('#slide1').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        }
    })
});

$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });
  
  const nav = document.querySelector('.Navbar');
  window.addEventListener('scroll', fixNav);
  
  function fixNav() {
      if (window.scrollY > nav.offsetHeight + 150) {
          nav.classList.add('navbar-active');
      } else {
          nav.classList.remove('navbar-active');
      }
  }