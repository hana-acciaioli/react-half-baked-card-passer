import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);

  return <GameContext.Provider value={{ deck, setDeck }}>{children}</GameContext.Provider>;
};
const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('use gameContext must be used within a GameProvider');
  }
  return context;
};
export { useGameContext, GameProvider };
