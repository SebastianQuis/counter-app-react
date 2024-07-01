import React from 'react'

import PropTypes from 'prop-types'

const nombre = 'Sebastian';
const user = {
    nombre: 'Sebasxd',
    apodo: 'El pepe',
    direccion: {
        calle: 'Junin',
        num: 150
    }
}

// CODIGO QUE FUNCIONA SOLO UNA VEZ 
const getNombre = () => `${user.nombre}`;
const numArr = [1,2,3,4,5,6,7]

export const HtmlApp = ({nombre, apodo, edad}) => {
    // CODIGO QUE FUNCIONA CADA VEZ QUE ACTUALICE
    // STATEFULL
    // console.log(props); // viene del componente padre
    return (
        <>
            <h1>Impresion de variables en HTML</h1>
            <h2> {nombre} </h2>
            <p> {apodo} </p>
            <p> {edad + 5} </p>
            {/* <code>{ JSON.stringify( user ) }</code>
            <p>
                { numArr.map( num => {
                    return <p> {num}: Seb </p>
                }) }
            </p>
            <p>{getNombre()}</p> */}
        </>
    )
}

// TODO - TIPOS DE DATOS PARA PARAMETROS DEL COMPONENETE
HtmlApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
}

// TODO - definir los valores de los proptypes.
HtmlApp.defaultProps = {
    apodo: 'Sin apodo',
    edad: 1,
    nombre: 'Sin nombre',
}



