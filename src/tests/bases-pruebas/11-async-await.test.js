import { getImage } from "../../bases/11-async-await";

describe('Pruebas en 11-async-await', () => { 

       test('funcion getImage debería arrojar:  String', async () => { 
            
            const img = await getImage();
            // console.log(img);
            expect(typeof img).toBe('string');
       })

})
