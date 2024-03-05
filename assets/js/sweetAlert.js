// Mensaje de alerta base para el Crytonaut
function SetMensaje(tipo, encabezadoMensaje, mensaje){
  Swal.fire({
    icon: tipo,
    titleText: encabezadoMensaje,
    text: mensaje,
    showConfirmButton: false,
    timer: 3000
  });
}