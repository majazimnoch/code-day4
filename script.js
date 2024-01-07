const audio = new Audio();
let imageVisible = false;

document.getElementById("btn").addEventListener("click", function() {
    audio.src = "./bird.mp3";
    audio.play();

    // toggle between changing image to color
    if (imageVisible) {
        document.body.style.backgroundImage = "none";
    } else {
        document.body.style.backgroundImage = "url('nature.jpg')"
    }
    imageVisible = !imageVisible;
});