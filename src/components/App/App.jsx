import React from 'react';
import { HashRouter  as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';

function App() {
  return (
    <div className="App">
      {/* Router is used to switch between component views. */}
      <Router>
        <h1>Single Page Applications! (SPAs)</h1>
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li><Link to="/animals">Animals</Link></li>
        </ul>
        </nav>
        <Route exact path="/">
          < Home />
        </Route>
        <Route exact path="/plants">
            < Plants />
        </Route >
        <Route exact path="/animals">
            < Animals />
        </Route>
{/* if want displayed on a certain page use a route if, if outside route it will display on  all */}
      </Router>
    </div>
  );
}

export default App;
