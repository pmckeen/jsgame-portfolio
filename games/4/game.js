// Author: Daniel

(function () {
    let namespace = document.getElementById("namespace");

    namespace.innerHTML = "Author: D. R.<br><code>A</code> and <code>D</code> move Left and Right. <code>W</code> Jumps.";
    
    var lastTimestamp = 0;
    
    let canvas = document.getElementById("gamecanvas");
    let context = canvas.getContext("2d");
    
    var PlayerXPosition = 400;
    var PlayerYPosition = 200;
    var PlayerYVelocity = 400;
    
    document.addEventListener("keypress", function(event) {
        //namespace.innerHTML += ` $(event.code)`;
        if(event.code == 'KeyA'){
            PlayerXPosition -= 60;
        }
        if(event.code == 'KeyD'){
            PlayerXPosition += 60;
        }
        if(event.code == 'KeyW'){
            PlayerYVelocity = -60
        }
        if(event.code == 'KeyS'){
            PlayerYPosition += 60;
        }
    });
    
    
    
        function drawPlayer(x,y){
    
    
     // Draw the head
     context.beginPath()
     // Start at 20,20, make a circle with radius 10
     context.arc(x+20,y+20, 10, 0, Math.PI * 2);
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
        
        PlayerYPosition += PlayerYVelocity;
        
        if(PlayerYPosition < 200){
            PlayerYVelocity += 10;
            }else{
                PlayerYVelocity = 0
                PlayerYPosition = 200
            }
    
        let duration = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        let fps = 1000 / duration; // Calculate FPS
    
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "30px Arial";
        context.fillText("i am the stick man game hacker. you have been hacked loser: " + Math.round(fps), 50, 50); // Show FPS on screen
    
        /// ---- Add More Code Here
    
        drawPlayer(PlayerXPosition, PlayerYPosition);
    
        requestAnimationFrame(gameLoop); // Ask for next frame    
        
        /// ---- End   
        //if (lastTimestamp > 0) // Game Stop Criteria
        //    return;
    }
    
    requestAnimationFrame(gameLoop); // Ask for first frame
    

}());