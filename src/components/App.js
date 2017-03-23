import React from 'react';
import Game from './Game';
import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Play Baduk</h2>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
