/*
Hola Dani, el window.onload este me ha retrasado el empezar la practica
horas de dolor de cabeza. He buscado por internet de todo y no encontraba una 
solución aparte de poner la llamada al js despues del body. 
Al final me lo comentó un compañero de clase.
*/
window.onload = iniciar;

function iniciar() {
    /*******************************
     ******   EJERCICIO 1    ******
     *******************************/
    function mayus(){
        this.value = this.value.toUpperCase();
    }
    document.getElementById("nombre").addEventListener('blur',mayus,false);
    document.getElementById("apellidos").addEventListener('blur',mayus,false);
    /*******************************
     ******   EJERCICIO 2    ******
     *******************************/
    function vacio(){
        if(this.value.length == 0){
          document.getElementById("errores").innerHTML = "ERROR: "+ this.id.toUpperCase() +" no puede estar vacío";
          document.getElementById(this.id).focus();
        }
        if(this.value.length > 0){
            document.getElementById("errores").innerHTML = "";
        }
    }
    document.getElementById("nombre").addEventListener('blur',vacio,false);
    document.getElementById("apellidos").addEventListener('blur',vacio,false);
    /*******************************
     ******   EJERCICIO 3    ******
     *******************************/

    /*******************************
     ******   EJERCICIO 11    ******
     *******************************/

}
