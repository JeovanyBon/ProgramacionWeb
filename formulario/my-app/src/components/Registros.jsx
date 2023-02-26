import React, { useState } from 'react';
import '../styles/registrosStyle.css'

function Registros() {
  const [registros, setRegistros] = useState([
    { id: 1, nombre: 'Registro 1', descripcion: 'Descripción del registro 1' },
    { id: 2, nombre: 'Registro 2', descripcion: 'Descripción del registro 2' },
    { id: 3, nombre: 'Registro 3', descripcion: 'Descripción del registro 3' },
    { id: 4, nombre: 'Registro 4', descripcion: 'Descripción del registro 4' },
    { id: 5, nombre: 'Registro 5', descripcion: 'Descripción del registro 5' },
    { id: 6, nombre: 'Registro 6', descripcion: 'Descripción del registro 6' },
  ]);

  return (
    <div className="registros-container">
      <h2>Registros</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.id}</td>
              <td>{registro.nombre}</td>
              <td>{registro.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Registros;
