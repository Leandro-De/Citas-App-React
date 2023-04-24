import { useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import ListadoPacientes from "./components/ListadoPacientes"

function App() { 

  const [pacientes, setPacientes] = useState([]);
  
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form 
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
