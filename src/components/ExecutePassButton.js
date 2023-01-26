import React from 'react';
import { useGameContext } from '../Context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({
  passCard,
  // setFrom,
  // from,
  // to,
  // selectedCard,
  // setSelectedCard,
}) {
  const { selectedCard, from, to } = useGameContext();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
