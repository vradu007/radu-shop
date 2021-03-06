import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import Product from './pages/Product/Product';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import './utils/utility-classes.css';
import Favourites from './pages/Favourites/Favourites'

const App = () => {
  return(
    <div className="app">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/radu-shop/build" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/favourites" component={Favourites}/>
        <Route path="/about" component={About}/>
        <Route path="/terms-and-conditions" component={TermsAndConditions}/>
        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
