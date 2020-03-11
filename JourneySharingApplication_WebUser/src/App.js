import React from 'react';


import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import SearchTrip from './components/SearchTrip';
import PostTrip from './components/PostTrip';
import LoggedPage from './components/LoggedPage';
import Logout from './components/Logout';
import NotFoundPage from './components/NotFoundPage';

import ForgotPassword from './components/ForgotPassword';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
function App() {
  return (
    <Router>
        <div className="App">
        <Switch>
          <Route exact path  = "/" component ={HomePage}/>
          <Route exact path  = "/homepage" component ={HomePage}/>
          <Route exact path = "/login" component ={Login}/>
          <Route exact path = "/register" component ={Register}/>
          <Route exact path = "/searchTrip" component ={SearchTrip}/>
          <Route exact path = "/postTrip" component ={PostTrip}/>
          <Route exact path = "/logout" component ={Logout}/>
          <Route exact path = "/forgotPassword" component ={ForgotPassword}/>
          <Route exact path  = "/homepage" componehomepagent ={HomePage}/>
          <Route exact path  = "/loggedPage" component ={LoggedPage}/>
          <Route  component ={NotFoundPage}/>
        </Switch>
        
        
        </div>
    </Router>
  );
}
export default App;
