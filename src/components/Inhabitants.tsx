import React from 'react'
import './Styles/Inhabitants.css'
import './Styles/DefensesStyles.css'

export default function Inhabitants({populationData}) {
  return (
    <div className='frame'>
      <ul>
        {populationData.roles.map((population, index) => (
          <li key={index} className='classList'>{population.role}</li>
        ))}
      </ul>
    </div>
  )
}
