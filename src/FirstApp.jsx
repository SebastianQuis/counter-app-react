

// import React from 'react'

import { Fragment } from "react"

// DIV
export const FirstApp = () => {
  return (
    <div>
        <h1>First App</h1>
        <p>Comentario</p>
    </div>
  )
}


// FRAGMENT
export const FirstAppFragment = () => {
    return (
      <Fragment>
          <h1>First App</h1>
          <p>Comentario</p>
      </Fragment>
    )
}


// FRAGMENT ABREVIADO
export const FirstAppFragmentAbr = () => {
    return (
      <>
        <div>
          <h1>First App</h1>
          <p>Comentario</p>
        </div>
        <div>
          <h1>First App</h1>
          <p>Comentario</p>
        </div>
      </>
    )
}