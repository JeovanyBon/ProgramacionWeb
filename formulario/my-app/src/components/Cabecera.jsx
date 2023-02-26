import React from 'react'
import '../styles/encabezadoStyle.css'

const Cabecera = ({titulo}) => {
  return (
    <div>
        <h1 className="form-header">{titulo}</h1>
        
    </div>
  )
}

export default Cabecera