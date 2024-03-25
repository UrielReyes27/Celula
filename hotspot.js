let audioActivo = null;
let imagenVisible = null;
let visibilityState = { videoVisi: false };

function reproducirAudio(audioElement, imagenElement, state) {
    if (audioActivo && audioActivo !== audioElement) {
        audioActivo.pause();
        audioActivo.currentTime = 0;
    }

    if (imagenVisible && imagenVisible !== imagenElement) {
        imagenVisible.setAttribute('visible', 'false');
    }

    if (state.videoVisi) {
        audioElement.pause();
        audioElement.currentTime = 0;
        imagenElement.setAttribute('visible', 'false');
        state.videoVisi = false;
    } else {
        audioElement.play();
        imagenElement.setAttribute('visible', 'true');
        state.videoVisi = true;
    }

    audioActivo = audioElement;
    imagenVisible = imagenElement;
}

// Repite el mismo patrón para los otros botones de reproducción de audio

const hoto = document.querySelector('#botongolgi');
const audio4 = document.querySelector('#audio2');
const videoElement = document.querySelector('#golg');

hoto.addEventListener('click', function () {
    reproducirAudio(audio4, videoElement, visibilityState);
});

const ho = document.querySelector('#botonvacu');
const audio3 = document.querySelector('#audio3');
const videoElemento = document.querySelector('#vacu');

ho.addEventListener('click', function () {
    reproducirAudio(audio3, videoElemento, visibilityState);
});

const hoti = document.querySelector('#botonplas');
const audio2 = document.querySelector('#audio5');
const ideoElemento = document.querySelector('#plas');

hoti.addEventListener('click', function () {
    reproducirAudio(audio2, ideoElemento, visibilityState);
});

const oti = document.querySelector('#botonmito');
const audio1 = document.querySelector('#audio1');
const deoElemento = document.querySelector('#mito');

oti.addEventListener('click', function () {
    reproducirAudio(audio1, deoElemento, visibilityState);
});


const celula = document.querySelector('#botoncelula');
const audio5 = document.querySelector('#audio4');
const cel = document.querySelector('#celulaa');

celula.addEventListener('click', function () {
  reproducirAudio(audio5, cel, visibilityState);
});