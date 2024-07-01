import { getHeroeById, getHeroesByOwner } from "../../bases/08-import-export";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

       test('funcion getHeroeId debería arrojar: un object', () => { 
              const {name} = getHeroeById(1);
              
              // expect(typeof data).toEqual( 'string' );
              expect(name).toBe( 'Batman' );
       })
       
       test('funcion getHeroeId con id erroneo: undefined', () => {    
              const heroe = getHeroeById(100);
              // console.log(`typeof: ${typeof heroe}`); 
              
              expect(typeof heroe).toBe( 'undefined' );
       })
       
       
       test('funcion getHeroesByOwner con owner reconocido', () => { 
              const owner = 'DC';

              const heroe = getHeroesByOwner(owner);
              console.log(`Length: ${  heroe.length }`);

              // expect(typeof heroe).to( 'object' );
              expect(heroe.length).toBe(3);
              expect(typeof heroe.length).toEqual('number');

              expect( heroe ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );
       })

})

