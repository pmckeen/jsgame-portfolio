// Author: Simeon

(function() {
    let namespace = document.getElementById("namespace");

    namespace.innerHTML = "Author: S. A.<br><code>A</code> and <code>D</code> move Left and Right. <code>W</code> Jumps.";

    var lastTimestamp = 0;

    let canvas = document.getElementById("gamecanvas");
    let context = canvas.getContext("2d");

    var playerXPosition = 400;
    var playerYPosition = 200;
    var playerYVelocity = 0;

    function inputHandler(event) {
        if(event.code == 'KeyA'){
            playerXPosition -= 30;
        }
        if(event.code == 'KeyD'){
            playerXPosition += 30;
        }
        if(event.code == 'KeyW'){
            playerYVelocity = -30;
        }
        if(event.code == 'KeyS'){
            //playerYPosition += 30;
        }
    }
    document.addEventListener("keypress", inputHandler );

    function drawPlayer(x, y){
        context.beginPath();
        // Start at 20,20, make a circle with radius 10
        context.arc(x+40, y+40, 25, 0, Math.PI * 2);
        context.stroke();
        context.fill();
    }

    function gameLoop(timestamp) {
        let duration = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        let fps = 1000 / duration; // Calculate FPS

        playerYPosition += playerYVelocity;
        if(playerYPosition < 200){
            playerYVelocity += 5;
        }else{
            playerYVelocity = 0; // Fixed typo from `YVelocity` to `playerYVelocity`
            playerYPosition = 200;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "30px Arial";
        context.fillText("Monkeys: " + Math.round(fps), 50, 50); // Show FPS on screen

        drawPlayer(playerXPosition, playerYPosition);
        if(gameRunning){
            requestAnimationFrame(gameLoop); // Ask for next frame
        }else{
            document.removeEventListener("keypress",inputHandler);
        }
    }

    requestAnimationFrame(gameLoop); // Ask for first frame
})();
