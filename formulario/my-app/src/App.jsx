import Cabecera from "./components/Cabecera";
import Formulario from "./components/formulario";
import Registros from "./components/registros";

function App(){

  return(
    <>
    <Cabecera titulo="Registro de Estudiantes" />
    <div className="container">
      
      <div className="form-container">
        <Formulario />
      </div>
      <div className="registro-container">
        <Registros />
      </div>
    </div>
    </>
  )
}

export default App