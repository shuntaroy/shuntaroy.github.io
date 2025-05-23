$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // Close navbar menu when click in mobile screens
    $('.navbar-menu a').click(function () {
        $(".navbar-burger").removeClass('is-active');
        $(".navbar-menu").removeClass('is-active');
    });

    // Smooth Scroll on navbar links and down arrows
    $('#navbar a:not(.lang)').smoothScroll({ offset: -50 });
    $("#brand").on('click', function () {
        $("body,html").animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });
    $('#down a').smoothScroll({ offset: -50 });

    // A work-around until Line Awesome supports Notion icon
    $("#notion_icon").hover(function () {
        $("#notion_icon").attr('src', "./assets/notion-logo-no-background.png");
    }, function () {
        $("#notion_icon").attr('src', "./assets/notion-logo-white.png");
    });
});
