import React from 'react';
import Layout from './hoc/Layout/Layout';
import GameState from './containers/GameState/GameState';

function App() {
  return (
    <Layout>
      <GameState />
    </Layout>
  );
}

export default App;
