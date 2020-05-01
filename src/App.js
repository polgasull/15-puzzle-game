import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import GameBuilder from './containers/GameBuilder/GameBuilder';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <GameBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
