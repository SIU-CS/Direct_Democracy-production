'use strict';

import React from 'react';
import store from '../redux/store';
import css from '../styles/app';
import MUI from 'material-ui';
import { connect } from 'react-redux';
import { submitVote } from '../redux/actions';

const { RaisedButton } = MUI;

let Bill = React.createClass({
  propTypes: {
    selectedBill: React.PropTypes.object,
    user: React.PropTypes.string
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
    user: state.user
  };
}

function _submitVote(user, billId, vote) {
  store.dispatch(
    submitVote(user, billId, vote)
  );
}
