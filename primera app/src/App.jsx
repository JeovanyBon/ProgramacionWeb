import Contador from "./contador"
import Horario from "./Horario"
import Portada from "./Portada"

function App() {

  return (
    <div>
      <Portada titulo=" Estoy aprendiendo React"
      fecha= '16 de febrero de 2023'/>
      <Horario/>
      <Contador contador = {2}/>
    </div>
  )
}


export default App
