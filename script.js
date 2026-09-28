const keys = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");

function playSounds(e) {
    e.key.toUpperCase().charCodeAt();
    console.log(e.key.toUpperCase().charCodeAt());
     const sound = document.querySelector(`audio[data-key="${e.key.toUpperCase().charCodeAt()}"]`);
     sound.play()

}

document.addEventListener("keydown", playSounds)
