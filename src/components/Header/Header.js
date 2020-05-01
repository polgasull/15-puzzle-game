import React from 'react';

import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const header = (props) => (
  <header className={styles.Header}>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <div className={styles.Moves}>
      Moves: {props.moves}
    </div>
    <NavigationItems undo={props.undo}/>
  </header>
)

export default header;