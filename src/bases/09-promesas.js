import { getHeroeById } from "./bases/08-import-export";



console.log('PROMESAS');


// const miPromesa = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         //   resolve("Medio segundo después!!");
//         const heroe = getHeroeById(6);
//         if (heroe) {
//             resolve(heroe);
//         } else {
//             reject('No se halló el heroe');
//         }
//     }, 500);

// });
  

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            //   resolve("Medio segundo después!!");
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se halló el heroe');
            }
        }, 500);
    
    });
    
}

getHeroeByIdAsync(3)
    .then( data => console.log(data)) // console.log // manera mas corta de hacer
    .catch( err => console.warn(err) ); // console.warn // manera mas corta de hacer






