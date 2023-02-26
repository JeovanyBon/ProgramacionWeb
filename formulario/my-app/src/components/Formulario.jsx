import React from 'react'
import '../styles/formularioStyle.css'


const Formulario = () => {
  return (
    <div className="form-container">
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder='Ingresa tu nombre' />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder='Ingresa tu correo' />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder='Ingresa tu contraseña' />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Formulario