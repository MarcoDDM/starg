import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js'; 
import Upload from './pages/Upload.js';

import './index.css';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/upload' component={Upload}/>
        <Route path='/' component={Home}/>
      </Switch>
    </HashRouter>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

