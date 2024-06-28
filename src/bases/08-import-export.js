
// import {heroes} from './data/heroes';
// import heroes from './data/heroes' // export a un objeto sin nombre

import { heroes } from "../data/heroes";


// console.log('IMPORT - EXPORT');

// TODO - obtener heroe por id, fin solo regresa 1 valor
export const getHeroeById = (id) => {    
    const heroe = heroes.find( (heroe) => heroe.id === id );
    return heroe;
    
    // const miHeroe = heroes.filter( heroe => {
    //     if (heroe.id === id) {
    //         // getHeroe = `el heroe es: ${heroe.name}`;
    //         return heroe;
    //     }  
    // });

    // return miHeroe[0];
}

// console.log(getHeroeById(2) ?? false);


// TODO - obtener conjunto de heroes por nombre de OWNER
const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner("DC"));


// const heroe = heroes.map( heroe => {
//     console.log(`nombre: ${heroe.name}`);
//     return heroe;
// });




