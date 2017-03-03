import React from 'react';

class BillText extends React.Component {
	render() {
		return (
      <div className="BillText">
        <p>{this.props.billText}</p>
      </div>
		);
	}
}

export default BillText;
