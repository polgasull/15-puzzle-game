import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Game from '../../components/Game/Game'

class GameBuilder extends Component {
  state = {
    gridSize: 4,
    tileSize: 90,
  }

  render() {
    return (
      <Aux>
        <Game 
          gridSize={this.state.gridSize}
          tileSize={this.state.tileSize}
        />
      </Aux>
    )
  }
}

export default GameBuilder;