import { string } from "prop-types";
import { getArr, getUser } from "../../bases/07-destructuracion-arr";

describe('Pruebas en 07-destructuracion-arr', () => { 

    test('funcion saludar debería arrojar:  nombre-funcion', () => { 
    // INICIALIZACIÓN
        const name  = 'Sebastian';
        const age = 23; 
        
        const dataPrueba = {
            name: name,
            age: age,
            latlng: {
                lat: 1235,
                lng: 123
            }
        };
        console.log(`TIPO DATAPRUEBA: ${typeof dataPrueba}`);

        // estímulo
        // const data = getUser(name, age);
       
        // observacion comportamiento
        expect(typeof dataPrueba).toBe('object');
   });
})


// describe('Pruebas en 07-destructuraccion-arr', () => { 

//     test('funcion getArr debería arrojar: [`ABC`,123]', () => { 
       
//         // inicializacion
//         const [letters, numbers] = getArr();
       
//        // observacion comportamiento
//        expect( typeof letters ).toBe( 'string' );
//        expect( typeof numbers ).toBe( 'number' );
//    })

// })
