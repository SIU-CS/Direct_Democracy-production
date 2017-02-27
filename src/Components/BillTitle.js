import React from 'react';

class BillTitle extends React.Component {

		constructor(props){
				super(props);
				this.state = {
						title : this.props.children,
				}

		}

		render() {
						return (
                  <h3>{this.state.title}</h3>
						);
		}

}

export default BillTitle;
