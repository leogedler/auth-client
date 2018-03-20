import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Header from './components/header'
import Signin from './components/auth/signin';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
          <Route path='/signin' component={Signin}></Route>
          <Route path='/' component={App}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
