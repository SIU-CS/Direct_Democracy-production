'use strict';

// import { registerUser } from '../redux/actions';
import { logInUser } from '../redux/actions';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';
import css from '../styles/app';

const {
  RaisedButton,
  TextField
} = MUI;

export default React.createClass({
  _submitHandler() {
    let { user, pass } = this.refs;

    if (user.getValue().localeCompare('') === 0) {
        // console.log('user');
        return;
    }
    if (pass.getValue().localeCompare('') === 0) {
        // console.log('pass');
        return;
    }

    store.dispatch(
      logInUser(user.getValue(), pass.getValue())
    );

    user.clearValue();
    pass.clearValue();
  },

  render() {
    return (
      <div>
        <h3>Login</h3>

        <TextField hintText="" fullWidth={true} type="text"
                   floatingLabelText="Email or Username" ref="user"
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
