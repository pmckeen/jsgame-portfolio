// Author: Declan

(function () {

    let namespace = document.getElementById("namespace");

    namespace.innerHTML = "Author: D. I.<br><code>A</code> and <code>D</code> move Left and Right. <code>W</code> and <code>D</code> move Up and Down.";

    var lastTimestamp = 0;

    let canvas = document.getElementById("gamecanvas");
    let context = canvas.getContext("2d");


    var playerXPosition = 400;
    var playerYPosition = 200;


    document.addEventListener("keypress", function (event) {
        //namespace.innerHTML += ` ${event.code}`;
        if (event.code == 'KeyA') {
            playerXPosition -= 10;
        }
        if (event.code == 'KeyD') {
            playerXPosition += 10;
        }
        if (event.code == 'KeyW') {
            playerYPosition -= 10;
        }
        if (event.code == 'KeyS') {
            playerYPosition += 10;
        }
    });



    function drawPlayer(x, y) {

        // Draw the head
        context.beginPath()
        context.arc(x + 20, y + 20, 10, 0, Math.PI * 2); // Draw the head at x, y -90, radius 10, no offset, full circle
        context.stroke();
        context.fill();

        // Draw the back
        context.beginPath();
        // Move to bottom of head
        context.moveTo(x + 20, y + 30);
        // Draw a line twice as tall as the head (40)
        context.lineTo(x + 20, y + 70);
        context.stroke();

        // Draw the arms
        context.beginPath();
        context.moveTo(x + 5, y + 50); // left hand at x - 20, y - 60
        context.lineTo(x + 20, y + 35); // shoulder at x, y - 70
        context.lineTo(x + 35, y + 50); // right hand at x + 20, y -70
        context.stroke();

        // Draw the legs
        context.beginPath();
        // Move to left foot
        context.moveTo(x + 5, y + 100);
        // Line to bottom of back, then right foot
        context.lineTo(x + 20, y + 70);
        context.lineTo(x + 35, y + 100);
        context.stroke();



    }
    function gameLoop(timestamp) {

        let duration = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        let fps = 1000 / duration; // Calculate FPS

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "30px Arial";
        context.fillText("FPS: " + Math.round(fps), 50, 50); // Show FPS on screen

        /// ---- Add More Code Here


        drawPlayer(playerXPosition, playerYPosition);


        /// ---- End

        requestAnimationFrame(gameLoop); // Ask for next frame
    }
    requestAnimationFrame(gameLoop); // Ask for first frame
}());