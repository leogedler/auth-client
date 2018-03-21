import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route } from 'react-router-dom'
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import history from './history';

import App from './components/app';
import Header from './components/header'
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <div>
        <Header></Header>
        <Switch>
          <Route path='/signin' component={Signin}></Route>
          <Route path='/signup' component={Signup}></Route>
          <Route path='/signout' component={Signout}></Route>
          <Route path='/' component={App}></Route>
        </Switch>
      </div>
    </Router>

  </Provider>
  , document.querySelector('.container'));
