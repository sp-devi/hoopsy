import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import FindEventByCity from './components/FindEventByCity';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={FindEventByCity} />
      </div>
    </Router>
  );
}

export default App;
