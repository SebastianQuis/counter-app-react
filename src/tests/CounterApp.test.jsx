import { fireEvent, getByText, render, screen } from "@testing-library/react"
import { HtmlApp } from "../HtmlApp";
import { CounterApp } from "../CounterApp";


describe('Pruebas en <CounterApp/>', () => { 
     const initValue = 100;

     test('should have the snapshot', () => { 
          const { container } = render( 
               <CounterApp  value={initValue}/> 
          );
          expect( container ).toMatchSnapshot(); // crea archivo en __snapshot__
     })

     test('should number: 100', () => { 
          render( <CounterApp  value={initValue}/> );
          // expect( screen.getByText(initValue).innerHTML ).toContain("100");
          expect( screen.getByText(initValue) ).toBeTruthy();
     })
     
     test('should add 1 in value: 101', () => { 
          render( <CounterApp  value={initValue}/> );
          fireEvent.click( screen.getByText('+1') );
          screen.debug();
          expect( screen.getByText( initValue + 1 ).innerHTML ).toBe( `${initValue + 1}` );
          // expect( screen.getByText( value ).innerHTML ).toBeTruthy();
     });
     
     test('should add 1 in value: 100', () => { 
          render( <CounterApp  value={initValue}/> );
          fireEvent.click( screen.getByText('-1') );
          expect( screen.getByText( initValue - 1 ).innerHTML ).toBe( `${initValue - 1}` );
     });
     
     
     test('should reset the number to: 100', () => { 
          render( <CounterApp  value={initValue}/> );
          fireEvent.click( screen.getByText('+1') );
          fireEvent.click( screen.getByText('+1') );
          
          fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

          expect( screen.getByText(initValue).innerHTML ).toBe('100')
      })

     
})


