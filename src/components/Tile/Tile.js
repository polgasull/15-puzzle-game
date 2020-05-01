import React from 'react';

import styles from './Tile.module.scss'

const Tile = ({index, pos, onClick, toggleClass}) => {
  const top = pos[0]*100 + 5;
  const left = pos[1]*100 + 5;
  const bgLeft = (index%4)*100 + 5;
  const bgTop = Math.floor(index/4)*100 + 5;

  let attachedClasses = [styles.Weekendesk];
  if (toggleClass === 'Pol') {
    attachedClasses = [styles.Pol];
  } else {
    attachedClasses = [styles.Weekendesk];
  }

  console.log(toggleClass)
  
  return <div 
    className={attachedClasses.join(' ')}
    onClick={onClick}
    style={{top, left, backgroundPosition: `-${bgLeft}px -${bgTop}px`}} 
  />;
}

export default Tile;