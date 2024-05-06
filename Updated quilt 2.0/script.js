document.addEventListener("click", function() {
    document.body.style.transition = "opacity 1s ease"; 
    document.body.style.opacity = "0"; 

    var audio = new Audio("magic-wand-6214.mp3"); 
    audio.play();

setTimeout(function() {
    window.location.href = "floating-words-page.html";
}, 2050);
});