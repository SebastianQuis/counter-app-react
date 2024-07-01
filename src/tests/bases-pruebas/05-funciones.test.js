import { getUser, getUser2 } from "../../bases/05-funciones";


describe('Pruebas en 05-funciones.js', () => { 

    test('funcion getUser debería arrojar:  getUser', () => { 
       // inicializacion
        const uid = 'abc123';
        const nombre = 'getUser';

        const msj = {
            uid: uid,
            username: nombre,
        };

        // ESTÍMULO
        const msjEsperado = getUser();
        console.log(`msj: ${JSON.stringify(msjEsperado)}`);
       
       // observacion comportamiento
       // los objetos, apuntan a una memoria y se basan de ahi,
       // para ello se debe usar toEqual
       // TODO - TODO EQUAL PORQUE SE TRATA DE COMPARAR OBJETOS
       expect( msj ).toEqual( msjEsperado ); 
   })


    test('should userActive', () => { 
        const msj2 = {
            uid: 'ABC123',
            username: 'Sebas'
        }

        const getUserActive = getUser2('Sebas');

        expect(msj2).toEqual(getUserActive);
     })


})
