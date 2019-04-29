import React from 'react'
import HeroRow from './HeroRow'

const HeroTable = ({heroes,handleClick,handleVisible}) => (
  <table className="characters-table">
    <tbody>
      <tr className="character-row">
        <th>Name</th>
        <th>Race</th>
        <th>Age</th>
        <th>Weapon</th>
        <th></th>
      </tr>

      {heroes.map(({name, race, age, weapon}, index) => (
        <HeroRow key={index} name={name} race={race} age={age} weapon={weapon} id={index} handleClick={handleClick} handleVisible={handleVisible}  />
      ))}
    </tbody>
  </table>
)

export default HeroTable
