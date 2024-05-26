import React, { useState } from 'react';
import Square from './square';
import './board.css'

const Board = () => {
  const [player, setPlayer] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false) 

  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const checkWin = (newSquares) => {
    for (let winLine of winCondition) {
      const [a, b, c] = winLine;
      if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) return true;
    }
    return false;
  };

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = [...squares];
    newSquares[i] = player ? 'O' : 'X';
    setSquares(newSquares);

    if (checkWin(newSquares)) setWinner(player ? 'O' : 'X');
    else if (newSquares.indexOf(null) === -1) setTie(true);
    else setPlayer(!player);
  };

  const handleReset = () => {
    setPlayer(true);
    setSquares(Array(9).fill(null));
    setWinner(null)
    setTie(false)
  };

  return (
    <div>
      {player ? <h2>Current Player: O</h2> : <h2>Current Player: X</h2>}
      <div className="board">
        {squares.map((square, i) => (
          <Square 
            key={i} 
            value={square} 
            onClick={() => handleClick(i)} 
            disabled={!!winner || tie}
          />
        ))}
      </div>
      {
        winner 
        ? <h3 className='win'>Player {winner} wins</h3>
        : tie 
        ? <h3 className='win'>It's a tie</h3>
        : <></>
      }
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Board;
