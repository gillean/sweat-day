<script type="text/paperscript" canvas="canvas">


    // Get a reference to the canvas object.
    var revealCanvas = $( "#canvas" );

    // Get a reference to the perecent label.
    var percentLabel = $( "#percentLabel" );


    // I return the relevant screen/canvas coordinates needed
    // to draw the canvas object.
    function getRevealCoordinates( percentRevealed ){

        // Default the percent to zero if not provided.
        percentRevealed = (percentRevealed || 0);

        // Calculate the relevant coordinates.
        var width = revealCanvas.width();
        var height = revealCanvas.height();
        var centerX = Math.floor( width / 2 );
        var centerY = Math.floor( height / 2 );
        var complete = Math.max( centerX, centerY );
        var revealRadius = Math.floor( complete * (percentRevealed / 100) );

        // Return the coordinate collection.
        return({
            width: width,
            height: height,
            centerX: centerX,
            centerY: centerY,
            revealRadius: revealRadius
        });

    }


    // Get a reference to the current reveal path. We will
    // need this so that we can remove it between frame
    // rendering.
    var currentReveal = null;


    // I draw the current reveal over the page content.
    function drawReveal( percentRevealed ){

        // Set the fill color.
        project.currentStyle.fillColor = "black";

        // Get the releveant coordinates for drawing the reveal
        // path on the canvas.
        var coords = getRevealCoordinates( percentRevealed );

        // Create a shape for the "fill". We are going to "punch"
        // a cicrle out of this to reveal the content below.
        var screenCover = new Path.Rectangle(
            0,
            0,
            coords.width,
            coords.height
        );

        // Create our "punch" for the compound path. This
        // transparency will reveal the content behind the
        // page overlay.
        var reveal = new Path.Circle(
            new Point( coords.centerX, coords.centerY ),
            coords.revealRadius
            );

        // If there is a current overlay, remove it. Otherwise,
        // the canvas doesn't know to refresh the transparency.
        if (currentReveal){

            currentReveal.remove();

        }

        // Create the new compond path. When doing this, the
        // parts of the paths that overlap will be created as a
        // transparency (like any vector graphic program).
        currentReveal = new CompoundPath( screenCover, reveal );

        // Update the label.
        percentLabel.text( percentRevealed + "%" );

    }


    // I am the animation hook. I render the canvas.
    function onFrame(){

        // Check to see if our animation is done.
        if (percent > 100){

            // Clear our percent-simulation timer.
            clearInterval( timer );

            // Kill the onFrame() event handler.
            onFrame = null;

            // Remove the canvas and label.
            revealCanvas.remove();
            percentLabel.fadeOut();

            // Return out.
            return;

        }

        // As we near the end of our loading, we want to start
        // fading out the overlay to provide a smooth and
        // pleasing transition.
        if (percent >= 90){

            revealCanvas.css(
                "opacity",
                ((100 - percent) / 10)
            );

        }

        // Draw the updated reveal overlay.
        drawReveal( percent );

    }


    // Trigger the first reveal.
    drawReveal();


    // -------------------------------------------------- //
    // -------------------------------------------------- //


    // Simulate something loading.
    var percent = 0;

    var timer = setInterval(
        function(){
            percent++;
        },
        50
    );
</script>

