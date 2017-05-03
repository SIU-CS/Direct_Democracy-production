'use strict';

import { userLogin } from '../redux/actions';
import { connect } from 'react-redux';
import Register from './register';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';
import css from '../styles/app';
import { toggleBillModal } from '../redux/actions';

const {
  Dialog,
  RaisedButton,
  TextField
} = MUI;

let Login = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    billModalOpen: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.bool
    ])
  },
  _toggleBillModal() {
    store.dispatch(toggleBillModal());
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
      userLogin(user.name, pass.getValue())
    );

    username.clearValue();
    pass.clearValue();
  },
  createDialog() {
    let { billModalOpen } = this.props;
    return(<Dialog title="Create Your Account" ref="registerDialog"
             autoDetectWindowHeight={true} autoScrollBodyContent={true}
             open={billModalOpen} onRequestClose={this._toggleBillModal}>
               <Register/>
             </Dialog>
           );
  },
  render() {
    return (
      <span>
        {this.createDialog()}
        <h3>Login</h3>

        <TextField hintText="" fullWidth={true} type="text"
                   floatingLabelText="Email or Username" ref="username"
                   onEnterKeyDown={this._submitHandler} />

        <TextField hintText="" fullWidth={true} type="password"
                   floatingLabelText="Password" ref="pass"
                   onEnterKeyDown={this._submitHandler} />

        <RaisedButton label="Login" secondary={true} onClick={this._submitHandler} />

        <div style={css.registerText}>
          <a onClick={this._toggleBillModal} >  Not a User? Register Here! </a>
        </div>
      </span>
    );
  }
});

export default connect(mapStateToProps)(Login);

function mapStateToProps(state) {
  return {
    user: state.user,
    billModalOpen: state.billModalOpen
  };
}
