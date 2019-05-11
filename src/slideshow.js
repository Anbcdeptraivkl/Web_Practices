$("#slideshow .slide:gt(0)").hide();

setInterval(
    function() {
        $("#slideshow .slide:first")
        .fadeOut()
        .next()
        .fadeIn()
        .end()
        .appendTo("#slideshow");
    },
    3000
);