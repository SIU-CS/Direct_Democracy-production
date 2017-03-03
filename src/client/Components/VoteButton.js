import React from 'react';

class VoteButton extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			label		: this.props.label,
			clicked : this.props.clicked,
		}
		this.clicked = this.clicked.bind(this);
	}

	clicked(){
	  this.setState({clicked: true}, function(){
      this.props.callbackParent(this.state.clicked, this.state.label);
						/*
						 * Pass vote to database
						 * this.setState({vote:
						 */
		  }
    );
	}

  render() {
	  if(this.state.label.localeCompare('aye') === 0){
			return (
				<button className="VoteButton" onClick={this.clicked}>
				  <i className="glyphicon glyphicon-thumbs-up"></i>
				</button>
			);
	  }else{
			return (
				<button className="VoteButton" onClick={this.clicked}>
					<i className="glyphicon glyphicon-thumbs-down"></i>
				</button>
		  );
    }
  }
}

export default VoteButton;
