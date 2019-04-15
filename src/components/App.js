import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Album from './Album';
import Picture from './Picture';
import '../styles/base.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="mainContainer">
          <Route exact path="/" component={Home} />
          <Route path="/album/:id" component={Album} />
          <Route path="/picture/:id" component={Picture} />
        </div>
      </Router>
    )
  }
}

export default App;
