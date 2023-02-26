import PropTypes from 'prop-types';

const Portada = ({titulo = 'Desarrolo Web 1', fecha = '1990'}) => {

    const nuevoMensaje = {
        mensaje: 'Hola Desarollo Web 1',
        title : 'Programacion Web'
    };
    
    return (
    <div>
        <h1>{titulo}</h1>
        <h3>{fecha}</h3>
        <h4>{nuevoMensaje.title}</h4>
  </div>
  )
}



Portada.PropTypes = {
    titulo: PropTypes.string,
    // fecha: PropTypes.string

}



export default Portada