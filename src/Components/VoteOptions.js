import React, { Component } from 'react';
import VoteButton from './VoteButton';

class VoteOptions extends Component {
  render() {
    return (
      <div className="VotingOptions">
	      <VoteButton type={true} />
	      <VoteButton type={false} />
      </div>
    );
  }
}

export default VoteOptions;
