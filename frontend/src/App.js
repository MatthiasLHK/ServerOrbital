import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {Button} from "semantic-ui-react";
import NavigationContainer from "./component/navigation/NavigationContainer";
import './App.css';
import {
    HOME_PATH,
    MAIN_PATH,
    ABOUT_PATH,
    SET_DATA_PATH,
    PROFILE_PATH
} from "./utils/Constants";
import Home from "./component/pages/Home";
import Main from "./component/pages/Main";
import About from "./component/pages/About";
import SetData from "./component/pages/SetData";
import Profile from "./component/pages/Profile";

function App() {
  return (
    <div className="App">

        <Router>
         <NavigationContainer>
        <Switch>
            <Route path = {HOME_PATH} exact component = {Home} />
            <Route path = {MAIN_PATH} exact component = {Main} />
            <Route path = {ABOUT_PATH} exact component = {About} />
            <Route path = {PROFILE_PATH} exact component = {Profile} />
            <Route path = {SET_DATA_PATH} exact component = {SetData} />
        <Route>
        <Redirect to = {HOME_PATH} />
        </Route>
        </Switch>
        </NavigationContainer>
        </Router>

    </div>
  );
}

export default App;
