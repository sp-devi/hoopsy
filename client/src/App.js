import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ShowUser from './components/ShowUser';

function App() {
  return (
    <div className="App">
      <div>
        <Route exact path='/' component={ShowUser} />
      </div>
    </div>
  );
}

export default App;
