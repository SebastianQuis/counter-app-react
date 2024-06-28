import { getUser, userActive } from "../../bases/05-funciones";


describe('Pruebas en 05-funciones.js', () => { 

    test('funcion saludar debería arrojar:  getUser', () => { 
       // inicializacion
        const uid = 'abc123';
        const nombre = 'getUser';

        const msj = {
            uid: uid,
            username: nombre,
        }
        ;

        const msjEsperado = getUser();
        console.log(`msj: ${msjEsperado}`);
       // estímulo
       
       // observacion comportamiento
       // los objetos, apuntan a una memoria y se basan de ahi,
       // para ello se debe usar toEqual
       expect( msj ).toEqual( msjEsperado );
   })


    test('should userActive', () => { 
        const msj2 = {
            uid: 'ABC123',
            username: 'Sebas'
        }

        const getUserActive = userActive('Sebas');

        expect(msj2).toEqual(getUserActive);
     })


})
