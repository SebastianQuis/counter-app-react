import { render } from "@testing-library/react"
import { HtmlApp } from "../HtmlApp";


describe('Pruebas en <HTMLAPP/>', () => { 
     const nombre = "Name";
     const apodo = "Apodo";
     const edad = 2;


     // PARA COMPONENTES ESTÁTICOS  
     test('debe de hacer match con el snapshot', () => { 
          const {container} = render( <HtmlApp nombre={nombre} apodo={ apodo } edad={edad}/> );
          console.log(`CONTAINER:  ${container}`);
          expect( container ).toMatchSnapshot(); // la data 
     });

     test('debe de mostrar el titulo en h2', () => { 
          const { container, getByText, getByTestId } = render( <HtmlApp nombre={nombre} apodo={ apodo } edad={edad}/> );
          // expect( getByText( nombre ) ).toBeTruthy();

          // const h2 = container.querySelector('h2');
          // console.log(`H2 HTML: ${h2.innerHTML}`);
          // expect(h2.innerHTML).toContain(nombre);

          expect( getByTestId('test-title').innerHTML ).toContain(nombre); 
          // expect( getByTestId('test-title') ).toBeTruthy(); 
     });


     test('debe de mostrar el apodo', () => { 
          const { getAllByText } = render( 
               <HtmlApp 
                    apodo={apodo} 
                    nombre={nombre} 
                    edad={edad} 
               /> 
          )
     
          expect( getAllByText(apodo).length ).toBe(2);
      });

})


