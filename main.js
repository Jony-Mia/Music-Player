let progress=document.getElementById('progres');
let front=document.getElementById('front');
let back=document.getElementById('back');
let round=document.querySelector('.img');
let act=document.getElementById('action');
let music= new Audio('/file/suzume.mp3');
let forward = 10
let rewind = 10
act.addEventListener('click',()=>{
  if (act.classList.contains('fa-play')) {
    act.classList.remove('fa-play');
    act.classList.add('fa-pause');
    music.play();
    round.classList.add('active');
  } else {
    act.classList.remove('fa-pause');
    act.classList.add('fa-play');
    music.pause();
    round.classList.remove('active');
  }
})
music.onloadedmetadata=()=>{
    progress.max = music.duration;
    progress.value = music.currentTime;
}

if (music.play()) {
  setInterval(()=>{
        progress.value = music.currentTime;
  },1000)
}
progress.onchange=()=>{
  music.currentTime=progress.value
}
back.addEventListener('click',()=>{
  music.currentTime-=rewind 
})
front.addEventListener('click',()=>{
  music.currentTime+=forward 
})
