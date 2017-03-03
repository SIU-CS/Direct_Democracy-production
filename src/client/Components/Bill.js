import React from 'react';
import VoteOptions from './VoteOptions';
import BillText from './BillText';
import BillTitle from './BillTitle';
import VoteGraph from './VoteGraph';

class Bill extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      billId: this.props.billId,
      selected: 'none',
      for     : 1,
      against : 1
    }
  }

  onChildChanged(selectedVote){
    var aye = this.state.for + 1;
    var nay = this.state.against + 1;
    if(selectedVote.localeCompare('aye') === 0){
      this.setState({for: aye});
    }else{
      this.setState({against: nay});
    }
    this.setState({selected: selectedVote}, function(){
      //Send Post to DB

      }
    );
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
    if((this.state.selected.localeCompare('none') === 0)){
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
          <VoteGraph for={this.state.for} against={this.state.against}></VoteGraph>
        </div>
      );
    }
  }
}

export default Bill;
