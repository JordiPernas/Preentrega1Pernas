function creditoPersonal() {
    const nombre = prompt("Bienvenido! ¿Cuál es tu nombre?: ");
    const apellido = prompt("¿Cuál es tu apellido?: ");
    const monto = prompt("¿Cuánto dinero solicitas?: ");
  
    if (monto <= 0) {
        alert("El monto debe ser un número mayor a 0.");
        return;
    }

    const plazo = prompt("Ingresa la cantidad de cuotas que deseas: 6, 12, 18 o 24");

    if (plazo <= 0) {
        alert("La cantidad de cuotas debe ser un número mayor a 0.");
        return;
    } else if (plazo > 24) {
        alert("La cantidad de cuotas no debe ser mayor a 24.");
        return;
    } if ( (plazo <= 5 ) && ( plazo >= 11 ) && ( plazo <= 17 ) && ( plazo >=23 ) ) {
        alert("La cantidad de cuotas tiene que ser 6, 12, 18 o 24.");
        return;
    }

    const cuota = monto / plazo;

    alert(`Solicitud de crédito personal de: ${monto} pesos
  
  A nombre de: ${nombre} ${apellido}
  
  Cuota mensual: ${cuota} pesos
  
  Plazo elegido: ${plazo} cuotas`);
  }
  creditoPersonal();