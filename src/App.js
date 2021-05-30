import './App.css';
import Home from './components/Home/Home/Home';
import { Route, Switch } from 'react-router';
import Login from './components/LogIn/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from './components/DetailsPage/Details';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
