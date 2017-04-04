'use strict';

import React from 'react';
import store from '../redux/store';
import css from '../styles/app';
import MUI from 'material-ui';
import { connect } from 'react-redux';
import { submitVote, toggleBillModal } from '../redux/actions';

const { Dialog, TextField, RaisedButton } = MUI;

let Bill = React.createClass({
  propTypes: {
    selectedBill: React.PropTypes.object,
    user: React.PropTypes.string,
    billModalOpen: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.bool
    ])

  },
  _toggleBillModal() {
    store.dispatch(toggleBillModal());
  },
  _submitHandler() {
    let { user, pass } = this.refs;
    if (user.getValue().localeCompare('') === 0) {
      console.log('user');
      return;
    }
    if (pass.getValue().localeCompare('') === 0) {
      console.log('pass');
      return;
    }
    // store.dispatch(
    //   registerUser(user.getValue(), pass.getValue())
    // );

    user.clearValue();
    pass.clearValue();
  },

  createDialog() {
    let { user, billModalOpen } = this.props;
    if (user.localeCompare('none') === 0) {
      return(<Dialog title="Log in to vote!" ref="billDialog"
             autoDetectWindowHeight={true} autoScrollBodyContent={true}
             open={billModalOpen} onRequestClose={this._toggleBillModal}>
               <div>
                 <TextField hintText="" fullWidth={true} type="text"
                            floatingLabelText="Email or Username" ref="user"
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
      <div className='Bill'>
            {this.createDialog()}
        <h3>
          {selectedBill.title}
        </h3>
        <p>
          {selectedBill.billText}
        </p>

        <RaisedButton label="For" primary={true} style={css.button}
          onClick={()=>_submitVote(user, selectedBill._id, 1)} />
        <RaisedButton label="Against" primary={true} style={css.button}
          onClick={()=>_submitVote(user, selectedBill._id, 0)} />
      </div>
    );
  }
});

export default connect(mapStateToProps)(Bill);

function mapStateToProps(state) {
  return {
    selectedBill: state.selectedBill,
    user: state.user,
    billModalOpen: state.billModalOpen
  };
}

function _submitVote(user, billId, vote) {
  if (user.localeCompare('none') === 0) {
    store.dispatch(toggleBillModal());
  } else {
    store.dispatch(submitVote(user, billId, vote));
  }
}
