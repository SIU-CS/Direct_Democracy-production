import React from 'react';
import '.././App.css';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
	        <Login />
        </div>
      </div>
    );
  }
}

export default App;