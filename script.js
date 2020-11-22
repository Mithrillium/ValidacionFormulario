/*
Hola Dani, el window.onload este me ha retrasado el empezar la practica
horas de dolor de cabeza. He buscado por internet de todo y no encontraba una 
solución aparte de poner la llamada al js despues del body. 
Al final me lo comentó un compañero de clase.
*/
window.onload = iniciar;

function iniciar() {
    /*******************************
     ******   EJERCICIO 2    ******
     *******************************/
    function mayus(){
        this.value = this.value.toUpperCase();
    }
    document.getElementById("nombre").addEventListener('blur',mayus,false);
    document.getElementById("apellidos").addEventListener('blur',mayus,false);
    /*******************************
     ******   EJERCICIO 3    ******
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
     ******   EJERCICIO 4    ******
     *******************************/
    /*
        Para las funciones que comprueban EXPRESIONES REGULARES (ejercicios del 4 al 10), 
        lo haría pasando por parámetro la propia expresión regular para 
        ahorrar código (con una funcion bastaría).
        Lo pongo asi para que cada ejercicio se pueda corregir en su apartado.
    */

    function edad(){
        var expresionReg = new RegExp("^[1-9][0-9]?$|^100$|^101$|^102$|^103$|^104$|^105$");
        if(expresionReg.test(this.value)){
            document.getElementById("errores").innerHTML = "";
        }else{
            document.getElementById("errores").innerHTML = "ERROR: "+ this.id.toUpperCase() +" no es correcta.";
            document.getElementById(this.id).focus();
        }
    }

    document.getElementById("edad").addEventListener('blur',edad,false);
    /*******************************
     ******   EJERCICIO 5    ******
     *******************************/
            /*
            EXPRESIÓN REGULAR: ^[0-9]{8}[A-Z]$
                ^ principio de cadena
                [0-9] dígitos del 0 al 9 {8} esas veces exacatemente
                [A-Z] de la a la z en mayúscula, como no se indica nada 1 sola vez
                $ deja la posicion al final de la linea
            */
    function dni(){
        var expresionReg = new RegExp("^[0-9]{8}[A-Z]$");
        if(expresionReg.test(this.value)){
            document.getElementById("errores").innerHTML = "";
        }else{
            document.getElementById("errores").innerHTML = "ERROR: "+ this.id.toUpperCase() +" no es correcto.";
            document.getElementById(this.id).focus();
        }
    }
    document.getElementById("nif").addEventListener('blur',dni,false);
    /*******************************
     ******   EJERCICIO 6    ******
     *******************************/
        /*
        Esta expresión regular está explicada en las diapositivas, no creo que quieras
        que lo copie y ponga aquí una parrafada.
        */
    function correo(){
        var expresionReg = new RegExp("^\\w+([\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");
        if(expresionReg.test(this.value)){
            document.getElementById("errores").innerHTML = "";
        }else{
            document.getElementById("errores").innerHTML = "ERROR: "+ this.id.toUpperCase() +" no es correcto.";
            document.getElementById(this.id).focus();
        }
    }
    document.getElementById("email").addEventListener('blur',correo,false);
    /*******************************
     ******   EJERCICIO 7    ******
     *******************************/
    
    /*******************************
     ******   EJERCICIO 11    ******
     *******************************/
     //un onsubmit que checkee cada valor de los campos 1 a 1 con una variable booleana

}
