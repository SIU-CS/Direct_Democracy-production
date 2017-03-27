'use strict';

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
    let { bill } = this.props;
    store.dispatch(toggleBillModal());
    bill.map((obj) => {
      console.log(obj.name);
    });
    //  console.log(JSON.stringify(bill));
    //  console.log(JSON.stringify(bill, null, 2));
  },

  render() {
    let { bill, billModalOpen } = this.props;

    return (
      <span>
        <RaisedButton label="Show Bill" primary={true}
                      onClick={this._toggleBillModal} />

        <Dialog title="Bill in the Redux Store" ref="billDialog"
                autoDetectWindowHeight={true} autoScrollBodyContent={true}
                open={billModalOpen} onRequestClose={this._toggleBillModal}>
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
