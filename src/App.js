import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Addservice from './components/AllBooking/AllBooking';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Packages from './components/Packages/Packages';
import Footer from './components/Shared/Footer/Footer'
import Header from './components/Shared/Header/Header';
import Sign from './components/Signin/Sign';
import Authprovider from './contexts/Authprovider';
import './App.css';
import Myorder from './components/Private/Myorders/Myorder';
import Order from './components/Private/Order/Order';

function App() {
  
  return (
    <>
      <Authprovider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/packages">
            <Packages></Packages>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Sign></Sign>
            </Route>
          <PrivateRoute exact path="/addservice">
            <Addservice></Addservice>
          </PrivateRoute>
          <PrivateRoute exact path="/package/:key">
            <Order></Order>
          </PrivateRoute>  
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
        </Router>
      </Authprovider>
    </>
  );
}

export default App;
