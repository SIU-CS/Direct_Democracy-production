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
    let { user, pass } = this.refs;

    store.dispatch(
      registerUser(user.getValue(), pass.getValue())
    );

    user.clearValue();
    pass.clearValue();
  },

  render() {
    return (
      <div>
        <h3>Registration</h3>

        <TextField hintText="" fullWidth={true}
                   floatingLabelText="Email or Username" ref="user"
                   onEnterKeyDown={this._submitHandler} />

        <TextField hintText="" fullWidth={true}
                   floatingLabelText="Password" ref="pass"
                   onEnterKeyDown={this._submitHandler} />

        <RaisedButton label="Create Account" secondary={true} onClick={this._submitHandler} />
      </div>
    );
  }
});
