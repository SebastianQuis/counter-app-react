

console.log('DESTRUCTURACION DE ARREGLOS');

const myUseState = ( valor ) => {
    return [valor, () => {console.log('Hola mundo');}]
}


const [setNombre] = myUseState('Goku')
console.log(setNombre);


