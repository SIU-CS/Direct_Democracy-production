import React from 'react';
import VoteButton from './VoteButton';

class VoteOptions extends React.Component {
  render() {
    return (
      <div className="VotingOptions">
	      <VoteButton label='aye'  clicked={false} />
	      <VoteButton label='nay' clicked={false} />
      </div>
    );
  }
}

export default VoteOptions;
