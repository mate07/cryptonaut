function actualizarReloj() {
    // Obtener la fecha y hora actual
    const fecha = new Date();

    // Obtener las horas, minutos y segundos
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    // Formatear la hora y la fecha
    const horaFormateada = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    const fechaFormateada = `${fecha.getDate().toString().padStart(2, "0")}/${(fecha.getMonth() + 1).toString().padStart(2, "0")}/${fecha.getFullYear()}`;

    // Mostrar la hora y la fecha en los elementos `hora` y `fecha`
    document.getElementById("hora").innerHTML = horaFormateada;
    document.getElementById("fecha").innerHTML = fechaFormateada;

    // Actualizar el reloj cada segundo
    setTimeout(actualizarReloj, 1000);
}
  
// Iniciar el reloj
actualizarReloj();  