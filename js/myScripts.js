$(document).ready(function () {

    // blog page hover state
    $(".post .post-title a").hover(function () {
        $(".post:hover .post-number").toggleClass("blue-hover");
    });

    // home page blog hover state
    $(".latest-post-link").hover(function () {
        $(".latest-post-date").toggleClass("blue-hover");
    });

    // page sidebar position
    var $pageImageHeight = $(".page .main-image-v").height();
    $(".page aside").css({
        "top": $pageImageHeight
    });


});
