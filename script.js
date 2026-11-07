const boton = document.getElementById("botonAudio");
const audio = document.getElementById("audio");

boton.addEventListener("click", function() {

    if (audio.paused) {

        audio.play();
        boton.textContent = "Pausar";

    } else {

        audio.pause();
        boton.textContent = "Escuchar";

    }

});

audio.addEventListener("ended", function() {
    boton.textContent = "Escuchar";
});
