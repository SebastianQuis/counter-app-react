import { getHeroeByIdAsync } from "../../bases/09-promesas";
// import { getHeroeById } from "./bases/08-import-export";


describe('Pruebas en 09-promesas', () => { 

       test('funcion getHeroeById debería arrojar: Batman', (done) => { 
            const id = 1;
            getHeroeByIdAsync(id)
                .then( heroe => {
                    // expect(typeof heroe).toBe('object');
                    expect(heroe.name).toBe('Batman');
                    done();
                });
       });
       
       test('funcion getHeroeById debería arrojar: Heroe no found', (done) => { 
            const id = 34;
            getHeroeByIdAsync(id)
                .catch(err => {
                    // console.log(err);
                    expect(err).toBe('Heroe no found');
                    done();
                });
       });

})
