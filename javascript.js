$(document).ready(function() {

    // Initialise canvas
    initCanvas();
    $(window).resize(function() {
        initCanvas();
    });
});

function initCanvas() {
    $('#canvas').attr("width",$(window).width());
   $('#canvas').attr("height",$(window).height());
}
