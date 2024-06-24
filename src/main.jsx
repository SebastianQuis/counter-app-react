import React from 'react' // importar react - imr
import ReactDOM from 'react-dom/client' // para acceder al lado del client

import { FirstApp, FirstAppFragmentAbr } from './FirstApp';
import { HtmlApp } from './HtmlApp';


// estilo css directo en el main.
import './styles.css'
import { CounterApp } from './CounterApp';

// function App() {
//     return ( 
//         // HomeApp(),
//         <h1>Hola mundo </h1> 
//     );
// }



// COMPONENTE PADRE
ReactDOM.createRoot( document.getElementById('root') ).render( // root definido en html
    <React.StrictMode>
        <CounterApp value={1} />
    </React.StrictMode>
);










