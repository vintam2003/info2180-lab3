
window.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('#board > div');
  squares.forEach((sq) => sq.classList.add('square'));

  
  let currentPlayer = 'X';
  const boardState = Array(9).fill(null);
  const statusDiv = document.getElementById('status');

  
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => square.classList.add('hover'));
    square.addEventListener('mouseout', () => square.classList.remove('hover'));
  });

  
  const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  function checkWinner() {
    for (const [a,b,c] of winningCombos) {
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        const winner = boardState[a];
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add('you-won');
        return true;
      }
    }
    return false;
  }

  
  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      
      if (boardState[index] !== null || checkWinner()) return;

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      boardState[index] = currentPlayer;

      if (!checkWinner()) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
  });

  
  const resetBtn = document.querySelector('.btn'); 
  const defaultStatus = 'Move your mouse over a square and click to play an X or an O.';

  resetBtn.addEventListener('click', () => {
    
    squares.forEach((square, i) => {
      square.textContent = '';
      square.classList.remove('X', 'O', 'hover');
      boardState[i] = null;
    });

  
    statusDiv.textContent = defaultStatus;
    statusDiv.classList.remove('you-won');
    currentPlayer = 'X';
  });
});


