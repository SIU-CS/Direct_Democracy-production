import React from 'react';

class BillText extends React.Component {

		constructor(props){
				super(props);
				this.state = {
						billText: this.props.children,
				}
		}

		render() {
						return (
                <div className="BillText">
                  <p>{this.state.billText}</p>
                </div>
						);
		}

		/* clicked(){
			 this.setState(, function(){
     *         this.props.callbackParent(this.state.clicked, this.state.label);*/
						/*
						 * Pass vote to database
						 * this.setState({vote:
						 */
		/* });
		   }*/
}

export default BillText;
