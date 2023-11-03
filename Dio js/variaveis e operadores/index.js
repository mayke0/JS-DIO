const precoCombustevel = 5.79;
const mediaPorkm = 12;
const distanciaEmkm = 1500;

const litrosConsumidos = distanciaEmkm / mediaPorkm;
const valorGastos = litrosConsumidos * precoCombustevel;
console.log(valorGastos.toFixed(2));