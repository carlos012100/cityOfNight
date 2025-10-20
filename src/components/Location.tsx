import React from 'react'
import dataContext from '../ContextData.js'
import './Styles/LocationStyles.css'

interface LocationProps {
  continent: string,
  coordinates: Coordinates,
  nearbyLandmarks: landmark[]

}
interface Coordinates {
  latitude: number,
  longitude: number;
}
interface landmark {
  name: string,
  type: string,
  distance: number
}

export default function Location() {

  const context = React.useContext(dataContext)
  const landmarks : landmark[] | undefined = context?.data?.location?.nearbyLandmarks

  const sortedLandmarks = landmarks.sort((a,b) => a.distance - b.distance) 

  if(!sortedLandmarks && !landmarks)
  {
    return(
      <div>...LOADING</div>
    )
  }

  return ( 
  <div className='container'> 
    <h1 className='h1'>{context?.data?.name}</h1>
    <p className='p'>Continent: {context?.data?.location.continent}</p>
    <p className='p'>Coordinates: {context?.data?.location.coordinates.latitude} , {context?.data?.location.coordinates.longitude}</p>
    <h2 className='h2'>Nearby Landmarks</h2>
<ul>
  {sortedLandmarks.map((landmark, index) => (
    <li className='list' key={index}>
      <span className={`col ${landmark.type === "Town"? 'town' : landmark.type === "Ruins" ? "ruins": 'cave'}`}>{landmark.name}</span>
      <span className='col'>{landmark.type}</span>
      <span className='col'>{landmark.distance}</span>
    </li>
  ))}
</ul>

  </div>
  

)

}
