// Author: Cedar

(function () {

    let namespace = document.getElementById("namespace");

    namespace.innerHTML = "Author: C. D.<br><code>A</code> and <code>D</code> move Left and Right. <code>W</code> and <code>D</code> move Up and Down.";
    
    var lastTimestamp = 0;
    
    let canvas = document.getElementById("gamecanvas");
    let context = canvas.getContext("2d");
    
    var playerXPosition = 400;
    var playerYposition = 200;
    
    document.addEventListener("keypress", function (event) {
        if(event.code == 'KeyA'){
            playerXPosition -= 30;
        }
        if(event.code == 'KeyD'){
            playerXPosition += 30;    
        }
        if(event.code == 'KeyW'){
            playerYposition -= 30;
        }
        if(event.code == 'KeyS'){
            playerYposition += 30;
        }
    });
    
    function drawplayer(x, y) {
        // Draw the head
        context.beginPath()
        // Start at 20,20, make a circle with radius 10
        context.arc(x + 40, y + 40, 20, 0, Math.PI * 2);
        context.stroke();
        context.fill();
    
        // Draw the back
        context.beginPath();
        // Move to bottom of head
        context.moveTo(x + 40, y + 60);
        // Draw a line twice as tall as the head (40)
        context.lineTo(x + 40, y + 140);
        context.stroke();
    
        // Draw the arms
        context.beginPath();
        // Move to (house) left hand, below and to the left of the top of the neck
        context.moveTo(x + 10, y + 100);
        // Line to shoulder, then right hand
        context.lineTo(x + 40, y + 70);
        context.lineTo(x + 70, y + 100);
        context.stroke();
    
        // Draw the legs
        context.beginPath();
        // Move to left foot
        context.moveTo(x + 10, y + 200);
        // Line to bottom of back, then right foot
        context.lineTo(x + 40, y + 140);
        context.lineTo(x + 70, y + 200);
        context.stroke();
    
    
        context.beginPath();
        context.arc(x + 650, 400, 100, 0, Math.PI * 2)
        context.fill();
    }
    function gameLoop(timestamp) {
    
        let duration = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        let fps = 1000 / duration; // Calculate FPS
    
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "30px Arial";
        context.fillText("FPS: " + Math.round(fps), 50, 50); // Show FPS on screen
    
        /// ---- Add More Code Here
    
        drawplayer(playerXPosition, playerYposition);
    
    
        /// ---- End
    
        // if (lastTimestamp > 0) // Game Stop Criteria
        //    return;
    
        requestAnimationFrame(gameLoop); // Ask for next frame
    }
    
    requestAnimationFrame(gameLoop); // Ask for first frame
}());