import { render, screen } from "@testing-library/react"
import { HtmlApp } from "../HtmlApp";


describe('Pruebas en <HTMLAPP/>', () => { 
     const nombre = "Name";
     const apodo = "Apodo";
     const edad = 2;

     test('should have the container', () => { 
          render(<HtmlApp nombre={nombre} apodo={apodo} edad={edad} />)
          expect( screen.container ).toMatchSnapshot();  
     });
     
     test('should show the h1', () => { 
          render(<HtmlApp nombre={nombre} apodo={apodo} edad={edad} />)
          // expect( screen.getByRole('heading', {level: 1}) ).toBeTruthy();
          expect( screen.getByText(nombre) ).toBeTruthy();
     });
     
     
     test('should show the apodo and the count of apodo', () => { 
          render(<HtmlApp nombre={nombre} apodo={apodo} edad={edad} />)
          // expect( screen.getByText(apodo).innerHTML ).toBe('Apodo');
          expect( screen.getAllByText(apodo).length ).toBe(2);
      })


})


