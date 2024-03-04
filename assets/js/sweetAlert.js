// Mensaje de alerta base para el Crytonaut
function SetMensaje(tipo, encabezadoMensaje, mensaje){
    Swal.fire({
        icon: tipo,
        titleText: encabezadoMensaje,
        text: mensaje,
        timer: 3000,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
        }
    });
}