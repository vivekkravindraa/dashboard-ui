import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import Navigation from './components/Navigation';
import MemberOverview from './components/MemberOverview';
import Verified from './components/Verified';
import Invoices from './components/Invoices';
import PurchaseOrders from './components/PurchaseOrders';
import ConversionOpportunity from './components/ConversionOpportunity';

export const history = createBrowserHistory();

class AppRouter extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/">
                <App />
              </Route>
              <Route path="/tab-1">
                <MemberOverview />
              </Route>
              <Route path="/tab-2">
                <Verified />
              </Route>
              <Route path="/tab-3">
                <Invoices />
              </Route>
              <Route path="/tab-4">
                <PurchaseOrders />
              </Route>
              <Route path="/tab-5">
                <ConversionOpportunity />
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default AppRouter;