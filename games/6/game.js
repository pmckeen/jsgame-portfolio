// Author: Alban

(function () {
    let namespace = document.getElementById("namespace");

    namespace.innerHTML = "Author: A. H.<br><code>A</code> and <code>D</code> move Left and Right. <code>W</code> and <code>D</code> move Up and Down.";
    
    var lastTimestamp = 0;
    
    let canvas = document.getElementById("gamecanvas");
    let context = canvas.getContext("2d");
    
    var playerXposition = 400;
    var playerYposition = 200;
    
    document.addEventListener("keypress", function(event){
    if(event.code == 'KeyA'){
        playerXposition -= 19;
    }
    if(event.code == 'KeyD'){
        playerXposition += 19;
    }
    if (event.code == 'KeyW'){
        playerYposition -= 19;
    }
    if(event.code == 'KeyS'){
        playerYposition += 19;
    }
    });
    function drawplayer(x,y){
    // Draw the head
    context.beginPath()
    // Start at 20,20, make a circle with radius 10
    context.arc(x+20,y+20,10,0,Math.PI*2);
    context.stroke();
    context.fill();
    
    // Draw the back
    context.beginPath();
    // Move to bottom of head
    context.moveTo(x+20,y+30);
    // Draw a line twice as tall as the head (40)
    context.lineTo(x+20,y+70);
    context.stroke();
    
    // Draw the arms
    context.beginPath();
    // Move to (house) left hand, below and to the left of the top of the neck
    context.moveTo(x+5,y+50);
    // Line to shoulder, then right hand
    context.lineTo(x+20,y+35);
    context.lineTo(x+35,y+50);
    context.stroke();
    
    // Draw the legs
    context.beginPath();
    // Move to left foot
    context.moveTo(x+5,y+100);
    // Line to bottom of back, then right foot
    context.lineTo(x+20,y+70);
    context.lineTo(x+35,y+100);
    context.stroke();
    
    }
    
    
    function gameLoop(timestamp) {
        
        let duration = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        let fps = 1000 / duration; // Calculate FPS
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "30px Arial";
        context.fillText("you will lose to me this many times: "+Math.round(fps),50,50); // Show FPS on screen
    
        /// ---- Add More Code Here 
        
        drawplayer (playerXposition,playerYposition)
        
        requestAnimationFrame(gameLoop)
        
        /// ---- End
    
        //(lastTimestamp > 0) // Game Stop Criteria
    } 
    
        requestAnimationFrame(gameLoop); // Ask for next frame

}());