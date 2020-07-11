import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import FindEventByCity from './components/FindEventByCity';
import SportEventList from './components/SportEventList';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={FindEventByCity} />
        <Route path='/show-events' component={SportEventList} />
      </div>
    </Router>
  );
}

export default App;
