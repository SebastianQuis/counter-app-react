import { saludar } from "../../bases/02-template-string";

describe('Pruebas en 02-template-string', () => { 
    
    test('salidar debe retornar "Hola Sebastian', () => {        
        const name = "Sebastian"
        const mensajeEsperado = saludar( 'Sebastian' ) // Sebas
        expect( mensajeEsperado ).toBe( `Hola ${name}`);
     })

 });
