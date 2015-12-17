var audio = document.querySelector('audio');
var volume = document.querySelector('.volume');

audio.controls = false;
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.4;

function Mute() {
    if (audio.muted) {
        audio.muted = false;
        volume.classList.add('sound');
        volume.classList.remove('mute');
    } else {
        audio.muted = true;
        volume.classList.remove('sound');
        volume.classList.add('mute');
    }
}

volume.addEventListener('click', function () {
    Mute();
});
