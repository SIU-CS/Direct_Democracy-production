import React, { Component } from 'react';

class VoteButton extends Component {
render() {
var type = this.props.type;
if(type){
  return (
      <button onClick={this.clicked} >true</button>
  );
}else{
  return (
      <button onClick={this.clicked} >false</button>
  );

}

}

    clicked(){
        console.log("Button Click!");
    }
}

export default VoteButton;
