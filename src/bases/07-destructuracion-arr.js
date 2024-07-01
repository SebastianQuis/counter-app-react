

console.log('DESTRUCTURACION DE ARREGLOS');

export const getUser = ( name, age ) => {
    return {
        name: name,
        age: age,
        latlng: {
            lat: 123,
            lng: 123
        }
    }
    // return [valor, () => {console.log('Hola mundo');}]
}


export const getArr = () => ['ABC',123];

// const [setNombre] = myUseState('Goku')
// console.log(setNombre);


