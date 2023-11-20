/**
 * @author: Escriba su nombre y apellidos aquí.
 */

/**
 * Comprueba la mayoría de edad
 * @param {int} edad 
 * @returns true | false;
 */

function comprobarEdad(edad) {
    var edad = Number.parseInt(document.getElementById("edad").value);
    console.log('Edad: ' + edad);
    console.log('Mayoría de edad?: ' );
    var txtEdad = "Usted es menor de edad."

    if(edad < 18){
        alert("Usted no tiene edad para conducir");
        return false
    }else{
        alert("Usted ya es mayor de edad; por tanto, ya podría conducir");
        return true

    }


}
function esMayorEdad(edad){

    if(edad < 18){
        return false
    }else{
        return true

    }
}
/**
 * Escribe la calificación asociada a la nota en la página HTML.
 */
function obtenerCalificacion(nota) {
    console.log('Nota: ' + nota);


    var calificacion = "";
    switch (nota) {
        case 0:
            return "Muy deficiente"
            break;
        case 1:
            return "Muy deficiente"
            break;
        case  2:
            return "Muy deficiente"
            break;
        case 3:
            return "Insuficiente"
                break;
        case 4:
            return "Insuficiente"
            break;
        case 5:
            return "Suficiente"
            break;
        case 6:
            return "Bien"
            break;
        case 7:
            return "Notable"
            break;
        case 8:
            return "Notable"
            break;
        case 9:
            return "Sobresaliente"
            break;
        case 10:
            return "Sobresaliente"
            break;
        default:
            return"Incorrecta"
        // code block
    }
    alert('Una nota de ' + nota + ' es ' + calificacion);
    console.log('Una nota de ' + nota + ' es ' + calificacion);
}

module.exports = {
    esMayorEdad,
    obtenerCalificacion ,
    
    comprobarEdad
};