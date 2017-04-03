'use strict';

import About from './about';
import App from './app';
import Index from './index';
import Register from './register';
import BillList from './bill-list';
import NoMatch from './no-match';
import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

export default React.createClass({
  render() {
    return (
      <Router>
        <Route name="root" path="/" component={App}>
          <IndexRoute name="index" component={Index} />
          <Route name="bills" path="bills" component={BillList} />
          <Route name="about" path="about" component={About}/>
          <Route name="register" path="register" component={Register}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
});

