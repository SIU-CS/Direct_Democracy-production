import React from 'react';
import VoteOptions from './VoteOptions';
/* import VoteGraph from './VoteGraph';*/

class Bill extends React.Component {
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
