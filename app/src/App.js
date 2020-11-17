import Quests from './Quests';
import QuestBoard from './QuestBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import React from 'react';
import './App.scss';

import {StateProvider} from './context';

const App = () => {


  return (
    <div className="App">
      <StateProvider>
        <Router>
          <NavBar />
          <PageContent />
        </Router>
      </StateProvider>
    </div>
  );
}

const NavBar = () => {

  return (
    <div className="navbar">

      <div className="navtitle">
        <img src="questylogo.svg" />
        Questy
      </div>

      <div style={{width: '40px'}} />

      <div className="navlinks">
        <NavLink to="/quests" label="Quests" />
        <div style={{width: '20px'}} />
        <NavLink to="/quest-board" label="Quest Board" />
      </div>

    </div>
  );
}

const NavLink = ({label, to, activeOnlyWhenExact}) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link className={match ? "navlink active" : "navlink"} to={to}>{label}</Link>
  );
}


const PageContent = () => {
  return (
    <Switch>
      <Route path="/quests">
        <Quests />
      </Route>
      <Route path="/quest-board">
        <QuestBoard />
      </Route>
      <Route path="/">
        <Redirect to="/quests" />
      </Route>
    </Switch>
  );
}

export default App;
