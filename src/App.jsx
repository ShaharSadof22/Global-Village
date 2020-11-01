import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalApp } from './pages/GlobalApp'
import { CountryDetails } from './pages/CountryDetails'
import { About } from './pages/About.jsx'
import { NavBar } from './cmps/NavBar.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route component={CountryDetails} path='/country/:code' />
        <Route component={About} path='/about' />
        <Route component={GlobalApp} path='/' />
      </Switch>
    </div>
  );
}

export default App;
