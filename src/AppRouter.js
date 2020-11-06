import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import Navigation from './components/Navigation';
import MemberOverview from './components/MemberOverview';
import Verified from './components/Verified';
import Invoices from './components/Invoices';
import PurchaseOrders from './components/PurchaseOrders';
import ConversionOpportunity from './components/ConversionOpportunity';
import FBIRebate from './components/FBIRebate';

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
              <Route path="/member-overview">
                <MemberOverview />
              </Route>
              <Route path="/verified">
                <Verified />
              </Route>
              <Route path="/invoices">
                <Invoices />
              </Route>
              <Route path="/purchase-orders">
                <PurchaseOrders />
              </Route>
              <Route path="/conversion-opportunity">
                <ConversionOpportunity />
              </Route>
              <Route path="/fbi-rebate">
                <FBIRebate />
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default AppRouter;