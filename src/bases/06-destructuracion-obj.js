

console.log("DESTRUCTURACIÓN DE OBJETOS");

const persona = {
    nombre: 'sebas',
    apodo: 'el pepe',
    direccion: {
        zona: 'zona 1',
        zip: 21321,
        distrito: 'chorrillos'
    }
}



const convertFun = ( { nombre, apodo, direccion } ) => {
    
    return {
        clave: nombre,
        apod: apodo,
        zip: direccion.zip
    }
}

// const nombreCompleto = convertFun(persona);
// console.log(nombreCompleto);

const {clave, apod, zip} = convertFun(persona);
console.log(`${clave} -- ${apod} -- ${zip}`);

