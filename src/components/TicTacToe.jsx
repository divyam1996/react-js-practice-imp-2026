import React, { useState } from "react";
import Square from "./Square";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // Handle click on square
  const handleClick = (index) => {
    // stop if already filled or winner exists
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  // Winner logic
  const calculateWinner = (squares) => {
    const patterns = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (let [a, b, c] of patterns) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${isXTurn ? "X" : "O"}`}
      </h2>

      <div className="board">
        {board.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button onClick={resetGame}>Restart</button>
    </div>
  );
}

export default TicTacToe;