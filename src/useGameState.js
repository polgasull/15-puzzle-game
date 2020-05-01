import React from 'react';

import GameState from './GameState';

function useGameState () {
  const gameState = GameState.getInstance();

  const [state, setState] = React.useState(gameState.getState());

  function newGame () {
    gameState.startNewGame();
    setState(gameState.getState());
  }

  function undo () {
    gameState.undo();
    setState(gameState.getState());
  }

  function move (i) {
    return function () {
      gameState.moveTile(i);
      setState(gameState.getState());
    }
  }

  React.useEffect(() => {
    document.addEventListener('keyup', function listeners (event) {

      if (event.keyCode === 37) gameState.moveInDirection('left');
      else if (event.keyCode === 38) gameState.moveInDirection('up');
      else if (event.keyCode === 39) gameState.moveInDirection('right');
      else if (event.keyCode === 40) gameState.moveInDirection('down');

      setState(gameState.getState());
    });

    return ((listeners) => window.removeEventListener(listeners));
  }, [gameState]); 

  return [state.board, state.moves, state.solved, newGame, undo, move];
}

export default useGameState;