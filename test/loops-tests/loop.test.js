let startTime;
describe('Pruebas para medir el performance de los diferentes loops', () => {
  beforeEach(() => {
    const mil = 1000000;
    const arr = Array(mil);
    startTime = Date.now();
  });

  test('Prueba con el for i', () => {
    const endTime = Date.now();
    const diferencia = endTime - startTime;
    // console.log({ diferencia });
    const resultado = diferencia < 10 ? 'Buen Rendimiento' : 'Bajo Rendimiento';
    // console.log({ resultado });
    expect(resultado).toBe('Buen Rendimiento');
  });
});
// for i
// for (let i = 0; i < mil; i++) {
//   // console.log(i);
// }

// for of
// for (let arrElement of arr) {
// }

// arr.map(v => v).forEach(val => val);
//
// console.log('Fin:', { tiempoTranscurrido: Date.now() - startTime });
