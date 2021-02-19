import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBarSafePaw from './components/NavBarSafePaw'

import Pets from './components/Pets'
import People from './components/People'
import Hospitals from './components/Hospitals'
import Vaccines from './components/Vaccines'

ReactDOM.render(
  <React.StrictMode>
    <NavBarSafePaw />
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/pets" component={Pets} />
        <Route path="/people" component={People} />
        <Route path="/hospitals" component={Hospitals} />
        <Route path="/vaccines" component={Vaccines} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);