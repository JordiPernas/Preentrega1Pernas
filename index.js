function creditoPersonal() {
    const nombre = prompt("¿Cuál es tu nombre?: ");
    const apellido = prompt("¿Cuál es tu apellido?: ");
    const monto = prompt("¿Cuánto dinero solicitas?: ");
  
    if (monto <= 0) {
      alert("El monto debe ser un número mayor a 0.");
      return;
    }
  
    console.log("Bienvenido al simulador de crédito personal.");
  
    const plazos = [6, 9, 12, 18, 24];
    for (let i = 0; i < plazos.length; i++) {
      console.log(`Elige una opción de plazo: ${i + 1}. ${plazos[i]} cuotas`);
    }
  
    const plazo = prompt("Ingresa la cantidad de cuotas que deseas:  6, 12, 18, 24 ");
  
    if (plazo <= 0) {
      alert("La cantidad de cuotas debe ser un número mayor a 0.");
      return;
    }
  
    const cuota = monto / plazo;
  
    alert(`Solicitud de crédito personal de: ${monto} pesos
  
  A nombre de: ${nombre} ${apellido}
  
  Cuota mensual: ${cuota} pesos
  
  Plazo elegido: ${plazo} cuotas`);
  }
  
  creditoPersonal();