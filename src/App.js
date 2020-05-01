import React, { useState } from 'react';

import styles from './App.module.scss'

import UseGameState from './components/UseGameState/UseGameState';
import Tile from './components/Tile/Tile';
import Layout from './hoc/Layout/Layout';

const App = (props) => {
  const [board, moves, solved, newGame, undo, move] = UseGameState();
  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <div>
      <Layout moves={moves} undo={undo} onClick={toggleTrueFalse} isToggled={isToggled}>
        <div className={styles.Board}>
        {
          board.slice(0,-1).map((pos, index) => ( 
            <Tile 
              index={index} 
              pos={pos} 
              onClick={move(index)} 
              toggleClass={isToggled ? 'Weekendesk' : 'Pol'}
              key={`tile-${index}`}
            />
          ))
        }
        { solved &&
            <div className={styles.Overlay}>
              <button className={styles.Button} onClick={newGame}>
                START AGAIN 
              </button>
            </div>
        }
        </div>
      </Layout>
      
    </div>
  );
}

export default App;