



  $ (document).ready(function () {
    $('.menu-toggler').on('click', function() {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
       $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top - 100
       }, 2000);
    });

    $('#up').on('click', function() {
       $('html, body').animate({
         scrollTop: 0
       },  2000);
    });

    AOS.init({
      easing: 'ease',
      duration: 1800
    });

});


// API Key
// aa55b3744187499a12e5a483d558870d-us10
// List Id
// 1489c2ea50
