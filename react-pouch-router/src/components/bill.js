'use strict';

import React from 'react';
import css from '../styles/app';
import MUI from 'material-ui';
import { connect } from 'react-redux';

const { RaisedButton } = MUI;

let Bill = React.createClass({
  propTypes: {
    selectedBill: React.PropTypes.object
  },

  render() {
    let { selectedBill } = this.props;
    if (selectedBill.title.localeCompare('none') === 0) {
      return (<div className='Bill'>
                <h3>Select a bill from the list to vote!</h3>
              </div>
      );
    }

    let testText = selectedBill.billText;
	/*'I\'m just a bill '
+ 'Yes I\'m only a bill, '
+ 'And I got as far as Capitol Hill. '
+ 'Well, now I\'m stuck in committee '
+ 'And I\'ll sit here and wait  '
+ 'While a few key Congressmen discuss and debate '
+ 'Whether they should let me be a law. '
+ 'How I hope and pray that they will, '
+ 'But today I am still just a bill.';*/
    return (
      <div className='Bill'>
        <h3>
          {selectedBill.title}
        </h3>
        <p>
          {testText}
        </p>

        <RaisedButton label="For" primary={true} style={css.button}
        onClick={()=>_submitVote('For')} />
        <RaisedButton label="Against" primary={true} style={css.button}
        onClick={()=>_submitVote('Against')} />
      </div>
    );
  }
});

export default connect(mapStateToProps)(Bill);

function mapStateToProps(state) {
  return {
    selectedBill: state.selectedBill
  };
}

function _submitVote(x) {
  console.log(x);
}
