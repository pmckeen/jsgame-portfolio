// Author: Mr. McKeen

(function () {
    let namespace = document.getElementById("namespace");

    namespace.innerHTML = "Author: Mr. McKeen<br><code>A</code> and <code>D</code> move Left and Right. <code>W</code> and <code>D</code> move Up and Down.";
    
    var lastTimestamp = 0;
    
    let canvas = document.getElementById("gamecanvas");
    let context = canvas.getContext("2d");
    
    var playerXPosition = 400;
    var playerYPosition = 200;
    
    const inputHandler = function (event) {
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
    };
    document.addEventListener("keypress", inputHandler);
    
    function drawPlayer(x,y){
        // Draw Head
        context.beginPath();
        context.arc(x,y-90,10,0,Math.PI*2);
        context.stroke();
        
        // Draw ____
        context.beginPath();
        context.moveTo(x-20,y-60);
        context.lineTo(x,y-70);
        context.lineTo(x+20,y-60);
        context.stroke();
        
        // Draw ____
        context.beginPath();
        context.moveTo(x-20,y);
        context.lineTo(x,y-30);
        context.lineTo(x+20,y);
        context.stroke();
        
        // Draw ____
        context.beginPath();
        // ...
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
        
        // REPLACE THIS:
        //drawPlayer(300,300);
        // WITH THIS:
        drawPlayer(playerXPosition,playerYPosition);
    
        /// ---- End
    
        if(gameRunning){
            requestAnimationFrame(gameLoop); // Ask for next frame
        }else{
            document.removeEventListener("keypress",inputHandler);
        }
    }
    requestAnimationFrame(gameLoop); // Ask for first frame

}());