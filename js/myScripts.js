$(document).ready(function () {
    
    // ------------------------------------------------------
    // back to top hide/show 
    // ------------------------------------------------------
    
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("top-button").style.bottom = "20px"
        } else {
            document.getElementById("top-button").style.bottom = "-120px"
        }
        prevScrollpos = currentScrollPos
    }

    // ------------------------------------------------------
    // restrict hovers to non-touch devices 
    // ------------------------------------------------------

    var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    if (!touchsupport) { // browser doesn't support touch
        document.documentElement.className += " non-touch";
    }

    // ------------------------------------------------------
    // blog page hover state 
    // ------------------------------------------------------
    $(".post .post-title a").hover(function () {
        $(".post:hover .post-number").toggleClass("blue-hover");
    });

    // ------------------------------------------------------
    // home page blog hover state
    // ------------------------------------------------------
    $(".latest-post-link").hover(function () {
        $(".latest-post-date").toggleClass("blue-hover");
    });

    // ------------------------------------------------------
    // page sidebar position
    // ------------------------------------------------------
    $(window).on('load resize', function () {

        var $pageImageHeight = $(".page .main-image-v").height();
        $(".page aside").css({
            "top": $pageImageHeight
        });

    });

    // ------------------------------------------------------
    // display image title tag as a caption below image
    // ------------------------------------------------------
    var title = $('img').attr('title');
    if (title != null) {
        $('img').after("<span class='image-caption'>" + title + "</span>");
    }

    // ------------------------------------------------------
    // home transition time-out
    // ------------------------------------------------------
    $(".home-animation-wrapper").delay(1500).fadeOut("slow");


    // ------------------------------------------------------
    // post transition time-out
    // ------------------------------------------------------
    $(".post-transition").delay(500).fadeOut("slow");

    // ------------------------------------------------------
    // project image size fix
    // ------------------------------------------------------
    $(".single-project .project-content p img").parent().addClass("project-image");
    


    

});
