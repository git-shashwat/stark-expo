import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import './reduction.styles.scss';

function App() {
  return (
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
