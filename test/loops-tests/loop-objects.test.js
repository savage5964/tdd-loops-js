let equinos = {};

describe('Pruebas para los for in for of', () => {
  beforeEach(() => {
    equinos = { caballo: 'silver', cebra: 'madagascar', unicornio: 'con hula-hula' };
  });
  it('*** For in de equinos usando equinos[key] ***', () => {
    // console.log('*** For in de equinos usando equinos[key] ***');
// para poder ingresar a las propiedades de un objeto mediante un ciclo se puede hacer
// usando un for in y usando las llaves directamente en el objeto, para obtener su propiedad
    let ok = false;
    for (const equinoKey in equinos) {
      // console.log(equinos[equinoKey]);
      if (equinos[equinoKey]) {
        ok = true;
      }
    }
    expect(ok).toBe(true);
  });

  test('*** For of con Object.values(equinos) ***', () => {
    // console.log('*** For of con Object.values(equinos) ***');
// Otra forma de sacar los valores de un objeto es haciendo uso de un for of, pero haciendo uso
// de la Object.values(equinos)
    let ok = false;
    for (const equino of Object.values(equinos)) {
      if (equino) {
        ok = true;
      }
    }
    expect(ok).toBe(true);
  });

  it(
      '*** For of usando new Map con Object.entries(equinos) y en el for usando la propiedad nuevosEquinos.values() ***',
      () => {
        // console
        //     .log('*** For of usando new Map con Object.entries(equinos) y en el for usando la propiedad nuevosEquinos.values() ***');
// Una forma más de lograr esto es haciendo uso de un new Map y pasando Object.entries(obj)
// para luego llamar a la propiedad values en un for of
        const nuevosEquinos = new Map(
            Object.entries({ caballo: 'silver', cebra: 'madagascar', unicornio: 'con hula-hula' })
        );
        let ok = false;
        for (const nuevoEquino of nuevosEquinos.values()) {
          if (nuevoEquino) {
            ok = true;
          }
          expect(ok).toBe(true);
        }
      }
  );

});


