var gameRunning=false;

function loadGame(gameName) {
    // Determine the path to the game.js file based on your 
    gameRunning = true;

    const gamePath = `games/${gameName}/game.js`; // Adjust if you're using a suffix instead

    // Remove any existing game script tag
    const oldScriptTag = document.querySelector('script#gameScript');
    if (oldScriptTag) {
        oldScriptTag.remove();
    }

    // Create a new script tag for the selected game
    const scriptTag = document.createElement('script');
    scriptTag.id = 'gameScript';
    scriptTag.src = gamePath;
    document.body.appendChild(scriptTag);

    // Show the modal
    document.getElementById('gameModal').style.display = '';
}

function closeModal(event) {
    if(event.target.classList.contains('closeTarget')){

        gameRunning = false;
        document.getElementById('gameModal').style.display = 'none';
    }else{
        console.log("Clicked on non-closing target: "+event.target.classList );
    }
    event.stopPropagation();

}
