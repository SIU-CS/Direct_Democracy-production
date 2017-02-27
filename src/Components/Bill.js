import React from 'react';
import VoteOptions from './VoteOptions';
/* import VoteGraph from './VoteGraph';*/

class Bill extends React.Component {
    constructor(props){
        super(props);
        this.state = {selected: 'none'}
    }

    onChildChanged(selectedVote){
        this.setState({selected: selectedVote}, function(){
          //Send Post to DB
        });
    }
  render() {
      // if userLoggedIn && userHasVoted
	  if(this.state.selected.localeCompare('none') === 0){
      return (
        <div className="Bill">
	        <VoteOptions selected='none'
                       callbackParent={(selectedVote)=> this.onChildChanged(selectedVote)}>
          </VoteOptions>
        </div>
      );
    }else{
      return (
        <div>
          <h3> The {this.state.selected}s have it!</h3>
        </div>
      );
    }
  }
}

export default Bill;
