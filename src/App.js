import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage.component'
import ShopPage from './pages/shop/shop.component'
import './pages/HomePage/HomePage.styles.scss'
import Header from './components/header/header.component';


function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact= {true} path= '/' component={HomePage} />
      <Route exact= {true} path= '/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
