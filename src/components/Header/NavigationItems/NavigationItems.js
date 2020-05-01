import React from 'react';

import styles from './NavigationItems.module.scss';

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <li>
      <button className={styles.Undo} onClick={props.undo}> UNDO </button>
    </li>
  </ul>
);

export default navigationItems;