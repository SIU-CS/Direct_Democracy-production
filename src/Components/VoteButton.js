import React from 'react';

class VoteButton extends React.Component {
      //send data

    /*
    *
    *
    *
    *
    *
    *
    *
    *
    *
    */




    constructor(props){
        super(props);
        this.state = {
               label   : this.props.label,
               clicked : this.props.clicked,
               vote    : this.props.vote
          }

        this.clicked = this.clicked.bind(this);
    }

    getInitialState(){
        return({
               label   : this.props.label,
               clicked : this.props.clicked,
               vote    : this.props.vote
          })
    }

  componentDidMount(){
      this.setState({
               label   : this.props.label,
               clicked : this.props.clicked,
               vote    : this.props.vote
          });
  }
  render() {
      if(this.state.label.localeCompare('aye') === 0)
        return (
            <button onClick={this.clicked} >
                <i className="glyphicon glyphicon-thumbs-up"></i>
            </button>
        );
      else
        return (
            <button onClick={this.clicked} >
                <i className="glyphicon glyphicon-thumbs-down"></i>
            </button>
        );
    }

  clicked(){
this.setState({clicked: true}, function () {
    console.log(this.state.clicked);
    console.log(this.state.label);
    /*
    * Pass vote to database
    * this.setState({vote:
    */
});


  }
}

export default VoteButton;
