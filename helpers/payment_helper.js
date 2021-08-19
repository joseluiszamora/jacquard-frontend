
function camelCase(params) {
  console.log(params);
}

function montoRecargaMax(montoActual, montoMax, monto) {
  const maximoMontoRecarga =  montoMax - montoActual;
  if (monto > maximoMontoRecarga) {
    return false;
  }
  return true;
}