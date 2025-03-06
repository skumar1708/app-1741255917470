import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameBoard from '../components/GameBoard';
import PlayerIndicator from '../components/PlayerIndicator';
import ResetButton from '../components/ResetButton';

function Home() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] || winner) return;
    const newBoard = board.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? currentPlayer : cell
      )
    );
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board) => {
    // Implement winner checking logic here
    return null;
  };

  const resetGame = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div>
      <Header />
      <PlayerIndicator currentPlayer={currentPlayer} />
      <GameBoard board={board} onClick={handleClick} />
      {winner && <p>Winner: {winner}</p>}
      <ResetButton onReset={resetGame} />
      <Footer />
    </div>
  );
}

export default Home;