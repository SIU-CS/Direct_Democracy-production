import React from 'react';
import VoteOptions from './VoteOptions';
import BillText from './BillText';
import BillTitle from './BillTitle';
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

    var testTitle = "I'm Just a Bill";
    var testText  = "I'm just a bill "
+ "Yes I'm only a bill, "
+ "And I got as far as Capitol Hill. "
+ "Well, now I'm stuck in committee "
+ "And I'll sit here and wait  "
+ "While a few key Congressmen discuss and debate "
+ "Whether they should let me be a law. "
+ "How I hope and pray that they will, "
+ "But today I am still just a bill.";

      // if userLoggedIn && userHasVoted
	  if(this.state.selected.localeCompare('none') === 0){
      return (
        <div className="Bill">
          <BillTitle>
            {testTitle}
          </BillTitle>
          <BillText>
            {testText}
          </BillText>
	        <VoteOptions selected='none'
                       callbackParent={(selectedVote)=> this.onChildChanged(selectedVote)}>
          </VoteOptions>
        </div>
      );
    }else{
      return (
        <div className="Bill">
          <BillTitle>
            {testTitle}
          </BillTitle>
          <BillText>
            {testText}
          </BillText>
          <h3> The {this.state.selected}s have it!</h3>
        </div>
      );
    }
  }
}

export default Bill;
