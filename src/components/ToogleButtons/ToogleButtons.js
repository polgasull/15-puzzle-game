import React from 'react';

import styles from './ToogleButtons.module.scss';

const ToogleButtons = (props) => (
  <div className={styles.ToogleButtons}>
    <button onClick={props.onClick}>Change Board</button>
  </div>
);

export default ToogleButtons;