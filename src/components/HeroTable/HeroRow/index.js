import React from 'react'

const HeroRow = ({name, race, age, weapon,id,handleClick,handleVisible}) => (
  <tr className="character-row" id={id}>
    <td>{name}</td>
    <td>{race}</td>
    <td>{age}</td>
    <td>{weapon}</td>
    <td>
      <div className="controls ">
        <div onClick={(e) => handleClick(id, e)}>☠ Kill</div>
        <div onClick={(e) => handleVisible(id, e)}>💍 Use Ring</div>
      </div>
    </td>
  </tr>
)

export default HeroRow
