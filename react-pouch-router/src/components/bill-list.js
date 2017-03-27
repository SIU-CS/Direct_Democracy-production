'use strict';

import React from 'react';
import { connect } from 'react-redux';

let BillList = React.createClass({
  propTypes: {
    bill: React.PropTypes.array
  },

  // _logBill() {
  //     let { bill } = this.props;
  //     bill.map((obj) => {
  //         //    console.log(obj);
  //         console.log(obj.name);
  //     });
  //     //     console.log(JSON.stringify(bill));
  //     //     console.log(JSON.stringify(bill, null, 2));
  // },

  render() {
    // let { bill } = this.props;
    // bill.map(function (item) {
    //   console.log(item.name);
    // });

    return(
      <span>
            <h3>Bill List</h3>
        <ul>
            {this.createBillList()}
        </ul>
      </span>
    );
  },
  createBillList() {
    let { bill } = this.props;
    if (!bill) {
      return 'Looks like there\'s nothing here!';
    }
    return bill.map(function (item) {
      return(<li key={item._id}>{item.name}</li>);
    });
  }
});

export default connect(mapStateToProps)(BillList);

function mapStateToProps(state) {
  return {
    bill: state.bill
  };
}
