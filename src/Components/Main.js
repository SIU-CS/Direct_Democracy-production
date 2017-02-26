import React from 'react';
import '.././Main.css';
import Bill from './Bill';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-header">
        </div>
	  <Bill />
      </div>
    );
  }
}

export default Main;
