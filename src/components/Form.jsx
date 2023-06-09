/* eslint-disable react/prop-types */
import {useState, useEffect } from "react";
import Error from "./Error";

// eslint-disable-next-line react/prop-types
const Form = ({setPacientes, pacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  

  const generarId = () => {
    const random = Math.random().toString(36);
    const fecha = Date.now().toString(36);

    return random+fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')){

      setError(true);
      return
    }
    setError(false);

    // objeto paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
    }

    if (paciente.id) {
      // editando registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPaciente({});
      
      setPacientes(pacientesActualizados);
    }else{
      // nuevo registro
      objetoPaciente.id =  generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }

    // reiniciar el form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes 
            <span className="text-indigo-600 font-bold"> Administralos</span>
        </p>

        <form onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg py-10 px-5">

          {error && <Error 
            mensaje='Todos los campos son obligatorios'
          />}

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            <input 
              id="mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text" 
              placeholder="Nombre de la Mascota"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input 
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text" 
              placeholder="Nombre del Propietario"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              E-mail
            </label>
            <input 
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="email" 
              placeholder="Dirección de E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Fecha de Alta
            </label>
            <input 
              id="alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="date" 
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Síntomas
            </label>
            <textarea 
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los sintomas" 
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          <input type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />

        </form>
    </div>
  )
}

export default Form
