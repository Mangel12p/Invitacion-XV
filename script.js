
 // ========================================
 // INVITACIÓN XV AÑOS DE ALEJANDRA
 // ========================================

 // ABRIR INVITACIÓN
 function entrar() {
     const portada = document.getElementById("inicio");
     const invitacion = document.getElementById("invitacion");
     const musica = document.getElementById("musica");

     if (!portada || !invitacion) {
         alert("No se encontraron las secciones de la invitación.");
         return;
     }

     // Mostrar la invitación y ocultar la portada.
     invitacion.classList.remove("oculto");
     invitacion.style.display = "block";
     portada.classList.add("portada-cerrada");

     // Reproducir música al pulsar el corazón.
     if (musica) {
         musica.play().catch(() => {
             console.info("El navegador no pudo reproducir la música.");
         });
     }

     window.setTimeout(() => {
         invitacion.scrollIntoView({
             behavior: "smooth",
             block: "start"
         });
     }, 150);
 }

 // CUENTA REGRESIVA
 // 14 de noviembre de 2026 a las 7:00 p. m.
 const fechaEvento = new Date(2026, 10, 14, 19, 0, 0).getTime();

 function actualizarContador() {
     const dias = document.getElementById("dias");
     const horas = document.getElementById("horas");
     const minutos = document.getElementById("minutos");
     const segundos = document.getElementById("segundos");
     const mensaje = document.getElementById("mensaje-contador");

     if (!dias || !horas || !minutos || !segundos) {
         return;
     }

     const diferencia = fechaEvento - Date.now();

     if (diferencia <= 0) {
         dias.textContent = "00";
         horas.textContent = "00";
         minutos.textContent = "00";
         segundos.textContent = "00";

         if (mensaje) {
             mensaje.textContent =
                 "¡Hoy celebramos este momento tan especial!";
         }

         return;
     }

     const total = Math.floor(diferencia / 1000);

     dias.textContent = String(
         Math.floor(total / 86400)
     ).padStart(2, "0");

     horas.textContent = String(
         Math.floor((total % 86400) / 3600)
     ).padStart(2, "0");

     minutos.textContent = String(
         Math.floor((total % 3600) / 60)
     ).padStart(2, "0");

     segundos.textContent = String(
         total % 60
     ).padStart(2, "0");
 }

 actualizarContador();
 setInterval(actualizarContador, 1000);

 // CONFIRMAR ASISTENCIA POR WHATSAPP
 function confirmarAsistencia() {
     // Verifica que este sea el número correcto.
     const telefono = "529615480094";

     const mensaje =
         "¡Hola! 💗✨ Me comunico para confirmar mi asistencia " +
         "a los XV años de Alejandra, este 14 de noviembre de 2026. " +
         "Muchas gracias por la invitación. 👑🌸 " +
         "¡Nos vemos para celebrar esta noche tan especial!";

     const url =
         `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

     window.open(url, "_blank", "noopener,noreferrer");
 }

 // ANIMACIONES AL DESPLAZARSE
 document.addEventListener("DOMContentLoaded", () => {
     const secciones = document.querySelectorAll(
         ".hero, .foto-seccion, .cuenta, .ceremonia, " +
         ".recepcion, .dresscode, .confirmacion, .final"
     );

     if (!("IntersectionObserver" in window)) {
         secciones.forEach((seccion) => {
             seccion.classList.add("visible");
         });
         return;
     }

     const observador = new IntersectionObserver(
         (entradas, observer) => {
             entradas.forEach((entrada) => {
                 if (entrada.isIntersecting) {
                     entrada.target.classList.add("visible");
                     observer.unobserve(entrada.target);
                 }
             });
         },
         { threshold: 0.12 }
     );

     secciones.forEach((seccion) => {
         seccion.classList.add("revelar");
         observador.observe(seccion);
     });
 });

