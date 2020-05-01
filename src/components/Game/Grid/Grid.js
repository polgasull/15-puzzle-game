import React, { Component } from 'react';

import styles from './Grid.module.scss';
import PropTypes from 'prop-types';
import Tile, { propTypes as TilePropTypes } from './../Tile/Tile';

class Grid extends Component {
  render() {
    const {
      tiles,
      onTileClick,
      gridSize
    } = this.props

    return (
      <div className={styles.Grid}>
        <div className="tiles" style={{width: props => props.tileSize * props.gridSize + "px", height: props => props.tileSize * props.gridSize + "px"}}>
          {tiles.map((tile, tileId) => {
            return (
              <Tile 
                { ...tile}
                key={`tile-${tileId}`}
                correct={tile.tileId + 1 === tile.number}
                onClick={onTileClick}
                visible={tile.number < gridSize ** 2}              
              />
            )
          })}
        </div>
      </div>
    )
  }
}

Grid.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.shape(TilePropTypes)).isRequired,
  gridSize: PropTypes.number.isRequired,
  tileSize: PropTypes.number.isRequired,
  onTileClick: PropTypes.func.isRequired,
};

export default Grid; 