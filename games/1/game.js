// Author: Simeon

(function () {
    let namespace = document.getElementById("namespace");

    namespace.innerHTML = "Author: S. A.<br><code>A</code> and <code>D</code> move Left and Right. <code>W</code> Jumps.";

    var lastTimestamp = 0;

    let canvas = document.getElementById("gamecanvas");
    let context = canvas.getContext("2d");

    var playerXPosition = 400;
    var playerYPosition = 200;
    var playerYVelocity = 0;

    function inputHandler(event) {
        if (event.code == 'KeyA') {
            playerXPosition -= 30;
        }
        if (event.code == 'KeyD') {
            playerXPosition += 30;
        }
        if (event.code == 'KeyW') {
            playerYVelocity = -30;
        }
        if (event.code == 'KeyS') {
            //playerYPosition += 30;
        }
    }
    document.addEventListener("keypress", inputHandler);

    function drawPlayer(x, y) {
        context.beginPath();
        // Start at 20,20, make a circle with radius 10
        context.arc(x + 40, y + 40, 25, 0, Math.PI * 2);
        context.stroke();
        context.fill();
    }


    function drawFloor(x, y) {
        context.strokeStyle = 'Blue';



        // Draw the back
        context.beginPath();
        // Move to bottom of head
        context.moveTo(x + 400, y + 137);
        // Draw a line twice as tall as the head (40)
        context.lineTo(x + 0, y + 140);
        context.stroke();
    }


    function gameLoop(timestamp) {
        let duration = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        let fps = 1000 / duration; // Calculate FPS

        if (playerYPosition < 200) {
            playerYVelocity += 5;
        } else {
            YVelocity = 0;
            playerYPosition = 200;
        }
        if (playerXPosition < 200) {
            playerYPosition += 530;

        }

        if (playerXPosition > 450) {
            playerYPosition -= 60
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        if (playerYPosition > 529) {

            context.font = "120px Garamond";
            context.fillText("Game Over", 200, 250);
        }

        drawPlayer(playerXPosition, playerYPosition);
        drawFloor(230, 262)
        drawFloor(500, 202)

        if (gameRunning) {
            requestAnimationFrame(gameLoop); // Ask for next frame
        } else {
            document.removeEventListener("keypress", inputHandler);
        }
    }

    requestAnimationFrame(gameLoop); // Ask for first frame
})();
