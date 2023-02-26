import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Contador = ({contador})  => {

    const [valor, setValor] = useState(contador)

    const handleAdd = (event) => {
            // console.log(event)
            setValor(valor+1) 
    }

  return (
    <div>
        <h1>Contador App</h1>
        <h2>{valor}</h2>
        <button onClick={handleAdd} >
            +1</button>
    </div>
  )
}

Contador.PropTypes = {
    contador: PropTypes.number.isRequired
}

export default Contador