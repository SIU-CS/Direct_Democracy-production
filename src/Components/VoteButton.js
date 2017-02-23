import React, { Component } from 'react';

class VoteButton extends Component {
render() {
var type = this.props.type;
if(type){
  return (
<div>Yah</div>
  );
}else{
  return (
<div>Nah</div>
  );

}

}
}

export default VoteButton;
