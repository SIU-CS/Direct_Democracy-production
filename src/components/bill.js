'use strict';

import React from 'react';
// import store from '../redux/store';
import VoteButtons from './vote-buttons';
// import VoteGraph from './vote-graph';
import { connect } from 'react-redux';


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

      // if user has not voted
    return (
      <div className='Bill'>
        <h3>
          {selectedBill.title}
        </h3>
        <p>
          {selectedBill.text}
        </p>

        <VoteButtons user={user} selectedBill={selectedBill} />
     </div>
    );

      // // if user has not voted
      // return (
      //         <div className='Bill'>
      //         <h3>
      //         {selectedBill.title}
      //     </h3>
      //         <p>
      //         {selectedBill.billText}
      //     </p>

      //         <VoteGraph selectedBill={selectedBill} />
      //         </div>
      // );
  }
});

export default connect(mapStateToProps)(Bill);

function mapStateToProps(state) {
  return {
    selectedBill: state.selectedBill,
    user: state.user
  };
}
