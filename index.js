let respuesta = "si";

while (respuesta == "si" || respuesta == "sí") {

function persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.setName = function (newName) {
        this.nombre = newName;
    }
}
const nombre = prompt("Bienvenido! ¿Cuál es tu nombre?: ");
const apellido = prompt("¿Cuál es tu apellido?: ");
const edad = prompt("ingrese su edad.")
const persona1 = new persona (nombre, apellido, edad);

console.log(persona1);

for (key in persona1) {
    console.log(persona1[key]);
}
let plata = prompt("¿Cuánto dinero solicitas?: ");

const monto = ((plata <= 0) && (plata >1000000));

if (plata <= 0){
    alert("El monto debe ser un número mayor a 0.");
    break;
    
} else if (plata >1000000) {
    alert("Tu monto no puede superar los $1000000.");
    break;
} 


const cuota = [6, 12, 18, 24];
const cantidad = parseInt(alert("Le comentamos que por el momento hacemos creditos en 6, 12 , 18 y 24 cuotas, a continuacion le mostramos como queda su credito en esos plazos"));

function porCadaElemento(arr, accion) {
    for (let i = 0; i < arr.length; i++) {
        accion(arr[i])
    }
}

const resultado =[];

cuota.forEach((el) => resultado.push((plata*1.28)/el));


    alert(nombre + " " + apellido + " le comentamos que el resultado de su prestamo serian " + resultado + " al mes.");

  
    respuesta = prompt("¿Quieres calcular otra vez? (si/no)");
} 



