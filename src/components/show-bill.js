'use strict';

import css from '../styles/app';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';
import { connect } from 'react-redux';
import { toggleBillModal } from '../redux/actions';

const {
  Dialog,
  RaisedButton
} = MUI;

let ShowBill = React.createClass({
  propTypes: {
    bill: React.PropTypes.array,
    billModalOpen: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.bool
    ])
  },

  _toggleBillModal() {
    store.dispatch(toggleBillModal());
  },

  render() {
    let { bill, billModalOpen } = this.props;

    return (
      <span>
        <RaisedButton label="Vote!" primary={true} style={css.button}
          onClick={this._toggleBillModal} />
            <span>
            <RaisedButton label="Show Bill" primary={true} style={css.button}
          onClick={this._toggleBillModal} />

            </span>
          <Dialog title="Are you sure you want to vote on Bill Title?" ref="billDialog"
                autoDetectWindowHeight={true} autoScrollBodyContent={true}
                open={billModalOpen} onRequestClose={this._toggleBillModal}>

          <div>
          </div>
          <div><pre>{JSON.stringify(bill, null, 2)}</pre></div>
        </Dialog>
      </span>
    );
  }
});

export default connect(mapStateToProps)(ShowBill);

function mapStateToProps(state) {
  return {
    billModalOpen: state.billModalOpen
  };
}
