import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import {render} from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import CustomerPage from './components/CustomerPage/CustomerPage';
import CatererPage from './components/CatererPage/CatererPage';
import React from "react";

import {setAuthorizationToken} from './api/api';

const store = configureStore(initialState);

setAuthorizationToken(localStorage.token);

// store.dispatch(action);


export default  render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="full-page">
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/customer" component={CustomerPage}/>
        <Route exact path="/caterer" component={CatererPage}/>
        {/*<Route exact path="/app" component={App}/>*/}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
