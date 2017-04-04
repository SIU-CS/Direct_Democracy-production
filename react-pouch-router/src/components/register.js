'use strict';

import { registerUser } from '../redux/actions';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';

const {
  RaisedButton,
  TextField
} = MUI;

export default React.createClass({
  _submitHandler() {
    let { user, pass, confirm } = this.refs;
    if (user.getValue().localeCompare('') === 0) {
      // console.log('user');
      return;
    }
    if (pass.getValue().localeCompare('') === 0) {
      // console.log('pass');
      return;
    }
    if (confirm.getValue().localeCompare('') === 0) {
      // console.log('user');
      return;
    }

    if (pass.getValue().localeCompare(confirm.getValue()) === 0) {
      store.dispatch(
        registerUser(user.getValue(), pass.getValue())
      );

      user.clearValue();
      pass.clearValue();
      confirm.clearValue();
    }
  },

  render() {
    return (
      <div>
        <h3>Registration</h3>

        <TextField hintText="" fullWidth={true} type="text"
                   floatingLabelText="Email or Username" ref="user"
                   onEnterKeyDown={this._submitHandler} />

        <TextField hintText="" fullWidth={true} type="password"
                   floatingLabelText="Password" ref="pass"
                   onEnterKeyDown={this._submitHandler} />

        <TextField hintText="" fullWidth={true} type="password"
                   floatingLabelText="Confirm Password" ref="confirm"
                   onEnterKeyDown={this._submitHandler} />

        <RaisedButton label="Create Account" secondary={true} onClick={this._submitHandler} />
      </div>
    );
  }
});
