import React from 'react';
import '.././App.css';
import Bill from './Bill';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
	  <Bill />
      </div>
    );
  }
}

export default App;
