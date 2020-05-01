import React from 'react';

import styles from './App.module.scss'

import UseGameState from './components/UseGameState/UseGameState';
import Tile from './components/Tile/Tile';
import Layout from './hoc/Layout/Layout';

function App () {
  const [board, moves, solved, newGame, undo, move] = UseGameState();

  return (
    <div className='game-container'>
      <Layout moves={moves} undo={undo}>
        <div className={styles.Board}>
        {
          board.slice(0,-1).map((pos, index) => ( 
            <Tile 
              index={index} 
              pos={pos} 
              onClick={move(index)} 
              key={`tile-${index}`}/>
          ))
        }
        { solved &&
            <div className={styles.Overlay}>
              <button className='big-button' onClick={newGame}>
                PLAY AGAIN 
              </button>
            </div>
        }
        </div>
      </Layout>
      
    </div>
  );
}

export default App;