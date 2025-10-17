import React, {useState, useEffect} from 'react'
import NavBar from './components/Navigation/NavBar'
import dataContext from './ContextData'
import {Route, Routes} from  'react-router-dom'

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('./citadel.json')
        if(!response.ok) 
        {
          throw new Error (`error at retrieving data, status: ${response.status}`)
        }
        const incomingData = await response.json()
        setData(incomingData);

        console.log(data)

      }
      catch(error)
        {
          console.log(error);
        }
    }
    fetchData()
  },[])


  return (
    <dataContext.Provider value={{data:data}}>
    <div>
      <NavBar/>

      <h1>Citadel of Eternal Night</h1>
      <p>Construye aquí la interfaz y lógica de la ciudadela.</p>
    </div>
    </dataContext.Provider>
  )
}

export default App
