import React, {useEffect, useState} from 'react'
import './Styles/Inhabitants.css'
import './Styles/DefensesStyles.css'

export default function Inhabitants({populationData}) {
  const populationNumbers = populationData.roles.map()

  console.log(populationNumbers)

  const [details, setDetails] = useState(false);
  const showDetails = () =>{
      setDetails(prev => !prev)


  }
  return (
    <div className='frame'>
      <div>
        <h1 className='h1'>Inhabitants</h1>
        <p className='p'><strong>Total Population: {}</strong></p>
          {populationData.roles.map((population, index) => (
          // <li  key={index}>
          //    {population.role}
          // </li>
          <p key={index}><button className='button'>{population.role}</button></p>
        ))}

      </div>

    </div>
  )
}
