import React, { Component } from 'react';
import PortfolioFix from "./components/portafolioFx"

import Content from "./components/PortafolioContent"


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFix/>
        <Content/>
      </div>
    );
  }
}

export default App;
