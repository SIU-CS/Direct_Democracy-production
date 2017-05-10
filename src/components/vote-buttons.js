'use strict';

import React from 'react';
import { userLogin } from '../redux/actions';
import store from '../redux/store';
import css from '../styles/app';
import MUI from 'material-ui';
import { connect } from 'react-redux';
import { submitVote, toggleBillModal, getVotes, demographicVotes } from '../redux/actions';

const { Dialog, TextField, RaisedButton } = MUI;

let VoteButtons = React.createClass({
  propTypes: {
    selectedBill: React.PropTypes.object,
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
    console.log(user);
    store.dispatch(
      userLogin(user, pass.getValue())
    );
    // store.dispatch(
    //   logInUser(user.getValue(), pass.getValue())
    // );

    username.clearValue();
    pass.clearValue();
    this._toggleBillModal();
  },

  createDialog() {
    let { user, billModalOpen } = this.props;
    if (user.name.localeCompare('none') === 0) {
      return(<Dialog title="Log in to vote!" ref="billDialog"
             autoDetectWindowHeight={true} autoScrollBodyContent={true}
             open={billModalOpen} onRequestClose={this._toggleBillModal}>
               <div>
                 <TextField hintText="" fullWidth={true} type="text"
                            floatingLabelText="Email or Username" ref="username"
                            onEnterKeyDown={this._submitHandler} />

                 <TextField hintText="" fullWidth={true} type="password"
                            floatingLabelText="Password" ref="pass"
                            onEnterKeyDown={this._submitHandler} />

                 <RaisedButton label="Log In" secondary={true} onClick={this._submitHandler} />

               </div>
             </Dialog>
      );
    }
    // return(<Dialog title="Are you sure you want to vote on Bill Title?" ref="billDialog"
    //        autoDetectWindowHeight={true} autoScrollBodyContent={true}
    //        open={billModalOpen} onRequestClose={this._toggleBillModal}>
    //          <div>

    //          </div>
    //        </Dialog>
    // );
  },


  render() {
    let { selectedBill, user } = this.props;

    if (selectedBill.title.localeCompare('none') === 0) {
      return (<div className='Bill'>
                <h3>Select a bill from the list to vote!</h3>
              </div>
      );
    }
    return (
      <div className='VoteButtons'>
            {this.createDialog()}

        <RaisedButton label="For" primary={true} style={css.button}
          onClick={()=>_submitVote(user, selectedBill._id, 1)} />
        <RaisedButton label="Against" primary={true} style={css.button}
          onClick={()=>_submitVote(user, selectedBill._id, 0)} />
    <RaisedButton label="See Graph" primary={true} style={css.button}
          onClick={()=>getVotes(user, selectedBill._id)} />
    <RaisedButton label="See votes per demographic area" primary={true} style={css.button}
          onClick={()=>demographicVotes(selectedBill._id)} />
      </div>
    );
  }
});

export default connect(mapStateToProps)(VoteButtons);

function mapStateToProps(state) {
  return {
    selectedBill: state.selectedBill,
    user: state.user,
    billModalOpen: state.billModalOpen
  };
}

function _submitVote(user, billId, vote) {
  if (user.name.localeCompare('none') === 0) {
    store.dispatch(toggleBillModal());
  } else {
    store.dispatch(submitVote(user, billId, vote));
  }
}
