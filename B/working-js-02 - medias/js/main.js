console.log("App inicialitzada"); //comentari d'una sola línia

var buttonPlay = document.querySelector('.play-btn');
var buttonPause = document.querySelector('.pause-btn');
var audio = document.querySelector('audio');

var videoAnimals = document.querySelector('.video-animals');
var areaInteractiva = document.querySelector('.areaInteractiva');

let audios= [
    "medias/can.mp3",
    "medias/bump.mp3",
    "medias/crickets.mp3",
    "medias/groove.mp3",
]

buttonPlay.addEventListener('click', function() {
    let numeroAleatori = Math.floor(Math.random() * 4); 
    audio.src = audios[numeroAleatori];
    audio.play(); // reprodueix l'audio
});

buttonPause.addEventListener('click', function() {
    audio.pause(); // pausa l'audio
});

areaInteractiva.addEventListener('mouseenter', function() {
    videoAnimals.style.opacity = 1;
});

areaInteractiva.addEventListener('mouseleave', function() {
    videoAnimals.style.opacity = 0;
});

document.addEventListener('keydown', function(event) {
    console.log("tecla premuda:", event);
    if(event.key === " ") {
        videoAnimals.style.opacity = 1;
    }
});