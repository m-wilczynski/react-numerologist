import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './component/Home';
import ChooseDefinition from './component/ChooseDefinition';
import DefinitionByFullname from './component/ChooseDefinition/DefinitionByFullname';
import DefinitionByBirthdate from './component/ChooseDefinition/DefinitionByBirthdate';
import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/chooseDefinition" component={ChooseDefinition} />
            <Route path="/definitionByFullname" component={DefinitionByFullname} />
            <Route path="/definitionByBirthdate" component={DefinitionByBirthdate} />
        </Route>
    </Router>,
  document.getElementById('root')
);
