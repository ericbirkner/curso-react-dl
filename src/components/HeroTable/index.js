import React from 'react'
import HeroRow from './HeroRow'

const HeroTable = ({heroes,handleClick,handleVisible}) => (
  <table className="characters-table" id="hero_table">
    <tbody>
      <tr className="character-row">
        <th>Name</th>
        <th>Race</th>
        <th>Age</th>
        <th>Weapon</th>
        <th></th>
      </tr>

      {heroes.map(({name, race, age, weapon,killed,visible}, index) => (
        <HeroRow key={index} name={name} race={race} age={age} weapon={weapon} id={index} handleClick={handleClick} handleVisible={handleVisible} killed={killed} visible={visible}  />
      ))}
    </tbody>
  </table>
)

export default HeroTable
