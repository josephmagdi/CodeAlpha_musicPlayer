const ad = document.querySelector('.song');
const playing = document.querySelector('.fa-play');
const pauses = document.querySelector('.fa-pause');
const forw = document.querySelector('.fa-forward-step');
const ttl = document.querySelector('.title');
const art_img = document.querySelector('#artist');
const art_name = document.querySelector('#name');
const playSong = document.querySelector('#playsong');

const artist_name = ['Alan Walker','Sia', 'Music Travel love', 'Adele'];
const artist_title = ['Faded','Snowman', 'Stand by me', 'Skyfall'];

let x = 0;
let progInterval, lineInterval;

playSong.addEventListener('click', effect);

function effect() {

    if(ad.duration == ad.currentTime) {
        x += 1;
        console.log(x);
    }

    if((!playing.classList.contains('none'))) {
        ad.play();
        setInterval(prog,1000);
        setInterval(line,1000);
        progress.addEventListener('click',(e) => {
            var widthbar2 = (e.offsetX / e.target.clientWidth) * ad.duration;
            ad.currentTime = widthbar2;
        })
    } else {
        ad.pause();
    }

    ttl.classList.toggle('run');
    playing.classList.toggle('none');
    pauses.classList.toggle('none');
    art_img.classList.toggle('round');
    dur();
}

function removeEffect() {
    ad.pause();
    ad.currentTime = 0.01;
    ttl.classList.remove('run');
    playing.classList.remove('none');
    pauses.classList.add('none');
    art_img.classList.remove('round');
}



function backward() {
    dur();
    x -= 1;
    if(x < 0) {
        x = artist_name.length - 1 ; // Wrap around to the last song
    }
    // removeEffect();
    songs(x);
    ad.play();
}

function forward() {
    dur();
    x += 1;
    if (x >= artist_name.length) {
        x = 0; // Wrap around to the first song
    }
    // removeEffect();
    songs(x);
    ad.play();
}

function songs(x){

    art_name.innerHTML = artist_name[x];
    ttl.innerHTML = artist_title[x];
    art_img.src = `./assets/images/ar${x}.jpg`;
    ad.src = `./assets/audios/s${x}.mp3`;

}

songs(0);

const lines  = document.querySelector('.lineChild');
const progress = document.querySelector('.line');
const strt = document.querySelector('#start');
const end = document.querySelector('#end');

function dur(){
    var dura = ad.duration;
    var secdu = Math.floor(dura % 60);
    var mindu = Math.floor(dura / 60);
    if(secdu < 10){
        secdu = `0${secdu}`;
    }
    end.innerHTML = `${mindu}:${secdu}`;
}

function prog() {
    var curtime = ad.currentTime;
    var mincur = Math.floor(curtime/60);
    var seccur = Math.floor(curtime%60);

    if(seccur < 10){
        seccur = `0${seccur}`;
    }

    strt.innerHTML = `${mincur}:${seccur}`;
}

function line(){
    var widthbar = (ad.currentTime/ad.duration)*100;
    lines.style.width = `${widthbar}%`;
}