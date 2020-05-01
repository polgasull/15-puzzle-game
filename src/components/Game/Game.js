import React, { Component } from 'react'; 

import Grid from './Grid/Grid';

class Game extends Component {

  state = {
    gridSize: 4,
    tileSize: 90
  }

  render() {
    return (
      <div>
        <Grid 
          gridSize={this.gridSize}
          tileSize={this.tileSize}
        />
      </div>
    )
  }
}

export default Game; 