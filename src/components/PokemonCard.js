import React from 'react'

const PokemonCard = ({ name, primaryType, image, moveName, moveDescription, movePower, moveEnergy, pokemonEnergy }) => {
  return (
    <div className={ `card ${primaryType}` }>
      <h3>{ name } - { pokemonEnergy }</h3>
      <img className="card-image" src={image} alt={name} />
      <div className="move">
        <p>
          <strong>{ moveEnergy} - { moveName }</strong> { moveDescription }
        </p>
        <span className="move-power">{ movePower }</span>
      </div>
    </div>
  )
}

export default PokemonCard