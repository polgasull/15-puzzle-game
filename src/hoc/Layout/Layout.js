import React, { Component } from 'react'

import styles from './Layout.module.scss';
import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ToogleButtons from '../../components/ToogleButtons/ToogleButtons';

class Layout extends Component {

  render() {
    const boardName = this.props.isToggled ? 'Weekendesk' : 'Pol'

    return (
      <Aux>
        <Header moves={this.props.moves} undo={this.props.undo} />
        <h2> Your are playing {boardName} Board 🥳</h2>
        <ToogleButtons toogleBox={this.props.toogleBox} onClick={this.props.onClick} />
        <main className={styles.Content}>
          {this.props.children}
        </main>
        <Footer />
      </Aux>
    )
  }
}

export default Layout;