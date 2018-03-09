
// $('.nav a:not(.lang)').on('click', function() {
//     $('.btn-navbar').click(); //bootstrap 2.x
//     $('.navbar-toggle').click() //bootstrap 3.x by Richard
//     $('body').scrollspy({
//         target: '#navbar'
//     });
// });

// smoothScroll
$('#navbar a:not(.lang)').smoothScroll();
$("#brand").on('click', function() {
  $("body,html").animate({
    scrollTop: 0
  }, 'slow');
  return false;
});
$('.navbar-collapse a').click(function() {
  $(".navbar-collapse").collapse('hide');
});

// multi-lang
$(document).ready(function() {
  var setLanguage = function(lang) {
    lang = lang.substr(0, 2);
    var from = lang == 'en' ? 'ja' : 'en';
    $('.lang-' + from).hide();
    $('.lang-' + lang).fadeIn();
    $('.lang').parent().removeClass("active")
    $('.lang').each(function(i, el) {
      if ($(el).data("lang") == lang) {
        $(el).parent().addClass("active");
      }
    });
  };
  $(".lang").click(function() {
    setLanguage($(this).data("lang"));
  });
  setLanguage(navigator.language || navigator.userLanguage || "en");
});
