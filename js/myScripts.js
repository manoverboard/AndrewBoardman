window.onload = function timeMessage() {
    // ------------------------------------------------------
    // home page message based on time
    // ------------------------------------------------------
    var time = new Date().getHours();
    
    if ((time == 0) || (time == 1) || (time == 2) || (time == 3) || (time == 4) || (time == 5)) {
        document.getElementById("timeMessage").innerHTML = "sleeping away.";
    } else if (time == 6) {
        document.getElementById("timeMessage").innerHTML = "eating breakfast.";
    } else if (time == 7) {
        document.getElementById("timeMessage").innerHTML = "on a run.";
    } else if (time == 8) {
        document.getElementById("timeMessage").innerHTML = "meditating.";
    } else if (time == 9) {
        document.getElementById("timeMessage").innerHTML = "writing.";
    } else if (time == 10) {
        document.getElementById("timeMessage").innerHTML = "reading something or other.";
    } else if (time == 11) {
        document.getElementById("timeMessage").innerHTML = " working on a project.";
    } else if (time == 12) {
        document.getElementById("timeMessage").innerHTML = "eating some kind of lunch.";
    } else if (time == 13) {
        document.getElementById("timeMessage").innerHTML = "talking briefly on the phone.";
    } else if (time == 14) {
        document.getElementById("timeMessage").innerHTML = "developing a plan.";
    } else if (time == 15) {
        document.getElementById("timeMessage").innerHTML = "somehow managing.";
    } else if (time == 16) {
        document.getElementById("timeMessage").innerHTML = "writing.";
    } else if (time == 17) {
        document.getElementById("timeMessage").innerHTML = "solving some sort of problem.";
    } else if (time == 18) {
        document.getElementById("timeMessage").innerHTML = "eating dinner.";
    } else if (time == 19) {
        document.getElementById("timeMessage").innerHTML = "avoiding the Twitter.";
    } else if (time == 20) {
        document.getElementById("timeMessage").innerHTML = "washing dishes/doing nothing.";
    } else if (time == 21) {
        document.getElementById("timeMessage").innerHTML = "working on tomorrow.";
    } else if (time == 22) {
        document.getElementById("timeMessage").innerHTML = " reading a book.";
    } else if (time == 23) {
        document.getElementById("timeMessage").innerHTML = "reading a magazine.";
    }
};






$(document).ready(function () {
    // ------------------------------------------------------
    // home page animation
    // ------------------------------------------------------
    function GetCookie(name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;

        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg)
                return "here";
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0)
                break;
        }
        return null;
    }

    // time-out
    $(".home-animation-wrapper").delay(2000).fadeOut("slow");

    // check cookie
    var visited = GetCookie("visited")
    if (visited == null) {
        $('.home-animation-wrapper').css("display", "block");
    }
    else {
        $('.home-animation-wrapper').css("display", "none");
    }
    // set the cookie
    var expire = new Date();
    expire = new Date(expire.getTime() + 7776000000);
    document.cookie = "visited=here; expires=" + expire;

    // ------------------------------------------------------
    // back to top hide/show 
    // ------------------------------------------------------
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("top-button").style.bottom = "20px"
        } else {
            document.getElementById("top-button").style.bottom = "-120px"
        }
        prevScrollpos = currentScrollPos
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
    // post transition time-out
    // ------------------------------------------------------
    $(".post-transition").delay(500).fadeOut("slow");

    // ------------------------------------------------------
    // project image size fix
    // ------------------------------------------------------
    $(".single-project .project-content p img").parent().addClass("project-image");
});
