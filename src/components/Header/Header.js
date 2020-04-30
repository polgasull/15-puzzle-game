import React from 'react';

import styles from './Header.module.scss'
import Logo from '../Logo/Logo'

const header = (props) => (
  <header className={styles.Header}>
    <div className={styles.Logo}>
      <Logo />
    </div>
  </header>
)

export default header;