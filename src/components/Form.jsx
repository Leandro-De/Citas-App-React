import { useEffect, useState } from "react"

const Form = () => {

  const [nombre, setNombre] = useState('');

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes 
            <span className="text-indigo-600 font-bold"> Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5">
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
            />
          </div>

          <input type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />

        </form>
    </div>
  )
}

export default Form
