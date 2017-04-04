'use strict';

import React from 'react';
import css from '../styles/app';

export default React.createClass({
  render() {
    return (
      <div>
            <img src="logo.svg" style={css.logo} height='330' width='100' ></img>
            <h3>Your Vote, Your Voice.</h3>
      </div>
    );
  }
});
