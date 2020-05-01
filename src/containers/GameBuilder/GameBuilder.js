import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Game from '../../components/Game/Game'

class GameBuilder extends Component {

  render() {
    return (
      <Aux>
        <Game />
      </Aux>
    )
  }
}

export default GameBuilder;