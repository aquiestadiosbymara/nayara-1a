
const boton = document.getElementById("botonAudio");
const audio = document.getElementById("audio");

boton.addEventListener("click", async function () {

    if (audio.paused) {
        try {
            await audio.play();
            boton.textContent = "Pausar";
        } catch (error) {
            alert("Primero tienes que subir tu archivo de meditación.");
        }
    } else {
        audio.pause();
        boton.textContent = "Escuchar";
    }

});

audio.addEventListener("ended", function () {
    boton.textContent = "Escuchar";
});
