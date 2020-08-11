import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FindEventByCity from './components/FindEventByCity';
import SportEventList from './components/SportEventList';
import CreateSportEvent from './components/CreateSportEvent';
import CreatedEventStatus from './components/CreateSportEvent';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={FindEventByCity} />
        <Route path='/show-events' component={SportEventList} />
        <Route path='/create-event' component={CreateSportEvent} />
        <Route path='/create-event/submit' component={CreatedEventStatus} />
      </div>
    </Router>
  );
}

export default App;
