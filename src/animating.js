// PROPERTIES:
var proBar = document.getElementById('pro-bar');


// IMPLEMNTATIONS:
proBar.onclick = function() {
    performAnimation(
        {
            duration: 1000, 

            timing: function(timeFraction) {
                // Linear:
                return timeFraction;
            },

            draw: function(progress) {
                // Widening:
                proBar.style.width = progress * 100 + '%';
            }
        }
    );
};


// DEFINITIONS:
function performAnimation(options) {
    var startTime = performance.now();

    requestAnimationFrame(
        function animate(time) {
            // time Fraction 0 to 1:
            var timeFraction = (time - startTime) / options.duration;
            if (timeFraction > 1)
                timeFraction = 1;

            var progress = options.timing(timeFraction);

            options.draw(progress);

            if (timeFraction < 1)
                requestAnimationFrame(animate);
        }
    );
}   