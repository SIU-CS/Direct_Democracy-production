'use strict';

import React from 'react';
import Bill from './bill';
import { connect } from 'react-redux';
import css from '../styles/app';
import store from '../redux/store';
import { selectBill } from '../redux/actions';

let BillList = React.createClass({
  propTypes: {
    bill: React.PropTypes.array,
    billSelected: React.PropTypes.object
  },

  render() {
    return(
      <span>
        <h3>Bill List</h3>
            <div className='container-full'>
        <div className="list-group" style={css.list}>
          {this.createBillList()}
        </div>
            <Bill style={css.bill} />
            </div>
      </span>
    );
  },
  createBillList() {
    let { bill } = this.props;
    if (!bill) {
      return 'Looks like there\'s nothing here!';
    }
    return bill.map(function (item) {
      return(<button key={item._id} type="button" className="list-group-item"
             onClick={()=>selectedBill(item)} >
               {item.title}
             </button>);
    });
  }
});

export default connect(mapStateToProps)(BillList);

function mapStateToProps(state) {
  return {
    bill: state.bill,
    billSelected: state.billSelected
  };
}

function selectedBill(entry) {
  store.dispatch(selectBill(entry));
}
