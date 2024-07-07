import React, { useState } from 'react'

import PropTypes from 'prop-types'


export const CounterApp = ( {value} ) => {
    console.log('render!');
    // const {value} = props;
    const [counter, setCounter] = useState(value);

    const sumar = () => {
        // setCounter(counter + 1);
        setCounter( (c) => c+1)
    }

    const restar = () => {
        (counter < 1) 
            ? setCounter( 0 ) 
            : setCounter( counter - 1);
    }

    const resetear = () =>  setCounter( value );
    

    return (
        <>
            <h1>CounterApp</h1>
            <p> {counter} </p>
            <button onClick={ sumar }> +1 </button>
            <button onClick={ restar }> -1 </button>
            <button onClick={ resetear }> Reset </button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
