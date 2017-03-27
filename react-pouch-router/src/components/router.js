'use strict';

import About from './about';
import App from './app';
import Index from './index';
import Register from './register';
// import NewPerson from './new-person';
import NoMatch from './no-match';
import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

export default React.createClass({
  render() {
    return (
      <Router>
        <Route name="root" path="/" component={App}>
          <IndexRoute name="index" component={Index} />
          <Route name="about" path="about" component={About}/>
          <Route name="register" path="register" component={Register}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
});

    // <Route name="new-person" path="new-person" component={NewPerson}/>
