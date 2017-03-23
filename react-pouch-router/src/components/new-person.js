'use strict';

import { upsertPerson } from '../redux/actions';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';

const {
  RaisedButton,
  TextField
} = MUI;

export default React.createClass({
  _submitHandler() {
    let { newPersonName } = this.refs;

    store.dispatch(
      upsertPerson(newPersonName.getValue())
    );

    newPersonName.clearValue();
  },

  render() {
    return (
      <div>
        <h3>New Person</h3>

        <TextField hintText="Enter a full Name" fullWidth={true}
                   floatingLabelText="Name" ref="newPersonName"
                   onEnterKeyDown={this._submitHandler} />

        <RaisedButton label="Create" secondary={true} onClick={this._submitHandler} />
      </div>
    );
  }
});
