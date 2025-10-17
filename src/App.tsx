import React, {useState, useEffect} from 'react'
import NavBar from './components/Navigation/NavBar'
import './public/citadel.json'

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('./public/citadel.json')
        if(!response.ok) 
        {
          throw new Error (`error at retrieving data, status: ${response.status}`)
        }
        const incomingData = await response.json()

        
      }
      catch(error)
        {
          console.log(error);
        }
    }
  })


  return (
    
    <div>
      <NavBar/>
      <h1>Citadel of Eternal Night</h1>
      <p>Construye aquí la interfaz y lógica de la ciudadela.</p>
    </div>
  )
}

export default App
