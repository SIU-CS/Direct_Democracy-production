import React from 'react';
import VoteButton from './VoteButton';

class VoteOptions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked : false,
            selected: this.props.selected
        }
    }

    onChildChanged(newState, selectedVote){
        this.setState({ checked  : newState,
                        selected : selectedVote}, function () {
            this.props.callbackParent(this.state.selected);
        }
            )
    }

  render() {
    return (
      <div className="VotingOptions">
	      <VoteButton label='aye'
                    clicked={this.state.clicked}
                    callbackParent={(newState, selectedVote)=> this.onChildChanged(newState, selectedVote)}
        />

	      <VoteButton label='nay'
                    clicked={this.state.clicked}
                    callbackParent={(newState, selectedVote)=> this.onChildChanged(newState, selectedVote)}
        />
      </div>
    );
  }
}

export default VoteOptions;
