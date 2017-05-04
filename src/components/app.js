'use strict';

import css from '../styles/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../redux/store';
import MUI from 'material-ui';
import NavBar from './nav-bar';
import VoteGraph from './vote-graph';
import React from 'react';
import { connect } from 'react-redux';
import { fetchBills, fetchVotes } from '../redux/actions';

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
	vote: React.PropTypes.array,

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
    store.dispatch(fetchVotes());
},

  render() {
    let { greeting, user, history, location, vote } = this.props;

    return (
      <div>
        <NavBar user={user} history={history} pathname={location.pathname} />

        <Card style={css.appCard}>
          <h2>{greeting}</h2>

          <div>
            {this.props.children}
			<VoteGraph vote={vote} />
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
    bill: state.bill,
	vote: state.vote
  };
}
