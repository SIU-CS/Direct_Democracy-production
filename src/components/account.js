'use strict';

// import { registerUser } from '../redux/actions';
// import store from '../redux/store';
// import MUI from 'material-ui';
import React from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';
import css from '../styles/app';
import { userChangePWD, getUsersVotes } from '../redux/actions';
import MUI from 'material-ui';

const {
  RaisedButton,
  TextField
} = MUI;

let Account = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },
  _submitHandler() {
    let { user } = this.props;
    let { username, pass } = this.refs;

    store.dispatch(
      userChangePWD(user.name, pass.getValue())
    );

    username.clearValue();
    pass.clearValue();
  },

  render() {
    let { user } = this.props;
    return (
      <div>
        <h3>Welcome {user.name}!</h3>


        <TextField hintText="" fullWidth={true} type="password"
                   floatingLabelText="Change password" ref="pass"
                   onEnterKeyDown={this._submitHandler} />
        <RaisedButton label="Submit changes" secondary={true} onClick={this._submitHandler} />

    <RaisedButton label="See your past votes" primary={true} style={css.button}
          onClick={()=>getUsersVotes(user)} />


      </div>
    );
  }
});

export default connect(mapStateToProps)(Account);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
