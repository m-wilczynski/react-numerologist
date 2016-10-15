import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import ChooseDefinition from './components/ChooseDefinition';
import DefinitionByFullname from './components/ChooseDefinition/DefinitionByFullname';
import DefinitionByBirthdate from './components/ChooseDefinition/DefinitionByBirthdate';
import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/chooseDefinition" component={ChooseDefinition} />
            <Route path="/byFullname" component={DefinitionByFullname} />
            <Route path="/byBirthdate" component={DefinitionByBirthdate} />
        </Route>
    </Router>,
  document.getElementById('root')
);
