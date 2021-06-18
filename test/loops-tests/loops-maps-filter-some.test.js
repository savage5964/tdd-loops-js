let personas = [];
let ok;
describe('Pruebas para filtrar, ordenar y buscar dentro de un arreglo', () => {
  beforeEach(() => {
    personas = [
      { nombre: 'Mario' },
      { nombre: 'Carlos' },
      { nombre: 'Alfredo' },
      { nombre: 'Rick' },
      { nombre: 'Erick' },
      { nombre: 'Carlos' },
      { nombre: 'Rick' },
      { nombre: 'Erick' }
    ];
    ok = false;
  });

// filter() nos genera un nuevo arreglo a partir de la condición que se especifique
  it('Prueba con filter', () => {
    const carloses = personas.filter(p => p.nombre === 'Carlos'); // (sic)
    if (carloses.length > 0) ok = true;
    expect(ok).toBe(true);

    // console.log(
    //     '*** Mostrando el resultado del filter de personas llamadas Carlos ***',
    //     { carloses }
    // );

  });

// .map() nos ayuda a transformar nuestra salida
  test('Prueba usando map, para transformar un arreglo dado', () => {
    const nuevasPersonas = personas.map(v => {
      return { nombre: 'Aurelio' };
    });
    if (nuevasPersonas.length > 0) ok = true;

    expect(ok).toBe(true);

    // console.log(
    //     '*** Mostrando los resultados con personas.map() ***',
    //     { nuevasPersonas }
    // );
  });

// .some() nos regresa un true en caso de que exista alguna coincidencia
  test('Prueba usando .some() para saber si existe algun elemento en el arreglo', () => {
    const ericks = personas.some(p => p.nombre === 'Erick');

    ok = ericks;

    expect(ok).toBe(true);

    // console.log(
    //     '*** Mostrando true ya que si existen personas que se llamen Erick ***',
    //     { ericks }
    // );


  });

  test('Prueba usando .some() para saber si algun elemento no existe en el arreglo', () => {
    const noArmandos = personas.some(p => p.nombre === 'Armando');

    ok = noArmandos;

    expect(ok).toBe(false);

    // console.log(
    //     '*** Mostrando false ya que no existen personas que se llamen Armando ***',
    //     { noArmandos }
    // );

  });

// .every() regresa un true en solo cuando se cumpla la condición para todos los elementos del array
  test('Prueba con .every(), hace que la condicion se tiene que cumplir para todos los elementos del array', () => {
    const sonCadenas = personas.every(p => typeof p.nombre === 'string');

    ok = sonCadenas;

    expect(ok).toBe(sonCadenas);

    // console.log(
    //     '*** Mostrando true ya que todo los nombres de las personas son strings ***',
    //     { sonCadenas }
    // );

  });

// .reduce() en este caso usamos reduce para regresar el numero de coincidencias dentro del arreglo
  it('Prueba con .reduce() para regresar el numero de coincidencia de Rick dentro del arreglo personas', () => {
    const cuantosRicks = personas.reduce((acumuladoRicks, personaActual) => {
      return acumuladoRicks + (personaActual.nombre === 'Rick' ? 1 : 0); // suma uno en caso de que el nombre sea Rick
    }, 0);

    expect(cuantosRicks).toBe(2); // cantidad de elementos con nombre Rick en el arreglo

    // console.log(
    //     '*** Mostrando la cantidad de Ricks en el arreglo',
    //     { cuantosRicks }
    // );
  });

// .sorted() nos regresa el arreglo ordenado de acuerdo a la condición, en nuestro caso si es < será ascendente
// en caso de ser > el ordenamiento será descendente
  it('Prueba usando .sort() que hace el ordenamiento de acuerdo a la propiedad nombre del arreglo', () => {
    const arregloPersonasAsc = personas.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1; // 1 desc, -1 asc
      } else if (a.nombre > b.nombre) {
        return 1;
      } else {
        return 0;
      }
    });

    expect(arregloPersonasAsc[0].nombre).toBe('Alfredo');

    // console.log(
    //     '*** Mostrando el arreglo ordenado de forma ascendente ***',
    //     { arregloPersonasAsc }
    // );
  });
});

