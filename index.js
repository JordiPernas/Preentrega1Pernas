let respuesta = "si";

while (respuesta == "si" || respuesta == "sí") {

let nombre = prompt("Bienvenido! ¿Cuál es tu nombre?: ");
let apellido = prompt("¿Cuál es tu apellido?: ");
let plata = prompt("¿Cuánto dinero solicitas?: ");
const monto = ((plata <= 0) && (plata >1000000));

if (plata <= 0){
    alert("El monto debe ser un número mayor a 0.");
    break;
    
} else if (plata >1000000) {
    alert("Tu monto no puede superar los $1000000.");
    break;
} 


let cuota = parseInt(prompt("Ingresa la cantidad de cuotas que deseas: 6, 12, 18 o 24"));
if (cuota < 0 || cuota > 24) {
    alert("Hacemos créditos con hasta 24 cuotas");
    break;
  } else {
        
    alert("El número de cuotas seleccionado es: " + cuota);
}

function calcularPrestamo(a, b) {
    return((a / b)*1.18);
  }
let resultado = calcularPrestamo (plata, cuota);
    alert(nombre + " " + apellido + " le comentamos que el resultado de su prestamo serian " + resultado + " al mes.");

  
    respuesta = prompt("¿Quieres calcular otra vez? (si/no)");
}
