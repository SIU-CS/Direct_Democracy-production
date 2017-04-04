'use strict';

import MUI from 'material-ui';
import React from 'react';
import { connect } from 'react-redux';

const { Tabs, Tab } = MUI;

let NavBar = React.createClass({
  propTypes: {
    history: React.PropTypes.object,
    user: React.PropTypes.string,
    pathname: React.PropTypes.string
  },

  _handleTabActive(tab) {
    let { route } = tab.props;
    let { history } = this.props;

    history.pushState(null, route);
  },
  createAccountNav() {
    // let { user } = this.props;
    // if (!user || user.localeCompare('none') === 0) {
    //   return(<Tab label="Login" route="/login" value="/login"
    //            onActive={this._handleTabActive} />
    //   );
    // }
    return(<Tab label="Account" route="/account" value="/account"
             onActive={this._handleTabActive} />
    );
  },

  render() {
    let { pathname } = this.props;
    return (
      <Tabs value={pathname}>
        <Tab label="Index" route="/" value="/"
             onActive={this._handleTabActive} />
        <Tab label="Bills" route="/bills" value="/bills"
             onActive={this._handleTabActive} />
        <Tab label="About" route="/about" value="/about"
             onActive={this._handleTabActive} />
        {this.createAccountNav()}
      </Tabs>
    );
  }
});

export default connect(mapStateToProps)(NavBar);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
