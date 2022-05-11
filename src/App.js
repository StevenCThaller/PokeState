import './App.css';
import { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import pokemonCards from './pokemonCards';

function App() {
  const [hand, setHand] = useState(pokemonCards)
  const [playedCards, setPlayedCards] = useState([])
  const [hoveredCardHand, setHoveredCardHand] = useState(-1)
  const [hoveredCardPlayed, setHoveredCardPlayed] = useState(-1)

  const playCard = (i) => {
    setHand(hand.filter((c, idx) => idx != i ))
    setPlayedCards([...playedCards, hand[i]])
  }

  const attackWithCard = (i) => {
    setPlayedCards(playedCards.map((card, idx) => {
      if(idx === i) {
        if(card.pokemonEnergy >= card.moveEnergy) {
          alert(`${card.name} attacked with ${card.moveName}, dealing ${card.movePower} damage!`)
          return { 
            ...card, 
            pokemonEnergy: card.pokemonEnergy - card.moveEnergy 
          }
        } else {
          alert(`${card.name} does not have enough energy to use ${card.moveName}`)
          return card
        }
      } else {
        return card
      }
    }))
  }

  return (
    <div className="App">
      <div className="played-cards">
        {
          playedCards.length === 0 ?
          <div className="no-played-cards">
            Play a card
          </div>
          :
          playedCards.map((card, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredCardPlayed(i)}
              onMouseLeave={() => setHoveredCardPlayed(-1)}
            >
              <PokemonCard { ...card } />
              {
                hoveredCardPlayed === i &&
                <button 
                  className="play-card-btn"
                  onClick={() => attackWithCard(i) }>Attack</button>
              }
            </div>
          ))
        }
      </div>
      <div className="hand-of-cards">
        {
          hand.map((card, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredCardHand(i)} 
              onMouseLeave={() => setHoveredCardHand(-1)}
            >
              <PokemonCard
                { ...card }
              />
              {
                hoveredCardHand === i &&
                <button 
                  className="play-card-btn" 
                  onClick={() => playCard(i)}
                >Play</button>
              }
            </div>
            ))
        }
      </div>
    </div>
  );
}

export default App;
