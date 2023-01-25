import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');

  return (
    <GameContext.Provider
      value={{
        deck,
        setDeck,
        playerOneHand,
        setPlayerOneHand,
        selectedCard,
        setSelectedCard,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
        from,
        setFrom,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('use gameContext must be used within a GameProvider');
  }
  return context;
};
export { useGameContext, GameProvider };
