import React from 'react'
import './Styles/DefensesStyles.css'
import TowerCard from './Cards/towerCard';

export default function Defenses({defenseData}) {

  const enchantments = defenseData.walls.enchantments.slice()
  console.log(enchantments)
  return (
  <div className='frame'>
    <h1 className='h1'>Citadel Defenses</h1>
    <h2 className='h2'>Walls</h2>
    <div className='wallsSpec'>
    <p>Material: {defenseData.walls.material}</p>
    <p>Height: {defenseData.walls.height}</p>
    </div>
    <ul>
      <h3 className='h3'>Enchantments</h3>
      {enchantments.map((enchantment, index)=> (
        <li className='listDisplay' key={index}>
          {enchantment.name} {"( level "}{enchantment.level}{")"} 
          <p><progress value={enchantment.level} max={10}/></p>
        </li>
      ))}
          <div className='dropdown'>
      <button className='dropbtn'></button>
      <div className='dropdown-content'>
      {defenseData.towers.map((tower, index) => (
        <p key={index}>{tower.armament.weaponType}</p>
      ))}
      </div>
      
    </div>
    </ul>
    <h4 className='h4'>Tower</h4>
    <div className='cardBox'>
      {defenseData.towers.map((tower, index) => (
      <TowerCard key={index} tower={tower}/>
    ))}
    </div>
  </div>
  )
}
