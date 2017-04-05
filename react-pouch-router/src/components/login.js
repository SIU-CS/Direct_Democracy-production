'use strict';

// import { registerUser } from '../redux/actions';
import { userLogin } from '../redux/actions';
import { connect } from 'react-redux';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';
import css from '../styles/app';

const {
  RaisedButton,
  TextField
} = MUI;

let Login = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },
  _submitHandler() {
    let { user } = this.props;
    let { username, pass } = this.refs;

    if (username.getValue().localeCompare('') === 0) {
      // console.log('user');
      return;
    }
    if (pass.getValue().localeCompare('') === 0) {
      // console.log('pass');
      return;
    }
    user.name = username.getValue();
    store.dispatch(
        userLogin(user, pass.getValue())
    );

    username.clearValue();
    pass.clearValue();
  },

  render() {
    return (
      <div>
        <h3>Login</h3>

        <TextField hintText="" fullWidth={true} type="text"
                   floatingLabelText="Email or Username" ref="username"
                   onEnterKeyDown={this._submitHandler} />

        <TextField hintText="" fullWidth={true} type="password"
                   floatingLabelText="Password" ref="pass"
                   onEnterKeyDown={this._submitHandler} />

        <RaisedButton label="Login" secondary={true} onClick={this._submitHandler} />
        <div style={css.registerText}>
            <a href="/#/register">Not a user? Register here!</a>
        </div>
      </div>
    );
  }
});

export default connect(mapStateToProps)(Login);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
