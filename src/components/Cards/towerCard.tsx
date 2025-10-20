import React from "react";
import '../Styles/DefensesStyles.css'

function TowerCard({tower})
{
const percentage = (tower.armament.ammunitionCount/1000)*100
    return(
        <div className="card">
            <strong><p className="p">{tower.name}</p></strong>
            <p className="p">Height:{tower.height}</p>
            <p className="p"><strong>Armament</strong></p>
            <p className="p">{tower.armament.weaponType} -- {tower.armament.ammunitionType} -- {tower.armament.ammunitionCount}</p>
            <div className="progressContainer">
                <div className={percentage <= 25 ? "fillProgress": percentage <= 50 ? 'fillProgress2': 'fillProgress3' } style={{width: `${percentage}%`}}>

                </div>
            </div>
            <p className="p">Guards</p>
            <ul>
                {tower.guards.map((guard, index) => (
                    <li style={{justifySelf: 'center'}} key={index}>
                        {guard.name} -- {guard.rank}
                    </li>
                ))}
            </ul>

        </div>
        
    )
}
export default TowerCard;