let entradaTexto = document.querySelector(".entrada-texto");
let salidaTexto = document.querySelector(".salida-texto");
let seccionIndicador1 = document.querySelector(".indicador1");
let seccionIndicador2 = document.querySelector(".indicador2");
let btnCopiar = document.querySelector(".copiar");

function validar(textoValidar){
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    let conteo = 0;

    for(let posicion = 0; posicion < textoValidar.length; posicion++){
        for(let letra = 0; letra < letras.length;letra++){
            if(textoValidar.charAt(posicion) == letras[letra]){
                conteo++;
            }
        }
    }
    if(conteo == 0){
        return true;
    }
    return false;
}

function encriptar() {
    let texto = entradaTexto.value;
    let salida = "";
    if(!validar(texto)){
        alert("Texto invalido, verifique su texto.")
        return;
    }
    for(let posicion = 0; posicion < texto.length; posicion++){
        if(texto.charAt(posicion) == "a"){
            salida = salida + "ai";
        }
        else if(texto.charAt(posicion) == "e"){
            salida = salida + "enter";
        }
        else if(texto.charAt(posicion) == "i"){
            salida = salida + "imes";
        }
        else if(texto.charAt(posicion) == "o"){
            salida = salida + "ober";
        }
        else if(texto.charAt(posicion) == "u"){
            salida = salida + "ufat";
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function desencriptar() {
    let texto = entradaTexto.value;
    let salida = "";
    if(!validar(texto)){
        alert("Texto invalido, verifique su texto.")
        return;
    }
    for(let posicion = 0; posicion < texto.length; posicion++){
        if(texto.charAt(posicion) == "a" && texto.charAt(posicion + 1) == "i"){
            salida = salida + "a";
            posicion = posicion + 1;
        }
        else if(texto.charAt(posicion) == "e" && texto.charAt(posicion + 1) == "n" && texto.charAt(posicion + 2) == "t" && texto.charAt(posicion + 3) == "e" && texto.charAt(posicion + 4) == "r"){
            salida = salida + "e";
            posicion = posicion + 4;
        }
        else if(texto.charAt(posicion) == "i" && texto.charAt(posicion + 1) == "m" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "s"){
            salida = salida + "i";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "o" && texto.charAt(posicion + 1) == "b" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "r"){
            salida = salida + "o";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "u" && texto.charAt(posicion + 1) == "f" && texto.charAt(posicion + 2) == "a" && texto.charAt(posicion + 3) == "t"){
            salida = salida + "u";
            posicion = posicion + 3;
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function ocultar(){
    salidaTexto.style.background = "white";
    seccionIndicador1.style.display = "none";
    seccionIndicador2.style.display = "none";
    btnCopiar.style.display = "";
}

function mostrar(){
    salidaTexto.style.background = "#FFF";
    seccionIndicador1.style.display = "";
    seccionIndicador2.style.display = "";
    btnCopiar.style.display = "none";
}

function copiar(){
    let copia =salidaTexto.value;
    navigator.clipboard.writeText(copia);

    SetMensaje("success", "¡Texto copiado!", "El texto se ha copiado al portapapeles.");

    setTimeout(() => {
        mostrar();
    }, 950);
}