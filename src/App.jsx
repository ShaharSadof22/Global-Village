import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainApp } from './pages/MainApp'
import { About } from './pages/About.jsx'
import { NavBar } from './cmps/NavBar.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route component={About} path='/about' />
        <Route component={MainApp} path='/' />
      </Switch>
    </div>
  );
}

export default App;
