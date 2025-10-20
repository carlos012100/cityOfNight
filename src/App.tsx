import React, {useState, useEffect} from 'react'
import NavBar from './components/Navigation/NavBar'
import dataContext from './ContextData'
import {Route, Routes} from  'react-router-dom'
import Location from './components/Location'
import Resources from './components/Resources'
import History from './components/History'
import Inhabitants from './components/Inhabitants'
import Defenses from './components/Defenses'
import {LINKS, PATH} from './Links'


function App() {

  const [data, setData] = useState();

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('./citadel.json');
      console.log(response);
      if (!response.ok) {
        throw new Error(`error at retrieving data, status: ${response.status}`);
      }
      const incomingData = await response.json();
      console.log(incomingData);

      setData(incomingData);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData(); // ✅ call it here, inside the effect
}, []); // ✅ empty dependency array = run only once
if (!data) {
  return <div>...Loading</div>;
}

console.log(data?.inhabitants.roles)

  return (
    <dataContext.Provider value={{data:data}}>
    <div>
      <NavBar/>
      <Routes>
        {/* {LINKS.map(route => (
          <Route path={route.path} element={<Location/>}/> 
        ))} */}
        <Route path={LINKS[PATH.LOCATION].path} element={<Location/>}/>
        <Route path={LINKS[PATH.DEFENSE].path} element={<Defenses defenseData ={data?.defenses}/>}/>
        <Route path={LINKS[PATH.HISTORY].path} element={<History/>}/>
        <Route path={LINKS[PATH.POPULATION].path} element={<Inhabitants populationData={data?.inhabitants}/>}/>
        <Route path={LINKS[PATH.RESOURCES].path} element={<Resources/>}/>
      </Routes>
    </div>
    </dataContext.Provider>
  )
}

export default App
