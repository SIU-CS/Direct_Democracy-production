import React, { Component } from 'react';
import VoteOptions from './VoteOptions';
/* import VoteGraph from './VoteGraph';*/

class Bill extends Component {
  render() {
      // if userLoggedIn && userHasVoted
	    //     <VoteOptions />
      // else
	    //     <VoteGraph BillId={this.props.billId} />
    return (
      <div className="Bill">
	         <VoteOptions />
      </div>
    );
  }
}

export default Bill;
