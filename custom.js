// jQuery(function() {
//   'use strict';
//   jQuery('footer a').smoothScroll({speed: 400});
// });

$('#navbar a').smoothScroll();
$('a.navbar-brand').smoothScroll();
$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});