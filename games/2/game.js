// Author: Elliot
(function () {

    let namespace = document.getElementById("namespace");

    namespace.innerHTML = "Hello World";

    var lastTimestamp = 0;

    let canvas = document.getElementById("gamecanvas");
    let context = canvas.getContext("2d");

    var playerXPosition = 400;
    var playerYPosition = 200;

    function inputHandler(event) {

        if (event.code == 'KeyA') {
            playerXPosition -= 15;
        }
        if (event.code == 'KeyD') {
            playerXPosition += 15;
        }
        if (event.code == 'KeyW') {
            playerYPosition -= 15;
        }
        if (event.code == 'KeyS') {
            playerYPosition += 15;
        }

    }
    document.addEventListener("keypress", inputHandler);

    function drawPlayer(x, y) {



        // Draw the head
        context.beginPath()
        // Start at 20,20, make a circle with radius 10
        context.arc(x + 20, y + 20, 10, 0, Math.PI * 2);
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
        // Move to (house) left hand, below and to the left of the top of the neck
        context.moveTo(x + 5, y + 50);
        // Line to shoulder, then right hand
        context.lineTo(x + 20, y + 35);
        context.lineTo(x + 35, y + 50);
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
        //context.beginPath();

        //context.closePath();
        //context.stroke();
        ; drawPlayer(playerXPosition, playerYPosition)
        /// ---- End

        if(gameRunning){
            requestAnimationFrame(gameLoop); // Ask for next frame
        }else{
            document.removeEventListener("keypress",inputHandler);
        }
    }

    requestAnimationFrame(gameLoop); // Ask for first frame

})();
