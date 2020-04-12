import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';
import './reduction.styles.scss';

const HatsPage = () => (
  <div>Hello from hats page</div>
);

function App() {
  return (
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
