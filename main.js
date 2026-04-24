let play = document.getElementById("play");
let back = document.getElementById("back");
let forward = document.getElementById("forward")
let progress = document.getElementById("progress");
let music = new Audio("files/song-item.mpeg")
let disk = document.getElementById("disk");


play.onclick=()=>{
    if (play.classList.contains("fa-play")) {
        music.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        disk.classList.add("rotate");

    } else {
        music.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        disk.classList.remove("rotate");
    }
}

music.onloadedmetadata=()=>{
    progress.max= music.duration;
    progress.value = music.currentTime;
}
if (music.play()) {
    setInterval(()=>{
        progress.value= music.currentTime
    }, 1000);
}
progress.onchange=()=>{
    music.currentTime = progress.value
}

back.onclick=()=>{
    music.currentTime -=10;
    
}
forward.onclick=()=>{
    music.currentTime+= 10;
}