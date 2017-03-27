'use strict';

import MUI from 'material-ui';
import React from 'react';

const { Tabs, Tab } = MUI;

export default React.createClass({
  propTypes: {
    history: React.PropTypes.object,
    pathname: React.PropTypes.string
  },

  _handleTabActive(tab) {
    let { route } = tab.props;
    let { history } = this.props;

    history.pushState(null, route);
  },

  render() {
    let { pathname } = this.props;

    return (
      <Tabs value={pathname}>
        <Tab label="Index" route="/" value="/"
             onActive={this._handleTabActive} />
        <Tab label="About" route="/about" value="/about"
             onActive={this._handleTabActive} />
        <Tab label="Register" route="/register" value="/register"
             onActive={this._handleTabActive} />
      </Tabs>
    );
  }
});
