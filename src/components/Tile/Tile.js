import React from 'react';
import { isMobile } from 'react-device-detect';

import styles from './Tile.module.scss'

const Tile = ({index, pos, onClick, toggleClass}) => {
  const top = isMobile ? pos[0]*73 + 5 : pos[0]*100 + 5;
  const left = isMobile ? pos[1]*73 + 5 : pos[1]*100 + 5;
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