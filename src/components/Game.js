import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      blackIsNext: true,
    };
  }

  handleClick(i) {
    var history = this.state.history.slice(0, this.state.stepNumber + 1);
    var current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i]) {
      return;
    }

    squares[i] = this.state.blackIsNext ?
      <Stone stoneClass="Stone Stone-black" /> :
      <Stone stoneClass="Stone Stone-white" />;

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      blackIsNext: !this.state.blackIsNext,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      blackIsNext: (step % 2) ? false : true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    let nextStone = this.state.blackIsNext ?
        <Stone stoneClass="Stone Stone-black" /> :
        <Stone stoneClass="Stone Stone-white" />;

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    return (
      <div className="Game">
        <div>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="Game-info">
          <div>Next Move: {nextStone}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

function Stone(props) {
  return (
    <div className={props.stoneClass}></div>
  );
}

export default Game;
