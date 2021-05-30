import React from "react";
import './App.css';
import Home from './components/Home/Home/Home';
import Apartment from './components/Apartment/Apartment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/apartment">
            <Apartment></Apartment>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
