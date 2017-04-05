'use strict';

// import { registerUser } from '../redux/actions';
// import store from '../redux/store';
// import MUI from 'material-ui';
import React from 'react';
import { connect } from 'react-redux';

// const {
//   RaisedButton,
//   TextField
// } = MUI;

let Account = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },
  render() {
    let { user } = this.props;
    return (
      <div>
        <h3>Welcome {user.name}!</h3>
      </div>
    );
  }
});

export default connect(mapStateToProps)(Account);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
