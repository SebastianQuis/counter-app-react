import { render } from "@testing-library/react"
import { HtmlApp } from "../HtmlApp";


describe('Pruebas en <HTMLAPP/>', () => { 

     test('debe de hacer match con el snapshot', () => { 
          
          const nombre = "Name";
          const apodo = "Apodo";
          const edad = 2;

          // render - actualiza el objeto screenw
          // render - retorna un objeto con ciertas propiedades
          const {container} = render( <HtmlApp nombre={nombre} apodo={ apodo } edad={edad}/> );
          
          // container - para tomar una fotografia, viene del objeto de render.
          expect( container ).toMatchSnapshot();
     });

     test('debe de mostrar el titulo en h2', () => { 
          const nombre = "Name";
          const apodo = "Apodo";
          const edad = 2;

          const { container, getByText } = render( <HtmlApp nombre={nombre} apodo={ apodo } edad={edad}/> );
          expect( getByText( nombre ) ).toBeTruthy();

          const h2 = container.querySelector('h2');
          expect(h2.innerHTML).toContain(nombre);
     });

})


