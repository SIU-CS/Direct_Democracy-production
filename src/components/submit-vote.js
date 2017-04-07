'use strict';

import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';
import { submitVote } from '../redux/actions';

const { RaisedButton } = MUI;

export default React.createClass({
  styles: {
    float: 'right'
  },

  _submitVoteHandler() {
    store.dispatch(submitVote());
  },

  render() {
    return (
        <RaisedButton label="Delete all People" style={this.styles}
                      onClick={this._submitVoteHandler} />
    );
  }
});
