import React from 'react';

import wedLogo from '../../assets/images/weekendesk.png';
import styles from './Logo.module.scss';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={wedLogo} alt='weekendeskGame' width="80" height="80" />
  </div>
);

export default logo;