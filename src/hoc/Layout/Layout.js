import React, { Component } from 'react'

import styles from './Layout.module.scss';
import Aux from '../Aux/Aux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Layout extends Component {

  render() {
    return (
      <Aux>
        <Header />
        <main className={styles.Content}>
          {this.props.children}
        </main>
        <Footer />
      </Aux>
    )
  }
}

export default Layout;