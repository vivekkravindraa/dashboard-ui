import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import App from './App';
import Navigation from './components/Navigation';
import MemberOverview from './components/MemberOverview';
import Verified from './components/Verified';
import Invoices from './components/Invoices';
import PurchaseOrders from './components/PurchaseOrders';
import ConversionOpportunity from './components/ConversionOpportunity';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createBrowserHistory();

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    console.log(e);
  }
}

function loadFromLocalStorage(state) {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.log(e);
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/dashboard-ui">
              <App />
            </Route>
            <Route path="/dashboard-ui/tab-1">
              <MemberOverview />
            </Route>
            <Route path="/dashboard-ui/tab-2">
              <Verified />
            </Route>
            <Route path="/dashboard-ui/tab-3">
              <Invoices />
            </Route>
            <Route path="/dashboard-ui/tab-4">
              <PurchaseOrders />
            </Route>
            <Route path="/dashboard-ui/tab-5">
              <ConversionOpportunity />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
