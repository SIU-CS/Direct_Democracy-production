'use strict';

import css from '../styles/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../redux/store';
import MUI from 'material-ui';
import NavBar from './nav-bar';
import React from 'react';
import { connect } from 'react-redux';
import { fetchBills } from '../redux/actions';

const {
  Card,
  Styles
} = MUI;

const { ThemeManager } = Styles;

injectTapEventPlugin();

let App = React.createClass({
  propTypes: {
    children: React.PropTypes.object,
    greeting: React.PropTypes.string,
    user: React.PropTypes.object,
    history: React.PropTypes.object,
    location: React.PropTypes.object
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },

  componentDidMount() {
    store.dispatch(fetchBills());
  },

  render() {
    let { greeting, user, history, location } = this.props;

    return (
      <div>
        <NavBar user={user} history={history} pathname={location.pathname} />

        <Card style={css.appCard}>
          <h2>{greeting}</h2>

          <div>
            {this.props.children}
          </div>
        </Card>
      </div>
    );
  }
});

export default connect(mapStateToProps)(App);

function mapStateToProps(state) {
  return {
    greeting: state.greeting,
    billSelected: state.billSelected,
    bill: state.bill
  };
}
