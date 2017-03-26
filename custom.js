$('#navbar a').smoothScroll();
$("#brand").on('click', function() {
    $("body,html").animate({
        scrollTop: 0
    }, 'slow');
    return false;
});
$('.nav a').on('click', function() {
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
    $('body').scrollspy({
        target: '#navbar'
    });
});
