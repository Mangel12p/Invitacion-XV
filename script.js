// ================================
// ENTRAR A LA INVITACIÓN
// ================================

function entrar() {

    const portada = document.getElementById("inicio");
    const invitacion = document.getElementById("invitacion");
    const musica = document.getElementById("musica");

    portada.style.display = "none";

    invitacion.classList.remove("oculto");

    // Intentar reproducir la música
    musica.play().catch(() => {
        console.log("El navegador bloqueó el audio.");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================================
// CUENTA REGRESIVA
// ================================

// 14 de noviembre de 2026
const fechaEvento = new Date(
    "November 14, 2026 21:00:00"
).getTime();


function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;


    // Si ya llegó la fecha
    if (diferencia <= 0) {

        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";

        return;
    }


    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    document.getElementById("dias").innerHTML =
        String(dias).padStart(2, "0");

    document.getElementById("horas").innerHTML =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").innerHTML =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").innerHTML =
        String(segundos).padStart(2, "0");
}


// Iniciar contador
actualizarContador();

setInterval(actualizarContador, 1000);


// ================================
// CONFIRMAR ASISTENCIA
// ================================

function confirmarAsistencia() {

    // AQUÍ DESPUÉS PONDREMOS
    // EL NÚMERO DE WHATSAPP.

    const telefono = "5210000000000";

    const mensaje =
        "Hola, confirmo mi asistencia a los XV años de Alejandra.";

    const url =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank");
}
