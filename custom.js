$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // close navbar menu when click in mobile screens
    $('.navbar-menu a').click(function () {
        $(".navbar-burger").removeClass('is-active');
        $(".navbar-menu").removeClass('is-active');
    });

    // Smooth Scroll on navbar links
    $('#navbar a:not(.lang)').smoothScroll();
    $("#brand").on('click', function () {
        $("body,html").animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

    // Switch language (default: English)
    var setLanguage = function (lang) {
        lang = lang.substr(0, 2);
        var from = lang == 'en' ? 'ja' : 'en';
        $('.lang-' + from).hide();
        $('.lang-' + lang).fadeIn();
        $('.lang').parent().removeClass("active")
        $('.lang').each(function (i, el) {
            if ($(el).data("lang") == lang) {
                $(el).parent().addClass("active");
            }
        });
    };
    $(".lang").click(function () {
        setLanguage($(this).data("lang"));
    });
    setLanguage(navigator.language || navigator.userLanguage || "en");

    // A work-around until Line Awesome supports Notion icon
    $("#notion_icon").hover(function () {
        $("#notion_icon").attr('src', "./assets/notion-logo-no-background.png");
    }, function () {
        $("#notion_icon").attr('src', "./assets/notion-logo-white.png");
    });
});
