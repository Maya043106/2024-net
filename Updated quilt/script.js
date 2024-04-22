document.addEventListener("click", function() {
    // Fade out the page
    document.body.style.transition = "opacity 1s ease"; 
    document.body.style.opacity = "0"; 

    // Play magical music
    var audio = new Audio("magic-wand-6214.mp3"); // Assuming the file is in the same directory as your HTML file
    audio.play();
});

